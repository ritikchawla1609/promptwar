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
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between px-4 py-6 max-w-5xl mx-auto select-none animate-fadeIn">
      {/* Top Header */}
      <div className="text-center space-y-2 pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 font-mono text-xs font-bold uppercase tracking-widest backdrop-blur-xl shadow-[0_0_20px_rgba(244,63,94,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STAGE 03 // MISSION BRIEFING</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
          SELECT YOUR TARGET DIRECTIVE
        </h2>
        <p className="font-mono text-xs sm:text-sm text-cyan-400 font-bold tracking-widest uppercase">
          EACH DIRECTIVE CARRIES UNIQUE CONTEXT CLUES & COVERT TRAPS
        </p>
      </div>

      {/* Scenario Selector Cards Carousel / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {Object.values(SCENARIOS).map((scen) => {
          const isSelected = scen.id === selectedScenarioId;
          return (
            <div
              key={scen.id}
              onClick={() => handleChoose(scen.id)}
              className={`cursor-pointer p-5 rounded-3xl border transition-all flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'border-amber-400/80 bg-gradient-to-b from-amber-500/15 via-zinc-950/80 to-zinc-950/90 shadow-[0_0_35px_rgba(245,158,11,0.3)] scale-[1.02]'
                  : 'luxury-card luxury-card-hover'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] shadow-inner">{scen.icon}</span>
                <span
                  className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                    isSelected
                      ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                      : 'bg-zinc-900/80 text-zinc-400 border-white/[0.08]'
                  }`}
                >
                  {isSelected ? 'ACTIVE TARGET' : scen.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-tight mb-1.5 group-hover:text-amber-300 transition-colors">
                  {scen.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {scen.task}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-500">15 Clues on Cookie</span>
                <span className={isSelected ? 'text-amber-400 font-bold' : 'text-zinc-400 group-hover:text-white transition-colors'}>
                  {isSelected ? '✓ SELECTED' : 'SELECT DIRECTIVE →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Mission Directive Dossier Card */}
      <div className="luxury-card p-6 sm:p-7 rounded-3xl border border-cyan-500/30 shadow-[0_0_35px_rgba(0,240,255,0.12)] relative overflow-hidden my-2">
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>CONFIDENTIAL OBJECTIVE // {currentScenario.badge}</span>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            {currentScenario.fragments.length} Clues Inscribed
          </span>
        </div>

        <p className="text-lg sm:text-2xl font-mono font-black text-white leading-relaxed mb-5 text-metallic-silver">
          "{currentScenario.task}"
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/[0.08]">
          {currentScenario.objectives.map((obj, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suspicious Warning Banner */}
      <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl flex items-start gap-3.5 my-2 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
        <span className="text-2xl shrink-0">⚠️</span>
        <div className="text-xs sm:text-sm font-mono text-amber-200 leading-relaxed">
          <strong className="text-amber-400 uppercase tracking-wide">ENTERPRISE CLASSIFICATION NOTICE:</strong> The cookie contains real constraints, conversational noise, and subtle trap clauses. <strong>None of the clues carry labels</strong> — verify authenticity before you commit your cut!
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
        <div className="text-center sm:text-left">
          <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            READY TO ENGAGE: {currentScenario.title}
          </div>
          <div className="font-mono text-xs text-zinc-400">
            Draw your continuous boundary around verified signal clues.
          </div>
        </div>

        <button
          onClick={handleStart}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 font-mono text-sm font-black uppercase tracking-widest text-white shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all"
        >
          <span>PROCEED TO THE CUT</span>
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
