import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://readingrhythms.co',
  integrations: [tailwind(), robotsTxt()],
  output: 'server',
  adapter: netlify(),
  redirects: {
    '/host': '/apply',
    '/regions': '/events',
  },
  vite: {
    build: {
      target: 'esnext'
    },
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp'
      },
      fs: {
        strict: false
      }
    }
  }
});