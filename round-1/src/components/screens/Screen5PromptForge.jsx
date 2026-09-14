import React, { useState, useEffect, useRef } from 'react';
import { cutterAudio } from '../../utils/cutterAudio';
import { MISSION_DATA } from '../../data/dalgonaChallengeData';
import { Clock, Send, Sparkles, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Screen5PromptForge({
  scenario = MISSION_DATA,
  survivingFragments = [],
  onPromptSubmitted,
}) {
  // 5:00 countdown timer (300 seconds)
  const [timeLeft, setTimeLeft] = useState(300);
  const [promptText, setPromptText] = useState('');
  const [isLocking, setIsLocking] = useState(false);
  const [shutterClosed, setShutterClosed] = useState(false);
  const textareaRef = useRef(null);

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAutoSubmit();
          return 0;
        }
        if (prev <= 60 && prev % 10 === 0) {
          try {
            cutterAudio.playCountdownBeep();
          } catch (e) {}
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const lowerPrompt = promptText.toLowerCase();

  // Directive verbs check
  const DIRECTIVE_VERBS = [
    'create', 'generate', 'develop', 'design', 'write', 'structure', 'build',
    'formulate', 'plan', 'draft', 'outline', 'provide', 'synthesize', 'execute'
  ];
  const hasDirectiveVerb = DIRECTIVE_VERBS.some((v) => lowerPrompt.includes(v));

  // Count user's original words outside the clue fragments
  let strippedPrompt = lowerPrompt;
  survivingFragments.forEach((frag) => {
    frag.text.toLowerCase().split(/\s+/).forEach((fw) => {
      if (fw.length > 2) strippedPrompt = strippedPrompt.replaceAll(fw, '');
    });
  });
  const userOriginalWords = strippedPrompt.split(/\s+/).filter((w) => w.length > 2).length;
  const isRawDataDump = userOriginalWords < 8 && survivingFragments.length > 0 && promptText.trim().length > 0;

  // Dynamic Prompt Quality Indicators
  const structuralChecks = [
    {
      id: 'directive',
      label: 'Action Directive (e.g. Create / Plan / Generate)',
      present: hasDirectiveVerb,
    },
    {
      id: 'role',
      label: 'Role Framing (e.g. Act as Strategist / Lead)',
      present: lowerPrompt.includes('act as') || lowerPrompt.includes('role') || lowerPrompt.includes('as a') || lowerPrompt.includes('strategist') || lowerPrompt.includes('lead') || lowerPrompt.includes('coach'),
    },
    {
      id: 'synthesis',
      label: 'Original Synthesis (Not just dumped clues)',
      present: !isRawDataDump && userOriginalWords >= 10,
    },
    {
      id: 'constraints',
      label: 'Specific Constraints (₹10k Budget / Timeline)',
      present: lowerPrompt.includes('10,000') || lowerPrompt.includes('10000') || lowerPrompt.includes('2m') || lowerPrompt.includes('budget') || lowerPrompt.includes('7-day'),
    },
    {
      id: 'format',
      label: 'Deliverable Output Format (Timeline / Table / Bullets)',
      present: lowerPrompt.includes('day-by-day') || lowerPrompt.includes('table') || lowerPrompt.includes('timeline') || lowerPrompt.includes('bullets') || lowerPrompt.includes('format'),
    },
  ];

  // Dynamic Real-Time Live Score Projection (0 to 35 PTS)
  let estRigor = 0;
  if (hasDirectiveVerb) estRigor += 8;
  if (structuralChecks[1].present) estRigor += 7;
  if (structuralChecks[2].present) estRigor += 8;
  else if (userOriginalWords >= 5) estRigor += 3;
  if (structuralChecks[3].present) estRigor += 6;
  if (structuralChecks[4].present) estRigor += 6;

  if (isRawDataDump) {
    estRigor = Math.min(3, estRigor);
  } else if (!hasDirectiveVerb && promptText.trim().length > 0) {
    estRigor = Math.min(5, estRigor);
  }

  // Insert fragment directly into prompt
  const handleInsertFragment = (fragmentText) => {
    try {
      cutterAudio.playHover();
    } catch (e) {}

    const textarea = textareaRef.current;
    if (!textarea) {
      setPromptText((prev) => (prev ? `${prev}\n- ${fragmentText}` : fragmentText));
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = promptText.substring(0, start);
    const after = promptText.substring(end);

    const insertion = before.endsWith(' ') || before.endsWith('\n') || before === '' ? fragmentText : ` ${fragmentText}`;
    const newText = before + insertion + after;
    setPromptText(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + insertion.length, start + insertion.length);
    }, 50);
  };

  const handleAutoSubmit = () => {
    executeLock();
  };

  const handleSubmit = () => {
    if (!promptText.trim()) {
      alert('Please craft and write your prompt before submitting!');
      return;
    }
    executeLock();
  };

  const executeLock = () => {
    try {
      cutterAudio.playLockShutter();
    } catch (e) {}
    setIsLocking(true);

    setTimeout(() => {
      setShutterClosed(true);
      try {
        cutterAudio.playSubDrop();
      } catch (e) {}

      setTimeout(() => {
        onPromptSubmitted(promptText, survivingFragments);
      }, 900);
    }, 600);
  };

  const wordCount = promptText.trim() ? promptText.trim().split(/\s+/).length : 0;
  const completedChecks = structuralChecks.filter((c) => c.present).length;

  return (
    <div className="relative min-h-[calc(100vh-64px)] flex flex-col justify-between px-3 sm:px-6 py-4 max-w-7xl mx-auto overflow-hidden">
      {/* SHUTTER SUBMISSION OVERLAY - HIGH-STAKES CINEMATIC LOCK */}
      {isLocking && (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col">
          <div
            className={`w-full bg-black/95 backdrop-blur-3xl border-b-2 border-amber-400 transition-all duration-500 ease-in flex flex-col items-center justify-end pb-8 shadow-[0_10px_50px_rgba(245,158,11,0.3)] ${
              shutterClosed ? 'h-1/2' : 'h-0'
            }`}
          >
            <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-amber-400/40 bg-amber-500/10 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="font-mono text-xs font-black uppercase tracking-[0.3em] text-amber-300">
                TRANSMISSION LOCKED
              </span>
            </div>
            <div className="font-mono text-2xl sm:text-4xl font-black text-metallic-gold tracking-wider uppercase drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">
              PROMPT SUBMITTED
            </div>
          </div>

          <div
            className={`w-full bg-black/95 backdrop-blur-3xl border-t-2 border-cyan-400 transition-all duration-500 ease-in flex flex-col items-center justify-start pt-8 shadow-[0_-10px_50px_rgba(0,240,255,0.3)] ${
              shutterClosed ? 'h-1/2' : 'h-0'
            }`}
          >
            <div className="font-mono text-xs sm:text-sm font-bold text-cyan-300 tracking-[0.2em] uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Analyzing context cohesion & compiling verdict...</span>
            </div>
          </div>
        </div>
      )}

      {/* Top Header & 5:00 Timer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 luxury-card bg-black/60 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl border border-white/[0.08] mb-4 shadow-2xl relative overflow-hidden">
        {/* Subtle background ambient beam */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-mono text-[11px] font-black uppercase tracking-[0.25em] text-metallic-gold">
              MISSION // {scenario.title}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-metallic-silver">
            FORGE PROMPT FROM SURVIVING CLUES
          </h2>
        </div>

        {/* 5:00 Chronometer & Stable Submit Action */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Chronometer Display */}
          <div
            className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl font-mono font-black tracking-wider transition-all luxury-card ${
              timeLeft <= 60
                ? 'bg-red-950/70 border border-red-500/70 text-red-300 animate-pulse shadow-[0_0_25px_rgba(239,68,68,0.4)]'
                : 'bg-zinc-950/80 border border-amber-500/40 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
            }`}
          >
            <Clock className={`w-4 h-4 sm:w-5 sm:h-5 ${timeLeft <= 60 ? 'text-red-400 animate-spin' : 'text-amber-400'}`} />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-normal">TIME REMAINING</span>
              <span className="text-xl sm:text-2xl font-black text-white">{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Rock-Solid Submit Action (No Flying, No Shaking) */}
          <button
            onClick={handleSubmit}
            disabled={isLocking}
            className="h-12 flex items-center gap-2 px-6 sm:px-8 rounded-2xl bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>SUBMIT PROMPT</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Saved Clues (Left) + Prompt Editor (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 items-start">
        {/* Left Column: Saved Clues Drawer (Completely Suspicious — No trap indicators!) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="luxury-card bg-black/60 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl border border-white/[0.08] shadow-2xl">
            <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-white">
                  SAVED CLUES
                </span>
                <span className="px-2 py-0.5 rounded-full luxury-pill bg-white/[0.06] border border-white/[0.1] text-[10px] font-mono text-zinc-300 font-bold">
                  {survivingFragments.length}
                </span>
              </div>
              <span className="text-[11px] font-mono text-metallic-gold font-bold">
                Tap to insert clue
              </span>
            </div>

            {survivingFragments.length === 0 ? (
              <div className="p-4 rounded-2xl border border-amber-500/20 bg-amber-950/10 text-center text-xs font-mono text-amber-200/80">
                No clues were saved from your cut. You can still write your prompt from your memory!
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto pr-1">
                {survivingFragments.map((frag) => {
                  const isUsed = lowerPrompt.includes(frag.text.toLowerCase().substring(0, 12));

                  return (
                    <button
                      key={frag.id}
                      onClick={() => handleInsertFragment(frag.fullText || frag.text)}
                      className={`group text-left px-3 py-2 rounded-xl font-mono text-xs font-semibold tracking-wide transition-all border flex items-center justify-between gap-2 shadow-sm ${
                        isUsed
                          ? 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                          : 'border-white/[0.08] bg-white/[0.03] text-zinc-300 hover:border-cyan-400/50 hover:bg-cyan-950/20 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                      }`}
                    >
                      <span className="truncate max-w-[210px]">{frag.icon} {frag.text}</span>
                      <span className={`shrink-0 text-[10px] font-black tracking-wider transition-opacity ${
                        isUsed ? 'text-emerald-400' : 'text-zinc-500 group-hover:text-cyan-300'
                      }`}>
                        {isUsed ? '✓ ADDED' : '+ ADD'}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Prompt Checklist */}
          <div className="luxury-card bg-black/60 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl border border-white/[0.08] shadow-2xl">
            <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/[0.08]">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-white">
                PROMPT RIGOR AUDIT
              </span>
              <span className="px-2.5 py-0.5 rounded-full luxury-pill border border-amber-500/30 bg-amber-500/10 font-mono text-[11px] font-bold text-metallic-gold">
                {completedChecks}/5 INCLUDED
              </span>
            </div>

            <div className="space-y-2">
              {structuralChecks.map((check) => (
                <div
                  key={check.id}
                  className={`flex items-center justify-between p-2.5 rounded-xl font-mono text-xs transition-all ${
                    check.present
                      ? 'bg-emerald-950/25 border border-emerald-500/40 text-emerald-300 font-bold shadow-[0_0_10px_rgba(16,185,129,0.1)]'
                      : 'bg-white/[0.02] border border-white/[0.05] text-zinc-500'
                  }`}
                >
                  <span>{check.label}</span>
                  <span className={check.present ? 'text-emerald-400' : 'text-zinc-600'}>
                    {check.present ? '✓ Included' : '— Missing'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Prompt Editor */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="luxury-card bg-black/70 backdrop-blur-2xl rounded-3xl border border-amber-500/30 flex flex-col h-full shadow-[0_0_40px_rgba(245,158,11,0.08)] overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 py-3 bg-zinc-950/70 border-b border-white/[0.08] gap-3">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                  PROMPT FORGE WORKSPACE
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Dynamic Real-Time Score Projection HUD */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 border border-white/[0.1] shadow-inner">
                  <span className="text-[10px] text-zinc-400">EST. RIGOR:</span>
                  <span
                    className={`font-black text-xs sm:text-sm ${
                      estRigor >= 28
                        ? 'text-emerald-400'
                        : estRigor >= 18
                        ? 'text-amber-400'
                        : estRigor > 3
                        ? 'text-pink-400'
                        : 'text-red-400'
                    }`}
                  >
                    {estRigor} / 35 PTS
                  </span>
                </div>

                <span className="px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] text-zinc-300">
                  {wordCount} Words
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] text-zinc-400">
                  {userOriginalWords} Original
                </span>
              </div>
            </div>

            <div className="relative flex-1 min-h-[360px] p-5 flex flex-col">
              {/* High-Impact Raw Dump Alert if user just clicked clues without writing instructions */}
              {isRawDataDump && (
                <div className="mb-3.5 p-3 rounded-2xl border border-red-500/60 bg-red-950/50 text-red-200 text-xs font-mono flex items-start gap-2.5 shadow-[0_0_20px_rgba(239,68,68,0.25)] animate-pulse">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-red-400 uppercase tracking-wider block">⚠️ UNPROMPTED CLUE DUMP DETECTED</strong>
                    <span>You have only pasted raw clue fragments! An AI model cannot execute without instructions. You must write an actionable directive (e.g. <em>"Act as a growth strategist and create a 7-day marketing plan..."</em>) or your submission will fail the evaluation audit!</span>
                  </div>
                </div>
              )}

              <textarea
                ref={textareaRef}
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder={`Type your prompt here...\n\nGive the AI a clear role, explain the objective, include the constraints from your saved clues, and specify the output format you want.`}
                className="w-full flex-1 min-h-[300px] bg-transparent text-zinc-100 font-mono text-sm sm:text-base leading-relaxed resize-none outline-none focus:ring-0 placeholder:text-zinc-600"
              />

              <div className="pt-3.5 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                <span className="flex items-center gap-2 text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Synthesize saved clues into an airtight directive.</span>
                </span>
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  OFFICIAL ARENA SUBMISSION
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
