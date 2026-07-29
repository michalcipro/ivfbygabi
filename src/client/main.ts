import { PHASES, isPhaseId } from '../lib/domain/phases'
import { isModifierId, type ModifierId } from '../lib/domain/profile'
import { today as realToday } from '../lib/domain/dates'
import { contentById } from '../lib/content'
import { parseReport, type ParsedReport } from '../lib/health/parse-report'
import { LAB_BY_KEY } from '../lib/health/lab-params'
import type { Letter } from '../lib/shared/records'

import { esc } from './ui'
import {
  journey,
  journalFor,
  learn,
  load,
  patch,
  profile,
  reset,
  S,
  saveJournal,
  toggleSaved,
  uid,
  viewDate,
  isOnboarded,
} from './store'
import { draft, profileFromDraft, renderOnboarding, stepHasDate } from './onboarding'
import { screenCesta, screenDnes, screenObjevit, screenProc } from './screens-home'
import {
  screenDiagnoza,
  screenDiagnozy,
  screenFaze,
  screenPojem,
  SECTIONS,
  type SectionId,
} from './screens-phase'
import { screenChecklisty, screenCist, screenDenik, screenGabi, screenKnihovna } from './screens-tools'
import {
  screenClenstvi,
  screenDokumenty,
  screenKalendar,
  screenKomunita,
  screenNastaveni,
  screenObchod,
  screenPartner,
  screenPribeh,
  screenSkupina,
  screenVice,
  screenZdravi,
} from './screens-more'

/**
 * Kostra aplikace: routování, vykreslení a akce.
 *
 * Pravidla, na kterých to stojí:
 *  - pět stálých záložek, nic jiného se ve spodní liště neobjeví,
 *  - každá další obrazovka má nahoře lištu „zpět“ s tím, kam vede,
 *  - adresa v prohlížeči odpovídá obrazovce, takže funguje i tlačítko zpět.
 */

const TABS = [
  { id: 'dnes', label: 'Dnes', icon: '☀' },
  { id: 'faze', label: 'Moje fáze', icon: '❖' },
  { id: 'denik', label: 'Deník', icon: '✎' },
  { id: 'gabi', label: 'Gabi', icon: '✦' },
  { id: 'vice', label: 'Více', icon: '⋯' },
]

const SECONDARY = [
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
  objevit: 'Objevit',
  gabi: 'Gabi',
  denik: 'Deník',
  vice: 'Více',
  cesta: 'Celá cesta',
  faze: 'Moje fáze',
  pojem: 'Pojem',
  diagnoza: 'Diagnóza',
  diagnozy: 'Diagnózy',
  knihovna: 'Knihovna',
  cist: 'Čtení',
  checklisty: 'Checklisty',
  kalendar: 'Kalendář',
  zdravi: 'Zdraví',
  dokumenty: 'Dokumenty',
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
  cesta: 'celou cestu',
  faze: 'vaši fázi',
  diagnozy: 'Diagnózy',
  knihovna: 'Knihovnu',
  komunita: 'Komunitu',
  skupina: 'Skupinu',
}

/** Kam vede „zpět“, když uživatelka přišla přímo z odkazu. */
const PARENT: Record<string, string> = {
  cesta: 'vice',
  objevit: 'vice',
  pojem: 'faze',
  diagnoza: 'faze',
  diagnozy: 'vice',
  knihovna: 'vice',
  cist: 'objevit',
  checklisty: 'vice',
  kalendar: 'vice',
  zdravi: 'vice',
  dokumenty: 'vice',
  komunita: 'vice',
  skupina: 'komunita',
  pribeh: 'vice',
  obchod: 'vice',
  partner: 'vice',
  nastaveni: 'vice',
  clenstvi: 'vice',
  proc: 'dnes',
}

/** Stav, který nemá cenu ukládat — přežívá jen do zavření záložky. */
const view = {
  query: '',
  kind: 'vse',
  parsed: null as ParsedReport | null,
  docText: '',
}

