import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Radio,
  Clock,
  Users,
  CheckCircle2,
  RefreshCw,
  Cpu,
  Sparkles,
  Zap,
  LogOut,
  AlertCircle,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { fetchArenaStateAPI } from '../../utils/parasiteEngine';

export default function HoldingLobby({
  session = {},
  onProceed,
  onOpenRegister,
  onLogoutTeam,
}) {
  const [arenaState, setArenaState] = useState({ isRoundStarted: false });
  const [isChecking, setIsChecking] = useState(false);
  const [autoUnlockCountdown, setAutoUnlockCountdown] = useState(null);
  const [pollCount, setPollCount] = useState(0);
  const audioTriggeredRef = useRef(false);

  // Poll arena state every 2.5 seconds
  useEffect(() => {
    let isMounted = true;

    const checkState = async () => {
      try {
        const state = await fetchArenaStateAPI();
        if (!isMounted) return;
        setArenaState(state || {});
        setPollCount((p) => p + 1);

        if (state?.isRoundStarted && !audioTriggeredRef.current) {
          audioTriggeredRef.current = true;
          parasiteAudio.playSubDrop();
          setAutoUnlockCountdown(3);
        }
      } catch (e) {
        // Fallback or network error
      }
    };

    // Initial check
    checkState();

    const interval = setInterval(checkState, 2500);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Automatic transition countdown when arena starts
  useEffect(() => {
    if (autoUnlockCountdown === null) return;
    if (autoUnlockCountdown <= 0) {
      if (onProceed) onProceed();
      return;
    }
    const t = setTimeout(() => {
      setAutoUnlockCountdown((c) => (c !== null ? c - 1 : null));
    }, 1000);
    return () => clearTimeout(t);
  }, [autoUnlockCountdown, onProceed]);

  const handleManualCheck = async () => {
    setIsChecking(true);
    parasiteAudio.playScan();
    try {
      const state = await fetchArenaStateAPI();
      setArenaState(state || {});
      if (state?.isRoundStarted) {
        parasiteAudio.playSubDrop();
        if (onProceed) onProceed();
      }
    } finally {
      setTimeout(() => setIsChecking(false), 600);
    }
  };

  const membersList = session.members && session.members.length > 0
    ? session.members
    : [session.leaderName || 'Commander'];

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-4 sm:px-8 lg:px-12 py-8 max-w-7xl mx-auto select-none">
      {/* Top Header Bar with Tech Tatva Club Emblem */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-3">
          <img
            src="/tech-tatva-logo.png"
            alt="Tech Tatva Club"
            className="h-10 w-auto object-contain drop-shadow-[0_0_14px_rgba(0,240,255,0.5)]"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-bone-100">
                TECH TATVA CLUB
              </span>
              <span className="text-bone-600">//</span>
              <span className="font-mono text-xs text-bone-400">CHANDIGARH UNIVERSITY</span>
            </div>
            <div className="font-mono text-[11px] text-cyan flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <span>ROUND 01 : PROMPT PARASITE // HOLDING LOBBY</span>
            </div>
          </div>
        </div>

        {/* Contender Status Pill */}
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded bg-charcoal-900/80 border border-cyan/30 flex items-center gap-2">
            <span className="text-[10px] font-mono text-bone-400 uppercase">TEAM PASS:</span>
            <span className="font-mono text-xs font-bold text-cyan">{session.teamCode || 'PW-0000'}</span>
            <span className="text-bone-600">|</span>
            <span className="font-mono text-xs text-bone-200 truncate max-w-[140px]">
              {session.teamName || 'ANONYMOUS'}
            </span>
          </div>

          {onLogoutTeam && (
            <button
              onClick={onLogoutTeam}
              className="p-2 rounded border border-white/[0.1] hover:border-crimson hover:text-crimson text-bone-400 text-xs transition-colors"
              title="Logout or Switch Team Pass"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Center Grid: Status Radar & Contender Pass */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-8 items-center">
        {/* Left Column: Live Radar / Broadcast Status (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Signal Indicator Box */}
          <div className="relative p-6 sm:p-8 rounded-xl border border-white/[0.1] bg-[#0d0d12]/90 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-cyan/10 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-crimson/10 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

            <div className="relative z-10 space-y-5">
              {/* Broadcast Beacon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-cyan/40 bg-cyan/10">
                    <Radio className="w-5 h-5 text-cyan animate-pulse" />
                    <span className="absolute inset-0 rounded-full border border-cyan animate-ping opacity-25" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">
                      ARENA BROADCAST RECEIVER
                    </div>
                    <div className="font-mono text-sm font-bold text-bone-100 flex items-center gap-2">
                      <span>CHANNEL: TATVA-NET-R1</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan">
                        POLL #{pollCount}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleManualCheck}
                  disabled={isChecking}
                  className="px-3 py-1.5 rounded border border-white/15 bg-charcoal-900/60 hover:border-cyan hover:text-cyan text-bone-300 font-mono text-xs flex items-center gap-1.5 transition-all"
                  title="Check host signal now"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin text-cyan' : ''}`} />
                  <span>SYNC</span>
                </button>
              </div>

              {/* Status Banner */}
              {arenaState.isRoundStarted ? (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>HOST BROADCAST DETECTED — ROUND 01 IS LIVE!</span>
                  </div>
                  <p className="text-xs text-bone-300 font-mono">
                    The tournament host has officially initiated Round 01. Entering challenge arena in{' '}
                    <span className="text-white font-bold text-sm underline">{autoUnlockCountdown}s</span>...
                  </p>
                  <button
                    onClick={onProceed}
                    className="editorial-btn text-xs px-5 py-2.5 bg-emerald-400 border-emerald-400 text-charcoal-950 font-bold hover:bg-white flex items-center gap-2 mt-2"
                  >
                    <span>ENTER ARENA NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-sm font-bold">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
                    <span>AWAITING HOST SIGNAL — ROUND 01 NOT YET STARTED</span>
                  </div>
                  <p className="text-xs text-bone-300 leading-relaxed font-sans">
                    Your team pass is confirmed and registered in the tournament database. You are securely placed in the
                    holding queue. Once the host triggers the official start from the control deck, your screen will automatically
                    unlock.
                  </p>
                </div>
              )}

              {/* Tournament Briefing Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded border border-white/[0.08] bg-charcoal-900/40">
                  <div className="font-mono text-[10px] text-cyan font-bold tracking-wider uppercase mb-1">
                    01 // FIRST FORM
                  </div>
                  <div className="text-[11px] text-bone-300">
                    10 Minutes. Craft baseline prompt and generate output using any AI model.
                  </div>
                </div>

                <div className="p-3 rounded border border-white/[0.08] bg-charcoal-900/40">
                  <div className="font-mono text-[10px] text-crimson font-bold tracking-wider uppercase mb-1">
                    02 // PARASITE
                  </div>
                  <div className="text-[11px] text-bone-300">
                    05 Minutes. Steal & assimilate 2 anonymized peer outputs. Reverse engineer logic.
                  </div>
                </div>

                <div className="p-3 rounded border border-white/[0.08] bg-charcoal-900/40">
                  <div className="font-mono text-[10px] text-acid-lime font-bold tracking-wider uppercase mb-1">
                    03 // EVOLVE
                  </div>
                  <div className="text-[11px] text-bone-300">
                    10 Minutes. Synthesize master prompt combining your angle + stolen fragments.
                  </div>
                </div>
              </div>

              {/* Permitted AI Models Banner */}
              <div className="p-3 rounded border border-cyan/20 bg-cyan/[0.04] flex items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-cyan">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span className="font-bold">EXTERNAL AI MODELS PERMITTED:</span>
                </div>
                <span className="text-bone-300 text-[11px]">
                  ChatGPT • Claude • Gemini • Perplexity • DeepSeek
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Team Pass (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border-2 border-cyan/40 bg-gradient-to-b from-[#11131a] to-[#0a0a0e] p-6 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden">
            {/* Top Cutout & Circuit Accents */}
            <div className="absolute top-0 right-8 px-4 py-1 rounded-b bg-cyan text-charcoal-950 font-mono text-[10px] font-black uppercase tracking-widest">
              OFFICIAL ENTRY PASS
            </div>
            <div className="absolute -left-12 -bottom-12 w-36 h-36 rounded-full bg-crimson/10 blur-2xl pointer-events-none" />

            <div className="space-y-5 pt-2">
              {/* Event Logos Dual Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/tech-tatva-logo.png"
                    alt="Tech Tatva"
                    className="h-9 w-auto object-contain"
                  />
                  <div className="h-6 w-[1px] bg-white/10" />
                  <img
                    src="/prompt-war-logo.png"
                    alt="Prompt War"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[9px] text-bone-500 uppercase">ARENA PASS CODE</div>
                  <div className="font-mono text-lg font-black text-cyan tracking-wider">
                    {session.teamCode || 'PW-0000'}
                  </div>
                </div>
              </div>

              {/* Team Information */}
              <div className="space-y-3">
                <div>
                  <div className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">
                    TEAM DESIGNATION
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                    {session.teamName || 'UNNAMED SQUAD'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <div className="font-mono text-[10px] text-bone-500 uppercase">TEAM LEADER</div>
                    <div className="text-xs font-mono text-bone-200 font-bold">
                      {session.leaderName || '—'}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-bone-500 uppercase">CONTACT PHONE</div>
                    <div className="text-xs font-mono text-bone-200">
                      {session.leaderContact || '—'}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="font-mono text-[10px] text-bone-500 uppercase">INSTITUTION</div>
                    <div className="text-xs font-mono text-bone-200">
                      {session.college || 'Chandigarh University'}
                    </div>
                  </div>
                </div>

                {/* Squad Members */}
                <div className="pt-2">
                  <div className="font-mono text-[10px] text-bone-400 uppercase tracking-widest flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-cyan" />
                      SQUAD OPERATIVES ({membersList.length})
                    </span>
                    <span className="text-[9px] text-emerald-400 font-bold">VERIFIED READY</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {membersList.map((m, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-bone-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pass Security Barcode / Hash */}
              <div className="border-t border-dashed border-white/[0.15] pt-4 flex items-center justify-between font-mono text-[9px] text-bone-500">
                <span>HASH: {session.participantId?.slice(0, 16) || 'SEC-TATVA-PW2026'}</span>
                <span className="text-cyan font-bold">STAGE: STANDBY QUEUE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/[0.06] pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] text-bone-500 uppercase">
        <div className="flex items-center gap-2">
          <span>TECH TATVA CLUB // DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</span>
        </div>
        <div className="flex items-center gap-2 text-bone-400">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span>LISTENING FOR HOST COMMAND ON PORT 5001</span>
        </div>
      </div>
    </div>
  );
}
