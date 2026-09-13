import React from 'react';
import CookieCutterCanvas from '../CookieCutterCanvas';
import { MISSION_DATA } from '../../data/dalgonaChallengeData';
import { Target, Sparkles } from 'lucide-react';

export default function Screen4TheCut({ scenario = MISSION_DATA, onCutFinalized }) {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between py-2 px-2 sm:px-4">
      {/* Sleek Mission Reminder Bar */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 px-4 py-2 rounded-2xl glass-panel border border-zinc-800 bg-zinc-950/80 mb-2">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold text-white truncate max-w-lg">
            Mission: <span className="text-amber-300">{scenario.title}</span>
          </div>
        </div>

        {/* Quick Suspense Instructions */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold">
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
