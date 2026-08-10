import type { ContentItem, ContentPack } from '../types'

/**
 * „Co když…“. Praktická databáze krizových a nejasných situací.
 *
 * Každá položka má stejnou kostru: co bývá běžné, co probrat s klinikou
 * a kdy volat hned. Ženy sem chodí ve chvíli, kdy se něco stalo a je
 * jedna hodina v noci, proto je struktura všude identická a akutní
 * část nikdy nechybí.
 */

const REVIEWED = 'Odborně garantováno lékařem reprodukční medicíny.'
const SOURCES = ['ESHRE: doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP']

const items: ContentItem[] = [
  {
    id: 'ck-zapomenuta-injekce',
    kind: 'article',
    title: 'Co když zapomenu injekci?',
    excerpt:
      'Stane se to častěji, než si myslíte. Rozhoduje typ léku a počet hodin, ne to, jak moc si to vyčítáte.',
    minutes: 3,
    phases: ['stimulation', 'ivf_prep'],
    topics: ['leky', 'stimulace', 'klinika'],
    level: 'essential',
    hero: 'champagne',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Vynechaná nebo opožděná dávka patří k nejčastějším věcem, které se během stimulace stanou. Píchá se každý den, často ve stejnou hodinu, uprostřed práce a běžného života. A lidská paměť není lékárenský automat. Klinika tohle řeší denně a nikoho tím nepřekvapíte.

To, co se stane dál, závisí hlavně na dvou věcech: **o jaký lék jde** a **kolik hodin uplynulo**.

- U gonadotropinů (léků, které nechávají růst folikuly) bývá posun o několik hodin méně kritický. Řeší se obvykle tak, že se dávka podá co nejdřív a další se posune podle pokynu.
- U antagonisty, který má bránit předčasné ovulaci, bývá načasování citlivější.
- U triggeru (injekce, která spouští dozrání vajíček před odběrem) se počítají hodiny, někdy i minuty. Celý termín punkce je na něj navázaný.
- U podpory luteální fáze po transferu se řeší, jestli dávku doplnit, nebo vynechat a pokračovat další.

Co nedělat: **nezdvojnásobujte dávku a nedopichujte na vlastní pěst.** Kompenzace, která vypadá logicky, může protokol posunout jinam, než lékař zamýšlel.

## Co probrat s klinikou

Ozvěte se ještě týž den, ne až na plánované kontrole. Připravte si:

1. Který lék jste vynechala a jaká byla obvyklá dávka.
2. V kolik hodin se měl podat a kolik hodin uplynulo.
3. Kolikátý je to den stimulace a kdy máte příští ultrazvuk.
4. Jestli jste od té doby brala něco jiného.

Zeptejte se, jestli se posouvá čas dalších dávek, jestli se mění termín kontroly a jestli se má o vynechání někam udělat záznam. Odpověď si zapište. Po telefonu si ji zapamatujete jen z části.

Do budoucna pomáhá připomínka v telefonu na každý lék zvlášť, jedno stálé místo pro pera a papírový rozpis na lednici, kde odškrtáváte. Aplikace ani nikdo jiný za vás nehlídá, co jste si píchla. Hlídá to jen váš vlastní systém.

## Kdy volat hned

- **Vynechaný nebo opožděný trigger.** Volejte okamžitě, i večer, v noci nebo o víkendu. Na tuhle situaci mají kliniky pohotovostní číslo. Termín odběru se od něj počítá.
- **Vynechaný antagonista** v době, kdy folikuly rostou.
- **Vynechaná podpora luteální fáze po transferu**, zvlášť víc než jedna dávka.
- Vynechání víc dávek za sebou nebo situace, kdy nevíte, jestli jste si píchla, nebo ne.

> Text popisuje obvyklý postup. Konkrétní pokyn pro vás dá vždy vaše klinika.`,
  },
  {
    id: 'ck-spatna-davka',
    kind: 'article',
    title: 'Co když si píchnu špatnou dávku?',
    excerpt:
      'Nastavené jiné číslo, zaměněné pero, dvakrát totéž. Co s tím a co je opravdu důvod volat hned.',
    minutes: 3,
    phases: ['stimulation', 'ivf_prep'],
    topics: ['leky', 'stimulace', 'klinika'],
    level: 'essential',
    hero: 'taupe',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Chyby v dávkování mají pár typických podob a všechny jsou lidské:

- na peru zůstalo nastavené číslo z předchozího dne,
- záměna dvou podobných per, která leží vedle sebe v lednici,
- podání dávky dvakrát, protože si nepamatujete, jestli jste už píchala,
- podání celé dávky, i když bylo pero už skoro prázdné a část chyběla,
- záměna ranní a večerní dávky.

Menší odchylka o jednu nebo dvě jednotky obvykle nebývá důvodem k panice a klinika ji často řeší jen úpravou dalších dávek. Výraznější odchylka může ovlivnit, jak vaječníky odpoví. A právě proto se hlásí, nikoli proto, že by se něco „pokazilo“ nenávratně.

Co nedělat: **nekompenzujte to sama.** Vynechání další dávky, „doplnění zbytku“ nebo změna času bez pokynu udělá z jedné odchylky dvě.

## Co probrat s klinikou

Volejte co nejdřív, i když jde o zdánlivou maličkost. Řekněte přesně:

1. Který lék to byl (celý název z krabičky).
2. Jaká dávka měla být a jaká skutečně šla.
3. V kolik hodin se to stalo.
4. Kolikátý je to den stimulace.

Pero ani obal zatím nevyhazujte. Někdy z něj jde odečíst, kolik zbylo. Zeptejte se, jestli se mění další dávky, jestli má smysl přidat kontrolu nebo odběr a co dělat, kdyby se to opakovalo.

Prevence je nudná a funguje: dávky si vždy nastavujte při dobrém světle, nahlas si přeříkejte název a číslo, po podání si dávku odškrtněte a mějte v jedné krabici jen léky, které právě užíváte.

## Kdy volat hned

- **Podala jste výrazně vyšší dávku gonadotropinu**, než měla být. Volejte ještě dnes, nečekejte na ranní ordinační hodiny.
- **Píchla jste omylem trigger** nebo jakoukoli injekci mimo plán. Tohle mění celý harmonogram cyklu.
- **Zaměnila jste lék za úplně jiný.**
- **Známky alergické reakce**: otok obličeje nebo rtů, dušnost, kopřivka po těle, závrať: volejte **155** nebo vyhledejte akutní lékařskou pomoc.
- Prudká bolest břicha, zvracení, rychle rostoucí obvod břicha nebo výrazně snížené močení v následujících dnech.

> Aplikace neurčuje dávkování ani úpravy léčby. Ty patří výhradně vašemu lékaři.`,
  },
  {
    id: 'ck-lek-tece-z-vpichu',
    kind: 'article',
    title: 'Co když mi po injekci teče lék?',
    excerpt:
      'Kapka na kůži nebo mokrý flek na tamponku vypadá jako promarněná dávka. Většinou to tak není.',
    minutes: 3,
    phases: ['stimulation'],
    topics: ['leky', 'stimulace'],
    level: 'essential',
    hero: 'blush',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Malá kapka, která se po vytažení jehly objeví na kůži, je běžná a většinou nejde o významnou část dávky. Objem, který se aplikuje, bývá velmi malý. A i kapka, která vypadá „jako hodně“, může být jen zbytek z povrchu jehly.

Co množství úniku ovlivňuje:

- **Rychlost vytažení jehly.** Když se jehla vytáhne hned po domáčknutí, tlak v podkoží vytlačí část roztoku ven. Většina návodů proto doporučuje počítat po domáčknutí několik sekund a teprve pak jehlu vytáhnout.
- **Rychlost podání.** Prudké stlačení pístu vytvoří v podkoží víc tlaku.
- **Místo vpichu.** V místě, kde je málo podkoží nebo kde už jste píchala opakovaně, roztok hůř zůstává.
- **Úhel a hloubka.** Příliš mělký vpich vede k úniku i k pálení.

Přesné množství, které uniklo, **nejde spolehlivě odhadnout**: ani na oko, ani podle velikosti fleku. Proto se dávka nedopichuje „od oka“.

## Co probrat s klinikou

Nahlaste to, pokud se to stalo opakovaně nebo pokud šlo evidentně o víc než kapku. Klinika rozhodne, jestli se má něco doplnit. A to je rozhodnutí, které nepatří vám ani nikomu na internetu.

Zeptejte se také na techniku. Sestra vám ji ráda ukáže znovu, i podruhé a potřetí, a je to jedna z nejužitečnějších pěti minut celé stimulace. Probrat stojí za to:

1. Úhel vpichu a jestli máte kůži nabrat do řasy.
2. Jak rychle tlačit píst a kolik sekund počkat před vytažením.
3. Jestli po vpichu místo tisknout, nebo ne.
4. Jak střídat místa vpichu, aby se podkoží nedráždilo pořád na jednom místě.
5. Jak poznat, že v peru zbývá méně než celá dávka.

Modřiny, drobné zarudnutí a svědění v místě vpichu bývají běžné a obvykle samy odezní.

## Kdy volat hned

- **Opakovaně uniká zjevně větší množství** léku a nevíte, kolik jste vlastně dostala. Ozvěte se ještě týž den, ne až na kontrole.
- **Stalo se to u triggeru.** Tady se volá okamžitě, i mimo ordinační hodiny.
- **Místo vpichu je bolestivé, výrazně zarudlé, teplé, tvrdé nebo z něj vytéká hnisavý sekret**: může jít o infekci a patří to k lékaři týž den.
- **Horečka nad 38 °C** v souvislosti s vpichy.
- **Otok obličeje, dušnost nebo kopřivka po těle** po podání: volejte **155** nebo vyhledejte akutní lékařskou pomoc.

> Kolik se má případně doplnit, určuje vždy klinika. Nikdy nedopichujte podle vlastního odhadu.`,
  },
  {
    id: 'ck-krvaceni-behem-stimulace',
    kind: 'article',
    title: 'Co když krvácím během stimulace?',
    excerpt:
      'Špinění uprostřed stimulace vypadá jako konec cyklu. Často není, ale patří na kliniku, ne do diskusního fóra.',
    minutes: 3,
    phases: ['stimulation'],
    topics: ['stimulace', 'hormony', 'klinika'],
    level: 'essential',
    hero: 'sage',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Krvácení a špinění během stimulace není vzácnost a samo o sobě neznamená, že cyklus skončil.

Co za ním může být:

- **Doznívající menstruace.** Stimulace se často začíná na začátku cyklu, kdy krvácení ještě neustalo úplně.
- **Průnikové špinění při hormonálních výkyvech.** Sliznice reaguje na měnící se hladiny a část žen v tomto období špiní.
- **Podráždění po vaginálním ultrazvuku.** Kontroly bývají obden a sonda se čípku dotýká.
- **Vaginálně podávané léky**, které mohou sliznici mechanicky dráždit.
- **Nález na čípku** (třeba drobný polyp) který se projeví právě teď, i když s IVF nesouvisí.

Barva bývá od hnědavé (starší krev) po světle červenou. Hnědé špinění samo o sobě obvykle není důvodem k noční panice, ale patří do hlášení.

Co nedělat: **nevysazujte na vlastní pěst léky** a nepřidávejte si nic „na uklidnění sliznice“.

## Co probrat s klinikou

Zavolejte v běžnou dobu a řekněte konkrétně:

1. Kdy krvácení začalo a jak dlouho trvá.
2. Jak je silné. Nejsrozumitelnější je počet vložek za den a jestli je nasáklá celá.
3. Jakou má barvu a jestli jsou v něm sraženiny.
4. Jestli bolí břicho, a jak moc.
5. Kolikátý je to den stimulace a kdy byla poslední kontrola.

Zeptejte se, jestli se má posunout ultrazvuk, jestli pokračovat ve stejných dávkách a co je pro váš případ hranice, při které máte volat znovu. Někdy klinika přidá kontrolní odběr nebo ultrazvuk dřív, než byl v plánu. To je běžný postup, ne špatná zpráva.

## Kdy volat hned

- **Silné krvácení**: nasáklá vložka během hodiny, opakovaně, nebo velké sraženiny.
- **Krvácení spolu se silnou bolestí břicha**, zvlášť jednostrannou.
- **Závrať, slabost, bušení srdce, bledost nebo mdloba**: volejte **155** nebo vyhledejte akutní lékařskou pomoc, tohle nesnese odklad do rána.
- **Horečka nad 38 °C.**
- Krvácení po punkci vaječníků: jakékoli sílící krvácení v prvních dnech po výkonu hlaste okamžitě.

> Aplikace nediagnostikuje. Příčinu krvácení určí vyšetření u lékaře, ne popis příznaků.`,
  },
  {
    id: 'ck-bolesti-bricha',
    kind: 'article',
    title: 'Co když mám bolesti břicha?',
    excerpt:
      'Tlak, napětí, píchání. Rozdíl mezi „to k tomu patří“ a „tohle se řeší hned“ se dá popsat docela přesně.',
    minutes: 4,
    phases: ['stimulation', 'retrieval', 'transfer'],
    topics: ['stimulace', 'sebepece', 'klinika'],
    level: 'essential',
    hero: 'sand',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Břicho v IVF cyklu bolí skoro každou ženu a v různých fázích z různých důvodů.

- **Během stimulace** rostou ve vaječnících folikuly a vaječníky se zvětšují. Typický je tupý tlak, napětí po stranách podbřišku, pocit plnosti a zhoršení při rychlém pohybu nebo kýchnutí.
- **Po odběru vajíček** bývá bolest podobná silnějším menstruačním křečím, často i den nebo dva. Vaječníky jsou po punkci podrážděné.
- **Po transferu** se objevuje mírné pobolívání, které souvisí s manipulací s děložním hrdlem.
- **Zácpa a plynatost** patří k nejčastějším a nejvíc podceňovaným příčinám. Progesteron zpomaluje střevo a bolest z plynů umí být překvapivě ostrá.

Obecně platí: bolest, která je tupá, oboustranná, kolísá a nechá vás normálně chodit a spát, bývá tou méně znepokojivou.

Volně prodejné léky proti bolesti si v cyklu **nekupujte podle vlastního uvážení**: některé běžné látky nejsou v tomto období vhodné. Zeptejte se, co smíte.

## Co probrat s klinikou

Když voláte, popište bolest co nejkonkrétněji:

1. Kde přesně je a jestli je na jedné, nebo obou stranách.
2. Jak silná je na škále od jedné do deseti a jestli sílí.
3. Od kdy trvá a jestli něco přináší úlevu.
4. Jestli je k ní teplota, zvracení, průjem, potíže s močením nebo krvácení.
5. V jaké jste fázi cyklu a kdy byl poslední zákrok.

Proberte i to, co si můžete vzít, jak vypadá rozumný denní příjem tekutin ve vaší situaci a jaká hranice bolesti je pro vás důvod volat znovu.

## Kdy volat hned

Tyhle situace se neodkládají do rána:

- **Prudká, náhlá, jednostranná bolest**, často se zvracením. Může jít o zkrut (torzi) vaječníku. Volejte okamžitě nebo vyhledejte akutní lékařskou pomoc.
- **Bolest, která rychle sílí** a nereaguje na nic.
- **Bolest v rameni nebo pod lopatkou** spolu s bolestí břicha. Může jít o dráždění bránice při krvácení do dutiny břišní. Akutní stav.
- **Horečka nad 38 °C** s bolestí břicha.
- **Mdloba, bledost, studený pot, bušení srdce.** Volejte **155**.
- **Rychle rostoucí obvod břicha, dušnost nebo výrazně snížené močení**: možné příznaky OHSS.
- Silné krvácení spolu s bolestí.

> Bolest, kterou nezvládáte, je vždycky dost dobrý důvod zavolat. Nikdo vás nebude mít za přecitlivělou.`,
  },
  {
    id: 'ck-podezreni-ohss',
    kind: 'article',
    title: 'Co když mám podezření na OHSS?',
    excerpt:
      'Hyperstimulační syndrom má varovné příznaky, které se dají hlídat doma. Když se objeví, volá se okamžitě.',
    minutes: 4,
    phases: ['stimulation', 'retrieval', 'transfer'],
    topics: ['stimulace', 'hormony', 'klinika'],
    level: 'essential',
    hero: 'dusk',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Ovariální hyperstimulační syndrom (OHSS) je reakce na stimulaci, při které vaječníky zůstávají zvětšené a tekutina přestupuje z cév do dutiny břišní. Mírná forma s nadmutím a napětím v podbřišku je poměrně častá a obvykle sama odezní. Závažná forma je vzácná, ale je to stav, který patří do rukou lékaře, někdy i do nemocnice.

Vyšší riziko bývá popisováno u žen s PCOS, s vysokým počtem rostoucích folikulů, s vysokým AMH a u mladších žen. **Neznamená to, že u vás OHSS nastane**: jen že se to bude sledovat pozorněji. Kliniky dnes riziko běžně snižují volbou protokolu, typem triggeru nebo zmrazením všech embryí a odložením transferu. Co je vhodné pro vás, záleží na individuální situaci.

Příznaky, které se hlídají doma:

- nadmuté, napjaté břicho a rychlý nárůst jeho obvodu,
- **vzestup hmotnosti** ze dne na den,
- pocit plnosti, nevolnost, zvracení,
- **méně moči, než je vaše obvyklé množství**, a tmavší moč,
- dušnost, potíže s ležením naplocho,
- otoky nohou.

Příznaky se mohou objevit několik dní po odběru a při pozitivním hCG se mohou zhoršit i později.

## Co probrat s klinikou

Zeptejte se ještě před odběrem, jestli u vás vidí zvýšené riziko a co máte sledovat. Doma pak pomáhá jednoduchý režim:

1. Vážit se každé ráno nalačno, ve stejném oblečení, a zapisovat.
2. Měřit obvod břicha krejčovským metrem ve stejné výšce.
3. Sledovat, kolikrát denně močíte a jestli je toho výrazně méně.
4. Pít podle pokynu kliniky. Množství i typ nápoje se u OHSS řeší individuálně, nespoléhejte na obecné rady.
5. Vyhnout se nárazové fyzické zátěži a skokům, protože zvětšené vaječníky se mohou zkroutit.

Proberte také, co dělat o víkendu, kam volat mimo ordinační hodiny a jestli může být ve vaší situaci zvažováno zmrazení embryí a odložení transferu.

## Kdy volat hned

Volejte **okamžitě**, i v noci a o víkendu, nebo vyhledejte akutní lékařskou pomoc, pokud se objeví:

- **rychlý nárůst hmotnosti**, běžně se uvádí hranice kolem jednoho kilogramu za den,
- **dušnost**, dech, který nejde nabrat vleže,
- **výrazně snížené množství moči** nebo skoro žádné močení,
- **opakované zvracení** a neschopnost pít,
- **prudká nebo rychle sílící bolest břicha**,
- **bolest, otok nebo zarudnutí lýtka** a bolest na hrudi. Možné známky trombózy, volejte **155**,
- mdloba, zmatenost, bušení srdce.

> OHSS aplikace nepozná a nevyhodnotí. Rozhodnutí patří lékaři, který vás vyšetří.`,
  },
  {
    id: 'ck-vaha-a-nafouknute-bricho',
    kind: 'article',
    title: 'Co když se mi zvedla váha a nafouklo břicho?',
    excerpt:
      'Během stimulace se čísla na váze hýbou skoro všem. Rozdíl je v tom, jak rychle. A to se dá sledovat.',
    minutes: 3,
    phases: ['stimulation', 'retrieval'],
    topics: ['stimulace', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'linen',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Mírný vzestup hmotnosti a nafouklé břicho během stimulace popisuje velká část žen. Podílí se na tom několik věcí najednou:

- **zvětšené vaječníky** s desítkami rostoucích folikulů zabírají v podbřišku prostor,
- **zadržování vody** při vyšších hladinách hormonů,
- **zpomalené trávení**, zácpa a plyny,
- větší chuť k jídlu a jiný jídelní režim v týdnu plném kontrol.

Kalhoty netěsní, břicho vypadá jako ve třetím měsíci a v zrcadle to vypadá jako selhání. Není to selhání. Většina těchto změn během několika týdnů po skončení cyklu odeznívá.

To, co má smysl sledovat, není absolutní číslo na váze, ale **rychlost změny**. Pozvolný vzestup o něco málo za celou stimulaci bývá jiná situace než skokový nárůst ze dne na den.

Tohle období je také obvykle nejhorší možná doba na hubnutí, restriktivní diety nebo intenzivní trénink. Tělu právě teď pomáhá stabilita.

## Co probrat s klinikou

Zaveďte si jednoduchý záznam, který má klinika ráda, protože se z něj dá číst:

1. Ranní hmotnost nalačno, ve stejném oblečení, každý den.
2. Obvod břicha metrem ve stejné výšce.
3. Kolikrát za den močíte a jestli je moč tmavší.
4. Jestli se dá spát naplocho.

Zeptejte se, jaký denní přírůstek je pro vás hranice, kdy volat, kolik pít ve vaší situaci a jestli jsou vhodné kompresní podkolenky. U bolestivé zácpy se zeptejte, co konkrétně smíte užít. Volně prodejné přípravky si v cyklu nevybírejte sama.

A ještě jedna praktická věc: kupte si nebo si vyndejte volné oblečení na celý tento týden. Zní to banálně, ale denní boj s páskem, který tlačí do napjatého břicha, ubírá sílu, kterou teď potřebujete jinde.

## Kdy volat hned

- **Nárůst hmotnosti kolem kilogramu a víc za jediný den**, opakovaně.
- **Rychle rostoucí obvod břicha**, břicho tvrdé a napjaté.
- **Dušnost** nebo nemožnost ležet naplocho.
- **Výrazně snížené močení**, opakované zvracení, neschopnost pít.
- **Prudká nebo sílící bolest břicha.**
- **Otok, bolest nebo zarudnutí lýtka**, bolest na hrudi. Volejte **155**.

Tyhle příznaky mohou souviset s OHSS a volá se při nich okamžitě, i mimo ordinační hodiny.

> Váha v cyklu není měřítko toho, jak dobře to zvládáte. Je to jenom údaj, který pomáhá lékaři.`,
  },
  {
    id: 'ck-zrusena-kontrola',
    kind: 'article',
    title: 'Co když se mi zruší kontrola?',
    excerpt:
      'Posunutý ultrazvuk uprostřed stimulace vyvolá pocit, že se všechno hroutí. Většinou jde o provoz, ne o vás.',
    minutes: 3,
    phases: ['stimulation', 'ivf_prep', 'transfer'],
    topics: ['klinika', 'stimulace'],
    level: 'essential',
    hero: 'pearl',
    author: 'Tým BlooMia',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co bývá běžné

Zrušená nebo posunutá kontrola je z drtivé většiny provozní věc: nemoc lékaře, akutní výkon, který nešlo odložit, přeplněný sál, výpadek laboratoře. S vaším cyklem ani s vašimi výsledky to obvykle nesouvisí.

Druhá častá situace je opačná: kontrola se **posouvá záměrně**, protože podle posledního ultrazvuku ještě nemá smysl dívat se tak brzy. Termíny kontrol se řídí tím, jak rostou folikuly, ne kalendářem. Posun o den proto sám o sobě neznamená, že je něco špatně.

Co posun neznamená: že jste na okraji zájmu, že váš cyklus někdo odepsal nebo že si musíte poradit sama. Znamená jen, že se změnil čas.

Nepříjemná je hlavně organizace kolem. Domluvené volno, hlídání, cesta. To je legitimní důvod se ozvat a hledat s klinikou jiný termín, ne to mlčky spolknout.

## Co probrat s klinikou

Zavolejte a mějte jasno v těchhle bodech:

1. Kdy je nejbližší náhradní termín a jestli existuje dřívější varianta u jiného lékaře.
2. **Co dělat s léky do té doby**: jestli pokračovat ve stejných dávkách, nebo se něco mění. Tohle je nejdůležitější otázka celé situace.
3. Jestli máte doma dost léků na dny navíc, včetně víkendu.
4. Jestli se posouvá i předpokládaný termín triggeru a odběru.
5. Kdo je pro vás kontaktní osoba, když se objeví potíže dřív.

Když je pro vás nový termín nereálný, řekněte to konkrétně: „Ve středu ráno se nedostanu, jde to v úterý odpoledne?“ Kliniky mají obvykle víc prostoru, než se zvenku zdá.

## Kdy volat hned

Akutní zdravotní situace tady obvykle nehrozí. Přesto se ozvěte ještě týž den, pokud:

- **posun spadá do doby kolem plánovaného triggeru nebo odběru**: načasování je tady zásadní a nedá se odhadovat,
- **docházejí vám léky** a bez kontroly nemáte recept,
- **nevíte, jestli máte večer píchat**, a nikdo vám to neřekl. Nikdy nevynechávejte dávku jen proto, že se kontrola nekonala.

A okamžitě, bez ohledu na termíny, volejte při silném krvácení, prudké bolesti břicha, horečce nad 38 °C, dušnosti, rychle rostoucím obvodu břicha nebo výrazně sníženém močení.

> Když se s klinikou nemůžete spojit a stav se zhoršuje, vyhledejte akutní gynekologickou pomoc. Čekání na zpětné zavolání není plán.`,
  },
  {
    id: 'ck-zadne-embryo',
    kind: 'article',
    title: 'Co když nemáme žádné embryo?',
    excerpt:
      'Telefonát, po kterém se cyklus zastaví ještě před transferem. Co se stalo, co se z toho dá zjistit a co dál.',
    minutes: 4,
    phases: ['fertilization', 'embryo_culture', 'waiting_next_attempt'],
    topics: ['embryologie', 'ztrata', 'klinika'],
    level: 'essential',
    hero: 'dawn',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Čísla v IVF cyklu klesají na každém kroku a je to pravidlo, ne výjimka. Ne všechny odebrané folikuly obsahují vajíčko. Ne všechna vajíčka jsou zralá. Ne všechna zralá vajíčka se oplodní. A z oplozených vajíček se ne všechna dělí dál.

Embrya se v laboratoři sledují **od prvního do zhruba šestého dne vývoje**, ne až od stadia blastocysty. Zástava se proto může objevit kdykoli po cestě. Den po odběru, třetí den, i těsně před koncem kultivace. Cyklus, ze kterého nevzejde žádné embryo vhodné k přenosu nebo zamrazení, se stává i párům, kterým předtím nikdo nic vážného nenašel.

Neznamená to automaticky, že příště to dopadne stejně, ani že to dopadne jinak. Znamená to, že tenhle cyklus přinesl informaci, kterou předtím nikdo mít nemohl. Jak vaše vajíčka a spermie fungují v laboratoři.

Je to ztráta. Byla jste na injekcích, prošla jste odběrem a čekala jste na telefonáty. To, že „ještě žádné těhotenství nebylo“, tu ztrátu neruší.

## Co probrat s klinikou

Domluvte si kontrolní konzultaci, ideálně s odstupem, kdy budete schopná poslouchat. Vezměte si s sebou seznam otázek a někoho, kdo bude psát:

1. Kolik vajíček se odebralo a kolik z nich bylo zralých?
2. Kolik se jich oplodnilo a jakou metodou?
3. Ve kterém dni vývoje se embrya zastavila?
4. Vidí embryolog něco, co ukazuje spíš na vajíčka, spíš na spermie, nebo se to určit nedá?
5. Co by se v příštím cyklu dalo změnit. Protokol, dávky, metoda oplození, doba kultivace?
6. Má v naší situaci smysl doplnit nějaké vyšetření, a co by z jeho výsledku plynulo?
7. Kdy nejdřív se dá jít do dalšího cyklu?

Ptejte se i na to, co nezaznělo: jestli se u vás uvažuje o jiném postupu, a proč zrovna o něm. Druhý názor na jiném pracovišti je legitimní krok a slušná klinika ho nebere jako urážku.

## Kdy volat hned

Akutní stav tady většinou nehrozí, ale jste krátce po punkci, a tam se hlídá tohle:

- **silná nebo sílící bolest břicha**, zvlášť jednostranná,
- **horečka nad 38 °C**,
- **silné krvácení**,
- **rychle rostoucí obvod břicha, dušnost, výrazně snížené močení**: možné příznaky OHSS,
- mdloba, bledost, bušení srdce. Volejte **155**.

A ještě jedna věc, která patří do stejné kategorie naléhavosti: pokud máte pocit, že tuhle zprávu nezvládáte, že nemůžete fungovat nebo že by bylo lepší tu nebýt, ozvěte se dnes. Linka první psychické pomoci **116 123** funguje nonstop a zdarma, při bezprostředním ohrožení volejte **155**.

> Co se stalo a proč, může posoudit jen tým, který váš cyklus vedl a viděl vaše embrya.`,
  },
  {
    id: 'ck-embryo-prestane-rust',
    kind: 'article',
    title: 'Co když se embryo přestane vyvíjet?',
    excerpt:
      'Zpráva z laboratoře, že jedno embryo se dál nedělí. Co to znamená pro ta ostatní a co se z toho dá vyčíst.',
    minutes: 4,
    phases: ['embryo_culture', 'fertilization'],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'sky',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Embrya se v laboratoři hodnotí každý den. **od prvního dne po oplození až zhruba do šestého dne**. V každém z těchto dnů se část embryí zastaví. Je to očekávaná součást kultivace, ne selhání péče.

Co se sleduje:

- **1. den**: jestli došlo k oplození a jak vypadá.
- **2. a 3. den**: počet buněk, jejich pravidelnost, podíl fragmentů.
- **4. den**: přechod do stadia moruly, kdy se buňky sléváním spojují.
- **5. a 6. den**: vývoj blastocysty a její struktura.

Zástava vývoje bývá nejčastěji dávána do souvislosti s genetickou výbavou embrya. Tělo i laboratoř tímhle způsobem vybírají. Embryo, které se zastaví ve třetím dni, by se s velkou pravděpodobností nevyvíjelo ani v děloze.

Dvě věci, které stojí za to vědět:

- **Hodnocení ve třetím dni nepředpovídá spolehlivě, jak dopadne pátý den.** Embryo, které vypadalo průměrně, se může vyvíjet dál, a naopak.
- **Vzhled embrya není záruka.** I embryo s výborným hodnocením se nemusí uhnízdit, a embryo s horším hodnocením se uhnízdit může.

Sledovat čísla den po dni je vyčerpávající. Řada žen popisuje kultivaci jako nejtišší a nejtěžší část cyklu. Nemáte v ní co ovlivnit. A to je právě to nesnesitelné.

## Co probrat s klinikou

Při telefonátu z embryologie se ptejte konkrétně:

1. Kolik embryí se dál vyvíjí a v jakém jsou stadiu?
2. Ve kterém dni se ta ostatní zastavila?
3. Čeká se u zbývajících do šestého dne, nebo se rozhoduje dřív?
4. Kdy zavoláte příště a co bude předmětem rozhodnutí?
5. Kolik embryí je reálná šance zamrazit?

Po skončení cyklu si vyžádejte **písemnou zprávu z embryologie**. Je to podklad, ze kterého se dá stavět další postup, a při případném druhém názoru je nenahraditelná.

## Kdy volat hned

Zpráva o embryu není akutní zdravotní situace. Vy ale můžete být krátce po odběru vajíček, a tam se volá okamžitě při:

- **silné nebo sílící bolesti břicha**, zvlášť jednostranné,
- **horečce nad 38 °C**,
- **silném krvácení**,
- **rychle rostoucím obvodu břicha, dušnosti nebo výrazně sníženém močení**: možné příznaky OHSS,
- mdlobě, bledosti, bušení srdce. Volejte **155**.

> Rozhodnutí o tom, jak dlouho se embrya kultivují a co se zamrazí, dělá embryolog podle toho, co vidí. Aplikace do toho nevidí a nevyhodnocuje nic.`,
  },
  {
    id: 'ck-zruseny-transfer',
    kind: 'article',
    title: 'Co když se transfer zruší?',
    excerpt:
      'Zrušený transfer není zrušený cyklus. V jednom cyklu jich může být víc. A odklad má obvykle konkrétní důvod.',
    minutes: 4,
    phases: ['transfer', 'embryo_culture'],
    topics: ['transfer', 'klinika', 'embryologie'],
    level: 'essential',
    hero: 'champagne',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Zrušený nebo odložený transfer je běžnější, než se čeká, a nejčastěji za ním stojí konkrétní důvod, který lékař najde těsně předtím.

Časté důvody:

- **Riziko OHSS.** Pokud jsou vaječníky výrazně stimulované, může být zvažováno zmrazení všech embryí a přenos až v pozdějším cyklu, kdy je tělo v klidu.
- **Stav děložní sliznice.** Sliznice může být tenká, nepravidelná nebo v dutině může být tekutina či polyp.
- **Hormonální nález**, například předčasný vzestup progesteronu, který posouvá připravenost sliznice mimo okno pro přenos.
- **Embryo se nedostalo do stadia**, ve kterém se přenáší.
- **Vaše zdraví**: infekt, horečka, akutní onemocnění.
- **Provozní důvody laboratoře.**

Tady je věc, kterou spousta žen slyší poprvé až teď: **jeden IVF cyklus může obsahovat víc transferů.** Z jedné stimulace a jednoho odběru může vzejít několik embryí a z téže zásoby se pak dělá čerstvý přenos i následné kryotransfery. Zrušený transfer proto obvykle znamená posun, ne konec cyklu.

Emočně je to přesto rána. Byla jste připravená na den, který měl přijít, a místo něj přišlo čekání.

## Co probrat s klinikou

Ještě před odchodem z kliniky nebo hned při telefonátu se ptejte:

1. Jaký je konkrétní důvod odkladu a chci ho mít písemně ve zprávě.
2. **Co teď s léky**: které vysadit, které dobrat, a odkdy.
3. Kdy se plánuje další přenos a co se do té doby bude dít.
4. Kolik embryí je zamrazeno a v jakém stadiu.
5. Jak bude vypadat příprava sliznice u kryotransferu.
6. Jak se odklad promítne do ceny a co už je zaplacené.
7. Dá se něco udělat, aby se stejný důvod neopakoval?

Pokud vám důvod nedává smysl nebo ho nedostanete srozumitelně, ptejte se znovu. Máte na to nárok a není to nezdvořilost.

## Kdy volat hned

- **Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení, nárůst hmotnosti kolem kilogramu za den**: volejte okamžitě, tohle mohou být příznaky OHSS a bývá to i důvod odkladu.
- **Prudká nebo sílící bolest břicha**, zvlášť jednostranná.
- **Horečka nad 38 °C.**
- **Silné krvácení.**
- Ozvěte se ještě dnes také tehdy, když **nevíte, jestli večer užít léky**. Nevysazujte je sama.

> Jestli je odklad ve vaší situaci vhodný, posoudí jen váš lékař. Aplikace neurčuje léčbu ani její načasování.`,
  },
  {
    id: 'ck-embryo-neprezije-rozmrazeni',
    kind: 'article',
    title: 'Co když embryo nepřežije rozmrazení?',
    excerpt:
      'Vitrifikace je dnes spolehlivá, ale ne stoprocentní. Co se v laboratoři děje a co následuje.',
    minutes: 3,
    phases: ['transfer', 'embryo_culture'],
    topics: ['embryologie', 'transfer', 'vysledky'],
    modifiers: ['frozen_transfer'],
    level: 'essential',
    hero: 'taupe',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Zmrazování embryí se dnes běžně dělá metodou vitrifikace. Velmi rychlým zchlazením, při kterém nevznikají ledové krystaly. Přežívání embryí po rozmrazení bývá u zavedených laboratoří vysoké, ale **žádná laboratoř nemůže slíbit sto procent**.

Co se může stát:

- Embryo rozmrazení nepřežije.
- Embryo přežije, ale část buněk je poškozená. Embryolog pak hodnotí, jestli je vhodné k přenosu.
- Embryo se po rozmrazení znovu neroztáhne (nedojde k re-expanzi blastocysty) v očekávaném čase.

Rozmrazuje se obvykle v den transferu nebo krátce předtím, takže zprávu dostanete v den, na který jste se chystala. Právě tohle bývá nejtěžší. Jste připravená, máte plné břicho léků a čekání, a přijde telefonát.

Pokud máte zamraženo víc embryí, laboratoř může rozmrazit další. Když jich víc není, přenos se odkládá.

Přežívání po rozmrazení nesouvisí s tím, jak jste žila, jestli jste dost odpočívala nebo co jste jedla. Tady jste opravdu nemohla udělat nic.

## Co probrat s klinikou

1. Kolik embryí zůstává zamrazeno a v jakém jsou stadiu?
2. Jak se rozhoduje o pořadí, ve kterém se rozmrazují?
3. Rozmrazuje se u vás jedno po druhém, nebo víc najednou?
4. Podle čeho embryolog hodnotí, že je embryo po rozmrazení vhodné k přenosu?
5. **Co teď s léky**: sliznici jste připravovala, a je potřeba vědět, co vysadit a kdy.
6. Kdy může být další pokus a co se bude dít do té doby.
7. Jak se to promítne do ceny a skladovacích poplatků.

Vyžádejte si písemný záznam. U dalšího postupu se k němu budete vracet.

## Kdy volat hned

Rozmrazení samo o sobě není akutní zdravotní situace. Volejte ještě dnes, pokud:

- **berete estrogeny, progesteron nebo jiné léky na přípravu sliznice** a nevíte, jestli je dnes večer užít. Nevysazujte je bez pokynu.
- se objeví **silné krvácení**, **prudká bolest v podbřišku** nebo **horečka nad 38 °C**,
- máte **bolest, otok nebo zarudnutí lýtka** či bolest na hrudi. Volejte **155**.

A pokud vás zpráva položila natolik, že nemůžete fungovat, ozvěte se dnes někomu, Linka první psychické pomoci **116 123** je nonstop a zdarma.

> Aplikace nehodnotí kvalitu embryí ani jejich šance. To umí jen embryolog, který je má před sebou.`,
  },
  {
    id: 'ck-krvaceni-po-transferu',
    kind: 'article',
    title: 'Co když začnu krvácet po transferu?',
    excerpt:
      'Špinění po transferu neznamená automaticky konec, ani dobrou zprávu. Nedá se z něj vyčíst nic. A to je nejtěžší.',
    minutes: 3,
    phases: ['transfer', 'two_week_wait'],
    topics: ['transfer', 'cekani', 'psychika'],
    level: 'essential',
    hero: 'blush',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Krvácení a špinění po transferu popisuje řada žen a samo o sobě nerozhoduje o výsledku.

Možné příčiny:

- **Manipulace s děložním hrdlem** při zavádění katétru. Špinění se pak objevuje v den transferu nebo den poté a bývá slabé a hnědavé.
- **Vaginálně podávaný progesteron**, který dráždí sliznici pochvy. Tenhle typ špinění bývá spojený s aplikací a často se objevuje ráno.
- **Podráždění po ultrazvuku** nebo po pohlavním styku.
- **Krvácení kolem doby uhnízdění.** Popisuje se jako slabé a krátké, ale odlišit ho od nastupující menstruace podle vzhledu nejde.
- **Nastupující menstruace**, když podpora luteální fáze nestačí udržet sliznici.

Podstatné je tohle: **z barvy, množství ani načasování se nedá určit, jestli cyklus vyšel.** Ženy s výrazným špiněním otěhotní a ženy bez jediné kapky ne. Hledání významu v každé skvrně na toaletním papíru je v tomhle období nejvyčerpávanější sport, jaký existuje.

Co nedělat: **nevysazujte progesteron ani jinou podporu proto, že krvácíte.** To je jedna z mála věcí, které v tomhle období skutečně škodí.

## Co probrat s klinikou

Ozvěte se a řekněte:

1. Kolikátý je den po transferu.
2. Kdy krvácení začalo a jak dlouho trvá.
3. Kolik vložek za den a jestli se nasáknou celé.
4. Barva a jestli jsou v něm sraženiny.
5. Jestli bolí břicho a jak moc.
6. Jaké léky přesně berete a jakou formou.

Zeptejte se, jestli se má něco upravit, jestli má smysl udělat odběr dřív a jaká je pro vás hranice, při které máte volat znovu. Zeptejte se také, jestli **provést odběr hCG v původním termínu** i v případě, že krvácení pokračuje. Obvykle ano, protože bez čísla se rozhodovat nedá.

## Kdy volat hned

- **Silné krvácení**: nasáklá vložka během hodiny, nebo velké sraženiny.
- **Prudká bolest v podbřišku**, zvlášť jednostranná.
- **Bolest v rameni nebo pod lopatkou** spolu s bolestí břicha.
- **Mdloba, bledost, studený pot, bušení srdce**: volejte **155** nebo vyhledejte akutní lékařskou pomoc.
- **Horečka nad 38 °C.**
- **Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení**: možné příznaky OHSS.

> Co krvácení znamená, ukáže až odběr a vyšetření. Aplikace to neposoudí a ani lékař to po telefonu neurčí.`,
  },
  {
    id: 'ck-hcg-negativni',
    kind: 'article',
    title: 'Co když je hCG negativní?',
    excerpt:
      'Jedno číslo, které ukončí celé čekání. Co se bude dít s tělem, co se dá zjistit a co má smysl se ptát.',
    minutes: 4,
    phases: ['two_week_wait', 'waiting_next_attempt'],
    topics: ['vysledky', 'ztrata', 'psychika'],
    level: 'essential',
    hero: 'dusk',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Negativní hCG znamená, že se v krvi nenašel hormon, který se tvoří při těhotenství. Je to jednoznačný výsledek, a právě to na něm bolí. Po týdnech nejistoty přijde věta, se kterou se nedá vyjednávat.

Co se obvykle děje potom:

- Klinika řekne, **kdy vysadit podporu luteální fáze**. Po vysazení přichází krvácení, běžně během několika dní.
- **Menstruace bývá silnější a bolestivější** než obvykle. Sliznice byla připravovaná hormonálně.
- Hormonální propad se často projeví i na náladě. Den po vysazení bývá horší než den, kdy jste se to dozvěděla.

Co nikdo nemůže říct: proč zrovna tenhle přenos nevyšel. Uhnízdění je proces, do kterého není vidět. I embryo s dobrým hodnocením se nemusí uhnízdit a **nemá to souvislost s tím, jestli jste ležela, co jste jedla nebo jak moc jste se bála.**

A ještě jedna praktická věc: jeden IVF cyklus může obsahovat víc transferů. Pokud máte zamražená embrya, tenhle výsledek neukončuje cyklus, ale jeden pokus v něm.

## Co probrat s klinikou

Domluvte si kontrolní konzultaci. Ideálně za pár dní, ne hned. V den výsledku si z rozhovoru nic neodnesete. Otázky, které stojí za to připravit:

1. Kolik embryí zůstává zamraženo a v jakém jsou stadiu?
2. Kdy nejdřív může být další přenos a co ho určuje?
3. Bude se něco měnit v přípravě sliznice nebo v podpoře?
4. Má v naší situaci smysl nějaké další vyšetření. A co by z jeho výsledku plynulo?
5. Kolik pokusů má u nás podle vás smysl a podle čeho to poznáme?
6. Co říká zpráva z embryologie o tomhle cyklu?

Zeptejte se také, kdy volat, pokud menstruace nepřijde, a jestli se má hCG kontrolovat znovu.

## Kdy volat hned

- **Menstruace nepřijde do doby, kterou vám klinika řekla**: obvykle se hlásí po několika dnech od vysazení podpory.
- **Silné krvácení**: nasáklá vložka během hodiny nebo velké sraženiny.
- **Prudká bolest v podbřišku**, zvlášť jednostranná, nebo bolest v rameni.
- **Horečka nad 38 °C.**
- **Mdloba, bledost, bušení srdce**: volejte **155**.
- **Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení**: možné příznaky OHSS.

Stejně naléhavé je i tohle: pokud nemůžete fungovat, nespíte, nejste schopná jít do práce nebo máte myšlenky, že by bylo lepší tu nebýt, ozvěte se dnes. Linka první psychické pomoci **116 123** funguje nonstop a zdarma, při bezprostředním ohrožení volejte **155**.

> Tenhle výsledek nevypovídá o tom, co zvládnete dál. Vypovídá jen o jednom přenosu.`,
  },
  {
    id: 'ck-hcg-pozitivni',
    kind: 'article',
    title: 'Co když je hCG pozitivní?',
    excerpt:
      'Číslo, na které jste čekala. A hned s ním nová vlna otázek. Co se sleduje dál a na co si dát pozor.',
    minutes: 4,
    phases: ['beta_positive', 'two_week_wait'],
    topics: ['vysledky', 'tehotenstvi', 'hormony'],
    level: 'essential',
    hero: 'dawn',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Pozitivní hCG znamená, že se v krvi našel hormon, který se tvoří po uhnízdění. Je to první skutečná zpráva po dvou týdnech ticha.

Co se o tom čísle dá a nedá říct:

- **Jedna hodnota sama o sobě má omezenou výpovědní hodnotu.** Rozptyl je velký a hodnoty se u různých žen liší mnohonásobně i při stejně starém těhotenství.
- **Sleduje se dynamika**, tedy jak se hodnota mění při opakovaném odběru, obvykle po dvou dnech.
- **Laboratoře se liší** v metodách i jednotkách. Srovnávat má smysl jen odběry ze stejné laboratoře.
- **Den vývoje přeneseného embrya** posouvá očekávané hodnoty. Přenos v pátém dni a ve třetím dni nelze porovnávat stejným metrem.

Emočně to bývá jinak, než si ženy představovaly. Místo čisté radosti přijde často opatrnost, nedůvěra a nová úzkost. To je po IVF cestě běžné a neznamená, že se neradujete dost.

Podporu luteální fáze **v tuhle chvíli nevysazujte**. Pokračuje se podle pokynu kliniky, často několik týdnů.

## Co probrat s klinikou

1. Kdy má být další odběr a ve které laboratoři?
2. Kdy je první ultrazvuk a co se na něm bude hledat?
3. Jak dlouho pokračovat v lécích a v jakých dávkách?
4. Kdy a jak přejít do péče svého gynekologa a co si s sebou vzít?
5. Co mám sledovat doma a při čem volat?
6. Co s prací, cestováním a pohybem ve vaší situaci?

Zeptejte se také na OHSS, pokud jste po čerstvém cyklu měla zvětšené vaječníky, může se stav při stoupajícím hCG zhoršit, a tohle je informace, kterou je lepší mít předem.

## Kdy volat hned

- **Silné krvácení**: nasáklá vložka během hodiny nebo velké sraženiny.
- **Prudká bolest v podbřišku**, zvlášť jednostranná.
- **Bolest v rameni nebo pod lopatkou**, mdloba, bledost, studený pot. To jsou možné známky mimoděložního těhotenství s krvácením do dutiny břišní. Volejte **155** nebo vyhledejte akutní lékařskou pomoc, nečekejte na plánovaný odběr.
- **Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení, nárůst hmotnosti kolem kilogramu za den**: možné příznaky OHSS.
- **Horečka nad 38 °C.**
- Opakované zvracení a neschopnost přijímat tekutiny.

> Pozitivní hCG je začátek dalšího sledování, ne jeho konec. Co znamená pro vás, řekne až ultrazvuk a váš lékař.`,
  },
  {
    id: 'ck-hcg-stoupa-pomalu',
    kind: 'article',
    title: 'Co když hCG stoupá pomalu nebo klesá?',
    excerpt:
      'Dvě čísla, mezi kterými je propast. Co se z nich dá číst, co ne a proč se nedá rozhodnout hned.',
    minutes: 4,
    phases: ['beta_positive', 'two_week_wait'],
    topics: ['vysledky', 'hormony', 'cekani'],
    level: 'essential',
    hero: 'sand',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Po pozitivním výsledku se obvykle odebírá hCG znovu, nejčastěji s odstupem zhruba dvou dnů, a hodnotí se **trend**, ne jedno číslo.

Co může být za pomalejším vzestupem nebo poklesem:

- těhotenství je o něco mladší, než se počítalo,
- těhotenství, které se nebude vyvíjet dál (velmi časná ztráta),
- **mimoděložní těhotenství**, kde bývá vzestup často pomalejší,
- vícečetné těhotenství s netypickou dynamikou,
- rozdíl mezi laboratořemi, pokud se odebíralo jinde.

A jedna zásadní věc, kterou se nevyplatí přeskočit: **z jednoho ani ze dvou čísel se nedá určit, co se děje.** Rozhodne až opakovaný odběr a ultrazvuk, na kterém je vidět, kde těhotenství je. Tabulky a kalkulačky na internetu tuhle situaci neumí posoudit a čtení cizích čísel v diskusích vám v tomhle období vezme spánek, aniž by cokoli objasnilo.

Čekání mezi odběry je jedno z nejtěžších období celé cesty. Nedá se v něm nic udělat, jen v něm být.

## Co probrat s klinikou

1. Kdy má být další odběr a **musí být ve stejné laboratoři**?
2. Kdy má smysl ultrazvuk a co se na něm bude hledat?
3. Co se bude dít v případě, že hodnota poroste pomalu, a co když bude klesat?
4. Co s léky. Pokračovat, nebo se něco mění?
5. Kam volat mimo ordinační hodiny a kde je nejbližší akutní gynekologická ambulance?
6. Jsou v mé situaci nějaké rizikové faktory pro mimoděložní těhotenství?

Poslední otázka není přehnaná opatrnost. Riziko mimoděložního těhotenství existuje i po přenosu embrya přímo do dělohy, a informace, kam a jak rychle se dostat, se hodí mít dřív, než ji budete potřebovat.

## Kdy volat hned

Nečekejte na naplánovaný odběr, pokud se objeví:

- **prudká bolest v podbřišku**, zvlášť jednostranná nebo sílící,
- **bolest v rameni nebo pod lopatkou**,
- **mdloba, bledost, studený pot, bušení srdce**: volejte **155** nebo vyhledejte akutní lékařskou pomoc,
- **silné krvácení** nebo krvácení se sraženinami,
- **horečka nad 38 °C**,
- **rychle rostoucí obvod břicha, dušnost, výrazně snížené močení**: možné příznaky OHSS.

Tohle jsou stavy, u kterých se volá okamžitě, a to i v noci a o víkendu.

> Aplikace hodnoty nevyhodnocuje a nic z nich nevyvozuje. Výsledky patří do rukou lékaře, který zná celý váš cyklus.`,
  },
  {
    id: 'ck-biochemicke-tehotenstvi',
    kind: 'article',
    title: 'Co když mám biochemické těhotenství?',
    excerpt:
      'Těhotenství, které skončilo dřív, než ho někdo stihl vidět. Byla jste těhotná. Ta ztráta je skutečná.',
    minutes: 4,
    phases: ['loss_biochemical', 'two_week_wait'],
    topics: ['ztrata', 'vysledky', 'psychika'],
    level: 'essential',
    hero: 'blush',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Biochemickým těhotenstvím se označuje situace, kdy hCG bylo pozitivní, ale hodnota se nezvyšovala tak, jak by bylo očekáváno, a začala klesat dřív, než by šlo těhotenství zobrazit na ultrazvuku. Prokázalo se tedy laboratorně, ne obrazem.

Co obvykle následuje:

- **hCG se sleduje opakovanými odběry**, dokud neklesne k nulovým hodnotám. To je důležité. Samo to nikdo neuhádne.
- Klinika řekne, kdy **vysadit podporu luteální fáze**.
- Krvácení přichází často s malým zpožděním proti běžné menstruaci a bývá silnější.
- Jako nejčastější příčina se uvádí genetická výbava embrya. Není to něco, co byste ovlivnila chováním, stresem nebo tím, že jste zvedla tašku.

Emočně je tohle jedna z nejhůř uchopených ztrát. Okolí často řekne „vždyť to skoro ani nebylo těhotenství“. Bylo. Měla jste pozitivní výsledek, řekli jste to možná jednomu člověku, mysleli jste na termín. **To, že to trvalo krátce, ztrátu nezmenšuje.** Truchlení je namístě a nepotřebuje ničí schválení.

## Co probrat s klinikou

1. Kdy a kolikrát opakovat odběr hCG a do jaké hodnoty se sleduje.
2. Kdy vysadit léky a co čekat po vysazení.
3. Kdy nejdřív může být další přenos a jestli je potřeba nechat proběhnout jeden cyklus.
4. Kolik embryí zůstává zamraženo.
5. Má v naší situaci smysl nějaké další vyšetření? U jedné časné ztráty se obvykle rozsáhlá vyšetření nedělají, po opakovaných může být zvažováno víc. Co konkrétně, záleží na individuální situaci.
6. Kam se obrátit pro psychologickou podporu.

## Kdy volat hned

- **hCG neklesá**, nebo dokonce stoupá, přestože krvácíte. Je nutné vyloučit mimoděložní těhotenství. Volejte okamžitě.
- **Prudká bolest v podbřišku**, zvlášť jednostranná.
- **Bolest v rameni nebo pod lopatkou**, mdloba, bledost, studený pot. Volejte **155** nebo vyhledejte akutní lékařskou pomoc.
- **Silné krvácení**: nasáklá vložka během hodiny, opakovaně, nebo velké sraženiny.
- **Horečka nad 38 °C** nebo páchnoucí výtok.

A stejně naléhavě: pokud nemůžete fungovat, nespíte, nejste schopná pracovat nebo máte myšlenky, že by bylo lepší tu nebýt, ozvěte se dnes. Linka první psychické pomoci **116 123** funguje nonstop a zdarma, při bezprostředním ohrožení volejte **155**.

> Nikdo vám nemůže slíbit, jak dopadne další pokus. Můžete ale žádat, aby vám tenhle někdo pořádně vysvětlil.`,
  },
  {
    id: 'ck-podezreni-mimodelozni',
    kind: 'article',
    title: 'Co když mám podezření na mimoděložní těhotenství?',
    excerpt:
      'Tady se nečeká na ranní ordinaci. Které příznaky znamenají okamžitý telefon a co se bude dít.',
    minutes: 4,
    phases: ['loss_ectopic', 'beta_positive'],
    topics: ['ztrata', 'vysledky', 'klinika'],
    level: 'essential',
    hero: 'dusk',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Mimoděložní těhotenství je stav, kdy se těhotenství uhnízdí mimo dutinu děložní, nejčastěji ve vejcovodu. **Může nastat i po IVF**, přestože se embryo přenáší přímo do dělohy. Embryo se po přenosu pohybuje a uhnízdí se samo. Vyšší riziko bývá popisováno u žen s předchozím zánětem nebo poškozením vejcovodů a po předchozím mimoděložním těhotenství.

Jak se na to obvykle přichází:

- **hCG stoupá pomaleji**, než by bylo očekáváno, nebo kolísá.
- **Na ultrazvuku není v děloze vidět těhotenství** v době, kdy by už být vidět mělo.
- Objeví se bolest nebo krvácení.

Určení může trvat několik dní a několik odběrů. To čekání je kruté a je normální, že v něm nejde myslet na nic jiného.

Podle nálezu, hladiny hCG a vašeho stavu může být zvažováno pečlivé sledování, léčba lékem nebo operace. Co je vhodné ve vaší situaci, rozhodne lékař, který vás vyšetří. Neexistuje postup vhodný pro každou ženu.

## Co probrat s klinikou

Ještě ve chvíli, kdy jste v pořádku, si zjistěte:

1. Kam volat mimo ordinační hodiny a kde je nejbližší **akutní gynekologická ambulance** s možností ultrazvuku a operace.
2. Jak rychle se tam dostanete a kdo vás tam odveze.
3. Kdy má být další odběr a ultrazvuk.
4. Jaké příznaky jsou pro vás konkrétně důvod volat okamžitě.
5. Co s léky, které užíváte.
6. Mám nějaké rizikové faktory, o kterých bych měla vědět?

Noste u sebe stručný přehled: že jste po embryotransferu, datum přenosu, poslední hodnoty hCG a kontakt na kliniku. V akutní situaci to ušetří čas, který se počítá.

## Kdy volat hned

**Tady se volá okamžitě. V noci, o víkendu, kdykoli.** Nečekejte na plánovaný odběr ani na zpětné zavolání.

Volejte **155** nebo vyhledejte akutní lékařskou pomoc při:

- **prudké, náhlé nebo rychle sílící bolesti v podbřišku**, zvlášť jednostranné,
- **bolesti v rameni nebo pod lopatkou**: dráždění bránice bývá známkou krvácení do dutiny břišní,
- **mdlobě, závrati, bledosti, studeném potu, bušení srdce**,
- **silném krvácení**,
- **tlaku na stolici** spolu s bolestí břicha,
- bolesti břicha spolu s horečkou nad 38 °C.

Když si nejste jistá, jestli je to „ono“, volejte. Falešný poplach nikomu neublíží. Odklad může.

> Aplikace tenhle stav nerozpozná a nevyhodnocuje ho. Rozhodnout může jen vyšetření na místě.`,
  },
  {
    id: 'ck-dalsi-transfer-nevyjde',
    kind: 'article',
    title: 'Co když další transfer nevyjde?',
    excerpt:
      'Když se to nedaří opakovaně, přichází otázka, co se dá ještě změnit. A také to, u čeho jsou důkazy slabé.',
    minutes: 4,
    phases: ['repeated_failure', 'waiting_next_attempt'],
    topics: ['psychika', 'vysledky', 'klinika'],
    level: 'essential',
    hero: 'taupe',
    author: 'Tým BlooMia',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Opakované neúspěšné přenosy jsou realita většího počtu párů, než se veřejně mluví. I embryo s dobrým hodnocením se nemusí uhnízdit, a to opakovaně. Nejde o vaši vinu ani o důsledek toho, jak jste žila.

Co je dobré vědět:

- **Pojem „opakované selhání implantace“ nemá jednotnou definici.** Různá pracoviště pracují s různým počtem přenosů a různým počtem embryí. Když ho uslyšíte, ptejte se, co jím konkrétně myslí.
- **Jeden IVF cyklus může obsahovat víc transferů.** Ze stimulace a odběru může vzejít několik embryí a z téže zásoby se pak dělá čerstvý přenos i následné kryotransfery. Počítání „pokusů“ proto nemusí být tak jednoznačné, jak zní.
- Kolem opakovaných neúspěchů se nabízí řada vyšetření a zákroků. **U části z nich jsou důkazy o přínosu slabé nebo rozporuplné**: týká se to například testování receptivity endometria pro určení okna přenosu, řady imunologických léčebných postupů nebo poškrábání sliznice. Neznamená to, že jsou nesmyslné ve všech situacích. Znamená to, že vám nikdo nemůže slíbit, že vám zvýší šanci na těhotenství.

Ptejte se proto vždy stejnou otázkou: **co se změní podle toho, jak vyšetření dopadne?** Pokud odpověď zní „nic“, je to drahá informace bez důsledku.

## Co probrat s klinikou

1. Existuje souhrn všech dosavadních cyklů na jednom papíře? Vyžádejte si ho.
2. Co konkrétně by se v dalším postupu změnilo, a proč zrovna to?
3. Jaké jsou u navrhovaného vyšetření nebo postupu důkazy o přínosu. A co bude jeho výsledek znamenat pro léčbu?
4. Má v naší situaci smysl genetické vyšetření embryí, a jaká jsou jeho omezení?
5. Jaké jsou náklady a co hradí pojišťovna.
6. Kdy má smysl zvážit jinou cestu. A jakou.

**Druhý názor na jiném pracovišti je běžná a legitimní věc.** Vezměte si s sebou kompletní dokumentaci včetně zpráv z embryologie.

## Kdy volat hned

Po samotném neúspěšném přenosu akutní situace většinou nehrozí. Volejte okamžitě při:

- **silném krvácení**: nasáklá vložka během hodiny nebo velké sraženiny,
- **prudké bolesti v podbřišku**, zvlášť jednostranné, nebo bolesti v rameni,
- **horečce nad 38 °C**,
- **mdlobě, bledosti, bušení srdce**: volejte **155**,
- pokud **menstruace nepřijde** ve lhůtě, kterou vám klinika řekla.

A stejně naléhavě: pokud nemůžete fungovat, nespíte, nejste schopná chodit do práce nebo máte myšlenky, že by bylo lepší tu nebýt, ozvěte se dnes. Linka první psychické pomoci **116 123** funguje nonstop a zdarma, při bezprostředním ohrožení volejte **155**.

> Kolik pokusů má ve vaší situaci smysl, není otázka výdrže. Je to otázka pro váš lékařský tým a pro vás.`,
  },
  {
    id: 'ck-uz-dalsi-ivf-nechci',
    kind: 'article',
    title: 'Co když už další IVF nechci?',
    excerpt:
      'Rozhodnutí přestat je stejně platné jako rozhodnutí pokračovat. Co je potřeba vyřešit prakticky.',
    minutes: 4,
    phases: ['repeated_failure', 'waiting_next_attempt'],
    topics: ['psychika', 'vztah', 'sebepece'],
    level: 'essential',
    hero: 'linen',
    author: 'Tým BlooMia',
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Myšlenka „já už nemůžu“ se objevuje skoro každé ženě, která je na téhle cestě delší dobu. Většinou přichází ve vlnách. V den výsledku, v den, kdy se má objednat další konzultace, nebo úplně nečekaně v obchodě.

Pár věcí, které stojí za to oddělit:

- **Vyčerpání není totéž co rozhodnutí.** „Dnes už nemůžu“ a „končím“ jsou dvě různé věty. Obě jsou legitimní, ale nemusíte je vyslovit ve stejný den.
- **Pauza je plnohodnotná možnost.** Nemusíte se rozhodovat mezi dalším cyklem a definitivním koncem. Odklad o půl roku je rozhodnutí, ne odkládání rozhodnutí.
- **Konec léčby není konec rodičovství pro každého.** Někdo dál uvažuje o dárcovství, náhradním mateřství nebo osvojení, někdo ne. Obojí je v pořádku a nikdo do toho nemá co mluvit.
- **Život bez dítěte není trest ani prohra.** Je to život, který se dá plánovat, ne jen přijmout jako zbytek.

Co v tomhle období nepomáhá: rozhodovat se v den špatné zprávy, přesvědčovat okolí, že jste to zkusila „dost“, a měřit si vlastní hodnotu počtem absolvovaných cyklů.

## Co probrat s klinikou

I když skončíte, pár praktických věcí zůstane a je lepší je vyřídit vědomě než je nechat viset:

1. **Zamražená embrya.** Kolik jich máte, jak dlouho je klinika skladuje, jaký je roční poplatek a jaké jsou možnosti, když už je nevyužijete.
2. **Souhlasy.** V Česku se k nakládání s embryi obvykle vyžaduje souhlas obou partnerů. Zeptejte se, jaké formuláře se podepisují a co se stane, když poplatek přestanete platit.
3. **Závěrečná zpráva.** Vyžádejte si souhrn všech cyklů. Za tři roky ho možná budete potřebovat a shánět se pak hůř.
4. **Vysazení léků** a co dělat s tím, co vám doma zbylo.
5. **Následná gynekologická péče**: ke komu chodit, jak často, na co si dát pozor.
6. Jestli klinika nabízí konzultaci s psychologem nebo vám může někoho doporučit.

Nemusíte na kliniku říkat „končíme“ definitivně. Věta „na neurčito to pozastavujeme“ je dostatečná.

## Kdy si říct o pomoc

Není tu žádný akutní zdravotní stav. O to snadněji se přehlédne, že jde o jedno z nejtěžších období celé cesty.

Ozvěte se odborníkovi, když:

- smutek trvá týdny a nezlepšuje se,
- nespíte nebo naopak nemůžete vstát,
- přestala jste chodit mezi lidi a vyhýbáte se všem, kdo mají děti,
- nejste schopná fungovat v práci,
- používáte alkohol nebo léky, abyste to vydržela,
- máte pocit, že jste všechno zkazila.

Hledejte psychologa se zkušeností s reprodukční medicínou nebo se zeptejte na kliniku, koho doporučují. Pomáhají i skupiny žen po ukončené léčbě. Tam nemusíte nic vysvětlovat.

**Pokud máte myšlenky, že by bylo lepší tu nebýt, ozvěte se dnes.** Linka první psychické pomoci **116 123** funguje nonstop a zdarma. Při bezprostředním ohrožení volejte **155**.

> Rozhodnutí přestat nikomu nedlužíte vysvětlovat. Ani rodině, ani klinice, ani sobě po letech.`,
  },
  {
    id: 'ck-nemuzeme-si-dovolit-cyklus',
    kind: 'article',
    title: 'Co když si nemůžu dovolit další cyklus?',
    excerpt:
      'Peníze jsou v IVF téma, o kterém se mluví nejmíň a rozhoduje nejvíc. Co se dá zjistit a spočítat.',
    minutes: 4,
    phases: ['waiting_next_attempt', 'ivf_prep', 'repeated_failure'],
    topics: ['finance', 'psychika', 'klinika'],
    level: 'essential',
    hero: 'sage',
    author: 'Tým BlooMia',
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Peníze rozhodují v IVF víc, než je komu příjemné přiznat. Rozpočet, který na začátku vypadal reálně, se po druhém neúspěšném pokusu často rozsype. A k žalu se přidá pocit viny, že „kdybychom na to měli, mohli bychom pokračovat“.

Co se v praxi platí a co bývá přehlédnuté:

- **Nadstandardní metody a doplňkové postupy**, které nejsou hrazené.
- **Skladování zamražených embryí**, obvykle roční poplatek, který běží dál i v době, kdy nic neplánujete.
- **Léky**, kde se doplatky mezi cykly liší podle protokolu.
- **Doprava, ubytování a ušlá mzda**, pokud dojíždíte. Tahle položka bývá největší z těch, se kterými nikdo předem nepočítá.
- **Vyšetření navíc**, která se doporučí v průběhu.

Rozsah úhrady z veřejného zdravotního pojištění je v Česku daný pravidly, která se v čase mění a mají svoje podmínky. Počet hrazených pokusů i věkovou hranici. **Nespoléhejte na to, co jste slyšela od známé nebo četla ve fóru před dvěma lety.** Zeptejte se na klinice a u své pojišťovny.

## Co probrat s klinikou

Ptejte se přímo. Není to nezdvořilé a nikoho tím nepřekvapíte:

1. **Kolik zbývá hrazených cyklů** ve vaší situaci a do kdy je můžete využít.
2. Kolik stojí kompletní cyklus u vás, položku po položce, včetně toho, co se běžně doplácí.
3. Které navrhované metody jsou nadstandard a **co konkrétně bych si od nich mohla slibovat**: u části doplňkových metod jsou důkazy o přínosu slabé a nikdo vám nemůže slíbit vyšší šanci na těhotenství.
4. Kolik stojí samotný kryotransfer z už zamražených embryí. Bývá výrazně levnější než celý nový cyklus, a když embrya máte, je to jiná finanční situace.
5. Jaké jsou skladovací poplatky a kdy se platí.
6. Nabízí klinika splátky nebo posunutí platby?

Doma pak pomáhá jedna nudná věc: sepsat všechny náklady na jeden papír, včetně dopravy a volna. Rozhodnutí, které vypadá jako „nemáme na to“, se často změní na „na tohle máme, na tamto ne“. A to už se dá plánovat.

## Kdy volat hned

Akutní zdravotní situace tady nehrozí. Přesto jsou situace, které nesnesou odklad:

- **Volejte na kliniku ještě dnes**, pokud vám běží skladovací poplatek za embrya a hrozí lhůta, po jejímž uplynutí se s embryi naloží jinak. Tohle je nevratné.
- **Ozvěte se, než přestanete cokoli platit.** Domluvit odklad jde skoro vždy, vrátit se k něčemu, co už proběhlo, ne.
- **Nevysazujte předepsané léky kvůli penězům bez vědomí lékaře.** Řekněte to nahlas, dá se hledat jiná varianta.

A okamžitě volejte **155** nebo Linku první psychické pomoci **116 123**, pokud vás finanční tíseň dohnala k pocitu, že to nemá cenu, nebo k myšlenkám, že by bylo lepší tu nebýt. Nonstop a zdarma.

> Aplikace nedává finanční poradenství. Ceny i pravidla úhrady si vždy ověřte na své klinice a u své pojišťovny.`,
  },
  {
    id: 'ck-neshodneme-se-s-partnerem',
    kind: 'article',
    title: 'Co když se s partnerem neshodneme na dalším kroku?',
    excerpt:
      'Jeden chce pokračovat, druhý ne. Jak z toho nevyrobit souboj a co se dá udělat prakticky.',
    minutes: 4,
    phases: ['waiting_next_attempt', 'repeated_failure'],
    topics: ['vztah', 'partner', 'psychika'],
    level: 'essential',
    hero: 'pearl',
    author: 'Tým BlooMia',
    publishedOn: '2026-08-02',
    body: `## Co bývá běžné

Neshoda o dalším kroku je jedna z nejčastějších krizí párů v léčbě. Nebývá to tím, že by jednomu na dítěti záleželo míň.

Co za tím obvykle stojí:

- **Nerovnoměrná zátěž.** Injekce, kontroly, narkózu a hormonální propady zažívá jeden z vás. Druhý zažívá bezmoc a čekání na chodbě. Obojí unavuje, ale jinak a v jiném čase.
- **Jiný způsob truchlení.** Někdo mluví, někdo mlčí a jde do práce. Mlčení se snadno čte jako lhostejnost, i když jím není.
- **Jiné vnímání času.** Jeden počítá dny do dalšího pokusu, druhý si potřebuje odpočinout.
- **Peníze a strach o vztah**, které se vysloví hůř než „chci ještě jeden cyklus“.
- **Nevyslovené hranice.** Často se ukáže, že jeden z vás si dávno řekl „tohle je poslední“, ale nahlas to nezaznělo.

Co obvykle nepomáhá: rozhodovat se v den špatné zprávy, přesvědčovat, ustupovat mlčky a pak to připomínat, a vzájemné měření, kdo trpí víc.

Co pomáhá: mluvit o **jednom konkrétním kroku**, ne o „všem“. „Chceš ještě někdy dítě?“ je nezodpověditelná otázka. „Půjdeme v listopadu na konzultaci a rozhodneme se po ní?“ je otázka, na kterou se odpovědět dá.

## Co probrat s klinikou

1. **Jděte na konzultaci oba.** Slyšet stejná čísla ze stejných úst odstraní půlku sporu, který ve skutečnosti stojí na dvou různých představách o realitě.
2. Ptejte se konkrétně: co by se v dalším postupu změnilo, jaká je zátěž pro tělo, kolik to stojí, jak dlouho to trvá.
3. **Souhlasy a embrya.** V Česku se k nakládání se zamraženými embryi obvykle vyžaduje souhlas obou partnerů. Zjistěte, jaké formuláře jste podepsali a co platí, kdyby se vaše cesty rozešly. Je to nepříjemné téma a je lepší ho otevřít teď než v hádce.
4. Zeptejte se, jestli klinika nabízí párovou konzultaci s psychologem.

Praktická dohoda, která funguje: **stanovte si termín rozhodnutí, ne rozhodnutí samo.** Například „do konce října o tom nemluvíme, prvního listopadu si sedneme“. Odloží se tím tlak, aniž by se téma zametlo.

## Kdy si říct o pomoc

Akutní zdravotní situace tady nehrozí. Odbornou pomoc má ale smysl vyhledat dřív, než se vztah dostane do stavu, kdy se spolu nedá mluvit vůbec.

Ozvěte se, když:

- se každý rozhovor o léčbě mění v hádku,
- přestali jste o tom mluvit úplně,
- jeden z vás dělá kroky bez vědomí druhého,
- objevuje se vyčítání, které se vrací pořád dokola,
- jeden z vás je dlouhodobě bez zájmu, bez spánku nebo bez energie.

Hledejte párového terapeuta, ideálně se zkušeností s neplodností. Není to signál, že vztah nefunguje. Je to nástroj, který se používá dřív, než přestane fungovat. Někomu stačí i dvě tři sezení, aby si každý mohl říct své v prostoru, kde ho ten druhý neskočí do řeči.

**Při myšlenkách na sebepoškození u kohokoli z vás volejte okamžitě 116 123, při bezprostředním ohrožení 155.**

> Aplikace párovou ani individuální terapii nenahrazuje. Tohle je téma pro člověka v místnosti.`,
  },
]

export const pack: ContentPack = { items }
