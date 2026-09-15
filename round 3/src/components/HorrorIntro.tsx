import React, { useState, useEffect } from 'react';
import { sound } from '../utils/audioEngine';
import { Volume2, VolumeX, ShieldAlert, SkipForward } from 'lucide-react';

interface HorrorIntroProps {
  onComplete: () => void;
  audioMuted: boolean;
  onToggleMute: () => void;
}

export const HorrorIntro: React.FC<HorrorIntroProps> = ({
  onComplete,
  audioMuted,
  onToggleMute
}) => {
  const [step, setStep] = useState<number>(0);
  const [activeTime, setActiveTime] = useState<string>('');
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const startSequence = () => {
    setHasStarted(true);
    sound.playTick(true);
    setStep(1);
  };

  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    if (step === 1) {
      // Step 1: First Tick
      sound.playTick(true);
      timeoutId = setTimeout(() => {
        setStep(2);
      }, 3500);
    } else if (step === 2) {
      // Step 2: Second Tick
      sound.playTick(true);
      timeoutId = setTimeout(() => {
        setStep(3);
      }, 3500);
    } else if (step === 3) {
      // Step 3: Distorted Voice Line 1
      sound.speakDistorted("If you're hearing this... I'm already dead.", () => {
        timeoutId = setTimeout(() => {
          setStep(4);
        }, 1500);
      });
    } else if (step === 4) {
      // Step 4: Distorted Voice Line 2
      sound.speakDistorted("Don't trust the clocks.", () => {
        timeoutId = setTimeout(() => {
          setStep(5);
        }, 1200);
      });
    } else if (step === 5) {
      // Step 5: Rapid Flashing Times
      sound.playGlitchStatic(0.8);
      const times = ['11:47 PM', '12:03 AM', '12:13 AM', '12:17 AM'];
      let idx = 0;
      const flashInterval = setInterval(() => {
        if (idx < times.length) {
          setActiveTime(times[idx]);
          sound.playTick(false);
          idx++;
        } else {
          clearInterval(flashInterval);
          setStep(6);
        }
      }, 650);

      return () => clearInterval(flashInterval);
    } else if (step === 6) {
      // Step 6: ONE OF THESE TIMES NEVER HAPPENED
      sound.playHorrorStinger();
      timeoutId = setTimeout(() => {
        setStep(7);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [step, hasStarted]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 overflow-hidden crt-overlay crt-vignette">
      {/* Top right quick controls */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-50">
        <button
          onClick={onToggleMute}
          className="p-2 rounded-lg border border-gray-800 bg-black/60 hover:border-gray-700 text-gray-400 hover:text-white transition cursor-pointer"
          title={audioMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <button
          onClick={onComplete}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-800 bg-black/60 hover:border-gray-700 text-xs text-gray-400 hover:text-white transition cursor-pointer"
        >
          <SkipForward className="w-3.5 h-3.5" />
          Skip Intro
        </button>
      </div>

      {/* Intro sequence screens */}
      {!hasStarted ? (
        <div className="relative z-30 text-center max-w-lg space-y-6 animate-pulse-slow">
          <div className="inline-block p-3.5 border border-red-950/80 rounded-2xl bg-red-950/20 text-red-500 mb-2 shadow-inner">
            <ShieldAlert className="w-10 h-10 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold tracking-wider text-gray-100 font-sans">
              Prompt War 2.0
            </h1>
            <p className="text-sm text-red-400 tracking-wide font-medium">
              The House That Remembers
            </p>
          </div>
          <p className="text-xs text-gray-400 font-sans leading-relaxed">
            Click below to initialize the atmospheric audio & investigative sequence.
          </p>
          <div>
            <button
              onClick={startSequence}
              className="cursor-pointer relative z-30 px-8 py-3 bg-red-950/90 hover:bg-red-900 border border-red-700/60 text-white font-medium text-xs tracking-wider rounded-lg transition shadow-lg hover:shadow-red-900/40 uppercase"
            >
              Initialize Investigation ▶
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-30 w-full max-w-3xl flex flex-col items-center justify-center min-h-[60vh] text-center select-none">
          {/* Step 1 & 2: Darkness and Ticks */}
          {(step === 1 || step === 2) && (
            <div className="space-y-4">
              <span className="text-6xl text-red-700 animate-ping inline-block">·</span>
              <p className="text-xs text-gray-700 tracking-widest uppercase font-mono">
                {step === 1 ? 'Tick.' : 'Tick.'}
              </p>
            </div>
          )}

          {/* Step 3: Dying voice */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-2xl md:text-3xl text-gray-200 italic tracking-wider font-serif">
                "If you're hearing this... I'm already dead."
              </p>
            </div>
          )}

          {/* Step 4: Warning */}
          {step === 4 && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-2xl md:text-3xl text-red-500 font-semibold tracking-wider">
                "Don't trust the clocks."
              </p>
            </div>
          )}

          {/* Step 5: Rapid Flash of Times */}
          {step === 5 && (
            <div className="space-y-4">
              <p className="text-6xl md:text-8xl font-black text-red-500 tracking-tight font-mono">
                {activeTime}
              </p>
            </div>
          )}

          {/* Step 6: Warning statement */}
          {step === 6 && (
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-red-400 tracking-tight">
                One of these times never happened.
              </h2>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">
                Which timestamp is fabricated?
              </p>
            </div>
          )}

          {/* Step 7: Mission Briefing */}
          {step === 7 && (
            <div className="w-full max-w-xl p-6 glass-panel border border-red-500/30 rounded-xl shadow-2xl text-left space-y-4 text-gray-200">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2.5">
                <span className="text-xs text-red-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
                  Operation: Blackwood Protocol
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/60 border border-red-800/40 text-red-300 font-mono font-medium">
                  Case File 17-B
                </span>
              </div>

              {/* Tactical Status Cards */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white/[0.02] rounded-lg border border-gray-800/60">
                  <span className="text-[10px] text-gray-500 block uppercase font-medium">Primary Target</span>
                  <span className="text-white font-semibold block mt-0.5">Prof. Vikram Sen</span>
                  <span className="text-red-400 font-mono font-medium block text-[10px] mt-0.5">STATUS: DECEASED</span>
                </div>
                <div className="p-3 bg-white/[0.02] rounded-lg border border-gray-800/60">
                  <span className="text-[10px] text-gray-500 block uppercase font-medium">Location</span>
                  <span className="text-white font-semibold block mt-0.5">Study Room 17-B</span>
                  <span className="text-amber-400 font-mono font-medium block text-[10px] mt-0.5">BREACH: DEADBOLT SEALED</span>
                </div>
              </div>

              <div className="p-3 bg-red-950/15 border-l-2 border-red-500 rounded text-xs space-y-1">
                <p className="text-red-400 font-semibold uppercase tracking-wider text-[11px]">Tactical Intelligence:</p>
                <p className="text-gray-300">The house isn't hiding evidence. The house is actively fabricating it.</p>
                <p className="text-amber-300/90 font-medium">Evidence timestamps were engineered BEFORE the murder.</p>
              </div>

              <button
                onClick={() => {
                  sound.playRadioChirp();
                  sound.playHitmarker();
                  onComplete();
                }}
                className="cursor-pointer w-full py-3.5 bg-red-950/90 hover:bg-red-900 border border-red-700/60 text-white font-medium text-xs tracking-wider rounded-lg transition shadow-lg flex items-center justify-center gap-2 uppercase"
              >
                <span>⚡ Deploy Investigation Squad ▶</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Subtle bottom footer */}
      <div className="absolute bottom-4 text-[10px] text-gray-600 font-mono tracking-wider uppercase">
        Blackwood Archive Security Mainframe • Node 17-B
      </div>
    </div>
  );
};
