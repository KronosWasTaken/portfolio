<script lang="ts">
  import { cn } from '$lib/utils';

  let {
    orientation = 'horizontal',
    class: className = '',
    ...props
  } = $props<{ orientation?: 'horizontal' | 'vertical'; class?: string; [key: string]: unknown }>();
</script>

<div
  role="separator"
  class={cn(
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
    className
  )}
  {...props}
></div>
