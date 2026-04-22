<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  let { class: className = '', children, ...props } = $props<{ class?: string; children?: Snippet; [key: string]: unknown }>();
</script>

<h3 class={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props}>
  {@render children?.()}
</h3>
