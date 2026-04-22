<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import ThemeToggle from './ThemeToggle.svelte';
  import Button from './ui/button.svelte';
  import GithubIcon from '~icons/simple-icons/github';
  import LinkedinIcon from '~icons/simple-icons/linkedin';
  import MailIcon from '~icons/lucide/mail';
  import FileTextIcon from '~icons/lucide/file-text';
  import DownloadIcon from '~icons/lucide/download';
  import { socialLinks } from '$lib/data';

  let isResumePage = $derived(page.url.pathname === '/resume');
  let scrollProgress = $state(0);
  let ticking = false;
  let scrollHeight = 0;

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

<header class="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 rounded-full border border-border/30 shadow-2xl bg-background/20 backdrop-blur-2xl will-change-transform overflow-hidden">
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
        <div class="hidden md:flex items-center space-x-8">
          {#each [['about','About'],['experience','Experience'],['tech-stack','Tech Stack'],['projects','Projects'],['certifications','Certifications'],['contact','Contact']] as [id, label]}
            <button
              onclick={() => scrollTo(id)}
              class="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {label}
            </button>
          {/each}
        </div>
      {/if}

      <div class="flex items-center space-x-1 sm:space-x-2">
        <ThemeToggle />

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

        <div class="flex sm:hidden items-center space-x-1">
          <Button variant="ghost" size="icon" href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Github Profile">
            <GithubIcon width="16" height="16" />
          </Button>
          <Button variant="ghost" size="icon" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <LinkedinIcon width="16" height="16" />
          </Button>
          <Button variant="ghost" size="icon" href="mailto:aaditya12raj@gmail.com" aria-label="Email Me">
            <MailIcon height="16" />
          </Button>
          <Button variant="outline" size="icon" class="border-highlight/30 text-highlight hover:bg-highlight/10 ml-1" href={isResumePage ? '/' : '/resume'} aria-label={isResumePage ? 'Back to Portfolio' : 'View Resume'}>
            <FileTextIcon height="16" />
          </Button>
          <Button size="icon" class="bg-highlight text-highlight-foreground hover:bg-highlight/90 ml-1" href="/Aaditya_Raj_CV.pdf" download="Aaditya_Raj_CV.pdf" aria-label="Download CV PDF">
            <DownloadIcon height="16" />
          </Button>
        </div>
      </div>
    </nav>
  </div>
</header>
