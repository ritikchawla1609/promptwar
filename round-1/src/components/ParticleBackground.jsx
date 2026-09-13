import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic High-Tech Particle & Matrix Stream Pool
    const particleCount = Math.min(85, Math.floor((width * height) / 14000));
    const particles = [];
    const colors = ['#FF007F', '#00F0FF', '#00FFA3', '#FFB800', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.25,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    // Matrix Rain Stream Drops
    const matrixColumns = Math.floor(width / 32);
    const matrixDrops = [];
    const matrixChars = '0123456789ABCDEFΔΟ☆☂ΞΨΩ';
    for (let x = 0; x < matrixColumns; x++) {
      matrixDrops[x] = Math.random() * -100;
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Matrix Rain Stream in background
      ctx.font = '10px monospace';
      ctx.fillStyle = 'rgba(0, 240, 255, 0.08)';
      for (let i = 0; i < matrixDrops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * 32;
        const y = matrixDrops[i] * 16;

        if (frame % 3 === 0) {
          ctx.fillText(text, x, y);
        }

        if (y > height && Math.random() > 0.985) {
          matrixDrops[i] = 0;
        }
        matrixDrops[i] += 0.4;
      }

      // 2. Synaptic Particle Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 125)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // 3. Render and Update Particles with Force Field
      particles.forEach((p) => {
        // Interactive Mouse Laser Repulsion
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 140) {
          const force = (140 - mdist) / 140;
          p.x += (mdx / mdist) * force * 2.2;
          p.y += (mdy / mdist) * force * 2.2;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* High-Tech Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />
      {/* Atmospheric Neon Plasma Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
