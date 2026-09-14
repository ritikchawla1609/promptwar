import React, { useState } from 'react';
import { cutterAudio } from '../../utils/cutterAudio';
import { Scissors, AlertCircle, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, HelpCircle } from 'lucide-react';

const STEPS = [
  {
    step: 1,
    title: 'THE DALGONA COOKIE',
    subtitle: 'LOOK AT THE CLUES ON THE COOKIE',
    badge: 'STEP 1 // READ',
    description:
      'You are given a round digital Dalgona cookie with 15 short clues on it. Some are important facts you need, some are useless trivia, and some are tricky traps!',
    tip: 'Take 10 seconds to look at the clues before you start drawing.',
    visual: 'cookie',
  },
  {
    step: 2,
    title: 'DRAW YOUR CUT',
    subtitle: 'HOLD & DRAW IN ONE GO',
    badge: 'STEP 2 // CUT',
    description:
      'Click and drag your mouse (or hold your finger on touchscreens) to draw a line around the clues you want to save. You must draw it in ONE continuous stroke.',
    tip: 'Bring your line back close to where you started — it will automatically snap closed and glow cyan!',
    visual: 'laser',
  },
  {
    step: 3,
    title: 'KEEP THE GOOD, LEAVE THE BAD',
    subtitle: 'SELECT ONLY WHAT HELPS YOUR MISSION',
    badge: 'STEP 3 // SELECT',
    description:
      'Any clue inside your loop turns cyan (saved). Clues left outside stay dark (eliminated). Make sure to keep real details (like budget and target audience) and leave traps outside!',
    tip: 'Traps like "Use Shakespearean English" will lower your score if you catch them inside.',
    visual: 'enclose',
  },
  {
    step: 4,
    title: 'BREAK THE COOKIE!',
    subtitle: 'EVERYTHING OUTSIDE DISSOLVES',
    badge: 'STEP 4 // BREAK',
    description:
      'When you are ready, click "Break The Cookie". The cookie cracks with a loud snap! Everything outside your line turns into sugar dust and disappears forever. Only your selected clues survive.',
    tip: 'You only get one cut — once broken, there are no do-overs!',
    visual: 'fracture',
  },
  {
    step: 5,
    title: 'WRITE YOUR AI PROMPT',
    subtitle: 'TURN YOUR CLUES INTO A WINNING PLAN',
    badge: 'STEP 5 // WRITE',
    description:
      'Your surviving clues appear as easy click-to-insert buttons. Use them to write a clear prompt for the AI in the 5-minute timer. Then submit to reveal your score and leaderboard rank!',
    tip: 'A great prompt clearly states the Role, the Goal, the Budget, and the 7-day schedule.',
    visual: 'forge',
  },
];

