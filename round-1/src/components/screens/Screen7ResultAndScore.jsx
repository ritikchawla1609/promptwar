import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { MISSION_DATA, MOCK_LEADERBOARD } from '../../data/dalgonaChallengeData';
import { evaluatePlayerRun } from '../../utils/promptScorer';
import { cutterAudio } from '../../utils/cutterAudio';
import { useLiveArena } from '../../utils/liveArenaEngine';
import {
  Zap,
  Skull,
  Flame,
  Trophy,
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  RefreshCcw,
  Terminal,
  Copy,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Activity,
  Layers,
  TrendingUp,
  TrendingDown,
  User,
  Edit2
} from 'lucide-react';

export default function Screen7ResultAndScore({
  scenario = MISSION_DATA,
  survivingFragments = [],
  promptText = '',
  onPlayAgain,
}) {
  const [activeTab, setActiveTab] = useState('simulation'); // 'simulation' | 'autopsy' | 'leaderboard'
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);

  // Live Real-Time Arena State
  const { leaderboard, submitPlayerRun, playerName, setPlayerName, stats } = useLiveArena();
  const [customHandle, setCustomHandle] = useState(playerName);
  const [isEditingHandle, setIsEditingHandle] = useState(false);

  // Evaluate run rigorously
  const evaluation = useMemo(() => {
    return evaluatePlayerRun({ scenario, survivingFragments, promptText });
  }, [scenario, survivingFragments, promptText]);

  const { totalScore, playerTitle, scores, counts, aiOutput, isContaminated, contaminationReasons } = evaluation;

  // Separate fragments
  const goodClues = survivingFragments.filter((f) => f.isRelevant);
  const traps = survivingFragments.filter((f) => f.isMisleading);
  const trivia = survivingFragments.filter((f) => !f.isRelevant && !f.isMisleading);

  // Purity & Contamination percentage
  const purityPercentage = Math.round((goodClues.length / 8) * 100);
  const trapToxicity = Math.min(100, traps.length * 40);

  // Register in live arena engine & fire victory sounds on mount
  useEffect(() => {
    try {
      submitPlayerRun({
        score: totalScore,
        title: playerTitle,
        cuts: goodClues.length,
        promptScore: scores.prompt,
        scenarioTitle: scenario.title,
        scenarioId: scenario.id || 'techfest',
        promptText,
        scores,
        counts,
        survivingFragments,
        aiOutput,
        isContaminated,
        contaminationReasons,
      });
    } catch (e) {}
  }, [
    totalScore,
    playerTitle,
    goodClues.length,
    scores,
    counts,
    scenario,
    promptText,
    survivingFragments,
    aiOutput,
    isContaminated,
    contaminationReasons,
  ]);

  // Sound and animation on mount
  useEffect(() => {
    try {
      cutterAudio.playSubDrop();
    } catch (e) {}

    const timer = setTimeout(() => {
      setRevealed(true);
      try {
        cutterAudio.playVictory();
      } catch (e) {}

      // Crazy Confetti Burst!
      if (totalScore >= 70) {
        try {
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.4 },
            colors: ['#00F0FF', '#FF007F', '#F59E0B', '#10B981'],
          });
        } catch (e) {}
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [totalScore]);

  const handleSaveHandle = (e) => {
    e.preventDefault();
    if (customHandle.trim()) {
      setPlayerName(customHandle.trim());
      setIsEditingHandle(false);
      submitPlayerRun({
        score: totalScore,
        title: playerTitle,
        cuts: goodClues.length,
        promptScore: scores.prompt,
        scenarioTitle: scenario.title,
        scenarioId: scenario.id || 'techfest',
        promptText,
        scores,
        counts,
        survivingFragments,
        aiOutput,
        isContaminated,
        contaminationReasons,
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between px-3 sm:px-6 py-6 max-w-7xl mx-auto overflow-hidden animate-fadeIn select-none">
      {/* Dynamic Cyber Ambient Lasers & Grid Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/20 via-pink-600/20 to-transparent rounded-full blur-[140px]" />
        {isContaminated && (
          <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-red-600/15 rounded-full blur-[140px] animate-pulse" />
        )}
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px]" />
      </div>

      {/* TOP HEADER: ARENA STATUS BAR */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-3xl luxury-card bg-black/60 backdrop-blur-2xl border border-white/[0.08] mb-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-pink-600 flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,0,127,0.5)] shrink-0">
            <Trophy className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-pink-500">
                PROMPT WAR // ARENA ZERO VERDICT
              </span>
              <span className="px-2 py-0.5 rounded-full luxury-pill bg-white/[0.06] border border-white/[0.1] text-[10px] font-mono text-zinc-300 font-bold">
                {scenario.badge}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black font-display text-metallic-silver uppercase tracking-tight">
              {scenario.title}
            </h1>
          </div>
        </div>

        {/* 4 Interactive Tab Switchers */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-black/60 border border-white/[0.08] backdrop-blur-xl">
          <button
            onClick={() => {
              try { cutterAudio.playHover(); } catch (e) {}
              setActiveTab('simulation');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all ${
              activeTab === 'simulation'
                ? 'bg-gradient-to-r from-pink-600 to-amber-500 text-white shadow-[0_0_20px_rgba(255,0,127,0.5)] scale-105'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>AI SIMULATION</span>
          </button>

          <button
            onClick={() => {
              try { cutterAudio.playHover(); } catch (e) {}
              setActiveTab('autopsy');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all ${
              activeTab === 'autopsy'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-black shadow-[0_0_20px_rgba(0,240,255,0.6)] scale-105 font-black'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>COOKIE AUTOPSY</span>
            {traps.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            )}
          </button>

          <button
            onClick={() => {
              try { cutterAudio.playHover(); } catch (e) {}
              setActiveTab('audit');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all ${
              activeTab === 'audit'
                ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-105 font-black'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>SCORE AUDIT (MATH)</span>
          </button>

          <button
            onClick={() => {
              try { cutterAudio.playHover(); } catch (e) {}
              setActiveTab('leaderboard');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-black uppercase tracking-wider transition-all ${
              activeTab === 'leaderboard'
                ? 'bg-gradient-to-r from-amber-300 to-yellow-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.6)] scale-105 font-black'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>LEADERBOARD</span>
          </button>
        </div>
      </div>

      {/* CENTERPIECE: CRAZY 3D HOLOGRAPHIC VERDICT REACTOR */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6">
        {/* LEFT COLUMN: THE GIANT NEON SCORE REACTOR (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl luxury-card bg-black/70 backdrop-blur-2xl border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.15)] relative overflow-hidden text-center group">
          {/* Subtle background ambient radial bloom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Pulsing Gyro Reactor Rings */}
          <div className="relative w-64 h-64 flex items-center justify-center my-2">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/30 animate-spin" style={{ animationDuration: '24s' }} />
            <div className="absolute inset-3 rounded-full border border-dotted border-cyan-400/30 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }} />
            <div className={`absolute inset-7 rounded-full border ${
              isContaminated ? 'border-red-500/40' : 'border-emerald-500/40'
            } animate-pulse`} />

            {/* Ambient Core Glow */}
            <div className={`absolute w-36 h-36 rounded-full blur-2xl ${
              isContaminated ? 'bg-red-600/25' : 'bg-amber-500/25'
            } animate-pulse`} />

            {/* Huge Glowing Score Number */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="text-7xl sm:text-8xl font-black font-display text-white tracking-tighter drop-shadow-[0_0_35px_rgba(255,255,255,0.7)] leading-none">
                {revealed ? totalScore : '...'}
              </div>
              <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-zinc-400 uppercase mt-2">
                OUT OF 100 PTS
              </span>
            </div>
          </div>

          {/* SLAMMING TITLE BADGE */}
          <div className={`mt-4 px-6 py-2.5 rounded-2xl border font-mono text-sm font-black tracking-[0.2em] uppercase shadow-2xl animate-scaleUp flex items-center gap-2 luxury-card ${
            totalScore >= 88
              ? 'border-amber-400/60 bg-gradient-to-r from-amber-500/20 via-yellow-400/25 to-amber-500/20 text-amber-200 shadow-[0_0_25px_rgba(245,158,11,0.5)]'
              : totalScore >= 70
              ? 'border-cyan-400/60 bg-cyan-950/40 text-cyan-200 shadow-[0_0_25px_rgba(0,240,255,0.4)]'
              : totalScore >= 50
              ? 'border-pink-500/60 bg-pink-950/40 text-pink-200 shadow-[0_0_25px_rgba(255,0,127,0.4)]'
              : 'border-red-500/80 bg-red-950/80 text-red-300 shadow-[0_0_25px_rgba(239,68,68,0.5)] animate-glitch'
          }`}>
            {totalScore >= 88 ? <Sparkles className="w-4 h-4 text-amber-300" /> : totalScore < 50 ? <Skull className="w-4 h-4 text-red-400" /> : <Zap className="w-4 h-4 text-cyan-300" />}
            <span>{playerTitle}</span>
          </div>

          {/* Quick Real-Time Health Gauges */}
          <div className="w-full mt-6 space-y-3 font-mono text-xs text-left">
            <div>
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SIGNAL PURITY:</span>
                </span>
                <span className="text-white font-bold">{goodClues.length}/8 SIGNALS ({purityPercentage}%)</span>
              </div>
              <div className="w-full bg-black/60 rounded-full h-2 overflow-hidden border border-white/[0.08]">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(0,240,255,0.7)]"
                  style={{ width: `${purityPercentage}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className={`${traps.length > 0 ? 'text-red-400 animate-pulse' : 'text-zinc-400'} font-bold flex items-center gap-1.5`}>
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>TOXIC CONTAMINATION:</span>
                </span>
                <span className={traps.length > 0 ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                  {traps.length > 0 ? `${traps.length} TRAPS DETONATED!` : '0% TOXINS (CLEAN RUN)'}
                </span>
              </div>
              <div className="w-full bg-black/60 rounded-full h-2 overflow-hidden border border-white/[0.08]">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-600 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(239,68,68,0.7)]"
                  style={{ width: `${trapToxicity}%` }}
                />
              </div>
            </div>
          </div>

          {/* OFFICIAL POINT LEDGER: 100% TRANSPARENT MATHEMATICAL BREAKDOWN */}
          <div className="w-full mt-6 p-4.5 rounded-2xl luxury-card bg-zinc-950/70 border border-white/[0.08] text-left font-mono shadow-inner">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 font-black uppercase tracking-widest mb-3 pb-2.5 border-b border-white/[0.08]">
              <span className="flex items-center gap-1.5 text-metallic-gold">
                <Layers className="w-3 h-3" />
                <span>OFFICIAL POINT BREAKDOWN</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 font-bold">100 PTS MAX</span>
            </div>

            <div className="space-y-2.5 text-xs">
              {/* Part 1: Cookie Cut Precision */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-zinc-200 font-bold flex items-center gap-1.5">
                    <span>🍪</span>
                    <span>Context Cut Precision</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 pl-5">
                    +{scores.signals} signals {scores.trapPenalty > 0 ? `- ${scores.trapPenalty} traps` : ''} {scores.noisePenalty > 0 ? `- ${scores.noisePenalty} noise` : ''}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-black text-sm ${scores.cookieCut > 0 ? 'text-emerald-400' : 'text-zinc-500'}`}>
                    {scores.cookieCut}
                  </span>
                  <span className="text-[10px] text-zinc-500"> / 40</span>
                </div>
              </div>

              {/* Part 2: Prompt Engineering Rigor */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-zinc-200 font-bold flex items-center gap-1.5">
                    <span>✍️</span>
                    <span>Prompt Engineering</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 pl-5">
                    {scores.promptBreakdown?.isRawDataDump ? (
                      <span className="text-red-400 font-bold">⚠️ Unprompted raw dump (Capped at 3 pts)</span>
                    ) : (
                      'Action directives, role, synthesis, format'
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-black text-sm ${scores.promptBreakdown?.isRawDataDump ? 'text-red-400' : 'text-pink-400'}`}>
                    +{scores.prompt}
                  </span>
                  <span className="text-[10px] text-zinc-500"> / 35</span>
                </div>
              </div>

              {/* Part 3: AI Strategy Execution */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-zinc-200 font-bold flex items-center gap-1.5">
                    <span>🤖</span>
                    <span>AI Execution Viability</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 pl-5">
                    {scores.trapPenalty > 0 ? `Compromised by ${traps.length} detonated traps` : 'Clean execution feasibility'}
                  </div>
                </div>
                <div className="text-right">
                  <span className={`font-black text-sm ${scores.aiExecution < 10 ? 'text-red-400' : 'text-cyan-400'}`}>
                    +{scores.aiExecution}
                  </span>
                  <span className="text-[10px] text-zinc-500"> / 25</span>
                </div>
              </div>

              {/* Total Ledger Sum Equation */}
              <div className="pt-2.5 mt-2.5 border-t border-white/[0.08] flex items-center justify-between font-black text-xs">
                <span className="text-zinc-300">TOTAL SUM:</span>
                <span className="text-amber-300 bg-amber-500/15 px-2.5 py-1 rounded-lg border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                  {scores.cookieCut} + {scores.prompt} + {scores.aiExecution} = {totalScore} PTS
                </span>
              </div>

              {/* Audit CTA Button */}
              <button
                onClick={() => {
                  try { cutterAudio.playHover(); } catch (e) {}
                  setActiveTab('audit');
                }}
                className="mt-2 w-full py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-amber-300 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-all border border-white/[0.08] hover:border-amber-400/40"
              >
                <span>VIEW COMPLETE MATHEMATICAL AUDIT</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DYNAMIC CRAZY INTERACTIVE ARENA STAGE (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col h-full">
          {/* TAB 1: CRAZY AI SIMULATION TERMINAL */}
          {activeTab === 'simulation' && (
            <div className="luxury-card p-6 rounded-3xl border border-pink-500/30 bg-black/75 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,0,127,0.1)] flex flex-col justify-between h-full animate-fadeIn relative overflow-hidden">
              {/* Scanline CRT FX Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

              <div className="relative z-10">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                    <span className="text-zinc-400 font-bold uppercase tracking-wider ml-2">
                      NEURAL SIMULATOR // {scenario.badge}
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl luxury-pill bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 font-mono text-xs transition-all hover:text-white"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'COPIED!' : 'COPY'}</span>
                  </button>
                </div>

                {/* Contamination Alert Banner if traps caught */}
                {isContaminated ? (
                  <div className="mb-4 p-4 rounded-2xl bg-red-950/70 border border-red-500/60 text-red-200 font-mono text-xs shadow-[0_0_25px_rgba(239,68,68,0.3)] animate-glitch">
                    <div className="flex items-center gap-2 text-red-400 font-black text-sm uppercase mb-1">
                      <Flame className="w-4 h-4 text-red-500 animate-bounce" />
                      <span>CRITICAL TRAP DETONATION OCCURRED!</span>
                    </div>
                    <p className="leading-relaxed">
                      You enclosed deceptive traps into your cut. The AI was forced to execute these toxic instructions, compromising your strategy:
                    </p>
                    <div className="mt-2 pl-4 space-y-1 text-red-300 font-bold">
                      {traps.map((t) => (
                        <div key={t.id}>💥 {t.text} (Heavy Penalty Applied)</div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="mb-4 p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center gap-2.5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span><strong>100% PURE CONTEXT:</strong> Zero traps detonated! The AI synthesized an elite execution model.</span>
                  </div>
                )}

                {/* AI Output Stream */}
                <div className="p-4.5 rounded-2xl bg-black/90 border border-white/[0.08] font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap max-h-72 sm:max-h-80 overflow-y-auto pr-2 shadow-inner">
                  {aiOutput}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-500 relative z-10">
                <span>WORDS: {counts.wordCount} &bull; SURVIVING CONTEXT: {survivingFragments.length}</span>
                <span className="text-metallic-gold font-bold">EXECUTION RATING: {scores.aiExecution}/25</span>
              </div>
            </div>
          )}

          {/* TAB 2: COOKIE AUTOPSY (WHAT SURVIVED VS WHAT DETONATED) */}
          {activeTab === 'autopsy' && (
            <div className="luxury-card p-6 rounded-3xl border border-cyan-500/30 bg-black/75 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,240,255,0.1)] flex flex-col justify-between h-full animate-fadeIn">
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <h3 className="font-display font-black text-white text-base uppercase tracking-tight">
                      COOKIE AUTOPSY // UNMASKING THE TRUTH
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {survivingFragments.length} Clues Survived
                  </span>
                </div>

                {/* Subtotal Banner clarifying the Cookie Cut points vs Total points */}
                <div className="mb-4 p-3.5 rounded-2xl luxury-card bg-zinc-950/70 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-metallic-gold font-black">🍪 COOKIE CUT SUB-SCORE:</span>
                    <span className="text-white font-mono bg-white/[0.06] px-2.5 py-0.5 rounded font-black border border-white/[0.1]">
                      +{scores.signals} signals - {scores.trapPenalty} traps {scores.noisePenalty > 0 ? `- ${scores.noisePenalty} noise` : ''} = {scores.cookieCut} / 40 PTS
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Prompt (<span className="text-pink-400 font-bold">+{scores.prompt}</span>) + AI Feasibility (<span className="text-cyan-400 font-bold">+{scores.aiExecution}</span>) &rarr; <span className="text-metallic-gold font-black">TOTAL {totalScore} PTS</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Left: Genuine Core Signals */}
                  <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30">
                    <div className="flex items-center justify-between text-xs font-mono font-black uppercase tracking-wider text-cyan-400 mb-2.5">
                      <span>✓ GENUINE SIGNALS ({goodClues.length}/8)</span>
                      <span className="text-emerald-400 font-bold">+{scores.signals} PTS</span>
                    </div>
                    {goodClues.length === 0 ? (
                      <p className="text-xs font-mono text-zinc-500 italic">No core signals survived your cut!</p>
                    ) : (
                      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                        {goodClues.map((c) => (
                          <div key={c.id} className="text-xs font-mono p-2.5 rounded-xl bg-black/70 border border-cyan-500/30 text-cyan-200">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold">{c.icon} {c.text}</span>
                              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-bold border border-cyan-500/30">SIGNAL</span>
                            </div>
                            {c.explanation && (
                              <div className="text-[11px] text-zinc-400 font-normal leading-relaxed">
                                {c.explanation}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: Traps & Noise */}
                  <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
                    <div className="flex items-center justify-between text-xs font-mono font-black uppercase tracking-wider text-red-400 mb-2.5">
                      <span>⚠️ TRAPS DETONATED ({traps.length})</span>
                      <span className="text-red-400 font-bold">-{scores.trapPenalty} PTS</span>
                    </div>
                    {traps.length === 0 ? (
                      <div className="p-4 text-center text-xs font-mono text-emerald-400 border border-dashed border-emerald-500/30 rounded-xl bg-emerald-950/20">
                        ✨ ZERO TRAPS ENCLOSED! You cleanly carved around all deceptive hazards!
                      </div>
                    ) : (
                      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                        {traps.map((t) => (
                          <div key={t.id} className="text-xs font-mono p-2.5 rounded-xl bg-red-950/70 border border-red-500/60 text-red-200 shadow-[0_0_12px_rgba(239,68,68,0.3)]">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold">💥 {t.text}</span>
                              <span className="text-[10px] bg-red-600/80 text-white px-1.5 py-0.5 rounded font-black">TRAP</span>
                            </div>
                            {t.explanation && (
                              <div className="text-[11px] text-red-300/90 font-normal leading-relaxed mt-1">
                                {t.explanation}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {trivia.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/[0.08]">
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 font-bold">
                          HARMFUL NOISE ENCLOSED ({trivia.length}/3): -{scores.noisePenalty} PTS
                        </div>
                        <div className="space-y-1.5 max-h-28 overflow-y-auto pr-1">
                          {trivia.map((tr) => (
                            <div key={tr.id} className="text-[11px] font-mono p-1.5 rounded bg-black/60 border border-white/[0.08] text-zinc-400">
                              <span className="text-zinc-300 font-bold">{tr.icon} {tr.text}</span>
                              {tr.explanation && <p className="text-[10px] text-zinc-500 mt-0.5 leading-normal">{tr.explanation}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>The core signals were clustered in the center wafer.</span>
                <span className="text-cyan-400 font-bold">TACTICAL TIP: CARVE A TIGHTER CENTRAL CONTOUR!</span>
              </div>
            </div>
          )}

          {/* TAB 3: COMPLETE SCORE AUDIT & PROOF */}
          {activeTab === 'audit' && (
            <div className="luxury-card p-6 rounded-3xl border border-amber-500/30 bg-black/75 backdrop-blur-2xl shadow-[0_0_40px_rgba(245,158,11,0.1)] flex flex-col justify-between h-full animate-fadeIn font-mono text-xs">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <h3 className="font-display font-black text-white text-base uppercase tracking-tight">
                      OFFICIAL SCORE AUDIT // MATHEMATICAL PROOF
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full luxury-pill bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30 text-xs">
                    VERDICT: {totalScore} / 100 PTS
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-4">
                  {/* Pillar 1: Context Cut */}
                  <div className="p-4 rounded-2xl luxury-card bg-zinc-950/60 border border-cyan-500/20 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-black text-sm text-cyan-300 mb-2.5">
                        <span className="flex items-center gap-1.5"><span>🍪</span> <span>1. CONTEXT CUT</span></span>
                        <span className="bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">{scores.cookieCut} / 40</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-zinc-300">
                        <div className="flex justify-between">
                          <span>Core Signals ({goodClues.length}/8):</span>
                          <span className="text-emerald-400 font-bold">+{scores.signals} pts</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Traps Detonated ({traps.length}):</span>
                          <span className={traps.length > 0 ? "text-red-400 font-bold" : "text-zinc-500"}>-{scores.trapPenalty} pts</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Trivia Noise ({trivia.length}):</span>
                          <span className={trivia.length > 0 ? "text-orange-400 font-bold" : "text-zinc-500"}>-{scores.noisePenalty} pts</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/[0.08] text-[10px] text-zinc-400 leading-normal">
                      Rules: +5 per signal, -10 per trap, -2 per noise.
                    </div>
                  </div>

                  {/* Pillar 2: Prompt Engineering */}
                  <div className="p-4 rounded-2xl luxury-card bg-zinc-950/60 border border-pink-500/20 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-black text-sm text-pink-300 mb-2.5">
                        <span className="flex items-center gap-1.5"><span>✍️</span> <span>2. PROMPT RIGOR</span></span>
                        <span className="bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded border border-pink-500/30">{scores.prompt} / 35</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-zinc-300">
                        <div className="flex justify-between">
                          <span>Action Directive Verb:</span>
                          <span className={scores.promptBreakdown?.directive > 0 ? 'text-emerald-400 font-bold' : 'text-zinc-500'}>
                            +{scores.promptBreakdown?.directive || 0}/8 pts
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Role &amp; Persona:</span>
                          <span className={scores.promptBreakdown?.role > 0 ? 'text-emerald-400 font-bold' : 'text-zinc-500'}>
                            +{scores.promptBreakdown?.role || 0}/7 pts
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Original Synthesis:</span>
                          <span className={scores.promptBreakdown?.synthesis > 0 ? 'text-pink-400 font-bold' : 'text-zinc-500'}>
                            +{scores.promptBreakdown?.synthesis || 0}/8 pts
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Budget &amp; Constraints:</span>
                          <span className={scores.promptBreakdown?.constraints > 0 ? 'text-emerald-400 font-bold' : 'text-zinc-500'}>
                            +{scores.promptBreakdown?.constraints || 0}/6 pts
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Deliverable Format:</span>
                          <span className={scores.promptBreakdown?.format > 0 ? 'text-emerald-400 font-bold' : 'text-zinc-500'}>
                            +{scores.promptBreakdown?.format || 0}/6 pts
                          </span>
                        </div>
                        {scores.promptBreakdown?.isRawDataDump && (
                          <div className="mt-2 p-1.5 rounded bg-red-950/60 border border-red-500/50 text-[10px] text-red-300 font-bold">
                            ⚠️ UNPROMPTED DUMP: Capped at 3/35 pts
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/[0.08] text-[10px] text-zinc-400 leading-normal">
                      Audits command verbs, role framing, original synthesis, constraints, and format.
                    </div>
                  </div>

                  {/* Pillar 3: AI Strategy Viability */}
                  <div className="p-4 rounded-2xl luxury-card bg-zinc-950/60 border border-amber-500/20 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-black text-sm text-amber-300 mb-2.5">
                        <span className="flex items-center gap-1.5"><span>🤖</span> <span>3. AI FEASIBILITY</span></span>
                        <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">{scores.aiExecution} / 25</span>
                      </div>
                      <div className="space-y-1.5 text-xs text-zinc-300">
                        <div className="flex justify-between">
                          <span>Model Baseline:</span>
                          <span className="text-zinc-300 font-bold">25 pts</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Trap Sabotage Penalty:</span>
                          <span className={(scores.aiExecutionBreakdown?.trapDamage || 0) > 0 ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                            -{(scores.aiExecutionBreakdown?.trapDamage || 0)} pts
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Context Starvation:</span>
                          <span className={(scores.aiExecutionBreakdown?.missingContextDamage || 0) > 0 ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                            -{(scores.aiExecutionBreakdown?.missingContextDamage || 0)} pts
                          </span>
                        </div>
                        {(scores.aiExecutionBreakdown?.unpromptedDumpDamage || 0) > 0 && (
                          <div className="flex justify-between text-red-400 font-bold">
                            <span>Unprompted Dump Penalty:</span>
                            <span>-{(scores.aiExecutionBreakdown?.unpromptedDumpDamage || 0)} pts</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/[0.08] text-[10px] text-zinc-400 leading-normal">
                      Models fail when fed contradictory traps or unprompted raw clue dumps.
                    </div>
                  </div>
                </div>

                {/* Mathematical Equation Ribbon */}
                <div className="p-4 rounded-2xl luxury-card bg-black/90 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-lg">
                  <div>
                    <div className="text-[10px] text-zinc-400 uppercase font-black tracking-widest">
                      TOTAL MATHEMATICAL VERDICT
                    </div>
                    <div className="text-sm sm:text-base font-black text-white mt-0.5">
                      <span className="text-cyan-400">{scores.cookieCut} (Cut)</span>
                      <span className="text-zinc-500"> + </span>
                      <span className="text-pink-400">{scores.prompt} (Prompt)</span>
                      <span className="text-zinc-500"> + </span>
                      <span className="text-amber-400">{scores.aiExecution} (AI Viability)</span>
                      <span className="text-zinc-500"> = </span>
                      <span className="text-emerald-400 text-lg">{totalScore} / 100 PTS</span>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400">
                    {traps.length > 0 ? (
                      <span className="text-red-400 font-bold">⚠️ Traps reduced your score by -{scores.trapPenalty + (scores.aiExecutionBreakdown?.trapDamage || 0)} pts total!</span>
                    ) : (
                      <span className="text-emerald-400 font-bold">✨ Clean run! Zero trap damage suffered!</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-500">
                <span>DETERMINISTIC EVALUATION ENGINE // 100% MATHEMATICALLY AUDITABLE</span>
                <span className="text-metallic-gold font-bold">{scenario.badge}</span>
              </div>
            </div>
          )}

          {/* TAB 4: CRAZY ARCADE LEADERBOARD */}
          {activeTab === 'leaderboard' && (
            <div className="luxury-card p-6 rounded-3xl border border-amber-500/30 bg-black/75 backdrop-blur-2xl shadow-[0_0_40px_rgba(245,158,11,0.1)] flex flex-col justify-between h-full animate-fadeIn font-mono text-xs">
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                    <h3 className="font-display font-black text-white text-base uppercase tracking-tight">
                      GLOBAL ARENA LEADERBOARD // ROUND 1
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="px-3 py-1 rounded-full luxury-pill bg-amber-500/15 text-amber-300 font-mono text-[11px] font-bold border border-amber-500/30">
                      LIVE STANDINGS
                    </span>
                  </div>
                </div>

                {/* Team Handle Quick Editor */}
                <div className="p-3 mb-3 rounded-2xl bg-zinc-950/80 border border-white/[0.08] flex items-center justify-between gap-2 shadow-inner">
                  <div className="flex items-center gap-2 text-xs">
                    <User className="w-4 h-4 text-amber-400" />
                    <span className="text-zinc-400">TEAM HANDLE:</span>
                    {isEditingHandle ? (
                      <form onSubmit={handleSaveHandle} className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={customHandle}
                          onChange={(e) => setCustomHandle(e.target.value)}
                          placeholder="Your Name / Team"
                          className="px-2.5 py-1 rounded-lg bg-black border border-amber-400/60 text-white font-bold text-xs focus:outline-none"
                          maxLength={24}
                        />
                        <button
                          type="submit"
                          className="px-2.5 py-1 rounded-lg bg-amber-400 text-black font-black text-[11px] shadow-sm hover:brightness-110"
                        >
                          SAVE
                        </button>
                      </form>
                    ) : (
                      <span className="font-black text-amber-300 text-sm">{playerName}</span>
                    )}
                  </div>
                  {!isEditingHandle && (
                    <button
                      onClick={() => setIsEditingHandle(true)}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 hover:text-white flex items-center gap-1 text-[11px] transition-all"
                    >
                      <Edit2 className="w-3 h-3" />
                      <span>EDIT HANDLE</span>
                    </button>
                  )}
                </div>

                {/* Real-time Dynamic Standings */}
                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {leaderboard.map((item) => {
                    const rankDelta = (item.prevRank || item.rank) - item.rank;
                    return (
                      <div
                        key={item.id || item.name}
                        className={`flex items-center justify-between p-3.5 rounded-2xl transition-all ${
                          item.isPlayer
                            ? 'luxury-card bg-gradient-to-r from-amber-500/25 via-pink-600/25 to-amber-500/25 border-2 border-amber-400 text-white font-black shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-[1.01]'
                            : item.isNew
                            ? 'bg-cyan-950/40 border border-cyan-400 text-white animate-pulse'
                            : 'luxury-card bg-zinc-950/40 border border-white/[0.06] text-zinc-300 hover:border-white/[0.12]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                              item.rank === 1
                                ? 'bg-gradient-to-tr from-amber-400 to-yellow-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                                : item.rank === 2
                                ? 'bg-gradient-to-tr from-slate-200 to-zinc-400 text-black shadow-[0_0_10px_rgba(255,255,255,0.3)]'
                                : item.rank === 3
                                ? 'bg-gradient-to-tr from-amber-700 to-orange-600 text-white shadow-[0_0_10px_rgba(217,119,6,0.3)]'
                                : 'bg-white/[0.04] border border-white/[0.08] text-zinc-400'
                            }`}
                          >
                            #{item.rank}
                          </span>

                          {/* Rank Shift Indicator */}
                          <div className="w-5 text-center text-[10px] font-black">
                            {rankDelta > 0 ? (
                              <span className="text-emerald-400 flex items-center gap-0.5">
                                <TrendingUp className="w-3 h-3" />+{rankDelta}
                              </span>
                            ) : rankDelta < 0 ? (
                              <span className="text-red-400 flex items-center gap-0.5">
                                <TrendingDown className="w-3 h-3" />
                                {rankDelta}
                              </span>
                            ) : (
                              <span className="text-zinc-600">-</span>
                            )}
                          </div>

                          <div>
                            <div className="flex items-center gap-2 font-bold text-sm">
                              <span className={item.isPlayer ? 'text-amber-200 font-black' : 'text-white'}>
                                {item.name}
                              </span>
                              {item.isPlayer && (
                                <span className="text-[10px] bg-amber-400 text-black px-2 py-0.2 rounded font-black tracking-widest">
                                  YOU
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-zinc-400 block">{item.title}</span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-base font-black text-metallic-gold">{item.score} PTS</div>
                          <div className="text-[10px] text-zinc-500">{item.cuts || 8} SIGNALS</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-500">
                <span>🔴 REAL-TIME MULTI-TAB BROADCAST SYNC ACTIVE</span>
                <span className="text-cyan-400 font-bold">{stats.activeParticipants} CONTENDERS IN ARENA</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* OFFICIAL EVENT LOCKED FOOTER BAR (PRODUCTION MODE) */}
      <div className="relative z-10 w-full pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-zinc-400 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-emerald-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
              <span>ROUND 01 FINAL SUBMISSION RECORDED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="text-[10px] text-zinc-500 block">
              Your official verdict is locked in the arena ledger. Please await host instructions for Round 2.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-5 py-3 rounded-2xl luxury-card bg-zinc-950/80 border border-emerald-500/40 font-mono text-xs text-zinc-300 flex items-center gap-2.5 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-bold text-white tracking-widest uppercase">SCORE LOCKED // VERDICT FINAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
