import { daysBetween, today as todayIso } from './dates'
import type { IsoDate } from './profile'
import type { TransferKind, TransferStage } from './cycle'

/**
 * Moje cesta po transferu, den po dni.
 *
 * Čekání po transferu je nejdelší dva týdny celé léčby. Žena o nich neví
 * nic: co se děje, co má cítit, co znamená, že necítí nic. Vyhledá si to
 * a najde diskuze, ve kterých si tisíc žen navzájem vykládá píchnutí
 * v podbřišku. Tenhle modul je odpověď: **na každý den jedna stránka**,
 * která říká, co se v téhle fázi může dít, a nikdy netvrdí, co se děje.
 *
 * ------------------------------------------------- EMBRYONÁLNÍ STÁŘÍ ---
 * Klíč k celému obsahu. Embryo se nevyvíjí podle toho, kolikátý den je po
 * transferu, ale podle toho, kolikátý den je od oplodnění. Blastocysta
 * přenesená pátý den je den po transferu šestidenní. Embryo přenesené
 * třetí den je ve stejné chvíli čtyřdenní, tedy morula, a je před ním
 * ještě několik dní vývoje, které to první má za sebou.
 *
 * Proto se obsah o embryu **nikdy** neváže na den po transferu, ale na
 * součet `den kultivace + den po transferu`. Žena po transferu D3 tak
 * nikdy nedostane text napsaný pro blastocystu.
 *
 * Ostatní části (tělo, pocity, podpora) se váží na den po transferu,
 * protože ty se řídí luteální fází a podporou, ne embryem.
 *
 * ---------------------------------------------------------- OPATRNOST ---
 * Žádná věta tady netvrdí, co se v konkrétním těle právě děje. Implantace
 * nemá pevný den, hCG nemá pevnou hodnotu a příznak neznamená výsledek.
 * Používá se „může“, „obvykle“, „v téhle fázi“, „záleží na individuální
 * situaci“. Nikde se neslibuje výsledek a nikde se netvrdí, že absence
 * příznaků něco znamená.
 *
 * Čistý doménový modul.
 */

export interface DaySection {
  title: string
  body: string
}

export interface TransferDay {
  /** Kolikátý den po transferu. 0 = den transferu. */
  dpt: number
  /** Den od oplodnění. Součet dne kultivace a dne po transferu. */
  embryoAge: number
  /** „Den transferu“, „4. den po transferu“. */
  title: string
  /** Kratší popisek pro osu. „Den 4“. */
  short: string
  embryo: DaySection
  telo: DaySection
  pocity: { intro: string; list: string[]; note: string }
  podpora: string
  nemusis: string[]
  muzes: string[]
  /** Věta o hCG. Podle toho, jestli je termín zapsaný. */
  hcg: string
  /** Krátký teaser na zítřek. */
  zitra: string
}

export interface DayInput {
  /** Datum transferu. */
  transferOn: IsoDate
  /** Den kultivace přeneseného embrya. 3 až 6. Když chybí, bere se 5. */
  embryoDay: number | null
  kind: TransferKind
  stage: TransferStage
  /** Kolik embryí se přeneslo. */
  count: number | null
  /** Termín odběru hCG, když ho žena zná. */
  hcgOn: IsoDate | null
  /** Den, ke kterému se stránka počítá. */
  today?: IsoDate
  /** Konkrétní den, který si žena otevřela z osy. Přebíjí dnešek. */
  dpt?: number
}

// ============================================================== EMBRYO ===

/**
 * Co se může dít s embryem podle jeho stáří od oplodnění.
 *
 * Časování je typické, ne dané. Embrya se vyvíjejí různě rychle a rozdíl
 * jednoho dne neznamená, že je něco špatně. Proto tu nikde nestojí „dnes
 * se embryo uhnízdilo“.
 */
