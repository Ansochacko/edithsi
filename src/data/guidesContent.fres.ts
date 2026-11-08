// NEEDS NATIVE REVIEW for fr, es
// Guide content for French and Spanish. Pay figures are posted ranges copied from
// src/data/platforms.json and src/data/pay-index/2026-11.json (sample date 2026-11-05).
// They are never guaranteed. Nothing here is tax, legal or benefits advice.
import type { GuideSlug, GuidePageContent } from './hubTypes';

const META = { reviewStatus: 'NEEDS NATIVE REVIEW', lastUpdated: '2026-11-05' } as const;

// ---------------------------------------------------------------------------
// FR — Français
// ---------------------------------------------------------------------------
const FR: Record<GuideSlug, GuidePageContent> = {
  'remote-side-jobs-from-home': {
    ...META,
    slug: 'remote-side-jobs-from-home',
    lang: 'fr',
    title: 'Travail à domicile en entraînement d’IA : guide 2026',
    metaDescription:
      'Quelles plateformes d’entraînement d’IA acceptent les freelances en France ? Fourchettes publiées, paiements et éligibilité par pays au 2026-11-05.',
    h1: 'Quels petits boulots à domicile puis-je trouver dans l’entraînement d’IA ?',
    directAnswer:
      'Au 2026-11-05, plusieurs plateformes d’entraînement d’IA, dont Mercor, Mindrift et Outlier, acceptent des prestataires basés en France et dans l’UE pour du travail à distance. Les rémunérations sont des fourchettes publiées, non garanties, et vous travaillez comme indépendant, pas comme salarié.',
    hubSlug: '/for/general/',
    relatedGuides: ['avoid-ai-job-scams', 'taxes-toiminimi-yel-finland', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Fourchettes publiées et éligibilité (source : pages officielles, vérifié le 2026-11-05)',
      headers: ['Plateforme', 'Fourchette publiée (USD)', 'Paiement', 'France/UE'],
      rows: [
        ['Mercor', '35–180 $/h', 'Hebdomadaire via Stripe', 'Ouvert (télétravail mondial)'],
        ['Mindrift', '15–100+ $/h', 'Toutes les deux semaines, à la tâche', 'Ouvert (selon les règles d’éligibilité de Toloka)'],
        ['Outlier', 'TBD (affiché avant chaque projet)', 'Hebdomadaire via PayPal, AirTM ou ACH', 'Ouvert (plus de 50 pays)'],
        ['Alignerr', '15–120 $/h', 'TBD (configuré après acceptation)', 'Réserve : la FAQ mentionne des pièces d’identité américaines'],
        ['micro1', 'TBD (par mission)', 'TBD', 'Ouvert (communauté d’experts mondiale)'],
        ['Handshake AI', 'Jusqu’à 17–150 $/h', 'À l’heure', 'États-Unis uniquement'],
      ],
    },
    sections: [
      {
        h2: 'En quoi consiste un travail à distance d’entraînement d’IA ?',
        paragraphs: [
          'Entraîner une IA, c’est évaluer, corriger ou rédiger des réponses qui servent à tester et améliorer des modèles de langage. Les tâches typiques : noter des réponses selon une grille, rédiger des questions difficiles dans son domaine ou vérifier un raisonnement étape par étape.',
          'Le travail se fait entièrement à distance, le plus souvent par projets. Le volume varie d’un projet et d’une semaine à l’autre : je le considère comme une activité d’appoint plutôt que comme un revenu stable.',
        ],
      },
      {
        h2: 'Quelles plateformes acceptent les candidats en France ?',
        paragraphs: [
          'D’après leurs pages officielles au 2026-11-05, Mercor, Mindrift, Outlier et micro1 sont ouvertes aux candidats de l’UE, sous réserve des exigences propres à chaque projet. Alignerr accueille des candidats du monde entier, mais sa FAQ indique que la vérification d’identité n’accepte que des pièces américaines : vérifiez ce point avant d’y consacrer du temps.',
          'Le Handshake AI Fellowship exige d’être basé aux États-Unis avec une autorisation de travail valide ; ce n’est donc pas une option si vous vivez en France.',
        ],
      },
      {
        h2: 'Combien paient les missions d’entraînement d’IA ?',
        paragraphs: [
          'Je ne reprends que les fourchettes publiées par les plateformes elles-mêmes : par exemple 40–70 $/h chez Mercor pour les généralistes et 35–50 $/h pour les experts langue et audio, ou 15–30 $/h chez Mindrift au niveau débutant. Ce sont des montants bruts en dollars, avant impôts et cotisations sociales.',
          'Ces fourchettes ne sont pas des promesses. Votre rémunération réelle dépend du projet, du temps validé, du contrôle qualité et du volume de travail disponible.',
        ],
      },
      {
        h2: 'Que dois-je régler avant de commencer ?',
        paragraphs: [
          'Vous facturez en tant que prestataire : en France, cela passe généralement par un statut d’indépendant, souvent la micro-entreprise déclarée auprès de l’URSSAF. Consultez le guide fiscal et, en cas de doute, impots.gouv.fr.',
          'Si vous êtes indemnisé par France Travail, déclarez l’activité avant de commencer. Vérifiez aussi que la plateforme est authentique : une vraie plateforme ne vous fait jamais payer pour travailler.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – offres officielles', url: 'https://work.mercor.com' },
      { label: 'Mindrift – site officiel', url: 'https://mindrift.ai/' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
      { label: 'URSSAF – auto-entrepreneur', url: 'https://www.autoentrepreneur.urssaf.fr' },
    ],
    faqs: [
      { question: 'Puis-je faire de l’entraînement d’IA depuis la France ?', answer: 'Oui. Mercor, Mindrift et Outlier indiquent accepter des candidats de l’UE au 2026-11-05. Certains projets ont leurs propres exigences.' },
      { question: 'La rémunération est-elle garantie ?', answer: 'Non. Les montants que j’affiche sont des fourchettes publiées par les plateformes et ne garantissent ni le tarif horaire ni le volume de travail.' },
      { question: 'Suis-je salarié de la plateforme ?', answer: 'Non. En règle générale, vous travaillez comme prestataire indépendant et gérez vous-même impôts et cotisations.' },
      { question: 'Dois-je payer pour commencer ?', answer: 'Non. Une plateforme légitime ne fait jamais payer la candidature, la formation ou le matériel. Une demande d’argent est un signal d’alerte.' },
    ],
  },

  'taxes-toiminimi-yel-finland': {
    ...META,
    slug: 'taxes-toiminimi-yel-finland',
    lang: 'fr',
    title: 'Impôts sur les missions d’IA en France : micro-entreprise',
    metaDescription:
      'Fiscalité des missions d’entraînement d’IA en France : micro-entreprise, URSSAF, impots.gouv.fr et TVA, plus une note si vous résidez en Finlande.',
    h1: 'Comment déclarer les revenus de plateformes d’IA étrangères ?',
    directAnswer:
      'Au 2026-11-05, si vous résidez en France et facturez des plateformes d’IA étrangères, vous exercez en principe une activité indépendante, souvent sous le régime de la micro-entreprise déclaré auprès de l’URSSAF. Si vous résidez en Finlande, c’est Vero.fi et éventuellement l’assurance YEL qui s’appliquent ; ceci n’est pas un conseil fiscal.',
    hubSlug: '/for/finance/',
    relatedGuides: ['unemployment-benefits-ai-work', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Organismes et notions de base pour les indépendants (vérifié le 2026-11-05)',
      headers: ['Question', 'France', 'Finlande (si vous y résidez)'],
      rows: [
        ['Administration fiscale', 'impots.gouv.fr (DGFiP)', 'Vero.fi'],
        ['Statut courant', 'Micro-entreprise (entrepreneur individuel)', 'Toiminimi (entrepreneur individuel)'],
        ['Cotisations sociales', 'Déclarées à l’URSSAF sur le chiffre d’affaires', 'YEL, obligatoire dès 9 423 €/an de revenu d’activité (2026)'],
        ['Immatriculation', 'Guichet unique (formalites.entreprises.gouv.fr)', 'ytj.fi'],
      ],
    },
    sections: [
      {
        h2: 'Ai-je besoin d’un statut pour les missions d’entraînement d’IA ?',
        paragraphs: [
          'Les plateformes d’IA vous paient comme prestataire indépendant et ne prélèvent pas d’impôt français. La plupart des personnes en France créent donc une micro-entreprise via le guichet unique, puis déclarent leur chiffre d’affaires à l’URSSAF.',
          'Le bon cadre dépend du caractère régulier ou ponctuel de l’activité. Je vous conseille de vérifier votre situation sur impots.gouv.fr ou auprès d’un expert-comptable avant le premier paiement.',
        ],
      },
      {
        h2: 'Comment fonctionne la TVA avec un client à l’étranger ?',
        paragraphs: [
          'Les prestations de services à une entreprise étrangère sont souvent imposables dans le pays du client, ce qui peut vous amener à facturer sans TVA française. Les règles dépendent du fait que le client soit une entreprise et de son lieu d’établissement, dans ou hors de l’UE.',
          'Les micro-entrepreneurs peuvent bénéficier d’une franchise en base de TVA sous certains seuils. Vérifiez sur impots.gouv.fr ce qui s’applique à vos clients.',
        ],
      },
      {
        h2: 'Comment gérer des paiements en dollars ?',
        paragraphs: [
          'Les revenus se déclarent en euros. Conservez factures, relevés de paiement et le taux de change utilisé, par exemple celui du jour de réception.',
          'Tenez un registre simple dès le premier jour : date, plateforme, montant brut en USD, montant reçu en euros et frais de Stripe ou PayPal.',
        ],
      },
      {
        h2: 'Que se passe-t-il si je réside en Finlande ?',
        paragraphs: [
          'Si vous résidez en Finlande, c’est l’administration fiscale finlandaise (Vero.fi) qui est compétente. Beaucoup enregistrent une toiminimi et demandent un impôt anticipé (ennakkovero) via ytj.fi et OmaVero.',
          'L’assurance retraite YEL est obligatoire lorsque le revenu d’activité confirmé atteint 9 423 € par an (2026). Ceci est une information générale, pas un conseil fiscal.',
        ],
      },
    ],
    sources: [
      { label: 'impots.gouv.fr – professionnels', url: 'https://www.impots.gouv.fr/professionnel' },
      { label: 'URSSAF – auto-entrepreneur', url: 'https://www.autoentrepreneur.urssaf.fr' },
      { label: 'Vero.fi – administration fiscale finlandaise', url: 'https://www.vero.fi/' },
    ],
    faqs: [
      { question: 'Est-ce un conseil fiscal ?', answer: 'Non. C’est une information générale au 2026-11-05. Pour votre cas, contactez impots.gouv.fr, l’URSSAF ou un expert-comptable.' },
      { question: 'La plateforme prélève-t-elle l’impôt pour moi ?', answer: 'En général non. Les plateformes étrangères versent des montants bruts et vous êtes responsable de vos impôts et cotisations.' },
      { question: 'Dois-je créer une micro-entreprise ?', answer: 'Pas toujours, mais c’est le cadre le plus courant pour une activité indépendante régulière en France.' },
      { question: 'Qu’est-ce que YEL ?', answer: 'YEL est l’assurance retraite finlandaise des indépendants. Elle ne concerne que les personnes exerçant en Finlande, à partir de 9 423 €/an de revenu d’activité (2026).' },
    ],
  },

  'unemployment-benefits-ai-work': {
    ...META,
    slug: 'unemployment-benefits-ai-work',
    lang: 'fr',
    title: 'Chômage et missions d’IA : impact sur vos allocations',
    metaDescription:
      'Vous percevez l’allocation chômage et voulez faire des missions d’entraînement d’IA ? Comment déclarer l’activité à France Travail avant de commencer.',
    h1: 'Puis-je faire des missions d’IA tout en touchant le chômage ?',
    directAnswer:
      'Au 2026-11-05, des missions d’IA peuvent modifier vos allocations chômage, et vous devez déclarer l’activité à France Travail avant de commencer. Le maintien, la réduction ou l’arrêt des allocations dépend de l’examen de votre situation par France Travail.',
    hubSlug: '/for/general/',
    relatedGuides: ['taxes-toiminimi-yel-finland', 'remote-side-jobs-from-home', 'ai-training-for-phds-and-students'],
    table: {
      caption: 'Qui fait quoi quand on est demandeur d’emploi en France (vérifié le 2026-11-05)',
      headers: ['Organisme', 'Rôle', 'Ce que vous faites'],
      rows: [
        ['France Travail', 'Inscription, actualisation et versement des allocations', 'Déclarer l’activité et les revenus lors de l’actualisation mensuelle'],
        ['URSSAF', 'Cotisations des indépendants', 'Déclarer le chiffre d’affaires de la micro-entreprise'],
        ['impots.gouv.fr', 'Impôt sur le revenu', 'Déclarer les revenus d’activité séparément des allocations'],
      ],
    },
    sections: [
      {
        h2: 'Dois-je déclarer mes missions d’IA à France Travail ?',
        paragraphs: [
          'Oui. Toute activité, même quelques heures de notation à distance, doit être déclarée à France Travail. Faites-le avant de commencer pour que votre situation soit examinée correctement.',
          'Les heures travaillées et les revenus se déclarent lors de l’actualisation mensuelle. Ne pas déclarer une activité peut entraîner une demande de remboursement (trop-perçu).',
        ],
      },
      {
        h2: 'Que change la création d’une micro-entreprise ?',
        paragraphs: [
          'Si vous facturez via une micro-entreprise, l’activité est traitée comme une activité non salariée, avec des règles de prise en compte des revenus différentes de celles d’un emploi salarié.',
          'Demandez à France Travail comment vos revenus seront pris en compte avant d’immatriculer l’entreprise, en particulier pour des paiements irréguliers en dollars.',
        ],
      },
      {
        h2: 'Comment les revenus d’IA modifient-ils le montant perçu ?',
        paragraphs: [
          'En règle générale, les revenus d’activité réduisent l’allocation : le total dépasse l’allocation seule, sans pour autant s’additionner intégralement. France Travail publie les règles applicables sur son site.',
          'L’impôt est traité à part : la plateforme ne prélève rien, vous déclarez donc ces revenus sur impots.gouv.fr.',
        ],
      },
      {
        h2: 'Comment éviter un trop-perçu ?',
        paragraphs: [
          'Conservez les réponses écrites de France Travail, notez vos heures jour par jour et gardez les relevés de paiement de la plateforme. Il est alors facile de justifier votre activité.',
          'Le travail par projets varie beaucoup. Ne comptez pas sur un volume précis et déclarez le temps réel plutôt que des estimations.',
        ],
      },
    ],
    sources: [
      { label: 'France Travail', url: 'https://www.francetravail.fr' },
      { label: 'URSSAF – auto-entrepreneur', url: 'https://www.autoentrepreneur.urssaf.fr' },
      { label: 'impots.gouv.fr', url: 'https://www.impots.gouv.fr' },
    ],
    faqs: [
      { question: 'Puis-je perdre mes allocations en faisant des missions d’IA ?', answer: 'Elles peuvent être modifiées. France Travail examine votre situation individuellement : déclarez l’activité avant de commencer.' },
      { question: 'Dois-je déclarer quelques heures par semaine ?', answer: 'Oui. Toute activité rémunérée doit être déclarée, quelle que soit sa durée.' },
      { question: 'Les revenus de plateforme sont-ils imposés à part ?', answer: 'Oui. Les plateformes étrangères ne prélèvent pas d’impôt français ; vous les déclarez sur impots.gouv.fr.' },
      { question: 'Est-ce un conseil juridique ?', answer: 'Non, c’est une information générale au 2026-11-05. France Travail vous répond pour votre cas.' },
    ],
  },

  'ai-interview-preparation': {
    ...META,
    slug: 'ai-interview-preparation',
    lang: 'fr',
    title: 'Entretien IA : se préparer pour Mercor, micro1 et autres',
    metaDescription:
      'Comment préparer les entretiens vidéo IA de Mercor et micro1 et les tests d’Outlier, Mindrift et Alignerr, honnêtement et sans questions « fuitées ».',
    h1: 'Comment me préparer à l’entretien IA de Mercor ou micro1 ?',
    directAnswer:
      'Au 2026-11-05, Mercor utilise un entretien vidéo IA automatisé d’environ 20 minutes et micro1 un entretien IA automatisé avec une page de préparation officielle, tandis qu’Outlier, Mindrift et Alignerr s’appuient surtout sur des tests de compétences. La meilleure préparation : répéter des réponses concises sur votre expertise réelle et vérifier caméra, micro et connexion.',
    hubSlug: '/for/software/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-training-for-phds-and-students', 'avoid-ai-job-scams'],
    table: {
      caption: 'Formats de sélection des principales plateformes (descriptions officielles, 2026-11-05)',
      headers: ['Plateforme', 'Format', 'Ce qui est évalué'],
      rows: [
        ['Mercor', 'Entretien vidéo IA automatisé (~20 min) et test spécifique au poste', 'Expertise métier et communication'],
        ['micro1', 'Entretien IA automatisé (préparation sur micro1.ai/interview-prep)', 'Connaissances liées à la mission'],
        ['Outlier', 'Tests de compétences généraux (30–90 min) et qualifications par projet', 'Raisonnement, rédaction, respect des consignes'],
        ['Mindrift', 'Test métier ou technique', 'Compétences dans le domaine'],
        ['Alignerr', 'Entretien Zara™ ou tests de compétences', 'Compétences propres au poste'],
      ],
    },
    sections: [
      {
        h2: 'Comment se déroule un entretien vidéo IA ?',
        paragraphs: [
          'Chez Mercor, vous téléversez votre CV puis passez un entretien vidéo IA automatisé d’environ 20 minutes, parfois suivi d’un test propre au poste. L’intervieweur pose des questions de relance à partir de votre CV et de vos réponses.',
          'micro1 utilise aussi un entretien IA automatisé et publie une page de préparation officielle sur micro1.ai/interview-prep. La lire avant de commencer est l’étape la plus utile.',
        ],
      },
      {
        h2: 'Comment structurer mes réponses sans paraître récité ?',
        paragraphs: [
          'Je choisis trois ou quatre projets réels et m’entraîne à décrire chacun en une minute environ : le problème, ce que j’ai fait, ce que je ferais autrement. Je commence par la réponse directe, puis j’explique mon raisonnement.',
          'Répondez dans la langue de l’annonce, souvent l’anglais. Parlez un peu plus lentement si ce n’est pas votre langue maternelle : la clarté compte plus que l’accent.',
        ],
      },
      {
        h2: 'Pourquoi éviter les questions « fuitées » ?',
        paragraphs: [
          'Des listes de « vraies questions Mercor » circulent sur les forums et Telegram, mais les questions sont générées à partir de votre CV et de vos réponses. Certaines listes servent d’appât pour du « coaching » payant ou des arnaques.',
          'Utiliser des documents non autorisés ou des outils d’IA pendant l’entretien peut enfreindre les conditions de la plateforme et entraîner votre exclusion.',
        ],
      },
      {
        h2: 'Comment préparer mon espace et mon matériel ?',
        paragraphs: [
          'Installez-vous dans une pièce calme avec une connexion stable, une webcam et un micro corrects. Testez-les dans le navigateur avant de commencer et gardez votre pièce d’identité à portée de main.',
          'Vérifiez les exigences d’identité à l’avance : la FAQ d’Alignerr indique par exemple que seules des pièces d’identité américaines sont acceptées.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – offres officielles', url: 'https://work.mercor.com' },
      { label: 'micro1 – experts', url: 'https://www.micro1.ai/experts' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
    ],
    faqs: [
      { question: 'Combien de temps dure l’entretien IA de Mercor ?', answer: 'Les étapes officielles de Mercor décrivent un entretien vidéo IA automatisé d’environ 20 minutes, plus un éventuel test propre au poste.' },
      { question: 'micro1 propose-t-il une préparation officielle ?', answer: 'Oui. micro1 renvoie vers une page de préparation sur micro1.ai/interview-prep.' },
      { question: 'Puis-je utiliser ChatGPT pendant l’entretien ?', answer: 'Non. Utiliser des outils ou des notes pendant la sélection peut enfreindre les conditions et entraîner un refus ou une exclusion.' },
      { question: 'Un entretien réussi garantit-il du travail ?', answer: 'Non. Il vous rend éligible à des projets, mais le volume de travail n’est pas garanti.' },
    ],
  },

  'avoid-ai-job-scams': {
    ...META,
    slug: 'avoid-ai-job-scams',
    lang: 'fr',
    title: 'Arnaques aux emplois IA : signaux d’alerte et signalement',
    metaDescription:
      'Repérer les fausses offres d’entraînement d’IA : frais, messageries et crypto. Où signaler en France : cybermalveillance.gouv.fr, police et gendarmerie.',
    h1: 'Comment reconnaître une fausse offre d’entraînement d’IA ?',
    directAnswer:
      'Au 2026-11-05, les plateformes légitimes comme Mercor, Mindrift, Outlier et micro1 ne font jamais payer la candidature ni le déblocage de tâches, et recrutent via leurs domaines officiels. Si l’on vous contacte sur Telegram ou WhatsApp pour des « tâches » payées ou qu’on vous demande un dépôt, considérez-le comme une arnaque et consultez cybermalveillance.gouv.fr.',
    hubSlug: '/for/legal/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-interview-preparation', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Domaines officiels et signaux d’arnaque (vérifié le 2026-11-05)',
      headers: ['Plateforme', 'Domaine officiel', 'Signal d’alerte'],
      rows: [
        ['Mercor', 'work.mercor.com', 'Un recruteur vous demande de continuer sur Telegram ou WhatsApp'],
        ['Mindrift', 'mindrift.ai', 'Frais de formation ou dépôt demandés avant les tâches'],
        ['Outlier', 'outlier.ai', 'Paiement promis en crypto ou après « recharge » du compte'],
        ['micro1', 'micro1.ai', 'Domaine imitant la marque avec des mots ajoutés'],
        ['Alignerr', 'alignerr.com', 'Offre non sollicitée sans aucun test'],
      ],
    },
    sections: [
      {
        h2: 'Quels sont les signes les plus clairs d’une arnaque ?',
        paragraphs: [
          'Le signal le plus fort, c’est l’argent qui circule dans le mauvais sens. Les plateformes présentées ici sont gratuites à la candidature et vous paient ; aucune ne demande d’acheter un kit, de payer des « frais de vérification » ou de déposer des fonds.',
          'Autres signaux : un message non sollicité pour un poste auquel vous n’avez pas postulé, une rémunération très élevée pour des tâches simples, une pression pour agir vite et un passage vers une messagerie privée.',
        ],
      },
      {
        h2: 'Comment fonctionnent les arnaques aux tâches sur Telegram et WhatsApp ?',
        paragraphs: [
          'On vous confie d’abord de petites « tâches », comme noter des produits, avec un petit paiement pour gagner votre confiance. Ensuite, il faut « recharger » votre compte pour débloquer la suite.',
          'Le solde affiché grimpe, mais les retraits restent bloqués jusqu’au prochain paiement. S’arrêter à la première demande d’argent est la seule protection fiable.',
        ],
      },
      {
        h2: 'Comment vérifier qu’une plateforme est authentique ?',
        paragraphs: [
          'Saisissez vous-même l’adresse officielle, par exemple work.mercor.com ou mindrift.ai, et cherchez le poste sur ce site. Si l’offre n’y figure pas, elle n’est pas réelle.',
          'La vérification d’identité légitime se fait dans la plateforme officielle. N’envoyez jamais votre passeport ou vos identifiants bancaires dans une conversation privée.',
        ],
      },
      {
        h2: 'Que faire si j’ai été ciblé ou arnaqué en France ?',
        paragraphs: [
          'Coupez tout contact et n’envoyez plus d’argent. Si vous avez communiqué vos coordonnées bancaires, contactez immédiatement votre banque pour faire opposition.',
          'Cybermalveillance.gouv.fr vous oriente et explique comment porter plainte auprès de la police ou de la gendarmerie. Conservez captures d’écran, pseudonymes et détails des transactions, et méfiez-vous des « services de récupération » payants.',
        ],
      },
    ],
    sources: [
      { label: 'Cybermalveillance.gouv.fr', url: 'https://www.cybermalveillance.gouv.fr' },
      { label: 'Mercor – offres officielles', url: 'https://work.mercor.com' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
    ],
    faqs: [
      { question: 'Les vraies plateformes font-elles payer la candidature ?', answer: 'Non. Postuler chez Mercor, Mindrift, Outlier, micro1 et Alignerr est gratuit. Une demande de frais est un fort signal d’arnaque.' },
      { question: 'Mercor me contacterait-il sur WhatsApp ?', answer: 'Postulez et échangez via le portail officiel work.mercor.com. Méfiez-vous des offres qui vous poussent vers une messagerie privée.' },
      { question: 'Où signaler une arnaque en France ?', answer: 'Consultez cybermalveillance.gouv.fr et portez plainte auprès de la police ou de la gendarmerie. Prévenez votre banque si vous avez partagé des données de paiement.' },
      { question: 'Puis-je récupérer mon argent ?', answer: 'Parfois, si la banque agit vite, mais souvent non. Évitez les « services de récupération » payants, souvent eux-mêmes des arnaques.' },
    ],
  },

  'ai-training-for-phds-and-students': {
    ...META,
    slug: 'ai-training-for-phds-and-students',
    lang: 'fr',
    title: 'Entraînement d’IA pour doctorants et étudiants en France',
    metaDescription:
      'Quelles missions d’entraînement d’IA conviennent aux doctorants et étudiants en France ? Fourchettes publiées, éligibilité et pourquoi Handshake AI est réservé aux États-Unis.',
    h1: 'Les doctorants et étudiants en France peuvent-ils faire de l’entraînement d’IA ?',
    directAnswer:
      'Oui : au 2026-11-05, des plateformes comme Mercor et Mindrift acceptent des candidats de l’UE, et l’expertise doctorale est recherchée dans de nombreux projets. Le Handshake AI Fellowship est en revanche réservé aux personnes basées aux États-Unis avec une autorisation de travail valide.',
    hubSlug: '/for/general/',
    relatedGuides: ['ai-interview-preparation', 'unemployment-benefits-ai-work', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Fourchettes publiées utiles aux étudiants et chercheurs (vérifié le 2026-11-05)',
      headers: ['Plateforme et rôle', 'Fourchette publiée (USD)', 'France/UE'],
      rows: [
        ['Mindrift – débutant', '15–30 $/h (STEM jusqu’à 6 400 $/mois)', 'Ouvert (télétravail mondial)'],
        ['Mercor – Generalist Expert', '40–70 $/h', 'Ouvert (télétravail mondial)'],
        ['Alignerr – général/éthique', '40–120 $/h', 'Réserve : vérifier les règles d’identité dans la FAQ'],
        ['Handshake AI – évaluation', 'Jusqu’à 17 $/h (doctorat en philosophie jusqu’à 120 $/h)', 'États-Unis uniquement'],
      ],
    },
    sections: [
      {
        h2: 'Pourquoi les doctorants sont-ils recherchés ?',
        paragraphs: [
          'De nombreux projets exigent de rédiger et vérifier des questions de niveau recherche, en mathématiques, en sciences ou en sciences humaines. Une connaissance approfondie du sujet y compte plus qu’une expérience générale.',
          'Les tâches consistent souvent à repérer les erreurs dans le raisonnement du modèle et à expliquer pourquoi la réponse est fausse.',
        ],
      },
      {
        h2: 'Quelles plateformes conviennent aux étudiants en France ?',
        paragraphs: [
          'Mindrift propose des tâches débutantes avec une fourchette publiée de 15–30 $/h, et Mercor liste des rôles généralistes à 40–70 $/h. Les deux indiquent accepter des candidats du monde entier, sous réserve des exigences de chaque projet.',
          'Ces fourchettes sont des montants bruts publiés en dollars et ne garantissent ni rémunération ni volume.',
        ],
      },
      {
        h2: 'Pourquoi ne puis-je pas postuler à Handshake AI depuis la France ?',
        paragraphs: [
          'Le Handshake AI Fellowship indique sur sa page officielle que les participants doivent être basés aux États-Unis avec une autorisation de travail que Handshake peut prendre en charge. Cela exclut normalement les personnes vivant en France.',
          'Selon cette page, les étudiants américains en visa F-1 peuvent être éligibles via CPT ou OPT, mais le STEM OPT n’est pas pris en charge.',
        ],
      },
      {
        h2: 'À quoi dois-je faire attention avec mon contrat doctoral ou ma bourse ?',
        paragraphs: [
          'Si vous êtes doctorant sous contrat, une activité annexe peut devoir être déclarée à votre établissement au titre du cumul d’activités. Vérifiez les règles de votre université.',
          'Si vous percevez une bourse ou des aides, renseignez-vous sur l’effet de revenus supplémentaires. Et n’intégrez jamais de données de recherche non publiées dans des tâches d’IA.',
        ],
      },
    ],
    sources: [
      { label: 'Handshake AI – programme MOVE', url: 'https://joinhandshake.com/move-program/' },
      { label: 'Mindrift – site officiel', url: 'https://mindrift.ai/' },
      { label: 'Mercor – offres officielles', url: 'https://work.mercor.com' },
    ],
    faqs: [
      { question: 'Faut-il un doctorat ?', answer: 'Non. Il existe des tâches débutantes, mais certains projets spécialisés exigent des connaissances avancées.' },
      { question: 'Handshake AI est-il ouvert en France ?', answer: 'Non. Au 2026-11-05, le Handshake AI Fellowship exige d’être basé aux États-Unis avec une autorisation de travail valide.' },
      { question: 'Dois-je déclarer cette activité à mon université ?', answer: 'Si vous êtes doctorant sous contrat, c’est possible au titre du cumul d’activités. Vérifiez auprès de votre établissement.' },
      { question: 'Combien puis-je gagner ?', answer: 'Je n’affiche que des fourchettes publiées, par exemple 15–30 $/h chez Mindrift au niveau débutant. Aucune rémunération n’est garantie.' },
    ],
  },
};

// ---------------------------------------------------------------------------
// ES — Español
// ---------------------------------------------------------------------------
const ES: Record<GuideSlug, GuidePageContent> = {
  'remote-side-jobs-from-home': {
    ...META,
    slug: 'remote-side-jobs-from-home',
    lang: 'es',
    title: 'Trabajo desde casa entrenando IA: guía honesta 2026',
    metaDescription:
      '¿Qué plataformas de entrenamiento de IA aceptan freelancers en España? Rangos publicados, forma de pago y requisitos por país a 2026-11-05.',
    h1: '¿Qué trabajos desde casa puedo encontrar en el entrenamiento de IA?',
    directAnswer:
      'A 2026-11-05, varias plataformas de entrenamiento de IA, como Mercor, Mindrift y Outlier, aceptan colaboradores de España y del resto de la UE para trabajar en remoto. La remuneración son rangos publicados que no están garantizados, y trabajas como autónomo, no como empleado.',
    hubSlug: '/for/general/',
    relatedGuides: ['avoid-ai-job-scams', 'taxes-toiminimi-yel-finland', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Rangos publicados y disponibilidad por país (fuente: páginas oficiales, revisado el 2026-11-05)',
      headers: ['Plataforma', 'Rango publicado (USD)', 'Pago', 'España/UE'],
      rows: [
        ['Mercor', '35–180 $/h', 'Semanal vía Stripe', 'Abierto (remoto global)'],
        ['Mindrift', '15–100+ $/h', 'Quincenal, por tarea', 'Abierto (según las condiciones de Toloka)'],
        ['Outlier', 'TBD (se muestra antes de cada proyecto)', 'Semanal vía PayPal, AirTM o ACH', 'Abierto (más de 50 países)'],
        ['Alignerr', '15–120 $/h', 'TBD (se configura tras la admisión)', 'Con reservas: la FAQ cita documentos de identidad de EE. UU.'],
        ['micro1', 'TBD (por proyecto)', 'TBD', 'Abierto (comunidad global de expertos)'],
        ['Handshake AI', 'Hasta 17–150 $/h', 'Por hora', 'Solo EE. UU.'],
      ],
    },
    sections: [
      {
        h2: '¿En qué consiste trabajar en remoto entrenando IA?',
        paragraphs: [
          'Entrenar IA significa evaluar, corregir o redactar respuestas que se usan para probar y mejorar modelos de lenguaje. Las tareas típicas son puntuar respuestas con una rúbrica, escribir preguntas difíciles de tu especialidad o revisar un razonamiento paso a paso.',
          'Es un trabajo totalmente en remoto y casi siempre por proyectos. El volumen cambia de un proyecto y de una semana a otra, así que yo lo veo como un ingreso complementario más que como una fuente estable.',
        ],
      },
      {
        h2: '¿Qué plataformas aceptan candidatos desde España?',
        paragraphs: [
          'Según sus páginas oficiales a 2026-11-05, Mercor, Mindrift, Outlier y micro1 están abiertas a candidatos de la UE, con los requisitos propios de cada proyecto. Alignerr admite candidatos de todo el mundo, pero su FAQ indica que la verificación de identidad solo acepta documentos de EE. UU., así que conviene comprobarlo antes de invertir tiempo.',
          'El Handshake AI Fellowship exige residir en EE. UU. con permiso de trabajo válido, por lo que no es una opción si vives en España.',
        ],
      },
      {
        h2: '¿Cuánto se paga por entrenar IA?',
        paragraphs: [
          'Solo reproduzco los rangos que publican las propias plataformas: por ejemplo, 40–70 $/h en Mercor para perfiles generalistas y 35–50 $/h para expertos en idiomas y audio, o 15–30 $/h en Mindrift en el nivel inicial. Son importes brutos en dólares, antes de impuestos y cotizaciones.',
          'Estos rangos no son promesas. Lo que cobres dependerá del proyecto, del tiempo aprobado, del control de calidad y del trabajo disponible.',
        ],
      },
      {
        h2: '¿Qué tengo que resolver antes de empezar?',
        paragraphs: [
          'Facturas como profesional independiente, así que en España lo habitual es darse de alta como autónomo en la Agencia Tributaria y en la Seguridad Social. Consulta la guía fiscal y, si tienes dudas, la Agencia Tributaria.',
          'Si cobras la prestación por desempleo del SEPE, comunica la actividad antes de empezar. Comprueba también que la plataforma es real: una plataforma legítima nunca te cobra por trabajar.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – ofertas oficiales', url: 'https://work.mercor.com' },
      { label: 'Mindrift – sitio oficial', url: 'https://mindrift.ai/' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
      { label: 'Agencia Tributaria', url: 'https://sede.agenciatributaria.gob.es' },
    ],
    faqs: [
      { question: '¿Puedo entrenar IA desde España?', answer: 'Sí. Mercor, Mindrift y Outlier indican que aceptan candidatos de la UE a 2026-11-05. Algunos proyectos tienen requisitos propios.' },
      { question: '¿Está garantizada la remuneración?', answer: 'No. Las cifras que muestro son rangos publicados por las plataformas y no garantizan ni la tarifa por hora ni el volumen de trabajo.' },
      { question: '¿Me contrata la plataforma como empleado?', answer: 'No. Normalmente trabajas como colaborador independiente y te encargas tú de impuestos y cotizaciones.' },
      { question: '¿Tengo que pagar para empezar?', answer: 'No. Una plataforma legítima nunca cobra por la solicitud, la formación o el equipo. Si te piden dinero, es una señal de alarma.' },
    ],
  },

  'taxes-toiminimi-yel-finland': {
    ...META,
    slug: 'taxes-toiminimi-yel-finland',
    lang: 'es',
    title: 'Impuestos por trabajos de IA en España: guía para autónomos',
    metaDescription:
      'Fiscalidad del entrenamiento de IA en España: alta de autónomo, Agencia Tributaria, Seguridad Social e IVA, más una nota si resides en Finlandia.',
    h1: '¿Cómo tributo los ingresos de plataformas de IA extranjeras?',
    directAnswer:
      'A 2026-11-05, si resides en España y facturas a plataformas de IA extranjeras, lo normal es que ejerzas una actividad económica como autónomo, dado de alta en la Agencia Tributaria y en la Seguridad Social. Si resides en Finlandia, se aplican Vero.fi y, en su caso, el seguro YEL; esto no es asesoramiento fiscal.',
    hubSlug: '/for/finance/',
    relatedGuides: ['unemployment-benefits-ai-work', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Organismos y conceptos básicos para trabajadores independientes (revisado el 2026-11-05)',
      headers: ['Cuestión', 'España', 'Finlandia (si resides allí)'],
      rows: [
        ['Administración tributaria', 'Agencia Tributaria (AEAT)', 'Vero.fi'],
        ['Forma habitual', 'Autónomo (persona física)', 'Toiminimi (empresario individual)'],
        ['Cotización social', 'Régimen de autónomos (RETA) en la Seguridad Social', 'YEL, obligatorio desde 9 423 €/año de renta de trabajo (2026)'],
        ['Alta', 'Declaración censal en la Agencia Tributaria', 'ytj.fi'],
      ],
    },
    sections: [
      {
        h2: '¿Tengo que darme de alta como autónomo?',
        paragraphs: [
          'Las plataformas de IA te pagan como colaborador independiente y no retienen impuestos españoles. Por eso la mayoría se da de alta en el censo de la Agencia Tributaria y en el régimen de autónomos de la Seguridad Social.',
          'La obligación depende de si la actividad es habitual o puntual. Te recomiendo consultar tu caso con la Agencia Tributaria, la Seguridad Social o un gestor antes del primer cobro.',
        ],
      },
      {
        h2: '¿Cómo funciona el IVA si el cliente está en el extranjero?',
        paragraphs: [
          'Los servicios prestados a empresas extranjeras suelen tributar en el país del cliente, lo que puede significar facturar sin IVA español. Las reglas dependen de si el cliente es una empresa y de si está dentro o fuera de la UE.',
          'Para operaciones con empresas de la UE puede ser necesario darse de alta en el registro de operadores intracomunitarios. Comprueba en la Agencia Tributaria qué se aplica a tus clientes.',
        ],
      },
      {
        h2: '¿Cómo gestiono los cobros en dólares?',
        paragraphs: [
          'Los ingresos se declaran en euros. Guarda facturas, justificantes de pago y el tipo de cambio que utilices, por ejemplo el del día del cobro.',
          'Lleva un registro sencillo desde el primer día: fecha, plataforma, importe bruto en USD, importe recibido en euros y comisiones de Stripe o PayPal.',
        ],
      },
      {
        h2: '¿Qué pasa si resido en Finlandia?',
        paragraphs: [
          'Si resides en Finlandia, la competente es la administración tributaria finlandesa (Vero.fi). Muchas personas registran una toiminimi y solicitan el pago anticipado (ennakkovero) a través de ytj.fi y OmaVero.',
          'El seguro de pensiones YEL es obligatorio cuando la renta de trabajo confirmada llega a 9 423 € al año (2026). Esto es información general, no asesoramiento fiscal.',
        ],
      },
    ],
    sources: [
      { label: 'Agencia Tributaria – sede electrónica', url: 'https://sede.agenciatributaria.gob.es' },
      { label: 'Seguridad Social – autónomos', url: 'https://www.seg-social.es' },
      { label: 'Vero.fi – administración tributaria finlandesa', url: 'https://www.vero.fi/' },
    ],
    faqs: [
      { question: '¿Esto es asesoramiento fiscal?', answer: 'No. Es información general a 2026-11-05. Para tu caso, consulta la Agencia Tributaria o a un gestor.' },
      { question: '¿La plataforma me retiene impuestos?', answer: 'Normalmente no. Las plataformas extranjeras pagan importes brutos y tú eres responsable de impuestos y cotizaciones.' },
      { question: '¿Es obligatorio darse de alta como autónomo?', answer: 'Depende de la habitualidad de la actividad, pero es la forma más común de trabajar de manera independiente en España.' },
      { question: '¿Qué es YEL?', answer: 'YEL es el seguro de pensiones finlandés para autónomos. Solo afecta a quien trabaja por cuenta propia en Finlandia, desde 9 423 €/año de renta de trabajo (2026).' },
    ],
  },

  'unemployment-benefits-ai-work': {
    ...META,
    slug: 'unemployment-benefits-ai-work',
    lang: 'es',
    title: 'Paro y trabajos de IA: cómo afecta a tu prestación',
    metaDescription:
      '¿Cobras el paro y quieres hacer tareas de entrenamiento de IA? Cómo comunicar la actividad al SEPE antes de empezar, según la situación a 2026-11-05.',
    h1: '¿Puedo hacer trabajos de IA mientras cobro el paro?',
    directAnswer:
      'A 2026-11-05, los trabajos de IA pueden afectar a tu prestación por desempleo, y debes comunicar la actividad al SEPE antes de empezar. Si la prestación se mantiene, se suspende o se extingue depende de cómo el SEPE valore tu situación.',
    hubSlug: '/for/general/',
    relatedGuides: ['taxes-toiminimi-yel-finland', 'remote-side-jobs-from-home', 'ai-training-for-phds-and-students'],
    table: {
      caption: 'Quién hace qué cuando estás en paro en España (revisado el 2026-11-05)',
      headers: ['Organismo', 'Función', 'Qué haces tú'],
      rows: [
        ['SEPE', 'Reconoce y paga la prestación por desempleo', 'Comunicar la actividad antes de empezar'],
        ['Servicio público de empleo autonómico', 'Demanda de empleo', 'Mantener actualizada tu demanda'],
        ['Seguridad Social', 'Alta en el régimen de autónomos', 'Darte de alta si inicias una actividad por cuenta propia'],
        ['Agencia Tributaria', 'Impuestos', 'Declarar los ingresos de la actividad aparte de la prestación'],
      ],
    },
    sections: [
      {
        h2: '¿Tengo que comunicar mis trabajos de IA al SEPE?',
        paragraphs: [
          'Sí. Cualquier actividad, aunque sean pocas horas de evaluación en remoto, debe comunicarse al SEPE. Hazlo antes de empezar para que valoren correctamente tu situación.',
          'No comunicar una actividad puede dar lugar a que te reclamen prestaciones cobradas indebidamente y a sanciones.',
        ],
      },
      {
        h2: '¿Qué cambia si me doy de alta como autónomo?',
        paragraphs: [
          'Darse de alta como autónomo es una actividad por cuenta propia, que se trata de forma distinta al trabajo por cuenta ajena a efectos de la prestación.',
          'Existen opciones específicas para emprendedores que cobran el paro, con condiciones propias. Pregunta al SEPE qué se aplica en tu caso antes de darte de alta.',
        ],
      },
      {
        h2: '¿Qué debo comunicar al servicio de empleo?',
        paragraphs: [
          'El servicio público de empleo de tu comunidad autónoma necesita saber si empiezas a trabajar o a emprender, porque puede afectar a tu demanda de empleo.',
          'Recuerda que los impuestos van aparte: la plataforma no retiene nada, así que declaras esos ingresos ante la Agencia Tributaria.',
        ],
      },
      {
        h2: '¿Cómo evito reclamaciones?',
        paragraphs: [
          'Guarda las respuestas por escrito del SEPE, anota tus horas día a día y conserva los justificantes de pago de la plataforma. Así podrás acreditar tu actividad sin problemas.',
          'El trabajo por proyectos varía mucho. No cuentes con un volumen fijo y comunica el tiempo real en lugar de estimaciones.',
        ],
      },
    ],
    sources: [
      { label: 'SEPE – prestaciones por desempleo', url: 'https://www.sepe.es' },
      { label: 'Seguridad Social – autónomos', url: 'https://www.seg-social.es' },
      { label: 'Agencia Tributaria', url: 'https://sede.agenciatributaria.gob.es' },
    ],
    faqs: [
      { question: '¿Puedo perder el paro por hacer trabajos de IA?', answer: 'Puede afectar a la prestación. El SEPE valora cada caso, así que comunica la actividad antes de empezar.' },
      { question: '¿Tengo que comunicar unas pocas horas a la semana?', answer: 'Sí. Cualquier actividad remunerada debe comunicarse, sea cual sea su duración.' },
      { question: '¿Los ingresos de la plataforma tributan aparte?', answer: 'Sí. Las plataformas extranjeras no retienen impuestos españoles; los declaras ante la Agencia Tributaria.' },
      { question: '¿Esto es asesoramiento jurídico?', answer: 'No, es información general a 2026-11-05. El SEPE te dará respuesta para tu caso.' },
    ],
  },

  'ai-interview-preparation': {
    ...META,
    slug: 'ai-interview-preparation',
    lang: 'es',
    title: 'Entrevista con IA: cómo prepararla en Mercor, micro1 y más',
    metaDescription:
      'Cómo preparar las entrevistas en vídeo con IA de Mercor y micro1 y las pruebas de Outlier, Mindrift y Alignerr, con honestidad y sin preguntas filtradas.',
    h1: '¿Cómo me preparo para la entrevista con IA de Mercor o micro1?',
    directAnswer:
      'A 2026-11-05, Mercor usa una entrevista en vídeo automatizada con IA de unos 20 minutos y micro1 una entrevista automatizada con una página oficial de preparación, mientras que Outlier, Mindrift y Alignerr se basan sobre todo en pruebas de habilidades. La mejor preparación es ensayar respuestas concisas sobre tu experiencia real y comprobar cámara, micrófono y conexión.',
    hubSlug: '/for/software/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-training-for-phds-and-students', 'avoid-ai-job-scams'],
    table: {
      caption: 'Formatos de selección de las principales plataformas (descripciones oficiales, 2026-11-05)',
      headers: ['Plataforma', 'Formato', 'Qué evalúa'],
      rows: [
        ['Mercor', 'Entrevista en vídeo automatizada con IA (~20 min) y prueba específica del puesto', 'Dominio de tu especialidad y comunicación'],
        ['micro1', 'Entrevista automatizada con IA (preparación en micro1.ai/interview-prep)', 'Conocimientos para el proyecto concreto'],
        ['Outlier', 'Pruebas generales de habilidades (30–90 min) y cualificaciones por proyecto', 'Razonamiento, redacción y cumplimiento de pautas'],
        ['Mindrift', 'Prueba de especialidad o técnica', 'Conocimientos de la materia'],
        ['Alignerr', 'Entrevista Zara™ o pruebas de habilidades', 'Habilidades propias del puesto'],
      ],
    },
    sections: [
      {
        h2: '¿Cómo es una entrevista en vídeo con IA?',
        paragraphs: [
          'En Mercor subes tu CV y después haces una entrevista en vídeo automatizada de unos 20 minutos, a veces seguida de una prueba específica del puesto. El entrevistador hace preguntas de seguimiento a partir de tu CV y de tus respuestas.',
          'micro1 también utiliza una entrevista automatizada con IA y publica una página oficial de preparación en micro1.ai/interview-prep. Leerla antes de empezar es el paso más útil.',
        ],
      },
      {
        h2: '¿Cómo estructuro mis respuestas sin sonar ensayado?',
        paragraphs: [
          'Elijo tres o cuatro proyectos reales y practico describir cada uno en un minuto: el problema, lo que hice y lo que haría distinto. Empiezo por la respuesta directa y luego explico el razonamiento.',
          'Responde en el idioma de la oferta, normalmente inglés. Si no es tu lengua materna, habla algo más despacio: la claridad importa más que el acento.',
        ],
      },
      {
        h2: '¿Por qué evitar las preguntas filtradas?',
        paragraphs: [
          'En foros y en Telegram circulan listas de «preguntas reales de Mercor», pero las preguntas se generan a partir de tu CV y tus respuestas. Algunas listas son un gancho para vender «coaching» de pago o directamente estafas.',
          'Usar material no autorizado o herramientas de IA durante la entrevista puede incumplir las condiciones de la plataforma y suponer tu exclusión.',
        ],
      },
      {
        h2: '¿Cómo preparo el espacio y el equipo?',
        paragraphs: [
          'Busca una habitación tranquila con conexión estable, webcam y un micrófono decente. Pruébalos en el navegador antes de empezar y ten a mano tu documento de identidad.',
          'Revisa antes los requisitos de identidad: la FAQ de Alignerr indica, por ejemplo, que solo acepta documentos de identidad de EE. UU.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – ofertas oficiales', url: 'https://work.mercor.com' },
      { label: 'micro1 – expertos', url: 'https://www.micro1.ai/experts' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
    ],
    faqs: [
      { question: '¿Cuánto dura la entrevista con IA de Mercor?', answer: 'Los pasos oficiales de Mercor describen una entrevista en vídeo automatizada de unos 20 minutos, más una posible prueba específica del puesto.' },
      { question: '¿micro1 ofrece preparación oficial?', answer: 'Sí. micro1 enlaza a una página de preparación en micro1.ai/interview-prep.' },
      { question: '¿Puedo usar ChatGPT durante la entrevista?', answer: 'No. Usar herramientas o notas durante la selección puede incumplir las condiciones y llevar al rechazo o la exclusión.' },
      { question: '¿Superar la entrevista garantiza trabajo?', answer: 'No. Te hace elegible para proyectos, pero el volumen de trabajo no está garantizado.' },
    ],
  },

  'avoid-ai-job-scams': {
    ...META,
    slug: 'avoid-ai-job-scams',
    lang: 'es',
    title: 'Estafas de empleo con IA: señales de alarma y dónde denunciar',
    metaDescription:
      'Cómo detectar ofertas falsas de entrenamiento de IA: cuotas, apps de mensajería y criptomonedas. Dónde pedir ayuda en España: INCIBE (017) y Policía.',
    h1: '¿Cómo reconozco una oferta falsa de entrenamiento de IA?',
    directAnswer:
      'A 2026-11-05, las plataformas legítimas como Mercor, Mindrift, Outlier y micro1 nunca cobran por solicitar ni por desbloquear tareas, y reclutan desde sus dominios oficiales. Si te escriben por Telegram o WhatsApp ofreciendo «tareas» pagadas o te piden un depósito, trátalo como una estafa y pide ayuda a INCIBE en el 017.',
    hubSlug: '/for/legal/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-interview-preparation', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Dominios oficiales y señales de estafa (revisado el 2026-11-05)',
      headers: ['Plataforma', 'Dominio oficial', 'Señal de alarma'],
      rows: [
        ['Mercor', 'work.mercor.com', 'Un reclutador te pide seguir por Telegram o WhatsApp'],
        ['Mindrift', 'mindrift.ai', 'Te piden una cuota de formación o un depósito antes de las tareas'],
        ['Outlier', 'outlier.ai', 'Pago prometido en criptomonedas o tras «recargar» la cuenta'],
        ['micro1', 'micro1.ai', 'Dominio que imita la marca con palabras añadidas'],
        ['Alignerr', 'alignerr.com', 'Oferta no solicitada sin ninguna prueba'],
      ],
    },
    sections: [
      {
        h2: '¿Cuáles son las señales más claras de una estafa?',
        paragraphs: [
          'La señal más fuerte es que el dinero va en la dirección equivocada. Las plataformas descritas aquí son gratuitas para solicitar y te pagan a ti; ninguna te pide comprar un kit, pagar una «tasa de verificación» o depositar fondos.',
          'Otras señales: mensajes no solicitados por un puesto al que no te presentaste, sueldos muy altos por tareas sencillas, prisas para decidir y el paso a una app de mensajería privada.',
        ],
      },
      {
        h2: '¿Cómo funcionan las estafas de tareas por Telegram y WhatsApp?',
        paragraphs: [
          'Primero te dan pequeñas «tareas», como valorar productos, y te pagan una cantidad pequeña para ganarse tu confianza. Después tienes que «recargar» tu cuenta para desbloquear las siguientes.',
          'El saldo que ves no deja de crecer, pero los retiros siempre quedan bloqueados hasta el próximo pago. Pararte en la primera petición de dinero es la única protección fiable.',
        ],
      },
      {
        h2: '¿Cómo compruebo que una plataforma es real?',
        paragraphs: [
          'Escribe tú mismo la dirección oficial, por ejemplo work.mercor.com o mindrift.ai, y busca allí el puesto. Si la oferta no aparece en la web oficial, no es real.',
          'La verificación de identidad legítima se hace dentro de la plataforma oficial. Nunca envíes tu DNI, tu pasaporte ni tus claves bancarias por un chat privado.',
        ],
      },
      {
        h2: '¿Qué hago si me han intentado estafar en España?',
        paragraphs: [
          'Corta el contacto y no envíes más dinero. Si compartiste datos de tarjeta o del banco, llama de inmediato a tu entidad para bloquear pagos.',
          'INCIBE ofrece ayuda gratuita en el 017, y puedes denunciar ante la Policía Nacional o la Guardia Civil. Guarda capturas, nombres de usuario y datos de las transacciones, y desconfía de los «servicios de recuperación» de pago.',
        ],
      },
    ],
    sources: [
      { label: 'INCIBE – Tu ayuda en ciberseguridad (017)', url: 'https://www.incibe.es' },
      { label: 'Mercor – ofertas oficiales', url: 'https://work.mercor.com' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
    ],
    faqs: [
      { question: '¿Las plataformas reales cobran por solicitar?', answer: 'No. Solicitar en Mercor, Mindrift, Outlier, micro1 y Alignerr es gratis. Pedir una cuota es una clara señal de estafa.' },
      { question: '¿Mercor me contactaría por WhatsApp?', answer: 'Solicita y comunícate a través del portal oficial work.mercor.com. Desconfía de ofertas que te llevan a una app de mensajería privada.' },
      { question: '¿Dónde denuncio una estafa en España?', answer: 'Pide ayuda a INCIBE en el 017 y denuncia ante la Policía Nacional o la Guardia Civil. Avisa a tu banco si compartiste datos de pago.' },
      { question: '¿Puedo recuperar mi dinero?', answer: 'A veces, si el banco actúa rápido, pero a menudo no. Evita los «servicios de recuperación» de pago, que suelen ser otra estafa.' },
    ],
  },

  'ai-training-for-phds-and-students': {
    ...META,
    slug: 'ai-training-for-phds-and-students',
    lang: 'es',
    title: 'Entrenamiento de IA para doctorandos y estudiantes en España',
    metaDescription:
      '¿Qué trabajos de entrenamiento de IA encajan con doctorandos y estudiantes en España? Rangos publicados, requisitos y por qué Handshake AI es solo para EE. UU.',
    h1: '¿Pueden los doctorandos y estudiantes en España entrenar IA?',
    directAnswer:
      'Sí: a 2026-11-05, plataformas como Mercor y Mindrift aceptan candidatos de la UE, y la formación doctoral es muy valorada en muchos proyectos. En cambio, el Handshake AI Fellowship solo está abierto a personas residentes en EE. UU. con permiso de trabajo válido.',
    hubSlug: '/for/general/',
    relatedGuides: ['ai-interview-preparation', 'unemployment-benefits-ai-work', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Rangos publicados relevantes para estudiantes e investigadores (revisado el 2026-11-05)',
      headers: ['Plataforma y rol', 'Rango publicado (USD)', 'España/UE'],
      rows: [
        ['Mindrift – nivel inicial', '15–30 $/h (STEM hasta 6400 $/mes)', 'Abierto (remoto global)'],
        ['Mercor – Generalist Expert', '40–70 $/h', 'Abierto (remoto global)'],
        ['Alignerr – general/ética', '40–120 $/h', 'Con reservas: revisa las normas de identidad en la FAQ'],
        ['Handshake AI – evaluación', 'Hasta 17 $/h (doctorado en filosofía hasta 120 $/h)', 'Solo EE. UU.'],
      ],
    },
    sections: [
      {
        h2: '¿Por qué se buscan doctorandos para entrenar IA?',
        paragraphs: [
          'Muchos proyectos necesitan a alguien capaz de escribir y revisar preguntas de nivel de investigación, por ejemplo en matemáticas, ciencias o humanidades. Ahí pesa más el conocimiento profundo de la materia que la experiencia general.',
          'Las tareas suelen consistir en detectar errores en el razonamiento del modelo y explicar por qué la respuesta es incorrecta.',
        ],
      },
      {
        h2: '¿Qué plataformas encajan con estudiantes en España?',
        paragraphs: [
          'Mindrift tiene tareas de nivel inicial con un rango publicado de 15–30 $/h, y Mercor anuncia puestos generalistas a 40–70 $/h. Ambas indican que aceptan candidatos de todo el mundo, con los requisitos de cada proyecto.',
          'Estos rangos son importes brutos publicados en dólares y no garantizan ni la remuneración ni el volumen de trabajo.',
        ],
      },
      {
        h2: '¿Por qué no puedo solicitar Handshake AI desde España?',
        paragraphs: [
          'El Handshake AI Fellowship indica en su página oficial que los participantes deben residir en EE. UU. y tener un permiso de trabajo que Handshake pueda respaldar. Eso excluye normalmente a quien vive en España.',
          'Según esa página, los estudiantes en EE. UU. con visado F-1 pueden ser elegibles mediante CPT u OPT, pero no se admite el STEM OPT.',
        ],
      },
      {
        h2: '¿Qué debo tener en cuenta con mi contrato predoctoral o beca?',
        paragraphs: [
          'Si tienes un contrato predoctoral, puede que debas comunicar o solicitar la compatibilidad de otras actividades a tu universidad. Revisa las normas de tu institución.',
          'Si cobras una beca, infórmate de cómo afectan los ingresos adicionales. Y nunca introduzcas datos de investigación no publicados en tareas de IA.',
        ],
      },
    ],
    sources: [
      { label: 'Handshake AI – programa MOVE', url: 'https://joinhandshake.com/move-program/' },
      { label: 'Mindrift – sitio oficial', url: 'https://mindrift.ai/' },
      { label: 'Mercor – ofertas oficiales', url: 'https://work.mercor.com' },
    ],
    faqs: [
      { question: '¿Necesito un doctorado?', answer: 'No. Hay tareas de nivel inicial, aunque algunos proyectos especializados exigen conocimientos avanzados.' },
      { question: '¿Handshake AI está abierto en España?', answer: 'No. A 2026-11-05, el Handshake AI Fellowship exige residir en EE. UU. con permiso de trabajo válido.' },
      { question: '¿Tengo que comunicarlo a mi universidad?', answer: 'Si tienes un contrato predoctoral, es posible que debas solicitar la compatibilidad. Consúltalo con tu institución.' },
      { question: '¿Cuánto puedo ganar?', answer: 'Solo muestro rangos publicados, por ejemplo 15–30 $/h en el nivel inicial de Mindrift. Ninguna remuneración está garantizada.' },
    ],
  },
};

export const GUIDES_FR_ES = { fr: FR, es: ES };
