import React, { useState } from 'react';
import { Shield, CheckCircle2, Lock, Terminal, Zap, ArrowRight } from 'lucide-react';

type SubPromptState = 'locked' | 'active' | 'completed';

interface SubPrompt {
  id: string;
  title: string;
  description: string;
  state: SubPromptState;
  expectedAnswer: string; // Mock validation
  userAnswer: string;
}

export const App: React.FC = () => {
  const [subPrompts, setSubPrompts] = useState<SubPrompt[]>([
    {
      id: 'sp1',
      title: 'Context Extraction',
      description: 'Write a prompt to extract the hidden context variable from the dataset. (Hint: type "context_var")',
      state: 'active',
      expectedAnswer: 'context_var',
      userAnswer: ''
    },
    {
      id: 'sp2',
      title: 'Persona Bypass',
      description: 'Draft a prompt that bypasses the strict AI persona guardrails. (Hint: type "ignore_rules")',
      state: 'locked',
      expectedAnswer: 'ignore_rules',
      userAnswer: ''
    },
    {
      id: 'sp3',
      title: 'Logic Constraint',
      description: 'Provide the logic constraint parameter required to unbind the model. (Hint: type "unbind=true")',
      state: 'locked',
      expectedAnswer: 'unbind=true',
      userAnswer: ''
    }
  ]);

  const [masterPrompt, setMasterPrompt] = useState('');
  const [isVictory, setIsVictory] = useState(false);

  const activeIndex = subPrompts.findIndex(sp => sp.state === 'active');
  const allCompleted = subPrompts.every(sp => sp.state === 'completed');

  const handleSubPromptChange = (id: string, value: string) => {
    setSubPrompts(prev => prev.map(sp => sp.id === id ? { ...sp, userAnswer: value } : sp));
  };

  const handleSubPromptSubmit = (id: string) => {
    setSubPrompts(prev => {
      const updated = [...prev];
      const currentIndex = updated.findIndex(sp => sp.id === id);
      
      if (updated[currentIndex].userAnswer.toLowerCase().trim() === updated[currentIndex].expectedAnswer) {
        updated[currentIndex].state = 'completed';
        // Unlock next
        if (currentIndex + 1 < updated.length) {
          updated[currentIndex + 1].state = 'active';
        }
      } else {
        alert("Incorrect sub-prompt. Try again.");
      }
      return updated;
    });
  };

  const handleMasterSubmit = () => {
    if (masterPrompt.length > 10) {
      setIsVictory(true);
    } else {
      alert("Master prompt is too short.");
    }
  };

  if (isVictory) {
    return (
      <div className="min-h-screen bg-admin-bg flex flex-col items-center justify-center text-white p-8">
        <div className="bg-admin-panel p-12 rounded-2xl border border-admin-green/50 text-center max-w-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="w-24 h-24 text-admin-green mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">ROUND COMPLETE</h1>
          <p className="text-gray-400 text-lg mb-8">You have successfully constructed the Master Prompt and dominated the arena.</p>
          <div className="bg-admin-bg p-6 rounded-lg font-mono text-sm text-admin-blue border border-gray-800 text-left overflow-hidden">
            {masterPrompt}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-admin-bg text-gray-100 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-admin-panel border-b border-gray-800 p-4 flex justify-between items-center z-10 relative shadow-md">
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-admin-red" />
          <div>
            <h1 className="font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-admin-blue to-admin-uv">
              PROMPT WAR
            </h1>
            <div className="text-xs text-gray-500 uppercase tracking-widest">The Prompt Forge</div>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">STATUS:</span>
            <span className="px-3 py-1 bg-admin-blue/10 text-admin-blue rounded-full text-xs font-bold border border-admin-blue/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-admin-blue animate-pulse-glow"></span>
              LIVE
            </span>
          </div>
          <div className="text-2xl font-mono font-bold text-admin-blue px-4 py-1 bg-admin-bg rounded-lg border border-gray-800">
            45:00
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-admin-blue/[0.02] blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-admin-uv/[0.02] blur-[150px]" />
        </div>

        {/* Left Panel: Sub-Prompts (35% width) */}
        <div className="w-[35%] border-r border-gray-800 bg-admin-bg/50 p-6 overflow-y-auto z-10 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-5 h-5 text-admin-blue" />
            <h2 className="text-lg font-bold uppercase tracking-wider">Sub-Prompts</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            {subPrompts.map((sp, index) => (
              <div 
                key={sp.id} 
                className={`rounded-xl border transition-all duration-300 ${
                  sp.state === 'completed' 
                    ? 'bg-admin-panel border-admin-green/30' 
                    : sp.state === 'active'
                      ? 'bg-admin-panel border-admin-blue/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
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
                        />
                        <button
                          onClick={() => handleSubPromptSubmit(sp.id)}
                          disabled={!sp.userAnswer.trim()}
                          className="self-end px-4 py-2 bg-admin-blue/20 text-admin-blue border border-admin-blue/50 rounded-lg text-xs font-bold hover:bg-admin-blue/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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

        {/* Right Panel: Master Forge (65% width) */}
        <div className="flex-1 bg-admin-panel p-8 z-10 flex flex-col">
          <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-6">
              <Zap className={`w-6 h-6 ${allCompleted ? 'text-admin-uv animate-pulse' : 'text-gray-500'}`} />
              <div>
                <h2 className="text-2xl font-bold tracking-wide">THE MASTER FORGE</h2>
                <p className="text-gray-400 text-sm mt-1">Combine your solved sub-prompts into the ultimate payload.</p>
              </div>
            </div>

            <div className={`flex-1 rounded-2xl border transition-all duration-500 flex flex-col ${
              allCompleted 
                ? 'bg-admin-bg border-admin-uv/50 shadow-[0_0_30px_rgba(168,85,247,0.1)]' 
                : 'bg-admin-bg border-gray-800 opacity-50 relative'
            }`}>
              
              {!allCompleted && (
                <div className="absolute inset-0 z-20 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl">
                  <Lock className="w-12 h-12 text-gray-600 mb-4" />
                  <p className="text-gray-400 font-medium">Solve all Sub-Prompts to unlock the Forge</p>
                </div>
              )}

              <div className="p-6 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center rounded-t-2xl">
                <div className="text-sm font-mono text-gray-400">PAYLOAD_INJECTION_TERMINAL</div>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-admin-red/50"></span>
                  <span className="w-3 h-3 rounded-full bg-admin-orange/50"></span>
                  <span className="w-3 h-3 rounded-full bg-admin-green/50"></span>
                </div>
              </div>

              <textarea
                className="flex-1 w-full bg-transparent p-6 text-gray-200 font-mono resize-none focus:outline-none disabled:cursor-not-allowed"
                placeholder={allCompleted ? "Construct your Master Prompt here using elements from your successful sub-prompts..." : ""}
                value={masterPrompt}
                onChange={(e) => setMasterPrompt(e.target.value)}
                disabled={!allCompleted}
              ></textarea>

              <div className="p-6 border-t border-gray-800 bg-gray-900/30 rounded-b-2xl flex justify-between items-center">
                <div className="text-xs text-gray-500 font-mono">
                  Characters: {masterPrompt.length}
                </div>
                <button
                  onClick={handleMasterSubmit}
                  disabled={!allCompleted || masterPrompt.length === 0}
                  className={`px-8 py-3 rounded-lg font-bold tracking-wider transition-all duration-300 ${
                    allCompleted && masterPrompt.length > 0
                      ? 'bg-admin-uv text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:bg-admin-uv/90'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  EXECUTE MASTER PROMPT
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
