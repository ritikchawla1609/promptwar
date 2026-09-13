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
import { 
  ShieldAlert, 
  ArrowRight, 
  ChevronRight, 
  AlertTriangle,
  FileText,
  Pin
} from 'lucide-react';

import { House3D } from './components/House3D';
import { BloodSplatterOverlay } from './components/BloodSplatterOverlay';

export const App: React.FC = () => {
  // Master Game State
  const [currentRound, setCurrentRound] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(55 * 60); // 55 mins
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [audioMuted, setAudioMuted] = useState<boolean>(false);
  const [isHostModalOpen, setIsHostModalOpen] = useState<boolean>(false);
  const [isClimaxTriggered, setIsClimaxTriggered] = useState<boolean>(false);

  // 3D Mansion vs Terminal vs Detective Wall Mode
  const [viewMode, setViewMode] = useState<'3d' | 'terminal' | 'board'>('3d');
  const [intenseTrauma, setIntenseTrauma] = useState<boolean>(false);

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
  const [audioRevealedSecret, setAudioRevealedSecret] = useState<boolean>(false);

  // Round 2 State: Suspect Locks
  const [suspectLocks, setSuspectLocks] = useState<Record<SuspectId, boolean>>({
    aarav: false,
    riya: false,
    kabir: false,
    meera: false,
    dev: false
  });

  // Round 3 State: AI queries
  const [aiQueries, setAiQueries] = useState<Array<{
    prompt: string;
    response: string;
    reasoning: string;
    timestamp: string;
  }>>([]);
  const [reasoningInspected, setReasoningInspected] = useState<boolean>(false);

  // Round 4 State: Videos & Time Distinctions
  const [hiddenVideoUnlocked, setHiddenVideoUnlocked] = useState<boolean>(false);
  const [sliderDistinction, setSliderDistinction] = useState<{
    attackTime: string;
    deathTime: string;
    discoveryTime: string;
  }>({
    attackTime: '',
    deathTime: '',
    discoveryTime: ''
  });

  // Round 5 State: False Murderer
  const [round5Choice, setRound5Choice] = useState<'pending' | 'accused_meera' | 'challenged'>('pending');
  const [printerLogUnlocked, setPrinterLogUnlocked] = useState<boolean>(false);

  // Round 6 State: Final Boss
  const [submission, setSubmission] = useState<Partial<FinalBossSubmission>>({});
  const [finalEvaluated, setFinalEvaluated] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [finalFeedback, setFinalFeedback] = useState<string[]>([]);

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
      if (e.key === 'Tab' && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        setViewMode((prev) => {
          if (prev === '3d') return 'terminal';
          if (prev === 'terminal') return 'board';
          return '3d';
        });
        sound.playTick(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    setViewMode('terminal');
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
    setCurrentRound(0);
    setTimeRemaining(55 * 60);
    setIsTimerRunning(false);
    setIsClimaxTriggered(false);
    setAudioRevealedSecret(false);
    setAudioSpeed(1.0);
    setSuspectLocks({ aarav: false, riya: false, kabir: false, meera: false, dev: false });
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
    setViewMode('3d');
  };

  const handleAutoSolveAll = () => {
    sound.playObjectiveComplete();
    sound.playRadioChirp();
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
    setViewMode('terminal');
  };

  // If Climax is active
  if (isClimaxTriggered) {
    return <GlitchClimax onResetGame={handleResetGame} />;
  }

  // If Round 0 (Intro) is active
  if (currentRound === 0) {
    return (
      <HorrorIntro
        onComplete={() => {
          setCurrentRound(1);
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

  const triggerTrauma = () => {
    setIntenseTrauma(true);
    sound.playTerrifyingScream();
    sound.playViolinShriek();
    sound.playThunderClap();
    sound.playBloodSplatter();
    setTimeout(() => {
      setIntenseTrauma(false);
    }, 1600);
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-gray-200 flex flex-col font-mono selection:bg-red-900 selection:text-white analog-grain relative">
      {/* Visceral Blood Splatters & Trauma Flashes */}
      <BloodSplatterOverlay activeDrips={true} intenseTrauma={intenseTrauma} />

      {/* Top Header & 55-min Countdown */}
      <HeaderTimer
        currentRound={currentRound}
        timeRemainingSeconds={timeRemaining}
        isTimerRunning={isTimerRunning}
        onToggleTimer={handleToggleTimer}
        audioMuted={audioMuted}
        onToggleMute={handleToggleMute}
        onOpenHostModal={() => setIsHostModalOpen(true)}
        onSelectRound={(r) => {
          setCurrentRound(r);
          sound.playTick(false);
        }}
      />

      {/* Mode Switcher Bar (3D Mansion vs Terminal vs Conspiracy Wall) */}
      <div className="bg-[#0b0b10] border-b border-red-950 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setViewMode('3d');
                sound.playTick(false);
              }}
              className={`px-4 py-2 rounded font-bold transition flex items-center gap-2 cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500'
                  : 'bg-black/60 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              <span>🏰 3D MANSION (WASD)</span>
            </button>

            <button
              onClick={() => {
                setViewMode('terminal');
                sound.playTick(false);
              }}
              className={`px-4 py-2 rounded font-bold transition flex items-center gap-2 cursor-pointer ${
                viewMode === 'terminal'
                  ? 'bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500'
                  : 'bg-black/60 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              <span>💻 CASE TERMINAL (PUZZLES)</span>
            </button>

            <button
              onClick={() => {
                setViewMode('board');
                sound.playTick(false);
              }}
              className={`px-4 py-2 rounded font-bold transition flex items-center gap-2 cursor-pointer ${
                viewMode === 'board'
                  ? 'bg-red-700 text-white shadow-[0_0_20px_rgba(229,9,20,0.6)] border border-red-500'
                  : 'bg-black/60 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              <Pin className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>📌 CONSPIRACY WALL (RED THREADS)</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={triggerTrauma}
              className="px-3 py-1.5 rounded bg-red-950/40 hover:bg-red-950 border border-red-900/80 text-red-300 font-bold transition flex items-center gap-1.5 shadow cursor-pointer"
              title="Test Jumpscare & Blood Splatter"
            >
              <span>🩸 TEST HORROR JUMPSCARE</span>
            </button>
            <span className="text-[11px] text-gray-500 hidden md:inline">
              [TAB] Quick-Toggle Mode
            </span>
          </div>
        </div>
      </div>

      {/* Main Investigation Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 space-y-6">
        {/* View 1: 3D Mansion Walkthrough Mode */}
        {viewMode === '3d' && (
          <div className="space-y-4">
            <House3D
              onInspectClue={(clueId) => {
                setViewMode('terminal');
                sound.playHorrorStinger();
              }}
              onOpenTerminal={() => setViewMode('terminal')}
              onTriggerTrauma={triggerTrauma}
            />

            {/* Quick Evidence Preview Bar below 3D */}
            <div className="p-4 bg-[#0d0d14] rounded border border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <FileText className="w-4 h-4 text-red-500" />
                <span>EVIDENCE ACCESSIBLE IN 3D: Walk close to Grandfather Clock, Tape Recorder, or Study 17-B Door. Press [L] for UV Luminol.</span>
              </div>
              <button
                onClick={() => setViewMode('terminal')}
                className="px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded transition cursor-pointer shrink-0"
              >
                SWITCH TO DOSSIER & PUZZLES →
              </button>
            </div>
          </div>
        )}

        {/* View 2: Detective Corkboard & Red Thread Wall */}
        {viewMode === 'board' && (
          <div className="space-y-4">
            <EvidenceBoard
              currentRound={currentRound}
              suspectLocks={suspectLocks}
              audioRevealedSecret={audioRevealedSecret}
              reasoningInspected={reasoningInspected}
              hiddenVideoUnlocked={hiddenVideoUnlocked}
              printerLogUnlocked={printerLogUnlocked}
              finalEvaluated={finalEvaluated}
            />

            <div className="p-4 bg-[#0d0d14] rounded border border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-gray-400 flex items-center gap-2">
                <Pin className="w-4 h-4 text-red-500 fill-red-500" />
                <span>The red thread network tracks how each clue transforms across rounds. Solve suspect locks and AI traps to complete the wall.</span>
              </div>
              <button
                onClick={() => setViewMode('terminal')}
                className="px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded transition cursor-pointer shrink-0"
              >
                RETURN TO PUZZLE TERMINAL →
              </button>
            </div>
          </div>
        )}

        {/* View 3: Forensic Terminal & Master Puzzle Engine */}
        {viewMode === 'terminal' && (
          <>
            {/* Round Banner / Objective */}
            <div className="p-4 rounded border border-red-950/80 bg-[#0c0c12] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
              <div>
                <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                  ACTIVE OBJECTIVE • ROUND {currentRound}
                </span>
                <h2 className="text-lg font-bold text-gray-100">
                  {currentRound === 1 && 'The First Lie — Audit the 11:47 Clue & Distorted Audio Reel'}
                  {currentRound === 2 && 'Five Suspects — Break the Alibis & Identify Non-Murder Crimes'}
                  {currentRound === 3 && 'The Impossible Timeline — Reconcile 12:03 CCTV with 12:05 Audio & Inspect AI Assumptions'}
                  {currentRound === 4 && "The Dead Man's Message — Separate Attack Time, Death Time, and Discovery Time"}
                  {currentRound === 5 && 'The False Murderer — Challenge the 97.8% AI Indictment of Dr. Meera Patel'}
                  {currentRound === 6 && 'The House Remembers — Final Boss Prompt & Forensic Reconstruction'}
                </h2>
              </div>

              {/* Quick next round button */}
              {currentRound < 6 && (
                <button
                  onClick={() => {
                    setCurrentRound((prev) => prev + 1);
                    sound.playTick(true);
                  }}
                  className="px-4 py-2 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 text-xs font-bold rounded flex items-center gap-1.5 shrink-0 transition cursor-pointer"
                >
                  <span>PROCEED TO ROUND {currentRound + 1}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Round Specific Focus Area */}
            {currentRound === 2 && (
              <Round2Locks
                suspectLocks={suspectLocks}
                onSolveLock={handleSolveLock}
              />
            )}

            {currentRound === 3 && (
              <Round3AiTrap
                queries={aiQueries}
                onAddQuery={handleAddAiQuery}
                reasoningInspected={reasoningInspected}
                onInspectReasoning={handleInspectReasoning}
              />
            )}

            {currentRound === 4 && (
              <Round4DeadMan
                hiddenVideoUnlocked={hiddenVideoUnlocked}
                onUnlockHiddenVideo={handleUnlockHiddenVideo}
                sliderDistinction={sliderDistinction}
                onChangeDistinction={(field, val) => {
                  setSliderDistinction((prev) => ({ ...prev, [field]: val }));
                }}
              />
            )}

            {currentRound === 5 && (
              <Round5FalseMurderer
                round5Choice={round5Choice}
                onAccuseMeera={() => setRound5Choice('accused_meera')}
                onChallengeAi={handleChallengeAi}
                printerLogUnlocked={printerLogUnlocked}
              />
            )}

            {currentRound === 6 && (
              <FinalBossPrompt
                submission={submission}
                onChangeSubmission={(field, val) => {
                  setSubmission((prev) => ({ ...prev, [field]: val }));
                }}
                evaluated={finalEvaluated}
                score={finalScore}
                feedback={finalFeedback}
                onSetEvaluation={(evaluated, score, feedback) => {
                  setFinalEvaluated(evaluated);
                  setFinalScore(score);
                  setFinalFeedback(feedback);
                }}
                onTriggerClimax={() => setIsClimaxTriggered(true)}
              />
            )}

            {/* Master Clue Dossier (Visible across rounds) */}
            <ClueDossier
              evidenceList={accessibleEvidence}
              currentRound={currentRound}
              audioSpeed={audioSpeed}
              onSetAudioSpeed={setAudioSpeed}
              audioRevealedSecret={audioRevealedSecret}
              onAudioRevealedSecret={handleAudioRevealedSecret}
            />
          </>
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

      {/* Footer */}
      <footer className="border-t border-gray-900 py-3 text-center text-[10px] text-gray-600 font-mono">
        PROMPT WAR 2.0 • THE HOUSE THAT REMEMBERS • 55-MINUTE LIVE ESCAPE PROTOCOL • PRESS [CTRL+SHIFT+H] FOR HOST HUD
      </footer>
    </div>
  );
};

export default App;
