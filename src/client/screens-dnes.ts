import { czDays, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import type { DayTask, TodayBalance } from '../lib/domain/today-tasks'
import { guideFor } from '../lib/domain/guides'
import { CATALOG, DAILY_CARDS, contentById } from '../lib/content'
import { buildRails, pickDailyCard } from '../lib/content/recommend'
import {
  context,
  shownCycleId,
  affinity,
  journeyCard,
  openQuestions,
  dayReading,
  endurance,
  todayBalance,
  eventState,
  journalFor,
  journey,
  profile,
  readingSeries,
  reminders,
  shotsOn,
  viewDate,
} from './store'
import { ivfCard } from './screens-ivf'
import { transferToday } from './screens-transfer'
import { contentCard, esc, plural, sectionTitle } from './ui'
import { bloomEndurance, chart, partsList, scissorRing, seriesKey, trackStrip } from './viz'

/**
 * Dnes.
 *
 * Vstupní obrazovka celé aplikace. Nahoře jeden prstenec, pod ním jedna věta
 * proč, a pak jenom to, co se dnes doopravdy hodí. Nic k procházení.
 * Na procházení je Průvodce.
 */

/**
 * Otázky pro lékaře na dashboardu.
 *
 * Když je před dveřmi kontrola, je to nejdůležitější tlačítko dne. Když
 * není, stačí počet, ale i tak musí být na očích: sepsané otázky, na které
 * si člověk v ordinaci nevzpomene, jsou k ničemu.
 */
function questionsCard(): string {
  const open = openQuestions()
  const nejblizsi = reminders(viewDate()).find((e) => e.kind === 'kontrola' || e.kind === 'odber')

  return `<button class="surface pad rise" data-go="otazky"
    style="display:flex;gap:1rem;align-items:center;width:100%;text-align:left;cursor:pointer;border:1px solid var(--line)">
    <span style="font-size:1.35rem;color:var(--s1);flex:none">?</span>
    <span style="flex:1;min-width:0">
      <span class="display" style="display:block;font-size:1.05rem">Otázky na lékaře</span>
      <span class="soft" style="display:block;font-size:.875rem;line-height:1.5;margin-top:.2rem">${esc(
        open === 0
          ? 'Zatím žádná zapsaná. Sepište je doma. V ordinaci je přečtete z telefonu.'
          : nejblizsi
            ? `${plural(open, 'nevyřešená otázka', 'nevyřešené otázky', 'nevyřešených otázek')} · nezapomeňte se zeptat na kontrole`
            : plural(open, 'nevyřešená otázka', 'nevyřešené otázky', 'nevyřešených otázek'),
      )}</span>
    </span>
    <span class="go">›</span>
  </button>`
}

/**
 * Věta, která přijde dřív než plán.
 *
 * Po negativním výsledku, po ztrátě nebo po zrušeném transferu je první
 * obrazovka dne to jediné, co žena uvidí. A nesmí na ní stát „další krok“.
 * Nejdřív uznání, teprve pak nabídka. Kdo chce pokračovat hned, klikne;
 * kdo nechce, nemusí nic.
 *
 * Žádná motivace, žádné „příště to vyjde“. To by tady bylo přesně to,
 * co ženě říká celé okolí a co nikomu nepomáhá.
 */
function softLanding(): string {
  const phase = journey().phase.id
  const texty: Partial<Record<string, { title: string; body: string; go: string; label: string }>> = {
    waiting_next_attempt: {
      title: 'Mrzí mě, že to nevyšlo.',
      body: 'Nemusíte dnes řešit další krok. Až budete připravená, můžeme projít, co se z transferu dá vyčíst a co ne. A na co se zeptat na konzultaci.',
      go: 'faze',
      label: 'Až budu chtít, projdeme to',
    },
    loss_biochemical: {
      title: 'Pozitivní test byl skutečný. Vaše ztráta je skutečná.',
      body: 'Biochemické těhotenství okolí často zlehčuje. Vy jste ho zažila celé. Od dvou čárek po číslo, které kleslo.',
      go: 'faze',
      label: 'Co může následovat',
    },
    loss_ectopic: {
      title: 'Tohle bylo na tělo i na hlavu.',
      body: 'Mimoděložní těhotenství je zdravotně vážná věc a rekonvalescence trvá. Dnes nemusíte plánovat nic.',
      go: 'faze',
      label: 'Co teď sledovat',
    },
    loss_missed: {
      title: 'Nemusíte dnes řešit další krok.',
      body: 'Dejte si prostor. Až budete chtít, najdete tu, co se může dít fyzicky a na co se zeptat.',
      go: 'faze',
      label: 'Až budu chtít',
    },
    loss_miscarriage: {
      title: 'Nemusíte dnes řešit další krok.',
      body: 'Dejte si prostor. Až budete chtít, najdete tu, co se může dít fyzicky a na co se zeptat.',
      go: 'faze',
      label: 'Až budu chtít',
    },
    repeated_failure: {
      title: 'Tolikátý pokus už není o naději, ale o vytrvalosti.',
      body: 'Máte za sebou víc, než většina lidí kolem vás tuší. Před další konzultací se hodí přehled všech transferů. Máte ho v Moje cesta.',
      go: 'transfery',
      label: 'Otevřít přehled transferů',
    },
  }

  const t = texty[phase]
  if (!t) return ''

  return `<section class="surface pad rise">
    <p class="display" style="font-size:1.15rem;line-height:1.4">${esc(t.title)}</p>
    <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">${esc(t.body)}</p>
    <button class="btn btn-ghost btn-sm" data-go="${esc(t.go)}" style="margin-top:1rem">${esc(t.label)}</button>
  </section>`
}

/** Kolik obsahu vůbec nabídnout. Při rozevřených nůžkách se ubírá. */
function contentBudget(gap: number | null): number {
  if (gap === null) return 2
  if (gap >= 5) return 1
  if (gap >= 2) return 2
  return 3
}

/**
 * Jeden dnešní úkol.
 *
 * Odškrtávací věci jsou tlačítka, která opravdu odškrtávají. Zápis a otázky
 * odškrtnout nejdou. Ty se dělají jinde, takže vedou tam. Tvářit se, že
 * i ony jsou zaškrtávátko, by znamenalo lhát o tom, co klepnutí udělá.
 */
function taskRow(t: DayTask): string {
  // Trigger má hodinu už v popisku („Trigger ve 21:30“). Přilepit ji podruhé
  // by z nejdůležitějšího řádku dne udělalo koktavý.
  const time = t.at && !t.label.includes(t.at) ? `<span class="faint"> · ${esc(t.at)}</span>` : ''
  const label = `<span class="txt" style="font-size:.9375rem;line-height:1.5">
    <span${t.critical ? ' style="font-weight:600"' : ''}>${esc(t.label)}</span>${time}`

  if (t.kind === 'zapis' || t.kind === 'otazka') {
    return `<button class="check" data-go="${esc(t.route)}">
      <span class="box">${t.done ? '✓' : '→'}</span>
      ${label}<br><span class="faint" style="font-size:.8125rem">${
        t.done ? 'hotovo, můžete doplnit' : 'otevře se obrazovka'
      }</span></span>
    </button>`
  }

  const act = t.kind === 'kontrola' ? 'event-done' : 'check'
  const arg = t.kind === 'kontrola' ? t.id.slice(3) : t.id
  return `<button class="check" data-act="${act}" data-arg="${esc(arg)}" aria-pressed="${t.done}">
    <span class="box">✓</span>
    ${label}</span>
  </button>`
}

/**
 * Dnešní úkoly v jednom seznamu.
 *
 * Dřív byly na obrazovce dvakrát (léky zvlášť, termíny zvlášť) a trigger,
 * jediná věc v cyklu, u které se počítají minuty, nikde. `tasksFor` je skládá
 * dohromady i s hodinou, takže tady stačí je vypsat v pořadí dne.
 */
function todayTasks(bal: TodayBalance): string {
  if (bal.tasks.length === 0) return ''
  return `<section class="surface pad rise">
    <p class="eyebrow">Dnes je na vás · ${bal.done} z ${bal.total}</p>
    <div class="stack" style="gap:.2rem;margin-top:.6rem">
      ${bal.tasks.map(taskRow).join('')}
    </div>
  </section>`
}

/** Nestihnuté z minulých dnů. Do dneška nepatří, ztratit se ale nesmí. */
function overdue(): string {
  const date = viewDate()
  const late = reminders(date).filter((e) => e.onDate < date)
  if (late.length === 0) return ''

  return `<section class="surface pad rise">
    <p class="eyebrow">Zůstalo z minulých dnů</p>
    <div class="stack" style="gap:.35rem;margin-top:.6rem">
      ${late
        .slice(0, 5)
        .map(
          (e) => `<button class="check" data-act="event-done" data-arg="${esc(e.id)}" aria-pressed="${eventState(e.id).done}">
            <span class="box">✓</span>
            <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(e.title)}
              <br><span class="faint" style="font-size:.8125rem">${esc(formatCzechDateShort(e.onDate))}</span></span>
          </button>`,
        )
        .join('')}
    </div>
  </section>`
}

