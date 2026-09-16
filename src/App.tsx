import React, { useState, useEffect } from 'react';
import { EVIDENCE_ITEMS } from './data/evidence';
import { SUSPECTS } from './data/suspects';
import { EvidenceItem, SuspectId, FinalBossSubmission } from './types/game';
import { sound } from './utils/audioEngine';
import { HorrorIntro } from './components/HorrorIntro';
import { HeaderTimer } from './components/HeaderTimer';
import { ClueDossier } from './components/ClueDossier';
import { Round2Locks } from './components/Round2Locks';
import { Round3AiTrap } from './components/Round3AiTrap';
import { Round4DeadMan } from './components/Round4DeadMan';
import { Round5FalseMurderer } from './components/Round5FalseMurderer';
import { FinalBossPrompt } from './components/FinalBossPrompt';
import { GlitchClimax } from './components/GlitchClimax';
import { HostControlModal } from './components/HostControlModal';
import { NarrativeBridgeModal } from './components/NarrativeBridgeModal';
import { EvidenceBoard } from './components/EvidenceBoard';
import { Phase0Briefing } from './components/Phase0Briefing';
import { Phase1CrimeScene } from './components/Phase1CrimeScene';
import { CrimeSceneObjectives } from './types/game';
import { 
  ShieldAlert, 
  ArrowRight, 
  ChevronRight, 
  AlertTriangle,
  Volume2,
  Clock,
  CheckCircle2,
  } from 'lucide-react';

import { House3D } from './components/House3D';
import { BloodSplatterOverlay } from './components/BloodSplatterOverlay';
import { VFXOverlay } from './components/VFXOverlay';
import { SettingsModal } from './components/SettingsModal';
import { PromptForge } from './components/PromptForge';
import { vfx } from './utils/vfxEngine';
import { GameSettings, DEFAULT_SETTINGS, loadSavedGame, saveGame, clearSavedGame } from './utils/gameStorage';

