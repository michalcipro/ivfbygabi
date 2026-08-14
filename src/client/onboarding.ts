import type { PhaseId } from '../lib/domain/phases'
import { MODIFIER_LABELS, type ModifierId, type Profile } from '../lib/domain/profile'
import { addDays, formatCzechDate, today as realToday } from '../lib/domain/dates'
import { guideFor } from './../lib/domain/guides'
import { DIAGNOSES, DIAGNOSIS_GROUPS, modifiersFromDiagnoses } from '../lib/domain/diagnoses'
import { esc, heroStyle } from './ui'
import { logoKruh } from './viz'
import { patch, S, newProfile, viewDate, type Draft } from './store'

/**
 * Onboarding.
 *
 * Pět kroků, každý s jednou otázkou. Ptáme se jen na to, co opravdu mění,
 * co uživatelka uvidí. Datum a situaci. Všechno ostatní se dá doplnit
 * později v nastavení a aplikace funguje i bez toho.
 *
 * Pořadí voleb je záměrné: IVF cyklus je nahoře, protože kvůli němu sem
 * ženy přicházejí nejčastěji.
 */

type DateField =
  | 'stimulationStartOn'
  | 'retrievalOn'
  | 'transferOn'
  | 'betaTestOn'
  | 'diagnosticsStartedOn'
  | 'lossOn'
  | 'tryingSince'

export interface RouteDef {
  id: string
  group: 'before' | 'cycle' | 'waiting' | 'result' | 'further'
  /**
   * Hlavní volba se nabízí hned. Ostatní jsou pod „Potřebuji jinou fázi“.
   * Deset dlaždic se přečte, třiadvacet ne, ale ani jedna z nich nesmí
   * zmizet: žena, která je přesně mezi odběrem a oplodněním, se musí trefit.
   */
  primary: boolean
  /** Znak do dlaždice. Jediné místo v aplikaci, kde se emoji používá. */
  icon: string
  label: string
  hint: string
  phase: PhaseId
  field: DateField | null
  dateLabel: string
  dateHint: string
  /** Nabídka „rychlých“ posunů ve dnech, aby se nemuselo klikat v kalendáři. */
  quick: number[]
  mods: ModifierId[]
  /** Situace, která z volby plyne sama. Přidá se bez ptaní. */
  implied?: ModifierId[]
}

const DG: ModifierId[] = ['pcos', 'endometriosis', 'low_amh', 'male_factor', 'thyroid', 'unexplained']
const TX: ModifierId[] = ['icsi', 'pgt', 'frozen_transfer', 'donor_egg', 'donor_sperm']
const SIT: ModifierId[] = ['after_loss', 'repeated_failure', 'single_mother', 'same_sex_couple']

