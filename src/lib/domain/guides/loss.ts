import type { PhaseGuide } from '../phase-guide'

/**
 * Fáze ztrát a zákroků kolem nich.
 *
 * Tyhle texty mají jiný tón než zbytek: nejdřív pojmenovat, teprve pak
 * informovat. Nikde tu není „aspoň víte, že můžete otěhotnět“ ani jiná
 * věta, která ženám v téhle situaci ubližuje.
 */

const GRIEF_MIND = {
  title: 'Kdy vyhledat odbornou pomoc',
  body: 'Když smutek trvá většinu dní déle než pár týdnů a nepolevuje, nemůžete spát, nedokážete fungovat v běžném dni, nebo vás napadají myšlenky na ublížení sobě — ozvěte se svému lékaři nebo psychologovi se zaměřením na reprodukční ztráty. Linka první psychické pomoci 116 123 funguje nepřetržitě a zdarma. Tohle není slabost a není to něco, co se má přečkat.',
}

export const LOSS_GUIDES: PhaseGuide[] = [
  {
    phase: 'loss_biochemical',
    summary: 'Biochemické těhotenství — pozitivní test, který nepokračoval. Byla to ztráta, i když ji nikdo neviděl.',
    whatAwaits: [
      'Klesající hodnoty hCG při kontrolních odběrech.',
      'Krvácení, které přichází obvykle krátce po tom, často jako silnější menstruace.',
      'Pokyn k vysazení podpory luteální fáze — vždycky až od lékaře.',
      'Návrat cyklu obvykle do čtyř až šesti týdnů.',
    ],
    prepareFor: [
      'Že okolí to bude zlehčovat („vždyť to ještě nebylo těhotenství“). Bylo. Pro vás začalo ve chvíli, kdy se objevila druhá čárka.',
      'Že se dozvíte málo o příčině. U jednorázové rané ztráty se obvykle nevyšetřuje.',
      'Zeptat se, kdy se můžete pokusit znovu — u většiny žen to není dlouhá pauza.',
    ],
    mind: [
      {
        title: 'Krátké těhotenství není malá ztráta',
        body: 'Délka nerozhoduje. Rozhoduje, kolik jste toho stihla v hlavě prožít — a to bývá u ženy po letech léčby mnohem víc než pár dní.',
      },
      {
        title: 'Nehledejte, co jste udělala špatně',
        body: 'Rané ztráty jsou nejčastěji způsobené chromozomální odchylkou embrya. Nezpůsobila je práce, cvičení, káva, stres ani let letadlem.',
      },
      GRIEF_MIND,
    ],
    body: [
      {
        title: 'Tělo se vrací rychle, hlava ne',
        body: 'Krvácení odezní obvykle během několika dní. Fyzicky můžete brzy fungovat normálně, což bývá matoucí — okolí předpokládá, že když chodíte do práce, je vyřešeno.',
      },
      {
        title: 'Kdy volat lékaře',
        body: 'Silné krvácení (promáčená vložka za hodinu a méně), horečka, prudká bolest břicha, závrať. Také když hodnoty beta neklesají tak, jak mají — to je potřeba dosledovat.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Pokud plánujete další těhotenství, má smysl ji brát průběžně — působí dřív, než se o těhotenství dozvíte.',
        evidence: 'standard',
      },
      {
        name: 'Železo',
        why: 'Po větší krevní ztrátě se doplňuje podle krevního obrazu.',
        evidence: 'podle hodnot',
      },
    ],
    partner: [
      'Byla to ztráta i pro vás. Máte právo být z toho špatně a říct to nahlas.',
      'Neříkejte „aspoň víme, že to jde“. Zní to jako útěcha a slyší se to jako zlehčení.',
      'Zeptejte se, jestli chce být sama, nebo ne. A ptejte se znovu za dva dny, odpověď se mění.',
    ],
    track: [
      'Klesající hodnoty hCG a datum každého odběru.',
      'Kdy začalo a skončilo krvácení.',
      'Nálada — bude houpat víc, než čekáte.',
    ],
    askDoctor: [
      'Musíme hodnoty dosledovat až k nule?',
      'Kdy se můžeme pokusit znovu?',
      'Má v naší situaci smysl něco vyšetřit?',
      'Kdy mám vysadit progesteron?',
    ],
    terms: ['Biochemické těhotenství', 'hCG', 'Zdvojovací čas', 'Progesteron'],
  },

  {
    phase: 'loss_ectopic',
    summary: 'Mimoděložní těhotenství. Je to akutní zdravotní stav a zároveň ztráta — obojí najednou.',
    whatAwaits: [
      'Sledování hodnot hCG a opakované ultrazvuky.',
      'Léčba metotrexátem, nebo operace — nejčastěji laparoskopicky. O způsobu rozhoduje stav a nález.',
      'Po metotrexátu dlouhé sledování hodnot až k nule a doporučená pauza před dalším těhotenstvím.',
      'Kontrola stavu vejcovodu a informace, co to znamená pro další pokusy.',
    ],
    prepareFor: [
      'Že rozhodování bývá rychlé a nebude čas si všechno promyslet.',
      'Že po metotrexátu se doporučuje několik měsíců nepočínat a nebrat kyselinu listovou v běžné dávce — přesné pokyny dá lékař.',
      'Zeptat se, jestli byl vejcovod zachován, nebo odstraněn, a co to znamená.',
      'Že strach z opakování bude v dalším těhotenství silný. To je normální a dá se s ním pracovat.',
    ],
    mind: [
      {
        title: 'Ohrožení a ztráta zároveň',
        body: 'Prošla jste akutním stavem, který mohl ohrozit váš život, a zároveň jste přišla o těhotenství. Okolí se soustředí na to, že jste v pořádku. Vy máte právo truchlit.',
      },
      {
        title: 'Strach v dalším těhotenství',
        body: 'Skoro každá žena po mimoděložním chce příští těhotenství potvrdit ultrazvukem co nejdřív. Řekněte to lékaři dopředu — brzká kontrola bývá běžně možná a hodně uleví.',
      },
      GRIEF_MIND,
    ],
    body: [
      {
        title: 'Po zákroku',
        body: 'Po laparoskopii se zotavení počítá na dny až dva týdny. Bez zvedání těžkého, bez sportu a bez plavání, dokud vám neřeknou jinak.',
      },
      {
        title: 'Kdy volat okamžitě',
        body: 'Prudká bolest břicha, bolest v rameni, závrať, mdloba, bušení srdce, silné krvácení. Při podezření na prasknutí vejcovodu volejte 155 — nečekejte na ordinační hodiny.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Po léčbě metotrexátem se s ní zachází jinak — metotrexát je antagonista folátu.',
        evidence: 'standard',
        note: 'Řiďte se výhradně pokyny lékaře. Tady obecné doporučení neplatí.',
      },
      {
        name: 'Železo',
        why: 'Po krevní ztrátě klesá hemoglobin a přidá se únava. Doplňuje se podle krevního obrazu, ne odhadem.',
        evidence: 'podle hodnot',
      },
    ],
    partner: [
      'Byla v ohrožení života. To, že je fyzicky v pořádku, neznamená, že je v pořádku.',
      'Pomozte s administrativou kolem hospitalizace a neschopenky.',
      'V dalším těhotenství s ní jděte na první ultrazvuk. Ten strach neuklidníte slovy.',
    ],
    track: [
      'Hodnoty hCG až k nule.',
      'Datum zákroku nebo podání metotrexátu.',
      'Doporučená doba, po kterou se nemá počínat.',
    ],
    askDoctor: [
      'Byl vejcovod zachován?',
      'Jak dlouho nesmím otěhotnět a proč?',
      'Jaké je riziko opakování a dá se s tím něco dělat?',
      'Můžeme příště potvrdit uložení těhotenství dřív?',
    ],
    terms: ['Mimoděložní těhotenství', 'Metotrexát', 'Laparoskopie', 'Hydrosalpinx', 'hCG'],
  },

  {
    phase: 'loss_missed',
    summary: 'Zamlklé těhotenství. Tělo o ztrátě ještě neví — a to je na tom to nejtěžší.',
    whatAwaits: [
      'Potvrzení nálezu druhým ultrazvukem, obvykle s odstupem několika dní.',
      'Volba mezi vyčkáváním, medikamentózním ukončením a revizí dutiny děložní.',
      'Nabídka genetického vyšetření tkáně, pokud to situace umožňuje.',
      'Kontrola za několik týdnů a návrat cyklu obvykle do čtyř až šesti týdnů.',
    ],
    prepareFor: [
      'Že budete chodit s těhotenstvím, které skončilo. Je to krutá a bohužel běžná část téhle diagnózy.',
      'Zeptat se na možnost genetického vyšetření tkáně dřív, než zákrok proběhne — potom už to nejde.',
      'Nechat si napsat neschopenku. Máte na ni nárok a je to jedno z nejlepších rozhodnutí, které teď můžete udělat.',
      'Že se vás lidé budou ptát na těhotenství, o kterém ještě nevědí.',
    ],
    mind: [
      {
        title: 'Ticho na ultrazvuku',
        body: 'Tenhle moment si ženy pamatují roky. Není to selhání vaší pozornosti, že jste nic netušila — u zamlklého těhotenství tělo příznaky často nedá.',
      },
      {
        title: 'Nezpůsobila jste to',
        body: 'Nejčastější příčinou je chromozomální odchylka, která vznikla náhodně. Nezpůsobila to práce, cvičení, stres, hádka ani to, že jste se dost neradovala.',
      },
      {
        title: 'Pojmenovat to pomáhá',
        body: 'Spousta žen napíše dopis nebo si zapíše datum. Nemusíte to nikomu ukazovat. Jde o to, aby to někde bylo napsané — protože jinak to zůstane jen ve vaší hlavě.',
      },
      GRIEF_MIND,
    ],
    body: [
      {
        title: 'Po zákroku',
        body: 'Krvácení jako silnější menstruace, obvykle několik dní až dva týdny. Bez plavání, bez tamponů a bez sexu podle doporučení, obvykle dva až tři týdny.',
      },
      {
        title: 'Kdy volat lékaře',
        body: 'Silné krvácení, horečka nad 38 °C, zapáchající výtok, prudká bolest břicha. Můžou to být příznaky infekce nebo zbytků v dutině děložní.',
      },
      {
        title: 'Návrat k pohybu',
        body: 'Chůzi hned, jak se na to cítíte. Sport až po kontrole a po odeznění krvácení.',
      },
    ],
    supplements: [
      {
        name: 'Železo',
        why: 'Po krevní ztrátě klesá hemoglobin a přidá se únava. Doplňuje se podle krevního obrazu, ne odhadem.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Kyselina listová (folát)',
        why: 'Pokračuje, pokud plánujete další těhotenství.',
        evidence: 'standard',
      },
    ],
    partner: [
      'Jděte s ní na kontrolní ultrazvuk. Tuhle zprávu nemá slyšet sama.',
      'Vyřiďte, co jde vyřídit — termín zákroku, neschopenku, omluvy v práci.',
      'Truchlete taky. Nemusíte držet formu, aby to ustála.',
      'Za měsíc, až to okolí přestane řešit, se zeptejte, jak jí je. Tehdy to bývá nejtěžší.',
    ],
    track: [
      'Datum nálezu a datum zákroku.',
      'Krvácení a bolest po zákroku.',
      'Návrat menstruace.',
      'Nálada v čase — a jestli se po několika týdnech zvedá.',
    ],
    askDoctor: [
      'Jaké mám možnosti a co doporučujete?',
      'Můžeme nechat tkáň geneticky vyšetřit?',
      'Kdy se vrátí cyklus a kdy se můžeme pokusit znovu?',
      'Má u nás smysl vyšetření na opakované ztráty?',
    ],
    terms: ['Zamlklé těhotenství', 'Revize dutiny děložní', 'Karyotyp', 'Srůsty v dutině děložní', 'Očistky'],
  },

  {
    phase: 'loss_miscarriage',
    summary: 'Potrat. Nejčastější komplikace raného těhotenství — a jedna z nejosamělejších.',
    whatAwaits: [
      'Krvácení a křeče, které mohou trvat několik dní.',
      'Kontrola, jestli dutina děložní zůstala prázdná — někdy stačí sledování, jindy je potřeba revize.',
      'Kontrolní odběry hCG až k nule, pokud to lékař požaduje.',
      'Návrat menstruace obvykle za čtyři až šest týdnů.',
    ],
    prepareFor: [
      'Že krvácení může být silnější, než čekáte, a přijít ve vlnách.',
      'Mít doma vložky, analgetika podle doporučení lékaře a někoho, kdo může přijet.',
      'Vědět dopředu, kdy volat pohotovost — u silného krvácení se nečeká.',
      'Že vám okolí bude říkat, jak je to časté. Statistika neutěší.',
    ],
    mind: [
      {
        title: 'Časté neznamená snadné',
        body: 'Potrat prodělá zhruba každé páté rozpoznané těhotenství. Pro vás to není statistika, ale konkrétní dítě, které jste si už představila.',
      },
      {
        title: 'Osamělost je součást',
        body: 'Většina žen o raném těhotenství ještě neřekla nikomu. O ztrátě se pak mlčí taky — a truchlí se bez toho, aby to okolí vůbec vědělo. Řekněte to aspoň jednomu člověku.',
      },
      {
        title: 'Data, která si připomenete',
        body: 'Termín porodu, který už nebude. Výročí. Není chyba si je pamatovat, a není chyba je nechat být.',
      },
      GRIEF_MIND,
    ],
    body: [
      {
        title: 'Kdy volat okamžitě',
        body: 'Promáčení vložky za hodinu nebo rychleji, mdloba, prudká bolest, horečka nad 38 °C, zapáchající výtok. Při silném krvácení se závratí volejte 155.',
      },
      {
        title: 'Pohyb a koupání',
        body: 'Sprcha ano, vana a bazén ne, dokud krvácíte. K pohybu se vraťte přes chůzi; se sportem počkejte, až krvácení skončí.',
      },
    ],
    supplements: [
      {
        name: 'Železo',
        why: 'Po krevní ztrátě klesá hemoglobin a přidá se únava. Doplňuje se podle krevního obrazu.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Kyselina listová (folát)',
        why: 'Pokračuje, pokud plánujete další těhotenství.',
        evidence: 'standard',
      },
    ],
    partner: [
      'Buďte doma. Krvácení může být děsivé a nemá u toho být sama.',
      'Neříkejte „zkusíme to znovu“ dřív, než to řekne ona.',
      'Vezměte na sebe telefonáty a vysvětlování okolí.',
    ],
    track: [
      'Kdy začalo a skončilo krvácení, jak silné bylo.',
      'Kontrolní hodnoty hCG.',
      'Návrat menstruace.',
      'Nálada v čase.',
    ],
    askDoctor: [
      'Je dutina prázdná, nebo je potřeba revize?',
      'Musíme dosledovat hCG?',
      'Kdy se můžeme pokusit znovu?',
      'Po kolika ztrátách má smysl začít vyšetřovat příčinu?',
    ],
    terms: ['Očistky', 'Revize dutiny děložní', 'Opakované ztráty těhotenství', 'hCG'],
  },

  {
    phase: 'uterine_revision',
    summary: 'Revize dutiny děložní. Krátký zákrok v narkóze, po kterém se většina žen vrací domů týž den.',
    whatAwaits: [
      'Příchod nalačno a krátký zákrok v celkové anestezii.',
      'Odchod domů obvykle týž den, někdy po noci na oddělení.',
      'Krvácení několik dní, slabší než při potratu.',
      'Kontrola za dva až tři týdny.',
    ],
    prepareFor: [
      'Doprovod — po narkóze nesmíte řídit ani zůstat sama.',
      'Zeptat se předem, jestli se odebraná tkáň pošle na genetické vyšetření.',
      'Neschopenku na několik dní.',
      'Vložky, volné oblečení, jídlo doma připravené dopředu.',
    ],
    mind: [
      {
        title: 'Zákrok, který uzavírá',
        body: 'Pro řadu žen je tenhle den paradoxně úlevný — končí čekání a nejistota. Zároveň to bývá den, kdy ztráta konečně dolehne. Obojí je v pořádku.',
      },
      GRIEF_MIND,
    ],
    body: [
      {
        title: 'Po zákroku',
        body: 'Klid dva až tři dny, žádné zvedání těžkého. Bez tamponů, bez vany, bez bazénu a bez sexu obvykle dva až tři týdny — přesně vám to řekne lékař.',
      },
      {
        title: 'Kdy volat lékaře',
        body: 'Horečka nad 38 °C, zapáchající výtok, silné krvácení nebo bolest, která se zhoršuje. Můžou to být příznaky infekce.',
      },
    ],
    supplements: [
      {
        name: 'Železo',
        why: 'Po krevní ztrátě klesá hemoglobin. Doplňuje se podle výsledku krevního obrazu.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Kyselina listová (folát)',
        why: 'Pokračuje, pokud plánujete další těhotenství.',
        evidence: 'standard',
      },
    ],
    partner: [
      'Odvezte ji a vyzvedněte. Po narkóze nesmí řídit.',
      'Připravte doma jídlo a klid dopředu. Ten den na to nebude mít nikdo hlavu.',
    ],
    track: [
      'Datum zákroku.',
      'Krvácení a bolest v následujících dnech.',
      'Termín kontroly a návrat menstruace.',
    ],
    askDoctor: [
      'Pošlete tkáň na genetické vyšetření?',
      'Jak dlouho mám počkat s dalším pokusem?',
      'Je riziko srůstů a jak ho poznáme?',
      'Kdy je kontrola a co se na ní bude hodnotit?',
    ],
    terms: ['Revize dutiny děložní', 'Srůsty v dutině děložní', 'Hysteroskopie', 'Karyotyp'],
  },

  {
    phase: 'genetic_testing',
    summary: 'Genetické vyšetření. Hledá se, jestli za opakovanými ztrátami nebo neúspěchy nestojí něco, co se dá zohlednit.',
    whatAwaits: [
      'Odběr krve obou partnerů na karyotyp.',
      'Konzultace s klinickým genetikem, která bývá delší než běžný termín.',
      'Čekání na výsledky — týdny, ne dny.',
      'Vysvětlení, co nález znamená pro další pokusy a jestli má smysl PGT.',
    ],
    prepareFor: [
      'Že většina výsledků vyjde bez nálezu. Není to zbytečné vyšetření — vyloučit příčinu je taky informace.',
      'Sepsat rodinnou anamnézu obou partnerů: potraty, vrozené vady, dědičná onemocnění, úmrtí dětí.',
      'Vzít na konzultaci partnera. Většina vyšetření se týká obou.',
      'Že genetik mluví v pravděpodobnostech, ne v jistotách. Je dobré si to zapisovat.',
    ],
    mind: [
      {
        title: 'Hledání viníka nikam nevede',
        body: 'Když se nález objeví u jednoho z partnerů, přichází vina. Vyvážená translokace ani jiná odchylka není nic, co by kdo způsobil nebo mohl ovlivnit.',
      },
      {
        title: 'Čekání na výsledek',
        body: 'Několik týdnů, během kterých se nedá nic dělat. Naplánujte si na tu dobu něco, co s léčbou nesouvisí.',
      },
    ],
    body: [
      {
        title: 'Bez omezení',
        body: 'Genetické vyšetření je odběr krve. Žádná příprava, žádná omezení, nemusíte být nalačno, pokud vám neřekli jinak.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Bere se dál i během vyšetřování — další pokus může přijít dřív, než čekáte.',
        evidence: 'standard',
      },
    ],
    partner: [
      'Karyotyp se dělá oběma. Bez vašeho vzorku je vyšetření neúplné.',
      'Jděte na konzultaci s genetikem spolu a zapisujte si — padne tam hodně čísel.',
      'Pokud nález vyjde u vás, není to vaše vina a nic to nemění na tom, že v tom jedete spolu.',
    ],
    track: [
      'Které vyšetření proběhlo a kdy.',
      'Výsledky a jak je genetik vysvětlil.',
      'Doporučení pro další postup.',
    ],
    askDoctor: [
      'Co konkrétně to vyšetření hledá?',
      'Co bude znamenat pozitivní a co negativní nález?',
      'Má u nás smysl PGT-M nebo PGT-A?',
      'Jak dlouho budeme čekat na výsledek?',
    ],
    terms: ['Karyotyp', 'Vyvážená translokace', 'PGT-A', 'PGT-M', 'Opakované ztráty těhotenství'],
  },
]
