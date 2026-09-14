import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Shield,
  Activity,
  Target,
  Users,
  Monitor,
  Layers,
  Trophy,
  BarChart2,
  ChevronDown,
  Database,
  MessageSquare,
  History,
  FileText,
  HeartPulse,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  const [isMoreExpanded, setIsMoreExpanded] = useState(false);

  const navItemClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-gradient-to-r from-admin-blue/10 to-transparent border-l-2 border-l-admin-blue text-white'
        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border-l-2 border-transparent'
    }`;

  const subItemClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 pl-11 py-2 text-xs font-medium transition-colors ${
      isActive
        ? 'bg-gradient-to-r from-admin-blue/10 to-transparent border-l-2 border-l-admin-blue text-white'
        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 border-l-2 border-transparent'
    }`;

  return (
    <aside className="w-64 h-full bg-admin-panel border-r border-gray-800 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-1">
          <Shield className="w-6 h-6 text-admin-red" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-admin-blue to-admin-uv bg-clip-text text-transparent">
            PROMPT WAR
          </h1>
        </div>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-mono">
          Command Center
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-2 flex flex-col">
        <NavLink to="/" className={navItemClasses} end>
          <Activity className="w-4 h-4" />
          OVERVIEW
        </NavLink>
        <NavLink to="/event" className={navItemClasses}>
          <Target className="w-4 h-4" />
          EVENT
        </NavLink>
        <NavLink to="/teams" className={navItemClasses}>
          <Users className="w-4 h-4" />
          TEAMS
        </NavLink>
        <NavLink to="/control" className={navItemClasses}>
          <Monitor className="w-4 h-4" />
          CONTROL
        </NavLink>
        <NavLink to="/rounds" className={navItemClasses}>
          <Layers className="w-4 h-4" />
          ROUNDS
        </NavLink>
        <NavLink to="/leaderboard" className={navItemClasses}>
          <Trophy className="w-4 h-4" />
          LEADERBOARD
        </NavLink>
        <NavLink to="/analytics" className={navItemClasses}>
          <BarChart2 className="w-4 h-4" />
          ANALYTICS
        </NavLink>

        <div className="mt-auto pt-4 border-t border-gray-800 flex flex-col">
          <button
            onClick={() => setIsMoreExpanded(!isMoreExpanded)}
            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-400 hover:text-gray-200 hover:bg-gray-800/50 transition-colors w-full border-l-2 border-transparent"
          >
            <div className="flex items-center gap-3">
              <Settings className="w-4 h-4 invisible" />
              MORE
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isMoreExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {isMoreExpanded && (
            <div className="flex flex-col pb-4">
              <NavLink to="/more/hud" className={subItemClasses}>
                <Monitor className="w-4 h-4" />
                HUD / GUI
              </NavLink>
              <NavLink to="/more/data" className={subItemClasses}>
                <Database className="w-4 h-4" />
                DATA CENTER
              </NavLink>
              <NavLink to="/more/reviews" className={subItemClasses}>
                <MessageSquare className="w-4 h-4" />
                REVIEWS
              </NavLink>
              <NavLink to="/more/history" className={subItemClasses}>
                <History className="w-4 h-4" />
                EVENT HISTORY
              </NavLink>
              <NavLink to="/more/audit" className={subItemClasses}>
                <FileText className="w-4 h-4" />
                AUDIT LOG
              </NavLink>
              <NavLink to="/more/health" className={subItemClasses}>
                <HeartPulse className="w-4 h-4" />
                SYSTEM HEALTH
              </NavLink>
              <NavLink to="/more/settings" className={subItemClasses}>
                <Settings className="w-4 h-4" />
                SETTINGS
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
