<script lang="ts">
  import SunIcon from '~icons/lucide/sun';
  import MoonIcon from '~icons/lucide/moon';
  import { toggleMode, mode } from 'mode-watcher';
</script>

<button
  onclick={toggleMode}
  class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 w-10"
  aria-label="Toggle theme"
>
  {#if mode.current === 'dark'}
    <SunIcon height="20" />
  {:else}
    <MoonIcon height="20" />
  {/if}
</button>
