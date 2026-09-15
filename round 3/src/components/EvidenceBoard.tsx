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
    <div className="w-full glass-panel p-5 sm:p-6 text-gray-200 shadow-xl font-sans space-y-6">
      {/* Board Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-800/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-red-950/40 border border-red-900/60 flex items-center justify-center text-red-400">
            <Pin className="w-4 h-4 text-red-400" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-semibold text-gray-100 tracking-wider uppercase">
              Homicide Conspiracy Wall // Evidence Network
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Click any evidence node to inspect dependencies, contradictions, and causal links.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono">
          <span className="text-xs text-amber-300/90 bg-amber-950/30 px-3 py-1 rounded border border-amber-800/50">
            {allLocksSolved && printerLogUnlocked && finalEvaluated
              ? '⭐ ALL THREADS RESOLVED'
              : 'CASE MATRIX ACTIVE'}
          </span>
        </div>
      </div>

      {/* Central 3-Column Hierarchy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* COLUMN 1: THE CRIME & CLOCKS (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider pb-1 border-b border-gray-800/80 font-mono">
            <Clock className="w-3.5 h-3.5 text-red-400" />
            <span>Clock Manipulation</span>
          </div>

          {/* Node: Broken Clock (11:47 PM) */}
          <div 
            onClick={() => { setSelectedNodeId('ev-2'); sound.playTick(false); }}
            className={`p-3.5 rounded-lg border transition cursor-pointer space-y-1.5 ${
              selectedNodeId === 'ev-2'
                ? 'bg-red-950/30 border-red-700 text-white'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-red-400 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>#EV-02: East Clock (11:47)</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.2 bg-red-950/60 text-red-300 rounded font-mono border border-red-900/40">
                JAMMED
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400">
              Escapement jammed with graphite. Stopped hours prior to frame 11:47 PM as death time.
            </p>
            <div className="pt-1.5 border-t border-gray-800/60 flex items-center justify-between text-[10px] text-gray-500 font-mono">
              <span>CONNECTS: #EV-01, #EV-04, #EV-11</span>
              <span className="text-red-400">INSPECT →</span>
            </div>
          </div>

          {/* Node: Dictaphone Tape #4 */}
          <div 
            onClick={() => { setSelectedNodeId('ev-4'); sound.playTick(false); }}
            className={`p-3.5 rounded-lg border transition cursor-pointer space-y-1.5 ${
              selectedNodeId === 'ev-4'
                ? 'bg-amber-950/30 border-amber-700 text-white'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-amber-400 font-mono">
                <Volume2 className="w-3.5 h-3.5" />
                <span>#EV-04: Reel Tape #4</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.2 bg-amber-950/60 text-amber-300 rounded font-mono border border-amber-900/40">
                {audioRevealedSecret ? '0.5x DECODED' : 'SCRUB 0.5x'}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400">
              {audioRevealedSecret 
                ? '"Someone started before the house stopped." Attack preceded 12:13 blackout.'
                : 'Sub-bass spectral analysis required to decode hidden message.'}
            </p>
            <div className="pt-1.5 border-t border-gray-800/60 flex items-center justify-between text-[10px] text-gray-500 font-mono">
              <span>CONNECTS: #EV-06, #EV-10</span>
              <span className="text-amber-400">INSPECT →</span>
            </div>
          </div>

          {/* Node: 11:41 PM Pre-Crime Spool */}
          <div 
            onClick={() => { setSelectedNodeId('ev-12'); sound.playTick(false); }}
            className={`p-3.5 rounded-lg border transition cursor-pointer space-y-1.5 ${
              selectedNodeId === 'ev-12'
                ? 'bg-purple-950/30 border-purple-700 text-white'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-purple-400 font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>#EV-12: Spool (11:41)</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.2 bg-purple-950/60 text-purple-300 rounded font-mono border border-purple-900/40">
                {printerLogUnlocked ? 'SMOKING GUN' : 'LOCKED (R5)'}
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400">
              {printerLogUnlocked 
                ? 'Meera\'s indictment was printed 6 minutes before she entered the study! Proves premeditated framing.'
                : 'Challenge AI in Phase 5 to retrieve spool buffer.'}
            </p>
            <div className="pt-1.5 border-t border-gray-800/60 flex items-center justify-between text-[10px] text-gray-500 font-mono">
              <span>CONNECTS: #EV-05, #EV-09, #EV-13</span>
              <span className="text-purple-400">INSPECT →</span>
            </div>
          </div>
        </div>

        {/* COLUMN 2: THE CENTRAL VICTIM & SCENE (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider pb-1 border-b border-gray-800/80 font-mono">
            <User className="w-3.5 h-3.5 text-red-400" />
            <span>Central Victim Dossier</span>
          </div>

          {/* Victim Master File */}
          <div className="p-4 bg-black/50 text-gray-200 rounded-lg border border-gray-800/80 space-y-3">
            <div>
              <span className="text-[10px] font-semibold text-red-400 uppercase tracking-widest block font-mono">
                PRIMARY HOMICIDE VICTIM
              </span>
              <h3 className="text-base font-semibold text-gray-100 mt-0.5">
                Professor Vikram Sen (58)
              </h3>
              <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                FOUND IN STUDY 17-B • DECEASED AT 12:15 AM
              </p>
            </div>

            <div className="pt-2.5 border-t border-gray-800/80 text-[11px] space-y-1.5 text-gray-300 font-mono">
              <div className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                <span><strong className="text-gray-100">11:47 PM:</strong> Struck by Meera with paperweight (survived).</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span><strong className="text-gray-100">12:03 AM:</strong> Recorded final webcam video while conscious.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                <span><strong className="text-red-400">12:15 AM:</strong> Smothered during blackout via secret duct.</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                <span><strong className="text-gray-100">12:18 AM:</strong> Body discovered by staff.</span>
              </div>
            </div>
          </div>

          {/* Blueprint Node */}
          <div 
            onClick={() => { setSelectedNodeId('ev-9'); sound.playTick(false); }}
            className={`p-3.5 rounded-lg border transition cursor-pointer space-y-1.5 ${
              selectedNodeId === 'ev-9'
                ? 'bg-emerald-950/30 border-emerald-700 text-white'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-300'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-400 font-mono">
                <Key className="w-3.5 h-3.5" />
                <span>#EV-09: Blueprint (Passage)</span>
              </span>
              <span className="text-[10px] px-1.5 py-0.2 bg-emerald-950/60 text-emerald-300 rounded font-mono border border-emerald-900/40">
                HIDDEN ROUTE
              </span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400">
              1894 Blueprint reveals a secret duct behind the walnut bookcase accessed with caretaker skeleton key.
            </p>
            <div className="pt-1.5 border-t border-gray-800/60 flex items-center justify-between text-[10px] text-emerald-400 font-mono">
              <span>CONTRADICTS: DEV NEGI</span>
              <span>INSPECT →</span>
            </div>
          </div>

          {/* Causal Chain Summary */}
          <div className="p-2.5 bg-black/40 border border-gray-800/80 rounded-lg text-center text-[10px] text-gray-400 font-mono">
            <span className="text-gray-500 block mb-1">CHAIN PROGRESSION:</span>
            <div className="flex flex-wrap items-center justify-center gap-1">
              <span className={audioRevealedSecret ? 'text-emerald-400' : 'text-gray-600'}>Tape [R1]</span> ➔
              <span className={allLocksSolved ? 'text-emerald-400' : 'text-gray-600'}>Locks [R2]</span> ➔
              <span className={reasoningInspected ? 'text-emerald-400' : 'text-gray-600'}>Trap [R3]</span> ➔
              <span className={hiddenVideoUnlocked ? 'text-emerald-400' : 'text-gray-600'}>Video [R4]</span> ➔
              <span className={printerLogUnlocked ? 'text-emerald-400' : 'text-gray-600'}>Spool [R5]</span> ➔
              <span className={finalEvaluated ? 'text-emerald-400' : 'text-gray-600'}>Indictment [R6]</span>
            </div>
          </div>
        </div>

        {/* COLUMN 3: SUSPECTS & SECONDARY CRIMES (4 cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 uppercase tracking-wider pb-1 border-b border-gray-800/80 font-mono">
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span>Suspect Secondary Crimes</span>
          </div>

          {(Object.keys(SUSPECTS) as SuspectId[]).map((id) => {
            const s = SUSPECTS[id];
            const isDisarmed = suspectLocks[id];
            const isSelected = selectedNodeId === id;

            return (
              <div
                key={id}
                onClick={() => { setSelectedNodeId(id); sound.playTick(false); }}
                className={`p-2.5 rounded-lg border transition cursor-pointer space-y-1 ${
                  isSelected
                    ? 'bg-red-950/40 border-red-700 text-white'
                    : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-200">{s.name.split(' ')[0]} ({s.role.split(' ')[0]})</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                    isDisarmed 
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-900/40' 
                      : 'bg-red-950/60 text-red-300 border border-red-900/40'
                  }`}>
                    {isDisarmed ? 'DISARMED ✓' : 'LOCKED'}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 leading-snug">
                  {isDisarmed ? s.realCrime : 'Investigate lock in Phase 2 to expose lie.'}
                </p>
                <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono pt-1">
                  <span>Motive: {s.motiveLevel}</span>
                  <span className="text-red-400">INSPECT →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RELATIONSHIP INSPECTOR PANEL */}
      {selectedEvidence && (
        <div className="p-4 rounded-lg bg-black/50 border border-gray-800/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-gray-800/80">
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs sm:text-sm font-semibold text-gray-100 uppercase tracking-wider font-mono">
                Relationship Inspector: {selectedEvidence.title}
              </h3>
            </div>
            <span className="text-xs text-amber-300/90 font-mono">
              #{selectedEvidence.id.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            {/* Box 1: Significance */}
            <div className="p-3 bg-black/40 rounded-md border border-gray-800/80 space-y-1">
              <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider font-mono block">
                FORENSIC SIGNIFICANCE
              </span>
              <p className="text-gray-300 leading-relaxed text-[11px]">
                {selectedEvidence.significance || selectedEvidence.content}
              </p>
            </div>

            {/* Box 2: Connected Clues */}
            <div className="p-3 bg-black/40 rounded-md border border-gray-800/80 space-y-1">
              <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider font-mono block">
                CONNECTED NODES ({selectedEvidence.connectedClueIds?.length || 0})
              </span>
              <div className="flex flex-wrap gap-1 mt-1 font-mono">
                {selectedEvidence.connectedClueIds && selectedEvidence.connectedClueIds.length > 0 ? (
                  selectedEvidence.connectedClueIds.map((cid) => (
                    <button
                      key={cid}
                      onClick={() => { setSelectedNodeId(cid); sound.playTick(false); }}
                      className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-[10px] text-cyan-300 hover:text-white hover:border-cyan-700 transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>#{cid.toUpperCase()}</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </button>
                  ))
                ) : (
                  <span className="text-gray-500 italic text-[11px]">No direct links registered</span>
                )}
              </div>
            </div>

            {/* Box 3: Contradictions */}
            <div className="p-3 bg-black/40 rounded-md border border-gray-800/80 space-y-1">
              <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wider font-mono block">
                ALIBI CONTRADICTIONS
              </span>
              {selectedEvidence.contradictsSuspect ? (
                <div className="space-y-0.5 text-[11px]">
                  <p className="text-red-300 font-medium">
                    Shatters alibi of: {SUSPECTS[selectedEvidence.contradictsSuspect]?.name}
                  </p>
                  <p className="text-gray-400">
                    {SUSPECTS[selectedEvidence.contradictsSuspect]?.contradictionNotes}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 italic text-[11px]">
                  Provides foundational chronology without direct suspect contradiction.
                </p>
              )}
            </div>
          </div>

          {/* Quick action */}
          {onNavigateToPhase && (
            <div className="flex items-center justify-between pt-2 border-t border-gray-800/80 text-xs font-mono">
              <span className="text-gray-500">
                Unlocked in Phase {selectedEvidence.round}
              </span>
              <button
                onClick={() => onNavigateToPhase(selectedEvidence.round)}
                className="px-3 py-1 bg-red-950/60 hover:bg-red-900/80 border border-red-800/60 text-red-200 text-xs rounded transition flex items-center gap-1.5 cursor-pointer"
              >
                <span>Jump to Phase {selectedEvidence.round}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
