import React from 'react';

/**
 * VaultGraphic
 * Original, minimalist geometric artwork representing a sealed intelligence vault.
 * Composed entirely of SVG with restrained amber focal lighting.
 */
export default function VaultGraphic({ className = "w-full max-w-md h-auto" }) {
  return (
    <div className={`relative flex items-center justify-center p-6 ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          {/* Subtle radial glow */}
          <radialGradient id="vaultGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#0c1017" stopOpacity="0" />
          </radialGradient>
          {/* Linear rim sheen */}
          <linearGradient id="rimSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#324158" />
            <stop offset="50%" stopColor="#161e2b" />
            <stop offset="100%" stopColor="#0c1017" />
          </linearGradient>
        </defs>

        {/* Ambient background glow */}
        <circle cx="200" cy="200" r="180" fill="url(#vaultGlow)" />

        {/* Outer Vault Ring */}
        <circle
          cx="200"
          cy="200"
          r="165"
          stroke="url(#rimSheen)"
          strokeWidth="3"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          stroke="#222d3f"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />

        {/* 12 Outer Calibration Hash Marks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 200 + 152 * Math.cos(angle);
          const y1 = 200 + 152 * Math.sin(angle);
          const x2 = 200 + 162 * Math.cos(angle);
          const y2 = 200 + 162 * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i % 3 === 0 ? "#f59e0b" : "#324158"}
              strokeWidth={i % 3 === 0 ? "2.5" : "1.5"}
            />
          );
        })}

        {/* Heavy Secondary Armor Ring */}
        <circle
          cx="200"
          cy="200"
          r="125"
          stroke="#161e2b"
          strokeWidth="16"
        />
        <circle
          cx="200"
          cy="200"
          r="125"
          stroke="#222d3f"
          strokeWidth="1"
        />

        {/* Locking Interlock Teeth */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const cx = 200 + 125 * Math.cos(angle);
          const cy = 200 + 125 * Math.sin(angle);
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="#080a0f"
              stroke="#324158"
              strokeWidth="2"
            />
          );
        })}

        {/* Middle Precision Aperture */}
        <circle
          cx="200"
          cy="200"
          r="86"
          stroke="#222d3f"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="200"
          r="86"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="18 42"
          opacity="0.8"
        />

        {/* Triangular Vault Shutter Aperture Geometry */}
        <polygon
          points="200,135 255,235 145,235"
          stroke="#324158"
          strokeWidth="1.5"
          fill="none"
        />
        <polygon
          points="200,265 145,165 255,165"
          stroke="#222d3f"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Inner Hub / Focal Core */}
        <circle
          cx="200"
          cy="200"
          r="48"
          fill="#0c1017"
          stroke="#222d3f"
          strokeWidth="2"
        />
        <circle
          cx="200"
          cy="200"
          r="24"
          fill="#111722"
          stroke="#f59e0b"
          strokeWidth="2"
        />

        {/* Amber Central Core */}
        <circle
          cx="200"
          cy="200"
          r="8"
          fill="#f59e0b"
        />
        <circle
          cx="200"
          cy="200"
          r="3"
          fill="#fff"
        />

        {/* Subtle Horizontal & Vertical Reticles */}
        <line x1="170" y1="200" x2="188" y2="200" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="212" y1="200" x2="230" y2="200" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="200" y1="170" x2="200" y2="188" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="200" y1="212" x2="200" y2="230" stroke="#f59e0b" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
