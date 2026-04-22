<script lang="ts">
  import Card from "./ui/card.svelte";
  import CardContent from "./ui/card-content.svelte";
  import LiquidProgress from "./LiquidProgress.svelte";
  import { tilt } from "$lib/actions/tilt";
  import { reveal } from "$lib/actions/reveal";
  import ShieldIcon from "~icons/lucide/shield";
  import NetworkIcon from "~icons/lucide/network";
  import CodeIcon from "~icons/lucide/code";
  import LockIcon from "~icons/lucide/lock";
  import BrainIcon from "~icons/lucide/brain";

  const expertise = [
    {
      icon: ShieldIcon,
      title: "Cybersecurity",
      description:
        "Ethical hacking, threat management, network defense, and endpoint security",
    },
    {
      icon: NetworkIcon,
      title: "Network Security",
      description:
        "Cisco and Juniper networking, intrusion detection, and system administration",
    },
    {
      icon: CodeIcon,
      title: "Programming",
      description:
        "Python, Golang, Rust, and JavaScript for security tools and automation",
    },
    {
      icon: LockIcon,
      title: "Security Tools",
      description:
        "GPG encryption, password management, and custom security applications",
    },
  ];
</script>

<section id="about" class="py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div use:reveal class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Specialized in cybersecurity, network defense, and building secure
        applications
      </p>
    </div>

    <!-- Even Grid (Aesthetic Consistency) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each expertise as item, i}
        <div use:reveal={{ delay: i * 120 }} class="group relative">
          <!-- Dynamic 3D Card (Even Size) -->
          <div
            use:tilt={{ max: 12, perspective: 1200, scale: 1.03 }}
            class="h-full relative transition-all duration-300 ease-out transform-3d"
          >
            <div
              class="h-full rounded-2xl border border-border/80 bg-card/40 backdrop-blur-xl p-7 overflow-hidden transition-all duration-500 group-hover:border-highlight/60 group-hover:bg-card/50 group-hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6),0_0_30px_-15px_hsl(var(--highlight)/0.4)]"
            >
              <!-- Subtle Background Mesh -->
              <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,64,175,0.03)_1px,transparent_1px)] bg-size-[20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>

              <!-- Scanning Line Effect -->
              <div
                class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div
                  class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-highlight/20 to-transparent skew-x-[-20deg] group-hover:animate-shimmer"
                ></div>
              </div>

              <!-- Refined Scanning Line -->
              <div
                class="absolute top-0 left-0 w-full h-[100px] bg-linear-to-b from-highlight/10 via-highlight/5 to-transparent -translate-y-full group-hover:animate-scan z-20 pointer-events-none"
              ></div>
              <div
                class="absolute top-0 left-0 w-full h-px bg-highlight/40 -translate-y-full group-hover:animate-scan z-21 pointer-events-none"
              ></div>

              <!-- Decryption Text Effect -->
              <div
                class="absolute bottom-4 right-4 opacity-[0.02] font-mono text-[8px] select-none pointer-events-none break-all max-w-[100px] leading-none transition-opacity duration-500 group-hover:opacity-[0.05]"
              >
                {item.description.repeat(5)}
              </div>

              <div class="relative z-10 h-full flex flex-col">
                <div class="flex items-start justify-between mb-6">
                  <div class="relative">
                    <div
                      class="relative w-12 h-12 bg-linear-to-br from-highlight/20 to-highlight/5 rounded-xl flex items-center justify-center border border-highlight/30 group-hover:border-highlight/60 transition-all duration-500 shadow-inner backdrop-blur-sm"
                    >
                      <item.icon
                        class="h-6 w-6 text-highlight group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col items-end gap-1">
                    <div
                      class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-highlight/10 border border-highlight/20"
                    >
                      <div
                        class="w-1 h-1 rounded-full bg-highlight animate-pulse"
                      ></div>
                      <span
                        class="text-[8px] font-mono text-highlight/80 uppercase tracking-widest"
                        >Active</span
                      >
                    </div>
                  </div>
                </div>

                <h3
                  class="text-lg font-bold mb-3 tracking-tight group-hover:text-highlight transition-colors duration-300"
                >
                  {item.title}
                </h3>

                <p class="text-muted-foreground leading-relaxed text-sm flex-1">
                  {item.description}
                </p>

                <!-- Technical Corner Accents -->
                <div
                  class="absolute top-0 right-0 w-2 h-2 border-t border-r border-highlight/0 group-hover:border-highlight/40 transition-all duration-500"
                ></div>
                <div
                  class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-highlight/0 group-hover:border-highlight/40 transition-all duration-500"
                ></div>

                <!-- Polished Integrity Metric -->
                <div class="mt-6 flex items-center gap-2">
                  <div class="flex gap-0.5 h-1 flex-1">
                    {#each Array(10) as _, j}
                      <div
                        class="h-full flex-1 rounded-full bg-highlight/15 transition-all duration-500 {j <
                        7
                          ? 'group-hover:bg-highlight/40'
                          : ''}"
                        style="transition-delay: {j * 30}ms;"
                      ></div>
                    {/each}
                  </div>
                  <span
                    class="text-[8px] font-mono text-highlight/60 uppercase tracking-tighter"
                    >Integrity_OK</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}

      <!-- Refined Neural Feed Banner (Full Width) -->
      <div
        use:reveal={{ delay: 500 }}
        class="lg:col-span-4 group relative mt-6"
      >
        <div
          class="relative rounded-3xl border border-border/50 bg-linear-to-br from-card/30 via-card/20 to-highlight/5 backdrop-blur-2xl p-8 lg:p-12 overflow-hidden transition-all duration-700 hover:border-highlight/30 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6),0_0_50px_-20px_hsl(var(--highlight)/0.2)]"
        >
          <!-- Bold Grid Background for Expertise -->
          <div
            class="absolute inset-0 bg-grid-pattern bg-grid-bold pointer-events-none transition-opacity duration-700"
          ></div>

          <div
            class="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          >
            <div class="relative shrink-0">
              <!-- Expansive Glassy Glow -->
              <div
                class="absolute -inset-10 bg-highlight/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              ></div>
              <div
                class="w-24 h-24 bg-linear-to-br from-highlight/35 to-highlight/15 rounded-2xl flex items-center justify-center border border-highlight/50 shadow-2xl relative backdrop-blur-sm"
              >
                <BrainIcon
                  class="h-10 w-10 text-highlight group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-highlight rounded-full animate-ping"
                ></div>
              </div>
            </div>

            <div class="flex-1 text-center lg:text-left">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight/10 border border-highlight/20 text-[10px] font-mono text-highlight mb-4 uppercase tracking-[0.2em]"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-highlight animate-pulse"
                ></span>
                Evolutionary_Engine_Core
              </div>
              <h3
                class="text-2xl lg:text-3xl font-bold mb-4 tracking-tighter bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
              >
                Continuous Learning Journey
              </h3>
              <p
                class="text-muted-foreground leading-relaxed text-base lg:text-lg italic font-medium max-w-4xl"
              >
                "I embrace the mindset of a perpetual learner in the rapidly
                evolving field of cybersecurity. Every project is an opportunity
                to explore new security concepts, implement innovative defenses,
                and push the boundaries of modern security tools."
              </p>
            </div>
          </div>

          <!-- Bottom Refined Status Ticker -->
          <div
            class="absolute bottom-0 left-0 w-full bg-highlight/5 border-t border-white/5 px-6 py-2 flex justify-between items-center text-[9px] font-mono text-muted-foreground/50 overflow-hidden"
          >
            <div
              class="flex gap-6 whitespace-nowrap animate-marquee md:animate-none"
            >
              <span class="flex items-center gap-1.5"
                ><div class="w-1 h-1 bg-highlight/40 rounded-full"></div>
                AUTH_LEVEL: ELEVATED</span
              >
              <span class="flex items-center gap-1.5"
                ><div class="w-1 h-1 bg-highlight/40 rounded-full"></div>
                NEURAL_SYNC: 0.9982ms</span
              >
              <span class="hidden md:flex items-center gap-1.5"
                ><div class="w-1 h-1 bg-highlight/40 rounded-full"></div>
                KERNEL_LOAD: OPTIMAL</span
              >
            </div>
            <div class="hidden sm:flex items-center gap-2 text-highlight/60">
              <span class="animate-pulse">STABLE_V8.4</span>
              <div
                class="w-12 h-1 bg-highlight/20 rounded-full overflow-hidden"
              >
                <div class="h-full bg-highlight/60 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>
      :global(.perspective-2000) {
        perspective: 2000px;
      }

      @keyframes scan {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(500%);
        }
      }

      .animate-scan {
        animation: scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }

      @media (max-width: 768px) {
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      }
    </style>
  </div>
</section>
