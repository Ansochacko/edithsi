---
id: "glossary"
lang: "fi"
slug: "tekoalykoulutuksen-sanasto-rlhf-evals"
title: "Tekoälyn koulutuksen sanasto: RLHF, evals, arviointimatriisit ja kehotteet"
metaTitle: "Tekoälyn koulutuksen sanasto: RLHF, Evals & Rubrics suomeksi"
metaDescription: "Mitä tarkoittavat RLHF, evals, rubric ja SFT tekoälyn koulutustyössä? Selkeä suomenkielinen sanasto juristeille, lääkäreille, koodareille ja kääntäjille."
targetKeyword: "kielimallin koulutus työ"
cluster: "ai-training-concepts"
intent: "informational"
hubSlug: "/fi/tekoalytyo-laakareille/"
hubTitle: "Tekoälytyö lääkäreille ja terveydenhuollon asiantuntijoille"
relatedSlugs:
  - "/fi/mercor-tekoalyhaastattelu-opas/"
  - "/fi/mercor-vs-outlier-vs-micro1-vertailu/"
  - "/fi/mercor-kokemuksia-arvostelu/"
datePublished: "2026-11-05"
dateModified: "2026-11-05"
checkedOn: "2026-11-05"
reviewStatus: "APPROVED"
draft: false
faqs:
  - question: "Tarvitseeko minun osata koodata, jotta voin tehdä kielimallin koulutustyötä?"
    answer: "Ei. Vain ohjelmistokehittäjien rooleissa vaaditaan koodaustaitoa. Lääkärit, juristit, talousosaajat, kieliasiantuntijat ja yleisasiantuntijat työskentelevät luonnollisella kielellä omalla osaamisalueellaan."
  - question: "Mitä RLHF tarkoittaa käytännön etätyössä?"
    answer: "RLHF (Reinforcement Learning from Human Feedback) tarkoittaa vahvistusoppimista ihmispalautteesta: asiantuntija vertailee kahta tai useampaa kielimallin vastausta ja perustelee, kumpi on parempi ja miksi."
  - question: "Mikä on arviointimatriisi eli rubric?"
    answer: "Rubric eli arviointimatriisi on yksityiskohtainen pisteytysohje, joka jakaa hyvän vastauksen objektiivisiin kriteereihin (esimerkiksi faktatarkkuus, turvallisuus, muotoilu ja päättelyketjun aukottomuus)."
  - question: "Voinko kertoa julkisesti, mitä kielimallia koulutan projektissa?"
    answer: "Et. Kaikissa projekteissa allekirjoitetaan salassapitosopimus (NDA), joka estää kertomasta asiakasprojektien sisällöstä, arviointimatriiseista tai asiakasyritysten nimistä."
sources:
  - label: "Tieteen termipankki — Kieliteknologia ja tekoälykäsitteet"
    url: "https://tieteentermipankki.fi/"
  - label: "NIST — Artificial Intelligence Risk Management Framework & Evaluation"
    url: "https://www.nist.gov/itl/ai-risk-management-framework"
---

> **MAINOS · Suosittelulinkki-ilmoitus:** Ylläpidän Edithsi -sivustoa yksin Suomessa asuvana itsenäisenä Mercor-toimeksiantajana. Tämän artikkelin linkit Mercoriin sisältävät suosittelukoodini (`02e0c12a-d634-4738-9686-04f28f31f52b`) ja ovat kaupallista mainontaa (`MAINOS`). Jos haet linkkini kautta ja sinut valitaan projektiin, voin saada suosittelupalkkion ilman, että siitä aiheutuu sinulle kuluja.

Kun suomalainen lääkäri, juristi, rahoitusalan osaaja, ohjelmistokehittäjä tai kääntäjä tutustuu ensimmäistä kertaa hakusanaan **kielimallin koulutus työ**, vastaan tulee nopeasti joukko englanninkielisiä lyhenteitä: *RLHF*, *SFT*, *evals*, *rubrics*, *chain-of-thought* ja *red teaming*. Moni pätevä ammattilainen epäröi hakemista vain siksi, että terminologia kuulostaa koneoppimisen tutkijoiden sisäpiirikieleltä.

