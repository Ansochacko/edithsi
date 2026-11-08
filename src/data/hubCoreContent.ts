// NEEDS NATIVE REVIEW for sv, de, fr, es
// Localized copy for the Pay Index (/pay-index/), Survey (/survey/) and Glossary (/glossary/) hub pages.
// All pay figures mirror src/data/pay-index/2026-11.json (checked 2026-11-05). Never add numbers that are not in that file.
import type { Lang } from '../i18n';
import type {
  PayIndexPageContent,
  SurveyPageContent,
  GlossaryPageContent,
  GlossaryTerm,
} from './hubTypes';

const GLOSSARY_IDS = [
  'rlhf',
  'rubric',
  'evals',
  'ai-trainer',
  'standing-pool',
  'referral-cap',
  'sft',
  'red-teaming',
  'golden-response',
  'calibration-task',
  'independent-contractor',
  'posted-rate-range',
] as const;

type GlossaryId = (typeof GLOSSARY_IDS)[number];
type TermBody = Omit<GlossaryTerm, 'id'>;

function buildTerms(map: Record<GlossaryId, TermBody>): GlossaryTerm[] {
  return GLOSSARY_IDS.map((id) => ({ id, ...map[id] }));
}

/* ------------------------------------------------------------------ */
/* EN — APPROVED                                                       */
/* ------------------------------------------------------------------ */

