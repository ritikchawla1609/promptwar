import React, { useState } from 'react';
import { Mission, PromptAttempt, EvaluationResult } from '../../types/frameZero';
import { SceneArtwork } from './SceneArtwork';
import {
  Award,
  Clapperboard,
  Download,
  Share2,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Camera,
  Layers,
  ArrowRight
} from 'lucide-react';

interface DirectorResultsProps {
  mission: Mission;
  directorName: string;
  attempts: PromptAttempt[];
  finalEvaluation: EvaluationResult;
  bestTake: PromptAttempt;
  onDirectAnother: () => void;
  onRestart: () => void;
}

export const DirectorResults: React.FC<DirectorResultsProps> = ({
  mission,
  directorName,
  attempts,
  finalEvaluation,
  bestTake,
  onDirectAnother,
  onRestart
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  // Download dossier as JSON
  const handleDownloadDossier = () => {
    const dossierData = {
      production: mission.title,
      japaneseTitle: mission.japaneseTitle,
      director: directorName,
      timestamp: new Date().toISOString(),
      score: finalEvaluation.totalScore,
      rank: finalEvaluation.directorRank,
      bestTakeNumber: bestTake.attemptNumber,
      bestPrompt: bestTake.prompt,
      categoryScores: finalEvaluation.categoryScores,
      satisfiedRequirements: finalEvaluation.satisfiedRequirements,
      missingRequirements: finalEvaluation.missingRequirements,
      detectedContradictions: finalEvaluation.detectedContradictions,
      feedbackNotes: finalEvaluation.feedbackNotes,
      allAttempts: attempts.map(a => ({
        take: a.attemptNumber,
        score: a.evaluation.totalScore,
        prompt: a.prompt,
        timestamp: a.timestamp
      }))
    };

    const blob = new Blob([JSON.stringify(dossierData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `frame_zero_cut_${mission.id}_${directorName.replace(/\s+/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyScorecard = () => {
    const text = `🎬 FRAME ZERO // The Director's Trial
Production: ${mission.title} (${mission.japaneseTitle})
Director: ${directorName}
Grade: ${finalEvaluation.totalScore}/100 [${finalEvaluation.directorRank}]
Takes: ${bestTake.attemptNumber} of ${attempts.length}
Prompt War · Round 03`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 py-10 px-4 sm:px-6 lg:px-12 flex flex-col justify-between selection:bg-amber-400/20 selection:text-amber-200">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        {/* Top Dossier Slate */}
        <header className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-400 mb-1">
                <Clapperboard className="w-4 h-4" />
                <span>OFFICIAL DIRECTOR'S CUT DOSSIER</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
                {mission.title}
              </h1>
              <div className="text-slate-400 font-mono text-sm mt-1">
                {mission.japaneseTitle} · Directed by {directorName}
              </div>
            </div>

            {/* Score Stamp */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/30 text-center self-start sm:self-auto min-w-[140px] shadow-lg shadow-amber-500/5">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">FINAL GRADE</div>
              <div className="text-4xl font-serif font-black text-amber-400">
                {finalEvaluation.totalScore}
              </div>
              <div className="text-xs font-mono text-amber-200/80 font-medium mt-0.5">
                {finalEvaluation.directorRank}
              </div>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <span>Best Take: #{bestTake.attemptNumber}</span>
              <span>·</span>
              <span>Total Takes: {attempts.length}</span>
              <span>·</span>
              <span>Difficulty: {mission.difficulty}</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleCopyScorecard}
                className="px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/60 flex items-center space-x-1.5"
              >
                <Share2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{copied ? 'Copied to Clipboard!' : 'Share Cut'}</span>
              </button>

              <button
                onClick={handleDownloadDossier}
                className="px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/60 flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span>Export Dossier (JSON)</span>
              </button>
            </div>
          </div>
        </header>

        {/* Master Film Frame Render */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Camera className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
                Director's Cut Frame Render
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Anamorphic 2.39:1 Scope
            </span>
          </div>

          <SceneArtwork
            mission={mission}
            score={finalEvaluation.totalScore}
            takeNumber={bestTake.attemptNumber}
          />
        </div>

        {/* 2-Column Details: Best Prompt & Pillars Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Directorial Vision Prompt & Review (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Locked Directorial Prompt (Take #{bestTake.attemptNumber})
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-sm text-slate-200 leading-relaxed font-sans italic">
                "{bestTake.prompt}"
              </div>
              <div className="text-right text-[11px] font-mono text-slate-400">
                Word Count: {bestTake.evaluation.promptWordCount} words
              </div>
            </div>

            {/* Critique & Notes */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Production Critique Notes</span>
              </div>

              {finalEvaluation.detectedContradictions.length > 0 && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs space-y-1">
                  <div className="font-semibold flex items-center space-x-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Contradictions Deductions</span>
                  </div>
                  {finalEvaluation.detectedContradictions.map((contra, idx) => (
                    <div key={idx}>• {contra}</div>
                  ))}
                </div>
              )}

              <div className="space-y-2">
                {finalEvaluation.feedbackNotes.map((note, idx) => (
                  <div key={idx} className="text-xs text-slate-300 flex items-start space-x-2 leading-relaxed">
                    <span className="text-amber-400 font-mono">›</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Score Breakdown & Requirements (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 5 Pillars Breakdown */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Score by Directorial Pillar
              </div>

              {Object.entries(finalEvaluation.categoryScores).map(([key, cat]) => {
                const pct = cat.percentage;
                return (
                  <div key={key} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-300">{cat.name}</span>
                      <span className="text-slate-400">
                        <strong className="text-amber-400">{cat.earned}</strong> / {cat.max} pts ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Met Scene Elements Checklist */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Scene Elements Realized
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {finalEvaluation.satisfiedRequirements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-300 flex items-center space-x-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}

                {finalEvaluation.missingRequirements.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-400 flex items-center space-x-2"
                  >
                    <XCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Takes Reel Table if Multiple Takes */}
        {attempts.length > 1 && (
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Production Takes Evolution
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left font-mono">
                <thead className="text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">TAKE</th>
                    <th className="py-2.5 px-3">TIME</th>
                    <th className="py-2.5 px-3">WORDS</th>
                    <th className="py-2.5 px-3">SCORE</th>
                    <th className="py-2.5 px-3">RANK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {attempts.map((att) => (
                    <tr
                      key={att.attemptNumber}
                      className={att.attemptNumber === bestTake.attemptNumber ? 'bg-amber-500/10' : ''}
                    >
                      <td className="py-2.5 px-3 font-bold text-white">
                        Take #{att.attemptNumber} {att.attemptNumber === bestTake.attemptNumber && '★ (Best)'}
                      </td>
                      <td className="py-2.5 px-3 text-slate-400">{att.timestamp}</td>
                      <td className="py-2.5 px-3 text-slate-400">{att.evaluation.promptWordCount} words</td>
                      <td className="py-2.5 px-3 font-bold text-amber-400">{att.evaluation.totalScore}/100</td>
                      <td className="py-2.5 px-3 text-slate-300">{att.evaluation.directorRank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <button
            onClick={onRestart}
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center space-x-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Change Director Identity</span>
          </button>

          <button
            onClick={onDirectAnother}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-xl shadow-amber-500/15 flex items-center justify-center space-x-2"
          >
            <span>Direct Another Scene</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-slate-400 font-mono">
        FRAME ZERO · THE DIRECTOR'S TRIAL // PROMPT WAR ROUND 03 · STUDIO ENGINE v2.0
      </footer>
    </div>
  );
};