Todellisuudessa nämä käsitteet kuvaavat hyvin käytännöllistä asiantuntijatyötä: vaativien kysymysten laatimista, mallien vastausten faktantarkistusta ja selkeiden arviointikriteerien kirjoittamista. Koska allekirjoittamani salassapitosopimus (NDA) estää minua kertomasta yksittäisten asiakasprojektien sisällöstä, avaan tässä oppaassa alan yleisen, julkisesti tunnetun sanaston selkeällä suomen kielellä. Jos olet terveydenhuollon ammattilainen, lue myös toimialakohtainen pääoppaani [Tekoälytyö lääkäreille ja terveydenhuollon asiantuntijoille](/fi/tekoalytyo-laakareille/).

---

## 1. Miksi suuret kielimallit (LLM) tarvitsevat ihmisasiantuntijoita?

Nykyaikaiset suuret kielimallit (*Large Language Models*, LLM) opetetaan ensin valtavalla määrällä julkista tekstiä (esiopetus eli *pre-training*). Tässä vaiheessa malli oppii kielen rakenteen ja tilastolliset yhteydet sanojen välillä, mutta se ei vielä erota luotettavaa kliinistä hoitosuositusta vanhentuneesta keskustelupalstasta tai voimassa olevaa lainsäädäntöä kumotusta pykälästä.

Jotta kielimallista saadaan luotettava, turvallinen ja ammattitasoinen työkalu, sen koulutuksen jälkivaiheissa (*post-training*) tarvitaan tutkinnon suorittaneita asiantuntijoita. Mercorin kaltaisilla alustoilla tämä työ tehdään itsenäisenä toimeksiantajana (`independent contractor`), hakeminen on aina ilmaista, työtä ei taata, ja palkkiot maksetaan yleensä viikoittain Stripen kautta Yhdysvaltain dollareissa (USD).

Eri alustoilla käytännön työnkulut vaihtelevat hieman – voit lukea alustojen eroista vertailustani [Mercor vs. Outlier vs. micro1](/fi/mercor-vs-outlier-vs-micro1-vertailu/) sekä omista havainnoistani artikkelissa [Mercor-kokemuksia: rehellinen arvostelu suomalaiselta asiantuntijalta](/fi/mercor-kokemuksia-arvostelu/).

---

## 2. Keskeiset koulutusmenetelmät: SFT ja RLHF

Kun osallistut tekoälyprojektiin, tehtäväsi liittyy lähes aina joko ohjattuun hienosäätöön (SFT) tai ihmispalautteeseen perustuvaan vahvistusoppimiseen (RLHF).

### SFT (Supervised Fine-Tuning) — Ohjattu hienosäätö ja mallivastausten kirjoittaminen

**SFT** tarkoittaa vaihetta, jossa ihmisasiantuntija näyttää kielimallille esimerkin täydellisestä suorituksesta. Käytännössä asiantuntija laatii ensin haastavan tehtävänannon (*prompt* eli kehote) ja kirjoittaa siihen itse alusta loppuun esimerkillisen mallivastauksen (*golden response* tai *reference completion*).

