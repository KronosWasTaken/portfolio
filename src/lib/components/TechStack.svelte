<script lang="ts">
  import LiquidProgress from './LiquidProgress.svelte';
  import { reveal } from '$lib/actions/reveal';
  import { tilt } from '$lib/actions/tilt';
  import ReactIcon from '~icons/simple-icons/react';
  import TypeScriptIcon from '~icons/simple-icons/typescript';
  import JavaScriptIcon from '~icons/simple-icons/javascript';
  import TailwindCSSIcon from '~icons/simple-icons/tailwindcss';
  import BootstrapIcon from '~icons/simple-icons/bootstrap';
  import RadixUIIcon from '~icons/simple-icons/radixui';
  import FramerIcon from '~icons/simple-icons/framer';
  import ElectronIcon from '~icons/simple-icons/electron';
  import CapacitorIcon from '~icons/simple-icons/capacitor';

  import PythonIcon from '~icons/simple-icons/python';
  import FastAPIIcon from '~icons/simple-icons/fastapi';
  import FlaskIcon from '~icons/simple-icons/flask';
  import GoIcon from '~icons/simple-icons/go';
  import GinIcon from '~icons/simple-icons/gin';
  import PostgreSQLIcon from '~icons/simple-icons/postgresql';
  import SQLiteIcon from '~icons/simple-icons/sqlite';
  import SupabaseIcon from '~icons/simple-icons/supabase';
  import SQLAlchemyIcon from '~icons/simple-icons/sqlalchemy';
  import DatabaseIcon from '~icons/lucide/database';

  import LinuxIcon from '~icons/simple-icons/linux';
  import DockerIcon from '~icons/simple-icons/docker';
  import OracleIcon from '~icons/simple-icons/oracle';
  import TauriIcon from '~icons/simple-icons/tauri';
  import RustIcon from '~icons/simple-icons/rust';
  import ZigIcon from '~icons/simple-icons/zig';
  import CSharpIcon from '~icons/simple-icons/csharp';
  import CiscoIcon from '~icons/simple-icons/cisco';
  import JuniperIcon from '~icons/simple-icons/junipernetworks';
  import NetworkIcon from '~icons/lucide/network';
  import LockIcon from '~icons/lucide/lock';
  import SeleniumIcon from '~icons/simple-icons/selenium';
  import GitIcon from '~icons/simple-icons/git';

  let activeTab = $state(0);

  const techCategories = [
    {
      title: 'Frontend & UI',
      description: 'Modern web development and user interface technologies',
      technologies: [
        { name: 'React', icon: ReactIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'Tailwind CSS', icon: TailwindCSSIcon },
        { name: 'Bootstrap', icon: BootstrapIcon },
        { name: 'Radix UI', icon: RadixUIIcon },
        { name: 'Framer Motion', icon: FramerIcon },
        { name: 'Electron', icon: ElectronIcon },
        { name: 'Capacitor', icon: CapacitorIcon }
      ]
    },
    {
      title: 'Backend & Database',
      description: 'Server-side development and data management',
      technologies: [
        { name: 'Python', icon: PythonIcon },
        { name: 'FastAPI', icon: FastAPIIcon },
        { name: 'Flask', icon: FlaskIcon },
        { name: 'Golang', icon: GoIcon },
        { name: 'Gin', icon: GinIcon },
        { name: 'PostgreSQL', icon: PostgreSQLIcon },
        { name: 'SQLite', icon: SQLiteIcon },
        { name: 'Supabase', icon: SupabaseIcon },
        { name: 'SQLAlchemy', icon: SQLAlchemyIcon },
        { name: 'Alembic', icon: DatabaseIcon },
        { name: 'GORM', icon: DatabaseIcon }
      ]
    },
    {
      title: 'Systems & Security',
      description: 'Infrastructure, security, and development tools',
      technologies: [
        { name: 'Linux', icon: LinuxIcon },
        { name: 'Docker', icon: DockerIcon },
        { name: 'Oracle Cloud', icon: OracleIcon },
        { name: 'Tauri', icon: TauriIcon },
        { name: 'Rust', icon: RustIcon },
        { name: 'Zig', icon: ZigIcon },
        { name: 'C#', icon: CSharpIcon },
        { name: 'Cisco', icon: CiscoIcon },
        { name: 'Juniper', icon: JuniperIcon },
        { name: 'Network Security', icon: NetworkIcon },
        { name: 'Cryptography', icon: LockIcon },
        { name: 'Selenium', icon: SeleniumIcon },
        { name: 'Git', icon: GitIcon }
      ]
    }
  ];
