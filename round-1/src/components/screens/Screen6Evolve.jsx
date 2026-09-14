import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { Clock, Lock, CheckCircle2, AlertTriangle, Sparkles, Terminal, Edit3, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Screen6Evolve({
  challenge,
  session,
  timer = 600,
  onUpdateSession,
  onLockFinalForm,
}) {
  const [finalPrompt, setFinalPrompt] = useState(session.finalPrompt || '');
  const [finalOutput, setFinalOutput] = useState(session.finalOutput || '');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [evolutionComplete, setEvolutionComplete] = useState(false);

  // Autosave
  useEffect(() => {
    onUpdateSession({
      finalPrompt,
      finalOutput,
    });
  }, [finalPrompt, finalOutput]);

  // Midway coaching cues
  const [midwayCue, setMidwayCue] = useState(null);
  useEffect(() => {
    if (timer <= 300 && timer > 280) {
      setMidwayCue('EVOLUTION REQUIRES CHANGE.');
    } else if (timer <= 120 && timer > 100) {
      setMidwayCue('IMPROVE OR REMAIN THE SAME.');
    } else if (timer <= 30 && timer > 0) {
      setMidwayCue('FINAL FORM INCOMING.');
    } else {
      setMidwayCue(null);
    }
  }, [timer]);

  const hasPrompt = finalPrompt.trim().length > 0;
  const hasOutput = finalOutput.trim().length > 0;
  const isReady = hasPrompt && hasOutput;

  const handleTriggerLock = () => {
    if (!isReady) return;
    setShowConfirmModal(true);
  };

  const handleConfirmFinalLock = () => {
    setShowConfirmModal(false);
    setIsCompressing(true);
    parasiteAudio.playLock();

    // Cinematic compression & stabilization
    setTimeout(() => {
      parasiteAudio.playInfect();
    }, 800);

    setTimeout(() => {
      setEvolutionComplete(true);
      parasiteAudio.playSubDrop();
      onLockFinalForm({
        finalPrompt: finalPrompt.trim(),
        finalOutput: finalOutput.trim(),
      });
    }, 2000);
  };

  const formatTimer = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // When lock stabilizes
  if (evolutionComplete) {
    return (
      <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-12 max-w-5xl mx-auto select-none">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
          <span className="text-bone-400 uppercase tracking-widest">
            PHASE 04: EVOLUTION COMPLETE
          </span>
          <span className="text-acid-lime font-bold uppercase tracking-wider">
            PERMANENTLY SEALED
          </span>
        </div>

        <div className="my-auto py-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 border border-acid-lime bg-acid-lime/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,255,0,0.25)]">
            <Lock className="w-8 h-8 text-acid-lime" />
          </div>

          <span className="font-mono text-xs uppercase tracking-[0.35em] text-acid-lime font-bold mb-2">
            FINAL VERDICT IMMINENT
          </span>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-bone-100 uppercase tracking-tightest mb-4">
            EVOLUTION COMPLETE.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-bone-300 max-w-md leading-relaxed mb-8">
            YOUR FINAL FORM HAS BEEN COMPRESSED AND DELIVERED TO THE JUDGING MATRIX.
          </p>
        </div>

        <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
          <span>ALL OPPONENT STREAMS EXPELLED</span>
          <span>EVALUATION PROTOCOL ENGAGED</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[calc(100vh-56px)] px-4 sm:px-8 py-6 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-6 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-acid-lime animate-pulse" />
          <span className="text-bone-300 uppercase tracking-wider font-bold">
            STAGE 04 // FINAL EVOLUTION FORGE
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-bone-500 text-[11px] hidden sm:inline-block">
            RECONSTRUCT WITH EXTERNAL AI
          </span>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-acid-lime/10 border border-acid-lime/30 text-acid-lime font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTimer(timer)}</span>
          </div>
        </div>
      </div>

      {/* Midway Coaching Alert */}
      {midwayCue && (
        <div className="mb-4 p-3 border border-acid-lime/50 bg-acid-lime/5 text-acid-lime text-xs font-mono text-center uppercase tracking-widest font-bold animate-fadeIn">
          {midwayCue}
        </div>
      )}

      {/* Main 3-Column Layout: Left (Intel & Notes), Center (Final Form), Right (Audit & Progress) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 items-start mb-6">
        {/* LEFT COLUMN: Challenge Brief + Private Mutation Notes (3 Cols) */}
        <div className="lg:col-span-3 space-y-4">
          {/* Challenge Brief */}
          <div className="p-4 border border-white/[0.08] bg-charcoal-900/60 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-bone-500 block mb-1">
              ORIGINAL CHALLENGE
            </span>
            <h4 className="font-display font-bold text-bone-200 mb-1">
              {challenge.title}
            </h4>
            <p className="text-[11px] text-bone-400 leading-normal mb-3">
              {challenge.brief}
            </p>
            <div className="space-y-1 text-[10px] text-bone-400 pt-2 border-t border-white/[0.06]">
              <div>Goal: <strong className="text-bone-200">500 Registrations</strong></div>
              <div>Budget: <strong className="text-bone-200">₹10,000 Cap</strong></div>
              <div>Duration: <strong className="text-bone-200">7 Days</strong></div>
            </div>
          </div>

          {/* Private Mutation Notes from Parasite Stage */}
          <div className="p-4 border border-acid-lime/20 bg-charcoal-900/80 font-mono text-xs">
            <div className="flex items-center gap-1.5 text-acid-lime font-bold mb-2 pb-1.5 border-b border-white/[0.06]">
              <Edit3 className="w-3 h-3" />
              <span className="text-[11px] uppercase tracking-wider">YOUR MUTATION NOTES</span>
            </div>

            {session.mutationNotes ? (
              <div className="p-2.5 bg-charcoal-950 border border-white/[0.06] text-bone-300 text-[11px] leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto">
                {session.mutationNotes}
              </div>
            ) : (
              <p className="text-bone-500 text-[11px] italic">
                No mutation notes were recorded during Parasite mode. Apply whatever mental insights you absorbed.
              </p>
            )}
          </div>
        </div>

        {/* CENTER COLUMN: The Final Submission Workspace (6 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border border-white/[0.08] bg-charcoal-950/90 p-5">
            <div className="mb-4 pb-3 border-b border-white/[0.08]">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid-lime font-bold block mb-1">
                DEFINITIVE SUBMISSION
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-bone-50 tracking-tight">
                BUILD YOUR FINAL FORM
              </h2>
              <p className="font-sans text-xs text-bone-400 mt-1">
                You have seen what was possible. Return to your external AI model and forge a superior second iteration.
              </p>
            </div>

            {/* Input 1: Final Prompt */}
            <div className="mb-4">
              <div className="flex items-center justify-between p-2.5 bg-charcoal-900 border border-white/[0.08] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-acid-lime" />
                  <span className="font-bold text-bone-100 uppercase">FINAL REFINED PROMPT</span>
                </div>
                <span className="text-[10px] text-bone-500">
                  {finalPrompt.length > 0 ? `${finalPrompt.split(/\s+/).filter(Boolean).length} words` : 'Empty'}
                </span>
              </div>
              <textarea
                value={finalPrompt}
                onChange={(e) => setFinalPrompt(e.target.value)}
                placeholder="Paste the final evolved prompt you constructed after inspecting opponent outputs..."
                className="w-full h-36 p-3 bg-charcoal-950 border-x border-b border-white/[0.08] text-bone-100 font-mono text-xs sm:text-sm leading-relaxed outline-none resize-y placeholder:text-bone-600 focus:border-acid-lime/40"
              />
            </div>

            {/* Input 2: Final AI Output */}
            <div>
              <div className="flex items-center justify-between p-2.5 bg-charcoal-900 border border-white/[0.08] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-acid-lime" />
                  <span className="font-bold text-bone-100 uppercase">FINAL EVOLVED AI OUTPUT</span>
                </div>
                <span className="text-[10px] text-bone-500">
                  {finalOutput.length > 0 ? `${finalOutput.split(/\s+/).filter(Boolean).length} words` : 'Empty'}
                </span>
              </div>
              <textarea
                value={finalOutput}
                onChange={(e) => setFinalOutput(e.target.value)}
                placeholder="Paste the upgraded, complete response generated by AI..."
                className="w-full h-56 p-3 bg-charcoal-950 border-x border-b border-white/[0.08] text-bone-100 font-mono text-xs sm:text-sm leading-relaxed outline-none resize-y placeholder:text-bone-600 focus:border-acid-lime/40"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Evolution Line & Lock Button (3 Cols) */}
        <div className="lg:col-span-3 space-y-4 font-mono text-xs">
          {/* Evolution Progression Line */}
          <div className="p-5 border border-white/[0.08] bg-charcoal-900/60">
            <span className="text-[10px] uppercase tracking-widest text-bone-500 block mb-4">
              MUTATION TRAJECTORY
            </span>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3 text-bone-400">
                <span className="w-2 h-2 bg-bone-400" />
                <span className="line-through">FIRST FORM</span>
                <span className="text-[10px] text-bone-500 ml-auto">LOCKED</span>
              </div>

              <div className="w-0.5 h-4 bg-white/[0.1] ml-1" />

              <div className="flex items-center gap-3 text-bone-400">
                <span className="w-2 h-2 bg-bone-400" />
                <span className="line-through">PARASITE MODE</span>
                <span className="text-[10px] text-bone-500 ml-auto">COMPLETE</span>
              </div>

              <div className="w-0.5 h-4 bg-acid-lime ml-1" />

              <div className="flex items-center gap-3 text-acid-lime font-bold">
                <span className="w-2 h-2 bg-acid-lime animate-ping" />
                <span>FINAL FORM</span>
                <span className="text-[10px] bg-acid-lime/10 px-1.5 py-0.5 border border-acid-lime/30 text-acid-lime ml-auto">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Submission Readiness */}
          <div className="p-5 border border-white/[0.08] bg-charcoal-900/60">
            <span className="text-[10px] uppercase tracking-widest text-bone-500 block mb-3">
              AUDIT STATUS
            </span>

            <div className="space-y-2 mb-6">
              <div className="flex justify-between p-2 bg-charcoal-950 border border-white/[0.06]">
                <span className="text-bone-400">FINAL PROMPT:</span>
                <span className={`font-bold ${hasPrompt ? 'text-acid-lime' : 'text-crimson'}`}>
                  {hasPrompt ? '✓ READY' : 'EMPTY'}
                </span>
              </div>
              <div className="flex justify-between p-2 bg-charcoal-950 border border-white/[0.06]">
                <span className="text-bone-400">FINAL OUTPUT:</span>
                <span className={`font-bold ${hasOutput ? 'text-acid-lime' : 'text-crimson'}`}>
                  {hasOutput ? '✓ READY' : 'EMPTY'}
                </span>
              </div>
            </div>

            <button
              onClick={handleTriggerLock}
              disabled={!isReady || isCompressing}
              className={`w-full py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                isReady && !isCompressing
                  ? 'bg-acid-lime text-charcoal-950 hover:brightness-110 cursor-pointer shadow-[0_0_20px_rgba(212,255,0,0.25)]'
                  : 'bg-charcoal-800 text-bone-500 border border-white/[0.08] cursor-not-allowed opacity-60'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isCompressing ? 'COMPRESSING...' : 'LOCK FINAL FORM'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="max-w-md w-full p-6 border border-acid-lime/50 bg-charcoal-950 font-mono shadow-[0_0_50px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-2 text-acid-lime text-xs font-bold uppercase tracking-widest mb-3">
              <AlertTriangle className="w-4 h-4" />
              <span>CONFIRM FINAL FORM LOCK</span>
            </div>

            <h3 className="font-display font-black text-xl text-bone-100 uppercase tracking-tight mb-2">
              PERMANENT SUBMISSION
            </h3>

            <p className="text-xs text-bone-300 leading-relaxed mb-6">
              This is your official Final Form. Once submitted, your previous iteration cannot be restored and your work is locked for evaluation.
            </p>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs text-bone-400 hover:text-white border border-white/[0.1]"
              >
                KEEP EDITING
              </button>
              <button
                onClick={handleConfirmFinalLock}
                className="px-5 py-2 bg-acid-lime text-charcoal-950 font-bold text-xs uppercase hover:brightness-110"
              >
                LOCK FINAL FORM
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="pt-3 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
        <span>SESSION: {session.anonymousId}</span>
        <span>FINAL SUBMISSION WILL BE COMPARED WITH FIRST FORM</span>
      </div>
    </div>
  );
}