const EMBRYO: Record<number, DaySection> = {
  3: {
    title: 'Embryo se rýhuje',
    body: `Embryo má v téhle fázi obvykle zhruba šest až osm buněk. Buňky se dělí, ale embryo jako celek zatím neroste: dělí se pořád stejný objem na menší a menší části.

Buňky ještě nejsou nijak specializované. Teprve se rozhoduje, co se z nich stane. V tomhle období také embryo začíná používat vlastní genetickou informaci; do té doby žilo z toho, co mu do vajíčka připravila příroda.

Rychlost dělení se mezi embryi liší. Pomalejší vývoj automaticky neznamená horší embryo a rychlejší neznamená lepší. Co to znamená u vašeho embrya, umí říct jedině embryolog, který ho viděl.`,
  },
  4: {
    title: 'Embryo se stává morulou',
    body: `Buňky se k sobě přitisknou a hranice mezi nimi se stírají. Z hromádky oddělených buněk vzniká kompaktní kulička, které se říká **morula**. Latinsky moruše, protože tak vypadá.

Je to důležitý přechod: buňky spolu poprvé začínají komunikovat a chovat se jako jeden celek, ne jako skupina jednotlivců. Připravuje se rozdělení na dvě různé linie, ze kterých pak vznikne miminko a placenta.

Čtvrtý den bývá v laboratoři nejméně vděčný na hodnocení. Embryo je kompaktní a moc toho není vidět. Řada pracovišť proto čtvrtý den embrya záměrně nehodnotí.`,
  },
  5: {
    title: 'Embryo může být blastocysta',
    body: `Uvnitř moruly se začne tvořit dutina vyplněná tekutinou a embryo se mění v **blastocystu**. Poprvé jsou v něm dvě rozlišené části: vnitřní buněčná masa, ze které se může vyvinout miminko, a trofektoderm, ze kterého vzniká placenta.

Blastocysta se postupně rozpíná a tenčí se obal, který ji celou dobu obklopoval (zona pellucida).

Pátý den je jenom typický čas. Některá embrya jsou blastocystou už tady, jiná až šestý nebo sedmý den, a rozdíl sám o sobě není verdikt.`,
  },
  6: {
    title: 'Embryo se může začít uvolňovat z obalu',
    body: `Blastocysta se dál rozpíná, tlačí na obal a ten praská. Embryo z něj postupně vyklouzává. Tomu se říká **hatching**, doslova líhnutí.

Bez toho se embryo nemůže dostat do kontaktu se sliznicí. Dokud je v obalu, nemá se čeho chytit.

Někde se u vybraných embryí dělá asistovaný hatching, kdy embryolog obal nepatrně naruší. O tom, jestli má u konkrétního páru smysl, rozhoduje klinika.`,
  },
  7: {
    title: 'Embryo může přilnout ke sliznici',
    body: `Volné embryo se může přiložit ke sliznici a začít k ní přilnout. Odborně se tomu říká apozice a adheze: nejdřív se embryo jen položí na správné místo, potom se ho začne držet.

Je to okamžik, kdy si embryo a sliznice musí padnout do noty. Musí být připravené obě strany zároveň, ne jen jedna.

Tenhle děj **nemá pevný den**. U některých těhotenství probíhá dřív, u jiných později, a nedá se poznat ani vycítit. Vaše tělo vám o tom nedá zprávu.`,
  },
  8: {
    title: 'Embryo se může začít zanořovat',
    body: `Pokud přilnutí proběhlo, buňky vnějšího obalu embrya začínají prorůstat do sliznice. Embryo se do ní zanořuje a napojuje se na její cévy. Tomu se říká invaze.

Je to začátek spojení, ze kterého později vznikne placenta.

Nic z toho se neděje najednou a nic z toho není hotové z hodiny na hodinu. Jsou to dny práce, kterou nevidíte a necítíte.`,
  },
  9: {
    title: 'Může začít vznikat hCG',
    body: `Buňky, ze kterých vzniká placenta, začínají tvořit hormon **hCG**. Zatím ho bývá velmi málo, obvykle míň, než dokáže zachytit jakýkoli test.

hCG je zpráva pro žluté tělísko ve vaječníku, aby dál tvořilo progesteron a sliznice se neodloupla.

Že se hCG teprve rozjíždí, je důvod, proč se doma nemá testovat brzy. Negativní test v téhle fázi neříká nic o tom, jak to dopadne.`,
  },
  10: {
    title: 'hCG může začít stoupat',
    body: `Zanořování pokračuje a množství hCG může začít stoupat. U některých těhotenství je v tuhle chvíli v krvi poprvé zachytitelné, u jiných ještě ne.

Rozptyl je tady obrovský a naprosto normální. Dvě těhotenství, která obě skončí zdravým miminkem, můžou mít v týž den úplně jiné číslo.

Proto se hodnoty mezi ženami nedají porovnávat. Vaše číslo znamená něco jen ve vaší situaci a v čase.`,
  },
  11: {
    title: 'hCG může dál stoupat',
    body: `Pokud se embryo zanořilo, hCG obvykle přibývá. V raném těhotenství se jeho množství typicky zdvojnásobuje zhruba každé dva dny, ale i tohle je pravidlo s velkými výjimkami.

Sliznice se dál přestavuje a tvoří zázemí pro budoucí placentu.

Jedno číslo hCG samo o sobě neřekne skoro nic. Vypovídající je až vývoj mezi dvěma odběry, a i ten čte lékař.`,
  },
  12: {
    title: 'hCG bývá měřitelné v krvi',
    body: `V tomhle období bývá hCG u probíhajícího těhotenství měřitelné z krve. Právě proto kliniky termín odběru plánují zhruba sem.

Krevní odběr je citlivější než domácí test a dá číslo, ne proužek. To je celý rozdíl a je to velký rozdíl.

Kdy přesně máte na odběr jít, určuje vaše klinika. Řiďte se jejím termínem, ne dnem, který kdy někde četla jiná žena.`,
  },
  13: {
    title: 'hCG může dál růst',
    body: `Pokud těhotenství pokračuje, hCG obvykle roste dál. Spolu s ním se mění hormonální prostředí v celém těle.

Placenta se teprve zakládá. Trvá ještě týdny, než převezme tvorbu hormonů od vaječníku, a proto se podpora luteální fáze obvykle nevysazuje hned.

O jakékoli změně léčby rozhoduje výhradně vaše klinika.`,
  },
  14: {
    title: 'Zázemí pro placentu se dál buduje',
    body: `Spojení mezi embryem a sliznicí se prohlubuje. Vzniká síť, přes kterou bude embryo dostávat kyslík a živiny.

Samotné embryo je pořád mikroskopické. Všechno, co teď probíhá, je stavba zázemí, ne růst miminka.

Na ultrazvuku ještě není co vidět. První ultrazvuk po pozitivním hCG proto přichází až za několik týdnů.`,
  },
  15: {
    title: 'Placentární oběh se rozbíhá',
    body: `V trofoblastu se otevírají první dutinky, do kterých se dostává mateřská krev. Je to začátek výměny mezi vámi a embryem, zatím velmi hrubý.

Právě tenhle krok bývá důvod, proč hCG od téhle doby často stoupá rychleji.

Pro vás se navenek nemění nic. Rozdíl je měřitelný jedině v krvi.`,
  },
  16: {
    title: 'Embryo mění tvar, ne velikost',
    body: `Uvnitř zárodečného terčíku se buňky uspořádávají do vrstev, ze kterých později vznikne nervová soustava, srdce nebo trávicí trubice.

Je to práce na plánu, ne na objemu. Embryo je pořád menší než tečka za touhle větou.

Nic z toho nejde ovlivnit tím, co uděláte nebo neuděláte. Probíhá to samo.`,
  },
  17: {
    title: 'hCG se obvykle zdvojnásobuje',
    body: `V tomhle období bývá zvykem sledovat, jestli hodnota hCG za dva až tři dny přibližně zdvojnásobí. Vývoj se od téhle chvíle posuzuje spíš podle křivky než podle jednoho čísla.

Zdvojení je orientační pravidlo, ne zákon. Jsou těhotenství, která rostou pomaleji a přesto pokračují, i taková, která rostou pěkně a nepokračují.

Co vaše čísla znamenají, řekne jedině vaše klinika.`,
  },
  18: {
    title: 'Vzniká žloutkový váček',
    body: `Uvnitř plodového vejce se tvoří žloutkový váček. Je to první struktura, kterou půjde na ultrazvuku poznat, a dočasně vyživuje embryo, než převezme práci placenta.

Vidět je ale zatím pořád nebude. Na to je celý útvar příliš malý.

Tělo mezitím udržuje žluté tělísko v provozu, aby progesteron neklesl.`,
  },
  19: {
    title: 'Základ srdce se zakládá',
    body: `Ze střední zárodečné vrstvy se začíná formovat srdeční trubice. Tluče až o něco později, teď se teprve staví.

Zní to jako velký milník. Ve skutečnosti jde o strukturu velkou zlomek milimetru.

Znovu platí, že se to nedá nijak podpořit ani urychlit. Vaše práce je brát podporu podle rozpisu.`,
  },
  20: {
    title: 'Plodové vejce roste',
    body: `Plodové vejce se zvětšuje natolik, že se u části těhotenství začíná dát zachytit na vaginálním ultrazvuku. Bývá to zhruba mezi pátým a šestým týdnem těhotenství.

Termín ultrazvuku určuje klinika podle vašich hodnot, ne podle kalendáře z internetu. Dřívější vyšetření často jen přidá nejistotu.

Do té doby se nedá dělat nic než čekat, což je ta nejtěžší část.`,
  },
  21: {
    title: 'Čeká se na první ultrazvuk',
    body: `Od téhle chvíle se o vývoji rozhoduje na ultrazvuku, ne v laboratoři. Opakované odběry hCG už mívají menší výpovědní hodnotu než obraz.

Mezi posledním odběrem a prvním ultrazvukem bývá několik dní až týdnů. Je to další čekání a je v pořádku, že je těžké.

Kdy přesně přijít, řekne vaše klinika.`,
  },
  22: {
    title: 'Vývoj pokračuje mimo dosah čísel',
    body: `Embryo se dál vyvíjí a zakládají se orgánové systémy. Ani jedno se nedá ověřit jinak než vyšetřením u lékaře.

Tělo o tom nedává spolehlivé znamení. Ani dobré, ani špatné, a to platí v obou směrech.

Další krok patří vaší klinice.`,
  },
}

