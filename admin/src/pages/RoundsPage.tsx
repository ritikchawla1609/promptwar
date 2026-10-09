import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  Layers,
  Clock,
  Users,
  Award,
  Zap,
  Sliders,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Lock,
  ChevronRight,
  Eye,
  FileText,
  Search,
  Sparkles,
  Camera,
  Film,
  Compass,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';

export default function RoundsPage() {
  const {
    activeRound,
    roundSummaries,
    remainingSeconds,
    timerRunning,
    teams,
    startRound,
    pauseRound,
    resumeRound,
    resetRound,
    addAuditLog
  } = useAdmin();

  const [selectedRoundTab, setSelectedRoundTab] = useState<'R1' | 'R2' | 'R3'>('R1');
  const [r1Search, setR1Search] = useState('');
  const [matchmakingStatus, setMatchmakingStatus] = useState<string>('Balanced (24 Pairs Active)');
  const [forceMatchDone, setForceMatchDone] = useState(false);

  // Round Reset Modal State
  const [resetModalRound, setResetModalRound] = useState<'ROUND_1' | 'ROUND_2' | 'ROUND_3' | null>(null);
  const [resetMode, setResetMode] = useState<'RESET_STATE' | 'RESET_RESULTS'>('RESET_STATE');
  const [isResetting, setIsResetting] = useState(false);
  const [resetFeedback, setResetFeedback] = useState<string | null>(null);

  // R1 Submissions
  const r1Submissions = teams.map(t => ({
    teamCode: t.teamCode,
    teamName: t.teamName,
    prompt: t.history?.find(h => h.round === 'ROUND_1')?.prompt || 'Campus ambassador bounty matrix & viral campaign strategy.',
    score: t.roundScores.round1,
    status: t.roundScores.round1 > 0 ? 'Evaluated' : 'In Progress'
  }));

  // R2 Submissions
  const r2Submissions = teams.filter(t => t.qualifiedForR2).map(t => ({
    teamCode: t.teamCode,
    teamName: t.teamName,
    evidenceQueried: 'Telemetry 17-B & Power Grid Spool',
    prompt: t.history?.find(h => h.round === 'ROUND_2')?.prompt || 'Facility telemetry discrepancy cross-referenced.',
    score: t.roundScores.round2,
    status: t.roundScores.round2 > 0 ? 'Solved' : 'Investigating'
  }));

  // R3 Submissions
  const r3Submissions = teams.filter(t => t.qualifiedForR3).map(t => ({
    teamCode: t.teamCode,
    teamName: t.teamName,
    sceneSelected: 'The Last Promise (最後の約束)',
    prompt: t.history?.find(h => h.round === 'ROUND_3')?.prompt || 'Directorial scene framing prompt locked.',
    score: t.roundScores.round3,
    rank: t.roundScores.round3 >= 85 ? 'Master Auteur' : t.roundScores.round3 >= 60 ? 'Visionary Director' : 'Cinematic Stylist'
  }));

  const handleForceMatch = () => {
    setForceMatchDone(true);
    setMatchmakingStatus('48/48 Teams Matched in Balanced Pairs');
    addAuditLog('MATCHMAKING_FORCED', 'Round 1 (Prompt Parasite)', 'Organizer forced balanced random matchmaking for all teams.', 'ROUND');
    setTimeout(() => setForceMatchDone(false), 3000);
  };

  const handleExecuteReset = async () => {
    if (!resetModalRound) return;
    setIsResetting(true);
    const success = await resetRound(resetModalRound, resetMode);
    setIsResetting(false);
    if (success) {
      setResetFeedback(`Round reset complete (${resetMode === 'RESET_RESULTS' ? 'Results Cleared' : 'State Reset to Lobby'}).`);
      setTimeout(() => {
        setResetFeedback(null);
        setResetModalRound(null);
      }, 1600);
    }
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
          <Layers className="w-3.5 h-3.5" />
          <span>ROUND MECHANICS & CONFIGURATION</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Round Management Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
          Tailored controls for Prompt Parasite, Operation Blackbox, and Frame Zero.
        </p>
      </div>

      {/* Round Tabs */}
      <div className="flex space-x-2 border-b border-slate-800 pb-px">
        <button
          onClick={() => setSelectedRoundTab('R1')}
          className={`px-5 py-3 rounded-t-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 border-t border-x ${
            selectedRoundTab === 'R1'
              ? 'bg-slate-900 border-slate-700 text-amber-400 border-b-2 border-b-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
          }`}
        >
          <span>ROUND 01</span>
          <span className="font-normal opacity-80">(Prompt Parasite)</span>
        </button>

        <button
          onClick={() => setSelectedRoundTab('R2')}
          className={`px-5 py-3 rounded-t-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 border-t border-x ${
            selectedRoundTab === 'R2'
              ? 'bg-slate-900 border-slate-700 text-indigo-400 border-b-2 border-b-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
          }`}
        >
          <span>ROUND 02</span>
          <span className="font-normal opacity-80">(Operation Blackbox)</span>
        </button>

        <button
          onClick={() => setSelectedRoundTab('R3')}
          className={`px-5 py-3 rounded-t-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 border-t border-x ${
            selectedRoundTab === 'R3'
              ? 'bg-slate-900 border-slate-700 text-rose-400 border-b-2 border-b-slate-900'
              : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
          }`}
        >
          <span>ROUND 03</span>
          <span className="font-normal opacity-80">(Frame Zero)</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: ROUND 1 — PROMPT PARASITE */}
      {/* ============================================================== */}
      {selectedRoundTab === 'R1' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Banner */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-amber-400">ROUND 01 PROTOCOL</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  PROMPT PARASITE · SEE. STEAL. EVOLVE.
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">Prompt Parasite Command Deck</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Participants craft growth marketing blueprints, infiltrate anonymous opponent strategies, steal key mechanisms, and synthesize evolved final submissions.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right text-xs font-mono">
                <span className="text-slate-400 text-[10px]">CURRENT PHASE</span>
                <div className="font-bold text-emerald-400 text-sm">CREATE (Prompting)</div>
              </div>

              {/* Start Round 1 Button */}
              <button
                onClick={() => startRound('ROUND_1', 10, 120)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/40 text-xs font-mono font-bold flex items-center space-x-1.5 shadow-md shadow-emerald-600/20 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Start Round 1</span>
              </button>

              {activeRound === 'ROUND_1' && (
                timerRunning ? (
                  <button
                    onClick={() => pauseRound('ROUND_1')}
                    className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center space-x-1.5"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    onClick={() => resumeRound('ROUND_1')}
                    className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold flex items-center space-x-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </button>
                )
              )}

              <button
                onClick={() => {
                  setResetModalRound('ROUND_1');
                  setResetMode('RESET_STATE');
                }}
                className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors"
                title="Reset Round 1 State or Results"
              >
                <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                <span>Reset Round</span>
              </button>
            </div>
          </div>

          {/* 7-Phase Progression Sequence */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Round 1 Phase Sequence & Automatic Timers
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { name: 'LOBBY', time: 'Holding', active: false },
                { name: 'BRIEFING', time: '60s', active: false },
                { name: 'CREATE', time: '600s', active: true },
                { name: 'MATCH', time: '30s', active: false },
                { name: 'PARASITE', time: '600s', active: false },
                { name: 'EVOLVE', time: '600s', active: false },
                { name: 'COMPLETE', time: 'Review', active: false },
              ].map((p, idx) => (
                <div
                  key={p.name}
                  className={`p-3 rounded-xl border text-xs font-mono ${
                    p.active
                      ? 'bg-amber-500/10 border-amber-500/50 text-amber-300 font-bold shadow-md shadow-amber-500/5'
                      : 'bg-slate-950/40 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-[10px] text-slate-400">PHASE 0{idx + 1}</div>
                  <div className="text-sm font-semibold mt-0.5">{p.name}</div>
                  <div className="text-[10px] opacity-70 mt-1">{p.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Matchmaking & Challenge Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Balanced Matchmaking Pool</span>
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                  {matchmakingStatus}
                </span>
              </div>

              <p className="text-xs text-slate-400">
                Server shuffles submitted outputs round-robin style to ensure each team receives anonymous opponent prompts without bias.
              </p>

              <button
                onClick={handleForceMatch}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all shadow-md shadow-blue-600/10 active:scale-98"
              >
                {forceMatchDone ? '✓ Matchmaking Synced!' : 'FORCE BALANCED MATCH ALL'}
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>Challenge Specifications: The Registration Problem</span>
              </h3>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5 text-slate-300">
                <div className="font-mono text-amber-300 font-bold">Goal: 500 Verified Registrations in 7 Days (₹10,000 Budget Cap)</div>
                <p className="text-slate-400 leading-relaxed">
                  Requirements: Day 1-7 sprint milestones, itemized budget breakdown, WhatsApp & Instagram conversion scripts, campus guerrilla tactics, and Day 4 contingency triggers.
                </p>
              </div>
            </div>
          </div>

          {/* Submissions Table */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Round 1 Submissions ({r1Submissions.length})
              </h3>
              <span className="text-xs font-mono text-slate-400">Auto-refreshing</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="text-slate-400 border-b border-slate-800 pb-2">
                  <tr>
                    <th className="py-2.5 px-3">TEAM</th>
                    <th className="py-2.5 px-3">PROMPT INSTRUCTION</th>
                    <th className="py-2.5 px-3">STATUS</th>
                    <th className="py-2.5 px-3 text-right">SCORE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {r1Submissions.map((s, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30">
                      <td className="py-3 px-3 font-bold text-slate-200">
                        {s.teamName} <span className="text-[10px] text-slate-400">({s.teamCode})</span>
                      </td>
                      <td className="py-3 px-3 text-slate-300 max-w-md truncate font-sans">
                        "{s.prompt}"
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {s.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-amber-400">
                        {s.score} / 100
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: ROUND 2 — OPERATION BLACKBOX */}
      {/* ============================================================== */}
      {selectedRoundTab === 'R2' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-indigo-400">ROUND 02 PROTOCOL</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  SPACIOUS INTELLIGENCE INVESTIGATION
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">Operation Blackbox</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                "The intelligence exists. Your prompt unlocks it." Research facility data breach investigation.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono text-slate-400">
                15 Mins · 4 Investigation Phases
              </span>

              {/* Start Round 2 Button */}
              <button
                onClick={() => startRound('ROUND_2', 15, 120)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/40 text-xs font-mono font-bold flex items-center space-x-1.5 shadow-md shadow-indigo-600/20 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Start Round 2</span>
              </button>

              {activeRound === 'ROUND_2' && (
                timerRunning ? (
                  <button
                    onClick={() => pauseRound('ROUND_2')}
                    className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center space-x-1.5"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    onClick={() => resumeRound('ROUND_2')}
                    className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold flex items-center space-x-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </button>
                )
              )}

              <button
                onClick={() => {
                  setResetModalRound('ROUND_2');
                  setResetMode('RESET_STATE');
                }}
                className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors"
                title="Reset Round 2 State or Results"
              >
                <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                <span>Reset Round</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Evidence Dataset Control
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contains 12 telemetry logs, encrypted security badge spools, and maintenance timestamps.
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400">
                ✓ Dataset Hash: v2.4-RELEASE (Verified)
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Interrogation Rate Limits
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Teams receive up to 6 prompt queries to interrogate the facility data archive before locking final findings.
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-indigo-400">
                Max Queries: 6 per team
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Qualified Teams Roster
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Teams advancing from Round 1 with valid threshold.
              </p>
              <div className="text-2xl font-bold font-mono text-white">
                {teams.filter(t => t.qualifiedForR2).length} Teams Qualified
              </div>
            </div>
          </div>

          {/* R2 Submissions Table */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Operation Blackbox Findings Table ({r2Submissions.length})
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="text-slate-400 border-b border-slate-800 pb-2">
                  <tr>
                    <th className="py-2.5 px-3">TEAM</th>
                    <th className="py-2.5 px-3">EVIDENCE TARGET</th>
                    <th className="py-2.5 px-3">PROMPT INTERROGATION</th>
                    <th className="py-2.5 px-3 text-right">SCORE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {r2Submissions.map((s, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30">
                      <td className="py-3 px-3 font-bold text-slate-200">
                        {s.teamName} <span className="text-[10px] text-slate-400">({s.teamCode})</span>
                      </td>
                      <td className="py-3 px-3 text-indigo-300">
                        {s.evidenceQueried}
                      </td>
                      <td className="py-3 px-3 text-slate-300 max-w-md truncate font-sans">
                        "{s.prompt}"
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-amber-400">
                        {s.score} / 100
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: ROUND 3 — FRAME ZERO */}
      {/* ============================================================== */}
      {selectedRoundTab === 'R3' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-rose-400">ROUND 03 PROTOCOL</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20">
                  FRAME ZERO · THE DIRECTOR'S TRIAL
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">Anime Cinematic Directing Studio</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Participants act as anime directors, translating scene briefs into prompts evaluated across 5 aesthetic pillars.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono text-slate-400">
                12 Mins · Max 5 Takes
              </span>

              {/* Start Round 3 Button */}
              <button
                onClick={() => startRound('ROUND_3', 12, 120)}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white border border-rose-400/40 text-xs font-mono font-bold flex items-center space-x-1.5 shadow-md shadow-rose-600/20 transition-all active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Start Round 3</span>
              </button>

              {activeRound === 'ROUND_3' && (
                timerRunning ? (
                  <button
                    onClick={() => pauseRound('ROUND_3')}
                    className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center space-x-1.5"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause</span>
                  </button>
                ) : (
                  <button
                    onClick={() => resumeRound('ROUND_3')}
                    className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold flex items-center space-x-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </button>
                )
              )}

              <button
                onClick={() => {
                  setResetModalRound('ROUND_3');
                  setResetMode('RESET_STATE');
                }}
                className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-bold flex items-center space-x-1.5 transition-colors"
                title="Reset Round 3 State or Results"
              >
                <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                <span>Reset Round</span>
              </button>
            </div>
          </div>

          {/* 4 Canonical Scene Briefs Cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Available Production Scenes
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'The Last Promise', kanji: '最後の約束', difficulty: 'Intermediate (3★)', duration: '10m', theme: 'Swordsman & paper lantern in storm' },
                { title: 'After the Rain', kanji: '雨上がりの駅', difficulty: 'Novice (2★)', duration: '10m', theme: 'Two friends at sunset train platform' },
                { title: 'The Final Signal', kanji: '彼方の信号', difficulty: 'Master (4★)', duration: '12m', theme: 'Astronaut & ringed planet in deep space' },
                { title: 'A Thousand Lanterns', kanji: '千の燈火', difficulty: 'Advanced (3★)', duration: '10m', theme: 'Traveler on wooden bridge & river lanterns' },
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-rose-400 font-bold">SCENE 0{idx + 1}</span>
                    <span className="text-slate-400">{m.kanji}</span>
                  </div>
                  <h4 className="font-bold text-slate-200 text-sm">{m.title}</h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{m.theme}</p>
                  <div className="text-[10px] font-mono text-amber-300/80 pt-1">
                    {m.difficulty} · {m.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Pillar Scoring Rubric */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Deterministic 100-Point Scoring Rubric (Zero AI API Dependency)
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px]">1. SCENE ELEMENTS</span>
                <div className="text-lg font-bold text-amber-400 mt-0.5">35 Points</div>
                <div className="text-[10px] text-slate-400">Characters & setting</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px]">2. EMOTIONAL TONE</span>
                <div className="text-lg font-bold text-rose-400 mt-0.5">20 Points</div>
                <div className="text-[10px] text-slate-400">Expression & nuance</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px]">3. COMPOSITION</span>
                <div className="text-lg font-bold text-blue-400 mt-0.5">20 Points</div>
                <div className="text-[10px] text-slate-400">Framing & 2.39:1 scope</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px]">4. LIGHTING & CONTRAST</span>
                <div className="text-lg font-bold text-emerald-400 mt-0.5">15 Points</div>
                <div className="text-[10px] text-slate-400">Color harmony & glow</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 text-[10px]">5. CONSISTENCY</span>
                <div className="text-lg font-bold text-purple-400 mt-0.5">10 Points</div>
                <div className="text-[10px] text-slate-400">No contradictions</div>
              </div>
            </div>
          </div>

          {/* R3 Submissions Table */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Frame Zero Director's Cuts ({r3Submissions.length})
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="text-slate-400 border-b border-slate-800 pb-2">
                  <tr>
                    <th className="py-2.5 px-3">DIRECTOR TEAM</th>
                    <th className="py-2.5 px-3">SCENE</th>
                    <th className="py-2.5 px-3">DIRECTORIAL PROMPT</th>
                    <th className="py-2.5 px-3">DIRECTOR RANK</th>
                    <th className="py-2.5 px-3 text-right">SCORE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {r3Submissions.map((s, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30">
                      <td className="py-3 px-3 font-bold text-slate-200">
                        {s.teamName} <span className="text-[10px] text-slate-400">({s.teamCode})</span>
                      </td>
                      <td className="py-3 px-3 text-rose-300">
                        {s.sceneSelected}
                      </td>
                      <td className="py-3 px-3 text-slate-300 max-w-sm truncate font-sans">
                        "{s.prompt}"
                      </td>
                      <td className="py-3 px-3 text-amber-300 font-semibold">
                        {s.rank}
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-amber-400">
                        {s.score} / 100
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {/* Round Reset Modal */}
      {resetModalRound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center space-x-3 text-rose-400">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Reset {resetModalRound === 'ROUND_1' ? 'Round 1 (Prompt Parasite)' : resetModalRound === 'ROUND_2' ? 'Round 2 (Operation Blackbox)' : 'Round 3 (Frame Zero)'}
                </h3>
                <p className="text-xs text-slate-400 font-sans">
                  Select reset scope. This action is recorded in the administrative audit log.
                </p>
              </div>
            </div>

            {/* Mode Selection */}
            <div className="space-y-3 font-sans">
              <label
                onClick={() => setResetMode('RESET_STATE')}
                className={`flex items-start space-x-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  resetMode === 'RESET_STATE'
                    ? 'bg-amber-500/10 border-amber-500/50 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="resetMode"
                  checked={resetMode === 'RESET_STATE'}
                  onChange={() => setResetMode('RESET_STATE')}
                  className="mt-1 text-amber-500"
                />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-amber-300 font-mono">Option A: Reset Round State</div>
                  <p className="text-slate-300 leading-relaxed">
                    Returns the round to initial phase (LOBBY) and resets the timer. All participant registrations, draft submissions, and recorded scores remain intact. Connected participants return to the waiting lobby.
                  </p>
                </div>
              </label>

              <label
                onClick={() => setResetMode('RESET_RESULTS')}
                className={`flex items-start space-x-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  resetMode === 'RESET_RESULTS'
                    ? 'bg-rose-500/10 border-rose-500/50 text-white'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="resetMode"
                  checked={resetMode === 'RESET_RESULTS'}
                  onChange={() => setResetMode('RESET_RESULTS')}
                  className="mt-1 text-rose-500"
                />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-rose-300 font-mono">Option B: Reset Round Results & Submissions</div>
                  <p className="text-slate-300 leading-relaxed">
                    Wipes all prompt submissions, evaluations, and scores recorded specifically for this round. Resets round state back to LOBBY. Preserves team credentials and earlier round history.
                  </p>
                </div>
              </label>
            </div>

            {resetFeedback && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono text-center">
                ✓ {resetFeedback}
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setResetModalRound(null)}
                disabled={isResetting}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleExecuteReset}
                disabled={isResetting}
                className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs font-mono font-bold transition-all shadow-md shadow-rose-600/20 flex items-center space-x-2"
              >
                {isResetting ? (
                  <span>Executing Reset...</span>
                ) : (
                  <>
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Confirm Reset</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
