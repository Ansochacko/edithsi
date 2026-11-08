import {
  SITE_NAME,
  SITE_URL,
  OPERATOR,
  CHECKED_ON,
  ORGANIZATION_DESCRIPTION,
  SAME_AS_URLS,
} from '../config';
import type { Lang } from '../i18n';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

export interface DatasetSchemaOptions {
  name: string;
  description: string;
  edition: string;
  dateModified: string;
  csvUrl: string;
  latestCsvUrl: string;
}

export interface SchemaOptions {
  lang: Lang;
  canonicalUrl: string;
  title: string;
  description: string;
  ogImageUrl: string;
  breadcrumbs: BreadcrumbItem[];
  article?: {
    datePublished: string;
    dateModified: string;
  };
  faqs?: FaqSchemaItem[];
  dataset?: DatasetSchemaOptions;
}

const AUTHOR_JOB_TITLES: Record<Lang, string> = {
  en: 'Independent Mercor AI-Training Contractor (Finland)',
  fi: 'Itsenäinen Mercor-toimeksiantaja (Suomi)',
  sv: 'Självständig Mercor-uppdragstagare (Finland)',
  de: 'Selbstständiger Mercor-Auftragnehmer (Finnland)',
  fr: 'Prestataire indépendant sur Mercor (Finlande)',
  es: 'Contratista independiente en Mercor (Finlandia)',
};

export function buildJsonLdGraph(opts: SchemaOptions): Record<string, unknown> {
  const orgId = `${SITE_URL}/#organization`;
  const personId = `${SITE_URL}/#author`;
  const websiteId = `${SITE_URL}/#website`;

  const organizationNode = {
    '@type': 'Organization',
    '@id': orgId,
    name: SITE_NAME,
    url: SITE_URL,
    description: ORGANIZATION_DESCRIPTION,
    sameAs: [...SAME_AS_URLS],
    founder: { '@id': personId },
    contactPoint: {
      '@type': 'ContactPoint',
      email: OPERATOR.email,
      contactType: 'editorial and data inquiries',
    },
  };

  const personNode = {
    '@type': 'Person',
    '@id': personId,
    name: OPERATOR.name,
    jobTitle: AUTHOR_JOB_TITLES[opts.lang],
    homeLocation: {
      '@type': 'Place',
      name: `${OPERATOR.city}, Finland`,
    },
    knowsAbout: [
      'AI Training',
      'RLHF',
      'Model Evaluation',
      'Remote Independent Contracting in Finland and Europe',
    ],
    sameAs: [...SAME_AS_URLS],
    url: SITE_URL,
  };

  const websiteNode = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    description: ORGANIZATION_DESCRIPTION,
    inLanguage: opts.lang,
    publisher: { '@id': orgId },
  };

  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    '@id': `${opts.canonicalUrl}#breadcrumb`,
    itemListElement: opts.breadcrumbs.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  const graph: Array<Record<string, unknown>> = [
    organizationNode,
    websiteNode,
    personNode,
    breadcrumbNode,
  ];

  if (opts.article) {
    graph.push({
      '@type': 'Article',
      '@id': `${opts.canonicalUrl}#article`,
      headline: opts.title,
      description: opts.description,
      inLanguage: opts.lang,
      author: { '@id': personId },
      publisher: { '@id': orgId },
      datePublished: opts.article.datePublished || CHECKED_ON,
      dateModified: opts.article.dateModified || CHECKED_ON,
      image: opts.ogImageUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': opts.canonicalUrl,
      },
    });
  }

  if (opts.dataset) {
    graph.push({
      '@type': 'Dataset',
      '@id': `${opts.canonicalUrl}#dataset`,
      name: opts.dataset.name,
      description: opts.dataset.description,
      url: opts.canonicalUrl,
      inLanguage: opts.lang,
      license: 'https://creativecommons.org/licenses/by/4.0/',
      isAccessibleForFree: true,
      temporalCoverage: opts.dataset.edition,
      datePublished: opts.dataset.dateModified || CHECKED_ON,
      dateModified: opts.dataset.dateModified || CHECKED_ON,
      creator: { '@id': orgId },
      publisher: { '@id': orgId },
      keywords: [
        'AI training pay rates',
        'RLHF hourly pay',
        'Mercor pay rates',
        'Mindrift pay rates',
        'Alignerr pay rates',
        'Outlier AI pay',
        'micro1 AI trainer',
        'Handshake AI fellowship pay',
      ],
      distribution: [
        {
          '@type': 'DataDownload',
          encodingFormat: 'text/csv',
          contentUrl: opts.dataset.csvUrl,
          name: `Edithsi AI Work Pay Index (${opts.dataset.edition}) CSV`,
        },
        {
          '@type': 'DataDownload',
          encodingFormat: 'text/csv',
          contentUrl: opts.dataset.latestCsvUrl,
          name: 'Edithsi AI Work Pay Index (Latest) CSV',
        },
      ],
    });
  }

  if (opts.faqs && opts.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${opts.canonicalUrl}#faq`,
      mainEntity: opts.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
