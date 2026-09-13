import React, { useState, useEffect } from 'react';
import DalgonaCookie3D from '../DalgonaCookie3D';
import CinematicIntroVideo from '../CinematicIntroVideo';
import { cutterAudio } from '../../utils/cutterAudio';
import { Shield, Sparkles, Flame, ChevronRight, Zap, Target, Award, Film, Box, Play } from 'lucide-react';

const TAGLINES = [
  'EVERY PROMPT HAS NOISE...',
  'EVERY PROMPT HAS CONTEXT...',
  'CAN YOU TELL THE DIFFERENCE?',
  'ONE CUT. ONE PROMPT. ONE CHANCE.',
];

export default function Screen1Intro({ onStartGame }) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [heroView, setHeroView] = useState('video'); // 'video' or '3d'
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false);

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

  const handleOpenFullscreenVideo = () => {
    cutterAudio.init();
    cutterAudio.playCinematicBoom();
    setShowFullscreenVideo(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-between px-4 py-6 overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Badge */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl pt-1">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 backdrop-blur-md mb-3 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-amber-300 font-mono text-xs uppercase tracking-[0.25em] font-bold">
            PROMPT WAR // ARENA ZERO
          </span>
        </div>

        {/* Big Game Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-[0_0_35px_rgba(255,255,255,0.2)] leading-none mb-2">
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

      {/* Center Hero Mode Switcher */}
      <div className="relative z-10 mt-3 mb-1 flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 p-1 rounded-xl backdrop-blur-md">
        <button
          onClick={() => {
            cutterAudio.playHover();
            setHeroView('video');
          }}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all ${
            heroView === 'video'
              ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.5)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>CINEMATIC INTRO VIDEO</span>
        </button>

        <button
          onClick={() => {
            cutterAudio.playHover();
            setHeroView('3d');
          }}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all ${
            heroView === '3d'
              ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.5)]'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          <span>3D COOKIE CORE</span>
        </button>
      </div>

      {/* Center Stage: Video or 3D Cookie */}
      <div className="relative z-10 w-full max-w-4xl my-2 flex flex-col items-center justify-center">
        {heroView === 'video' ? (
          <div className="w-full">
            <CinematicIntroVideo
              onComplete={handleStart}
              onSkip={handleStart}
              autoPlay={true}
              isModal={false}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4">
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
        )}
      </div>

      {/* Bottom Mission CTA & Rules Ribbon */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-5 mt-2">
        {/* Quick Rules Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase">ONE CONTINUOUS CUT</div>
              <div className="text-[11px] font-mono text-zinc-400">Trace a closed loop around the signal.</div>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase">SHATTER THE REST</div>
              <div className="text-[11px] font-mono text-zinc-400">Everything outside dissolves into dust.</div>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-white uppercase">FORGE THE WEAPON</div>
              <div className="text-[11px] font-mono text-zinc-400">Write an elite prompt against 5:00.</div>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {/* Main Start Button */}
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center px-10 py-3.5 rounded-2xl font-mono text-base font-black uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_35px_rgba(245,158,11,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-pink-600 to-amber-500 bg-[length:200%_auto] animate-gradient" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            
            <span className="relative flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>ENTER THE COOKIE ARENA</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-white" />
            </span>
          </button>

          {/* Fullscreen Video Cinema Button */}
          <button
            onClick={handleOpenFullscreenVideo}
            className="px-6 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300 hover:text-white bg-zinc-900/90 border border-zinc-700/80 hover:border-pink-500/80 transition-all flex items-center gap-2.5 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <Film className="w-4 h-4 text-pink-400" />
            <span>FULLSCREEN CINEMATIC TRAILER</span>
          </button>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-500 tracking-wider uppercase">
          <span>HIGH-STAKES TIMED SPRINT</span>
          <span>•</span>
          <span>AUTOSAVED WORKSTATION</span>
          <span>•</span>
          <span>100-POINT MULTI-VECTOR SCORING</span>
        </div>
      </div>

      {/* Fullscreen Cinema Modal */}
      {showFullscreenVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-xl animate-fadeIn">
          <CinematicIntroVideo
            onComplete={() => {
              setShowFullscreenVideo(false);
              handleStart();
            }}
            onSkip={() => setShowFullscreenVideo(false)}
            autoPlay={true}
            isModal={true}
          />
        </div>
      )}
    </div>
  );
}
