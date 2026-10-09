import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  MISSION_METADATA, 
  INTELLIGENCE_RECORDS, 
  INITIAL_OBJECTIVES 
} from './data/records';
import { parsePromptIntent } from './engine/intentParser';
import { retrieveRelevantRecords } from './engine/retrievalEngine';
import { generateIntelligenceResponse } from './engine/responseGenerator';
import { calculateLiveScore } from './engine/scoringEngine';
import { 
  initializeTimer, 
  startTimer, 
  pauseTimer, 
  resumeTimer, 
  adjustTimer, 
  resetTimer, 
  calculateRemainingSeconds,
  fetchAuthoritativeClockAPI,
  calculateSynchronizedRemaining,
  API_BASE
} from './utils/timer';
import { exportSessionToCSV } from './utils/csvExport';

import ScreenIntro from './components/ScreenIntro';
import ScreenWorkspace from './components/ScreenWorkspace';
import RecordViewer from './components/RecordViewer';
import PromptHistoryModal from './components/PromptHistoryModal';
import HostControlsModal from './components/HostControlsModal';
import ScreenSubmission from './components/ScreenSubmission';
import ScreenResults from './components/ScreenResults';
import BlackboxBriefingModal from './components/BlackboxBriefingModal';

const STORAGE_SESSION_KEY = 'blackbox_session_v2';

