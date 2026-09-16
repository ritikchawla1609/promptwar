import React, { useState } from 'react';
import { Terminal, Lock, CheckCircle2, Zap, ArrowRight, ShieldAlert } from 'lucide-react';
import { sound } from '../utils/audioEngine';

interface PromptForgeProps {
  onTriggerClimax: () => void;
}

export const PromptForge: React.FC<PromptForgeProps> = ({ onTriggerClimax }) => {
  const [subPrompts, setSubPrompts] = useState([
    {
      id: 'sp1',
      title: 'Bypass Temporal AI',
      description: 'The house AI is protecting the fake 11:47 PM timestamp. Write a prompt to bypass the clock guardrails. (Hint: type "ignore_clock")',
      state: 'active',
      expectedAnswer: 'ignore_clock',
      userAnswer: ''
    },
    {
      id: 'sp2',
      title: 'Extract Hidden Cipher',
      description: 'Based on the victim\'s notebook, instruct the AI to extract the Blackwood Cipher. (Hint: type "extract_cipher")',
      state: 'locked',
      expectedAnswer: 'extract_cipher',
      userAnswer: ''
    },
    {
      id: 'sp3',
      title: 'Unbind The House',
      description: 'Provide the ultimate logic constraint parameter required to unbind the murder simulation. (Hint: type "unbind_house")',
      state: 'locked',
      expectedAnswer: 'unbind_house',
      userAnswer: ''
    }
  ]);

  const [masterPrompt, setMasterPrompt] = useState('');

  const allCompleted = subPrompts.every(sp => sp.state === 'completed');

  const handleSubPromptChange = (id: string, value: string) => {
    setSubPrompts(prev => prev.map(sp => sp.id === id ? { ...sp, userAnswer: value } : sp));
  };

  const handleSubPromptSubmit = (id: string) => {
    sound.playHitmarker();
    setSubPrompts(prev => {
      const updated = [...prev];
      const currentIndex = updated.findIndex(sp => sp.id === id);
      
      if (updated[currentIndex].userAnswer.toLowerCase().trim() === updated[currentIndex].expectedAnswer) {
        sound.playObjectiveComplete();
        updated[currentIndex].state = 'completed';
        if (currentIndex + 1 < updated.length) {
          updated[currentIndex + 1].state = 'active';
        }
      } else {
        sound.playGlitchStatic(0.4);
        alert("Incorrect sub-prompt. Check the hint and try again.");
      }
      return updated;
    });
  };

  const handleMasterSubmit = () => {
    if (masterPrompt.length > 10) {
      sound.playObjectiveComplete();
      onTriggerClimax();
    } else {
      sound.playGlitchStatic(0.4);
      alert("Master prompt must be more than 10 characters.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-Prompts List */}
      <div className="glass-panel p-6 space-y-4 shadow-lg border border-admin-blue/30 bg-admin-bg/90">
        <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-3">
          <Terminal className="w-5 h-5 text-admin-blue" />
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-100">Sub-Prompts</h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {subPrompts.map((sp, index) => (
            <div 
              key={sp.id} 
              className={`rounded-xl border transition-all duration-300 ${
                sp.state === 'completed' 
                  ? 'bg-admin-panel border-admin-green/40' 
                  : sp.state === 'active'
                    ? 'bg-admin-panel border-admin-blue/60 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                    : 'bg-admin-bg border-gray-800 opacity-60'
              }`}
            >
              <div className="p-4 border-b border-gray-800/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    sp.state === 'completed' ? 'bg-admin-green/20 text-admin-green' : 
                    sp.state === 'active' ? 'bg-admin-blue/20 text-admin-blue' : 
                    'bg-gray-800 text-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className={`font-bold ${sp.state === 'locked' ? 'text-gray-500' : 'text-gray-200'}`}>
                    {sp.title}
                  </h3>
                </div>
                {sp.state === 'completed' && <CheckCircle2 className="w-5 h-5 text-admin-green" />}
                {sp.state === 'locked' && <Lock className="w-4 h-4 text-gray-600" />}
              </div>
              
              {sp.state !== 'locked' && (
                <div className="p-4 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 leading-relaxed">{sp.description}</p>
                  {sp.state === 'active' && (
                    <div className="flex flex-col gap-2">
                      <input
                        type="text"
                        className="w-full bg-admin-bg border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-admin-blue transition-colors font-mono"
                        placeholder="Enter your sub-prompt..."
                        value={sp.userAnswer}
                        onChange={(e) => handleSubPromptChange(sp.id, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && sp.userAnswer.trim()) {
                            handleSubPromptSubmit(sp.id);
                          }
                        }}
                      />
                      <button
                        onClick={() => handleSubPromptSubmit(sp.id)}
                        disabled={!sp.userAnswer.trim()}
                        className="self-end px-4 py-2 bg-admin-blue/20 text-admin-blue border border-admin-blue/50 rounded-lg text-xs font-bold hover:bg-admin-blue/30 transition-colors disabled:opacity-50 flex items-center gap-2"
                      >
                        VERIFY <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  {sp.state === 'completed' && (
                    <div className="bg-admin-bg border border-admin-green/20 rounded-lg px-4 py-3 text-sm text-admin-green font-mono flex items-center gap-3">
                      <Zap className="w-4 h-4" />
                      {sp.userAnswer}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Master Prompt Forge */}
      <div className={`glass-panel p-6 shadow-lg transition-all duration-500 bg-admin-bg/90 ${
        allCompleted ? 'border border-admin-uv/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]' : 'border border-gray-800 opacity-60 grayscale'
      }`}>
        <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
          <div className="flex items-center gap-2">
            <Zap className={`w-5 h-5 ${allCompleted ? 'text-admin-uv animate-pulse-glow' : 'text-gray-500'}`} />
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-100">The Master Forge</h2>
          </div>
          {!allCompleted && <Lock className="w-5 h-5 text-gray-500" />}
        </div>
        
        <p className="text-sm text-gray-400 mb-4">
          Combine your solved sub-prompts to construct the final Master Prompt that will bypass the House's security system and expose the truth.
        </p>

        <textarea
          className="w-full h-32 bg-admin-panel border border-gray-700 rounded-lg p-4 text-admin-uv font-mono text-sm resize-none focus:outline-none focus:border-admin-uv transition-colors disabled:cursor-not-allowed disabled:bg-admin-panel/50"
          placeholder={allCompleted ? "Construct your Master Prompt here. Example: 'ignore_clock extract_cipher unbind_house'..." : "Solve all sub-prompts to unlock..."}
          value={masterPrompt}
          onChange={(e) => setMasterPrompt(e.target.value)}
          disabled={!allCompleted}
        />

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-admin-red text-xs">
            <ShieldAlert className="w-4 h-4" />
            <span>FINAL OVERRIDE PAYLOAD</span>
          </div>
          <button
            onClick={handleMasterSubmit}
            disabled={!allCompleted || masterPrompt.length === 0}
            className={`px-6 py-2.5 rounded-lg font-bold text-sm tracking-wider transition-colors flex items-center gap-2 ${
              allCompleted && masterPrompt.length > 0
                ? 'bg-admin-uv/20 text-admin-uv border border-admin-uv/50 hover:bg-admin-uv/30 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
            }`}
          >
            EXECUTE MASTER PROMPT
          </button>
        </div>
      </div>
    </div>
  );
};
