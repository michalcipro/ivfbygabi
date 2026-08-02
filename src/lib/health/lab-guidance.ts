/**
 * Co jednotlivé hodnoty znamenají. Bez diagnózy.
 *
 * Pravidla, která tu platí bez výjimky:
 *  - nikde není řečeno, že konkrétní hodnota je dobrá nebo špatná,
 *  - nikde není dávkování,
 *  - u každého doporučení je uvedeno, jak silný důvod za ním stojí,
 *  - všude je napsané, na čem interpretace závisí (den cyklu, laboratoř,
 *    věk, diagnóza), právě proto ji nemůže dělat aplikace.
 *
 * Zdroj: obecně přijímané postupy odborných společností pro reprodukční
 * medicínu a endokrinologii. Konkrétní rozmezí se mezi laboratořemi liší,
 * proto se vždy odkazujeme na tu, která hodnotu naměřila.
 */

export type Evidence = 'standard' | 'diskutovaný' | 'podle hodnot'

export interface LifestyleNote {
  area: 'Strava' | 'Doplňky' | 'Pohyb' | 'Spánek a stres' | 'Návyky'
  text: string
  evidence: Evidence
}

export interface LabGuidance {
  /** Co ten parametr v těle dělá. */
  inBody: string
  /** Na čem závisí, jestli je měření vypovídající. */
  measuring: string
  /** Co s hodnotou hýbe. Nahoru i dolů. */
  whatMoves: string[]
  /** Co se s tím obecně dá dělat. Nikdy ne místo léčby. */
  lifestyle: LifestyleNote[]
  /** Jaké kontroly nebo vyšetření obvykle navazují. */
  checkups: string[]
  /** Otázky pro lékaře. */
  ask: string[]
}

const FOLATE: LifestyleNote = {
  area: 'Doplňky',
  text: 'Kyselina listová při plánování těhotenství. Dávku určuje lékař.',
  evidence: 'standard',
}

const SLEEP: LifestyleNote = {
  area: 'Spánek a stres',
  text: 'Pravidelný spánek sedm až devět hodin. Nedostatek spánku rozhazuje hormonální regulaci prokazatelně, i když se to na jednom odběru neprojeví.',
  evidence: 'standard',
}

