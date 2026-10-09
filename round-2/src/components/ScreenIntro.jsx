import React, { useState } from 'react';
import VaultGraphic from './VaultGraphic';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function ScreenIntro({ onBegin, initialTeamName = '', serverClock = null, remainingSeconds = 720 }) {
  const [teamName, setTeamName] = useState(initialTeamName || '');
  const [error, setError] = useState('');

  const isBriefing = serverClock?.status === 'BRIEFING' || serverClock?.status === 'SCHEDULED';
  const isPaused = serverClock?.status === 'PAUSED';
  const isCompleted = serverClock?.status === 'COMPLETED';
  const isLive = serverClock?.status === 'LIVE';

  const formatMMSS = (sec) => {
    const s = Math.max(0, Math.floor(sec));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBriefing) {
      setError(`Briefing period active. Official competition begins in ${serverClock.secondsUntilStart || 0}s.`);
      return;
    }
    if (isPaused) {
      setError('Arena is currently paused by administrator.');
      return;
    }
    if (isCompleted) {
      setError('Official competition round has concluded.');
      return;
    }
    if (!teamName.trim()) {
      setError('Please provide a team identifier to access the archive.');
      return;
    }
    setError('');
    onBegin(teamName.trim());
  };

  return (
    <div className="min-h-screen bg-archive-950 flex flex-col justify-between px-6 sm:px-12 lg:px-24 py-8 lg:py-16 selection:bg-amber-500/20">
      {/* Top Identification */}
      <header className="flex items-center justify-between border-b border-archive-700/60 pb-6">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          <span className="text-xs uppercase tracking-widest text-ivory-400 font-medium">
            Prompt War · Round 02
          </span>
        </div>
        <div className="text-xs font-mono text-ivory-500 tracking-wider">
          CLASSIFICATION: RESTRICTED
        </div>
      </header>

      {/* Main Spacious Hero */}
      <main className="my-auto py-10 lg:py-14 max-w-7xl mx-auto w-full space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Briefing & Input */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs">
                <span>INCIDENT LOG 03:17 UTC</span>
                <span>·</span>
                <span>AETHELGARD BIO-COMPUTE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ivory-100 leading-tight">
                Operation Blackbox
              </h1>
              <p className="text-lg sm:text-xl text-amber-500 font-medium tracking-wide">
                The breach at Aethelgard Facility. The records don&apos;t agree.
              </p>
            </div>

            <p className="text-sm sm:text-base text-ivory-300 leading-relaxed max-w-xl font-normal">
              At 03:17 UTC, an unauthorized 42.8 GB telemetry egress occurred from the secure sub-vault. Multiple security, badge, and maintenance records present conflicting timelines. Inspect the evidence, interrogate the archive, expose fabricated logs, and submit an evidence-backed finding.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 pt-2 max-w-md">
              <div>
                <label 
                  htmlFor="teamName" 
                  className="block text-xs uppercase tracking-wider text-ivory-400 font-medium mb-2"
                >
                  Investigator / Team Identifier
                </label>
                <input
                  id="teamName"
                  type="text"
                  value={teamName}
                  onChange={(e) => {
                    setTeamName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your team name..."
                  className="w-full bg-archive-900 border border-archive-700 text-ivory-100 px-4 py-3.5 rounded-lg text-base focus:outline-none focus:border-amber-500 transition-colors placeholder:text-ivory-500 font-sans"
                  autoComplete="off"
                  autoFocus
                />
                {error && (
                  <p className="mt-2 text-xs text-amber-400 font-medium">
                    {error}
                  </p>
                )}
              </div>

              {/* Synchronized Briefing / Live Action Button */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isBriefing || isPaused || isCompleted}
                  className={`w-full font-semibold px-6 py-4 rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 ${
                    isBriefing
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-not-allowed'
                      : isPaused
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 cursor-not-allowed'
                      : isCompleted
                      ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-amber-500 hover:bg-amber-600 text-archive-950 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:translate-y-0.5'
                  }`}
                >
                  {isBriefing ? (
                    <span className="text-sm font-mono tracking-wide flex items-center space-x-2">
                      <Clock className="w-4 h-4 animate-spin" />
                      <span>WAITING FOR OFFICIAL START ({serverClock.secondsUntilStart || 0}s)</span>
                    </span>
                  ) : isPaused ? (
                    <span className="text-sm font-mono tracking-wide">COMPETITION PAUSED BY ADMIN</span>
                  ) : isCompleted ? (
                    <span className="text-sm font-mono tracking-wide">ROUND CONCLUDED</span>
                  ) : (
                    <>
                      <span className="text-base tracking-wide font-bold">
                        {isLive ? `Enter live investigation (${formatMMSS(remainingSeconds)} left)` : 'Start Investigation'}
                      </span>
                      <ArrowRight className="w-5 h-5 text-archive-950" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-xs text-ivory-500 pt-1 px-1">
                  <span className="flex items-center space-x-1.5 font-mono">
                    <Clock className="w-4 h-4 text-ivory-400" />
                    <span>
                      {isLive
                        ? `Authoritative deadline: ${formatMMSS(remainingSeconds)} remaining`
                        : isBriefing
                        ? `Briefing countdown: ${serverClock.secondsUntilStart || 0}s`
                        : 'Scheduled duration: 12 minutes'}
                    </span>
                  </span>
                  <span className="flex items-center space-x-1.5 font-mono text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-ivory-400" />
                    <span>Authoritative Clock Synced</span>
                  </span>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Custom Vault Art */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <VaultGraphic className="w-full max-w-sm sm:max-w-md lg:max-w-lg" />
          </div>
        </div>

        {/* 5-Step Playbook Overview */}
        <div className="pt-8 border-t border-archive-700/60">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-bold">
              INVESTIGATION PLAYBOOK // 5 MANDATORY PHASES
            </span>
            <span className="text-[11px] font-mono text-ivory-500">
              Deterministic Evidence Evaluator
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Inspect Evidence',
                desc: 'Browse the 14 facility records (telemetry, badge swipes, network spools, maintenance).',
              },
              {
                step: '02',
                title: 'Ask Key Queries',
                desc: 'Use natural prompts to probe specific timestamps, systems, and personnel activities.',
              },
              {
                step: '03',
                title: 'Cross-Reference',
                desc: 'Compare overlapping logs to discover contradictions and expose falsified alibis.',
              },
              {
                step: '04',
                title: 'Track 3 Objectives',
                desc: 'Confirm egress signal, pinpoint execution vector, and reconstruct the true chronology.',
              },
              {
                step: '05',
                title: 'Submit Conclusion',
                desc: 'Lock in your evidence citations and submit your final verdict before the deadline.',
              },
            ].map((card) => (
              <div
                key={card.step}
                className="p-4 rounded-xl bg-archive-900 border border-archive-700/80 space-y-2 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-400">PHASE {card.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                </div>
                <h4 className="text-sm font-semibold text-ivory-100">{card.title}</h4>
                <p className="text-xs text-ivory-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-archive-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory-500 gap-2">
        <span>Aethelgard Deep Bio-Compute Facility // Security Ledger</span>
        <span>Zero External Inference Required · Offline Capable</span>
      </footer>
    </div>
  );
}
