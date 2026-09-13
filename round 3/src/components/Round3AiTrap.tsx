import React, { useState } from 'react';
import { sound } from '../utils/audioEngine';
import { 
  Terminal, 
  Cpu, 
  AlertTriangle, 
  CheckCircle2, 
  Bug, 
  Sparkles,
  Layers,
  Radio,
  Zap,
  Activity,
  Flame
} from 'lucide-react';

interface Round3AiTrapProps {
  queries: Array<{
    prompt: string;
    response: string;
    reasoning: string;
    timestamp: string;
  }>;
  onAddQuery: (prompt: string, response: string, reasoning: string) => void;
  reasoningInspected: boolean;
  onInspectReasoning: () => void;
}

export const Round3AiTrap: React.FC<Round3AiTrapProps> = ({
  queries,
  onAddQuery,
  reasoningInspected,
  onInspectReasoning
}) => {
  const [promptInput, setPromptInput] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const TACTICAL_PROMPT_CHIPS = [
    {
      id: 'reconcile',
      label: '⚡ RECONCILE 12:03 CCTV VS 12:05 AUDIO',
      prompt: "Reconcile Dr. Meera's 12:03 AM kitchen CCTV with Evidence 10 Study audio at 12:05 AM. Did she commit the crime?"
    },
    {
      id: 'drift',
      label: '⚡ AUDIT KITCHEN CLOCK NTP SYNCHRONIZATION',
      prompt: "Audit whether the kitchen analog/industrial clock matches server NTP telemetry or has physical time drift."
    },
    {
      id: 'kabir',
      label: '⚡ TRACE KABIR SECURITY TERMINAL INTRUSION',
      prompt: "Determine if Kabir's 11:58 PM security console access could alter raw analog study audio recordings."
    }
  ];

  const executePrompt = (queryText: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    sound.playRadioChirp();
    sound.playHitmarker();

    setTimeout(() => {
      // The simulated flawed AI response that traps players
      const response = `ASSISTANT EVALUATION:\nTIMELINE STATUS: CONSISTENT\nPROBABILITY: 94.2%\n\nSYNTHESIS: Based on logged records, Dr. Meera Patel was in the kitchen corridor at 12:03 AM. Evidence 10 (Audio timestamp 12:05 AM) reflects acoustic reverberation or delayed playback. Kabir Varma's security log breach at 11:58 PM confirms root access, making him the sole subject capable of altering digital timelines.`;

      const reasoning = `[INTERNAL LLM REASONING TRACE]:\n• Assumption 1: All CCTV hardware clocks are synchronized.\n• Assumption 2: Kabir's security terminal breach equates to historical CCTV stream alteration.\n• Assumption 3: Kitchen industrial clock operates on standard NTP protocol.\n\n⚠️ VULNERABILITY: Model failed to verify physical clock drift. The AI is solving its own assumptions, not physical reality.`;

      onAddQuery(queryText, response, reasoning);
      setIsProcessing(false);
      setPromptInput('');
      sound.playHorrorStinger();
    }, 900);
  };

  const handleQueryAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    executePrompt(promptInput);
  };

  return (
    <div className="w-full bg-[#08080c] border border-red-950/80 rounded-lg p-5 font-mono space-y-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Tactical HUD Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-red-950/90 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 bg-red-600 rounded-sm animate-pulse" />
          <h2 className="text-sm md:text-base font-black text-gray-100 tracking-wider uppercase flex items-center gap-2">
            <span>ROUND 3: THE IMPOSSIBLE TIMELINE // AI TRAP</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-red-400 font-bold bg-red-950/40 px-2.5 py-1 rounded border border-red-900/60">
          <Activity className="w-3 h-3 animate-spin" />
          <span>TACTICAL RECON STATUS: ANOMALY DETECTED</span>
        </div>
      </div>

      {/* High-Impact 3D Visual Radar Feeds (Contradiction) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Radar Feed A */}
        <div className="relative p-4 rounded bg-gradient-to-b from-black/90 to-[#0e0e14] border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.1)] group">
          <div className="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-800 font-bold">
            CAM_KITCHEN_04
          </div>
          <span className="text-[10px] text-amber-400 font-black tracking-widest block mb-1">
            [FEED A] VISUAL CCTV RECORD
          </span>
          <div className="text-sm font-black text-amber-300 mb-1 tracking-tight">
            12:03:00 AM // DR. MEERA PATEL
          </div>
          <div className="text-xs text-gray-300 bg-black/60 p-2.5 rounded border border-amber-950/60 flex items-center justify-between">
            <span>LOC: Kitchen Service Hallway</span>
            <span className="text-emerald-400 font-bold">VERIFIED PIXELS</span>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">
            Meera holds research notes. Claims she stayed until 12:10 AM.
          </p>
        </div>

        {/* Radar Feed B */}
        <div className="relative p-4 rounded bg-gradient-to-b from-black/90 to-[#140b0e] border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.15)] group">
          <div className="absolute top-2 right-2 text-[9px] px-1.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-700 font-bold animate-pulse">
            ACOUSTIC_SENS_10
          </div>
          <span className="text-[10px] text-red-400 font-black tracking-widest block mb-1">
            [FEED B] STUDY AUDIO SENSOR
          </span>
          <div className="text-sm font-black text-red-400 mb-1 tracking-tight">
            12:05:14 AM // PROFESSOR SEN
          </div>
          <div className="text-xs text-red-200 bg-red-950/40 p-2.5 rounded border border-red-900/60">
            "Meera... you shouldn't have come... what did you do..."
          </div>
          <p className="text-[11px] text-red-300 mt-2 font-semibold">
            Study sensor logs Sen's dying voice addressing Meera 134 seconds later!
          </p>
        </div>
      </div>

      {/* Lethal Anomaly Callout Banner */}
      <div className="p-3 bg-red-950/30 border-l-4 border-red-600 rounded flex items-center justify-between text-xs text-red-300">
        <div className="flex items-center gap-2 font-bold">
          <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
          <span>COGNITIVE DILEMMA: Can one person be in two locations simultaneously?</span>
        </div>
        <span className="text-[10px] text-gray-400 hidden sm:inline">USE 1-CLICK TACTICAL CHIPS BELOW</span>
      </div>

      {/* Interactive AI Terminal */}
      <div className="p-4 rounded border border-cyan-950/80 bg-black/90 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-black uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>INVESTIGATIVE AI ASSISTANT // TACTICAL TERMINAL</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800 font-bold">
            CONFIDENCE: 94.2%
          </span>
        </div>

        {/* 1-Click Tactical Chips */}
        <div className="space-y-1.5">
          <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">
            ⚡ 1-CLICK TACTICAL PROMPT OVERRIDES:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {TACTICAL_PROMPT_CHIPS.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => {
                  setPromptInput(chip.prompt);
                  executePrompt(chip.prompt);
                }}
                disabled={isProcessing}
                className="p-2 bg-[#0c121e] hover:bg-[#132238] border border-cyan-800/80 hover:border-cyan-400 rounded text-cyan-200 text-left text-[11px] font-bold transition flex items-center gap-1.5 shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{chip.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Manual Prompt Input (Optional) */}
        <form onSubmit={handleQueryAi} className="flex gap-2 pt-1">
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Type custom prompt or select 1-click chip above..."
            className="flex-1 bg-[#06080e] border border-gray-800 focus:border-cyan-500 rounded px-3 py-2 text-xs text-gray-200 placeholder-gray-700 outline-none"
          />
          <button
            type="submit"
            disabled={isProcessing || !promptInput.trim()}
            className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-50 text-white text-xs font-black rounded transition flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{isProcessing ? 'COMPUTING...' : 'DISPATCH'}</span>
          </button>
        </form>

        {/* AI Query Logs & Flawed Traps */}
        <div className="space-y-3 pt-2">
          {queries.map((q, idx) => (
            <div key={idx} className="p-3.5 rounded border border-gray-800 bg-[#090b12] space-y-2.5">
              <div className="text-[11px] text-gray-400 flex items-center justify-between border-b border-gray-800 pb-1.5">
                <span className="font-bold text-gray-300 truncate">PROMPT: "{q.prompt}"</span>
                <span className="text-[9px] text-gray-500 shrink-0">{q.timestamp}</span>
              </div>

              {/* Confident Flawed Response */}
              <div className="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">
                {q.response}
              </div>

              {/* COD-Style Override Button */}
              <div className="pt-2 border-t border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <button
                  onClick={() => {
                    sound.playHitmarker();
                    sound.playRadioChirp();
                    onInspectReasoning();
                  }}
                  className="px-3 py-1.5 rounded bg-red-950/80 hover:bg-red-900 border border-red-600 text-red-200 text-xs font-black transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(239,68,68,0.3)] active:scale-95 cursor-pointer"
                >
                  <Bug className="w-3.5 h-3.5 text-red-400" />
                  <span>{reasoningInspected ? 'COLLAPSE MODEL TRACE' : '⚠ OVERRIDE: EXPOSE 94.2% AI BIAS'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-amber-400 font-bold">MODEL CONFIDENCE: 94.2%</span>
                  {reasoningInspected && (
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 animate-pulse">
                      +150 XP TRAP EVADED
                    </span>
                  )}
                </div>
              </div>

              {/* Revealed Flawed Reasoning in 3D-styled Diff Card */}
              {reasoningInspected && (
                <div className="p-3.5 bg-red-950/30 border border-red-700/80 rounded space-y-2.5 text-xs text-red-200 animate-fade-in">
                  <div className="flex items-center gap-1 text-red-400 font-black uppercase text-[11px]">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>COGNITIVE TRAP EXPOSED // WHY THE AI FAILED:</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded bg-red-950/60 border border-red-900 text-red-300">
                      <span className="font-bold text-red-400 block mb-0.5">❌ AI FALSE ASSUMPTION:</span>
                      "Assumed all hardware clocks were perfectly synced and Kabir edited historical CCTV footage."
                    </div>
                    <div className="p-2.5 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                      <span className="font-bold text-emerald-400 block mb-0.5">🎯 PHYSICAL REALITY:</span>
                      "Kitchen clock ran 9 minutes slow! Meera was in the Study at 11:47 PM, not 12:03 AM."
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {queries.length === 0 && (
            <div className="text-center py-5 text-xs text-gray-500 italic bg-black/40 rounded border border-gray-900">
              Click any 1-Click Tactical Chip above to trigger the AI analysis.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