let stack: string[] = []
const scrollMemory = new Map<string, number>()

function currentRoute(): string {
  const raw = location.hash.replace(/^#\/?/, '')
  return raw || 'dnes'
}

const base = (route: string) => route.split('/')[0]
const arg = (route: string) => route.split('/').slice(1).join('/')

function go(route: string): void {
  scrollMemory.set(currentRoute(), window.scrollY)
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
    case 'objevit':
      return screenObjevit()
    case 'gabi':
      return screenGabi()
    case 'denik':
      return screenDenik()
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
    case 'dokumenty':
      return screenDokumenty(view.parsed)
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
      return screenNastaveni()
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
  // Cizí fáze se otevírá z Celé cesty — tam se uživatelka musí umět vrátit,
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

  app.innerHTML = `<div class="shell">
    <aside class="sidebar no-print">
      <div class="brand"><b>IVF by Gabi</b><span>${esc(state.phase.name)}</span></div>
      <nav class="stack" style="gap:.1rem">
        ${TABS.filter((t) => t.id !== 'vice').map((t) => navButton(t, route)).join('')}
        <p class="eyebrow" style="margin:1.35rem 0 .4rem;padding:0 .75rem">Vaše cesta</p>
        ${SECONDARY.map((t) => navButton(t, route)).join('')}
        <p class="eyebrow" style="margin:1.35rem 0 .4rem;padding:0 .75rem">Ostatní</p>
        ${TERTIARY.map((t) => navButton(t, route)).join('')}
      </nav>
      <div class="sidefoot">
        <span class="avatar" style="background:linear-gradient(135deg,#f2e3cd,#cdb08c)">${esc((p.displayName || 'V').slice(0, 1).toUpperCase())}</span>
        <span style="min-width:0;flex:1">
          <span style="display:block;font-size:.8125rem;font-weight:500;overflow:hidden;text-overflow:ellipsis">${esc(p.displayName || 'Vaše cesta')}</span>
          <span class="faint" style="display:block;font-size:.6875rem">${esc(state.dayLabel.replace(/^Dnes (je|jste) /, ''))}</span>
        </span>
        <button class="iconbtn" data-go="nastaveni" aria-label="Nastavení">⚙</button>
      </div>
    </aside>

    <main class="main">
      ${backbar(route)}
      <div class="page ${narrow ? 'page-narrow' : ''}">${screenFor(route)}</div>
    </main>
  </div>

  <nav class="tabbar no-print">
    ${TABS.map(
      (t) =>
        `<button data-go="${t.id}" ${base(route) === t.id ? 'aria-current="page"' : ''}><i>${t.icon}</i><span>${esc(t.label)}</span></button>`,
    ).join('')}
  </nav>`

  window.scrollTo(0, scrollMemory.get(route) ?? 0)
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

/**
 * Hledání v aplikaci. Uloží se jen dotaz — výsledky se počítají při
 * vykreslení, takže po doplnění obsahu ukáže starý dotaz nové nálezy.
 */
function askGabiSearch(question: string): void {
  patch((d) => {
    d.chat.push({ role: 'user', text: question, refs: [] })
    d.chat.push({ role: 'gabi', text: question, refs: [] })
  })
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
      const date = viewDate()
      const existing = journalFor(date)
      saveJournal({
        date,
        mood: Number(argValue),
        anxiety: existing?.anxiety ?? 3,
        hope: existing?.hope ?? 3,
        energy: existing?.energy ?? 3,
        note: existing?.note ?? '',
      })
      break
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

    // --- Gabi -------------------------------------------------------------
    case 'ask': {
      const q = val('ask')
      if (q.length < 3) return
      askGabiSearch(q)
      break
    }
    case 'prompt':
      askGabiSearch(argValue)
      break
    case 'chat-clear':
      patch((d) => {
        d.chat = []
      })
      break

    // --- deník ------------------------------------------------------------
    case 'journal-save': {
      const num = (id: string) => Number((document.getElementById(id) as HTMLInputElement | null)?.value ?? 3)
      saveJournal({
        date: viewDate(),
        mood: num('j-mood'),
        anxiety: num('j-anxiety'),
        hope: num('j-hope'),
        energy: num('j-energy'),
        note: val('j-note'),
      })
      break
    }

    // --- kalendář ---------------------------------------------------------
    case 'event-add': {
      const title = val('ev-title')
      if (!title) return
      const onDate = val('ev-date') || viewDate()
      const kind = val('ev-kind') || 'vlastni'
      patch((d) => {
        d.events.push({ id: uid('ev'), title, kind, onDate, atTime: null, note: null, done: false })
      })
      break
    }
    case 'event-del':
      patch((d) => {
        d.events = d.events.filter((e) => e.id !== argValue)
      })
      break
    case 'med-add': {
      const name = val('med-name')
      if (!name) return
      patch((d) => {
        d.meds.push({ id: uid('md'), name, dose: '', timeOfDay: val('med-time') })
      })
      break
    }
    case 'med-del':
      patch((d) => {
        d.meds = d.meds.filter((m) => m.id !== argValue)
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
    case 'doc-parse': {
      const text = val('doc-text')
      if (text.length < 3) return
      view.docText = text
      view.parsed = parseReport(text)
      break
    }
    case 'doc-save': {
      const parsed = view.parsed
      if (!parsed) return
      const onDate = parsed.detectedDate ?? viewDate()
      patch((d) => {
        for (const v of parsed.values) {
          d.labs.push({ id: uid('lb'), paramKey: v.paramKey, value: v.value, unit: v.unit, onDate })
        }
        d.docs.push({
          id: uid('dc'),
          title: `Zpráva z ${onDate}`,
          addedOn: viewDate(),
          found: parsed.values.map((v) => ({ paramKey: v.paramKey, value: v.value, unit: v.unit })),
        })
      })
      view.parsed = null
      go('zdravi')
      return
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
    case 'export': {
      const blob = new Blob([JSON.stringify(S.d, null, 2)], { type: 'application/json' })
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

  render()
}

/** Změny ve formulářích, které se ukládají rovnou (výběry a data). */
function change(act: string, argValue: string, value: string): void {
  switch (act) {
    case 'set-phase':
      if (value !== '' && !isPhaseId(value)) return
      patch((d) => {
        if (d.profile) d.profile.declaredPhase = value === '' ? null : value
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
  render()
}

// ---------------------------------------------------------------- napojení ---

document.addEventListener('click', (ev) => {
  const target = (ev.target as HTMLElement | null)?.closest<HTMLElement>('[data-go],[data-act]')
  if (!target) return

  if (target.dataset.go !== undefined) {
    ev.preventDefault()
    const route = target.dataset.go
    // Otevření obsahu je signál pro doporučování — přesně jako v aplikaci.
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
    const caret = el.selectionStart
    render()
    const box = document.getElementById('q') as HTMLInputElement | null
    if (box) {
      box.focus()
      if (caret !== null) box.setSelectionRange(caret, caret)
    }
  }
})

document.addEventListener('keydown', (ev) => {
  const el = ev.target as HTMLElement | null
  if (ev.key === 'Enter' && el?.id === 'ask') {
    ev.preventDefault()
    action('ask', '')
  }
  if (ev.key === 'Escape' && !TABS.some((t) => t.id === base(currentRoute()))) back()
})

window.addEventListener('hashchange', () => {
  const route = currentRoute()
  if (stack.length > 1 && stack[stack.length - 2] === route) stack.pop()
  else stack.push(route)
  render()
})

// ------------------------------------------------------------------ start ---

load()
applyTheme()
stack = [currentRoute()]
if (!location.hash) location.hash = '#/dnes'
render()
