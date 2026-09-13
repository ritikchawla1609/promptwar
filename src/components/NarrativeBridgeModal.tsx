import React from 'react';
import { sound } from '../utils/audioEngine';
import { ShieldAlert, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';

interface NarrativeBridgeModalProps {
  isOpen: boolean;
  fromRound: number;
  toRound: number;
  title: string;
  discovery: string;
  nextObjective: string;
  onProceed: () => void;
}

export const NarrativeBridgeModal: React.FC<NarrativeBridgeModalProps> = ({
  isOpen,
  fromRound,
  toRound,
  title,
  discovery,
  nextObjective,
  onProceed
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 select-none font-mono animate-fade-in crt-overlay">
      <div className="w-full max-w-xl bg-[#0d090c] border-2 border-red-700 rounded-lg p-6 shadow-[0_0_60px_rgba(229,9,20,0.6)] space-y-5 text-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-red-950">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-500 animate-pulse" />
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              INVESTIGATION MILESTONE UNLOCKED
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-red-950 border border-red-800 text-red-300 font-bold">
            ROUND {fromRound} ➔ ROUND {toRound}
          </span>
        </div>

        {/* Milestone Title */}
        <div>
          <h2 className="text-xl font-bold text-gray-100 tracking-wide uppercase font-serif">
            {title}
          </h2>
          <p className="text-xs text-red-400/90 font-semibold mt-1">
            Forensic Linkage Established
          </p>
        </div>

        {/* Discovery Box */}
        <div className="p-4 rounded border border-red-900/60 bg-red-950/20 space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-red-400 font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-red-400" />
            CRITICAL TRUTH EXPOSED:
          </div>
          <p className="text-xs md:text-sm text-gray-200 leading-relaxed font-mono">
            {discovery}
          </p>
        </div>

        {/* Next Objective */}
        <div className="p-3 bg-black/60 rounded border border-gray-800 space-y-1">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
            HOW THIS LEADS TO THE NEXT LAYER:
          </span>
          <p className="text-xs text-amber-300/90 font-mono leading-relaxed">
            {nextObjective}
          </p>
        </div>

        {/* Proceed Button */}
        <button
          onClick={() => {
            sound.playHorrorStinger();
            onProceed();
          }}
          className="cursor-pointer w-full py-3.5 bg-red-800 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded transition shadow-[0_0_25px_rgba(229,9,20,0.5)] flex items-center justify-center gap-2"
        >
          <span>PROCEED TO ROUND {toRound}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
