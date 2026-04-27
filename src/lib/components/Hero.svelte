<script lang="ts">
  import { onMount } from 'svelte';
  import type { Component } from 'svelte';
  import Button from './ui/button.svelte';
  import CalendarIcon from '~icons/lucide/calendar';
  import ArrowRightIcon from '~icons/lucide/arrow-right';
  import { reveal } from '$lib/actions/reveal';

  const typewriterTexts = [
    '> Securing the network...',
    '> Analyzing threats...',
    '> Building secure systems...',
    '> Automating workflows...'
  ];

  let displayText = $state('');
  let textIndex = $state(0);
  let isDeleting = $state(false);
  let isMobile = $state(false);

  onMount(() => {
    isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const mq = window.matchMedia('(max-width: 768px)');
    const handleMqChange = () => {
      isMobile = mq.matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    mq.addEventListener('change', handleMqChange);

    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = typewriterTexts[textIndex];
      if (!isDeleting && displayText === current) {
        timeout = setTimeout(() => { isDeleting = true; tick(); }, 2000);
        return;
      }
      if (isDeleting && displayText === '') {
        isDeleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        tick();
        return;
      }
      displayText = isDeleting
        ? current.substring(0, displayText.length - 1)
        : current.substring(0, displayText.length + 1);
      timeout = setTimeout(tick, isDeleting ? 30 : 60);
    };

    tick();

    return () => {
      clearTimeout(timeout);
      mq.removeEventListener('change', handleMqChange);
    };
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<section class="min-h-dvh flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden" style="contain: layout">
  <!-- Layer 0: Theme-Driven Background Gradient -->
  <div class="absolute inset-0 transition-colors duration-1000" style="background: var(--hero-gradient, var(--background))"></div>
  
  <!-- Layer 1: Subtle Grid Texture -->
  <div class="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

  <!-- Layer 2: Noise Overlay -->
  <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E')] brightness-100 contrast-150"></div>

  <!-- Layer 3: Abstract Theme Shapes (Right Side) -->
  <div class="absolute inset-y-0 right-0 w-1/2 overflow-hidden pointer-events-none hidden lg:block">
    <div class="absolute top-[10%] right-[-10%] w-[120%] h-[60%] bg-highlight rounded-full blur-[220px] transition-all duration-1000" style="opacity: calc(var(--glow-intensity, 0.1) * 0.25); transform: rotate(-15deg);"></div>
    <div class="absolute bottom-[20%] right-[10%] w-[80%] h-[40%] bg-primary rounded-full blur-[180px] transition-all duration-1000" style="opacity: calc(var(--glow-intensity, 0.1) * 0.2);"></div>
  </div>

  <!-- Layer 4: Interactive Center Glow -->
  <div class="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
    <div class="w-[600px] h-[600px] bg-highlight rounded-full blur-[250px] transition-all duration-1000 animate-pulse-slow" style="opacity: calc(var(--glow-intensity, 0.1) * 0.15); transform: translate(-25%, 0);"></div>
  </div>

  <div class="container mx-auto relative z-10">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
      <!-- Left Column: Content -->
      <div class="w-full lg:w-3/5 text-center lg:text-left will-change-transform">
        <div
          class="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] bg-highlight text-highlight-foreground border border-highlight/20 mb-8 shadow-lg"
        >
          <span class="w-1.5 h-1.5 rounded-full mr-2 bg-highlight-foreground animate-pulse shadow-[0_0_8px_white]"></span>
          Available for Opportunities
        </div>

        <h1
          class="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tighter leading-[0.95] text-foreground"
        >
          Hi, I'm <span class="text-highlight relative">
            Aaditya
            <span class="absolute -inset-1 bg-highlight/20 blur-2xl rounded-full -z-10 animate-pulse-slow"></span>
          </span>
        </h1>

        <div class="h-10 mb-8 font-mono text-sm sm:text-base md:text-lg text-highlight flex items-center justify-center lg:justify-start min-h-10 animate-fade-up" style="will-change: transform; animation-delay: 100ms;">
          <span class="inline-block tracking-tight">{displayText}</span>
          <span class="inline-block w-1.5 h-6 ml-2 bg-highlight animate-pulse"></span>
        </div>

        <p
          class="text-base sm:text-lg md:text-xl text-foreground max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed animate-fade-up font-medium"
          style="animation-delay: 200ms;"
        >
          Security-focused CSIT student and <span class="text-highlight font-bold">Cybersecurity Trainee</span> at Programiz. 
          Designing resilient digital infrastructures with a focus on threat intelligence and secure automation.
        </p>

        <div class="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center animate-fade-up" style="animation-delay: 300ms;">
          <Button size="lg" class="bg-highlight text-highlight-foreground hover:bg-highlight/90 rounded-2xl px-10 h-14 text-base font-bold shadow-xl shadow-highlight/20 transition-all hover:scale-105 active:scale-95" href="mailto:aaditya12raj@gmail.com">
            <CalendarIcon height="20" class="mr-2" />
            Get in Touch
          </Button>
          <Button variant="outline" size="lg" class="rounded-2xl px-10 h-14 text-base font-bold border-border/50 backdrop-blur-sm hover:bg-white/5 transition-all hover:scale-105 active:scale-95" onclick={() => scrollTo('projects')}>
            View Projects
            <ArrowRightIcon height="20" class="ml-2" />
          </Button>
        </div>
      </div>

      <!-- Right Column: Abstract Visual Detail (Visual anchor) -->
      <div class="hidden lg:block w-full lg:w-2/5 animate-fade-up" style="animation-delay: 400ms;">
        <div class="relative w-full aspect-square max-w-[400px] ml-auto">
          <!-- Geometric Glass elements representing "Security/Code" -->
          <div class="absolute inset-0 bg-highlight/5 backdrop-blur-3xl border border-highlight/10 rounded-3xl rotate-12 transition-all duration-1000"></div>
          <div class="absolute inset-10 bg-primary/5 backdrop-blur-2xl border border-primary/10 rounded-3xl -rotate-6 transition-all duration-1000"></div>
          <div class="absolute inset-0 flex items-center justify-center">
             <div class="w-32 h-32 bg-highlight/20 rounded-full blur-[60px] animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Perspective Detail -->
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer transition-all duration-500 z-20 group"
    role="button"
    tabindex="0"
    onclick={() => scrollTo('about')}
    onkeydown={(e) => e.key === 'Enter' && scrollTo('about')}
    aria-label="Scroll to about section"
  >
    <div class="flex flex-col items-center animate-bounce opacity-100 transition-opacity">
      <span class="text-[9px] uppercase tracking-[0.4em] mb-4 font-bold text-highlight-contrast">Scroll</span>
      <div class="w-px h-16 bg-linear-to-b from-highlight to-highlight/20 transition-all duration-500"></div>
    </div>
  </div>
</section>

<style>
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 8s infinite ease-in-out;
  }
</style>