export const ROUTES: RouteDef[] = [
  // ---------------------------------------------------------- před cyklem ---
  {
    id: 'snazime',
    primary: true,
    icon: '🌱',
    group: 'before',
    label: 'Snažíme se o miminko',
    hint: 'Zatím IVF vůbec neřeším',
    phase: 'trying_naturally',
    field: 'tryingSince',
    dateLabel: 'Odkdy se snažíte?',
    dateHint: 'Stačí přibližně. Podle toho poznáme, kdy má smysl mluvit o vyšetření.',
    quick: [-90, -180, -365, -730],
    mods: [...DG, ...SIT],
  },
  {
    id: 'thinking',
    primary: false,
    icon: '',
    group: 'before',
    label: 'Teprve o IVF přemýšlím',
    hint: 'Chci vědět, do čeho bych šla',
    phase: 'thinking',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [],
  },
  {
    id: 'referral',
    primary: true,
    icon: '🏥',
    group: 'before',
    label: 'Mám doporučení k IVF',
    hint: 'Lékař mi IVF doporučil, ještě jsme nezačali',
    phase: 'ivf_prep',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...DG],
  },
  {
    id: 'resime',
    primary: true,
    icon: '🔎',
    group: 'before',
    label: 'Řešíme, proč se nedaří',
    hint: 'Vyšetření, diagnóza, hledání příčiny',
    phase: 'diagnostics',
    field: 'diagnosticsStartedOn',
    dateLabel: 'Kdy vyšetřování začalo nebo začne?',
    dateHint: 'Stačí přibližně.',
    quick: [0, -7, -30, -90],
    mods: [...DG, ...SIT],
  },
  {
    id: 'tests_done',
    primary: false,
    icon: '',
    group: 'before',
    label: 'Mám za sebou vyšetření',
    hint: 'Výsledky jsou, řešíme, co dál',
    phase: 'diagnostics',
    field: 'diagnosticsStartedOn',
    dateLabel: 'Kdy jste s vyšetřením začali?',
    dateHint: 'Stačí přibližně.',
    quick: [-30, -90, -180, -365],
    mods: [...DG, ...SIT],
  },
  {
    id: 'ivf_prep',
    primary: true,
    icon: '💉',
    group: 'before',
    label: 'Připravuji se na IVF',
    hint: 'Máme plán, cyklus ještě nezačal',
    phase: 'ivf_prep',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...DG, ...TX],
  },

  // -------------------------------------------------------------- v cyklu ---
  {
    id: 'stim_start',
    primary: false,
    icon: '',
    group: 'cycle',
    label: 'Začínám stimulaci',
    hint: 'První injekce jsou přede mnou nebo právě teď',
    phase: 'stimulation',
    field: 'stimulationStartOn',
    dateLabel: 'Kdy začíná stimulace?',
    dateHint: 'První den injekcí. Podle toho počítáme, kolikátý je dnes den.',
    quick: [0, 1, -1, -2],
    mods: [...DG, ...TX],
  },
  {
    id: 'stimulation',
    primary: true,
    icon: '🌸',
    group: 'cycle',
    label: 'Jsem v IVF cyklu',
    hint: 'Stimulace, odběr, embrya v laboratoři',
    phase: 'stimulation',
    field: 'stimulationStartOn',
    dateLabel: 'Kdy jste začala se stimulací?',
    dateHint: 'První den injekcí. Podle toho počítáme, kolikátý je dnes den.',
    quick: [0, -3, -6, -9],
    mods: [...DG, ...TX],
  },
  {
    id: 'retrieval_ahead',
    primary: false,
    icon: '',
    group: 'cycle',
    label: 'Čeká mě odběr vajíček',
    hint: 'Trigger je za dveřmi nebo už byl',
    phase: 'retrieval',
    field: 'retrievalOn',
    dateLabel: 'Kdy je odběr?',
    dateHint: 'Přesný termín vám dala klinika.',
    quick: [0, 1, 2, 3],
    mods: [...DG, ...TX],
  },
  {
    id: 'fertilization',
    primary: false,
    icon: '',
    group: 'cycle',
    label: 'Čekám na oplodnění',
    hint: 'Odběr proběhl, zítra volá embryologie',
    phase: 'fertilization',
    field: 'retrievalOn',
    dateLabel: 'Kdy byl odběr?',
    dateHint: 'Od toho dne se počítá kultivace.',
    quick: [0, -1, -2],
    mods: [...DG, ...TX],
  },
  {
    id: 'retrieval',
    primary: false,
    icon: '',
    group: 'cycle',
    label: 'Čekám na vývoj embryí',
    hint: 'Embrya jsou v laboratoři, čeká se na každý den',
    phase: 'embryo_culture',
    field: 'retrievalOn',
    dateLabel: 'Kdy byl odběr?',
    dateHint: 'Od toho dne se počítá, kolikátý den se embrya kultivují.',
    quick: [-1, -2, -3, -4],
    mods: [...DG, ...TX],
  },
  {
    id: 'mam_embrya',
    primary: true,
    icon: '❄️',
    group: 'cycle',
    label: 'Mám embrya a čeká mě transfer',
    hint: 'Čerstvý embryotransfer nebo kryotransfer',
    phase: 'transfer',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...TX, ...DG],
  },
  {
    id: 'fet_ahead',
    primary: false,
    icon: '',
    group: 'cycle',
    label: 'Čeká mě kryoembryotransfer',
    hint: 'Připravuje se sliznice na rozmražené embryo',
    phase: 'transfer',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...TX, ...DG],
    implied: ['frozen_transfer'],
  },

  // -------------------------------------------------------------- čekání ---
  {
    id: 'transfer',
    primary: true,
    icon: '🤍',
    group: 'waiting',
    label: 'Jsem po transferu',
    hint: 'Čekání na výsledek. Nejtěžší dny z celé léčby',
    phase: 'two_week_wait',
    field: 'transferOn',
    dateLabel: 'Kdy byl transfer?',
    dateHint: 'Podle toho víme, kolikátý den po transferu dnes je.',
    quick: [0, -2, -5, -8],
    mods: [...TX, ...DG, 'after_loss', 'repeated_failure'],
  },
  {
    id: 'waiting_hcg',
    primary: false,
    icon: '',
    group: 'waiting',
    label: 'Čekám na hCG',
    hint: 'Odběr je naplánovaný, doma se počítají dny',
    phase: 'two_week_wait',
    field: 'transferOn',
    dateLabel: 'Kdy byl transfer?',
    dateHint: 'Podle toho víme, kolikátý den po transferu dnes je.',
    quick: [-6, -8, -10, -12],
    mods: [...TX, ...DG, 'after_loss', 'repeated_failure'],
  },
  {
    id: 'beta',
    primary: true,
    icon: '🌱',
    group: 'waiting',
    label: 'Mám pozitivní hCG',
    hint: 'Test vyšel, čekáme na první ultrazvuk',
    phase: 'beta_positive',
    field: 'betaTestOn',
    dateLabel: 'Kdy jste měla odběr hCG?',
    dateHint: 'První pozitivní odběr.',
    quick: [0, -2, -5, -9],
    mods: [...TX, 'twins', 'after_loss', 'repeated_failure'],
  },

  // ------------------------------------------------------------- výsledky ---
  {
    id: 'negative',
    primary: false,
    icon: '',
    group: 'result',
    label: 'Mám negativní hCG',
    hint: 'Přišel výsledek a nevyšel',
    phase: 'waiting_next_attempt',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...DG, ...TX, 'repeated_failure'],
  },
  {
    id: 'between',
    primary: true,
    icon: '🕊️',
    group: 'result',
    label: 'IVF nevyšlo',
    hint: 'Potřebuji zpracovat výsledek a případně pokračovat',
    phase: 'waiting_next_attempt',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...DG, ...TX, 'after_loss', 'repeated_failure'],
  },
  {
    id: 'biochemical',
    primary: false,
    icon: '',
    group: 'result',
    label: 'Zažila jsem biochemické těhotenství',
    hint: 'hCG stouplo a pak kleslo',
    phase: 'loss_biochemical',
    field: 'lossOn',
    dateLabel: 'Kdy se to stalo?',
    dateHint: 'Stačí přibližně. Nic se od toho nepočítá dopředu.',
    quick: [0, -7, -30, -90],
    mods: [...TX, 'after_loss', 'repeated_failure'],
    implied: ['after_loss'],
  },
  {
    id: 'ectopic',
    primary: false,
    icon: '',
    group: 'result',
    label: 'Zažila jsem mimoděložní těhotenství',
    hint: 'Těhotenství se uhnízdilo mimo dělohu',
    phase: 'loss_ectopic',
    field: 'lossOn',
    dateLabel: 'Kdy se to stalo?',
    dateHint: 'Stačí přibližně.',
    quick: [0, -7, -30, -90],
    mods: [...TX, 'after_loss', 'tubal_factor'],
    implied: ['after_loss'],
  },
  {
    id: 'loss',
    primary: true,
    icon: '🕊️',
    group: 'result',
    label: 'Zažila jsem ztrátu',
    hint: 'Těhotenství skončilo. Potřebuji čas',
    phase: 'loss_miscarriage',
    field: 'lossOn',
    dateLabel: 'Kdy se to stalo?',
    dateHint: 'Stačí přibližně. Nic se od toho nepočítá dopředu.',
    quick: [0, -7, -30, -90],
    mods: [...TX, 'after_loss', 'repeated_failure'],
    implied: ['after_loss'],
  },
  {
    id: 'next_transfer',
    primary: false,
    icon: '',
    group: 'result',
    label: 'Čeká mě další transfer',
    hint: 'Máme zamražená embrya a plánujeme kryotransfer',
    phase: 'transfer',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...TX, ...DG, 'repeated_failure'],
    implied: ['frozen_transfer'],
  },
  {
    id: 'next_cycle',
    primary: false,
    icon: '',
    group: 'result',
    label: 'Čeká mě další IVF cyklus',
    hint: 'Jdeme znovu od stimulace',
    phase: 'ivf_prep',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...DG, ...TX, 'repeated_failure'],
  },

  // ----------------------------------------------------------------- jinak ---
  {
    id: 'unsure',
    primary: false,
    icon: '',
    group: 'further',
    label: 'Nevím, kde přesně začít',
    hint: 'Ukažte mi to od začátku, projdu si to sama',
    phase: 'thinking',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [],
  },
]

