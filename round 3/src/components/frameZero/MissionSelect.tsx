import React, { useState } from 'react';
import { Mission } from '../../types/frameZero';
import { MISSIONS } from '../../data/missions';
import { SceneBriefModal } from './SceneBriefModal';
import { Clapperboard, ArrowLeft, Clock, Film, Award, BookOpen } from 'lucide-react';

interface MissionSelectProps {
  directorName: string;
  onSelectMission: (mission: Mission) => void;
  onBackToIntro: () => void;
}

export const MissionSelect: React.FC<MissionSelectProps> = ({
  directorName,
  onSelectMission,
  onBackToIntro
}) => {
  const [modalMission, setModalMission] = useState<Mission | null>(null);

  const getDifficultyColor = (stars: number) => {
    switch (stars) {
      case 2: return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 3: return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 4: return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 py-8 px-4 sm:px-6 lg:px-12 flex flex-col justify-between selection:bg-amber-400/20 selection:text-amber-200">
      <div className="max-w-7xl mx-auto w-full">
        {/* Navigation & Header Bar */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-slate-800/80 gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToIntro}
              className="p-2.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white transition-all text-xs font-mono flex items-center space-x-2 group"
              title="Return to Slate"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>SLATE</span>
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                  FRAME ZERO · ROUND 03
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white mt-1">
                Production Scene Archive
              </h1>
            </div>
          </div>

          {/* Director Badge */}
          <div className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 shadow-sm self-start sm:self-auto">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 font-serif font-bold text-sm">
              {directorName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">DIRECTOR IN CHAIR</div>
              <div className="text-xs font-medium text-slate-200">{directorName}</div>
            </div>
          </div>
        </header>

        {/* Overview Prompt */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="text-xs uppercase font-mono tracking-wider text-amber-400 flex items-center space-x-2">
              <Clapperboard className="w-3.5 h-3.5" />
              <span>THE DIRECTOR'S TRIAL OBJECTIVE</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Select an anime production brief below. As the director, you must convey the scene’s subjects, emotion, environment, lighting, and composition through precise prompt direction without narrative contradictions.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-slate-400 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div>
              <div className="text-slate-400">SCENES</div>
              <div className="text-white text-base font-semibold">4 PRODUCTIONS</div>
            </div>
            <div>
              <div className="text-slate-400">SCORING</div>
              <div className="text-amber-400 text-base font-semibold">100 PTS DETERMINISTIC</div>
            </div>
          </div>
        </div>

        {/* 4 Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MISSIONS.map((mission) => {
            const diffClass = getDifficultyColor(mission.difficultyStars);

            return (
              <div
                key={mission.id}
                className="group relative flex flex-col rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                {/* Visual Header Banner */}
                <div 
                  className="h-32 sm:h-36 relative p-5 flex flex-col justify-between overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${mission.palette.background} 0%, ${mission.palette.secondary} 100%)`
                  }}
                >
                  {/* Subtle Japanese Kanji Watermark */}
                  <div className="absolute -right-4 -bottom-6 text-7xl sm:text-8xl font-serif text-white/5 pointer-events-none select-none tracking-tighter">
                    {mission.japaneseTitle}
                  </div>

                  {/* Ambient glowing orb */}
                  <div 
                    className="absolute top-0 right-1/4 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-40 transition-opacity group-hover:opacity-60"
                    style={{ backgroundColor: mission.palette.primary }}
                  />

                  {/* Top Bar inside banner */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-slate-300 flex items-center space-x-1.5">
                      <Film className="w-3 h-3 text-amber-400" />
                      <span>{mission.japaneseTitle}</span>
                    </span>

                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full border backdrop-blur-md flex items-center space-x-1 ${diffClass}`}>
                      <Award className="w-3 h-3" />
                      <span>{mission.difficulty}</span>
                    </span>
                  </div>

                  {/* Bottom of Banner */}
                  <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide drop-shadow-md">
                      {mission.title}
                    </h2>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {mission.tagline}
                    </p>

                    {/* Meta Specifications */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>TIME BUDGET</span>
                        </div>
                        <div className="font-medium text-slate-200">{mission.durationMinutes} Minutes</div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                          <Clapperboard className="w-3 h-3 text-sky-400" />
                          <span>MAX TAKES</span>
                        </div>
                        <div className="font-medium text-slate-200">{mission.maxAttempts} Takes Allowed</div>
                      </div>
                    </div>

                    {/* Color Palette Swatches */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
                        COLOR PALETTE HARMONY
                      </div>
                      <div className="flex items-center space-x-2">
                        {Object.entries(mission.palette).map(([key, hex]) => (
                          <div
                            key={key}
                            className="group/swatch relative flex items-center justify-center"
                            title={`${key}: ${hex}`}
                          >
                            <span
                              className="w-6 h-6 rounded-md border border-white/20 transition-transform group-hover/swatch:scale-110 shadow-sm"
                              style={{ backgroundColor: hex }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setModalMission(mission)}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white transition-colors border border-slate-700/60 flex items-center justify-center space-x-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      <span>Read Brief</span>
                    </button>

                    <button
                      onClick={() => onSelectMission(mission)}
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-medium uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all font-mono shadow-md shadow-amber-500/10 active:scale-[0.98] flex items-center justify-center space-x-1"
                    >
                      <span>Direct Scene</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-slate-400 font-mono">
        FRAME ZERO · THE DIRECTOR'S TRIAL // PROMPT WAR ROUND 03 · STUDIO ENGINE v2.0
      </footer>

      {/* Modal Dialog */}
      <SceneBriefModal
        mission={modalMission}
        isOpen={Boolean(modalMission)}
        onClose={() => setModalMission(null)}
        onConfirm={(mission) => {
          setModalMission(null);
          onSelectMission(mission);
        }}
      />
    </div>
  );
};
