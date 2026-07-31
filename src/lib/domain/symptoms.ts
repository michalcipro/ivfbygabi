/**
 * Příznaky po tělesných systémech.
 *
 * Devět plochých štítků nestačilo. Žena ve stimulaci rozliší tlak v podbřišku
 * od píchání ve vaječnících a bolest v místě vpichu od modřiny — a když to
 * aplikace neumí zapsat, zapíše se to jako „bolest" a informace se ztratí.
 *
 * Členění vychází z toho, co v IVF skutečně nastává, ne z obecného seznamu
 * příznaků. Proto je zvlášť kategorie „po lécích": vpichy jsou v léčbě denní
 * realita a jejich potíže mají jinou váhu než hormonální.
 *
 * Čistý modul bez závislostí, aby stejná data platila na serveru i v klientovi.
 */

export interface Symptom {
  id: string
  label: string
  /**
   * Příznak, který sám o sobě nic neznamená, ale v kombinaci s dalšími
   * v téhle skupině je důvod ozvat se klinice. Text se ukáže hned po
   * zaškrtnutí — nediagnostikuje, jen říká, kdy zavolat.
   */
  warn?: string
}

export interface SymptomGroup {
  id: string
  name: string
  /** Kdy tahle skupina dává smysl. Ukazuje se drobně pod názvem. */
  hint: string
  items: Symptom[]
}

/** Věta, která se ukáže u příznaků s varováním. Jedna a stejná, ať si ji spojí. */
export const OHSS_WARNING =
  'Rychlý přírůstek váhy, tvrdé nafouklé břicho a hlavně dušnost po stimulaci mohou být příznaky hyperstimulace (OHSS). Není to důvod k panice, ale je to důvod zavolat na kliniku ještě dnes — ne čekat do rána.'

export const SYMPTOM_GROUPS: SymptomGroup[] = [
  {
    id: 'hormonalni',
    name: 'Hormonální',
    hint: 'Co dělají hormony s náladou a tělem',
    items: [
      { id: 'navaly', label: 'návaly horka' },
      { id: 'vykyvy', label: 'výkyvy nálad' },
      { id: 'placnost', label: 'plačtivost' },
      { id: 'podrazdenost', label: 'podrážděnost' },
      { id: 'prsa', label: 'citlivá prsa' },
      { id: 'libido', label: 'snížené libido' },
      { id: 'uzkost-telo', label: 'sevření na hrudi z nervů' },
    ],
  },
  {
    id: 'po-lecich',
    name: 'Po lécích a vpiších',
    hint: 'Místo vpichu a reakce na léky',
    items: [
      { id: 'vpich-bolest', label: 'bolest v místě vpichu' },
      { id: 'vpich-zarudnuti', label: 'zarudnutí' },
      { id: 'vpich-modrina', label: 'modřina' },
      { id: 'vpich-boule', label: 'boule pod kůží' },
      { id: 'vpich-svedeni', label: 'svědění nebo pálení' },
      { id: 'lek-nevolnost', label: 'nevolnost po léku' },
    ],
  },
  {
    id: 'podbrisek',
    name: 'Podbřišek a pánev',
    hint: 'Nejčastější oblast ve stimulaci i po odběru',
    items: [
      { id: 'tlak', label: 'tlak v podbřišku' },
      { id: 'pichani', label: 'píchání ve vaječnících' },
      { id: 'krece', label: 'křeče' },
      { id: 'bolest-pohyb', label: 'bolest při pohybu' },
      { id: 'spineni', label: 'špinění' },
      { id: 'vytok', label: 'změna výtoku' },
      {
        id: 'bolest-prudka',
        label: 'prudká jednostranná bolest',
        warn: 'Prudká jednostranná bolest po stimulaci nebo odběru je důvod ozvat se klinice hned. Zvětšené vaječníky se mohou zkroutit (torze) a to je akutní stav.',
      },
    ],
  },
  {
    id: 'spanek',
    name: 'Spánek a únava',
    hint: 'Vstupuje do rezervy nejvíc ze všeho',
    items: [
      { id: 'nespavost', label: 'nespavost' },
      { id: 'buzeni', label: 'buzení v noci' },
      { id: 'rano-vycerpani', label: 'ráno bez energie' },
      { id: 'spanek-den', label: 'potřeba spát přes den' },
      { id: 'unava', label: 'únava celý den' },
    ],
  },
  {
    id: 'hlava',
    name: 'Hlava a nervy',
    hint: 'Časté při změnách hladin hormonů',
    items: [
      { id: 'bolest-hlavy', label: 'bolest hlavy' },
      { id: 'migrena', label: 'migréna' },
      { id: 'zavrat', label: 'závrať' },
      { id: 'mlha', label: 'mlha v hlavě' },
      { id: 'mravenceni', label: 'mravenčení' },
    ],
  },
  {
    id: 'traveni',
    name: 'Trávení',
    hint: 'Nadýmání je ve stimulaci pravidlo, ne výjimka',
    items: [
      { id: 'nadymani', label: 'nadýmání' },
      { id: 'nevolnost', label: 'nevolnost' },
      { id: 'zacpa', label: 'zácpa' },
      { id: 'prujem', label: 'průjem' },
      { id: 'palena-zaha', label: 'pálení žáhy' },
      { id: 'nechutenstvi', label: 'nechutenství' },
      { id: 'zvraceni', label: 'zvracení' },
    ],
  },
  {
    id: 'voda-kuze',
    name: 'Zadržování vody, váha a kůže',
    hint: 'Tady se sleduje hlavně rychlost změny',
    items: [
      { id: 'otoky', label: 'otoky nohou nebo rukou' },
      {
        id: 'vaha-rychle',
        label: 'rychlý přírůstek váhy',
        warn: OHSS_WARNING,
      },
      {
        id: 'bricho-tvrde',
        label: 'tvrdé napnuté břicho',
        warn: OHSS_WARNING,
      },
      { id: 'akne', label: 'akné' },
      { id: 'sucha-kuze', label: 'suchá kůže' },
    ],
  },
  {
    id: 'dychani',
    name: 'Dýchání',
    hint: 'Malá skupina, ale ta nejdůležitější',
    items: [
      {
        id: 'dusnost',
        label: 'dušnost',
        warn: OHSS_WARNING,
      },
      { id: 'tlak-hrudi', label: 'tlak na hrudi' },
      { id: 'ucpany-nos', label: 'ucpaný nos' },
    ],
  },
]

/** Rychlé dohledání příznaku podle id. */
export const SYMPTOM_BY_ID: Record<string, Symptom & { group: string }> = {}
for (const g of SYMPTOM_GROUPS) {
  for (const s of g.items) SYMPTOM_BY_ID[s.id] = { ...s, group: g.id }
}

/** Všechna varování, která platí pro zadanou sadu zaškrtnutých příznaků. */
export function warningsFor(ids: string[]): string[] {
  const out = new Set<string>()
  for (const id of ids) {
    const w = SYMPTOM_BY_ID[id]?.warn
    if (w) out.add(w)
  }
  return [...out]
}

/** Hledání v celém seznamu — bez diakritiky a bez ohledu na velikost písmen. */
export function searchSymptoms(query: string): Symptom[] {
  const q = normalize(query)
  if (!q) return []
  const out: Symptom[] = []
  for (const g of SYMPTOM_GROUPS) {
    for (const s of g.items) if (normalize(s.label).includes(q)) out.push(s)
  }
  return out
}

function normalize(s: string): string {
  // Pozor: rozsah kombinovaných diakritických znamének se zapisuje kódy,
  // ne přímo — literál by se v souboru sám složil s předchozím písmenem.
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}
