import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { Clock, Lock, CheckCircle2, AlertCircle, Sparkles, ChevronDown, ChevronUp, Terminal, ArrowRight } from 'lucide-react';

export default function Screen3Create({
  challenge,
  timer,
  session,
  onUpdateSession,
  onLockFirstForm,
  allSubmissionsCount = 47,
  totalParticipantsGoal = 60,
}) {
  const [promptInput, setPromptInput] = useState(session.firstPrompt || '');
  const [outputInput, setOutputInput] = useState(session.firstOutput || '');
  const [isPromptExpanded, setIsPromptExpanded] = useState(true);
  const [isOutputExpanded, setIsOutputExpanded] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Autosave locally
  useEffect(() => {
    onUpdateSession({
      firstPrompt: promptInput,
      firstOutput: outputInput,
    });
  }, [promptInput, outputInput]);

  const hasPrompt = promptInput.trim().length > 0;
  const hasOutput = outputInput.trim().length > 0;
  const isReady = hasPrompt && hasOutput;
  const isLocked = session.status === 'FIRST_LOCKED' || session.status === 'MATCHED' || session.firstSubmittedAt;

  const handleLock = () => {
    if (!isReady) return;
    parasiteAudio.playLock();
    setIsSubmitting(true);

    setTimeout(() => {
      onLockFirstForm({
        firstPrompt: promptInput.trim(),
        firstOutput: outputInput.trim(),
      });
      setIsSubmitting(false);
    }, 500);
  };

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // If already locked, show the atmospheric waiting room
  if (isLocked) {
    return (
      <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-12 max-w-5xl mx-auto select-none">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
          <span className="text-bone-400 uppercase tracking-widest">
            PHASE 01: FIRST FORM SECURED
          </span>
          <span className="text-acid-lime font-bold uppercase tracking-wider">
            STATUS: ENCRYPTED
          </span>
        </div>

        <div className="my-auto py-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 border border-acid-lime/40 bg-acid-lime/5 flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-acid-lime" />
          </div>

          <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid-lime font-bold mb-2">
            SUBMISSION CONFIRMED
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-bone-50 tracking-tightest uppercase mb-4">
            FIRST FORM LOCKED.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-bone-300 max-w-md leading-relaxed mb-8">
            YOUR FIRST FORM HAS ENTERED THE ARENA CLUSTER.
            <br />
            OPPONENT OUTPUTS ARE CURRENTLY BEING INDEXED.
          </p>

          {/* Network Forming Widget */}
          <div className="w-full max-w-md p-6 border border-white/[0.12] bg-charcoal-900/70 text-left font-mono">
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="text-bone-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-acid-lime animate-ping" />
                THE NETWORK IS FORMING...
              </span>
              <span className="text-acid-lime font-bold">
                {allSubmissionsCount} / {totalParticipantsGoal}
              </span>
            </div>

            {/* Progress line */}
            <div className="w-full bg-charcoal-800 h-1.5 overflow-hidden mb-4">
              <div
                className="bg-acid-lime h-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, Math.round((allSubmissionsCount / totalParticipantsGoal) * 100))}%`,
                }}
              />
            </div>

            <p className="text-[11px] text-bone-500 leading-normal">
              Contenders are independently finalizing their baseline runs. Anonymous matching will engage automatically once the cohort aligns.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
          <span>HOST REVERSE ROUTING ACTIVE</span>
          <span>STAGE 02 / MATCHMAKING IMMINENT</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[calc(100vh-56px)] px-4 sm:px-8 py-6 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Top Telemetry Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-acid-lime" />
          <span className="text-bone-300 uppercase tracking-wider font-bold">
            STAGE 01 // INDEPENDENT CREATION WORKSPACE
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-bone-400">
            <span className="text-[10px] text-bone-500">FORMAT:</span>
            <span className="text-bone-200 uppercase font-bold">PROMPT + RAW OUTPUT</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-acid-lime/10 border border-acid-lime/30 text-acid-lime font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTimer(timer)}</span>
          </div>
        </div>
      </div>

      {/* Main 3-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-start mb-6">
        {/* LEFT COLUMN: Mission Brief & Requirements Reference (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="p-4 border border-white/[0.08] bg-charcoal-900/60 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-bone-500 block mb-1">
              MISSION BRIEF
            </span>
            <h3 className="font-display font-bold text-sm text-bone-100 mb-2 leading-snug">
              {challenge.title}
            </h3>
            <p className="text-bone-400 text-xs leading-relaxed mb-3">
              {challenge.brief}
            </p>

            <div className="space-y-1.5 pt-2 border-t border-white/[0.06] text-[11px]">
              {(challenge.constraints || []).map((c, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-bone-500">{c.label}:</span>
                  <span className="text-bone-200 font-bold">{c.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border border-white/[0.08] bg-charcoal-900/40 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-bone-500 block mb-2">
              KEY DELIVERABLES
            </span>
            <ul className="space-y-1.5 text-[11px] text-bone-400 list-disc list-inside">
              <li>7-Day execution timeline</li>
              <li>₹10,000 budget allocation</li>
              <li>WhatsApp & Instagram scripts</li>
              <li>Guerrilla campus tactics</li>
            </ul>
          </div>
        </div>

        {/* CENTER COLUMN: The Submission Editor (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border border-white/[0.08] bg-charcoal-950/70 p-5">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid-lime font-bold block">
                  PRIMARY SUBMISSION
                </span>
                <h2 className="font-display font-black text-xl text-bone-100 tracking-tight">
                  BUILD YOUR FIRST FORM
                </h2>
              </div>

              <div className="font-mono text-[10px] text-bone-400 uppercase">
                EXTERNAL AI OUTPUT REQUIRED
              </div>
            </div>

            {/* Input 1: Exact Prompt Used */}
            <div className="mb-4">
              <div
                onClick={() => setIsPromptExpanded(!isPromptExpanded)}
                className="flex items-center justify-between p-2.5 bg-charcoal-900/80 border border-white/[0.08] cursor-pointer hover:border-white/[0.16] transition-colors"
              >
                <div className="flex items-center gap-2 font-mono text-xs">
                  <Terminal className="w-3.5 h-3.5 text-acid-lime" />
                  <span className="font-bold text-bone-200 uppercase">1. YOUR PROMPT</span>
                  <span className="text-[10px] text-bone-500">
                    ({hasPrompt ? `${promptInput.split(/\s+/).filter(Boolean).length} words` : 'Empty'})
                  </span>
                </div>
                {isPromptExpanded ? (
                  <ChevronUp className="w-4 h-4 text-bone-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-bone-400" />
                )}
              </div>

              {isPromptExpanded && (
                <div className="p-3 bg-charcoal-950 border-x border-b border-white/[0.08]">
                  <textarea
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder="Paste the exact prompt you engineered in ChatGPT / Claude / Gemini..."
                    className="w-full h-36 bg-transparent text-bone-100 font-mono text-xs sm:text-sm leading-relaxed outline-none resize-y placeholder:text-bone-600"
                  />
                  <div className="pt-2 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-bone-500">
                    <span>Keep prompt authentic and unedited.</span>
                    <span>{promptInput.length} chars</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input 2: Final AI Output */}
            <div>
              <div
                onClick={() => setIsOutputExpanded(!isOutputExpanded)}
                className="flex items-center justify-between p-2.5 bg-charcoal-900/80 border border-white/[0.08] cursor-pointer hover:border-white/[0.16] transition-colors"
              >
                <div className="flex items-center gap-2 font-mono text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-bone-300" />
                  <span className="font-bold text-bone-200 uppercase">2. YOUR AI OUTPUT</span>
                  <span className="text-[10px] text-bone-500">
                    ({hasOutput ? `${outputInput.split(/\s+/).filter(Boolean).length} words` : 'Empty'})
                  </span>
                </div>
                {isOutputExpanded ? (
                  <ChevronUp className="w-4 h-4 text-bone-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-bone-400" />
                )}
              </div>

              {isOutputExpanded && (
                <div className="p-3 bg-charcoal-950 border-x border-b border-white/[0.08]">
                  <textarea
                    value={outputInput}
                    onChange={(e) => setOutputInput(e.target.value)}
                    placeholder="Paste the full, unedited AI response generated by your chosen model..."
                    className="w-full h-52 bg-transparent text-bone-100 font-mono text-xs sm:text-sm leading-relaxed outline-none resize-y placeholder:text-bone-600"
                  />
                  <div className="pt-2 border-t border-white/[0.06] flex justify-between text-[10px] font-mono text-bone-500">
                    <span>This output will be viewed anonymously by matched opponents.</span>
                    <span>{outputInput.length} chars</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Telemetry, Checklist & Lock Action (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="p-5 border border-white/[0.08] bg-charcoal-900/50 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-bone-500 block mb-3">
              SUBMISSION AUDIT
            </span>

            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between p-2 bg-charcoal-950 border border-white/[0.06]">
                <span className="text-bone-400">PROMPT:</span>
                <span className={`font-bold ${hasPrompt ? 'text-acid-lime' : 'text-crimson'}`}>
                  {hasPrompt ? '✓ READY' : 'NOT SUBMITTED'}
                </span>
              </div>

              <div className="flex items-center justify-between p-2 bg-charcoal-950 border border-white/[0.06]">
                <span className="text-bone-400">AI OUTPUT:</span>
                <span className={`font-bold ${hasOutput ? 'text-acid-lime' : 'text-crimson'}`}>
                  {hasOutput ? '✓ READY' : 'NOT SUBMITTED'}
                </span>
              </div>
            </div>

            {/* Lock Button */}
            <button
              onClick={handleLock}
              disabled={!isReady || isSubmitting}
              className={`w-full py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                isReady && !isSubmitting
                  ? 'bg-acid-lime text-charcoal-950 hover:brightness-110 cursor-pointer shadow-[0_0_20px_rgba(212,255,0,0.25)]'
                  : 'bg-charcoal-800 text-bone-500 border border-white/[0.08] cursor-not-allowed opacity-60'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'LOCKING...' : 'LOCK FIRST FORM'}</span>
            </button>

            <p className="mt-3 text-[10px] text-bone-500 text-center leading-normal">
              Once locked, your First Form cannot be edited until the Parasite mutation cycle unlocks.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
        <span>SESSION: {session.anonymousId}</span>
        <span>PROMPT PARASITE // ROUND 01</span>
      </div>
    </div>
  );
}
