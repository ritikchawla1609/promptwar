import React, { useState, useEffect } from 'react';
import DalgonaCookie3D from '../DalgonaCookie3D';
import ArenaBackgroundVideo from '../ArenaBackgroundVideo';
import { cutterAudio } from '../../utils/cutterAudio';
import { Sparkles, ChevronRight, Zap, Target, Award } from 'lucide-react';

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
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-between px-4 py-8 overflow-hidden select-none">
      {/* Full-Bleed High-Production Ambient Video Background */}
      <ArenaBackgroundVideo />

      {/* Hero Header Presentation */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl pt-3">
        {/* Sleek Tournament Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-2xl mb-4 animate-fadeIn shadow-[0_0_25px_rgba(245,158,11,0.2)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-amber-300 font-mono text-[11px] uppercase tracking-[0.25em] font-bold">
            PROMPT WAR // ARENA ZERO
          </span>
          <span className="text-zinc-600 text-[10px]">•</span>
          <span className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest font-semibold">
            LIVE SPRINT
          </span>
        </div>

        {/* Big Metallic Game Title */}
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black font-display tracking-tighter uppercase text-metallic-silver drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] leading-none mb-3">
          PROMPT <span className="text-metallic-rose">WAR</span>
        </h1>

        {/* Subtitle with High-Fashion Spacing */}
        <div className="flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.35em] font-extrabold uppercase mb-2">
          <span className="text-pink-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.6)]">ROUND 01</span>
          <span className="text-zinc-600">•</span>
          <span className="text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]">DALGONA PROMPT</span>
        </div>

        <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase max-w-xl">
          THE PERFECT CUT: SEPARATE THE SIGNAL FROM THE NOISE.
        </p>
      </div>

      {/* Center Hero Interactive 3D Dalgona Cookie with Pedestal Glow */}
      <div className="relative z-10 my-3 flex flex-col items-center justify-center">
        <div className="relative group cursor-pointer" onClick={handleStart}>
          {/* Subtle Ambient Radial Pedestal */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-64 h-8 bg-amber-500/20 rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/35 transition-all duration-500" />
          <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-amber-500/10 via-transparent to-pink-500/10 blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

          {/* 3D Rotatable Cookie */}
          <DalgonaCookie3D size={275} isCracking={false} isBroken={false} />

          {/* Interactive Tooltip Pill */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
            <span className="px-3.5 py-1 rounded-full bg-zinc-950/90 border border-amber-400/50 text-amber-300 font-mono text-[10px] tracking-widest uppercase backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] whitespace-nowrap">
              ROTATE WITH MOUSE // CLICK TO ENTER
            </span>
          </div>
        </div>

        {/* Dynamic Rotating Tagline Ticker */}
        <div className="h-8 mt-5 flex items-center justify-center">
          <p
            key={taglineIndex}
            className="font-mono text-sm sm:text-base font-black text-amber-300 tracking-[0.2em] uppercase animate-fadeIn drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
          >
            “{TAGLINES[taglineIndex]}”
          </p>
        </div>
      </div>

      {/* Bottom Mission CTA & Rules Ribbon */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        {/* Quick Rules Highlights (Luxury Glass Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full">
          <div className="luxury-card luxury-card-hover p-4 rounded-2xl flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.2)] group-hover:border-cyan-400 transition-colors">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-black text-white uppercase tracking-wider">ONE CONTINUOUS CUT</div>
              <div className="text-[11px] font-mono text-zinc-400 leading-relaxed">Trace a single closed loop around the signal.</div>
            </div>
          </div>

          <div className="luxury-card luxury-card-hover p-4 rounded-2xl flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:border-amber-400 transition-colors">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-black text-white uppercase tracking-wider">SHATTER THE REST</div>
              <div className="text-[11px] font-mono text-zinc-400 leading-relaxed">Everything outside dissolves into dust.</div>
            </div>
          </div>

          <div className="luxury-card luxury-card-hover p-4 rounded-2xl flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 shadow-[0_0_15px_rgba(244,63,94,0.2)] group-hover:border-pink-400 transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono font-black text-white uppercase tracking-wider">FORGE THE WEAPON</div>
              <div className="text-[11px] font-mono text-zinc-400 leading-relaxed">Write an elite prompt against 5:00.</div>
            </div>
          </div>
        </div>

        {/* Start Button (High-Voltage Shimmering Luxury CTA) */}
        <button
          onClick={handleStart}
          className="group relative inline-flex items-center justify-center px-12 py-4 rounded-2xl font-mono text-base font-black uppercase tracking-[0.25em] text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_45px_rgba(245,158,11,0.5)] border border-amber-300/40"
        >
          {/* Animated Liquid Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-pink-600 to-amber-500 bg-[length:200%_auto] animate-gradient" />
          
          {/* Light Shimmer Sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <span className="relative flex items-center gap-3.5">
            <Sparkles className="w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '5s' }} />
            <span>ENTER THE COOKIE ARENA</span>
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 text-white" />
          </span>
        </button>

        {/* Telemetry Status Bar */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            HIGH-STAKES TIMED SPRINT
          </span>
          <span className="text-zinc-700">•</span>
          <span>AUTOSAVED WORKSTATION</span>
          <span className="text-zinc-700">•</span>
          <span className="text-emerald-400 font-bold">100-POINT MULTI-VECTOR SCORING</span>
        </div>
      </div>
    </div>
  );
}
