<script lang="ts">
  import Card from './ui/card.svelte';
  import CardContent from './ui/card-content.svelte';
  import LiquidProgress from './LiquidProgress.svelte';
  import { reveal } from '$lib/actions/reveal';
  import ShieldIcon from '~icons/lucide/shield';
  import NetworkIcon from '~icons/lucide/network';
  import CodeIcon from '~icons/lucide/code';
  import LockIcon from '~icons/lucide/lock';
  import BrainIcon from '~icons/lucide/brain';

  const expertise = [
    { icon: ShieldIcon, title: 'Cybersecurity', description: 'Ethical hacking, threat management, network defense, and endpoint security' },
    { icon: NetworkIcon, title: 'Network Security', description: 'Cisco and Juniper networking, intrusion detection, and system administration' },
    { icon: CodeIcon, title: 'Programming', description: 'Python, Golang, Rust, and JavaScript for security tools and automation' },
    { icon: LockIcon, title: 'Security Tools', description: 'GPG encryption, password management, and custom security applications' }
  ];
</script>

<section id="about" class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div use:reveal class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Specialized in cybersecurity, network defense, and building secure applications
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each expertise as item, i}
        <div use:reveal={{ delay: i * 80 }} class="group h-full">
          <Card class="relative group hover:shadow-lg border-border/50 h-full overflow-hidden transition-all duration-300 hover:border-highlight/30">
            <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.15)" secondaryColor="transparent" />
            <CardContent class="relative z-10 p-6 text-center">
              <div class="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/20 transition-colors">
                <item.icon class="h-6 w-6 text-highlight" />
              </div>
              <h3 class="font-semibold mb-2">{item.title}</h3>
              <p class="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </div>
      {/each}
    </div>

    <div use:reveal={{ delay: 200 }} class="mt-16 text-center">
      <div class="group">
        <Card class="relative max-w-3xl mx-auto hover:shadow-lg border-border/50 overflow-hidden transition-all duration-300 hover:border-highlight/30">
          <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.15)" secondaryColor="transparent" />
          <CardContent class="relative z-10 p-6 text-center">
            <div class="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/20 transition-colors">
              <BrainIcon class="h-6 w-6 text-highlight" />
            </div>
            <h3 class="font-semibold mb-2">Continuous Learning Journey</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">
              I embrace the mindset of a perpetual learner in the rapidly evolving field of cybersecurity.
              Every project is an opportunity to explore new security concepts, implement innovative defenses, and push
              the boundaries of what's possible with modern security tools and technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>
