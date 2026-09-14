import React, { useState, useMemo } from 'react';
import { useLiveArena } from '../utils/liveArenaEngine';
import { SCENARIOS } from '../data/dalgonaChallengeData';
import {
  ShieldAlert,
  ShieldCheck,
  Zap,
  Activity,
  Download,
  FileSpreadsheet,
  FileJson,
  Trash2,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Eye,
  Edit3,
  Lock,
  Unlock,
  Award,
  Users,
  BarChart3,
  TrendingUp,
  Sliders,
  Copy,
  Check,
  Clock,
  Sparkles,
  ArrowLeft,
  Flame,
  AlertOctagon,
  FileText,
  HelpCircle,
  PlusCircle,
} from 'lucide-react';

export default function AdminPortal({ onSwitchToPlayer }) {
  const {
    submissions,
    events,
    stats,
    isFrozen,
    mongoStatus,
    refreshMongo,
    updateSubmission,
    deleteSubmission,
    clearAllSubmissions,
    seedDemoSubmissions,
    toggleFreezeArena,
    formattedTimer,
  } = useLiveArena();

  // Search, Filters & Sorting
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScenario, setSelectedScenario] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('score-desc'); // 'score-desc', 'score-asc', 'time-desc', 'time-asc'

  // Selected Submission for Deep Dossier Inspector Modal
  const [inspectingSubId, setInspectingSubId] = useState(null);
  const [inspectorTab, setInspectorTab] = useState('dossier'); // 'dossier' | 'ledger' | 'grading'
  
  // Local state for judge adjustment in modal
  const [scoreAdjustment, setScoreAdjustment] = useState(0);
  const [adjustmentReason, setAdjustmentReason] = useState('');
  const [judgeNotes, setJudgeNotes] = useState('');
  const [selectedStatusDraft, setSelectedStatusDraft] = useState('approved_r2');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState(false);

  // Active submission being inspected
  const inspectingSubmission = useMemo(() => {
    if (!inspectingSubId) return null;
    return submissions.find((s) => s.id === inspectingSubId) || null;
  }, [inspectingSubId, submissions]);

  // Sync modal draft states when inspecting submission changes
  const handleOpenInspector = (sub) => {
    setInspectingSubId(sub.id);
    setScoreAdjustment(sub.scoreAdjustment || 0);
    setAdjustmentReason(sub.adjustmentReason || '');
    setJudgeNotes(sub.judgeNotes || '');
    setSelectedStatusDraft(sub.status || 'submitted');
    setInspectorTab('dossier');
    setSaveSuccessNotice(false);
  };

  const handleCloseInspector = () => {
    setInspectingSubId(null);
  };

  // Save Judge Evaluation
  const handleSaveEvaluation = () => {
    if (!inspectingSubmission) return;

    const base = inspectingSubmission.baseScore ?? inspectingSubmission.totalScore;
    const adjusted = Math.max(0, Math.min(100, Number(base) + Number(scoreAdjustment)));

    updateSubmission(inspectingSubmission.id, {
      scoreAdjustment: Number(scoreAdjustment),
      adjustmentReason,
      judgeNotes,
      status: selectedStatusDraft,
      totalScore: adjusted,
    });

    setSaveSuccessNotice(true);
    setTimeout(() => setSaveSuccessNotice(false), 2500);
  };

  // Quick 1-click Qualify toggle from table
  const handleQuickToggleQualify = (sub) => {
    const nextStatus = sub.status === 'approved_r2' ? 'submitted' : 'approved_r2';
    updateSubmission(sub.id, { status: nextStatus });
  };

  // Filter & Sort Pipeline
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) => {
      // Search matches team name or prompt text or scenario
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const teamMatch = sub.teamName?.toLowerCase().includes(q);
        const scenarioMatch = sub.scenarioTitle?.toLowerCase().includes(q);
        const promptMatch = sub.promptText?.toLowerCase().includes(q);
        if (!teamMatch && !scenarioMatch && !promptMatch) return false;
      }

      // Scenario filter
      if (selectedScenario !== 'all' && sub.scenarioId !== selectedScenario) {
        return false;
      }

      // Status filter
      if (selectedStatus === 'qualified' && sub.status !== 'approved_r2') return false;
      if (selectedStatus === 'submitted' && sub.status !== 'submitted') return false;
      if (selectedStatus === 'contaminated' && !sub.isContaminated) return false;
      if (selectedStatus === 'raw_dump' && !sub.isRawDataDump) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'score-desc') return (b.totalScore || 0) - (a.totalScore || 0);
      if (sortBy === 'score-asc') return (a.totalScore || 0) - (b.totalScore || 0);
      if (sortBy === 'time-desc') return (b.timestamp || 0) - (a.timestamp || 0);
      if (sortBy === 'time-asc') return (a.timestamp || 0) - (b.timestamp || 0);
      return 0;
    });
  }, [submissions, searchQuery, selectedScenario, selectedStatus, sortBy]);

  // Key KPI Aggregations
  const totalCount = submissions.length;
  const qualifiedCount = submissions.filter((s) => s.status === 'approved_r2' || s.totalScore >= 75).length;
  const avgScore = totalCount > 0 
    ? Math.round((submissions.reduce((sum, s) => sum + (s.totalScore || 0), 0) / totalCount) * 10) / 10 
    : 0;
  const contaminatedCount = submissions.filter((s) => s.isContaminated || (s.trapCount && s.trapCount > 0)).length;
  const rawDumpCount = submissions.filter((s) => s.isRawDataDump).length;

  // Export CSV Handler
  const handleExportCSV = () => {
    if (submissions.length === 0) {
      alert('No submissions available to export.');
      return;
    }

    const headers = [
      'Submission ID',
      'Team Name',
      'Scenario',
      'Total Score',
      'Base Score',
      'Score Adjustment',
      'Cookie Score (/40)',
      'Prompt Score (/30)',
      'AI Score (/30)',
      'Signal Cuts',
      'Traps Detonated',
      'Is Contaminated',
      'Is Raw Data Dump',
      'Round 2 Status',
      'Judge Notes',
      'Timestamp',
      'Prompt Text'
    ];

    const rows = submissions.map((s) => [
      `"${s.id}"`,
      `"${(s.teamName || '').replace(/"/g, '""')}"`,
      `"${(s.scenarioTitle || '').replace(/"/g, '""')}"`,
      s.totalScore ?? 0,
      s.baseScore ?? s.totalScore ?? 0,
      s.scoreAdjustment ?? 0,
      s.scores?.cookieCut ?? 0,
      s.scores?.prompt ?? 0,
      s.scores?.aiExecution ?? 0,
      s.cuts ?? 0,
      s.trapCount ?? 0,
      s.isContaminated ? 'YES' : 'NO',
      s.isRawDataDump ? 'YES' : 'NO',
      `"${s.status || 'submitted'}"`,
      `"${(s.judgeNotes || '').replace(/"/g, '""')}"`,
      `"${s.formattedTime || new Date(s.timestamp).toLocaleTimeString()}"`,
      `"${(s.promptText || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `prompt_war_round1_submissions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export JSON Handler (Ready for combined backend database import)
  const handleExportJSON = () => {
    if (submissions.length === 0) {
      alert('No submissions available to export.');
      return;
    }

    const dataPayload = {
      event: 'PROMPT_WAR_2026',
      round: 'ROUND_01_DALGONA_PROMPT',
      exportedAt: new Date().toISOString(),
      stats: {
        totalSubmissions: totalCount,
        qualifiedRound2: qualifiedCount,
        avgScore,
        contaminatedCount,
      },
      submissions,
    };

    const blob = new Blob([JSON.stringify(dataPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `prompt_war_round1_db_${Date.now()}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset Submissions confirmation
  const handleReset = () => {
    if (window.confirm('⚠️ Reset all submissions? This will erase all teams from this arena session.')) {
      clearAllSubmissions();
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans select-none relative overflow-x-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/3 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-pink-600/10 rounded-full blur-[160px]" />
      </div>

      {/* TOP COMMAND & CONTROL BAR */}
      <header className="relative z-30 w-full border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-2xl px-6 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          {/* Branding & Status */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-pink-500 to-amber-600 p-[1px] shadow-[0_0_25px_rgba(245,158,11,0.35)]">
              <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center font-display font-black text-white text-lg">
                👑
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-lg font-display font-black tracking-wider text-white">
                  PROMPT WAR <span className="text-pink-500 font-black">// EVALUATOR CONSOLE</span>
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-black uppercase tracking-widest">
                  ROUND 01 COMBINED PORTAL
                </span>
              </div>
              <div className="flex items-center flex-wrap gap-3 text-xs font-mono text-zinc-400 mt-0.5">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>LIVE MULTI-TAB SYNC</span>
                </span>
                <span className="text-zinc-600">•</span>
                <span className={isFrozen ? 'text-rose-400 font-bold' : 'text-zinc-400'}>
                  {isFrozen ? '🔒 ARENA FROZEN' : '🔓 OPEN'}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-300 font-bold">CLOCK: {formattedTimer}</span>
                <span className="text-zinc-600">•</span>
                {mongoStatus?.isConnected ? (
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>MONGODB ATLAS: CONNECTED</span>
                  </span>
                ) : mongoStatus?.hasConfiguredUri ? (
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>MONGODB: CONNECTING...</span>
                  </span>
                ) : (
                  <span
                    className="flex items-center gap-1.5 text-amber-400 font-medium"
                    title="Database URI configured. Add your password in server/.env to enable remote cloud storage."
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>MONGODB: AWAITING PASSWORD</span>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Master Controls */}
          <div className="flex items-center flex-wrap gap-2.5">
            {/* Switch to Arena */}
            <button
              onClick={onSwitchToPlayer}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-mono font-bold transition-all shadow-sm group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400 group-hover:-translate-x-0.5 transition-transform" />
              <span>Participant Arena</span>
            </button>

            {/* Freeze Submissions */}
            <button
              onClick={toggleFreezeArena}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all ${
                isFrozen
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 border-zinc-700 text-zinc-300'
              }`}
              title={isFrozen ? 'Click to Unfreeze Submissions' : 'Click to Freeze Submissions'}
            >
              {isFrozen ? <Lock className="w-3.5 h-3.5 text-rose-400" /> : <Unlock className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{isFrozen ? 'Unfreeze Arena' : 'Freeze Arena'}</span>
            </button>

            {/* Seed Demo Teams */}
            <button
              onClick={seedDemoSubmissions}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono font-bold transition-all hover:border-zinc-500"
              title="Populate with realistic sample team submissions"
            >
              <PlusCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Seed Teams</span>
            </button>

            {/* Export CSV */}
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>

            {/* Export JSON (Database Ready) */}
            <button
              onClick={handleExportJSON}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 text-cyan-300 text-xs font-mono font-bold transition-all"
            >
              <FileJson className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export JSON</span>
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-zinc-900/60 hover:bg-rose-950/60 border border-zinc-800 hover:border-rose-800/50 text-zinc-500 hover:text-rose-400 transition-all"
              title="Reset All Submissions"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN BODY CONTAINER */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">

        {/* 1. VITAL METRICS KPI DASHBOARD */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {/* Total Submissions */}
          <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono tracking-wider uppercase font-semibold">Total Teams</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-3xl font-display font-black text-white">{totalCount}</div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1">
              Active runs ingested in real-time
            </div>
          </div>

          {/* Qualified for Round 2 */}
          <div className="p-4 rounded-2xl bg-zinc-950/70 border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden group shadow-[0_0_20px_rgba(16,185,129,0.08)]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-emerald-500/25 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono tracking-wider uppercase font-semibold text-emerald-400">R2 Qualified</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black text-emerald-300">{qualifiedCount}</span>
              <span className="text-xs font-mono text-emerald-500/90 font-bold">
                ({totalCount > 0 ? Math.round((qualifiedCount / totalCount) * 100) : 0}%)
              </span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1">
              Benchmark: &ge; 75 PTS or Approved
            </div>
          </div>

          {/* Average Arena Score */}
          <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono tracking-wider uppercase font-semibold">Mean Score</span>
              <BarChart3 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-display font-black text-white">
              {avgScore} <span className="text-xs font-mono text-zinc-500 font-normal">/ 100</span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1">
              Scored via 3-tier objective ledger
            </div>
          </div>

          {/* Contaminations / Trapped Runs */}
          <div className="p-4 rounded-2xl bg-zinc-950/70 border border-rose-500/30 backdrop-blur-xl relative overflow-hidden group shadow-[0_0_20px_rgba(244,63,94,0.08)]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/15 rounded-full blur-2xl group-hover:bg-rose-500/25 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono tracking-wider uppercase font-semibold text-rose-400">Traps Detonated</span>
              <AlertTriangle className="w-4 h-4 text-rose-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-black text-rose-300">{contaminatedCount}</span>
              <span className="text-xs font-mono text-rose-400/80 font-bold">
                ({totalCount > 0 ? Math.round((contaminatedCount / totalCount) * 100) : 0}%)
              </span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 mt-1">
              {rawDumpCount} Raw Clue Dump penalties
            </div>
          </div>
        </section>

        {/* 2. FILTER & SEARCH TOOLBAR */}
        <section className="p-4 rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl flex flex-wrap items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by team name, scenario, or prompt keywords..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Scenario Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Scenario:</span>
            <select
              value={selectedScenario}
              onChange={(e) => setSelectedScenario(e.target.value)}
              className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="all">All Scenarios ({submissions.length})</option>
              <option value="techfest">Campus Techfest Launch</option>
              <option value="startup">Silicon Valley VC Pitch</option>
              <option value="rover">Mars Rover Sub-System</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="all">All Submissions</option>
              <option value="qualified">Qualified for R2 ({qualifiedCount})</option>
              <option value="submitted">In Review</option>
              <option value="contaminated">Contaminated (Trapped) ({contaminatedCount})</option>
              <option value="raw_dump">Raw Dump Violations ({rawDumpCount})</option>
            </select>
          </div>

          {/* Sort Order */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="score-desc">Score: Highest First</option>
              <option value="score-asc">Score: Lowest First</option>
              <option value="time-desc">Time: Newest First</option>
              <option value="time-asc">Time: Oldest First</option>
            </select>
          </div>
        </section>

        {/* 3. COMBINED SUBMISSIONS PIPELINE / TABLE */}
        <section className="rounded-2xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-mono font-bold tracking-wider text-zinc-200 uppercase">
                Submissions Ledger
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-[10px] font-mono text-zinc-400 font-bold">
                Showing {filteredSubmissions.length} of {totalCount}
              </span>
            </div>
            <div className="text-[11px] font-mono text-zinc-500">
              Auto-updating via BroadcastChannel • Click row or Inspect to open Dossier
            </div>
          </div>

          {filteredSubmissions.length === 0 ? (
            <div className="py-16 text-center text-zinc-500 flex flex-col items-center justify-center gap-3">
              <Activity className="w-8 h-8 text-zinc-600 animate-pulse" />
              <div className="text-sm font-mono font-semibold">No submissions match current filters</div>
              <div className="text-xs font-mono text-zinc-600">
                Click "Seed Teams" above to load realistic demo submissions or test from Participant Arena.
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-zinc-900/40 text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    <th className="py-3.5 px-4 font-semibold">Rank & Team</th>
                    <th className="py-3.5 px-4 font-semibold">Scenario</th>
                    <th className="py-3.5 px-4 font-semibold">Total Score</th>
                    <th className="py-3.5 px-4 font-semibold">Breakdown (Cut / Prompt / AI)</th>
                    <th className="py-3.5 px-4 font-semibold">Signals & Traps</th>
                    <th className="py-3.5 px-4 font-semibold">R2 Status</th>
                    <th className="py-3.5 px-4 font-semibold">Time</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-xs font-mono">
                  {filteredSubmissions.map((sub, index) => {
                    const isPlayer = sub.teamName?.includes('YOU');
                    const isQual = sub.status === 'approved_r2' || sub.totalScore >= 75;
                    const hasAdjustment = sub.scoreAdjustment && sub.scoreAdjustment !== 0;

                    return (
                      <tr
                        key={sub.id}
                        className={`transition-colors hover:bg-white/[0.02] cursor-pointer ${
                          isPlayer ? 'bg-amber-500/[0.04]' : ''
                        }`}
                        onClick={() => handleOpenInspector(sub)}
                      >
                        {/* Rank & Team */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <span className="w-6 text-center font-display font-black text-zinc-500 text-sm">
                              #{index + 1}
                            </span>
                            <div>
                              <div className="flex items-center gap-1.5 font-bold text-zinc-100">
                                <span>{sub.teamName}</span>
                                {isPlayer && (
                                  <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[9px] font-black border border-amber-500/30">
                                    YOU
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-zinc-500">
                                ID: {sub.id.substring(0, 14)}...
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Scenario */}
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                            {sub.scenarioTitle || 'Techfest Launch'}
                          </span>
                        </td>

                        {/* Total Score */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-baseline gap-1.5">
                            <span
                              className={`text-base font-display font-black ${
                                sub.totalScore >= 80
                                  ? 'text-amber-400'
                                  : sub.totalScore >= 65
                                  ? 'text-pink-400'
                                  : 'text-zinc-400'
                              }`}
                            >
                              {sub.totalScore}
                            </span>
                            <span className="text-[10px] text-zinc-500">/100</span>
                            {hasAdjustment && (
                              <span
                                className={`text-[10px] font-bold ${
                                  sub.scoreAdjustment > 0 ? 'text-emerald-400' : 'text-rose-400'
                                }`}
                                title={`Adjusted: ${sub.adjustmentReason || 'Judge correction'}`}
                              >
                                ({sub.scoreAdjustment > 0 ? `+${sub.scoreAdjustment}` : sub.scoreAdjustment})
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-zinc-500 font-semibold">{sub.title || 'APPRENTICE'}</div>
                        </td>

                        {/* Breakdown */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="text-amber-300/90" title="Cookie Cut Score (out of 40)">
                              🍪 {sub.scores?.cookieCut ?? 0}
                            </span>
                            <span className="text-zinc-600">/</span>
                            <span className="text-pink-300/90" title="Prompt Craft Score (out of 30)">
                              ✍️ {sub.scores?.prompt ?? 0}
                            </span>
                            <span className="text-zinc-600">/</span>
                            <span className="text-cyan-300/90" title="AI Execution Score (out of 30)">
                              ⚡ {sub.scores?.aiExecution ?? 0}
                            </span>
                          </div>
                        </td>

                        {/* Signals & Traps */}
                        <td className="py-3.5 px-4">
                          {sub.isContaminated || (sub.trapCount && sub.trapCount > 0) ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-300 text-[10px] font-bold">
                              <AlertTriangle className="w-3 h-3 text-rose-400" />
                              <span>{sub.trapCount || 1} Trap Detonated</span>
                            </span>
                          ) : sub.isRawDataDump ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-bold">
                              <span>⚠️ Clue Dump</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>{sub.cuts ?? 8} Clean Signals</span>
                            </span>
                          )}
                        </td>

                        {/* R2 Status */}
                        <td className="py-3.5 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              sub.status === 'approved_r2' || (sub.status !== 'rejected' && isQual)
                                ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                                : sub.status === 'flagged'
                                ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                                : sub.status === 'rejected'
                                ? 'bg-rose-500/20 border border-rose-500/40 text-rose-300'
                                : 'bg-zinc-800 border border-zinc-700 text-zinc-400'
                            }`}
                          >
                            {sub.status === 'approved_r2' || isQual ? '🏆 QUALIFIED R2' : sub.status?.toUpperCase() || 'SUBMITTED'}
                          </span>
                        </td>

                        {/* Timestamp */}
                        <td className="py-3.5 px-4 text-zinc-400 text-[11px]">
                          {sub.formattedTime || new Date(sub.timestamp).toLocaleTimeString()}
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            {/* Inspect */}
                            <button
                              onClick={() => handleOpenInspector(sub)}
                              className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-all flex items-center gap-1 text-[11px]"
                              title="Inspect Full Dossier & Grade"
                            >
                              <Eye className="w-3.5 h-3.5 text-amber-400" />
                              <span>Inspect</span>
                            </button>

                            {/* Quick Qualify Toggle */}
                            <button
                              onClick={() => handleQuickToggleQualify(sub)}
                              className={`p-1.5 rounded-lg border transition-all ${
                                sub.status === 'approved_r2'
                                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                                  : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-200'
                              }`}
                              title="Toggle Round 2 Qualification"
                            >
                              <Award className="w-3.5 h-3.5" />
                            </button>

                            {/* Delete */}
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete submission for ${sub.teamName}?`)) {
                                  deleteSubmission(sub.id);
                                }
                              }}
                              className="p-1.5 rounded-lg bg-zinc-900/60 hover:bg-rose-950/60 border border-zinc-800 hover:border-rose-800/40 text-zinc-500 hover:text-rose-400 transition-all"
                              title="Delete Submission"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>

      {/* 4. DEEP SUBMISSION DOSSIER INSPECTOR & GRADING MODAL */}
      {inspectingSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 border border-white/[0.12] rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/[0.08] bg-zinc-900/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 p-[1px]">
                  <div className="w-full h-full bg-zinc-950 rounded-[15px] flex items-center justify-center font-display font-black text-amber-400 text-base">
                    🔍
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-display font-black text-white">
                      {inspectingSubmission.teamName}
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-[10px] font-mono text-zinc-300">
                      {inspectingSubmission.scenarioTitle}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    ID: {inspectingSubmission.id} • Submitted at {inspectingSubmission.formattedTime}
                  </div>
                </div>
              </div>

              {/* Total Score Display & Close */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Live Score</div>
                  <div className="text-2xl font-display font-black text-amber-400">
                    {Math.max(
                      0,
                      Math.min(
                        100,
                        (inspectingSubmission.baseScore ?? inspectingSubmission.totalScore) + Number(scoreAdjustment)
                      )
                    )}{' '}
                    <span className="text-xs font-mono text-zinc-500">/100</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseInspector}
                  className="w-8 h-8 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center text-sm transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex items-center gap-2 px-6 py-2.5 border-b border-white/[0.06] bg-zinc-950 text-xs font-mono">
              <button
                onClick={() => setInspectorTab('dossier')}
                className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  inspectorTab === 'dossier'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Prompt & Signals Dossier</span>
              </button>

              <button
                onClick={() => setInspectorTab('ledger')}
                className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  inspectorTab === 'ledger'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Score Ledger & Adjustments</span>
              </button>

              <button
                onClick={() => setInspectorTab('grading')}
                className={`px-3.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                  inspectorTab === 'grading'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Judge Decision & R2</span>
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              
              {/* TAB 1: PROMPT & SIGNALS DOSSIER */}
              {inspectorTab === 'dossier' && (
                <div className="space-y-5">
                  {/* Prompt Text Viewer */}
                  <div className="rounded-2xl bg-zinc-900/80 border border-white/[0.08] p-4 relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Submitted Prompt Architecture</span>
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(inspectingSubmission.promptText);
                          setCopiedPrompt(true);
                          setTimeout(() => setCopiedPrompt(false), 2000);
                        }}
                        className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[11px] font-mono text-zinc-300 transition-all"
                      >
                        {copiedPrompt ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPrompt ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="text-xs font-mono text-zinc-200 whitespace-pre-wrap leading-relaxed bg-black/60 p-3.5 rounded-xl border border-white/[0.04] max-h-56 overflow-y-auto selection:bg-pink-600">
                      {inspectingSubmission.promptText || '(Empty Prompt Submitted)'}
                    </pre>
                    <div className="flex items-center gap-4 mt-2.5 text-[11px] font-mono text-zinc-400">
                      <span>Total Words: <strong className="text-white">{inspectingSubmission.wordCount}</strong></span>
                      <span>Original Words: <strong className="text-white">{inspectingSubmission.originalWordCount}</strong></span>
                      <span>
                        Status:{' '}
                        {inspectingSubmission.isRawDataDump ? (
                          <strong className="text-rose-400 font-bold">Lazy Clue Dump (No Prompt Framing)</strong>
                        ) : (
                          <strong className="text-emerald-400 font-bold">Valid Structured Prompt</strong>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Signals vs Traps Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Clues Enclosed */}
                    <div className="rounded-2xl bg-zinc-900/60 border border-emerald-500/20 p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>SURVIVING SIGNALS ({inspectingSubmission.survivingFragments?.filter(f => f.isRelevant).length || inspectingSubmission.cuts || 0})</span>
                        </span>
                        <span>+5 PTS EACH</span>
                      </div>
                      <div className="space-y-1.5 max-h-44 overflow-y-auto">
                        {inspectingSubmission.survivingFragments && inspectingSubmission.survivingFragments.length > 0 ? (
                          inspectingSubmission.survivingFragments
                            .filter((f) => f.isRelevant)
                            .map((f, i) => (
                              <div
                                key={f.id || i}
                                className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-200"
                              >
                                ✓ {f.text}
                              </div>
                            ))
                        ) : (
                          <div className="text-[11px] font-mono text-zinc-500 italic">
                            No fragment breakdown recorded for this run.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Traps Detonated */}
                    <div className="rounded-2xl bg-zinc-900/60 border border-rose-500/20 p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-rose-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4" />
                          <span>TRAPS & NOISE DETONATED ({inspectingSubmission.trapCount || (inspectingSubmission.isContaminated ? 1 : 0)})</span>
                        </span>
                        <span>PENALTY (-10 PTS)</span>
                      </div>
                      <div className="space-y-1.5 max-h-44 overflow-y-auto">
                        {inspectingSubmission.contaminationReasons && inspectingSubmission.contaminationReasons.length > 0 ? (
                          inspectingSubmission.contaminationReasons.map((reason, i) => (
                            <div
                              key={i}
                              className="px-2.5 py-1 rounded bg-rose-500/15 border border-rose-500/30 text-[11px] font-mono text-rose-200"
                            >
                              ⚠️ {reason}
                            </div>
                          ))
                        ) : inspectingSubmission.isContaminated ? (
                          <div className="px-2.5 py-1 rounded bg-rose-500/15 border border-rose-500/30 text-[11px] font-mono text-rose-200">
                            ⚠️ Hallucination / Scope Creep trap was triggered in this run.
                          </div>
                        ) : (
                          <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Zero traps detonated. Clean run.</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* AI Output Simulation */}
                  <div className="rounded-2xl bg-zinc-900/80 border border-white/[0.08] p-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5 mb-2">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Simulated AI Core Output Response</span>
                    </span>
                    <pre className="text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed bg-black/60 p-3.5 rounded-xl border border-white/[0.04] max-h-48 overflow-y-auto selection:bg-pink-600">
                      {inspectingSubmission.aiOutput || '(No AI response recorded)'}
                    </pre>
                  </div>
                </div>
              )}

              {/* TAB 2: SCORE LEDGER & ADJUSTMENTS */}
              {inspectorTab === 'ledger' && (
                <div className="space-y-5">
                  {/* Ledger Breakdown Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.08]">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Cookie Cut Ledger</div>
                      <div className="text-xl font-display font-black text-amber-400 mt-1">
                        {inspectingSubmission.scores?.cookieCut ?? 0}{' '}
                        <span className="text-xs font-mono text-zinc-500 font-normal">/ 40</span>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 mt-1">
                        Signals score minus trap deductions
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.08]">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Prompt Craft Ledger</div>
                      <div className="text-xl font-display font-black text-pink-400 mt-1">
                        {inspectingSubmission.scores?.prompt ?? 0}{' '}
                        <span className="text-xs font-mono text-zinc-500 font-normal">/ 30</span>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 mt-1">
                        Framing, structure, directive verbs
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.08]">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">AI Execution Ledger</div>
                      <div className="text-xl font-display font-black text-cyan-400 mt-1">
                        {inspectingSubmission.scores?.aiExecution ?? 0}{' '}
                        <span className="text-xs font-mono text-zinc-500 font-normal">/ 30</span>
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 mt-1">
                        Accuracy, hallucination penalties
                      </div>
                    </div>
                  </div>

                  {/* Manual Judge Score Adjustment Tool */}
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-amber-500/30">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5" />
                      <span>Judge Score Override / Discretionary Adjustment</span>
                    </h4>
                    <p className="text-xs text-zinc-400 font-mono mb-3">
                      Award bonus points or deduct penalties for special circumstances (e.g. creative syntax, invalid bypasses). Total score updates in real-time.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono text-zinc-400 block mb-1">
                          Adjustment Points (+/-):
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            min="-40"
                            max="40"
                            value={scoreAdjustment}
                            onChange={(e) => setScoreAdjustment(Number(e.target.value))}
                            className="w-24 px-3 py-1.5 rounded-lg bg-black border border-zinc-700 text-sm font-mono font-bold text-white focus:outline-none focus:border-amber-500"
                          />
                          <button
                            type="button"
                            onClick={() => setScoreAdjustment((p) => p + 5)}
                            className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-emerald-300 font-bold"
                          >
                            +5
                          </button>
                          <button
                            type="button"
                            onClick={() => setScoreAdjustment((p) => p - 5)}
                            className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-rose-300 font-bold"
                          >
                            -5
                          </button>
                          <button
                            type="button"
                            onClick={() => setScoreAdjustment(0)}
                            className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-400"
                          >
                            Reset
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono text-zinc-400 block mb-1">
                          Reason for Adjustment (Audit Log):
                        </label>
                        <input
                          type="text"
                          value={adjustmentReason}
                          onChange={(e) => setAdjustmentReason(e.target.value)}
                          placeholder="e.g. Exceptional prompt role-play phrasing..."
                          className="w-full px-3 py-1.5 rounded-lg bg-black border border-zinc-700 text-xs font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: JUDGE DECISION & ROUND 2 */}
              {inspectorTab === 'grading' && (
                <div className="space-y-5">
                  {/* Status Selection */}
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/[0.08]">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block mb-3">
                      Round 2 Qualification Status
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: 'approved_r2', label: '🏆 Qualify for R2', color: 'border-emerald-500 text-emerald-300 bg-emerald-500/10' },
                        { id: 'submitted', label: '⏳ In Review', color: 'border-cyan-500 text-cyan-300 bg-cyan-500/10' },
                        { id: 'flagged', label: '⚠️ Flagged', color: 'border-amber-500 text-amber-300 bg-amber-500/10' },
                        { id: 'rejected', label: '❌ Rejected', color: 'border-rose-500 text-rose-300 bg-rose-500/10' },
                      ].map((st) => (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => setSelectedStatusDraft(st.id)}
                          className={`p-3 rounded-xl border text-xs font-mono font-bold transition-all text-center ${
                            selectedStatusDraft === st.id
                              ? `${st.color} shadow-lg ring-1 ring-white/20`
                              : 'border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:text-zinc-300'
                          }`}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Judge Official Notes */}
                  <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/[0.08]">
                    <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold block mb-2">
                      Evaluator Audit Notes & Justification
                    </label>
                    <textarea
                      rows={4}
                      value={judgeNotes}
                      onChange={(e) => setJudgeNotes(e.target.value)}
                      placeholder="Write feedback, rationale, and notes to explain the grading decision to higher authorities..."
                      className="w-full p-3 rounded-xl bg-black/80 border border-zinc-700 text-xs font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 leading-relaxed"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Modal Action Footer */}
            <div className="px-6 py-4 border-t border-white/[0.08] bg-zinc-900/60 flex items-center justify-between">
              <div>
                {saveSuccessNotice && (
                  <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Evaluation saved and synchronized live across all tabs!</span>
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleCloseInspector}
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono font-bold transition-all"
                >
                  Close
                </button>
                <button
                  onClick={handleSaveEvaluation}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-pink-600 hover:from-amber-400 hover:to-pink-500 text-white text-xs font-mono font-black transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.02]"
                >
                  Save & Sync Live
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
