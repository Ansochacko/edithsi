// NEEDS NATIVE REVIEW for sv, de, fr, es
// Guide content for Swedish, German, French and Spanish. Pay figures are posted ranges
// copied from src/data/platforms.json and src/data/pay-index/2026-11.json (sample date
// 2026-11-05). They are never guaranteed. Nothing here is tax, legal or benefits advice.
import type { GuideSlug, GuidePageContent } from './hubTypes';

const META = { reviewStatus: 'NEEDS NATIVE REVIEW', lastUpdated: '2026-11-05' } as const;

// ---------------------------------------------------------------------------
// SV — Svenska
// ---------------------------------------------------------------------------
const SV: Record<GuideSlug, GuidePageContent> = {
  'remote-side-jobs-from-home': {
    ...META,
    slug: 'remote-side-jobs-from-home',
    lang: 'sv',
    title: 'Distansjobb hemifrån med AI-träning: guide för 2026',
    metaDescription:
      'Vilka AI-träningsplattformar tar emot frilansare i Sverige och EU? Jämför publicerade timintervall, utbetalning och landskrav per 2026-11-05.',
    h1: 'Vilka distansjobb hemifrån kan jag söka inom AI-träning?',
    directAnswer:
      'Per 2026-11-05 tar flera AI-träningsplattformar, bland annat Mercor, Mindrift och Outlier, emot uppdragstagare från Sverige och övriga EU för arbete på distans. Ersättningen är publicerade intervall som inte garanteras, och du arbetar som egenföretagare, inte som anställd.',
    hubSlug: '/for/general/',
    relatedGuides: ['avoid-ai-job-scams', 'ai-interview-preparation', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Publicerade ersättningsintervall och landsstatus (källa: officiella sidor, kontrollerat 2026-11-05)',
      headers: ['Plattform', 'Publicerat intervall (USD)', 'Utbetalning', 'Sverige/EU'],
      rows: [
        ['Mercor', '$35–180/h', 'Veckovis via Stripe', 'Öppet (global distans)'],
        ['Mindrift', '$15–100+/h', 'Varannan vecka, per uppgift', 'Öppet (enligt Tolokas geografiska villkor)'],
        ['Outlier', 'TBD (visas före varje projekt)', 'Veckovis via PayPal, AirTM eller ACH', 'Öppet (50+ länder)'],
        ['Alignerr', '$15–120/h', 'TBD (sätts upp efter godkännande)', 'Förbehåll: FAQ anger amerikansk ID-handling'],
        ['micro1', 'TBD (per uppdrag)', 'TBD', 'Öppet (global expertgemenskap)'],
        ['Handshake AI', 'Upp till $17–150/h', 'Per timme', 'Endast USA'],
      ],
    },
    sections: [
      {
        h2: 'Vad innebär AI-träning som distansjobb?',
        paragraphs: [
          'AI-träning betyder att du bedömer, rättar eller skriver svar som används för att utvärdera och förbättra språkmodeller. Typiska uppgifter är att poängsätta svar enligt en bedömningsmall, skriva svåra frågor inom ditt fackområde eller granska resonemang steg för steg.',
          'Arbetet sker helt på distans och oftast i projektform. Mängden arbete varierar mellan projekt och veckor, så jag ser det som ett sidouppdrag snarare än en stabil inkomstkälla.',
        ],
      },
      {
        h2: 'Vilka plattformar accepterar sökande från Sverige?',
        paragraphs: [
          'Enligt plattformarnas officiella sidor per 2026-11-05 är Mercor, Mindrift, Outlier och micro1 öppna för sökande i EU, med förbehåll för krav i enskilda projekt. Alignerr välkomnar globala sökande men dess FAQ anger att identitetskontrollen bara godtar amerikanska ID-handlingar, så kontrollera det innan du lägger tid på ansökan.',
          'Handshake AI Fellowship kräver att du är baserad i USA och har giltigt arbetstillstånd, så den är inte ett alternativ för den som bor i Sverige.',
        ],
      },
      {
        h2: 'Hur mycket betalar AI-träningsjobb?',
        paragraphs: [
          'Jag återger bara intervall som plattformarna själva publicerar: till exempel Mercor $40–70/h för generalister och $35–50/h för språk- och ljudexperter, eller Mindrift $15–30/h på ingångsnivå. Det är bruttobelopp i US-dollar före skatt och sociala avgifter.',
          'Intervallen är inga löften. Din faktiska ersättning beror på projekt, godkänd tid, kvalitetsgranskning och hur mycket arbete som finns tillgängligt.',
        ],
      },
      {
        h2: 'Vad behöver jag ordna innan jag börjar?',
        paragraphs: [
          'Du fakturerar som uppdragstagare, så i Sverige behöver du normalt F-skatt och ofta en enskild firma. Läs guiden om skatter för detaljer och kontakta Skatteverket vid osäkerhet.',
          'Om du får ersättning från a-kassan ska du anmäla arbetet innan du börjar. Kontrollera också att plattformen är äkta: riktiga plattformar tar aldrig betalt för att du ska få jobba.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – officiell jobbsida', url: 'https://work.mercor.com' },
      { label: 'Mindrift – officiell webbplats', url: 'https://mindrift.ai/' },
      { label: 'Outlier – officiell webbplats', url: 'https://outlier.ai/' },
      { label: 'Handshake AI – programvillkor', url: 'https://joinhandshake.com/move-program/' },
    ],
    faqs: [
      { question: 'Kan jag jobba med AI-träning från Sverige?', answer: 'Ja, flera plattformar som Mercor, Mindrift och Outlier anger att de tar emot sökande från EU per 2026-11-05. Enskilda projekt kan ha egna krav.' },
      { question: 'Är ersättningen garanterad?', answer: 'Nej. De belopp jag visar är publicerade intervall från plattformarnas egna sidor och garanterar varken timpris eller arbetsmängd.' },
      { question: 'Blir jag anställd av plattformen?', answer: 'Nej, normalt arbetar du som självständig uppdragstagare och ansvarar själv för skatt och avgifter.' },
      { question: 'Måste jag betala för att komma igång?', answer: 'Nej. En legitim plattform tar aldrig betalt för ansökan, utbildning eller utrustning. Begärs pengar är det en varningssignal.' },
    ],
  },

  'taxes-toiminimi-yel-finland': {
    ...META,
    slug: 'taxes-toiminimi-yel-finland',
    lang: 'sv',
    title: 'Skatt på AI-uppdrag i Sverige: F-skatt och enskild firma',
    metaDescription:
      'Så fungerar skatt för AI-träningsuppdrag i Sverige: F-skatt, enskild firma och moms via Skatteverket, plus en kort not för dig som bor i Finland.',
    h1: 'Hur betalar jag skatt på AI-uppdrag från utländska plattformar?',
    directAnswer:
      'Per 2026-11-05 gäller att du som bor i Sverige och fakturerar utländska AI-plattformar normalt behöver F-skatt, ofta via en enskild firma registrerad hos Skatteverket. Bor du i Finland gäller i stället Vero.fi och eventuellt YEL-försäkring; detta är inte skatterådgivning.',
    hubSlug: '/for/finance/',
    relatedGuides: ['unemployment-benefits-ai-work', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Myndigheter och grundbegrepp för egenföretagare (kontrollerat 2026-11-05)',
      headers: ['Fråga', 'Sverige', 'Finland (om du bor där)'],
      rows: [
        ['Skattemyndighet', 'Skatteverket', 'Skatteförvaltningen (Vero.fi)'],
        ['Vanlig företagsform', 'Enskild firma (enskild näringsidkare)', 'Toiminimi (enskild näringsidkare)'],
        ['Skattsedel för näringsverksamhet', 'F-skatt', 'Förskottsuppbördsregistret'],
        ['Pensionsförsäkring', 'Egenavgifter via deklarationen', 'YEL, obligatorisk från arbetsinkomst 9 423 €/år (2026)'],
        ['Registrering', 'verksamt.se', 'ytj.fi'],
      ],
    },
    sections: [
      {
        h2: 'Behöver jag F-skatt för AI-träningsuppdrag?',
        paragraphs: [
          'AI-plattformarna betalar dig som självständig uppdragstagare och drar normalt ingen svensk skatt. Därför ansöker de flesta om F-skatt hos Skatteverket, ofta i samband med att de registrerar en enskild firma via verksamt.se.',
          'Skatteverket bedömer om verksamheten är självständig och varaktig. Är uppdragen tillfälliga kan inkomsten ibland redovisas som inkomst av tjänst i stället, så jag rekommenderar att du frågar Skatteverket om din situation.',
        ],
      },
      {
        h2: 'Hur fungerar moms när kunden finns utomlands?',
        paragraphs: [
          'Tjänster till företag utanför Sverige beskattas ofta i köparens land, vilket kan innebära att du fakturerar utan svensk moms. Reglerna beror på om kunden är ett företag och var det är etablerat.',
          'Sedan 2025 finns en momsbefrielse för små företag med omsättning upp till 120 000 kr per år. Kontrollera på Skatteverkets webbplats vad som gäller för just dina kunder.',
        ],
      },
      {
        h2: 'Hur hanterar jag ersättning i US-dollar?',
        paragraphs: [
          'Inkomsten ska redovisas i svenska kronor. Spara fakturor, utbetalningsbesked och den växelkurs du använder, till exempel kursen på betalningsdagen.',
          'Avgifter från betaltjänster som Stripe eller PayPal kan vara avdragsgilla kostnader i näringsverksamhet. Bokföringsskyldigheten gäller även små enskilda firmor.',
        ],
      },
      {
        h2: 'Vad gäller om jag bor i Finland?',
        paragraphs: [
          'Bor du i Finland är det Skatteförvaltningen (Vero.fi) som gäller. Många registrerar en toiminimi och förskottsuppbördsregistret via ytj.fi.',
          'YEL-försäkringen är obligatorisk när din fastställda arbetsinkomst når 9 423 € per år (2026). Detta är allmän information och inte skatterådgivning.',
        ],
      },
    ],
    sources: [
      { label: 'Skatteverket – starta och driva företag', url: 'https://www.skatteverket.se/foretag' },
      { label: 'Verksamt.se – registrera enskild firma', url: 'https://www.verksamt.se' },
      { label: 'Vero.fi – Skatteförvaltningen (svenska)', url: 'https://www.vero.fi/sv/' },
    ],
    faqs: [
      { question: 'Är detta skatterådgivning?', answer: 'Nej. Detta är allmän information per 2026-11-05. Kontakta Skatteverket eller en redovisningskonsult för din situation.' },
      { question: 'Drar plattformen skatt åt mig?', answer: 'Normalt inte. Utländska plattformar betalar bruttobelopp till uppdragstagare, och du ansvarar själv för skatt och avgifter.' },
      { question: 'Måste jag ha enskild firma?', answer: 'Inte alltid, men F-skatt kräver normalt att Skatteverket bedömer att du bedriver näringsverksamhet. Enskild firma är den vanligaste formen.' },
      { question: 'Vad är YEL?', answer: 'YEL är den finska pensionsförsäkringen för företagare. Den gäller bara om du bor och arbetar som företagare i Finland, från arbetsinkomst 9 423 €/år (2026).' },
    ],
  },

  'unemployment-benefits-ai-work': {
    ...META,
    slug: 'unemployment-benefits-ai-work',
    lang: 'sv',
    title: 'A-kassa och AI-uppdrag: så påverkas ersättningen',
    metaDescription:
      'Får du a-kassa och vill ta AI-träningsuppdrag? Så anmäler du arbetet till a-kassan och Arbetsförmedlingen innan du börjar, enligt läget 2026-11-05.',
    h1: 'Kan jag ta AI-uppdrag medan jag får a-kassa?',
    directAnswer:
      'Per 2026-11-05 kan AI-uppdrag påverka din ersättning från a-kassan, och du ska anmäla arbetet till din a-kassa och Arbetsförmedlingen innan du börjar. Om ersättningen minskas eller stoppas avgörs av a-kassans bedömning av din situation.',
    hubSlug: '/for/general/',
    relatedGuides: ['taxes-toiminimi-yel-finland', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Vem gör vad när du är arbetssökande i Sverige (kontrollerat 2026-11-05)',
      headers: ['Aktör', 'Roll', 'Vad du gör'],
      rows: [
        ['Arbetsförmedlingen', 'Registrering och aktivitetsrapport', 'Rapportera aktiviteter och ändrade förhållanden'],
        ['Din a-kassa', 'Beslutar om ersättning', 'Anmäl bisyssla eller företag innan du börjar'],
        ['Skatteverket', 'F-skatt och företagsregistrering', 'Registrera enskild firma om du startar näringsverksamhet'],
      ],
    },
    sections: [
      {
        h2: 'Måste jag anmäla AI-uppdrag till a-kassan?',
        paragraphs: [
          'Ja. Allt arbete, även korta frilansuppdrag på distans, ska redovisas till a-kassan. Gör det innan du börjar, så att a-kassan kan bedöma hur uppdraget påverkar rätten till ersättning.',
          'Arbetad tid redovisas på tidrapporten (kassakortet) för den vecka den utförs. Att inte redovisa arbete kan leda till återkrav.',
        ],
      },
      {
        h2: 'Räknas AI-uppdrag som bisyssla eller företag?',
        paragraphs: [
          'Om du fakturerar via en enskild firma bedömer a-kassan verksamheten som näringsverksamhet. Ett företag som du drivit vid sidan av ett tidigare arbete kan ibland godkännas som bisyssla, men det kräver en särskild prövning.',
          'Ett nystartat företag under arbetslöshet behandlas ofta annorlunda. Fråga din a-kassa vilka regler som gäller innan du registrerar firman.',
        ],
      },
      {
        h2: 'Vad ska jag rapportera till Arbetsförmedlingen?',
        paragraphs: [
          'Arbetsförmedlingen behöver veta om du börjar arbeta eller startar företag, eftersom det kan påverka ditt uppdrag som arbetssökande. Uppdatera uppgifterna i din aktivitetsrapport.',
          'Arbetsförmedlingen beslutar inte om a-kassans ersättning, så du behöver kontakta båda.',
        ],
      },
      {
        h2: 'Hur undviker jag återkrav?',
        paragraphs: [
          'Spara skriftliga besked från a-kassan, notera arbetade timmar per dag och spara plattformens utbetalningsbesked. Det gör det lätt att visa vad du arbetat.',
          'Projektbaserat arbete varierar mycket. Räkna inte med en viss arbetsmängd, och redovisa faktisk tid i stället för uppskattningar.',
        ],
      },
    ],
    sources: [
      { label: 'Arbetsförmedlingen', url: 'https://arbetsformedlingen.se' },
      { label: 'Sveriges a-kassor – arbetslöshetsförsäkringen', url: 'https://www.sverigesakassor.se' },
      { label: 'Inspektionen för arbetslöshetsförsäkringen (IAF)', url: 'https://www.iaf.se' },
    ],
    faqs: [
      { question: 'Kan jag förlora a-kassan om jag tar AI-uppdrag?', answer: 'Det kan påverka ersättningen. A-kassan gör en individuell bedömning, så anmäl uppdraget innan du börjar.' },
      { question: 'Räcker det att meddela Arbetsförmedlingen?', answer: 'Nej. A-kassan beslutar om ersättningen, så du behöver informera både a-kassan och Arbetsförmedlingen.' },
      { question: 'Gäller reglerna även för korta testuppgifter?', answer: 'Betalt arbete ska redovisas oavsett längd. Fråga a-kassan om du är osäker på hur en obetald testuppgift ska behandlas.' },
      { question: 'Är detta juridisk rådgivning?', answer: 'Nej, det är allmän information per 2026-11-05. Din a-kassa ger besked i ditt fall.' },
    ],
  },

  'ai-interview-preparation': {
    ...META,
    slug: 'ai-interview-preparation',
    lang: 'sv',
    title: 'AI-intervju: så förbereder jag mig för plattformarnas test',
    metaDescription:
      'Så förbereder du dig för AI-intervjuer och kunskapstest hos AI-träningsplattformar: teknik, struktur på svaren, språk och vanliga misstag att undvika.',
    h1: 'Hur förbereder jag mig för en AI-intervju hos en AI-träningsplattform?',
    directAnswer:
      'Per 2026-11-05 använder flera AI-träningsplattformar automatiserade intervjuer eller kunskapstest, och bästa förberedelsen är att träna på att förklara ditt resonemang tydligt och konkret inom ditt eget fackområde. Kontrollera också teknik, ljud och identitetshandling i förväg.',
    hubSlug: '/for/software/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-training-for-phds-and-students', 'avoid-ai-job-scams'],
    table: {
      caption: 'Checklista före en AI-intervju eller ett kunskapstest',
      headers: ['Område', 'Vad jag kontrollerar', 'Varför'],
      rows: [
        ['Teknik', 'Webbkamera, mikrofon, stabil uppkoppling', 'Avbrott kan avbryta en tidsbegränsad intervju'],
        ['Identitet', 'Giltig ID-handling som plattformen godtar', 'Vissa plattformar har landsspecifika ID-krav'],
        ['Fackområde', 'Konkreta exempel från eget arbete', 'Frågorna testar verklig expertis'],
        ['Språk', 'Svar på det språk som efterfrågas', 'Språkprojekt bedömer även språkkvalitet'],
      ],
    },
    sections: [
      {
        h2: 'Vad är en AI-intervju?',
        paragraphs: [
          'En AI-intervju är ett automatiserat samtal där en röst- eller chattassistent ställer frågor och spelar in dina svar. Svaren granskas sedan för att matcha dig mot projekt.',
          'Vissa plattformar använder i stället skriftliga test eller provuppgifter med bedömningsmallar. Läs alltid instruktionerna noga innan du startar.',
        ],
      },
      {
        h2: 'Hur strukturerar jag mina svar?',
        paragraphs: [
          'Jag börjar med det direkta svaret, förklarar sedan resonemanget och avslutar med ett konkret exempel. Det gör svaren lätta att bedöma.',
          'Var ärlig om var din kompetens tar slut. Att säga vad du inte vet och hur du skulle ta reda på det är bättre än att gissa.',
        ],
      },
      {
        h2: 'Hur förbereder jag mig tekniskt?',
        paragraphs: [
          'Testa kamera och mikrofon i webbläsaren, stäng av aviseringar och sitt i ett tyst rum. Ha ID-handlingen nära till hands om identitetskontroll ingår.',
          'Kontrollera plattformens ID-krav i förväg. Alignerrs FAQ anger till exempel att bara amerikanska ID-handlingar godtas vid identitetskontroll.',
        ],
      },
      {
        h2: 'Vilka misstag ska jag undvika?',
        paragraphs: [
          'Använd inte AI-verktyg för att generera svar under en intervju eller ett test om det inte uttryckligen är tillåtet. Plattformar kan avbryta samarbetet vid överträdelser.',
          'Var misstänksam om en ”intervju” sker via en okänd chattapp eller kräver betalning. Riktiga intervjuer startas från plattformens officiella webbplats.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – officiell jobbsida', url: 'https://work.mercor.com' },
      { label: 'micro1 – experter', url: 'https://www.micro1.ai/experts' },
      { label: 'Alignerr – officiell webbplats', url: 'https://www.alignerr.com/' },
    ],
    faqs: [
      { question: 'Hur lång är en AI-intervju?', answer: 'Det varierar mellan plattformar och roller. Plattformen anger normalt tidsramen innan du startar.' },
      { question: 'Kan jag göra om intervjun?', answer: 'Det beror på plattformen. Utgå från att du har ett försök och förbered dig därefter.' },
      { question: 'På vilket språk sker intervjun?', answer: 'Ofta på engelska, men språkprojekt kan testa dig på målspråket, till exempel svenska.' },
      { question: 'Garanterar en godkänd intervju arbete?', answer: 'Nej. Den gör dig aktuell för projekt, men arbetsmängden garanteras inte.' },
    ],
  },

  'avoid-ai-job-scams': {
    ...META,
    slug: 'avoid-ai-job-scams',
    lang: 'sv',
    title: 'Bedrägerier med AI-jobb: varningstecken och var du anmäler',
    metaDescription:
      'Så känner du igen falska AI-träningsjobb: avgifter, chattappar och kryptobetalningar. Läs var du anmäler bedrägerier i Sverige, polisen och Konsumentverket.',
    h1: 'Hur känner jag igen ett falskt AI-träningsjobb?',
    directAnswer:
      'Per 2026-11-05 är de tydligaste varningstecknen att någon begär pengar av dig, kontaktar dig via okända chattappar eller lovar hög ersättning utan ansökan. Anmäl bedrägerier till Polisen och sök råd hos Hallå konsument (Konsumentverket).',
    hubSlug: '/for/legal/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-interview-preparation', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Varningstecken och vad jag gör (kontrollerat 2026-11-05)',
      headers: ['Varningstecken', 'Varför det är riskabelt', 'Åtgärd'],
      rows: [
        ['Avgift för start, utbildning eller utrustning', 'Legitima plattformar tar inte betalt av uppdragstagare', 'Betala inte, avbryt kontakten'],
        ['Kontakt via WhatsApp eller Telegram', 'Vanligt hos bedragare som utger sig för rekryterare', 'Sök själv upp plattformens officiella webbplats'],
        ['Krav på kryptoinsättning för att ”låsa upp” lön', 'Typiskt uppgiftsbedrägeri', 'Anmäl till Polisen'],
        ['Begäran om BankID eller kortuppgifter', 'Kan ge bedragare tillgång till dina konton', 'Kontakta banken direkt'],
      ],
    },
    sections: [
      {
        h2: 'Vilka är de vanligaste bedrägerierna?',
        paragraphs: [
          'Ett vanligt upplägg är så kallade uppgiftsbedrägerier: du får enkla ”uppgifter” och ser ett växande saldo, men måste sätta in pengar för att kunna ta ut det. Ett annat är falska rekryterare som använder kända plattformars namn.',
          'Gemensamt är att någon förr eller senare ber dig betala, skicka personuppgifter eller logga in med BankID.',
        ],
      },
      {
        h2: 'Hur kontrollerar jag att plattformen är äkta?',
        paragraphs: [
          'Gå själv till den officiella webbplatsen, till exempel work.mercor.com eller mindrift.ai, och sök rollen där i stället för att klicka på länkar i meddelanden. Kontrollera avsändarens domän noggrant.',
          'Riktiga plattformar låter dig ansöka via sin egen webbplats och tar aldrig betalt för att du ska få arbeta.',
        ],
      },
      {
        h2: 'Var anmäler jag ett bedrägeri i Sverige?',
        paragraphs: [
          'Anmäl till Polisen via polisen.se eller telefon 114 14. Har du betalat något, kontakta din bank omedelbart för att försöka stoppa transaktionen.',
          'Hallå konsument, Konsumentverkets upplysningstjänst, ger råd om hur du går vidare och samlar varningar om aktuella bedrägerier.',
        ],
      },
      {
        h2: 'Vad gör jag om jag redan har lämnat ut uppgifter?',
        paragraphs: [
          'Spärra kort och byt lösenord direkt. Har du lämnat ut ID-handling kan du kontakta Polisen och följa deras råd om id-kapning.',
          'Spara skärmbilder, meddelanden och kontouppgifter. Det underlättar för både banken och Polisen.',
        ],
      },
    ],
    sources: [
      { label: 'Polisen – bedrägerier', url: 'https://polisen.se' },
      { label: 'Hallå konsument (Konsumentverket)', url: 'https://www.hallakonsument.se' },
      { label: 'Konsumentverket', url: 'https://www.konsumentverket.se' },
    ],
    faqs: [
      { question: 'Tar riktiga AI-plattformar betalt för att jag ska få jobba?', answer: 'Nej. Begär någon en avgift för start, utbildning eller utrustning är det en stark varningssignal.' },
      { question: 'Kan en rekryterare kontakta mig på WhatsApp?', answer: 'Det förekommer ofta i bedrägerier. Kontrollera alltid rollen på plattformens officiella webbplats.' },
      { question: 'Var anmäler jag?', answer: 'Till Polisen via polisen.se eller 114 14. Hallå konsument ger råd om nästa steg.' },
      { question: 'Får jag tillbaka pengarna?', answer: 'Det är inte säkert. Kontakta banken så snabbt som möjligt, eftersom det ökar chansen att stoppa en betalning.' },
    ],
  },

  'ai-training-for-phds-and-students': {
    ...META,
    slug: 'ai-training-for-phds-and-students',
    lang: 'sv',
    title: 'AI-träning för doktorander och studenter i Sverige',
    metaDescription:
      'Vilka AI-träningsuppdrag passar doktorander och studenter i Sverige? Publicerade intervall, landskrav och varför Handshake AI bara gäller i USA.',
    h1: 'Kan doktorander och studenter i Sverige jobba med AI-träning?',
    directAnswer:
      'Ja, per 2026-11-05 tar plattformar som Mercor och Mindrift emot sökande från EU, och fackkunskap från forskarutbildning efterfrågas i många projekt. Handshake AI Fellowship är däremot bara öppen för personer baserade i USA med giltigt arbetstillstånd.',
    hubSlug: '/for/general/',
    relatedGuides: ['ai-interview-preparation', 'remote-side-jobs-from-home', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Publicerade intervall som är relevanta för studenter och forskare (kontrollerat 2026-11-05)',
      headers: ['Plattform och roll', 'Publicerat intervall (USD)', 'Sverige/EU'],
      rows: [
        ['Mindrift – ingångsnivå', '$15–30/h (STEM upp till $6,400/mån)', 'Öppet (global distans)'],
        ['Mercor – Generalist Expert', '$40–70/h', 'Öppet (global distans)'],
        ['Alignerr – allmän/etik', '$40–120/h', 'Förbehåll: kontrollera ID-regler i FAQ'],
        ['Handshake AI – utvärdering', 'Upp till $17/h (filosofi-PhD upp till $120/h)', 'Endast USA'],
      ],
    },
    sections: [
      {
        h2: 'Varför efterfrågas doktorander i AI-träning?',
        paragraphs: [
          'Många projekt kräver att någon kan skriva och granska svåra frågor på forskningsnivå, till exempel inom matematik, naturvetenskap eller humaniora. Där är djup ämneskunskap viktigare än allmän erfarenhet.',
          'Uppgifterna handlar ofta om att hitta fel i modellens resonemang och förklara varför svaret är fel.',
        ],
      },
      {
        h2: 'Vilka plattformar passar studenter i Sverige?',
        paragraphs: [
          'Mindrift har ingångsuppgifter med publicerat intervall $15–30/h, och Mercor listar generalistroller med $40–70/h. Båda anger att de tar emot sökande globalt, med förbehåll för krav i enskilda projekt.',
          'Intervallen är publicerade bruttobelopp i US-dollar och garanterar varken ersättning eller arbetsmängd.',
        ],
      },
      {
        h2: 'Varför kan jag inte söka Handshake AI från Sverige?',
        paragraphs: [
          'Handshake AI Fellowship anger på sin officiella sida att deltagare måste vara baserade i USA och ha arbetstillstånd som Handshake kan stödja. Det utesluter normalt den som bor i Sverige.',
          'Studenter i USA med F-1-visum kan enligt sidan vara behöriga via CPT eller OPT, men STEM OPT stöds inte.',
        ],
      },
      {
        h2: 'Vad ska jag tänka på med studiemedel och anställning?',
        paragraphs: [
          'Inkomster kan påverka studiemedel från CSN om de överstiger fribeloppet. Kontrollera beloppet på csn.se innan du tar uppdrag.',
          'Är du anställd doktorand kan uppdrag räknas som bisyssla som du behöver anmäla till lärosätet. Kontrollera ditt lärosätes regler.',
        ],
      },
    ],
    sources: [
      { label: 'Handshake AI – programvillkor', url: 'https://joinhandshake.com/move-program/' },
      { label: 'Mindrift – officiell webbplats', url: 'https://mindrift.ai/' },
      { label: 'Mercor – officiell jobbsida', url: 'https://work.mercor.com' },
      { label: 'CSN – fribelopp', url: 'https://www.csn.se' },
    ],
    faqs: [
      { question: 'Måste jag ha doktorsexamen?', answer: 'Nej. Det finns ingångsuppgifter, men vissa specialistprojekt kräver avancerad ämneskunskap.' },
      { question: 'Är Handshake AI öppen i Sverige?', answer: 'Nej, per 2026-11-05 kräver Handshake AI Fellowship att du är baserad i USA med giltigt arbetstillstånd.' },
      { question: 'Påverkar uppdragen mitt studiemedel?', answer: 'Det kan de om inkomsten överstiger CSN:s fribelopp. Kontrollera på csn.se.' },
      { question: 'Hur mycket kan jag tjäna?', answer: 'Jag visar bara publicerade intervall, till exempel $15–30/h på ingångsnivå hos Mindrift. Ingen ersättning garanteras.' },
    ],
  },
};

