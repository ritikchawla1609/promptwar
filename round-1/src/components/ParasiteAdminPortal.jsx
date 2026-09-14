import React, { useState, useEffect } from 'react';
import { Shield, Users, Sliders, CheckCircle2, Clock, Play, RotateCcw, X, Edit3, ArrowRight, Eye, Trophy, Sparkles } from 'lucide-react';
import { DEFAULT_CHALLENGE } from '../data/parasiteChallenge';
import { generateAnonymousMatches } from '../utils/parasiteEngine';

export default function ParasiteAdminPortal({
  isOpen,
  onClose,
  challenge,
  onUpdateChallenge,
  currentPhase,
  onChangePhase,
  submissions = [],
  onUpdateSubmissions,
}) {
  const [activeTab, setActiveTab] = useState('PHASES'); // 'PHASES' | 'SUBMISSIONS' | 'JUDGING' | 'SETTINGS'
  const [selectedSubForJudging, setSelectedSubForJudging] = useState(null);

  // Judging score state
  const [scores, setScores] = useState({
    promptQuality: 20, // 0 - 25
    problemUnderstanding: 22, // 0 - 25
    outputQuality: 26, // 0 - 30
    improvement: 18, // 0 - 20
    judgeNotes: '',
  });

  useEffect(() => {
    if (selectedSubForJudging && selectedSubForJudging.evaluation) {
      setScores({
        promptQuality: selectedSubForJudging.evaluation.promptQuality ?? 20,
        problemUnderstanding: selectedSubForJudging.evaluation.problemUnderstanding ?? 22,
        outputQuality: selectedSubForJudging.evaluation.outputQuality ?? 26,
        improvement: selectedSubForJudging.evaluation.improvement ?? 18,
        judgeNotes: selectedSubForJudging.evaluation.judgeNotes || '',
      });
    }
  }, [selectedSubForJudging]);

  const totalJudgeScore =
    Number(scores.promptQuality) +
    Number(scores.problemUnderstanding) +
    Number(scores.outputQuality) +
    Number(scores.improvement);

  const handleSaveScore = () => {
    if (!selectedSubForJudging) return;
    const updated = submissions.map((sub) => {
      if ((sub.participantId || sub.id) === (selectedSubForJudging.participantId || selectedSubForJudging.id)) {
        return {
          ...sub,
          score: totalJudgeScore,
          evaluation: {
            ...scores,
            total: totalJudgeScore,
            evaluatedAt: new Date().toISOString(),
          },
        };
      }
      return sub;
    });

    onUpdateSubmissions(updated);
    alert(`Score of ${totalJudgeScore}/100 saved for ${selectedSubForJudging.teamName || selectedSubForJudging.anonymousId}!`);
  };

  const handleAutoMatch = () => {
    const updated = submissions.map((sub) => {
      const matches = generateAnonymousMatches(submissions, sub.participantId || sub.id);
      return {
        ...sub,
        matchedOpponents: matches,
        status: 'MATCHED',
      };
    });
    onUpdateSubmissions(updated);
    alert('Anonymous matchmaking successfully generated for all contenders!');
  };

  if (!isOpen) return null;

  // Compute live telemetry counts
  const totalContenders = Math.max(submissions.length, 1);
  const firstSubmitted = submissions.filter((s) => s.firstOutput || s.firstSubmittedAt).length;
  const finalSubmitted = submissions.filter((s) => s.finalOutput || s.finalSubmittedAt).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
      <div className="w-full max-w-6xl h-[90vh] flex flex-col border border-white/[0.15] bg-charcoal-950 font-mono text-xs shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.1] bg-charcoal-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-acid-lime/10 border border-acid-lime flex items-center justify-center text-acid-lime">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-sm text-bone-100 uppercase tracking-wider">
                  HOST MASTER CONSOLE
                </span>
                <span className="px-1.5 py-0.2 bg-acid-lime text-charcoal-950 text-[9px] font-black uppercase">
                  ACTIVE ROUND 01
                </span>
              </div>
              <span className="text-[10px] text-bone-400">
                PROMPT PARASITE // TELEMETRY & JUDGING MATRIX
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-charcoal-950 p-1 border border-white/[0.08]">
            {['PHASES', 'SUBMISSIONS', 'JUDGING', 'SETTINGS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-[11px] font-bold uppercase transition-all ${
                  activeTab === tab
                    ? 'bg-acid-lime text-charcoal-950 shadow-sm'
                    : 'text-bone-400 hover:text-bone-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 border border-white/[0.1] hover:border-white/[0.2] text-bone-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Live Arena Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/[0.08] bg-charcoal-900/40 text-left">
          <div className="p-3 border-r border-white/[0.06]">
            <span className="text-[9px] text-bone-500 uppercase tracking-widest block">TOTAL REGISTERED</span>
            <span className="font-display font-black text-base text-bone-100">{totalContenders}</span>
          </div>
          <div className="p-3 border-r border-white/[0.06]">
            <span className="text-[9px] text-bone-500 uppercase tracking-widest block">FIRST FORM SUBMITTED</span>
            <span className="font-display font-black text-base text-acid-lime">{firstSubmitted}</span>
          </div>
          <div className="p-3 border-r border-white/[0.06]">
            <span className="text-[9px] text-bone-500 uppercase tracking-widest block">FINAL FORM SUBMITTED</span>
            <span className="font-display font-black text-base text-acid-lime">{finalSubmitted}</span>
          </div>
          <div className="p-3">
            <span className="text-[9px] text-bone-500 uppercase tracking-widest block">ACTIVE GLOBAL PHASE</span>
            <span className="font-display font-black text-base text-bone-100">{currentPhase}</span>
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* TAB 1: PHASES */}
          {activeTab === 'PHASES' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-black text-lg text-bone-100 uppercase tracking-wider mb-1">
                  GLOBAL PHASE BROADCAST CONTROLLER
                </h3>
                <p className="text-bone-400 text-xs">
                  Switching phases will advance all participant terminals instantaneously.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {[
                  { phase: 'CREATE', label: '01. CREATE', desc: 'Contenders write baseline first form (10m).' },
                  { phase: 'MATCH', label: '02. MATCH', desc: 'Trigger anonymous 3-way cluster match.' },
                  { phase: 'PARASITE', label: '03. PARASITE', desc: 'Unlock opponent outputs & mutation notes (5m).' },
                  { phase: 'EVOLVE', label: '04. EVOLVE', desc: 'Reconstruct and submit final form (10m).' },
                  { phase: 'COMPLETE', label: '05. COMPLETE', desc: 'Seal submissions & unlock leaderboard.' },
                ].map((p) => {
                  const isActive = currentPhase === p.phase;
                  return (
                    <div
                      key={p.phase}
                      className={`p-4 border flex flex-col justify-between transition-all ${
                        isActive
                          ? 'border-acid-lime bg-acid-lime/10 shadow-[0_0_20px_rgba(212,255,0,0.1)]'
                          : 'border-white/[0.08] bg-charcoal-900/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`font-bold ${isActive ? 'text-acid-lime' : 'text-bone-300'}`}>
                            {p.label}
                          </span>
                          {isActive && (
                            <span className="w-2 h-2 bg-acid-lime animate-ping" />
                          )}
                        </div>
                        <p className="text-[11px] text-bone-400 leading-normal">{p.desc}</p>
                      </div>

                      <button
                        onClick={() => onChangePhase(p.phase)}
                        disabled={isActive}
                        className={`mt-4 w-full py-2 font-mono text-[10px] font-black uppercase tracking-wider transition-all ${
                          isActive
                            ? 'bg-acid-lime text-charcoal-950 cursor-default'
                            : 'bg-white/[0.08] text-bone-300 hover:bg-acid-lime hover:text-charcoal-950'
                        }`}
                      >
                        {isActive ? 'CURRENTLY ACTIVE' : 'ACTIVATE PHASE'}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="p-5 border border-white/[0.08] bg-charcoal-900/50 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-bone-100 mb-0.5">
                    AUTOMATED ANONYMOUS MATCHMAKER
                  </h4>
                  <p className="text-xs text-bone-400">
                    Calculates fair asymmetric derangements so every contender receives two unique opponent outputs.
                  </p>
                </div>

                <button
                  onClick={handleAutoMatch}
                  className="editorial-btn px-4 py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>RUN CLUSTER MATCHING</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: SUBMISSIONS */}
          {activeTab === 'SUBMISSIONS' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-black text-lg text-bone-100 uppercase tracking-wider">
                  ARENA SUBMISSION LOG
                </h3>
                <span className="text-bone-500 text-xs">{submissions.length} Total Contenders</span>
              </div>

              <div className="border border-white/[0.08] bg-charcoal-900/40">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="border-b border-white/[0.08] bg-charcoal-900 text-bone-400 text-[10px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">TEAM / ID</th>
                      <th className="p-3">ANONYMOUS ID</th>
                      <th className="p-3">FIRST FORM</th>
                      <th className="p-3">FINAL FORM</th>
                      <th className="p-3">SCORE</th>
                      <th className="p-3 text-right">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06] text-bone-300">
                    {submissions.map((sub, idx) => (
                      <tr key={sub.participantId || idx} className="hover:bg-white/[0.02]">
                        <td className="p-3 font-bold text-bone-100">{sub.teamName || 'TEAM_' + (idx + 1)}</td>
                        <td className="p-3 text-acid-lime">{sub.anonymousId || 'PLAYER_' + (idx + 1)}</td>
                        <td className="p-3">
                          {sub.firstOutput ? (
                            <span className="text-emerald-400 font-bold">✓ SUBMITTED</span>
                          ) : (
                            <span className="text-bone-600">— PENDING</span>
                          )}
                        </td>
                        <td className="p-3">
                          {sub.finalOutput ? (
                            <span className="text-emerald-400 font-bold">✓ SUBMITTED</span>
                          ) : (
                            <span className="text-bone-600">— PENDING</span>
                          )}
                        </td>
                        <td className="p-3 font-bold text-bone-100">
                          {sub.score != null ? `${sub.score.toFixed(1)} PTS` : 'UNJUDGED'}
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => {
                              setSelectedSubForJudging(sub);
                              setActiveTab('JUDGING');
                            }}
                            className="px-2.5 py-1 bg-white/[0.06] hover:bg-acid-lime hover:text-charcoal-950 text-bone-300 text-[10px] uppercase font-bold"
                          >
                            AUDIT & SCORE →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: JUDGING (SIDE-BY-SIDE EVALUATION) */}
          {activeTab === 'JUDGING' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-black text-lg text-bone-100 uppercase tracking-wider">
                    SIDE-BY-SIDE EVOLUTION JUDGING CONSOLE
                  </h3>
                  {selectedSubForJudging && (
                    <span className="px-2 py-0.5 bg-acid-lime text-charcoal-950 font-bold text-[11px] uppercase">
                      JUDGING: {selectedSubForJudging.teamName || selectedSubForJudging.anonymousId}
                    </span>
                  )}
                </div>
                <p className="text-bone-400 text-xs">
                  Compare FIRST OUTPUT vs FINAL OUTPUT to audit whether the contender legitimately mutated and improved after viewing opponent ideas.
                </p>
              </div>

              {selectedSubForJudging ? (
                <div>
                  {/* Side-by-Side Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* First Form */}
                    <div className="p-4 border border-white/[0.1] bg-charcoal-900/60 flex flex-col">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-bone-400 text-xs">
                        <span className="font-bold uppercase tracking-wider text-bone-200">
                          1. FIRST OUTPUT (BASELINE)
                        </span>
                        <span>{selectedSubForJudging.firstOutput ? `${selectedSubForJudging.firstOutput.length} chars` : 'No output'}</span>
                      </div>
                      <div className="p-3 bg-charcoal-950 border border-white/[0.06] text-bone-300 text-[11px] leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto flex-1">
                        {selectedSubForJudging.firstOutput || 'No output recorded in Phase 01.'}
                      </div>
                    </div>

                    {/* Final Form */}
                    <div className="p-4 border border-acid-lime/40 bg-charcoal-900/80 flex flex-col shadow-[0_0_25px_rgba(212,255,0,0.05)]">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] text-bone-400 text-xs">
                        <span className="font-bold uppercase tracking-wider text-acid-lime">
                          2. FINAL OUTPUT (EVOLVED FORM)
                        </span>
                        <span>{selectedSubForJudging.finalOutput ? `${selectedSubForJudging.finalOutput.length} chars` : 'No output'}</span>
                      </div>
                      <div className="p-3 bg-charcoal-950 border border-acid-lime/20 text-bone-100 text-[11px] leading-relaxed whitespace-pre-wrap max-h-80 overflow-y-auto flex-1">
                        {selectedSubForJudging.finalOutput || 'No output recorded in Final Phase.'}
                      </div>
                    </div>
                  </div>

                  {/* 4-Metric Evaluation Sliders */}
                  <div className="p-5 border border-white/[0.1] bg-charcoal-900/50 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <span className="font-display font-bold text-sm text-bone-100 uppercase">
                        SCORING RUBRIC (100 PTS MAX)
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-bone-400 text-xs">TOTAL:</span>
                        <span className="font-display font-black text-xl text-acid-lime">
                          {totalJudgeScore} / 100 PTS
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      {/* Metric 1 */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-bone-400">PROMPT QUALITY</span>
                          <span className="text-acid-lime font-bold">{scores.promptQuality} / 25</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="25"
                          value={scores.promptQuality}
                          onChange={(e) => setScores({ ...scores, promptQuality: Number(e.target.value) })}
                          className="w-full accent-[#d4ff00]"
                        />
                      </div>

                      {/* Metric 2 */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-bone-400">PROBLEM UNDERSTANDING</span>
                          <span className="text-acid-lime font-bold">{scores.problemUnderstanding} / 25</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="25"
                          value={scores.problemUnderstanding}
                          onChange={(e) => setScores({ ...scores, problemUnderstanding: Number(e.target.value) })}
                          className="w-full accent-[#d4ff00]"
                        />
                      </div>

                      {/* Metric 3 */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-bone-400">OUTPUT QUALITY</span>
                          <span className="text-acid-lime font-bold">{scores.outputQuality} / 30</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="30"
                          value={scores.outputQuality}
                          onChange={(e) => setScores({ ...scores, outputQuality: Number(e.target.value) })}
                          className="w-full accent-[#d4ff00]"
                        />
                      </div>

                      {/* Metric 4 */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-bone-400">EVOLUTION / DELTA</span>
                          <span className="text-acid-lime font-bold">{scores.improvement} / 20</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={scores.improvement}
                          onChange={(e) => setScores({ ...scores, improvement: Number(e.target.value) })}
                          className="w-full accent-[#d4ff00]"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-bone-500 uppercase block mb-1">JUDGE FEEDBACK / NOTES</span>
                      <input
                        type="text"
                        value={scores.judgeNotes}
                        onChange={(e) => setScores({ ...scores, judgeNotes: e.target.value })}
                        placeholder="e.g. Masterful addition of campus rep incentives; budget calculation became tight..."
                        className="w-full p-2 bg-charcoal-950 border border-white/[0.08] text-bone-200 outline-none text-xs"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/[0.08]">
                      <button
                        onClick={handleSaveScore}
                        className="editorial-btn px-6 py-2.5"
                      >
                        <span>SAVE VERDICT ({totalJudgeScore} PTS)</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center border border-dashed border-white/[0.1] text-bone-500">
                  Select a contender from the SUBMISSIONS tab to review side-by-side.
                </div>
              )}
            </div>
          )}

          {/* TAB 4: SETTINGS */}
          {activeTab === 'SETTINGS' && (
            <div className="space-y-4 max-w-2xl">
              <div>
                <h3 className="font-display font-black text-lg text-bone-100 uppercase tracking-wider mb-1">
                  ROUND CONFIGURATION
                </h3>
                <p className="text-bone-400 text-xs">
                  Modify the live challenge title, briefing copy, or default phase timers.
                </p>
              </div>

              <div>
                <span className="text-[10px] text-bone-500 uppercase block mb-1">CHALLENGE TITLE</span>
                <input
                  type="text"
                  value={challenge.title}
                  onChange={(e) => onUpdateChallenge({ ...challenge, title: e.target.value })}
                  className="w-full p-2.5 bg-charcoal-900 border border-white/[0.1] text-bone-100 outline-none text-xs"
                />
              </div>

              <div>
                <span className="text-[10px] text-bone-500 uppercase block mb-1">CHALLENGE BRIEF</span>
                <textarea
                  value={challenge.brief}
                  onChange={(e) => onUpdateChallenge({ ...challenge, brief: e.target.value })}
                  className="w-full h-24 p-2.5 bg-charcoal-900 border border-white/[0.1] text-bone-100 outline-none text-xs"
                />
              </div>

              <div className="p-3 bg-charcoal-900/60 border border-white/[0.08] text-[11px] text-bone-400">
                All changes synchronize across active participants immediately.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
