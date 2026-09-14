import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Activity, Users, Settings, Shield, Target, Trophy, BarChart2, Layers } from 'lucide-react';

const Sidebar = () => (
  <div className="w-64 bg-admin-panel border-r border-gray-800 flex flex-col h-screen p-4">
    <div className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-admin-blue to-admin-uv mb-8 uppercase flex items-center gap-2">
      <Shield className="w-6 h-6 text-admin-red" />
      Admin Command
    </div>
    <nav className="flex flex-col gap-2 flex-1">
      <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800/50 text-white font-medium hover:bg-gray-800 transition">
        <Activity className="w-5 h-5 text-admin-blue" />
        OVERVIEW
      </Link>
      <Link to="/event" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition">
        <Target className="w-5 h-5" />
        EVENT
      </Link>
      <Link to="/teams" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition">
        <Users className="w-5 h-5" />
        TEAMS
      </Link>
      <Link to="/rounds" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition">
        <Layers className="w-5 h-5" />
        ROUNDS
      </Link>
      <Link to="/leaderboard" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition">
        <Trophy className="w-5 h-5" />
        LEADERBOARD
      </Link>
      <Link to="/analytics" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition">
        <BarChart2 className="w-5 h-5" />
        ANALYTICS
      </Link>
      <div className="mt-auto pt-4 border-t border-gray-800">
        <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 font-medium hover:bg-gray-800 transition">
          <Settings className="w-5 h-5" />
          MORE
        </Link>
      </div>
    </nav>
  </div>
);

const Overview = () => (
  <div className="p-8 space-y-8 flex-1 overflow-y-auto">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold tracking-wide">COMMAND CENTER</h1>
        <p className="text-gray-400 mt-1">PROMPT WAR 2026 • ROUND 3: THE HOUSE THAT REMEMBERS</p>
      </div>
      <div className="text-4xl font-mono text-admin-blue font-bold tracking-widest bg-admin-panel px-6 py-3 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        55:00
      </div>
    </div>
    
    <div className="grid grid-cols-4 gap-6">
      <div className="bg-admin-panel p-6 rounded-xl border border-gray-800 border-t-2 border-t-admin-blue shadow-lg">
        <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Registered Teams</div>
        <div className="text-3xl font-bold">48</div>
      </div>
      <div className="bg-admin-panel p-6 rounded-xl border border-gray-800 border-t-2 border-t-admin-green shadow-lg">
        <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Active Now</div>
        <div className="text-3xl font-bold text-admin-green">42</div>
      </div>
      <div className="bg-admin-panel p-6 rounded-xl border border-gray-800 border-t-2 border-t-admin-orange shadow-lg">
        <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Paused</div>
        <div className="text-3xl font-bold text-admin-orange">4</div>
      </div>
      <div className="bg-admin-panel p-6 rounded-xl border border-gray-800 border-t-2 border-t-admin-red shadow-lg">
        <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Offline</div>
        <div className="text-3xl font-bold text-admin-red">2</div>
      </div>
    </div>

    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-8 space-y-6">
        <div className="bg-admin-panel rounded-xl border border-gray-800 p-6">
          <h2 className="text-lg font-bold mb-4 uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-5 h-5 text-admin-red" />
            Quick Actions
          </h2>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-admin-orange/20 text-admin-orange border border-admin-orange/50 font-bold rounded hover:bg-admin-orange/30 transition">PAUSE EVENT</button>
            <button className="px-6 py-3 bg-admin-green/20 text-admin-green border border-admin-green/50 font-bold rounded hover:bg-admin-green/30 transition">RESUME EVENT</button>
            <button className="px-6 py-3 bg-admin-red/20 text-admin-red border border-admin-red/50 font-bold rounded hover:bg-admin-red/30 transition ml-auto flex items-center gap-2">
              <Shield className="w-4 h-4" />
              END ROUND
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-4 bg-admin-panel rounded-xl border border-gray-800 flex flex-col h-[500px]">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-sm font-bold uppercase tracking-wider text-admin-uv">Live Activity Feed</h2>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto flex-1 font-mono text-sm">
          <div className="flex gap-3 text-gray-300">
            <span className="text-admin-blue">14:32:04</span>
            <span>⚡ PW-1042 discovered Evidence #17</span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-admin-blue">14:32:01</span>
            <span>✨ PW-2081 entered Phase 5</span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-admin-blue">14:31:45</span>
            <span className="text-admin-orange">🔥 PW-3190 submitted indictment</span>
          </div>
          <div className="flex gap-3 text-admin-red">
            <span className="text-admin-red/70">14:31:12</span>
            <span>⚠ PW-4412 exited fullscreen</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-admin-bg text-gray-100 overflow-hidden relative selection:bg-admin-uv/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-admin-blue/5 via-admin-bg to-admin-bg pointer-events-none" />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="*" element={<div className="p-8 text-gray-400">Page under construction...</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
