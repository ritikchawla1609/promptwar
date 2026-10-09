import React, { useState, useEffect, useRef } from 'react';
import { Mission, PromptAttempt, EvaluationResult } from '../../types/frameZero';
import { evaluateDirectorPrompt } from '../../engine/directorEvaluator';
import { SceneArtwork } from './SceneArtwork';
import { DirectorBriefingModal } from './DirectorBriefingModal';
import { AuthoritativeClockState, formatSecondsToMMSS } from '../../utils/authoritativeClock';
import {
  Clapperboard,
  Clock,
  Send,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  History,
  Lock,
  ArrowLeft,
  Sparkles,
  Camera,
  Layers,
  Compass,
  Lightbulb
} from 'lucide-react';

interface DirectorWorkspaceProps {
  mission: Mission;
  directorName: string;
  onFinish: (attempts: PromptAttempt[], finalEvaluation: EvaluationResult, bestTake: PromptAttempt) => void;
  onExit: () => void;
  serverClock?: AuthoritativeClockState | null;
  remainingSeconds?: number;
}

export const DirectorWorkspace: React.FC<DirectorWorkspaceProps> = ({
  mission,
  directorName,
  onFinish,
  onExit,
  serverClock = null,
  remainingSeconds: externalRemainingSeconds,
}) => {
  const [prompt, setPrompt] = useState<string>('');
  const [attempts, setAttempts] = useState<PromptAttempt[]>([]);
  const [currentEvaluation, setCurrentEvaluation] = useState<EvaluationResult | null>(null);
  const [isBriefExpanded, setIsBriefExpanded] = useState<boolean>(true);
  const [selectedAttemptIndex, setSelectedAttemptIndex] = useState<number | null>(null);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [isManualOpen, setIsManualOpen] = useState<boolean>(false);

  // Timer: seconds remaining
  const [secondsRemaining, setSecondsRemaining] = useState<number>(mission.durationMinutes * 60);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  const effectiveSeconds = externalRemainingSeconds !== undefined ? externalRemainingSeconds : secondsRemaining;

  const maxAttempts = mission.maxAttempts;
  const currentTakeNumber = attempts.length + 1;
  const isOutOfTakes = attempts.length >= maxAttempts;

  // Countdown timer effect
  useEffect(() => {
    if (!timerActive || secondsRemaining <= 0) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimerActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerActive, secondsRemaining]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEvaluate = () => {
    const trimmed = prompt.trim();
    if (!trimmed || isEvaluating || isOutOfTakes) return;

    setIsEvaluating(true);

    // Simulate cinematic rendering feel with brief delay
    setTimeout(() => {
      const evaluation = evaluateDirectorPrompt(trimmed, mission);
      const newAttempt: PromptAttempt = {
        attemptNumber: attempts.length + 1,
        prompt: trimmed,
        timestamp: new Date().toLocaleTimeString(),
        evaluation
      };

      const updatedAttempts = [...attempts, newAttempt];
      setAttempts(updatedAttempts);
      setCurrentEvaluation(evaluation);
      setSelectedAttemptIndex(updatedAttempts.length - 1);
      setIsEvaluating(false);
    }, 450);
  };

  const handleSelectHistoryTake = (index: number) => {
    setSelectedAttemptIndex(index);
    const selected = attempts[index];
    if (selected) {
      setCurrentEvaluation(selected.evaluation);
    }
  };

  const handleLockCut = () => {
    if (attempts.length === 0) return;

    // Find best take by highest score
    const bestTake = attempts.reduce((prev, curr) =>
      curr.evaluation.totalScore > prev.evaluation.totalScore ? curr : prev
    );

    const finalEval = currentEvaluation || bestTake.evaluation;
    onFinish(attempts, finalEval, bestTake);
  };

  const wordCount = prompt.trim() ? prompt.trim().split(/\s+/).length : 0;
  const charCount = prompt.length;

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 flex flex-col selection:bg-amber-400/20 selection:text-amber-200">
      {/* Top Slate Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Back & Scene Title */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onExit}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Exit to Scene Archive"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: mission.palette.primary }} />
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                FRAME ZERO // TAKE {Math.min(attempts.length + 1, maxAttempts)} OF {maxAttempts}
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-serif font-bold text-white flex items-center space-x-2">
              <span>{mission.title}</span>
              <span className="text-slate-400 font-light text-sm">({mission.japaneseTitle})</span>
            </h1>
          </div>
        </div>

        {/* Center: Director Badge */}
        <div className="hidden md:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">DIRECTOR:</span>
          <span className="text-amber-300 font-medium">{directorName}</span>
        </div>

        {/* Right: Clock & Quick Score */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* How to Play Manual Modal Button */}
          <button
            onClick={() => setIsManualOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 text-slate-300 hover:text-amber-300 text-xs font-mono transition-all active:scale-95 shadow-sm"
            title="Director's Manual & 100-pt Rubric"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>How to play</span>
          </button>

          {/* Timer */}
          <div
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl border text-xs font-mono ${
              effectiveSeconds < 120
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-300 animate-pulse'
                : 'bg-slate-900/80 border-slate-800 text-slate-300'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(effectiveSeconds)}</span>
          </div>

          {/* Current Score Gauge */}
          {currentEvaluation && (
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400">SCORE</span>
              <span className="text-base font-bold font-mono text-amber-400">
                {currentEvaluation.totalScore}
              </span>
              <span className="text-xs font-mono text-slate-400">/ 100</span>
            </div>
          )}

          {/* Lock Cut Button */}
          <button
            onClick={handleLockCut}
            disabled={attempts.length === 0}
            className={`px-4 py-2 rounded-xl text-xs font-medium uppercase font-mono tracking-wider flex items-center space-x-2 transition-all ${
              attempts.length > 0
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-slate-950 hover:from-emerald-400 hover:to-emerald-300 shadow-md shadow-emerald-500/10 active:scale-95'
                : 'bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700/50'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Lock Director's Cut</span>
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Collapsible Scene Brief Banner */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800/90 overflow-hidden shadow-lg">
          <button
            onClick={() => setIsBriefExpanded(!isBriefExpanded)}
            className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-slate-800/40 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <Clapperboard className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                Director Scene Brief & Storyboard Specs
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
              <span>{isBriefExpanded ? 'Collapse Brief' : 'Expand Brief'}</span>
              {isBriefExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {isBriefExpanded && (
            <div className="p-5 border-t border-slate-800/80 bg-slate-950/40 space-y-4 text-xs">
              <p className="text-slate-300 leading-relaxed font-light text-sm italic">
                "{mission.brief.synopsis}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-mono text-amber-400 font-semibold mb-1 flex items-center space-x-1.5">
                    <Clapperboard className="w-3 h-3" />
                    <span>ACTION</span>
                  </div>
                  <p className="text-slate-400">{mission.brief.actionRequirement}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-mono text-rose-400 font-semibold mb-1 flex items-center space-x-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>EMOTION</span>
                  </div>
                  <p className="text-slate-400">{mission.brief.emotionRequirement}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-mono text-sky-400 font-semibold mb-1 flex items-center space-x-1.5">
                    <Compass className="w-3 h-3" />
                    <span>SETTING</span>
                  </div>
                  <p className="text-slate-400">{mission.brief.environmentRequirement}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-mono text-emerald-400 font-semibold mb-1 flex items-center space-x-1.5">
                    <Lightbulb className="w-3 h-3" />
                    <span>LIGHTING</span>
                  </div>
                  <p className="text-slate-400">{mission.brief.lightingRequirement}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="font-mono text-indigo-400 font-semibold mb-1 flex items-center space-x-1.5">
                    <Layers className="w-3 h-3" />
                    <span>FRAMING</span>
                  </div>
                  <p className="text-slate-400">{mission.brief.compositionRequirement}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2-Column Core Interface: Left (Prompt Editor & Takes) / Right (Live Render Artwork & Evaluation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Directorial Input (5 or 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Prompt Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <h2 className="text-sm font-mono uppercase tracking-wider text-slate-200 font-semibold">
                    Directorial Prompt Editor
                  </h2>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Take {Math.min(attempts.length + 1, maxAttempts)} of {maxAttempts}
                </div>
              </div>

              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isOutOfTakes || isEvaluating}
                  rows={8}
                  placeholder="Describe the cinematic scene in vivid directorial detail: subject, expression, lighting contrast, weather, camera angle, and mood..."
                  className="w-full p-4 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/40 text-slate-100 text-sm placeholder:text-slate-400 leading-relaxed transition-all resize-none font-sans"
                />

                <div className="flex items-center justify-between mt-2 px-1 text-[11px] font-mono text-slate-400">
                  <div>
                    <span>{wordCount} words</span> · <span>{charCount} chars</span>
                  </div>
                  <div className="text-slate-400">
                    Recommended: 40–120 descriptive words
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={handleEvaluate}
                  disabled={!prompt.trim() || isEvaluating || isOutOfTakes}
                  className={`flex-1 py-3 px-5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center space-x-2 ${
                    prompt.trim() && !isOutOfTakes && !isEvaluating
                      ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/10 active:scale-98'
                      : 'bg-slate-800 text-slate-400 border border-slate-700/60 cursor-not-allowed'
                  }`}
                >
                  {isEvaluating ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-slate-900" />
                      <span>Rendering Take...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Render Take {Math.min(attempts.length + 1, maxAttempts)}</span>
                    </>
                  )}
                </button>
              </div>

              {isOutOfTakes && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>Maximum takes reached ({maxAttempts}/{maxAttempts}). Select your best take and lock your director's cut.</span>
                </div>
              )}
            </div>

            {/* Takes History Reel */}
            {attempts.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    <History className="w-4 h-4 text-slate-400" />
                    <span>Takes Reel ({attempts.length} Recorded)</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Click to inspect</span>
                </div>

                <div className="space-y-2">
                  {attempts.map((att, idx) => {
                    const isSelected = selectedAttemptIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectHistoryTake(idx)}
                        className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-400/10 border-amber-400/50 text-slate-100'
                            : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold ${
                            isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}>
                            #{att.attemptNumber}
                          </span>
                          <div>
                            <div className="text-xs font-medium line-clamp-1 max-w-[200px] sm:max-w-sm">
                              {att.prompt}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              {att.timestamp} · {att.evaluation.promptWordCount} words
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-sm font-bold font-mono text-amber-400">
                            {att.evaluation.totalScore}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">/100</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Scene Render Artwork & Evaluation Panel (6 or 7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Scene Artwork Visualizer */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
                    Cinematic Viewfinder (2.39:1 Scope)
                  </span>
                </div>
                {currentEvaluation && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                    Grade: {currentEvaluation.directorRank}
                  </span>
                )}
              </div>

              <SceneArtwork
                mission={mission}
                score={currentEvaluation ? currentEvaluation.totalScore : 0}
                takeNumber={attempts.length + 1}
              />
            </div>

            {/* Evaluation Scorecard & Pillar Breakdown */}
            {currentEvaluation && (
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-6">
                {/* Header with Total Score and Rank */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      DIRECTORIAL EVALUATION
                    </div>
                    <div className="text-lg font-serif font-bold text-white">
                      {currentEvaluation.directorRank}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-serif font-black text-amber-400">
                      {currentEvaluation.totalScore}
                    </span>
                    <span className="text-xs font-mono text-slate-400"> / 100</span>
                  </div>
                </div>

                {/* Contradictions Warning */}
                {currentEvaluation.detectedContradictions.length > 0 && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold">
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                      <span>CONTRADICTORY DIRECTIVES DETECTED</span>
                    </div>
                    <ul className="text-xs space-y-1 list-disc list-inside text-rose-200/90">
                      {currentEvaluation.detectedContradictions.map((contra, idx) => (
                        <li key={idx}>{contra}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 5 Category Score Bars */}
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Directorial Pillars
                  </div>

                  {Object.entries(currentEvaluation.categoryScores).map(([key, cat]) => {
                    const pct = cat.percentage;
                    return (
                      <div key={key} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-300">{cat.name}</span>
                          <span className="text-slate-400">
                            <strong className="text-amber-400">{cat.earned}</strong> / {cat.max} pts ({pct}%)
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${pct}%`,
                              backgroundColor:
                                pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'
                            }}
                          />
                        </div>
                        {cat.explanation && (
                          <div className="text-[11px] text-slate-400 font-sans italic pt-0.5">
                            {cat.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Met vs Missing Checklist */}
                <div className="pt-2 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Scene Elements Inspection
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {currentEvaluation.satisfiedRequirements.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-300 flex items-center space-x-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}

                    {currentEvaluation.missingRequirements.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-400 flex items-center space-x-2"
                      >
                        <XCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Director's Feedback Notes */}
                {currentEvaluation.feedbackNotes.length > 0 && (
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 flex items-center space-x-1.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Auteur Feedback & Scene Notes</span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                      {currentEvaluation.feedbackNotes.map((note, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-amber-400 font-mono">›</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Non-destructive Director Briefing & Rubric Modal */}
      <DirectorBriefingModal
        isOpen={isManualOpen}
        isModal={true}
        onClose={() => setIsManualOpen(false)}
        serverClock={serverClock}
        remainingSeconds={effectiveSeconds}
      />
    </div>
  );
};