const GROUP_TITLES: Record<RouteDef['group'], string> = {
  before: 'Než cyklus začne',
  cycle: 'Jsem v IVF cyklu',
  waiting: 'Po transferu a čekání na hCG',
  result: 'Výsledek a co dál',
  further: 'Nevím',
}

export const STEPS = 6

export function routeById(id: string): RouteDef | undefined {
  return ROUTES.find((r) => r.id === id)
}

export function draft(): Draft {
  if (!S.d.draft) {
    patch((d) => {
      d.draft = {
        route: '',
        date: realToday(),
        skipDate: false,
        week: null,
        mods: [],
        diagnoses: [],
        name: '',
        anon: true,
      }
    })
  }
  return S.d.draft!
}

/** Poskládá profil z odpovědí. Odsud dál už s ním pracuje běžný engine. */
export function profileFromDraft(dr: Draft): Profile {
  const route = routeById(dr.route)
  const p = newProfile()
  if (!route) return p

  p.declaredPhase = route.phase
  // Datum volby. Bez něj by odvození z dat nálepku z onboardingu přebilo.
  p.phaseDeclaredOn = viewDate()
  p.displayName = dr.name.trim()
  p.anonymousInCommunity = dr.anon

  // Diagnózy z druhého kroku se promítnou i do modifikátorů, které řídí
  // cílení obsahu. „Zatím nevím“ a „žádná diagnóza“ se do nich nepromítá.
  // nejsou to diagnózy, jsou to odpovědi.
  p.diagnoses = (dr.diagnoses ?? []).filter((d) => d !== 'nevim' && d !== 'zadna')
  const mods = new Set<ModifierId>([
    ...dr.mods,
    ...(route.implied ?? []),
    ...modifiersFromDiagnoses(p.diagnoses),
  ])
  p.modifiers = [...mods]

  if (route.field && !dr.skipDate && dr.date) {
    p[route.field] = dr.date
  }

  return p
}

