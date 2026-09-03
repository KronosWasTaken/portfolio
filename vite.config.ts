import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Icons from 'unplugin-icons/vite';
import WebfontDl from 'vite-plugin-webfont-dl';
import { defineConfig } from 'vite';
import { createHash } from 'node:crypto';
import { readFileSync, statSync } from 'node:fs';

const cvPath = 'static/Aaditya_Raj_CV.pdf';
const cvHash = createHash('md5').update(readFileSync(cvPath)).digest('hex').slice(0, 8);
const cvSize = `${(statSync(cvPath).size / 1024).toFixed(1)} KB`;

export default defineConfig({
  define: {
    __CV_HREF__: JSON.stringify(`/Aaditya_Raj_CV.pdf?v=${cvHash}`),
    __CV_SIZE__: JSON.stringify(cvSize)
  },
  plugins: [
    sveltekit(),
    tailwindcss(),
    Icons({ compiler: 'svelte' }),
    WebfontDl(),
    imagetools(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      includePublic: true,
      logStats: true,
      svg: {
        multipass: true,
        plugins: [{ name: 'preset-default' }, 'removeViewBox', 'sortAttrs']
      },
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { lossless: true },
      avif: { lossless: true }
    })
  ]
});
