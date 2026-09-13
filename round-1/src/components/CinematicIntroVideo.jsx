import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cutterAudio } from '../utils/cutterAudio';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Maximize2, SkipForward, Sparkles, Zap, Shield, Flame, X } from 'lucide-react';

const DURATION_SECONDS = 14.5;

export default function CinematicIntroVideo({ onComplete, onSkip, isModal = false, autoPlay = true }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameId = useRef(null);

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasInteractedAudio, setHasInteractedAudio] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Sound triggers tracker to avoid re-triggering within the same frame
  const triggeredSounds = useRef(new Set());
  const startTimeRef = useRef(null);
  const pausedAtRef = useRef(0);

  // Particles for laser cutting & explosions
  const particlesRef = useRef([]);
  const starsRef = useRef([]);

  // Keyboard Shortcuts (Space to play/pause, Escape to skip/exit)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlayPause();
      } else if (e.code === 'Escape') {
        e.preventDefault();
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, isFinished, isModal]);

  // Initialize background starfield
  useEffect(() => {
    const stars = [];
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 1000 + 1,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.6 ? '#f59e0b' : Math.random() > 0.3 ? '#ec4899' : '#06b6d4',
      });
    }
    starsRef.current = stars;
  }, []);

  // Audio helper with mute check
  const playSoundAt = useCallback((timeMark, soundFn, key) => {
    if (triggeredSounds.current.has(key)) return;
    if (Math.abs(currentTime - timeMark) < 0.25) {
      triggeredSounds.current.add(key);
      try {
        cutterAudio.init();
        soundFn();
      } catch (e) {}
    }
  }, [currentTime]);

  // Audio cues orchestration
  useEffect(() => {
    if (!isPlaying) return;

    playSoundAt(0.3, () => cutterAudio.playCinematicBoom(), 'boom_start');
    playSoundAt(1.5, () => cutterAudio.playGlitchStatic(), 'glitch_1');
    playSoundAt(3.2, () => cutterAudio.playHover(), 'cookie_appear');
    playSoundAt(6.2, () => cutterAudio.playLaserSweep(), 'laser_ignite');
    playSoundAt(7.5, () => cutterAudio.playLaserSizzle(), 'laser_sizzle_1');
    playSoundAt(8.8, () => cutterAudio.playLaserSizzle(), 'laser_sizzle_2');
    playSoundAt(10.2, () => cutterAudio.playCookieCrack(), 'cookie_crack');
    playSoundAt(10.5, () => cutterAudio.playLoopClosed(), 'loop_closed');
    playSoundAt(12.8, () => cutterAudio.playVictory(), 'victory_fanfare');
  }, [currentTime, isPlaying, playSoundAt]);

  // Main Canvas Rendering Engine (60 FPS Procedural Sci-Fi Motion Graphics)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp - pausedAtRef.current * 1000;
      }

      let elapsed = (timestamp - startTimeRef.current) / 1000;

      if (!isPlaying) {
        elapsed = pausedAtRef.current;
      } else {
        pausedAtRef.current = elapsed;
        setCurrentTime(elapsed);
      }

      if (elapsed >= DURATION_SECONDS) {
        setIsFinished(true);
        setIsPlaying(false);
        elapsed = DURATION_SECONDS;
      }

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      // Clear Frame with Dark Space Gradient
      const bgGrad = ctx.createRadialGradient(cx, cy, 100, cx, cy, width * 0.7);
      bgGrad.addColorStop(0, '#09090b');
      bgGrad.addColorStop(0.6, '#030712');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 1. DYNAMIC 3D STARFIELD WARP TUNNEL
      const stars = starsRef.current;
      const speed = elapsed < 3 ? 12 : elapsed < 6.5 ? 4 : elapsed < 10.5 ? 8 : 16;
      ctx.save();
      for (let s of stars) {
        s.z -= speed;
        if (s.z <= 1) {
          s.z = 1000;
          s.x = (Math.random() - 0.5) * 2000;
          s.y = (Math.random() - 0.5) * 2000;
        }
        const k = 400 / s.z;
        const px = s.x * k + cx;
        const py = s.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const sz = (1 - s.z / 1000) * s.size * 2.2;
          ctx.beginPath();
          ctx.fillStyle = s.color;
          ctx.globalAlpha = Math.min(1, Math.max(0.1, 1 - s.z / 1000));
          ctx.arc(px, py, Math.max(0.5, sz), 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // 2. CYBER GRID WARP (PERSPECTIVE FLOOR)
      ctx.save();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.15)';
      ctx.lineWidth = 1.5;
      const horizonY = cy + 120;
      const gridTime = (elapsed * 90) % 60;
      for (let i = -14; i <= 14; i++) {
        ctx.beginPath();
        ctx.moveTo(cx + i * 25, horizonY);
        ctx.lineTo(cx + i * 160, height);
        ctx.stroke();
      }
      for (let y = horizonY; y <= height; y += 22) {
        const lineY = y + gridTime * ((y - horizonY) / 200);
        if (lineY > height) continue;
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();
      }
      ctx.restore();

      // SCENE 1: (0.0s - 2.8s) - THE ANOMALY & CYBER BOOT SEQUENCE
      if (elapsed < 3.2) {
        const bootAlpha = elapsed < 2.5 ? 1 : (3.2 - elapsed) / 0.7;
        ctx.save();
        ctx.globalAlpha = Math.max(0, bootAlpha);

        // Boot HUD Reticle
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 140 + Math.sin(elapsed * 8) * 10, 0, Math.PI * 2);
        ctx.stroke();

        // Crosshairs
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.6)';
        ctx.beginPath();
        ctx.moveTo(cx - 180, cy);
        ctx.lineTo(cx - 150, cy);
        ctx.moveTo(cx + 150, cy);
        ctx.lineTo(cx + 180, cy);
        ctx.moveTo(cx, cy - 180);
        ctx.lineTo(cx, cy - 150);
        ctx.moveTo(cx, cy + 150);
        ctx.lineTo(cx, cy + 180);
        ctx.stroke();

        // Boot Text
        ctx.textAlign = 'center';
        ctx.font = '900 14px monospace';
        ctx.fillStyle = '#06b6d4';
        ctx.fillText('ARENA CLASSIFIED DIRECTIVE // 0x7F-DALGONA', cx, cy - 80);

        ctx.font = '900 48px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 25;
        ctx.fillText('NOISE ARCHIVE DETECTED', cx, cy);

        ctx.font = '700 16px monospace';
        ctx.fillStyle = '#f59e0b';
        ctx.shadowBlur = 10;
        ctx.fillText('INITIALIZING LASER CUTTING CARVER...', cx, cy + 50);

        ctx.restore();
      }

      // SCENE 2 & 3: (2.8s - 10.5s) - 3D DALGONA WAFER & LASER CUTTER
      if (elapsed >= 2.5 && elapsed <= 11.5) {
        const waferFadeIn = Math.min(1, (elapsed - 2.5) / 0.8);
        const waferFadeOut = elapsed > 10.5 ? Math.max(0, (11.5 - elapsed)) : 1;
        const waferAlpha = waferFadeIn * waferFadeOut;

        ctx.save();
        ctx.globalAlpha = waferAlpha;

        // Wafer Rotation Angle
        const rot = elapsed * 0.45;
        const waferRadius = 175;

        // Outer Wafer Glow
        const cookieGlow = ctx.createRadialGradient(cx, cy, 100, cx, cy, waferRadius + 45);
        cookieGlow.addColorStop(0, 'rgba(217, 119, 6, 0.25)');
        cookieGlow.addColorStop(0.7, 'rgba(245, 158, 11, 0.1)');
        cookieGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = cookieGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, waferRadius + 45, 0, Math.PI * 2);
        ctx.fill();

        // 3D Wafer Body (Caramel Sugar Texture)
        const waferGrad = ctx.createRadialGradient(cx - 40, cy - 50, 20, cx, cy, waferRadius);
        waferGrad.addColorStop(0, '#fcd34d');
        waferGrad.addColorStop(0.4, '#d97706');
        waferGrad.addColorStop(0.85, '#92400e');
        waferGrad.addColorStop(1, '#451a03');

        ctx.fillStyle = waferGrad;
        ctx.shadowColor = '#b45309';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(cx, cy, waferRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Honeycomb Sugar Craters & Bubbles
        ctx.fillStyle = 'rgba(120, 53, 15, 0.35)';
        for (let i = 0; i < 28; i++) {
          const angle = i * 0.85 + rot * 0.3;
          const dist = 35 + (i * 19) % (waferRadius - 40);
          const bx = cx + Math.cos(angle) * dist;
          const by = cy + Math.sin(angle) * dist;
          const bsz = 4 + (i % 6) * 2.2;
          ctx.beginPath();
          ctx.arc(bx, by, bsz, 0, Math.PI * 2);
          ctx.fill();
        }

        // Inner Embossed Shape (Squid Game Star / Umbrella Contour)
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(Math.sin(rot * 0.5) * 0.1);

        // Draw Star Silhouette on Cookie
        const drawStar = (radius, points = 5) => {
          ctx.beginPath();
          for (let i = 0; i < points * 2; i++) {
            const r = i % 2 === 0 ? radius : radius * 0.45;
            const a = (i * Math.PI) / points - Math.PI / 2;
            const x = Math.cos(a) * r;
            const y = Math.sin(a) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        };

        // Embossed outline indentation
        ctx.strokeStyle = 'rgba(69, 26, 3, 0.8)';
        ctx.lineWidth = 5;
        drawStar(78);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(253, 230, 138, 0.5)';
        ctx.lineWidth = 2;
        drawStar(79);
        ctx.stroke();

        // Inner Signal Core Glow
        const coreGlow = ctx.createRadialGradient(0, 0, 10, 0, 0, 80);
        coreGlow.addColorStop(0, 'rgba(251, 191, 36, 0.35)');
        coreGlow.addColorStop(1, 'rgba(217, 119, 6, 0)');
        ctx.fillStyle = coreGlow;
        drawStar(75);
        ctx.fill();

        ctx.restore();

        // Floating Trap Clues Orbiting (Red Holograms)
        if (elapsed >= 3.5 && elapsed <= 9.5) {
          const trapLabels = ['[FLUFF]', '[HALFWAY TRUTH]', '[OVERFITTING]', '[AI NOISE]'];
          trapLabels.forEach((lbl, idx) => {
            const trapAngle = rot * 0.8 + (idx * Math.PI * 2) / 4;
            const trapDist = waferRadius + 55 + Math.sin(elapsed * 3 + idx) * 12;
            const tx = cx + Math.cos(trapAngle) * trapDist;
            const ty = cy + Math.sin(trapAngle) * trapDist;

            ctx.save();
            ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.6)';
            ctx.lineWidth = 1;
            ctx.font = '800 11px monospace';
            ctx.textAlign = 'center';

            // Warning Dot & Box
            ctx.strokeRect(tx - 45, ty - 12, 90, 24);
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(tx - 45, ty - 12, 90, 24);

            ctx.fillStyle = '#f87171';
            ctx.fillText(lbl, tx, ty + 4);

            // Dotted leader line to wafer
            ctx.setLineDash([2, 4]);
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(cx + Math.cos(trapAngle) * waferRadius, cy + Math.sin(trapAngle) * waferRadius);
            ctx.stroke();

            ctx.restore();
          });
        }

        // SCENE 3: ACTIVE LASER CUTTER SEQUENCE (6.2s - 10.2s)
        if (elapsed >= 6.0 && elapsed <= 10.2) {
          const cutProgress = (elapsed - 6.0) / 4.0; // 0 to 1
          const cutAngle = cutProgress * Math.PI * 2 - Math.PI / 2;
          const starRadius = 78;

          // Compute current laser tip position
          const lx = cx + Math.cos(cutAngle) * (starRadius + Math.sin(cutAngle * 5) * 18);
          const ly = cy + Math.sin(cutAngle) * (starRadius + Math.sin(cutAngle * 5) * 18);

          // Laser Origin Beam (Firing from upper space)
          ctx.save();
          const laserBeam = ctx.createLinearGradient(lx - 120, -50, lx, ly);
          laserBeam.addColorStop(0, 'rgba(6, 182, 212, 0)');
          laserBeam.addColorStop(0.7, 'rgba(6, 182, 212, 0.6)');
          laserBeam.addColorStop(1, '#ffffff');

          ctx.strokeStyle = laserBeam;
          ctx.lineWidth = 5;
          ctx.shadowColor = '#06b6d4';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.moveTo(lx - 120, -50);
          ctx.lineTo(lx, ly);
          ctx.stroke();

          // High-Intensity Laser Contact Point
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 35;
          ctx.beginPath();
          ctx.arc(lx, ly, 7, 0, Math.PI * 2);
          ctx.fill();

          // Laser Cutting Burn Path (Molten Neon Cut Trail)
          ctx.strokeStyle = '#f59e0b';
          ctx.lineWidth = 4;
          ctx.shadowColor = '#ef4444';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          for (let p = 0; p <= cutProgress; p += 0.02) {
            const a = p * Math.PI * 2 - Math.PI / 2;
            const px = cx + Math.cos(a) * (starRadius + Math.sin(a * 5) * 18);
            const py = cy + Math.sin(a) * (starRadius + Math.sin(a * 5) * 18);
            if (p === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.stroke();

          // Spawn Spark Particles
          for (let sp = 0; sp < 8; sp++) {
            particlesRef.current.push({
              x: lx,
              y: ly,
              vx: (Math.random() - 0.5) * 14 + Math.cos(cutAngle) * 3,
              vy: (Math.random() - 0.8) * 15,
              life: 1.0,
              decay: 0.035 + Math.random() * 0.04,
              size: 2 + Math.random() * 3.5,
              color: Math.random() > 0.4 ? '#f59e0b' : Math.random() > 0.2 ? '#fef08a' : '#ef4444',
            });
          }

          ctx.restore();
        }

        ctx.restore();
      }

      // 4. PARTICLE PHYSICS SIMULATOR & RENDERER (SPARKS & DUST)
      const activeParticles = particlesRef.current;
      for (let i = activeParticles.length - 1; i >= 0; i--) {
        const p = activeParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // Gravity
        p.life -= p.decay;

        if (p.life <= 0) {
          activeParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // SCENE 4: (10.2s - 12.8s) - THE COOKIE SHATTER & CONTEXT CORE ASCENSION
      if (elapsed >= 10.0 && elapsed <= 13.5) {
        const shatterProgress = Math.min(1, (elapsed - 10.0) / 1.5);
        ctx.save();

        // Expanding Shockwave Ring
        const shockRadius = shatterProgress * 420;
        ctx.strokeStyle = `rgba(245, 158, 11, ${1 - shatterProgress})`;
        ctx.lineWidth = 6 * (1 - shatterProgress);
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.arc(cx, cy, shockRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Outer Shards Flying Apart
        const shardCount = 18;
        for (let i = 0; i < shardCount; i++) {
          const angle = (i * Math.PI * 2) / shardCount;
          const dist = 180 + shatterProgress * 320;
          const sx = cx + Math.cos(angle) * dist;
          const sy = cy + Math.sin(angle) * dist;
          const sAlpha = Math.max(0, 1 - shatterProgress * 1.1);

          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate(i + shatterProgress * 6);
          ctx.fillStyle = `rgba(180, 83, 9, ${sAlpha})`;
          ctx.strokeStyle = `rgba(251, 191, 36, ${sAlpha})`;
          ctx.lineWidth = 2;

          ctx.beginPath();
          ctx.moveTo(-18, -12);
          ctx.lineTo(24, -5);
          ctx.lineTo(12, 20);
          ctx.lineTo(-14, 16);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.restore();
        }

        // Rising Golden Core (The Signal)
        const coreElev = Math.sin(shatterProgress * Math.PI * 0.5) * 40;
        const coreGlowScale = 1 + shatterProgress * 0.4;

        ctx.save();
        ctx.translate(cx, cy - coreElev);
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 50 * coreGlowScale;

        // Golden Core Star
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? 95 * coreGlowScale : 45 * coreGlowScale;
          const a = (i * Math.PI) / 5 - Math.PI / 2;
          const x = Math.cos(a) * r;
          const y = Math.sin(a) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        // High Voltage Energy Rings
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.8)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(0, 0, 130 * coreGlowScale, 45 * coreGlowScale, elapsed * 2, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(236, 72, 153, 0.8)';
        ctx.beginPath();
        ctx.ellipse(0, 0, 130 * coreGlowScale, 45 * coreGlowScale, -elapsed * 2, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();

        // Ascension Text
        ctx.textAlign = 'center';
        ctx.font = '900 15px monospace';
        ctx.fillStyle = '#06b6d4';
        ctx.fillText('NOISE ELIMINATED // 100% CONTEXT PURIFIED', cx, cy + 150);

        ctx.restore();
      }

      // SCENE 5: (12.8s - 14.5s+) - TITLE SLAM & BATTLE READY
      if (elapsed >= 12.5) {
        const titleAlpha = Math.min(1, (elapsed - 12.5) / 0.6);
        ctx.save();
        ctx.globalAlpha = titleAlpha;

        ctx.textAlign = 'center';

        // Glowing Badge
        ctx.font = '900 14px monospace';
        ctx.fillStyle = '#ec4899';
        ctx.fillText('ARENA ZERO // ROUND 01 DEPLOYMENT', cx, cy - 110);

        // Huge Main Title
        ctx.font = '900 76px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(245, 158, 11, 0.9)';
        ctx.shadowBlur = 45;
        ctx.fillText('PROMPT WAR', cx, cy - 35);

        // Subtitle
        ctx.font = '900 24px monospace';
        ctx.fillStyle = '#f59e0b';
        ctx.shadowColor = 'rgba(236, 72, 153, 0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText('DALGONA PROMPT : THE PERFECT CUT', cx, cy + 25);

        // Tagline
        ctx.font = '700 14px monospace';
        ctx.fillStyle = '#a1a1aa';
        ctx.shadowBlur = 0;
        ctx.fillText('CUT THE NOISE. FORGE THE WEAPON. SURVIVE THE EVALUATION.', cx, cy + 65);

        ctx.restore();
      }

      // 5. CINEMATIC KINETIC SUBTITLES (SYNCHRONIZED WITH TIME BEATS)
      let subtitle = '';
      let subHighlight = '';

      if (elapsed >= 0.5 && elapsed < 3.2) {
        subtitle = 'MISSION PROTOCOL // ARCHIVE BREACH';
        subHighlight = 'AI SYSTEMS OVERWHELMED BY HALLUCINATION NOISE';
      } else if (elapsed >= 3.2 && elapsed < 6.2) {
        subtitle = 'THE DALGONA EXPERIMENT';
        subHighlight = 'CRITICAL CONTEXT IS BURIED AMONGST TOXIC TRAPS';
      } else if (elapsed >= 6.2 && elapsed < 10.2) {
        subtitle = 'ONE CONTINUOUS CUT // ZERO SECOND CHANCES';
        subHighlight = 'TRACE THE PRECISE BOUNDARY — SHATTER THE REST';
      } else if (elapsed >= 10.2 && elapsed < 12.8) {
        subtitle = 'WEAPON SYNTHESIS INITIATED';
        subHighlight = 'ISOLATE THE CONTEXT MATRIX TO FORGE YOUR PROMPT';
      } else if (elapsed >= 12.8) {
        subtitle = 'ARENA IS LIVE';
        subHighlight = 'PROVE YOUR CONTEXT INTELLECT IN 5:00';
      }

      if (subtitle) {
        ctx.save();
        ctx.textAlign = 'center';

        // Subtitle Background Pill
        const subWidth = Math.max(380, subtitle.length * 11 + 60);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.lineWidth = 1;
        ctx.fillRect(cx - subWidth / 2, height - 105, subWidth, 54);
        ctx.strokeRect(cx - subWidth / 2, height - 105, subWidth, 54);

        ctx.font = '800 13px monospace';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText(subtitle, cx, height - 85);

        ctx.font = '600 11px monospace';
        ctx.fillStyle = '#e4e4e7';
        ctx.fillText(subHighlight, cx, height - 67);

        ctx.restore();
      }

      // 6. CINEMATIC CRT SCANLINES & VIGNETTE
      ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 1.5);
      }
      // Lens Vignette
      const vigGrad = ctx.createRadialGradient(cx, cy, height * 0.4, cx, cy, width * 0.75);
      vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vigGrad.addColorStop(1, 'rgba(0,0,0,0.7)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      // 7. CINEMATIC LETTERBOX BARS (2.39:1 Anamorphic Look)
      const letterboxHeight = 36;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, letterboxHeight);
      ctx.fillRect(0, height - letterboxHeight, width, letterboxHeight);

      // Top Edge Cinematic HUD Lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, letterboxHeight);
      ctx.lineTo(width, letterboxHeight);
      ctx.moveTo(0, height - letterboxHeight);
      ctx.lineTo(width, height - letterboxHeight);
      ctx.stroke();

      // Rec Marker & Timecode
      ctx.font = '700 10px monospace';
      ctx.fillStyle = elapsed % 1 < 0.5 ? '#ef4444' : '#71717a';
      ctx.fillText('● REC', 25, 24);

      ctx.fillStyle = '#a1a1aa';
      const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
      const ss = String(Math.floor(elapsed % 60)).padStart(2, '0');
      const ms = String(Math.floor((elapsed % 1) * 100)).padStart(2, '0');
      ctx.fillText(`ARENA-CAM 01 // [${mm}:${ss}:${ms}] // 60 FPS RAW`, 70, 24);

      // Top Right Codec Label
      ctx.textAlign = 'right';
      ctx.fillText('PROMPT WAR : ROUND 01 // AUDIO: STEREO SYNTH', width - 25, 24);

      // Loop RAF
      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPlaying]);

  // Handle Play/Pause
  const togglePlayPause = () => {
    if (isFinished) {
      handleReplay();
      return;
    }
    if (!hasInteractedAudio) {
      cutterAudio.init();
      setHasInteractedAudio(true);
    }
    setIsPlaying((prev) => !prev);
  };

  // Replay from 0
  const handleReplay = () => {
    triggeredSounds.current.clear();
    startTimeRef.current = performance.now();
    pausedAtRef.current = 0;
    setCurrentTime(0);
    setIsFinished(false);
    setIsPlaying(true);
    cutterAudio.init();
    setHasInteractedAudio(true);
  };

  // Toggle Mute
  const handleToggleMute = () => {
    cutterAudio.init();
    const muted = cutterAudio.toggleMute();
    setIsMuted(muted);
    setHasInteractedAudio(true);
  };

  // Skip Video
  const handleSkip = () => {
    if (onSkip) onSkip();
    else if (onComplete) onComplete();
  };

  // Enter Arena action
  const handleEnterArena = () => {
    cutterAudio.init();
    cutterAudio.playVictory();
    if (onComplete) onComplete();
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Scrubber Seek
  const handleScrub = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = pos * DURATION_SECONDS;
    pausedAtRef.current = newTime;
    startTimeRef.current = performance.now() - newTime * 1000;
    setCurrentTime(newTime);
    if (newTime < DURATION_SECONDS) setIsFinished(false);
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center bg-black overflow-hidden select-none ${
        isModal
          ? 'fixed inset-0 z-50 w-screen h-screen'
          : 'w-full max-w-4xl mx-auto rounded-2xl border-2 border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.25)] my-4'
      }`}
    >
      {/* 16:9 Canvas Viewport */}
      <div className="relative w-full aspect-video max-h-[82vh] flex items-center justify-center bg-black">
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          onClick={togglePlayPause}
          className="w-full h-full object-contain cursor-pointer"
        />

        {/* Big Center Play Overlay when Paused */}
        {!isPlaying && !isFinished && (
          <div
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer transition-opacity"
          >
            <div className="group flex flex-col items-center gap-3 p-6 rounded-3xl bg-black/80 border-2 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.6)] transform group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-black font-black pl-1">
                <Play className="w-8 h-8 fill-black" />
              </div>
              <span className="font-mono text-xs font-black tracking-[0.2em] text-amber-300 uppercase">
                RESUME TRAILER
              </span>
            </div>
          </div>
        )}

        {/* Finale Screen (When Video Reaches End) */}
        {isFinished && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md animate-fadeIn z-30 p-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              TRAILER COMPLETE // ARENA UNLOCKED
            </div>

            <h2 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-2">
              THE CUT AWAITS
            </h2>

            <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md uppercase tracking-wider mb-6">
              1 Cookie. 1 Continuous Cut. 40 Clue Points. 5 Minutes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleEnterArena}
                className="group relative px-8 py-3.5 rounded-xl font-mono text-sm sm:text-base font-black uppercase tracking-[0.2em] text-white bg-gradient-to-r from-amber-500 via-pink-600 to-amber-600 hover:scale-105 active:scale-95 transition-all shadow-[0_0_35px_rgba(245,158,11,0.5)] flex items-center gap-3"
              >
                <Zap className="w-5 h-5 text-amber-300" />
                <span>ENTER ARENA NOW</span>
              </button>

              <button
                onClick={handleReplay}
                className="px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-300 bg-zinc-900 border border-zinc-700 hover:border-amber-400 hover:text-white transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>REPLAY INTRO</span>
              </button>
            </div>
          </div>
        )}

        {/* Top Floating Action Buttons */}
        <div className="absolute top-4 right-4 z-40 flex items-center gap-2">
          <button
            onClick={handleSkip}
            className="px-3.5 py-1.5 rounded-lg bg-black/70 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-white font-mono text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center gap-1.5"
            title="Skip Intro to start game"
          >
            <span>SKIP INTRO</span>
            <SkipForward className="w-3.5 h-3.5" />
          </button>

          {isModal && (
            <button
              onClick={handleSkip}
              className="w-8 h-8 rounded-lg bg-black/70 border border-zinc-700 hover:border-red-500 text-zinc-400 hover:text-red-400 flex items-center justify-center transition-all backdrop-blur-md"
              title="Close Cinema [ESC]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Futuristic Bottom Control Bar */}
      <div className="w-full bg-zinc-950 border-t border-zinc-800/80 px-4 py-2.5 flex flex-col gap-2 z-40">
        {/* Scrubber Timeline Bar */}
        <div
          onClick={handleScrub}
          className="relative w-full h-2 bg-zinc-800 rounded-full cursor-pointer group flex items-center"
        >
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-pink-500 rounded-full relative"
            style={{ width: `${(currentTime / DURATION_SECONDS) * 100}%` }}
          >
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(245,158,11,0.9)] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Control Buttons Row */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlayPause}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center transition-all"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-amber-400" />}
            </button>

            <button
              onClick={handleReplay}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all"
              title="Replay Video"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleToggleMute}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all"
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Timecode */}
            <div className="text-zinc-400 font-mono tracking-widest pl-1">
              <span className="text-amber-400 font-bold">
                00:{String(Math.floor(currentTime)).padStart(2, '0')}
              </span>{' '}
              / 00:{String(Math.floor(DURATION_SECONDS)).padStart(2, '0')}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 uppercase tracking-widest">
              HD 60FPS CINEMATIC
            </span>

            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all"
              title="Toggle Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
