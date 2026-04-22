<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  let { class: className = '', children, ...props } = $props<{ class?: string; children?: Snippet; [key: string]: unknown }>();
</script>

<p class={cn('text-sm text-muted-foreground', className)} {...props}>
  {@render children?.()}
</p>
