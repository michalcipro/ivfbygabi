import type { LabParameter } from '../content/types'

/**
 * Katalog laboratorních parametrů.
 *
 * Slouží ke třem věcem:
 *  1. rozpoznání hodnot v nahrané zprávě (patterns),
 *  2. vysvětlení parametru lidsky (explain),
 *  3. vykreslení grafu vývoje v čase.
 *
 * Referenční rozmezí jsou ORIENTAČNÍ. Každá laboratoř má vlastní normy
 * a hodnota se vždy interpretuje v kontextu cyklu, věku a diagnózy.
 * Nikde v aplikaci se z toho nedělá závěr — jen kontext k rozhovoru s lékařem.
 */

export const LAB_PARAMS: LabParameter[] = [
  {
    key: 'amh',
    name: 'AMH',
    unit: 'ng/ml',
    patterns: ['amh', 'anti-mullerian', 'antimulleriansky', 'anti müller'],
    reference: {
      low: 1.0,
      high: 4.0,
      note: 'Orientační rozmezí pro reprodukční věk. Hodnotí se vždy spolu s věkem a počtem antrálních folikulů.',
    },
    explain:
      'Anti-Müllerian hormon vypovídá o ovariální rezervě — tedy zhruba o tom, kolik vajíček ve vaječnících ještě čeká. Neříká nic o kvalitě vajíček ani o tom, jestli otěhotníte. Používá se hlavně k odhadu, jak budete reagovat na stimulaci a jaký protokol zvolit.',
    topics: ['hormony', 'vysledky'],
    context: 'general',
    trend: 'falling',
  },
  {
    key: 'fsh',
    name: 'FSH',
    unit: 'IU/l',
    patterns: ['fsh', 'folikulostimulacni', 'folitropin'],
    reference: {
      low: 3,
      high: 10,
      note: 'Měří se typicky 2.–4. den cyklu. Mimo toto okno má jiný význam.',
    },
    explain:
      'Folikulostimulační hormon rozjíždí zrání folikulů. Vyšší hodnota na začátku cyklu může znamenat, že vaječníky potřebují víc pobízení. Vždy se čte spolu s estradiolem — vysoký estradiol může FSH falešně „stlačit“.',
    topics: ['hormony', 'vysledky'],
    context: 'cycle',
  },
  {
    key: 'lh',
    name: 'LH',
    unit: 'IU/l',
    patterns: ['lh', 'luteinizacni', 'lutropin'],
    reference: { low: 2, high: 12, note: 'V polovině cyklu fyziologicky prudce stoupá (LH pík).' },
    explain:
      'Luteinizační hormon spouští ovulaci. Jeho prudký vzestup zachytávají ovulační testy. Trvale zvýšený poměr LH k FSH bývá jedním ze znaků PCOS.',
    topics: ['hormony', 'vysledky'],
    context: 'cycle',
  },
  {
    key: 'estradiol',
    name: 'Estradiol (E2)',
    unit: 'pmol/l',
    patterns: ['estradiol', 'e2', 'oestradiol'],
    reference: {
      note: 'Během stimulace fyziologicky prudce roste — zhruba odpovídá počtu zrajících folikulů.',
    },
    explain:
      'Estradiol tvoří rostoucí folikuly. Během stimulace se sleduje jeho vzestup jako známka, že vaječníky reagují. Velmi rychlý nárůst může být jedním ze signálů rizika OHSS — proto se hlídá spolu s ultrazvukem.',
    topics: ['hormony', 'stimulace', 'vysledky'],
    context: 'cycle',
    trend: 'rising',
  },
  {
    key: 'progesteron',
    name: 'Progesteron',
    unit: 'nmol/l',
    patterns: ['progesteron', 'p4'],
    reference: {
      note: 'Význam má jen ve vztahu k fázi cyklu a k tomu, jestli užíváte podporu luteální fáze.',
    },
    explain:
      'Progesteron připravuje sliznici na uhnízdění a udržuje ji. Po transferu se často doplňuje léky, takže naměřená hodnota odráží i tuto podporu. Jedna izolovaná hodnota se špatně interpretuje — sledujte spíš vývoj.',
    topics: ['hormony', 'transfer', 'cekani'],
    context: 'cycle',
  },
  {
    key: 'beta_hcg',
    name: 'Beta HCG',
    unit: 'IU/l',
    patterns: ['hcg', 'beta hcg', 'b-hcg', 'β-hcg', 'choriogonadotropin'],
    reference: {
      note: 'V rané fázi se sleduje především zdvojení hodnoty zhruba za 48–72 hodin, ne absolutní číslo.',
    },
    explain:
      'Beta HCG tvoří vyvíjející se placenta. V prvních týdnech je důležitější dynamika než jedna hodnota — proto se odběr obvykle opakuje. Rozptyl mezi zdravými těhotenstvími je obrovský, srovnávat své číslo s cizím nedává smysl.',
    topics: ['cekani', 'vysledky', 'tehotenstvi'],
    context: 'pregnancy',
    trend: 'rising',
  },
  {
    key: 'tsh',
    name: 'TSH',
    unit: 'mIU/l',
    patterns: ['tsh', 'thyreotropin'],
    reference: {
      low: 0.4,
      high: 4.0,
      note: 'Při plánování těhotenství a v těhotenství se často cílí na nižší hodnoty. Cíl určuje lékař.',
    },
    explain:
      'TSH ukazuje, jak pracuje štítná žláza. Její funkce ovlivňuje ovulaci i průběh těhotenství, proto se před léčbou i v jejím průběhu kontroluje.',
    topics: ['hormony', 'vysledky'],
    context: 'general',
  },
  {
    key: 'ft4',
    name: 'fT4',
    unit: 'pmol/l',
    patterns: ['ft4', 'volny t4', 'tyroxin'],
    reference: { low: 10, high: 22, note: 'Čte se spolu s TSH.' },
    explain:
      'Volný tyroxin je hormon štítné žlázy. Doplňuje obraz, který dává TSH — teprve obě hodnoty dohromady říkají, jestli štítná žláza pracuje, jak má.',
    topics: ['hormony', 'vysledky'],
    context: 'general',
  },
  {
    key: 'prolaktin',
    name: 'Prolaktin',
    unit: 'mIU/l',
    patterns: ['prolaktin', 'prl'],
    reference: {
      note: 'Ovlivňuje ho stres z odběru i denní doba. Zvýšenou hodnotu je vhodné ověřit opakovaně.',
    },
    explain:
      'Prolaktin je hormon spojený s tvorbou mléka. Trvale zvýšená hladina může narušovat ovulaci. Jednorázově zvýšená hodnota často znamená jen stres nebo špatné načasování odběru.',
    topics: ['hormony', 'vysledky'],
    context: 'general',
  },
  {
    key: 'testosteron',
    name: 'Testosteron',
    unit: 'nmol/l',
    patterns: ['testosteron'],
    reference: { note: 'U žen se hodnotí spolu s dalšími androgeny.' },
    explain:
      'U žen se sleduje hlavně v souvislosti s PCOS. Zvýšené androgeny mohou souviset s nepravidelnou ovulací, akné nebo zvýšeným ochlupením.',
    topics: ['hormony', 'vysledky'],
    context: 'general',
  },
  {
    key: 'vitamin_d',
    name: 'Vitamin D',
    unit: 'nmol/l',
    patterns: ['vitamin d', '25-oh', 'kalcidiol', 'vit. d'],
    reference: { low: 75, high: 150, note: 'V našich zeměpisných šířkách bývá v zimě nízký.' },
    explain:
      'Vitamin D se běžně doplňuje před léčbou i v těhotenství. Nedostatek je u nás velmi častý. Dávkování vždy určuje lékař podle naměřené hodnoty.',
    topics: ['vysledky', 'strava'],
    context: 'general',
  },
  {
    key: 'sperm_concentration',
    name: 'Koncentrace spermií',
    unit: 'mil/ml',
    patterns: ['koncentrace', 'pocet spermii', 'concentration'],
    reference: { low: 16, note: 'Orientační dolní referenční mez podle metodiky WHO.' },
    explain:
      'Kolik spermií je v jednom mililitru ejakulátu. Jeden nález nestačí — hodnoty kolísají podle abstinence, nemoci i stresu, proto se vyšetření obvykle opakuje.',
    topics: ['vysledky'],
    context: 'male',
  },
  {
    key: 'sperm_motility',
    name: 'Pohyblivost spermií',
    unit: '%',
    patterns: ['motilita', 'pohyblivost', 'progresivni motilita'],
    reference: { low: 30, note: 'Sleduje se hlavně podíl progresivně pohyblivých spermií.' },
    explain:
      'Podíl spermií, které se aktivně pohybují vpřed. Při snížené pohyblivosti se často volí ICSI, kdy embryolog vybere spermii a vpraví ji přímo do vajíčka.',
    topics: ['vysledky', 'embryologie'],
    context: 'male',
  },
  {
    key: 'sperm_morphology',
    name: 'Morfologie spermií',
    unit: '%',
    patterns: ['morfologie', 'normalni formy'],
    reference: { low: 4, note: 'Hodnotí se podle přísných (Krugerových) kritérií.' },
    explain:
      'Podíl spermií s normálním tvarem. Nízké číslo zní hůř, než jak se často projeví — hodnotí se vždy spolu s koncentrací a pohyblivostí.',
    topics: ['vysledky', 'embryologie'],
    context: 'male',
  },
  {
    key: 'dfi',
    name: 'Fragmentace DNA spermií (DFI)',
    unit: '%',
    patterns: ['dfi', 'fragmentace dna'],
    reference: { high: 15, note: 'Vyšší podíl fragmentace se dává do souvislosti s kvalitou embryí.' },
    explain:
      'Ukazuje, jak poškozená je genetická informace ve spermiích. Bývá ovlivnitelná životosprávou, léčbou varikokély nebo antioxidanty — konkrétní postup patří do rukou androloga.',
    topics: ['vysledky', 'genetika'],
    context: 'male',
  },
  {
    key: 'hb',
    name: 'Hemoglobin',
    unit: 'g/l',
    patterns: ['hemoglobin', 'hgb', 'hb'],
    reference: { low: 120, high: 160, note: 'V těhotenství fyziologicky mírně klesá.' },
    explain:
      'Ukazuje, jestli nemáte chudokrevnost. V těhotenství a po porodu se sleduje pravidelně — nízká hodnota vysvětluje velkou část únavy.',
    topics: ['vysledky', 'tehotenstvi', 'sestinedeli'],
    context: 'general',
  },
  {
    key: 'ferritin',
    name: 'Feritin',
    unit: 'µg/l',
    patterns: ['feritin', 'ferritin'],
    reference: { low: 30, note: 'Zásoby železa. Doplňuje obraz, který dává hemoglobin.' },
    explain:
      'Feritin ukazuje zásobní železo. Může být nízký ještě dřív, než klesne hemoglobin — a projevit se únavou nebo vypadáváním vlasů.',
    topics: ['vysledky', 'strava'],
    context: 'general',
  },
  {
    key: 'glukoza',
    name: 'Glykémie nalačno',
    unit: 'mmol/l',
    patterns: ['glukoza', 'glykemie', 'glucose', 'ogtt'],
    reference: { low: 3.3, high: 5.5, note: 'V těhotenství platí přísnější cílové hodnoty.' },
    explain:
      'Hladina cukru v krvi. V těhotenství se dělá oGTT, protože gestační diabetes obvykle nebolí a nic se navenek neprojeví — proto se testuje plošně.',
    topics: ['vysledky', 'rizikove'],
    context: 'pregnancy',
  },
  {
    key: 'bilirubin',
    name: 'Bilirubin (novorozenec)',
    unit: 'µmol/l',
    patterns: ['bilirubin', 'tsb'],
    reference: { note: 'Hodnotí se vždy podle hodin života a gestačního věku dítěte, ne samostatně.' },
    explain:
      'Novorozenecká žloutenka je velmi častá. Zda je potřeba fototerapie, se rozhoduje podle grafu, který kombinuje hodnotu, stáří v hodinách a zralost dítěte.',
    topics: ['zdravi_ditete', 'nicu', 'nedonosenost'],
    context: 'baby',
  },
  {
    key: 'crp',
    name: 'CRP',
    unit: 'mg/l',
    patterns: ['crp', 'c-reaktivni'],
    reference: { high: 5, note: 'Nespecifický ukazatel zánětu.' },
    explain:
      'Zvýšené CRP signalizuje zánět v těle. Samo o sobě neurčuje příčinu — vždy se hodnotí spolu s klinickým stavem.',
    topics: ['vysledky', 'zdravi_ditete'],
    context: 'general',
  },
]

export const LAB_BY_KEY: Record<string, LabParameter> = Object.fromEntries(
  LAB_PARAMS.map((p) => [p.key, p]),
)

export function findParamByText(text: string): LabParameter | null {
  const normalized = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  for (const p of LAB_PARAMS) {
    for (const pattern of p.patterns) {
      const norm = pattern
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      if (normalized.includes(norm)) return p
    }
  }
  return null
}
