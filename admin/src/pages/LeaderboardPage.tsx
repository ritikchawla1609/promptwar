import React, { useState } from 'react';
import { Trophy, Lock, Unlock, Download, Edit2, X } from 'lucide-react';

interface Team {
  rank: number;
  code: string;
  name: string;
  r1: number;
  r2: string;
  r3: number;
  total: number;
}

const MOCK_TEAMS: Team[] = [
  { rank: 1, code: 'PW-3190', name: 'Cyber Wolves', r1: 92, r2: '-', r3: 94, total: 186 },
  { rank: 2, code: 'PW-5128', name: 'Prompt Lords', r1: 88, r2: '-', r3: 91, total: 179 },
  { rank: 3, code: 'PW-1042', name: 'Alpha Strike', r1: 89, r2: '-', r3: 87, total: 176 },
  { rank: 4, code: 'PW-8401', name: 'Binary Storm', r1: 89, r2: '-', r3: 85, total: 174 },
  { rank: 5, code: 'PW-2390', name: 'Code Breakers', r1: 85, r2: '-', r3: 82, total: 167 },
  { rank: 6, code: 'PW-1821', name: 'Neural Nexus', r1: 81, r2: '-', r3: 79, total: 160 },
  { rank: 7, code: 'PW-6712', name: 'Data Phoenix', r1: 78, r2: '-', r3: 56, total: 134 },
  { rank: 8, code: 'PW-4412', name: 'Quantum Flux', r1: 72, r2: '-', r3: 45, total: 117 },
  { rank: 9, code: 'PW-9301', name: 'Pixel Pirates', r1: 68, r2: '-', r3: 42, total: 110 },
  { rank: 10, code: 'PW-7788', name: 'Echo Chamber', r1: 55, r2: '-', r3: 38, total: 93 },
];

export default function LeaderboardPage() {
  const [isLocked, setIsLocked] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-400 font-bold';
      case 2: return 'text-gray-300 font-bold';
      case 3: return 'text-amber-600 font-bold';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="flex flex-col h-full bg-admin-bg p-8 text-gray-100">
      {/* PAGE HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-admin-orange" />
            <h1 className="text-3xl font-bold tracking-wider">LEADERBOARD</h1>
          </div>
          <p className="text-gray-400 mt-2">Official rankings and score management</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setIsLocked(!isLocked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              isLocked 
                ? 'bg-admin-orange/20 text-admin-orange border-admin-orange/50' 
                : 'bg-admin-green/20 text-admin-green border-admin-green/50'
            }`}
          >
            {isLocked ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
            {isLocked ? 'LEADERBOARD LOCKED' : 'LEADERBOARD UNLOCKED'}
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-admin-blue/20 text-admin-blue border border-admin-blue/50 hover:bg-admin-blue/30 transition-colors">
            <Download className="w-5 h-5" />
            EXPORT
          </button>
        </div>
      </div>

      {/* LEADERBOARD TABLE */}
      <div className="bg-admin-panel border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-gray-800/50 text-gray-400 text-sm">
            <tr>
              <th className="p-4 font-semibold">RANK</th>
              <th className="p-4 font-semibold">TEAM CODE</th>
              <th className="p-4 font-semibold">TEAM NAME</th>
              <th className="p-4 font-semibold text-center">R1 SCORE</th>
              <th className="p-4 font-semibold text-center">R2 SCORE</th>
              <th className="p-4 font-semibold text-center">R3 SCORE</th>
              <th className="p-4 font-semibold text-center">TOTAL</th>
              <th className="p-4 font-semibold text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {MOCK_TEAMS.map((team) => (
              <tr key={team.code} className="hover:bg-gray-800/20 transition-colors">
                <td className={`p-4 ${getRankColor(team.rank)}`}>#{team.rank}</td>
                <td className="p-4 font-mono text-gray-300">{team.code}</td>
                <td className="p-4 font-medium">{team.name}</td>
                <td className="p-4 font-mono text-center">{team.r1}</td>
                <td className="p-4 font-mono text-center text-gray-600">{team.r2}</td>
                <td className="p-4 font-mono text-center">{team.r3}</td>
                <td className="p-4 font-mono font-bold text-admin-uv text-center text-lg">{team.total}</td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => setEditingTeam(team)}
                    className="p-2 rounded hover:bg-admin-blue/10 text-admin-blue transition-colors inline-block"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SCORE EDITOR MODAL */}
      {editingTeam && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-admin-panel border border-gray-800 rounded-2xl p-8 w-[500px] shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Edit Score — {editingTeam.code}</h2>
              <button onClick={() => setEditingTeam(null)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Round 1 Score</label>
                  <input type="number" defaultValue={editingTeam.r1} className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white font-mono focus:border-admin-blue outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Round 3 Score</label>
                  <input type="number" defaultValue={editingTeam.r3} className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white font-mono focus:border-admin-blue outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-admin-green mb-1">Bonus Points</label>
                  <input type="number" defaultValue={0} className="w-full bg-admin-bg border border-admin-green/30 rounded p-2 text-admin-green font-mono focus:border-admin-green outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-admin-red mb-1">Penalty Points</label>
                  <input type="number" defaultValue={0} className="w-full bg-admin-bg border border-admin-red/30 rounded p-2 text-admin-red font-mono focus:border-admin-red outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Reason (required)</label>
                <textarea rows={3} className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white outline-none focus:border-admin-blue" placeholder="Explain the score adjustment..."></textarea>
              </div>

              <div className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg border border-gray-700 mt-4">
                <span className="text-gray-400">Computed Total</span>
                <span className="text-2xl font-bold font-mono text-admin-uv">{editingTeam.total}</span>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button 
                onClick={() => setEditingTeam(null)}
                className="px-4 py-2 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              >
                CANCEL
              </button>
              <button 
                className="px-4 py-2 rounded bg-admin-blue/20 text-admin-blue border border-admin-blue/50 hover:bg-admin-blue/30 transition-colors"
                onClick={() => setEditingTeam(null)}
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
