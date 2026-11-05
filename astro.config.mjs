import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://edithsi.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      lastmod: new Date('2026-11-05T00:00:00.000Z'),
      filter: (page) => !page.includes('/go/'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fi: 'fi',
          sv: 'sv',
          de: 'de',
          fr: 'fr',
          es: 'es',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fi', 'sv', 'de', 'fr', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
