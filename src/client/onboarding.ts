import type { PhaseId } from '../lib/domain/phases'
import { MODIFIER_LABELS, type ModifierId, type Profile } from '../lib/domain/profile'
import { addDays, formatCzechDate, today as realToday } from '../lib/domain/dates'
import { guideFor } from './../lib/domain/guides'
import { esc, heroStyle } from './ui'
import { bloomMark } from './viz'
import { patch, S, newProfile, type Draft } from './store'

/**
 * Onboarding.
 *
 * Pět kroků, každý s jednou otázkou. Ptáme se jen na to, co opravdu mění,
 * co uživatelka uvidí — datum a situaci. Všechno ostatní se dá doplnit
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
  group: 'cycle' | 'around' | 'further'
  label: string
  hint: string
  phase: PhaseId
  field: DateField | null
  dateLabel: string
  dateHint: string
  /** Nabídka „rychlých“ posunů ve dnech, aby se nemuselo klikat v kalendáři. */
  quick: number[]
  mods: ModifierId[]
  /** Situace, která z volby plyne sama — přidá se bez ptaní. */
  implied?: ModifierId[]
}

const DG: ModifierId[] = ['pcos', 'endometriosis', 'low_amh', 'male_factor', 'thyroid', 'unexplained']
const TX: ModifierId[] = ['icsi', 'pgt', 'frozen_transfer', 'donor_egg', 'donor_sperm']
const SIT: ModifierId[] = ['after_loss', 'repeated_failure', 'single_mother', 'same_sex_couple']

export const ROUTES: RouteDef[] = [
  {
    id: 'stimulation',
    group: 'cycle',
    label: 'Jsem ve stimulaci',
    hint: 'Píchám injekce, chodím na kontroly folikulů',
    phase: 'stimulation',
    field: 'stimulationStartOn',
    dateLabel: 'Kdy jste začala se stimulací?',
    dateHint: 'První den injekcí. Podle toho počítáme, kolikátý je dnes den.',
    quick: [0, -3, -6, -9],
    mods: [...DG, ...TX],
  },
  {
    id: 'retrieval',
    group: 'cycle',
    label: 'Po odběru vajíček',
    hint: 'Čekám na zprávy z embryologie',
    phase: 'embryo_culture',
    field: 'retrievalOn',
    dateLabel: 'Kdy byl odběr?',
    dateHint: 'Od toho dne se počítá, kolikátý den se embrya kultivují.',
    quick: [0, -1, -2, -3],
    mods: [...DG, ...TX],
  },
  {
    id: 'transfer',
    group: 'cycle',
    label: 'Po transferu',
    hint: 'Čekání na výsledek — nejtěžší dny z celé léčby',
    phase: 'two_week_wait',
    field: 'transferOn',
    dateLabel: 'Kdy byl transfer?',
    dateHint: 'Podle toho víme, kolikátý den po transferu dnes je.',
    quick: [0, -2, -5, -8],
    mods: [...TX, ...DG, 'after_loss', 'repeated_failure'],
  },
  {
    id: 'beta',
    group: 'cycle',
    label: 'Po pozitivní beta hCG',
    hint: 'Test vyšel, čekáme na první ultrazvuk',
    phase: 'beta_positive',
    field: 'betaTestOn',
    dateLabel: 'Kdy jste měla odběr beta hCG?',
    dateHint: 'První pozitivní odběr.',
    quick: [0, -2, -5, -9],
    mods: [...TX, 'twins', 'after_loss', 'repeated_failure'],
  },

  {
    id: 'ivf_prep',
    group: 'around',
    label: 'Připravujeme se na IVF',
    hint: 'Máme plán, cyklus ještě nezačal',
    phase: 'ivf_prep',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...DG, ...TX],
  },
  {
    id: 'diagnostics',
    group: 'around',
    label: 'Jsme ve vyšetřování',
    hint: 'Odběry, spermiogram, hledáme příčinu',
    phase: 'diagnostics',
    field: 'diagnosticsStartedOn',
    dateLabel: 'Kdy jste začali s vyšetřením?',
    dateHint: 'Stačí přibližně.',
    quick: [-7, -30, -90, -180],
    mods: [...DG, ...SIT],
  },
  {
    id: 'between',
    group: 'around',
    label: 'Mezi pokusy',
    hint: 'Cyklus nevyšel, čekáme na další',
    phase: 'waiting_next_attempt',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [...DG, ...TX, 'after_loss', 'repeated_failure'],
  },
  {
    id: 'trying',
    group: 'further',
    label: 'Snažíme se přirozeně',
    hint: 'Zatím bez léčby',
    phase: 'trying_naturally',
    field: 'tryingSince',
    dateLabel: 'Odkdy se snažíte?',
    dateHint: 'Stačí přibližně.',
    quick: [-30, -90, -180, -365],
    mods: [...DG, ...SIT],
  },
  {
    id: 'thinking',
    group: 'further',
    label: 'Zatím jen přemýšlíme',
    hint: 'Chci vědět, do čeho jdu',
    phase: 'thinking',
    field: null,
    dateLabel: '',
    dateHint: '',
    quick: [],
    mods: [],
  },
]

