import type { ContentItem, ContentPack } from '../types'

/**
 * Inseminace (IUI).
 *
 * Fáze, která v knihovně dlouho chyběla — přitom je to pro spoustu párů
 * první krok asistované reprodukce a často ten nejméně vysvětlený.
 */

const items: ContentItem[] = [
  {
    id: 'iui-jak-probiha',
    kind: 'article',
    title: 'Inseminace krok za krokem: co se bude dít',
    excerpt: 'Od první kontroly po zákrok, který trvá pár minut. Bez zbytečného dramatu a bez vynechaných kroků.',
    minutes: 7,
    phases: ['iui'],
    topics: ['klinika', 'transfer'],
    level: 'essential',
    hero: 'sky',
    publishedOn: '2026-07-20',
    reviewedBy: 'Odborně garantováno lékařem reprodukční medicíny.',
    body: `## Co inseminace je

Při inseminaci se upravené a zahuštěné spermie zavedou tenkým katétrem přímo do dělohy, a to v době kolem ovulace. Vynechá se tím cesta pochvou a děložním hrdlem, která je pro spermie nejnáročnější.

Není to IVF. Oplodnění probíhá v těle, ne v laboratoři.

## Pro koho se hodí

- lehčí odchylky ve spermiogramu,
- poruchy ovulace, které se daří upravit,
- nevysvětlená neplodnost,
- situace, kdy je překážkou děložní hlen,
- ženy bez partnera a stejnopohlavní páry při použití darovaných spermií.

Podmínkou je aspoň jeden průchodný vejcovod a dostatečná kvalita vzorku po zpracování.

## Průběh cyklu

### 1. Sledování růstu folikulů

Od začátku cyklu chodíte na ultrazvuk. Někdy se přidá mírná stimulace tabletami nebo nízkými dávkami injekcí, aby dozrál jeden nebo dva folikuly.

### 2. Trigger

Když má folikul správnou velikost, dostanete injekci, která spustí ovulaci v naplánovaný čas. Od ní se počítá termín výkonu na hodiny.

### 3. Odběr a zpracování vzorku

Partner odevzdá vzorek obvykle týž den ráno. V laboratoři se zpracuje — oddělí se pohyblivé spermie a odstraní se semenná plazma.

### 4. Samotný zákrok

Ležíte jako na běžném gynekologickém vyšetření. Lékař zavede tenký katétr přes děložní hrdlo a vpraví vzorek do dělohy. Trvá to několik minut, bez narkózy. Většina žen popisuje pocit jako při stěru, někdy s krátkým zatlačením.

### 5. Po zákroku

Chvíli poležíte a jdete domů. Ležení není potřeba — vzorek je v děloze a nemůže vytéct. Mírné křeče nebo slabé špinění během dne jsou běžné.

## Kolikrát to zkoušet

Většina pracovišť počítá se třemi až šesti cykly. Pokud nevyjdou, přechází se obvykle k IVF. Je dobré vědět dopředu, kolik cyklů má u vaší diagnózy smysl — a zeptat se na to hned na začátku.

## Kdy volat lékaře

- horečka nad 38 °C v následujících dnech,
- silná bolest břicha,
- silné krvácení,
- při stimulaci rychle rostoucí obvod břicha nebo dušnost (možné příznaky OHSS).

> Tenhle text popisuje obvyklý průběh. Konkrétní postup se u jednotlivých pracovišť liší a to, co platí pro vás, řekne váš lékař.`,
  },
  {
    id: 'iui-vs-ivf',
    kind: 'article',
    title: 'Inseminace, nebo rovnou IVF?',
    excerpt: 'Proč vám lékař navrhl jednodušší cestu — a kdy je naopak lepší ji přeskočit.',
    minutes: 6,
    phases: ['iui', 'diagnostics', 'ivf_prep'],
    topics: ['klinika'],
    level: 'essential',
    hero: 'linen',
    publishedOn: '2026-07-20',
    body: `## Dvě různé metody, ne dva stupně kvality

Inseminace bývá vnímaná jako „ještě ne to pravé“. Přitom to není slabší verze IVF — je to jiná metoda pro jiné situace.

| | Inseminace | IVF |
|---|---|---|
| Kde probíhá oplodnění | v těle | v laboratoři |
| Narkóza | ne | ano, u odběru |
| Zátěž pro tělo | nízká | vyšší |
| Kolik informací získáte | málo | hodně (kvalita vajíček, oplodnění, vývoj embryí) |
| Cena | výrazně nižší | vyšší |

## Kdy dává smysl začít inseminací

Když jsou vejcovody průchodné, vzorek je po zpracování dostatečný a nejde o dlouhou dobu neplodnosti ani vyšší věk. V takové situaci je zbytečné jít rovnou do náročnějšího postupu.

## Kdy se inseminace přeskakuje

- neprůchodné vejcovody,
- výraznější mužský faktor,
- vyšší věk ženy nebo nízká ovariální rezerva, kde je čas podstatný,
- opakovaně neúspěšné inseminace,
- známá genetická zátěž, kde se plánuje PGT.

## Co se zeptat

- Proč u nás inseminace, a ne IVF?
- Kolik cyklů má v naší situaci smysl?
- Kdy bychom měli přejít dál?

> IVF poskytne informace, které inseminace dát nemůže — třeba jestli se vajíčka vůbec oplodní. Někdy je právě tohle důvod k přechodu, i když by inseminace formálně ještě byla možná.`,
  },
  {
    id: 'iui-cekani',
    kind: 'article',
    title: 'Čekání po inseminaci: co znamenají příznaky (a proč nic)',
    excerpt: 'Dva týdny, ve kterých se dá dělat jediné — přežít je. A pár věcí, které v tom pomáhají.',
    minutes: 5,
    phases: ['iui', 'two_week_wait'],
    topics: ['cekani', 'psychika'],
    level: 'comfort',
    hero: 'blush',
    publishedOn: '2026-07-20',
    body: `## Proč se z příznaků nic nepozná

Pokud berete progesteron, děláte si tělu druhou polovinu cyklu uměle. Napětí v prsou, únava, nadýmání a mírné křeče vyrábí právě progesteron — a vyrábí je stejně, ať těhotenství nastalo, nebo ne.

Rané těhotenství a blížící se menstruace mají prakticky totožné příznaky. To není náhoda ani smůla; je to prostě tak.

## Kdy má smysl testovat

Domácí test dřív než zhruba čtrnáct dní po inseminaci může ukázat obojí falešně. Pokud jste dostala trigger s hCG, může být v těle ještě zbytek a test bude pozitivní, aniž by to znamenalo těhotenství.

Držte se termínu, který vám dala klinika.

## Co pomáhá

- Jedna konkrétní věc dopoledne a jedna odpoledne. Prázdný den je nejhorší.
- Pohyb — chůze, lehká jóga. Není důvod ležet.
- Nádech na čtyři, výdech na šest, pět minut. Nudné a účinné.
- Říct jednomu člověku, že čekáte. Nemusí nic dělat, stačí, že to ví.

## Co nepomáhá

Rozbor každého píchnutí, srovnávání s cizími příběhy na fórech a věta „musím být v klidu, jinak to nevyjde“. Stres v tomhle období výsledek neurčuje.

> Pokud se objeví silné krvácení, prudká bolest nebo horečka, nečekejte na termín testu a ozvěte se svému pracovišti.`,
  },
  {
    id: 'iui-checklist',
    kind: 'checklist',
    title: 'Checklist: den inseminace',
    excerpt: 'Co domluvit předem, co si vzít s sebou a na co se zeptat. Ať se ráno neřeší nic zbytečného.',
    minutes: 3,
    phases: ['iui'],
    topics: ['klinika'],
    level: 'essential',
    hero: 'champagne',
    publishedOn: '2026-07-20',
    body: `Zákrok sám je krátký. Většina komplikací v ten den vzniká z organizace, ne z medicíny — z nedomluveného času odevzdání vzorku nebo z toho, že nikdo neví, kdo kam jede.

Projděte si to den předem.`,
    checklist: [
      { id: 'cas', text: 'Znám přesný čas zákroku', hint: 'Odvíjí se od času triggeru, ne od otevírací doby.', group: 'Předem' },
      { id: 'vzorek', text: 'Domluvený čas a místo odevzdání vzorku', hint: 'Obvykle týž den ráno.', group: 'Předem' },
      { id: 'abstinence', text: 'Partner ví, jak dlouhá má být abstinence', hint: 'Obvykle dva až pět dní. Přesně řekne klinika.', group: 'Předem' },
      { id: 'doprava', text: 'Vyřešená doprava tam i zpět', group: 'Předem' },
      { id: 'prace', text: 'Domluvené volno nebo pozdější příchod', group: 'Předem', optional: true },
      { id: 'doklady', text: 'Kartička pojišťovny a doklady', group: 'S sebou' },
      { id: 'vlozky', text: 'Vložky', hint: 'Slabé špinění po zákroku je běžné.', group: 'S sebou' },
      { id: 'ponozky', text: 'Ponožky a něco na čtení', group: 'S sebou', optional: true },
      { id: 'leky', text: 'Vím, jestli a odkdy beru progesteron', group: 'Po zákroku' },
      { id: 'test', text: 'Znám datum, kdy mám testovat nebo jít na odběr', group: 'Po zákroku' },
      { id: 'kontakt', text: 'Mám číslo, kam volat při potížích', group: 'Po zákroku' },
    ],
  },
  {
    id: 'iui-pribeh',
    kind: 'story',
    title: '„Čekala jsem operační sál. Trvalo to tři minuty.“',
    excerpt: 'Příběh ženy, která šla na první inseminaci a nevěděla, co čekat.',
    minutes: 4,
    phases: ['iui'],
    topics: ['klinika', 'psychika'],
    level: 'comfort',
    hero: 'dawn',
    publishedOn: '2026-07-20',
    body: `Rok a půl jsme se snažili. Když nám lékařka řekla „zkusíme inseminaci“, byla jsem zklamaná. V hlavě jsem měla IVF a tohle mi znělo jako odklad.

Přišla jsem ráno, nervózní jako před operací. Manžel odevzdal vzorek a šel čekat do auta, protože nevěděl, kam se má postavit.

Sestra mě zavedla do místnosti, která vypadala jako obyčejná gynekologická ordinace. Zeptala se, jestli jsem někdy měla stěr. Řekla jsem, že jo. Odpověděla: „Tak tohle bude podobné, jen o něco delší.“

Trvalo to tři minuty. Zatlačení, chvilku nepříjemné, a bylo hotovo. Deset minut jsem ležela a pak jsem šla po svých k autu.

Cestou domů jsem brečela. Ne bolestí. Spíš z toho, jak nepatrné to bylo proti tomu, kolik jsem tomu roky dávala.

První inseminace nevyšla. Ani druhá. Třetí ano.

Kdybych to měla někomu říct dopředu: neděste se toho zákroku. Bát se máte spíš těch čtrnácti dní potom.`,
  },
  {
    id: 'iui-video',
    kind: 'video',
    title: 'Video: jak vypadá zákrok a co uslyšíte v ordinaci',
    excerpt: 'Průvodce zákrokem od příchodu po odchod, ať vás v ordinaci nic nepřekvapí.',
    minutes: 6,
    phases: ['iui'],
    topics: ['klinika'],
    level: 'essential',
    hero: 'sage',
    publishedOn: '2026-07-20',
    mediaNote:
      'Video ukazuje průběh zákroku bez explicitních záběrů — vysvětlení používá schéma. Uvidíte, kde budete ležet, co lékař dělá a co budete cítit.',
    body: `## Co ve videu uvidíte

- Jak vypadá místnost a kde budete ležet.
- Co dělá laboratoř se vzorkem, než se vrátí na sál.
- Jak vypadá katétr — je výrazně tenčí, než si většina žen představuje.
- Co budete cítit a jak dlouho.
- Co se děje bezprostředně po zákroku.

## Nejčastější otázky

**Bude to bolet?** Většina žen popisuje krátké zatlačení podobné stěru. Bolest, kterou by bylo potřeba tlumit, je výjimečná.

**Může vzorek vytéct?** Ne. Spermie jsou zavedeny přímo do dělohy. To, co může odtéct, je zbytek roztoku — na výsledek to nemá vliv.

**Musím pak ležet?** Nemusíte. Krátký odpočinek na sále je zvyklost, ne podmínka.

> Postupy se mezi pracovišti liší. Když vám něco nesedí s tím, co říká vaše klinika, platí to, co říká vaše klinika.`,
  },
]

export const pack: ContentPack = { items }
