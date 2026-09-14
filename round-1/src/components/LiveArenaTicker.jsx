import React, { useState, useEffect } from 'react';
import { useLiveArena } from '../utils/liveArenaEngine';
import { Radio, Users, Clock, Zap, ChevronRight, Activity, ShieldAlert, Trophy } from 'lucide-react';

export default function LiveArenaTicker({ onOpenRadar }) {
  const { events, stats, formattedTimer } = useLiveArena();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Rotate through latest events
  useEffect(() => {
    if (!events || events.length === 0) return;
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % Math.min(events.length, 12));
    }, 4500);

    return () => clearInterval(interval);
  }, [events]);

  const activeEvent = events && events[currentEventIndex] ? events[currentEventIndex] : events[0];

  return (
    <div className="relative z-35 w-full bg-black/85 backdrop-blur-xl border-b border-amber-500/25 px-3 sm:px-6 py-1.5 flex items-center justify-between gap-3 text-xs font-mono select-none shadow-[0_4px_25px_rgba(0,0,0,0.8)] overflow-hidden">
      {/* Subtle Background Laser Beam */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-amber-500/10 to-cyan-500/5 pointer-events-none" />

      {/* LEFT: LIVE BEACON & ACTIVE AUDIENCE */}
      <div className="flex items-center gap-3 shrink-0 z-10">
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 font-black shadow-[0_0_12px_rgba(239,68,68,0.4)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span className="tracking-[0.2em] text-[10px] uppercase">LIVE</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-zinc-300">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-white font-black">{stats.activeParticipants}</span>
            <span className="text-[10px] text-zinc-500">PLAYERS</span>
          </span>
          <span className="text-zinc-700">•</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-amber-300 font-bold">{stats.totalSubmissions}</span>
            <span className="text-[10px] text-zinc-500">SUBMITTED</span>
          </span>
        </div>
      </div>

      {/* CENTER: ANIMATED REAL-TIME BROADCAST EVENT STREAM */}
      <div className="flex-1 max-w-2xl mx-2 overflow-hidden relative z-10">
        {activeEvent && (
          <div
            key={activeEvent.id + currentEventIndex}
            className="flex items-center gap-2 truncate animate-fadeIn py-0.5"
          >
            <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-white/[0.08] text-zinc-400 shrink-0">
              {activeEvent.time}
            </span>
            <span className="text-sm shrink-0">{activeEvent.icon || '⚡'}</span>
            <span
              className={`truncate text-xs font-medium tracking-wide ${
                activeEvent.isPlayer
                  ? 'text-metallic-gold font-black'
                  : activeEvent.type === 'trap'
                  ? 'text-red-400 font-bold'
                  : activeEvent.type === 'submission'
                  ? 'text-cyan-300 font-bold'
                  : 'text-zinc-200'
              }`}
            >
              {activeEvent.text}
            </span>
          </div>
        )}
      </div>

      {/* RIGHT: ROUND 1 CLOCK & RADAR DRAWER TRIGGER */}
      <div className="flex items-center gap-2.5 shrink-0 z-10">
        {/* Round 1 Countdown Clock */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-black/60 border border-white/[0.1] text-amber-300 font-bold text-xs shadow-inner">
          <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-[10px] text-zinc-400 font-normal uppercase hidden sm:inline">R1:</span>
          <span className="font-mono tracking-wider">{formattedTimer}</span>
        </div>

        {/* Live Radar Button */}
        <button
          onClick={onOpenRadar}
          className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-cyan-500/20 hover:from-amber-500/30 hover:to-pink-500/30 border border-amber-500/40 text-white font-mono text-[11px] font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
        >
          <Activity className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">ARENA RADAR</span>
          <ChevronRight className="w-3 h-3 text-zinc-400" />
        </button>
      </div>
    </div>
  );
}
