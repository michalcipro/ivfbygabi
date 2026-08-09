import type { PhaseGroup, PhaseId } from './phases'

/**
 * Techniky práce s hlavou.
 *
 * Ne články o tom, jak by se to dalo dělat. Věci, které se v aplikaci
 * odklikají. Vycházejí z postupů, které se běžně používají v KBT, terapii
 * přijetí a všímavosti. Žádná z nich není léčba a žádná nenahrazuje
 * odbornou pomoc; jsou to nástroje na konkrétní těžkou chvíli.
 */

export type ExerciseId = string

/**
 * Okruhy deníku.
 *
 * Ne proto, aby jich bylo hodně, ale aby žena našla to své podle toho, co
 * ji zrovna tíží. Deník, ve kterém je dvacet cvičení bez pořádku, se
 * neotevře podruhé.
 */
export type ExerciseTopic =
  | 'dnes'
  | 'myslenky'
  | 'stres'
  | 'cekani'
  | 'telo'
  | 'partner'
  | 'ztrata'
  | 'nadeje'
  | 'soucit'
  | 'finance'
  | 'prace'
  | 'klinika'
  | 'vecer'
  | 'malé-veci'

export interface TopicDef {
  id: ExerciseTopic
  label: string
  /** Jedna věta, čeho se okruh týká. */
  note: string
  icon: string
}

export const EXERCISE_TOPICS: TopicDef[] = [
  { id: 'dnes', label: 'Jak se dnes cítím', note: 'Krátké zastavení nad dneškem.', icon: '◕' },
  { id: 'myslenky', label: 'Moje myšlenky', note: 'Když se v hlavě zasekne věta, která zní jako fakt.', icon: '❖' },
  { id: 'stres', label: 'Regulace stresu', note: 'Tělo napřed, hlava potom.', icon: '◍' },
  { id: 'cekani', label: 'Čekání a nejistota', note: 'Nejdelší část léčby a nejmíň se o ní mluví.', icon: '◷' },
  { id: 'telo', label: 'Vztah k vlastnímu tělu', note: 'Ne podle vzhledu. Podle toho, co unese.', icon: '♡' },
  { id: 'partner', label: 'Já a partner', note: 'Co si neříkáme a co bychom potřebovali slyšet.', icon: '◎' },
  { id: 'ztrata', label: 'Ztráta a zklamání', note: 'Pro chvíle, kdy se výsledek nestal tím, v co jste doufala.', icon: '❍' },
  { id: 'nadeje', label: 'Naděje a očekávání', note: 'Doufat a chránit se přitom není protimluv.', icon: '✧' },
  { id: 'soucit', label: 'Sebesoucit', note: 'Mluvit k sobě tak, jak byste mluvila ke kamarádce.', icon: '❦' },
  { id: 'finance', label: 'Stres z financí', note: 'Peníze v léčbě nejsou vedlejší téma.', icon: '◇' },
  { id: 'prace', label: 'IVF a práce', note: 'Dva kalendáře, které se nedomlouvají.', icon: '▤' },
  { id: 'klinika', label: 'Můj vztah ke klinice', note: 'Důvěra, otázky, hranice.', icon: '✚' },
  { id: 'vecer', label: 'Večerní zklidnění', note: 'Než se zhasne.', icon: '☾' },
  { id: 'malé-veci', label: 'Malé věci, které mi pomohly', note: 'Sbírka, která má cenu až po měsíci.', icon: '✶' },
]

export const TOPIC_LABEL: Record<ExerciseTopic, string> = Object.fromEntries(
  EXERCISE_TOPICS.map((t) => [t.id, t.label]),
) as Record<ExerciseTopic, string>

