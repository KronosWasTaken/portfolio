<script lang="ts">
  import { onMount, type Component } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import { page } from '$app/state';

  let About: Component | null = $state(null);
  let Experience: Component | null = $state(null);
  let TechStack: Component | null = $state(null);
  let Projects: Component | null = $state(null);
  let Certifications: Component | null = $state(null);
  let Contact: Component | null = $state(null);
  let Footer: Component | null = $state(null);

  onMount(() => {
    // Schedule lazy loading for non-critical sections
    const lazyLoad = () => {
      import('$lib/components/About.svelte').then(m => About = m.default);
      import('$lib/components/Experience.svelte').then(m => Experience = m.default);
      import('$lib/components/TechStack.svelte').then(m => TechStack = m.default);
      import('$lib/components/Projects.svelte').then(m => Projects = m.default);
      import('$lib/components/Certifications.svelte').then(m => Certifications = m.default);
      import('$lib/components/Contact.svelte').then(m => Contact = m.default);
      import('$lib/components/Footer.svelte').then(m => Footer = m.default);
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(lazyLoad);
    } else {
      setTimeout(lazyLoad, 1000);
    }
  });
</script>

<svelte:head>
  <title>Aaditya Raj | Cybersecurity Professional</title>
  <meta property="og:url" content={page.url.href} />
  <meta property="og:image" content="{page.url.origin}/thumbnail_x.png" />
  <meta name="twitter:image" content="{page.url.origin}/thumbnail_x.png" />
</svelte:head>

<div class="min-h-screen bg-background">
  <Header />
  <Hero />
  <div style="content-visibility: auto; contain-intrinsic-size: 0 600px">
    {#if About}<About />{/if}
  </div>
  <div style="content-visibility: auto; contain-intrinsic-size: 0 700px">
    {#if Experience}<Experience />{/if}
  </div>
  <div style="content-visibility: auto; contain-intrinsic-size: 0 600px">
    {#if TechStack}<TechStack />{/if}
  </div>
  <div style="content-visibility: auto; contain-intrinsic-size: 0 900px">
    {#if Projects}<Projects />{/if}
  </div>
  <div style="content-visibility: auto; contain-intrinsic-size: 0 800px">
    {#if Certifications}<Certifications />{/if}
  </div>
  <div style="content-visibility: auto; contain-intrinsic-size: 0 500px">
    {#if Contact}<Contact />{/if}
  </div>
  {#if Footer}<Footer />{/if}
</div>
