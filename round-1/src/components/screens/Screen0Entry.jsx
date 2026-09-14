import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { ArrowRight } from 'lucide-react';
import PromptWar3DLogo from '../PromptWar3DLogo';

export default function Screen0Entry({ onProceed }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Cinematic timed reveals for typography
    const t1 = setTimeout(() => setStep(1), 300);   // PROMPT appears
    const t2 = setTimeout(() => {
      setStep(2);
      parasiteAudio.playInfect();
    }, 1100);  // PARASITE appears
    const t3 = setTimeout(() => setStep(3), 2000);  // SEE. STEAL. EVOLVE.
    const t4 = setTimeout(() => setStep(4), 2800);  // Philosophy copy & Enter button

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleEnter = () => {
    parasiteAudio.playSubDrop();
    onProceed();
  };

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-8 sm:py-12 max-w-7xl mx-auto select-none">
      {/* Top Metadata Header */}
      <div className="flex items-center justify-between font-mono text-[11px] text-bone-400 uppercase tracking-widest border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 bg-acid-lime" />
          <span>TECH TATVA CLUB // CHANDIGARH UNIVERSITY</span>
        </div>
        <span className="text-acid-lime font-bold">ROUND 01</span>
      </div>

      {/* Center: Hero Grid with 3D Interactive Logo + Editorial Typography */}
      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Col: Typographic Reveal & Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-bone-400 mb-3 block">
            ROUND 01 PROTOCOL
          </span>

          <div className="flex flex-col leading-none font-display font-black tracking-tightest">
            {/* Word 1: PROMPT */}
            <span
              className={`text-6xl sm:text-7xl md:text-8xl text-bone-100 transition-all duration-700 ease-out ${
                step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              PROMPT
            </span>

            {/* Word 2: PARASITE */}
            <div
              className={`text-6xl sm:text-7xl md:text-8xl text-acid-lime flex items-center gap-4 transition-all duration-1000 ease-out ${
                step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <span>PARASITE</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 bg-acid-lime shrink-0 hidden sm:inline-block" />
            </div>
          </div>

          {/* Tagline: SEE. STEAL. EVOLVE. */}
          <div
            className={`mt-6 flex flex-wrap items-center gap-3 sm:gap-5 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-bone-300 transition-all duration-700 ${
              step >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-white font-bold">SEE.</span>
            <span className="text-bone-500">—</span>
            <span className="text-white font-bold">STEAL.</span>
            <span className="text-bone-500">—</span>
            <span className="text-acid-lime font-bold">EVOLVE.</span>
          </div>

          {/* Editorial Narrative Copy */}
          <div
            className={`mt-8 max-w-lg space-y-2.5 font-sans text-xs sm:text-sm text-bone-300 leading-relaxed transition-all duration-700 ${
              step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-acid-lime font-bold">
              "YOUR FIRST IDEA IS NEVER YOUR FINAL FORM."
            </p>
            <p className="text-bone-400 font-light">
              Create your baseline solution. Study what opponents conceived in secret. Absorb their tactical advantages. Reconstruct a superior form before time expires.
            </p>
          </div>

          {/* Enter Action Button */}
          <div
            className={`mt-8 transition-all duration-700 ${
              step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleEnter}
              className="editorial-btn group text-xs sm:text-sm px-8 py-3.5"
            >
              <span>ENTER ROUND</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Col: The Interactive 3D Official Event Logo */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <PromptWar3DLogo variant="hero" />
        </div>
      </div>

      {/* Bottom Editorial Footer Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest">
        <span>EXTERNAL AI MODELS PERMITTED // ZERO RESTRICTIONS</span>
        <span>ANONYMOUS REVERSE HOSTING PROTOCOL</span>
      </div>
    </div>
  );
}
