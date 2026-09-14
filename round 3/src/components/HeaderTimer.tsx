import React from 'react';
import { Clock, Play, Pause, Volume2, VolumeX, ShieldAlert, Sliders } from 'lucide-react';

interface HeaderTimerProps {
  currentRound: number;
  timeRemainingSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  audioMuted: boolean;
  onToggleMute: () => void;
  onOpenHostModal: () => void;
  onSelectRound: (round: number) => void;
}

const ROUND_NAMES = [
  '0 — Arrival',
  '1 — The First Lie',
  '2 — Five Suspects',
  '3 — Impossible Timeline',
  '4 — Dead Man\'s Message',
  '5 — False Murderer',
  'Final — The House Remembers'
];

export const HeaderTimer: React.FC<HeaderTimerProps> = ({
  currentRound,
  timeRemainingSeconds,
  isTimerRunning,
  onToggleTimer,
  audioMuted,
  onToggleMute,
  onOpenHostModal,
  onSelectRound
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const isLowTime = timeRemainingSeconds < 300; // < 5 mins
  const isMedTime = timeRemainingSeconds < 600; // < 10 mins

  return (
    <header className="w-full bg-[#0a0a0f] border-b border-red-950/80 px-4 py-3 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Brand / Case Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-red-950/60 border border-red-800 flex items-center justify-center text-red-500 shadow-[0_0_10px_rgba(229,9,20,0.3)]">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold tracking-widest text-red-500">
                PROMPT WAR 2.0
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-950/40 text-red-300 border border-red-900/60">
                CASE 17-B
              </span>
            </div>
            <p className="text-[11px] text-gray-400 font-mono">
              The House That Remembers
            </p>
          </div>
        </div>

        {/* Center: Master 55-min Countdown */}
        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-2 px-4 py-1.5 rounded border font-mono tracking-wider transition ${
              isLowTime
                ? 'bg-red-950/70 border-red-500 text-red-400 animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.5)]'
                : isMedTime
                ? 'bg-amber-950/40 border-amber-600 text-amber-300'
                : 'bg-black/70 border-gray-800 text-gray-200'
            }`}
          >
            <Clock className="w-4 h-4 opacity-75" />
            <span className="text-xl font-bold font-mono tracking-widest">
              {formatTime(timeRemainingSeconds)}
            </span>
          </div>

          {/* Facilitator Play/Pause */}
          <button
            onClick={onToggleTimer}
            className="p-2 rounded border border-gray-800 bg-black/60 hover:border-gray-600 text-gray-300 hover:text-white transition"
            title={isTimerRunning ? "Pause Timer" : "Start Timer"}
          >
            {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        {/* Right: Sound, Judge Demo & Host Controls */}
        <div className="flex items-center gap-2">
          {/* Judge / Quick Demo Button */}
          <button
            onClick={onOpenHostModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-amber-500 bg-amber-950/40 hover:bg-amber-950/70 text-amber-300 text-xs font-mono font-bold transition shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95 cursor-pointer"
            title="Judge / Quick Demo Controls & Speedrun Auto-Solve"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>⚡ JUDGE / DEMO</span>
          </button>

          <button
            onClick={onToggleMute}
            className="p-2 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-gray-400 hover:text-red-400 transition cursor-pointer"
            title={audioMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenHostModal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-red-900/60 bg-red-950/30 hover:bg-red-950/60 text-red-300 text-xs font-mono transition cursor-pointer"
            title="Open Facilitator / Game Master HUD (Ctrl+Shift+H)"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">HOST HUD</span>
          </button>
        </div>
      </div>

      {/* Round Progress Tracker Bar / Tactical Conduit */}
      <div className="max-w-7xl mx-auto mt-2.5 pt-2 border-t border-gray-900/90 flex items-center justify-between overflow-x-auto gap-1 text-[11px] font-mono no-scrollbar">
        {ROUND_NAMES.map((name, idx) => {
          const isActive = currentRound === idx;
          const isCompleted = currentRound > idx;
          return (
            <button
              key={idx}
              onClick={() => onSelectRound(idx)}
              className={`px-2.5 py-1 rounded whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-red-950/80 border border-red-500 text-white font-bold shadow-[0_0_12px_rgba(239,68,68,0.4)]'
                  : isCompleted
                  ? 'bg-black/60 border border-emerald-900/70 text-emerald-400 hover:border-emerald-600'
                  : 'bg-black/30 border border-gray-900 text-gray-600 hover:text-gray-400'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-red-400 animate-ping' : isCompleted ? 'bg-emerald-500' : 'bg-gray-700'}`} />
              <span className="text-[10px] opacity-75">[{idx}]</span>
              <span>{name}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};

