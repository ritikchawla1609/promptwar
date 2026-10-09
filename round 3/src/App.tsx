import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mission, PromptAttempt, EvaluationResult } from './types/frameZero';
import { MISSIONS } from './data/missions';
import { DirectorIntro } from './components/frameZero/DirectorIntro';
import { MissionSelect } from './components/frameZero/MissionSelect';
import { DirectorWorkspace } from './components/frameZero/DirectorWorkspace';
import { DirectorResults } from './components/frameZero/DirectorResults';
import {
  AuthoritativeClockState,
  fetchAuthoritativeClockAPI,
  calculateSynchronizedRemaining,
  submitDirectorCutToBackend,
} from './utils/authoritativeClock';
import { evaluateDirectorPrompt } from './engine/directorEvaluator';

type ScreenState = 'INTRO' | 'SELECT' | 'WORKSPACE' | 'RESULTS';

export const App: React.FC = () => {
  // Screen state machine
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(() => {
    const saved = localStorage.getItem('framezero_screen');
    if (saved === 'SELECT' || saved === 'WORKSPACE' || saved === 'RESULTS') {
      return saved as ScreenState;
    }
    return 'INTRO';
  });

  // Director identity
  const [directorName, setDirectorName] = useState<string>(() => {
    return localStorage.getItem('framezero_director') || '';
  });

  // Current active mission
  const [selectedMission, setSelectedMission] = useState<Mission | null>(() => {
    const savedId = localStorage.getItem('framezero_mission_id');
    if (savedId) {
      return MISSIONS.find(m => m.id === savedId) || MISSIONS[0];
    }
    return null;
  });

  // Attempts and evaluation
  const [attempts, setAttempts] = useState<PromptAttempt[]>(() => {
    try {
      const saved = localStorage.getItem('framezero_attempts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [finalEvaluation, setFinalEvaluation] = useState<EvaluationResult | null>(() => {
    try {
      const saved = localStorage.getItem('framezero_final_eval');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [bestTake, setBestTake] = useState<PromptAttempt | null>(() => {
    try {
      const saved = localStorage.getItem('framezero_best_take');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Authoritative clock state & drift compensation
  const [serverClock, setServerClock] = useState<AuthoritativeClockState | null>(null);
  const serverOffsetRef = useRef<number>(0);
  const [syncedSeconds, setSyncedSeconds] = useState<number>(720);
  const autoSubmittedRef = useRef<boolean>(false);

  // Poll authoritative clock every 3 seconds
  useEffect(() => {
    let mounted = true;

    const pollClock = async () => {
      const clock = await fetchAuthoritativeClockAPI();
      if (!mounted) return;
      if (clock && clock.success) {
        setServerClock(clock);
        const serverEpoch = Date.parse(clock.serverTime);
        if (!isNaN(serverEpoch)) {
          serverOffsetRef.current = serverEpoch - Date.now();
        }
      }
    };

    pollClock();
    const clockInterval = setInterval(pollClock, 3000);
    return () => {
      mounted = false;
      clearInterval(clockInterval);
    };
  }, []);

  // Update remaining seconds tick every 1000ms
  useEffect(() => {
    const tickInterval = setInterval(() => {
      if (serverClock) {
        const remaining = calculateSynchronizedRemaining(serverClock, serverOffsetRef.current);
        setSyncedSeconds(remaining);
      }
    }, 1000);

    return () => clearInterval(tickInterval);
  }, [serverClock]);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('framezero_screen', currentScreen);
  }, [currentScreen]);

  useEffect(() => {
    if (directorName) {
      localStorage.setItem('framezero_director', directorName);
    }
  }, [directorName]);

  useEffect(() => {
    if (selectedMission) {
      localStorage.setItem('framezero_mission_id', selectedMission.id);
    } else {
      localStorage.removeItem('framezero_mission_id');
    }
  }, [selectedMission]);

  useEffect(() => {
    localStorage.setItem('framezero_attempts', JSON.stringify(attempts));
  }, [attempts]);

  useEffect(() => {
    if (finalEvaluation) {
      localStorage.setItem('framezero_final_eval', JSON.stringify(finalEvaluation));
    } else {
      localStorage.removeItem('framezero_final_eval');
    }
  }, [finalEvaluation]);

  useEffect(() => {
    if (bestTake) {
      localStorage.setItem('framezero_best_take', JSON.stringify(bestTake));
    } else {
      localStorage.removeItem('framezero_best_take');
    }
  }, [bestTake]);

  const handleSelectMission = (mission: Mission) => {
    setSelectedMission(mission);
    setAttempts([]);
    setFinalEvaluation(null);
    setBestTake(null);
    autoSubmittedRef.current = false;
    setCurrentScreen('WORKSPACE');
  };

  const handleFinishWorkspace = useCallback((
    allAttempts: PromptAttempt[],
    evalResult: EvaluationResult,
    best: PromptAttempt
  ) => {
    setAttempts(allAttempts);
    setFinalEvaluation(evalResult);
    setBestTake(best);
    setCurrentScreen('RESULTS');

    // Authoritative submission to Prompt War central backend
    const activeMission = selectedMission || MISSIONS[0];
    submitDirectorCutToBackend({
      teamCode: directorName || 'ANONYMOUS_DIRECTOR',
      score: evalResult.totalScore,
      prompt: best.prompt,
      metrics: {
        missionId: activeMission.id,
        missionTitle: activeMission.title,
        japaneseTitle: activeMission.japaneseTitle,
        categoryScores: evalResult.categoryScores,
        wordCount: evalResult.promptWordCount,
        directorRank: evalResult.directorRank,
        totalTakes: allAttempts.length,
        submittedAt: new Date().toISOString(),
      },
    });
  }, [directorName, selectedMission]);

  // Synchronized round cutoff enforcement
  useEffect(() => {
    if (currentScreen !== 'WORKSPACE' || autoSubmittedRef.current) return;

    const isExpired = serverClock?.status === 'COMPLETED' || (serverClock?.status === 'LIVE' && syncedSeconds <= 0);

    if (isExpired) {
      autoSubmittedRef.current = true;
      const activeMission = selectedMission || MISSIONS[0];

      if (attempts.length > 0) {
        // Pick best take among attempts
        let best = attempts[0];
        let maxScore = -1;
        for (const att of attempts) {
          if (att.evaluation && att.evaluation.totalScore > maxScore) {
            maxScore = att.evaluation.totalScore;
            best = att;
          }
        }
        handleFinishWorkspace(attempts, best.evaluation || finalEvaluation!, best);
      } else {
        // Default evaluation if no takes recorded before buzzer
        const defaultEval = evaluateDirectorPrompt('Scene vision locked at deadline cutoff.', activeMission);
        const fallbackAttempt: PromptAttempt = {
          attemptNumber: 1,
          prompt: 'Scene vision locked at deadline cutoff.',
          timestamp: new Date().toLocaleTimeString(),
          evaluation: defaultEval,
        };
        handleFinishWorkspace([fallbackAttempt], defaultEval, fallbackAttempt);
      }
    }
  }, [currentScreen, serverClock?.status, syncedSeconds, attempts, selectedMission, finalEvaluation, handleFinishWorkspace]);

  const handleDirectAnother = () => {
    setSelectedMission(null);
    setAttempts([]);
    setFinalEvaluation(null);
    setBestTake(null);
    autoSubmittedRef.current = false;
    setCurrentScreen('SELECT');
  };

  const handleRestart = () => {
    setCurrentScreen('INTRO');
  };

  // Render current screen
  if (currentScreen === 'INTRO') {
    return (
      <DirectorIntro
        directorName={directorName}
        onDirectorNameChange={setDirectorName}
        serverClock={serverClock}
        remainingSeconds={syncedSeconds}
        serverOffset={serverOffsetRef.current}
        onEnterStudio={() => {
          if (!directorName.trim()) {
            setDirectorName('Director ' + Math.floor(100 + Math.random() * 900));
          }
          setCurrentScreen('SELECT');
        }}
      />
    );
  }

  if (currentScreen === 'SELECT') {
    return (
      <MissionSelect
        directorName={directorName || 'Director 01'}
        serverClock={serverClock}
        remainingSeconds={syncedSeconds}
        onSelectMission={handleSelectMission}
        onBackToIntro={handleRestart}
      />
    );
  }

  if (currentScreen === 'WORKSPACE') {
    const mission = selectedMission || MISSIONS[0];
    return (
      <DirectorWorkspace
        mission={mission}
        directorName={directorName || 'Director 01'}
        serverClock={serverClock}
        remainingSeconds={syncedSeconds}
        onFinish={handleFinishWorkspace}
        onExit={() => setCurrentScreen('SELECT')}
      />
    );
  }

  if (currentScreen === 'RESULTS') {
    const mission = selectedMission || MISSIONS[0];
    const best = bestTake || attempts[0] || {
      attemptNumber: 1,
      prompt: 'Unspecified prompt direction.',
      timestamp: new Date().toLocaleTimeString(),
      evaluation: finalEvaluation || {
        totalScore: 50,
        categoryScores: {
          elements: { name: 'Scene Elements', earned: 15, max: 35, percentage: 43 },
          emotion: { name: 'Emotional Resonance', earned: 10, max: 20, percentage: 50 },
          composition: { name: 'Composition & Camera', earned: 10, max: 20, percentage: 50 },
          lighting: { name: 'Lighting & Contrast', earned: 8, max: 15, percentage: 53 },
          consistency: { name: 'Contradiction & Flow', earned: 7, max: 10, percentage: 70 },
        },
        satisfiedRequirements: [],
        missingRequirements: [],
        detectedContradictions: [],
        feedbackNotes: ['Review production parameters.'],
        directorRank: 'Apprentice Director',
        promptWordCount: 20,
        isLocked: true
      }
    };

    const finalEval = finalEvaluation || best.evaluation;

    return (
      <DirectorResults
        mission={mission}
        directorName={directorName || 'Director 01'}
        attempts={attempts.length > 0 ? attempts : [best]}
        finalEvaluation={finalEval}
        bestTake={best}
        onDirectAnother={handleDirectAnother}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <DirectorIntro
      directorName={directorName}
      onDirectorNameChange={setDirectorName}
      serverClock={serverClock}
      remainingSeconds={syncedSeconds}
      serverOffset={serverOffsetRef.current}
      onEnterStudio={() => {
        if (!directorName.trim()) {
          setDirectorName('Director ' + Math.floor(100 + Math.random() * 900));
        }
        setCurrentScreen('SELECT');
      }}
    />
  );
};

export default App;
