// Long-form guide content for the hub pages (English + Finnish).
// All pay figures come from src/data/platforms.json / src/data/pay-index/2026-11.json
// and are posted ranges on 2026-11-05, never guaranteed earnings.
import type { GuideSlug, GuidePageContent } from './hubTypes';

const EN: Record<GuideSlug, GuidePageContent> = {
  'remote-side-jobs-from-home': {
    slug: 'remote-side-jobs-from-home',
    lang: 'en',
    reviewStatus: 'APPROVED',
    title: 'Remote Side Jobs From Home: An Honest 2026 Guide',
    metaDescription:
      'Remote side jobs from home in 2026: what AI training work really involves, posted pay ranges, who gets accepted, and Finnish tax and benefit basics.',
    h1: 'Which remote side jobs from home are actually worth applying to?',
    directAnswer:
      "As of 2026-11-05, one of the most accessible legitimate remote side jobs is AI training and evaluation work on platforms such as Mercor, Mindrift, Outlier and micro1, where posted ranges run from about $15/h for entry-level tasks to $35–180/h for specialist pools on Mercor (posted ranges, not guaranteed). Anyone with strong reading and writing skills can apply for free, but work is project-based, acceptance is selective, and in Finland you handle your own taxes as a self-employed contractor.",
    lastUpdated: '2026-11-05',
    hubSlug: '/for/general/',
    relatedGuides: ['avoid-ai-job-scams', 'taxes-toiminimi-yel-finland', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Generalist-friendly AI training platforms (posted ranges checked 2026-11-05, not guaranteed)',
      headers: ['Platform', 'Generalist role or entry track', 'Posted range', 'Open to Finland?'],
      rows: [
        ['Mercor', 'Generalist Expert', '$40–70/h', 'Yes (global remote; project eligibility varies)'],
        ['Mindrift', 'Entry-Level AI Trainer', '$15–30/h (paid per task)', 'Yes (subject to Toloka eligibility rules)'],
        ['Outlier', 'Generalist writing & reasoning', 'TBD, shown per project', 'Yes (50+ countries; local ID and phone needed)'],
        ['Alignerr', 'Data Labeling Specialist', '$40–120/h', 'Check first: ID verification lists US documents'],
        ['Handshake AI', 'AI Evaluation Specialist', 'Up to $17/h', 'No (US-based work authorization required)'],
      ],
    },
    sections: [
      {
        h2: 'What does a remote AI training side job actually involve?',
        paragraphs: [
          "Most of the legitimate work behind ads for ‘remote side jobs from home’ is now AI training: you write realistic prompts, compare and rate model answers against a rubric, explain why an answer is wrong, or write a better one. Mercor describes its work as domain-specific model evaluation and rubric grading, Outlier as writing problem/answer pairs and rating LLM responses, and Mindrift as writing domain prompts and editing AI outputs.",
          "It is not data entry and it is not passive income. The tasks demand careful reading, consistent judgement and clear written English, and most platforms run quality checks that can remove you from a project if your ratings drift from the reviewers. I think of it as freelance editing work with unusually strict guidelines.",
          "The volume is also uneven. Platforms such as Mercor say openly that entering a talent pool does not guarantee a project, so treat any acceptance as the start of a pipeline rather than a fixed number of hours per week.",
        ],
      },
      {
        h2: 'How much can a generalist realistically expect to be paid?',
        paragraphs: [
          "The only honest numbers I can give are posted ranges from official listings on 2026-11-05: Mercor’s Generalist Expert role lists $40–70/h, Mindrift’s entry-level track lists $15–30/h paid per completed task, and Handshake AI’s generalist evaluation track lists up to $17/h but is US-only. Outlier and micro1 show rates per project rather than on a public page.",
          "These are gross contractor rates in US dollars. From a Finnish perspective you still pay income tax, possibly YEL pension contributions if your business income is high enough, and currency conversion costs, so the net amount is meaningfully lower than the headline.",
          "Specialists see higher posted ranges: on Mercor, for example, Software Engineering lists $70–150/h and licensed lawyers $100–150/h. If you have a professional background, applying through that track is usually a better use of time than the generalist pool.",
        ],
      },
      {
        h2: 'Who gets accepted, and how do I apply without wasting time?',
        paragraphs: [
          "Applications are free on every platform listed here. Typical steps are uploading a CV, passing an assessment or an automated AI interview, verifying your identity and setting up payouts. Mercor uses an AI video interview of about 20 minutes, Outlier uses skill screenings of 30–90 minutes, and Mindrift uses a domain assessment.",
          "Check eligibility before investing hours. Handshake AI states that participants must be based in the US, and Alignerr’s visa FAQ lists only US identity documents for verification, which can block applicants in Finland. Mercor, Mindrift, Outlier and micro1 describe themselves as open to global or multi-country applicants.",
          "I recommend applying to two or three platforms that match your strongest skill rather than ten at once. A focused CV that names concrete expertise (a degree subject, a profession, a language you write natively) tends to matter more than generic ‘detail-oriented’ wording.",
        ],
      },
      {
        h2: 'What do I need to sort out in Finland before I start?',
        paragraphs: [
          "These platforms pay you as an independent contractor, so no employer withholds tax for you. Vero.fi explains how to report self-employment income and how to apply for a prepayment (ennakkovero) so you do not face a large back-tax bill; many people also set up a sole proprietorship (toiminimi) through YTJ.",
          "If you receive unemployment benefit, report the self-employment to your employment services and your benefit payer before you start the first task, as described on Työmarkkinatori and by Kela and the unemployment funds. Starting first and reporting later is the most common way people end up repaying benefits.",
          "Finally, assume every unsolicited ‘remote job’ message on Telegram or WhatsApp is a scam until proven otherwise. Real AI training platforms never ask you to pay a fee, deposit money or buy equipment to unlock work.",
        ],
      },
    ],
    sources: [
      { label: 'Mercor – official job listings', url: 'https://work.mercor.com' },
      { label: 'Mindrift – official site', url: 'https://mindrift.ai/' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
      { label: 'Vero.fi – Finnish Tax Administration', url: 'https://www.vero.fi/' },
    ],
    faqs: [
      {
        question: 'Can I do AI training side jobs from Finland?',
        answer:
          'Yes. Mercor, Mindrift, Outlier and micro1 describe global or multi-country eligibility that includes Finland, while Handshake AI is US-only and Alignerr’s identity verification currently lists US documents.',
      },
      {
        question: 'Do I need a degree for generalist AI training work?',
        answer:
          'Not always. Outlier’s generalist track states a minimum Associate’s degree with higher degrees preferred, while other generalist pools focus on assessed reading, reasoning and writing ability.',
      },
      {
        question: 'Is the posted hourly rate what I will earn?',
        answer:
          'No. Posted ranges are gross and not guaranteed, hours depend on project availability, and in Finland you pay your own taxes and possibly YEL contributions from that amount.',
      },
      {
        question: 'Do I have to pay anything to start?',
        answer:
          'No. Applying to legitimate AI training platforms is free. Any request for a fee, deposit or crypto payment to unlock tasks is a sign of a scam.',
      },
    ],
  },

  'taxes-toiminimi-yel-finland': {
    slug: 'taxes-toiminimi-yel-finland',
    lang: 'en',
    reviewStatus: 'APPROVED',
    title: 'Taxes, Toiminimi and YEL for AI Work in Finland (2026)',
    metaDescription:
      'Taxes for AI training work in Finland: prepayment tax, toiminimi, the VAT threshold and the 2026 YEL lower limit of EUR 9,423/year explained. Not tax advice.',
    h1: 'How are taxes, toiminimi and YEL handled for AI training work in Finland?',
    directAnswer:
      'As of 2026-11-05, a Finnish resident paid by Mercor, Mindrift, Outlier or similar platforms is an independent contractor who must report the income to Vero.fi, usually pay prepayment tax (ennakkovero), and take out YEL pension insurance if annual work income is at least EUR 9,423 (the 2026 lower limit per ETK.fi) and the activity lasts at least four months. Many people register a toiminimi through YTJ, and VAT registration is generally required only once turnover exceeds EUR 20,000 per calendar year; this is general information, not tax advice.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/finance/',
    relatedGuides: ['unemployment-benefits-ai-work', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Key Finnish obligations for self-employed AI training contractors (2026, check official sources)',
      headers: ['Topic', 'What applies', 'Official source'],
      rows: [
        ['Income tax', 'Report income yourself; no withholding by foreign platforms', 'vero.fi'],
        ['Prepayment tax (ennakkovero)', 'Apply in MyTax (OmaVero) to spread tax over the year', 'vero.fi'],
        ['Toiminimi', 'Optional but common; registered via YTJ (Trade Register / Tax Administration)', 'ytj.fi'],
        ['VAT (ALV)', 'Registration generally required above EUR 20,000 turnover per calendar year', 'vero.fi'],
        ['YEL pension insurance', 'Mandatory if work income ≥ EUR 9,423/year (2026) and activity lasts ≥ 4 months', 'etk.fi'],
      ],
    },
    sections: [
      {
        h2: 'Am I an employee or self-employed when a platform pays me?',
        paragraphs: [
          "Every platform in this guide describes its workers as independent contractors: Mercor pays weekly in USD via Stripe, Outlier pays weekly via PayPal, AirTM or ACH, and Mindrift pays bi-weekly per completed task. None of them deducts Finnish tax, so the responsibility for reporting and paying sits entirely with you.",
          "In Finnish terms this is self-employment (yritystoiminta or, for small occasional work, other earned income). Vero.fi has guidance on both situations; which one fits depends on how regular and business-like your activity is, so I suggest reading the relevant Vero.fi pages or asking an accountant before the first payout rather than at year end.",
          "Keep a simple ledger from day one: date, platform, gross amount in USD, the euro amount actually received, and any fees. That record is what you need for the tax return and for any benefit payer who asks about your income.",
        ],
      },
      {
        h2: 'Do I need a toiminimi and prepayment tax?',
        paragraphs: [
          "A toiminimi (sole proprietorship) is not strictly required to receive contractor income, but registering one through YTJ makes the arrangement clearer: you get a business ID (Y-tunnus), can be entered in the prepayment register, and business expenses such as a share of your computer or internet costs are handled in a structured way.",
          "Because nobody withholds tax on platform payments, Vero.fi recommends applying for prepayment tax (ennakkovero) in MyTax based on your estimated profit. If you skip this and earn a meaningful amount, you can face back taxes plus interest when the assessment is finalised.",
          "You can adjust the prepayment during the year if your income turns out higher or lower than planned. Since AI training work is often irregular, I find it sensible to revisit the estimate every few months.",
        ],
      },
      {
        h2: 'When does VAT (ALV) apply to AI training income?',
        paragraphs: [
          "Vero.fi states that a business generally has to register for VAT once its turnover exceeds EUR 20,000 in a calendar year; below that, registration is voluntary. Many part-time AI trainers stay well under this threshold.",
          "Services sold to a business customer abroad are usually subject to place-of-supply rules, which often means no Finnish VAT is charged on the invoice even if you are registered. The details, including what has to be reported, depend on whether the customer is inside or outside the EU, so check the Vero.fi guidance on cross-border services for your specific case.",
          "If you are unsure, ask Vero.fi directly or use an accountant; this guide is general information and not tax advice.",
        ],
      },
      {
        h2: 'When is YEL pension insurance mandatory?',
        paragraphs: [
          "According to the Finnish Centre for Pensions (ETK.fi), self-employed persons must take out YEL insurance when their confirmed work income is at least EUR 9,423 per year in 2026, the activity has lasted at least four months, and they are within the age range set by law. Below the lower limit, YEL is voluntary.",
          "YEL work income is not the same as your profit: it is an estimate of what it would cost to hire someone to do your work, and it determines both your pension accrual and many social security benefits, such as sickness allowance. Setting it very low saves money now but weakens that protection.",
          "If AI training is a side activity next to a salaried job, you may still meet the YEL criteria for the side business. ETK.fi and the pension insurance companies have calculators and guidance that help you estimate whether the obligation applies.",
        ],
      },
    ],
    sources: [
      { label: 'Vero.fi – Finnish Tax Administration', url: 'https://www.vero.fi/' },
      { label: 'ETK.fi – Finnish Centre for Pensions (YEL)', url: 'https://www.etk.fi/' },
      { label: 'YTJ – Business Information System', url: 'https://www.ytj.fi/' },
    ],
    faqs: [
      {
        question: 'What is the YEL lower limit in 2026?',
        answer:
          'EUR 9,423 of confirmed work income per year, according to ETK.fi. Below that, YEL insurance is voluntary.',
      },
      {
        question: 'Do I have to charge VAT on my Mercor or Outlier income?',
        answer:
          'Registration is generally required only above EUR 20,000 annual turnover, and services to foreign business customers often follow place-of-supply rules. Check Vero.fi for your situation.',
      },
      {
        question: 'Can I work without a toiminimi?',
        answer:
          'It is possible, but you still have to report and pay tax on the income. A toiminimi gives you a business ID and a clearer framework for prepayment tax and expenses.',
      },
      {
        question: 'Is this tax advice?',
        answer:
          'No. It is general information based on Vero.fi and ETK.fi as of 2026-11-05. For decisions about your own situation, contact Vero.fi or a qualified accountant.',
      },
    ],
  },

  'unemployment-benefits-ai-work': {
    slug: 'unemployment-benefits-ai-work',
    lang: 'en',
    reviewStatus: 'APPROVED',
    title: 'Unemployment Benefits and AI Training Work in Finland',
    metaDescription:
      'Unemployed in Finland and considering AI training work? Report self-employment before you start, and learn how Kela, unemployment funds and adjusted benefit work.',
    h1: 'Can I keep my unemployment benefit while doing AI training work in Finland?',
    directAnswer:
      'As of 2026-11-05, you can often do AI training work on platforms like Mercor or Mindrift while unemployed in Finland, but you must report the self-employment to your employment services on Työmarkkinatori and to your benefit payer (Kela or your unemployment fund) before you start the first task. Your employment services assess whether the work is full-time or part-time self-employment, and if it is part-time your benefit is usually paid as adjusted benefit, reduced by your income.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/general/',
    relatedGuides: ['taxes-toiminimi-yel-finland', 'remote-side-jobs-from-home', 'ai-training-for-phds-and-students'],
    table: {
      caption: 'Who does what when an unemployed person starts AI training work in Finland',
      headers: ['Actor', 'Role', 'Where to act'],
      rows: [
        ['Employment services (municipal employment areas)', 'Assess whether self-employment is full-time or part-time; issue a labour policy statement', 'tyomarkkinatori.fi'],
        ['Unemployment fund (työttömyyskassa)', 'Pays earnings-related benefit to members and adjusts it for income', 'Your own fund; overview on tyj.fi'],
        ['Kela', 'Pays basic unemployment allowance and labour market subsidy and adjusts them for income', 'kela.fi'],
        ['Vero.fi', 'Taxes the self-employment income separately from the benefit', 'vero.fi'],
      ],
    },
    sections: [
      {
        h2: 'Why must I report self-employment before starting?',
        paragraphs: [
          "Finnish unemployment security is built on the idea that you are available for full-time work. Starting self-employment, even a few hours of AI rating per week, is a change in that situation, and Työmarkkinatori instructs jobseekers to report it to employment services. Kela and the unemployment funds (whose umbrella organisation is TYJ) give the same instruction.",
          "Reporting first protects you. If you start working and report afterwards, payments made in the meantime may be reclaimed, and in the worst case the omission can be treated as a breach of the duty to disclose. Reporting takes a few minutes online and costs nothing.",
          "When you report, describe the work concretely: which platform, what kind of tasks, roughly how many hours a week you expect, and that work is project-based without guaranteed volume. Accurate information leads to a faster and more accurate decision.",
        ],
      },
      {
        h2: 'How do employment services decide between full-time and part-time self-employment?',
        paragraphs: [
          "Employment services look at the time the business requires, not just the money it brings in. If the work is judged full-time, you are generally not entitled to unemployment benefit; if it is part-time, you can usually continue to receive benefit as adjusted unemployment allowance.",
          "For flexible platform work, the key facts are the hours you expect to spend and whether you can still take up full-time employment. AI training projects are typically remote, flexible and without fixed hours, which is worth explaining clearly.",
          "The rules and their interpretation can change, and since 2025 public employment services have been run by municipal employment areas. I recommend checking the current instructions on Työmarkkinatori and from your own benefit payer rather than relying on older forum posts.",
        ],
      },
      {
        h2: 'How does AI training income affect the amount I receive?',
        paragraphs: [
          "When self-employment is part-time, your benefit is adjusted: income from the work reduces the benefit, so you end up with more in total than benefit alone, but not benefit plus the full income. Kela and the unemployment funds publish the adjustment rules and calculators on their sites.",
          "How self-employment income is counted for adjustment differs from salaried work and depends on the payer’s rules, so ask your fund or Kela how they will treat irregular USD payouts from a foreign platform. Keep records of each payout in euros on the day it arrived.",
          "Remember that income tax is handled separately: the platform does not withhold anything, so you may need prepayment tax from Vero.fi on top of the tax already withheld from your benefit.",
        ],
      },
      {
        h2: 'Is AI training work a sensible step while job hunting?',
        paragraphs: [
          "It can be. Project work in your own field, for example legal or finance evaluation, keeps your skills current and gives you something concrete to discuss in interviews. Posted ranges on official listings, such as $40–70/h for Mercor’s Generalist Expert role on 2026-11-05, are not guaranteed, and project volume varies.",
          "Do not let it replace your job search obligations. Your employment plan still applies, and part-time self-employment does not usually exempt you from applying for jobs offered to you.",
          "If the work grows to the point where it feels like your main occupation, report the change again. Employment services can update their assessment, and it is better to move off benefit on your own terms than to be asked to repay it later.",
        ],
      },
    ],
    sources: [
      { label: 'Työmarkkinatori – employment services', url: 'https://tyomarkkinatori.fi/' },
      { label: 'Kela – unemployment benefits', url: 'https://www.kela.fi/' },
      { label: 'TYJ – Federation of Unemployment Funds in Finland', url: 'https://www.tyj.fi/' },
    ],
    faqs: [
      {
        question: 'Do I have to report a few hours of AI training work per week?',
        answer:
          'Yes. Any self-employment should be reported to employment services and your benefit payer before you start, regardless of how small it is.',
      },
      {
        question: 'Who decides whether my self-employment is full-time?',
        answer:
          'Employment services make the assessment and issue a statement that binds Kela and the unemployment funds.',
      },
      {
        question: 'Will I lose my whole benefit if I earn something?',
        answer:
          'Not if the self-employment is judged part-time. The benefit is then usually paid as adjusted benefit, reduced according to your income.',
      },
      {
        question: 'Do I pay tax on platform income separately?',
        answer:
          'Yes. Foreign platforms do not withhold Finnish tax, so report the income to Vero.fi and consider applying for prepayment tax.',
      },
    ],
  },

  'ai-interview-preparation': {
    slug: 'ai-interview-preparation',
    lang: 'en',
    reviewStatus: 'APPROVED',
    title: 'AI Interview Preparation for Mercor, micro1 and Others',
    metaDescription:
      'How to prepare for AI video interviews on Mercor and micro1 and skill assessments on Outlier, Mindrift and Alignerr, honestly and without leaked questions.',
    h1: 'How should I prepare for the AI interview on Mercor or micro1?',
    directAnswer:
      'As of 2026-11-05, Mercor uses an automated AI video interview of about 20 minutes and micro1 uses an automated AI interview with an official prep page, while Outlier, Mindrift and Alignerr rely mainly on skill screenings and assessments. The best preparation is to rehearse concise answers about your real expertise, test your camera, microphone and connection, and practise explaining your reasoning out loud; leaked question lists are unreliable and risk disqualification.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/software/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-training-for-phds-and-students', 'avoid-ai-job-scams'],
    table: {
      caption: 'Screening formats on major AI training platforms (official descriptions, 2026-11-05)',
      headers: ['Platform', 'Screening format', 'What it tests'],
      rows: [
        ['Mercor', 'Automated AI video interview (~20 min) plus role-specific assessment', 'Depth of domain expertise and communication'],
        ['micro1', 'Automated AI interview (prep at micro1.ai/interview-prep)', 'Domain knowledge for the specific opportunity'],
        ['Outlier', 'General skill screenings (30–90 min) plus project qualifications', 'Reasoning, writing and guideline adherence'],
        ['Mindrift', 'Domain or technical assessment', 'Subject-matter skills'],
        ['Alignerr', 'Zara™ interview or skills assessments', 'Role-specific skills'],
      ],
    },
    sections: [
      {
        h2: 'What happens in an AI video interview?',
        paragraphs: [
          "On Mercor, the official application steps describe uploading your CV and then completing an automated AI video interview of roughly 20 minutes, sometimes followed by a role-specific assessment. The interviewer asks follow-up questions based on your CV and your previous answers, so the conversation goes deeper into whatever you claim as expertise.",
          "micro1 also uses an automated AI interview for its expert opportunities and publishes an official interview prep page at micro1.ai/interview-prep. Reading that page before you start is the single most useful step, because it comes from the platform itself.",
          "For software roles, expect to explain how you would approach a problem, trade-offs between solutions and how you debug or review code. The interviewer is looking for clear reasoning more than memorised definitions.",
        ],
      },
      {
        h2: 'How do I prepare my answers without sounding scripted?',
        paragraphs: [
          "Pick three or four real projects or cases from your work or studies and practise describing each in about a minute: the problem, what you did, and what you would do differently. These stories cover most follow-up questions naturally.",
          "Answer in the language of the listing, which is usually English. If English is your second language, as it is for many Finnish applicants, speak a little slower and use short sentences; clarity matters more than accent.",
          "Do not read from notes on screen. Platforms may treat it as a sign of outside help, and an AI interviewer’s follow-up questions quickly expose rehearsed text that does not match your actual experience.",
        ],
      },
      {
        h2: 'Why should I avoid leaked interview questions?',
        paragraphs: [
          "Lists of ‘real Mercor questions’ circulate in forums and on Telegram, but the questions are generated dynamically from your CV and answers, so a leaked list rarely matches what you get. Some of these lists are bait for paid ‘coaching’ or outright scams.",
          "Using unauthorised material or AI tools to answer during the interview can breach platform terms and lead to removal from the talent pool. Getting in honestly is also the only way to cope with the actual work, which is checked for quality.",
          "Legitimate preparation material comes from the platforms themselves: official job listings, FAQ pages and prep pages such as micro1’s.",
        ],
      },
      {
        h2: 'How do I set up my space and equipment?',
        paragraphs: [
          "Use a quiet room, a stable internet connection, a working webcam and a headset or decent microphone. Test them in the browser before you start; a dropped connection mid-interview is one of the most avoidable reasons for a poor result.",
          "Have your CV open in your own mind, not on screen, and make sure the experience you describe matches what you uploaded. Inconsistencies between the CV and the interview are easy for any reviewer to spot.",
          "If you are not accepted, check whether the platform allows a retake and when. Meanwhile, improving your CV’s concrete details (technologies, degree subject, years of practice) is usually more effective than re-practising generic answers.",
        ],
      },
    ],
    sources: [
      { label: 'Mercor – official job listings', url: 'https://work.mercor.com' },
      { label: 'micro1 – experts', url: 'https://www.micro1.ai/experts' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
    ],
    faqs: [
      {
        question: 'How long is the Mercor AI interview?',
        answer:
          'Mercor’s official application steps describe an automated AI video interview of about 20 minutes, plus any role-specific assessment.',
      },
      {
        question: 'Does micro1 offer official interview preparation?',
        answer:
          'Yes. micro1 links to an interview prep page at micro1.ai/interview-prep from its expert application steps.',
      },
      {
        question: 'Can I use ChatGPT during the interview?',
        answer:
          'You should not. Using outside tools or notes during screening can breach platform terms and lead to rejection or removal.',
      },
      {
        question: 'Does Outlier have a video interview?',
        answer:
          'Outlier’s official steps describe general skill screenings of 30–90 minutes and project-specific qualification assessments rather than a video interview.',
      },
    ],
  },

  'avoid-ai-job-scams': {
    slug: 'avoid-ai-job-scams',
    lang: 'en',
    reviewStatus: 'APPROVED',
    title: 'Avoid AI Job Scams: How to Spot Fake AI Training Offers',
    metaDescription:
      'How to avoid AI job scams in 2026: applying is free, never pay to work, verify official domains, and spot Telegram and WhatsApp task scams. Report in Finland.',
    h1: 'How can I tell a real AI training job from a scam?',
    directAnswer:
      'As of 2026-11-05, legitimate AI training platforms such as Mercor, Mindrift, Outlier and micro1 never charge you to apply or to unlock tasks, and they recruit through their own official domains. If someone contacts you on Telegram or WhatsApp offering paid ‘tasks’, asks for a deposit or crypto, or uses a lookalike domain, treat it as a scam and report it to Finland’s National Cyber Security Centre (Kyberturvallisuuskeskus) and the police.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/legal/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-interview-preparation', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Official application domains vs. common scam signals (checked 2026-11-05)',
      headers: ['Platform', 'Official domain to apply on', 'Scam signal to watch for'],
      rows: [
        ['Mercor', 'work.mercor.com', 'Recruiter asks you to continue on Telegram or WhatsApp'],
        ['Mindrift', 'mindrift.ai', 'Request for a training fee or deposit before tasks'],
        ['Outlier', 'outlier.ai', 'Pay promised in crypto or via ‘top-up’ of your account'],
        ['micro1', 'micro1.ai', 'Lookalike domain with extra words or odd extensions'],
        ['Alignerr', 'alignerr.com', 'Unsolicited job offer without any assessment'],
      ],
    },
    sections: [
      {
        h2: 'What are the clearest signs of an AI job scam?',
        paragraphs: [
          "The strongest single signal is money flowing the wrong way. Every platform described on this site lets you apply for free and pays you as a contractor; none of them asks you to buy a starter kit, pay a ‘verification fee’ or deposit funds to unlock better-paid tasks.",
          "Other warning signs include unsolicited messages offering a job you never applied for, promises of very high pay for simple ‘liking’ or ‘rating’ tasks, pressure to act quickly, and communication that moves to Telegram, WhatsApp or private email instead of the platform’s own portal.",
          "Scammers increasingly borrow the names of real companies, so a familiar brand name in the message is not proof of anything. What matters is where you apply and who you pay.",
        ],
      },
      {
        h2: 'How do Telegram and WhatsApp task scams work?',
        paragraphs: [
          "The typical pattern starts with a friendly message about remote work, followed by a few small ‘tasks’ such as rating products or apps. You are paid a small amount at first to build trust.",
          "Then the tasks require you to ‘top up’ your account or pay to unlock a combined task, with the promise that you will get everything back with commission. The balance shown on a fake dashboard keeps growing, but withdrawals are always blocked until you pay one more time.",
          "Kyberturvallisuuskeskus, Finland’s National Cyber Security Centre, regularly warns about this kind of fraud. Once you have sent money, it is rarely recovered, so stopping at the first payment request is the only reliable protection.",
        ],
      },
      {
        h2: 'How do I verify that a platform or recruiter is genuine?',
        paragraphs: [
          "Type the official address yourself rather than clicking a link: work.mercor.com, mindrift.ai, outlier.ai, micro1.ai, alignerr.com. Then find the role on that site and apply there. If the role does not exist on the official site, the offer is not real.",
          "Be careful with lookalike domains that add words like ‘jobs’, ‘careers’ or ‘pay’ to a brand name, or use unusual country extensions. Check the spelling letter by letter.",
          "Legitimate identity verification happens inside the official platform, usually through a known verification provider. Never send copies of your passport or bank credentials to a private chat account.",
        ],
      },
      {
        h2: 'What should I do if I have been targeted or scammed in Finland?',
        paragraphs: [
          "Stop all contact and do not send more money, even if you are promised a refund. Contact your bank immediately if you shared card or banking details; banks can sometimes stop or reverse payments if they act quickly.",
          "Report the crime to the police with a rikosilmoitus at poliisi.fi, and report the scam to Kyberturvallisuuskeskus so that its warnings reach other people. Save screenshots, usernames, phone numbers and transaction details as evidence.",
          "Be wary of ‘recovery services’ that contact you after a scam and promise to get your money back for a fee. They are frequently a second scam aimed at the same victims.",
        ],
      },
    ],
    sources: [
      { label: 'Kyberturvallisuuskeskus – National Cyber Security Centre Finland', url: 'https://www.kyberturvallisuuskeskus.fi/' },
      { label: 'Mercor – official job listings', url: 'https://work.mercor.com' },
      { label: 'Outlier – FAQ', url: 'https://outlier.ai/faq' },
    ],
    faqs: [
      {
        question: 'Do real AI training platforms charge application fees?',
        answer:
          'No. Applying to Mercor, Mindrift, Outlier, micro1 and Alignerr is free. A fee or deposit request is a strong scam signal.',
      },
      {
        question: 'Would Mercor contact me on WhatsApp or Telegram?',
        answer:
          'Apply and communicate through the official work.mercor.com portal. Treat job offers that push you into a private messaging app with great suspicion.',
      },
      {
        question: 'Where do I report an AI job scam in Finland?',
        answer:
          'File a crime report with the police at poliisi.fi and report the scam to Kyberturvallisuuskeskus. Contact your bank at once if you shared payment details.',
      },
      {
        question: 'Can I get my money back from a task scam?',
        answer:
          'Sometimes, if your bank acts quickly, but often not. Avoid paid ‘recovery services’, which are frequently scams themselves.',
      },
    ],
  },

  'ai-training-for-phds-and-students': {
    slug: 'ai-training-for-phds-and-students',
    lang: 'en',
    reviewStatus: 'APPROVED',
    title: 'AI Training Work for PhDs and Students: Which Platforms?',
    metaDescription:
      'Which AI training platforms suit PhDs, researchers and students in 2026? Posted ranges, degree requirements, eligibility in Finland and Kela study grant notes.',
    h1: 'Which AI training platforms are a good fit for PhDs and students?',
    directAnswer:
      'As of 2026-11-05, PhDs and researchers in Finland fit best on expert tracks such as Mindrift’s STEM AI Trainer (posted at $60–100+/h benchmark), Alignerr’s STEM and research roles, Outlier’s STEM projects and micro1’s academic research opportunities, while students usually start in generalist or language tracks. Handshake AI’s fellowship, which lists up to $120/h for PhD philosophy experts, is open only to people based in the US with valid work authorization; all figures are posted ranges, not guaranteed.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/general/',
    relatedGuides: ['ai-interview-preparation', 'unemployment-benefits-ai-work', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Tracks relevant to PhDs, researchers and students (posted ranges 2026-11-05, not guaranteed)',
      headers: ['Platform', 'Relevant track', 'Posted range', 'Eligibility note'],
      rows: [
        ['Mindrift', 'STEM AI Trainer (research-level tasks)', 'Up to $6,400/month ($60–100+/h benchmark)', 'Global, incl. Finland (Toloka eligibility rules)'],
        ['Alignerr', 'STEM & Research (PhDs, researchers)', 'TBD per project', 'Check ID verification: US documents listed'],
        ['Outlier', 'STEM (math, physics, chemistry, biology)', 'TBD, shown per project', '50+ countries; Associate’s degree minimum'],
        ['micro1', 'Academic Research & Robotics', 'TBD per role listing', 'Global expert community'],
        ['Mercor', 'Generalist Expert', '$40–70/h', 'Global remote'],
        ['Handshake AI', 'Philosophy Expert (PhDs & Postdocs)', 'Up to $120/h', 'US-based work authorization only'],
      ],
    },
    sections: [
      {
        h2: 'Why are PhDs in demand for AI training?',
        paragraphs: [
          "Frontier AI models increasingly need feedback on problems that only specialists can judge: research-level mathematics, experimental design, proofs, specialised literature. Mindrift describes its STEM track as research-level AI tasks, and Alignerr explicitly lists PhDs, researchers and subject-matter experts in its STEM and research category.",
          "The work typically means writing hard problems with verified solutions, catching subtle errors in model reasoning, and building grading rubrics. A doctoral background helps less because of the title and more because you know where models tend to be confidently wrong in your field.",
          "Posted ranges reflect this: Mindrift lists a $60–100+/h benchmark for domain experts. Those are gross, not guaranteed, and depend on project availability.",
        ],
      },
      {
        h2: 'What options do students have?',
        paragraphs: [
          "Students without a completed degree usually start in generalist, writing or language tracks. Mindrift’s entry-level track lists $15–30/h, and native-level Finnish speakers can look at language and audio roles, such as Mercor’s Language & Audio Expert pool at $35–50/h (posted ranges).",
          "Outlier’s generalist track states a minimum Associate’s degree, with Bachelor’s, Master’s or PhD preferred, so first-year students may not yet qualify there. Check each listing’s requirements before applying.",
          "Handshake AI is often mentioned in student communities, but its fellowship requires being based in the US with work authorization that Handshake can support, so it is not an option for students living in Finland.",
        ],
      },
      {
        h2: 'How does AI training income affect my Kela study grant?',
        paragraphs: [
          "Kela’s student financial aid has annual income limits, and income from self-employment counts towards them. If your total income exceeds the limit for the months you receive aid, Kela can reclaim part of the aid afterwards.",
          "Kela.fi explains the limits and lets you cancel or return aid for some months if you expect to earn more. I recommend checking this before you take on a large project, because irregular platform payouts can add up faster than you expect.",
          "Tax works the same way as for anyone else: the platform pays gross, so report the income to Vero.fi and consider prepayment tax.",
        ],
      },
      {
        h2: 'How can doctoral researchers combine this with their university work?',
        paragraphs: [
          "If you are employed by a Finnish university as a doctoral researcher, check your employment contract and university rules on secondary occupations. Many employers expect you to report side work, especially if it relates to your research field.",
          "Be careful about confidentiality in both directions: do not put unpublished research data into AI tasks, and respect the platform’s confidentiality terms about project content.",
          "Applying is free and flexible hours suit academic schedules, but treat AI training as supplementary income rather than a substitute for funding, since project volume is not guaranteed.",
        ],
      },
    ],
    sources: [
      { label: 'Mindrift – official site', url: 'https://mindrift.ai/' },
      { label: 'Handshake AI – MOVE Program', url: 'https://joinhandshake.com/move-program/' },
      { label: 'Kela – student financial aid', url: 'https://www.kela.fi/' },
      { label: 'Alignerr – official site', url: 'https://www.alignerr.com/' },
    ],
    faqs: [
      {
        question: 'Can I join Handshake AI from Finland?',
        answer:
          'No. Handshake states that fellows must be based in the US with valid work authorization that Handshake can support.',
      },
      {
        question: 'Which platform is best for a STEM PhD in Finland?',
        answer:
          'Mindrift’s STEM track, Outlier’s STEM projects, micro1’s academic research opportunities and Alignerr’s STEM roles are the main options; check Alignerr’s ID requirements first.',
      },
      {
        question: 'Does AI training income count towards Kela’s study grant limits?',
        answer:
          'Yes. Self-employment income counts towards the annual income limits for student financial aid. Check the current limits on kela.fi.',
      },
      {
        question: 'Can undergraduate students do AI training work?',
        answer:
          'Often yes, through generalist, writing or language tracks, although some platforms such as Outlier list a minimum degree requirement.',
      },
    ],
  },
};

