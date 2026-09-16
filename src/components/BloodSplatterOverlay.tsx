import React, { useEffect, useState } from 'react';

interface BloodSplatterOverlayProps {
  activeDrips: boolean;
  intenseTrauma: boolean;
}

interface BloodDrip {
  id: number;
  x: number;
  initialHeight: number;
  speed: number;
}

export const BloodSplatterOverlay: React.FC<BloodSplatterOverlayProps> = ({
  activeDrips,
  intenseTrauma
}) => {
  const [drips, setDrips] = useState<BloodDrip[]>([
    { id: 1, x: 12, initialHeight: 40, speed: 0.8 },
    { id: 2, x: 28, initialHeight: 70, speed: 1.2 },
    { id: 3, x: 45, initialHeight: 35, speed: 0.6 },
    { id: 4, x: 62, initialHeight: 85, speed: 1.5 },
    { id: 5, x: 78, initialHeight: 50, speed: 0.9 },
    { id: 6, x: 91, initialHeight: 65, speed: 1.1 },
  ]);

  const [dripOffsets, setDripOffsets] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  // Animate blood drips slowly sliding down
  useEffect(() => {
    if (!activeDrips) return;
    const interval = setInterval(() => {
      setDripOffsets((prev) =>
        prev.map((offset, idx) => {
          const speed = drips[idx].speed;
          return offset > 140 ? 0 : offset + speed;
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, [activeDrips]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden select-none transition-all duration-200 ${
        intenseTrauma
          ? 'animate-glitch filter contrast-200 saturate-200 scale-105'
          : ''
      }`}
    >
      {/* Intense Red Flash on Trauma */}
      {intenseTrauma && (
        <div className="absolute inset-0 bg-red-950/70 animate-ping pointer-events-none mix-blend-hard-light" />
      )}

      {/* Screen Edge Blood Vignette & Panic Pulse */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          boxShadow: intenseTrauma
            ? 'inset 0 0 180px rgba(220, 20, 60, 0.95), inset 0 0 90px rgba(120, 0, 0, 0.95)'
            : 'inset 0 0 110px rgba(120, 0, 10, 0.65), inset 0 0 45px rgba(50, 0, 0, 0.5)'
        }}
      />

      {/* Dripping Blood from Top Frame */}
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none">
        {drips.map((drip, i) => (
          <div
            key={drip.id}
            className="absolute top-0 flex flex-col items-center"
            style={{ left: `${drip.x}%` }}
          >
            {/* Blood stream trail */}
            <div
              className="w-2 bg-gradient-to-b from-red-950 via-red-900 to-red-800 rounded-b-full shadow-[0_2px_12px_rgba(139,0,0,0.8)]"
              style={{
                height: `${drip.initialHeight + dripOffsets[i]}px`,
                transition: 'height 0.05s linear'
              }}
            />
            {/* Heavy Blood Droplet */}
            <div className="w-3.5 h-4 -mt-1 rounded-full bg-red-900 shadow-[0_0_8px_rgba(255,0,0,0.7)] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
          </div>
        ))}
      </div>

      {/* Corner Blood Splatters */}
      <div className="absolute top-4 left-4 w-48 h-48 opacity-90">
        <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]">
          <path
            d="M 20,20 C 50,40 80,10 110,40 C 130,60 110,90 90,110 C 70,130 30,120 15,90 C 0,60 10,30 20,20 Z 
               M 90,25 C 105,10 115,20 110,35 C 105,45 95,40 90,25 Z 
               M 35,110 C 45,130 25,145 15,135 C 5,125 20,115 35,110 Z"
            fill="url(#visceralBlood)"
          />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 w-56 h-56 opacity-85">
        <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,0,0,0.9)]">
          <path
            d="M 180,180 C 140,150 160,110 130,90 C 100,70 70,110 60,130 C 50,160 90,190 120,195 C 150,200 190,195 180,180 Z 
               M 110,70 C 95,50 110,40 120,55 C 130,70 120,80 110,70 Z"
            fill="url(#visceralBlood)"
          />
        </svg>
      </div>

      {/* Bloody Handprint on Trauma */}
      <div
        className={`absolute bottom-16 left-12 transition-all duration-700 pointer-events-none ${
          intenseTrauma ? 'opacity-90 scale-110' : 'opacity-35 scale-100'
        }`}
      >
        <svg viewBox="0 0 100 130" className="w-32 h-40 filter drop-shadow-[0_0_18px_rgba(139,0,0,0.9)]">
          {/* Palm */}
          <ellipse cx="50" cy="80" rx="26" ry="32" fill="#580005" />
          {/* Thumb */}
          <ellipse cx="20" cy="62" rx="8" ry="17" transform="rotate(-32 20 62)" fill="#580005" />
          {/* Fingers */}
          <ellipse cx="36" cy="30" rx="7" ry="22" fill="#4d0004" />
          <ellipse cx="50" cy="22" rx="7.5" ry="24" fill="#4d0004" />
          <ellipse cx="64" cy="27" rx="7" ry="22" fill="#4d0004" />
          <ellipse cx="78" cy="40" rx="6" ry="18" fill="#4d0004" />
          {/* Blood Slide Smear */}
          <path d="M 38,90 Q 42,125 46,140 Q 52,140 50,110 Z" fill="#3a0003" opacity="0.8" />
        </svg>
      </div>

      {/* SVG Shading Gradient */}
      <svg className="hidden">
        <defs>
          <radialGradient id="visceralBlood" cx="40%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#a30008" />
            <stop offset="55%" stopColor="#570004" />
            <stop offset="100%" stopColor="#1f0001" stopOpacity="0.95" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
