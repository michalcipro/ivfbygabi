/**
 * Příznaky po tělesných systémech.
 *
 * Devět plochých štítků nestačilo. Žena ve stimulaci rozliší tlak v podbřišku
 * od píchání ve vaječnících a bolest v místě vpichu od modřiny — a když to
 * aplikace neumí zapsat, zapíše se to jako „bolest" a informace se ztratí.
 *
 * Členění vychází z toho, co v IVF skutečně nastává, ne z obecného seznamu
 * příznaků. Proto je zvlášť kategorie „Léky": vpichy a čípky jsou v léčbě
 * denní realita a jejich potíže mají jinou váhu než hormonální.
 *
 * Šestnáct skupin v pořadí, ve kterém se ukazují:
 * Hormony, Léky, Pánev, Bolest, Krvácení, Nadýmání, Prsa, Únava, Spánek,
 * Nálada, Úzkost, Trávení, Neurologie, Kůže, Váha, Energie.
 * Sedmnáctou skupinu „Vlastní" si doplní každá sama — viz groupsWithCustom().
 *
 * Id příznaků se NIKDY nemění. Uživatelka má pod nimi zapsané měsíce dat,
 * takže se příznaky mezi skupinami jen přesouvají, nepřejmenovávají.
 * Ze stejného důvodu se nekryjí ani id skupin s id příznaků
 * (proto skupina „Prsa" má id `poprsi` a „Nadýmání" id `nafouknuti`).
 *
 * Čistý modul bez závislostí, aby stejná data platila na serveru i v klientovi.
 *
 * AKCE: žádné — modul nevrací HTML.
 * CSS: žádná nová třída. `intensityTone()` vrací jen název už existujícího
 * tokenu (--s2 / --s1 / --s3), volající si ho zabalí do var().
 */

