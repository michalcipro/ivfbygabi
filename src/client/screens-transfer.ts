import { czDays, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import {
  HCG_KIND_LABEL,
  HCG_LOOK_LABEL,
  TRANSFER_KIND_LABEL,
  TRANSFER_STAGE_LABEL,
  stageForDay,
  type CycleTransfer,
  type HcgTest,
} from '../lib/domain/cycle'
import { PGT_LABEL, PGT_RESULT_LABEL, embryoTitle, type Embryo } from '../lib/domain/embryo'
import {
  EMBRYO_DEVELOPMENT,
  GRADING_NOTE,
  journeyLength,
  transferDay,
  type TransferDay,
} from '../lib/domain/transfer-journey'
import { SYMPTOM_BY_ID } from '../lib/domain/symptoms'
import { photoStrip } from './photo-ui'
import { context, journalFor, S, symptomLogsOn, viewDate } from './store'
import { empty, esc, head, md, note, plural } from './ui'
import { accordion, actionCard, sectionHead, segmented, statTrio } from './viz'

/**
 * Moje cesta po transferu.
 *
 * Nejdelší dva týdny léčby dostaly vlastní obrazovku. Ne seznam článků,
 * ale jeden den = jedna stránka: co se může dít s embryem, co v těle, co
 * můžete cítit, co dnes nemusíte řešit, kolik zbývá do hCG a co bude
 * zítra. Obsah se skládá v `domain/transfer-journey.ts` a mění se sám
 * s tím, jak plyne čas.
 *
 * ------------------------------------------------------------- ODKUD DATA ---
 * Ze `context()`. Aktuální transfer je ten poslední proběhlý v aktuálním
 * cyklu, embryo to, které se jím přeneslo. Nikdy první zapsané.
 *
 * ---------------------------------------------------------------- AKCE ------
 * `tr-den`      arg = číslo dne         . Otevřít konkrétní den z osy
 * `tr-setup`    bez argumentu           . Doplnit údaje o transferu
 * `sym-log`     arg = id příznaku       . Zaškrtnout příznak (sdílené se Zápisem)
 * `mood`        arg = 1 až 5            . Nálada (sdílené s Deníkem)
 * `cyc-hcg-add` arg = „cyklus|druh“     . Přidat test
 */

export const TRANSFER_SECTIONS = [
  { id: 'dnes', label: 'Dnes' },
  { id: 'osa', label: 'Osa' },
  { id: 'embryo', label: 'Embryo' },
  { id: 'test', label: 'Můj test' },
]

export type TransferSection = 'dnes' | 'osa' | 'embryo' | 'test'

export function isTransferSection(s: string): s is TransferSection {
  return s === 'dnes' || s === 'osa' || s === 'embryo' || s === 'test'
}

/** Příznaky, které se po transferu hlásí nejčastěji. Rychlé odškrtnutí. */
const RYCHLE_PRIZNAKY = [
  'tlak',
  'krece',
  'spineni',
  'prsa',
  'unava',
  'nadymani',
  'bolest-hlavy',
  'nevolnost',
]

/** Stejná stupnice jako v Deníku. Dvě různé škály by nešly porovnat. */
const MOOD_FACES = ['😞', '😔', '😐', '🙂', '😊']

// ------------------------------------------------------------- pomocníci ---

function symLabel(id: string): string {
  return SYMPTOM_BY_ID[id]?.label ?? id
}

/** Blok s nadpisem a odstavci. Základní stavební kámen celé obrazovky. */
function blok(eyebrow: string, title: string, body: string): string {
  return `<section class="surface pad rise">
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h3 class="display" style="font-size:1.15rem;margin-top:.45rem;line-height:1.35">${esc(title)}</h3>
    <div class="prose" style="margin-top:.8rem">${md(body)}</div>
  </section>`
}

// ------------------------------------------------------------- aktivace ---

/**
 * Když aktuální transfer nemá vyplněné, co je pro denní obsah potřeba.
 *
 * Bez data se nedá počítat den, bez dne kultivace se nedá říct, co se
 * s embryem může dít. Zbytek je dobrovolný.
 */
function aktivace(t: CycleTransfer | null, cycleId: string | null): string {
  if (!t || !cycleId) {
    return [
      head('Po transferu', 'Moje cesta po transferu', 'Den po dni od transferu až k odběru hCG.'),
      empty(
        'Zatím tu žádný transfer není',
        'Až budete mít transfer za sebou, zapište si ho do cyklu. Aplikace pak sama spočítá, kolikátý je den, co se v téhle fázi může dít a kolik zbývá do odběru hCG.',
        cycleId
          ? `<button class="btn btn-primary" data-go="cyklus/${esc(cycleId)}">Otevřít cyklus</button>`
          : '<button class="btn btn-primary" data-act="cycle-new">Založit cyklus</button>',
        '♡',
      ),
    ].join('')
  }

  const chybi: string[] = []
  if (!t.date) chybi.push('datum transferu')
  if (t.embryoDay === null) chybi.push('den embrya (D3 až D6)')

  return [
    head('Po transferu', 'Aktivujte svoji cestu', 'Den po dni od transferu až k odběru hCG.'),
    `<section class="surface pad rise">
      <p class="eyebrow">Ještě chybí</p>
      <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
        Aby vám aplikace mohla každý den ukázat, co se může dít, potřebuje
        ${esc(chybi.join(' a '))}. Zbytek je dobrovolný a dá se doplnit kdykoli.
      </p>
      <button class="btn btn-primary" data-go="cyklus/${esc(cycleId)}" style="margin-top:1.2rem">Doplnit údaje o transferu</button>
    </section>`,
    `<section class="surface pad rise">
      <p class="eyebrow">Co pak uvidíte</p>
      <ul class="bullets" style="margin-top:.8rem">
        <li>Kolikátý je dnes den po transferu</li>
        <li>Co se v téhle fázi může dít s embryem, podle jeho dne kultivace</li>
        <li>Co se může dít v těle</li>
        <li>Co můžete cítit a co to neznamená</li>
        <li>Kolik dní zbývá do odběru hCG</li>
        <li>Co dnes nemusíte řešit</li>
      </ul>
    </section>`,
  ].join('')
}

// ------------------------------------------------------------ hlavička ---

function hlavicka(den: TransferDay, t: CycleTransfer, cyklus: string): string {
  const druh = t.kind === 'kryo' ? 'KET' : 'ET'
  const radek = [
    cyklus,
    druh,
    t.embryoDay !== null ? `D${t.embryoDay} embryo` : '',
    t.stage ? TRANSFER_STAGE_LABEL[t.stage].toLowerCase() : '',
  ]
    .filter(Boolean)
    .join(' · ')

  return `<header class="head rise">
    <p class="eyebrow">${esc(radek)}</p>
    <h1 class="display">${esc(den.title)}</h1>
    <p class="lede">${esc(den.hcg)}</p>
  </header>`
}

// ---------------------------------------------------------------- Dnes ---

function trackerNalada(): string {
  const row = journalFor(viewDate())
  return `<section class="surface pad rise">
    <div class="row wrap" style="justify-content:space-between;gap:.75rem">
      <p class="eyebrow">Jak se dnes máte</p>
      ${row ? '<span class="badge badge-soft">uloženo</span>' : ''}
    </div>
    <div class="mood" style="margin-top:.9rem">
      ${MOOD_FACES.map(
        (f, i) =>
          `<button data-act="mood" data-arg="${i + 1}" aria-pressed="${row?.mood === i + 1}" aria-label="Nálada ${i + 1} z 5">${f}</button>`,
      ).join('')}
    </div>
    <button class="btn btn-sm btn-ghost" data-go="denik" style="margin-top:1.1rem">Chcete si něco zapsat?</button>
  </section>`
}

function trackerPriznaky(): string {
  const date = viewDate()
  const dnes = new Set(symptomLogsOn(date).map((l) => l.symptomId))

  return `<section class="surface pad rise">
    <p class="eyebrow">Jak se dnes cítíte</p>
    <p class="faint" style="margin-top:.5rem;font-size:.8125rem;line-height:1.55">
      Můžete vybrat víc věcí. Aplikace z toho nic neusuzuje, jen si to pamatuje.
    </p>
    <div class="chips" style="margin-top:.9rem">
      ${RYCHLE_PRIZNAKY.map(
        (id) =>
          `<button data-act="sym-log" data-arg="${esc(id)}" aria-pressed="${dnes.has(id)}">${esc(symLabel(id))}</button>`,
      ).join('')}
    </div>
    <button class="btn btn-sm btn-ghost" data-go="zapis/telo" style="margin-top:1.1rem">Celý seznam příznaků</button>
  </section>`
}

function kartaLecba(): string {
  const date = viewDate()
  const bezi = S.d.meds.filter((m) => (!m.startOn || m.startOn <= date) && (!m.endOn || m.endOn >= date))

  return `<section class="surface pad rise">
    <p class="eyebrow">Moje léčba</p>
    ${
      bezi.length
        ? `<ul class="linelist" style="margin-top:.7rem">
            ${bezi
              .map(
                (m) => `<li>
                  <span style="flex:1;min-width:0"><b style="font-weight:500">${esc(m.name)}</b>
                  <span class="faint">${esc(m.dose)}${m.times?.length ? ` · ${esc(m.times.join(', '))}` : ''}</span></span>
                </li>`,
              )
              .join('')}
          </ul>`
        : `<p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
            Zatím tu žádnou podporu zapsanou nemáte. Až si ji přidáte, bude tu i s časy.
          </p>`
    }
    <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.55">
      Léčbu užívejte podle pokynů své kliniky. O změně nebo vysazení se poraďte se svým lékařem.
      Aplikace vám nikdy nedoporučí lék vysadit ani změnit dávku.
    </p>
    <button class="btn btn-sm" data-go="leky/protokol" style="margin-top:1rem">Upravit protokol</button>
  </section>`
}

function kartaNemusis(den: TransferDay): string {
  return `<section class="surface pad rise">
    <p class="eyebrow">Co dnes nemusíte řešit</p>
    <ul class="bullets" style="margin-top:.8rem">
      ${den.nemusis.map((x) => `<li>${esc(x)}</li>`).join('')}
    </ul>
    <p class="label" style="margin-top:1.4rem">Dnes můžete</p>
    <ul class="bullets" style="margin-top:.6rem">
      ${den.muzes.map((x) => `<li>${esc(x)}</li>`).join('')}
    </ul>
  </section>`
}

function kartaBezpecnost(): string {
  return `<section class="surface pad rise" style="border-color:var(--blush)">
    <p class="eyebrow">Kdy volat na kliniku</p>
    <ul class="bullets" style="margin-top:.8rem">
      <li>silné krvácení</li>
      <li>silná nebo zhoršující se bolest</li>
      <li>výrazná jednostranná bolest</li>
      <li>mdloby nebo točení hlavy</li>
      <li>výrazná slabost</li>
      <li>dušnost</li>
      <li>horečka</li>
      <li>cokoli, co vás vyděsí</li>
    </ul>
    <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.55">
      Při akutním stavu vyhledejte akutní lékařskou pomoc, nečekejte na ordinační hodiny.
      Aplikace nic nediagnostikuje a nemůže posoudit, o co jde.
    </p>
    <button class="btn btn-sm" data-go="klinika" style="margin-top:1rem">Kontakty na kliniku</button>
  </section>`
}

function kartaZitra(den: TransferDay, posledni: boolean): string {
  if (posledni) return ''
  return `<section class="surface pad rise">
    <p class="eyebrow">Zítra</p>
    <h3 class="display" style="font-size:1.05rem;margin-top:.45rem;line-height:1.4">${esc(den.zitra)}</h3>
    <ul class="bullets" style="margin-top:.8rem">
      <li>co se může dít s embryem</li>
      <li>co se může dít v těle</li>
      <li>co můžete cítit</li>
      <li>kolik dní zbývá do hCG</li>
    </ul>
  </section>`
}

function paneDnes(den: TransferDay, t: CycleTransfer, delka: number, dnesniDen: number): string {
  return [
    `<section class="surface pad rise">
      <p class="eyebrow">Dnešní podpora</p>
      <p class="display" style="font-size:1.2rem;margin-top:.6rem;line-height:1.5">${esc(den.podpora)}</p>
    </section>`,

    blok('Co se může dít s embryem', den.embryo.title, den.embryo.body),
    blok('Co se může dít v těle', den.telo.title, den.telo.body),

    `<section class="surface pad rise">
      <p class="eyebrow">Co můžete cítit</p>
      <p class="soft" style="margin-top:.6rem;font-size:.9375rem">${esc(den.pocity.intro)}</p>
      <ul class="bullets" style="margin-top:.7rem">
        ${den.pocity.list.map((x) => `<li>${esc(x)}</li>`).join('')}
      </ul>
      <p class="faint" style="margin-top:1rem;font-size:.8125rem;line-height:1.6">${esc(den.pocity.note)}</p>
    </section>`,

    trackerPriznaky(),
    trackerNalada(),
    kartaLecba(),
    kartaNemusis(den),

    `<section class="surface pad rise">
      <p class="eyebrow">Čekání na hCG</p>
      <p class="display" style="font-size:1.15rem;margin-top:.5rem;line-height:1.45">${esc(den.hcg)}</p>
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.6">
        Termín testování se může lišit podle kliniky. Řiďte se především doporučením svého lékaře.
      </p>
      ${
        t.hcgPlannedOn
          ? `<p class="soft" style="margin-top:.7rem;font-size:.9375rem">Zapsaný termín: ${esc(formatCzechDate(t.hcgPlannedOn))}</p>`
          : ''
      }
    </section>`,

    kartaBezpecnost(),
    kartaZitra(den, den.dpt >= delka),

    dnesniDen !== den.dpt
      ? `<button class="btn btn-block" data-act="tr-den" data-arg="dnes" style="margin-top:1.2rem">Zpět na dnešek</button>`
      : '',
  ].join('')
}

// ----------------------------------------------------------------- osa ---

function paneOsa(delka: number, dnesniDen: number, otevreny: number): string {
  const dny: number[] = []
  for (let i = 0; i <= delka; i++) dny.push(i)

  return [
    `<div class="rise">
      ${sectionHead(`Celá cesta · ${plural(delka + 1, 'den', 'dny', 'dní')}`)}
      <div class="stack" style="gap:.2rem">
        ${dny
          .map((d) => {
            const stav = d < dnesniDen ? 'hotovo' : d === dnesniDen ? 'dnes' : 'ceka'
            const znak = stav === 'hotovo' ? '✓' : stav === 'dnes' ? '◔' : '·'
            const popis = d === 0 ? 'Den transferu' : `${d}. den po transferu`
            return `<button class="tlitem${d === dnesniDen ? ' major' : ''}" data-act="tr-den" data-arg="${d}"
                      style="width:100%;text-align:left${d === otevreny ? ';border-color:var(--taupe)' : ''}">
              <span class="when">${znak}${d === dnesniDen ? ' · dnes' : ''}</span>
              <b>${esc(popis)}</b>
            </button>`
          })
          .join('')}
        <div class="tlitem">
          <span class="when">✶</span>
          <b>Odběr hCG</b>
        </div>
      </div>
    </div>`,
    note(
      'Dny, které máte za sebou, zůstávají dostupné. Můžete se do kteréhokoli vrátit a přečíst si, co se v něm mohlo dít.',
    ),
  ].join('')
}

// -------------------------------------------------------------- embryo ---

function paneEmbryo(t: CycleTransfer, embrya: Embryo[]): string {
  const pocet = t.embryos ?? (embrya.length || null)
  const stadium = t.stage || stageForDay(t.embryoDay)

  return [
    `<section class="surface pad rise">
      <p class="eyebrow">Moje embryo</p>
      <h3 class="display" style="font-size:1.25rem;margin-top:.45rem">
        ${esc(t.embryoDay !== null ? `D${t.embryoDay}` : 'Den nezapsaný')}${stadium ? ` · ${esc(TRANSFER_STAGE_LABEL[stadium].toLowerCase())}` : ''}
      </h3>
      <ul class="linelist" style="margin-top:.9rem">
        <li><span class="when">Typ</span><span style="flex:1">${esc(TRANSFER_KIND_LABEL[t.kind])}</span></li>
        <li><span class="when">Transfer</span><span style="flex:1">${esc(t.date ? formatCzechDate(t.date) : 'nezapsáno')}</span></li>
        ${pocet !== null ? `<li><span class="when">Počet</span><span style="flex:1">${esc(plural(pocet, 'embryo', 'embrya', 'embryí'))}</span></li>` : ''}
        ${t.grade.trim() ? `<li><span class="when">Hodnocení</span><span style="flex:1">${esc(t.grade)}</span></li>` : ''}
        <li><span class="when">Genetika</span><span style="flex:1">${esc(PGT_LABEL[t.pgt])}${t.pgtResult ? ` · ${esc(PGT_RESULT_LABEL[t.pgtResult])}` : ''}</span></li>
      </ul>
      ${photoStrip(`transfer:${t.id}`, t.photos, 'Fotka embrya z embryologie')}
    </section>`,

    embrya.length
      ? `<div class="rise">
          ${sectionHead(plural(embrya.length, 'Přenesené embryo', 'Přenesená embrya', 'Přenesených embryí'))}
          ${embrya
            .map(
              (e) => `${actionCard({
                icon: '❖',
                title: embryoTitle(e),
                body: 'Celá karta embrya: vývoj po dnech, genetika, kam šlo',
                go: 'embrya',
              })}`,
            )
            .join('')}
        </div>`
      : '',

    `<div class="rise">
      ${sectionHead('Vývoj embrya po dnech')}
      ${EMBRYO_DEVELOPMENT.map((s) =>
        accordion(
          `dev-${s.day}`,
          `${s.label} · ${s.stage}`,
          t.embryoDay === s.day ? 'vaše embryo' : '',
          false,
          `<p class="soft" style="line-height:1.7;font-size:.9375rem">${esc(s.body)}</p>`,
        ),
      ).join('')}
    </div>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Co znamená hodnocení</p>
      <div class="prose" style="margin-top:.7rem">${md(GRADING_NOTE)}</div>
    </section>`,

    t.pgt
      ? `<section class="surface pad rise">
          <p class="eyebrow">Genetické testování</p>
          <div class="prose" style="margin-top:.7rem">${md(PGT_VYSVETLENI[t.pgt] ?? '')}</div>
          <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.6">
            Výsledek genetického testování nepředpovídá, jestli těhotenství nastane.
            Zmenšuje jednu z možných příčin neúspěchu, ne všechny.
          </p>
        </section>`
      : '',

    note(
      'Aplikace embryo nehodnotí a nic z jeho popisu nevyvozuje. Co znamená pro vás, řekne jedině embryolog nebo váš lékař.',
    ),
  ].join('')
}

const PGT_VYSVETLENI: Record<string, string> = {
  pgta: `**PGT-A** je vyšetření počtu chromozomů v embryu. Hledá, jestli jich embryo má obvyklý počet.

Provádí se, aby se z přenosu vyřadila embrya s odchylkou počtu chromozomů, která by se nejčastěji neuhnízdila nebo skončila ztrátou.

Euploidní výsledek **neznamená**, že těhotenství nastane. Znamená jen, že v testovaném vzorku vyšel obvyklý počet chromozomů.`,
  pgtm: `**PGT-M** hledá konkrétní dědičnou chorobu, o které se v rodině ví. Testuje se cíleně na ni, ne na cokoli jiného.

Dělá se u párů, kteří jsou nositeli konkrétní mutace.

Výsledek se týká jen té jedné vyšetřované choroby.`,
  pgtsr: `**PGT-SR** se dělá u párů, kde je známá strukturální přestavba chromozomů, například translokace.

Hledá embrya, která z přestavby nezdědila nevyváženou kombinaci.

I tady platí, že výsledek nepředpovídá, jestli těhotenství nastane.`,
  jine: `Jiné genetické testování. Co přesně se testovalo a co výsledek znamená, vysvětlí pracoviště, které vyšetření provedlo.`,
}

// ---------------------------------------------------------- můj test ---

function paneTest(testy: HcgTest[], cycleId: string): string {
  const rows = [...testy].filter((t) => t.date).sort((a, b) => (a.date as string).localeCompare(b.date as string))

  return [
    `<section class="surface pad rise">
      <p class="eyebrow">Můj test</p>
      <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
        Zapište si každý test, který uděláte. Datum, výsledek a poznámku.
        Když se pak ptáte, jestli je proužek silnější než včera, máte se čeho chytit.
      </p>
      <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.6">
        Aplikace fotku testu nevyhodnocuje a nikdy z ní neudělá závěr. Vidí ji jenom vy.
      </p>
      <div class="row wrap" style="gap:.6rem;margin-top:1.2rem">
        <button class="btn btn-sm" data-act="cyc-hcg-add" data-arg="${esc(cycleId)}|domaci">Přidat domácí test</button>
        <button class="btn btn-sm" data-act="cyc-hcg-add" data-arg="${esc(cycleId)}|krev">Přidat odběr krve</button>
      </div>
    </section>`,

    rows.length
      ? `<div class="rise">
          ${sectionHead(plural(rows.length, 'zapsaný test', 'zapsané testy', 'zapsaných testů'))}
          <ul class="linelist">
            ${rows
              .map((t) => {
                const co =
                  t.value !== null
                    ? `${t.value} IU/l`
                    : t.look
                      ? HCG_LOOK_LABEL[t.look]
                      : HCG_KIND_LABEL[t.kind]
                return `<li>
                  <span class="when">${esc(formatCzechDateShort(t.date as string))}</span>
                  <span style="flex:1;min-width:0">${esc(co)}${t.note.trim() ? `<br><span class="faint" style="font-size:.75rem">${esc(t.note)}</span>` : ''}</span>
                </li>`
              })
              .join('')}
          </ul>
          <button class="btn btn-sm btn-ghost btn-block" data-go="cyklus/${esc(cycleId)}" style="margin-top:1rem">Upravit testy v cyklu</button>
        </div>`
      : '',

    `<section class="surface pad rise">
      <p class="eyebrow">Než uděláte domácí test</p>
      <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
        Domácí test dělaný brzy se plete v obou směrech. Může být negativní u těhotenství,
        které pokračuje, a může ukázat slabou čárku z jiného důvodu. U čerstvého transferu
        navíc může zachytit zbytek hCG z injekce, kterou jste dostala před odběrem.
      </p>
      <p class="soft" style="margin-top:.7rem;line-height:1.7;font-size:.9375rem">
        Spolehlivou odpověď dá odběr krve v termínu, který určí vaše klinika.
      </p>
    </section>`,

    note('Výsledek testu je informace pro vás a pro vašeho lékaře. Aplikace ho nevykládá.'),
  ].join('')
}

// ======================================================== blok na Dnes ===

/**
 * Cesta po transferu na obrazovce Dnes.
 *
 * Prázdné, dokud transfer neproběhl. Když proběhl, je tohle první věc,
 * kterou žena po otevření aplikace uvidí: kolikátý je den, co se může dít
 * s embryem, co v těle, kolik zbývá do hCG a jedna věta pro ni.
 *
 * Záměrně krátké. Celý den je o klepnutí dál, ale kdo otevře aplikaci jen
 * na deset vteřin, dostane to podstatné hned.
 */
export function transferToday(): string {
  const ctx = context()
  const t = ctx.transfer
  if (!t || !t.date || t.cancelled || t.outcome !== 'ceka') return ''
  if ((ctx.daysPastTransfer ?? -1) < 0) return ''

  const den = transferDay({
    transferOn: t.date,
    embryoDay: t.embryoDay,
    kind: t.kind,
    stage: t.stage,
    count: t.embryos,
    hcgOn: t.hcgPlannedOn ?? ctx.hcgOn,
    today: viewDate(),
  })

  const druh = t.kind === 'kryo' ? 'KET' : 'transferu'

  return `<section class="surface pad rise">
    <div class="row wrap" style="justify-content:space-between;gap:.6rem;align-items:baseline">
      <p class="eyebrow">Moje cesta po transferu</p>
      ${
        t.embryoDay !== null
          ? `<span class="badge badge-soft">D${t.embryoDay} embryo</span>`
          : ''
      }
    </div>
    <h3 class="display" style="font-size:1.3rem;margin-top:.5rem;line-height:1.35">
      Dnes je ${esc(String(den.dpt))}. den po ${esc(druh)}
    </h3>

    <div class="stack" style="gap:1.1rem;margin-top:1.2rem">
      <div class="reading cool">
        <p class="label">Co se může dít s embryem</p>
        <p class="soft" style="margin-top:.35rem;line-height:1.65;font-size:.9375rem">
          <strong style="color:var(--fg);font-weight:500">${esc(den.embryo.title)}.</strong>
          ${esc(prvniVeta(den.embryo.body))}
        </p>
      </div>
      <div class="reading cool">
        <p class="label">Co se může dít v těle</p>
        <p class="soft" style="margin-top:.35rem;line-height:1.65;font-size:.9375rem">
          <strong style="color:var(--fg);font-weight:500">${esc(den.telo.title)}.</strong>
          ${esc(prvniVeta(den.telo.body))}
        </p>
      </div>
      <div class="reading">
        <p class="label">Čekání na hCG</p>
        <p class="soft" style="margin-top:.35rem;line-height:1.65;font-size:.9375rem">${esc(den.hcg)}</p>
      </div>
    </div>

    <p class="note" style="margin-top:1.2rem">${esc(den.podpora)}</p>

    <button class="btn btn-primary btn-block" data-go="po-transferu/dnes" style="margin-top:1.2rem">
      Celý dnešní den
    </button>
  </section>`
}

/** První věta odstavce. Do přehledu se víc nevejde. */
function prvniVeta(body: string): string {
  const prvni = body.split('\n')[0] ?? ''
  const konec = prvni.indexOf('. ')
  const veta = konec > 0 ? prvni.slice(0, konec + 1) : prvni
  return veta.replace(/\*\*/g, '')
}

// =============================================================== hlavní ===

export function screenPoTransferu(section: TransferSection, den?: string | null): string {
  const ctx = context()
  const t = ctx.transfer
  const cycleId = ctx.cycle?.id ?? null

  if (!t || !t.date || t.embryoDay === null) return aktivace(t, cycleId)

  const today = viewDate()
  const delka = journeyLength({
    transferOn: t.date,
    embryoDay: t.embryoDay,
    hcgOn: t.hcgPlannedOn ?? ctx.hcgOn,
    today,
  })
  const dnesniDen = Math.max(0, ctx.daysPastTransfer ?? 0)

  const chtenyDen = den !== null && den !== undefined && den !== 'dnes' ? Number(den) : dnesniDen
  const dpt = Number.isFinite(chtenyDen) ? Math.min(Math.max(0, chtenyDen), delka) : dnesniDen

  const denData = transferDay({
    transferOn: t.date,
    embryoDay: t.embryoDay,
    kind: t.kind,
    stage: t.stage,
    count: t.embryos,
    hcgOn: t.hcgPlannedOn ?? ctx.hcgOn,
    today,
    dpt,
  })

  const testy = ctx.cycle?.hcgTests ?? []

  return [
    hlavicka(denData, t, ctx.cycleLabel),

    statTrio([
      { icon: '❋', value: dnesniDen, label: dnesniDen === 1 ? 'den po transferu' : 'dní po transferu' },
      { icon: '❖', value: t.embryoDay !== null ? `D${t.embryoDay}` : '–', label: 'den embrya' },
      {
        icon: '✶',
        value: denData.dpt === dpt && ctx.daysToHcg !== null ? ctx.daysToHcg : '–',
        label: 'dní do hCG',
      },
    ]),

    `<div style="margin-top:1.3rem">${segmented(TRANSFER_SECTIONS, section, 'tr-sec')}</div>`,

    section === 'osa'
      ? paneOsa(delka, dnesniDen, dpt)
      : section === 'embryo'
        ? paneEmbryo(t, ctx.embryos)
        : section === 'test'
          ? paneTest(testy, cycleId ?? '')
          : paneDnes(denData, t, delka, dnesniDen),
  ].join('')
}
