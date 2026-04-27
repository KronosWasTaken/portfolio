<script lang="ts">
  import '$lib/app.css';

  import type { Snippet } from 'svelte';
  import { theme } from '$lib/theme';
  import { onMount } from 'svelte';

  let { children }: { children: Snippet } = $props();

  onMount(() => {
    theme.init();
  });
</script>

{@render children()}
