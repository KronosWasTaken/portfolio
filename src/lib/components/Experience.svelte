<script lang="ts">
  import Card from './ui/card.svelte';
  import CardHeader from './ui/card-header.svelte';
  import CardTitle from './ui/card-title.svelte';
  import CardContent from './ui/card-content.svelte';
  import Badge from './ui/badge.svelte';
  import LiquidProgress from './LiquidProgress.svelte';
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
              <div use:reveal={{ delay: i * 100 }} class="group">
                <Card class="relative hover:shadow-xl border-border/50 overflow-hidden transition-all duration-300 hover:border-highlight/30">
                  <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.15)" secondaryColor="transparent" />
                  <CardHeader class="relative z-10 pb-4">
                    <div class="flex items-start justify-between">
                      <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 mt-1 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 shadow-sm border border-border/50">
                          <img
                            src={exp.logo}
                            alt="{exp.company} logo"
                            loading="lazy"
                            decoding="async"
                            width="40"
                            height="40"
                            class="w-full h-full object-contain p-1.5 group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <CardTitle class="text-xl group-hover:text-highlight transition-colors">{exp.position}</CardTitle>
                          <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:space-x-2 mt-1">
                            <div class="flex items-center space-x-1">
                              <BuildingIcon class="h-4 w-4 text-muted-foreground" />
                              <span class="text-sm text-muted-foreground">{exp.company}</span>
                            </div>
                            <div class="flex items-center space-x-1">
                              <CalendarIcon class="h-4 w-4 text-muted-foreground sm:ml-2" />
                              <span class="text-sm text-muted-foreground">{exp.period}</span>
                            </div>
                          </div>
                          {#if exp.current}
                            <Badge variant="secondary" class="mt-2 bg-highlight/15 text-highlight border border-highlight/30">
                              Current Role
                            </Badge>
                          {/if}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent class="relative z-10 space-y-4">
                    <ul class="list-disc list-inside space-y-1 text-sm text-muted-foreground leading-relaxed">
                      {#each exp.achievements as a}
                        <li class="pl-1">{a}</li>
                      {/each}
                    </ul>
                    <div class="flex flex-wrap gap-2">
                      {#each exp.technologies as tech}
                        <Badge variant="outline" class="text-[10px] py-0 h-5 border-border/50">{tech}</Badge>
                      {/each}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div class="hidden md:block md:w-[45%]"></div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
