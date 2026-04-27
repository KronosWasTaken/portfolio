<script lang="ts">
  import { theme, type Theme } from '$lib/theme';
  import PaletteIcon from '~icons/lucide/palette';
  import CheckIcon from '~icons/lucide/check';
  import { onMount } from 'svelte';

  const themes: { id: Theme; name: string; color: string }[] = [
    { id: 'default', name: 'Default', color: '#1e40af' },
    { id: 'mocha', name: 'Mocha', color: '#f38ba8' },
    { id: 'dracula', name: 'Dracula', color: '#bd93f9' },
    { id: 'everforest', name: 'Everforest', color: '#a7c080' },
    { id: 'rosepine', name: 'Rose Pine', color: '#ebbcba' },
    { id: 'nord', name: 'Nord', color: '#88c0d0' },
  ];

  let currentTheme: Theme = $state('mocha');

  onMount(() => {
    const unsubscribe = theme.subscribe(v => {
      currentTheme = v;
    });
    return unsubscribe;
  });

  function selectTheme(t: Theme) {
    theme.set(t);
  }
</script>

<svelte:window />

<div class="flex items-center gap-1 px-1.5 sm:gap-2 sm:px-2 py-1 bg-white/5 border border-white/10 rounded-full">
  {#each themes as t}
    <button
      onclick={() => selectTheme(t.id)}
      class="group/theme relative flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6 rounded-full transition-all duration-300 active:scale-75"
      aria-label="Switch to {t.name}"
    >
      <div 
        class="h-3 w-3 sm:h-4 sm:w-4 rounded-full border border-white/20 transition-[transform,opacity] duration-500 {currentTheme === t.id ? 'scale-125 opacity-100 ring-2 ring-highlight ring-offset-2 ring-offset-background' : 'opacity-60 group-hover/theme:opacity-100 group-hover/theme:scale-110'}" 
        style:background-color={t.color}
      ></div>
      
      <!-- Tooltip on hover -->
      <span class="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card/95 backdrop-blur-sm border border-border rounded text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover/theme:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-50">
        {t.name}
      </span>
    </button>
  {/each}
</div>

<style>
  button {
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
</style>
