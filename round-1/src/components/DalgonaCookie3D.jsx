import React, { useState, useEffect } from 'react';

export default function DalgonaCookie3D({
  size = 280,
  isCracking = false,
  isBroken = false,
  showHiddenShape = true,
  interactive = true,
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // Subtle 3D mouse parallax
  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -y * 0.08,
      y: x * 0.08,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center select-none"
      style={{
        perspective: '1000px',
        width: size + 60,
        height: size + 60,
      }}
    >
      {/* Outer Gyro Energy Halo */}
      <div 
        className="absolute rounded-full border border-dashed border-amber-500/30 animate-spin"
        style={{
          width: size + 50,
          height: size + 50,
          animationDuration: '28s',
        }}
      />
      
      {/* Reverse Ambient Pulse Ring */}
      <div 
        className="absolute rounded-full border border-dotted border-cyan-500/25 animate-spin"
        style={{
          width: size + 20,
          height: size + 20,
          animationDuration: '18s',
          animationDirection: 'reverse',
        }}
      />

      {/* Warm Caramel/Amber Sugar Particle Backlight */}
      <div 
        className="absolute rounded-full bg-gradient-to-tr from-amber-600/30 via-pink-600/20 to-cyan-500/20 blur-2xl animate-pulse"
        style={{
          width: size * 0.85,
          height: size * 0.85,
        }}
      />

      {/* 3D Cookie Body */}
      <div
        className={`relative rounded-full transition-transform duration-300 ease-out shadow-[0_20px_60px_rgba(0,0,0,0.9)] ${
          isBroken ? 'scale-110 opacity-0' : isCracking ? 'animate-glitch scale-105' : ''
        }`}
        style={{
          width: size,
          height: size,
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(20px)`,
          transformStyle: 'preserve-3d',
          transition: isCracking ? 'all 0.1s' : 'transform 0.25s ease-out',
        }}
      >
        {/* SVG Textured Futuristic Sugar Wafer */}
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full drop-shadow-[0_15px_30px_rgba(217,119,6,0.3)]"
        >
          <defs>
            {/* Caramel Sugar Gradient with Honeycomb Depth */}
            <radialGradient id="cookieSugar" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#D97706" stopOpacity="1" />
              <stop offset="45%" stopColor="#B45309" stopOpacity="1" />
              <stop offset="85%" stopColor="#78350F" stopOpacity="1" />
              <stop offset="100%" stopColor="#451A03" stopOpacity="1" />
            </radialGradient>

            {/* Glowing Edge Bevel */}
            <linearGradient id="bevelEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D97706" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.8" />
            </linearGradient>

            {/* Circuit Glow Filter */}
            <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Rim Bevel */}
          <circle cx="150" cy="150" r="142" fill="url(#cookieSugar)" stroke="url(#bevelEdge)" strokeWidth="6" />

          {/* Sugar Crystal Pores Texture */}
          <circle cx="95" cy="80" r="1.8" fill="#FDE68A" opacity="0.6" />
          <circle cx="180" cy="90" r="2.2" fill="#FDE68A" opacity="0.7" />
          <circle cx="210" cy="160" r="1.5" fill="#FDE68A" opacity="0.5" />
          <circle cx="110" cy="220" r="2" fill="#FDE68A" opacity="0.6" />
          <circle cx="70" cy="160" r="1.7" fill="#FDE68A" opacity="0.5" />
          <circle cx="200" cy="210" r="1.9" fill="#FDE68A" opacity="0.6" />
          <circle cx="140" cy="65" r="1.6" fill="#FDE68A" opacity="0.7" />

          {/* Cyber Circuit Inlays (Futuristic Dalgona Traces) */}
          <path
            d="M 60,150 L 90,150 L 110,130 L 130,130 M 240,150 L 210,150 L 190,170 L 170,170 M 150,60 L 150,90 L 170,110 M 150,240 L 150,210 L 130,190"
            fill="none"
            stroke="#00F0FF"
            strokeWidth="1.8"
            strokeOpacity="0.45"
            strokeDasharray="4 2"
            filter="url(#circuitGlow)"
          />
          <circle cx="90" cy="150" r="2.5" fill="#00F0FF" opacity="0.7" />
          <circle cx="210" cy="150" r="2.5" fill="#00F0FF" opacity="0.7" />
          <circle cx="150" cy="90" r="2.5" fill="#00F0FF" opacity="0.7" />
          <circle cx="150" cy="210" r="2.5" fill="#00F0FF" opacity="0.7" />

          {/* Inner Recessed Carving Groove */}
          <circle
            cx="150"
            cy="150"
            r="82"
            fill="none"
            stroke="#451A03"
            strokeWidth="4"
            opacity="0.9"
          />
          <circle
            cx="150"
            cy="150"
            r="80"
            fill="rgba(30, 27, 75, 0.25)"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />

          {/* Mysterious Hidden Geometric Shape in the Core */}
          {showHiddenShape && (
            <g className={`transition-all duration-700 ${isCracking ? 'animate-pulse scale-110' : ''}`}>
              {/* Cyber Star/Umbrella Composite Core Emblem */}
              <polygon
                points="150,95 165,130 205,135 175,160 185,200 150,180 115,200 125,160 95,135 135,130"
                fill="none"
                stroke={isCracking ? '#FF007F' : '#00F0FF'}
                strokeWidth="3.5"
                filter="url(#circuitGlow)"
                className="transition-colors duration-500"
              />
              <circle cx="150" cy="150" r="10" fill="none" stroke="#FF007F" strokeWidth="2" />
              <circle cx="150" cy="150" r="3" fill="#00F0FF" className="animate-ping" style={{ transformOrigin: '150px 150px' }} />
            </g>
          )}

          {/* Digital Fracture Cracks when isCracking */}
          {isCracking && (
            <g>
              <path
                d="M 150,150 L 90,80 L 40,70 M 150,150 L 220,90 L 270,110 M 150,150 L 160,230 L 140,280 M 150,150 L 80,210 L 30,230"
                fill="none"
                stroke="#FF007F"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#circuitGlow)"
                className="animate-pulse"
              />
              <path
                d="M 150,150 L 110,110 M 150,150 L 180,180 M 150,150 L 190,130"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </g>
          )}
        </svg>

        {/* Holographic Specular Glint */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
      </div>

      {/* Broken Cookie Fragment Explosion Particles */}
      {isBroken && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400 animate-ping opacity-75" />
          <div className="w-48 h-48 rounded-full border-2 border-pink-500 animate-ping opacity-50" style={{ animationDelay: '0.15s' }} />
        </div>
      )}
    </div>
  );
}
