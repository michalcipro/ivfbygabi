import type { IsoDate } from './profile'
import { daysBetween } from './dates'
import {
  betaDate,
  nextBloodTest,
  plannedHcg,
  currentTransfer,
  cycleTitle,
  estimatedBeta,
  OUTCOME_LABEL,
  sortedTransfers,
  TRANSFER_KIND_SHORT,
  TRANSFER_OUTCOME_LABEL,
  type CycleRow,
} from './cycle'
import { isBlastocyst, reachedDay, type Embryo } from './embryo'

/**
 * Osobní IVF karta.
 *
 * Jedna obrazovka, ze které je za dvě vteřiny vidět celý cyklus: stimulace
 * hotová, dvanáct vajíček, tři embrya, transfer patnáctého, dnes čtvrtý den
 * po kryotransferu, odběr hCG za šest dní.
 *
 * Tohle je srdce aplikace. Všechno ostatní jsou formuláře, do kterých se
 * jde jen tehdy, když je co doplnit. Tahle karta se čte každý den.
 *
 * ----------------------------------------------------------------- KROKY ---
 * Karta ukazuje jen kroky, které v daném druhu cyklu existují, a jen ty,
 * ke kterým je co říct. Prázdný krok se nekreslí: „Odběr. Nezapsáno“
 * nikomu nic neřekne a jen ředí to, co zapsané je.
 *
 * ------------------------------------------------------------- TRANSFERY ---
 * Cyklus není totéž co transfer. Jeden odběr vydá na několik transferů
 * a karta to musí ukázat jako jednu větev, ne jako tři cykly. Transfery
 * mají proto vlastní řádek každý. S pořadím, druhem a výsledkem.
 *
 * Čistý doménový modul.
 */

export type StepState = 'hotovo' | 'probiha' | 'ceka' | 'neproběhlo'

export interface CardStep {
  key: string
  label: string
  /** Hodnota vpravo. „12 vajíček“, „15. 9.“. Prázdné = jen stav. */
  value: string
  state: StepState
  date: IsoDate | null
}

export interface JourneyCard {
  cycleId: string
  title: string
  /** „4. den po KET“, „7. den stimulace“. Prázdné, když se nedá určit. */
  today: string
  /** „Odběr hCG za 6 dní“ nebo prázdné. */
  next: string
  steps: CardStep[]
  /** Kolik embryí je k dispozici k dalšímu transferu. */
  frozen: number
}

function czDays(n: number): string {
  return `${n} ${n === 1 ? 'den' : n < 5 ? 'dny' : 'dní'}`
}

function pluralEmbryo(n: number): string {
  return `${n} ${n === 1 ? 'embryo' : n < 5 ? 'embrya' : 'embryí'}`
}

function pluralEggs(n: number): string {
  return `${n} ${n === 1 ? 'vajíčko' : n < 5 ? 'vajíčka' : 'vajíček'}`
}

function pluralBlast(n: number): string {
  return `${n} ${n === 1 ? 'blastocysta' : n < 5 ? 'blastocysty' : 'blastocyst'}`
}

function shortDate(iso: IsoDate): string {
  const [, m, d] = iso.split('-')
  return `${Number(d)}. ${Number(m)}.`
}

/**
 * Sestaví kartu cyklu k zadanému dni.
 *
 * `embryos` jsou embrya, která k cyklu patří. Když je uživatelka nevede,
 * použije se počet z laboratorních čísel. Karta má fungovat i pro ženu,
 * která si karty embryí vyplňovat nechce.
 */
