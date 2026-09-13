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
        <div className="text-center space-y-6 animate-glitch">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-red-700 bg-red-950/40 flex items-center justify-center text-4xl font-bold text-red-300">
            M
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            DR. MEERA PATEL
          </h2>
          <div className="text-2xl md:text-3xl font-black text-red-500 tracking-widest uppercase">
            SHE ATTACKED HIM.
          </div>
          <p className="text-xs text-gray-400">
            Confronted Sen at 11:47 PM. Believed she killed him. Fled the room.
          </p>
        </div>
      )}

      {/* Phase 4: Kabir */}
      {phase === 4 && (
        <div className="text-center space-y-6 animate-glitch">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-amber-600 bg-amber-950/40 flex items-center justify-center text-4xl font-bold text-amber-300">
            K
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            KABIR VARMA
          </h2>
          <div className="text-2xl md:text-3xl font-black text-amber-400 tracking-widest uppercase">
            HE CAUSED THE BLACKOUT.
          </div>
          <p className="text-xs text-gray-400">
            Overloaded the transformer at 12:13 AM to wipe security telemetry.
          </p>
        </div>
      )}

      {/* Phase 5: Riya */}
      {phase === 5 && (
        <div className="text-center space-y-6 animate-glitch">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-600 bg-cyan-950/40 flex items-center justify-center text-4xl font-bold text-cyan-300">
            R
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            RIYA SHARMA
          </h2>
          <div className="text-2xl md:text-3xl font-black text-cyan-400 tracking-widest uppercase">
            SHE KNEW THE TRUTH.
          </div>
          <p className="text-xs text-gray-400">
            Planted wiretaps to extort Sen over the historic cover-up.
          </p>
        </div>
      )}

      {/* Phase 6: Aarav */}
      {phase === 6 && (
        <div className="text-center space-y-6 animate-glitch">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-purple-600 bg-purple-950/40 flex items-center justify-center text-4xl font-bold text-purple-300">
            A
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            AARAV MEHTA
          </h2>
          <div className="text-2xl md:text-3xl font-black text-purple-400 tracking-widest uppercase">
            HE STOLE THE EVIDENCE.
          </div>
          <p className="text-xs text-gray-400">
            Slipped into the East Wing at 11:47 PM to steal Blackwood's research journals.
          </p>
        </div>
      )}

      {/* Phase 7: Dev */}
      {phase === 7 && (
        <div className="text-center space-y-8 animate-fade-in">
          <div className="w-36 h-36 mx-auto rounded-full border-4 border-red-500 bg-black flex items-center justify-center text-5xl font-black text-red-500 shadow-[0_0_50px_rgba(255,0,0,0.8)]">
            DEV
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-100 tracking-tight">
            DEVRAJ NEGI
          </h2>
          <div className="text-3xl md:text-5xl font-black text-red-600 tracking-widest uppercase glitch-text" data-text="HE WAITED.">
            HE WAITED.
          </div>
          <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Twenty years ago, Professor Sen covered up the experiment that killed Dev's child. Dev didn't plan to kill Sen that night—until he found Sen wounded. During the blackout, Dev used the servant passage to end his life at 12:15 AM.
          </p>
        </div>
      )}

      {/* Phase 8: You Solved The Murder */}
      {phase === 8 && (
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-100 tracking-widest uppercase">
            YOU SOLVED THE MURDER.
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            All layers decrypted. All cognitive traps dismantled.
          </p>
        </div>
      )}

      {/* Phase 9: But who killed the first victim? */}
      {phase === 9 && (
        <div className="text-center space-y-6 animate-pulse">
          <h2 className="text-3xl md:text-5xl font-black text-red-500 tracking-widest uppercase">
            BUT WHO KILLED THE FIRST VICTIM?
          </h2>
        </div>
      )}

      {/* Phase 10: Professor Blackwood Hook */}
      {phase === 10 && (
        <div className="max-w-2xl text-center space-y-6 p-8 border border-red-900/80 bg-black/90 rounded-lg shadow-[0_0_50px_rgba(139,0,0,0.5)]">
          <div className="text-xs text-red-500 font-bold tracking-widest uppercase">
            BLACKWOOD ARCHIVES • CASE FILE 01-A
          </div>
          <div className="text-4xl md:text-5xl font-black text-gray-100 font-serif">
            PROFESSOR BLACKWOOD
          </div>
          <p className="text-lg md:text-xl font-bold text-red-400 uppercase tracking-wider">
            THE MURDER YOU JUST SOLVED WAS NOT THE FIRST ONE.
          </p>
          <div className="p-4 bg-red-950/30 border border-red-900/60 rounded text-xs text-gray-300 leading-relaxed font-mono">
            Twenty years ago, Professor Blackwood discovered the truth about the forbidden experiments. He vanished into the foundation walls of this very house. Some say the clocks didn't stop ticking when Sen died—they stopped when Blackwood was buried.
          </div>
          <div className="pt-4">
            <button
              onClick={onResetGame}
              className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-200 font-bold text-xs uppercase tracking-wider rounded transition flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" />
              RESET INVESTIGATION TERMINAL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
