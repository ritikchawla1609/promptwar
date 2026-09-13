import React, { useState, useRef, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { cutterAudio } from '../utils/cutterAudio';
import { PROMPT_FRAGMENTS } from '../data/dalgonaChallengeData';
import { Scissors, RefreshCcw, Check, AlertTriangle, Sparkles, HelpCircle } from 'lucide-react';

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

export default function CookieCutterCanvas({ fragments = PROMPT_FRAGMENTS, onCutFinalized }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Drawing state
  const [isDrawing, setIsDrawing] = useState(false);
  const [pathPoints, setPathPoints] = useState([]);
  const [isClosed, setIsClosed] = useState(false);
  const [selectedFragmentIds, setSelectedFragmentIds] = useState([]);

  // Shatter & Crack animation state
  // 'idle' | 'closed_preview' | 'confirm_modal' | 'cracking' | 'broken'
  const [breakState, setBreakState] = useState('idle');

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

  // Redraw canvas cutter blade path
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (pathPoints.length < 2) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Outer Neon Bloom Layer
    ctx.strokeStyle = isClosed ? 'rgba(0, 240, 255, 0.35)' : 'rgba(245, 158, 11, 0.35)';
    ctx.lineWidth = 14;
    drawSmoothPath(ctx, pathPoints);
    if (isClosed) ctx.closePath();
    ctx.stroke();

    // Medium Laser Core Layer
    ctx.strokeStyle = isClosed ? 'rgba(0, 240, 255, 0.85)' : 'rgba(245, 158, 11, 0.85)';
    ctx.lineWidth = 5;
    drawSmoothPath(ctx, pathPoints);
    if (isClosed) ctx.closePath();
    ctx.stroke();

    // Hot White Center Needle Filament
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    drawSmoothPath(ctx, pathPoints);
    if (isClosed) ctx.closePath();
    ctx.stroke();

    // If Closed: Fill semi-transparent energetic wash inside the cut area
    if (isClosed) {
      ctx.fillStyle = 'rgba(0, 240, 255, 0.12)';
      drawSmoothPath(ctx, pathPoints);
      ctx.closePath();
      ctx.fill();
    }

    // Draw Starting Anchor Target Ring
    if (pathPoints.length > 0) {
      const start = pathPoints[0];
      ctx.beginPath();
      ctx.arc(start.x, start.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = isClosed ? '#00F0FF' : '#10B981';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Magnetic guide glow when active
      if (!isClosed && isDrawing) {
        ctx.beginPath();
        ctx.arc(start.x, start.y, 38, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Spark tip at current drawing needle position
    if (isDrawing && pathPoints.length > 1) {
      const tip = pathPoints[pathPoints.length - 1];
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 12;
      ctx.fill();
    }

    ctx.restore();
  }, [pathPoints, isClosed, isDrawing]);

  // Evaluate fragment inside/outside status
  const evaluateSelection = useCallback((polygon) => {
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
  }, [fragments, dimensions]);

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
      cutterAudio.playHover();
    } catch (err) {}

    const pt = getCanvasCoords(e);
    setIsDrawing(true);
    setPathPoints([pt]);
    setSelectedFragmentIds([]);
  };

  const handleMove = (e) => {
    if (!isDrawing || isClosed || breakState !== 'idle') return;

    const pt = getCanvasCoords(e);
    const lastPt = pathPoints[pathPoints.length - 1];

    if (lastPt && dist(lastPt, pt) < 6) return;

    try {
      cutterAudio.playLaserSizzle();
    } catch (err) {}

    const newPoints = [...pathPoints, pt];
    setPathPoints(newPoints);

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

    if (pathPoints.length > 20) {
      const startPt = pathPoints[0];
      const endPt = pathPoints[pathPoints.length - 1];
      if (dist(startPt, endPt) <= 45) {
        completeClosedLoop(pathPoints);
        return;
      }
    }

    if (pathPoints.length > 30) {
      const startPt = pathPoints[0];
      const endPt = pathPoints[pathPoints.length - 1];
      if (dist(startPt, endPt) <= 65) {
        completeClosedLoop(pathPoints);
        return;
      }
    }
  };

  const completeClosedLoop = (points) => {
    setIsDrawing(false);
    setIsClosed(true);
    setBreakState('closed_preview');

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
  };

  const handleOpenFinalizeModal = () => {
    try {
      cutterAudio.playHover();
    } catch (err) {}
    setBreakState('confirm_modal');
  };

  // BREAK THE COOKIE
  const handleConfirmBreak = () => {
    try {
      cutterAudio.playCookieCrack();
    } catch (err) {}
    setBreakState('cracking');

    const selectedFrags = fragments.filter((f) => selectedFragmentIds.includes(f.id));

    try {
      confetti({
        particleCount: 90,
        spread: 90,
        origin: { y: 0.55 },
        colors: ['#D97706', '#F59E0B', '#B45309', '#78350F'],
        ticks: 120,
      });
    } catch (e) {}

    setTimeout(() => {
      setBreakState('broken');
      try {
        cutterAudio.playVictory();
      } catch (err) {}

      setTimeout(() => {
        onCutFinalized(selectedFrags);
      }, 1400);
    }, 1100);
  };

  const selectedCount = selectedFragmentIds.length;
  const excludedCount = fragments.length - selectedCount;

  return (
    <div className="relative flex flex-col items-center justify-center w-full select-none max-w-7xl mx-auto px-2">
      {/* TOP SUSPENSE STATUS BAR (No spoilers on which clue is a trap!) */}
      <div className="w-full flex items-center justify-between p-3 mb-2 rounded-2xl glass-panel border border-amber-500/30 bg-zinc-950/90 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 shrink-0">
            <Scissors className="w-4 h-4 transform -rotate-45" />
          </div>
          <div>
            <div className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-black">
              DALGONA PROMPT // THE CUT
            </div>
            <div className="text-xs sm:text-sm font-mono font-bold text-white">
              {isClosed
                ? 'Cut locked! Review your selection before breaking'
                : isDrawing
                ? 'Drawing... bring your line back to the green dot to close'
                : 'Draw around the clues you trust • Return to the green dot to close'}
            </div>
          </div>
        </div>

        {/* Live Suspense Counters */}
        <div className="flex items-center gap-3">
          {isClosed && (
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-xl bg-cyan-950/90 border border-cyan-400 text-cyan-300 font-bold">
                ENCLOSED: {selectedCount} CLUES
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-400 font-bold">
                OUTSIDE: {excludedCount} CLUES
              </span>
            </div>
          )}

          {isClosed && breakState === 'closed_preview' && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleCancelCut}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-300 hover:text-white font-mono text-xs font-bold transition-all hover:bg-zinc-800"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>REDRAW</span>
              </button>
              <button
                onClick={handleOpenFinalizeModal}
                className="flex items-center gap-1.5 px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 text-white font-mono text-xs sm:text-sm font-black tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all transform hover:scale-105 active:scale-95"
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
        className="relative flex items-center justify-center rounded-3xl p-3 border-2 border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden bg-zinc-950/80"
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        <div
          className={`relative w-full h-full rounded-[44px] overflow-hidden transition-all duration-700 shadow-2xl ${
            breakState === 'cracking'
              ? 'animate-glitch scale-[1.02]'
              : breakState === 'broken'
              ? 'scale-105'
              : ''
          }`}
          style={{
            background: 'radial-gradient(circle at 50% 45%, #92400E 0%, #78350F 35%, #451A03 70%, #1A0702 100%)',
            boxShadow: 'inset 0 0 70px rgba(0,0,0,0.85), 0 15px 45px rgba(0,0,0,0.95)',
          }}
        >
          {/* Subtle Sugar Honeycomb Texture */}
          <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />

          {/* Fracture crack lines when broken */}
          {(breakState === 'cracking' || breakState === 'broken') && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
              <path
                d="M 50,50 L 250,220 L 480,280 L 720,120 M 120,600 L 320,400 L 520,480 L 780,620 M 400,50 L 420,320 L 390,650"
                fill="none"
                stroke="#FF007F"
                strokeWidth="4"
                className="drop-shadow-[0_0_15px_#ff007f] animate-pulse"
              />
              <path
                d="M 220,180 L 200,90 M 460,320 L 600,260 M 340,420 L 240,500"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="3"
                className="drop-shadow-[0_0_10px_#00f0ff]"
              />
            </svg>
          )}

          {/* Embedded Clues — ALL LOOK EQUALLY PLAUSIBLE & SUSPICIOUS! */}
          {fragments.map((frag) => {
            const isInside = selectedFragmentIds.includes(frag.id);
            const isExcluded = isClosed && !isInside;

            if (breakState === 'broken' && isExcluded) {
              return null;
            }

            return (
              <div
                key={frag.id}
                className={`absolute transition-all duration-300 pointer-events-none z-20 transform -translate-x-1/2 -translate-y-1/2 px-3.5 py-2 rounded-2xl text-xs font-mono font-bold tracking-wide select-none flex items-center gap-2.5 shadow-lg backdrop-blur-md whitespace-nowrap max-w-[320px] ${
                  isInside
                    ? 'bg-black/95 border-2 border-cyan-400 text-cyan-200 shadow-[0_0_22px_rgba(0,240,255,0.7)] scale-110 z-30 ring-2 ring-cyan-400/50'
                    : isExcluded
                    ? 'bg-zinc-950/40 border border-zinc-800 text-zinc-600 line-through opacity-25 scale-90'
                    : 'bg-black/85 border border-amber-500/50 text-amber-100 shadow-md'
                } ${breakState === 'cracking' && isExcluded ? 'animate-glitch rotate-6' : ''}`}
                style={{
                  left: `${frag.x}%`,
                  top: `${frag.y}%`,
                }}
              >
                <span className="text-base shrink-0">{frag.icon || '📌'}</span>
                <div className="flex flex-col text-left leading-tight overflow-hidden">
                  <span className="text-xs sm:text-[13px] whitespace-nowrap truncate">{frag.text}</span>
                  {frag.source && (
                    <span className="text-[9px] text-zinc-400 font-normal mt-0.5 tracking-normal whitespace-nowrap truncate max-w-[240px]">
                      src: {frag.source}
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Interactive Drawing Canvas */}
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
              breakState === 'idle' ? 'cursor-crosshair' : 'cursor-default pointer-events-none'
            }`}
          />
        </div>
      </div>

      {/* CONFIRMATION MODAL BEFORE BREAKING (High Suspense!) */}
      {breakState === 'confirm_modal' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md p-8 rounded-3xl glass-panel border-2 border-amber-500 text-center shadow-2xl animate-scaleUp bg-zinc-950">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400 mb-4 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
            </div>

            <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight mb-2">
              READY TO BREAK THE COOKIE?
            </h3>

            <p className="text-zinc-300 font-mono text-xs sm:text-sm mb-4 leading-relaxed">
              You have enclosed <strong className="text-cyan-400">{selectedCount} clues</strong> inside your cut.
              <br />
              Everything outside will crumble into dust and be lost forever.
            </p>

            <p className="text-amber-400 font-mono text-xs font-bold mb-6">
              "Did you separate the genuine signals from the deceptive noise?"
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setBreakState('closed_preview')}
                className="flex-1 py-3 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-xs font-bold hover:text-white"
              >
                LET ME REDRAW
              </button>
              <button
                onClick={handleConfirmBreak}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-red-600 via-pink-600 to-amber-500 text-white font-mono text-xs font-black tracking-wider shadow-[0_0_25px_rgba(255,0,127,0.7)] hover:scale-105 active:scale-95 transition-all"
              >
                BREAK THE COOKIE! 💥
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FRACTURE RESOLUTION BADGE */}
      {(breakState === 'cracking' || breakState === 'broken') && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none animate-scaleUp text-center">
          <div className="px-8 py-3.5 rounded-full border-2 border-white bg-black/95 text-white font-mono font-black text-xl tracking-[0.2em] uppercase shadow-[0_0_40px_rgba(0,240,255,0.9)]">
            THE COOKIE HAS BROKEN! 💥
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase mt-2.5 font-bold animate-pulse">
            COLLECTING YOUR SURVIVING CLUES FOR THE PROMPT BOX...
          </p>
        </div>
      )}
    </div>
  );
}
