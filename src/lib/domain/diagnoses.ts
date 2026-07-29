import type { ModifierId } from './profile'

/**
 * Vysvětlení diagnóz a situací.
 *
 * V aplikaci se nikde nesmí objevit nálepka, kterou si uživatelka nemůže
 * rozkliknout. Každý modifikátor tady má: co to je, co to znamená pro cestu
 * a na co se zeptat lékaře.
 *
 * Nikde není prognóza pro konkrétní ženu ani čísla úspěšnosti — obojí závisí
 * na kontextu, který aplikace nemá.
 */

export interface DiagnosisInfo {
  /** Co to je, jednou nebo dvěma větami a bez latiny. */
  what: string
  /** Co to znamená pro cestu za dítětem. */
  meaning: string
  /** Otázky, které se k tomu vyplatí položit. */
  ask: string[]
}

export const DIAGNOSIS_INFO: Record<ModifierId, DiagnosisInfo> = {
  pcos: {
    what: 'Syndrom polycystických ovarií. Hormonální porucha, při které se ve vaječnících hromadí nedozrálé folikuly a ovulace bývá nepravidelná nebo chybí.',
    meaning:
      'Nejčastější příčina poruch ovulace — a zároveň dobře léčitelná. Ve stimulaci bývá odpověď silná, takže se hlídá riziko OHSS. Často se řeší i citlivost na inzulin a váha.',
    ask: [
      'Ovuluji vůbec, a poznáme to podle čeho?',
      'Mám vyšetřenou citlivost na inzulin?',
      'Jaké mám riziko OHSS a jak ho budeme snižovat?',
    ],
  },
  endometriosis: {
    what: 'Endometrióza. Tkáň podobná děložní sliznici roste mimo dělohu — na vaječnících, pobřišnici nebo jinde v pánvi.',
    meaning:
      'Může způsobovat bolestivou menstruaci, srůsty a snižovat ovariální rezervu. Léčba se plánuje individuálně; někdy se operuje před IVF, jindy se operace odkládá, protože sama může rezervu snížit.',
    ask: [
      'V jakém je to u mě rozsahu?',
      'Má v mém případě smysl operovat před IVF, nebo ne?',
      'Ovlivňuje to moji ovariální rezervu?',
    ],
  },
  adenomyosis: {
    what: 'Adenomyóza. Sliznice prorůstá do svaloviny děložní stěny.',
    meaning:
      'Souvisí s bolestivou a silnou menstruací a může ovlivnit uhnízdění embrya. U části žen se před transferem volí přípravný protokol, který děložní prostředí zklidní.',
    ask: ['Jak to ovlivňuje uhnízdění?', 'Doporučujete přípravu před transferem?'],
  },
  low_amh: {
    what: 'Nízké AMH. Hormon, který orientačně vypovídá o ovariální rezervě — zhruba o tom, kolik vajíček ve vaječnících zbývá.',
    meaning:
      'Neříká nic o kvalitě vajíček ani o tom, jestli otěhotníte. Ovlivňuje hlavně to, kolik vajíček se dá čekat po stimulaci, a tím i volbu protokolu. Nízké AMH neznamená, že je pozdě.',
    ask: [
      'Kolik vajíček podle mých hodnot očekáváte?',
      'Jaký protokol je pro mě vhodný?',
      'Má smysl neotálet s dalším cyklem?',
    ],
  },
  male_factor: {
    what: 'Mužský faktor. Odchylka v počtu, pohyblivosti nebo tvaru spermií, případně v jejich DNA.',
    meaning:
      'Podílí se zhruba na polovině případů neplodnosti. Řada příčin je ovlivnitelná — od životního stylu po urologickou léčbu. U výraznějších nálezů se používá ICSI.',
    ask: [
      'Má smysl vyšetření u urologa nebo androloga?',
      'Doporučujete vyšetření fragmentace DNA spermií?',
      'Budeme dělat ICSI a proč?',
    ],
  },
  tubal_factor: {
    what: 'Neprůchodné nebo poškozené vejcovody. Vajíčko se nemůže potkat se spermií přirozenou cestou.',
    meaning:
      'IVF tuhle překážku obchází, protože oplodnění probíhá v laboratoři. Pokud je vejcovod naplněný tekutinou (hydrosalpinx), doporučuje se ho před transferem řešit — zhoršuje uhnízdění.',
    ask: ['Je některý vejcovod naplněný tekutinou?', 'Má se před IVF operovat?'],
  },
  thyroid: {
    what: 'Onemocnění štítné žlázy. Nejčastěji snížená funkce nebo autoimunitní zánět (pozitivní anti-TPO).',
    meaning:
      'Jedna z nejlépe řešitelných příčin problémů s otěhotněním i s udržením těhotenství. V těhotenství a při plánování platí přísnější cílové hodnoty TSH než běžně.',
    ask: [
      'Jaká je moje cílová hodnota TSH při plánování a v těhotenství?',
      'Jak často budeme kontrolovat?',
      'Mám pozitivní protilátky, a co to znamená?',
    ],
  },
  thrombophilia: {
    what: 'Trombofilie. Vrozený nebo získaný sklon ke zvýšené srážlivosti krve.',
    meaning:
      'Sleduje se hlavně kvůli riziku trombózy v těhotenství a po porodu. U některých typů se v těhotenství nasazují nízkomolekulární hepariny. Plošné podávání bez indikace se nedoporučuje.',
    ask: [
      'Jaký typ mám a co z toho plyne?',
      'Budu potřebovat injekce v těhotenství a po porodu?',
      'Mám riziko i mimo těhotenství?',
    ],
  },
  immunology: {
    what: 'Imunologické vyšetření. Hledá, jestli za opakovanými neúspěchy nestojí imunitní procesy.',
    meaning:
      'Oblast, kde je hodně nabídek a málo shody. Některá vyšetření a léčby mají oporu v datech, jiné jsou experimentální a drahé. Vyplatí se ptát, jaký důkaz za konkrétní léčbou stojí.',
    ask: [
      'Které z těchto vyšetření má v mém případě prokázaný přínos?',
      'Co konkrétně by se změnilo podle výsledku?',
      'Je navrhovaná léčba standardem, nebo experimentem?',
    ],
  },
  unexplained: {
    what: 'Nevysvětlená neplodnost. Kompletní vyšetření nenašlo příčinu.',
    meaning:
      'Neznamená, že příčina není — jen ji dnešními metodami nevidíme. Psychicky je to jedna z nejtěžších diagnóz, protože není co opravit. Postupuje se od jednodušších metod ke složitějším.',
    ask: [
      'Která vyšetření jsme ještě neudělali?',
      'Jaký postup u nevysvětlené neplodnosti doporučujete?',
      'Jak dlouho zkoušet jednodušší metody?',
    ],
  },
  donor_egg: {
    what: 'Darovaná vajíčka. Vajíčka od anonymní dárkyně, oplodněná spermiemi partnera nebo dárce.',
    meaning:
      'Volí se hlavně při vyčerpané ovariální rezervě, po opakovaných neúspěších nebo z genetických důvodů. Kromě medicíny to znamená i vlastní proces smiřování s tím, že dítě nebude geneticky vaše — a je normální, že chvíli trvá.',
    ask: [
      'Jak probíhá výběr dárkyně a co o ní budeme vědět?',
      'Jak dlouho se čeká?',
      'Co říká zákon o anonymitě a o tom, co jednou může vědět dítě?',
    ],
  },
  donor_sperm: {
    what: 'Darované spermie od anonymního dárce.',
    meaning:
      'Používá se při závažném mužském faktoru, u genetických rizik, u žen bez partnera nebo u stejnopohlavních párů. Rozhodnutí má i vztahovou a etickou rovinu — konzultace s psychologem bývá k dispozici.',
    ask: ['Jak se dárce vybírá?', 'Jaké jsou u nás právní podmínky?', 'Jak to jednou vysvětlíme dítěti?'],
  },
  donor_embryo: {
    what: 'Darované embryo. Embryo darované jiným párem po ukončení jejich léčby.',
    meaning:
      'Kombinuje otázky obou předchozích. Bývá kratší cesta k transferu, ale rozhodnutí má silný osobní rozměr.',
    ask: ['Co o původu embrya budeme vědět?', 'Jak dlouhé je čekání?', 'Jaká je právní úprava?'],
  },
  icsi: {
    what: 'ICSI. Vpravení jedné spermie přímo do vajíčka mikropipetou.',
    meaning:
      'Standardní metoda u mužského faktoru a po předchozím selhání oplodnění. U párů bez mužského faktoru přínos oproti klasickému IVF prokázaný není — má smysl se zeptat, proč je navržena.',
    ask: ['Proč u nás ICSI a ne klasické IVF?', 'Je to hrazené, nebo se doplácí?'],
  },
  pgt: {
    what: 'PGT. Genetické vyšetření embrya před transferem — nejčastěji PGT-A na počet chromozomů.',
    meaning:
      'Má jasný smysl u známé genetické zátěže. U ostatních párů je přínos předmětem sporu a znamená to biopsii embrya a odklad transferu. Cena bývá vysoká a obvykle není hrazená.',
    ask: [
      'Jaký konkrétní přínos to má v naší situaci?',
      'Co se stane, když nezbude žádné vhodné embryo?',
      'Kolik to stojí a je to hrazené?',
    ],
  },
  frozen_transfer: {
    what: 'Kryoembryotransfer (KET). Transfer dříve zmraženého embrya.',
    meaning:
      'Šetrnější než čerstvý cyklus — tělo není po stimulaci. Používá se běžně a moderní zmrazování (vitrifikace) embrya nepoškozuje. Cyklus se připravuje buď přirozeně, nebo hormonálně.',
    ask: ['Připravíme cyklus přirozeně, nebo hormonálně?', 'Kolik embryí máme zmražených?'],
  },
  surrogacy: {
    what: 'Náhradní mateřství. Těhotenství donosí jiná žena.',
    meaning:
      'Volí se, když těhotenství není možné nebo by bylo nebezpečné. V Česku není samostatně upraveno zákonem, což přináší právní nejistotu — právní konzultace je nutná, ne doporučená.',
    ask: ['Jaká je právní situace u nás?', 'Co obnáší osvojení po porodu?', 'Na koho se obrátit právně?'],
  },
  twins: {
    what: 'Dvojčata. Dvě miminka najednou.',
    meaning:
      'Těhotenství se automaticky vede jako rizikovější: častější kontroly, vyšší riziko předčasného porodu a komplikací. Právě proto se dnes obvykle přenáší jedno embryo.',
    ask: ['Jsou jednovaječná, nebo dvojvaječná?', 'Jak často budu na kontrolách?', 'Kde budu rodit?'],
  },
  high_risk: {
    what: 'Rizikové těhotenství. Souhrnné označení pro těhotenství s vyšší mírou dohledu.',
    meaning:
      'Neznamená, že se něco stane — znamená, že se něco konkrétního sleduje. Vyplatí se vědět co přesně a jaké hodnoty by byly varovné.',
    ask: ['Jaké riziko konkrétně sledujeme?', 'Co by bylo varovné?', 'Kam volám mimo ordinační hodiny?'],
  },
  gestational_diabetes: {
    what: 'Těhotenská cukrovka. Porucha zpracování cukrů, která vzniká v těhotenství.',
    meaning:
      'Zjišťuje se testem obvykle mezi 24. a 28. týdnem. Většinou se zvládne úpravou stravy a pohybem, část žen potřebuje inzulin. Po porodu obvykle odezní, ale kontrola se opakuje.',
    ask: ['Jak mám měřit cukr a jak často?', 'Jaké hodnoty jsou cílové?', 'Co to znamená pro porod?'],
  },
  preeclampsia: {
    what: 'Preeklampsie. Závažná porucha, která se projevuje vysokým tlakem a bílkovinou v moči.',
    meaning:
      'Vyžaduje pečlivé sledování a někdy dřívější ukončení těhotenství. U rizikových žen se preventivně podává nízká dávka kyseliny acetylsalicylové — o tom rozhoduje lékař.',
    ask: [
      'Mám rizikové faktory a je u mě prevence na místě?',
      'Jaké příznaky znamenají okamžitě volat?',
      'Jak často budeme měřit tlak?',
    ],
  },
  cervical_insufficiency: {
    what: 'Zkracující se čípek. Děložní hrdlo se zkracuje dřív, než by mělo.',
    meaning:
      'Zvyšuje riziko předčasného porodu. Řeší se sledováním délky čípku, vaginálním progesteronem, někdy stehem nebo pesarem.',
    ask: ['Jak často budeme měřit čípek?', 'Jaká léčba je u mě na místě?', 'Co mám omezit?'],
  },
  csection: {
    what: 'Císařský řez. Porod operační cestou.',
    meaning:
      'Je to břišní operace — rekonvalescence trvá týdny, ne dny. Mění se tím obsah šestinedělí: péče o jizvu, omezení zvedání, jiný začátek cvičení.',
    ask: ['Jak mám pečovat o jizvu?', 'Kdy můžu začít cvičit a řídit?', 'Co to znamená pro příští porod?'],
  },
  vaginal_birth: {
    what: 'Přirozený porod, tedy vaginální cestou.',
    meaning: 'Zotavení bývá rychlejší než po císaři. Pozornost patří hrázi, případnému nástřihu a pánevnímu dnu.',
    ask: ['Jak pečovat o hráz?', 'Kdy začít s pánevním dnem?'],
  },
  induced_birth: {
    what: 'Vyvolávaný porod. Porod se zahajuje uměle.',
    meaning:
      'Důvodem bývá přenášení, zdravotní stav matky nebo miminka. Průběh bývá delší a začíná přípravou hrdla.',
    ask: ['Proč vyvoláváme?', 'Jak to bude probíhat a jak dlouho to trvá?', 'Jaké mám možnosti tlumení bolesti?'],
  },
  preterm: {
    what: 'Předčasný porod. Porod před dokončeným 37. týdnem.',
    meaning:
      'Miminko potřebuje čas dozrát mimo dělohu. Zásadní je pojem korigovaný věk — vývoj se hodnotí od původního termínu, ne od narození, zhruba do dvou let.',
    ask: ['V kolikátém týdnu se narodilo?', 'Podle jakého věku hodnotíme vývoj?', 'Jaká vyšetření ho čekají?'],
  },
  nicu_stay: {
    what: 'Pobyt na neonatologické jednotce intenzivní péče.',
    meaning:
      'Znamená život v rytmu oddělení: vizity, alarmy, gramy, klokánkování a cesty domů bez miminka. Je to maraton, u kterého se počítá i vaše vlastní zotavení.',
    ask: ['Co je cílem, než půjde domů?', 'Kdy a jak dlouho můžu klokánkovat?', 'Je tu psycholog pro rodiče?'],
  },
  breastfeeding: {
    what: 'Kojení.',
    meaning:
      'Prvních deset dní často bolí, než se poloha a přisátí srovnají. Bolest, která neustupuje, není nutná daň — je to důvod vyhledat laktační poradkyni.',
    ask: ['Je přisátí správné?', 'Kdy mám hledat laktační poradkyni?', 'Jak poznám, že má dost mléka?'],
  },
  formula_feeding: {
    what: 'Umělá výživa.',
    meaning:
      'Legitimní způsob krmení, ne selhání. Důvody bývají zdravotní, praktické i psychické a nikomu je nemusíte vysvětlovat.',
    ask: ['Jakou výživu vybrat a jak ji připravovat?', 'Jak poznám, že mu sedí?'],
  },
  combination_feeding: {
    what: 'Kombinované krmení — kojení i umělá výživa.',
    meaning: 'Běžné řešení, které umožní pokračovat v kojení i tam, kde samo nestačí.',
    ask: ['Jak dokrmovat, aby se udržela laktace?', 'V jakém pořadí krmit?'],
  },
  pumping: {
    what: 'Odstříkávání mléka.',
    meaning:
      'Klíčové hlavně u miminek na oddělení. Rozhoduje pravidelnost, ne množství — v prvních dnech jde o mililitry a to je normální.',
    ask: ['Jak často mám odstříkávat, i v noci?', 'Jak mléko skladovat a převážet?'],
  },
  reflux: {
    what: 'Reflux. Návrat obsahu žaludku do jícnu.',
    meaning:
      'U kojenců je určitá míra ublinkávání normální. Řeší se, když dítě neprospívá, odmítá pít nebo je výrazně bolestivé.',
    ask: ['Je to fyziologické, nebo je potřeba to řešit?', 'Co mám změnit v krmení?'],
  },
  colic: {
    what: 'Koliky. Období intenzivního pláče, nejčastěji mezi druhým a čtvrtým měsícem.',
    meaning:
      'Vyčerpávající, ale samo odezní. Důležité je vědět, kdy pláč není kolika — při horečce, netečnosti nebo odmítání pití patří k lékaři.',
    ask: ['Kdy pláč není kolika?', 'Co má prokázaný efekt a co ne?'],
  },
  after_loss: {
    what: 'Těhotenství nebo snažení po ztrátě.',
    meaning:
      'Mění to prožívání každého dalšího pokusu — radost přichází opatrněji a strach dřív. Je to normální reakce, ne komplikace.',
    ask: ['Můžeme příští těhotenství potvrdit dřív?', 'Má smysl vyšetření po ztrátě?'],
  },
  repeated_failure: {
    what: 'Opakované neúspěchy léčby.',
    meaning:
      'Mění otázku z „zkusíme to znovu“ na „co uděláme jinak“. Je to okamžik pro doplňující vyšetření, druhý názor a jasně stanovenou hranici.',
    ask: ['Co konkrétně u nás selhává?', 'Která vyšetření mají důkaz?', 'Doporučil byste druhý názor?'],
  },
  single_mother: {
    what: 'Cesta k dítěti bez partnera.',
    meaning:
      'V Česku má léčba pro ženy bez partnera svá právní omezení — vyplatí se je znát dřív, než začnete plánovat. Praktická i psychická příprava je jiná, ne menší.',
    ask: ['Jaké jsou u nás právní podmínky?', 'Co to znamená pro úhradu?', 'Jaká je běžná cesta?'],
  },
  same_sex_couple: {
    what: 'Stejnopohlavní pár na cestě k dítěti.',
    meaning:
      'Právní rámec v Česku je omezující a liší se od okolních zemí. Součástí plánování bývá i právní konzultace, ne jen medicínská.',
    ask: ['Jaké máme u nás možnosti?', 'Co obnáší cesta do zahraničí?', 'Jaké je právní postavení druhé matky?'],
  },
  secondary_infertility: {
    what: 'Sekundární neplodnost. Nedaří se otěhotnět, přestože už jedno dítě máte.',
    meaning:
      'Plnohodnotná diagnóza, kterou okolí často nebere vážně („vždyť jedno máte“). Příčiny se vyšetřují stejně jako u prvního dítěte.',
    ask: ['Co se mohlo od minula změnit?', 'Vyšetřujeme oba znovu?'],
  },
}

export function diagnosisInfo(id: ModifierId): DiagnosisInfo | null {
  return DIAGNOSIS_INFO[id] ?? null
}
