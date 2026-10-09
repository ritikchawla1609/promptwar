import React, { useState } from 'react';
import VaultGraphic from './VaultGraphic';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

export default function ScreenIntro({ onBegin, initialTeamName = '' }) {
  const [teamName, setTeamName] = useState(initialTeamName || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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

            {/* Duration pill and single primary action */}
            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-archive-950 font-semibold px-6 py-4 rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:translate-y-0.5"
              >
                <span className="text-base tracking-wide">Begin investigation</span>
                <ArrowRight className="w-5 h-5 text-archive-950" />
              </button>

              <div className="flex items-center justify-between text-xs text-ivory-500 pt-1 px-1">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-ivory-400" />
                  <span>Estimated duration: 12 minutes</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-ivory-400" />
                  <span>Deterministic Archive</span>
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
