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
  import OracleIcon from '~icons/simple-icons/oracle';
  import GoogleIcon from '~icons/simple-icons/google';
  import JuniperIcon from '~icons/simple-icons/junipernetworks';
  import CiscoIcon from '~icons/simple-icons/cisco';
  import FortinetIcon from '~icons/simple-icons/fortinet';
  import ShieldIcon from '~icons/lucide/shield';
  import CalendarIcon from '~icons/lucide/calendar';
  import ExternalLinkIcon from '~icons/lucide/external-link';

  const certifications = [
    { title: 'Oracle Cloud Infrastructure 2025 Certified Networking Professional', issuer: 'Oracle', date: 'September 2025', description: 'Professional certification in Oracle Cloud Infrastructure networking services and solutions', credentialLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=AAD114450C5C2A72ABF108B067E8420E9C80CB8C985ACB75FD8103F137B49A12', icon: OracleIcon, featured: true },
    { title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional', issuer: 'Oracle', date: 'September 2025', description: 'Professional certification in Oracle Cloud Infrastructure DevOps practices and solutions', credentialLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=682D36DF25A1F92246D19E905BE1A7B607EE5CE04BA24304CE18184580FC1E27', icon: OracleIcon, featured: true },
    { title: 'Google Cybersecurity Professional', issuer: 'Google', date: 'August 2025', description: 'Comprehensive cybersecurity certification covering fundamental security concepts and practices', credentialLink: 'https://coursera.org/share/a55bf7c9a80544e82a22ae5f3e6228a7', icon: GoogleIcon, featured: true },
    { title: 'Juniper Networks Certified Associate - Junos (JNCIA-Junos)', issuer: 'Juniper Networks', date: 'August 2025', description: 'Certification in Juniper Networks Junos operating system and networking fundamentals', credentialLink: 'https://linkedin.com/in/aaditya-raj-390113324', icon: JuniperIcon, featured: true },
    { title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', date: 'June 2025', description: 'Comprehensive cybersecurity analyst training and certification program', credentialLink: 'https://www.credly.com/badges/a3419572-06e9-4379-a275-df0a58e9ba1b', icon: CiscoIcon, featured: false },
    { title: 'Blue Team Junior Analyst (BTJA)', issuer: 'Security Blue Team', date: 'July 2025', description: 'Specialized certification in defensive cybersecurity and blue team operations', credentialLink: 'https://linkedin.com/in/aaditya-raj-390113324', icon: null, featured: false },
    { title: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', date: 'June 2025', description: 'Network infrastructure and troubleshooting certification program', credentialLink: 'https://www.credly.com/badges/42093463-8938-4b15-9bc1-5473d495c652', icon: CiscoIcon, featured: false },
    { title: 'Cyber Threat Management', issuer: 'Cisco Networking Academy', date: 'June 2025', description: 'Specialized training in identifying and managing cyber threats', credentialLink: 'https://www.credly.com/badges/b93779cf-371d-4bf9-8b93-325028a9a542', icon: CiscoIcon, featured: false },
    { title: 'Network Defense', issuer: 'Cisco Networking Academy', date: 'June 2025', description: 'Network security and defense strategies certification', credentialLink: 'https://www.credly.com/badges/32a3503f-c359-4600-b433-af5eae2bb7e3', icon: CiscoIcon, featured: false },
    { title: 'Endpoint Security', issuer: 'Cisco Networking Academy', date: 'June 2025', description: 'Endpoint protection and security management certification', credentialLink: 'https://www.credly.com/badges/166adc4c-afa6-45d3-82c2-fdf92c11c086', icon: CiscoIcon, featured: false },
    { title: 'Networking Devices and Initial Configuration', issuer: 'Cisco Networking Academy', date: 'June 2025', description: 'Network device setup and configuration fundamentals', credentialLink: 'https://www.credly.com/badges/1046b94b-8720-4540-a0f1-7adb1c645b45/linked_in_profile', icon: CiscoIcon, featured: false },
    { title: 'Python Essentials 2', issuer: 'Cisco Networking Academy', date: 'Jan-Feb 2025', description: 'Advanced Python programming for network automation and security', credentialLink: 'https://www.credly.com/badges/10c2d2f2-470e-453f-9a63-4719adbd5396/public_url', icon: CiscoIcon, featured: false },
    { title: 'Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet', date: 'December 2024', description: 'Cybersecurity fundamentals and Fortinet security solutions', credentialLink: 'https://www.credly.com/badges/7ed3bf86-585a-45fe-b9b7-fbf738802cf8/linked_in_profile', icon: FortinetIcon, featured: false }
  ];
</script>

<section id="certifications" class="py-20 px-6 bg-muted/30">
  <div class="max-w-6xl mx-auto">
    <div use:reveal class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Professional certifications demonstrating my expertise in cybersecurity and networking
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {#each certifications as cert, i}
        <div use:reveal={{ delay: (i % 3) * 100 }} class="group h-full">
          <!-- Dynamic 3D Card -->
          <div 
            use:tilt={{ max: 10, perspective: 1200, scale: 1.02 }}
            class="h-full relative transition-all duration-300 ease-out transform-3d"
          >
            <div class="h-full rounded-2xl border border-border/80 bg-card/40 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-highlight/60 group-hover:bg-card/50 group-hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6),0_0_30px_-15px_hsl(var(--highlight)/0.4)]">
              
              <!-- Scanning Line Effect -->
              <div class="absolute inset-0 w-full h-full pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-highlight/20 to-transparent skew-x-[-20deg] group-hover:animate-shimmer"></div>
              </div>

              <!-- Wave Background -->
              <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.1)" secondaryColor="transparent" />

              <div class="relative z-10 p-6 lg:p-8 flex flex-col h-full">
                <div class="flex items-start justify-between mb-4">
                  <div class="relative">
                    <div class="absolute -inset-2 bg-highlight/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative w-12 h-12 bg-linear-to-br from-highlight/20 to-highlight/5 rounded-xl flex items-center justify-center border border-highlight/30 group-hover:border-highlight/50 transition-all duration-500 shadow-inner backdrop-blur-sm">
                      {#if cert.icon}
                        <cert.icon class="h-6 w-6 text-highlight group-hover:scale-110 transition-transform duration-500" />
                      {:else}
                        <ShieldIcon class="h-6 w-6 text-highlight group-hover:scale-110 transition-transform duration-500" />
                      {/if}
                    </div>
                  </div>
                  {#if cert.featured}
                    <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-highlight/10 border border-highlight/20">
                      <div class="w-1 h-1 rounded-full bg-highlight animate-pulse"></div>
                      <span class="text-[9px] font-mono text-highlight uppercase tracking-widest">Featured</span>
                    </div>
                  {/if}
                </div>

                <div class="flex-1">
                  <h3 class="text-lg font-bold mb-2 leading-tight group-hover:text-highlight transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div class="flex items-center gap-3 text-sm text-muted-foreground mb-4 font-medium">
                    <span class="flex items-center gap-1.5 whitespace-nowrap">
                      {cert.issuer}
                    </span>
                    <span class="w-1 h-1 rounded-full bg-muted-foreground/40"></span>
                    <span class="flex items-center gap-1.5">
                      <CalendarIcon class="h-3.5 w-3.5" />
                      {cert.date}
                    </span>
                  </div>
                  
                  <p class="text-muted-foreground leading-relaxed text-sm lg:text-[15px] mb-4">
                    {cert.description}
                  </p>
                </div>

                <div class="mt-auto pt-4 flex items-center justify-between border-t border-border/30">
                  <Button variant="outline" size="sm" href={cert.credentialLink} target="_blank" rel="noopener noreferrer" class="rounded-lg border-border/50 hover:border-highlight/50 hover:bg-highlight/5 transition-all duration-300">
                    <ExternalLinkIcon class="h-4 w-4 mr-2" />
                    Verify_Credential
                  </Button>
                  <div class="text-[9px] font-mono opacity-60 uppercase tracking-tighter">ID: CERT_{i + 1}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div use:reveal={{ delay: 200 }} class="mt-12 text-center">
      <p class="text-muted-foreground max-w-3xl mx-auto">
        These certifications represent my commitment to continuous learning and professional development
        in the field of cybersecurity. I'm always seeking new opportunities to expand my knowledge and skills.
      </p>
    </div>
  </div>
</section>
