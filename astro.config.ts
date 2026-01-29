import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fiercehighways.ai',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    UnoCSS({ injectReset: true }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },
  image: {
    domains: ['fiercehighways.ai'],
  },
});
