import React, { useState } from 'react';
import {
  Monitor,
  Crosshair,
  MonitorSmartphone,
  ToggleLeft,
  Pause,
  Play,
  Lock,
  Unlock,
  Plus,
  Minus,
  MessageSquare,
  Send,
  AlertTriangle,
  Search,
  Check
} from 'lucide-react';

const mockTeams = [
  { id: 't1', code: 'PW-1042', name: 'Team Alpha' },
  { id: 't2', code: 'PW-2019', name: 'Team Bravo' },
  { id: 't3', code: 'PW-3381', name: 'Team Charlie' },
  { id: 't4', code: 'PW-4920', name: 'Team Delta' },
  { id: 't5', code: 'PW-5102', name: 'Team Echo' },
  { id: 't6', code: 'PW-6693', name: 'Team Foxtrot' },
];

const round1Screens = [
  'ENTRY', 'HOLDING LOBBY', 'HOW IT WORKS', 'CHALLENGE', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE', 'COMPLETE'
];

const round3Screens = [
  'INTRO', 'BRIEFING', 'CRIME SCENE', 'SUSPECTS', 'AI TRAP', 'FORENSICS', 'CASE BOARD', 'FINAL INDICTMENT'
];

const commonScreens = [
  'LEADERBOARD', 'RESULTS', 'WAITING', 'PAUSED', 'MAINTENANCE', 'CUSTOM MESSAGE'
];

