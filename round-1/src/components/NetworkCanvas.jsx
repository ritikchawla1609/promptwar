import React, { useEffect, useRef } from 'react';

// ABSTRACT INFORMATION NETWORK CANVAS
// Subtle, premium generative canvas representing ideas transferring & mutating
export default function NetworkCanvas({ density = 45, interactive = true }) {
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

    // Generate Information Nodes
    const nodeCount = Math.floor((width * height) / 32000);
    const count = Math.max(25, Math.min(density, nodeCount));

    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.3 + 0.15,
      });
    }

    // Packets that travel along connected lines
    const packets = [];
    let packetCooldown = 0;

    // Mouse coordinates for subtle interactive attraction
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce gently at boundaries
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 241, 234, ${n.baseAlpha})`;
        ctx.fill();

        // 2. Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 135;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(244, 241, 234, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();

            // Chance to spawn an information transfer packet
            if (packetCooldown <= 0 && packets.length < 8 && Math.random() < 0.008) {
              packets.push({
                x1: n.x,
                y1: n.y,
                x2: n2.x,
                y2: n2.y,
                progress: 0,
                speed: 0.015 + Math.random() * 0.01,
              });
              packetCooldown = 15;
            }
          }
        }
      }

      if (packetCooldown > 0) packetCooldown--;

      // 3. Render Information Transfer Packets (Acid Lime Data)
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        const currentX = pkt.x1 + (pkt.x2 - pkt.x1) * pkt.progress;
        const currentY = pkt.y1 + (pkt.y2 - pkt.y1) * pkt.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#d4ff00';
        ctx.shadowColor = '#d4ff00';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
