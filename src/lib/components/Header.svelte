<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';

  import ThemeSelector from './ThemeSelector.svelte';
  import Button from './ui/button.svelte';
  import GithubIcon from '~icons/simple-icons/github';
  import LinkedinIcon from '~icons/simple-icons/linkedin';
  import MailIcon from '~icons/lucide/mail';
  import FileTextIcon from '~icons/lucide/file-text';
  import DownloadIcon from '~icons/lucide/download';
  import MenuIcon from '~icons/lucide/menu';
  import XIcon from '~icons/lucide/x';
  import ArrowRightIcon from '~icons/lucide/arrow-right';
  import { socialLinks } from '$lib/data';

  let isResumePage = $derived(page.url.pathname === '/resume');
  let scrollProgress = $state(0);
  let ticking = false;
  let scrollHeight = 0;
  let isMobileMenuOpen = $state(false);

  const updateScrollHeight = () => {
    scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
        ticking = false;
      });
      ticking = true;
    }
  };

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  onMount(() => {
    const observer = new ResizeObserver(() => {
      scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    });
    
    observer.observe(document.documentElement);
    
    // Initial read deferred to next frame
    requestAnimationFrame(() => {
      updateScrollHeight();
    });

    return () => observer.disconnect();
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
</script>

<svelte:window onscroll={handleScroll} onresize={updateScrollHeight} />

<header class="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 rounded-full border border-border/30 shadow-2xl bg-background/60 overflow-hidden antialiased">
  <!-- Dedicated Blur Layer to prevent text blurriness -->
  <div class="absolute inset-0 -z-10 backdrop-blur-2xl"></div>
  <div
    class="absolute bottom-0 left-0 right-0 h-[2px] bg-highlight origin-left z-50 pointer-events-none"
    style="transform: scaleX({scrollProgress})"
  ></div>

  <div class="container mx-auto px-4 sm:px-6 py-4">
    <nav class="flex items-center justify-between">
      <div class="text-2xl font-bold text-foreground" style="font-family: var(--font-signature)">
        {#if isResumePage}
          <a href="/" class="hover:text-highlight transition-colors">Aaditya</a>
        {:else}
          Aaditya
        {/if}
      </div>

      {#if !isResumePage}
        <div class="hidden lg:flex items-center space-x-8">
          {#each [['about','About'],['experience','Experience'],['tech-stack','Tech Stack'],['projects','Projects'],['certifications','Certifications'],['contact','Contact']] as [id, label]}
            <button
              onclick={() => scrollTo(id)}
              class="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {label}
            </button>
          {/each}
        </div>
      {/if}

      <div class="flex items-center space-x-1 sm:space-x-2">
        <ThemeSelector />

        <div class="hidden sm:flex items-center space-x-2">
          <Button variant="ghost" size="icon" href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
            <GithubIcon width="20" height="20" />
          </Button>
          <Button variant="ghost" size="icon" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <LinkedinIcon width="20" height="20" />
          </Button>
          <Button variant="ghost" size="icon" href="mailto:aaditya12raj@gmail.com" aria-label="Email Me">
            <MailIcon height="20" />
          </Button>
          <Button variant="outline" class="border-highlight/30 text-highlight hover:bg-highlight/10 ml-2" href={isResumePage ? '/' : '/resume'} aria-label={isResumePage ? 'Back to Portfolio' : 'View Resume'}>
            <FileTextIcon height="16" class="mr-2" />
            {isResumePage ? 'Portfolio' : 'Resume'}
          </Button>
          <Button class="bg-highlight text-highlight-foreground hover:bg-highlight/90 ml-2 btn-cv-glow" href="/Aaditya_Raj_CV.pdf" download="Aaditya_Raj_CV.pdf" aria-label="Download CV PDF">
            <DownloadIcon height="16" class="mr-2" />
            CV
          </Button>
        </div>

        {#if !isResumePage}
          <button 
            onclick={toggleMobileMenu}
            class="sm:hidden p-2 text-foreground hover:bg-white/5 rounded-full transition-colors active:scale-90"
            aria-label="Toggle Menu"
          >
            {#if isMobileMenuOpen}
              <XIcon height="20" />
            {:else}
              <MenuIcon height="20" />
            {/if}
          </button>
        {/if}
      </div>
    </nav>
  </div>

  {#if isMobileMenuOpen && !isResumePage}
    <button 
      class="sm:hidden fixed inset-0 bg-background/40 backdrop-blur-sm z-40 transition-all duration-500"
      onclick={toggleMobileMenu}
      onkeydown={(e) => e.key === 'Escape' && toggleMobileMenu()}
      aria-label="Close menu"
    ></button>

    <div 
      class="sm:hidden fixed top-[80px] left-4 right-4 bg-background/95 border border-border/50 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 z-50 overflow-hidden"
    >
      <!-- Dedicated Blur Layer -->
      <div class="absolute inset-0 -z-10 backdrop-blur-3xl"></div>
      <div class="flex flex-col space-y-4">
        {#each [['about','About'],['experience','Experience'],['tech-stack','Tech Stack'],['projects','Projects'],['certifications','Certifications'],['contact','Contact']] as [id, label]}
          <button
            onclick={() => { scrollTo(id); isMobileMenuOpen = false; }}
            class="flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-highlight/10 text-foreground transition-all active:scale-95 group"
          >
            <span class="text-lg font-bold tracking-tight">{label}</span>
            <ArrowRightIcon height="16" class="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
          </button>
        {/each}
        
        <div class="pt-4 border-t border-border/50 flex flex-col gap-3">
          <div class="flex gap-2">
            <Button variant="outline" class="flex-1 h-12 rounded-xl border-highlight/30 text-highlight font-bold" href="/resume">
              <FileTextIcon height="16" class="mr-2" />
              Resume
            </Button>
            <Button class="flex-1 h-12 rounded-xl bg-highlight text-highlight-foreground font-bold" href="/Aaditya_Raj_CV.pdf" download="Aaditya_Raj_CV.pdf">
              <DownloadIcon height="16" class="mr-2" />
              CV
            </Button>
          </div>
          
          <div class="flex justify-center gap-8 py-2">
            <a href={socialLinks.github} class="text-muted-foreground hover:text-highlight transition-colors"><GithubIcon height="22" /></a>
            <a href={socialLinks.linkedin} class="text-muted-foreground hover:text-highlight transition-colors"><LinkedinIcon height="22" /></a>
            <a href="mailto:aaditya12raj@gmail.com" class="text-muted-foreground hover:text-highlight transition-colors"><MailIcon height="22" /></a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
