// NEEDS NATIVE REVIEW for sv, de, fr, es
// Facade: re-exports hub page content assembled from the part files.
import type { Lang } from '../i18n';
import type { GuideSlug, GuidePageContent } from './hubTypes';
import { GUIDES_EN_FI } from './guidesContent.enfi';
import { GUIDES_EU } from './guidesContent.eu';
import { GUIDES_FR_ES } from './guidesContent.fres';

export * from './hubTypes';
export {
  getPayIndexPageContent,
  getSurveyPageContent,
  getGlossaryPageContent,
} from './hubCoreContent';

const GUIDES: Record<Lang, Record<GuideSlug, GuidePageContent>> = {
  ...GUIDES_EN_FI,
  ...GUIDES_EU,
  ...GUIDES_FR_ES,
} as Record<Lang, Record<GuideSlug, GuidePageContent>>;

export function getGuidePageContent(lang: Lang, slug: GuideSlug): GuidePageContent {
  return GUIDES[lang]?.[slug] ?? GUIDES.en[slug];
}
