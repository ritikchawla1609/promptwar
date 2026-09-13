import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cutterAudio } from '../utils/cutterAudio';
import { Sparkles, Play, RotateCcw, Volume2, VolumeX, SkipForward, Flame } from 'lucide-react';

const DURATION_SECONDS = 13.0;

export default function CartoonIntroAnimation({ onStartGame, onSkip }) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [clickSquish, setClickSquish] = useState(0);

  const startTimeRef = useRef(null);
  const pausedAtRef = useRef(0);
  const triggeredSounds = useRef(new Set());
  const confettiRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });

  // Confetti particles generator for victory
  const spawnConfetti = (cx, cy) => {
    const colors = ['#f43f5e', '#fbbf24', '#06b6d4', '#10b981', '#a855f7', '#ffffff'];
    const parts = [];
    for (let i = 0; i < 70; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 10;
      parts.push({
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 8,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        life: 1.0,
      });
    }
    confettiRef.current = parts;
  };

  // Sound triggers
  const playSoundAt = useCallback((timeMark, soundFn, key) => {
    if (triggeredSounds.current.has(key)) return;
    const elapsed = pausedAtRef.current;
    if (Math.abs(elapsed - timeMark) < 0.2) {
      triggeredSounds.current.add(key);
      try {
        cutterAudio.init();
        soundFn();
      } catch (e) {}
    }
  }, []);

  // Main Canvas Render Loop (60 FPS Handcrafted Cartoon)
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
      }

      if (elapsed >= DURATION_SECONDS) {
        setIsFinished(true);
        elapsed = DURATION_SECONDS;
      }

      // Sounds
      if (isPlaying) {
        playSoundAt(0.2, () => cutterAudio.playCartoonBoing(), 'boing_start');
        playSoundAt(2.8, () => cutterAudio.playCartoonSqueak(), 'squeak_scared');
        playSoundAt(5.2, () => cutterAudio.playCartoonTink(), 'tink_1');
        playSoundAt(6.5, () => cutterAudio.playCartoonTink(), 'tink_2');
        playSoundAt(7.8, () => cutterAudio.playCartoonPop(), 'pop_trap');
        playSoundAt(9.5, () => {
          cutterAudio.playCartoonFanfare();
          spawnConfetti(canvas.width / 2, canvas.height / 2 - 30);
        }, 'fanfare_win');
      }

      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2 + 10;

      // 1. CARTOON SUNBURST / POP ART BACKGROUND
      ctx.save();
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#180728');
      bgGrad.addColorStop(0.5, '#2e1065');
      bgGrad.addColorStop(1, '#090514');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Rotating comic rays
      const rays = 18;
      const rayAngle = (elapsed * 0.15) % (Math.PI * 2);
      ctx.translate(cx, cy - 20);
      for (let i = 0; i < rays; i++) {
        const a1 = rayAngle + (i * 2 * Math.PI) / rays;
        const a2 = a1 + Math.PI / rays;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, width, a1, a2);
        ctx.closePath();
        ctx.fillStyle = i % 2 === 0 ? 'rgba(244, 63, 94, 0.08)' : 'rgba(251, 191, 36, 0.06)';
        ctx.fill();
      }
      ctx.restore();

      // Floating Cartoon Sparkles & Candies
      ctx.save();
      for (let i = 0; i < 16; i++) {
        const spX = (cx + Math.sin(elapsed * 0.8 + i * 1.5) * (width * 0.44));
        const spY = (cy + Math.cos(elapsed * 0.6 + i * 2.1) * (height * 0.38));
        ctx.fillStyle = i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f43f5e' : '#38bdf8';
        ctx.beginPath();
        ctx.arc(spX, spY, 3 + (i % 3) * 2, 0, Math.PI * 2);
        ctx.fill();

        // 4-pointed sparkle
        if (i % 2 === 0) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(spX - 8, spY);
          ctx.lineTo(spX + 8, spY);
          ctx.moveTo(spX, spY - 8);
          ctx.lineTo(spX, spY + 8);
          ctx.stroke();
        }
      }
      ctx.restore();

      // 2. STORY PHASES
      const isAct1 = elapsed < 2.8; // Happy Intro
      const isAct2 = elapsed >= 2.8 && elapsed < 5.2; // Guard approaches, panic!
      const isAct3 = elapsed >= 5.2 && elapsed < 9.5; // Tapping / Chipping needle
      const isAct4 = elapsed >= 9.5; // Victory / Perfect Star!

      // 3. DRAW MR. DALGONA (CARTOON COOKIE)
      ctx.save();
      const bounce = isAct4
        ? Math.abs(Math.sin(elapsed * 9)) * 25
        : Math.sin(elapsed * 6) * 10;
      const squish = isAct2 ? 1 + Math.sin(elapsed * 24) * 0.08 : 1 + Math.sin(elapsed * 6) * 0.04;
      const cookieY = cy - bounce + (clickSquish > 0 ? 10 : 0);

      ctx.translate(cx, cookieY);
      ctx.scale(squish, 1 / squish);

      // Cartoon Cookie Drop Shadow
      ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.beginPath();
      ctx.ellipse(0, 110 + bounce, 110, 24, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const cookieRadius = 96;

      if (!isAct4) {
        // Normal Caramel Cookie Body
        ctx.fillStyle = '#f59e0b';
        ctx.strokeStyle = '#3b1c04';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(0, 0, cookieRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Inner Honey Toast Highlight
        ctx.fillStyle = '#fcd34d';
        ctx.beginPath();
        ctx.arc(-22, -22, cookieRadius * 0.65, 0, Math.PI * 2);
        ctx.fill();

        // Embossed Star Line on Cookie
        ctx.save();
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 4;
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? 46 : 22;
          const a = (i * Math.PI) / 5 - Math.PI / 2;
          const x = Math.cos(a) * r;
          const y = Math.sin(a) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      } else {
        // ACT 4: Outer Cookie Cracked Away! Golden Star Core Alive!
        ctx.save();
        // Golden Star
        ctx.fillStyle = '#fbbf24';
        ctx.strokeStyle = '#3b1c04';
        ctx.lineWidth = 7;
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? 98 : 48;
          const a = (i * Math.PI) / 5 - Math.PI / 2;
          const x = Math.cos(a) * r;
          const y = Math.sin(a) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      // CARTOON FACE
      // Eyes
      const eyeOffsetX = 24;
      const eyeOffsetY = isAct4 ? -12 : -16;
      const eyeRadius = isAct2 ? 18 : 14;

      // Eye Whites
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#3b1c04';
      ctx.lineWidth = 4;

      // Left Eye
      ctx.beginPath();
      ctx.ellipse(-eyeOffsetX, eyeOffsetY, eyeRadius, eyeRadius * 1.15, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Right Eye
      ctx.beginPath();
      ctx.ellipse(eyeOffsetX, eyeOffsetY, eyeRadius, eyeRadius * 1.15, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Pupils (Look around playfully)
      const lookX = isAct2 ? Math.sin(elapsed * 18) * 6 : Math.sin(elapsed * 2) * 4;
      const lookY = isAct2 ? -4 : 2;

      ctx.fillStyle = '#1e1b4b';
      ctx.beginPath();
      ctx.arc(-eyeOffsetX + lookX, eyeOffsetY + lookY, isAct2 ? 6 : 7, 0, Math.PI * 2);
      ctx.arc(eyeOffsetX + lookX, eyeOffsetY + lookY, isAct2 ? 6 : 7, 0, Math.PI * 2);
      ctx.fill();

      // White Pupil Highlights (Anime Style)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(-eyeOffsetX + lookX - 2, eyeOffsetY + lookY - 2, 2.5, 0, Math.PI * 2);
      ctx.arc(eyeOffsetX + lookX - 2, eyeOffsetY + lookY - 2, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Cute Pink Blush Cheeks
      ctx.fillStyle = '#fb7185';
      ctx.beginPath();
      ctx.ellipse(-eyeOffsetX - 12, eyeOffsetY + 16, 8, 5, 0, 0, Math.PI * 2);
      ctx.ellipse(eyeOffsetX + 12, eyeOffsetY + 16, 8, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Cartoon Mouth
      ctx.strokeStyle = '#3b1c04';
      ctx.lineWidth = 4;
      ctx.fillStyle = '#ef4444';

      if (isAct2 || isAct3) {
        // Scared / screaming "O" mouth!
        ctx.beginPath();
        ctx.ellipse(0, eyeOffsetY + 22, 10, 14, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else if (isAct4) {
        // Big ecstatic grin with teeth & tongue!
        ctx.beginPath();
        ctx.arc(0, eyeOffsetY + 16, 18, 0.1, Math.PI - 0.1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        // Happy cute smile
        ctx.beginPath();
        ctx.arc(0, eyeOffsetY + 14, 12, 0.2, Math.PI - 0.2);
        ctx.stroke();
      }

      // Sweat Drops when Scared
      if (isAct2 || isAct3) {
        ctx.fillStyle = '#38bdf8';
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 2;
        const sweatY = -45 + Math.sin(elapsed * 12) * 5;
        ctx.beginPath();
        ctx.moveTo(38, sweatY);
        ctx.bezierCurveTo(46, sweatY + 12, 46, sweatY + 18, 38, sweatY + 20);
        ctx.bezierCurveTo(30, sweatY + 18, 30, sweatY + 12, 38, sweatY);
        ctx.fill();
        ctx.stroke();
      }

      // Cool Sunglasses on Victory!
      if (isAct4) {
        ctx.save();
        ctx.fillStyle = '#18181b';
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 3;
        // Left lens
        ctx.beginPath();
        ctx.roundRect(-42, -26, 36, 20, 4);
        ctx.fill();
        ctx.stroke();
        // Right lens
        ctx.beginPath();
        ctx.roundRect(6, -26, 36, 20, 4);
        ctx.fill();
        ctx.stroke();
        // Bridge
        ctx.beginPath();
        ctx.moveTo(-6, -16);
        ctx.lineTo(6, -16);
        ctx.stroke();
        // White glint
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(-34, -22);
        ctx.lineTo(-14, -10);
        ctx.moveTo(14, -22);
        ctx.lineTo(34, -10);
        ctx.stroke();
        ctx.restore();
      }

      ctx.restore(); // end Mr Dalgona

      // 4. CHIBI PINK SQUID GAME GUARD (ACT 2 & 3)
      if (isAct2 || isAct3) {
        ctx.save();
        const guardEntry = Math.min(1, (elapsed - 2.8) / 0.7);
        const guardX = cx + 175 - (1 - guardEntry) * 120;
        const guardY = cy + 20 + Math.sin(elapsed * 10) * 8;

        ctx.translate(guardX, guardY);

        // Guard Hooded Body (Pink)
        ctx.fillStyle = '#f43f5e';
        ctx.strokeStyle = '#1e1b4b';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.ellipse(0, 35, 42, 50, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Black Belt
        ctx.fillStyle = '#18181b';
        ctx.fillRect(-38, 48, 76, 12);

        // Guard Head (Black Mask)
        ctx.fillStyle = '#09090b';
        ctx.beginPath();
        ctx.arc(0, -18, 38, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // White Triangle Emblem on Mask
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.moveTo(0, -32);
        ctx.lineTo(16, -6);
        ctx.lineTo(-16, -6);
        ctx.closePath();
        ctx.stroke();

        // Giant Shiny Cartoon Needle in Hand
        ctx.save();
        const needleBob = isAct3 ? Math.sin(elapsed * 25) * 22 : Math.sin(elapsed * 4) * 8;
        ctx.translate(-35 - needleBob, -15);
        ctx.rotate(-0.85);

        // Needle Shank
        ctx.fillStyle = '#e2e8f0';
        ctx.strokeStyle = '#1e1b4b';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, -75);
        ctx.lineTo(7, 5);
        ctx.lineTo(-7, 5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Shiny Needle Glint
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, -75, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        ctx.restore();

        // Comic Sound Pop Effect: *TINK!*
        if (isAct3) {
          ctx.save();
          const tinkAngle = (elapsed * 8) % (Math.PI * 2);
          const tx = cx - 45 + Math.cos(tinkAngle) * 35;
          const ty = cy - 40 + Math.sin(tinkAngle) * 25;

          ctx.font = '900 20px sans-serif';
          ctx.fillStyle = '#fde047';
          ctx.strokeStyle = '#3b1c04';
          ctx.lineWidth = 5;
          ctx.strokeText('✨ *TINK!*', tx, ty);
          ctx.fillText('✨ *TINK!*', tx, ty);
          ctx.restore();
        }
      }

      // 5. TOXIC TRAP MONSTER (SPOTTED & POPPED)
      if (elapsed >= 4.2 && elapsed < 8.2) {
        ctx.save();
        const trapPop = elapsed > 7.5 ? Math.max(0, (8.2 - elapsed) / 0.7) : 1;
        const trapX = cx - 180 + (elapsed > 7.5 ? (elapsed - 7.5) * -60 : 0);
        const trapY = cy - 25 + Math.sin(elapsed * 8) * 12;

        ctx.translate(trapX, trapY);
        ctx.scale(trapPop, trapPop);

        // Spiky Red Trap Blob
        ctx.fillStyle = '#ef4444';
        ctx.strokeStyle = '#3b1c04';
        ctx.lineWidth = 4;
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
          const r = i % 2 === 0 ? 32 : 22;
          const a = (i * Math.PI) / 4;
          const x = Math.cos(a) * r;
          const y = Math.sin(a) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Cross eyes
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-12, -6);
        ctx.lineTo(-4, 2);
        ctx.moveTo(-4, -6);
        ctx.lineTo(-12, 2);
        ctx.moveTo(4, -6);
        ctx.lineTo(12, 2);
        ctx.moveTo(12, -6);
        ctx.lineTo(4, 2);
        ctx.stroke();

        // Label
        ctx.font = '900 11px monospace';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText('⚠️ TRAP!', 0, 16);

        if (elapsed > 7.2) {
          ctx.font = '900 22px sans-serif';
          ctx.fillStyle = '#38bdf8';
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 4;
          ctx.strokeText('💥 POOF!', 10, -25);
          ctx.fillText('💥 POOF!', 10, -25);
        }

        ctx.restore();
      }

      // 6. CARTOON SPEECH BUBBLE
      let dialogueText = '';
      let dialogueSpeaker = '';

      if (isAct1) {
        dialogueSpeaker = 'MR. DALGONA';
        dialogueText = 'Hi! I am Dalgona! Cut the shape... DO NOT BREAK ME! 🍪✨';
      } else if (isAct2) {
        dialogueSpeaker = 'CHIBI GUARD';
        dialogueText = 'Target spotted... One single closed cut! 🎯';
      } else if (isAct3) {
        dialogueSpeaker = 'MR. DALGONA';
        dialogueText = 'Eeeek! Trace the star! Dodge all the red traps! 😱';
      } else {
        dialogueSpeaker = 'VICTORY!';
        dialogueText = 'PERFECT CUT! Context Purified! Ready for PROMPT WAR! 🏆🎉';
      }

      ctx.save();
      ctx.textAlign = 'center';
      const bubbleW = Math.min(width - 60, 520);
      const bubbleH = 64;
      const bubbleX = cx - bubbleW / 2;
      const bubbleY = 24;

      // Bubble White Card
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#1e1b4b';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 20);
      ctx.fill();
      ctx.stroke();

      // Comic Tail
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(cx - 15, bubbleY + bubbleH);
      ctx.lineTo(cx, bubbleY + bubbleH + 14);
      ctx.lineTo(cx + 15, bubbleY + bubbleH);
      ctx.fill();
      ctx.stroke();
      // Remove overlapping outline
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(cx - 13, bubbleY + bubbleH - 4, 26, 6);

      // Speaker Tag
      ctx.font = '900 11px monospace';
      ctx.fillStyle = '#f43f5e';
      ctx.fillText(`★ ${dialogueSpeaker} ★`, cx, bubbleY + 20);

      // Speech Text
      ctx.font = '800 15px sans-serif';
      ctx.fillStyle = '#0f172a';
      ctx.fillText(dialogueText, cx, bubbleY + 44);

      ctx.restore();

      // 7. CONFETTI PHYSICS (ACT 4)
      const confs = confettiRef.current;
      for (let i = confs.length - 1; i >= 0; i--) {
        const c = confs[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.28; // Gravity
        c.rot += c.vRot;
        c.life -= 0.008;

        if (c.life <= 0) {
          confs.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.life;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.7);
        ctx.restore();
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isPlaying, playSoundAt, clickSquish]);

  // Handle click on cookie for playful boing
  const handleCanvasClick = () => {
    cutterAudio.init();
    cutterAudio.playCartoonBoing();
    setClickSquish(1);
    setTimeout(() => setClickSquish(0), 200);
  };

  const handleReplay = () => {
    triggeredSounds.current.clear();
    confettiRef.current = [];
    startTimeRef.current = performance.now();
    pausedAtRef.current = 0;
    setIsFinished(false);
    setIsPlaying(true);
    cutterAudio.init();
    cutterAudio.playCartoonBoing();
  };

  const handleToggleMute = () => {
    cutterAudio.init();
    const muted = cutterAudio.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center select-none animate-fadeIn">
      {/* Cartoon Stage Wrapper with Vibrant Border */}
      <div className="relative w-full aspect-[16/9] max-h-[500px] rounded-3xl overflow-hidden border-4 border-amber-400 bg-zinc-950 shadow-[0_0_40px_rgba(251,191,36,0.35)] flex items-center justify-center">
        {/* Canvas Engine */}
        <canvas
          ref={canvasRef}
          width={960}
          height={540}
          onClick={handleCanvasClick}
          className="w-full h-full object-contain cursor-pointer"
        />

        {/* Top Header Label */}
        <div className="absolute top-3 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 text-[11px] font-mono font-bold text-amber-300">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>DALGONA CARTOON STORY</span>
        </div>

        {/* Top Right Controls */}
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <button
            onClick={handleToggleMute}
            className="w-8 h-8 rounded-full bg-black/70 border border-zinc-700 hover:border-amber-400 text-zinc-300 hover:text-white flex items-center justify-center transition-all backdrop-blur-md"
            title={isMuted ? 'Unmute Cartoon Sounds' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          <button
            onClick={onSkip || onStartGame}
            className="px-3 py-1 rounded-full bg-black/70 border border-zinc-700 hover:border-pink-500 text-zinc-300 hover:text-white font-mono text-xs font-bold transition-all backdrop-blur-md flex items-center gap-1"
            title="Skip to Game"
          >
            <span>SKIP</span>
            <SkipForward className="w-3 h-3" />
          </button>
        </div>

        {/* Bottom Interactive Prompt */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none text-center">
          <span className="px-3 py-1 rounded-full bg-black/70 border border-amber-400/50 text-amber-300 font-mono text-[10px] tracking-wider uppercase backdrop-blur-md">
            👆 CLICK THE COOKIE TO SQUISH!
          </span>
        </div>

        {/* Finale Overlay when cartoon ends */}
        {isFinished && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-fadeIn z-30">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center text-black font-black text-2xl shadow-[0_0_25px_rgba(251,191,36,0.6)] mb-3 animate-bounce">
              🍪
            </div>

            <h3 className="text-3xl sm:text-5xl font-black font-display text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] mb-2">
              YOU READY TO CUT?
            </h3>

            <p className="font-mono text-xs sm:text-sm text-zinc-300 max-w-md uppercase tracking-wider mb-6">
              Trace the signal. Dodge the red traps. Save 100% Context!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onStartGame}
                className="px-8 py-3 rounded-2xl font-mono text-sm sm:text-base font-black uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 via-pink-600 to-amber-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(244,63,94,0.6)] flex items-center gap-2"
              >
                <span>ENTER ARENA // START ROUND 01</span>
                <Flame className="w-5 h-5 text-amber-200" />
              </button>

              <button
                onClick={handleReplay}
                className="px-5 py-3 rounded-2xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-700 hover:border-amber-400 hover:text-white transition-all flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>REPLAY CARTOON</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Quick Replay Pill under the stage */}
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={handleReplay}
          className="px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-amber-400 text-zinc-400 hover:text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>REPLAY CARTOON ANIMATION</span>
        </button>
      </div>
    </div>
  );
}