export function buildCard(c: CycleRow, embryos: Embryo[], today: IsoDate): JourneyCard {
  const steps: CardStep[] = []
  const put = (key: string, labelText: string, value: string, state: StepState, date: IsoDate | null): void => {
    steps.push({ key, label: labelText, value, state, date })
  }

  const past = (d: IsoDate | null): boolean => d !== null && d <= today

  /*
   * Uzavřený cyklus nemá nic rozběhnutého.
   *
   * Když žena cyklus ukončí uprostřed stimulace, nesmí u ní karta dál svítit
   * „stimulace, 7. den“, jako by dnes večer píchala. Běh se zastaví na počtu
   * dní, které opravdu proběhly.
   */
  const uzavren = c.outcome !== 'probiha' || (c.endedOn !== null && c.endedOn <= today)

  // --- stimulace
  if (c.kind !== 'fet') {
    if (c.stimStartOn) {
      const konec = uzavren && c.endedOn && c.endedOn < today ? c.endedOn : today
      const den = daysBetween(c.stimStartOn, konec) + 1
      const hotovo = past(c.retrievalOn) || past(c.triggerOn) || uzavren
      put(
        'stim',
        'Stimulace',
        past(c.retrievalOn) || past(c.triggerOn)
          ? 'dokončeno'
          : uzavren
            ? den >= 1
              ? czDays(den)
              : 'nezačala'
            : den >= 1
              ? `${den}. den`
              : `od ${shortDate(c.stimStartOn)}`,
        hotovo ? 'hotovo' : den >= 1 ? 'probiha' : 'ceka',
        c.stimStartOn,
      )
    }
  }

  // --- odběr
  if (c.kind === 'ivf' || c.eggs !== null) {
    if (c.retrievalOn || c.eggs !== null) {
      put(
        'odber',
        'Odběr',
        c.eggs !== null ? pluralEggs(c.eggs) : c.retrievalOn ? shortDate(c.retrievalOn) : '',
        past(c.retrievalOn) || c.eggs !== null ? 'hotovo' : 'ceka',
        c.retrievalOn,
      )
    }
  }

  // --- embrya
  const zive = embryos.filter((e) => e.fate !== 'zastaveno' && e.fate !== 'nevhodne')
  const pocet = embryos.length > 0 ? zive.length : null
  if (pocet !== null) {
    const blast = embryos.filter(isBlastocyst).length
    put('embrya', 'Embrya', blast > 0 ? `${pluralEmbryo(pocet)}, z toho ${pluralBlast(blast)}` : pluralEmbryo(pocet), 'hotovo', null)
  } else if (c.fertilized !== null) {
    put('embrya', 'Oplozeno', pluralEmbryo(c.fertilized), 'hotovo', null)
  }

  // --- transfery, každý zvlášť
  const transfers = sortedTransfers(c)
  transfers.forEach((t, i) => {
    const poradi = transfers.length > 1 ? `${i + 1}. transfer` : 'Transfer'
    const nazev = t.kind === 'kryo' ? `${poradi} (${TRANSFER_KIND_SHORT.kryo})` : poradi
    const stav: StepState = t.cancelled
      ? 'neproběhlo'
      : t.outcome !== 'ceka'
        ? 'hotovo'
        : past(t.date)
          ? 'probiha'
          : 'ceka'
    const hodnota = t.cancelled
      ? 'zrušen'
      : t.outcome !== 'ceka'
        ? TRANSFER_OUTCOME_LABEL[t.outcome]
        : t.date
          ? shortDate(t.date)
          : 'bez data'
    put(`transfer-${t.id}`, nazev, hodnota, stav, t.date)
  })

  /*
   * --- dnešek
   *
   * Uzavřený cyklus nemá dnešek. Kdyby karta u ukončeného cyklu dál hlásila
   * „7. den stimulace“ a „odběr hCG za šest dní“, tvářila by se, že léčba
   * běží dál, i když ji žena právě ukončila. Místo dne se proto ukáže,
   * čím cyklus skončil.
   */
  const cur = currentTransfer(c, today)
  let dnes = ''
  if (uzavren) {
    dnes = c.outcome === 'probiha' ? 'Cyklus uzavřen' : OUTCOME_LABEL[c.outcome]
  } else if (cur?.date && cur.date <= today && !cur.cancelled) {
    const dpt = daysBetween(cur.date, today)
    const druh = cur.kind === 'kryo' ? 'KET' : 'transferu'
    dnes = dpt === 0 ? `Dnes je transfer` : `${dpt}. den po ${druh}`
  } else if (c.retrievalOn && c.retrievalOn <= today && !transfers.some((t) => past(t.date))) {
    const dpr = daysBetween(c.retrievalOn, today)
    dnes = dpr === 0 ? 'Dnes je odběr' : `${dpr}. den kultivace`
  } else if (c.stimStartOn && c.stimStartOn <= today && !past(c.retrievalOn)) {
    dnes = `${daysBetween(c.stimStartOn, today) + 1}. den stimulace`
  }

  // --- co přijde
  // „Co přijde“ je vždycky budoucnost. Zapsaný termín vyhrává nad odhadem
  // a opakovaný odběr nad tím prvním, který už proběhl.
  const naplanovany = nextBloodTest(c, today) ?? plannedHcg(c, today)
  const beta = naplanovany ?? estimatedBeta(c, today)
  let dalsi = ''
  if (uzavren) {
    dalsi = ''
  } else if (beta && beta >= today) {
    const za = daysBetween(today, beta)
    const presny = naplanovany !== null || betaDate(c, today) !== null
    dalsi =
      za === 0
        ? 'Odběr hCG dnes'
        : `Odběr hCG ${za === 1 ? 'zítra' : `za ${czDays(za)}`}${presny ? '' : ' (odhad)'}`
  } else {
    const budouci = transfers.find((t) => t.date && t.date > today && !t.cancelled)
    if (budouci?.date) {
      const za = daysBetween(today, budouci.date)
      dalsi = za === 0 ? 'Transfer dnes' : `Transfer ${za === 1 ? 'zítra' : `za ${czDays(za)}`}`
    } else if (c.retrievalOn && c.retrievalOn > today) {
      const za = daysBetween(today, c.retrievalOn)
      dalsi = za === 0 ? 'Odběr dnes' : `Odběr ${za === 1 ? 'zítra' : `za ${czDays(za)}`}`
    }
  }

  return {
    cycleId: c.id,
    title: cycleTitle(c),
    today: dnes,
    next: dalsi,
    // Žádný krok uzavřeného cyklu už neběží. Kolečko „probíhá“ by lhalo.
    steps: uzavren ? steps.map((s) => (s.state === 'probiha' ? { ...s, state: 'hotovo' as const } : s)) : steps,
    frozen: embryos.filter((e) => e.fate === 'kryo').length,
  }
}

