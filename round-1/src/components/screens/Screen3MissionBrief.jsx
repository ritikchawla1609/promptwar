import React from 'react';
import { SCENARIOS } from '../../data/dalgonaChallengeData';
import { cutterAudio } from '../../utils/cutterAudio';
import { CheckCircle2, ChevronRight, Sparkles, Layers } from 'lucide-react';

export default function Screen3MissionBrief({
  selectedScenarioId = 'techfest',
  onSelectScenario,
  onStartCutting,
}) {
  const currentScenario = SCENARIOS[selectedScenarioId] || SCENARIOS.techfest;

  const handleStart = () => {
    try {
      cutterAudio.playVictory();
    } catch (e) {}
    onStartCutting();
  };

  const handleChoose = (id) => {
    try {
      cutterAudio.playHover();
    } catch (e) {}
    if (onSelectScenario) onSelectScenario(id);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between px-4 py-6 max-w-5xl mx-auto animate-fadeIn">
      {/* Top Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-400 font-mono text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ROUND 1 // CHOOSE YOUR MISSION SCENARIO</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight uppercase">
          SELECT A MISSION & READ THE BRIEF
        </h2>
        <p className="font-mono text-xs sm:text-sm text-cyan-400 font-bold tracking-wider uppercase">
          DIFFERENT SCENARIOS HAVE DIFFERENT CLUES & TRICKY TRAPS
        </p>
      </div>

      {/* Scenario Selector Cards Carousel / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
        {Object.values(SCENARIOS).map((scen) => {
          const isSelected = scen.id === selectedScenarioId;
          return (
            <div
              key={scen.id}
              onClick={() => handleChoose(scen.id)}
              className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'border-amber-400 bg-amber-500/15 shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-[1.02]'
                  : 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-700 hover:bg-zinc-900/60'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{scen.icon}</span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                    isSelected
                      ? 'bg-amber-500 text-black border-amber-400'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-700'
                  }`}
                >
                  {isSelected ? 'ACTIVE MISSION' : scen.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-base text-white uppercase tracking-tight mb-1 group-hover:text-amber-300 transition-colors">
                  {scen.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {scen.task}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-500">15 Clues on Cookie</span>
                <span className={isSelected ? 'text-amber-400 font-bold' : 'text-zinc-400'}>
                  {isSelected ? '✓ SELECTED' : 'Select →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Mission Directive Card */}
      <div className="glass-panel p-6 rounded-3xl border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden my-2">
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-zinc-800/80">
          <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            ACTIVE OBJECTIVE: {currentScenario.badge}
          </div>
          <span className="text-xs font-mono text-zinc-400">
            {currentScenario.fragments.length} Clues Embedded
          </span>
        </div>

        <p className="text-base sm:text-xl font-mono font-bold text-white leading-relaxed mb-4">
          "{currentScenario.task}"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-zinc-800/80">
          {currentScenario.objectives.map((obj, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suspicious Warning Banner (No spoilers!) */}
      <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm flex items-start gap-3 my-2">
        <span className="text-xl shrink-0">🕵️</span>
        <div className="text-xs sm:text-sm font-mono text-amber-200 leading-relaxed">
          <strong className="text-amber-400 uppercase tracking-wide">SUSPICIOUS WARNING:</strong> The cookie contains real constraints, useless facts, and deceptive traps. <strong>None of the clues are labeled</strong> — you must read carefully and decide what truly belongs in your prompt!
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
        <div className="text-center sm:text-left">
          <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            READY TO CUT: {currentScenario.title}
          </div>
          <div className="font-mono text-xs text-zinc-400">
            Draw your circle around the clues you trust.
          </div>
        </div>

        <button
          onClick={handleStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 font-mono text-sm font-black uppercase tracking-widest text-white shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all"
        >
          <span>START CUTTING THE COOKIE ✂️</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
