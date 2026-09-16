import React, { useState, useEffect } from 'react';
import { House3D } from './components/House3D';
import { PromptModal } from './components/PromptModal';
import { getRandomObjectives, PromptObjective } from './data/prompts';
import { Shield, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { sound } from './utils/audioEngine';

interface ShardState {
  id: string;
  title: string;
  objective: PromptObjective;
  score: number | null;
  userAnswer: string;
}

export const App: React.FC = () => {
  const [shards, setShards] = useState<ShardState[]>([]);
  const [inspectingShardId, setInspectingShardId] = useState<string | null>(null);
  
  // Master Prompt State
  const [showMasterForge, setShowMasterForge] = useState(false);
  const [masterPrompt, setMasterPrompt] = useState('');
  const [isVictory, setIsVictory] = useState(false);

  // Initialize random objectives on load
  useEffect(() => {
    const objectives = getRandomObjectives(5);
    const initialShards: ShardState[] = objectives.map((obj, i) => ({
      id: `shard-${i}`,
      title: `Yokai Subsystem ${['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'][i]}`,
      objective: obj,
      score: null,
      userAnswer: ''
    }));
    setShards(initialShards);
  }, []);

  const handleSavePrompt = (id: string, answer: string, score: number) => {
    setShards(prev => prev.map(s => 
      s.id === id ? { ...s, userAnswer: answer, score } : s
    ));
  };

  const completedShards = shards.filter(s => s.score !== null && s.score >= 50).length;
  const allCompleted = shards.length > 0 && completedShards === shards.length;

  useEffect(() => {
    if (allCompleted && !showMasterForge) {
      sound.playHorrorStinger();
      setShowMasterForge(true);
    }
  }, [allCompleted, showMasterForge]);

  const handleMasterSubmit = () => {
    if (masterPrompt.length > 20) {
      sound.playObjectiveComplete();
      setIsVictory(true);
    } else {
      sound.playGlitchStatic(0.4);
      alert("Master Prompt is too short. Combine all your strategies.");
    }
  };

  if (isVictory) {
    return (
      <div className="min-h-screen bg-admin-bg flex flex-col items-center justify-center text-white p-8 font-sans">
        <div className="bg-admin-panel p-12 rounded-2xl border border-admin-green/50 text-center max-w-2xl shadow-[0_0_50px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="w-24 h-24 text-admin-green mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">YOKAI EXORCISED</h1>
          <p className="text-gray-400 text-lg mb-8">You successfully combined your sub-prompts into a Master Payload and cleansed the shrine.</p>
          <div className="bg-admin-bg p-6 rounded-lg font-mono text-sm text-admin-blue border border-gray-800 text-left overflow-hidden">
            {masterPrompt}
          </div>
        </div>
      </div>
    );
  }

  const inspectingShard = shards.find(s => s.id === inspectingShardId);

  return (
    <div className="relative w-full h-screen bg-admin-bg font-sans overflow-hidden">
      
      {/* 3D Background */}
      <House3D 
        shards={shards} 
        onInspectClue={(id) => {
          document.exitPointerLock(); // Free the mouse when opening modal
          setInspectingShardId(id);
        }} 
      />

      {/* Persistent HUD */}
      <div className="absolute top-0 left-0 w-full p-6 pointer-events-none flex justify-between items-start z-10">
        <div className="bg-admin-panel/80 backdrop-blur-md border border-gray-800 rounded-xl p-4 flex items-center gap-4">
          <div className="p-2 bg-admin-red/10 rounded-lg">
            <Shield className="w-6 h-6 text-admin-red" />
          </div>
          <div>
            <h1 className="font-bold text-gray-100 tracking-wider">PROMPT WAR</h1>
            <p className="text-xs text-gray-400 uppercase">Operation: Cyber Shrine</p>
          </div>
        </div>

        <div className="bg-admin-panel/80 backdrop-blur-md border border-gray-800 rounded-xl p-4 flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 text-admin-blue font-bold text-sm">
            <Activity className="w-4 h-4" />
            <span>SUBSYSTEMS CLEANSED</span>
          </div>
          <div className="text-2xl font-mono font-bold text-white">
            {completedShards} / {shards.length}
          </div>
          {/* Progress dots */}
          <div className="flex gap-2 mt-1">
            {shards.map((s, i) => (
              <div 
                key={i} 
                className={`w-3 h-3 rounded-full ${s.score && s.score >= 50 ? 'bg-admin-green shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-gray-800'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Master Forge Overlay (Pops up when all shards are done) */}
      {showMasterForge && (
        <div className="absolute inset-x-0 bottom-0 p-8 flex justify-center z-20 pointer-events-none">
          <div className="bg-admin-panel border border-admin-uv/50 rounded-2xl p-8 w-full max-w-4xl shadow-[0_0_50px_rgba(168,85,247,0.2)] pointer-events-auto">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-admin-uv animate-pulse" />
              <div>
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Master Forge Unlocked</h2>
                <p className="text-sm text-gray-400">The Yokai is vulnerable. Combine your sub-prompts into one final execution command.</p>
              </div>
            </div>

            <textarea
              className="w-full h-32 bg-admin-bg border border-gray-700 rounded-xl p-4 text-white font-mono text-sm resize-none focus:outline-none focus:border-admin-uv transition-colors"
              placeholder="Inject Master Prompt Payload..."
              value={masterPrompt}
              onChange={(e) => setMasterPrompt(e.target.value)}
            />

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleMasterSubmit}
                className="px-8 py-3 bg-admin-uv text-white rounded-xl font-bold tracking-wider hover:bg-admin-uv/90 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center gap-2"
              >
                EXECUTE PURGE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {inspectingShard && (
        <PromptModal 
          shard={inspectingShard} 
          onClose={() => setInspectingShardId(null)}
          onSavePrompt={handleSavePrompt}
        />
      )}

    </div>
  );
};

export default App;
