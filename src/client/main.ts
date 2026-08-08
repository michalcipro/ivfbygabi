import { PHASES, isPhaseId } from '../lib/domain/phases'
import { isModifierId, type ModifierId } from '../lib/domain/profile'
import { today as realToday } from '../lib/domain/dates'
import { contentById } from '../lib/content'
import { LAB_BY_KEY } from '../lib/health/lab-params'
import type { Letter } from '../lib/shared/records'

import {
  cycleTitle,
  type CycleKind,
  type CycleOutcome,
  type FertMethod,
  OUTCOME_LABEL,
  type MaterialSource,
  type NoEmbryoReason,
  type PrepKind,
  type HcgKind,
  type HcgLook,
  type TransferKind,
  type TransferOutcome,
  type TransferStage,
} from '../lib/domain/cycle'

import { esc, head, note } from './ui'
import { emptyContact, emptyCoordinator } from '../lib/domain/clinic'
import type { ChangeStep } from '../lib/domain/phase-change'
import type { Frequency } from '../lib/domain/support'
import { addPhotos, allPhotos, initPhotos, photoUrl, pickImages, removePhoto } from './photos'
import {
  addCustomExam,
  addCycle,
  addExpense,
  addPayment,
  closeCycleNow,
  expenseById,
  removeExpense,
  removePayment,
  updateExpense,
  applyPhaseChange,
  phasePlan,
  addDoc,
  addEmbryo,
  addSupport,
  addHcgTest,
  addTransfer,
  cycleById,
  deleteCycle,
  deleteDoc,
  deleteEmbryo,
  deleteExam,
  deleteSupport,
  embryoById,
  ensureExam,
  journey,
  journalFor,
  learn,
  load,
  patch,
  profile,
  reset,
  S,
  removeExercise,
  removeJournal,
  saveExercise,
  wipeJournal,
  saveJournal,
  setEventNote,
  toggleEventDone,
  toggleSaved,
  uid,
  viewDate,
  isOnboarded,
  addShot,
  currentMedName,
  activeCycleId,
  setSymptomIntensity,
  toggleSymptomLog,
  photosOf,
  removeHcgTest,
  removeTransfer,
  toggleCycleMethod,
  toggleDiagnosis,
  updateClinic,
  updateCycle,
  updateEmbryo,
  updateExam,
  updateSupport,
  withPhotos,
  type DocKind,
  type HealthKind,
  type JournalRow,
  type QuestionPriority,
  type QuestionStatus,
  type StepKind,
} from './store'
import { draft, phasePicker, profileFromDraft, renderOnboarding, ROUTES, routeById, stepHasDate, type RouteDef } from './onboarding'
import { screenCesta, screenObjevit, screenProc } from './screens-home'
import { screenDnes, screenNuzky } from './screens-dnes'
import { isZapisSection, screenZapis, type ZapisSection } from './screens-zapis'
import { isLekySection, screenLeky, type LekySection } from './screens-leky'
import { isSledSection, screenSledovani, type SledSection } from './screens-sledovani'
import { screenPruvodce } from './screens-pruvodce'
import { isJourneySection, screenJourney, type JourneySection } from './screens-journey'
import { screenCyklus } from './screens-cyklus'
import type { EmbryoFate, EmbryoStage, PgtKind, PgtResult, ThawResult } from '../lib/domain/embryo'
import type { PaymentMethod } from '../lib/domain/finance'
import { JINY_LEK, kindFor, type MedKind } from '../lib/domain/meds-catalog'
import {
  isExamWho,
  screenDiagnoza as screenMojeDiagnoza,
  screenEmbrya,
  screenHistorieIvf,
  screenKlinika,
  screenPodpora,
  screenTransfery,
  screenVysetreni,
  screenVysledky,
  stageForDay,
} from './screens-ivf'
import { isOtazkySection, otazkyCopyText, screenOtazky, type OtazkySection } from './screens-otazky'
import { isZdravSection, measureTitle, screenZdravotni, type ZdravSection } from './screens-zdravotni'
import { weekShareText } from './screens-tyden'
import { hydrateCharts, wordmark } from './viz'
import { quickButton, quickSheet } from './quick-add'
import { currentReport, openReport } from './report-print'
import {
  screenDiagnoza,
  screenDiagnozy,
  screenFaze,
  screenPojem,
  SECTIONS,
  type SectionId,
} from './screens-phase'
import { screenChecklisty, screenCist, screenCoKdyz, screenHledat, screenKnihovna } from './screens-tools'
import {
  czechVoice,
  onSpeechChange,
  restartSpeech,
  speechAvailable,
  speechState,
  stopSpeech,
  toggleSpeech,
} from './speech'
import { DENIK_SECTIONS, screenCviceni, screenDenik, type DenikSection } from './screens-denik'
import { screenHodnota, screenZdravi } from './screens-zdravi'
import { isTransferSection, screenPoTransferu, type TransferSection } from './screens-transfer'
import { isFinanceSection, screenFinance, type FinanceSection } from './screens-finance'
import { renderSummary, type SummaryId } from './summary'
import {
  screenClenstvi,
  screenDokumenty,
  screenProfil,
  screenKalendar,
  screenKomunita,
  screenNastaveni,
  screenObchod,
  screenPartner,
  screenPribeh,
  screenSkupina,
  screenVice,
} from './screens-more'

/**
 * Kostra aplikace: routování, vykreslení a akce.
 *
 * Pravidla, na kterých to stojí:
 *  - pět stálých záložek, nic jiného se ve spodní liště neobjeví,
 *  - každá další obrazovka má nahoře lištu „zpět“ s tím, kam vede,
 *  - adresa v prohlížeči odpovídá obrazovce, takže funguje i tlačítko zpět.
 */

/**
 * Spodní lišta. Záznam je jádro aplikace, proto jsou první tři záložky
 * o něm, Dnes ukazuje, Zápis zaznamenává, Vývoj vrací zpátky. Informace
 * jsou až čtvrté, protože se k nim člověk dostane hlavně přes dnešek.
 */
const TABS = [
  { id: 'dnes', label: 'Dnes', icon: '◉' },
  { id: 'journey', label: 'Moje cesta', icon: '✧' },
  { id: 'pruvodce', label: 'Poznej IVF', icon: '❖' },
  { id: 'denik', label: 'Deník', icon: '✎' },
  { id: 'profil', label: 'Profil', icon: '◍' },
]

const SECONDARY = [
  { id: 'zapis', label: 'Zápis dne', icon: '✎' },
  { id: 'leky', label: 'Léky a injekce', icon: '✚' },
  { id: 'embrya', label: 'Moje embrya', icon: '❖' },
  { id: 'transfery', label: 'Moje transfery', icon: '❋' },
  { id: 'historie', label: 'Moje IVF historie', icon: '✧' },
  { id: 'mojediagnoza', label: 'Moje diagnóza', icon: '◈' },
  { id: 'vysetreni', label: 'Moje vyšetření', icon: '◉' },
  { id: 'podpora', label: 'Podpůrná péče', icon: '♡' },
  { id: 'sledovani', label: 'Sledování', icon: '◫' },
  { id: 'zdravotni', label: 'Zdravotní data', icon: '◉' },
  { id: 'otazky', label: 'Otázky pro lékaře', icon: '?' },
  { id: 'faze', label: 'Moje fáze', icon: '❖' },
  { id: 'hledat', label: 'Hledat v aplikaci', icon: '✦' },
  { id: 'denik', label: 'Deník a cvičení', icon: '✎' },
  { id: 'cesta', label: 'Celá cesta', icon: '✧' },
  { id: 'objevit', label: 'Objevit', icon: '❋' },
  { id: 'knihovna', label: 'Knihovna', icon: '❧' },
  { id: 'diagnozy', label: 'Diagnózy', icon: '◈' },
  { id: 'checklisty', label: 'Checklisty', icon: '✓' },
  { id: 'kalendar', label: 'Kalendář', icon: '◈' },
  { id: 'zdravi', label: 'Zdraví', icon: '◉' },
  { id: 'dokumenty', label: 'Dokumenty', icon: '▤' },
  { id: 'komunita', label: 'Komunita', icon: '◍' },
  { id: 'pribeh', label: 'Můj příběh', icon: '❦' },
  { id: 'obchod', label: 'Doporučené', icon: '◇' },
  { id: 'partner', label: 'Partner', icon: '♡' },
]

/** Na širokém displeji není spodní lišta, takže rozcestník musí být i tady. */
const TERTIARY = [
  { id: 'vice', label: 'Rozcestník', icon: '⋯' },
  { id: 'clenstvi', label: 'Členství', icon: '✦' },
  { id: 'nastaveni', label: 'Nastavení', icon: '⚙' },
]

const TITLES: Record<string, string> = {
  dnes: 'Dnes',
  zapis: 'Zápis',
  leky: 'Léky',
  sledovani: 'Sledování',
  pruvodce: 'Poznej IVF',
  nuzky: 'Nůžky dne',
  journey: 'Moje cesta',
  profil: 'Profil',
  'faze-zmena': 'Změnit fázi',
  cyklus: 'Cyklus',
  otazky: 'Otázky pro lékaře',
  zdravotni: 'Zdravotní data',
  objevit: 'Objevit',
  hledat: 'Hledání',
  cokdyz: 'Co když…',
  denik: 'Deník',
  vice: 'Více',
  cesta: 'Celá cesta',
  faze: 'Moje fáze',
  pojem: 'Pojem',
  cviceni: 'Cvičení',
  hodnota: 'Hodnota',
  diagnoza: 'Diagnóza',
  diagnozy: 'Diagnózy',
  knihovna: 'Knihovna',
  cist: 'Čtení',
  checklisty: 'Checklisty',
  kalendar: 'Kalendář',
  zdravi: 'Zdraví',
  dokumenty: 'Dokumenty',
  embrya: 'Moje embrya',
  transfery: 'Moje transfery',
  mojediagnoza: 'Moje diagnóza',
  vysetreni: 'Moje vyšetření',
  podpora: 'Podpůrná péče',
  historie: 'Moje IVF historie',
  klinika: 'Moje klinika',
  vysledky: 'Moje výsledky',
  komunita: 'Komunita',
  skupina: 'Skupina',
  pribeh: 'Můj příběh',
  obchod: 'Doporučené',
  partner: 'Partner mode',
  nastaveni: 'Nastavení',
  clenstvi: 'Členství',
  proc: 'Proč vidím tohle',
}

/** Tvar do věty „Zpět na …“. Uvedené jsou jen ty, kde se název skloňuje. */
const BACK_TITLES: Record<string, string> = {
  journey: 'Moji cestu',
  otazky: 'Otázky pro lékaře',
  zdravotni: 'Zdravotní data',
  cesta: 'celou cestu',
  faze: 'vaši fázi',
  diagnozy: 'Diagnózy',
  knihovna: 'Knihovnu',
  komunita: 'Komunitu',
  skupina: 'Skupinu',
}

