<script lang="ts">
  import { fly } from "svelte/transition";
  import Card from "./ui/card.svelte";
  import CardContent from "./ui/card-content.svelte";
  import Button from "./ui/button.svelte";
  import { clickOutside } from "$lib/actions/clickOutside";
  
  import GithubIcon from '~icons/simple-icons/github';
  import LinkedinIcon from '~icons/simple-icons/linkedin';
  import MailIcon from '~icons/lucide/mail';
  import MapPinIcon from '~icons/lucide/map-pin';
  import ChevronDownIcon from '~icons/lucide/chevron-down';
  import DownloadIcon from '~icons/lucide/download';
  import ClockIcon from '~icons/lucide/clock';
  import FileTextIcon from '~icons/lucide/file-text';
  
  import { emails, socialLinks } from "$lib/data";

  let currentIndex = $state(0);
  let sendEmailOpen = $state(false);
  let localTime = $state('');

  // 1. Rotate email address carousel in Svelte 5 reactive effect
  $effect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % emails.length;
    }, 4000);
    return () => clearInterval(interval);
  });

  // 2. Local Nepal clock updates in Svelte 5 reactive effect
  $effect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      localTime = new Intl.DateTimeFormat('en-US', options).format(new Date());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });

  const handleSendEmailToggle = () => {
    sendEmailOpen = !sendEmailOpen;
  };
  const handleSendEmailClose = () => {
    sendEmailOpen = false;
  };
</script>

