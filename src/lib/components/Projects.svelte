<script lang="ts">
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

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {#each projects as project, i}
        <div use:reveal={{ delay: (i % 2) * 100 }} class="group">
          <Card class="relative bg-background hover:shadow-xl border-border/50 overflow-hidden h-full transition-all duration-300 hover:border-highlight/30">
            <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.15)" secondaryColor="transparent" />
            <CardHeader class="pb-4 relative z-10">
              <div class="flex items-start justify-between">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-highlight/10 rounded-lg flex items-center justify-center">
                    <project.icon class="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <CardTitle class="text-xl group-hover:text-highlight transition-colors">{project.title}</CardTitle>
                    {#if project.featured}
                      <Badge variant="secondary" class="mt-1 bg-highlight/15 text-highlight border border-highlight/30">Featured</Badge>
                    {/if}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent class="space-y-4 relative z-10 h-full flex flex-col">
              <CardDescription class="text-muted-foreground leading-relaxed">{project.description}</CardDescription>

              <div class="flex flex-wrap gap-2">
                {#each project.technologies as tech}
                  <Badge variant="outline" class="text-[10px] h-5 bg-background/50 border-border/40">{tech}</Badge>
                {/each}
              </div>

              <div class="flex items-center space-x-3 pt-4 mt-auto">
                {#if project.githubLink}
                  <Button variant="outline" size="sm" href={project.githubLink} target="_blank" rel="noopener noreferrer" class="h-8 text-xs">
                    <GithubIcon width="12" height="12" class="mr-2" />
                    View Code
                  </Button>
                {/if}
                {#if project.demoLink}
                  <Button size="sm" href={project.demoLink} target="_blank" rel="noopener noreferrer" class="h-8 text-xs bg-highlight text-highlight-foreground hover:bg-highlight/90 shadow-sm">
                    <ExternalLinkIcon class="h-3 w-3 mr-2" />
                    Live Demo
                  </Button>
                {/if}
              </div>
            </CardContent>
          </Card>
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