export interface Exercise {
  id: ExerciseId
  title: string
  /** Kdy po ní sáhnout. */
  when: string
  minutes: number
  /** Co to dělá a proč to funguje. Bez ezoteriky. */
  how: string
  /** Kterým fázím se hodí nabízet přednostně. */
  groups?: PhaseGroup[]
  /** Konkrétní fáze, kde je cvičení nejvíc na místě. Jemnější než `groups`. */
  phases?: PhaseId[]
  /** Do kterého okruhu deníku patří. */
  topic?: ExerciseTopic
  icon: string
  /** Kroky u průchozích cvičení. */
  steps?: { label: string; hint: string }[]
  /** Uzavírací otázka. Nepovinná, ale u delších cvičení pomáhá. */
  closing?: string
}

export const EXERCISES: Exercise[] = [
  // ------------------------------------------------------------ dnešek ---
  {
    id: 'co-potrebuji',
    title: 'Co teď potřebuji?',
    when: 'Když je toho moc a není jasné, co s tím.',
    minutes: 3,
    icon: '◕',
    topic: 'dnes',
    how: 'Vyberete, co potřebujete, a pak jednu malou věc, která je v příštích deseti minutách proveditelná. Nic velkého. Deset minut je záměrně krátká doba: to, co se nedá zvládnout za deset minut, se ve špatný den nezvládne vůbec.',
    steps: [
      {
        label: 'Co teď potřebuju',
        hint: 'Informace, klid, podporu, prostor, obejmout, být sama, mluvit, přestat na chvíli řešit IVF, něco jiného.',
      },
      {
        label: 'Co s tím můžu udělat během příštích deseti minut',
        hint: 'Aby vám bylo o jedno procento líp. Ne o padesát.',
      },
    ],
    closing: 'Co si z dneška odnáším?',
  },
  {
    id: 'dnesek-potreboval',
    title: 'Co dnešek ode mě potřeboval',
    when: 'Večer, když máte pocit, že jste toho zvládla málo.',
    minutes: 4,
    icon: '☾',
    topic: 'vecer',
    how: 'Otočí to obvyklou otázku. Místo „co jsem dnes stihla“ se ptá, co si dnešek doopravdy žádal. Ve dnech léčby to bývá vydržet, dojet, počkat nebo vůbec vstát. To se do výkonu nepočítá, a přitom to bylo to hlavní.',
    steps: [
      { label: 'Nemusela jsem být silná. Potřebovala jsem…', hint: 'Dopište to jednou větou.' },
      { label: 'Co dnešek doopravdy žádal', hint: 'Vydržet? Dojet? Počkat? Zvládnout jednu věc a víc ne?' },
    ],
  },
  {
    id: 'male-veci',
    title: 'Co mi dnes pomohlo',
    when: 'Kdykoli. Nejlíp každý večer.',
    minutes: 2,
    icon: '✶',
    topic: 'malé-veci',
    how: 'Tři malé věci, které dnes pomohly. Ne úspěchy, ne vděčnost za všechno. Konkrétní drobnosti: teplá sprcha, zpráva od kamarádky, patnáct minut ticha. Po měsíci z toho vznikne seznam, který se hodí ve dni, kdy vás nenapadne nic.',
    steps: [
      { label: 'První věc', hint: 'Klidně úplná maličkost.' },
      { label: 'Druhá věc', hint: '' },
      { label: 'Třetí věc', hint: 'Když třetí není, dvě stačí.' },
    ],
  },

  // ---------------------------------------------------------- myšlenky ---
  {
    id: 'fakt-nebo-strach',
    title: 'Co je fakt a co je můj strach',
    when: 'Když se obava tváří jako informace.',
    minutes: 6,
    icon: '❖',
    topic: 'myslenky',
    how: 'Rozdělíte na papír to, co skutečně víte, a to, co si zatím jen představujete. Úzkost obojí míchá dohromady a výsledek pak vypadá jako fakt. Když se to oddělí, obvykle zbyde překvapivě málo skutečně známého a je to snesitelnější.',
    steps: [
      { label: 'Fakt', hint: 'Jen to, co je opravdu zapsané nebo řečené. Číslo, datum, věta od lékaře.' },
      { label: 'Moje obava', hint: 'Co si k tomu domýšlím. Bez cenzury.' },
      { label: 'Co z toho skutečně vím', hint: 'Přečtěte si obojí a napište jednu poctivou větu.' },
    ],
    closing: 'Co si z dneška odnáším?',
  },
  {
    id: 'kdyz-se-rozbehnou',
    title: 'Když se myšlenky rozběhnou',
    when: 'Ve tři ráno. Nebo kdykoli, kdy se to nedá zastavit.',
    minutes: 6,
    icon: '◔',
    topic: 'myslenky',
    how: 'Nejdřív se obava napíše celá, protože nedopsaná myšlenka se vrací. Potom se rozdělí na to, co ovlivnit můžete, a co ne. Cílem není přestat se bát, ale přestat utrácet energii tam, kde nemá kam jít.',
    steps: [
      { label: 'Bojím se, že…', hint: 'Celou větu. Klidně tu nejhorší.' },
      { label: 'Co v tuhle chvíli ovlivnit můžu', hint: 'Konkrétně a málo. Většinou je to jedna věc.' },
      { label: 'Co v tuhle chvíli ovlivnit nemůžu', hint: 'Napište to a nechte to napsané.' },
    ],
    closing: 'Co si z dneška odnáším?',
  },
  {
    id: 'srovnavani',
    title: 'Když se srovnávám s ostatními',
    when: 'Po zprávě o cizím těhotenství. Nebo po deseti minutách v diskusi.',
    minutes: 5,
    icon: '◎',
    topic: 'myslenky',
    how: 'Srovnávání není chyba charakteru, je to reflex. Tohle cvičení ho nezruší, jen ho zpomalí natolik, aby bylo vidět, co se při něm člověk sám sobě říká. To bývá tvrdší než cokoli, co by řekl někomu jinému.',
    steps: [
      { label: 'S kým se dnes srovnávám', hint: 'Konkrétně. Kamarádka, žena z diskuse, sestra.' },
      { label: 'Co o jejím příběhu doopravdy vím', hint: 'Obvykle vidíme jen konec, ne cestu k němu.' },
      { label: 'Co si tím sama sobě říkám', hint: 'Napište tu větu doslova. Bývá krutá.' },
      { label: 'Co bych řekla kamarádce v mé situaci', hint: 'A všimněte si rozdílu.' },
    ],
    closing: 'Co si z dneška odnáším?',
  },
  {
    id: 'ivf-neni-cely-zivot',
    title: 'IVF není celý můj život',
    when: 'Když se zdá, že se všechno ostatní zastavilo.',
    minutes: 5,
    icon: '✧',
    topic: 'nadeje',
    how: 'Léčba má tendenci vyplnit celý prostor, protože si žádá pozornost každý den. Tohle cvičení nezmenšuje, co prožíváte. Jen na chvíli udělá místo tomu ostatnímu, co pořád existuje.',
    steps: [
      { label: 'Co bylo dnes součástí mého života kromě IVF', hint: 'I úplná maličkost se počítá.' },
      { label: 'Co mi dává pocit, že jsem pořád já', hint: 'Práce, lidé, místo, zvyk, cokoli.' },
      { label: 'Co si chci ponechat i během léčby', hint: 'A co pro to jde udělat tenhle týden.' },
    ],
  },
  {
    id: 'ivf-identita',
    title: 'Moje IVF identita',
    when: 'Když máte pocit, že jste hlavně pacientka.',
    minutes: 4,
    icon: '❖',
    topic: 'nadeje',
    how: 'Pět vět o tom, kdo jste kromě ženy, která prochází léčbou. Není to cvičení na sebevědomí. Je to připomínka, že diagnóza je jedna z mnoha vašich vlastností, ne ta hlavní.',
    steps: [
      { label: 'Kdo jsem kromě ženy, která prochází IVF. První věc', hint: '' },
      { label: 'Druhá', hint: '' },
      { label: 'Třetí', hint: '' },
      { label: 'Čtvrtá', hint: '' },
      { label: 'Pátá', hint: 'Klidně něco úplně obyčejného.' },
    ],
  },

  // ------------------------------------------------------------ čekání ---
  {
    id: 'cekani',
    title: 'Čekání',
    when: 'Ve dvou týdnech po transferu. A v každém jiném čekání.',
    minutes: 5,
    icon: '◷',
    topic: 'cekani',
    phases: ['two_week_wait', 'transfer', 'embryo_culture', 'waiting_next_attempt'],
    how: 'Čekání se nedá zkrátit a nedá se vyplnit. Dá se ale pojmenovat, co je na něm pro vás nejtěžší, protože každá to má jinak. Někdo nesnese nevědomost, jiný to, že nemůže nic dělat, další ticho kolem.',
    steps: [
      { label: 'Co je na čekání pro mě nejtěžší', hint: 'Buďte konkrétní. „Je to těžké“ vám nepomůže.' },
      { label: 'Co mi čekání pomáhá zvládnout', hint: 'Co fungovalo minule, i kdyby to bylo hloupé.' },
      { label: 'Co dnes nepotřebuju vědět', hint: 'Někdy je to nejužitečnější věta celého dne.' },
    ],
    closing: 'Co si z dneška odnáším?',
  },

  // -------------------------------------------------------------- tělo ---
  {
    id: 'moje-telo-dnes',
    title: 'Moje tělo dnes',
    when: 'Ve dnech, kdy se na tělo zlobíte.',
    minutes: 4,
    icon: '♡',
    topic: 'telo',
    how: 'Ne o vzhledu a ne o výkonu. Tři otázky o tom, co tělo dneska uneslo. V léčbě se tělo snadno stane protivníkem, protože se z něj stane objekt měření. Tohle ho na chvíli vrátí zpátky k vám.',
    steps: [
      { label: 'Co dnes moje tělo zvládlo', hint: 'Injekce, cestu, práci, bolest, prostě den.' },
      { label: 'Za co mu dnes můžu poděkovat', hint: 'I když se zrovna zlobíte.' },
      { label: 'Co moje tělo potřebuje', hint: 'A co z toho jde udělat dneska.' },
    ],
  },
  {
    id: 'dopis-telu',
    title: 'Dopis mému tělu',
    when: 'Po odběru, po neúspěchu, nebo kdykoli se cítíte zrazená.',
    minutes: 10,
    icon: '❦',
    topic: 'telo',
    how: 'Dopis vlastnímu tělu. Nemusí být hezký a nemusí odpouštět. Může být i naštvaný. Smysl je v tom, že se s tělem začne mluvit místo o něm, a to samo o sobě mění tón.',
    steps: [
      { label: 'Vím, že jsi toho v poslední době hodně zvládlo…', hint: 'Pokračujte, jak vám to jde. Nikdo jiný to neuvidí.' },
    ],
  },

  // ----------------------------------------------------------- partner ---
  {
    id: 'dopis-partnerovi',
    title: 'Dopis mému partnerovi',
    when: 'Když je toho mezi vámi moc a nejde to říct nahlas.',
    minutes: 10,
    icon: '◎',
    topic: 'partner',
    how: 'Napsat se dá to, co se nedá vyslovit. Dopis nemusíte dát přečíst. Většina lidí ho nedá a stejně jim pomůže, protože se tím ta věta poprvé někde objeví celá.',
    steps: [
      { label: 'Co bych chtěla, aby věděl, ale možná mu to neumím říct', hint: 'Bez zdvořilosti a bez cenzury.' },
      { label: 'Co bych od něj potřebovala', hint: 'Konkrétně. „Podporu“ se nedá splnit, „nemluvit o tom u tvojí mámy“ ano.' },
    ],
  },
  {
    id: 'hranice',
    title: 'Moje hranice',
    when: 'Před rodinnou návštěvou. Nebo po ní.',
    minutes: 6,
    icon: '◈',
    topic: 'partner',
    how: 'Hranice se hůř drží, když se vymýšlejí až ve chvíli, kdy se na ně tlačí. Tohle cvičení je připraví dopředu, takže se pak jen použijí. Formulace předem je devět desetin úspěchu.',
    steps: [
      { label: 'Co už teď nechci poslouchat', hint: 'Konkrétní věty, které vás zraňují.' },
      { label: 'Na jaké otázky nechci odpovídat', hint: '„Tak co, už to je?“ a podobné.' },
      { label: 'Co potřebuju, aby okolí respektovalo', hint: 'A komu to řeknu jako prvnímu.' },
    ],
    closing: 'Co si z dneška odnáším?',
  },

  // ------------------------------------------------------------ ztráta ---
  {
    id: 'kdyz-se-nepovede',
    title: 'Když se to nepovede',
    when: 'Před výsledkem, kdy se toho bojíte. Nebo po něm.',
    minutes: 8,
    icon: '❍',
    topic: 'ztrata',
    groups: ['waiting', 'loss'],
    how: 'Připustit si špatný konec dopředu není přivolávání neúspěchu a nesnižuje to šanci. Je to příprava, díky které v den výsledku nemusíte vymýšlet, co s sebou. Pokud vám to teď dělá hůř, zavřete to a vraťte se, až budete chtít.',
    steps: [
      { label: 'Čeho se teď nejvíc bojím', hint: 'Napište to celé. Nedopsaný strach je horší.' },
      { label: 'Co by mi pomohlo, kdyby výsledek nebyl podle mého přání', hint: 'Konkrétně. Být sama? S někým? Volno? Ven z města?' },
      { label: 'Kdo by mohl být moje opora', hint: 'Jeden člověk stačí. Napište jméno.' },
      { label: 'Co bych potřebovala slyšet', hint: 'A co naopak ne. Tohle se dá dopředu někomu říct.' },
    ],
    closing: 'Co si z dneška odnáším?',
  },

  // --------------------------------------------------------- sebesoucit ---
  {
    id: 'dopis-sobe',
    title: 'Dopis sobě',
    when: 'V den, kdy jste na sebe tvrdá.',
    minutes: 10,
    icon: '❦',
    topic: 'soucit',
    how: 'Dopis sama sobě, psaný tak, jak byste psala nejbližší kamarádce ve stejné situaci. Ženy v léčbě k sobě bývají mnohem tvrdší než ke komukoli jinému a při psaní je to najednou vidět.',
    steps: [{ label: 'Milá já, vím, že teď…', hint: 'Pokračujte. Nikdo jiný to neuvidí.' }],
  },

  // ------------------------------------------------------------ finance ---
  {
    id: 'stres-z-financi',
    title: 'Když tíží peníze',
    when: 'Po zaplacení faktury. Nebo když se plánuje další cyklus.',
    minutes: 6,
    icon: '◇',
    topic: 'finance',
    how: 'Peníze jsou v léčbě téma, o kterém se nemluví, protože se to zdá malicherné vedle všeho ostatního. Není. Finanční tlak mění rozhodování a stojí za to ho pojmenovat dřív, než začne rozhodovat za vás.',
    steps: [
      { label: 'Co mě na financích tíží nejvíc', hint: 'Částka? Nejistota? Že o tom rozhodujeme spolu? Že to nevidí okolí?' },
      { label: 'Co z toho už vím a co si domýšlím', hint: 'Zapsané výdaje máte v aplikaci. Podívejte se, než se rozhodnete.' },
      { label: 'O čem se potřebuju s někým domluvit', hint: 'S partnerem, s klinikou, v rodině.' },
    ],
  },

  // -------------------------------------------------------------- práce ---
  {
    id: 'ivf-a-prace',
    title: 'IVF a práce',
    when: 'Když se dva kalendáře nedomlouvají.',
    minutes: 5,
    icon: '▤',
    topic: 'prace',
    how: 'Léčba se plánuje ze dne na den a práce na týdny dopředu. To se nedá vyřešit, dá se to jen zvládnout. Cvičení pomůže oddělit, co je opravdu potřeba zařídit, od toho, co vás jen tíží.',
    steps: [
      { label: 'Co mě v práci teď nejvíc stresuje', hint: 'Termíny? Že nemůžu říct pravdu? Že chybím?' },
      { label: 'Co z toho musím vyřešit tenhle týden', hint: 'Jedna nebo dvě věci. Ne seznam.' },
      { label: 'Co může počkat', hint: 'A dovolte si to nechat čekat.' },
    ],
  },

  // ------------------------------------------------------------ klinika ---
  {
    id: 'vztah-ke-klinice',
    title: 'Můj vztah ke klinice',
    when: 'Před konzultací. Nebo po ní, když z ní odcházíte nesvá.',
    minutes: 6,
    icon: '✚',
    topic: 'klinika',
    how: 'Vztah ke klinice se hodnotí těžko, protože jde zároveň o naději i o zdravotní péči. Tohle cvičení ho rozdělí na to, co potřebujete vědět, a na to, co potřebujete cítit. Obojí je legitimní.',
    steps: [
      { label: 'Čemu z léčebného plánu nerozumím', hint: 'Napište to jako otázku. Půjde přenést do Otázek pro lékaře.' },
      { label: 'Co potřebuju, aby na klinice věděli', hint: 'O vás, ne o vašich hodnotách.' },
      { label: 'Co je moje, a co je jejich část', hint: 'Rozhodnutí, informace, odpovědnost.' },
    ],
    closing: 'Co si z dneška odnáším?',
  },
  {
    id: 'dech',
    topic: 'stres',
    title: 'Dýchání 4–6',
    when: 'Když bije srdce, svírá se hrudník nebo nejde usnout.',
    minutes: 5,
    icon: '◍',
    how: 'Nádech na čtyři doby, výdech na šest. Delší výdech než nádech aktivuje tu část nervového systému, která tělo zklidňuje. Není to relaxace „když se to podaří“. Je to mechanika, která funguje i ve chvíli, kdy vám vůbec není do klidu.',
  },
  {
    id: 'uzemneni',
    topic: 'stres',
    title: 'Uzemnění 5–4–3–2–1',
    when: 'Když se myšlenky rozjedou a nejde je zastavit.',
    minutes: 4,
    icon: '◈',
    how: 'Postupně si všimnete pěti věcí, které vidíte, čtyř, které slyšíte, tří, kterých se dotýkáte, dvou, které cítíte, a jedné, kterou chutnáte. Pozornost se tím vrátí z hlavy do přítomné chvíle. Čím konkrétnější popis, tím lépe to funguje.',
    steps: [
      { label: '5 věcí, které vidíte', hint: 'Popište je konkrétně, ne „stůl“, ale „škrábanec na levém rohu stolu“.' },
      { label: '4 věci, které slyšíte', hint: 'I ty, které jste do teď přeslechla.' },
      { label: '3 věci, kterých se dotýkáte', hint: 'Látka, teplota, podložka pod nohama.' },
      { label: '2 věci, které cítíte', hint: 'Vůně v místnosti, vzduch.' },
      { label: '1 věc, kterou chutnáte', hint: 'Nebo prostě chuť v ústech.' },
    ],
  },
  {
    id: 'prerameni',
    topic: 'myslenky',
    title: 'Přerámování myšlenky',
    when: 'Když se v hlavě zasekne jedna věta a zní jako fakt.',
    minutes: 8,
    icon: '❖',
    how: 'Vypíšete myšlenku, která vás tíží, a pak zvlášť to, co ji podporuje, a to, co jí odporuje. Nakonec ji přeformulujete tak, aby byla pravdivá i laskavá. Nejde o to myslet pozitivně. Jde o to myslet přesně. Většina úzkostných myšlenek přesná není.',
    steps: [
      { label: 'Myšlenka', hint: 'Napište ji přesně tak, jak zněla v hlavě. Klidně tvrdě.' },
      { label: 'Co ji podporuje', hint: 'Fakta, ne pocity. Co skutečně nasvědčuje tomu, že je pravdivá?' },
      { label: 'Co jí odporuje', hint: 'Co ji vyvrací nebo zjemňuje? Co byste namítla kamarádce?' },
      { label: 'Přesnější verze', hint: 'Věta, která je pravdivá a zároveň se s ní dá žít.' },
    ],
  },
  {
    id: 'kontrola',
    topic: 'myslenky',
    title: 'Kolo kontroly',
    when: 'Když se myšlenky točí kolem věcí, se kterými nic nenaděláte.',
    minutes: 6,
    icon: '◉',
    how: 'Vypíšete, co vás trápí, a roztřídíte to na věci, které ovlivnit můžete, a na ty, které ne. Pak se zabýváte jen prvním sloupcem. Léčba je plná neovlivnitelného. A energie, kterou tam necháte, chybí jinde.',
    groups: ['treatment', 'waiting', 'diagnosis'],
  },
  {
    id: 'tri-dobre',
    topic: 'malé-veci',
    title: 'Tři dobré věci',
    when: 'Večer, hlavně ve dnech, které vypadaly celé špatně.',
    minutes: 3,
    icon: '✦',
    how: 'Zapíšete tři věci, které dnes proběhly dobře, a u každé krátce proč. Není to nucená vděčnost. Je to trénink pozornosti. Mozek si v zátěži ukládá hlavně hrozby, tohle je vědomé vyvážení. Patří k nejlépe prozkoumaným cvičením v pozitivní psychologii.',
    steps: [
      { label: 'První dobrá věc', hint: 'Klidně úplně malá.' },
      { label: 'Druhá dobrá věc', hint: 'Co k ní vedlo?' },
      { label: 'Třetí dobrá věc', hint: 'Měla jste na ní podíl vy?' },
    ],
  },
  {
    id: 'soucit',
    topic: 'soucit',
    title: 'Dopis sobě',
    when: 'Když si nadáváte nebo máte pocit, že za to můžete.',
    minutes: 10,
    icon: '❦',
    how: 'Napíšete si dopis tak, jak byste psala nejbližší kamarádce ve stejné situaci. Sebe-soucit není omlouvání ani lítost. Je to způsob, jak snížit tlak natolik, aby zbyla energie na to podstatné. Ženy v léčbě k sobě bývají mnohem tvrdší než ke komukoliv jinému.',
    groups: ['loss', 'waiting', 'treatment'],
  },

  // --------------------------------------------- z tištěného diáře Gabi ---
  {
    id: 'udelala-jsem-maximum',
    topic: 'dnes',
    title: 'Udělala jsem maximum',
    when: 'Večer před transferem nebo před odběrem. A pak kdykoli, když se přistihnete, jak hledáte, co jste udělala špatně.',
    minutes: 6,
    icon: '✦',
    how: 'Sepíšete, co jste pro tenhle pokus udělala, a pak výslovně oddělíte to, co ovlivnit nešlo. Hlava po neúspěchu automaticky hledá vinu a najde ji vždycky, protože seznam „co jsem mohla udělat jinak“ je nekonečný. Tenhle zápis je něco, k čemu se dá vrátit a co ten seznam přebije: máte černé na bílém, co jste doopravdy udělala.',
    groups: ['treatment', 'waiting'],
    phases: ['transfer', 'stimulation', 'retrieval', 'two_week_wait'],
    steps: [
      { label: 'Co jsem pro tenhle pokus udělala', hint: 'Léky na čas, kontroly, odběry, změny, které jsem zvládla. Klidně deset řádků.' },
      { label: 'Co jsem udělala navíc pro sebe', hint: 'Spánek, procházky, terapie, hranice v práci, rozhovor s partnerem.' },
      { label: 'Co jsem ovlivnit nemohla', hint: 'Kvalita vajíček, genetika embrya, jak zareagovalo tělo. Nic z toho se nerozhoduje na úrovni, kam dosáhnete.' },
    ],
    closing: 'Kdyby to nevyšlo, co z tohohle seznamu bude pořád platit?',
  },
  {
    id: 'nesrovnavat-cisla',
    topic: 'myslenky',
    title: 'Moje čísla nejsou cizí čísla',
    when: 'Po odběru nebo po telefonátu z embryologie, když srovnáváte svoje počty s cizími.',
    minutes: 5,
    icon: '◔',
    how: 'Rozeberete konkrétní srovnání, které vám leží v hlavě. Čísla z odběru se srovnávat nedají: každá jde do léčby z jiného důvodu, s jinou zásobou a jiným protokolem. Neplatí ani to, že víc folikulů znamená víc vajíček, ani že víc vajíček znamená lepší embrya. Tohle cvičení to srovnání nezakazuje, jen ho dopíše do konce, kde se obvykle rozpadne.',
    groups: ['treatment'],
    phases: ['retrieval', 'fertilization', 'embryo_culture'],
    steps: [
      { label: 'S čím se zrovna srovnávám', hint: 'Napište konkrétně. „Ona měla dvanáct vajíček a já pět.“' },
      { label: 'Co o té druhé ženě nevím', hint: 'Věk, diagnóza, protokol, kolikátý je to cyklus, jak to dopadlo dál.' },
      { label: 'Co vím o sobě', hint: 'Proč jdu na IVF já a co k mým číslům řekl můj lékař.' },
    ],
    closing: 'Změnilo by se něco na mé situaci, kdybych její číslo neznala?',
  },
  {
    id: 'dnes-si-dovolim',
    topic: 'ztrata',
    title: 'Co si dneska dovolím',
    when: 'V den negativního výsledku, po prvním nárazu.',
    minutes: 4,
    icon: '❍',
    how: 'Vyberete si jednu věc, kterou jste si během léčby odpírala, a jednu, která vám dělá dobře. Není to odměna a nemá to nic zahladit. Je to způsob, jak dát tělu signál, že tenhle den někde končí. Truchlení tím nekončí a nemá končit; jen si vedle něj sedne něco jiného.',
    groups: ['loss'],
    phases: ['waiting_next_attempt', 'repeated_failure', 'loss_biochemical'],
    steps: [
      { label: 'Co jsem si celou dobu odpírala', hint: 'Horká vana, káva, jídlo, sport, volný večer. Cokoliv.' },
      { label: 'Co si z toho dneska dovolím', hint: 'Jednu věc stačí. A nemusíte ani to, když dneska nechcete nic.' },
      { label: 'Kdo o dnešku ví', hint: 'Komu jsem to řekla, nebo komu to říct chci. A komu ne.' },
    ],
    closing: 'Co bych dneska potřebovala slyšet od někoho blízkého?',
  },
]

