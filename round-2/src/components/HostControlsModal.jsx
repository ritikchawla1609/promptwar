import React, { useState } from 'react';
import { X, Lock, Play, Pause, Plus, Minus, KeyRound, RotateCcw, Download, Eye, CheckCircle2, AlertTriangle } from 'lucide-react';
import { formatTimeMMSS } from '../utils/timer';

export default function HostControlsModal({
  isOpen,
  onClose,
  timerState,
  onAdjustTimer,
  onTogglePause,
  onUnlockSubmission,
  onRevealSolution,
  onResetSession,
  onExportCSV,
  scoreData,
  isSolutionRevealed = false
}) {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === 'TATVA@2026' || passcode === 'admin' || passcode === 'host') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid host passcode.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-archive-950/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-xl bg-archive-900 border border-archive-700 rounded-xl flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-label="Host Facilitation Console"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-archive-700 bg-archive-900">
          <div className="flex items-center space-x-2.5">
            <Lock className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-ivory-100">
              Host Facilitation Console
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-ivory-400 hover:text-ivory-100 hover:bg-archive-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="p-8 space-y-5">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-ivory-400 font-medium block">
                Facilitator Master Passcode
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-ivory-500 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode..."
                  className="w-full bg-archive-950 border border-archive-700 text-ivory-100 pl-10 pr-4 py-3 rounded-lg text-sm focus:outline-none focus:border-amber-500 transition-colors font-mono"
                  autoFocus
                />
              </div>
              {error && <p className="text-xs text-amber-400 font-medium">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-archive-950 font-semibold py-3 rounded-lg text-sm transition-colors"
            >
              Unlock Controls
            </button>
          </form>
        ) : (
          <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
            {/* Timer Management */}
            <div className="space-y-3 bg-archive-850 p-4 rounded-lg border border-archive-700/80">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-ivory-400 font-medium">
                  Mission Timer Control
                </span>
                <span className="font-mono text-sm font-semibold text-amber-500">
                  {formatTimeMMSS(timerState?.remainingSeconds || 0)}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
                <button
                  onClick={onTogglePause}
                  className="p-2.5 rounded bg-archive-800 hover:bg-archive-700 border border-archive-700 text-ivory-200 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  {timerState?.isPaused ? <Play className="w-3.5 h-3.5 text-amber-500" /> : <Pause className="w-3.5 h-3.5 text-amber-500" />}
                  <span>{timerState?.isPaused ? 'Resume' : 'Pause'}</span>
                </button>

                <button
                  onClick={() => onAdjustTimer(120)}
                  className="p-2.5 rounded bg-archive-800 hover:bg-archive-700 border border-archive-700 text-ivory-200 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+2 Min</span>
                </button>

                <button
                  onClick={() => onAdjustTimer(-120)}
                  className="p-2.5 rounded bg-archive-800 hover:bg-archive-700 border border-archive-700 text-ivory-200 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                  <span>-2 Min</span>
                </button>

                <button
                  onClick={() => onAdjustTimer(300)}
                  className="p-2.5 rounded bg-archive-800 hover:bg-archive-700 border border-archive-700 text-ivory-200 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+5 Min</span>
                </button>
              </div>
            </div>

            {/* Game Progression Actions */}
            <div className="space-y-3 bg-archive-850 p-4 rounded-lg border border-archive-700/80">
              <span className="text-xs uppercase tracking-wider text-ivory-400 font-medium block">
                Session Progression
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <button
                  onClick={onUnlockSubmission}
                  className="p-3 rounded bg-archive-800 hover:bg-archive-700 border border-archive-700 text-ivory-200 flex items-center justify-center space-x-2 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Unlock Final Submission</span>
                </button>

                <button
                  onClick={onRevealSolution}
                  className="p-3 rounded bg-archive-800 hover:bg-archive-700 border border-archive-700 text-ivory-200 flex items-center justify-center space-x-2 transition-colors"
                >
                  <Eye className="w-4 h-4 text-amber-500" />
                  <span>{isSolutionRevealed ? 'Hide Solution' : 'Reveal Solution Key'}</span>
                </button>
              </div>
            </div>

            {/* Export & Data */}
            <div className="space-y-3 bg-archive-850 p-4 rounded-lg border border-archive-700/80">
              <span className="text-xs uppercase tracking-wider text-ivory-400 font-medium block">
                Audit & Export
              </span>

              <button
                onClick={onExportCSV}
                className="w-full p-3 rounded bg-amber-500 hover:bg-amber-600 text-archive-950 font-semibold flex items-center justify-center space-x-2 text-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export Official Session CSV</span>
              </button>
            </div>

            {/* Destructive Reset */}
            <div className="pt-2 border-t border-archive-700/60">
              {!showResetConfirm ? (
                <button
                  onClick={() => setShowResetConfirm(true)}
                  className="w-full p-2.5 rounded bg-archive-800/80 hover:bg-red-950/40 border border-archive-700 text-xs text-red-400 flex items-center justify-center space-x-2 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Investigation Session</span>
                </button>
              ) : (
                <div className="p-4 rounded-lg bg-red-950/30 border border-red-800/50 space-y-3 text-xs">
                  <div className="flex items-center space-x-2 text-red-300">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>Are you sure? This will clear all prompts, evidence, and timer state.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        onResetSession();
                        setShowResetConfirm(false);
                        onClose();
                      }}
                      className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
                    >
                      Confirm Reset
                    </button>
                    <button
                      onClick={() => setShowResetConfirm(false)}
                      className="px-4 py-2 rounded bg-archive-800 text-ivory-300 hover:bg-archive-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
