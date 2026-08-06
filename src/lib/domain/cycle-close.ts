import {
  hasOwnRetrieval,
  sortedTransfers,
  type CycleOutcome,
  type CycleRow,
  type MaterialSource,
} from './cycle'
import { embryoTitle, isAvailable, FATE_LABEL, type Embryo } from './embryo'
import { today as todayIso } from './dates'
import type { IsoDate } from './profile'

/**
 * Uzavření IVF cyklu. Vždycky ručně.
 *
 * Cyklus se **nikdy** neuzavírá sám. Ani po odběru, ani po transferu, ani
 * po negativním hCG. Z jednoho odběru bývá zásoba embryí na několik
 * kryotransferů a ta zásoba může ležet v laboratoři měsíce. Cyklus, který
 * by se zavřel po prvním neúspěchu, by ženě zahodil kontext, ve kterém
 * pokračuje.
 *
 * ----------------------------------------------------------- KONTROLA ---
 * Před uzavřením se ukáže přehled: co je zapsané, co ne, jaká embrya
 * z cyklu ještě zbývají a v jakém jsou stavu. Aplikace nic z toho
 * nevyžaduje. Jen se zeptá, protože zpětně se to dohledává hůř.
 *
 * Čistý doménový modul.
 */

export interface CloseCheck {
  key: string
  label: string
  /** Je údaj zapsaný? */
  done: boolean
  /** Co konkrétně je nebo chybí. */
  detail: string
}

export interface EmbryoState {
  id: string
  title: string
  state: string
  /** Zbývá k dispozici pro další transfer? */
  available: boolean
  final: boolean
}

export interface CloseReview {
  checks: CloseCheck[]
  /** Všechno podstatné je zapsané. */
  ready: boolean
  embryos: EmbryoState[]
  /** Kolik embryí z cyklu je pořád k dispozici. */
  availableCount: number
  /**
   * Proč uzavření teď možná není namístě. `null` = nic nebrání.
   *
   * Není to zákaz. Je to věta, kterou si žena přečte dřív, než klikne.
   */
  warning: string | null
}

