// Shared types for hub pages (Pay Index, Survey, Glossary, Guides).
import type { Lang } from '../i18n';

export type ReviewStatus = 'APPROVED' | 'NEEDS NATIVE REVIEW';

export interface ContentSection {
  h2: string;
  paragraphs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SourceLink {
  label: string;
  url: string;
}

export const GUIDE_SLUGS = [
  'remote-side-jobs-from-home',
  'taxes-toiminimi-yel-finland',
  'unemployment-benefits-ai-work',
  'ai-interview-preparation',
  'avoid-ai-job-scams',
  'ai-training-for-phds-and-students',
] as const;

export type GuideSlug = (typeof GUIDE_SLUGS)[number];

export interface GuidePageContent {
  slug: GuideSlug;
  lang: Lang;
  reviewStatus: ReviewStatus;
  title: string; // <title>, ~50-60 chars
  metaDescription: string; // ~140-155 chars
  h1: string; // question-style
  directAnswer: string; // 2 sentences, answer first
  lastUpdated: '2026-11-05';
  hubSlug: string; // e.g. '/for/general/' (no lang prefix)
  relatedGuides: GuideSlug[]; // exactly 3
  table: { caption: string; headers: string[]; rows: string[][] };
  sections: ContentSection[]; // 4 question-style H2s
  sources: SourceLink[];
  faqs: FaqItem[]; // 4
}

export interface PayIndexPageContent {
  lang: Lang;
  reviewStatus: ReviewStatus;
  title: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  methodologyTitle: string;
  methodologyParagraphs: string[];
  downloadCsvLabel: string;
  changelogTitle: string;
  tableHeaders: string[];
  sections: ContentSection[];
  faqs: FaqItem[];
}

export interface SurveyPageContent {
  lang: Lang;
  reviewStatus: ReviewStatus;
  title: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  methodologySections: ContentSection[];
  plannedMetricsTable: Array<{ metric: string; scope: string; status: string }>;
  faqs: FaqItem[];
}

export interface GlossaryTerm {
  id: string;
  term: string;
  firstSentenceDefinition: string;
  details: string;
  exampleRole: string;
}

export interface GlossaryPageContent {
  lang: Lang;
  reviewStatus: ReviewStatus;
  title: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  terms: GlossaryTerm[];
  faqs: FaqItem[];
}
