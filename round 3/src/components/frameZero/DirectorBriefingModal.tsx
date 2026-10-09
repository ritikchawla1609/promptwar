import React, { useState } from 'react';
import { 
  Clapperboard, 
  Sparkles, 
  Layers, 
  Camera, 
  Lightbulb, 
  Award, 
  Clock, 
  X, 
  HelpCircle, 
  CheckCircle2, 
  ShieldCheck, 
  AlertTriangle,
  Lock,
  ArrowRight,
  Film
} from 'lucide-react';
import { AuthoritativeClockState, formatSecondsToMMSS } from '../../utils/authoritativeClock';

interface DirectorBriefingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
  onProceed?: () => void;
  serverClock?: AuthoritativeClockState | null;
  remainingSeconds?: number;
}

export const DirectorBriefingModal: React.FC<DirectorBriefingModalProps> = ({
  isOpen = true,
  onClose,
  isModal = false,
  onProceed,
  serverClock = null,
  remainingSeconds = 720,
}) => {
  const [activeTab, setActiveTab] = useState<'PLAYBOOK' | 'STORYBOARD' | 'RUBRIC' | 'RULES'>('PLAYBOOK');

  if (!isOpen && isModal) return null;

  const isBriefing = serverClock?.status === 'BRIEFING' || serverClock?.status === 'SCHEDULED';
  const isPaused = serverClock?.status === 'PAUSED';
  const isCompleted = serverClock?.status === 'COMPLETED';
  const isLive = serverClock?.status === 'LIVE';

  const steps = [
    {
      num: '01',
      title: 'Select Production Scene',
      tag: 'SCENE ARCHIVE',
      icon: Film,
      desc: 'Browse and select from 4 distinct anime production briefs: The Last Promise, Neon Cyber Rain, Cherry Blossom Protocol, or The Clockwork Spire.',
    },
    {
      num: '02',
      title: 'Study Storyboard Specs',
      tag: '5-PILLAR BRIEF',
      icon: Layers,
      desc: 'Inspect the 5 essential director briefs: Action, Emotion, Environment, Lighting, and Camera Framing requirements.',
    },
    {
      num: '03',
      title: 'Direct & Render Take',
      tag: 'PROMPT DIRECTION',
      icon: Clapperboard,
      desc: 'Write descriptive creative directions (40–120 words recommended) and render your cinematic take. You may shoot up to 4 takes.',
    },
    {
      num: '04',
      title: 'Inspect Feedback & Mutate',
      tag: 'DETERMINISTIC RUBRIC',
      icon: Sparkles,
      desc: 'Analyze category score bars, missing elements, and contradiction alerts to refine subsequent takes and elevate your vision.',
    },
    {
      num: '05',
      title: 'Lock Director\'s Cut',
      tag: 'OFFICIAL SUBMISSION',
      icon: Lock,
      desc: 'Commit your best take before the official clock hits zero. Your cut is permanently recorded to the master tournament leaderboard.',
    },
  ];

  const content = (
    <div className="space-y-6 text-slate-100 select-none font-sans">
      {/* 1. ROUND IDENTITY & CLOCK */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-stone-800 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-medium">
              Prompt War · Round 03
            </span>
            <span className="text-stone-600">|</span>
            <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-stone-900 border border-stone-800 text-stone-400">
              STUDIO TRIAL // PRODUCTION ZERO
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight mt-1">
            FRAME ZERO
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 font-serif italic tracking-wide mt-0.5">
            The Director's Trial · Cinematic Prompt Craftsmanship
          </p>
        </div>

        {/* Global Synchronized Clock Telemetry */}
        <div className="flex items-center space-x-3 self-start sm:self-auto">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
            <Clock className="w-4 h-4 text-amber-400" />
            <div className="text-left font-mono">
              <div className="text-[9px] uppercase tracking-wider text-slate-400">
                {isBriefing ? 'BRIEFING COUNTDOWN' : isPaused ? 'ROUND PAUSED' : isCompleted ? 'ROUND CONCLUDED' : 'AUTHORITATIVE DEADLINE'}
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-100">
                {isBriefing ? `${serverClock?.secondsUntilStart || 0}s` : formatSecondsToMMSS(remainingSeconds)}
              </div>
            </div>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Close manual"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. MISSION OBJECTIVE SUMMARY */}
      <div className="p-5 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center space-x-1.5">
            <Clapperboard className="w-3.5 h-3.5" />
            DIRECTORIAL CHALLENGE OBJECTIVE
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            CINEMATIC TRANSLATION & ART DIRECTION
          </span>
        </div>
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
          "Step into the director's chair. You receive an anime production scene brief describing a specific cinematic moment. Translate that brief into a clear, vivid directorial prompt that captures the required action, emotion, environment, lighting, and camera composition without narrative contradictions."
        </p>
      </div>

      {/* 3. NAVIGATION TABS */}
      <div className="flex border-b border-slate-800 space-x-2 overflow-x-auto text-xs font-mono">
        <button
          onClick={() => setActiveTab('PLAYBOOK')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'PLAYBOOK'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clapperboard className="w-3.5 h-3.5" />
          <span>1. DIRECTING STEPS</span>
        </button>

        <button
          onClick={() => setActiveTab('STORYBOARD')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'STORYBOARD'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>2. 5-PILLAR SPECS</span>
        </button>

        <button
          onClick={() => setActiveTab('RUBRIC')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'RUBRIC'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>3. SCORING RUBRIC (100 PTS)</span>
        </button>

        <button
          onClick={() => setActiveTab('RULES')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'RULES'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>4. STUDIO RULES</span>
        </button>
      </div>

      {/* TAB 1: 5-STEP PLAYBOOK */}
      {activeTab === 'PLAYBOOK' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col justify-between hover:border-amber-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-xl font-bold text-amber-400">{s.num}</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      STEP {s.num}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-slate-100 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                  {s.tag}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: 5-PILLAR STORYBOARD SPECS */}
      {activeTab === 'STORYBOARD' && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="font-mono text-amber-400 font-bold uppercase tracking-wider block">
                1. ACTION
              </span>
              <p className="text-slate-400 leading-relaxed">
                Describe exact physical character interactions, hand gestures, posture, and kinetic motion.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="font-mono text-rose-400 font-bold uppercase tracking-wider block">
                2. EMOTION
              </span>
              <p className="text-slate-400 leading-relaxed">
                Convey facial expressions, eye reflections, bittersweet or resolute psychological undertones.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="font-mono text-sky-400 font-bold uppercase tracking-wider block">
                3. ENVIRONMENT
              </span>
              <p className="text-slate-400 leading-relaxed">
                Ground the scene in a specific setting (train platform, rain-slick alley, cherry blossoms, clocktower).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                4. LIGHTING
              </span>
              <p className="text-slate-400 leading-relaxed">
                Specify lighting warmth, golden hour sunsets, neon rim lights, shadow gradients, and weather atmosphere.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                5. FRAMING
              </span>
              <p className="text-slate-400 leading-relaxed">
                State camera composition: medium two-shot, Dutch angle, cinematic wide 16:9, or over-the-shoulder depth.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold block">
              RECOMMENDED PROMPT LENGTH:
            </span>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Aim for <strong className="text-amber-400">40 to 120 descriptive words</strong>. Precision is valued over keyword spamming. Avoid contradictions (e.g. asking for rain while describing dry sunshine).
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: SCORING RUBRIC (CONFIGURED 100 PTS) */}
      {activeTab === 'RUBRIC' && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { name: 'Required Scene Elements', pts: '35 PTS', desc: 'Core subject identification, critical props, and specific setting indicators.' },
              { name: 'Emotional Direction', pts: '20 PTS', desc: 'Subtle emotional expressions, psychological subtext, and facial composition.' },
              { name: 'Cinematic Composition', pts: '20 PTS', desc: 'Camera angle, depth of field, framing balance, and foreground/background layering.' },
              { name: 'Lighting & Atmosphere', pts: '15 PTS', desc: 'Light sources, contrast, color palette temperature, and volumetric environmental mood.' },
              { name: 'Consistency & Flow', pts: '10 PTS', desc: 'Absence of logical contradictions, stylistic clash, or competing instructions.' },
            ].map((r, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[10px] text-slate-400">RUBRIC 0{i + 1}</span>
                  <span className="text-xs font-bold text-amber-400">{r.pts}</span>
                </div>
                <h4 className="font-semibold text-sm text-slate-100">{r.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs font-mono text-amber-300">
            <span>MAXIMUM OFFICIAL SCORE: 100 POINTS</span>
            <span>SCORES DETERMINED DETERMINISTICALLY BY CENTRAL EVALUATION ENGINE</span>
          </div>
        </div>
      )}

      {/* TAB 4: STUDIO RULES */}
      {activeTab === 'RULES' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold">
              <Clapperboard className="w-4 h-4" />
              <span>TAKES REEL LIMIT</span>
            </div>
            <p className="text-slate-300 font-sans leading-relaxed">
              Up to 4 takes permitted per production. You can review all rendered takes in your reel and lock your highest-scoring cut.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-rose-400 font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>CONTRADICTION PENALTIES</span>
            </div>
            <p className="text-slate-300 font-sans leading-relaxed">
              Mutually conflicting tags (such as "blazing sunshine" in a "torrential downpour") apply negative deduction penalties.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold">
              <Clock className="w-4 h-4" />
              <span>SYNCHRONIZED DEADLINE</span>
            </div>
            <p className="text-slate-300 font-sans leading-relaxed">
              Viewing this manual does not consume time or take attempts. Official round deadline is enforced globally by the central backend.
            </p>
          </div>
        </div>
      )}

      {/* 4. FOOTER & PRIMARY ACTION */}
      <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Reading manual does not advance timer or consume takes.</span>
        </div>

        {isModal ? (
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-mono text-xs font-bold hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/10 active:scale-95"
          >
            RETURN TO WORKSPACE
          </button>
        ) : (
          <button
            onClick={onProceed}
            disabled={isBriefing || isPaused || isCompleted}
            className={`px-8 py-3.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center space-x-2 transition-all ${
              isBriefing
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-not-allowed'
                : isPaused
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 cursor-not-allowed'
                : isCompleted
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/10 active:scale-95'
            }`}
          >
            {isBriefing ? (
              <>
                <Clock className="w-4 h-4 animate-spin" />
                <span>WAITING FOR OFFICIAL START ({serverClock?.secondsUntilStart || 0}s)</span>
              </>
            ) : isPaused ? (
              <span>ROUND PAUSED BY HOST</span>
            ) : isCompleted ? (
              <span>ROUND CONCLUDED</span>
            ) : (
              <>
                <span>ENTER PRODUCTION STUDIO</span>
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
        <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#090c14] border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070a10] max-w-6xl mx-auto px-4 sm:px-8 py-10">
      {content}
    </div>
  );
};
