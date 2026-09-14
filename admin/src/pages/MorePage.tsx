import React, { useState } from 'react';
import { Settings, Download, UploadCloud, Star, Activity, Database, Server, Globe, Clock, LayoutGrid } from 'lucide-react';

type Tab = 'hud' | 'data' | 'reviews' | 'audit' | 'health' | 'settings';

export default function MorePage() {
  const [activeTab, setActiveTab] = useState<Tab>('hud');

  const tabs: { id: Tab, label: string }[] = [
    { id: 'hud', label: 'HUD/GUI' },
    { id: 'data', label: 'DATA CENTER' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'audit', label: 'AUDIT LOG' },
    { id: 'health', label: 'SYSTEM HEALTH' },
    { id: 'settings', label: 'SETTINGS' }
  ];

  const ToggleSwitch = ({ label, defaultChecked = true }: { label: string, defaultChecked?: boolean }) => {
    const [checked, setChecked] = useState(defaultChecked);
    return (
      <div className="flex justify-between items-center py-3 border-b border-gray-800 last:border-0">
        <span className="text-sm text-gray-300">{label}</span>
        <button 
          onClick={() => setChecked(!checked)}
          className={`w-10 h-5 rounded-full relative transition-colors ${checked ? 'bg-admin-green' : 'bg-gray-700'}`}
        >
          <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-all ${checked ? 'left-6' : 'left-1'}`}></div>
        </button>
      </div>
    );
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'hud':
        return (
          <div className="space-y-8 max-w-2xl">
            <h2 className="text-xl font-bold tracking-wider text-white">HUD CONFIGURATION</h2>
            
            <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
              <h3 className="text-admin-blue font-semibold mb-4">GLOBAL SETTINGS</h3>
              <div className="space-y-1">
                <ToggleSwitch label="Show Timer" />
                <ToggleSwitch label="Show Score" />
                <ToggleSwitch label="Show Leaderboard" />
                <ToggleSwitch label="Show Phase" />
                <ToggleSwitch label="Show Notifications" />
              </div>
            </div>

            <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
              <h3 className="text-admin-blue font-semibold mb-4">ROUND OVERRIDE</h3>
              <select className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white mb-6 outline-none focus:border-admin-blue">
                <option>Round 1: Setup</option>
                <option>Round 2: Investigation</option>
                <option>Round 3: Final</option>
              </select>
              <div className="space-y-1">
                <ToggleSwitch label="Show Timer" />
                <ToggleSwitch label="Show Score" defaultChecked={false} />
                <ToggleSwitch label="Show Leaderboard" defaultChecked={false} />
                <ToggleSwitch label="Show Phase" />
                <ToggleSwitch label="Show Notifications" />
              </div>
            </div>

            <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
              <h3 className="text-admin-blue font-semibold mb-4">TEAM OVERRIDE</h3>
              <input type="text" placeholder="Enter Team Code (e.g. PW-1042)" className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white font-mono mb-6 outline-none focus:border-admin-blue" />
              <div className="space-y-1">
                <ToggleSwitch label="Show Timer" />
                <ToggleSwitch label="Show Score" />
                <ToggleSwitch label="Show Leaderboard" />
                <ToggleSwitch label="Show Phase" />
                <ToggleSwitch label="Show Notifications" />
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2"><UploadCloud className="w-5 h-5 text-admin-uv" /> IMPORT DATA</h2>
              <div className="border-2 border-dashed border-gray-700 rounded-lg h-48 flex flex-col items-center justify-center bg-gray-900/50 hover:bg-gray-800/50 transition-colors cursor-pointer group">
                <UploadCloud className="w-8 h-8 text-gray-500 mb-2 group-hover:text-admin-uv transition-colors" />
                <p className="text-gray-400">Drag & drop or click to upload</p>
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-400 mb-2">File Type</label>
                <select className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white outline-none focus:border-admin-blue">
                  <option>Teams CSV</option>
                  <option>Scores Backup JSON</option>
                  <option>Event Configuration</option>
                </select>
              </div>
            </div>

            <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2"><Download className="w-5 h-5 text-admin-green" /> EXPORT DATA</h2>
              <div className="space-y-3">
                {['Teams', 'Leaderboard', 'Round 1 Analytics', 'Round 3 Analytics', 'Activity Logs', 'Reviews', 'Complete Event Bundle'].map((item) => (
                  <button key={item} className="w-full bg-admin-bg border border-gray-700 p-3 rounded flex justify-between items-center hover:border-admin-blue transition-colors group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    <Download className="w-4 h-4 text-gray-500 group-hover:text-admin-blue transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'audit':
        const mockAudit = [
          { time: '16:42:05', user: 'Admin System', action: 'Admin changed PW-1042 score from 82 to 87', target: 'PW-1042' },
          { time: '16:38:12', user: 'Admin System', action: 'Admin paused PW-1821', target: 'PW-1821' },
          { time: '16:30:00', user: 'Super Admin', action: 'Admin added 60 seconds to global timer', target: 'GLOBAL' },
          { time: '16:15:44', user: 'Admin System', action: 'Admin moved PW-2390 to Phase 5', target: 'PW-2390' },
          { time: '16:00:00', user: 'System Event', action: 'Admin ended Round 1', target: 'ROUND_1' },
          { time: '15:55:10', user: 'Super Admin', action: 'Admin changed HUD setting: Hide Score in Round 3', target: 'HUD_CONFIG' },
          { time: '15:40:22', user: 'Admin System', action: 'Admin sent announcement to all teams', target: 'BROADCAST' },
          { time: '15:35:01', user: 'Super Admin', action: 'Admin disqualified PW-9999', target: 'PW-9999' },
        ];
        return (
          <div className="bg-admin-panel border border-gray-800 rounded-xl overflow-hidden max-w-4xl">
            <table className="w-full text-left">
              <thead className="bg-gray-800/50 text-gray-400 text-sm border-b border-gray-800">
                <tr>
                  <th className="p-4 font-semibold w-24">TIME</th>
                  <th className="p-4 font-semibold w-40">USER</th>
                  <th className="p-4 font-semibold">ACTION</th>
                  <th className="p-4 font-semibold w-32">TARGET</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {mockAudit.map((log, idx) => (
                  <tr key={idx} className="hover:bg-gray-800/30 transition-colors">
                    <td className="p-4 font-mono text-xs text-admin-blue">{log.time}</td>
                    <td className="p-4 text-sm text-gray-400">{log.user}</td>
                    <td className="p-4 text-sm text-gray-200">{log.action}</td>
                    <td className="p-4 font-mono text-xs text-admin-uv">{log.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'reviews':
        return (
          <div className="max-w-3xl space-y-6">
            <div className="bg-admin-panel border border-gray-800 rounded-xl p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">Average Rating</h2>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 text-gray-600" />
                  </div>
                  <span className="text-2xl font-bold ml-2">4.2</span>
                  <span className="text-gray-500 text-sm mt-1">/ 5</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-admin-blue">32</p>
                <p className="text-gray-500 text-sm">Total Reviews</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
                  <span className="font-mono text-sm text-admin-uv">PW-1042</span>
                </div>
                <p className="text-gray-300 italic">"Amazing experience! The horror puzzles were incredible."</p>
              </div>
              <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 text-gray-700" /></div>
                  <span className="font-mono text-sm text-admin-uv">PW-2390</span>
                </div>
                <p className="text-gray-300 italic">"Great concept but AI trap was confusing."</p>
              </div>
              <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 text-gray-700" /><Star className="w-4 h-4 text-gray-700" /></div>
                  <span className="font-mono text-sm text-admin-uv">PW-6712</span>
                </div>
                <p className="text-gray-300 italic">"Good but needs more time."</p>
              </div>
            </div>
          </div>
        );

      case 'health':
        return (
          <div className="max-w-2xl bg-admin-panel border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">System Status</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center gap-3"><Server className="w-5 h-5 text-gray-400" /><span className="font-medium text-gray-200">Server</span></div>
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-admin-green"></div><span className="text-sm font-mono text-admin-green">HEALTHY</span></div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center gap-3"><Database className="w-5 h-5 text-gray-400" /><span className="font-medium text-gray-200">Database</span></div>
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-admin-green"></div><span className="text-sm font-mono text-admin-green">CONNECTED</span></div>
              </div>
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div className="flex items-center gap-3"><Globe className="w-5 h-5 text-gray-400" /><span className="font-medium text-gray-200">WebSocket</span></div>
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-admin-green"></div><span className="text-sm font-mono text-admin-green">ACTIVE (48 connections)</span></div>
              </div>
              <div className="border-b border-gray-800 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3"><Activity className="w-5 h-5 text-gray-400" /><span className="font-medium text-gray-200">Memory Usage</span></div>
                  <span className="text-sm font-mono text-gray-400">234 MB / 512 MB</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-admin-blue h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-gray-400" /><span className="font-medium text-gray-200">System Uptime</span></div>
                <span className="text-sm font-mono text-gray-300">4h 23m 17s</span>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="max-w-2xl bg-admin-panel border border-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Event Settings</h2>
            
            <div className="space-y-5 mb-8">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Event Name</label>
                <input type="text" defaultValue="PROMPT WAR 2026" className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white outline-none focus:border-admin-blue" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Event Date</label>
                <input type="date" defaultValue="2026-09-14" className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white outline-none focus:border-admin-blue" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Max Teams</label>
                <input type="number" defaultValue="50" className="w-full bg-admin-bg border border-gray-700 rounded p-2 text-white outline-none focus:border-admin-blue" />
              </div>
            </div>

            <h3 className="text-admin-orange font-semibold mb-4 border-b border-gray-800 pb-2">Fullscreen Policy</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-admin-orange focus:ring-admin-orange accent-admin-orange" />
                <span className="text-gray-300">Require fullscreen</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-admin-orange focus:ring-admin-orange accent-admin-orange" />
                <span className="text-gray-300">Pause when fullscreen exits</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-admin-orange focus:ring-admin-orange accent-admin-orange" />
                <span className="text-gray-300">Log fullscreen exits</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-admin-orange focus:ring-admin-orange accent-admin-orange" />
                <span className="text-gray-300">Notify admin</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-gray-800 border-gray-700 text-admin-orange focus:ring-admin-orange accent-admin-orange" />
                <span className="text-gray-300">Auto-disqualify after X violations</span>
              </label>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-admin-bg p-8 text-gray-100 overflow-y-auto">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <LayoutGrid className="w-8 h-8 text-gray-400" />
          <h1 className="text-3xl font-bold tracking-wider">MORE</h1>
        </div>
      </div>

      {/* TABS */}
      <div className="flex border-b border-gray-800 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-semibold text-sm transition-colors relative ${
              activeTab === tab.id ? 'text-admin-blue' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-admin-blue"></div>
            )}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}
