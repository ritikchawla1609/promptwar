import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import {
  ArrowRight,
  Shield,
  Zap,
  Radio,
  Clock,
  Users,
  RefreshCw,
  AlertCircle,
  FlaskConical,
  CheckCircle2,
} from 'lucide-react';
import { injectTestPeerSubmissionAPI, fetchAllArenaSubmissions } from '../../utils/parasiteEngine';

export default function Screen4Match({
  session,
  matchedOpponents = [],
  registeredTeamsCount = 1,
  lockedSubmissionsCount = 1,
  timer = 30,
  onProceedToParasite,
  onOpponentsMatched,
}) {
  const [isInjectingTest, setIsInjectingTest] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [pollTick, setPollTick] = useState(0);

  const opCount = matchedOpponents.length;
  const op1 = matchedOpponents[0];
  const op2 = matchedOpponents[1];

  // Poll for peer submissions every 2 seconds if no opponents yet
  useEffect(() => {
    if (opCount > 0) return;

    const interval = setInterval(async () => {
      setPollTick((p) => p + 1);
      try {
        const subs = await fetchAllArenaSubmissions();
        if (subs && onOpponentsMatched) {
          onOpponentsMatched(subs);
        }
      } catch (e) {}
    }, 2200);

    return () => clearInterval(interval);
  }, [opCount, onOpponentsMatched]);

  const handleManualScan = async () => {
    setIsScanning(true);
    parasiteAudio.playScan();
    try {
      const subs = await fetchAllArenaSubmissions();
      if (subs && onOpponentsMatched) {
        onOpponentsMatched(subs);
      }
    } finally {
      setTimeout(() => setIsScanning(false), 500);
    }
  };

  const handleInjectTestPeer = async () => {
    setIsInjectingTest(true);
    parasiteAudio.playInfect();
    try {
      await injectTestPeerSubmissionAPI();
      const subs = await fetchAllArenaSubmissions();
      if (subs && onOpponentsMatched) {
        onOpponentsMatched(subs);
      }
    } finally {
      setIsInjectingTest(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-10 max-w-6xl mx-auto select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
        <span className="text-bone-400 uppercase tracking-widest flex items-center gap-2">
          <span>STAGE 02 // REAL-TIME COHORT RADAR</span>
        </span>
        <span className={`font-bold uppercase tracking-widest ${opCount > 0 ? 'text-cyan' : 'text-amber-400'}`}>
          {opCount >= 2
            ? 'TRIAD CLUSTER FORMED'
            : opCount === 1
            ? '1-ON-1 DUEL CLUSTER FORMED'
            : 'SCANNING ARENA FOR PEERS'}
        </span>
      </div>

      {/* Main Center Area */}
      <div className="my-auto py-8 flex flex-col items-center text-center">
        {/* ========================================================= */}
        {/* CASE 1: WAITING FOR OTHER REAL TEAMS                      */}
        {/* ========================================================= */}
        {opCount === 0 ? (
          <div className="w-full max-w-2xl flex flex-col items-center space-y-6 animate-fadeIn">
            {/* Pulsating Radar Beacon */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-amber-500/40 bg-amber-500/10">
              <Radio className="w-10 h-10 text-amber-400 animate-pulse" />
              <span className="absolute inset-0 rounded-full border border-amber-400 animate-ping opacity-30" />
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-400 font-bold flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>FIRST FORM LOCKED // AWAITING REAL PEER TEAMS</span>
              </span>

              <h2 className="font-display font-black text-3xl sm:text-5xl text-bone-100 uppercase tracking-tight">
                ARENA CLUSTER FORMING
              </h2>

              <p className="text-xs sm:text-sm text-bone-300 font-sans max-w-lg mx-auto leading-relaxed">
                Your squad's First Form has been encrypted and committed to the tournament database.
                The system requires at least one other real competitor squad to submit their First Form before reverse-routing the peer outputs.
              </p>
            </div>

            {/* Live Arena Telemetry Card */}
            <div className="w-full p-6 rounded-xl border border-white/[0.1] bg-charcoal-900/80 font-mono text-xs text-left space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-bone-400 uppercase tracking-widest text-[10px]">
                  ARENA TELEMETRY (PORT 5001)
                </span>
                <span className="text-cyan text-[10px]">SCAN TICK #{pollTick}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-bone-500 text-[10px] uppercase">YOUR SQUAD</div>
                  <div className="text-white font-bold mt-0.5">{session.teamName || 'ANONYMOUS'}</div>
                  <div className="text-cyan text-[10px] mt-0.5">{session.teamCode} (LOCKED ✓)</div>
                </div>

                <div>
                  <div className="text-bone-500 text-[10px] uppercase">REGISTERED IN ARENA</div>
                  <div className="text-white font-bold mt-0.5">{registeredTeamsCount} Total Squads</div>
                  <div className="text-amber-400 text-[10px] mt-0.5">
                    {lockedSubmissionsCount} / {registeredTeamsCount} First Forms Ready
                  </div>
                </div>
              </div>

              {/* Status Explanation */}
              <div className="p-3 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] leading-relaxed flex items-start gap-2.5">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <strong>Awaiting Opponent First Form:</strong> Other contenders are currently writing their baseline prompts.
                  As soon as any squad clicks "Lock First Form", this screen will auto-lock your cluster and enter Parasite mode!
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={handleManualScan}
                  disabled={isScanning}
                  className="w-full sm:w-auto px-4 py-2 rounded border border-white/20 bg-charcoal-950 hover:border-cyan text-bone-200 hover:text-cyan font-mono text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin text-cyan' : ''}`} />
                  <span>CHECK FOR SUBMISSIONS NOW</span>
                </button>

                {/* Solo Test Mode Injector */}
                <button
                  onClick={handleInjectTestPeer}
                  disabled={isInjectingTest}
                  className="w-full sm:w-auto px-4 py-2 rounded border border-cyan/40 bg-cyan/10 hover:bg-cyan hover:text-charcoal-950 text-cyan font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                  title="If you are testing alone on a single laptop without other teams, click this to generate 1 test opponent"
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>{isInjectingTest ? 'GENERATING PEER...' : 'TEST SOLO: ADD 1 TEST SQUAD'}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* CASE 2: REAL OPPONENTS UNLOCKED (1-ON-1 OR TRIAD)          */
          /* ========================================================= */
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-cyan font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan" />
              <span>REAL PEER MATCH FORMED // {opCount >= 2 ? 'TRIAD ACTIVE' : '1-ON-1 DUEL ACTIVE'}</span>
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-bone-100 uppercase tracking-tight mb-10">
              REAL OPPONENT OUTPUTS UNLOCKED
            </h2>

            {/* Dynamic Grid: 2 Columns if 1 opponent, 3 Columns if 2 opponents */}
            <div
              className={`w-full max-w-5xl grid grid-cols-1 ${
                opCount >= 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'
              } gap-6 text-left font-mono`}
            >
              {/* Pillar 1: YOU (Electric Cyan) */}
              <div className="p-6 border-2 border-cyan/70 bg-charcoal-900/95 flex flex-col justify-between shadow-[0_0_35px_rgba(0,240,255,0.2)] relative overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-cyan shadow-[0_0_12px_#00f0ff]" />
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                    <span className="text-[10px] text-cyan font-bold uppercase tracking-widest">
                      YOUR FIRST FORM
                    </span>
                    <span className="px-2 py-0.5 bg-cyan text-charcoal-950 text-[10px] font-black uppercase rounded">
                      YOU
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-bone-100 mb-2">
                    {session.teamName || session.anonymousId}
                  </h3>
                  <p className="text-xs text-bone-300 font-sans leading-relaxed line-clamp-3">
                    {session.firstOutput ? session.firstOutput.slice(0, 180) + '...' : 'Baseline solution submitted in Phase 01.'}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] text-cyan uppercase font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                  <span>PAYLOAD: CONFIRMED REAL</span>
                </div>
              </div>

              {/* Pillar 2: OPPONENT 01 (Cyber Crimson) */}
              <div className="p-6 border-2 border-crimson/70 bg-charcoal-900/95 flex flex-col justify-between shadow-[0_0_35px_rgba(255,42,95,0.2)] relative overflow-hidden rounded-xl">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-crimson shadow-[0_0_12px_#ff2a5f]" />
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                    <span className="text-[10px] text-crimson font-bold uppercase tracking-widest">
                      HOST TARGET 01
                    </span>
                    <span className="px-2 py-0.5 bg-crimson/20 border border-crimson/50 text-crimson text-[10px] font-bold uppercase rounded">
                      REAL PEER
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-crimson mb-2 drop-shadow-[0_0_10px_rgba(255,42,95,0.4)]">
                    {op1?.anonymousId || 'OPPONENT 01'}
                  </h3>
                  <p className="text-xs text-bone-300 font-sans leading-relaxed line-clamp-3">
                    {op1?.output ? op1.output.slice(0, 180) + '...' : 'Real solution submitted by rival team.'}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] text-crimson uppercase font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-crimson rounded-full animate-ping" />
                  <span>PAYLOAD: EXTRACTED FROM ARENA</span>
                </div>
              </div>

              {/* Pillar 3: OPPONENT 02 (Only rendered if 2 opponents present) */}
              {opCount >= 2 && op2 && (
                <div className="p-6 border-2 border-crimson/70 bg-charcoal-900/95 flex flex-col justify-between shadow-[0_0_35px_rgba(255,42,95,0.2)] relative overflow-hidden rounded-xl">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-crimson shadow-[0_0_12px_#ff2a5f]" />
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                      <span className="text-[10px] text-crimson font-bold uppercase tracking-widest">
                        HOST TARGET 02
                      </span>
                      <span className="px-2 py-0.5 bg-crimson/20 border border-crimson/50 text-crimson text-[10px] font-bold uppercase rounded">
                        REAL PEER
                      </span>
                    </div>
                    <h3 className="font-display font-black text-2xl text-crimson mb-2 drop-shadow-[0_0_10px_rgba(255,42,95,0.4)]">
                      {op2.anonymousId || 'OPPONENT 02'}
                    </h3>
                    <p className="text-xs text-bone-300 font-sans leading-relaxed line-clamp-3">
                      {op2.output ? op2.output.slice(0, 180) + '...' : 'Second real solution captured from peer cluster.'}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] text-crimson uppercase font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-crimson rounded-full animate-ping" />
                    <span>PAYLOAD: EXTRACTED FROM ARENA</span>
                  </div>
                </div>
              )}
            </div>

            {/* Synchronized Call to Enter Parasite Mode */}
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="px-5 py-2 rounded-xl bg-cyan/10 border border-cyan/40 text-cyan font-mono text-xs font-bold tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Clock className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                <span>ALL SQUADS ADVANCING IN: {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')}</span>
              </div>

              <button
                onClick={onProceedToParasite}
                className="editorial-btn group text-xs sm:text-sm px-10 py-4 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:scale-105 transition-all flex items-center gap-3"
              >
                <span>ENTER PARASITE MODE NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">
                STAGE 03 DURATION: 10:00 MINUTES // INSPECT & MUTATE WITH PEER SOLUTIONS
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
        <span>SECURITY PROTOCOL: ZERO IDENTITIES DISCLOSED</span>
        <span>TECH TATVA PROMPT WAR // ARENA CLUSTER</span>
      </div>
    </div>
  );
}
