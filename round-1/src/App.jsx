import React, { useState } from 'react';
import { cutterAudio } from './utils/cutterAudio';
import { SCENARIOS } from './data/dalgonaChallengeData';

// Game Screens (Round 01: Dalgona Prompt - The Perfect Cut)
import Screen1Intro from './components/screens/Screen1Intro';
import Screen2Walkthrough from './components/screens/Screen2Walkthrough';
import Screen3MissionBrief from './components/screens/Screen3MissionBrief';
import Screen4TheCut from './components/screens/Screen4TheCut';
import Screen5PromptForge from './components/screens/Screen5PromptForge';
import Screen6AiExecution from './components/screens/Screen6AiExecution';
import Screen7ResultAndScore from './components/screens/Screen7ResultAndScore';

import LiveArenaTicker from './components/LiveArenaTicker';
import LiveArenaRadarModal from './components/LiveArenaRadarModal';
import AdminPortal from './components/AdminPortal';

import { Volume2, VolumeX, Sparkles, Layers, Activity } from 'lucide-react';

const SCREENS = {
  INTRO: 1,
  WALKTHROUGH: 2,
  BRIEF: 3,
  CUT: 4,
  FORGE: 5,
  EXECUTION: 6,
  RESULTS: 7,
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.INTRO);
  const [selectedScenarioId, setSelectedScenarioId] = useState('techfest');

  const currentScenario = SCENARIOS[selectedScenarioId] || SCENARIOS.techfest;

  // Surviving fragments defaults to relevant clues of current scenario
  const [survivingFragments, setSurvivingFragments] = useState(
    currentScenario.fragments.filter((f) => f.isRelevant)
  );
  const [viewMode, setViewMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search || '';
      const hash = window.location.hash || '';
      return search.includes('admin') || hash.includes('admin') ? 'admin' : 'player';
    }
    return 'player';
  });
  const [showEvaluatorBar, setShowEvaluatorBar] = useState(false);
  const [isRadarOpen, setIsRadarOpen] = useState(false);

  const goToScreen = (screenNum) => {
    try {
      cutterAudio.playHover();
    } catch (e) {}
    setCurrentScreen(screenNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectScenario = (id) => {
    if (!SCENARIOS[id]) return;
    setSelectedScenarioId(id);
    setSurvivingFragments(SCENARIOS[id].fragments.filter((f) => f.isRelevant));
    setPromptText('');
  };

  const handleToggleAudio = () => {
    try {
      cutterAudio.init();
      cutterAudio.startAmbientDrone();
      const muted = cutterAudio.toggleMute();
      setIsMuted(muted);
    } catch (e) {}
  };

  // Screen 1 -> Screen 2
  const handleStartGame = () => {
    goToScreen(SCREENS.WALKTHROUGH);
  };

  // Screen 2 -> Screen 3
  const handleProceedToBrief = () => {
    goToScreen(SCREENS.BRIEF);
  };

  // Screen 3 -> Screen 4
  const handleStartCutting = () => {
    goToScreen(SCREENS.CUT);
  };

  // Screen 4 -> Screen 5
  const handleCutFinalized = (surviving) => {
    setSurvivingFragments(surviving);
    goToScreen(SCREENS.FORGE);
  };

  // Screen 5 -> Screen 6
  const handlePromptSubmitted = (submittedPrompt, fragments) => {
    setPromptText(submittedPrompt);
    setSurvivingFragments(fragments);
    goToScreen(SCREENS.EXECUTION);
  };

  // Screen 6 -> Screen 7
  const handleExecutionComplete = () => {
    goToScreen(SCREENS.RESULTS);
  };

  // Reset / Play Again (Disabled in Production)
  const handlePlayAgain = () => {
    // Locked for live event integrity
  };

  if (viewMode === 'admin') {
    return <AdminPortal onSwitchToPlayer={() => setViewMode('player')} />;
  }

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-pink-600 selection:text-white relative overflow-x-hidden">
      {/* Ambient Cartoon Atmosphere Glows (No Graph Grids) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-[150px]" />
      </div>

      {/* TOP LUXURY HEADER */}
      <header className="relative z-40 w-full border-b border-white/[0.08] bg-black/60 backdrop-blur-2xl px-6 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        {/* Left Branding */}
        <div className="flex items-center gap-3.5 select-none group cursor-pointer" onClick={() => goToScreen(1)}>
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-pink-500 to-amber-600 p-[1px] shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center font-display font-black text-white text-base tracking-wider">
              PW
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-display font-black tracking-wider text-white">
                PROMPT <span className="text-pink-500 font-extrabold">WAR</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[9px] font-mono uppercase tracking-widest text-amber-300/90 font-bold">
                ARENA ZERO
              </span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-400">
              ROUND 01 • DALGONA PROMPT
            </div>
          </div>
        </div>

        {/* Screen Dots Stepper (Luxury Glass Track) */}
        <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-950/80 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] text-xs font-mono">
          {[
            { num: 1, name: 'Intro' },
            { num: 2, name: 'Guide' },
            { num: 3, name: 'Brief' },
            { num: 4, name: 'The Cut' },
            { num: 5, name: 'Forge' },
            { num: 6, name: 'AI Core' },
            { num: 7, name: 'Score' },
          ].map((s) => {
            const isActive = currentScreen === s.num;
            const isCompleted = currentScreen > s.num;
            return (
              <div
                key={s.num}
                className={`relative px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-300 select-none flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 text-white font-black shadow-[0_0_15px_rgba(245,158,11,0.5)] scale-105'
                    : isCompleted
                    ? 'text-zinc-300 font-semibold hover:text-white'
                    : 'text-zinc-600'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                )}
                {isCompleted && (
                  <span className="text-[10px] text-emerald-400">✓</span>
                )}
                <span>{s.num}. {s.name}</span>
              </div>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Audio Synthesizer Toggle (With Equalizer Bars) */}
          <button
            onClick={handleToggleAudio}
            className={`group flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider transition-all backdrop-blur-xl ${
              isMuted
                ? 'bg-zinc-900/60 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                : 'bg-gradient-to-r from-amber-500/10 to-pink-500/10 border-amber-500/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:border-amber-400'
            }`}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            ) : (
              <div className="flex items-end gap-[2px] h-3.5 w-4">
                <span className="w-[3px] bg-amber-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                <span className="w-[3px] bg-pink-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2/3" />
                <span className="w-[3px] bg-amber-300 rounded-full animate-[pulse_0.75s_ease-in-out_infinite] h-4/5" />
              </div>
            )}
            <span className="text-[11px] font-mono">{isMuted ? 'MUTE' : 'AUDIO'}</span>
          </button>

          {/* Quick Arena Radar Button */}
          <button
            onClick={() => setIsRadarOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARENA RADAR</span>
          </button>

          {/* Combined Admin & Evaluator Portal Switch */}
          <button
            onClick={() => {
              try {
                cutterAudio.playClick();
              } catch (e) {}
              setViewMode('admin');
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-amber-500/50 bg-gradient-to-r from-amber-500/15 to-pink-500/15 hover:from-amber-500/25 hover:to-pink-500/25 text-amber-300 font-mono text-xs font-black transition-all shadow-[0_0_18px_rgba(245,158,11,0.25)] hover:scale-105"
            title="Switch to Combined Evaluator & Admin Console"
          >
            <span>👑</span>
            <span className="tracking-wider">ADMIN</span>
          </button>
        </div>
      </header>

      {/* REAL-TIME DYNAMIC LIVE ARENA TICKER */}
      <LiveArenaTicker onOpenRadar={() => setIsRadarOpen(true)} />

      {/* REAL-TIME TELEMETRY RADAR MODAL */}
      <LiveArenaRadarModal isOpen={isRadarOpen} onClose={() => setIsRadarOpen(false)} />
      {showEvaluatorBar && (
        <div className="relative z-30 w-full bg-zinc-950 border-b border-zinc-800 text-[11px] font-mono py-1.5 px-4 flex flex-wrap items-center justify-between gap-2 shadow-md">
          {/* Scenario Switcher */}
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="text-amber-400 font-bold uppercase flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>SCENARIO:</span>
            </span>
            <div className="flex items-center gap-1">
              {Object.values(SCENARIOS).map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => handleSelectScenario(scen.id)}
                  className={`px-2.5 py-0.5 rounded-lg border text-[11px] transition-all ${
                    selectedScenarioId === scen.id
                      ? 'border-amber-400 bg-amber-500/20 text-amber-300 font-bold'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                >
                  {scen.icon} {scen.badge}
                </button>
              ))}
            </div>
          </div>

          {/* Screen Jumps */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button onClick={() => goToScreen(SCREENS.INTRO)} className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200">1. Intro</button>
            <button onClick={() => goToScreen(SCREENS.WALKTHROUGH)} className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200">2. Walkthrough</button>
            <button onClick={() => goToScreen(SCREENS.BRIEF)} className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200">3. Brief</button>
            <button onClick={() => goToScreen(SCREENS.CUT)} className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-amber-500/60 text-amber-300 font-bold">4. The Cut ✂️</button>
            <button onClick={() => goToScreen(SCREENS.FORGE)} className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200">5. Forge</button>
            <button onClick={() => goToScreen(SCREENS.EXECUTION)} className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200">6. AI Core</button>
            <button onClick={() => goToScreen(SCREENS.RESULTS)} className="px-2 py-0.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200">7. Score</button>
            <button onClick={() => setShowEvaluatorBar(false)} className="text-zinc-500 hover:text-white px-1">✕</button>
          </div>
        </div>
      )}

      {/* MAIN SCREEN CANVAS */}
      <main className="flex-1 flex flex-col justify-center relative z-10">
        {currentScreen === SCREENS.INTRO && (
          <Screen1Intro onStartGame={handleStartGame} />
        )}

        {currentScreen === SCREENS.WALKTHROUGH && (
          <Screen2Walkthrough
            onProceed={handleProceedToBrief}
            onSkip={handleProceedToBrief}
          />
        )}

        {currentScreen === SCREENS.BRIEF && (
          <Screen3MissionBrief
            selectedScenarioId={selectedScenarioId}
            onSelectScenario={handleSelectScenario}
            onStartCutting={handleStartCutting}
          />
        )}

        {currentScreen === SCREENS.CUT && (
          <Screen4TheCut
            scenario={currentScenario}
            onCutFinalized={handleCutFinalized}
          />
        )}

        {currentScreen === SCREENS.FORGE && (
          <Screen5PromptForge
            scenario={currentScenario}
            survivingFragments={survivingFragments}
            onPromptSubmitted={handlePromptSubmitted}
          />
        )}

        {currentScreen === SCREENS.EXECUTION && (
          <Screen6AiExecution
            onExecutionComplete={handleExecutionComplete}
          />
        )}

        {currentScreen === SCREENS.RESULTS && (
          <Screen7ResultAndScore
            scenario={currentScenario}
            survivingFragments={survivingFragments}
            promptText={promptText}
            onPlayAgain={handlePlayAgain}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="relative z-20 w-full border-t border-zinc-900 bg-zinc-950 py-3 px-5 text-center text-[11px] font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          PROMPT WAR &bull; ROUND 01: DALGONA PROMPT &bull; THE PERFECT CUT
        </div>
        <div className="text-amber-400 font-bold">
          "TRUST YOUR INSTINCT. CUT THE NOISE."
        </div>
      </footer>
    </div>
  );
}