<section class="py-20 px-6 bg-muted/30">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Ready to collaborate on innovative cybersecurity projects? Let's discuss
        how we can build something secure and amazing together.
      </p>
    </div>

    <!-- Bento Grid Container -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      
      <!-- Card 1: Intro Card (Spans 2 cols, 2 rows on desktop) -->
      <div class="md:col-span-2 md:row-span-2 rounded-2xl border border-border bg-card/85 backdrop-blur-xl p-8 flex flex-col justify-between transition-all duration-500 hover:border-highlight/60 hover:bg-card/95 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6),0_0_30px_-15px_hsl(var(--highlight)/0.3)] group min-h-[280px]">
        <div>
          <div class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-highlight/10 text-highlight border border-highlight/20 mb-6">
            <span class="w-1.5 h-1.5 rounded-full mr-1.5 bg-highlight animate-pulse"></span>
            Available for Opportunities
          </div>
          <h3 class="text-3xl font-bold tracking-tight mb-4 group-hover:text-highlight transition-colors duration-300">
            Get in Touch
          </h3>
          <p class="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
            Whether you're looking for a cybersecurity analyst, network security specialist, or just want to chat about security technology, I'm always open to new opportunities and conversations.
          </p>
        </div>
        <div class="flex items-center space-x-3 text-muted-foreground text-xs sm:text-sm font-medium pt-6 border-t border-border/30">
          <MapPinIcon class="h-5 w-5 text-highlight shrink-0" />
          <span>Lalitpur, Nepal</span>
        </div>
      </div>

      <!-- Card 2: Email Card (1 col, 1 row) - Stacked z-index prevents dropdown clipping by Card 3 -->
      <div class="rounded-2xl border border-border bg-card/85 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-500 hover:border-highlight/60 hover:bg-card/95 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] group relative {sendEmailOpen ? 'z-30' : 'z-10 hover:z-20'}">
        <div>
          <div class="flex justify-between items-start mb-4">
            <span class="text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-highlight transition-colors">Email</span>
            <MailIcon class="h-5 w-5 text-highlight" />
          </div>
          <div class="relative h-8 overflow-hidden mb-4 border-b border-border/40 pb-2">
            {#key currentIndex}
              <div
                in:fly={{ y: 15, duration: 400, delay: 100 }}
                out:fly={{ y: -15, duration: 400 }}
                class="absolute inset-0 flex items-center"
              >
                <a
                  href="mailto:{emails[currentIndex].address}"
                  class="text-foreground hover:text-highlight font-semibold font-mono text-[11px] truncate max-w-full"
                >
                  {emails[currentIndex].address}
                </a>
              </div>
            {/key}
          </div>
        </div>
        
        <div class="relative w-full animate-fade-in" use:clickOutside={handleSendEmailClose}>
          <Button
            variant="outline"
            class="w-full justify-between rounded-xl hover:bg-accent transition-all text-xs"
            onclick={handleSendEmailToggle}
          >
            <span>Send Email</span>
            <ChevronDownIcon class="h-3 w-3 ml-auto text-muted-foreground" />
          </Button>
          {#if sendEmailOpen}
            <div
              role="menu"
              class="absolute top-full left-0 z-50 mt-2 w-full rounded-xl border border-border bg-card/95 backdrop-blur-xl text-popover-foreground shadow-xl p-1 font-mono text-xs"
            >
              {#each emails as email}
                <a
                  role="menuitem"
                  href="mailto:{email.address}"
                  class="flex items-center space-x-2 w-full rounded-lg px-2.5 py-2 hover:bg-highlight/10 hover:text-highlight transition-colors font-medium"
                  onclick={handleSendEmailClose}
                >
                  <MailIcon class="h-3.5 w-3.5 text-highlight" />
                  <span>{email.provider}</span>
                </a>
              {/each}
            </div>
          {/if}
        </div>
      </div>

      <!-- Card 3: GitHub Card (1 col, 1 row) -->
      <a 
        href={socialLinks.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="rounded-2xl border border-border bg-card/85 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-500 hover:border-highlight/60 hover:bg-card/95 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] group cursor-pointer relative z-10"
      >
        <div class="flex justify-between items-start mb-6">
          <span class="text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-highlight transition-colors">GitHub</span>
          <GithubIcon class="h-5 w-5 text-highlight transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div>
          <span class="font-mono text-base font-bold text-foreground">@KronosWasTaken</span>
          <p class="text-xs text-muted-foreground mt-1">Explore my compilers, encryption tools, and repositories.</p>
        </div>
      </a>

      <!-- Card 4: LinkedIn Card (1 col, 1 row) -->
      <a 
        href={socialLinks.linkedin} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="rounded-2xl border border-border bg-card/85 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-500 hover:border-highlight/60 hover:bg-card/95 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] group cursor-pointer relative z-10"
      >
        <div class="flex justify-between items-start mb-6">
          <span class="text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-highlight transition-colors">LinkedIn</span>
          <LinkedinIcon class="h-5 w-5 text-highlight transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div>
          <span class="font-semibold text-base text-foreground">Aaditya Raj</span>
          <p class="text-xs text-muted-foreground mt-1">Connect with me for professional roles and networking.</p>
        </div>
      </a>

      <!-- Card 5: Local Time Card (1 col, 1 row) -->
      <div class="rounded-2xl border border-border bg-card/85 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-500 hover:border-highlight/60 hover:bg-card/95 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] group relative z-10">
        <div class="flex justify-between items-start mb-4">
          <span class="text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-highlight transition-colors">Local Time</span>
          <ClockIcon class="h-5 w-5 text-highlight" />
        </div>
        <div>
          <span class="font-mono text-lg sm:text-xl font-bold text-foreground">{localTime || 'Calculating...'}</span>
          <p class="text-xs text-muted-foreground mt-1.5 uppercase font-mono tracking-tighter">Lalitpur, Nepal (GMT+5:45)</p>
        </div>
      </div>

      <!-- Card 6: Resume Card (1 col, 1 row) -->
      <a 
        href="/Aaditya_Raj_CV.pdf?v=20260511" 
        download="Aaditya_Raj_CV.pdf"
        class="rounded-2xl border border-border bg-card/85 backdrop-blur-xl p-6 flex flex-col justify-between transition-all duration-500 hover:border-highlight/60 hover:bg-card/95 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] group cursor-pointer relative z-10"
      >
        <div class="flex justify-between items-start mb-6">
          <span class="text-[10px] font-mono font-bold tracking-[0.15em] uppercase text-muted-foreground group-hover:text-highlight transition-colors">Resume / CV</span>
          <FileTextIcon class="h-5 w-5 text-highlight" />
        </div>
        <div class="flex justify-between items-end">
          <div>
            <span class="font-semibold text-xs sm:text-sm text-foreground">Aaditya_Raj_CV.pdf</span>
            <p class="text-xs text-muted-foreground mt-0.5">80.6 KB</p>
          </div>
          <div class="p-2 rounded-xl bg-highlight/10 text-highlight border border-highlight/20 transition-all duration-300 group-hover:bg-highlight group-hover:text-highlight-foreground">
            <DownloadIcon class="h-4 w-4" />
          </div>
        </div>
      </a>

    </div>
  </div>
</section>
