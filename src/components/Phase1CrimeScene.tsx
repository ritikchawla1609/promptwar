import React, { useState } from 'react';
import { House3D } from './House3D';
import { CrimeSceneObjectives } from '../types/game';
import { sound } from '../utils/audioEngine';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Volume2, 
  Key, 
  Sparkles, 
  ChevronRight, 
  Eye, 
  Camera, 
  Search, 
  Zap 
} from 'lucide-react';

interface Phase1CrimeSceneProps {
  objectives: CrimeSceneObjectives;
  onUpdateObjective: (key: keyof CrimeSceneObjectives, val: boolean) => void;
  onAutoDiscoverAll: () => void;
  onProceedToPhase2: () => void;
  onTriggerTrauma: () => void;
}

export const Phase1CrimeScene: React.FC<Phase1CrimeSceneProps> = ({
  objectives,
  onUpdateObjective,
  onAutoDiscoverAll,
  onProceedToPhase2,
  onTriggerTrauma
}) => {
  const completedCount = Object.values(objectives).filter(Boolean).length;
  const isReadyToProceed = completedCount >= 3;

  return (
    <div className="w-full space-y-4 font-sans text-gray-200">
      {/* 3D Viewport Header */}
      <div className="glass-panel p-3 text-xs text-gray-300 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-gray-100 uppercase tracking-wider">
            Phase 1: Crime Scene Recon
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800 font-mono">
            East Wing 17-B
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-gray-400 font-mono">
          <span><kbd className="px-1 py-0.5 bg-gray-900 border border-gray-700 rounded text-gray-200">WASD</kbd> Move</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.5 bg-gray-900 border border-gray-700 rounded text-gray-200">Mouse</kbd> Look</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.5 bg-gray-900 border border-gray-700 rounded text-gray-200">E</kbd> Inspect</span>
          <span>•</span>
          <span className="text-purple-300"><kbd className="px-1 py-0.5 bg-purple-950/80 border border-purple-800 rounded text-purple-200">L</kbd> UV Luminol</span>
        </div>
      </div>

      {/* 3D Canvas Walkthrough */}
      <House3D
        onInspectClue={(clueId) => {
          if (clueId === 'clock') onUpdateObjective('clockInspected', true);
          if (clueId === 'tape') onUpdateObjective('tapeFound', true);
          if (clueId === 'door') onUpdateObjective('doorInspected', true);
          sound.playHorrorStinger();
        }}
        onOpenTerminal={() => {}}
        onTriggerTrauma={onTriggerTrauma}
      />

      {/* Crime Scene Objectives Conduit */}
      <div className="glass-panel p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800/80">
          <div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-red-400" />
              <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                Crime Scene Objectives
              </h3>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Uncover physical anomalies in the East Wing before interrogating suspects.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <span className="text-xs text-amber-400/90 font-medium">
              Progress: {completedCount} / 5
            </span>
            <button
              onClick={onAutoDiscoverAll}
              className="px-2.5 py-1 text-[10px] rounded bg-amber-950/30 border border-amber-800/60 hover:bg-amber-900/50 text-amber-300 font-medium transition flex items-center gap-1 cursor-pointer"
              title="Auto-discover all crime scene clues"
            >
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Discover All</span>
            </button>
          </div>
        </div>

        {/* 5 Detective Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Objective 1 */}
          <div
            onClick={() => {
              onUpdateObjective('clockInspected', !objectives.clockInspected);
              sound.playTick(true);
            }}
            className={`p-3 rounded-lg border transition cursor-pointer flex flex-col justify-between ${
              objectives.clockInspected
                ? 'bg-red-950/20 border-red-800/60 text-red-200'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                <span>1. Halted Grandfather Clock</span>
              </div>
              {objectives.clockInspected ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed font-mono">
              Escapement jammed with graphite at 11:47 PM. Clock stopped manually.
            </p>
          </div>

          {/* Objective 2 */}
          <div
            onClick={() => {
              onUpdateObjective('tapeFound', !objectives.tapeFound);
              sound.playTick(true);
            }}
            className={`p-3 rounded-lg border transition cursor-pointer flex flex-col justify-between ${
              objectives.tapeFound
                ? 'bg-amber-950/20 border-amber-800/60 text-amber-200'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span>2. Dictaphone Reel #4</span>
              </div>
              {objectives.tapeFound ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed font-mono">
              0.5x sub-bass layer contains hidden pre-blackout message.
            </p>
          </div>

          {/* Objective 3 */}
          <div
            onClick={() => {
              onUpdateObjective('bloodExamined', !objectives.bloodExamined);
              sound.playTick(true);
            }}
            className={`p-3 rounded-lg border transition cursor-pointer flex flex-col justify-between ${
              objectives.bloodExamined
                ? 'bg-red-950/20 border-red-800/60 text-red-200'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Camera className="w-3.5 h-3.5 text-red-400" />
                <span>3. Rug Arterial Smears</span>
              </div>
              {objectives.bloodExamined ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed font-mono">
              Blood smear direction indicates body was dragged after initial strike.
            </p>
          </div>

          {/* Objective 4 */}
          <div
            onClick={() => {
              onUpdateObjective('doorInspected', !objectives.doorInspected);
              sound.playTick(true);
            }}
            className={`p-3 rounded-lg border transition cursor-pointer flex flex-col justify-between ${
              objectives.doorInspected
                ? 'bg-purple-950/20 border-purple-800/60 text-purple-200'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Key className="w-3.5 h-3.5 text-purple-400" />
                <span>4. Locked Study 17-B Door</span>
              </div>
              {objectives.doorInspected ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed font-mono">
              Deadbolt engaged from inside. Secret servant duct bypasses lock.
            </p>
          </div>

          {/* Objective 5 */}
          <div
            onClick={() => {
              onUpdateObjective('luminolRevealed', !objectives.luminolRevealed);
              sound.playTick(true);
            }}
            className={`p-3 rounded-lg border transition cursor-pointer flex flex-col justify-between ${
              objectives.luminolRevealed
                ? 'bg-cyan-950/20 border-cyan-800/60 text-cyan-200'
                : 'bg-black/40 border-gray-800/80 hover:border-gray-700 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>5. UV Luminol Graffiti</span>
              </div>
              {objectives.luminolRevealed ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-relaxed font-mono">
              Press [L] in 3D to reveal glowing wall graffiti referencing 11:41 PM.
            </p>
          </div>
        </div>

        {/* Phase Transition Action */}
        <div className="pt-3 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-400">
            {isReadyToProceed
              ? '✅ Crime scene verified. Ready to cross-examine suspects.'
              : 'Complete at least 3 objectives to unlock Phase 2 (Suspects).'}
          </span>

          <button
            onClick={() => {
              if (isReadyToProceed) {
                sound.playHorrorStinger();
                onProceedToPhase2();
              } else {
                onAutoDiscoverAll();
              }
            }}
            className={`px-4 py-2 rounded font-medium text-xs uppercase tracking-wider transition flex items-center gap-2 cursor-pointer border ${
              isReadyToProceed
                ? 'bg-red-900 hover:bg-red-800 border-red-700 text-gray-100'
                : 'bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-300'
            }`}
          >
            <span>{isReadyToProceed ? 'Proceed to Phase 2: Suspects' : 'Auto-Complete & Proceed'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
