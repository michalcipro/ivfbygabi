import type { ContentItem, ContentPack } from '../types'

/**
 * Práce a IVF.
 *
 * Čistě praktický balík. Řeší to, co se neřeší v ordinaci a co přitom
 * rozhoduje o tom, jestli žena cyklus vůbec zvládne: kdy si vzít volno,
 * co říct nadřízenému, jak si poskládat noční směny s injekcemi.
 *
 * Balík záměrně nedává doporučení tam, kde jde o osobní rozhodnutí
 * (co říct v práci, jestli pauznout léčbu). Dává možnosti a otázky.
 * Pracovněprávní část zůstává u obecného rámce a nikde nepředstírá,
 * že nahrazuje právníka.
 */

const PRAVO = [
  'Pracovněprávní podmínky se mění. Ověřte si aktuální stav u svého zaměstnavatele, na ČSSZ nebo u odborníka na pracovní právo.',
]

const items: ContentItem[] = [
  {
    id: 'pra-kolik-casu-zabere-cyklus',
    kind: 'article',
    title: 'Kolik času IVF cyklus reálně zabere',
    excerpt:
      'Rozpad cyklu po fázích v hodinách a dnech, abyste věděla, o kolik času v práci vlastně jde.',
    minutes: 9,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'transfer', 'two_week_wait'],
    topics: ['klinika', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.6,
    body: `## Nejtěžší na tom není délka, ale nejistota

Většina termínů v cyklu se určuje ze dne na den. Klinika se ráno podívá na ultrazvuk a na hodnoty z krve a teprve podle toho řekne, kdy přijdete příště. Datum odběru, které jste slyšela na začátku, je odhad, ne rezervace.

Tohle je pro plánování v práci ta nejtěžší část. Ne počet hodin, ale to, že je nejde slíbit dopředu. Vysvětlení "budu chybět asi šestkrát, ale nevím kdy" zní nespolehlivě, i když je to nejpřesnější věta, kterou o svém cyklu můžete říct.

Následující rozpad je orientační. Přesná čísla se liší podle protokolu, kliniky i podle toho, jak vaše tělo na stimulaci reaguje.

## Příprava před stimulací

Obvykle jedna až tři návštěvy: vstupní konzultace, podpisy, odběry krve, doplnění chybějících vyšetření. S čekáním počítejte na každou z nich dvě až tři hodiny.

Tohle je jediná část cyklu, kterou si můžete naplánovat týdny dopředu. Když máte v práci období, které se nedá posunout, tady je místo, kde se dá zabrat.

## Stimulace, obvykle osm až čtrnáct dní

- **Počet kontrol:** obvykle tři až pět, u některých protokolů i víc.
- **Kdy:** téměř vždy ráno. Krev musí projít laboratoří, aby lékař mohl během dne určit dávku na večer.
- **Jak dlouho:** samotný ultrazvuk a odběr jsou otázka patnácti až třiceti minut. S čekárnou, cestou tam a cestou do práce počítejte dvě až čtyři hodiny.
- **S jakým předstihem to víte:** termín další kontroly se dozvíte na konci té dnešní. Tedy jeden až tři dny předem.

Injekce si píchá většina žen sama, obvykle večer v přibližně stejnou dobu. Do pracovního dne to zasahuje jen tehdy, když máte směny nebo cestujete.

## Odběr vajíček

Počítejte s celým dnem, ne s dopolednem.

- Přicházíte ráno nalačno, obvykle mezi šestou a osmou hodinou.
- Výkon se dělá v krátké anestezii a trvá zhruba deset až třicet minut.
- Po něm následuje pobyt na lůžku, obvykle jednu až tři hodiny.
- Po anestezii ten den nesmíte řídit a neměla byste zůstat sama. Potřebujete někoho, kdo vás odveze domů.

Den odběru se dozvíte obvykle jeden až dva dny dopředu, přesnou hodinu často až večer předtím. Následující den je otazník: některé ženy jdou normálně do práce, jiné potřebují ještě den ležet. Dopředu to nevíte a nikdo vám to neřekne.

## Mezi odběrem a transferem

Tři až šest dní, kdy na kliniku obvykle nejedete. Informace o embryích chodí telefonem, často dopoledne. Ten hovor stojí za to nebrat na otevřeném pracovišti.

## Transfer

Kratší než odběr. Samotný přenos trvá jen několik minut a obvykle se dělá bez anestezie. S přípravou, čekáním a doporučeným poležením počítejte jednu až tři hodiny.

Naplánovat dopředu se ale nedá o nic líp než odběr. Den transferu určuje vývoj embryí, takže se ho dozvíte jeden až dva dny předem. Někdy padne rozhodnutí transfer odložit a embrya zamrazit, což celý plán posune o týdny.

Jestli se po transferu můžete vrátit k běžnému režimu, nebo si vzít zbytek dne volno, si nechte říct přímo na své klinice. Doporučení se pracoviště od pracoviště liší.

## Odběr hCG

Krátká návštěva, obvykle třicet až šedesát minut včetně čekání. Termín znáte s předstihem, obvykle deset až čtrnáct dní po transferu.

Je to jediný termín v druhé polovině cyklu, který si můžete s klidem zapsat do kalendáře. Nechte si za ním v práci volnější odpoledne, ne důležitou schůzku. Výsledek chodí často během několika hodin.

## Kolik je to dohromady

Za jeden čerstvý cyklus se orientačně dostanete na:

1. Osm až čtrnáct kratších dopoledních absencí rozložených do čtyř až šesti týdnů.
2. Jeden celý den (odběr) a jeden nejistý den po něm.
3. Jednu až tři hodiny na transfer.
4. Jednu krátkou návštěvu na odběr hCG.

U kryotransferu je to výrazně méně: obvykle dvě až čtyři kontroly, transfer a odběr hCG.

## Tři otázky, které to zpřesní

Zavolejte na kliniku a zeptejte se konkrétně:

- "Kolik kontrol má můj protokol obvykle a v jakém rozestupu?"
- "V kolik hodin nejdřív ráno se dá přijít na odběr krve a ultrazvuk?"
- "Může část kontrol udělat gynekolog blíž k mému bydlišti, nebo musím vždycky k vám?"

Odpovědi na tyhle tři otázky vám dají realističtější kalendář než jakýkoli obecný text.`,
  },

  {
    id: 'pra-co-rict-v-praci',
    kind: 'article',
    title: 'Co říct a co neříct v práci',
    excerpt:
      'Tři strategie, jak s léčbou naložit v zaměstnání, a co každá z nich reálně přinese a stojí.',
    minutes: 8,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'transfer'],
    topics: ['psychika', 'sebepece', 'klinika'],
    level: 'essential',
    hero: 'taupe',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## Není správná odpověď

O tom, kdo se v práci dozví, že podstupujete IVF, rozhodujete jenom vy. Neexistuje varianta, která je objektivně rozumnější. Existují tři strategie a každá má jinou cenu.

Než si vyberete, položte si jednu otázku: **co potřebuju, aby se změnilo?** Někdy je odpovědí flexibilita v ranních hodinách. Jindy jen to, aby vás přestali zvát na výjezdy. A někdy potřebujete hlavně přestat lhát, protože už vás to stojí víc energie než samotná léčba.

## Strategie 1: Říct všechno

Řeknete nadřízenému (a případně nejbližším kolegům), že podstupujete IVF, co to obnáší a co budete potřebovat.

**Co to přinese**

- Nemusíte vymýšlet příběhy. Ušetří to podstatné množství energie.
- Flexibilita se domlouvá snáz, protože druhá strana ví, o co jde.
- Když přijde negativní výsledek nebo ztráta, nemusíte v práci předstírat, že se nic nestalo.
- Ve firmách s benefity pro rodičovství se často ukáže, že něco existuje.

**Co to stojí**

- Informaci už nevezmete zpět a nemáte kontrolu nad tím, kam se dostane.
- Můžete začít dostávat rady, které jste nechtěla, a otázky "tak co, už to vyšlo?" po každé kontrole.
- V některých prostředích to může ovlivnit úvahy o vašem zařazení na dlouhé projekty. Prokázat to jde těžko.
- Soucit může být vyčerpávající. Být "ta, co má problém", je samostatná zátěž.

## Strategie 2: Říct část

Řeknete, že podstupujete dlouhodobější zdravotní vyšetření nebo zákrok, který vyžaduje opakované ranní kontroly, a že přesné termíny se určují ze dne na den. Diagnózu neuvedete.

**Co to přinese**

- Získáte praktickou flexibilitu, kterou potřebujete, bez odhalení intimní věci.
- Nikdo se vás neptá na výsledky, protože neví, na co se ptát.
- Dá se to říct jedné osobě (nadřízenému, personalistce) a dál to nešířit.

**Co to stojí**

- Nekonkrétní formulace může vyvolat obavy, že jde o něco vážného. Někdy je to ve výsledku horší než pravda.
- Neustálé balancování na hraně vysvětlování stojí pozornost.
- Když přijde těžký den, nemáte v práci žádný kontext, o který se opřít.

Věta, která na tuhle strategii obvykle stačí: "Mám naplánovaná opakovaná vyšetření, která se dají objednat jen na ráno a termíny se určují krátce dopředu. Budu to hlásit hned, jak to budu vědět."

## Strategie 3: Neříct nic

Volno řešíte dovolenou, náhradním volnem, přesunutou pracovní dobou nebo prací z domova, bez uvedení důvodu.

**Co to přinese**

- Léčba zůstane úplně mimo pracovní identitu. Pro některé ženy je práce jediné místo, kde nejsou "ta neplodná", a to je hodnota sama o sobě.
- Žádné nevyžádané rady, žádné dotazy, žádný soucit.
- Nulové riziko, že se informace dostane tam, kam nechcete.

**Co to stojí**

- Absence bez vysvětlení vypadají nespolehlivě a vy to nemůžete napravit.
- Dovolená vám dojde rychleji, než čekáte.
- Den odběru a den po něm se maskuje těžko.
- Nejvíc to bolí ve chvíli, kdy cyklus nevyjde a vy jdete druhý den do práce a chováte se, jako by se nic nedělo.

## Než se rozhodnete

Projděte si tyhle čtyři otázky. Jsou konkrétnější než "mám to říct?".

1. **Kdo přesně to potřebuje vědět, aby se něco změnilo?** Často je to jeden člověk, ne tým.
2. **Jak se v mé firmě chovali k někomu, kdo měl zdravotní problém?** Precedent je lepší předpověď než firemní hodnoty na webu.
3. **Co udělám, když se to rozšíří dál?** Když na tuhle otázku nemáte odpověď, kterou unesete, je to informace sama o sobě.
4. **Kolik energie mě stojí to tajit?** Tohle se v průběhu cyklu mění. Rozhodnutí není doživotní.

## Co s tím dělat prakticky

- Rozhodnutí si můžete rozdělit: říct nadřízenému, neříkat týmu. Nebo naopak.
- Když se rozhodnete něco říct, řekněte zároveň, co potřebujete. "Potřebovala bych mít do konce října volná rána" je použitelná informace. "Mám zdravotní problém" není.
- Pokud existuje personální oddělení, na které se dá spolehnout, může být lepší adresát než přímý nadřízený.
- Změnit strategii jde kdykoli. Nemusíte u ní zůstat celý cyklus.

Cokoli si vyberete, je legitimní.

> Tenhle text není právní ani pracovněprávní poradenství. Pracovněprávní podmínky se mění a záleží na vaší smlouvě, na zaměstnavateli a na aktuální legislativě. Ověřte si je u svého zaměstnavatele, na ČSSZ nebo u odborníka na pracovní právo.`,
    sources: ['Pracovněprávní podmínky se mění. Ověřte si aktuální stav u svého zaměstnavatele, na ČSSZ nebo u odborníka na pracovní právo. Tenhle text není právní poradenství.', 'Aktualizováno 7. 8. 2026.'],
  },

  {
    id: 'pra-volno-dovolena-nemocenska',
    kind: 'article',
    title: 'Pracovní volno, dovolená a nemocenská: obecný rámec',
    excerpt:
      'Přehled možností, jak volno na léčbu pokrýt, a otázky, na které si musíte odpověď zjistit u sebe.',
    minutes: 8,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'transfer', 'two_week_wait'],
    topics: ['klinika', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'sage',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    sources: PRAVO,
    body: `## Nejdřív to podstatné

**Aktualizováno 7. 8. 2026.**

Tenhle text není právní poradenství. Je to orientační rámec, abyste věděla, na co se ptát a koho se ptát. Pracovněprávní pravidla se mění, liší se podle typu smlouvy a hodně věcí navíc závisí na vnitřních předpisech konkrétního zaměstnavatele.

Nikde tady nenajdete odkazy na konkrétní paragrafy jako jistotu. Kdyby se mezitím změnily, byla by z pomoci škoda. Závazná odpověď na vaši situaci existuje jen jedna a dá vám ji personální oddělení, ČSSZ nebo odborník na pracovní právo.

## Čtyři cesty, kterými se volno obvykle pokrývá

### 1. Dovolená

Nejjednodušší a nejrozšířenější řešení. Nikomu nic nevysvětlujete a nemusíte nic dokládat.

Rizika, se kterými počítejte:
- Dní je omezený počet a jeden cyklus jich spolyká překvapivě hodně.
- Dovolenou schvaluje zaměstnavatel, což u termínu známého den dopředu může být problém.
- Když vám dovolená dojde v půlce roku, nemáte rezervu na nic dalšího.

### 2. Návštěva lékaře v pracovní době

U řady zaměstnanců existuje možnost uvolnit se na nezbytně nutnou dobu na vyšetření nebo ošetření ve zdravotnickém zařízení. Rozsah, doložení i to, jestli jde o placené nebo neplacené volno, se liší podle situace a podle zaměstnavatele.

Co si zjistěte konkrétně:
- Jestli tuhle možnost můžete využít na opakované ranní kontroly, ne jen na jednorázovou návštěvu.
- Jak se to dokládá. Klinika obvykle vydá potvrzení o návštěvě, které neuvádí diagnózu. O takové potvrzení si můžete říct u přepážky.
- Jestli se to vykazuje po hodinách, nebo po půldnech. Rozdíl je za celý cyklus podstatný.

### 3. Pracovní neschopnost

O pracovní neschopnosti rozhoduje lékař na základě vašeho zdravotního stavu, ne na základě toho, že se vám hodí. Vystavit ji může praktický lékař, gynekolog nebo lékař na klinice, podle toho, jak je to na daném pracovišti nastavené.

V praxi se řeší nejčastěji kolem odběru vajíček, při komplikacích nebo tam, kde je práce fyzicky náročná. Délka a to, kdo ji vystaví, jsou vždy individuální.

Otázky, které položte přímo:
- "Vystavujete tady neschopenku kolem odběru, nebo to mám řešit s praktickým lékařem?"
- "Kdy nejdřív se o tom dá mluvit, abych to nemusela řešit na poslední chvíli?"

Náhrada mzdy a nemocenské mají svá pravidla a své lhůty. Ověřte si je na ČSSZ nebo u mzdové účetní, ne v diskusi.

### 4. Neplacené volno, náhradní volno, posun pracovní doby

Často opomíjená, přitom nejpružnější skupina. Patří sem posun začátku a konce směny, práce z domova, čerpání náhradního volna za přesčasy nebo dohoda o neplaceném volnu.

Výhoda: nic se nedokládá zdravotně a domlouvá se to většinou s nadřízeným.
Nevýhoda: nemusíte na to mít nárok a záleží čistě na dohodě.

## Co si zjistit u sebe, ne obecně

1. **Jaký mám typ smlouvy.** Pracovní poměr, dohoda o provedení práce a podnikání mají zásadně jiná pravidla u všeho, o čem je řeč výš.
2. **Co říká vnitřní předpis nebo kolektivní smlouva.** U větších zaměstnavatelů bývá k dispozici a často je štědřejší než zákonné minimum.
3. **Kdo tuhle agendu vyřizuje.** Přímý nadřízený, personální oddělení a mzdová účetní vědí každý něco jiného.
4. **Jestli mám nárok na nějaké dny navíc.** Sick days, osobní dny a podobné benefity se u nás jmenují různě a často se na ně zapomíná.
5. **Jak se u nás vykazuje ranní absence.** Někde stačí ohlásit, jinde je potřeba potvrzení.

## Praktické tipy, které fungují nezávisle na paragrafech

- **Ptejte se na obecné podmínky dřív, než je budete potřebovat.** Otázka "jak se u nás řeší opakované návštěvy lékaře?" nikoho nepřekvapí a neprozradí nic.
- **Vyžádejte si odpověď písemně.** Ústní příslib z léta se v listopadu pamatuje jinak.
- **Sbírejte potvrzení o návštěvě průběžně.** Zpětně se shánějí špatně.
- **Kombinujte.** Většina žen nakonec nepoužije jedno řešení, ale mix: rána na návštěvy lékaře, den odběru na dovolenou, komplikace na neschopenku.
- **Nechte si rezervu.** Cyklus se může zrušit a začít znovu. Vyčerpat celou dovolenou na první pokus se nevyplácí.

> Tento text má informativní charakter a není právní poradenství. Konkrétní nárok posoudí jen váš zaměstnavatel, ČSSZ nebo odborník na pracovní právo.`,
  },

  {
    id: 'pra-smeny-nocni-fyzicka-prace',
    kind: 'article',
    title: 'Směny, noční a fyzicky náročná práce během stimulace',
    excerpt:
      'Jak si poskládat injekce s nočními, co s ranními kontrolami po směně a kdy má smysl mluvit s lékařem o úpravě.',
    minutes: 8,
    phases: ['ivf_prep', 'stimulation', 'retrieval'],
    topics: ['klinika', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'dusk',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno – reprodukční medicína',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## Proč je směnný provoz s IVF cyklem těžký

Stimulace je postavená na pravidelnosti. Injekce ve stejnou dobu, kontroly ráno, spouštěcí injekce v přesně určenou hodinu. Směnný provoz je postavený na opaku: jednou ráno, jednou v noci, plán se mění.

Neznamená to, že cyklus se směnami nejde zvládnout. Zvládají ho zdravotní sestry, prodavačky, řidičky i ženy ve výrobě. Znamená to, že se to musí naplánovat vědomě a dopředu, ne za pochodu.

## Injekce a noční směny

Zásadní věta na začátek: **časování léků měňte jen po domluvě s klinikou.** Následující body jsou to, na co se máte zeptat, ne návod.

- **Pravidelnost je důležitější než konkrétní hodina.** U většiny stimulačních léků je podstatné, aby rozestup mezi dávkami zůstal přibližně stejný. Zeptejte se, jaké okno kolem zvolené hodiny je u vašich léků v pořádku.
- **Vyberte hodinu, kterou zvládnete i na směně.** Když píchnete v jednadvacet hodin doma, ale příští týden v tu dobu stojíte u pásu, byla to špatně zvolená hodina. Lepší je vybrat čas, kdy máte pauzu i v denní i v noční směně.
- **Chlazení a převoz.** Některé léky vyžadují chlazení. Zeptejte se v lékárně, jak dlouho vydrží mimo ledničku a jestli si můžete pořídit chladicí obal. Na pracovišti se pak neřeší, jestli je v lednici místo.
- **Kde píchat v práci.** Potřebujete pár minut soukromí a čistý povrch. Prošlá otázka: má vaše pracoviště šatnu, ošetřovnu nebo aspoň zamykatelnou místnost?
- **Spouštěcí injekce se nedá posunout.** Je to jediná dávka, u které přesná hodina rozhoduje o výsledku odběru. Padne obvykle na pozdní večer nebo noc a znáte ji jeden den dopředu. Tuhle noc si nechte volnou, i kdyby to znamenalo prosit o výměnu.

## Ranní kontrola po noční směně

Kontroly bývají brzy ráno, tedy přesně ve chvíli, kdy z noční odcházíte nebo právě usínáte.

- **Nejezděte na kontrolu autem po odsloužené noční.** Únava po noční směně snižuje pozornost srovnatelně s jinými stavy, u kterých byste za volant nesedla. Domluvte si odvoz, jeďte MHD nebo taxi.
- **Zeptejte se na nejranější možný termín odběru krve.** Řada klinik odebírá už kolem sedmé. Když jdete rovnou ze směny, dostanete se domů spát dřív.
- **Nespoléhejte na to, že to "nějak dáte".** Naplánujte si, že po kontrole jdete spát, ne že ještě něco vyřídíte.
- **Zeptejte se, jestli se dá kontrola posunout o den.** Někdy ano, někdy ne. Rozhoduje o tom vývoj folikulů, ne rozpis směn, ale zeptat se stojí za to.

## Fyzicky náročná práce

Během stimulace vaječníky rostou. Ke konci stimulace mohou být výrazně větší než obvykle a citlivé. Po odběru je situace ještě citlivější.

Co ženy během stimulace popisují jako náročné. Co u vás platí a co si máte odpustit, rozhoduje vaše klinika:
- Zvedání těžkých břemen.
- Prudké otáčení, skoky, dlouhé stání bez možnosti si sednout.
- Vysoké teploty na pracovišti.
- Práce, kde nemůžete kdykoli odejít na toaletu nebo se napít.

Zeptejte se svého lékaře konkrétně: "Dělám tohle a tohle. Od kterého dne stimulace to mám omezit?" Obecná odpověď typu "šetřete se" vám v rozpisu směn nepomůže.

## Kdy má smysl mluvit s lékařem o úpravě

Nečekejte, až to přestanete zvládat. Zmiňte svou práci hned na první konzultaci, ne až v půlce stimulace. Konkrétně řekněte:

- V jakém režimu pracujete (dvanáctky, noční, ranní, nepravidelně).
- Kdy se dozvídáte rozpis a jak daleko dopředu.
- Jestli je práce fyzicky náročná nebo jestli řídíte.
- Jak daleko to máte na kliniku.

Lékař podle toho může upravit časování dávek, doporučit termín kontroly, který vám sedne líp, nebo posoudit, jestli je namístě pracovní neschopnost. Bez těch informací nemá z čeho vycházet.

## Signály, že je potřeba to řešit hned

Ozvěte se na kliniku, aniž byste čekala na další kontrolu, pokud během stimulace nebo po odběru:

- Výrazně vás bolí břicho nebo se rychle nafukuje.
- Přibýváte na váze ze dne na den.
- Je vám nevolno, zvracíte nebo se hůř dýchá.
- Močíte podstatně méně než obvykle.

Tyhle příznaky mohou souviset s nadměrnou reakcí na stimulaci a patří do rukou vaší kliniky, ne do rozpisu směn. Do práce se v takovém stavu nechoďte.

## Praktické minimum

1. Řekněte na klinice hned na začátku, že pracujete na směny.
2. Vyberte hodinu injekcí, která funguje v denní i v noční směně.
3. Zajistěte si odvoz na ranní kontroly po nočních.
4. Noc spouštěcí injekce a den odběru si zablokujte, jakmile je znáte.
5. Domluvte si předem s kolegyní vzájemné krytí, ne až v den, kdy to potřebujete.`,
  },

  {
    id: 'pra-po-odberu-zpatky-do-prace',
    kind: 'article',
    title: 'Po odběru vajíček: kdy zpátky do práce',
    excerpt:
      'Co se s tělem po odběru obvykle děje a proč se návrat do práce nedá naplánovat na den přesně.',
    minutes: 7,
    phases: ['retrieval', 'transfer'],
    topics: ['klinika', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'blush',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno – reprodukční medicína',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## Krátká odpověď

Den odběru je celý pryč. Následující den je otazník a ten otazník se nedá vyřešit dopředu.

Ženy po nekomplikovaném odběru často popisují, že se za jeden až tři dny cítí natolik dobře, že zvládnou kancelářskou práci. Je to zkušenost, ne pravidlo, a záleží na individuální situaci. Někdo se vrací hned druhý den, jiná potřebuje celý týden. Rozdíly jsou velké a nesouvisí s odolností, ale s počtem odebraných vajíček, reakcí na stimulaci a průběhem výkonu.

## Co se ten den obvykle děje

- Přicházíte ráno nalačno, výkon se dělá v krátké anestezii.
- Samotný odběr trvá zhruba deset až třicet minut.
- Následuje pobyt na lůžku, obvykle jednu až tři hodiny, dokud anestezie neodezní.
- Před propuštěním dostanete pokyny k lékům a informaci o tom, kdy volat.

**Ten den nesmíte řídit.** Po anestezii také nepodepisujte nic důležitého a neplánujte hovory, které si budete potřebovat pamatovat. Potřebujete doprovod, který vás dostane domů.

## Co se dá čekat v následujících dnech

Běžné a obvykle nezneklidňující:

- Tlak, tupá bolest nebo křeče v podbřišku. Nejsilnější bývají první dva dny.
- Nafouknuté břicho a pocit plnosti. Někdy vám nesednou kalhoty, které jste měla na sobě ráno.
- Slabé krvácení nebo špinění.
- Únava, která neodpovídá tomu, jak krátký ten výkon byl.
- Citlivost při chůzi a při vstávání ze sedu.

Nafouknutí je při návratu do práce často větší praktický problém než bolest. Vezměte si volné oblečení a počítejte s tím, že celodenní sezení v kalhotách s pevným pasem bude nepříjemné.

## Proč se to nedá naplánovat na den dopředu

Kolik vajíček se odebere, se dozvíte až po výkonu. Jak na to vaše tělo zareaguje, se ukáže během prvních dvou dnů. Při větším počtu odebraných vajíček bývá zotavení delší a nafouknutí výraznější.

Zároveň na sebe navazují dvě věci: po odběru čekáte na den transferu, který se určuje podle vývoje embryí. Je tedy možné, že se sotva vrátíte do práce a za dva dny odcházíte znovu.

Proto se plán "vrátím se ve středu" nedrží. Fungující plán zní: **mám jistě volný den odběru a mám připravené řešení pro den následující, které nemusím použít.**

## Kdy volat na kliniku a do práce nechodit

Ozvěte se klinice, i mimo ordinační hodiny, pokud se objeví:

- Silná bolest břicha, která neustupuje po lécích doporučených klinikou.
- Rychlé nafukování břicha nebo přírůstek na váze během jednoho až dvou dnů.
- Zvracení, nevolnost, potíže s dýcháním.
- Výrazně menší množství moči než obvykle.
- Teplota.
- Silné krvácení.

Tyto potíže mohou souviset s nadměrnou reakcí na stimulaci nebo s komplikací výkonu a posoudit je musí lékař. Kliniky na tyhle hovory čekají a nejsou to hovory zbytečné.

## Praktický plán návratu

1. **Den odběru si zablokujte celý.** Ne dopoledne, celý den.
2. **Následující den si nechte jako rezervu.** Ideálně tak, aby se dal na poslední chvíli buď využít, nebo vrátit.
3. **První den zpátky si nedávejte nic, co se nedá přesunout.** Žádná prezentace, žádný výjezd, žádná inventura.
4. **Zajistěte si možnost si během dne sednout nebo lehnout.** I patnáct minut o pauze pomůže.
5. **Zeptejte se na klinice, jaký režim po odběru u vás platí.** Pitný režim, zvedání, sport, sex. Doporučení se mezi pracovišti liší a u rizika hyperstimulace bývá přísnější. Aplikace vám žádný režim neurčuje.
6. **Mějte v telefonu číslo na kliniku.** A vedle něj poznámku, komu v práci voláte, když nedorazíte.

## Co říct v práci den předem

Pokud jste se rozhodla neuvádět důvod, funguje formulace, která neslibuje nic, co nemůžete dodržet:

"Zítra mám zákrok v anestezii. Ozvu se ráno po něm, jestli budu ve čtvrtek k dispozici, nebo ne."

Tím máte den odběru pokrytý a druhý den necháváte otevřený, aniž byste na sebe brala závazek, který vaše tělo možná neunese.`,
  },

  {
    id: 'pra-prace-z-domova',
    kind: 'article',
    title: 'Práce z domova během léčby: kdy pomůže a kdy uškodí',
    excerpt:
      'Home office vyřeší logistiku kontrol, ale umí zhoršit to druhé, čím je léčba náročná.',
    minutes: 7,
    phases: ['stimulation', 'transfer', 'two_week_wait'],
    topics: ['psychika', 'sebepece', 'klinika'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.4,
    body: `## Dvě různé věci, které se snadno pletou

Práce z domova řeší logistiku: dojíždění, ranní kontroly, nafouknuté břicho v kancelářských kalhotách. V tomhle je nenahraditelná.

Nevyřeší ale to druhé, čím je léčba náročná: myšlenky. A v některých fázích je dokonce zhoršuje, protože vás nechá s nimi o samotě celý den.

Rozdíl mezi "pomůže" a "uškodí" nespočívá v tom, jak silná jste. Spočívá v tom, ve které fázi cyklu právě jste a co ten den děláte.

## Kdy home office jednoznačně pomáhá

- **V období kontrol.** Odpadne cesta z kliniky do práce a zpátky. Ušetří to hodinu až tři denně, což je za cyklus podstatný objem.
- **Po odběru vajíček.** Můžete si sednout, jak potřebujete, vstát, lehnout si na půl hodiny, vzít si volné oblečení.
- **V dnech, kdy vám kliniky volají.** Zprávu o embryích nebo výsledek hCG přijmete v soukromí, ne na chodbě.
- **Když máte injekce v pravidelnou hodinu.** Doma je to otázka pěti minut bez logistiky.
- **Když se necítíte na to hrát před lidmi, že je všechno v pořádku.** Někdy je to ta nejvyčerpávající část dne.

## Kdy naopak škodí

### Čekání na výsledek

Dva týdny mezi transferem a odběrem hCG jsou fáze, ve které samota doma dělá práci hůř. Bez lidí kolem se pozornost přesune dovnitř: co jsem cítila před hodinou, co cítím teď, bylo to píchnutí nebo ne.

Kancelář v tomhle období paradoxně pomáhá právě tím, čím jindy obtěžuje: nutí vás mluvit s lidmi o něčem jiném.

### Vyhledávání příznaků

Doma je vyhledávač vzdálený dvě vteřiny a nikdo se vám nedívá do monitoru. Hodina strávená čtením cizích příběhů o tom, co znamená tahnutí v podbřišku šestý den po transferu, není informace. Je to úzkost s vyhledávacím polem.

Prakticky funguje:
- Vyhradit si na hledání jedno okno denně (třeba dvacet minut po večeři) a mimo něj ne.
- Odhlásit se ze skupin na dobu čekání, ne navždy.
- Mít připravenou náhradní činnost na moment, kdy sáhnete po telefonu. Cokoli, co má konec.

### Rozpuštění hranic

Když se bydliště, ordinační termíny, injekce a práce odehrávají ve stejných třech místnostech, přestává existovat místo, kde léčba není. Pak se stane, že jste unavená z něčeho, co se dá popsat jako "všechno je pořád tady".

Pomáhá cokoli, co dělá hranici: jiné místo pro práci a pro léky, procházka místo dojíždění, konkrétní čas, kdy se počítač zavírá.

### Neviditelnost

Když jste doma delší dobu, snáz vypadnete z rozhodování a z projektů, aniž by to někdo udělal schválně. U delší léčby to může mít reálné důsledky.

## Jak to poskládat

1. **Nesnažte se být doma celý cyklus.** Střídání funguje líp než jeden režim.
2. **Naplánujte home office na dny kolem kontrol a po odběru.** Tam má největší hodnotu.
3. **Ve fázi čekání zkuste být spíš mezi lidmi.** I dva dny v týdnu udělají rozdíl.
4. **Dohodněte si volné dopoledne místo celého dne doma.** Někdy stačí posunout začátek práce na desátou.
5. **Domluvte si pravidelný krátký hovor s někým v práci.** Nahradí to náhodné potkávání na chodbě, které z domova mizí.
6. **Dejte si jeden pevný bod dne mimo byt.** Nákup, procházka, cokoli. Den bez vyjití z domu se v tomhle období nese hůř.

## Co říct, když chcete home office a nechcete uvádět důvod

"Mám v následujících týdnech opakovaná ranní vyšetření. Dojíždění mi z každého takového dne bere skoro tři hodiny. Odpracuju je z domova a večer, jestli to takhle jde."

Nabízí to řešení místo problému a nikde neuvádí diagnózu.`,
  },

  {
    id: 'pra-cestovani-za-lecbou',
    kind: 'article',
    title: 'Když je klinika v jiném městě',
    excerpt:
      'Cesty, ubytování a plánování odběru na dálku, aby vás logistika nestála víc sil než samotná léčba.',
    minutes: 8,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'transfer'],
    topics: ['klinika', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.4,
    body: `## Co dojíždění reálně přidá

Když je klinika hodinu a půl daleko, znamená to u každé kontroly tři hodiny na cestě navíc. Při čtyřech kontrolách je to dvanáct hodin, tedy víc než celý pracovní den, který nikde ve výčtu nefiguruje.

Dojíždění se přitom počítá do rozhodnutí o klinice málokdy. A přitom je to jeden z mála parametrů, které během léčby zásadně ovlivníte.

## Co si zjistit hned na začátku

Zavolejte na kliniku a zeptejte se konkrétně:

- **"Které kontroly musím absolvovat u vás a které může udělat gynekolog blíž ke mně?"** Řada pracovišť akceptuje část ultrazvuků a odběrů zvenčí. Ušetří to i polovinu cest.
- **"V kolik hodin nejdřív ráno odebíráte krev?"** Rozdíl mezi sedmou a devátou hodinou rozhoduje o tom, jestli stihnete práci.
- **"Kdy se dozvím termín odběru a jak přesně?"** Potřebujete vědět, jestli půjde o telefonát večer předtím, nebo o informaci na kontrole.
- **"Máte doporučené ubytování v okolí a dá se rezervovat na krátkou dobu?"** Kliniky často mají seznam nebo smluvní ceny.
- **"Kdo mi zavolá, když se termín změní, a na jaké číslo?"** U dojíždění je tohle klíčové. Zprávu, kterou si přečtete až v poledne, potřebujete znát v sedm ráno.

## Doprava

- **Na den odběru neřiďte.** Ani tam, ani zpět. Anestezie to vylučuje a cesta domů po výkonu je delší, než se zdá.
- **Vlak nebo autobus bývá na kontroly lepší volba než auto.** Nemusíte hledat parkování, můžete spát nebo pracovat a nezáleží na dopravní situaci.
- **Zjistěte si předem druhé spojení.** Když se kontrola protáhne o čtyřicet minut, první varianta padá.
- **Parkování u kliniky.** Zeptejte se, jestli mají vlastní místa a kolik stojí. V centrech měst to bývá překvapivá položka.
- **Náklady si zapisujte.** Za cyklus se z toho stane číslo, které se vyplatí znát, i kdyby jen kvůli rozhodování o dalších pokusech.

## Ubytování

Přenocování před odběrem řeší nejvíc problémů najednou: nemusíte vstávat ve čtyři, nejste po cestě vyčerpaná a nemusíte řešit ranní dopravu.

- Rezervujte s možností zrušení zdarma. Termín se může posunout o den nebo dva.
- Vybírejte v docházkové vzdálenosti od kliniky, ne podle ceny. Ráno nalačno se přesun přes město nese špatně.
- Zeptejte se na možnost pozdějšího odhlášení. Po odběru se hodí místo, kde se dá do odpoledne ležet.
- Když je to možné, přijeďte den předem i na transfer. Termín znáte krátce dopředu a ranní cesta na dlouhou vzdálenost před transferem je zbytečná zátěž.

## Plánování na dálku, když termín neznáte

Tohle je jádro problému: rezervace potřebujete dřív, než víte datum.

Co funguje:

1. **Pracujte s oknem, ne s datem.** Po první kontrole víte, že odběr padne zhruba do určitého týdne. Blokujte celý ten týden, ne jeden den.
2. **Zablokujte si v kalendáři pět dní jako "nedostupná".** Zrušit blokaci jde vždycky. Vytvořit ji na poslední chvíli ne.
3. **Rezervujte zrušitelné.** Ubytování i jízdenky. Za flexibilitu se občas připlácí a v tomhle případě to dává smysl.
4. **Připravte si dvě varianty dopravy.** Jedna na "vím to večer předem", druhá na "vím to ráno".
5. **Domluvte si doprovod na okno, ne na den.** Otázka nezní "můžeš ve čtvrtek?", ale "můžeš být příští týden ve dvou dnech na zavolání?".

## Když je klinika v zahraničí

Přidávají se další proměnné: letenky, které se ruší hůř, jazyk, jiný systém dokumentace a vyšetření, která se musí uznat.

- Ptejte se dopředu, která vyšetření uznají ze své země a jaká je jejich platnost.
- Řešte, jak dostanete zprávy a recepty ve formě, se kterou vám doma vyhoví lékárna a gynekolog.
- Počítejte s tím, že u čerstvého cyklu bývá potřeba být na místě několik dní v kuse.
- Zjistěte si, kdo je vaším kontaktem po návratu domů, když se objeví potíže.

## Co si zjednodušit

- Připravte si jednu tašku, která zůstane sbalená celý cyklus: doklady, karta pojišťovny, léky, voda, sušenky, nabíječka, teplé oblečení.
- Mějte kontakty na kliniku v telefonu a zároveň napsané na papíře v peněžence.
- Vytiskněte si zprávy z předchozích vyšetření. Na cestě se hledá v telefonu špatně.
- Jídlo na cestu zpět mějte s sebou. Po ranním nalačno a delší cestě je to rozdíl mezi únavou a vyčerpáním.`,
  },

  {
    id: 'pra-kdyz-to-nejde-skloubit',
    sources: ['Pracovněprávní podmínky se mění. Ověřte si aktuální stav u svého zaměstnavatele, na ČSSZ nebo u odborníka na pracovní právo. Tenhle text není právní poradenství.', 'Aktualizováno 7. 8. 2026.'],
    kind: 'article',
    title: 'Když se práce a léčba nedají skloubit',
    excerpt:
      'Přehled možností od úpravy úvazku po pauzu v léčbě, bez doporučení, které z nich je správné.',
    minutes: 8,
    phases: ['ivf_prep', 'stimulation', 'transfer', 'two_week_wait'],
    topics: ['psychika', 'sebepece', 'klinika'],
    level: 'deep',
    hero: 'pearl',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.3,
    body: `## Nejdřív jedna věc

To, že vám práce a léčba nejdou dohromady, není důkaz špatné organizace. Léčba je postavená na termínech, které se určují ze dne na den, a většina zaměstnání na opaku. Ten střet je systémový, ne osobní.

Tenhle text nedoporučuje žádnou z variant. Popisuje, co která obnáší, a nabízí otázky, které pomůžou rozhodnout. Rozhodnutí je jenom vaše a nikdo zvenčí nezná všechny proměnné, které do něj vstupují.

## Možnost 1: Úprava pracovní doby beze změny úvazku

Posun začátku a konce směny, pevná dopoledne volná, práce z domova v určité dny, nárazová flexibilita.

- **Co to řeší:** kontroly, které jsou skoro vždycky ráno.
- **Co to neřeší:** dny, kdy potřebujete být pryč celé.
- **Kolik to stojí:** obvykle nic finančně. Stojí to jedno jednání s nadřízeným.
- **Kdy to dává smysl:** když je hlavní problém ranní hodina, ne objem času.

## Možnost 2: Zkrácený úvazek

- **Co to řeší:** objem času i únavu. Získáte prostor, který jinde nevznikne.
- **Co to neřeší:** nepředvídatelnost. Když máte volné pondělky a kontroly padnou na úterý, nepomůže to.
- **Kolik to stojí:** poměrnou část příjmu, což při placené léčbě není maličkost. Může ovlivnit i výpočty navázané na příjem. Ověřte si to konkrétně, ne odhadem.
- **Kdy to dává smysl:** u delší léčby, u fyzicky náročné práce, tam, kde vám příjem takový krok dovolí.

## Možnost 3: Změna pozice uvnitř firmy

Přesun na roli s menší nepředvídatelností: méně výjezdů, méně směn, méně zodpovědnosti za termíny, které nemůžete přesunout.

- **Co to řeší:** kolizi mezi charakterem práce a charakterem léčby.
- **Co to neřeší:** samotný čas, pokud zůstane plný úvazek.
- **Kolik to stojí:** často část kariérního postupu nebo ohodnocení. Někdy je to dočasné, někdy ne.
- **Kdy to dává smysl:** když je problém typ práce, ne její množství.

## Možnost 4: Pauza v práci

Neplacené volno, dohoda o dočasném přerušení, u některých profesí sabatikl.

- **Co to řeší:** všechno na straně logistiky.
- **Co to neřeší:** finance a to, co s vámi udělá dlouhé období, kdy je léčba jediným obsahem dne. Pro některé ženy je to úleva, pro jiné zhoršení.
- **Kolik to stojí:** příjem a někdy i návaznost na pozici.
- **Kdy to dává smysl:** u krátkého, jasně ohraničeného období. U otevřeného konce je riziko větší.

## Možnost 5: Pauza v léčbě

Odložení dalšího cyklu o měsíce, dokud se pracovní situace nezmění.

Tohle je varianta, kterou ženy zvažují nejméně ochotně, protože se v ní ozve strach z času. Je ale legitimní stejně jako ostatní. Odložit cyklus na dobu, kdy budete mít prostor ho unést, není promarněný čas.

- **Co to řeší:** kolizi úplně. Zároveň dá tělu i hlavě prostor.
- **Co to neřeší:** plynutí času, které je u léčby reálný faktor.
- **Kolik to stojí:** čas. U některých diagnóz a věkových kategorií je to podstatné a je potřeba to probrat s lékařem, ne odhadovat.
- **Kdy to dává smysl:** když je pracovní kolize dočasná a známá (velký projekt, sezona, výpověď ve výpovědní době).

Než se rozhodnete odložit, zeptejte se konkrétně: "Jaký rozdíl u mé situace dělá odklad o tři měsíce a jaký o šest?" Odpověď se liší podle diagnózy, věku i podle toho, jestli máte zamražená embrya.

## Možnost 6: Změna zaměstnavatele

- **Co to řeší:** potenciálně všechno, když najdete místo s předvídatelnějším režimem.
- **Co to neřeší:** krátkodobě nic. Hledání, výběrová řízení a zkušební doba jsou samy o sobě zátěž a spadnou do stejného období.
- **Kdy to dává smysl:** když je současné prostředí problém i nezávisle na léčbě.

## Otázky, které rozhodnutí zúží

Vezměte si papír a odpovězte si písemně. Napsané odpovědi vypadají jinak než myšlené.

1. **Co konkrétně nejde skloubit?** Ranní hodina, celkový objem, fyzická náročnost, nepředvídatelnost, nebo psychická zátěž? Každá z těch pěti věcí má jiné řešení.
2. **Jak dlouho tenhle stav potrvá?** Jeden cyklus, půl roku, nebo nevím?
3. **Co si finančně můžu dovolit?** Ne teoreticky. Spočítejte to na měsíce.
4. **Co ztratím a jak snadno se to vrací?** U některých kroků je návrat jednoduchý, u jiných ne.
5. **Co by mi ulevilo nejvíc, kdyby to šlo?** Odpověď na tuhle otázku často ukáže, že řešení je menší, než jste čekala.
6. **S kým to potřebuju probrat, než se rozhodnu?** Partner, mzdová účetní, lékař, právník. Každý zná jiný kus.

## Co si u toho hlídat

Rozhodnutí udělané uprostřed stimulace, po probdělé noci nebo den po negativním výsledku bývá jiné než rozhodnutí udělané za klidnějšího týdne. Když to jde, dejte si na něj čas a proberte ho s někým, kdo nezná jen jednu stranu.

A ať vyberete cokoli, není to konečné. Všechny výše popsané kroky jdou po čase vzít zpět nebo změnit.`,
  },

  {
    id: 'pra-chk-pred-odberem',
    kind: 'checklist',
    title: 'Co si zařídit před odběrem vajíček',
    excerpt:
      'Dvanáct věcí, které se špatně shánějí den předem a dobře se zařizují teď, dokud máte klid.',
    minutes: 6,
    phases: ['ivf_prep', 'stimulation', 'retrieval'],
    topics: ['klinika', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'sand',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## K čemu je tenhle seznam

Přesný den odběru se dozvíte obvykle jeden až dva dny předem, hodinu často až večer. To je málo času na shánění doprovodu, odvozu a volna zároveň.

Většinu položek níž ale můžete zařídit už během stimulace, kdy víte přibližné okno. Projděte je jednou pořádně a den před odběrem už jen potvrzujete.

## Jak to použít

Odškrtejte, co máte hotové. Nepovinné položky jsou označené a nikdo je nepotřebuje mít všechny.`,
    checklist: [
      {
        id: 'pra-chk-odb-volno',
        text: 'Zablokovat si v práci celý den odběru, ne jen dopoledne',
        hint: 'Blokujte celý týden, ve kterém odběr podle první kontroly padne, a zbytek pak uvolníte.',
        group: 'Volno a práce',
      },
      {
        id: 'pra-chk-odb-den-po',
        text: 'Připravit řešení i pro den po odběru, které nemusíte použít',
        hint: 'Zotavení se liší podle počtu odebraných vajíček. Dopředu to nevíte.',
        group: 'Volno a práce',
      },
      {
        id: 'pra-chk-odb-nahrada',
        text: 'Domluvit v práci zastupování a předat, co nesnese odklad',
        hint: 'Stačí jeden člověk, který ví, kde věci jsou. Nemusíte uvádět důvod.',
        group: 'Volno a práce',
      },
      {
        id: 'pra-chk-odb-kalendar',
        text: 'Zkontrolovat kalendář na okno odběru a přesunout, co jde přesunout',
        hint: 'Prezentace, výjezdy, inventury, cokoli s pevným termínem a publikem.',
        group: 'Volno a práce',
      },
      {
        id: 'pra-chk-odb-doprovod',
        text: 'Domluvit doprovod na okno několika dnů, ne na konkrétní datum',
        hint: 'Ptejte se konkrétně, například: „Můžeš být příští týden ve dvou dnech na zavolání?“',
        group: 'Doprovod a doprava',
      },
      {
        id: 'pra-chk-odb-nahradnik',
        text: 'Mít druhého člověka pro případ, že první nemůže',
        hint: 'Termín se posouvá běžně. Jedna varianta doprovodu je málo.',
        group: 'Doprovod a doprava',
      },
      {
        id: 'pra-chk-odb-odvoz',
        text: 'Zajistit odvoz domů. Po anestezii ten den nesmíte řídit',
        hint: 'Ani MHD sama není dobrý plán. Počítejte s autem nebo taxi a s někým vedle sebe.',
        group: 'Doprovod a doprava',
      },
      {
        id: 'pra-chk-odb-cesta',
        text: 'Ověřit cestu na kliniku na časnou ranní hodinu a parkování',
        hint: 'Zjistěte si i druhé spojení pro případ, že první nevyjde.',
        group: 'Doprovod a doprava',
      },
      {
        id: 'pra-chk-odb-nocleh',
        text: 'Zvážit přenocování blízko kliniky, pokud dojíždíte přes hodinu',
        hint: 'Rezervujte s bezplatným zrušením. Termín se může o den posunout.',
        group: 'Doprovod a doprava',
        optional: true,
      },
      {
        id: 'pra-chk-odb-jidlo',
        text: 'Nakoupit jídlo na dva dny dopředu a mít ho hotové',
        hint: 'Přicházíte nalačno a po výkonu nebudete mít sílu vařit ani nakupovat.',
        group: 'Doma a na místě',
      },
      {
        id: 'pra-chk-odb-taska',
        text: 'Sbalit tašku: doklady, karta pojišťovny, volné oblečení, ponožky, voda',
        hint: 'Volný pas u kalhot oceníte při cestě zpět víc, než čekáte.',
        group: 'Doma a na místě',
      },
      {
        id: 'pra-chk-odb-leky',
        text: 'Zkontrolovat pokyny k lékům na den odběru a na dny po něm',
        hint: 'Zeptejte se, které léky ráno vzít, které ne a co si vzít s sebou.',
        group: 'Doma a na místě',
      },
      {
        id: 'pra-chk-odb-telefon',
        text: 'Uložit si číslo na kliniku včetně kontaktu mimo ordinační hodiny',
        hint: 'Napište si ho i na papír do peněženky. Telefon může být vybitý.',
        group: 'Doma a na místě',
      },
      {
        id: 'pra-chk-odb-hovor',
        text: 'Domluvit se, kdo a kdy zavolá do práce, když se stav protáhne',
        hint: 'Po anestezii nechcete řešit, jak se odhlásit z porady.',
        group: 'Doma a na místě',
        optional: true,
      },
    ],
  },

  {
    id: 'pra-chk-plan-volna',
    kind: 'checklist',
    title: 'Plán volna na celý cyklus',
    excerpt:
      'Postup, po kterém máte volno rozvržené na celý cyklus dřív, než přijde první termín na poslední chvíli.',
    minutes: 6,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'transfer', 'two_week_wait'],
    topics: ['klinika', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'dawn',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.4,
    sources: PRAVO,
    body: `## Proč to dělat dopředu

Volno se v cyklu neřeší jednou, ale osmkrát až čtrnáctkrát. Když každý termín řešíte zvlášť a na poslední chvíli, spotřebuje to víc energie než samotná léčba a působí to v práci hůř než jedna předem ohlášená série absencí.

Tenhle seznam projděte jednou, ideálně ještě před začátkem stimulace. Zabere to jedno odpoledne a ušetří to týdny improvizace.

**Aktualizováno 7. 8. 2026.** Konkrétní pracovněprávní nároky si ověřte u svého zaměstnavatele. Tenhle seznam je organizační pomůcka, ne právní poradenství.`,
    checklist: [
      {
        id: 'pra-chk-plan-pocet',
        text: 'Zjistit na klinice, kolik kontrol váš protokol obvykle má',
        hint: 'Zeptejte se i na obvyklý rozestup mezi nimi a na nejranější hodinu odběru krve.',
        group: 'Zjistit fakta',
      },
      {
        id: 'pra-chk-plan-gyn',
        text: 'Ověřit, jestli část kontrol může udělat gynekolog blíž k bydlišti',
        hint: 'U dojíždění to může ušetřit i polovinu cest.',
        group: 'Zjistit fakta',
      },
      {
        id: 'pra-chk-plan-narok',
        text: 'Zjistit u zaměstnavatele, jak se u vás vykazuje návštěva lékaře',
        hint: 'Ptejte se obecně, dřív než to budete potřebovat. Neprozradí to nic.',
        group: 'Zjistit fakta',
      },
      {
        id: 'pra-chk-plan-dny',
        text: 'Spočítat si zbývající dovolenou, náhradní volno a případné dny navíc',
        hint: 'Napište si čísla vedle sebe. Odhad z hlavy bývá optimističtější než skutečnost.',
        group: 'Zjistit fakta',
      },
      {
        id: 'pra-chk-plan-potvrzeni',
        text: 'Zeptat se na klinice na potvrzení o návštěvě bez uvedení diagnózy',
        hint: 'Vydávají ho běžně u přepážky. Vyžádejte si ho pokaždé, zpětně se shání hůř.',
        group: 'Zjistit fakta',
      },
      {
        id: 'pra-chk-plan-okno',
        text: 'Zablokovat si v kalendáři okno pro odběr a den po něm',
        hint: 'Blokujte celý týden. Zrušit blokaci jde vždycky, vytvořit ji na poslední chvíli ne.',
        group: 'Rozvrhnout',
      },
      {
        id: 'pra-chk-plan-transfer',
        text: 'Zablokovat si druhé okno pro transfer, tři až šest dní po odběru',
        hint: 'Přesný den určí vývoj embryí, dozvíte se ho jeden až dva dny předem.',
        group: 'Rozvrhnout',
      },
      {
        id: 'pra-chk-plan-hcg',
        text: 'Zapsat si do kalendáře odběr hCG a nechat za ním volnější odpoledne',
        hint: 'Je to jediný termín, který znáte dopředu. Nedávejte za něj důležitou schůzku.',
        group: 'Rozvrhnout',
      },
      {
        id: 'pra-chk-plan-rana',
        text: 'Domluvit posun začátku pracovní doby na období stimulace',
        hint: 'Často to vyřeší většinu kontrol beze změny objemu odpracovaného času.',
        group: 'Rozvrhnout',
      },
      {
        id: 'pra-chk-plan-mix',
        text: 'Rozdělit si termíny mezi dovolenou, návštěvu lékaře a home office',
        hint: 'Většina žen skončí u kombinace, ne u jednoho řešení.',
        group: 'Rozvrhnout',
      },
      {
        id: 'pra-chk-plan-rezerva',
        text: 'Nechat si rezervu dnů pro případ, že se cyklus zruší a začne znovu',
        hint: 'Vyčerpat celou dovolenou na první pokus se nevyplácí.',
        group: 'Rozvrhnout',
      },
      {
        id: 'pra-chk-plan-verze',
        text: 'Rozhodnout se, co v práci řeknete, a držet se jedné verze',
        hint: 'Rozhodnutí není doživotní, ale měnit ho uprostřed cyklu je vyčerpávající.',
        group: 'Domluvit',
      },
      {
        id: 'pra-chk-plan-osoba',
        text: 'Určit jednu osobu v práci, se kterou termíny řešíte',
        hint: 'Jeden adresát je lepší než tři. Ideálně někdo, kdo může rozhodnout.',
        group: 'Domluvit',
      },
      {
        id: 'pra-chk-plan-pisemne',
        text: 'Nechat si domluvený režim potvrdit písemně, aspoň zprávou',
        hint: 'Ústní příslib z léta se v listopadu pamatuje jinak.',
        group: 'Domluvit',
        optional: true,
      },
    ],
  },
]

export const pack: ContentPack = { items }
