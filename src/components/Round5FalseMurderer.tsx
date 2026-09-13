import React from 'react';
import { sound } from '../utils/audioEngine';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Printer, 
  Sparkles, 
  Scale,
  Zap,
  Radio,
  FileWarning
} from 'lucide-react';

interface Round5FalseMurdererProps {
  round5Choice: 'pending' | 'accused_meera' | 'challenged';
  onAccuseMeera: () => void;
  onChallengeAi: () => void;
  printerLogUnlocked: boolean;
}

export const Round5FalseMurderer: React.FC<Round5FalseMurdererProps> = ({
  round5Choice,
  onAccuseMeera,
  onChallengeAi,
  printerLogUnlocked
}) => {
  const handleAccuse = () => {
    sound.playHitmarker();
    sound.playBlackout();
    onAccuseMeera();
  };

  const handleChallenge = () => {
    sound.playHitmarker();
    sound.playRadioChirp();
    sound.playObjectiveComplete();
    onChallengeAi();
  };

  return (
    <div className="w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Tactical HUD Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2">
        <div className="flex items-center gap-2.5">
          <Scale className="w-5 h-5 text-red-500 animate-pulse" />
          <h2 className="text-sm md:text-base font-black text-gray-100 tracking-wider uppercase">
            ROUND 5: THE FALSE MURDERER // AI VERDICT
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>AI ACCUSATION CONFIDENCE: 97.8%</span>
        </div>
      </div>

      {/* Target Dossier */}
      <div className="p-4 rounded border border-red-900/60 bg-black/90 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-950 pb-3">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
              CLASSIFIED TARGET PROFILE // DESIGNATED CULPRIT
            </span>
            <h3 className="text-xl font-black text-red-500 tracking-tight flex items-center gap-2">
              <span>PRIMARY SUSPECT: DR. MEERA PATEL</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800 uppercase">
                TARGET IDENTIFIED
              </span>
            </h3>
          </div>
          <div className="text-[11px] text-red-300 font-bold bg-red-950/80 border border-red-700 px-3 py-1.5 rounded self-start sm:self-center">
            PROBABILITY MATRIX: 97.8%
          </div>
        </div>

        {/* 4 Concise Forensic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
          <div className="p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1">
            <span className="text-[10px] text-red-400 font-black tracking-wider block">01 // ALIBI COLLAPSE</span>
            <p className="text-gray-300 text-[11px]">12:03 CCTV contradicted by 12:05 Study audio.</p>
          </div>
          <div className="p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1">
            <span className="text-[10px] text-red-400 font-black tracking-wider block">02 // DIRECT ASSAULT</span>
            <p className="text-gray-300 text-[11px]">11:47 PM pinhole video proves brass paperweight strike.</p>
          </div>
          <div className="p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1">
            <span className="text-[10px] text-red-400 font-black tracking-wider block">03 // RESEARCH MOTIVE</span>
            <p className="text-gray-300 text-[11px]">Sen threatened to terminate her grant and publish her findings.</p>
          </div>
          <div className="p-3 bg-red-950/20 border border-red-900/40 rounded space-y-1">
            <span className="text-[10px] text-red-400 font-black tracking-wider block">04 // LATENT PRINTS</span>
            <p className="text-gray-300 text-[11px]">Matching fingerprints recovered from paperweight weapon.</p>
          </div>
        </div>

        {/* Tactical Crossroads Actions */}
        <div className="pt-3 border-t border-red-950 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccuse}
            disabled={round5Choice === 'accused_meera'}
            className="flex-1 py-3 px-4 rounded bg-red-950 hover:bg-red-900 border border-red-700 text-red-200 font-black text-xs uppercase tracking-wider transition active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            CONFIRM MEERA AS MURDERER
          </button>
          <button
            onClick={handleChallenge}
            className="flex-1 py-3 px-4 rounded bg-cyan-950 hover:bg-cyan-900 border border-cyan-500 text-cyan-200 font-black text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>⚡ CHALLENGE AI // AUDIT 11:41 PM PRE-CRIME SPOOL</span>
          </button>
        </div>
      </div>

      {/* Outcome A: Accused Meera (Trap Triggered) */}
      {round5Choice === 'accused_meera' && (
        <div className="p-4 rounded border border-red-600 bg-red-950/50 text-red-200 space-y-2 animate-fade-in">
          <div className="flex items-center gap-2 font-black text-red-400 text-xs sm:text-sm">
            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
            <span>❌ FATAL COGNITIVE ERROR // CONFIRMATION BIAS TRIGGERED</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-300">
            Meera <span className="text-red-400 font-bold underline">assaulted</span> Sen at 11:47 PM, but Sen survived her strike and spoke on video at 12:03 AM! Meera was NOT in the study during the 12:13 AM blackout when the fatal smothering took place!
          </p>
          <button
            onClick={handleChallenge}
            className="text-xs font-black text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
          >
            Click here to audit the laser printer spool and expose the real conspiracy →
          </button>
        </div>
      )}

      {/* Outcome B: Challenged (Printer Log Unlocked) */}
      {printerLogUnlocked && (
        <div className="p-4 rounded border border-cyan-600/80 bg-cyan-950/20 text-cyan-200 space-y-3 animate-fade-in shadow-[0_0_25px_rgba(6,182,212,0.2)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-black text-cyan-400 text-sm">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <span>INVESTIGATIVE BREAKTHROUGH: EVIDENCE 12 UNLOCKED</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 animate-pulse">
              +250 XP PRE-CRIME EXPOSED
            </span>
          </div>

          <div className="p-3.5 rounded border border-cyan-900 bg-black/80 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-gray-800 pb-2">
              <span className="text-red-400 font-black flex items-center gap-1.5">
                <Printer className="w-4 h-4" />
                THERMAL LASER SPOOL LOG: HP-LASER-STUDY
              </span>
              <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 font-black border border-red-800">
                11:41:22 PM (PRE-CRIME)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300">
              <div>
                <span className="text-gray-500 block">DOCUMENT:</span>
                <span className="font-bold text-amber-300">"MEERA_PATEL_INCIDENTS_SUMMARY.pdf"</span>
              </div>
              <div>
                <span className="text-gray-500 block">CHRONO PARADOX:</span>
                <span className="font-bold text-red-400">Printed 6 minutes BEFORE the 11:47 PM strike!</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/40 border-l-4 border-red-600 rounded text-xs text-red-200">
            <span className="font-black text-red-400 block mb-0.5">⚡ THE MASTER CONSPIRACY:</span>
            Someone prepared the incriminating dossier <span className="underline font-bold">BEFORE</span> the crime occurred! Meera was targeted as the designated scapegoat from the very start.
          </div>
        </div>
      )}
    </div>
  );
};
