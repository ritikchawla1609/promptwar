import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import { TeamRecord } from '../types/admin';
import {
  Trophy,
  Download,
  Lock,
  Unlock,
  Search,
  Filter,
  Edit2,
  Award,
  Crown,
  Medal,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { ScoreCorrectionModal } from '../components/modals/ScoreCorrectionModal';

export default function LeaderboardPage() {
  const {
    teams,
    settings,
    updateSettings,
    adjustScore,
    addAuditLog
  } = useAdmin();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoundFilter, setSelectedRoundFilter] = useState<'ALL' | 'R1' | 'R2' | 'R3'>('ALL');
  const [editingScoreTeam, setEditingScoreTeam] = useState<TeamRecord | null>(null);

  // Compute Master Leaderboard with ranking and ties
  const rankedTeams = useMemo(() => {
    const list = [...teams]
      .filter((t) => {
        const matchesQuery =
          t.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.teamCode.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesQuery;
      })
      .sort((a, b) => b.totalScore - a.totalScore);

    return list.map((team, idx) => ({
      ...team,
      rank: idx + 1
    }));
  }, [teams, searchQuery]);

  const handleToggleFreeze = () => {
    const nextVal = !settings.leaderboardFrozen;
    updateSettings({ leaderboardFrozen: nextVal });
    addAuditLog(
      nextVal ? 'LEADERBOARD_FROZEN' : 'LEADERBOARD_UNFROZEN',
      'Public Display',
      `Leaderboard was ${nextVal ? 'frozen for climax' : 'unfrozen for live viewing'}.`,
      'SETTINGS'
    );
  };

  const handleExportCSV = () => {
    const headers = ['Rank', 'Team Code', 'Team Name', 'College', 'R1 Score', 'R2 Score', 'R3 Score', 'Total Score', 'Status'];
    const rows = rankedTeams.map(t => [
      t.rank,
      `"${t.teamCode}"`,
      `"${t.teamName}"`,
      `"${t.college}"`,
      t.roundScores.round1,
      t.roundScores.round2,
      t.roundScores.round3,
      t.totalScore,
      `"${t.status}"`
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `promptwar_master_leaderboard_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const topThree = rankedTeams.slice(0, 3);

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 select-none">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
            <Trophy className="w-3.5 h-3.5" />
            <span>OFFICIAL TOURNAMENT RANKINGS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Unified Master Leaderboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Combined rankings aggregating Prompt Parasite (30%), Operation Blackbox (35%), and Frame Zero (35%).
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleToggleFreeze}
            className={`px-3.5 py-2.5 rounded-xl border text-xs font-mono font-medium flex items-center space-x-2 transition-colors ${
              settings.leaderboardFrozen
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
            }`}
          >
            {settings.leaderboardFrozen ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
            <span>{settings.leaderboardFrozen ? 'Leaderboard Frozen' : 'Live Public Feed'}</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center space-x-2 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Top 3 Podium Highlights */}
      {topThree.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 2nd Place */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 relative overflow-hidden order-2 md:order-1">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700">
                RANK 02 · SILVER
              </span>
              <Medal className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{topThree[1].teamName}</h3>
              <p className="text-xs text-slate-400 font-mono">{topThree[1].teamCode} · {topThree[1].college}</p>
            </div>
            <div className="text-2xl font-bold font-mono text-slate-200">
              {topThree[1].totalScore} <span className="text-xs font-normal text-slate-400">pts</span>
            </div>
          </div>

          {/* 1st Place */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/40 space-y-3 relative overflow-hidden order-1 md:order-2 shadow-xl shadow-amber-500/5">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center space-x-1">
                <Crown className="w-3 h-3 text-amber-400" />
                <span>RANK 01 · CHAMPION</span>
              </span>
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{topThree[0].teamName}</h3>
              <p className="text-xs text-slate-400 font-mono">{topThree[0].teamCode} · {topThree[0].college}</p>
            </div>
            <div className="text-3xl font-black font-mono text-amber-400">
              {topThree[0].totalScore} <span className="text-xs font-normal text-slate-400">pts</span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 relative overflow-hidden order-3">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-900/30 text-amber-500 border border-amber-800/50">
                RANK 03 · BRONZE
              </span>
              <Medal className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{topThree[2].teamName}</h3>
              <p className="text-xs text-slate-400 font-mono">{topThree[2].teamCode} · {topThree[2].college}</p>
            </div>
            <div className="text-2xl font-bold font-mono text-amber-500">
              {topThree[2].totalScore} <span className="text-xs font-normal text-slate-400">pts</span>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ranked teams..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-xs text-white placeholder:text-slate-400 outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <span>Tie-breaker policy:</span>
          <span className="text-slate-200 font-bold">Highest Total &gt; R3 Weight &gt; Submission Timestamp</span>
        </div>
      </div>

      {/* Full Leaderboard Table */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-3.5 px-4 text-center w-16">RANK</th>
                <th className="py-3.5 px-4">TEAM & CODE</th>
                <th className="py-3.5 px-4">COLLEGE / INSTITUTION</th>
                <th className="py-3.5 px-4 text-center">R1 (PARASITE)</th>
                <th className="py-3.5 px-4 text-center">R2 (BLACKBOX)</th>
                <th className="py-3.5 px-4 text-center">R3 (FRAME ZERO)</th>
                <th className="py-3.5 px-4 text-right">TOTAL SCORE</th>
                <th className="py-3.5 px-4 text-right">CORRECTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {rankedTeams.map((team) => {
                const isGold = team.rank === 1;
                const isSilver = team.rank === 2;
                const isBronze = team.rank === 3;

                return (
                  <tr
                    key={team.id}
                    className={`hover:bg-slate-800/40 transition-colors ${
                      isGold ? 'bg-amber-500/5' : isSilver ? 'bg-slate-800/20' : isBronze ? 'bg-amber-900/10' : ''
                    }`}
                  >
                    {/* Rank Badge */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg font-bold ${
                        isGold
                          ? 'bg-amber-500 text-slate-950 font-black'
                          : isSilver
                          ? 'bg-slate-300 text-slate-950 font-black'
                          : isBronze
                          ? 'bg-amber-700 text-white font-bold'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        #{team.rank}
                      </span>
                    </td>

                    {/* Team & Code */}
                    <td className="py-3.5 px-4 font-sans">
                      <div className="font-bold text-white text-sm">{team.teamName}</div>
                      <div className="text-[11px] font-mono text-blue-400">{team.teamCode}</div>
                    </td>

                    {/* College */}
                    <td className="py-3.5 px-4 font-sans text-slate-300">
                      {team.college}
                    </td>

                    {/* R1 */}
                    <td className="py-3.5 px-4 text-center font-bold text-slate-300">
                      {team.roundScores.round1}
                    </td>

                    {/* R2 */}
                    <td className="py-3.5 px-4 text-center font-bold text-indigo-400">
                      {team.roundScores.round2}
                    </td>

                    {/* R3 */}
                    <td className="py-3.5 px-4 text-center font-bold text-rose-400">
                      {team.roundScores.round3}
                    </td>

                    {/* Total */}
                    <td className="py-3.5 px-4 text-right font-black text-base text-amber-400">
                      {team.totalScore}
                    </td>

                    {/* Manual Score Override */}
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setEditingScoreTeam(team)}
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 text-[11px] font-mono border border-slate-700 transition-colors inline-flex items-center space-x-1"
                        title="Override score with required justification"
                      >
                        <Edit2 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Score Correction Modal */}
      <ScoreCorrectionModal
        isOpen={Boolean(editingScoreTeam)}
        team={editingScoreTeam}
        onClose={() => setEditingScoreTeam(null)}
        onSave={async (codeOrId, round, newScore, reason) => {
          await adjustScore(codeOrId, round, newScore, reason);
        }}
      />
    </div>
  );
}
