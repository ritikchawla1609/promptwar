import React, { useState } from 'react';
import { SUSPECTS } from '../data/suspects';
import { SuspectId, Suspect } from '../types/game';
import { sound } from '../utils/audioEngine';
import { 
  Key, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Clock, 
  HelpCircle,
  Eye,
  FileText,
  UserCheck,
  Radio,
  Terminal,
  FileWarning,
  Sparkles,
  Zap,
  Volume2
} from 'lucide-react';

interface Round2LocksProps {
  suspectLocks: Record<SuspectId, boolean>;
  onSolveLock: (suspectId: SuspectId) => void;
  onInspectEvidence?: (evidenceId: string) => void;
}

export const Round2Locks: React.FC<Round2LocksProps> = ({
  suspectLocks,
  onSolveLock,
  onInspectEvidence
}) => {
  const [activeTab, setActiveTab] = useState<SuspectId>('aarav');
  const [inputVal, setInputVal] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [playingSuspect, setPlayingSuspect] = useState<SuspectId | null>(null);

  const handleToggleVoice = (id: SuspectId, statement: string) => {
    if (playingSuspect === id) {
      sound.stopAllSpeech();
      setPlayingSuspect(null);
    } else {
      sound.stopAllSpeech();
      setPlayingSuspect(id);
      sound.speakSuspect(id, statement, () => {
        setPlayingSuspect(null);
      });
    }
  };

  const suspect = SUSPECTS[activeTab];
  const isUnlocked = suspectLocks[activeTab];
  const totalUnlocked = Object.values(suspectLocks).filter(Boolean).length;

  const handleUnlockAttempt = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = inputVal.trim().toLowerCase();
    const cleanTarget = suspect.lockAnswer.toLowerCase();

    // Check if input contains target keyword
    if (cleanInput.includes(cleanTarget) || (cleanTarget.includes(cleanInput) && cleanInput.length >= 4)) {
      sound.playHorrorStinger();
      onSolveLock(activeTab);
      setErrorMsg('');
      setInputVal('');
    } else {
      sound.playGlitchStatic(0.2);
      setErrorMsg(`ACCESS DENIED: "${inputVal}" does not resolve the secondary crime.`);
    }
  };

  const getMotiveBadge = (level: string) => {
    switch (level) {
      case 'CRITICAL':
        return <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-700/60 text-red-200 font-mono">MOTIVE: CRITICAL</span>;
      case 'EXTREME':
        return <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/50 border border-red-800/60 text-red-300 font-mono">MOTIVE: EXTREME</span>;
      case 'HIGH':
        return <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/40 border border-red-900/60 text-red-300 font-mono">MOTIVE: HIGH</span>;
      case 'MEDIUM':
        return <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/60 text-amber-300 font-mono">MOTIVE: MEDIUM</span>;
      default:
        return <span className="text-[10px] px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-400 font-mono">MOTIVE: LOW</span>;
    }
  };

  const getAlibiBadge = (status: string) => {
    switch (status) {
      case 'COLLAPSED':
        return <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/70 border border-red-700/70 text-red-300 font-mono">ALIBI: COLLAPSED</span>;
      case 'FABRICATED':
        return <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/50 border border-red-800/60 text-red-400 font-mono">ALIBI: FABRICATED</span>;
      case 'QUESTIONABLE':
        return <span className="text-[10px] px-2 py-0.5 rounded bg-amber-950/50 border border-amber-800/60 text-amber-400 font-mono">ALIBI: QUESTIONABLE</span>;
      default:
        return <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-800/60 text-emerald-400 font-mono">ALIBI: VERIFIED</span>;
    }
  };

  return (
    <div className="w-full glass-panel p-5 sm:p-6 text-gray-200 shadow-xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-gray-800/80 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Key className="w-4 h-4 text-red-400" />
            <h2 className="text-sm sm:text-base font-semibold text-gray-100 tracking-wider uppercase">
              Phase 2: Suspect Dossiers & Interrogation Hub
            </h2>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">
            Cross-examine all five individuals present in Blackwood Manor. Every suspect committed a crime tonight, but only one is guilty of murder.
          </p>
        </div>

        {/* Progress badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/40 border border-gray-800 text-xs shrink-0 font-mono">
          <span className="text-gray-400">DISARMED:</span>
          <span className="font-semibold text-red-400">{totalUnlocked} / 5</span>
        </div>
      </div>

      {/* Suspect Roster Summary Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-6">
        {(Object.keys(SUSPECTS) as SuspectId[]).map((id) => {
          const s = SUSPECTS[id];
          const isDisarmed = suspectLocks[id];
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              onClick={() => {
                sound.stopAllSpeech();
                setPlayingSuspect(null);
                setActiveTab(id);
                setInputVal('');
                setErrorMsg('');
                setShowHint(false);
                sound.playTick(false);
              }}
              className={`p-2.5 rounded-lg border text-left transition cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-red-950/50 border-red-700/80 text-white'
                  : 'bg-black/30 border-gray-800/80 hover:border-gray-700 text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold truncate">{s.name.split(' ')[0]}</span>
                {isDisarmed ? (
                  <Unlock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-red-500/80 shrink-0" />
                )}
              </div>
              <div className="text-[10px] space-y-0.5">
                <div className="text-gray-400 truncate">{s.role.split('&')[0]}</div>
                <div className="flex items-center justify-between pt-1 font-mono">
                  <span className="text-amber-400/90">{s.motiveLevel}</span>
                  <span className="text-gray-500">{s.connectedEvidenceIds.length} clues</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Suspect Detailed File */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Column: Suspect File & Contradictions (7 cols) */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="p-4 rounded-lg border border-gray-800/80 bg-black/40 space-y-3.5">
            {/* Header with Motive & Alibi status */}
            <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-gray-800/80">
              <div>
                <h3 className="text-base font-semibold text-gray-100">{suspect.name}</h3>
                <p className="text-xs text-red-400 font-medium">{suspect.role}</p>
                <p className="text-xs text-gray-400 mt-1 italic">"{suspect.relationshipWithVictim}"</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                {getMotiveBadge(suspect.motiveLevel)}
                {getAlibiBadge(suspect.alibiStatus)}
              </div>
            </div>

            {/* Official Statement with Voice Synthesis */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold font-mono">
                  OFFICIAL ALIBI STATEMENT:
                </span>
                <button
                  type="button"
                  onClick={() => handleToggleVoice(suspect.id, suspect.statement)}
                  className={`px-2.5 py-1 rounded text-[10px] font-medium transition flex items-center gap-1.5 cursor-pointer border ${
                    playingSuspect === suspect.id
                      ? 'bg-red-900 text-white border-red-600'
                      : 'bg-black/50 text-red-300 hover:text-white border-red-900/40 hover:border-red-700'
                  }`}
                  title="Listen to suspect statement"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{playingSuspect === suspect.id ? 'Stop Audio' : 'Listen to Statement'}</span>
                </button>
              </div>
              <p className="text-xs text-gray-200 italic bg-black/50 p-3 rounded-lg border border-gray-800/80 leading-relaxed relative font-serif">
                "{suspect.statement}"
                {playingSuspect === suspect.id && (
                  <span className="inline-block w-2 h-2 ml-2 rounded-full bg-red-500 animate-ping" />
                )}
              </p>
            </div>

            {/* Hardware Clock Source & CCTV */}
            <div className="p-3 bg-red-950/15 border-l-2 border-red-800 rounded-r text-xs space-y-1">
              <div className="flex items-center justify-between font-mono">
                <div className="flex items-center gap-1.5 text-red-400 font-medium uppercase text-[10px]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Hardware Clock Audit Trail:</span>
                </div>
                <span className="text-[10px] text-amber-300/90 font-medium">[{suspect.cctvTimestamp}]</span>
              </div>
              <p className="text-gray-300 text-[11px] font-mono">{suspect.clockSource}</p>
            </div>

            {/* Forensic Contradiction */}
            {suspect.contradictionNotes && (
              <div className="p-3 bg-amber-950/15 border-l-2 border-amber-700 rounded-r text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-medium uppercase text-[10px] font-mono">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Physical Contradiction Found:</span>
                </div>
                <p className="text-amber-200/90 text-[11px] leading-relaxed">
                  {suspect.contradictionNotes}
                </p>
              </div>
            )}

            {/* Connected Evidence Badges */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold font-mono">
                CONNECTED EVIDENCE ({suspect.connectedEvidenceIds.length}):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {suspect.connectedEvidenceIds.map((evId) => (
                  <button
                    key={evId}
                    type="button"
                    onClick={() => {
                      if (onInspectEvidence) onInspectEvidence(evId);
                      sound.playTick(false);
                    }}
                    className="px-2 py-0.5 rounded bg-black/60 border border-gray-800 hover:border-red-700/80 text-[10px] text-gray-300 hover:text-white transition flex items-center gap-1 cursor-pointer font-mono"
                  >
                    <FileText className="w-3 h-3 text-red-400" />
                    <span>#{evId.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Two Confirmed Truths */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold font-mono">
                CONFIRMED FORENSIC TRUTHS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {suspect.twoTruths.map((truth, i) => (
                  <div key={i} className="p-2.5 bg-black/50 rounded-lg border border-gray-800/80 text-xs text-emerald-300/90 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{truth}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interrogation Console (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-5 rounded-lg border border-gray-800/80 bg-black/40">
          {!isUnlocked ? (
            <form onSubmit={handleUnlockAttempt} className="space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider font-mono">
                <Lock className="w-4 h-4" />
                <span>Interrogation Lock // Disarm Alibi</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {suspect.lockQuestion}
              </p>

              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1.5 font-semibold font-mono">
                  Submit Motive / Secondary Crime Keyword:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder={`e.g. ${suspect.lockAnswer.slice(0, 4)}...`}
                    className="w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-700 rounded-md px-3 py-1.5 text-sm text-gray-100 placeholder-gray-700 outline-none font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-red-900 hover:bg-red-800 text-white font-medium text-xs rounded-md transition uppercase tracking-wider shrink-0 cursor-pointer border border-red-800/60"
                  >
                    Disarm
                  </button>
                </div>

                {/* 1-Click Tactical Deduction Chips */}
                <div className="space-y-1.5 pt-3">
                  <span className="text-[10px] text-amber-400/90 uppercase tracking-wider font-semibold flex items-center gap-1 font-mono">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>1-Click Deduction Chips:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      suspect.lockAnswer,
                      activeTab === 'aarav' ? 'Poisoned Coffee' : activeTab === 'riya' ? 'Blackmail Letter' : activeTab === 'kabir' ? 'Cut Phone Lines' : activeTab === 'meera' ? 'Fled Estate' : 'Swapped Keycards',
                      activeTab === 'aarav' ? 'Altered Grant Will' : activeTab === 'riya' ? 'Security Jammer' : activeTab === 'kabir' ? 'Stole Passcode' : activeTab === 'meera' ? 'Hidden Cyanide' : 'Broke Clock Pendulum'
                    ].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => {
                          sound.playHitmarker();
                          setInputVal(chip);
                          const cleanTarget = suspect.lockAnswer.toLowerCase();
                          if (chip.toLowerCase().includes(cleanTarget) || cleanTarget.includes(chip.toLowerCase())) {
                            sound.playObjectiveComplete();
                            onSolveLock(activeTab);
                            setErrorMsg('');
                            setInputVal('');
                          }
                        }}
                        className="px-2.5 py-1 rounded-md bg-red-950/30 hover:bg-red-900/50 border border-red-900/60 text-[11px] text-red-200 transition cursor-pointer flex items-center gap-1"
                      >
                        <span>{chip}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-md bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs text-gray-500 hover:text-amber-400 flex items-center gap-1 transition cursor-pointer font-mono"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>

                <button
                  type="submit"
                  className="px-4 py-1.5 bg-red-900 hover:bg-red-800 text-white font-medium text-xs rounded-md transition uppercase tracking-wider cursor-pointer border border-red-800/60"
                >
                  Disarm Lock
                </button>
              </div>

              {showHint && (
                <div className="p-3 bg-amber-950/20 border border-amber-900/40 rounded-md text-amber-200/90 text-xs">
                  <span className="font-semibold">Investigator Hint:</span> {suspect.lockHint}
                </div>
              )}
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider font-mono">
                <Unlock className="w-4 h-4" />
                <span>Alibi Broken — Secondary Crime Exposed</span>
              </div>

              <div className="p-3.5 rounded-lg border border-emerald-900/50 bg-emerald-950/15 text-xs text-emerald-200 leading-relaxed">
                <p className="font-semibold text-emerald-400 mb-1">UNLAWFUL ACT CONCEALED:</p>
                <p>{suspect.realCrime}</p>
              </div>

              <div className="p-3 bg-red-950/20 border-l-2 border-red-700 text-red-300 text-xs rounded-r">
                <p className="font-semibold">FORENSIC DEDUCTION:</p>
                <p className="mt-0.5 text-red-200/90">
                  {suspect.name} lied to conceal this offense—their alibi is broken, but they did not commit the fatal smothering of Professor Sen.
                </p>
              </div>
            </div>
          )}

          {/* Bottom Callout */}
          <div className="mt-4 pt-3 border-t border-gray-800/80 text-[11px] text-gray-500 italic">
            "Every suspect tells one lie to protect themselves. Only one is covering up a murder."
          </div>
        </div>
      </div>
    </div>
  );
};
