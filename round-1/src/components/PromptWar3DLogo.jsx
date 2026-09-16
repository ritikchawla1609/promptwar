import React, { useState, useRef, useEffect } from 'react';
import { parasiteAudio } from '../utils/parasiteAudio';

// PROMPT WAR OFFICIAL 3D LOGO COMPONENT
// Features real-time perspective tilt, dual-core ambient glow (cyan + crimson),
// dynamic lighting sheen, and depth layers.
export default function PromptWar3DLogo({
  variant = 'hero', // 'hero' | 'medium' | 'compact'
  className = '',
  enableSound = true,
  onClick = null,
}) {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });

  // Handle smooth 3D tilt tracking relative to container center
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation angles (damped for premium feel)
    const maxRot = variant === 'compact' ? 8 : 16;
    const rotY = (mouseX / (rect.width / 2)) * maxRot;
    const rotX = -(mouseY / (rect.height / 2)) * maxRot;

    setRotate({ x: rotX, y: rotY });

    // Calculate light sheen coordinates
    const sheenX = ((e.clientX - rect.left) / rect.width) * 100;
    const sheenY = ((e.clientY - rect.top) / rect.height) * 100;
    setSheenPos({ x: sheenX, y: sheenY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (enableSound) {
      try {
        parasiteAudio.playTick();
      } catch (e) {}
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  // Dimensions based on variant
  const sizeClasses = {
    hero: 'max-w-2xl w-full py-6',
    medium: 'max-w-md w-full py-3',
    compact: 'max-w-[200px] w-full py-1',
  }[variant];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative select-none flex items-center justify-center perspective-[1200px] cursor-pointer ${sizeClasses} ${className}`}
      style={{ perspective: '1200px' }}
    >
      {/* 3D Transform Wrapper */}
      <div
        className="relative w-full transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) ${
            isHovered ? 'scale3d(1.03, 1.03, 1.03)' : 'scale3d(1, 1, 1)'
          }`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Layer 1: Dual-Core Ambient Lighting (Electric Blue on Left, Crimson Red on Right) */}
        <div
          className={`absolute -inset-4 pointer-events-none transition-opacity duration-700 ${
            isHovered ? 'opacity-90' : 'opacity-60'
          }`}
          style={{ transform: 'translateZ(-30px)' }}
        >
          {/* Left Electric Cyan/Blue Glow */}
          <div
            className="absolute top-1/2 left-[12%] -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0, 240, 255, 0.45) 0%, rgba(0, 150, 255, 0.15) 60%, transparent 80%)',
              transform: `translate(${rotate.y * 1.5}px, ${-rotate.x * 1.5}px)`,
            }}
          />

          {/* Right Laser Red/Crimson Glow */}
          <div
            className="absolute top-1/2 right-[12%] translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255, 42, 85, 0.45) 0%, rgba(220, 20, 60, 0.15) 60%, transparent 80%)',
              transform: `translate(${rotate.y * 1.5}px, ${-rotate.x * 1.5}px)`,
            }}
          />
        </div>

        {/* Layer 2: Deep Ground Shadow */}
        <div
          className="absolute inset-0 bg-black/60 blur-xl pointer-events-none rounded-2xl"
          style={{
            transform: `translateZ(-20px) translate(${rotate.y * 2}px, ${-rotate.x * 2 + 10}px)`,
          }}
        />

        {/* Layer 3: The Main Official Logo Graphic */}
        <div
          className="relative z-10 w-full overflow-hidden rounded-xl border border-white/[0.08] bg-black/40 backdrop-blur-sm shadow-2xl transition-all"
          style={{
            transform: 'translateZ(20px)',
            boxShadow: isHovered
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.25), 0 0 35px rgba(255, 42, 85, 0.25)'
              : '0 15px 30px -10px rgba(0, 0, 0, 0.6)',
          }}
        >
          <img
            src="/prompt-war-logo.png"
            alt="PROMPT WAR — Tech Tatva Club, Chandigarh University"
            className="w-full h-auto object-contain block drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            loading="eager"
          />

          {/* Layer 4: Dynamic Holographic Light Sheen */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `radial-gradient(circle at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%)`,
              mixBlendMode: 'overlay',
            }}
          />

          {/* Micro High-Tech Frame Accents */}
          <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-400/80 pointer-events-none" />
          <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-red-500/80 pointer-events-none" />
          <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-cyan-400/80 pointer-events-none" />
          <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-red-500/80 pointer-events-none" />
        </div>

        {/* Subtle Floating Interactive Badge */}
        {variant === 'hero' && (
          <div
            className="mt-3 flex items-center justify-center gap-3 font-mono text-[10px] text-bone-400 uppercase tracking-widest pointer-events-none"
            style={{ transform: 'translateZ(30px)' }}
          >
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              TECH TATVA CLUB
            </span>
            <span className="text-bone-600">•</span>
            <span className="text-bone-300">CHANDIGARH UNIVERSITY</span>
            <span className="text-bone-600">•</span>
            <span className="text-red-400">OFFICIAL EVENT ARENA</span>
          </div>
        )}
      </div>
    </div>
  );
}