const FI_A = {
  'remote-side-jobs-from-home': {
    slug: 'remote-side-jobs-from-home',
    lang: 'fi',
    reviewStatus: 'APPROVED',
    title: 'Etätyö sivutyönä kotoa: rehellinen opas 2026',
    metaDescription:
      'Etäsivutyöt kotoa vuonna 2026: mitä tekoälyn koulutustyö oikeasti on, ilmoitetut palkkahaarukat, kuka pääsee mukaan sekä verot ja etuudet Suomessa.',
    h1: 'Mitkä kotoa tehtävät etäsivutyöt ovat oikeasti hakemisen arvoisia?',
    directAnswer:
      'Tilanteessa 5.11.2026 yksi helpoimmin saavutettavista luotettavista etäsivutöistä on tekoälyn koulutus- ja arviointityö esimerkiksi Mercorissa, Mindriftissä, Outlierissa ja micro1:ssä, joissa ilmoitetut haarukat vaihtelevat noin 15 $/h aloitustason tehtävistä Mercorin asiantuntijapoolien 35–180 $/h:iin (ilmoitettuja haarukoita, ei taattuja ansioita). Hakeminen on maksutonta kaikille, jotka lukevat ja kirjoittavat hyvin, mutta työ on projektiluonteista, valinta on tiukka ja Suomessa hoidat verosi itse itsenäisenä toimeksiantajana.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/general/',
    relatedGuides: ['avoid-ai-job-scams', 'taxes-toiminimi-yel-finland', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Yleisosaajille sopivat tekoälyn koulutusalustat (ilmoitetut haarukat tarkistettu 5.11.2026, ei taattuja)',
      headers: ['Alusta', 'Yleisosaajan rooli tai aloituspolku', 'Ilmoitettu haarukka', 'Avoin Suomesta?'],
      rows: [
        ['Mercor', 'Generalist Expert', '40–70 $/h', 'Kyllä (globaali etätyö; projektikohtainen kelpoisuus vaihtelee)'],
        ['Mindrift', 'Entry-Level AI Trainer', '15–30 $/h (maksu tehtäväkohtaisesti)', 'Kyllä (Tolokan kelpoisuussääntöjen mukaan)'],
        ['Outlier', 'Yleinen kirjoittaminen ja päättely', 'Avoin, näkyy projektikohtaisesti', 'Kyllä (yli 50 maata; paikallinen henkilöllisyystodistus ja puhelin)'],
        ['Alignerr', 'Data Labeling Specialist', '40–120 $/h', 'Tarkista ensin: tunnistautuminen listaa yhdysvaltalaisia asiakirjoja'],
        ['Handshake AI', 'AI Evaluation Specialist', 'Enintään 17 $/h', 'Ei (vaatii työluvan Yhdysvalloissa)'],
      ],
    },
    sections: [
      {
        h2: 'Mitä tekoälyn koulutustyö sivutyönä käytännössä on?',
        paragraphs: [
          'Suurin osa ”kotoa tehtävien etätöiden” takana olevasta asiallisesta työstä on nykyään tekoälyn koulutusta: kirjoitat realistisia kehotteita, vertailet ja pisteytät mallin vastauksia arviointikriteeristön mukaan, perustelet miksi vastaus on väärä tai kirjoitat paremman. Mercor kuvaa työtään alakohtaiseksi mallien arvioinniksi ja rubriikkipisteytykseksi, Outlier ongelma–vastaus-parien kirjoittamiseksi ja kielimallien vastausten arvioinniksi ja Mindrift alakohtaisten kehotteiden laatimiseksi ja tekoälyn tuotosten editoinniksi.',
          'Kyse ei ole tiedon syöttämisestä eikä passiivisesta tulosta. Tehtävät vaativat huolellista lukemista, johdonmukaista harkintaa ja selkeää kirjallista englantia, ja useimmat alustat tekevät laaduntarkastuksia, joiden perusteella sinut voidaan poistaa projektista, jos arviosi poikkeavat tarkastajien linjasta. Itse ajattelen sitä freelance-editointina, jossa ohjeet ovat poikkeuksellisen tarkat.',
          'Työmäärä myös vaihtelee. Esimerkiksi Mercor sanoo suoraan, että talenttipooliin pääsy ei takaa projektia, joten hyväksyntä kannattaa nähdä prosessin alkuna eikä kiinteänä viikkotuntimääränä.',
        ],
      },
      {
        h2: 'Paljonko yleisosaaja voi realistisesti odottaa saavansa?',
        paragraphs: [
          'Ainoat rehelliset luvut, jotka voin antaa, ovat virallisten ilmoitusten haarukat 5.11.2026: Mercorin Generalist Expert -rooli ilmoittaa 40–70 $/h, Mindriftin aloitustason polku 15–30 $/h tehtäväkohtaisesti maksettuna ja Handshake AI:n yleisarviointipolku enintään 17 $/h, mutta se on vain Yhdysvalloissa asuville. Outlier ja micro1 näyttävät palkkiot projektikohtaisesti eivätkä julkisella sivulla.',
          'Luvut ovat bruttopalkkioita Yhdysvaltain dollareina. Suomessa niistä menee vielä tulovero, mahdollisesti YEL-maksut, jos yritystulosi on riittävän suuri, sekä valuutanvaihtokulut, joten käteen jäävä summa on selvästi otsikkolukua pienempi.',
          'Asiantuntijoilla ilmoitetut haarukat ovat korkeampia: Mercorissa esimerkiksi Software Engineering ilmoittaa 70–150 $/h ja lisensoidut juristit 100–150 $/h. Jos sinulla on ammatillinen tausta, sen kautta hakeminen on yleensä parempi ajankäyttö kuin yleisosaajien pooli.',
        ],
      },
      {
        h2: 'Kuka pääsee mukaan ja miten haen tuhlaamatta aikaa?',
        paragraphs: [
          'Hakeminen on maksutonta kaikilla tässä mainituilla alustoilla. Tyypilliset vaiheet ovat CV:n lataaminen, testi tai automaattinen tekoälyhaastattelu, henkilöllisyyden varmentaminen ja maksutietojen asettaminen. Mercor käyttää noin 20 minuutin tekoälyvideohaastattelua, Outlier 30–90 minuutin taitotestejä ja Mindrift alakohtaista arviointia.',
          'Tarkista kelpoisuus ennen kuin käytät tunteja. Handshake AI edellyttää, että osallistujat asuvat Yhdysvalloissa, ja Alignerrin viisumi-UKK listaa tunnistautumiseen vain yhdysvaltalaisia asiakirjoja, mikä voi estää hakijat Suomesta. Mercor, Mindrift, Outlier ja micro1 kertovat olevansa avoimia globaaleille tai useiden maiden hakijoille.',
          'Suosittelen hakemaan kahdelle tai kolmelle alustalle, jotka sopivat vahvimpaan osaamiseesi, eikä kymmenelle kerralla. Kohdennettu CV, jossa mainitaan konkreettinen osaaminen (tutkinnon ala, ammatti, äidinkielenä kirjoittamasi kieli), painaa yleensä enemmän kuin yleinen ”huolellinen ja tarkka” -tyyppinen kuvaus.',
        ],
      },
      {
        h2: 'Mitä minun pitää hoitaa Suomessa ennen aloittamista?',
        paragraphs: [
          'Nämä alustat maksavat sinulle itsenäisenä toimeksiantajana, joten kukaan työnantaja ei pidätä veroa puolestasi. Vero.fi neuvoo, miten yritystoiminnan tulot ilmoitetaan ja miten haet ennakkoveroa, jotta et saa isoa jäännösverolaskua; moni myös perustaa toiminimen YTJ:n kautta.',
          'Jos saat työttömyysetuutta, ilmoita yritystoiminnasta TE-palveluille ja etuuden maksajalle ennen ensimmäistä tehtävää, kuten Työmarkkinatori, Kela ja työttömyyskassat ohjeistavat. Ensin aloittaminen ja vasta myöhemmin ilmoittaminen on yleisin syy siihen, että etuuksia joudutaan maksamaan takaisin.',
          'Lopuksi: pidä jokaista pyytämättä tullutta ”etätyö”-viestiä Telegramissa tai WhatsAppissa huijauksena, kunnes toisin todistetaan. Oikeat tekoälyn koulutusalustat eivät koskaan pyydä maksua, talletusta tai laitehankintaa töiden avaamiseksi.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – viralliset työpaikkailmoitukset', url: 'https://work.mercor.com' },
      { label: 'Mindrift – virallinen sivusto', url: 'https://mindrift.ai/' },
      { label: 'Outlier – UKK', url: 'https://outlier.ai/faq' },
      { label: 'Vero.fi – Verohallinto', url: 'https://www.vero.fi/' },
    ],
    faqs: [
      {
        question: 'Voinko tehdä tekoälyn koulutustöitä Suomesta käsin?',
        answer:
          'Kyllä. Mercor, Mindrift, Outlier ja micro1 kertovat kelpoisuuden olevan globaali tai monimaainen ja kattavan Suomen, kun taas Handshake AI on vain Yhdysvalloissa asuville ja Alignerrin tunnistautuminen listaa tällä hetkellä yhdysvaltalaisia asiakirjoja.',
      },
      {
        question: 'Tarvitsenko tutkinnon yleisosaajan tekoälytöihin?',
        answer:
          'En aina. Outlierin yleisosaajapolku edellyttää vähintään Associate’s degree -tasoista tutkintoa ja suosii korkeampia, kun taas muut yleisosaajapoolit painottavat testattua luku-, päättely- ja kirjoitustaitoa.',
      },
      {
        question: 'Onko ilmoitettu tuntipalkkio sama kuin ansioni?',
        answer:
          'Ei. Ilmoitetut haarukat ovat bruttoa eivätkä taattuja, tunnit riippuvat projektien saatavuudesta, ja Suomessa maksat summasta itse verot ja mahdollisesti YEL-maksut.',
      },
      {
        question: 'Pitääkö minun maksaa jotain aloittaakseni?',
        answer:
          'Ei. Luotettaville tekoälyn koulutusalustoille hakeminen on maksutonta. Jos sinulta pyydetään maksua, talletusta tai kryptomaksua tehtävien avaamiseksi, kyse on huijauksesta.',
      },
    ],
  },

  'taxes-toiminimi-yel-finland': {
    slug: 'taxes-toiminimi-yel-finland',
    lang: 'fi',
    reviewStatus: 'APPROVED',
    title: 'Verot, toiminimi ja YEL tekoälytyössä Suomessa (2026)',
    metaDescription:
      'Tekoälyn koulutustyön verotus Suomessa: ennakkovero, toiminimi, ALV-raja ja YEL:n alaraja 9 423 €/v vuonna 2026 selitettynä. Ei veroneuvontaa.',
    h1: 'Miten verot, toiminimi ja YEL hoidetaan tekoälyn koulutustyössä Suomessa?',
    directAnswer:
      'Tilanteessa 5.11.2026 Suomessa asuva, jolle Mercor, Mindrift, Outlier tai vastaava alusta maksaa, on itsenäinen toimeksiantaja: hänen on ilmoitettava tulot Verohallinnolle, yleensä maksettava ennakkoveroa ja otettava YEL-vakuutus, jos vuotuinen työtulo on vähintään 9 423 euroa (vuoden 2026 alaraja ETK.fi:n mukaan) ja toiminta kestää vähintään neljä kuukautta. Moni rekisteröi toiminimen YTJ:ssä, ja arvonlisäverovelvolliseksi on yleensä rekisteröidyttävä vasta, kun liikevaihto ylittää 20 000 euroa kalenterivuodessa; tämä on yleistä tietoa, ei veroneuvontaa.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/finance/',
    relatedGuides: ['unemployment-benefits-ai-work', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Keskeiset velvoitteet itsenäisille tekoälyn kouluttajille Suomessa (2026, tarkista viralliset lähteet)',
      headers: ['Aihe', 'Mitä koskee', 'Virallinen lähde'],
      rows: [
        ['Tulovero', 'Ilmoitat tulot itse; ulkomaiset alustat eivät pidätä veroa', 'vero.fi'],
        ['Ennakkovero', 'Haetaan OmaVerossa, jotta vero jakautuu tasaisesti vuodelle', 'vero.fi'],
        ['Toiminimi', 'Vapaaehtoinen mutta yleinen; rekisteröidään YTJ:ssä (kaupparekisteri / Verohallinto)', 'ytj.fi'],
        ['Arvonlisävero (ALV)', 'Rekisteröityminen yleensä pakollista, kun liikevaihto ylittää 20 000 € kalenterivuodessa', 'vero.fi'],
        ['YEL-vakuutus', 'Pakollinen, jos työtulo ≥ 9 423 €/v (2026) ja toiminta kestää ≥ 4 kk', 'etk.fi'],
      ],
    },
    sections: [
      {
        h2: 'Olenko työntekijä vai yrittäjä, kun alusta maksaa minulle?',
        paragraphs: [
          'Jokainen tämän oppaan alusta kuvaa tekijänsä itsenäisiksi toimeksiantajiksi: Mercor maksaa viikoittain dollareina Stripen kautta, Outlier viikoittain PayPalin, AirTM:n tai ACH:n kautta ja Mindrift kahden viikon välein tehdyistä tehtävistä. Mikään niistä ei pidätä Suomen veroa, joten ilmoittaminen ja maksaminen on kokonaan sinun vastuullasi.',
          'Suomen termein kyse on yritystoiminnasta tai pienimuotoisessa satunnaisessa työssä muusta ansiotulosta. Vero.fi:ssä on ohjeet kummallekin tilanteelle; kumpi sopii, riippuu siitä, kuinka säännöllistä ja liiketoimintamaista toimintasi on, joten suosittelen lukemaan Vero.fi:n ohjeet tai kysymään kirjanpitäjältä ennen ensimmäistä maksua eikä vasta vuoden lopussa.',
          'Pidä alusta asti yksinkertaista kirjanpitoa: päivämäärä, alusta, bruttosumma dollareina, tilille tullut summa euroina ja mahdolliset kulut. Juuri tätä tarvitset veroilmoitukseen ja jokaiselle etuuden maksajalle, joka kysyy tuloistasi.',
        ],
      },
      {
        h2: 'Tarvitsenko toiminimen ja ennakkoveron?',
        paragraphs: [
          'Toiminimi ei ole ehdottoman välttämätön toimeksiantotulojen saamiseksi, mutta sen rekisteröinti YTJ:ssä selkeyttää kokonaisuutta: saat Y-tunnuksen, voit päästä ennakkoperintärekisteriin, ja yrityksen kulut, kuten osuus tietokone- tai nettikuluista, käsitellään jäsennellysti.',
          'Koska alustojen maksuista ei pidätetä veroa, Vero.fi suosittelee hakemaan ennakkoveroa OmaVerossa arvioidun tuloksen perusteella. Jos jätät tämän tekemättä ja ansaitset merkittävän summan, voit joutua maksamaan jäännösveroa korkoineen, kun verotus valmistuu.',
          'Ennakkoveroa voi muuttaa kesken vuoden, jos tulot osoittautuvat suunniteltua suuremmiksi tai pienemmiksi. Koska tekoälyn koulutustyö on usein epäsäännöllistä, minusta arvio kannattaa tarkistaa muutaman kuukauden välein.',
        ],
      },
      {
        h2: 'Milloin arvonlisävero (ALV) koskee tekoälyn koulutustuloja?',
        paragraphs: [
          'Vero.fi:n mukaan yrityksen on yleensä rekisteröidyttävä arvonlisäverovelvolliseksi, kun liikevaihto ylittää 20 000 euroa kalenterivuodessa; sen alle rekisteröityminen on vapaaehtoista. Moni osa-aikainen tekoälyn kouluttaja jää selvästi tämän rajan alle.',
          'Ulkomaiselle yritysasiakkaalle myytyihin palveluihin sovelletaan yleensä myyntimaasääntöjä, mikä tarkoittaa usein, ettei laskuun lisätä Suomen arvonlisäveroa, vaikka olisit rekisteröitynyt. Yksityiskohdat, myös se mitä pitää ilmoittaa, riippuvat siitä, onko asiakas EU:ssa vai sen ulkopuolella, joten tarkista oma tilanteesi Vero.fi:n rajat ylittäviä palveluja koskevista ohjeista.',
          'Jos olet epävarma, kysy suoraan Verohallinnosta tai kirjanpitäjältä; tämä opas on yleistä tietoa eikä veroneuvontaa.',
        ],
      },
      {
        h2: 'Milloin YEL-vakuutus on pakollinen?',
        paragraphs: [
          'Eläketurvakeskuksen (ETK.fi) mukaan yrittäjän on otettava YEL-vakuutus, kun vahvistettu työtulo on vuonna 2026 vähintään 9 423 euroa vuodessa, toiminta on kestänyt vähintään neljä kuukautta ja hän on lain määrittämässä ikähaarukassa. Alarajan alittuessa YEL on vapaaehtoinen.',
          'YEL-työtulo ei ole sama asia kuin tuloksesi: se on arvio siitä, paljonko maksaisi palkata joku tekemään työsi, ja se määrää sekä eläkkeen karttumisen että monet sosiaaliturvaetuudet, kuten sairauspäivärahan. Hyvin matala työtulo säästää rahaa nyt mutta heikentää tätä turvaa.',
          'Jos tekoälyn koulutus on sivutoimi palkkatyön ohessa, sivuyritys voi silti täyttää YEL-ehdot. ETK.fi:ssä ja eläkevakuutusyhtiöillä on laskureita ja ohjeita, joiden avulla voit arvioida, koskeeko velvollisuus sinua.',
        ],
      },
    ],
    sources: [
      { label: 'Vero.fi – Verohallinto', url: 'https://www.vero.fi/' },
      { label: 'ETK.fi – Eläketurvakeskus (YEL)', url: 'https://www.etk.fi/' },
      { label: 'YTJ – yritys- ja yhteisötietojärjestelmä', url: 'https://www.ytj.fi/' },
    ],
    faqs: [
      {
        question: 'Mikä on YEL:n alaraja vuonna 2026?',
        answer:
          'ETK.fi:n mukaan 9 423 euroa vahvistettua työtuloa vuodessa. Sen alle jäävä YEL-vakuutus on vapaaehtoinen.',
      },
      {
        question: 'Pitääkö minun periä arvonlisäveroa Mercor- tai Outlier-tuloista?',
        answer:
          'Rekisteröityminen on yleensä pakollista vasta yli 20 000 euron vuotuisella liikevaihdolla, ja ulkomaisille yritysasiakkaille myytyihin palveluihin sovelletaan usein myyntimaasääntöjä. Tarkista oma tilanteesi Vero.fi:stä.',
      },
      {
        question: 'Voinko tehdä töitä ilman toiminimeä?',
        answer:
          'Voit, mutta tulot on silti ilmoitettava ja niistä maksettava vero. Toiminimi antaa Y-tunnuksen ja selkeämmät puitteet ennakkoverolle ja kuluille.',
      },
      {
        question: 'Onko tämä veroneuvontaa?',
        answer:
          'Ei. Tämä on yleistä tietoa Vero.fi:n ja ETK.fi:n tietojen pohjalta tilanteessa 5.11.2026. Omaa tilannettasi koskevissa päätöksissä ota yhteyttä Verohallintoon tai pätevään kirjanpitäjään.',
      },
    ],
  },
};
const FI_B: Partial<Record<GuideSlug, GuidePageContent>> = {
  'unemployment-benefits-ai-work': {
    slug: 'unemployment-benefits-ai-work',
    lang: 'fi',
    reviewStatus: 'APPROVED',
    title: 'Tekoälytyö ja työttömyysturva Suomessa (2026)',
    metaDescription:
      'Miten itsenäisenä toimeksiantajana tehtävä tekoälytyö vaikuttaa työttömyysetuuksiin Suomessa? Ilmoitusvelvollisuus ennen aloitusta, soviteltu päiväraha ja Kela.',
    h1: 'Miten tekoälyn koulutustyö vaikuttaa työttömyysturvaan Suomessa?',
    directAnswer:
      'Tilanteessa 5.11.2026 työttömänä voi usein tehdä tekoälyn koulutustyötä (kuten Mercorissa tai Mindriftissä), mutta yritystoiminnan tai oman työn aloittamisesta on aina ilmoitettava etukäteen työvoimaviranomaiselle Työmarkkinatorissa sekä etuuden maksajalle (Kela tai oma työttömyyskassa). Työvoimaviranomainen arvioi toiminnan pää- tai sivutoimisuuden, ja sivutoimisesta työstä maksetaan yleensä soviteltua työttömyysetuutta tulojen mukaan.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/general/',
    relatedGuides: ['taxes-toiminimi-yel-finland', 'remote-side-jobs-from-home', 'ai-training-for-phds-and-students'],
    table: {
      caption: 'Toimijat ja vastuut, kun työtön tekee tekoälytöitä Suomessa',
      headers: ['Toimija', 'Tehtävä ja rooli', 'Verkko-osoite'],
      rows: [
        ['Työvoimaviranomainen (työllisyysalueet)', 'Arvioi yritystoiminnan pää- tai sivutoimisuuden; antaa työvoimapoliittisen lausunnon', 'tyomarkkinatori.fi'],
        ['Työttömyyskassa', 'Maksaa ansiopäivärahaa jäsenille ja laskee sovitellun päivärahan', 'Oma kassa; yleistietoa tyj.fi'],
        ['Kela', 'Maksaa peruspäivärahaa ja työmarkkinatukea sekä sovittelee ne tuloihin', 'kela.fi'],
        ['Verohallinto (Vero.fi)', 'Verottaa toimeksiantotulot erikseen (ennakkovero/henkilöverotus)', 'vero.fi'],
      ],
    },
    sections: [
      {
        h2: 'Miksi toimeksiantotyöstä pitää ilmoittaa ennen aloittamista?',
        paragraphs: [
          'Suomen työttömyysturvajärjestelmä perustuu siihen, että olet työmarkkinoiden käytettävissä kokoaikatyöhön. Kaikenlainen yritystoiminta tai itsenäinen toimeksiantotyö – vaikka vain muutama tunti viikossa kielimallien arviointia – on muutos olosuhteissa, josta on Työmarkkinatorin ja Kelan ohjeiden mukaan ilmoitettava etukäteen.',
          'Ennakkoilmoitus suojaa sinua takaisinperinnöiltä. Jos aloitat työt ja ilmoitat vasta jälkikäteen, maksetut etuudet voidaan periä takaisin selvitysajalta. Ilmoituksen tekeminen verkossa vie vain hetken.',
          'Kuvaa ilmoituksessa työ selkeästi: mikä alusta, millaisia tehtäviä, arvioitu viikkotuntimäärä ja se, että työ on epäsäännöllistä projektityötä ilman kiinteitä tunteja.',
        ],
      },
      {
        h2: 'Miten työvoimaviranomainen arvioi pää- ja sivutoimisuutta?',
        paragraphs: [
          'Viranomainen arvioi toiminnan vaatimaa ajankäyttöä, ei pelkästään tienattua rahasummaa. Jos toiminta katsotaan päätoimiseksi, oikeutta työttömyysetuuteen ei yleensä ole; sivutoimisena etuutta voidaan maksaa soviteltuna.',
          'Alustatyössä olennaista on joustavuus: pystytkö ottamaan vastaan kokoaikatyötä ja osallistumaan sovittuihin työllistymispalveluihin. Koska tekoälyn arviointitehtäviä tehdään omalla aikataululla ilman läsnäolovelvoitetta, se puoltaa usein sivutoimisuutta.',
          'Työvoimapalvelut siirtyivät vuoden 2025 alussa kuntien työllisyysalueille. Tarkista aina ajantasaiset ohjeet Työmarkkinatorista ja omalta etuudenmaksajaltasi.',
        ],
      },
      {
        h2: 'Miten tekoälytyön palkkiot vaikuttavat maksettavaan etuuteen?',
        paragraphs: [
          'Sivutoimisessa yritystoiminnassa työttömyysetuus maksetaan soviteltuna: ansaitut tulot pienentävät etuutta sovittelusääntöjen mukaan, mutta kokonaistulosi (etuus + työtulo) on silti suurempi kuin pelkkä etuus.',
          'Pidä tarkkaa kirjaa kaikista ulkomaisilta alustoilta saapuneista maksuista: saapumispäivä, bruttomäärä USD ja tilille tullut euromäärä. Etuuden maksaja pyytää näitä tilitystietoja sovittelujaksoilta.',
          'Muista myös vero: alustat eivät pidätä Suomen veroa, joten hae tarvittaessa OmaVerossa ennakkoveroa, jotta vältät jäännösverot.',
        ],
      },
      {
        h2: 'Kannattaako tekoälykoulutustyötä tehdä työnhaun aikana?',
        paragraphs: [
          'Se voi olla erittäin hyödyllistä oman ammattitaidon ylläpitämiseksi. Esimerkiksi juridiikan, lääketieteen tai ohjelmoinnin arviointiprojektit tarjoavat tuoretta työkokemusta ja konkreettista kerrottavaa työhaastatteluissa.',
          'Toimeksiantotyö ei kuitenkaan korvaa työllistymissuunnitelman velvoitteita: sinun tulee edelleen hakea kokoaikaisia työpaikkoja suunnitelmasi mukaisesti.',
          'Jos toimeksiannot kasvavat niin suuriksi, että ne työllistävät sinut päätoimisesti, ilmoita siitä rohkeasti työvoimaviranomaiselle ja siirry etuuksilta kokopäiväiseksi yrittäjäksi tai asiantuntijaksi.',
        ],
      },
    ],
    sources: [
      { label: 'Työmarkkinatori – työvoimapalvelut', url: 'https://tyomarkkinatori.fi/' },
      { label: 'Kela – työttömyysetuudet', url: 'https://www.kela.fi/' },
      { label: 'TYJ – Työttömyyskassojen Yhteisjärjestö', url: 'https://www.tyj.fi/' },
    ],
    faqs: [
      {
        question: 'Pitääkö parin tunnin viikoittaisesta työstä ilmoittaa?',
        answer:
          'Kyllä. Kaikesta yritystoiminnasta ja omasta työllistymisestä on ilmoitettava etukäteen riippumatta tuntimäärästä.',
      },
      {
        question: 'Kuka päättää, onko toiminta pää- vai sivutoimista?',
        answer:
          'Työvoimaviranomainen tekee arvion ja antaa siitä sitovan työvoimapoliittisen lausunnon Kelalle tai työttömyyskassalle.',
      },
      {
        question: 'Menetänkö koko etuuden, jos tienaan tekoälyalustalta?',
        answer:
          'Et, jos toiminta arvioidaan sivutoimiseksi. Tällöin etuus maksetaan soviteltuna työtulojesi mukaan.',
      },
      {
        question: 'Miten ulkomaiset dollarimaksut ilmoitetaan kassalle?',
        answer:
          'Toimita tiliote tai maksuraportti, josta näkyy suorituksen päivämäärä, valuuttamäärä ja pankkitilille saapunut euromäärä.',
      },
    ],
  },

  'ai-interview-preparation': {
    slug: 'ai-interview-preparation',
    lang: 'fi',
    reviewStatus: 'APPROVED',
    title: 'Mercorin tekoälyhaastattelu: valmistautumisopas 2026',
    metaDescription:
      'Miten valmistaudut Mercorin ja micro1:n automaattiseen tekoälyvideohaastatteluun? Tekniikan testaus, alakohtaiset kysymykset ja rehelliset neuvot.',
    h1: 'Miten valmistaudut tekoälyn tekemään työhaastatteluun?',
    directAnswer:
      'Tilanteessa 5.11.2026 useat alustat (kuten Mercor ja micro1) käyttävät automaattista tekoälyvideohaastattelua asiantuntijoiden seulontaan: haastattelija on kielimallipohjainen avatari tai ääni, joka kyselee CV:si sisällöstä ja esittää alakohtaisia syventäviä kysymyksiä noin 20 minuutin ajan. Haastatteluun kannattaa valmistautua varmistamalla rauhallinen tila, laadukas mikrofoni sekä tiiviit, konkreettisia työnäytteitä ja menetelmiä kuvaavat vastaukset.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/software/',
    relatedGuides: ['remote-side-jobs-from-home', 'avoid-ai-job-scams', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Tekoälyhaastattelun vaiheet ja keskeiset valmistautumiskohteet',
      headers: ['Vaihe', 'Mitä haastattelussa tapahtuu', 'Valmistautumisvinkki'],
      rows: [
        ['Laitteistotarkistus', 'Selain testaa kameran, mikrofonin ja verkkoyhteyden', 'Käytä erillistä kuulokemikrofonia ja langallista tai vakaata Wi-Fiä'],
        ['Taustan läpikäynti', 'Tekoäly kysyy CV:ssä mainituista projekteista ja rooleista', 'Kertaa ansioluettelosi keskeiset saavutukset ja mittarit'],
        ['Tekninen syväsukellus', 'Kysymyksiä arkkitehtuurista, laadunarvioinnista tai laeista', 'Vastaa STAR-mallilla: tilanne, tehtävä, toimenpide, tulos'],
        ['Haastattelun päätös', 'Vastaukset tallennetaan ja malli tuottaa yhteenvedon arvioijille', 'Puhu rauhallisesti ja selkeästi ilman pitkiä taukoja'],
      ],
    },
    sections: [
      {
        h2: 'Miten automaattinen tekoälyhaastattelu toimii käytännössä?',
        paragraphs: [
          'Mercor käyttää omaa tekoälyhaastattelijaansa, joka lukee etukäteen lataamasi CV:n ja generoi reaaliaikaisesti puhetta ja kysymyksiä. Se ei ole ihmisen pitämä videopuhelu, vaan vuorovaikutteinen arviointityökalu.',
          'Haastattelu kestää tyypillisesti 15–25 minuuttia. Tekoäly kuuntelee vastauksesi, litteroi sen tekstiksi ja tekee luonnollisen kielen analyysia asiantuntijuudestasi, vastauksen rakenteesta ja teknisestä sanavarastosta.',
          'Haastattelun jälkeen malli generoi profiiliisi yhteenvedon ja arvosanat eri osa-alueista, joiden perusteella Mercorin asiakkaat ja projektikoordinaattorit suodattavat ehdokkaita asiantuntijapooleihin.',
        ],
      },
      {
        h2: 'Tekninen ympäristö ja puheen selkeys',
        paragraphs: [
          'Koska arviointi perustuu puheentunnistukseen ja kielimalliin, äänenlaatu on ensiarvoisen tärkeä. Kannettavan tietokoneen sisäänrakennettu mikrofoni poimii helposti huonekaikua ja näppäimistön ääniä; käytä laadukasta kuulokemikrofonia tai USB-mikrofonia.',
          'Puhu normaalia puhenopeutta hieman rauhallisemmin ja artikuloi selkeästi. Jos haastattelukielenä on englanti, älä huoli suomalaisesta korostuksesta: kielimallit ymmärtävät eri aksentteja hyvin, kunhan lauserakenne on selkeä ja sanasto täsmällistä.',
          'Valitse häiriötön huone ja sulje taustasovellukset ja ilmoitukset, jotta yhteys ei katkea kesken haastattelun.',
        ],
      },
      {
        h2: 'Miten vastata alakohtaisiin ja syventäviin kysymyksiin?',
        paragraphs: [
          'Tekoälyhaastattelija osaa tarttua CV:si yksityiskohtiin: jos olet merkinnyt osaavasi Kubernetesia tai lääketieteellistä kuvantamista, se esittää kysymyksen nimenomaan kyseisestä aiheesta.',
          'Käytä vastauksissasi konkreettisia esimerkkejä ja STAR-rakennetta (Situation, Task, Action, Result). Kerro miksi valitsit tietyn teknologian tai menetelmän, mitä haasteita kohtasit ja miten ratkaisit ne.',
          'Vältä ympäripyöreitä korulauseita. Tekoäly etsii asiasisältöä, teknisiä termejä ja loogista päättelykykyä, joten tiivis asiapitoinen vastaus on parempi kuin pitkä jaarittelu.',
        ],
      },
      {
        h2: 'Mitä haastattelun jälkeen tapahtuu?',
        paragraphs: [
          'Kun haastattelu on valmis, profiilisi siirtyy kyseisen osaamisalan talenttipooliin. Tämä ei kuitenkaan tarkoita varmaa työtä tai heti alkavaa projektia.',
          'Projektien saatavuus vaihtelee asiakkaiden tarpeiden mukaan. Jotkut hakijat saavat toimeksiantotarjouksen viikon sisällä, toiset odottavat kuukausia tai eivät saa tarjousta lainkaan.',
          'Voit päivittää profiiliasi myöhemmin ja hakea muihinkin pooleihin, mikäli osaamisesi kattaa useita aloja.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – haastatteluprosessi', url: 'https://work.mercor.com' },
      { label: 'micro1 – haastattelun valmistautumisohjeet', url: 'https://www.micro1.ai/interview-prep' },
    ],
    faqs: [
      {
        question: 'Voiko haastattelun uusia, jos se menee pieleen?',
        answer:
          'Alustoilla on eri käytännöt; yleensä haastattelun voi uusia vasta tietyn karenssiajan (esim. 3–6 kuukautta) jälkeen, joten valmistaudu huolella ensimmäiseen kertaan.',
      },
      {
        question: 'Onko haastattelussa ihmistä mukana?',
        answer:
          'Ei. Alkukarsinnan haastattelu on täysin automatisoitu tekoälyn suorittama arviointi.',
      },
      {
        question: 'Mitä kieltä haastattelussa käytetään?',
        answer:
          'Yleensä englantia, ellei kyseessä ole nimenomaisesti suomen kielen asiantuntijapooli.',
      },
      {
        question: 'Takaako haastattelun läpäisy projektin?',
        answer:
          'Ei. Se hyväksyy sinut osaajapooliin, josta asiakkaat valitsevat tekijöitä tarpeen mukaan.',
      },
    ],
  },

  'avoid-ai-job-scams': {
    slug: 'avoid-ai-job-scams',
    lang: 'fi',
    reviewStatus: 'APPROVED',
    title: 'Tekoälytyön huijaukset: näin tunnistat vilpin (2026)',
    metaDescription:
      'Miten erotat aidon tekoälyn koulutustyön verkkohuijauksista? Tarkista ilmainen haku, viralliset verkkotunnukset ja vältä Telegram- ja kryptoloukut.',
    h1: 'Miten erotat aidon tekoälytyön valerekrytoinneista ja huijauksista?',
    directAnswer:
      'Tilanteessa 5.11.2026 lailliset tekoälyalustat (kuten Mercor, Mindrift, Outlier ja micro1) eivät koskaan pyydä hakijalta rahaa, talletuksia tai laitehankintoja töiden aloittamiseksi. Yleisimmät huijaukset ovat Telegramissa tai WhatsAppissa lähestyviä valerekrytoijia, jotka lupaavat helppoa rahaa ”videoiden tykkäämisestä” tai ”tekoälydatan optimoinnista” ja vaativat kryptotalletusta tehtävien avaamiseksi; aitoihin tehtäviin haetaan aina virallisten suojattujen verkkosivujen kautta.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/legal/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-interview-preparation', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Aidon tekoälyalustan ja rekrytointihuijauksen tunnusmerkit',
      headers: ['Ominaisuus', 'Aito tekoälyalusta (Mercor, Mindrift, Outlier)', 'Rekrytointihuijaus (Task Scam)'],
      rows: [
        ['Hakemisen hinta', 'Täysin maksuton; ei koskaan aloitusmaksuja', 'Pyytää talletusta, rekisteröintimaksua tai ”vip-tasoa”'],
        ['Viestintäkanava', 'Viralliset verkkoportaalit ja yrityksen sähköpostit', 'Lähestyy pyytämättä Telegramissa, WhatsAppissa tai SMS:llä'],
        ['Tehtävien luonne', 'Vaativaa mallien arviointia, koodausta ja asiantuntijatyötä', 'Yksinkertaista klikkailua, tuotteiden arvostelua tai tykkäämistä'],
        ['Maksutapa', 'Stripe, PayPal, AirTM tai suora pankkisiirto', 'Kryptovaluutat (USDT), Revolut-siirrot tuntemattomille'],
      ],
    },
    sections: [
      {
        h2: 'Kultainen sääntö: aidolle alustalle liittyminen ei koskaan maksa mitään',
        paragraphs: [
          'Tärkein sääntö etätöiden etsinnässä on yksinkertainen: oikea työnantaja tai toimeksiantaja maksaa sinulle tehdystä työstä, etkä sinä koskaan maksa heille.',
          'Jos sinulta pyydetään ”vakuustalletusta”, ”koulutusmateriaalin maksua”, ”tietokoneen ostamista heidän toimittajaltaan” tai maksua kryptovaluutassa ennen kuin voit nostaa ansaitsemiasi palkkioita, kyseessä on 100 % varmuudella huijaus.',
          'Mercor, Mindrift, Outlier, micro1 ja Alignerr ovat kaikki täysin maksuttomia hakea ja käyttää. Älä koskaan luovuta luottokorttitietoja tai siirrä rahaa aloittaaksesi työnteon.',
        ],
      },
      {
        h2: 'Miten tunnistat Telegram- ja WhatsApp-tehtävähuijaukset (Task Scams)?',
        paragraphs: [
          'Viime aikoina Suomessakin yleistyneet huijaukset alkavat viestillä tuntemattomasta numerosta WhatsAppissa tai Telegramissa. Viestissä esiinnytään tunnetun yrityksen rekrytoijana ja tarjotaan joustavaa osa-aikatyötä ”tekoälyn koulutuksessa” tai ”datan optimoinnissa” 100–500 euron päiväpalkalla.',
          'Aluksi huijarit antavat helppoja tehtäviä (esim. hotellien arvostelu tai sovellusten klikkailu) ja saattavat jopa maksaa pienen 10–20 euron summan luottamuksen herättämiseksi. Seuraavaksi vaaditaan oman rahan tallettamista ”negatiivisen saldon nollaamiseksi” tai suurempien palkkioiden avaamiseksi.',
          'Tämä on klassinen tehtävähuijaus (task scam). Kun talletat rahaa, et saa sitä koskaan takaisin. Oikeat tekoäly-yhtiöt eivät koskaan rekrytoi satunnaisilla WhatsApp-viesteillä.',
        ],
      },
      {
        h2: 'Verkkotunnusten ja sähköpostiosoitteiden tarkistaminen',
        paragraphs: [
          'Huijarit tekevät usein aidoilta näyttäviä kopiosivustoja. Tarkista aina selaimen osoiterivi huolellisesti: aito Mercor toimii osoitteessa mercor.com ja work.mercor.com, Mindrift osoitteessa mindrift.ai ja Outlier osoitteessa outlier.ai.',
          'Virallinen viestintä tulee vain yritysten omista verkkotunnuksista, kuten @mercor.com tai @mercor.expert. Jos saat työtarjouksen Gmail-, Outlook- tai Telegram-osoitteesta, kyse ei ole virallisesta yhteydenotosta.',
          'Ole tarkkana myös henkilötietojen kanssa: henkilöllisyyden varmentamiseen käytetään tunnettuja turvallisia kumppaneita (kuten Persona tai Stripe Identity), eikä passikuvaa tule koskaan lähettää suojaamattomasti viestisovelluksissa.',
        ],
      },
      {
        h2: 'Mitä tehdä, jos epäilet huijausta tai olet menettänyt rahaa?',
        paragraphs: [
          'Jos huomaat keskustelevasi huijarin kanssa, katkaise viestintä välittömästi äläkä siirrä enää rahaa. Älä usko lupauksia siitä, että ”viimeinen talletus palauttaa kaikki rahat”.',
          'Jos olet luovuttanut pankkitietojasi tai siirtänyt rahaa, ota välittömästi yhteyttä omaan pankkiisi tilien ja korttien sulkemiseksi.',
          'Tee rikosilmoitus poliisille (poliisi.fi) ja ilmoitus Kyberturvallisuuskeskukselle. Huijauksista ilmoittaminen auttaa viranomaisia sulkemaan huijaussivustoja ja varoittamaan muita.',
        ],
      },
    ],
    sources: [
      { label: 'Kyberturvallisuuskeskus – huijaukset ja verkkorikollisuus', url: 'https://www.kyberturvallisuuskeskus.fi/' },
      { label: 'Poliisi – rikosilmoituksen tekeminen', url: 'https://poliisi.fi/' },
      { label: 'Kilpailu- ja kuluttajavirasto (KKV) – huijaukset', url: 'https://www.kkv.fi/' },
    ],
    faqs: [
      {
        question: 'Maksaako mikään aito tekoälyalusta liittymismaksua?',
        answer:
          'Ei. Kaikille luotettaville alustoille (Mercor, Mindrift, Outlier, micro1) hakeminen on täysin ilmaista.',
      },
      {
        question: 'Voiko työtarjous WhatsAppissa olla aito?',
        answer:
          'Käytännössä ei koskaan. Luotettavat alustat käyttävät virallisia rekrytointijärjestelmiä ja yrityssähköposteja.',
      },
      {
        question: 'Miksi huijari maksoi minulle aluksi 20 euroa?',
        answer:
          'Se on huijauksen psykologinen koukku: pienen summan maksaminen luo valheellisen luottamuksen tunteen ennen kuin sinulta pyydetään suuria talletuksia.',
      },
      {
        question: 'Mistä tiedän, onko Mercorin sähköposti aito?',
        answer:
          'Mercorin viralliset viestit tulevat päätteillä @mercor.com tai @mercor.expert. Älä vastaa ilmaisista sähköpostipalveluista tuleviin viesteihin.',
      },
    ],
  },

  'ai-training-for-phds-and-students': {
    slug: 'ai-training-for-phds-and-students',
    lang: 'fi',
    reviewStatus: 'APPROVED',
    title: 'Tekoälytyö tohtoreille ja opiskelijoille Suomessa (2026)',
    metaDescription:
      'Miten väitöskirjatutkijat ja opiskelijat voivat tehdä tekoälyn koulutustyötä? Alustojen vaatimukset, Kelan opintotuen tulorajat ja apurahat.',
    h1: 'Miten opiskelijat ja tohtorit voivat hyödyntää tekoälyn koulutustyötä?',
    directAnswer:
      'Tilanteessa 5.11.2026 yliopisto-opiskelijat ja tohtoritutkijat ovat kysyttyjä asiantuntijoita tekoälyalustoilla: syvällistä akateemista osaamista vaativat arviointitehtävät (kuten matematiikka, fysiikka, filosofia ja oikeustiede) tarjoavat ilmoitettuja tuntipalkkioita 60–150 $/h:iin asti (esim. Mercorissa ja Mindriftissä). Suomessa opiskelijoiden ja apurahatutkijoiden on kuitenkin huomioitava Kelan opintotuen vuositulorajat, toiminimen verotus sekä yliopiston sivutoimisäännöt.',
    lastUpdated: '2026-11-05',
    hubSlug: '/for/general/',
    relatedGuides: ['taxes-toiminimi-yel-finland', 'remote-side-jobs-from-home', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Tekoälyalustojen soveltuvuus opiskelijoille ja tutkijoille Suomessa',
      headers: ['Alusta', 'Kohderyhmä ja parhaat roolit', 'Ilmoitettu taso', 'Huomioitavaa Suomessa'],
      rows: [
        ['Mercor', 'Tohtorit, maisterit, lääkärit, juristit, koodarit', '60–180 $/h', 'Vaativa automaattinen tekoälyhaastattelu; maksu Stripen kautta'],
        ['Mindrift', 'STEM-tutkijat, filosofit, kääntäjät, opiskelijat', '15–100+ $/h', 'Tehtäväkohtainen palkkio; paljon akateemisia aihealueita'],
        ['Outlier', 'STEM-opiskelijat ja tutkijat (matematiikka, fysiikka)', 'Projektikohtainen (TBD)', 'Vaatii tutkinnon tai opintoja; tarkat laatukriteerit'],
        ['Handshake AI', 'Yhdysvaltalaisten yliopistojen opiskelijat ja tohtorit', '17–150 $/h', 'EI SAATAVILLA: Edellyttää asumista ja työlupaa Yhdysvalloissa'],
      ],
    },
    sections: [
      {
        h2: 'Miksi akateemista osaamista haetaan tekoälymallien koulutukseen?',
        paragraphs: [
          'Kielimallit osaavat jo perusasiat, mutta ne kompastelevat edelleen monimutkaisessa tieteellisessä päättelyssä, vaativissa matemaattisissa todistuksissa, koodin optimoinnissa ja monitulkintaisissa eettisissä kysymyksissä.',
          'Tämän vuoksi tekoäly-yhtiöt palkkaavat tutkijoita ja edistyneitä opiskelijoita tuottamaan ns. ”Golden Response” -vastauksia: täydellisesti perusteltuja, lähdeviitattuja ja loogisesti aukottomia päättelyketjuja (chain-of-thought), joita käytetään mallien hienosäätöön ja suorituskyvyn mittaamiseen.',
          'Esimerkiksi väitöskirjatutkija voi arvioida mallin tuottamaa fysiikan laskelmaa tai lääketieteen opiskelija kliinisen tapauksen diagnoosilogiikkaa.',
        ],
      },
      {
        h2: 'Miten lisätulot vaikuttavat Kelan opintotukeen ja asumistukeen?',
        paragraphs: [
          'Itsenäisenä toimeksiantajana ansaitsemasi tekoälypalkkiot ovat veronalaista ansiotuloa, joka lasketaan mukaan Kelan opintotuen vuositulorajaan.',
          'Opintotuessa on kalenterivuosikohtainen vapaatulo: jos nostat tukea esimerkiksi 9 kuukaudelta vuodessa, vuositulorajasi on rajattu. Jos ylität tulorajan, Kela perii liikaa maksetun opintotuen takaisin korkojen kera.',
          'Pidä tuloja silmällä loppuvuodesta ja peruuta tarvittaessa tukikuukausia OmaKelassa, jos tekoälytyöstä saamasi tulot kasvavat ennakoitua suuremmiksi.',
        ],
      },
      {
        h2: 'Apurahatutkijat ja yliopiston työsuhteet',
        paragraphs: [
          'Jos työskentelet yliopistolla työsuhteisena väitöskirjatutkijana tai postdokina, kyseessä on usein kokopäivätyö. Yliopistoilla on sivutoimiohjeet, joiden mukaan merkittävästä sivutoimisesta yritystoiminnasta on tehtävä sivutoimi-ilmoitus tai haettava lupa.',
          'Jos työskentelet henkilökohtaisella apurahalla, tarkista myöntäjän ehdot: useimmat säätiöt sallivat pienen määrän sivutoimista asiantuntijatyötä (esim. 20 % työajasta), kunhan se ei viivästytä apurahatyön etenemistä.',
          'Huomaa myös salassapito: älä koskaan syötä tekoälyalustojen tehtäviin julkaisematonta tutkimusdataa tai yliopiston luottamuksellisia materiaaleja.',
        ],
      },
      {
        h2: 'Miten aloittaa ja mitä alustoja kannattaa kokeilla?',
        paragraphs: [
          'Paras tapa aloittaa on laatia selkeä, englanninkielinen akateeminen CV, josta ilmenee tarkka erikoisalasi, käyttämäsi tutkimusmenetelmät, julkaisut ja ohjelmointikielet.',
          'Hae ensisijaisesti Mercorin erikoistuneisiin pooleihin (kuten Software, Medical, Legal) tai Mindriftin STEM-tiimeihin. Vältä yleisosaajatehtäviä, jos sinulla on vahva erikoistutkinto: asiantuntijapoolien tuntipalkkiot ovat huomattavasti parempia.',
          'Muista, että Handshake AI on rajattu vain Yhdysvalloissa asuville opiskelijoille, joten suomalaisena tutkijana siihen ei kannata tuhlata aikaa.',
        ],
      },
    ],
    sources: [
      { label: 'Kela – opintotuen tulorajat', url: 'https://www.kela.fi/opintotuki-omat-tulot' },
      { label: 'Tieteentekijöiden liitto – apurahat ja verotus', url: 'https://tieteentekijat.fi/' },
      { label: 'Mercor – asiantuntijapoolit', url: 'https://work.mercor.com' },
    ],
    faqs: [
      {
        question: 'Tarvitsenko valmiin tohtorintutkinnon päästäkseni mukaan?',
        answer:
          'Et välttämättä. Monissa teknisissä ja kielellisissä tehtävissä maisterin tutkinto tai loppuvaiheen opinnot riittävät hyvin.',
      },
      {
        question: 'Vaikuttavatko tulot opintotukeeni?',
        answer:
          'Kyllä. Kaikki itsenäisen toimeksiannon tulot lasketaan mukaan Kelan kalenterivuosittaiseen opintotuen vuositulorajaan.',
      },
      {
        question: 'Voinko osallistua Handshake AI -ohjelmaan Suomesta?',
        answer:
          'Et. Handshake AI Fellowship edellyttää asumista Yhdysvalloissa ja Yhdysvaltain virallista työlupaa.',
      },
      {
        question: 'Voinko käyttää tutkimusdataani arviointitehtävissä?',
        answer:
          'Et. Julkaisematonta tai luottamuksellista yliopiston tutkimusdataa ei saa koskaan syöttää ulkopuolisille tekoälyalustoille.',
      },
    ],
  },
};

const FI: Record<GuideSlug, GuidePageContent> = {
  ...FI_A,
  ...FI_B,
} as Record<GuideSlug, GuidePageContent>;

export const GUIDES_EN_FI = {
  en: EN,
  fi: FI,
};
