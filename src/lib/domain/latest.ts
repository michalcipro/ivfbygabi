import { activeCycle, bloodTests, currentTransfer, type CycleRow } from './cycle'
import { reachedDay, type Embryo } from './embryo'
import { today as todayIso } from './dates'
import type { IsoDate, Profile } from './profile'

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
  return mine[0]?.date ?? null
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
  const c = activeCycle(cycles, today)
  if (!c) return profile

  const zacatek = c.cd1On ?? c.startedOn

  /** Ruční hodnota platí, jen když není starší než běžící cyklus. */
  const zProfilu = (d: IsoDate | null): IsoDate | null => (d !== null && d >= zacatek ? d : null)

  const t = currentTransfer(c, today)
  const transferOn = t?.date ?? zProfilu(profile.transferOn)

  return {
    ...profile,
    stimulationStartOn: c.stimStartOn ?? zProfilu(profile.stimulationStartOn),
    retrievalOn: c.retrievalOn ?? zProfilu(profile.retrievalOn),
    transferOn,
    betaTestOn: positiveHcgDate(c, today) ?? zProfilu(profile.betaTestOn),
    // Den kultivace patří k transferu, ze kterého se počítá, a k embryu,
    // které se jím přeneslo. Po druhém transferu to bývá jiné číslo:
    // v lednu se přenášela pětka, v srpnu šestka. Ruční hodnota se použije,
    // jen když transfer vede pořád profil.
    embryoDayAtTransfer:
      t?.date && t.date === transferOn
        ? (t.embryoDay ?? embryoDayOf(t.embryoIds, embryos) ?? profile.embryoDayAtTransfer)
        : profile.embryoDayAtTransfer,
    // Inseminace ani ztráta nejsou pole cyklu. Starší než běžící cyklus ale
    // znamená, že se od nich přešlo dál: žena po ztrátě, která začala nový
    // cyklus, není ve fázi ztráty. Je ve stimulaci.
    iuiOn: zProfilu(profile.iuiOn),
    lossOn: zProfilu(profile.lossOn),
    // Transfer proběhl, ale výsledek v aplikaci není. Fáze se pak nesmí
    // sama překlopit do „čekání na další pokus“: to by znamenalo, že za
    // ženu rozhodl kalendář.
    transferResultPending: Boolean(
      t && t.date && t.date <= today && !t.cancelled && t.outcome === 'ceka',
    ),
  }
}
