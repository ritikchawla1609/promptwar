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
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-600/15 blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center">
        {/* Glowing AI Core Indicator */}
        <div className="relative w-48 h-48 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40 animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-4 rounded-full border-2 border-dotted border-pink-500/40 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />
          <div className="absolute inset-8 rounded-full border border-amber-500/40 animate-spin" style={{ animationDuration: '6s' }} />

          <div className="w-20 h-20 rounded-3xl bg-zinc-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_35px_rgba(0,240,255,0.8)] animate-pulse">
            <Cpu className="w-10 h-10" />
          </div>
        </div>

        {/* Phase Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 font-mono text-xs uppercase tracking-wider font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span>AI ENGINE PROCESSING</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black font-display text-white uppercase tracking-tight mb-2">
          GENERATING YOUR STRATEGY
        </h2>
        <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-6">
          TESTING HOW WELL THE AI FOLLOWED YOUR PROMPT
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-zinc-900 rounded-full h-3 p-0.5 border border-zinc-700 shadow-inner mb-6 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-amber-400 transition-all duration-100 ease-out shadow-[0_0_15px_rgba(0,240,255,0.7)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Live Status Box */}
        <div className="w-full glass-panel rounded-2xl border border-zinc-800 bg-zinc-950/90 p-4 font-mono text-left text-xs shadow-2xl mb-4">
          <div className="space-y-2 h-28 overflow-hidden flex flex-col justify-end">
            {SIMPLE_LOGS.slice(0, currentLogIndex + 1).map((log, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 ${
                  idx === currentLogIndex ? 'text-cyan-300 font-bold' : 'text-zinc-500'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${idx === currentLogIndex ? 'text-cyan-400' : 'text-zinc-600'}`} />
                <span>{log}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSkip}
          className="text-zinc-400 hover:text-white font-mono text-xs underline underline-offset-4 flex items-center gap-1.5"
        >
          <span>Skip to results</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
