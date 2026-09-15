import React, { useState } from 'react';
import { FinalBossSubmission } from '../types/game';
import { evaluateFinalBossSubmission } from '../data/solution';
import { sound } from '../utils/audioEngine';
import { 
  Terminal, 
  Send, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Skull, 
  Flame, 
  Key,
  ShieldAlert,
  Zap,
  Activity,
  Award
} from 'lucide-react';

interface FinalBossPromptProps {
  submission: Partial<FinalBossSubmission>;
  onChangeSubmission: (field: keyof FinalBossSubmission, val: string) => void;
  evaluated: boolean;
  score: number;
  feedback: string[];
  onSetEvaluation: (evaluated: boolean, score: number, feedback: string[]) => void;
  onTriggerClimax: () => void;
}

export const FinalBossPrompt: React.FC<FinalBossPromptProps> = ({
  submission,
  onChangeSubmission,
  evaluated,
  score,
  feedback,
  onSetEvaluation,
  onTriggerClimax
}) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const runEvaluation = (sub: Partial<FinalBossSubmission>) => {
    setIsSubmitting(true);
    sound.playHitmarker();
    sound.playRadioChirp();

    setTimeout(() => {
      const result = evaluateFinalBossSubmission(sub);
      onSetEvaluation(true, result.score, result.feedback);
      setIsSubmitting(false);

      if (result.passed) {
        sound.playObjectiveComplete();
      } else {
        sound.playGlitchStatic(0.4);
      }
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runEvaluation(submission);
  };

  const handleInjectMasterExploit = () => {
    sound.playHitmarker();
    sound.playRadioChirp();
    const fullSub: FinalBossSubmission = {
      attacker: 'Dr. Meera Patel',
      murderer: 'Devraj "Dev" Negi',
      blackoutCauser: 'Kabir Varma',
      attackTime: '11:47 PM',
      trueDeathTime: '12:15 AM (During Blackout)',
      finalRecordingTime: '12:03 AM',
      discoveryTime: '12:18 AM',
      falseEvidenceTime: '11:41 PM (HP Laser Spool)',
      aiBiggestError: 'The AI assumed all CCTV hardware clocks were synchronized, ignored the 9-minute kitchen clock drift, and falsely equated Meera\'s 11:47 PM assault with the fatal 12:15 AM smothering.'
    };

    Object.entries(fullSub).forEach(([k, v]) => {
      onChangeSubmission(k as keyof FinalBossSubmission, v);
    });

    setTimeout(() => {
      runEvaluation(fullSub);
    }, 300);
  };

  return (
    <div className="w-full glass-panel p-5 sm:p-6 space-y-5 text-gray-200 font-sans shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-800/80 gap-2">
        <div className="flex items-center gap-2.5">
          <Skull className="w-4 h-4 text-red-400" />
          <h2 className="text-sm md:text-base font-semibold text-gray-100 tracking-wider uppercase">
            Phase 6: The Master Forensic Matrix // Final Verdict
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-amber-400 font-mono bg-amber-950/30 px-2.5 py-1 rounded border border-amber-900/40">
          <Activity className="w-3 h-3" />
          <span>ASSEMBLE TRUTH VECTOR</span>
        </div>
      </div>

      {/* Decoded Cipher Banner */}
      <div className="p-3.5 rounded-lg border border-red-900/50 bg-red-950/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Key className="w-4 h-4 text-red-400 shrink-0" />
          <span className="text-xs text-red-200 font-serif italic">
            "The clock did not lie. Someone made it tell the truth too late."
          </span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono shrink-0">
          INDICES: 11:41 → 11:47 → 12:03 → 12:13 → 12:15
        </span>
      </div>

      {/* Master 1-Click Exploit Helper */}
      <div className="p-3 bg-black/40 rounded-lg border border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-xs text-gray-300">
          <span className="font-semibold text-amber-400 block font-mono">QUICK VERIFICATION:</span>
          Auto-fill the verified deduction matrix with 1 click.
        </div>
        <button
          type="button"
          onClick={handleInjectMasterExploit}
          className="w-full sm:w-auto px-4 py-2 bg-red-950/60 hover:bg-red-900/80 border border-red-800/70 text-red-200 font-medium text-xs uppercase tracking-wider rounded-md transition flex items-center justify-center gap-2 cursor-pointer font-mono shrink-0"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Auto-Fill Solution</span>
        </button>
      </div>

      {/* The Prompt Matrix Form */}
      <form onSubmit={handleSubmit} className="p-4 sm:p-5 rounded-lg border border-gray-800/80 bg-black/40 space-y-4">
        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold flex items-center gap-1.5 border-b border-gray-800/80 pb-2 font-mono">
          <Terminal className="w-3.5 h-3.5 text-red-400" />
          <span>SUSPECT & TIMELINE RECONSTRUCTION MATRIX</span>
        </div>

        {/* Suspect Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Attacker */}
          <div className="p-3 bg-black/50 rounded-lg border border-gray-800/80 space-y-2">
            <label className="text-gray-400 font-semibold block uppercase text-[11px] font-mono">
              1. Physical Attacker (11:47 PM):
            </label>
            <input
              type="text"
              value={submission.attacker || ''}
              onChange={(e) => onChangeSubmission('attacker', e.target.value)}
              placeholder="e.g. Dr. Meera Patel"
              className="w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-700 rounded-md px-2.5 py-1.5 text-gray-200 text-xs outline-none font-mono"
              required
            />
            <div className="flex gap-1.5 pt-1 font-mono">
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('attacker', 'Dr. Meera Patel');
                }}
                className="flex-1 py-1 bg-amber-950/30 hover:bg-amber-900/50 border border-amber-800/60 rounded text-[10px] text-amber-300 transition cursor-pointer"
              >
                Meera
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('attacker', 'Kabir Varma');
                }}
                className="flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 transition cursor-pointer"
              >
                Kabir
              </button>
            </div>
          </div>

          {/* Murderer */}
          <div className="p-3 bg-black/50 rounded-lg border border-red-900/50 space-y-2">
            <label className="text-red-400 font-semibold block uppercase text-[11px] font-mono">
              2. True Murderer (12:15 AM):
            </label>
            <input
              type="text"
              value={submission.murderer || ''}
              onChange={(e) => onChangeSubmission('murderer', e.target.value)}
              placeholder="e.g. Devraj 'Dev' Negi"
              className="w-full bg-[#0a0a0f] border border-red-900/60 focus:border-red-700 rounded-md px-2.5 py-1.5 text-red-200 font-medium text-xs outline-none font-mono"
              required
            />
            <div className="flex gap-1.5 pt-1 font-mono">
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('murderer', 'Devraj "Dev" Negi');
                }}
                className="flex-1 py-1 bg-red-950/60 hover:bg-red-900/80 border border-red-800/60 rounded text-[10px] text-red-200 font-medium transition cursor-pointer"
              >
                Dev Negi
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('murderer', 'Dr. Meera Patel');
                }}
                className="flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 transition cursor-pointer"
              >
                Meera
              </button>
            </div>
          </div>

          {/* Blackout */}
          <div className="p-3 bg-black/50 rounded-lg border border-gray-800/80 space-y-2">
            <label className="text-gray-400 font-semibold block uppercase text-[11px] font-mono">
              3. Blackout Operator (12:13 AM):
            </label>
            <input
              type="text"
              value={submission.blackoutCauser || ''}
              onChange={(e) => onChangeSubmission('blackoutCauser', e.target.value)}
              placeholder="e.g. Kabir Varma"
              className="w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-700 rounded-md px-2.5 py-1.5 text-gray-200 text-xs outline-none font-mono"
              required
            />
            <div className="flex gap-1.5 pt-1 font-mono">
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('blackoutCauser', 'Kabir Varma');
                }}
                className="flex-1 py-1 bg-purple-950/30 hover:bg-purple-900/50 border border-purple-800/60 rounded text-[10px] text-purple-300 transition cursor-pointer"
              >
                Kabir
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('blackoutCauser', 'Devraj Negi');
                }}
                className="flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 transition cursor-pointer"
              >
                Dev
              </button>
            </div>
          </div>
        </div>

        {/* Timestamps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-mono">
          <div className="p-2.5 bg-black/50 rounded-lg border border-gray-800/80 space-y-1.5">
            <label className="text-[10px] text-gray-400 uppercase font-semibold block">
              Pre-Crime Print:
            </label>
            <input
              type="text"
              value={submission.falseEvidenceTime || ''}
              onChange={(e) => onChangeSubmission('falseEvidenceTime', e.target.value)}
              placeholder="11:41 PM"
              className="w-full bg-[#0a0a0f] border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('falseEvidenceTime', '11:41 PM');
              }}
              className="w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer"
            >
              11:41 PM
            </button>
          </div>

          <div className="p-2.5 bg-black/50 rounded-lg border border-gray-800/80 space-y-1.5">
            <label className="text-[10px] text-gray-400 uppercase font-semibold block">
              Assault Time:
            </label>
            <input
              type="text"
              value={submission.attackTime || ''}
              onChange={(e) => onChangeSubmission('attackTime', e.target.value)}
              placeholder="11:47 PM"
              className="w-full bg-[#0a0a0f] border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('attackTime', '11:47 PM');
              }}
              className="w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer"
            >
              11:47 PM
            </button>
          </div>

          <div className="p-2.5 bg-black/50 rounded-lg border border-red-900/40 space-y-1.5">
            <label className="text-[10px] text-red-400 uppercase font-semibold block">
              True Death Time:
            </label>
            <input
              type="text"
              value={submission.trueDeathTime || ''}
              onChange={(e) => onChangeSubmission('trueDeathTime', e.target.value)}
              placeholder="12:15 AM"
              className="w-full bg-[#0a0a0f] border border-red-900/60 rounded px-2 py-1 text-xs text-red-200 font-medium outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('trueDeathTime', '12:15 AM');
              }}
              className="w-full py-0.5 bg-red-950/60 text-red-300 text-[9px] rounded border border-red-800/60 cursor-pointer"
            >
              12:15 AM
            </button>
          </div>

          <div className="p-2.5 bg-black/50 rounded-lg border border-gray-800/80 space-y-1.5">
            <label className="text-[10px] text-gray-400 uppercase font-semibold block">
              Discovery Time:
            </label>
            <input
              type="text"
              value={submission.discoveryTime || ''}
              onChange={(e) => onChangeSubmission('discoveryTime', e.target.value)}
              placeholder="12:18 AM"
              className="w-full bg-[#0a0a0f] border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('discoveryTime', '12:18 AM');
              }}
              className="w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer"
            >
              12:18 AM
            </button>
          </div>
        </div>

        {/* AI Cognitive Flaw */}
        <div className="p-3 bg-black/50 rounded-lg border border-gray-800/80 space-y-2">
          <div className="flex items-center justify-between font-mono">
            <label className="text-[11px] text-cyan-400 uppercase font-semibold tracking-wider block">
              4. AI's Critical Cognitive Flaw:
            </label>
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission(
                  'aiBiggestError',
                  'The AI assumed all CCTV clocks were synchronized and conflated premeditated framing/assault with the actual fatal smothering.'
                );
              }}
              className="text-[10px] text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
            >
              Auto-Fill Description
            </button>
          </div>
          <textarea
            rows={2}
            value={submission.aiBiggestError || ''}
            onChange={(e) => onChangeSubmission('aiBiggestError', e.target.value)}
            placeholder="Explain why the AI produced its flawed 97.8% Meera verdict..."
            className="w-full bg-[#0a0a0f] border border-gray-800 focus:border-cyan-700 rounded-md px-3 py-1.5 text-xs text-gray-200 outline-none font-mono"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 bg-red-900 hover:bg-red-800 disabled:opacity-50 text-white font-medium text-xs uppercase tracking-widest rounded-md transition flex items-center justify-center gap-2 cursor-pointer border border-red-800/60 font-mono"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Evaluating Matrix...' : 'Evaluate Final Indictment'}</span>
        </button>
      </form>

      {/* Evaluation Results */}
      {evaluated && (
        <div className={`p-5 rounded-lg border space-y-4 animate-fade-in ${
          score >= 75 ? 'border-emerald-700/60 bg-emerald-950/15' : 'border-red-800/60 bg-red-950/20'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-gray-800/80">
            <div className="flex items-center gap-3">
              {score >= 75 ? (
                <div className="p-1.5 rounded-full bg-emerald-950 border border-emerald-600">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              ) : (
                <div className="p-1.5 rounded-full bg-red-950 border border-red-600">
                  <XCircle className="w-5 h-5 text-red-400" />
                </div>
              )}
              <div>
                <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider font-mono">
                  {score >= 75 ? 'Truth Fully Reconstructed' : 'Incomplete Reconstruction'}
                </h3>
                <p className="text-xs text-gray-400 font-mono">
                  Passing Threshold: 75 / 100
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-2xl font-bold font-mono tracking-wider text-emerald-400">
                {score}
              </span>
              <span className="text-xs text-gray-500 font-mono"> / 100</span>
              {score >= 75 && (
                <div className="text-[10px] text-emerald-400 font-medium font-mono">
                  Case Solved
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            {feedback.map((item, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded-md text-[11px] ${
                  item.startsWith('✓') 
                    ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-900/60' 
                    : item.startsWith('!')
                    ? 'bg-amber-950/40 text-amber-300 border border-amber-900/60'
                    : 'bg-red-950/40 text-red-300 border border-red-900/60'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {score >= 75 && (
            <div className="pt-4 border-t border-gray-800/80 text-center space-y-3">
              <p className="text-xs text-emerald-300/90 font-serif italic">
                The House has surrendered its final memory.
              </p>
              <button
                onClick={onTriggerClimax}
                className="w-full sm:w-auto px-6 py-2.5 bg-red-900 hover:bg-red-800 text-white font-medium text-xs uppercase tracking-widest rounded-md transition cursor-pointer flex items-center justify-center gap-2 mx-auto border border-red-700 font-mono"
              >
                <Flame className="w-4 h-4 text-red-400" />
                <span>Trigger Climax Reveal ▶</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
