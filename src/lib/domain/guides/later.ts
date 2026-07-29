import type { PhaseGuide } from '../phase-guide'

/**
 * Fáze po pozitivním výsledku — těhotenství, porod, miminko.
 *
 * Těžiště aplikace je cesta za otěhotněním, ale nikdo nemá skončit na prázdné
 * obrazovce jen proto, že to vyšlo. Tyhle průvodce jsou stručnější; podrobnosti
 * nesou články v knihovně, kterých je pro tyhle fáze nejvíc.
 */

export const LATER_GUIDES: PhaseGuide[] = [
  {
    phase: 'early_pregnancy',
    summary: 'První týdny. Nejvíc strachu a nejmíň jistoty — a přitom se toho děje nejvíc.',
    whatAwaits: [
      'První ultrazvuk mezi 6. a 8. týdnem: uložení těhotenství a srdeční akce.',
      'Předání z centra asistované reprodukce do péče gynekologa.',
      'Nevolnosti a únava, které vrcholí obvykle mezi 8. a 12. týdnem.',
      'Prvotrimestrální screening zhruba mezi 11. a 14. týdnem.',
    ],
    prepareFor: [
      'Vysazení podpory luteální fáze — rozhoduje o něm lékař, obvykle mezi 10. a 12. týdnem.',
      'Rozmyslet si, kdy a komu to řeknete.',
      'Zjistit, na co máte v práci nárok a kdy to nahlásit.',
    ],
    mind: [
      {
        title: 'Strach nezmizí pozitivním testem',
        body: 'Po letech léčby je normální kontrolovat papír na toaletě a čekat na ránu. Časem se to zmírní, ale ne hned a ne úplně.',
      },
      {
        title: 'Kontrolovat srdíčko doma nepomáhá',
        body: 'Domácí dopplery v raném těhotenství častěji vyděsí, než uklidní — ozvy se nemusí najít, i když je všechno v pořádku.',
      },
    ],
    body: [
      {
        title: 'Pohyb',
        body: 'Chůze, plavání, těhotenská jóga. Vynechte nárazové sporty, zvedání těžkého, přehřívání a sporty s rizikem pádu.',
      },
      {
        title: 'Kdy volat okamžitě',
        body: 'Silné krvácení, prudká jednostranná bolest, bolest v rameni, závrať nebo mdloba.',
      },
    ],
    supplements: [
      { name: 'Kyselina listová (folát)', why: 'Nejdůležitější je v prvních týdnech, kdy se uzavírá neurální trubice miminka.', evidence: 'standard' },
      { name: 'Jód', why: 'Jód je potřebný pro vývoj mozku miminka a pro štítnou žlázu. Potřeba v těhotenství stoupá.', evidence: 'standard', note: 'Při onemocnění štítné žlázy podle lékaře.' },
      { name: 'Vitamin D', why: 'Doplňuje se podle naměřené hladiny, ne paušálně.', evidence: 'podle hodnot' },
      { name: 'Progesteron', why: 'Udržuje děložní sliznici připravenou, dokud placenta nepřevezme tvorbu hormonů. U IVF je to standard, ne volba.', evidence: 'standard', note: 'O vysazení rozhoduje lékař.' },
    ],
    partner: [
      'Jděte na první ultrazvuk. Je to termín, na kterém se hodně rozhoduje.',
      'Nevolnost a únava jsou vyčerpávající. Vezměte na sebe víc domácnosti, aniž byste se ptal.',
      'Nezlehčujte její strach. Po tom, čím prošla, dává smysl.',
    ],
    track: ['Gestační týden a den.', 'Hodnoty z odběrů.', 'Termíny kontrol a screeningů.', 'Nevolnost a únava — uvidíte, kdy vrcholí.'],
    askDoctor: [
      'Je těhotenství uložené v děloze a odpovídá velikost týdnu?',
      'Do kdy beru progesteron?',
      'Kdy mě předáte gynekologovi a co si mám vzít s sebou?',
      'Jaké screeningy mě čekají a kdy?',
    ],
    terms: ['Gestační váček', 'Beta hCG', 'Progesteron', 'Prvotrimestrální screening'],
  },

  {
    phase: 'pregnancy',
    summary: 'Těhotenství týden po týdnu. Obsah se řídí gestačním stářím, ne datem otěhotnění.',
    whatAwaits: [
      'Pravidelné kontroly, zpočátku po čtyřech týdnech, ke konci častěji.',
      'Ultrazvuk ve 20.–22. týdnu — podrobné vyšetření vývoje.',
      'Test na těhotenskou cukrovku mezi 24. a 28. týdnem.',
      'První pohyby mezi 18. a 22. týdnem, u druhého těhotenství dřív.',
    ],
    prepareFor: [
      'Vybrat porodnici a zjistit, jestli má smysl se registrovat dopředu.',
      'Předporodní kurz — zapisuje se často s velkým předstihem.',
      'Vyřídit si těhotenskou průkazku a nosit ji s sebou.',
    ],
    mind: [
      {
        title: 'Těhotenství po léčbě je jiné',
        body: 'Radost přichází opatrněji a často až po ultrazvuku ve 20. týdnu. Nepotřebujete se k ní nutit.',
      },
      {
        title: 'Srovnávání s ostatními',
        body: 'V kurzech a diskuzích potkáte ženy, kterým to vyšlo napoprvé. Vaše cesta byla jiná a nemusíte ji vysvětlovat.',
      },
    ],
    body: [
      {
        title: 'Pohyb v těhotenství',
        body: 'Doporučuje se pravidelný mírný pohyb — chůze, plavání, těhotenská jóga, cvičení pánevního dna. Vyhněte se sportům s rizikem pádu, poloze na zádech ve vyšších týdnech a přehřívání.',
      },
      {
        title: 'Kdy volat okamžitě',
        body: 'Krvácení, odtok plodové vody, silné bolesti hlavy s poruchou vidění, prudké otoky, výrazný pokles pohybů miminka.',
      },
    ],
    supplements: [
      { name: 'Kyselina listová (folát)', why: 'Podle doporučení lékaře i po prvním trimestru.', evidence: 'standard' },
      { name: 'Jód', why: 'Potřebný pro vývoj mozku miminka a pro funkci štítné žlázy po celé těhotenství.', evidence: 'standard' },
      { name: 'Železo', why: 'Podle krevního obrazu — anémie je v těhotenství častá.', evidence: 'podle hodnot' },
      { name: 'Omega-3 (DHA)', why: 'Pro vývoj mozku a sítnice, hlavně pokud nejíte ryby.', evidence: 'diskutovaný' },
      { name: 'Vitamin D', why: 'Doplňuje se podle naměřené hladiny, ne paušálně.', evidence: 'podle hodnot' },
    ],
    partner: [
      'Choďte na ultrazvuky. Zvlášť na ten ve 20. týdnu.',
      'Zapojte se do výběru porodnice a do předporodního kurzu.',
      'Ptejte se, jak se cítí — ne jen jak roste bříško.',
    ],
    track: ['Gestační týden.', 'Váha a tlak.', 'Pohyby miminka ve třetím trimestru.', 'Nálada a spánek.'],
    askDoctor: [
      'Je růst miminka v normě?',
      'Jaké vyšetření mě čeká příště a proč?',
      'Mám kvůli IVF něco jinak než ostatní?',
      'Kdy se mám hlásit v porodnici?',
    ],
    terms: ['Gestační stáří', 'Prvotrimestrální screening', 'Gestační diabetes', 'KTG'],
  },

  {
    phase: 'high_risk_pregnancy',
    summary: 'Rizikové těhotenství. Znamená to častější kontroly — ne že se něco musí stát.',
    whatAwaits: [
      'Častější kontroly, často ve specializovaném centru.',
      'Podrobnější sledování růstu a průtoků.',
      'Někdy doporučení klidového režimu nebo pracovní neschopnosti.',
    ],
    prepareFor: [
      'Zjistit, co přesně vaše riziko znamená a co se sleduje.',
      'Mít připravené kontakty a vědět, kam volat mimo ordinační hodiny.',
      'Sbalit tašku do porodnice dřív než v termínu.',
    ],
    mind: [
      {
        title: 'Slovo „rizikové“ děsí víc, než musí',
        body: 'Označení znamená hlavně intenzivnější dohled. Zeptejte se konkrétně, jaké riziko se sleduje a jaká čísla by byla varovná.',
      },
      {
        title: 'Když je doporučený klid',
        body: 'Omezení pohybu bývá psychicky náročnější než fyzicky. Naplánujte si den, i když ho trávíte doma.',
      },
    ],
    body: [
      {
        title: 'Pohyb podle doporučení',
        body: 'Tady neplatí obecná pravidla — řiďte se tím, co vám řekl lékař. Pokud klid doporučený není, mírný pohyb obvykle prospívá.',
      },
      {
        title: 'Kdy volat okamžitě',
        body: 'Krvácení, odtok vody, pravidelné stahy před termínem, silné bolesti hlavy s poruchou vidění, prudké otoky, pokles pohybů.',
      },
    ],
    supplements: [
      { name: 'Podle doporučení lékaře', why: 'U rizikového těhotenství se často přidávají léky, které mají přednost před obecnými doporučeními.', evidence: 'standard', note: 'Nic si nepřidávejte sama — interakce jsou tady zásadní.' },
    ],
    partner: [
      'Choďte na kontroly a pište si, co zaznělo.',
      'Vezměte na sebe víc domácnosti, hlavně když je doporučený klid.',
      'Mějte v telefonu čísla na centrum a vědět, kam se v noci jede.',
    ],
    track: ['Tlak, pokud ho máte měřit doma.', 'Otoky a bolesti hlavy.', 'Pohyby miminka.', 'Váha.'],
    askDoctor: [
      'Jaké konkrétní riziko sledujeme?',
      'Jaké hodnoty by byly varovné?',
      'Kam mám volat v noci a o víkendu?',
      'Kde budu rodit a proč?',
    ],
    terms: ['Preeklampsie', 'Gestační diabetes', 'KTG', 'Tokolýza', 'Kortikoidy před porodem'],
  },

  {
    phase: 'hospitalization',
    summary: 'Hospitalizace v těhotenství. Cílem je získat čas — každý den navíc se počítá.',
    whatAwaits: [
      'Pravidelné monitorování (KTG) a ultrazvuky.',
      'Někdy léky na oddálení porodu a kortikoidy na plíce miminka.',
      'Dny, které jsou dlouhé a pořád stejné.',
    ],
    prepareFor: [
      'Vzít si vlastní polštář, nabíječku, zátkové ucpávky do uší a něco na čtení.',
      'Domluvit si návštěvy tak, aby byly rozložené.',
      'Zjistit denní režim oddělení — kdy jsou vizity a kdy je klid.',
    ],
    mind: [
      {
        title: 'Ztráta kontroly',
        body: 'Nerozhodujete o svém dni ani o svém těle. Pomáhá si vytvořit vlastní malý řád: ranní rutina, jedna věc dopoledne, jedna odpoledne.',
      },
      {
        title: 'Každý den se počítá',
        body: 'V tomhle období má smysl počítat dny nahoru, ne dolů. Každý den navíc znamená pro miminko konkrétní rozdíl.',
      },
    ],
    body: [
      {
        title: 'Pohyb na lůžku',
        body: 'Pokud není zakázán, mají smysl jednoduché cviky na prokrvení nohou a dýchání. Zeptejte se fyzioterapeuta na oddělení.',
      },
      { title: 'Prevence trombózy', body: 'Při delším ležení se často doporučují kompresní punčochy nebo léky. Řiďte se pokyny.' },
    ],
    supplements: [
      { name: 'Podle ordinace', why: 'Na oddělení dostáváte, co je potřeba. Vlastní doplňky vždycky nahlaste.', evidence: 'standard' },
    ],
    partner: [
      'Choďte pravidelně, i na krátko. Pravidelnost je víc než délka.',
      'Noste věci z domova — vlastní polštář, jídlo, které má ráda.',
      'Řešte administrativu, ať to nemusí z postele.',
    ],
    track: ['Gestační týden a den — počítejte nahoru.', 'Co bylo na vizitě.', 'Nálada.'],
    askDoctor: [
      'Jaký je cíl — do kolikátého týdne se snažíme dojít?',
      'Co by znamenalo, že se to zhoršuje?',
      'Dostala jsem kortikoidy a proč?',
      'Kde bude miminko po porodu?',
    ],
    terms: ['Tokolýza', 'Kortikoidy před porodem', 'KTG', 'Předčasný porod'],
  },

  {
    phase: 'birth_prep',
    summary: 'Poslední týdny. Teď už jde hlavně o připravenost — vaši i tašky u dveří.',
    whatAwaits: [
      'Kontroly každý týden, KTG.',
      'Předzvěsti: poslíčci, odchod hlenové zátky, nepravidelné stahy.',
      'Rozhodnutí o způsobu porodu, pokud je co rozhodovat.',
    ],
    prepareFor: [
      'Sbalit tašku do porodnice, ideálně kolem 35. týdne.',
      'Sepsat porodní přání na jednu stránku.',
      'Vědět, kdy vyrazit: pravidelné stahy, odtok vody, krvácení, pokles pohybů.',
      'Domluvit odvoz a hlídání pro starší dítě nebo psa.',
    ],
    mind: [
      {
        title: 'Strach z porodu je normální',
        body: 'Pomáhá vědět, co se bude dít, a mít napsané, co si přejete. Porodní přání není smlouva — je to způsob, jak vás poznají, když nebudete moct mluvit.',
      },
      {
        title: 'Po IVF přichází zvláštní nedůvěra',
        body: 'Řada žen po léčbě nedokáže uvěřit, že si dítě odveze domů. Je to obvyklé a zmizí to většinou až s ním v náručí.',
      },
    ],
    body: [
      {
        title: 'Pohyb do konce',
        body: 'Chůze, jóga, dýchání, cviky na pánevní dno. Pomáhá to i s polohou miminka.',
      },
      {
        title: 'Kdy volat',
        body: 'Odtok plodové vody, krvácení, pravidelné bolestivé stahy, výrazný pokles pohybů, silné bolesti hlavy s poruchou vidění.',
      },
    ],
    supplements: [
      { name: 'Železo', why: 'Podle krevního obrazu — před porodem se hodnota kontroluje.', evidence: 'podle hodnot' },
      { name: 'Vitamin D a jód', why: 'Jód a vitamin D se v těhotenství doplňují dál — jód pro vývoj miminka, vitamin D podle naměřené hladiny.', evidence: 'standard' },
    ],
    partner: [
      'Přečtěte si porodní přání a umějte ho tlumočit.',
      'Mějte nachystanou cestu do porodnice a plnou nádrž.',
      'Vaše role u porodu je hlavně být u ní a nemluvit za ni, když mluvit může.',
    ],
    track: ['Gestační týden.', 'Pohyby miminka.', 'Předzvěsti a stahy.'],
    askDoctor: [
      'Jak poznám, že mám jet?',
      'Kam volám, když si nebudu jistá?',
      'Je něco, co v mém případě mění průběh porodu?',
      'Kdy se řeší vyvolání, pokud termín přejdu?',
    ],
    terms: ['Bishop skóre', 'KTG', 'Předzvěsti porodu', 'Epidurální analgezie'],
  },

  {
    phase: 'birth',
    summary: 'Porod. Ať proběhne jakkoliv, je to den, kdy se to celé sešlo.',
    whatAwaits: [
      'Tři doby porodní: otevírací, vypuzovací a porod placenty.',
      'Možnosti tlumení bolesti — od polohy a dýchání po epidurál.',
      'Zlatá hodina: první kontakt kůže na kůži, pokud to stav dovolí.',
    ],
    prepareFor: [
      'Že se plán může změnit. Císař ani epidurál nejsou selhání.',
      'Že první hodiny po porodu jsou mlha. Ať někdo píše, co se dělo.',
    ],
    mind: [
      {
        title: 'Když to bylo jinak',
        body: 'Neplánovaný císař nebo komplikace mohou zanechat pocit selhání i porodní trauma. Je to léčitelné a má smysl o tom mluvit — s porodní asistentkou, psychologem nebo na kontrole.',
      },
    ],
    body: [
      { title: 'Bezprostředně po porodu', body: 'Sledují se krvácení, děloha a stav. Vstávejte poprvé s doprovodem.' },
      { title: 'Kdy volat sestru', body: 'Silné krvácení, závrať, prudká bolest, horečka.' },
    ],
    supplements: [
      { name: 'Železo', why: 'Po krevní ztrátě klesá hemoglobin a přidá se únava. Doplňuje se podle krevního obrazu, ne odhadem.', evidence: 'podle hodnot' },
    ],
    partner: [
      'Buďte u ní a mluvte za ni jen tehdy, když nemůže sama.',
      'Zapisujte si čas narození, míry a co říkali. Ona si to pamatovat nebude.',
      'Kůže na kůži funguje i u vás, když ona nemůže.',
    ],
    track: ['Čas narození, míry.', 'Jak porod probíhal — pro pozdější zpracování i pro kroniku.'],
    askDoctor: ['Jak probíhá porod a co se bude dít dál?', 'Jaké mám možnosti tlumení bolesti?', 'Můžeme mít kontakt kůže na kůži?'],
    terms: ['Tři doby porodní', 'Epidurální analgezie', 'Epiziotomie', 'Zlatá hodina', 'Apgar skóre'],
  },

  {
    phase: 'preterm_birth',
    summary: 'Předčasný porod. Miminko přišlo dřív a péče o něj teď pokračuje na oddělení.',
    whatAwaits: [
      'Přítomnost neonatologického týmu u porodu.',
      'Převoz miminka na oddělení, často dřív, než si ho stihnete pořádně prohlédnout.',
      'První informace o jeho stavu během několika hodin.',
    ],
    prepareFor: [
      'Že první setkání bude krátké a přes okénko inkubátoru.',
      'Že se začne mluvit o odstříkávání mléka velmi brzy — má to smysl.',
    ],
    mind: [
      { title: 'Odloučení hned po porodu', body: 'Je to jedna z nejtěžších věcí, které se v porodnici dějí. Nemusíte být statečná. Ptejte se, kdy za ním můžete jít.' },
    ],
    body: [
      { title: 'Vaše zotavení taky existuje', body: 'Po císaři nebo po porodu potřebujete odpočinek. Nedá se být u inkubátoru nepřetržitě a je v pořádku odejít se vyspat.' },
    ],
    supplements: [
      { name: 'Železo', why: 'Po krevní ztrátě se hodnota kontroluje a doplňuje podle výsledku.', evidence: 'podle hodnot' },
    ],
    partner: [
      'Vy se k miminku často dostanete dřív než ona. Foťte a popisujte.',
      'Buďte spojka mezi oddělením a jí, dokud nemůže vstávat.',
    ],
    track: ['Gestační týden při porodu — z něj se počítá korigovaný věk.', 'Váha a míry.', 'Co říkal neonatolog.'],
    askDoctor: ['Jak je na tom miminko?', 'Kdy za ním můžu?', 'Kdy mám začít odstříkávat?', 'Co bude v nejbližších dnech?'],
    terms: ['Předčasný porod', 'Korigovaný věk', 'Kortikoidy před porodem', 'Klokánkování'],
  },

  {
    phase: 'nicu',
    summary: 'Oddělení. Život v rytmu vizit, alarmů a gramů — a je to maraton, ne sprint.',
    whatAwaits: [
      'Denní vizity a informace, které se mění ze dne na den.',
      'Klokánkování, jakmile to stav dovolí.',
      'Kroky dopředu i dozadu. Střídají se a je to běžný průběh.',
      'Postupné přebírání péče, jak se miminko stabilizuje.',
    ],
    prepareFor: [
      'Že se naučíte číst monitory dřív než výraz svého dítěte.',
      'Odstříkávání v pravidelných intervalech včetně noci.',
      'Cestu domů bez miminka. Je to jedna z nejtěžších částí.',
    ],
    mind: [
      { title: 'Maraton, ne sprint', body: 'Nedá se u inkubátoru být nepřetržitě. Odpočinek není zrada — bez něj to nevydržíte do propuštění.' },
      { title: 'Klokánkování pomáhá oběma', body: 'Kontakt kůže na kůži prokazatelně stabilizuje miminko a zároveň podporuje tvorbu mléka. Je to nejužitečnější věc, kterou tam můžete dělat.' },
      { title: 'Kdy vyhledat pomoc', body: 'Dlouhodobá úzkost, nespavost i mimo oddělení, pocit odpojení od miminka. Na perinatologických centrech bývá psycholog — využijte ho.' },
    ],
    body: [
      { title: 'Odstříkávání', body: 'Pravidelnost je důležitější než množství. Množství kolísá a v prvních dnech jde o mililitry.' },
      { title: 'Vaše zotavení', body: 'Po císaři platí omezení dál — nezvedat těžké, nechodit do bazénu, hlídat jizvu.' },
    ],
    supplements: [
      { name: 'Železo', why: 'Po porodu bývá hemoglobin nízký a projeví se to únavou. Doplňuje se podle krevního obrazu.', evidence: 'podle hodnot' },
      { name: 'Vitamin D', why: 'Pro vás podle hodnot; pro miminko podle pediatra.', evidence: 'podle hodnot' },
    ],
    partner: [
      'Choďte na vizity, když ona nemůže, a ptejte se na konkrétní čísla.',
      'Vezměte na sebe noc doma, ať si může odstříkat a spát.',
      'Nechte ji mluvit o strachu, aniž byste ho hned vyvracel.',
    ],
    track: ['Váha po dnech — nejsledovanější číslo.', 'Kolik odstříkáno.', 'Kroky dopředu: CPAP, sondy, první kojení.', 'Vaše nálada.'],
    askDoctor: [
      'Jak je na tom dnes a co se změnilo?',
      'Co je cílem, než půjde domů?',
      'Kdy můžu klokánkovat a jak dlouho?',
      'Jaká vyšetření ho čekají?',
    ],
    terms: ['Korigovaný věk', 'Klokánkování', 'Kolostrum', 'CPAP', 'ROP'],
  },

  {
    phase: 'coming_home',
    summary: 'Návrat domů. Konečně bez alarmů — a najednou bez sester, které vždycky věděly, co dělat.',
    whatAwaits: [
      'První dny doma, kdy chybí monitory a jistota personálu.',
      'Návaznou péči: pediatr, případně rehabilitace a specializované poradny.',
      'Postupné hledání vlastního režimu.',
    ],
    prepareFor: [
      'Zjistit, jaké kontroly miminko čekají a kdy.',
      'Mít kontakt na dětskou sestru a pediatra dřív, než ho budete potřebovat.',
      'Omezit návštěvy v prvních týdnech, hlavně v sezóně respiračních infekcí.',
    ],
    mind: [
      { title: 'Úzkost po propuštění', body: 'Kontrola dechu každou hodinu je běžná. Obvykle ustoupí během několika týdnů. Když ne, řekněte to pediatrovi nebo svému lékaři.' },
    ],
    body: [
      { title: 'Váš návrat k pohybu', body: 'Po císaři obvykle po šestinedělní kontrole a přes pánevní dno a hluboký stabilizační systém, ne přes břišní cviky.' },
      { title: 'Kdy volat lékaře', body: 'Odmítání pití, netečnost, zrychlené nebo namáhavé dýchání, teplota u novorozence, změna barvy. U novorozence se nečeká do rána.' },
    ],
    supplements: [
      { name: 'Vitamin D pro miminko', why: 'Podává se kojencům podle doporučení pediatra.', evidence: 'standard', note: 'Dávkování určuje pediatr.' },
      { name: 'Železo', why: 'U nedonošených dětí často podle pediatra.', evidence: 'podle hodnot' },
    ],
    partner: [
      'První noci si rozdělte tak, aby aspoň jeden spal v kuse.',
      'Návštěvy filtrujte vy.',
      'Sledujte, jak je na tom ona — poporodní úzkost bývá po NICU častější.',
    ],
    track: ['Váha a přírůstky.', 'Krmení a spánek.', 'Korigovaný věk — podle něj se hodnotí vývoj.', 'Vaše nálada.'],
    askDoctor: [
      'Jaké kontroly nás čekají?',
      'Podle jakého věku hodnotíme vývoj?',
      'Kdy volat a co už je akutní?',
      'Máme nárok na rehabilitaci nebo ranou péči?',
    ],
    terms: ['Korigovaný věk', 'Raná péče', 'ROP'],
  },

  {
    phase: 'postpartum',
    summary: 'Šestinedělí. Šest týdnů, kdy se tělo vrací a hlava se srovnává — obojí vlastním tempem.',
    whatAwaits: [
      'Očistky, které postupně slábnou a mění barvu.',
      'Rozjezd kojení, které prvních deset dní často bolí a pak se to zlomí.',
      'Návaly, pocení a výkyvy nálad kolem třetího až pátého dne.',
      'Šestinedělní kontrola zhruba za šest týdnů.',
    ],
    prepareFor: [
      'Že první týden je hlavně o přežití. Jídlo, spánek, kojení, opakovat.',
      'Omezit návštěvy. Opravdu.',
      'Mít kontakt na laktační poradkyni dřív, než ji budete potřebovat.',
    ],
    mind: [
      { title: 'Blues, deprese a úzkost nejsou totéž', body: 'Blues vrcholí kolem třetího až pátého dne a odezní do dvou týdnů. Když to trvá déle, prohlubuje se to, nebo nemůžete spát ani když miminko spí, je to důvod se ozvat.' },
      { title: 'Kdy volat hned', body: 'Myšlenky na ublížení sobě nebo miminku, pocit, že to nezvládáte, nebo že je vám všechno jedno. Linka 116 123 funguje nepřetržitě. Tohle se léčí a čím dřív, tím líp.' },
    ],
    body: [
      { title: 'Pánevní dno první', body: 'Začíná se dýcháním a pánevním dnem, ne břišními cviky. Klasické sedy-lehy v šestinedělí ne.' },
      { title: 'Po císaři', body: 'Jizva potřebuje čas. Nezvedat nic těžšího než miminko, vstávat přes bok, sledovat zarudnutí a výtok z jizvy.' },
      { title: 'Kdy volat lékaře', body: 'Horečka nad 38 °C, zapáchající očistky, silné krvácení, bolestivé zarudlé místo na prsu s teplotou, bolest a otok lýtka.' },
    ],
    supplements: [
      { name: 'Železo', why: 'Po krevní ztrátě klesá hemoglobin a přidá se únava. Doplňuje se podle krevního obrazu, ne odhadem.', evidence: 'podle hodnot' },
      { name: 'Vitamin D pro miminko', why: 'Kojencům se podává standardně — dávkování i délku určuje pediatr.', evidence: 'standard' },
      { name: 'Jód', why: 'Při kojení potřeba jódu trvá — přechází do mléka a miminko ho potřebuje pro vývoj mozku.', evidence: 'standard' },
    ],
    partner: [
      'Filtrujte návštěvy a vařte.',
      'V noci vstávejte taky — přebalit a přinést se dá i bez kojení.',
      'Sledujte její náladu. Poporodní deprese se často pozná zvenčí dřív.',
    ],
    track: ['Den šestinedělí.', 'Krmení a spánek.', 'Nálada — tady to má smysl sledovat nejvíc.', 'Bolest a hojení.'],
    askDoctor: [
      'Je hojení v pořádku?',
      'Kdy můžu začít cvičit a s čím?',
      'Co je s kojením v normě a kdy hledat pomoc?',
      'Kdy je šestinedělní kontrola?',
    ],
    terms: ['Očistky', 'Poporodní blues', 'Kolostrum', 'Shlukované kojení', 'Diastáza břišních svalů'],
  },

  {
    phase: 'baby_first_year',
    summary: 'První rok. Milníky přicházejí v širokém rozmezí — a u nedonošených se počítají korigovaně.',
    whatAwaits: [
      'Pravidelné prohlídky u pediatra a očkování.',
      'Spánkové regrese, prořezávání zubů, začátek příkrmů kolem šestého měsíce.',
      'Milníky v širokém časovém rozpětí.',
    ],
    prepareFor: [
      'Že srovnávání s cizími dětmi nikam nevede.',
      'Že se návrat do práce začne řešit dřív, než čekáte.',
    ],
    mind: [
      { title: 'Rodičovství po IVF', body: 'Zvýšená úzkost a pocit, že si nesmíte stěžovat, jsou po dlouhé léčbě popsané a časté. Máte právo být unavená.' },
      { title: 'Vztah po dítěti', body: 'Intimita se vrací pomalu a nerovnoměrně. Pomáhá o tom mluvit dřív, než se z toho stane téma.' },
    ],
    body: [
      { title: 'Váš návrat ke sportu', body: 'Postupně, přes pánevní dno a stabilizaci. Při úniku moči nebo tlaku v pánvi jděte k fyzioterapeutovi, ne přidávat zátěž.' },
      { title: 'Kdy volat pediatra', body: 'Teplota u kojence do tří měsíců, odmítání pití, netečnost, namáhavé dýchání, vyrážka, která nemizí při zatlačení sklem.' },
    ],
    supplements: [
      { name: 'Vitamin D pro miminko', why: 'Kojenci ho z mléka nedostanou dost a v našich zeměpisných šířkách si ho nevytvoří ze slunce.', evidence: 'standard', note: 'Dávkování určuje pediatr.' },
      { name: 'Železo', why: 'U nedonošených a při anémii podle pediatra.', evidence: 'podle hodnot' },
      { name: 'Jód pro vás', why: 'Potřeba jódu trvá po celou dobu kojení, protože přechází do mléka.', evidence: 'standard' },
    ],
    partner: [
      'Rozdělte si noci tak, aby každý měl aspoň jednou za čas celý spánek.',
      'Berte si dítě sám, ne „na hlídání“.',
      'Ptejte se jí, co potřebuje pro sebe. Většinou to neřekne první.',
    ],
    track: ['Váha, délka, obvod hlavy.', 'Milníky — u nedonošených podle korigovaného věku.', 'Spánek a krmení.', 'Vaše nálada.'],
    askDoctor: [
      'Je vývoj v normě pro jeho věk?',
      'Počítáme korigovaný věk?',
      'Jaké očkování je na řadě?',
      'Kdy začít s příkrmy a jak?',
    ],
    terms: ['Korigovaný věk', 'Příkrmy', 'Spánková regrese'],
  },

  {
    phase: 'toddler',
    summary: 'Batole. Cesta neskončila porodem — jen se změnila témata.',
    whatAwaits: [
      'Prudký rozvoj řeči a pohybu.',
      'Vzdor kolem druhého roku, který je vývojově normální.',
      'Otázka dalšího dítěte a co to znamená po léčbě.',
    ],
    prepareFor: [
      'Že se vás lidé začnou ptát na druhé dítě. Nemusíte odpovídat.',
      'Že zamražená embrya mají svůj režim a je dobré vědět, jaký.',
    ],
    mind: [
      { title: 'Sekundární neplodnost', body: 'Snažit se o druhé dítě, když jedno máte, je zvláštní pozice — okolí to nebere jako problém a vy si to nedovolíte prožívat. Je to plnohodnotná situace.' },
      { title: 'Zpracovat cestu', body: 'Řada žen se k tomu, čím prošly, vrátí až teď. Je to dobrý čas napsat příběh nebo dopis — pro sebe i pro dítě.' },
    ],
    body: [
      { title: 'Vaše tělo po dvou letech', body: 'Pánevní dno a břišní stěna se dají zlepšovat kdykoliv. Na diastázu i inkontinenci existuje fyzioterapie a není nikdy pozdě.' },
    ],
    supplements: [
      { name: 'Kyselina listová (folát)', why: 'Znovu, pokud plánujete další těhotenství.', evidence: 'standard' },
      { name: 'Vitamin D', why: 'Pro dítě podle pediatra, pro vás podle hodnot.', evidence: 'podle hodnot' },
    ],
    partner: [
      'Rozhodnutí o dalším dítěti dělejte spolu a nahlas.',
      'Vzpomínky zapisujte oba. Za pět let si to nebude pamatovat nikdo.',
    ],
    track: ['Milníky a první slova.', 'Vzpomínky do kroniky.', 'Pokud plánujete další dítě, znovu cyklus.'],
    askDoctor: [
      'Kdy má smysl začít znovu, pokud chceme další dítě?',
      'Co je se zamraženými embryi a jak dlouho vydrží?',
      'Máme něco zopakovat z vyšetření?',
    ],
    terms: ['Sekundární neplodnost', 'Kryoembryotransfer', 'Vitrifikace'],
  },
]