export function screenDnes(): string {
  const state = journey()
  // Dnešek se skládá z posledního relevantního stavu: cyklus, transfer,
  // embryo, den po transferu, hCG. Ne z prvního zápisu v datech.
  const ctx = context()
  const date = viewDate()
  const r = dayReading(date)
  const bal = todayBalance()
  const end = endurance()
  const ivf = journeyCard()
  const guide = guideFor(state.phase.id)
  const row = journalFor(date)
  const p = profile()
  const shots = shotsOn(date)

  const series = readingSeries(14, date)
  const budget = contentBudget(r.gap)
  const card = pickDailyCard(DAILY_CARDS, state)
  const rails = buildRails(CATALOG, state, affinity())
  const picks = rails
    .flatMap((rail) => rail.items.map((i) => contentById(i.id)))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .slice(0, budget)

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(formatCzechDate(date, { weekday: true }))}</p>
      <h1 class="display">${p.displayName ? `Dobrý den, ${esc(p.displayName)}.` : 'Dnešek'}</h1>
      <p class="lede">${esc(state.dayLabel)}</p>
      ${
        ctx.headline
          ? `<p class="faint" style="margin-top:.5rem;font-size:.8125rem;line-height:1.5">${esc(ctx.headline)}${
              ctx.cycleActive ? '' : ' · uzavřený cyklus'
            }</p>`
          : ''
      }
      <div class="phasechip">
        <span>Moje fáze: <strong>${esc(state.phase.name)}</strong></span>
        <button data-go="faze-zmena">Změnit →</button>
      </div>
    </header>`,

    // Dva zápisy, které si odporují. Aplikace nehádá, který platí, a nechá
    // to na uživatelce. Tiše si vybrat jeden by znamenalo počítat dny
    // z čísla, které si nikdo nepotvrdil.
    ctx.conflicts.length
      ? `<section class="surface pad rise">
          <p class="eyebrow">Zkontrolujte prosím</p>
          <div class="stack" style="gap:.9rem;margin-top:.8rem">
            ${ctx.conflicts
              .map(
                (k) => `<div class="banner" style="border-color:var(--sand)">
                  <span style="color:var(--taupe)">◈</span>
                  <span>${esc(k.message)}</span>
                </div>
                <button class="btn btn-sm" data-go="${esc(k.route)}">Otevřít a srovnat</button>`,
              )
              .join('')}
          </div>
        </section>`
      : '',

    // Po transferu je tohle to první, co má žena vidět. Nejdelší dva týdny
    // léčby, ve kterých se jinak neděje nic, na co by se dalo dívat.
    transferToday(),

    // Osobní IVF karta. Ženě, která zrovna žádný cyklus neřeší, se nekreslí
    // technika. Karta se ukáže, až má co ukazovat.
    ivf ? ivfCard(ivf, true) : '',

    softLanding(),

    // Květ neukazuje dnešek. Ukazuje, co má za sebou, protože právě to se
    // v léčbě ztrácí a nikdo jiný jí to nepřipomene.
    `<section class="surface pad rise">
      ${bloomEndurance(end)}
      <div class="reading cool" style="margin-top:1.3rem">
        <p class="eyebrow">Co už jste unesla</p>
        <p class="soft" style="margin-top:.4rem;line-height:1.7">
          <strong style="color:var(--fg);font-weight:500">${esc(end.headline)}</strong> ${esc(end.detail)}
        </p>
      </div>
      ${trackStrip(end)}
      <button class="btn btn-sm btn-ghost" data-go="${
        // Otevře se ten, se kterým aplikace pracuje: běžící, jinak poslední
        // zaznamenaný. Když žádný není, vede tlačítko do historie, kde se zakládá.
        shownCycleId() ? `cyklus/${esc(shownCycleId() ?? '')}` : 'journey/historie'
      }" style="margin-top:1.1rem">${shownCycleId() ? 'Celá karta cyklu' : 'Založit cyklus'}</button>
    </section>`,

    `<section class="surface pad rise">
      <div class="reading${bal.criticalOpen ? '' : ' cool'}">
        <p class="eyebrow">${bal.criticalOpen ? 'Dnes hlavně tohle' : 'Dnešek'}</p>
        <p class="soft" style="margin-top:.4rem;line-height:1.7">
          <strong style="color:var(--fg);font-weight:500">${esc(bal.headline)}</strong> ${esc(bal.detail)}
        </p>
      </div>
    </section>`,

    // Zápis a Léky přestaly být záložkami. Na denní použití k nim musí
    // vést cesta odsud, jinak by se injekce odškrtávaly přes rozcestník.
    `<div class="quickrow rise">
      <button data-go="zapis"><i>◕</i>Nálada</button>
      <button data-go="zapis#vpich"><i>✚</i>Vpich${shots.length ? ` · ${shots.length}` : ''}</button>
      <button data-go="leky"><i>✚</i>Léky</button>
      <button data-go="zapis#telo"><i>◍</i>Tělo</button>
    </div>`,

    // Otázky pro lékaře patří nahoru, ne někam hluboko do obsahu. Ženě,
    // která si tři týdny psala poznámky, jsou k ničemu, když si na ně
    // v ordinaci nevzpomene.
    questionsCard(),

    todayTasks(bal),
    overdue(),

    // Nejcennější věta na celé obrazovce: co dneska není její starost.
    `<section class="surface pad rise">
      <p class="eyebrow">Co dnes na vás není</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        O těchhle věcech rozhoduje biologie nebo laboratoř, ne vaše snaha.
        Nedají se odškrtnout a nemají se hlídat.
      </p>
      <ul class="linelist" style="margin-top:1rem">
        ${bal.notYours
          .map(
            (n) => `<li>
              <span style="min-width:0;flex:1">
                <b style="display:block;font-weight:600;font-size:.9375rem">${esc(n.label)}</b>
                <span class="faint" style="display:block;font-size:.8125rem;line-height:1.5;margin-top:.15rem">${esc(n.why)}</span>
              </span>
            </li>`,
          )
          .join('')}
      </ul>
      <button class="btn btn-sm btn-ghost" data-go="nuzky" style="margin-top:1.1rem">Jak se obsah přizpůsobuje dni</button>
    </section>`,

    // Karta dne se sama zkracuje. Při rozevřených nůžkách zůstane jen nadpis
    // a odstavec. Víc by v takový den bylo na obtíž.
    card
      ? `<section class="surface pad rise">
          <p class="eyebrow">Dnešní téma</p>
          <h2 class="display" style="font-size:1.4rem;margin-top:.4rem">${esc(card.headline)}</h2>
          <p class="soft" style="margin-top:.6rem;line-height:1.7">${esc(card.body)}</p>
          ${
            budget >= 2 && card.whatsHappening?.length
              ? `<div style="margin-top:1.3rem"><p class="eyebrow">Co se dnes může dít</p>
                 <ul class="bullets" style="margin-top:.6rem">${card.whatsHappening.map((w) => `<li>${esc(w)}</li>`).join('')}</ul></div>`
              : ''
          }
          ${budget >= 2 && card.tip ? `<p class="tipbox" style="margin-top:1.1rem"><strong>Tip: </strong>${esc(card.tip)}</p>` : ''}
          ${
            card.callDoctorIf?.length
              ? `<div class="doctorbox" style="margin-top:1.1rem"><p style="font-size:.8125rem;font-weight:600">Ozvěte se lékaři, pokud:</p>
                 <ul>${card.callDoctorIf.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>`
              : ''
          }
        </section>`
      : '',

    picks.length
      ? `<section class="rise">
          ${sectionTitle(
            r.gap !== null && r.gap >= 2 ? 'Dnes jen krátce' : 'Vybráno pro dnešek',
            r.gap !== null && r.gap >= 2
              ? 'Nůžky jsou otevřené, tak vám toho dnes nabízíme míň'
              : esc(`Podle fáze ${state.phase.name.toLowerCase()}`),
          )}
          <div class="stack" style="gap:.75rem">${picks.map((i) => contentCard(i)).join('')}</div>
        </section>`
      : '',

    `<section class="surface pad rise">
      <p class="eyebrow">Posledních ${esc(plural(series.length, 'den', 'dny', 'dní'))}</p>
      ${chart(
        {
          series: [
            { name: 'Žádá dnešek', color: 'var(--s1)', data: series.map((s) => s.demand) },
            { name: 'Máte na to', color: 'var(--s2)', data: series.map((s) => s.reserve) },
          ],
          labels: series.map((s) => formatCzechDateShort(s.date)),
          yMax: 10,
          yTicks: 2,
          height: 110,
        },
        'Vývoj náročnosti dne a vaší rezervy',
      )}
      ${seriesKey([
        { name: 'Žádá dnešek', color: 'var(--s1)' },
        { name: 'Máte na to', color: 'var(--s2)' },
      ])}
      <button class="btn btn-sm" data-go="vyvoj" style="margin-top:1rem">Celý vývoj</button>
    </section>`,

    guide
      ? `<section class="surface pad rise">
          <p class="eyebrow">Kde jste</p>
          <h2 class="display" style="font-size:1.3rem;margin-top:.4rem">${esc(state.phase.name)}</h2>
          <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">${esc(guide.summary)}</p>
          <button class="btn btn-sm" data-go="faze" style="margin-top:1.1rem">Průvodce fází</button>
        </section>`
      : '',
  ].join('')
}

// ------------------------------------------------------------- rozpad ---

/** Z čeho se nůžky počítají. Nic není černá skříňka. */
export function screenNuzky(): string {
  const r = dayReading()
  const state = journey()

  return [
    `<header class="head rise">
      <p class="eyebrow">Nůžky dne</p>
      <h1 class="display">Z čeho se to počítá</h1>
      <p class="lede">
        Aplikace nehodnotí vás. Hodnotí ten den. Tady je vidět přesně, co do
        obou čísel vstoupilo.
      </p>
    </header>`,

    `<section class="surface pad">
      ${scissorRing(r)}
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow" style="color:var(--s1)">Co dnešek žádá · ${r.demand} z 10</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        Spočítané z protokolu. Z toho, v jaké jste fázi, kolikátý je den, co máte
        v kalendáři a kolik berete léků. <strong>Nezáleží to na tom, co si zapíšete.</strong>
        Dnešek by byl stejně náročný, i kdybyste aplikaci vůbec neotevřela.
      </p>
      ${partsList('Složky', r.demandParts)}
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow" style="color:var(--s2)">Co na to máte · ${r.reserve === null ? 'nezapsáno' : `${r.reserve} z 10`}</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        Tohle je jediné číslo, které pochází od vás. Ze čtyř číselníků a štítků
        na tělo v dnešním zápisu. <strong>Nízká rezerva není selhání.</strong> Je to
        informace, podle které aplikace ubere.
      </p>
      ${
        r.reserve === null
          ? `<button class="btn btn-primary" data-go="zapis" style="margin-top:1.1rem">Zapsat dnešek</button>`
          : partsList('Složky', r.reserveParts)
      }
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Co s tím aplikace dělá</p>
      <ul class="bullets" style="margin-top:.7rem">
        <li><strong>Nůžky dokořán</strong>. Kratší obsah, dýchání, žádné úkoly navíc.</li>
        <li><strong>Otevřené</strong>. Ubereme. Co se nestihne, počká.</li>
        <li><strong>V rovnováze</strong>. Dobrý čas na to, co jste odkládala.</li>
        <li><strong>Zavřené</strong>. Máte rezervu. Můžeme jít do hloubky.</li>
      </ul>
    </section>`,

    `<p class="note">Nůžky nejsou zdravotní údaj. Nepředpovídají výsledek léčby, nehodnotí
    hodnoty z odběrů a nikdy neřeknou, že něco je špatně. Popisují náročnost dne
    a to, jak jste ho nesla. Nic víc. ${
      state.nextMilestone ? `Nejbližší milník: ${esc(state.nextMilestone.label)} za ${esc(czDays(state.nextMilestone.inDays))}.` : ''
    }</p>`,
  ].join('')
}
