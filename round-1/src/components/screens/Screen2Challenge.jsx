import React from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { Clock, ArrowRight, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export default function Screen2Challenge({
  challenge,
  onStartCreating,
  isBriefing = false,
  remainingSeconds = 600,
}) {
  const formatTimer = (secs) => {
    const mins = Math.floor(Math.max(0, secs) / 60);
    const s = Math.max(0, secs) % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (isBriefing) return;
    parasiteAudio.playSubDrop();
    onStartCreating();
  };

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-10 max-w-6xl mx-auto select-none">
      {/* Top Header & Phase Telemetry */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="text-bone-400 uppercase tracking-widest">
            PROMPT WAR // ROUND 01
          </span>
          <span className="text-bone-600">/</span>
          <span className="text-acid-lime font-bold uppercase tracking-wider">
            {challenge.code || 'CHALLENGE_01'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-charcoal-900 border border-white/[0.08] text-bone-300">
            <span className="text-[10px] text-bone-500 uppercase">
              {isBriefing ? 'PHASE 00:' : 'PHASE 01:'}
            </span>
            <span className="font-bold text-bone-100">
              {isBriefing ? 'BRIEFING' : 'CREATE'}
            </span>
          </div>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 border ${
            isBriefing
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
              : 'bg-acid-lime/10 border-acid-lime/30 text-acid-lime'
          }`}>
            <Clock className="w-3.5 h-3.5" />
            <span className="font-bold">{formatTimer(remainingSeconds)}</span>
          </div>
        </div>
      </div>

      {/* Center: Clean Editorial Presentation */}
      <div className="my-auto py-8">
        <div className="mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid-lime font-bold block mb-2">
            OFFICIAL MISSION STATEMENT
          </span>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-bone-400 uppercase tracking-wider">
            YOUR CHALLENGE
          </h1>
        </div>

        {/* Huge Display Challenge Headline */}
        <div className="py-6 border-y border-white/[0.12] my-4">
          <p className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-bone-50 leading-tight tracking-tight">
            "{challenge.brief}"
          </p>
        </div>

        {/* Clean Editorial Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {(challenge.constraints || []).map((c, i) => (
            <div
              key={i}
              className="border-l border-white/[0.12] pl-4 py-1"
            >
              <span className="font-mono text-[10px] text-bone-500 uppercase tracking-widest block mb-1">
                {c.label}
              </span>
              <span className="font-display font-bold text-base sm:text-lg text-bone-100 block">
                {c.value}
              </span>
              <span className="font-sans text-xs text-bone-400 block mt-1 leading-snug">
                {c.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Operating Directives */}
        <div className="mt-10 p-5 border border-white/[0.08] bg-charcoal-900/40 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="flex items-start gap-2.5">
            <Terminal className="w-4 h-4 text-acid-lime shrink-0 mt-0.5" />
            <div>
              <strong className="text-bone-100 uppercase block mb-0.5">EXTERNAL AI FREEDOM</strong>
              <span className="text-bone-400">
                You may use any AI model or tool (ChatGPT, Claude, Gemini, Perplexity, etc.). You are not restricted to this window.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-bone-300 shrink-0 mt-0.5" />
            <div>
              <strong className="text-bone-100 uppercase block mb-0.5">PLATFORM PURPOSE</strong>
              <span className="text-bone-400">
                This portal is exclusively used for clock tracking, opponent cluster matchmaking, and final submission locking.
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-bone-400 text-xs font-mono">
            {isBriefing
              ? '⚡ Official 2-minute briefing in progress. The Create Phase unlocks automatically when countdown reaches 00:00.'
              : 'Clicking will advance your squad to the 10:00 Create Phase workspace.'}
          </div>

          <button
            onClick={handleStart}
            disabled={isBriefing}
            className={`editorial-btn group ${
              isBriefing
                ? 'opacity-60 cursor-not-allowed bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/20'
                : ''
            }`}
          >
            <span>
              {isBriefing
                ? `BRIEFING IN PROGRESS (${formatTimer(remainingSeconds)})`
                : 'START CREATING'}
            </span>
            {!isBriefing && (
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            )}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
        <span>PHASE 01: INDEPENDENT SYNTHESIS</span>
        <span>NO LEADERBOARD BROADCAST DURING CREATE</span>
      </div>
    </div>
  );
}
