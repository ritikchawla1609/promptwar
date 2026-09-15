import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audioEngine';
import { Skull, AlertTriangle, RotateCcw } from 'lucide-react';

interface GlitchClimaxProps {
  onResetGame: () => void;
}

export const GlitchClimax: React.FC<GlitchClimaxProps> = ({ onResetGame }) => {
  const [phase, setPhase] = useState<number>(0);
  // phase 0: Blackout & Ticking
  // phase 1: Flashing Timestamps (11:47 -> 12:03 -> 12:13 -> 12:17)
  // phase 2: Sudden 12:15 AM
  // phase 3: Meera - SHE ATTACKED HIM
  // phase 4: Kabir - HE CAUSED THE BLACKOUT
  // phase 5: Riya - SHE KNEW THE TRUTH
  // phase 6: Aarav - HE STOLE THE EVIDENCE
  // phase 7: Dev - HE WAITED
  // phase 8: YOU SOLVED THE MURDER
  // phase 9: BUT WHO KILLED THE FIRST VICTIM?
  // phase 10: PROFESSOR BLACKWOOD & Final Epilogue

  useEffect(() => {
    sound.playBlackout();

    const t1 = setTimeout(() => {
      sound.playTick(true);
      setPhase(1); // Timestamps
    }, 3500);

    const t2 = setTimeout(() => {
      sound.playGlitchStatic(0.6);
      sound.playTick(true);
      setPhase(2); // 12:15
    }, 9000);

    const t3 = setTimeout(() => {
      sound.playGlitchStatic(0.4);
      setPhase(3); // Meera
    }, 13500);

    const t4 = setTimeout(() => {
      sound.playGlitchStatic(0.4);
      setPhase(4); // Kabir
    }, 18000);

    const t5 = setTimeout(() => {
      sound.playGlitchStatic(0.4);
      setPhase(5); // Riya
    }, 22500);

    const t6 = setTimeout(() => {
      sound.playGlitchStatic(0.4);
      setPhase(6); // Aarav
    }, 27000);

    const t7 = setTimeout(() => {
      sound.playHorrorStinger();
      setPhase(7); // Dev - HE WAITED
    }, 32000);

    const t8 = setTimeout(() => {
      setPhase(8); // YOU SOLVED THE MURDER
    }, 39000);

    const t9 = setTimeout(() => {
      sound.playGlitchStatic(0.5);
      setPhase(9); // BUT WHO KILLED THE FIRST VICTIM?
    }, 45000);

    const t10 = setTimeout(() => {
      sound.playHorrorStinger();
      setPhase(10); // PROFESSOR BLACKWOOD / Epilogue
    }, 51000);

    return () => {
      [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10].forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden crt-overlay crt-vignette font-mono">
      {/* Phase 0: Complete Blackout & Ticking */}
      {phase === 0 && (
        <div className="text-center space-y-6 animate-pulse">
          <span className="text-8xl text-red-900 block font-black">·</span>
          <p className="text-xs text-gray-700 uppercase tracking-widest">
            BLACKOUT PROTOCOL INITIATED...
          </p>
        </div>
      )}

      {/* Phase 1: Rapid Flashing Timestamps */}
      {phase === 1 && (
        <div className="space-y-4 text-center">
          <div className="text-5xl md:text-7xl font-bold tracking-widest text-red-500 animate-pulse">
            11:47 PM
          </div>
          <div className="text-4xl text-gray-600">12:03 AM</div>
          <div className="text-4xl text-gray-700">12:13 AM</div>
          <div className="text-4xl text-gray-800">12:17 AM</div>
        </div>
      )}

      {/* Phase 2: Suddenly 12:15 AM */}
      {phase === 2 && (
        <div className="space-y-4 text-center">
          <div className="text-xs text-red-500 uppercase tracking-widest font-bold">
            THE TIME THAT TRULY MATTERED:
          </div>
          <div className="text-7xl md:text-9xl font-black text-red-600 tracking-tighter filter drop-shadow-[0_0_25px_rgba(255,0,0,0.9)] animate-bounce">
            12:15 AM
          </div>
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            (The moment of death in total darkness)
          </p>
        </div>
      )}

      {/* Phase 3: Meera */}
      {phase === 3 && (
        <div className="text-center space-y-5 animate-fade-in max-w-md">
          <div className="w-24 h-24 mx-auto rounded-2xl border border-red-500/40 bg-red-950/30 flex items-center justify-center text-3xl font-semibold text-red-300">
            M
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 font-sans">
            Dr. Meera Patel
          </h2>
          <div className="text-xl md:text-2xl font-bold text-red-400 tracking-wider uppercase font-mono">
            She Attacked Him.
          </div>
          <p className="text-xs text-gray-400 font-sans">
            Confronted Sen at 11:47 PM. Believed she killed him. Fled the room.
          </p>
        </div>
      )}

      {/* Phase 4: Kabir */}
      {phase === 4 && (
        <div className="text-center space-y-5 animate-fade-in max-w-md">
          <div className="w-24 h-24 mx-auto rounded-2xl border border-amber-500/40 bg-amber-950/30 flex items-center justify-center text-3xl font-semibold text-amber-300">
            K
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 font-sans">
            Kabir Varma
          </h2>
          <div className="text-xl md:text-2xl font-bold text-amber-400 tracking-wider uppercase font-mono">
            He Caused the Blackout.
          </div>
          <p className="text-xs text-gray-400 font-sans">
            Overloaded the transformer at 12:13 AM to wipe security telemetry.
          </p>
        </div>
      )}

      {/* Phase 5: Riya */}
      {phase === 5 && (
        <div className="text-center space-y-5 animate-fade-in max-w-md">
          <div className="w-24 h-24 mx-auto rounded-2xl border border-cyan-500/40 bg-cyan-950/30 flex items-center justify-center text-3xl font-semibold text-cyan-300">
            R
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 font-sans">
            Riya Sharma
          </h2>
          <div className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wider uppercase font-mono">
            She Knew the Truth.
          </div>
          <p className="text-xs text-gray-400 font-sans">
            Planted wiretaps to extort Sen over the historic cover-up.
          </p>
        </div>
      )}

      {/* Phase 6: Aarav */}
      {phase === 6 && (
        <div className="text-center space-y-5 animate-fade-in max-w-md">
          <div className="w-24 h-24 mx-auto rounded-2xl border border-purple-500/40 bg-purple-950/30 flex items-center justify-center text-3xl font-semibold text-purple-300">
            A
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-100 font-sans">
            Aarav Mehta
          </h2>
          <div className="text-xl md:text-2xl font-bold text-purple-400 tracking-wider uppercase font-mono">
            He Stole the Evidence.
          </div>
          <p className="text-xs text-gray-400 font-sans">
            Slipped into the East Wing at 11:47 PM to steal Blackwood's research journals.
          </p>
        </div>
      )}

      {/* Phase 7: Dev */}
      {phase === 7 && (
        <div className="text-center space-y-6 animate-fade-in max-w-lg">
          <div className="w-28 h-28 mx-auto rounded-2xl border border-red-500 bg-red-950/40 flex items-center justify-center text-4xl font-bold text-red-400 shadow-xl shadow-red-950/50">
            DEV
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 font-sans tracking-tight">
            Devraj Negi
          </h2>
          <div className="text-2xl md:text-4xl font-black text-red-500 tracking-widest uppercase font-mono">
            HE WAITED.
          </div>
          <p className="text-xs md:text-sm text-gray-300 font-sans max-w-lg mx-auto leading-relaxed">
            Twenty years ago, Professor Sen covered up the experiment that killed Dev's child. Dev didn't plan to kill Sen that night—until he found Sen wounded. During the blackout, Dev used the servant passage to end his life at 12:15 AM.
          </p>
        </div>
      )}

      {/* Phase 8: You Solved The Murder */}
      {phase === 8 && (
        <div className="text-center space-y-3 animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-100 tracking-wider uppercase font-sans">
            You Solved The Murder.
          </h1>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">
            All layers decrypted. All cognitive traps dismantled.
          </p>
        </div>
      )}

      {/* Phase 9: But who killed the first victim? */}
      {phase === 9 && (
        <div className="text-center space-y-6 animate-pulse">
          <h2 className="text-2xl md:text-4xl font-bold text-red-400 tracking-wider uppercase font-sans">
            But who killed the first victim?
          </h2>
        </div>
      )}

      {/* Phase 10: Professor Blackwood Hook */}
      {phase === 10 && (
        <div className="max-w-2xl text-center space-y-5 p-8 glass-panel border border-red-500/30 rounded-xl shadow-2xl">
          <div className="text-[11px] text-red-400 font-semibold tracking-wider uppercase font-mono">
            Blackwood Archives • Case File 01-A
          </div>
          <div className="text-3xl md:text-4xl font-bold text-gray-100 font-serif">
            Professor Blackwood
          </div>
          <p className="text-base md:text-lg font-semibold text-red-400 uppercase tracking-wider font-sans">
            The murder you just solved was not the first one.
          </p>
          <div className="p-4 bg-white/[0.02] border border-gray-800/60 rounded-lg text-xs text-gray-300 leading-relaxed font-sans text-left">
            Twenty years ago, Professor Blackwood discovered the truth about the forbidden experiments. He vanished into the foundation walls of this very house. Some say the clocks didn't stop ticking when Sen died—they stopped when Blackwood was buried.
          </div>
          <div className="pt-3">
            <button
              onClick={onResetGame}
              className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 border border-gray-700/60 text-gray-200 font-medium text-xs uppercase tracking-wider rounded-lg transition flex items-center gap-2 mx-auto cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Investigation Terminal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
