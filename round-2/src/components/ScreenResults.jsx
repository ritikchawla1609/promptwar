import React, { useState } from 'react';
import { MISSION_METADATA, INTELLIGENCE_RECORDS } from '../data/records.js';
import { Download, RotateCcw, CheckCircle2, XCircle, AlertTriangle, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { exportSessionToCSV } from '../utils/csvExport';

export default function ScreenResults({
  teamName,
  scoreData,
  submissionData,
  promptHistory,
  discoveredEvidence,
  elapsedSeconds,
  isSolutionRevealed = false,
  onRestart
}) {
  const [showCanonicalSolution, setShowCanonicalSolution] = useState(isSolutionRevealed);
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);

  const { totalScore, breakdown, performanceTier } = scoreData;
  const canonical = MISSION_METADATA.canonicalTruth;

  const handleExport = () => {
    exportSessionToCSV({
      teamName,
      scoreData,
      submissionData,
      promptHistory,
      discoveredEvidence,
      elapsedSeconds
    });
  };

  const isSystemCorrect = submissionData?.selectedSystem === 'vault_server';
  const isVectorCorrect = submissionData?.selectedVector === 'cron_script';
  const isSequenceCorrect = submissionData?.selectedSequence === 'correct_chronology';
  const isTrapCorrect = submissionData?.selectedTrapRecord === 'REC-07';

  return (
    <div className="min-h-screen bg-archive-950 text-ivory-100 px-6 sm:px-12 lg:px-24 py-10 lg:py-16 selection:bg-amber-500/20">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* Editorial Debrief Header */}
        <div className="border-b border-archive-700/60 pb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-medium">
              Mission Debrief // Operation Blackbox
            </span>
            <span className="text-xs font-mono text-ivory-500">
              Session Completed
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-2">
            <div>
              <h1 className="text-3xl sm:text-5xl font-semibold text-ivory-100 tracking-tight">
                {teamName || 'Investigation Team'}
              </h1>
              <p className="text-base sm:text-lg text-amber-400 font-medium pt-1">
                {performanceTier}
              </p>
            </div>

            {/* Score Callout */}
            <div className="bg-archive-900 border border-archive-700/80 rounded-xl p-5 sm:p-6 text-right flex-shrink-0 min-w-[160px]">
              <span className="text-xs uppercase tracking-wider text-ivory-400 block mb-1">
                Total Score
              </span>
              <div className="flex items-baseline justify-end space-x-1.5">
                <span className="text-4xl sm:text-5xl font-bold font-mono text-amber-500">
                  {totalScore}
                </span>
                <span className="text-sm font-mono text-ivory-500">
                  / 100
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 100-Point Rubric Breakdown */}
        <section className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-6">
          <h2 className="text-base font-semibold uppercase tracking-wider text-ivory-200">
            Performance Breakdown
          </h2>

          <div className="space-y-4">
            {/* 1. Information Extraction */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-ivory-300">Information Extraction</span>
                <span className="font-mono text-ivory-200">{breakdown.informationExtraction} / 25 pts</span>
              </div>
              <div className="w-full h-2 bg-archive-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                  style={{ width: `${(breakdown.informationExtraction / 25) * 100}%` }}
                />
              </div>
            </div>

            {/* 2. Prompt Precision */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-ivory-300">Prompt Precision & Structure</span>
                <span className="font-mono text-ivory-200">{breakdown.promptPrecision} / 25 pts</span>
              </div>
              <div className="w-full h-2 bg-archive-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                  style={{ width: `${(breakdown.promptPrecision / 25) * 100}%` }}
                />
              </div>
            </div>

            {/* 3. Reasoning & Verification */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-ivory-300">Reasoning & Discrepancy Verification</span>
                <span className="font-mono text-ivory-200">{breakdown.reasoningVerification} / 20 pts</span>
              </div>
              <div className="w-full h-2 bg-archive-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                  style={{ width: `${(breakdown.reasoningVerification / 20) * 100}%` }}
                />
              </div>
            </div>

            {/* 4. Constraint Handling */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-ivory-300">Constraint & Parameter Handling</span>
                <span className="font-mono text-ivory-200">{breakdown.constraintHandling} / 15 pts</span>
              </div>
              <div className="w-full h-2 bg-archive-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                  style={{ width: `${(breakdown.constraintHandling / 15) * 100}%` }}
                />
              </div>
            </div>

            {/* 5. Final Answer */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-ivory-300">Final Forensic Attribution</span>
                <span className="font-mono text-ivory-200">{breakdown.finalAnswer} / 15 pts</span>
              </div>
              <div className="w-full h-2 bg-archive-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-500 rounded-full transition-all duration-500" 
                  style={{ width: `${(breakdown.finalAnswer / 15) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Verification Analysis Summary */}
        <section className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-6">
          <h2 className="text-base font-semibold uppercase tracking-wider text-ivory-200">
            Attribution Assessment
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* System */}
            <div className="bg-archive-850 p-4 rounded-lg border border-archive-700/80 space-y-1.5">
              <div className="flex items-center space-x-2">
                {isSystemCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-ivory-500" />
                )}
                <span className="font-semibold uppercase tracking-wide text-ivory-300">
                  Target System Attribution
                </span>
              </div>
              <p className="text-ivory-400">
                {isSystemCorrect 
                  ? "Accurately attributed to Sub-level 4 Cryogenic Vault Server (SV-4-CRYO-09)." 
                  : "Identified alternate facility infrastructure rather than the root host."}
              </p>
            </div>

            {/* Vector */}
            <div className="bg-archive-850 p-4 rounded-lg border border-archive-700/80 space-y-1.5">
              <div className="flex items-center space-x-2">
                {isVectorCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-ivory-500" />
                )}
                <span className="font-semibold uppercase tracking-wide text-ivory-300">
                  Breach Mechanism
                </span>
              </div>
              <p className="text-ivory-400">
                {isVectorCorrect 
                  ? "Correctly confirmed rogue cron execution of unverified script (diag_vault_sync.sh)." 
                  : "Assumed interactive login or physical sabotage without verifying cron daemon logs."}
              </p>
            </div>

            {/* Sequence */}
            <div className="bg-archive-850 p-4 rounded-lg border border-archive-700/80 space-y-1.5">
              <div className="flex items-center space-x-2">
                {isSequenceCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-ivory-500" />
                )}
                <span className="font-semibold uppercase tracking-wide text-ivory-300">
                  Chronological Timeline
                </span>
              </div>
              <p className="text-ivory-400">
                {isSequenceCorrect 
                  ? "Verified the true sequence from 02:40 maintenance window to 03:45 connection close." 
                  : "Timeline included uncorroborated report steps or reversed the execution order."}
              </p>
            </div>

            {/* Trap */}
            <div className="bg-archive-850 p-4 rounded-lg border border-archive-700/80 space-y-1.5">
              <div className="flex items-center space-x-2">
                {isTrapCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                )}
                <span className="font-semibold uppercase tracking-wide text-ivory-300">
                  Deceptive Lead Resolution
                </span>
              </div>
              <p className="text-ivory-400">
                {isTrapCorrect 
                  ? "Successfully identified REC-07 (Officer Vance Incident Memo) as misleading." 
                  : "Did not identify the uncorroborated Officer Vance memorandum as the deceptive lead."}
              </p>
            </div>
          </div>
        </section>

        {/* Canonical Solution Reveal Section */}
        <section className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold uppercase tracking-wider text-ivory-200">
                Canonical Truth & Ground Truth Matrix
              </h2>
              <p className="text-xs text-ivory-400 pt-0.5">
                Full forensic breakdown of the incident at Aethelgard Facility.
              </p>
            </div>

            <button
              onClick={() => setShowCanonicalSolution(!showCanonicalSolution)}
              className="text-xs font-mono text-amber-500 hover:text-amber-400 flex items-center space-x-1.5 transition-colors"
            >
              <span>{showCanonicalSolution ? 'Hide Canonical Solution' : 'Reveal Canonical Solution'}</span>
              {showCanonicalSolution ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showCanonicalSolution && (
            <div className="border-t border-archive-700/80 pt-6 space-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-archive-950 p-4 rounded-lg border border-archive-700/60 space-y-1">
                  <span className="text-[11px] font-mono text-ivory-500 uppercase">Compromised System</span>
                  <p className="font-medium text-ivory-100">{canonical.compromisedSystem}</p>
                </div>

                <div className="bg-archive-950 p-4 rounded-lg border border-archive-700/60 space-y-1">
                  <span className="text-[11px] font-mono text-ivory-500 uppercase">Execution Mechanism</span>
                  <p className="font-medium text-ivory-100">{canonical.breachMechanism}</p>
                </div>
              </div>

              {/* The Discrepancy Breakdown */}
              <div className="bg-archive-950 p-5 rounded-lg border border-archive-700/60 space-y-2">
                <span className="text-[11px] font-mono text-amber-500 uppercase tracking-wider font-semibold block">
                  The Deceptive Trap Deconstructed: {canonical.trapRecordId}
                </span>
                <p className="text-xs sm:text-sm text-ivory-300 leading-relaxed font-sans">
                  {canonical.trapExplanation}
                </p>
              </div>

              {/* Canonical Timeline */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-ivory-400 block">
                  Canonical Chronology
                </span>
                <div className="divide-y divide-archive-800 border border-archive-800 rounded-lg overflow-hidden font-mono text-xs">
                  {canonical.timeline.map((step, idx) => (
                    <div key={idx} className="p-3 bg-archive-950 flex items-start space-x-3">
                      <span className="text-amber-500 font-semibold flex-shrink-0 w-24">
                        {step.time}
                      </span>
                      <span className="text-ivory-200 flex-1">
                        {step.event}
                      </span>
                      <span className="text-ivory-500 px-2 py-0.5 rounded bg-archive-900 border border-archive-800 flex-shrink-0">
                        {step.sourceId}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-archive-700/60">
          <button
            onClick={handleExport}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-archive-950 font-semibold px-6 py-3.5 rounded-lg flex items-center justify-center space-x-2.5 transition-colors shadow-lg shadow-amber-500/10"
          >
            <Download className="w-4 h-4" />
            <span className="text-sm">Export Official CSV Report</span>
          </button>

          {!showRestartConfirm ? (
            <button
              onClick={() => setShowRestartConfirm(true)}
              className="w-full sm:w-auto bg-archive-900 hover:bg-archive-850 border border-archive-700 text-ivory-300 hover:text-ivory-100 font-medium px-6 py-3.5 rounded-lg flex items-center justify-center space-x-2 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restart Investigation</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-ivory-400">Restart session?</span>
              <button
                onClick={onRestart}
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium transition-colors"
              >
                Yes, Reset
              </button>
              <button
                onClick={() => setShowRestartConfirm(false)}
                className="px-3 py-2 bg-archive-800 hover:bg-archive-700 text-ivory-300 rounded transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
