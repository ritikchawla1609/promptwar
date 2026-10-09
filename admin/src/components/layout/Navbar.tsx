import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import {
  Shield,
  Activity,
  Play,
  Pause,
  RefreshCw,
  Clock,
  Lock,
  Unlock,
  AlertOctagon,
  Wifi,
  Database
} from 'lucide-react';
import { AuthModal } from '../modals/AuthModal';
import { ConfirmDialog } from '../modals/ConfirmDialog';

export const Navbar: React.FC = () => {
  const {
    eventStatus,
    activeRound,
    roundSummaries,
    remainingSeconds,
    timerRunning,
    connectionMode,
    lastSyncTime,
    isSyncing,
    refreshData,
    pauseEvent,
    resumeEvent,
    emergencyStop,
    isAuthenticated,
    logout
  } = useAdmin();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isEmergencyConfirmOpen, setIsEmergencyConfirmOpen] = useState(false);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getRoundLabel = () => {
    switch (activeRound) {
      case 'ROUND_1':
        return 'R1 · Prompt Parasite';
      case 'ROUND_2':
        return 'R2 · Operation Blackbox';
      case 'ROUND_3':
        return 'R3 · Frame Zero';
      default:
        return 'Standby';
    }
  };

  const getStatusBadge = () => {
    switch (eventStatus) {
      case 'LIVE':
        return (
          <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE</span>
          </span>
        );
      case 'PAUSED':
        return (
          <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>PAUSED</span>
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <span>COMPLETED</span>
          </span>
        );
      default:
        return (
          <span className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-800 text-slate-400 border border-slate-700">
            <span>READY</span>
          </span>
        );
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#0e131f]/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Branding & Round indicator */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm tracking-wider text-white">PROMPT WAR</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  COMMAND CENTER
                </span>
              </div>
            </div>
          </div>

          <div className="h-5 w-px bg-slate-800 hidden sm:block" />

          {/* Current Active Round Badge */}
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs">
            <span className="text-slate-400 font-mono text-[11px]">ACTIVE:</span>
            <span className="font-semibold text-slate-200">{getRoundLabel()}</span>
          </div>

          {getStatusBadge()}
        </div>

        {/* Center: Live Countdown Clock */}
        <div className="flex items-center space-x-3 bg-slate-900/90 px-4 py-1.5 rounded-xl border border-slate-800 shadow-inner">
          <Clock className={`w-4 h-4 ${timerRunning ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
          <div className="text-center font-mono">
            <span className="text-lg font-bold text-slate-100 tracking-wider">
              {formatTime(remainingSeconds)}
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono text-slate-500 hidden md:inline">
            {timerRunning ? 'CLOCK RUNNING' : 'CLOCK HELD'}
          </span>
        </div>

        {/* Right: Sync Status, Auth & Quick Actions */}
        <div className="flex items-center space-x-3">
          {/* Connection Status & Refresh */}
          <button
            onClick={() => refreshData()}
            disabled={isSyncing}
            className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            title={`Sync state (Last synced: ${lastSyncTime})`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-400' : ''}`} />
            <span className="hidden lg:inline text-[11px] font-mono">
              {connectionMode === 'LIVE_MONGODB' ? 'Atlas Connected' : 'Local Mode'}
            </span>
          </button>

          {/* Quick Pause / Resume */}
          {eventStatus === 'LIVE' ? (
            <button
              onClick={() => pauseEvent()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-medium transition-colors"
            >
              <Pause className="w-3.5 h-3.5" />
              <span>PAUSE</span>
            </button>
          ) : (
            <button
              onClick={() => resumeEvent()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-medium transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </button>
          )}

          {/* Emergency Stop */}
          <button
            onClick={() => setIsEmergencyConfirmOpen(true)}
            className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-colors"
            title="Emergency Halt Arena"
          >
            <AlertOctagon className="w-4 h-4" />
          </button>

          {/* Organizer Passcode status */}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-xs text-emerald-400 hover:bg-slate-800 transition-colors"
              title="Authenticated as Organizer. Click to sign out."
            >
              <Unlock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[11px] hidden sm:inline">HOST UNLOCKED</span>
            </button>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white transition-colors"
              title="Authenticate Organizer"
            >
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono text-[11px] hidden sm:inline">PASSCODE</span>
            </button>
          )}
        </div>
      </header>

      {/* Modals */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      <ConfirmDialog
        isOpen={isEmergencyConfirmOpen}
        title="Trigger Emergency Arena Halt?"
        description="This will immediately pause all participant timers, hold their screens in standby mode, and prevent new prompt submissions until resumed."
        confirmLabel="Initiate Emergency Stop"
        confirmVariant="danger"
        onConfirm={async () => {
          await emergencyStop();
          setIsEmergencyConfirmOpen(false);
        }}
        onCancel={() => setIsEmergencyConfirmOpen(false)}
      />
    </>
  );
};
