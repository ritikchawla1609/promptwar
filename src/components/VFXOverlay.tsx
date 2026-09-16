import React, { useEffect, useState } from 'react';
import { vfx, VFXEvent } from '../utils/vfxEngine';

export const VFXOverlay: React.FC = () => {
  const [shakeClass, setShakeClass] = useState<string>('');
  const [flickerOpacity, setFlickerOpacity] = useState<number>(0);
  const [glitchActive, setGlitchActive] = useState<boolean>(false);
  const [evidenceFocusActive, setEvidenceFocusActive] = useState<boolean>(false);
  const [traumaPulseActive, setTraumaPulseActive] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = vfx.subscribe((event: VFXEvent) => {
      const duration = event.durationMs || 500;

      switch (event.type) {
        case 'screen_shake':
          if (!vfx.getReduceMotion()) {
            setShakeClass('animate-shake');
            setTimeout(() => setShakeClass(''), duration);
          }
          break;

        case 'light_flicker':
          if (!vfx.getReduceFlashing()) {
            setFlickerOpacity(event.intensity || 0.4);
            const flickerInterval = setInterval(() => {
              setFlickerOpacity((prev) => (prev > 0 ? 0 : (event.intensity || 0.4)));
            }, 80);
            setTimeout(() => {
              clearInterval(flickerInterval);
              setFlickerOpacity(0);
            }, duration);
          }
          break;

        case 'crt_glitch':
          setGlitchActive(true);
          setTimeout(() => setGlitchActive(false), duration);
          break;

        case 'evidence_focus':
          setEvidenceFocusActive(true);
          setTimeout(() => setEvidenceFocusActive(false), duration);
          break;

        case 'trauma_shock':
          setTraumaPulseActive(true);
          setTimeout(() => setTraumaPulseActive(false), duration);
          break;

        default:
          break;
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-40 overflow-hidden transition-all duration-300 ${shakeClass}`}
      aria-hidden="true"
    >
      {/* Light Flicker / Electrical Brownout Overlay */}
      {flickerOpacity > 0 && (
        <div 
          className="absolute inset-0 bg-black transition-opacity pointer-events-none"
          style={{ opacity: flickerOpacity }}
        />
      )}

      {/* CRT Scanline Glitch Burst */}
      {glitchActive && (
        <div className="absolute inset-0 bg-cyan-950/20 mix-blend-screen pointer-events-none flex flex-col justify-between opacity-80">
          <div className="w-full h-1 bg-cyan-400/40 animate-pulse" />
          <div className="w-full h-1 bg-red-500/30" />
          <div className="w-full h-1 bg-cyan-300/40" />
        </div>
      )}

      {/* Evidence Focus Cinematic Vignette Flash */}
      {evidenceFocusActive && (
        <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(234,179,8,0.3)] animate-fade-in pointer-events-none" />
      )}

      {/* Trauma Shock Peripheral Vignette */}
      {traumaPulseActive && (
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(220,38,38,0.5)] animate-pulse pointer-events-none" />
      )}

      {/* Ambient Floating Dust Motes in Manor Darkness */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <span className="absolute w-1 h-1 bg-amber-200 rounded-full top-[20%] left-[15%] animate-pulse" style={{ animationDuration: '6s' }} />
        <span className="absolute w-1 h-1 bg-amber-100 rounded-full top-[65%] left-[80%] animate-pulse" style={{ animationDuration: '8s' }} />
        <span className="absolute w-1.5 h-1.5 bg-gray-400/40 rounded-full top-[40%] left-[60%] animate-pulse" style={{ animationDuration: '7s' }} />
        <span className="absolute w-1 h-1 bg-amber-300/50 rounded-full top-[85%] left-[30%] animate-pulse" style={{ animationDuration: '9s' }} />
      </div>
    </div>
  );
};
