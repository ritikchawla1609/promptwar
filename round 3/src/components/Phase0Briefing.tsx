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
    <div className="w-full max-w-5xl mx-auto space-y-6 text-gray-200 animate-fade-in font-sans">
      {/* Top Classified Dossier Header */}
      <div className="glass-panel p-6 sm:p-7 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-800/80 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-red-950/40 border border-red-900/60 flex items-center justify-center text-red-400">
              <ShieldAlert className="w-5 h-5 opacity-90" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-medium text-red-400 tracking-wider uppercase">
                  FORENSIC CASE FILE 17-B
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-gray-900 text-gray-300 border border-gray-800 font-mono">
                  CONFIDENTIAL
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-100 tracking-tight mt-0.5">
                The Blackwood Manor Incident
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-amber-400/80" />
            <span>EST. DURATION: 45–60 MINS</span>
          </div>
        </div>

        {/* 3-Column Dossier Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Col 1: Victim Profile */}
          <div className="p-4 rounded-lg bg-black/40 border border-gray-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-red-400 font-semibold uppercase tracking-wider mb-2">
                <User className="w-3.5 h-3.5" />
                <span>The Victim</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-100">
                Prof. Vikram Sen (Age 58)
              </h3>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Chair of Cognitive Neuroforensics. Former collaborator of founder Dr. Alistair Blackwood. Discovered deceased inside his locked private study.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-gray-800/60 text-[11px] text-gray-400 font-mono">
              STATUS: Confirmed Homicide
            </div>
          </div>

          {/* Col 2: Crime Location */}
          <div className="p-4 rounded-lg bg-black/40 border border-gray-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>The Crime Scene</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-100">
                East Wing Study Room 17-B
              </h3>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                Blackwood Estate (Est. 1894), isolated during an electrical thunderstorm. The study was locked from the inside with a high-tensile deadbolt.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-gray-800/60 text-[11px] text-gray-400 font-mono">
              ACCESS: Hallway Door + Service Duct
            </div>
          </div>

          {/* Col 3: Initial Circumstances */}
          <div className="p-4 rounded-lg bg-black/40 border border-gray-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Primary Anomaly</span>
              </div>
              <h3 className="text-sm font-semibold text-gray-100">
                The Frozen Clock (11:47 PM)
              </h3>
              <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                The antique grandfather clock outside the study stopped at 11:47 PM. Power failure occurred at 12:13 AM. Sen's body was discovered at 12:18 AM.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-gray-800/60 text-[11px] text-gray-400 font-mono">
              ANOMALY: Conflicting timestamps
            </div>
          </div>
        </div>

        {/* Investigator Mission Directives */}
        <div className="p-4 rounded-lg border border-red-950/60 bg-red-950/15 mb-6 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider">
            <Fingerprint className="w-4 h-4" />
            <span>Investigator Directives</span>
          </div>
          <ul className="text-xs text-gray-300 space-y-2 list-disc list-inside leading-relaxed">
            <li>
              <span className="text-gray-100 font-medium">Never trust the initial timestamp:</span> The prosecution claims 11:47 PM is the moment of death, but the evidence reveals conflicting realities.
            </li>
            <li>
              <span className="text-gray-100 font-medium">Cross-examine all 5 suspects:</span> Every person in the manor committed a secondary offense tonight, but only one committed murder.
            </li>
            <li>
              <span className="text-gray-100 font-medium">Watch for algorithmic bias:</span> The automated Manor AI is 97.8% confident in an obvious scapegoat. Scrutinize its assumptions.
            </li>
            <li>
              <span className="text-gray-100 font-medium">Interconnected evidence:</span> Physical clues found in the crime scene contradict suspect alibis and unlock late-game discoveries.
            </li>
          </ul>
        </div>

        {/* Start Investigation Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-800/80">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>FLOW: Recon ➔ Suspects ➔ Timeline ➔ Forensics ➔ Board ➔ Indictment</span>
          </div>

          <button
            onClick={() => {
              sound.playHorrorStinger();
              onStartInvestigation();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-red-900 hover:bg-red-800 text-gray-100 font-medium text-xs uppercase tracking-wider rounded-md transition cursor-pointer flex items-center justify-center gap-2 shrink-0 border border-red-800/60"
          >
            <span>Begin Crime Scene Recon</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
