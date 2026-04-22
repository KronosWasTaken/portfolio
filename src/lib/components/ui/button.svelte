<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type Variant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  type Size = 'default' | 'sm' | 'lg' | 'icon';

  type ButtonProps = {
    variant?: Variant;
    size?: Size;
    class?: string;
    children?: Snippet;
    href?: string;
    target?: string;
    rel?: string;
    download?: string;
    asChild?: boolean;
    [key: string]: unknown;
  };

  let {
    variant = 'default',
    size = 'default',
    class: className = '',
    children,
    href,
    target,
    rel,
    download,
    asChild = false,
    ...props
  }: ButtonProps = $props();

  const variantClasses: Record<Variant, string> = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
  };

  const sizeClasses: Record<Size, string> = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3 text-xs',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  };

  const base =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
</script>

{#if href}
  <a
    {href}
    {target}
    {rel}
    {download}
    class={cn(base, variantClasses[variant], sizeClasses[size], className)}
    {...(props as unknown as HTMLAnchorAttributes)}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    class={cn(base, variantClasses[variant], sizeClasses[size], className)}
    {...props}
  >
    {@render children?.()}
  </button>
{/if}