/** Za dvaadvacátým dnem už o vývoji rozhoduje ultrazvuk, ne kalendář. */
const EMBRYO_DAL: DaySection = {
  title: 'Vývoj pokračuje mimo dosah testů',
  body: `Pokud těhotenství pokračuje, embryo se dál zanořuje a hCG dál stoupá. Nic z toho se ale nedá zachytit jinak než odběrem a později ultrazvukem.

Tělo v téhle fázi nedává žádné spolehlivé znamení. Ani dobré, ani špatné.

Co dál a kdy, řekne vaše klinika podle vašeho výsledku.`,
}

// ================================================================ TĚLO ===

const TELO: Record<number, DaySection> = {
  0: {
    title: 'Co se dnes dělo v děloze',
    body: `Embryo bylo tenkým katétrem vloženo do dutiny děložní. Nikam nevypadne: děloha není trubka, ale úzký prostor, jehož stěny na sebe doléhají. Postavit se, jít na záchod nebo jet domů na tom nic nemění.

Sliznice je připravená hormonálně, ne mechanicky. Progesteron ji drží ve stavu, kdy je embryo schopná přijmout.

Můžete cítit lehké podráždění po zavedení katétru nebo malé špinění. Obojí bývá běžné a souvisí s výkonem, ne s výsledkem.`,
  },
  1: {
    title: 'Sliznice a hormonální podpora',
    body: `Embryo je volně v dutině děložní. Sliznice je pod vlivem progesteronu ve fázi, kdy je nejvíc připravená.

Progesteron dostáváte buď z podpory, kterou vám klinika předepsala, nebo ho tvoří žluté tělísko po odběru. U kryotransferu v hormonálně řízeném cyklu ho tělo netvoří samo vůbec, a proto se podpora nesmí vynechat.

Podporu užívejte přesně podle rozpisu kliniky. O jakékoli změně nebo vysazení rozhoduje jedině váš lékař.`,
  },
  2: {
    title: 'Nic není vidět a nic není cítit',
    body: `Tělo pokračuje ve stejné práci jako včera. Sliznice je pod vlivem progesteronu a čeká.

Progesteron sám o sobě dělá spoustu věcí, které se dají snadno splést s časným těhotenstvím: nadýmání, citlivá prsa, únavu, změny nálady. Je to hormon, ne zpráva.

Právě proto se z pocitů v téhle fázi nedá nic vyčíst.`,
  },
  3: {
    title: 'Sliznice a její okno',
    body: `Sliznice má období, kdy je nejvíc připravená přijmout embryo. Říká se mu implantační okno a trvá řádově dny, ne hodiny.

Celá příprava před transferem, ať už hormonální nebo sledování přirozeného cyklu, mířila právě na to, aby se okno a embryo potkaly.

Kdy přesně okno u vás je, se běžně neměří. U opakovaných neúspěchů se to na některých pracovištích vyšetřuje zvlášť.`,
  },
  4: {
    title: 'Prokrvení a příprava sliznice',
    body: `Sliznice je pod vlivem progesteronu prokrvená a její žlázky vylučují látky, ze kterých embryo v prvních dnech čerpá.

Někdy se objeví lehké špinění. Může souviset s podporou, s dráždivostí děložního hrdla nebo s ničím konkrétním.

Špinění samo o sobě nic neznamená. Silné krvácení je ale důvod ozvat se klinice.`,
  },
  5: {
    title: 'Hormonální prostředí',
    body: `Progesteron je v téhle fázi hlavní hormon. Drží sliznici, tlumí stahy dělohy a udržuje prostředí klidné.

Vedle něj působí estrogen, který sliznici pomáhá udržet strukturu. U hormonálně řízených kryotransferů se často podává také.

Hladiny se v luteální fázi běžně mění a kolísání není chyba.`,
  },
  6: {
    title: 'Prostředí pro přilnutí',
    body: `Pokud se embryo dostalo z obalu, může být v kontaktu se sliznicí. Sliznice v téhle fázi mění povrch svých buněk tak, aby se embryo mělo čeho chytit.

Je to oboustranný děj. Nestačí dobré embryo a nestačí dobrá sliznice; musí se sejít obojí a ve správnou chvíli.

Ovlivnit ho vlastním chováním nemůžete. Ležení, ani jeho opak, na to nemá prokázaný vliv.`,
  },
  7: {
    title: 'Možné implantační špinění',
    body: `Když se embryo zanořuje do sliznice, může narušit drobné cévy a objeví se slabé, obvykle světlé nebo hnědavé špinění. Bývá krátké a slabé.

Většina žen ale žádné špinění nemá, a to je stejně normální. Bez špinění probíhá naprostá většina těhotenství.

Špinění se navíc nedá odlišit od špinění z podpory nebo z blížící se menstruace. Jako informace o výsledku je nepoužitelné.`,
  },
  8: {
    title: 'Hormonální prostředí se může začít měnit',
    body: `Pokud vzniká hCG, začíná ovlivňovat žluté tělísko a přes něj hladinu progesteronu.

Množství je zatím tak malé, že se to nedá poznat na ničem, co byste doma změřila nebo ucítila.

Bazální teplota, pocity ani nálada nejsou v téhle fázi vypovídající.`,
  },
  9: {
    title: 'Tělo pod dvojí podporou',
    body: `Kromě vlastních hormonů působí i podpora, kterou berete. Nadýmání, tlak v podbřišku, citlivá prsa a únava jsou v téhle fázi velmi časté a nejsou důkazem ničeho.

Ženy s pozitivním i negativním výsledkem popisují v tomhle období prakticky totéž. To není náhoda: působí na ně stejný hormon.

Pokračujte v léčbě podle rozpisu kliniky.`,
  },
  10: {
    title: 'Blíží se čas, kdy má odběr smysl',
    body: `V tomhle období bývá hCG u probíhajícího těhotenství poprvé měřitelné z krve, ale ne u všech. Rozptyl je velký.

Právě proto se domácí testy dělané dřív často pletou v obou směrech: ukážou negativní výsledek u těhotenství, které pokračuje, nebo slabou čárku z jiného důvodu.

Termín odběru určuje klinika a je to jediné číslo, podle kterého se řídit.`,
  },
  11: {
    title: 'Čekání na číslo',
    body: `Tělo dělá to, co dělalo předchozí dny. Nic dramatického se neděje ani u těhotenství, které pokračuje.

Podpora luteální fáze pokračuje beze změny, dokud neřekne klinika jinak. Ani při krvácení se nevysazuje sama od sebe.

Zavolat na kliniku a zeptat se je vždycky správný krok.`,
  },
  12: {
    title: 'Období odběru',
    body: `Odběr hCG z krve je jediný spolehlivý způsob, jak výsledek zjistit. Číslo se pak čte v kontextu dne, počtu embryí a vaší situace.

Jeden odběr často nestačí. Kliniky běžně opakují odběr za dva až tři dny a sledují, jak se hodnota vyvíjí.

Výklad patří vašemu lékaři. Tabulky z internetu nejsou vaše tabulka.`,
  },
  13: {
    title: 'Den, na který se čekalo',
    body: `Kolem tohohle dne bývá naplánovaný odběr hCG. Přesný termín určuje klinika podle dne embrya a typu transferu, takže se může lišit o den nebo dva.

Ať už výsledek přijde dnes nebo za pár dní, tahle část končí. To je jediná jistota, kterou tenhle den nabízí.

Podporu berte dál přesně podle rozpisu, dokud vám lékař neřekne jinak. Ani při krvácení ji nevysazujte sama.`,
  },
  14: {
    title: 'Když výsledek ještě nemáte',
    body: `Laboratoře posílají výsledky v různých časech a některé kliniky volají až odpoledne. Zpoždění o půl dne nic neznamená.

Pokud jste odběr ještě neabsolvovala, ozvěte se klinice a domluvte si ho. Domácí test tenhle krok nenahradí.

Dnešek nemusíte zvládnout. Stačí ho přečkat.`,
  },
  15: {
    title: 'Kontrolní odběr',
    body: `Jeden výsledek většinou nestačí. Kliniky běžně opakují odběr za dva až tři dny a sledují, jak se hodnota vyvíjí v čase.

Druhé číslo řekne víc než první. Právě proto se první výsledek nedá číst jako konečný verdikt v žádném směru.

Mezi odběry se nedá udělat nic, co by číslo ovlivnilo.`,
  },
  16: {
    title: 'Hormonální podpora pokračuje',
    body: `Progesteron a další podpora se po pozitivním výsledku obvykle nevysazují. V hormonálně řízeném cyklu tělo progesteron samo netvoří a vysazení by mohlo být problém.

O délce podpory rozhoduje vaše klinika. Bývá to týdny, ne dny.

Pokud si nejste jistá, co a jak dlouho brát, zavolejte. Je to běžný dotaz.`,
  },
  17: {
    title: 'Špinění a křeče v tomhle období',
    body: `Lehké špinění a tahavé bolesti se v prvních týdnech objevují často a samy o sobě nic neznamenají. Souvisejí s hormonální podporou i se změnami v děloze.

Silné krvácení, prudká nebo jednostranná bolest, mdloby nebo horečka jsou jiná situace. Tam se nečeká do rána.

Když si nejste jistá, zavolejte na kliniku. Od toho tam jsou.`,
  },
  18: {
    title: 'Než přijde ultrazvuk',
    body: `Další informaci přinese až ultrazvuk. Do té doby se stav nemění tím, jak často o něm přemýšlíte.

Bývá to období, kdy úzkost roste, protože ubyla čísla a nepřibyl obraz. Je to normální a nic to nevypovídá o výsledku.

Když čekání nezvládáte, mluvte o tom s někým. Není to slabost.`,
  },
  19: {
    title: 'Co si připravit na ultrazvuk',
    body: `Poznamenejte si data odběrů a jejich hodnoty, datum transferu, den embrya a jméno podpory, kterou berete. Aplikace to má uložené, stačí přehled otevřít.

Vezměte s sebou i otázky. Na vyšetření se na ně zapomíná spolehlivě.

Můžete si vzít doprovod. Většina klinik to umožní, i když se to nikde nepíše.`,
  },
  20: {
    title: 'Konec dvoutýdenního čekání',
    body: `Tahle část cesty už není o dnech po transferu. Další kroky určuje výsledek a vaše klinika, ne kalendář.

Pokud je výsledek negativní nebo se něco změnilo, zaznamenejte to v aplikaci. Obsah se pak přizpůsobí tomu, kde jste doopravdy.

Ať už jdete kamkoliv, tohle období jste zvládla.`,
  },
}

