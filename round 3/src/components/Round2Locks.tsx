import React, { useState } from 'react';
import { SUSPECTS } from '../data/suspects';
import { SuspectId } from '../types/game';
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
  Eye
} from 'lucide-react';

interface Round2LocksProps {
  suspectLocks: Record<SuspectId, boolean>;
  onSolveLock: (suspectId: SuspectId) => void;
}

export const Round2Locks: React.FC<Round2LocksProps> = ({
  suspectLocks,
  onSolveLock
}) => {
  const [activeTab, setActiveTab] = useState<SuspectId>('aarav');
  const [inputVal, setInputVal] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [showHint, setShowHint] = useState<boolean>(false);

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

  return (
    <div className="w-full bg-[#0d0d12] border border-gray-900 rounded-lg p-6 font-mono">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-gray-800 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-red-500" />
            <h2 className="text-base font-bold text-gray-100 tracking-wider uppercase">
              ROUND 2: FIVE SUSPECTS & FIVE LOCKS
            </h2>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Break the alibis. All five are guilty of a crime, but none of those crimes is murder.
          </p>
        </div>

        {/* Progress badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-black/60 border border-gray-800 text-xs">
          <span className="text-gray-400">LOCKS CLEARED:</span>
          <span className="font-bold text-red-400">{totalUnlocked} / 5</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-900 mb-6 no-scrollbar">
        {(Object.keys(SUSPECTS) as SuspectId[]).map((id) => {
          const s = SUSPECTS[id];
          const locked = !suspectLocks[id];
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
                setErrorMsg('');
                setShowHint(false);
                sound.playTick(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded text-xs transition uppercase font-bold tracking-wider ${
                isActive
                  ? 'bg-red-950/80 border border-red-600 text-red-100 shadow-[0_0_12px_rgba(229,9,20,0.3)]'
                  : 'bg-black/50 border border-gray-800 text-gray-400 hover:text-gray-200'
              }`}
            >
              {locked ? <Lock className="w-3.5 h-3.5 text-gray-500" /> : <Unlock className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{s.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Suspect Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Suspect Dossier (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded border border-gray-800 bg-black/50">
            <div className="flex items-center justify-between pb-2 border-b border-gray-800/80 mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-100">{suspect.name}</h3>
                <p className="text-xs text-red-400 font-semibold">{suspect.role}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-500 block uppercase">CCTV LOG</span>
                <span className="text-xs font-bold text-amber-300">[{suspect.cctvTimestamp}]</span>
              </div>
            </div>

            {/* Suspect Statement */}
            <div className="space-y-1 mb-3">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                OFFICIAL ALIBI DEPOSITION:
              </span>
              <p className="text-xs text-gray-300 italic bg-gray-950/80 p-3 rounded border border-gray-900">
                "{suspect.statement}"
              </p>
            </div>

            {/* Hardware Clock Source */}
            <div className="p-3 bg-red-950/20 border-l-2 border-red-700 rounded text-xs mb-3 space-y-1">
              <div className="flex items-center gap-1.5 text-red-400 font-bold uppercase text-[10px]">
                <Clock className="w-3.5 h-3.5" />
                HARDWARE TIMESTAMP SOURCE (AUDIT TRAIL):
              </div>
              <p className="text-gray-300 text-[11px]">{suspect.clockSource}</p>
            </div>

            {/* Two Truths */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                FORENSIC CONFIRMED TRUTHS (ROUND 2 PRINCIPLE):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {suspect.twoTruths.map((truth, i) => (
                  <div key={i} className="p-2.5 bg-black/70 rounded border border-gray-900 text-xs text-emerald-400/90 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{truth}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Lock Console (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded border border-gray-800 bg-black/70">
          {!isUnlocked ? (
            <form onSubmit={handleUnlockAttempt} className="space-y-4">
              <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                LOCK CIPHER CHALLENGE:
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                {suspect.lockQuestion}
              </p>

              <div>
                <label className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">
                  SUBMIT SECONDARY MOTIVE / CRIME KEYWORD:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder={`e.g. ${suspect.lockAnswer.slice(0, 4)}...`}
                    className="w-full bg-[#0a0a0f] border border-gray-800 focus:border-red-600 rounded px-3 py-2 text-sm text-gray-100 placeholder-gray-700 outline-none font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded transition uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)] shrink-0 cursor-pointer"
                  >
                    DISARM
                  </button>
                </div>

                {/* 1-Click Tactical Deduction Chips */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold block">
                    ⚡ TACTICAL INTEL CHIPS (CLICK TO DISARM):
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
                        className="px-2.5 py-1 rounded bg-red-950/40 hover:bg-red-900 border border-red-800/80 text-[11px] text-red-200 font-bold transition hover:scale-105 cursor-pointer flex items-center gap-1"
                      >
                        <span>► {chip}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setShowHint(!showHint)}
                  className="text-xs text-gray-500 hover:text-amber-400 flex items-center gap-1 transition"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 bg-red-800 hover:bg-red-700 text-white font-bold text-xs rounded transition uppercase tracking-wider shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                >
                  DISARM LOCK
                </button>
              </div>

              {showHint && (
                <div className="p-3 bg-amber-950/30 border border-amber-900/60 rounded text-amber-200/90 text-xs">
                  <span className="font-bold">Investigator Hint:</span> {suspect.lockHint}
                </div>
              )}
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Unlock className="w-4 h-4" />
                LOCK COMPROMISED — SECONDARY CRIME EXPOSED:
              </div>

              <div className="p-4 rounded border border-emerald-900/60 bg-emerald-950/20 text-xs text-emerald-200 leading-relaxed">
                <p className="font-bold text-emerald-400 mb-1">ACTUAL CRIME COMMITTED:</p>
                <p>{suspect.realCrime}</p>
              </div>

              <div className="p-3 bg-red-950/30 border-l-2 border-red-600 text-red-300 text-xs rounded">
                <p className="font-bold">CORE DEDUCTION:</p>
                <p className="mt-0.5">
                  {suspect.name} lied to protect themselves from this crime—not because they killed Professor Sen.
                </p>
              </div>
            </div>
          )}

          {/* Bottom Callout */}
          <div className="mt-4 pt-3 border-t border-gray-900 text-[11px] text-gray-500 italic">
            "Never trust the first time. What clock generated this timestamp?"
          </div>
        </div>
      </div>
    </div>
  );
};
