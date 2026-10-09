import React from 'react';
import { Mission } from '../../types/frameZero';

interface SceneArtworkProps {
  mission: Mission;
  score?: number;
  className?: string;
  aspectRatio?: '2.39:1' | '16:9';
  showSlateOverlay?: boolean;
  takeNumber?: number;
}

export const SceneArtwork: React.FC<SceneArtworkProps> = ({
  mission,
  score = 0,
  className = '',
  aspectRatio = '2.39:1',
  showSlateOverlay = true,
  takeNumber = 1,
}) => {
  // Score determines visual depth and polish
  const isPolished = score >= 60;
  const isMasterpiece = score >= 85;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-black border border-stone-800 shadow-2xl select-none group ${className}`}
      style={{
        aspectRatio: aspectRatio === '2.39:1' ? '2.39 / 1' : '16 / 9',
      }}
    >
      {/* Dynamic Scene SVG by Mission ID */}
      {mission.id === 'the-last-promise' && (
        <svg
          viewBox="0 0 1200 502"
          className="w-full h-full object-cover transition-all duration-700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#070a12" />
              <stop offset="50%" stopColor="#121b2d" />
              <stop offset="100%" stopColor="#1a2538" />
            </linearGradient>
            <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffb347" stopOpacity={isMasterpiece ? 0.95 : isPolished ? 0.75 : 0.45} />
              <stop offset="40%" stopColor="#ff8c00" stopOpacity={isMasterpiece ? 0.55 : isPolished ? 0.35 : 0.2} />
              <stop offset="100%" stopColor="#ff4500" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="roofTileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#161c28" />
              <stop offset="100%" stopColor="#090c12" />
            </linearGradient>
          </defs>

          {/* Storm Sky */}
          <rect width="1200" height="502" fill="url(#skyGrad)" />

          {/* Distant Misty Mountain & City Silhouettes */}
          <path d="M0,320 Q200,240 450,290 T900,260 Q1050,300 1200,280 L1200,502 L0,502 Z" fill="#0c1322" opacity="0.6" />
          <path d="M100,290 L130,220 L160,290 M400,310 L440,240 L480,310 M750,280 L790,210 L830,280" stroke="#1f2d47" strokeWidth="2" opacity="0.3" />

          {/* Sweeping Diagonal Rain Streaks */}
          {Array.from({ length: 45 }).map((_, i) => (
            <line
              key={i}
              x1={(i * 32) % 1200}
              y1={(i * 27) % 502}
              x2={((i * 32) % 1200) - 35}
              y2={((i * 27) % 502) + 70}
              stroke="#64748b"
              strokeWidth={i % 3 === 0 ? '1.5' : '0.8'}
              opacity={isPolished ? 0.45 : 0.25}
            />
          ))}

          {/* Temple Sloped Rooftop Shingles */}
          <path d="M150,502 L700,360 L1200,440 L1200,502 Z" fill="url(#roofTileGrad)" stroke="#2d3748" strokeWidth="2" />
          {/* Shingle Ridge Lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M${220 + i * 80},502 L${680 + i * 20},${375 + i * 8}`}
              stroke="#1a202c"
              strokeWidth="2"
              opacity="0.8"
            />
          ))}

          {/* Swordsman Silhouette with Flowing Haori Cloak */}
          <g transform="translate(680, 260)">
            {/* Wind-blown Haori fabric */}
            <path
              d="M-40,65 Q-95,85 -120,130 Q-60,110 -20,80 Z"
              fill="#0d1420"
              stroke="#1e293b"
              strokeWidth="1.5"
            />
            {/* Torso & Head */}
            <circle cx="0" cy="15" r="14" fill="#090d15" />
            <path d="M-15,30 Q0,25 15,30 L20,110 L-20,110 Z" fill="#090d15" />
            {/* Sheathed Katana Slanted */}
            <line x1="-35" y1="95" x2="45" y2="35" stroke="#94a3b8" strokeWidth="3" />
            <line x1="45" y1="35" x2="60" y2="22" stroke="#e2e8f0" strokeWidth="3.5" />
            {/* Arm Extending toward Lantern */}
            <path d="M12,45 Q40,60 70,55" stroke="#090d15" strokeWidth="9" strokeLinecap="round" />
          </g>

          {/* Glowing Paper Lantern */}
          <g transform="translate(760, 315)">
            {/* Ambient Volumetric Glow */}
            <circle cx="0" cy="0" r={isMasterpiece ? 160 : isPolished ? 120 : 80} fill="url(#lanternGlow)" />
            {/* Lantern Frame */}
            <rect x="-14" y="-22" width="28" height="44" rx="6" fill="#ffedd5" stroke="#d97706" strokeWidth="2" opacity="0.95" />
            {/* Inner Candle Flame */}
            <circle cx="0" cy="0" r="7" fill="#fbbf24" />
            <circle cx="0" cy="0" r="3" fill="#ffffff" />
            {/* Wooden Cap and Base */}
            <rect x="-18" y="-26" width="36" height="5" rx="1.5" fill="#451a03" />
            <rect x="-18" y="21" width="36" height="5" rx="1.5" fill="#451a03" />
            {/* Hanging cord */}
            <line x1="0" y1="-38" x2="0" y2="-26" stroke="#d97706" strokeWidth="2" />
          </g>

          {/* Warm Reflection on Wet Roof Tiles */}
          <ellipse cx="760" cy="385" rx={isMasterpiece ? 140 : 80} ry="18" fill="url(#lanternGlow)" opacity={isPolished ? 0.6 : 0.3} />
        </svg>
      )}

      {mission.id === 'after-the-rain' && (
        <svg
          viewBox="0 0 1200 502"
          className="w-full h-full object-cover transition-all duration-700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c3e50" />
              <stop offset="40%" stopColor="#e67e22" />
              <stop offset="85%" stopColor="#f39c12" />
              <stop offset="100%" stopColor="#f1c40f" />
            </linearGradient>
            <linearGradient id="platformGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2c3e50" />
              <stop offset="100%" stopColor="#111620" />
            </linearGradient>
            <radialGradient id="sunBreak" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity={isMasterpiece ? 0.9 : 0.6} />
              <stop offset="50%" stopColor="#f39c12" stopOpacity={isMasterpiece ? 0.6 : 0.3} />
              <stop offset="100%" stopColor="#e67e22" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Golden Sunset Sky */}
          <rect width="1200" height="502" fill="url(#sunsetSky)" />
          {/* Breaking Sun Orb */}
          <circle cx="680" cy="180" r="90" fill="url(#sunBreak)" />

          {/* Parting Cloud Masses */}
          <path d="M0,0 L1200,0 L1200,120 Q950,180 750,110 Q500,200 300,100 Q150,160 0,90 Z" fill="#1e293b" opacity="0.75" />

          {/* Receding Train Tracks on Left */}
          <path d="M0,502 L400,320 L420,320 L50,502 Z" fill="#0f172a" />
          <path d="M80,502 L425,320 M120,502 L430,320 M160,502 L435,320" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.6" />

          {/* Station Platform with Iron Canopy Structure */}
          <polygon points="400,320 1200,290 1200,502 250,502" fill="url(#platformGrad)" />
          {/* Iron Canopy Pillars & Overhead Beams */}
          <rect x="520" y="160" width="10" height="200" fill="#1e293b" />
          <rect x="850" y="150" width="10" height="210" fill="#1e293b" />
          <line x1="420" y1="170" x2="1200" y2="140" stroke="#334155" strokeWidth="8" />

          {/* Shimmering Puddle Reflections on Asphalt */}
          <ellipse cx="680" cy="440" rx="220" ry="24" fill="#f59e0b" opacity={isPolished ? 0.5 : 0.25} />
          <ellipse cx="980" cy="420" rx="140" ry="16" fill="#f39c12" opacity={isPolished ? 0.45 : 0.2} />

          {/* Two Friends Silhouetted at Eye Level */}
          <g transform="translate(620, 275)">
            {/* Person 1 holding closed umbrella */}
            <circle cx="0" cy="12" r="13" fill="#090d16" />
            <path d="M-12,25 Q0,20 12,25 L16,115 L-14,115 Z" fill="#090d16" />
            <line x1="-16" y1="50" x2="-22" y2="120" stroke="#334155" strokeWidth="3" />
          </g>
          <g transform="translate(710, 278)">
            {/* Person 2 facing friend */}
            <circle cx="0" cy="12" r="12" fill="#090d16" />
            <path d="M-10,24 Q0,20 10,24 L14,112 L-12,112 Z" fill="#090d16" />
          </g>
        </svg>
      )}

      {mission.id === 'the-final-signal' && (
        <svg
          viewBox="0 0 1200 502"
          className="w-full h-full object-cover transition-all duration-700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="exoplanetGlow" cx="45%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="45%" stopColor="#7c3aed" />
              <stop offset="85%" stopColor="#2e1065" />
              <stop offset="100%" stopColor="#090514" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="25%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Deep Space Black */}
          <rect width="1200" height="502" fill="#05060a" />

          {/* Distant Starfield */}
          {Array.from({ length: 60 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 67 + 23) % 1200}
              cy={(i * 39 + 17) % 502}
              r={(i % 5 === 0) ? 1.8 : 0.9}
              fill="#ffffff"
              opacity={(i % 3 === 0) ? 0.9 : 0.4}
            />
          ))}

          {/* Grand Luminous Violet Planet */}
          <circle cx="750" cy="220" r="160" fill="url(#exoplanetGlow)" />
          {/* Majestic Planetary Ring System */}
          <ellipse
            cx="750"
            cy="220"
            rx="340"
            ry="45"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="28"
            transform="rotate(-18, 750, 220)"
            opacity={isPolished ? 0.95 : 0.65}
          />

          {/* Spacecraft Interior Window Struts & Curved Hull */}
          <path
            d="M0,0 L1200,0 L1200,70 Q600,120 0,70 Z"
            fill="#0b0e14"
            stroke="#1e293b"
            strokeWidth="3"
          />
          <path
            d="M0,502 L1200,502 L1200,430 Q600,380 0,430 Z"
            fill="#0b0e14"
            stroke="#1e293b"
            strokeWidth="3"
          />
          <line x1="380" y1="0" x2="330" y2="502" stroke="#1e293b" strokeWidth="18" />

          {/* Viewport Hairline Glass Crack */}
          <path
            d="M520,120 L545,160 L540,195 L570,230 L560,265"
            stroke="#94a3b8"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
          />

          {/* Floating Zero-G Dust Particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <circle
              key={i}
              cx={250 + (i * 45) % 400}
              cy={140 + (i * 33) % 250}
              r={1.2}
              fill="#e2e8f0"
              opacity={0.7}
            />
          ))}

          {/* Astronaut Over-the-Shoulder Silhouette */}
          <g transform="translate(260, 280)">
            <ellipse cx="60" cy="45" rx="42" ry="48" fill="#080b11" />
            {/* Curved Visor with Violet Reflection */}
            <path
              d="M75,25 Q105,45 75,70 Q60,50 75,25 Z"
              fill={isPolished ? '#a855f7' : '#475569'}
              opacity={isMasterpiece ? 0.85 : 0.5}
            />
            {/* Shoulder and Flight Suit Pack */}
            <path d="M-10,90 Q60,70 140,90 L160,230 L-30,230 Z" fill="#080b11" />
          </g>

          {/* Amber Emergency Diode Glow in Cockpit */}
          <circle cx="160" cy="380" r="4" fill="#f59e0b" />
          <circle cx="160" cy="380" r="28" fill="#f59e0b" opacity="0.15" />
        </svg>
      )}

      {mission.id === 'thousand-lanterns' && (
        <svg
          viewBox="0 0 1200 502"
          className="w-full h-full object-cover transition-all duration-700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="twilightSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d1117" />
              <stop offset="40%" stopColor="#1e2640" />
              <stop offset="85%" stopColor="#2c3e50" />
              <stop offset="100%" stopColor="#34495e" />
            </linearGradient>
            <radialGradient id="riverLantern" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffb347" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#f39c12" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d35400" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Twilight Indigo Sky */}
          <rect width="1200" height="502" fill="url(#twilightSky)" />

          {/* Indigo Misty Mountain Ridges */}
          <path d="M0,280 Q250,180 500,240 T1000,210 Q1100,260 1200,230 L1200,502 L0,502 Z" fill="#141c2c" opacity="0.8" />
          <path d="M0,320 Q350,260 700,310 T1200,290 L1200,502 L0,502 Z" fill="#0f1624" />

          {/* Mirror-Like River Expanse */}
          <polygon points="0,340 1200,310 1200,502 0,502" fill="#0a0e17" />

          {/* Hundreds of Floating Water Lanterns on River */}
          {Array.from({ length: 50 }).map((_, i) => {
            const x = 120 + ((i * 73 + 41) % 960);
            const y = 330 + ((i * 19 + 7) % 150);
            const scale = (y - 320) / 160;
            return (
              <g key={i} transform={`translate(${x}, ${y}) scale(${Math.max(0.4, scale)})`}>
                <ellipse cx="0" cy="0" rx="14" ry="4" fill="url(#riverLantern)" />
                <polygon points="-4,-2 0,-12 4,-2" fill="#fef08a" opacity="0.9" />
                <line x1="0" y1="0" x2="0" y2="10" stroke="#f59e0b" strokeWidth="1" opacity="0.5" />
              </g>
            );
          })}

          {/* Wooden Arched Bridge Foreground */}
          <path
            d="M-50,460 Q450,290 950,502"
            fill="none"
            stroke="#1c1917"
            strokeWidth="38"
          />
          <path
            d="M-50,435 Q450,265 950,477"
            fill="none"
            stroke="#292524"
            strokeWidth="8"
          />
          {/* Bridge Railing Posts */}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={i}
              x1={i * 90}
              y1={440 - Math.sin((i / 8) * Math.PI) * 75}
              x2={i * 90}
              y2={415 - Math.sin((i / 8) * Math.PI) * 75}
              stroke="#292524"
              strokeWidth="4"
            />
          ))}

          {/* Cloaked Traveler on High Point of Bridge */}
          <g transform="translate(420, 290)">
            <circle cx="0" cy="14" r="11" fill="#090a0f" />
            <path d="M-14,24 Q-25,60 -18,95 L16,95 Q22,60 12,24 Z" fill="#090a0f" />
          </g>
        </svg>
      )}

      {/* Cinematic Letterbox Aspect Framing Overlays */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between">
        {/* Top Cine Bar with Director HUD */}
        <div className="w-full bg-gradient-to-b from-black/80 via-black/30 to-transparent p-4 sm:p-6 flex items-center justify-between text-xs font-mono text-stone-300">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="font-semibold tracking-widest uppercase text-stone-200">
              REC // 24.00 FPS
            </span>
            <span className="text-stone-500">|</span>
            <span className="text-stone-400">
              {mission.title}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="bg-stone-900/80 border border-stone-700/80 px-2 py-0.5 rounded text-[11px] text-amber-400 font-medium">
              TAKE #{takeNumber.toString().padStart(2, '0')}
            </span>
            <span className="text-stone-400 font-mono text-[11px]">
              SCOPE 2.39:1
            </span>
          </div>
        </div>

        {/* Viewfinder Center Crosshair Reticles */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-12 h-12 border border-dashed border-white/60 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
          <div className="absolute w-24 h-[1px] bg-white/40" />
          <div className="absolute h-24 w-[1px] bg-white/40" />
        </div>

        {/* Bottom Slate Overlay with Live Quality Grading */}
        {showSlateOverlay && (
          <div className="w-full bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 flex items-end justify-between text-xs font-mono">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 block">
                Director Grading
              </span>
              <div className="flex items-center space-x-2">
                <span className={`font-semibold tracking-wider ${
                  isMasterpiece ? 'text-amber-400' : isPolished ? 'text-emerald-400' : 'text-stone-300'
                }`}>
                  {isMasterpiece ? 'MASTER DIRECTORS CUT' : isPolished ? 'PRODUCTION GRADE STILL' : 'RAW DRAFT TAKE'}
                </span>
                <span className="text-stone-500">·</span>
                <span className="text-stone-400">
                  {score}/100 pts
                </span>
              </div>
            </div>

            <div className="text-right text-[11px] text-stone-400">
              <span>{mission.japaneseTitle}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
