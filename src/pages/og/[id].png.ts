import type { APIRoute, GetStaticPaths } from 'astro';
import sharp from 'sharp';
import { CHECKED_ON, SITE_NAME } from '../../config';
import {
  LANGUAGES,
  AUDIENCE_SLUGS,
  getDictionary,
  type Lang,
  type PageKey,
} from '../../i18n';
import { getAudiencePageContent } from '../../data/audiencePages';

interface OgItem {
  id: string;
  lang: Lang;
  title: string;
  eyebrow: string;
  adStamp: string;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text: string, maxCharsPerLine = 34, maxLines = 3): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxCharsPerLine) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) break;
    }
  }
  if (current && lines.length < maxLines) {
    lines.push(current);
  }
  return lines;
}

export const getStaticPaths: GetStaticPaths = () => {
  const items: OgItem[] = [];
  const basePages: Array<'home' | 'roles' | 'how-it-works' | 'privacy' | 'legal'> = [
    'home',
    'roles',
    'how-it-works',
    'privacy',
    'legal',
  ];

  for (const lang of LANGUAGES) {
    const t = getDictionary(lang);
    for (const page of basePages) {
      const titleMap: Record<typeof basePages[number], string> = {
        home: t.home.metaTitle,
        roles: t.rolesPage.metaTitle,
        'how-it-works': t.howPage.metaTitle,
        privacy: t.privacyPage.metaTitle,
        legal: t.legalPage.metaTitle,
      };
      const eyebrowMap: Record<typeof basePages[number], string> = {
        home: t.home.eyebrow,
        roles: t.rolesPage.eyebrow,
        'how-it-works': t.howPage.eyebrow,
        privacy: t.privacyPage.eyebrow,
        legal: t.legalPage.eyebrow,
      };
      items.push({
        id: `${page}-${lang}`,
        lang,
        title: titleMap[page],
        eyebrow: eyebrowMap[page],
        adStamp: t.adStamp,
      });
    }

    for (const slug of AUDIENCE_SLUGS) {
      const audContent = getAudiencePageContent(slug, lang);
      items.push({
        id: `for-${slug}-${lang}`,
        lang,
        title: audContent.h1,
        eyebrow: `${SITE_NAME} · ${t.audiences[slug].label}`,
        adStamp: t.adStamp,
      });
    }
  }

  return items.map((item) => ({
    params: { id: item.id },
    props: item,
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { lang, title, eyebrow, adStamp } = props as OgItem;
  const lines = wrapText(title, 34, 3);

  const lineSvg = lines
    .map(
      (line, idx) =>
        `<text x="72" y="${250 + idx * 72}" font-family="sans-serif" font-size="54" font-weight="700" fill="#14181D">${escapeXml(
          line
        )}</text>`
    )
    .join('\n');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#FAF8F5" />
    <rect x="0" y="0" width="1200" height="16" fill="#1B4332" />
    <rect x="48" y="44" width="1104" height="542" rx="8" fill="#FFFFFF" stroke="#D5CFC4" stroke-width="2" />
    <rect x="72" y="76" width="24" height="24" fill="#1B4332" />
    <text x="110" y="96" font-family="sans-serif" font-size="26" font-weight="700" fill="#14181D">${escapeXml(
      SITE_NAME
    )}</text>
    <rect x="1000" y="70" width="128" height="36" rx="4" fill="#FAF1DF" stroke="#B88D40" stroke-width="1.5" />
    <text x="1064" y="94" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="#452E05">${escapeXml(
      adStamp
    )}</text>
    <text x="72" y="176" font-family="sans-serif" font-size="20" font-weight="700" letter-spacing="1.5" fill="#123123">${escapeXml(
      eyebrow.toUpperCase()
    )}</text>
    ${lineSvg}
    <line x1="72" y1="504" x2="1128" y2="504" stroke="#D5CFC4" stroke-width="1.5" />
    <text x="72" y="544" font-family="monospace" font-size="19" fill="#505A66">Checked: ${escapeXml(
      CHECKED_ON
    )} · Lang: ${escapeXml(
    lang.toUpperCase()
  )} · Independent guide (Not affiliated with Mercor)</text>
  </svg>`;

  const pngBuffer = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();

  return new Response(new Uint8Array(pngBuffer), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
