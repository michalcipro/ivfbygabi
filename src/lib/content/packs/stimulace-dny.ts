import type { ContentItem, ContentPack, DailyCard } from '../types'

/**
 * Stimulační kalendář den po dni.
 *
 * Stimulace je nejhustší část celého cyklu — injekce, kontroly, čísla
 * a rozpis, který se v průběhu mění. Tenhle balík dává ke každému dni
 * jednu kartu a k ní čtyři články o praktických věcech, které se na
 * klinice řeknou jednou a rychle.
 *
 * Nikde tu nejsou konkrétní dávky ani časy aplikace — ty určuje výhradně
 * klinika. A nikde se nehodnotí počet folikulů; z něj se výsledek cyklu
 * číst nedá.
 */

const items: ContentItem[] = [
  {
    id: 'sd-jak-si-pripravit-injekci',
    kind: 'article',
    title: 'Jak si připravit injekci',
    excerpt:
      'Postup, u kterého se nespletete — od umytí rukou po odložení jehly. Bez dávek a bez časů, ty patří na papír od vaší kliniky.',
    minutes: 7,
    phases: ['stimulation'],
    dayRange: [1, 4],
    topics: ['stimulace', 'leky', 'hormony'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    publishedOn: '2026-08-02',
    body: `## Rozpis určuje klinika, ne článek

Jaký lék, jaká dávka, jakou formou a v jaký čas — tohle všechno určuje vaše klinika a máte to mít napsané. Tenhle text popisuje jen to, co je společné většině injekčních přípravků: jak si postavit postup, u kterého neuděláte chybu.

**Žádné číslo, žádnou dávku ani čas si podle internetu neupravujte.** Pokud vám v rozpisu cokoli není jasné, zavolejte na kliniku dřív, než si aplikujete. Sestry tuhle otázku slyší denně a je to úplně běžný dotaz.

## Než začnete

1. **Umyjte si ruce** a připravte si čistou rovnou plochu s dobrým světlem.
2. **Vyskládejte si všechno dopředu:** lék, jehly, dezinfekci, čtvereček, pevnou nádobu na použité jehly a svůj rozpis.
3. **Zkontrolujte název léku a datum použitelnosti.** V lednici bývá víc krabiček, které vypadají hodně podobně.
4. **Ověřte si podmínky uchování** — jestli přípravek patří do chladu a jak dlouho před aplikací ho vyndat. Řada žen popisuje, že pokojově temperovaný roztok pálí méně. Řiďte se příbalovou informací a pokynem kliniky.

## Formy, se kterými se běžně setkáte

- **Předplněné pero** — dávka se nastavuje otočným kolečkem podle rozpisu.
- **Předplněná stříkačka** — dávka je daná, nic se nenastavuje.
- **Prášek a rozpouštědlo** — obsah se před aplikací smíchá přesně podle návodu.

Každá forma má jiný postup přípravy. Nechte si ho na klinice ukázat a při prvních aplikacích mějte návod otevřený vedle sebe. Není na tom nic trapného, i zdravotníci si návody čtou.

## Vlastní aplikace

1. Připravte nebo nastavte dávku **přesně podle rozpisu** a zkontrolujte ji ještě jednou.
2. Odvzdušněte podle návodu k přípravku, pokud to výrobce vyžaduje.
3. Otřete místo vpichu dezinfekcí a **nechte ho oschnout**. Vpich do vlhké kůže pálí víc.
4. Vpich veďte technikou, kterou vám ukázali na klinice. Většina stimulačních léků se podává podkožně, některé přípravky se podávají do svalu.
5. Po podání **počkejte několik vteřin**, než jehlu vytáhnete.
6. Místo krátce přitlačte čtverečkem. **Netřete ho.**
7. Jehlu odložte do pevné nádoby na ostré předměty, ne do běžného koše.

## Zapisujte si to

Jednoduchý zápis — datum, čas, lék, strana — vás ochrání před nejčastější nejistotou celé stimulace: „píchla jsem si dneska už, nebo ne?“. Poznámka v telefonu stačí.

## Když se něco pokazí

Nic z toho neřešte sama a nic z toho není důvod k panice:

- **Vynechaná dávka** nebo dávka podaná výrazně mimo určený čas — zavolejte na kliniku a řekněte přesně, co se stalo.
- **Vylitý nebo neúplně podaný obsah** — nedopichujte podle odhadu. Volejte.
- **Špatný lék nebo špatné množství** — volejte hned, i večer.
- **Kapka krve nebo malá modřina po vpichu** — běžné, není třeba nic řešit.

## Kdy volat

- Vyrážka, otok rtů nebo obličeje, dušnost či závrať po aplikaci — **vyhledejte akutní lékařskou pomoc**.
- Horečka nad 38 °C.
- Rozšiřující se zarudnutí, bolestivé ztvrdnutí nebo hnisání v místě vpichu — **kontaktujte svou kliniku**.
- Jakákoli pochybnost o tom, co a kolik jste si podala.

> Tenhle text popisuje obecné zásady zacházení s injekčními přípravky. Nenahrazuje příbalovou informaci ani pokyny vaší kliniky. Konkrétní lék, dávku i čas aplikace určuje výhradně váš lékař.`,
  },
  {
    id: 'sd-kam-se-picha-a-proc-stridat',
    kind: 'article',
    title: 'Kam se píchá a proč se místa střídají',
    excerpt:
      'Břicho, stehno, jeden systém a pár míst, kterým se vyhnout. Plus pravda o modřinách: nejsou známkou špatné techniky.',
    minutes: 5,
    phases: ['stimulation'],
    dayRange: [1, 8],
    topics: ['stimulace', 'leky', 'hormony'],
    level: 'essential',
    hero: 'sand',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    publishedOn: '2026-08-02',
    body: `## Kam se píchá

Většina léků používaných ke stimulaci se podává **podkožně** — do vrstvy pod kůží, ne do svalu. Nejčastěji se používá:

- **břicho**, obvykle v okolí pupku s odstupem několika centimetrů,
- **přední a boční strana stehna**, praktická alternativa, když se břicho podráždí.

Některé přípravky se podávají **do svalu**, typicky do horní zevní části hýždě nebo do stehna. Mají jinou techniku i jinou jehlu a často je aplikuje někdo druhý. **Které místo a která technika platí pro vás, určuje vaše klinika** — a je to jedna z věcí, na kterou má smysl se zeptat ještě před první aplikací.

## Proč se místa střídají

Opakovaný vpich do jednoho a téhož místa může vést k podráždění kůže, k modřinám a časem ke ztvrdnutí podkoží. Ztvrdlá tkáň je nepříjemná, hůř se do ní píchá a vstřebávání z ní bývá méně vyrovnané. Střídání míst tomu předchází a dává každému místu čas se zahojit.

Nejde o milimetry. Stačí, aby se dnešní vpich netrefil přesně tam, kde byl ten včerejší.

## Systém, který se dá udržet

1. **Střídejte strany.** Jeden den vlevo, druhý vpravo. Pokud máte dvě aplikace denně, ráno jedna strana, večer druhá.
2. **Představte si kolem pupku ciferník** a posunujte se den po dni o jednu „hodinu“.
3. **Zapisujte si stranu** vedle času aplikace. Pak si nemusíte nic pamatovat a ve třetím týdnu léčby to oceníte.

## Místa, kterým se vyhnout

- bezprostřední okolí pupku,
- jizvy, mateřská znaménka a pigmentové skvrny,
- ztvrdlá, oteklá nebo bolestivá místa,
- kůže se zarudnutím nebo vyrážkou,
- pruh, na kterém vám celý den tlačí pas kalhot.

## Modřiny a co na ně

Modřiny nejsou známkou špatné techniky. V podkoží břicha je hustá síť drobných cév a trefit jednu z nich je otázka náhody, ne šikovnosti.

Co ženám obvykle pomáhá:

- **krátké chlazení** místa před vpichem i po něm, vždy přes látku, nikdy led přímo na kůži,
- **mírný tlak** čtverečkem po vytažení jehly, bez tření a bez masírování,
- **jistý, plynulý pohyb** — pomalé, opatrné zavádění jehly bolí většinou víc.

Rozsáhlejší modřina vypadá hrozivě a může být citlivá, na účinek léku ale vliv nemá.

## Když se aplikuje do svalu

Aplikace do svalu je nepříjemnější a hůř se dělá sama sobě. Pokud vám ji klinika předepsala, má smysl:

- nechat si techniku ukázat a první dávku podat pod dohledem,
- domluvit se doma s někým, kdo to bude aplikovat,
- zeptat se, jestli je možné místo po aplikaci prohřát nebo rozchodit.

## Kdy volat kliniku

- Zarudnutí, které se šíří, teplá bolestivá bulka nebo hnisání v místě vpichu.
- Horečka nad 38 °C.
- Ztvrdnutí, které nemizí a znemožňuje další aplikaci.
- Vyrážka nebo otok mimo místo vpichu, dušnost — **vyhledejte akutní lékařskou pomoc**.

> Text popisuje obvyklou praxi. Konkrétní přípravek, místo i způsob aplikace určuje váš ošetřující lékař a jeho pokyn má vždycky přednost.`,
  },
  {
    id: 'sd-kontrolni-ultrazvuk',
    kind: 'article',
    title: 'Co se sleduje na kontrolním ultrazvuku',
    excerpt:
      'Milimetry, počty a slova, kterým nikdo nevysvětlí. Co lékař na obrazovce měří — a co se z toho naopak vyčíst nedá.',
    minutes: 7,
    phases: ['stimulation'],
    dayRange: [3, 11],
    topics: ['stimulace', 'hormony', 'leky'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    publishedOn: '2026-08-02',
    body: `## Jak kontrola probíhá

Kontrolní vyšetření během stimulace se dělá **vaginálním ultrazvukem**. Trvá obvykle několik minut a nevyžaduje přípravu — na rozdíl od transferu se sem chodí spíš s prázdným močovým měchýřem. K ultrazvuku se často, ale ne vždy, přidává odběr krve.

Kolik kontrol budete mít, se liší podle protokolu a podle toho, jak cyklus probíhá. Ke konci stimulace bývají hustší, někdy i obden nebo denně.

## Co se měří na obrazovce

- **Počet folikulů** v každém vaječníku zvlášť.
- **Velikost jednotlivých folikulů** v milimetrech.
- **Tloušťku a vzhled děložní sliznice** — endometria.
- **Přítomnost volné tekutiny** v malé pánvi.
- Někdy i útvary, které tam byly už před stimulací, například cysty.

## Co se měří z krve

Podle zvyklostí pracoviště a fáze stimulace se může sledovat **estradiol**, případně **LH** a **progesteron**. Hodnoty se hodnotí vždycky spolu s ultrazvukovým nálezem, nikdy samostatně. Odběr nebývá u každé kontroly a neznamená to, že by se něco dělo.

## Co se z čísel vyčíst nedá

Tohle je nejdůležitější část článku, protože právě tady se ženy nejvíc trápí:

- **Počet folikulů není počet vajíček.** Ne v každém folikulu je vajíčko a ne každé odebrané vajíčko je zralé.
- **Folikuly rostou nerovnoměrně.** Menší mohou ty větší dohnat a rozdíly mezi nimi jsou běžné.
- **Jedno číslo z jedné kontroly nic neuzavírá.** Sleduje se vývoj mezi kontrolami, ne jeden snímek.
- **Srovnávání s jinou ženou nedává smysl.** Jiný věk, jiná výchozí situace, jiný protokol, jiná odpověď.

Z toho, co uslyšíte na kontrole, nelze číst úspěch ani neúspěch cyklu. Konkrétní výklad vašeho nálezu patří vašemu lékaři — proberte ho s ním přímo v ordinaci.

## O čem se podle kontroly rozhoduje

- jestli pokračovat stejně, nebo **upravit dávku**,
- jestli a kdy přidat lék, který má zabránit předčasné ovulaci,
- kdy podat závěrečnou injekci a kdy naplánovat odběr vajíček,
- ve zvláštních situacích i to, jestli se transfer odloží a embrya se zamrazí — jeden cyklus totiž může vést k víc než jednomu transferu.

## Jak si z kontroly odnést víc

1. **Zapisujte si čísla přímo v ordinaci.** Za tři dny si je nevybavíte a přitom se vám budou hodit.
2. **Ptejte se, dokud rozumíte.** Věta „můžete mi to prosím zopakovat, chci si to zapsat“ funguje na většině pracovišť.
3. **Mějte tři otázky připravené.** Například: jaké jsou velikosti, mění se něco v rozpisu, kdy je další kontrola.
4. **Vezměte si volné oblečení**, vodu a něco malého k jídlu. Čekárny bývají delší, než slibuje objednací systém.

## Kdy volat kliniku

- Prudká, zejména jednostranná bolest v podbřišku.
- Rychle rostoucí obvod břicha, dušnost nebo výrazně snížené močení — může jít o příznaky hyperstimulačního syndromu (OHSS).
- Horečka nad 38 °C.
- Zvracení nebo průjem, kvůli kterým nemůžete udržet tekutiny.

> Článek popisuje obvyklý průběh sledování během stimulace. Nestanovuje diagnózu a nenahrazuje konzultaci. To, co znamenají vaše konkrétní čísla, řekne váš ošetřující lékař.`,
  },
  {
    id: 'sd-kdyz-se-zmeni-davka',
    kind: 'article',
    title: 'Když se dávka změní',
    excerpt:
      'Telefonát z kliniky, nový rozpis a hlava plná otázek. Úprava dávky během stimulace je běžná — a tady je, co s ní prakticky udělat.',
    minutes: 6,
    phases: ['stimulation'],
    dayRange: [4, 12],
    topics: ['stimulace', 'leky', 'hormony'],
    level: 'deep',
    hero: 'linen',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    publishedOn: '2026-08-02',
    body: `## Změna dávky je součást vedení cyklu

Jak vaječníky na léky zareagují, se dá předem odhadnout jen zhruba — podle věku, hormonálních hodnot, ultrazvukového nálezu a předchozích cyklů, pokud nějaké byly. Přesně se to ukáže až v průběhu. Proto se rozpis průběžně upravuje.

**Úprava dávky během stimulace je běžná a není známkou chyby** — ani vaší, ani lékařovy. Není to ani hodnocení vašeho těla.

## Co všechno se může změnit

- dávka stimulačního léku směrem nahoru nebo dolů,
- přidání nebo naopak vysazení dalšího léku,
- délka stimulace,
- termíny kontrol,
- načasování závěrečné injekce a odběru vajíček,
- ve zvláštních situacích plán cyklu jako celek — například se embrya zamrazí a transfer se odloží na jiný cyklus.

## Co znamená zvýšení a co snížení

**Zvýšení dávky** obvykle znamená, že klinika chce růst folikulů podpořit víc, než na co stačilo dosavadní nastavení.

**Snížení dávky** obvykle znamená, že reakce je rychlejší nebo bujnější, než je v dané situaci vhodné. Snížení bývá jedním ze způsobů, jak se pokusit snížit riziko hyperstimulačního syndromu.

Ani jedna z těch změn není známka toho, že něco selhalo, ani příslib, že něco vyjde. Je to nastavení nástroje podle toho, co je právě vidět.

## Když vám změnu oznámí telefonem

Telefonát bývá krátký a přijde ve chvíli, kdy jste v práci nebo v autobuse. Proto stojí za to mít jednoduchý postup:

1. **Zopakujte pokyn nahlas zpátky.** Nedorozumění se odhalí v téhle vteřině, ne večer u lednice.
2. **Zeptejte se, odkdy nový rozpis platí** — jestli od dnešní dávky, nebo až od zítřejší.
3. **Zeptejte se, jestli se mění i ostatní léky**, nebo jen ten jeden.
4. **Zeptejte se, kdy je další kontrola** a jestli se má něco hlásit dřív.
5. **Zapište si to hned** a co nejdřív přepište celý rozpis načisto.

## Praktické pasti, do kterých se padá nejčastěji

- **Dva rozpisy vedle sebe.** Starý papír zahoďte nebo přeškrtněte. Nic nezpůsobí víc chyb než dvě verze pravdy na jednom stole.
- **Zásoba léků, která nové dávce neodpovídá.** Přepočítejte ji hned po telefonátu, ne v pátek večer. Když nevychází, volejte na kliniku ještě dnes.
- **Dorovnávání z vlastní úvahy.** Chybějící množství si nikdy nedoplňujte z jiného balení ani podle odhadu.
- **Dávka podle diskusního fóra.** To, co dostala jiná žena, není informace o vás.

**Dávku si sama nezvyšujte ani nesnižujte za žádných okolností.** Když s ní máte problém, řešením je telefonát, ne vlastní úprava.

## Když se cyklus přeruší

Někdy se stimulace ukončí dřív, než se dojde k odběru. Důvodem bývá odpověď, která se výrazně liší od očekávané — v obou směrech. Rozhodnutí dělá lékař podle konkrétního nálezu.

Je to jedno z nejtěžších sdělení celé léčby a nemá smysl ho zlehčovat. Co se dá udělat: zeptat se, co z toho plyne pro další postup, jestli se bude něco měnit v protokolu a kdy se dá pokračovat. Odpověď nemusí přijít hned — část otázek se dá probrat až na kontrole s odstupem.

## Kdy volat kliniku

- Nejste si jistá, co přesně máte teď užívat.
- Vynechala jste dávku nebo jste si podala jiné množství, než mělo být.
- Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení — může jít o příznaky OHSS.
- Prudká bolest v podbřišku nebo horečka nad 38 °C.

> Text vysvětluje princip úprav stimulace obecně. Nestanovuje dávkování ani léčebný postup. Rozpis vždycky určuje váš ošetřující lékař.`,
  },
]

const dailyCards: DailyCard[] = [
  {
    id: 'sd-dc-1',
    phases: ['stimulation'],
    day: 1,
    headline: 'Dnes se začíná. První injekce bývá nejtěžší z celé řady.',
    body: 'Dnes si podle rozpisu od kliniky aplikujete první dávku. Ve vaječnících je právě teď skupina drobných folikulů, které by ve většině v běžném cyklu zanikly; léky jim mají dát šanci růst dál. Cítit z toho dnes nejspíš nebudete vůbec nic — a to je normální začátek, ne špatné znamení.',
    whatsHappening: [
      'Ve vaječnících je skupina drobných folikulů, které se v tomto cyklu nabídly k růstu.',
      'Hladiny hormonů z léků teprve začínají stoupat, tělo na ně reaguje s odstupem.',
      'Většina žen první dny žádnou změnu nepociťuje.',
    ],
    task: 'Zapište si čas aplikace, který vám určila klinika, a nastavte si na něj v telefonu denní připomínku.',
    reflection: 'Co mi běželo hlavou, když jsem držela první injekci v ruce?',
    tip: 'Vyhraďte lékům jedno stálé místo — jednu polici v lednici a jednu krabici mimo ni. Hledání ve spěchu je zdrojem chyb.',
    callDoctorIf: [
      'Vyrážka, otok obličeje nebo rtů, dušnost po aplikaci — vyhledejte akutní lékařskou pomoc.',
      'Podala jste si jiný lék nebo jiné množství, než mělo být podle rozpisu.',
      'Nejste si jistá, jestli se celá dávka opravdu podala.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-2',
    phases: ['stimulation'],
    day: 2,
    headline: 'Druhý den: ruce si zvyknou dřív než hlava.',
    body: 'Druhá aplikace bývá znatelně snazší než ta včerejší, i když se hlava pořád brání. V těle zatím probíhá tichá práce — folikuly na podnět reagují, ale změřitelné to ještě není. Klidně se můžete cítit úplně stejně jako minulý týden.',
    whatsHappening: [
      'Folikuly ve vaječnících začínají růst, zatím měří jen několik milimetrů.',
      'Estradiol se pomalu zvedá, obvykle bez jakýchkoli příznaků.',
      'V místě vpichu může být krátké zarudnutí nebo malá modřina.',
    ],
    task: 'Zkontrolujte, jestli máte doma všechno na aplikaci: léky, jehly, dezinfekci a pevnou nádobu na použité jehly.',
    reflection: 'Co mi včera pomohlo dostat se přes první injekci? Dá se to zopakovat i dnes?',
    tip: 'Modřinám pomáhá krátké chlazení místa přes látku před vpichem a mírný tlak čtverečkem po něm. Místo netřete.',
    callDoctorIf: [
      'Vyrážka, otok nebo dušnost po aplikaci — vyhledejte akutní lékařskou pomoc.',
      'Vynechala jste dávku nebo si nejste jistá, kolik jste si podala.',
      'Prudká bolest v podbřišku.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-3',
    phases: ['stimulation'],
    day: 3,
    headline: 'Třetí den: rutina se rodí dřív, než jste čekala.',
    body: 'Tři večery po sobě a z výjimečné události je obyčejný úkon. Vaječníky pracují na několika folikulech najednou, což je proti běžnému cyklu neobvyklá zátěž — zvenčí se to ale zatím většinou neprojevuje. Mírná únava nebo rozkolísaná nálada v prvních dnech nejsou nic mimořádného.',
    whatsHappening: [
      'Roste víc folikulů současně, každý svým vlastním tempem.',
      'Estradiol stoupá; u části žen se objeví napětí v prsou nebo únava.',
      'Folikuly jsou zatím malé, měření by v tuhle chvíli mnoho neřeklo.',
    ],
    task: 'Napište si do poznámek v telefonu tři otázky, které chcete položit na nejbližší kontrole.',
    reflection: 'Komu jsem zatím řekla, že jsem ve stimulaci — a komu ne? Vyhovuje mi to takhle?',
    tip: 'Volnější oblečení, které netlačí v pase, se hodí už teď. Za pár dní ho oceníte podstatně víc.',
    callDoctorIf: [
      'Prudká bolest v podbřišku.',
      'Krvácení silnější než slabé špinění.',
      'Rozšiřující se zarudnutí, bolestivé ztvrdnutí nebo hnisání v místě vpichu.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-4',
    phases: ['stimulation'],
    day: 4,
    headline: 'Čtvrtý den: první kontrola bývá za dveřmi.',
    body: 'První kontrolní ultrazvuk se na většině pracovišť plánuje někam k přelomu čtvrtého až šestého dne stimulace; přesný termín určuje vaše klinika. Podívá se na to, jak vaječníky na léky odpovídají, a podle nálezu se může rozpis upravit. Změna dávky v téhle fázi je běžná a neznamená, že se něco pokazilo.',
    whatsHappening: [
      'Folikuly obvykle přibývají zhruba o jeden až dva milimetry denně.',
      'Děložní sliznice se pod vlivem estradiolu postupně zesiluje.',
      'Součástí kontroly bývá u části pracovišť i odběr krve na hormony.',
    ],
    task: 'Připravte si na kontrolu doklady, papír od kliniky a tužku. Čísla z ultrazvuku si budete chtít zapsat rovnou na místě.',
    reflection: 'Co bych na kontrole nejradši slyšela? A co si počnu s tím očekáváním, když to zazní jinak?',
    tip: 'Vezměte si na kliniku vodu a něco malého k jídlu. Čekárny bývají delší, než sliboval objednací systém.',
    callDoctorIf: [
      'Prudká nebo narůstající bolest v podbřišku.',
      'Zvracení, kvůli kterému neudržíte tekutiny.',
      'Bolestivý otok a zarudnutí v místě vpichu.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-5',
    phases: ['stimulation'],
    day: 5,
    headline: 'Pátý den: čísla, která zatím nic neuzavírají.',
    body: 'Pokud už jste byla na kontrole, slyšela jste počty a milimetry. V téhle části stimulace se z nich nedá nic uzavřít — folikuly rostou nerovnoměrně, menší mohou ty větší dohnat a některé se přidají později. Počet folikulů navíc není počtem vajíček; to se ukáže až při odběru.',
    whatsHappening: [
      'Folikuly rostou různým tempem a rozdíly mezi nimi jsou běžné.',
      'Estradiol dál stoupá, u části žen se objeví nadýmání nebo napětí v prsou.',
      'Podle nálezu může klinika upravit dávku nebo přidat lék bránící předčasné ovulaci.',
    ],
    task: 'Zapište si dnešní čísla z kontroly na jedno místo — do poznámek, do sešitu, kamkoli, kde je najdete i za týden.',
    reflection: 'Srovnávám se s někým? A co mi to srovnávání reálně dává?',
    tip: 'Čísla z internetových diskusí nejsou vaše. Jiný věk, jiný protokol, jiná výchozí situace — porovnání nedává smysl.',
    callDoctorIf: [
      'Prudká, zejména jednostranná bolest v podbřišku.',
      'Silné krvácení.',
      'Zvracení nebo průjem, kvůli kterým neudržíte tekutiny.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-6',
    phases: ['stimulation'],
    day: 6,
    headline: 'Šestý den: břicho začíná dávat vědět.',
    body: 'Vaječníky, které v běžném cyklu dovedou k cíli jeden folikul, jich teď nesou několik — a zvětšují se. Tlak, těžkost nebo pobolívání v podbřišku bývají v téhle části stimulace běžné. Od téhle chvíle je dobré znát příznaky, se kterými se volá na kliniku.',
    whatsHappening: [
      'Vaječníky se zvětšují a jsou citlivější na náhlý pohyb.',
      'Estradiol stoupá výrazněji, kalhoty mohou začít být těsné.',
      'Spánek i nálada bývají rozkolísanější než na začátku.',
    ],
    task: 'Zjistěte si a uložte do telefonu číslo, na které se volá mimo ordinační hodiny a o víkendu.',
    reflection: 'Co dnes moje tělo potřebuje víc — pohyb, nebo klid?',
    tip: 'Prudké otáčení, skoky a intenzivní cvičení teď vynechte. Zvětšené vaječníky snášejí náhlý pohyb hůř.',
    callDoctorIf: [
      'Rychle rostoucí obvod břicha, rychlý přírůstek hmotnosti nebo dušnost — může jít o příznaky hyperstimulačního syndromu (OHSS).',
      'Výrazně snížené množství moči.',
      'Prudká, narůstající bolest v podbřišku, zejména jednostranná.',
      'Zvracení, kvůli kterému neudržíte tekutiny, nebo horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-7',
    phases: ['stimulation'],
    day: 7,
    headline: 'Sedmý den: půlka bývá za vámi.',
    body: 'Stimulace trvá u většiny cyklů zhruba deset až čtrnáct dní, takže jste nejspíš někde v polovině — přesnou délku určí až vývoj folikulů. Sedmý den bývá tím, kdy dochází trpělivost, zatímco do cíle je pořád daleko. To není slabost, to je únava z režimu, ve kterém se nedá nic naplánovat.',
    whatsHappening: [
      'Větší folikuly se blíží velikostem, podle kterých se rozhoduje o dalších krocích.',
      'Hladiny hormonů jsou vysoké; únava a plačtivost mají hormonální podíl.',
      'Kontroly bývají v téhle části častější, u někoho obden nebo denně.',
    ],
    task: 'Přepočítejte zásobu léků a ověřte, jestli vydrží i přes víkend. Když ne, řešte to dnes.',
    reflection: 'Co jsem za tenhle týden zvládla, i když jsem si na začátku myslela, že to nezvládnu?',
    tip: 'Zkuste si dopředu uvolnit ranní hodiny na kontroly. Shánění náhrady na poslední chvíli bere víc sil než samotné vyšetření.',
    callDoctorIf: [
      'Rychlý nárůst obvodu břicha, rychlý přírůstek hmotnosti nebo dušnost — může jít o příznaky OHSS.',
      'Výrazně snížené močení nebo silná žízeň.',
      'Prudká, zejména jednostranná bolest v podbřišku.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-8',
    phases: ['stimulation'],
    day: 8,
    headline: 'Osmý den: kontroly houstnou a rozpis se může měnit.',
    body: 'Ke konci stimulace se ultrazvuky obvykle zhušťují, protože se o načasování dalších kroků rozhoduje doslova na hodiny. Kolem téhle doby může klinika přidat nebo upravit lék, který má zabránit předčasné ovulaci. Vaše práce zůstává stejná: držet rozpis a hlásit, co je jinak.',
    whatsHappening: [
      'Folikuly rostou dál, rozdíly ve velikostech se mohou srovnávat i zvětšovat.',
      'Endometrium se zesiluje a měří se spolu s folikuly.',
      'Zvětšené vaječníky mohou tlačit na okolí — časté močení není nic výjimečného.',
    ],
    task: 'Zapište si do kalendáře všechny už potvrzené termíny včetně času a místa.',
    reflection: 'Co mi teď bere víc sil — samotná léčba, nebo organizace kolem ní?',
    tip: 'Když se rozpis změní, přepište ho celý načisto na jeden papír a starý zahoďte. Dvě verze vedle sebe jsou nejčastější zdroj chyb.',
    callDoctorIf: [
      'Rychle rostoucí břicho, rychlý přírůstek hmotnosti během několika dní nebo dušnost — může jít o příznaky OHSS.',
      'Výrazně snížené močení.',
      'Prudká bolest v podbřišku nebo silné nadýmání.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-9',
    phases: ['stimulation'],
    day: 9,
    headline: 'Devátý den: čekání na jedno konkrétní datum.',
    body: 'Termín odběru vajíček se v tuhle chvíli obvykle ještě nedá potvrdit — vychází z toho, jak folikuly vypadají na poslední kontrole. Nejistota v plánování patří k nejvyčerpávajícím částem stimulace, protože se nedá vyřešit vůlí ani přípravou. Co se udělat dá, je připravit se na obě varianty.',
    whatsHappening: [
      'O načasování rozhoduje velikost folikulů a hormonální hodnoty, ne kalendář.',
      'Vaječníky jsou zvětšené, tlak v podbřišku bývá výraznější.',
      'Únava ke konci stimulace obvykle roste.',
    ],
    task: 'Domluvte si předběžně dopravu na den odběru. Po výkonu v sedaci nebo narkóze se neřídí a doprovod se na poslední chvíli shání hůř.',
    reflection: 'Co potřebuju mít zařízené, abych den odběru zvládla bez zbytečného shonu?',
    tip: 'Sbalte si tašku na odběr už teď: doklady, papíry od kliniky, ponožky, volné oblečení, vložky. Zabere to deset minut a máte to z hlavy.',
    callDoctorIf: [
      'Rychle rostoucí obvod břicha, výrazný přírůstek hmotnosti nebo dušnost — může jít o příznaky OHSS.',
      'Výrazně snížené močení.',
      'Náhlá prudká bolest v podbřišku, případně s nevolností a zvracením.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-10',
    phases: ['stimulation'],
    day: 10,
    headline: 'Desátý den: závěrečná injekce se plánuje na hodiny.',
    body: 'Když folikuly dosáhnou velikostí, které klinika považuje za vhodné, přijde pokyn k závěrečné injekci — takzvanému triggeru. Aplikuje se v přesně určený čas, protože od něj se termín odběru počítá na hodiny. Je to jediná injekce celé stimulace, u které si nemůžete dovolit odchylku v čase.',
    whatsHappening: [
      'Trigger spouští závěrečné dozrání vajíček ve folikulech.',
      'Odběr se obvykle plánuje zhruba 34 až 36 hodin po něm, přesný čas určí klinika.',
      'Které přípravky se v den triggeru vysazují nebo mění, se řídí výhradně pokynem kliniky.',
    ],
    task: 'Až vám čas triggeru sdělí, zopakujte ho do telefonu nahlas zpátky a hned si ho zapište i s datem.',
    reflection: 'Čeho se na odběru bojím konkrétně? Dá se s tou jednou věcí něco udělat?',
    tip: 'Nastavte si na trigger dvě připomínky, jednu půl hodiny předem. Tuhle injekci si nikdo nemůže dovolit posunout.',
    callDoctorIf: [
      'Nestihla jste trigger v určený čas nebo si nejste jistá, že se podal celý — volejte ihned.',
      'Rychle rostoucí břicho, dušnost nebo výrazně snížené močení — může jít o příznaky OHSS.',
      'Prudká bolest v podbřišku.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-11',
    phases: ['stimulation'],
    day: 11,
    headline: 'Jedenáctý den: tělo pracuje naplno a dává to najevo.',
    body: 'U části žen je v tuhle chvíli stimulace u konce nebo těsně před ním, u jiných ještě pár dní pokračuje. Délku určuje růst folikulů, ne počet dní v kalendáři — a obojí je běžný průběh. Tlak a plnost v podbřišku bývají právě ke konci nejsilnější.',
    whatsHappening: [
      'Vaječníky jsou zvětšené a citlivé, tlak v podbřišku bývá výrazný.',
      'Hladiny hormonů jsou nejvyšší za celý dosavadní cyklus.',
      'Nadýmání, pocit plnosti a horší spánek jsou v téhle fázi časté.',
    ],
    task: 'Připravte si na den odběru pití a lehké jídlo na dobu po výkonu. Po probuzení bývá hlad a v čekárně se nic nesežene.',
    reflection: 'Co jsem se za těch jedenáct dní dozvěděla sama o sobě?',
    tip: 'Volné kalhoty, žádný pas. Zvětšené vaječníky snášejí tlak hůř, než byste čekala.',
    callDoctorIf: [
      'Rychlý nárůst obvodu břicha, dušnost nebo výrazně snížené močení — může jít o příznaky OHSS.',
      'Prudká jednostranná bolest s nevolností a zvracením — může jít o torzi vaječníku, vyhledejte akutní lékařskou pomoc.',
      'Silné krvácení.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-12',
    phases: ['stimulation'],
    day: 12,
    headline: 'Dvanáctý den: konec bývá blízko, ale nemusí být dnes.',
    body: 'Dvanáctý den stimulace je stejně v pořádku jako devátý — protokoly i odpovědi se liší a samotná délka o ničem nevypovídá. Pokud vám klinika stimulaci prodloužila, znamená to, že sleduje růst folikulů dál. Nejtěžší na téhle části bývá, že si nemůžete říct „ještě dva dny a končím“.',
    whatsHappening: [
      'Kontroly bývají denní nebo obdenní, aby se nepropásl vhodný okamžik.',
      'Vaječníky jsou zvětšené, únava a pocit plnosti přetrvávají.',
      'Pokud jste už dostala trigger, další stimulační dávky se obvykle nepodávají — vždy podle pokynu kliniky.',
    ],
    task: 'Ozvěte se jednomu člověku, který o vaší situaci ví. Nemusíte řešit léčbu, stačí obyčejný hovor o čemkoli jiném.',
    reflection: 'Co si o sobě říkám, když se něco protáhne? A je to spravedlivé?',
    tip: 'Pijte během dne dost tekutin a nevynechávejte jídlo. Doporučení „hodně pít a jíst bílkoviny“ se ke konci stimulace opakuje často, přestože pro prevenci hyperstimulace nejsou důkazy silné — dehydratovaná a hladová se ale budete cítit hůř tak jako tak.',
    callDoctorIf: [
      'Rychle rostoucí obvod břicha, rychlý přírůstek hmotnosti nebo dušnost — může jít o příznaky OHSS.',
      'Výrazně snížené močení.',
      'Prudká bolest v podbřišku.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-13',
    phases: ['stimulation'],
    day: 13,
    headline: 'Třináctý den: delší stimulace není chyba.',
    body: 'Některé cykly potřebují víc dní, jiné míň; rozhoduje o tom růst folikulů, který se předem odhadnout nedá. Pokud stimulace trvá déle, než jste čekala, je to informace o průběhu cyklu, ne o vás. Zeptejte se na kontrole rovnou, s čím klinika počítá — nejasnost bere víc sil než odpověď.',
    whatsHappening: [
      'Folikuly rostou u každé ženy jiným tempem, delší stimulace je běžná varianta.',
      'Vaječníky jsou zvětšené a zůstanou takové ještě nějakou dobu po odběru.',
      'Hladiny hormonů jsou vysoké, výkyvy nálad se v téhle fázi dají čekat.',
    ],
    task: 'Napište si tři otázky na příští kontrolu. Zařaďte mezi ně i tu, na kterou se pořád stydíte zeptat.',
    reflection: 'Co bych potřebovala od svého lékaře slyšet, abych z téhle části vyšla klidnější?',
    tip: 'Řekněte v ordinaci nahlas, když něčemu nerozumíte. Věta „můžete mi to prosím zopakovat, chci si to zapsat“ funguje na většině pracovišť.',
    callDoctorIf: [
      'Rychle rostoucí obvod břicha, výrazný přírůstek hmotnosti nebo dušnost — může jít o příznaky OHSS.',
      'Výrazně snížené močení nebo silná žízeň.',
      'Prudká, zejména jednostranná bolest v podbřišku.',
      'Horečka nad 38 °C.',
    ],
  },
  {
    id: 'sd-dc-14',
    phases: ['stimulation'],
    day: 14,
    headline: 'Čtrnáctý den: konec téhle části cesty.',
    body: 'Většina stimulací je v tuhle chvíli u konce — buď máte závěrečnou injekci za sebou, nebo se termín odběru domlouvá právě teď. Někdy se cyklus v této fázi z medicínských důvodů upraví nebo přeruší; rozhoduje o tom lékař podle konkrétního nálezu a není to vaše chyba. Ať se dnešek uzavře jakkoli, těch čtrnáct dní jste odchodila den po dni.',
    whatsHappening: [
      'Po triggeru se ve folikulech dokončuje zrání vajíček.',
      'Vaječníky zůstanou zvětšené ještě několik dní až týdnů po odběru.',
      'Příznaky hyperstimulace se mohou objevit i po odběru, nejen během stimulace.',
    ],
    task: 'Projděte si pokyny na den odběru: čas příchodu, odkdy nejíst a nepít, kdo vás odveze domů.',
    reflection: 'Co si z téhle části chci zapamatovat — a co naopak nechat za sebou?',
    tip: 'Pamatujte, že jeden cyklus může vést k víc než jednomu transferu. Embrya, která se případně zamrazí, patří pořád k němu — „další pokus“ tedy nemusí znamenat další stimulaci.',
    callDoctorIf: [
      'Rychle rostoucí obvod břicha, rychlý přírůstek hmotnosti nebo dušnost — může jít o příznaky OHSS.',
      'Výrazně snížené močení.',
      'Prudká bolest v podbřišku, nevolnost a zvracení.',
      'Horečka nad 38 °C.',
    ],
  },
]

export const pack: ContentPack = { items, dailyCards }
