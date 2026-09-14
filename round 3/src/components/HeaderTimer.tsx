import React from 'react';
import { 
  Clock, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ShieldAlert, 
  Sliders, 
  CheckCircle2, 
  Lock, 
  Compass, 
  Layers,
  Sparkles,
  Zap
} from 'lucide-react';

interface HeaderTimerProps {
  currentPhase: number;
  timeRemainingSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  audioMuted: boolean;
  onToggleMute: () => void;
  onOpenHostModal: () => void;
  onSelectPhase: (phase: number) => void;
  maxUnlockedPhase?: number;
}

export const PHASES = [
  { id: 0, code: '00', shortTitle: 'BRIEFING', title: 'Phase 0: Case Briefing', desc: 'Victim Dossier & Location Telemetry' },
  { id: 1, code: '01', shortTitle: 'CRIME SCENE', title: 'Phase 1: Crime Scene', desc: '3D Manor Walkthrough & Physical Clues' },
  { id: 2, code: '02', shortTitle: 'SUSPECTS', title: 'Phase 2: Suspects', desc: '5 Profiles, Motives & Broken Alibis' },
  { id: 3, code: '03', shortTitle: 'TIMELINE', title: 'Phase 3: The Impossible Timeline', desc: '12:03 CCTV vs 12:05 Audio & AI Trap' },
  { id: 4, code: '04', shortTitle: 'FORENSICS', title: 'Phase 4: Forensics', desc: 'Dead Man Video & Chronology Triad' },
  { id: 5, code: '05', shortTitle: 'CASE BOARD', title: 'Phase 5: Case Board', desc: 'Interactive Evidence & Red Threads' },
  { id: 6, code: '06', shortTitle: 'ACCUSATION', title: 'Phase 6: Final Indictment', desc: 'Master Reconstruction & 60s Climax' }
];

export const HeaderTimer: React.FC<HeaderTimerProps> = ({
  currentPhase,
  timeRemainingSeconds,
  isTimerRunning,
  onToggleTimer,
  audioMuted,
  onToggleMute,
  onOpenHostModal,
  onSelectPhase,
  maxUnlockedPhase = 6
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Overall Investigation Progress Percentage
  const progressPercent = Math.min(100, Math.round(((currentPhase + 0.5) / PHASES.length) * 100));

  const isLowTime = timeRemainingSeconds < 300; // < 5 mins
  const isMedTime = timeRemainingSeconds < 600; // < 10 mins

  return (
    <header className="w-full bg-[#08080d] border-b border-red-950/80 sticky top-0 z-40 select-none shadow-2xl font-mono">
      {/* Top Telemetry & Global Status Strip */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Case ID & Agency Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-red-950/60 border border-red-800 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-red-500">
                PROMPT WAR 2.0
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-950/40 text-red-300 border border-red-900/60 font-bold">
                CASE #17-B
              </span>
            </div>
            <p className="text-[11px] text-gray-400">
              The House That Remembers • Blackwood Manor
            </p>
          </div>
        </div>

        {/* Center: Investigation Progress Meter & 55-Min Countdown */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Progress Bar Conduit */}
          <div className="flex items-center gap-2 px-3 py-1 bg-black/60 rounded border border-gray-800 text-xs">
            <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">
              INVESTIGATION:
            </span>
            <div className="w-24 sm:w-32 h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
              <div 
                className="h-full bg-gradient-to-r from-red-700 via-amber-600 to-emerald-500 transition-all duration-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-emerald-400 font-bold text-[11px]">
              {progressPercent}%
            </span>
          </div>

          {/* Master 55-min Countdown Display */}
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-2 px-3.5 py-1 rounded border tracking-wider transition ${
                isLowTime
                  ? 'bg-red-950/70 border-red-500 text-red-400 animate-pulse shadow-[0_0_15px_rgba(255,0,0,0.5)]'
                  : isMedTime
                  ? 'bg-amber-950/40 border-amber-600 text-amber-300'
                  : 'bg-black/70 border-gray-800 text-gray-200'
              }`}
            >
              <Clock className="w-3.5 h-3.5 opacity-75" />
              <span className="text-base sm:text-lg font-bold tracking-widest">
                {formatTime(timeRemainingSeconds)}
              </span>
            </div>

            {/* Play/Pause Timer button */}
            <button
              onClick={onToggleTimer}
              className="p-1.5 rounded border border-gray-800 bg-black/60 hover:border-gray-600 text-gray-300 hover:text-white transition cursor-pointer"
              title={isTimerRunning ? "Pause Master Timer" : "Start Master Timer"}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Right: Facilitator Tools, Audio Mute & Speedrun Judge Button */}
        <div className="flex items-center gap-2">
          {/* Judge / Quick Demo Button */}
          <button
            onClick={onOpenHostModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-amber-500 bg-amber-950/40 hover:bg-amber-950/70 text-amber-300 text-xs font-bold transition shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95 cursor-pointer"
            title="Judge / Quick Demo Speedrun & Auto-Solve"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>JUDGE / DEMO</span>
          </button>

          <button
            onClick={onToggleMute}
            className="p-1.5 rounded border border-gray-800 bg-black/60 hover:border-red-600 text-gray-400 hover:text-red-400 transition cursor-pointer"
            title={audioMuted ? "Unmute Procedural Audio" : "Mute Audio"}
          >
            {audioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={onOpenHostModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded border border-red-900/60 bg-red-950/30 hover:bg-red-950/60 text-red-300 text-xs transition cursor-pointer"
            title="Open Facilitator / Game Master HUD (Ctrl+Shift+H)"
          >
            <Sliders className="w-3 h-3" />
            <span className="hidden sm:inline">HOST HUD</span>
          </button>
        </div>
      </div>

      {/* Permanent Phase Navigation Ribbon */}
      <div className="bg-[#0b0c12] border-t border-gray-900/90 px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-1 text-[11px] no-scrollbar">
          {PHASES.map((phase) => {
            const isActive = currentPhase === phase.id;
            const isCompleted = currentPhase > phase.id;
            const isLocked = phase.id > maxUnlockedPhase && !isCompleted && !isActive;

            return (
              <button
                key={phase.id}
                onClick={() => onSelectPhase(phase.id)}
                className={`px-3 py-1.5 rounded whitespace-nowrap transition flex items-center gap-1.5 cursor-pointer text-xs ${
                  isActive
                    ? 'bg-red-950/90 border border-red-500 text-white font-bold shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                    : isCompleted
                    ? 'bg-black/60 border border-emerald-900/70 text-emerald-400 hover:border-emerald-600'
                    : isLocked
                    ? 'bg-black/30 border border-gray-900 text-gray-600 hover:text-gray-400 opacity-60'
                    : 'bg-black/40 border border-gray-800 text-gray-400 hover:text-gray-200'
                }`}
                title={phase.desc}
              >
                {/* Status Indicator Dot / Icon */}
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                ) : isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : isLocked ? (
                  <Lock className="w-3 h-3 text-gray-600 shrink-0" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                )}

                <span className="text-[10px] opacity-75 font-mono">[{phase.code}]</span>
                <span className="font-bold uppercase tracking-wider">{phase.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
