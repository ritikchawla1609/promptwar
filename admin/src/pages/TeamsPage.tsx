import React, { useState } from 'react';
import { 
  Users, Search, Download, Pause, Play, Monitor, 
  MessageSquare, Clock, AlertTriangle, X, ChevronRight,
  MoreVertical, CheckCircle2, XCircle, Activity, 
  Lock, ArrowRightCircle
} from 'lucide-react';

interface Team {
  id: string;
  code: string;
  name: string;
  round: string;
  phase: string;
  progress: number;
  score: number;
  status: 'Active' | 'Paused' | 'Offline' | 'Completed' | 'Disqualified';
  connection: 'Online' | 'Offline';
  fullscreen: 'FS Active' | 'FS Violated';
}

const mockTeams: Team[] = [
  { id: '1', code: 'PW-1042', name: 'Alpha Strike', round: 'R3', phase: 'Forensics', progress: 76, score: 87, status: 'Active', connection: 'Online', fullscreen: 'FS Active' },
  { id: '2', code: 'PW-1821', name: 'Neural Nexus', round: 'R3', phase: 'AI Trap', progress: 64, score: 79, status: 'Active', connection: 'Online', fullscreen: 'FS Active' },
  { id: '3', code: 'PW-2390', name: 'Code Breakers', round: 'R3', phase: 'Case Board', progress: 71, score: 82, status: 'Paused', connection: 'Online', fullscreen: 'FS Violated' },
  { id: '4', code: 'PW-4412', name: 'Quantum Flux', round: 'R3', phase: 'Crime Scene', progress: 32, score: 45, status: 'Active', connection: 'Online', fullscreen: 'FS Violated' },
  { id: '5', code: 'PW-5128', name: 'Prompt Lords', round: 'R3', phase: 'Forensics', progress: 81, score: 91, status: 'Active', connection: 'Online', fullscreen: 'FS Active' },
  { id: '6', code: 'PW-3190', name: 'Cyber Wolves', round: 'R3', phase: 'Final Indictment', progress: 95, score: 94, status: 'Active', connection: 'Online', fullscreen: 'FS Active' },
  { id: '7', code: 'PW-6712', name: 'Data Phoenix', round: 'R3', phase: 'Suspects', progress: 48, score: 56, status: 'Active', connection: 'Online', fullscreen: 'FS Active' },
  { id: '8', code: 'PW-8401', name: 'Binary Storm', round: 'R1', phase: 'Complete', progress: 100, score: 89, status: 'Completed', connection: 'Online', fullscreen: 'FS Active' },
];

const timelineEvents = [
  { time: '14:31:02', text: 'Entered Phase 4' },
  { time: '14:31:17', text: 'Opened Evidence #03' },
  { time: '14:32:04', text: 'Submitted Timeline' },
  { time: '14:33:41', text: 'Opened Terminal' },
  { time: '14:34:12', text: 'Queried House AI' },
  { time: '14:35:03', text: 'Discovered Clue #17' },
];

