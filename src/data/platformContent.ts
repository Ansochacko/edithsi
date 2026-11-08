// NEEDS NATIVE REVIEW for sv, de, fr, es
import type { Lang } from '../i18n';

export const PLATFORM_SLUGS = [
  'mercor',
  'mindrift',
  'alignerr',
  'outlier',
  'micro1',
  'handshake-ai',
] as const;

export type PlatformSlug = (typeof PLATFORM_SLUGS)[number];

export type ReviewStatus = 'APPROVED' | 'NEEDS NATIVE REVIEW';

export interface ContentSection {
  h2: string;
  paragraphs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PlatformPageContent {
  slug: PlatformSlug;
  lang: Lang;
  reviewStatus: ReviewStatus;
  title: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  fairnessDisclosure: string;
  sections: ContentSection[];
  faqs: FaqItem[];
}

// Every *Cell string must be self-contained (include the platform name).
export interface CompareRow {
  slug: PlatformSlug;
  platformCell: string;
  payCell: string;
  paymentCell: string;
  fieldsCell: string;
  eligibilityCell: string;
  screeningCell: string;
}

export interface ComparePageContent {
  lang: Lang;
  reviewStatus: ReviewStatus;
  title: string;
  metaDescription: string;
  h1: string;
  directAnswer: string;
  fairnessDisclosure: string;
  tableHeaders: [string, string, string, string, string, string, string];
  rows: CompareRow[];
  sections: ContentSection[];
  faqs: FaqItem[];
}

const PLATFORM_CONTENT: Record<Lang, Record<PlatformSlug, PlatformPageContent>> = {
  en: {
    mercor: {
      slug: 'mercor',
      lang: 'en',
      reviewStatus: 'APPROVED',
      title: 'Mercor Review & Pay (2026): Honest Guide | Edithsi',
      metaDescription:
        'Is Mercor legit for European specialists? Verified 2026-11-05 posted pay ($35–180/h), Stripe payouts, AI interview steps, and EU tax notes.',
      h1: 'Is Mercor Legit? Posted Pay, How It Works & EU Guide (2026)',
      directAnswer:
        'Mercor is a US-based talent platform (work.mercor.com) that hires remote domain specialists for AI model evaluation, rubric grading, and prompt engineering across standing pools paying $35–180/h (Finance rates set per project; verified 2026-11-05). Independent contractors in Finland, the EU/EEA, the UK, the US, and Canada can apply remotely, though individual client projects vary in geographic availability and never guarantee weekly hours.',
      fairnessDisclosure:
        'I earn a referral commission from Mercor when someone applies through my referral code (02e0c12a-d634-4738-9686-04f28f31f52b) and meets their hiring milestones. I earn $0 from micro1, Outlier, Alignerr, Handshake AI, and Mindrift, and I evaluate every platform using the exact same criteria, direct official URLs, and verification date (2026-11-05).',
      sections: [
        {
          h2: 'What kind of AI-training work and specialist domains does Mercor offer?',
          paragraphs: [
            'Mercor recruits credentialed specialists into standing talent pools rather than one-off micro-task queues. The core work consists of domain-specific AI model evaluations (evals), writing multi-step reasoning prompts, grading model outputs against detailed rubrics, and identifying factual or clinical hallucinations.',
            'As checked on 2026-11-05 on work.mercor.com, Mercor maintains active standing listings in seven core areas: Medicine (physicians, nurses, dentists, pharmacists), Law (licensed lawyers and legal specialists), Software Engineering, Finance (accounting, audit, corporate finance, IB, actuarial), Office & Productivity Software, Languages & Audio (including Finnish, French, Spanish, Italian, Portuguese, Polish, and Dutch), and Generalist reasoning.',
          ],
        },
        {
          h2: 'What are Mercor’s posted pay ranges and how do payouts and taxes work?',
          paragraphs: [
            'Across Mercor’s public listings verified on 2026-11-05, posted hourly ranges span $35–180/h depending on credential depth: Medical Expert ($60–180/h), Legal Expert for licensed lawyers ($100–150/h), Legal Expert ($60–150/h), Software Engineering Expert ($70–150/h), Office & Productivity Software Expert ($60–70/h), Generalist Expert ($40–70/h), and Language & Audio Expert ($35–50/h). The Finance Expert listing states that the hourly rate is set per project.',
            'Mercor pays weekly in USD via Stripe as an independent contractor. Because no tax is withheld at source, contractors in Finland and across Europe must report gross USD earnings converted into EUR (or local currency) to their national tax agency, manage prepayments or self-employment social contributions, and account for Stripe currency conversion spreads.',
          ],
        },
        {
          h2: 'Can contractors in Finland and Europe apply to Mercor?',
          paragraphs: [
            'Yes. Mercor accepts remote applications from Finland, the wider EU/EEA, the UK, the US, and Canada. The Language & Audio pool explicitly recruits native speakers of Finnish and major European languages, while technical and generalist pools are open internationally.',
            'Keep in mind that entering a standing talent pool does not automatically place you on an active billable contract. Some underlying laboratory projects require US-specific professional licensure (such as a US state bar or US medical board), while coding, multilingual, and general analytical projects routinely onboard European specialists.',
          ],
        },
        {
          h2: 'How does the Mercor application and AI interview process work?',
          paragraphs: [
            'Applying takes four structured steps: upload your CV on the specific Mercor role listing, complete the automated ~20-minute AI video interview plus any domain assessment, enter the standing talent pool to await project matching, and complete identity verification and Stripe onboarding once matched.',
            'Treat the automated video interview like a live technical consultation: reference concrete projects from your CV, explain your methodology aloud, and test your microphone beforehand. Because project demand fluctuates with AI lab release cycles, I never recommend relying on Mercor—or any single AI-training platform—as guaranteed full-time income.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Does Mercor charge candidates any fee to apply or interview?',
          answer:
            'No. Applying, taking the automated AI interview, and joining a standing pool on work.mercor.com are completely free.',
        },
        {
          question: 'How does Mercor pay contractors in Europe?',
          answer:
            'Mercor processes weekly payouts in USD through Stripe to your linked European bank account once you are matched to an active project and log verified hours.',
        },
        {
          question: 'How long does it take to get matched after the Mercor AI interview?',
          answer:
            'Matching timelines vary from a few days to several weeks or longer depending on client lab demand in your specialty; joining a standing pool never guarantees immediate work.',
        },
        {
          question: 'Can I apply to multiple Mercor role pools?',
          answer:
            'Yes. You can apply to the specific domain pool that matches your formal credentials (such as Software Engineering or Law) as well as a Language or Generalist pool if qualified.',
        },
      ],
    },
    mindrift: {
      slug: 'mindrift',
      lang: 'en',
      reviewStatus: 'APPROVED',
      title: 'Mindrift Review & Pay (2026): Toloka AI Guide | Edithsi',
      metaDescription:
        'How does Mindrift work in Europe? Verified 2026-11-05 posted rates ($15–100+/h), Toloka AI BV task payouts, 90+ domains, and EU eligibility.',
      h1: 'How Does Mindrift Work? Posted Pay ($15–100+/h) & Tasks',
      directAnswer:
        'Mindrift (mindrift.ai) is an AI-training platform operated by Toloka AI BV that hires freelance writers and subject-matter experts across 90+ domains to write prompts, grade model responses, and edit outputs at posted rates of $15–100+/h (checked 2026-11-05). It accepts remote contributors in Finland and across the EU/EEA across 20+ languages, though its Medicine track specifically requires licensed US physicians.',
      fairnessDisclosure:
        'I earn $0 from Mindrift (no referral link or affiliate partnership exists). I earn referral fees only from Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b), and I evaluate Mindrift using the exact same criteria, public sources, and verification date (2026-11-05) as every other platform on this site.',
      sections: [
        {
          h2: 'What kind of AI-training work and domains does Mindrift offer?',
          paragraphs: [
            'Operated by Toloka AI BV, Mindrift focuses on complex text generation, taxonomy creation, fact-checking, and step-by-step justification of AI outputs across more than 90 academic and professional fields.',
            'As checked on 2026-11-05 on mindrift.ai, primary hiring tracks cover STEM research, Coding (code review, generation, and automation), Management Consulting (strategy, operations, and M&A targeting MBB and senior consultants), Law, Creative Writing & Editing, Linguistics across 20+ languages, and Medicine.',
          ],
        },
        {
          h2: 'What are Mindrift’s posted pay ranges and how do task payouts work?',
          paragraphs: [
            'On its public website checked on 2026-11-05, Mindrift posts entry-level generalist and writing rates of $15–30/h and domain-expert rates of $60–100+/h. Specific role benchmarks cite up to $100/h for licensed US physicians, up to $8,000/month for Management Consulting trainers, up to $6,400/month ($60–100+/h benchmark) for STEM trainers, and up to $5,400/month ($60–100+/h benchmark) for Coding trainers.',
            'Unlike hourly time-tracker platforms, Mindrift pays per completed task on a bi-weekly schedule, showing the exact task reward before you accept a task. Because the exact payment processor is not listed on the public landing page (marked TBD until onboarding), European contributors should verify transfer fees and report all bi-weekly income as self-employed contractor revenue.',
          ],
        },
        {
          h2: 'Is Mindrift open to applicants in Finland and Europe?',
          paragraphs: [
            'Yes, Mindrift recruits globally across 20+ languages, including contractors based in Finland and the EU/EEA, subject to Toloka Platforms Eligibility and Geographic Restrictions. Its European corporate footprint via Toloka AI BV makes it a familiar structure for EU freelancers.',
            'However, always check role-specific credentials before applying: for example, Mindrift’s public Medicine listing explicitly specifies licensed US physicians, whereas STEM, Coding, Consulting, and Linguistics tracks are accessible to qualified European professionals.',
          ],
        },
        {
          h2: 'What is the Mindrift application and qualification process?',
          paragraphs: [
            'The Mindrift onboarding process has three steps: submit your CV on mindrift.ai while selecting your domain and language pair, pass a short domain or writing assessment to prove subject-matter rigor, and complete platform onboarding to unlock task queues.',
            'Because you are paid per approved task rather than per raw clock hour, your effective hourly rate depends on how efficiently you master each project’s style guide and rubric. Task volume rises and falls with client batches, so never count on steady weekly task flow.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Who operates Mindrift?',
          answer:
            'Mindrift is operated by Toloka AI BV, an established AI data and model-training company.',
        },
        {
          question: 'Does Mindrift pay by the hour or by the task?',
          answer:
            'Mindrift pays per completed task on a bi-weekly schedule, displaying the task reward before you start and using hourly benchmarks ($15–30/h generalist, $60–100+/h domain expert) to price tasks.',
        },
        {
          question: 'Can European doctors apply to Mindrift’s Medicine track?',
          answer:
            'As checked on 2026-11-05, Mindrift’s public Medicine track specifies licensed US physicians, though European specialists can apply to STEM, Coding, Consulting, Law, and Language tracks.',
        },
        {
          question: 'Do I have a referral link for Mindrift?',
          answer:
            'No. I have no financial relationship with Mindrift and link directly to the official mindrift.ai website.',
        },
      ],
    },
    alignerr: {
      slug: 'alignerr',
      lang: 'en',
      reviewStatus: 'APPROVED',
      title: 'Alignerr Review & Pay (2026): EU ID Rules | Edithsi',
      metaDescription:
        'Is Alignerr open in Europe? Verified 2026-11-05 pay ($15–120/h), Labelbox projects, Zara AI interview, and critical US-ID Persona caveat.',
      h1: 'Is Alignerr Open in Europe? Posted Pay, ID Rules & Review',
      directAnswer:
        'Alignerr (alignerr.com), operated by Labelbox, Inc., hires remote specialists to align generative AI models, grade coding and ethics rubrics, and build voice/language datasets at posted role rates of $15–120/h (with a homepage badge citing an $80/hr average; checked 2026-11-05). While Alignerr’s general FAQ welcomes global applicants, its official Visa FAQ states that Persona identity verification only accepts US IDs and US/Canada phone numbers—a critical caveat European applicants must verify before investing time.',
      fairnessDisclosure:
        'I earn $0 from Alignerr (no affiliate or referral relationship). I earn referral fees only from Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b), and I evaluate Alignerr using the exact same criteria, public documentation, and verification date (2026-11-05) as every other platform.',
      sections: [
        {
          h2: 'What kind of AI-training work and domains does Alignerr offer?',
          paragraphs: [
            'Operated by Labelbox, Inc., Alignerr connects subject-matter experts directly to enterprise LLM calibration workflows inside the Labelbox ecosystem. Work includes designing coding problems, evaluating AI ethics and safety edge cases, verifying geospatial/map data, and recording or grading multilingual prompts.',
            'As checked on 2026-11-05 on alignerr.com, public role categories span Coding & Software Engineering, STEM & Research (PhDs and researchers), General & Ethics (AI Ethics Reviewer, Data Labeling Specialist, Map & Location Data Analyst), Languages & Audio, and Talent Acquisition.',
          ],
        },
        {
          h2: 'What are Alignerr’s posted pay ranges and how does payment work?',
          paragraphs: [
            'Public role cards on alignerr.com checked on 2026-11-05 show $40–120/h for AI Ethics Reviewer, Data Labeling Specialist, and Map & Location Data Analyst roles; $25–35/h for AI Language Experts; and $15–25/h for Talent Acquisition Specialists. Coding & STEM role rates are listed per project (TBD on the public FAQ, alongside a homepage badge citing an $80/hr platform average).',
            'Contractors work as independent freelancers with project-specific hourly rates displayed before starting. Because Alignerr’s public FAQ leaves the exact payout processor and schedule as TBD until billing and contract setup after approval, European contractors must track gross payouts for national self-employment tax reporting.',
          ],
        },
        {
          h2: 'Can contractors in Finland and Europe actually pass Alignerr’s ID check?',
          paragraphs: [
            'This is the most important caveat on Alignerr as of 2026-11-05: while general marketing pages invite global experts and foreign-language speakers, Alignerr’s official Visa/ID FAQ states: "we only accept US Driver’s Licenses, US State IDs, US Work Permits or US Permanent Residence Cards for identity verification" via Persona, and states that phone verification supports US/Canada numbers only.',
            'If you live in Finland or another EU country without a qualifying US identity document and US/Canada phone number, you may hit a hard block during Persona verification unless your specific language project waives that rule. Always check whether non-US passport verification is enabled on your account before spending hours on assessments.',
          ],
        },
        {
          h2: 'How does the Alignerr application and Zara AI interview work?',
          paragraphs: [
            'Sign in with a Google account on app.alignerr.com, upload your résumé to auto-populate your profile in roughly 30 seconds, complete Persona identity verification, and take the automated Zara™ interview or domain skills assessments before completing contract and billing setup.',
            'Even after passing the Zara™ interview and calibration tasks, project allocation depends on Labelbox client demand. Treat all posted hourly figures ($15–120/h) as project ceilings rather than guaranteed weekly paychecks.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Who owns and operates Alignerr?',
          answer:
            'Alignerr is operated by Labelbox, Inc., a US-based AI data factory and training platform company.',
        },
        {
          question: 'Why might European applicants get blocked on Alignerr?',
          answer:
            'As checked on 2026-11-05, Alignerr’s official Visa FAQ states that Persona verification only accepts US government IDs/work permits and US/Canada phone numbers.',
        },
        {
          question: 'What are Alignerr’s posted hourly rates?',
          answer:
            'Public role cards checked on 2026-11-05 list $40–120/h for Ethics, Data Labeling, and Map Analysts, $25–35/h for Language Experts, and $15–25/h for Talent Acquisition, with Coding/STEM rates set per project.',
        },
        {
          question: 'Do I earn any commission if you join Alignerr?',
          answer:
            'No. I earn $0 from Alignerr and provide direct, unmonetized links to alignerr.com.',
        },
      ],
    },
    outlier: {
      slug: 'outlier',
      lang: 'en',
      reviewStatus: 'APPROVED',
      title: 'Outlier AI Review & Pay (2026): EU Guide | Edithsi',
      metaDescription:
        'How does Outlier AI work in Europe? Verified 2026-11-05 guide to weekly PayPal/AirTM payouts, 50+ countries, screenings, and contractor rules.',
      h1: 'How Does Outlier AI Work? Weekly Pay, Screening & Facts',
      directAnswer:
        'Outlier (outlier.ai), operated by Scale AI / Smart Ecosystems, is a large remote AI-training platform where contributors write complex domain prompts, design grading rubrics, and rank LLM outputs across Coding, STEM, and 50+ language locales. As checked on 2026-11-05, Outlier does not publish a single fixed hourly rate on its public overview (marked TBD per project and location), but it openly accepts residents across 50+ countries—including Finland and Europe—with weekly Tuesday payouts via PayPal, AirTM, or ACH.',
      fairnessDisclosure:
        'I earn $0 from Outlier (no referral code or affiliate link). I earn referral commissions only from Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b), and I evaluate Outlier using the exact same criteria, official FAQ sources, and verification date (2026-11-05) as all six platforms.',
      sections: [
        {
          h2: 'What kind of AI-training work and domains does Outlier offer?',
          paragraphs: [
            'Operated by Scale AI / Smart Ecosystems, Outlier focuses on human reinforcement learning (RLHF), adversarial prompt writing, multi-turn conversation grading, and complex rubric creation to stump and improve frontier language models.',
            'As checked on 2026-11-05 on outlier.ai, core hiring tracks cover Coding & Software Engineering, STEM (Mathematics, Physics, Chemistry, Biology), Languages across 50+ countries (including Nordic and European languages), and Generalist writing and reasoning (where an Associate’s degree is the minimum requirement and a Bachelor’s, Master’s, or PhD is preferred).',
          ],
        },
        {
          h2: 'How do Outlier’s project rates, weekly Tuesday payouts, and taxes work?',
          paragraphs: [
            'As verified on 2026-11-05 on outlier.ai/faq, Outlier lists public pay ranges as TBD because rates vary by credential tier, project complexity, and geographic location; however, your exact hourly or per-task rate is always displayed on your dashboard before you start a project.',
            'Outlier has one of the clearest payout schedules in the industry: payouts run weekly every Tuesday (covering work completed from the previous Tuesday through Monday midnight UTC) via PayPal, AirTM, or ACH bank transfer. In Finland and across the EU, all PayPal or AirTM receipts are taxable self-employed contractor income that you must declare in your local tax return.',
          ],
        },
        {
          h2: 'Is Outlier open to residents in Finland and Europe?',
          paragraphs: [
            'Yes. Outlier explicitly operates across 50+ countries, including Finland and most EU/EEA nations, and supports identity verification using a valid national government ID and a mobile phone number from your country of residence.',
            'Unlike platforms that require US-only identification, Outlier’s local ID rule makes onboarding straightforward for European residents—provided you connect from your registered country of residence and do not travel internationally without checking platform geolocation rules.',
          ],
        },
        {
          h2: 'What should you expect from Outlier’s screening and task queues?',
          paragraphs: [
            'To join Outlier, you create a profile on outlier.ai, import your résumé and LinkedIn details, verify your government ID and local mobile phone, and complete 30–90 minute general skill screenings followed by project-specific qualification modules.',
            'Outlier is known for rapid shifts between active task batches and "Empty Queue" (EQ) periods when client labs pause or recalibrate projects. Treat Outlier as flexible supplemental work and combine it with standing pools like Mercor or Mindrift so an Empty Queue never disrupts your plans.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Who operates Outlier AI?',
          answer:
            'Outlier is operated by Scale AI / Smart Ecosystems.',
        },
        {
          question: 'When and how does Outlier pay contractors?',
          answer:
            'Outlier pays weekly on Tuesdays (for work logged the prior Tuesday through Monday midnight UTC) via PayPal, AirTM, or ACH.',
        },
        {
          question: 'Can I use a Finnish or European ID to verify on Outlier?',
          answer:
            'Yes. Outlier operates in 50+ countries and requires a valid government ID and mobile phone number from your country of residence.',
        },
        {
          question: 'Why does my table show TBD for Outlier’s posted pay range?',
          answer:
            'Because as of 2026-11-05, Outlier’s public FAQ states that rates vary by expertise, project complexity, and location rather than posting a single universal dollar range; exact rates are shown inside the dashboard before tasking.',
        },
      ],
    },
    micro1: {
      slug: 'micro1',
      lang: 'en',
      reviewStatus: 'APPROVED',
      title: 'micro1 Review & Pay (2026): AI Trainer Guide | Edithsi',
      metaDescription:
        'How does micro1 work for AI trainers in Europe? Verified 2026-11-05 guide to Realm, Cortex, Medical Index, AI interviews, and contractor rules.',
      h1: 'How Does micro1 Work for AI Trainers? AI Interview & Roles',
      directAnswer:
        'micro1 (micro1.ai/experts), operated by micro1 Inc., recruits global domain experts in Software Engineering, Finance, Healthcare, Legal, and Academic Research to generate human training data for frontier AI labs across programs like Realm, Cortex, and Medical Index. As checked on 2026-11-05, micro1 lists compensation as TBD on its public overview page ("Competitive compensation for expert knowledge" with rates posted per role listing) and welcomes remote experts worldwide, including Finland and Europe.',
      fairnessDisclosure:
        'I earn $0 from micro1 (no affiliate or referral commission). I earn referral fees only from Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b), and I evaluate micro1 using the exact same criteria, public URLs, and verification date (2026-11-05) as every other platform.',
      sections: [
        {
          h2: 'What kind of AI-training work and domains does micro1 offer?',
          paragraphs: [
            'micro1 Inc. builds specialized human data datasets and evaluation environments for frontier AI laboratories. On its public /experts portal checked on 2026-11-05, micro1 highlights four core data programs: Realm (real-world reinforcement learning environments), Cortex (contextual agent evaluations), Medical Index (clinical and healthcare benchmarks), and robotics data collection.',
            'Primary hiring verticals cover Software Engineering, Finance, Healthcare & Medicine, Legal, and Academic Research & Robotics.',
          ],
        },
        {
          h2: 'How do micro1’s posted pay ranges, payouts, and European taxes work?',
          paragraphs: [
            'On its main micro1.ai/experts overview page checked on 2026-11-05, micro1 does not publish a single global hourly range (marked TBD on the public overview, which cites "Competitive compensation for expert knowledge" while displaying role-specific rates on individual opportunity listings at micro1.ai/experts/opportunities).',
            'Similarly, the exact payout schedule and payment processor are marked TBD on the public overview page and confirmed inside the candidate portal during onboarding. As with all US-based contractor platforms, residents in Finland and the EU are engaged as self-employed contractors responsible for reporting gross foreign income and handling local social insurance.',
          ],
        },
        {
          h2: 'Can contractors in Finland and Europe apply to micro1?',
          paragraphs: [
            'Yes. micro1 recruits a global remote expert community, and professionals based in Finland and across the EU/EEA can apply to open domain opportunities and complete the automated AI certification interview.',
            'Because individual client lab projects can carry geographic or jurisdictional requirements (marked TBD per project on the public overview page), always check the specific opportunity card before starting onboarding.',
          ],
        },
        {
          h2: 'How does the micro1 automated AI interview and onboarding work?',
          paragraphs: [
            'micro1 uses a four-step workflow: browse and apply for open domain opportunities on micro1.ai/experts/opportunities, take the automated AI interview (you can practice beforehand at micro1.ai/interview-prep), complete contractor onboarding if selected, and begin logging work on matched frontier lab projects.',
            'Because micro1 and Mercor both use ~20-minute automated AI technical interviews, preparing clear spoken explanations of your recent engineering, clinical, financial, or legal casework helps you perform well on both platforms.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What are Realm, Cortex, and Medical Index at micro1?',
          answer:
            'They are micro1’s specialized AI data initiatives: Realm focuses on reinforcement learning environments, Cortex on contextual agent evaluations, and Medical Index on clinical AI benchmarks.',
        },
        {
          question: 'Why is micro1’s pay listed as TBD in the summary table?',
          answer:
            'Because as of 2026-11-05, micro1’s main /experts page states "Competitive compensation for expert knowledge" without a universal range, posting specific hourly rates on individual role listings instead.',
        },
        {
          question: 'Can I prepare for the micro1 AI interview in advance?',
          answer:
            'Yes. micro1 provides an official interview preparation page at micro1.ai/interview-prep.',
        },
        {
          question: 'Do I earn a referral commission when you apply to micro1?',
          answer:
            'No. I earn $0 from micro1 and link directly to micro1.ai/experts.',
        },
      ],
    },
    'handshake-ai': {
      slug: 'handshake-ai',
      lang: 'en',
      reviewStatus: 'APPROVED',
      title: 'Handshake AI Review & Pay (2026): US-Only Rule | Edithsi',
      metaDescription:
        'Who can join Handshake AI (MOVE Program)? Verified 2026-11-05 pay (up to $150/h), tracks, and strict US-only work authorization rules.',
      h1: 'Who Can Join Handshake AI? Pay (Up to $150/h) & US-Only Rule',
      directAnswer:
        'Handshake AI (joinhandshake.com/move-program/), operated by Handshake through its Handshake AI Fellowship and MOVE Program, pays degree holders up to $17–150/h for academic and professional LLM training and model validation (checked 2026-11-05). However, Handshake AI is strictly US-ONLY: you must be physically based in the United States with eligible US work authorization, meaning residents in Finland and Europe cannot participate.',
      fairnessDisclosure:
        'I earn $0 from Handshake AI (no referral code or affiliate partnership). I earn referral fees only from Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b), and I include Handshake AI with the exact same verification date (2026-11-05) so European readers can immediately see why it is restricted to US residents.',
      sections: [
        {
          h2: 'What kind of AI-training work and domains does Handshake AI offer?',
          paragraphs: [
            'Operated by the career network Handshake, the Handshake AI Fellowship (MOVE Program) recruits Associate’s, Bachelor’s, Master’s, PhD, and Postdoc holders for model validation (MOVE), academic prompt design, and specialist output evaluation.',
            'As checked on 2026-11-05 on joinhandshake.com/move-program/, active tracks include Software Engineering, Game Development & PCB Tool Engineering, Philosophy & Humanities (PhDs and Postdocs), Finance (FP&A Analysts), Energy Professionals, and Generalist AI Evaluation.',
          ],
        },
        {
          h2: 'What are Handshake AI’s posted pay ranges and how does payment work?',
          paragraphs: [
            'On its public MOVE Program page verified on 2026-11-05, Handshake AI posts track ceilings from $17/h to $150/h: Software Engineer Fellow (up to $150/h), Game Developer / PCB Tool Specialist (up to $125/h), Philosophy Expert for PhDs & Postdocs (up to $120/h), FP&A Analyst / Energy Professional (up to $80/h), and generalist AI Evaluation Specialist (up to $17/h).',
            'Handshake cites over $500M+ in total payouts across its ecosystem and pays fellows hourly as independent contractors, while leaving the exact payout rail on the public landing page as TBD until onboarding.',
          ],
        },
        {
          h2: 'Why is Handshake AI blocked for applicants in Finland and Europe?',
          paragraphs: [
            'Handshake AI enforces a strict geographic and legal boundary. As verified on 2026-11-05 on joinhandshake.com/move-program/, the official eligibility rule states: "To participate in the Handshake AI Fellowship, you must be based in the U.S. and have a valid work authorization that can be supported by Handshake. F-1 students who are eligible for CPT or OPT may be eligible. STEM OPT is not supported."',
            'If you live in Finland or anywhere else in Europe without US physical presence and eligible US work authorization, do not spend time applying to Handshake AI. Instead, focus on platforms that openly accept European residents, such as Mercor, Mindrift, Outlier, or micro1.',
          ],
        },
        {
          h2: 'How does the Handshake AI application process work for eligible US residents?',
          paragraphs: [
            'For readers who are physically in the United States with valid US work authorization, applying involves three steps: sign up or log in at joinhandshake.com/move-program/, verify your academic degree status and US work authorization, and apply to matching fellowship tracks to complete onboarding.',
            'As with every other AI-training program, fellowship hours depend on active laboratory validation cohorts and are never guaranteed.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Can I apply to Handshake AI from Finland or the European Union?',
          answer:
            'No. Handshake AI explicitly requires fellows to be physically based in the United States with supported US work authorization.',
        },
        {
          question: 'Does Handshake AI support F-1 STEM OPT students in the US?',
          answer:
            'No. According to joinhandshake.com/move-program/ (checked 2026-11-05), F-1 students eligible for CPT or standard OPT may qualify, but STEM OPT is explicitly not supported.',
        },
        {
          question: 'What is the highest posted hourly rate on Handshake AI?',
          answer:
            'As of 2026-11-05, the Software Engineer Fellow track posts rates up to $150/h, followed by Game Dev/PCB ($125/h) and Philosophy PhDs ($120/h).',
        },
        {
          question: 'Why do I include Handshake AI on a European guide if it is US-only?',
          answer:
            'Because European degree holders frequently see Handshake AI ads and viral social posts quoting $150/h; stating the US-only rule up front saves European professionals from wasting time.',
        },
      ],
    },
  },
  fi: {
    mercor: {
      slug: 'mercor',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      title: 'Mercor kokemuksia & palkka (2026): Suomi-opas | Edithsi',
      metaDescription:
        'Onko Mercor luotettava Suomessa? Tarkistetut (2026-11-05) tuntipalkat ($35–180/h), Stripe-maksut, tekoälyhaastattelu sekä Vero.fi ja YEL-ohjeet.',
      h1: 'Onko Mercor luotettava? Ilmoitetut palkat, haku & Suomi-opas (2026)',
      directAnswer:
        'Mercor (work.mercor.com) on yhdysvaltalainen asiantuntija-alusta, joka rekrytoi etätyöhön eri alojen ammattilaisia tekoälymallien arviointiin (evals), arvostelukriteerien laatimiseen ja kehotteiden testaamiseen ilmoitetulla tuntipalkalla $35–180/h (Finance-rooleissa projektikohtainen; tarkistettu 2026-11-05). Suomessa ja muualla EU/ETA-alueella asuvat itsenäiset ammatinharjoittajat voivat hakea etänä, mutta yksittäisten asiakasprojektien maakohtaiset vaatimukset vaihtelevat eikä työtunteja koskaan taata.',
      fairnessDisclosure:
        'Saan Mercorilta suosittelupalkkion (referral fee), jos joku hakee suosittelukoodillani (02e0c12a-d634-4738-9686-04f28f31f52b) ja täyttää heidän rekrytointiehtonsa. En saa lainkaan palkkiota ($0) muilta viideltä alustalta (micro1, Outlier, Alignerr, Handshake AI, Mindrift), ja arvioin jokaisen alustan täsmälleen samoilla kriteereillä, virallisilla julkisilla lähteillä ja tarkistuspäivämäärällä (2026-11-05).',
      sections: [
        {
          h2: 'Millaista tekoälyn koulutustyötä ja mitä toimialoja Mercor tarjoaa?',
          paragraphs: [
            'Mercor kokoaa koulutettuja erityisasiantuntijoita pysyviin osaajapooleihin (standing talent pools) sen sijaan, että se jakaisi pelkkiä lyhyitä mikrotehtäviä. Työ koostuu oman erikoisalan tekoälymallien arvioinnista (evals), monivaiheisten päättelytehtävien kirjoittamisesta, mallien vastausten pisteyttämisestä tarkkojen rubriikkien avulla sekä asiavirheiden korjaamisesta.',
            'Kun tarkistin work.mercor.com-sivuston 2026-11-05, Mercorilla oli avoinna seitsemän pääasiallista osaajapoolia: lääketiede (lääkärit, sairaanhoitajat, hammaslääkärit, proviisorit/farmaseutit), oikeustiede (asianajajat ja lakimiehet), ohjelmistokehitys, rahoitus ja talous (kirjanpito, tilintarkastus, yritysrahoitus, aktuaarit), toimisto-ohjelmistot, kielet ja ääni (mukaan lukien suomi, ranska, espanja, italia, portugali, puola ja hollanti) sekä yleistason päättely (Generalist).',
          ],
        },
        {
          h2: 'Mitkä ovat Mercorin ilmoitetut tuntipalkat ja miten Stripe-maksut ja Suomen verotus toimivat?',
          paragraphs: [
            'Mercorin julkisissa hakuilmoituksissa (tarkistettu 2026-11-05) ilmoitetut tuntipalkat ovat $35–180/h roolista riippuen: Medical Expert ($60–180/h), Legal Expert laillistetuille asianajajille ($100–150/h), Legal Expert ($60–150/h), Software Engineering Expert ($70–150/h), Office & Productivity Software Expert ($60–70/h), Generalist Expert ($40–70/h) sekä Language & Audio Expert ($35–50/h). Finance Expert -ilmoituksessa tuntipalkka määritellään projektikohtaisesti.',
            'Mercor maksaa palkkiot viikoittain Yhdysvaltain dollareissa (USD) Stripen kautta suomalaiselle pankkitilille. Koska Mercor ei pidätä ennakonpidätystä, ilmoitan itse (ja jokaisen suomalaisen tekijän tulee ilmoittaa) bruttotulot euroiksi muunnettuina Verohallinnolle (Vero.fi) joko ennakkoveroina tai esitäytetyllä veroilmoituksella, huolehtia YEL-vakuutuksesta, jos YEL-työtuloraja (9 423 € vuonna 2026) ylittyy, sekä ilmoittaa tulot Kelalle mahdollisten etuuksien yhteydessä.',
          ],
        },
        {
          h2: 'Voivatko Suomessa ja EU-alueella asuvat asiantuntijat hakea Mercoriin?',
          paragraphs: [
            'Kyllä. Mercor hyväksyy etähakemuksia Suomesta, muista EU/ETA-maista, Iso-Britanniasta, Yhdysvalloista ja Kanadasta. Erityisesti Language & Audio -pooli hakee suoraan suomen kielen natiiviosaajia, ja ohjelmistokehityksen sekä yleistason poolit ovat avoinna kansainvälisesti.',
            'On kuitenkin tärkeää ymmärtää, että osaajapooliin pääseminen ei tarkoita välitöntä työsopimusta. Osa lääketieteen tai juridiikan asiakasprojekteista vaatii yhdysvaltalaisen toimiluvan, kun taas koodaus-, kieli- ja analyysiprojekteihin otetaan säännöllisesti tekijöitä Suomesta.',
          ],
        },
        {
          h2: 'Miten Mercorin hakuprosessi ja automaattinen tekoälyhaastattelu etenevät?',
          paragraphs: [
            'Hakuprosessi koostuu neljästä vaiheesta: lataa englanninkielinen CV:si Mercorin roolisivulle, suorita noin 20 minuutin automaattinen tekoälyvideohaastattelu sekä mahdollinen alakohtainen testi, siirry osaajapooliin odottamaan sopivaa asiakasprojektia ja vahvista henkilöllisyytesi sekä Stripe-tili, kun sinut valitaan projektiin.',
            'Suosittelen suhtautumaan tekoälyhaastatteluun kuin oikeaan asiantuntijahaastatteluun: kerro konkreettisista projekteistasi ja perustele ratkaisutapasi selkeästi ääneen. Koska projektien määrä vaihtelee tekoälylaboratorioiden tarpeiden mukaan, mikään alusta ei takaa säännöllisiä viikkotunteja.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Maksaako Mercoriin hakeminen tai tekoälyhaastattelu jotakin?',
          answer:
            'Ei. Hakeminen, automaattinen videohaastattelu ja osaajapooliin liittyminen ovat täysin maksuttomia.',
        },
        {
          question: 'Tarvitsenko Y-tunnuksen tehdessäni työtä Mercorille Suomesta?',
          answer:
            'Voit ilmoittaa tulot Verohallinnolle (Vero.fi) joko yksityishenkilönä muuna ansiotulona tai toiminimen (Y-tunnus) kautta. Jos vuotuinen YEL-työtulosi ylittää 9 423 € (2026), YEL-vakuutus on lakisääteisesti pakollinen.',
        },
        {
          question: 'Kuinka nopeasti Mercorilta saa töitä haastattelun jälkeen?',
          answer:
            'Projektin löytyminen voi kestää muutamasta päivästä useisiin viikkoihin tai pidempään riippuen erikoisalasi kysynnästä; osaajapooliin pääsy ei takaa työtunteja.',
        },
        {
          question: 'Vaikuttaako suosittelulinkkisi käyttööni tai palkkaani?',
          answer:
            'Ei. Ilmoitetut tuntipalkat ja hakuprosessi ovat täsmälleen samat riippumatta siitä, käytätkö suosittelulinkkiä vai suoraa linkkiä.',
        },
      ],
    },
    mindrift: {
      slug: 'mindrift',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      title: 'Mindrift kokemuksia & palkka (2026): Suomi-opas | Edithsi',
      metaDescription:
        'Miten Mindrift toimii Suomessa? Tarkistetut (2026-11-05) palkkiot ($15–100+/h), Toloka AI BV:n tehtävämaksut, 90+ alaa ja verotusohjeet.',
      h1: 'Miten Mindrift toimii? Ilmoitetut palkat ($15–100+/h) & tehtävät',
      directAnswer:
        'Mindrift (mindrift.ai) on Toloka AI BV:n ylläpitämä tekoälyn koulutusalusta, joka palkkaa kirjoittajia ja yli 90 erikoisalan asiantuntijoita laatimaan kehotteita, arvioimaan kielimallien vastauksia ja muokkaamaan tekstejä ilmoitetulla tasolla $15–100+/h (tarkistettu 2026-11-05). Alusta hyväksyy etätekijöitä Suomesta ja muualta EU/ETA-alueelta yli 20 kielellä, mutta sen lääketieteen (Medicine) linja edellyttää yhdysvaltalaista lääkärinlupaa.',
      fairnessDisclosure:
        'En saa Mindriftiltä lainkaan suosittelupalkkiota tai komissiota ($0). Saan suosittelupalkkioita ainoastaan Mercorilta (koodi 02e0c12a-d634-4738-9686-04f28f31f52b), ja arvioin Mindriftin täsmälleen samoilla kriteereillä, julkisilla lähteillä ja tarkistuspäivämäärällä (2026-11-05) kuin kaikki muutkin alustat.',
      sections: [
        {
          h2: 'Millaista tekoälyn koulutustyötä ja mitä aloja Mindrift tarjoaa?',
          paragraphs: [
            'Toloka AI BV:n hallinnoima Mindrift keskittyy vaativaan tekstintuotantoon, tekoälyvastausten faktantarkistukseen, perusteluiden kirjoittamiseen ja vastausten muokkaamiseen yli 90 akateemisella ja ammatillisella erikoisalalla.',
            'Kun tarkistin mindrift.ai-sivuston 2026-11-05, keskeisiä hakualoja olivat STEM-tutkimus, ohjelmointi (Coding), liikkeenjohdon konsultointi (Management Consulting MBB- ja seniorikonsulteille), oikeustiede, luova kirjoittaminen ja editointi, kielitiede (yli 20 kieltä) sekä lääketiede.',
          ],
        },
        {
          h2: 'Mitkä ovat Mindriftin ilmoitetut palkkiot ja miten tehtäväkohtainen maksu ja Suomen verotus toimivat?',
          paragraphs: [
            'Mindriftin julkisella sivustolla (tarkistettu 2026-11-05) perustason kirjoitus- ja arviointitehtävien tasoksi ilmoitetaan $15–30/h ja erikoisalojen asiantuntijoille (Domain Experts) $60–100+/h. Alakohtaisissa esimerkeissä mainitaan jopa $100/h yhdysvaltalaisille lääkäreille, jopa $8 000/kk liikkeenjohdon konsulteille, jopa $6 400/kk ($60–100+/h) STEM-asiantuntijoille ja jopa $5 400/kk ($60–100+/h) koodaajille.',
            'Tuntikirjauksen sijaan Mindrift maksaa kahden viikon välein (bi-weekly) hyväksytyistä tehtävistä, ja jokaisen tehtävän palkkio näkyy ennen aloittamista (tarkka maksunvälittäjä on julkisella etusivulla TBD ja vahvistetaan perehdytyksessä). Suomessa asuvan tulee ilmoittaa kaikki maksetut palkkiot Verohallinnolle (Vero.fi), seurata YEL-työtulorajaa (9 423 € vuonna 2026) ja huomioida tulot mahdollisissa Kelan etuuksissa.',
          ],
        },
        {
          h2: 'Voivatko Suomessa ja Euroopassa asuvat hakea Mindriftiin?',
          paragraphs: [
            'Kyllä. Mindrift rekrytoi maailmanlaajuisesti yli 20 kielellä, mukaan lukien Suomessa ja EU/ETA-alueella asuvat tekijät (Toloka Platforms Eligibility -ehtojen puitteissa). Koska taustayhtiö Toloka AI BV on rekisteröity Alankomaihin, alusta on eurooppalaisille freelancereille tuttu toimija.',
            'Huomioi kuitenkin roolikohtaiset rajoitukset: esimerkiksi lääketieteen (Medicine) hakuilmoitus edellyttää Yhdysvalloissa laillistettua lääkäriä, kun taas STEM-, koodaus-, konsultointi- ja kieliroolit ovat avoinna suomalaisille osaajille.',
          ],
        },
        {
          h2: 'Miten Mindriftin hakuprosessi ja testitehtävät etenevät?',
          paragraphs: [
            'Hakeminen etenee kolmessa vaiheessa: lähetä CV:si osoitteessa mindrift.ai ja valitse erikoisalasi sekä kielesi, suorita alakohtainen tai kielellinen näyttökoe ja käy läpi alustan perehdytys, jonka jälkeen pääset valitsemaan avoimia tehtäviä.',
            'Koska palkkio maksetaan valmiista ja hyväksytystä tehtävästä, todellinen tuntiansiosi riippuu siitä, kuinka huolellisesti ja nopeasti omaksut projektin ohjeistuksen. Tehtäväjonojen pituus vaihtelee asiakkaiden tilauskausien mukaan.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Mikä yritys ylläpitää Mindrift-alustaa?',
          answer:
            'Mindriftiä ylläpitää alankomaalainen Toloka AI BV.',
        },
        {
          question: 'Maksetaanko Mindriftissä tuntipalkkaa vai tehtäväpalkkiota?',
          answer:
            'Mindrift maksaa tehtäväkohtaisen palkkion kahden viikon välein; tehtävän hinta näytetään etukäteen ja se on mitoitettu $15–30/h (yleistaso) tai $60–100+/h (erikoisosaajat) vertailutason mukaan.',
        },
        {
          question: 'Voiko suomalainen lääkäri hakea Mindriftin Medicine-linjalle?',
          answer:
            'Tarkistuspäivänä 2026-11-05 Mindriftin julkinen Medicine-haku edellytti yhdysvaltalaista lääkärinlupaa, mutta suomalaiset asiantuntijat voivat hakea STEM-, koodaus-, konsultointi- ja kielitehtäviin.',
        },
        {
          question: 'Saanko provisiota, jos haet Mindriftiin tämän sivun kautta?',
          answer:
            'En. En saa Mindriftiltä lainkaan palkkiota ($0), vaan linkitän suoraan viralliselle mindrift.ai-sivustolle.',
        },
      ],
    },
    alignerr: {
      slug: 'alignerr',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      title: 'Alignerr kokemuksia & palkka (2026): Henkilöllisyys | Edithsi',
      metaDescription:
        'Toimiiko Alignerr Suomessa? Tarkistetut (2026-11-05) palkat ($15–120/h), Labelbox-projektit ja tärkeä Persona US-henkilökorttirajoitus.',
      h1: 'Voiko Alignerriin hakea Suomesta? Palkat, ID-sääntö & arvio',
      directAnswer:
        'Alignerr (alignerr.com) on Labelbox, Inc.:n ylläpitämä alusta, joka palkkaa asiantuntijoita kielimallien hienosäätöön, koodaus- ja etiikkatehtävien arviointiin sekä kielidatan tuottamiseen ilmoitetulla tuntipalkalla $15–120/h (etusivun merkki mainitsee $80/hr keskiarvon; tarkistettu 2026-11-05). Vaikka yleinen UKK toivottaa kansainväliset hakijat tervetulleiksi, Alignerrin virallinen Visa FAQ ilmoittaa hyväksyvänsä Persona-tunnistautumisessa vain yhdysvaltalaiset henkilöllisyystodistukset sekä US/Kanada-puhelinnumerot – tämä rajoitus suomalaisten hakijoiden on syytä tarkistaa heti alussa.',
      fairnessDisclosure:
        'En saa Alignerrilta lainkaan suosittelupalkkiota ($0). Saan suosittelupalkkioita vain Mercorilta (koodi 02e0c12a-d634-4738-9686-04f28f31f52b), ja arvioin Alignerrin täsmälleen samoilla kriteereillä, virallisilla lähteillä ja tarkistuspäivämäärällä (2026-11-05) kuin kaikki muutkin alustat.',
      sections: [
        {
          h2: 'Millaista tekoälyn koulutustyötä ja mitä aloja Alignerr tarjoaa?',
          paragraphs: [
            'Labelbox, Inc.:n omistama Alignerr yhdistää asiantuntijat suoraan Labelbox-alustalla tehtävään generatiivisen tekoälyn arviointi- ja kalibrointityöhön. Tehtäviin kuuluu ohjelmointihaasteiden suunnittelu, tekoälyn etiikan ja turvallisuuden arviointi, kartta- ja paikkatietoanalyysi sekä ääni- ja kielidatan tuottaminen.',
            'Kun tarkistin alignerr.com-sivuston 2026-11-05, julkiset tehtäväkortit kattoivat ohjelmistokehityksen (Coding & Software Engineering), STEM- ja tutkimustyön (tohtorit ja tutkijat), eettisen arvioinnin ja datan luokittelun (AI Ethics Reviewer, Data Labeling Specialist, Map & Location Data Analyst), kielet ja äänen sekä rekrytoinnin (Talent Acquisition).',
          ],
        },
        {
          h2: 'Mitkä ovat Alignerrin ilmoitetut tuntipalkat ja miten maksut ja verotus toimivat?',
          paragraphs: [
            'Alignerrin julkisissa tehtäväkorteissa (tarkistettu 2026-11-05) ilmoitetut tuntipalkat ovat $40–120/h AI Ethics Reviewer-, Data Labeling Specialist- ja Map & Location Data Analyst -rooleissa, $25–35/h kieliasiantuntijoille (AI Language Expert) sekä $15–25/h rekrytointitehtävissä. Coding- ja STEM-roolien tarkka tuntipalkka määritellään projektikohtaisesti (TBD julkisessa UKK:ssa; etusivulla mainitaan $80/hr keskipalkka).',
            'Tekijät toimivat itsenäisinä yrittäjinä/toimeksiantajina, ja projektin tarkka tuntihinta näkyy ennen työn aloittamista. Koska julkinen UKK ei erittele maksunvälittäjää tai maksutiheyttä ennen sopimusvaihetta (TBD), mahdollisten suomalaisten tekijöiden on ilmoitettava kaikki ulkomaiset palkkiot Verohallinnolle (Vero.fi) ja huolehdittava YEL-velvoitteista (raja 9 423 € vuonna 2026).',
          ],
        },
        {
          h2: 'Voiko Suomessa asuva läpäistä Alignerrin Persona-henkilöllisyystarkistuksen?',
          paragraphs: [
            'Tämä on tärkein yksityiskohta Alignerrissa 2026-11-05: vaikka yleiset markkinointisivut kutsuvat hakijoita ympäri maailmaa, Alignerrin virallinen Visa/ID FAQ toteaa suoraan, että Persona-tunnistautumisessa hyväksytään vain Yhdysvaltain ajokortti, osavaltion henkilökortti, US-työlupa tai Green Card, ja puhelinvahvistus tukee vain Yhdysvaltain ja Kanadan numeroita.',
            'Jos asut Suomessa etkä omista yhdysvaltalaista henkilöllisyystodistusta ja US/Kanada-puhelinnumeroa, rekisteröitymisesi voi pysähtyä Persona-vaiheeseen, ellei kyseinen kieliprojekti tee poikkeusta. Tarkista siis omalta tililtäsi heti alussa, hyväksytäänkö Suomen passi ennen kuin käytät aikaa testeihin.',
          ],
        },
        {
          h2: 'Miten Alignerrin haku ja Zara-tekoälyhaastattelu toimivat?',
          paragraphs: [
            'Hakuprosessi alkaa kirjautumalla Google-tilillä osoitteessa app.alignerr.com, lataamalla CV (joka täyttää profiilin noin 30 sekunnissa), suorittamalla Persona-henkilöllisyystarkistus sekä tekemällä automaattinen Zara™-haastattelu tai alakohtaiset taitotestit ennen sopimus- ja laskutustietojen täyttämistä.',
            'Kuten muillakin alustoilla, hyväksytty haastattelu ei vielä takaa työtunteja, vaan projektit käynnistyvät Labelboxin asiakastarpeiden mukaan.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Kuka omistaa Alignerr-alustan?',
          answer:
            'Alignerria ylläpitää yhdysvaltalainen Labelbox, Inc.',
        },
        {
          question: 'Miksi suomalainen hakija voi jäädä jumiin Alignerrin tunnistautumisessa?',
          answer:
            'Tarkistuspäivänä 2026-11-05 Alignerrin virallinen Visa FAQ ilmoitti hyväksyvänsä Persona-tarkistuksessa vain yhdysvaltalaiset henkilökortit/työluvat sekä US/Kanada-puhelinnumerot.',
        },
        {
          question: 'Mitä tuntipalkkoja Alignerr ilmoittaa julkisesti?',
          answer:
            'Julkiset tehtäväkortit (2026-11-05) ilmoittavat $40–120/h etiikka-, luokittelu- ja kartta-analyytikoille, $25–35/h kieliasiantuntijoille ja $15–25/h rekrytoijille; koodaus- ja STEM-palkat sovitaan projektikohtaisesti.',
        },
        {
          question: 'Saanko palkkion, jos rekisteröidyt Alignerriin?',
          answer:
            'En. En saa Alignerrilta lainkaan komissiota ($0).',
        },
      ],
    },
    outlier: {
      slug: 'outlier',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      title: 'Outlier AI kokemuksia & palkka (2026): Suomi-opas | Edithsi',
      metaDescription:
        'Miten Outlier AI toimii Suomessa? Tarkistettu (2026-11-05) opas tiistaimaksuihin (PayPal/AirTM), 50+ maan kelpoisuuteen ja Suomen verotukseen.',
      h1: 'Miten Outlier AI toimii? Viikkomaksut, testit & Suomi-opas',
      directAnswer:
        'Outlier (outlier.ai), jota ylläpitää Scale AI / Smart Ecosystems, on laaja tekoälyn koulutusalusta, jossa asiantuntijat laativat haastavia tehtäväpareja, arvostelukriteerejä ja kielimallien vertailuja koodauksen, STEM-aineiden ja yli 50 maan kielten parissa. Tarkistuspäivänä 2026-11-05 Outlier ei julkaise yhtä kiinteää tuntipalkkahaarukkaa julkisella etusivullaan (merkitty TBD, sillä palkka näytetään projektikohtaisesti ennen työn aloitusta), mutta se hyväksyy avoimesti hakijoita Suomesta ja maksaa palkkiot viikoittain tiistaisin PayPalin, AirTM:n tai pankkisiirron kautta.',
      fairnessDisclosure:
        'En saa Outlierilta lainkaan suosittelupalkkiota ($0). Saan suosittelupalkkioita ainoastaan Mercorilta (koodi 02e0c12a-d634-4738-9686-04f28f31f52b), ja arvioin Outlierin täsmälleen samoilla kriteereillä, virallisilla UKK-lähteillä ja tarkistuspäivämäärällä (2026-11-05) kuin kaikki muutkin alustat.',
      sections: [
        {
          h2: 'Millaista tekoälyn koulutustyötä ja mitä aloja Outlier tarjoaa?',
          paragraphs: [
            'Scale AI / Smart Ecosystemsin hallinnoima Outlier keskittyy kielimallien vahvistusoppimiseen (RLHF), vaativien kehotteiden kirjoittamiseen, monivaiheisten keskustelujen pisteyttämiseen ja yksityiskohtaisten arvostelurubriikkien laatimiseen.',
            'Kun tarkistin outlier.ai-sivuston 2026-11-05, keskeisiä hakualoja olivat ohjelmistokehitys (Coding), STEM-tieteet (matematiikka, fysiikka, kemia, biologia), kielet yli 50 maassa (mukaan lukien suomi ja muut eurooppalaiset kielet) sekä yleistason päättely ja kirjoittaminen (vähintään alempi korkeakoulu- tai opistotutkinto vaaditaan; kandidaatin, maisterin tai tohtorin tutkinto on eduksi).',
          ],
        },
        {
          h2: 'Miten Outlierin projektipalkkiot, tiistaimaksut ja Suomen verotus toimivat?',
          paragraphs: [
            'Outlierin julkisessa UKK:ssa (outlier.ai/faq, tarkistettu 2026-11-05) yleinen palkkahaarukka on merkitty TBD, koska tuntipalkka määräytyy asiantuntijuustason, projektin vaativuuden ja asuinmaan mukaan. Näet kuitenkin aina tarkan tunti- tai tehtäväpalkkion omalla hallintapaneelillasi ennen kuin aloitat minkään projektin.',
            'Maksukäytäntö on selkeä: Outlier maksaa palkkiot viikoittain tiistaisin (edellisen tiistain ja maanantain klo 24.00 UTC välillä tehdystä työstä) PayPalin, AirTM:n tai ACH-siirron kautta. Suomessa asuvan tulee ilmoittaa kaikki PayPaliin tai AirTM:ään maksetut tulot euroiksi muunnettuina Verohallinnolle (Vero.fi), seurata YEL-rajaa (9 423 € vuonna 2026) ja ilmoittaa tulot Kelalle, jos saa soviteltuja etuuksia.',
          ],
        },
        {
          h2: 'Voivatko Suomessa ja Euroopassa asuvat hakea Outlieriin?',
          paragraphs: [
            'Kyllä. Outlier toimii yli 50 maassa, mukaan lukien Suomi ja valtaosa EU/ETA-maista, ja hyväksyy tunnistautumisessa asuinmaasi virallisen henkilöllisyystodistuksen (kuten Suomen passin tai henkilökortin) sekä suomalaisen matkapuhelinnumeron.',
            'Tämä tekee rekisteröitymisestä Suomessa asuvalle huomattavasti suoraviivaisempaa kuin alustoilla, jotka vaativat yhdysvaltalaista henkilökorttia. Muista kuitenkin, että Outlier edellyttää työskentelyä rekisteröidystä asuinmaastasi käsin.',
          ],
        },
        {
          h2: 'Miten Outlierin haku, taitotestit ja tehtäväjonot (Empty Queue) toimivat?',
          paragraphs: [
            'Rekisteröidy osoitteessa outlier.ai, tuo CV:si ja LinkedIn-tietosi, vahvista henkilöllisyytesi suomalaisella henkilöllisyystodistuksella ja puhelinnumerolla sekä suorita 30–90 minuutin yleistestit ja projektikohtaiset pätevyyskokeet.',
            'Outlierille on tyypillistä, että aktiiviset työjaksot ja tyhjät tehtäväjonot ("Empty Queue" eli EQ) vuorottelevat nopeasti asiakasprojektien vaihtuessa. Siksi suosittelen pitämään Outlierin rinnalla muita osaajapooleja, kuten Mercoria tai Mindriftiä.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Mikä yritys omistaa Outlier AI:n?',
          answer:
            'Outlieria ylläpitää yhdysvaltalainen Scale AI / Smart Ecosystems.',
        },
        {
          question: 'Milloin ja miten Outlier maksaa palkkiot Suomeen?',
          answer:
            'Outlier maksaa palkkiot viikoittain tiistaisin PayPalin tai AirTM:n kautta.',
        },
        {
          question: 'Käykö Suomen passi tai henkilökortti Outlierin tunnistautumisessa?',
          answer:
            'Kyllä. Outlier hyväksyy asuinmaasi voimassa olevan virallisen henkilöllisyystodistuksen ja paikallisen matkapuhelinnumeron.',
        },
        {
          question: 'Miksi Outlierin palkka on merkitty vertailutaulukossa TBD?',
          answer:
            'Koska tarkistuspäivänä 2026-11-05 Outlierin julkinen UKK ei ilmoita yhtä kiinteää dollariväliä, vaan näyttää projektikohtaisen tuntipalkan kirjautuneille käyttäjille ennen tehtävän aloittamista.',
        },
      ],
    },
    micro1: {
      slug: 'micro1',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      title: 'micro1 kokemuksia & palkka (2026): Tekoälyopas | Edithsi',
      metaDescription:
        'Miten micro1 toimii Suomessa? Tarkistettu (2026-11-05) opas Realm-, Cortex- ja Medical Index -ohjelmiin, tekoälyhaastatteluun ja verotukseen.',
      h1: 'Miten micro1 toimii tekoälykouluttajille? Haastattelu & roolit',
      directAnswer:
        'micro1 (micro1.ai/experts), jota ylläpitää micro1 Inc., rekrytoi kansainvälisiä ohjelmistokehityksen, rahoituksen, terveydenhuollon, juridiikan ja akateemisen tutkimuksen asiantuntijoita tuottamaan koulutusdataa tekoälylaboratorioille (Realm, Cortex ja Medical Index). Tarkistuspäivänä 2026-11-05 micro1:n julkinen yleissivu merkitsee palkkahaarukan muodossa TBD ("Competitive compensation for expert knowledge", tarkat tuntipalkat ilmoitetaan roolikohtaisesti) ja ottaa vastaan hakemuksia myös Suomesta ja muualta Euroopasta.',
      fairnessDisclosure:
        'En saa micro1-alustalta lainkaan suosittelupalkkiota ($0). Saan suosittelupalkkioita vain Mercorilta (koodi 02e0c12a-d634-4738-9686-04f28f31f52b), ja arvioin micro1:n täsmälleen samoilla kriteereillä, julkisilla lähteillä ja tarkistuspäivämäärällä (2026-11-05) kuin kaikki muutkin alustat.',
      sections: [
        {
          h2: 'Millaista tekoälyn koulutustyötä ja mitä aloja micro1 tarjoaa?',
          paragraphs: [
            'micro1 Inc. tuottaa asiantuntijadataa ja arviointiympäristöjä johtaville tekoälylaboratorioille. Julkisella micro1.ai/experts-sivulla (tarkistettu 2026-11-05) esitellään erityisesti Realm (vahvistusoppimisen ympäristöt), Cortex (kontekstuaalinen agenttien arviointi), Medical Index (lääketieteelliset vertailuarvot) sekä robotiikkadata.',
            'Keskeiset rekrytointialat ovat ohjelmistokehitys (Software Engineering), rahoitus (Finance), terveydenhuolto ja lääketiede (Healthcare & Medicine), oikeustiede (Legal) sekä akateeminen tutkimus ja robotiikka.',
          ],
        },
        {
          h2: 'Miten micro1:n ilmoitetut palkat, maksut ja Suomen verotus toimivat?',
          paragraphs: [
            'Kun tarkistin micro1.ai/experts-yleissivun 2026-11-05, sivusto ei ilmoittanut yhtä yleistä tuntipalkkahaarukkaa (merkitty TBD yleissivulla maininnalla "Competitive compensation for expert knowledge", kun taas yksittäisten avointen roolien palkat julkaistaan osoitteessa micro1.ai/experts/opportunities).',
            'Myös tarkka maksurytmi ja maksunvälittäjä ovat julkisella yleissivulla TBD ja vahvistetaan hakijaportaalissa perehdytyksen yhteydessä. Suomessa asuva asiantuntija toimii itsenäisenä toimeksiantajana, joten bruttotulot ilmoitetaan Verohallinnolle (Vero.fi) ja YEL-vakuutusvelvollisuus (9 423 € vuonna 2026) sekä Kela-vaikutukset hoidetaan itse.',
          ],
        },
        {
          h2: 'Voivatko Suomessa ja Euroopassa asuvat asiantuntijat hakea micro1:een?',
          paragraphs: [
            'Kyllä. micro1 rakentaa maailmanlaajuista etäasiantuntijayhteisöä, ja Suomessa sekä EU/ETA-alueella asuvat ammattilaiset voivat hakea avoimiin asiantuntijarooleihin ja suorittaa automaattisen tekoälyhaastattelun.',
            'Koska yksittäisillä asiakasprojekteilla voi olla maakohtaisia rajoituksia (julkisella yleissivulla TBD projektikohtaisesti), tarkista aina kyseisen hakuilmoituksen maavaatimukset ennen aloittamista.',
          ],
        },
        {
          h2: 'Miten micro1:n automaattinen tekoälyhaastattelu ja perehdytys toimivat?',
          paragraphs: [
            'Hakuprosessi etenee neljässä vaiheessa: hae sopivaa asiantuntijaroolia osoitteessa micro1.ai/experts/opportunities, suorita automaattinen tekoälyhaastattelu (voit harjoitella etukäteen sivulla micro1.ai/interview-prep), tee sopimus- ja perehdytysvaihe, ja aloita työskentely sopivissa tekoälylaboratorioiden projekteissa.',
            'Koska sekä micro1 että Mercor käyttävät noin 20 minuutin automaattista tekoälyhaastattelua, selkeä englanninkielinen esitys omasta erityisosaamisestasi auttaa molemmissa hauissa.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Mitä ovat micro1:n Realm, Cortex ja Medical Index?',
          answer:
            'Ne ovat micro1:n tutkimus- ja dataohjelmia: Realm keskittyy vahvistusoppimisympäristöihin, Cortex tekoälyagenttien arviointiin ja Medical Index lääketieteellisiin vertailutesteihin.',
        },
        {
          question: 'Miksi micro1:n palkka on merkitty taulukossa TBD?',
          answer:
            'Koska tarkistuspäivänä 2026-11-05 micro1:n julkinen /experts-yleissivu ei ilmoita yhtä kiinteää tuntipalkkahaarukkaa, vaan ilmoittaa palkat roolikohtaisesti avoimissa työpaikoissa.',
        },
        {
          question: 'Voinko harjoitella micro1:n tekoälyhaastattelua etukäteen?',
          answer:
            'Kyllä. micro1 tarjoaa virallisen harjoittelusivun osoitteessa micro1.ai/interview-prep.',
        },
        {
          question: 'Saanko suosittelupalkkion, jos haet micro1:een?',
          answer:
            'En. En saa micro1:ltä lainkaan palkkiota ($0), vaan linkitän suoraan viralliselle micro1.ai/experts-sivulle.',
        },
      ],
    },
    'handshake-ai': {
      slug: 'handshake-ai',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      title: 'Handshake AI kokemuksia & palkka (2026): US-rajoitus | Edithsi',
      metaDescription:
        'Kuka voi hakea Handshake AI (MOVE) -ohjelmaan? Tarkistetut (2026-11-05) palkat (jopa $150/h) ja tiukka Yhdysvaltain työlupavaatimus.',
      h1: 'Kuka voi liittyä Handshake AI:hin? Palkka ($150/h) & US-raja',
      directAnswer:
        'Handshake AI (joinhandshake.com/move-program/), jota ylläpitää Handshake (Handshake AI Fellowship / MOVE Program), maksaa korkeakoulututkinnon suorittaneille jopa $17–150/h kielimallien koulutuksesta ja validoinnista (tarkistettu 2026-11-05). Ohjelma on kuitenkin tiukasti VAIN YHDYSVALLOISSA ASUVILLE (US-ONLY): osallistujan on asuttava Yhdysvalloissa ja omistettava Handshaken hyväksymä US-työlupa, joten Suomessa ja Euroopassa asuvat eivät voi osallistua.',
      fairnessDisclosure:
        'En saa Handshake AI:lta lainkaan suosittelupalkkiota ($0). Saan suosittelupalkkioita vain Mercorilta (koodi 02e0c12a-d634-4738-9686-04f28f31f52b), ja pidän Handshake AI:n mukana vertailussa tarkistuspäivämäärällä 2026-11-05, jotta suomalaiset lukijat näkevät heti, miksi se on rajattu Yhdysvalloissa asuville.',
      sections: [
        {
          h2: 'Millaista tekoälyn koulutustyötä ja mitä aloja Handshake AI tarjoaa?',
          paragraphs: [
            'Korkeakouluverkosto Handshaken ylläpitämä Handshake AI Fellowship (MOVE Program) rekrytoi Associate’s-, kandidaatin-, maisterin-, tohtorin- ja postdoc-tutkinnon suorittaneita tekoälymallien validointiin (MOVE), kehotteiden laadintaan ja erikoisalojen arviointiin.',
            'Kun tarkistin joinhandshake.com/move-program/-sivun 2026-11-05, haettavia linjoja olivat ohjelmistokehitys (Software Engineering), pelinkehitys ja piirilevytyökalut (Game Development & PCB Tool Engineering), filosofia ja humanistiset tieteet (tohtorit ja postdocit), rahoitus (FP&A Analyst), energia-ala sekä yleistason arviointi.',
          ],
        },
        {
          h2: 'Mitkä ovat Handshake AI:n ilmoitetut tuntipalkat ja miten maksu toimii?',
          paragraphs: [
            'Julkisella MOVE Program -sivulla (tarkistettu 2026-11-05) ilmoitetut enimmäistuntipalkat ovat $17–150/h linjasta riippuen: Software Engineer Fellow (jopa $150/h), Game Developer / PCB Tool Specialist (jopa $125/h), Philosophy Expert tohtoreille ja postdoceille (jopa $120/h), FP&A Analyst / Energy Professional (jopa $80/h) sekä yleistason AI Evaluation Specialist (jopa $17/h).',
            'Handshake kertoo maksaneensa yli $500M+ palkkioita ja maksaa tuntipalkkaa itsenäisenä toimeksiantajana (tarkka maksukanava julkisella etusivulla on TBD perehdytykseen asti).',
          ],
        },
        {
          h2: 'Miksi Suomessa ja Euroopassa asuvat eivät voi osallistua Handshake AI:hin?',
          paragraphs: [
            'Handshake AI:lla on ehdoton maantieteellinen ja juridisesti sitova rajoitus. Tarkistuspäivänä 2026-11-05 virallinen kelpoisuusehto osoitteessa joinhandshake.com/move-program/ kuului: "To participate in the Handshake AI Fellowship, you must be based in the U.S. and have a valid work authorization that can be supported by Handshake. F-1 students who are eligible for CPT or OPT may be eligible. STEM OPT is not supported."',
            'Jos asut Suomessa tai muualla Euroopassa ilman Yhdysvalloissa asumista ja voimassa olevaa US-työlupaa, älä käytä aikaasi Handshake AI -hakemukseen. Suuntaa sen sijaan alustoille, jotka hyväksävät suomalaiset hakijat, kuten Mercor, Mindrift, Outlier tai micro1.',
          ],
        },
        {
          h2: 'Miten Handshake AI:n hakuprosessi toimii Yhdysvalloissa asuville?',
          paragraphs: [
            'Yhdysvalloissa asuville ja US-työluvan omaaville hakuprosessi on kolmivaiheinen: kirjaudu osoitteessa joinhandshake.com/move-program/, vahvista korkeakoulututkintosi ja Yhdysvaltain työlupasi, ja hae sopivaan fellowship-linjaan.',
            'Kuten kaikissa tekoälyn koulutusohjelmissa, työtunnit riippuvat käynnissä olevista projekteista eikä niitä taata.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Voinko hakea Handshake AI:hin Suomesta tai muualta EU:sta?',
          answer:
            'Et. Handshake AI vaatii, että asut fyysisesti Yhdysvalloissa ja sinulla on tuettu Yhdysvaltain työlupa.',
        },
        {
          question: 'Hyväksyykö Handshake AI yhdysvaltalaisen F-1 STEM OPT -statuksen?',
          answer:
            'Ei. Virallisen sivun mukaan (tarkistettu 2026-11-05) CPT ja tavallinen OPT voivat kelvata, mutta STEM OPT ei ole tuettu.',
        },
        {
          question: 'Mikä on Handshake AI:n korkein ilmoitettu tuntipalkka?',
          answer:
            'Tarkistuspäivänä 2026-11-05 Software Engineer Fellow -linjan enimmäispalkka oli jopa $150/h.',
        },
        {
          question: 'Miksi esittelen Handshake AI:n suomalaisella sivustolla, jos se on vain Yhdysvalloissa?',
          answer:
            'Koska suomalaiset korkeakoulutetut näkevät usein Handshake AI:n $150/h-mainoksia sosiaalisessa mediassa; kertomalla US-only-rajoituksen suoraan säästän lukijoiden aikaa.',
        },
      ],
    },
  },
  sv: {
    mercor: {
      slug: 'mercor',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Mercor omdöme & lön (2026): Guide för EU | Edithsi',
      metaDescription:
        'Är Mercor seriöst i Sverige och Finland? Kontrollerade (2026-11-05) arvoden ($35–180/h), Stripe-utbetalning, AI-intervju och skatteregler.',
      h1: 'Är Mercor seriöst? Angivna arvoden, hur det fungerar & EU-guide (2026)',
      directAnswer:
        'Mercor (work.mercor.com) är en amerikansk talangplattform som anlitar distansspecialister för utvärdering av AI-modeller (evals), bedömningsmatriser och promptdesign i stående talangpooler med angivna arvoden på $35–180/h (Finance-roller prissätts per projekt; kontrollerat 2026-11-05). Uppdragstagare i Sverige, Finland och övriga EU/EES kan ansöka på distans, men enskilda kundprojekt varierar i tillgänglighet och garanterar aldrig fasta veckotimmar.',
      fairnessDisclosure:
        'Jag får en värvningsersättning (referral fee) från Mercor om någon ansöker via min värvningskod (02e0c12a-d634-4738-9686-04f28f31f52b) och uppfyller deras krav. Jag tjänar $0 från övriga fem plattformar (micro1, Outlier, Alignerr, Handshake AI, Mindrift) och granskar varje plattform utifrån exakt samma kriterier, officiella länkar och kontrollera-datum (2026-11-05).',
      sections: [
        {
          h2: 'Vilken typ av AI-träningsarbete och ämnesområden erbjuder Mercor?',
          paragraphs: [
            'Mercor rekryterar kvalificerade yrkesspecialister till stående talangpooler snarare än öppna mikrojobb. Arbetet består av domänspecifik utvärdering av språkmodeller (evals), att skriva komplexa resonemangspromptar, betygsätta AI-svar mot strikta kriterier och hitta faktafel.',
            'Vid min kontroll den 2026-11-05 på work.mercor.com har Mercor sju huvudpooler: medicin (läkare, sjuksköterskor, tandläkare, apotekare), juridik (advokater och jurister), mjukvaruutveckling, finans (redovisning, revision, corporate finance, aktuarier), kontorsprogramvara, språk och ljud (bland annat finska, franska, spanska, italienska, portugisiska, polska och nederländska) samt generalistroller.',
          ],
        },
        {
          h2: 'Vilka är Mercors angivna timarvoden och hur fungerar utbetalning och skatt?',
          paragraphs: [
            'I Mercors öppna annonser (kontrollerat 2026-11-05) ligger angivna timarvoden på $35–180/h: Medical Expert ($60–180/h), Legal Expert för licensierade advokater ($100–150/h), Legal Expert ($60–150/h), Software Engineering Expert ($70–150/h), Office & Productivity Software Expert ($60–70/h), Generalist Expert ($40–70/h) och Language & Audio Expert ($35–50/h). För Finance Expert sätts arvodet per projekt.',
            'Utbetalning sker veckovis i USD via Stripe som självständig uppdragstagare. Eftersom ingen källskatt dras måste du själv deklarera inkomsten: i Sverige redovisar du till Skatteverket (via F-skatt/enskild firma eller som hobby/tjänsteinkomst med egenavgifter), och i Finland till Skatteförvaltningen (Vero.fi) samt bevakar YEL-gränsen (€9 423 år 2026).',
          ],
        },
        {
          h2: 'Kan uppdragstagare i Finland, Sverige och Europa ansöka till Mercor?',
          paragraphs: [
            'Ja. Mercor tar emot ansökningar på distans från Sverige, Finland, övriga EU/EES, Storbritannien, USA och Kanada. Språkpoolen söker uttryckligen modersmålstalare i bland annat finska och stora europeiska språk, och kodnings- samt generalistpoolerna är öppna internationellt.',
            'Tänk på att en plats i talangpoolen inte innebär ett omedelbart projektkontrakt. Vissa medicinska eller juridiska uppdrag kräver amerikansk yrkeslicens, medan mjukvaru-, analys- och språkprojekt löpande tar in europeiska konsulter.',
          ],
        },
        {
          h2: 'Hur fungerar ansökan och den automatiserade AI-intervjun hos Mercor?',
          paragraphs: [
            'Ansökan sker i fyra steg: ladda upp ditt CV på Mercors rollsida, genomför den automatiserade AI-videointervjun (~20 minuter) samt eventuella ämnesprov, gå med i den stående talangpoolen i väntan på projektmatchning och slutför ID-kontroll samt Stripe-koppling när du matchas.',
            'Förbered dig inför AI-intervjun som inför ett riktigt konsultmöte: beskriv konkreta projekt från ditt CV och förklara hur du resonerar. Eftersom tillgången på timmar styrs av AI-labbens behov bör du aldrig räkna med garanterad heltid.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Kostar det något att ansöka eller göra AI-intervjun på Mercor?',
          answer:
            'Nej. Det är helt kostnadsfritt att ansöka, genomföra videointervjun och stå i Mercors talangpool.',
        },
        {
          question: 'Hur betalar Mercor ut ersättning till Sverige och Finland?',
          answer:
            'Mercor betalar ut veckovis i USD via Stripe direkt till ditt kopplade europeiska bankkonto när du arbetar i ett aktivt projekt.',
        },
        {
          question: 'Behöver jag F-skatt eller företag för att arbeta via Mercor?',
          answer:
            'Du anlitas som självständig uppdragstagare och ansvarar själv för att redovisa inkomst och sociala avgifter till Skatteverket i Sverige eller Vero.fi (samt YEL över €9 423) i Finland.',
        },
        {
          question: 'Påverkar min värvningslänk ditt arvode hos Mercor?',
          answer:
            'Nej. Angivna arvoden och urvalssteg är exakt desamma oavsett om du använder min värvningslänk eller en direktlänk.',
        },
      ],
    },
    mindrift: {
      slug: 'mindrift',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Mindrift omdöme & lön (2026): Toloka AI-guide | Edithsi',
      metaDescription:
        'Hur fungerar Mindrift i Europa? Kontrollerade (2026-11-05) arvoden ($15–100+/h), Toloka AI BV utbetalningar, 90+ områden och skatteregler.',
      h1: 'Hur fungerar Mindrift? Angivna arvoden ($15–100+/h) & uppdrag',
      directAnswer:
        'Mindrift (mindrift.ai) drivs av Toloka AI BV och anlitar skribenter samt ämnesspecialister inom 90+ områden för att skriva promptar, utvärdera AI-svar och redigera text med angivna arvoden på $15–100+/h (kontrollerat 2026-11-05). Plattformen är öppen för distansarbetare i Sverige, Finland och EU/EES på över 20 språk, men medicinlinjen (Medicine) kräver amerikansk läkarlegitimation.',
      fairnessDisclosure:
        'Jag tjänar $0 från Mindrift (ingen värvningslänk eller affiliate-avtal). Jag får endast värvningsersättning från Mercor (kod 02e0c12a-d634-4738-9686-04f28f31f52b) och utvärderar Mindrift med exakt samma kriterier och kontrollera-datum (2026-11-05) som övriga plattformar.',
      sections: [
        {
          h2: 'Vilken typ av AI-träningsarbete och ämnesområden erbjuder Mindrift?',
          paragraphs: [
            'Mindrift, som drivs av Toloka AI BV, fokuserar på kvalificerad textproduktion, faktagranskning, motiverade bedömningar och redigering av AI-genererade svar inom över 90 akademiska och yrkesmässiga områden.',
            'Vid min kontroll den 2026-11-05 på mindrift.ai omfattar huvudspåren STEM-forskning, kodning (Coding), managementkonsulting (strategi, operationer och M&A för MBB/seniora konsulter), juridik, kreativt skrivande, lingvistik (20+ språk) samt medicin.',
          ],
        },
        {
          h2: 'Vilka är Mindrifts angivna arvoden och hur fungerar utbetalning och skatt?',
          paragraphs: [
            'På mindrift.ai (kontrollerat 2026-11-05) anges $15–30/h för generalist- och skrivuppdrag på instegsnivå samt $60–100+/h för ämnesspecialister. Specifika riktmärken anger upp till $100/h för licensierade amerikanska läkare, upp till $8 000/månad för managementkonsulter, upp till $6 400/månad ($60–100+/h) för STEM och upp till $5 400/månad ($60–100+/h) för kodning.',
            'Mindrift betalar ut varannan vecka (bi-weekly) per slutförd uppgift där ersättningen visas innan du startar (exakt betaltjänst på publika startsidan: TBD vid onboarding). I Sverige deklarerar du inkomsten till Skatteverket (F-skatt eller tjänst/egenavgifter) och i Finland till Vero.fi (med YEL-gräns €9 423 år 2026).',
          ],
        },
        {
          h2: 'Är Mindrift öppet för sökande i Finland, Sverige och Europa?',
          paragraphs: [
            'Ja. Mindrift rekryterar globalt på över 20 språk, inklusive uppdragstagare i Sverige, Finland och övriga EU/EES (enligt Toloka Platforms Eligibility). Eftersom Toloka AI BV är ett nederländskt bolag är strukturen välbekant för europeiska frilansare.',
            'Kontrollera dock alltid kraven för respektive spår: medicinspåret kräver amerikansk läkarlicens, medan STEM, kodning, managementkonsulting och språkspår är öppna för europeiska specialister.',
          ],
        },
        {
          h2: 'Hur går ansökan och kvalificeringen till hos Mindrift?',
          paragraphs: [
            'Processen består av tre steg: skicka in ditt CV på mindrift.ai och ange ämnesområde samt språk, genomför ett ämnes- eller skrivtest och slutför onboardingen för att få tillgång till uppgiftskön.',
            'Eftersom du får betalt per godkänd uppgift avgör din noggrannhet och effektivitet din faktiska timförtjänst, och tillgången på uppgifter varierar över tid.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Vilket företag driver Mindrift?',
          answer:
            'Mindrift drivs av Toloka AI BV.',
        },
        {
          question: 'Betalar Mindrift per timme eller per uppgift?',
          answer:
            'Mindrift betalar per godkänd uppgift varannan vecka (bi-weekly), där uppgiftens pris visas i förväg baserat på riktmärken på $15–30/h eller $60–100+/h.',
        },
        {
          question: 'Kan läkare i Sverige eller Finland söka Mindrifts medicinspår?',
          answer:
            'Enligt mindrift.ai (kontrollerat 2026-11-05) kräver medicinspåret amerikansk läkarlegitimation, men europeiska experter kan söka STEM-, kodnings-, konsult- och språkspåren.',
        },
        {
          question: 'Har jag en värvningslänk till Mindrift?',
          answer:
            'Nej. Jag får $0 från Mindrift och länkar direkt till mindrift.ai.',
        },
      ],
    },
    alignerr: {
      slug: 'alignerr',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Alignerr omdöme & lön (2026): ID-krav i EU | Edithsi',
      metaDescription:
        'Är Alignerr öppet i Europa? Kontrollerade (2026-11-05) arvoden ($15–120/h), Labelbox-projekt och viktig varning om amerikanskt ID i Persona.',
      h1: 'Är Alignerr öppet i Europa? Arvoden, ID-regler & granskning',
      directAnswer:
        'Alignerr (alignerr.com), som drivs av Labelbox, Inc., anlitar specialister för att kalibrera generativa AI-modeller, bedöma kod och etik samt skapa språkdata med angivna arvoden på $15–120/h (startsidans märke anger $80/hr i snitt; kontrollerat 2026-11-05). Trots att den allmänna FAQ-sidan välkomnar globala sökande anger Alignerrs officiella Visa FAQ att Persona-verifieringen endast godkänner amerikanska ID-handlingar och telefonnummer från USA/Kanada – en avgörande begränsning för sökande i Europa.',
      fairnessDisclosure:
        'Jag tjänar $0 från Alignerr (ingen affiliate- eller värvningsersättning). Jag får endast värvningsersättning från Mercor (kod 02e0c12a-d634-4738-9686-04f28f31f52b) och granskar Alignerr med samma kriterier och datum (2026-11-05) som alla andra plattformar.',
      sections: [
        {
          h2: 'Vilken typ av AI-träningsarbete och områden erbjuder Alignerr?',
          paragraphs: [
            'Alignerr drivs av Labelbox, Inc. och kopplar ämnesexperter till AI-träningsprojekt på Labelbox-plattformen: kodningsutmaningar, granskning av AI-etik, kart- och platsdataanalys samt röst- och språkdata.',
            'Vid min kontroll den 2026-11-05 på alignerr.com omfattade publika rollkort Coding & Software Engineering, STEM & Research, General & Ethics (AI Ethics Reviewer, Data Labeling Specialist, Map & Location Data Analyst), Languages & Audio samt Talent Acquisition.',
          ],
        },
        {
          h2: 'Vilka är Alignerrs angivna arvoden och hur fungerar utbetalning och skatt?',
          paragraphs: [
            'Publika rollkort på alignerr.com (kontrollerat 2026-11-05) anger $40–120/h för AI Ethics Reviewer, Data Labeling Specialist och Map & Location Data Analyst, $25–35/h för AI Language Experts samt $15–25/h för Talent Acquisition. Arvoden för Coding och STEM sätts per projekt (TBD i publik FAQ; startsidan nämner $80/hr i snitt).',
            'Exakt betaltjänst och utbetalningsintervall anges som TBD i publik FAQ fram till kontraktssteget. Eventuella intäkter ska redovisas som självständig närings- eller uppdragsinkomst hos Skatteverket i Sverige eller Vero.fi i Finland.',
          ],
        },
        {
          h2: 'Kan sökande i Finland och Sverige klara Alignerrs ID-kontroll i Persona?',
          paragraphs: [
            'Detta är det viktigaste förbehållet hos Alignerr per 2026-11-05: medan allmänna sidor bjuder in globala experter skriver Alignerrs officiella Visa FAQ uttryckligen att Persona-kontrollen endast accepterar amerikanskt körkort, delstatligt ID, amerikanskt arbetstillstånd eller Green Card, samt telefonnummer från USA eller Kanada.',
            'Om du bor i Sverige eller Finland utan amerikansk ID-handling och US/Kanada-nummer riskerar du att stoppas i Persona-steget. Kontrollera därför alltid om ditt konto tillåter europeiskt pass innan du lägger tid på tester.',
          ],
        },
        {
          h2: 'Hur fungerar ansökan och Zara-intervjun hos Alignerr?',
          paragraphs: [
            'Logga in med Google på app.alignerr.com, ladda upp ditt CV, verifiera din identitet via Persona och genomför den automatiserade Zara™-intervjun eller ämnesprov innan du slutför betalnings- och kontraktsinställningar.',
            'Precis som på övriga plattformar garanteras inga fasta arbetstimmar efter godkänd intervju.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Vem driver Alignerr?',
          answer:
            'Alignerr drivs av det amerikanska AI-dataföretaget Labelbox, Inc.',
        },
        {
          question: 'Varför kan europeiska sökande stoppas vid ID-kontrollen på Alignerr?',
          answer:
            'Enligt Alignerrs officiella Visa FAQ (kontrollerat 2026-11-05) godkänner Persona-verifieringen endast amerikanska ID-handlingar/arbetstillstånd och telefonnummer från USA/Kanada.',
        },
        {
          question: 'Vilka timarvoden anger Alignerr öppet?',
          answer:
            'Rollkorten (2026-11-05) visar $40–120/h för etik-, data- och kartanalytiker, $25–35/h för språkexperter och $15–25/h för rekrytering.',
        },
        {
          question: 'Får jag provision om du registrerar dig på Alignerr?',
          answer:
            'Nej. Jag tjänar $0 från Alignerr.',
        },
      ],
    },
    outlier: {
      slug: 'outlier',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Outlier AI omdöme & lön (2026): EU-guide | Edithsi',
      metaDescription:
        'Hur fungerar Outlier AI i Sverige och Finland? Kontrollerad (2026-11-05) guide till tisdagsutbetalningar via PayPal/AirTM och skatt.',
      h1: 'Hur fungerar Outlier AI? Veckolön, tester & fakta för Europa',
      directAnswer:
        'Outlier (outlier.ai), som drivs av Scale AI / Smart Ecosystems, är en stor plattform för AI-träning där specialister skriver utmanande uppgifter, bedömningsmatriser och rangordnar LLM-svar inom kodning, STEM och språk i 50+ länder. Per 2026-11-05 anger Outliers publika översikt inget fast timspann (markerat TBD per projekt och land), men plattformen accepterar sökande i Sverige, Finland och övriga Europa med veckovisa tisdagsutbetalningar via PayPal, AirTM eller ACH.',
      fairnessDisclosure:
        'Jag tjänar $0 från Outlier (ingen värvningskod eller affiliatelänk). Jag får endast värvningsersättning från Mercor (kod 02e0c12a-d634-4738-9686-04f28f31f52b) och bedömer Outlier enligt exakt samma kriterier och datum (2026-11-05) som övriga plattformar.',
      sections: [
        {
          h2: 'Vilken typ av AI-träningsarbete och ämnesområden erbjuder Outlier?',
          paragraphs: [
            'Outlier drivs av Scale AI / Smart Ecosystems och fokuserar på RLHF-träning, avancerade promptar, bedömning av flerstegsdialoger och konstruktion av utvärderingskriterier.',
            'Vid min kontroll den 2026-11-05 på outlier.ai omfattar spåren Coding & Software Engineering, STEM (matematik, fysik, kemi, biologi), språk i 50+ länder (inklusive nordiska och europeiska språk) samt generalistroller (minst Associate’s-examen krävs; kandidat-, master- eller doktorsexamen föredras).',
          ],
        },
        {
          h2: 'Hur fungerar Outliers projektarvoden, tisdagsutbetalningar och skatt?',
          paragraphs: [
            'På outlier.ai/faq (kontrollerat 2026-11-05) anges timarvodet som TBD eftersom ersättningen beror på expertisnivå, projektets svårighetsgrad och bosättningsland; du ser dock alltid ditt exakta tim- eller uppgiftsarvode i kontrollpanelen innan du påbörjar ett projekt.',
            'Outlier betalar ut varje tisdag (för arbete utfört föregående tisdag till måndag midnatt UTC) via PayPal, AirTM eller ACH. Alla utbetalningar till PayPal eller AirTM är skattepliktig inkomst som ska deklareras till Skatteverket i Sverige (F-skatt/egenavgifter) eller Vero.fi i Finland (samt YEL vid årsinkomst över €9 423).',
          ],
        },
        {
          h2: 'Är Outlier öppet för bosatta i Finland, Sverige och Europa?',
          paragraphs: [
            'Ja. Outlier är verksamt i över 50 länder, inklusive Sverige och Finland, och godkänner nationell statlig ID-handling (pass eller nationellt ID-kort) samt mobilnummer från ditt bosättningsland.',
            'Det gör verifieringen enkel för europeiska sökande, så länge du arbetar från det land där du är folkbokförd och registrerad.',
          ],
        },
        {
          h2: 'Vad bör du veta om Outliers kvalificeringstester och Empty Queue (EQ)?',
          paragraphs: [
            'Du skapar en profil på outlier.ai, importerar CV och LinkedIn, verifierar ID och mobilnummer samt genomför 30–90 minuters grundtester och projektspecifika kurser.',
            'På Outlier växlar tillgången på arbete ofta snabbt mellan intensiva projekt och tom kö ("Empty Queue" / EQ). Kombinera därför gärna Outlier med stående talangpooler som Mercor eller Mindrift.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Vem driver Outlier AI?',
          answer:
            'Outlier drivs av Scale AI / Smart Ecosystems.',
        },
        {
          question: 'När och hur betalar Outlier ut pengar?',
          answer:
            'Outlier betalar ut varje tisdag via PayPal, AirTM eller ACH.',
        },
        {
          question: 'Fungerar svenskt eller finskt pass för ID-kontroll på Outlier?',
          answer:
            'Ja. Outlier godkänner giltig statlig ID-handling och mobilnummer från ditt bosättningsland i över 50 länder.',
        },
        {
          question: 'Varför står det TBD för Outliers arvode i tabellen?',
          answer:
            'Eftersom Outliers publika FAQ (2026-11-05) anger att arvodet varierar efter kompetens, projekt och land i stället för ett fast intervall; exakt arvode visas i plattformen före start.',
        },
      ],
    },
    micro1: {
      slug: 'micro1',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'micro1 omdöme & lön (2026): AI-tränarguide | Edithsi',
      metaDescription:
        'Hur fungerar micro1 för AI-tränare i Europa? Kontrollerad (2026-11-05) guide till Realm, Cortex, Medical Index, AI-intervju och skatt.',
      h1: 'Hur fungerar micro1 för AI-tränare? AI-intervju & roller',
      directAnswer:
        'micro1 (micro1.ai/experts), som drivs av micro1 Inc., rekryterar globala specialister inom mjukvaruutveckling, finans, sjukvård, juridik och akademisk forskning för att generera träningsdata åt ledande AI-labb (Realm, Cortex och Medical Index). Per 2026-11-05 anges arvodet som TBD på den publika översiktssidan ("Competitive compensation for expert knowledge", med rollspecifika arvoden på enskilda annonser) och plattformen är öppen för sökande i Sverige, Finland och övriga Europa.',
      fairnessDisclosure:
        'Jag tjänar $0 från micro1 (ingen affiliate- eller värvningslänk). Jag får endast värvningsersättning från Mercor (kod 02e0c12a-d634-4738-9686-04f28f31f52b) och utvärderar micro1 enligt exakt samma kriterier och datum (2026-11-05) som övriga plattformar.',
      sections: [
        {
          h2: 'Vilken typ av AI-träningsarbete och områden erbjuder micro1?',
          paragraphs: [
            'micro1 Inc. bygger träningsdata och utvärderingsmiljöer för frontlinjens AI-laboratorier. På micro1.ai/experts (kontrollerat 2026-11-05) lyfts fyra program fram: Realm (miljöer för reinforcement learning), Cortex (kontextuell agentutvärdering), Medical Index (medicinska riktmärken) samt robotikdata.',
            'Huvudområdena är Software Engineering, Finance, Healthcare & Medicine, Legal samt Academic Research & Robotics.',
          ],
        },
        {
          h2: 'Hur fungerar micro1:s angivna arvoden, utbetalningar och skatt i Europa?',
          paragraphs: [
            'På översiktssidan micro1.ai/experts (kontrollerat 2026-11-05) anges inget fast globalt timintervall (markerat TBD med texten "Competitive compensation for expert knowledge", medan arvoden visas på respektive rollannons under micro1.ai/experts/opportunities).',
            'Utbetalningsintervall och betaltjänst är också markerade som TBD på den publika översiktssidan och bekräftas under onboardingen. Som självständig uppdragstagare i Sverige eller Finland redovisar du själv all inkomst till Skatteverket eller Vero.fi.',
          ],
        },
        {
          h2: 'Kan specialister i Finland, Sverige och Europa ansöka till micro1?',
          paragraphs: [
            'Ja. micro1 vänder sig till ett globalt nätverk av distansexperter, och specialister i Sverige, Finland och EU/EES kan söka öppna roller och genomföra den automatiserade AI-intervjun.',
            'Eftersom enskilda kundprojekt kan ha geografiska krav (TBD per projekt på översiktssidan) bör du alltid kontrollera villkoren i den specifika rollannonsen.',
          ],
        },
        {
          h2: 'Hur går micro1:s automatiserade AI-intervju och onboarding till?',
          paragraphs: [
            'Ansökan sker i fyra steg: ansök till en öppen roll på micro1.ai/experts/opportunities, genomför den automatiserade AI-intervjun (förberedelse finns på micro1.ai/interview-prep), slutför onboardingen om du blir utvald och börja arbeta i matchade AI-labbprojekt.',
            'Eftersom både micro1 och Mercor använder en ~20 minuters AI-intervju har du nytta av samma muntliga förberedelse på båda plattformarna.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Vad är Realm, Cortex och Medical Index hos micro1?',
          answer:
            'Det är micro1:s dataprogram: Realm för reinforcement learning-miljöer, Cortex för agentutvärdering och Medical Index för kliniska AI-riktmärken.',
        },
        {
          question: 'Varför anges micro1:s arvode som TBD i översikten?',
          answer:
            'För att den publika sidan micro1.ai/experts (kontrollerat 2026-11-05) anger "Competitive compensation for expert knowledge" och publicerar exakta arvoden på respektive rollannons.',
        },
        {
          question: 'Kan jag öva inför micro1:s AI-intervju?',
          answer:
            'Ja, micro1 har en officiell förberedelsesida på micro1.ai/interview-prep.',
        },
        {
          question: 'Får jag ersättning om du ansöker till micro1?',
          answer:
            'Nej. Jag tjänar $0 från micro1.',
        },
      ],
    },
    'handshake-ai': {
      slug: 'handshake-ai',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Handshake AI omdöme & lön (2026): Endast USA | Edithsi',
      metaDescription:
        'Vem kan gå med i Handshake AI (MOVE Program)? Kontrollerade (2026-11-05) arvoden (upp till $150/h) och strikt krav på arbetstillstånd i USA.',
      h1: 'Vem kan gå med i Handshake AI? Arvode ($150/h) & USA-regel',
      directAnswer:
        'Handshake AI (joinhandshake.com/move-program/), som drivs av Handshake (Handshake AI Fellowship / MOVE Program), betalar akademiker upp till $17–150/h för LLM-träning och modellvalidering (kontrollerat 2026-11-05). Programmet är dock strikt ENDAST FÖR USA (US-ONLY): du måste vara fysiskt bosatt i USA med giltigt amerikanskt arbetstillstånd som stöds av Handshake, vilket innebär att bosatta i Sverige, Finland och övriga Europa inte kan delta.',
      fairnessDisclosure:
        'Jag tjänar $0 från Handshake AI (ingen värvningskod eller affiliatelänk). Jag får endast värvningsersättning från Mercor (kod 02e0c12a-d634-4738-9686-04f28f31f52b) och tar med Handshake AI (kontrollerat 2026-11-05) för att direkt visa europeiska läsare varför plattformen är låst till USA.',
      sections: [
        {
          h2: 'Vilken typ av AI-träningsarbete och områden erbjuder Handshake AI?',
          paragraphs: [
            'Handshake AI Fellowship (MOVE Program) rekryterar personer med Associate’s-, kandidat-, master-, doktors- eller postdoktorsexamen för modellvalidering (MOVE), akademisk promptdesign och expertutvärdering.',
            'Vid min kontroll den 2026-11-05 på joinhandshake.com/move-program/ fanns spår för Software Engineering, Game Development & PCB Tool Engineering, Philosophy & Humanities (PhDs & Postdocs), Finance (FP&A Analyst), Energy Professionals samt Generalist AI Evaluation.',
          ],
        },
        {
          h2: 'Vilka är Handshake AI:s angivna arvoden och hur fungerar betalningen?',
          paragraphs: [
            'På den publika MOVE Program-sidan (kontrollerat 2026-11-05) anges tak från $17/h till $150/h: Software Engineer Fellow (upp till $150/h), Game Developer / PCB Tool Specialist (upp till $125/h), Philosophy Expert för PhDs & Postdocs (upp till $120/h), FP&A Analyst / Energy Professional (upp till $80/h) och AI Evaluation Specialist (upp till $17/h).',
            'Handshake anger över $500M+ i totala utbetalningar och betalar per timme som självständig uppdragstagare (exakt betaltjänst på publika startsidan: TBD).',
          ],
        },
        {
          h2: 'Varför är Handshake AI stängt för sökande i Sverige, Finland och Europa?',
          paragraphs: [
            'Enligt de officiella villkoren på joinhandshake.com/move-program/ (kontrollerat 2026-11-05) gäller följande: "To participate in the Handshake AI Fellowship, you must be based in the U.S. and have a valid work authorization that can be supported by Handshake. F-1 students who are eligible for CPT or OPT may be eligible. STEM OPT is not supported."',
            'Om du bor i Sverige, Finland eller övriga Europa utan fysisk bas och giltigt arbetstillstånd i USA bör du inte lägga tid på att ansöka till Handshake AI, utan istället välja Mercor, Mindrift, Outlier eller micro1.',
          ],
        },
        {
          h2: 'Hur fungerar ansökan för behöriga som bor i USA?',
          paragraphs: [
            'För läsare som är bosatta i USA med giltigt amerikanskt arbetstillstånd sker ansökan i tre steg på joinhandshake.com/move-program/: skapa konto, verifiera examen samt amerikanskt arbetstillstånd och ansök till matchande fellowship-spår.',
            'Precis som hos övriga plattformar garanteras inga fasta arbetstimmar.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Kan jag ansöka till Handshake AI från Sverige eller Finland?',
          answer:
            'Nej. Handshake AI kräver att du är fysiskt baserad i USA med ett amerikanskt arbetstillstånd som stöds av Handshake.',
        },
        {
          question: 'Stöder Handshake AI F-1 STEM OPT i USA?',
          answer:
            'Nej. Enligt den officiella sidan (2026-11-05) kan CPT och vanlig OPT godkännas, men STEM OPT stöds inte.',
        },
        {
          question: 'Vilket är det högsta angivna timarvodet på Handshake AI?',
          answer:
            'Per 2026-11-05 anger spåret Software Engineer Fellow upp till $150/h.',
        },
        {
          question: 'Varför finns Handshake AI med i en europeisk jämförelse om det bara gäller USA?',
          answer:
            'Eftersom europeiska akademiker ofta ser annonser om $150/h från Handshake AI i sociala medier; genom att tydligt redovisa USA-kravet sparar jag tid åt läsarna.',
        },
      ],
    },
  },
  de: {
    mercor: {
      slug: 'mercor',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Mercor Erfahrungen & Vergütung (2026): EU-Guide | Edithsi',
      metaDescription:
        'Ist Mercor seriös in Deutschland, Österreich und Finnland? Geprüfte (2026-11-05) Stundensätze ($35–180/h), Stripe-Auszahlung & Steuer-Hinweise.',
      h1: 'Ist Mercor seriös? Stundensätze, Ablauf & EU-Leitfaden (2026)',
      directAnswer:
        'Mercor (work.mercor.com) ist eine US-amerikanische Expertenplattform, die Remote-Fachkräfte für die Evaluierung von KI-Modellen (Evals), Rubrik-Bewertungen und Prompt-Engineering in festen Talentpools zu ausgeschriebenen Stundensätzen von $35–180/h engagiert (Finance-Sätze projektbezogen; geprüft am 2026-11-05). Selbstständige in Deutschland, Österreich, der Schweiz, Finnland und der gesamten EU/EWR können sich remote bewerben, wobei einzelne Kundenprojekte eigene Länderanforderungen haben und keine festen Wochenstunden garantieren.',
      fairnessDisclosure:
        'Ich erhalte eine Empfehlungsprovision (Referral Fee) von Mercor, wenn sich jemand über meinen Empfehlungscode (02e0c12a-d634-4738-9686-04f28f31f52b) bewirbt und die Einstellungskriterien erfüllt. Von den anderen fünf Plattformen (micro1, Outlier, Alignerr, Handshake AI, Mindrift) erhalte ich $0, und ich bewerte jede Plattform nach exakt denselben Kriterien, offiziellen Quellen und dem Prüfdatum 2026-11-05.',
      sections: [
        {
          h2: 'Welche Arten von KI-Trainingsarbeit und Fachbereichen bietet Mercor an?',
          paragraphs: [
            'Mercor rekrutiert ausgewiesene Fachkräfte in feste Talentpools (Standing Talent Pools) statt für einfache Mikroaufgaben. Die Arbeit umfasst domänenspezifische KI-Modellbewertungen (Evals), das Verfassen anspruchsvoller Reasoning-Prompts, die Bewertung von Modellantworten anhand detaillierter Rubriken sowie das Aufdecken fachlicher Halluzinationen.',
            'Bei meiner Überprüfung am 2026-11-05 auf work.mercor.com führte Mercor sieben Kernbereiche: Medizin (Ärzte, Pflegekräfte, Zahnärzte, Apotheker), Recht (zugelassene Anwälte und Rechtsexperten), Software Engineering, Finanzen (Rechnungswesen, Wirtschaftsprüfung, Corporate Finance, Aktuare), Office- & Produktivitätssoftware, Sprachen & Audio (u. a. Finnisch, Französisch, Spanisch, Italienisch, Portugiesisch, Polnisch, Niederländisch) sowie Generalisten.',
          ],
        },
        {
          h2: 'Wie hoch sind die ausgeschriebenen Stundensätze bei Mercor und wie funktionieren Auszahlung und Steuern?',
          paragraphs: [
            'In den öffentlichen Mercor-Ausschreibungen (geprüft am 2026-11-05) liegen die Stundensätze zwischen $35 und $180/h: Medical Expert ($60–180/h), Legal Expert für zugelassene Anwälte ($100–150/h), Legal Expert ($60–150/h), Software Engineering Expert ($70–150/h), Office & Productivity Software Expert ($60–70/h), Generalist Expert ($40–70/h) und Language & Audio Expert ($35–50/h). Beim Finance Expert wird der Stundensatz pro Projekt festgelegt.',
            'Die Auszahlung erfolgt wöchentlich in USD über Stripe als unabhängiger Auftragnehmer (Independent Contractor). Da keine Quellensteuer einbehalten wird, müssen Sie die Einnahmen selbst versteuern: in Deutschland beim Finanzamt (als Freiberufler oder Gewerbetreibender inkl. EÜR und ggf. Kranken-/Rentenversicherung), in Finnland bei Vero.fi (inkl. YEL-Pflicht ab €9.423 Jahresarbeitseinkommen im Jahr 2026).',
          ],
        },
        {
          h2: 'Können sich Fachkräfte in Deutschland, Finnland und Europa bei Mercor bewerben?',
          paragraphs: [
            'Ja. Mercor akzeptiert Remote-Bewerbungen aus Deutschland, Österreich, der Schweiz, Finnland, dem gesamten EU/EWR-Raum, Großbritannien, den USA und Kanada. Sowohl die technischen als auch die mehrsprachigen und generalistischen Talentpools stehen europäischen Bewerbern offen.',
            'Beachten Sie jedoch, dass die Aufnahme in einen Talentpool noch keine sofortige Projektzuweisung bedeutet. Manche medizinischen oder juristischen US-Kundenprojekte setzen eine US-Zulassung voraus, während Software-, Analyse- und Sprachprojekte regelmäßig europäische Experten einbinden.',
          ],
        },
        {
          h2: 'Wie laufen Bewerbung und das automatisierte KI-Videointerview bei Mercor ab?',
          paragraphs: [
            'Der Bewerbungsprozess umfasst vier Schritte: Lebenslauf auf der jeweiligen Mercor-Stellenseite hochladen, das ca. 20-minütige automatisierte KI-Videointerview sowie etwaige Fachtests absolvieren, im Talentpool auf ein Projekt-Matching warten und nach dem Matching die Identitätsprüfung sowie die Stripe-Einrichtung abschließen.',
            'Bereiten Sie sich auf das KI-Interview wie auf ein echtes Fachgespräch vor und erläutern Sie konkrete Projekte aus Ihrem Lebenslauf. Da das Projektvolumen schwankt, garantiert keine Plattform feste Wochenstunden.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Kostet die Bewerbung oder das KI-Interview bei Mercor Geld?',
          answer:
            'Nein. Die Bewerbung, das automatisierte Interview und die Aufnahme in den Talentpool auf work.mercor.com sind komplett kostenlos.',
        },
        {
          question: 'Wie zahlt Mercor Honorare nach Deutschland oder Finnland aus?',
          answer:
            'Mercor zahlt wöchentlich in USD über Stripe direkt auf Ihr hinterlegtes europäisches Bankkonto aus, sobald Sie in einem aktiven Projekt Stunden erfassen.',
        },
        {
          question: 'Wie melde ich Mercor-Einnahmen steuerlich an?',
          answer:
            'Sie arbeiten auf eigene Rechnung (Independent Contractor) und melden die Bruttoeinnahmen in Deutschland Ihrem Finanzamt (Freiberufler/Gewerbe) bzw. in Finnland bei Vero.fi (unter Beachtung der YEL-Grenze von €9.423 in 2026).',
        },
        {
          question: 'Ändert mein Empfehlungslink Ihren Stundensatz bei Mercor?',
          answer:
            'Nein. Die ausgeschriebenen Stundensätze und Auswahlkriterien sind mit und ohne Empfehlungslink völlig identisch.',
        },
      ],
    },
    mindrift: {
      slug: 'mindrift',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Mindrift Erfahrungen & Vergütung (2026): Guide | Edithsi',
      metaDescription:
        'Wie funktioniert Mindrift in Europa? Geprüfte (2026-11-05) Sätze ($15–100+/h), Toloka AI BV Aufgabenvergütung, 90+ Fachgebiete & Steuern.',
      h1: 'Wie funktioniert Mindrift? Vergütung ($15–100+/h) & Aufgaben',
      directAnswer:
        'Mindrift (mindrift.ai) wird von der Toloka AI BV betrieben und engagiert Autoren sowie Fachexperten aus über 90 Disziplinen für Prompt-Erstellung, KI-Antwortbewertung und Textredaktion zu ausgeschriebenen Sätzen von $15–100+/h (geprüft am 2026-11-05). Die Plattform steht Remote-Auftragnehmern in Deutschland, Finnland und der EU/EWR in über 20 Sprachen offen, wobei der Fachbereich Medizin (Medicine) ausdrücklich in den USA zugelassene Ärzte voraussetzt.',
      fairnessDisclosure:
        'Ich verdiene $0 an Mindrift (kein Affiliate- oder Empfehlungslink). Ich erhalte Empfehlungsprovisionen ausschließlich von Mercor (Code 02e0c12a-d634-4738-9686-04f28f31f52b) und bewerte Mindrift nach exakt denselben Kriterien und mit demselben Prüfdatum (2026-11-05) wie alle anderen Plattformen.',
      sections: [
        {
          h2: 'Welche KI-Trainingsaufgaben und Fachgebiete bietet Mindrift an?',
          paragraphs: [
            'Unter dem Dach der Toloka AI BV konzentriert sich Mindrift auf anspruchsvolle Texterstellung, Faktenprüfung, fundierte Bewertungsbegründungen und das Editieren von KI-Antworten in über 90 akademischen und beruflichen Domänen.',
            'Bei meiner Prüfung am 2026-11-05 auf mindrift.ai umfassten die Hauptbereiche MINT-Forschung (STEM), Programmierung (Coding), Unternehmensberatung (Strategie, Operations und M&A für MBB- und Senior-Berater), Recht, Kreatives Schreiben, Linguistik (20+ Sprachen) sowie Medizin.',
          ],
        },
        {
          h2: 'Wie hoch ist die Vergütung bei Mindrift und wie laufen Auszahlung und Steuern?',
          paragraphs: [
            'Auf mindrift.ai (geprüft am 2026-11-05) werden für Einstiegs- und Generalistenaufgaben $15–30/h und für Fachexperten $60–100+/h genannt. Als Benchmarks nennt die Seite bis zu $100/h für US-Ärzte, bis zu $8.000/Monat für Management-Consultants, bis zu $6.400/Monat ($60–100+/h) für STEM und bis zu $5.400/Monat ($60–100+/h) für Coding.',
            'Gezahlt wird zweiwöchentlich (bi-weekly) pro abgeschlossener Aufgabe, wobei der Aufgabenpreis vorab angezeigt wird (der genaue Zahlungsdienstleister ist auf der öffentlichen Startseite TBD bis zum Onboarding). In Deutschland versteuern Sie die Einnahmen beim Finanzamt (Freiberufler/Gewerbe), in Finnland bei Vero.fi (YEL-Grenze €9.423 in 2026).',
          ],
        },
        {
          h2: 'Ist Mindrift für Bewerber in Deutschland, Finnland und Europa geöffnet?',
          paragraphs: [
            'Ja. Mindrift rekrutiert weltweit in über 20 Sprachen, einschließlich Auftragnehmern in Deutschland, Finnland und der EU/EWR (gemäß den Toloka-Zulassungsbedingungen). Durch die niederländische Gesellschaft Toloka AI BV ist der rechtliche Rahmen für europäische Freelancer vertraut.',
            'Prüfen Sie jedoch stets die rollenspezifischen Anforderungen: Während der Medizin-Track eine US-Arztzulassung verlangt, stehen STEM, Coding, Consulting und Linguistik europäischen Fachkräften offen.',
          ],
        },
        {
          h2: 'Wie laufen Bewerbung und Qualifizierung bei Mindrift ab?',
          paragraphs: [
            'Die Bewerbung erfolgt in drei Schritten: Lebenslauf auf mindrift.ai einreichen und Fachgebiet sowie Sprachen wählen, einen Fach- oder Schreibtest absolvieren und das Plattform-Onboarding abschließen.',
            'Da pro abgenommener Aufgabe vergütet wird, hängt Ihr effektiver Stundenlohn von Ihrer Routine mit den jeweiligen Projektrichtlinien ab.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Welches Unternehmen betreibt Mindrift?',
          answer:
            'Mindrift wird von der niederländischen Toloka AI BV betrieben.',
        },
        {
          question: 'Zahlt Mindrift nach Stunden oder pro Aufgabe?',
          answer:
            'Mindrift zahlt zweiwöchentlich pro abgeschlossener Aufgabe; die Vergütung wird vor Beginn jeder Aufgabe angezeigt und orientiert sich an Benchmarks von $15–30/h bzw. $60–100+/h.',
        },
        {
          question: 'Können europäische Ärzte am Medizin-Track von Mindrift teilnehmen?',
          answer:
            'Stand 2026-11-05 setzt der öffentliche Medizin-Track auf mindrift.ai eine US-Arztzulassung voraus; europäische Experten können sich jedoch für STEM, Coding, Consulting und Sprachen bewerben.',
        },
        {
          question: 'Erhalte ich eine Provision, wenn Sie sich bei Mindrift anmelden?',
          answer:
            'Nein. Ich erhalte $0 von Mindrift und verlinke direkt auf mindrift.ai.',
        },
      ],
    },
    alignerr: {
      slug: 'alignerr',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Alignerr Erfahrungen & Vergütung (2026): ID-Regel | Edithsi',
      metaDescription:
        'Ist Alignerr in Europa nutzbar? Geprüfte (2026-11-05) Sätze ($15–120/h), Labelbox-Projekte und wichtiger Hinweis zur US-ID-Pflicht bei Persona.',
      h1: 'Ist Alignerr offen in Europa? Vergütung, ID-Regeln & Test',
      directAnswer:
        'Alignerr (alignerr.com), betrieben von Labelbox, Inc., engagiert Remote-Spezialisten für das Alignment generativer KI-Modelle, Coding- und Ethik-Bewertungen sowie Sprachdatensätze zu ausgeschriebenen Sätzen von $15–120/h (Startseiten-Badge nennt $80/hr Durchschnitt; geprüft am 2026-11-05). Obwohl die allgemeine FAQ internationale Bewerber einlädt, besagt die offizielle Visa-FAQ von Alignerr, dass bei der Persona-Identitätsprüfung nur US-Ausweise/Arbeitserlaubnisse und US-/Kanada-Telefonnummern akzeptiert werden – ein entscheidender Punkt für europäische Bewerber.',
      fairnessDisclosure:
        'Ich verdiene $0 an Alignerr (keine Affiliate- oder Empfehlungsbeziehung). Ich erhalte Provisionen ausschließlich von Mercor (Code 02e0c12a-d634-4738-9686-04f28f31f52b) und bewerte Alignerr nach exakt denselben Kriterien und mit demselben Prüfdatum (2026-11-05) wie alle anderen Plattformen.',
      sections: [
        {
          h2: 'Welche KI-Trainingsarbeit und Fachbereiche bietet Alignerr an?',
          paragraphs: [
            'Alignerr gehört zu Labelbox, Inc. und bindet Fachexperten in das Training und die Kalibrierung von Sprachmodellen auf der Labelbox-Plattform ein: Programmieraufgaben, KI-Ethik-Prüfungen, Geodaten-/Kartenanalysen sowie Sprach- und Audiodatensätze.',
            'Bei meiner Überprüfung am 2026-11-05 auf alignerr.com umfassten die Rollen Coding & Software Engineering, STEM & Research, General & Ethics (AI Ethics Reviewer, Data Labeling Specialist, Map & Location Data Analyst), Languages & Audio sowie Talent Acquisition.',
          ],
        },
        {
          h2: 'Wie hoch sind die ausgeschriebenen Stundensätze bei Alignerr und wie funktioniert die Auszahlung?',
          paragraphs: [
            'Die öffentlichen Rollenkarten auf alignerr.com (geprüft am 2026-11-05) nennen $40–120/h für AI Ethics Reviewer, Data Labeling Specialist und Map & Location Data Analyst, $25–35/h für AI Language Experts und $15–25/h für Talent Acquisition. Für Coding und STEM werden die Sätze projektbezogen festgelegt (TBD in der öffentlichen FAQ; Startseite nennt $80/hr Durchschnitt).',
            'Der genaue Zahlungsdienstleister und Auszahlungsrhythmus sind in der öffentlichen FAQ als TBD markiert und werden erst bei der Vertrags- und Abrechnungseinrichtung festgelegt. Einnahmen sind eigenverantwortlich beim Finanzamt (Deutschland) bzw. Vero.fi (Finnland) zu versteuern.',
          ],
        },
        {
          h2: 'Können Bewerber in Deutschland und Finnland die Persona-ID-Prüfung bei Alignerr bestehen?',
          paragraphs: [
            'Dies ist der wichtigste Vorbehalt bei Alignerr (Stand 2026-11-05): Während allgemeine Seiten weltweite Bewerber ansprechen, erklärt die offizielle Visa-FAQ ausdrücklich, dass für die Identitätsprüfung über Persona nur US-Führerscheine, US-Staatsausweise, US-Arbeitserlaubnisse oder Green Cards akzeptiert werden und die Telefonverifizierung nur US-/Kanada-Nummern unterstützt.',
            'Wenn Sie in Deutschland, Österreich, der Schweiz oder Finnland leben und kein US-Ausweisdokument samt US-/Kanada-Telefonnummer besitzen, kann die Verifizierung blockiert werden. Prüfen Sie daher vorab im Konto, ob europäische Reisepässe freigeschaltet sind, bevor Sie Zeit in Assessments investieren.',
          ],
        },
        {
          h2: 'Wie funktionieren Bewerbung und das Zara-KI-Interview bei Alignerr?',
          paragraphs: [
            'Melden Sie sich per Google-Konto auf app.alignerr.com an, laden Sie Ihren Lebenslauf hoch, durchlaufen Sie die Persona-Verifizierung und absolvieren Sie das automatisierte Zara™-Interview oder Fachtests vor der Vertrags- und Abrechnungseinrichtung.',
            'Auch nach erfolgreichem Abschluss sind Projektstunden abhängig von der Kundennachfrage bei Labelbox und niemals garantiert.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Wer betreibt Alignerr?',
          answer:
            'Alignerr wird von dem US-Unternehmen Labelbox, Inc. betrieben.',
        },
        {
          question: 'Warum scheitert bei vielen Europäern die Verifizierung auf Alignerr?',
          answer:
            'Laut offizieller Alignerr Visa-FAQ (Stand 2026-11-05) akzeptiert Persona nur US-Ausweise/Arbeitserlaubnisse und Telefonnummern aus den USA oder Kanada.',
        },
        {
          question: 'Welche Stundensätze nennt Alignerr öffentlich?',
          answer:
            'Die Rollenkarten (2026-11-05) zeigen $40–120/h für Ethik-, Labeling- und Karten-Analysten, $25–35/h für Sprachexperten und $15–25/h für Recruiting.',
        },
        {
          question: 'Verdiene ich eine Provision, wenn Sie sich bei Alignerr bewerben?',
          answer:
            'Nein. Ich erhalte $0 von Alignerr.',
        },
      ],
    },
    outlier: {
      slug: 'outlier',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Outlier AI Erfahrungen & Vergütung (2026): Guide | Edithsi',
      metaDescription:
        'Wie funktioniert Outlier AI in Deutschland und Finnland? Geprüfter (2026-11-05) Guide zu Dienstags-Auszahlungen (PayPal/AirTM) und Steuern.',
      h1: 'Wie funktioniert Outlier AI? Auszahlung, Tests & EU-Fakten',
      directAnswer:
        'Outlier (outlier.ai), betrieben von Scale AI / Smart Ecosystems, ist eine große Remote-Plattform für KI-Training, auf der Experten komplexe Aufgaben erstellen, Bewertungsrubriken entwerfen und LLM-Antworten in Coding, MINT (STEM) und über 50 Sprachregionen bewerten. Stand 2026-11-05 nennt Outlier auf der öffentlichen Übersichtsseite keine pauschale Stundensatzspanne (TBD je nach Projekt und Standort), akzeptiert aber Bewerber aus über 50 Ländern – inklusive Deutschland und Finnland – und zahlt wöchentlich dienstags per PayPal, AirTM oder ACH aus.',
      fairnessDisclosure:
        'Ich verdiene $0 an Outlier (kein Empfehlungscode oder Affiliate-Link). Ich erhalte Empfehlungsprovisionen ausschließlich von Mercor (Code 02e0c12a-d634-4738-9686-04f28f31f52b) und bewerte Outlier nach denselben Kriterien und zum Prüfdatum 2026-11-05 wie alle anderen Plattformen.',
      sections: [
        {
          h2: 'Welche KI-Trainingsaufgaben und Fachbereiche bietet Outlier an?',
          paragraphs: [
            'Unter dem Dach von Scale AI / Smart Ecosystems konzentriert sich Outlier auf Reinforcement Learning from Human Feedback (RLHF), das Verfassen komplexer Prompts, die Bewertung mehrstufiger Dialoge und präzise Bewertungsrubriken.',
            'Bei meiner Überprüfung am 2026-11-05 auf outlier.ai umfassten die Bereiche Coding & Software Engineering, STEM (Mathematik, Physik, Chemie, Biologie), Sprachen in über 50 Ländern (darunter Deutsch, Finnisch und weitere europäische Sprachen) sowie Generalistenrollen (mindestens Associate-Abschluss erforderlich; Bachelor, Master oder PhD bevorzugt).',
          ],
        },
        {
          h2: 'Wie funktionieren Projektsätze, Dienstags-Auszahlungen und Steuern bei Outlier?',
          paragraphs: [
            'In der öffentlichen FAQ auf outlier.ai/faq (geprüft am 2026-11-05) ist die allgemeine Vergütung als TBD ausgewiesen, da die Sätze nach Fachgebiet, Projektkomplexität und Wohnsitzland variieren; der genaue Stunden- oder Aufgabensatz wird jedoch vor jedem Projektstart im Dashboard angezeigt.',
            'Die Auszahlung erfolgt zuverlässig jeden Dienstag (für Arbeit von Dienstag bis Montag 24:00 Uhr UTC) über PayPal, AirTM oder ACH. Alle Gutschriften auf PayPal oder AirTM sind steuerpflichtige Einkünfte aus selbstständiger Tätigkeit, die in Deutschland beim Finanzamt (Freiberufler/Gewerbe) bzw. in Finnland bei Vero.fi (inkl. YEL ab €9.423 in 2026) gemeldet werden müssen.',
          ],
        },
        {
          h2: 'Ist Outlier für Einwohner in Deutschland, Finnland und Europa offen?',
          paragraphs: [
            'Ja. Outlier ist in über 50 Ländern aktiv – darunter Deutschland, Österreich, die Schweiz und Finnland – und verlangt lediglich einen gültigen amtlichen Ausweis sowie eine Mobilfunknummer aus Ihrem Wohnsitzland.',
            'Dadurch ist die Verifizierung für europäische Fachkräfte problemlos möglich, solange Sie sich tatsächlich aus Ihrem registrierten Wohnsitzland einloggen.',
          ],
        },
        {
          h2: 'Was sollten Sie über Outliers Einstufungstests und Empty Queues (EQ) wissen?',
          paragraphs: [
            'Nach der Profilerstellung auf outlier.ai und dem Import von Lebenslauf sowie LinkedIn-Daten bestätigen Sie Ihren amtlichen Ausweis und Ihre Telefonnummer und absolvieren 30–90-minütige Qualifizierungstests.',
            'Bei Outlier wechseln sich Phasen mit hoher Aufgabenlast und leere Warteschlangen („Empty Queue“ / EQ) oft kurzfristig ab. Daher empfehle ich, Outlier mit festen Talentpools wie Mercor oder Mindrift zu kombinieren.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Wer betreibt Outlier AI?',
          answer:
            'Outlier wird von Scale AI / Smart Ecosystems betrieben.',
        },
        {
          question: 'Wann und wie zahlt Outlier das Honorar aus?',
          answer:
            'Outlier zahlt wöchentlich jeden Dienstag über PayPal, AirTM oder ACH aus.',
        },
        {
          question: 'Kann ich mich bei Outlier mit deutschem oder finnischem Ausweis verifizieren?',
          answer:
            'Ja. Outlier akzeptiert amtliche Ausweise und Mobilnummern aus dem jeweiligen Wohnsitzland in über 50 Ländern.',
        },
        {
          question: 'Warum steht bei Outlier in der Tabelle TBD beim Stundensatz?',
          answer:
            'Weil die öffentliche Outlier-FAQ (Stand 2026-11-05) keine pauschale Dollarspanne nennt, sondern den konkreten Stundensatz projekt- und länderbezogen im Dashboard vor Arbeitsbeginn anzeigt.',
        },
      ],
    },
    micro1: {
      slug: 'micro1',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'micro1 Erfahrungen & Vergütung (2026): KI-Guide | Edithsi',
      metaDescription:
        'Wie funktioniert micro1 für KI-Trainer in Europa? Geprüfter (2026-11-05) Guide zu Realm, Cortex, Medical Index, KI-Interview und Steuern.',
      h1: 'Wie funktioniert micro1 für KI-Trainer? KI-Interview & Rollen',
      directAnswer:
        'micro1 (micro1.ai/experts), betrieben von der micro1 Inc., rekrutiert weltweit Fachexperten aus Software Engineering, Finanzen, Gesundheitswesen, Recht und akademischer Forschung zur Erstellung von Trainingsdaten für führende KI-Labore (Realm, Cortex und Medical Index). Stand 2026-11-05 ist die Vergütung auf der öffentlichen Übersichtsseite als TBD markiert („Competitive compensation for expert knowledge“, konkrete Sätze stehen in den einzelnen Stellenausschreibungen) und Bewerber aus Deutschland, Finnland und ganz Europa können sich remote bewerben.',
      fairnessDisclosure:
        'Ich verdiene $0 an micro1 (kein Affiliate- oder Empfehlungslink). Ich erhalte Empfehlungsprovisionen ausschließlich von Mercor (Code 02e0c12a-d634-4738-9686-04f28f31f52b) und bewerte micro1 nach exakt denselben Kriterien und zum Prüfdatum 2026-11-05 wie alle anderen Plattformen.',
      sections: [
        {
          h2: 'Welche KI-Trainingsarbeit und Fachgebiete bietet micro1 an?',
          paragraphs: [
            'micro1 Inc. entwickelt spezialisierte menschliche Trainingsdaten und Evaluierungsumgebungen für führende KI-Labore. Auf micro1.ai/experts (geprüft am 2026-11-05) stehen vier Programme im Mittelpunkt: Realm (Reinforcement-Learning-Umgebungen), Cortex (kontextuelle Agenten-Evaluierung), Medical Index (medizinische Benchmarks) und Robotik-Daten.',
            'Gesucht werden Experten in Software Engineering, Finance, Healthcare & Medicine, Legal sowie Academic Research & Robotics.',
          ],
        },
        {
          h2: 'Wie funktionieren Vergütung, Auszahlung und Steuern bei micro1 in Europa?',
          paragraphs: [
            'Auf der Übersichtsseite micro1.ai/experts (geprüft am 2026-11-05) wird keine pauschale Stundensatzspanne genannt (TBD mit dem Hinweis „Competitive compensation for expert knowledge“; konkrete Sätze finden sich auf den einzelnen Rollenkarten unter micro1.ai/experts/opportunities).',
            'Auch Auszahlungsrhythmus und Zahlungsdienstleister sind auf der öffentlichen Übersichtsseite als TBD markiert und werden im Bewerberportal beim Onboarding bestätigt. Als selbstständiger Auftragnehmer versteuern Sie sämtliche Einnahmen eigenverantwortlich beim Finanzamt (Deutschland) bzw. bei Vero.fi (Finnland).',
          ],
        },
        {
          h2: 'Können sich Experten in Deutschland, Finnland und Europa bei micro1 bewerben?',
          paragraphs: [
            'Ja. micro1 richtet sich an eine weltweite Remote-Experten-Community, sodass sich Fachkräfte aus Deutschland, Österreich, der Schweiz, Finnland und der EU/EWR bewerben und das automatisierte KI-Interview absolvieren können.',
            'Da einzelne Kundenprojekte länderspezifische Vorgaben haben können (auf der Übersichtsseite TBD pro Projekt), sollten Sie stets die jeweilige Stellenausschreibung prüfen.',
          ],
        },
        {
          h2: 'Wie laufen das automatisierte KI-Interview und das Onboarding bei micro1 ab?',
          paragraphs: [
            'Der Ablauf umfasst vier Schritte: auf micro1.ai/experts/opportunities für eine passende Rolle bewerben, das automatisierte KI-Interview absolvieren (Vorbereitung unter micro1.ai/interview-prep), bei Auswahl das Onboarding abschließen und in gematchten KI-Laborprojekten arbeiten.',
            'Da sowohl micro1 als auch Mercor ein rund 20-minütiges automatisiertes KI-Fachinterview nutzen, zahlt sich eine strukturierte Vorbereitung auf Englisch für beide Plattformen aus.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Was bedeuten Realm, Cortex und Medical Index bei micro1?',
          answer:
            'Es sind die Datenprogramme von micro1: Realm für Reinforcement-Learning-Umgebungen, Cortex für Agenten-Evaluierungen und Medical Index für klinische KI-Benchmarks.',
        },
        {
          question: 'Warum steht bei micro1 in der Übersicht TBD bei der Vergütung?',
          answer:
            'Weil die Hauptseite micro1.ai/experts (Stand 2026-11-05) „Competitive compensation for expert knowledge“ angibt und die konkreten Stundensätze erst in den einzelnen Rollenangeboten nennt.',
        },
        {
          question: 'Kann ich mich auf das KI-Interview bei micro1 vorbereiten?',
          answer:
            'Ja, micro1 stellt unter micro1.ai/interview-prep eine eigene Vorbereitungsseite bereit.',
        },
        {
          question: 'Erhalte ich eine Provision, wenn Sie sich bei micro1 bewerben?',
          answer:
            'Nein. Ich verdiene $0 an micro1.',
        },
      ],
    },
    'handshake-ai': {
      slug: 'handshake-ai',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Handshake AI Erfahrungen & Vergütung (2026): US-Only | Edithsi',
      metaDescription:
        'Wer kann am Handshake AI (MOVE Program) teilnehmen? Geprüfte (2026-11-05) Sätze (bis $150/h) und strikte US-Arbeitserlaubnis-Pflicht.',
      h1: 'Wer kann zu Handshake AI? Vergütung (bis $150/h) & US-Regel',
      directAnswer:
        'Handshake AI (joinhandshake.com/move-program/), betrieben von Handshake (Handshake AI Fellowship / MOVE Program), zahlt Hochschulabsolventen bis zu $17–150/h für akademisches und fachliches LLM-Training sowie Modellvalidierung (geprüft am 2026-11-05). Das Programm ist jedoch strikt US-ONLY: Sie müssen Ihren physischen Wohnsitz in den USA haben und über eine von Handshake unterstützte US-Arbeitserlaubnis verfügen – Einwohner in Deutschland, Finnland und Europa sind ausgeschlossen.',
      fairnessDisclosure:
        'Ich verdiene $0 an Handshake AI (kein Empfehlungscode oder Affiliate-Link). Ich erhalte Provisionen ausschließlich von Mercor (Code 02e0c12a-d634-4738-9686-04f28f31f52b) und führe Handshake AI (geprüft am 2026-11-05) auf, damit europäische Leser sofort erkennen, warum eine Bewerbung aus Europa nicht möglich ist.',
      sections: [
        {
          h2: 'Welche KI-Trainingsarbeit und Fachbereiche bietet Handshake AI an?',
          paragraphs: [
            'Das Handshake AI Fellowship (MOVE Program) rekrutiert Inhaber eines Associate-, Bachelor-, Master-, PhD- oder Postdoc-Abschlusses für Modellvalidierung (MOVE), Prompt-Erstellung und Fachbewertungen.',
            'Bei meiner Prüfung am 2026-11-05 auf joinhandshake.com/move-program/ umfassten die Tracks Software Engineering, Game Development & PCB Tool Engineering, Philosophy & Humanities (PhDs & Postdocs), Finance (FP&A Analyst), Energy Professionals sowie Generalist AI Evaluation.',
          ],
        },
        {
          h2: 'Wie hoch sind die ausgeschriebenen Stundensätze bei Handshake AI?',
          paragraphs: [
            'Auf der öffentlichen MOVE-Program-Seite (geprüft am 2026-11-05) reichen die Obergrenzen von $17/h bis $150/h: Software Engineer Fellow (bis zu $150/h), Game Developer / PCB Tool Specialist (bis zu $125/h), Philosophy Expert für PhDs & Postdocs (bis zu $120/h), FP&A Analyst / Energy Professional (bis zu $80/h) und AI Evaluation Specialist (bis zu $17/h).',
            'Handshake verweist auf über $500M+ Gesamtauszahlungen und vergütet auf Stundenbasis als Independent Contractor (genauer Zahlungsdienstleister auf der öffentlichen Startseite: TBD).',
          ],
        },
        {
          h2: 'Warum ist Handshake AI für Bewerber in Deutschland, Finnland und Europa gesperrt?',
          paragraphs: [
            'Auf joinhandshake.com/move-program/ (geprüft am 2026-11-05) lautet die offizielle Teilnahmebedingung: „To participate in the Handshake AI Fellowship, you must be based in the U.S. and have a valid work authorization that can be supported by Handshake. F-1 students who are eligible for CPT or OPT may be eligible. STEM OPT is not supported.“',
            'Wer in Deutschland, Österreich, der Schweiz, Finnland oder einem anderen europäischen Land lebt und keinen US-Wohnsitz samt unterstützter US-Arbeitserlaubnis hat, sollte keine Zeit mit einer Bewerbung verschwenden, sondern auf Mercor, Mindrift, Outlier oder micro1 ausweichen.',
          ],
        },
        {
          h2: 'Wie läuft die Bewerbung für berechtigte Teilnehmer in den USA ab?',
          paragraphs: [
            'Für Leser mit Wohnsitz und gültiger Arbeitserlaubnis in den USA erfolgt die Bewerbung in drei Schritten unter joinhandshake.com/move-program/: registrieren, Hochschulabschluss und US-Arbeitserlaubnis verifizieren und für passende Fellowship-Tracks bewerben.',
            'Auch hier sind Projektstunden abhängig von aktiven Validierungsrunden und niemals garantiert.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Kann ich mich aus Deutschland, Österreich, der Schweiz oder Finnland bei Handshake AI bewerben?',
          answer:
            'Nein. Handshake AI setzt zwingend einen Wohnsitz in den USA und eine unterstützte US-Arbeitserlaubnis voraus.',
        },
        {
          question: 'Unterstützt Handshake AI F-1 STEM OPT in den USA?',
          answer:
            'Nein. Laut offizieller Webseite (Stand 2026-11-05) sind CPT und reguläres OPT möglich, STEM OPT wird jedoch ausdrücklich nicht unterstützt.',
        },
        {
          question: 'Was ist der höchste ausgeschriebene Stundensatz bei Handshake AI?',
          answer:
            'Stand 2026-11-05 nennt der Track Software Engineer Fellow bis zu $150/h.',
        },
        {
          question: 'Warum führe ich Handshake AI in einem europäischen Vergleich auf, wenn es US-only ist?',
          answer:
            'Weil europäische Akademiker in sozialen Medien häufig Werbung mit den $150/h-Sätzen von Handshake AI sehen; der klare Hinweis auf die US-Pflicht erspart unnötige Registrierungsversuche.',
        },
      ],
    },
  },
  fr: {
    mercor: {
      slug: 'mercor',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Avis Mercor & rémunération (2026) : guide UE | Edithsi',
      metaDescription:
        'Mercor est-il fiable en France et en Finlande ? Tarifs vérifiés le 2026-11-05 ($35–180/h), paiement Stripe, entretien IA et fiscalité URSSAF.',
      h1: 'Mercor est-il fiable ? Tarifs, fonctionnement et guide UE (2026)',
      directAnswer:
        'Mercor (work.mercor.com) est une plateforme américaine qui recrute des spécialistes à distance pour l’évaluation de modèles d’IA (evals), la notation selon des grilles et le prompt engineering, au sein de viviers permanents affichant $35–180/h (tarif Finance fixé par projet ; vérifié le 2026-11-05). Les indépendants en France, en Finlande et dans toute l’UE/EEE peuvent postuler à distance, mais chaque projet client a ses propres critères géographiques et aucun volume horaire hebdomadaire n’est garanti.',
      fairnessDisclosure:
        'Je perçois une commission de parrainage de Mercor lorsqu’une personne postule avec mon code (02e0c12a-d634-4738-9686-04f28f31f52b) et franchit leurs étapes de recrutement. Je perçois $0 de micro1, Outlier, Alignerr, Handshake AI et Mindrift, et j’évalue chaque plateforme avec exactement les mêmes critères, les mêmes sources officielles et la même date de vérification (2026-11-05).',
      sections: [
        {
          h2: 'Quels types de missions d’entraînement d’IA et quels domaines Mercor propose-t-il ?',
          paragraphs: [
            'Mercor recrute des experts confirmés dans des viviers permanents (standing talent pools) plutôt que pour des micro-tâches. Le travail comprend l’évaluation de modèles d’IA par domaine, la rédaction de prompts de raisonnement exigeants, la notation des réponses selon des grilles détaillées et la détection d’hallucinations techniques.',
            'Lors de ma vérification du 2026-11-05 sur work.mercor.com, Mercor listait sept domaines : médecine (médecins, infirmiers, dentistes, pharmaciens, santé publique), droit (avocats inscrits et spécialistes juridiques), génie logiciel, finance (comptabilité, audit, finance d’entreprise, actuariat), logiciels bureautiques, langues & audio (dont finnois, français, espagnol, italien, portugais, polonais, néerlandais) et profils généralistes.',
          ],
        },
        {
          h2: 'Quels tarifs Mercor affiche-t-il et comment fonctionnent le paiement et les impôts en France ?',
          paragraphs: [
            'Les offres publiques de Mercor (vérifiées le 2026-11-05) affichent de $35 à $180/h : Medical Expert ($60–180/h), Legal Expert pour avocats inscrits ($100–150/h), Legal Expert ($60–150/h), Software Engineering Expert ($70–150/h), Office & Productivity Software Expert ($60–70/h), Generalist Expert ($40–70/h) et Language & Audio Expert ($35–50/h). Pour le Finance Expert, le tarif est fixé par projet.',
            'Le paiement est hebdomadaire, en USD, via Stripe, en tant que prestataire indépendant. Aucun impôt n’étant prélevé à la source, vous déclarez vous-même ces revenus : en France, typiquement sous le statut de micro-entrepreneur avec déclaration du chiffre d’affaires à l’URSSAF et déclaration annuelle sur impots.gouv.fr ; en Finlande, auprès de Vero.fi.',
          ],
        },
        {
          h2: 'Les spécialistes en France, en Finlande et en Europe peuvent-ils postuler chez Mercor ?',
          paragraphs: [
            'Oui. Mercor accepte les candidatures à distance depuis la France, la Belgique, la Suisse, la Finlande, l’ensemble de l’UE/EEE, le Royaume-Uni, les États-Unis et le Canada. Les viviers techniques, linguistiques et généralistes sont ouverts aux candidats européens.',
            'L’admission dans un vivier ne signifie toutefois pas une affectation immédiate. Certains projets médicaux ou juridiques pour des clients américains exigent une licence américaine, tandis que les projets logiciels, analytiques et linguistiques font régulièrement appel à des experts européens.',
          ],
        },
        {
          h2: 'Comment se déroulent la candidature et l’entretien vidéo IA chez Mercor ?',
          paragraphs: [
            'La candidature se fait en quatre étapes : déposer votre CV sur l’offre Mercor concernée, passer l’entretien vidéo automatisé par IA (environ 20 minutes) et les éventuels tests métier, attendre un appariement avec un projet dans le vivier, puis finaliser la vérification d’identité et la configuration Stripe.',
            'Préparez l’entretien IA comme un véritable entretien technique en détaillant des projets concrets de votre CV. Le volume de projets fluctue : aucune plateforme ne garantit d’heures hebdomadaires.',
          ],
        },
      ],
      faqs: [
        {
          question: 'La candidature ou l’entretien IA chez Mercor sont-ils payants ?',
          answer:
            'Non. La candidature, l’entretien automatisé et l’entrée dans le vivier sur work.mercor.com sont entièrement gratuits.',
        },
        {
          question: 'Comment Mercor paie-t-il en France ou en Finlande ?',
          answer:
            'Mercor paie chaque semaine en USD via Stripe sur votre compte bancaire européen dès que vous enregistrez des heures sur un projet actif.',
        },
        {
          question: 'Comment déclarer mes revenus Mercor en France ?',
          answer:
            'Vous travaillez en indépendant : en micro-entreprise, vous déclarez votre chiffre d’affaires à l’URSSAF puis vos revenus sur impots.gouv.fr ; en Finlande, la déclaration se fait sur Vero.fi.',
        },
        {
          question: 'Mon lien de parrainage modifie-t-il votre tarif chez Mercor ?',
          answer:
            'Non. Les tarifs affichés et les critères de sélection sont identiques avec ou sans lien de parrainage.',
        },
      ],
    },
    mindrift: {
      slug: 'mindrift',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Avis Mindrift & rémunération (2026) : guide | Edithsi',
      metaDescription:
        'Comment fonctionne Mindrift en Europe ? Tarifs vérifiés le 2026-11-05 ($15–100+/h), paiement par tâche Toloka AI BV, 90+ domaines et impôts.',
      h1: 'Comment fonctionne Mindrift ? Rémunération ($15–100+/h) et tâches',
      directAnswer:
        'Mindrift (mindrift.ai), exploité par Toloka AI BV, recrute des rédacteurs et des experts de plus de 90 domaines pour écrire des prompts, évaluer des réponses d’IA et les réviser, avec des tarifs affichés de $15–100+/h (vérifié le 2026-11-05). La plateforme est ouverte aux indépendants en France, en Finlande et dans l’UE/EEE dans plus de 20 langues, mais le parcours Médecine exige explicitement des médecins diplômés et autorisés aux États-Unis.',
      fairnessDisclosure:
        'Je perçois $0 de Mindrift (aucun lien d’affiliation ni de parrainage). Je ne touche des commissions que de Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b) et j’évalue Mindrift avec exactement les mêmes critères et la même date de vérification (2026-11-05) que toutes les autres plateformes.',
      sections: [
        {
          h2: 'Quelles tâches d’entraînement d’IA et quels domaines Mindrift propose-t-il ?',
          paragraphs: [
            'Sous l’égide de Toloka AI BV, Mindrift se concentre sur la rédaction exigeante, la vérification des faits, la justification argumentée des évaluations et la révision de réponses d’IA dans plus de 90 domaines académiques et professionnels.',
            'Lors de ma vérification du 2026-11-05 sur mindrift.ai, les principaux domaines étaient la recherche STEM, la programmation, le conseil en management (stratégie, opérations et M&A pour consultants MBB et seniors), le droit, l’écriture créative, la linguistique (20+ langues) et la médecine.',
          ],
        },
        {
          h2: 'Combien paie Mindrift et comment fonctionnent le paiement et les impôts en France ?',
          paragraphs: [
            'Sur mindrift.ai (vérifié le 2026-11-05), les tâches débutant/généraliste sont affichées à $15–30/h et les tâches d’experts à $60–100+/h. La page cite aussi jusqu’à $100/h pour les médecins américains, jusqu’à $8 000/mois pour les consultants, jusqu’à $6 400/mois ($60–100+/h) en STEM et jusqu’à $5 400/mois ($60–100+/h) en programmation.',
            'Le paiement est bimensuel (toutes les deux semaines), à la tâche validée, la rémunération étant affichée avant de commencer (prestataire de paiement exact : TBD sur la page publique). En France, ces revenus se déclarent à l’URSSAF en micro-entreprise puis sur impots.gouv.fr ; en Finlande, sur Vero.fi.',
          ],
        },
        {
          h2: 'Mindrift est-il ouvert aux candidats en France, en Finlande et en Europe ?',
          paragraphs: [
            'Oui. Mindrift recrute dans le monde entier dans plus de 20 langues, y compris en France, en Finlande et dans l’UE/EEE (sous réserve des conditions d’éligibilité de Toloka). La société néerlandaise Toloka AI BV offre un cadre juridique familier aux indépendants européens.',
            'Vérifiez toutefois les exigences propres à chaque rôle : le parcours Médecine exige une licence médicale américaine, alors que STEM, programmation, conseil et linguistique sont ouverts aux experts européens.',
          ],
        },
        {
          h2: 'Comment se déroulent la candidature et la qualification chez Mindrift ?',
          paragraphs: [
            'La candidature se fait en trois étapes : envoyer votre CV sur mindrift.ai en indiquant domaine, langues et niveau d’expérience, réussir un test métier ou technique, puis terminer l’onboarding pour accéder aux tâches disponibles.',
            'Comme la rémunération se fait à la tâche validée, votre taux horaire effectif dépend de votre maîtrise des consignes de chaque projet, et aucun volume n’est garanti.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Quelle entreprise exploite Mindrift ?',
          answer:
            'Mindrift est exploité par la société néerlandaise Toloka AI BV.',
        },
        {
          question: 'Mindrift paie-t-il à l’heure ou à la tâche ?',
          answer:
            'Mindrift paie toutes les deux semaines par tâche validée ; la rémunération est affichée avant chaque tâche, sur la base de repères de $15–30/h ou $60–100+/h.',
        },
        {
          question: 'Les médecins européens peuvent-ils rejoindre le parcours Médecine de Mindrift ?',
          answer:
            'Au 2026-11-05, le parcours Médecine public sur mindrift.ai exige une licence américaine ; les experts européens peuvent néanmoins postuler en STEM, programmation, conseil et langues.',
        },
        {
          question: 'Est-ce que je touche une commission si vous rejoignez Mindrift ?',
          answer:
            'Non. Je perçois $0 de Mindrift et je renvoie directement vers mindrift.ai.',
        },
      ],
    },
    alignerr: {
      slug: 'alignerr',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Avis Alignerr & rémunération (2026) : règle ID | Edithsi',
      metaDescription:
        'Alignerr est-il accessible en Europe ? Tarifs vérifiés le 2026-11-05 ($15–120/h), projets Labelbox et mise en garde sur la pièce d’identité US.',
      h1: 'Alignerr est-il ouvert en Europe ? Tarifs, règles d’ID et tests',
      directAnswer:
        'Alignerr (alignerr.com), exploité par Labelbox, Inc., recrute des spécialistes à distance pour l’alignement de modèles d’IA générative, l’évaluation de code et d’éthique et la création de jeux de données vocales, avec des tarifs affichés de $15–120/h (le badge de la page d’accueil cite $80/h en moyenne ; vérifié le 2026-11-05). Si la FAQ générale accueille les candidats internationaux, la FAQ Visa officielle indique que la vérification d’identité Persona n’accepte que des pièces américaines et des numéros de téléphone US/Canada — un point décisif pour les candidats européens.',
      fairnessDisclosure:
        'Je perçois $0 d’Alignerr (aucune relation d’affiliation ou de parrainage). Je ne touche des commissions que de Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b) et j’évalue Alignerr avec exactement les mêmes critères et la même date de vérification (2026-11-05) que toutes les autres plateformes.',
      sections: [
        {
          h2: 'Quels travaux d’entraînement d’IA et quels domaines Alignerr propose-t-il ?',
          paragraphs: [
            'Alignerr appartient à Labelbox, Inc. et fait travailler des experts sur l’entraînement et la calibration de modèles de langage sur la plateforme Labelbox : défis de programmation, revue éthique de l’IA, analyse de données cartographiques et jeux de données vocales et linguistiques.',
            'Lors de ma vérification du 2026-11-05 sur alignerr.com, les rôles couvraient Coding & Software Engineering, STEM & Research, General & Ethics (AI Ethics Reviewer, Data Labeling Specialist, Map & Location Data Analyst), Languages & Audio et Talent Acquisition.',
          ],
        },
        {
          h2: 'Quels tarifs Alignerr affiche-t-il et comment se passent le paiement et les impôts en France ?',
          paragraphs: [
            'Les fiches de rôle publiques sur alignerr.com (vérifiées le 2026-11-05) indiquent $40–120/h pour AI Ethics Reviewer, Data Labeling Specialist et Map & Location Data Analyst, $25–35/h pour les AI Language Experts et $15–25/h pour Talent Acquisition. Pour le code et les STEM, le tarif est fixé par projet (TBD dans la FAQ publique ; la page d’accueil cite $80/h en moyenne).',
            'Le prestataire de paiement et la fréquence des versements sont TBD dans la FAQ publique et ne sont définis qu’à la mise en place du contrat et de la facturation. En France, les revenus se déclarent à l’URSSAF (micro-entreprise) puis sur impots.gouv.fr ; en Finlande, sur Vero.fi.',
          ],
        },
        {
          h2: 'Les candidats en France et en Finlande peuvent-ils passer la vérification Persona d’Alignerr ?',
          paragraphs: [
            'C’est la principale réserve concernant Alignerr (au 2026-11-05) : alors que les pages générales s’adressent aux candidats du monde entier, la FAQ Visa officielle précise que la vérification d’identité via Persona n’accepte que les permis de conduire américains, les cartes d’identité d’État américaines, les permis de travail américains ou les cartes de résident permanent, et que la vérification téléphonique ne fonctionne qu’avec des numéros US/Canada.',
            'Si vous vivez en France, en Belgique, en Suisse ou en Finlande sans pièce d’identité américaine ni numéro US/Canada, la vérification risque d’être bloquée. Vérifiez donc dans votre compte si les passeports européens sont acceptés avant d’investir du temps dans les évaluations.',
          ],
        },
        {
          h2: 'Comment fonctionnent la candidature et l’entretien IA Zara chez Alignerr ?',
          paragraphs: [
            'Connectez-vous avec votre compte Google sur app.alignerr.com, téléversez votre CV, passez la vérification Persona, puis réalisez l’entretien automatisé Zara™ ou les tests de compétences avant la mise en place du contrat et de la facturation.',
            'Même après validation, les heures de projet dépendent de la demande des clients de Labelbox et ne sont jamais garanties.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Qui exploite Alignerr ?',
          answer:
            'Alignerr est exploité par l’entreprise américaine Labelbox, Inc.',
        },
        {
          question: 'Pourquoi la vérification Alignerr échoue-t-elle pour de nombreux Européens ?',
          answer:
            'Selon la FAQ Visa officielle d’Alignerr (au 2026-11-05), Persona n’accepte que des pièces d’identité ou permis de travail américains et des numéros de téléphone des États-Unis ou du Canada.',
        },
        {
          question: 'Quels tarifs Alignerr affiche-t-il publiquement ?',
          answer:
            'Les fiches de rôle (2026-11-05) indiquent $40–120/h pour l’éthique, l’annotation et l’analyse cartographique, $25–35/h pour les experts linguistiques et $15–25/h pour le recrutement.',
        },
        {
          question: 'Est-ce que je touche une commission si vous postulez chez Alignerr ?',
          answer:
            'Non. Je perçois $0 d’Alignerr.',
        },
      ],
    },
    outlier: {
      slug: 'outlier',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Avis Outlier & paiement (2026) : guide Europe | Edithsi',
      metaDescription:
        'Outlier est-il fiable en France ? Vérifié le 2026-11-05 : Scale AI, paiements hebdomadaires le mardi (PayPal, AirTM, ACH), tests et 50+ pays.',
      h1: 'Outlier est-il fiable ? Paiement hebdomadaire, tâches et tests',
      directAnswer:
        'Outlier (outlier.ai), lié à Scale AI / Smart Ecosystems, paie des contributeurs pour rédiger des paires question/réponse exigeantes, créer des grilles de notation et classer des réponses de LLM ; le tarif est affiché projet par projet avant de commencer (fourchette publique : TBD ; vérifié le 2026-11-05). La plateforme accepte les candidats de plus de 50 pays, dont la France et la Finlande, avec une pièce d’identité officielle et un numéro de mobile du pays de résidence, et paie chaque mardi via PayPal, AirTM ou virement ACH.',
      fairnessDisclosure:
        'Je perçois $0 d’Outlier (aucun lien d’affiliation ni de parrainage). Je ne touche des commissions que de Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b) et j’évalue Outlier avec exactement les mêmes critères et la même date de vérification (2026-11-05) que toutes les autres plateformes.',
      sections: [
        {
          h2: 'Quel type de travail et quels domaines Outlier propose-t-il ?',
          paragraphs: [
            'Sur Outlier, les contributeurs rédigent des problèmes complexes avec leurs solutions, conçoivent des grilles de notation et évaluent ou classent les réponses des LLM afin d’améliorer leur exactitude et leur sécurité.',
            'Lors de ma vérification du 2026-11-05 sur outlier.ai, les domaines couvraient le code et le génie logiciel, les STEM (mathématiques, physique, chimie, biologie), les langues (50+ pays, dont des langues européennes) et la rédaction/raisonnement généraliste (diplôme de niveau Bac+2 minimum ; licence, master ou doctorat préférés).',
          ],
        },
        {
          h2: 'Combien paie Outlier et comment fonctionnent le paiement et les impôts en France ?',
          paragraphs: [
            'Outlier ne publie pas de fourchette horaire fixe : les tarifs varient selon l’expertise, la complexité du projet et le lieu de résidence, et le taux de chaque projet est affiché avant de commencer (fourchette publique : TBD au 2026-11-05).',
            'Les paiements sont hebdomadaires, chaque mardi, pour le travail effectué du mardi précédent au lundi minuit UTC, via PayPal, AirTM ou virement ACH, à l’heure ou à la tâche. En France, en tant que micro-entrepreneur, vous déclarez ce chiffre d’affaires à l’URSSAF puis sur impots.gouv.fr ; en Finlande, sur Vero.fi.',
          ],
        },
        {
          h2: 'Outlier accepte-t-il les candidats en France, en Finlande et en Europe ?',
          paragraphs: [
            'Oui. Outlier est actif dans plus de 50 pays, dont des pays européens. Il faut une pièce d’identité officielle valide et un numéro de mobile du pays de résidence. Aucun parrainage de visa n’est proposé.',
            'La disponibilité des projets varie selon la langue et le domaine : les profils STEM, code et langues européennes sont généralement recherchés, mais aucun volume n’est garanti.',
          ],
        },
        {
          h2: 'Comment postuler chez Outlier et réussir les évaluations ?',
          paragraphs: [
            'Le parcours comprend quatre étapes : créer votre profil sur outlier.ai, importer et vérifier vos compétences (CV et profil LinkedIn à jour), valider votre identité avec une pièce officielle et un mobile local, puis réussir les tests généraux (30 à 90 minutes) et les qualifications propres à chaque projet.',
            'Lisez attentivement les consignes avant chaque évaluation : les projets disponibles et les heures dépendent de la demande et ne sont jamais garantis.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Quand Outlier paie-t-il ?',
          answer:
            'Chaque mardi, pour le travail réalisé du mardi précédent au lundi minuit UTC, via PayPal, AirTM ou virement ACH.',
        },
        {
          question: 'Outlier publie-t-il un tarif horaire fixe ?',
          answer:
            'Non. Au 2026-11-05, le tarif dépend de l’expertise, du projet et du lieu de résidence ; il est affiché avant chaque projet (fourchette publique : TBD).',
        },
        {
          question: 'De quoi ai-je besoin pour m’inscrire sur Outlier depuis la France ?',
          answer:
            'D’une pièce d’identité officielle valide, d’un numéro de mobile français (ou de votre pays de résidence) et d’un CV à jour.',
        },
        {
          question: 'Est-ce que je touche une commission si vous rejoignez Outlier ?',
          answer:
            'Non. Je perçois $0 d’Outlier.',
        },
      ],
    },
    micro1: {
      slug: 'micro1',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Avis micro1 & missions experts (2026) : guide | Edithsi',
      metaDescription:
        'Comment fonctionne micro1 pour les experts européens ? Vérifié le 2026-11-05 : entretien IA, domaines (code, finance, santé, droit) et impôts.',
      h1: 'Comment fonctionne micro1 ? Entretien IA, domaines et tarifs',
      directAnswer:
        'micro1 (micro1.ai/experts), opéré par micro1 Inc., recrute des experts pour produire des données humaines destinées aux laboratoires d’IA de pointe, construire des environnements d’apprentissage par renforcement et mener des évaluations d’agents ; les tarifs sont publiés offre par offre (fourchette publique : TBD ; vérifié le 2026-11-05). La communauté est mondiale et à distance, y compris pour la France et la Finlande, mais les restrictions géographiques par projet sont TBD sur la page publique.',
      fairnessDisclosure:
        'Je perçois $0 de micro1 (aucun lien d’affiliation ni de parrainage). Je ne touche des commissions que de Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b) et j’évalue micro1 avec exactement les mêmes critères et la même date de vérification (2026-11-05) que toutes les autres plateformes.',
      sections: [
        {
          h2: 'Quel type de travail d’IA et quels domaines micro1 propose-t-il ?',
          paragraphs: [
            'micro1 produit des données humaines pour les laboratoires d’IA de pointe : environnements d’apprentissage par renforcement réalistes (Realm), évaluations contextuelles d’agents (Cortex), benchmarks médicaux (Medical Index) et données pour la robotique.',
            'Lors de ma vérification du 2026-11-05 sur micro1.ai/experts, les domaines recherchés étaient le génie logiciel, la finance, la santé et la médecine, le droit, ainsi que la recherche académique et la robotique.',
          ],
        },
        {
          h2: 'Combien paie micro1 et comment fonctionnent le paiement et les impôts en France ?',
          paragraphs: [
            'La page publique de micro1 évoque une « rémunération compétitive pour l’expertise » sans fourchette globale : les tarifs sont indiqués sur chaque offre (fourchette publique : TBD au 2026-11-05).',
            'Vous êtes rémunéré en tant que prestataire indépendant ; le calendrier et le mode de paiement exacts sont TBD sur la page publique et se confirment dans le portail candidat lors de l’onboarding. En France, déclarez ces revenus à l’URSSAF (micro-entreprise) puis sur impots.gouv.fr ; en Finlande, sur Vero.fi.',
          ],
        },
        {
          h2: 'micro1 accepte-t-il les experts en France, en Finlande et en Europe ?',
          paragraphs: [
            'micro1 présente sa communauté d’experts comme mondiale et entièrement à distance, ce qui inclut en principe la France, la Finlande et le reste de l’Europe.',
            'Les restrictions géographiques par projet ne sont pas détaillées publiquement (TBD au 2026-11-05) : vérifiez chaque offre avant de passer l’entretien.',
          ],
        },
        {
          h2: 'Comment postuler chez micro1 et préparer l’entretien IA ?',
          paragraphs: [
            'Le parcours comporte quatre étapes : postuler à une offre sur micro1.ai/experts/opportunities, passer l’entretien automatisé par IA (préparation disponible sur micro1.ai/interview-prep), compléter l’onboarding si vous êtes retenu, puis commencer sur les projets attribués.',
            'L’entretien IA évalue votre expertise réelle ; préparez des exemples concrets. Le volume de projets n’est jamais garanti.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Qui exploite micro1 ?',
          answer:
            'micro1 est exploité par micro1 Inc.',
        },
        {
          question: 'micro1 publie-t-il ses tarifs horaires ?',
          answer:
            'Pas sur la page générale : au 2026-11-05, les tarifs sont indiqués sur chaque offre individuelle (fourchette publique : TBD).',
        },
        {
          question: 'Comment se préparer à l’entretien IA de micro1 ?',
          answer:
            'micro1 propose une page de préparation sur micro1.ai/interview-prep ; présentez des cas concrets tirés de votre expérience professionnelle.',
        },
        {
          question: 'Est-ce que je touche une commission si vous rejoignez micro1 ?',
          answer:
            'Non. Je perçois $0 de micro1.',
        },
      ],
    },
    'handshake-ai': {
      slug: 'handshake-ai',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Handshake AI (2026) : réservé aux États-Unis ? | Edithsi',
      metaDescription:
        'Peut-on rejoindre Handshake AI depuis la France ou la Finlande ? Vérifié le 2026-11-05 : programme réservé aux résidents US, tarifs $17–150/h.',
      h1: 'Peut-on rejoindre Handshake AI depuis l’Europe ? Règles et tarifs',
      directAnswer:
        'Handshake AI (joinhandshake.com/move-program/), le programme Fellowship/MOVE de Handshake, rémunère des titulaires de diplômes (Bac+2 à postdoctorat) pour l’entraînement et la validation de LLM, avec des tarifs allant jusqu’à $17–150/h selon le parcours (vérifié le 2026-11-05). Le programme est réservé aux personnes basées aux États-Unis disposant d’une autorisation de travail prise en charge par Handshake : il n’est donc pas ouvert aux résidents de France, de Finlande ou d’Europe.',
      fairnessDisclosure:
        'Je perçois $0 de Handshake AI (aucun lien d’affiliation ni de parrainage). Je ne touche des commissions que de Mercor (code 02e0c12a-d634-4738-9686-04f28f31f52b) et j’évalue Handshake AI avec exactement les mêmes critères et la même date de vérification (2026-11-05) que toutes les autres plateformes.',
      sections: [
        {
          h2: 'Quel type de travail et quels domaines Handshake AI propose-t-il ?',
          paragraphs: [
            'Handshake AI fait appel à des diplômés (Bac+2, licence, master, doctorat, postdoc) pour l’entraînement académique et professionnel de LLM, la validation de modèles (MOVE), la création de prompts et l’évaluation par domaine.',
            'Lors de ma vérification du 2026-11-05, les parcours incluaient le génie logiciel, la finance (analyste FP&A), le développement de jeux vidéo et l’outillage PCB, la philosophie et les sciences humaines (doctorants et postdocs), les professionnels de l’énergie et l’évaluation IA généraliste.',
          ],
        },
        {
          h2: 'Combien paie Handshake AI et comment fonctionnent le paiement et les impôts ?',
          paragraphs: [
            'Au 2026-11-05, la page officielle indiquait : Software Engineer Fellow jusqu’à $150/h, Game Developer / PCB Tool Specialist jusqu’à $125/h, Philosophy Expert jusqu’à $120/h, FP&A Analyst / Energy Professional jusqu’à $80/h et AI Evaluation Specialist jusqu’à $17/h.',
            'La rémunération est horaire, en tant que prestataire indépendant (la page cite plus de $500M versés au total ; mode de paiement exact : TBD). Comme le programme exige d’être basé aux États-Unis, la fiscalité relève du système américain et non de l’URSSAF ou d’impots.gouv.fr.',
          ],
        },
        {
          h2: 'Les résidents de France, de Finlande et d’Europe peuvent-ils participer à Handshake AI ?',
          paragraphs: [
            'Non. La page officielle précise : « Pour participer au Handshake AI Fellowship, vous devez être basé aux États-Unis et disposer d’une autorisation de travail valide pouvant être prise en charge par Handshake. » Les étudiants F-1 éligibles au CPT ou à l’OPT peuvent l’être ; le STEM OPT n’est pas accepté.',
            'Si vous résidez en France, en Belgique, en Suisse ou en Finlande, je vous conseille plutôt de regarder les plateformes ouvertes à l’Europe, comme Mercor, Mindrift ou Outlier.',
          ],
        },
        {
          h2: 'Comment postuler chez Handshake AI si l’on est basé aux États-Unis ?',
          paragraphs: [
            'Pour les personnes résidant aux États-Unis avec une autorisation de travail valide, la candidature se fait en trois étapes sur joinhandshake.com/move-program/ : s’inscrire, faire vérifier son diplôme et son autorisation de travail, puis postuler aux parcours correspondants et terminer l’onboarding.',
            'Là aussi, les heures dépendent des cycles de validation actifs et ne sont jamais garanties.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Puis-je postuler chez Handshake AI depuis la France, la Belgique ou la Finlande ?',
          answer:
            'Non. Handshake AI exige d’être basé aux États-Unis avec une autorisation de travail prise en charge.',
        },
        {
          question: 'Handshake AI accepte-t-il le F-1 STEM OPT ?',
          answer:
            'Non. Selon la page officielle (au 2026-11-05), le CPT et l’OPT classique peuvent être éligibles, mais le STEM OPT n’est pas pris en charge.',
        },
        {
          question: 'Quel est le tarif horaire le plus élevé affiché par Handshake AI ?',
          answer:
            'Au 2026-11-05, le parcours Software Engineer Fellow affiche jusqu’à $150/h.',
        },
        {
          question: 'Pourquoi inclure Handshake AI dans un comparatif européen alors qu’il est réservé aux États-Unis ?',
          answer:
            'Parce que de nombreux diplômés européens voient passer des publicités à $150/h sur les réseaux sociaux ; préciser la condition de résidence américaine évite des inscriptions inutiles.',
        },
      ],
    },
  },
  es: {
    mercor: {
      slug: 'mercor',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Opiniones de Mercor y pagos (2026): guía UE | Edithsi',
      metaDescription:
        '¿Es Mercor fiable en España y Finlandia? Tarifas verificadas el 2026-11-05 ($35–180/h), pagos por Stripe, entrevista con IA e impuestos de autónomo.',
      h1: '¿Es Mercor fiable? Tarifas, funcionamiento y guía UE (2026)',
      directAnswer:
        'Mercor (work.mercor.com) es una plataforma estadounidense que contrata especialistas en remoto para evaluar modelos de IA (evals), calificar respuestas con rúbricas y hacer prompt engineering en bolsas de talento permanentes con tarifas publicadas de $35–180/h (Finanzas: tarifa fijada por proyecto; verificado el 2026-11-05). Los profesionales independientes de España, Finlandia y toda la UE/EEE pueden postularse en remoto, aunque cada proyecto de cliente tiene sus propios requisitos geográficos y nunca se garantizan horas semanales.',
      fairnessDisclosure:
        'Recibo una comisión por referido de Mercor cuando alguien se postula con mi código (02e0c12a-d634-4738-9686-04f28f31f52b) y supera sus hitos de contratación. Recibo $0 de micro1, Outlier, Alignerr, Handshake AI y Mindrift, y evalúo todas las plataformas con exactamente los mismos criterios, las mismas fuentes oficiales y la misma fecha de verificación (2026-11-05).',
      sections: [
        {
          h2: '¿Qué tipo de trabajo de entrenamiento de IA y qué áreas ofrece Mercor?',
          paragraphs: [
            'Mercor recluta especialistas acreditados en bolsas de talento permanentes (standing talent pools) en lugar de microtareas. El trabajo incluye evaluaciones de modelos de IA por especialidad, redacción de prompts de razonamiento exigentes, calificación de respuestas con rúbricas detalladas y detección de alucinaciones técnicas.',
            'En mi revisión del 2026-11-05 en work.mercor.com, Mercor listaba siete áreas: medicina (médicos, enfermería, odontología, farmacia, salud pública), derecho (abogados colegiados y especialistas jurídicos), ingeniería de software, finanzas (contabilidad, auditoría, finanzas corporativas, actuaría), software de ofimática, idiomas y audio (entre ellos finés, francés, español, italiano, portugués, polaco y neerlandés) y perfiles generalistas.',
          ],
        },
        {
          h2: '¿Cuánto paga Mercor y cómo funcionan los pagos y los impuestos en España?',
          paragraphs: [
            'Las ofertas públicas de Mercor (verificadas el 2026-11-05) publican de $35 a $180/h: Medical Expert ($60–180/h), Legal Expert para abogados colegiados ($100–150/h), Legal Expert ($60–150/h), Software Engineering Expert ($70–150/h), Office & Productivity Software Expert ($60–70/h), Generalist Expert ($40–70/h) y Language & Audio Expert ($35–50/h). En Finance Expert la tarifa se fija por proyecto.',
            'Los pagos son semanales, en USD, a través de Stripe, como contratista independiente. Como no se aplica retención, tú mismo declaras los ingresos: en España, normalmente dándote de alta como autónomo en Hacienda (Agencia Tributaria) y en la Seguridad Social (RETA) y declarando en el IRPF; en Finlandia, ante Vero.fi.',
          ],
        },
        {
          h2: '¿Pueden postularse a Mercor profesionales de España, Finlandia y el resto de Europa?',
          paragraphs: [
            'Sí. Mercor acepta candidaturas en remoto desde España, Finlandia, toda la UE/EEE, el Reino Unido, Estados Unidos y Canadá. Las bolsas técnicas, de idiomas y generalistas están abiertas a candidatos europeos.',
            'Ahora bien, entrar en una bolsa de talento no implica una asignación inmediata. Algunos proyectos médicos o jurídicos de clientes estadounidenses exigen licencia en EE. UU., mientras que los proyectos de software, análisis e idiomas incorporan con frecuencia a expertos europeos.',
          ],
        },
        {
          h2: '¿Cómo es el proceso de candidatura y la videoentrevista con IA de Mercor?',
          paragraphs: [
            'El proceso tiene cuatro pasos: subir tu CV en la oferta de Mercor correspondiente, completar la videoentrevista automatizada con IA (unos 20 minutos) y las pruebas específicas del puesto, esperar a que te asignen un proyecto desde la bolsa y, una vez asignado, completar la verificación de identidad y la configuración de Stripe.',
            'Prepara la entrevista con IA como una entrevista técnica real y explica proyectos concretos de tu CV. El volumen de proyectos fluctúa: ninguna plataforma garantiza horas semanales.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Cuesta dinero postularse o hacer la entrevista con IA en Mercor?',
          answer:
            'No. La candidatura, la entrevista automatizada y la entrada en la bolsa de talento en work.mercor.com son totalmente gratuitas.',
        },
        {
          question: '¿Cómo paga Mercor en España o Finlandia?',
          answer:
            'Mercor paga semanalmente en USD a través de Stripe a tu cuenta bancaria europea en cuanto registras horas en un proyecto activo.',
        },
        {
          question: '¿Cómo declaro los ingresos de Mercor en España?',
          answer:
            'Trabajas por cuenta propia: lo habitual es darse de alta como autónomo en la Agencia Tributaria y la Seguridad Social y declarar los ingresos en el IRPF; en Finlandia se declaran en Vero.fi.',
        },
        {
          question: '¿Mi enlace de referido cambia tu tarifa en Mercor?',
          answer:
            'No. Las tarifas publicadas y los criterios de selección son idénticos con o sin enlace de referido.',
        },
      ],
    },
    mindrift: {
      slug: 'mindrift',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Opiniones de Mindrift y pagos (2026): guía | Edithsi',
      metaDescription:
        '¿Cómo funciona Mindrift en Europa? Tarifas verificadas el 2026-11-05 ($15–100+/h), pago por tarea de Toloka AI BV, 90+ áreas e impuestos.',
      h1: '¿Cómo funciona Mindrift? Pagos ($15–100+/h) y tareas',
      directAnswer:
        'Mindrift (mindrift.ai), gestionada por Toloka AI BV, contrata redactores y expertos de más de 90 áreas para escribir prompts, evaluar respuestas de IA y editarlas, con tarifas publicadas de $15–100+/h (verificado el 2026-11-05). Está abierta a independientes en España, Finlandia y la UE/EEE en más de 20 idiomas, aunque el itinerario de Medicina exige expresamente médicos con licencia en EE. UU.',
      fairnessDisclosure:
        'Recibo $0 de Mindrift (sin enlace de afiliado ni de referido). Solo cobro comisiones de Mercor (código 02e0c12a-d634-4738-9686-04f28f31f52b) y evalúo Mindrift con exactamente los mismos criterios y la misma fecha de verificación (2026-11-05) que el resto de plataformas.',
      sections: [
        {
          h2: '¿Qué tareas de entrenamiento de IA y qué áreas ofrece Mindrift?',
          paragraphs: [
            'Bajo Toloka AI BV, Mindrift se centra en redacción exigente, verificación de datos, justificación razonada de evaluaciones y edición de respuestas de IA en más de 90 áreas académicas y profesionales.',
            'En mi revisión del 2026-11-05 en mindrift.ai, las áreas principales eran investigación STEM, programación, consultoría de gestión (estrategia, operaciones y M&A para consultores MBB y sénior), derecho, escritura creativa, lingüística (20+ idiomas) y medicina.',
          ],
        },
        {
          h2: '¿Cuánto paga Mindrift y cómo funcionan los pagos y los impuestos en España?',
          paragraphs: [
            'En mindrift.ai (verificado el 2026-11-05) se publican $15–30/h para tareas de nivel inicial o generalistas y $60–100+/h para expertos. La página también cita hasta $100/h para médicos estadounidenses, hasta $8.000/mes para consultores, hasta $6.400/mes ($60–100+/h) en STEM y hasta $5.400/mes ($60–100+/h) en programación.',
            'Se paga cada dos semanas por tarea completada, y el importe se muestra antes de empezar (procesador de pagos exacto: TBD en la página pública). En España, declaras estos ingresos como autónomo ante la Agencia Tributaria y cotizas a la Seguridad Social; en Finlandia, en Vero.fi.',
          ],
        },
        {
          h2: '¿Está Mindrift abierta a candidatos de España, Finlandia y Europa?',
          paragraphs: [
            'Sí. Mindrift recluta en todo el mundo en más de 20 idiomas, incluidos España, Finlandia y la UE/EEE (según las condiciones de elegibilidad de Toloka). Al ser Toloka AI BV una sociedad neerlandesa, el marco legal resulta familiar para los autónomos europeos.',
            'Revisa siempre los requisitos de cada puesto: el itinerario de Medicina exige licencia médica estadounidense, mientras que STEM, programación, consultoría y lingüística están abiertos a expertos europeos.',
          ],
        },
        {
          h2: '¿Cómo es el proceso de candidatura y cualificación en Mindrift?',
          paragraphs: [
            'La candidatura tiene tres pasos: enviar tu CV en mindrift.ai indicando área, idiomas y nivel de experiencia, superar una prueba de especialidad o técnica y completar el onboarding para acceder a las tareas disponibles.',
            'Como se paga por tarea aceptada, tu tarifa horaria real depende de tu soltura con las pautas de cada proyecto, y no se garantiza ningún volumen.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Qué empresa gestiona Mindrift?',
          answer:
            'Mindrift está gestionada por la empresa neerlandesa Toloka AI BV.',
        },
        {
          question: '¿Mindrift paga por hora o por tarea?',
          answer:
            'Mindrift paga cada dos semanas por tarea completada; el importe se muestra antes de cada tarea, con referencias de $15–30/h o $60–100+/h.',
        },
        {
          question: '¿Pueden los médicos europeos unirse al itinerario de Medicina de Mindrift?',
          answer:
            'A fecha de 2026-11-05, el itinerario público de Medicina en mindrift.ai exige licencia estadounidense; los expertos europeos pueden postularse a STEM, programación, consultoría e idiomas.',
        },
        {
          question: '¿Cobro comisión si te unes a Mindrift?',
          answer:
            'No. Recibo $0 de Mindrift y enlazo directamente a mindrift.ai.',
        },
      ],
    },
    alignerr: {
      slug: 'alignerr',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Opiniones de Alignerr y pagos (2026): regla ID | Edithsi',
      metaDescription:
        '¿Se puede usar Alignerr en Europa? Tarifas verificadas el 2026-11-05 ($15–120/h), proyectos de Labelbox y aviso sobre el documento de identidad de EE. UU.',
      h1: '¿Está Alignerr abierta en Europa? Tarifas, reglas de ID y pruebas',
      directAnswer:
        'Alignerr (alignerr.com), gestionada por Labelbox, Inc., contrata especialistas en remoto para alinear modelos de IA generativa, evaluar código y ética y crear conjuntos de datos de voz, con tarifas publicadas de $15–120/h (la insignia de la portada cita $80/h de media; verificado el 2026-11-05). Aunque sus preguntas frecuentes generales invitan a candidatos internacionales, la FAQ oficial de visados indica que la verificación de identidad con Persona solo admite documentos de EE. UU. y teléfonos de EE. UU./Canadá, algo decisivo para candidatos europeos.',
      fairnessDisclosure:
        'Recibo $0 de Alignerr (sin relación de afiliado ni de referido). Solo cobro comisiones de Mercor (código 02e0c12a-d634-4738-9686-04f28f31f52b) y evalúo Alignerr con exactamente los mismos criterios y la misma fecha de verificación (2026-11-05) que el resto de plataformas.',
      sections: [
        {
          h2: '¿Qué trabajo de entrenamiento de IA y qué áreas ofrece Alignerr?',
          paragraphs: [
            'Alignerr pertenece a Labelbox, Inc. e incorpora expertos al entrenamiento y la calibración de modelos de lenguaje en la plataforma Labelbox: retos de programación, revisión ética de IA, análisis de datos cartográficos y conjuntos de datos de voz e idiomas.',
            'En mi revisión del 2026-11-05 en alignerr.com, los puestos abarcaban Coding & Software Engineering, STEM & Research, General & Ethics (AI Ethics Reviewer, Data Labeling Specialist, Map & Location Data Analyst), Languages & Audio y Talent Acquisition.',
          ],
        },
        {
          h2: '¿Cuánto paga Alignerr y cómo funcionan los pagos y los impuestos en España?',
          paragraphs: [
            'Las fichas públicas de alignerr.com (verificadas el 2026-11-05) muestran $40–120/h para AI Ethics Reviewer, Data Labeling Specialist y Map & Location Data Analyst, $25–35/h para AI Language Experts y $15–25/h para Talent Acquisition. En programación y STEM la tarifa se fija por proyecto (TBD en la FAQ pública; la portada cita $80/h de media).',
            'El procesador de pagos y la frecuencia de cobro figuran como TBD en la FAQ pública y se definen al configurar el contrato y la facturación. En España, los ingresos se declaran como autónomo ante la Agencia Tributaria, con alta en la Seguridad Social; en Finlandia, en Vero.fi.',
          ],
        },
        {
          h2: '¿Pueden los candidatos de España y Finlandia superar la verificación Persona de Alignerr?',
          paragraphs: [
            'Esta es la principal advertencia sobre Alignerr (a fecha de 2026-11-05): aunque las páginas generales se dirigen a candidatos de todo el mundo, la FAQ oficial de visados indica que la verificación de identidad con Persona solo admite permisos de conducir de EE. UU., documentos de identidad estatales de EE. UU., permisos de trabajo de EE. UU. o tarjetas de residencia permanente, y que la verificación telefónica solo funciona con números de EE. UU./Canadá.',
            'Si vives en España, Finlandia u otro país europeo sin documento estadounidense ni número de EE. UU./Canadá, la verificación puede bloquearse. Comprueba en tu cuenta si se aceptan pasaportes europeos antes de invertir tiempo en las pruebas.',
          ],
        },
        {
          h2: '¿Cómo funcionan la candidatura y la entrevista con IA Zara en Alignerr?',
          paragraphs: [
            'Inicia sesión con tu cuenta de Google en app.alignerr.com, sube tu CV, completa la verificación con Persona y realiza la entrevista automatizada Zara™ o las pruebas de habilidades antes de configurar el contrato y la facturación.',
            'Incluso tras superar el proceso, las horas dependen de la demanda de los clientes de Labelbox y nunca están garantizadas.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Quién gestiona Alignerr?',
          answer:
            'Alignerr está gestionada por la empresa estadounidense Labelbox, Inc.',
        },
        {
          question: '¿Por qué falla la verificación de Alignerr a muchos europeos?',
          answer:
            'Según la FAQ oficial de visados de Alignerr (a fecha de 2026-11-05), Persona solo acepta documentos de identidad o permisos de trabajo de EE. UU. y teléfonos de EE. UU. o Canadá.',
        },
        {
          question: '¿Qué tarifas publica Alignerr?',
          answer:
            'Las fichas (2026-11-05) muestran $40–120/h para ética, etiquetado y análisis cartográfico, $25–35/h para expertos en idiomas y $15–25/h para captación de talento.',
        },
        {
          question: '¿Cobro comisión si te postulas a Alignerr?',
          answer:
            'No. Recibo $0 de Alignerr.',
        },
      ],
    },
    outlier: {
      slug: 'outlier',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Opinión Outlier y pagos (2026): guía Europa | Edithsi',
      metaDescription:
        '¿Es fiable Outlier en España y Europa? Verificado el 2026-11-05: Scale AI, pagos semanales los martes (PayPal, AirTM, ACH), pruebas y más de 50 países.',
      h1: '¿Es fiable Outlier? Pagos semanales, tareas y pruebas de acceso',
      directAnswer:
        'Outlier (outlier.ai), vinculado a Scale AI / Smart Ecosystems, remunera a colaboradores por redactar pares de preguntas y respuestas complejas, diseñar matrices de evaluación y puntuar respuestas de LLM; la tarifa se detalla proyecto a proyecto antes de empezar (rango público: TBD; verificado el 2026-11-05). La plataforma acepta candidatos de más de 50 países, incluidos España y Finlandia, con documento de identidad y móvil local, y paga cada martes mediante PayPal, AirTM o transferencia ACH.',
      fairnessDisclosure:
        'Percibo $0 de Outlier (sin enlaces de afiliación ni patrocinio). Únicamente recibo comisiones de Mercor (código 02e0c12a-d634-4738-9686-04f28f31f52b) y evalúo Outlier con los mismos criterios y fecha de verificación (2026-11-05) que el resto de plataformas.',
      sections: [
        {
          h2: '¿Qué tipo de trabajo y áreas de especialidad ofrece Outlier?',
          paragraphs: [
            'En Outlier, los especialistas formulan problemas avanzados con soluciones contrastadas, definen matrices de evaluación (rubrics) y analizan respuestas de modelos de lenguaje para asegurar precisión fáctica y seguridad.',
            'En mi revisión del 2026-11-05 en outlier.ai, las áreas incluían programación e ingeniería de software, ciencias STEM (matemáticas, física, química, biología), idiomas (más de 50 países) y redacción o razonamiento generalista (se requiere al menos titulación de grado medio o superior).',
          ],
        },
        {
          h2: '¿Cuánto paga Outlier y cómo funcionan los pagos e impuestos en España?',
          paragraphs: [
            'Outlier no publica una tarifa horaria fija global: las tarifas dependen del proyecto, la especialidad y el país de residencia, indicándose antes de comenzar cada tarea (rango público: TBD a 2026-11-05).',
            'Los pagos son semanales los martes por el trabajo completado hasta el lunes a medianoche UTC, vía PayPal, AirTM o ACH. En España, los ingresos deben declararse como autónomo ante la Agencia Tributaria y cotizar en la Seguridad Social; en Finlandia, ante Vero.fi.',
          ],
        },
        {
          h2: '¿Acepta Outlier candidatos de España, Finlandia y Europa?',
          paragraphs: [
            'Sí. Outlier opera en más de 50 países, incluidos España, Finlandia y otros estados de la UE. Se precisa un documento de identidad oficial válido y un número de teléfono del país de residencia. No se ofrece patrocinio de visados.',
            'La disponibilidad de proyectos fluctúa según la demanda de los clientes de Scale AI en idiomas europeos, STEM y código, sin horas garantizadas.',
          ],
        },
        {
          h2: '¿Cómo postularse en Outlier y superar las evaluaciones?',
          paragraphs: [
            'El registro se hace en outlier.ai completando el perfil profesional, verificando la identidad con documento oficial y móvil local, y aprobando las evaluaciones iniciales (30 a 90 minutos) y las cualificaciones específicas de proyecto.',
            'Es fundamental leer las instrucciones de cada rúbrica con atención: el acceso a proyectos depende de la calidad continua.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Cuándo realiza los pagos Outlier?',
          answer:
            'Todos los martes, por el trabajo registrado del martes anterior al lunes a medianoche UTC, mediante PayPal, AirTM o ACH.',
        },
        {
          question: '¿Publica Outlier una tarifa fija?',
          answer:
            'No. A fecha 2026-11-05, la tarifa depende del proyecto y el perfil y se muestra antes de aceptar cada tarea (rango público: TBD).',
        },
        {
          question: '¿Qué se necesita para registrarse en Outlier desde España?',
          answer:
            'Documento de identidad oficial válido, número de móvil del país de residencia y currículum actualizado.',
        },
        {
          question: '¿Cobro comisión si te unes a Outlier?',
          answer:
            'No. Recibo $0 de Outlier.',
        },
      ],
    },
    micro1: {
      slug: 'micro1',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Opinión micro1 y proyectos de IA (2026): guía | Edithsi',
      metaDescription:
        '¿Cómo funciona micro1 para especialistas europeos? Verificado el 2026-11-05: entrevista con IA, áreas (código, finanzas, medicina, derecho) e impuestos.',
      h1: '¿Cómo funciona micro1? Entrevista con IA, áreas y condiciones',
      directAnswer:
        'micro1 (micro1.ai/experts), operado por micro1 Inc., selecciona especialistas para generar datos de alta calidad destinados a laboratorios líderes de IA, diseñar entornos de aprendizaje por refuerzo y evaluar agentes autónomos; las tarifas se indican por vacante (rango público: TBD; verificado el 2026-11-05). La comunidad es global y remota, cubriendo España y Finlandia, aunque los requisitos específicos por proyecto figuran como TBD en su web pública.',
      fairnessDisclosure:
        'Percibo $0 de micro1 (sin enlaces de afiliación ni patrocinio). Únicamente recibo comisiones de Mercor (código 02e0c12a-d634-4738-9686-04f28f31f52b) y evalúo micro1 con los mismos criterios y fecha de verificación (2026-11-05) que las demás plataformas.',
      sections: [
        {
          h2: '¿Qué tipo de trabajo y áreas de especialidad ofrece micro1?',
          paragraphs: [
            'micro1 colabora con laboratorios de IA construyendo entornos de aprendizaje por refuerzo (Realm), evaluaciones para agentes (Cortex), índices médicos (Medical Index) y datos de robótica.',
            'A fecha 2026-11-05 en micro1.ai/experts, las especialidades incluían desarrollo de software, finanzas, salud y medicina, derecho, robótica e investigación académica.',
          ],
        },
        {
          h2: '¿Cuánto paga micro1 y cómo tributan los ingresos en España?',
          paragraphs: [
            'micro1 menciona remuneración competitiva acorde a la experiencia sin fijar una tabla global pública: las tarifas se especifican al postular a cada vacante (rango público: TBD a 2026-11-05).',
            'Se colabora como contratista independiente; el procesador de pagos y la periodicidad se definen en el portal del candidato. En España, los rendimientos deben declararse ante la Agencia Tributaria en el régimen de autónomos; en Finlandia, ante Vero.fi.',
          ],
        },
        {
          h2: '¿Acepta micro1 expertos de España, Finlandia y Europa?',
          paragraphs: [
            'micro1 define su comunidad como global y 100 % remota, por lo que especialistas de España, Finlandia y el resto de Europa pueden postularse en principio.',
            'Los requisitos territoriales concretos de cada proyecto figuran como TBD en la web pública, por lo que conviene verificar cada oferta antes de la entrevista.',
          ],
        },
        {
          h2: '¿Cómo postularse en micro1 y preparar la entrevista con IA?',
          paragraphs: [
            'El proceso consiste en solicitar un puesto en micro1.ai/experts/opportunities, realizar la entrevista automatizada por IA (con guía en micro1.ai/interview-prep), completar el onboarding si se supera y esperar asignación de proyecto.',
            'La entrevista por IA evalúa profundidad técnica real con preguntas de seguimiento. Ninguna plataforma garantiza volumen continuo.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Quién gestiona micro1?',
          answer:
            'micro1 está gestionada por la firma estadounidense micro1 Inc.',
        },
        {
          question: '¿Publica micro1 tarifas horarias fijas?',
          answer:
            'No en la portada: a 2026-11-05 las tarifas se informan en cada oferta concreta (rango público: TBD).',
        },
        {
          question: '¿Cómo prepararse para la entrevista con IA de micro1?',
          answer:
            'micro1 ofrece pautas en micro1.ai/interview-prep; conviene preparar ejemplos prácticos y proyectos reales de tu especialidad.',
        },
        {
          question: '¿Cobro comisión si te unes a micro1?',
          answer:
            'No. Recibo $0 de micro1.',
        },
      ],
    },
    'handshake-ai': {
      slug: 'handshake-ai',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      title: 'Handshake AI (2026): ¿solo para EE. UU.? | Edithsi',
      metaDescription:
        '¿Se puede trabajar en Handshake AI desde España o Finlandia? Verificado el 2026-11-05: programa exclusivo para residentes en EE. UU., tarifas $17–150/h.',
      h1: '¿Se puede acceder a Handshake AI desde Europa? Reglas y tarifas',
      directAnswer:
        'Handshake AI (joinhandshake.com/move-program/), el programa MOVE/Fellowship de Handshake, contrata a graduados (de FP superior a doctorado) para entrenamiento y validación de modelos de IA con tarifas de hasta $17–150/h según la disciplina (verificado el 2026-11-05). Sin embargo, el programa exige expresamente residir en Estados Unidos y poseer autorización de trabajo admitida por Handshake, por lo que no está disponible para residentes en España, Finlandia ni el resto de Europa.',
      fairnessDisclosure:
        'Percibo $0 de Handshake AI (sin enlaces de afiliación ni patrocinio). Únicamente recibo comisiones de Mercor (código 02e0c12a-d634-4738-9686-04f28f31f52b) y evalúo Handshake AI con los mismos criterios y fecha de verificación (2026-11-05) que las demás plataformas.',
      sections: [
        {
          h2: '¿Qué tipo de trabajo y disciplinas abarca Handshake AI?',
          paragraphs: [
            'Handshake AI convoca a titulados universitarios para calibración de modelos LLM, validación MOVE, redacción de prompts avanzados y evaluación por disciplinas.',
            'A fecha 2026-11-05, los itinerarios incluían ingeniería de software, finanzas (analistas FP&A), desarrollo de videojuegos y placas PCB, filosofía y humanidades (doctorandos y postdoctorados), energía y evaluación generalista de IA.',
          ],
        },
        {
          h2: '¿Cuánto paga Handshake AI y cómo funcionan los pagos?',
          paragraphs: [
            'En su web oficial a 2026-11-05 se publicaban los siguientes topes: Software Engineer Fellow hasta $150/h, Game Developer / PCB Specialist hasta $125/h, Philosophy Expert hasta $120/h, FP&A / Energy hasta $80/h y AI Evaluation Specialist hasta $17/h.',
            'La retribución es por hora como contratista independiente (la web cita más de $500M abonados; vía de pago: TBD). Al exigir residencia en EE. UU., los impuestos corresponden a la normativa estadounidense.',
          ],
        },
        {
          h2: '¿Pueden postularse residentes de España, Finlandia o Europa?',
          paragraphs: [
            'No. La web oficial indica textualmente: «To participate in the Handshake AI Fellowship, you must be based in the U.S. and have a valid work authorization that can be supported by Handshake.» Los visados F-1 con CPT u OPT regular pueden ser admitidos; STEM OPT no está soportado.',
            'Para residentes en España, Finlandia u otros países europeos, recomiendo enfocarse en plataformas con operativa europea como Mercor, Mindrift u Outlier.',
          ],
        },
        {
          h2: '¿Cómo es el proceso de selección en Handshake AI para residentes en EE. UU.?',
          paragraphs: [
            'Los candidatos aptos en EE. UU. completan tres pasos en joinhandshake.com/move-program/: registro, validación de titulación y permiso de trabajo en EE. UU., y postulación a los programas activos.',
            'Las horas de trabajo están sujetas a rondas de validación de modelos y no están garantizadas.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Puedo postularme a Handshake AI desde España o Finlandia?',
          answer:
            'No. Handshake AI exige residir en Estados Unidos con autorización de trabajo estadounidense admitida.',
        },
        {
          question: '¿Admite Handshake AI F-1 STEM OPT?',
          answer:
            'No. Según su página oficial (2026-11-05), se contemplan CPT y OPT ordinario, pero STEM OPT no está admitido.',
        },
        {
          question: '¿Cuál es la tarifa más alta publicada en Handshake AI?',
          answer:
            'A 2026-11-05, el itinerario Software Engineer Fellow publica hasta $150/h.',
        },
        {
          question: '¿Por qué incluir Handshake AI si no admite candidatos europeos?',
          answer:
            'Porque muchos profesionales europeos ven anuncios de $150/h en redes sociales; aclarar la restricción geográfica ahorra tiempo de registro.',
        },
      ],
    },
  },
};


const COMPARE_CONTENT: Record<Lang, ComparePageContent> = {
  en: {
    lang: 'en',
    reviewStatus: 'APPROVED',
    title: 'Compare AI-Training Platforms (2026): 6 Platforms | Edithsi',
    metaDescription:
      'Compare Mercor, Mindrift, Alignerr, Outlier, micro1, and Handshake AI: verified posted pay ($15–180/h), payout rails, screening steps, and EU eligibility.',
    h1: 'Which AI-Training Platform Is Best in Europe? 6 Platforms Compared (2026)',
    directAnswer:
      'Across the 6 major AI-training talent platforms, posted hourly rates range from $15/h for entry-level work up to $180/h for clinical medical specialists as of 2026-11-05 (Mercor: $35–180/h; Mindrift: $15–100+/h; Alignerr: $15–120/h; Handshake AI: up to $150/h US-only; Outlier and micro1: set per project / TBD). European contractors in Finland and the EU can actively work on Mercor, Mindrift, and Outlier, while Alignerr currently requires US ID documents and Handshake AI is strictly limited to US-based workers.',
    fairnessDisclosure:
      'I earn referral bonuses solely from Mercor via referral code 02e0c12a-d634-4738-9686-04f28f31f52b. I earn $0 from Mindrift, Alignerr, Outlier, micro1, and Handshake AI. To keep this comparison fair and objective, every platform is evaluated using identical criteria, verified strictly against official public pages on 2026-11-05, with unverified items explicitly marked TBD.',
    tableHeaders: [
      'Platform',
      'Posted Pay Range (2026-11-05)',
      'Payout & Rail',
      'Main Fields',
      'Finland & EU Eligibility',
      'Screening Process',
      'Apply / Official Link',
    ],
    rows: [
      {
        slug: 'mercor',
        platformCell: 'Mercor (work.mercor.com)',
        payCell: 'Mercor: $35–180/h posted across 7 pools (Finance set per project; checked 2026-11-05)',
        paymentCell: 'Mercor: Weekly USD payouts via Stripe; independent contractor status',
        fieldsCell: 'Mercor: Law ($60–150/h), Medicine ($60–180/h), Software ($70–150/h), Language ($35–50/h), Finance, Office, Generalist',
        eligibilityCell: 'Mercor: Open to Finland, EU/EEA, UK, US, Canada; project-level requirements vary',
        screeningCell: 'Mercor: CV upload, ~20-minute automated AI video interview, ID verification',
      },
      {
        slug: 'mindrift',
        platformCell: 'Mindrift (mindrift.ai)',
        payCell: 'Mindrift: $15–30/h entry-level; $60–100+/h domain experts; up to $100/h US physicians (checked 2026-11-05)',
        paymentCell: 'Mindrift: Bi-weekly payouts per completed task; freelancing agreement via Toloka AI BV',
        fieldsCell: 'Mindrift: 90+ domains: Medicine ($100/h), STEM ($60–100+/h), Writing, Languages ($15–30/h)',
        eligibilityCell: 'Mindrift: Open to Finland and international freelancers subject to Toloka platform terms',
        screeningCell: 'Mindrift: Screening test, domain-specific assessment, guidelines review, ID check',
      },
      {
        slug: 'alignerr',
        platformCell: 'Alignerr (alignerr.com)',
        payCell: 'Alignerr: $15–120/h across public job cards ($40–120/h Ethics/Data; $80/h avg cited; checked 2026-11-05)',
        paymentCell: 'Alignerr: Payout rail and frequency TBD on public FAQ; contractor billing setup',
        fieldsCell: 'Alignerr: Coding, STEM, Ethics ($40–120/h), Languages ($25–35/h), Talent ($15–25/h)',
        eligibilityCell: 'Alignerr: CAUTION: Official Visa FAQ lists only US ID (license, permit, green card) & US/CA phone for Persona ID check',
        screeningCell: 'Alignerr: Google login, CV upload, Persona ID check, Zara™ AI interview or skill test',
      },
      {
        slug: 'outlier',
        platformCell: 'Outlier (outlier.ai)',
        payCell: 'Outlier: Rates shown per project before tasking (public range TBD; checked 2026-11-05)',
        paymentCell: 'Outlier: Weekly payouts on Tuesdays via PayPal, AirTM, or ACH; hourly or task-based',
        fieldsCell: 'Outlier: Coding, STEM (Math, Physics, Chemistry), 50+ languages, Generalist writing/reasoning',
        eligibilityCell: 'Outlier: Open to 50+ countries including Finland & EU; valid local government ID & mobile required',
        screeningCell: 'Outlier: Profile creation, skills verification, government ID check, 30–90 min assessments',
      },
      {
        slug: 'micro1',
        platformCell: 'micro1 (micro1.ai)',
        payCell: 'micro1: Competitive pay listed per individual role (public range TBD; checked 2026-11-05)',
        paymentCell: 'micro1: Independent contractor payment rail and schedule TBD on public page',
        fieldsCell: 'micro1: Software Engineering, Finance, Healthcare & Medicine, Legal, Academic Research, Robotics',
        eligibilityCell: 'micro1: Global remote community; project-level geographic restrictions TBD on public pages',
        screeningCell: 'micro1: Role application, automated AI technical interview, onboarding check',
      },
      {
        slug: 'handshake-ai',
        platformCell: 'Handshake AI (joinhandshake.com)',
        payCell: 'Handshake AI: $17–150/h (Software $150/h; Philosophy $120/h; checked 2026-11-05)',
        paymentCell: 'Handshake AI: Hourly independent contractor pay ($500M+ paid cited; rail TBD)',
        fieldsCell: 'Handshake AI: Software ($150/h), PCB/Game Dev ($125/h), Philosophy PhD ($120/h), FP&A ($80/h), Eval ($17/h)',
        eligibilityCell: 'Handshake AI: RESTRICTED: Must be based in the US with supported US work authorization; NOT open in Finland/EU',
        screeningCell: 'Handshake AI: Sign up, degree & US work authorization verification, fellowship track application',
      },
    ],
    sections: [
      {
        h2: 'Which AI-training platforms actually accept contractors in Finland and Europe?',
        paragraphs: [
          'If you live in Finland or mainland Europe, your most viable platforms are Mercor, Mindrift, and Outlier. All three officially confirm international availability, verify identity with standard European government IDs, and remit payouts electronically (Mercor via Stripe, Mindrift via Toloka rails, Outlier via PayPal/AirTM). micro1 also operates a global remote expert community, though specific client location requirements are confirmed on a role-by-role basis.',
          'Two major platforms have critical geographic hurdles: Alignerr’s official Visa FAQ explicitly states that Persona identity verification currently accepts only US Driver’s Licenses, State IDs, Work Permits, or Permanent Residence cards with US/CA phone numbers. Handshake AI Fellowship is strictly restricted to US-based individuals with US work authorization. Do not spend time registering on Alignerr or Handshake AI if you reside in Europe without qualifying US credentials.',
        ],
      },
      {
        h2: 'How do posted hourly rates compare across fields and professions?',
        paragraphs: [
          'Specialized credentials earn substantially higher posted compensation across all platforms. Medical professionals (MDs, clinical specialists) see the highest posted ceilings, reaching $60–180/h on Mercor and up to $100/h for US physicians on Mindrift. Licensed lawyers and legal experts command $60–150/h on Mercor. Software engineers range from $70–150/h on Mercor, up to $150/h on Handshake AI (US-only), and equivalent rates across specialized Outlier and micro1 code evaluations.',
          'Language and generalist evaluation roles offer lower posted entry ranges: Mindrift lists $15–30/h for entry-level work, Handshake AI lists $17/h for general evaluation, and Mercor lists $35–50/h for Language & Audio experts and $40–70/h for Generalist experts. All rates represent gross contractor earnings and do not constitute guaranteed monthly minimums.',
        ],
      },
      {
        h2: 'How do payout schedules, payment rails, and European taxes work?',
        paragraphs: [
          'Contractor payouts follow distinct schedules: Mercor and Outlier pay weekly (Mercor via Stripe in USD; Outlier on Tuesdays via PayPal, AirTM, or ACH). Mindrift pays bi-weekly based on approved completed tasks. micro1 sets terms per contract.',
          'Because all platforms engage you as an independent contractor, zero taxes are withheld at the source. In Finland, you must track your gross USD earnings converted to EUR on receipt, declare them to Vero.fi, pay prepayment taxes (ennakkovero), and monitor the YEL pension threshold (€9,423/year in 2026 per ETK.fi). In Sweden, report to Skatteverket under F-skatt; in Germany, declare Freiberufler earnings to the Finanzamt; in France, register with URSSAF as a micro-entrepreneur; and in Spain, declare through the Agencia Tributaria and register with the Seguridad Social as an autónomo.',
        ],
      },
      {
        h2: 'Why do experienced European contractors apply to more than one standing pool?',
        paragraphs: [
          'No AI-training platform guarantees consistent weekly hours. Work arrives in surges as AI labs launch new model evaluations, rubric calibrations, or red-teaming benchmarks, followed by quiet periods when project phases conclude. Relying on a single platform frequently results in unpredictable income droughts.',
          'Experienced contractors maintain active standing profiles across two or three complementary platforms—such as Mercor for specialized domain pools and Outlier or Mindrift for supplementary task volume. Applying to vetted pools is free; you should never pay any platform or third party to join.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which AI platform pays the highest hourly rate?',
        answer:
          'Based on official listings checked on 2026-11-05, Mercor lists the highest rates for clinical medical experts ($60–180/h) and licensed lawyers ($100–150/h), alongside Handshake AI ($150/h for software, restricted to the US).',
      },
      {
        question: 'Can I apply to multiple AI-training platforms simultaneously?',
        answer:
          'Yes. Freelancers work as independent contractors and commonly register on Mercor, Mindrift, and Outlier to balance project flow, as hours are never guaranteed on any single platform.',
      },
      {
        question: 'Why is Alignerr flagged for European applicants?',
        answer:
          'Alignerr’s official Visa FAQ states that Persona verification currently requires US driver’s licenses, state IDs, work permits, or permanent residency cards, blocking many European applicants.',
      },
      {
        question: 'Do I pay taxes in the US or in my home country?',
        answer:
          'You pay taxes in your country of tax residence (e.g. Vero.fi in Finland, Skatteverket in Sweden, Finanzamt in Germany). None of the platforms withhold European income tax or social security contributions.',
      },
    ],
  },
  fi: {
    lang: 'fi',
    reviewStatus: 'APPROVED',
    title: 'Tekoälyalustojen vertailu 2026: 6 alustaa Suomessa | Edithsi',
    metaDescription:
      'Vertailussa Mercor, Mindrift, Alignerr, Outlier, micro1 ja Handshake AI: ilmoitetut palkkiot ($15–180/h), maksutavat, kelpoisuus Suomessa ja verot.',
    h1: 'Mikä tekoälyn koulutusalusta sopii parhaiten Suomeen? 6 alustaa vertailussa (2026)',
    directAnswer:
      'Kuuden keskeisen tekoälyalustan julkiset tuntipalkkiot vaihtelevat 15 $/h perustason tehtävistä aina 180 $/h erikoislääkärin arviointityöhön (tarkistettu 5.11.2026; Mercor: 35–180 $/h; Mindrift: 15–100+ $/h; Alignerr: 15–120 $/h; Handshake AI: enintään 150 $/h vain Yhdysvalloissa; Outlier ja micro1: projektikohtainen / TBD). Suomessa asuville asiantuntijoille realistisimmat alustat ovat Mercor, Mindrift ja Outlier, kun taas Alignerr vaatii tällä hetkellä yhdysvaltalaisen henkilöllisyystodistuksen ja Handshake AI on rajattu vain Yhdysvalloissa asuville.',
    fairnessDisclosure:
      'Saan suosittelupalkkioita ainoastaan Mercorilta (koodi 02e0c12a-d634-4738-9686-04f28f31f52b). Saan 0 dollaria Mindriftiltä, Alignerrilta, Outlierilta, micro1:ltä ja Handshake AI:lta. Jotta vertailu pysyy puolueettomana, arvioin jokaista alustaa täsmälleen samoilla kriteereillä ja virallisilla julkisilla lähteillä (tarkistettu 5.11.2026).',
    tableHeaders: [
      'Alusta',
      'Ilmoitettu tuntipalkkio (5.11.2026)',
      'Maksutapa & aikataulu',
      'Pääasialliset alat',
      'Kelpoisuus Suomessa ja EU:ssa',
      'Hakuprosessi',
      'Hakulinkki / virallinen sivu',
    ],
    rows: [
      {
        slug: 'mercor',
        platformCell: 'Mercor (work.mercor.com)',
        payCell: 'Mercor: 35–180 $/h ilmoitettu 7 poolissa (rahoitus projektikohtainen; tarkistettu 5.11.2026)',
        paymentCell: 'Mercor: Viikoittaiset USD-maksut Stripen kautta; itsenäinen toimeksiantosuhde',
        fieldsCell: 'Mercor: Juridiikka (60–150 $/h), lääketiede (60–180 $/h), ohjelmistokehitys (70–150 $/h), kieli (35–50 $/h), talous, toimisto, yleisosaajat',
        eligibilityCell: 'Mercor: Avoin Suomesta, EU/ETA-alueelta, Britanniasta, Yhdysvalloista ja Kanadasta',
        screeningCell: 'Mercor: CV:n lataus, n. 20 min tekoälyvideohaastattelu, henkilöllisyyden varmistus',
      },
      {
        slug: 'mindrift',
        platformCell: 'Mindrift (mindrift.ai)',
        payCell: 'Mindrift: 15–30 $/h aloitustaso; 60–100+ $/h asiantuntijat; jopa 100 $/h lääkärit (tarkistettu 5.11.2026)',
        paymentCell: 'Mindrift: Maksu joka toinen viikko hyväksyttyjen tehtävien mukaan (Toloka AI BV)',
        fieldsCell: 'Mindrift: Yli 90 alaa: lääketiede (100 $/h), STEM (60–100+ $/h), kirjoittaminen, kielet (15–30 $/h)',
        eligibilityCell: 'Mindrift: Avoin Suomesta Tolokan kansainvälisten freelancer-ehtojen mukaan',
        screeningCell: 'Mindrift: Ennakkotesti, alakohtainen osaamisarviointi, ohjeiden läpikäynti, henkilöllisyystodistus',
      },
      {
        slug: 'alignerr',
        platformCell: 'Alignerr (alignerr.com)',
        payCell: 'Alignerr: 15–120 $/h julkisissa ilmoituksissa (etiikka/data 40–120 $/h; ka. 80 $/h; tarkistettu 5.11.2026)',
        paymentCell: 'Alignerr: Maksukanava ja aikataulu TBD julkisessa UKK:ssa; toimeksisaajan laskutus',
        fieldsCell: 'Alignerr: Koodaus, STEM, tekoälyetiikka (40–120 $/h), kielet (25–35 $/h), rekrytointi (15–25 $/h)',
        eligibilityCell: 'Alignerr: HUOMIO: Virallinen UKK listaa Persona-tunnistukseen vain Yhdysvaltain asiakirjat ja puhelinnumerot',
        screeningCell: 'Alignerr: Google-kirjautuminen, CV, Persona-tunnistus, Zara™-tekoälyhaastattelu tai taitotesti',
      },
      {
        slug: 'outlier',
        platformCell: 'Outlier (outlier.ai)',
        payCell: 'Outlier: Palkkio näytetään projektikohtaisesti ennen työn aloitusta (julkinen haarukka TBD; 5.11.2026)',
        paymentCell: 'Outlier: Viikoittain tiistaisin PayPalin, AirTM:n tai ACH:n kautta; tunti- tai tehtäväkohtainen',
        fieldsCell: 'Outlier: Ohjelmointi, STEM (matematiikka, fysiikka, kemia), 50+ kieltä, yleinen päättely/kirjoitus',
        eligibilityCell: 'Outlier: Avoin yli 50 maassa ml. Suomi; vaatii virallisen henkilöllisyystodistuksen ja matkapuhelinnumeron',
        screeningCell: 'Outlier: Profiilin luonti, osaamisen varmentaminen, henkilöllisyyden tarkastus, 30–90 min testit',
      },
      {
        slug: 'micro1',
        platformCell: 'micro1 (micro1.ai)',
        payCell: 'micro1: Kilpailukykyinen palkkio roolikohtaisesti (julkinen haarukka TBD; tarkistettu 5.11.2026)',
        paymentCell: 'micro1: Itsenäisen toimeksisaajan maksutapa ja aikataulu TBD julkisella sivulla',
        fieldsCell: 'micro1: Ohjelmistokehitys, talous, terveydenhuolto ja lääketiede, juridiikka, akateeminen tutkimus, robotiikka',
        eligibilityCell: 'micro1: Globaali etäyhteisö; projektikohtaiset maarajoitukset TBD julkisissa tiedoissa',
        screeningCell: 'micro1: Hakemus avoimeen rooliin, automaattinen tekoälyn asiantuntijahaastattelu, perehdytys',
      },
      {
        slug: 'handshake-ai',
        platformCell: 'Handshake AI (joinhandshake.com)',
        payCell: 'Handshake AI: 17–150 $/h (ohjelmisto 150 $/h; filosofia 120 $/h; tarkistettu 5.11.2026)',
        paymentCell: 'Handshake AI: Tuntipalkkio itsenäisenä toimeksiantajana (maksettu yli 500M $; maksukanava TBD)',
        fieldsCell: 'Handshake AI: Ohjelmisto (150 $/h), pelikehitys/PCB (125 $/h), filosofian tohtorit (120 $/h), FP&A (80 $/h), arviointi (17 $/h)',
        eligibilityCell: 'Handshake AI: RAJOITETTU: Vaatii asumisen Yhdysvalloissa ja tuetun työluvan; EI avoin Suomessa',
        screeningCell: 'Handshake AI: Rekisteröityminen, tutkinnon ja Yhdysvaltain työluvan varmentaminen, ohjelmaan haku',
      },
    ],
    sections: [
      {
        h2: 'Mitkä tekoälyn koulutusalustat oikeasti hyväksyvät tekijöitä Suomesta?',
        paragraphs: [
          'Suomesta käsin parhaat vaihtoehdot ovat Mercor, Mindrift ja Outlier. Kaikki kolme hyväksyvät virallisesti kansainvälisiä hakijoita, varmentavat henkilöllisyyden suomalaisella passilla tai henkilökortilla ja maksavat palkkiot suoraan tilille tai lompakkoon (Mercor Stripen kautta, Mindrift Tolokan kautta, Outlier PayPalilla tai AirTM:llä). Myös micro1 ilmoittaa yhteisönsä globaaliksi, joskin asiakaskohtaiset maarajoitukset selviävät roolikohtaisesti.',
          'Kahdella alustalla on suomalaisille merkittäviä esteitä: Alignerrin virallinen UKK hyväksyy Persona-tunnistautumiseen tällä hetkellä vain Yhdysvaltain ajokortin, henkilökortin tai oleskeluluvan sekä yhdysvaltalaisen tai kanadalaisen puhelinnumeron. Handshake AI edellyttää asumista Yhdysvalloissa ja Yhdysvaltain työlupaa. Näihin kahteen ei kannata käyttää aikaa, ellei sinulla ole yhdysvaltalaisia dokumentteja.',
        ],
      },
      {
        h2: 'Miten ilmoitetut tuntipalkkiot vertautuvat eri asiantuntija-aloilla?',
        paragraphs: [
          'Erikoisosaaminen nostaa palkkioita selvästi kaikilla alustoilla. Lääketieteen ammattilaisille ilmoitetaan korkeimmat haarukat, Mercorissa 60–180 $/h ja Mindriftissä jopa 100 $/h. Lisensoiduille juristeille Mercor ilmoittaa 100–150 $/h ja lakiasiantuntijoille 60–150 $/h. Ohjelmistokehittäjille haarukat ovat Mercorissa 70–150 $/h ja Handshake AI:ssa 150 $/h (vain USA).',
          'Kieli- ja yleisosaajatehtävissä ilmoitetut korvaukset ovat maltillisempia: Mindrift ilmoittaa aloitustasolle 15–30 $/h, Handshake AI 17 $/h yleisarviointiin ja Mercor kieli- ja äänitehtäviin 35–50 $/h sekä yleisasiantuntijoille 40–70 $/h. Kaikki luvut ovat bruttotuloja itsenäisenä toimeksiantajana ilman työtuntitakuuta.',
        ],
      },
      {
        h2: 'Miten maksuaikataulut ja Suomen verotus toimivat?',
        paragraphs: [
          'Mercor ja Outlier maksavat viikoittain (Mercor Stripen kautta Yhdysvaltain dollareina, Outlier tiistaisin PayPalilla, AirTM:llä tai ACH:lla). Mindrift maksaa kahden viikon välein hyväksytyistä tehtävistä.',
          'Koska toimit itsenäisenä toimeksiantajana, ulkomaiset alustat eivät pidätä Suomen tuloveroa. Sinun tulee kirjata saadut dollarit euroiksi, ilmoittaa tulot Verohallinnolle (Vero.fi), hakea tarvittaessa ennakkoveroa ja huomioida YEL-vakuutuksen alaraja (9 423 euroa vuodessa vuonna 2026 ETK.fi:n mukaan).',
        ],
      },
      {
        h2: 'Miksi kokeneet toimeksisaajat hakevat useampaan pooliin?',
        paragraphs: [
          'Mikään alusta ei takaa tasaista viikkotuntimäärää. Projektit tulevat aalloissa tekoäly-yhtiöiden mallijulkaisujen ja testausjaksojen mukaan, ja aktiivisen vaiheen jälkeen voi tulla viikkojen hiljainen kausi. Yhden alustan varassa tulot voivat vaihdella voimakkaasti.',
          'Tämän vuoksi moni luo hyväksytyn profiilin kahteen tai kolmeen alustaan, esimerkiksi Mercoriin vaativampiin asiantuntijarooleihin ja Outlieriin tai Mindriftiin tasaisempaan täydentävään tehtävävirtaan. Hakeminen on maksutonta, eikä luotettaville alustoille liittymisestä pidä koskaan maksaa.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Mikä tekoälyalusta maksaa korkeinta tuntipalkkiota?',
        answer:
          'Julkisten ilmoitusten perusteella (5.11.2026) korkeimmat tuntipalkkiot ovat Mercorin lääketieteen (60–180 $/h) ja juridiikan (100–150 $/h) pooleissa sekä Handshake AI:ssa (150 $/h ohjelmistokehittäjille, vain USA).',
      },
      {
        question: 'Voinko hakea useammalle alustalle samanaikaisesti?',
        answer:
          'Kyllä. Toimit itsenäisenä toimeksiantajana, ja useamman alustan (kuten Mercorin, Mindriftin ja Outlierin) profiilin ylläpito auttaa tasaamaan projektien välisiä taukoja.',
      },
      {
        question: 'Miksi Alignerr on merkitty varoituksella suomalaisille?',
        answer:
          'Koska Alignerrin virallinen UKK ilmoittaa tällä hetkellä hyväksyvänsä Persona-tunnistautumiseen vain Yhdysvaltain henkilöllisyysasiakirjoja ja puhelinnumeroita.',
      },
      {
        question: 'Pidättävätkö alustat veroa Suomeen puolestani?',
        answer:
          'Eivät. Toimit itsenäisenä toimeksiantajana ja vastaat verojen (ennakkovero OmaVerossa) ja mahdollisten YEL-maksujen hoitamisesta itse.',
      },
    ],
  },
  sv: {
    lang: 'sv',
    reviewStatus: 'NEEDS NATIVE REVIEW',
    title: 'Jämför AI-träningsplattformar (2026): 6 plattformar | Edithsi',
    metaDescription:
      'Jämförelse av Mercor, Mindrift, Alignerr, Outlier, micro1 och Handshake AI: publicerade arvoden ($15–180/h), betalsätt, villkor i Norden och skatt.',
    h1: 'Vilken AI-träningsplattform är bäst i Europa? 6 plattformar jämförda (2026)',
    directAnswer:
      'Bland de sex ledande AI-träningsplattformarna sträcker sig publicerade timersättningar från $15/h för nybörjaruppdrag upp till $180/h för medicinska specialister per 2026-11-05 (Mercor: $35–180/h; Mindrift: $15–100+/h; Alignerr: $15–120/h; Handshake AI: upp till $150/h endast USA; Outlier och micro1: per projekt / TBD). För specialister i Norden och Europa är Mercor, Mindrift och Outlier de mest tillgängliga, medan Alignerr kräver amerikanskt ID och Handshake AI är strikt begränsat till boende i USA.',
    fairnessDisclosure:
      'Jag erhåller hänvisningsersättning uteslutande från Mercor via kod 02e0c12a-d634-4738-9686-04f28f31f52b. Jag tjänar $0 från Mindrift, Alignerr, Outlier, micro1 och Handshake AI. Alla plattformar utvärderas enligt identiska kriterier baserat på offentliga källor per 2026-11-05.',
    tableHeaders: [
      'Plattform',
      'Publicerat timintervall (2026-11-05)',
      'Utbetalning & rutiner',
      'Huvudsakliga områden',
      'Behörighet i Norden och EU',
      'Urvalsprocess',
      'Ansökan / officiell länk',
    ],
    rows: [
      {
        slug: 'mercor',
        platformCell: 'Mercor (work.mercor.com)',
        payCell: 'Mercor: $35–180/h publicerat i 7 pooler (finans per projekt; per 2026-11-05)',
        paymentCell: 'Mercor: Veckovisa USD-utbetalningar via Stripe; uppdragstagare',
        fieldsCell: 'Mercor: Juridik ($60–150/h), medicin ($60–180/h), programvara ($70–150/h), språk ($35–50/h), finans, generalister',
        eligibilityCell: 'Mercor: Öppet i Norden, EU/EES, Storbritannien, USA och Kanada',
        screeningCell: 'Mercor: CV-uppladdning, ca 20 min automatisk AI-videointervju, ID-verifiering',
      },
      {
        slug: 'mindrift',
        platformCell: 'Mindrift (mindrift.ai)',
        payCell: 'Mindrift: $15–30/h ingångsnivå; $60–100+/h experter; upp till $100/h läkare (2026-11-05)',
        paymentCell: 'Mindrift: Betalning varannan vecka per godkänt uppdrag (Toloka AI BV)',
        fieldsCell: 'Mindrift: 90+ områden: medicin ($100/h), STEM ($60–100+/h), skribenter, språk ($15–30/h)',
        eligibilityCell: 'Mindrift: Öppet i Norden enligt Tolokas internationella frilansvillkor',
        screeningCell: 'Mindrift: Behörighetstest, ämnesbedömning, riktlinjer, ID-kontroll',
      },
      {
        slug: 'alignerr',
        platformCell: 'Alignerr (alignerr.com)',
        payCell: 'Alignerr: $15–120/h på publika kort (etik/data $40–120/h; snitt $80/h; per 2026-11-05)',
        paymentCell: 'Alignerr: Betalsätt och intervall TBD i publik FAQ; frilansfakturering',
        fieldsCell: 'Alignerr: Kodning, STEM, AI-etik ($40–120/h), språk ($25–35/h), rekrytering ($15–25/h)',
        eligibilityCell: 'Alignerr: OBS: Officiell FAQ godkänner endast amerikanska ID-handlingar i Persona',
        screeningCell: 'Alignerr: Google-inloggning, CV, Persona-verifiering, Zara™ AI-intervju eller färdighetstest',
      },
      {
        slug: 'outlier',
        platformCell: 'Outlier (outlier.ai)',
        payCell: 'Outlier: Arvode visas per projekt före start (offentligt intervall TBD; 2026-11-05)',
        paymentCell: 'Outlier: Veckovist på tisdagar via PayPal, AirTM eller ACH; tim- eller uppdragsbaserat',
        fieldsCell: 'Outlier: Kodning, STEM (matematik, fysik, kemi), 50+ språk, generalistuppgifter',
        eligibilityCell: 'Outlier: Öppet i 50+ länder inkl. Norden; kräver statligt ID och lokalt mobilnummer',
        screeningCell: 'Outlier: Profilregistrering, kompetensverifiering, statligt ID, 30–90 min tester',
      },
      {
        slug: 'micro1',
        platformCell: 'micro1 (micro1.ai)',
        payCell: 'micro1: Konkurrenskraftigt arvode per roll (offentligt intervall TBD; 2026-11-05)',
        paymentCell: 'micro1: Betalningskanal och intervall TBD på offentlig webbplats',
        fieldsCell: 'micro1: Programvaruutveckling, finans, hälsa/medicin, juridik, forskning, robotik',
        eligibilityCell: 'micro1: Globalt distansnätverk; projektspecifika geografiska krav TBD',
        screeningCell: 'micro1: Ansökan till specifik roll, automatiserad AI-teknikintervju, onboarding',
      },
      {
        slug: 'handshake-ai',
        platformCell: 'Handshake AI (joinhandshake.com)',
        payCell: 'Handshake AI: $17–150/h (programvara $150/h; filosofi $120/h; 2026-11-05)',
        paymentCell: 'Handshake AI: Timersättning som uppdragstagare ($500M+ utbetalt; kanal TBD)',
        fieldsCell: 'Handshake AI: Kodning ($150/h), spel/PCB ($125/h), filosofi ($120/h), FP&A ($80/h), utvärdering ($17/h)',
        eligibilityCell: 'Handshake AI: BEGRÄNSAD: Kräver bosättning och arbetstillstånd i USA; EJ öppen i Norden',
        screeningCell: 'Handshake AI: Registrering, verifiering av examen och amerikanskt arbetstillstånd',
      },
    ],
    sections: [
      {
        h2: 'Vilka AI-plattformar accepterar uppdragstagare i Norden och Europa?',
        paragraphs: [
          'För boende i Norden och övriga Europa är Mercor, Mindrift och Outlier de tre mest relevanta alternativen. Samtliga accepterar officiellt internationella frilansare och genomför ID-kontroller med nationella pass eller ID-kort.',
          'Alignerr kräver för närvarande amerikanska ID-handlingar vid Persona-kontrollen, och Handshake AI är strikt begränsat till personer bosatta i USA med lokalt arbetstillstånd.',
        ],
      },
      {
        h2: 'Hur skiljer sig de publicerade ersättningarna mellan olika expertområden?',
        paragraphs: [
          'Högst timersättning publiceras för medicinska specialister ($60–180/h på Mercor, upp till $100/h på Mindrift) och licensierade jurister ($100–150/h på Mercor). Programvaruutvecklare erbjuds $70–150/h på Mercor.',
          'Språk- och generalistuppdrag ligger lägre: $15–30/h hos Mindrift, $35–50/h för språk och $40–70/h för generalister hos Mercor. Ersättningen utbetalas i brutto utan garantier.',
        ],
      },
      {
        h2: 'Hur fungerar betalningar och beskattning i Sverige och Norden?',
        paragraphs: [
          'Mercor och Outlier betalar ut veckovis (Mercor via Stripe i USD, Outlier på tisdagar via PayPal/AirTM). Mindrift betalar varannan vecka.',
          'Som frilansare dras ingen källskatt av plattformarna. I Sverige deklareras inkomsten till Skatteverket med F-skatt; i Finland till Vero.fi med beaktande av YEL.',
        ],
      },
      {
        h2: 'Varför ansöker erfarna uppdragstagare till flera plattformar samtidigt?',
        paragraphs: [
          'Ingen plattform garanterar ett jämnt veckotimantal. Arbetsvolymen varierar kraftigt med AI-labbens träningscykler.',
          'Att hålla aktiva profiler på två till tre granskade plattformar hjälper till att jämna ut inkomstflödet.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Vilken AI-plattform publicerar högst timpris?',
        answer:
          'Enligt offentliga uppgifter (2026-11-05) publicerar Mercor de högsta nivåerna för medicin ($60–180/h) och juridik ($100–150/h).',
      },
      {
        question: 'Kan jag arbeta på flera plattformar samtidigt?',
        answer:
          'Ja. Som självständig uppdragstagare kan du ta uppdrag från flera plattformar parallellt.',
      },
      {
        question: 'Varför varnas nordiska sökande om Alignerr?',
        answer:
          'Därför att Alignerrs officiella FAQ anger att Persona-verifieringen enbart godkänner amerikanska ID-handlingar.',
      },
      {
        question: 'Drar plattformarna skatt åt mig?',
        answer:
          'Nej. Du ansvarar själv för att deklarera inkomsterna och betala skatt och egenavgifter i ditt hemland.',
      },
    ],
  },
  de: {
    lang: 'de',
    reviewStatus: 'NEEDS NATIVE REVIEW',
    title: 'KI-Trainingsplattformen im Vergleich (2026): 6 Anbieter | Edithsi',
    metaDescription:
      'Mercor, Mindrift, Alignerr, Outlier, micro1 und Handshake AI im Vergleich: verifizierte Stundensätze ($15–180/h), Auszahlungen, EU-Zugang und Steuern.',
    h1: 'Welche KI-Trainingsplattform ist die beste in Europa? 6 Plattformen im Vergleich (2026)',
    directAnswer:
      'Über die 6 führenden KI-Trainingsplattformen hinweg reichen die veröffentlichten Stundensätze von $15/h für Einstiegsaufgaben bis zu $180/h für Fachärzte (Stand 2026-11-05; Mercor: $35–180/h; Mindrift: $15–100+/h; Alignerr: $15–120/h; Handshake AI: bis zu $150/h nur USA; Outlier und micro1: projektbezogen / TBD). Für Fachkräfte in Deutschland, Österreich und der Schweiz sind Mercor, Mindrift und Outlier am besten zugänglich, während Alignerr US-Ausweise verlangt und Handshake AI auf die USA beschränkt ist.',
    fairnessDisclosure:
      'Ich erhalte ausschließlich von Mercor Vermittlungsprovisionen über den Code 02e0c12a-d634-4738-9686-04f28f31f52b. Von Mindrift, Alignerr, Outlier, micro1 und Handshake AI erhalte ich $0. Alle Plattformen werden nach identischen Kriterien auf Basis öffentlicher Angaben vom 2026-11-05 verglichen.',
    tableHeaders: [
      'Plattform',
      'Veröffentlichter Stundensatz (2026-11-05)',
      'Auszahlungsweg & Turnus',
      'Hauptfachbereiche',
      'Verfügbarkeit in Deutschland & EU',
      'Auswahlverfahren',
      'Bewerbung / offizieller Link',
    ],
    rows: [
      {
        slug: 'mercor',
        platformCell: 'Mercor (work.mercor.com)',
        payCell: 'Mercor: $35–180/h in 7 Talentpools (Finanzen projektbezogen; Stand 2026-11-05)',
        paymentCell: 'Mercor: Wöchentliche USD-Auszahlung über Stripe; freie Mitarbeit',
        fieldsCell: 'Mercor: Recht ($60–150/h), Medizin ($60–180/h), Software ($70–150/h), Sprachen ($35–50/h), Finanzen, Generalisten',
        eligibilityCell: 'Mercor: Offen für Deutschland, EU/EWR, UK, USA und Kanada',
        screeningCell: 'Mercor: CV-Upload, ca. 20-minütiges KI-Videointerview, Identitätsprüfung',
      },
      {
        slug: 'mindrift',
        platformCell: 'Mindrift (mindrift.ai)',
        payCell: 'Mindrift: $15–30/h Einstieg; $60–100+/h Fachexperten; bis zu $100/h US-Ärzte (2026-11-05)',
        paymentCell: 'Mindrift: Auszahlung alle zwei Wochen pro bearbeiteter Aufgabe (Toloka AI BV)',
        fieldsCell: 'Mindrift: 90+ Fachgebiete: Medizin ($100/h), MINT ($60–100+/h), Redaktion, Sprachen ($15–30/h)',
        eligibilityCell: 'Mindrift: Offen in Deutschland gemäß Toloka-Freelancer-Bedingungen',
        screeningCell: 'Mindrift: Eingangstest, fachspezifische Prüfung, Richtlinien-Check, Ausweisprüfung',
      },
      {
        slug: 'alignerr',
        platformCell: 'Alignerr (alignerr.com)',
        payCell: 'Alignerr: $15–120/h in öffentlichen Anzeigen (Ethik/Daten $40–120/h; Ø $80/h; Stand 2026-11-05)',
        paymentCell: 'Alignerr: Auszahlungsweg und Turnus TBD in öffentlicher FAQ; Rechnungsstellung',
        fieldsCell: 'Alignerr: Coding, MINT, KI-Ethik ($40–120/h), Sprachen ($25–35/h), Recruiting ($15–25/h)',
        eligibilityCell: 'Alignerr: ACHTUNG: Offizielle FAQ akzeptiert bei Persona nur US-Ausweisdokumente',
        screeningCell: 'Alignerr: Google-Login, CV, Persona-ID-Prüfung, Zara™ KI-Interview oder Fachtest',
      },
      {
        slug: 'outlier',
        platformCell: 'Outlier (outlier.ai)',
        payCell: 'Outlier: Vergütung wird vor Beginn pro Projekt angezeigt (öffentlich TBD; Stand 2026-11-05)',
        paymentCell: 'Outlier: Wöchentlich dienstags über PayPal, AirTM oder ACH; Stunden- oder Task-Basis',
        fieldsCell: 'Outlier: Coding, MINT (Mathe, Physik, Chemie), 50+ Sprachen, Text/Logik-Generalisten',
        eligibilityCell: 'Outlier: Offen in 50+ Ländern inkl. Deutschland & EU; Ausweis und Handynummer nötig',
        screeningCell: 'Outlier: Profilerstellung, Fachverifizierung, Ausweisprüfung, 30–90 min Tests',
      },
      {
        slug: 'micro1',
        platformCell: 'micro1 (micro1.ai)',
        payCell: 'micro1: Vergütung wird pro Rolle festgelegt (öffentliche Spanne TBD; Stand 2026-11-05)',
        paymentCell: 'micro1: Auszahlungsweg und Rhythmus für freie Mitarbeiter TBD auf Website',
        fieldsCell: 'micro1: Softwareentwicklung, Finanzen, Medizin, Recht, Forschung, Robotik',
        eligibilityCell: 'micro1: Weltweites Remote-Netzwerk; projektspezifische Länderkriterien TBD',
        screeningCell: 'micro1: Rollenbewerbung, automatisiertes KI-Fachinterview, Onboarding',
      },
      {
        slug: 'handshake-ai',
        platformCell: 'Handshake AI (joinhandshake.com)',
        payCell: 'Handshake AI: $17–150/h (Software $150/h; Philosophie $120/h; Stand 2026-11-05)',
        paymentCell: 'Handshake AI: Stundenvergütung als Contractor ($500M+ Gesamtauszahlung; Weg TBD)',
        fieldsCell: 'Handshake AI: Software ($150/h), PCB/Games ($125/h), Philosophie ($120/h), FP&A ($80/h), Eval ($17/h)',
        eligibilityCell: 'Handshake AI: BESCHRÄNKT: Wohnsitz und Arbeitserlaubnis in den USA zwingend; NICHT in Europa',
        screeningCell: 'Handshake AI: Registrierung, Abschluss- und US-Arbeitserlaubnisprüfung, Track-Bewerbung',
      },
    ],
    sections: [
      {
        h2: 'Welche Plattformen akzeptieren Bewerber aus Deutschland, Österreich und der Schweiz?',
        paragraphs: [
          'Für europäische Fachkräfte sind Mercor, Mindrift und Outlier die realistischsten Optionen. Alle drei Plattformen akzeptieren offizielle europäische Ausweisdokumente und zahlen zuverlässig elektronisch aus.',
          'Alignerr blockiert europäische Bewerber derzeit über die Persona-Ausweispflicht für US-Dokumente, und Handshake AI setzt einen Wohnsitz in den USA voraus.',
        ],
      },
      {
        h2: 'Wie unterscheiden sich die Stundensätze nach Berufsfeld?',
        paragraphs: [
          'Spezialisierte Fachkräfte erzielen die höchsten Vergütungen: Mediziner erhalten $60–180/h bei Mercor und bis zu $100/h bei Mindrift, Juristen $60–150/h bei Mercor und Software-Ingenieure $70–150/h.',
          'Sprach- und allgemeine Aufgaben liegen bei $15–30/h (Mindrift) bzw. $35–50/h und $40–70/h (Mercor). Es handelt sich um Bruttoangaben ohne Arbeitszeitgarantie.',
        ],
      },
      {
        h2: 'Wie laufen Auszahlungen und Versteuerung in Deutschland ab?',
        paragraphs: [
          'Mercor und Outlier zahlen wöchentlich aus (Mercor via Stripe in USD, Outlier dienstags via PayPal/AirTM). Mindrift zahlt zweiwöchentlich.',
          'Es wird keine deutsche Steuer einbehalten. Die Einnahmen müssen beim Finanzamt als freiberufliche oder gewerbliche Tätigkeit gemeldet und versteuert werden.',
        ],
      },
      {
        h2: 'Warum nutzen erfahrene Freelancer mehrere Plattformen parallel?',
        paragraphs: [
          'Keine Plattform garantiert regelmäßige Wochenstunden. Aufträge richten sich nach Modelltrainingsphasen der KI-Labore.',
          'Profile bei zwei bis drei Anbietern federn auftragsfreie Phasen wirksam ab.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Welche Plattform zahlt die höchsten Stundensätze?',
        answer:
          'Stand 2026-11-05 verzeichnet Mercor für Fachärzte ($60–180/h) und Juristen ($100–150/h) die höchsten öffentlichen Sätze.',
      },
      {
        question: 'Kann ich auf mehreren Plattformen gleichzeitig aktiv sein?',
        answer:
          'Ja. Als freier Mitarbeiter steht es dir frei, Aufträge über verschiedene Plattformen parallel anzunehmen.',
      },
      {
        question: 'Warum gibt es für Alignerr eine Warnung in Europa?',
        answer:
          'Weil die Persona-Identitätsprüfung von Alignerr laut offizieller FAQ derzeit ausschließlich US-Ausweise und US/Kanada-Nummern akzeptiert.',
      },
      {
        question: 'Führen die Plattformen Steuern an mein Finanzamt ab?',
        answer:
          'Nein. Du bist selbst dafür verantwortlich, deine Bruttoeinnahmen beim Finanzamt zu erklären und zu versteuern.',
      },
    ],
  },
  fr: {
    lang: 'fr',
    reviewStatus: 'NEEDS NATIVE REVIEW',
    title: 'Comparatif plateformes entraînement IA (2026) : 6 sites | Edithsi',
    metaDescription:
      'Comparez Mercor, Mindrift, Alignerr, Outlier, micro1 et Handshake AI : tarifs vérifiés ($15–180/h), paiements, éligibilité France/UE et impôts.',
    h1: 'Quelle est la meilleure plateforme d’entraînement d’IA en Europe ? 6 sites comparés (2026)',
    directAnswer:
      'Sur les 6 principales plateformes d’entraînement d’IA, les tarifs horaires affichés vont de 15 $/h pour les missions généralistes jusqu’à 180 $/h pour les médecins spécialistes au 2026-11-05 (Mercor : 35–180 $/h ; Mindrift : 15–100+ $/h ; Alignerr : 15–120 $/h ; Handshake AI : jusqu’à 150 $/h réservé aux USA ; Outlier et micro1 : par projet / TBD). Pour les résidents en France et en Europe, Mercor, Mindrift et Outlier sont les plus accessibles, alors qu’Alignerr exige une pièce d’identité américaine et Handshake AI est strictement réservé aux résidents des États-Unis.',
    fairnessDisclosure:
      'Je perçois des commissions de parrainage exclusivement de Mercor via le code 02e0c12a-d634-4738-9686-04f28f31f52b. Je touche 0 $ de Mindrift, Alignerr, Outlier, micro1 et Handshake AI. Toutes les plateformes sont évaluées selon des critères identiques et des données vérifiées au 2026-11-05.',
    tableHeaders: [
      'Plateforme',
      'Tarifs horaires affichés (2026-11-05)',
      'Modalités & fréquence de paiement',
      'Domaines principaux',
      'Éligibilité France et Europe',
      'Processus de sélection',
      'Postuler / lien officiel',
    ],
    rows: [
      {
        slug: 'mercor',
        platformCell: 'Mercor (work.mercor.com)',
        payCell: 'Mercor : 35–180 $/h affichés sur 7 pools (finance par projet ; vérifié le 2026-11-05)',
        paymentCell: 'Mercor : Paiements hebdomadaires en USD via Stripe ; statut de prestataire indépendant',
        fieldsCell: 'Mercor : Droit (60–150 $/h), médecine (60–180 $/h), logiciel (70–150 $/h), langues (35–50 $/h), finance, généralistes',
        eligibilityCell: 'Mercor : Ouvert à la France, l’UE/EEE, au Royaume-Uni, aux États-Unis et au Canada',
        screeningCell: 'Mercor : Dépôt de CV, entretien vidéo automatisé par IA (~20 min), vérification d’identité',
      },
      {
        slug: 'mindrift',
        platformCell: 'Mindrift (mindrift.ai)',
        payCell: 'Mindrift : 15–30 $/h niveau initial ; 60–100+ $/h experts ; jusqu’à 100 $/h médecins (2026-11-05)',
        paymentCell: 'Mindrift : Paiement toutes les deux semaines par tâche validée (Toloka AI BV)',
        fieldsCell: 'Mindrift : 90+ domaines : médecine (100 $/h), STEM (60–100+ $/h), rédaction, langues (15–30 $/h)',
        eligibilityCell: 'Mindrift : Ouvert en France et Europe selon les conditions freelance de Toloka',
        screeningCell: 'Mindrift : Test initial, évaluation par spécialité, validation des consignes, contrôle d’identité',
      },
      {
        slug: 'alignerr',
        platformCell: 'Alignerr (alignerr.com)',
        payCell: 'Alignerr : 15–120 $/h sur les fiches (éthique/données 40–120 $/h ; moyenne 80 $/h citée ; 2026-11-05)',
        paymentCell: 'Alignerr : Mode et fréquence de versement TBD sur la FAQ publique ; facturation prestataire',
        fieldsCell: 'Alignerr : Code, STEM, éthique IA (40–120 $/h), langues (25–35 $/h), recrutement (15–25 $/h)',
        eligibilityCell: 'Alignerr : ATTENTION : La FAQ officielle n’admet que des pièces d’identité et numéros US pour Persona',
        screeningCell: 'Alignerr : Connexion Google, CV, contrôle Persona, entretien IA Zara™ ou test technique',
      },
      {
        slug: 'outlier',
        platformCell: 'Outlier (outlier.ai)',
        payCell: 'Outlier : Tarif communiqué par projet avant démarrage (fourchette publique TBD ; 2026-11-05)',
        paymentCell: 'Outlier : Hebdomadaire le mardi via PayPal, AirTM ou ACH ; taux horaire ou au forfait',
        fieldsCell: 'Outlier : Code, STEM (maths, physique, chimie), 50+ langues, rédaction/raisonnement généraliste',
        eligibilityCell: 'Outlier : Ouvert dans 50+ pays dont la France et l’UE ; pièce d’identité et mobile local requis',
        screeningCell: 'Outlier : Création de profil, validation des compétences, contrôle d’identité, tests de 30 à 90 min',
      },
      {
        slug: 'micro1',
        platformCell: 'micro1 (micro1.ai)',
        payCell: 'micro1 : Rémunération compétitive fixée par offre (fourchette publique TBD ; 2026-11-05)',
        paymentCell: 'micro1 : Modalités de paiement indépendant TBD sur le site public',
        fieldsCell: 'micro1 : Génie logiciel, finance, santé/médecine, droit, recherche académique, robotique',
        eligibilityCell: 'micro1 : Communauté d’experts mondiale ; critères géographiques par projet TBD',
        screeningCell: 'micro1: Candidature à une offre, entretien technique automatisé par IA, onboarding',
      },
      {
        slug: 'handshake-ai',
        platformCell: 'Handshake AI (joinhandshake.com)',
        payCell: 'Handshake AI : 17–150 $/h (logiciel 150 $/h ; philosophie 120 $/h ; vérifié le 2026-11-05)',
        paymentCell: 'Handshake AI : Rémunération horaire de prestataire (plus de 500M $ versés ; mode TBD)',
        fieldsCell: 'Handshake AI : Logiciel (150 $/h), jeux/PCB (125 $/h), philosophie (120 $/h), FP&A (80 $/h), éval (17 $/h)',
        eligibilityCell: 'Handshake AI : RESTREINT : Résidence et autorisation de travail aux USA obligatoires ; NON ouvert en France/UE',
        screeningCell: 'Handshake AI : Inscription, vérification de diplôme et d’autorisation de travail américaine',
      },
    ],
    sections: [
      {
        h2: 'Quelles plateformes d’entraînement d’IA recrutent réellement en France et en Europe ?',
        paragraphs: [
          'Pour les résidents en France et en Europe, Mercor, Mindrift et Outlier sont les trois options viables. Elles acceptent les passeports et cartes d’identité européens et effectuent des virements électroniques réguliers.',
          'Alignerr bloque actuellement la plupart des résidents européens au niveau de la vérification Persona (documents US uniquement), et Handshake AI exige d’être basé aux États-Unis.',
        ],
      },
      {
        h2: 'Comment se comparent les tarifs horaires selon les métiers ?',
        paragraphs: [
          'Les domaines réglementés affichent les rémunérations les plus élevées : médecins (60–180 $/h chez Mercor), juristes (60–150 $/h chez Mercor) et développeurs (70–150 $/h chez Mercor).',
          'Les postes d’évaluation linguistique et généraliste se situent entre 15 et 30 $/h chez Mindrift et entre 35 et 70 $/h chez Mercor. Ces chiffres sont bruts et sans garantie d’heures.',
        ],
      },
      {
        h2: 'Comment fonctionnent les paiements et la fiscalité en France ?',
        paragraphs: [
          'Mercor et Outlier versent les gains chaque semaine (Mercor via Stripe en dollars, Outlier le mardi via PayPal ou AirTM). Mindrift paie toutes les deux semaines.',
          'Aucun prélèvement à la source n’est opéré par les plateformes. Vous devez déclarer ces revenus auprès de l’URSSAF (micro-entreprise) et sur votre déclaration de revenus impots.gouv.fr.',
        ],
      },
      {
        h2: 'Pourquoi les prestataires expérimentés s’inscrivent-ils sur plusieurs plateformes ?',
        paragraphs: [
          'Aucune plateforme ne garantit un volume horaire stable d’une semaine à l’autre. L’activité suit les cycles d’entraînement des modèles d’IA.',
          'Maintenir des profils validés sur deux ou trois plateformes permet de lisser les revenus face aux fluctuations.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quelle plateforme propose les tarifs horaires les plus élevés ?',
        answer:
          'Au 2026-11-05, Mercor publie les plafonds les plus hauts pour les médecins spécialistes (60–180 $/h) et les juristes (100–150 $/h).',
      },
      {
        question: 'Puis-je travailler sur plusieurs plateformes en même temps ?',
        answer:
          'Oui. En tant que travailleur indépendant, vous pouvez cumuler des missions sur Mercor, Mindrift et Outlier.',
      },
      {
        question: 'Pourquoi Alignerr pose-t-il problème aux candidats européens ?',
        answer:
          'Parce que sa FAQ officielle indique que la vérification Persona exige des pièces d’identité et numéros de téléphone des États-Unis.',
      },
      {
        question: 'Les plateformes prélèvent-elles mes cotisations sociales en France ?',
        answer:
          'Non. Vous recevez un montant brut et devez déclarer votre chiffre d’affaires à l’URSSAF et à l’administration fiscale.',
      },
    ],
  },
  es: {
    lang: 'es',
    reviewStatus: 'NEEDS NATIVE REVIEW',
    title: 'Comparativa plataformas entrenamiento IA (2026): 6 sitios | Edithsi',
    metaDescription:
      'Comparativa de Mercor, Mindrift, Alignerr, Outlier, micro1 y Handshake AI: tarifas ($15–180/h), cobros, elegibilidad en España/UE e impuestos.',
    h1: '¿Cuál es la mejor plataforma de entrenamiento de IA en Europa? 6 sitios comparados (2026)',
    directAnswer:
      'En las 6 principales plataformas de entrenamiento de IA, las tarifas horarias publicadas oscilan entre 15 $/h en tareas iniciales y 180 $/h en medicina especializada a fecha de 2026-11-05 (Mercor: 35–180 $/h; Mindrift: 15–100+ $/h; Alignerr: 15–120 $/h; Handshake AI: hasta 150 $/h solo EE. UU.; Outlier y micro1: por proyecto / TBD). Para especialistas en España y Europa, Mercor, Mindrift y Outlier son las más accesibles, mientras que Alignerr exige documentación estadounidense y Handshake AI restringe el acceso exclusivamente a residentes en EE. UU.',
    fairnessDisclosure:
      'Percibo comisiones de recomendación únicamente de Mercor a través del código 02e0c12a-d634-4738-9686-04f28f31f52b. Recibo 0 $ de Mindrift, Alignerr, Outlier, micro1 y Handshake AI. Todas las plataformas se evalúan bajo idénticos criterios a partir de fuentes públicas comprobadas el 2026-11-05.',
    tableHeaders: [
      'Plataforma',
      'Tarifas horarias publicadas (2026-11-05)',
      'Vía y frecuencia de pago',
      'Áreas principales',
      'Elegibilidad en España y Europa',
      'Proceso de selección',
      'Postular / enlace oficial',
    ],
    rows: [
      {
        slug: 'mercor',
        platformCell: 'Mercor (work.mercor.com)',
        payCell: 'Mercor: 35–180 $/h publicado en 7 pools (finanzas por proyecto; verificado el 2026-11-05)',
        paymentCell: 'Mercor: Pagos semanales en USD vía Stripe; contrato de contratista independiente',
        fieldsCell: 'Mercor: Derecho (60–150 $/h), medicina (60–180 $/h), software (70–150 $/h), idiomas (35–50 $/h), finanzas, generalistas',
        eligibilityCell: 'Mercor: Abierto a candidatos de España, la UE/EEE, Reino Unido, EE. UU. y Canadá',
        screeningCell: 'Mercor: Envío de CV, entrevista en vídeo automatizada por IA (~20 min), verificación de identidad',
      },
      {
        slug: 'mindrift',
        platformCell: 'Mindrift (mindrift.ai)',
        payCell: 'Mindrift: 15–30 $/h nivel inicial; 60–100+ $/h expertos; hasta 100 $/h médicos (2026-11-05)',
        paymentCell: 'Mindrift: Cobro quincenal por tarea aprobada (Toloka AI BV)',
        fieldsCell: 'Mindrift: 90+ materias: medicina (100 $/h), STEM (60–100+ $/h), redacción, idiomas (15–30 $/h)',
        eligibilityCell: 'Mindrift: Abierto en España según las condiciones freelance de Toloka',
        screeningCell: 'Mindrift: Prueba inicial, evaluación por especialidad, validación de criterios, DNI/pasaporte',
      },
      {
        slug: 'alignerr',
        platformCell: 'Alignerr (alignerr.com)',
        payCell: 'Alignerr: 15–120 $/h en ofertas públicas (ética/datos 40–120 $/h; media 80 $/h; 2026-11-05)',
        paymentCell: 'Alignerr: Canal y frecuencia TBD en FAQ pública; facturación como contratista',
        fieldsCell: 'Alignerr: Programación, STEM, ética IA (40–120 $/h), idiomas (25–35 $/h), selección (15–25 $/h)',
        eligibilityCell: 'Alignerr: ATENCIÓN: La FAQ oficial exige identificaciones y teléfonos de EE. UU. en Persona',
        screeningCell: 'Alignerr: Registro con Google, CV, verificación con Persona, entrevista Zara™ o prueba técnica',
      },
      {
        slug: 'outlier',
        platformCell: 'Outlier (outlier.ai)',
        payCell: 'Outlier: Tarifa informada por proyecto antes de comenzar (rango público TBD; 2026-11-05)',
        paymentCell: 'Outlier: Semanal los martes por PayPal, AirTM o ACH; por hora o tarea',
        fieldsCell: 'Outlier: Programación, STEM (matemáticas, física, química), 50+ idiomas, redacción/lógica',
        eligibilityCell: 'Outlier: Abierto en 50+ países incluidos España y la UE; requiere DNI y móvil local',
        screeningCell: 'Outlier: Registro, validación de competencias, verificación de identidad, pruebas de 30 a 90 min',
      },
      {
        slug: 'micro1',
        platformCell: 'micro1 (micro1.ai)',
        payCell: 'micro1: Remuneración competitiva fijada por vacante (rango público TBD; 2026-11-05)',
        paymentCell: 'micro1: Canal de pago para contratistas independientes TBD en web pública',
        fieldsCell: 'micro1: Desarrollo de software, finanzas, salud/medicina, derecho, investigación, robótica',
        eligibilityCell: 'micro1: Comunidad global de expertos remotos; restricciones territoriales por proyecto TBD',
        screeningCell: 'micro1: Postulación a vacante, entrevista técnica automatizada con IA, onboarding',
      },
      {
        slug: 'handshake-ai',
        platformCell: 'Handshake AI (joinhandshake.com)',
        payCell: 'Handshake AI: 17–150 $/h (software 150 $/h; filosofía 120 $/h; verificado el 2026-11-05)',
        paymentCell: 'Handshake AI: Pago por hora como contratista (+500M $ abonados citados; vía TBD)',
        fieldsCell: 'Handshake AI: Software (150 $/h), videojuegos/PCB (125 $/h), filosofía (120 $/h), FP&A (80 $/h), evaluación (17 $/h)',
        eligibilityCell: 'Handshake AI: RESTRINGIDO: Exige residencia y permiso de trabajo en EE. UU.; NO disponible en España/UE',
        screeningCell: 'Handshake AI: Registro, validación de titulación y permiso de trabajo en EE. UU.',
      },
    ],
    sections: [
      {
        h2: '¿Qué plataformas de entrenamiento de IA aceptan realmente candidatos de España y Europa?',
        paragraphs: [
          'Para quienes residen en España y Europa, las opciones más viables son Mercor, Mindrift y Outlier. Las tres admiten pasaportes y documentos de identidad comunitarios y abonan ingresos mediante transferencias o plataformas reconocidas.',
          'Alignerr suele bloquear el acceso en la verificación con Persona al exigir documentos y teléfonos estadounidenses, y Handshake AI requiere vivir en EE. UU. con permiso laboral en regla.',
        ],
      },
      {
        h2: '¿Cómo varían las tarifas según la especialidad profesional?',
        paragraphs: [
          'Las áreas con acreditación formal perciben las tarifas más altas: medicina (60–180 $/h en Mercor), derecho (60–150 $/h en Mercor) e ingeniería de software (70–150 $/h en Mercor).',
          'Los puestos de evaluación lingüística y generalista ofrecen entre 15 y 30 $/h en Mindrift y entre 35 y 70 $/h en Mercor. Todas las cifras son brutas y no conllevan horas garantizadas.',
        ],
      },
      {
        h2: '¿Cómo funcionan los pagos y la tributación en España?',
        paragraphs: [
          'Mercor y Outlier liquidan semanalmente (Mercor mediante Stripe en dólares, Outlier los martes vía PayPal o AirTM). Mindrift abona quincenalmente.',
          'Las plataformas no practican retenciones en origen para residentes europeos. Es responsabilidad de cada profesional declarar los ingresos en el régimen de autónomos ante la Agencia Tributaria y cotizar en la Seguridad Social.',
        ],
      },
      {
        h2: '¿Por qué los contratistas con experiencia se registran en varias plataformas?',
        paragraphs: [
          'Ninguna plataforma garantiza una carga constante de trabajo semanal. Las asignaciones dependen de los proyectos de entrenamiento de los modelos de IA.',
          'Mantener perfiles aprobados en dos o tres plataformas permite compensar los periodos sin asignaciones activas.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué plataforma abona las tarifas horarias más altas?',
        answer:
          'A fecha 2026-11-05, Mercor publica las tarifas más elevadas en medicina (60–180 $/h) y derecho (100–150 $/h).',
      },
      {
        question: '¿Es posible colaborar en varias plataformas a la vez?',
        answer:
          'Sí. Al operar como profesional independiente puedes recibir encargos simultáneos de Mercor, Mindrift y Outlier.',
      },
      {
        question: '¿Por qué se desaconseja Alignerr en Europa?',
        answer:
          'Porque su FAQ oficial indica que el sistema Persona solo valida identificaciones y números de teléfono de Estados Unidos o Canadá.',
      },
      {
        question: '¿Las plataformas me retienen impuestos en España?',
        answer:
          'No. Los pagos se perciben íntegros y debes declarar los ingresos y cotizar como autónomo en España.',
      },
    ],
  },
};

export function getPlatformPageContent(lang: Lang, slug: PlatformSlug): PlatformPageContent {
  return PLATFORM_CONTENT[lang]?.[slug] ?? PLATFORM_CONTENT.en[slug];
}

export function getComparePageContent(lang: Lang): ComparePageContent {
  return COMPARE_CONTENT[lang] ?? COMPARE_CONTENT.en;
}
