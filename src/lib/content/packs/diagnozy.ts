import type { ContentItem, ContentPack } from '../types'

/**
 * Diagnózy a stavy související s plodností.
 *
 * Edukativní databáze. Každý článek má stejnou kostru, aby se v tom dalo
 * rychle orientovat: co to je, jak to může souviset s plodností, jak se to
 * vyšetřuje, co to může znamenat na IVF cestě a na co se zeptat lékaře.
 *
 * Nic z toho není diagnóza ani doporučení léčby. Diagnózu stanoví lékař,
 * který vás vyšetřil, a plán léčby patří vám a vaší klinice.
 */

const REVIEWED = 'Odborně garantováno lékařem reprodukční medicíny.'

const items: ContentItem[] = [
  {
    id: 'dg-pcos',
    kind: 'article',
    title: 'PCOS: syndrom polycystických ovarií',
    excerpt:
      'Nejčastější hormonální příčina nepravidelné ovulace. Co ta diagnóza znamená, co neznamená a jak se s ní pracuje při IVF.',
    minutes: 8,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky', 'klinika'],
    level: 'essential',
    hero: 'sage',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Syndrom polycystických ovarií je hormonální a metabolický stav, ne nemoc jednoho orgánu. Projevuje se kombinací tří věcí: nepravidelnou nebo chybějící ovulací, známkami vyšší aktivity mužských hormonů (akné, nadměrné ochlupení, vypadávání vlasů, nebo jen zvýšené hodnoty v krvi) a typickým obrazem vaječníků na ultrazvuku, kde je velké množství drobných nedozrálých folikulů.

K určení diagnózy obvykle stačí, když jsou splněná dvě kritéria ze tří. A to až poté, co lékař vyloučí jiné stavy s podobnými projevy. Přesná kritéria i jejich výklad se mezi pracovišti mohou lišit.

Název je matoucí. Nejde o cysty v běžném smyslu slova a nic se v nich nehromadí. Jde o folikuly, které se rozeběhly, ale žádný z nich nedozrál a nepraskl.

Obraz PCOS je u každé ženy jiný. Některá má hlavně nepravidelné cykly, jiná hlavně kožní projevy, další převážně metabolickou složku. Proto se dvě ženy se stejnou diagnózou mohou léčit velmi odlišně.

## Jak to může souviset s plodností

Hlavní souvislost je jednoduchá: pokud ovulace nepřichází pravidelně, je méně příležitostí k početí a nedá se spolehlivě odhadnout plodné období. Cykly delší než 35 dní nebo méně než osm menstruací za rok bývají signálem, který stojí za vyšetření.

Co PCOS **neznamená**: že jste neplodná. Řada žen s PCOS otěhotní spontánně, někdy po úpravě životního stylu, někdy po indukci ovulace tabletami. Diagnóza sama o sobě neurčuje, jak dlouhá vaše cesta bude.

U PCOS bývá často vyšší hodnota AMH a vyšší počet antrálních folikulů. To vypadá jako dobrá zpráva o zásobě vajíček, ale nevypovídá to o jejich kvalitě a nesmí se to číst jako záruka úspěchu. Zároveň to znamená, že vaječníky mohou na stimulaci reagovat velmi silně, a to má praktické důsledky.

S PCOS se často pojí inzulinová rezistence a vyšší hmotnost. Neplatí to pro každou. Část žen s PCOS má normální hmotnost i normální metabolismus.

## Jak se to vyšetřuje

Vyšetření obvykle kombinuje několik vrstev a jeho rozsah záleží na individuální situaci:

- **Anamnéza cyklu.** Jak dlouhé cykly máte, jak dlouho, jak se měnily. Záznam z několika měsíců má často větší cenu než jeden odběr.
- **Ultrazvuk.** Počet drobných folikulů a objem vaječníků. U mladých žen bývá tento obraz běžný i bez PCOS, proto se nikdy neposuzuje samostatně.
- **Hormony z krve**, obvykle na začátku cyklu: FSH, LH, estradiol, testosteron, SHBG, AMH.
- **Vyloučení jiných příčin.** Prolaktin, TSH a hormony štítné žlázy, někdy 17-OH-progesteron nebo vyšetření nadledvin. Bez tohoto kroku není diagnóza úplná.
- **Metabolické vyšetření.** Glykémie, zátěžový test s glukózou, inzulin, lipidy. Může být zvažováno i tehdy, když nemáte nadváhu.

## Jak to může souviset s IVF cestou

Před IVF se u PCOS často zkouší jednodušší cesty. Úprava životního stylu, indukce ovulace tabletami, případně inseminace. IVF přichází, když tyhle kroky nevedou k cíli nebo když je v páru ještě jiný faktor.

Při stimulaci je u PCOS zásadní téma **riziko hyperstimulačního syndromu (OHSS)**. Vaječníky s velkou zásobou folikulů reagují snadno a někdy až příliš. Kliniky s tím počítají: mohou volit nižší dávky, protokol s antagonistou, jiný způsob spuštění dozrání vajíček nebo přístup, kdy se v daném cyklu netransferuje a všechna embrya se zamrazí. O konkrétním postupu rozhoduje váš lékař.

Vysoký počet odebraných vajíček neznamená automaticky vysoký počet zralých vajíček ani embryí. Mezi počtem folikulů, počtem zralých vajíček a počtem embryí, která se sledují od 1. do 6. dne vývoje, je vždy propad. U PCOS bývá tento rozdíl někdy výraznější.

Jeden IVF cyklus u vás může vyústit ve víc transferů. Čerstvý přenos i následné kryotransfery ze stejné zásoby embryí. Právě u PCOS, kde se často volí odložený transfer, to bývá pravidlo, ne výjimka.

## Na co se zeptat lékaře

- Podle jakých kritérií jste u mě PCOS určili a která z nich splňuji?
- Které jiné příčiny nepravidelného cyklu jste u mě vyloučili?
- Mám vyšetřenou metabolickou složku, tedy glykémii a inzulin?
- Má v mé situaci smysl nejdřív zkusit indukci ovulace nebo inseminaci, a kolik cyklů?
- Jaké je u mě riziko OHSS a jak ho při stimulaci budete snižovat?
- Plánujete čerstvý transfer, nebo zamrazení všech embryí a odložený kryotransfer? Podle čeho se rozhodnete?
- Co konkrétně mám dělat, když se během stimulace objeví napínání břicha nebo dušnost?

> Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení nebo prudký nárůst hmotnosti během stimulace či po odběru vajíček nepatří k běžnému průběhu. Kontaktujte svou kliniku. Při silné dušnosti nebo prudké bolesti břicha vyhledejte akutní lékařskou pomoc.`,
  },
  {
    id: 'dg-endometrioza',
    kind: 'article',
    title: 'Endometrióza',
    excerpt:
      'Tkáň podobná děložní sliznici tam, kde nemá být. Proč bolest neodpovídá rozsahu nálezu a co to znamená pro IVF.',
    minutes: 8,
    phases: ['diagnostics'],
    topics: ['vysledky', 'hormony', 'klinika'],
    level: 'essential',
    hero: 'blush',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Endometrióza je stav, kdy se tkáň podobná děložní sliznici nachází mimo dutinu děložní. Na pobřišnici, na vaječnících, mezi dělohou a konečníkem, méně často jinde. Tato tkáň reaguje na hormonální změny cyklu, dráždí okolí a může vyvolávat zánětlivou reakci, srůsty a jizvení.

Formy se hodně liší. Povrchová ložiska na pobřišnici, cysty na vaječníku naplněné starou krví (endometriomy) a hluboká infiltrující endometrióza zasahující do stěny orgánů jsou tři velmi odlišné situace, i když nesou stejný název.

Jedna z nejnepříjemnějších vlastností endometriózy: **rozsah nálezu a míra bolesti spolu často nesouvisí**. Žena s rozsáhlým nálezem může mít mírné potíže a žena s drobným nálezem může mít bolest, která jí bere měsíc v roce.

Cesta k diagnóze bývá dlouhá. Bolestivá menstruace se dlouho podceňuje jako „normální". Není normální, když vám bolest brání v běžném fungování.

## Jak to může souviset s plodností

Souvislostí je několik a u každé ženy hraje roli jiná kombinace:

- **Anatomie.** Srůsty mohou měnit vzájemnou polohu vaječníků a vejcovodů a ztěžovat zachycení vajíčka.
- **Prostředí v pánvi.** Chronická zánětlivá reakce může nepříznivě ovlivňovat spermie, vajíčko i časný vývoj embrya.
- **Vaječníky.** Endometriomy a jejich chirurgické odstranění mohou snižovat ovariální rezervu. Proto se o operaci vaječníku u ženy, která plánuje těhotenství, vždy rozhoduje individuálně.
- **Děloha.** U některých žen, zvlášť při současné adenomyóze, se diskutuje o vlivu na vnímavost sliznice. Důkazy jsou v tomto bodě nejednotné.

Zároveň platí, že endometrióza neplodnost nezaručuje. Část žen s endometriózou otěhotní bez jakékoli léčby.

## Jak se to vyšetřuje

- **Podrobná anamnéza bolesti.** Kdy bolí, jak dlouho, jestli bolí i mimo menstruaci, při styku, při stolici, při močení. Tohle je diagnosticky cennější, než se čeká.
- **Gynekologické vyšetření a ultrazvuk.** Zkušené pracoviště dnes zachytí ultrazvukem endometriomy i řadu známek hluboké endometriózy. Povrchová ložiska ultrazvukem vidět nejsou.
- **Magnetická rezonance.** Může být zvažována u podezření na hlubokou formu, hlavně před plánováním operace.
- **Laparoskopie.** Přímý pohled do dutiny břišní. Dřív první krok, dnes se indikuje uváženě, hlavně tam, kde je zároveň léčebný záměr.

Neexistuje krevní test, který by endometriózu spolehlivě potvrdil nebo vyloučil. Pokud vám někdo takový test nabízí jako jistotu, ptejte se dál.

## Jak to může souviset s IVF cestou

IVF u endometriózy obchází část problému. Vajíčko se odebírá přímo z folikulu a oplození probíhá v laboratoři, takže vejcovody a prostředí v pánvi z rovnice odpadají. To je hlavní důvod, proč se k IVF u této diagnózy přistupuje.

Praktické body, které se často řeší:

- **Odběr vajíček** může být při srůstech technicky náročnější. Vaše klinika s tím počítá a plánuje podle konkrétního nálezu.
- **Reakce na stimulaci** může být nižší, hlavně po předchozích operacích vaječníků.
- **Předléčba** hormonální supresí před transferem může být u některých žen zvažována. Postupy se mezi pracovišti liší a přínos není u všech situací stejně doložený. Proberte to se svou klinikou.
- **Operace před IVF** není automatickým krokem. Někdy pomůže, jindy stojí kus ovariální rezervy. Rozhodnutí je vždy individuální.
- Jeden IVF cyklus může vést k víc transferům. Zamrazená embrya ze stejného odběru se přenášejí v dalších cyklech, což u endometriózy dává prostor sliznici i vaječníkům odpočinout.

## Na co se zeptat lékaře

- Jakou formu a jaký rozsah endometriózy u mě popisujete?
- Mám endometriomy, a pokud ano, jak velké a na kterém vaječníku?
- Doporučujete operaci před IVF? Co konkrétně by mi měla přinést a co mě může stát?
- Jak se můj nález promítne do plánu odběru vajíček?
- Jaká je moje ovariální rezerva a měřili jste ji před případnou operací?
- Zvažujete u mě předléčbu před transferem, a na základě čeho?
- Kdo mi bude řešit bolest během léčby a co na ni můžu brát?
- Kolik zkušeností má vaše pracoviště s odběrem u nálezu, jako je můj?

> Náhlá prudká bolest v podbřišku, horečka nebo mdloby nepatří k obvyklému průběhu endometriózy. Vyhledejte akutní lékařskou pomoc.`,
  },
  {
    id: 'dg-adenomyoza',
    kind: 'article',
    title: 'Adenomyóza',
    excerpt:
      'Sliznice prorůstá do svaloviny dělohy. Často se plete s myomy a často zůstává dlouho nerozpoznaná.',
    minutes: 7,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'taupe',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Adenomyóza je stav, kdy tkáň podobná děložní sliznici proniká do svalové stěny dělohy. Svalovina na to reaguje. Ztlušťuje se, hůř se stahuje a děloha bývá celkově větší a citlivější.

Existuje ve dvou hrubých podobách: **difuzní**, kdy je postižená větší část stěny, a **ložisková**, kdy je změna ohraničená a na ultrazvuku může připomínat myom. Rozlišení není akademické. Má vliv na to, co se dá řešit a jak.

Typické projevy jsou silná a bolestivá menstruace, tlak v podbřišku, někdy špinění před menstruací. U části žen ale adenomyóza výrazné příznaky nedělá a najde se náhodou.

Často se vyskytuje spolu s endometriózou. Nejde ale o totéž a nedá se předpokládat jedno z druhého.

## Jak to může souviset s plodností

Souvislost je pravděpodobná, ale ne tak přímočará, jak by se chtělo. Zvažuje se několik mechanismů:

- změněná stavba přechodové zóny mezi sliznicí a svalovinou, která hraje roli při zahnízdění,
- odlišný pohyb děložní svaloviny během cyklu,
- lokální zánětlivé prostředí, které může ovlivňovat vnímavost sliznice.

Studie naznačují, že rozsáhlejší adenomyóza může být spojena s nižší pravděpodobností zahnízdění a vyšším rizikem těhotenské ztráty. Data ale nejsou jednotná a řada prací má omezenou výpovědní hodnotu. Nedá se z toho udělat věta „s adenomyózou to nejde", protože to jít může, a jde.

## Jak se to vyšetřuje

- **Ultrazvuk pochvou.** Základ. Zkušený vyšetřující popisuje ztluštění stěny, asymetrii přední a zadní stěny, drobné cystické prostory ve svalovině a nepravidelnost přechodové zóny.
- **Magnetická rezonance.** Může být zvažována tam, kde je ultrazvukový nález nejasný nebo kde se plánuje výkon a je potřeba přesná mapa.
- **Anamnéza.** Popis menstruace a bolesti dává nálezu kontext.

Definitivní potvrzení z tkáně by znamenalo odebrat vzorek děložní stěny, což se u ženy plánující těhotenství nedělá. Diagnóza je proto zobrazovací a záleží na zkušenosti pracoviště.

## Jak to může souviset s IVF cestou

Adenomyóza se týká hlavně dělohy, ne vaječníků. Odběr vajíček a laboratorní část cyklu tím obvykle nejsou dotčené. Otázka se soustředí na transfer.

Co se v praxi řeší:

- **Načasování transferu.** U některých žen se volí zamrazení embryí a odložený kryotransfer, aby se sliznice připravovala v klidnějším cyklu.
- **Hormonální předléčba** před transferem může být u výraznějších nálezů zvažována. Přínos není u všech situací stejně doložený a postupy se mezi pracovišti liší.
- **Chirurgické řešení** je u difuzní formy obtížné a u ženy plánující těhotenství se zvažuje velmi opatrně, protože zasahuje do stěny dělohy.
- **Průběh těhotenství.** U adenomyózy se popisuje vyšší riziko některých komplikací. Sledování v těhotenství proto patří do rukou gynekologa, který o nálezu ví.
- Jeden IVF cyklus u vás může znamenat víc transferů. Když první nevyjde, není to důkaz, že za to může adenomyóza. A stejně tak to není důvod na ni zapomenout.

## Na co se zeptat lékaře

- Jak rozsáhlý je můj nález a jde o difuzní, nebo ložiskovou formu?
- Jak jistá je ta diagnóza a stačí ultrazvuk, nebo doporučujete magnetickou rezonanci?
- Mám současně i endometriózu, nebo jste ji vyloučili?
- Doporučujete u mě odložený kryotransfer místo čerstvého? Proč?
- Zvažujete nějakou předléčbu před transferem a jaký pro ni máte důvod?
- Co konkrétně to znamená pro riziko v případném těhotenství a kdo mě bude sledovat?
- Jak budete postupovat, pokud se transfer nezdaří?

> Silné krvácení, při kterém prosakujete vložku nebo tampon každou hodinu několik hodin po sobě, nebo krvácení provázené slabostí a závratěmi vyžaduje akutní lékařskou pomoc.`,
  },
  {
    id: 'dg-myomy',
    kind: 'article',
    title: 'Děložní myomy',
    excerpt:
      'Nezhoubné útvary ze svaloviny dělohy. Rozhodující není jejich počet, ale to, kde přesně jsou.',
    minutes: 7,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'sand',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Myom je nezhoubný útvar, který vyrůstá ze svaloviny dělohy. Je to jeden z nejčastějších nálezů v gynekologii. Velká část žen ho někdy během života má, často aniž by o tom věděla.

Myomy se dělí podle uložení a právě tohle rozdělení je klíčové:

- **Submukózní**: vyklenují se do dutiny děložní. Nejmenší, ale z hlediska plodnosti nejvýznamnější.
- **Intramurální**: uložené ve stěně. Význam závisí na velikosti a na tom, jestli deformují dutinu.
- **Subserózní**: rostou navenek, do dutiny břišní. Na dutinu děložní obvykle nemají vliv.

Velikost sama o sobě není hlavní údaj. Drobný submukózní myom může mít větší dopad než velký subserózní.

## Jak to může souviset s plodností

Myom, který deformuje dutinu děložní, může narušovat prostředí pro zahnízdění embrya a bývá spojován s vyšším rizikem těhotenské ztráty. U tohohle typu je souvislost nejlépe doložená.

U myomů, které dutinu nedeformují, je situace nejednoznačná. Větší nálezy mohou hrát roli, u menších to doložené není. Nedá se tedy říct, že každý myom brání otěhotnění. U velké části žen s myomem těhotenství proběhne bez potíží.

Vedle vlivu na zahnízdění se řeší i praktické věci: silné krvácení a chudokrevnost, tlakové potíže nebo bolest.

## Jak se to vyšetřuje

- **Ultrazvuk pochvou.** Základní vyšetření. Popíše počet, velikost a uložení.
- **Sonohysterografie.** Ultrazvuk s tekutinou zavedenou do dutiny děložní, který zpřesní, jestli myom do dutiny zasahuje.
- **Hysteroskopie.** Přímý pohled do dutiny děložní tenkým optickým nástrojem. Zároveň umožňuje submukózní myom odstranit.
- **Magnetická rezonance.** Může být zvažována u mnohočetných nebo objemných nálezů, hlavně před plánováním operace.

Zpráva, kde je napsáno jen „myom 3 cm", je pro rozhodování málo. Ptejte se na uložení a na vztah k dutině.

## Jak to může souviset s IVF cestou

Před IVF se obvykle řeší jediná otázka: má se myom odstranit dřív, než se přenese embryo?

Co do rozhodování vstupuje:

- **Submukózní myom** se před transferem obvykle odstraňuje hysteroskopicky. Zákrok je poměrně šetrný a nezasahuje do stěny dělohy zvenčí.
- **Intramurální myom** deformující dutinu se posuzuje individuálně. Operace přes břicho znamená jizvu ve stěně dělohy a několikaměsíční odklad těhotenství. To se musí vážit proti očekávanému přínosu.
- **Subserózní myom** se před IVF obvykle neřeší, pokud nedělá jiné potíže.
- Po operaci stěny dělohy se stanovuje odstup, kdy se smí zkoušet znovu, a v těhotenství se pak bere ohled na jizvu.
- Odběr vajíček může být při velkých myomech technicky náročnější a klinika s tím dopředu počítá.
- Zamrazená embrya z jednoho cyklu vydrží. Když se rozhodnete pro operaci, embrya na vás počkají a transferů může být z jednoho cyklu víc.

## Na co se zeptat lékaře

- Kolik myomů mám, jak jsou velké a kde přesně jsou uložené?
- Zasahuje některý z nich do dutiny děložní nebo ji deformuje?
- Doporučujete odstranění před transferem? Co konkrétně si od toho slibujete?
- Jaký typ operace by to byl a jak dlouho bych po ní musela čekat, než můžeme pokračovat?
- Jak by případná jizva na děloze ovlivnila těhotenství a porod?
- Co se stane, když myom neřešíme a půjdeme rovnou do transferu?
- Jak rychle myomy u mě rostou a jak často je budete kontrolovat?

> Náhlá silná bolest v podbřišku, horečka nebo výrazné krvácení mimo menstruaci vyžadují kontakt s lékařem, u prudké bolesti akutní lékařskou pomoc.`,
  },
  {
    id: 'dg-delozni-polypy',
    kind: 'article',
    title: 'Děložní polypy',
    excerpt:
      'Drobný výrůstek ve sliznici, který se dá často vyřešit krátkým zákrokem. Proč se před transferem obvykle odstraňuje.',
    minutes: 6,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'linen',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Polyp děložní sliznice je výrůstek, který vyrůstá ze sliznice do dutiny děložní. Je obvykle nezhoubný, měří od několika milimetrů po několik centimetrů a může být jeden nebo jich je víc.

Někdy nedělá vůbec nic a najde se náhodou při ultrazvuku. Jindy se projeví špiněním mezi menstruacemi, špiněním po styku nebo silnějším krvácením.

Polypy jsou častější s přibývajícím věkem a při stavech spojených s vyšší hladinou estrogenů. Vzácně se v polypu najde přednádorová nebo nádorová změna, proto se odebraná tkáň vždy posílá na histologické vyšetření.

Polyp není totéž co myom, i když se na ultrazvuku občas plete. Myom vyrůstá ze svaloviny dělohy, polyp ze sliznice. Liší se stavbou, chováním i tím, jak se odstraňují.

## Jak to může souviset s plodností

Polyp zabírá místo v dutině děložní a mění lokální prostředí sliznice. Zvažuje se, že může mechanicky překážet zahnízdění embrya a působit chronické dráždění sliznice.

Práce, které sledovaly ženy po odstranění polypu, naznačují lepší výsledky léčby neplodnosti. Kvalita dat není u všech studií vysoká, ale zákrok je natolik jednoduchý a přínos natolik pravděpodobný, že se odstranění před transferem běžně doporučuje.

Nedá se z toho ale udělat věta, že polyp je příčinou vaší neplodnosti. Polypy se najdou i u žen, které otěhotní bez potíží. Jde o překážku, kterou má smysl odstranit, ne o vysvětlení všeho.

Není to ale automatické pravidlo pro každou ženu a každý nález. O tom, jestli se drobný polyp bude řešit, rozhoduje lékař podle celkového obrazu.

## Jak se to vyšetřuje

- **Ultrazvuk pochvou**, ideálně v první polovině cyklu, kdy je sliznice tenká a polyp je proti ní lépe vidět.
- **Sonohysterografie**: ultrazvuk s tekutinou v dutině, která polyp zvýrazní.
- **Hysteroskopie**: přímý pohled do dutiny. Nejspolehlivější metoda a zároveň způsob, jak polyp odstranit.
- **Histologie** odebrané tkáně, která potvrdí povahu nálezu.

Polyp popsaný jen na ultrazvuku není vždy polyp. Může jít o zbytek sliznice, sraženinu nebo submukózní myom. Proto se nález před zákrokem obvykle ověřuje.

## Jak to může souviset s IVF cestou

Odstranění polypu je krátký zákrok, obvykle hysteroskopický, často v krátké anestezii a s návratem domů týž den. Po výkonu se běžně čeká jeden až několik cyklů, než se přenese embryo. Přesný odstup určí vaše klinika.

Praktické souvislosti:

- Polyp objevený **před stimulací** se obvykle řeší dřív, než se cyklus rozjede.
- Polyp objevený **během stimulace** může vést k rozhodnutí embrya zamrazit a transfer odložit. Není to ztráta cyklu. Embrya zůstávají a jeden cyklus může vyústit ve víc transferů.
- Polypy se mohou vracet. Pokud vám před dalším kryotransferem lékař navrhne kontrolní ultrazvuk, má to důvod.
- Po zákroku je krátce běžné slabé špinění a mírné křeče.

## Na co se zeptat lékaře

- Jak velký je můj polyp a kde v dutině je uložený?
- Jak jistý ten nález je a doporučujete ho před zákrokem ověřit?
- Doporučujete odstranění před transferem, nebo se dá pokračovat bez něj?
- Jak zákrok probíhá, bude anestezie a kdy půjdu domů?
- Za jak dlouho po zákroku můžeme plánovat transfer?
- Kdy a jak se dozvím výsledek histologie?
- Jaká je pravděpodobnost, že se polyp vrátí, a jak to budete kontrolovat?

> Silné krvácení, horečka nebo narůstající bolest po hysteroskopii nejsou obvyklé. Kontaktujte svou kliniku.`,
  },
  {
    id: 'dg-poruchy-ovulace',
    kind: 'article',
    title: 'Poruchy ovulace',
    excerpt:
      'Když vajíčko nedozrává nebo se neuvolňuje pravidelně. Příčin je víc a od nich se odvíjí i řešení.',
    minutes: 7,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'deep',
    hero: 'dawn',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Ovulace je uvolnění zralého vajíčka z folikulu. Aby proběhla, musí spolu ladit mozek (hypotalamus a hypofýza) a vaječník. Porucha ovulace znamená, že tenhle řetězec někde vázne. Vajíčko nedozraje, neuvolní se, nebo se to děje jen občas a nepředvídatelně.

Příčiny se obvykle třídí do několika skupin:

- **Porucha na úrovni mozku.** Signál z hypotalamu a hypofýzy je utlumený. Bývá spojena s výrazným úbytkem hmotnosti, velmi nízkým podílem tuku, intenzivní sportovní zátěží nebo dlouhodobým stresovým přetížením.
- **Porucha na úrovni vaječníku a hormonální rovnováhy.** Sem patří například PCOS, nejčastější příčina nepravidelné ovulace.
- **Selhávání vaječníků.** Zásoba folikulů je vyčerpaná nebo se vyčerpává předčasně.
- **Ostatní hormonální vlivy.** Zvýšený prolaktin, poruchy štítné žlázy, některé stavy nadledvin nebo užívané léky.

Nepravidelný cyklus není diagnóza. Je to příznak, za kterým může stát kterákoli z těch skupin.

## Jak to může souviset s plodností

Bez ovulace není vajíčko, které by mohlo být oplozeno. Pokud ovulace přichází jen občas, klesá počet příležitostí za rok a plodné dny se nedají spolehlivě odhadnout.

U některých žen ovulace probíhá, ale druhá polovina cyklu je zkrácená nebo hormonálně slabší. Význam tohoto stavu je předmětem odborné diskuse a jeho posouzení patří lékaři.

Dobrá zpráva: poruchy ovulace patří mezi příčiny neplodnosti, které se často daří ovlivnit. U řady žen stačí odstranit příčinu nebo podpořit dozrání folikulu, aby cyklus začal fungovat.

## Jak se to vyšetřuje

- **Záznam cyklu.** Délka, pravidelnost, charakter krvácení. Několik měsíců záznamu má velkou cenu.
- **Progesteron** v druhé polovině cyklu. Pomáhá posoudit, jestli ovulace proběhla. Načasování odběru určí lékař podle délky vašeho cyklu.
- **Hormony na začátku cyklu**: FSH, LH, estradiol, AMH.
- **Prolaktin, TSH a hormony štítné žlázy**, případně androgeny a další vyšetření podle podezření.
- **Ultrazvukové sledování růstu folikulu** v průběhu cyklu.
- **Zhodnocení hmotnosti, stravování a zátěže.** U poruchy na úrovni mozku je tohle často jádro problému, ne doplněk.

Domácí ovulační testy měří vzestup LH. Ukážou, že se tělo k ovulaci chystá. Nepotvrdí, že proběhla. U PCOS mohou být navíc opakovaně pozitivní bez ovulace.

## Jak to může souviset s IVF cestou

Poruchy ovulace se často řeší dřív, než se vůbec mluví o IVF. Podle příčiny může být zvažována úprava hmotnosti a zátěže, léčba štítné žlázy nebo prolaktinu, případně indukce ovulace tabletami či injekcemi s pravidelným ultrazvukovým sledováním. Cíl bývá skromný a rozumný: jeden zralý folikul, ne co nejvíc.

K IVF se přechází, když tyhle kroky nevedou k cíli, když je přítomný ještě další faktor nebo když čas hraje roli.

Při IVF se ovulace neřeší časováním pohlavního styku, ale řízenou stimulací s kontrolou dozrání a odběrem vajíček. Právě proto IVF u některých poruch ovulace problém obchází. Neznamená to, že příčinu není potřeba znát. Ovlivňuje volbu protokolu i celkovou péči o vaše zdraví.

## Na co se zeptat lékaře

- Prokázali jste u mě, že ovulace probíhá, nebo neprobíhá? Podle čeho?
- Jakou příčinu poruchy u mě předpokládáte a co jste vyloučili?
- Máme vyšetřený prolaktin a štítnou žlázu?
- Má v mé situaci smysl nejdřív indukce ovulace? Kolik cyklů byste zkusili?
- Hraje u mě roli hmotnost, strava nebo sportovní zátěž? Co konkrétně bych měla změnit?
- Jak budete sledovat, jestli léčba zabírá?
- Kdy bychom podle vás měli přejít k inseminaci nebo k IVF?

> Úplné vymizení menstruace na několik měsíců, výrazný neplánovaný úbytek hmotnosti nebo výtok z prsou mimo těhotenství a kojení patří k lékaři. Objednejte se, nečekejte, jestli to samo přejde.`,
  },
  {
    id: 'dg-snizena-ovarialni-rezerva',
    kind: 'article',
    title: 'Snížená ovariální rezerva',
    excerpt:
      'AMH je odhad zásoby, ne rozsudek. Co čísla říkají, co neříkají a jak se s nimi pracuje při plánování IVF.',
    minutes: 8,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky', 'klinika'],
    level: 'essential',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Ovariální rezerva je zásoba folikulů, které ve vaječnících zbývají. Rodíme se s určitým počtem a ten se celý život snižuje. Nedá se doplnit ani obnovit. Snížená ovariální rezerva znamená, že je tato zásoba menší, než by odpovídalo věku.

Nejčastěji se posuzuje dvěma ukazateli:

- **AMH** (antimülleriánský hormon) z krve. Odráží počet drobných folikulů, které jsou ve hře.
- **AFC**: počet antrálních folikulů spočítaný ultrazvukem na začátku cyklu.

Někdy se doplňuje FSH a estradiol z počátku cyklu.

Příčinou může být věk, předchozí operace vaječníků, chemoterapie nebo ozařování, genetické dispozice, kouření nebo se příčina nenajde vůbec.

## Jak to může souviset s plodností

Tady je potřeba být přesná, protože kolem AMH koluje spousta nesmyslů.

**Co AMH říká:** kolik folikulů se pravděpodobně podaří získat při stimulaci. Je to nejlepší dostupný odhad reakce vaječníků a používá se k plánování dávek.

**Co AMH neříká:** jakou máte šanci otěhotnět tento měsíc. Nízké AMH u ženy, která má pravidelnou ovulaci, neznamená, že nemůže otěhotnět přirozeně. Vysoké AMH zase nezaručuje kvalitní vajíčka.

Kvalitu vajíček určuje především věk, ne hodnota AMH. Třicetiletá žena s nízkým AMH má obvykle vajíčka kvality odpovídající třiceti letům, jen jich je méně.

Nízké AMH ale bývá důvodem k tomu neodkládat. Ne kvůli panice, ale proto, že zásoba se nezvětšuje.

## Jak se to vyšetřuje

- **AMH z krve.** Dá se odebrat kdykoli v cyklu. Laboratoře používají různé metody a různé jednotky. Porovnávejte jen hodnoty ze stejné laboratoře a vždy s uvedenou jednotkou.
- **AFC ultrazvukem** na začátku cyklu. Závisí na zkušenosti vyšetřujícího a na kvalitě přístroje.
- **FSH a estradiol** 2. až 5. den cyklu.
- **Vyloučení jiných příčin** podle situace, například vyšetření štítné žlázy nebo genetické vyšetření tam, kde je nález nízký v mladém věku.

Jedna hodnota není příběh. Hormonální antikoncepce, některé stavy a laboratorní rozptyl mohou výsledek posunout. Pokud vás číslo zaskočilo, má smysl se zeptat na kontrolní odběr.

## Jak to může souviset s IVF cestou

Snížená rezerva mění taktiku, ne cíl.

- **Protokol stimulace** se volí tak, aby se z dostupných folikulů získalo co nejvíc zralých vajíček. Vyšší dávky nad určitou mez už výtěžek nezvyšují. Tělo nemá z čeho brát.
- **Počet odebraných vajíček** bývá nižší a s tím i počet embryí. Embrya se sledují od 1. do 6. dne vývoje a propad mezi jednotlivými dny je běžný u každé ženy, tady je ale citelnější, protože se počítá z menšího základu.
- **Víc odběrů** může být zvažováno s cílem shromáždit embrya postupně. Zda to má ve vaší situaci smysl, posoudí lékař.
- **Zrušení cyklu** před odběrem je při slabé reakci možnost, se kterou je lepší počítat dopředu, než ji zažít jako šok.
- **PGT** u malého počtu embryí není automaticky vhodné. Může se stát, že k transferu nezbude nic. Rozhodnutí je individuální.
- **Darovaná vajíčka** jsou téma, které se u výrazně snížené rezervy může otevřít. Otevřít ho neznamená rozhodnout o něm.
- Jeden cyklus může přinést víc transferů, pokud se podaří zamrazit víc embryí ze stejného odběru.

## Na co se zeptat lékaře

- Jaká je moje hodnota AMH, v jakých jednotkách a z jaké laboratoře?
- Kolik antrálních folikulů jste napočítali?
- Co ta čísla znamenají pro očekávaný počet vajíček při stimulaci?
- Jaký protokol u mě zvolíte a proč zrovna ten?
- Co uděláme, když bude reakce slabší, než čekáte? Kdy byste cyklus rušili?
- Má v mé situaci smysl plánovat víc odběrů za sebou?
- Doporučujete u mě PGT, nebo to při očekávaném počtu embryí nedává smysl?
- Kdy podle vás nastane chvíle, kdy bychom měli mluvit o dárcovských vajíčkách?

> Nízké AMH není diagnóza neplodnosti a nevypovídá o vašem zdraví jako celku. Je to jeden údaj z mnoha a jeho výklad patří lékaři, který zná vaši situaci.`,
  },
  {
    id: 'dg-predcasna-ovarialni-insuficience',
    kind: 'article',
    title: 'Předčasná ovariální insuficience (POI)',
    excerpt:
      'Vaječníky přestávají fungovat před čtyřicátým rokem. Diagnóza, která se týká plodnosti i celkového zdraví.',
    minutes: 8,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky', 'klinika'],
    level: 'deep',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Předčasná ovariální insuficience je stav, kdy vaječníky přestávají fungovat před 40. rokem věku. Projevuje se vynecháváním nebo úplným vymizením menstruace a laboratorně vysokým FSH při nízkém estradiolu. Obvykle se hodnoty ověřují opakovaným odběrem s odstupem několika týdnů.

Označení „předčasná menopauza" je zavádějící. U části žen činnost vaječníků kolísá a může se občas obnovit, včetně ojedinělé ovulace. Proto se dnes používá slovo insuficience, tedy nedostatečnost, ne selhání.

Příčin je několik a u velké části žen se žádná nenajde:

- **genetické**: například odchylky pohlavních chromozomů nebo předmutace genu FMR1,
- **autoimunitní**: vaječníky jsou napadeny vlastním imunitním systémem, často spolu s jiným autoimunitním onemocněním,
- **po léčbě**: chemoterapie, ozařování, opakované operace vaječníků,
- **neobjasněné**.

## Jak to může souviset s plodností

Zásoba folikulů je vyčerpaná nebo výrazně omezená a nedá se obnovit. Pravděpodobnost spontánního otěhotnění je nízká, ale u části žen s POI těhotenství nastane, právě proto, že činnost vaječníků může kolísat. To také znamená, že POI se nesmí zaměňovat za antikoncepci.

POI se ale netýká jen plodnosti. Nízké hladiny estrogenů mají dopad na kosti, cévy, spánek, náladu, sexualitu i kvalitu života. Proto je součástí péče obvykle hormonální substituce až do věku, kdy by přišla přirozená menopauza. O jejím nasazení a formě rozhoduje lékař.

Tohle je diagnóza, která je psychicky mimořádně těžká. Přijde často brzy, bez varování a mění představu o vlastním těle i o budoucnosti. Psychologická podpora sem patří stejně samozřejmě jako laboratorní kontroly.

## Jak se to vyšetřuje

- **FSH a estradiol** opakovaně, s odstupem, obvykle v kombinaci s posouzením menstruačního vzorce.
- **AMH** a **počet antrálních folikulů** ultrazvukem.
- **Karyotyp**: vyšetření chromozomů.
- **Vyšetření předmutace FMR1**, které má význam i pro širší rodinu.
- **Autoimunitní vyšetření**, typicky štítné žlázy a nadledvin.
- **Vyšetření kostní denzity** a metabolické parametry, protože jde o dlouhodobé zdraví.

Diagnóza se nikdy nestaví na jednom odběru. Pokud vám ji někdo sdělil po jediném výsledku, je namístě se zeptat na ověření.

## Jak to může souviset s IVF cestou

Stimulace vlastních vaječníků u POI často nevede k získání vajíček, protože není z čeho stimulovat. U žen s kolísající funkcí může být pokus zvažován, ale s realistickým očekáváním a jasně stanovenou hranicí, kdy se postup ukončí. Slibovat výsledek by tady bylo nefér.

Cestou, kterou lékaři nejčastěji otevírají, je **IVF s darovanými vajíčky**. Děloha u žen s POI obvykle funguje a při vhodné hormonální přípravě sliznice může nést těhotenství. Rozhodnutí o dárcovství je osobní a nikdo by vás do něj neměl tlačit tempem, které není vaše.

Praktické body:

- Příprava sliznice před kryotransferem probíhá hormonálně a vyžaduje přesné dodržování schématu.
- Z jednoho dárcovského cyklu může vzniknout víc embryí, a tedy víc transferů.
- Pokud POI teprve hrozí, například před onkologickou léčbou, má smysl mluvit o zamrazení vajíček nebo embryí dřív, než léčba začne.
- Souběžně s reprodukční péčí je potřeba řešit hormonální substituci a zdraví kostí. Tohle není vedlejší kolej.

## Na co se zeptat lékaře

- Na základě jakých odběrů a jak opakovaně jste diagnózu stanovili?
- Jakou příčinu jste hledali a co jste vyšetřili. Karyotyp, FMR1, autoimunitu?
- Znamená ten nález něco pro moje příbuzné, například pro sestru?
- Má v mé situaci smysl pokus o stimulaci vlastních vaječníků? S jakým očekáváním?
- Potřebuji hormonální substituci a jakou formu doporučujete?
- Jak se bude sledovat moje kostní denzita a kardiovaskulární zdraví?
- Musím používat antikoncepci, pokud těhotenství neplánuji právě teď?
- Kam mě můžete odkázat na psychologickou podporu?

> Pokud menstruace vynechává tři měsíce a víc a netýká se to těhotenství, objednejte se k lékaři. Nečekejte rok, jestli se to samo srovná.`,
  },
  {
    id: 'dg-stitna-zlaza',
    kind: 'article',
    title: 'Poruchy štítné žlázy a plodnost',
    excerpt:
      'Malý orgán s velkým dosahem. Proč se TSH kontroluje před IVF a co znamenají protilátky.',
    minutes: 7,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'deep',
    hero: 'sky',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Štítná žláza tvoří hormony, které řídí rychlost látkové výměny v celém těle. Její činnost ovládá hormon TSH z hypofýzy. A právě TSH je hodnota, kterou uvidíte na většině laboratorních zpráv.

Základní situace jsou dvě:

- **Snížená funkce (hypotyreóza).** Štítná žláza tvoří málo hormonů. Únava, zimomřivost, přibývání na váze, suchá kůže, zácpa, zpomalení. Nejčastější příčinou je autoimunitní zánět.
- **Zvýšená funkce (hypertyreóza).** Hormonů je nadbytek. Bušení srdce, hubnutí, nervozita, pocení, nespavost.

Zvláštní kapitolou jsou **protilátky proti štítné žláze**, nejčastěji anti-TPO. Mohou být zvýšené i tehdy, když je funkce zatím v normě. Znamenají, že imunitní systém tkáň napadá, a že se funkce může časem zhoršit.

## Jak to může souviset s plodností

Hormony štítné žlázy zasahují do řízení menstruačního cyklu. Neléčená porucha může být spojena s nepravidelnými cykly, poruchami ovulace a v případě zvýšeného prolaktinu i s dalšími hormonálními změnami.

V těhotenství jsou nároky na štítnou žlázu vyšší, hlavně v prvním trimestru, kdy je plod plně odkázán na mateřské hormony. Proto se před plánovaným těhotenstvím a před IVF funkce ověřuje a v těhotenství se opakovaně kontroluje.

U zvýšených protilátek anti-TPO se popisuje vyšší riziko těhotenské ztráty. Zda a komu v takové situaci nasazovat léčbu, když je funkce zatím normální, je předmětem odborné diskuse a data nejsou jednoznačná. Rozhodnutí patří lékaři, který zná celý váš obraz. Nedá se z toho udělat pravidlo pro každou ženu.

## Jak se to vyšetřuje

- **TSH**: základní ukazatel. Cílové rozmezí při plánování těhotenství a v těhotenství bývá užší než běžná laboratorní norma. Konkrétní cíl určí lékař.
- **Volný T4**, případně volný T3 podle situace.
- **Protilátky anti-TPO**, případně anti-Tg.
- **Ultrazvuk štítné žlázy** při podezření na strukturální změny nebo uzly.

Odběr se obvykle dělá ráno. Pokud už léky na štítnou žlázu užíváte, ptejte se, kdy je před odběrem vzít. Načasování ovlivňuje výsledek.

Jednu zvýšenou hodnotu TSH je obvykle namístě ověřit. Stres, akutní nemoc i některé léky s výsledkem hýbou.

## Jak to může souviset s IVF cestou

Vyšetření štítné žlázy patří ke standardní přípravě před IVF na většině pracovišť. Důvod je praktický: pokud je funkce mimo cílové rozmezí, dá se to obvykle upravit a je lepší to udělat před cyklem než během něj.

Co se v praxi řeší:

- **Úprava dávky** léků a kontrolní odběr s odstupem, obvykle po několika týdnech. Hormony se ustalují pomalu.
- **Zvýšená potřeba v těhotenství.** Po pozitivním výsledku hCG se dávka často upravuje a kontroly se zhušťují. Domluvte si dopředu, kdo to bude hlídat. Reprodukční klinika, endokrinolog, nebo gynekolog.
- **Stimulace a estradiol.** Vysoké hladiny estrogenů během stimulace mohou ovlivňovat nároky na štítnou žlázu. Proto kontrola po stimulaci není zbytečné píchání navíc.
- **Jód.** Doplňky s jódem berte jen po domluvě s lékařem. U některých stavů štítné žlázy nejsou vhodné.

## Na co se zeptat lékaře

- Jaká je moje hodnota TSH a jaké cílové rozmezí chcete, když plánuji těhotenství?
- Mám vyšetřené protilátky anti-TPO a co znamená jejich výsledek?
- Potřebuji léčbu, nebo jen sledování? Podle čeho se rozhodujete?
- Kdy mám lék užívat a jak dlouho před odběrem?
- Kdy budete kontrolovat hodnoty znovu. Před stimulací, po ní, po pozitivním hCG?
- Kdo bude moji štítnou žlázu vést v těhotenství?
- Můžu užívat doplňky s jódem nebo selenem, nebo je to u mě nevhodné?

> Prudké bušení srdce, výrazné hubnutí bez důvodu, silné třesy nebo naopak náhlá výrazná slabost a zmatenost patří k akutnímu lékařskému vyšetření, ne k čekání na plánovanou kontrolu.`,
  },
  {
    id: 'dg-inzulinova-rezistence',
    kind: 'article',
    title: 'Inzulinová rezistence',
    excerpt:
      'Buňky hůř reagují na inzulin a tělo ho tvoří víc. Co se tím může měnit v hormonální rovnováze.',
    minutes: 7,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'deep',
    hero: 'sage',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Inzulin je hormon, který dostává cukr z krve do buněk. Při inzulinové rezistenci na něj buňky reagují hůř, takže slinivka ho musí tvořit víc, aby dosáhla stejného účinku. Hladina cukru v krvi přitom může být ještě dlouho v pořádku. Tělo si to prostě kupuje za vyšší hladinu inzulinu.

Není to nemoc v úzkém slova smyslu, spíš metabolický stav. Může být přechodný, může být trvalý a může se s ním pojit vyšší riziko cukrovky 2. typu.

Souvisí s hmotností, s podílem břišního tuku, s pohybem, se spánkem a s genetickou dispozicí. Neplatí ale, že by se týkala jen žen s nadváhou. Potkat se s ní dá i při normální hmotnosti.

Často se objevuje spolu s PCOS. Nejsou to synonyma a jedno se nedá odvodit z druhého.

## Jak to může souviset s plodností

Vyšší hladina inzulinu může zasahovat do hormonální rovnováhy ve vaječnících. Podporuje tvorbu androgenů a snižuje bílkovinu SHBG, která androgeny váže. Výsledkem může být větší volná androgenní aktivita a narušené dozrávání folikulů. To se projeví nepravidelnou nebo chybějící ovulací.

Doložené je, že u žen s PCOS a nadváhou může snížení hmotnosti a úprava životního stylu vést k obnovení pravidelnějších cyklů. To je jedna z mála oblastí v léčbě neplodnosti, kde má vlastní úsilí měřitelný dopad. A je fér dodat, že je to úsilí dlouhodobé a náročné, ne třítýdenní dieta.

Naopak není doložené, že by se každý problém s plodností dal vysvětlit inzulinovou rezistencí nebo že by její léčba sama o sobě zvyšovala pravděpodobnost otěhotnění u každé ženy. Vždy záleží na individuální situaci.

## Jak se to vyšetřuje

- **Glykémie nalačno** a **glykovaný hemoglobin**.
- **Zátěžový test s glukózou (oGTT)**, často s měřením inzulinu v několika časech.
- **Inzulin nalačno** a výpočtové indexy z něj odvozené. Jejich výpovědní hodnota je omezená a samostatně se nepoužívají.
- **Lipidy**, jaterní testy, krevní tlak, obvod pasu, protože se hodnotí celkový metabolický obraz.
- U žen s podezřením na PCOS se přidávají hormonální odběry.

Test na inzulinovou rezistenci nabízený mimo lékařskou péči a interpretovaný bez kontextu je k ničemu. Hodnoty dávají smysl jen jako celek a jen v rukou lékaře.

## Jak to může souviset s IVF cestou

Úprava metabolického stavu se obvykle řeší **před** cyklem, ne během něj. Je to pomalá práce, která potřebuje týdny až měsíce.

Co se v praxi zvažuje:

- **Úprava stravování a pohybu.** Cílem není číslo na váze, ale stabilnější hladina cukru a inzulinu. Postupná změna funguje lépe než drastická.
- **Léky ovlivňující citlivost na inzulin** mohou být u některých žen zvažovány. Jejich přínos pro výsledky IVF není u všech situací stejně doložený a rozhodnutí patří lékaři.
- **Doplňky stravy** v této oblasti mají velmi různou úroveň důkazů a řada tvrzení v reklamě není podložená. Než něco začnete brát, proberte to se svou klinikou.
- **Průběh těhotenství.** Při inzulinové rezistenci bývá vyšší riziko těhotenské cukrovky. Sledování v těhotenství se tomu přizpůsobuje.
- Odklad cyklu kvůli metabolické přípravě je někdy rozumný, jindy ne. U ženy s klesající ovariální rezervou má čas svou cenu. Tenhle rozpor si zaslouží otevřený rozhovor s lékařem.

## Na co se zeptat lékaře

- Jaká vyšetření jste u mě udělali a co konkrétně z nich vyšlo?
- Mám inzulinovou rezistenci, nebo jen jednu hraniční hodnotu?
- Souvisí to u mě s PCOS, nebo jde o samostatný nález?
- Co konkrétně mám změnit ve stravě a v pohybu, a za jak dlouho se to má projevit?
- Doporučujete u mě léčbu ovlivňující citlivost na inzulin? Jaký pro to máte důvod?
- Má smysl odložit stimulaci kvůli metabolické přípravě, nebo v mém věku spíš neztrácet čas?
- Jak se to promítne do sledování v případném těhotenství?
- Můžete mě odkázat na nutričního terapeuta?

> Výrazná žízeň, časté močení, neplánované hubnutí nebo opakované mdloby patří k lékaři bez odkladu.`,
  },
  {
    id: 'dg-hydrosalpinx',
    kind: 'article',
    title: 'Hydrosalpinx',
    excerpt:
      'Vejcovod uzavřený a naplněný tekutinou. Jeden z mála nálezů, kde se před transferem obvykle jedná rozhodně.',
    minutes: 6,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'sky',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Hydrosalpinx je vejcovod, který je na konci uzavřený a naplněný tekutinou. Vzniká nejčastěji po prodělaném zánětu v pánvi, po infekci, po operaci v dutině břišní nebo v souvislosti s endometriózou a srůsty.

Může být na jedné straně nebo na obou. Někdy je zcela němý a najde se náhodou, jindy působí tlak nebo tahavou bolest v podbřišku.

Na ultrazvuku má typický vzhled protáhlého útvaru vedle dělohy. Popis „rozšířený vejcovod naplněný tekutinou" ve zprávě znamená právě tohle.

## Jak to může souviset s plodností

Dvěma způsoby a oba jsou podstatné.

**Mechanicky.** Uzavřený vejcovod nemůže zachytit vajíčko ani vést oplozené vajíčko do dělohy. Pokud jsou uzavřené oba, přirozené otěhotnění možné není.

**Chemicky.** Tekutina z hydrosalpingu může zatékat do dutiny děložní. Popisuje se, že může narušovat prostředí pro zahnízdění a mechanicky embryo vyplavovat. Tohle je hlavní důvod, proč se hydrosalpinx řeší i tehdy, když se otěhotnění plánuje cestou IVF, kde vejcovody k ničemu nepotřebujete.

Tohle je jedna z mála oblastí, kde jsou důkazy relativně přesvědčivé: u žen s hydrosalpingem popsaným na ultrazvuku bývají výsledky IVF horší a po chirurgickém ošetření vejcovodu se zlepšují. Přesto o postupu vždy rozhoduje lékař podle konkrétního nálezu.

## Jak se to vyšetřuje

- **Ultrazvuk pochvou.** Často stačí. Viditelný hydrosalpinx je právě ten nález, který má z hlediska IVF největší váhu.
- **HSG**: rentgenové vyšetření průchodnosti vejcovodů s kontrastní látkou.
- **HyFoSy**: ultrazvukové vyšetření průchodnosti s pěnovým kontrastem, bez rentgenového záření.
- **Laparoskopie.** Přímý pohled do dutiny břišní. Zároveň umožňuje ošetření.
- **Vyšetření na chlamydie**, protože prodělaná infekce je častou příčinou.

## Jak to může souviset s IVF cestou

IVF obchází vejcovody u odběru vajíček i u oplození, ale hydrosalpinx zasahuje do fáze transferu. Proto se před přenosem embrya obvykle řeší.

Možnosti, o kterých se rozhoduje individuálně:

- **Odstranění vejcovodu (salpingektomie)** laparoskopicky. Nejčastější řešení. Odstranění vejcovodu samo o sobě neznamená zásah do vaječníku, ale výkon v jeho blízkosti může u některých žen ovlivnit prokrvení. Proberte to se svou klinikou.
- **Přerušení vejcovodu** u jeho ústí do dělohy, pokud odstranění není technicky vhodné.
- **Uzavření vejcovodu ze strany dutiny děložní** je metoda, která může být zvažována ve vybraných situacích.

Praktické dopady:

- Po výkonu se stanovuje odstup, než se přenese embryo.
- Pokud už embrya máte zamrazená, zákrok cyklus neruší. Embrya počkají a jeden cyklus tak může vyústit ve víc transferů.
- Odstranění obou vejcovodů znamená, že přirozené otěhotnění už nebude možné. To je zásadní informace, kterou musíte dostat dopředu a v klidu.

## Na co se zeptat lékaře

- Je hydrosalpinx na jedné straně, nebo na obou, a jak velký je?
- Je viditelný na ultrazvuku, nebo jde jen o nález z vyšetření průchodnosti?
- Doporučujete výkon před transferem a jaký konkrétně?
- Co ten výkon udělá s mojí šancí na přirozené otěhotnění?
- Může zákrok ovlivnit prokrvení vaječníku a moji ovariální rezervu?
- Za jak dlouho po výkonu můžeme plánovat transfer?
- Vyšetřili jste mě na chlamydie, a má se léčit i partner?
- Co se stane, když výkon neuděláme a půjdeme rovnou do transferu?

> Horečka, prudká bolest v podbřišku nebo hnisavý výtok mohou znamenat akutní zánět. Kontaktujte svou kliniku, při prudké bolesti vyhledejte akutní lékařskou pomoc.`,
  },
  {
    id: 'dg-tubarni-faktor',
    kind: 'article',
    title: 'Tubární faktor: neprůchodné vejcovody',
    excerpt:
      'Cesta, po které se vajíčko potkává se spermií, je uzavřená nebo poškozená. Kdy pomůže operace a kdy rovnou IVF.',
    minutes: 7,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'pearl',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Tubární faktor je souhrnné označení pro situace, kdy vejcovody nemohou plnit svou roli. Vejcovod není trubka, kterou něco propadne. Je to aktivní orgán s jemnými řasinkami, který zachytává vajíčko, umožňuje setkání se spermií a transportuje oplozené vajíčko do dělohy.

Poškození může být:

- **úplná neprůchodnost** jednoho nebo obou vejcovodů,
- **částečné zúžení** nebo poškození vnitřní výstelky, kdy je vejcovod formálně průchodný, ale nefunkční,
- **srůsty v okolí**, které mění polohu vejcovodu vůči vaječníku,
- **hydrosalpinx**, tedy uzavřený vejcovod naplněný tekutinou.

Nejčastější příčiny jsou prodělaný zánět v pánvi (často po chlamydiové infekci, která může proběhnout bez příznaků), endometrióza, předchozí operace v dutině břišní, mimoděložní těhotenství nebo záměrné podvázání.

## Jak to může souviset s plodností

Pokud jsou oba vejcovody neprůchodné, přirozené otěhotnění možné není. Pokud je průchodný jeden, možné je, ale příležitostí je méně.

Zvláštní pozor si zaslouží vejcovod, který je průchodný, ale poškozený. Vnitřní výstelka s řasinkami je citlivá a nemusí se po zánětu obnovit. Takový vejcovod nese **vyšší riziko mimoděložního těhotenství**: a to je situace, která je zdravotně vážná.

Průchodnost tedy není totéž co funkčnost. Žádné dostupné vyšetření nedokáže funkci vejcovodu spolehlivě změřit; posuzuje se nepřímo.

## Jak se to vyšetřuje

- **HSG**: rentgen s kontrastní látkou zavedenou do dělohy. Ukáže tvar dutiny i průchodnost. Krátce nepříjemné, obvykle po antibiotické přípravě nebo krytí.
- **HyFoSy**: ultrazvukové vyšetření s pěnovým kontrastem. Bez rentgenového záření, dobře dostupné.
- **Laparoskopie s ověřením průchodnosti barvivem.** Nejpřesnější, ale invazivní. Indikuje se hlavně tam, kde se počítá i s ošetřením nálezu.
- **Ultrazvuk**: zachytí hydrosalpinx, běžnou neprůchodnost neukáže.
- **Vyšetření na chlamydie** u vás i u partnera.

## Jak to může souviset s IVF cestou

IVF je u tubárního faktoru metoda, která problém obchází zcela: vajíčko se odebírá přímo z folikulu, oplození probíhá v laboratoři a embryo se ukládá přímo do dělohy. Vejcovod není v žádném kroku potřeba.

Co se přesto řeší:

- **Hydrosalpinx** se před transferem obvykle ošetřuje, protože tekutina může zatékat do dutiny děložní.
- **Operace vejcovodu s cílem obnovit průchodnost** může být zvažována u mladších žen s omezeným poškozením. U rozsáhlého poškození bývá výtěžnost nízká a čas ztracený čekáním má svou cenu.
- **Riziko mimoděložního těhotenství** není při IVF nulové, i když je nízké. Právě proto se po pozitivním výsledku hCG sleduje vývoj hodnot a dělá se ultrazvuk.
- Jeden IVF cyklus může přinést víc embryí a tedy víc transferů. Když první nevyjde, další následuje z téže zásoby.

## Na co se zeptat lékaře

- Které vyšetření průchodnosti jste u mě udělali a co přesně ukázalo?
- Je neprůchodný jeden vejcovod, nebo oba, a v které části?
- Mám hydrosalpinx? Pokud ano, doporučujete výkon před transferem?
- Má v mé situaci smysl operace s cílem obnovit průchodnost, nebo jít rovnou do IVF?
- Jaké je u mě riziko mimoděložního těhotenství a jak ho budete sledovat?
- Byla jsem vyšetřena na chlamydie a má se léčit i partner?
- Pokud se rozhodneme pro odstranění vejcovodů, co to znamená do budoucna?

> Prudká jednostranná bolest v podbřišku, mdloby nebo bolest v rameni po pozitivním těhotenském testu mohou být příznaky mimoděložního těhotenství. Vyhledejte akutní lékařskou pomoc.`,
  },
  {
    id: 'dg-muzsky-faktor',
    kind: 'article',
    title: 'Mužský faktor',
    excerpt:
      'Zhruba v polovině párů se na obtížích podílí i mužská strana. Co se ve spermiogramu měří a co z toho plyne.',
    minutes: 8,
    phases: ['diagnostics'],
    topics: ['vysledky', 'embryologie', 'klinika'],
    level: 'essential',
    hero: 'taupe',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Mužský faktor znamená, že se na obtížích s otěhotněním podílí kvalita nebo množství spermií. Podle dostupných dat se mužská strana podílí zhruba u poloviny párů. Buď samostatně, nebo spolu s faktorem na ženské straně.

Nejde o jednu diagnózu, ale o skupinu nálezů:

- **snížený počet spermií** v ejakulátu,
- **snížená pohyblivost**,
- **odchylky tvaru**,
- **žádné spermie v ejakulátu (azoospermie)**: což ale neznamená, že se spermie netvoří vůbec,
- **zvýšená fragmentace DNA** spermií.

Příčiny bývají různé: varikokéla, prodělané infekce, hormonální poruchy, genetické příčiny, stavy po operacích nebo po onkologické léčbě, některé léky, kouření, přehřívání varlat, obezita. U části mužů se příčina nenajde.

Důležitý technický fakt: tvorba spermií trvá zhruba tři měsíce. Cokoli, co se dnes změní, se ve výsledku projeví až za čtvrt roku.

## Jak to může souviset s plodností

Menší počet nebo horší pohyblivost snižuje pravděpodobnost, že spermie dorazí a pronikne k vajíčku. To ale neznamená automatickou neplodnost. Spousta mužů s hraničním nálezem počne přirozeně.

Naopak výborný spermiogram nezaručuje nic. Hodnotí se v něm to, co se dá spočítat a změřit, nikoli schopnost konkrétní spermie vytvořit životaschopné embryo.

Zvláštní téma je **fragmentace DNA spermií**. Bývá spojována s horším vývojem embryí a vyšším rizikem těhotenské ztráty. Vyšetření není součástí základní diagnostiky u každého páru a jeho výpovědní hodnota i praktický dopad jsou předmětem odborné diskuse. Zda má ve vaší situaci smysl, posoudí lékař.

A ještě jedna věc, která se často přehlíží: pro muže bývá tahle diagnóza psychicky těžká a mluví se o ní málo. Vyšetření u androloga nebo urologa není formalita, kterou se odškrtne kolonka. Je to plnohodnotná část péče o pár.

## Jak se to vyšetřuje

- **Spermiogram.** Základ. Hodnotí objem, počet, pohyblivost, tvar a další parametry. Provádí se po doporučené době pohlavní abstinence, kterou určí laboratoř. Jeden výsledek nestačí. Hodnoty přirozeně kolísají, proto se obvykle opakuje s odstupem.
- **Vyšetření u androloga nebo urologa** včetně fyzikálního vyšetření a ultrazvuku šourku.
- **Hormonální vyšetření**: FSH, LH, testosteron, prolaktin podle situace.
- **Genetické vyšetření** (karyotyp a mikrodelece chromozomu Y) může být zvažováno při velmi nízkém počtu spermií nebo při azoospermii.
- **Mikrobiologické vyšetření** při podezření na infekci.
- **Test fragmentace DNA** ve vybraných situacích.

Zpráva plná zkratek nemá cenu bez výkladu. Trvejte na tom, aby vám ji někdo vysvětlil.

## Jak to může souviset s IVF cestou

Volba metody v laboratoři se odvíjí právě od nálezu.

- **Klasické IVF**, kde se vajíčko a spermie nechají potkat v misce, se používá při dostatečném počtu pohyblivých spermií.
- **ICSI**, kdy embryolog vpraví jednu vybranou spermii přímo do vajíčka, se používá při výraznějším mužském faktoru. U párů bez mužského faktoru není doloženo, že by ICSI samo o sobě zlepšovalo výsledky, proto se nepoužívá plošně.
- **Chirurgické získání spermií z varlete nebo nadvarlete** může být zvažováno u azoospermie. Zda a jakou metodou, určí urolog.
- **Zamrazení vzorku předem** je praktické opatření pro případ, že se v den odběru vajíček vzorek nepodaří získat. Ptejte se na to dřív než ráno v den odběru.
- Embrya se sledují od 1. do 6. dne vývoje. Vliv mužského faktoru se někdy projeví až v pozdějších dnech kultivace.
- Jeden cyklus může vést k víc transferům z téže zásoby embryí.

## Na co se zeptat lékaře

- Jaké přesně byly hodnoty ve spermiogramu a jak se liší od referenčního rozmezí?
- Kolik spermiogramů jsme udělali a s jakým odstupem?
- Byl partner vyšetřen andrologem nebo urologem, nebo jen odevzdal vzorek?
- Doporučujete hormonální nebo genetické vyšetření a proč?
- Má v naší situaci smysl test fragmentace DNA?
- Plánujete klasické IVF, nebo ICSI? Na základě čeho jste se rozhodli?
- Dá se něco udělat pro zlepšení nálezu a za jak dlouho by se to projevilo?
- Můžeme vzorek zamrazit předem pro případ potíží v den odběru?

> Bolest, otok nebo zarudnutí šourku, horečka nebo krev v ejakulátu patří k akutnímu urologickému vyšetření.`,
  },
  {
    id: 'dg-varikokela',
    kind: 'article',
    title: 'Varikokéla',
    excerpt:
      'Rozšířené žíly v šourku. Častý nález, jehož význam pro plodnost je nutné posuzovat individuálně.',
    minutes: 6,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'champagne',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Varikokéla je rozšíření žil pleteně, která odvádí krev z varlete. Zjednodušeně: krev se v žilách hromadí a hůř odtéká. Nález bývá častější vlevo, což souvisí s anatomií žilního odtoku na této straně.

Je poměrně častá i u mužů bez jakýchkoli potíží s plodností. U mužů vyšetřovaných pro obtíže s početím se popisuje častěji.

Projevy bývají mírné nebo žádné. Někdy tahavý pocit v šourku, který se zhoršuje během dne, po delším stání nebo po zátěži. Hmatný nález se popisuje jako „pytel žížal", což je nepříjemné přirovnání, ale výstižné.

Varikokéla se stupňuje podle toho, jak je nápadná. Od nálezu patrného jen na ultrazvuku po nález viditelný pouhým okem.

## Jak to může souviset s plodností

Předpokládá se, že zhoršený odtok krve zvyšuje teplotu ve varleti a mění lokální prostředí. Tvorba spermií je na teplotě citlivě závislá, což je mimochodem důvod, proč jsou varlata umístěná mimo tělo.

U části mužů s varikokélou se popisuje horší spermiogram nebo vyšší fragmentace DNA spermií. U jiných je spermiogram zcela v pořádku a varikokéla nikdy nic neudělá.

**Tady je potřeba být upřímná:** vztah mezi varikokélou a plodností není jednoduchý a data o přínosu operace nejsou jednotná. Zlepšení parametrů spermiogramu po zákroku bývá popisováno častěji než jednoznačné zlepšení pravděpodobnosti otěhotnění, zvlášť u párů, kteří stejně půjdou cestou IVF s ICSI. Rozhodnutí je proto vždy individuální a patří urologovi, který zná celý obraz páru.

## Jak se to vyšetřuje

- **Fyzikální vyšetření urologem nebo andrologem**, ve stoje i vleže, s takzvaným tlakovým manévrem.
- **Ultrazvuk šourku s dopplerovským vyšetřením**, které ukáže zpětný tok krve v žilách.
- **Spermiogram**, opakovaně, protože právě on je hlavním důvodem, proč se varikokéla u neplodnosti vůbec řeší.
- **Hormonální vyšetření** podle situace.

Varikokéla nalezená náhodou u muže s normálním spermiogramem a bez potíží obvykle není důvod k zákroku.

## Jak to může souviset s IVF cestou

Rozhodování se točí kolem jedné otázky: má operace odložit IVF, nebo ne?

Co do rozhodnutí vstupuje:

- **Věk ženy a její ovariální rezerva.** Po zákroku se na případné zlepšení spermiogramu čeká zhruba tři až šest měsíců, protože tvorba spermií trvá kolem tří měsíců. U ženy s klesající rezervou je půl roku citelná cena.
- **Závažnost mužského nálezu.** U velmi nízkého počtu spermií se posuzuje jinak než u hraničního nálezu.
- **Zvolená laboratorní metoda.** Při ICSI stačí velmi malý počet spermií, takže význam zlepšení parametrů může být menší.
- **Potíže muže.** Pokud varikokéla bolí, je to samostatný důvod k řešení bez ohledu na plodnost.

Zákrok se provádí několika technikami, ambulantně nebo s krátkou hospitalizací. Konkrétní postup i rekonvalescenci vysvětlí urolog.

## Na co se zeptat lékaře

- Jaký stupeň varikokély u mého partnera popisujete a na které straně?
- Odpovídá nález tomu, co vidíme ve spermiogramu?
- Co konkrétně by operace měla zlepšit a s jakou pravděpodobností?
- Jak dlouho po zákroku bychom museli čekat, než se to projeví?
- Dává to smysl vzhledem k mému věku a mé ovariální rezervě?
- Změnil by se náš postup, když stejně plánujeme ICSI?
- Jaká jsou rizika a možné komplikace zákroku?
- Existuje varianta, kdy IVF neodkládáme a zákrok řešíme souběžně?

> Náhlá prudká bolest varlete, otok a zarudnutí mohou znamenat torzi varlete. Vyhledejte akutní lékařskou pomoc, tenhle stav se počítá na hodiny.`,
  },
  {
    id: 'dg-geneticke-poruchy',
    kind: 'article',
    title: 'Genetické poruchy a chromozomové přestavby',
    excerpt:
      'Když se v karyotypu najde přestavba nebo v rodině dědičná zátěž. Co to znamená pro embrya a pro plánování.',
    minutes: 8,
    phases: ['diagnostics', 'genetic_testing'],
    topics: ['genetika', 'embryologie', 'vysledky'],
    level: 'deep',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Genetická informace je uložená ve 46 chromozomech, které tvoří 23 párů. Odchylky se týkají buď **počtu** chromozomů, nebo jejich **stavby**.

Nejčastější typy, o kterých se v reprodukční medicíně mluví:

- **Vyvážená chromozomová přestavba.** Část jednoho chromozomu je přemístěná na jiný, ale genetického materiálu není víc ani míň. Nositel je obvykle zcela zdravý a o přestavbě neví. Projeví se až při tvorbě vajíček nebo spermií, kdy se materiál rozděluje nerovnoměrně.
- **Robertsonova translokace.** Zvláštní typ spojení dvou chromozomů, u kterého platí totéž.
- **Odchylky pohlavních chromozomů**, například Turnerův syndrom u žen nebo Klinefelterův syndrom u mužů.
- **Mikrodelece chromozomu Y** u mužů, spojené s poruchou tvorby spermií.
- **Monogenní onemocnění**: cystická fibróza, spinální svalová atrofie a další, kde jsou oba rodiče často zdraví přenašeči.
- **Předmutace genu FMR1**, která u žen souvisí s předčasným selháváním vaječníků.

## Jak to může souviset s plodností

Většina odchylek se neprojeví tím, že by k početí nedošlo, ale tím, že se **embryo nezahnízdí nebo se těhotenství zastaví**. Významná část časných těhotenských ztrát souvisí s náhodnou chromozomovou odchylkou embrya. To platí i u zdravých párů bez jakékoli zátěže a s věkem ženy podíl těchto odchylek roste.

U nositele vyvážené přestavby je situace jiná: vzniká vyšší podíl embryí s nevyváženou genetickou výbavou. Neznamená to, že zdravé dítě není možné. Znamená to, že cesta k němu může být delší a provázená ztrátami.

Odchylky se také mohou projevit poruchou tvorby vajíček nebo spermií, například u mikrodelecí chromozomu Y nebo u odchylek pohlavních chromozomů.

## Jak se to vyšetřuje

- **Karyotyp obou partnerů** z krve. Ukáže počet a hrubou stavbu chromozomů. Bývá indikován při opakovaných těhotenských ztrátách, při výrazném mužském faktoru nebo při podezření z rodinné anamnézy.
- **Mikrodelece chromozomu Y** u mužů s velmi nízkým počtem spermií.
- **Vyšetření přenašečství** vybraných onemocnění, například cystické fibrózy.
- **Genetická konzultace.** Klíčový krok, který se často přeskakuje. Klinický genetik projde rodinnou anamnézu, vysvětlí výsledky a řekne, co z nich plyne pro vás i pro příbuzné.
- **Genetické vyšetření tkáně** po těhotenské ztrátě, pokud byla tkáň odeslána a zpracována.

Sdělení výsledku genetického vyšetření patří do rukou genetika, ne do e-mailu bez komentáře. Pokud jste dostala nález bez výkladu, máte právo si konzultaci vyžádat.

## Jak to může souviset s IVF cestou

- **PGT** je vyšetření embryí před přenosem. Existuje v několika podobách podle toho, co se hledá. Počet chromozomů, konkrétní strukturní přestavba, nebo konkrétní dědičné onemocnění.
- Vzorek buněk se odebírá z embrya v určité fázi vývoje. Embrya se sledují od 1. do 6. dne a k vyšetření se dostanou jen ta, která dojdou dost daleko. Někdy se stane, že k vyšetření není co poslat.
- **PGT není vhodné pro každou ženu a pro každý pár.** U nositelů přestaveb a u některých dědičných onemocnění je jeho role jasná. Jako plošné vyšetření u všech párů zůstává předmětem odborné diskuse a data o přínosu nejsou jednotná. Rozhodnutí patří vám společně s lékařem a genetikem.
- Výsledky mohou být i **nejednoznačné**: u části embryí vyjde smíšený nález. Zeptejte se dopředu, jak s takovým výsledkem vaše pracoviště nakládá.
- Cyklus s PGT téměř vždy znamená zamrazení embryí a odložený kryotransfer, protože na výsledek se čeká. Z jednoho cyklu tak může vzniknout víc transferů.
- **Darovaná vajíčka nebo spermie** jsou možnost, která se u některých genetických situací může otevřít.

## Na co se zeptat lékaře

- Jaké genetické vyšetření jsme absolvovali a co přesně ukázalo?
- Byli jsme na konzultaci u klinického genetika? Pokud ne, můžete nás objednat?
- Co konkrétně náš nález znamená pro pravděpodobnost zdravého těhotenství?
- Znamená to něco pro naše sourozence nebo další příbuzné?
- Doporučujete PGT? Který typ a co konkrétně bude hledat?
- Kolik embryí obvykle projde do fáze, kdy se dá vyšetřit?
- Co se stane, když vyjde nejednoznačný výsledek?
- Jaké jsou další možnosti, pokud PGT nebude proveditelné?

> Genetický nález není ortel a nevypovídá o vaší hodnotě ani o tom, jestli budete rodiče. Vypovídá o pravděpodobnostech a o tom, jak se dá cesta naplánovat.`,
  },
  {
    id: 'dg-opakovane-tehotenske-ztraty',
    kind: 'article',
    title: 'Opakované těhotenské ztráty',
    excerpt:
      'Dvě a víc ztrát znamená, že má smysl hledat. Co se vyšetřuje, co se najde a co dělat s tím, že příčina často zůstane neznámá.',
    minutes: 9,
    phases: ['diagnostics', 'repeated_failure'],
    topics: ['vysledky', 'genetika', 'klinika'],
    level: 'deep',
    hero: 'blush',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Opakovanými těhotenskými ztrátami se obvykle rozumí dvě nebo víc ztrát těhotenství. Přesná definice se mezi odbornými společnostmi liší. Někde se počítají jen ztráty potvrzené ultrazvukem, jinde i biochemická těhotenství. Rozdíl není akademický: rozhoduje o tom, kdy se začne vyšetřovat.

Praktické pravidlo, které stojí za to znát: pokud máte za sebou dvě ztráty, máte důvod žádat o vyšetření. Nemusíte čekat na třetí.

Ztráta je ztráta i tehdy, když trvala tři týdny a věděli jste o ní jen vy dva. Nikdo nemá právo vám ji přepočítávat na to, jestli si zasloužila truchlení.

## Jak to může souviset s plodností

Významná část časných ztrát souvisí s **náhodnou chromozomovou odchylkou embrya**. Není to nic, co byste udělala nebo neudělala, a s věkem ženy podíl takových embryí přirozeně roste. Tohle bývá nejčastější vysvětlení a zároveň to nejtěžší k přijetí, protože se proti němu nedá nic dělat.

Další skupiny příčin, které se hledají:

- **Chromozomová přestavba** u jednoho z partnerů.
- **Anatomické odchylky dělohy**: přepážka v děloze, submukózní myom, polyp, srůsty v dutině.
- **Antifosfolipidový syndrom**: autoimunitní stav s doloženou souvislostí s těhotenskými ztrátami a s existující léčbou.
- **Poruchy štítné žlázy** a některé metabolické stavy.
- **Nedostatečně kompenzovaná cukrovka** nebo jiné celkové onemocnění.

U velké části párů se přes kompletní vyšetření **příčina nenajde**. To je frustrující, ale není to totéž jako beznaděj. Řada párů bez nalezené příčiny má následně těhotenství, které pokračuje.

## Jak se to vyšetřuje

Rozsah určí lékař, obvykle zahrnuje:

- **Karyotyp obou partnerů.**
- **Genetické vyšetření tkáně z proběhlé ztráty**, pokud byla tkáň odeslána. Má často největší výpovědní hodnotu a stojí za to se na možnost odeslání zeptat dopředu.
- **Zobrazení dutiny děložní**: ultrazvuk, sonohysterografie nebo hysteroskopie.
- **Antifosfolipidové protilátky**, obvykle opakovaně s odstupem podle doporučených postupů.
- **Vyšetření štítné žlázy** a glykémie.
- **Vyšetření trombofilie** může být zvažováno ve vybraných situacích. Jeho význam u opakovaných ztrát je předmětem odborné diskuse a plošné vyšetřování všech žen se běžně nedoporučuje.

Kolem opakovaných ztrát se pohybuje řada nabídek testů a léčebných postupů se slabou důkazní oporou. Než zaplatíte za vyšetření, které vám někdo nabízí mimo doporučené postupy, zeptejte se svého lékaře, co z výsledku prakticky vyplyne.

## Jak to může souviset s IVF cestou

Opakované ztráty se mohou týkat žen, které otěhotní přirozeně, i žen po IVF.

- **PGT** může být zvažováno tam, kde se opakovaně prokázala chromozomová odchylka embrya nebo kde je u páru přestavba. Neplatí, že by PGT bylo řešením pro každou ženu s opakovanými ztrátami. Data o přínosu v této indikaci nejsou jednotná.
- **Chirurgická úprava dutiny děložní** má smysl tam, kde je nález, který se dá řešit.
- **Léčba antifosfolipidového syndromu** patří k postupům s doloženým podkladem. Řídí se odborným doporučením, ne přáním.
- Jeden IVF cyklus může přinést víc embryí a tedy víc transferů. Neúspěšný transfer po ztrátě není důkaz, že to nepůjde, ani důvod k opuštění plánu. Je to informace, kterou má lékař zohlednit.
- **Sledování po pozitivním výsledku hCG** bývá u žen po opakovaných ztrátách intenzivnější. Domluvte si dopředu, kdo a jak často vás bude kontrolovat.

## Na co se zeptat lékaře

- Kolik ztrát u mě počítáte a podle jaké definice?
- Byla tkáň z předchozí ztráty odeslána na genetické vyšetření? Pokud ne, dá se to zajistit příště?
- Které vyšetření z doporučeného panelu už mám hotové, co chybí a máme oba vyšetřený karyotyp?
- Byla vyšetřena dutina děložní a jakou metodou?
- Mám vyšetřené antifosfolipidové protilátky, a opakovaně?
- Je nějaký navrhovaný postup, u kterého jsou důkazy slabé? Chci to vědět dopředu.
- Jak často mě budete sledovat, když příště otěhotním, a od kdy?
- Kam se můžu obrátit pro psychologickou podporu?

> Silné krvácení se sraženinami, prudká bolest v podbřišku, horečka nebo mdloby v těhotenství vyžadují akutní lékařskou pomoc. Nečekejte do rána.`,
  },
  {
    id: 'dg-imunologie',
    kind: 'article',
    title: 'Imunologické stavy ve vztahu k plodnosti',
    excerpt:
      'Oblast, kde se hodně slibuje a málo dokazuje. Co má oporu v datech, co je předmětem diskuse a jak se v tom vyznat.',
    minutes: 9,
    phases: ['diagnostics', 'genetic_testing'],
    topics: ['vysledky', 'genetika', 'klinika'],
    level: 'deep',
    hero: 'pearl',
    publishedOn: '2026-08-02',
    reviewedBy: REVIEWED,
    body: `## Co to je

Imunitní systém hraje v těhotenství podivuhodnou roli: musí tolerovat embryo, které je z poloviny geneticky cizí, a přitom dál chránit tělo. Z toho vznikla úvaha, že poruchy této rovnováhy mohou stát za neúspěšným zahnízdněním nebo za těhotenskými ztrátami.

Pod hlavičkou „imunologie v reprodukci" se ale skrývají velmi různé věci:

- **Autoimunitní onemocnění s doloženou souvislostí**, především antifosfolipidový syndrom, dále autoimunitní onemocnění štítné žlázy, celiakie, systémová onemocnění pojiva.
- **Vyšetření, jejichž význam je předmětem odborné diskuse**: například hodnocení NK buněk v krvi nebo ve sliznici, cytokinové profily, shoda HLA mezi partnery, různé „imunologické panely".
- **Léčebné postupy s omezenou důkazní oporou**: nitrožilní imunoglobuliny, tukové emulze, kortikoidy v této indikaci, léky ovlivňující imunitní signalizaci.

## Je potřeba to říct rovnou

**Tohle je oblast, kde je řada postupů diskutovaná a důkazy jsou omezené.** Část nabízených vyšetření nemá standardizovanou metodiku, jasné referenční hodnoty ani ověřený vztah k výsledku léčby. Část nabízené léčby nemá doložený přínos a některé postupy nesou vlastní rizika.

Z toho plyne několik věcí:

- Imunologický nález **se nesmí prezentovat jako automatická příčina neplodnosti** nebo neúspěšných transferů. Odchylka v panelu není důkaz, že právě ona za to může.
- Neúspěšný transfer nebo ztráta má nejčastěji jiné vysvětlení, typicky chromozomovou odchylku embrya nebo náhodu. Imunologie by neměla být první hypotéza.
- Nabídka drahého vyšetření nebo léčby, která se prezentuje jako poslední naděje, si zaslouží druhý názor.

To neznamená, že imunologie je nesmysl. Znamená to, že se dá poctivě oddělit to, co má oporu, od toho, co ji zatím nemá. Antifosfolipidový syndrom je příkladem první skupiny. Je definovaný, dá se vyšetřit podle jasných kritérií a léčba má doložený podklad.

## Jak to může souviset s plodností

U **antifosfolipidového syndromu** je souvislost s opakovanými těhotenskými ztrátami a s některými komplikacemi v těhotenství doložená. Diagnóza vyžaduje splnění klinických i laboratorních kritérií a opakované potvrzení protilátek s časovým odstupem.

U **autoimunitního onemocnění štítné žlázy** se popisuje vyšší riziko těhotenské ztráty. Jak s tím naložit, když je funkce žlázy v pořádku, je předmětem odborné diskuse.

U ostatních zmíněných parametrů, včetně NK buněk, je vztah k výsledkům léčby nejasný. NK buňky v krvi navíc nejsou totéž co buňky ve sliznici dělohy a hodnoty z krve se běžně nepřenášejí na dění v děloze.

Neléčené aktivní systémové onemocnění je samostatné téma. Tam je souvislost s průběhem těhotenství jasná a péče patří příslušnému specialistovi.

## Jak se to vyšetřuje

Co bývá součástí standardní péče při odpovídající indikaci:

- **Antifosfolipidové protilátky** podle platných kritérií, opakovaně.
- **Vyšetření štítné žlázy** včetně protilátek.
- **Screening celiakie** při odpovídajících potížích.
- **Konzultace revmatologa nebo klinického imunologa** při podezření na systémové onemocnění.

Co bývá nabízeno mimo standardní panel a co si zaslouží otázku, co z výsledku prakticky vyplyne:

- stanovení NK buněk z krve nebo z biopsie sliznice,
- cytokinové profily,
- vyšetření shody HLA mezi partnery,
- rozsáhlé „imunologické panely" bez jasné indikace.

## Jak to může souviset s IVF cestou

- **Doložené diagnózy se léčí podle odborných doporučení.** U antifosfolipidového syndromu má léčba své místo a řídí se pravidly, ne dohadem.
- **Experimentální postupy** patří ideálně do klinických studií, ne do běžné praxe za přímou platbu. Pokud vám je někdo nabízí, ptejte se na důkazy, na rizika a na cenu.
- **Kortikoidy a další léky ovlivňující imunitu** nejsou neškodné. Mají nežádoucí účinky a jejich plošné podávání v této indikaci není podložené.
- **Pořadí hypotéz.** Než se sáhne po imunologii, měla by být vyšetřená dutina děložní, prověřená kvalita embryí, zkontrolovaná štítná žláza a probraná příprava sliznice. Jeden cyklus může přinést víc transferů. Informace z několika přenosů dají lékaři jasnější obraz než jeden.
- **Druhý názor** je legitimní krok, ne urážka vašeho lékaře. U nabídek s vysokou cenou a slabou důkazní oporou je namístě vždycky.

## Na co se zeptat lékaře

- Které z navrhovaných vyšetření patří do doporučených postupů a které ne?
- Jak silné jsou důkazy u toho, co mi navrhujete? Existuje k tomu odborné doporučení?
- Co konkrétně se změní v mém plánu podle toho, jak výsledek dopadne?
- Máme vyšetřené antifosfolipidové protilátky podle platných kritérií a opakovaně?
- Jaká jsou rizika a nežádoucí účinky navrhované léčby?
- Kolik to bude stát a je to hrazeno?
- Co jsme ještě neprošli z běžných příčin, než se pustíme do imunologie?
- Můžete mě odkázat na klinického imunologa nebo revmatologa?

> Pokud užíváte léky ovlivňující imunitní systém a objeví se horečka, výrazná slabost nebo příznaky infekce, kontaktujte svého lékaře. Při dušnosti, prudké bolesti nebo zmatenosti vyhledejte akutní lékařskou pomoc.`,
  },
]

export const pack: ContentPack = { items }
