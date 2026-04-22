<script lang="ts">
  import Button from './ui/button.svelte';
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

      <div class="flex items-center space-x-6">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub Profile"
        >
          <GithubIcon width="20" height="20" />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon width="20" height="20" />
        </a>

        <div class="relative" use:clickOutside={handleEmailClose}>
          <Button
            variant="ghost"
            size="sm"
            class="text-muted-foreground hover:text-foreground p-2 h-auto"
            aria-label="Email Contact Options"
            aria-expanded={emailOpen}
            aria-haspopup="menu"
            onclick={handleEmailToggle}
          >
            <MailIcon class="h-5 w-5" />
            <ChevronDownIcon class="h-3 w-3 ml-1" />
          </Button>
          {#if emailOpen}
            <div role="menu" class="absolute bottom-full right-0 mb-1 z-50 rounded-md border bg-popover text-popover-foreground shadow-md p-1 min-w-[160px]">
              {#each emails as email}
                <a
                  role="menuitem"
                  href="mailto:{email.address}"
                  class="flex items-center space-x-2 w-full rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  onclick={handleEmailClose}
                  aria-label="Send email via {email.provider}"
                >
                  <MailIcon class="h-4 w-4" />
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
