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
    <div className="w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Tactical HUD Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2">
        <div className="flex items-center gap-2.5">
          <Skull className="w-5 h-5 text-red-500 animate-pulse" />
          <h2 className="text-sm md:text-base font-black text-gray-100 tracking-wider uppercase">
            ROUND 6: THE MASTER FORENSIC MATRIX // CLIMAX READY
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-amber-400 font-bold bg-amber-950/40 px-2.5 py-1 rounded border border-amber-900/60">
          <Activity className="w-3 h-3 animate-spin" />
          <span>OBJECTIVE: ASSEMBLE TRUTH VECTOR</span>
        </div>
      </div>

      {/* Decoded Cipher Banner */}
      <div className="p-3.5 rounded border border-red-900/60 bg-red-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Key className="w-4 h-4 text-red-400 shrink-0" />
          <span className="text-xs text-red-200 font-serif italic font-bold">
            "THE CLOCK DID NOT LIE. SOMEONE MADE IT TELL THE TRUTH TOO LATE."
          </span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono shrink-0">
          INDICES: 11:41 → 11:47 → 12:03 → 12:13 → 12:15
        </span>
      </div>

      {/* Master 1-Click Exploit Banner */}
      <div className="p-3 bg-gradient-to-r from-red-950/80 via-black to-red-950/80 rounded border border-red-600 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-[0_0_20px_rgba(229,9,20,0.3)]">
        <div className="text-xs text-red-200">
          <span className="font-black text-red-400 block">⚡ HIGH-SPEED TACTICAL SOLVER:</span>
          Auto-inject the verified deduction matrix to dismantle the AI trap with 1 click.
        </div>
        <button
          type="button"
          onClick={handleInjectMasterExploit}
          className="w-full sm:w-auto px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs uppercase tracking-wider rounded transition shadow-[0_0_20px_rgba(229,9,20,0.6)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 shrink-0"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>INJECT MASTER EXPLOIT</span>
        </button>
      </div>

      {/* The Prompt Matrix Form */}
      <form onSubmit={handleSubmit} className="p-4 rounded border border-gray-800 bg-black/90 space-y-4">
        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-black flex items-center gap-1.5 border-b border-gray-800 pb-2">
          <Terminal className="w-3.5 h-3.5 text-red-500" />
          <span>TACTICAL SUSPECT & TIMELINE RECONSTRUCTION</span>
        </div>

        {/* Suspect Role Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Attacker */}
          <div className="p-3 bg-[#090b12] rounded border border-gray-800 space-y-2">
            <label className="text-gray-400 font-bold block uppercase text-[11px]">
              1. PHYSICAL ATTACKER (11:47 PM):
            </label>
            <input
              type="text"
              value={submission.attacker || ''}
              onChange={(e) => onChangeSubmission('attacker', e.target.value)}
              placeholder="e.g. Dr. Meera Patel"
              className="w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-200 text-xs outline-none"
              required
            />
            <div className="flex gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('attacker', 'Dr. Meera Patel');
                }}
                className="flex-1 py-1 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-800/80 rounded text-[10px] text-amber-300 font-bold transition cursor-pointer"
              >
                [ ⬡ Meera ]
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('attacker', 'Kabir Varma');
                }}
                className="flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer"
              >
                [ Kabir ]
              </button>
            </div>
          </div>

          {/* Murderer */}
          <div className="p-3 bg-[#090b12] rounded border border-red-900/80 space-y-2 shadow-[0_0_10px_rgba(239,68,68,0.15)]">
            <label className="text-red-400 font-black block uppercase text-[11px]">
              2. TRUE MURDERER (12:15 AM):
            </label>
            <input
              type="text"
              value={submission.murderer || ''}
              onChange={(e) => onChangeSubmission('murderer', e.target.value)}
              placeholder="e.g. Devraj 'Dev' Negi"
              className="w-full bg-black border border-red-900 focus:border-red-600 rounded px-2.5 py-1.5 text-red-200 font-black text-xs outline-none"
              required
            />
            <div className="flex gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('murderer', 'Devraj "Dev" Negi');
                }}
                className="flex-1 py-1 bg-red-950/80 hover:bg-red-900 border border-red-700 rounded text-[10px] text-red-200 font-black transition cursor-pointer shadow-sm"
              >
                [ ⬡ Dev Negi ]
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('murderer', 'Dr. Meera Patel');
                }}
                className="flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer"
              >
                [ Meera ]
              </button>
            </div>
          </div>

          {/* Blackout */}
          <div className="p-3 bg-[#090b12] rounded border border-gray-800 space-y-2">
            <label className="text-gray-400 font-bold block uppercase text-[11px]">
              3. BLACKOUT OPERATOR (12:13 AM):
            </label>
            <input
              type="text"
              value={submission.blackoutCauser || ''}
              onChange={(e) => onChangeSubmission('blackoutCauser', e.target.value)}
              placeholder="e.g. Kabir Varma"
              className="w-full bg-black border border-gray-800 focus:border-red-600 rounded px-2.5 py-1.5 text-gray-200 text-xs outline-none"
              required
            />
            <div className="flex gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('blackoutCauser', 'Kabir Varma');
                }}
                className="flex-1 py-1 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/80 rounded text-[10px] text-purple-300 font-bold transition cursor-pointer"
              >
                [ ⬡ Kabir ]
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playHitmarker();
                  onChangeSubmission('blackoutCauser', 'Devraj Negi');
                }}
                className="flex-1 py-1 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded text-[10px] text-gray-400 font-bold transition cursor-pointer"
              >
                [ Dev ]
              </button>
            </div>
          </div>
        </div>

        {/* Timestamps Row with 1-Click Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
          <div className="p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5">
            <label className="text-[10px] text-gray-400 uppercase font-bold block">
              PRE-CRIME PRINT:
            </label>
            <input
              type="text"
              value={submission.falseEvidenceTime || ''}
              onChange={(e) => onChangeSubmission('falseEvidenceTime', e.target.value)}
              placeholder="11:41 PM"
              className="w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('falseEvidenceTime', '11:41 PM');
              }}
              className="w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer"
            >
              [ ⚡ 11:41 PM ]
            </button>
          </div>

          <div className="p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5">
            <label className="text-[10px] text-gray-400 uppercase font-bold block">
              ASSAULT TIME:
            </label>
            <input
              type="text"
              value={submission.attackTime || ''}
              onChange={(e) => onChangeSubmission('attackTime', e.target.value)}
              placeholder="11:47 PM"
              className="w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('attackTime', '11:47 PM');
              }}
              className="w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer"
            >
              [ ⚡ 11:47 PM ]
            </button>
          </div>

          <div className="p-2.5 bg-[#090b12] rounded border border-red-900/60 space-y-1.5">
            <label className="text-[10px] text-red-400 uppercase font-black block">
              TRUE DEATH TIME:
            </label>
            <input
              type="text"
              value={submission.trueDeathTime || ''}
              onChange={(e) => onChangeSubmission('trueDeathTime', e.target.value)}
              placeholder="12:15 AM"
              className="w-full bg-black border border-red-900 rounded px-2 py-1 text-xs text-red-200 font-bold outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('trueDeathTime', '12:15 AM');
              }}
              className="w-full py-0.5 bg-red-950 text-red-300 text-[9px] rounded border border-red-800 cursor-pointer"
            >
              [ ⚡ 12:15 AM ]
            </button>
          </div>

          <div className="p-2.5 bg-[#090b12] rounded border border-gray-800 space-y-1.5">
            <label className="text-[10px] text-gray-400 uppercase font-bold block">
              DISCOVERY TIME:
            </label>
            <input
              type="text"
              value={submission.discoveryTime || ''}
              onChange={(e) => onChangeSubmission('discoveryTime', e.target.value)}
              placeholder="12:18 AM"
              className="w-full bg-black border border-gray-800 rounded px-2 py-1 text-xs text-gray-200 outline-none"
            />
            <button
              type="button"
              onClick={() => {
                sound.playHitmarker();
                onChangeSubmission('discoveryTime', '12:18 AM');
              }}
              className="w-full py-0.5 bg-gray-900 text-gray-300 text-[9px] rounded border border-gray-700 cursor-pointer"
            >
              [ ⚡ 12:18 AM ]
            </button>
          </div>
        </div>

        {/* AI Cognitive Flaw */}
        <div className="p-3 bg-[#090b12] rounded border border-cyan-950 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[11px] text-cyan-400 uppercase font-black tracking-wider block">
              4. AI'S CRITICAL COGNITIVE FLAW:
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
              [ ⚡ 1-Click Inject Flaw Description ]
            </button>
          </div>
          <textarea
            rows={2}
            value={submission.aiBiggestError || ''}
            onChange={(e) => onChangeSubmission('aiBiggestError', e.target.value)}
            placeholder="Explain why the AI produced its flawed 97.8% Meera verdict..."
            className="w-full bg-black border border-gray-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-gray-200 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-red-800 hover:bg-red-700 disabled:opacity-50 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'RUNNING FORENSIC RECONSTRUCTION MATRIX...' : 'EVALUATE FINAL BOSS SUBMISSION'}</span>
        </button>
      </form>

      {/* Evaluation Results */}
      {evaluated && (
        <div className={`p-5 rounded border space-y-4 animate-fade-in shadow-[0_0_30px_rgba(0,0,0,0.8)] ${
          score >= 75 ? 'border-emerald-600 bg-emerald-950/20' : 'border-red-700 bg-red-950/30'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <div className="flex items-center gap-3">
              {score >= 75 ? (
                <div className="p-2 rounded-full bg-emerald-950 border border-emerald-500">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
              ) : (
                <div className="p-2 rounded-full bg-red-950 border border-red-500">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
              )}
              <div>
                <h3 className="text-base font-black text-gray-100 uppercase tracking-wider">
                  {score >= 75 ? 'TRUTH FULLY RECONSTRUCTED' : 'INCOMPLETE RECONSTRUCTION'}
                </h3>
                <p className="text-xs text-gray-400">
                  Passing Threshold: 75 / 100
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-3xl font-black font-mono tracking-wider text-emerald-400">
                {score}
              </span>
              <span className="text-xs text-gray-500 font-mono"> / 100</span>
              {score >= 75 && (
                <div className="text-[10px] text-emerald-400 font-bold uppercase animate-pulse">
                  +500 XP CASE SOLVED
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {feedback.map((item, idx) => (
              <div
                key={idx}
                className={`p-2.5 rounded font-mono text-[11px] ${
                  item.startsWith('✓') 
                    ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-900' 
                    : item.startsWith('!')
                    ? 'bg-amber-950/60 text-amber-300 border border-amber-900'
                    : 'bg-red-950/60 text-red-300 border border-red-900'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {score >= 75 && (
            <div className="pt-4 border-t border-gray-800 text-center space-y-3">
              <p className="text-xs text-emerald-300 font-bold tracking-widest uppercase">
                THE HOUSE HAS SURRENDERED ITS FINAL MEMORY.
              </p>
              <button
                onClick={onTriggerClimax}
                className="w-full sm:w-auto px-10 py-3.5 bg-red-700 hover:bg-red-600 text-white font-black text-xs uppercase tracking-widest rounded transition shadow-[0_0_35px_rgba(229,9,20,0.8)] animate-pulse cursor-pointer flex items-center justify-center gap-2 mx-auto"
              >
                <Flame className="w-4 h-4" />
                <span>TRIGGER 60-SECOND HORROR CLIMAX REVEAL ▶</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
