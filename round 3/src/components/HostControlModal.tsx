import React from 'react';
import { sound } from '../utils/audioEngine';
import { 
  Sliders, 
  X, 
  FastForward, 
  Clock, 
  Unlock, 
  Zap, 
  Skull, 
  RotateCcw,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { SuspectId } from '../types/game';

interface HostControlModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentRound: number;
  onSelectRound: (round: number) => void;
  timeRemaining: number;
  onAdjustTime: (deltaSeconds: number) => void;
  onUnlockAllLocks: () => void;
  onUnlockPrinterLog: () => void;
  onUnlockHiddenVideo: () => void;
  onTriggerBlackout: () => void;
  onTriggerClimax: () => void;
  onResetGame: () => void;
  onAutoSolveAll?: () => void;
}

export const HostControlModal: React.FC<HostControlModalProps> = ({
  isOpen,
  onClose,
  currentRound,
  onSelectRound,
  timeRemaining,
  onAdjustTime,
  onUnlockAllLocks,
  onUnlockPrinterLog,
  onUnlockHiddenVideo,
  onTriggerBlackout,
  onTriggerClimax,
  onResetGame,
  onAutoSolveAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-2xl glass-panel border border-red-500/20 rounded-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto text-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-5">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-red-500" />
            <h2 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
              Game Master / Facilitator Override HUD
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* JUDGE / EVALUATOR QUICK ACTIONS CARD */}
        <div className="p-4 rounded-lg border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-black/40 to-red-950/20 mb-5 space-y-3 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
              Judge & Evaluator Shortcuts
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-700/40 font-mono font-medium">
              Speedrun Tools
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {onAutoSolveAll && (
              <button
                type="button"
                onClick={() => {
                  onAutoSolveAll();
                  onClose();
                }}
                className="p-3 rounded-lg bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/40 text-amber-200 font-medium transition flex items-center gap-2.5 cursor-pointer active:scale-98"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-left">
                  <span className="block text-[11px] font-semibold">⚡ Auto-Solve Entire Case</span>
                  <span className="text-[9px] text-amber-300/80 font-normal">Unlocks all clues, 100/100 matrix</span>
                </div>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                onTriggerClimax();
              }}
              className="p-3 rounded-lg bg-red-950/60 hover:bg-red-900/80 border border-red-500/40 text-red-200 font-medium transition flex items-center gap-2.5 cursor-pointer active:scale-98"
            >
              <Skull className="w-4 h-4 text-red-400 shrink-0" />
              <div className="text-left">
                <span className="block text-[11px] font-semibold">🔥 Launch 60-Sec Climax</span>
                <span className="text-[9px] text-red-300/80 font-normal">Plays blackout & epilogue reveal</span>
              </div>
            </button>
          </div>
        </div>

        {/* Round Jump Matrix */}
        <div className="space-y-2 mb-5">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">
            Jump to Round Benchmark:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {[
              { id: 0, label: '0. Arrival (Intro)' },
              { id: 1, label: '1. First Lie' },
              { id: 2, label: '2. Five Locks' },
              { id: 3, label: '3. AI Trap' },
              { id: 4, label: '4. Dead Man' },
              { id: 5, label: '5. False Culprit' },
              { id: 6, label: '6. Final Boss' }
            ].map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  onSelectRound(r.id);
                  sound.playTick(false);
                }}
                className={`px-3 py-2 rounded-lg text-left transition font-medium ${
                  currentRound === r.id
                    ? 'bg-red-950 text-white border border-red-500/60 shadow-md'
                    : 'bg-white/[0.02] border border-gray-800 text-gray-400 hover:text-gray-100 hover:border-gray-700'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timer Adjustments */}
        <div className="p-3.5 rounded-lg border border-gray-800 bg-white/[0.02] space-y-2.5 mb-5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Session Timer Adjustment:
            </span>
            <span className="text-xs font-mono font-medium text-amber-300">
              {Math.floor(timeRemaining / 60)}m {timeRemaining % 60}s remaining
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {[-300, -60, 60, 300].map((delta) => (
              <button
                key={delta}
                onClick={() => onAdjustTime(delta)}
                className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-gray-800 text-gray-300 font-mono text-[11px] transition"
              >
                {delta > 0 ? `+${delta / 60}m` : `${delta / 60}m`}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Room Overrides */}
        <div className="space-y-2.5 mb-5">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider block">
            Room Overrides & Triggers:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                onUnlockAllLocks();
                sound.playHorrorStinger();
              }}
              className="p-2.5 rounded-lg border border-gray-800 bg-white/[0.02] hover:border-emerald-700/60 text-left text-gray-300 hover:text-emerald-300 transition flex items-center gap-2"
            >
              <Unlock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[11px]">Unlock All 5 Suspect Locks</span>
            </button>

            <button
              onClick={() => {
                onUnlockPrinterLog();
                sound.playTick(true);
              }}
              className="p-2.5 rounded-lg border border-gray-800 bg-white/[0.02] hover:border-cyan-700/60 text-left text-gray-300 hover:text-cyan-300 transition flex items-center gap-2"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-[11px]">Unlock 11:41 PM Printer Log</span>
            </button>

            <button
              onClick={() => {
                onTriggerBlackout();
                sound.playBlackout();
              }}
              className="p-2.5 rounded-lg border border-gray-800 bg-white/[0.02] hover:border-amber-700/60 text-left text-gray-300 hover:text-amber-300 transition flex items-center gap-2"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[11px]">Trigger Blackout SFX</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onTriggerClimax();
              }}
              className="p-2.5 rounded-lg border border-red-900/60 bg-red-950/20 hover:bg-red-950/40 text-left text-red-200 transition flex items-center gap-2"
            >
              <Skull className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="text-[11px]">Launch Horror Climax Reveal</span>
            </button>
          </div>
        </div>

        {/* Facilitator Truth Sheet */}
        <div className="p-3.5 rounded-lg border border-red-950/50 bg-red-950/10 text-xs space-y-1 text-gray-400 mb-5 font-sans">
          <p className="text-red-400 font-semibold uppercase text-[10px] tracking-wider mb-1.5">
            Facilitator Cheat Sheet:
          </p>
          <p className="text-[11px]">• <span className="text-gray-200 font-medium">11:41 PM:</span> Pre-crime fake evidence printed to frame Meera.</p>
          <p className="text-[11px]">• <span className="text-gray-200 font-medium">11:47 PM:</span> Meera attacks Sen; Sen survives wounded.</p>
          <p className="text-[11px]">• <span className="text-gray-200 font-medium">12:03 AM:</span> Sen records video ("Killer isn't who you suspect").</p>
          <p className="text-[11px]">• <span className="text-gray-200 font-medium">12:13 AM:</span> Kabir triggers power cut (blackout).</p>
          <p className="text-[11px]">• <span className="text-red-400 font-medium">12:15 AM:</span> Dev slips in via servant passage and kills Sen.</p>
          <p className="text-[11px]">• <span className="text-cyan-400 font-medium">AI Flaw:</span> Assumed CCTV clocks were synchronized.</p>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800">
          <button
            onClick={() => {
              if (confirm('Reset investigation back to beginning?')) {
                onResetGame();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Entire Session
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-medium rounded-lg transition cursor-pointer"
          >
            Close HUD
          </button>
        </div>
      </div>
    </div>
  );
};