export default function TeamsPage() {
  const [search, setSearch] = useState('');
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const toggleSelectAll = () => {
    if (selectedTeams.length === mockTeams.length) {
      setSelectedTeams([]);
    } else {
      setSelectedTeams(mockTeams.map(t => t.id));
    }
  };

  const toggleSelectTeam = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (selectedTeams.includes(id)) {
      setSelectedTeams(selectedTeams.filter(t => t !== id));
    } else {
      setSelectedTeams([...selectedTeams, id]);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-[#10b981] bg-[#10b981]/10 border-[#10b981]/30';
      case 'Paused': return 'text-[#f97316] bg-[#f97316]/10 border-[#f97316]/30';
      case 'Offline': return 'text-[#ef4444] bg-[#ef4444]/10 border-[#ef4444]/30';
      case 'Completed': return 'text-[#a855f7] bg-[#a855f7]/10 border-[#a855f7]/30';
      case 'Disqualified': return 'text-[#ef4444] bg-[#ef4444]/10 border-[#ef4444]/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f18] text-gray-100 p-6 font-sans flex flex-col relative overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-[#3b82f6]" />
            <h1 className="text-3xl font-bold tracking-tight">TEAM MANAGEMENT</h1>
          </div>
          <p className="text-gray-400 mt-1">Monitor and control all registered teams</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search teams..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#0a0f18] border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 w-80 focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
          <button className="flex items-center gap-2 bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/50 hover:bg-[#3b82f6]/30 px-4 py-2 rounded-lg transition-colors font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#111827] rounded-lg border border-gray-800 p-3 mb-6 flex items-center justify-between">
        <div className="flex gap-3">
          <select className="bg-[#0a0f18] border border-gray-700 text-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-[#3b82f6]">
            <option>Round: All</option>
            <option>Round 1</option>
            <option>Round 2</option>
            <option>Round 3</option>
          </select>
          <select className="bg-[#0a0f18] border border-gray-700 text-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-[#3b82f6]">
            <option>Phase: All</option>
            <option>Briefing</option>
            <option>Crime Scene</option>
            <option>Suspects</option>
            <option>AI Trap</option>
            <option>Forensics</option>
            <option>Case Board</option>
            <option>Final</option>
          </select>
          <select className="bg-[#0a0f18] border border-gray-700 text-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-[#3b82f6]">
            <option>Status: All</option>
            <option>Active</option>
            <option>Paused</option>
            <option>Offline</option>
            <option>Completed</option>
            <option>Disqualified</option>
          </select>
          <select className="bg-[#0a0f18] border border-gray-700 text-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-[#3b82f6]">
            <option>Connection: All</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
          <select className="bg-[#0a0f18] border border-gray-700 text-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-[#3b82f6]">
            <option>Fullscreen: All</option>
            <option>Active</option>
            <option>Violated</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">{mockTeams.length} teams match</span>
          <button className="text-[#3b82f6] hover:text-[#3b82f6]/80 text-sm font-medium">CLEAR FILTERS</button>
        </div>
      </div>

      {/* Bulk Action Bar */}
      {selectedTeams.length > 0 && (
        <div className="sticky top-0 z-10 bg-[#a855f7]/10 border border-[#a855f7]/30 rounded-lg p-3 mb-6 flex items-center justify-between backdrop-blur-sm">
          <span className="text-[#a855f7] font-medium">{selectedTeams.length} teams selected</span>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-[#f97316]/20 text-[#f97316] border border-[#f97316]/50 hover:bg-[#f97316]/30 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium">
              <Pause className="w-4 h-4" /> Pause
            </button>
            <button className="flex items-center gap-2 bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/50 hover:bg-[#10b981]/30 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium">
              <Play className="w-4 h-4" /> Resume
            </button>
            <button className="flex items-center gap-2 bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/50 hover:bg-[#3b82f6]/30 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium">
              <Monitor className="w-4 h-4" /> Change Screen
            </button>
            <button className="flex items-center gap-2 bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/50 hover:bg-[#a855f7]/30 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium">
              <MessageSquare className="w-4 h-4" /> Send Message
            </button>
            <button className="flex items-center gap-2 bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/50 hover:bg-[#3b82f6]/30 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium">
              <Clock className="w-4 h-4" /> Add Time
            </button>
            <button className="flex items-center gap-2 bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/50 hover:bg-[#ef4444]/30 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium">
              <AlertTriangle className="w-4 h-4" /> Disqualify
            </button>
          </div>
        </div>
      )}

      {/* Team Table */}
      <div className="flex-1 bg-[#111827] rounded-xl border border-gray-800 overflow-hidden flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0a0f18] uppercase text-xs text-gray-500 tracking-wider border-b border-gray-800">
                <th className="p-4 w-12 text-center">
                  <input 
                    type="checkbox" 
                    checked={selectedTeams.length === mockTeams.length && mockTeams.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-gray-700 bg-[#0a0f18] text-[#3b82f6] focus:ring-[#3b82f6]/20"
                  />
                </th>
                <th className="p-4 font-medium">Team Code</th>
                <th className="p-4 font-medium">Team Name</th>
                <th className="p-4 font-medium">Round</th>
                <th className="p-4 font-medium">Phase</th>
                <th className="p-4 font-medium min-w-[150px]">Progress</th>
                <th className="p-4 font-medium text-right">Score</th>
                <th className="p-4 font-medium text-center">Status</th>
                <th className="p-4 font-medium text-center">Connection</th>
                <th className="p-4 font-medium text-center">Fullscreen</th>
                <th className="p-4 w-12 text-center"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {mockTeams.map((team) => (
                <tr 
                  key={team.id} 
                  className={`hover:bg-gray-800/30 transition-colors cursor-pointer ${selectedTeam?.id === team.id ? 'bg-gray-800/50' : ''}`}
                  onClick={() => setSelectedTeam(team)}
                >
                  <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <input 
                      type="checkbox" 
                      checked={selectedTeams.includes(team.id)}
                      onChange={(e) => toggleSelectTeam(e as any, team.id)}
                      className="rounded border-gray-700 bg-[#0a0f18] text-[#3b82f6] focus:ring-[#3b82f6]/20"
                    />
                  </td>
                  <td className="p-4">
                    <span className="font-mono font-bold text-[#3b82f6]">{team.code}</span>
                  </td>
                  <td className="p-4 text-gray-200 font-medium">{team.name}</td>
                  <td className="p-4 text-gray-400">{team.round}</td>
                  <td className="p-4 text-gray-300">{team.phase}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#3b82f6] rounded-full" 
                          style={{ width: `${team.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 font-mono">{team.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <span className="font-mono font-bold text-[#f97316]">{team.score}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(team.status)}`}>
                      {team.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${team.connection === 'Online' ? 'bg-[#10b981]' : 'bg-[#ef4444]'}`} />
                      <span className="text-xs text-gray-400">{team.connection}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    {team.fullscreen === 'FS Active' ? (
                      <CheckCircle2 className="w-5 h-5 text-[#10b981] mx-auto" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-[#ef4444] mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-gray-500 hover:text-gray-300 p-1" onClick={(e) => e.stopPropagation()}>
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Detail Drawer */}
      {selectedTeam && (
        <div className="fixed right-0 top-0 h-full w-[480px] bg-[#111827] border-l border-gray-800 shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out">
          {/* Drawer Header */}
          <div className="p-6 border-b border-gray-800 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-mono font-bold text-[#3b82f6]">{selectedTeam.code}</h2>
              <p className="text-lg text-gray-200 mt-1">{selectedTeam.name}</p>
            </div>
            <button 
              onClick={() => setSelectedTeam(null)}
              className="p-2 text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            
            {/* Status Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0a0f18] border border-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(selectedTeam.status)}`}>
                  {selectedTeam.status}
                </span>
              </div>
              <div className="bg-[#0a0f18] border border-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Round</p>
                <p className="text-gray-200 font-medium">{selectedTeam.round}</p>
              </div>
              <div className="bg-[#0a0f18] border border-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phase</p>
                <p className="text-gray-200 font-medium">{selectedTeam.phase}</p>
              </div>
              <div className="bg-[#0a0f18] border border-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Time Left</p>
                <p className="text-[#3b82f6] font-mono font-medium">27:42</p>
              </div>
              <div className="bg-[#0a0f18] border border-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Progress</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#3b82f6] rounded-full" 
                      style={{ width: `${selectedTeam.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-mono">{selectedTeam.progress}%</span>
                </div>
              </div>
              <div className="bg-[#0a0f18] border border-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Score</p>
                <p className="text-[#f97316] font-mono font-bold">{selectedTeam.score}</p>
              </div>
              <div className="bg-[#0a0f18] border border-gray-800 rounded-lg p-3 col-span-2 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Fullscreen Monitor</p>
                  <p className="text-sm text-gray-400">Current active window status</p>
                </div>
                {selectedTeam.fullscreen === 'FS Active' ? (
                  <span className="flex items-center gap-1.5 text-[#10b981] text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Active
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-[#ef4444] text-sm font-medium">
                    <AlertTriangle className="w-4 h-4" /> Violated
                  </span>
                )}
              </div>
            </div>

            {/* Current Activity */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Current Activity
              </h3>
              <div className="bg-[#0a0f18] rounded-lg p-4 font-mono text-sm text-[#3b82f6] border border-[#3b82f6]/20">
                Analyzing Evidence #17
              </div>
            </div>

            {/* Team Controls */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Team Controls</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30 hover:bg-[#f97316]/20 py-2 px-3 rounded-lg text-sm transition-colors">
                  <Pause className="w-4 h-4" /> Pause Team
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 hover:bg-[#10b981]/20 py-2 px-3 rounded-lg text-sm transition-colors">
                  <Play className="w-4 h-4" /> Resume Team
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-800 py-2 px-3 rounded-lg text-sm transition-colors">
                  <XCircle className="w-4 h-4" /> Force Logout
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/30 hover:bg-[#3b82f6]/20 py-2 px-3 rounded-lg text-sm transition-colors">
                  <Clock className="w-4 h-4" /> Add Time
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-800 py-2 px-3 rounded-lg text-sm transition-colors">
                  <Clock className="w-4 h-4" /> Remove Time
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-800 py-2 px-3 rounded-lg text-sm transition-colors">
                  <Lock className="w-4 h-4" /> Lock Screen
                </button>
                <select className="col-span-2 bg-[#0a0f18] border border-gray-700 text-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#3b82f6]">
                  <option>Move to Phase...</option>
                  <option>Briefing</option>
                  <option>Crime Scene</option>
                  <option>Suspects</option>
                  <option>AI Trap</option>
                  <option>Forensics</option>
                  <option>Case Board</option>
                  <option>Final</option>
                </select>
                <button className="col-span-2 flex items-center justify-center gap-2 bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/30 hover:bg-[#ef4444]/20 py-2 px-3 rounded-lg text-sm transition-colors mt-2">
                  <AlertTriangle className="w-4 h-4" /> Disqualify Team
                </button>
              </div>
            </div>

            {/* Activity Timeline */}
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-4">Activity Timeline</h3>
              <div className="space-y-4">
                {timelineEvents.map((event, i) => (
                  <div key={i} className="flex gap-4 relative">
                    {i !== timelineEvents.length - 1 && (
                      <div className="absolute left-[3px] top-4 bottom-[-16px] w-[2px] bg-gray-800" />
                    )}
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6] mt-1.5 relative z-10" />
                    <div className="flex flex-col">
                      <span className="text-xs font-mono text-[#3b82f6]">{event.time}</span>
                      <span className="text-sm text-gray-300 mt-0.5">{event.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
