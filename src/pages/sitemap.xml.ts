import type { APIRoute } from 'astro';
import { CHECKED_ON } from '../config';
import {
  LANGUAGES,
  AUDIENCE_SLUGS,
  PLATFORM_SLUGS,
  GUIDE_SLUGS,
  getAbsoluteUrl,
  getAlternateLinks,
  type PageKey,
} from '../i18n';
import { getAudiencePageContent } from '../data/audiencePages';

const ALL_PAGES: PageKey[] = [
  'home',
  'roles',
  'compare',
  'pay-index',
  'survey',
  'glossary',
  ...AUDIENCE_SLUGS.map((slug) => `for/${slug}` as PageKey),
  ...PLATFORM_SLUGS.map((slug) => `platforms/${slug}` as PageKey),
  ...GUIDE_SLUGS.map((slug) => `guides/${slug}` as PageKey),
  'how-it-works',
  'privacy',
  'legal',
];

export const GET: APIRoute = () => {
  const entries: string[] = [];

  for (const page of ALL_PAGES) {
    const alternates = getAlternateLinks(page);
    const defaultHref = getAbsoluteUrl('en', page);

    for (const lang of LANGUAGES) {
      if (page.startsWith('for/')) {
        const slug = page.slice(4) as (typeof AUDIENCE_SLUGS)[number];
        const aud = getAudiencePageContent(slug, lang);
        if (aud.isThinContent) continue;
      }

      const loc = getAbsoluteUrl(lang, page);
      const xhtmlLinks = alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.href}" />`
        )
        .join('\n');

      entries.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${CHECKED_ON}</lastmod>
${xhtmlLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultHref}" />
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