export const App: React.FC = () => {
  // Check if saved state exists in localStorage
  const savedState = React.useMemo(() => loadSavedGame(), []);

  // Master Game State
  const [currentRound, setCurrentRound] = useState<number>(savedState?.currentRound ?? 0);
  const [hasSeenIntro, setHasSeenIntro] = useState<boolean>(savedState?.hasSeenIntro ?? false);
  const [crimeSceneObjectives, setCrimeSceneObjectives] = useState<CrimeSceneObjectives>(
    savedState?.crimeSceneObjectives ?? {
      clockInspected: false,
      tapeFound: false,
      bloodExamined: false,
      doorInspected: false,
      luminolRevealed: false
    }
  );
  const [timeRemaining, setTimeRemaining] = useState<number>(savedState?.timeRemaining ?? 55 * 60); // 55 mins
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [audioMuted, setAudioMuted] = useState<boolean>(false);
  const [isHostModalOpen, setIsHostModalOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isClimaxTriggered, setIsClimaxTriggered] = useState<boolean>(false);

  // Settings State
  const [settings, setSettings] = useState<GameSettings>(savedState?.settings ?? DEFAULT_SETTINGS);

  // 3D Mansion vs Terminal vs Detective Wall Mode
      
  // Subround Narrative Milestone Bridge Modal
  const [bridgeModal, setBridgeModal] = useState<{
    isOpen: boolean;
    fromRound: number;
    toRound: number;
    title: string;
    discovery: string;
    nextObjective: string;
  }>({
    isOpen: false,
    fromRound: 1,
    toRound: 2,
    title: '',
    discovery: '',
    nextObjective: ''
  });

  // Round 1 State
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [audioRevealedSecret, setAudioRevealedSecret] = useState<boolean>(savedState?.audioRevealedSecret ?? false);

  // Round 2 State: Suspect Locks
  const [suspectLocks, setSuspectLocks] = useState<Record<SuspectId, boolean>>(
    savedState?.suspectLocks ?? {
      aarav: false,
      riya: false,
      kabir: false,
      meera: false,
      dev: false
    }
  );

  // Clue Re-Examination State
  const [reExaminedClues, setReExaminedClues] = useState<string[]>(savedState?.reExaminedClues ?? []);

  // Round 3 State: AI queries
  const [aiQueries, setAiQueries] = useState<Array<{
    prompt: string;
    response: string;
    reasoning: string;
    timestamp: string;
  }>>([]);
  const [reasoningInspected, setReasoningInspected] = useState<boolean>(false);

  // Round 4 State: Videos & Time Distinctions
  const [hiddenVideoUnlocked, setHiddenVideoUnlocked] = useState<boolean>(savedState?.hiddenVideoUnlocked ?? false);
  const [sliderDistinction, setSliderDistinction] = useState<{
    attackTime: string;
    deathTime: string;
    discoveryTime: string;
  }>(savedState?.sliderDistinction ?? {
    attackTime: '',
    deathTime: '',
    discoveryTime: ''
  });

  // Round 5 State: False Murderer
  const [round5Choice, setRound5Choice] = useState<'pending' | 'accused_meera' | 'challenged'>(
    savedState?.round5Choice ?? 'pending'
  );
  const [printerLogUnlocked, setPrinterLogUnlocked] = useState<boolean>(savedState?.printerLogUnlocked ?? false);

  // Round 6 State: Final Boss
  const [submission, setSubmission] = useState<Partial<FinalBossSubmission>>(savedState?.submission ?? {});
  const [finalEvaluated, setFinalEvaluated] = useState<boolean>(savedState?.finalEvaluated ?? false);
  const [finalScore, setFinalScore] = useState<number>(savedState?.finalScore ?? 0);
  const [finalFeedback, setFinalFeedback] = useState<string[]>(savedState?.finalFeedback ?? []);

  // 55-minute Timer Interval
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isTimerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsTimerRunning(false);
            sound.playHorrorStinger();
            return 0;
          }
          // Subtle ticking every minute or low time
          if (prev < 180 && prev % 5 === 0) {
            sound.playHeartbeat();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeRemaining]);

  // Global Key Listener: Ctrl+Shift+H for Host HUD, Tab for View Mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        setIsHostModalOpen((prev) => !prev);
      }

    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleUpdateSettings = (newSettings: GameSettings) => {
    setSettings(newSettings);
    sound.setMasterVolume(newSettings.masterVolume);
    sound.setMusicVolume(newSettings.musicVolume);
    sound.setSfxVolume(newSettings.sfxVolume);
    sound.setVoiceVolume(newSettings.voiceVolume);
    vfx.setReduceMotion(newSettings.reduceMotion);
    vfx.setReduceFlashing(newSettings.reduceFlashing);
  };

  // Synchronize audio and vfx settings on startup
  useEffect(() => {
    sound.setMasterVolume(settings.masterVolume);
    sound.setMusicVolume(settings.musicVolume);
    sound.setSfxVolume(settings.sfxVolume);
    sound.setVoiceVolume(settings.voiceVolume);
    vfx.setReduceMotion(settings.reduceMotion);
    vfx.setReduceFlashing(settings.reduceFlashing);
  }, []);

  // Save game state to localStorage
  useEffect(() => {
    saveGame({
      currentRound,
      hasSeenIntro,
      timeRemaining,
      crimeSceneObjectives,
      suspectLocks,
      audioRevealedSecret,
      hiddenVideoUnlocked,
      sliderDistinction,
      round5Choice,
      printerLogUnlocked,
      submission,
      finalEvaluated,
      finalScore,
      finalFeedback,
      reExaminedClues,
      settings
    });
  }, [
    currentRound,
    hasSeenIntro,
    timeRemaining,
    crimeSceneObjectives,
    suspectLocks,
    audioRevealedSecret,
    hiddenVideoUnlocked,
    sliderDistinction,
    round5Choice,
    printerLogUnlocked,
    submission,
    finalEvaluated,
    finalScore,
    finalFeedback,
    reExaminedClues,
    settings
  ]);

  // Phase atmosphere transitions
  useEffect(() => {
    if (!hasSeenIntro) return;
    if (currentRound === 0 || currentRound === 1) {
      sound.setMusicMood('exploration');
    } else if (currentRound === 2 || currentRound === 3) {
      sound.setMusicMood('suspicion');
    } else if (currentRound === 4 || currentRound === 5) {
      sound.setMusicMood('discovery');
    } else if (currentRound === 6) {
      sound.setMusicMood('revelation');
    }
    vfx.flicker(250);
  }, [currentRound, hasSeenIntro]);

  const handleToggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
    sound.playTick(false);
  };

  const handleToggleMute = () => {
    const nextMute = !audioMuted;
    setAudioMuted(nextMute);
    sound.setMuted(nextMute);
  };

  // Milestone Progression Triggers
  const handleAudioRevealedSecret = () => {
    setAudioRevealedSecret(true);
    if (currentRound === 1) {
      setTimeout(() => {
        setBridgeModal({
          isOpen: true,
          fromRound: 1,
          toRound: 2,
          title: 'CHRONOLOGY ANOMALY CONFIRMED: PRE-CRIME RECORDING',
          discovery: 'The 0.5x sub-bass layer on Dictaphone Tape #4 reveals: "Someone started before the house stopped." The 11:47 clock was deliberately arrested with graphite to manufacture a false time of death.',
          nextObjective: 'Audit all 5 suspects in Round 2. Each had opportunity, but 4 committed different secondary crimes. Disarm their locks to expose non-murder motives.'
        });
      }, 500);
    }
  };

  const handleSolveLock = (suspectId: SuspectId) => {
    setSuspectLocks((prev) => {
      const next = { ...prev, [suspectId]: true };
      const allSolved = Object.values(next).every(Boolean);
      if (allSolved && currentRound === 2) {
        setTimeout(() => {
          setBridgeModal({
            isOpen: true,
            fromRound: 2,
            toRound: 3,
            title: 'FIVE CONSPIRACIES UNRAVELED: ONLY ONE KILLER REMAINS',
            discovery: "Aarav stole research, Kabir blew the transformer, Riya bugged the rooms, and Meera struck Sen at 11:47 PM. But Devraj Negi's alibi collapsed—he knows the secret service passages.",
            nextObjective: 'The House AI has formulated its own accusation in Round 3. Probe its logic and expose the core algorithmic bias.'
          });
        }, 500);
      }
      return next;
    });
  };

  const handleInspectReasoning = () => {
    const nextVal = !reasoningInspected;
    setReasoningInspected(nextVal);
    if (nextVal && currentRound === 3) {
      setTimeout(() => {
        setBridgeModal({
          isOpen: true,
          fromRound: 3,
          toRound: 4,
          title: 'ALGORITHMIC TRAP DETECTED: THE AI DISCARDED SURVIVAL DATA',
          discovery: 'The House AI assumed the 11:47 assault was immediately fatal. It completely discarded telemetry from 12:03 AM showing Professor Sen alive and typing at his terminal.',
          nextObjective: 'Enter Round 4: Establish the definitive forensic distinction between Attack Time (11:47), Death Time (12:15), and Discovery Time (12:18).'
        });
      }, 500);
    }
  };

  const handleUnlockHiddenVideo = () => {
    setHiddenVideoUnlocked(true);
    if (currentRound === 4) {
      setTimeout(() => {
        setBridgeModal({
          isOpen: true,
          fromRound: 4,
          toRound: 5,
          title: 'THE DEAD MAN SPEAKS: SEN WAS ALIVE UNTIL 12:15',
          discovery: "Professor Sen's encrypted 12:03 webcam feed proves Meera did not kill him! The true fatal smothering occurred at 12:15 AM during Kabir's electrical blackout.",
          nextObjective: 'The House AI is 97.8% confident Meera is the murderer. Challenge its false indictment in Round 5 to retrieve the printer spool logs.'
        });
      }, 500);
    }
  };

  const handleChallengeAi = () => {
    setRound5Choice('challenged');
    setPrinterLogUnlocked(true);
    if (currentRound === 5) {
      setTimeout(() => {
        setBridgeModal({
          isOpen: true,
          fromRound: 5,
          toRound: 6,
          title: 'SMOKING GUN: THE PRE-CRIME FABRICATION',
          discovery: 'Evidence Spool 12 proves the indictment against Dr. Meera was sent to the network printer at 11:41 PM—six minutes BEFORE she entered Study 17-B! The House and Dev staged the entire crime.',
          nextObjective: 'Enter Round 6: Construct the Master Forensic Indictment prompt to dismantle the House AI and convict Devraj Negi.'
        });
      }, 500);
    }
  };

  const handleProceedFromBridge = () => {
    setCurrentRound(bridgeModal.toRound);
    setBridgeModal((prev) => ({ ...prev, isOpen: false }));
        sound.playHorrorStinger();
  };

  const handleAddAiQuery = (prompt: string, response: string, reasoning: string) => {
    const newQuery = {
      prompt,
      response,
      reasoning,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setAiQueries((prev) => [newQuery, ...prev]);
  };

  const handleResetGame = () => {
    clearSavedGame();
    setHasSeenIntro(false);
    setCurrentRound(0);
    setTimeRemaining(55 * 60);
    setIsTimerRunning(false);
    setIsClimaxTriggered(false);
    setCrimeSceneObjectives({
      clockInspected: false,
      tapeFound: false,
      bloodExamined: false,
      doorInspected: false,
      luminolRevealed: false
    });
    setAudioRevealedSecret(false);
    setAudioSpeed(1.0);
    setSuspectLocks({ aarav: false, riya: false, kabir: false, meera: false, dev: false });
    setReExaminedClues([]);
    setAiQueries([]);
    setReasoningInspected(false);
    setHiddenVideoUnlocked(false);
    setSliderDistinction({ attackTime: '', deathTime: '', discoveryTime: '' });
    setRound5Choice('pending');
    setPrinterLogUnlocked(false);
    setSubmission({});
    setFinalEvaluated(false);
    setFinalScore(0);
    setFinalFeedback([]);
    setBridgeModal({
      isOpen: false,
      fromRound: 1,
      toRound: 2,
      title: '',
      discovery: '',
      nextObjective: ''
    });
        sound.stopAllSpeech();
    sound.stopAmbient();
  };

  const handleAutoSolveAll = () => {
    sound.playObjectiveComplete();
    sound.playRadioChirp();
    setHasSeenIntro(true);
    setCrimeSceneObjectives({
      clockInspected: true,
      tapeFound: true,
      bloodExamined: true,
      doorInspected: true,
      luminolRevealed: true
    });
    setSuspectLocks({ aarav: true, riya: true, kabir: true, meera: true, dev: true });
    setAudioRevealedSecret(true);
    setHiddenVideoUnlocked(true);
    setPrinterLogUnlocked(true);
    setSliderDistinction({
      attackTime: '11:47 PM',
      deathTime: '12:15 AM (Blackout)',
      discoveryTime: '12:18 AM'
    });
    setRound5Choice('challenged');
    const winningSub: FinalBossSubmission = {
      attacker: 'Dr. Meera Patel',
      murderer: 'Devraj "Dev" Negi',
      blackoutCauser: 'Kabir Varma',
      attackTime: '11:47 PM',
      trueDeathTime: '12:15 AM (During Blackout)',
      finalRecordingTime: '12:03 AM',
      discoveryTime: '12:18 AM',
      falseEvidenceTime: '11:41 PM (HP Laser Spool)',
      aiBiggestError: 'The AI assumed all CCTV hardware clocks were synchronized, ignored the 9-minute kitchen clock drift, and falsely equated Meera\'s 11:47 PM assault with the fatal 12:15 AM smothering.'
    };
    setSubmission(winningSub);
    setFinalEvaluated(true);
    setFinalScore(100);
    setFinalFeedback([
      '✓ Correctly identified physical attacker: Dr. Meera Patel (+20 pts)',
      '✓ Correctly identified true murderer: Devraj Negi (+25 pts)',
      '✓ Correctly identified blackout operator: Kabir Varma (+15 pts)',
      '✓ Perfect chronology triad (+15 pts)',
      '✓ Pre-crime evidence timestamp accounted for (+5 pts)',
      '✓ Correctly identified AI cognitive flaw (+20 pts)'
    ]);
    setCurrentRound(6);
      };

  // If Climax is active
  if (isClimaxTriggered) {
    return <GlitchClimax onResetGame={handleResetGame} />;
  }

  // If Horror Intro has not been seen yet, play it first!
  if (!hasSeenIntro) {
    return (
      <HorrorIntro
        onComplete={() => {
          setHasSeenIntro(true);
          setCurrentRound(0);
          setIsTimerRunning(true);
        }}
        audioMuted={audioMuted}
        onToggleMute={handleToggleMute}
      />
    );
  }

  // Active Evidence items (unlocked by round or special events)
  const accessibleEvidence = EVIDENCE_ITEMS.filter((item) => {
    if (item.id === 'ev-12') {
      return printerLogUnlocked;
    }
    return item.round <= currentRound;
  });


  return (
    <div className="min-h-screen bg-[#07070a] text-gray-200 flex flex-col font-mono selection:bg-red-900 selection:text-white analog-grain relative">
      

      {/* Cinematic & Environmental Horror VFX Overlay */}
      <VFXOverlay />

      {/* Universal Navigation Bar & 55-min Countdown */}
      <HeaderTimer
        currentPhase={currentRound}
        timeRemainingSeconds={timeRemaining}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        audioMuted={audioMuted}
        onToggleMute={handleToggleMute}
        onOpenHostModal={() => setIsHostModalOpen(true)}
        onOpenSettingsModal={() => setIsSettingsModalOpen(true)}
        onSelectPhase={(phase) => {
          setCurrentRound(phase);
          sound.playTick(false);
        }}
      />

      {/* Main Investigation Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        
            {/* Phase 0: Initial Case Briefing */}
            {currentRound === 0 && (
              <Phase0Briefing
                onStartInvestigation={() => {
                  setCurrentRound(1);
                  sound.playHorrorStinger();
                }}
              />
            )}

            {/* Phase 1: First-Person Crime Scene Recon & 5 Structured Objectives */}
            {currentRound === 1 && (
              <Phase1CrimeScene
                objectives={crimeSceneObjectives}
                onUpdateObjective={(key, val) => {
                  setCrimeSceneObjectives((prev) => ({ ...prev, [key]: val }));
                }}
                onAutoDiscoverAll={() => {
                  setCrimeSceneObjectives({
                    clockInspected: true,
                    tapeFound: true,
                    bloodExamined: true,
                    doorInspected: true,
                    luminolRevealed: true
                  });
                  sound.playObjectiveComplete();
                }}
                onProceedToPhase2={() => {
                  setCurrentRound(2);
                  sound.playHorrorStinger();
                }}
                onTriggerTrauma={() => {}}
              />
            )}

            {/* Phases 2-6: Unified Investigation Layout */}
            {currentRound >= 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                {/* Left: Active Investigation (3 cols = 60%) */}
                <div className="lg:col-span-3 space-y-4">
                  {/* Phase Objective Header */}
                  <div className="glass-panel p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] text-admin-uv font-semibold uppercase tracking-widest mb-1">
                          Phase {String(currentRound).padStart(2, '0')} — The Master Forge
                        </p>
                        <h2 className="text-base font-semibold text-gray-100">
                          Construct the Ultimate Prompt
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Phase-specific content */}
                  <PromptForge onTriggerClimax={() => setIsClimaxTriggered(true)} />
                </div>

                {/* Right: Evidence Drawer (2 cols = 40%) */}
                <div className="lg:col-span-2 lg:sticky lg:top-28 space-y-4">
                  <ClueDossier
                    evidenceList={accessibleEvidence}
                    currentRound={currentRound}
                    audioSpeed={audioSpeed}
                    onSetAudioSpeed={setAudioSpeed}
                    audioRevealedSecret={audioRevealedSecret}
                    onAudioRevealedSecret={handleAudioRevealedSecret}
                    compact={true}
                    reExaminedClues={reExaminedClues}
                    onReExamineClue={(id) => {
                      setReExaminedClues((prev) => (prev.includes(id) ? prev : [...prev, id]));
                    }}
                  />
                </div>
              </div>
            )}
          </main>

      {/* Subround Narrative Milestone Bridge Modal */}
      <NarrativeBridgeModal
        isOpen={bridgeModal.isOpen}
        fromRound={bridgeModal.fromRound}
        toRound={bridgeModal.toRound}
        title={bridgeModal.title}
        discovery={bridgeModal.discovery}
        nextObjective={bridgeModal.nextObjective}
        onProceed={handleProceedFromBridge}
      />

      {/* Host / Facilitator Modal HUD */}
      <HostControlModal
        isOpen={isHostModalOpen}
        onClose={() => setIsHostModalOpen(false)}
        currentRound={currentRound}
        onSelectRound={(r) => {
          setCurrentRound(r);
          setIsHostModalOpen(false);
        }}
        timeRemaining={timeRemaining}
        onAdjustTime={(delta) => setTimeRemaining((prev) => Math.max(0, prev + delta))}
        onUnlockAllLocks={() => {
          setSuspectLocks({ aarav: true, riya: true, kabir: true, meera: true, dev: true });
        }}
        onUnlockPrinterLog={() => setPrinterLogUnlocked(true)}
        onUnlockHiddenVideo={() => setHiddenVideoUnlocked(true)}
        onTriggerBlackout={() => {
          sound.playBlackout();
        }}
        onTriggerClimax={() => {
          setIsClimaxTriggered(true);
        }}
        onResetGame={handleResetGame}
        onAutoSolveAll={handleAutoSolveAll}
      />

      {/* Settings & Accessibility Console Modal */}
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onResetGame={handleResetGame}
      />

      {/* Footer */}
      <footer className="border-t border-gray-900/50 py-3 text-center text-[10px] text-gray-600">
  PROMPT WAR 2.0 • Case #17-B • Ctrl+Shift+H for GM Console
</footer>
    </div>
  );
};

export default App;
