import React, { useState } from 'react';
import { BarChart2, ChevronDown, ChevronUp } from 'lucide-react';

export default function AnalyticsPage() {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  const scoreDistribution = [
    { code: 'PW-3190', score: 186 },
    { code: 'PW-5128', score: 179 },
    { code: 'PW-1042', score: 176 },
    { code: 'PW-8401', score: 174 },
    { code: 'PW-2390', score: 167 },
    { code: 'PW-1821', score: 160 },
    { code: 'PW-6712', score: 134 },
    { code: 'PW-4412', score: 117 },
    { code: 'PW-9301', score: 110 },
    { code: 'PW-7788', score: 93 },
  ];

  const phaseTimes = [
    { name: 'Crime Scene', time: 8, max: 15 },
    { name: 'Suspects', time: 12, max: 15 },
    { name: 'AI Trap', time: 6, max: 15 },
    { name: 'Forensics', time: 15, max: 15 },
    { name: 'Case Board', time: 9, max: 15 },
    { name: 'Final', time: 5, max: 15 },
  ];

  const topTeams = [
    { code: 'PW-3190', name: 'Cyber Wolves', total: 186, breakdown: { evidence: 30, prompt: 25, timeline: 20, final: 19, penalty: -3 } },
    { code: 'PW-5128', name: 'Prompt Lords', total: 179, breakdown: { evidence: 28, prompt: 24, timeline: 18, final: 18, penalty: 0 } },
    { code: 'PW-1042', name: 'Alpha Strike', total: 176, breakdown: { evidence: 29, prompt: 22, timeline: 19, final: 17, penalty: 0 } },
  ];

  const toggleAccordion = (code: string) => {
    setExpandedTeam(expandedTeam === code ? null : code);
  };

  return (
    <div className="flex flex-col h-full bg-admin-bg p-8 text-gray-100 overflow-y-auto">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <BarChart2 className="w-8 h-8 text-admin-uv" />
          <h1 className="text-3xl font-bold tracking-wider">ANALYTICS</h1>
        </div>
        <p className="text-gray-400 mt-2">Event performance insights and metrics</p>
      </div>

      {/* TOP METRICS ROW */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-1">Average Score</p>
          <p className="text-3xl font-bold font-mono text-admin-blue">148.6</p>
        </div>
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-1">Highest Score</p>
          <p className="text-3xl font-bold font-mono text-admin-green">186</p>
          <p className="text-gray-500 text-xs mt-1">Cyber Wolves</p>
        </div>
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-1">Lowest Score</p>
          <p className="text-3xl font-bold font-mono text-admin-red">93</p>
          <p className="text-gray-500 text-xs mt-1">Echo Chamber</p>
        </div>
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-1">Completion Rate</p>
          <p className="text-3xl font-bold font-mono text-admin-uv">87%</p>
        </div>
      </div>

      {/* CHART PLACEHOLDER CARDS */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Score Distribution */}
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Score Distribution</h2>
          <div className="space-y-3">
            {scoreDistribution.map((team, idx) => (
              <div key={team.code} className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-400 w-16">{team.code}</span>
                <div className="flex-1 bg-gray-800 rounded h-4 overflow-hidden">
                  <div 
                    className="h-full bg-admin-blue/80" 
                    style={{ width: `${(team.score / 200) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs font-mono text-gray-300 w-8 text-right">{team.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Completion Times */}
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Phase Completion Times (Avg)</h2>
          <div className="space-y-4 mt-6">
            {phaseTimes.map(phase => (
              <div key={phase.name} className="flex items-center gap-3">
                <span className="text-sm text-gray-400 w-24 truncate">{phase.name}</span>
                <div className="flex-1 bg-gray-800 rounded h-3 overflow-hidden">
                  <div 
                    className="h-full bg-admin-orange/80" 
                    style={{ width: `${(phase.time / phase.max) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs font-mono text-gray-300 w-8 text-right">{phase.time}m</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Progress Over Time */}
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6 min-h-[250px] flex items-center justify-center">
          <div className="w-full h-full border border-dashed border-gray-700 rounded-lg flex items-center justify-center p-8">
            <p className="text-gray-500 text-center">Real-time progress tracking will appear here during live events</p>
          </div>
        </div>

        {/* Round Comparison */}
        <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Round Comparison</h2>
          <div className="flex gap-4 h-[200px]">
            <div className="flex-1 bg-gray-800/50 rounded-lg p-4 flex flex-col justify-center">
              <h3 className="text-gray-300 font-semibold text-center mb-4">Round 1</h3>
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Avg:</span><span className="font-mono">79.7</span></div>
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Max:</span><span className="font-mono text-admin-green">92</span></div>
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Min:</span><span className="font-mono text-admin-red">55</span></div>
              </div>
            </div>
            <div className="flex-1 bg-gray-800/50 rounded-lg p-4 flex flex-col justify-center">
              <h3 className="text-gray-300 font-semibold text-center mb-4">Round 3</h3>
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Avg:</span><span className="font-mono">69.9</span></div>
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Max:</span><span className="font-mono text-admin-green">94</span></div>
                <div className="flex justify-between"><span className="text-gray-500 text-sm">Min:</span><span className="font-mono text-admin-red">38</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED TEAM PERFORMANCE */}
      <div className="bg-admin-panel border border-gray-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Top Teams Detailed Performance</h2>
          <button className="text-sm text-admin-blue hover:underline">Show all teams</button>
        </div>
        
        <div className="space-y-3">
          {topTeams.map((team, idx) => (
            <div key={team.code} className="border border-gray-800 rounded-lg overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-4 bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleAccordion(team.code)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-yellow-500 font-bold w-6">#{idx + 1}</span>
                  <span className="font-mono text-gray-300">{team.code}</span>
                  <span className="font-medium">{team.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-admin-uv">{team.total} pts</span>
                  {expandedTeam === team.code ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </div>
              </button>
              
              {expandedTeam === team.code && (
                <div className="p-4 bg-gray-900/50 border-t border-gray-800 grid grid-cols-5 gap-4">
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center justify-center">
                    <span className="text-xs text-gray-400 mb-1">Evidence Accuracy</span>
                    <span className="font-mono text-admin-green">+{team.breakdown.evidence}</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center justify-center">
                    <span className="text-xs text-gray-400 mb-1">Prompt Quality</span>
                    <span className="font-mono text-admin-green">+{team.breakdown.prompt}</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center justify-center">
                    <span className="text-xs text-gray-400 mb-1">Timeline Accuracy</span>
                    <span className="font-mono text-admin-green">+{team.breakdown.timeline}</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center justify-center">
                    <span className="text-xs text-gray-400 mb-1">Final Submission</span>
                    <span className="font-mono text-admin-green">+{team.breakdown.final}</span>
                  </div>
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center justify-center">
                    <span className="text-xs text-gray-400 mb-1">Penalty</span>
                    <span className="font-mono text-admin-red">{team.breakdown.penalty}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
