<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Card from '$lib/components/ui/card.svelte';
  import CardHeader from '$lib/components/ui/card-header.svelte';
  import CardTitle from '$lib/components/ui/card-title.svelte';
  import CardContent from '$lib/components/ui/card-content.svelte';
  import Badge from '$lib/components/ui/badge.svelte';
  import Separator from '$lib/components/ui/separator.svelte';
  import Button from '$lib/components/ui/button.svelte';
  import { clickOutside } from '$lib/actions/clickOutside';
  import { reveal } from '$lib/actions/reveal';
  import MailIcon from '~icons/lucide/mail';
  import ChevronDownIcon from '~icons/lucide/chevron-down';
  import PhoneIcon from '~icons/lucide/phone';
  import MapPinIcon from '~icons/lucide/map-pin';
  import GithubIcon from '~icons/simple-icons/github';
  import LinkedinIcon from '~icons/simple-icons/linkedin';
  import CalendarIcon from '~icons/lucide/calendar';
  import ExternalLinkIcon from '~icons/lucide/external-link';
  import { emails, socialLinks, experiences, projects } from '$lib/data';
  import { page } from '$app/state';

  let emailDropdownOpen = $state(false);

  const handleEmailToggle = () => { emailDropdownOpen = !emailDropdownOpen; };
  const handleEmailClose = () => { emailDropdownOpen = false; };

  const education = [
    {
      institution: 'Patan Multiple Campus',
      degree: 'Bachelor of Science in Computer Science and Information Technology',
      duration: '2023 - Present',
      location: 'Lalitpur, Nepal',
      details: ''
    },
    {
      institution: 'Prasadi Academy',
      degree: 'Senior Secondary (+2), NEB – Science',
      duration: 'Graduated 2022',
      location: 'Nepal',
      details: 'CGPA: 3.36 / 4.0'
    }
  ];

  const skills: Record<string, string[]> = {
    'Programming Languages': ['Python', 'Golang', 'Rust', 'Zig', 'JavaScript', 'TypeScript', 'C#'],
    'Web Development': ['React', 'Tailwind CSS', 'Electron', 'FastAPI', 'Flask', 'Gin'],
    'Database & Cloud': ['PostgreSQL', 'Supabase', 'SQLAlchemy', 'Oracle Cloud', 'Docker', 'FinOps', 'DevOps'],
    'Cybersecurity': ['Network Defense', 'Ethical Hacking', 'Cryptography', 'Endpoint Security', 'Cloud Security', 'Network Security', 'DevSecOps'],
    'Systems & Tools': ['Linux', 'Git', 'Tauri', 'Selenium']
  };

  const certifications = [
    { name: 'Oracle Cloud Infrastructure 2025 Certified Networking Professional', issuer: 'Oracle', date: 'September 2025' },
    { name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional', issuer: 'Oracle', date: 'September 2025' },
    { name: 'Google Cybersecurity Professional', issuer: 'Google', date: 'August 2025' },
    { name: 'Juniper Networks Certified Associate - Junos (JNCIA-Junos)', issuer: 'Juniper Networks', date: 'August 2025' },
    { name: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', date: 'June 2025' },
    { name: 'Blue Team Junior Analyst (BTJA)', issuer: 'Security Blue Team', date: 'July 2025' },
    { name: 'Network Technician Career Path', issuer: 'Cisco Networking Academy', date: 'June 2025' },
    { name: 'Cyber Threat Management', issuer: 'Cisco Networking Academy', date: 'June 2025' },
    { name: 'Network Defense', issuer: 'Cisco Networking Academy', date: 'June 2025' },
    { name: 'Endpoint Security', issuer: 'Cisco Networking Academy', date: 'June 2025' },
    { name: 'Networking Devices and Initial Configuration', issuer: 'Cisco Networking Academy', date: 'June 2025' },
    { name: 'Python Essentials 2', issuer: 'Cisco Networking Academy', date: 'Jan-Feb 2025' },
    { name: 'Fortinet Certified Associate in Cybersecurity', issuer: 'Fortinet', date: 'December 2024' }
  ];
</script>

<svelte:head>
  <title>Resume | Aaditya Raj</title>
  <meta property="og:title" content="Resume | Aaditya Raj" />
  <meta property="og:url" content={page.url.href} />
  <meta property="og:image" content="{page.url.origin}/thumbnail_x.png" />
  <meta name="twitter:image" content="{page.url.origin}/thumbnail_x.png" />
</svelte:head>

<div class="min-h-screen bg-background">
  <Header />

  <div class="pt-24 pb-12 px-6">
    <div class="max-w-4xl mx-auto">

      <div use:reveal class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Aaditya Raj</h1>
        <p class="text-xl text-muted-foreground mb-6">
          Security-focused CSIT student and Cybersecurity Trainee at Programiz with hands-on experience in
          network defense, Python scripting, and intrusion detection systems
        </p>

        <div class="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div class="flex items-center space-x-2">
            <MailIcon class="h-4 w-4" />
            <div class="relative" use:clickOutside={handleEmailClose}>
              <button
                class="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1"
                aria-expanded={emailDropdownOpen}
                aria-haspopup="menu"
                aria-label="Select email address"
                onclick={handleEmailToggle}
              >
                aaditya12raj@gmail.com
                <ChevronDownIcon class="h-3 w-3" />
              </button>
              {#if emailDropdownOpen}
                <div role="menu" class="absolute top-full left-0 z-50 mt-1 rounded-md border bg-popover text-popover-foreground shadow-md p-1 min-w-[200px]">
                  {#each emails as email}
                    <a
                      role="menuitem"
                      href="mailto:{email.address}"
                      class="flex items-center space-x-2 w-full rounded-sm px-2 py-1.5 text-sm hover:bg-accent transition-colors"
                      onclick={handleEmailClose}
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
          <div class="flex items-center space-x-2">
            <PhoneIcon class="h-4 w-4" />
            <span>+977 9840251279</span>
          </div>
          <div class="flex items-center space-x-2">
            <MapPinIcon class="h-4 w-4" />
            <span>Lalitpur, Nepal</span>
          </div>
        </div>

        <div class="flex justify-center space-x-4 mt-4">
          <Button variant="outline" size="sm" href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <GithubIcon width="16" height="16" class="mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="sm" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <LinkedinIcon width="16" height="16" class="mr-2" />
            LinkedIn Profile
          </Button>
        </div>
      </div>

      <div use:reveal={{ delay: 50 }}>
        <Card class="mb-8">
          <CardHeader><CardTitle>Career Objective</CardTitle></CardHeader>
          <CardContent>
            <p class="text-muted-foreground leading-relaxed">
              Security-focused CSIT student and Cybersecurity Trainee at Programiz with hands-on experience
              in network defense, Python scripting, and intrusion detection systems. Eager to contribute
              to a cybersecurity team where I can apply my training and continue growing as a blue team analyst.
            </p>
          </CardContent>
        </Card>
      </div>

      <section use:reveal={{ delay: 80 }} class="mb-12">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <Separator class="flex-1 mr-4" />
          Education
          <Separator class="flex-1 ml-4" />
        </h2>
        <div class="space-y-10 pl-2">
          {#each education as edu, i}
            <div use:reveal={{ delay: i * 60 }} class="relative pl-8 border-l border-border hover:border-highlight transition-colors duration-300 group">
              <div class="absolute left-[-5px] top-[10px] w-2.5 h-2.5 rounded-full bg-border group-hover:bg-highlight transition-all duration-300 border-2 border-background"></div>
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-2">
                <div>
                  <h3 class="text-xl font-bold group-hover:text-highlight transition-colors leading-tight">{edu.degree}</h3>
                  <p class="text-muted-foreground font-medium mt-1 uppercase tracking-tight text-xs opacity-80">{edu.institution}</p>
                </div>
                <div class="md:text-right shrink-0">
                  <div class="inline-flex items-center text-highlight font-bold text-sm">
                    <CalendarIcon class="h-3 w-3 mr-1.5" />
                    {edu.duration}
                  </div>
                  <div class="flex items-center text-xs text-muted-foreground mt-1 md:justify-end opacity-70">
                    <MapPinIcon class="h-3 w-3 mr-1" />
                    {edu.location}
                  </div>
                </div>
              </div>
              {#if edu.details}
                <div class="mt-4">
                  <span class="text-[10px] font-black uppercase tracking-widest text-highlight/90 bg-highlight/10 px-2.5 py-1 rounded-sm">{edu.details}</span>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </section>

      <section use:reveal={{ delay: 80 }} class="mb-12">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <Separator class="flex-1 mr-4" />
          Work Experience
          <Separator class="flex-1 ml-4" />
        </h2>
        <div class="space-y-6">
          {#each experiences as exp, i}
            <div use:reveal={{ delay: i * 60 }} class="group">
              <Card class="border-border/50 hover:border-highlight/30 transition-all duration-300">
                <CardHeader>
                  <div class="flex items-start space-x-4">
                    <div class="w-10 h-10 mt-1 bg-white rounded-lg flex items-center justify-center overflow-hidden shrink-0 border border-border/50 shadow-sm">
                      <img src={exp.logo} alt="{exp.company} logo" loading="lazy" decoding="async" width="40" height="40" class="w-full h-full object-contain p-1.5" />
                    </div>
                    <div>
                      <CardTitle class="text-xl group-hover:text-highlight transition-colors">{exp.position}</CardTitle>
                      <p class="text-muted-foreground font-medium">{exp.company}</p>
                      <div class="flex items-center gap-4 mt-1">
                        <div class="flex items-center text-xs text-muted-foreground">
                          <CalendarIcon class="h-3 w-3 mr-1" />{exp.period}
                        </div>
                        <div class="flex items-center text-xs text-muted-foreground">
                          <MapPinIcon class="h-3 w-3 mr-1" />{exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul class="list-disc list-inside space-y-2 mb-4 text-sm text-muted-foreground leading-relaxed">
                    {#each exp.achievements as achievement}<li class="pl-1">{achievement}</li>{/each}
                  </ul>
                  <div class="flex flex-wrap gap-2">
                    {#each exp.technologies as tech}
                      <Badge variant="secondary" class="text-[10px] h-5 bg-highlight/5 text-highlight hover:bg-highlight/10 border-highlight/10">{tech}</Badge>
                    {/each}
                  </div>
                </CardContent>
              </Card>
            </div>
          {/each}
        </div>
      </section>

      <section use:reveal={{ delay: 80 }} class="mb-12">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <Separator class="flex-1 mr-4" />
          Selected Projects
          <Separator class="flex-1 ml-4" />
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each projects as project, i}
            <div use:reveal={{ delay: (i % 2) * 60 }} class="group h-full">
              <Card class="h-full border-border/50 hover:border-highlight/30 transition-all duration-300 flex flex-col">
                <CardHeader class="pb-2">
                  <CardTitle class="text-lg group-hover:text-highlight transition-colors flex items-center">
                    {project.title}
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" class="ml-2" aria-label="View {project.title} on GitHub">
                      <ExternalLinkIcon class="h-3 w-3 text-muted-foreground hover:text-highlight transition-colors" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent class="flex-1 flex flex-col">
                  <p class="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{project.description}</p>
                  <div class="flex flex-wrap gap-2 mt-auto pt-2">
                    {#each project.technologies as tech}
                      <Badge variant="outline" class="text-[10px] border-border/40 bg-background/50">{tech}</Badge>
                    {/each}
                  </div>
                </CardContent>
              </Card>
            </div>
          {/each}
        </div>
      </section>

      <section use:reveal={{ delay: 80 }} class="mb-12">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <Separator class="flex-1 mr-4" />
          Certifications & Training
          <Separator class="flex-1 ml-4" />
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each certifications as cert, i}
            <div use:reveal={{ delay: (i % 2) * 40 }} class="flex justify-between items-center p-3 border rounded-lg hover:border-highlight/40 transition-colors">
              <div>
                <p class="font-medium text-sm">{cert.name}</p>
                <p class="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
              <p class="text-xs text-muted-foreground shrink-0 ml-2">{cert.date}</p>
            </div>
          {/each}
        </div>
      </section>

      <section use:reveal={{ delay: 80 }} class="mb-12">
        <h2 class="text-2xl font-bold mb-6 flex items-center">
          <Separator class="flex-1 mr-4" />
          Technical Skills
          <Separator class="flex-1 ml-4" />
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each Object.entries(skills) as [category, skillList], i}
            <div use:reveal={{ delay: (i % 2) * 60 }}>
              <h3 class="font-semibold mb-3 text-highlight uppercase tracking-wider text-xs">{category}</h3>
              <div class="flex flex-wrap gap-2">
                {#each skillList as skill}
                  <Badge variant="secondary" class="bg-muted/50 hover:bg-muted text-foreground transition-colors">{skill}</Badge>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </section>

    </div>
  </div>
</div>