const GROUP_TITLES: Record<RouteDef['group'], string> = {
  cycle: 'Jsem v IVF cyklu',
  around: 'Kolem cyklu',
  further: 'Dál na cestě',
}

export const STEPS = 5

export function routeById(id: string): RouteDef | undefined {
  return ROUTES.find((r) => r.id === id)
}

export function draft(): Draft {
  if (!S.d.draft) {
    patch((d) => {
      d.draft = { route: '', date: realToday(), skipDate: false, week: null, mods: [], name: '', anon: true }
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
  p.displayName = dr.name.trim()
  p.anonymousInCommunity = dr.anon

  const mods = new Set<ModifierId>([...dr.mods, ...(route.implied ?? [])])
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
    <div class="grain ob-hero" style="${heroStyle('dusk')};border-radius:var(--r-2xl);padding:clamp(1.75rem,5vw,2.5rem)">
      <span class="ob-brand">${bloomMark(34, true)}<b>Bloomia</b></span>
      <h1 class="display" style="margin-top:1.1rem;position:relative;z-index:1">Každý den vám sem připravíme přesně ten den, ve kterém jste.</h1>
    </div>
    <p class="lede">Ne obecné rady o neplodnosti. Obsah pro <strong>šestý den po transferu</strong>, pro <strong>devátý den stimulace</strong>, pro <strong>devatenáctý den na oddělení</strong>.</p>
    <div class="stack" style="gap:1rem;margin-top:2rem">
      ${[
        ['◉', 'Dnes', 'Jedním pohledem uvidíte, co po vás dnešek chce a co na to máte.'],
        ['✎', 'Zápis', 'Nálada, tělo, vpich. Dvacet vteřin denně a máte z toho graf.'],
        ['❖', 'Průvodce', 'Fáze, knihovna, pojmy i diagnózy. U všeho stojí, k čemu to je.'],
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

function stepWhere(): string {
  const dr = draft()
  const groups = (['cycle', 'around', 'further'] as const)
    .map(
      (g) => `<div class="ob-group">
        <p class="eyebrow">${GROUP_TITLES[g]}</p>
        <div class="picker" style="margin-top:0">
          ${ROUTES.filter((r) => r.group === g)
            .map(
              (r) => `<button class="pick" data-act="ob-route" data-arg="${r.id}" aria-pressed="${dr.route === r.id}">
                <span class="mark">✓</span>
                <span><b>${esc(r.label)}</b><span>${esc(r.hint)}</span></span>
              </button>`,
            )
            .join('')}
        </div>
      </div>`,
    )
    .join('')

  const picked = routeById(dr.route)
  const guide = picked ? guideFor(picked.phase) : null
  const preview = guide
    ? `<div class="surface pad rise" style="margin-top:1.75rem">
        <p class="eyebrow">Co pro vás v téhle fázi máme</p>
        <p class="soft" style="margin-top:.6rem;line-height:1.65">${esc(guide.summary)}</p>
        <p class="eyebrow" style="margin-top:1.25rem">Co vás čeká</p>
        <ul class="bullets">${guide.whatAwaits.slice(0, 3).map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
        <p class="faint" style="margin-top:1rem;font-size:.8125rem;line-height:1.55">A dál: články a videa, práce s hlavou, pohyb, doplňky, rady pro partnera, otázky pro lékaře a slovníček pojmů téhle fáze.</p>
      </div>`
    : ''

  return `${progress(1)}
  <div class="ob-body">
    <p class="eyebrow">Krok 1 ze 4</p>
    <h1 class="display" style="margin-top:.7rem">Kde právě jste?</h1>
    <p class="lede">Podle toho poskládáme obsah. Až se posunete, změníte to jedním klikem.</p>
    ${groups}
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

  return `${progress(3)}
  <div class="ob-body">
    <p class="eyebrow">Krok 3 ze 4</p>
    <h1 class="display" style="margin-top:.7rem">Co se vás týká?</h1>
    <p class="lede">Vyberte, co platí. Podle toho se mění obsah uvnitř fáze — po císaři se šestinedělí čte jinak než po přirozeném porodu.</p>

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

function stepWho(): string {
  const dr = draft()
  return `${progress(4)}
  <div class="ob-body">
    <p class="eyebrow">Krok 4 ze 4</p>
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

/** Fáze bez kotevního data nemají krok „kdy“ — přeskakuje se v akcích. */
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
            ? stepWhat()
            : stepWho()

  return `<div class="ob">${body}</div>`
}
