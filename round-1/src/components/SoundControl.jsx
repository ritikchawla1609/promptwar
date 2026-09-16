import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export default function SoundControl() {
  const [muted, setMuted] = useState(soundEngine.isMuted);

  const handleToggle = () => {
    soundEngine.init();
    soundEngine.startAmbientDrone();
    const newMuted = soundEngine.toggleMute();
    setMuted(newMuted);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono tracking-wider transition-all duration-300 ${
        muted
          ? 'bg-charcoal-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
          : 'bg-charcoal-800/80 border-neon-pink/50 text-neon-pink shadow-[0_0_12px_rgba(255,0,127,0.25)]'
      }`}
      title={muted ? 'Unmute Audio & Drone' : 'Mute Audio'}
    >
      {muted ? (
        <VolumeX className="w-4 h-4 text-slate-500" />
      ) : (
        <div className="relative flex items-center">
          <Volume2 className="w-4 h-4 text-neon-pink animate-pulse" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-neon-pink animate-ping" />
        </div>
      )}
      <span>{muted ? 'AUDIO: OFF' : 'AUDIO: ON'}</span>
    </button>
  );
}