const TELO_DAL: DaySection = {
  title: 'Po termínu odběru',
  body: `Pokud jste odběr ještě neměla, ozvěte se klinice a domluvte si ho. Čekání navíc už nic nezpřesní.

Pokud výsledek máte, další krok patří do rukou vašeho lékaře. Podle čísla se rozhodne, jestli se odběr opakuje a kdy bude první ultrazvuk.

Podporu neměňte ani nevysazujte sama.`,
}

// ============================================================== POCITY ===

const POCITY_BEZNE = [
  'žádné příznaky',
  'pobolívání nebo tah v podbřišku',
  'křeče podobné menstruačním',
  'tlak nebo plnost v podbřišku',
  'nafouknutí',
  'citlivá nebo napjatá prsa',
  'únava',
  'bolest hlavy',
  'nevolnost',
  'změny nálady',
  'špinění',
]

const POCITY_NOTE =
  'Příznaky můžou souviset s hormonální léčbou, s běžnými změnami v těle nebo s těhotenstvím. Samotné příznaky nejsou spolehlivý způsob, jak určit výsledek transferu. A jejich nepřítomnost neznamená, že transfer nevyšel.'

function pocityFor(dpt: number): { intro: string; list: string[]; note: string } {
  if (dpt === 0) {
    return {
      intro: 'Po transferu se běžně objevuje:',
      list: [
        'žádné příznaky',
        'lehké pobolívání po zavedení katétru',
        'slabé špinění',
        'tlak v podbřišku',
        'nutkání na močení, když jste měla plný močový měchýř',
        'úleva i napětí zároveň',
      ],
      note: POCITY_NOTE,
    }
  }
  if (dpt <= 3) {
    return {
      intro: 'V prvních dnech po transferu se běžně objevuje:',
      list: ['žádné příznaky', 'pobolívání v podbřišku', 'nafouknutí', 'citlivá prsa', 'únava', 'slabé špinění'],
      note: POCITY_NOTE,
    }
  }
  if (dpt <= 7) {
    return { intro: 'V téhle fázi se běžně objevuje:', list: POCITY_BEZNE, note: POCITY_NOTE }
  }
  return {
    intro: 'Ke konci čekání se běžně objevuje:',
    list: [...POCITY_BEZNE, 'pocit, že přijde menstruace'],
    note: `${POCITY_NOTE} Pocit, že přichází menstruace, popisují ženy s pozitivním i negativním výsledkem stejně často.`,
  }
}

