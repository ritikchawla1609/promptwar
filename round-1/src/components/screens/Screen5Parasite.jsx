import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { Clock, Eye, Maximize2, Minimize2, Edit3, ArrowRight, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';

export default function Screen5Parasite({
  session,
  matchedOpponents = [],
  timer = 300,
  onUpdateSession,
  onProceedToEvolve,
}) {
  const [focusedCol, setFocusedCol] = useState(null); // null | 'YOU' | 'OP1' | 'OP2'
  const [notes, setNotes] = useState(session.mutationNotes || '');
  const [showMidwayAlert, setShowMidwayAlert] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // Autosave notes
  useEffect(() => {
    onUpdateSession({ mutationNotes: notes });
  }, [notes]);

  // Midway message at 02:30 (150 seconds)
  useEffect(() => {
    if (timer <= 150 && timer > 130) {
      setShowMidwayAlert(true);
      parasiteAudio.playWarning();
    } else {
      setShowMidwayAlert(false);
    }

    if (timer <= 0) {
      setIsTimeUp(true);
      parasiteAudio.playSubDrop();
    }
  }, [timer]);

  const op1 = matchedOpponents[0] || {
    anonymousId: 'UNKNOWN 01',
    output: 'Waiting for opponent data feed...',
  };
  const op2 = matchedOpponents[1] || {
    anonymousId: 'UNKNOWN 02',
    output: 'Waiting for opponent data feed...',
  };

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Phase Finished Screen when 00:00 is reached
  if (isTimeUp) {
    return (
      <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-12 max-w-5xl mx-auto select-none">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
          <span className="text-bone-400 uppercase tracking-widest">
            PHASE 03: PARASITE STUDY COMPLETED
          </span>
          <span className="text-acid-lime font-bold uppercase tracking-wider">
            OPPONENT STREAMS PURGED
          </span>
        </div>

        <div className="my-auto py-12 flex flex-col items-center text-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-acid-lime font-bold mb-3">
            SYNTHESIS TIMEOUT REACHED
          </span>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-bone-100 uppercase tracking-tightest mb-4">
            THE INFECTION IS COMPLETE.
          </h2>

          <p className="font-mono text-base sm:text-lg text-acid-lime uppercase tracking-widest font-bold mb-8">
            NOW EVOLVE.
          </p>

          <p className="font-sans text-xs sm:text-sm text-bone-400 max-w-lg leading-relaxed mb-8">
            Opponent outputs have been securely closed to prevent direct duplication. Your private Mutation Notes have been saved and are ready inside your Final Form workspace.
          </p>

          <button
            onClick={onProceedToEvolve}
            className="editorial-btn group px-8 py-4 text-xs sm:text-sm"
          >
            <span>ENTER EVOLUTION WORKSPACE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
          <span>PRIVATE NOTES PRESERVED</span>
          <span>STAGE 04: BUILD FINAL FORM</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[calc(100vh-56px)] px-4 sm:px-6 py-6 max-w-7xl mx-auto flex flex-col justify-between select-none">
      {/* Top Bar */}
      <div>
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-acid-lime animate-pulse" />
            <span className="text-bone-300 uppercase tracking-wider font-bold">
              PROMPT WAR // ROUND 01 // PARASITE MODE ACTIVE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-bone-500 text-[11px] hidden sm:inline-block">
              COPY/DOWNLOAD RESTRICTED
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-acid-lime/10 border border-acid-lime/30 text-acid-lime font-bold">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTimer(timer)}</span>
            </div>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-4">
          <div>
            <h1 className="font-display font-black text-2xl sm:text-4xl text-bone-100 uppercase tracking-tight">
              FIND WHAT YOU MISSED.
            </h1>
            <p className="font-sans text-xs sm:text-sm text-bone-400 mt-0.5">
              Your opponents may have seen tactical advantages, timeline structures, or conversion vectors you overlooked.
            </p>
          </div>

          {focusedCol && (
            <button
              onClick={() => setFocusedCol(null)}
              className="font-mono text-xs text-bone-400 hover:text-white border border-white/[0.1] px-3 py-1 bg-charcoal-900 flex items-center gap-1.5"
            >
              <Minimize2 className="w-3 h-3" />
              <span>EXIT FOCUS VIEW (SHOW ALL 3)</span>
            </button>
          )}
        </div>

        {/* Subtle Midway Coaching Alert (Around 02:30 mark) */}
        {showMidwayAlert && (
          <div className="mb-4 p-3 border border-acid-lime/40 bg-acid-lime/5 text-acid-lime text-xs font-mono flex items-center gap-2 animate-fadeIn">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span className="font-bold uppercase tracking-wider">
              MIDWAY DIRECTIVE: DON’T COPY THE FORM. UNDERSTAND THE ADVANTAGE.
            </span>
          </div>
        )}
      </div>

      {/* 3-COLUMN EDITORIAL OUTPUT COMPARISON MATRIX */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 items-stretch my-2">
        {/* COLUMN 01: YOUR FIRST FORM (Electric Cyan - Left Brain Polarity) */}
        {(!focusedCol || focusedCol === 'YOU') && (
          <div
            className={`flex flex-col border border-cyan/50 bg-charcoal-950/90 shadow-[0_0_25px_rgba(0,240,255,0.08)] transition-all ${
              focusedCol === 'YOU' ? 'lg:col-span-12' : focusedCol ? 'hidden' : 'lg:col-span-4'
            }`}
          >
            <div className="p-3.5 border-b border-white/[0.08] bg-charcoal-900/80 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-cyan text-charcoal-950 text-[10px] font-black uppercase">
                  YOU
                </span>
                <span className="font-bold text-cyan uppercase tracking-wider">
                  YOUR FIRST FORM
                </span>
              </div>
              <button
                onClick={() => setFocusedCol(focusedCol === 'YOU' ? null : 'YOU')}
                className="text-bone-500 hover:text-cyan transition-colors"
                title="Expand Column"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto max-h-[420px] font-mono text-xs sm:text-[13px] text-bone-300 leading-relaxed whitespace-pre-wrap selection:bg-cyan selection:text-charcoal-950">
              {session.firstOutput || (
                <span className="text-bone-600 italic">No output text recorded for First Form.</span>
              )}
            </div>

            <div className="p-2 border-t border-white/[0.06] bg-charcoal-900/40 text-[10px] font-mono text-cyan/70 flex justify-between">
              <span>BASELINE DRAFT</span>
              <span>{session.firstOutput ? session.firstOutput.length : 0} chars</span>
            </div>
          </div>
        )}

        {/* COLUMN 02: UNKNOWN 01 (Cyber Crimson - Right Brain Polarity) */}
        {(!focusedCol || focusedCol === 'OP1') && (
          <div
            className={`flex flex-col border border-crimson/40 bg-charcoal-950/90 shadow-[0_0_20px_rgba(255,42,95,0.06)] transition-all hover:border-crimson/60 ${
              focusedCol === 'OP1' ? 'lg:col-span-12' : focusedCol ? 'hidden' : 'lg:col-span-4'
            }`}
          >
            <div className="p-3.5 border-b border-white/[0.08] bg-charcoal-900/80 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-crimson rounded-full animate-ping" />
                <span className="font-bold text-crimson uppercase tracking-wider">
                  {op1.anonymousId || 'UNKNOWN 01'}
                </span>
                <span className="px-1.5 py-0.2 bg-crimson/20 border border-crimson/40 text-crimson text-[9px] font-bold uppercase">
                  HOST STREAM A
                </span>
              </div>
              <button
                onClick={() => setFocusedCol(focusedCol === 'OP1' ? null : 'OP1')}
                className="text-bone-500 hover:text-crimson transition-colors"
                title="Expand Column"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto max-h-[420px] font-mono text-xs sm:text-[13px] text-bone-300 leading-relaxed whitespace-pre-wrap selection:bg-crimson selection:text-white">
              {op1.output}
            </div>

            <div className="p-2 border-t border-white/[0.06] bg-charcoal-900/40 text-[10px] font-mono text-crimson/70 flex justify-between">
              <span>OPPONENT STREAM A</span>
              <span>SELECT TEXT TO STUDY</span>
            </div>
          </div>
        )}

        {/* COLUMN 03: UNKNOWN 02 (Cyber Crimson - Right Brain Polarity) */}
        {(!focusedCol || focusedCol === 'OP2') && (
          <div
            className={`flex flex-col border border-crimson/40 bg-charcoal-950/90 shadow-[0_0_20px_rgba(255,42,95,0.06)] transition-all hover:border-crimson/60 ${
              focusedCol === 'OP2' ? 'lg:col-span-12' : focusedCol ? 'hidden' : 'lg:col-span-4'
            }`}
          >
            <div className="p-3.5 border-b border-white/[0.08] bg-charcoal-900/80 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-crimson rounded-full animate-ping" />
                <span className="font-bold text-crimson uppercase tracking-wider">
                  {op2.anonymousId || 'UNKNOWN 02'}
                </span>
                <span className="px-1.5 py-0.2 bg-crimson/20 border border-crimson/40 text-crimson text-[9px] font-bold uppercase">
                  HOST STREAM B
                </span>
              </div>
              <button
                onClick={() => setFocusedCol(focusedCol === 'OP2' ? null : 'OP2')}
                className="text-bone-500 hover:text-crimson transition-colors"
                title="Expand Column"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto max-h-[420px] font-mono text-xs sm:text-[13px] text-bone-300 leading-relaxed whitespace-pre-wrap selection:bg-crimson selection:text-white">
              {op2.output}
            </div>

            <div className="p-2 border-t border-white/[0.06] bg-charcoal-900/40 text-[10px] font-mono text-crimson/70 flex justify-between">
              <span>OPPONENT STREAM B</span>
              <span>SELECT TEXT TO STUDY</span>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM DRAWER: MUTATION NOTES (Private Scratchpad) */}
      <div className="mt-4 p-4 border border-white/[0.1] bg-charcoal-900/90 font-mono text-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Edit3 className="w-3.5 h-3.5 text-acid-lime" />
            <span className="font-bold text-bone-100 uppercase tracking-wider">
              MUTATION NOTES (PRIVATE INTEL)
            </span>
            <span className="text-[10px] text-bone-500">
              — Not submitted. Carried into Evolution Phase.
            </span>
          </div>

          <button
            onClick={onProceedToEvolve}
            className="editorial-btn py-1.5 px-3 text-[11px] flex items-center gap-1.5"
          >
            <span>PROCEED TO EVOLUTION →</span>
          </button>
        </div>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Record tactical advantages observed in opponent outputs (e.g. 'Opponent 01 has a much stronger Day 3 guerrilla activation; Opponent 02 allocated budget cleaner with micro-prizes. My final prompt must synthesize both...')"
          className="w-full h-20 bg-charcoal-950 border border-white/[0.08] p-2.5 text-bone-200 font-mono text-xs leading-relaxed outline-none resize-none placeholder:text-bone-600 focus:border-acid-lime/50"
        />
      </div>
    </div>
  );
}
