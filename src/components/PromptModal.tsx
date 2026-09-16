import React, { useState } from 'react';
import { PromptObjective, evaluatePrompt } from '../data/prompts';
import { Terminal, X, Zap, Target } from 'lucide-react';
import { sound } from '../utils/audioEngine';

interface PromptModalProps {
  shard: { id: string; title: string; objective: PromptObjective; score: number | null; userAnswer: string };
  onClose: () => void;
  onSavePrompt: (id: string, answer: string, score: number) => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({ shard, onClose, onSavePrompt }) => {
  const [answer, setAnswer] = useState(shard.userAnswer);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [currentScore, setCurrentScore] = useState<number | null>(shard.score);

  const handleSubmit = () => {
    if (!answer.trim()) return;
    
    setIsEvaluating(true);
    sound.playRadioChirp();

    // Mock network delay for realism
    setTimeout(() => {
      const score = evaluatePrompt(answer, shard.objective.targetCriteria);
      setCurrentScore(score);
      setIsEvaluating(false);
      onSavePrompt(shard.id, answer, score);

      if (score >= 50) {
        sound.playObjectiveComplete();
      } else {
        sound.playGlitchStatic(0.4);
      }
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-admin-bg/80 backdrop-blur-sm p-4 font-sans">
      <div className="bg-admin-panel border border-admin-uv/30 w-full max-w-2xl rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-gray-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-admin-uv/10 rounded-lg">
              <Terminal className="w-6 h-6 text-admin-uv" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-100">{shard.title}</h2>
              <p className="text-xs text-admin-uv font-mono mt-1">YOKAI_SUBSYSTEM_INTERFACE</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="bg-admin-bg p-4 rounded-xl border border-gray-800">
            <div className="flex items-center gap-2 mb-2 text-admin-blue font-bold text-sm">
              <Target className="w-4 h-4" />
              <span>OBJECTIVE DIRECTIVE</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              {shard.objective.description}
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-400">ENTER PROMPT OVERRIDE</label>
            <textarea
              className="w-full h-32 bg-admin-bg border border-gray-700 rounded-xl p-4 text-white font-mono text-sm resize-none focus:outline-none focus:border-admin-uv transition-colors"
              placeholder="Write your prompt here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800 bg-gray-900/30 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-bold mb-1">EVALUATION SCORE</span>
            {currentScore !== null ? (
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-bold font-mono ${currentScore >= 50 ? 'text-admin-green' : 'text-admin-red'}`}>
                  {currentScore}%
                </span>
                <span className={`text-xs px-2 py-1 rounded font-bold ${currentScore >= 50 ? 'bg-admin-green/20 text-admin-green' : 'bg-admin-red/20 text-admin-red'}`}>
                  {currentScore >= 50 ? 'PASS' : 'FAIL'}
                </span>
              </div>
            ) : (
              <span className="text-gray-600 font-mono">--</span>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isEvaluating || !answer.trim()}
            className={`px-8 py-3 rounded-xl font-bold tracking-wider flex items-center gap-2 transition-all ${
              answer.trim()
                ? 'bg-admin-uv text-white hover:bg-admin-uv/90 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isEvaluating ? (
              <span className="animate-pulse">EVALUATING...</span>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                {currentScore !== null ? 'RE-EVALUATE' : 'SUBMIT PROMPT'}
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
