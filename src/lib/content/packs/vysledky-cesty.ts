import type { ContentItem, ContentPack } from '../types'

/**
 * Výsledky, které nekončí pozitivním testem.
 *
 * Nejcitlivější balík v knihovně. Platí tu jedno pravidlo navíc: text nikdy
 * nezačíná plánem. Nejdřív se pojmenuje, co se stalo, a teprve pak. A jen
 * pokud to dává smysl. Se otevírá otázka, co může následovat.
 */

const items: ContentItem[] = [
  // ---------------------------------------------------------------------
  // A. Nemáme embryo k transferu
  // ---------------------------------------------------------------------
  {
    id: 'vc-zadne-embryo',
    kind: 'article',
    title: 'Když nezbylo žádné embryo',
    excerpt:
      'Telefonát, po kterém se cyklus zastaví dřív, než měl. Co se v laboratoři mohlo stát a co to znamená.',
    minutes: 8,
    phases: ['fertilization', 'embryo_culture'],
    topics: ['vysledky', 'ztrata', 'psychika'],
    level: 'essential',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    boost: 0.9,
    body: `## Co se právě stalo

Čekala jste, kdy vám z laboratoře řeknou termín transferu. Místo toho jste se dozvěděla, že přenášet není co.

Cyklus, do kterého jste dala injekce, ranní odběry, volno v práci, peníze a několik měsíců pozornosti, skončil o krok dřív, než jste čekala. Není potřeba tuhle zprávu zlehčovat tím, že „aspoň víme víc“. Ztratila jste možnost, se kterou jste počítala, a to je skutečná ztráta.

Zbytek textu vysvětluje, co se v laboratoři mohlo odehrát. Nemusíte to číst dnes. Bude tu i za týden.

## Kde se to mohlo zastavit

Cesta od odběru k embryu vhodnému k přenosu má několik kroků a zastavit se může na kterémkoli z nich.

### Nezískalo se zralé vajíčko

Při odběru se odsává obsah folikulů. Ne v každém folikulu ale vajíčko je a ne každé získané vajíčko je zralé. K oplodnění se dá použít jen vajíčko ve zralém stadiu. Počet folikulů na ultrazvuku proto nikdy nebyl slibem počtu vajíček a počet vajíček nebyl slibem počtu embryí.

### Nedošlo k oplodnění

Vajíčko a spermie se spojit nemusí, ani při klasickém IVF, ani po ICSI, kdy embryolog spermii do vajíčka zavádí. Někdy se oplodnění nezdaří u části vajíček, někdy u všech. Příčina může být na straně vajíčka, na straně spermie, nebo se ji nepodaří určit vůbec.

### Vývoj se zastavil

Embrya se v laboratoři sledují postupně od 1. do 6. dne vývoje. Zastavení může přijít kdykoli v průběhu. Druhý den, čtvrtý den, těsně před dosažením stadia blastocysty. Není to chyba v manipulaci; je to vývojová kapacita konkrétního embrya, která se v těchto dnech projeví.

### Žádné embryo nebylo vhodné k přenosu ani ke zmrazení

Někdy embrya vzniknou a vyvíjejí se, ale jejich stav neumožňuje přenos ani zmrazení. Kritéria se mezi pracovišti mírně liší a rozhoduje o nich embryolog na základě toho, co pod mikroskopem vidí. Zeptejte se, jaká kritéria použila právě vaše laboratoř. Máte na to nárok.

## Co se z toho dá a nedá vyčíst

Tenhle cyklus něco ukázal: jak vaše vaječníky reagovaly na dávku, kolik vajíček bylo zralých, jestli proběhlo oplodnění a jak dlouho embrya vydržela růst. To jsou konkrétní informace, se kterými lékař pracuje.

Neukázal ale, jak dopadne jiný cyklus s jiným protokolem. Jeden cyklus je jeden vzorek, ne konečná odpověď.

## Co bývá dalším krokem

Obvykle následuje konzultace, na které se probírá průběh stimulace, výsledky z laboratoře a to, co by se dalo v dalším cyklu nastavit jinak. Co konkrétně přichází v úvahu ve vaší situaci, řekne váš lékař. Záleží na věku, ovariální rezervě, spermiogramu, na tom, kolikátý cyklus to byl, i na tom, co jste ochotná podstoupit.

Rozhodnutí o dalším postupu nemusíte dělat dnes ani tento týden.

## Kdy se ozvat klinice

Jste krátce po odběru, takže platí varovné příznaky z tohoto období:

- rychle rostoucí obvod břicha, dušnost, výrazně snížené močení nebo prudký nárůst hmotnosti,
- prudká, narůstající bolest v podbřišku,
- horečka nad 38 °C,
- silné krvácení.

V těchto případech kontaktujte svou kliniku. Při náhlé prudké bolesti, závrati nebo kolapsu vyhledejte akutní lékařskou pomoc.

> Tento text popisuje obvyklé situace a nenahrazuje konzultaci s vaším lékařem. Konkrétní příčiny i další postup patří vaší klinice, která zná celý váš průběh.`,
  },
  {
    id: 'vc-otazky-na-embryologa',
    kind: 'article',
    title: 'Na co se zeptat embryologa',
    excerpt:
      'Laboratoř ví o vašem cyklu věci, které vám nikdo jiný neřekne. Tady je, na co se ptát a jak si odpovědi udržet.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    topics: ['klinika', 'vysledky'],
    level: 'comfort',
    hero: 'linen',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Proč se ptát právě laboratoře

Lékař vidí vaši stimulaci, hormony a ultrazvuky. Embryolog viděl samotná vajíčka a embrya. Na otázky typu „v jaké fázi se to zastavilo“ umí odpovědět jen laboratoř.

Na většině pracovišť je možné si rozhovor s embryologem vyžádat, i když se nekoná automaticky. Když vám ho nenabídnou, požádejte o něj. Není to nadstandard, je to informace o vaší léčbě.

## Než zavoláte

- Napište si otázky předem. Ve stresu si z rozhovoru odnesete zhruba třetinu.
- Poproste, jestli si můžete dělat poznámky a jestli si můžete odpovědi zapsat doslova.
- Pokud jde o telefonát, mějte u sebe papír. Zpětně si to nevybavíte.
- Není ostuda říct: „Tomuhle jsem nerozuměla, můžete to říct ještě jednou jinak?“

## Otázky k odběru a zralosti

1. Kolik vajíček se získalo a kolik z nich bylo zralých?
2. Jak se to liší od toho, co jste čekali podle ultrazvuku a hormonů?
3. Bylo na vajíčkách něco, co jste hodnotili jako nestandardní?

## Otázky k oplodnění

1. Jakou metodou se vajíčka oplodňovala a proč právě touto?
2. Kolik vajíček se oplodnilo?
3. Když se neoplodnilo žádné nebo jen málo. Co pro to podle vás mluví? Vajíčko, spermie, obojí, nebo se to určit nedá?
4. Byl vzorek spermií v den odběru srovnatelný s předchozími vyšetřeními?

## Otázky k vývoji embryí

1. Kolikátý den se vývoj u jednotlivých embryí zastavil?
2. Jak embrya vypadala v jednotlivých dnech, od prvního do posledního sledovaného?
3. Používáte kontinuální sledování v inkubátoru, nebo hodnocení v určitých časech?
4. Podle jakých kritérií jste rozhodovali o vhodnosti k přenosu a ke zmrazení?

## Otázky k dalšímu cyklu

1. Je něco, co byste z pohledu laboratoře v dalším cyklu dělali jinak?
2. Má u nás smysl zvažovat jiný způsob oplodnění nebo jiný postup kultivace? Co pro to mluví a co proti?
3. Existuje o dnešním cyklu písemná zpráva a mohu ji dostat?

## Co si z rozhovoru odnést domů

Poproste o kopii embryologického protokolu nebo aspoň o čísla: počet získaných vajíček, počet zralých, počet oplozených, den zastavení vývoje u jednotlivých embryí. Tahle čísla budete potřebovat na každé další konzultaci, i kdyby byla za rok a na jiném pracovišti.

> Odpovědi se mezi laboratořemi liší, protože se liší i postupy. To, co platí pro vás, řekne pracoviště, které váš cyklus vedlo.`,
  },
  {
    id: 'vc-otazky-na-lekare-pred-dalsim-cyklem',
    kind: 'article',
    title: 'Na co se zeptat lékaře před dalším cyklem',
    excerpt:
      'Konzultace po cyklu bez embrya trvá dvacet minut. Tady je, jak z nich dostat maximum.',
    minutes: 7,
    phases: ['fertilization', 'embryo_culture'],
    topics: ['klinika', 'vysledky'],
    level: 'comfort',
    hero: 'sand',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Co si připravit

Vezměte si s sebou napsané:

1. průběh stimulace. Jaké léky, jaké dávky, kolik dní,
2. hodnoty z kontrol, pokud je máte,
3. počet folikulů před odběrem,
4. čísla z laboratoře (získaná vajíčka, zralá, oplozená, den zastavení vývoje),
5. tři otázky, na které chcete odpověď, i kdyby na nic jiného nezbyl čas.

Ty tři otázky napište nahoru. Konzultace mají tendenci utéct k organizaci a termínům.

## Otázky k tomu, co se stalo

- Jak si vysvětlujete průběh tohoto cyklu?
- Reagovaly vaječníky tak, jak jste čekal, nebo jinak?
- Kde vidíte hlavní úzké místo. Počet vajíček, jejich zralost, oplodnění, nebo vývoj embryí?
- Je něco, co by mohlo naznačovat, že se to bude opakovat?

## Otázky k dalšímu cyklu

- Co byste v dalším cyklu změnil a proč?
- Jaké má ta změna očekávatelné dopady a jaká jsou její rizika?
- Kolik cyklů má v naší situaci smysl zkoušet, než přehodnotíme celý směr?
- Jak dlouhá pauza je z vašeho pohledu vhodná?

## Otázky k doplňujícím vyšetřením

- Je na místě zopakovat spermiogram nebo doplnit jeho rozšířené vyšetření?
- Doporučujete nějaká další vyšetření právě u nás? Co konkrétně by jejich výsledek změnil na postupu?
- Existují vyšetření, která se běžně nabízejí, ale ve vaší situaci by nic nezměnila?

Poslední otázka je důležitá. Nabídka doplňkových vyšetření a metod je široká a ne všechna mají dostatečně silné důkazy o přínosu. Je legitimní se ptát: „Co konkrétně by se změnilo, kdyby výsledek vyšel takhle, a co, kdyby vyšel jinak?“

## Otázky, na které se ptá málokdo

- Co všechno bude další cyklus stát a co z toho hradí pojišťovna?
- Kolik hrazených cyklů nám ještě zbývá?
- Kdy nejdřív můžeme začít a co všechno se musí stihnout předtím?
- Na koho se mám obrátit, když budu mít mezi konzultacemi otázku?

## Po konzultaci

Zapište si, co padlo, ještě v autě nebo v čekárně. Za dva dny si budete pamatovat dojem, ne obsah.

Pokud odcházíte s pocitem, že jste nedostala odpovědi, není nevěrnost požádat o druhý názor na jiném pracovišti. Většina lékařů to považuje za normální součást péče.

> Doporučení k dalšímu postupu vydává výhradně váš lékař, který zná vaši anamnézu i celý průběh cyklu.`,
  },
  {
    id: 'vc-neni-to-vase-vina',
    kind: 'article',
    title: 'Není to vaše vina',
    excerpt:
      'Vývojový potenciál embrya se rozhoduje dávno před cyklem. Ne v tom, co jste snědla, zvedla nebo si myslela.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    topics: ['psychika', 'ztrata'],
    level: 'comfort',
    hero: 'blush',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Seznam, který si teď v hlavě děláte

Skoro každá žena po neúspěšném cyklu prochází vlastní minulost jako vyšetřovatel. Ta káva. Ta cesta autem. Ta hádka. Ten den, kdy jsem si píchla injekci o dvacet minut později. Ta noc, kdy jsem nespala.

Je to pochopitelné. Hledání viny je pokus získat zpátky kontrolu nad něčím, co kontrolovat nešlo. Kdyby to byla vaše chyba, dalo by se to příště změnit. A to je snesitelnější než náhoda.

Ta úleva je ale falešná a stojí hodně.

## Kde se rozhoduje o potenciálu embrya

Vajíčko, které se v tomto cyklu odebralo, dozrávalo měsíce. Jeho základ vznikl ještě dřív. Vaječníky si zásobu vajíček nesou od doby, kdy jste sama byla plodem v děloze své matky.

Zásadní část toho, jestli bude mít embryo správnou chromozomální výbavu, se odehraje při dělení vajíčka a při spojení se spermií. Jde o proces, který probíhá na úrovni buňky a který nelze ovlivnit chováním v týdnech před odběrem ani v průběhu stimulace. Podíl vajíček s chromozomální odchylkou přirozeně roste s věkem. U všech žen, bez ohledu na životní styl.

Podobně platí, že spermie dozrávají zhruba tři měsíce. To, co se dělo minulý týden, na jejich výbavu vliv nemá.

## Co tedy ovlivnit jde

Nic z toho není bezvýznamné, ale ani jedno není důvod dnešního výsledku:

- neužívání kouření a alkoholu,
- rozumná hmotnost a strava,
- léčená štítná žláza a další chronické nemoci,
- pravidelné a včasné užívání předepsaných léků.

Tohle jsou podmínky, ve kterých léčba probíhá. Nejsou to páky, kterými se dá určit, kolik embryí vznikne.

## Věty, které nemusíte přijmout

Uslyšíte je od dobře míněných lidí a nemusíte na ně nijak reagovat:

- „Musíš se uvolnit.“
- „Kdyby sis tolik nepřipouštěla stres.“
- „Známý zná někoho, kdo…“

Stres a psychika nejsou důvodem, proč se embryo nevyvinulo. Kdyby to tak bylo, nikdo z lidí v těžkých životních situacích by nikdy neotěhotněl. A to zjevně neplatí.

## Co s tou vinou dělat

Nepřesvědčíte se logikou během jednoho večera. Co ale funguje: napsat ten seznam obvinění na papír a vedle každého napsat, co o něm skutečně víte. Většina položek nepřežije napsání.

A pokud vás obviňování drží týdny, přestává jít o vinu a začíná jít o vyčerpání. To je situace, se kterou umí pomoct psycholog se zkušeností s reprodukční medicínou.

> Tento text nehodnotí vaši konkrétní situaci. Otázku možných příčin proberte se svou klinikou.`,
  },

  // ---------------------------------------------------------------------
  // B. Zrušený transfer
  // ---------------------------------------------------------------------
  {
    id: 'vc-zruseny-transfer',
    kind: 'article',
    title: 'Když se transfer zruší',
    excerpt:
      'Den, na který jste se chystala, se nekoná. Nejčastější důvody a co znamenají pro váš cyklus.',
    minutes: 8,
    phases: ['transfer'],
    topics: ['klinika', 'vysledky', 'psychika'],
    level: 'essential',
    hero: 'taupe',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    boost: 0.8,
    body: `## Nejdřív to, co nikdo neřekne nahlas

Zrušený transfer se ve statistikách nepočítá jako ztráta. Ve vašem životě ale ano. Měla jste v kalendáři den, měla jste připravené volno, měla jste v hlavě představu, jak ten večer bude vypadat. To všechno se právě smazalo, často během jednoho telefonátu.

Zklamání, vztek a pocit prázdna jsou přiměřená reakce. Nemusíte je hned překlápět do „aspoň to udělali zodpovědně“, i kdyby to byla pravda.

## Proč se transfer ruší

Odložení transferu bývá rozhodnutí ve prospěch bezpečí nebo ve prospěch lepších podmínek. Konkrétní důvod vám sdělí vaše klinika; nejčastěji jde o některý z těchto.

### Stav endometria

Sliznice se nemusí připravit tak, jak se čekalo. Může být tenčí, nerovnoměrná, nebo naopak nese nález, který je potřeba nejdřív objasnit. Přenos do sliznice, která není připravená, se obvykle nepovažuje za dobré řešení.

### Hormonální hladiny

Před transferem se často sleduje progesteron, estradiol a další hodnoty. Když neodpovídají očekávanému průběhu, může to znamenat, že by embryo bylo přeneseno v nevhodném okně. Kryokonzervace umožňuje počkat na cyklus s lepší souhrou.

### Riziko OHSS

Po silnější reakci na stimulaci může být riziko ovariálního hyperstimulačního syndromu vyšší. Těhotenství v takové situaci může průběh zhoršit. Odložení transferu a zmrazení embryí je v tomto případě běžný postup, jak riziko snížit.

### Váš zdravotní stav

Horečka, infekce, akutní onemocnění nebo nález, který vyžaduje nejdřív léčbu. To všechno může transfer odsunout. Někdy jde o dny, jindy o cyklus.

### Vývoj embryí

Někdy se rozhodnutí opře o laboratoř: embrya se vyvíjejí jinak, než se čekalo, a přenos se posune o den, změní se plán, nebo se přenos v tomto cyklu neuskuteční vůbec.

### Organizační a technické důvody

Bývá to nejvíc frustrující varianta. Změna programu laboratoře, nedostupnost lékaře, technický problém. I tady platí, že přenos se posouvá, ne ruší napořád.

## Co zrušení znamená pro cyklus

Většinou to neznamená konec cyklu. Jeden IVF cyklus může mít víc transferů. Čerstvý i následné kryotransfery z embryí zamrazených ve stejném cyklu. Když se čerstvý přenos odloží, zásoba embryí zůstává a přenos se plánuje do některého z dalších cyklů.

Jak dlouhá pauza to bude a co všechno se do ní vejde, řekne vaše klinika. Záleží na důvodu odložení.

## Co s tímhle dnem

Nemusíte být hned praktická. Ale jedna praktická věc se hodí ještě dnes: zapište si, co přesně vám řekli. Datum, důvod, jméno člověka, který volal, a co se má stát dál. Za týden si z toho budete pamatovat jen tón hlasu.

## Kdy kontaktovat kliniku

- rychle rostoucí obvod břicha, dušnost, výrazně snížené močení nebo prudký nárůst hmotnosti,
- prudká bolest v podbřišku,
- horečka nad 38 °C.

Při náhlé prudké bolesti, kolapsu nebo dušnosti vyhledejte akutní lékařskou pomoc.

> Důvod odložení i další plán patří vaší klinice. Tento text popisuje obvyklé situace, ne vaši konkrétní.`,
  },
  {
    id: 'vc-co-se-stane-s-embryem',
    kind: 'article',
    title: 'Co se stane s embryem',
    excerpt:
      'Když se transfer odloží, embrya nikam nemizí. Jak funguje zmrazení, skladování a plánování dalšího přenosu.',
    minutes: 6,
    phases: ['transfer'],
    topics: ['klinika', 'vysledky'],
    level: 'comfort',
    hero: 'sky',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Kryokonzervace

Embrya, která laboratoř vyhodnotí jako vhodná ke zmrazení, se ukládají metodou velmi rychlého zmrazení, takzvané vitrifikace. Uchovávají se v tekutém dusíku při stabilní velmi nízké teplotě, kde biologické procesy prakticky stojí.

Doba skladování sama o sobě nezhoršuje stav embrya. To, co rozhoduje, je stav embrya před zmrazením a to, jak proběhne rozmrazení.

## Co se děje při rozmrazení

Před plánovaným přenosem se embryo rozmrazí a laboratoř zkontroluje, jak zmrazení a rozmrazení přečkalo. Většina embryí tento krok zvládne, ale ne všechna. A to je informace, kterou byste měla mít dopředu, aby vás v den přenosu nepřekvapila.

Zeptejte se své laboratoře, jaká je jejich vlastní zkušenost s přežíváním embryí po rozmrazení a kolik embryí obvykle rozmrazují najednou.

## Odložení bez zmrazení

Někdy se přenos jen posune o den nebo dva v rámci probíhající kultivace, například když se embrya vyvíjejí jinak, než se čekalo. V takovém případě ke zmrazení nedojde a přenos se uskuteční v tomtéž cyklu.

## Co znamená „zásoba embryí“

Embrya zamrazená v jednom cyklu se dají použít pro víc přenosů. Jeden IVF cyklus tak nemusí znamenat jeden transfer. Z jednoho odběru může vzejít čerstvý přenos i několik následných kryotransferů. Když se čerstvý přenos odloží, zásoba zůstává nedotčená.

## Praktické věci, které se snadno přehlédnou

- Jak dlouho máte skladování zaplacené a kdy se platí znovu.
- Co se stane, když platba propadne, a jak vás na to klinika upozorní.
- Jaký souhlas jste podepsali a co se v něm píše o nakládání s embryi.
- Kdo z vás dvou musí být u dalších kroků přítomen nebo podepsat.
- Jestli se embrya dají převézt na jiné pracoviště a za jakých podmínek.

Tohle jsou otázky, které v den zrušeného transferu nikdo neřeší a které se pak řeší ve spěchu. Napište je na papír a zeptejte se při nejbližší příležitosti.

## Kdy se plánuje další přenos

Termín závisí na důvodu odložení, na vašem cyklu a na programu pracoviště. Někdy je to hned následující cyklus, jindy je potřeba nejdřív něco doléčit nebo dovyšetřit. Přesný plán patří vaší klinice.

> Podmínky skladování, ceny a právní náležitosti se mezi pracovišti liší. Vždy platí smlouva a souhlas, které jste podepsali u sebe na klinice.`,
  },
  {
    id: 'vc-otazky-po-zrusenem-transferu',
    kind: 'article',
    title: 'Otázky na kliniku po zrušeném transferu',
    excerpt:
      'Seznam, který si můžete otevřít při telefonátu. Ať nezůstane nic nedořečené.',
    minutes: 5,
    phases: ['transfer'],
    topics: ['klinika'],
    level: 'comfort',
    hero: 'pearl',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Než začnete

Když volali oni, byla jste zaskočená a nejspíš jste se nezeptala na nic. To je normální. Zavolat zpátky s otázkami je běžná věc a nikoho tím neobtěžujete.

Mějte u sebe papír a rovnou si píšte odpovědi.

## Proč se přenos nekonal

1. Jaký byl konkrétní důvod odložení?
2. Byl to důvod na straně mého těla, embryí, nebo organizační?
3. Je to něco, co se může opakovat i příště?
4. Je někde tento důvod zapsaný ve zprávě, kterou mohu dostat?

## Co se stalo s embryi

1. Kolik embryí bylo zmrazeno a v jakém stadiu vývoje?
2. Zůstává něco v kultivaci, nebo je cyklus z pohledu laboratoře uzavřený?
3. Kde jsou embrya uložená a jak dlouho mám skladování zaplacené?

## Co bude dál

1. Kdy nejdřív se dá plánovat další přenos?
2. Co se do té doby musí stát. Vyšetření, léčba, jeden cyklus pauzy?
3. Jaká příprava sliznice se bude používat a proč právě ta?
4. Kdo mi dá termín a kdy se mám ozvat?

## Léky a peníze

1. Co mám dělat s léky, které právě užívám? Pokračovat, snížit, vysadit?
2. Kdy se dá čekat menstruace a co s ní mám udělat, komu volat?
3. Co se stane s léky, které mám doma a nespotřebovala jsem je?
4. Ovlivňuje zrušený přenos to, kolik hrazených cyklů nám zbývá?

O vysazení nebo změně jakýchkoli léků rozhoduje výhradně lékař. Nevysazujte nic na základě informací z internetu ani z diskuzí.

## Otázka, na kterou se zapomíná

„Je něco, co byste na mém místě chtěl vědět a na co jsem se nezeptala?“

Někdy z ní vypadne ta nejužitečnější věta celého hovoru.

> Postupy a lhůty se mezi pracovišti liší. Platí to, co vám řekne vaše klinika.`,
  },

  // ---------------------------------------------------------------------
  // C. Negativní hCG
  // ---------------------------------------------------------------------
  {
    id: 'vc-dnes-to-nevyslo',
    kind: 'article',
    title: 'Dnes to nevyšlo',
    excerpt: 'Text na dnešek. Bez plánů, bez rad a bez vět, které nechcete slyšet.',
    minutes: 6,
    phases: ['waiting_next_attempt'],
    topics: ['ztrata', 'psychika'],
    level: 'essential',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    boost: 1,
    body: `## Přišel výsledek

Čekala jste dva týdny a máte odpověď, kterou jste nechtěla.

Tohle je konec něčeho konkrétního. Ne abstraktní pravděpodobnosti, ale toho těhotenství, které jste si v duchu dovolila. Většina žen si během čekání představí termín porodu, počítá, do kterého ročníku by dítě šlo, přemýšlí, komu to řekne první. To všechno bylo skutečné a dnes to skončilo.

Není potřeba to zmenšovat. Nikdo vás nemusí přesvědčovat, že to nebylo „opravdové“ těhotenství. Ztratila jste to, co jste čekala.

## Co je normální dnes cítit

- Nic. Otupělost je běžná první reakce a neznamená, že vám to je jedno.
- Vztek. Na tělo, na kliniku, na těhotné kamarádky, na svět.
- Úlevu, že skončilo čekání. I ta se objevuje a není za ni potřeba se stydět.
- Stud, jako byste selhala. Tenhle pocit je častý a není pravdivý.
- Všechno najednou a během jedné hodiny.

## Věty, které dnes uslyšíte

Lidé kolem vás budou chtít pomoct a řeknou věci, které nepomůžou. Nemusíte na ně nijak reagovat, nemusíte se usmívat a nemusíte je nikomu vysvětlovat.

Nemusíte být silná. Nemusíte být vděčná za zkušenost. Nemusíte hned mluvit o dalším pokusu.

## Co dnes stačí

Napít se. Najíst se, i když nechcete. Říct jednomu člověku, že to nevyšlo, a nechat ho, ať je s vámi. Zrušit, co jde zrušit. Jít spát dřív.

To je celý dnešní seznam.

## Až budete chtít vědět, co dál

Až budete chtít (dnes, za týden, nikdy) je dobré vědět tohle.

**S léky nic nedělejte sama.** Progesteron a další podpora se vysazují podle pokynu lékaře, ne podle výsledku testu. Zavolejte na kliniku a zeptejte se, co s medikací.

**Menstruace obvykle přijde během několika dní po vysazení podpory**, často silnější než jindy. Když nepřijde do doby, kterou vám klinika řekla, ozvěte se.

**Konzultace bývá za několik týdnů.** Není potřeba na ni myslet dnes. Až přijde čas, pomůže mít připsaná čísla z tohoto cyklu.

**Rozhodnutí o dalším postupu nemusíte dělat teď.** Rozhodnutí z prvních dnů po neúspěchu bývají udělaná ze zoufalství nebo ze vzdoru a málokdy vydrží.

## Kdy volat kliniku

- silné krvácení, silnější než běžná menstruace nebo se sraženinami,
- prudká, narůstající bolest v podbřišku, zvlášť jednostranná,
- horečka nad 38 °C,
- menstruace, která nepřišla v očekávané době.

Při náhlé prudké bolesti, závrati nebo kolapsu vyhledejte akutní lékařskou pomoc.

> Tento text nenahrazuje péči vaší kliniky. S léky, výsledky a dalším postupem se obracejte na svého lékaře.`,
  },
  {
    id: 'vc-co-se-da-vycist-z-neuspesneho-transferu',
    kind: 'article',
    title: 'Co se dá z neúspěšného transferu vyčíst a co ne',
    excerpt:
      'Poctivá odpověď na otázku „proč se nezahnízdilo“. Včetně toho, kde odpověď neexistuje.',
    minutes: 7,
    phases: ['waiting_next_attempt'],
    topics: ['vysledky', 'klinika'],
    level: 'comfort',
    hero: 'linen',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Otázka, kterou si klade každá

Proč se to nezahnízdilo? Byla to sliznice? Embryo? Něco, co jsem udělala?

Poctivá odpověď zní, že po jednom neúspěšném přenosu se to obvykle určit nedá. Ne proto, že by se nikdo nesnažil, ale proto, že implantace je proces, do kterého nevidíme. Neexistuje vyšetření, které by po přenosu ukázalo, v jakém okamžiku a proč se embryo neuchytilo.

## Co tenhle cyklus opravdu ukázal

Ne všechno je neznámé. Cyklus dodal konkrétní data:

- jak vaše vaječníky reagovaly na použitý protokol a dávku,
- kolik vajíček bylo zralých a kolik se jich oplodnilo,
- jak se embrya vyvíjela v jednotlivých dnech,
- jak se připravila sliznice a jaké byly hormonální hodnoty před přenosem,
- jak technicky proběhl samotný přenos, jestli byl hladký nebo obtížný,
- jak jste snášela medikaci.

To jsou stavební kameny pro rozhodování o dalším postupu. Nejsou to odpovědi na otázku „proč“, ale jsou to informace, které lékař používá.

## Co se z jednoho neúspěchu vyčíst nedá

- Že máte „problém se zahnízděním“. Jeden neúspěšný přenos je v rámci běžných čísel a sám o sobě žádnou diagnózu nezakládá.
- Že jsou vaše embrya špatná. Vzhled embrya pod mikroskopem s chromozomální výbavou souvisí jen zčásti.
- Že by pomohlo konkrétní vyšetření nebo metoda. To se posuzuje podle celé anamnézy, ne podle jednoho výsledku.
- Že se to bude opakovat.

## Proč se embryo nemusí uchytit

Nejčastěji se uvádí chromozomální výbava embrya. Část embryí, která vypadají pod mikroskopem dobře, nese odchylku neslučitelnou s dalším vývojem. Podíl takových embryí přirozeně roste s věkem ženy v době odběru vajíček.

Roli může hrát i stav sliznice, načasování přenosu vůči okně vnímavosti, prostředí dělohy nebo faktory, které zatím neumíme popsat. U konkrétní ženy se ale obvykle nedá říct, který z těchto faktorů rozhodl.

## Kdy se začíná pátrat víc

Rozsáhlejší vyšetřování se obvykle zvažuje až po opakovaných neúspěšných přenosech kvalitních embryí, ne po prvním. Kde přesně je ta hranice, se mezi pracovišti liší a záleží na individuální situaci. Na věku, počtu embryí, jejich stadiu a na tom, jestli byla geneticky testována.

## Co s tím prakticky

Zapište si čísla z tohoto cyklu, dokud je máte po ruce. Na konzultaci se vás na ně zeptají a papír je spolehlivější než paměť.

A počítejte s tím, že „nevíme proč“ může být upřímná odpověď, ne nedbalost. Lékař, který ji řekne, s vámi jedná poctivě.

> Interpretace vašich konkrétních výsledků patří vašemu lékaři, který zná celý průběh léčby.`,
  },
  {
    id: 'vc-konzultace-po-neuspechu',
    kind: 'article',
    title: 'Konzultace po neúspěchu: jak se na ni připravit',
    excerpt:
      'Dvacet minut, na které jste čekala tři týdny. Jak z nich odejít s odpověďmi místo pocitů.',
    minutes: 7,
    phases: ['waiting_next_attempt'],
    topics: ['klinika', 'vysledky'],
    level: 'comfort',
    hero: 'sand',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Proč se připravovat

Konzultace po neúspěšném cyklu má dvě vlastnosti: je krátká a je emočně nabitá. Většina žen z ní odchází s pocitem, že se nezeptala na to hlavní.

Příprava tenhle problém řeší lépe než odhodlání. Papír v ruce vydrží i ve chvíli, kdy vám je do pláče.

## Co si vzít s sebou

1. Přehled cyklu. Protokol, dávky, počet dní stimulace.
2. Čísla z laboratoře: získaná vajíčka, zralá, oplozená, vývoj embryí po dnech, kolik embryí bylo zmrazeno.
3. Údaje o přenosu: datum, stadium přeneseného embrya, jak přenos technicky proběhl.
4. Hodnoty před přenosem, pokud je máte.
5. Datum a výsledek odběru hCG z krve.
6. Seznam léků, které jste užívala.
7. Tři otázky napsané nahoře, velkými písmeny.

## Otázky k tomu, co se stalo

- Jak si vysvětlujete průběh tohoto cyklu?
- Bylo něco, co vás v průběhu překvapilo?
- Byl přenos technicky bez obtíží?
- Vidíte v mém případě něco, co stojí za to ověřit?

## Otázky k dalšímu postupu

- Co byste změnil a proč?
- Jaké možnosti přicházejí v úvahu a jaké jsou u každé výhody a nevýhody?
- Máme použít zamrazená embrya, nebo připravit nový cyklus? Co pro kterou variantu mluví?
- Jak dlouhá pauza je vhodná?

## Otázky k vyšetřením a metodám

- Doporučujete nějaké doplňující vyšetření? Co konkrétně by jeho výsledek změnil?
- Jak silné jsou důkazy o přínosu toho, co navrhujete?
- Existuje něco, co si můžeme zaplatit navíc, ale co by podle vás v naší situaci nic nezměnilo?

Poslední otázka je legitimní a dobrý lékař na ni odpoví bez urážky. Nabídka doplňkových metod v reprodukční medicíně je široká a u části z nich jsou důkazy o přínosu slabé.

## Praktická pravidla pro samotný rozhovor

- Jděte ve dvou, pokud to jde. Druhý člověk slyší jiné věty než vy.
- Poproste, jestli si můžete psát.
- Když něčemu nerozumíte, řekněte to hned. Termíny se během konzultace nabalují.
- Na konci si shrňte nahlas, co jste pochopila, a nechte si to potvrdit.
- Zeptejte se, kdo je kontaktní osoba pro otázky mezi konzultacemi.

## Když odejdete zklamaná

Stává se to. Někdy proto, že odpověď zněla „nevíme“, jindy proto, že jste čekala víc času. Druhý názor na jiném pracovišti je běžná a legitimní věc a nemusíte kvůli němu měnit kliniku.

> Doporučení k dalšímu postupu vydává výhradně váš lékař na základě celé vaší anamnézy.`,
  },
  {
    id: 'vc-kryotransfer-nebo-novy-cyklus',
    kind: 'article',
    title: 'Kdy má smysl další kryotransfer a kdy nový cyklus',
    excerpt:
      'Přehled toho, co lékař při tomto rozhodování zvažuje. Bez doporučení. Rozhodnutí patří vám a vaší klinice.',
    minutes: 7,
    phases: ['waiting_next_attempt'],
    topics: ['klinika', 'vysledky'],
    level: 'comfort',
    hero: 'sky',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Dvě různé otázky

Po neúspěšném přenosu stojí v cestě dvě rozhodnutí, která se často míchají dohromady:

1. Použít embrya, která už máte zamrazená?
2. Nebo připravit nový cyklus se stimulací a odběrem?

Nejde o lepší a horší variantu. Jde o dvě různé situace s různým smyslem.

## Připomínka, která se hodí

Jeden IVF cyklus není totéž co jeden transfer. Z jednoho odběru vajíček může vzejít čerstvý přenos i několik následných kryotransferů z embryí zamrazených ve stejném cyklu. Když mluvíte o „dalším pokusu“, je dobré si ujasnit, jestli myslíte další přenos, nebo celý nový cyklus. Pro plánování, peníze i pro tělo je to zásadní rozdíl.

## Co lékař zvažuje u dalšího kryotransferu

- **Kolik embryí máte zamrazených a v jakém stadiu.** Zásoba je hlavní vstupní informace.
- **Jak byla embrya hodnocena** a jestli prošla genetickým testováním.
- **Jak proběhl předchozí přenos**: jestli byl technicky hladký, jak vypadala sliznice, jaké byly hormonální hodnoty.
- **Jestli je co změnit v přípravě sliznice.** Existuje víc způsobů přípravy a přechod mezi nimi je běžná úvaha.
- **Váš zdravotní stav a čas.** Kryotransfer bývá pro tělo méně zatěžující než celý cyklus se stimulací.

## Co lékař zvažuje u nového cyklu

- **Že zamrazená embrya došla** nebo jich zbývá málo.
- **Váš věk a ovariální rezervu**, tedy jestli má smysl s dalším odběrem čekat.
- **Co ukázal předchozí cyklus**: reakci na stimulaci, počet zralých vajíček, průběh oplodnění a vývoje embryí.
- **Jestli se má něco změnit v protokolu** nebo ve způsobu oplodnění.
- **Jestli má smysl zvažovat genetické testování embryí.** Tady záleží na individuální situaci; není to postup vhodný pro každou ženu a jeho přínos se posuzuje případ od případu.
- **Vaši psychickou a fyzickou kapacitu.** Stimulace je náročnější než příprava na kryotransfer.

## Co do rozhodování patří kromě medicíny

- Kolik hrazených cyklů vám zbývá a kolik jich chcete vyčerpat.
- Kolik peněz jste ochotni dát a kde je vaše hranice.
- Kolik volna v práci se dá ještě vzít.
- Kolik toho unesete v příštích měsících.

Tohle nejsou vedlejší okolnosti. Pro řadu párů jsou rozhodující a je v pořádku o nich mluvit nahlas i před lékařem.

## Otázka na konzultaci

„Kdybychom měli udělat jen jednu z těch dvou věcí v příštím půlroce, kterou byste v naší situaci zvažoval jako první a proč?“

Tahle formulace pomáhá dostat konkrétní odpověď místo obecného přehledu možností.

> Tento text popisuje, co se do rozhodování obvykle promítá. Nedoporučuje žádný postup. Rozhodnutí patří vám a vašemu lékaři, který zná vaši situaci.`,
  },

  // ---------------------------------------------------------------------
  // D. Biochemické těhotenství
  // ---------------------------------------------------------------------
  {
    id: 'vc-co-je-biochemicke-tehotenstvi',
    kind: 'article',
    title: 'Co je biochemické těhotenství',
    excerpt:
      'Těhotenství, které skončilo dřív, než ho bylo možné zobrazit. Co ten pojem znamená a co neznamená.',
    minutes: 6,
    phases: ['loss_biochemical'],
    topics: ['ztrata', 'vysledky'],
    level: 'essential',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    boost: 0.9,
    body: `## Co ten pojem znamená

Biochemické těhotenství znamená, že k otěhotnění došlo. Embryo se uchytilo natolik, že začalo tvořit hCG, a ten se objevil v krvi nebo na domácím testu. Těhotenství se pak ale zastavilo velmi brzy. Dřív, než by bylo možné na ultrazvuku cokoli zobrazit.

Slovo **biochemické** popisuje jedinou věc: že jediným dokladem byla laboratorní hodnota, ne obrázek. Neříká nic o tom, jak dlouho jste na to těhotenství čekala ani jak moc vám teď chybí.

## Jak se pozná

Obvykle podle průběhu hodnot hCG. Po pozitivním testu následují kontrolní odběry a hodnota buď neroste tak, jak by se očekávalo, nebo začne klesat. Klinika obvykle pokračuje v odběrech, dokud hodnota neklesne pod měřitelnou mez.

Rychlost růstu i poklesu se liší podle toho, jak vysoko hodnota vystoupala, a podle typu léčby. Srovnávat vlastní čísla s tabulkami z diskuzí nemá smysl. Interpretace patří vašemu lékaři.

## Jak často se to stává

Velmi časné ztráty jsou v reprodukční medicíně i v přirozeném početí častější, než se veřejně mluví. Řada z nich při přirozeném početí projde nepovšimnutě jako opožděná menstruace. V léčbě je vidíte proto, že se testuje časně a přesně.

To neznamená, že by se s tím mělo počítat jako s běžnou událostí ve vašem životě. Znamená to jen, že v tom nejste sama a že to samo o sobě nezakládá diagnózu.

## Co se obvykle uvádí jako příčina

Nejčastěji se hovoří o chromozomální výbavě embrya, tedy o odchylce, která je neslučitelná s dalším vývojem. Bývá to náhodná událost, ne něco, co by se dalo předvídat nebo ovlivnit.

Roli mohou hrát i další faktory, ale u jednotlivé ženy se konkrétní příčina obvykle určit nedá. Po jedné takové ztrátě se rozsáhlé vyšetřování zpravidla nezahajuje.

## Jak to probíhá fyzicky

Většinou přijde krvácení podobné menstruaci nebo o něco silnější, často s křečemi v podbřišku. Může přijít se zpožděním několika dní, zvlášť pokud užíváte podporu luteální fáze.

**O vysazení jakýchkoli léků rozhoduje váš lékař.** Nevysazujte progesteron ani nic jiného podle testu nebo podle rady z internetu.

## Kdy kontaktovat kliniku

- silné krvácení. Prosáknutí velké vložky za hodinu, a takto dvě hodiny po sobě,
- prudká nebo narůstající bolest v podbřišku, zvlášť jednostranná,
- horečka nad 38 °C nebo zapáchající výtok,
- hodnoty hCG, které podle kontrolních odběrů neklesají.

Při bolesti v rameni, závrati, mdlobě nebo kolapsu vyhledejte akutní lékařskou pomoc. Může jít o příznaky mimoděložního těhotenství.

> Tento text popisuje obvyklý průběh a nenahrazuje péči vaší kliniky. Vaše konkrétní hodnoty a postup patří vašemu lékaři.`,
  },
  {
    id: 'vc-hcg-stoupne-a-pak-klesne',
    kind: 'article',
    title: 'Když hCG stoupne a pak klesne',
    excerpt:
      'Proč se odběry opakují, co lékař v číslech sleduje a kdy to skončí.',
    minutes: 6,
    phases: ['loss_biochemical'],
    topics: ['vysledky', 'ztrata'],
    level: 'comfort',
    hero: 'taupe',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Proč vás klinika nepustí hned

Je to zvláštní forma krutosti: těhotenství skončilo a vy dál jezdíte na odběr hCG z krve, sedíte v čekárně a necháváte si píchat do žíly kvůli číslu, které chcete vidět co nejnižší.

Má to praktický důvod. Dokud je v těle měřitelné hCG, chová se tělo, jako by těhotenství trvalo. A dokud lékař nevidí spolehlivý pokles, nemůže s jistotou vyloučit, že někde nezůstala aktivní tkáň. V děloze nebo mimo ni.

## Co se v číslech sleduje

Nejde o jedno číslo, jde o trend mezi odběry.

- **Klesající hodnota** je to, co se v této situaci očekává. Z nižších hodnot klesá rychleji, z vyšších to trvá déle.
- **Stagnující hodnota** obvykle znamená, že se odběr zopakuje a doplní se ultrazvuk. Nemusí to znamenat nic dramatického, ale je to signál, že se je potřeba dívat dál.
- **Rostoucí hodnota** po zaznamenané ztrátě vede k dalšímu vyšetření. Hledá se především mimoděložní uložení.

Nesrovnávejte své hodnoty s tabulkami z fór. Bez znalosti vašeho cyklu, typu léčby a předchozích odběrů ta čísla nic neznamenají.

## Jak dlouho to trvá

Poctivá odpověď: různě. Od několika dní po několik týdnů, podle toho, jak vysoko hodnota vystoupala.

Zeptejte se konkrétně: „Jaká hodnota u vás znamená, že už chodit nemusím?“ Mít cíl je snesitelnější než chodit donekonečna.

## Léky

Progesteron, estrogeny, injekce, cokoli z vašeho protokolu. O vysazení rozhoduje výhradně lékař. Vysazení na vlastní pěst může krvácení uspíšit, ale také zamlžit obraz, podle kterého se rozhoduje o dalším postupu.

Pokud vám nikdo neřekl, co s léky, zavolejte a zeptejte se. To není obtěžování, to je součást péče.

## Co si zapsat

Zapište si datum pozitivního testu, všechny hodnoty hCG s daty odběrů, datum a charakter krvácení a datum vysazení léků. Na kontrole se vás na to zeptají a vy si to nebudete pamatovat.

## Kdy kontaktovat kliniku

- silné krvácení nebo krvácení se sraženinami,
- prudká, narůstající nebo jednostranná bolest v podbřišku,
- horečka nad 38 °C,
- hodnoty, které neklesají nebo rostou.

Při bolesti v rameni, závrati nebo kolapsu vyhledejte akutní lékařskou pomoc.

> Interpretace vašich hodnot a rozhodnutí o léčbě patří vašemu lékaři.`,
  },
  {
    id: 'vc-vase-ztrata-je-skutecna',
    kind: 'article',
    title: 'Vaše ztráta je skutečná',
    excerpt:
      'O tom, proč se velmi časná ztráta zlehčuje a proč to nemusíte přijmout.',
    minutes: 5,
    phases: ['loss_biochemical'],
    topics: ['ztrata', 'psychika'],
    level: 'comfort',
    hero: 'blush',
    publishedOn: '2026-08-02',
    body: `## Věta, kterou potřebujete slyšet

Pozitivní test byl skutečný. Vaše ztráta je skutečná.

Nepotřebuje to potvrzení ultrazvukem, počtem týdnů ani souhlasem okolí.

## Proč to okolí zlehčuje

Protože nikdo kromě vás to těhotenství neviděl. Nebyl snímek, nebylo bříško, nebyl termín porodu na papíře. Lidé kolem vás nemají o co opřít soustrast, a tak sáhnou po tom, co znají: „aspoň víš, že to jde“, „vždyť to bylo hrozně brzo“, „to se stává“.

Většina z toho není zlá vůle. Je to bezradnost. To ale neznamená, že to musíte poslouchat vděčně.

## Co jste ztratila

Ne shluk buněk. Ztratila jste budoucnost, kterou jste si za jedno odpoledne dovolila představit. Jméno, Vánoce, pokoj, obličej. Ta představa vznikla v okamžiku, kdy se objevila druhá čárka, a byla úplná.

Truchlení se neměří v týdnech ani v milimetrech.

## Že jste čekala roky

Časná ztráta po IVF má něco navíc: nepředcházely jí dva týdny nejistoty, ale měsíce nebo roky léčby. Zklamání se tedy nepočítá od pozitivního testu, ale od chvíle, kdy jste s tím vším začala.

Proto je legitimní, když je vaše reakce silnější, než by čekal někdo zvenčí.

## Co teď nemusíte

- Nemusíte být vděčná za informaci, že „to jde“.
- Nemusíte to nikomu vysvětlovat ani obhajovat.
- Nemusíte to hned pojmenovávat jako zkušenost, ze které něco máte.
- Nemusíte se rozhodovat o dalším pokusu.
- Nemusíte být v pořádku do konce týdne.

## Co občas pomáhá

Říct to nahlas jednomu člověku, který nebude nabízet řešení. Zapsat si datum. Dát tomu jméno, které používáte jen vy. Zrušit, co jde zrušit. Jít ven.

Nic z toho není povinnost. Je to nabídka, ke které se můžete vrátit, až budete chtít.

## Kdy vyhledat odbornou pomoc

Když po několika týdnech nejste schopná fungovat v běžném dni, nespíte, nejíte, nemůžete pracovat, nebo se objeví myšlenky na to, že už tu nechcete být. Obraťte se na psychologa nebo psychiatra. Nejlépe na někoho se zkušeností s reprodukční medicínou. Není to slabost a není to nadstandard.

Při akutních myšlenkách na sebepoškození vyhledejte akutní lékařskou pomoc.

> Tento text je psychická podpora, ne lékařská péče. Zdravotní otázky patří vaší klinice.`,
  },
  {
    id: 'vc-biochemicke-co-muze-nasledovat',
    kind: 'article',
    title: 'Co může následovat',
    excerpt:
      'Praktický přehled toho, co bývá po velmi časné ztrátě dál. Až budete chtít vědět.',
    minutes: 6,
    phases: ['loss_biochemical'],
    topics: ['ztrata', 'klinika'],
    level: 'comfort',
    hero: 'pearl',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Nejbližší dny

Klinika obvykle sleduje pokles hCG do doby, než hodnota klesne pod měřitelnou mez. Zároveň dostanete pokyn, jak naložit s medikací. A ten pokyn je závazný, i kdyby se lišil od toho, co jste četla jinde.

Krvácení bývá podobné menstruaci nebo silnější a může přijít se zpožděním. Bolestivost v podbřišku bývá výraznější než u běžné menstruace.

## Návrat cyklu

První menstruace po ztrátě bývá jiná. Dřív, později, silnější, delší. Cyklus se obvykle během jednoho až dvou měsíců srovná. Kdy přesně, se u jednotlivých žen liší.

Zeptejte se své kliniky, kterou menstruaci mají brát jako první a od které se počítá plánování dalšího kroku.

## Kdy se dá pokračovat

Odstup před dalším přenosem nebo cyklem určuje klinika. Zvažuje se při tom pokles hCG, návrat menstruace, váš zdravotní stav a to, jestli je potřeba něco doplnit. U části žen je pauza kratší, u jiné delší; záleží na individuální situaci.

Časový plán si nechte potvrdit konkrétně, ne obecně. „Za nějakou dobu“ se špatně žije.

## Jestli budou nějaká vyšetření

Po jedné velmi časné ztrátě se rozsáhlé vyšetřování obvykle nezahajuje, protože jde o situaci, která se může přihodit i bez zjistitelné příčiny. To, co se zvažuje po opakovaných ztrátách, je jiná otázka a řeší se samostatně.

Pokud vám nějaká vyšetření nabídnou, ptejte se: co konkrétně by se změnilo na postupu, kdyby výsledek vyšel takto, a co, kdyby vyšel jinak.

## Co si připravit na kontrolu

1. datum posledního transferu a stadium přeneseného embrya,
2. všechny hodnoty hCG s daty odběrů,
3. datum a charakter krvácení,
4. seznam léků a datum vysazení,
5. tři otázky, které chcete mít zodpovězené.

## Otázky, které stojí za to položit

- Považujete to, co se stalo, za náhodnou událost, nebo v tom vidíte signál?
- Kolik embryí nám zbývá a v jakém stadiu?
- Kdy nejdřív můžeme plánovat další přenos?
- Je něco, co byste v přípravě příště změnil?

## Kdy kontaktovat kliniku

- silné krvácení nebo krvácení se sraženinami,
- horečka nad 38 °C nebo zapáchající výtok,
- prudká, narůstající nebo jednostranná bolest v podbřišku,
- menstruace, která nepřišla v očekávané době.

Při náhlé prudké bolesti, závrati nebo kolapsu vyhledejte akutní lékařskou pomoc.

> Konkrétní časování i rozsah vyšetření patří vaší klinice, která zná vaši anamnézu.`,
  },

  // ---------------------------------------------------------------------
  // E. Mimoděložní těhotenství
  // ---------------------------------------------------------------------
  {
    id: 'vc-mimodelozni-kdy-okamzite-pomoc',
    kind: 'article',
    title: 'Kdy okamžitě vyhledat pomoc',
    excerpt:
      'Varovné příznaky, u kterých se nečeká na ranní ordinační hodiny. Přečtěte si je hned.',
    minutes: 4,
    phases: ['loss_ectopic'],
    topics: ['ztrata', 'klinika'],
    level: 'essential',
    hero: 'blush',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    boost: 1,
    body: `## Nečekejte, pokud se objeví cokoli z tohoto seznamu

- **Náhlá silná bolest břicha** nebo v podbřišku, zvlášť jednostranná.
- **Bolest v rameni** nebo mezi lopatkami.
- **Závrať, mdloba, slabost, studený pot, bledost.**
- **Kolaps** nebo ztráta vědomí.
- **Krvácení z rodidel**, zvlášť spolu s bolestí.
- Náhlá nevolnost se zvracením spolu s bolestí břicha.
- Bolest při vyprazdňování nebo tlak v konečníku spolu s bolestí břicha.

**Volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost.**

Nečekejte na ráno, na konec směny ani na to, jestli to přejde. Nedomlouvejte si termín na příští den.

## Proč tak přísně

Mimoděložní těhotenství se může projevit náhle a stav se může zhoršit rychle. Bolest v rameni a závrať mohou být příznaky krvácení do dutiny břišní. To je situace, která patří do nemocnice, ne do čekárny.

Lepší je desetkrát přijet zbytečně než jednou pozdě. Zdravotníci to tak vidí taky.

## Co říct, když voláte

Řekněte hned na začátku:

1. „Jsem po embryotransferu“ nebo „mám pozitivní hCG“ a kdy.
2. Jaké máte příznaky a odkdy.
3. Jestli krvácíte a jak silně.
4. Že se u vás zvažuje nebo je potvrzeno mimoděložní těhotenství, pokud to tak je.

Tahle informace zásadně mění, jak se s vámi bude zacházet a jak rychle.

## Praktické věci

- Nejezte a nepijte, dokud vás lékař nevyšetří. Může být potřeba zákrok.
- Nejeďte za volantem sama. Zavolejte 155 nebo si nechte zavolat odvoz.
- Vezměte si kartičku pojišťovny, občanský průkaz a papíry z kliniky, pokud jsou po ruce. Když nejsou, jeďte bez nich.
- Vezměte si telefon a nabíječku.
- Napište někomu, kam jedete.

## Když si nejste jistá

Nejste jistá skoro nikdy. Bolest po transferu a po stimulaci je běžná a rozlišit ji sama nemůžete. Právě proto tenhle seznam existuje.

Kontaktujte svou kliniku vždy, když se objeví nová nebo zhoršující se bolest. Při příznacích ze seznamu nahoře nevolejte na kliniku, ale volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost.

> Tento text nenahrazuje akutní lékařské vyšetření. Při podezření na akutní stav vždy vyhledejte akutní lékařskou pomoc.`,
  },
  {
    id: 'vc-co-je-mimodelozni-tehotenstvi',
    kind: 'article',
    title: 'Co je mimoděložní těhotenství',
    excerpt:
      'Těhotenství uložené mimo dutinu děložní. Proč může nastat i po transferu do dělohy.',
    minutes: 6,
    phases: ['loss_ectopic'],
    topics: ['ztrata', 'vysledky'],
    level: 'essential',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    boost: 0.9,
    body: `## Co to znamená

Mimoděložní těhotenství je těhotenství, které se uchytilo mimo dutinu děložní. Nejčastěji ve vejcovodu, vzácněji na jiných místech v dutině břišní, v jizvě po císařském řezu nebo v oblasti děložního hrdla.

Mimo dutinu děložní není prostor, kde by se těhotenství mohlo vyvíjet dál. Zároveň jde o stav, který může ohrozit vaše zdraví, a proto vyžaduje lékařské vedení.

## Proč může nastat i po IVF

Tohle překvapí skoro každou ženu: embryo se při transferu ukládá přímo do dutiny děložní, a přesto může skončit jinde.

Embryo se po přenosu nezahnízdí okamžitě. Nějakou dobu se v dutině pohybuje, a v tomto období se může dostat do vejcovodu a uchytit se tam. Popsáno je to i u přenosů, které proběhly technicky zcela hladce.

Riziko bývá uváděno jako vyšší u žen s poškozením vejcovodů nebo se zánětlivými změnami v malé pánvi, ale nastat může i bez jakéhokoli známého rizikového faktoru. Není to důsledek chyby při přenosu ani ničeho, co jste udělala po něm.

## Zvláštní případ: heterotopické těhotenství

Vzácně může být těhotenství uložené současně v děloze i mimo ni. Je to jeden z důvodů, proč se u bolesti a nejasného průběhu vyšetřuje i tehdy, když ultrazvuk v děloze něco ukazuje.

## Jak se to obvykle projeví

Někdy vůbec nijak a najde se to při běžné kontrole. Jindy se objeví bolest v podbřišku, špinění nebo krvácení, případně hodnoty hCG, které nerostou očekávaným způsobem.

Příznaky se překrývají s běžnými pocity po transferu a po stimulaci. Rozlišit je sama nemůžete a nemá smysl se o to pokoušet. Od toho jsou kontroly.

## Co to znamená pro vás

Je to zdravotně vážná situace a zároveň ztráta těhotenství. Obojí platí najednou a jedno nevylučuje druhé.

Řada žen popisuje, že se v akutní situaci nedostalo na smutek, protože se řešilo zdraví. Ten smutek přichází později a je stejně oprávněný, jako by přišel hned.

## Kdy vyhledat akutní pomoc

Náhlá silná bolest břicha, bolest v rameni, závrať, kolaps nebo krvácení znamenají: **volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost.**

Při jakékoli nové nebo zhoršující se bolesti po transferu kontaktujte svou kliniku.

> Tento text popisuje obecné informace o mimoděložním těhotenství. Diagnostiku i léčbu určuje výhradně lékař.`,
  },
  {
    id: 'vc-mimodelozni-diagnostika-a-hcg',
    kind: 'article',
    title: 'Jak se diagnostikuje a jak se sleduje hCG',
    excerpt:
      'Proč to trvá, co lékař hledá na ultrazvuku a proč se odběry opakují po dvou dnech.',
    minutes: 6,
    phases: ['loss_ectopic'],
    topics: ['vysledky', 'klinika'],
    level: 'comfort',
    hero: 'sky',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Proč diagnóza nebývá hned

Nejtěžší část bývá čekání na jistotu. V časných týdnech nemusí být na ultrazvuku vidět nic použitelného, ani v děloze, ani mimo ni. Lékař pak pracuje s kombinací nálezu a vývoje hodnot v čase.

To znamená opakované návštěvy a odběry, často po dvou dnech. Není to váhavost. Je to jediný způsob, jak stav odlišit od velmi časného nitroděložního těhotenství.

## Co se sleduje

### Ultrazvuk

Vyšetření se dělá obvykle přes pochvu. Hledá se, jestli je v dutině děložní patrný těhotenský váček, jestli není patrný útvar v oblasti vejcovodů a jestli není v dutině břišní volná tekutina.

Nález „v děloze zatím nic nevidíme“ v časné fázi neznamená automaticky mimoděložní těhotenství. Znamená, že je brzy a je potřeba se dívat znovu.

### hCG v čase

Sleduje se, jak se hodnota mění mezi odběry. U dobře se vyvíjejícího nitroděložního těhotenství se očekává určitý typ vzestupu. Vzestup pomalejší, stagnace nebo kolísání jsou důvodem k dalšímu sledování.

Žádná jednotlivá hodnota není diagnóza. To, že hodnota roste, mimoděložní uložení nevylučuje; to, že klesá, ho samo o sobě nevylučuje také.

### Váš stav

Bolest, krvácení, závrať a nález na břiše rozhodují stejně jako čísla. Proto se vás při každé kontrole ptají na příznaky. Odpovídejte přesně, i když se vám zdá, že se přeháníte.

## Co se od vás očekává

- Chodit na kontroly přesně v termínech, i když se cítíte dobře.
- Mít telefon zapnutý a být dostupná.
- Neplánovat na tyhle dny cesty daleko od zdravotnické péče.
- Vědět, kam jet, kdyby se stav zhoršil v noci nebo o víkendu.

## Otázky, které se hodí položit

1. Co přesně teď na ultrazvuku vidíte a co nevidíte?
2. Kdy je další odběr a jaká hodnota by vás znepokojila?
3. Jaké scénáře jsou ve hře a kdy se rozhodne?
4. Kam mám jet, když se mi udělá špatně mimo ordinační dobu?
5. Můžu v tomhle stavu do práce, řídit, cestovat?

## Kdy nečekat na další kontrolu

Náhlá silná bolest břicha, bolest v rameni, závrať, kolaps nebo krvácení: **volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost.**

> Diagnostický postup se u jednotlivých pracovišť liší podle nálezu. Platí to, co určí váš lékař.`,
  },
  {
    id: 'vc-mimodelozni-lecba-a-rekonvalescence',
    kind: 'article',
    title: 'Možnosti léčby a rekonvalescence',
    excerpt:
      'Obecný přehled toho, jaké postupy existují a co po nich obvykle následuje. Volba patří lékaři.',
    minutes: 8,
    phases: ['loss_ectopic'],
    topics: ['klinika', 'ztrata'],
    level: 'comfort',
    hero: 'taupe',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Co rozhoduje o postupu

Volba léčby patří výhradně lékaři a vychází z vašeho konkrétního nálezu. Z hodnot hCG, z toho, co je vidět na ultrazvuku, z vašich příznaků, z celkového stavu a z toho, jestli jde o akutní situaci. Tento text popisuje, jaké možnosti obecně existují, ne co je vhodné pro vás.

## Sledování bez okamžitého zásahu

U části případů, kde jsou hodnoty nízké a klesají a žena je bez obtíží, může být zvažováno pouze pečlivé sledování s opakovanými odběry a kontrolami. Podmínkou bývá dostupnost péče a spolehlivé docházení na kontroly.

Není to „nedělání ničeho“. Je to postup, který vyžaduje disciplínu a dostupnost.

## Léčba metotrexátem

Metotrexát je lék, který se v této indikaci podává obvykle injekčně a jehož cílem je zastavit další růst tkáně. Zvažuje se za určitých podmínek, které posuzuje lékař. Patří k nim mimo jiné výše hCG, nález na ultrazvuku a stabilní stav bez známek krvácení do dutiny břišní.

Co s tím obvykle souvisí:

- Následuje kontrola hodnot hCG v odstupu dní, protože pokles bývá pozvolný a někdy hodnota nejprve ještě stoupne.
- U části žen je potřeba dávku opakovat nebo postup změnit.
- Po dobu léčby a určitou dobu po ní platí omezení, která vám sdělí lékař. Mimo jiné se obvykle nedoporučuje alkohol, některé léky, doplňky s kyselinou listovou a delší pobyt na slunci.
- Otěhotnění se po této léčbě po určitou dobu nedoporučuje. Konkrétní odstup vám určí lékař.
- Bolest v podbřišku se v prvních dnech může přechodně zhoršit; kdy je to očekávané a kdy je to důvod k okamžitému vyšetření, se vždy ptejte konkrétně.

## Chirurgické řešení

Operace se provádí obvykle laparoskopicky, v akutní situaci může být postup jiný. Podle nálezu může jít o odstranění těhotenství se zachováním vejcovodu, nebo o odstranění postiženého vejcovodu.

Které řešení je v konkrétním případě zvoleno, závisí na stavu vejcovodu, na rozsahu nálezu a na tom, jestli jde o akutní stav. Rozhoduje o tom operatér, často až podle toho, co v průběhu výkonu vidí.

Otázky, které je dobré položit před výkonem, pokud je čas:

1. Co je cílem výkonu a jaké jsou možné varianty podle nálezu?
2. Za jakých okolností se odstraňuje vejcovod?
3. Jak dlouhá je obvykle hospitalizace a rekonvalescence?
4. Co to znamená pro další léčbu neplodnosti?

## Rekonvalescence

Fyzická rekonvalescence trvá podle zvoleného postupu obvykle dny až týdny. Co bývá součástí:

- kontrolní odběry hCG až do poklesu pod měřitelnou mez,
- kontrola u lékaře v určeném termínu,
- omezení fyzické zátěže na dobu, kterou stanoví lékař,
- pracovní neschopnost, pokud je potřeba. A je v pořádku o ni požádat.

Psychická rekonvalescence trvá obvykle déle než fyzická a nejde s ní spěchat. Řada žen popisuje, že se ke smutku dostala až po skončení akutní fáze, a překvapilo je to.

## Ztráta jednoho vejcovodu

Pokud došlo k odstranění vejcovodu, je to samostatná ztráta a je v pořádku ji tak vnímat. Z hlediska IVF platí, že léčba probíhá přes odběr vajíček přímo z vaječníků, takže se s vejcovody nepracuje. Co to znamená konkrétně pro váš další postup, řekne váš lékař.

## Kdy vyhledat akutní pomoc

Náhlá silná bolest břicha, bolest v rameni, závrať, kolaps nebo krvácení: **volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost.** To platí i během léčby a po ní.

> Tento text je obecný přehled a v žádném případě neurčuje léčbu. Postup ve vašem případě stanovuje výhradně váš lékař.`,
  },
  {
    id: 'vc-mimodelozni-dalsi-cesta',
    kind: 'article',
    title: 'Další IVF cesta po mimoděložním těhotenství',
    excerpt:
      'Kdy se dá pokračovat, co se obvykle sleduje navíc a jak se dá zvládat strach z opakování.',
    minutes: 7,
    phases: ['loss_ectopic'],
    topics: ['klinika', 'ztrata', 'psychika'],
    level: 'comfort',
    hero: 'sand',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Kdy se dá znovu začít

Odstup určuje lékař a liší se podle toho, jaká léčba proběhla. Zohledňuje se pokles hCG pod měřitelnou mez, hojení po případném zákroku, návrat menstruace a u některých léků i doba, po kterou se otěhotnění nedoporučuje.

Nechte si termín potvrdit konkrétně. „Až se to srovná“ se nedá zapsat do kalendáře a v tomhle období potřebujete něco, čeho se dá držet.

## Co se obvykle sleduje u dalšího přenosu

Po prodělaném mimoděložním těhotenství bývá časné sledování pečlivější. Může to znamenat dřívější odběry hCG z krve, dřívější ultrazvuk a jasně danou instrukci, kam volat při bolesti.

Zeptejte se předem, jak bude sledování vypadat konkrétně u vás a od kolikátého dne. Vědět to dopředu je jedna z mála věcí, které v tom čekání pomáhají.

## Otázky na konzultaci

1. Kdy nejdřív můžeme plánovat další přenos a co všechno se musí stihnout předtím?
2. Bude se něco měnit na přípravě nebo na sledování?
3. Jaké je v mém případě riziko, že se to bude opakovat?
4. Je něco v mém nálezu, co by bylo dobré ještě dovyšetřit?
5. Na koho se mám obrátit, kdybych měla v příštím čekání bolest?

Odpověď na otázku o opakování bývá individuální. Prodělané mimoděložní těhotenství se v odborných zdrojích uvádí jako faktor, který riziko dalšího zvyšuje, ale konkrétní míru posoudí jen lékař, který zná váš nález.

## Strach z opakování

Další čekání po transferu bude jiné než to předchozí. Každé píchnutí v podbřišku bude mít jiný význam a to je pochopitelné.

Co některým ženám pomáhá:

- Mít dopředu napsané, při jakých příznacích volat a kam. Konkrétní plán snižuje potřebu vyhodnocovat každý pocit.
- Mít uložené telefonní číslo na kliniku i na pohotovost a vědět, kdo drží víkendovou službu.
- Domluvit se s partnerem, kdo v případě potřeby řídí.
- Nesnažit se rozlišovat příznaky podle internetu. Nejde to a jen to prodlouží úzkost.

Pokud strach přerůstá do stavu, kdy nemůžete spát nebo fungovat, je na místě psycholog se zkušeností s reprodukční medicínou. To není nadstandard, to je součást přípravy.

## Ztráta, která se odkládá

Během akutní fáze se řešilo vaše zdraví. Smutek často přichází až potom, někdy s odstupem týdnů, a bývá překvapivě silný. Nepřišel pozdě a není přehnaný.

## Kdy vyhledat akutní pomoc

Náhlá silná bolest břicha, bolest v rameni, závrať, kolaps nebo krvácení: **volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost.**

> Načasování dalšího postupu i rozsah sledování určuje výhradně váš lékař.`,
  },

  // ---------------------------------------------------------------------
  // F. Opakovaný neúspěch
  // ---------------------------------------------------------------------
  {
    id: 'vc-kdyz-ivf-nevyslo-znovu',
    kind: 'article',
    title: 'Když IVF nevyšlo znovu',
    excerpt:
      'Druhý, třetí, čtvrtý neúspěch má jinou váhu než ten první. O tom, co s tím dělá čas.',
    minutes: 7,
    phases: ['repeated_failure'],
    topics: ['ztrata', 'psychika'],
    level: 'essential',
    hero: 'dusk',
    publishedOn: '2026-08-02',
    boost: 0.9,
    body: `## Není to totéž jako poprvé

Po prvním neúspěchu vám okolí říkalo, že je to běžné a že se pokračuje. Po třetím už nikdo neví, co říct, a vy nevíte, co odpovědět.

Opakovaný neúspěch není součet stejných zklamání. Mění se v něm něco dalšího: ubývá důvěry, že to má systém, a přibývá únava, kterou nespravíte spánkem. K tomu se přidávají peníze, vyčerpané volno v práci a pocit, že jste už roky ve stejné místnosti.

To všechno je reálná zátěž a není přiměřené po sobě chtít, abyste ji nesla lehce.

## Co bývá nejtěžší

- **Ztráta jazyka.** Poprvé jste to řekla všem. Podruhé jen některým. Teď to neříkáte nikomu a nesete to sama.
- **Kalendář, který se nehýbe.** Zatímco kolem se dějí těhotenství, porody a druhé děti, váš rok vypadá jako ten minulý.
- **Naděje, která začíná být nebezpečná.** Doufat po opakovaných neúspěších stojí víc, protože pád je předvídatelný.
- **Nemožnost plánovat.** Dovolená, práce, stěhování. Všechno visí na termínech, které neurčujete vy.

## Co se v takovém stavu děje s rozhodováním

Vyčerpání zužuje pohled. V takovém stavu se špatně rozhoduje o velkých věcech. Jak o pokračování, tak o ukončení. Proto se vyplatí důležitá rozhodnutí odložit za hranici první vlny a nedělat je v týdnu po výsledku.

To není zdržování. To je ochrana rozhodnutí, se kterým budete žít roky.

## Co může být teď užitečné

- Dát si konkrétní hranici pauzy: „do konzultace nic neřešíme“. Prázdné období bez pravidel je horší než pauza s koncem.
- Sepsat, co všechno už proběhlo. Na konzultaci to bude potřeba a zároveň to pomáhá vidět, kolik jste toho unesla.
- Vybrat si jednoho člověka, kterému to řeknete celé, bez zkracování.
- Zvážit psychologa se zkušeností s reprodukční medicínou. Po opakovaných neúspěších to není nadstandard, ale rozumné opatření.

## Váš vztah

Partneři často truchlí v jiném rytmu a to vytváří dojem, že tomu druhému to je jedno. Obvykle to není pravda; je to jiné tempo.

Pomáhá dohodnout se na jednoduchých věcech: kdy o tom mluvíme a kdy ne, kdo volá na kliniku, komu to říkáme. Konkrétní dohody snesou víc než dobrá vůle.

## Kdy vyhledat odbornou pomoc

Když několik týdnů nemůžete spát, jíst nebo pracovat, když se stahujete ze všech kontaktů, nebo když se objeví myšlenky na to, že už tu nechcete být. Obraťte se na psychologa nebo psychiatra. Při akutních myšlenkách na sebepoškození vyhledejte akutní lékařskou pomoc.

> Tento text je psychická podpora. Otázky léčby patří vaší klinice.`,
  },
  {
    id: 'vc-prehled-transferu-pred-konzultaci',
    kind: 'article',
    title: 'Jak si udělat přehled všech transferů před konzultací',
    excerpt:
      'Jeden dokument, který za vás na konzultaci odvede polovinu práce. Návod, co do něj napsat.',
    minutes: 7,
    phases: ['repeated_failure'],
    topics: ['klinika', 'vysledky'],
    level: 'comfort',
    hero: 'linen',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Proč to sepsat

Po několika cyklech si nikdo nepamatuje, který protokol byl kdy, kolik embryí bylo v kterém odběru a jak vypadala sliznice před druhým přenosem. Vy si to nepamatujete a lékař, který má na konzultaci dvacet minut, to musí dohledávat ve zprávách.

Přehled na jednom papíře zkracuje dohledávání a posouvá rozhovor k tomu podstatnému. Zároveň se vám bude hodit kdykoli budete chtít druhý názor.

## Jak to strukturovat

Udělejte si dvě části: **cykly** (odběry vajíček) a **přenosy**. Nejsou to totéž. Jeden IVF cyklus může obsahovat víc přenosů. Čerstvý i následné kryotransfery z embryí zamrazených ve stejném cyklu. Když to smícháte do jednoho seznamu, přestane být zřejmé, z jakého odběru které embryo pocházelo.

## Co zapsat ke každému cyklu

1. Datum zahájení stimulace a datum odběru.
2. Protokol a použité léky včetně dávek.
3. Počet dní stimulace.
4. Počet folikulů před odběrem.
5. Počet získaných vajíček a z toho zralých.
6. Způsob oplodnění a počet oplozených vajíček.
7. Vývoj embryí po dnech. Kolik jich bylo který den a kdy se u kterých vývoj zastavil.
8. Kolik embryí bylo přeneseno čerstvě a kolik zmrazeno, v jakém stadiu.
9. Jestli proběhlo genetické testování embryí a s jakým výsledkem.
10. Komplikace, pokud byly.

## Co zapsat ke každému přenosu

1. Datum přenosu a z kterého cyklu embryo pocházelo.
2. Čerstvý přenos, nebo kryotransfer.
3. Stadium a den vývoje přeneseného embrya, hodnocení laboratoře.
4. Kolik embryí bylo přeneseno.
5. Způsob přípravy sliznice a použité léky.
6. Tloušťka a vzhled sliznice před přenosem, pokud to máte ve zprávě.
7. Hormonální hodnoty před přenosem, pokud je máte.
8. Jak přenos technicky proběhl. Hladce, nebo s obtížemi.
9. Podpora luteální fáze: co, v jaké dávce, jak dlouho.
10. Výsledek: hodnota hCG z krve s datem odběru, případně další hodnoty.
11. Jak to skončilo a kdy. Negativní výsledek, velmi časná ztráta, ztráta později.

## Kde ta data seženete

- Propouštěcí a ambulantní zprávy z kliniky.
- Embryologické protokoly. Pokud je nemáte, požádejte o ně; máte na ně nárok.
- Výsledky laboratoří.
- Vlastní poznámky, fotky krabiček od léků, staré zprávy v telefonu.
- Když něco chybí, napište k tomu „nedohledáno“. Prázdné místo je poctivější než odhad.

## Na konec přidejte tři věci

1. Souhrn v jedné větě na cyklus: „Cyklus 2, srpen 2025, 9 vajíček, 6 zralých, 4 oplozená, 1 blastocysta zmrazena.“
2. Otevřené otázky, které z přehledu vyplynuly.
3. Seznam všeho, co jste absolvovala mimo cykly. Vyšetření, zákroky, léčbu jiných obtíží.

## Praktická poznámka

Vytiskněte to a jednu kopii nechte lékaři. Ušetří to čas jemu i vám a zvyšuje to šanci, že se během konzultace dostanete k tomu, proč jste přišla.

> Přehled slouží k orientaci v rozhovoru. Interpretace údajů patří vašemu lékaři.`,
  },
  {
    id: 'vc-co-lekar-zvazuje-po-opakovanem-neuspechu',
    kind: 'article',
    title: 'Co lékař po opakovaném neúspěchu obvykle zvažuje',
    excerpt:
      'Přehled směrů, kterými se úvahy obvykle ubírají. Včetně toho, kde jsou důkazy slabé.',
    minutes: 9,
    phases: ['repeated_failure'],
    topics: ['klinika', 'vysledky'],
    level: 'comfort',
    hero: 'sky',
    publishedOn: '2026-08-02',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## K čemu tenhle text je

Aby vás na konzultaci nepřekvapily pojmy, které tam padnou, a abyste se uměla zeptat. Není to seznam toho, co byste měla chtít. Nic z toho není vhodné pro každou ženu a o tom, co má ve vaší situaci smysl, rozhoduje váš lékař.

Užitečná otázka ke každé položce zní stejně: **co konkrétně by se změnilo na postupu, kdyby výsledek vyšel takto, a co, kdyby vyšel jinak?** Vyšetření, jehož výsledek nic nezmění, obvykle nemá smysl dělat.

## Endometrium a dutina děložní

Zvažuje se, jestli něco nebrání zahnízdění na straně dělohy. Do této oblasti patří například posouzení tvaru dutiny, srůstů, polypů, myomů nebo nálezu, který by naznačoval chronický zánět děložní sliznice. Podle nálezu může být zvažován zákrok nebo léčba.

Samostatnou otázkou je příprava sliznice a načasování přenosu. Existuje víc způsobů přípravy a jejich změna je běžná úvaha. Testy, které mají určovat individuální okno vnímavosti sliznice, jsou k dispozici, ale jejich přínos je předmětem odborné diskuse a důkazy o něm nejsou jednoznačné.

## Embrya a genetika

Zvažuje se, jestli je hlavní překážkou kvalita a chromozomální výbava embryí. Do této oblasti patří:

- posouzení dosavadních výsledků laboratoře napříč cykly,
- úvaha o změně protokolu stimulace nebo způsobu oplodnění,
- vyšetření karyotypu obou partnerů,
- rozšířené vyšetření spermií nad rámec základního spermiogramu,
- genetické testování embryí. To může být v některých situacích zvažováno, ale nejde o postup vhodný pro každou ženu a jeho přínos se posuzuje individuálně.

## Imunologie a hematologie

Tady je potřeba být obzvlášť opatrná. Nabídka imunologických vyšetření a léčebných postupů je široká, ale u velké části z nich jsou důkazy o přínosu pro úspěšnost léčby slabé nebo rozporuplné. Některé postupy nejsou v odborných doporučeních podpořeny a část z nich není bez rizika.

Do úvahy může přijít vyšetření trombofilních stavů nebo autoimunitních onemocnění, pokud pro to svědčí vaše osobní nebo rodinná anamnéza. To je něco jiného než plošné testování všeho dostupného.

Když vám je nabídnut imunologický nebo hematologický postup, ptejte se konkrétně: jaké důkazy pro něj existují, jaká jsou rizika, jaká je cena a co by se stalo, kdybyste ho nepodstoupila. Odpověď „u některých pacientek to pomohlo“ není důkaz.

## Změna protokolu a organizace léčby

Zvažuje se změna typu stimulace, dávek, načasování, způsobu přípravy sliznice, podpory luteální fáze nebo počtu přenášených embryí. Také se zvažuje, jestli má smysl embrya shromažďovat z několika odběrů, než dojde na přenos.

Do této oblasti patří i praktičtější otázky: jestli má smysl zvážit jiné pracoviště, jestli byly přenosy technicky obtížné a jestli se dá něco udělat s celkovým zdravotním stavem. Štítná žláza, hmotnost, kouření, kompenzace chronických nemocí.

## Dárcovství

Podle situace může být zvažováno použití darovaných vajíček, darovaných spermií nebo darovaného embrya. Bývá to téma, které se otevírá po opakovaných neúspěších, a je to zároveň rozhodnutí, které přesahuje medicínu. Týká se představy o rodičovství, vztahu a toho, co budete jednou vyprávět dítěti.

Není to poslední možnost ani prohra. Je to jiná cesta a je v pořádku potřebovat čas na rozmyšlenou i odbornou psychologickou podporu při rozhodování.

## Když zazní „nevíme“

U části párů se ani po širokém vyšetření nenajde vysvětlení. Lékař, který to řekne nahlas, s vámi jedná poctivě. Nabídka dalších a dalších testů bez jasné otázky bývá spíš známkou bezradnosti než péče.

## Otázky, které se hodí položit

1. Co považujete v naší situaci za nejpravděpodobnější překážku?
2. Které z navrhovaných vyšetření má nejsilnější oporu v doporučeních?
3. Co by se změnilo na postupu podle jednotlivých výsledků?
4. Co z toho pojišťovna hradí a co ne?
5. Kolik dalších pokusů považujete u nás za smysluplných?

> Tento text je obecný přehled. Nedoporučuje žádné vyšetření ani postup. O tom, co je vhodné ve vaší situaci, rozhoduje výhradně váš lékař.`,
  },
  {
    id: 'vc-kdy-je-v-poradku-prestat',
    kind: 'article',
    title: 'Kdy je v pořádku přestat',
    excerpt:
      'Text pro chvíli, kdy vás tahle otázka napadla. Není to selhání a nemusíte se z ní hned rozhodovat.',
    minutes: 7,
    phases: ['repeated_failure'],
    topics: ['psychika', 'ztrata'],
    level: 'comfort',
    hero: 'pearl',
    publishedOn: '2026-08-02',
    body: `## Že vás to napadlo

Většina žen v léčbě si tuhle otázku někdy položí a většina se za ni stydí. Jako by pomyslet na konec znamenalo zradit dítě, které ještě není.

Neznamená. Přemýšlet o hranici je normální součást dlouhé léčby a nemusí to znamenat, že jste se rozhodla. Otázku můžete otevřít a zase zavřít.

## Co tenhle text nedělá

Nebude vás přemlouvat, abyste pokračovala, ani abyste skončila. Rozhodnutí je vaše a nikdo zvenčí (ani lékař, ani rodina, ani nikdo v diskusi) nemá dost informací na to, aby ho udělal za vás.

Co tenhle text dělá: dává vám povolení o tom přemýšlet nahlas.

## Signály, které stojí za pozornost

Nejsou to podmínky ani doporučení. Jsou to věci, které ženy popisují, když se ohlížejí zpět:

- Léčba přestala být jednou z částí života a stala se celým životem.
- Rozhodujete se z pocitu, že už není cesta zpět, ne proto, že to chcete.
- Peníze na další cyklus by vám vzaly bezpečí, které potřebujete.
- Vztah je pod zátěží, kterou už nezvládá.
- Vaše zdraví (fyzické nebo psychické) nese následky, které se hromadí.
- Nedokážete si představit, co budete dělat, když to vyjde. Jen to, co budete dělat, když to nevyjde.
- Poslední roky si pamatujete jako termíny a odběry, ne jako život.

## Signály, které mluví pro pokračování

Také nejsou doporučením:

- Máte zamrazená embrya a vnitřně víte, že je nechcete nechat nepoužitá.
- Lékař vidí konkrétní věc, kterou lze ještě zkusit jinak, a vám to dává smysl.
- Máte na to zdroje. Finanční, časové, psychické.
- Chcete pokračovat, i když víte, že to nemusí dopadnout.

## Jak si to rozhodnutí usnadnit

- **Nedělejte ho v týdnu po neúspěchu.** Tehdy rozhodujete z bolesti nebo ze vzdoru.
- **Dejte si předem hranici.** „Ještě dva přenosy a pak se vracíme k téhle otázce“ je konkrétnější než neurčité pokračování a je snesitelnější než otevřený konec.
- **Rozdělte to na části.** Rozhodovat se o „konci snažení“ je obrovské. Rozhodovat se o dalších třech měsících je zvládnutelné.
- **Napište si, co konkrétně vás na pokračování drží.** Někdy je to naděje, jindy strach z toho, co si o vás pomyslí okolí. To druhé není dobrý důvod.
- **Mluvte o tom s partnerem odděleně od plánování termínů.** Míchat rozhovor o hranici do organizace cyklu nefunguje.
- **Zvažte psychologa se zkušeností s reprodukční medicínou.** Tohle je přesně situace, na kterou je odborná podpora nejužitečnější.

## Když se rozhodnete skončit

Konec léčby je ztráta a truchlí se po ní. Ne po konkrétním těhotenství, ale po celé jedné budoucnosti a po verzi sebe, kterou jste si představovala.

Ta ztráta je málo viditelná. Nemá datum, obřad ani soustrastné zprávy. O to víc si zaslouží, abyste ji brala vážně a dala si na ni čas.

Konec léčby zároveň nemusí být konec cesty k rodičovství. Existují jiné cesty a je v pořádku se o nich informovat, i kdyby jen proto, abyste věděla, co obnášejí.

## A když se rozhodnete pokračovat

Taky je to v pořádku. Nemusíte to nikomu vysvětlovat ani obhajovat, ani lidem, kteří vám radí přestat.

## Kdy vyhledat pomoc

Pokud vás rozhodování drží v úzkosti, nespíte, nemůžete pracovat, nebo se objeví myšlenky na to, že už tu nechcete být, obraťte se na psychologa nebo psychiatra. Při akutních myšlenkách na sebepoškození vyhledejte akutní lékařskou pomoc.

> Tento text je psychická podpora, ne doporučení k postupu. Otázky léčby patří vaší klinice.`,
  },
]

export const pack: ContentPack = { items }
