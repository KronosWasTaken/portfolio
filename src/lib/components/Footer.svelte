<script lang="ts">
  import { clickOutside } from '$lib/actions/clickOutside';
  import GithubIcon from '~icons/simple-icons/github';
  import LinkedinIcon from '~icons/simple-icons/linkedin';
  import MailIcon from '~icons/lucide/mail';
  import ChevronDownIcon from '~icons/lucide/chevron-down';
  import { emails, socialLinks } from '$lib/data';

  let emailOpen = $state(false);

  const handleEmailToggle = () => { emailOpen = !emailOpen; };
  const handleEmailClose = () => { emailOpen = false; };
</script>

<footer class="border-t border-border/40 py-12 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div class="text-center md:text-left">
        <h3 class="text-xl font-bold mb-2" style="font-family: var(--font-signature)">Aaditya Raj</h3>
        <p class="text-muted-foreground">Cybersecurity Professional</p>
      </div>

      <!-- Right Aligned Flex Container: Anchors the right edge so items expand leftwards -->
      <div class="flex items-center justify-end gap-3.5">
        
        <!-- GitHub Pill -->
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex flex-row-reverse items-center justify-start h-9 w-9 hover:w-[105px] rounded-full border border-border/40 hover:border-highlight/50 bg-transparent px-2 transition-all duration-500 ease-out overflow-hidden group cursor-pointer
                 has-[span:hover]:bg-accent has-[span:hover]:text-accent-foreground has-[span:hover]:border-accent"
          aria-label="GitHub Profile"
        >
          <GithubIcon class="h-5 w-5 text-muted-foreground group-hover:text-highlight shrink-0 transition-colors duration-300 group-has-[span:hover]:text-accent-foreground" />
          <span class="font-mono text-xs font-bold tracking-widest mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 select-none text-muted-foreground hover:text-accent-foreground">
            GitHub
          </span>
        </a>

        <!-- LinkedIn Pill -->
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex flex-row-reverse items-center justify-start h-9 w-9 hover:w-[115px] rounded-full border border-border/40 hover:border-highlight/50 bg-transparent px-2 transition-all duration-500 ease-out overflow-hidden group cursor-pointer
                 has-[span:hover]:bg-accent has-[span:hover]:text-accent-foreground has-[span:hover]:border-accent"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon class="h-5 w-5 text-muted-foreground group-hover:text-highlight shrink-0 transition-colors duration-300 group-has-[span:hover]:text-accent-foreground" />
          <span class="font-mono text-xs font-bold tracking-widest mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 select-none text-muted-foreground hover:text-accent-foreground">
            LinkedIn
          </span>
        </a>

        <!-- Email Pill (Dropdown Toggle) -->
        <div class="relative" use:clickOutside={handleEmailClose}>
          <button
            aria-label="Email Contact Options"
            aria-expanded={emailOpen}
            aria-haspopup="menu"
            onclick={handleEmailToggle}
            class="relative flex flex-row-reverse items-center justify-start h-9 w-12 hover:w-[110px] rounded-full border border-border/40 hover:border-highlight/50 bg-transparent px-2 transition-all duration-500 ease-out overflow-hidden group cursor-pointer focus:outline-none
                   has-[span:hover]:bg-accent has-[span:hover]:text-accent-foreground has-[span:hover]:border-accent"
          >
            <div class="flex items-center shrink-0 text-muted-foreground group-hover:text-highlight transition-colors duration-300 group-has-[span:hover]:text-accent-foreground">
              <MailIcon class="h-5 w-5" />
              <ChevronDownIcon class="h-3 w-3 ml-0.5" />
            </div>
            <span class="font-mono text-xs font-bold tracking-widest mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 select-none text-muted-foreground hover:text-accent-foreground">
              Email
            </span>
          </button>
          
          {#if emailOpen}
            <div 
              role="menu" 
              class="absolute bottom-full right-0 mb-2 z-50 rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl text-popover-foreground shadow-2xl p-1 min-w-[160px] font-mono text-xs"
            >
              {#each emails as email}
                <a
                  role="menuitem"
                  href="mailto:{email.address}"
                  class="flex items-center space-x-2 w-full rounded-lg px-2.5 py-2 hover:bg-highlight/10 hover:text-highlight transition-colors font-medium text-foreground"
                  onclick={handleEmailClose}
                  aria-label="Send email via {email.provider}"
                >
                  <MailIcon class="h-3.5 w-3.5 text-highlight" />
                  <span>{email.provider}</span>
                </a>
              {/each}
            </div>
          {/if}
        </div>

      </div>
    </div>

    <div class="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
      <p>&copy; 2025 Aaditya Raj. Built with SvelteKit, TypeScript, and Tailwind CSS.</p>
    </div>
  </div>
</footer>
