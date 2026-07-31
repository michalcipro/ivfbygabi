import { formatCzechDate } from '../lib/domain/dates'
import { promptFor } from '../lib/domain/journal-prompts'
import { SYMPTOM_GROUPS, SYMPTOM_BY_ID, warningsFor } from '../lib/domain/symptoms'
import { dayReading, journalFor, journey, S, shotsOn, viewDate, zoneLastUsed } from './store'
import { esc } from './ui'
import { accordion, bellyMap, dial, segmented, SHOT_ZONES } from './viz'

/**
 * Zápis.
 *
 * Rozdělený přepínačem na tři části — jak mi je, tělo, vpich. Vzor pro tohle
 * dělení je převzatý z referenční aplikace: každá záložka nese dvě až tři
 * části, takže se pět záložek chová jako dvanáct obrazovek bez zanořování.
 *
 * Papírové diáře umírají na to, že do nich píšete a nic se nestane — tady
 * každý zápis okamžitě pohne vnitřním prstencem.
 */

export const ZAPIS_SECTIONS = [
  { id: 'nalada', label: 'Jak mi je' },
  { id: 'telo', label: 'Tělo' },
  { id: 'vpich', label: 'Vpich' },
]

export type ZapisSection = 'nalada' | 'telo' | 'vpich'

export function isZapisSection(s: string): s is ZapisSection {
  return ZAPIS_SECTIONS.some((x) => x.id === s)
}

/** Ve kterých fázích se běžně píchá. */
function injectingPhase(group: string): boolean {
  return group === 'treatment' || group === 'waiting'
}

// ------------------------------------------------------------ jak mi je ---

function paneNalada(): string {
  const date = viewDate()
  const row = journalFor(date)
  const r = dayReading(date)
  const state = journey()
  const prompt = promptFor(state.phase.id, state.dayInPhase, date)

  return [
    `<section class="surface pad rise">
      <p class="eyebrow">Čtyři osy rezervy</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.3rem">Z těchhle čtyř se skládá vnitřní prstenec. Ukládá se hned po klepnutí.</p>

      <div style="margin-top:1.2rem"><p class="label">Nálada</p>
        ${dial('mood', row?.mood ?? 3, 'cool', 'na dně', 'dobrá')}</div>
      <div style="margin-top:1.3rem"><p class="label">Úzkost</p>
        ${dial('anxiety', row?.anxiety ?? 3, 'warm', 'klid', 'hodně')}</div>
      <div style="margin-top:1.3rem"><p class="label">Naděje</p>
        ${dial('hope', row?.hope ?? 3, 'plum', 'nemám', 'velká')}</div>
      <div style="margin-top:1.3rem"><p class="label">Energie</p>
        ${dial('energy', row?.energy ?? 3, 'gold', 'nic', 'plno')}</div>

      ${
        r.reserve !== null
          ? `<p class="faint" style="margin-top:1.3rem;font-size:.8125rem">
              Z toho vychází rezerva <b style="color:var(--s2)">${r.reserve} z 10</b> · dnešek žádá ${r.demand}.
            </p>`
          : ''
      }
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Otázka na dnešek</p>
      <h2 class="display" style="font-size:1.25rem;margin-top:.4rem;line-height:1.3">${esc(prompt.text)}</h2>
      <p class="faint" style="margin-top:.5rem;font-size:.8125rem;line-height:1.55">${esc(prompt.why)}</p>
      <textarea class="field" id="z-prompt" rows="4" placeholder="Tři věty stačí." style="margin-top:.9rem">${esc(row?.promptAnswer ?? '')}</textarea>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Co se dnes povedlo</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.3rem">
        Hlava si pamatuje hlavně selhání. Tohle je záměrné vyvážení — a v neděli se z toho stane věta týdne.
      </p>
      <input class="field" id="z-win" placeholder="Třeba: píchla jsem si sama." value="${esc(row?.win ?? '')}" style="margin-top:.7rem">

      <p class="eyebrow" style="margin-top:1.3rem">Cokoli dalšího</p>
      <textarea class="field" id="z-note" rows="3" placeholder="Volné místo. Nikdo jiný to neuvidí." style="margin-top:.5rem">${esc(row?.note ?? '')}</textarea>

      <button class="btn btn-primary" data-act="zapis-save" style="margin-top:1.25rem">
        ${row ? 'Uložit změny' : 'Uložit dnešek'}
      </button>
      <p class="faint" style="margin-top:.7rem;font-size:.8125rem">Číselníky se ukládají hned, texty tímhle tlačítkem.</p>
    </section>`,
  ].join('')
}

// ----------------------------------------------------------------- tělo ---

