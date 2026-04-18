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
      lastTime = currentTime;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const linkDistance = 150;
      const mouseRadius = 200;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const dxMouse = mouseX - p1.x;
        const dyMouse = mouseY - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < mouseRadius) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            
            // Fast distance check before Math.sqrt
            if (Math.abs(dx) < linkDistance && Math.abs(dy) < linkDistance) {
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < linkDistance) {
                const distanceFactor = 1 - distance / linkDistance;
                const mouseFactor = 1 - distMouse / mouseRadius;
                const opacity = distanceFactor * mouseFactor * 0.5;
                
                ctx.beginPath();
                ctx.strokeStyle = isDarkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(60, 60, 60, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance * 0.01;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;
          particle.opacity = Math.min(particle.baseOpacity * 2, 0.8);
        } else {
          particle.opacity = particle.baseOpacity;
        }

        particle.vx += (Math.random() - 0.5) * 0.002;
        particle.vy += (Math.random() - 0.5) * 0.002;

        particle.vx *= 0.995;
        particle.vy *= 0.995;

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        if (isDarkMode) {
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        } else {
          ctx.fillStyle = `rgba(60, 60, 60, ${particle.opacity})`;
        }
        ctx.fill();
      });

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