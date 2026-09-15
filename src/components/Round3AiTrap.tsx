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
      label: 'Reconcile 12:03 CCTV vs 12:05 Audio',
      prompt: "Reconcile Dr. Meera's 12:03 AM kitchen CCTV with Evidence 10 Study audio at 12:05 AM. Did she commit the crime?"
    },
    {
      id: 'drift',
      label: 'Audit Kitchen Clock NTP Sync',
      prompt: "Audit whether the kitchen analog/industrial clock matches server NTP telemetry or has physical time drift."
    },
    {
      id: 'kabir',
      label: 'Trace Kabir Security Intrusion',
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
    <div className="w-full glass-panel p-5 sm:p-6 space-y-5 text-gray-200 font-sans shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-800/80 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
          <h2 className="text-sm md:text-base font-semibold text-gray-100 tracking-wider uppercase">
            Phase 3: The Impossible Timeline // AI Trap
          </h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-red-400 font-mono bg-red-950/30 px-2.5 py-1 rounded border border-red-900/40">
          <Activity className="w-3 h-3" />
          <span>ANOMALY DETECTED</span>
        </div>
      </div>

      {/* High-Impact Visual Feeds (Contradiction) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Radar Feed A */}
        <div className="relative p-4 rounded-lg bg-black/40 border border-amber-500/30">
          <div className="absolute top-3 right-3 text-[9px] px-1.5 py-0.5 rounded bg-amber-950/40 text-amber-400 border border-amber-800/60 font-mono">
            CAM_KITCHEN_04
          </div>
          <span className="text-[10px] text-amber-400 font-semibold tracking-wider font-mono block mb-1">
            [FEED A] VISUAL CCTV RECORD
          </span>
          <div className="text-sm font-semibold text-amber-300 mb-1 tracking-tight font-mono">
            12:03:00 AM // DR. MEERA PATEL
          </div>
          <div className="text-xs text-gray-300 bg-black/50 p-2 rounded border border-gray-800 flex items-center justify-between font-mono">
            <span>LOC: Kitchen Corridor</span>
            <span className="text-emerald-400 font-medium">VERIFIED PIXELS</span>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">
            Meera holds research notes. Claims she stayed until 12:10 AM.
          </p>
        </div>

        {/* Radar Feed B */}
        <div className="relative p-4 rounded-lg bg-black/40 border border-red-500/30">
          <div className="absolute top-3 right-3 text-[9px] px-1.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-800/60 font-mono">
            ACOUSTIC_SENS_10
          </div>
          <span className="text-[10px] text-red-400 font-semibold tracking-wider font-mono block mb-1">
            [FEED B] STUDY AUDIO SENSOR
          </span>
          <div className="text-sm font-semibold text-red-400 mb-1 tracking-tight font-mono">
            12:05:14 AM // PROFESSOR SEN
          </div>
          <div className="text-xs text-red-200 bg-red-950/30 p-2 rounded border border-red-900/40 font-serif italic">
            "Meera... you shouldn't have come... what did you do..."
          </div>
          <p className="text-[11px] text-red-300/90 mt-2">
            Study sensor logs Sen's dying voice addressing Meera 134 seconds later.
          </p>
        </div>
      </div>

      {/* Anomaly Callout Banner */}
      <div className="p-3 bg-red-950/15 border-l-2 border-red-700 rounded-r flex items-center justify-between text-xs text-red-300">
        <div className="flex items-center gap-2 font-medium">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
          <span>Paradox: Can one individual exist in two separate locations simultaneously?</span>
        </div>
        <span className="text-[10px] text-gray-400 font-mono hidden sm:inline">Use prompt chips below</span>
      </div>

      {/* Interactive AI Terminal */}
      <div className="p-4 rounded-lg border border-gray-800/80 bg-black/40 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider font-mono">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Investigative AI Assistant // Terminal</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-800/60 font-mono">
            CONFIDENCE: 94.2%
          </span>
        </div>

        {/* 1-Click Tactical Chips */}
        <div className="space-y-1.5">
          <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold font-mono">
            TACTICAL PROMPT OVERRIDES:
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
                className="p-2.5 bg-black/50 hover:bg-gray-900 border border-gray-800 hover:border-cyan-700/80 rounded-md text-cyan-200 text-left text-[11px] font-medium transition flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{chip.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Manual Prompt Input */}
        <form onSubmit={handleQueryAi} className="flex gap-2 pt-1">
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Type custom inquiry or click a chip above..."
            className="flex-1 bg-[#0a0a0f] border border-gray-800 focus:border-cyan-700 rounded-md px-3 py-1.5 text-xs text-gray-200 placeholder-gray-700 outline-none font-mono"
          />
          <button
            type="submit"
            disabled={isProcessing || !promptInput.trim()}
            className="px-3.5 py-1.5 bg-cyan-900 hover:bg-cyan-800 border border-cyan-700/60 disabled:opacity-50 text-white text-xs font-medium rounded-md transition flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{isProcessing ? 'Computing...' : 'Dispatch'}</span>
          </button>
        </form>

        {/* AI Query Logs & Flawed Traps */}
        <div className="space-y-3 pt-2">
          {queries.map((q, idx) => (
            <div key={idx} className="p-3.5 rounded-lg border border-gray-800/80 bg-black/50 space-y-2.5">
              <div className="text-[11px] text-gray-400 flex items-center justify-between border-b border-gray-800/80 pb-1.5 font-mono">
                <span className="text-gray-300 truncate font-sans">Prompt: "{q.prompt}"</span>
                <span className="text-[9px] text-gray-500 shrink-0">{q.timestamp}</span>
              </div>

              {/* Response */}
              <div className="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed font-mono">
                {q.response}
              </div>

              {/* Override Button */}
              <div className="pt-2 border-t border-gray-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <button
                  onClick={() => {
                    sound.playHitmarker();
                    sound.playRadioChirp();
                    onInspectReasoning();
                  }}
                  className="px-3 py-1.5 rounded-md bg-red-950/60 hover:bg-red-900/80 border border-red-700/70 text-red-200 text-xs font-medium transition flex items-center gap-1.5 cursor-pointer font-mono"
                >
                  <Bug className="w-3.5 h-3.5 text-red-400" />
                  <span>{reasoningInspected ? 'Collapse Model Trace' : 'Expose AI Cognitive Flaw'}</span>
                </button>

                <div className="flex items-center gap-2 font-mono">
                  <span className="text-[10px] text-amber-400/90">CONFIDENCE: 94.2%</span>
                  {reasoningInspected && (
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                      Trap Evaded
                    </span>
                  )}
                </div>
              </div>

              {/* Revealed Flawed Reasoning */}
              {reasoningInspected && (
                <div className="p-3.5 bg-red-950/20 border border-red-800/50 rounded-lg space-y-2 text-xs text-red-200 animate-fade-in font-sans">
                  <div className="flex items-center gap-1.5 text-red-400 font-semibold uppercase text-[11px] font-mono">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Cognitive Flaw Exposed:</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded-md bg-red-950/40 border border-red-900/60 text-red-300">
                      <span className="font-semibold text-red-400 block mb-0.5 font-mono">AI False Assumption:</span>
                      "Assumed all hardware clocks were perfectly synced and Kabir edited historical CCTV footage."
                    </div>
                    <div className="p-2.5 rounded-md bg-emerald-950/40 border border-emerald-900/60 text-emerald-300">
                      <span className="font-semibold text-emerald-400 block mb-0.5 font-mono">Physical Reality:</span>
                      "Kitchen clock ran 9 minutes slow! Meera was in the Study at 11:47 PM, not 12:03 AM."
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {queries.length === 0 && (
            <div className="text-center py-5 text-xs text-gray-500 italic bg-black/30 rounded-lg border border-gray-900">
              Click a prompt chip above to run AI timeline reconciliation.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

