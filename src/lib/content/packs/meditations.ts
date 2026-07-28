import type { ContentItem, ContentPack } from '../types'

/**
 * Řízené meditace.
 *
 * Text v `body` je skutečný scénář — dá se přečíst nahlas nebo si ho projít
 * očima. Záměrně nepracujeme s vizualizacemi typu „představte si zdravé
 * miminko“: v této skupině žen dokáže taková věta napáchat víc škody než užitku.
 *
 * Meditace nenahrazují psychoterapii. U závažných obtíží na to obsah upozorňuje.
 */

function audio(
  id: string,
  title: string,
  excerpt: string,
  minutes: number,
  phases: ContentItem['phases'],
  topics: ContentItem['topics'],
  mediaNote: string,
  body: string,
  extra: Partial<ContentItem> = {},
): ContentItem {
  return {
    id,
    kind: 'audio',
    title,
    excerpt,
    body,
    minutes,
    phases,
    topics,
    level: 'comfort',
    hero: 'sage',
    author: 'Gabi',
    publishedOn: '2026-02-14',
    mediaNote,
    ...extra,
  }
}

const meditations: ContentItem[] = [
  audio(
    'med-pred-transferem',
    'Před transferem',
    'Deset minut klidu ve chvíli, kdy vám hlava běží na plné obrátky.',
    10,
    ['transfer', 'embryo_culture'],
    ['transfer', 'psychika', 'sebepece'],
    'Klidný ženský hlas, na pozadí jemný tón bez rytmu. Nahrávka počítá s tím, že ji posloucháte v čekárně nebo cestou na kliniku.',
    `Najděte si polohu, ve které nemusíte nic držet. Když sedíte, opřete se. Když ležíte, nechte ruce volně podél těla.

Zavřete oči, jestli vám to je příjemné. Jestli ne, nechte pohled spočinout na jednom místě před sebou.

Nadechněte se nosem. Pomalu. A vydechněte ústy, o něco déle, než jste se nadechla.

Ještě jednou. Nádech nosem. Výdech ústy, delší.

Nemusíte dýchat nijak zvlášť. Jen si všímejte, že to jde samo.

Dnes je den, na který jste dlouho čekala. Je normální, že máte staženo v žaludku. Že vám v hlavě běží scénáře, které si nepřejete. Tělo nerozlišuje mezi vzrušením a strachem — obojí zrychluje dech.

Nebudeme se ten strach snažit odstranit. Jen mu vedle sebe uděláme místo.

Zaměřte pozornost na chodidla. Vnímejte, čeho se dotýkají. Podlaha, bota, postel.

Teď na dlaně. Jsou teplé, nebo studené?

Na ramena. Jsou nejspíš výš, než by musela být. Nechte je klesnout. O kousek. Ještě o kousek.

Na čelist. Povolte ji. Zuby se nemusí dotýkat.

Nadechněte se. Vydechněte.

Za chvíli půjdete do místnosti, kde na vás bude čekat tým lidí, kteří tenhle zákrok dělali už mnohokrát. Vaše práce je jen ležet a dýchat. Nic víc od vás nikdo nechce.

Nemusíte být klidná. Nemusíte myslet pozitivně. Nemusíte nic dokazovat.

Stačí, že jste přišla.

Ještě dva nádechy. Pomalé.

A až budete připravená, otevřete oči.`,
  ),

  audio(
    'med-po-transferu',
    'Po transferu',
    'Pro chvíli, kdy je zákrok za vámi a začíná ta těžší část.',
    9,
    ['transfer', 'two_week_wait'],
    ['transfer', 'cekani', 'psychika'],
    'Nahrávka určená na první hodiny po návratu domů. Ticho mezi větami je delší než obvykle.',
    `Máte to za sebou. Ta část, kterou jste mohla ovlivnit, skončila.

Lehněte si nebo se pohodlně opřete. Nemusíte ležet nehybně — to nikomu nepomůže.

Nádech. Výdech.

Ve vašem těle se právě teď děje něco, co nemůžete vidět ani cítit. A to je asi nejtěžší část celého tohohle období: nemít žádnou zpětnou vazbu.

Vaše tělo to umí. Nepotřebuje k tomu vaši pozornost ani vaši kontrolu. Dělá to bez ohledu na to, jestli ležíte, chodíte, pracujete nebo pláčete.

Nadechněte se do břicha. Nechte ho se zvednout.

Vydechněte.

Následujících několik dní budete mít nutkání hledat příznaky. Rozebírat každé píchnutí. Ptát se internetu.

Až se přistihnete, vraťte se k dechu. Ne proto, abyste na to přestala myslet — to nejde. Ale proto, abyste u toho nebyla úplně sama se svou hlavou.

Položte si ruku na břicho. Ne proto, že by tam něco cítila. Ale proto, že je to vaše tělo a zaslouží si laskavý dotek.

Nádech. Výdech.

Cokoliv přijde, budete to řešit, až to přijde. Ne dneska.

Až budete připravená, otevřete oči a pomalu se posaďte.`,
  ),

  audio(
    'med-cekani-hcg',
    'Čekání na HCG',
    'Když je do odběru ještě několik dní a každý trvá věčnost.',
    12,
    ['two_week_wait'],
    ['cekani', 'psychika'],
    'Delší nahrávka určená na večer. Obsahuje techniku ukotvení pro chvíle, kdy myšlenky ujíždějí.',
    `Tohle čekání je jedna z nejtěžších věcí, kterou po vás někdo může chtít. Ne proto, že by bylo bolestivé, ale proto, že se během něj nedá nic dělat.

Sedněte si nebo si lehněte. Nechte ruce volně.

Nádech nosem na čtyři doby. Jedna, dva, tři, čtyři.

Zadržte na sedm. Jedna, dva, tři, čtyři, pět, šest, sedm.

Výdech ústy na osm. Jedna, dva, tři, čtyři, pět, šest, sedm, osm.

Ještě jednou, svým tempem. Nádech. Zadržet. Delší výdech.

A do třetice.

Když se vám točí hlava, dýchejte normálně. Tohle není zkouška.

Teď zkusíme něco jiného. Jmenuje se to ukotvení a hodí se pokaždé, když vás myšlenky odnesou moc daleko dopředu.

Rozhlédněte se a najděte pět věcí, které vidíte. Nemusíte je jmenovat nahlas. Jen si jich všimněte.

Teď čtyři věci, kterých se můžete dotknout. Látka. Vlastní kůže. Podlaha.

Tři zvuky. Možná ticho, možná lednička, možná auto venku.

Dvě vůně. Nebo dvě věci, které cítíte v místnosti.

A jedna věc, kterou právě teď chutnáte.

Jste tady. V téhle místnosti. V dnešním dni.

Ne v tom dni, kdy budete vědět výsledek. Ten den přijde sám a vy u něj budete.

Nádech. Výdech.

Tohle čekání skončí. Ať dopadne jakkoliv, skončí.

A vy jste ho zvládla o jeden den víc.`,
  ),

  audio(
    'med-rano-odberu',
    'Ráno odběru krve',
    'Deset minut na to, než vyrazíte pro výsledek.',
    8,
    ['two_week_wait', 'beta_positive'],
    ['cekani', 'psychika', 'vysledky'],
    'Krátká ranní nahrávka. Počítá s tím, že jste nespala a máte staženo v žaludku.',
    `Dnes se to dozvíte.

Nejspíš jste toho moc nenaspala. Možná se vám dělá špatně od žaludku. Možná jste od pěti ráno vzhůru a díváte se do stropu.

Sedněte si na kraj postele. Nohy na zem.

Nádech. Výdech.

Za pár hodin budete vědět něco, co teď nevíte. To je jediná jistota dnešního dne.

Nebudeme si teď nic přát ani si nic představovat. Jen si projdeme, co víte.

Víte, kam jdete. Víte, kdo tam bude. Víte, že to bude trvat pár minut.

Víte, komu zavoláte jako prvnímu.

A víte, že cokoliv přijde, nebudete to muset ustát v téhle vteřině. Budete mít čas.

Položte si ruku na hrudník. Cítíte, jak se zvedá?

Nádech. Výdech.

Vaše tělo vás dneska nese. Neseslo se za posledních pár týdnů, i když jste si to nemyslela.

Ještě jeden nádech.

A teď vstaňte. Zvládnete to.`,
  ),

  audio(
    'med-po-neuspechu',
    'Po neúspěšném cyklu',
    'Pro den, kdy přišla zpráva, kterou jste nechtěla.',
    11,
    ['waiting_next_attempt', 'repeated_failure', 'loss_biochemical'],
    ['ztrata', 'psychika'],
    'Nahrávka nemluví o dalším pokusu ani o naději. Zůstává u dneška.',
    `Nevyšlo to.

Nebudu vám říkat, že to bude dobré. Ani že příště. Ani že se to děje z nějakého důvodu.

Dneska nevyšlo něco, do čeho jste dala všechno, co jste měla.

Sedněte si. Nebo si lehněte. Nemusíte nic dělat správně.

Nádech. A výdech.

Jestli pláčete, plačte dál. Tahle nahrávka počká.

Jestli nepláčete a jen tupě koukáte do zdi, i to je v pořádku. Šok se projevuje různě.

Nádech.

Vaše tělo teď dostane příkaz přestat s léky a vrátit se zpátky. Bude to nějakou dobu trvat a bude se to projevovat na náladě. To, co budete cítit příští týden, nebude jen smutek — bude to i hormonální propad.

Výdech.

Nikdo od vás dneska nic nečeká. Ani vaše rodina, ani vaše práce, ani vy sama.

Dovolte si dnešek prostě přečkat.

A jestli vás napadá, co jste udělala špatně — nedělala. Ani jídlo, ani stres, ani ta jedna sklenka vína před měsícem. Tohle se rozhoduje na úrovni, kterou nikdo z nás neovlivní.

Nádech. Výdech.

Zítra bude další den. Nebude lepší, ale bude další.

Zůstaňte tu, jak dlouho potřebujete.`,
    { modifiers: ['after_loss', 'repeated_failure'] },
  ),

  audio(
    'med-po-ztrate',
    'Po ztrátě',
    'Pro chvíli, kdy na to nejsou slova.',
    13,
    ['loss_miscarriage', 'loss_missed', 'loss_ectopic', 'loss_biochemical'],
    ['ztrata', 'psychika'],
    'Nejtišší nahrávka v knihovně. Dlouhé pauzy jsou záměrné.',
    `Nebudu vám říkat nic užitečného. Na tohle nic užitečného není.

Jen tu s vámi chvíli budu.

Nádech, jestli to jde. A výdech.

Ztratila jste dítě. Nezáleží na tom, kolikátý to byl týden. Nezáleží na tom, jestli ho někdo viděl na ultrazvuku. Bylo vaše a už není.

Ta ztráta je skutečná a má právo bolet přesně tolik, kolik bolí.

Nádech.

Lidé kolem vám možná budou říkat věty, po kterých se vám udělá hůř. Že jste mladá. Že to bude příště. Že aspoň víte, že můžete otěhotnět.

Nemyslí to zle. Jen nevědí, co říct.

Vy nemusíte nic vysvětlovat ani nikoho utěšovat.

Výdech.

Jestli chcete, položte si ruce na břicho. Bylo tam. Vaše tělo o tom ví, i když už tam není.

Nemusíte se s tím vyrovnat. Nemusíte to překonat. Nemusíte v tom najít smysl.

Můžete jenom být.

Nádech. Výdech.

Za pár týdnů se vám bude zdát, že to okolí zapomnělo. Vy nezapomenete a nemusíte.

Zůstaňte tu, jak dlouho chcete.

A prosím — jestli je toho na vás moc, jestli nemůžete jíst, spát, nebo vás napadají myšlenky na ublížení sobě, ozvěte se svému lékaři nebo psychologovi. Tohle není něco, co se má zvládat sama.`,
    { modifiers: ['after_loss'] },
  ),

  audio(
    'med-na-usnuti',
    'Na usnutí',
    'Když je hlava plná a spánek nikde.',
    15,
    ['two_week_wait', 'stimulation', 'pregnancy', 'postpartum', 'waiting_next_attempt'],
    ['spanek', 'psychika', 'sebepece'],
    'Postupné uvolnění celého těla. Nahrávka na konci ztichne — usnutí je cíl, ne selhání.',
    `Lehněte si tak, jak budete spát.

Není potřeba se snažit usnout. Tahle nahrávka nemá žádný cíl, který byste mohla nesplnit.

Nádech nosem. Výdech ústy, delší.

Ještě jednou.

Teď projdeme tělo shora dolů. U každé části se jen na chvíli zastavíme.

Čelo. Uvolněte ho. Obočí klesne.

Oči. Nechte je těžké.

Čelist. Povolte ji. Jazyk se opře o patro a spadne.

Krk a ramena. Nechte je klesnout do podložky.

Paže. Těžké. Až po konečky prstů.

Hrudník. Dýchání jde samo, nemusíte ho řídit.

Břicho. Měkké.

Pánev. Uvolněná.

Stehna. Těžká.

Kolena. Lýtka.

Chodidla. Prsty u nohou.

Celé tělo je teď těžší, než bylo před minutou.

Jestli vám hlavou proběhne myšlenka — a proběhne — jen ji nechte projít. Nemusíte ji řešit. Ne teď v noci.

Nádech. Výdech.

Vaše práce na dnešek skončila.

Nádech.

Výdech.`,
  ),

  audio(
    'med-uzkost',
    'Při úzkosti',
    'Šest minut, když se vám stahuje hrudník a nejde se nadechnout.',
    6,
    ['two_week_wait', 'stimulation', 'high_risk_pregnancy', 'nicu', 'postpartum'],
    ['psychika', 'sebepece'],
    'Krátká nahrávka pro akutní úzkost. Začíná rychleji než ostatní a zpomaluje postupně.',
    `Jestli se vám teď špatně dýchá, nejste v nebezpečí. Úzkost to takhle dělá.

Postavte se nebo se posaďte tak, abyste měla rovná záda.

Položte jednu ruku na hrudník a druhou na břicho.

Nadechněte se tak, aby se zvedla ruka na břiše. Ne ta na hrudníku.

Nemusí to jít hned.

Znovu. Nádech do břicha.

A teď výdech — dlouhý, jako byste foukala do brčka. Pomalu.

Ještě jednou. Nádech do břicha na tři doby.

Výdech na šest.

Prodloužený výdech je to, co tělu říká, že je bezpečí. Není to trik. Je to fyziologie.

Znovu. Nádech tři.

Výdech šest.

Ještě dvakrát, svým tempem.

Až se dech srovná, rozhlédněte se po místnosti a najděte tři věci modré barvy.

Jste tady. Nic se právě teď neděje.

Úzkost odejde. Vždycky odejde.

A jestli se vrací často a brání vám fungovat, řekněte o tom svému lékaři. Existuje pomoc a nemusíte ji odmítat.`,
  ),

  audio(
    'med-nicu',
    'Pro maminku na NICU',
    'Deset minut pro sebe, když je vaše miminko na oddělení.',
    10,
    ['nicu', 'preterm_birth'],
    ['nicu', 'nedonosenost', 'psychika'],
    'Nahrávka určená pro chvíli mezi návštěvami. Nepracuje s vizualizacemi ani sliby.',
    `Vaše miminko je někde jinde než vy. To je proti všemu, co vaše tělo čeká.

Sedněte si. Klidně v autě, v čekárně, na chodbě.

Nádech. Výdech.

Nikdo vás nepřipravoval na to, že budete matkou dítěte, které nemůžete jen tak vzít do náruče. Že se budete ptát na dovolení, abyste se ho směla dotknout.

Nádech.

Ať vám kdokoliv říká cokoliv, tohle je těžké. Nemusíte být statečná. Nemusíte být vděčná za to, jak dobrou máte péči — můžete být vděčná a zároveň zoufalá.

Výdech.

To, co dneska pro své dítě děláte, se nedá vidět na monitoru. Odsáváte mléko v noci. Jezdíte tam a zpátky. Držíte ho na hrudi, i když se vám třesou ruce.

Jste tam. Každý den.

Položte si ruce na hrudník.

Nádech.

Výdech.

Tohle období skončí. Nevím kdy a nikdo vám to přesně neřekne. Ale jednou pojedete domů.

A do té doby máte právo být unavená, naštvaná i vyděšená.

Ještě dva nádechy.

A pak jděte za ním.`,
    { modifiers: ['preterm', 'nicu_stay'] },
  ),

  audio(
    'med-pred-porodem',
    'Před porodem',
    'Pro poslední týdny, kdy čekáte na první kontrakci.',
    12,
    ['birth_prep', 'pregnancy'],
    ['porod', 'psychika'],
    'Nahrávka obsahuje dechovou techniku, kterou lze použít i během kontrakcí.',
    `Za pár dní nebo týdnů to začne. Nikdo vám neřekne kdy — a to je nejspíš to nejtěžší.

Lehněte si na bok, ideálně na levý, s polštářem mezi koleny.

Nádech nosem. Výdech ústy.

Naučíme se teď dech, který se bude hodit i při kontrakcích.

Nádech nosem na čtyři doby.

Výdech ústy na šest až osm, s uvolněnou čelistí. Zvuk může vyjít ven — nemusí to být tiché.

Ještě jednou. Nádech nosem, čtyři.

Výdech, dlouhý, uvolněná čelist.

Uvolněná čelist a uvolněné pánevní dno spolu souvisí víc, než by se zdálo. Když povolíte ústa, povolí se i dole.

Ještě dvakrát, svým tempem.

Vaše tělo tuhle práci umí. Nebude to příjemné a nebudete mít kontrolu nad tím, jak dlouho to potrvá.

Ale nebudete tam sama. Bude tam tým lidí, jejichž prací je vás tím provést.

Nádech.

Výdech.

Nemusíte mít porod naplánovaný do detailu. Stačí vědět, co je pro vás důležité, a to říct nahlas.

Ještě jeden nádech.

A teď si odpočiňte. Sílu budete potřebovat.`,
  ),

  audio(
    'med-sestinedeli',
    'V šestinedělí',
    'Osm minut pro ženu, na kterou se nikdo neptá.',
    8,
    ['postpartum', 'coming_home'],
    ['sestinedeli', 'psychika', 'sebepece'],
    'Nahrávka počítá s tím, že ji posloucháte s miminkem na hrudi nebo mezi kojením.',
    `Všichni se ptají, jak je miminku.

Tahle nahrávka se ptá, jak jste vy.

Sedněte si nebo si lehněte. Miminko klidně nechte, kde je.

Nádech. Výdech.

Vaše tělo prošlo za posledních pár týdnů něčím, po čem by kdokoliv jiný ležel měsíc. Vy místo toho vstáváte každé dvě hodiny.

Nádech.

Bolí to. Krvácíte. Hormony vám dělají věci, kterým sama nerozumíte. A přitom se od vás čeká, že budete zářit.

Výdech.

Nemusíte.

Můžete být vyčerpaná. Můžete se cítit ztracená ve vlastním těle. Můžete milovat své dítě a zároveň si přát, aby vás jednu hodinu nikdo nepotřeboval.

Nic z toho z vás nedělá špatnou matku.

Položte si ruku na břicho — na to měkké, změněné břicho, které devět měsíců neslo člověka.

Nádech.

Výdech.

Tohle období je nejtěžší a nikdo o něm dost nemluví. Vy o něm mluvit můžete.

A jestli je smutek každý den silnější místo slabší, jestli nemůžete spát ani když můžete, řekněte to. Svému lékaři, gynekoložce, komukoliv. Poporodní deprese je nemoc, ne selhání.

Ještě jeden nádech.

Zvládáte to.`,
  ),

  audio(
    'med-kojeni-ve-tri-rano',
    'Kojení ve tři ráno',
    'Pro nejtišší a nejosamělejší hodinu dne.',
    7,
    ['postpartum', 'coming_home', 'baby_first_year'],
    ['kojeni', 'spanek', 'psychika'],
    'Velmi tichá nahrávka. Určená k poslechu se sluchátky, aby nevzbudila okolí.',
    `Jsou tři ráno a vy jste vzhůru.

Nemusíte nic dělat. Jen dýchejte a poslouchejte.

Nádech. Výdech.

Tahle hodina je nejosamělejší z celého dne. Zbytek domu spí a vy sedíte s dítětem u prsu a počítáte, kolik hodin zbývá do rána.

Nádech.

Právě teď je vzhůru spousta dalších žen. Sedí přesně jako vy, ve tmě, s bolavými zády a s miminkem, které pije.

Nejste v tom sama, i když to tak vypadá.

Výdech.

Uvolněte ramena. Jsou nejspíš nahoře.

Povolte čelist.

Opřete si záda. Podložte si ruku, ve které držíte miminko.

Nádech.

Tahle noc skončí. Skončí i tenhle týden. A jednou skončí i tohle období, i když si to teď neumíte představit.

Ale právě teď nemusíte nikam spěchat.

Výdech.

Až miminko dopije, položte ho a jděte si lehnout. Nádobí počká. Telefon počká. Všechno počká.

Ještě jeden nádech.

Zvládla jste další noc.`,
    { modifiers: ['breastfeeding'] },
  ),

  audio(
    'med-afirmace',
    'Afirmace bez vaty',
    'Sedm vět, které nelžou.',
    5,
    ['two_week_wait', 'stimulation', 'waiting_next_attempt', 'diagnostics', 'postpartum'],
    ['psychika', 'sebepece'],
    'Krátká nahrávka s pauzami mezi větami. Každou větu je možné si zopakovat nahlas.',
    `Většina afirmací lže. Slibují výsledek, který nikdo nemůže zaručit, a když nevyjde, cítíte se hůř.

Tyhle nelžou. Zopakujte si každou z nich, jestli chcete.

Nadechněte se.

„Dělám všechno, co je v mých silách.“

Nádech. Výdech.

„To, co cítím, je platné, i když to nedává smysl.“

Nádech. Výdech.

„Nemusím být silná každý den.“

Nádech. Výdech.

„Moje hodnota nezávisí na tom, jestli otěhotním.“

Nádech. Výdech.

„Nejsem v tom sama, i když to tak někdy vypadá.“

Nádech. Výdech.

„Mám právo si o pomoc říct.“

Nádech. Výdech.

„Dnešek zvládnu. Zítřek počká.“

Nádech.

Výdech.

To je všechno. Můžete se vrátit ke svému dni.`,
  ),

  audio(
    'med-telo-po-vsem',
    'Smíření s tělem',
    'Pro vztah k tělu, které vás podle vás zklamalo.',
    11,
    ['diagnostics', 'repeated_failure', 'waiting_next_attempt', 'postpartum'],
    ['psychika', 'sebepece'],
    'Nahrávka pro chvíle, kdy máte na vlastní tělo vztek.',
    `Hodně žen v léčbě popisuje, že se cítí zrazené vlastním tělem. Že jim nefunguje to jediné, co má fungovat samo.

Jestli to znáte, tahle nahrávka je pro vás.

Lehněte si. Ruce volně.

Nádech. Výdech.

Nebudeme si teď říkat, že máte své tělo milovat. To je moc velký skok.

Zkusíme něco menšího.

Zaměřte se na ruce. Co všechno dnes udělaly? Uvařily, napsaly, možná někoho pohladily.

Nádech.

Nohy. Kam vás dnes odnesly?

Výdech.

Plíce. Dýchají celý den, aniž byste o tom věděla.

Srdce. Bije od chvíle, kdy vám bylo pár týdnů v břiše vaší matky. Nikdy si nedalo pauzu.

Nádech.

Vaše tělo dělá tisíc věcí správně. Vy vidíte jednu, která nejde.

To je pochopitelné. Ale není to celá pravda.

Výdech.

Nemusíte si být s tělem blízké. Nemusíte mu odpustit. Můžete být naštvaná.

Ale zkuste dneska uznat, že vás sem doneslo. Přes všechna vyšetření, injekce a zákroky.

Nádech.

Výdech.

Stále je na vaší straně, i když to tak necítíte.`,
  ),
]

export const pack: ContentPack = {
  items: meditations,
}