// ============================================================ PODPORA ===

/**
 * Jedna věta na den. Bez slibů, bez „určitě to vyjde“ a bez vyzývání
 * k pozitivnímu myšlení. Věty se opakují v cyklu, ale první dny jsou
 * napsané na míru, protože tam je to nejtěžší.
 */
const PODPORA: string[] = [
  'Dnes jste udělala všechno, co udělat šlo. Zbytek na vás nezáleží a to je asi to nejtěžší, co se dá o téhle době říct.',
  'Nemusíte vědět, jak to dopadne. Dnes stačí projít dneškem.',
  'To, že dnes nic necítíte, neznamená, že se nic neděje. A když něco cítíte, taky to nic neznamená. Je to nespravedlivé, ale je to tak.',
  'Nemusíte hledat odpověď v každém píchnutí. Odpověď dnes nikde není.',
  'Vaše tělo dnes nemusí nic dokazovat.',
  'Můžete být nervózní. Nervozita nic nepokazí.',
  'Není potřeba být statečná. Stačí být.',
  'Dneska je jenom jeden den. Nemusí se do něj vejít celá vaše cesta.',
  'Když vás to celé dnes rozčiluje, je to v pořádku. Čekání je opravdu na vztek.',
  'Nemusíte to nikomu vysvětlovat. Ani sobě.',
  'Můžete se přistihnout, jak plánujete oba konce najednou. Není to slabost, je to způsob, jak se hlava chrání.',
  'Naděje a strach se nevylučují. Většinou přicházejí spolu.',
  'Nemusíte být vděčná za to, že máte aspoň tuhle šanci. Můžete jenom čekat a být z toho unavená.',
  'Vaše hodnota nezávisí na tom, co ukáže odběr.',
  'Dnes si nemusíte poradit se vším. Jenom s dneškem.',
]

