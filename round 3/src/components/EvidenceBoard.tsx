import React, { useState } from 'react';
import { SuspectId } from '../types/game';
import { EVIDENCE_ITEMS } from '../data/evidence';
import { SUSPECTS } from '../data/suspects';
import { sound } from '../utils/audioEngine';
import { 
  Pin, 
  Clock, 
  FileText, 
  Camera, 
  Volume2, 
  Key, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  User,
  Film,
  Terminal,
  Zap,
  Eye,
  Layers,
  Sparkles,
  Link2
} from 'lucide-react';

interface EvidenceBoardProps {
  currentRound: number;
  suspectLocks: Record<SuspectId, boolean>;
  audioRevealedSecret: boolean;
  reasoningInspected: boolean;
  hiddenVideoUnlocked: boolean;
  printerLogUnlocked: boolean;
  finalEvaluated: boolean;
  onNavigateToPhase?: (phase: number) => void;
}

export const EvidenceBoard: React.FC<EvidenceBoardProps> = ({
  currentRound,
  suspectLocks,
  audioRevealedSecret,
  reasoningInspected,
  hiddenVideoUnlocked,
  printerLogUnlocked,
  finalEvaluated,
  onNavigateToPhase
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>('ev-2');
  const allLocksSolved = Object.values(suspectLocks).every(Boolean);

  // Active selected evidence or suspect for the relationship inspector
  const selectedEvidence = EVIDENCE_ITEMS.find(e => e.id === selectedNodeId);
  const selectedSuspect = SUSPECTS[selectedNodeId as SuspectId];

  return (
    <div className="w-full space-y-6 font-mono select-none animate-fade-in">
      {/* Corkboard Main Canvas */}
      <div className="w-full bg-[#18130f] border-4 border-[#472f1b] rounded-xl p-5 sm:p-7 shadow-[inset_0_0_90px_rgba(0,0,0,0.95),0_12px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
        {/* Cork Grain Background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#966432 1.5px, transparent 0)',
            backgroundSize: '14px 14px'
          }}
        />

        {/* Board Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-[#523821] mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <Pin className="w-6 h-6 text-red-600 fill-red-600 animate-pulse" />
            <div>
              <h2 className="text-base sm:text-lg font-black text-[#f0dfc8] tracking-widest uppercase">
                BLACKWOOD HOMICIDE CONSPIRACY WALL — RED THREAD CAUSAL PROGRESSION
              </h2>
              <p className="text-xs text-[#bda384]">
                Click any evidence node to inspect its interconnected dependencies, contradictions, and causal links.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#deb887] bg-[#291b12] px-3 py-1 rounded border border-[#5a3e26] font-bold">
              {allLocksSolved && printerLogUnlocked && finalEvaluated
                ? '⭐ ALL CAUSAL THREADS RESOLVED'
                : 'INTERACTIVE CASE MATRIX ACTIVE'}
            </span>
          </div>
        </div>

        {/* Central 3-Column Hierarchy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          
          {/* COLUMN 1: THE CRIME & ARRESTED CLOCKS (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#e6c295] uppercase tracking-wider pb-1 border-b border-[#3b2716]">
              <Clock className="w-4 h-4 text-red-500" />
              <span>THE CRIME & CLOCK MANIPULATION</span>
            </div>

            {/* Node: Broken Clock (11:47 PM) */}
            <div 
              onClick={() => { setSelectedNodeId('ev-2'); sound.playTick(false); }}
              className={`p-3.5 rounded shadow-lg border-t-8 transition transform cursor-pointer ${
                selectedNodeId === 'ev-2'
                  ? 'bg-[#fff5e3] text-gray-950 border-red-600 scale-[1.02] shadow-[0_0_20px_rgba(239,68,68,0.5)] -rotate-1'
                  : 'bg-[#f5ebd7] text-gray-900 border-red-800 hover:scale-[1.01] -rotate-1'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="flex items-center gap-1.5 text-red-950">
                  <Clock className="w-3.5 h-3.5 text-red-600" />
                  <span>#EV-02: EAST CLOCK (11:47)</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-red-200 text-red-900 rounded font-bold">
                  JAMMED FACE
                </span>
              </div>
              <p className="text-[11px] leading-snug text-gray-800">
                Arrested with graphite sliver. The clock was intentionally stopped hours prior to frame 11:47 PM as death time!
              </p>
              <div className="mt-2 pt-1 border-t border-gray-300 flex items-center justify-between text-[10px] text-red-800 font-bold">
                <span>CONNECTS: #EV-01, #EV-04, #EV-11</span>
                <span>INSPECT →</span>
              </div>
            </div>

            {/* Node: Dictaphone Tape #4 */}
            <div 
              onClick={() => { setSelectedNodeId('ev-4'); sound.playTick(false); }}
              className={`p-3.5 rounded shadow-lg border-t-8 transition transform cursor-pointer ${
                selectedNodeId === 'ev-4'
                  ? 'bg-[#fff5e3] text-gray-950 border-amber-600 scale-[1.02] shadow-[0_0_20px_rgba(245,158,11,0.5)] rotate-1'
                  : audioRevealedSecret 
                  ? 'bg-[#f5ebd7] text-gray-900 border-amber-700 hover:scale-[1.01] rotate-1'
                  : 'bg-[#2e261f] text-gray-500 border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>#EV-04: REEL TAPE #4</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-amber-200 text-amber-950 rounded font-bold">
                  {audioRevealedSecret ? '0.5x DECODED' : 'SCRUB 0.5x'}
                </span>
              </div>
              <p className="text-[11px] leading-snug">
                {audioRevealedSecret 
                  ? '"Someone started BEFORE the house stopped." Establishes attack preceded 12:13 blackout.'
                  : 'Sub-bass spectral analysis required to decode hidden message.'}
              </p>
              <div className="mt-2 pt-1 border-t border-gray-400 flex items-center justify-between text-[10px] text-amber-900 font-bold">
                <span>CONNECTS: #EV-06, #EV-10</span>
                <span>INSPECT →</span>
              </div>
            </div>

            {/* Node: 11:41 PM Pre-Crime Spool */}
            <div 
              onClick={() => { setSelectedNodeId('ev-12'); sound.playTick(false); }}
              className={`p-3.5 rounded shadow-lg border-t-8 transition transform cursor-pointer ${
                selectedNodeId === 'ev-12'
                  ? 'bg-[#fff5e3] text-gray-950 border-purple-600 scale-[1.02] shadow-[0_0_20px_rgba(168,85,247,0.5)] -rotate-1'
                  : printerLogUnlocked 
                  ? 'bg-[#f5ebd7] text-gray-900 border-purple-700 hover:scale-[1.01] -rotate-1'
                  : 'bg-[#2e261f] text-gray-500 border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span>#EV-12: PRE-CRIME BUFFER (11:41)</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-purple-200 text-purple-950 rounded font-bold">
                  {printerLogUnlocked ? 'SMOKING GUN' : 'UNSEAL IN R5'}
                </span>
              </div>
              <p className="text-[11px] leading-snug">
                {printerLogUnlocked 
                  ? 'Meera\'s indictment was printed 6 minutes BEFORE she entered the study! Proves planned framing.'
                  : 'Challenge AI in Phase 5 to retrieve spool buffer.'}
              </p>
              <div className="mt-2 pt-1 border-t border-gray-400 flex items-center justify-between text-[10px] text-purple-900 font-bold">
                <span>CONNECTS: #EV-05, #EV-09, #EV-13</span>
                <span>INSPECT →</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: THE CENTRAL VICTIM & CRIME SCENE (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#e6c295] uppercase tracking-wider pb-1 border-b border-[#3b2716]">
              <User className="w-4 h-4 text-red-500" />
              <span>CENTRAL VICTIM & LOCKED STUDY</span>
            </div>

            {/* Victim Master File */}
            <div className="p-4 bg-[#fbf5e8] text-gray-950 rounded-lg shadow-2xl border-4 border-red-900 relative">
              <div className="w-3.5 h-3.5 rounded-full bg-red-600 shadow-md mx-auto -mt-6 mb-2 border-2 border-white" />
              <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest text-center block">
                PRIMARY HOMICIDE VICTIM
              </span>
              <h3 className="text-base font-black tracking-wide text-gray-950 text-center font-serif">
                PROFESSOR VIKRAM SEN (58)
              </h3>
              <p className="text-[11px] text-red-800 font-bold text-center mt-0.5">
                FOUND IN STUDY 17-B • DEAD AT 12:15 AM
              </p>

              <div className="mt-3 pt-2.5 border-t border-gray-300 text-[11px] space-y-1.5 text-gray-800">
                <div className="flex items-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-600 shrink-0 mt-1" />
                  <span><strong className="text-red-950">11:47 PM:</strong> Struck by Meera with paperweight (survived).</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1" />
                  <span><strong className="text-amber-950">12:03 AM:</strong> Recorded final webcam video while conscious.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-700 shrink-0 mt-1" />
                  <span><strong className="text-red-950">12:15 AM:</strong> Smothered during blackout via secret servant duct.</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1" />
                  <span><strong className="text-emerald-950">12:18 AM:</strong> Body discovered by staff.</span>
                </div>
              </div>
            </div>

            {/* Architectural Blueprint Node (Secret Passage) */}
            <div 
              onClick={() => { setSelectedNodeId('ev-9'); sound.playTick(false); }}
              className={`p-3.5 rounded shadow-lg border-t-8 transition transform cursor-pointer ${
                selectedNodeId === 'ev-9'
                  ? 'bg-[#fff5e3] text-gray-950 border-emerald-500 scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-[#f5ebd7] text-gray-900 border-emerald-700 hover:scale-[1.01]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="flex items-center gap-1.5 text-emerald-950">
                  <Key className="w-3.5 h-3.5 text-emerald-600" />
                  <span>#EV-09: SECRET CORRIDOR BLUEPRINT</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.2 bg-emerald-200 text-emerald-950 rounded font-bold">
                  HIDDEN ROUTE
                </span>
              </div>
              <p className="text-[11px] leading-snug text-gray-800">
                1894 Blueprint reveals a secret duct behind the walnut bookcase accessed only with caretaker skeleton key. Bypasses study locked door!
              </p>
              <div className="mt-2 pt-1 border-t border-gray-300 flex items-center justify-between text-[10px] text-emerald-900 font-bold">
                <span>CONTRADICTS: DEV NEGI</span>
                <span>INSPECT →</span>
              </div>
            </div>

            {/* Causal Progress Chain Conduit */}
            <div className="p-3 bg-[#241910] border border-[#523821] rounded-lg text-center text-xs space-y-1.5 text-[#e0cfb8]">
              <span className="text-red-400 font-bold uppercase tracking-widest text-[10px] block">
                PROGRESSION MILESTONES CONNECTED
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px]">
                <span className={audioRevealedSecret ? 'text-emerald-400 font-bold' : 'text-gray-500'}>Tape [R1]</span> ➔
                <span className={allLocksSolved ? 'text-emerald-400 font-bold' : 'text-gray-500'}>Locks [R2]</span> ➔
                <span className={reasoningInspected ? 'text-emerald-400 font-bold' : 'text-gray-500'}>Trap [R3]</span> ➔
                <span className={hiddenVideoUnlocked ? 'text-emerald-400 font-bold' : 'text-gray-500'}>Video [R4]</span> ➔
                <span className={printerLogUnlocked ? 'text-emerald-400 font-bold' : 'text-gray-500'}>Spool [R5]</span> ➔
                <span className={finalEvaluated ? 'text-emerald-400 font-bold' : 'text-gray-500'}>Climax [R6]</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: THE FIVE SUSPECTS & SECONDARY CRIMES (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#e6c295] uppercase tracking-wider pb-1 border-b border-[#3b2716]">
              <User className="w-4 h-4 text-amber-500" />
              <span>SUSPECTS & SECONDARY CRIMES</span>
            </div>

            {(Object.keys(SUSPECTS) as SuspectId[]).map((id) => {
              const s = SUSPECTS[id];
              const isDisarmed = suspectLocks[id];
              const isSelected = selectedNodeId === id;

              return (
                <div
                  key={id}
                  onClick={() => { setSelectedNodeId(id); sound.playTick(false); }}
                  className={`p-3 rounded shadow-md border-l-4 transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#fff5e3] text-gray-950 border-red-500 scale-[1.02] shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                      : 'bg-[#f5ebd7] text-gray-900 border-[#6b4728] hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className="text-gray-950 font-bold">{s.name} ({s.role.split(' ')[0]})</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      isDisarmed 
                        ? 'bg-emerald-200 text-emerald-900' 
                        : 'bg-red-200 text-red-900'
                    }`}>
                      {isDisarmed ? 'DISARMED ✓' : 'ALIBI UNBROKEN'}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-700 leading-snug">
                    <strong className="text-gray-900">Crime:</strong> {isDisarmed ? s.realCrime : 'Investigate lock in Phase 2 to break alibi.'}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between text-[10px] text-gray-600">
                    <span>Motive: {s.motiveLevel} • Alibi: {s.alibiStatus}</span>
                    <span className="text-red-800 font-bold">INSPECT →</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RELATIONSHIP INSPECTOR PANEL (Appears at bottom of corkboard when node is clicked) */}
        {selectedEvidence && (
          <div className="mt-6 pt-5 border-t-2 border-[#523821] relative z-10 bg-black/60 rounded-lg p-5 border border-amber-900/60 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-800 mb-4">
              <div className="flex items-center gap-2">
                <Link2 className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm sm:text-base font-bold text-gray-100 uppercase tracking-wider">
                  RELATIONSHIP INSPECTOR // CAUSAL AUDIT: {selectedEvidence.title}
                </h3>
              </div>
              <span className="text-xs text-amber-300 font-bold">
                IDENTIFIER: #{selectedEvidence.id.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">
              {/* Box 1: Core Significance */}
              <div className="p-3.5 bg-black/70 rounded border border-gray-800">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                  FORENSIC SIGNIFICANCE
                </span>
                <p className="text-gray-300 leading-relaxed">
                  {selectedEvidence.significance || selectedEvidence.content}
                </p>
              </div>

              {/* Box 2: Connected Evidence Nodes */}
              <div className="p-3.5 bg-black/70 rounded border border-gray-800">
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                  CONNECTED EVIDENCE THREADS & NODES ({selectedEvidence.connectedClueIds?.length || 0})
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedEvidence.connectedClueIds && selectedEvidence.connectedClueIds.length > 0 ? (
                    selectedEvidence.connectedClueIds.map((cid) => (
                      <button
                        key={cid}
                        onClick={() => { setSelectedNodeId(cid); sound.playTick(false); }}
                        className="px-2 py-1 rounded bg-black/90 border border-cyan-800 text-[10px] text-cyan-300 hover:text-white hover:border-cyan-400 font-bold transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>#{cid.toUpperCase()}</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    ))
                  ) : (
                    <span className="text-gray-500 italic">No direct links registered</span>
                  )}
                </div>
              </div>

              {/* Box 3: Contradictions & Revelations */}
              <div className="p-3.5 bg-black/70 rounded border border-gray-800">
                <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider block mb-1">
                  SUSPECT ALIBI CONTRADICTIONS
                </span>
                {selectedEvidence.contradictsSuspect ? (
                  <div className="space-y-1 mt-1">
                    <p className="text-red-300 font-bold">
                      Directly shatters alibi of: {SUSPECTS[selectedEvidence.contradictsSuspect]?.name}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      {SUSPECTS[selectedEvidence.contradictsSuspect]?.contradictionNotes}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 italic mt-1">
                    Provides foundational chronology without direct suspect contradiction.
                  </p>
                )}
              </div>
            </div>

            {/* Quick action to navigate to phase */}
            {onNavigateToPhase && (
              <div className="flex items-center justify-between pt-3 border-t border-gray-900 text-xs">
                <span className="text-gray-400">
                  Unlocked in Phase {selectedEvidence.round}. Ready to verify?
                </span>
                <button
                  onClick={() => onNavigateToPhase(selectedEvidence.round)}
                  className="px-3.5 py-1.5 bg-red-950 hover:bg-red-900 border border-red-800 text-red-200 font-bold rounded flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>JUMP TO PHASE {selectedEvidence.round} PUZZLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
