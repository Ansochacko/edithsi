import en from './en.json';
import fi from './fi.json';
// Note: sv, de, fr, es translations are marked "NEEDS NATIVE REVIEW"
import sv from './sv.json';
import de from './de.json';
import fr from './fr.json';
import es from './es.json';
import { SITE_URL } from '../config';

export const LANGUAGES = ['en', 'fi', 'sv', 'de', 'fr', 'es'] as const;
export const NON_DEFAULT_LANGUAGES = ['fi', 'sv', 'de', 'fr', 'es'] as const;
export type Lang = (typeof LANGUAGES)[number];

export const AUDIENCE_SLUGS = [
  'software',
  'medical',
  'legal',
  'finance',
  'language',
  'office',
  'general',
] as const;

export type AudienceSlug = (typeof AUDIENCE_SLUGS)[number];

export type PageKey =
  | 'home'
  | 'roles'
  | 'how-it-works'
  | 'privacy'
  | 'legal'
  | `for/${AudienceSlug}`;

export type Dictionary = typeof en;

const DICTIONARIES: Record<Lang, Dictionary> = {
  en,
  fi,
  sv,
  de,
  fr,
  es,
};

export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang] ?? DICTIONARIES.en;
}

export function getPagePath(lang: Lang, page: PageKey): string {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  if (page === 'home') {
    return `${prefix}/`;
  }
  return `${prefix}/${page}/`;
}

export function getAudiencePath(lang: Lang, slug: AudienceSlug): string {
  return getPagePath(lang, `for/${slug}`);
}

export function getAbsoluteUrl(lang: Lang, page: PageKey): string {
  return `${SITE_URL}${getPagePath(lang, page)}`;
}

export function getAlternateLinks(page: PageKey): Array<{
  lang: Lang;
  nativeName: string;
  path: string;
  href: string;
  suggestionPrompt: string;
  suggestionAction: string;
  suggestionDismiss: string;
}> {
  return LANGUAGES.map((lang) => {
    const dict = getDictionary(lang);
    const path = getPagePath(lang, page);
    return {
      lang,
      nativeName: dict.langNative,
      path,
      href: getAbsoluteUrl(lang, page),
      suggestionPrompt: dict.suggestionPrompt,
      suggestionAction: dict.suggestionAction,
      suggestionDismiss: dict.suggestionDismiss,
    };
  });
}

export function interpolate(
  template: string,
  values: Record<string, string | number>
): string {
  return Object.entries(values).reduce(
    (acc, [key, val]) => acc.replaceAll(`{${key}}`, String(val)),
    template
  );
}
