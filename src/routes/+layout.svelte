<script lang="ts">
  import '$lib/app.css';
  import { ModeWatcher } from 'mode-watcher';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<ModeWatcher defaultMode="light" />
{@render children()}
