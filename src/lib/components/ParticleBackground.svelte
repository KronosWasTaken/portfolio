<script lang="ts">
  import { onMount } from 'svelte';

  interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    size: number;
    near: boolean;
  }

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let animFrame: number;

    let width = 0;
    let height = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', () => { resize(); init(); });

    // Initial setup deferred to first frame to avoid forced reflow
    requestAnimationFrame(() => {
      resize();
      init();
      animate();
    });

    const isDark = () => document.documentElement.classList.contains('dark');
    let dark = isDark();
    const mo = new MutationObserver(() => { dark = isDark(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const init = () => {
      const count = Math.floor((width * height) / 10000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        near: false
      }));
    };

    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const LINK_DIST = 150;
    const MOUSE_RAD = 200;
    const PUSH_RAD = 120;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
    const MOUSE_RAD_SQ = MOUSE_RAD * MOUSE_RAD;
    const PUSH_RAD_SQ = PUSH_RAD * PUSH_RAD;

    let last = 0;
    const FRAME_INTERVAL = 1000 / 60;
    let isVisible = true;

    // IntersectionObserver to stop animation when not in view
    const io = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) animate();
    }, { threshold: 0.1 });
    io.observe(canvas);

    const animate = (now = 0) => {
      if (!isVisible) return;
      if (now - last < FRAME_INTERVAL) { animFrame = requestAnimationFrame(animate); return; }
      last = now;
      ctx.clearRect(0, 0, width, height);

      const mx = mouse.x, my = mouse.y;
      const cellSize = LINK_DIST;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);
      const grid: Particle[][] = [];

      // Physics update + spatial grid build
      for (const p of particles) {
        const dx = mx - p.x, dy = my - p.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < PUSH_RAD_SQ && dSq > 0) {
          const d = Math.sqrt(dSq);
          const force = (PUSH_RAD - d) / PUSH_RAD * 0.01;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
          p.near = true;
        } else {
          p.near = false;
        }
        p.vx += (Math.random() - 0.5) * 0.002;
        p.vy += (Math.random() - 0.5) * 0.002;
        p.vx *= 0.995; p.vy *= 0.995;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const col = (p.x / cellSize) | 0;
        const row = (p.y / cellSize) | 0;
        const idx = row * cols + col;
        if (idx >= 0 && idx < rows * cols) {
          if (!grid[idx]) grid[idx] = [];
          grid[idx].push(p);
        }
      }

      const rgb = dark ? '255,255,255' : '60,60,60';

      // Batch draw: normal particles (single fill call)
      ctx.fillStyle = `rgba(${rgb},0.35)`;
      ctx.beginPath();
      for (const p of particles) {
        if (!p.near) { ctx.moveTo(p.x + p.size, p.y); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); }
      }
      ctx.fill();

      // Batch draw: near-mouse particles (single fill call)
      ctx.fillStyle = `rgba(${rgb},0.7)`;
      ctx.beginPath();
      for (const p of particles) {
        if (p.near) { ctx.moveTo(p.x + p.size, p.y); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); }
      }
      ctx.fill();

      // Batch draw: all connection lines (single stroke call)
      ctx.strokeStyle = `rgba(${rgb},0.15)`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      for (const p1 of particles) {
        const dxM = p1.x - mx, dyM = p1.y - my;
        if (dxM * dxM + dyM * dyM > MOUSE_RAD_SQ) continue;
        const col = (p1.x / cellSize) | 0;
        const row = (p1.y / cellSize) | 0;
        for (let r = row - 1; r <= row + 1; r++) {
          if (r < 0 || r >= rows) continue;
          for (let c = col - 1; c <= col + 1; c++) {
            if (c < 0 || c >= cols) continue;
            const cell = grid[r * cols + c];
            if (!cell) continue;
            for (const p2 of cell) {
              if (p1 === p2) continue;
              const dx = p1.x - p2.x, dy = p1.y - p2.y;
              if (dx * dx + dy * dy < LINK_DIST_SQ) {
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
              }
            }
          }
        }
      }
      ctx.stroke();

      animFrame = requestAnimationFrame(animate);
    };

    return () => {
      mo.disconnect();
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animFrame);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="absolute inset-0 pointer-events-none"
  style="z-index: 2; background: transparent; will-change: transform;"
></canvas>
