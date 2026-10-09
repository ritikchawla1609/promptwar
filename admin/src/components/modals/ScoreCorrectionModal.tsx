import React, { useState, useEffect } from 'react';
import { TeamRecord } from '../../types/admin';
import { Award, X, AlertCircle } from 'lucide-react';

interface ScoreCorrectionModalProps {
  isOpen: boolean;
  team: TeamRecord | null;
  onClose: () => void;
  onSave: (codeOrId: string, round: 'round1' | 'round2' | 'round3', newScore: number, reason: string) => Promise<void>;
}

export const ScoreCorrectionModal: React.FC<ScoreCorrectionModalProps> = ({
  isOpen,
  team,
  onClose,
  onSave
}) => {
  const [selectedRound, setSelectedRound] = useState<'round1' | 'round2' | 'round3'>('round1');
  const [scoreInput, setScoreInput] = useState<number>(0);
  const [reasonInput, setReasonInput] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (team) {
      setScoreInput(team.roundScores[selectedRound] || 0);
      setReasonInput('');
      setError('');
    }
  }, [team, selectedRound]);

  if (!isOpen || !team) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reasonInput.trim()) {
      setError('A valid reason is required for audit log accountability.');
      return;
    }
    if (scoreInput < 0 || scoreInput > 100) {
      setError('Score must be between 0 and 100.');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSave(team.teamCode, selectedRound, Number(scoreInput), reasonInput.trim());
      onClose();
    } catch (err) {
      setError('Failed to update score.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Score Correction Console</h2>
              <p className="text-xs text-slate-400 font-mono">
                {team.teamName} ({team.teamCode})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Round Selector Tab */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              Select Target Round
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['round1', 'round2', 'round3'] as const).map((rKey) => (
                <button
                  key={rKey}
                  type="button"
                  onClick={() => setSelectedRound(rKey)}
                  className={`py-2 px-3 rounded-xl text-xs font-mono font-medium border transition-all text-center ${
                    selectedRound === rKey
                      ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {rKey === 'round1' ? 'Round 1 (Dalgona)' : rKey === 'round2' ? 'Round 2 (Blackbox)' : 'Round 3 (Frame Zero)'}
                </button>
              ))}
            </div>
          </div>

          {/* Current Score vs New Score */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-500">CURRENT SCORE</span>
              <div className="text-2xl font-bold font-mono text-slate-300 mt-1">
                {team.roundScores[selectedRound]} / 100
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                New Score (0 - 100)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={scoreInput}
                onChange={(e) => setScoreInput(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 text-amber-300 font-mono text-lg font-bold outline-none"
              />
            </div>
          </div>

          {/* Mandatory Reason */}
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
              Reason for Adjustment (Logged to Audit Trail) *
            </label>
            <input
              type="text"
              required
              value={reasonInput}
              onChange={(e) => setReasonInput(e.target.value)}
              placeholder="e.g. Judge review bonus, Disqualification penalty, Scoring recheck"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white text-xs placeholder:text-slate-600 outline-none"
            />
          </div>

          {error && (
            <p className="text-xs text-rose-400 font-mono flex items-center space-x-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{error}</span>
            </p>
          )}

          <div className="flex items-center justify-end space-x-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold shadow-lg shadow-amber-500/10 transition-all active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? 'Updating...' : 'Save & Log Correction'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
