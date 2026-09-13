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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-mono select-none">
      <div className="w-full max-w-2xl bg-[#0e0e14] border-2 border-red-800 rounded-lg p-6 shadow-[0_0_60px_rgba(229,9,20,0.4)] max-h-[90vh] overflow-y-auto crt-overlay text-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-5">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-red-500" />
            <h2 className="text-base font-bold text-gray-100 uppercase tracking-wider">
              GAME MASTER / FACILITATOR OVERRIDE HUD
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* JUDGE / EVALUATOR QUICK ACTIONS CARD */}
        <div className="p-4 rounded border-2 border-amber-600/80 bg-gradient-to-r from-amber-950/40 via-black to-red-950/40 mb-6 space-y-3 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              JUDGE & EVALUATOR SHORTCUTS (1-CLICK SPEEDRUN):
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700 font-bold">
              SPEEDRUN TOOLS
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
                className="p-3 rounded bg-amber-950/70 hover:bg-amber-900 border border-amber-500 text-amber-200 font-black transition flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-left">
                  <span className="block text-[11px]">⚡ AUTO-SOLVE ENTIRE CASE</span>
                  <span className="text-[9px] text-amber-300 font-normal">Unlocks all clues, solves 100/100 matrix</span>
                </div>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                onTriggerClimax();
              }}
              className="p-3 rounded bg-red-950/80 hover:bg-red-900 border border-red-600 text-red-200 font-black transition flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95"
            >
              <Skull className="w-4 h-4 text-red-400 shrink-0" />
              <div className="text-left">
                <span className="block text-[11px]">🔥 LAUNCH 60-SEC CLIMAX</span>
                <span className="text-[9px] text-red-300 font-normal">Plays blackout & full epilogue reveal</span>
              </div>
            </button>
          </div>
        </div>

        {/* Round Jump Matrix */}
        <div className="space-y-2 mb-6">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
            JUMP TO ROUND BENCHMARK:
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
                className={`px-3 py-2 rounded text-left transition font-semibold ${
                  currentRound === r.id
                    ? 'bg-red-800 text-white border border-red-500 shadow-[0_0_10px_rgba(229,9,20,0.5)]'
                    : 'bg-black/60 border border-gray-800 text-gray-400 hover:text-gray-100 hover:border-gray-700'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timer Adjustments */}
        <div className="p-4 rounded border border-gray-800 bg-black/50 space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              SESSION TIMER ADJUSTMENT:
            </span>
            <span className="text-sm font-bold text-amber-300">
              {Math.floor(timeRemaining / 60)}m {timeRemaining % 60}s remaining
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => onAdjustTime(-300)}
              className="px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition"
            >
              -5 Minutes
            </button>
            <button
              onClick={() => onAdjustTime(-60)}
              className="px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition"
            >
              -1 Minute
            </button>
            <button
              onClick={() => onAdjustTime(60)}
              className="px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition"
            >
              +1 Minute
            </button>
            <button
              onClick={() => onAdjustTime(300)}
              className="px-3 py-1.5 rounded bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition"
            >
              +5 Minutes
            </button>
          </div>
        </div>

        {/* Quick Room Overrides */}
        <div className="space-y-3 mb-6">
          <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block">
            ROOM OVERRIDES & SFX TRIGGERS:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => {
                onUnlockAllLocks();
                sound.playHorrorStinger();
              }}
              className="p-3 rounded border border-gray-800 bg-black/60 hover:border-emerald-700 text-left text-gray-300 hover:text-emerald-300 transition flex items-center gap-2"
            >
              <Unlock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Unlock All 5 Suspect Locks</span>
            </button>

            <button
              onClick={() => {
                onUnlockPrinterLog();
                sound.playTick(true);
              }}
              className="p-3 rounded border border-gray-800 bg-black/60 hover:border-cyan-700 text-left text-gray-300 hover:text-cyan-300 transition flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Force Unlock 11:41 PM Printer Log</span>
            </button>

            <button
              onClick={() => {
                onTriggerBlackout();
                sound.playBlackout();
              }}
              className="p-3 rounded border border-gray-800 bg-black/60 hover:border-amber-700 text-left text-gray-300 hover:text-amber-300 transition flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Trigger Blackout SFX & Lights Out</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onTriggerClimax();
              }}
              className="p-3 rounded border border-red-900 bg-red-950/40 hover:bg-red-950 text-left text-red-200 transition flex items-center gap-2"
            >
              <Skull className="w-4 h-4 text-red-500 shrink-0" />
              <span>Launch 60-Sec Horror Climax Reveal</span>
            </button>
          </div>
        </div>

        {/* Facilitator Truth Sheet */}
        <div className="p-4 rounded border border-red-950 bg-black/80 text-xs space-y-1.5 text-gray-400 mb-5">
          <p className="text-red-400 font-bold uppercase text-[10px] tracking-wider mb-2">
            FACILITATOR CHEAT SHEET:
          </p>
          <p>• <span className="text-gray-200 font-semibold">11:41 PM:</span> Pre-crime fake evidence printed to frame Meera.</p>
          <p>• <span className="text-gray-200 font-semibold">11:47 PM:</span> Meera attacks Sen; Sen survives wounded.</p>
          <p>• <span className="text-gray-200 font-semibold">12:03 AM:</span> Sen records video ("Killer isn't who you suspect").</p>
          <p>• <span className="text-gray-200 font-semibold">12:13 AM:</span> Kabir triggers power cut (blackout).</p>
          <p>• <span className="text-red-400 font-bold">12:15 AM:</span> Dev slips in via servant passage and kills Sen.</p>
          <p>• <span className="text-cyan-400 font-semibold">AI Flaw:</span> Assumed CCTV clocks were synchronized.</p>
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
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Entire Session
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded transition uppercase"
          >
            CLOSE HUD
          </button>
        </div>
      </div>
    </div>
  );
};
