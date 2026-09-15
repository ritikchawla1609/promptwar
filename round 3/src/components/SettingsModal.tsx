import React, { useState } from 'react';
import { GameSettings } from '../utils/gameStorage';
import { sound } from '../utils/audioEngine';
import { vfx } from '../utils/vfxEngine';
import { 
  Sliders, 
  X, 
  Volume2, 
  VolumeX, 
  Eye, 
  ShieldAlert, 
  RotateCcw,
  Sparkles,
  Check
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: GameSettings) => void;
  onResetGame: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onResetGame
}) => {
  const [confirmReset, setConfirmReset] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleVolumeChange = (field: keyof GameSettings, val: number) => {
    const updated = { ...settings, [field]: val };
    onUpdateSettings(updated);

    if (field === 'masterVolume') sound.setMasterVolume(val);
    if (field === 'musicVolume') sound.setMusicVolume(val);
    if (field === 'sfxVolume') sound.setSfxVolume(val);
    if (field === 'voiceVolume') sound.setVoiceVolume(val);

    sound.playTick(false);
  };

  const handleToggle = (field: 'reduceMotion' | 'reduceFlashing') => {
    const updated = { ...settings, [field]: !settings[field] };
    onUpdateSettings(updated);

    if (field === 'reduceMotion') vfx.setReduceMotion(updated.reduceMotion);
    if (field === 'reduceFlashing') vfx.setReduceFlashing(updated.reduceFlashing);

    sound.playTick(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 font-mono select-none animate-fade-in">
      <div className="w-full max-w-xl bg-[#0c0d12] border-2 border-red-900/80 rounded-lg p-6 shadow-[0_0_50px_rgba(229,9,20,0.3)] text-gray-200 glass-panel relative">

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-red-950/60 border border-red-800 flex items-center justify-center text-red-500">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-100 uppercase tracking-wider">
                INVESTIGATION SETTINGS & ACCESSIBILITY
              </h2>
              <p className="text-[11px] text-gray-400">
                Audio Busses, Visual Effects & Tactical Preferences
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              sound.playTick(false);
            }}
            className="p-1.5 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-xs">
          {/* SECTION 1: AUDIO CHANNELS */}
          <div className="space-y-3.5">
            <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-red-500" />
              <span>AUDIO GAIN CHANNELS</span>
            </span>

            {/* Master Volume */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <span>Master Output:</span>
                <span className="font-bold text-amber-400">{Math.round(settings.masterVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={settings.masterVolume}
                onChange={(e) => handleVolumeChange('masterVolume', parseFloat(e.target.value))}
                className="w-full accent-red-600 h-1.5 bg-gray-900 rounded cursor-pointer"
              />
            </div>

            {/* Ambient / Music */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <span>Atmospheric Ambient & Room Tone:</span>
                <span className="font-bold text-amber-400">{Math.round(settings.musicVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={settings.musicVolume}
                onChange={(e) => handleVolumeChange('musicVolume', parseFloat(e.target.value))}
                className="w-full accent-amber-600 h-1.5 bg-gray-900 rounded cursor-pointer"
              />
            </div>

            {/* Sound Effects */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <span>Sound Effects & Tactical Impacts:</span>
                <span className="font-bold text-amber-400">{Math.round(settings.sfxVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={settings.sfxVolume}
                onChange={(e) => handleVolumeChange('sfxVolume', parseFloat(e.target.value))}
                className="w-full accent-cyan-600 h-1.5 bg-gray-900 rounded cursor-pointer"
              />
            </div>

            {/* Suspect Voice */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-gray-300">
                <span>Suspect Voice Dialogue Synthesis:</span>
                <span className="font-bold text-amber-400">{Math.round(settings.voiceVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={settings.voiceVolume}
                onChange={(e) => handleVolumeChange('voiceVolume', parseFloat(e.target.value))}
                className="w-full accent-emerald-600 h-1.5 bg-gray-900 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* SECTION 2: ACCESSIBILITY & VISUAL COMFORT */}
          <div className="pt-3 border-t border-gray-800 space-y-3">
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-cyan-500" />
              <span>VISUAL ACCESSIBILITY CONTROLS</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleToggle('reduceFlashing')}
                className={`p-3 rounded border text-left transition cursor-pointer flex items-start gap-2.5 ${
                  settings.reduceFlashing
                    ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200'
                    : 'bg-black/50 border-gray-800 hover:border-gray-700 text-gray-400'
                }`}
              >
                <div className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 ${
                  settings.reduceFlashing ? 'bg-cyan-600 border-cyan-400 text-black' : 'border-gray-700'
                }`}>
                  {settings.reduceFlashing && <Check className="w-3 h-3" />}
                </div>
                <div>
                  <span className="font-bold block text-xs">Reduce Flashing</span>
                  <span className="text-[10px] text-gray-500">Softens CRT glithes & electrical brownouts</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleToggle('reduceMotion')}
                className={`p-3 rounded border text-left transition cursor-pointer flex items-start gap-2.5 ${
                  settings.reduceMotion
                    ? 'bg-cyan-950/40 border-cyan-500 text-cyan-200'
                    : 'bg-black/50 border-gray-800 hover:border-gray-700 text-gray-400'
                }`}
              >
                <div className={`w-4 h-4 rounded mt-0.5 border flex items-center justify-center shrink-0 ${
                  settings.reduceMotion ? 'bg-cyan-600 border-cyan-400 text-black' : 'border-gray-700'
                }`}>
                  {settings.reduceMotion && <Check className="w-3 h-3" />}
                </div>
                <div>
                  <span className="font-bold block text-xs">Reduce Motion</span>
                  <span className="text-[10px] text-gray-500">Suppresses screen shake & camera vibration</span>
                </div>
              </button>
            </div>
          </div>

          {/* SECTION 3: RESTART INVESTIGATION (SAFE RESET) */}
          <div className="pt-3 border-t border-gray-800 space-y-2">
            {!confirmReset ? (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="w-full p-2.5 rounded bg-red-950/30 hover:bg-red-950/70 border border-red-900/60 hover:border-red-600 text-red-300 font-bold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-red-400" />
                <span>START NEW CASE // PURGE CURRENT CASE PROGRESS</span>
              </button>
            ) : (
              <div className="p-3 rounded bg-red-950/80 border border-red-500 space-y-2">
                <p className="text-red-200 text-xs font-bold flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  CONFIRM NEW CASE INITIALIZATION:
                </p>
                <p className="text-red-300 text-[11px]">
                  This will wipe all unlocked clues, objectives, and deductions from browser storage and restart Case #17-B from Phase 0.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setConfirmReset(false);
                      onClose();
                      onResetGame();
                      sound.playBlackout();
                    }}
                    className="px-3.5 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded transition cursor-pointer text-xs"
                  >
                    YES, RESTART CASE
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmReset(false)}
                    className="px-3.5 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition cursor-pointer text-xs"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-800 mt-5 flex justify-end">
          <button
            type="button"
            onClick={() => {
              onClose();
              sound.playTick(false);
            }}
            className="px-4 py-2 bg-red-900 hover:bg-red-800 text-white text-xs font-bold rounded transition cursor-pointer"
          >
            CONFIRM & CLOSE [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};
