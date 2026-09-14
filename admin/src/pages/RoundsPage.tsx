import React, { useState } from 'react';
import { Layers, Clock, Users, Zap, Sparkles, Skull, CheckCircle, Lock, ChevronRight, Activity, ShieldAlert, Cpu } from 'lucide-react';

export default function RoundsPage() {
  const [activeRound, setActiveRound] = useState<number>(3);

  const getRoundStatusBadge = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return <span className="px-2 py-1 bg-admin-green/20 text-admin-green border border-admin-green/50 rounded text-xs font-bold tracking-wider">ACTIVE</span>;
      case 'COMPLETE':
        return <span className="px-2 py-1 bg-gray-700/50 text-gray-300 border border-gray-600 rounded text-xs font-bold tracking-wider">COMPLETE</span>;
      case 'LOCKED':
        return <span className="px-2 py-1 bg-gray-800 text-gray-500 border border-gray-700 rounded text-xs font-bold tracking-wider">LOCKED</span>;
      default:
        return null;
    }
  };

  const renderRound1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-admin-blue" />
            ROUND 1 CONTROLS
          </h2>
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-400">
            {['ENTRY', 'HOLDING LOBBY', 'HOW IT WORKS', 'CHALLENGE', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE', 'COMPLETE'].map((phase, idx, arr) => (
              <React.Fragment key={phase}>
                <div className={`px-3 py-1.5 rounded-lg border ${phase === 'COMPLETE' ? 'bg-admin-green/20 border-admin-green/50 text-admin-green' : 'bg-gray-800/50 border-gray-700'}`}>
                  {phase}
                </div>
                {idx < arr.length - 1 && <ChevronRight className="w-4 h-4 text-gray-600" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-admin-orange" />
            MATCHMAKING
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-black/20 rounded-lg p-4 border border-gray-800/50">
              <div className="text-gray-500 text-xs mb-1">Submissions Locked</div>
              <div className="text-xl font-bold text-gray-100 font-mono">45/48</div>
            </div>
            <div className="bg-black/20 rounded-lg p-4 border border-gray-800/50">
              <div className="text-gray-500 text-xs mb-1">Matches Made</div>
              <div className="text-xl font-bold text-admin-blue font-mono">42</div>
            </div>
            <div className="bg-black/20 rounded-lg p-4 border border-gray-800/50">
              <div className="text-gray-500 text-xs mb-1">Pending</div>
              <div className="text-xl font-bold text-admin-orange font-mono">3</div>
            </div>
          </div>
          <button className="w-full py-3 bg-admin-blue/20 text-admin-blue border border-admin-blue/50 rounded-lg font-bold hover:bg-admin-blue/30 transition-colors">
            FORCE MATCH ALL
          </button>
        </div>
      </div>

      <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center">
          <Layers className="w-5 h-5 mr-2 text-gray-400" />
          SUBMISSIONS
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-sm">
                <th className="py-3 px-4 font-medium">Team</th>
                <th className="py-3 px-4 font-medium">First Prompt</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium text-right">Score</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { team: 'Team Alpha', prompt: 'A highly detailed photograph of a cyborg...', status: 'Locked', score: 85 },
                { team: 'Byte Me', prompt: 'Digital art, cyberpunk street market...', status: 'Locked', score: 92 },
                { team: 'Ctrl Alt Elite', prompt: 'Abstract representation of artificial...', status: 'Pending', score: '-' },
                { team: 'Pixel Pushers', prompt: 'Cinematic lighting, 8k resolution, macro...', status: 'Locked', score: 78 },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-800/20">
                  <td className="py-3 px-4 text-gray-200 font-medium">{row.team}</td>
                  <td className="py-3 px-4 text-gray-400 truncate max-w-xs">{row.prompt}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-xs ${row.status === 'Locked' ? 'bg-admin-blue/20 text-admin-blue border border-admin-blue/30' : 'bg-admin-orange/20 text-admin-orange border border-admin-orange/30'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-gray-300 font-mono">{row.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderRound3 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-admin-blue" />
            PHASE PROGRESSION
          </h2>
          <div className="space-y-3">
            {[
              { name: 'INTRO', count: 0, active: false },
              { name: 'BRIEFING', count: 0, active: false },
              { name: 'CRIME SCENE', count: 12, active: true },
              { name: 'SUSPECTS', count: 28, active: true },
              { name: 'AI TRAP', count: 2, active: true },
              { name: 'FORENSICS', count: 0, active: false },
              { name: 'CASE BOARD', count: 0, active: false },
              { name: 'FINAL INDICTMENT', count: 0, active: false },
            ].map((phase, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${phase.active ? 'bg-admin-blue/10 border-admin-blue/30' : 'bg-black/20 border-gray-800'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${phase.active ? 'bg-admin-blue animate-pulse' : 'bg-gray-700'}`}></div>
                  <span className={`font-medium text-sm ${phase.active ? 'text-admin-blue' : 'text-gray-500'}`}>{phase.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-3.5 h-3.5 text-gray-500" />
                  <span className="font-mono text-gray-400 text-sm">{phase.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2 text-admin-orange" />
            EVIDENCE OVERRIDES
          </h2>
          <div className="space-y-1">
            {['Unlock All Suspect Locks', 'Unlock Printer Log', 'Unlock Hidden Video', 'Unlock All Evidence'].map((label, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-800 last:border-0">
                <span className="text-gray-300 text-sm font-medium">{label}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-admin-orange"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center">
            <Cpu className="w-5 h-5 mr-2 text-admin-uv" />
            ATMOSPHERE & HOST CONTROLS
          </h2>
          <div className="space-y-4">
            <button className="w-full p-4 flex flex-col items-center justify-center bg-red-900/20 text-red-500 border border-red-900/50 rounded-lg hover:bg-red-900/30 transition-colors">
              <div className="flex items-center font-bold mb-1">
                <Zap className="w-4 h-4 mr-2" />
                TRIGGER BLACKOUT
              </div>
              <span className="text-xs text-gray-500">Simulates electrical blackout for all teams</span>
            </button>

            <button className="w-full p-4 flex flex-col items-center justify-center bg-admin-uv/20 text-admin-uv border border-admin-uv/50 rounded-lg hover:bg-admin-uv/30 transition-colors">
              <div className="flex items-center font-bold mb-1">
                <Sparkles className="w-4 h-4 mr-2" />
                TRIGGER CLIMAX
              </div>
              <span className="text-xs text-gray-500">Activates glitch climax sequence</span>
            </button>

            <button className="w-full p-4 flex flex-col items-center justify-center bg-admin-red/20 text-admin-red border border-admin-red/50 rounded-lg hover:bg-admin-red/30 transition-colors">
              <div className="flex items-center font-bold mb-1">
                <Skull className="w-4 h-4 mr-2" />
                TRIGGER JUMPSCARE
              </div>
              <span className="text-xs text-gray-500">Test horror jumpscare</span>
            </button>

            <button className="w-full p-4 flex flex-col items-center justify-center bg-admin-green/20 text-admin-green border border-admin-green/50 rounded-lg hover:bg-admin-green/30 transition-colors">
              <div className="flex items-center font-bold mb-1">
                <CheckCircle className="w-4 h-4 mr-2" />
                AUTO SOLVE ALL
              </div>
              <span className="text-xs text-gray-500">Instantly complete all puzzles</span>
            </button>
          </div>
        </div>

        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-100 mb-4 flex items-center">
            <ShieldAlert className="w-5 h-5 mr-2 text-admin-orange" />
            PUZZLE STATUS
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Suspect Locks</span>
                <span className="text-admin-blue font-mono">3/5 solved</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div className="bg-admin-blue h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>

            {[
              { name: 'AI Reasoning Trap', status: 'Not triggered', color: 'text-gray-500' },
              { name: 'Hidden Video', status: 'Locked', color: 'text-gray-500' },
              { name: 'Printer Spool Log', status: 'Locked', color: 'text-gray-500' },
              { name: 'Final Indictment', status: '2 submitted', color: 'text-admin-orange font-bold' },
            ].map((puzzle, i) => (
              <div key={i} className="flex justify-between items-center text-sm py-2 border-b border-gray-800/50 last:border-0">
                <span className="text-gray-400">{puzzle.name}</span>
                <span className={puzzle.color}>{puzzle.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto min-h-screen bg-admin-bg">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-100 flex items-center mb-2 tracking-tight">
          <Layers className="w-8 h-8 mr-3 text-admin-blue" />
          ROUNDS
        </h1>
        <p className="text-gray-400 text-sm">Round-specific controls and monitoring</p>
      </div>

      {/* ROUND TABS */}
      <div className="flex space-x-1 border-b border-gray-800 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveRound(1)}
          className={`px-6 py-3 font-bold text-sm tracking-wide whitespace-nowrap transition-colors flex items-center ${activeRound === 1 ? 'border-b-2 border-admin-blue text-admin-blue bg-admin-blue/5' : 'text-gray-400 hover:text-gray-200'}`}
        >
          ROUND 1
          <span className="ml-2 font-normal text-xs opacity-70">(Dalgona Prompt)</span>
        </button>
        
        <button
          disabled
          className="px-6 py-3 font-bold text-sm tracking-wide whitespace-nowrap text-gray-500 flex items-center cursor-not-allowed"
        >
          ROUND 2
          <span className="ml-2 font-normal text-xs opacity-70 mr-2">(Future Round)</span>
          <span className="bg-gray-700 text-gray-400 text-[10px] px-2 py-0.5 rounded font-bold">LOCKED</span>
        </button>

        <button
          onClick={() => setActiveRound(3)}
          className={`px-6 py-3 font-bold text-sm tracking-wide whitespace-nowrap transition-colors flex items-center ${activeRound === 3 ? 'border-b-2 border-admin-blue text-admin-blue bg-admin-blue/5' : 'text-gray-400 hover:text-gray-200'}`}
        >
          ROUND 3
          <span className="ml-2 font-normal text-xs opacity-70">(The House That Remembers)</span>
        </button>
      </div>

      {/* ROUND OVERVIEW BANNER */}
      <div className="bg-admin-panel border border-gray-800 rounded-xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-bold text-gray-100">
            {activeRound === 1 ? '🍪 DALGONA PROMPT' : '🩸 THE HOUSE THAT REMEMBERS'}
          </h2>
          {getRoundStatusBadge(activeRound === 1 ? 'COMPLETE' : 'ACTIVE')}
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-300">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span className="font-mono font-bold">
              {activeRound === 1 ? '00:00' : '27:42 remaining'}
            </span>
          </div>
          <div className="flex items-center text-gray-300">
            <Users className="w-4 h-4 mr-2 text-gray-500" />
            <span className="font-mono font-bold">
              {activeRound === 1 ? '48 teams' : '42 teams'}
            </span>
          </div>
        </div>
      </div>

      {/* ROUND CONTENT */}
      {activeRound === 1 && renderRound1()}
      {activeRound === 3 && renderRound3()}
    </div>
  );
}
