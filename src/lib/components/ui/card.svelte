<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  let { class: className = '', children, ...props } = $props<{ class?: string; children?: Snippet; [key: string]: unknown }>();
</script>

<div class={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props}>
  {@render children?.()}
</div>
