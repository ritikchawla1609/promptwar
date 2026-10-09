import React from 'react';
import { Mission } from '../../types/frameZero';
import { X, Clapperboard, Sparkles, Compass, Eye, ShieldAlert, Clock, Layers } from 'lucide-react';

interface SceneBriefModalProps {
  mission: Mission | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (mission: Mission) => void;
}

export const SceneBriefModal: React.FC<SceneBriefModalProps> = ({
  mission,
  isOpen,
  onClose,
  onConfirm
}) => {
  if (!isOpen || !mission) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        style={{
          boxShadow: `0 25px 50px -12px ${mission.palette.primary}22`
        }}
      >
        {/* Top Header / Slate Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: mission.palette.primary }} />
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
              DIRECTOR BRIEF · {mission.japaneseTitle}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            title="Close brief"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Title & Tagline */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                {mission.title}
              </h2>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-slate-800 border border-slate-700 text-slate-300">
                {mission.difficulty} (★ {mission.difficultyStars}/4)
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {mission.durationMinutes}m duration
              </span>
            </div>
            <p className="text-sm text-slate-400 font-light italic">
              "{mission.tagline}"
            </p>
          </div>

          {/* Synopsis */}
          <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-300 text-sm leading-relaxed">
            <p className="font-medium text-amber-200/90 mb-1 text-xs uppercase tracking-wider font-mono">
              The Vision / Story Context
            </p>
            {mission.brief.synopsis}
          </div>

          {/* Directorial Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Required Scene Parameters
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex items-center space-x-2 text-xs font-mono font-medium text-amber-400 mb-1">
                  <Clapperboard className="w-3.5 h-3.5" />
                  <span>ACTION & SUBJECT</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  {mission.brief.actionRequirement}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex items-center space-x-2 text-xs font-mono font-medium text-rose-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>EMOTIONAL RESONANCE</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  {mission.brief.emotionRequirement}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex items-center space-x-2 text-xs font-mono font-medium text-sky-400 mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>ENVIRONMENT & SETTING</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  {mission.brief.environmentRequirement}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <div className="flex items-center space-x-2 text-xs font-mono font-medium text-emerald-400 mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>LIGHTING & COLOR CONTRAST</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  {mission.brief.lightingRequirement}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="flex items-center space-x-2 text-xs font-mono font-medium text-indigo-400 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>CINEMATIC COMPOSITION & CAMERA</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                {mission.brief.compositionRequirement}
              </p>
            </div>
          </div>

          {/* Director Advisory */}
          <div className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200/80 flex items-start space-x-3">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-amber-300">Directorial Advisory:</strong> Points are scored across scene elements (35 pts), emotion (20 pts), composition (20 pts), lighting (15 pts), and narrative consistency (10 pts). Avoid conflicting visual states (e.g. bright midday sun during a midnight storm).
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(mission)}
            className="px-6 py-2.5 rounded-xl text-xs font-medium uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md shadow-amber-500/20 active:scale-[0.99] flex items-center space-x-2"
          >
            <span>Take Director's Chair</span>
            <span className="font-mono">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
