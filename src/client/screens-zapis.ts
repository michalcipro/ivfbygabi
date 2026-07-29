import { formatCzechDate } from '../lib/domain/dates'
import { promptFor } from '../lib/domain/journal-prompts'
import { dayReading, journalFor, journey, S, shotsOn, viewDate, zoneLastUsed } from './store'
import { esc } from './ui'
import { bellyMap, dial, SHOT_ZONES } from './viz'

/**
 * Zápis.
 *
 * Celý den na jedné obrazovce. Papírové diáře umírají na to, že do nich píšete
 * a nic se nestane — tady každý zápis okamžitě pohne vnitřním prstencem a změní,
 * co aplikace nabídne zítra.
 *
 * Psaní je dobrovolné. Kdo chce psát, píše; kdo nechce, jen klepe — a stejně
 * z toho má graf.
 */

/** Štítky na tělo. Vstupují do rezervy i do přehledu v čase. */
export const SYMPTOMS = [
  'nafouklé břicho',
  'únava',
  'bolest hlavy',
  'citlivá prsa',
  'nespavost',
  'nevolnost',
  'křeče',
  'návaly',
  'špinění',
]

/**
 * Ve kterých fázích se běžně píchá.
 *
 * Stimulace a odběr kvůli gonadotropinům, čekání kvůli podpoře luteální
 * fáze — progesteron se často aplikuje taky injekčně.
 */
function injectingPhase(group: string): boolean {
  return group === 'treatment' || group === 'waiting'
}

export function screenZapis(): string {
  const date = viewDate()
  const state = journey()
  const row = journalFor(date)
  const r = dayReading(date)
  const prompt = promptFor(state.phase.id, state.dayInPhase, date)
  const shots = shotsOn(date)
  const picked = shots.length ? shots[0].zone : null

  const used: Record<string, number | null> = {}
  for (const z of SHOT_ZONES) used[z.key] = zoneLastUsed(z.key, date)

  const chosen = new Set(row?.symptoms ?? [])

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(formatCzechDate(date, { weekday: true }))} · ${esc(state.dayLabel.replace(/^Dnes (je|jste) /, ''))}</p>
      <h1 class="display">Dnešní stránka</h1>
      <p class="lede">Jedna obrazovka. Nikam se neprokliká.</p>
    </header>`,

    // --- čtyři osy rezervy ---------------------------------------------
    `<section class="surface pad rise">
      <p class="eyebrow">Jak vám dnes je</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.3rem">Z těchhle čtyř se skládá vnitřní prstenec.</p>

      <div style="margin-top:1.1rem"><p class="label">Nálada</p>
        ${dial('mood', row?.mood ?? 3, 'cool', 'na dně', 'dobrá')}</div>
      <div style="margin-top:1.3rem"><p class="label">Úzkost</p>
        ${dial('anxiety', row?.anxiety ?? 3, 'warm', 'klid', 'hodně')}</div>
      <div style="margin-top:1.3rem"><p class="label">Naděje</p>
        ${dial('hope', row?.hope ?? 3, 'plum', 'nemám', 'velká')}</div>
      <div style="margin-top:1.3rem"><p class="label">Energie</p>
        ${dial('energy', row?.energy ?? 3, 'gold', 'nic', 'plno')}</div>

      ${
        r.reserve !== null
          ? `<p class="faint" style="margin-top:1.2rem;font-size:.8125rem">
              Z toho vychází rezerva <b style="color:var(--s2)">${r.reserve} z 10</b>${
                r.gap !== null ? ` · dnešek žádá ${r.demand}` : ''
              }.
            </p>`
          : ''
      }
    </section>`,

    // --- mapa vpichů ----------------------------------------------------
    // Ve fázích léčby a čekání se píchá denně, i když si uživatelka léky
    // do aplikace ještě nezadala. Mapa tam proto musí být od prvního dne.
    injectingPhase(state.group) || S.d.meds.length > 0 || shots.length > 0
      ? `<section class="surface pad rise" id="vpich">
          <p class="eyebrow">Kam jste si dnes píchla</p>
          <p class="faint" style="font-size:.8125rem;margin-top:.3rem">
            Klepněte do místa. Aplikace hlídá střídání — čísla ukazují, před kolika dny
            jste tam byla naposledy.
          </p>
          ${bellyMap(used, picked)}
          ${
            shots.length
              ? `<ul class="linelist" style="margin-top:.9rem">
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
        </section>`
      : '',

    // --- tělo -----------------------------------------------------------
    `<section class="surface pad rise" id="telo">
      <p class="eyebrow">Jak se ozývá tělo</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.3rem">Klepněte na to, co dnes cítíte. Nic není povinné.</p>
      <div class="symptoms">
        ${SYMPTOMS.map(
          (s) =>
            `<button type="button" data-act="symptom" data-arg="${esc(s)}" aria-pressed="${chosen.has(s)}">${esc(s)}</button>`,
        ).join('')}
      </div>
    </section>`,

    // --- otázka dne -----------------------------------------------------
    `<section class="surface pad rise">
      <p class="eyebrow">Otázka na dnešek</p>
      <h2 class="display" style="font-size:1.25rem;margin-top:.4rem;line-height:1.3">${esc(prompt.text)}</h2>
      <p class="faint" style="margin-top:.5rem;font-size:.8125rem;line-height:1.55">${esc(prompt.why)}</p>
      <textarea class="field" id="z-prompt" rows="4" placeholder="Tři věty stačí." style="margin-top:.9rem">${esc(row?.promptAnswer ?? '')}</textarea>
    </section>`,

    // --- povedlo se + poznámka -----------------------------------------
    `<section class="surface pad rise">
      <p class="eyebrow">Co se dnes povedlo</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.3rem">
        Hlava si pamatuje hlavně selhání. Tohle je záměrné vyvážení — a v neděli se
        z toho stane věta týdne.
      </p>
      <input class="field" id="z-win" placeholder="Třeba: píchla jsem si sama." value="${esc(row?.win ?? '')}" style="margin-top:.7rem">

      <p class="eyebrow" style="margin-top:1.3rem">Cokoli dalšího</p>
      <textarea class="field" id="z-note" rows="3" placeholder="Volné místo. Nikdo jiný to neuvidí." style="margin-top:.5rem">${esc(row?.note ?? '')}</textarea>

      <button class="btn btn-primary" data-act="zapis-save" style="margin-top:1.25rem">
        ${row ? 'Uložit změny' : 'Uložit dnešek'}
      </button>
      ${row ? '<p class="faint" style="margin-top:.7rem;font-size:.8125rem">Dnešek už zapsaný. Číselníky se ukládají hned, texty tímhle tlačítkem.</p>' : ''}
    </section>`,
  ].join('')
}
