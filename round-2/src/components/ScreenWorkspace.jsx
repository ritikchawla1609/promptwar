import React, { useState, useRef, useEffect } from 'react';
import { 
  Clock, 
  Send, 
  FileText, 
  RotateCcw, 
  History, 
  ArrowRight, 
  Lock, 
  ExternalLink, 
  Sparkles, 
  HelpCircle,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { formatTimeMMSS } from '../utils/timer';

export default function ScreenWorkspace({
  teamName,
  timerState,
  objectives,
  activeObjectiveIndex,
  onPromptSubmit,
  lastResponse,
  promptHistory,
  discoveredEvidence,
  onOpenRecordsDrawer,
  onOpenHistory,
  onOpenHostControls,
  onProceedToSubmission,
  scorePreview = null
}) {
  const [promptText, setPromptText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef(null);

  // Remaining time
  const remainingSeconds = timerState?.remainingSeconds || 0;
  const isTimeLow = remainingSeconds > 0 && remainingSeconds <= 120; // under 2 mins

  const currentObjective = objectives[activeObjectiveIndex] || objectives[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!promptText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    // Deterministic instant local execution with a subtle natural transition (250ms)
    setTimeout(() => {
      onPromptSubmit(promptText.trim());
      setIsSubmitting(false);
      setPromptText('');
    }, 200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-archive-950 text-ivory-100 flex flex-col justify-between selection:bg-amber-500/20">
      {/* Top Navigation */}
      <header className="border-b border-archive-700/60 bg-archive-950/90 sticky top-0 z-40 px-6 sm:px-12 lg:px-20 py-4 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left: Product & Round */}
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div>
              <span className="text-xs uppercase tracking-widest text-ivory-400 font-semibold block leading-tight">
                Operation Blackbox
              </span>
              <span className="text-[10px] text-ivory-500 tracking-wider">
                Prompt War · Round 02
              </span>
            </div>
          </div>

          {/* Right: Team, Timer, Records Trigger, Facilitator Lock */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Team Identity */}
            <div className="hidden sm:flex items-center space-x-2 text-xs text-ivory-400">
              <span className="text-ivory-500 uppercase">Team:</span>
              <span className="font-mono text-ivory-100 font-medium px-2 py-0.5 rounded bg-archive-900 border border-archive-700">
                {teamName}
              </span>
            </div>

            {/* Records Access Button */}
            <button
              onClick={onOpenRecordsDrawer}
              className="bg-archive-900 hover:bg-archive-850 border border-archive-700 hover:border-archive-600 text-ivory-200 text-xs font-medium px-3.5 py-2 rounded-lg flex items-center space-x-2 transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>View records</span>
              <span className="font-mono text-[11px] text-ivory-500 bg-archive-800 px-1.5 py-0.5 rounded ml-1">
                {discoveredEvidence.length}/14
              </span>
            </button>

            {/* Countdown Timer */}
            <div 
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border font-mono text-xs sm:text-sm font-semibold transition-colors ${
                isTimeLow 
                  ? 'border-amber-500 bg-amber-500/10 text-amber-400 animate-pulse' 
                  : 'border-archive-700 bg-archive-900 text-ivory-200'
              }`}
              title={timerState?.isPaused ? 'Timer paused by facilitator' : 'Remaining investigation time'}
            >
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{formatTimeMMSS(remainingSeconds)}</span>
              {timerState?.isPaused && (
                <span className="text-[10px] text-amber-400 font-normal uppercase ml-1">
                  Paused
                </span>
              )}
            </div>

            {/* Discreet Facilitator Lock */}
            <button
              onClick={onOpenHostControls}
              className="p-2 text-ivory-500 hover:text-ivory-300 hover:bg-archive-900 rounded-lg transition-colors"
              title="Host facilitation controls"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-12 lg:px-20 py-8 lg:py-12 space-y-8">
        {/* Mission Objective Header */}
        <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-semibold">
                Objective {activeObjectiveIndex + 1} of {objectives.length}
              </span>
              <span className="text-xs text-ivory-500">·</span>
              <span className="text-xs text-ivory-400 font-medium">
                {currentObjective?.completed ? 'Accomplished' : 'Current Task'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-ivory-100 tracking-tight">
              {currentObjective?.title === 'Find the signal' 
                ? 'Find out how the data left the facility.' 
                : currentObjective?.title === 'Reconstruct the sequence'
                ? 'Compare records and uncover the false lead.'
                : 'Synthesize findings and prepare final submission.'}
            </h1>

            <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-normal max-w-2xl">
              {currentObjective?.description} {currentObjective?.hint && `(${currentObjective.hint})`}
            </p>
          </div>

          {/* Quick Submission Shortcut when unlocked or ready */}
          {(activeObjectiveIndex >= 2 || currentObjective?.completed) && (
            <button
              onClick={onProceedToSubmission}
              className="bg-amber-500 hover:bg-amber-600 text-archive-950 font-semibold px-5 py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center space-x-2 flex-shrink-0 transition-colors shadow-md shadow-amber-500/10 active:translate-y-0.5"
            >
              <span>Submit final answer</span>
              <ArrowRight className="w-4 h-4 text-archive-950" />
            </button>
          )}
        </div>

        {/* Central Workspace Layout: Prompt Editor + Conversational Response */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Prompt Editor (Focal Point) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-7 space-y-4 shadow-sm focus-within:border-archive-600 transition-colors">
              <div className="flex items-center justify-between pb-1">
                <label 
                  htmlFor="promptInput" 
                  className="text-xs font-mono uppercase tracking-wider text-ivory-400 font-medium"
                >
                  Prompt Investigation Query
                </label>
                <div className="flex items-center space-x-3 text-xs text-ivory-500">
                  <span>{promptText.length} chars</span>
                  <button
                    type="button"
                    onClick={() => setPromptText('')}
                    disabled={!promptText}
                    className="hover:text-ivory-300 disabled:opacity-40 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Large, comfortable multiline editor */}
              <textarea
                id="promptInput"
                ref={textareaRef}
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={5}
                placeholder="Ask a question about the records, cross-reference source IDs, or test a timestamp hypothesis..."
                className="w-full bg-archive-950 border border-archive-700/80 rounded-lg p-4 text-sm sm:text-base text-ivory-100 placeholder:text-ivory-500 focus:outline-none focus:border-amber-500 transition-colors font-mono resize-none leading-relaxed"
                autoComplete="off"
              />

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={onOpenHistory}
                    className="bg-archive-850 hover:bg-archive-800 border border-archive-700 text-ivory-300 hover:text-ivory-100 text-xs px-3 py-2.5 rounded-lg flex items-center space-x-1.5 transition-colors"
                  >
                    <History className="w-3.5 h-3.5 text-amber-500" />
                    <span>Prompt history ({promptHistory.length})</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!promptText.trim() || isSubmitting}
                  className="bg-amber-500 hover:bg-amber-600 disabled:opacity-40 disabled:hover:bg-amber-500 text-archive-950 font-semibold px-6 py-2.5 rounded-lg text-sm flex items-center justify-center space-x-2 transition-all shadow-md shadow-amber-500/10 active:translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-archive-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit prompt</span>
                      <Send className="w-3.5 h-3.5 text-archive-950" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Investigative Syntax Tip */}
            <div className="px-2 text-xs text-ivory-500 flex items-center justify-between">
              <span>Tip: Press Cmd+Enter to submit prompt</span>
              <span className="font-mono text-[11px] text-ivory-500">
                Deterministic Evaluator Active
              </span>
            </div>
          </div>

          {/* Right Column: Conversational Response & Findings */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm min-h-[380px] flex flex-col justify-between">
              <div>
                {/* Response Header */}
                <div className="flex items-center justify-between border-b border-archive-700/60 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs uppercase tracking-wider text-ivory-400 font-semibold">
                      Findings & Synthesis
                    </span>
                  </div>

                  {lastResponse?.citations?.length > 0 && (
                    <span className="text-[11px] font-mono text-ivory-500">
                      Sources Cited: {lastResponse.citations.length}
                    </span>
                  )}
                </div>

                {/* Briefing Content */}
                {!lastResponse ? (
                  <div className="py-16 text-center space-y-3">
                    <p className="text-sm text-ivory-400 font-medium">
                      Archive is standing by.
                    </p>
                    <p className="text-xs text-ivory-500 max-w-xs mx-auto leading-relaxed">
                      Submit a question above to analyze the facility records, inspect access registries, and discover evidence.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* Summary Headline */}
                    <h3 className="text-base font-medium text-ivory-100">
                      {lastResponse.summary}
                    </h3>

                    {/* What the records establish */}
                    {lastResponse.establishedFacts?.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-500 block">
                          Verified in Archive
                        </span>
                        <div className="space-y-2">
                          {lastResponse.establishedFacts.map((fact, idx) => (
                            <div 
                              key={idx}
                              className="bg-archive-950 p-3 rounded-lg border border-archive-700/60 flex items-start justify-between space-x-3"
                            >
                              <p className="text-xs text-ivory-200 leading-relaxed">
                                {fact.text}
                              </p>
                              {fact.citation && (
                                <button
                                  onClick={() => onOpenRecordsDrawer(fact.citation)}
                                  className="flex-shrink-0 font-mono text-[11px] px-2 py-0.5 rounded bg-archive-850 hover:bg-archive-800 text-amber-400 border border-archive-700 hover:border-amber-500 transition-colors"
                                  title={`Open ${fact.citation}`}
                                >
                                  {fact.citation}
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* What remains uncertain */}
                    {lastResponse.uncertainties?.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-ivory-400 block">
                          Uncertainties & Open Questions
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-xs text-ivory-300 leading-relaxed">
                          {lastResponse.uncertainties.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Contextual Improvement Tip */}
              {lastResponse?.improvementTip && (
                <div className="mt-4 pt-4 border-t border-archive-700/60 bg-archive-950/40 -mx-6 -mb-6 p-5 rounded-b-xl space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Improve your prompt</span>
                  </div>
                  <p className="text-xs text-ivory-400 leading-relaxed">
                    {lastResponse.improvementTip}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Spacious Footer */}
      <footer className="border-t border-archive-700/60 px-6 sm:px-12 lg:px-20 py-4 text-xs text-ivory-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Aethelgard Deep Bio-Compute Facility // Security Audit Ledger</span>
          <div className="flex items-center space-x-4">
            {scorePreview && (
              <span className="font-mono text-ivory-400">
                Extracted Evidence: {discoveredEvidence.length} Sources
              </span>
            )}
            <button
              onClick={onProceedToSubmission}
              className="text-amber-500 hover:text-amber-400 underline underline-offset-4 transition-colors"
            >
              Proceed to Final Submission
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
