import React, { useState } from 'react';
import { Volume2, VolumeX, Shield, Terminal, Clock, Activity } from 'lucide-react';
import { parasiteAudio } from '../utils/parasiteAudio';

export default function ParasiteHeader({
  currentPhase = 'ENTRY',
  timer = null,
  session = {},
  onUpdateSession,
  onOpenAdmin,
  isMuted = false,
  onToggleMute,
}) {
  const [isEditingTeam, setIsEditingTeam] = useState(false);
  const [teamInput, setTeamInput] = useState(session.teamName || '');

  const handleSaveTeam = (e) => {
    e.preventDefault();
    if (teamInput.trim() && onUpdateSession) {
      onUpdateSession({ teamName: teamInput.trim() });
    }
    setIsEditingTeam(false);
  };

  const formatTimer = (seconds) => {
    if (seconds == null) return null;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0a0a0c]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Brand & Round Identity */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-acid-lime animate-pulse" />
          <div className="flex flex-col">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone-400">
              ROUND 01 / PROMPT WAR
            </span>
            <span className="font-display font-black text-sm tracking-tight text-bone-100">
              PROMPT PARASITE
            </span>
          </div>
        </div>

        {/* Center: Phase Tracker & Global Timer */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded border border-white/[0.08] bg-charcoal-900/60 font-mono text-xs">
            <span className="text-[10px] text-bone-400">PHASE:</span>
            <span className="text-acid-lime font-bold tracking-wider uppercase">
              {currentPhase.replace('_', ' ')}
            </span>
          </div>

          {timer != null && (
            <div className="flex items-center gap-2 px-3 py-1 rounded border border-acid-lime/30 bg-acid-lime/5 font-mono text-xs text-acid-lime">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-bold tracking-wider">{formatTimer(timer)}</span>
            </div>
          )}
        </div>

        {/* Right: Team Tag, Audio, Admin Trigger */}
        <div className="flex items-center gap-3">
          {/* Team Handle Badge */}
          {isEditingTeam ? (
            <form onSubmit={handleSaveTeam} className="flex items-center gap-1 font-mono text-xs">
              <input
                type="text"
                value={teamInput}
                onChange={(e) => setTeamInput(e.target.value)}
                placeholder="Team Handle"
                maxLength={20}
                className="bg-charcoal-900 border border-acid-lime/50 text-bone-100 px-2 py-0.5 text-xs outline-none rounded-none w-28"
                autoFocus
              />
              <button
                type="submit"
                className="px-2 py-0.5 bg-acid-lime text-charcoal-950 font-bold text-[10px] uppercase"
              >
                SAVE
              </button>
            </form>
          ) : (
            <button
              onClick={() => {
                setTeamInput(session.teamName || '');
                setIsEditingTeam(true);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/[0.08] bg-charcoal-900/40 hover:border-white/[0.2] font-mono text-[11px] text-bone-300 transition-colors"
              title="Click to rename team handle"
            >
              <span className="text-[9px] text-bone-500 uppercase">TEAM:</span>
              <span className="font-bold text-bone-100">{session.teamName || 'SYNAPSE'}</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={onToggleMute}
            className="p-1.5 rounded border border-white/[0.08] bg-charcoal-900/40 hover:border-white/[0.2] text-bone-400 hover:text-bone-100 transition-colors"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-acid-lime" />}
          </button>

          {/* Host / Admin Portal Access */}
          <button
            onClick={onOpenAdmin}
            className="px-2.5 py-1 rounded border border-white/[0.12] bg-charcoal-900/60 hover:border-acid-lime hover:bg-acid-lime/10 font-mono text-[10px] font-bold uppercase tracking-widest text-bone-300 hover:text-acid-lime transition-all flex items-center gap-1.5"
          >
            <Shield className="w-3 h-3 text-acid-lime" />
            <span>HOST</span>
          </button>
        </div>
      </div>
    </header>
  );
}
