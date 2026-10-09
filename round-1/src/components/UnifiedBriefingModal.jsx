import React, { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  ShieldAlert, 
  Cpu, 
  Trophy, 
  Clock, 
  X, 
  HelpCircle, 
  ShieldCheck, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Sliders,
  DollarSign,
  Calendar,
  Users
} from 'lucide-react';

export default function UnifiedBriefingModal({
  isOpen = true,
  onClose,
  isModal = false,
  onProceed,
  serverClock = null,
  remainingSeconds = 600,
  activePhase = 'CREATE',
}) {
  const [activeTab, setActiveTab] = useState('PLAYBOOK'); // 'PLAYBOOK' | 'CHALLENGE' | 'RUBRIC' | 'RULES'

  if (!isOpen && isModal) return null;

  const isBriefing = serverClock?.status === 'BRIEFING' || serverClock?.scheduleStatus === 'BRIEFING' || serverClock?.activePhase === 'BRIEFING' || activePhase === 'BRIEFING' || activePhase === 'LOBBY';
  const isPaused = serverClock?.status === 'PAUSED' || serverClock?.scheduleStatus === 'PAUSED';
  const isCompleted = serverClock?.status === 'COMPLETED' || serverClock?.scheduleStatus === 'COMPLETED' || activePhase === 'COMPLETE';
  const isLive = serverClock?.status === 'LIVE' || serverClock?.scheduleStatus === 'LIVE' || (!isBriefing && !isPaused && !isCompleted);

  const formatMMSS = (sec) => {
    const s = Math.max(0, Math.floor(sec || 0));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const steps = [
    {
      num: '01',
      phase: 'CREATE',
      time: '10 MIN',
      tag: 'INDEPENDENT SPRINT',
      icon: Sparkles,
      title: 'Craft Original Strategy',
      desc: 'Analyze "The Registration Problem". Use any external AI model (ChatGPT, Claude, Gemini) to engineer a high-impact campaign. Lock your prompt and AI output as your First Form.',
    },
    {
      num: '02',
      phase: 'MATCH',
      time: '30 SEC',
      tag: 'ANONYMOUS CLUSTER',
      icon: Eye,
      title: 'Anonymous Pairing',
      desc: 'The central server dynamically pairs you with anonymous contenders. Squad names, identities, and AI models remain strictly classified.',
    },
    {
      num: '03',
      phase: 'PARASITE',
      time: '05 MIN',
      tag: 'TACTICAL INFILTRATION',
      icon: ShieldAlert,
      title: 'Infiltrate Opponent Outputs',
      desc: 'Inspect opponent campaign blueprints side-by-side. Spot their best viral angles, line-item budget tactics, and missing gaps. Record private mutation notes.',
    },
    {
      num: '04',
      phase: 'EVOLVE',
      time: '10 MIN',
      tag: 'SYNTHESIS & MUTATION',
      icon: Cpu,
      title: 'Synthesize Final Form',
      desc: 'Combine your original strategy with stolen mechanisms to engineer a superior hybrid. Return to your AI and lock your authoritative Final Form.',
    },
    {
      num: '05',
      phase: 'COMPLETE',
      time: 'VERDICT',
      tag: 'OFFICIAL SCORING',
      icon: Trophy,
      title: 'Survive & Qualify',
      desc: 'Submissions are mathematically evaluated on concept strength, criteria coverage, and genuine parasitic leverage to determine Round 2 qualification.',
    },
  ];

  const content = (
    <div className="space-y-6 text-slate-100 select-none">
      {/* 1. ROUND IDENTITY & STATUS BANNER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-white/[0.1] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan inline-block animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan font-bold">
              PROMPT WAR · ROUND 01
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-bone-300">
              OFFICIAL PARTICIPANT BRIEFING
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight mt-1">
            PROMPT PARASITE
          </h1>
          <p className="text-xs sm:text-sm text-cyan font-mono tracking-widest mt-0.5 uppercase">
            SEE. STEAL. EVOLVE.
          </p>
        </div>

        {/* Global Synchronized Clock Telemetry */}
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="p-3 rounded-xl bg-charcoal-900 border border-white/10 flex items-center gap-3">
            <Clock className="w-4 h-4 text-cyan" />
            <div className="text-left font-mono">
              <div className="text-[9px] uppercase tracking-wider text-bone-400">
                {isBriefing ? 'BRIEFING COUNTDOWN' : isPaused ? 'ROUND PAUSED' : isCompleted ? 'ROUND ENDED' : 'AUTHORITATIVE CLOCK'}
              </div>
              <div className="text-base sm:text-lg font-bold text-bone-100">
                {isBriefing ? formatMMSS(serverClock?.secondsUntilStart || serverClock?.remainingSeconds || remainingSeconds) : formatMMSS(remainingSeconds)}
              </div>
            </div>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-charcoal-900 border border-white/10 hover:border-white/30 text-bone-400 hover:text-white transition-colors"
              title="Close briefing"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. MISSION OBJECTIVE SUMMARY */}
      <div className="p-5 rounded-xl bg-charcoal-900/80 border border-cyan/20 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            CORE MISSION OBJECTIVE: THE REGISTRATION PROBLEM
          </span>
          <span className="text-[10px] font-mono text-bone-400">
            GROWTH ARCHITECTURE & CAMPAIGN DESIGN
          </span>
        </div>
        <p className="text-sm sm:text-base text-bone-100 leading-relaxed font-sans">
          "Using AI, create a complete, practical, and creative marketing campaign to achieve <strong className="text-cyan font-bold">500 verified registrations</strong> for a college technology event within <strong className="text-bone-100">7 days</strong> under a strict <strong className="text-cyan">₹10,000 budget cap</strong> across Instagram, WhatsApp, and ground campus activations."
        </p>
      </div>

      {/* 3. NAVIGATION TABS */}
      <div className="flex border-b border-white/[0.08] gap-2 overflow-x-auto text-xs font-mono">
        <button
          onClick={() => setActiveTab('PLAYBOOK')}
          className={`pb-3 px-4 font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'PLAYBOOK'
              ? 'border-cyan text-cyan'
              : 'border-transparent text-bone-400 hover:text-bone-200'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>1. 5-PHASE RUNBOOK</span>
        </button>

        <button
          onClick={() => setActiveTab('CHALLENGE')}
          className={`pb-3 px-4 font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'CHALLENGE'
              ? 'border-cyan text-cyan'
              : 'border-transparent text-bone-400 hover:text-bone-200'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>2. CONSTRAINTS & CRITERIA</span>
        </button>

        <button
          onClick={() => setActiveTab('RUBRIC')}
          className={`pb-3 px-4 font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'RUBRIC'
              ? 'border-cyan text-cyan'
              : 'border-transparent text-bone-400 hover:text-bone-200'
          }`}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>3. SCORING RUBRIC (100 PTS)</span>
        </button>

        <button
          onClick={() => setActiveTab('RULES')}
          className={`pb-3 px-4 font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === 'RULES'
              ? 'border-cyan text-cyan'
              : 'border-transparent text-bone-400 hover:text-bone-200'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>4. COMPETITION RULES</span>
        </button>
      </div>

      {/* TAB 1: 5-PHASE RUNBOOK */}
      {activeTab === 'PLAYBOOK' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="p-4 rounded-xl border border-white/[0.08] bg-charcoal-900/60 flex flex-col justify-between hover:border-cyan/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-xl font-black text-cyan">{s.num}</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-white/5 text-bone-400">
                      {s.time}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-bone-100 mb-1">
                    {s.title}
                  </h3>
                  <p className="font-sans text-xs text-bone-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[10px] font-mono text-cyan uppercase tracking-wider">
                  {s.tag}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: CONSTRAINTS & CRITERIA */}
      {activeTab === 'CHALLENGE' && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { label: 'OBJECTIVE', value: '500 Registrations', detail: 'Verified student signups with confirmed tickets.' },
              { label: 'TIMEFRAME', value: '7-Day Sprint', detail: 'Day 1 launch to Day 7 11:59 PM registration close.' },
              { label: 'AUDIENCE', value: 'College Students', detail: 'Undergrads (18–24), engineers, designers, hackers.' },
              { label: 'BUDGET CAP', value: '₹10,000 Total', detail: 'Strict ceiling. Must itemize ad spend, incentives, print.' },
              { label: 'CHANNELS', value: 'IG • WhatsApp • Ground', detail: 'Digital virality blended with campus guerrilla drops.' },
            ].map((c, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-charcoal-900 border border-white/[0.08]">
                <span className="text-[10px] font-mono text-bone-400 uppercase tracking-widest block mb-1">
                  {c.label}
                </span>
                <span className="font-display font-bold text-sm text-cyan block mb-1">
                  {c.value}
                </span>
                <span className="text-[11px] text-bone-300 leading-snug block">
                  {c.detail}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-charcoal-900/60 border border-white/[0.08] space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-bone-200 font-bold block">
              REQUIRED DELIVERABLE COMPONENTS:
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-bone-300 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                <span>Clear Day-by-Day schedule (Day 1 to Day 7 milestone targets).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                <span>Exact line-item budget table summing to ₹10,000 maximum.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                <span>Specific WhatsApp community broadcast and Instagram Reels hooks.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                <span>Campus guerrilla activations driving offline footfall to online portal.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />
                <span>Day 4 contingency trigger if registrations fall behind target.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: SCORING RUBRIC */}
      {activeTab === 'RUBRIC' && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { name: 'Strategy Viability', pts: '25 PTS', desc: 'Realistic 7-day schedule, clear milestones, conversion mechanics.' },
              { name: 'Fiscal Line-Items', pts: '20 PTS', desc: 'Realistic budget breakdown totaling ₹10k without ambiguous items.' },
              { name: 'Channel Hooks', pts: '20 PTS', desc: 'WhatsApp copy & Instagram formats tailored to student psychology.' },
              { name: 'Guerrilla Activation', pts: '20 PTS', desc: 'Creative physical-to-digital campus stunts that bypass banner blindness.' },
              { name: 'Parasite Leverage', pts: '15 PTS', desc: 'Evidence of stolen peer insights and robust Day 4 contingency.' },
            ].map((r, i) => (
              <div key={i} className="p-4 rounded-xl bg-charcoal-900 border border-white/[0.08] space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[10px] text-bone-400">CATEGORY 0{i + 1}</span>
                  <span className="text-xs font-bold text-cyan">{r.pts}</span>
                </div>
                <h4 className="font-display font-bold text-sm text-bone-100">{r.name}</h4>
                <p className="text-xs text-bone-300 leading-relaxed font-sans">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-3.5 rounded-xl bg-cyan/5 border border-cyan/20 flex items-center justify-between text-xs font-mono text-cyan">
            <span>MAXIMUM OFFICIAL SCORE: 100 POINTS</span>
            <span>TOP SCORING SQUADS ADVANCE TO ROUND 02</span>
          </div>
        </div>
      )}

      {/* TAB 4: RULES & DIRECTIVES */}
      {activeTab === 'RULES' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs font-mono">
          <div className="p-4 rounded-xl bg-charcoal-900 border border-white/[0.08] space-y-2">
            <div className="flex items-center gap-2 text-cyan font-bold">
              <Terminal className="w-4 h-4" />
              <span>EXTERNAL AI FREEDOM</span>
            </div>
            <p className="text-bone-300 font-sans leading-relaxed">
              You are free and encouraged to use any external AI tool (ChatGPT, Claude, Gemini, Perplexity). This portal is your timing, matchmaking, and submission hub.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-900 border border-white/[0.08] space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Users className="w-4 h-4" />
              <span>SQUAD SIZES & IDENTITY</span>
            </div>
            <p className="text-bone-300 font-sans leading-relaxed">
              Teams consist of 2–4 verified members. Matchmaking during the Parasite phase is strictly anonymous to prevent bias.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-charcoal-900 border border-white/[0.08] space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold">
              <Clock className="w-4 h-4" />
              <span>AUTHORITATIVE DEADLINE</span>
            </div>
            <p className="text-bone-300 font-sans leading-relaxed">
              Submissions lock when the official server countdown reaches zero. Late submissions are strictly rejected by the backend.
            </p>
          </div>
        </div>
      )}

      {/* 4. FOOTER & PRIMARY ACTION BUTTON */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-bone-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-cyan" />
          <span>Reading instructions does not consume time or alter game state.</span>
        </div>

        {isModal ? (
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-cyan text-charcoal-950 font-mono text-xs font-bold hover:bg-white transition-all shadow-lg shadow-cyan/20 active:scale-95"
          >
            RETURN TO ARENA
          </button>
        ) : (
          <button
            onClick={onProceed}
            disabled={isBriefing || isPaused || isCompleted}
            className={`px-8 py-3.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all ${
              isBriefing
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-not-allowed'
                : isPaused
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 cursor-not-allowed'
                : isCompleted
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-cyan text-charcoal-950 hover:bg-white shadow-lg shadow-cyan/20 active:scale-95'
            }`}
          >
            {isBriefing ? (
              <>
                <Clock className="w-4 h-4 animate-spin" />
                <span>WAITING FOR OFFICIAL START ({formatMMSS(serverClock?.secondsUntilStart || serverClock?.remainingSeconds || remainingSeconds)})</span>
              </>
            ) : isPaused ? (
              <span>ROUND PAUSED BY HOST</span>
            ) : isCompleted ? (
              <span>ROUND CONCLUDED</span>
            ) : (
              <>
                <span>I'M READY — ENTER ARENA</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
        <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#0d0f17] border border-cyan/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-56px)] max-w-6xl mx-auto px-4 sm:px-8 py-10">
      {content}
    </div>
  );
}
