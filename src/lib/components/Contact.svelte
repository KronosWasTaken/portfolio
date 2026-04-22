<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Card from "./ui/card.svelte";
  import CardContent from "./ui/card-content.svelte";
  import Button from "./ui/button.svelte";
  import { clickOutside } from "$lib/actions/clickOutside";
  import GithubIcon from '~icons/simple-icons/github';
  import LinkedinIcon from '~icons/simple-icons/linkedin';
  import MailIcon from '~icons/lucide/mail';
  import MapPinIcon from '~icons/lucide/map-pin';
  import ChevronDownIcon from '~icons/lucide/chevron-down';
  import { emails, socialLinks } from "$lib/data";

  let currentIndex = $state(0);
  let sendEmailOpen = $state(false);
  let getInTouchOpen = $state(false);

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % emails.length;
    }, 4000);
    return () => clearInterval(interval);
  });

  const handleSendEmailToggle = () => {
    sendEmailOpen = !sendEmailOpen;
  };
  const handleSendEmailClose = () => {
    sendEmailOpen = false;
  };
  const handleGetInTouchToggle = () => {
    getInTouchOpen = !getInTouchOpen;
  };
  const handleGetInTouchClose = () => {
    getInTouchOpen = false;
  };
</script>

<section id="contact" class="py-20 px-6 bg-muted/30">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Ready to collaborate on innovative cybersecurity projects? Let's discuss
        how we can build something secure and amazing together.
      </p>
    </div>

    <Card class="border-border/50 overflow-hidden">
      <CardContent class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div>
              <h3
                class="text-xl font-semibold mb-4 text-highlight font-heading"
              >
                Get in Touch
              </h3>
              <p class="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking for a cybersecurity analyst, network
                security specialist, or just want to chat about security
                technology, I'm always open to new opportunities and
                conversations.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <MapPinIcon class="h-5 w-5 text-highlight" />
                <span class="text-muted-foreground font-medium"
                  >Lalitpur, Nepal</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <MailIcon class="h-5 w-5 text-highlight shrink-0" />
                <div class="relative h-6 flex-1 overflow-hidden">
                  {#key currentIndex}
                    <div
                      in:fly={{ y: 20, duration: 500, delay: 200 }}
                      out:fly={{ y: -20, duration: 500 }}
                      class="absolute inset-0 flex items-center"
                    >
                      <a
                        href="mailto:{emails[currentIndex].address}"
                        class="text-foreground hover:text-highlight transition-all inline-flex items-center whitespace-nowrap"
                        aria-label="Email {emails[currentIndex].provider}"
                      >
                        <span class="font-semibold"
                          >{emails[currentIndex].address}</span
                        >
                        <span
                          class="text-xs px-2 py-0.5 rounded-full bg-highlight/10 text-highlight ml-2 border border-highlight/20"
                          >{emails[currentIndex].provider}</span
                        >
                      </a>
                    </div>
                  {/key}
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-4">Connect With Me</h3>
              <div class="space-y-3">
                <div class="relative" use:clickOutside={handleSendEmailClose}>
                  <Button
                    variant="outline"
                    class="w-full justify-start"
                    aria-expanded={sendEmailOpen}
                    aria-haspopup="menu"
                    onclick={handleSendEmailToggle}
                  >
                    <MailIcon class="h-5 w-5 mr-3" />
                    Send Email
                    <ChevronDownIcon class="h-3 w-3 ml-auto" />
                  </Button>
                  {#if sendEmailOpen}
                    <div
                      role="menu"
                      class="absolute top-full left-0 z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md p-1"
                    >
                      {#each emails as email}
                        <a
                          role="menuitem"
                          href="mailto:{email.address}"
                          class="flex items-center space-x-2 w-full rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                          onclick={handleSendEmailClose}
                          aria-label="Send email via {email.provider}"
                        >
                          <MailIcon class="h-4 w-4" />
                          <span>{email.provider}</span>
                        </a>
                      {/each}
                    </div>
                  {/if}
                </div>

                <Button
                  variant="outline"
                  class="w-full justify-start"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon
                    width="20"
                    height="20"
                    class="mr-3"
                  />
                  LinkedIn Profile
                </Button>

                <Button
                  variant="outline"
                  class="w-full justify-start"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon
                    width="20"
                    height="20"
                    class="mr-3"
                  />
                  GitHub Profile
                </Button>
              </div>
            </div>

            <div class="pt-4">
              <div class="relative" use:clickOutside={handleGetInTouchClose}>
                <Button
                  size="lg"
                  class="w-full bg-highlight text-highlight-foreground hover:bg-highlight/90"
                  aria-expanded={getInTouchOpen}
                  aria-haspopup="menu"
                  onclick={handleGetInTouchToggle}
                >
                  Get in Touch
                  <ChevronDownIcon class="h-4 w-4 ml-2" />
                </Button>
                {#if getInTouchOpen}
                  <div
                    role="menu"
                    class="absolute top-full left-0 z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md p-1"
                  >
                    {#each emails as email}
                      <a
                        role="menuitem"
                        href="mailto:{email.address}"
                        class="flex items-center space-x-2 w-full rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        onclick={handleGetInTouchClose}
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
        </div>
      </CardContent>
    </Card>
  </div>
</section>
