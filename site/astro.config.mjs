// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danidiazcasting.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  // Vercel adapter is auto-detected, but we can be explicit
  // For static site, Vercel will auto-detect and build correctly
});
