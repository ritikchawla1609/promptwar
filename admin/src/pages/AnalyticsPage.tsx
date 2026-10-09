import React, { useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  BarChart3,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Layers,
  Sparkles
} from 'lucide-react';

export default function AnalyticsPage() {
  const { teams } = useAdmin();

  // Metrics computation from real teams data
  const totalTeams = teams.length;
  const r1Scores = teams.map(t => t.roundScores.round1).filter(s => s > 0);
  const r2Scores = teams.map(t => t.roundScores.round2).filter(s => s > 0);
  const r3Scores = teams.map(t => t.roundScores.round3).filter(s => s > 0);

  const calcAverage = (arr: number[]) => (arr.length > 0 ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1) : '0');
  const calcMedian = (arr: number[]) => {
    if (arr.length === 0) return '0';
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return (sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2).toFixed(1);
  };

  const avgR1 = calcAverage(r1Scores);
  const avgR2 = calcAverage(r2Scores);
  const avgR3 = calcAverage(r3Scores);

  const medR1 = calcMedian(r1Scores);
  const medR2 = calcMedian(r2Scores);
  const medR3 = calcMedian(r3Scores);

  // Score distribution breakdown (Total scores)
  const scoreBuckets = useMemo(() => {
    let b1 = 0; // < 100
    let b2 = 0; // 100 - 180
    let b3 = 0; // 180 - 240
    let b4 = 0; // > 240
    teams.forEach(t => {
      if (t.totalScore >= 240) b4++;
      else if (t.totalScore >= 180) b3++;
      else if (t.totalScore >= 100) b2++;
      else b1++;
    });
    return [
      { label: 'Master Tier (240 - 300 pts)', count: b4, color: 'bg-emerald-500' },
      { label: 'Advanced Tier (180 - 239 pts)', count: b3, color: 'bg-blue-500' },
      { label: 'Intermediate Tier (100 - 179 pts)', count: b2, color: 'bg-amber-500' },
      { label: 'Developing Tier (< 100 pts)', count: b1, color: 'bg-slate-600' },
    ];
  }, [teams]);

  // Lagging / unsubmitted teams alert list
  const laggingTeams = teams.filter(t => t.status === 'PAUSED' || t.status === 'OFFLINE' || t.progressPercentage < 40);

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-purple-400 mb-1">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>ARENA PERFORMANCE INTELLIGENCE</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Competition Analytics & Insights
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
          Real statistical indicators computed directly from registered participant records and scores.
        </p>
      </div>

      {/* Top Statistical Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">ROUND 1 AVG / MED</span>
          <div className="text-2xl font-bold font-mono text-amber-400">
            {avgR1} <span className="text-xs font-normal text-slate-400">/ {medR1} med</span>
          </div>
          <div className="text-[11px] text-slate-400">Dalgona Shape Challenge</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">ROUND 2 AVG / MED</span>
          <div className="text-2xl font-bold font-mono text-indigo-400">
            {avgR2} <span className="text-xs font-normal text-slate-400">/ {medR2} med</span>
          </div>
          <div className="text-[11px] text-slate-400">Operation Blackbox</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">ROUND 3 AVG / MED</span>
          <div className="text-2xl font-bold font-mono text-rose-400">
            {avgR3} <span className="text-xs font-normal text-slate-400">/ {medR3} med</span>
          </div>
          <div className="text-[11px] text-slate-400">Frame Zero Director's Cut</div>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
          <span className="text-[10px] font-mono text-slate-400 uppercase">R2/R3 QUALIFICATION RATE</span>
          <div className="text-2xl font-bold font-mono text-emerald-400">
            {totalTeams > 0 ? Math.round((teams.filter(t => t.qualifiedForR2).length / totalTeams) * 100) : 0}%
          </div>
          <div className="text-[11px] text-slate-400">{teams.filter(t => t.qualifiedForR2).length} of {totalTeams} qualified</div>
        </div>
      </div>

      {/* Score Tier Distribution Histogram */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Tournament Score Tier Distribution</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">{totalTeams} Teams Sampled</span>
        </div>

        <div className="space-y-3 pt-2">
          {scoreBuckets.map((bucket, idx) => {
            const pct = totalTeams > 0 ? Math.round((bucket.count / totalTeams) * 100) : 0;
            return (
              <div key={idx} className="space-y-1 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-300">
                  <span>{bucket.label}</span>
                  <span>
                    <strong className="text-white">{bucket.count} teams</strong> ({pct}%)
                  </span>
                </div>
                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full ${bucket.color} rounded-full transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lagging & At-Risk Teams Watchlist */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Operational Alert Watchlist (Teams Requiring Floor Assistance)</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">{laggingTeams.length} Teams Detected</span>
        </div>

        {laggingTeams.length === 0 ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
            ✓ All registered teams are active and progressing normally.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {laggingTeams.map(t => (
              <div
                key={t.id}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono"
              >
                <div>
                  <div className="font-bold text-white font-sans">{t.teamName}</div>
                  <div className="text-[11px] text-slate-400">
                    {t.teamCode} · Leader: {t.leaderName} ({t.leaderContact})
                  </div>
                </div>

                <div className="text-right">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    t.status === 'PAUSED' ? 'bg-amber-500/10 text-amber-300' : 'bg-rose-500/10 text-rose-300'
                  }`}>
                    {t.status}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Progress: {t.progressPercentage}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
