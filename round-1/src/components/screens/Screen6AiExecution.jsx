import React, { useState, useEffect } from 'react';
import { cutterAudio } from '../../utils/cutterAudio';
import { Cpu, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

const SIMPLE_LOGS = [
  'Reading your submitted prompt and saved clues...',
  'Checking for role, budget, and channel details...',
  'Generating the 7-day techfest marketing plan...',
  'Scoring clue precision and noise avoidance...',
  'Calculating your leaderboard ranking...',
  'All done! Preparing your final score...',
];

export default function Screen6AiExecution({ onExecutionComplete }) {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    try {
      cutterAudio.playSubDrop();
    } catch (e) {}

    // Progress bar ticker
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 3;
      });
    }, 60);

    // Friendly log stream
    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => {
        if (prev < SIMPLE_LOGS.length - 1) {
          try {
            cutterAudio.playScoreTick();
          } catch (e) {}
          return prev + 1;
        }
        return prev;
      });
    }, 450);

    // Automatic transition to results screen
    const completeTimer = setTimeout(() => {
      try {
        cutterAudio.playVictory();
      } catch (e) {}
      onExecutionComplete();
    }, 3200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
      clearTimeout(completeTimer);
    };
  }, []);

  const handleSkip = () => {
    try {
      cutterAudio.playVictory();
    } catch (e) {}
    onExecutionComplete();
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[140px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center">
        {/* Glowing AI Orbital Core */}
        <div className="relative w-52 h-52 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin" style={{ animationDuration: '16s' }} />
          <div className="absolute inset-3 rounded-full border border-dashed border-pink-500/30 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
          <div className="absolute inset-7 rounded-full border border-dotted border-amber-400/40 animate-spin" style={{ animationDuration: '6s' }} />

          {/* Center Pulsing Medallion */}
          <div className="relative w-24 h-24 rounded-3xl luxury-card bg-black/80 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_50px_rgba(0,240,255,0.4)]">
            <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 animate-pulse" />
            <Cpu className="w-11 h-11 text-cyan-300 animate-pulse relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
          </div>
        </div>

        {/* Phase Header Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full luxury-pill border border-cyan-400/30 bg-cyan-950/30 text-cyan-300 font-mono text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
          <span>NEURAL MATRIX EXECUTING</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black font-display text-metallic-silver uppercase tracking-tight mb-2">
          GENERATING VERDICT
        </h2>
        <p className="font-mono text-xs text-zinc-400 uppercase tracking-[0.25em] mb-6">
          SYNTHESIZING PROMPT RIGOR &bull; EXECUTING SCENARIO
        </p>

        {/* Sleek Laser Progress Bar */}
        <div className="w-full mb-6">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5 px-1">
            <span>COMPUTING VECTORS</span>
            <span className="text-cyan-300 font-bold">{Math.min(100, Math.round(progress))}%</span>
          </div>
          <div className="w-full bg-black/80 rounded-full h-3 p-0.5 border border-white/[0.08] shadow-inner overflow-hidden backdrop-blur-xl">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-400 transition-all duration-100 ease-out shadow-[0_0_20px_rgba(0,240,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Live Terminal Log Stream */}
        <div className="w-full luxury-card rounded-3xl border border-white/[0.08] bg-black/80 backdrop-blur-2xl p-5 font-mono text-left text-xs shadow-2xl mb-4 relative overflow-hidden">
          {/* Subtle scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

          <div className="space-y-2.5 h-28 overflow-hidden flex flex-col justify-end relative z-10">
            {SIMPLE_LOGS.slice(0, currentLogIndex + 1).map((log, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2.5 transition-all ${
                  idx === currentLogIndex
                    ? 'text-cyan-300 font-bold drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                    : 'text-zinc-600'
                }`}
              >
                <CheckCircle2
                  className={`w-3.5 h-3.5 shrink-0 ${
                    idx === currentLogIndex ? 'text-cyan-400 animate-pulse' : 'text-emerald-500/40'
                  }`}
                />
                <span className="truncate">{log}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSkip}
          className="text-zinc-400 hover:text-white font-mono text-xs luxury-pill px-4 py-1.5 rounded-full border border-white/[0.06] hover:border-white/[0.15] bg-white/[0.02] flex items-center gap-1.5 transition-all"
        >
          <span>Skip straight to verdict</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