// ----------------------------------------------------------- vykreslování ---

function progress(step: number): string {
  return `<div class="ob-bar" aria-hidden="true">${Array.from({ length: STEPS }, (_, i) => `<i class="${i <= step ? 'on' : ''}"></i>`).join('')}</div>`
}

function foot(primary: string, secondary = ''): string {
  return `<div class="ob-foot">${secondary}${primary}</div>`
}

function stepWelcome(): string {
  return `${progress(0)}
  <div class="ob-body">
    ${logoKruh('12rem')}
    <div class="grain ob-hero" style="${heroStyle('dusk')};border-radius:var(--r-2xl);padding:clamp(1.75rem,5vw,2.5rem);margin-top:1.4rem">
      <h1 class="display" style="position:relative;z-index:1">Vaše cesta. Vaše tempo. Vaše IVF.</h1>
    </div>
    <p class="lede">Ne obecné rady o neplodnosti. Obsah pro <strong>šestý den po transferu</strong>, pro <strong>devátý den stimulace</strong>, pro <strong>den, kdy nezbylo žádné embryo</strong>.</p>
    <div class="stack" style="gap:1rem;margin-top:2rem">
      ${[
        ['◉', 'Dnes', 'Jedním pohledem uvidíte, co po vás dnešek chce a co na to máte.'],
        ['✧', 'Moje cesta', 'Cykly, embrya, transfery a výsledky. Celá historie na jednom místě.'],
        ['❖', 'Obsah', 'Fáze, knihovna, pojmy i diagnózy. U všeho stojí, k čemu to je.'],
      ]
        .map(
          ([icon, t, b]) =>
            `<div class="row" style="gap:.9rem;align-items:flex-start"><span style="color:var(--taupe);font-size:1.1rem">${icon}</span><div><p style="font-weight:500">${t}</p><p class="soft" style="font-size:.875rem;line-height:1.55;margin-top:.15rem">${b}</p></div></div>`,
        )
        .join('')}
    </div>
    <p class="faint" style="margin-top:2rem;font-size:.8125rem;line-height:1.6">Nastavení zabere minutu a kdykoliv se dá změnit. Nechceme e-mail ani heslo.</p>
  </div>
  ${foot('<button class="btn btn-primary" data-act="ob-next">Začít</button>')}`
}

