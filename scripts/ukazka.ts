import { emptyCycle, emptyTransfer } from '../src/lib/domain/cycle'
import { emptyEmbryo } from '../src/lib/domain/embryo'
import { emptyExpense } from '../src/lib/domain/finance'
import { addDays, today } from '../src/lib/domain/dates'
import type { IsoDate } from '../src/lib/domain/profile'

/**
 * Ukázková data pro snímky obrazovek.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Snímky na prodejní stránce byly dřív ruční. To znamenalo dvě věci: nedaly
 * se obnovit, když se obrazovka změnila, a hlavně existovaly jen česky.
 * Na anglické stránce tak v telefonu stála čeština.
 *
 * Tohle je ten stav, který snímky ukazují, poskládaný z doménových
 * konstruktorů. Když se změní tvar cyklu nebo embrya, přestane to
 * překládat a je to vidět hned, ne až na hotovém obrázku.
 *
 * ------------------------------------------------------------ PROČ RELATIVNĚ ---
 * Všechna data jsou odvozená ode dneška, ne napevno. Transfer byl před
 * čtyřmi dny pokaždé, kdy se snímky vyrobí, takže na nich bude vždycky
 * „4. den po transferu“ a nikdy datum z minulého roku.
 */

/** Jméno na snímcích. Krátké, aby se vešlo do nadpisu i v němčině. */
export const JMENO = 'Tereza'

/** Kolikátý den po transferu snímky ukazují. */
const DEN_PO_TRANSFERU = 4

/** Datum transferu, které snímky ukazují. Musí sedět i v profilu. */
export function datumTransferu(dnes: IsoDate = today()): IsoDate {
  return addDays(dnes, -DEN_PO_TRANSFERU)
}

export interface Ukazka {
  cycles: unknown[]
  embryos: unknown[]
  expenses: unknown[]
  journal: Record<string, unknown>
}

export function ukazkovaData(dnes: IsoDate = today()): Ukazka {
  const transferDen = datumTransferu(dnes)

  // První cyklus: proběhl, skončil bez těhotenství, zbyla z něj embrya.
  const prvni = emptyCycle('cyc-ukazka-1', 1, addDays(dnes, -210))
  prvni.stimStartOn = addDays(dnes, -205)
  prvni.triggerOn = addDays(dnes, -194)
  prvni.retrievalOn = addDays(dnes, -192)
  prvni.eggs = 11
  prvni.mature = 9
  prvni.inseminated = 9
  prvni.fertMethod = 'icsi'
  prvni.fertilized = 7
  prvni.day5 = 3
  prvni.frozen = 2
  prvni.endedOn = addDays(dnes, -150)
  prvni.outcome = 'negativni'

  const prvniTransfer = emptyTransfer('tr-ukazka-1', 'cerstvy')
  prvniTransfer.date = addDays(dnes, -187)
  prvniTransfer.embryoDay = 5
  prvniTransfer.embryos = 1
  prvniTransfer.grade = '4AB'
  prvniTransfer.outcome = 'negativni'
  prvni.transfers = [prvniTransfer]

  // Druhý cyklus: kryotransfer, běží, čeká se na hCG.
  const druhy = emptyCycle('cyc-ukazka-2', 2, addDays(dnes, -24))
  druhy.kind = 'fet'
  druhy.cd1On = addDays(dnes, -24)

  const ket = emptyTransfer('tr-ukazka-2', 'kryo')
  ket.date = transferDen
  ket.embryoDay = 6
  ket.embryos = 1
  ket.grade = '4AA'
  ket.prep = 'substituovany'
  ket.endometrium = 9.2
  ket.hcgPlannedOn = addDays(transferDen, 10)
  ket.embryoIds = ['emb-ukazka-2']
  druhy.transfers = [ket]

  const embrya = [
    { id: 'emb-ukazka-1', cyklus: 'cyc-ukazka-1', cislo: 1, den: 5, znamka: '4AB', osud: 'transfer' },
    { id: 'emb-ukazka-2', cyklus: 'cyc-ukazka-1', cislo: 2, den: 6, znamka: '4AA', osud: 'transfer' },
    { id: 'emb-ukazka-3', cyklus: 'cyc-ukazka-1', cislo: 3, den: 6, znamka: '3BB', osud: 'zamrazeno' },
  ].map((e) => {
    const emb = emptyEmbryo(e.id, e.cyklus, e.cislo)
    emb.createdOn = addDays(dnes, -192)
    emb.days = [{ day: e.den, stage: 'blastocysta', grade: e.znamka, note: '' }]
    emb.fate = e.osud as typeof emb.fate
    if (e.osud === 'zamrazeno') {
      emb.frozenOn = addDays(dnes, -186)
      emb.frozenDay = e.den
    }
    return emb
  })

  const vydaje = [
    { nazev: 'IVF cyklus', kategorie: 'klinika', cena: 48000, hrazeno: 32000, cyklus: 'cyc-ukazka-1' },
    { nazev: 'Léky na stimulaci', kategorie: 'leky', cena: 21500, hrazeno: 9000, cyklus: 'cyc-ukazka-1' },
    { nazev: 'Kryokonzervace embryí', kategorie: 'kryo', cena: 9000, hrazeno: 0, cyklus: 'cyc-ukazka-1' },
    { nazev: 'Skladování embryí', kategorie: 'skladovani', cena: 4000, hrazeno: 0, cyklus: null },
    { nazev: 'Kryoembryotransfer', kategorie: 'ket', cena: 14500, hrazeno: 0, cyklus: 'cyc-ukazka-2' },
    { nazev: 'Vyšetření před cyklem', kategorie: 'vysetreni', cena: 3200, hrazeno: 3200, cyklus: null },
  ].map((v, i) => {
    const e = emptyExpense(`exp-ukazka-${i + 1}`, v.cyklus)
    e.title = v.nazev
    e.category = v.kategorie
    e.actual = v.cena
    e.insurance = v.hrazeno
    e.onDate = addDays(dnes, -200 + i * 30)
    // Zaplacené je všechno kromě posledních dvou, aby šlo vidět „zbývá“.
    if (i < 4) {
      e.payments = [
        { id: `pay-ukazka-${i + 1}`, amount: v.cena, onDate: e.onDate, method: 'prevod', note: '' },
      ]
    }
    return e
  })

  // Týden zápisů, aby byl v Deníku graf i průměr nálady.
  const journal: Record<string, unknown> = {}
  const nalady = [3, 4, 3, 2, 4, 3, 4]
  const nadeje = [3, 3, 4, 3, 4, 4, 4]
  const uzkosti = [3, 2, 3, 4, 3, 3, 2]
  const energie = [3, 3, 2, 2, 3, 3, 3]
  for (let i = 6; i >= 0; i--) {
    const datum = addDays(dnes, -i)
    journal[datum] = {
      date: datum,
      mood: nalady[6 - i],
      anxiety: uzkosti[6 - i],
      hope: nadeje[6 - i],
      energy: energie[6 - i],
      note: '',
      promptId: '',
      promptAnswer: '',
      win: '',
      symptoms: [],
    }
  }

  return { cycles: [prvni, druhy], embryos: embrya, expenses: vydaje, journal }
}
