<script lang="ts">
  import { tilt } from '$lib/actions/tilt';
  import Card from './ui/card.svelte';
  import CardHeader from './ui/card-header.svelte';
  import CardTitle from './ui/card-title.svelte';
  import CardContent from './ui/card-content.svelte';
  import CardDescription from './ui/card-description.svelte';
  import Badge from './ui/badge.svelte';
  import Button from './ui/button.svelte';
  import LiquidProgress from './LiquidProgress.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { projects } from '$lib/data';
  import GithubIcon from '~icons/simple-icons/github';
  import ExternalLinkIcon from '~icons/lucide/external-link';
</script>

<section id="projects" class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div use:reveal class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        A showcase of innovative full-stack applications, cybersecurity tools, and programming language projects
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      {#each projects as project, i}
        <div use:reveal={{ delay: (i % 2) * 100 }} class="group h-full">
          <!-- Dynamic 3D Card -->
          <div 
            use:tilt={{ max: 8, perspective: 1500, scale: 1.01 }}
            class="h-full relative transition-all duration-300 ease-out transform-3d"
          >
            <div class="h-full rounded-2xl border border-border bg-card/80 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-highlight/60 group-hover:bg-card/90 group-hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6),0_0_30px_-15px_hsl(var(--highlight)/0.4)]">
              
              <!-- Scanning Line Effect -->
              <div class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-highlight/20 to-transparent skew-x-[-20deg] group-hover:animate-shimmer"></div>
              </div>

              <!-- Wave Background -->
              <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.1)" secondaryColor="transparent" />

              <div class="relative z-10 p-6 lg:p-8 flex flex-col h-full">
                <div class="flex items-start justify-between mb-6">
                  <div class="flex items-center gap-4">
                    <div class="relative">
                      <div class="absolute -inset-2 bg-highlight/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div class="relative w-14 h-14 bg-linear-to-br from-highlight/20 to-highlight/5 rounded-xl flex items-center justify-center border border-highlight/30 group-hover:border-highlight/50 transition-all duration-500 shadow-inner backdrop-blur-sm">
                        <project.icon class="h-7 w-7 text-highlight group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold group-hover:text-highlight transition-colors duration-300 leading-tight">{project.title}</h3>
                      {#if project.featured}
                        <div class="flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-highlight/10 border border-highlight/20 w-fit">
                          <div class="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse"></div>
                          <span class="text-[9px] font-mono text-highlight uppercase tracking-widest font-bold">Featured_Project</span>
                        </div>
                      {/if}
                    </div>
                  </div>
                </div>

                <div class="flex-1">
                  <p class="text-muted-foreground leading-relaxed text-sm lg:text-[15px] mb-6">
                    {project.description}
                  </p>

                  <div class="flex flex-wrap gap-2.5 mb-8">
                    {#each project.technologies as tech}
                      <div class="px-3 py-1 rounded-md bg-highlight/10 border border-highlight/20 text-[10px] font-mono text-highlight uppercase tracking-tighter">
                        {tech}
                      </div>
                    {/each}
                  </div>
                </div>

                <div class="mt-auto pt-6 flex items-center gap-4 border-t border-border/30">
                  {#if project.githubLink}
                    <Button variant="outline" size="sm" href={project.githubLink} target="_blank" rel="noopener noreferrer" class="rounded-lg border-border/50 hover:border-highlight/50 hover:bg-highlight/5 transition-all duration-300">
                      <GithubIcon width="14" height="14" class="mr-2" />
                      Source_Code
                    </Button>
                  {/if}
                  {#if project.demoLink}
                    <Button size="sm" href={project.demoLink} target="_blank" rel="noopener noreferrer" class="rounded-lg bg-highlight text-highlight-foreground hover:bg-highlight/90 transition-all duration-300 shadow-lg shadow-highlight/20">
                      <ExternalLinkIcon class="h-4 w-4 mr-2" />
                      Live_Operation
                    </Button>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div use:reveal={{ delay: 200 }} class="text-center mt-12">
      <p class="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
      <Button variant="outline" href="https://github.com/KronosWasTaken" target="_blank" rel="noopener noreferrer">
        <GithubIcon width="16" height="16" class="mr-2" />
        View All Projects on GitHub
      </Button>
    </div>
  </div>
</section>
