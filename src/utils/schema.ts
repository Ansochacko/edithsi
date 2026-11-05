import { SITE_NAME, SITE_URL, OPERATOR, CHECKED_ON } from '../config';
import type { Lang } from '../i18n';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
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
  const personId = `${SITE_URL}/#author`;
  const websiteId = `${SITE_URL}/#website`;

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
    url: SITE_URL,
  };

  const websiteNode = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: opts.lang,
    publisher: { '@id': personId },
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
      publisher: { '@id': personId },
      datePublished: opts.article.datePublished || CHECKED_ON,
      dateModified: opts.article.dateModified || CHECKED_ON,
      image: opts.ogImageUrl,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': opts.canonicalUrl,
      },
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
