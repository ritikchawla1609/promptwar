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
  Settings
} from 'lucide-react';

interface HeaderTimerProps {
  currentPhase: number;
  timeRemainingSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  audioMuted: boolean;
  onToggleMute: () => void;
  onOpenHostModal: () => void;
  onOpenSettingsModal: () => void;
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
  onOpenSettingsModal,
  onSelectPhase,
  maxUnlockedPhase = 6
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const progressPercent = Math.min(100, Math.round(((currentPhase + 0.5) / PHASES.length) * 100));
  const isLowTime = timeRemainingSeconds < 300;
  const isMedTime = timeRemainingSeconds < 600;

  return (
    <header className="w-full bg-[#08080d] border-b border-gray-900 sticky top-0 z-40 select-none shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Case ID & Agency Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-red-950/20 border border-red-900/50 flex items-center justify-center text-red-500">
            <ShieldAlert className="w-4 h-4 opacity-80" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-1.5 py-0.5 rounded bg-red-950/30 text-red-400 border border-red-900/40 font-mono font-medium">
                CASE #17-B
              </span>
            </div>
            <p className="text-[10px] text-gray-500 mt-0.5">
              The House That Remembers • Blackwood Manor
            </p>
          </div>
        </div>

        {/* Center: Investigation Progress Meter & Timer */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Progress Bar */}
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-[10px] uppercase tracking-wider font-medium">
              PROGRESS
            </span>
            <div className="w-24 sm:w-32 h-1.5 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
              <div 
                className="h-full bg-gray-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Master Countdown Display */}
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded border transition ${
                isLowTime
                  ? 'bg-red-950/30 border-red-900/50 text-red-400'
                  : isMedTime
                  ? 'bg-amber-950/20 border-amber-900/40 text-amber-400'
                  : 'bg-black/40 border-gray-800 text-gray-300'
              }`}
            >
              <Clock className="w-3.5 h-3.5 opacity-70" />
              <span className="text-sm font-mono tracking-wider">
                {formatTime(timeRemainingSeconds)}
              </span>
            </div>

            <button
              onClick={onToggleTimer}
              className="p-1.5 rounded border border-gray-800 bg-black/40 hover:border-gray-600 text-gray-400 hover:text-gray-200 transition cursor-pointer"
              title={isTimerRunning ? "Pause Timer" : "Start Timer"}
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Right: GM Console, Settings, Mute */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHostModal}
            className="p-1.5 rounded border border-transparent hover:border-gray-800 bg-transparent hover:bg-black/40 text-gray-600 hover:text-gray-300 transition cursor-pointer group flex items-center gap-2"
            title="GM Console"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">GM Console</span>
          </button>

          <div className="w-px h-4 bg-gray-800 mx-1" />

          <button
            onClick={onOpenSettingsModal}
            className="p-1.5 rounded border border-gray-800 bg-black/40 hover:border-gray-600 text-gray-400 hover:text-gray-200 transition cursor-pointer"
            title="Settings"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={onToggleMute}
            className="p-1.5 rounded border border-gray-800 bg-black/40 hover:border-gray-600 text-gray-400 hover:text-gray-200 transition cursor-pointer"
            title={audioMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {audioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Permanent Phase Navigation Ribbon */}
      <div className="bg-[#0b0c12] border-t border-gray-900 px-4 py-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-4 text-[11px] no-scrollbar">
          {PHASES.map((phase) => {
            const isActive = currentPhase === phase.id;
            const isCompleted = currentPhase > phase.id;
            const isLocked = phase.id > maxUnlockedPhase && !isCompleted && !isActive;

            return (
              <button
                key={phase.id}
                onClick={() => onSelectPhase(phase.id)}
                className={`py-2.5 relative whitespace-nowrap transition flex items-center gap-2 cursor-pointer text-xs ${
                  isActive
                    ? 'text-gray-100 font-medium'
                    : isCompleted
                    ? 'text-gray-400 hover:text-gray-200'
                    : isLocked
                    ? 'text-gray-600 opacity-50'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
                title={phase.desc}
              >
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-300 rounded-t-full" />
                )}

                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                ) : isLocked ? (
                  <Lock className="w-3 h-3 text-gray-600 shrink-0" />
                ) : (
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-gray-300' : 'bg-gray-700'}`} />
                )}

                <span className="uppercase tracking-wider">{phase.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
