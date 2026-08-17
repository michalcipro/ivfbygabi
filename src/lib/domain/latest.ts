import {
  activeCycle,
  bloodTests,
  currentTransfer,
  defaultCycle,
  sortedTransfers,
  ZTRATOVE_VYSLEDKY,
  type CycleRow,
  type CycleTransfer,
} from './cycle'
import { isAvailable, reachedDay, type Embryo } from './embryo'
import { today as todayIso } from './dates'
import type { IsoDate, ModifierId, Profile } from './profile'

/**
 * Nejnovější relevantní data vyhrávají. Vždy.
 *
 * Kotevní data v profilu (`transferOn`, `retrievalOn`, `stimulationStartOn`,
 * `betaTestOn`) vznikla v onboardingu a od té doby je nikdo nepřepisuje.
 * Žena mezitím zapisuje skutečnou léčbu do karty cyklu: druhý transfer,
 * nový odběr, další stimulaci. Aplikace se ale pořád ptala profilu, takže
 * počítala dny z transferu, který byl před třemi měsíci, plánovala odběr
 * hCG, který se dávno konal, a nabízela obsah pro fázi, ve které už žena
 * není.
 *
 * Tenhle modul je jediné místo, kde se rozhoduje, **co je teď pravda**.
 * Odpověď zní: to nejčerstvější, co uživatelka zadala.
 *
 * ---------------------------------------------------------------- PRAVIDLO ---
 * Když běží cyklus, jeho milníky přebíjejí profil. Hodnota z profilu se
 * použije jen tehdy, když v cyklu chybí **a zároveň** není starší než
 * začátek toho cyklu. Datum transferu z minulého cyklu do běžícího nepatří,
 * i kdyby v profilu leželo dál.
 *
 * Uzavřený cyklus nepřispívá ničím. Je to historie a historie se nepočítá
 * do dneška.
 *
 * Profil se nemění. Tohle je pohled na data, ne zápis do nich. Uživatelka
 * si v nastavení pořád vidí a upravuje to, co tam sama napsala.
 */

/**
 * Odběr hCG, od kterého se počítá fáze po pozitivním výsledku.
 *
 * Váže se na transfer, o který teď jde, takže po druhém transferu se
 * nepočítá od bety z toho prvního. V rámci jednoho transferu ale platí
 * **první** pozitivní odběr: je to den, kdy se to žena dozvěděla, a od něj
 * má smysl počítat čekání na první ultrazvuk. Další odběry jsou kontroly
 * téhož těhotenství, ne nová zpráva.
 */
function positiveHcgDate(c: CycleRow, today: IsoDate): IsoDate | null {
  const t = currentTransfer(c, today)
  if (!t || t.outcome !== 'pozitivni') return null

  const mine = bloodTests(c).filter((b) => {
    const d = b.date as IsoDate
    if (d > today) return false
    return b.transferId === t.id || (!b.transferId && t.date !== null && d >= t.date)
  })
  if (mine[0]) return mine[0].date

  /*
   * Výsledek je zapsaný u transferu, ale odběr jako řádek s číslem v cyklu
   * není. Dřív se v takovém případě nestalo nic a aplikace dál počítala
   * dny do hCG, přestože si žena zrovna zapsala, že test vyšel pozitivně.
   *
   * Zápis výsledku je informace. Datum se bere z toho nejpřesnějšího, co
   * o něm víme, a nic se nedomýšlí: plánovaný odběr, jinak den transferu.
   */
  const planovany = t.hcgPlannedOn
  if (planovany && planovany <= today) return planovany
  return t.date && t.date <= today ? t.date : null
}

/**
 * Fáze, která plyne ze zapsaného výsledku.
 *
 * Tohle je ta hlavní věta celé aplikace: co je zapsané v cyklu, to platí.
 * Žena, která si zapíše negativní hCG, nemá dál číst „devátý den po
 * transferu“ a ručně přepínat fázi. Zápis je zdroj pravdy.
 *
 * Pozitivní výsledek tu není: ten jde přes `betaTestOn`, aby se od něj
 * dala počítat cesta k prvnímu ultrazvuku.
 */
const FAZE_TRANSFERU: Record<string, string> = {
  negativni: 'waiting_next_attempt',
  biochemicke: 'loss_biochemical',
  zamlkle: 'loss_missed',
  ztrata: 'loss_miscarriage',
  mimodelozni: 'loss_ectopic',
}

const FAZE_CYKLU: Record<string, string> = {
  ...FAZE_TRANSFERU,
  // Cyklus bez embrya nesmí spadnout na „snažíme se přirozeně“. Ženě, které
  // se nevyvinulo žádné embryo, aplikace nemá hlásit první měsíc snažení.
  bez_embrya: 'waiting_next_attempt',
  zruseno: 'waiting_next_attempt',
  zamrazeno: 'waiting_next_attempt',
}