</script>

<section id="tech-stack" class="py-20 px-6 bg-muted/30">
  <div class="max-w-6xl mx-auto">
    <div use:reveal class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Technologies I work with to build secure applications and cybersecurity solutions
      </p>
    </div>

    <div role="tablist" aria-label="Technology categories" class="flex flex-wrap justify-center gap-2 mb-8">
      {#each techCategories as cat, i}
        {@const isActive = activeTab === i}
        <button
          role="tab"
          aria-selected={isActive}
          aria-controls="tech-panel"
          onclick={() => activeTab = i}
          class="{isActive
            ? 'bg-highlight text-highlight-foreground shadow-lg'
            : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'} px-6 py-3 rounded-lg font-medium transition-all duration-300"
        >
          {cat.title}
        </button>
      {/each}
    </div>

    <div id="tech-panel" role="tabpanel">
      <div class="text-center mb-6">
        <h3 class="text-2xl font-bold text-highlight mb-2">{techCategories[activeTab].title}</h3>
        <p class="text-muted-foreground max-w-2xl mx-auto">{techCategories[activeTab].description}</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5 max-w-6xl mx-auto">
        {#each techCategories[activeTab].technologies as tech, i (activeTab + '-' + tech.name)}
          <div 
            use:reveal={{ delay: i * 30 }} 
            class="group relative"
          >
            <!-- Dynamic 3D Tech Card -->
            <div 
              use:tilt={{ max: 15, perspective: 1000, scale: 1.05 }}
              class="relative transition-all duration-300 ease-out transform-3d"
            >
              <div class="rounded-xl border border-border/80 bg-card/40 backdrop-blur-md p-5 lg:p-6 overflow-hidden transition-all duration-500 group-hover:border-highlight/60 group-hover:bg-card/50 group-hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)]">
                
                <!-- Scanning Line Effect (Replaces Glow Bleed) -->
                <div class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-highlight/30 to-transparent skew-x-[-20deg] group-hover:animate-shimmer"></div>
                </div>

                <!-- Wave Background -->
                <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.08)" secondaryColor="transparent" />

                <div class="relative z-10 flex flex-col items-center">
                  <div class="mb-4">
                    <tech.icon class="h-10 w-10 text-highlight transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_hsl(var(--highlight)/0.3)]" />
                  </div>
                  <span class="text-[10px] lg:text-[11px] font-mono font-bold tracking-[0.15em] text-center uppercase text-muted-foreground group-hover:text-highlight transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>

                <!-- Technical Corner Accents -->
                <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-highlight/0 group-hover:border-highlight/40 transition-all duration-500"></div>
                <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-highlight/0 group-hover:border-highlight/40 transition-all duration-500"></div>

                <!-- Active Indicator -->
                <div class="absolute top-2 right-2 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="w-0.5 h-0.5 rounded-full bg-highlight"></div>
                  <div class="w-0.5 h-0.5 rounded-full bg-highlight/40"></div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div use:reveal={{ delay: 200 }} class="mt-12 text-center">
      <p class="text-muted-foreground max-w-3xl mx-auto">
        Constantly exploring and adapting to new technologies in the rapidly evolving landscape of
        cybersecurity, network defense, and secure software development. Always eager to learn and implement cutting-edge security solutions.
      </p>
    </div>
  </div>
</section>