* **Lääketieteessä ([Medical Expert](https://work.mercor.com/jobs/list_AAABoKOPjbVqcleYq1NNjKxo/medical-expert?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b), *suosittelulinkki · mainos*, ilmoitettu vaihteluväli $60–180/h, tarkistettu 2026-11-05, ei taattu):** Lääkäri voi kirjoittaa monimutkaisen potilastapauksen (oireet, laboratoriotulokset, esitiedot) ja laatia siihen erotusdiagnostisen katsauksen, joka noudattaa näyttöön perustuvaa lääketiedettä.
* **Oikeustieteessä ([Legal Expert](https://work.mercor.com/jobs/list_AAABoKOQUds_uf4uJMtGK64s/legal-expert?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b), *suosittelulinkki · mainos*, ilmoitettu vaihteluväli $60–150/h, tarkistettu 2026-11-05, ei taattu):** Juristi voi muotoilla sopimusoikeudellisen tai sääntelyyn liittyvän skenaarion ja kirjoittaa jäsennellyn oikeudellisen analyysin sovellettavista oikeusohjeista.

### RLHF (Reinforcement Learning from Human Feedback) — Vahvistusoppiminen ihmispalautteesta

**RLHF** on menetelmä, jossa kielimallia opetetaan tunnistamaan, millainen vastaus on ihmisen näkökulmasta hyödyllisin, tarkin ja turvallisin.

Tyypillisessä RLHF-tehtävässä ruudullasi näkyy yksi kehote ja kaksi (tai useampia) eri kielimalliversion tuottamaa vastausta: **Vastaus A** ja **Vastaus B**. Sinun tehtäväsi asiantuntijana on:

1. Tarkistaa molempien vastausten jokainen faktaväite, laskutoimitus tai lähdeviittaus.
2. Pisteyttää molemmat vastaukset annetuilla osa-alueilla (esimerkiksi ohjeiden noudattaminen, totuudenmukaisuus, tyyli ja selkeys).
3. Valita parempi vastaus (*preference ranking*) ja kirjoittaa tiivis, asiantunteva perustelu (*rationale*), miksi toinen vastaus voittaa toisen.

---

## 3. Arvioinnin työkalut: Evals, Rubrics ja kehotteet (Prompts)

Vuosina 2025–2026 asiantuntijatyön painopiste on siirtynyt yhä vahvemmin pelkästä vastausten vertailusta järjestelmälliseen **mallien arviointiin (`evals`)** ja **arviointimatriisien (`rubrics`)** laatimiseen.

### Kehote (Prompt) ja monivaiheinen keskustelu (Multi-Turn)

**Kehote (`prompt`)** on käyttäjän tekoälylle antama syöte tai tehtävänanto. Tekoälyn koulutuksessa kehotteiden pitää usein olla niin vaativia, että nykyiset huippumallit tekevät niissä virheen – tätä kutsutaan toisinaan nimellä *stumping the model* (mallin saattaminen kiikkiin asiantuntijatason kysymyksellä).

**Monivaiheinen keskustelu (`multi-turn conversation`)** tarkoittaa tehtävää, jossa jatkat keskustelua mallin kanssa usean viestin ajan: esität tarkentavia jatkokysymyksiä, muutat oletuksia tai pyydät mallia korjaamaan aiemman virheensä.

### Arviointimatriisi (Rubric)

**Arviointimatriisi (`rubric`)** on yksityiskohtainen kriteeristö, jolla monimutkainen asiantuntijatehtävä pilkotaan objektiivisesti mitattaviin osiin. Sen sijaan, että sanoisit "vastaus on hyvä", laadit selkeät tarkistuskohdat (*criteria*), joista jokaisen voi arvioida kyllä/ei-asteikolla tai pistepainoilla.

Hyvä arviointimatriisi on **atomistinen** (yksi kriteeri mittaa vain yhtä asiaa) ja **yksiselitteinen** (kaksi eri asiantuntijaa päätyy samaan lopputulokseen lukiessaan kriteeriä). Tätä ajattelutapaa testataan usein jo hakuvaiheessa – katso tarkemmat vinkit oppaastani [Mercor-tekoälyhaastattelu: rakenne, vinkit ja mitä odottaa](/fi/mercor-tekoalyhaastattelu-opas/).

### Evals (Model Evaluations & Benchmarks)

**Evals** tarkoittaa kielimallien suorituskyvyn testaamista standardoiduilla tehtäväpaketeilla. Esimerkiksi ohjelmistokehittäjät ([Software Engineering Expert](https://work.mercor.com/jobs/list_AAABoKOP6g9ZUjU9LdNBCqS7/software-engineering-expert?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b), *suosittelulinkki · mainos*, ilmoitettu vaihteluväli **$70–150/h**, tarkistettu 2026-11-05, ei taattu) voivat rakentaa koodaustestejä ja yksikkötestejä, joilla mitataan, osaako malli korjata aidon ohjelmistobugin rikkomatta muuta koodikantaa.

---

## 4. Päättelyketjut (Chain-of-Thought) ja hallusinaatioiden metsästys

Uusimmat päättelymallit (*reasoning models*) eivät pelkästään tulosta lopullista vastausta, vaan ne muodostavat ensin vaiheittaisen **päättelyketjun (`chain-of-thought`, CoT)**.

### Päättelyketjun tarkistaminen (Process Supervision)

Jos tekoäly ratkaisee vaativan yritysrahoituksen kassavirtalaskelman tai kliinisen lääkeannoslaskun, pelkkä oikea lopputulos ei riitä, jos välivaiheissa on looginen virhe. Asiantuntijan tehtävänä on lukea mallin ajatusketju läpi askel askeleelta ja merkitä tarkasti se kohta, jossa päättely harhautuu (*first point of failure*).

### Hallusinaatio (Hallucination) ja faktantarkistus

**Hallusinaatio** tarkoittaa tilannetta, jossa kielimalli esittää uskottavan ja vakuuttavan kuuloisen väitteen, joka on täysin keksitty. Malli voi esimerkiksi viitata olemattomaan korkeimman oikeuden ennakkopäätökseen, keksiä tieteellisen artikkelin DOI-tunnisteen tai sekoittaa kahden lääkeaineen yhteisvaikutukset.

Asiantuntijan tärkeimpiä tehtäviä kaikissa rooleissa – aina [Language & Audio Expert -tehtävistä](https://work.mercor.com/jobs/list_AAABoKOPMUFnRCU8QMZBH634/language-audio-expert?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b) (*suosittelulinkki · mainos*, ilmoitettu vaihteluväli **$35–50/h**, tarkistettu 2026-11-05, ei taattu) [Generalist Expert -tehtäviin](https://work.mercor.com/jobs/list_AAABoKORCF2dakrez4FCAo_G/generalist-expert?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b) (*suosittelulinkki · mainos*, ilmoitettu vaihteluväli **$40–70/h**, tarkistettu 2026-11-05, ei taattu) – on tarkistaa jokainen väite ensisijaisista lähteistä ja merkitä hallusinaatiot virheiksi.

---

## 5. Kattava vertailutaulukko: tekoälyn koulutuksen termit suomeksi

Alla olevaan taulukkoon olen koonnut keskeisimmät englanninkieliset termit, niiden suomenkieliset vastineet sekä käytännön esimerkit siitä, mitä termi tarkoittaa eri alojen asiantuntijoille.

| Englanninkielinen termi | Suomenkielinen vastine | Mitä se tarkoittaa käytännön asiantuntijatyössä? |
| :--- | :--- | :--- |
| **RLHF** (*Reinforcement Learning from Human Feedback*) | Vahvistusoppiminen ihmispalautteesta | Vertailet kahta tai useampaa mallin vastausta samaan tehtävään, pisteytät ne ja perustelet, miksi valitsemasi vastaus on parempi. |
| **SFT** (*Supervised Fine-Tuning*) | Ohjattu hienosäätö | Laadit haastavan tehtävänannon ja kirjoitat siihen itse mallikelpoisen asiantuntijavastauksen (*golden response*). |
| **Prompt** | Kehote / tehtävänanto | Tekoälylle annettava syöte, kysymys tai skenaario kaikkine reunaehtoineen ja taustatietoineen. |
| **Rubric** | Arviointimatriisi / pisteytysohje | Jäsennelty lista objektiivisista kriteereistä, joiden avulla kuka tahansa arvioija voi pisteyttää vastauksen laadun yhdenmukaisesti. |
| **Evals** (*Evaluations*) | Mallin suorituskyvyn arviointi | Testitehtävien ja arviointimatriisien kokonaisuus, jolla mitataan kielimallin osaamista tietyllä erikoisalalla. |
| **Chain-of-Thought (CoT)** | Päättelyketju | Mallin tuottama vaiheittainen välipäättely ennen lopullista vastausta; asiantuntija tarkistaa jokaisen välivaiheen logiikan. |
| **Hallucination** | Hallusinaatio / sepittäminen | Tekoälyn tuottama virheellinen tai tekaistu väite, lähdeviite tai laskelma, joka kuulostaa ulkoisesti vakuuttavalta. |
| **Red Teaming / Adversarial Testing** | Haavoittuvuus- ja turvallisuustestaus | Mallin turvarajojen testaaminen yrittämällä saada se tuottamaan virheellistä, vaarallista tai ohjeiden vastaista sisältöä. |

---

## 6. Suomen kielen erityispiirteet ja lokalisointi kielimallien koulutuksessa

Englanninkielisen ammattisanaston lisäksi suomalaisilla asiantuntijoilla on erityinen vahvuus silloin, kun kielimalleja koulutetaan ymmärtämään ja tuottamaan luonnollista suomen kieltä. Koska suurin osa kielimallien pohjadatasta on englanninkielistä, mallit sortuvat suomenkielisissä tehtävissä usein anglismeihin, kömpelöihin lauserakenteisiin tai suomalaisen toimintaympäristön väärinymmärryksiin.

Kun arvioin suomenkielisiä tai Suomeen kohdennettuja vastauksia, kiinnitän huomiota erityisesti kolmeen osa-alueeseen:

1. **Taivutusmuodot ja yhdyssanat:** Suomen kielen rikas morfologia ja pitkät yhdyssanat paljastavat nopeasti konekäännösmäisen tekstin. Luonnollisuutta (*fluency* ja *naturalness*) arvioitaessa natiivipuhuja erottaa välittömästi, milloin lause kuulostaa aidolta asiantuntijatekstiltä.
2. **Paikallinen instituutio- ja säädöstuntemus:** Jos suomenkielinen kehote käsittelee esimerkiksi verotusta, terveydenhuoltoa tai sopimusoikeutta, mallin ei pidä tarjota yhdysvaltalaisia käytäntöjä suoraan suomennettuna, vaan vastauksen on huomioitava kontekstin vaatimat reunaehdot.
3. **Äänenpaino, prosodia ja murteet äänitehtävissä:** Ääni- ja puheprojekteissa (*audio annotation*) tarkastellaan tekstin lisäksi puheen rytmiä, sanapainoja ja ääntämisen luontevuutta.

---

## 7. Miten hyödynnät tätä sanastoa hakiessasi tehtäviin?

Sinun ei tarvitse ulkoa opetella koneoppimisen matemaattisia kaavoja. Kun haet asiantuntijatehtäviin, tärkeintä on ymmärtää, miten oma substanssiosaamisesi muuntuu selkeiksi kehotteiksi ja arviointikriteereiksi:

1. **Ajattele kuin opettaja tai tarkastaja:** Jos olet oikolukenut kollegan sopimusluonnosta, tarkistanut potilaskertomusta, tehnyt koodikatselmointia (*code review*) tai arvioinut ylioppilas- tai yliopistotenttejä, olet jo tehnyt käytännössä samaa työtä kuin RLHF- ja rubric-projekteissa.
2. **Pidä ilmaisu täsmällisenä:** Kun perustelet tekoälyhaastattelussa tai arviointitehtävässä, miksi tietty ratkaisu on oikea, viittaa aina konkreettisiin kriteereihin (faktatarkkuus, reunaehtojen noudattaminen, looginen johdonmukaisuus).
3. **Muista reunaehdot:** Hakeminen on aina maksutonta, työtä ei taata, ja mahdolliset palkkiot maksetaan itsenäisenä toimeksiantajana Stripen kautta dollareissa.

Voit tutustua terveydenhuollon asiantuntijoiden tehtäviin pääsivullani [Tekoälytyö lääkäreille ja terveydenhuollon asiantuntijoille](/fi/tekoalytyo-laakareille/) tai selata kaikkia Mercorin julkisia hakuja [yleisen suosittelulinkkini kautta tästä](https://t.mercor.com/Pq3VD?referralCode=02e0c12a-d634-4738-9686-04f28f31f52b) (*suosittelulinkki · mainos*).