/** Fáze, ve kterých se počítá den od data ztráty. */
const FAZE_ZTRATY = new Set(['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'loss_ectopic'])

/** Kdy se výsledek dozvěděla. Nejpřesnější dostupné datum, nic vymyšleného. */
function kdyVysledek(c: CycleRow, t: CycleTransfer | null, today: IsoDate): IsoDate | null {
  if (t) {
    const odbery = bloodTests(c).filter(
      (b) => (b.transferId === t.id || !b.transferId) && (b.date as IsoDate) <= today,
    )
    const posledni = odbery.length ? (odbery[odbery.length - 1].date as IsoDate) : null
    const datum = posledni ?? (t.hcgPlannedOn && t.hcgPlannedOn <= today ? t.hcgPlannedOn : t.date)
    return datum && datum <= today ? datum : null
  }
  const datum = c.endedOn ?? c.retrievalOn ?? c.startedOn
  return datum && datum <= today ? datum : null
}

/**
 * Výsledek zapsaný v cyklu, přeložený na fázi a datum.
 *
 * Bere se poslední transfer, který proběhl. Když žádný transfer není nebo
 * ještě čeká na výsledek, rozhodne výsledek celého cyklu. Uzavřený cyklus
 * se tady započítává schválně: je to poslední věc, která se stala.
 */
function vysledekZCyklu(
  cycles: CycleRow[],
  today: IsoDate,
): { phase: string; on: IsoDate } | null {
  const c = defaultCycle(cycles, today)
  if (!c) return null

  const probehle = sortedTransfers(c).filter(
    (t) => !t.cancelled && t.date !== null && t.date <= today,
  )
  const t = probehle.length ? probehle[probehle.length - 1] : null

  if (t && t.outcome !== 'ceka') {
    const faze = FAZE_TRANSFERU[t.outcome]
    const on = kdyVysledek(c, t, today)
    if (faze && on) return { phase: faze, on }
    return null
  }

  // Transfer buď není, nebo pořád čeká. Pak mluví výsledek celého cyklu.
  if (t) return null
  const faze = FAZE_CYKLU[c.outcome]
  const on = kdyVysledek(c, null, today)
  return faze && on ? { phase: faze, on } : null
}

/**
 * Co se dá o ženě přečíst z celé historie cyklů.
 *
 * -------------------------------------------------------------- PROČ TO TU JE ---
 * Karta cyklu byla dlouho slepá ulička. Žena do ní poctivě zapsala, že měla
 * darovaná vajíčka, ICSI, kryotransfer a třetí neúspěch v řadě, a aplikace
 * jí dál nabízela obsah, jako by o ní nevěděla nic. Modifikátory se braly
 * jen z onboardingu, tedy z jediné minuty na začátku, a ta minuta se pak
 * nikdy neaktualizovala.
 *
 * Odsud se proto čtou i **počty a situace**, ne jen data. Zapsaná léčba
 * je tvrdší informace než zaškrtnutí z prvního dne.
 *
 * Nic se nepřepisuje. Ruční volby v nastavení zůstávají a tyhle se k nim
 * přidávají; odebrat se ženě nemůže nic, co si sama zvolila.
 */

/** Proběhl transfer do dneška a nebyl zrušený? */
function probehl(t: CycleTransfer, today: IsoDate): boolean {
  return !t.cancelled && t.date !== null && t.date <= today
}

interface Souhrn {
  /** Cykly, které se opravdu rozjely. Prázdná karta se nepočítá. */
  cyklu: number
  transferu: number
  ztrat: number
  /** Transfery, po kterých nepřišlo těhotenství žádného druhu. */
  bezUhnizdeni: number
  modifikatory: ModifierId[]
  /** Nejnovější neprázdná klinika z historie. */
  klinika: string | null
  /** Nejnovější CD1. Je to poslední menstruace, o které aplikace ví. */
  cd1: IsoDate | null
}

const ICSI_METODY = new Set(['icsi', 'imsi', 'picsi'])
const PGT_METODY = new Set(['pgta', 'pgtm', 'pgtsr'])

function souhrnHistorie(cycles: CycleRow[], today: IsoDate): Souhrn {
  const mods = new Set<ModifierId>()
  let cyklu = 0
  let transferu = 0
  let ztrat = 0
  let bezUhnizdeni = 0
  let klinika: string | null = null
  let cd1: IsoDate | null = null

  const podleData = [...cycles].sort((a, b) => (a.cd1On ?? a.startedOn).localeCompare(b.cd1On ?? b.startedOn))

  for (const c of podleData) {
    const zacal = c.startedOn <= today
    const probehleTransfery = c.transfers.filter((t) => probehl(t, today))

    // Prázdná rozdělaná karta se do počtu cyklů nepočítá. Cyklus začal
    // tehdy, když se něco stalo: stimulace, odběr, nebo transfer.
    const rozjety = Boolean(c.stimStartOn ?? c.retrievalOn) || probehleTransfery.length > 0
    if (zacal && rozjety) cyklu++

    if (zacal && c.clinic.trim()) klinika = c.clinic.trim()
    const den1 = c.cd1On
    if (den1 && den1 <= today && (cd1 === null || den1 > cd1)) cd1 = den1

    // --- způsob léčby, tak jak je zapsaný
    if (c.kind === 'fet') mods.add('frozen_transfer')
    if (c.kind === 'darovane_embryo') mods.add('donor_embryo')
    if (c.eggSource === 'darovane') mods.add('donor_egg')
    if (c.spermSource === 'darovane') mods.add('donor_sperm')
    if (ICSI_METODY.has(c.fertMethod)) mods.add('icsi')
    for (const m of c.methods) {
      if (ICSI_METODY.has(m)) mods.add('icsi')
      if (PGT_METODY.has(m)) mods.add('pgt')
      if (m === 'darvajicka') mods.add('donor_egg')
      if (m === 'darspermie') mods.add('donor_sperm')
      if (m === 'darembryo') mods.add('donor_embryo')
    }

    for (const t of probehleTransfery) {
      transferu++
      if (t.kind === 'kryo') mods.add('frozen_transfer')
      if (t.pgt !== '') mods.add('pgt')
      if ((ZTRATOVE_VYSLEDKY as readonly string[]).includes(t.outcome)) ztrat++
      // Za neúspěch se počítá jen zapsaný negativní výsledek. Transfer,
      // který na výsledek teprve čeká, není neúspěch a nesmí se tak počítat.
      if (t.outcome === 'negativni') bezUhnizdeni++
    }

    // Cyklus bez jediného transferu nese výsledek sám. Ztráta se pak čte
    // z něj, jinak by se žena, která ji zapsala jen na úrovni cyklu,
    // v počtu ztrát neobjevila.
    if (zacal && probehleTransfery.length === 0) {
      if ((ZTRATOVE_VYSLEDKY as readonly string[]).includes(c.outcome)) ztrat++
    }
  }

  if (ztrat > 0) mods.add('after_loss')
  /*
   * Opakovaný neúspěch. Dvě různé věci, obě se tak jmenují.
   *
   * Buď se embryo opakovaně neuchytí (tři a víc transferů bez otěhotnění),
   * nebo se těhotenství opakovaně ztrácí (dvě a víc ztrát). Zdravotně to
   * vede k jinému vyšetřování, ale pro obsah aplikace je společné to, že
   * ženě nemá nikdo psát texty pro první pokus.
   */
  if (bezUhnizdeni >= 3 || ztrat >= 2) mods.add('repeated_failure')

  return { cyklu, transferu, ztrat, bezUhnizdeni, modifikatory: [...mods], klinika, cd1 }
}

/** Do kolikátého dne došlo embryo, které se tímhle transferem přeneslo. */
function embryoDayOf(ids: string[], embryos: Embryo[]): number | null {
  const dny = embryos
    .filter((e) => ids.includes(e.id))
    .map(reachedDay)
    .filter((d): d is number => d !== null)
  return dny.length ? Math.max(...dny) : null
}

/**
 * Profil doplněný o to nejnovější, co uživatelka zapsala do běžícího cyklu.
 *
 * Vrací nový objekt. Původní profil zůstává nedotčený, takže nastavení dál
 * ukazuje a ukládá ruční hodnoty.
 */
export function effectiveProfile(
  profile: Profile,
  cycles: CycleRow[],
  today: IsoDate = todayIso(),
  embryos: Embryo[] = [],
): Profile {
  // Výsledek se čte i z uzavřeného cyklu: uzavřením nepřestal platit.
  const vysledek = vysledekZCyklu(cycles, today)
  const souhrn = souhrnHistorie(cycles, today)

  /*
   * Datum ztráty ze zapsaného výsledku.
   *
   * Bez tohohle řádku fáze ztráty sice naskočila, ale `lossOn` zůstalo
   * prázdné. Všechny čtyři fáze ztráty od něj počítají den, takže den ve
   * fázi byl napořád nula a **žádná denní karta se nemohla trefit**. Žena,
   * která zapsala potrat do karty cyklu, dostala fázi bez obsahu.
   *
   * Vlastní datum z nastavení vyhrává, když je novější: to zapsala ona
   * sama a ví o své ztrátě víc než odvození z odběru hCG.
   */
  const ztrataZVysledku =
    vysledek && FAZE_ZTRATY.has(vysledek.phase) ? vysledek.on : null

  /** Z dvou dat to novější. Pravidlo celého tohohle modulu. */
  const novejsi = (a: IsoDate | null, b: IsoDate | null): IsoDate | null => {
    if (!a) return b
    if (!b) return a
    return a > b ? a : b
  }

  /** Sjednocení ručních modifikátorů a těch, které plynou ze zapsané léčby. */
  const modifiers = [...new Set<ModifierId>([...profile.modifiers, ...souhrn.modifikatory])]

  const spolecne = {
    modifiers,
    ivfCycles: Math.max(profile.ivfCycles, souhrn.cyklu),
    transfersDone: Math.max(profile.transfersDone, souhrn.transferu),
    miscarriages: Math.max(profile.miscarriages, souhrn.ztrat),
    embryosFrozen: Math.max(profile.embryosFrozen, embryos.filter((e) => isAvailable(e)).length),
    clinicName: souhrn.klinika ?? profile.clinicName,
    outcomePhase: vysledek?.phase ?? null,
    outcomeOn: vysledek?.on ?? null,
  }

  const c = activeCycle(cycles, today)
  if (!c) {
    return {
      ...profile,
      ...spolecne,
      lastPeriodOn: novejsi(souhrn.cd1, profile.lastPeriodOn),
      lossOn: novejsi(ztrataZVysledku, profile.lossOn),
    }
  }

  const zacatek = c.cd1On ?? c.startedOn

  /** Ruční hodnota platí, jen když není starší než běžící cyklus. */
  const zProfilu = (d: IsoDate | null): IsoDate | null => (d !== null && d >= zacatek ? d : null)

  const t = currentTransfer(c, today)
  /*
   * Inseminace není transfer.
   *
   * V cyklu typu IUI se do řádku „transfer“ zapisuje samotná inseminace,
   * jiné místo pro ni v kartě není. Kdyby se z ní stalo `transferOn`,
   * aplikace by ženě po inseminaci hlásila dny po embryotransferu a nabízela
   * obsah o embryích, která žádná nejsou.
   */
  const jeIui = c.kind === 'iui'
  const transferOn = jeIui ? zProfilu(profile.transferOn) : (t?.date ?? zProfilu(profile.transferOn))
  const iuiOn = jeIui ? (t?.date ?? zProfilu(profile.iuiOn)) : zProfilu(profile.iuiOn)

  // CD1 běžícího cyklu je poslední menstruace, o které aplikace ví.
  const cd1 = c.cd1On && c.cd1On <= today ? c.cd1On : null

  return {
    ...profile,
    ...spolecne,
    stimulationStartOn: c.stimStartOn ?? zProfilu(profile.stimulationStartOn),
    retrievalOn: c.retrievalOn ?? zProfilu(profile.retrievalOn),
    transferOn,
    betaTestOn: positiveHcgDate(c, today) ?? zProfilu(profile.betaTestOn),
    lastPeriodOn: cd1 ?? zProfilu(profile.lastPeriodOn),
    // Den kultivace patří k transferu, ze kterého se počítá, a k embryu,
    // které se jím přeneslo. Po druhém transferu to bývá jiné číslo:
    // v lednu se přenášela pětka, v srpnu šestka. Ruční hodnota se použije,
    // jen když transfer vede pořád profil.
    embryoDayAtTransfer:
      t?.date && t.date === transferOn
        ? (t.embryoDay ?? embryoDayOf(t.embryoIds, embryos) ?? profile.embryoDayAtTransfer)
        : profile.embryoDayAtTransfer,
    iuiOn,
    /*
     * Ztráta zapsaná v běžícím cyklu platí. Starší ruční datum než začátek
     * cyklu znamená, že se od něj přešlo dál: žena po ztrátě, která začala
     * nový cyklus, není ve fázi ztráty. Je ve stimulaci.
     *
     * Z toho, co zbyde, vyhrává novější. Odvozené datum je odhad z odběru
     * hCG, kdežto to v nastavení napsala ona sama a ví o své ztrátě víc.
     */
    lossOn: novejsi(ztrataZVysledku, zProfilu(profile.lossOn)),
    // Transfer proběhl, ale výsledek v aplikaci není. Fáze se pak nesmí
    // sama překlopit do „čekání na další pokus“: to by znamenalo, že za
    // ženu rozhodl kalendář.
    transferResultPending: Boolean(
      t && t.date && t.date <= today && !t.cancelled && t.outcome === 'ceka',
    ),
  }
}
