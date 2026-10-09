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
      <main className="my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
        {/* Left Column: Briefing & Input */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ivory-100 leading-tight">
              Operation Blackbox
            </h1>
            <p className="text-lg sm:text-xl text-amber-500 font-medium tracking-wide">
              The intelligence exists. Your prompt unlocks it.
            </p>
          </div>

          <p className="text-base sm:text-lg text-ivory-300 leading-relaxed max-w-xl font-normal">
            Someone accessed a secure research facility. The records don&apos;t agree on what happened. 
            Find the evidence, question the reports, and uncover the truth.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 pt-4 max-w-md">
            <div>
              <label 
                htmlFor="teamName" 
                className="block text-xs uppercase tracking-wider text-ivory-400 font-medium mb-2.5"
              >
                Team Identifier
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
            <div className="space-y-4">
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
                    <span className="text-base tracking-wide">
                      {isLive ? `Enter live investigation (${formatMMSS(remainingSeconds)} left)` : 'Begin investigation'}
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
                  <span>Global Clock Synchronized</span>
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Custom Vault Art */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <VaultGraphic className="w-full max-w-sm sm:max-w-md lg:max-w-lg" />
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