export function exerciseById(id: string): Exercise | undefined {
  return EXERCISES.find((e) => e.id === id)
}

/**
 * Co nabídnout přednostně.
 *
 * Nahoru jde to, co je psané přímo pro aktuální fázi, potom to, co sedí
 * na skupinu fází, a nakonec zbytek. Cílem není schovat ostatní cvičení:
 * jsou dostupná všechna, jen v jiném pořadí.
 */
export function exercisesFor(group: PhaseGroup, phase?: PhaseId): Exercise[] {
  const skore = (e: Exercise): number => {
    if (phase && e.phases?.includes(phase)) return 2
    if (e.groups?.includes(group)) return 1
    return 0
  }
  return [...EXERCISES].sort((a, b) => skore(b) - skore(a))
}

/** Cvičení v jednom okruhu. Prázdné pole = okruh je zatím prázdný. */
export function exercisesInTopic(topic: ExerciseTopic): Exercise[] {
  return EXERCISES.filter((e) => e.topic === topic)
}

/** Okruhy, ve kterých něco je. Prázdná kategorie se nemá kreslit. */
export function topicsWithContent(): TopicDef[] {
  return EXERCISE_TOPICS.filter((t) => EXERCISES.some((e) => e.topic === t.id))
}

/**
 * Návrh techniky podle toho, jak se dnes cítí. Prahy jsou záměrně hrubé.
 * Jde o nabídku, ne o diagnostiku.
 */
export function suggestExercise(mood: number | null, anxiety: number | null): ExerciseId {
  if (anxiety !== null && anxiety >= 4) return 'dech'
  if (mood !== null && mood <= 2) return 'soucit'
  if (anxiety !== null && anxiety >= 3) return 'uzemneni'
  return 'tri-dobre'
}
