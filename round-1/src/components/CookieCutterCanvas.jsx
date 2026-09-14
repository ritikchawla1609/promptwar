import React, { useState, useRef, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { cutterAudio } from '../utils/cutterAudio';
import { PROMPT_FRAGMENTS } from '../data/dalgonaChallengeData';
import { Scissors, RefreshCcw, Check, AlertTriangle, Sparkles, Flame, Zap, ShieldAlert, CheckCircle2 } from 'lucide-react';

// Ray-Casting algorithm for Point-in-Polygon detection
function isPointInPolygon(point, vs) {
  const x = point.x;
  const y = point.y;
  let inside = false;

  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i].x, yi = vs[i].y;
    const xj = vs[j].x, yj = vs[j].y;

    const intersect = ((yi > y) !== (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}

// Generate procedural 3D sugar shards for the explosive shatter
function generateShards(count = 70, width = 960, height = 680) {
  const shards = [];
  const cx = width / 2;
  const cy = height / 2;

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
    const dist = 60 + Math.random() * 260;
    const ox = cx + Math.cos(angle) * dist;
    const oy = cy + Math.sin(angle) * dist;

    const burstDist = 200 + Math.random() * 380;
    const tx = ox + Math.cos(angle) * burstDist;
    const ty = oy + Math.sin(angle) * burstDist + (Math.random() * 120); // gravity drop
    const tz = (Math.random() - 0.3) * 450;

    const rx = (Math.random() - 0.5) * 800;
    const ry = (Math.random() - 0.5) * 800;
    const rz = (Math.random() - 0.5) * 600;

    const w = 18 + Math.random() * 38;
    const h = 18 + Math.random() * 38;

    const clip = `polygon(${Math.floor(Math.random() * 35)}% 0%, 100% ${Math.floor(Math.random() * 45)}%, ${Math.floor(65 + Math.random() * 35)}% 100%, 0% ${Math.floor(55 + Math.random() * 45)}%)`;

    const cChoice = Math.random();
    const bg =
      cChoice > 0.65
        ? 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #78350F 100%)'
        : cChoice > 0.35
        ? 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 40%, #B45309 100%)'
        : 'linear-gradient(135deg, #B45309 0%, #78350F 55%, #451A03 100%)';

    shards.push({
      id: i,
      ox,
      oy,
      tx,
      ty,
      tz,
      rx,
      ry,
      rz,
      w,
      h,
      clip,
      bg,
      delay: Math.random() * 0.12,
    });
  }
  return shards;
}

// Generate procedural lightning crack fissure lines
function generateFissures(points, width, height) {
  if (!points || points.length < 4) {
    return [
      `M ${width * 0.5} ${height * 0.45} L ${width * 0.2} ${height * 0.1} L ${width * 0.05} ${height * 0.2}`,
      `M ${width * 0.5} ${height * 0.45} L ${width * 0.8} ${height * 0.15} L ${width * 0.95} ${height * 0.1}`,
      `M ${width * 0.5} ${height * 0.55} L ${width * 0.25} ${height * 0.85} L ${width * 0.1} ${height * 0.9}`,
      `M ${width * 0.5} ${height * 0.55} L ${width * 0.75} ${height * 0.85} L ${width * 0.92} ${height * 0.88}`,
      `M ${width * 0.45} ${height * 0.5} L ${width * 0.1} ${height * 0.48}`,
      `M ${width * 0.55} ${height * 0.5} L ${width * 0.9} ${height * 0.52}`,
    ];
  }

  const step = Math.max(1, Math.floor(points.length / 7));
  const lines = [];

  for (let i = 0; i < points.length; i += step) {
    const pt = points[i];
    const angle = Math.atan2(pt.y - height / 2, pt.x - width / 2);
    const midX = pt.x + Math.cos(angle + (Math.random() - 0.5) * 0.5) * 120;
    const midY = pt.y + Math.sin(angle + (Math.random() - 0.5) * 0.5) * 120;
    const endX = pt.x + Math.cos(angle) * 260;
    const endY = pt.y + Math.sin(angle) * 260;
    lines.push(`M ${pt.x} ${pt.y} Q ${midX} ${midY}, ${endX} ${endY}`);
  }

  return lines;
}

export default function CookieCutterCanvas({ fragments = PROMPT_FRAGMENTS, onCutFinalized }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const animFrameRef = useRef(null);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [pathPoints, setPathPoints] = useState([]);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedFragmentIds, setSelectedFragmentIds] = useState([]);

  // Shatter & Crack animation state:
  // 'idle' | 'closed_preview' | 'confirm_modal' | 'seismic_charge' | 'supercritical_fracture' | 'tractor_extraction' | 'finalized'
  const [breakState, setBreakState] = useState('idle');

  // Procedural 3D Shards & Fissures
  const [shards, setShards] = useState([]);
  const [fissures, setFissures] = useState([]);

  // Telemetry HUD state
  const [temperature, setTemperature] = useState(25);
  const [matrixIntegrity, setMatrixIntegrity] = useState(100);

  // Sizing
  const [dimensions, setDimensions] = useState({ width: 960, height: 680 });

  useEffect(() => {
    const updateSize = () => {
      const w = Math.min(1020, window.innerWidth - 32);
      const h = Math.min(720, Math.max(560, window.innerHeight - 170));
      setDimensions({ width: w, height: h });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Smooth Bezier Curve Drawing helper
  const drawSmoothPath = (ctx, points) => {
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length - 1; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
    }

    if (points.length > 1) {
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    }
  };

  // Spark Particle Generation & Physics Loop
  const spawnSparks = useCallback((x, y) => {
    const count = 4 + Math.floor(Math.random() * 3);
    const colors = ['#FFFFFF', '#FFE600', '#F59E0B', '#00F0FF', '#FF007F'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      sparksRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        radius: 1.5 + Math.random() * 2.5,
        life: 1.0,
        decay: 0.035 + Math.random() * 0.04,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }, []);

  // Render Loop (Canvas + Continuous Sparks Animation)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Sparks
      if (sparksRef.current.length > 0) {
        ctx.save();
        for (let i = sparksRef.current.length - 1; i >= 0; i--) {
          const s = sparksRef.current[i];
          s.x += s.vx;
          s.y += s.vy;
          s.vy += 0.15; // gravity
          s.vx *= 0.96; // air drag
          s.life -= s.decay;

          if (s.life <= 0) {
            sparksRef.current.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * s.life, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = s.life;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 8;
          ctx.fill();
        }
        ctx.restore();
      }

      // 2. Draw Blade Path
      if (pathPoints.length >= 2) {
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Outer Plasma Bloom
        ctx.strokeStyle = isClosed ? 'rgba(0, 240, 255, 0.45)' : 'rgba(245, 158, 11, 0.45)';
        ctx.lineWidth = 16;
        ctx.shadowColor = isClosed ? '#00F0FF' : '#F59E0B';
        ctx.shadowBlur = 20;
        drawSmoothPath(ctx, pathPoints);
        if (isClosed) ctx.closePath();
        ctx.stroke();

        // Intense Core Laser
        ctx.strokeStyle = isClosed ? '#00F0FF' : '#F59E0B';
        ctx.lineWidth = 6;
        drawSmoothPath(ctx, pathPoints);
        if (isClosed) ctx.closePath();
        ctx.stroke();

        // White-Hot Filament
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2.5;
        drawSmoothPath(ctx, pathPoints);
        if (isClosed) ctx.closePath();
        ctx.stroke();

        // If closed, fill energetic iridescent shield
        if (isClosed) {
          ctx.fillStyle = 'rgba(0, 240, 255, 0.14)';
          drawSmoothPath(ctx, pathPoints);
          ctx.closePath();
          ctx.fill();
        }

        // Draw Start Needle Ring
        if (pathPoints.length > 0) {
          const start = pathPoints[0];
          ctx.beginPath();
          ctx.arc(start.x, start.y, 9, 0, Math.PI * 2);
          ctx.fillStyle = isClosed ? '#00F0FF' : '#10B981';
          ctx.fill();
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#10B981';
          ctx.shadowBlur = 14;
          ctx.stroke();

          // Magnetic guide pulse
          if (!isClosed && isDrawing) {
            ctx.beginPath();
            ctx.arc(start.x, start.y, 42, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }

        // Plasma Needle Tip when drawing
        if (isDrawing && pathPoints.length > 1) {
          const tip = pathPoints[pathPoints.length - 1];
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, 7, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#FFE600';
          ctx.shadowBlur = 18;
          ctx.fill();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [pathPoints, isClosed, isDrawing]);

  // Evaluate fragment inside/outside status
  const evaluateSelection = useCallback(
    (polygon) => {
      if (!polygon || polygon.length < 3) return [];

      const insideIds = [];
      fragments.forEach((frag) => {
        const fragPixelPos = {
          x: (frag.x / 100) * dimensions.width,
          y: (frag.y / 100) * dimensions.height,
        };

        if (isPointInPolygon(fragPixelPos, polygon)) {
          insideIds.push(frag.id);
        }
      });

      return insideIds;
    },
    [fragments, dimensions]
  );

  // Coordinate capture helper
  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const dist = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

  // Drawing Handlers
  const handleStart = (e) => {
    if (isClosed || breakState !== 'idle') return;
    try {
      cutterAudio.init();
      cutterAudio.playLaserSweep();
    } catch (err) {}

    const pt = getCanvasCoords(e);
    setIsDrawing(true);
    setPathPoints([pt]);
    setSelectedFragmentIds([]);
    setTemperature(1250);
    spawnSparks(pt.x, pt.y);
  };

  const handleMove = (e) => {
    if (!isDrawing || isClosed || breakState !== 'idle') return;

    const pt = getCanvasCoords(e);
    const lastPt = pathPoints[pathPoints.length - 1];

    if (lastPt && dist(lastPt, pt) < 5) return;

    try {
      cutterAudio.playLaserSizzle();
    } catch (err) {}

    spawnSparks(pt.x, pt.y);

    const newPoints = [...pathPoints, pt];
    setPathPoints(newPoints);

    // Live Telemetry updates
    const targetTemp = Math.min(2450, 1400 + newPoints.length * 8);
    setTemperature(targetTemp);
    const newIntegrity = Math.max(65, Math.floor(100 - newPoints.length * 0.22));
    setMatrixIntegrity(newIntegrity);

    // Auto-close loop when returning near start point
    if (newPoints.length > 20) {
      const startPt = newPoints[0];
      if (dist(pt, startPt) <= 42) {
        completeClosedLoop(newPoints);
      }
    }
  };

  const handleEnd = () => {
    if (!isDrawing || isClosed) return;
    setIsDrawing(false);
    setTemperature(280);

    if (pathPoints.length > 20) {
      const startPt = pathPoints[0];
      const endPt = pathPoints[pathPoints.length - 1];
      if (dist(startPt, endPt) <= 48) {
        completeClosedLoop(pathPoints);
        return;
      }
    }

    if (pathPoints.length > 30) {
      const startPt = pathPoints[0];
      const endPt = pathPoints[pathPoints.length - 1];
      if (dist(startPt, endPt) <= 68) {
        completeClosedLoop(pathPoints);
        return;
      }
    }
  };

  const completeClosedLoop = (points) => {
    setIsDrawing(false);
    setIsClosed(true);
    setBreakState('closed_preview');
    setTemperature(1850);

    try {
      cutterAudio.playLoopClosed();
    } catch (err) {}

    const insideIds = evaluateSelection(points);
    setSelectedFragmentIds(insideIds);
  };

  // Reset / Redraw
  const handleCancelCut = () => {
    try {
      cutterAudio.playHover();
    } catch (err) {}
    setIsClosed(false);
    setIsDrawing(false);
    setPathPoints([]);
    setSelectedFragmentIds([]);
    setBreakState('idle');
    setTemperature(25);
    setMatrixIntegrity(100);
  };

  const handleOpenFinalizeModal = () => {
    try {
      cutterAudio.playHover();
    } catch (err) {}
    setBreakState('confirm_modal');
  };

  // ==========================================
  // INSANE CINEMATIC MULTI-STAGE BREAK SEQUENCE
  // ==========================================
  const handleConfirmBreak = () => {
    // Generate shards and fissures
    const generatedShards = generateShards(75, dimensions.width, dimensions.height);
    const generatedFissures = generateFissures(pathPoints, dimensions.width, dimensions.height);
    setShards(generatedShards);
    setFissures(generatedFissures);

    // STAGE 1: SEISMIC CHARGE (0 - 650ms)
    setBreakState('seismic_charge');
    try {
      cutterAudio.playCinematicBoom();
      cutterAudio.playGlitchStatic();
    } catch (err) {}

    // STAGE 2: SUPERCRITICAL FRACTURE & 3D SHATTER (650ms - 2000ms)
    setTimeout(() => {
      setBreakState('supercritical_fracture');
      try {
        cutterAudio.playCookieCrack();
        cutterAudio.playSubBassDrop();
      } catch (err) {}

      // Multi-stage Explosive Confetti Cannon!
      try {
        // Gold / Caramel Dust
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.52 },
          colors: ['#D97706', '#F59E0B', '#B45309', '#FDE68A'],
          ticks: 140,
        });

        // Cyber Plasma Neon Shockwave
        setTimeout(() => {
          confetti({
            particleCount: 90,
            spread: 120,
            origin: { y: 0.5 },
            colors: ['#00F0FF', '#FF007F', '#FFFFFF', '#10B981'],
            ticks: 160,
          });
        }, 180);
      } catch (e) {}

      // STAGE 3: TRACTOR BEAM EXTRACTION (2000ms - 3400ms)
      setTimeout(() => {
        setBreakState('tractor_extraction');
        try {
          cutterAudio.playVictory();
          cutterAudio.playLoopClosed();
        } catch (err) {}

        // STAGE 4: FINALIZE TO NEXT SCREEN
        setTimeout(() => {
          const selectedFrags = fragments.filter((f) => selectedFragmentIds.includes(f.id));
          onCutFinalized(selectedFrags);
        }, 1400);
      }, 1350);
    }, 650);
  };

  const selectedCount = selectedFragmentIds.length;
  const excludedCount = fragments.length - selectedCount;

  const isBreakingActive =
    breakState === 'seismic_charge' ||
    breakState === 'supercritical_fracture' ||
    breakState === 'tractor_extraction';

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full select-none max-w-7xl mx-auto px-2 animate-fadeIn ${
        breakState === 'seismic_charge' ? 'animate-violent-rumble' : ''
      }`}
    >
      {/* TOP STATUS & LIVE TELEMETRY BAR */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between p-3.5 mb-2 rounded-2xl luxury-card shadow-2xl gap-3">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-pink-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <Scissors className="w-4 h-4 transform -rotate-45 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase font-black">
                DALGONA ARENA // THE PERFECT CUT
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                ROUND 1
              </span>
            </div>
            <div className="text-xs sm:text-sm font-mono font-bold text-white">
              {isClosed
                ? 'Cut boundary locked! Confirm your selection to detonate the cookie'
                : isDrawing
                ? 'Plasma scalpel active... bring line back to green start node to lock loop'
                : 'Draw contour around genuine clues • Connect back to green dot to seal cut'}
            </div>
          </div>
        </div>

        {/* Live Scalpel Telemetry & Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Real-Time Live Telemetry HUD */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 border border-white/[0.08] text-zinc-300">
              <Flame className={`w-3.5 h-3.5 ${isDrawing ? 'text-orange-400 animate-pulse' : 'text-zinc-500'}`} />
              <span className="text-[11px]">SCALPEL:</span>
              <span className={`font-bold ${isDrawing ? 'text-orange-300' : 'text-zinc-400'}`}>
                {temperature}°C
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 border border-white/[0.08] text-zinc-300">
              <span className="text-[11px]">WAFER INTEGRITY:</span>
              <span
                className={`font-bold ${
                  matrixIntegrity < 80 ? 'text-amber-400' : 'text-emerald-400'
                }`}
              >
                {matrixIntegrity}%
              </span>
            </div>
          </div>

          {/* Enclosed Counter */}
          {isClosed && (
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-xl bg-cyan-950/90 border border-cyan-400/80 text-cyan-300 font-black shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                LOCKED: {selectedCount} CLUES
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-700 text-zinc-400 font-bold">
                OUTSIDE: {excludedCount}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          {isClosed && breakState === 'closed_preview' && (
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCancelCut}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/[0.1] bg-zinc-900/90 text-zinc-300 hover:text-white font-mono text-xs font-bold transition-all hover:bg-zinc-800 shadow-md"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>REDRAW</span>
              </button>
              <button
                onClick={handleOpenFinalizeModal}
                className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-red-600 via-pink-600 to-amber-500 text-white font-mono text-xs sm:text-sm font-black tracking-wider uppercase shadow-[0_0_30px_rgba(255,0,127,0.7)] transition-all transform hover:scale-105 active:scale-95 animate-pulse"
              >
                <Check className="w-4 h-4" />
                <span>BREAK COOKIE 💥</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* THE SPACIOUS DALGONA COOKIE ARENA */}
      <div
        ref={containerRef}
        className={`relative flex items-center justify-center rounded-3xl p-3 border border-white/[0.08] shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden bg-black/70 backdrop-blur-3xl transition-all duration-500`}
        style={{
          width: dimensions.width,
          height: dimensions.height,
          perspective: '1200px',
        }}
      >
        {/* Dynamic Shockwave Ring during supercritical fracture */}
        {breakState === 'supercritical_fracture' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-amber-400/90 animate-shockwave pointer-events-none z-40 shadow-[0_0_60px_#F59E0B]" />
        )}

        {/* Anti-Gravity Tractor Beam Aura during extraction */}
        {breakState === 'tractor_extraction' && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.25)_0%,rgba(245,158,11,0.15)_45%,transparent_75%)] pointer-events-none z-30 animate-pulse" />
        )}

        {/* Central Dalgona Wafer Body */}
        <div
          className={`relative w-full h-full rounded-[44px] overflow-hidden transition-all duration-700 shadow-2xl ${
            breakState === 'tractor_extraction' ? 'animate-tractor-levitate' : ''
          }`}
          style={{
            background:
              'radial-gradient(circle at 50% 45%, #92400E 0%, #78350F 35%, #451A03 70%, #1A0702 100%)',
            boxShadow: 'inset 0 0 90px rgba(0,0,0,0.9), 0 20px 60px rgba(0,0,0,0.95)',
          }}
        >
          {/* Subtle Golden Sugar Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

          {/* Procedural High-Voltage Lightning Crack Fissures */}
          {(breakState === 'seismic_charge' ||
            breakState === 'supercritical_fracture' ||
            breakState === 'tractor_extraction') && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-35 animate-lightning-arc">
              <defs>
                <filter id="fissure-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {fissures.map((pathStr, idx) => (
                <path
                  key={idx}
                  d={pathStr}
                  fill="none"
                  stroke={idx % 2 === 0 ? '#00F0FF' : '#FF007F'}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#fissure-glow)"
                  className="animate-pulse"
                />
              ))}
            </svg>
          )}

          {/* Procedural 3D Sugar Shards Exploding in 3D Perspective */}
          {breakState === 'supercritical_fracture' && (
            <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden">
              {shards.map((s) => {
                const dx = s.tx - s.ox;
                const dy = s.ty - s.oy;
                return (
                  <div
                    key={s.id}
                    className="absolute transition-all duration-1000 ease-out shadow-2xl"
                    style={{
                      left: `${s.ox}px`,
                      top: `${s.oy}px`,
                      width: `${s.w}px`,
                      height: `${s.h}px`,
                      background: s.bg,
                      clipPath: s.clip,
                      transform: `translate3d(${dx}px, ${dy}px, ${s.tz}px) rotateX(${s.rx}deg) rotateY(${s.ry}deg) rotateZ(${s.rz}deg)`,
                      opacity: 0.9,
                      filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.8))',
                      transitionDelay: `${s.delay}s`,
                    }}
                  />
                );
              })}
            </div>
          )}

          {/* Embedded Clues — Luxury Obsidian & Neon Chips */}
          {fragments.map((frag) => {
            const isInside = selectedFragmentIds.includes(frag.id);
            const isExcluded = isClosed && !isInside;

            // Outer eliminated clues disappear during extraction
            if (breakState === 'tractor_extraction' && isExcluded) {
              return null;
            }

            return (
              <div
                key={frag.id}
                className={`absolute transition-all duration-500 pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2 px-3.5 py-2 rounded-2xl text-xs font-mono font-bold tracking-wide select-none flex items-center gap-2.5 shadow-2xl backdrop-blur-xl whitespace-nowrap max-w-[320px] ${
                  isInside
                    ? breakState === 'tractor_extraction'
                      ? 'bg-cyan-950/95 border-2 border-emerald-400 text-emerald-100 shadow-[0_0_35px_rgba(16,185,129,0.9)] scale-110 z-40 ring-4 ring-emerald-400/40'
                      : 'bg-zinc-950/95 border-2 border-cyan-400 text-cyan-200 shadow-[0_0_25px_rgba(0,240,255,0.8)] scale-105 z-30 ring-2 ring-cyan-400/50'
                    : isExcluded
                    ? breakState === 'supercritical_fracture'
                      ? 'bg-red-950/80 border border-red-500 text-red-400 opacity-20 scale-75 blur-[2px]'
                      : 'bg-zinc-950/40 border border-zinc-800 text-zinc-600 line-through opacity-25 scale-90'
                    : 'bg-zinc-950/85 border border-amber-500/40 text-amber-100 shadow-lg'
                }`}
                style={{
                  left: `${frag.x}%`,
                  top: `${frag.y}%`,
                }}
              >
                <span className="text-base shrink-0">{frag.icon || '📌'}</span>
                <div className="flex flex-col text-left leading-tight overflow-hidden">
                  <span className="text-xs sm:text-[13px] whitespace-nowrap truncate font-extrabold">
                    {frag.text}
                  </span>
                  {frag.source && (
                    <span className="text-[9px] text-zinc-400 font-normal mt-0.5 tracking-normal whitespace-nowrap truncate max-w-[240px]">
                      src: {frag.source}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Interactive Laser Cutting Canvas */}
          <canvas
            ref={canvasRef}
            width={dimensions.width}
            height={dimensions.height}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            className={`absolute inset-0 w-full h-full z-25 ${
              breakState === 'idle'
                ? 'cursor-crosshair'
                : 'cursor-default pointer-events-none'
            }`}
          />
        </div>
      </div>

      {/* CONFIRMATION MODAL BEFORE BREAKING */}
      {breakState === 'confirm_modal' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn">
          <div className="relative w-full max-w-md p-8 rounded-3xl luxury-card border-2 border-amber-500/80 text-center shadow-[0_0_70px_rgba(245,158,11,0.35)] animate-scaleUp">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/15 border border-amber-400 flex items-center justify-center text-amber-400 mb-4 shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
            </div>

            <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
              READY TO DETONATE THE COOKIE?
            </h3>

            <p className="text-zinc-300 font-mono text-xs sm:text-sm mb-4 leading-relaxed">
              You have enclosed <strong className="text-cyan-400">{selectedCount} clues</strong> inside your plasma cut boundary.
              <br />
              Everything outside will shatter into sugar dust and be eliminated forever.
            </p>

            <p className="text-amber-400 font-mono text-xs font-bold mb-6">
              "Did you isolate genuine signals from the deceptive noise?"
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setBreakState('closed_preview')}
                className="flex-1 py-3 rounded-xl border border-white/[0.1] bg-zinc-900 text-zinc-300 font-mono text-xs font-bold hover:text-white transition-all shadow-md"
              >
                LET ME REDRAW
              </button>
              <button
                onClick={handleConfirmBreak}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-600 via-pink-600 to-amber-500 text-white font-mono text-xs font-black tracking-wider uppercase shadow-[0_0_30px_rgba(255,0,127,0.8)] hover:scale-105 active:scale-95 transition-all"
              >
                BREAK THE COOKIE! 💥
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VERDICT & EXTRACTION ANNOUNCEMENT BANNERS */}
      {breakState === 'seismic_charge' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-scaleUp text-center">
          <div className="px-8 py-3.5 rounded-full border-2 border-amber-400 bg-black/95 text-amber-300 font-mono font-black text-xl tracking-[0.2em] uppercase shadow-[0_0_60px_rgba(245,158,11,0.9)] animate-pulse">
            ⚡ SEISMIC OVERLOAD DETECTED... ⚡
          </div>
        </div>
      )}

      {breakState === 'supercritical_fracture' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-scaleUp text-center">
          <div className="px-9 py-4 rounded-full border-2 border-white bg-black/95 text-white font-mono font-black text-2xl tracking-[0.25em] uppercase shadow-[0_0_70px_rgba(255,0,127,1)]">
            💥 THE COOKIE HAS SHATTERED! 💥
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase mt-3 font-black animate-pulse">
            OUTER NOISE EVAPORATING INTO SUGAR DUST...
          </p>
        </div>
      )}

      {breakState === 'tractor_extraction' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-scaleUp text-center">
          <div className="px-9 py-4 rounded-full border-2 border-cyan-400 bg-black/95 text-cyan-200 font-mono font-black text-xl sm:text-2xl tracking-[0.2em] uppercase shadow-[0_0_80px_rgba(0,240,255,0.9)] flex items-center gap-3 justify-center">
            <Zap className="w-6 h-6 text-cyan-300 animate-spin" />
            <span>DALGONA CORE EXTRACTED!</span>
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400 uppercase mt-3 font-black animate-pulse">
            TRANSMITTING {selectedCount} SURVIVING CLUES TO PROMPT FORGE...
          </p>
        </div>
      )}
    </div>
  );
}