// ================================================= CO DNES NEMUSÍTE ===

const NEMUSIS_ZAKLAD = [
  'analyzovat každý pocit',
  'porovnávat své příznaky s jinými ženami',
  'hledat každé píchnutí na internetu',
  'hledat znamení',
]

const MUZES_ZAKLAD = [
  'odpočívat',
  'pokračovat v léčbě přesně podle pokynů kliniky',
  'dělat běžné věci podle doporučení svého lékaře',
  'věnovat se něčemu úplně jinému',
  'dovolit si nevědět',
]

// ================================================================ HCG ===

function hcgVeta(daysToHcg: number | null, hcgOn: IsoDate | null, dpt: number): string {
  if (hcgOn === null) {
    return `Termín odběru hCG zatím zapsaný nemáte. Kdy se má testovat, se mezi klinikami liší. Řiďte se především doporučením svého lékaře. Až termín znáte, můžete si ho doplnit a začne se odpočítávat.`
  }
  if (daysToHcg === null) return 'Termín odběru hCG už máte za sebou.'
  if (daysToHcg === 0) return 'Odběr hCG je dnes.'
  if (daysToHcg === 1) return 'Odběr hCG je zítra.'
  const dnesek = dpt === 0 ? 'Dnes je den transferu.' : `Dnes je ${dpt}. den po transferu.`
  return `Do odběru hCG zbývá ${daysToHcg} ${daysToHcg < 5 ? 'dny' : 'dní'}. ${dnesek}`
}

