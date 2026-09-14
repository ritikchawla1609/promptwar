import React, { useState } from 'react';
import { Volume2, VolumeX, Shield, Terminal, Clock, Activity, Key, LogOut } from 'lucide-react';
import { parasiteAudio } from '../utils/parasiteAudio';

export default function ParasiteHeader({
  currentPhase = 'ENTRY',
  timer = null,
  session = {},
  onUpdateSession,
  onOpenAdmin,
  onOpenRegister,
  onLogoutTeam,
  isMuted = false,
  onToggleMute,
}) {
  const formatTimer = (seconds) => {
    if (seconds == null) return null;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0a0a0c]/85 backdrop-blur-xl relative">
      {/* Dual Logo Accent Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan/50 via-white/5 to-crimson/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Tech Tatva Club & Prompt War Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img
              src="/tech-tatva-logo.png"
              alt="Tech Tatva Club"
              className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] hover:scale-105 transition-transform"
              title="Tech Tatva Club // Chandigarh University"
            />
            <div className="h-5 w-[1px] bg-white/10 hidden sm:block" />
            <img
              src="/prompt-war-logo.png"
              alt="Prompt War"
              className="h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan font-bold">
              <span>TECH TATVA CLUB</span>
              <span className="text-bone-600">//</span>
              <span className="text-bone-400">CU</span>
            </div>
            <span className="font-display font-black text-sm tracking-tight text-bone-100">
              PROMPT PARASITE
            </span>
          </div>
        </div>

        {/* Center: Phase Tracker & Global Timer */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded border border-white/[0.08] bg-charcoal-900/60 font-mono text-xs">
            <span className="text-[10px] text-bone-400">PHASE:</span>
            <span className="text-cyan font-bold tracking-wider uppercase">
              {currentPhase.replace('_', ' ')}
            </span>
          </div>

          {timer != null && (
            <div className="flex items-center gap-2 px-3 py-1 rounded border border-cyan/30 bg-cyan/5 font-mono text-xs text-cyan">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-bold tracking-wider">{formatTimer(timer)}</span>
            </div>
          )}
        </div>

        {/* Right: Team Tag, Audio, Admin Trigger */}
        <div className="flex items-center gap-3">
          {/* Team Handle Badge / Registration & Login Trigger */}
          {session.teamCode ? (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onOpenRegister && onOpenRegister('PASS_ISSUED')}
                className="flex items-center gap-1.5 px-3 py-1 rounded border border-cyan/40 bg-cyan/10 text-bone-100 hover:border-cyan hover:bg-cyan/20 font-mono text-[11px] transition-all"
                title="Click to view verified Team Pass"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                <span className="text-[9px] uppercase tracking-wider text-bone-400">TEAM:</span>
                <span className="font-bold text-cyan">{session.teamName}</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-black/50 text-cyan font-mono rounded border border-cyan/30">
                  {session.teamCode}
                </span>
              </button>

              {onLogoutTeam && (
                <button
                  onClick={onLogoutTeam}
                  className="p-1.5 rounded border border-white/[0.08] hover:border-crimson hover:text-crimson text-bone-500 transition-colors"
                  title="Switch / Logout current team"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenRegister && onOpenRegister('REGISTER')}
                className="flex items-center gap-1.5 px-3 py-1 rounded border border-cyan/60 bg-charcoal-900/90 text-cyan hover:bg-cyan hover:text-charcoal-950 font-mono text-[11px] font-bold transition-all animate-pulse"
                title="Register Official Team"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <span>REGISTER TEAM</span>
              </button>

              <button
                onClick={() => onOpenRegister && onOpenRegister('LOGIN')}
                className="flex items-center gap-1 px-2.5 py-1 rounded border border-white/[0.12] bg-charcoal-900/40 text-bone-300 hover:border-cyan hover:text-cyan font-mono text-[11px] transition-all"
                title="Login / Resume Pass with PW-XXXX after refresh"
              >
                <Key className="w-3 h-3 text-cyan" />
                <span>LOGIN</span>
              </button>
            </div>
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
