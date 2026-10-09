import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import { TeamRecord } from '../types/admin';
import {
  Users,
  Search,
  Filter,
  UserPlus,
  Edit2,
  Trash2,
  Award,
  ChevronRight,
  Download,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { TeamDetailDrawer } from '../components/modals/TeamDetailDrawer';
import { ScoreCorrectionModal } from '../components/modals/ScoreCorrectionModal';
import { TeamModal } from '../components/modals/TeamModal';
import { ConfirmDialog } from '../components/modals/ConfirmDialog';

export default function TeamsPage() {
  const {
    teams,
    addTeam,
    updateTeam,
    deleteTeam,
    adjustScore,
    toggleQualification
  } = useAdmin();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [roundFilter, setRoundFilter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'total' | 'r1' | 'r2' | 'r3' | 'name'>('total');

  // Modal & Drawer State
  const [selectedTeamForDrawer, setSelectedTeamForDrawer] = useState<TeamRecord | null>(null);
  const [selectedTeamForScore, setSelectedTeamForScore] = useState<TeamRecord | null>(null);
  const [editingTeam, setEditingTeam] = useState<TeamRecord | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [deletingTeam, setDeletingTeam] = useState<TeamRecord | null>(null);

  // Filtered & Sorted Teams
  const filteredTeams = useMemo(() => {
    return teams
      .filter((t) => {
        const matchesQuery =
          t.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.teamCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.leaderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.college.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === 'ALL' || t.status === statusFilter;
        const matchesRound = roundFilter === 'ALL' || t.currentRound === roundFilter;

        return matchesQuery && matchesStatus && matchesRound;
      })
      .sort((a, b) => {
        if (sortBy === 'total') return b.totalScore - a.totalScore;
        if (sortBy === 'r1') return b.roundScores.round1 - a.roundScores.round1;
        if (sortBy === 'r2') return b.roundScores.round2 - a.roundScores.round2;
        if (sortBy === 'r3') return b.roundScores.round3 - a.roundScores.round3;
        if (sortBy === 'name') return a.teamName.localeCompare(b.teamName);
        return 0;
      });
  }, [teams, searchQuery, statusFilter, roundFilter, sortBy]);

  const handleExportCSV = () => {
    const headers = ['Team Code', 'Team Name', 'Leader', 'Contact', 'College', 'R1 Score', 'R2 Score', 'R3 Score', 'Total', 'Status', 'R2 Qualified', 'R3 Qualified'];
    const rows = filteredTeams.map(t => [
      `"${t.teamCode}"`,
      `"${t.teamName}"`,
      `"${t.leaderName}"`,
      `"${t.leaderContact}"`,
      `"${t.college}"`,
      t.roundScores.round1,
      t.roundScores.round2,
      t.roundScores.round3,
      t.totalScore,
      `"${t.status}"`,
      t.qualifiedForR2 ? 'YES' : 'NO',
      t.qualifiedForR3 ? 'YES' : 'NO'
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `promptwar_teams_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-6 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
            <Users className="w-3.5 h-3.5" />
            <span>PARTICIPANT ROSTER & PROGRESSION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Team Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Manage registrations, track three-round scores, audit prompt histories, and administer qualifications.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center space-x-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setIsRegisterModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold shadow-md shadow-blue-600/20 transition-all flex items-center space-x-2 active:scale-95"
          >
            <UserPlus className="w-4 h-4" />
            <span>Register Walk-In</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search team, code, leader, college..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-xs text-white placeholder:text-slate-400 outline-none"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto text-xs font-mono">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 outline-none"
          >
            <option value="ALL">All Statuses</option>
            <option value="ACTIVE">Active Only</option>
            <option value="PAUSED">Paused</option>
            <option value="OFFLINE">Offline</option>
            <option value="COMPLETED">Completed</option>
            <option value="DISQUALIFIED">Disqualified</option>
          </select>

          <select
            value={roundFilter}
            onChange={(e) => setRoundFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 outline-none"
          >
            <option value="ALL">All Rounds</option>
            <option value="ROUND_1">Round 1 (Dalgona)</option>
            <option value="ROUND_2">Round 2 (Blackbox)</option>
            <option value="ROUND_3">Round 3 (Frame Zero)</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 outline-none"
          >
            <option value="total">Sort: Total Score</option>
            <option value="r1">Sort: Round 1 Score</option>
            <option value="r2">Sort: Round 2 Score</option>
            <option value="r3">Sort: Round 3 Score</option>
            <option value="name">Sort: Team Name</option>
          </select>
        </div>
      </div>

      {/* Main Teams Table */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-3 px-4">TEAM / CODE</th>
                <th className="py-3 px-4">LEADER & COLLEGE</th>
                <th className="py-3 px-4">ROUND PROGRESS</th>
                <th className="py-3 px-3 text-center">R1</th>
                <th className="py-3 px-3 text-center">R2</th>
                <th className="py-3 px-3 text-center">R3</th>
                <th className="py-3 px-4 text-right">TOTAL</th>
                <th className="py-3 px-4">STATUS</th>
                <th className="py-3 px-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredTeams.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center text-slate-400 font-sans">
                    No teams found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredTeams.map((team) => (
                  <tr
                    key={team.id}
                    onClick={() => setSelectedTeamForDrawer(team)}
                    className="hover:bg-slate-800/40 cursor-pointer transition-colors group"
                  >
                    {/* Team & Code */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white font-sans text-sm group-hover:text-blue-400 transition-colors">
                        {team.teamName}
                      </div>
                      <div className="text-[11px] text-blue-400 font-mono mt-0.5">
                        {team.teamCode}
                      </div>
                    </td>

                    {/* Leader & College */}
                    <td className="py-3.5 px-4 font-sans">
                      <div className="text-slate-200 font-medium">{team.leaderName}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[180px]">
                        {team.college}
                      </div>
                    </td>

                    {/* Round & Progress Bar */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center justify-between text-[11px] text-slate-300 mb-1">
                        <span>{team.currentRound} ({team.currentPhase})</span>
                        <span>{team.progressPercentage}%</span>
                      </div>
                      <div className="h-1.5 w-32 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${team.progressPercentage}%` }}
                        />
                      </div>
                    </td>

                    {/* R1 Score */}
                    <td className="py-3.5 px-3 text-center font-bold text-slate-300">
                      {team.roundScores.round1}
                    </td>

                    {/* R2 Score */}
                    <td className="py-3.5 px-3 text-center">
                      <span className={`font-bold ${team.qualifiedForR2 ? 'text-indigo-400' : 'text-slate-400'}`}>
                        {team.roundScores.round2}
                      </span>
                    </td>

                    {/* R3 Score */}
                    <td className="py-3.5 px-3 text-center">
                      <span className={`font-bold ${team.qualifiedForR3 ? 'text-amber-400' : 'text-slate-400'}`}>
                        {team.roundScores.round3}
                      </span>
                    </td>

                    {/* Total Score */}
                    <td className="py-3.5 px-4 text-right font-black text-sm text-amber-400">
                      {team.totalScore}
                    </td>

                    {/* Status Pill */}
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        team.status === 'ACTIVE'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : team.status === 'PAUSED'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          : team.status === 'DISQUALIFIED'
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {team.status}
                      </span>
                    </td>

                    {/* Row Actions */}
                    <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end space-x-1">
                        <button
                          onClick={() => setSelectedTeamForScore(team)}
                          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
                          title="Score Correction"
                        >
                          <Award className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => setEditingTeam(team)}
                          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
                          title="Edit Team"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => setDeletingTeam(team)}
                          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
                          title="Delete Team"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => setSelectedTeamForDrawer(team)}
                          className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                          title="Inspect Details"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals & Slide-over Drawer */}
      <TeamDetailDrawer
        isOpen={Boolean(selectedTeamForDrawer)}
        team={selectedTeamForDrawer}
        onClose={() => setSelectedTeamForDrawer(null)}
        onOpenScoreCorrection={(team) => {
          setSelectedTeamForScore(team);
        }}
        onToggleQualification={async (codeOrId, round, isQualified) => {
          await toggleQualification(codeOrId, round, isQualified);
        }}
        onToggleDisqualification={async (codeOrId, isDisqualified) => {
          await updateTeam(codeOrId, { status: isDisqualified ? 'DISQUALIFIED' : 'ACTIVE' });
        }}
      />

      <ScoreCorrectionModal
        isOpen={Boolean(selectedTeamForScore)}
        team={selectedTeamForScore}
        onClose={() => setSelectedTeamForScore(null)}
        onSave={async (codeOrId, round, newScore, reason) => {
          await adjustScore(codeOrId, round, newScore, reason);
        }}
      />

      <TeamModal
        isOpen={isRegisterModalOpen || Boolean(editingTeam)}
        team={editingTeam}
        onClose={() => {
          setIsRegisterModalOpen(false);
          setEditingTeam(null);
        }}
        onSave={async (data) => {
          if (editingTeam) {
            await updateTeam(editingTeam.teamCode, data);
          } else {
            await addTeam(data);
          }
        }}
      />

      <ConfirmDialog
        isOpen={Boolean(deletingTeam)}
        title={`Delete ${deletingTeam?.teamName}?`}
        description={`This will permanently remove team ${deletingTeam?.teamCode} from all three rounds and tournament leaderboards.`}
        confirmLabel="Permanently Delete"
        confirmVariant="danger"
        onConfirm={async () => {
          if (deletingTeam) {
            await deleteTeam(deletingTeam.teamCode);
            setDeletingTeam(null);
          }
        }}
        onCancel={() => setDeletingTeam(null)}
      />
    </div>
  );
}