export default function App() {
  // Navigation: 'INTRO' | 'WORKSPACE' | 'SUBMISSION' | 'RESULTS'
  const [currentScreen, setCurrentScreen] = useState('INTRO');
  const [teamName, setTeamName] = useState('');

  // Objectives
  const [objectives, setObjectives] = useState(INITIAL_OBJECTIVES);
  const [activeObjectiveIndex, setActiveObjectiveIndex] = useState(0);

  // Investigation Data
  const [promptHistory, setPromptHistory] = useState([]);
  const [lastResponse, setLastResponse] = useState(null);
  const [discoveredEvidence, setDiscoveredEvidence] = useState([]);

  // Final Submission & Results
  const [submissionData, setSubmissionData] = useState(null);
  const [scoreData, setScoreData] = useState(() => calculateLiveScore([], []));
  const [isSolutionRevealed, setIsSolutionRevealed] = useState(false);

  // Authoritative Synchronized Clock State
  const [serverClock, setServerClock] = useState(null);
  const serverOffsetRef = useRef(0);

  // Timer State
  const [timerState, setTimerState] = useState(() => initializeTimer(MISSION_METADATA.defaultDurationSeconds));
  const timerIntervalRef = useRef(null);
  const startTimeRef = useRef(null);

  // Modals & Drawers
  const [isRecordsOpen, setIsRecordsOpen] = useState(false);
  const [recordViewerTargetId, setRecordViewerTargetId] = useState(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isHostControlsOpen, setIsHostControlsOpen] = useState(false);
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);

  // Restore session from localStorage if exists
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_SESSION_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.teamName) setTeamName(saved.teamName);
        if (saved.currentScreen) setCurrentScreen(saved.currentScreen);
        if (saved.promptHistory) setPromptHistory(saved.promptHistory);
        if (saved.lastResponse) setLastResponse(saved.lastResponse);
        if (saved.discoveredEvidence) setDiscoveredEvidence(saved.discoveredEvidence);
        if (saved.activeObjectiveIndex !== undefined) setActiveObjectiveIndex(saved.activeObjectiveIndex);
        if (saved.submissionData) setSubmissionData(saved.submissionData);
        if (saved.scoreData) setScoreData(saved.scoreData);
        if (saved.isSolutionRevealed) setIsSolutionRevealed(saved.isSolutionRevealed);
      }
    } catch (e) {
      console.warn('Could not restore session', e);
    }
  }, []);

  // Continuous Authoritative Clock Sync (polls every 3 seconds)
  useEffect(() => {
    let mounted = true;
    const syncClock = async () => {
      const data = await fetchAuthoritativeClockAPI();
      if (!mounted || !data) return;
      if (data.serverTime) {
        serverOffsetRef.current = Date.parse(data.serverTime) - Date.now();
      }
      setServerClock(data);

      const rem = calculateSynchronizedRemaining(data, serverOffsetRef.current);

      if (data.status === 'LIVE') {
        setTimerState(prev => ({
          ...prev,
          totalDuration: data.durationSeconds || prev.totalDuration,
          remainingSeconds: rem,
          isRunning: rem > 0,
          isPaused: false,
          isExpired: rem <= 0,
        }));
        if (rem <= 0 && (currentScreen === 'WORKSPACE' || currentScreen === 'SUBMISSION')) {
          handleTimeout();
        }
      } else if (data.status === 'PAUSED') {
        setTimerState(prev => ({
          ...prev,
          remainingSeconds: rem,
          isPaused: true,
          isRunning: false,
        }));
      } else if (data.status === 'COMPLETED') {
        setTimerState(prev => ({
          ...prev,
          remainingSeconds: 0,
          isRunning: false,
          isExpired: true,
        }));
        if (currentScreen === 'WORKSPACE' || currentScreen === 'SUBMISSION') {
          handleTimeout();
        }
      }
    };

    syncClock();
    const interval = setInterval(syncClock, 3000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [currentScreen]);

  // Persist session to localStorage
  const saveSession = (updates = {}) => {
    try {
      const payload = {
        teamName,
        currentScreen,
        promptHistory,
        lastResponse,
        discoveredEvidence,
        activeObjectiveIndex,
        submissionData,
        scoreData,
        isSolutionRevealed,
        ...updates
      };
      localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Could not save session', e);
    }
  };

  // Timer Tick & Timeout Handling with drift compensation
  useEffect(() => {
    if (currentScreen === 'WORKSPACE' || currentScreen === 'SUBMISSION') {
      timerIntervalRef.current = setInterval(() => {
        setTimerState(prev => {
          if (!prev) return prev;
          if (serverClock?.status === 'LIVE' && serverClock.scheduledEndAt) {
            const synNow = Date.now() + serverOffsetRef.current;
            const remaining = Math.max(0, Math.ceil((Date.parse(serverClock.scheduledEndAt) - synNow) / 1000));
            if (remaining <= 0) {
              clearInterval(timerIntervalRef.current);
              handleTimeout();
              return { ...prev, remainingSeconds: 0, isRunning: false, isExpired: true };
            }
            return { ...prev, remainingSeconds: remaining, isRunning: true, isPaused: false };
          }

          if (!prev.isRunning || prev.isPaused) return prev;
          const remaining = calculateRemainingSeconds(prev);
          if (remaining <= 0) {
            clearInterval(timerIntervalRef.current);
            handleTimeout();
            return { ...prev, remainingSeconds: 0, isRunning: false, isExpired: true };
          }
          return { ...prev, remainingSeconds: remaining };
        });
      }, 1000);
    } else {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [currentScreen, serverClock]);

  // Keyboard shortcut for Facilitation Controls: Ctrl+Shift+H or Cmd+Shift+H
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        setIsHostControlsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTimeout = () => {
    if (currentScreen === 'WORKSPACE' || currentScreen === 'SUBMISSION') {
      // Evaluate current standing
      const finalScore = calculateLiveScore(promptHistory, discoveredEvidence, submissionData);
      setScoreData(finalScore);
      setCurrentScreen('RESULTS');
      saveSession({ currentScreen: 'RESULTS', scoreData: finalScore });

      // Synchronize final submission with backend
      if (teamName) {
        fetch(`${API_BASE}/api/submissions`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            teamName,
            round: 'round-2',
            score: finalScore.totalScore,
            totalScore: finalScore.totalScore,
            finalPrompt: promptHistory[0]?.prompt || '',
            finalOutput: JSON.stringify(submissionData || {}),
            status: 'COMPLETED',
          }),
        }).catch(console.warn);
      }
    }
  };

  // Begin Investigation from Intro Screen
  const handleBeginInvestigation = (enteredTeamName) => {
    setTeamName(enteredTeamName);

    // Inherit synchronized remaining seconds from server clock
    let currentRemaining = timerState.remainingSeconds;
    if (serverClock?.status === 'LIVE' && serverClock.scheduledEndAt) {
      const synNow = Date.now() + serverOffsetRef.current;
      currentRemaining = Math.max(0, Math.ceil((Date.parse(serverClock.scheduledEndAt) - synNow) / 1000));
    }

    const startedTimer = {
      ...timerState,
      remainingSeconds: currentRemaining,
      isRunning: true,
      isPaused: false,
      isExpired: currentRemaining <= 0,
    };
    setTimerState(startedTimer);
    startTimeRef.current = Date.now();
    setCurrentScreen('WORKSPACE');
    saveSession({
      teamName: enteredTeamName,
      currentScreen: 'WORKSPACE'
    });
  };

  // Handle Prompt Submission in Workspace
  const handlePromptSubmit = (promptText) => {
    const parsedIntent = parsePromptIntent(promptText);
    const retrievalResult = retrieveRelevantRecords(parsedIntent);
    const response = generateIntelligenceResponse(parsedIntent, retrievalResult, { activeObjectiveIndex });

    // Update discovered sources
    const newDiscovered = [...new Set([...discoveredEvidence, ...response.citations])];
    setDiscoveredEvidence(newDiscovered);

    // Prompt history item
    const historyEntry = {
      prompt: promptText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      parsedIntent,
      retrievalResult,
      response
    };
    const updatedHistory = [historyEntry, ...promptHistory];
    setPromptHistory(updatedHistory);
    setLastResponse(response);

    // Update Live Score
    const updatedScore = calculateLiveScore(updatedHistory, newDiscovered, submissionData);
    setScoreData(updatedScore);

    // Progressive Objective Evaluation
    checkObjectiveProgression(parsedIntent, newDiscovered);

    saveSession({
      promptHistory: updatedHistory,
      lastResponse: response,
      discoveredEvidence: newDiscovered,
      scoreData: updatedScore
    });
  };

  // Evaluate if current objective criteria are met
  const checkObjectiveProgression = (parsedIntent, discovered) => {
    if (activeObjectiveIndex === 0) {
      // Objective 1: Find the signal (SV-4-CRYO-09, optical relay, REC-02, 84.6 GB)
      const foundSignal = discovered.includes('REC-02') || 
        parsedIntent.systems.includes('vault_server') || 
        parsedIntent.systems.includes('optical_relay');
      
      if (foundSignal) {
        setObjectives(prev => prev.map((obj, i) => i === 0 ? { ...obj, completed: true } : obj));
        setActiveObjectiveIndex(1);
      }
    } else if (activeObjectiveIndex === 1) {
      // Objective 2: Reconstruct the sequence (cron script REC-04 + trap discrepancy REC-07/REC-11)
      const foundVector = discovered.includes('REC-04') || parsedIntent.actions.includes('script_execution');
      const foundTrap = parsedIntent.hasDiscrepancyIntent || 
        discovered.includes('REC-07') || 
        discovered.includes('REC-11') ||
        discovered.includes('REC-14');

      if (foundVector && foundTrap) {
        setObjectives(prev => prev.map((obj, i) => i === 1 ? { ...obj, completed: true } : obj));
        setActiveObjectiveIndex(2);
      }
    }
  };

  // Open Record in Drawer (Deep Linking)
  const handleOpenRecord = (recordId) => {
    setRecordViewerTargetId(recordId);
    setIsRecordsOpen(true);
  };

  // Submit Final Answers from ScreenSubmission
  const handleSubmitFinal = (formData) => {
    setSubmissionData(formData);
    const finalScore = calculateLiveScore(promptHistory, discoveredEvidence, formData);
    setScoreData(finalScore);
    setCurrentScreen('RESULTS');

    // Trigger celebratory confetti if score is solid
    if (finalScore.totalScore >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#fbbf24', '#ffffff', '#ea580c']
        });
      } catch (e) {}
    }

    saveSession({
      submissionData: formData,
      scoreData: finalScore,
      currentScreen: 'RESULTS'
    });
  };

  // Host Facilitation Handlers
  const handleToggleTimerPause = () => {
    if (timerState.isPaused) {
      setTimerState(resumeTimer(timerState));
    } else {
      setTimerState(pauseTimer(timerState));
    }
  };

  const handleAdjustTimer = (deltaSeconds) => {
    setTimerState(adjustTimer(timerState, deltaSeconds));
  };

  const handleUnlockSubmission = () => {
    setCurrentScreen('SUBMISSION');
    setIsHostControlsOpen(false);
    saveSession({ currentScreen: 'SUBMISSION' });
  };

  const handleRevealSolution = () => {
    setIsSolutionRevealed(prev => !prev);
    saveSession({ isSolutionRevealed: !isSolutionRevealed });
  };

  const handleResetSession = () => {
    localStorage.removeItem(STORAGE_SESSION_KEY);
    const freshTimer = resetTimer(MISSION_METADATA.defaultDurationSeconds);
    setTimerState(freshTimer);
    setTeamName('');
    setCurrentScreen('INTRO');
    setObjectives(INITIAL_OBJECTIVES);
    setActiveObjectiveIndex(0);
    setPromptHistory([]);
    setLastResponse(null);
    setDiscoveredEvidence([]);
    setSubmissionData(null);
    setScoreData(calculateLiveScore([], []));
    setIsSolutionRevealed(false);
  };

  // Render Screens
  return (
    <div className="bg-archive-950 text-ivory-100 min-h-screen font-sans selection:bg-amber-500/20">
      {currentScreen === 'INTRO' && (
        <ScreenIntro
          initialTeamName={teamName}
          onBegin={handleBeginInvestigation}
        />
      )}

      {currentScreen === 'WORKSPACE' && (
        <ScreenWorkspace
          teamName={teamName}
          timerState={timerState}
          objectives={objectives}
          activeObjectiveIndex={activeObjectiveIndex}
          onPromptSubmit={handlePromptSubmit}
          lastResponse={lastResponse}
          promptHistory={promptHistory}
          discoveredEvidence={discoveredEvidence}
          onOpenRecordsDrawer={(sourceId) => {
            setRecordViewerTargetId(typeof sourceId === 'string' ? sourceId : null);
            setIsRecordsOpen(true);
          }}
          onOpenHistory={() => setIsHistoryOpen(true)}
          onOpenBriefing={() => setIsBriefingOpen(true)}
          onOpenHostControls={() => setIsHostControlsOpen(true)}
          onProceedToSubmission={() => setCurrentScreen('SUBMISSION')}
          scorePreview={scoreData}
        />
      )}

      {currentScreen === 'SUBMISSION' && (
        <ScreenSubmission
          teamName={teamName}
          discoveredSources={discoveredEvidence}
          onSubmitFinal={handleSubmitFinal}
          onBackToWorkspace={() => setCurrentScreen('WORKSPACE')}
        />
      )}

      {currentScreen === 'RESULTS' && (
        <ScreenResults
          teamName={teamName}
          scoreData={scoreData}
          submissionData={submissionData}
          promptHistory={promptHistory}
          discoveredEvidence={discoveredEvidence}
          elapsedSeconds={MISSION_METADATA.defaultDurationSeconds - (timerState?.remainingSeconds || 0)}
          isSolutionRevealed={isSolutionRevealed}
          onRestart={handleResetSession}
        />
      )}

      {/* Global Slide-Out / Drawer Components */}
      <RecordViewer
        isOpen={isRecordsOpen}
        onClose={() => {
          setIsRecordsOpen(false);
          setRecordViewerTargetId(null);
        }}
        initialRecordId={recordViewerTargetId}
        discoveredSources={discoveredEvidence}
      />

      <PromptHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={promptHistory}
        onOpenRecord={handleOpenRecord}
      />

      <HostControlsModal
        isOpen={isHostControlsOpen}
        onClose={() => setIsHostControlsOpen(false)}
        timerState={timerState}
        onAdjustTimer={handleAdjustTimer}
        onTogglePause={handleToggleTimerPause}
        onUnlockSubmission={handleUnlockSubmission}
        onRevealSolution={handleRevealSolution}
        onResetSession={handleResetSession}
        onExportCSV={() => {
          exportSessionToCSV({
            teamName,
            scoreData,
            submissionData,
            promptHistory,
            discoveredEvidence,
            elapsedSeconds: MISSION_METADATA.defaultDurationSeconds - (timerState?.remainingSeconds || 0)
          });
        }}
        scoreData={scoreData}
        isSolutionRevealed={isSolutionRevealed}
      />

      {/* Non-Destructive In-Game Briefing & Rules Modal */}
      <BlackboxBriefingModal
        isOpen={isBriefingOpen}
        isModal={true}
        onClose={() => setIsBriefingOpen(false)}
        serverClock={serverClock}
        remainingSeconds={timerState?.remainingSeconds || 0}
      />
    </div>
  );
}