const PAY_EN: PayIndexPageContent = {
  lang: 'en',
  reviewStatus: 'APPROVED',
  title: 'AI Trainer Pay 2026: Posted Rates on 6 Platforms | Edithsi',
  metaDescription:
    'Posted AI-training pay across Mercor, micro1, Outlier, Alignerr, Handshake AI and Mindrift: $15–180/h USD, checked 2026-11-05. Free CSV, CC BY 4.0.',
  h1: 'How Much Do AI Trainers Make in 2026? Edithsi AI Work Pay Index',
  directAnswer:
    'As of 2026-11-05, posted independent-contractor rates across 6 platforms range from $15/h to $180/h USD: medical roles up to $180/h, legal $60–150/h, software up to $150/h and language work about $25–50/h. These are gross posted ranges from official listings, and work volume is never guaranteed.',
  methodologyTitle: 'How I compile the Pay Index',
  methodologyParagraphs: [
    'I record only figures that appear on official public job listings and official platform FAQ pages. Every row in this edition was checked by hand on 2026-11-05, and each row links to the exact source page.',
    'I use zero self-reported numbers: no forum posts, no screenshots, no anonymous claims. If a platform does not publish a numeric hourly range on a public page, I mark the row as TBD instead of guessing.',
    'All figures are gross independent-contractor rates in US dollars, before taxes, social contributions and payment fees. The full dataset is available as a CSV under the Creative Commons Attribution 4.0 (CC BY 4.0) licence, and I update the index monthly on the 5th.',
  ],
  downloadCsvLabel: 'Download the full dataset (CSV, CC BY 4.0)',
  changelogTitle: 'Changelog',
  tableHeaders: ['Field', 'Platform', 'Role', 'Posted range (USD/h)', 'Source', 'Checked'],
  sections: [
    {
      h2: 'Which fields pay the most for AI-training work?',
      paragraphs: [
        'In the 2026-11 edition, the highest posted ceiling is in medicine: Mercor lists its Medical Expert role at $60–180/h. Law follows closely, with Mercor posting $100–150/h for licensed lawyers and $60–150/h for its general Legal Expert role, while Mindrift lists $60–100+/h for law domain experts.',
        'Software engineering tops out at around $150/h (Mercor $70–150/h, Handshake AI up to $150/h). Office and productivity work is posted at $60–70/h, language roles at about $25–50/h, and generalist tasks start from $15–30/h on Mindrift. Several platforms, including micro1 and Outlier, do not publish a numeric range publicly, so those rows stay TBD.',
      ],
    },
    {
      h2: 'Is AI-training work paid hourly or per task?',
      paragraphs: [
        'It depends on the platform. Mercor and Handshake AI post hourly rates, and Mercor pays weekly via Stripe. Mindrift pays per completed task every two weeks, so its hourly figures are an estimate of what a task is worth at a typical pace.',
        'Outlier shows the rate before each project and pays weekly, while Alignerr and micro1 set rates per project. With per-task pay, your effective hourly rate depends on your speed and on how many tasks pass review, so I always compare the pay model column alongside the range.',
      ],
    },
    {
      h2: 'How does a gross USD rate compare to net income in Europe?',
      paragraphs: [
        'Every figure in the index is a gross US-dollar rate. As an independent contractor in Finland or elsewhere in Europe, you still have to cover income tax, social contributions such as YEL in Finland, possible VAT obligations, currency conversion and payment-provider fees.',
        'Your net income is therefore noticeably lower than the posted range, and the gap depends on your country, your business form and your total annual income. I do not publish net estimates; please check your own situation with your local tax authority or an accountant.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Where do the Pay Index numbers come from?',
      answer:
        'Only from official public job listings and official platform FAQ pages, checked on 2026-11-05. Each row links to its source, and I never include self-reported or anonymous figures.',
    },
    {
      question: 'Why do some rows say TBD?',
      answer:
        'TBD means the platform does not publish a numeric hourly range on a public page I could verify. I would rather leave a gap than guess a number.',
    },
    {
      question: 'Am I guaranteed to earn the posted rate?',
      answer:
        'No. These are posted ranges, not promises. Project availability, assessment results and work volume vary, and work is never guaranteed on any platform.',
    },
    {
      question: 'Can I reuse the data in an article or research?',
      answer:
        'Yes. The CSV is published under CC BY 4.0, so you can reuse it freely as long as you credit "Edithsi AI Work Pay Index" and link to this page.',
    },
  ],
};

const SURVEY_EN: SurveyPageContent = {
  lang: 'en',
  reviewStatus: 'APPROVED',
  title: 'AI-Training Work in Finland & Europe: 2026 Survey Method',
  metaDescription:
    'Method and placeholder report for my anonymous survey on AI-training work in Finland and Europe. No statistics are published before verified data collection.',
  h1: 'What Is the Real State of AI-Training Work in Finland & Europe? (2026 Survey & Method)',
  directAnswer:
    'This page describes the method and is the placeholder report for my anonymous survey on AI-training work in Finland and Europe. I publish no statistics here until data collection is complete and verified.',
  methodologySections: [
    {
      h2: 'What will the survey measure?',
      paragraphs: [
        'The survey focuses on things that posted listings cannot show: how long people wait in standing pools before getting a first project, how real effective rates compare with posted ranges, how skill assessments turn out, and which tax and social-security setups people use, such as a toiminimi and YEL in Finland.',
        'I will report results only in aggregated form and only once enough verified responses exist for a figure to be meaningful.',
      ],
    },
    {
      h2: 'How is privacy protected?',
      paragraphs: [
        'The survey is designed with zero personally identifiable information: I do not ask for names, email addresses, employer details or anything else that could identify a respondent.',
        'No personal data is stored on Edithsi. Answers are collected anonymously, and free-text fields are reviewed before any aggregation so that no identifying details can slip into a published report.',
      ],
    },
    {
      h2: 'What can journalists cite in the meantime?',
      paragraphs: [
        'Until the survey results are published, please cite the Edithsi AI Work Pay Index. It is built only from official public listings, every row links to its source, and the CSV is licensed under CC BY 4.0.',
        'Please do not quote this page as a source of survey statistics, because none have been published yet.',
      ],
    },
  ],
  plannedMetricsTable: [
    { metric: 'Standing-pool wait time before first project', scope: 'Finland & Europe, all fields', status: 'TBD — anonymous collection not yet complete (checked 2026-11-05)' },
    { metric: 'Effective hourly rate vs posted range', scope: 'By platform and field', status: 'TBD — anonymous collection not yet complete (checked 2026-11-05)' },
    { metric: 'Skill assessment pass/fail outcomes', scope: 'By platform', status: 'TBD — anonymous collection not yet complete (checked 2026-11-05)' },
    { metric: 'Tax and social-security setup (e.g. toiminimi, YEL)', scope: 'Finland and other EU countries', status: 'TBD — anonymous collection not yet complete (checked 2026-11-05)' },
    { metric: 'Weekly hours actually available', scope: 'By platform and field', status: 'TBD — anonymous collection not yet complete (checked 2026-11-05)' },
    { metric: 'Payment method and currency-conversion costs', scope: 'Finland & Europe', status: 'TBD — anonymous collection not yet complete (checked 2026-11-05)' },
  ],
  faqs: [
    {
      question: 'Are there any survey results yet?',
      answer:
        'Not yet. I only publish figures after anonymous data collection is complete and verified, so every metric is currently marked TBD.',
    },
    {
      question: 'Do you store my personal data?',
      answer:
        'No. The survey asks for no personally identifiable information, and no personal data is stored on Edithsi.',
    },
    {
      question: 'Who runs this survey?',
      answer:
        'I run it independently as the author of Edithsi. It is not commissioned or funded by any of the platforms covered.',
    },
    {
      question: 'What should I cite before results are out?',
      answer:
        'Please cite the Edithsi AI Work Pay Index, which is based only on official public listings checked on 2026-11-05 and is available as a CC BY 4.0 CSV.',
    },
  ],
};

const GLOSSARY_EN: GlossaryPageContent = {
  lang: 'en',
  reviewStatus: 'APPROVED',
  title: 'AI Training Glossary: RLHF, Evals, Rubrics & More | Edithsi',
  metaDescription:
    'Plain-language definitions of 12 AI-training terms: RLHF, evals, rubrics, standing pools, SFT, red-teaming, golden responses and more, with example roles.',
  h1: 'What Do RLHF, Evals, Rubrics & Standing Pools Mean in AI Training?',
  directAnswer:
    'RLHF, evals and rubrics describe how human experts judge and improve AI model answers, while a standing pool is a group of vetted contractors waiting to be matched to projects. Below I define 12 common terms in one sentence each, with details and an example of who does the work.',
  terms: buildTerms({
    rlhf: {
      term: 'RLHF (Reinforcement Learning from Human Feedback)',
      firstSentenceDefinition:
        'RLHF is a training method in which human reviewers rank or rate AI model answers so the model learns to prefer the responses people judge as better.',
      details:
        'In practice, you compare two or more answers to the same prompt and pick or score the best one. Those preferences are used to train a reward model that steers the AI. Many AI-training projects are, at their core, RLHF work.',
      exampleRole: 'A generalist writer or domain expert comparing model answers side by side.',
    },
    rubric: {
      term: 'Rubric',
      firstSentenceDefinition:
        'A rubric is a written set of criteria that defines exactly how an AI answer should be scored.',
      details:
        'Rubrics typically list required facts, reasoning steps, tone and formatting rules, each with its own weight. Experts either grade answers against an existing rubric or write new rubrics for their field. Following the rubric closely is usually what reviewers check first.',
      exampleRole: 'A lawyer writing grading criteria for contract-analysis answers.',
    },
    evals: {
      term: 'Evals (evaluations)',
      firstSentenceDefinition:
        'Evals are structured tests that measure how well an AI model performs on a defined set of tasks.',
      details:
        'An eval combines prompts, reference answers and a scoring method, often a rubric. Domain experts build evals so that model quality can be compared over time. Platforms such as Mercor list eval work for medicine, law, finance and software.',
      exampleRole: 'A physician designing clinical-reasoning test cases.',
    },
    'ai-trainer': {
      term: 'AI trainer',
      firstSentenceDefinition:
        'An AI trainer is a person who creates, reviews or grades data that is used to improve an AI model.',
      details:
        'The title covers a wide range of tasks, from writing prompts and ideal answers to ranking outputs and checking facts. Most AI trainers work remotely as independent contractors. Expert roles require proven knowledge in a specific field.',
      exampleRole: 'A software engineer reviewing AI-generated code for correctness.',
    },
    'standing-pool': {
      term: 'Standing pool',
      firstSentenceDefinition:
        'A standing pool is a group of contractors who have passed screening and wait to be matched to projects as they open.',
      details:
        'Joining a pool does not mean you get work immediately; matching depends on project demand and your profile. Waiting times vary a lot and are not published by the platforms. This is one reason work is never guaranteed.',
      exampleRole: 'A Finnish-language expert accepted into a language pool and waiting for a project.',
    },
    'referral-cap': {
      term: 'Referral cap',
      firstSentenceDefinition:
        'A referral cap is a limit set by a platform on how many people one person can refer, or on how much referral reward they can earn.',
      details:
        'Caps and referral terms differ between platforms and can change without notice. A referral link does not affect how a candidate is assessed. I disclose clearly whenever a link on Edithsi is a referral link.',
      exampleRole: 'Any existing contractor sharing a platform referral link.',
    },
    sft: {
      term: 'SFT (Supervised Fine-Tuning)',
      firstSentenceDefinition:
        'SFT is a training step in which an AI model learns from examples of prompts paired with high-quality answers written by humans.',
      details:
        'Unlike RLHF, SFT does not compare answers; it shows the model what a good answer looks like. Experts write or edit these model answers in their own field. Accuracy and clear reasoning matter more than speed.',
      exampleRole: 'A finance professional writing step-by-step answers to accounting questions.',
    },
    'red-teaming': {
      term: 'Red-teaming',
      firstSentenceDefinition:
        'Red-teaming is the practice of deliberately trying to make an AI model fail, break its rules or produce harmful output so the weaknesses can be fixed.',
      details:
        'Red-teamers write tricky, adversarial prompts and document what goes wrong. The work requires creativity and careful reporting. Some projects focus on specific risks such as medical misinformation or security.',
      exampleRole: 'A security engineer probing a model for unsafe code suggestions.',
    },
    'golden-response': {
      term: 'Golden response',
      firstSentenceDefinition:
        'A golden response is a reference answer, written or approved by an expert, that represents the ideal output for a given prompt.',
      details:
        'Golden responses are used to train models and to score other answers. They must be accurate, complete and follow the project guidelines exactly. Writing them is often among the most demanding expert tasks.',
      exampleRole: 'A pharmacist writing the ideal answer to a drug-interaction question.',
    },
    'calibration-task': {
      term: 'Calibration task',
      firstSentenceDefinition:
        'A calibration task is a sample task with a known correct answer that checks whether a contractor applies the guidelines consistently.',
      details:
        'Calibration tasks may appear during onboarding or be mixed into regular work. Results can affect whether you continue on a project. Reading the guidelines carefully is the best preparation.',
      exampleRole: 'A new contractor completing practice grading before a project starts.',
    },
    'independent-contractor': {
      term: 'Independent contractor',
      firstSentenceDefinition:
        'An independent contractor is a self-employed person who provides services to a client without being its employee.',
      details:
        'AI-training platforms almost always engage people as contractors, which means no employer-paid social contributions, holiday pay or guaranteed hours. In Finland this usually involves handling your own taxes and, depending on income, YEL insurance. Rules vary by country.',
      exampleRole: 'Any AI trainer working through Mercor, Mindrift or a similar platform.',
    },
    'posted-rate-range': {
      term: 'Posted rate range',
      firstSentenceDefinition:
        'A posted rate range is the hourly pay band that a platform publishes on an official job listing or FAQ page.',
      details:
        'It shows what a platform says it may pay, not what any individual will earn. Figures are gross and usually in US dollars. The Edithsi Pay Index records only posted ranges and marks missing ones as TBD.',
      exampleRole: 'Anyone comparing listings, for example a lawyer weighing a $60–150/h legal role.',
    },
  }),
  faqs: [
    {
      question: 'What is the difference between RLHF and SFT?',
      answer:
        'SFT teaches a model with example answers written by humans, while RLHF teaches it by having humans compare and rank its own answers. Many projects use both.',
    },
    {
      question: 'Do I need a technical background to understand these terms?',
      answer:
        'No. Most expert AI-training work relies on your field knowledge, such as medicine, law or a language, and the platforms explain their tools and guidelines during onboarding.',
    },
    {
      question: 'Does joining a standing pool mean I will get work?',
      answer:
        'No. A standing pool only means you passed screening; projects are matched based on demand, and work is never guaranteed.',
    },
    {
      question: 'Why does the Pay Index use posted rate ranges?',
      answer:
        'Because they can be verified from official sources. I do not use self-reported pay, so every figure can be checked against the linked listing.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* FI — APPROVED                                                       */
/* ------------------------------------------------------------------ */

const PAY_FI: PayIndexPageContent = {
  lang: 'fi',
  reviewStatus: 'APPROVED',
  title: 'Tekoälykouluttajan palkka 2026: 6 alustan tuntihinnat',
  metaDescription:
    'Tekoälykoulutustyön ilmoitetut tuntihinnat Mercorissa, micro1:ssä, Outlierissa, Alignerrissa, Handshake AI:ssa ja Mindriftissä: 15–180 $/h, tarkistettu 5.11.2026.',
  h1: 'Paljonko tekoälykouluttaja tienaa vuonna 2026? Edithsin tekoälytyön palkkaindeksi',
  directAnswer:
    'Kuuden alustan ilmoitetut itsenäisen ammatinharjoittajan tuntihinnat olivat 5.11.2026 välillä 15–180 $/h (USD): lääketieteen tehtävissä jopa 180 $/h, juridiikassa 60–150 $/h, ohjelmistokehityksessä jopa 150 $/h ja kielitehtävissä noin 25–50 $/h. Luvut ovat virallisista ilmoituksista poimittuja bruttohaarukoita, eikä työn määrää koskaan taata.',
  methodologyTitle: 'Miten kokoan palkkaindeksin',
  methodologyParagraphs: [
    'Kirjaan indeksiin vain lukuja, jotka näkyvät alustojen virallisissa julkisissa työilmoituksissa tai virallisilla UKK-sivuilla. Tarkistin jokaisen rivin käsin 5.11.2026, ja jokaisesta rivistä on linkki täsmälliseen lähdesivuun.',
    'En käytä lainkaan itse ilmoitettuja lukuja: en keskustelupalstoja, kuvakaappauksia tai nimettömiä väitteitä. Jos alusta ei julkaise numeerista tuntihaarukkaa julkisella sivulla, merkitsen rivin TBD-merkinnällä arvaamisen sijaan.',
    'Kaikki luvut ovat itsenäisen ammatinharjoittajan bruttotuntihintoja Yhdysvaltain dollareina ennen veroja, sosiaaliturvamaksuja ja maksupalvelujen kuluja. Koko aineisto on ladattavissa CSV-tiedostona Creative Commons Nimeä 4.0 (CC BY 4.0) -lisenssillä, ja päivitän indeksin kuukausittain kuun 5. päivänä.',
  ],
  downloadCsvLabel: 'Lataa koko aineisto (CSV, CC BY 4.0)',
  changelogTitle: 'Muutosloki',
  tableHeaders: ['Ala', 'Alusta', 'Tehtävä', 'Ilmoitettu haarukka (USD/h)', 'Lähde', 'Tarkistettu'],
  sections: [
    {
      h2: 'Mitkä alat maksavat tekoälykoulutustyöstä eniten?',
      paragraphs: [
        'Painoksessa 2026-11 korkein ilmoitettu yläraja on lääketieteessä: Mercor ilmoittaa Medical Expert -tehtävän hinnaksi 60–180 $/h. Juridiikka on lähellä: Mercor ilmoittaa lisensoiduille juristeille 100–150 $/h ja yleiselle Legal Expert -tehtävälle 60–150 $/h, ja Mindrift ilmoittaa oikeusalan asiantuntijoille 60–100+ $/h.',
        'Ohjelmistokehityksessä yläraja on noin 150 $/h (Mercor 70–150 $/h, Handshake AI jopa 150 $/h). Toimisto-ohjelmistotyön hinnaksi on ilmoitettu 60–70 $/h, kielitehtäville noin 25–50 $/h, ja yleistehtävät alkavat Mindriftissä 15–30 $/h. Useat alustat, kuten micro1 ja Outlier, eivät julkaise numeerista haarukkaa julkisesti, joten niiden rivit ovat TBD.',
      ],
    },
    {
      h2: 'Maksetaanko tekoälykoulutustyöstä tunti- vai tehtäväpalkkaa?',
      paragraphs: [
        'Se riippuu alustasta. Mercor ja Handshake AI ilmoittavat tuntihinnat, ja Mercor maksaa viikoittain Stripen kautta. Mindrift maksaa valmiista tehtävistä kahden viikon välein, joten sen tuntiluvut ovat arvio siitä, mitä tehtävä on tavanomaisella työtahdilla arvoinen.',
        'Outlier näyttää hinnan ennen jokaista projektia ja maksaa viikoittain, kun taas Alignerr ja micro1 sopivat hinnat projektikohtaisesti. Tehtäväpalkassa todellinen tuntiansio riippuu nopeudestasi ja siitä, kuinka moni tehtävä hyväksytään tarkastuksessa, joten vertaan aina palkkausmallia haarukan rinnalla.',
      ],
    },
    {
      h2: 'Miten brutto-USD-hinta vertautuu nettotuloon Euroopassa?',
      paragraphs: [
        'Jokainen indeksin luku on bruttohinta Yhdysvaltain dollareina. Itsenäisenä ammatinharjoittajana Suomessa tai muualla Euroopassa maksat siitä vielä tuloveron, sosiaaliturvamaksut kuten Suomessa YEL-maksun, mahdollisen arvonlisäveron, valuutanvaihtokulut ja maksupalvelun palkkiot.',
        'Nettotulosi on siis selvästi ilmoitettua haarukkaa pienempi, ja ero riippuu maasta, yritysmuodosta ja vuoden kokonaistuloistasi. En julkaise nettoarvioita; tarkista oma tilanteesi Verohallinnosta tai kirjanpitäjältä.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Mistä palkkaindeksin luvut tulevat?',
      answer:
        'Vain alustojen virallisista julkisista työilmoituksista ja virallisilta UKK-sivuilta, jotka tarkistin 5.11.2026. Jokaisesta rivistä on linkki lähteeseen, enkä koskaan käytä itse ilmoitettuja tai nimettömiä lukuja.',
    },
    {
      question: 'Miksi osassa riveistä lukee TBD?',
      answer:
        'TBD tarkoittaa, ettei alusta julkaise numeerista tuntihaarukkaa julkisella sivulla, jonka voisin tarkistaa. Jätän mieluummin kohdan tyhjäksi kuin arvaan luvun.',
    },
    {
      question: 'Saanko varmasti ilmoitetun tuntihinnan?',
      answer:
        'Et. Luvut ovat ilmoitettuja haarukoita, eivät lupauksia. Projektien saatavuus, arviointien tulokset ja työn määrä vaihtelevat, eikä työtä taata millään alustalla.',
    },
    {
      question: 'Voinko käyttää aineistoa artikkelissa tai tutkimuksessa?',
      answer:
        'Voit. CSV on julkaistu CC BY 4.0 -lisenssillä, joten saat käyttää sitä vapaasti, kunhan mainitset lähteeksi "Edithsi AI Work Pay Index" ja linkität tälle sivulle.',
    },
  ],
};

const SURVEY_FI_STATUS = 'TBD — nimetön keruu on vielä kesken (tarkistettu 5.11.2026)';

const SURVEY_FI: SurveyPageContent = {
  lang: 'fi',
  reviewStatus: 'APPROVED',
  title: 'Tekoälykoulutustyö Suomessa ja Euroopassa: kysely 2026',
  metaDescription:
    'Nimettömän kyselyni menetelmä ja raporttipohja tekoälykoulutustyöstä Suomessa ja Euroopassa. En julkaise tilastoja ennen kuin aineisto on kerätty ja varmistettu.',
  h1: 'Millainen on tekoälykoulutustyön todellinen tilanne Suomessa ja Euroopassa? (Kysely ja menetelmä 2026)',
  directAnswer:
    'Tällä sivulla kuvaan nimettömän kyselyni menetelmän, ja sivu toimii raporttipohjana tekoälykoulutustyöstä Suomessa ja Euroopassa. En julkaise täällä tilastoja ennen kuin aineiston keruu on valmis ja varmistettu.',
  methodologySections: [
    {
      h2: 'Mitä kysely mittaa?',
      paragraphs: [
        'Kysely keskittyy asioihin, joita työilmoitukset eivät kerro: kuinka kauan ihmiset odottavat poolissa ennen ensimmäistä projektia, miten todellinen tuntiansio vertautuu ilmoitettuun haarukkaan, miten osaamistestit menevät ja millaisilla vero- ja sosiaaliturvaratkaisuilla työtä tehdään, esimerkiksi toiminimellä ja YEL-vakuutuksella.',
        'Raportoin tulokset vain koostettuina ja vasta, kun varmistettuja vastauksia on niin paljon, että luku on merkityksellinen.',
      ],
    },
    {
      h2: 'Miten yksityisyys suojataan?',
      paragraphs: [
        'Kysely on suunniteltu niin, ettei siinä kerätä lainkaan tunnistetietoja: en kysy nimeä, sähköpostiosoitetta, työnantajaa tai mitään muuta, josta vastaajan voisi tunnistaa.',
        'Edithsiin ei tallenneta henkilötietoja. Vastaukset kerätään nimettöminä, ja käyn avoimet vastaukset läpi ennen koostamista, jotta julkaistuun raporttiin ei päädy tunnistettavia yksityiskohtia.',
      ],
    },
    {
      h2: 'Mihin toimittajat voivat viitata sillä välin?',
      paragraphs: [
        'Ennen kyselyn tulosten julkaisua viittaathan Edithsin tekoälytyön palkkaindeksiin. Se perustuu vain virallisiin julkisiin ilmoituksiin, jokaisesta rivistä on linkki lähteeseen ja CSV on CC BY 4.0 -lisensoitu.',
        'Älä lainaa tätä sivua kyselytilastojen lähteenä, koska niitä ei ole vielä julkaistu.',
      ],
    },
  ],
  plannedMetricsTable: [
    { metric: 'Odotusaika poolissa ennen ensimmäistä projektia', scope: 'Suomi ja Eurooppa, kaikki alat', status: SURVEY_FI_STATUS },
    { metric: 'Todellinen tuntiansio vs. ilmoitettu haarukka', scope: 'Alustoittain ja aloittain', status: SURVEY_FI_STATUS },
    { metric: 'Osaamistestien läpäisy ja hylkäykset', scope: 'Alustoittain', status: SURVEY_FI_STATUS },
    { metric: 'Vero- ja sosiaaliturvaratkaisu (esim. toiminimi, YEL)', scope: 'Suomi ja muut EU-maat', status: SURVEY_FI_STATUS },
    { metric: 'Todellisuudessa tarjolla olevat viikkotunnit', scope: 'Alustoittain ja aloittain', status: SURVEY_FI_STATUS },
    { metric: 'Maksutapa ja valuutanvaihdon kulut', scope: 'Suomi ja Eurooppa', status: SURVEY_FI_STATUS },
  ],
  faqs: [
    {
      question: 'Onko kyselyn tuloksia jo saatavilla?',
      answer:
        'Ei vielä. Julkaisen lukuja vasta, kun nimetön aineistonkeruu on valmis ja varmistettu, joten jokainen mittari on toistaiseksi TBD.',
    },
    {
      question: 'Tallennatko henkilötietojani?',
      answer:
        'En. Kyselyssä ei kysytä tunnistetietoja, eikä Edithsiin tallenneta henkilötietoja.',
    },
    {
      question: 'Kuka kyselyn toteuttaa?',
      answer:
        'Toteutan sen itsenäisesti Edithsin tekijänä. Mikään käsitellyistä alustoista ei ole tilannut tai rahoittanut kyselyä.',
    },
    {
      question: 'Mihin minun pitäisi viitata ennen tulosten julkaisua?',
      answer:
        'Viittaa Edithsin tekoälytyön palkkaindeksiin, joka perustuu vain 5.11.2026 tarkistettuihin virallisiin julkisiin ilmoituksiin ja on saatavilla CC BY 4.0 -lisensoituna CSV-tiedostona.',
    },
  ],
};

const GLOSSARY_FI: GlossaryPageContent = {
  lang: 'fi',
  reviewStatus: 'APPROVED',
  title: 'Tekoälykoulutuksen sanasto: RLHF, evalit, rubriikit | Edithsi',
  metaDescription:
    'Selkeät määritelmät 12 tekoälykoulutuksen termille: RLHF, evalit, rubriikit, poolit, SFT, red teaming, mallivastaukset ja muut – esimerkkitehtävineen.',
  h1: 'Mitä RLHF, evalit, rubriikit ja poolit tarkoittavat tekoälykoulutuksessa?',
  directAnswer:
    'RLHF, evalit ja rubriikit kuvaavat sitä, miten ihmisasiantuntijat arvioivat ja parantavat tekoälymallien vastauksia, kun taas pooli on joukko seulottuja toimeksisaajia, jotka odottavat projekteihin pääsyä. Alla määrittelen 12 yleistä termiä yhdellä lauseella, lisätietoineen ja esimerkkeineen siitä, kuka työtä tekee.',
  terms: buildTerms({
    rlhf: {
      term: 'RLHF (vahvistusoppiminen ihmispalautteesta)',
      firstSentenceDefinition:
        'RLHF on koulutusmenetelmä, jossa ihmisarvioijat järjestävät tai pisteyttävät tekoälymallin vastauksia, jotta malli oppii suosimaan ihmisten parempina pitämiä vastauksia.',
      details:
        'Käytännössä vertaat kahta tai useampaa vastausta samaan kehotteeseen ja valitset tai pisteytät parhaan. Näillä mieltymyksillä koulutetaan palkkiomalli, joka ohjaa tekoälyä. Moni tekoälykoulutusprojekti on pohjimmiltaan RLHF-työtä.',
      exampleRole: 'Yleisosaaja tai alan asiantuntija, joka vertailee mallin vastauksia rinnakkain.',
    },
    rubric: {
      term: 'Rubriikki (arviointikriteeristö)',
      firstSentenceDefinition:
        'Rubriikki on kirjallinen kriteeristö, joka määrittää tarkasti, miten tekoälyn vastaus pisteytetään.',
      details:
        'Rubriikissa luetellaan tyypillisesti vaaditut faktat, päättelyvaiheet sekä sävy- ja muotoilusäännöt, joilla kullakin on oma painoarvonsa. Asiantuntijat joko arvioivat vastauksia valmiin rubriikin mukaan tai laativat uusia rubriikkeja omalle alalleen. Rubriikin tarkka noudattaminen on yleensä ensimmäinen asia, jonka tarkastajat katsovat.',
      exampleRole: 'Juristi, joka laatii arviointikriteerit sopimusanalyysin vastauksille.',
    },
    evals: {
      term: 'Evalit (arvioinnit)',
      firstSentenceDefinition:
        'Evalit ovat jäsenneltyjä testejä, jotka mittaavat, kuinka hyvin tekoälymalli suoriutuu määritellystä tehtäväjoukosta.',
      details:
        'Evali koostuu kehotteista, viitevastauksista ja pisteytystavasta, usein rubriikista. Alan asiantuntijat rakentavat evaleja, jotta mallien laatua voidaan verrata ajan mittaan. Esimerkiksi Mercor ilmoittaa eval-tehtäviä lääketieteeseen, juridiikkaan, talouteen ja ohjelmistokehitykseen.',
      exampleRole: 'Lääkäri, joka suunnittelee kliinisen päättelyn testitapauksia.',
    },
    'ai-trainer': {
      term: 'Tekoälykouluttaja (AI trainer)',
      firstSentenceDefinition:
        'Tekoälykouluttaja on henkilö, joka tuottaa, tarkistaa tai arvioi aineistoa, jolla tekoälymallia parannetaan.',
      details:
        'Nimike kattaa laajan kirjon tehtäviä kehotteiden ja mallivastausten kirjoittamisesta tulosten järjestämiseen ja faktojen tarkistamiseen. Useimmat tekoälykouluttajat työskentelevät etänä itsenäisinä ammatinharjoittajina. Asiantuntijatehtävät edellyttävät osoitettua osaamista tietyltä alalta.',
      exampleRole: 'Ohjelmistokehittäjä, joka tarkistaa tekoälyn tuottaman koodin oikeellisuuden.',
    },
    'standing-pool': {
      term: 'Pooli (standing pool)',
      firstSentenceDefinition:
        'Pooli on joukko seulonnan läpäisseitä toimeksisaajia, jotka odottavat pääsyä projekteihin sitä mukaa kuin niitä avautuu.',
      details:
        'Pooliin pääsy ei tarkoita, että saisit töitä heti; projekteihin valinta riippuu kysynnästä ja profiilistasi. Odotusajat vaihtelevat paljon, eivätkä alustat julkaise niitä. Tämä on yksi syy siihen, ettei työtä koskaan taata.',
      exampleRole: 'Suomen kielen asiantuntija, joka on hyväksytty kielipooliin ja odottaa projektia.',
    },
    'referral-cap': {
      term: 'Suosittelukatto (referral cap)',
      firstSentenceDefinition:
        'Suosittelukatto on alustan asettama raja sille, kuinka monta henkilöä yksi ihminen voi suositella tai kuinka paljon suosittelupalkkiota hän voi ansaita.',
      details:
        'Katot ja suositteluehdot vaihtelevat alustoittain ja voivat muuttua ilman ennakkoilmoitusta. Suosittelulinkki ei vaikuta siihen, miten hakijaa arvioidaan. Kerron aina selvästi, kun Edithsin linkki on suosittelulinkki.',
      exampleRole: 'Kuka tahansa nykyinen toimeksisaaja, joka jakaa alustan suosittelulinkkiä.',
    },
    sft: {
      term: 'SFT (ohjattu hienosäätö)',
      firstSentenceDefinition:
        'SFT on koulutusvaihe, jossa tekoälymalli oppii esimerkeistä, joissa kehotteeseen on liitetty ihmisen kirjoittama laadukas vastaus.',
      details:
        'Toisin kuin RLHF, SFT ei vertaile vastauksia, vaan näyttää mallille, millainen hyvä vastaus on. Asiantuntijat kirjoittavat tai muokkaavat näitä mallivastauksia omalla alallaan. Tarkkuus ja selkeä päättely ovat tärkeämpiä kuin nopeus.',
      exampleRole: 'Talousalan ammattilainen, joka kirjoittaa vaiheittaisia vastauksia kirjanpitokysymyksiin.',
    },
    'red-teaming': {
      term: 'Red teaming',
      firstSentenceDefinition:
        'Red teaming tarkoittaa tekoälymallin tahallista yrittämistä saada epäonnistumaan, rikkomaan sääntöjään tai tuottamaan haitallista sisältöä, jotta heikkoudet voidaan korjata.',
      details:
        'Red teamerit kirjoittavat hankalia, harhaanjohtavia kehotteita ja dokumentoivat, mikä menee pieleen. Työ vaatii luovuutta ja huolellista raportointia. Osa projekteista keskittyy tiettyihin riskeihin, kuten lääketieteelliseen väärään tietoon tai tietoturvaan.',
      exampleRole: 'Tietoturva-asiantuntija, joka testaa, ehdottaako malli turvatonta koodia.',
    },
    'golden-response': {
      term: 'Mallivastaus (golden response)',
      firstSentenceDefinition:
        'Mallivastaus on asiantuntijan kirjoittama tai hyväksymä viitevastaus, joka edustaa ihanteellista tulosta tiettyyn kehotteeseen.',
      details:
        'Mallivastauksilla koulutetaan malleja ja pisteytetään muita vastauksia. Niiden on oltava täsmällisiä, kattavia ja noudatettava projektin ohjeita tarkasti. Niiden kirjoittaminen on usein vaativimpia asiantuntijatehtäviä.',
      exampleRole: 'Farmaseutti, joka kirjoittaa ihanteellisen vastauksen lääkeyhteisvaikutuksia koskevaan kysymykseen.',
    },
    'calibration-task': {
      term: 'Kalibrointitehtävä',
      firstSentenceDefinition:
        'Kalibrointitehtävä on esimerkkitehtävä, jonka oikea vastaus tiedetään ja jolla tarkistetaan, soveltaako toimeksisaaja ohjeita johdonmukaisesti.',
      details:
        'Kalibrointitehtäviä voi tulla perehdytyksen aikana tai niitä voidaan sekoittaa tavalliseen työhön. Tulokset voivat vaikuttaa siihen, jatkatko projektissa. Ohjeiden huolellinen lukeminen on paras valmistautumiskeino.',
      exampleRole: 'Uusi toimeksisaaja, joka tekee harjoitusarviointeja ennen projektin alkua.',
    },
    'independent-contractor': {
      term: 'Itsenäinen ammatinharjoittaja (independent contractor)',
      firstSentenceDefinition:
        'Itsenäinen ammatinharjoittaja on yrittäjä, joka tarjoaa palveluja asiakkaalle olematta tämän työntekijä.',
      details:
        'Tekoälykoulutusalustat käyttävät lähes aina toimeksisaajia, joten työnantajan maksamia sosiaaliturvamaksuja, lomarahaa tai taattuja tunteja ei ole. Suomessa tämä tarkoittaa yleensä omien verojen hoitamista ja tuloista riippuen YEL-vakuutusta. Säännöt vaihtelevat maittain.',
      exampleRole: 'Kuka tahansa tekoälykouluttaja, joka työskentelee Mercorin, Mindriftin tai vastaavan alustan kautta.',
    },
    'posted-rate-range': {
      term: 'Ilmoitettu tuntihaarukka (posted rate range)',
      firstSentenceDefinition:
        'Ilmoitettu tuntihaarukka on palkkahaarukka, jonka alusta julkaisee virallisessa työilmoituksessa tai UKK-sivulla.',
      details:
        'Se kertoo, mitä alusta sanoo voivansa maksaa, ei sitä, mitä kukin yksittäinen henkilö ansaitsee. Luvut ovat bruttoja ja yleensä Yhdysvaltain dollareina. Edithsin palkkaindeksi kirjaa vain ilmoitetut haarukat ja merkitsee puuttuvat TBD:ksi.',
      exampleRole: 'Kuka tahansa ilmoituksia vertaileva, esimerkiksi juristi, joka harkitsee 60–150 $/h juridista tehtävää.',
    },
  }),
  faqs: [
    {
      question: 'Mitä eroa on RLHF:llä ja SFT:llä?',
      answer:
        'SFT opettaa mallia ihmisten kirjoittamilla esimerkkivastauksilla, kun taas RLHF opettaa sitä antamalla ihmisten vertailla ja järjestää mallin omia vastauksia. Monissa projekteissa käytetään molempia.',
    },
    {
      question: 'Tarvitsenko teknistä taustaa ymmärtääkseni nämä termit?',
      answer:
        'Et. Useimmat asiantuntijatehtävät perustuvat oman alasi osaamiseen, kuten lääketieteeseen, juridiikkaan tai kieleen, ja alustat opastavat työkaluihinsa ja ohjeisiinsa perehdytyksessä.',
    },
    {
      question: 'Tarkoittaako pooliin pääsy, että saan töitä?',
      answer:
        'Ei. Pooliin pääsy tarkoittaa vain, että läpäisit seulonnan; projekteihin valitaan kysynnän mukaan, eikä työtä koskaan taata.',
    },
    {
      question: 'Miksi palkkaindeksi käyttää ilmoitettuja tuntihaarukoita?',
      answer:
        'Koska ne voi tarkistaa virallisista lähteistä. En käytä itse ilmoitettuja palkkatietoja, joten jokaisen luvun voi tarkistaa linkitetystä ilmoituksesta.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* SV — NEEDS NATIVE REVIEW                                            */
/* ------------------------------------------------------------------ */

const PAY_SV: PayIndexPageContent = {
  lang: 'sv',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Lön för AI-tränare 2026: timpriser på 6 plattformar | Edithsi',
  metaDescription:
    'Annonserade timpriser för AI-träning hos Mercor, micro1, Outlier, Alignerr, Handshake AI och Mindrift: 15–180 USD/h, kontrollerat 2026-11-05. Gratis CSV.',
  h1: 'Hur mycket tjänar en AI-tränare 2026? Edithsi AI Work Pay Index',
  directAnswer:
    'Den 2026-11-05 låg de annonserade timpriserna för uppdragstagare på 6 plattformar mellan 15 och 180 USD/h: medicinska roller upp till 180 USD/h, juridik 60–150 USD/h, mjukvaruutveckling upp till 150 USD/h och språkarbete runt 25–50 USD/h. Det är annonserade bruttospann från officiella annonser, och arbetsvolymen är aldrig garanterad.',
  methodologyTitle: 'Så sammanställer jag indexet',
  methodologyParagraphs: [
    'Jag tar bara med siffror som står i officiella, offentliga platsannonser eller på plattformarnas officiella FAQ-sidor. Varje rad i den här utgåvan kontrollerade jag för hand den 2026-11-05, och varje rad länkar till exakt den källsida den kommer från.',
    'Jag använder inga självrapporterade siffror: inga foruminlägg, inga skärmdumpar, inga anonyma påståenden. Om en plattform inte publicerar ett numeriskt timspann på en offentlig sida markerar jag raden som TBD i stället för att gissa.',
    'Alla siffror är bruttotimpriser för uppdragstagare i amerikanska dollar, före skatt, sociala avgifter och betalningsavgifter. Hela datamängden finns som CSV under licensen Creative Commons Erkännande 4.0 (CC BY 4.0), och jag uppdaterar indexet varje månad den 5:e.',
  ],
  downloadCsvLabel: 'Ladda ner hela datamängden (CSV, CC BY 4.0)',
  changelogTitle: 'Ändringslogg',
  tableHeaders: ['Område', 'Plattform', 'Roll', 'Annonserat spann (USD/h)', 'Källa', 'Kontrollerad'],
  sections: [
    {
      h2: 'Vilka områden betalar mest för AI-träningsarbete?',
      paragraphs: [
        'I utgåvan 2026-11 finns det högsta annonserade taket inom medicin: Mercor anger 60–180 USD/h för rollen Medical Expert. Juridiken ligger nära, där Mercor annonserar 100–150 USD/h för legitimerade jurister och 60–150 USD/h för den bredare rollen Legal Expert, medan Mindrift anger 60–100+ USD/h för juridiska experter.',
        'Mjukvaruutveckling når upp till ungefär 150 USD/h (Mercor 70–150 USD/h, Handshake AI upp till 150 USD/h). Kontors- och produktivitetsarbete annonseras till 60–70 USD/h, språkroller till ungefär 25–50 USD/h, och generalistuppgifter börjar på 15–30 USD/h hos Mindrift. Flera plattformar, bland annat micro1 och Outlier, publicerar inget numeriskt spann offentligt, så de raderna står som TBD.',
      ],
    },
    {
      h2: 'Får man betalt per timme eller per uppgift?',
      paragraphs: [
        'Det beror på plattformen. Mercor och Handshake AI annonserar timpriser, och Mercor betalar ut varje vecka via Stripe. Mindrift betalar per slutförd uppgift varannan vecka, så deras timsiffror är en uppskattning av vad en uppgift är värd i normalt tempo.',
        'Outlier visar ersättningen före varje projekt och betalar varje vecka, medan Alignerr och micro1 sätter ersättningen per projekt. Vid betalning per uppgift beror din faktiska timlön på ditt tempo och på hur många uppgifter som godkänns i granskningen, så jag jämför alltid ersättningsmodellen tillsammans med spannet.',
      ],
    },
    {
      h2: 'Hur förhåller sig ett brutto-USD-pris till nettoinkomst i Europa?',
      paragraphs: [
        'Varje siffra i indexet är ett bruttopris i amerikanska dollar. Som uppdragstagare i Sverige eller någon annanstans i Europa ska du fortfarande betala inkomstskatt och sociala avgifter (i Sverige egenavgifter), eventuell moms, valutaväxling och avgifter till betaltjänsten.',
        'Din nettoinkomst blir därför märkbart lägre än det annonserade spannet, och skillnaden beror på land, företagsform och din totala årsinkomst. Jag publicerar inga nettouppskattningar; kontrollera din egen situation hos Skatteverket eller med en redovisningskonsult.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Var kommer siffrorna i indexet ifrån?',
      answer:
        'Enbart från officiella, offentliga platsannonser och plattformarnas officiella FAQ-sidor, kontrollerade den 2026-11-05. Varje rad länkar till sin källa, och jag tar aldrig med självrapporterade eller anonyma siffror.',
    },
    {
      question: 'Varför står det TBD på vissa rader?',
      answer:
        'TBD betyder att plattformen inte publicerar ett numeriskt timspann på en offentlig sida som jag kunnat kontrollera. Jag lämnar hellre en lucka än gissar en siffra.',
    },
    {
      question: 'Är jag garanterad det annonserade timpriset?',
      answer:
        'Nej. Det här är annonserade spann, inte löften. Tillgången på projekt, testresultat och arbetsvolym varierar, och arbete är aldrig garanterat på någon plattform.',
    },
    {
      question: 'Får jag använda datan i en artikel eller forskning?',
      answer:
        'Ja. CSV-filen är publicerad under CC BY 4.0, så du får använda den fritt så länge du anger "Edithsi AI Work Pay Index" som källa och länkar till den här sidan.',
    },
  ],
};

const SURVEY_SV_STATUS = 'TBD — den anonyma insamlingen pågår fortfarande (kontrollerat 2026-11-05)';

const SURVEY_SV: SurveyPageContent = {
  lang: 'sv',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'AI-träningsarbete i Finland och Europa: enkät 2026, metod',
  metaDescription:
    'Metod och rapportmall för min anonyma enkät om AI-träningsarbete i Finland och Europa. Inga statistiska uppgifter publiceras före verifierad datainsamling.',
  h1: 'Hur ser AI-träningsarbetet egentligen ut i Finland och Europa? (Enkät och metod 2026)',
  directAnswer:
    'Den här sidan beskriver metoden och fungerar som rapportmall för min anonyma enkät om AI-träningsarbete i Finland och Europa. Jag publicerar ingen statistik här förrän datainsamlingen är klar och verifierad.',
  methodologySections: [
    {
      h2: 'Vad ska enkäten mäta?',
      paragraphs: [
        'Enkäten fokuserar på sådant som platsannonserna inte visar: hur länge man väntar i en pool innan första projektet, hur den faktiska timersättningen står sig mot det annonserade spannet, hur kunskapstesterna går och vilka skatte- och socialförsäkringslösningar folk använder, till exempel toiminimi och YEL i Finland eller enskild firma i Sverige.',
        'Jag redovisar resultaten bara sammanställda och först när det finns tillräckligt många verifierade svar för att en siffra ska vara meningsfull.',
      ],
    },
    {
      h2: 'Hur skyddas integriteten?',
      paragraphs: [
        'Enkäten är utformad helt utan personuppgifter: jag frågar inte efter namn, e-postadress, arbetsgivare eller något annat som kan identifiera den som svarar.',
        'Inga personuppgifter lagras på Edithsi. Svaren samlas in anonymt, och fritextsvar granskas innan de sammanställs så att inga identifierande detaljer kan hamna i en publicerad rapport.',
      ],
    },
    {
      h2: 'Vad kan journalister hänvisa till under tiden?',
      paragraphs: [
        'Tills enkätresultaten är publicerade ber jag dig hänvisa till Edithsi AI Work Pay Index. Det bygger enbart på officiella, offentliga annonser, varje rad länkar till sin källa och CSV-filen är licensierad under CC BY 4.0.',
        'Citera inte den här sidan som källa till enkätstatistik, eftersom ingen sådan har publicerats ännu.',
      ],
    },
  ],
  plannedMetricsTable: [
    { metric: 'Väntetid i pool före första projektet', scope: 'Finland och Europa, alla områden', status: SURVEY_SV_STATUS },
    { metric: 'Faktisk timersättning jämfört med annonserat spann', scope: 'Per plattform och område', status: SURVEY_SV_STATUS },
    { metric: 'Godkända och underkända kunskapstester', scope: 'Per plattform', status: SURVEY_SV_STATUS },
    { metric: 'Skatte- och socialförsäkringslösning (t.ex. toiminimi, YEL)', scope: 'Finland och andra EU-länder', status: SURVEY_SV_STATUS },
    { metric: 'Faktiskt tillgängliga timmar per vecka', scope: 'Per plattform och område', status: SURVEY_SV_STATUS },
    { metric: 'Betalningssätt och kostnader för valutaväxling', scope: 'Finland och Europa', status: SURVEY_SV_STATUS },
  ],
  faqs: [
    {
      question: 'Finns det några enkätresultat ännu?',
      answer:
        'Inte än. Jag publicerar siffror först när den anonyma datainsamlingen är klar och verifierad, så alla mått står för närvarande som TBD.',
    },
    {
      question: 'Sparar du mina personuppgifter?',
      answer:
        'Nej. Enkäten frågar inte efter några personuppgifter, och inga personuppgifter lagras på Edithsi.',
    },
    {
      question: 'Vem står bakom enkäten?',
      answer:
        'Jag genomför den självständigt som upphovsperson till Edithsi. Den är varken beställd eller finansierad av någon av de plattformar som tas upp.',
    },
    {
      question: 'Vad ska jag hänvisa till innan resultaten finns?',
      answer:
        'Hänvisa till Edithsi AI Work Pay Index, som enbart bygger på officiella, offentliga annonser kontrollerade den 2026-11-05 och finns som CSV under CC BY 4.0.',
    },
  ],
};

const GLOSSARY_SV: GlossaryPageContent = {
  lang: 'sv',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Ordlista för AI-träning: RLHF, evals, rubriker | Edithsi',
  metaDescription:
    'Enkla förklaringar av 12 begrepp inom AI-träning: RLHF, evals, rubriker, pooler, SFT, red teaming, referenssvar med mera – med exempel på roller.',
  h1: 'Vad betyder RLHF, evals, rubriker och pooler inom AI-träning?',
  directAnswer:
    'RLHF, evals och rubriker beskriver hur mänskliga experter bedömer och förbättrar AI-modellers svar, medan en pool är en grupp granskade uppdragstagare som väntar på att matchas mot projekt. Nedan förklarar jag 12 vanliga begrepp med en mening var, plus detaljer och ett exempel på vem som gör arbetet.',
  terms: buildTerms({
    rlhf: {
      term: 'RLHF (förstärkningsinlärning från mänsklig återkoppling)',
      firstSentenceDefinition:
        'RLHF är en träningsmetod där mänskliga granskare rangordnar eller betygsätter en AI-modells svar så att modellen lär sig föredra de svar som människor bedömer som bättre.',
      details:
        'I praktiken jämför du två eller fler svar på samma prompt och väljer eller poängsätter det bästa. Preferenserna används för att träna en belöningsmodell som styr AI:n. Många AI-träningsprojekt är i grunden RLHF-arbete.',
      exampleRole: 'En generalistskribent eller ämnesexpert som jämför modellsvar sida vid sida.',
    },
    rubric: {
      term: 'Rubrik (bedömningsmall)',
      firstSentenceDefinition:
        'En rubrik är en skriftlig uppsättning kriterier som exakt anger hur ett AI-svar ska poängsättas.',
      details:
        'Rubriker listar oftast nödvändiga fakta, resonemangssteg, ton och formateringsregler, var och en med sin egen vikt. Experter bedömer antingen svar mot en befintlig rubrik eller skriver nya rubriker för sitt område. Att följa rubriken noga är oftast det granskarna kontrollerar först.',
      exampleRole: 'En jurist som skriver bedömningskriterier för svar om avtalsanalys.',
    },
    evals: {
      term: 'Evals (utvärderingar)',
      firstSentenceDefinition:
        'Evals är strukturerade tester som mäter hur väl en AI-modell klarar en definierad uppsättning uppgifter.',
      details:
        'En eval kombinerar promptar, referenssvar och en bedömningsmetod, ofta en rubrik. Ämnesexperter bygger evals så att modellkvaliteten kan jämföras över tid. Plattformar som Mercor annonserar eval-arbete inom medicin, juridik, finans och mjukvara.',
      exampleRole: 'En läkare som utformar testfall för kliniskt resonerande.',
    },
    'ai-trainer': {
      term: 'AI-tränare',
      firstSentenceDefinition:
        'En AI-tränare är en person som skapar, granskar eller bedömer data som används för att förbättra en AI-modell.',
      details:
        'Titeln täcker många olika uppgifter, från att skriva promptar och idealsvar till att rangordna svar och faktagranska. De flesta AI-tränare arbetar på distans som uppdragstagare. Expertroller kräver dokumenterad kunskap inom ett visst område.',
      exampleRole: 'En mjukvaruutvecklare som granskar AI-genererad kod.',
    },
    'standing-pool': {
      term: 'Pool (standing pool)',
      firstSentenceDefinition:
        'En pool är en grupp uppdragstagare som har klarat urvalet och väntar på att matchas mot projekt när de öppnar.',
      details:
        'Att komma med i en pool betyder inte att du får arbete direkt; matchningen beror på efterfrågan och din profil. Väntetiderna varierar mycket och publiceras inte av plattformarna. Det är ett av skälen till att arbete aldrig är garanterat.',
      exampleRole: 'En svenskspråkig expert som antagits till en språkpool och väntar på ett projekt.',
    },
    'referral-cap': {
      term: 'Tak för värvning (referral cap)',
      firstSentenceDefinition:
        'Ett tak för värvning är en gräns som plattformen sätter för hur många personer en person kan värva, eller för hur stor värvningsersättning man kan få.',
      details:
        'Tak och villkor skiljer sig mellan plattformar och kan ändras utan förvarning. En värvningslänk påverkar inte hur en kandidat bedöms. Jag anger alltid tydligt när en länk på Edithsi är en värvningslänk.',
      exampleRole: 'En befintlig uppdragstagare som delar plattformens värvningslänk.',
    },
    sft: {
      term: 'SFT (övervakad finjustering)',
      firstSentenceDefinition:
        'SFT är ett träningssteg där en AI-modell lär sig av exempel på promptar parade med högkvalitativa svar skrivna av människor.',
      details:
        'Till skillnad från RLHF jämför SFT inte svar; modellen får se hur ett bra svar ser ut. Experter skriver eller redigerar dessa modellsvar inom sitt eget område. Korrekthet och tydliga resonemang väger tyngre än tempo.',
      exampleRole: 'En ekonom som skriver steg-för-steg-svar på redovisningsfrågor.',
    },
    'red-teaming': {
      term: 'Red teaming',
      firstSentenceDefinition:
        'Red teaming innebär att medvetet försöka få en AI-modell att fallera, bryta mot sina regler eller ge skadliga svar så att svagheterna kan åtgärdas.',
      details:
        'Red teamers skriver kluriga, utmanande promptar och dokumenterar vad som går fel. Arbetet kräver kreativitet och noggrann rapportering. Vissa projekt fokuserar på specifika risker som medicinsk desinformation eller säkerhet.',
      exampleRole: 'En säkerhetsingenjör som testar om en modell föreslår osäker kod.',
    },
    'golden-response': {
      term: 'Referenssvar (golden response)',
      firstSentenceDefinition:
        'Ett referenssvar är ett svar skrivet eller godkänt av en expert som representerar det ideala svaret på en viss prompt.',
      details:
        'Referenssvar används både för att träna modeller och för att poängsätta andra svar. De måste vara korrekta, fullständiga och följa projektets riktlinjer exakt. Att skriva dem hör ofta till de mest krävande expertuppgifterna.',
      exampleRole: 'En farmaceut som skriver idealsvaret på en fråga om läkemedelsinteraktioner.',
    },
    'calibration-task': {
      term: 'Kalibreringsuppgift',
      firstSentenceDefinition:
        'En kalibreringsuppgift är en exempeluppgift med känt rätt svar som kontrollerar om en uppdragstagare tillämpar riktlinjerna konsekvent.',
      details:
        'Kalibreringsuppgifter kan dyka upp under introduktionen eller blandas in i det vanliga arbetet. Resultaten kan påverka om du får fortsätta i ett projekt. Att läsa riktlinjerna noga är den bästa förberedelsen.',
      exampleRole: 'En ny uppdragstagare som gör övningsbedömningar innan ett projekt startar.',
    },
    'independent-contractor': {
      term: 'Uppdragstagare (egenföretagare)',
      firstSentenceDefinition:
        'En uppdragstagare är en egenföretagare som utför tjänster åt en kund utan att vara anställd där.',
      details:
        'AI-träningsplattformar anlitar nästan alltid folk som uppdragstagare, vilket innebär inga arbetsgivaravgifter, ingen semesterersättning och inga garanterade timmar. I Sverige innebär det oftast att du själv sköter skatt och egenavgifter via exempelvis enskild firma och F-skatt hos Skatteverket. Reglerna skiljer sig mellan länder.',
      exampleRole: 'En AI-tränare som arbetar via Mercor, Mindrift eller en liknande plattform.',
    },
    'posted-rate-range': {
      term: 'Annonserat timspann',
      firstSentenceDefinition:
        'Ett annonserat timspann är det timlönespann som en plattform publicerar i en officiell platsannons eller på en FAQ-sida.',
      details:
        'Det visar vad plattformen säger att den kan betala, inte vad en enskild person kommer att tjäna. Siffrorna är brutto och oftast i amerikanska dollar. Edithsi Pay Index tar bara med annonserade spann och markerar saknade som TBD.',
      exampleRole: 'Den som jämför annonser, till exempel en jurist som väger en juristroll på 60–150 USD/h.',
    },
  }),
  faqs: [
    {
      question: 'Vad är skillnaden mellan RLHF och SFT?',
      answer:
        'SFT lär en modell med hjälp av exempelsvar skrivna av människor, medan RLHF lär den genom att människor jämför och rangordnar modellens egna svar. Många projekt använder båda.',
    },
    {
      question: 'Behöver jag teknisk bakgrund för att förstå begreppen?',
      answer:
        'Nej. Det mesta expertarbetet inom AI-träning bygger på din ämneskunskap, till exempel medicin, juridik eller ett språk, och plattformarna går igenom verktyg och riktlinjer under introduktionen.',
    },
    {
      question: 'Betyder en plats i poolen att jag får arbete?',
      answer:
        'Nej. En plats i poolen betyder bara att du klarat urvalet; projekt matchas efter efterfrågan, och arbete är aldrig garanterat.',
    },
    {
      question: 'Varför använder indexet annonserade timspann?',
      answer:
        'Eftersom de går att kontrollera mot officiella källor. Jag använder inga självrapporterade löner, så varje siffra kan kontrolleras mot den länkade annonsen.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* DE — NEEDS NATIVE REVIEW                                            */
/* ------------------------------------------------------------------ */

const PAY_DE: PayIndexPageContent = {
  lang: 'de',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Verdienst als KI-Trainer 2026: Stundensätze auf 6 Plattformen',
  metaDescription:
    'Ausgeschriebene Stundensätze für KI-Training bei Mercor, micro1, Outlier, Alignerr, Handshake AI und Mindrift: 15–180 USD/h, geprüft am 05.11.2026. CSV gratis.',
  h1: 'Wie viel verdienen KI-Trainer 2026? Der Edithsi AI Work Pay Index',
  directAnswer:
    'Stand 05.11.2026 liegen die ausgeschriebenen Stundensätze für freie Auftragnehmer auf 6 Plattformen zwischen 15 und 180 USD/h: Medizin bis 180 USD/h, Recht 60–150 USD/h, Softwareentwicklung bis 150 USD/h und Sprachaufgaben etwa 25–50 USD/h. Das sind Brutto-Spannen aus offiziellen Ausschreibungen, und ein bestimmtes Arbeitsvolumen ist nie garantiert.',
  methodologyTitle: 'So erstelle ich den Pay Index',
  methodologyParagraphs: [
    'Ich erfasse nur Zahlen, die in offiziellen öffentlichen Stellenausschreibungen oder auf offiziellen FAQ-Seiten der Plattformen stehen. Jede Zeile dieser Ausgabe habe ich am 05.11.2026 von Hand geprüft, und jede Zeile verlinkt auf die genaue Quellseite.',
    'Ich verwende keinerlei selbst gemeldete Zahlen: keine Forenbeiträge, keine Screenshots, keine anonymen Angaben. Wenn eine Plattform keine konkrete Stundenspanne auf einer öffentlichen Seite nennt, kennzeichne ich die Zeile mit TBD, statt zu schätzen.',
    'Alle Angaben sind Brutto-Stundensätze für freie Auftragnehmer in US-Dollar, vor Steuern, Sozialabgaben und Zahlungsgebühren. Der vollständige Datensatz steht als CSV unter der Lizenz Creative Commons Namensnennung 4.0 (CC BY 4.0) bereit, und ich aktualisiere den Index monatlich am 5.',
  ],
  downloadCsvLabel: 'Vollständigen Datensatz herunterladen (CSV, CC BY 4.0)',
  changelogTitle: 'Änderungsprotokoll',
  tableHeaders: ['Fachgebiet', 'Plattform', 'Rolle', 'Ausgeschriebene Spanne (USD/h)', 'Quelle', 'Geprüft'],
  sections: [
    {
      h2: 'Welche Fachgebiete zahlen am meisten für KI-Training?',
      paragraphs: [
        'In der Ausgabe 2026-11 liegt die höchste ausgeschriebene Obergrenze in der Medizin: Mercor nennt für die Rolle Medical Expert 60–180 USD/h. Recht folgt dicht dahinter: Mercor schreibt für zugelassene Anwältinnen und Anwälte 100–150 USD/h und für die allgemeine Rolle Legal Expert 60–150 USD/h aus, Mindrift nennt für Rechtsexperten 60–100+ USD/h.',
        'Softwareentwicklung reicht bis etwa 150 USD/h (Mercor 70–150 USD/h, Handshake AI bis 150 USD/h). Büro- und Produktivitätsaufgaben werden mit 60–70 USD/h ausgeschrieben, Sprachrollen mit etwa 25–50 USD/h, und allgemeine Aufgaben beginnen bei Mindrift ab 15–30 USD/h. Mehrere Plattformen, darunter micro1 und Outlier, veröffentlichen keine konkrete Spanne, daher stehen diese Zeilen auf TBD.',
      ],
    },
    {
      h2: 'Wird KI-Training pro Stunde oder pro Aufgabe bezahlt?',
      paragraphs: [
        'Das hängt von der Plattform ab. Mercor und Handshake AI nennen Stundensätze, und Mercor zahlt wöchentlich über Stripe aus. Mindrift vergütet pro abgeschlossener Aufgabe alle zwei Wochen; die Stundenangaben sind dort also eine Schätzung, was eine Aufgabe bei üblichem Arbeitstempo wert ist.',
        'Outlier zeigt die Vergütung vor jedem Projekt an und zahlt wöchentlich, während Alignerr und micro1 die Sätze pro Projekt festlegen. Bei Bezahlung pro Aufgabe hängt der tatsächliche Stundenlohn von deinem Tempo und davon ab, wie viele Aufgaben die Prüfung bestehen. Deshalb vergleiche ich das Vergütungsmodell immer zusammen mit der Spanne.',
      ],
    },
    {
      h2: 'Was bleibt vom Brutto-Dollarsatz in Europa netto übrig?',
      paragraphs: [
        'Jede Zahl im Index ist ein Bruttosatz in US-Dollar. Als freie Auftragnehmerin oder freier Auftragnehmer in Deutschland oder anderswo in Europa zahlst du davon noch Einkommensteuer, Sozialabgaben wie Kranken- und gegebenenfalls Rentenversicherung, eventuell Umsatzsteuer sowie Kosten für Währungsumrechnung und Zahlungsdienstleister.',
        'Dein Nettoeinkommen liegt daher spürbar unter der ausgeschriebenen Spanne, und die Differenz hängt von Land, Rechtsform und Jahreseinkommen ab. Ich veröffentliche keine Netto-Schätzungen; bitte kläre deine persönliche Situation mit dem Finanzamt oder einer Steuerberatung.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Woher stammen die Zahlen im Pay Index?',
      answer:
        'Ausschließlich aus offiziellen öffentlichen Stellenausschreibungen und offiziellen FAQ-Seiten der Plattformen, geprüft am 05.11.2026. Jede Zeile verlinkt auf ihre Quelle, und ich nehme nie selbst gemeldete oder anonyme Angaben auf.',
    },
    {
      question: 'Warum steht in manchen Zeilen TBD?',
      answer:
        'TBD bedeutet, dass die Plattform auf keiner öffentlichen, von mir überprüfbaren Seite eine konkrete Stundenspanne nennt. Lieber lasse ich eine Lücke, als eine Zahl zu raten.',
    },
    {
      question: 'Verdiene ich garantiert den ausgeschriebenen Satz?',
      answer:
        'Nein. Das sind ausgeschriebene Spannen, keine Zusagen. Verfügbarkeit von Projekten, Testergebnisse und Arbeitsvolumen schwanken, und auf keiner Plattform ist Arbeit garantiert.',
    },
    {
      question: 'Darf ich die Daten in einem Artikel oder für Forschung nutzen?',
      answer:
        'Ja. Die CSV steht unter CC BY 4.0, du darfst sie also frei verwenden, solange du „Edithsi AI Work Pay Index“ als Quelle nennst und auf diese Seite verlinkst.',
    },
  ],
};

const SURVEY_DE_STATUS = 'TBD — anonyme Erhebung noch nicht abgeschlossen (geprüft am 05.11.2026)';

const SURVEY_DE: SurveyPageContent = {
  lang: 'de',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'KI-Training in Finnland & Europa: Umfrage 2026 und Methodik',
  metaDescription:
    'Methodik und Berichtsvorlage meiner anonymen Umfrage zu KI-Trainingsarbeit in Finnland und Europa. Statistiken erscheinen erst nach geprüfter Datenerhebung.',
  h1: 'Wie sieht KI-Trainingsarbeit in Finnland und Europa wirklich aus? (Umfrage & Methodik 2026)',
  directAnswer:
    'Diese Seite beschreibt die Methodik und dient als Berichtsvorlage für meine anonyme Umfrage zu KI-Trainingsarbeit in Finnland und Europa. Ich veröffentliche hier keine Statistiken, bevor die Datenerhebung abgeschlossen und geprüft ist.',
  methodologySections: [
    {
      h2: 'Was soll die Umfrage messen?',
      paragraphs: [
        'Die Umfrage konzentriert sich auf das, was Stellenausschreibungen nicht zeigen: wie lange man in einem Pool auf das erste Projekt wartet, wie der tatsächliche Stundenverdienst im Vergleich zur ausgeschriebenen Spanne aussieht, wie Eignungstests ausgehen und welche steuerlichen und sozialversicherungsrechtlichen Modelle genutzt werden, etwa toiminimi und YEL in Finnland oder die freiberufliche Tätigkeit in Deutschland.',
        'Ergebnisse berichte ich nur in aggregierter Form und erst, wenn genügend geprüfte Antworten vorliegen, damit eine Zahl aussagekräftig ist.',
      ],
    },
    {
      h2: 'Wie wird der Datenschutz gewährleistet?',
      paragraphs: [
        'Die Umfrage erhebt keinerlei personenbezogene Daten: Ich frage weder nach Namen noch nach E-Mail-Adresse, Auftraggeber oder anderen Angaben, über die jemand identifiziert werden könnte.',
        'Auf Edithsi werden keine personenbezogenen Daten gespeichert. Die Antworten werden anonym erfasst, und Freitextfelder prüfe ich vor jeder Auswertung, damit keine identifizierenden Details in einen veröffentlichten Bericht gelangen.',
      ],
    },
    {
      h2: 'Was können Journalistinnen und Journalisten bis dahin zitieren?',
      paragraphs: [
        'Bis die Umfrageergebnisse veröffentlicht sind, zitiere bitte den Edithsi AI Work Pay Index. Er basiert ausschließlich auf offiziellen öffentlichen Ausschreibungen, jede Zeile verlinkt auf ihre Quelle, und die CSV steht unter CC BY 4.0.',
        'Bitte zitiere diese Seite nicht als Quelle für Umfragestatistiken, denn bisher wurden keine veröffentlicht.',
      ],
    },
  ],
  plannedMetricsTable: [
    { metric: 'Wartezeit im Pool bis zum ersten Projekt', scope: 'Finnland & Europa, alle Fachgebiete', status: SURVEY_DE_STATUS },
    { metric: 'Tatsächlicher Stundenverdienst vs. ausgeschriebene Spanne', scope: 'Nach Plattform und Fachgebiet', status: SURVEY_DE_STATUS },
    { metric: 'Bestandene und nicht bestandene Eignungstests', scope: 'Nach Plattform', status: SURVEY_DE_STATUS },
    { metric: 'Steuer- und Sozialversicherungsmodell (z. B. toiminimi, YEL)', scope: 'Finnland und andere EU-Länder', status: SURVEY_DE_STATUS },
    { metric: 'Tatsächlich verfügbare Wochenstunden', scope: 'Nach Plattform und Fachgebiet', status: SURVEY_DE_STATUS },
    { metric: 'Zahlungsweg und Kosten der Währungsumrechnung', scope: 'Finnland & Europa', status: SURVEY_DE_STATUS },
  ],
  faqs: [
    {
      question: 'Gibt es schon Umfrageergebnisse?',
      answer:
        'Noch nicht. Ich veröffentliche Zahlen erst, wenn die anonyme Datenerhebung abgeschlossen und geprüft ist, deshalb stehen alle Kennzahlen derzeit auf TBD.',
    },
    {
      question: 'Speicherst du meine personenbezogenen Daten?',
      answer:
        'Nein. Die Umfrage fragt keine personenbezogenen Daten ab, und auf Edithsi werden keine personenbezogenen Daten gespeichert.',
    },
    {
      question: 'Wer führt die Umfrage durch?',
      answer:
        'Ich führe sie unabhängig als Autor von Edithsi durch. Sie wird von keiner der behandelten Plattformen beauftragt oder finanziert.',
    },
    {
      question: 'Was soll ich zitieren, solange es keine Ergebnisse gibt?',
      answer:
        'Bitte zitiere den Edithsi AI Work Pay Index, der ausschließlich auf offiziellen öffentlichen Ausschreibungen basiert, die am 05.11.2026 geprüft wurden, und als CSV unter CC BY 4.0 verfügbar ist.',
    },
  ],
};

const GLOSSARY_DE: GlossaryPageContent = {
  lang: 'de',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Glossar KI-Training: RLHF, Evals, Rubrics & mehr | Edithsi',
  metaDescription:
    'Verständliche Definitionen von 12 Begriffen aus dem KI-Training: RLHF, Evals, Rubrics, Pools, SFT, Red Teaming, Golden Responses und mehr – mit Beispielrollen.',
  h1: 'Was bedeuten RLHF, Evals, Rubrics und Pools im KI-Training?',
  directAnswer:
    'RLHF, Evals und Rubrics beschreiben, wie menschliche Fachleute die Antworten von KI-Modellen bewerten und verbessern, während ein Pool eine Gruppe geprüfter Auftragnehmer ist, die auf die Zuteilung zu Projekten warten. Unten erkläre ich 12 gängige Begriffe in jeweils einem Satz, mit Details und einem Beispiel, wer diese Arbeit macht.',
  terms: buildTerms({
    rlhf: {
      term: 'RLHF (Reinforcement Learning from Human Feedback)',
      firstSentenceDefinition:
        'RLHF ist ein Trainingsverfahren, bei dem Menschen die Antworten eines KI-Modells in eine Rangfolge bringen oder bewerten, damit das Modell lernt, die als besser beurteilten Antworten zu bevorzugen.',
      details:
        'In der Praxis vergleichst du zwei oder mehr Antworten auf denselben Prompt und wählst oder bewertest die beste. Diese Präferenzen trainieren ein Belohnungsmodell, das die KI steuert. Viele KI-Trainingsprojekte sind im Kern RLHF-Arbeit.',
      exampleRole: 'Eine Generalistin beim Texten oder ein Fachexperte, der Modellantworten nebeneinander vergleicht.',
    },
    rubric: {
      term: 'Rubric (Bewertungsraster)',
      firstSentenceDefinition:
        'Eine Rubric ist ein schriftlicher Kriterienkatalog, der genau festlegt, wie eine KI-Antwort zu bewerten ist.',
      details:
        'Rubrics listen meist erforderliche Fakten, Argumentationsschritte, Ton und Formatvorgaben auf, jeweils mit eigener Gewichtung. Fachleute bewerten Antworten entweder anhand einer bestehenden Rubric oder erstellen neue Rubrics für ihr Fachgebiet. Ob die Rubric genau eingehalten wurde, prüfen Reviewer meist zuerst.',
      exampleRole: 'Eine Juristin, die Bewertungskriterien für Antworten zur Vertragsanalyse schreibt.',
    },
    evals: {
      term: 'Evals (Evaluierungen)',
      firstSentenceDefinition:
        'Evals sind strukturierte Tests, die messen, wie gut ein KI-Modell eine festgelegte Reihe von Aufgaben löst.',
      details:
        'Eine Eval kombiniert Prompts, Referenzantworten und eine Bewertungsmethode, oft eine Rubric. Fachleute bauen Evals, damit sich die Modellqualität über die Zeit vergleichen lässt. Plattformen wie Mercor schreiben Eval-Arbeit in Medizin, Recht, Finanzen und Software aus.',
      exampleRole: 'Eine Ärztin, die Testfälle für klinisches Denken entwirft.',
    },
    'ai-trainer': {
      term: 'KI-Trainer',
      firstSentenceDefinition:
        'Ein KI-Trainer ist eine Person, die Daten erstellt, prüft oder bewertet, mit denen ein KI-Modell verbessert wird.',
      details:
        'Der Begriff umfasst sehr unterschiedliche Aufgaben, vom Schreiben von Prompts und Musterantworten bis zum Ranking von Ausgaben und Faktencheck. Die meisten KI-Trainer arbeiten remote als freie Auftragnehmer. Expertenrollen setzen nachweisbares Fachwissen in einem bestimmten Gebiet voraus.',
      exampleRole: 'Ein Softwareentwickler, der KI-generierten Code auf Korrektheit prüft.',
    },
    'standing-pool': {
      term: 'Pool (Standing Pool)',
      firstSentenceDefinition:
        'Ein Pool ist eine Gruppe von Auftragnehmern, die das Auswahlverfahren bestanden haben und darauf warten, neuen Projekten zugeteilt zu werden.',
      details:
        'Die Aufnahme in einen Pool bedeutet nicht, dass sofort Arbeit kommt; die Zuteilung hängt von der Nachfrage und deinem Profil ab. Die Wartezeiten schwanken stark und werden von den Plattformen nicht veröffentlicht. Auch deshalb ist Arbeit nie garantiert.',
      exampleRole: 'Eine deutschsprachige Expertin, die in einen Sprachpool aufgenommen wurde und auf ein Projekt wartet.',
    },
    'referral-cap': {
      term: 'Empfehlungslimit (Referral Cap)',
      firstSentenceDefinition:
        'Ein Empfehlungslimit ist eine von der Plattform gesetzte Grenze dafür, wie viele Personen jemand werben oder wie viel Empfehlungsprämie jemand erhalten kann.',
      details:
        'Limits und Bedingungen unterscheiden sich je nach Plattform und können sich ohne Ankündigung ändern. Ein Empfehlungslink beeinflusst nicht, wie eine Bewerbung bewertet wird. Ich kennzeichne immer deutlich, wenn ein Link auf Edithsi ein Empfehlungslink ist.',
      exampleRole: 'Jede bestehende Auftragnehmerin, die einen Empfehlungslink der Plattform teilt.',
    },
    sft: {
      term: 'SFT (Supervised Fine-Tuning)',
      firstSentenceDefinition:
        'SFT ist ein Trainingsschritt, bei dem ein KI-Modell aus Beispielen lernt, in denen Prompts mit hochwertigen, von Menschen geschriebenen Antworten gepaart sind.',
      details:
        'Anders als bei RLHF werden bei SFT keine Antworten verglichen; das Modell sieht, wie eine gute Antwort aussieht. Fachleute schreiben oder überarbeiten diese Musterantworten in ihrem Gebiet. Genauigkeit und nachvollziehbare Argumentation zählen mehr als Tempo.',
      exampleRole: 'Ein Finanzprofi, der Schritt-für-Schritt-Antworten auf Buchhaltungsfragen schreibt.',
    },
    'red-teaming': {
      term: 'Red Teaming',
      firstSentenceDefinition:
        'Red Teaming bedeutet, ein KI-Modell gezielt zum Scheitern zu bringen, es seine Regeln brechen oder schädliche Ausgaben erzeugen zu lassen, damit die Schwachstellen behoben werden können.',
      details:
        'Red Teamer schreiben knifflige, gezielt provozierende Prompts und dokumentieren, was schiefgeht. Die Arbeit verlangt Kreativität und sorgfältige Berichte. Manche Projekte konzentrieren sich auf bestimmte Risiken wie medizinische Fehlinformation oder IT-Sicherheit.',
      exampleRole: 'Ein Security-Engineer, der ein Modell auf unsichere Codevorschläge testet.',
    },
    'golden-response': {
      term: 'Golden Response (Referenzantwort)',
      firstSentenceDefinition:
        'Eine Golden Response ist eine von Fachleuten geschriebene oder freigegebene Referenzantwort, die die ideale Ausgabe für einen bestimmten Prompt darstellt.',
      details:
        'Golden Responses dienen dazu, Modelle zu trainieren und andere Antworten zu bewerten. Sie müssen korrekt und vollständig sein und die Projektrichtlinien exakt einhalten. Sie zu schreiben gehört oft zu den anspruchsvollsten Expertenaufgaben.',
      exampleRole: 'Eine Apothekerin, die die ideale Antwort auf eine Frage zu Wechselwirkungen schreibt.',
    },
    'calibration-task': {
      term: 'Kalibrierungsaufgabe',
      firstSentenceDefinition:
        'Eine Kalibrierungsaufgabe ist eine Beispielaufgabe mit bekannter richtiger Lösung, die prüft, ob jemand die Richtlinien einheitlich anwendet.',
      details:
        'Kalibrierungsaufgaben können beim Onboarding auftauchen oder in die reguläre Arbeit eingestreut sein. Die Ergebnisse können darüber entscheiden, ob du in einem Projekt bleibst. Die beste Vorbereitung ist, die Richtlinien gründlich zu lesen.',
      exampleRole: 'Ein neuer Auftragnehmer, der vor Projektstart Übungsbewertungen erledigt.',
    },
    'independent-contractor': {
      term: 'Freier Auftragnehmer (Selbstständige)',
      firstSentenceDefinition:
        'Ein freier Auftragnehmer ist eine selbstständige Person, die Leistungen für einen Kunden erbringt, ohne dort angestellt zu sein.',
      details:
        'KI-Trainingsplattformen beauftragen fast immer Selbstständige, also ohne Arbeitgeberanteil zur Sozialversicherung, ohne bezahlten Urlaub und ohne garantierte Stunden. In Deutschland heißt das in der Regel, dass du die Tätigkeit beim Finanzamt anmeldest und Steuern sowie Versicherungen selbst regelst. Die Regeln unterscheiden sich von Land zu Land.',
      exampleRole: 'Jede KI-Trainerin, die über Mercor, Mindrift oder eine ähnliche Plattform arbeitet.',
    },
    'posted-rate-range': {
      term: 'Ausgeschriebene Stundenspanne',
      firstSentenceDefinition:
        'Eine ausgeschriebene Stundenspanne ist das Vergütungsband pro Stunde, das eine Plattform in einer offiziellen Ausschreibung oder auf einer FAQ-Seite veröffentlicht.',
      details:
        'Sie zeigt, was die Plattform nach eigener Aussage zahlen kann, nicht was eine einzelne Person verdienen wird. Die Angaben sind brutto und meist in US-Dollar. Der Edithsi Pay Index erfasst nur ausgeschriebene Spannen und kennzeichnet fehlende mit TBD.',
      exampleRole: 'Alle, die Ausschreibungen vergleichen, etwa ein Anwalt, der eine Rechtsrolle mit 60–150 USD/h abwägt.',
    },
  }),
  faqs: [
    {
      question: 'Was ist der Unterschied zwischen RLHF und SFT?',
      answer:
        'SFT trainiert ein Modell mit von Menschen geschriebenen Beispielantworten, RLHF dagegen, indem Menschen die eigenen Antworten des Modells vergleichen und in eine Rangfolge bringen. Viele Projekte nutzen beides.',
    },
    {
      question: 'Brauche ich einen technischen Hintergrund, um diese Begriffe zu verstehen?',
      answer:
        'Nein. Die meiste Expertenarbeit im KI-Training stützt sich auf dein Fachwissen, etwa in Medizin, Recht oder einer Sprache, und die Plattformen erklären Tools und Richtlinien beim Onboarding.',
    },
    {
      question: 'Bekomme ich Arbeit, wenn ich in einen Pool aufgenommen werde?',
      answer:
        'Nicht unbedingt. Die Aufnahme bedeutet nur, dass du das Auswahlverfahren bestanden hast; Projekte werden nach Bedarf zugeteilt, und Arbeit ist nie garantiert.',
    },
    {
      question: 'Warum nutzt der Pay Index ausgeschriebene Stundenspannen?',
      answer:
        'Weil sie sich anhand offizieller Quellen überprüfen lassen. Ich verwende keine selbst gemeldeten Verdienste, sodass jede Zahl mit der verlinkten Ausschreibung abgeglichen werden kann.',
    },
  ],
};

const PAY_FR: PayIndexPageContent = {
  lang: 'fr',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Rémunération entraîneur IA 2026 : tarifs sur 6 plateformes',
  metaDescription:
    'Tarifs horaires affichés pour l’entraînement d’IA chez Mercor, micro1, Outlier, Alignerr, Handshake AI et Mindrift : 15–180 USD/h, vérifié le 05.11.2026. CSV libre.',
  h1: 'Combien gagnent les entraîneurs d’IA en 2026 ? L’Edithsi AI Work Pay Index',
  directAnswer:
    'Au 05.11.2026, les tarifs horaires publiés pour les prestataires indépendants sur 6 plateformes vont de 15 à 180 USD/h : santé jusqu’à 180 USD/h, droit 60–150 USD/h, génie logiciel jusqu’à 150 USD/h et langues 25–50 USD/h. Il s’agit de fourchettes brutes issues d’annonces officielles, sans aucun volume d’heures garanti.',
  methodologyTitle: 'Méthodologie de l’indice de rémunération',
  methodologyParagraphs: [
    'Je ne collecte que les chiffres publiés sur les offres publiques officielles ou les FAQ officielles des plateformes. Chaque ligne de cette édition a été vérifiée manuellement le 05.11.2026 et pointe vers l’URL exacte de la source.',
    'Aucune donnée autodéclarée n’est utilisée : ni messages de forums, ni captures d’écran, ni témoignages anonymes. Si une plateforme n’affiche pas de fourchette horaire publique, j’indique explicitement TBD.',
    'Tous les montants sont en dollars américains bruts avant impôts, cotisations sociales et frais de change. Le jeu de données complet est téléchargeable en CSV sous licence Creative Commons Attribution 4.0 (CC BY 4.0), avec une mise à jour mensuelle le 5 de chaque mois.',
  ],
  downloadCsvLabel: 'Télécharger le jeu de données complet (CSV, CC BY 4.0)',
  changelogTitle: 'Historique des mises à jour',
  tableHeaders: ['Domaine', 'Plateforme', 'Rôle', 'Fourchette affichée (USD/h)', 'Source', 'Vérifié'],
  sections: [
    {
      h2: 'Quels domaines rémunèrent le plus dans l’entraînement d’IA ?',
      paragraphs: [
        'Dans l’édition 2026-11, le plafond le plus élevé concerne le secteur médical : Mercor affiche 60–180 USD/h pour le rôle Medical Expert. Le droit suit immédiatement avec 100–150 USD/h pour les juristes certifiés et 60–150 USD/h pour le rôle Legal Expert, tandis que Mindrift annonce 60–100+ USD/h pour ses experts juridiques.',
        'L’ingénierie logicielle s’étend jusqu’à 150 USD/h (Mercor 70–150 USD/h, Handshake AI jusqu’à 150 USD/h). Les missions bureautiques affichent 60–70 USD/h, les langues 25–50 USD/h et les rôles généralistes débutent à 15–30 USD/h chez Mindrift. Les plateformes sans fourchette publique sont marquées TBD.',
      ],
    },
    {
      h2: 'Est-on payé à l’heure ou à la tâche dans l’entraînement d’IA ?',
      paragraphs: [
        'Le modèle dépend de la plateforme. Mercor et Handshake AI fonctionnent au taux horaire (Mercor paie chaque semaine via Stripe). Mindrift rémunère à la tâche approuvée toutes les deux semaines ; les montants horaires y sont des estimations basées sur une cadence moyenne.',
        'Outlier affiche le tarif avant chaque projet et paie le mardi, tandis qu’Alignerr et micro1 définissent la rémunération selon les projets. Au forfait, le taux horaire effectif dépend de votre rapidité et du taux d’acceptation de vos tâches.',
      ],
    },
    {
      h2: 'Que reste-t-il en net des tarifs en dollars après impôts en France ?',
      paragraphs: [
        'Tous les tarifs sont des montants bruts en dollars. En tant que travailleur indépendant ou micro-entrepreneur en France, vous devez vous acquitter de vos cotisations sociales (URSSAF), de l’impôt sur le revenu (impots.gouv.fr) et des frais de conversion bancaire.',
        'Le montant net perçu est donc nettement inférieur au taux brut affiché. Rapprochez-vous de l’URSSAF ou d’un expert-comptable pour simuler votre situation.',
      ],
    },
  ],
  faqs: [
    {
      question: 'D’où proviennent les chiffres du Pay Index ?',
      answer:
        'Uniquement des annonces publiques officielles et des FAQ des plateformes, vérifiées manuellement au 05.11.2026 avec lien direct vers chaque source.',
    },
    {
      question: 'Pourquoi certaines lignes affichent-elles TBD ?',
      answer:
        'TBD signifie que la plateforme ne publie aucune fourchette horaire vérifiable sur ses pages publiques. Je préfère indiquer TBD plutôt qu’inventer un chiffre.',
    },
    {
      question: 'Suis-je assuré de gagner le tarif affiché ?',
      answer:
        'Non. Ce sont des fourchettes publiées, pas des garanties contractuelles. Les heures et les projets dépendent de la demande des clients.',
    },
    {
      question: 'Puis-je utiliser ces données dans un article ou une étude ?',
      answer:
        'Oui. Le fichier CSV est sous licence CC BY 4.0 : vous pouvez l’utiliser librement en citant « Edithsi AI Work Pay Index » et en créant un lien vers cette page.',
    },
  ],
};

const SURVEY_FR_STATUS = 'TBD — collecte anonyme en cours (vérifié au 05.11.2026)';

const SURVEY_FR: SurveyPageContent = {
  lang: 'fr',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Enquête 2026 : travail d’entraînement d’IA en Europe | Edithsi',
  metaDescription:
    'Méthodologie et modèle de rapport de mon enquête anonyme sur l’entraînement d’IA en France et en Europe. Statistiques publiées après validation des données.',
  h1: 'Quelle est la réalité du travail d’entraînement d’IA en Europe ? (Enquête & méthode 2026)',
  directAnswer:
    'Cette page présente la méthodologie et constitue la maquette de publication de mon enquête anonyme auprès des contributeurs IA en Europe. Aucune statistique n’est publiée avant la fin de la collecte vérifiée.',
  methodologySections: [
    {
      h2: 'Quels aspects l’enquête mesure-t-elle ?',
      paragraphs: [
        'L’enquête s’intéresse aux réalités que les offres d’emploi ne dévoilent pas : délais d’attente avant la première mission, rémunération horaire réelle constatée, taux de réussite aux évaluations et choix des statuts fiscaux (micro-entreprise, déclaration URSSAF, etc.).',
        'Les résultats ne seront présentés que sous forme agrégée une fois un volume suffisant de réponses vérifiées réuni.',
      ],
    },
    {
      h2: 'Comment la confidentialité est-elle assurée ?',
      paragraphs: [
        'L’enquête ne collecte aucune donnée personnelle nominative : ni nom, ni adresse e-mail, ni identifiant client.',
        'Aucune donnée personnelle n’est hébergée sur Edithsi. Les réponses sont anonymisées et les champs libres sont nettoyés avant publication.',
      ],
    },
    {
      h2: 'Que peuvent citer les journalistes en attendant ?',
      paragraphs: [
        'En attendant les conclusions de l’enquête, vous pouvez citer l’Edithsi AI Work Pay Index, basé exclusivement sur des annonces publiques officielles vérifiées au 05.11.2026 (CSV sous CC BY 4.0).',
        'Ne citez pas cette page comme source statistique d’enquête tant que les données finales n’ont pas été publiées.',
      ],
    },
  ],
  plannedMetricsTable: [
    { metric: 'Délai d’attente dans le vivier avant le premier projet', scope: 'France & Europe, tous domaines', status: SURVEY_FR_STATUS },
    { metric: 'Rémunération horaire réelle vs fourchette affichée', scope: 'Par plateforme et domaine', status: SURVEY_FR_STATUS },
    { metric: 'Taux de réussite aux tests de sélection', scope: 'Par plateforme', status: SURVEY_FR_STATUS },
    { metric: 'Statut fiscal et déclarations (ex. micro-entreprise, URSSAF)', scope: 'France et pays de l’UE', status: SURVEY_FR_STATUS },
    { metric: 'Heures hebdomadaires effectivement proposées', scope: 'Par plateforme et domaine', status: SURVEY_FR_STATUS },
    { metric: 'Frais de change et modes de paiement', scope: 'France & Europe', status: SURVEY_FR_STATUS },
  ],
  faqs: [
    {
      question: 'Y a-t-il déjà des résultats disponibles ?',
      answer:
        'Pas encore. La collecte anonyme est en cours et toutes les métriques sont temporairement indiquées en TBD.',
    },
    {
      question: 'Conservez-vous des données personnelles ?',
      answer:
        'Non. Le questionnaire ne demande aucune information identifiante et aucun profil nominatif n’est stocké sur Edithsi.',
    },
    {
      question: 'Qui réalise cette enquête ?',
      answer:
        'Je la mène de manière indépendante en tant qu’auteur d’Edithsi, sans aucun financement d’une plateforme d’IA.',
    },
    {
      question: 'Que puis-je citer dès maintenant ?',
      answer:
        'L’Edithsi AI Work Pay Index, fondé sur les annonces officielles publiques vérifiées au 05.11.2026 et disponible en CSV (CC BY 4.0).',
    },
  ],
};

const GLOSSARY_FR: GlossaryPageContent = {
  lang: 'fr',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Glossaire entraînement IA : RLHF, Evals, Rubrics | Edithsi',
  metaDescription:
    '12 définitions claires des termes clés de l’entraînement d’IA : RLHF, Evals, Rubrics, viviers, SFT, Red Teaming, Golden Responses et exemples de postes.',
  h1: 'Que signifient RLHF, Evals, Rubrics et viviers dans l’entraînement d’IA ?',
  directAnswer:
    'Le secteur de l’entraînement d’IA utilise un vocabulaire technique issu de la recherche en apprentissage automatique pour qualifier des tâches courantes d’évaluation, de rédaction et de contrôle qualité. Ce glossaire définit 12 notions essentielles (RLHF, rubriques, évaluations, viviers de talents, etc.) avec une phrase claire en tête et des exemples appliqués.',
  terms: GLOSSARY_IDS.map((id) => {
    switch (id) {
      case 'rlhf':
        return {
          id,
          term: 'RLHF (Apprentissage par renforcement avec retour humain)',
          firstSentenceDefinition:
            'Le RLHF est une méthode d’entraînement où des humains évaluent et comparent les réponses d’un modèle afin de guider son amélioration par renforcement.',
          details:
            'Au lieu d’écrire chaque réponse à la main, les contributeurs notent plusieurs propositions générées par l’IA selon des critères de précision, de clarté et de sécurité. C’est le cœur des missions proposées sur Mercor, Outlier et Mindrift.',
          exampleRole: 'Un spécialiste comparant deux diagnostics générés par IA pour retenir le plus sûr.',
        };
      case 'rubric':
        return {
          id,
          term: 'Rubrique (Grille d’évaluation)',
          firstSentenceDefinition:
            'Une rubrique est un ensemble détaillé de critères guidant l’attribution de notes et la justification des retours sur les réponses d’un modèle.',
          details:
            'Les rubriques précisent ce qui constitue une bonne réponse, comment sanctionner une erreur factuelle et quel format appliquer. Une notation fidèle à la grille est indispensable pour conserver l’accès aux projets.',
          exampleRole: 'Un juriste vérifiant si une réponse d’IA cite correctement un texte de loi.',
        };
      case 'evals':
        return {
          id,
          term: 'Evals (Évaluations de modèles)',
          firstSentenceDefinition:
            'Les evals sont des batteries de tests standardisés mesurant les performances d’un modèle de langage sur des compétences ciblées.',
          details:
            'Les spécialistes rédigent des questions exigeantes avec des réponses idéales de référence afin de quantifier les progrès d’une version de modèle à l’autre.',
          exampleRole: 'Un développeur concevant des problèmes algorithmiques avec cas limites pour tester un modèle de code.',
        };
      case 'ai-trainer':
        return {
          id,
          term: 'Entraîneur d’IA (AI Trainer)',
          firstSentenceDefinition:
            'Un entraîneur d’IA est un spécialiste humain qui produit des données d’apprentissage, évalue des réponses ou corrige des sorties de modèles.',
          details:
            'Ce rôle va de la simple relecture linguistique jusqu’à l’expertise pointue en médecine ou en droit. Le statut est quasi systématiquement celui de prestataire indépendant.',
          exampleRole: 'Un linguiste rédigeant des annotations fines pour adapter un modèle au français.',
        };
      case 'standing-pool':
        return {
          id,
          term: 'Vivier de talents (Standing Pool)',
          firstSentenceDefinition:
            'Un vivier de talents est une base de candidats présélectionnés parmi lesquels les plateformes puisent lorsqu’un projet client débute.',
          details:
            'Réussir les tests d’entrée vous intègre au vivier, mais ne garantit pas de travail immédiat. Les missions sont attribuées selon les besoins ponctuels des laboratoires d’IA.',
          exampleRole: 'Un candidat admis dans le pool Generalist de Mercor en attente d’attribution de projet.',
        };
      case 'referral-cap':
        return {
          id,
          term: 'Plafond de parrainage (Referral Cap)',
          firstSentenceDefinition:
            'Un plafond de parrainage est la limite maximale de rémunération qu’une plateforme accorde à un parrain pour l’inscription d’un tiers.',
          details:
            'Ces règles préviennent les abus et garantissent la transparence commerciale. Edithsi signale systématiquement les liens comportant un code de parrainage.',
          exampleRole: 'Un créateur déclarant ses affiliations conformément aux règles déontologiques.',
        };
      case 'sft':
        return {
          id,
          term: 'SFT (Ajustement fin supervisé)',
          firstSentenceDefinition:
            'Le SFT est une étape d’entraînement où le modèle apprend à partir d’exemples idéaux de questions et de réponses rédigés par des humains.',
          details:
            'Contrairement au RLHF qui classe des choix existants, le SFT demande de rédiger de bout en bout des contenus de haute qualité pour enseigner de nouveaux comportements au modèle.',
          exampleRole: 'Un docteur rédigeant une synthèse médicale modèle pour nourrir les données d’apprentissage.',
        };
      case 'red-teaming':
        return {
          id,
          term: 'Red Teaming (Tests d’intrusion éthique)',
          firstSentenceDefinition:
            'Le red-teaming consiste à soumettre intentionnellement des requêtes piégées ou complexes à une IA pour détecter ses failles de sécurité.',
          details:
            'Les contributeurs cherchent à contourner les garde-fous du modèle pour identifier les risques d’hallucination, de désinformation ou de conseils dangereux avant la mise en production.',
          exampleRole: 'Un expert en sécurité formulant des prompts pour éprouver la résistance d’un modèle.',
        };
      case 'golden-response':
        return {
          id,
          term: 'Réponse de référence (Golden Response)',
          firstSentenceDefinition:
            'Une réponse de référence est une solution modèle irréprochable servant d’étalon de vérité pour calibrer l’IA.',
          details:
            'Elle doit être exhaustive, logiquement structurée, sourcée et exempte de la moindre inexactitude factuelle.',
          exampleRole: 'Un fiscaliste rédigeant l’analyse type d’une question patrimoniale complexe.',
        };
      case 'calibration-task':
        return {
          id,
          term: 'Tâche de calibration (Calibration Task)',
          firstSentenceDefinition:
            'Une tâche de calibration est un exercice dont la réponse attendue est connue, servant à mesurer la rigueur d’un contributeur.',
          details:
            'Ces tests interviennent lors de l’intégration ou de manière impromptue au cours des projets pour vérifier le respect scrupuleux des consignes.',
          exampleRole: 'Un nouvel arrivant notant des exemples d’évaluation dont les scores de référence sont préétablis.',
        };
      case 'independent-contractor':
        return {
          id,
          term: 'Prestataire indépendant (Freelance)',
          firstSentenceDefinition:
            'Un prestataire indépendant est un travailleur autonome qui effectue des missions sans lien de subordination salariale.',
          details:
            'Les plateformes d’IA recrutent sous ce statut, ce qui implique l’absence de congés payés, de salaire minimum garanti et la prise en charge intégrale de sa protection sociale.',
          exampleRole: 'Tout collaborateur facturant ses heures ou tâches sur Mercor ou Outlier.',
        };
      case 'posted-rate-range':
        return {
          id,
          term: 'Fourchette horaire affichée',
          firstSentenceDefinition:
            'La fourchette affichée correspond aux limites de taux horaire qu’une plateforme publie sur ses offres officielles ou ses FAQ.',
          details:
            'Elle reflète l’engagement public de la plateforme mais ne constitue pas une rémunération garantie pour chaque profil. L’Edithsi Pay Index ne retient que ces données vérifiées.',
          exampleRole: 'Un candidat examinant l’offre Mercor Legal Expert affichée entre 60 et 150 USD/h.',
        };
      default:
        throw new Error('Unknown glossary id: ' + id);
    }
  }),
  faqs: [
    {
      question: 'Quelle est la différence entre RLHF et SFT ?',
      answer:
        'Le SFT entraîne le modèle à partir de textes modèles rédigés par des humains, tandis que le RLHF affine le modèle en faisant classer par des humains ses propres réponses.',
    },
    {
      question: 'Faut-il un profil technique en informatique pour ces missions ?',
      answer:
        'Non. La grande majorité des missions spécialisées s’appuient sur votre expertise métier (médecine, droit, langues, finance), la plateforme vous formant à ses outils internes.',
    },
    {
      question: 'Intégrer un vivier garantit-il des missions ?',
      answer:
        'Non. Être admis dans un vivier signifie que vous avez validé les prérequis ; les missions effectives sont déclenchées selon la demande des clients.',
    },
    {
      question: 'Pourquoi l’indice de rémunération s’appuie-t-il sur les tarifs affichés ?',
      answer:
        'Parce qu’ils sont vérifiables publiquement sur des sources officielles, évitant les biais et les approximations des données autodéclarées.',
    },
  ],
};

const PAY_ES: PayIndexPageContent = {
  lang: 'es',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Tarifas entrenamiento IA 2026: rangos en 6 plataformas',
  metaDescription:
    'Tarifas horarias oficiales de entrenamiento de IA en Mercor, micro1, Outlier, Alignerr, Handshake AI y Mindrift: 15–180 USD/h (05.11.2026). CSV libre.',
  h1: '¿Cuánto ganan los entrenadores de IA en 2026? Edithsi AI Work Pay Index',
  directAnswer:
    'A 05.11.2026, las tarifas horarias publicadas para contratistas independientes en 6 plataformas oscilan entre 15 y 180 USD/h: medicina clínica hasta 180 USD/h, derecho 60–150 USD/h, ingeniería de software hasta 150 USD/h e idiomas 25–50 USD/h. Son rangos brutos procedentes de convocatorias oficiales y el trabajo nunca está garantizado.',
  methodologyTitle: 'Metodología del índice de remuneración',
  methodologyParagraphs: [
    'Solo registro cifras publicadas en ofertas públicas oficiales o en las páginas de FAQ oficiales de las plataformas. Cada línea de esta edición fue verificada manualmente el 05.11.2026 y enlaza a la URL de origen.',
    'No utilizo datos autodeclarados procedentes de foros ni capturas anónimas. Cuando una plataforma no publica un rango horario verificable, indico explícitamente TBD.',
    'Todas las cantidades son tarifas brutas en dólares estadounidenses antes de impuestos, Seguridad Social o comisiones de cambio. El conjunto de datos completo puede descargarse en CSV bajo licencia CC BY 4.0, con revisión mensual el día 5.',
  ],
  downloadCsvLabel: 'Descargar datos completos (CSV, CC BY 4.0)',
  changelogTitle: 'Registro de cambios',
  tableHeaders: ['Especialidad', 'Plataforma', 'Puesto', 'Rango publicado (USD/h)', 'Fuente', 'Comprobado'],
  sections: [
    {
      h2: '¿Qué especialidades perciben mayores tarifas en entrenamiento de IA?',
      paragraphs: [
        'En la edición 2026-11, el techo más alto corresponde a medicina clínica: Mercor publica 60–180 USD/h para Medical Expert. Derecho ocupa el segundo lugar con 100–150 USD/h para abogados colegiados y 60–150 USD/h para Legal Expert en Mercor, mientras que Mindrift cita 60–100+ USD/h.',
        'La ingeniería de software alcanza hasta 150 USD/h (Mercor 70–150 USD/h, Handshake AI hasta 150 USD/h). Tareas de oficina se sitúan en 60–70 USD/h, idiomas en 25–50 USD/h y perfiles generalistas parten de 15–30 USD/h en Mindrift. Plataformas sin rango público figuran como TBD.',
      ],
    },
    {
      h2: '¿Se cobra por horas o por tareas en el entrenamiento de IA?',
      paragraphs: [
        'Depende de cada plataforma. Mercor y Handshake AI fijan tarifas horarias (Mercor liquida semanalmente vía Stripe). Mindrift abona por tarea validada cada dos semanas, por lo que los valores horarios son estimaciones sobre ritmos medios.',
        'Outlier comunica la retribución antes de cada encargo y liquida los martes, mientras que Alignerr y micro1 ajustan condiciones por proyecto. Al cobrar por tarea, el ingreso horario real depende de tu velocidad y del índice de aprobación.',
      ],
    },
    {
      h2: '¿Cuánto queda en neto tras tributar en España o Europa?',
      paragraphs: [
        'Todas las cifras del índice son importes brutos en dólares. Como profesional autónomo en España debes liquidar el IRPF ante la Agencia Tributaria, cotizar a la Seguridad Social y considerar las comisiones bancarias por cambio de divisa.',
        'El rendimiento neto real resulta apreciablemente inferior a la tarifa bruta publicada. Recomiendo asesorarse con un gestor colegiado para calcular el impacto fiscal en cada caso.',
      ],
    },
  ],
  faqs: [
    {
      question: '¿De dónde proceden los datos del Pay Index?',
      answer:
        'Exclusivamente de páginas de empleo y FAQ oficiales de las plataformas, comprobadas manualmente el 05.11.2026 y con enlace directo a cada fuente.',
    },
    {
      question: '¿Por qué algunos puestos figuran como TBD?',
      answer:
        'TBD indica que la plataforma no difunde un rango horario contrastable en su web pública. Prefiero señalar TBD antes que conjeturar una cifra.',
    },
    {
      question: '¿Tengo garantizado cobrar la tarifa indicada?',
      answer:
        'No. Son rangos publicados en ofertas abiertas, no garantías contractuales. El volumen de proyectos varía con la demanda de los clientes.',
    },
    {
      question: '¿Puedo citar estos datos en investigaciones o artículos?',
      answer:
        'Sí. El archivo CSV cuenta con licencia CC BY 4.0: puedes emplearlo citando «Edithsi AI Work Pay Index» y enlazando a esta publicación.',
    },
  ],
};

const SURVEY_ES_STATUS = 'TBD — recopilación anónima en curso (comprobado el 05.11.2026)';

const SURVEY_ES: SurveyPageContent = {
  lang: 'es',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Encuesta 2026: trabajo de entrenamiento de IA en Europa | Edithsi',
  metaDescription:
    'Metodología y plantilla de informe de mi encuesta anónima sobre entrenamiento de IA en España y Europa. Las estadísticas se publicarán tras validar los datos.',
  h1: '¿Cuál es la situación real del trabajo de entrenamiento de IA en Europa? (Encuesta y método 2026)',
  directAnswer:
    'Esta página expone la metodología y sirve de maqueta para mi encuesta anónima sobre el trabajo de entrenamiento de IA en Europa. No publico ninguna estadística hasta completar y verificar la recogida de datos.',
  methodologySections: [
    {
      h2: '¿Qué aspectos evalúa la encuesta?',
      paragraphs: [
        'La investigación profundiza en los puntos que las ofertas no revelan: tiempos de espera hasta la primera asignación, retribución horaria efectiva frente al rango anunciado, tasas de superación de exámenes y encaje fiscal (alta en autónomos, Seguridad Social, etc.).',
        'Los datos se difundirán exclusivamente de forma agregada una vez alcanzada una muestra representativa y verificada.',
      ],
    },
    {
      h2: '¿Cómo se protege la privacidad de los participantes?',
      paragraphs: [
        'La encuesta no solicita datos de carácter personal: ni nombres, ni correos electrónicos, ni identificación de clientes.',
        'Edithsi no almacena datos personales de encuestados. Las respuestas son anónimas y las respuestas de texto libre se auditan antes de cualquier publicación.',
      ],
    },
    {
      h2: '¿Qué fuentes pueden citar los medios de comunicación mientras tanto?',
      paragraphs: [
        'Hasta la publicación de los resultados finales, se recomienda citar el Edithsi AI Work Pay Index, respaldado por fuentes oficiales públicas verificadas el 05.11.2026 (CSV bajo CC BY 4.0).',
        'No cite esta página como fuente de porcentajes de encuesta mientras la fase de toma de datos permanezca abierta.',
      ],
    },
  ],
  plannedMetricsTable: [
    { metric: 'Tiempo de espera en bolsa hasta el primer proyecto', scope: 'España y Europa, todas las áreas', status: SURVEY_ES_STATUS },
    { metric: 'Retribución horaria real frente al rango publicado', scope: 'Por plataforma y disciplina', status: SURVEY_ES_STATUS },
    { metric: 'Porcentaje de aprobados en pruebas de acceso', scope: 'Por plataforma', status: SURVEY_ES_STATUS },
    { metric: 'Régimen fiscal y cotizaciones (ej. autónomos en España)', scope: 'España y otros países de la UE', status: SURVEY_ES_STATUS },
    { metric: 'Horas semanales efectivas de trabajo asignado', scope: 'Por plataforma y disciplina', status: SURVEY_ES_STATUS },
    { metric: 'Comisiones de cambio y pasarelas de cobro', scope: 'España y Europa', status: SURVEY_ES_STATUS },
  ],
  faqs: [
    {
      question: '¿Hay resultados públicos de la encuesta?',
      answer:
        'Todavía no. El proceso de recogida anónima continúa activo y las métricas se muestran provisionalmente como TBD.',
    },
    {
      question: '¿Se recopila información personal identificable?',
      answer:
        'No. El formulario no solicita datos personales y en Edithsi no se guardan registros identificativos.',
    },
    {
      question: '¿Quién coordina este estudio?',
      answer:
        'Lo gestiono de manera independiente como autor de Edithsi, sin vinculación comercial con las plataformas evaluadas.',
    },
    {
      question: '¿Qué información puedo citar actualmente?',
      answer:
        'El Edithsi AI Work Pay Index, basado en convocatorias oficiales comprobadas el 05.11.2026 y accesible en formato CSV (CC BY 4.0).',
    },
  ],
};

const GLOSSARY_ES: GlossaryPageContent = {
  lang: 'es',
  reviewStatus: 'NEEDS NATIVE REVIEW',
  title: 'Glosario entrenamiento IA: RLHF, Evals, Rubrics | Edithsi',
  metaDescription:
    '12 definiciones directas de términos clave en entrenamiento de IA: RLHF, Evals, Rubrics, bolsas de talento, SFT, Red Teaming, respuestas modelo y perfiles.',
  h1: '¿Qué significan RLHF, Evals, Rubrics y bolsas de talento en el entrenamiento de IA?',
  directAnswer:
    'El sector del entrenamiento de modelos de lenguaje utiliza terminología especializada del aprendizaje automático para clasificar labores de evaluación, anotación y revisión de calidad. Este glosario define 12 conceptos fundamentales con una explicación inicial directa y ejemplos de aplicación profesional.',
  terms: GLOSSARY_IDS.map((id) => {
    switch (id) {
      case 'rlhf':
        return {
          id,
          term: 'RLHF (Aprendizaje por refuerzo con retroalimentación humana)',
          firstSentenceDefinition:
            'El RLHF es un procedimiento de ajuste donde personas evalúan y ordenan respuestas de un modelo de IA para afinar su comportamiento futuro.',
          details:
            'En lugar de redactar cada texto desde cero, los evaluadores comparan varias propuestas de la IA valorando exactitud, coherencia y seguridad. Es el método central en plataformas como Mercor, Outlier y Mindrift.',
          exampleRole: 'Un médico que jerarquiza dos respuestas de IA para priorizar el razonamiento clínico más seguro.',
        };
      case 'rubric':
        return {
          id,
          term: 'Rúbrica (Matriz de evaluación)',
          firstSentenceDefinition:
            'Una rúbrica es un catálogo pormenorizado de criterios para calificar y fundamentar la calidad de las respuestas de un modelo.',
          details:
            'Establece qué penalizaciones aplicar ante fallos de contenido, cómo valorar la argumentación y qué estilo exigir. La fidelidad a la rúbrica determina la continuidad en los proyectos.',
          exampleRole: 'Un jurista comprobando si la solución de un modelo cita con precisión la normativa aplicable.',
        };
      case 'evals':
        return {
          id,
          term: 'Evals (Baterías de evaluación)',
          firstSentenceDefinition:
            'Las evals son pruebas tipificadas que miden el rendimiento de un modelo de lenguaje en materias y tareas concretas.',
          details:
            'Los evaluadores formulan problemas de dificultad avanzada con soluciones canónicas para comprobar si una nueva versión del modelo supera a la precedente.',
          exampleRole: 'Un ingeniero de software elaborando casos límite de programación para testear modelos de código.',
        };
      case 'ai-trainer':
        return {
          id,
          term: 'Entrenador de IA (AI Trainer)',
          firstSentenceDefinition:
            'Un entrenador de IA es un especialista humano que genera ejemplos formativos, valida resultados o corrige desviaciones de modelos de IA.',
          details:
            'El perfil abarca desde la corrección de estilo hasta la revisión técnica en medicina, derecho o ciencias puras, trabajando habitualmente como contratista independiente.',
          exampleRole: 'Un filólogo anotando matices semánticos para el ajuste fino de un LLM en español.',
        };
      case 'standing-pool':
        return {
          id,
          term: 'Bolsa de talento (Standing Pool)',
          firstSentenceDefinition:
            'Una bolsa de talento es una reserva de profesionales evaluados a los que una plataforma recurre al iniciar proyectos de clientes.',
          details:
            'Superar las entrevistas de acceso otorga la condición de apto en la bolsa, pero la asignación de encargos depende de la demanda externa y no está garantizada.',
          exampleRole: 'Un candidato homologado en el pool Generalist de Mercor a la espera de un proyecto disponible.',
        };
      case 'referral-cap':
        return {
          id,
          term: 'Tope de recomendación (Referral Cap)',
          firstSentenceDefinition:
            'Un tope de recomendación es el límite máximo de incentivos que una plataforma abona por la captación de nuevos candidatos.',
          details:
            'Regula las compensaciones publicitarias y promueve la transparencia. En Edithsi todos los enlaces con código de recomendación se identifican de forma explícita.',
          exampleRole: 'Un divulgador que declara sus vínculos promocionales según las directrices éticas de publicidad.',
        };
      case 'sft':
        return {
          id,
          term: 'SFT (Ajuste fino supervisado)',
          firstSentenceDefinition:
            'El SFT es una etapa de entrenamiento donde el modelo aprende a partir de parejas de preguntas y respuestas idóneas redactadas por humanos.',
          details:
            'A diferencia del RLHF, que ordena opciones ya existentes, el SFT requiere redactar material completo de alto nivel para orientar las pautas de respuesta de la IA.',
          exampleRole: 'Un investigador que redacta resúmenes científicos de referencia para el corpus de entrenamiento.',
        };
      case 'red-teaming':
        return {
          id,
          term: 'Red Teaming (Evaluación de seguridad adversaria)',
          firstSentenceDefinition:
            'El red-teaming consiste en poner a prueba deliberadamente a un modelo con preguntas complejas o engañosas para descubrir vulnerabilidades.',
          details:
            'Los participantes intentan forzar respuestas incorrectas, sesgadas o contrarias a las políticas de seguridad con el fin de corregir los fallos antes del despliegue público.',
          exampleRole: 'Un experto en ciberseguridad probando la resistencia de un modelo ante peticiones maliciosas.',
        };
      case 'golden-response':
        return {
          id,
          term: 'Respuesta canónica (Golden Response)',
          firstSentenceDefinition:
            'Una respuesta canónica es una resolución ejemplar y verificada que sirve como patrón de máxima calidad para el modelo.',
          details:
            'Debe ser rigurosa, perfectamente argumentada, con referencias certeras y sin rastro de inconsistencias ni datos falsos.',
          exampleRole: 'Un economista elaborando el análisis perfecto de una operación corporativa para el modelo.',
        };
      case 'calibration-task':
        return {
          id,
          term: 'Tarea de calibración (Calibration Task)',
          firstSentenceDefinition:
            'Una tarea de calibración es un ejercicio con resultado preestablecido que evalúa si el corrector aplica las normas con el rigor exigido.',
          details:
            'Se presentan durante la admisión o intercaladas en el trabajo regular para supervisar la calidad de las valoraciones.',
          exampleRole: 'Un revisor novel puntuando casos de prueba cuyas calificaciones correctas ya son conocidas.',
        };
      case 'independent-contractor':
        return {
          id,
          term: 'Contratista independiente (Autónomo)',
          firstSentenceDefinition:
            'Un contratista independiente es un profesional por cuenta propia que presta servicios a una entidad sin relación laboral subordinada.',
          details:
            'Las plataformas de IA contratan bajo este régimen mercantil, lo que implica gestionar directamente impuestos, cotizaciones y asumir la variabilidad de encargos.',
          exampleRole: 'Cualquier colaborador que facture sus tareas en Mercor, Outlier o Mindrift.',
        };
      case 'posted-rate-range':
        return {
          id,
          term: 'Rango horario publicado',
          firstSentenceDefinition:
            'El rango publicado es la horquilla de retribución por hora que una plataforma difunde formalmente en sus ofertas o páginas de soporte.',
          details:
            'Expresa la disposición de pago comunicada por la empresa, sin suponer una tarifa asegurada para cada colaborador. El Edithsi Pay Index solo recoge estos datos contrastables.',
          exampleRole: 'Un aspirante revisando el rango de 60–150 USD/h publicado para la posición de Legal Expert en Mercor.',
        };
      default:
        throw new Error('Unknown glossary id: ' + id);
    }
  }),
  faqs: [
    {
      question: '¿Qué diferencia existe entre RLHF y SFT?',
      answer:
        'El SFT nutre al modelo con ejemplos canónicos creados por especialistas, mientras que el RLHF ajusta sus salidas haciendo que personas clasifiquen y elijan entre varias opciones generadas por la propia IA.',
    },
    {
      question: '¿Es imprescindible tener titulación técnica en informática?',
      answer:
        'No. La mayor parte de los encargos de alto valor buscan cualificación en áreas concretas (medicina, legislación, finanzas, idiomas), aportando la plataforma las pautas de evaluación.',
    },
    {
      question: '¿Formar parte de una bolsa garantiza ingresos periódicos?',
      answer:
        'No. Superar la prueba de admisión habilita para recibir encargos, pero la asignación efectiva depende de la actividad de los proyectos de los clientes.',
    },
    {
      question: '¿Por qué el Pay Index solo contempla tarifas publicadas?',
      answer:
        'Porque pueden verificarse públicamente en fuentes contrastadas, descartando las distorsiones de datos no acreditados.',
    },
  ],
};

const PAY: Record<Lang, PayIndexPageContent> = {
  en: PAY_EN,
  fi: PAY_FI,
  sv: PAY_SV,
  de: PAY_DE,
  fr: PAY_FR,
  es: PAY_ES,
};

const SURVEY: Record<Lang, SurveyPageContent> = {
  en: SURVEY_EN,
  fi: SURVEY_FI,
  sv: SURVEY_SV,
  de: SURVEY_DE,
  fr: SURVEY_FR,
  es: SURVEY_ES,
};

const GLOSSARY: Record<Lang, GlossaryPageContent> = {
  en: GLOSSARY_EN,
  fi: GLOSSARY_FI,
  sv: GLOSSARY_SV,
  de: GLOSSARY_DE,
  fr: GLOSSARY_FR,
  es: GLOSSARY_ES,
};

export function getPayIndexPageContent(lang: Lang): PayIndexPageContent {
  return PAY[lang] ?? PAY_EN;
}

export function getSurveyPageContent(lang: Lang): SurveyPageContent {
  return SURVEY[lang] ?? SURVEY_EN;
}

export function getGlossaryPageContent(lang: Lang): GlossaryPageContent {
  return GLOSSARY[lang] ?? GLOSSARY_EN;
}