// ---------------------------------------------------------------------------
// DE — Deutsch
// ---------------------------------------------------------------------------
const DE: Record<GuideSlug, GuidePageContent> = {
  'remote-side-jobs-from-home': {
    ...META,
    slug: 'remote-side-jobs-from-home',
    lang: 'de',
    title: 'Remote-Nebenjobs im KI-Training: Leitfaden für 2026',
    metaDescription:
      'Welche KI-Trainingsplattformen nehmen Freelancer aus Deutschland und der EU an? Veröffentlichte Stundensätze, Auszahlung und Länderregeln, Stand 2026-11-05.',
    h1: 'Welche Remote-Nebenjobs im KI-Training kann ich von zu Hause aus machen?',
    directAnswer:
      'Stand 2026-11-05 nehmen mehrere KI-Trainingsplattformen, darunter Mercor, Mindrift und Outlier, Auftragnehmer aus Deutschland und der übrigen EU für Remote-Arbeit an. Die Vergütung besteht aus veröffentlichten Spannen ohne Garantie, und du arbeitest selbstständig, nicht als Angestellter.',
    hubSlug: '/for/general/',
    relatedGuides: ['avoid-ai-job-scams', 'ai-interview-preparation', 'taxes-toiminimi-yel-finland'],
    table: {
      caption: 'Veröffentlichte Vergütungsspannen und Länderstatus (Quelle: offizielle Seiten, geprüft am 2026-11-05)',
      headers: ['Plattform', 'Veröffentlichte Spanne (USD)', 'Auszahlung', 'Deutschland/EU'],
      rows: [
        ['Mercor', '$35–180/h', 'Wöchentlich über Stripe', 'Offen (global remote)'],
        ['Mindrift', '$15–100+/h', 'Alle zwei Wochen, pro Aufgabe', 'Offen (gemäß Tolokas Länderbedingungen)'],
        ['Outlier', 'TBD (wird vor jedem Projekt angezeigt)', 'Wöchentlich über PayPal, AirTM oder ACH', 'Offen (50+ Länder)'],
        ['Alignerr', '$15–120/h', 'TBD (Einrichtung nach Freischaltung)', 'Vorbehalt: FAQ nennt US-Ausweisdokument'],
        ['micro1', 'TBD (je Auftrag)', 'TBD', 'Offen (globale Expertencommunity)'],
        ['Handshake AI', 'Bis zu $17–150/h', 'Pro Stunde', 'Nur USA'],
      ],
    },
    sections: [
      {
        h2: 'Was bedeutet KI-Training als Remote-Job?',
        paragraphs: [
          'KI-Training heißt, dass du Antworten bewertest, korrigierst oder selbst schreibst, die zur Bewertung und Verbesserung von Sprachmodellen dienen. Typische Aufgaben sind das Bewerten von Antworten nach einem Bewertungsschema, das Formulieren schwieriger Fragen aus deinem Fachgebiet oder das schrittweise Prüfen von Argumentationen.',
          'Die Arbeit läuft komplett remote und meist projektbezogen. Das Arbeitsvolumen schwankt zwischen Projekten und Wochen, deshalb sehe ich es als Nebentätigkeit und nicht als stabile Einkommensquelle.',
        ],
      },
      {
        h2: 'Welche Plattformen nehmen Bewerber aus Deutschland an?',
        paragraphs: [
          'Laut den offiziellen Seiten der Plattformen sind Mercor, Mindrift, Outlier und micro1 Stand 2026-11-05 für Bewerber aus der EU offen, vorbehaltlich der Anforderungen einzelner Projekte. Alignerr begrüßt Bewerber weltweit, laut FAQ akzeptiert die Identitätsprüfung aber nur US-Ausweisdokumente. Prüfe das, bevor du Zeit in die Bewerbung steckst.',
          'Das Handshake AI Fellowship setzt voraus, dass du in den USA ansässig bist und eine gültige Arbeitserlaubnis hast. Für Menschen mit Wohnsitz in Deutschland kommt es daher nicht infrage.',
        ],
      },
      {
        h2: 'Wie viel zahlen Jobs im KI-Training?',
        paragraphs: [
          'Ich gebe nur Spannen wieder, die die Plattformen selbst veröffentlichen: zum Beispiel bei Mercor $40–70/h für Generalisten und $35–50/h für Sprach- und Audioexperten oder bei Mindrift $15–30/h auf Einstiegsniveau. Das sind Bruttobeträge in US-Dollar vor Steuern und Sozialabgaben.',
          'Die Spannen sind keine Zusagen. Deine tatsächliche Vergütung hängt vom Projekt, der anerkannten Arbeitszeit, der Qualitätsprüfung und der verfügbaren Arbeitsmenge ab.',
        ],
      },
      {
        h2: 'Was muss ich vor dem Start klären?',
        paragraphs: [
          'Du stellst als Auftragnehmer Rechnungen, deshalb musst du deine selbstständige Tätigkeit in Deutschland beim Finanzamt melden. Je nach Einstufung als Freiberufler oder Gewerbe brauchst du zusätzlich eine Gewerbeanmeldung. Details stehen im Steuer-Leitfaden; im Zweifel frag dein Finanzamt.',
          'Wenn du Arbeitslosengeld beziehst, musst du die Tätigkeit der Bundesagentur für Arbeit melden, bevor du anfängst. Prüfe außerdem, ob die Plattform echt ist: Seriöse Plattformen verlangen nie Geld dafür, dass du arbeiten darfst.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – offizielle Jobseite', url: 'https://work.mercor.com' },
      { label: 'Mindrift – offizielle Website', url: 'https://mindrift.ai/' },
      { label: 'Outlier – offizielle Website', url: 'https://outlier.ai/' },
      { label: 'Handshake AI – Programmbedingungen', url: 'https://joinhandshake.com/move-program/' },
    ],
    faqs: [
      { question: 'Kann ich von Deutschland aus im KI-Training arbeiten?', answer: 'Ja, mehrere Plattformen wie Mercor, Mindrift und Outlier geben Stand 2026-11-05 an, Bewerber aus der EU anzunehmen. Einzelne Projekte können eigene Anforderungen haben.' },
      { question: 'Ist die Vergütung garantiert?', answer: 'Nein. Die Beträge, die ich zeige, sind veröffentlichte Spannen von den Seiten der Plattformen und garantieren weder Stundensatz noch Arbeitsmenge.' },
      { question: 'Werde ich bei der Plattform angestellt?', answer: 'Nein, in der Regel arbeitest du als selbstständiger Auftragnehmer und bist selbst für Steuern und Abgaben verantwortlich.' },
      { question: 'Muss ich zahlen, um anzufangen?', answer: 'Nein. Eine seriöse Plattform verlangt nie Geld für Bewerbung, Schulung oder Ausrüstung. Wird Geld verlangt, ist das ein Warnsignal.' },
    ],
  },

  'taxes-toiminimi-yel-finland': {
    ...META,
    slug: 'taxes-toiminimi-yel-finland',
    lang: 'de',
    title: 'Steuern auf KI-Aufträge in Deutschland: Finanzamt & Co.',
    metaDescription:
      'So funktionieren Steuern für KI-Trainingsaufträge in Deutschland: Finanzamt, Freiberufler oder Gewerbe, Kleinunternehmerregelung und ein Hinweis zu Finnland.',
    h1: 'Wie versteuere ich KI-Aufträge von ausländischen Plattformen?',
    directAnswer:
      'Stand 2026-11-05 musst du als in Deutschland wohnhafte Person, die ausländischen KI-Plattformen Rechnungen stellt, deine selbstständige Tätigkeit beim Finanzamt anmelden, entweder als Freiberufler oder als Gewerbe. Wohnst du in Finnland, gelten stattdessen Vero.fi und gegebenenfalls die YEL-Versicherung; dies ist keine Steuerberatung.',
    hubSlug: '/for/finance/',
    relatedGuides: ['unemployment-benefits-ai-work', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Behörden und Grundbegriffe für Selbstständige (geprüft am 2026-11-05)',
      headers: ['Frage', 'Deutschland', 'Finnland (wenn du dort wohnst)'],
      rows: [
        ['Steuerbehörde', 'Finanzamt', 'Finnische Steuerverwaltung (Vero.fi)'],
        ['Übliche Form', 'Freiberufler oder Einzelunternehmen (Gewerbe)', 'Toiminimi (Einzelunternehmen)'],
        ['Anmeldung', 'Fragebogen zur steuerlichen Erfassung über ELSTER; bei Gewerbe zusätzlich Gewerbeamt', 'ytj.fi'],
        ['Umsatzsteuer für Kleinbetriebe', 'Kleinunternehmerregelung (§ 19 UStG)', 'Eigene finnische Regeln über Vero.fi'],
        ['Rentenversicherung', 'Für viele Selbstständige freiwillig, Ausnahmen möglich', 'YEL, Pflicht ab Arbeitseinkommen 9.423 €/Jahr (2026)'],
      ],
    },
    sections: [
      {
        h2: 'Bin ich bei KI-Training Freiberufler oder Gewerbetreibender?',
        paragraphs: [
          'Die KI-Plattformen bezahlen dich als selbstständigen Auftragnehmer und behalten in der Regel keine deutsche Steuer ein. Du meldest die Tätigkeit deshalb über den Fragebogen zur steuerlichen Erfassung in ELSTER beim Finanzamt an.',
          'Ob die Tätigkeit freiberuflich oder gewerblich ist, entscheidet das Finanzamt anhand deiner konkreten Aufgaben. Als Gewerbe brauchst du zusätzlich eine Gewerbeanmeldung beim Gewerbeamt. Ich empfehle, die Einstufung mit dem Finanzamt oder einer Steuerberatung zu klären.',
        ],
      },
      {
        h2: 'Wie funktioniert die Umsatzsteuer bei Kunden im Ausland?',
        paragraphs: [
          'Dienstleistungen an Unternehmen im Ausland werden oft im Land des Empfängers besteuert, sodass du ohne deutsche Umsatzsteuer abrechnest. Entscheidend ist, ob der Kunde ein Unternehmen ist und wo es seinen Sitz hat.',
          'Mit der Kleinunternehmerregelung kannst du bei geringen Umsätzen auf das Ausweisen von Umsatzsteuer verzichten. Die aktuellen Umsatzgrenzen und was für deine Kunden gilt, findest du beim Finanzamt bzw. auf den Seiten des Bundesfinanzministeriums.',
        ],
      },
      {
        h2: 'Wie gehe ich mit Zahlungen in US-Dollar um?',
        paragraphs: [
          'Die Einnahmen werden in Euro erfasst. Bewahre Rechnungen, Auszahlungsbelege und den verwendeten Wechselkurs auf, zum Beispiel den Kurs am Zahlungstag.',
          'Gebühren von Zahlungsdiensten wie Stripe oder PayPal können als Betriebsausgaben absetzbar sein. Deinen Gewinn ermittelst du in der Regel über die Einnahmenüberschussrechnung (EÜR).',
        ],
      },
      {
        h2: 'Was gilt, wenn ich in Finnland wohne?',
        paragraphs: [
          'Wohnst du in Finnland, ist die finnische Steuerverwaltung (Vero.fi) zuständig. Viele melden eine Toiminimi an und lassen sich über ytj.fi in das Vorauszahlungsregister eintragen.',
          'Die YEL-Versicherung ist Pflicht, sobald dein festgesetztes Arbeitseinkommen 9.423 € pro Jahr (2026) erreicht. Das sind allgemeine Informationen und keine Steuerberatung.',
        ],
      },
    ],
    sources: [
      { label: 'ELSTER – Fragebogen zur steuerlichen Erfassung', url: 'https://www.elster.de' },
      { label: 'Bundesministerium der Finanzen', url: 'https://www.bundesfinanzministerium.de' },
      { label: 'Vero.fi – Finnische Steuerverwaltung (Englisch)', url: 'https://www.vero.fi/en/' },
    ],
    faqs: [
      { question: 'Ist das eine Steuerberatung?', answer: 'Nein. Das sind allgemeine Informationen, Stand 2026-11-05. Wende dich für deinen Fall an das Finanzamt oder eine Steuerberatung.' },
      { question: 'Zieht die Plattform Steuern für mich ab?', answer: 'In der Regel nicht. Ausländische Plattformen zahlen Auftragnehmern Bruttobeträge, und du bist selbst für Steuern und Abgaben verantwortlich.' },
      { question: 'Brauche ich eine Gewerbeanmeldung?', answer: 'Nur wenn deine Tätigkeit als Gewerbe gilt. Als Freiberufler genügt die Anmeldung beim Finanzamt. Die Einstufung hängt von deinen konkreten Aufgaben ab.' },
      { question: 'Was ist YEL?', answer: 'YEL ist die finnische Rentenversicherung für Selbstständige. Sie gilt nur, wenn du in Finnland wohnst und dort selbstständig arbeitest, ab einem Arbeitseinkommen von 9.423 €/Jahr (2026).' },
    ],
  },

  'unemployment-benefits-ai-work': {
    ...META,
    slug: 'unemployment-benefits-ai-work',
    lang: 'de',
    title: 'Arbeitslosengeld und KI-Aufträge: Was du melden musst',
    metaDescription:
      'Du beziehst Arbeitslosengeld und willst KI-Trainingsaufträge annehmen? So meldest du die Tätigkeit vor Beginn bei der Bundesagentur für Arbeit, Stand 2026-11-05.',
    h1: 'Darf ich KI-Aufträge annehmen, während ich Arbeitslosengeld beziehe?',
    directAnswer:
      'Stand 2026-11-05 können KI-Aufträge dein Arbeitslosengeld beeinflussen, und du musst die Tätigkeit der Bundesagentur für Arbeit melden, bevor du anfängst. Ob die Leistung gekürzt wird oder entfällt, entscheidet die Agentur anhand deiner Situation.',
    hubSlug: '/for/general/',
    relatedGuides: ['taxes-toiminimi-yel-finland', 'remote-side-jobs-from-home', 'avoid-ai-job-scams'],
    table: {
      caption: 'Wer macht was, wenn du in Deutschland arbeitslos gemeldet bist (geprüft am 2026-11-05)',
      headers: ['Stelle', 'Rolle', 'Was du tust'],
      rows: [
        ['Bundesagentur für Arbeit', 'Entscheidet über Arbeitslosengeld', 'Nebentätigkeit oder Selbstständigkeit vor Beginn melden'],
        ['Jobcenter', 'Zuständig bei Bürgergeld', 'Einkommen und Tätigkeit vorab mitteilen'],
        ['Finanzamt', 'Steuerliche Erfassung', 'Selbstständige Tätigkeit über ELSTER anmelden'],
      ],
    },
    sections: [
      {
        h2: 'Muss ich KI-Aufträge der Agentur für Arbeit melden?',
        paragraphs: [
          'Ja. Jede Tätigkeit, auch kurze Remote-Aufträge als Freelancer, musst du der Bundesagentur für Arbeit melden. Tu das, bevor du anfängst, damit die Agentur prüfen kann, wie sich der Auftrag auf deinen Anspruch auswirkt.',
          'Arbeitszeit und Einkommen gibst du für den Zeitraum an, in dem du sie leistest bzw. erzielst. Nicht gemeldete Tätigkeiten können zu Rückforderungen führen.',
        ],
      },
      {
        h2: 'Zählen KI-Aufträge als Nebentätigkeit oder Selbstständigkeit?',
        paragraphs: [
          'Stellst du Rechnungen als Selbstständiger, behandelt die Agentur das als selbstständige Nebentätigkeit. Dabei spielen sowohl die wöchentliche Arbeitszeit als auch das Einkommen eine Rolle.',
          'Eine Selbstständigkeit, die während der Arbeitslosigkeit neu beginnt, wird oft anders bewertet als eine bereits bestehende. Frag die Agentur, welche Regeln gelten, bevor du die Tätigkeit beim Finanzamt anmeldest.',
        ],
      },
      {
        h2: 'Was gilt beim Bürgergeld?',
        paragraphs: [
          'Beziehst du Bürgergeld, ist das Jobcenter zuständig. Auch hier musst du Einkommen aus KI-Aufträgen vorab mitteilen, weil es auf die Leistung angerechnet werden kann.',
          'Das Jobcenter und die Agentur für Arbeit sind unterschiedliche Stellen. Kläre, welche für dich zuständig ist.',
        ],
      },
      {
        h2: 'Wie vermeide ich Rückforderungen?',
        paragraphs: [
          'Bewahre schriftliche Bescheide auf, notiere deine Arbeitsstunden pro Tag und speichere die Auszahlungsbelege der Plattform. So kannst du jederzeit belegen, was du gearbeitet hast.',
          'Projektarbeit schwankt stark. Rechne nicht mit einer bestimmten Arbeitsmenge und melde die tatsächliche Zeit statt Schätzungen.',
        ],
      },
    ],
    sources: [
      { label: 'Bundesagentur für Arbeit', url: 'https://www.arbeitsagentur.de' },
      { label: 'Jobcenter – Bürgergeld', url: 'https://www.jobcenter-ge.de' },
      { label: 'ELSTER – Finanzverwaltung online', url: 'https://www.elster.de' },
    ],
    faqs: [
      { question: 'Kann ich mein Arbeitslosengeld verlieren, wenn ich KI-Aufträge annehme?', answer: 'Es kann die Leistung beeinflussen. Die Agentur für Arbeit prüft deinen Einzelfall, deshalb meldest du den Auftrag vor Beginn.' },
      { question: 'Reicht es, das Finanzamt zu informieren?', answer: 'Nein. Über das Arbeitslosengeld entscheidet die Agentur für Arbeit, also musst du sowohl die Agentur als auch das Finanzamt informieren.' },
      { question: 'Gilt das auch für kurze Testaufgaben?', answer: 'Bezahlte Arbeit musst du unabhängig von der Dauer melden. Frag die Agentur, wenn du unsicher bist, wie eine unbezahlte Testaufgabe behandelt wird.' },
      { question: 'Ist das eine Rechtsberatung?', answer: 'Nein, das sind allgemeine Informationen, Stand 2026-11-05. Verbindliche Auskunft gibt dir die Agentur für Arbeit.' },
    ],
  },

  'ai-interview-preparation': {
    ...META,
    slug: 'ai-interview-preparation',
    lang: 'de',
    title: 'KI-Interview: So bereite ich mich auf Plattform-Tests vor',
    metaDescription:
      'So bereitest du dich auf KI-Interviews und Wissenstests bei KI-Trainingsplattformen vor: Technik, Antwortstruktur, Sprache und typische Fehler.',
    h1: 'Wie bereite ich mich auf ein KI-Interview bei einer KI-Trainingsplattform vor?',
    directAnswer:
      'Stand 2026-11-05 setzen mehrere KI-Trainingsplattformen automatisierte Interviews oder Wissenstests ein, und die beste Vorbereitung ist, deine Gedankengänge in deinem eigenen Fachgebiet klar und konkret erklären zu üben. Prüfe außerdem vorab Technik, Ton und Ausweisdokument.',
    hubSlug: '/for/software/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-training-for-phds-and-students', 'avoid-ai-job-scams'],
    table: {
      caption: 'Checkliste vor einem KI-Interview oder Wissenstest',
      headers: ['Bereich', 'Was ich prüfe', 'Warum'],
      rows: [
        ['Technik', 'Webcam, Mikrofon, stabile Verbindung', 'Abbrüche können ein zeitlich begrenztes Interview beenden'],
        ['Identität', 'Gültiges Ausweisdokument, das die Plattform akzeptiert', 'Manche Plattformen haben länderspezifische Ausweisregeln'],
        ['Fachgebiet', 'Konkrete Beispiele aus eigener Arbeit', 'Die Fragen prüfen echte Expertise'],
        ['Sprache', 'Antworten in der geforderten Sprache', 'Sprachprojekte bewerten auch die Sprachqualität'],
      ],
    },
    sections: [
      {
        h2: 'Was ist ein KI-Interview?',
        paragraphs: [
          'Ein KI-Interview ist ein automatisiertes Gespräch, in dem ein Sprach- oder Chatassistent Fragen stellt und deine Antworten aufzeichnet. Die Antworten werden anschließend geprüft, um dich passenden Projekten zuzuordnen.',
          'Manche Plattformen nutzen stattdessen schriftliche Tests oder Probeaufgaben mit Bewertungsschemata. Lies die Anweisungen immer genau, bevor du startest.',
        ],
      },
      {
        h2: 'Wie strukturiere ich meine Antworten?',
        paragraphs: [
          'Ich beginne mit der direkten Antwort, erkläre dann meinen Gedankengang und schließe mit einem konkreten Beispiel. So lassen sich die Antworten leicht bewerten.',
          'Sei ehrlich, wo deine Kompetenz endet. Zu sagen, was du nicht weißt und wie du es herausfinden würdest, ist besser als zu raten.',
        ],
      },
      {
        h2: 'Wie bereite ich mich technisch vor?',
        paragraphs: [
          'Teste Kamera und Mikrofon im Browser, schalte Benachrichtigungen aus und setz dich in einen ruhigen Raum. Halte dein Ausweisdokument bereit, falls eine Identitätsprüfung dazugehört.',
          'Prüfe die Ausweisregeln der Plattform vorab. Laut Alignerr-FAQ werden bei der Identitätsprüfung zum Beispiel nur US-Ausweisdokumente akzeptiert.',
        ],
      },
      {
        h2: 'Welche Fehler sollte ich vermeiden?',
        paragraphs: [
          'Nutze während eines Interviews oder Tests keine KI-Tools, um Antworten zu erzeugen, sofern das nicht ausdrücklich erlaubt ist. Plattformen können die Zusammenarbeit bei Verstößen beenden.',
          'Sei misstrauisch, wenn ein „Interview“ über eine unbekannte Chat-App läuft oder eine Zahlung verlangt. Echte Interviews startest du über die offizielle Website der Plattform.',
        ],
      },
    ],
    sources: [
      { label: 'Mercor – offizielle Jobseite', url: 'https://work.mercor.com' },
      { label: 'micro1 – Experten', url: 'https://www.micro1.ai/experts' },
      { label: 'Alignerr – offizielle Website', url: 'https://www.alignerr.com/' },
    ],
    faqs: [
      { question: 'Wie lange dauert ein KI-Interview?', answer: 'Das hängt von Plattform und Rolle ab. Die Plattform nennt den Zeitrahmen normalerweise, bevor du beginnst.' },
      { question: 'Kann ich das Interview wiederholen?', answer: 'Das hängt von der Plattform ab. Geh davon aus, dass du nur einen Versuch hast, und bereite dich entsprechend vor.' },
      { question: 'In welcher Sprache findet das Interview statt?', answer: 'Oft auf Englisch, aber Sprachprojekte können dich in der Zielsprache testen, zum Beispiel auf Deutsch.' },
      { question: 'Garantiert ein bestandenes Interview Arbeit?', answer: 'Nein. Es macht dich für Projekte verfügbar, aber die Arbeitsmenge ist nicht garantiert.' },
    ],
  },

  'avoid-ai-job-scams': {
    ...META,
    slug: 'avoid-ai-job-scams',
    lang: 'de',
    title: 'Betrug mit KI-Jobs: Warnzeichen und wo du ihn meldest',
    metaDescription:
      'So erkennst du gefälschte KI-Trainingsjobs: Gebühren, Chat-Apps und Krypto-Zahlungen. Wo du Betrug in Deutschland meldest: Polizei, Verbraucherzentrale, BSI.',
    h1: 'Wie erkenne ich einen gefälschten KI-Trainingsjob?',
    directAnswer:
      'Stand 2026-11-05 sind die deutlichsten Warnzeichen, dass jemand Geld von dir verlangt, dich über unbekannte Chat-Apps kontaktiert oder hohe Vergütung ohne Bewerbung verspricht. Erstatte Anzeige bei der Polizei und hol dir Rat bei der Verbraucherzentrale und beim BSI.',
    hubSlug: '/for/legal/',
    relatedGuides: ['remote-side-jobs-from-home', 'ai-interview-preparation', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Warnzeichen und was ich tue (geprüft am 2026-11-05)',
      headers: ['Warnzeichen', 'Warum es riskant ist', 'Maßnahme'],
      rows: [
        ['Gebühr für Start, Schulung oder Ausrüstung', 'Seriöse Plattformen verlangen kein Geld von Auftragnehmern', 'Nicht zahlen, Kontakt abbrechen'],
        ['Kontakt über WhatsApp oder Telegram', 'Typisch für Betrüger, die sich als Recruiter ausgeben', 'Offizielle Website der Plattform selbst aufrufen'],
        ['Krypto-Einzahlung, um Lohn „freizuschalten“', 'Typischer Aufgabenbetrug (Task-Scam)', 'Anzeige bei der Polizei'],
        ['Anfrage nach Online-Banking-Zugang oder Kartendaten', 'Kann Betrügern Zugriff auf deine Konten geben', 'Sofort die Bank kontaktieren'],
      ],
    },
    sections: [
      {
        h2: 'Welche Betrugsmaschen sind am häufigsten?',
        paragraphs: [
          'Eine verbreitete Masche ist der sogenannte Aufgabenbetrug: Du bekommst einfache „Aufgaben“ und siehst ein wachsendes Guthaben, musst aber Geld einzahlen, um es auszahlen zu lassen. Eine andere sind falsche Recruiter, die die Namen bekannter Plattformen missbrauchen.',
          'Gemeinsam ist allen, dass dich früher oder später jemand bittet, zu zahlen, persönliche Daten zu schicken oder dich mit deinen Bankdaten anzumelden.',
        ],
      },
      {
        h2: 'Wie prüfe ich, ob eine Plattform echt ist?',
        paragraphs: [
          'Ruf die offizielle Website selbst auf, zum Beispiel work.mercor.com oder mindrift.ai, und such die Stelle dort, statt auf Links in Nachrichten zu klicken. Prüfe die Domain des Absenders genau.',
          'Echte Plattformen lassen dich über ihre eigene Website bewerben und verlangen nie Geld dafür, dass du arbeiten darfst.',
        ],
      },
      {
        h2: 'Wo melde ich Betrug in Deutschland?',
        paragraphs: [
          'Erstatte Anzeige bei der Polizei, auch online über die Onlinewache deines Bundeslandes. Hast du bereits gezahlt, kontaktiere sofort deine Bank, um die Zahlung möglichst noch zu stoppen.',
          'Die Verbraucherzentrale berät dich zum weiteren Vorgehen und warnt vor aktuellen Maschen. Das Bundesamt für Sicherheit in der Informationstechnik (BSI) gibt Hinweise zum Schutz vor Phishing und Online-Betrug.',
        ],
      },
      {
        h2: 'Was tue ich, wenn ich schon Daten herausgegeben habe?',
        paragraphs: [
          'Lass Karten sperren und ändere sofort deine Passwörter. Hast du eine Ausweiskopie verschickt, informiere die Polizei und folge ihren Hinweisen zum Identitätsdiebstahl.',
          'Sichere Screenshots, Nachrichten und Kontodaten. Das hilft sowohl der Bank als auch der Polizei.',
        ],
      },
    ],
    sources: [
      { label: 'Polizei – Onlinewachen der Länder', url: 'https://www.polizei.de' },
      { label: 'Verbraucherzentrale', url: 'https://www.verbraucherzentrale.de' },
      { label: 'BSI – Bundesamt für Sicherheit in der Informationstechnik', url: 'https://www.bsi.bund.de' },
    ],
    faqs: [
      { question: 'Verlangen echte KI-Plattformen Geld, damit ich arbeiten darf?', answer: 'Nein. Verlangt jemand eine Gebühr für Start, Schulung oder Ausrüstung, ist das ein starkes Warnsignal.' },
      { question: 'Darf mich ein Recruiter über WhatsApp kontaktieren?', answer: 'Das kommt bei Betrug häufig vor. Prüfe die Stelle immer auf der offiziellen Website der Plattform.' },
      { question: 'Wo melde ich Betrug?', answer: 'Bei der Polizei, auch über die Onlinewache deines Bundeslandes. Die Verbraucherzentrale berät dich zu den nächsten Schritten.' },
      { question: 'Bekomme ich mein Geld zurück?', answer: 'Das ist nicht sicher. Kontaktiere die Bank so schnell wie möglich, denn das erhöht die Chance, eine Zahlung zu stoppen.' },
    ],
  },

  'ai-training-for-phds-and-students': {
    ...META,
    slug: 'ai-training-for-phds-and-students',
    lang: 'de',
    title: 'KI-Training für Promovierende und Studierende in Deutschland',
    metaDescription:
      'Welche KI-Trainingsaufträge passen zu Promovierenden und Studierenden in Deutschland? Veröffentlichte Spannen, Länderregeln und warum Handshake AI nur in den USA gilt.',
    h1: 'Können Promovierende und Studierende in Deutschland im KI-Training arbeiten?',
    directAnswer:
      'Ja, Stand 2026-11-05 nehmen Plattformen wie Mercor und Mindrift Bewerber aus der EU an, und Fachwissen aus der Promotion ist in vielen Projekten gefragt. Das Handshake AI Fellowship steht dagegen nur Personen offen, die in den USA ansässig sind und eine gültige Arbeitserlaubnis haben.',
    hubSlug: '/for/general/',
    relatedGuides: ['ai-interview-preparation', 'remote-side-jobs-from-home', 'unemployment-benefits-ai-work'],
    table: {
      caption: 'Veröffentlichte Spannen, die für Studierende und Forschende relevant sind (geprüft am 2026-11-05)',
      headers: ['Plattform und Rolle', 'Veröffentlichte Spanne (USD)', 'Deutschland/EU'],
      rows: [
        ['Mindrift – Einstiegsniveau', '$15–30/h (STEM bis zu $6.400/Monat)', 'Offen (global remote)'],
        ['Mercor – Generalist Expert', '$40–70/h', 'Offen (global remote)'],
        ['Alignerr – Allgemein/Ethik', '$40–120/h', 'Vorbehalt: Ausweisregeln in der FAQ prüfen'],
        ['Handshake AI – Evaluation', 'Bis zu $17/h (Philosophie-PhD bis zu $120/h)', 'Nur USA'],
      ],
    },
    sections: [
      {
        h2: 'Warum sind Promovierende im KI-Training gefragt?',
        paragraphs: [
          'Viele Projekte brauchen jemanden, der schwierige Fragen auf Forschungsniveau schreiben und prüfen kann, etwa in Mathematik, Naturwissenschaften oder Geisteswissenschaften. Dort zählt tiefes Fachwissen mehr als allgemeine Berufserfahrung.',
          'Oft geht es darum, Fehler in der Argumentation des Modells zu finden und zu erklären, warum die Antwort falsch ist.',
        ],
      },
      {
        h2: 'Welche Plattformen passen für Studierende in Deutschland?',
        paragraphs: [
          'Mindrift bietet Einstiegsaufgaben mit einer veröffentlichten Spanne von $15–30/h, und Mercor listet Generalistenrollen mit $40–70/h. Beide geben an, Bewerber weltweit anzunehmen, vorbehaltlich der Anforderungen einzelner Projekte.',
          'Die Spannen sind veröffentlichte Bruttobeträge in US-Dollar und garantieren weder Vergütung noch Arbeitsmenge.',
        ],
      },
      {
        h2: 'Warum kann ich mich aus Deutschland nicht bei Handshake AI bewerben?',
        paragraphs: [
          'Das Handshake AI Fellowship gibt auf seiner offiziellen Seite an, dass Teilnehmende in den USA ansässig sein und eine Arbeitserlaubnis haben müssen, die Handshake unterstützen kann. Das schließt Menschen mit Wohnsitz in Deutschland in der Regel aus.',
          'Studierende in den USA mit F-1-Visum können laut der Seite über CPT oder OPT berechtigt sein, STEM OPT wird jedoch nicht unterstützt.',
        ],
      },
      {
        h2: 'Was muss ich bei BAföG, Versicherung und Anstellung beachten?',
        paragraphs: [
          'Einkommen kann auf das BAföG angerechnet werden und deinen Status in der studentischen Krankenversicherung berühren. Prüfe die aktuellen Grenzen bei deinem BAföG-Amt und deiner Krankenkasse, bevor du Aufträge annimmst.',
          'Bist du als Promovierende(r) an einer Hochschule angestellt, kann ein Auftrag als Nebentätigkeit gelten, die du anzeigen musst. Prüfe die Regeln deiner Hochschule.',
        ],
      },
    ],
    sources: [
      { label: 'Handshake AI – Programmbedingungen', url: 'https://joinhandshake.com/move-program/' },
      { label: 'Mindrift – offizielle Website', url: 'https://mindrift.ai/' },
      { label: 'Mercor – offizielle Jobseite', url: 'https://work.mercor.com' },
      { label: 'BAföG – offizielle Informationen', url: 'https://www.bafög.de' },
    ],
    faqs: [
      { question: 'Brauche ich einen Doktortitel?', answer: 'Nein. Es gibt Einstiegsaufgaben, aber manche Spezialprojekte verlangen fortgeschrittenes Fachwissen.' },
      { question: 'Ist Handshake AI in Deutschland offen?', answer: 'Nein, Stand 2026-11-05 setzt das Handshake AI Fellowship voraus, dass du in den USA ansässig bist und eine gültige Arbeitserlaubnis hast.' },
      { question: 'Beeinflussen die Aufträge mein BAföG?', answer: 'Das kann passieren, wenn dein Einkommen die Freibeträge übersteigt. Prüfe das bei deinem BAföG-Amt.' },
      { question: 'Wie viel kann ich verdienen?', answer: 'Ich zeige nur veröffentlichte Spannen, zum Beispiel $15–30/h auf Einstiegsniveau bei Mindrift. Eine Vergütung ist nicht garantiert.' },
    ],
  },
};

export const GUIDES_EU = { sv: SV, de: DE };