// =============================================================== SKLÁDÁ ===

function embryoFor(age: number): DaySection {
  return EMBRYO[age] ?? (age < 3 ? EMBRYO[3] : EMBRYO_DAL)
}

function teloFor(dpt: number): DaySection {
  return TELO[dpt] ?? TELO_DAL
}

function nadpis(dpt: number): string {
  if (dpt === 0) return 'Den transferu'
  return `${dpt}. den po transferu`
}

/** Krátký teaser na zítřek. Důvod se zítra vrátit. */
function zitraText(dpt: number, embryoDay: number): string {
  const zitraAge = embryoDay + dpt + 1
  const e = embryoFor(zitraAge)
  return `${nadpis(dpt + 1)}. ${e.title}.`
}

export function transferDay(input: DayInput): TransferDay {
  const today = input.today ?? todayIso()
  const dpt = input.dpt ?? Math.max(0, daysBetween(input.transferOn, today))
  const embryoDay = input.embryoDay ?? 5
  const embryoAge = embryoDay + dpt

  const daysToHcg =
    input.hcgOn === null ? null : input.hcgOn >= today ? daysBetween(today, input.hcgOn) : null

  const nemusis = [...NEMUSIS_ZAKLAD]
  if (embryoAge < 12) nemusis.push('dělat domácí test dřív, než má smysl')

  return {
    dpt,
    embryoAge,
    title: nadpis(dpt),
    short: dpt === 0 ? 'Transfer' : `Den ${dpt}`,
    embryo: embryoFor(embryoAge),
    telo: teloFor(dpt),
    pocity: pocityFor(dpt),
    podpora: PODPORA[dpt % PODPORA.length] ?? PODPORA[0],
    nemusis,
    muzes: MUZES_ZAKLAD,
    hcg: hcgVeta(daysToHcg, input.hcgOn, dpt),
    zitra: zitraText(dpt, embryoDay),
  }
}

