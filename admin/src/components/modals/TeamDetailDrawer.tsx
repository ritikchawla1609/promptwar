import React from 'react';
import { TeamRecord } from '../../types/admin';
import {
  X,
  Award,
  Users,
  Building,
  Phone,
  Clock,
  History,
  CheckCircle2,
  XCircle,
  Edit2,
  Ban,
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface TeamDetailDrawerProps {
  isOpen: boolean;
  team: TeamRecord | null;
  onClose: () => void;
  onOpenScoreCorrection: (team: TeamRecord) => void;
  onToggleQualification: (codeOrId: string, round: 'R2' | 'R3', isQualified: boolean) => Promise<void>;
  onToggleDisqualification: (codeOrId: string, isDisqualified: boolean) => Promise<void>;
}

export const TeamDetailDrawer: React.FC<TeamDetailDrawerProps> = ({
  isOpen,
  team,
  onClose,
  onOpenScoreCorrection,
  onToggleQualification,
  onToggleDisqualification
}) => {
  if (!isOpen || !team) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
                {team.teamCode}
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium ${
                team.status === 'ACTIVE'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : team.status === 'PAUSED'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                  : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
              }`}>
                {team.status}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-wide">
              {team.teamName}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
          {/* Total Score Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                TOURNAMENT TOTAL SCORE
              </span>
              <div className="text-3xl font-serif font-black text-amber-400 mt-0.5">
                {team.totalScore} <span className="text-xs font-mono text-slate-400 font-normal">/ 300 pts</span>
              </div>
            </div>

            <button
              onClick={() => onOpenScoreCorrection(team)}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-[11px] flex items-center space-x-1.5 transition-colors"
            >
              <Edit2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Correct Score</span>
            </button>
          </div>

          {/* 3-Round Scorecard Cards */}
          <div className="space-y-2.5">
            <h3 className="font-mono uppercase tracking-wider text-slate-400 text-[11px]">
              Three-Round Score Breakdown
            </h3>

            <div className="grid grid-cols-3 gap-3">
              {/* Round 1 */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">ROUND 1</span>
                <div className="font-semibold text-slate-200 truncate">Dalgona Prompt</div>
                <div className="text-xl font-bold font-mono text-blue-400">
                  {team.roundScores.round1} <span className="text-[10px] text-slate-400 font-normal">/100</span>
                </div>
              </div>

              {/* Round 2 */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">ROUND 2</span>
                <div className="font-semibold text-slate-200 truncate">Blackbox</div>
                <div className="text-xl font-bold font-mono text-indigo-400">
                  {team.roundScores.round2} <span className="text-[10px] text-slate-400 font-normal">/100</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {team.qualifiedForR2 ? '✓ Qualified' : 'Locked'}
                </div>
              </div>

              {/* Round 3 */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">ROUND 3</span>
                <div className="font-semibold text-slate-200 truncate">Frame Zero</div>
                <div className="text-xl font-bold font-mono text-amber-400">
                  {team.roundScores.round3} <span className="text-[10px] text-slate-400 font-normal">/100</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400">
                  {team.qualifiedForR3 ? '✓ Qualified' : 'Locked'}
                </div>
              </div>
            </div>
          </div>

          {/* Roster & Institutional Details */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
            <h3 className="font-mono uppercase tracking-wider text-slate-400 text-[11px]">
              Team Information & Roster
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-400" /> LEADER
                </span>
                <p className="font-medium text-slate-200 mt-0.5">{team.leaderName}</p>
                {team.leaderContact && (
                  <p className="text-slate-400 text-[11px] font-mono">{team.leaderContact}</p>
                )}
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Building className="w-3 h-3 text-purple-400" /> INSTITUTION
                </span>
                <p className="font-medium text-slate-200 mt-0.5">{team.college}</p>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono text-slate-400">ALL REGISTERED MEMBERS ({team.members.length})</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {team.members.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono text-[11px]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Prompts History Timeline */}
          {team.history && team.history.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-mono uppercase tracking-wider text-slate-400 text-[11px] flex items-center space-x-1.5">
                <History className="w-3.5 h-3.5 text-blue-400" />
                <span>Prompt Submissions History</span>
              </h3>

              <div className="space-y-2">
                {team.history.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="font-bold text-blue-300">
                        {h.round} {h.takeNumber ? `· Take #${h.takeNumber}` : ''}
                      </span>
                      <span>Score: <strong className="text-amber-400 font-bold">{h.score}</strong>/100 · {h.timestamp}</span>
                    </div>
                    <p className="text-slate-200 italic font-sans leading-relaxed">
                      "{h.prompt}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Administrative Qualification Toggles */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
            <h3 className="font-mono uppercase tracking-wider text-slate-400 text-[11px]">
              Round Qualification Gates
            </h3>

            <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
              <div>
                <span className="font-medium text-slate-200">Qualify for Round 2 (Operation Blackbox)</span>
                <p className="text-[11px] text-slate-400">Unlocks participant access to Round 2</p>
              </div>
              <button
                onClick={() => onToggleQualification(team.teamCode, 'R2', !team.qualifiedForR2)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border transition-colors ${
                  team.qualifiedForR2
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {team.qualifiedForR2 ? 'QUALIFIED ✓' : 'LOCKED'}
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <span className="font-medium text-slate-200">Qualify for Round 3 (Frame Zero)</span>
                <p className="text-[11px] text-slate-400">Unlocks participant access to Round 3</p>
              </div>
              <button
                onClick={() => onToggleQualification(team.teamCode, 'R3', !team.qualifiedForR3)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold border transition-colors ${
                  team.qualifiedForR3
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                {team.qualifiedForR3 ? 'QUALIFIED ✓' : 'LOCKED'}
              </button>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <button
            onClick={() => onToggleDisqualification(team.teamCode, team.status !== 'DISQUALIFIED')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium border transition-colors flex items-center space-x-1.5 ${
              team.status === 'DISQUALIFIED'
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20'
                : 'bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20'
            }`}
          >
            <Ban className="w-3.5 h-3.5" />
            <span>{team.status === 'DISQUALIFIED' ? 'Reinstate Team' : 'Disqualify Team'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
