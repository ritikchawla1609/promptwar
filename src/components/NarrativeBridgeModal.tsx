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
    <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fade-in">
      <div className="w-full max-w-xl glass-panel border border-red-500/20 rounded-xl p-6 shadow-2xl space-y-5 text-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
              Investigation Milestone Unlocked
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-800/40 text-red-300 font-mono font-medium">
            Round {fromRound} ➔ Round {toRound}
          </span>
        </div>

        {/* Milestone Title */}
        <div>
          <h2 className="text-lg font-semibold text-gray-100 tracking-tight">
            {title}
          </h2>
          <p className="text-xs text-red-400 font-medium mt-1">
            Forensic Linkage Established
          </p>
        </div>

        {/* Discovery Box */}
        <div className="p-4 rounded-lg border border-red-900/40 bg-red-950/15 space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-red-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            Critical Truth Exposed
          </div>
          <p className="text-xs md:text-sm text-gray-200 leading-relaxed font-sans">
            {discovery}
          </p>
        </div>

        {/* Next Objective */}
        <div className="p-3 bg-white/[0.02] rounded-lg border border-gray-800/60 space-y-1">
          <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider block">
            Next Objective:
          </span>
          <p className="text-xs text-amber-300/90 leading-relaxed">
            {nextObjective}
          </p>
        </div>

        {/* Proceed Button */}
        <button
          onClick={() => {
            sound.playHorrorStinger();
            onProceed();
          }}
          className="cursor-pointer w-full py-3 bg-red-950/90 hover:bg-red-900 border border-red-700/60 text-white font-medium text-xs uppercase tracking-wider rounded-lg transition shadow-lg flex items-center justify-center gap-2"
        >
          <span>Proceed to Round {toRound}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