/**
 * Kde právě jste.
 *
 * Deset dlaždic, které pokrývají skoro každou ženu, a pod nimi odkaz na
 * jemnější dělení. Tohle není otázka „kterou sekci chcete otevřít“.
 * Je to jediná otázka, ze které se poskládá celý zbytek aplikace.
 *
 * Nikdo se tím nezamyká: fáze jde kdykoli změnit a nic se přitom nesmaže.
 */
export function phasePicker(vybrano: string, act: string, vsechny: boolean): string {
  const primary = ROUTES.filter((r) => r.primary)
  const ostatni = ROUTES.filter((r) => !r.primary)

  const dlazdice = (r: RouteDef) => `<button class="pick" data-act="${esc(act)}" data-arg="${esc(r.id)}"
    aria-pressed="${vybrano === r.id}">
    <span class="mark">✓</span>
    <span><b>${r.icon ? `${r.icon} ` : ''}${esc(r.label)}</b><span>${esc(r.hint)}</span></span>
  </button>`

  const skupiny = (['before', 'cycle', 'waiting', 'result', 'further'] as const)
    .map((g) => {
      const list = ostatni.filter((r) => r.group === g)
      if (list.length === 0) return ''
      return `<div class="ob-group">
        <p class="eyebrow">${GROUP_TITLES[g]}</p>
        <div class="picker" style="margin-top:0">${list.map(dlazdice).join('')}</div>
      </div>`
    })
    .join('')

  return `<div class="picker">${primary.map(dlazdice).join('')}</div>
    ${
      vsechny
        ? `<div style="margin-top:1.6rem">
            <p class="eyebrow">Jemnější dělení</p>
            <p class="faint" style="font-size:.8125rem;margin-top:.35rem;line-height:1.5">
              Když se do žádné dlaždice netrefíte přesně, vyberte si tady.
            </p>
            ${skupiny}
          </div>`
        : `<button class="btn btn-ghost btn-block" data-act="ob-more" style="margin-top:1.1rem">
            Potřebuji jinou fázi
          </button>`
    }`
}

function stepWhere(): string {
  const dr = draft()
  const picked = routeById(dr.route)
  const guide = picked ? guideFor(picked.phase) : null
  const preview = guide
    ? `<div class="surface pad rise" style="margin-top:1.75rem">
        <p class="eyebrow">Co pro vás v téhle fázi máme</p>
        <p class="soft" style="margin-top:.6rem;line-height:1.65">${esc(guide.summary)}</p>
        <p class="eyebrow" style="margin-top:1.25rem">Co vás čeká</p>
        <ul class="bullets">${guide.whatAwaits.slice(0, 3).map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
        <p class="faint" style="margin-top:1rem;font-size:.8125rem;line-height:1.55">A dál: články, práce s hlavou, pohyb, doplňky, rady pro partnera, otázky pro lékaře a slovníček pojmů téhle fáze.</p>
      </div>`
    : ''

  return `${progress(1)}
  <div class="ob-body">
    <p class="eyebrow">Vítejte na své IVF cestě</p>
    <h1 class="display" style="margin-top:.7rem">Kde právě jste?</h1>
    <p class="lede">Podle toho poskládáme celou aplikaci. Dnešek, obsah, checklisty i kalendář. Až se posunete, změníte to jedním klikem a nic se přitom nesmaže.</p>
    ${phasePicker(dr.route, 'ob-route', S.d.obMore === true)}
    ${preview}
  </div>
  ${foot(
    `<button class="btn btn-primary" data-act="ob-next" ${dr.route ? '' : 'disabled'}>Pokračovat</button>`,
    '<button class="btn btn-ghost" data-act="ob-back">Zpět</button>',
  )}`
}