/** Kam vede „zpět“, když uživatelka přišla přímo z odkazu. */
const PARENT: Record<string, string> = {
  cesta: 'pruvodce',
  objevit: 'pruvodce',
  pojem: 'faze',
  cviceni: 'denik',
  hodnota: 'zdravi',
  diagnoza: 'faze',
  diagnozy: 'pruvodce',
  knihovna: 'pruvodce',
  cist: 'objevit',
  checklisty: 'pruvodce',
  kalendar: 'pruvodce',
  zdravi: 'pruvodce',
  dokumenty: 'pruvodce',
  embrya: 'journey',
  transfery: 'journey',
  mojediagnoza: 'journey',
  vysetreni: 'journey',
  podpora: 'journey',
  historie: 'journey',
  klinika: 'profil',
  vysledky: 'journey',
  komunita: 'pruvodce',
  skupina: 'komunita',
  pribeh: 'pruvodce',
  obchod: 'pruvodce',
  partner: 'pruvodce',
  nastaveni: 'pruvodce',
  clenstvi: 'pruvodce',
  proc: 'dnes',
  journey: 'dnes',
  profil: 'dnes',
  'faze-zmena': 'dnes',
  cyklus: 'journey/historie',
  otazky: 'journey',
  zdravotni: 'journey',
  zapis: 'dnes',
  leky: 'dnes',
  sledovani: 'dnes',
  pruvodce: 'dnes',
  nuzky: 'dnes',
  faze: 'pruvodce',
  denik: 'pruvodce',
  hledat: 'pruvodce',
  cokdyz: 'pruvodce',
  vice: 'pruvodce',
}

/** Obrazovky, kde by souhrn rušil. Čtení a soustředěná práce. */
/** Kde by plovoucí tlačítko překáželo. Při čtení a při vyplňování. */
const QUICK_HIDDEN = ['cist', 'pojem', 'diagnoza', 'cviceni', 'clenstvi', 'cyklus']

const SUMMARY_HIDDEN = [
  'cist', 'pojem', 'diagnoza', 'cviceni', 'clenstvi',
  // Na těchhle obrazovkách je prstenec nebo graf sám o sobě souhrnem.
  'dnes', 'zapis', 'leky', 'sledovani', 'pruvodce', 'nuzky',
  // Tyhle mají vlastní hlavičku se stavem cyklu. Druhý souhrn nad ní
  // by říkal totéž jinými slovy.
  'journey', 'cyklus', 'otazky', 'zdravotni', 'po-transferu', 'finance',
]

/** Stav, který nemá cenu ukládat. Přežívá jen do zavření záložky. */
const view = {
  query: '',
  kind: 'vse',
  /** Která dlaždice souhrnu je rozbalená. */
  summary: null as SummaryId | null,
  /** Která skupina příznaků je rozbalená. */
  accordion: null as string | null,
  /** Rozbalená karta embrya. Vlastní stav. Harmonika sekcí je jiná věc. */
  embryo: null as string | null,
  /**
   * Který den cesty po transferu je otevřený. `null` = dnešek.
   *
   * Nepatří do adresy: dnešek se posouvá sám a odkaz na „den 4“ by za
   * týden vedl do minulosti, aniž by to bylo vidět.
   */
  trDen: null as string | null,
  /** Rozbalený výdaj ve financích. Rozepsaný formulář, ne navigace. */
  expense: null as string | null,
  /** Je otevřené rychlé přidání? */
  quick: false,
  docText: '',
  /** Zvolená fáze, která čeká na potvrzení. Dokud je tady, nic se nezměnilo. */
  phasePick: null as string | null,
  /** Kroky změny fáze, které si uživatelka odškrtla. */
  phaseOff: [] as string[],
  /**
   * Co se má dostat do PDF přehledu.
   *
   * Deník je schválně vypnutý. Přehled se dává z ruky, deník ne, dokud
   * si to uživatelka výslovně nezvolí. Volba se nikam neukládá, aby
   * příště zase začínala vypnutá.
   */
  report: { finance: true, journal: false },
}

let stack: string[] = []
const scrollMemory = new Map<string, number>()

/**
 * Překreslení, které nesmí hnout stránkou.
 *
 * Aplikace se překresluje celá. U navigace je to správně: nová obrazovka
 * začíná nahoře, návrat zpět na místě, kde uživatelka odešla. U akce na
 * téže obrazovce je to ale k vzteku. Žena vyplňuje transfer, rozbalí
 * genetické testování a stránka jí ujede na pozici, kterou si aplikace
 * zapamatovala při příchodu. Musí se znova doscrollovat a najít, kde byla.
 *
 * Akce proto překresluje s `keepPlace`: pozice i rozepsané pole zůstávají.
 */
let keepPlace = false

/** Překreslení bez pohybu stránky. Pro akce, které se dějí na místě. */
function renderInPlace(): void {
  keepPlace = true
  render()
}

interface FocusSnap {
  id: string
  start: number | null
  end: number | null
}

/** Kde stál kurzor, než se obrazovka překreslila. */
function snapFocus(): FocusSnap | null {
  const el = document.activeElement as HTMLInputElement | HTMLTextAreaElement | null
  if (!el?.id) return null
  const textove = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'
  return {
    id: el.id,
    start: textove ? el.selectionStart : null,
    end: textove ? el.selectionEnd : null,
  }
}

function restoreFocus(snap: FocusSnap | null): void {
  if (!snap) return
  const el = document.getElementById(snap.id) as HTMLInputElement | HTMLTextAreaElement | null
  if (!el) return
  el.focus({ preventScroll: true })
  // `setSelectionRange` neexistuje u date, number ani u selectu. Kurzor se
  // tam vrátit nedá a focus stačí.
  if (snap.start !== null && typeof el.setSelectionRange === 'function') {
    try {
      el.setSelectionRange(snap.start, snap.end ?? snap.start)
    } catch {
      /* pole, které výběr nepodporuje */
    }
  }
}

