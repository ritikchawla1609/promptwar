import React, { useState, useEffect } from 'react';
import DalgonaCookie3D from '../DalgonaCookie3D';
import { cutterAudio } from '../../utils/cutterAudio';
import { Shield, Sparkles, Flame, ChevronRight, Zap, Target, Award } from 'lucide-react';

const TAGLINES = [
  'EVERY PROMPT HAS NOISE...',
  'EVERY PROMPT HAS CONTEXT...',
  'CAN YOU TELL THE DIFFERENCE?',
  'ONE CUT. ONE PROMPT. ONE CHANCE.',
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
    cutterAudio.playVictory();
    onStartGame();
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-between px-4 py-8 overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-md mb-4 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-amber-300 font-mono text-xs uppercase tracking-[0.25em] font-bold">
            PROMPT WAR // ARENA ZERO
          </span>
        </div>

        {/* Big Game Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-[0_0_35px_rgba(255,255,255,0.2)] leading-none mb-3">
          PROMPT WAR
        </h1>

        <div className="flex items-center gap-3 text-pink-500 font-mono text-sm sm:text-base tracking-[0.3em] font-bold uppercase mb-2">
          <span>ROUND 01</span>
          <span className="text-zinc-600">•</span>
          <span className="text-amber-400">DALGONA PROMPT</span>
        </div>

        <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
          THE PERFECT CUT: CUT THE NOISE. FORGE THE WEAPON.
        </p>
      </div>

      {/* Hero Interactive 3D Dalgona Cookie */}
      <div className="relative z-10 my-4 flex flex-col items-center justify-center">
        <div className="relative group cursor-pointer" onClick={handleStart}>
          <DalgonaCookie3D size={270} isCracking={false} isBroken={false} />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <span className="px-3 py-1 rounded-full bg-black/80 border border-amber-400/60 text-amber-300 font-mono text-[10px] tracking-widest uppercase">
              ROTATE WITH MOUSE // CLICK TO ENTER
            </span>
          </div>
        </div>

        {/* Dynamic Rotating Tagline */}
        <div className="h-8 mt-4 flex items-center justify-center">
          <p
            key={taglineIndex}
            className="font-mono text-sm sm:text-base font-black text-amber-300 tracking-[0.2em] uppercase animate-fadeIn drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]"
          >
            {TAGLINES[taglineIndex]}
          </p>
        </div>
      </div>

      {/* Bottom Mission CTA & Rules Ribbon */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        {/* Quick Rules Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          <div className="glass-panel p-4 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase">ONE CONTINUOUS CUT</div>
              <div className="text-[11px] font-mono text-zinc-400">Trace a closed loop around the signal.</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase">SHATTER THE REST</div>
              <div className="text-[11px] font-mono text-zinc-400">Everything outside dissolves into dust.</div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase">FORGE THE WEAPON</div>
              <div className="text-[11px] font-mono text-zinc-400">Write an elite prompt against 5:00.</div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="group relative inline-flex items-center justify-center px-10 py-4 rounded-2xl font-mono text-base font-black uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_35px_rgba(245,158,11,0.4)]"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-pink-600 to-amber-500 bg-[length:200%_auto] animate-gradient" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          
          <span className="relative flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>ENTER THE COOKIE ARENA</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-white" />
          </span>
        </button>

        <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-500 tracking-wider uppercase">
          <span>HIGH-STAKES TIMED SPRINT</span>
          <span>•</span>
          <span>AUTOSAVED WORKSTATION</span>
          <span>•</span>
          <span>100-POINT MULTI-VECTOR SCORING</span>
        </div>
      </div>
    </div>
  );
}
