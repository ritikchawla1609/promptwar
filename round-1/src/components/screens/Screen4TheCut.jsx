import React from 'react';
import CookieCutterCanvas from '../CookieCutterCanvas';
import { MISSION_DATA } from '../../data/dalgonaChallengeData';
import { Target, Sparkles } from 'lucide-react';

export default function Screen4TheCut({ scenario = MISSION_DATA, onCutFinalized }) {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between py-2 px-2 sm:px-4">
      {/* Sleek Mission Reminder Bar */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 px-4 py-2 rounded-2xl luxury-card bg-black/60 backdrop-blur-2xl border border-white/[0.08] mb-2 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500/20 to-pink-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)] shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold text-white truncate max-w-lg">
            Mission: <span className="text-metallic-gold font-black">{scenario.title}</span>
          </div>
        </div>

        {/* Quick Suspense Instructions */}
        <div className="flex items-center gap-2 px-3.5 py-1 rounded-full luxury-pill bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Draw around clues you trust • Return to green dot to finish</span>
        </div>
      </div>

      {/* Main Interactive Spacious Cutting Arena */}
      <div className="flex-1 flex items-center justify-center">
        <CookieCutterCanvas
          fragments={scenario.fragments}
          onCutFinalized={onCutFinalized}
        />
      </div>
    </div>
  );
}
