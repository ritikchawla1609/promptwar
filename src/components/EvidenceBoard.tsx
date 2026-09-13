import React from 'react';
import { SuspectId } from '../types/game';
import { 
  Pin, 
  Clock, 
  FileText, 
  Camera, 
  Volume2, 
  Key, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';

interface EvidenceBoardProps {
  currentRound: number;
  suspectLocks: Record<SuspectId, boolean>;
  audioRevealedSecret: boolean;
  reasoningInspected: boolean;
  hiddenVideoUnlocked: boolean;
  printerLogUnlocked: boolean;
  finalEvaluated: boolean;
}

export const EvidenceBoard: React.FC<EvidenceBoardProps> = ({
  currentRound,
  suspectLocks,
  audioRevealedSecret,
  reasoningInspected,
  hiddenVideoUnlocked,
  printerLogUnlocked,
  finalEvaluated
}) => {
  const allLocksSolved = Object.values(suspectLocks).every(Boolean);

  return (
    <div className="w-full bg-[#16120e] border-4 border-[#3d2817] rounded-lg p-6 shadow-[inset_0_0_80px_rgba(0,0,0,0.9),0_10px_40px_rgba(0,0,0,0.8)] font-mono select-none relative overflow-hidden">
      {/* Cork Texture Grain */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#8b5a2b 1px, transparent 0)',
          backgroundSize: '12px 12px'
        }}
      />

      {/* Board Header */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-[#4a321d] mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <Pin className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
          <h2 className="text-base md:text-lg font-bold text-[#e6d5be] tracking-wider uppercase">
            BLACKWOOD HOMICIDE CONSPIRACY WALL — RED THREAD AUDIT
          </h2>
        </div>
        <span className="text-xs text-[#a88d6e] bg-[#22170f] px-3 py-1 rounded border border-[#4a321d]">
          {currentRound >= 6 ? 'ALL FORENSIC STRINGS LINKED' : 'TRACING CAUSALITY NETWORK'}
        </span>
      </div>

      {/* Visual Corkboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        
        {/* LEFT COLUMN: THE CRIME & TIMELINES */}
        <div className="space-y-4">
          {/* Card 1: Grandfather Clock */}
          <div className="p-3.5 bg-[#f5ebd7] text-[#1c130b] rounded shadow-md transform -rotate-1 border-t-8 border-red-800">
            <div className="flex items-center justify-between text-xs font-bold text-red-950 mb-1">
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> EAST CLOCK (11:47)</span>
              <span className="text-[10px] px-1 bg-red-200 rounded">FIXED FACE</span>
            </div>
            <p className="text-[11px] leading-tight text-gray-800">
              Arrested with graphite sliver. Pendulum was stopped intentionally before midnight.
            </p>
          </div>

          {/* Card 2: Audio Tape #4 */}
          <div className={`p-3.5 rounded shadow-md transform rotate-1 border-t-8 transition ${
            audioRevealedSecret 
              ? 'bg-[#f5ebd7] text-[#1c130b] border-amber-800' 
              : 'bg-[#3b3229] text-gray-500 border-gray-700'
          }`}>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="flex items-center gap-1"><Volume2 className="w-3.5 h-3.5" /> REEL TAPE #4</span>
              <span className="text-[10px]">{audioRevealedSecret ? 'SUB-BASS LINK' : 'LOCKED'}</span>
            </div>
            <p className="text-[11px] leading-tight">
              {audioRevealedSecret 
                ? 'REVEALED: "Someone started BEFORE the house stopped" (Attack occurred prior to 12:13 blackout).'
                : 'Scrub tape at 0.5x speed in Round 1 to decode hidden frequency.'}
            </p>
          </div>

          {/* Card 3: 11:41 PM Pre-Crime Printer */}
          <div className={`p-3.5 rounded shadow-md transform -rotate-2 border-t-8 transition ${
            printerLogUnlocked 
              ? 'bg-[#f5ebd7] text-[#1c130b] border-red-700 animate-pulse' 
              : 'bg-[#3b3229] text-gray-500 border-gray-700'
          }`}>
            <div className="flex items-center justify-between text-xs font-bold mb-1">
              <span className="flex items-center gap-1"><FileText className="w-3.5 h-3.5" /> 11:41 PM SPOOL</span>
              <span className="text-[10px]">{printerLogUnlocked ? 'CRITICAL LINK' : 'UNSEAL IN R5'}</span>
            </div>
            <p className="text-[11px] leading-tight">
              {printerLogUnlocked 
                ? 'SMOKING GUN: Meera was framed 6 minutes BEFORE she confronted Sen!' 
                : 'Challenge AI in Round 5 to expose evidence fabrication.'}
            </p>
          </div>
        </div>

        {/* CENTER COLUMN: THE VICTIM & LOCKED STUDY 17-B */}
        <div className="flex flex-col justify-between space-y-4">
          <div className="p-4 bg-[#f8f1e0] text-[#1c130b] rounded-lg shadow-xl border-4 border-red-900 transform rotate-0 text-center relative">
            <div className="w-3 h-3 rounded-full bg-red-700 shadow mx-auto -mt-6 mb-2 border border-white" />
            <span className="text-[10px] font-bold text-red-700 uppercase tracking-widest block">
              CENTRAL VICTIM
            </span>
            <h3 className="text-base font-black tracking-wide text-gray-950 font-serif">
              PROFESSOR VIKRAM SEN
            </h3>
            <p className="text-[11px] text-red-900 font-bold mt-0.5">
              STATUS: DECEASED IN STUDY 17-B
            </p>

            <div className="mt-3 pt-2 border-t border-gray-300 text-[10px] text-left space-y-1 text-gray-800">
              <p>• <span className="font-bold">11:47 PM:</span> Struck by brass paperweight (survived wounded)</p>
              <p>• <span className="font-bold">12:03 AM:</span> Alive & recorded final webcam video</p>
              <p>• <span className="font-bold text-red-700">12:15 AM:</span> Smothered during blackout</p>
              <p>• <span className="font-bold">12:18 AM:</span> Body discovered by team</p>
            </div>
          </div>

          {/* Red Thread Connecting Status */}
          <div className="p-3 bg-[#241910] border border-[#523821] rounded text-center text-xs space-y-1 text-[#e0cfb8]">
            <span className="text-red-400 font-bold uppercase tracking-widest text-[10px] block">
              CAUSAL PROGRESSION
            </span>
            <div className="flex items-center justify-center gap-1 text-[11px]">
              <span className={audioRevealedSecret ? 'text-emerald-400' : 'text-gray-500'}>R1 Tape</span> ➔
              <span className={allLocksSolved ? 'text-emerald-400' : 'text-gray-500'}>R2 Locks</span> ➔
              <span className={reasoningInspected ? 'text-emerald-400' : 'text-gray-500'}>R3 AI Trap</span> ➔
              <span className={hiddenVideoUnlocked ? 'text-emerald-400' : 'text-gray-500'}>R4 Video</span> ➔
              <span className={printerLogUnlocked ? 'text-emerald-400' : 'text-gray-500'}>R5 Pre-Crime</span> ➔
              <span className={finalEvaluated ? 'text-emerald-400' : 'text-gray-500'}>R6 Climax</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE FIVE SUSPECTS */}
        <div className="space-y-3">
          {[
            { id: 'meera', name: 'Dr. Meera Patel', crime: '11:47 PM Assault with paperweight (Sen survived)' },
            { id: 'dev', name: 'Devraj "Dev" Negi', crime: '12:15 AM Murder via secret servant passage' },
            { id: 'kabir', name: 'Kabir Varma', crime: '12:13 AM Transformer overload & blackout' },
            { id: 'riya', name: 'Riya Sharma', crime: 'Planted directional wiretaps for extortion' },
            { id: 'aarav', name: 'Aarav Mehta', crime: 'Stole Blackwood 20-yr experiment logs' }
          ].map((s) => {
            const isSolved = suspectLocks[s.id as SuspectId];
            return (
              <div
                key={s.id}
                className={`p-2.5 rounded shadow border-l-4 transition ${
                  isSolved 
                    ? s.id === 'dev' 
                      ? 'bg-[#f5ebd7] text-[#1c130b] border-red-600' 
                      : 'bg-[#f5ebd7] text-[#1c130b] border-emerald-700'
                    : 'bg-[#2b221a] text-gray-500 border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>{s.name}</span>
                  <span className="text-[10px]">{isSolved ? 'IDENTIFIED' : 'UNVERIFIED'}</span>
                </div>
                <p className="text-[10px] text-gray-700 mt-0.5">
                  {isSolved ? s.crime : 'Disarm suspect lock in Round 2 to expose non-murder motive.'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