export default function ControlPage() {
  const [targetMode, setTargetMode] = useState<'single' | 'multiple' | 'all'>('single');
  const [singleSearch, setSingleSearch] = useState('');
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedScreen, setSelectedScreen] = useState<string | null>(null);
  
  const [messageText, setMessageText] = useState('');
  const [messagePriority, setMessagePriority] = useState<'normal' | 'important' | 'critical'>('normal');

  const handleToggleTeam = (id: string) => {
    setSelectedTeams(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedTeams.length === mockTeams.length) {
      setSelectedTeams([]);
    } else {
      setSelectedTeams(mockTeams.map(t => t.id));
    }
  };

  const getTargetText = () => {
    if (targetMode === 'all') return 'Target: ALL (48 teams)';
    if (targetMode === 'single') return `Target: 1 team selected`;
    return `Target: ${selectedTeams.length} teams selected`;
  };

  return (
    <div className="min-h-screen bg-admin-bg text-gray-100 p-8 font-sans">
      {/* HEADER */}
      <div className="mb-8 flex items-center gap-4 border-b border-gray-800 pb-6">
        <div className="p-3 bg-admin-blue/20 rounded-xl border border-admin-blue/50 text-admin-blue">
          <Monitor className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PARTICIPANT CONTROL</h1>
          <p className="text-gray-400 mt-1">Remote control participant screens and states</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* SECTION 1 - TARGETING ENGINE */}
        <div className="bg-admin-panel rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Crosshair className="w-6 h-6 text-admin-blue" />
            <h2 className="text-xl font-semibold">SELECT TARGETS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Single Team */}
            <div 
              className={`border rounded-xl p-4 cursor-pointer transition-colors ${targetMode === 'single' ? 'border-admin-blue bg-admin-blue/5' : 'border-gray-800 bg-admin-bg hover:border-gray-700'}`}
              onClick={() => setTargetMode('single')}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${targetMode === 'single' ? 'border-admin-blue' : 'border-gray-500'}`}>
                  {targetMode === 'single' && <div className="w-2 h-2 rounded-full bg-admin-blue" />}
                </div>
                <span className="font-semibold">Single Team</span>
              </div>
              {targetMode === 'single' && (
                <div className="mt-4 relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input 
                    type="text" 
                    placeholder="e.g. PW-1042" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-admin-blue"
                    value={singleSearch}
                    onChange={(e) => setSingleSearch(e.target.value)}
                  />
                </div>
              )}
            </div>

            {/* Multiple Teams */}
            <div 
              className={`border rounded-xl p-4 cursor-pointer transition-colors flex flex-col h-[200px] ${targetMode === 'multiple' ? 'border-admin-blue bg-admin-blue/5' : 'border-gray-800 bg-admin-bg hover:border-gray-700'}`}
              onClick={() => setTargetMode('multiple')}
            >
              <div className="flex items-center gap-3 mb-4 shrink-0">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${targetMode === 'multiple' ? 'border-admin-blue' : 'border-gray-500'}`}>
                  {targetMode === 'multiple' && <div className="w-2 h-2 rounded-full bg-admin-blue" />}
                </div>
                <span className="font-semibold">Multiple Teams</span>
              </div>
              
              {targetMode === 'multiple' && (
                <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                  <label className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer pb-2 border-b border-gray-800">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedTeams.length === mockTeams.length ? 'bg-admin-blue border-admin-blue' : 'border-gray-600'}`}>
                      {selectedTeams.length === mockTeams.length && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <input type="checkbox" className="hidden" checked={selectedTeams.length === mockTeams.length} onChange={handleSelectAll} />
                    Select All
                  </label>
                  {mockTeams.map(team => (
                    <label key={team.id} className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 cursor-pointer">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedTeams.includes(team.id) ? 'bg-admin-blue border-admin-blue' : 'border-gray-600'}`}>
                        {selectedTeams.includes(team.id) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <input type="checkbox" className="hidden" checked={selectedTeams.includes(team.id)} onChange={() => handleToggleTeam(team.id)} />
                      <span className="font-mono text-xs">{team.code}</span> {team.name}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* All Participants */}
            <div 
              className={`border rounded-xl p-4 cursor-pointer transition-colors ${targetMode === 'all' ? 'border-admin-blue bg-admin-blue/5' : 'border-gray-800 bg-admin-bg hover:border-gray-700'}`}
              onClick={() => setTargetMode('all')}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${targetMode === 'all' ? 'border-admin-blue' : 'border-gray-500'}`}>
                  {targetMode === 'all' && <div className="w-2 h-2 rounded-full bg-admin-blue" />}
                </div>
                <span className="font-semibold">All Participants</span>
              </div>
              {targetMode === 'all' && (
                <div className="mt-4 flex items-center gap-2 text-admin-orange bg-admin-orange/10 border border-admin-orange/20 px-3 py-2 rounded-lg text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>⚠ Actions will affect ALL 48 teams</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-sm font-mono text-admin-blue">
            {getTargetText()}
          </div>
        </div>

        {/* SECTION 2 - SCREEN CONTROL */}
        <div className="bg-admin-panel rounded-xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-6">
            <MonitorSmartphone className="w-6 h-6 text-admin-uv" />
            <h2 className="text-xl font-semibold">CHANGE SCREEN</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Round 1 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Round 1 Screens</h3>
              <div className="flex flex-wrap gap-2">
                {round1Screens.map(screen => (
                  <button
                    key={screen}
                    onClick={() => setSelectedScreen(screen)}
                    className={`border rounded-lg px-3 py-2 text-xs font-mono transition-colors ${
                      selectedScreen === screen 
                        ? 'border-admin-blue bg-admin-blue/10 text-admin-blue' 
                        : 'bg-admin-bg border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {screen}
                  </button>
                ))}
              </div>
            </div>

            {/* Round 3 */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Round 3 Screens</h3>
              <div className="flex flex-wrap gap-2">
                {round3Screens.map(screen => (
                  <button
                    key={screen}
                    onClick={() => setSelectedScreen(screen)}
                    className={`border rounded-lg px-3 py-2 text-xs font-mono transition-colors ${
                      selectedScreen === screen 
                        ? 'border-admin-blue bg-admin-blue/10 text-admin-blue' 
                        : 'bg-admin-bg border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {screen}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 border-t border-gray-800 pt-6">
            <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Common Screens</h3>
            <div className="flex flex-wrap gap-2">
              {commonScreens.map(screen => (
                <button
                  key={screen}
                  onClick={() => setSelectedScreen(screen)}
                  className={`border rounded-lg px-3 py-2 text-xs font-mono transition-colors ${
                    selectedScreen === screen 
                      ? 'border-admin-blue bg-admin-blue/10 text-admin-blue' 
                      : 'bg-admin-bg border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {screen}
                </button>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-admin-blue/20 hover:bg-admin-blue/30 text-admin-blue border border-admin-blue/50 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
            APPLY SCREEN CHANGE
          </button>
        </div>

        {/* SECTION 3 - STATE & MESSAGING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* STATE CONTROL */}
          <div className="bg-admin-panel rounded-xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-6">
              <ToggleLeft className="w-6 h-6 text-admin-green" />
              <h2 className="text-xl font-semibold">TEAM STATE CONTROL</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-admin-orange/10 hover:bg-admin-orange/20 text-admin-orange border border-admin-orange/30 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Pause className="w-4 h-4" /> PAUSE
              </button>
              <button className="bg-admin-green/10 hover:bg-admin-green/20 text-admin-green border border-admin-green/30 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Play className="w-4 h-4" /> RESUME
              </button>
              <button className="bg-admin-red/10 hover:bg-admin-red/20 text-admin-red border border-admin-red/30 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Lock className="w-4 h-4" /> LOCK SCREEN
              </button>
              <button className="bg-admin-blue/10 hover:bg-admin-blue/20 text-admin-blue border border-admin-blue/30 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Unlock className="w-4 h-4" /> UNLOCK SCREEN
              </button>
              <button className="bg-admin-blue/10 hover:bg-admin-blue/20 text-admin-blue border border-admin-blue/30 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Plus className="w-4 h-4" /> ADD TIME +5m
              </button>
              <button className="bg-admin-orange/10 hover:bg-admin-orange/20 text-admin-orange border border-admin-orange/30 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Minus className="w-4 h-4" /> REMOVE TIME -5m
              </button>
            </div>
          </div>

          {/* MESSAGING */}
          <div className="bg-admin-panel rounded-xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-admin-uv" />
              <h2 className="text-xl font-semibold">SEND MESSAGE</h2>
            </div>
            
            <textarea
              className="bg-admin-bg border border-gray-700 rounded-lg p-4 w-full text-white focus:outline-none focus:border-admin-uv resize-none mb-4"
              rows={4}
              placeholder="Type a message to send to targeted teams..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="flex gap-2">
                <button 
                  onClick={() => setMessagePriority('normal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${messagePriority === 'normal' ? 'bg-admin-blue/20 text-admin-blue border-admin-blue/50' : 'bg-transparent text-gray-500 border-gray-700 hover:text-gray-300'}`}
                >
                  Normal
                </button>
                <button 
                  onClick={() => setMessagePriority('important')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${messagePriority === 'important' ? 'bg-admin-orange/20 text-admin-orange border-admin-orange/50' : 'bg-transparent text-gray-500 border-gray-700 hover:text-gray-300'}`}
                >
                  Important
                </button>
                <button 
                  onClick={() => setMessagePriority('critical')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${messagePriority === 'critical' ? 'bg-admin-red/20 text-admin-red border-admin-red/50' : 'bg-transparent text-gray-500 border-gray-700 hover:text-gray-300'}`}
                >
                  Critical
                </button>
              </div>
              
              <button className="bg-admin-uv/20 hover:bg-admin-uv/30 text-admin-uv border border-admin-uv/50 py-2 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                <Send className="w-4 h-4" /> SEND
              </button>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(17, 24, 39, 1); 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 1); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(107, 114, 128, 1); 
        }
      `}} />
    </div>
  );
}
