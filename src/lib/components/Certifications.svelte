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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each certifications as cert, i}
        <div use:reveal={{ delay: (i % 3) * 80 }} class="group h-full">
          <Card class="relative hover:shadow-lg border-border/50 h-full overflow-hidden transition-all duration-300 hover:border-highlight/30">
            <LiquidProgress progress={100} color="hsl(var(--highlight) / 0.15)" secondaryColor="transparent" />
            <CardHeader class="relative z-10 pb-4">
              <div class="flex items-start space-x-3">
                <div class="shrink-0 mt-1">
                  {#if cert.icon}
                    <cert.icon width="32" height="32" class="text-highlight" />
                  {:else}
                    <ShieldIcon width="32" height="32" class="text-highlight" />
                  {/if}
                </div>
                <div class="flex-1 min-w-0">
                  <CardTitle class="text-lg group-hover:text-highlight transition-colors">{cert.title}</CardTitle>
                  <div class="flex items-center space-x-2 mt-1">
                    <span class="text-sm text-muted-foreground">{cert.issuer}</span>
                    <CalendarIcon class="h-3 w-3 text-muted-foreground" />
                    <span class="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  {#if cert.featured}
                    <Badge variant="secondary" class="mt-2 bg-highlight/15 text-highlight border border-highlight/30">Featured</Badge>
                  {/if}
                </div>
              </div>
            </CardHeader>

            <CardContent class="relative z-10 space-y-4">
              <CardDescription class="text-muted-foreground leading-relaxed">{cert.description}</CardDescription>
              <Button variant="outline" size="sm" href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon class="h-4 w-4 mr-2" />
                View Credential
              </Button>
            </CardContent>
          </Card>
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
