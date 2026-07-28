/**
 * Generátor statického náhledu aplikace.
 *
 *   GABI_DATA_DIR=/tmp/preview-db npx tsx scripts/preview.ts out.html
 *
 * Náhled není maketa. Vezme skutečný doménový engine, skutečný doporučovací
 * systém a skutečnou knihovnu obsahu, spočítá stav pro několik profilů a
 * několik po sobě jdoucích dní a zapeče výsledek do jedné HTML stránky.
 * Díky tomu se dá aplikace ukázat i tam, kde neběží server ani databáze.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

import { createUser, activateSubscription } from '../src/lib/auth'
import {
  applyTopicAffinity,
  getAffinity,
  getProfile,
  recordContentEvent,
  updateProfile,
  upsertJournal,
} from '../src/lib/db/repo'
import {
  addEvent,
  addLabValue,
  addMedication,
  listEvents,
  listLabValues,
  listMedications,
} from '../src/lib/db/repo-health'
import { addLetter, addTimelineEvent, memoriesFor } from '../src/lib/db/repo-story'
import { addPost, addReply, listPosts, matchedGroups, communityName } from '../src/lib/db/repo-community'
import { resolveJourney, type JourneyState } from '../src/lib/domain/journey'
import { PHASES, PHASE_IDS, PHASE_GROUPS, PHASE_GROUP_META } from '../src/lib/domain/phases'
import {
  MODIFIER_LABELS,
  TOPIC_LABELS,
  type IsoDate,
  type ModifierId,
  type Profile,
} from '../src/lib/domain/profile'
import { adviceFor } from '../src/lib/domain/partner'
import { addDays, czDays, formatCzechDate, seedFrom, today as todayIso } from '../src/lib/domain/dates'
import { CATALOG, DAILY_CARDS, ENCOURAGEMENTS, GLOSSARY, PRODUCTS, CONTENT_STATS } from '../src/lib/content'
import { buildRails, pickDailyCard, recommend } from '../src/lib/content/recommend'
import { KIND_ICONS, KIND_LABELS } from '../src/lib/content/types'
import { LAB_PARAMS } from '../src/lib/health/lab-params'
import { askGabi, suggestedPrompts } from '../src/lib/ai/gabi'
import { EVENT_KINDS } from '../src/lib/shared/records'

const NOW = todayIso()
const DAY_OFFSETS = [-1, 0, 1, 2, 3, 4]

// --------------------------------------------------------------- personas ---

interface PersonaSpec {
  key: string
  name: string
  tagline: string
  profile: Partial<Profile>
  journalNotes: string[]
  labs: Array<[string, number, string, number]>
  meds: Array<{ name: string; dose: string; timeOfDay: string; from: number }>
  events: Array<{ title: string; kind: string; in: number; atTime?: string; note?: string }>
  timeline: Array<{ title: string; body: string; on: number; icon: string }>
  letter?: { toWhom: 'embryo' | 'baby' | 'lost' | 'self' | 'partner'; title: string; body: string; on: number }
  posts: Array<{ body: string; replies: string[] }>
}

const PERSONAS: PersonaSpec[] = [
  {
    key: 'tereza',
    name: 'Tereza',
    tagline: '6. den po transferu · 2. IVF cyklus',
    profile: {
      displayName: 'Tereza',
      declaredPhase: 'two_week_wait',
      birthYear: 1991,
      modifiers: ['low_amh', 'icsi', 'frozen_transfer'],
      tryingSince: addDays(NOW, -820),
      diagnosticsStartedOn: addDays(NOW, -560),
      stimulationStartOn: addDays(NOW, -23),
      retrievalOn: addDays(NOW, -11),
      transferOn: addDays(NOW, -6),
      amh: 0.9,
      ivfCycles: 2,
      transfersDone: 2,
      embryosCreated: 4,
      embryosFrozen: 1,
      embryoDayAtTransfer: 5,
      clinicName: 'Klinika reprodukční medicíny',
    },
    journalNotes: [
      'Dneska to šlo. Snažím se nemyslet na to, co bude za týden.',
      'Ráno mi bylo úzko. Odpoledne líp. Takhle to skáče každý den.',
      'Píchání v podbřišku. Googlila jsem to a to byla chyba.',
      'Kolegyně oznámila, že je těhotná. Usmála jsem se a odešla na záchod.',
      'Dnes jsem si poprvé za dlouho pustila hudbu a tancovala v kuchyni.',
      'Nemůžu spát. Ve tři ráno je všechno horší.',
      'Manžel mi udělal snídani, aniž bych o to prosila. Skoro jsem se rozbrečela.',
    ],
    labs: [
      ['amh', 1.4, 'ng/ml', -700],
      ['amh', 1.1, 'ng/ml', -380],
      ['amh', 0.9, 'ng/ml', -60],
      ['fsh', 8.2, 'IU/l', -60],
      ['tsh', 2.4, 'mIU/l', -60],
      ['estradiol', 320, 'pmol/l', -23],
      ['estradiol', 1840, 'pmol/l', -17],
      ['estradiol', 6120, 'pmol/l', -12],
      ['progesteron', 42, 'nmol/l', -3],
    ],
    meds: [
      { name: 'Progesteron (vaginálně)', dose: 'podle předpisu', timeOfDay: '08:00', from: -6 },
      { name: 'Kyselina listová', dose: 'podle předpisu', timeOfDay: '08:00', from: -120 },
    ],
    events: [
      { title: 'Odběr krve — beta HCG', kind: 'hcg', in: 5, atTime: '07:30', note: 'Nalačno není potřeba.' },
      { title: 'Kontrola u gynekoložky', kind: 'kontrola', in: 26, atTime: '14:00' },
    ],
    timeline: [
      { title: 'Odběr vajíček — získáno 7 vajíček', body: 'Zákrok proběhl v pořádku. Byla jsem doma do oběda.', on: -11, icon: '◍' },
      { title: 'Jedna blastocysta na transfer, jedna k zamražení', body: 'Ze sedmi vajíček se oplodnily čtyři. Do pátého dne to zvládly dvě.', on: -6, icon: '❋' },
      { title: 'Transfer', body: 'Trvalo to pět minut. Čekala jsem na to dva roky.', on: -6, icon: '❋' },
    ],
    letter: {
      toWhom: 'embryo',
      title: 'Ahoj, ty malá',
      on: -6,
      body: `Dnes tě do mě vrátili.

Vím, že o mně nic nevíš. Že jsi jenom shluk buněk, který se rozhoduje, jestli zůstane. Ale já o tobě vím od chvíle, kdy mi z laboratoře volali, že jsi to zvládla do pátého dne.

Nebudu tě prosit. Nebudu ti slibovat, co všechno spolu zažijeme, protože nechci, abys měla pocit, že něco dlužíš.

Jenom chci, abys věděla, že tady jsem. A že ať to dopadne jakkoliv, tenhle týden jsi byla se mnou.`,
    },
    posts: [
      {
        body: 'Šestý den po transferu a mám pocit, že se čas zastavil. Jak jste to zvládaly vy?',
        replies: [
          'Já jsem si dělala plán na každý den — jedna věc dopoledne, jedna odpoledne. Bez toho bych se z toho zbláznila.',
          'Šestý den byl u mě nejhorší. Sedmý už šel. Držím vám palce.',
        ],
      },
    ],
  },
  {
    key: 'eva',
    name: 'Eva',
    tagline: '7. den stimulace · PCOS',
    profile: {
      displayName: 'Eva',
      declaredPhase: 'stimulation',
      birthYear: 1995,
      modifiers: ['pcos', 'icsi'],
      tryingSince: addDays(NOW, -540),
      diagnosticsStartedOn: addDays(NOW, -300),
      stimulationStartOn: addDays(NOW, -6),
      amh: 5.8,
      ivfCycles: 1,
      transfersDone: 0,
      clinicName: 'Centrum asistované reprodukce',
    },
    journalNotes: [
      'Břicho mám nafouklé jako po Vánocích. A to jsem teprve v půlce.',
      'Injekce dnes šla líp. Ruce se mi klepaly jen chvíli.',
      'Na ultrazvuku napočítali čtrnáct folikulů. Nevím, jestli mám mít radost.',
      'Jsem podrážděná na všechny. Vím, že za to nemůžou.',
    ],
    labs: [
      ['amh', 5.8, 'ng/ml', -120],
      ['fsh', 5.1, 'IU/l', -120],
      ['lh', 9.4, 'IU/l', -120],
      ['estradiol', 410, 'pmol/l', -6],
      ['estradiol', 2260, 'pmol/l', -3],
      ['estradiol', 7480, 'pmol/l', -1],
    ],
    meds: [
      { name: 'Gonadotropin (injekce)', dose: 'podle předpisu', timeOfDay: '20:00', from: -6 },
      { name: 'Antagonista', dose: 'podle předpisu', timeOfDay: '20:00', from: -2 },
    ],
    events: [
      { title: 'Ultrazvuk — kontrola folikulů', kind: 'uz', in: 1, atTime: '07:00' },
      { title: 'Předpokládaný odběr vajíček', kind: 'odber', in: 4, atTime: '08:00', note: 'Přijít nalačno, s doprovodem.' },
    ],
    timeline: [
      { title: 'První injekce', body: 'Manžel mi ji píchl. Trvalo nám to dvacet minut a smáli jsme se u toho.', on: -6, icon: '◍' },
    ],
    posts: [
      {
        body: 'Sedmý den stimulace a mám pocit, že mi břicho nepatří. Kdy to poleví?',
        replies: ['U mě to nejhorší bylo těsně před odběrem. Pak to šlo rychle dolů. Pijte a solte jídlo.'],
      },
    ],
  },
  {
    key: 'klara',
    name: 'Klára',
    tagline: '24. týden těhotenství · dvojčata',
    profile: {
      displayName: 'Klára',
      declaredPhase: 'pregnancy',
      birthYear: 1988,
      modifiers: ['twins', 'high_risk', 'donor_egg'],
      tryingSince: addDays(NOW, -1500),
      transferOn: addDays(NOW, -163),
      betaTestOn: addDays(NOW, -154),
      lastPeriodOn: addDays(NOW, -24 * 7),
      dueDate: addDays(NOW, 112),
      ivfCycles: 3,
      transfersDone: 4,
      miscarriages: 1,
      embryoDayAtTransfer: 5,
      clinicName: 'Klinika reprodukční medicíny',
    },
    journalNotes: [
      'Poprvé jsem cítila kopnutí zevnitř. Obě najednou. Brečela jsem.',
      'Pořád čekám, kdy přijde ta rána. Po třech letech se radovat neumím.',
      'Záda mě zabíjejí a je teprve dvacátý čtvrtý týden.',
      'Koupili jsme dvě postýlky. Musela jsem si sednout.',
    ],
    labs: [
      ['hcg', 412, 'IU/l', -152],
      ['hcg', 1180, 'IU/l', -150],
      ['tsh', 1.8, 'mIU/l', -60],
      ['hemoglobin', 118, 'g/l', -30],
    ],
    meds: [
      { name: 'Kyselina listová + jód', dose: 'podle předpisu', timeOfDay: '08:00', from: -170 },
      { name: 'Železo', dose: 'podle předpisu', timeOfDay: '12:00', from: -40 },
    ],
    events: [
      { title: 'Kontrola v centru pro rizikové těhotenství', kind: 'kontrola', in: 3, atTime: '09:30' },
      { title: 'Ultrazvuk — růst obou plodů', kind: 'uz', in: 17, atTime: '10:00' },
    ],
    timeline: [
      { title: 'Dvě srdíčka na prvním ultrazvuku', body: 'Lékařka mlčela a pak řekla: „Vidím dvě.“ Manžel se musel posadit.', on: -140, icon: '❋' },
      { title: 'Konec prvního trimestru', body: 'Poprvé jsem to řekla nahlas v práci.', on: -84, icon: '◉' },
    ],
    letter: {
      toWhom: 'baby',
      title: 'Vám dvěma',
      on: -30,
      body: `Ještě nevím, jak vypadáte. Vím jen, že jste dvě a že se hýbete nejvíc, když si chci lehnout.

Dlouho jsem se bála o vás mluvit. Jako by pojmenování něco zakřiklo. Tak vám to píšu radši sem.

Čekala jsem na vás tři roky. A i kdyby na tom nezáleželo nikomu jinému, chci, abyste jednou věděly, že jste tu byly chtěné dřív, než jste vůbec byly.`,
    },
    posts: [
      {
        body: 'Dvacátý čtvrtý týden s dvojčaty. Jak jste zvládaly spaní ve třetím trimestru?',
        replies: ['Polštář mezi kolena a druhý pod břicho. A smířit se s tím, že se budete budit. U dvojčat to jde rychle.'],
      },
    ],
  },
  {
    key: 'petra',
    name: 'Petra',
    tagline: '11 dní po zamlklém těhotenství',
    profile: {
      displayName: 'Petra',
      declaredPhase: 'loss_missed',
      birthYear: 1990,
      modifiers: ['after_loss', 'repeated_failure', 'endometriosis'],
      tryingSince: addDays(NOW, -1100),
      diagnosticsStartedOn: addDays(NOW, -900),
      transferOn: addDays(NOW, -70),
      betaTestOn: addDays(NOW, -61),
      lossOn: addDays(NOW, -11),
      ivfCycles: 3,
      transfersDone: 3,
      miscarriages: 2,
      embryosFrozen: 2,
      clinicName: 'Klinika reprodukční medicíny',
    },
    journalNotes: [
      'Na ultrazvuku bylo ticho. To ticho slyším pořád.',
      'Dnes se mě zeptali v práci, jestli je všechno v pořádku. Řekla jsem, že ano.',
      'Nemám sílu na nic. A pak mám vztek, že nemám sílu.',
      'Poprvé po dvou týdnech jsem se najedla u stolu, ne u dřezu.',
    ],
    labs: [
      ['hcg', 620, 'IU/l', -59],
      ['hcg', 940, 'IU/l', -55],
      ['hcg', 88, 'IU/l', -9],
      ['hcg', 12, 'IU/l', -3],
    ],
    meds: [{ name: 'Železo', dose: 'podle předpisu', timeOfDay: '12:00', from: -10 }],
    events: [
      { title: 'Kontrola po revizi', kind: 'kontrola', in: 4, atTime: '11:00' },
      { title: 'Konzultace — co dál', kind: 'kontrola', in: 25, atTime: '15:00', note: 'Sepsat otázky předem.' },
    ],
    timeline: [
      { title: 'Pozitivní test', body: 'Třetí pokus. Poprvé jsem si dovolila věřit.', on: -61, icon: '✶' },
      { title: 'Ultrazvuk bez ozvy', body: 'Nechci to popisovat. Jen chci, aby tu ten den byl.', on: -13, icon: '❦' },
    ],
    letter: {
      toWhom: 'lost',
      title: 'Tobě',
      on: -8,
      body: `Byla jsi tady sedm týdnů a čtyři dny.

Nikdo tě neviděl kromě mě a jedné lékařky. Přesto jsem ti stihla vymyslet pokoj, vánoce a jméno, které nikomu neřeknu.

Neomlouvám se ti. Vím, že jsem nic neudělala špatně, i když si to tělo pořád myslí.

Jenom chci, abys byla někde napsaná. Tak jsi tady.`,
    },
    posts: [
      {
        body: 'Jedenáct dní po zamlklém. Kdy jste byly schopné se vrátit mezi lidi?',
        replies: [
          'Mně trvalo tři týdny, než jsem zvládla nákup. Není v tom žádný správný čas.',
          'Nechala jsem si napsat neschopenku. Doteď je to nejlepší rozhodnutí, co jsem udělala.',
        ],
      },
    ],
  },
  {
    key: 'jana',
    name: 'Jana',
    tagline: '19. den na NICU · miminko z 29. týdne',
    profile: {
      displayName: 'Jana',
      declaredPhase: 'nicu',
      birthYear: 1993,
      modifiers: ['preterm', 'nicu_stay', 'csection', 'pumping', 'cervical_insufficiency'],
      transferOn: addDays(NOW, -222),
      lastPeriodOn: addDays(NOW, -222 - 19),
      dueDate: addDays(NOW, 59),
      birthOn: addDays(NOW, -18),
      nicuAdmissionOn: addDays(NOW, -18),
      gestationalWeeksAtBirth: 29,
      ivfCycles: 2,
      transfersDone: 2,
      embryoDayAtTransfer: 5,
      clinicName: 'Perinatologické centrum',
    },
    journalNotes: [
      'Dnes vážila o dvacet gramů víc. Dvacet gramů je celý den radosti.',
      'Poprvé jsem ji držela na hrudi. Hodinu a půl jsem se nehnula.',
      'Odsávačka ve tři ráno. Sedmnáct mililitrů. Připadám si k ničemu.',
      'Sestra řekla, že je bojovnice. Já vím, že to říkají všem. Stejně to pomohlo.',
    ],
    labs: [
      ['bilirubin', 168, 'µmol/l', -15],
      ['bilirubin', 96, 'µmol/l', -12],
      ['crp', 4, 'mg/l', -14],
      ['hemoglobin', 132, 'g/l', -10],
    ],
    meds: [
      { name: 'Analgezie po císaři', dose: 'podle předpisu', timeOfDay: '08:00', from: -18 },
      { name: 'Železo', dose: 'podle předpisu', timeOfDay: '12:00', from: -14 },
    ],
    events: [
      { title: 'Vizita — plán krmení', kind: 'kontrola', in: 1, atTime: '08:00' },
      { title: 'Kontrola jizvy', kind: 'kontrola', in: 6, atTime: '13:00' },
      { title: 'Oční vyšetření (ROP)', kind: 'kontrola', in: 9, atTime: '10:30' },
    ],
    timeline: [
      { title: 'Porod ve 29+2', body: 'Císař v noci. Slyšela jsem ji pípnout a pak ji odvezli.', on: -18, icon: '✿' },
      { title: 'První klokánkování', body: 'Devadesát minut. Usnula mi na hrudi a alarm ani jednou nepípl.', on: -12, icon: '♡' },
      { title: 'Sundali CPAP', body: 'Dýchá sama. Poprvé jsem jí viděla celý obličej.', on: -4, icon: '❋' },
    ],
    letter: {
      toWhom: 'baby',
      title: 'Mojí bojovnici',
      on: -10,
      body: `Přišla jsi o jedenáct týdnů dřív, než jsi měla.

Prvních pět dní jsem tě mohla jenom držet za ruku přes okénko inkubátoru. Naučila jsem se číst monitory dřív než tvůj obličej.

Dnes jsi na mně ležela hodinu a půl a tvoje saturace byla lepší než kdykoliv jindy. Sestry to napsaly do zprávy. Já vím, co to znamená: pomáhám ti. I když si celý den připadám k ničemu.

Až tohle budeš číst, budeš mít někde na patě jizvičku a nebudeš vědět proč. Tohle je proč.`,
    },
    posts: [
      {
        body: 'Devatenáctý den na oddělení. Jak jste zvládaly cestu domů bez miminka?',
        replies: [
          'Nechala jsem si v autě její dečku a vozila ji s sebou. Znělo to bláznivě, ale pomohlo.',
          'První týden doma bez ní jsem probrečela. Pak jsem si udělala režim a šlo to. Vydržte.',
        ],
      },
    ],
  },
  {
    key: 'marketa',
    name: 'Markéta',
    tagline: '9. den šestinedělí · po císaři',
    profile: {
      displayName: 'Markéta',
      declaredPhase: 'postpartum',
      birthYear: 1992,
      modifiers: ['csection', 'breastfeeding', 'icsi'],
      transferOn: addDays(NOW, -277),
      lastPeriodOn: addDays(NOW, -285),
      dueDate: addDays(NOW, -3),
      birthOn: addDays(NOW, -8),
      gestationalWeeksAtBirth: 39,
      ivfCycles: 1,
      transfersDone: 2,
      embryoDayAtTransfer: 5,
      clinicName: 'Klinika reprodukční medicíny',
    },
    journalNotes: [
      'Jizva bolí při vstávání. Naučila jsem se otáčet na bok jako mě učili.',
      'Ve tři ráno jsem si říkala, co jsem to provedla. V šest jsem ji držela a bylo to dobrý.',
      'Návaly potu v noci. Nikdo mě nevaroval, že tohle přijde.',
      'Kojení konečně nebolí. Trvalo to devět dní.',
    ],
    labs: [
      ['hemoglobin', 104, 'g/l', -7],
      ['crp', 6, 'mg/l', -7],
    ],
    meds: [
      { name: 'Analgezie podle potřeby', dose: 'podle předpisu', timeOfDay: '08:00', from: -8 },
      { name: 'Železo', dose: 'podle předpisu', timeOfDay: '12:00', from: -6 },
    ],
    events: [
      { title: 'Návštěva dětské sestry', kind: 'kontrola', in: 1, atTime: '10:00' },
      { title: 'Kontrola u pediatra', kind: 'kontrola', in: 5, atTime: '11:30' },
      { title: 'Šestinedělní prohlídka', kind: 'kontrola', in: 33, atTime: '09:00' },
    ],
    timeline: [
      { title: 'Narodila se', body: 'Císař po dvanácti hodinách. 3210 g, 49 cm.', on: -8, icon: '✿' },
      { title: 'První noc doma', body: 'Nespali jsme. Ani jednu minutu. A bylo to nejlepší.', on: -4, icon: '♡' },
    ],
    posts: [
      {
        body: 'Devátý den po císaři. Kdy jste zvládly první procházku ven?',
        replies: ['Desátý den kolem bloku, pomalu. Nechtějte po sobě víc, než jde. Jizva to spočítá.'],
      },
    ],
  },
]

// ------------------------------------------------------------- generování ---

function clamp(n: number): number {
  return Math.max(1, Math.min(5, n))
}

function buildPersona(spec: PersonaSpec) {
  const user = createUser(`${spec.key}@nahled.ivfbygabi.cz`, 'nahled1234', spec.name)
  activateSubscription(user.id, 'monthly')
  updateProfile(user.id, spec.profile)
  const profile = getProfile(user.id)

  // --- Deník: 21 dní zpět ------------------------------------------------
  for (let i = 20; i >= 0; i--) {
    const date = addDays(NOW, -i)
    const wave = Math.sin(i / 3)
    const dayState = resolveJourney(profile, date)
    upsertJournal(user.id, date, {
      mood: clamp(3 + Math.round(wave * 1.4)),
      anxiety: clamp(3 - Math.round(wave * 1.2)),
      hope: clamp(3 + Math.round(Math.cos(i / 4) * 1.3)),
      energy: clamp(3 + Math.round(Math.cos(i / 5) * 1.1)),
      pain: i < 8 ? clamp(2 + Math.round(Math.abs(wave))) : null,
      sleepHours: 6 + Math.round(wave * 10) / 10,
      waterMl: 1600 + (i % 5) * 250,
      weightKg: 64 + Math.round(Math.sin(i / 6) * 8) / 10,
      symptoms: i < 7 ? ['Únava', 'Citlivá prsa'] : ['Únava'],
      note: i % 3 === 0 ? spec.journalNotes[i % spec.journalNotes.length] : null,
      gratitude: i % 4 === 0 ? 'Za to, že v tom nejsem sama.' : null,
      phaseId: dayState.phase.id,
      dayInPhase: dayState.dayInPhase,
    })
  }

  for (const [key, value, unit, offset] of spec.labs) {
    addLabValue(user.id, { paramKey: key, value, unit, onDate: addDays(NOW, offset) })
  }

  for (const med of spec.meds) {
    addMedication(user.id, {
      name: med.name,
      dose: med.dose,
      route: null,
      timeOfDay: med.timeOfDay,
      startOn: addDays(NOW, med.from),
      endOn: null,
      note: null,
    })
  }

  for (const ev of spec.events) {
    addEvent(user.id, {
      title: ev.title,
      kind: ev.kind,
      onDate: addDays(NOW, ev.in),
      atTime: ev.atTime ?? null,
      location: spec.profile.clinicName ?? null,
      note: ev.note ?? null,
    })
  }

  for (const t of spec.timeline) {
    addTimelineEvent(user.id, {
      onDate: addDays(NOW, t.on),
      title: t.title,
      body: t.body,
      kind: 'milnik',
      icon: t.icon,
      mediaId: null,
    })
  }

  if (spec.letter) {
    addLetter(user.id, {
      toWhom: spec.letter.toWhom,
      title: spec.letter.title,
      body: spec.letter.body,
      onDate: addDays(NOW, spec.letter.on),
      sealedUntil: null,
    })
  }

  const state = resolveJourney(profile, NOW)

  // Chování → personalizace. Přesně to, co dělá aplikace za běhu.
  const viewed = CATALOG.filter((c) => c.phases.includes(state.phase.id)).slice(0, 8)
  for (const item of viewed) recordContentEvent(user.id, item.id, 'view', 120)
  const affinity = applyTopicAffinity(getAffinity(user.id), CATALOG)

  // --- Komunita ----------------------------------------------------------
  const groups = matchedGroups(profile, state)
  const author = communityName(profile, state)
  const posts: Array<{ author: string; body: string; hearts: number; replies: { author: string; body: string }[] }> = []
  const circle = groups.find((g) => g.slug === 'vecerni-kruh') ?? groups[0]
  if (circle) {
    for (const p of spec.posts) {
      const post = addPost(circle.id, user.id, author, p.body, state.phase.id)
      for (const r of p.replies) addReply(post.id, user.id, 'Anonymní žena', r)
      const stored = listPosts(circle.id, user.id, 10).find((x) => x.id === post.id)
      posts.push({
        author,
        body: p.body,
        hearts: (stored?.hearts ?? 0) + 3 + p.replies.length,
        replies: p.replies.map((body) => ({ author: 'Anonymní žena', body })),
      })
    }
  }

  // --- Jednotlivé dny ----------------------------------------------------
  const days = DAY_OFFSETS.map((offset) => {
    const date = addDays(NOW, offset)
    const dayState = resolveJourney(profile, date)
    const card = pickDailyCard(DAILY_CARDS, dayState)
    const rails = buildRails(CATALOG, dayState, affinity)
    const feature = recommend(CATALOG, dayState, affinity, { limit: 1 })[0]
    const upcoming = listEvents(user.id, date, addDays(date, 21)).filter((e) => !e.done)
    const memories = memoriesFor(user.id, date)

    return {
      date,
      dateLabel: formatCzechDate(date, { weekday: true }),
      offset,
      dayLabel: dayState.dayLabel,
      phaseId: dayState.phase.id,
      phaseTitle: dayState.phase.title,
      phaseDescription: dayState.phase.description,
      group: dayState.group,
      progress: dayState.progress,
      gestationLabel: dayState.gestationLabel,
      babyAgeLabel: dayState.babyAgeLabel,
      usesCorrectedAge: dayState.usesCorrectedAge,
      nextMilestone: dayState.nextMilestone
        ? { label: dayState.nextMilestone.label, inDays: dayState.nextMilestone.inDays, human: czDays(dayState.nextMilestone.inDays) }
        : null,
      card: card ?? null,
      encouragement: pickEncouragement(dayState.phase.tone, date),
      featureId: feature?.id ?? null,
      featureReason: reasonFor(dayState.dayLabel),
      rails: rails.map((r) => ({ id: r.id, title: r.title, reason: r.reason, items: r.items.map((i) => i.id) })),
      upcoming: upcoming.slice(0, 5).map((e) => ({
        title: e.title,
        kind: e.kind,
        kindLabel: EVENT_KINDS[e.kind]?.label ?? 'Událost',
        icon: EVENT_KINDS[e.kind]?.icon ?? '•',
        onDate: e.onDate,
        atTime: e.atTime,
        location: e.location,
        note: e.note,
        inDays: Math.round((Date.parse(e.onDate) - Date.parse(date)) / 86_400_000),
      })),
      memories: memories.map((m) => ({ label: m.label, body: m.event.body, icon: m.event.icon, onDate: m.event.onDate })),
    }
  })

  return { user, profile, state, spec, groups, posts, days, affinity }
}

function pickEncouragement(tone: string, date: string) {
  const matching = ENCOURAGEMENTS.filter((e) => e.tone === tone)
  const pool = matching.length > 0 ? matching : ENCOURAGEMENTS
  if (pool.length === 0) return null
  const picked = pool[seedFrom(date, tone) % pool.length]
  return { text: picked.text, author: picked.author ?? null }
}

function reasonFor(dayLabel: string): string {
  return dayLabel.replace(/^Dnes (je|jste) /, 'Protože jste ').replace(/^Dnes /, 'Protože ')
}

function labSeries(userId: string) {
  const values = listLabValues(userId)
  const byKey = new Map<string, typeof values>()
  for (const v of values) {
    byKey.set(v.paramKey, [...(byKey.get(v.paramKey) ?? []), v])
  }
  return [...byKey.entries()].map(([key, points]) => {
    const param = LAB_PARAMS.find((p) => p.key === key)
    return {
      key,
      name: param?.name ?? key,
      unit: param?.unit ?? points[0]?.unit ?? '',
      explain: param?.explain ?? '',
      reference: param?.reference ?? null,
      points: points
        .slice()
        .sort((a, b) => a.onDate.localeCompare(b.onDate))
        .map((p) => ({ date: p.onDate, value: p.value })),
    }
  })
}

async function main() {
  const outPath = process.argv[2] ?? join(process.cwd(), 'preview', 'ivf-by-gabi.html')

  const personas = []
  for (const spec of PERSONAS) {
    const built = buildPersona(spec)
    const { user, profile, state, days, groups, posts } = built

    const journal = []
    for (let i = 20; i >= 0; i--) {
      const date = addDays(NOW, -i)
      const wave = Math.sin(i / 3)
      journal.push({
        date,
        mood: clamp(3 + Math.round(wave * 1.4)),
        anxiety: clamp(3 - Math.round(wave * 1.2)),
        hope: clamp(3 + Math.round(Math.cos(i / 4) * 1.3)),
        energy: clamp(3 + Math.round(Math.cos(i / 5) * 1.1)),
        sleepHours: 6 + Math.round(wave * 10) / 10,
        note: i % 3 === 0 ? spec.journalNotes[i % spec.journalNotes.length] : null,
      })
    }

    // AI Gabi bez klíče = offline režim nad knihovnou. Přesně to, co uvidí
    // uživatelka, když API klíč chybí — takže náhled nic nepředstírá.
    const prompts = suggestedPrompts(state).slice(0, 4)
    const answers = []
    for (const q of prompts) {
      const a = await askGabi(q, {
        state,
        profile,
        catalog: CATALOG,
        recentMood: journal.slice(-3).map((j) => ({ date: j.date, mood: j.mood, note: j.note })),
        labs: listLabValues(user.id),
      })
      answers.push({ q, text: a.text, refs: a.refs, source: a.source })
    }

    const advice = adviceFor(state.group, state.phase.tone)

    personas.push({
      key: spec.key,
      name: spec.name,
      tagline: spec.tagline,
      anonymousName: communityName(profile, state),
      chips: [
        profile.birthYear ? `${new Date().getFullYear() - profile.birthYear} let` : null,
        profile.clinicName,
        profile.amh ? `AMH ${profile.amh}` : null,
        profile.ivfCycles ? `${profile.ivfCycles}. cyklus` : null,
        ...(profile.modifiers as ModifierId[]).map((m) => MODIFIER_LABELS[m]),
      ].filter(Boolean),
      days,
      journal,
      labs: labSeries(user.id),
      meds: listMedications(user.id, true).map((m) => ({ name: m.name, dose: m.dose, timeOfDay: m.timeOfDay })),
      events: listEvents(user.id, addDays(NOW, -30), addDays(NOW, 120)).map((e) => ({
        title: e.title,
        kind: e.kind,
        kindLabel: EVENT_KINDS[e.kind]?.label ?? 'Událost',
        icon: EVENT_KINDS[e.kind]?.icon ?? '•',
        onDate: e.onDate,
        dateLabel: formatCzechDate(e.onDate, { weekday: true }),
        atTime: e.atTime,
        location: e.location,
        note: e.note,
        auto: e.auto,
      })),
      groups: groups.map((g) => ({ slug: g.slug, name: g.name, description: g.description, kind: g.kind, members: g.members })),
      posts,
      timeline: spec.timeline
        .map((t) => ({ onDate: addDays(NOW, t.on), dateLabel: formatCzechDate(addDays(NOW, t.on)), title: t.title, body: t.body, icon: t.icon }))
        .sort((a, b) => b.onDate.localeCompare(a.onDate)),
      letters: spec.letter
        ? [
            {
              title: spec.letter.title,
              toWhom: spec.letter.toWhom,
              onDate: addDays(NOW, spec.letter.on),
              dateLabel: formatCzechDate(addDays(NOW, spec.letter.on)),
              body: spec.letter.body,
            },
          ]
        : [],
      partner: {
        advice,
        avgMood: Math.round((journal.slice(-7).reduce((a, j) => a + j.mood, 0) / 7) * 10) / 10,
        contentIds: CATALOG.filter((c) => c.topics.includes('partner')).slice(0, 6).map((c) => c.id),
      },
      gabi: { prompts, answers },
    })
  }

  const payload = {
    generatedOn: NOW,
    generatedLabel: formatCzechDate(NOW, { weekday: true }),
    stats: { ...CONTENT_STATS, phases: PHASE_IDS.length },
    kindLabels: KIND_LABELS,
    kindIcons: KIND_ICONS,
    topicLabels: TOPIC_LABELS,
    modifierLabels: MODIFIER_LABELS,
    phaseGroups: PHASE_GROUPS.map((g) => ({ id: g, ...PHASE_GROUP_META[g] })),
    phases: PHASE_IDS.map((id) => {
      const p = PHASES[id]
      return {
        id: p.id,
        group: p.group,
        name: p.name,
        title: p.title,
        description: p.description,
        tone: p.tone,
        typicalDays: p.typicalDays,
        next: p.next,
        dayExample: p.dayLabel ? p.dayLabel(3) : null,
        items: CATALOG.filter((c) => c.phases.includes(id)).slice(0, 8).map((c) => c.id),
        cards: DAILY_CARDS.filter((c) => c.phases.includes(id)).length,
      }
    }),
    catalog: CATALOG.map((c) => ({
      id: c.id,
      kind: c.kind,
      title: c.title,
      excerpt: c.excerpt,
      body: c.body,
      minutes: c.minutes,
      level: c.level,
      hero: c.hero,
      topics: c.topics,
      phases: c.phases,
      author: c.author ?? null,
      reviewedBy: c.reviewedBy ?? null,
      sources: c.sources ?? null,
      publishedOn: c.publishedOn,
      mediaNote: c.mediaNote ?? null,
      checklist: c.checklist ?? null,
      quiz: c.quiz ?? null,
      chapters: c.chapters ?? null,
    })),
    glossary: GLOSSARY,
    products: PRODUCTS.map((p) => ({
      id: p.id,
      name: p.name,
      category: p.category,
      whyNow: p.whyNow,
      priceFrom: p.priceFrom,
      phases: p.phases,
      rating: p.rating,
      reviews: p.reviews,
      vendor: p.vendor,
      kind: p.kind,
      hero: p.hero,
    })),
    personas,
  }

  const template = readFileSync(join(process.cwd(), 'scripts', 'preview.template.html'), 'utf8')
  const fontCss = safeRead(join(process.cwd(), 'scripts', 'preview.fonts.css'))

  const html = template
    .replace('/*__FONTS__*/', () => fontCss)
    .replace('/*__DATA__*/', () => JSON.stringify(payload).replace(/</g, '\\u003c'))

  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf8')

  const kb = Math.round(Buffer.byteLength(html) / 1024)
  console.log(`Náhled zapsán: ${outPath} (${kb} kB)`)
  console.log(`  profilů: ${personas.length} × ${DAY_OFFSETS.length} dní`)
  console.log(`  obsahu:  ${CATALOG.length} položek, ${DAILY_CARDS.length} denních karet`)
}

function safeRead(path: string): string {
  try {
    return readFileSync(path, 'utf8')
  } catch {
    return ''
  }
}

main()
