import type { AudienceSlug, Lang } from '../i18n';

export interface AudiencePageContent {
  slug: AudienceSlug;
  lang: Lang;
  reviewStatus: 'APPROVED' | 'NEEDS NATIVE REVIEW' | 'NEEDS CONTENT';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  paragraphs: [string, string, string];
  checklist: [string, string, string, string];
  faqs: Array<{ question: string; answer: string }>;
}

export const AUDIENCE_PAGES: Record<AudienceSlug, Record<Lang, AudiencePageContent>> = {
  software: {
    en: {
      slug: 'software',
      lang: 'en',
      reviewStatus: 'APPROVED',
      metaTitle: 'AI-Training Work for Software Engineers — Edithsi',
      metaDescription: 'Remote AI-training roles for software engineers in Finland and Europe ($70–150/h posted on 2026-11-05, not guaranteed). Read what the work involves.',
      h1: 'AI-training work for software engineers',
      paragraphs: [
        'As a software engineer on AI-training projects, your work centres on code evaluation, multi-file debugging, repository-level refactoring prompts, and grading model-generated pull requests against strict test suites. Instead of building features for a single product roadmap, you write realistic engineering tasks, verify whether large language models introduce subtle concurrency or security bugs, and document clear step-by-step reasoning.',
        'The skills that matter most are hands-on experience shipping production software in languages such as Python, TypeScript, Go, Rust, Java, or C++, reading unfamiliar codebases quickly, and writing reproducible unit tests. The posted rate for the Software Engineering Expert listing on 2026-11-05 is $70–150/h, paid weekly in US dollars via Stripe as an independent contractor.',
        'Keep your expectations realistic before applying: applying is free, but work is never guaranteed. Many qualified developers complete the application and wait weeks in the talent pool or receive no project offer at all, depending on which programming languages and frameworks AI labs are benchmarking that month.'
      ],
      checklist: [
        'An updated CV and GitHub or portfolio showing production software you have built and shipped.',
        'Strong fluency in at least one mainstream stack (such as Python, TypeScript, Go, Rust, C++, or Java) plus automated testing.',
        'A quiet setup and working microphone for the automated technical assessment and code-explanation interview.',
        'Understanding of your local contractor tax rules (in Finland: toiminimi, prepayment tax, and YEL from EUR 9,423/year work income in 2026; report self-employment before starting if on unemployment benefit).'
      ],
      faqs: [
        {
          question: 'What is the posted pay range for Software Engineering Expert?',
          answer: 'On 2026-11-05, the posted rate is $70–150/h (not guaranteed), paid weekly in US dollars via Stripe as an independent contractor.'
        },
        {
          question: 'Do I need a GitHub profile or production engineering experience?',
          answer: 'The Software Engineering Expert listing targets engineers who build and ship software; demonstrating shipped code, repositories, or production systems experience strengthens your application.'
        },
        {
          question: 'Am I guaranteed project hours if I pass the coding screening?',
          answer: 'No. Work is not guaranteed; many engineers wait weeks in the pool or get no project.'
        }
      ]
    },
    fi: {
      slug: 'software',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      metaTitle: 'Tekoälytyö ohjelmistokehittäjille (2026) — Edithsi',
      metaDescription: 'Etätyönä tehtävä tekoälyn koulutustyö ohjelmistokehittäjille Suomessa ($70–150/h ilmoitettu 2026-11-05, ei taattu). Lue mitä työ sisältää.',
      h1: 'Tekoälytyö ohjelmistokehittäjille ja IT-osaajille',
      paragraphs: [
        'Ohjelmistokehittäjänä tekoälyn koulutusprojekteissa työsi keskittyy koodin arviointiin, monen tiedoston virheenkorjaukseen, arkkitehtuuritasoisten kehotteiden laatimiseen sekä kielimallien tuottamien koodimuutosten tarkistamiseen testiautomaation avulla. Sen sijaan, että rakentaisit yhtä tuotetta, suunnittelet realistisia ohjelmistotehtäviä ja arvioit, tuottaako malli tietoturva-aukkoja tai reunatapausten virheitä.',
        'Tärkeimpiä taitoja ovat käytännön kokemus tuotanto-ohjelmistojen rakentamisesta ja julkaisemisesta (esimerkiksi Python, TypeScript, Go, Rust, Java tai C++), kyky hahmottaa vierasta koodikantaa nopeasti sekä selkeä tekninen kirjoittaminen englanniksi. Software Engineering Expert -tehtävän ilmoitettu palkkioväli 2026-11-05 on $70–150/h, ja palkkiot maksetaan itsenäisenä toimeksiantajana viikoittain Stripen kautta Yhdysvaltain dollareissa.',
        'Pidä odotukset realistisina ennen hakemista: hakeminen on täysin ilmaista, mutta työtä ei koskaan taata. Monet kokeneetkin kehittäjät odottavat osaajapoolissa viikkoja tai jäävät kokonaan ilman projektia sen mukaan, mitä ohjelmointikieliä asiakasprojektit kulloinkin painottavat.'
      ],
      checklist: [
        'Ajantasainen CV sekä GitHub-profiili tai työnäytteet julkaistuista tuotanto-ohjelmistoista.',
        'Vahva osaaminen vähintään yhdestä pääkielestä (esim. Python, TypeScript, Go, Rust, C++ tai Java) ja yksikkötestauksesta.',
        'Rauhallinen tila ja toimiva mikrofoni automaattista teknistä haastattelua varten.',
        'Oman verotuksen ja etuuksien huomioiminen Suomessa: toiminimi, ennakkovero, YEL-vakuutus 9 423 €/v työtulosta (2026) sekä ilmoitus ennen aloitusta, jos saat työttömyysetuutta.'
      ],
      faqs: [
        {
          question: 'Mikä on ohjelmistokehittäjän ilmoitettu tuntipalkkio?',
          answer: 'Tarkistuspäivänä 2026-11-05 Software Engineering Expert -tehtävän ilmoitettu vaihteluväli on $70–150/h (ei taattu), maksettuna viikoittain Stripen kautta US-dollareissa.'
        },
        {
          question: 'Tarvitsenko GitHub-profiilin tai kokemusta tuotantokoodista?',
          answer: 'Tehtävä on suunnattu kehittäjille, jotka rakentavat ja julkaisevat ohjelmistoja; GitHub-näytteet ja selkeästi kuvattu tuotantokokemus tukevat hakemusta.'
        },
        {
          question: 'Takaako haastattelun läpäiseminen työtunteja?',
          answer: 'Ei. Työtä ei taata; monet odottavat viikkoja tai eivät saa lainkaan projektia.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    sv: {
      slug: 'software',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'AI-träning för mjukvaruutvecklare — Edithsi',
      metaDescription: 'Distansuppdrag inom AI-träning för mjukvaruutvecklare i Norden och Europa ($70–150/tim angivet 2026-11-05, ej garanterat).',
      h1: 'AI-träningsarbete för mjukvaruutvecklare och IT-specialister',
      paragraphs: [
        'Som mjukvaruutvecklare i AI-träningsprojekt består arbetet av att granska kod, felsöka komplexa kodbaser, skriva realistiska programmeringsinstruktioner och bedöma modellgenererade lösningar mot automatiserade tester. Du hjälper till att identifiera logiska fel, prestandaflaskhalsar och säkerhetsbrister i svaren från språkmodeller.',
        'De viktigaste färdigheterna är praktisk erfarenhet av att bygga och leverera produktionskod i språk som Python, TypeScript, Go, Rust, Java eller C++, samt förmågan att förklara tekniska avvägningar tydligt på engelska. Det angivna arvodet för Software Engineering Expert per 2026-11-05 är $70–150/tim, utbetalt veckovis i US-dollar via Stripe som självständig uppdragstagare.',
        'Ha realistiska förväntningar innan du ansöker: det är gratis att ansöka, men arbete är aldrig garanterat. Många kvalificerade utvecklare väntar i veckor i kandidatpoolen eller får inget projekt alls beroende på efterfrågan i aktiva projekt.'
      ],
      checklist: [
        'Uppdaterat CV samt GitHub-profil eller portfölj som visar produktionskod du har byggt och levererat.',
        'Gedigen erfarenhet av minst ett etablerat programmeringsspråk och automatiserade enhetstester.',
        'Tyst miljö och fungerande mikrofon för den tekniska bedömningen.',
        'Koll på skatte- och förmånsregler i ditt land (t.ex. i Finland: toiminimi, förskottsskatt, FöPL/YEL från 9 423 EUR/år 2026 och anmälan före start vid arbetslöshetsersättning).'
      ],
      faqs: [
        {
          question: 'Vad är det angivna arvodet för Software Engineering Expert?',
          answer: 'Per 2026-11-05 är det angivna intervallet $70–150/tim (ej garanterat), med utbetalning veckovis i USD via Stripe.'
        },
        {
          question: 'Behöver jag visa upp GitHub eller produktionserfarenhet?',
          answer: 'Uppdraget riktar sig till ingenjörer som bygger och skeppar mjukvara; en tydlig GitHub-profil eller dokumenterad produktionserfarenhet är en klar fördel.'
        },
        {
          question: 'Är jag garanterad projekt om jag klarar urvalet?',
          answer: 'Nej. Arbete är inte garanterat; många väntar i veckor eller får inget projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    de: {
      slug: 'software',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'KI-Training für Softwareentwickler — Edithsi',
      metaDescription: 'Remote-Rollen im KI-Training für Softwareentwickler in Europa ($70–150/Std. geprüft am 2026-11-05, nicht garantiert). Aufgaben & Checkliste.',
      h1: 'KI-Trainingsarbeit für Softwareentwickler und IT-Fachkräfte',
      paragraphs: [
        'Als Softwareentwicklerin oder Softwareentwickler im KI-Training bewerten Sie Quellcode, entwerfen praxisnahe Debugging- und Refactoring-Aufgaben in mehrteiligen Repositories und prüfen KI-generierte Lösungen anhand automatisierter Tests. Dabei decken Sie subtile Logikfehler, Sicherheitslücken und Architekturschwächen auf.',
        'Entscheidend sind praktische Erfahrungen beim Entwickeln und Ausliefern produktiver Software (etwa in Python, TypeScript, Go, Rust, Java oder C++), das schnelle Durchdringen fremder Codebasen sowie präzise technische Erklärungen auf Englisch. Die am 2026-11-05 ausgeschriebene Vergütung für Software Engineering Expert liegt bei $70–150/Std. und wird wöchentlich über Stripe in US-Dollar an selbstständige Auftragnehmer ausgezahlt.',
        'Bleiben Sie bei den Erfolgsaussichten realistisch: Die Bewerbung ist kostenlos, aber Aufträge sind nicht garantiert. Viele qualifizierte Entwickler warten wochenlang im Bewerberpool oder erhalten kein Projektangebot, da der Bedarf stark von den jeweils getesteten Programmiersprachen abhängt.'
      ],
      checklist: [
        'Aktueller Lebenslauf sowie GitHub-Profil oder Portfolio mit produktiver Softwareerfahrung.',
        'Fundierte Kenntnisse in mindestens einem gängigen Tech-Stack inklusive Unit- und Integrationstests.',
        'Ruhige Umgebung und funktionierendes Mikrofon für das automatisierte technische Auswahlgespräch.',
        'Klärung Ihrer steuerlichen Pflichten als Selbstständige/r (Finnland-Beispiel: toiminimi, Vorauszahlung, YEL ab 9.423 EUR/Jahr 2026; Meldung vor Beginn bei Arbeitslosengeld).'
      ],
      faqs: [
        {
          question: 'Wie hoch ist die ausgeschriebene Vergütung für Softwareentwickler?',
          answer: 'Stand 2026-11-05 beträgt die ausgeschriebene Spanne $70–150/Std. (nicht garantiert), wöchentlich ausgezahlt in US-Dollar via Stripe.'
        },
        {
          question: 'Werden GitHub-Projekte oder Produktionserfahrung erwartet?',
          answer: 'Die Rolle richtet sich an Entwickler, die produktive Software ausliefern; ein aussagekräftiges GitHub-Profil oder nachweisbare Projekterfahrung sind wichtig.'
        },
        {
          question: 'Gibt es eine Garantie auf Projekteinsätze?',
          answer: 'Nein. Arbeit ist nicht garantiert; viele Bewerber warten wochenlang oder erhalten kein Projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    fr: {
      slug: 'software',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entraînement d’IA pour ingénieurs logiciels — Edithsi',
      metaDescription: 'Missions à distance d’entraînement d’IA pour développeurs et ingénieurs logiciels en Europe (70–150 $/h au 2026-11-05, non garantis).',
      h1: 'Missions d’entraînement d’IA pour ingénieurs logiciels et spécialistes IT',
      paragraphs: [
        'En tant qu’ingénieur logiciel sur des projets d’entraînement d’IA, votre travail consiste à analyser du code, concevoir des scénarios de débogage multi-fichiers, rédiger des tests unitaires et évaluer la qualité des correctifs produits par des modèles de langage. Vous vérifiez notamment la sécurité, la gestion des cas limites et la clarté du raisonnement technique.',
        'Les compétences essentielles sont une expérience concrète du développement et de la mise en production de logiciels (Python, TypeScript, Go, Rust, Java ou C++), la lecture rapide de dépôts existants et une expression technique claire en anglais. Le tarif affiché le 2026-11-05 pour Software Engineering Expert est de 70–150 $/h, payé chaque semaine en dollars US via Stripe sous statut indépendant.',
        'Gardez des attentes réalistes : postuler est totalement gratuit, mais le travail n’est jamais garanti. De nombreux développeurs qualifiés attendent plusieurs semaines dans le vivier ou ne reçoivent aucune mission selon les langages recherchés du moment.'
      ],
      checklist: [
        'Un CV à jour ainsi qu’un profil GitHub ou portfolio illustrant des logiciels mis en production.',
        'Une maîtrise solide d’au moins un langage majeur et de l’écriture de tests automatisés.',
        'Un environnement calme et un microphone fiable pour l’entretien technique automatisé.',
        'La vérification de vos obligations fiscales et sociales d’indépendant (ex. en Finlande : toiminimi, acomptes d’impôt, YEL dès 9 423 EUR/an en 2026 ; déclaration avant de débuter en cas d’allocation chômage).'
      ],
      faqs: [
        {
          question: 'Quel est le tarif affiché pour Software Engineering Expert ?',
          answer: 'Au 2026-11-05, la fourchette affichée est de 70–150 $/h (non garantie), payée chaque semaine en dollars US via Stripe.'
        },
        {
          question: 'Faut-il un profil GitHub ou une expérience en production ?',
          answer: 'L’offre s’adresse aux ingénieurs qui conçoivent et déploient des logiciels en production ; un profil GitHub ou un historique de projets livrés est fortement recommandé.'
        },
        {
          question: 'Une mission est-elle garantie après validation du profil ?',
          answer: 'Non. Le travail n’est pas garanti ; beaucoup de candidats attendent des semaines ou n’obtiennent aucun projet.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    es: {
      slug: 'software',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entrenamiento de IA para ingenieros de software — Edithsi',
      metaDescription: 'Proyectos remotos de entrenamiento de IA para desarrolladores e ingenieros de software en Europa (70–150 $/h el 2026-11-05, no garantizados).',
      h1: 'Trabajo de entrenamiento de IA para ingenieros de software y TI',
      paragraphs: [
        'Como ingeniero o desarrollador de software en proyectos de entrenamiento de IA, tu labor se centra en revisar código, diseñar problemas de depuración en repositorios reales, redactar pruebas unitarias y evaluar soluciones generadas por modelos frente a criterios de seguridad y rendimiento. Tu objetivo es detectar errores sutiles de lógica y documentar la solución óptima paso a paso.',
        'Las habilidades más valoradas son la experiencia práctica creando y desplegando software en producción (Python, TypeScript, Go, Rust, Java o C++), la capacidad de comprender bases de código ajenas con rapidez y una buena comunicación técnica en inglés. La tarifa publicada el 2026-11-05 para Software Engineering Expert es de 70–150 $/h, abonada semanalmente en dólares estadounidenses mediante Stripe como contratista independiente.',
        'Mantén expectativas realistas: enviar la solicitud es gratuito, pero el trabajo no está garantizado. Muchos ingenieros cualificados esperan semanas en la bolsa de candidatos o no llegan a recibir ningún proyecto según la demanda técnica de cada mes.'
      ],
      checklist: [
        'Currículum actualizado y perfil de GitHub o portafolio que demuestre software desplegado en producción.',
        'Dominio práctico de al menos un lenguaje principal y creación de pruebas automatizadas.',
        'Entorno silencioso y micrófono funcional para la evaluación técnica automatizada.',
        'Revisión de tus obligaciones fiscales como autónomo (ejemplo en Finlandia: toiminimi, pago a cuenta, seguro YEL desde 9.423 EUR/año en 2026 y aviso previo si cobras desempleo).'
      ],
      faqs: [
        {
          question: '¿Cuál es la tarifa publicada para Software Engineering Expert?',
          answer: 'A fecha de 2026-11-05, el rango publicado es de 70–150 $/h (no garantizado), pagado semanalmente en USD vía Stripe.'
        },
        {
          question: '¿Necesito mostrar GitHub o experiencia en producción?',
          answer: 'La oferta busca ingenieros que construyan y lancen software; aportar repositorios en GitHub o experiencia demostrable en producción refuerza tu candidatura.'
        },
        {
          question: '¿Se garantizan horas de trabajo tras superar la prueba?',
          answer: 'No. El trabajo no está garantizado; muchas personas esperan semanas o no reciben ningún proyecto.'
        }
      ]
    }
  },
  medical: {
    en: {
      slug: 'medical',
      lang: 'en',
      reviewStatus: 'APPROVED',
      metaTitle: 'AI-Training Work for Doctors & Healthcare — Edithsi',
      metaDescription: 'Remote AI-training roles for doctors, nurses, dentists, and pharmacists in Europe ($60–180/h posted on 2026-11-05, not guaranteed).',
      h1: 'AI-training work for doctors, nurses and healthcare professionals',
      paragraphs: [
        'Clinical AI-training work involves writing realistic patient vignettes, grading model responses for clinical safety and contraindications, and checking whether differential diagnoses follow evidence-based clinical guidelines. You never treat patients or provide telemedicine on these projects; instead, you audit AI reasoning so unsafe medical hallucinations are caught before deployment.',
        'Mercor’s Medical Expert listing is open to credentialed doctors, nurses, dentists, pharmacists, and public-health specialists. What matters most is a verifiable clinical credential, rigorous clinical reasoning, and the ability to explain why one diagnostic or pharmacological answer is safer and more accurate than another. The posted pay range on 2026-11-05 is $60–180/h (not guaranteed), paid weekly in US dollars via Stripe.',
        'Honest odds: applying is completely free, but project matching depends on which medical specialties or clinical workflows are actively funded. Many clinicians wait weeks after completing their screening or receive no project assignment at all.'
      ],
      checklist: [
        'A verifiable clinical credential or degree (physician, registered nurse, dentist, pharmacist, or public-health qualification).',
        'A clear CV detailing your clinical training, specialty area, and years of patient-care or research experience.',
        'Strict adherence to patient privacy: never upload real patient data or confidential hospital records during any assessment.',
        'Awareness of independent contractor tax and social insurance rules in your country (Finland example: toiminimi, prepayment tax, YEL from EUR 9,423/year in 2026).'
      ],
      faqs: [
        {
          question: 'Is a clinical credential required for the Medical Expert role?',
          answer: 'Yes. The Medical Expert listing requires a clinical credential and suits doctors, nurses, dentists, pharmacists, and public-health professionals.'
        },
        {
          question: 'What is the posted hourly rate for Medical Expert?',
          answer: 'On 2026-11-05, the posted range is $60–180/h (not guaranteed), paid weekly via Stripe in US dollars as an independent contractor.'
        },
        {
          question: 'Does this work involve treating patients?',
          answer: 'No. You evaluate and write training examples for AI models as an independent contractor; work is not guaranteed.'
        }
      ]
    },
    fi: {
      slug: 'medical',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      metaTitle: 'Tekoälytyö lääkäreille ja hoitoalalle (2026) — Edithsi',
      metaDescription: 'Etätyönä tehtävä tekoälyn koulutustyö lääkäreille, sairaanhoitajille, hammaslääkäreille ja farmaseuteille ($60–180/h ilmoitettu, ei taattu).',
      h1: 'Tekoälytyö lääkäreille ja terveydenhuollon ammattilaisille',
      paragraphs: [
        'Terveydenhuollon tekoälyprojekteissa laadit kuvitteellisia potilastapauksia, arvioit kielimallien tuottamia hoito- ja diagnoosivastauksia potilasturvallisuuden näkökulmasta sekä tarkistat, noudattaako mallin päättely näyttöön perustuvaa lääketiedettä. Työhön ei liity potilastyötä tai hoitosuhteita, vaan toimit asiantuntijatarkastajana, joka tunnistaa vaaralliset asiavirheet ja vasta-aiheet.',
        'Mercorin Medical Expert -haku on suunnattu lääkäreille, sairaanhoitajille, hammaslääkäreille, proviisoreille, farmaseuteille sekä kansanterveyden asiantuntijoille, joilla on vaadittava kliininen pätevyys. Tärkeintä on tarkka kliininen harkintakyky ja kyky perustella arviointikriteerit selkeästi englanniksi. Ilmoitettu tuntipalkkio 2026-11-05 on $60–180/h (ei taattu), ja maksut hoidetaan viikoittain Stripen kautta US-dollareissa.',
        'Realistinen arvio mahdollisuuksista: hakeminen on ilmaista, mutta projektien saatavuus vaihtelee erikoisaloittain. Moni päteväkin ammattilainen odottaa viikkoja osaajapoolissa tai jää ilman projektikutsua.'
      ],
      checklist: [
        'Todennettava kliininen tutkinto tai ammattioikeus (lääkäri, sairaanhoitaja, hammaslääkäri, farmaseutti/proviisori tai kansanterveysala).',
        'Selkeä englanninkielinen CV, josta käyvät ilmi tutkinto, erikoisala ja kliininen työkokemus.',
        'Ehdoton tietosuoja: älä koskaan syötä oikeita potilastietoja tai salassa pidettäviä asiakirjoja haastattelussa tai tehtävissä.',
        'Suomen verotuksen ja YEL-velvoitteiden huomioiminen (toiminimi, ennakkovero, YEL 9 423 €/v työtulosta 2026; ilmoitus ennen aloitusta työttömyysturvalla).'
      ],
      faqs: [
        {
          question: 'Vaaditaanko Medical Expert -tehtävään kliininen pätevyys?',
          answer: 'Kyllä. Tehtävä edellyttää kliinistä pätevyyttä ja sopii lääkäreille, sairaanhoitajille, hammaslääkäreille, farmaseuteille ja kansanterveyden osaajille.'
        },
        {
          question: 'Mikä on terveydenhuollon asiantuntijan ilmoitettu palkkio?',
          answer: 'Tarkistuspäivänä 2026-11-05 ilmoitettu palkkioväli on $60–180/h (ei taattu), maksettuna viikoittain Stripen kautta Yhdysvaltain dollareissa.'
        },
        {
          question: 'Liittyykö tehtäviin oikeiden potilaiden hoitamista?',
          answer: 'Ei. Kyse on tekoälymallien vastausten arvioinnista ja koulutusaineiston laatimisesta itsenäisenä toimeksiantajana.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    sv: {
      slug: 'medical',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'AI-träning för läkare och vårdpersonal — Edithsi',
      metaDescription: 'Distansuppdrag inom AI-träning för läkare, sjuksköterskor, tandläkare och apotekare ($60–180/tim angivet 2026-11-05, ej garanterat).',
      h1: 'AI-träningsarbete för läkare, sjuksköterskor och vårdspecialister',
      paragraphs: [
        'Inom medicinsk AI-träning utformar du fiktiva kliniska fallbeskrivningar, granskar modellsvar utifrån patientsäkerhet och kontraindikationer samt bedömer om differentialdiagnoser följer evidensbaserade riktlinjer. Arbetet innebär ingen patientkontakt eller vårdgivning, utan fokuserar helt på att granska och förbättra hur AI-modeller resonerar kring medicinska frågor.',
        'Mercors roll Medical Expert riktar sig till läkare, sjuksköterskor, tandläkare, apotekare och folkhälsovetare med klinisk legitimation eller examen. Det angivna arvodet per 2026-11-05 är $60–180/tim (ej garanterat), med veckovis utbetalning i US-dollar via Stripe som självständig uppdragstagare.',
        'Ärliga odds: det är helt gratis att ansöka, men tillgången på uppdrag beror på vilka medicinska specialiteter som efterfrågas i pågående projekt. Många sökande väntar i veckor eller får inget projekt alls.'
      ],
      checklist: [
        'Verifierbar klinisk legitimation eller examen (läkare, sjuksköterska, tandläkare, apotekare eller folkhälsa).',
        'Tydligt CV på engelska som beskriver din kliniska utbildning, specialitet och yrkeserfarenhet.',
        'Strikt tystnadsplikt: dela aldrig verkliga patientuppgifter under ansökan eller uppdrag.',
        'Förståelse för skatter och avgifter som självständig uppdragstagare i ditt bosättningsland.'
      ],
      faqs: [
        {
          question: 'Krävs klinisk behörighet för Medical Expert?',
          answer: 'Ja. Rollen kräver klinisk behörighet och passar läkare, sjuksköterskor, tandläkare, apotekare och folkhälsospecialister.'
        },
        {
          question: 'Vad är det angivna timarvodet för Medical Expert?',
          answer: 'Per 2026-11-05 är det angivna intervallet $60–180/tim (ej garanterat), utbetalt veckovis i USD via Stripe.'
        },
        {
          question: 'Är arbetet garanterat efter godkänd ansökan?',
          answer: 'Nej. Arbete är inte garanterat; många väntar i veckor eller får inget projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    de: {
      slug: 'medical',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'KI-Training für Ärzte & medizinische Fachkräfte — Edithsi',
      metaDescription: 'Remote-Rollen im KI-Training für Ärzte, Pflegekräfte, Zahnärzte und Apotheker ($60–180/Std. am 2026-11-05, nicht garantiert).',
      h1: 'KI-Trainingsarbeit für Ärztinnen, Ärzte und medizinische Fachkräfte',
      paragraphs: [
        'In medizinischen KI-Trainingsprojekten erstellen Sie realistische klinische Fallbeispiele, überprüfen Modellantworten auf Patientensicherheit und Kontraindikationen und bewerten medizinische Argumentationsketten anhand evidenzbasierter Leitlinien. Es findet keinerlei Patientenbehandlung statt; Ihre Aufgabe ist die fachliche Qualitätskontrolle von KI-Ausgaben.',
        'Die Ausschreibung Medical Expert richtet sich an Ärztinnen und Ärzte, Pflegefachkräfte, Zahnärzte, Apotheker sowie Fachleute aus dem Bereich Public Health mit klinischer Qualifikation. Die am 2026-11-05 ausgeschriebene Vergütungsspanne liegt bei $60–180/Std. (nicht garantiert) und wird wöchentlich über Stripe in US-Dollar auf Honorarbasis ausgezahlt.',
        'Realistische Einschätzung: Die Bewerbung ist kostenlos, jedoch gibt es keine Garantie auf Projektaufträge. Viele qualifizierte Fachkräfte warten wochenlang im Pool oder erhalten je nach Projektbedarf kein Angebot.'
      ],
      checklist: [
        'Nachweisbare klinische Qualifikation oder Approbation (Humanmedizin, Pflege, Zahnmedizin, Pharmazie oder Public Health).',
        'Übersichtlicher englischsprachiger Lebenslauf mit Angaben zu Fachgebiet und klinischer Praxis.',
        'Strikter Datenschutz: Verwenden Sie niemals echte Patientendaten in Bewerbungen oder Trainingsaufgaben.',
        'Beachtung der steuerlichen Vorgaben für Selbstständige in Ihrem Wohnsitzland.'
      ],
      faqs: [
        {
          question: 'Ist eine klinische Qualifikation für Medical Expert zwingend erforderlich?',
          answer: 'Ja. Die Rolle erfordert eine klinische Qualifikation und richtet sich an Ärzte, Pflegekräfte, Zahnärzte, Apotheker und Public-Health-Fachleute.'
        },
        {
          question: 'Wie hoch ist die ausgeschriebene Vergütung für Medical Expert?',
          answer: 'Am 2026-11-05 liegt die ausgeschriebene Spanne bei $60–180/Std. (nicht garantiert), wöchentlich ausgezahlt in USD über Stripe.'
        },
        {
          question: 'Ist eine Projektzuteilung nach der Bewerbung sicher?',
          answer: 'Nein. Arbeit ist nicht garantiert; viele Bewerber warten wochenlang oder erhalten kein Projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    fr: {
      slug: 'medical',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entraînement d’IA pour médecins et soignants — Edithsi',
      metaDescription: 'Missions à distance d’entraînement d’IA pour médecins, infirmiers, dentistes et pharmaciens (60–180 $/h au 2026-11-05, non garantis).',
      h1: 'Missions d’entraînement d’IA pour médecins et professionnels de santé',
      paragraphs: [
        'Dans les projets médicaux d’entraînement d’IA, vous rédigez des cas cliniques fictifs, évaluez la sécurité et la précision des réponses générées par les modèles et vérifiez la cohérence des diagnostics différentiels au regard des recommandations scientifiques. Il ne s’agit jamais de téléconsultation ni de soin aux patients, mais d’un contrôle rigoureux de la fiabilité médicale des modèles.',
        'L’offre Medical Expert s’adresse aux médecins, infirmiers, chirurgiens-dentistes, pharmaciens et spécialistes de santé publique titulaires d’un diplôme clinique. Le tarif affiché au 2026-11-05 est de 60–180 $/h (non garanti), versé chaque semaine en dollars américains via Stripe en tant que prestataire indépendant.',
        'Probabilités réelles : la candidature est gratuite, mais l’attribution d’une mission dépend des spécialités médicales recherchées par les projets actifs. De nombreux professionnels attendent plusieurs semaines ou n’obtiennent aucun projet.'
      ],
      checklist: [
        'Un diplôme ou une habilitation clinique vérifiable (médecin, infirmier, dentiste, pharmacien ou santé publique).',
        'Un CV clair en anglais précisant votre spécialité clinique et votre expérience professionnelle.',
        'Respect absolu du secret médical : ne partagez jamais de données réelles de patients.',
        'Connaissance de vos obligations fiscales et sociales de prestataire indépendant dans votre pays de résidence.'
      ],
      faqs: [
        {
          question: 'Un diplôme clinique est-il obligatoire pour Medical Expert ?',
          answer: 'Oui. L’offre Medical Expert exige une qualification clinique (médecins, infirmiers, dentistes, pharmaciens ou santé publique).'
        },
        {
          question: 'Quel est le tarif horaire affiché pour Medical Expert ?',
          answer: 'Au 2026-11-05, la fourchette affichée est de 60–180 $/h (non garantie), payée chaque semaine en USD via Stripe.'
        },
        {
          question: 'Le travail est-il garanti après inscription ?',
          answer: 'Non. Le travail n’est pas garanti ; beaucoup de candidats attendent des semaines ou n’obtiennent aucun projet.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    es: {
      slug: 'medical',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entrenamiento de IA para médicos y sanitarios — Edithsi',
      metaDescription: 'Puestos remotos de entrenamiento de IA para médicos, enfermería, odontólogos y farmacéuticos (60–180 $/h el 2026-11-05, no garantizados).',
      h1: 'Trabajo de entrenamiento de IA para médicos y profesionales sanitarios',
      paragraphs: [
        'En los proyectos clínicos de entrenamiento de IA redactas casos clínicos simulados, evalúas la seguridad farmacológica y diagnóstica de las respuestas generadas por modelos y verificas que el razonamiento médico siga guías clínicas basadas en la evidencia. No se realiza atención a pacientes; tu función es detectar errores médicos y alucinaciones antes de que lleguen a entornos reales.',
        'La oferta Medical Expert está dirigida a médicos, profesionales de enfermería, odontólogos, farmacéuticos y especialistas en salud pública con acreditación clínica. El rango de pago publicado el 2026-11-05 es de 60–180 $/h (no garantizado), abonado semanalmente en dólares estadounidenses mediante Stripe como contratista independiente.',
        'Expectativas sinceras: solicitar es totalmente gratuito, pero la asignación de proyectos depende de las especialidades médicas demandadas en cada momento. Muchos profesionales esperan semanas o no reciben ningún proyecto.'
      ],
      checklist: [
        'Acreditación o titulación clínica verificable (medicina, enfermería, odontología, farmacia o salud pública).',
        'Currículum claro en inglés indicando especialidad clínica y experiencia asistencial o investigadora.',
        'Confidencialidad estricta: nunca utilices datos reales de pacientes en ninguna prueba o proyecto.',
        'Cumplimiento de las normas fiscales y de autónomos vigentes en tu país de residencia.'
      ],
      faqs: [
        {
          question: '¿Se exige acreditación clínica para el puesto Medical Expert?',
          answer: 'Sí. El puesto requiere acreditación clínica y está orientado a médicos, enfermeros, odontólogos, farmacéuticos y especialistas en salud pública.'
        },
        {
          question: '¿Cuál es la tarifa publicada para Medical Expert?',
          answer: 'El 2026-11-05, el rango publicado es de 60–180 $/h (no garantizado), pagado semanalmente en USD por Stripe.'
        },
        {
          question: '¿Está garantizado recibir proyectos tras postularse?',
          answer: 'No. El trabajo no está garantizado; muchas personas esperan semanas o no consiguen ningún proyecto.'
        }
      ]
    }
  },
  legal: {
    en: {
      slug: 'legal',
      lang: 'en',
      reviewStatus: 'APPROVED',
      metaTitle: 'AI-Training Work for Lawyers & Legal Experts — Edithsi',
      metaDescription: 'Remote AI-training roles for licensed lawyers ($100–150/h) and legal/compliance experts ($60–150/h) posted on 2026-11-05, not guaranteed.',
      h1: 'AI-training work for lawyers and legal professionals',
      paragraphs: [
        'Legal AI-training projects focus on contract redlining, statutory and case-law analysis, regulatory compliance scenarios, and grading model responses against multi-step legal rubrics. You test whether models cite real authorities rather than hallucinated cases, spot jurisdictional errors, and write model reference answers that distinguish settled doctrine from open legal questions.',
        'Mercor lists two separate legal pools: Legal Expert (licensed lawyer) at $100–150/h posted (which requires a law degree such as a J.D., LL.B., or LL.M. AND a current licence to practise) and Legal Expert at $60–150/h posted (which covers legal practice, compliance, regulation, or policy without requiring an active bar licence). Both pay weekly in US dollars via Stripe as independent contractor work.',
        'Honest odds: applying is free, and Civil Law or EU regulatory specialists in Finland and Europe are valuable for benchmarking, yet many projects specifically target US common-law workflows. You may wait weeks in the pool or receive no project offer at all.'
      ],
      checklist: [
        'For Legal Expert (licensed lawyer): both a law degree (J.D., LL.B., or LL.M.) AND a current licence to practise ready for verification.',
        'For Legal Expert ($60–150/h): documented background in legal practice, compliance, regulation, or policy.',
        'Strict client confidentiality: never paste privileged client documents or non-public case files into any platform.',
        'Understanding of contractor tax obligations in your jurisdiction (Finland example: toiminimi, prepayment tax, YEL from EUR 9,423/year in 2026).'
      ],
      faqs: [
        {
          question: 'What is the difference between the two Legal Expert listings?',
          answer: 'Legal Expert (licensed lawyer) ($100–150/h posted) requires a law degree and a current licence to practise; Legal Expert ($60–150/h posted) suits legal practice, compliance, regulation, or policy.'
        },
        {
          question: 'Are the $100–150/h or $60–150/h rates guaranteed?',
          answer: 'No. All pay figures are posted ranges checked on 2026-11-05 and are not guaranteed; many applicants wait weeks or get no project.'
        },
        {
          question: 'How are legal contractors paid?',
          answer: 'Contractors are paid weekly via Stripe in US dollars and handle their own national taxes.'
        }
      ]
    },
    fi: {
      slug: 'legal',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      metaTitle: 'Tekoälytyö juristeille ja asianajajille (2026) — Edithsi',
      metaDescription: 'Etätyönä tehtävä tekoälyn koulutustyö luvan saaneille lakimiehille ($100–150/h) ja juristeille ($60–150/h), tarkistettu 2026-11-05 (ei taattu).',
      h1: 'Tekoälytyö juristeille, asianajajille ja compliance-asiantuntijoille',
      paragraphs: [
        'Oikeudellisissa tekoälyprojekteissa tehtäväsi liittyvät sopimusehtojen tarkistamiseen, sääntely- ja oikeustapausanalyysiin sekä kielimallien tuottamien oikeudellisten vastausten pisteyttämiseen tarkkojen arviointikriteerien avulla. Tarkistat esimerkiksi, viittaako malli todellisiin säädöksiin vai keksittyihin ennakkotapauksiin, ja laadit mallivastauksia vaativiin tulkintakysymyksiin.',
        'Mercorilla on kaksi erillistä oikeusalan tehtävää: Legal Expert (licensed lawyer) ilmoitetulla palkkiolla $100–150/h (vaatii oikeustieteen tutkinnon J.D., LL.B. tai LL.M./OTM SEKÄ voimassa olevan luvan harjoittaa lakimiehen ammattia) sekä Legal Expert ilmoitetulla palkkiolla $60–150/h (sopii lakiasiainhoitoon, compliance-työhön, sääntelyyn tai julkiseen politiikkaan ilman asianajajalupaa). Palkkiot maksetaan viikoittain Stripen kautta US-dollareissa.',
        'Realistiset todennäköisyydet: hakeminen on täysin ilmaista, ja eurooppalaiselle sääntely- ja sopimusosaamiselle on kysyntää, mutta monet projektit painottavat yhdysvaltalaista common law -järjestelmää. Työtä ei taata, ja moni hakija odottaa viikkoja tai jää ilman projektia.'
      ],
      checklist: [
        'Legal Expert (licensed lawyer) -tehtävään: oikeustieteen tutkinto (J.D., LL.B. tai LL.M.) SEKÄ voimassa oleva lupa harjoittaa ammattia.',
        'Legal Expert ($60–150/h) -tehtävään: selkeästi kuvattu kokemus lakiasioista, compliancesta, sääntelystä tai politiikasta.',
        'Ehdoton salassapito: älä koskaan käytä asiakkaiden luottamuksellisia asiakirjoja hakemuksessa tai tehtävissä.',
        'Suomen verotuksen ja YEL-rajan huomioiminen (toiminimi, ennakkovero, YEL 9 423 €/v työtulosta 2026; ilmoitus työttömyysturvalla ennen aloitusta).'
      ],
      faqs: [
        {
          question: 'Miten kaksi Legal Expert -tehtävää eroavat toisistaan?',
          answer: 'Legal Expert (licensed lawyer) ($100–150/h ilmoitettu) vaatii oikeustieteen tutkinnon ja voimassa olevan ammattiluvan; Legal Expert ($60–150/h ilmoitettu) kattaa lakiasiainhoidon, compliancen, sääntelyn ja politiikan.'
        },
        {
          question: 'Ovatko ilmoitetut tuntipalkkiot taattuja?',
          answer: 'Eivät. Palkkiot ovat ilmoitettuja vaihteluvälejä (tarkistettu 2026-11-05), eikä työtä tai projektikutsua taata.'
        },
        {
          question: 'Miten palkkiot maksetaan Suomeen?',
          answer: 'Palkkiot maksetaan itsenäisenä toimeksiantajana yleensä viikoittain Stripen kautta Yhdysvaltain dollareissa (USD).'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    sv: {
      slug: 'legal',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'AI-träning för jurister och advokater — Edithsi',
      metaDescription: 'Distansuppdrag inom AI-träning för legitimerade jurister ($100–150/tim) och compliance-specialister ($60–150/tim) per 2026-11-05.',
      h1: 'AI-träningsarbete för jurister, advokater och compliance-specialister',
      paragraphs: [
        'Juridiska AI-träningsuppdrag handlar om att granska avtalsklausuler, analysera lagstiftning och rättspraxis samt bedöma om språkmodeller resonerar juridiskt korrekt utan att hitta på rättsfall. Du formulerar kvalificerade juridiska frågeställningar och bedömer modellernas svar utifrån detaljerade bedömningsmatriser.',
        'Mercor har två juridiska roller: Legal Expert (licensed lawyer) med angivet arvode $100–150/tim (kräver juristexamen J.D., LL.B. eller LL.M. samt giltig licens att utöva yrket) och Legal Expert med angivet arvode $60–150/tim (för juridisk rådgivning, compliance, regelverk eller offentlig policy). Utbetalning sker veckovis via Stripe i US-dollar.',
        'Ärliga odds: det är gratis att ansöka, men arbete är aldrig garanterat. Många jurister väntar i veckor i kandidatpoolen eller får inget projekt alls.'
      ],
      checklist: [
        'För Legal Expert (licensed lawyer): juristexamen (J.D., LL.B. eller LL.M.) OCH giltig yrkeslicens.',
        'För Legal Expert ($60–150/tim): dokumenterad erfarenhet inom juridik, compliance, regelverk eller policy.',
        'Klientsekretess: ladda aldrig upp konfidentiella klienthandlingar.',
        'Koll på skatteregler för självständiga uppdragstagare i ditt bosättningsland.'
      ],
      faqs: [
        {
          question: 'Vad är skillnaden mellan de två juridiska rollerna?',
          answer: 'Legal Expert (licensed lawyer) ($100–150/tim) kräver juristexamen och giltig yrkeslicens; Legal Expert ($60–150/tim) passar juridiskt arbete, compliance, regelverk och policy.'
        },
        {
          question: 'Är timarvodet garanterat?',
          answer: 'Nej. Arvodena är angivna intervall kontrollerade 2026-11-05 och arbete är inte garanterat.'
        },
        {
          question: 'Hur sker utbetalningen?',
          answer: 'Du får betalt som självständig uppdragstagare, normalt varje vecka via Stripe i US-dollar.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    de: {
      slug: 'legal',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'KI-Training für Juristen & Rechtsanwälte — Edithsi',
      metaDescription: 'Remote-Rollen im KI-Training für zugelassene Anwälte ($100–150/Std.) und Rechtsexperten ($60–150/Std.) am 2026-11-05 (nicht garantiert).',
      h1: 'KI-Trainingsarbeit für Rechtsanwälte, Juristen und Compliance-Fachkräfte',
      paragraphs: [
        'Im juristischen KI-Training prüfen Sie Vertragsentwürfe, analysieren Gesetzestexte und Rechtsprechung und bewerten, ob Sprachmodelle juristische Fragestellungen fehlerfrei und ohne erfundene Fundstellen beantworten. Sie verfassen anspruchsvolle Fallfragen und bewerten Modellantworten anhand strukturierter Bewertungsmaßstäbe.',
        'Mercor führt zwei juristische Ausschreibungen: Legal Expert (licensed lawyer) mit $100–150/Std. (erfordert einen juristischen Abschluss wie J.D., LL.B. oder LL.M. UND eine gültige Anwaltszulassung) sowie Legal Expert mit $60–150/Std. (für Rechtspraxis, Compliance, Regulierung oder Public Policy). Die Auszahlung erfolgt wöchentlich über Stripe in US-Dollar.',
        'Realistische Chancen: Die Bewerbung ist kostenlos, aber Arbeit ist nicht garantiert. Viele Bewerber warten wochenlang im Pool oder erhalten kein Projektangebot.'
      ],
      checklist: [
        'Für Legal Expert (licensed lawyer): juristischer Abschluss (J.D., LL.B. oder LL.M.) UND aktuelle Anwaltszulassung.',
        'Für Legal Expert ($60–150/Std.): Berufserfahrung in Rechtspraxis, Compliance, Regulierung oder Policy.',
        'Mandatsgeheimnis: Verwenden Sie niemals vertrauliche Mandantendokumente.',
        'Klärung Ihrer steuerlichen Pflichten als selbstständiger Auftragnehmer in Ihrem Wohnsitzland.'
      ],
      faqs: [
        {
          question: 'Worin unterscheiden sich die beiden Legal-Expert-Rollen?',
          answer: 'Legal Expert (licensed lawyer) ($100–150/Std.) setzt Abschluss und gültige Zulassung voraus; Legal Expert ($60–150/Std.) richtet sich an Rechtspraxis, Compliance, Regulierung und Policy.'
        },
        {
          question: 'Sind die Stundensätze garantiert?',
          answer: 'Nein. Alle Angaben sind unverbindliche Spannen vom 2026-11-05; Arbeit ist nicht garantiert.'
        },
        {
          question: 'Wie erfolgt die Vergütung?',
          answer: 'Als selbstständiger Auftragnehmer, in der Regel wöchentlich über Stripe in US-Dollar.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    fr: {
      slug: 'legal',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entraînement d’IA pour avocats et juristes — Edithsi',
      metaDescription: 'Missions à distance d’entraînement d’IA pour avocats inscrits (100–150 $/h) et juristes/compliance (60–150 $/h) au 2026-11-05.',
      h1: 'Missions d’entraînement d’IA pour avocats, juristes et spécialistes compliance',
      paragraphs: [
        'Les projets juridiques d’entraînement d’IA portent sur la révision de clauses contractuelles, l’analyse réglementaire et l’évaluation du raisonnement juridique des modèles de langage. Vous vérifiez l’exactitude des références légales, détectez les hallucinations jurisprudentielles et rédigez des réponses de référence rigoureuses.',
        'Mercor propose deux offres distinctes : Legal Expert (licensed lawyer) à 100–150 $/h affichés (exigeant un diplôme de droit J.D., LL.B. ou LL.M. ET une licence d’exercice en vigueur) et Legal Expert à 60–150 $/h affichés (pour la pratique juridique, la conformité, la réglementation ou les politiques publiques). Les paiements sont hebdomadaires en USD via Stripe.',
        'Probabilités honnêtes : postuler est gratuit, mais le travail n’est pas garanti. De nombreux juristes attendent plusieurs semaines dans le vivier ou ne reçoivent aucun projet.'
      ],
      checklist: [
        'Pour Legal Expert (licensed lawyer) : diplôme de droit (J.D., LL.B. ou LL.M.) ET licence d’exercice en cours de validité.',
        'Pour Legal Expert (60–150 $/h) : expérience en pratique juridique, compliance, réglementation ou politiques publiques.',
        'Secret professionnel : ne transmettez jamais de documents confidentiels issus de dossiers clients.',
        'Vérification de vos obligations fiscales et sociales de prestataire indépendant.'
      ],
      faqs: [
        {
          question: 'Quelle est la différence entre les deux offres Legal Expert ?',
          answer: 'Legal Expert (licensed lawyer) (100–150 $/h) exige un diplôme de droit et une licence d’exercice active ; Legal Expert (60–150 $/h) couvre la pratique juridique, la conformité, la réglementation et les politiques publiques.'
        },
        {
          question: 'Les tarifs affichés sont-ils garantis ?',
          answer: 'Non. Il s’agit de fourchettes vérifiées le 2026-11-05, sans garantie d’attribution de mission.'
        },
        {
          question: 'Comment sont payés les prestataires ?',
          answer: 'En tant que prestataire indépendant, généralement chaque semaine via Stripe en dollars américains.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    es: {
      slug: 'legal',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entrenamiento de IA para abogados y juristas — Edithsi',
      metaDescription: 'Puestos remotos de entrenamiento de IA para abogados con licencia (100–150 $/h) y juristas/compliance (60–150 $/h) el 2026-11-05.',
      h1: 'Trabajo de entrenamiento de IA para abogados, juristas y especialistas en compliance',
      paragraphs: [
        'En los proyectos jurídicos de entrenamiento de IA analizarás contratos, normativa y jurisprudencia para evaluar si los modelos de lenguaje razonan con precisión jurídica sin inventar citas legales. Redactarás supuestos prácticos complejos y calificarás respuestas de modelos siguiendo rúbricas detalladas.',
        'Mercor publica dos ofertas jurídicas: Legal Expert (licensed lawyer) con rango de 100–150 $/h (requiere título en Derecho J.D., LL.B. o LL.M. Y licencia vigente para ejercer) y Legal Expert con rango de 60–150 $/h (orientado a práctica jurídica, compliance, regulación o políticas públicas). Los pagos se realizan semanalmente en USD por Stripe.',
        'Oportunidades reales: presentar la solicitud es gratis, pero el trabajo no está garantizado. Muchos candidatos esperan semanas o no reciben ningún proyecto.'
      ],
      checklist: [
        'Para Legal Expert (licensed lawyer): título en Derecho (J.D., LL.B. o LL.M.) Y licencia profesional vigente.',
        'Para Legal Expert (60–150 $/h): experiencia demostrable en práctica jurídica, compliance, regulación o políticas públicas.',
        'Secreto profesional: nunca subas documentos confidenciales de clientes reales.',
        'Cumplimiento de tus obligaciones fiscales como profesional independiente en tu país.'
      ],
      faqs: [
        {
          question: '¿Qué diferencia hay entre los dos puestos de Legal Expert?',
          answer: 'Legal Expert (licensed lawyer) (100–150 $/h) exige título en Derecho y licencia vigente para ejercer; Legal Expert (60–150 $/h) abarca práctica jurídica, compliance, regulación o políticas públicas.'
        },
        {
          question: '¿Están garantizadas las tarifas publicadas?',
          answer: 'No. Son rangos publicados verificados el 2026-11-05 y el trabajo no está garantizado.'
        },
        {
          question: '¿Cómo se realizan los pagos?',
          answer: 'Como contratista independiente, habitualmente cada semana mediante Stripe en dólares estadounidenses.'
        }
      ]
    }
  },
  finance: {
    en: {
      slug: 'finance',
      lang: 'en',
      reviewStatus: 'APPROVED',
      metaTitle: 'AI-Training Work for Finance & Accounting — Edithsi',
      metaDescription: 'Remote AI-training roles for finance, audit, accounting, and spreadsheet specialists in Europe (checked 2026-11-05, not guaranteed).',
      h1: 'AI-training work for finance, accounting and business specialists',
      paragraphs: [
        'Finance AI-training projects test whether models can read multi-tab financial statements, reconcile balance sheets, build discounted cash-flow or actuarial models, and apply accounting standards without arithmetic or logical errors. You design quantitative case prompts, audit step-by-step calculations, and grade model outputs on accuracy and financial reasoning.',
        'Two Mercor pools match finance professionals: Office & Productivity Software Expert ($60–70/h posted on 2026-11-05, suited to high-level spreadsheet, document, and slide users) and Finance Expert (rate set per project, covering accounting, audit, corporate finance, investment banking, asset management, insurance, and actuarial work). In our directory, fixed hourly ranges appear first and "rate set per project" appears last.',
        'Keep expectations grounded: applying costs nothing, but work is not guaranteed. Many finance applicants wait weeks in the pool or receive no project offer, and when a Finance Expert project opens, its hourly or task rate is set specifically for that project.'
      ],
      checklist: [
        'Clear CV showing background in accounting, audit, corporate finance, investment banking, asset management, insurance, or actuarial analysis.',
        'Strong command of complex spreadsheet modelling (formulas, pivot tables, financial statements) and clear written English.',
        'Never upload confidential employer financial models, non-public M&A decks, or client audit files.',
        'Understanding of local self-employment taxes (Finland example: toiminimi, prepayment tax, YEL from EUR 9,423/year work income in 2026).'
      ],
      faqs: [
        {
          question: 'Why does Finance Expert say "rate set per project"?',
          answer: 'On Mercor’s public listing checked on 2026-11-05, Finance Expert pay is set per project rather than a single fixed range; Office & Productivity Software Expert lists $60–70/h (not guaranteed).'
        },
        {
          question: 'Which finance backgrounds fit the Finance Expert pool?',
          answer: 'Accounting, audit, corporate finance, investment banking, asset management, insurance, and actuarial professionals.'
        },
        {
          question: 'Can finance professionals apply to both Finance Expert and Office & Productivity Software Expert?',
          answer: 'Yes. Applying is free, and finance specialists who are advanced spreadsheet and presentation users often qualify for both pools.'
        }
      ]
    },
    fi: {
      slug: 'finance',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      metaTitle: 'Tekoälytyö talous- ja rahoitusalan osaajille — Edithsi',
      metaDescription: 'Etätyönä tehtävä tekoälyn koulutustyö kirjanpidon, tilintarkastuksen, rahoituksen ja Excelin ammattilaisille (tarkistettu 2026-11-05).',
      h1: 'Tekoälytyö rahoituksen, laskentatoimen ja liiketoiminnan asiantuntijoille',
      paragraphs: [
        'Talous- ja rahoitusalan tekoälyprojekteissa testataan, osaavatko kielimallit tulkita tilinpäätöksiä, täsmäyttää taseita, rakentaa kassavirtalaskelmia tai soveltaa tilintarkastus- ja vakuutusmatemaattisia sääntöjä ilman lasku- ja päättelyvirheitä. Laadit realistisia taloustehtäviä, tarkistat laskentakaavoja ja arvioit mallien vastauksia vaihe vaiheelta.',
        'Talousosaajille sopii kaksi Mercorin julkista tehtävää: Office & Productivity Software Expert (ilmoitettu palkkio $60–70/h 2026-11-05, vaativille taulukkolaskennan, tekstinkäsittelyn ja esitysgrafiikan käyttäjille) sekä Finance Expert (palkkio määräytyy projektikohtaisesti; kattaa kirjanpidon, tilintarkastuksen, yritysrahoituksen, investointipankkitoiminnan, varainhoidon, vakuutusalan ja vakuutusmatematiikan). Luettelossamme kiinteä tuntiväli näytetään ensin ja projektikohtainen palkkio viimeisenä.',
        'Pidä odotukset realistisina: hakeminen on ilmaista, mutta työtä ei taata. Moni hakija odottaa viikkoja tai jää ilman projektia, ja Finance Expert -projekteissa tuntipalkkio määritellään aina erikseen kyseisen projektin yhteydessä.'
      ],
      checklist: [
        'Selkeä CV, josta ilmenee kokemus kirjanpidosta, tilintarkastuksesta, yritysrahoituksesta, pankkialalta, varainhoidosta tai vakuutusalalta.',
        'Vahva taulukkolaskenta- ja mallinnusosaaminen sekä täsmällinen englannin kielen kirjallinen taito.',
        'Salassapito: älä koskaan jaa työnantajan tai asiakkaiden luottamuksellisia tilinpäätös- tai yrityskauppa-aineistoja.',
        'Suomen verotuksen ja YEL-rajan huomioiminen (toiminimi, ennakkovero, YEL 9 423 €/v työtulosta 2026; ilmoitus ennen aloitusta työttömyysetuudella).'
      ],
      faqs: [
        {
          question: 'Miksi Finance Expert -tehtävässä lukee "palkkio määräytyy projektikohtaisesti"?',
          answer: 'Mercorin julkisessa ilmoituksessa (tarkistettu 2026-11-05) Finance Expert -palkkio määritellään projektikohtaisesti; Office & Productivity Software Expert -tehtävässä ilmoitettu väli on $60–70/h (ei taattu).'
        },
        {
          question: 'Mille talousalan ammattilaisille Finance Expert sopii?',
          answer: 'Kirjanpidon, tilintarkastuksen, yritysrahoituksen, investointipankkitoiminnan, varainhoidon, vakuutusalan ja vakuutusmatematiikan osaajille.'
        },
        {
          question: 'Voinko hakea sekä Finance Expert- että Office & Productivity -tehtäviin?',
          answer: 'Kyllä. Hakeminen on ilmaista, ja molemmat tehtävät ovat avoinna taulukkolaskentaa ja talouslaskentaa hallitseville asiantuntijoille.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    sv: {
      slug: 'finance',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'AI-träning inom ekonomi och finans — Edithsi',
      metaDescription: 'Distansuppdrag inom AI-träning för redovisning, revision, finans och avancerad kalkylbladshantering (kontrollerad 2026-11-05).',
      h1: 'AI-träningsarbete för specialister inom ekonomi, finans och affärsanalys',
      paragraphs: [
        'Inom finansiell AI-träning prövar du om språkmodeller kan tolka bokslut, stämma av balansräkningar, bygga kassaflödesmodeller och tillämpa redovisnings- eller försäkringsprinciper utan räknefel. Du konstruerar realistiska analysuppgifter och granskar modellernas beräkningar steg för steg.',
        'Två roller hos Mercor matchar denna grupp: Office & Productivity Software Expert ($60–70/tim angivet per 2026-11-05 för avancerade användare av kalkylblad, dokument och presentationer) samt Finance Expert (arvode sätts per projekt; omfattar redovisning, revision, corporate finance, investment banking, kapitalförvaltning, försäkring och aktuariematematik).',
        'Realistiska odds: det är gratis att ansöka, men arbete garanteras aldrig. Många sökande väntar i veckor i kandidatpoolen eller får inget projekt.'
      ],
      checklist: [
        'Tydligt CV med erfarenhet inom redovisning, revision, företagsfinansiering, bank, kapitalförvaltning, försäkring eller aktuariematematik.',
        'Stark färdighet i kalkylbladsmodellering och finansiell analys på engelska.',
        'Sekretess: dela aldrig interna finansiella modeller eller konfidentiella kunddata.',
        'Koll på skatte- och pensionsregler för självständiga uppdragstagare i ditt bosättningsland.'
      ],
      faqs: [
        {
          question: 'Varför står det "arvode sätts per projekt" för Finance Expert?',
          answer: 'I Mercors offentliga annons per 2026-11-05 anges arvodet för Finance Expert per projekt, medan Office & Productivity Software Expert anger $60–70/tim (ej garanterat).'
        },
        {
          question: 'Vilka ekonomibakgrunder passar för Finance Expert?',
          answer: 'Redovisning, revision, företagsfinansiering, investment banking, kapitalförvaltning, försäkring och aktuariematematik.'
        },
        {
          question: 'Kan jag ansöka till båda rollerna?',
          answer: 'Ja. Det är gratis att ansöka och många ekonomer med starka Excel-kunskaper passar båda uppdragen.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    de: {
      slug: 'finance',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'KI-Training für Finanzen & Rechnungswesen — Edithsi',
      metaDescription: 'Remote-Rollen im KI-Training für Finanzen, Wirtschaftsprüfung, Rechnungswesen und Tabellenkalkulation (geprüft am 2026-11-05).',
      h1: 'KI-Trainingsarbeit für Fachkräfte in Finanzen, Rechnungswesen und Wirtschaft',
      paragraphs: [
        'In Finanzprojekten des KI-Trainings prüfen Sie, ob KI-Modelle Jahresabschlüsse korrekt auswerten, Bilanzen abstimmen, Finanz- oder Aktuarmodelle erstellen und Rechnungslegungsstandards fehlerfrei anwenden. Sie entwerfen praxisnahe Fallstudien und kontrollieren jeden Rechenschritt.',
        'Zwei Ausschreibungen passen zu diesem Profil: Office & Productivity Software Expert ($60–70/Std. ausgeschrieben am 2026-11-05 für fortgeschrittene Anwender von Tabellenkalkulationen, Textverarbeitung und Präsentationen) sowie Finance Expert (Vergütung je nach Projekt; umfasst Rechnungswesen, Wirtschaftsprüfung, Corporate Finance, Investment Banking, Vermögensverwaltung, Versicherungen und Aktuarwissenschaften).',
        'Realistische Einschätzung: Die Bewerbung ist kostenlos, aber Arbeit ist nicht garantiert. Viele Bewerber warten wochenlang oder erhalten kein Projekt.'
      ],
      checklist: [
        'Aussagekräftiger Lebenslauf aus Rechnungswesen, Wirtschaftsprüfung, Corporate Finance, Banking, Vermögensverwaltung oder Versicherungswesen.',
        'Sehr gute Kenntnisse in Tabellenkalkulationen und präzise englische Fachsprache.',
        'Vertraulichkeit: Laden Sie niemals interne Finanzmodelle oder Mandantendaten hoch.',
        'Beachtung der steuerlichen Regeln für selbstständige Auftragnehmer in Ihrem Wohnsitzland.'
      ],
      faqs: [
        {
          question: 'Warum steht bei Finance Expert „Vergütung je nach Projekt“?',
          answer: 'Laut öffentlicher Mercor-Ausschreibung vom 2026-11-05 wird die Vergütung bei Finance Expert projektbezogen festgelegt; Office & Productivity Software Expert nennt $60–70/Std. (nicht garantiert).'
        },
        {
          question: 'Welche Fachrichtungen umfasst Finance Expert?',
          answer: 'Rechnungswesen, Wirtschaftsprüfung, Corporate Finance, Investment Banking, Vermögensverwaltung, Versicherungswesen und Aktuarwissenschaften.'
        },
        {
          question: 'Kann ich mich auf beide Rollen bewerben?',
          answer: 'Ja. Die Bewerbung ist kostenlos und Finanzfachleute mit starker Tabellenkalkulations-Praxis passen häufig auf beide Profile.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    fr: {
      slug: 'finance',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entraînement d’IA pour la finance et la comptabilité — Edithsi',
      metaDescription: 'Missions à distance d’entraînement d’IA en finance, audit, comptabilité et tableurs en Europe (vérifié le 2026-11-05, non garanti).',
      h1: 'Missions d’entraînement d’IA pour spécialistes de la finance et de la comptabilité',
      paragraphs: [
        'Dans les projets financiers d’entraînement d’IA, vous évaluez la capacité des modèles à analyser des états financiers, rapprocher des bilans, construire des modèles de flux de trésorerie ou d’actuariat et appliquer les normes comptables sans erreur de calcul. Vous concevez des cas pratiques chiffrés et vérifiez chaque étape du raisonnement.',
        'Deux offres Mercor correspondent à ce profil : Office & Productivity Software Expert (60–70 $/h affichés au 2026-11-05 pour les utilisateurs avancés de tableurs, documents et présentations) et Finance Expert (tarif fixé par projet ; comptabilité, audit, finance d’entreprise, banque d’investissement, gestion d’actifs, assurance et actuariat).',
        'Probabilités réalistes : postuler est gratuit, mais le travail n’est pas garanti. Beaucoup de candidats attendent des semaines ou ne reçoivent aucun projet.'
      ],
      checklist: [
        'Un CV détaillant votre expérience en comptabilité, audit, finance d’entreprise, banque, gestion d’actifs, assurance ou actuariat.',
        'Une excellente maîtrise de la modélisation sur tableur et de l’anglais financier écrit.',
        'Confidentialité : ne partagez jamais de modèles financiers internes ni de données clients.',
        'Vérification de vos obligations fiscales et sociales d’indépendant dans votre pays.'
      ],
      faqs: [
        {
          question: 'Pourquoi l’offre Finance Expert indique-t-elle « tarif fixé par projet » ?',
          answer: 'Sur l’annonce publique vérifiée le 2026-11-05, la rémunération de Finance Expert est définie par projet, tandis qu’Office & Productivity Software Expert affiche 60–70 $/h (non garantis).'
        },
        {
          question: 'Quels métiers financiers sont concernés par Finance Expert ?',
          answer: 'Comptabilité, audit, finance d’entreprise, banque d’investissement, gestion d’actifs, assurance et actuariat.'
        },
        {
          question: 'Puis-je postuler aux deux offres ?',
          answer: 'Oui. La candidature est gratuite et les profils financiers maîtrisant parfaitement les tableurs peuvent postuler aux deux viviers.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    es: {
      slug: 'finance',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entrenamiento de IA para finanzas y contabilidad — Edithsi',
      metaDescription: 'Puestos remotos de entrenamiento de IA en finanzas, auditoría, contabilidad y hojas de cálculo (verificado el 2026-11-05).',
      h1: 'Trabajo de entrenamiento de IA para especialistas en finanzas, contabilidad y empresa',
      paragraphs: [
        'En los proyectos financieros de entrenamiento de IA evalúas si los modelos interpretan estados financieros, cuadran balances, construyen modelos de valoración o actuariales y aplican normas contables sin errores de cálculo. Diseñas casos prácticos cuantitativos y revisas el razonamiento paso a paso.',
        'Dos ofertas de Mercor encajan con este perfil: Office & Productivity Software Expert (60–70 $/h publicados el 2026-11-05 para usuarios avanzados de hojas de cálculo, documentos y presentaciones) y Finance Expert (tarifa fijada por proyecto; abarca contabilidad, auditoría, finanzas corporativas, banca de inversión, gestión de activos, seguros y ciencias actuariales).',
        'Expectativas realistas: solicitar es gratuito, pero el trabajo no está garantizado. Muchos candidatos esperan semanas o no reciben ningún proyecto.'
      ],
      checklist: [
        'Currículum claro con experiencia en contabilidad, auditoría, finanzas corporativas, banca, gestión de activos, seguros o actuariales.',
        'Dominio avanzado de hojas de cálculo y buena redacción técnica en inglés.',
        'Confidencialidad: nunca subas modelos financieros internos ni informes de clientes reales.',
        'Revisión de tus obligaciones fiscales como contratista independiente en tu país.'
      ],
      faqs: [
        {
          question: '¿Por qué Finance Expert indica «tarifa fijada por proyecto»?',
          answer: 'En la oferta pública verificada el 2026-11-05, la tarifa de Finance Expert se fija por proyecto, mientras que Office & Productivity Software Expert publica 60–70 $/h (no garantizados).'
        },
        {
          question: '¿Qué perfiles incluye Finance Expert?',
          answer: 'Contabilidad, auditoría, finanzas corporativas, banca de inversión, gestión de activos, seguros y ciencias actuariales.'
        },
        {
          question: '¿Puedo postularme a ambos puestos?',
          answer: 'Sí. Solicitar es gratis y quienes dominan hojas de cálculo financieras suelen encajar en ambas bolsas.'
        }
      ]
    }
  },
  language: {
    en: {
      slug: 'language',
      lang: 'en',
      reviewStatus: 'APPROVED',
      metaTitle: 'AI-Training Work for Linguists & Translators — Edithsi',
      metaDescription: 'Remote AI-training roles for Finnish, French, Spanish, Italian, Portuguese, Polish, and Dutch language & audio experts ($35–50/h posted).',
      h1: 'AI-training work for language, translation and audio specialists',
      paragraphs: [
        'Language and audio AI-training projects focus on evaluating whether models sound genuinely natural in European languages rather than stiff machine translations. Tasks include writing idiomatic prompts, grading tone and register, correcting grammatical and cultural nuances, and recording or evaluating spoken audio prompts for speech-to-text and voice models.',
        'Mercor’s Language & Audio Expert listing ($35–50/h posted on 2026-11-05, not guaranteed) targets linguists, translators, and audio professionals across languages that explicitly include Finnish, French, Spanish, Italian, Portuguese, Polish, and Dutch. Native-level command of your target language alongside strong English comprehension for project rubrics is essential.',
        'Honest odds: applying is free, and smaller languages like Finnish often see focused bursts of demand when a lab benchmarks Nordic fluency, followed by quiet periods with no active tasks. Work is never guaranteed, and payouts are made weekly in US dollars via Stripe as an independent contractor.'
      ],
      checklist: [
        'Native-level fluency or formal translation/linguistics credentials in a listed target language (such as Finnish, French, Spanish, Italian, Portuguese, Polish, or Dutch).',
        'Strong English reading comprehension so you can follow complex English-language grading rubrics.',
        'A clean, low-noise microphone setup if you apply for spoken audio or voice evaluation tasks.',
        'Understanding of local contractor taxation (Finland example: toiminimi, prepayment tax, YEL from EUR 9,423/year in 2026; report self-employment before starting if on unemployment benefit).'
      ],
      faqs: [
        {
          question: 'Which languages are included in the Language & Audio Expert listing?',
          answer: 'The public listing checked on 2026-11-05 includes Finnish, French, Spanish, Italian, Portuguese, Polish, and Dutch, among others.'
        },
        {
          question: 'What is the posted pay range for Language & Audio Expert?',
          answer: 'On 2026-11-05, the posted range is $35–50/h (not guaranteed), paid weekly in US dollars via Stripe.'
        },
        {
          question: 'Can language specialists also apply to the Generalist Expert pool?',
          answer: 'Yes. Anyone with strong reading and writing can also apply to Generalist Expert ($40–70/h posted, not guaranteed).'
        }
      ]
    },
    fi: {
      slug: 'language',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      metaTitle: 'Tekoälytyö kääntäjille ja suomen kielen osaajille — Edithsi',
      metaDescription: 'Etätyönä tehtävä tekoälyn koulutustyö suomen kielen, kääntämisen ja äänialan ammattilaisille ($35–50/h ilmoitettu 2026-11-05, ei taattu).',
      h1: 'Tekoälytyö kääntäjille, kielitieteilijöille ja suomen kielen asiantuntijoille',
      paragraphs: [
        'Kieli- ja äänipainotteisissa tekoälyprojekteissa arvioit, tuottaako kielimalli luontevaa, idiomaattista ja kieliopillisesti virheetöntä suomea (tai muuta eurooppalaista kieltä) kankeiden käännöslainojen sijaan. Tehtäviin kuuluu vaativien kehotteiden kirjoittaminen, sävyn ja rekisterin pisteyttäminen, kulttuuristen vivahteiden korjaaminen sekä puhe- ja äänimallien koulutusaineistojen arviointi.',
        'Mercorin Language & Audio Expert -hakuilmoitus (ilmoitettu palkkio $35–50/h tarkistuspäivänä 2026-11-05, ei taattu) etsii kielitieteilijöitä, kääntäjiä ja äänialan ammattilaisia; ilmoituksessa mainittuja kieliä ovat muun muassa suomi, ranska, espanja, italia, portugali, puola ja hollanti. Äidinkielisen tason lisäksi tarvitset hyvää englannin lukutaitoa, sillä projektien arviointiohjeet ovat englanniksi.',
        'Realistiset odotukset: hakeminen on täysin ilmaista, ja suomen kielen projekteja avautuu tyypillisesti aalloittain silloin, kun kielimalleja testataan pohjoismaisilla kielillä. Työtä ei taata, ja palkkiot maksetaan itsenäisenä toimeksiantajana viikoittain Stripen kautta Yhdysvaltain dollareissa.'
      ],
      checklist: [
        'Äidinkielinen kielitaito tai kääntäjän/kielitieteilijän tausta kohdekielessä (esim. suomi, ranska, espanja, italia, portugali, puola tai hollanti).',
        'Vahva englannin kielen luetun ymmärtäminen englanninkielisten arviointimatriisien (rubrics) noudattamiseen.',
        'Laadukas, häiriötön mikrofoni ja hiljainen tila, jos osallistut puhe- ja äänitehtäviin.',
        'Suomen verotuksen ja etuuksien huomioiminen (toiminimi, ennakkovero, YEL 9 423 €/v työtulosta 2026; ilmoitus ennen aloitusta työttömyysturvalla).'
      ],
      faqs: [
        {
          question: 'Onko suomen kieli mukana Language & Audio Expert -haussa?',
          answer: 'Kyllä. Tarkistuspäivänä 2026-11-05 julkisessa ilmoituksessa mainittuja kieliä ovat muun muassa suomi, ranska, espanja, italia, portugali, puola ja hollanti.'
        },
        {
          question: 'Mikä on kieli- ja ääniasiantuntijan ilmoitettu tuntipalkkio?',
          answer: 'Ilmoitettu palkkioväli 2026-11-05 on $35–50/h (ei taattu), maksettuna viikoittain Stripen kautta Yhdysvaltain dollareissa.'
        },
        {
          question: 'Voinko hakea samalla myös Generalist Expert -tehtävään?',
          answer: 'Kyllä. Vahvan luku- ja kirjoitustaidon omaavat hakijat voivat hakea myös Generalist Expert -pooliin ($40–70/h ilmoitettu, ei taattu).'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    sv: {
      slug: 'language',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'AI-träning för översättare och lingvister — Edithsi',
      metaDescription: 'Distansuppdrag inom AI-träning för lingvister, översättare och ljudspecialister ($35–50/tim angivet 2026-11-05, ej garanterat).',
      h1: 'AI-träningsarbete för översättare, lingvister och ljudspecialister',
      paragraphs: [
        'I språk- och ljudprojekt inom AI-träning bedömer du om språkmodeller uttrycker sig naturligt, idiomatiskt och grammatiskt korrekt i stället för att låta som direktöversatt maskintext. Uppgifterna omfattar att granska stil och ton, rätta kulturella nyanser samt spela in eller utvärdera röstdata för talmodeller.',
        'Mercors roll Language & Audio Expert ($35–50/tim angivet per 2026-11-05, ej garanterat) söker lingvister, översättare och ljudproffs; språken i annonsen omfattar bland annat finska, franska, spanska, italienska, portugisiska, polska och nederländska.',
        'Ärliga odds: det är gratis att ansöka, men tillgången på språkprojekt varierar i perioder och arbete är aldrig garanterat. Utbetalning sker veckovis i USD via Stripe.'
      ],
      checklist: [
        'Modersmålsnivå eller dokumenterad kompetens inom översättning/lingvistik i ett efterfrågat språk (t.ex. finska, franska, spanska, italienska, portugisiska, polska eller nederländska).',
        'God läsförståelse i engelska för att följa detaljerade projektinstruktioner.',
        'Tyst inspelningsmiljö och bra mikrofon för eventuella ljud- och röstuppgifter.',
        'Koll på skatte- och egenföretagarregler i ditt bosättningsland.'
      ],
      faqs: [
        {
          question: 'Vilka språk nämns i Language & Audio Expert-annonsen?',
          answer: 'Annonsen kontrollerad 2026-11-05 nämner bland annat finska, franska, spanska, italienska, portugisiska, polska och nederländska.'
        },
        {
          question: 'Vad är det angivna arvodet för Language & Audio Expert?',
          answer: 'Per 2026-11-05 är det angivna intervallet $35–50/tim (ej garanterat), utbetalt veckovis i USD via Stripe.'
        },
        {
          question: 'Kan jag även ansöka till Generalist Expert?',
          answer: 'Ja. Alla med stark läs- och skrivförmåga kan även ansöka till Generalist Expert ($40–70/tim angivet, ej garanterat).'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    de: {
      slug: 'language',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'KI-Training für Übersetzer & Linguisten — Edithsi',
      metaDescription: 'Remote-Rollen im KI-Training für Linguisten, Übersetzer und Audio-Profis ($35–50/Std. am 2026-11-05, nicht garantiert).',
      h1: 'KI-Trainingsarbeit für Linguisten, Übersetzer und Audio-Fachkräfte',
      paragraphs: [
        'In Sprach- und Audioprojekten prüfen Sie, ob KI-Modelle idiomatisch, stilistisch treffsicher und grammatikalisch korrekt formulieren. Dazu gehören das Bewerten von Übersetzungsnuancen, das Verfassen natürlich klingender Dialoge sowie die Aufnahme oder Qualitätsprüfung von Sprachdaten für Audio-Modelle.',
        'Die Ausschreibung Language & Audio Expert ($35–50/Std. am 2026-11-05, nicht garantiert) richtet sich an Linguisten, Übersetzer und Audio-Profis; zu den genannten Sprachen zählen unter anderem Finnisch, Französisch, Spanisch, Italienisch, Portugiesisch, Polnisch und Niederländisch.',
        'Realistische Chancen: Die Bewerbung ist kostenlos, doch Sprachprojekte laufen oft in zeitlich begrenzten Wellen. Arbeit ist nicht garantiert, und die Vergütung erfolgt wöchentlich in USD über Stripe.'
      ],
      checklist: [
        'Muttersprachliches Niveau oder Abschluss in Linguistik/Übersetzung in einer gesuchten Sprache (z. B. Finnisch, Französisch, Spanisch, Italienisch, Portugiesisch, Polnisch, Niederländisch).',
        'Sicheres englisches Leseverständnis für die englischsprachigen Bewertungsrichtlinien.',
        'Rauschfreies Mikrofon und ruhige Umgebung für Audio-Aufgaben.',
        'Klärung Ihrer steuerlichen Pflichten als Selbstständige/r im Wohnsitzland.'
      ],
      faqs: [
        {
          question: 'Welche Sprachen umfasst Language & Audio Expert?',
          answer: 'In der am 2026-11-05 geprüften Ausschreibung werden u. a. Finnisch, Französisch, Spanisch, Italienisch, Portugiesisch, Polnisch und Niederländisch genannt.'
        },
        {
          question: 'Wie hoch ist die ausgeschriebene Vergütung?',
          answer: 'Stand 2026-11-05 beträgt die Spanne $35–50/Std. (nicht garantiert), wöchentlich ausgezahlt in USD via Stripe.'
        },
        {
          question: 'Steht mir zusätzlich der Generalist-Pool offen?',
          answer: 'Ja. Bewerber mit starker Lese- und Schreibkompetenz können sich auch als Generalist Expert ($40–70/Std., nicht garantiert) bewerben.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    fr: {
      slug: 'language',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entraînement d’IA pour traducteurs et linguistes — Edithsi',
      metaDescription: 'Missions à distance d’entraînement d’IA pour linguistes, traducteurs et professionnels de l’audio (35–50 $/h au 2026-11-05, non garantis).',
      h1: 'Missions d’entraînement d’IA pour linguistes, traducteurs et spécialistes audio',
      paragraphs: [
        'Les projets linguistiques et audio consistent à vérifier que les modèles d’IA s’expriment de manière idiomatique, fluide et culturellement juste en français ou dans d’autres langues européennes. Vous évaluez le registre de langue, corrigez les calques de traduction et participez parfois à l’enregistrement ou à la notation d’échantillons vocaux.',
        'L’offre Language & Audio Expert (35–50 $/h affichés au 2026-11-05, non garantis) recherche des linguistes, traducteurs et professionnels de l’audio ; les langues explicitement citées incluent le finnois, le français, l’espagnol, l’italien, le portugais, le polonais et le néerlandais.',
        'Probabilités honnêtes : postuler est gratuit, mais le volume de missions dépend des campagnes linguistiques en cours. Le travail n’est pas garanti et les paiements sont effectués chaque semaine en USD via Stripe.'
      ],
      checklist: [
        'Maîtrise native ou qualification en traduction/linguistique dans l’une des langues cibles (dont le français, le finnois, l’espagnol, l’italien, le portugais, le polonais ou le néerlandais).',
        'Bonne compréhension de l’anglais écrit pour appliquer les grilles d’évaluation.',
        'Microphone de bonne qualité et pièce calme pour les missions audio.',
        'Respect des règles fiscales et sociales des travailleurs indépendants dans votre pays.'
      ],
      faqs: [
        {
          question: 'Le français et le finnois font-ils partie des langues recherchées ?',
          answer: 'Oui. L’annonce vérifiée le 2026-11-05 mentionne notamment le finnois, le français, l’espagnol, l’italien, le portugais, le polonais et le néerlandais.'
        },
        {
          question: 'Quel est le tarif affiché pour Language & Audio Expert ?',
          answer: 'Au 2026-11-05, la fourchette affichée est de 35–50 $/h (non garantie), payée chaque semaine en USD via Stripe.'
        },
        {
          question: 'Puis-je également postuler au rôle Generalist Expert ?',
          answer: 'Oui. Toute personne ayant d’excellentes compétences de lecture et d’écriture peut aussi postuler à Generalist Expert (40–70 $/h affichés, non garantis).'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    es: {
      slug: 'language',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entrenamiento de IA para traductores y lingüistas — Edithsi',
      metaDescription: 'Puestos remotos de entrenamiento de IA para lingüistas, traductores y especialistas en audio (35–50 $/h el 2026-11-05, no garantizados).',
      h1: 'Trabajo de entrenamiento de IA para traductores, lingüistas y profesionales de audio',
      paragraphs: [
        'En los proyectos de lengua y audio evalúas si los modelos de inteligencia artificial redactan y hablan con naturalidad, precisión gramatical y adecuación cultural en español u otros idiomas europeos. Las tareas incluyen redactar instrucciones idiomáticas, corregir traducciones literales y grabar o evaluar muestras de voz.',
        'La oferta Language & Audio Expert (35–50 $/h publicados el 2026-11-05, no garantizados) busca lingüistas, traductores y profesionales del audio en idiomas que incluyen expresamente español, finés, francés, italiano, portugués, polaco y neerlandés.',
        'Expectativas sinceras: solicitar es gratuito, pero los proyectos por idioma se activan por oleadas y el trabajo nunca está garantizado. Los pagos se realizan semanalmente en USD mediante Stripe.'
      ],
      checklist: [
        'Dominio nativo o formación en traducción/lingüística en uno de los idiomas listados (español, finés, francés, italiano, portugués, polaco o neerlandés).',
        'Buena comprensión lectora en inglés para seguir las rúbricas del proyecto.',
        'Micrófono nítido y entorno sin ruido para tareas de voz y audio.',
        'Cumplimiento de tus obligaciones fiscales como autónomo o contratista independiente.'
      ],
      faqs: [
        {
          question: '¿Está incluido el español en Language & Audio Expert?',
          answer: 'Sí. La oferta pública verificada el 2026-11-05 incluye finés, francés, español, italiano, portugués, polaco y neerlandés.'
        },
        {
          question: '¿Cuál es la tarifa publicada para Language & Audio Expert?',
          answer: 'El 2026-11-05, el rango publicado es de 35–50 $/h (no garantizado), pagado semanalmente en USD por Stripe.'
        },
        {
          question: '¿Puedo postularme también a Generalist Expert?',
          answer: 'Sí. Quienes cuentan con sólida lectura y redacción también pueden solicitar el puesto Generalist Expert (40–70 $/h publicados, no garantizados).'
        }
      ]
    }
  },
  office: {
    en: {
      slug: 'office',
      lang: 'en',
      reviewStatus: 'APPROVED',
      metaTitle: 'AI-Training Work for Office & Excel Power Users — Edithsi',
      metaDescription: 'Remote AI-training roles for high-level users of spreadsheets, documents, slides, and email tools ($60–70/h posted on 2026-11-05, not guaranteed).',
      h1: 'AI-training work for office software and spreadsheet power users',
      paragraphs: [
        'Modern AI assistants are increasingly asked to manipulate complex spreadsheets, format structured reports, build executive slide decks, and triage multi-step email workflows. In the Office & Productivity Software Expert role, you create realistic workplace tasks across spreadsheets, documents, slides, and email tools, and evaluate whether AI agents execute those multi-step instructions accurately.',
        'What matters most is practical mastery of everyday business software—such as nested spreadsheet formulas, data cleaning, pivot tables, structured document templates, and presentation layouts—combined with clear written communication. On 2026-11-05, the posted pay range for Office & Productivity Software Expert is $60–70/h (not guaranteed), paid weekly in US dollars via Stripe.',
        'Honest odds: because many professionals use office software daily, competition in this pool is high. Applying is free, but work is not guaranteed and many applicants wait weeks or receive no project.'
      ],
      checklist: [
        'Demonstrated high-level proficiency with spreadsheets (Excel/Sheets), documents, presentation slides, and email workflows.',
        'Attention to detail when checking multi-step formatting, formula accuracy, and structured data tables.',
        'Strict confidentiality: use only synthetic or public sample data, never internal company spreadsheets.',
        'Awareness of your local contractor tax obligations (Finland example: toiminimi, prepayment tax, YEL from EUR 9,423/year in 2026).'
      ],
      faqs: [
        {
          question: 'What is the posted rate for Office & Productivity Software Expert?',
          answer: 'On 2026-11-05, the posted pay range is $60–70/h (not guaranteed), paid weekly in US dollars via Stripe as an independent contractor.'
        },
        {
          question: 'Do I need a software engineering degree for this role?',
          answer: 'No. This listing suits high-level users of spreadsheets, documents, slides, or email tools rather than software engineers.'
        },
        {
          question: 'Is work guaranteed once I complete the application?',
          answer: 'No. Work is not guaranteed; many people wait weeks or get no project.'
        }
      ]
    },
    fi: {
      slug: 'office',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      metaTitle: 'Tekoälytyö toimisto-ohjelmistojen ja Excelin osaajille — Edithsi',
      metaDescription: 'Etätyönä tehtävä tekoälyn koulutustyö taulukkolaskennan, tekstinkäsittelyn ja esitysgrafiikan ammattikäyttäjille ($60–70/h ilmoitettu, ei taattu).',
      h1: 'Tekoälytyö toimisto-ohjelmistojen ja taulukkolaskennan tehokäyttäjille',
      paragraphs: [
        'Tekoälyavustajia koulutetaan yhä enemmän käsittelemään monimutkaisia taulukoita, muotoilemaan asiakirjoja, rakentamaan esityksiä ja jäsentämään sähköpostityönkulkuja. Office & Productivity Software Expert -tehtävässä laadit realistisia toimistotyön tehtävänantoja ja arvioit, suoriutuuko tekoälymalli monivaiheisista taulukkolaskennan, tekstinkäsittelyn tai esitysgrafiikan tehtävistä virheettömästi.',
        'Tärkeintä on vahva käytännön rutiini vaativasta toimisto-ohjelmistojen käytöstä – kuten kaavoista, pivot-taulukoista, datan siivoamisesta ja laajojen asiakirjojen rakenteesta – yhdistettynä huolelliseen englanninkieliseen ohjeistukseen. Tarkistuspäivänä 2026-11-05 Office & Productivity Software Expert -tehtävän ilmoitettu palkkio on $60–70/h (ei taattu), maksettuna viikoittain Stripen kautta US-dollareissa.',
        'Realistiset mahdollisuudet: koska toimisto-ohjelmistojen osaajia on paljon, hakijamäärät ovat suuria. Hakeminen on ilmaista, mutta työtä ei taata ja moni odottaa viikkoja tai jää ilman projektia.'
      ],
      checklist: [
        'Vahva näytetty osaaminen taulukkolaskennasta (Excel / Google Sheets), asiakirjoista, esitysgrafiikasta ja sähköpostityökaluista.',
        'Tarkkuus kaavojen, tietotaulukoiden ja monivaiheisten ohjeiden tarkistamisessa.',
        'Tietosuoja: älä koskaan käytä työnantajasi tai asiakkaidesi oikeita taulukoita tai asiakirjoja.',
        'Suomen verotuksen ja YEL-rajan huomioiminen (toiminimi, ennakkovero, YEL 9 423 €/v työtulosta 2026; ilmoitus ennen aloitusta työttömyysturvalla).'
      ],
      faqs: [
        {
          question: 'Mikä on Office & Productivity Software Expert -tehtävän ilmoitettu palkkio?',
          answer: 'Tarkistuspäivänä 2026-11-05 ilmoitettu tuntipalkkio on $60–70/h (ei taattu), ja se maksetaan viikoittain Stripen kautta US-dollareissa.'
        },
        {
          question: 'Vaatiiko tehtävä ohjelmoijan tutkintoa?',
          answer: 'Ei. Tehtävä on suunnattu taulukkolaskennan, tekstinkäsittelyn, esitysgrafiikan ja sähköpostityökalujen vaativille käyttäjille.'
        },
        {
          question: 'Onko projektien saaminen varmaa?',
          answer: 'Ei. Työtä ei taata; monet odottavat viikkoja tai eivät saa lainkaan projektia.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    sv: {
      slug: 'office',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'AI-träning inom kontorsprogram & Excel — Edithsi',
      metaDescription: 'Distansuppdrag inom AI-träning för avancerade användare av kalkylblad, dokument och presentationer ($60–70/tim angivet 2026-11-05).',
      h1: 'AI-träningsarbete för avancerade användare av kontorsverktyg och kalkylblad',
      paragraphs: [
        'Moderna AI-verktyg tränas för att hantera komplexa kalkylblad, strukturera dokument, skapa presentationer och organisera e-postflöden. I rollen Office & Productivity Software Expert skapar du realistiska arbetsuppgifter och granskar om AI-modeller löser flerstegsuppgifter i kontorsprogram korrekt.',
        'Det som räknas är djup praktisk kunskap i kalkylblad, dokument, presentationer och e-postverktyg samt noggrann skriftlig engelska. Det angivna arvodet per 2026-11-05 är $60–70/tim (ej garanterat), utbetalt veckovis i USD via Stripe.',
        'Ärliga odds: det är gratis att ansöka, men konkurrensen är hög och arbete är aldrig garanterat.'
      ],
      checklist: [
        'Dokumenterad vana vid avancerade kalkylblad, dokumenthantering, presentationer och e-postverktyg.',
        'Noggrannhet vid kontroll av formler, tabeller och struktur.',
        'Använd aldrig interna företagsfiler eller konfidentiella dokument.',
        'Koll på skatte- och egenföretagarregler i ditt bosättningsland.'
      ],
      faqs: [
        {
          question: 'Vad är det angivna arvodet för Office & Productivity Software Expert?',
          answer: 'Per 2026-11-05 är det angivna arvodet $60–70/tim (ej garanterat), utbetalt veckovis i USD via Stripe.'
        },
        {
          question: 'Krävs programmeringsbakgrund för den här rollen?',
          answer: 'Nej. Rollen riktar sig till avancerade användare av kalkylblad, dokument, presentationer och e-postverktyg.'
        },
        {
          question: 'Är jag garanterad uppdrag?',
          answer: 'Nej. Arbete är inte garanterat; många väntar i veckor eller får inget projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    de: {
      slug: 'office',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'KI-Training für Bürosoftware & Excel-Profis — Edithsi',
      metaDescription: 'Remote-Rollen im KI-Training für Power-User von Tabellenkalkulationen, Dokumenten und Präsentationen ($60–70/Std. am 2026-11-05).',
      h1: 'KI-Trainingsarbeit für Power-User von Büro- und Produktivitätssoftware',
      paragraphs: [
        'KI-Assistenten werden zunehmend darauf trainiert, komplexe Tabellenkalkulationen auszuwerten, Berichte zu formatieren, Präsentationen zu gliedern und E-Mail-Workflows zu bearbeiten. Als Office & Productivity Software Expert entwerfen Sie praxisnahe Aufgaben und prüfen, ob Modelle mehrstufige Arbeitsabläufe fehlerfrei umsetzen.',
        'Gefragt sind fortgeschrittene Kenntnisse in Tabellenkalkulationen, Textverarbeitung, Präsentationsprogrammen und E-Mail-Tools sowie präzises Englisch. Die am 2026-11-05 ausgeschriebene Vergütung beträgt $60–70/Std. (nicht garantiert), wöchentlich ausgezahlt in USD via Stripe.',
        'Realistische Chancen: Die Bewerbung ist kostenlos, aber Arbeit ist nicht garantiert; viele Bewerber warten wochenlang oder erhalten kein Projekt.'
      ],
      checklist: [
        'Nachweisbare Routine im fortgeschrittenen Einsatz von Tabellenkalkulationen, Dokumenten, Folien und E-Mail-Tools.',
        'Sorgfalt beim Prüfen von Formeln, Datenstrukturen und Formatierungen.',
        'Verwenden Sie niemals vertrauliche Unternehmensdateien.',
        'Beachtung Ihrer steuerlichen Pflichten als selbstständiger Auftragnehmer.'
      ],
      faqs: [
        {
          question: 'Wie hoch ist die ausgeschriebene Vergütung?',
          answer: 'Am 2026-11-05 liegt die ausgeschriebene Spanne für Office & Productivity Software Expert bei $60–70/Std. (nicht garantiert).'
        },
        {
          question: 'Muss ich Softwareentwickler sein?',
          answer: 'Nein. Die Rolle sucht erfahrene Anwender von Tabellenkalkulationen, Dokumenten, Präsentationen oder E-Mail-Werkzeugen.'
        },
        {
          question: 'Ist Arbeit nach der Bewerbung garantiert?',
          answer: 'Nein. Arbeit ist nicht garantiert; viele warten wochenlang oder erhalten kein Projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    fr: {
      slug: 'office',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entraînement d’IA en bureautique & tableurs — Edithsi',
      metaDescription: 'Missions à distance d’entraînement d’IA pour utilisateurs avancés de tableurs, documents et présentations (60–70 $/h au 2026-11-05).',
      h1: 'Missions d’entraînement d’IA pour experts en bureautique et tableurs',
      paragraphs: [
        'Les assistants d’IA sont formés pour manipuler des feuilles de calcul complexes, structurer des rapports, concevoir des présentations et gérer des flux d’e-mails. Dans le rôle Office & Productivity Software Expert, vous créez des cas pratiques réalistes et évaluez la précision des modèles sur ces outils bureautiques.',
        'L’essentiel est une maîtrise avancée des tableurs, traitements de texte, logiciels de présentation et outils de messagerie, associée à un bon niveau d’anglais écrit. Au 2026-11-05, le tarif affiché est de 60–70 $/h (non garanti), payé chaque semaine en USD via Stripe.',
        'Probabilités honnêtes : la candidature est gratuite, mais le travail n’est jamais garanti et beaucoup de candidats attendent plusieurs semaines sans projet.'
      ],
      checklist: [
        'Expérience avancée des tableurs (formules, tableaux croisés dynamiques), documents, présentations et outils d’e-mailing.',
        'Rigueur dans la vérification des calculs et de la mise en forme.',
        'N’utilisez jamais de fichiers internes ou confidentiels d’entreprise.',
        'Respect de vos obligations fiscales et sociales de prestataire indépendant.'
      ],
      faqs: [
        {
          question: 'Quel est le tarif affiché pour Office & Productivity Software Expert ?',
          answer: 'Au 2026-11-05, la fourchette affichée est de 60–70 $/h (non garantie), payée chaque semaine en USD via Stripe.'
        },
        {
          question: 'Faut-il être développeur informatique pour ce rôle ?',
          answer: 'Non. Ce poste s’adresse aux utilisateurs avancés de tableurs, documents, présentations et outils de messagerie.'
        },
        {
          question: 'Le travail est-il garanti ?',
          answer: 'Non. Le travail n’est pas garanti ; beaucoup de candidats attendent des semaines ou n’obtiennent aucun projet.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    es: {
      slug: 'office',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entrenamiento de IA en ofimática y Excel — Edithsi',
      metaDescription: 'Puestos remotos de entrenamiento de IA para usuarios avanzados de hojas de cálculo, documentos y presentaciones (60–70 $/h el 2026-11-05).',
      h1: 'Trabajo de entrenamiento de IA para usuarios avanzados de ofimática y hojas de cálculo',
      paragraphs: [
        'Los asistentes de IA necesitan aprender a trabajar con hojas de cálculo complejas, dar formato a documentos extensos, estructurar presentaciones y organizar flujos de correo electrónico. En el puesto Office & Productivity Software Expert diseñas tareas prácticas de oficina y evalúas si los modelos ejecutan cada paso sin errores.',
        'Se valora el dominio avanzado de hojas de cálculo, procesadores de texto, presentaciones y herramientas de correo, junto con una buena comprensión escrita del inglés. El 2026-11-05, la tarifa publicada es de 60–70 $/h (no garantizada), pagada semanalmente en USD por Stripe.',
        'Expectativas sinceras: presentar la solicitud es gratis, pero el trabajo no está garantizado y muchos candidatos esperan semanas sin asignación.'
      ],
      checklist: [
        'Dominio demostrable de hojas de cálculo (fórmulas avanzadas, tablas dinámicas), documentos, presentaciones y correo.',
        'Atención al detalle al verificar datos estructurados y formatos.',
        'No utilices nunca archivos internos ni datos confidenciales de empresas.',
        'Cumplimiento de tus obligaciones fiscales como profesional independiente.'
      ],
      faqs: [
        {
          question: '¿Cuál es la tarifa publicada para Office & Productivity Software Expert?',
          answer: 'El 2026-11-05, el rango publicado es de 60–70 $/h (no garantizado), abonado semanalmente en USD vía Stripe.'
        },
        {
          question: '¿Hace falta ser programador para este puesto?',
          answer: 'No. Está dirigido a usuarios avanzados de hojas de cálculo, documentos, presentaciones o herramientas de correo.'
        },
        {
          question: '¿Está garantizado conseguir proyectos?',
          answer: 'No. El trabajo no está garantizado; muchas personas esperan semanas o no reciben ningún proyecto.'
        }
      ]
    }
  },
  general: {
    en: {
      slug: 'general',
      lang: 'en',
      reviewStatus: 'APPROVED',
      metaTitle: 'Generalist AI-Training Work (No Specific Degree) — Edithsi',
      metaDescription: 'Remote Generalist Expert AI-training role on Mercor for strong readers and writers in Europe ($40–70/h posted on 2026-11-05, not guaranteed).',
      h1: 'AI-training work for generalists and strong writers',
      paragraphs: [
        'If your background is in humanities, social sciences, journalism, education, research, operations, or another field without a narrow clinical or bar licence, the Generalist Expert pool is the primary entry point. Generalist tasks involve fact-checking complex claims, comparing two model responses for clarity and instruction-following, identifying subtle logical fallacies, and rewriting flawed outputs into clear prose.',
        'No specific professional licence is required for Generalist Expert—what matters is strong reading comprehension, structured analytical writing, and careful research verification. On 2026-11-05, the posted pay range is $40–70/h (not guaranteed), paid weekly via Stripe in US dollars as an independent contractor.',
        'Honest odds: because Generalist Expert has no formal credential barrier, it attracts the largest applicant volume on Mercor. Applying is completely free—never pay anyone for a job—but many applicants wait weeks or receive no project offer at all.'
      ],
      checklist: [
        'Strong English reading comprehension and concise, well-structured analytical writing.',
        'Ability to verify factual claims quickly using primary, authoritative sources and follow detailed grading rubrics.',
        'Verification that any invitation email comes from @mercor.com (or @mercor.expert for project accounts).',
        'Awareness of your local tax and benefit rules (Finland example: toiminimi, prepayment tax, YEL from EUR 9,423/year in 2026; report self-employment before starting if on unemployment benefit).'
      ],
      faqs: [
        {
          question: 'Do I need a specific university degree or licence for Generalist Expert?',
          answer: 'No. The Generalist Expert listing is open to anyone with strong reading and writing; no specific credential is required.'
        },
        {
          question: 'What is the posted pay range for Generalist Expert?',
          answer: 'On 2026-11-05, the posted range is $40–70/h (not guaranteed), paid weekly in US dollars via Stripe as an independent contractor.'
        },
        {
          question: 'Why do many applicants wait weeks after applying?',
          answer: 'Work is not guaranteed on Mercor; project matching depends on active client demand, and many people wait weeks or get no project.'
        }
      ]
    },
    fi: {
      slug: 'general',
      lang: 'fi',
      reviewStatus: 'APPROVED',
      metaTitle: 'Tekoälytyö yleisasiantuntijoille (Generalist) — Edithsi',
      metaDescription: 'Etätyönä tehtävä Generalist Expert -tekoälytyö vahvoille lukijoille ja kirjoittajille ($40–70/h ilmoitettu 2026-11-05, ei taattu).',
      h1: 'Tekoälytyö yleisasiantuntijoille sekä vahvoille lukijoille ja kirjoittajille',
      paragraphs: [
        'Jos taustasi on esimerkiksi humanistisilla tai yhteiskuntatieteellisillä aloilla, viestinnässä, opetuksessa, tutkimuksessa tai hallinnossa ilman erillistä lakimies- tai lääkärilupaa, Generalist Expert on ensisijainen hakuväylä. Yleisasiantuntijan tehtäviin kuuluu väitteiden faktantarkistus, kahden kielimallivastauksen vertailu annettujen ohjeiden perusteella, loogisten ristiriitojen tunnistaminen sekä selkeiden mallivastausten kirjoittaminen.',
        'Generalist Expert -tehtävään ei vaadita tiettyä tutkintoa tai ammattilupaa: ratkaisevaa on vahva englannin luku- ja kirjoitustaito, huolellinen tiedonhankinta ja kyky noudattaa monivaiheisia arviointikriteerejä. Tarkistuspäivänä 2026-11-05 ilmoitettu palkkioväli on $40–70/h (ei taattu), ja palkkiot maksetaan itsenäisenä toimeksiantajana viikoittain Stripen kautta Yhdysvaltain dollareissa.',
        'Realistiset mahdollisuudet: koska tehtävä ei edellytä erikoislupaa, hakijoita on huomattavasti enemmän kuin kapeilla erikoisaloilla. Hakeminen on täysin ilmaista – älä koskaan maksa kenellekään työpaikasta – mutta moni odottaa viikkoja tai jää kokonaan ilman projektia.'
      ],
      checklist: [
        'Vahva englannin kielen luetun ymmärtäminen ja selkeä, analyyttinen kirjoitustaito.',
        'Huolellisuus faktojen tarkistamisessa luotettavista lähteistä ja arviointiohjeiden noudattamisessa.',
        'Sähköpostien tarkistaminen: aidot Mercor-viestit tulevat @mercor.com-osoitteesta ja projektitilit käyttävät @mercor.expert-päätettä.',
        'Suomen verotuksen ja etuuksien huomioiminen (toiminimi, ennakkovero, YEL 9 423 €/v työtulosta 2026; ilmoitus ennen aloitusta työttömyysetuudella).'
      ],
      faqs: [
        {
          question: 'Vaaditaanko Generalist Expert -tehtävään tiettyä tutkintoa?',
          answer: 'Ei. Tehtävä sopii kenelle tahansa, jolla on vahva luku- ja kirjoitustaito; erityistä tutkintoa tai ammattilupaa ei vaadita.'
        },
        {
          question: 'Mikä on Generalist Expert -tehtävän ilmoitettu tuntipalkkio?',
          answer: 'Tarkistuspäivänä 2026-11-05 ilmoitettu vaihteluväli on $40–70/h (ei taattu), maksettuna viikoittain Stripen kautta US-dollareissa.'
        },
        {
          question: 'Miksi moni hakija odottaa viikkoja ilman projektia?',
          answer: 'Työtä ei taata; projektikutsut riippuvat asiakasprojektien tarpeista, ja moni odottaa viikkoja tai jää ilman projektia.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    sv: {
      slug: 'general',
      lang: 'sv',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'AI-träning för generalister (Ingen specifik examen) — Edithsi',
      metaDescription: 'Distansuppdrag som Generalist Expert på Mercor för starka läsare och skribenter ($40–70/tim angivet 2026-11-05, ej garanterat).',
      h1: 'AI-träningsarbete för generalister samt starka läsare och skribenter',
      paragraphs: [
        'Om du har bakgrund inom humaniora, samhällsvetenskap, kommunikation, utbildning, utredning eller administration utan krav på specifik yrkeslegitimation är Generalist Expert rätt ingång. Arbetet går ut på att faktagranska påståenden, jämföra modellsvar, identifiera logiska luckor och skriva välstrukturerade svar enligt detaljerade instruktioner.',
        'Inget specifikt examensbevis krävs för Generalist Expert – det avgörande är mycket god läs- och skrivförmåga på engelska samt noggrann källkritik. Per 2026-11-05 är det angivna arvodet $40–70/tim (ej garanterat), med veckovis utbetalning i US-dollar via Stripe.',
        'Ärliga odds: eftersom rollen är öppen för alla med stark språk- och analysförmåga är söktrycket högt. Det är gratis att ansöka, men många väntar i veckor eller får inget projekt alls.'
      ],
      checklist: [
        'Stark läsförståelse och klar, analytisk skriftlig framställning på engelska.',
        'Vana vid noggrann faktagranskning och att följa strukturerade bedömningsmatriser.',
        'Kontrollera alltid att e-post kommer från @mercor.com (eller @mercor.expert för projektkonton).',
        'Koll på skatte- och arbetslöshetsregler i ditt bosättningsland innan du påbörjar uppdrag.'
      ],
      faqs: [
        {
          question: 'Krävs en viss examen för Generalist Expert?',
          answer: 'Nej. Rollen är öppen för alla med stark läs- och skrivförmåga utan krav på specifik yrkesexamen.'
        },
        {
          question: 'Vad är det angivna arvodet för Generalist Expert?',
          answer: 'Per 2026-11-05 är det angivna intervallet $40–70/tim (ej garanterat), utbetalt veckovis i USD via Stripe.'
        },
        {
          question: 'Är jag garanterad arbete efter ansökan?',
          answer: 'Nej. Arbete är inte garanterat; många väntar i veckor eller får inget projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    de: {
      slug: 'general',
      lang: 'de',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'KI-Training für Generalisten (Ohne Fachlizenz) — Edithsi',
      metaDescription: 'Remote-Rolle Generalist Expert im KI-Training für starke Leser und Schreiber ($40–70/Std. am 2026-11-05, nicht garantiert).',
      h1: 'KI-Trainingsarbeit für Generalisten mit starker Lese- und Schreibkompetenz',
      paragraphs: [
        'Wenn Sie aus den Geistes- oder Sozialwissenschaften, der Redaktion, dem Bildungswesen, der Forschung oder der Verwaltung kommen, ist der Generalist-Expert-Pool der passende Einstieg. Zu den Aufgaben gehören Faktenprüfung, der Vergleich zweier Modellantworten anhand detaillierter Kriterien, das Aufdecken von Logikfehlern und das Verfassen präziser Musterantworten.',
        'Für Generalist Expert ist kein spezifischer Berufsabschluss erforderlich – entscheidend sind ausgeprägte Lese- und Schreibkompetenz auf Englisch sowie gründliche Quellenarbeit. Am 2026-11-05 liegt die ausgeschriebene Vergütung bei $40–70/Std. (nicht garantiert), wöchentlich ausgezahlt in US-Dollar über Stripe.',
        'Realistische Einschätzung: Da keine formale Berufszulassung verlangt wird, bewerben sich hier besonders viele Kandidaten. Die Bewerbung ist kostenlos, aber Arbeit ist nicht garantiert und viele warten wochenlang ohne Projekt.'
      ],
      checklist: [
        'Sehr gutes englisches Leseverständnis und präziser, strukturierter Schreibstil.',
        'Sorgfältige Faktenprüfung anhand verlässlicher Primärquellen.',
        'Prüfung echter Mercor-Absenderadressen (@mercor.com bzw. @mercor.expert für Projektkonten).',
        'Beachtung Ihrer nationalen Steuer- und Meldepflichten als selbstständiger Auftragnehmer.'
      ],
      faqs: [
        {
          question: 'Brauche ich einen bestimmten Studienabschluss für Generalist Expert?',
          answer: 'Nein. Die Ausschreibung richtet sich an alle mit starker Lese- und Schreibkompetenz ohne spezifischen Fachabschluss.'
        },
        {
          question: 'Wie hoch ist die ausgeschriebene Vergütung für Generalist Expert?',
          answer: 'Stand 2026-11-05 liegt die ausgeschriebene Spanne bei $40–70/Std. (nicht garantiert), wöchentlich ausgezahlt in USD via Stripe.'
        },
        {
          question: 'Ist ein Projekt nach der Bewerbung sicher?',
          answer: 'Nein. Arbeit ist nicht garantiert; viele Bewerber warten wochenlang oder erhalten kein Projekt.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    fr: {
      slug: 'general',
      lang: 'fr',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entraînement d’IA pour profils généralistes — Edithsi',
      metaDescription: 'Mission à distance Generalist Expert sur Mercor pour candidats dotés d’excellentes capacités de lecture et rédaction (40–70 $/h au 2026-11-05).',
      h1: 'Missions d’entraînement d’IA pour profils généralistes et rédacteurs',
      paragraphs: [
        'Si vous venez des sciences humaines, de la rédaction, de l’enseignement, de la recherche ou de la gestion de projet sans habilitation médicale ou barreau, le vivier Generalist Expert constitue la porte d’entrée principale. Les missions consistent à vérifier des faits, comparer des réponses de modèles selon des grilles précises, repérer des erreurs de logique et rédiger des réponses claires.',
        'Aucun diplôme spécifique n’est exigé pour Generalist Expert : seules comptent d’excellentes capacités de lecture et de rédaction en anglais ainsi qu’une grande rigueur analytique. Au 2026-11-05, le tarif affiché est de 40–70 $/h (non garanti), payé chaque semaine en dollars US via Stripe.',
        'Probabilités honnêtes : ce vivier reçoit un grand nombre de candidatures. Postuler est gratuit, mais le travail n’est jamais garanti et beaucoup de candidats attendent des semaines ou n’obtiennent aucun projet.'
      ],
      checklist: [
        'Excellente compréhension écrite et rédaction analytique structurée en anglais.',
        'Capacité à vérifier rapidement des informations factuelles auprès de sources fiables.',
        'Vérification systématique des adresses e-mail officielles (@mercor.com et @mercor.expert).',
        'Respect de vos obligations fiscales et de déclaration d’activité indépendante.'
      ],
      faqs: [
        {
          question: 'Faut-il un diplôme particulier pour Generalist Expert ?',
          answer: 'Non. Le rôle est ouvert à toute personne disposant d’excellentes capacités de lecture et de rédaction, sans diplôme spécifique requis.'
        },
        {
          question: 'Quel est le tarif affiché pour Generalist Expert ?',
          answer: 'Au 2026-11-05, la fourchette affichée est de 40–70 $/h (non garantie), payée chaque semaine en USD via Stripe.'
        },
        {
          question: 'Suis-je assuré d’obtenir une mission ?',
          answer: 'Non. Le travail n’est pas garanti ; beaucoup de candidats attendent des semaines ou n’obtiennent aucun projet.'
        }
      ]
    },
    // NEEDS NATIVE REVIEW
    es: {
      slug: 'general',
      lang: 'es',
      reviewStatus: 'NEEDS NATIVE REVIEW',
      metaTitle: 'Entrenamiento de IA para perfiles generalistas — Edithsi',
      metaDescription: 'Puesto remoto Generalist Expert en Mercor para personas con excelente lectura y redacción (40–70 $/h el 2026-11-05, no garantizados).',
      h1: 'Trabajo de entrenamiento de IA para generalistas y perfiles de redacción',
      paragraphs: [
        'Si tu trayectoria está en humanidades, ciencias sociales, periodismo, docencia, investigación o gestión sin necesidad de colegiación médica o jurídica, la bolsa Generalist Expert es la vía principal. El trabajo consiste en verificar datos, comparar respuestas de modelos según rúbricas detalladas, detectar fallos lógicos y redactar textos claros y precisos.',
        'No se exige ninguna titulación específica para Generalist Expert: lo fundamental es contar con excelente comprensión lectora y redacción analítica en inglés. A fecha de 2026-11-05, el rango publicado es de 40–70 $/h (no garantizado), abonado semanalmente en dólares estadounidenses mediante Stripe.',
        'Expectativas sinceras: al no requerir licencia específica, este puesto recibe un volumen alto de solicitudes. Solicitar es gratis, pero el trabajo no está garantizado y muchas personas esperan semanas sin recibir proyectos.'
      ],
      checklist: [
        'Sólida comprensión lectora y redacción analítica clara en inglés.',
        'Rigor en la verificación de datos con fuentes primarias y seguimiento de instrucciones complejas.',
        'Comprobación de que los correos procedan de @mercor.com (o @mercor.expert en cuentas de proyecto).',
        'Cumplimiento de tus obligaciones fiscales y declaración previa si cobras prestación por desempleo.'
      ],
      faqs: [
        {
          question: '¿Se necesita un título universitario específico para Generalist Expert?',
          answer: 'No. Está abierto a cualquier persona con excelente comprensión lectora y redacción; no requiere titulación específica.'
        },
        {
          question: '¿Cuál es la tarifa publicada para Generalist Expert?',
          answer: 'El 2026-11-05, el rango publicado es de 40–70 $/h (no garantizado), pagado semanalmente en USD por Stripe.'
        },
        {
          question: '¿Está garantizado recibir trabajo tras postularse?',
          answer: 'No. El trabajo no está garantizado; muchas personas esperan semanas o no consiguen ningún proyecto.'
        }
      ]
    }
  }
};

export function countAudienceUniqueWords(content: AudiencePageContent): number {
  const combined = [
    content.h1,
    ...content.paragraphs,
    ...content.checklist,
    ...content.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(' ');
  return combined
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function getAudiencePageContent(
  slug: AudienceSlug,
  lang: Lang
): AudiencePageContent & { wordCount: number; isThinContent: boolean } {
  const content = AUDIENCE_PAGES[slug][lang];
  const wordCount = countAudienceUniqueWords(content);
  const isThinContent = wordCount < 150 || content.reviewStatus === 'NEEDS CONTENT';
  return {
    ...content,
    wordCount,
    isThinContent,
  };
}
