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
  let showParticles = $state(false);
  let ParticleBackground: Component | null = $state(null);

  onMount(() => {
    isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const mq = window.matchMedia('(max-width: 768px)');
    const handleMqChange = () => {
      isMobile = mq.matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    mq.addEventListener('change', handleMqChange);

    if (!isMobile) {
      import('./ParticleBackground.svelte').then((m) => {
        ParticleBackground = m.default;
        showParticles = true;
      });
    }

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
  <div class="absolute inset-0 bg-linear-to-br from-background via-background to-muted/20"></div>
  <div class="absolute inset-0 bg-grid-pattern"></div>

  {#if showParticles && ParticleBackground}
    {@const PC = ParticleBackground}
    <PC />
  {/if}

  {#if !isMobile}
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/3 dark:bg-highlight/5 rounded-full blur-3xl animate-pulse" style="will-change: opacity"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/3 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" style="will-change: opacity"></div>
  {/if}

  <div class="max-w-4xl mx-auto text-center relative z-10 will-change-transform">
    <div
      class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-highlight/15 text-highlight border border-highlight/30 mb-8 animate-fade-up"
    >
      <span class="w-2 h-2 rounded-full mr-2 animate-pulse" style="background-color: #00FF41"></span>
      Available for opportunities
    </div>

    <h1
      class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight animate-fade-up"
    >
      Hi, I'm <span class="text-highlight">Aaditya</span>
    </h1>

    <div class="h-8 mb-6 sm:mb-8 font-mono text-sm sm:text-base md:text-lg text-highlight/80 flex items-center justify-center min-h-8 animate-fade-up" style="will-change: transform; animation-delay: 100ms;">
      <span class="inline-block">{displayText}</span>
      <span class="inline-block w-2 sm:w-3 h-5 sm:h-6 ml-1 bg-highlight animate-pulse"></span>
    </div>

    <p
      class="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-up"
      style="animation-delay: 200ms;"
    >
      Security-focused CSIT student and Cybersecurity Trainee at Programiz. Experienced in network
      defense, Python scripting, and intrusion detection systems, with a passion for building
      secure applications and protecting digital infrastructures.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style="animation-delay: 300ms;">
      <Button size="lg" class="bg-highlight text-highlight-foreground hover:bg-highlight/90" href="mailto:aaditya12raj@gmail.com">
        <CalendarIcon height="20" class="mr-2" />
        Get in Touch
      </Button>
      <Button variant="outline" size="lg" onclick={() => scrollTo('projects')}>
        View Projects
        <ArrowRightIcon height="20" class="ml-2" />
      </Button>
    </div>
  </div>

  <div
    class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 cursor-pointer transition-opacity z-20"
    role="button"
    tabindex="0"
    onclick={() => scrollTo('about')}
    onkeydown={(e) => e.key === 'Enter' && scrollTo('about')}
    aria-label="Scroll to about section"
  >
    <div class="animate-bounce flex flex-col items-center">
      <span class="text-[10px] uppercase tracking-widest mb-2 font-mono text-muted-foreground">Scroll</span>
      <div class="w-px h-12 bg-linear-to-b from-highlight to-transparent"></div>
    </div>
  </div>
</section>
