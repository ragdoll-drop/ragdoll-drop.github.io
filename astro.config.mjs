// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages user site: https://ragdoll-drop.github.io/
  // If you rename the repository, update BASE_PATH / SITE_ORIGIN in
  // src/config/site.ts too.
  site: 'https://ragdoll-drop.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  build: {
    inlineStylesheets: 'always',
  },
});
