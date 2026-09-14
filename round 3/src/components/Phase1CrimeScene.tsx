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
    <div className="w-full space-y-4 font-mono text-gray-200">
      {/* 3D Viewport Header */}
      <div className="tactical-frame tactical-corners rounded-lg p-3 text-xs text-gray-300 flex flex-wrap items-center justify-between gap-2 shadow-lg">
        <span className="corner-tl text-red-500" />
        <span className="corner-tr text-red-500" />
        <span className="corner-bl text-red-500" />
        <span className="corner-br text-red-500" />

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 hud-pulse-green" />
          <span className="font-bold text-gray-100 uppercase tracking-wider">
            PHASE 1: THE CRIME SCENE — FIRST-PERSON RECON
          </span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-gray-900 text-gray-400 border border-gray-800">
            EAST WING SECTOR 17-B
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span><kbd className="px-1 py-0.5 bg-gray-900 border border-gray-700 rounded text-white">WASD</kbd> Move</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.5 bg-gray-900 border border-gray-700 rounded text-white">Mouse</kbd> Look</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.5 bg-gray-900 border border-gray-700 rounded text-white">E</kbd> Inspect</span>
          <span>•</span>
          <span className="text-purple-400 font-bold"><kbd className="px-1 py-0.5 bg-purple-950 border border-purple-800 rounded text-purple-200">L</kbd> UV Luminol</span>
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

      {/* Crime Scene Objectives Tactical Conduit */}
      <div className="tactical-frame tactical-corners rounded-lg p-5 shadow-xl">
        <span className="corner-tl text-red-500" />
        <span className="corner-tr text-red-500" />
        <span className="corner-bl text-red-500" />
        <span className="corner-br text-red-500" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-800 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider">
                CRIME SCENE INVESTIGATION OBJECTIVES
              </h3>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Uncover the physical anomalies in the East Wing before interrogating suspects.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400">
              PROGRESS: {completedCount} / 5 OBJECTIVES
            </span>
            <button
              onClick={onAutoDiscoverAll}
              className="px-2.5 py-1 text-[10px] rounded bg-amber-950/40 border border-amber-500 hover:bg-amber-900/60 text-amber-300 font-bold transition flex items-center gap-1 cursor-pointer"
              title="Speedrun / Judge Auto-Discover"
            >
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>DISCOVER ALL</span>
            </button>
          </div>
        </div>

        {/* 5 Specific Detective Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {/* Objective 1 */}
          <div
            onClick={() => {
              onUpdateObjective('clockInspected', !objectives.clockInspected);
              sound.playTick(true);
            }}
            className={`p-3 rounded border transition cursor-pointer flex flex-col justify-between ${
              objectives.clockInspected
                ? 'bg-red-950/20 border-red-500 text-red-200'
                : 'bg-black/50 border-gray-800 hover:border-gray-600 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Clock className="w-4 h-4 text-red-400" />
                <span>1. Halted Grandfather Clock</span>
              </div>
              {objectives.clockInspected ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              Escapement wheel jammed with graphite at 11:47 PM. Clock stopped manually.
            </p>
          </div>

          {/* Objective 2 */}
          <div
            onClick={() => {
              onUpdateObjective('tapeFound', !objectives.tapeFound);
              sound.playTick(true);
            }}
            className={`p-3 rounded border transition cursor-pointer flex flex-col justify-between ${
              objectives.tapeFound
                ? 'bg-amber-950/20 border-amber-500 text-amber-200'
                : 'bg-black/50 border-gray-800 hover:border-gray-600 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Volume2 className="w-4 h-4 text-amber-400" />
                <span>2. Floor Dictaphone Reel #4</span>
              </div>
              {objectives.tapeFound ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              Audio reel recording: 0.5x sub-bass layer contains hidden pre-blackout message.
            </p>
          </div>

          {/* Objective 3 */}
          <div
            onClick={() => {
              onUpdateObjective('bloodExamined', !objectives.bloodExamined);
              sound.playTick(true);
            }}
            className={`p-3 rounded border transition cursor-pointer flex flex-col justify-between ${
              objectives.bloodExamined
                ? 'bg-red-950/20 border-red-500 text-red-200'
                : 'bg-black/50 border-gray-800 hover:border-gray-600 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Camera className="w-4 h-4 text-red-400" />
                <span>3. Persian Rug Arterial Smears</span>
              </div>
              {objectives.bloodExamined ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              Blood smear direction indicates body was dragged toward desk after initial strike.
            </p>
          </div>

          {/* Objective 4 */}
          <div
            onClick={() => {
              onUpdateObjective('doorInspected', !objectives.doorInspected);
              sound.playTick(true);
            }}
            className={`p-3 rounded border transition cursor-pointer flex flex-col justify-between ${
              objectives.doorInspected
                ? 'bg-purple-950/20 border-purple-500 text-purple-200'
                : 'bg-black/50 border-gray-800 hover:border-gray-600 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Key className="w-4 h-4 text-purple-400" />
                <span>4. Locked Study 17-B Door</span>
              </div>
              {objectives.doorInspected ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              High-tensile deadbolt engaged from inside. Only secret servant duct bypasses lock.
            </p>
          </div>

          {/* Objective 5 */}
          <div
            onClick={() => {
              onUpdateObjective('luminolRevealed', !objectives.luminolRevealed);
              sound.playTick(true);
            }}
            className={`p-3 rounded border transition cursor-pointer flex flex-col justify-between ${
              objectives.luminolRevealed
                ? 'bg-cyan-950/20 border-cyan-500 text-cyan-200'
                : 'bg-black/50 border-gray-800 hover:border-gray-600 text-gray-400'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>5. UV Luminol Luminescence</span>
              </div>
              {objectives.luminolRevealed ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Circle className="w-4 h-4 text-gray-700 shrink-0" />
              )}
            </div>
            <p className="text-[11px] text-gray-400 mt-2">
              Press [L] in 3D: reveals glowing wall graffiti pointing to 11:41 PM pre-crime spool.
            </p>
          </div>
        </div>

        {/* Phase Transition Action */}
        <div className="pt-3 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-400">
            {isReadyToProceed
              ? '✅ Crime scene verified. You have sufficient evidence to interrogate the suspects.'
              : '⚠️ Complete at least 3 objectives to unlock Phase 2 (Suspects).'}
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
            className={`px-5 py-2.5 rounded font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 cursor-pointer ${
              isReadyToProceed
                ? 'bg-red-700 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)]'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
          >
            <span>{isReadyToProceed ? 'PROCEED TO PHASE 2: THE SUSPECTS' : 'AUTO-COMPLETE & PROCEED'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
