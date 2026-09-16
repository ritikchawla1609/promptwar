import React from 'react';
import {
  Users,
  Activity,
  Pause,
  WifiOff,
  CheckCircle,
  Zap,
  ShieldAlert,
  AlertTriangle,
  Play,
  Trophy,
  Activity as ActivityIcon
} from 'lucide-react';

const OverviewPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6 h-full overflow-y-auto bg-[#0a0f18] text-gray-100 font-sans">
      {/* 1. EVENT STATUS HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-2xl font-bold tracking-wider">PROMPT WAR 2026</h1>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#10b981]/10 text-[#10b981] rounded-full text-xs font-bold border border-[#10b981]/20">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              LIVE
            </div>
          </div>
          <div className="text-gray-400 font-medium tracking-wide">
            ROUND 3: THE HOUSE THAT REMEMBERS
          </div>
        </div>

        <div className="bg-[#111827] rounded-2xl border border-[#3b82f6]/30 px-8 py-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <div className="text-5xl font-mono font-bold text-[#3b82f6] tracking-wider text-center">
            27:42
          </div>
          <div className="text-xs text-[#3b82f6]/70 uppercase tracking-widest text-center mt-1">
            Global Timer
          </div>
        </div>
      </div>

      {/* 2. STAT CARDS ROW */}
      <div className="grid grid-cols-5 gap-4">
        {/* Registered */}
        <div className="bg-[#111827] rounded-xl border border-gray-800 border-t-2 border-t-[#3b82f6] p-5 relative overflow-hidden flex flex-col justify-between h-28">
          <Users className="absolute top-4 right-4 w-12 h-12 text-[#3b82f6] opacity-20" />
          <div className="text-xs uppercase text-gray-500 font-bold tracking-wider">Registered Teams</div>
          <div className="text-3xl font-bold text-white">48</div>
        </div>

        {/* Active Now */}
        <div className="bg-[#111827] rounded-xl border border-gray-800 border-t-2 border-t-[#10b981] p-5 relative overflow-hidden flex flex-col justify-between h-28">
          <Activity className="absolute top-4 right-4 w-12 h-12 text-[#10b981] opacity-20" />
          <div className="text-xs uppercase text-gray-500 font-bold tracking-wider">Active Now</div>
          <div className="text-3xl font-bold text-white">42</div>
        </div>

        {/* Paused */}
        <div className="bg-[#111827] rounded-xl border border-gray-800 border-t-2 border-t-[#f97316] p-5 relative overflow-hidden flex flex-col justify-between h-28">
          <Pause className="absolute top-4 right-4 w-12 h-12 text-[#f97316] opacity-20" />
          <div className="text-xs uppercase text-gray-500 font-bold tracking-wider">Paused</div>
          <div className="text-3xl font-bold text-[#f97316]">4</div>
        </div>

        {/* Offline */}
        <div className="bg-[#111827] rounded-xl border border-gray-800 border-t-2 border-t-[#ef4444] p-5 relative overflow-hidden flex flex-col justify-between h-28">
          <WifiOff className="absolute top-4 right-4 w-12 h-12 text-[#ef4444] opacity-20" />
          <div className="text-xs uppercase text-gray-500 font-bold tracking-wider">Offline</div>
          <div className="text-3xl font-bold text-[#ef4444]">2</div>
        </div>

        {/* Completed */}
        <div className="bg-[#111827] rounded-xl border border-gray-800 border-t-2 border-t-[#a855f7] p-5 relative overflow-hidden flex flex-col justify-between h-28">
          <CheckCircle className="absolute top-4 right-4 w-12 h-12 text-[#a855f7] opacity-20" />
          <div className="text-xs uppercase text-gray-500 font-bold tracking-wider">Completed</div>
          <div className="text-3xl font-bold text-[#a855f7]">0</div>
        </div>
      </div>

      {/* 3. TWO COLUMN LAYOUT */}
      <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
        {/* LEFT COLUMN */}
        <div className="col-span-7 flex flex-col gap-6">
          {/* QUICK ACTIONS */}
          <div className="bg-[#111827] rounded-xl border border-gray-800 p-6 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#f97316]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-300">Quick Actions</h2>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/50 hover:bg-[#f97316]/30 transition-colors">
                  <Pause className="w-4 h-4" />
                  PAUSE EVENT
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/50 hover:bg-[#10b981]/30 transition-colors">
                  <Play className="w-4 h-4" />
                  RESUME EVENT
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/50 hover:bg-[#3b82f6]/30 transition-colors">
                  <Trophy className="w-4 h-4" />
                  OPEN LEADERBOARD
                </button>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/50 hover:bg-[#ef4444]/30 transition-colors">
                  <ShieldAlert className="w-4 h-4" />
                  END ROUND
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/50 hover:bg-[#ef4444]/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></div>
                  EMERGENCY STOP
                </button>
              </div>
            </div>
          </div>

          {/* CURRENT PHASE */}
          <div className="bg-[#111827] rounded-xl border border-gray-800 p-6 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold tracking-wide text-white mb-6 text-center">
              PHASE 4: FORENSICS
            </h2>
            
            <div className="w-full bg-gray-800 rounded-full h-4 mb-3 border border-gray-700 overflow-hidden relative">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-[#3b82f6] to-[#a855f7]"
                style={{ width: '64%' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white mix-blend-difference">
                64%
              </div>
            </div>
            
            <div className="text-xs text-gray-500 text-center mb-8">
              Average team progress across all active teams
            </div>
            
            <div className="flex justify-between items-center px-4 py-3 bg-[#0a0f18] rounded-lg border border-gray-800 text-xs font-mono text-gray-400">
              <div className="flex flex-col items-center">
                <span className="text-gray-500 mb-1">Phase Started</span>
                <span className="text-gray-200">14:22:00</span>
              </div>
              <div className="w-px h-8 bg-gray-800"></div>
              <div className="flex flex-col items-center">
                <span className="text-gray-500 mb-1">Teams in Phase</span>
                <span className="text-gray-200">31</span>
              </div>
              <div className="w-px h-8 bg-gray-800"></div>
              <div className="flex flex-col items-center">
                <span className="text-gray-500 mb-1">Avg Time in Phase</span>
                <span className="text-gray-200">8m 42s</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - LIVE ACTIVITY FEED */}
        <div className="col-span-5 bg-[#111827] rounded-xl border border-gray-800 flex flex-col overflow-hidden h-full">
          <div className="p-4 border-b border-gray-800 flex items-center gap-2 bg-[#0a0f18]/50">
            <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#a855f7]">Live Activity</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col">
            {[
              { time: '16:49:10', text: '⚡ PW-1042 discovered Evidence #17', color: 'text-gray-300' },
              { time: '16:48:55', text: '✨ PW-2081 entered Phase 5', color: 'text-gray-300' },
              { time: '16:48:42', text: '🔥 PW-3190 submitted indictment', color: 'text-gray-300' },
              { time: '16:48:11', text: '⚠ PW-4412 exited fullscreen', color: 'text-[#ef4444]' },
              { time: '16:47:50', text: '⚡ PW-5128 unlocked Suspect Lock: Kabir', color: 'text-gray-300' },
              { time: '16:47:33', text: '✨ PW-3042 entered Phase 4', color: 'text-gray-300' },
              { time: '16:47:15', text: '🔥 PW-1821 completed Round 1', color: 'text-gray-300' },
              { time: '16:46:58', text: '⚡ PW-4201 queried House AI', color: 'text-gray-300' },
              { time: '16:46:40', text: '⚠ PW-2390 connection lost', color: 'text-[#ef4444]' },
              { time: '16:46:22', text: '✨ PW-6712 entered Phase 3', color: 'text-gray-300' },
              { time: '16:45:55', text: '⚡ PW-1042 found Printer Log', color: 'text-gray-300' },
              { time: '16:45:30', text: '🔥 PW-8401 locked first submission', color: 'text-gray-300' }
            ].map((event, i) => (
              <div key={i} className="py-3 border-b border-gray-800/50 last:border-0 flex items-start gap-3 hover:bg-gray-800/20 px-2 rounded transition-colors">
                <span className="text-[#3b82f6] font-mono text-xs whitespace-nowrap pt-1">
                  {event.time}
                </span>
                <span className={`text-sm ${event.color} leading-snug`}>
                  {event.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