function stepWhen(): string {
  const dr = draft()
  const route = routeById(dr.route)
  if (!route || !route.field) return stepWhat()

  const quick = route.quick
    .map((off) => {
      const date = addDays(realToday(), off)
      const label =
        off === 0
          ? 'dnes'
          : off === -1
            ? 'včera'
            : off > 0
              ? formatCzechDate(date)
              : `před ${Math.abs(off)} dny`
      return `<button data-act="ob-date" data-arg="${date}" aria-pressed="${!dr.skipDate && dr.date === date}">${esc(label)}</button>`
    })
    .join('')

  return `${progress(2)}
  <div class="ob-body">
    <p class="eyebrow">Krok 2 ze 4</p>
    <h1 class="display" style="margin-top:.7rem">${esc(route.dateLabel)}</h1>
    <p class="lede">${esc(route.dateHint)}</p>

    <div class="chips" style="margin-top:1.75rem">${quick}</div>

    <div class="formrow" style="margin-top:1.5rem">
      <label class="label" for="ob-date">Nebo vyberte datum</label>
      <input class="field" type="date" id="ob-date" value="${esc(dr.skipDate ? '' : dr.date)}" data-act="ob-date-input">
    </div>

    ${
      !dr.skipDate && dr.date
        ? `<p class="banner" style="margin-top:1.25rem"><span style="color:var(--taupe)">◈</span><span>${esc(formatCzechDate(dr.date, { weekday: true, year: true }))}</span></p>`
        : ''
    }


    <button class="btn btn-ghost" data-act="ob-skip-date" style="margin-top:1.25rem;align-self:flex-start">${dr.skipDate ? '✓ ' : ''}Datum zatím nevím</button>
  </div>
  ${foot(
    `<button class="btn btn-primary" data-act="ob-next" ${dr.skipDate || dr.date ? '' : 'disabled'}>Pokračovat</button>`,
    '<button class="btn btn-ghost" data-act="ob-back">Zpět</button>',
  )}`
}

function stepWhat(): string {
  const dr = draft()
  const route = routeById(dr.route)
  const mods = route?.mods ?? []

  return `${progress(4)}
  <div class="ob-body">
    <p class="eyebrow">Krok 4 ze 5</p>
    <h1 class="display" style="margin-top:.7rem">Co se vás týká?</h1>
    <p class="lede">Vyberte, co platí. Podle toho se mění obsah uvnitř fáze. Po císaři se šestinedělí čte jinak než po přirozeném porodu.</p>

    ${
      mods.length
        ? `<div class="chips" style="margin-top:1.75rem">
            ${mods
              .map(
                (m) =>
                  `<button data-act="ob-mod" data-arg="${m}" aria-pressed="${dr.mods.includes(m)}">${esc(MODIFIER_LABELS[m])}</button>`,
              )
              .join('')}
          </div>`
        : '<p class="note" style="margin-top:1.75rem">Ve vaší fázi zatím není co upřesňovat. Můžete pokračovat.</p>'
    }

    ${
      route?.implied?.length
        ? `<p class="note" style="margin-top:1.25rem">Z vaší volby už počítáme s: ${route.implied.map((m) => esc(MODIFIER_LABELS[m])).join(', ')}.</p>`
        : ''
    }

    <p class="faint" style="margin-top:1.5rem;font-size:.8125rem;line-height:1.6">Nic z toho není povinné a nikam se to neodesílá. Zůstává to ve vašem prohlížeči.</p>
  </div>
  ${foot(
    '<button class="btn btn-primary" data-act="ob-next">Pokračovat</button>',
    '<button class="btn btn-ghost" data-act="ob-back">Zpět</button>',
  )}`
}

/**
 * Co už o své cestě víte.
 *
 * Diagnóza není podmínka. Většina žen ji na začátku nezná a „zatím nevím“
 * je legitimní odpověď, proto je v seznamu první a nic se za ni neschovává.
 * Výběr jen personalizuje obsah; aplikace z něj neodvozuje léčbu.
 */