export interface Symptom {
  id: string
  label: string
  /**
   * Příznak, který sám o sobě nic neznamená, ale v kombinaci s dalšími
   * v téhle skupině je důvod ozvat se klinice. Text se ukáže hned po
   * zaškrtnutí. Neurčuje diagnózu — u hyperstimulace zazní její jméno jen
   * proto, aby žena věděla, co má na telefonu říct.
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
  'Rychlý přírůstek váhy, tvrdé nafouklé břicho a hlavně dušnost po stimulaci mohou být příznaky hyperstimulace (OHSS). Není to důvod k panice, ale zavolejte na kliniku ještě dnes, nečekejte do rána.'

/**
 * Krvácení. Nesmí říkat, co se děje — jen kdy zvednout telefon.
 * Neexportuje se, ven se dostane přes warningsFor().
 */
const BLEEDING_WARNING =
  'Krvácení, které během hodiny prosákne vložku, nebo krvácení se sraženinami patří klinice hned. Mimo ordinační hodiny volejte na pohotovost — nečekejte do rána.'

/** Bolest, u které se nečeká, jestli přejde. */
const PAIN_WARNING =
  'Bolest, na kterou nic nezabírá nebo se stupňuje, je důvod ozvat se klinice hned a mimo ordinační hodiny jet na pohotovost. Nečekejte do rána.'

/** Bolest do ramene po zákroku. Krátká věta, ať se nedá přehlédnout. */
const SHOULDER_WARNING =
  'Bolest, která po odběru nebo transferu vystřeluje do ramene či mezi lopatky, patří klinice ještě dnes. Ozvěte se i tehdy, když vás jinak nic netrápí.'

export const SYMPTOM_GROUPS: SymptomGroup[] = [
  {
    id: 'hormonalni',
    name: 'Hormony',
    hint: 'Stimulace, blokáda i podpora — co dělají hladiny',
    items: [
      { id: 'navaly', label: 'návaly horka' },
      { id: 'noc-poceni', label: 'noční pocení' },
      { id: 'zimomrivost', label: 'zimomřivost' },
      { id: 'sucho-intim', label: 'vaginální suchost' },
      { id: 'libido', label: 'snížené libido' },
      { id: 'pms', label: 'jako před menstruací' },
    ],
  },
  {
    id: 'po-lecich',
    name: 'Léky',
    hint: 'Vpichy, čípky, náplasti a sprej',
    items: [
      { id: 'vpich-bolest', label: 'bolest v místě vpichu' },
      { id: 'vpich-zarudnuti', label: 'zarudnutí' },
      { id: 'vpich-modrina', label: 'modřina' },
      { id: 'vpich-boule', label: 'boule pod kůží' },
      { id: 'vpich-svedeni', label: 'svědění nebo pálení' },
      { id: 'lek-nevolnost', label: 'nevolnost po léku' },
      { id: 'cipek-vytok', label: 'výtok po čípku nebo gelu' },
      { id: 'naplast-drazdeni', label: 'podráždění pod náplastí' },
      { id: 'ucpany-nos', label: 'ucpaný nos po spreji' },
    ],
  },
  {
    id: 'podbrisek',
    name: 'Pánev',
    hint: 'Vaječníky, děloha, podbřišek',
    items: [
      { id: 'tlak', label: 'tlak v podbřišku' },
      { id: 'pichani', label: 'píchání ve vaječnících' },
      { id: 'krece', label: 'křeče' },
      { id: 'tiha-panev', label: 'tíha v pánvi' },
      { id: 'bolest-pohyb', label: 'bolest při pohybu' },
      { id: 'tlak-mechyr', label: 'tlak na močový měchýř' },
      { id: 'bolest-sex', label: 'bolest při sexu' },
      { id: 'vytok', label: 'změna výtoku' },
      {
        id: 'bolest-prudka',
        label: 'prudká jednostranná bolest',
        warn: 'Prudká jednostranná bolest po stimulaci nebo odběru je důvod ozvat se klinice hned. Zvětšené vaječníky se mohou zkroutit (torze) a to je akutní stav.',
      },
    ],
  },
  {
    id: 'bolest',
    name: 'Bolest',
    hint: 'Bolest jinde než v podbřišku',
    items: [
      { id: 'bolest-kriz', label: 'bolest v kříži' },
      { id: 'bolest-svaly', label: 'bolest svalů a kloubů' },
      { id: 'bolest-po-odberu', label: 'bolest po odběru' },
      { id: 'bolest-moceni', label: 'pálení při močení' },
      { id: 'bolest-rameno', label: 'bolest vystřelující do ramene', warn: SHOULDER_WARNING },
      { id: 'bolest-nesnesitelna', label: 'nesnesitelná bolest', warn: PAIN_WARNING },
    ],
  },
  {
    id: 'krvaceni',
    name: 'Krvácení',
    hint: 'Špinění i krvácení — barva a síla',
    items: [
      { id: 'spineni', label: 'špinění' },
      { id: 'spineni-hnede', label: 'hnědé špinění' },
      { id: 'spineni-po-cipku', label: 'špinění po čípku' },
      { id: 'krvaceni-transfer', label: 'krvácení po transferu' },
      { id: 'menstruace', label: 'menstruační krvácení' },
      { id: 'krvaceni-silne', label: 'silné krvácení', warn: BLEEDING_WARNING },
      { id: 'krvaceni-srazeniny', label: 'sraženiny v krvi', warn: BLEEDING_WARNING },
    ],
  },
  {
    id: 'nafouknuti',
    name: 'Nadýmání',
    hint: 'Břicho, plyny, otoky',
    items: [
      { id: 'nadymani', label: 'nadýmání' },
      { id: 'plyny', label: 'plyny' },
      { id: 'kalhoty', label: 'kalhoty nejdou zapnout' },
      { id: 'otoky', label: 'otoky nohou nebo rukou' },
      { id: 'mocim-min', label: 'močím míň než obvykle' },
      { id: 'bricho-tvrde', label: 'tvrdé napnuté břicho', warn: OHSS_WARNING },
      { id: 'dusnost', label: 'dušnost', warn: OHSS_WARNING },
    ],
  },
  {
    id: 'poprsi',
    name: 'Prsa',
    hint: 'Ozývají se první a drží nejdéle',
    items: [
      { id: 'prsa', label: 'citlivá prsa' },
      { id: 'prsa-napeti', label: 'napětí a tíha' },
      { id: 'prsa-bradavky', label: 'citlivé bradavky' },
      { id: 'prsa-pichani', label: 'píchání v prsou' },
      { id: 'prsa-vetsi', label: 'prsa jsou větší' },
      { id: 'prsa-zily', label: 'viditelnější žíly' },
    ],
  },
  {
    id: 'vycerpani',
    name: 'Únava',
    hint: 'Jak moc došly síly',
    items: [
      { id: 'unava', label: 'únava celý den' },
      { id: 'rano-vycerpani', label: 'ráno bez energie' },
      { id: 'unava-naraz', label: 'únava přijde naráz' },
      { id: 'unava-po-cinnosti', label: 'vyčerpání po běžné činnosti' },
      { id: 'tiha-telo', label: 'tíha v celém těle' },
      { id: 'slabost-nohy', label: 'slabost v nohou' },
    ],
  },
  {
    id: 'spanek',
    name: 'Spánek',
    hint: 'Noc, která rozhoduje o celém dni',
    items: [
      { id: 'nespavost', label: 'nespavost' },
      { id: 'usinani-tezke', label: 'těžké usínání' },
      { id: 'buzeni', label: 'buzení v noci' },
      { id: 'buzeni-mocenim', label: 'buzení na záchod' },
      { id: 'brzke-probuzeni', label: 'probuzení před budíkem' },
      { id: 'sny-zive', label: 'živé sny' },
      { id: 'spanek-den', label: 'potřeba spát přes den' },
    ],
  },
  {
    id: 'nalada',
    name: 'Nálada',
    hint: 'Hormony hýbou náladou, není to slabost',
    items: [
      { id: 'vykyvy', label: 'výkyvy nálad' },
      { id: 'placnost', label: 'plačtivost' },
      { id: 'podrazdenost', label: 'podrážděnost' },
      { id: 'smutek', label: 'smutek bez důvodu' },
      { id: 'vztek', label: 'vztek na okolí' },
      { id: 'otupelost', label: 'otupělost' },
      { id: 'vina', label: 'pocit viny' },
    ],
  },
  {
    id: 'uzkost',
    name: 'Úzkost',
    hint: 'Čekání dělá svoje',
    items: [
      { id: 'uzkost-telo', label: 'sevření na hrudi z nervů' },
      { id: 'tlak-hrudi', label: 'tlak na hrudi' },
      { id: 'buseni-srdce', label: 'bušení srdce' },
      { id: 'tres-rukou', label: 'třes rukou' },
      { id: 'strach-vysledek', label: 'strach z výsledku' },
      { id: 'mysleni-nejhorsi', label: 'myšlenky na nejhorší' },
      { id: 'panika', label: 'panika' },
    ],
  },
  {
    id: 'traveni',
    name: 'Trávení',
    hint: 'Progesteron zpomaluje střeva',
    items: [
      { id: 'nevolnost', label: 'nevolnost' },
      { id: 'zvraceni', label: 'zvracení' },
      { id: 'zacpa', label: 'zácpa' },
      { id: 'prujem', label: 'průjem' },
      { id: 'palena-zaha', label: 'pálení žáhy' },
      { id: 'nechutenstvi', label: 'nechutenství' },
      { id: 'vlci-hlad', label: 'vlčí hlad' },
      { id: 'pachy', label: 'citlivost na pachy' },
      { id: 'kovova-chut', label: 'kovová chuť v ústech' },
    ],
  },
  {
    id: 'hlava',
    name: 'Hlava',
    hint: 'Hlava a nervy při změnách hladin',
    items: [
      { id: 'bolest-hlavy', label: 'bolest hlavy' },
      { id: 'migrena', label: 'migréna' },
      { id: 'zavrat', label: 'závrať' },
      { id: 'mlha', label: 'mlha v hlavě' },
      { id: 'mravenceni', label: 'mravenčení' },
      { id: 'svetlo-citlivost', label: 'citlivost na světlo' },
      { id: 'huceni-usi', label: 'hučení v uších' },
      { id: 'cukani-vicka', label: 'cukání víčka' },
    ],
  },
  {
    id: 'kuze',
    name: 'Kůže',
    hint: 'Vidět je to i na pleti a vlasech',
    items: [
      { id: 'akne', label: 'akné' },
      { id: 'sucha-kuze', label: 'suchá kůže' },
      { id: 'mastna-plet', label: 'mastná pleť' },
      { id: 'svedeni-kuze', label: 'svědění kůže' },
      { id: 'vyrazka', label: 'vyrážka' },
      { id: 'vlasy', label: 'vypadávání vlasů' },
      { id: 'pigment', label: 'tmavší skvrny' },
    ],
  },
  {
    id: 'vaha',
    name: 'Váha',
    hint: 'Sleduje se rychlost, ne číslo',
    items: [
      { id: 'vaha-nahoru', label: 'váha pomalu stoupá' },
      { id: 'vaha-dolu', label: 'váha klesá' },
      { id: 'vaha-kolisa', label: 'váha kolísá ze dne na den' },
      { id: 'obleceni', label: 'oblečení sedí jinak' },
      { id: 'vaha-rychle', label: 'rychlý přírůstek váhy', warn: OHSS_WARNING },
    ],
  },
  {
    id: 'energie',
    name: 'Energie',
    hint: 'Kolik zbývá a na co stačí',
    items: [
      { id: 'energie-vlny', label: 'energie ve vlnách' },
      { id: 'energie-dopoledne', label: 'síla jen dopoledne' },
      { id: 'energie-po-jidle', label: 'útlum po jídle' },
      { id: 'energie-pohyb', label: 'na pohyb nemám sílu' },
      { id: 'energie-lidi', label: 'na lidi nemám sílu' },
      { id: 'energie-navrat', label: 'energie se vrací' },
    ],
  },
]

/** Id skupiny, pod kterou spadají příznaky, které si uživatelka přidala sama. */
export const CUSTOM_GROUP_ID = 'vlastni'

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

/**
 * Hledání v celém seznamu — bez diakritiky a bez ohledu na velikost písmen.
 *
 * Hledá se i v názvu a popisku skupiny: kdo napíše „úzkost“, čeká celou
 * skupinu Úzkost, ne prázdno jenom proto, že se tak nejmenuje žádný příznak.
 */
export function searchSymptoms(query: string): Symptom[] {
  const q = normalize(query)
  if (!q) return []
  const out: Symptom[] = []
  const seen = new Set<string>()
  for (const g of SYMPTOM_GROUPS) {
    const groupHit = normalize(g.name).includes(q) || normalize(g.hint).includes(q)
    for (const s of g.items) {
      if (!(groupHit || normalize(s.label).includes(q))) continue
      if (seen.has(s.id)) continue
      seen.add(s.id)
      out.push(s)
    }
  }
  return out
}

/** Skupina, do které příznak patří. */
export function groupOf(id: string): SymptomGroup | null {
  const groupId = SYMPTOM_BY_ID[id]?.group
  if (!groupId) return null
  return SYMPTOM_GROUPS.find((g) => g.id === groupId) ?? null
}

/** Stupnice intenzity 0–10 rozdělená na pásma s popiskem. */
export function intensityLabel(n: number): string {
  const v = clampIntensity(n)
  if (v === 0) return 'nic'
  if (v <= 3) return 'mírné'
  if (v <= 6) return 'znatelné'
  if (v <= 8) return 'silné'
  return 'nesnesitelné'
}

/**
 * Barevný token pro intenzitu — název CSS proměnné bez var().
 * Nula je `null`: „nic“ nemá dostat barvu, jinak vypadá jako mírný příznak.
 */
export function intensityTone(n: number): '--s2' | '--s1' | '--s3' | null {
  const v = clampIntensity(n)
  if (v === 0) return null
  if (v <= 3) return '--s2'
  if (v <= 6) return '--s1'
  return '--s3'
}

/**
 * Skupiny i s vlastními příznaky uživatelky.
 *
 * Vlastní příznak se přidá do skupiny, kterou má zapsanou v `group`.
 * Když taková skupina neexistuje (nebo je pole prázdné), skončí ve skupině
 * „Vlastní" na konci. Ta se ukáže jen tehdy, když v ní něco je — prázdná
 * harmonika je jen šum.
 */
export function groupsWithCustom(
  custom: { id: string; label: string; group: string }[],
): SymptomGroup[] {
  if (custom.length === 0) return SYMPTOM_GROUPS
  const own: Symptom[] = []
  const groups = SYMPTOM_GROUPS.map((g) => ({ ...g, items: [...g.items] }))
  for (const c of custom) {
    const target = groups.find((g) => g.id === c.group)
    if (target) target.items.push({ id: c.id, label: c.label })
    else own.push({ id: c.id, label: c.label })
  }
  if (own.length > 0) {
    groups.push({
      id: CUSTOM_GROUP_ID,
      name: 'Vlastní',
      hint: 'Co jste si přidala sama',
      items: own,
    })
  }
  return groups
}

/** Mimo rozsah 0–10 se nic nekreslí ani nepopisuje jinak než na kraji stupnice. */
function clampIntensity(n: number): number {
  if (!Number.isFinite(n)) return 0
  return Math.min(10, Math.max(0, Math.round(n)))
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