export default function Screen2Walkthrough({ onProceed, onSkip }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const step = STEPS[currentStepIndex];

  const handleNext = () => {
    cutterAudio.playHover();
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      cutterAudio.playVictory();
      onProceed();
    }
  };

  const handlePrev = () => {
    cutterAudio.playHover();
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleDirectStep = (idx) => {
    cutterAudio.playHover();
    setCurrentStepIndex(idx);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between px-4 py-8 max-w-5xl mx-auto select-none animate-fadeIn">
      {/* Top Header & Step Navigation */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>OPERATIONAL GUIDE // STAGE 02</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-white uppercase tracking-tight">
            HOW ROUND 1 WORKS
          </h2>
        </div>

        {/* Step Indicator Buttons (Luxury Segmented Control) */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
          {STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => handleDirectStep(idx)}
              className={`w-10 h-10 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center ${
                idx === currentStepIndex
                  ? 'bg-gradient-to-r from-amber-500 to-pink-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105'
                  : idx < currentStepIndex
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04]'
              }`}
            >
              {idx < currentStepIndex ? '✓' : `0${s.step}`}
            </button>
          ))}
        </div>
      </div>

      {/* Main Visual Slide Card (Luxury Obsidian Card) */}
      <div className="luxury-card rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-6">
        {/* Left Side: Plain English Explanation */}
        <div className="flex flex-col gap-4 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 font-mono text-xs font-bold w-fit shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{step.badge}</span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mb-1.5">
              {step.title}
            </h3>
            <p className="font-mono text-xs text-cyan-400 font-bold tracking-widest uppercase">
              {step.subtitle}
            </p>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {step.description}
          </p>

          <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-md flex items-start gap-3 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm font-mono text-amber-200 leading-relaxed">
              <strong className="text-amber-400 uppercase tracking-wide">STRATEGY TIP:</strong> {step.tip}
            </div>
          </div>
        </div>

        {/* Right Side: Visual Preview */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-black/60 p-6 flex flex-col items-center justify-center min-h-[320px] shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />

          {step.visual === 'cookie' && (
            <div className="relative flex flex-col items-center animate-scaleUp">
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-800 border-4 border-amber-500/80 shadow-[0_0_40px_rgba(217,119,6,0.5)] flex items-center justify-center relative">
                <div className="absolute w-36 h-36 rounded-full border border-dashed border-amber-300/40 animate-spin" style={{ animationDuration: '24s' }} />
                <div className="text-center font-mono font-black text-amber-100 text-xs px-4">
                  15 CLUES SCATTERED ON THE COOKIE
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">8 Good Clues</span>
                <span className="px-2.5 py-1 rounded bg-zinc-700/50 text-zinc-300 text-xs font-mono">3 Useless Facts</span>
                <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 text-xs font-mono font-bold">4 Traps</span>
              </div>
            </div>
          )}

          {step.visual === 'laser' && (
            <div className="relative w-full h-56 flex items-center justify-center animate-fadeIn">
              <svg className="w-64 h-48">
                <path
                  d="M 60,80 Q 120,30 200,60 T 210,140 T 110,160 Z"
                  fill="rgba(0, 240, 255, 0.15)"
                  stroke="#00F0FF"
                  strokeWidth="3"
                  strokeDasharray="6 3"
                  className="animate-pulse"
                />
                <circle cx="60" cy="80" r="7" fill="#00F0FF" className="animate-ping" />
                <circle cx="60" cy="80" r="5" fill="#FFFFFF" />
              </svg>
              <div className="absolute bottom-2 px-3 py-1 rounded-full bg-black/90 border border-cyan-500/60 font-mono text-xs text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                Bring line back to the dot to close the cut
              </div>
            </div>
          )}

          {step.visual === 'enclose' && (
            <div className="relative w-full flex flex-col items-center gap-2.5 animate-fadeIn">
              <div className="w-full max-w-xs p-3 rounded-xl border-2 border-cyan-400 bg-cyan-950/40 text-cyan-200 font-mono text-xs font-bold flex items-center justify-between shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                <span>✓ "MARKETING BUDGET IS ₹10,000"</span>
                <span className="text-[10px] bg-cyan-500/30 px-2 py-0.5 rounded text-white font-bold">SAVED</span>
              </div>
              <div className="w-full max-w-xs p-3 rounded-xl border border-red-500/40 bg-red-950/20 text-red-400/60 font-mono text-xs line-through flex items-center justify-between">
                <span>✕ "USE SHAKESPEAREAN ENGLISH"</span>
                <span className="text-[10px] bg-red-500/20 px-2 py-0.5 rounded text-red-400 font-bold">TRAP (LEFT OUT)</span>
              </div>
              <div className="w-full max-w-xs p-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-500 font-mono text-xs line-through flex items-center justify-between">
                <span>✕ "COLLEGE ESTABLISHED IN 2001"</span>
                <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">USELESS (LEFT OUT)</span>
              </div>
            </div>
          )}

          {step.visual === 'fracture' && (
            <div className="relative flex flex-col items-center animate-glitch">
              <div className="relative w-48 h-48 rounded-full border-2 border-dashed border-red-500/40 flex items-center justify-center">
                <div className="w-28 h-28 rounded-2xl bg-cyan-900/40 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.7)] flex items-center justify-center text-center p-2">
                  <span className="font-mono text-xs text-white font-black">
                    SAVED CLUES REMAIN INTACT!
                  </span>
                </div>
                <div className="absolute top-2 right-4 text-amber-500 font-mono text-xs opacity-60">CRUMB</div>
                <div className="absolute bottom-4 left-2 text-amber-500 font-mono text-xs opacity-60">DUST</div>
              </div>
              <div className="mt-3 text-xs font-mono text-emerald-400 font-bold uppercase">
                CRACK COMPLETE: ONLY YOUR CUT SURVIVED
              </div>
            </div>
          )}

          {step.visual === 'forge' && (
            <div className="relative w-full flex flex-col gap-2.5 p-2 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="font-mono text-xs text-zinc-300 font-bold">PROMPT EDITOR</span>
                <span className="font-mono text-xs text-amber-400 font-bold">04:59 REMAINING</span>
              </div>
              <div className="w-full h-20 p-2.5 rounded-lg bg-zinc-900 border border-zinc-700 font-mono text-xs text-zinc-200 leading-relaxed">
                <span className="text-cyan-400 font-bold">[Role]</span> Act as an event marketer. Target students aged 18–25 using Instagram and WhatsApp with ₹10,000 budget...
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-mono rounded font-bold">Role: Added</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-mono rounded font-bold">Budget: Added</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-mono rounded font-bold">Goal: Added</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Controls Bar */}
      <div className="w-full flex items-center justify-between pt-4 border-t border-white/[0.08]">
        <button
          onClick={onSkip}
          className="text-zinc-400 hover:text-white font-mono text-xs tracking-wider uppercase transition-colors"
        >
          SKIP TUTORIAL →
        </button>

        <div className="flex items-center gap-3">
          {currentStepIndex > 0 && (
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/[0.1] bg-zinc-900 text-zinc-200 font-mono text-xs font-bold hover:bg-zinc-800 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK</span>
            </button>
          )}

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 text-white font-mono text-xs font-black tracking-wider uppercase shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all"
          >
            <span>{currentStepIndex === STEPS.length - 1 ? 'PROCEED TO MISSION BRIEF' : 'NEXT STEP'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