function paneTelo(openGroup: string | null): string {
  const date = viewDate()
  const row = journalFor(date)
  const chosen = new Set(row?.symptoms ?? [])
  const warnings = warningsFor([...chosen])

  const groups = SYMPTOM_GROUPS.map((g) => {
    const picked = g.items.filter((s) => chosen.has(s.id)).length
    const body = `<div class="symgrid">
      ${g.items
        .map(
          (s) =>
            `<button type="button" class="${s.warn ? 'flag' : ''}" data-act="symptom" data-arg="${esc(s.id)}"
                     aria-pressed="${chosen.has(s.id)}">${esc(s.label)}</button>`,
        )
        .join('')}
    </div>`
    return accordion(g.id, `${g.name}${picked ? ` · ${picked}` : ''}`, g.hint, openGroup === g.id, body)
  }).join('')

  return [
    `<section class="surface pad rise">
      <p class="eyebrow">Jak se ozývá tělo</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">
        Rozdělené podle toho, odkud potíž jde. „Bolest v místě vpichu“ a „píchání ve vaječnících“
        nejsou totéž — a když se to zapíše zvlášť, dá se s tím pak něco dělat.
      </p>
      ${
        chosen.size
          ? `<p class="faint" style="margin-top:.7rem;font-size:.8125rem">Dnes zaškrtnuto: ${[...chosen]
              .map((id) => esc(SYMPTOM_BY_ID[id]?.label ?? id))
              .join(', ')}</p>`
          : ''
      }
    </section>`,

    warnings.length
      ? warnings
          .map(
            (w) => `<div class="symwarn rise"><strong style="color:var(--fg)">Kdy zavolat na kliniku:</strong> ${esc(w)}</div>`,
          )
          .join('')
      : '',

    `<div class="rise">${groups}</div>`,

    `<p class="note">Aplikace příznaky nehodnotí ani z nich nic neusuzuje. Zapisují se proto,
    abyste je viděla v čase a měla co ukázat lékaři.</p>`,
  ].join('')
}

// ---------------------------------------------------------------- vpich ---

function paneVpich(): string {
  const date = viewDate()
  const state = journey()
  const shots = shotsOn(date)
  const picked = shots.length ? shots[0].zone : null

  const used: Record<string, number | null> = {}
  for (const z of SHOT_ZONES) used[z.key] = zoneLastUsed(z.key, date)

  if (!injectingPhase(state.group) && S.d.meds.length === 0 && shots.length === 0) {
    return `<section class="surface pad rise">
      <p class="eyebrow">Zatím není co píchat</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        Mapa vpichů se hodí ve stimulaci a při podpoře luteální fáze. Až budete mít
        léky, objeví se tady sama — nebo si je můžete přidat rovnou.
      </p>
      <button class="btn" data-go="leky/protokol" style="margin-top:1.1rem">Přidat léky</button>
    </section>`
  }

  return [
    `<section class="surface pad rise">
      <p class="eyebrow">Kam jste si dnes píchla</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.3rem">
        Klepněte do místa. Čísla ukazují, před kolika dny jste tam byla naposledy —
        deset dní do stejného místa bolí a dělá boule.
      </p>
      ${bellyMap(used, picked)}
      ${
        shots.length
          ? `<ul class="linelist" style="margin-top:1rem">
              ${shots
                .map(
                  (s) =>
                    `<li><span class="when">${esc(SHOT_ZONES.find((z) => z.key === s.zone)?.name ?? s.zone)}</span>
                     <span>${esc(s.med)}</span>
                     <button class="btn btn-ghost btn-sm" data-act="shot-del" data-arg="${esc(s.id)}" style="margin-left:auto">×</button></li>`,
                )
                .join('')}
            </ul>`
          : ''
      }
    </section>`,

    S.d.shots.length > 1
      ? `<section class="surface pad rise">
          <p class="eyebrow">Zapsaných vpichů celkem</p>
          <p class="display num" style="font-size:2rem;margin-top:.3rem">${S.d.shots.length}</p>
          <p class="faint" style="font-size:.8125rem;margin-top:.3rem">Střídání míst hlídá aplikace za vás.</p>
        </section>`
      : '',
  ].join('')
}

// --------------------------------------------------------------- skládá ---

export function screenZapis(section: ZapisSection, openGroup: string | null): string {
  const date = viewDate()
  const state = journey()

  const header = `<header class="head rise">
    <p class="eyebrow">${esc(formatCzechDate(date, { weekday: true }))} · ${esc(state.dayLabel.replace(/^Dnes (je|jste) /, ''))}</p>
    <h1 class="display">Zápis</h1>
    ${segmented(ZAPIS_SECTIONS, section, 'zapis-sec')}
  </header>`

  const pane =
    section === 'telo' ? paneTelo(openGroup) : section === 'vpich' ? paneVpich() : paneNalada()

  return header + pane
}

