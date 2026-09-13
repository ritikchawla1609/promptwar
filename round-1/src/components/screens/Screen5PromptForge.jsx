import React, { useState, useEffect, useRef } from 'react';
import { cutterAudio } from '../../utils/cutterAudio';
import { MISSION_DATA } from '../../data/dalgonaChallengeData';
import { Clock, Send, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

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

  // Dynamic Prompt Quality Indicators
  const structuralChecks = [
    {
      id: 'role',
      label: 'Role Framing (e.g. Strategist / Coach / Master)',
      present: lowerPrompt.includes('act as') || lowerPrompt.includes('role') || lowerPrompt.includes('strategist') || lowerPrompt.includes('coach') || lowerPrompt.includes('master') || lowerPrompt.includes('consultant'),
    },
    {
      id: 'task',
      label: 'Core Objective / Mission Goal',
      present: lowerPrompt.includes('plan') || lowerPrompt.includes('deck') || lowerPrompt.includes('mystery') || lowerPrompt.includes('strategy') || lowerPrompt.includes('registration') || lowerPrompt.includes('pitch'),
    },
    {
      id: 'constraints',
      label: 'Specific Constraints (Budget / Time / Rules)',
      present: lowerPrompt.includes('10,000') || lowerPrompt.includes('10000') || lowerPrompt.includes('2m') || lowerPrompt.includes('2,000,000') || lowerPrompt.includes('60-minute') || lowerPrompt.includes('60 min') || lowerPrompt.includes('budget') || lowerPrompt.includes('limit'),
    },
    {
      id: 'specifics',
      label: 'Key Channels / Suspects / Metrics',
      present: lowerPrompt.includes('instagram') || lowerPrompt.includes('whatsapp') || lowerPrompt.includes('arr') || lowerPrompt.includes('slide') || lowerPrompt.includes('suspect') || lowerPrompt.includes('clue'),
    },
    {
      id: 'format',
      label: 'Structured Actionable Output Format',
      present: lowerPrompt.includes('7-day') || lowerPrompt.includes('10-slide') || lowerPrompt.includes('act') || lowerPrompt.includes('step') || lowerPrompt.includes('bullet') || lowerPrompt.includes('format'),
    },
  ];

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
      {/* SHUTTER SUBMISSION OVERLAY */}
      {isLocking && (
        <div className="fixed inset-0 z-50 pointer-events-none flex flex-col">
          <div
            className={`w-full bg-zinc-950 border-b-4 border-amber-500 transition-all duration-500 ease-in flex items-end justify-center pb-8 shadow-2xl ${
              shutterClosed ? 'h-1/2' : 'h-0'
            }`}
          >
            <div className="font-mono text-2xl sm:text-3xl font-black text-amber-400 tracking-wider uppercase animate-pulse">
              PROMPT SUBMITTED!
            </div>
          </div>

          <div
            className={`w-full bg-zinc-950 border-t-4 border-cyan-500 transition-all duration-500 ease-in flex items-start justify-center pt-8 shadow-2xl ${
              shutterClosed ? 'h-1/2' : 'h-0'
            }`}
          >
            <div className="font-mono text-sm sm:text-base font-bold text-cyan-400 tracking-wider uppercase">
              Analyzing your prompt and calculating your score...
            </div>
          </div>
        </div>
      )}

      {/* Top Header & 5:00 Timer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
              MISSION: {scenario.title}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
            WRITE YOUR PROMPT FROM YOUR SURVIVING CLUES
          </h2>
        </div>

        {/* 5:00 Chronometer Display */}
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border-2 font-mono font-black tracking-widest shadow-lg ${
              timeLeft <= 60
                ? 'bg-red-950/60 border-red-500 text-red-400 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                : 'bg-zinc-900 border-amber-500/60 text-amber-300'
            }`}
          >
            <Clock className="w-5 h-5" />
            <span className="text-2xl sm:text-3xl">{formatTime(timeLeft)}</span>
          </div>

          {/* Submit Action */}
          <button
            onClick={handleSubmit}
            disabled={isLocking}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 font-mono text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
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
          <div className="glass-panel p-4 rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-xl">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                YOUR SAVED CLUES ({survivingFragments.length})
              </span>
              <span className="text-xs font-mono text-amber-400 font-semibold">
                Click any clue to add it
              </span>
            </div>

            {survivingFragments.length === 0 ? (
              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-950/20 text-center text-xs font-mono text-amber-200">
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
                          ? 'border-emerald-500/40 bg-emerald-950/30 text-emerald-300'
                          : 'border-cyan-500/30 bg-cyan-950/20 text-cyan-200 hover:border-cyan-400 hover:bg-cyan-950/40'
                      }`}
                    >
                      <span className="truncate max-w-[210px]">{frag.icon} {frag.text}</span>
                      <span className="shrink-0 text-[10px] opacity-70 group-hover:opacity-100 font-bold">
                        {isUsed ? '✓ ADDED' : '+ ADD'}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Prompt Checklist */}
          <div className="glass-panel p-4 rounded-2xl border border-zinc-800 bg-zinc-950/90 shadow-xl">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                PROMPT CHECKLIST
              </span>
              <span className="font-mono text-xs font-bold text-amber-400">
                {completedChecks}/5 INCLUDED
              </span>
            </div>

            <div className="space-y-2">
              {structuralChecks.map((check) => (
                <div
                  key={check.id}
                  className={`flex items-center justify-between p-2 rounded-xl font-mono text-xs transition-all ${
                    check.present
                      ? 'bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 font-bold'
                      : 'bg-zinc-900/60 border border-zinc-800 text-zinc-400'
                  }`}
                >
                  <span>{check.label}</span>
                  <span>{check.present ? '✓ Included' : '— Missing'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Prompt Editor */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="glass-panel rounded-2xl border-2 border-amber-500/40 bg-zinc-950/95 flex flex-col h-full shadow-[0_0_30px_rgba(245,158,11,0.1)] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                  YOUR PROMPT BUFFER
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                <span>{wordCount} Words</span>
                <span>•</span>
                <span>{promptText.length} Characters</span>
              </div>
            </div>

            <div className="relative flex-1 min-h-[360px] p-4 flex flex-col">
              <textarea
                ref={textareaRef}
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder={`Type your prompt here...\n\nGive the AI a clear role, explain the objective, include the constraints from your saved clues, and specify the output format you want.`}
                className="w-full flex-1 min-h-[300px] bg-transparent text-zinc-100 font-mono text-sm sm:text-base leading-relaxed resize-none outline-none focus:ring-0 placeholder:text-zinc-600"
              />

              <div className="pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
                <span className="flex items-center gap-2 text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>Synthesize your saved clues and structure a complete prompt for the AI.</span>
                </span>
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  OFFICIAL EVENT SUBMISSION
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
