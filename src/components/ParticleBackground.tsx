import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  hue: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const getIsDarkMode = () => {
      return document.documentElement.classList.contains('dark') || 
             (!document.documentElement.classList.contains('light') && 
              window.matchMedia('(prefers-color-scheme: dark)').matches);
    };
    
    let isDarkMode = getIsDarkMode();

    // Use MutationObserver instead of polling theme every frame
    const observer = new MutationObserver(() => {
      isDarkMode = getIsDarkMode();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const initParticles = () => {
      const particles: Particle[] = [];
      const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const densityFactor = isMobile ? 20000 : 8000;
      const numParticles = Math.floor((canvas.width * canvas.height) / densityFactor);

      for (let i = 0; i < numParticles; i++) {
        const baseOpacity = Math.random() * 0.4 + 0.2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5 + 0.5,
          opacity: baseOpacity,
          baseOpacity,
          hue: 0,
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let lastTime = 0;
    const targetFPS = window.innerWidth < 768 ? 30 : 60;
    const frameInterval = 1000 / targetFPS;
    
    const animate = (currentTime: number = 0) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const pCount = particles.length;
      const linkDistance = 150;
      const mouseRadius = 200;
      const cellSize = linkDistance;
      const cols = Math.ceil(canvas.width / cellSize);
      const rows = Math.ceil(canvas.height / cellSize);
      const grid: Particle[][] = [];

      for (let i = 0; i < pCount; i++) {
        const p = particles[i];
        
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance * 0.01;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
          p.opacity = Math.min(p.baseOpacity * 2, 0.8);
        } else {
          p.opacity = p.baseOpacity;
        }

        p.vx += (Math.random() - 0.5) * 0.002;
        p.vy += (Math.random() - 0.5) * 0.002;
        p.vx *= 0.995;
        p.vy *= 0.995;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? `rgba(255, 255, 255, ${p.opacity})` : `rgba(60, 60, 60, ${p.opacity})`;
        ctx.fill();

        const col = (p.x / cellSize) | 0;
        const row = (p.y / cellSize) | 0;
        const idx = row * cols + col;
        if (idx >= 0 && idx < rows * cols) {
          if (!grid[idx]) grid[idx] = [];
          grid[idx].push(p);
        }
      }

      const linkDistSq = linkDistance * linkDistance;
      const mouseRadiusSq = mouseRadius * mouseRadius;

      for (let i = 0; i < pCount; i++) {
        const p1 = particles[i];
        const dxM = p1.x - mouseX;
        const dyM = p1.y - mouseY;
        const dMSq = dxM * dxM + dyM * dyM;

        if (dMSq < mouseRadiusSq) {
          const col = (p1.x / cellSize) | 0;
          const row = (p1.y / cellSize) | 0;

          for (let r = row - 1; r <= row + 1; r++) {
            if (r < 0 || r >= rows) continue;
            for (let c = col - 1; c <= col + 1; c++) {
              if (c < 0 || c >= cols) continue;
              
              const cellContent = grid[r * cols + c];
              if (!cellContent) continue;

              for (let j = 0; j < cellContent.length; j++) {
                const p2 = cellContent[j];
                if (p1 === p2) continue;

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dSq = dx * dx + dy * dy;

                if (dSq < linkDistSq) {
                  const dM = Math.sqrt(dMSq);
                  const d = Math.sqrt(dSq);
                  const op = (1 - d / linkDistance) * (1 - dM / mouseRadius) * 0.5;
                  
                  ctx.beginPath();
                  ctx.strokeStyle = isDarkMode ? `rgba(255, 255, 255, ${op})` : `rgba(60, 60, 60, ${op})`;
                  ctx.lineWidth = 0.8;
                  ctx.moveTo(p1.x, p1.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.stroke();
                }
              }
            }
          }
        }
      }

      lastTime = currentTime;
      animationRef.current = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      initParticles();
      animate();
    }, 5000);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2, background: 'transparent' }}
    />
  );
};

export default ParticleBackground;