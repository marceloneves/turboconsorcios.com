// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import paginas from './src/data/paginas.json' with { type: 'json' };

const semIndice = new Set(paginas.filter((p) => !p.indexar).map((p) => p.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://turboconsorcios.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (url) => !semIndice.has(new URL(url).pathname) })],
  vite: {
    plugins: [tailwindcss()],
  },
});
