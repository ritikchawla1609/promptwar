import React, { useRef, useEffect, useState } from 'react';

export default function ArenaBackgroundVideo() {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const videoRef = useRef(null);

  // Particles for ambient floating embers and laser cutting sparks
  const particlesRef = useRef([]);

  // Check if a local background video exists in public/background.mp4
  useEffect(() => {
    const testVideo = document.createElement('video');
    testVideo.src = '/background.mp4';
    testVideo.oncanplay = () => setVideoAvailable(true);
    testVideo.onerror = () => setVideoAvailable(false);
  }, []);

  useEffect(() => {
    if (videoAvailable) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Initialize floating ambient embers
    const embers = [];
    for (let i = 0; i < 65; i++) {
      embers.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.4 - Math.random() * 0.8,
        size: 1.5 + Math.random() * 2.5,
        alpha: 0.2 + Math.random() * 0.6,
        color: Math.random() > 0.4 ? '#f59e0b' : Math.random() > 0.2 ? '#ec4899' : '#06b6d4',
      });
    }
    particlesRef.current = embers;

    let time = 0;

    const render = () => {
      time += 0.016;

      // 1. Deep Space Arena Gradient
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        100,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );
      grad.addColorStop(0, '#130e1c');
      grad.addColorStop(0.4, '#0a0812');
      grad.addColorStop(0.8, '#030206');
      grad.addColorStop(1, '#000000');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Volumetric Ambient Color Glows
      const cx = width * 0.5;
      const cy = height * 0.42;

      // Warm Amber Spotlight
      const amberGlow = ctx.createRadialGradient(cx, cy, 20, cx, cy, 450);
      amberGlow.addColorStop(0, 'rgba(245, 158, 11, 0.18)');
      amberGlow.addColorStop(0.6, 'rgba(245, 158, 11, 0.04)');
      amberGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = amberGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 450, 0, Math.PI * 2);
      ctx.fill();

      // Pink Accent Glow
      const pinkGlow = ctx.createRadialGradient(cx + 260, cy + 120, 10, cx + 260, cy + 120, 320);
      pinkGlow.addColorStop(0, 'rgba(236, 72, 153, 0.12)');
      pinkGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = pinkGlow;
      ctx.beginPath();
      ctx.arc(cx + 260, cy + 120, 320, 0, Math.PI * 2);
      ctx.fill();

      // Cyan Edge Glow
      const cyanGlow = ctx.createRadialGradient(cx - 280, cy - 80, 10, cx - 280, cy - 80, 300);
      cyanGlow.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
      cyanGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = cyanGlow;
      ctx.beginPath();
      ctx.arc(cx - 280, cy - 80, 300, 0, Math.PI * 2);
      ctx.fill();

      // 3. Cinematic Background Holographic Dalgona Wafer
      ctx.save();
      const waferRadius = Math.min(width * 0.22, 190);
      const rot = time * 0.25;

      ctx.translate(cx, cy);
      ctx.rotate(Math.sin(rot * 0.4) * 0.08);

      // Wafer Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.beginPath();
      ctx.ellipse(0, waferRadius + 45, waferRadius * 0.95, 28, 0, 0, Math.PI * 2);
      ctx.fill();

      // Outer Caramel Cookie Disc
      const waferGrad = ctx.createRadialGradient(-35, -45, 10, 0, 0, waferRadius);
      waferGrad.addColorStop(0, '#fcd34d');
      waferGrad.addColorStop(0.35, '#d97706');
      waferGrad.addColorStop(0.75, '#92400e');
      waferGrad.addColorStop(1, '#451a03');
      ctx.fillStyle = waferGrad;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.35)';
      ctx.shadowBlur = 40;
      ctx.beginPath();
      ctx.arc(0, 0, waferRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Sugar honeycomb bubbles
      ctx.fillStyle = 'rgba(120, 53, 15, 0.22)';
      for (let i = 0; i < 24; i++) {
        const a = i * 1.1 + rot * 0.2;
        const d = 25 + (i * 17) % (waferRadius - 35);
        ctx.beginPath();
        ctx.arc(Math.cos(a) * d, Math.sin(a) * d, 4 + (i % 5) * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Embossed Star Shape on Wafer
      ctx.strokeStyle = 'rgba(69, 26, 3, 0.7)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? waferRadius * 0.45 : waferRadius * 0.22;
        const a = (i * Math.PI) / 5 - Math.PI / 2;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner Golden Signal Core Glow
      const starGlow = ctx.createRadialGradient(0, 0, 5, 0, 0, waferRadius * 0.45);
      starGlow.addColorStop(0, 'rgba(251, 191, 36, 0.4)');
      starGlow.addColorStop(1, 'rgba(245, 158, 11, 0)');
      ctx.fillStyle = starGlow;
      ctx.fill();

      // 4. Laser Cutting Beam Sweeping across the Background
      const cutProgress = (time * 0.4) % 1;
      const cutAngle = cutProgress * Math.PI * 2 - Math.PI / 2;
      const starRadius = waferRadius * 0.45;
      const lx = Math.cos(cutAngle) * (starRadius + Math.sin(cutAngle * 5) * 10);
      const ly = Math.sin(cutAngle) * (starRadius + Math.sin(cutAngle * 5) * 10);

      // Molten Searing Laser Cut Trail
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3.5;
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      for (let p = 0; p <= cutProgress; p += 0.03) {
        const a = p * Math.PI * 2 - Math.PI / 2;
        const px = Math.cos(a) * (starRadius + Math.sin(a * 5) * 10);
        const py = Math.sin(a) * (starRadius + Math.sin(a * 5) * 10);
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Laser Contact Point Glint
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 25;
      ctx.beginPath();
      ctx.arc(lx, ly, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Vertical Laser Beam from Ceiling
      const beamGrad = ctx.createLinearGradient(lx - 50, -height * 0.5, lx, ly);
      beamGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
      beamGrad.addColorStop(0.8, 'rgba(6, 182, 212, 0.35)');
      beamGrad.addColorStop(1, '#ffffff');
      ctx.strokeStyle = beamGrad;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#06b6d4';
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.moveTo(lx - 50, -height * 0.5);
      ctx.lineTo(lx, ly);
      ctx.stroke();

      ctx.restore(); // end wafer

      // 5. Floating Ambient Embers & Particle Field
      const embersList = particlesRef.current;
      for (let i = 0; i < embersList.length; i++) {
        const p = embersList[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.6 + Math.sin(time * 3 + i) * 0.4);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 6. Cinematic Vignette (Ensures Foreground Text & Buttons Are High Contrast)
      const vig = ctx.createRadialGradient(cx, cy, height * 0.35, cx, cy, width * 0.7);
      vig.addColorStop(0, 'rgba(0,0,0,0)');
      vig.addColorStop(0.7, 'rgba(0,0,0,0.55)');
      vig.addColorStop(1, 'rgba(0,0,0,0.85)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [videoAvailable]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {videoAvailable ? (
        <video
          ref={videoRef}
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        />
      ) : (
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
      )}

      {/* Top & Bottom Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
}
