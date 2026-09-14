import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { ArrowRight, UserPlus, CheckCircle2, Key, AlertTriangle, LogOut } from 'lucide-react';
import PromptWar3DLogo from '../PromptWar3DLogo';

export default function Screen0Entry({ onProceed, session = {}, onOpenRegister, onLogoutTeam }) {
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
    if (!session.teamCode) {
      parasiteAudio.playInfect();
      if (onOpenRegister) onOpenRegister('REGISTER');
      return;
    }
    parasiteAudio.playSubDrop();
    onProceed();
  };

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-8 sm:py-12 max-w-7xl mx-auto select-none">
      {/* Top Metadata Header with Official Tech Tatva Club Logo */}
      <div className="flex items-center justify-between font-mono text-[11px] text-bone-400 uppercase tracking-widest border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-3">
          <img
            src="/tech-tatva-logo.png"
            alt="Tech Tatva Club"
            className="h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.5)] hover:scale-105 transition-transform"
          />
          <div className="flex items-center gap-2">
            <span className="font-bold text-bone-100 text-xs sm:text-sm">TECH TATVA CLUB</span>
            <span className="text-bone-600">//</span>
            <span className="text-bone-400 text-xs hidden sm:inline-block">CHANDIGARH UNIVERSITY</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-cyan font-bold">ROUND 01</span>
          <span className="text-bone-600">//</span>
          <span className="text-crimson font-bold">PROMPT PARASITE</span>
        </div>
      </div>

      {/* Center: Hero Grid with 3D Interactive Logo + Editorial Typography */}
      <div className="relative my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Subtle Dual-Core Ambient Atmosphere */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-96 h-96 bg-cyan/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-crimson/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Left Col: Typographic Reveal & Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan font-bold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan animate-ping" />
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
              className={`text-6xl sm:text-7xl md:text-8xl text-cyan flex items-center gap-4 transition-all duration-1000 ease-out drop-shadow-[0_0_25px_rgba(0,240,255,0.4)] ${
                step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <span>PARASITE</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 bg-crimson shrink-0 hidden sm:inline-block shadow-[0_0_15px_rgba(255,42,95,0.8)]" />
            </div>
          </div>

          {/* Tagline: SEE. STEAL. EVOLVE. */}
          <div
            className={`mt-6 flex flex-wrap items-center gap-3 sm:gap-5 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-bone-300 transition-all duration-700 ${
              step >= 3 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="text-cyan font-bold">SEE.</span>
            <span className="text-bone-600">—</span>
            <span className="text-crimson font-bold drop-shadow-[0_0_8px_rgba(255,42,95,0.5)]">STEAL.</span>
            <span className="text-bone-600">—</span>
            <span className="text-cyan font-bold drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">EVOLVE.</span>
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

          {/* Action Buttons: Gated Enter, Registration & Login / Resume */}
          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-700 w-full max-w-lg ${
              step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {session.teamCode ? (
              /* REGISTERED STATE */
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleEnter}
                  className="editorial-btn group text-xs sm:text-sm px-8 py-3.5 bg-cyan border-cyan text-charcoal-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-white"
                >
                  <span>ENTER ROUND 01 ARENA</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenRegister && onOpenRegister('PASS_ISSUED')}
                  className="flex items-center gap-2 px-4 py-3.5 border border-cyan/40 bg-cyan/10 text-cyan text-xs font-mono font-bold hover:border-cyan transition-all"
                  title="Click to view verified Team Pass"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan" />
                  <span>PASS: {session.teamCode}</span>
                </button>

                {onLogoutTeam && (
                  <button
                    onClick={onLogoutTeam}
                    className="p-3 border border-white/[0.1] hover:border-crimson hover:text-crimson text-bone-500 text-xs transition-colors"
                    title="Switch or Logout of current team"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              /* UNREGISTERED STATE: ENTRY BLOCKED UNTIL REGISTERED / LOGGED IN */
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2.5 bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono">
                  <AlertTriangle className="w-4 h-4 shrink-0 animate-pulse" />
                  <span>REGISTRATION REQUIRED: Register or login with your pass to enter Round 01.</span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenRegister && onOpenRegister('REGISTER')}
                    className="editorial-btn text-xs sm:text-sm px-7 py-3.5 bg-cyan border-cyan text-charcoal-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-white flex items-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>REGISTER TEAM TO ENTER</span>
                  </button>

                  <button
                    onClick={() => onOpenRegister && onOpenRegister('LOGIN')}
                    className="editorial-btn-secondary text-xs sm:text-sm px-6 py-3.5 border border-white/[0.2] hover:border-cyan hover:text-cyan flex items-center gap-2"
                    title="If you refreshed or are on another computer, login with your PW-XXXX pass code"
                  >
                    <Key className="w-4 h-4 text-cyan" />
                    <span>LOGIN / RESUME PASS</span>
                  </button>
                </div>
              </div>
            )}
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