function currentRoute(): string {
  const raw = location.hash.replace(/^#\/?/, '')
  return raw || 'dnes'
}

const base = (route: string) => route.split('/')[0]
const arg = (route: string) => route.split('/').slice(1).join('/')

function go(route: string): void {
  scrollMemory.set(currentRoute(), window.scrollY)
  keepPlace = false
  location.hash = `#/${route}`
}

function back(): void {
  if (stack.length > 1) {
    history.back()
    return
  }
  go(PARENT[base(currentRoute())] ?? 'dnes')
}

// ------------------------------------------------------------- vykreslení ---

function screenFor(route: string): string {
  const b = base(route)
  const a = arg(route)
  switch (b) {
    case 'dnes':
      return screenDnes()
    case 'zapis': {
      const want = a.split('/')[0]
      return screenZapis(isZapisSection(want) ? (want as ZapisSection) : 'nalada', view.accordion)
    }
    case 'leky': {
      const want = a.split('/')[0]
      return screenLeky(isLekySection(want) ? (want as LekySection) : 'dnes')
    }
    case 'sledovani': {
      const want = a.split('/')[0]
      return screenSledovani(isSledSection(want) ? (want as SledSection) : 'vyvoj')
    }
    case 'pruvodce':
      return screenPruvodce()
    case 'nuzky':
      return screenNuzky()
    case 'journey': {
      const want = a.split('/')[0]
      return screenJourney(isJourneySection(want) ? (want as JourneySection) : 'prehled', view.accordion)
    }
    case 'finance': {
      const want = a.split('/')[0]
      return screenFinance(isFinanceSection(want) ? (want as FinanceSection) : 'prehled', view.expense)
    }
    case 'po-transferu': {
      const want = a.split('/')[0]
      return screenPoTransferu(
        isTransferSection(want) ? (want as TransferSection) : 'dnes',
        view.trDen,
      )
    }
    case 'cyklus':
      // Bez rozbalené sekce by formulář byl celý zavřený a nově založený
      // cyklus by neměl kam psát. Výchozí je Základ, zbytek je na klepnutí.
      return screenCyklus(a, view.accordion ?? 'cyklus-zaklad', view.embryo)
    case 'otazky': {
      const want = a.split('/')[0]
      return screenOtazky(isOtazkySection(want) ? (want as OtazkySection) : 'ceka', view.accordion)
    }
    case 'zdravotni': {
      const want = a.split('/')[0]
      return screenZdravotni(isZdravSection(want) ? (want as ZdravSection) : 'mereni')
    }
    case 'objevit':
      return screenObjevit()
    case 'hledat':
      return screenHledat(view.query)
    case 'cokdyz':
      return screenCoKdyz()
    case 'denik': {
      const wanted = a.split('/')[0]
      const section = (DENIK_SECTIONS.some((x) => x.id === wanted) ? wanted : 'dnes') as DenikSection
      return screenDenik(section, view.accordion)
    }
    case 'cviceni':
      return screenCviceni(a)
    case 'vice':
      return screenVice()
    case 'cesta':
      return screenCesta()
    case 'faze': {
      const parts = a.split('/').filter(Boolean)
      const phaseId = (isPhaseId(parts[0]) ? parts[0] : journey().phase.id)
      const wanted = parts[1] ?? parts[0]
      const section = (SECTIONS.some((x) => x.id === wanted) ? wanted : 'prehled') as SectionId
      return screenFaze(phaseId, section)
    }
    case 'pojem':
      return screenPojem(a)
    case 'diagnoza':
      return screenDiagnoza(a)
    case 'diagnozy':
      return screenDiagnozy()
    case 'knihovna':
      return screenKnihovna(view.query, view.kind)
    case 'cist':
      return screenCist(a)
    case 'checklisty':
      return screenChecklisty()
    case 'kalendar':
      return screenKalendar()
    case 'zdravi':
      return screenZdravi()
    case 'hodnota':
      return screenHodnota(a)
    case 'dokumenty':
      return screenDokumenty()
    case 'profil':
      return screenProfil()
    case 'faze-zmena':
      return screenZmenaFaze()
    case 'embrya':
      return screenEmbrya(view.embryo)
    case 'transfery':
      return screenTransfery()
    case 'mojediagnoza':
      return screenMojeDiagnoza()
    case 'vysetreni':
      return screenVysetreni(isExamWho(a) ? a : 'zena')
    case 'podpora':
      return screenPodpora()
    case 'historie':
      return screenHistorieIvf()
    case 'klinika':
      return screenKlinika()
    case 'vysledky':
      return screenVysledky()
    case 'komunita':
      return screenKomunita()
    case 'skupina':
      return screenSkupina(a)
    case 'pribeh':
      return screenPribeh()
    case 'obchod':
      return screenObchod()
    case 'partner':
      return screenPartner()
    case 'nastaveni':
      return screenNastaveni(view.report)
    case 'clenstvi':
      return screenClenstvi()
    case 'proc':
      return screenProc()
    default:
      return screenDnes()
  }
}

function navButton(n: { id: string; label: string; icon: string }, current: string): string {
  return `<button class="navlink" data-go="${n.id}" ${base(current) === n.id ? 'aria-current="page"' : ''}>
    <i>${n.icon}</i>${esc(n.label)}
  </button>`
}

function backbar(route: string): string {
  const b = base(route)
  // Cizí fáze se otevírá z Celé cesty. Tam se uživatelka musí umět vrátit,
  // i když je „faze“ jinak záložka.
  const foreignPhase =
    b === 'faze' &&
    (() => {
      const first = arg(route).split('/')[0]
      return isPhaseId(first) && first !== journey().phase.id
    })()
  if (TABS.some((t) => t.id === b) && !foreignPhase) return ''
  const previous = base(stack.length > 1 ? stack[stack.length - 2] : (foreignPhase ? 'cesta' : (PARENT[b] ?? 'dnes')))
  const label = BACK_TITLES[previous] ?? TITLES[previous] ?? 'Dnes'
  return `<div class="backbar no-print">
    <button data-act="back">‹ Zpět na ${esc(label)}</button>
    <span class="where">${esc(TITLES[b] ?? '')}</span>
  </div>`
}

function render(): void {
  const app = document.getElementById('app')
  if (!app) return

  if (!isOnboarded()) {
    app.innerHTML = renderOnboarding()
    window.scrollTo(0, 0)
    return
  }

  const route = currentRoute()
  const state = journey()
  const p = profile()
  const narrow = ['cist', 'proc', 'clenstvi', 'pojem', 'diagnoza'].includes(base(route))

  // Musí se přečíst před přepsáním `innerHTML`. Potom už je pozdě.
  const misto = window.scrollY
  const kurzor = keepPlace ? snapFocus() : null

  app.innerHTML = `<div class="shell">
    <aside class="sidebar no-print">
      <div class="brand">${wordmark(24)}<span class="brand-phase">${esc(state.phase.name)}</span></div>
      <nav class="stack" style="gap:.1rem">
        ${TABS.filter((t) => t.id !== 'vice').map((t) => navButton(t, route)).join('')}
        <p class="eyebrow" style="margin:1.35rem 0 .4rem;padding:0 .75rem">Vaše cesta</p>
        ${SECONDARY.map((t) => navButton(t, route)).join('')}
        <p class="eyebrow" style="margin:1.35rem 0 .4rem;padding:0 .75rem">Ostatní</p>
        ${TERTIARY.map((t) => navButton(t, route)).join('')}
      </nav>
      <div class="sidefoot">
        <span class="avatar" style="background:linear-gradient(135deg,#e6c4d1,#b9748a)">${esc((p.displayName || 'V').slice(0, 1).toUpperCase())}</span>
        <span style="min-width:0;flex:1">
          <span style="display:block;font-size:.8125rem;font-weight:500;overflow:hidden;text-overflow:ellipsis">${esc(p.displayName || 'Vaše cesta')}</span>
          <span class="faint" style="display:block;font-size:.6875rem">${esc(state.dayLabel.replace(/^Dnes (je|jste) /, ''))}</span>
        </span>
        <button class="iconbtn" data-go="nastaveni" aria-label="Nastavení">⚙</button>
      </div>
    </aside>

    <main class="main">
      ${backbar(route)}
      <div class="page ${narrow ? 'page-narrow' : ''}">${SUMMARY_HIDDEN.includes(base(route)) ? '' : renderSummary(view.summary)}${screenFor(route)}</div>
    </main>
  </div>

  ${QUICK_HIDDEN.includes(base(route)) ? '' : quickButton(view.quick)}
  ${quickSheet(view.quick)}

  <nav class="tabbar no-print">
    ${TABS.map(
      (t) =>
        `<button data-go="${t.id}" ${base(route) === t.id ? 'aria-current="page"' : ''}><i>${t.icon}</i><span>${esc(t.label)}</span></button>`,
    ).join('')}
  </nav>`

  // Grafy se staví až tady. Hover se nedá pověsit na řetězec.
  hydrateCharts(app)

  if (keepPlace) {
    window.scrollTo(0, misto)
    restoreFocus(kurzor)
    keepPlace = false
  } else {
    window.scrollTo(0, scrollMemory.get(route) ?? 0)
  }
}

function applyTheme(): void {
  const root = document.documentElement
  if (S.d.theme === 'auto') root.removeAttribute('data-theme')
  else root.setAttribute('data-theme', S.d.theme)
}

// ------------------------------------------------------------------ akce ---

const val = (id: string): string => {
  const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null
  return el ? el.value.trim() : ''
}

/** Číslo z pole. Prázdné pole je `null`. „nevíme“, ne nula. */
const numOrNull = (id: string): number | null => {
  const raw = val(id).replace(',', '.')
  if (!raw) return null
  const n = Number(raw)
  return Number.isFinite(n) ? n : null
}

/** Datum z pole. Prázdné je `null`. */
const dateOrNull = (id: string): string | null => val(id) || null

/** Stav zaškrtávátka. Chybějící pole znamená nezaškrtnuto, ne chybu. */
const checked = (id: string): boolean =>
  (document.getElementById(id) as HTMLInputElement | null)?.checked ?? false

/** Zaškrtnuté radio ve skupině. */
const radio = (name: string): string =>
  document.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`)?.value ?? ''

/**
 * Skok na pole a kurzor do něj.
 *
 * Používají to prázdné stavy: tlačítko má vést k tomu, co věta nad ním
 * doporučuje, ne na jinou obrazovku.
 */
function focusField(id: string): void {
  const el = document.getElementById(id) as HTMLElement | null
  if (!el) return
  el.scrollIntoView({ block: 'center', behavior: 'smooth' })
  ;(el as HTMLInputElement).focus?.()
}

/** Text do schránky. Nikam se nic neodesílá. Vzniká to v prohlížeči. */
function copyText(text: string, ok: string): void {
  navigator.clipboard?.writeText(text).then(
    () => toast(ok),
    () => toast('Kopírování se nepovedlo. Text zůstal na obrazovce.'),
  )
}

/**
 * Zápis jedné nebo víc os dnešního dne.
 *
 * Číselníky se ukládají hned po klepnutí, kdyby to čekalo na tlačítko,
 * půlka zápisů by se nikdy neuložila. Chybějící pole se doplní z toho,
 * co už je uložené, nebo prostředkem.
 */
function writeJournal(partial: Partial<JournalRow>): void {
  const date = viewDate()
  const e = journalFor(date)
  saveJournal({
    date,
    mood: e?.mood ?? 3,
    anxiety: e?.anxiety ?? 3,
    hope: e?.hope ?? 3,
    energy: e?.energy ?? 3,
    note: e?.note ?? '',
    promptId: e?.promptId ?? '',
    promptAnswer: e?.promptAnswer ?? '',
    win: e?.win ?? '',
    symptoms: e?.symptoms ?? [],
    ...partial,
  })
}

/** Krátká hláška dole. Nepřekresluje stránku, jen se sama uklidí. */
function toast(text: string): void {
  document.querySelector('.toast')?.remove()
  const el = document.createElement('div')
  el.className = 'toast'
  el.setAttribute('role', 'status')
  el.textContent = text
  document.body.appendChild(el)
  window.setTimeout(() => el.remove(), 3200)
}

/**
 * Dýchání 4–6. Běží mimo překreslování, kdyby se stránka mezitím
 * překreslila, časovač se zastaví, aby po sobě nezůstal viset.
 */
let breathTimer: number | null = null

function stopBreathing(): void {
  if (breathTimer !== null) {
    clearTimeout(breathTimer)
    breathTimer = null
  }
  const box = document.getElementById('breath')
  const label = document.getElementById('breath-label')
  if (box) box.dataset.phase = 'idle'
  if (label) label.textContent = 'Připravená?'
}

/**
 * Přemalování přehrávače meditace.
 *
 * Předčítání běží mimo render. Plné překreslení stránky každé čtyři vteřiny
 * by při poslechu shodilo scroll i pozornost. Mění se proto jen ty tři prvky,
 * které se opravdu mění.
 */
function speechTick(): void {
  const st = speechState()
  const btn = document.getElementById('say-btn')
  const pos = document.getElementById('say-pos')
  const voice = document.getElementById('say-voice')
  if (btn) btn.textContent = st.id === null ? '▶ Přehrát' : st.paused ? '▶ Pokračovat' : '❙❙ Pauza'
  if (pos && st.id !== null) pos.textContent = `Úsek ${st.at + 1} z ${st.total}`
  if (voice && czechVoice()) {
    voice.textContent =
      'Čte hlas vašeho zařízení, ne nahrané studio. Mezi větami se dělají pauzy. Jsou součástí meditace.'
  }
}

function startBreathing(): void {
  stopBreathing()
  const box = document.getElementById('breath')
  const label = document.getElementById('breath-label')
  if (!box || !label) return

  let cycles = 0
  const step = (phase: 'in' | 'out') => {
    if (!document.getElementById('breath')) {
      stopBreathing()
      return
    }
    box.dataset.phase = phase
    label.textContent = phase === 'in' ? 'Nádech…' : 'Výdech…'
    if (phase === 'out') cycles++
    // Pět minut je zhruba třicet cyklů po deseti vteřinách.
    if (cycles >= 30) {
      label.textContent = 'Hotovo. Pět minut máte za sebou.'
      box.dataset.phase = 'idle'
      breathTimer = null
      return
    }
    breathTimer = window.setTimeout(() => step(phase === 'in' ? 'out' : 'in'), phase === 'in' ? 4000 : 6000)
  }
  step('in')
}

function onboardingAction(act: string, argValue: string): boolean {
  const dr = draft()
  switch (act) {
    case 'ob-next': {
      patch((d) => {
        // Fáze bez kotevního data přeskočí krok „kdy“.
        d.onboardingStep = d.onboardingStep === 1 && !stepHasDate() ? 3 : d.onboardingStep + 1
      })
      return true
    }
    case 'ob-back': {
      patch((d) => {
        d.onboardingStep = d.onboardingStep === 3 && !stepHasDate() ? 1 : Math.max(0, d.onboardingStep - 1)
      })
      return true
    }
    case 'ob-route': {
      patch((d) => {
        d.draft!.route = argValue
        d.draft!.mods = []
      })
      return true
    }
    case 'ob-dg': {
      patch((d) => {
        const list = d.draft!.diagnoses ?? []
        d.draft!.diagnoses = list.includes(argValue)
          ? list.filter((x) => x !== argValue)
          : [...list, argValue]
      })
      return true
    }
    case 'ob-more': {
      patch((d) => {
        d.obMore = true
      })
      return true
    }
    case 'ob-date': {
      patch((d) => {
        d.draft!.date = argValue
        d.draft!.skipDate = false
      })
      return true
    }
    case 'ob-skip-date': {
      patch((d) => {
        d.draft!.skipDate = !d.draft!.skipDate
      })
      return true
    }
    case 'ob-mod': {
      if (!isModifierId(argValue)) return true
      patch((d) => {
        const i = d.draft!.mods.indexOf(argValue)
        if (i >= 0) d.draft!.mods.splice(i, 1)
        else d.draft!.mods.push(argValue)
      })
      return true
    }
    case 'ob-anon': {
      patch((d) => {
        d.draft!.anon = !d.draft!.anon
      })
      return true
    }
    case 'ob-finish': {
      const name = val('ob-name')
      patch((d) => {
        d.draft!.name = name
        d.profile = profileFromDraft(d.draft!)
        d.onboardingStep = 0
      })
      location.hash = '#/dnes'
      return true
    }
    default:
      return false
  }
}

/**
 * Uloží formulář cyklu do dat.
 *
 * Volá se nejen z tlačítka, ale i před rozbalením jiné sekce. Stránka se
 * překresluje celá, takže bez toho by rozepsané pole zmizelo ve chvíli, kdy
 * uživatelka otevře další sekci. A to je ztráta dat, ne jen nepohodlí.
 *
 * Prázdné pole znamená „nevím“, ne nulu. Jediná výjimka je `startedOn`,
 * které je povinné. Tam se drží původní hodnota.
 */
function saveCycleForm(id: string): void {
  if (!document.getElementById('cyc-cd1On')) return
  updateCycle(id, (row) => {
    row.name = val('cyc-name')
    row.kind = (val('cyc-kind') || row.kind) as CycleKind
    row.clinic = val('cyc-clinic')
    row.doctor = val('cyc-doctor')
    row.protocol = val('cyc-protocol')

    // Začátek cyklu je jeden údaj, i když ho model drží ve dvou polích:
    // `cd1On` počítá den cyklu, `startedOn` řadí historii. Dvě kolonky pro
    // totéž si uživatelka vyplní rozdílně a pak nesedí nic.
    const start = val('cyc-cd1On')
    row.cd1On = start || null
    row.startedOn = start || row.startedOn

    row.endedOn = dateOrNull('cyc-endedOn')
    row.stimStartOn = dateOrNull('cyc-stimStartOn')
    row.triggerOn = dateOrNull('cyc-triggerOn')
    row.triggerAt = val('cyc-triggerAt')
    row.retrievalOn = dateOrNull('cyc-retrievalOn')
    row.eggs = numOrNull('cyc-eggs')
    row.mature = numOrNull('cyc-mature')
    row.inseminated = numOrNull('cyc-inseminated')
    row.fertMethod = (val('cyc-fertMethod') || row.fertMethod) as FertMethod
    row.fertilized = numOrNull('cyc-fertilized')
    row.day2 = numOrNull('cyc-day2')
    row.day3 = numOrNull('cyc-day3')
    row.day4 = numOrNull('cyc-day4')
    row.day5 = numOrNull('cyc-day5')
    row.day6 = numOrNull('cyc-day6')
    row.frozen = numOrNull('cyc-frozen')
    row.methodsNote = val('cyc-methodsNote')
    row.eggSource = (val('cyc-eggSource') || row.eggSource) as MaterialSource
    row.spermSource = (val('cyc-spermSource') || row.spermSource) as MaterialSource
    row.donorNote = val('cyc-donorNote')
    row.noEmbryoReason = val('cyc-noEmbryoReason') as NoEmbryoReason

    // Seznamy se čtou po položkách. Chybějící pole se přeskočí, kdyby
    // se přečetlo jako prázdné, uložení by smazalo, co uživatelka zapsala.
    for (const t of row.transfers) {
      const k = (field: string): string => `cyc-tr.${t.id}.${field}`
      if (!document.getElementById(k('date'))) continue
      t.kind = (val(k('kind')) || t.kind) as TransferKind
      t.date = dateOrNull(k('date'))
      t.embryos = numOrNull(k('embryos'))
      t.embryoDay = numOrNull(k('embryoDay'))
      t.stage = val(k('stage')) as TransferStage
      t.pgt = val(k('pgt')) as PgtKind
      t.pgtResult = val(k('pgtResult')) as PgtResult
      t.hcgPlannedOn = dateOrNull(k('hcgPlannedOn'))
      t.grade = val(k('grade'))
      t.prep = (val(k('prep')) || t.prep) as PrepKind
      t.endometrium = numOrNull(k('endometrium'))
      t.meds = val(k('meds'))
      t.cancelled = val(k('cancelled')) === 'ano'
      t.cancelReason = val(k('cancelReason'))
      t.note = val(k('note'))
      if (document.getElementById(k('outcome'))) {
        t.outcome = (val(k('outcome')) || t.outcome) as TransferOutcome
      }
    }

    for (const t of row.hcgTests) {
      const k = (field: string): string => `cyc-hcg.${t.id}.${field}`
      if (!document.getElementById(k('date'))) continue
      t.kind = (val(k('kind')) || t.kind) as HcgKind
      t.date = dateOrNull(k('date'))
      t.transferId = val(k('transferId'))
      t.look = val(k('look')) as HcgLook
      t.value = numOrNull(k('value'))
      t.note = val(k('note'))
    }

    row.outcome = (val('cyc-outcome') || row.outcome) as CycleOutcome
    row.note = val('cyc-note')
  })
}

/** Fotky, které v cyklu visí. Všechny sloty dohromady. */
function cyclePhotoIds(id: string): string[] {
  const c = cycleById(id)
  if (!c) return []
  return [
    ...c.protocolPhotos,
    ...c.labPhotos,
    ...c.resultPhotos,
    ...c.transfers.flatMap((t) => t.photos),
    ...c.hcgTests.flatMap((t) => t.photos),
  ].map((p) => p.id)
}

/**
 * Nahrání fotky k libovolnému záznamu.
 *
 * Výběr souboru i zmenšení jsou asynchronní, takže se nedají udělat uprostřed
 * synchronní akce. Rozepsaný formulář cyklu se proto uloží hned, než
 * uživatelka vybere soubor, může uběhnout půl minuty a pole by se ztratila.
 */
function attachPhoto(scope: string): void {
  if (scope.startsWith('cyc:')) saveCycleForm(scope.split(':')[1])
  void (async () => {
    const files = await pickImages()
    if (files.length === 0) return
    const refs = await addPhotos(files, realToday())
    if (refs.length === 0) {
      toast('Fotku se nepodařilo přečíst. Zkuste ji uložit jako JPEG.')
      return
    }
    withPhotos(scope, (list) => list.push(...refs))
    toast(refs.length === 1 ? 'Fotka uložena.' : `Uloženo ${refs.length} fotek.`)
    renderInPlace()
  })()
}

/** Zvětšení fotky přes celou obrazovku. Mimo render. Je to jen náhled. */
function zoomPhoto(id: string): void {
  const url = photoUrl(id)
  if (!url) return
  document.querySelector('.photolay')?.remove()

  const lay = document.createElement('div')
  lay.className = 'photolay'
  lay.setAttribute('role', 'dialog')
  lay.setAttribute('aria-label', 'Zvětšená fotka')
  const img = document.createElement('img')
  img.src = url
  img.alt = ''
  lay.appendChild(img)

  const close = (): void => {
    lay.remove()
    document.removeEventListener('keydown', onKey)
  }
  const onKey = (ev: KeyboardEvent): void => {
    if (ev.key === 'Escape') {
      ev.stopPropagation()
      close()
    }
  }
  lay.addEventListener('click', close)
  document.addEventListener('keydown', onKey)
  document.body.appendChild(lay)
}


/**
 * Uloží kartu embrya.
 *
 * Volá se z tlačítka i před každou akcí, která překreslí stránku. Přidání
 * dne kultivace nebo smazání by jinak zahodilo rozepsané kolonky.
 */
/**
 * Uložení rozepsaného výdaje.
 *
 * Volá se před každým překreslením, které by formulář zahodilo: při
 * rozbalení jiné položky, při přidání platby i při jejím smazání. Bez
 * toho by přidání platby smazalo název, který uživatelka právě dopsala.
 */
function saveExpenseForm(id: string): void {
  const e = expenseById(id)
  if (!e || !document.getElementById(`fin-${id}-title`)) return
  const k = (f: string): string => `fin-${id}-${f}`

  updateExpense(id, (row) => {
    row.title = val(k('title'))
    const vybrana = val(k('category'))
    const vlastni = val(k('customCategory')).trim()
    // Vlastní kategorie vyhrává. Je to pole, do kterého se píše ručně,
    // takže vyplněné znamená, že uživatelka nabídku výš odmítla.
    row.category = vlastni || (vybrana === '__vlastni' ? row.category : vybrana)
    row.planned = numOrNull(k('planned'))
    row.actual = numOrNull(k('actual'))
    row.priceUnknown = checked(k('priceUnknown'))
    row.insurance = numOrNull(k('insurance'))
    row.onDate = dateOrNull(k('onDate'))
    row.cycleId = val(k('cycleId')) || null
    row.transferId = val(k('transferId')) || null
    row.note = val(k('note'))

    for (const p of row.payments) {
      if (!document.getElementById(`fin-pay-${p.id}-amount`)) continue
      p.amount = numOrNull(`fin-pay-${p.id}-amount`) ?? 0
      p.onDate = dateOrNull(`fin-pay-${p.id}-onDate`) ?? p.onDate
      p.method = (val(`fin-pay-${p.id}-method`) || p.method) as PaymentMethod
      p.note = val(`fin-pay-${p.id}-note`)
    }
  })
}

function saveEmbryoForm(id: string): void {
  const e = embryoById(id)
  if (!e || !document.getElementById(`emb-${id}-fate`)) return
  updateEmbryo(id, (row) => {
    row.label = val(`emb-${id}-label`)
    row.fate = (val(`emb-${id}-fate`) || row.fate) as EmbryoFate
    row.origin = (val(`emb-${id}-origin`) || row.origin) as MaterialSource
    row.createdOn = dateOrNull(`emb-${id}-createdOn`)
    row.donorNote = val(`emb-${id}-donorNote`)
    row.finalState = checked(`emb-${id}-finalState`)
    row.frozenOn = dateOrNull(`emb-${id}-frozenOn`)
    row.frozenDay = numOrNull(`emb-${id}-frozenDay`)
    row.thawedOn = dateOrNull(`emb-${id}-thawedOn`)
    row.thawResult = val(`emb-${id}-thawResult`) as ThawResult
    row.pgt = val(`emb-${id}-pgt`) as PgtKind
    row.pgtSampledOn = dateOrNull(`emb-${id}-pgtSampledOn`)
    row.pgtResult = val(`emb-${id}-pgtResult`) as PgtResult
    row.pgtNote = val(`emb-${id}-pgtNote`)
    row.note = val(`emb-${id}-note`)
    for (const d of row.days) {
      const base = `emb-${id}-d${d.day}`
      if (!document.getElementById(`${base}-stage`)) continue
      d.stage = val(`${base}-stage`) as EmbryoStage
      d.grade = val(`${base}-grade`)
      d.note = val(`${base}-note`)
    }
  })
}

/**
 * Uloží formulář kliniky.
 *
 * Volá se i před přidáním kontaktu. Překreslení by jinak zahodilo, co má
 * uživatelka rozepsané v hlavních polích.
 */
/**
 * Změna fáze.
 *
 * Musí být po ruce, ne schovaná v nastavení: v léčbě se fáze mění každých
 * pár týdnů a žena, která se právě dozvěděla negativní výsledek, nemá hledat,
 * kde se to přepíná. Nic se přitom nesmaže. Mění se jen to, co aplikace
 * ukazuje.
 */
function screenZmenaFaze(): string {
  const p = profile()
  const state = journey()
  const aktualni = ROUTES.find((r) => r.phase === p.declaredPhase)?.id ?? ''

  const zvoleno = view.phasePick ? routeById(view.phasePick) : null
  if (zvoleno) return screenZmenaFazePotvrzeni(zvoleno, state.phase.name)

  return [
    head(
      'Moje fáze',
      'Změnila se vaše situace?',
      'Vyberte, kde jste teď. Než se cokoli změní, ukážeme vám, co to udělá s vašimi daty.',
    ),
    `<section class="surface pad rise">
      <p class="eyebrow">Teď máte nastaveno</p>
      <p class="display" style="font-size:1.15rem;margin-top:.3rem">${esc(state.phase.name)}</p>
      <p class="soft" style="margin-top:.35rem;font-size:.9375rem">${esc(state.dayLabel)}</p>
    </section>`,
    `<div style="margin-top:1.4rem">${phasePicker(aktualni, 'faze-zmena', S.d.obMore === true)}</div>`,
    note(
      'Cykly, embrya, transfery, deník ani dokumenty se změnou fáze nemažou. Vaše cesta se skládá dál, jen se posune to, co je nahoře.',
    ),
  ].join('')
}

/**
 * Potvrzení změny fáze.
 *
 * Přepnout nálepku nestačí. Když si žena zvolí „IVF nevyšlo“, ale v protokolu
 * jí dál běží injekce a v profilu leží datum transferu, aplikace jí zítra ve
 * 20:00 naplánuje píchání, jako by se nic nestalo. Proto se tady ukáže, co se
 * skutečně stane, uživatelka si to může upravit a teprve pak se to provede.
 *
 * Nic z toho není mazání. Cyklus dostane výsledek, léky datum konce a všechno
 * zůstává v historii. Mění se jen to, co aplikace považuje za dnešek.
 */
function screenZmenaFazePotvrzeni(r: RouteDef, aktualniNazev: string): string {
  const plan = phasePlan(r.id, r.phase)
  const kroky = plan.steps

  const krok = (s: ChangeStep) => {
    const on = !view.phaseOff.includes(s.kind)
    return `<div class="surface" style="padding:1rem 1.2rem">
      <div style="display:flex;gap:.9rem;align-items:flex-start">
        <button class="check" data-act="faze-krok" data-arg="${esc(s.kind)}" aria-pressed="${on}"
                style="width:auto;flex:none;margin-top:.1rem"><span class="box">✓</span></button>
        <div style="flex:1;min-width:0">
          <p style="font-weight:500">${esc(s.label)}</p>
          <p class="faint" style="margin-top:.25rem;font-size:.8125rem;line-height:1.55">${esc(s.detail)}</p>
        </div>
      </div>
    </div>`
  }

  return [
    head('Moje fáze', 'Než to potvrdíte', `Měníte fázi z „${aktualniNazev}“ na „${r.label}“.`),
    kroky.length > 0
      ? `<section>
          <p class="eyebrow">Co se stane</p>
          <p class="faint" style="font-size:.8125rem;margin-top:.35rem;line-height:1.5">
            Cokoli z toho můžete odškrtnout. Změní se jen to, co necháte zaškrtnuté.
          </p>
          <div class="stack" style="gap:.6rem;margin-top:.9rem">${kroky.map(krok).join('')}</div>
        </section>`
      : `<section class="surface pad rise">
          <p style="line-height:1.6">Nemáte otevřený cyklus ani běžící léky, takže se změní jen to, co vám aplikace nabízí. V datech nic upravovat nepotřebujeme.</p>
        </section>`,
    `<section class="surface pad">
      <p class="eyebrow">Co zůstává</p>
      <ul class="stack" style="gap:.4rem;margin-top:.6rem;padding-left:1.1rem">
        ${plan.keeps.map((k) => `<li class="soft" style="font-size:.875rem;line-height:1.55">${esc(k)}</li>`).join('')}
      </ul>
    </section>`,
    `<div class="row wrap" style="gap:.6rem;margin-top:.4rem">
      <button class="btn btn-primary" data-act="faze-potvrdit">Potvrdit změnu</button>
      <button class="btn btn-ghost" data-act="faze-zpet">Zpět na výběr</button>
    </div>`,
  ].join('')
}

function saveClinicForm(): void {
  // Koordinátorka má vlastní kartu, která je na obrazovce i tehdy, když
  // údaje kliniky ještě nejsou vyplněné. Ukládá se proto zvlášť.
  if (document.getElementById('co-name')) {
    updateClinic((c) => {
      c.coordinator.name = val('co-name')
      c.coordinator.phone = val('co-phone')
      c.coordinator.email = val('co-email')
      c.coordinator.note = val('co-note')
    })
  }
  if (!document.getElementById('cl-name')) return
  updateClinic((c) => {
    c.name = val('cl-name')
    c.phone = val('cl-phone')
    c.emergencyPhone = val('cl-emergencyPhone')
    c.email = val('cl-email')
    c.address = val('cl-address')
    c.web = val('cl-web')
    c.hours = val('cl-hours')
    c.instructions = val('cl-instructions')
    c.note = val('cl-note')
    c.contacts.forEach((k, i) => {
      if (!document.getElementById(`ct-${i}-role`)) return
      k.role = val(`ct-${i}-role`)
      k.name = val(`ct-${i}-name`)
      k.phone = val(`ct-${i}-phone`)
      k.email = val(`ct-${i}-email`)
      k.note = val(`ct-${i}-note`)
    })
  })
}

function action(act: string, argValue: string): void {
  if (!isOnboarded()) {
    if (onboardingAction(act, argValue)) render()
    return
  }

  switch (act) {
    case 'back':
      back()
      return

    // --- domovská stránka -------------------------------------------------
    case 'hide-tour':
      patch((d) => {
        d.seenTour = true
      })
      break
    case 'day-peek':
      patch((d) => {
        d.dayOffset += 1
      })
      break
    case 'day-reset':
      patch((d) => {
        d.dayOffset = 0
      })
      break
    case 'task': {
      const date = viewDate()
      patch((d) => {
        d.taskDone[date] = !d.taskDone[date]
      })
      break
    }
    case 'mood': {
      writeJournal({ mood: Number(argValue) })
      break
    }

    // --- přepínače v záhlaví ---------------------------------------------
    // Dílek jde do adresy, ne do stavu. Tím funguje zpět i sdílení odkazu.
    case 'fin-sec':
      go(`finance/${argValue}`)
      return
    case 'tr-sec':
      go(`po-transferu/${argValue}`)
      return
    case 'tr-den':
      // Den se drží mimo adresu, ale překreslit se musí hned.
      view.trDen = argValue === 'dnes' ? null : argValue
      go('po-transferu/dnes')
      return
    case 'zapis-sec':
      go(`zapis/${argValue}`)
      return
    case 'leky-sec':
      go(`leky/${argValue}`)
      return
    case 'sled-sec':
      go(`sledovani/${argValue}`)
      return
    case 'journey-sec':
      // Přepnutí dílku ruší rozbalenou položku. Id z Historie nemá na
      // Časové ose význam a naopak.
      view.accordion = null
      go(`journey/${argValue}`)
      return
    case 'otazky-sec':
      view.accordion = null
      go(`otazky/${argValue}`)
      return
    case 'zdrav-sec':
      go(`zdravotni/${argValue}`)
      return
    case 'tl-filter':
      view.accordion = argValue === 'vse' ? null : argValue
      break
    case 'acc':
      // Na detailu cyklu je harmonika součástí jednoho formuláře. Než se
      // překreslí, musí se rozepsaná pole uložit.
      if (base(currentRoute()) === 'cyklus') saveCycleForm(arg(currentRoute()))
      // Totéž u karet embryí. Otevřená karta je rozepsaný formulář.
      if (view.embryo) saveEmbryoForm(view.embryo)
      view.accordion = view.accordion === argValue ? null : argValue
      break
    case 'quick':
      view.quick = !view.quick
      break
    case 'quick-close':
      view.quick = false
      break

    // --- zápis dne --------------------------------------------------------
    case 'dial': {
      // arg je „mood:4“. Jedno klepnutí zapíše jednu osu a hned se to
      // propíše do prstence.
      const [field, raw] = argValue.split(':')
      const n = Number(raw)
      if (!['mood', 'anxiety', 'hope', 'energy'].includes(field) || !(n >= 1 && n <= 5)) return
      writeJournal({ [field]: n } as Partial<JournalRow>)
      break
    }
    case 'symptom': {
      // Deník drží seznam, `symptomLogs` intenzitu. Musí se to měnit naráz,
      // jinak Statistiky ukazují něco jiného než Zápis.
      const date = viewDate()
      const cur = journalFor(date)?.symptoms ?? []
      const next = cur.includes(argValue) ? cur.filter((x) => x !== argValue) : [...cur, argValue]
      writeJournal({ symptoms: next })
      toggleSymptomLog(date, argValue)
      break
    }
    case 'sym-int': {
      const [symptomId, raw] = argValue.split(':')
      const n = Number(raw)
      if (!symptomId || !(n >= 0 && n <= 10)) return
      setSymptomIntensity(viewDate(), symptomId, n)
      break
    }
    case 'shot': {
      // Píchá se to, co má uživatelka v lécích. Když nemá nic, aspoň se
      // zapíše místo. O tom to celé je.
      addShot(argValue, currentMedName())
      break
    }
    case 'shot-del': {
      patch((d) => {
        d.shots = d.shots.filter((x) => x.id !== argValue)
      })
      break
    }
    case 'zapis-save': {
      writeJournal({
        promptAnswer: val('z-prompt'),
        win: val('z-win'),
        note: val('z-note'),
      })
      go('dnes')
      return
    }
    case 'week-share': {
      const text = weekShareText()
      navigator.clipboard?.writeText(text).then(
        () => toast('Přehled zkopírován. Nikam se nic neodeslalo.'),
        () => toast('Kopírování se nepovedlo. Text najdete v Týdnu.'),
      )
      return
    }

    // --- obsah ------------------------------------------------------------
    case 'check': {
      patch((d) => {
        d.checks[argValue] = !d.checks[argValue]
      })
      break
    }
    case 'quiz': {
      const [id, qi, oi] = argValue.split(':')
      patch((d) => {
        d.quiz[`${id}:${qi}`] = Number(oi)
      })
      break
    }
    case 'save':
      toggleSaved(argValue)
      break
    case 'kind':
      view.kind = argValue
      break
    case 'summary':
      view.summary = view.summary === argValue ? null : (argValue as SummaryId)
      break

    // --- hledání ----------------------------------------------------------
    case 'hledat':
      view.query = argValue
      break

    // --- deník ------------------------------------------------------------
    case 'journal-save': {
      const date = viewDate()
      const existing = journalFor(date)
      const num = (id: string, fallback: number) => {
        const el = document.getElementById(id) as HTMLInputElement | null
        return el ? Number(el.value) : fallback
      }
      saveJournal({
        date,
        mood: existing?.mood ?? 3,
        anxiety: num('j-anxiety', existing?.anxiety ?? 3),
        hope: num('j-hope', existing?.hope ?? 3),
        energy: num('j-energy', existing?.energy ?? 3),
        note: val('j-note'),
        promptId: val('j-prompt-id') || (existing?.promptId ?? ''),
        promptAnswer: val('j-prompt'),
        win: val('j-win'),
        symptoms: existing?.symptoms ?? [],
      })
      break
    }
    case 'review-save': {
      const parts = [
        ['Nejtěžší bylo', val('rev-w1')],
        ['Pomohlo mi', val('rev-w2')],
        ['Příště jinak', val('rev-w3')],
      ].filter(([, v]) => v)
      if (parts.length === 0) return
      const date = viewDate()
      const existing = journalFor(date)
      const text = parts.map(([k, v]) => `${k}: ${v}`).join('\n')
      saveJournal({
        date,
        mood: existing?.mood ?? 3,
        anxiety: existing?.anxiety ?? 3,
        hope: existing?.hope ?? 3,
        energy: existing?.energy ?? 3,
        note: existing?.note ? `${existing.note}\n\n${text}` : text,
        promptId: existing?.promptId ?? 'tydenni-ohlednuti',
        promptAnswer: existing?.promptAnswer ?? '',
        win: existing?.win ?? '',
        symptoms: existing?.symptoms ?? [],
      })
      break
    }
    case 'exercise-save': {
      const fields: string[] = []
      for (let i = 0; i < 6; i++) {
        const el = document.getElementById(`ex-${i}`)
        if (!el) break
        fields.push((el as HTMLTextAreaElement).value.trim())
      }
      if (fields.every((f) => !f)) return
      saveExercise(argValue, fields)
      break
    }
    case 'journal-del':
      if (!confirm('Smazat zápis z tohohle dne? Vrátit to nejde.')) return
      removeJournal(argValue)
      break
    case 'ex-del':
      if (!confirm('Smazat tenhle záznam cvičení? Vrátit to nejde.')) return
      removeExercise(argValue)
      break
    case 'journal-wipe':
      if (!confirm('Vymazat celý deník? Všechny zápisy, nálady i vyplněná cvičení zmizí. Cyklů, embryí a financí se to nedotkne.')) return
      wipeJournal()
      toast('Deník je prázdný.')
      break
    case 'breath-start':
      startBreathing()
      return
    case 'breath-stop':
      stopBreathing()
      return

    // --- předčítání meditace ----------------------------------------------
    // Nevrací se přes render(). Kdyby se stránka překreslila při každém
    // úseku, uživatelka by během poslechu poskakovala po stránce.
    case 'say': {
      const item = contentById(argValue)
      if (item) toggleSpeech(item.id, item.body)
      speechTick()
      return
    }
    case 'say-restart':
      restartSpeech()
      speechTick()
      return
    case 'say-stop':
      stopSpeech()
      renderInPlace()
      return

    // --- kalendář ---------------------------------------------------------
    case 'event-add': {
      const title = val('ev-title')
      if (!title) return
      const onDate = val('ev-date') || viewDate()
      const kind = val('ev-kind') || 'vlastni'
      const evNote = val('ev-note')
      patch((d) => {
        d.events.push({ id: uid('ev'), title, kind, onDate, atTime: null, note: evNote || null, done: false })
      })
      break
    }
    case 'event-done':
      toggleEventDone(argValue)
      break
    case 'event-note-open': {
      const box = document.getElementById(`note-${argValue}`)
      if (box) box.hidden = !box.hidden
      return
    }
    case 'event-note-save': {
      const el = document.getElementById(`noteinput-${argValue}`) as HTMLTextAreaElement | null
      if (!el) return
      setEventNote(argValue, el.value.trim())
      break
    }
    case 'event-del':
      patch((d) => {
        d.events = d.events.filter((e) => e.id !== argValue)
      })
      break
    case 'med-add': {
      const name = val('med-name').trim()
      if (!name) {
        toast('Napište název přípravku, nebo ho vyberte ze seznamu.')
        focusField('med-name')
        return
      }
      // Dávka a jednotka se ukládají jako jeden text, protože se tak
      // i čte: „225 IU“. Rozdělené by se to muselo pokaždé skládat.
      const davka = [val('med-dose').trim(), val('med-unit').trim()].filter(Boolean).join(' ')
      const opakovani = val('med-repeat')
      patch((d) => {
        d.meds.push({
          id: uid('md'),
          name,
          kind: (val('med-kind') || kindFor(name)) as MedKind,
          dose: davka,
          times: val('med-time') ? [val('med-time')] : [],
          repeat: opakovani === 'obden' || opakovani === 'jednou' ? opakovani : 'denne',
          startOn: dateOrNull('med-from'),
          endOn: dateOrNull('med-to'),
          doctorNote: val('med-note'),
          instructions: '',
          notify: true,
          history: [],
          photo: '',
          photos: [],
          cycleId: activeCycleId(),
        })
        d.medDraft = ''
      })
      toast(`${name} přidán do protokolu.`)
      break
    }
    case 'med-del':
      patch((d) => {
        d.meds = d.meds.filter((m) => m.id !== argValue)
      })
      break

    // --- cykly ------------------------------------------------------------
    case 'fin-add': {
      const [cycleId, transferId] = argValue.split('|')
      if (view.expense) saveExpenseForm(view.expense)
      const row = addExpense(cycleId || null, transferId || null)
      view.expense = row.id
      go('finance/prehled')
      return
    }
    case 'fin-open': {
      // Rozepsaný formulář se musí uložit dřív, než se překreslí.
      if (view.expense) saveExpenseForm(view.expense)
      view.expense = view.expense === argValue ? null : argValue
      break
    }
    case 'fin-save': {
      saveExpenseForm(argValue)
      toast('Výdaj uložen.')
      break
    }
    case 'fin-del': {
      if (!confirm('Smazat tenhle výdaj i se všemi jeho platbami?')) return
      removeExpense(argValue)
      if (view.expense === argValue) view.expense = null
      toast('Výdaj smazán.')
      break
    }
    case 'fin-pay-add': {
      saveExpenseForm(argValue)
      addPayment(argValue)
      break
    }
    case 'fin-pay-del': {
      const [expenseId, paymentId] = argValue.split('|')
      saveExpenseForm(expenseId)
      removePayment(expenseId, paymentId)
      break
    }
    case 'cycle-close': {
      // Uzavření je vždycky ruční a vždycky vědomé. Než se provede,
      // uloží se rozepsaný formulář, ať se nic z něj neztratí.
      saveCycleForm(argValue)
      const vysledek = closeCycleNow(argValue)
      toast(
        vysledek
          ? `Cyklus uzavřen: ${OUTCOME_LABEL[vysledek].toLowerCase()}. Výsledek můžete změnit v sekci Výsledek.`
          : 'Cyklus uzavřen. Výsledek si doplňte v sekci Výsledek.',
      )
      break
    }
    case 'cycle-new': {
      // Založit a rovnou otevřít. Prázdný cyklus v seznamu, který si musí
      // sama najít a rozkliknout, by byl krok navíc pro nic.
      const row = addCycle()
      view.accordion = null
      view.quick = false
      go(`cyklus/${row.id}`)
      return
    }
    case 'cycle-save': {
      if (!cycleById(argValue)) return
      saveCycleForm(argValue)
      toast('Cyklus uložen.')
      break
    }
    case 'cycle-del': {
      const c = cycleById(argValue)
      if (!c) return
      if (
        !confirm(
          `Opravdu smazat ${cycleTitle(c)}? Milníky, čísla z laboratoře, transfery, testy i nahrané fotky zmizí a vrátit to nejde.`,
        )
      ) {
        return
      }
      // Fotky žijí mimo cyklus, takže by po smazání zůstaly v úložišti ležet.
      for (const photoId of cyclePhotoIds(argValue)) removePhoto(photoId)
      deleteCycle(argValue)
      go('journey/historie')
      return
    }
    case 'cyc-tr-add': {
      if (!cycleById(argValue)) return
      saveCycleForm(argValue)
      addTransfer(argValue)
      view.accordion = 'cyklus-transfery'
      break
    }
    case 'cyc-tr-del': {
      const [cycleId, transferId] = argValue.split('|')
      const c = cycleById(cycleId)
      const t = c?.transfers.find((x) => x.id === transferId)
      if (!c || !t) return
      if (!confirm('Opravdu smazat tenhle transfer i s jeho fotkami? Vrátit to nejde.')) return
      for (const p of t.photos) removePhoto(p.id)
      saveCycleForm(cycleId)
      removeTransfer(cycleId, transferId)
      break
    }
    case 'cyc-hcg-add': {
      const [cycleId, kind] = argValue.split('|')
      if (!cycleById(cycleId)) return
      saveCycleForm(cycleId)
      addHcgTest(cycleId, kind === 'krev' ? 'krev' : 'domaci')
      view.accordion = 'cyklus-vysledek'
      break
    }
    case 'cyc-hcg-del': {
      const [cycleId, testId] = argValue.split('|')
      const c = cycleById(cycleId)
      const t = c?.hcgTests.find((x) => x.id === testId)
      if (!c || !t) return
      if (!confirm('Opravdu smazat tenhle test i s fotkou?')) return
      for (const p of t.photos) removePhoto(p.id)
      saveCycleForm(cycleId)
      removeHcgTest(cycleId, testId)
      break
    }
    case 'cyc-tr-embryo': {
      const [cycleId, transferId, embryoId] = argValue.split('|')
      if (!cycleById(cycleId)) return
      saveCycleForm(cycleId)
      let prirazeno = false
      updateCycle(cycleId, (c) => {
        const t = c.transfers.find((x) => x.id === transferId)
        if (!t) return
        prirazeno = !t.embryoIds.includes(embryoId)
        t.embryoIds = prirazeno
          ? [...t.embryoIds, embryoId]
          : t.embryoIds.filter((x) => x !== embryoId)
      })
      // Přiřazené embryo se přeneslo. Osud se dopíše sám, ať ho uživatelka
      // nemusí zadávat na dvou místech. Odebrání se ale nevrací zpátky:
      // nevíme, co bylo předtím, a přepsat zápis by bylo horší než nechat ho.
      if (prirazeno) {
        updateEmbryo(embryoId, (e) => {
          if (e.fate === 'kultivace' || e.fate === 'kryo') e.fate = 'transfer'
        })
      }
      break
    }
    case 'cyc-method': {
      const [cycleId, methodId] = argValue.split('|')
      if (!cycleById(cycleId)) return
      saveCycleForm(cycleId)
      toggleCycleMethod(cycleId, methodId)
      break
    }
    case 'photo-add':
      attachPhoto(argValue)
      return
    case 'photo-rm': {
      const cut = argValue.lastIndexOf('|')
      if (cut < 0) return
      const scope = argValue.slice(0, cut)
      const photoId = argValue.slice(cut + 1)
      if (scope.startsWith('cyc:')) saveCycleForm(scope.split(':')[1])
      withPhotos(scope, (list) => {
        const i = list.findIndex((p) => p.id === photoId)
        if (i >= 0) list.splice(i, 1)
      })
      removePhoto(photoId)
      break
    }
    case 'photo-zoom':
      zoomPhoto(argValue)
      return

    // --- embrya -----------------------------------------------------------
    case 'emb-add': {
      if (!cycleById(argValue)) return
      saveCycleForm(argValue)
      const row = addEmbryo(argValue)
      view.accordion = 'cyklus-embrya'
      view.embryo = row.id
      break
    }
    case 'emb-open':
      if (view.embryo) saveEmbryoForm(view.embryo)
      view.embryo = view.embryo === argValue ? null : argValue
      break
    case 'emb-save': {
      saveEmbryoForm(argValue)
      toast('Embryo uloženo.')
      break
    }
    case 'emb-del': {
      const e = embryoById(argValue)
      if (!e) return
      if (!confirm('Opravdu smazat kartu tohohle embrya i s fotkami? Vrátit to nejde.')) return
      for (const p of e.photos) removePhoto(p.id)
      deleteEmbryo(argValue)
      break
    }
    case 'emb-day': {
      const [embryoId, dayRaw] = argValue.split('|')
      const day = Number(dayRaw)
      if (!embryoById(embryoId) || !Number.isFinite(day)) return
      saveEmbryoForm(embryoId)
      updateEmbryo(embryoId, (e) => {
        const i = e.days.findIndex((d) => d.day === day)
        if (i >= 0) e.days.splice(i, 1)
        else e.days.push({ day, stage: stageForDay(day), grade: '', note: '' })
      })
      break
    }

    // --- změna fáze -------------------------------------------------------
    case 'faze-zmena': {
      const r = routeById(argValue)
      if (!r) return
      // Nemění se ještě nic. Nejdřív se spočítá, co by změna udělala s daty,
      // a uživatelka to uvidí. Bez toho by aplikace dál plánovala injekce
      // z cyklu, který podle ní skončil.
      view.phasePick = r.id
      // Kroky, které plán nabízí nezaškrtnuté, musí nezaškrtnuté i zůstat.
      // Bez tohohle řádku by se uzavření cyklu předškrtlo i ženě, které
      // v laboratoři zbývají embrya na další kryotransfer.
      view.phaseOff = phasePlan(r.id, r.phase)
        .steps.filter((s) => !s.on)
        .map((s) => s.kind)
      break
    }
    case 'faze-krok':
      view.phaseOff = view.phaseOff.includes(argValue)
        ? view.phaseOff.filter((k) => k !== argValue)
        : [...view.phaseOff, argValue]
      break
    case 'faze-zpet':
      view.phasePick = null
      view.phaseOff = []
      break
    case 'faze-potvrdit': {
      const r = view.phasePick ? routeById(view.phasePick) : null
      if (!r) return
      const plan = phasePlan(r.id, r.phase)
      const vybrane = new Set<StepKind>(
        plan.steps.filter((s) => !view.phaseOff.includes(s.kind)).map((s) => s.kind),
      )
      const novy = applyPhaseChange(r.id, r.phase, r.implied ?? [], plan.steps, vybrane)
      view.phasePick = null
      view.phaseOff = []
      toast(
        vybrane.size > 0
          ? `Hotovo: ${r.label}. Přepočítali jsme dnešek, historie zůstává.`
          : `Hotovo: ${r.label}. Vaše data zůstávají.`,
      )
      go(novy ? `cyklus/${novy}` : 'dnes')
      return
    }
    case 'faze-more':
      patch((d) => {
        d.obMore = true
      })
      break

    // --- moje klinika -----------------------------------------------------
    case 'clinic-save':
      saveClinicForm()
      toast('Uloženo.')
      break
    case 'coord-clear':
      updateClinic((c) => {
        c.coordinator = emptyCoordinator()
      })
      toast('Kontakt na koordinátorku odstraněn.')
      break
    case 'clinic-contact-add':
      saveClinicForm()
      updateClinic((c) => {
        c.contacts.push(emptyContact(argValue))
      })
      break
    case 'clinic-contact-del': {
      const i = Number(argValue)
      if (!Number.isFinite(i)) return
      saveClinicForm()
      updateClinic((c) => {
        c.contacts.splice(i, 1)
      })
      break
    }

    // --- moje diagnóza ----------------------------------------------------
    case 'dg-toggle':
      toggleDiagnosis(argValue)
      break

    // --- vyšetření --------------------------------------------------------
    case 'ex-toggle': {
      const [examId, who] = argValue.split('|')
      if (!isExamWho(who)) return
      const row = ensureExam(examId, who)
      updateExam(row.id, (e) => {
        e.done = !e.done
        if (e.done && !e.onDate) e.onDate = viewDate()
      })
      break
    }
    case 'ex-save': {
      updateExam(argValue, (e) => {
        e.onDate = dateOrNull(`ex-${argValue}-onDate`)
        e.result = val(`ex-${argValue}-result`)
      })
      toast('Uloženo.')
      break
    }
    case 'ex-del': {
      const row = S.d.exams.find((x) => x.id === argValue)
      if (row) for (const p of row.photos) removePhoto(p.id)
      deleteExam(argValue)
      break
    }
    case 'ex-custom': {
      const name = val('ex-custom').trim()
      if (!name || !isExamWho(argValue)) {
        toast('Vyšetření potřebuje název.')
        return
      }
      addCustomExam(name, argValue)
      break
    }

    // --- podpůrná péče ----------------------------------------------------
    case 'sup-add': {
      const row = addSupport(argValue)
      updateSupport(row.id, (e) => {
        e.since = viewDate()
      })
      break
    }
    case 'sup-custom': {
      const name = val('sup-custom').trim()
      if (!name) {
        toast('Napište, o co jde.')
        return
      }
      const row = addSupport('')
      updateSupport(row.id, (e) => {
        e.custom = name
        e.since = viewDate()
      })
      break
    }
    case 'sup-save': {
      updateSupport(argValue, (e) => {
        e.since = dateOrNull(`sup-${argValue}-since`)
        e.frequency = val(`sup-${argValue}-frequency`) as Frequency
        e.date = dateOrNull(`sup-${argValue}-date`)
        e.provider = val(`sup-${argValue}-provider`)
        const f = val(`sup-${argValue}-feeling`)
        e.feeling = f ? Number(f) : null
        e.ongoing = val(`sup-${argValue}-ongoing`) !== 'ne'
        e.note = val(`sup-${argValue}-note`)
      })
      toast('Uloženo.')
      break
    }
    case 'sup-del':
      deleteSupport(argValue)
      break

    // --- otázky pro lékaře ------------------------------------------------
    case 'q-add': {
      // Bez argumentu se čte formulář, s argumentem přichází hotové znění
      // z návrhů. Návrh nesmí přepsat rozepsanou otázku ve formuláři.
      const fromForm = !argValue
      const text = fromForm ? val('q-text') : argValue
      if (text.length < 2) return
      const priority = (fromForm ? radio('q-prio') : '') || 'stredni'
      const category = (fromForm ? radio('q-cat') : '') || 'Jiné'
      const forDate = fromForm ? dateOrNull('q-for') : null
      patch((d) => {
        d.questions.unshift({
          id: uid('q'),
          text,
          category,
          priority: priority as QuestionPriority,
          forDate,
          answer: '',
          status: 'ceka',
          createdOn: viewDate(),
        })
      })
      break
    }
    case 'q-answer': {
      const text = val(`q-ans-${argValue}`)
      patch((d) => {
        const q = d.questions.find((x) => x.id === argValue)
        if (q) q.answer = text
      })
      toast('Odpověď uložena.')
      break
    }
    case 'q-status': {
      const [id, status] = argValue.split(':')
      if (!['ceka', 'vyreseno', 'archiv'].includes(status)) return
      patch((d) => {
        const q = d.questions.find((x) => x.id === id)
        if (q) q.status = status as QuestionStatus
      })
      break
    }
    case 'q-del': {
      if (!confirm('Opravdu smazat tuhle otázku? Vrátit to nejde.')) return
      patch((d) => {
        d.questions = d.questions.filter((q) => q.id !== argValue)
      })
      break
    }
    case 'q-copy':
      copyText(otazkyCopyText(argValue), 'Zkopírováno. Nikam se nic neodeslalo.')
      return
    case 'q-focus':
      focusField('q-text')
      return

    // --- zdravotní data ---------------------------------------------------
    case 'hz-add': {
      const kind = argValue as HealthKind
      const value = numOrNull(`hz-${kind}-val`)
      const value2 = kind === 'tlak' ? numOrNull(`hz-${kind}-val2`) : null
      // U tlaku stačí jedna ze dvou složek, jinde musí být hodnota.
      if (value === null && value2 === null) {
        toast('Zapište prosím hodnotu. Bez čísla není co uložit.')
        return
      }
      patch((d) => {
        d.health.push({
          id: uid('hz'),
          date: val(`hz-${kind}-date`) || viewDate(),
          at: val(`hz-${kind}-at`),
          kind,
          value,
          value2,
          text: '',
          note: val(`hz-${kind}-note`),
          attachments: [],
        })
      })
      toast(`${measureTitle(kind)} uložena.`)
      break
    }
    case 'hz-del':
      patch((d) => {
        d.health = d.health.filter((r) => r.id !== argValue)
      })
      break
    case 'hz-focus':
      focusField(`hz-${argValue || 'bbt'}-val`)
      return
    case 'us-add': {
      // Velikosti přijdou tak, jak je lékař nadiktoval: „18, 16, 14“.
      const sizes = (id: string): number[] =>
        val(id)
          .split(/[^0-9.,]+/)
          .map((x) => Number(x.replace(',', '.')))
          .filter((n) => Number.isFinite(n) && n > 0)
      const left = sizes('us-left')
      const right = sizes('us-right')
      const endometrium = numOrNull('us-endo')
      const usNote = val('us-note')
      if (!left.length && !right.length && endometrium === null && !usNote) {
        toast('Prázdný ultrazvuk se neukládá. Zapište folikuly, sliznici nebo poznámku.')
        return
      }
      patch((d) => {
        d.ultrasounds.push({
          id: uid('uz'),
          date: val('us-date') || viewDate(),
          cycleId: activeCycleId(),
          left,
          right,
          endometrium,
          note: usNote,
          attachments: [],
          photos: [],
        })
      })
      toast('Ultrazvuk uložen.')
      break
    }
    case 'us-del':
      patch((d) => {
        d.ultrasounds = d.ultrasounds.filter((u) => u.id !== argValue)
      })
      break

    // --- zdraví -----------------------------------------------------------
    case 'lab-add': {
      const key = val('lab-key')
      const value = Number(val('lab-value').replace(',', '.'))
      if (!key || !Number.isFinite(value)) return
      patch((d) => {
        d.labs.push({
          id: uid('lb'),
          paramKey: key,
          value,
          unit: LAB_BY_KEY[key]?.unit ?? '',
          onDate: val('lab-date') || viewDate(),
        })
      })
      break
    }
    case 'lab-del':
      patch((d) => {
        d.labs = d.labs.filter((l) => l.id !== argValue)
      })
      break

    // --- dokumenty --------------------------------------------------------
    case 'doc-photo': {
      // Zpráva vznikne až s fotkou. Kdyby se založila dopředu, zrušený
      // výběr souboru by po sobě nechal prázdný záznam v seznamu.
      void (async () => {
        const files = await pickImages()
        if (files.length === 0) return
        const refs = await addPhotos(files, realToday())
        if (refs.length === 0) {
          toast('Fotku se nepodařilo přečíst. Zkuste ji uložit jako JPEG.')
          return
        }
        const id = addDoc(
          val('doc-title') || 'Vyfocený dokument',
          (val('doc-kind') || 'zprava') as DocKind,
          dateOrNull('doc-date') ?? undefined,
          val('doc-note'),
        )
        withPhotos(`doc:${id}`, (list) => list.push(...refs))
        toast('Dokument uložen.')
        renderInPlace()
      })()
      return
    }
    case 'doc-del': {
      const doc = S.d.docs.find((x) => x.id === argValue)
      if (!doc) return
      if (!confirm('Opravdu smazat tuhle zprávu i s fotkami? Hodnoty ve Zdraví zůstanou.')) return
      for (const p of doc.photos) removePhoto(p.id)
      deleteDoc(argValue)
      break
    }
    case 'us-add': {
      // Velikosti přijdou tak, jak je lékař nadiktoval: „18, 16, 14“.
      const sizes = (id: string): number[] =>
        val(id)
          .split(/[^0-9.,]+/)
          .map((x) => Number(x.replace(',', '.')))
          .filter((n) => Number.isFinite(n) && n > 0)
      const left = sizes('us-left')
      const right = sizes('us-right')
      const endometrium = numOrNull('us-endo')
      const usNote = val('us-note')
      if (!left.length && !right.length && endometrium === null && !usNote) {
        toast('Prázdný ultrazvuk se neukládá. Zapište folikuly, sliznici nebo poznámku.')
        return
      }
      patch((d) => {
        d.ultrasounds.push({
          id: uid('uz'),
          date: val('us-date') || viewDate(),
          cycleId: activeCycleId(),
          left,
          right,
          endometrium,
          note: usNote,
          attachments: [],
          photos: [],
        })
      })
      toast('Ultrazvuk uložen.')
      break
    }
    case 'us-del':
      patch((d) => {
        d.ultrasounds = d.ultrasounds.filter((u) => u.id !== argValue)
      })
      break

    // --- zdraví -----------------------------------------------------------
    case 'lab-add': {
      const key = val('lab-key')
      const value = Number(val('lab-value').replace(',', '.'))
      if (!key || !Number.isFinite(value)) return
      patch((d) => {
        d.labs.push({
          id: uid('lb'),
          paramKey: key,
          value,
          unit: LAB_BY_KEY[key]?.unit ?? '',
          onDate: val('lab-date') || viewDate(),
        })
      })
      break
    }
    case 'lab-del':
      patch((d) => {
        d.labs = d.labs.filter((l) => l.id !== argValue)
      })
      break

    // --- dokumenty --------------------------------------------------------
    case 'doc-photo': {
      // Zpráva vznikne až s fotkou. Kdyby se založila dopředu, zrušený
      // výběr souboru by po sobě nechal prázdný záznam v seznamu.
      void (async () => {
        const files = await pickImages()
        if (files.length === 0) return
        const refs = await addPhotos(files, realToday())
        if (refs.length === 0) {
          toast('Fotku se nepodařilo přečíst. Zkuste ji uložit jako JPEG.')
          return
        }
        const id = addDoc(
          val('doc-title') || 'Vyfocený dokument',
          (val('doc-kind') || 'zprava') as DocKind,
          dateOrNull('doc-date') ?? undefined,
          val('doc-note'),
        )
        withPhotos(`doc:${id}`, (list) => list.push(...refs))
        toast('Dokument uložen.')
        renderInPlace()
      })()
      return
    }
    case 'doc-del': {
      const doc = S.d.docs.find((x) => x.id === argValue)
      if (!doc) return
      if (!confirm('Opravdu smazat tuhle zprávu i s fotkami? Hodnoty ve Zdraví zůstanou.')) return
      for (const p of doc.photos) removePhoto(p.id)
      deleteDoc(argValue)
      break
    }
    case 'doc-add': {
      const title = val('doc-title').trim()
      if (!title) {
        toast('Dokument potřebuje název. Ať ho pak najdete.')
        return
      }
      addDoc(title, (val('doc-kind') || 'zprava') as DocKind, dateOrNull('doc-date') ?? undefined, val('doc-note'))
      toast('Dokument uložen.')
      break
    }

    // --- komunita ---------------------------------------------------------
    case 'post-add': {
      const body = val('post-body')
      if (body.length < 2) return
      const state = journey()
      const p = profile()
      const author = p.anonymousInCommunity || !p.displayName ? `Anonymně · ${PHASES[state.phase.id].name}` : p.displayName
      patch((d) => {
        d.posts.unshift({
          id: uid('ps'),
          groupSlug: argValue,
          author,
          body,
          onDate: viewDate(),
          hearts: 0,
          hearted: false,
          mine: true,
          replies: [],
        })
      })
      break
    }
    case 'post-del':
      patch((d) => {
        d.posts = d.posts.filter((x) => x.id !== argValue)
      })
      break
    case 'heart':
      patch((d) => {
        const post = d.posts.find((x) => x.id === argValue)
        if (!post) return
        post.hearted = !post.hearted
        post.hearts += post.hearted ? 1 : -1
      })
      break

    // --- příběh -----------------------------------------------------------
    case 'story-add': {
      const title = val('st-title')
      if (!title) return
      patch((d) => {
        d.story.push({
          id: uid('st'),
          onDate: val('st-date') || viewDate(),
          title,
          body: val('st-body'),
          icon: '❦',
          mood: val('st-mood') ? Number(val('st-mood')) : null,
          photos: [],
        })
      })
      break
    }
    case 'story-del':
      patch((d) => {
        d.story = d.story.filter((s) => s.id !== argValue)
      })
      break
    case 'letter-add': {
      const title = val('lt-title')
      const body = val('lt-body')
      if (!title || !body) return
      patch((d) => {
        d.letters.unshift({
          id: uid('lt'),
          toWhom: (val('lt-to') || 'baby') as Letter['toWhom'],
          title,
          body,
          onDate: viewDate(),
        })
      })
      break
    }
    case 'letter-del':
      patch((d) => {
        d.letters = d.letters.filter((l) => l.id !== argValue)
      })
      break

    // --- nastavení --------------------------------------------------------
    case 'mod': {
      if (!isModifierId(argValue)) return
      patch((d) => {
        if (!d.profile) return
        const mods = d.profile.modifiers as ModifierId[]
        const i = mods.indexOf(argValue)
        if (i >= 0) mods.splice(i, 1)
        else mods.push(argValue)
      })
      break
    }
    case 'set-anon':
      patch((d) => {
        if (d.profile) d.profile.anonymousInCommunity = !d.profile.anonymousInCommunity
      })
      break
    case 'sub-toggle':
      patch((d) => {
        const on = !d.subscription.active
        d.subscription = { active: on, since: on ? realToday() : null }
      })
      toast(S.d.subscription.active ? 'Předplatné aktivováno.' : 'Předplatné zrušeno. Data vám zůstávají.')
      break
    case 'theme':
      patch((d) => {
        d.theme = argValue as 'auto' | 'light' | 'dark'
      })
      applyTheme()
      break
    case 'forget':
      patch((d) => {
        d.weights = {}
      })
      break
    case 'wipe':
      if (!confirm('Opravdu smazat všechno? Profil, deník, hodnoty i dopisy zmizí a začnete znovu.')) return
      reset()
      location.hash = '#/dnes'
      applyTheme()
      break
    case 'report-opt':
      if (argValue === 'finance') view.report.finance = !view.report.finance
      if (argValue === 'journal') view.report.journal = !view.report.journal
      break
    case 'report-open': {
      const doc = currentReport({
        includeFinance: view.report.finance,
        includeJournal: view.report.journal,
      })
      if (!openReport(doc)) {
        toast('Prohlížeč zablokoval nové okno. Povolte vyskakovací okna a zkuste to znovu.')
      }
      return
    }
    case 'export': {
      // Fotky žijí mimo `S.d` (v IndexedDB), takže se do exportu musí přidat
      // ručně. Bez nich by soubor tvrdil, že je kompletní, a nebyl by.
      const blob = new Blob([JSON.stringify({ ...S.d, photos: allPhotos() }, null, 2)], {
        type: 'application/json',
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `ivf-by-gabi-${realToday()}.json`
      a.click()
      URL.revokeObjectURL(url)
      return
    }
    default:
      return
  }

  // Akce se dějí na obrazovce, na které uživatelka právě je. Stránka
  // se proto nesmí hnout.
  renderInPlace()
}

/** Změny ve formulářích, které se ukládají rovnou (výběry a data). */
function change(act: string, argValue: string, value: string): void {
  switch (act) {
    case 'med-pick': {
      // Výběr z číselníku jen předvyplní název. Dávku, čas ani cokoli
      // jiného aplikace nenavrhuje.
      const [nazev, skupina] = value.split('|')
      patch((d) => {
        d.medDraft = nazev === JINY_LEK ? '' : nazev
      })
      if (nazev === JINY_LEK) {
        toast(skupina ? 'Napište název přípravku do pole Název.' : 'Napište název do pole Název.')
        focusField('med-name')
      }
      break
    }
    case 'set-phase':
      if (value !== '' && !isPhaseId(value)) return
      patch((d) => {
        if (!d.profile) return
        d.profile.declaredPhase = value === '' ? null : value
        // Bez data volby by ji odvození z dat okamžitě přebilo.
        d.profile.phaseDeclaredOn = value === '' ? null : viewDate()
      })
      break
    case 'set-date': {
      patch((d) => {
        if (!d.profile) return
        const field = argValue as 'transferOn'
        d.profile[field] = value || null
      })
      break
    }
    case 'set-name':
      patch((d) => {
        if (d.profile) d.profile.displayName = value.trim()
      })
      return // bez překreslení, aby nevyskočil kurzor z pole
    case 'set-clinic':
      patch((d) => {
        if (d.profile) d.profile.clinicName = value.trim() || null
      })
      return
    case 'ob-date-input':
      patch((d) => {
        if (!d.draft) return
        d.draft.date = value
        d.draft.skipDate = false
      })
      break
    case 'ob-name':
      patch((d) => {
        if (d.draft) d.draft.name = value
      })
      return
    case 'ob-week':
      patch((d) => {
        if (d.draft) d.draft.week = value ? Number(value) : null
      })
      return
    default:
      return
  }
  renderInPlace()
}

// ---------------------------------------------------------------- napojení ---

document.addEventListener('click', (ev) => {
  const target = (ev.target as HTMLElement | null)?.closest<HTMLElement>('[data-go],[data-act]')
  if (!target) return

  if (target.dataset.go !== undefined) {
    ev.preventDefault()
    // Odchod z panelu rychlého přidání ho musí zavřít, jinak by visel
    // nad obrazovkou, na kterou právě odkázal.
    view.quick = false
    const route = target.dataset.go
    // Otevření obsahu je signál pro doporučování. Přesně jako v aplikaci.
    if (route.startsWith('cist/')) {
      const item = contentById(route.slice(5))
      if (item) learn(item.id, 0.35)
    }
    go(route)
    return
  }

  const act = target.dataset.act
  if (!act) return
  // Prvky, které si hodnotu berou z `change`, nesmí reagovat na klik.
  if (target.tagName === 'SELECT' || target.tagName === 'INPUT') return
  ev.preventDefault()
  action(act, target.dataset.arg ?? '')
})

document.addEventListener('change', (ev) => {
  const el = ev.target as HTMLInputElement | HTMLSelectElement | null
  if (!el?.dataset.act) return
  change(el.dataset.act, el.dataset.arg ?? '', el.value)
})

document.addEventListener('input', (ev) => {
  const el = ev.target as HTMLInputElement | null
  if (!el) return

  if (
    el.dataset.act === 'set-name' ||
    el.dataset.act === 'set-clinic' ||
    el.dataset.act === 'ob-name' ||
    el.dataset.act === 'ob-week'
  ) {
    change(el.dataset.act, el.dataset.arg ?? '', el.value)
    return
  }

  // Posuvníky v deníku ukazují hodnotu okamžitě, bez překreslení celé stránky.
  if (el.dataset.slider) {
    const out = document.getElementById(`jv-${el.dataset.slider}`)
    if (out) out.textContent = el.value
    return
  }

  if (el.id === 'q') {
    view.query = el.value
    // Hledání překresluje při každém písmenu. Kurzor i pozice se vrací
    // stejným způsobem jako u ostatních akcí.
    renderInPlace()
  }
})

document.addEventListener('keydown', (ev) => {
  const el = ev.target as HTMLElement | null
  if (ev.key === 'Escape' && !TABS.some((t) => t.id === base(currentRoute()))) back()
})

window.addEventListener('hashchange', () => {
  stopBreathing()
  // Meditace se nesmí táhnout přes odchod z obrazovky. Hlas, který mluví
  // z jiné stránky a nedá se zastavit, je to nejhorší, co může přehrávač
  // udělat.
  stopSpeech()
  const route = currentRoute()
  if (stack.length > 1 && stack[stack.length - 2] === route) stack.pop()
  else stack.push(route)
  render()
})

// ------------------------------------------------------------------ start ---

load()
applyTheme()

// Seznam hlasů se v některých prohlížečích plní až po startu. Až doteče,
// přepíše se upozornění „hlasy se ještě načítají“.
onSpeechChange(speechTick)
if (speechAvailable()) window.speechSynthesis.addEventListener('voiceschanged', speechTick)

stack = [currentRoute()]
if (!location.hash) location.hash = '#/dnes'
render()

// Fotky se načítají z IndexedDB, tedy asynchronně. První vykreslení na ně
// nečeká. Místo nich se krátce ukáže zástupný rámeček a jakmile doteče
// obsah, obrazovka se překreslí.
void initPhotos().then(render)
