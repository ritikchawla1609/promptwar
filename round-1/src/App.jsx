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

import { Volume2, VolumeX, Sparkles, Layers } from 'lucide-react';

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
  const [promptText, setPromptText] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [showEvaluatorBar, setShowEvaluatorBar] = useState(
    typeof window !== 'undefined' && window.location.search.includes('admin')
  );

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

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-pink-600 selection:text-white relative overflow-x-hidden">
      {/* Ambient Cartoon Atmosphere Glows (No Graph Grids) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-600/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-[150px]" />
      </div>

      {/* TOP HEADER */}
      <header className="relative z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md px-5 py-3.5 flex items-center justify-between">
        {/* Left Branding */}
        <div className="flex items-center gap-3 select-none group">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center font-display font-black text-amber-400 text-lg shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            PW
          </div>
          <div>
            <div className="text-base font-display font-black tracking-wider text-white">
              PROMPT <span className="text-pink-500">WAR</span>
            </div>
            <div className="text-[10px] font-mono tracking-widest text-zinc-400">
              ROUND 01 : DALGONA PROMPT
            </div>
          </div>
        </div>

        {/* Screen Dots Stepper (Read-Only in Production) */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono">
          <span className="text-zinc-500 font-bold px-1">STAGE {currentScreen}/7:</span>
          {[
            { num: 1, name: 'Intro' },
            { num: 2, name: 'Walkthrough' },
            { num: 3, name: 'Brief' },
            { num: 4, name: 'The Cut' },
            { num: 5, name: 'Prompt Forge' },
            { num: 6, name: 'AI Core' },
            { num: 7, name: 'Score' },
          ].map((s) => (
            <div
              key={s.num}
              className={`px-2.5 py-0.5 rounded-lg text-[11px] font-mono transition-all select-none ${
                currentScreen === s.num
                  ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white font-black shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                  : currentScreen > s.num
                  ? 'text-zinc-300 font-semibold'
                  : 'text-zinc-600'
              }`}
            >
              {s.num}. {s.name}
            </div>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleToggleAudio}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold tracking-wider transition-all ${
              isMuted
                ? 'bg-zinc-900 border-zinc-700 text-zinc-400'
                : 'bg-zinc-900 border-amber-500/60 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-amber-400" />}
            <span>{isMuted ? 'AUDIO: OFF' : 'AUDIO: ON'}</span>
          </button>
        </div>
      </header>

      {/* EVALUATOR & SCENARIO BAR */}
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
