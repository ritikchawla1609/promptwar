import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Shield,
  Zap,
  Radio,
  Users,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  AlertTriangle,
  LogOut,
} from 'lucide-react';
import {
  fetchArenaStateAPI,
  fetchAllTeamsAPI,
  fetchAllArenaSubmissions,
  fetchPhaseClockAPI,
} from '../../utils/parasiteEngine';
import { parasiteAudio } from '../../utils/parasiteAudio';

export default function AudienceProjectorView({ onClose, onGoToAdmin }) {
  const [arenaState, setArenaState] = useState({
    isRoundStarted: false,
    activePhase: 'LOBBY',
    startedAt: null,
  });
  const [phaseClock, setPhaseClock] = useState({
    remainingSeconds: 0,
    totalSeconds: 0,
    activePhase: 'LOBBY',
    isRoundStarted: false,
    submittedCount: 0,
  });
  const [teams, setTeams] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const prevPhaseRef = useRef('LOBBY');

  // Load arena data
  const loadData = async () => {
    try {
      const [state, clock, teamList, subsList] = await Promise.all([
        fetchArenaStateAPI(),
        fetchPhaseClockAPI(),
        fetchAllTeamsAPI(),
        fetchAllArenaSubmissions(),
      ]);
      if (state) setArenaState(state);
      if (clock && clock.success) {
        setPhaseClock(clock);
        // Play alert sound on phase change
        if (clock.activePhase !== prevPhaseRef.current) {
          prevPhaseRef.current = clock.activePhase;
          if (!isAudioMuted) parasiteAudio.playSubDrop();
        }
      }
      if (teamList) setTeams(teamList);
      if (subsList) setSubmissions(subsList);
    } catch (e) {
      console.warn('Projector poll error:', e);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 2000);
    return () => clearInterval(interval);
  }, [isAudioMuted]);

  // Smooth local countdown tick
  useEffect(() => {
    const tick = setInterval(() => {
      setPhaseClock((prev) => ({
        ...prev,
        remainingSeconds: Math.max(0, prev.remainingSeconds - 1),
      }));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const activePhase = phaseClock.activePhase || arenaState.activePhase || 'LOBBY';
  const remainingSecs = phaseClock.remainingSeconds;
  const mins = Math.floor(remainingSecs / 60);
  const secs = remainingSecs % 60;
  const timeFormatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  // Progress percentage
  const progressPercent = phaseClock.totalSeconds > 0
    ? Math.max(0, Math.min(100, Math.round(((phaseClock.totalSeconds - remainingSecs) / phaseClock.totalSeconds) * 100)))
    : 0;

  // Phase metadata for spectators
  const getPhaseMeta = (phase) => {
    switch (phase) {
      case 'BRIEFING':
        return {
          title: 'PHASE 01 // MISSION BRIEFING',
          subtitle: 'Scenario Unveiled // Contenders Formulating Baseline AI Tactics',
          desc: 'Contenders are analyzing the real-world growth challenge. External frontier AI models are being primed for baseline strategy generation.',
          color: 'text-amber-400',
          borderColor: 'border-amber-400/40',
        };
      case 'CREATE':
        return {
          title: 'PHASE 02 // FIRST FORM SYNTHESIS',
          subtitle: 'Baseline AI Prompt Engineering // Live Arena Submission',
          desc: 'Contenders are actively prompting ChatGPT, Claude, and Gemini to craft their baseline solution. First forms are encrypted upon arrival.',
          color: 'text-cyan',
          borderColor: 'border-cyan/40',
        };
      case 'MATCH':
        return {
          title: 'PHASE 03 // PEER CLUSTER MATCHMAKING',
          subtitle: 'Autonomous Cohort Infiltration // Adversarial Assignment',
          desc: 'The central server is distributing anonymized opponent solutions across the cohort with zero duplicate bias.',
          color: 'text-crimson',
          borderColor: 'border-crimson/40',
        };
      case 'PARASITE':
        return {
          title: 'PHASE 04 // PARASITE MUTATION STUDY',
          subtitle: 'Reverse-Engineering Competitor Outputs // Tactical Infiltration',
          desc: 'Contenders are dissecting opponent outputs, analyzing rival strategies, and recording private mutation notes to steal key advantages.',
          color: 'text-acid-lime',
          borderColor: 'border-acid-lime/40',
        };
      case 'EVOLVE':
        return {
          title: 'PHASE 05 // FINAL EVOLUTION FORGE',
          subtitle: 'Synthesizing Peer Advantages // Crafting Superior Final Form',
          desc: 'Contenders are engineering an evolved final prompt that eliminates their earlier flaws and synthesizes the best ideas from rival outputs.',
          color: 'text-cyan',
          borderColor: 'border-cyan/40',
        };
      case 'COMPLETE':
        return {
          title: 'PHASE 06 // ARENA CONCLUDED & JUDGING',
          subtitle: 'Submissions Sealed // Official Evaluation Matrix Engaged',
          desc: 'All contender submissions are permanently locked. Judges from Tech Tatva Club are evaluating Prompt Quality, Logic, and Evolutionary Lift.',
          color: 'text-emerald-400',
          borderColor: 'border-emerald-400/40',
        };
      default:
        return {
          title: 'ARENA STANDBY // HOLDING LOBBY',
          subtitle: 'Squad Registration & Verification in Progress',
          desc: 'Contenders are locking their squad rosters (2–4 members). Arena gateway will open upon official commencement by Tech Tatva host.',
          color: 'text-bone-300',
          borderColor: 'border-white/20',
        };
    }
  };

  const meta = getPhaseMeta(activePhase);

  // Submissions snippet pool for spectator ticker
  const liveSnippets = submissions
    .filter((s) => (s.firstOutput && s.firstOutput.trim()) || (s.finalOutput && s.finalOutput.trim()))
    .map((s) => ({
      teamCode: s.teamCode || 'ANON',
      text: (s.finalOutput || s.firstOutput || '').slice(0, 180),
      stage: s.finalOutput ? 'EVOLVED FORM' : 'FIRST FORM',
    }));

  return (
    <div className="min-h-screen bg-[#07080d] text-bone-100 font-sans relative overflow-hidden select-none flex flex-col justify-between p-6 sm:p-10">
      {/* Background Cyber Grid & Glow Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ========================================================= */}
      {/* TOP HEADER: TECH TATVA BRANDING & BROADCAST BADGES       */}
      {/* ========================================================= */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/[0.1] pb-5">
        <div className="flex items-center gap-4">
          <img
            src="/tech-tatva-logo.png"
            alt="Tech Tatva Club"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
              <span className="font-mono text-xs sm:text-sm font-black text-cyan uppercase tracking-widest">
                TECH TATVA CLUB // CHANDIGARH UNIVERSITY
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black font-mono text-white tracking-wider">
              PROMPT WAR : <span className="text-cyan">ROUND 01</span> // AUDIENCE ARENA FEED
            </h1>
          </div>
        </div>

        {/* Live Broadcast Pill & Screen Controls */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 font-mono text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>LIVE AUDITORIUM STREAM</span>
          </div>

          <button
            onClick={() => setIsAudioMuted(!isAudioMuted)}
            className="p-2.5 rounded-lg border border-white/15 bg-charcoal-900/80 text-bone-300 hover:text-white hover:border-cyan transition-colors"
            title={isAudioMuted ? 'Unmute Arena Audio FX' : 'Mute Arena Audio FX'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4 text-crimson" /> : <Volume2 className="w-4 h-4 text-cyan" />}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2.5 rounded-lg border border-white/15 bg-charcoal-900/80 text-bone-300 hover:text-white hover:border-cyan transition-colors"
            title="Toggle Projector Fullscreen (F11)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4 text-cyan" />}
          </button>

          {onGoToAdmin && (
            <button
              onClick={onGoToAdmin}
              className="px-3.5 py-2 rounded-lg border border-cyan/40 bg-cyan/10 hover:bg-cyan hover:text-charcoal-950 text-cyan font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>EXIT TO HOST CONSOLE</span>
            </button>
          )}
        </div>
      </header>

      {/* ========================================================= */}
      {/* CENTERPIECE: STAGE MONITOR & GIANT CYBER CLOCK           */}
      {/* ========================================================= */}
      <main className="relative z-10 my-auto py-6 flex flex-col items-center text-center space-y-6">
        {/* Active Phase Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 font-mono text-xs tracking-widest uppercase">
          <Activity className={`w-3.5 h-3.5 ${meta.color} animate-pulse`} />
          <span className="text-bone-400">TOURNAMENT STATUS:</span>
          <span className={`font-bold ${meta.color}`}>{meta.title}</span>
        </div>

        {/* Phase Context for Spectators */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            {meta.subtitle}
          </h2>
          <p className="text-xs sm:text-sm text-bone-400 font-sans max-w-2xl mx-auto leading-relaxed">
            {meta.desc}
          </p>
        </div>

        {/* Giant Cyber Synchronized Countdown Clock */}
        {arenaState.isRoundStarted && (
          <div className="w-full max-w-2xl p-6 sm:p-8 rounded-3xl border-2 border-cyan/40 bg-gradient-to-b from-[#0f1422] to-[#0a0c12] shadow-[0_0_70px_rgba(0,240,255,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_15px_#00f0ff]" />

            <div className="flex flex-col items-center">
              <span className="text-[11px] font-mono text-bone-400 uppercase tracking-[0.3em] mb-1 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan animate-spin" style={{ animationDuration: '8s' }} />
                <span>SYNCHRONIZED ARENA PHASE COUNTDOWN</span>
              </span>

              {/* Giant Digits */}
              <div className="font-mono text-6xl sm:text-8xl md:text-9xl font-black text-cyan tracking-tighter drop-shadow-[0_0_35px_rgba(0,240,255,0.6)] my-1">
                {timeFormatted}
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-lg mt-4 space-y-2">
                <div className="w-full bg-charcoal-900 h-2.5 rounded-full overflow-hidden border border-white/10">
                  <div
                    className="bg-cyan h-full transition-all duration-1000 shadow-[0_0_15px_#00f0ff]"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-bone-400">
                  <span>PHASE ELAPSED: {progressPercent}%</span>
                  <span className="text-cyan font-bold">
                    SUBMISSIONS CAPTURED: {phaseClock.submittedCount || 0} / {Math.max(1, teams.length)} SQUADS
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TWO-COLUMN LIVE TELEMETRY DECK                            */}
        {/* ========================================================= */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 text-left pt-2">
          {/* Deck 1: Live Squad Radar */}
          {/* Deck 1: Live Squad Radar (Optimized for 60+ Contenders) */}
          <div className="p-5 rounded-2xl border border-white/[0.1] bg-charcoal-950/80 backdrop-blur-md space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-cyan font-bold uppercase tracking-wider">
                  <Radio className="w-4 h-4 text-cyan animate-pulse" />
                  <span>ARENA SQUAD RADAR ({teams.length} SQUADS)</span>
                </div>
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-cyan/15 border border-cyan/30 text-cyan font-bold">
                    {teams.filter((t) => t.round1?.firstOutput).length} LOCKED
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                    {teams.filter((t) => !t.round1?.firstOutput).length} DRAFTING
                  </span>
                </div>
              </div>

              {/* Dense Esports Squad Grid (Scrollable for 60+ Teams) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 max-h-72 sm:max-h-80 overflow-y-auto pr-1 mt-3">
                {teams.length === 0 ? (
                  <div className="col-span-3 text-center py-12 text-bone-500 font-mono text-xs">
                    Awaiting squad registration entries from contenders...
                  </div>
                ) : (
                  teams.map((team) => {
                    const hasSubmittedFirst = Boolean(team.round1?.firstOutput);
                    const hasSubmittedFinal = Boolean(team.round1?.finalOutput);

                    let statusBadge = {
                      text: 'DRAFT',
                      color: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
                    };

                    if (hasSubmittedFinal) {
                      statusBadge = {
                        text: 'EVOLVED',
                        color: 'text-acid-lime border-acid-lime/30 bg-acid-lime/10',
                      };
                    } else if (hasSubmittedFirst) {
                      statusBadge = {
                        text: 'LOCKED',
                        color: 'text-cyan border-cyan/30 bg-cyan/10',
                      };
                    }

                    return (
                      <div
                        key={team.teamCode}
                        className="p-2 rounded-lg border border-white/[0.06] bg-charcoal-900/60 flex items-center justify-between hover:border-cyan/30 transition-colors"
                      >
                        <div className="min-w-0 pr-1.5 font-mono">
                          <div className="flex items-center gap-1">
                            <span className="text-[9px] text-cyan font-bold">{team.teamCode}</span>
                            <span className="text-[11px] text-white font-bold truncate max-w-[85px]">
                              {team.teamName}
                            </span>
                          </div>
                          <div className="text-[9px] text-bone-500 truncate">
                            {team.members?.length || team.memberCount || 2}p • {team.college ? team.college.split(' ')[0] : 'CU'}
                          </div>
                        </div>

                        <span
                          className={`px-1.5 py-0.5 rounded text-[8px] font-mono font-bold uppercase border shrink-0 ${statusBadge.color}`}
                        >
                          {statusBadge.text}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-bone-500">
              <span>ARENA QUORUM: MIN 3 REQUIRED</span>
              <span className="text-cyan font-bold">{teams.length} REGISTERED TEAMS COMPETING</span>
            </div>
          </div>

          {/* Deck 2: Live Anonymous Strategy Telemetry Ticker */}
          <div className="p-5 rounded-2xl border border-white/[0.1] bg-charcoal-950/80 backdrop-blur-md space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-xs">
                <div className="flex items-center gap-2 text-crimson font-bold uppercase tracking-wider">
                  <Terminal className="w-4 h-4 text-crimson animate-pulse" />
                  <span>SPECTATOR STRATEGY STREAM (ANONYMIZED)</span>
                </div>
                <span className="text-[10px] text-bone-500 uppercase">REAL-TIME FEEDS</span>
              </div>

              <div className="space-y-2 max-h-72 sm:max-h-80 overflow-y-auto pr-1 mt-3">
                {liveSnippets.length === 0 ? (
                  <div className="text-center py-12 text-bone-500 font-mono text-xs">
                    Contenders are actively drafting prompts in ChatGPT & Claude. Captured strategy streams will populate here live!
                  </div>
                ) : (
                  liveSnippets.slice(0, 8).map((snippet, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg border border-white/[0.06] bg-charcoal-900/40 font-mono text-xs space-y-1 hover:border-crimson/30 transition-colors"
                    >
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-cyan font-bold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-cyan" />
                          <span>SQUAD TRANSMISSION [{snippet.teamCode}]</span>
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-bone-400 font-bold uppercase">
                          {snippet.stage}
                        </span>
                      </div>
                      <p className="text-[11px] text-bone-300 font-sans italic line-clamp-2 leading-relaxed">
                        "{snippet.text}..."
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-bone-500">
              <span>ZERO IDENTITIES DISCLOSED</span>
              <span className="text-crimson font-bold">PROMPT PARASITE AUDIENCE MATRIX</span>
            </div>
          </div>
        </div>
      </main>

      {/* ========================================================= */}
      {/* FOOTER: SPECTATOR EXPLAINER TICKER                        */}
      {/* ========================================================= */}
      <footer className="relative z-10 pt-4 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-bone-400">
        {/* 3-Step Concept Explainer for the Room */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap text-[11px]">
          <span className="text-bone-300 font-bold uppercase tracking-wider">HOW IT WORKS:</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">
            <span className="text-cyan font-bold">01</span>
            <span>CREATE BASELINE</span>
          </div>
          <ArrowRight className="w-3 h-3 text-bone-600 hidden sm:inline" />
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">
            <span className="text-crimson font-bold">02</span>
            <span>PARASITE INFILTRATION</span>
          </div>
          <ArrowRight className="w-3 h-3 text-bone-600 hidden sm:inline" />
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">
            <span className="text-acid-lime font-bold">03</span>
            <span>EVOLVE FINAL FORM</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[10px] text-bone-500 tracking-wider uppercase">
          <span>EVENT: PROMPT WAR 2026</span>
          <span>•</span>
          <span>TECH TATVA CLUB</span>
        </div>
      </footer>
    </div>
  );
}
