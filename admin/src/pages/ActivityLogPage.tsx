import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  FileText,
  Search,
  Download,
  Filter,
  CheckCircle2,
  Clock,
  Shield,
  Layers,
  Users,
  Award,
  Settings
} from 'lucide-react';

export default function ActivityLogPage() {
  const { auditLogs, exportAuditLogCSV } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('ALL');

  const filteredLogs = useMemo(() => {
    return auditLogs.filter((log) => {
      const matchesSearch =
        log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.actor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = typeFilter === 'ALL' || log.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [auditLogs, searchQuery, typeFilter]);

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'ROUND':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">ROUND</span>;
      case 'TEAM':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">TEAM</span>;
      case 'SCORE':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20">SCORE</span>;
      case 'SETTINGS':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">CONFIG</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">SYSTEM</span>;
    }
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-6 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-sky-400 mb-1">
            <FileText className="w-3.5 h-3.5" />
            <span>SECURITY AUDIT TRAIL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Activity Log & Accountability Ledger
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Chronological audit records of all administrative operations, round transitions, and score adjustments.
          </p>
        </div>

        <button
          onClick={exportAuditLogCSV}
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-200 transition-colors flex items-center space-x-2 self-start sm:self-auto"
        >
          <Download className="w-3.5 h-3.5 text-sky-400" />
          <span>Export Audit Log (CSV)</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search action, target, actor, reason..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 text-xs text-white placeholder:text-slate-400 outline-none"
          />
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto text-xs font-mono">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 outline-none"
          >
            <option value="ALL">All Action Categories</option>
            <option value="ROUND">Round State Transitions</option>
            <option value="TEAM">Team Management</option>
            <option value="SCORE">Score Adjustments</option>
            <option value="SETTINGS">Configuration Changes</option>
            <option value="SYSTEM">System Events</option>
          </select>
        </div>
      </div>

      {/* Audit Log Table */}
      <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400">
              <tr>
                <th className="py-3 px-4 w-28">TIMESTAMP</th>
                <th className="py-3 px-3 w-24">TYPE</th>
                <th className="py-3 px-4">ACTION</th>
                <th className="py-3 px-4">TARGET</th>
                <th className="py-3 px-4">OPERATOR</th>
                <th className="py-3 px-4">DETAILS & JUSTIFICATION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400 font-sans">
                    No activity entries found matching your search.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-800/30">
                    <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                      {log.timestamp}
                    </td>
                    <td className="py-3 px-3">
                      {getTypeBadge(log.type)}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-200">
                      {log.action}
                    </td>
                    <td className="py-3 px-4 text-sky-300">
                      {log.target}
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {log.actor}
                    </td>
                    <td className="py-3 px-4 text-slate-300 max-w-md truncate font-sans">
                      {log.details}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
