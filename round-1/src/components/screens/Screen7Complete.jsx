import React, { useState } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { CheckCircle2, Clock, Trophy, Shield, ArrowRight, Activity, Terminal } from 'lucide-react';
import PromptWar3DLogo from '../PromptWar3DLogo';

export default function Screen7Complete({
  session,
  leaderboard = [],
  onOpenLeaderboard,
}) {
  const [viewTab, setViewTab] = useState('SUMMARY'); // 'SUMMARY' | 'LEADERBOARD'

  const milestones = [
    { label: 'FIRST FORM', detail: 'Baseline generation recorded', status: 'LOCKED ✓' },
    { label: 'PARASITE PHASE', detail: 'Opponent outputs inspected & mutated', status: 'COMPLETE ✓' },
    { label: 'FINAL FORM', detail: 'Evolved solution submitted to matrix', status: 'LOCKED ✓' },
  ];

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-10 max-w-5xl mx-auto select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
        <span className="text-bone-400 uppercase tracking-widest">
          PROMPT WAR // ROUND 01 // CYCLE COMPLETE
        </span>
        <span className="text-acid-lime font-bold uppercase tracking-wider">
          RUN FINISHED
        </span>
      </div>

      {/* Main Center Area */}
      <div className="my-auto py-8">
        {viewTab === 'SUMMARY' ? (
          <div>
            {/* 3D Logo & Triad Headline */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid-lime font-bold block mb-2">
                  MISSION WRAP-UP
                </span>

                <div className="font-display font-black text-3xl sm:text-5xl text-bone-50 uppercase tracking-tightest leading-tight">
                  <div>YOU CREATED.</div>
                  <div>YOU INFECTED.</div>
                  <div className="text-acid-lime">YOU EVOLVED.</div>
                </div>
              </div>

              <div className="w-full sm:w-auto flex justify-center">
                <PromptWar3DLogo variant="compact" />
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 font-mono">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-white/[0.1] bg-charcoal-900/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-bone-500 uppercase tracking-widest">
                        STEP 0{idx + 1}
                      </span>
                      <span className="text-acid-lime font-bold text-xs">{m.status}</span>
                    </div>
                    <h4 className="font-display font-bold text-base text-bone-100 mb-1">
                      {m.label}
                    </h4>
                    <p className="font-sans text-xs text-bone-400 leading-normal">
                      {m.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Status & Evaluation Notice */}
            <div className="p-6 border border-acid-lime/30 bg-charcoal-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-acid-lime uppercase tracking-widest font-bold mb-1">
                  <Clock className="w-4 h-4" />
                  <span>STATUS: AWAITING EVALUATION</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-bone-300">
                  Judges are conducting side-by-side audits of your First Form vs. Final Form to rate your prompt improvement, fiscal precision, and strategic evolution.
                </p>
              </div>

              <button
                onClick={() => setViewTab('LEADERBOARD')}
                className="editorial-btn shrink-0 group flex items-center gap-2"
              >
                <Trophy className="w-4 h-4 text-charcoal-950" />
                <span>VIEW LEADERBOARD</span>
              </button>
            </div>
          </div>
        ) : (
          /* LEADERBOARD VIEW */
          <div className="animate-fadeIn font-mono">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] text-acid-lime uppercase tracking-[0.25em] font-bold block">
                  STANDINGS
                </span>
                <h3 className="font-display font-black text-2xl text-bone-100 uppercase tracking-tight">
                  GLOBAL ARENA LEADERBOARD
                </h3>
              </div>

              <button
                onClick={() => setViewTab('SUMMARY')}
                className="text-xs text-bone-400 hover:text-white border border-white/[0.1] px-3 py-1 bg-charcoal-900"
              >
                ← BACK TO RUN SUMMARY
              </button>
            </div>

            {/* Ranking Table */}
            <div className="space-y-2">
              {(leaderboard && leaderboard.length > 0 ? leaderboard : [
                { rank: '01', team: 'NEXUS_PRIME', score: 94.5, evolution: '+28.0' },
                { rank: '02', team: session.teamName || 'SYNAPSE_412', score: 91.0, evolution: '+22.5', isYou: true },
                { rank: '03', team: 'CYBER_VIPER', score: 88.5, evolution: '+19.0' },
                { rank: '04', team: 'PARASITE_X', score: 85.0, evolution: '+15.5' },
                { rank: '05', team: 'GHOST_RUNNER', score: 82.0, evolution: '+12.0' },
              ]).map((entry, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 border transition-all ${
                    entry.isYou || entry.team === session.teamName
                      ? 'border-acid-lime bg-acid-lime/10 text-bone-50 shadow-[0_0_20px_rgba(212,255,0,0.1)]'
                      : 'border-white/[0.06] bg-charcoal-900/50 text-bone-300 hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-display font-black text-xl sm:text-2xl text-bone-400 w-8">
                      {entry.rank || `0${idx + 1}`}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base text-bone-100">
                          {entry.team || entry.teamName}
                        </span>
                        {(entry.isYou || entry.team === session.teamName) && (
                          <span className="text-[9px] bg-acid-lime text-charcoal-950 px-1.5 py-0.2 font-black uppercase tracking-wider">
                            YOU
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-bone-500 uppercase tracking-widest block mt-0.5">
                        EVOLUTION DELTA: {entry.evolution || '+18.5'} PTS
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-display font-black text-xl sm:text-2xl text-acid-lime">
                      {entry.score != null ? entry.score.toFixed(1) : '90.0'}
                    </div>
                    <span className="text-[10px] text-bone-500 uppercase tracking-widest">
                      OUT OF 100
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
        <span>SESSION: {session.anonymousId}</span>
        <span>AWAIT HOST INSTRUCTIONS FOR ROUND 02</span>
      </div>
    </div>
  );
}
