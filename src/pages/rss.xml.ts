import type { APIRoute } from 'astro';
import { SITE_NAME, SITE_URL, CHECKED_ON } from '../config';
import { AUDIENCE_SLUGS, LANGUAGES, getAudiencePath } from '../i18n';
import { getAudiencePageContent } from '../data/audiencePages';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const pubDate = new Date(`${CHECKED_ON}T08:00:00Z`).toUTCString();
  const items: string[] = [];

  for (const lang of LANGUAGES) {
    for (const slug of AUDIENCE_SLUGS) {
      const content = getAudiencePageContent(slug, lang);
      if (content.isThinContent) continue;
      const url = `${SITE_URL}${getAudiencePath(lang, slug)}`;
      items.push(`    <item>
      <title>${escapeXml(content.metaTitle)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(content.metaDescription)}</description>
      <dc:language>${escapeXml(lang)}</dc:language>
    </item>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} — Profession Guides</title>
    <link>${SITE_URL}/</link>
    <description>Independent multilingual guide helping credentialed professionals in Finland and Europe find remote AI-training work on Mercor's official listings.</description>
    <language>en</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items.join('\n')}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
