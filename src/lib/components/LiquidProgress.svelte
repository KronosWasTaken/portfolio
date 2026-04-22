<script lang="ts">
  let {
    progress = 100,
    color = 'hsl(var(--highlight) / 0.15)',
    secondaryColor = 'transparent',
    height = 60
  } = $props<{
    progress?: number;
    color?: string;
    secondaryColor?: string;
    height?: number;
  }>();

  const delays = [
    -(Math.random() * 20) - 2,
    -(Math.random() * 20) - 3,
    -(Math.random() * 20) - 4,
    -(Math.random() * 20) - 5
  ];
</script>

<div class="absolute inset-0 w-full h-full pointer-events-none z-0" style="contain: layout style paint">
  <div class="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" style="will-change: transform">
    <div class="relative w-full" style="height: {height}px">
      <svg
        class="absolute bottom-0 left-0 w-full mb-[-7px]"
        style="height: {height + 7}px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use href="#gentle-wave" x="48" y="0" fill={color} style="opacity: 0.3; animation-delay: {delays[0]}s" />
          <use href="#gentle-wave" x="48" y="3" fill={color} style="opacity: 0.5; animation-delay: {delays[1]}s" />
          <use href="#gentle-wave" x="48" y="5" fill={color} style="opacity: 0.7; animation-delay: {delays[2]}s" />
          <use href="#gentle-wave" x="48" y="7" fill={color} style="opacity: 1; animation-delay: {delays[3]}s" />
        </g>
      </svg>
    </div>
  </div>
</div>
