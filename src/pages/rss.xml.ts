import type { APIRoute } from 'astro';
import { SITE_NAME, SITE_URL, CHECKED_ON, ORGANIZATION_DESCRIPTION } from '../config';
import {
  AUDIENCE_SLUGS,
  PLATFORM_SLUGS,
  GUIDE_SLUGS,
  LANGUAGES,
  getAudiencePath,
  getPlatformPath,
  getGuidePath,
  getPagePath,
} from '../i18n';
import { getAudiencePageContent } from '../data/audiencePages';
import { getPlatformPageContent, getComparePageContent } from '../data/platformContent';
import { getPayIndexPageContent, getGuidePageContent } from '../data/hubPagesContent';

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
    const payIndex = getPayIndexPageContent(lang);
    const payUrl = `${SITE_URL}${getPagePath(lang, 'pay-index')}`;
    items.push(`    <item>
      <title>${escapeXml(payIndex.title)}</title>
      <link>${escapeXml(payUrl)}</link>
      <guid isPermaLink="true">${escapeXml(payUrl)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(payIndex.metaDescription)}</description>
      <dc:language>${escapeXml(lang)}</dc:language>
    </item>`);

    const compare = getComparePageContent(lang);
    const compareUrl = `${SITE_URL}${getPagePath(lang, 'compare')}`;
    items.push(`    <item>
      <title>${escapeXml(compare.title)}</title>
      <link>${escapeXml(compareUrl)}</link>
      <guid isPermaLink="true">${escapeXml(compareUrl)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(compare.metaDescription)}</description>
      <dc:language>${escapeXml(lang)}</dc:language>
    </item>`);

    for (const slug of PLATFORM_SLUGS) {
      const pContent = getPlatformPageContent(lang, slug);
      const url = `${SITE_URL}${getPlatformPath(lang, slug)}`;
      items.push(`    <item>
      <title>${escapeXml(pContent.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(pContent.metaDescription)}</description>
      <dc:language>${escapeXml(lang)}</dc:language>
    </item>`);
    }

    for (const slug of GUIDE_SLUGS) {
      const gContent = getGuidePageContent(lang, slug);
      const url = `${SITE_URL}${getGuidePath(lang, slug)}`;
      items.push(`    <item>
      <title>${escapeXml(gContent.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(gContent.metaDescription)}</description>
      <dc:language>${escapeXml(lang)}</dc:language>
    </item>`);
    }

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
    <title>${escapeXml(SITE_NAME)} — AI-Training Pay Index, Platform Profiles &amp; Guides</title>
    <link>${SITE_URL}/</link>
    <description>${escapeXml(ORGANIZATION_DESCRIPTION)}</description>
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
