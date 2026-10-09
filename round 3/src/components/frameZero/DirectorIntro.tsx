import React, { useState } from 'react';
import { ArrowRight, Film, Clapperboard, HelpCircle, Shield, Clock } from 'lucide-react';
import { MISSIONS } from '../../data/missions';
import { SceneArtwork } from './SceneArtwork';
import { DirectorBriefingModal } from './DirectorBriefingModal';
import {
  AuthoritativeClockState,
  calculateSecondsUntilStart,
  formatSecondsToMMSS
} from '../../utils/authoritativeClock';

interface DirectorIntroProps {
  onEnterStudio: () => void;
  directorName: string;
  onDirectorNameChange: (name: string) => void;
  serverClock?: AuthoritativeClockState | null;
  remainingSeconds?: number;
  serverOffset?: number;
}

export const DirectorIntro: React.FC<DirectorIntroProps> = ({
  onEnterStudio,
  directorName,
  onDirectorNameChange,
  serverClock = null,
  remainingSeconds = 720,
  serverOffset = 0,
}) => {
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);
  const showcaseMission = MISSIONS[0]; // The Last Promise showcase

  const secondsUntilStart = serverClock ? calculateSecondsUntilStart(serverClock, serverOffset) : 0;
  const isBriefingPhase = serverClock?.status === 'BRIEFING' || serverClock?.status === 'SCHEDULED';
  const isPaused = serverClock?.status === 'PAUSED';
  const isCompleted = serverClock?.status === 'COMPLETED';

  const isGated = isBriefingPhase || isPaused || isCompleted;

  let buttonText = 'Enter the studio';
  if (isBriefingPhase) {
    buttonText = `WAITING FOR OFFICIAL START (${formatSecondsToMMSS(secondsUntilStart)})`;
  } else if (isPaused) {
    buttonText = 'ROUND 3 PAUSED BY ORGANIZER';
  } else if (isCompleted) {
    buttonText = 'ROUND 3 CONCLUDED';
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isGated) return;
    onEnterStudio();
  };

  return (
    <div className="min-h-screen bg-[#090c12] text-[#e8e4db] flex flex-col justify-between px-6 sm:px-12 lg:px-24 py-8 lg:py-16 selection:bg-amber-500/25">
      {/* Top Studio Identification */}
      <header className="flex items-center justify-between border-b border-stone-800/80 pb-6">
        <div className="flex items-center space-x-3">
          <Clapperboard className="w-5 h-5 text-amber-400" />
          <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">
            Prompt War · Round 03
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={() => setIsBriefingOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700/80 hover:border-amber-400/60 text-xs font-mono text-stone-300 hover:text-amber-300 transition-all shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>How to play</span>
          </button>
          <div className="hidden sm:block text-xs font-mono text-stone-500 tracking-wider">
            STUDIO TRIAL // PRODUCTION ZERO
          </div>
        </div>
      </header>

      {/* Main Spacious Hero */}
      <main className="my-auto py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
        {/* Left Column: Briefing & Director Name Input */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded">
              <span>Scene Director Assessment</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-white font-medium leading-tight">
              FRAME ZERO
            </h1>
            <p className="text-xl sm:text-2xl text-stone-400 font-serif italic tracking-wide">
              The Director&apos;s Trial
            </p>
          </div>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-sans max-w-xl">
            Every great scene begins with a vision. Turn a moment into a cinematic experience through the power of precise direction.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 pt-2 max-w-md">
            <div>
              <label 
                htmlFor="directorName" 
                className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-2.5"
              >
                Director Designation / Team Pass
              </label>
              <input
                id="directorName"
                type="text"
                value={directorName}
                onChange={(e) => onDirectorNameChange(e.target.value)}
                placeholder="Enter director name or squad code..."
                className="w-full bg-[#10141e] border border-stone-700 text-stone-100 px-4 py-3.5 rounded-lg text-base focus:outline-none focus:border-amber-400 transition-colors placeholder:text-stone-600 font-sans"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isGated}
                className={`flex-1 font-semibold px-6 py-4 rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 ${
                  isGated
                    ? 'bg-stone-800 text-stone-500 cursor-not-allowed border border-stone-700/50'
                    : 'bg-[#e5a93c] hover:bg-[#d89b2f] text-stone-950 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 active:translate-y-0.5'
                }`}
              >
                <span className="text-sm sm:text-base tracking-wide font-sans">{buttonText}</span>
                {!isGated && <ArrowRight className="w-5 h-5 text-stone-950" />}
              </button>

              <button
                type="button"
                onClick={() => setIsBriefingOpen(true)}
                className="px-5 py-4 rounded-lg bg-stone-900/80 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-amber-300 flex items-center justify-center space-x-2 text-sm font-mono transition-colors"
              >
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>Director Manual</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Hero Scene Illustration */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-4">
          <SceneArtwork
            mission={showcaseMission}
            score={88}
            aspectRatio="16:9"
            showSlateOverlay={true}
            takeNumber={1}
            className="shadow-2xl border-stone-800"
          />
          <div className="text-center font-mono text-xs text-stone-500">
            Showcase Still: {showcaseMission.title} ({showcaseMission.japaneseTitle})
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
        <span>Frame Zero // Autonomous Cinematic Directing Suite</span>
        <span>Authoritative Synchronized Engine · Zero Inference Cost</span>
      </footer>

      {/* Non-destructive Briefing Modal */}
      <DirectorBriefingModal
        isOpen={isBriefingOpen}
        isModal={true}
        onClose={() => setIsBriefingOpen(false)}
        serverClock={serverClock}
        remainingSeconds={remainingSeconds}
      />
    </div>
  );
};
