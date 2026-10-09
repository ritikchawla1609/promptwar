import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Radio,
  Layers,
  Users,
  Trophy,
  BarChart3,
  Settings,
  FileText,
  Shield,
  CircleDot
} from 'lucide-react';
import { useAdmin } from '../../context/AdminContext';

export const Sidebar: React.FC = () => {
  const { eventStatus, activeRound } = useAdmin();

  const navItemClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
      isActive
        ? 'bg-blue-600/15 text-blue-400 font-semibold border border-blue-500/20 shadow-sm'
        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
    }`;

  return (
    <aside className="w-64 h-full bg-[#0b0f19] border-r border-slate-800/80 flex flex-col justify-between select-none">
      <div className="p-5 space-y-6">
        {/* Brand Header */}
        <div className="flex items-center space-x-3 pb-2 border-b border-slate-800/60">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-serif font-black text-lg">
            PW
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-white">PROMPT WAR</h1>
            <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
              Unified Admin Portal
            </p>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-6">
          {/* Section: EVENT */}
          <div className="space-y-1.5">
            <div className="px-3 text-[10px] uppercase font-mono tracking-widest text-slate-400 font-semibold">
              EVENT OPERATIONS
            </div>

            <NavLink to="/" className={navItemClasses} end>
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview</span>
            </NavLink>

            <NavLink to="/control" className={navItemClasses}>
              <Radio className="w-4 h-4 text-emerald-400" />
              <span>Live Control</span>
            </NavLink>

            <NavLink to="/rounds" className={navItemClasses}>
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Rounds</span>
            </NavLink>

            <NavLink to="/teams" className={navItemClasses}>
              <Users className="w-4 h-4 text-blue-400" />
              <span>Teams</span>
            </NavLink>

            <NavLink to="/leaderboard" className={navItemClasses}>
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>Leaderboard</span>
            </NavLink>
          </div>

          {/* Section: OPERATIONS */}
          <div className="space-y-1.5">
            <div className="px-3 text-[10px] uppercase font-mono tracking-widest text-slate-400 font-semibold">
              MANAGEMENT & AUDIT
            </div>

            <NavLink to="/analytics" className={navItemClasses}>
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span>Analytics</span>
            </NavLink>

            <NavLink to="/settings" className={navItemClasses}>
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Event Settings</span>
            </NavLink>

            <NavLink to="/audit" className={navItemClasses}>
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Activity Log</span>
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Footer Info Pill */}
      <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400">STATUS:</span>
            <span className={`font-bold ${
              eventStatus === 'LIVE' ? 'text-emerald-400' : 'text-amber-400'
            }`}>
              {eventStatus}
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-400">ACTIVE ROUND:</span>
            <span className="text-slate-200 font-medium truncate max-w-[90px]">
              {activeRound.replace('_', ' ')}
            </span>
          </div>
        </div>

        <div className="text-center text-[10px] text-slate-400 font-mono mt-3">
          Prompt War v2.0 · Three-Round System
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