function stepDiagnosis(): string {
  const dr = draft()
  const vybrane = dr.diagnoses ?? []

  const skupina = (g: string) => {
    const items = DIAGNOSES.filter((d) => d.group === g)
    if (items.length === 0) return ''
    return `<div style="margin-top:1.4rem">
      <p class="eyebrow">${esc(g)}</p>
      <div class="chips" style="margin-top:.6rem">
        ${items
          .map(
            (d) =>
              `<button data-act="ob-dg" data-arg="${esc(d.id)}" aria-pressed="${vybrane.includes(d.id)}">${esc(d.label)}</button>`,
          )
          .join('')}
      </div>
    </div>`
  }

  return `${progress(3)}
  <div class="ob-body">
    <p class="eyebrow">Krok 3 ze 5</p>
    <h1 class="display" style="margin-top:.7rem">Co už o své cestě víte?</h1>
    <p class="lede">Vyberte, co se vás týká. Může toho být víc. Kombinovaný faktor je v IVF spíš pravidlo než výjimka.</p>

    <div class="chips" style="margin-top:1.75rem">
      <button data-act="ob-dg" data-arg="nevim" aria-pressed="${vybrane.includes('nevim')}">Zatím nevím</button>
      <button data-act="ob-dg" data-arg="zadna" aria-pressed="${vybrane.includes('zadna')}">Nemáme žádnou diagnózu</button>
    </div>

    ${DIAGNOSIS_GROUPS.map(skupina).join('')}

    <p class="faint" style="margin-top:1.75rem;font-size:.8125rem;line-height:1.6">
      Podle výběru se vám nabízí obsah, který se vás týká. Léčbu z toho aplikace neodvozuje
      a kdykoli to změníte v Profilu.
    </p>
  </div>
  ${foot(
    '<button class="btn btn-primary" data-act="ob-next">Pokračovat</button>',
    '<button class="btn btn-ghost" data-act="ob-back">Zpět</button>',
  )}`
}

function stepWho(): string {
  const dr = draft()
  return `${progress(5)}
  <div class="ob-body">
    <p class="eyebrow">Krok 5 ze 5</p>
    <h1 class="display" style="margin-top:.7rem">Jak vám máme říkat?</h1>
    <p class="lede">Jenom kvůli oslovení na domovské stránce. Klidně to nechte prázdné.</p>

    <div class="formrow" style="margin-top:1.75rem">
      <label class="label" for="ob-name">Jméno</label>
      <input class="field" id="ob-name" placeholder="Například Tereza" value="${esc(dr.name)}" data-act="ob-name" autocomplete="off">
    </div>

    <div class="surface pad" style="margin-top:1.5rem">
      <button class="switch" data-act="ob-anon" aria-pressed="${dr.anon}">
        <span>
          <b style="font-weight:500;font-size:.9375rem">V komunitě vystupovat anonymně</b>
          <span class="soft" style="display:block;font-size:.8125rem;line-height:1.5;margin-top:.2rem">Ostatní uvidí jen vaši fázi, nikdy jméno ani zdravotní údaje.</span>
        </span>
        <span class="track"></span>
      </button>
    </div>

    <p class="faint" style="margin-top:1.5rem;font-size:.8125rem;line-height:1.6">Žádná registrace, žádný e-mail. Data zůstávají v tomhle prohlížeči a kdykoliv je smažete v nastavení.</p>
  </div>
  ${foot(
    '<button class="btn btn-primary" data-act="ob-finish">Otevřít mou aplikaci</button>',
    '<button class="btn btn-ghost" data-act="ob-back">Zpět</button>',
  )}`
}

/** Fáze bez kotevního data nemají krok „kdy“. Přeskakuje se v akcích. */
export function stepHasDate(): boolean {
  return Boolean(routeById(draft().route)?.field)
}

export function renderOnboarding(): string {
  const step = S.d.onboardingStep
  const body =
    step <= 0
      ? stepWelcome()
      : step === 1
        ? stepWhere()
        : step === 2
          ? stepWhen()
          : step === 3
            ? stepDiagnosis()
            : step === 4
              ? stepWhat()
              : stepWho()

  return `<div class="ob">${body}</div>`
}
