import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Search, 
  FileCheck2, 
  FileText, 
  Award, 
  Clock, 
  X, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle,
  Lock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal
} from 'lucide-react';
import { formatTimeMMSS } from '../utils/timer';

export default function BlackboxBriefingModal({
  isOpen = true,
  onClose,
  isModal = false,
  onProceed,
  serverClock = null,
  remainingSeconds = 720,
}) {
  const [activeTab, setActiveTab] = useState('PLAYBOOK'); // 'PLAYBOOK' | 'INCIDENT' | 'RUBRIC' | 'RULES'

  if (!isOpen && isModal) return null;

  const isBriefing = serverClock?.status === 'BRIEFING' || serverClock?.status === 'SCHEDULED';
  const isPaused = serverClock?.status === 'PAUSED';
  const isCompleted = serverClock?.status === 'COMPLETED';
  const isLive = serverClock?.status === 'LIVE';

  const steps = [
    {
      num: '01',
      title: 'Examine Records',
      tag: 'TELEMETRY ACCESS',
      icon: FileText,
      desc: 'Access the 14 classified facility records: badge logs, relay power spools, CCTV timestamps, biometric telemetry, and witness statements.',
    },
    {
      num: '02',
      title: 'Query & Investigate',
      tag: 'FOCUSED INQUIRY',
      icon: Search,
      desc: 'Use the intelligence query console to interrogate specific records, cross-reference timeline gaps, and uncover hidden anomalies.',
    },
    {
      num: '03',
      title: 'Corroborate Evidence',
      tag: 'CONTRADICTION ANALYSIS',
      icon: ShieldAlert,
      desc: 'Compare conflicting records. Reconcile contradictory access times and determine which statements are fabricated or collapsed.',
    },
    {
      num: '04',
      title: 'Submit Conclusion',
      tag: 'EVIDENCE-BACKED DOSSIER',
      icon: FileCheck2,
      desc: 'Synthesize your findings into a rigorous, evidence-backed conclusion citing verified record IDs to achieve maximum investigative accuracy.',
    },
  ];

  const content = (
    <div className="space-y-6 text-ivory-100 select-none font-sans">
      {/* 1. ROUND IDENTITY & TELEMETRY CLOCK */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-archive-700/60 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-medium">
              Prompt War · Round 02
            </span>
            <span className="text-ivory-600">|</span>
            <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-archive-900 border border-archive-700 text-ivory-400">
              CLASSIFICATION: RESTRICTED DOSSIER
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-semibold text-ivory-100 tracking-tight mt-1">
            Operation Blackbox
          </h1>
          <p className="text-xs sm:text-sm text-amber-500 font-mono tracking-wider mt-0.5 uppercase">
            A Spacious Intelligence Investigation Game
          </p>
        </div>

        {/* Global Synchronized Clock Telemetry */}
        <div className="flex items-center space-x-3 self-start sm:self-auto">
          <div className="p-3 rounded-xl bg-archive-900 border border-archive-700 flex items-center space-x-3">
            <Clock className="w-4 h-4 text-amber-500" />
            <div className="text-left font-mono">
              <div className="text-[9px] uppercase tracking-wider text-ivory-500">
                {isBriefing ? 'BRIEFING COUNTDOWN' : isPaused ? 'ROUND PAUSED' : isCompleted ? 'ROUND CONCLUDED' : 'AUTHORITATIVE DEADLINE'}
              </div>
              <div className="text-base sm:text-lg font-bold text-ivory-100">
                {isBriefing ? `${serverClock?.secondsUntilStart || 0}s` : formatTimeMMSS(remainingSeconds)}
              </div>
            </div>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-archive-900 border border-archive-700 hover:border-archive-600 text-ivory-400 hover:text-white transition-colors"
              title="Close briefing"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. MISSION OBJECTIVE SUMMARY */}
      <div className="p-5 rounded-xl bg-archive-900/90 border border-amber-500/20 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold flex items-center space-x-1.5">
            <Zap className="w-3.5 h-3.5" />
            INCIDENT BRIEF: AETHELGARD DEEP BIO-COMPUTE FACILITY
          </span>
          <span className="text-[10px] font-mono text-ivory-500">
            INCIDENT WINDOW: 00:10 – 00:45 UTC
          </span>
        </div>
        <p className="text-sm sm:text-base text-ivory-200 leading-relaxed">
          "Someone gained unauthorized physical and network access to Sector 4 at the Aethelgard facility. The security logs, power grid spools, and badge telemetry do not agree on what occurred. Examine the evidence, cross-examine the timestamps, and construct a verified conclusion."
        </p>
      </div>

      {/* 3. NAVIGATION TABS */}
      <div className="flex border-b border-archive-700/60 space-x-2 overflow-x-auto text-xs font-mono">
        <button
          onClick={() => setActiveTab('PLAYBOOK')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'PLAYBOOK'
              ? 'border-amber-500 text-amber-500'
              : 'border-transparent text-ivory-400 hover:text-ivory-200'
          }`}
        >
          <Search className="w-3.5 h-3.5" />
          <span>1. INVESTIGATION STEPS</span>
        </button>

        <button
          onClick={() => setActiveTab('INCIDENT')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'INCIDENT'
              ? 'border-amber-500 text-amber-500'
              : 'border-transparent text-ivory-400 hover:text-ivory-200'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>2. EVIDENCE DOSSIER</span>
        </button>

        <button
          onClick={() => setActiveTab('RUBRIC')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'RUBRIC'
              ? 'border-amber-500 text-amber-500'
              : 'border-transparent text-ivory-400 hover:text-ivory-200'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>3. SCORING RUBRIC (100 PTS)</span>
        </button>

        <button
          onClick={() => setActiveTab('RULES')}
          className={`pb-3 px-4 font-semibold border-b-2 transition-all flex items-center space-x-2 ${
            activeTab === 'RULES'
              ? 'border-amber-500 text-amber-500'
              : 'border-transparent text-ivory-400 hover:text-ivory-200'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>4. INVESTIGATION RULES</span>
        </button>
      </div>

      {/* TAB 1: 4-STEP INVESTIGATION PLAYBOOK */}
      {activeTab === 'PLAYBOOK' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="p-4 rounded-xl border border-archive-700 bg-archive-900/60 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-xl font-bold text-amber-500">{s.num}</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-archive-800 text-ivory-400">
                      PHASE 0{s.num}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-ivory-100 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-ivory-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-archive-700/60 text-[10px] font-mono text-amber-500 uppercase tracking-wider">
                  {s.tag}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 2: EVIDENCE DOSSIER OVERVIEW */}
      {activeTab === 'INCIDENT' && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-archive-900 border border-archive-700 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider font-semibold">
                SECTOR 4 ACCESS LOGS
              </span>
              <p className="text-ivory-300 leading-relaxed">
                Card swipe telemetry across Sub-Level 2 turnstiles, server room airlocks, and emergency fire exits between 00:00 and 01:00 UTC.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-archive-900 border border-archive-700 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider font-semibold">
                POWER GRID SPOOL 17-B
              </span>
              <p className="text-ivory-300 leading-relaxed">
                Auxiliary transformer load drop recorded at 00:15 UTC. CCTV camera cluster went dark 22 seconds before the primary generator tripped.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-archive-900 border border-archive-700 space-y-1.5">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-wider font-semibold">
                WITNESS & ALIBI RECORDS
              </span>
              <p className="text-ivory-300 leading-relaxed">
                Conflicting alibis from the on-duty systems engineer, night security lead, and visiting contractor. Multiple timestamps contradict physical logs.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-archive-900/60 border border-archive-700 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-ivory-200 font-bold block">
              CORROBORATION PRINCIPLES:
            </span>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-ivory-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Physical device telemetry (transformer voltage, card readers) overrides verbal statements.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>Always cite specific Record IDs (e.g. RECORD_04, LOG_12) in your conclusion.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: SCORING RUBRIC */}
      {activeTab === 'RUBRIC' && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { name: 'Evidence Corroboration', pts: '40 PTS', desc: 'Accuracy in identifying verified records vs fabricated statements.' },
              { name: 'Timeline Reconciliation', pts: '30 PTS', desc: 'Precise sequencing of blackout, badge swipe, and room egress.' },
              { name: 'Entry Vector & Culprit', pts: '20 PTS', desc: 'Correct identification of intruder and physical entry path.' },
              { name: 'Precision & Brevity', pts: '10 PTS', desc: 'Concise explanation without filler text or unsupported speculation.' },
            ].map((r, i) => (
              <div key={i} className="p-4 rounded-xl bg-archive-900 border border-archive-700 space-y-1">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[10px] text-ivory-500">CATEGORY 0{i + 1}</span>
                  <span className="text-xs font-bold text-amber-500">{r.pts}</span>
                </div>
                <h4 className="font-semibold text-sm text-ivory-100">{r.name}</h4>
                <p className="text-xs text-ivory-300 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between text-xs font-mono text-amber-400">
            <span>MAXIMUM INVESTIGATION SCORE: 100 POINTS</span>
            <span>SCORES WEIGHED TOWARD TOURNAMENT RANKINGS</span>
          </div>
        </div>
      )}

      {/* TAB 4: RULES & DIRECTIVES */}
      {activeTab === 'RULES' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs font-mono">
          <div className="p-4 rounded-xl bg-archive-900 border border-archive-700 space-y-2">
            <div className="flex items-center space-x-2 text-amber-500 font-bold">
              <Clock className="w-4 h-4" />
              <span>TIME WINDOW</span>
            </div>
            <p className="text-ivory-300 font-sans leading-relaxed">
              12-minute synchronized investigation window. Late submissions after the deadline are strictly rejected by the server.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-archive-900 border border-archive-700 space-y-2">
            <div className="flex items-center space-x-2 text-cyan font-bold">
              <Terminal className="w-4 h-4" />
              <span>NON-DESTRUCTIVE HELP</span>
            </div>
            <p className="text-ivory-300 font-sans leading-relaxed">
              You can open "How to Play" at any time during investigation. Your discovered evidence and written drafts are completely preserved.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-archive-900 border border-archive-700 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold">
              <Lock className="w-4 h-4" />
              <span>SINGLE COMMIT LOCK</span>
            </div>
            <p className="text-ivory-300 font-sans leading-relaxed">
              Once you commit your final findings, your dossier is sealed and transmitted to central intelligence scoring.
            </p>
          </div>
        </div>
      )}

      {/* 4. FOOTER & ACTION */}
      <div className="pt-4 border-t border-archive-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs text-ivory-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span>Reading briefing does not advance timer or consume attempts.</span>
        </div>

        {isModal ? (
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-amber-500 text-archive-950 font-mono text-xs font-semibold hover:bg-amber-400 transition-all shadow-md shadow-amber-500/10 active:scale-95"
          >
            RETURN TO INVESTIGATION
          </button>
        ) : (
          <button
            onClick={onProceed}
            disabled={isBriefing || isPaused || isCompleted}
            className={`px-8 py-3.5 rounded-xl font-mono text-xs font-semibold flex items-center justify-center space-x-2 transition-all ${
              isBriefing
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-not-allowed'
                : isPaused
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 cursor-not-allowed'
                : isCompleted
                ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                : 'bg-amber-500 hover:bg-amber-400 text-archive-950 shadow-lg shadow-amber-500/10 active:scale-95'
            }`}
          >
            {isBriefing ? (
              <>
                <Clock className="w-4 h-4 animate-spin" />
                <span>WAITING FOR OFFICIAL START ({serverClock?.secondsUntilStart || 0}s)</span>
              </>
            ) : isPaused ? (
              <span>ROUND PAUSED BY ADMIN</span>
            ) : isCompleted ? (
              <span>ROUND CONCLUDED</span>
            ) : (
              <>
                <span>I'M READY — ENTER INVESTIGATION</span>
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
        <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-archive-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-archive-950 max-w-6xl mx-auto px-4 sm:px-8 py-10">
      {content}
    </div>
  );
}
