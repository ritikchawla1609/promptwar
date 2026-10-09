import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { ActiveRoundId } from '../types/admin';
import {
  Radio,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  AlertTriangle,
  Clock,
  Layers,
  Users,
  CheckCircle2,
  Lock,
  Eye,
  ShieldAlert,
  Plus,
  Minus,
  Sparkles
} from 'lucide-react';
import { ConfirmDialog } from '../components/modals/ConfirmDialog';

export default function LiveControlPage() {
  const {
    eventStatus,
    activeRound,
    authoritativeClock,
    roundSummaries,
    remainingSeconds,
    totalDurationSeconds,
    timerRunning,
    teams,
    startEvent,
    pauseEvent,
    resumeEvent,
    endEvent,
    startRound,
    scheduleRound,
    pauseRound,
    resumeRound,
    endRound,
    advanceRound,
    adjustTimer,
    extendTimer,
    emergencyStop,
    isAuthenticated
  } = useAdmin();

  // Selected round for inspection (independent of active round)
  const [inspectedRound, setInspectedRound] = useState<ActiveRoundId>(activeRound);
  const [briefingSecOption, setBriefingSecOption] = useState<number>(60);
  const [roundDurationMinOption, setRoundDurationMinOption] = useState<number>(10);

  // Modals state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    action: () => Promise<void>;
    variant?: 'primary' | 'danger' | 'warning';
  }>({
    isOpen: false,
    title: '',
    description: '',
    action: async () => {},
    variant: 'primary'
  });

  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const inspectedSummary = roundSummaries[inspectedRound] || roundSummaries.ROUND_1;
  const isInspectedActive = inspectedRound === activeRound;

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
          <Radio className="w-3.5 h-3.5 animate-pulse" />
          <span>REAL-TIME COMPETITION OPERATIONS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Live Arena Control Console
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
          Direct event progression, manage phase timers, and control live rounds with confirmation safety gates.
        </p>
      </div>

      {/* 1. MASTER AUTHORITATIVE GLOBAL ROUND CLOCK */}
      <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                GLOBAL SYNCHRONIZED CLOCK
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                AUTHORITATIVE COMMON DEADLINE
              </span>
            </div>

            <div className="flex items-center space-x-3 pt-1">
              <span className={`w-3.5 h-3.5 rounded-full ${
                authoritativeClock.status === 'LIVE'
                  ? 'bg-emerald-400 animate-pulse'
                  : authoritativeClock.status === 'BRIEFING'
                  ? 'bg-amber-400 animate-ping'
                  : authoritativeClock.status === 'PAUSED'
                  ? 'bg-rose-400'
                  : 'bg-slate-500'
              }`} />
              <span className="text-2xl font-bold font-mono text-white tracking-tight">
                ROUND {authoritativeClock.status}
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-950/80 text-blue-300 border border-blue-800/60 font-semibold">
                ACTIVE: {activeRound}
              </span>
            </div>

            {authoritativeClock.status === 'BRIEFING' && (
              <div className="text-xs font-mono text-amber-300 font-bold flex items-center space-x-2 pt-1 animate-pulse">
                <Clock className="w-3.5 h-3.5" />
                <span>BRIEFING IN PROGRESS: Competition begins in {authoritativeClock.secondsUntilStart}s</span>
              </div>
            )}
          </div>

          {/* Prominent Synchronized Countdown Timer */}
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                {authoritativeClock.status === 'BRIEFING' ? 'BRIEFING TICK' : 'COMMON DEADLINE REMAINING'}
              </span>
              <div className="text-4xl sm:text-5xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-300 tracking-wider">
                {formatTime(remainingSeconds)}
              </div>
            </div>

            {/* Master State Toggle Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              {authoritativeClock.status === 'LIVE' ? (
                <button
                  onClick={() => pauseRound(activeRound)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold flex items-center justify-center space-x-2 transition-all active:scale-95"
                >
                  <Pause className="w-3.5 h-3.5" />
                  <span>PAUSE CLOCK</span>
                </button>
              ) : authoritativeClock.status === 'PAUSED' ? (
                <button
                  onClick={() => resumeRound(activeRound)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold flex items-center justify-center space-x-2 transition-all active:scale-95 shadow-md shadow-emerald-500/10"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>RESUME CLOCK</span>
                </button>
              ) : null}

              <button
                onClick={() => {
                  setConfirmModal({
                    isOpen: true,
                    title: 'Force Conclude Active Round?',
                    description: 'This will instantly set the official clock to COMPLETED, close the submission window, and lock participant inputs across all connected devices.',
                    action: async () => { await endRound(activeRound); },
                    variant: 'danger'
                  });
                }}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-semibold transition-all active:scale-95"
              >
                CONCLUDE ROUND
              </button>
            </div>
          </div>
        </div>

        {/* Global Schedule Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-slate-400 text-[10px] block">SCHEDULED START</span>
            <span className="text-slate-200 font-bold text-sm block mt-0.5">
              {authoritativeClock.scheduledStartAt ? new Date(authoritativeClock.scheduledStartAt).toLocaleTimeString() : 'Not Set'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-slate-400 text-[10px] block">OFFICIAL DEADLINE</span>
            <span className="text-slate-200 font-bold text-sm block mt-0.5 text-blue-400">
              {authoritativeClock.scheduledEndAt ? new Date(authoritativeClock.scheduledEndAt).toLocaleTimeString() : 'Not Set'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-slate-400 text-[10px] block">PAUSED DURATION</span>
            <span className="text-slate-200 font-bold text-sm block mt-0.5 text-amber-400">
              {authoritativeClock.accumulatedPausedSeconds || 0}s accumulated
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <span className="text-slate-400 text-[10px] block">SESSION ID</span>
            <span className="text-slate-200 font-mono text-[11px] block mt-1 truncate" title={authoritativeClock.sessionId}>
              {authoritativeClock.sessionId || 'None'}
            </span>
          </div>
        </div>

        {/* Global Timer Tuning Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400">EXTEND COMMON DEADLINE:</span>
            <button
              onClick={() => adjustTimer(60)}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-1 transition-colors"
            >
              <Plus className="w-3 h-3" />
              <span>+1 Min</span>
            </button>
            <button
              onClick={() => adjustTimer(120)}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-1 transition-colors"
            >
              <Plus className="w-3 h-3" />
              <span>+2 Min</span>
            </button>
            <button
              onClick={() => adjustTimer(300)}
              className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center space-x-1 transition-colors"
            >
              <Plus className="w-3 h-3" />
              <span>+5 Min</span>
            </button>
            <span className="text-[10px] text-slate-400 ml-2">
              (Extends deadline simultaneously for all participants without timer drift)
            </span>
          </div>

          <div className="text-slate-400">
            Registered: <strong className="text-white">{teams.length} Teams</strong>
          </div>
        </div>
      </div>

      {/* 2. ROUND SELECTOR (INSPECT VS ACTIVE) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center space-x-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>Select Round to Inspect & Control</span>
          </h2>
          <span className="text-[11px] font-mono text-slate-400">
            Switching tab will NOT modify running state
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: 'ROUND_1' as ActiveRoundId, name: 'Round 1: Prompt Parasite', subtitle: 'See. Steal. Evolve.' },
            { id: 'ROUND_2' as ActiveRoundId, name: 'Round 2: Operation Blackbox', subtitle: 'Facility breach investigation' },
            { id: 'ROUND_3' as ActiveRoundId, name: 'Round 3: Frame Zero', subtitle: 'Cinematic anime directing' },
          ].map((r) => {
            const isSelected = inspectedRound === r.id;
            const isLiveNow = activeRound === r.id;

            return (
              <button
                key={r.id}
                onClick={() => setInspectedRound(r.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-600/10 border-blue-500 shadow-lg shadow-blue-500/5'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-400">{r.id}</span>
                  {isLiveNow && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE</span>
                    </span>
                  )}
                </div>
                <div className="font-bold text-slate-100 text-sm">{r.name}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{r.subtitle}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. INSPECTED ROUND CONTROL DECK */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                INSPECTED ROUND
              </span>
              {isInspectedActive ? (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  CURRENTLY RUNNING IN ARENA
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                  STANDBY / NOT LIVE
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {inspectedSummary.name}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">{inspectedSummary.subtitle}</p>
          </div>

          {/* Round Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {isInspectedActive ? (
              <>
                {timerRunning ? (
                  <button
                    onClick={() => pauseRound(inspectedRound)}
                    className="px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono text-xs font-semibold flex items-center space-x-2 transition-colors active:scale-95"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSE ROUND</span>
                  </button>
                ) : (
                  <button
                    onClick={() => resumeRound(inspectedRound)}
                    className="px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold flex items-center space-x-2 transition-colors active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>RESUME ROUND</span>
                  </button>
                )}

                <button
                  onClick={() => advanceRound()}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold flex items-center space-x-2 shadow-md shadow-blue-600/20 transition-all active:scale-95"
                >
                  <span>ADVANCE NEXT</span>
                  <FastForward className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => {
                    setConfirmModal({
                      isOpen: true,
                      title: `End ${inspectedSummary.name}?`,
                      description: 'This will lock all pending submissions for this round and calculate final scores.',
                      action: async () => { await endRound(inspectedRound); },
                      variant: 'warning'
                    });
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-mono text-xs transition-colors"
                >
                  END ROUND
                </button>
              </>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono">
                  <span className="text-slate-400 px-2">BRIEFING:</span>
                  {[
                    { label: 'None (0s)', val: 0 },
                    { label: '30s', val: 30 },
                    { label: '60s', val: 60 },
                    { label: '120s', val: 120 },
                  ].map(b => (
                    <button
                      key={b.val}
                      onClick={() => setBriefingSecOption(b.val)}
                      className={`px-2 py-1 rounded-lg transition-colors ${
                        briefingSecOption === b.val
                          ? 'bg-blue-600 text-white font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono">
                  <span className="text-slate-400 px-2">DURATION:</span>
                  {[10, 12, 15, 20].map(d => (
                    <button
                      key={d}
                      onClick={() => setRoundDurationMinOption(d)}
                      className={`px-2 py-1 rounded-lg transition-colors ${
                        roundDurationMinOption === d
                          ? 'bg-blue-600 text-white font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {d}m
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setConfirmModal({
                      isOpen: true,
                      title: `Schedule & Launch ${inspectedSummary.name}?`,
                      description: `This will schedule an official authoritative round session for ${inspectedSummary.name} with ${briefingSecOption > 0 ? `${briefingSecOption}s briefing phase followed by` : ''} ${roundDurationMinOption}m competition deadline. All participants start and end at the exact same scheduled timestamp.`,
                      action: async () => { await scheduleRound(inspectedRound, roundDurationMinOption, briefingSecOption); },
                      variant: 'primary'
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center space-x-2"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>SCHEDULE & LAUNCH ROUND</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Round Parameters Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[10px]">TIME BUDGET</span>
            <div className="text-base font-bold text-slate-200 mt-0.5">
              {inspectedSummary.configuredDurationMinutes} Minutes
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[10px]">CURRENT PHASE</span>
            <div className="text-base font-bold text-blue-400 mt-0.5">
              {inspectedSummary.currentPhase}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[10px]">TEAMS STARTED</span>
            <div className="text-base font-bold text-emerald-400 mt-0.5">
              {inspectedSummary.teamsStarted} Teams
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
            <span className="text-slate-400 text-[10px]">SUBMISSIONS RECORDED</span>
            <div className="text-base font-bold text-purple-400 mt-0.5">
              {inspectedSummary.teamsCompleted} Locked
            </div>
          </div>
        </div>

        {/* Phase Sequence Progress Bar */}
        <div className="space-y-2">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
            Round Phase Sequence
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {inspectedSummary.phases.map((ph, idx) => {
              const isCurrent = inspectedSummary.currentPhase === ph;
              return (
                <div
                  key={ph}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-medium ${
                    isCurrent
                      ? 'bg-blue-600/20 border-blue-500/50 text-blue-300 font-bold'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-[10px] opacity-60 mr-1.5">{idx + 1}.</span>
                  <span>{ph}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. EMERGENCY & SENSITIVE OPERATIONS */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-rose-400 font-bold">
          <ShieldAlert className="w-4 h-4" />
          <span>Emergency & Authorized Operator Tools</span>
        </div>

        <p className="text-xs text-slate-400">
          Sensitive operations are logged directly to the audit trail and require organizer confirmation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-left transition-colors space-y-1"
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-300 font-semibold">
              <span>{showAnswerKey ? 'Hide Brief Rubric' : 'Inspect Evaluation Rubric'}</span>
              <Eye className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-[11px] text-slate-400">
              Reveals the scoring rubric & evaluation parameters for judges.
            </p>
          </button>

          <button
            onClick={() => {
              setConfirmModal({
                isOpen: true,
                title: `Force Restart ${inspectedSummary.name}?`,
                description: 'This will reset the phase countdown timer back to the beginning for all participants.',
                action: async () => { await startRound(inspectedRound); },
                variant: 'danger'
              });
            }}
            className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-left transition-colors space-y-1"
          >
            <div className="flex items-center justify-between text-xs font-mono text-rose-400 font-semibold">
              <span>Restart Round Countdown</span>
              <RotateCcw className="w-4 h-4" />
            </div>
            <p className="text-[11px] text-slate-400">
              Resets remaining seconds back to full duration with confirmation.
            </p>
          </button>

          <button
            onClick={() => emergencyStop()}
            className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 text-left transition-colors space-y-1"
          >
            <div className="flex items-center justify-between text-xs font-mono text-rose-300 font-semibold">
              <span>Halt Arena Screens</span>
              <AlertTriangle className="w-4 h-4 text-rose-400" />
            </div>
            <p className="text-[11px] text-rose-200/70">
              Immediately freezes all participant client windows globally.
            </p>
          </button>
        </div>

        {/* Answer Key / Evaluation Specs Display */}
        {showAnswerKey && (
          <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/30 text-xs space-y-2 text-slate-300 animate-fadeIn">
            <div className="font-mono text-blue-400 uppercase font-semibold">
              Authorized Rubric Specs: {inspectedSummary.name}
            </div>
            <p className="leading-relaxed">
              <strong>Evaluation Engine:</strong> 100-pt deterministic evaluation model across 5 core criteria: Scene Elements (35 pts), Emotional Resonance (20 pts), Framing & Composition (20 pts), Lighting & Contrast (15 pts), and Contradiction Consistency (10 pts).
            </p>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmDialog
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        description={confirmModal.description}
        confirmVariant={confirmModal.variant}
        onConfirm={async () => {
          await confirmModal.action();
          setConfirmModal(prev => ({ ...prev, isOpen: false }));
        }}
        onCancel={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
