import React, { useState, useEffect } from 'react';
import CartoonIntroAnimation from '../CartoonIntroAnimation';
import { cutterAudio } from '../../utils/cutterAudio';
import { Sparkles, ChevronRight, Zap, Target, Award, Flame } from 'lucide-react';

const TAGLINES = [
  'SAVE MR. DALGONA: CUT THE NOISE! 🍪',
  'ONE CONTINUOUS CUT. ZERO SECOND CHANCES.',
  'DODGE THE RED TRAPS • FORGE THE WEAPON!',
  '100% CONTEXT SIGNAL = MAXIMUM SCORE! ⚡',
];

export default function Screen1Intro({ onStartGame }) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleStart = () => {
    cutterAudio.init();
    cutterAudio.playCartoonFanfare();
    onStartGame();
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-between px-4 py-4 overflow-hidden">
      {/* Warm Ambient Party Glows (No Graph Grids!) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl pt-1">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-amber-400/50 bg-amber-500/10 backdrop-blur-md mb-2 animate-fadeIn shadow-[0_0_15px_rgba(251,191,36,0.2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-amber-300 font-mono text-xs uppercase tracking-[0.25em] font-black">
            PROMPT WAR // ROUND 01
          </span>
        </div>

        {/* Big Game Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-amber-300 drop-shadow-[0_0_35px_rgba(251,191,36,0.35)] leading-none mb-2">
          PROMPT WAR
        </h1>

        <div className="flex items-center gap-3 text-pink-400 font-mono text-sm sm:text-base tracking-[0.25em] font-black uppercase mb-1">
          <span>DALGONA PROMPT</span>
          <span className="text-zinc-600">•</span>
          <span className="text-amber-300">THE PERFECT CUT</span>
        </div>

        {/* Rotating Animated Tagline */}
        <div className="h-6 flex items-center justify-center">
          <p
            key={taglineIndex}
            className="font-mono text-xs sm:text-sm font-bold text-zinc-300 tracking-wider uppercase animate-fadeIn"
          >
            {TAGLINES[taglineIndex]}
          </p>
        </div>
      </div>

      {/* Center Stage: Cartoon Animated Movie */}
      <div className="relative z-10 w-full max-w-4xl my-2 flex flex-col items-center justify-center">
        <CartoonIntroAnimation
          onStartGame={handleStart}
          onSkip={handleStart}
        />
      </div>

      {/* Bottom Mission CTA & Rules Ribbon */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-4 mt-2">
        {/* Quick Rules Highlights (Fun Cartoon Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          <div className="glass-panel p-3.5 rounded-2xl border-2 border-cyan-500/30 flex items-center gap-3 bg-zinc-900/60 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0 font-black text-lg">
              🎯
            </div>
            <div>
              <div className="text-xs font-mono font-black text-white uppercase">ONE CONTINUOUS CUT</div>
              <div className="text-[11px] font-mono text-zinc-400">Loop around the golden signal clues.</div>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-2xl border-2 border-pink-500/30 flex items-center gap-3 bg-zinc-900/60 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border-2 border-pink-400 flex items-center justify-center text-pink-300 shrink-0 font-black text-lg">
              💥
            </div>
            <div>
              <div className="text-xs font-mono font-black text-white uppercase">POP ALL THE TRAPS</div>
              <div className="text-[11px] font-mono text-zinc-400">Shatter the red noise into sweet dust.</div>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-2xl border-2 border-amber-500/30 flex items-center gap-3 bg-zinc-900/60 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shrink-0 font-black text-lg">
              ⚡
            </div>
            <div>
              <div className="text-xs font-mono font-black text-white uppercase">FORGE THE WEAPON</div>
              <div className="text-[11px] font-mono text-zinc-400">Write an elite prompt against 5:00.</div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="group relative inline-flex items-center justify-center px-12 py-4 rounded-2xl font-mono text-base font-black uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_35px_rgba(251,191,36,0.5)] border-2 border-amber-300/60"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 bg-[length:200%_auto] animate-gradient" />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
          
          <span className="relative flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
            <span>ENTER THE COOKIE ARENA</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 text-white" />
          </span>
        </button>

        <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
          <span>HIGH-STAKES TIMED SPRINT</span>
          <span>•</span>
          <span>AUTOSAVED WORKSTATION</span>
          <span>•</span>
          <span>100-POINT SCORING</span>
        </div>
      </div>
    </div>
  );
}
