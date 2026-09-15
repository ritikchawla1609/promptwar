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
    <div className="w-full glass-panel p-5 sm:p-6 space-y-5 text-gray-200 font-sans shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-800/80 gap-2">
        <div className="flex items-center gap-2.5">
          <Scale className="w-4 h-4 text-red-400" />
          <h2 className="text-sm md:text-base font-semibold text-gray-100 tracking-wider uppercase">
            Phase 5: The False Murderer // AI Verdict
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-red-400 font-mono bg-red-950/30 px-2.5 py-1 rounded border border-red-900/40">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span>AI ACCUSATION CONFIDENCE: 97.8%</span>
        </div>
      </div>

      {/* Target Dossier */}
      <div className="p-4 sm:p-5 rounded-lg border border-gray-800/80 bg-black/40 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-800/80 pb-3">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold font-mono">
              CLASSIFIED TARGET PROFILE // DESIGNATED CULPRIT
            </span>
            <h3 className="text-lg font-semibold text-red-400 tracking-tight flex items-center gap-2 mt-0.5">
              <span>Primary Suspect: Dr. Meera Patel</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-800/60 font-mono uppercase">
                Designated Target
              </span>
            </h3>
          </div>
          <div className="text-[11px] text-red-300 font-mono bg-red-950/40 border border-red-800/60 px-2.5 py-1 rounded self-start sm:self-center">
            PROBABILITY: 97.8%
          </div>
        </div>

        {/* 4 Forensic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
          <div className="p-3 bg-black/50 border border-gray-800/80 rounded-lg space-y-1">
            <span className="text-[10px] text-red-400 font-mono font-semibold tracking-wider block">01 // ALIBI COLLAPSE</span>
            <p className="text-gray-300 text-[11px] leading-relaxed">12:03 CCTV contradicted by 12:05 Study audio.</p>
          </div>
          <div className="p-3 bg-black/50 border border-gray-800/80 rounded-lg space-y-1">
            <span className="text-[10px] text-red-400 font-mono font-semibold tracking-wider block">02 // DIRECT ASSAULT</span>
            <p className="text-gray-300 text-[11px] leading-relaxed">11:47 PM pinhole video proves brass paperweight strike.</p>
          </div>
          <div className="p-3 bg-black/50 border border-gray-800/80 rounded-lg space-y-1">
            <span className="text-[10px] text-red-400 font-mono font-semibold tracking-wider block">03 // RESEARCH MOTIVE</span>
            <p className="text-gray-300 text-[11px] leading-relaxed">Sen threatened to terminate her grant and publish her findings.</p>
          </div>
          <div className="p-3 bg-black/50 border border-gray-800/80 rounded-lg space-y-1">
            <span className="text-[10px] text-red-400 font-mono font-semibold tracking-wider block">04 // LATENT PRINTS</span>
            <p className="text-gray-300 text-[11px] leading-relaxed">Matching fingerprints recovered from paperweight weapon.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-gray-800/80 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccuse}
            disabled={round5Choice === 'accused_meera'}
            className="flex-1 py-2.5 px-4 rounded-md bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-medium text-xs uppercase tracking-wider transition disabled:opacity-40 cursor-pointer font-mono"
          >
            Confirm Meera as Murderer
          </button>
          <button
            onClick={handleChallenge}
            className="flex-1 py-2.5 px-4 rounded-md bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-600/70 text-cyan-200 font-medium text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2 font-mono"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Challenge AI // Audit 11:41 Pre-Crime Spool</span>
          </button>
        </div>
      </div>

      {/* Outcome A: Accused Meera (Trap Triggered) */}
      {round5Choice === 'accused_meera' && (
        <div className="p-4 rounded-lg border border-red-800/60 bg-red-950/30 text-red-200 space-y-2 animate-fade-in">
          <div className="flex items-center gap-2 font-semibold text-red-300 text-xs sm:text-sm font-mono">
            <XCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>Confirmation Bias Triggered</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-300">
            Meera <span className="text-red-300 font-semibold underline">assaulted</span> Sen at 11:47 PM, but Sen survived her strike and spoke on video at 12:03 AM! Meera was NOT in the study during the 12:13 AM blackout when the fatal smothering took place.
          </p>
          <button
            onClick={handleChallenge}
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
          >
            Click here to audit the laser printer spool and expose the real conspiracy →
          </button>
        </div>
      )}

      {/* Outcome B: Challenged (Printer Log Unlocked) */}
      {printerLogUnlocked && (
        <div className="p-4 rounded-lg border border-cyan-700/50 bg-cyan-950/15 text-cyan-200 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-cyan-300 text-sm font-mono">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Evidence 12 Unlocked: Thermal Spool</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
              Pre-Crime Exposed
            </span>
          </div>

          <div className="p-3.5 rounded-lg border border-gray-800/80 bg-black/60 font-mono text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-gray-800/80 pb-2">
              <span className="text-red-400 font-medium flex items-center gap-1.5">
                <Printer className="w-3.5 h-3.5" />
                THERMAL LASER SPOOL: HP-LASER-STUDY
              </span>
              <span className="px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-900/60">
                11:41:22 PM (PRE-CRIME)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300">
              <div>
                <span className="text-gray-500 block">DOCUMENT:</span>
                <span className="text-amber-300">"MEERA_PATEL_INCIDENTS_SUMMARY.pdf"</span>
              </div>
              <div>
                <span className="text-gray-500 block">CHRONO PARADOX:</span>
                <span className="text-red-300">Printed 6 minutes BEFORE the 11:47 PM strike!</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border-l-2 border-red-700 rounded-r text-xs text-red-200">
            <span className="font-semibold text-red-300 block mb-0.5 font-mono">The Master Conspiracy:</span>
            Someone prepared the incriminating dossier <span className="underline font-medium">before</span> the crime occurred. Meera was framed as the designated scapegoat from the very beginning.
          </div>
        </div>
      )}
    </div>
  );
};
