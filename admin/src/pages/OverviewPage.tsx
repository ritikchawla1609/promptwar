import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  Activity,
  CheckCircle2,
  Clock,
  Play,
  Pause,
  ArrowRight,
  Radio,
  Layers,
  Award,
  Zap,
  HelpCircle,
  FileText,
  AlertTriangle
} from 'lucide-react';

export default function OverviewPage() {
  const {
    eventStatus,
    activeRound,
    roundSummaries,
    remainingSeconds,
    timerRunning,
    teams,
    auditLogs,
    startRound,
    pauseRound,
    resumeRound,
    advanceRound
  } = useAdmin();

  const navigate = useNavigate();

  const registeredCount = teams.length;
  const activeCount = teams.filter(t => t.status === 'ACTIVE').length;
  const pausedCount = teams.filter(t => t.status === 'PAUSED' || t.status === 'OFFLINE').length;
  const completedCount = teams.filter(t => t.status === 'COMPLETED' || t.progressPercentage >= 80).length;

  const totalScoreSum = teams.reduce((acc, t) => acc + (t.roundScores.round1 || 0) + (t.roundScores.round2 || 0) + (t.roundScores.round3 || 0), 0);
  const averageTournamentScore = teams.length > 0 ? (totalScoreSum / teams.length).toFixed(1) : '0';

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getNextRecommendedAction = () => {
    if (eventStatus === 'PAUSED') {
      return {
        title: 'Resume Arena Competition',
        description: 'The global arena is paused. Resume to restart participant countdown clocks.',
        buttonLabel: 'Resume Event',
        action: () => navigate('/control')
      };
    }
    if (activeRound === 'ROUND_1') {
      if (remainingSeconds < 60) {
        return {
          title: 'Advance to Round 2 (Operation Blackbox)',
          description: 'Round 1 time limit is expiring. Conclude Prompt Parasite and advance qualified teams.',
          buttonLabel: 'Advance to Round 2',
          action: () => advanceRound()
        };
      }
      return {
        title: 'Monitor Round 1 Submissions',
        description: 'Teams are actively engaged in the Parasite phase, stealing opponent concepts and evolving final submissions.',
        buttonLabel: 'Inspect Round 1',
        action: () => navigate('/rounds')
      };
    }
    if (activeRound === 'ROUND_2') {
      return {
        title: 'Review Evidence Interrogations',
        description: 'Teams are analyzing the research facility breach in Operation Blackbox.',
        buttonLabel: 'Inspect Round 2',
        action: () => navigate('/rounds')
      };
    }
    if (activeRound === 'ROUND_3') {
      return {
        title: 'Judge Director Cut Submissions',
        description: 'Teams are submitting Frame Zero directorial prompts. Audit scores on leaderboard.',
        buttonLabel: 'Open Leaderboard',
        action: () => navigate('/leaderboard')
      };
    }
    return {
      title: 'Prepare Round 1 Start',
      description: 'Check team check-in and launch Round 1 when ready.',
      buttonLabel: 'Start Round 1',
      action: () => startRound('ROUND_1')
    };
  };

  const nextAction = getNextRecommendedAction();

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 select-none">
      {/* 1. OPERATIONAL HERO HEADER */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0e1424] to-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>LIVE OPERATIONAL COMMAND · PROMPT WAR 2026</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Arena Master Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-light">
            Real-time status across Prompt Parasite (R1), Operation Blackbox (R2), and Frame Zero (R3).
          </p>
        </div>

        {/* Global Timer Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-blue-500/30 flex items-center space-x-4 shadow-lg shadow-blue-500/5 self-start md:self-auto min-w-[220px]">
          <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              ACTIVE ROUND TIMER
            </div>
            <div className="text-3xl font-mono font-black text-amber-400 tracking-wider">
              {formatTime(remainingSeconds)}
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              {timerRunning ? 'Auto-Advancing' : 'Clock Paused'}
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE 5 KEY OPERATIONAL QUESTIONS ANSWERED AT A GLANCE */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-mono uppercase tracking-wider text-[11px]">REGISTERED</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-white">{registeredCount}</div>
          <div className="text-[11px] text-slate-400">Confirmed teams in arena</div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-mono uppercase tracking-wider text-[11px]">ACTIVE NOW</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-emerald-400">{activeCount}</div>
          <div className="text-[11px] text-slate-400">{pausedCount} paused / offline</div>
        </div>

        {/* Metric 3 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-mono uppercase tracking-wider text-[11px]">COMPLETED</span>
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-purple-400">{completedCount}</div>
          <div className="text-[11px] text-slate-400">Progressing normally</div>
        </div>

        {/* Metric 4 */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span className="font-mono uppercase tracking-wider text-[11px]">AVG SCORE</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-bold font-mono text-amber-400">{averageTournamentScore}</div>
          <div className="text-[11px] text-slate-400">Across 3 rounds</div>
        </div>
      </div>

      {/* 3. RECOMMENDED NEXT ACTION PANEL */}
      <div className="p-5 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 flex-shrink-0 mt-0.5">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-blue-300 font-bold">
              ORGANIZER RECOMMENDED NEXT ACTION
            </div>
            <h3 className="text-sm font-bold text-white mt-0.5">{nextAction.title}</h3>
            <p className="text-xs text-slate-400 font-light mt-0.5">{nextAction.description}</p>
          </div>
        </div>

        <button
          onClick={nextAction.action}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center justify-center space-x-2 active:scale-95 shrink-0"
        >
          <span>{nextAction.buttonLabel}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4. THREE-ROUND OPERATIONAL OVERVIEW CARDS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center space-x-2">
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Three-Round Operational Pipeline</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">Click card to manage round</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Round 1 */}
          <div
            onClick={() => navigate('/rounds')}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer space-y-5 hover:shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400">ROUND 01</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                activeRound === 'ROUND_1'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {activeRound === 'ROUND_1' ? 'ACTIVE NOW' : 'PENDING'}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-white group-hover:text-blue-400 transition-colors">
                Prompt Parasite
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Original strategy design, anonymous opponent matchmaking, concept theft, and evolutionary synthesis.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 text-[10px]">DURATION</span>
                <div className="text-slate-200 font-semibold">10 Mins (7 Phases)</div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">AVG SCORE</span>
                <div className="text-amber-400 font-semibold">84.2 / 100</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-blue-400 group-hover:translate-x-1 transition-transform">
              <span>Open Round 1 Controls</span>
              <span>→</span>
            </div>
          </div>

          {/* Card: Round 2 */}
          <div
            onClick={() => navigate('/rounds')}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer space-y-5 hover:shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-indigo-400">ROUND 02</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                activeRound === 'ROUND_2'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {activeRound === 'ROUND_2' ? 'ACTIVE NOW' : 'READY'}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-white group-hover:text-indigo-400 transition-colors">
                Operation Blackbox
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                Facility data breach investigation, prompt interrogation, and evidence cross-referencing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 text-[10px]">DURATION</span>
                <div className="text-slate-200 font-semibold">15 Mins</div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">AVG SCORE</span>
                <div className="text-indigo-400 font-semibold">81.5 / 100</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>Open Round 2 Controls</span>
              <span>→</span>
            </div>
          </div>

          {/* Card: Round 3 */}
          <div
            onClick={() => navigate('/rounds')}
            className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer space-y-5 hover:shadow-xl group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-rose-400">ROUND 03</span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                activeRound === 'ROUND_3'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {activeRound === 'ROUND_3' ? 'ACTIVE NOW' : 'STANDBY'}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-white group-hover:text-rose-400 transition-colors">
                Frame Zero
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                The Director's Trial. Anime cinematic scene brief prompt direction across 5 aesthetic pillars.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-slate-800">
              <div>
                <span className="text-slate-400 text-[10px]">DURATION</span>
                <div className="text-slate-200 font-semibold">12 Mins (5 Takes)</div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">AVG SCORE</span>
                <div className="text-rose-400 font-semibold">88.0 / 100</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-rose-400 group-hover:translate-x-1 transition-transform">
              <span>Open Round 3 Controls</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. RECENT ACTIVITY FEED */}
      <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center space-x-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Recent Administrative & Competition Activity</span>
          </h2>
          <button
            onClick={() => navigate('/audit')}
            className="text-xs font-mono text-blue-400 hover:underline"
          >
            View Full Audit Trail →
          </button>
        </div>

        <div className="space-y-2">
          {auditLogs.slice(0, 5).map((log) => (
            <div
              key={log.id}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs"
            >
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <div>
                  <div className="font-semibold text-slate-200">{log.action} · {log.target}</div>
                  <div className="text-[11px] text-slate-400">{log.details}</div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 whitespace-nowrap ml-4">
                {log.timestamp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