/**
 * Kolik dní má cesta po transferu.
 *
 * Do odběru hCG, když je zapsaný. Jinak orientačně tak, aby pokryla obvyklé
 * období testování, ale nikdy neskončila dřív, než je dnešek.
 */
export function journeyLength(input: {
  transferOn: IsoDate
  embryoDay: number | null
  hcgOn: IsoDate | null
  today?: IsoDate
}): number {
  const today = input.today ?? todayIso()
  const dnes = Math.max(0, daysBetween(input.transferOn, today))
  const doOdberu = input.hcgOn ? daysBetween(input.transferOn, input.hcgOn) : null
  const odhad = (input.embryoDay ?? 5) === 3 ? 12 : 10
  return Math.max(dnes, doOdberu ?? odhad)
}

/** Vývoj embrya po dnech kultivace. Pro sekci „Embryo development“. */
export interface StageInfo {
  day: number
  label: string
  stage: string
  body: string
}

export const EMBRYO_DEVELOPMENT: StageInfo[] = [
  {
    day: 3,
    label: 'D3',
    stage: 'Rýhování (cleavage)',
    body: 'Zhruba šest až osm buněk. Embryo se dělí, ale neroste; stejný objem se dělí na menší části. Transfer třetí den se dělá tehdy, když je lepší vrátit embryo do těla dřív než pokračovat v kultivaci, nebo když je embryí málo.',
  },
  {
    day: 4,
    label: 'D4',
    stage: 'Morula',
    body: 'Buňky se k sobě přitisknou a hranice mezi nimi se stírají. Vzniká kompaktní kulička. Čtvrtý den se hodnotí nejhůř, protože není moc co vidět, a řada pracovišť ho záměrně přeskakuje.',
  },
  {
    day: 5,
    label: 'D5',
    stage: 'Blastocysta',
    body: 'Uvnitř vzniká dutina a embryo se poprvé dělí na dvě různé části: vnitřní buněčnou masu a trofektoderm. Pátý den je nejčastější den transferu i zamrazení, protože je v tuhle chvíli nejlíp poznat, jak se embryo vyvíjí.',
  },
  {
    day: 6,
    label: 'D6',
    stage: 'Blastocysta',
    body: 'Embryo došlo do blastocysty o den později. Šestidenní blastocysty se běžně přenášejí i mrazí a rozdíl jednoho dne sám o sobě není verdikt. Rychlost vývoje se mezi embryi liší úplně běžně.',
  },
]

/** Co znamená hodnocení embrya. Bez slibů. */
export const GRADING_NOTE = `Hodnocení jako „4AA“ popisuje, jak embryo v daný okamžik **vypadalo pod mikroskopem**: jak je blastocysta rozepnutá a jak vypadají její dvě části. Je to popis vzhledu, ne předpověď.

Embrya s krásným hodnocením se neuhnízdí a embrya s průměrným ano. Hodnocení pomáhá embryologovi vybrat, které embryo přenést první, a tím jeho práce končí.

Co znamená vaše konkrétní hodnocení, řekne jedině embryolog nebo lékař, který vaše embryo viděl.`