/** České skloňování počtu. Doména si ho drží vlastní, na UI nesahá. */
function pocet(n: number, one: string, few: string, many: string): string {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`
}

function zdroj(s: MaterialSource, vlastni: string, darovane: string): string {
  if (s === 'vlastni') return vlastni
  if (s === 'darovane') return darovane
  return ''
}

export function reviewClose(
  c: CycleRow,
  embryos: Embryo[],
  today: IsoDate = todayIso(),
): CloseReview {
  const mine = embryos.filter((e) => e.cycleId === c.id)
  const transfers = sortedTransfers(c)
  const vlastniOdber = hasOwnRetrieval(c)

  const stavy: EmbryoState[] = mine.map((e) => ({
    id: e.id,
    title: embryoTitle(e),
    state: FATE_LABEL[e.fate],
    available: isAvailable(e),
    final: e.finalState,
  }))
  const availableCount = stavy.filter((s) => s.available).length

  const checks: CloseCheck[] = []

  // --- vajíčka
  if (vlastniOdber) {
    checks.push({
      key: 'vajicka',
      label: 'Vajíčka',
      done: c.eggs !== null || c.noEmbryoReason !== '',
      detail:
        c.eggs !== null
          ? `${c.eggs} odebraných`
          : c.noEmbryoReason !== ''
            ? 'zapsáno, proč embrya nevznikla'
            : 'počet odebraných vajíček není zapsaný',
    })
  } else {
    checks.push({
      key: 'vajicka',
      label: 'Vajíčka',
      done: c.eggSource !== 'nezapsano' || c.kind === 'fet',
      detail:
        zdroj(c.eggSource, 'vlastní', 'darovaná') ||
        (c.kind === 'fet' ? 'zásoba z dřívějšího odběru' : 'není zapsané, odkud vajíčka byla'),
    })
  }

  // --- spermie
  checks.push({
    key: 'spermie',
    label: 'Spermie',
    done: c.spermSource !== 'nezapsano' || c.kind === 'darovane_embryo',
    detail:
      c.kind === 'darovane_embryo'
        ? 'darované embryo, spermie se neřeší'
        : zdroj(c.spermSource, 'vlastní', 'darované') || 'není zapsané, odkud spermie byly',
  })

  // --- oplodnění
  if (vlastniOdber) {
    checks.push({
      key: 'oplodneni',
      label: 'Oplodnění',
      done: c.fertilized !== null || c.noEmbryoReason !== '',
      detail:
        c.fertilized !== null
          ? `${c.fertilized} oplozených`
          : c.noEmbryoReason !== ''
            ? 'zapsáno, proč embrya nevznikla'
            : 'počet oplozených vajíček není zapsaný',
    })
  }

  // --- embrya
  checks.push({
    key: 'embrya',
    label: 'Embrya',
    done: mine.length > 0 || c.noEmbryoReason !== '' || c.kind === 'fet',
    detail:
      mine.length > 0
        ? pocet(mine.length, 'zapsané', 'zapsaná', 'zapsaných')
        : c.noEmbryoReason !== ''
          ? 'zapsáno, že embryo nevzniklo'
          : 'žádné embryo zapsané a není řečeno proč',
  })

  // --- transfery
  checks.push({
    key: 'transfery',
    label: 'Transfery',
    done: transfers.length > 0 || c.noEmbryoReason !== '',
    detail:
      transfers.length > 0
        ? pocet(transfers.length, 'zapsaný', 'zapsané', 'zapsaných')
        : c.noEmbryoReason !== ''
          ? 'k transferu nedošlo'
          : 'žádný transfer zapsaný',
  })

  // --- výsledky transferů
  const ceka = transfers.filter((t) => !t.cancelled && t.outcome === 'ceka' && t.date && t.date <= today)
  checks.push({
    key: 'vysledky',
    label: 'Výsledky transferů',
    done: ceka.length === 0,
    detail:
      ceka.length === 0
        ? 'všechny zapsané'
        : `${ceka.length} ${ceka.length === 1 ? 'transfer čeká' : 'transfery čekají'} na výsledek`,
  })

  // --- zbývající embrya
  checks.push({
    key: 'zbyva',
    label: 'Zbývající embrya',
    done: mine.length === 0 || mine.every((e) => e.finalState || !isAvailable(e)) || availableCount > 0,
    detail:
      mine.length === 0
        ? 'žádná'
        : availableCount > 0
          ? `${availableCount} k dispozici`
          : 'u všech je stav uzavřený',
  })

  const ready = checks.every((k) => k.done)

  let warning: string | null = null
  if (availableCount === 1) {
    warning =
      'Z tohohle cyklu zbývá jedno embryo k dispozici. Dokud ho máte, může z cyklu následovat další kryotransfer a uzavírat ho nemusíte.'
  } else if (availableCount > 1) {
    const sloveso = availableCount <= 4 ? 'zbývají' : 'zbývá'
    warning = `Z tohohle cyklu ${sloveso} ${pocet(availableCount, 'embryo', 'embrya', 'embryí')} k dispozici. Dokud je máte, můžou z cyklu následovat další kryotransfery a uzavírat ho nemusíte.`
  } else if (ceka.length > 0) {
    warning = 'Poslední transfer ještě nemá zapsaný výsledek. Než cyklus uzavřete, doplňte ho.'
  }

  return { checks, ready, embryos: stavy, availableCount, warning }
}

/**
 * Jaký výsledek cyklu z dat vychází.
 *
 * Používá se při ručním uzavření, aby uživatelka nemusela vybírat něco,
 * co už jednou zapsala. Nikdy se to nedělá samo od sebe a v sekci Výsledek
 * se to dá přepsat. Když se odvodit nedá nic, vrací `null` a rozhodne ona.
 */
export function deriveOutcome(c: CycleRow, embryos: Embryo[]): CycleOutcome | null {
  const rozhodnute = sortedTransfers(c).filter((t) => !t.cancelled && t.outcome !== 'ceka')
  const posledni = rozhodnute[rozhodnute.length - 1]
  if (posledni) {
    const mapa: Partial<Record<string, CycleOutcome>> = {
      pozitivni: 'tehotenstvi',
      negativni: 'negativni',
      biochemicke: 'biochemicke',
      mimodelozni: 'mimodelozni',
      ztrata: 'ztrata',
    }
    const z = mapa[posledni.outcome]
    if (z) return z
  }
  if (c.noEmbryoReason !== '') return 'bez_embrya'
  if (embryos.some((e) => e.cycleId === c.id && isAvailable(e))) return 'zamrazeno'
  if (c.transfers.length > 0 && c.transfers.every((t) => t.cancelled)) return 'zruseno'
  return null
}

/**
 * Může z cyklu ještě něco následovat?
 *
 * Používá se tam, kde by aplikace jinak nabídla uzavření cyklu jako
 * samozřejmost. Negativní hCG samo o sobě konec cyklu neznamená.
 */
export function mayContinue(c: CycleRow, embryos: Embryo[]): boolean {
  return embryos.some((e) => e.cycleId === c.id && isAvailable(e))
}