export const LAB_GUIDANCE: Record<string, LabGuidance> = {
  amh: {
    inBody:
      'AMH tvoří malé rostoucí folikuly ve vaječnících. Je to nepřímý odhad toho, kolik vajíček ve vaječnících ještě čeká. Takzvané ovariální rezervy. Neříká nic o kvalitě vajíček ani o tom, jestli otěhotníte přirozeně.',
    measuring:
      'Dá se odebrat kterýkoliv den cyklu. Hodnoty se mezi laboratořemi a metodami liší natolik, že se dvě čísla z různých laboratoří nedají přímo srovnávat.',
    whatMoves: [
      'Věk. S ním hodnota přirozeně klesá, u každé ženy jinak rychle.',
      'Hormonální antikoncepce může hodnotu dočasně snížit.',
      'PCOS bývá spojený s vyššími hodnotami.',
      'Operace vaječníků, chemoterapie a endometriomy hodnotu snižují.',
      'Kouření je spojováno s rychlejším poklesem.',
    ],
    lifestyle: [
      {
        area: 'Návyky',
        text: 'Nekouřit. Kouření je jediný běžný faktor životního stylu s doloženým vlivem na ovariální rezervu i kvalitu vajíček.',
        evidence: 'standard',
      },
      {
        area: 'Doplňky',
        text: 'Koenzym Q10 se u snížené rezervy diskutuje v souvislosti s kvalitou vajíček. Důkazy jsou zatím slabé a AMH se tím nezvýší.',
        evidence: 'diskutovaný',
      },
      { area: 'Doplňky', text: 'Vitamin D se doplňuje podle naměřené hladiny.', evidence: 'podle hodnot' },
      SLEEP,
    ],
    checkups: [
      'Ultrazvukové spočítání antrálních folikulů (AFC). Doplňuje AMH a spolu vypovídají líp než každé zvlášť.',
      'FSH a estradiol 2.–4. den cyklu.',
      'Při plánování léčby se AMH používá hlavně k volbě protokolu a dávek.',
    ],
    ask: [
      'Kolik vajíček podle mého AMH a počtu folikulů očekáváte?',
      'Mění to volbu protokolu?',
      'Má smysl hodnotu opakovat, a za jak dlouho?',
    ],
  },

  fsh: {
    inBody:
      'FSH z podvěsku mozkového pobízí folikuly k růstu. Když vaječníky odpovídají hůř, tělo přidává, proto vyšší FSH na začátku cyklu bývá nepřímou známkou nižší rezervy.',
    measuring:
      'Vypovídající je odběr 2.–4. den cyklu a vždy spolu s estradiolem. Vysoký estradiol umí FSH uměle stlačit dolů a hodnota pak vypadá lépe, než jaká je.',
    whatMoves: [
      'Den cyklu. Mimo začátek cyklu se hodnota interpretovat nedá.',
      'Estradiol. Potlačuje FSH.',
      'Věk a klesající ovariální rezerva.',
      'Hormonální antikoncepce hodnotu snižuje.',
    ],
    lifestyle: [
      { area: 'Návyky', text: 'Nekouřit. Kouření je spojeno s dřívějším vzestupem FSH.', evidence: 'standard' },
      SLEEP,
      {
        area: 'Pohyb',
        text: 'Pravidelný mírný pohyb ano; velmi vysoký objem vytrvalostního tréninku může naopak potlačit ovulaci.',
        evidence: 'standard',
      },
    ],
    checkups: ['Estradiol ze stejného odběru.', 'AMH a počet antrálních folikulů.', 'Opakování v dalším cyklu, pokud hodnota kolísá.'],
    ask: ['Byl odběr ve správný den cyklu?', 'Jaký byl současně estradiol?', 'Co z toho plyne pro volbu protokolu?'],
  },

  lh: {
    inBody:
      'LH spouští ovulaci. Jeho prudký vzestup zhruba den před uvolněním vajíčka je to, co zachytí ovulační testy.',
    measuring:
      'Bazální hodnota se hodnotí 2.–4. den cyklu, poměr k FSH bývá součástí posuzování PCOS. V polovině cyklu je vysoká hodnota naopak očekávaná.',
    whatMoves: [
      'Fáze cyklu. Uprostřed cyklu hodnota fyziologicky vystřelí.',
      'PCOS bývá spojený s vyšším poměrem LH ku FSH.',
      'Hormonální antikoncepce hodnotu potlačuje.',
    ],
    lifestyle: [
      {
        area: 'Strava',
        text: 'Při PCOS má úprava stravy směrem k nižší glykemické zátěži doložený vliv na pravidelnost ovulace.',
        evidence: 'standard',
      },
      {
        area: 'Doplňky',
        text: 'Inositol se u PCOS používá s cílem podpořit ovulaci. Data jsou nadějná, ale nejednotná.',
        evidence: 'diskutovaný',
      },
      { area: 'Pohyb', text: 'Pravidelný pohyb zlepšuje citlivost na inzulin, což u PCOS souvisí s obnovením ovulace.', evidence: 'standard' },
    ],
    checkups: ['FSH ze stejného odběru kvůli poměru.', 'Ultrazvuk vaječníků.', 'Při podezření na PCOS testosteron a metabolické parametry.'],
    ask: ['Jaký je poměr LH ku FSH a co z toho plyne?', 'Ovuluji podle vás pravidelně?'],
  },

  estradiol: {
    inBody:
      'Estradiol tvoří rostoucí folikuly. Připravuje děložní sliznici a v cyklu roste podle toho, jak folikuly dozrávají. Ve stimulaci se používá k odhadu, kolik folikulů pracuje a jak blízko je odběr.',
    measuring:
      'Hodnota má smysl jen spolu s dnem cyklu nebo dnem stimulace a s ultrazvukem. Samotné číslo nic neříká. Stejná hodnota může být ve dvou různých dnech úplně jiná zpráva.',
    whatMoves: [
      'Počet a velikost rostoucích folikulů.',
      'Den cyklu nebo den stimulace.',
      'Dávka gonadotropinů v léčbě.',
    ],
    lifestyle: [
      {
        area: 'Strava',
        text: 'Ve stimulaci se při rychle rostoucím estradiolu často doporučuje dostatek tekutin a bílkovin jako součást prevence OHSS. Konkrétní režim určuje klinika.',
        evidence: 'diskutovaný',
      },
      {
        area: 'Pohyb',
        text: 'Při vysokém estradiolu a zvětšených vaječnících se vynechává skákání, běh a prudké otočky. Hrozí torze vaječníku.',
        evidence: 'standard',
      },
    ],
    checkups: ['Ultrazvuková folikulometrie ve stejný den.', 'Progesteron před triggerem u části protokolů.', 'Sledování příznaků OHSS po odběru.'],
    ask: ['Odpovídá hodnota počtu folikulů?', 'Mám riziko OHSS?', 'Mění se podle toho dávka nebo termín odběru?'],
  },

  progesteron: {
    inBody:
      'Progesteron tvoří žluté tělísko po ovulaci. Připravuje sliznici na uhnízdění a udržuje ji. V IVF cyklu se doplňuje léky, protože po odběru vajíček tělo nemusí tvořit dost.',
    measuring:
      'Hodnota kolísá během dne i mezi dny. Při doplňování vaginálními přípravky nemusí hladina v krvi odpovídat tomu, co se děje v děloze, proto se rutinní měření při podpoře luteální fáze často nedělá.',
    whatMoves: [
      'Fáze cyklu. Po ovulaci stoupá, před menstruací klesá.',
      'Podávané léky na podporu luteální fáze.',
      'Způsob podání (vaginálně, injekčně, ústy) mění to, co se v krvi naměří.',
    ],
    lifestyle: [
      {
        area: 'Návyky',
        text: 'Podporu luteální fáze nikdy nevysazujte sama, ani při špinění. O ukončení rozhoduje lékař.',
        evidence: 'standard',
      },
      {
        area: 'Spánek a stres',
        text: 'Vedlejší účinky (únava, nadýmání, mlha v hlavě) jsou běžné a nejsou známkou toho, jak to dopadne.',
        evidence: 'standard',
      },
    ],
    checkups: ['hCG v domluvený den.', 'Kontrola sedmý den po ovulaci u přirozených cyklů, pokud se ověřuje ovulace.'],
    ask: ['Do kdy mám progesteron brát?', 'Co když zapomenu dávku?', 'Má u mě smysl hladinu měřit?'],
  },

  beta_hcg: {
    inBody:
      'hCG tvoří buňky, ze kterých vzniká placenta. V raném těhotenství jeho množství rychle roste, proto se sleduje nejen hodnota, ale hlavně to, jak se mění mezi dvěma odběry.',
    measuring:
      'Jedno číslo samo o sobě neříká skoro nic: rozmezí normálních hodnot je velmi široké. Vypovídající je porovnání dvou odběrů s odstupem 48 hodin a den, kdy byly provedeny.',
    whatMoves: [
      'Počet dní od transferu nebo ovulace.',
      'Den kultivace přeneseného embrya (3. nebo 5.).',
      'Vícečetné těhotenství bývá spojeno s vyššími hodnotami.',
      'Zbytek triggeru s hCG může krátce po podání zkreslit domácí test.',
    ],
    lifestyle: [
      { area: 'Doplňky', text: 'Kyselina listová a jód pokračují podle doporučení lékaře.', evidence: 'standard' },
      {
        area: 'Návyky',
        text: 'Opakované domácí testy nic nezpřesní. Nejsou kvantitativní a sytost čárky nic nevypovídá.',
        evidence: 'standard',
      },
    ],
    checkups: [
      'Opakovaný odběr za 48 hodin kvůli zdvojovacímu času.',
      'Ultrazvuk zhruba v 6.–7. týdnu. Potvrdí uložení a srdeční akci.',
    ],
    ask: ['Roste hodnota tak, jak má?', 'Kdy je další odběr a kdy ultrazvuk?', 'Co by znamenal pomalejší růst?'],
  },

  tsh: {
    inBody:
      'TSH řídí štítnou žlázu. Ta ovlivňuje metabolismus, ovulaci, uhnízdění i vývoj mozku miminka v prvním trimestru, kdy si vlastní hormony ještě netvoří.',
    measuring:
      'Při plánování těhotenství a v těhotenství se používají přísnější cílové hodnoty než běžné laboratorní rozmezí. Hodnota kolísá během dne, odebírá se obvykle ráno.',
    whatMoves: [
      'Autoimunitní zánět štítné žlázy (pozitivní anti-TPO).',
      'Nedostatek nebo naopak nadbytek jódu.',
      'Těhotenství. Potřeba hormonů stoupá už v prvních týdnech.',
      'Léky na štítnou žlázu a jejich dávka.',
    ],
    lifestyle: [
      { area: 'Doplňky', text: 'Jód je nutný pro tvorbu hormonů štítné žlázy. Při onemocnění štítné žlázy vždy podle lékaře. U některých diagnóz se postupuje jinak.', evidence: 'standard' },
      {
        area: 'Návyky',
        text: 'Levotyroxin se bere nalačno a s odstupem od železa, vápníku a kávy, jinak se hůř vstřebává.',
        evidence: 'standard',
      },
      { area: 'Doplňky', text: 'Selen se u autoimunitního zánětu diskutuje. Data nejsou jednotná.', evidence: 'diskutovaný' },
      FOLATE,
    ],
    checkups: [
      'Protilátky anti-TPO, pokud ještě nebyly vyšetřeny.',
      'fT4 pro doplnění obrazu.',
      'V těhotenství kontrola zhruba po čtyřech až šesti týdnech nebo podle lékaře.',
    ],
    ask: [
      'Jaká je moje cílová hodnota při plánování a v těhotenství?',
      'Mám vyšetřené protilátky?',
      'Jak často budeme kontrolovat?',
    ],
  },

  ft4: {
    inBody:
      'Volný tyroxin je hormon štítné žlázy, který skutečně působí v tkáních. Spolu s TSH ukazuje, jak štítná žláza pracuje.',
    measuring: 'Hodnotí se vždy spolu s TSH, samotné číslo má omezenou výpovědní hodnotu. V těhotenství se rozmezí posouvá.',
    whatMoves: ['Funkce štítné žlázy a případná léčba.', 'Těhotenství.', 'Některé léky.'],
    lifestyle: [
      { area: 'Doplňky', text: 'Jód podle doporučení; při onemocnění štítné žlázy vždy s lékařem.', evidence: 'standard' },
      SLEEP,
    ],
    checkups: ['TSH ze stejného odběru.', 'Anti-TPO při podezření na autoimunitní zánět.'],
    ask: ['Odpovídá fT4 hodnotě TSH?', 'Je potřeba upravit léčbu?'],
  },

  prolaktin: {
    inBody:
      'Prolaktin se podílí na tvorbě mléka. Když je trvale zvýšený mimo těhotenství a kojení, může potlačit ovulaci.',
    measuring:
      'Hodnotu zvyšuje stres z odběru, nedostatek spánku, sex a vyšetření prsou krátce před odběrem. Proto se zvýšená hodnota obvykle ověřuje opakovaně, v klidu a ráno.',
    whatMoves: [
      'Stres, bolest a nedostatek spánku bezprostředně před odběrem.',
      'Některé léky, hlavně psychiatrické a na žaludek.',
      'Onemocnění štítné žlázy.',
      'Adenom podvěsku mozkového u výrazně vysokých hodnot.',
    ],
    lifestyle: [
      {
        area: 'Návyky',
        text: 'Před odběrem přijít v klidu, vyspaná, bez námahy a bez sexu předchozí den. Tohle samo o sobě mění výsledek.',
        evidence: 'standard',
      },
      SLEEP,
    ],
    checkups: ['Opakovaný odběr v klidových podmínkách.', 'TSH. Porucha štítné žlázy prolaktin zvyšuje.', 'Při výrazně vysokých hodnotách zobrazení podvěsku mozkového.'],
    ask: ['Máme hodnotu ověřit opakovaně?', 'Může za to některý z mých léků?', 'Ovlivňuje to moji ovulaci?'],
  },

  testosteron: {
    inBody:
      'Testosteron mají i ženy, tvoří se ve vaječnících a nadledvinách. Vyšší hodnoty bývají součástí obrazu PCOS a projeví se nepravidelným cyklem, akné nebo zvýšeným ochlupením.',
    measuring: 'Odebírá se ráno, hodnotí se spolu s dalšími androgeny. U žen na antikoncepci je výsledek zkreslený.',
    whatMoves: ['PCOS.', 'Inzulinová rezistence a hmotnost.', 'Onemocnění nadledvin (vzácněji).', 'Hormonální antikoncepce hodnotu snižuje.'],
    lifestyle: [
      {
        area: 'Strava',
        text: 'Snížení glykemické zátěže a postupná úprava hmotnosti mají u PCOS doložený vliv na androgeny i na návrat ovulace.',
        evidence: 'standard',
      },
      { area: 'Pohyb', text: 'Kombinace vytrvalosti a silového tréninku zlepšuje citlivost na inzulin.', evidence: 'standard' },
      { area: 'Doplňky', text: 'Inositol se u PCOS diskutuje.', evidence: 'diskutovaný' },
    ],
    checkups: ['Glykémie a inzulin nalačno, případně oGTT.', 'Ultrazvuk vaječníků.', 'Lipidy při metabolickém riziku.'],
    ask: ['Splňuji kritéria PCOS?', 'Má smysl vyšetřit inzulinovou rezistenci?', 'Co bude první krok?'],
  },

  vitamin_d: {
    inBody:
      'Vitamin D se podílí na hospodaření s vápníkem, na imunitě a na řadě dalších pochodů včetně reprodukčních. Ve středoevropských zimách je nedostatek běžný.',
    measuring: 'Měří se 25-OH vitamin D. Hodnota se v průběhu roku mění. Nejnižší bývá na konci zimy.',
    whatMoves: ['Roční období a pobyt na slunci.', 'Barva kůže a používání ochranných faktorů.', 'Tělesná hmotnost.', 'Vstřebávání ze střeva.'],
    lifestyle: [
      { area: 'Doplňky', text: 'Doplňuje se podle naměřené hladiny, ne paušálně. Dávku určuje lékař.', evidence: 'podle hodnot' },
      { area: 'Strava', text: 'Tučné ryby, vejce a obohacené potraviny přispívají, samy o sobě ale deficit obvykle nevyřeší.', evidence: 'standard' },
      { area: 'Pohyb', text: 'Pobyt venku má smysl i mimo doplňování, ale v zimě u nás slunce na tvorbu nestačí.', evidence: 'standard' },
    ],
    checkups: ['Kontrola po několika měsících doplňování.', 'U dlouhodobého doplňování i vápník.'],
    ask: ['Je moje hladina dostatečná pro plánované těhotenství?', 'Jak dlouho mám doplňovat a kdy překontrolovat?'],
  },

  sperm_concentration: {
    inBody:
      'Koncentrace udává počet spermií v mililitru ejakulátu. Je to jeden ze tří základních ukazatelů spermiogramu vedle pohyblivosti a tvaru.',
    measuring:
      'Vypovídá až opakované vyšetření. Hodnoty přirozeně kolísají. Před odběrem se obvykle doporučuje dva až pět dní abstinence; kratší i delší interval výsledek zkresluje.',
    whatMoves: [
      'Horečka nebo nemoc v posledních třech měsících. Spermie dozrávají zhruba 74 dní.',
      'Přehřívání (sauna, horké koupele, notebook na klíně).',
      'Kouření, alkohol, anabolika a některé léky.',
      'Varikokéla a hormonální poruchy.',
    ],
    lifestyle: [
      { area: 'Návyky', text: 'Nekouřit, omezit alkohol, vynechat saunu a horké koupele. Změna se projeví zhruba za tři měsíce.', evidence: 'standard' },
      { area: 'Pohyb', text: 'Pravidelný pohyb a úprava hmotnosti mají doložený vliv; anabolika naopak tvorbu spermií potlačují.', evidence: 'standard' },
      { area: 'Doplňky', text: 'Antioxidanty (zinek, selen, vitamin C a E) se u mužského faktoru diskutují. Výsledky studií jsou smíšené.', evidence: 'diskutovaný' },
    ],
    checkups: ['Opakovaný spermiogram s odstupem, obvykle několika týdnů.', 'Vyšetření u urologa nebo androloga.', 'Hormonální profil a případně fragmentace DNA spermií.'],
    ask: ['Máme vyšetření zopakovat?', 'Doporučujete urologa?', 'Mění to volbu mezi IVF a ICSI?'],
  },

  sperm_motility: {
    inBody: 'Pohyblivost udává, kolik spermií se aktivně pohybuje vpřed. Pro přirozené oplodnění je to zásadní ukazatel.',
    measuring: 'Hodnotí se do krátké doby po odběru. Vzorek přinesený zdaleka a vychladlý vychází hůř. Kolísá stejně jako koncentrace.',
    whatMoves: ['Doba a teplota při transportu vzorku.', 'Přehřívání, kouření, nemoc v předchozích měsících.', 'Zánět v pohlavních cestách.'],
    lifestyle: [
      { area: 'Návyky', text: 'Odevzdat vzorek přímo na pracovišti, nebo dodržet pokyny k transportu. Tohle ovlivní výsledek víc než většina doplňků.', evidence: 'standard' },
      { area: 'Návyky', text: 'Bez sauny a horkých koupelí tři měsíce před vyšetřením i před cyklem.', evidence: 'standard' },
      { area: 'Doplňky', text: 'Antioxidanty se diskutují, data jsou smíšená.', evidence: 'diskutovaný' },
    ],
    checkups: ['Opakované vyšetření.', 'Kultivace na infekci při podezření na zánět.', 'Zvážení ICSI podle nálezu.'],
    ask: ['Jak byl vzorek odevzdán a mohlo to výsledek ovlivnit?', 'Co to znamená pro metodu oplodnění?'],
  },

  sperm_morphology: {
    inBody: 'Morfologie hodnotí tvar spermií podle přísných kritérií. I u zdravých mužů je podíl normálních tvarů poměrně nízký.',
    measuring:
      'Hodnocení je do jisté míry subjektivní a mezi laboratořemi se liší. Samotná morfologie málokdy rozhoduje sama o sobě.',
    whatMoves: ['Nemoc a horečka v předchozích měsících.', 'Kouření a přehřívání.', 'Varikokéla.'],
    lifestyle: [
      { area: 'Návyky', text: 'Nekouřit a vyhnout se přehřívání. Efekt se projeví po jednom cyklu dozrávání, tedy zhruba za tři měsíce.', evidence: 'standard' },
      { area: 'Doplňky', text: 'Antioxidanty. Diskutovaný přínos.', evidence: 'diskutovaný' },
    ],
    checkups: ['Opakovaný spermiogram.', 'Zvážení fragmentace DNA při opakovaných neúspěších.'],
    ask: ['Jak moc morfologie ovlivňuje naši šanci?', 'Je to důvod pro ICSI?'],
  },

  dfi: {
    inBody:
      'DFI vyjadřuje podíl spermií s poškozenou DNA. Souvisí spíš s vývojem embrya a s opakovanými ztrátami než se samotným oplodněním.',
    measuring: 'Metody se mezi laboratořemi liší a nejsou vzájemně přepočitatelné. Vyšetření se nedělá rutinně, ale při konkrétní indikaci.',
    whatMoves: ['Oxidační stres. Kouření, znečištění, horečka.', 'Varikokéla.', 'Delší abstinence před odběrem zvyšuje podíl poškozené DNA.', 'Věk.'],
    lifestyle: [
      { area: 'Návyky', text: 'Kratší interval abstinence před odběrem bývá doporučen právě u zvýšené fragmentace, konkrétně určí laboratoř.', evidence: 'diskutovaný' },
      { area: 'Návyky', text: 'Nekouřit a řešit přehřívání.', evidence: 'standard' },
      { area: 'Doplňky', text: 'Antioxidační léčba se používá, přínos je předmětem diskuze.', evidence: 'diskutovaný' },
    ],
    checkups: ['Urologické vyšetření na varikokélu.', 'Opakování s odstupem po úpravě životního stylu.'],
    ask: ['Co konkrétně by se u nás podle výsledku změnilo?', 'Má smysl vyšetření opakovat?'],
  },

  hb: {
    inBody:
      'Hemoglobin v červených krvinkách rozvádí kyslík. Nízká hodnota se projeví únavou, dušností při námaze, bušením srdce a bledostí.',
    measuring:
      'V těhotenství hodnota fyziologicky klesá, protože roste objem plazmy, proto se v těhotenství používají jiná rozmezí než mimo něj.',
    whatMoves: ['Krevní ztráta při menstruaci, po zákroku nebo po porodu.', 'Nedostatek železa, vitaminu B12 nebo folátu.', 'Těhotenské naředění krve.'],
    lifestyle: [
      { area: 'Doplňky', text: 'Železo se doplňuje podle krevního obrazu a zásob (ferritin). Dávku a délku určuje lékař. Nadbytek není neškodný.', evidence: 'podle hodnot' },
      { area: 'Strava', text: 'Železo z masa se vstřebává lépe než z rostlin. Vitamin C vstřebávání zlepšuje, čaj a káva k jídlu ho zhoršují.', evidence: 'standard' },
      { area: 'Pohyb', text: 'Při výrazné anémii zátěž snižte, dokud se hodnota neupraví, jinak si jen přidáte vyčerpání.', evidence: 'standard' },
    ],
    checkups: ['Ferritin. Ukazuje zásoby železa dřív, než klesne hemoglobin.', 'Kontrola po několika týdnech doplňování.'],
    ask: ['Mám vyšetřený ferritin?', 'Jak dlouho mám železo brát a kdy překontrolovat?', 'Souvisí s tím moje únava?'],
  },

  ferritin: {
    inBody:
      'Ferritin ukazuje zásoby železa v těle. Klesá dřív než hemoglobin, takže odhalí nedostatek ještě před rozvinutou anémií. Únava a vypadávání vlasů se objevují už při nízkých zásobách.',
    measuring:
      'Při zánětu nebo infekci hodnota falešně stoupá, proto se často hodnotí spolu s CRP. Cílové hodnoty při plánování těhotenství bývají vyšší než dolní hranice laboratoře.',
    whatMoves: ['Silná menstruace.', 'Nedostatečný příjem železa ve stravě.', 'Poruchy vstřebávání (celiakie, po operacích).', 'Zánět hodnotu zvyšuje bez ohledu na zásoby.'],
    lifestyle: [
      { area: 'Doplňky', text: 'Doplňování podle hodnoty; u řady žen se lépe snáší podávání obden než denně. Určuje lékař.', evidence: 'podle hodnot' },
      { area: 'Strava', text: 'Kombinovat zdroje železa s vitaminem C, oddělit od kávy, čaje a vápníku.', evidence: 'standard' },
    ],
    checkups: ['CRP kvůli interpretaci.', 'Krevní obraz.', 'Při opakovaně nízkých zásobách pátrání po příčině ztrát.'],
    ask: ['Jaká je moje cílová hodnota před těhotenstvím?', 'Proč mi zásoby klesají?', 'Kdy překontrolovat?'],
  },

  glukoza: {
    inBody:
      'Glykémie ukazuje hladinu cukru v krvi. Souvisí s citlivostí na inzulin, která u PCOS bývá snížená a která ovlivňuje ovulaci.',
    measuring: 'Odebírá se nalačno. Jednorázová hodnota nestačí k posouzení citlivosti na inzulin. K tomu slouží zátěžový test (oGTT).',
    whatMoves: ['Složení stravy a hmotnost.', 'Pohyb. Zlepšuje citlivost na inzulin i bez hubnutí.', 'PCOS.', 'Těhotenství. Hormony placenty citlivost na inzulin snižují.'],
    lifestyle: [
      { area: 'Strava', text: 'Nižší glykemická zátěž, dostatek vlákniny a bílkovin. U PCOS má doložený vliv na ovulaci.', evidence: 'standard' },
      { area: 'Pohyb', text: 'Kombinace vytrvalosti a síly zlepšuje citlivost na inzulin prokazatelně, i bez změny hmotnosti.', evidence: 'standard' },
      { area: 'Doplňky', text: 'Inositol u PCOS. Diskutovaný přínos.', evidence: 'diskutovaný' },
    ],
    checkups: ['oGTT při podezření na inzulinovou rezistenci.', 'V těhotenství screening mezi 24. a 28. týdnem.', 'HbA1c podle rozhodnutí lékaře.'],
    ask: ['Má u mě smysl zátěžový test?', 'Souvisí to s mým PCOS?', 'Jaké změny doporučujete jako první?'],
  },

  crp: {
    inBody: 'CRP je ukazatel zánětu. Stoupá rychle při infekci a stejně rychle klesá, když zánět odezní.',
    measuring: 'Samotná hodnota neurčí příčinu. Vždy se posuzuje spolu s tím, jak se cítíte, a s dalšími výsledky.',
    whatMoves: ['Infekce.', 'Zákrok nebo operace v posledních dnech.', 'Zánět v pohlavních cestách.'],
    lifestyle: [
      {
        area: 'Návyky',
        text: 'Zvýšené CRP s horečkou po zákroku nebo po porodu je důvod ozvat se lékaři, ne čekat na kontrolu.',
        evidence: 'standard',
      },
    ],
    checkups: ['Krevní obraz.', 'Pátrání po zdroji podle příznaků.', 'Kontrola po léčbě.'],
    ask: ['Co je podle vás zdrojem?', 'Kdy hodnotu překontrolujeme?'],
  },

  bilirubin: {
    inBody:
      'Bilirubin vzniká rozpadem červených krvinek. U novorozenců je zvýšení běžné, protože ještě nezralá játra ho zpracovávají pomalu. Projeví se žloutenkou.',
    measuring: 'U novorozenců se hodnotí podle hodin života a gestačního týdne, ne podle jednoho čísla. K tomu slouží nomogramy, které používá neonatolog.',
    whatMoves: ['Stáří miminka v hodinách.', 'Nedonošenost.', 'Krevní skupina matky a dítěte.', 'Množství přijaté stravy.'],
    lifestyle: [
      { area: 'Návyky', text: 'Časté krmení podporuje vylučování bilirubinu stolicí. Konkrétní režim určí neonatolog.', evidence: 'standard' },
      { area: 'Návyky', text: 'Domácí „slunění“ miminka se nedoporučuje. Riziko podchlazení i spálení převyšuje přínos.', evidence: 'standard' },
    ],
    checkups: ['Kontrolní odběr podle doporučení.', 'Fototerapie, pokud hodnota překročí práh pro daný věk a týden.'],
    ask: ['Kde je hranice pro fototerapii u našeho miminka?', 'Kdy budeme kontrolovat znovu?', 'Co mám sledovat doma?'],
  },
}

export function guidanceFor(paramKey: string): LabGuidance | null {
  return LAB_GUIDANCE[paramKey] ?? null
}