// ------------------------------------------------------------- trychtýř ---

export interface FunnelStep {
  label: string
  count: number
  /** Doplněk pod číslem. „5. den“, „z toho zralých“. */
  note: string
  /** Tvar do jednořádkového shrnutí: „4 embrya 3. den“. */
  short: string
}

/**
 * Co se stalo s mými vajíčky.
 *
 * Cesta od folikulu k embryu má několik filtrů a čísla mezi nimi klesají.
 * Když se ukážou vedle sebe, je vidět, že to klesání je normální. A ne
 * že se něco pokazilo. Kroky, které uživatelka nezapsala, se vynechají;
 * dopočítávat je by znamenalo vymýšlet si.
 */
export function buildFunnel(c: CycleRow, embryos: Embryo[]): FunnelStep[] {
  const out: FunnelStep[] = []
  const put = (label: string, count: number | null, note: string, short: string): void => {
    if (count !== null && Number.isFinite(count) && count >= 0) out.push({ label, count, note, short })
  }

  put('Odebráno', c.eggs, 'vajíček', 'odebraných vajíček')
  put('Zralých', c.mature, 'z odebraných', 'zralých')
  put('Použito k oplodnění', c.inseminated, 'do laboratoře', 'do oplodnění')
  put('Oplozeno', c.fertilized, '2PN, 1. den', 'oplozených')

  /*
   * Dny kultivace.
   *
   * Přednost mají ručně zapsaná čísla, protože je klinika hlásí za celou
   * sadu. Karty embryí bývají neúplné. Žena si vede jen ta embrya, o která
   * jí jde. A kdyby se míchaly s ručními počty, trychtýř by uprostřed
   * spadl na jedničku a vypadal by jako katastrofa, která se nestala.
   *
   * Z karet se počítá jen tehdy, když ruční číslo chybí. A pak se počítá
   * podle nejzazšího dne, kam se embryo dostalo: embryo s poznámkou k pátému
   * dni se třetí den evidentně vyvíjelo, i když k němu zápis nemá.
   */
  const zKaret = (den: number): number | null => {
    if (embryos.length === 0) return null
    const n = embryos.filter((e) => {
      if (e.days.length === 0) return false
      const stop = e.days.find((d) => d.stage === 'zastaveno')?.day ?? null
      if (stop !== null && stop <= den) return false
      return Math.max(...e.days.map((d) => d.day)) >= den
    }).length
    return n > 0 ? n : null
  }

  for (const den of [2, 3, 4, 5, 6]) {
    const rucni = den === 2 ? c.day2 : den === 3 ? c.day3 : den === 4 ? c.day4 : den === 5 ? c.day5 : c.day6
    const n = rucni ?? zKaret(den)
    const blast = den >= 5
    put(`${den}. den`, n, blast ? 'blastocyst' : 'embryí', `${blast ? 'blastocyst' : 'embryí'} ${den}. den`)
  }

  const prenesena = c.transfers.reduce((s, t) => s + (t.embryos ?? 0), 0)
  if (prenesena > 0) {
    put('Přeneseno', prenesena, c.transfers.length > 1 ? `v ${c.transfers.length} transferech` : '', 'přeneseno')
  }

  const zmrazena = embryos.length > 0 ? embryos.filter((e) => e.fate === 'kryo').length : c.frozen
  put('Zamraženo', zmrazena, 'k dalšímu transferu', 'zamraženo')

  return out
}

/** Do kolikátého dne se embryo dostalo. Pro tabulku embryí. */
export function embryoDayLabel(e: Embryo): string {
  const d = reachedDay(e)
  return d === null ? '–' : `D${d}`
}
