import React from 'react';
import { 
  FileText, 
  ShieldAlert, 
  MapPin, 
  User, 
  Clock, 
  AlertTriangle, 
  ChevronRight, 
  Eye, 
  Fingerprint, 
  Compass 
} from 'lucide-react';
import { sound } from '../utils/audioEngine';

interface Phase0BriefingProps {
  onStartInvestigation: () => void;
}

export const Phase0Briefing: React.FC<Phase0BriefingProps> = ({ onStartInvestigation }) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 font-mono text-gray-200 animate-fade-in">
      {/* Top Classified Dossier Header */}
      <div className="tactical-frame tactical-corners rounded-lg p-5 sm:p-6 shadow-2xl">
        <span className="corner-tl text-red-500" />
        <span className="corner-tr text-red-500" />
        <span className="corner-bl text-red-500" />
        <span className="corner-br text-red-500" />

        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-red-950/80 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-red-950/60 border border-red-800 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-red-500 tracking-widest uppercase">
                  FORENSIC CASE FILE 17-B
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-900/60 font-bold">
                  LEVEL 4 CONFIDENTIAL
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-100 tracking-wide mt-0.5">
                THE BLACKWOOD MANOR INCIDENT
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>ESTIMATED DURATION: 45–60 MINS</span>
          </div>
        </div>

        {/* 3-Column Dossier Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Col 1: Victim Profile */}
          <div className="p-4 rounded bg-black/50 border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-red-400 font-bold uppercase tracking-wider mb-2">
                <User className="w-4 h-4 text-red-500" />
                <span>THE VICTIM</span>
              </div>
              <h3 className="text-base font-bold text-gray-100">
                VICTIM: PROFESSOR VIKRAM SEN (Age 58)
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Chair of Cognitive Neuroforensics. Former collaborator of late eccentric founder Dr. Alistair Blackwood. Found deceased inside his private locked study.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-900 text-[11px] text-gray-500">
              STATUS: Confirmed Homicide (Smothering & Blunt Force)
            </div>
          </div>

          {/* Col 2: Crime Location */}
          <div className="p-4 rounded bg-black/50 border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>THE CRIME SCENE</span>
              </div>
              <h3 className="text-base font-bold text-gray-100">
                East Wing Study Room 17-B
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                LOCATION: BLACKWOOD ESTATE (EST. 1894), isolated by an ongoing electrical thunderstorm. The study was locked from the inside with a high-tensile deadbolt.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-900 text-[11px] text-gray-500">
              PHYSICAL ACCESS: Single Hallway Door + Secret Servant Duct
            </div>
          </div>

          {/* Col 3: Initial Circumstances */}
          <div className="p-4 rounded bg-black/50 border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>PRIMARY ANOMALY</span>
              </div>
              <h3 className="text-base font-bold text-gray-100">
                The Frozen Clock (11:47 PM)
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                The antique grandfather clock outside the study stopped precisely at 11:47 PM. The house suffered a total power blackout at 12:13 AM. Sen was found at 12:18 AM.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-gray-900 text-[11px] text-gray-500">
              CENTRAL PARADOX: One of these times never happened.
            </div>
          </div>
        </div>

        {/* Investigator Mission Directives */}
        <div className="p-4 rounded border border-red-950/80 bg-red-950/20 mb-6 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider">
            <Fingerprint className="w-4 h-4" />
            <span>INVESTIGATOR DIRECTIVES // SPECIAL INSTRUCTIONS</span>
          </div>
          <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside leading-relaxed">
            <li>
              <span className="text-gray-100 font-bold">Never trust the first timestamp:</span> The prosecution claims 11:47 PM is the moment of death, but the evidence reveals conflicting realities.
            </li>
            <li>
              <span className="text-gray-100 font-bold">Cross-examine all 5 suspects:</span> Every person in the manor committed a secondary crime tonight, but only one is guilty of murder.
            </li>
            <li>
              <span className="text-gray-100 font-bold">Watch for the AI trap:</span> The automated Manor AI is 97.8% confident in an obvious scapegoat. Challenge its assumptions.
            </li>
            <li>
              <span className="text-gray-100 font-bold">Interconnected Clues:</span> Clues found in the crime scene will contradict alibis and unlock secrets in later phases.
            </li>
          </ul>
        </div>

        {/* Start Investigation Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800/80">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>NAVIGATION: Phase 1 (Crime Scene) ➔ Phase 2 (Suspects) ➔ Phase 3 (Timeline) ➔ Phase 4 (Forensics) ➔ Phase 5 (Case Board) ➔ Final Accusation</span>
          </div>

          <button
            onClick={() => {
              sound.playHorrorStinger();
              onStartInvestigation();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-red-700 hover:bg-red-600 active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded transition cursor-pointer shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center gap-2 shrink-0"
          >
            <span>INITIATE FIRST-PERSON CRIME SCENE RECON ➔</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
