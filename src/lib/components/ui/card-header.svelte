<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  let { class: className = '', children, ...props } = $props<{ class?: string; children?: Snippet; [key: string]: unknown }>();
</script>

<div class={cn('flex flex-col space-y-1.5 p-6', className)} {...props}>
  {@render children?.()}
</div>
