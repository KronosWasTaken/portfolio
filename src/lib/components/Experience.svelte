<script lang="ts">
  import Card from './ui/card.svelte';
  import CardHeader from './ui/card-header.svelte';
  import CardTitle from './ui/card-title.svelte';
  import CardContent from './ui/card-content.svelte';
  import Badge from './ui/badge.svelte';
  import LiquidProgress from './LiquidProgress.svelte';
  import { tilt } from '$lib/actions/tilt';
  import { reveal } from '$lib/actions/reveal';
  import { experiences } from '$lib/data';
  import BuildingIcon from '~icons/lucide/building';
  import CalendarIcon from '~icons/lucide/calendar';
</script>

<section id="experience" class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div use:reveal class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        My journey in cybersecurity and network administration.
      </p>
    </div>

    <div class="relative max-w-4xl mx-auto">
      <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-highlight/5 via-highlight/40 to-highlight/5 hidden md:block"></div>

      <div class="space-y-12">
        {#each experiences as exp, i}
          <div class="relative flex flex-col md:flex-row items-center {i % 2 === 0 ? 'md:flex-row-reverse' : ''}">
            <div class="absolute left-[-6px] md:left-1/2 md:ml-[-6px] top-8 w-3 h-3 rounded-full bg-highlight shadow-[0_0_15px_hsl(var(--highlight))] z-10 hidden md:block"></div>

            <div class="w-full md:w-[45%]">
                <div 
                  use:reveal={{ delay: i * 100 }} 
                  class="group"
                >
                  <!-- Dynamic 3D Card -->
                  <div 
                    use:tilt={{ max: 8, perspective: 1500, scale: 1.01 }}
                    class="relative transition-all duration-300 ease-out transform-3d"
                  >
                    <div class="rounded-2xl border border-border/80 bg-card/40 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-highlight/60 group-hover:bg-card/50 group-hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6),0_0_30px_-15px_hsl(var(--highlight)/0.4)]">
                      
                      <!-- Scanning Line Effect -->
                      <div class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-highlight/20 to-transparent skew-x-[-20deg] group-hover:animate-shimmer"></div>
                      </div>

                      <!-- Wave Background -->
                      <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.1)" secondaryColor="transparent" />

                      <div class="relative z-10 p-6 lg:p-8">
                        <div class="flex items-start justify-between mb-6">
                          <div class="flex items-start gap-4">
                            <!-- Logo Container -->
                            <div class="relative group/logo">
                              <div class="absolute -inset-2 bg-highlight/20 rounded-xl blur-md opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>
                              <div class="relative w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden border border-border/50 shadow-inner p-2.5 backdrop-blur-sm">
                                <img
                                  src={exp.logo}
                                  alt="{exp.company} logo"
                                  loading="lazy"
                                  width="56"
                                  height="56"
                                  class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                            </div>
                            
                            <div>
                              <h3 class="text-xl font-bold group-hover:text-highlight transition-colors duration-300 leading-tight">{exp.position}</h3>
                              <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 mt-2">
                                <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                                  <BuildingIcon class="h-4 w-4" />
                                  {exp.company}
                                </div>
                                <span class="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                                <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                                  <CalendarIcon class="h-4 w-4" />
                                  {exp.period}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {#if exp.current}
                            <div class="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-highlight/10 border border-highlight/20 shrink-0">
                              <div class="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse"></div>
                              <span class="text-[10px] font-mono text-highlight uppercase tracking-widest font-bold">Live</span>
                            </div>
                          {/if}
                        </div>

                        <ul class="space-y-2 mb-6">
                          {#each exp.achievements as a}
                            <li class="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                              <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-highlight/60 shrink-0"></span>
                              {a}
                            </li>
                          {/each}
                        </ul>

                        <div class="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                          {#each exp.technologies as tech}
                            <div class="px-2.5 py-0.5 rounded-md bg-highlight/10 border border-highlight/20 text-[10px] font-mono text-highlight uppercase tracking-tighter">
                              {tech}
                            </div>
                          {/each}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="hidden md:block md:w-[45%]"></div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
