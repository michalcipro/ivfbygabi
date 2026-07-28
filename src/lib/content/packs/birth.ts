import type { ContentItem, ContentPack, GlossaryTerm } from '../types'

/**
 * Knihovna pro etapu porodu — příprava, samotný porod, císař, předčasný
 * porod a první dny na NICU.
 *
 * Ženy po IVF přicházejí k porodu jinak než ostatní: mají za sebou roky
 * kontroly, měření a čekání na výsledky. Texty s tím počítají a nepředpokládají,
 * že těhotenství proběhlo bezstarostně.
 */

const prep: ContentItem[] = [
  {
    id: 'por-porodni-plan',
    kind: 'article',
    title: 'Porodní plán: k čemu je dobrý, když stejně nic negarantuje',
    excerpt:
      'Není to smlouva ani seznam přání. Je to způsob, jak se rozhodnout dřív, než na rozhodování nebude klid.',
    body: `## Co porodní plán ve skutečnosti je

Porodní plán je **jednostránkový přehled vašich preferencí**, který si přečte porodní asistentka a lékař, když nastoupíte. Není to právní dokument a neznamená, že porod proběhne přesně tak. Znamená to, že tým ví, co je pro vás důležité, a nemusí se vás na to ptát ve chvíli, kdy nebudete mít náladu odpovídat.

Nejcennější část plánu se nikdy nedostane na papír: je to **přemýšlení, které mu předchází**. Když si předem projdete, co byste chtěla, přestanou vás ta rozhodnutí zaskočit.

## Co do něj patří

- **Doprovod.** Kdo bude u porodu, jestli chcete duly, jestli má partner odejít při některých úkonech.
- **Pohyb a polohy.** Chcete se hýbat, používat míč, vanu, sprchu? Chcete rodit vleže, nebo hledat polohu podle sebe?
- **Tlumení bolesti.** Chcete epidurál na požádání, chcete ho nabídnout, nebo chcete, aby vám ho nikdo nenabízel, dokud si o něj neřeknete?
- **Zásahy.** Nástřih hráze, protržení vaku blan, urychlování oxytocinem — chcete se na ně ptát předem, kdykoliv to jde?
- **Po porodu.** Bonding na hrudi, odložený podvaz pupečníku, kdo přestřihne pupečník, první koupel, přiložení k prsu.
- **Když se plán změní.** Tohle je nejdůležitější odstavec. Napište, co chcete i v případě císaře nebo překladu — třeba že chcete miminko vidět hned, jak to půjde, nebo že partner má jít s ním.

## Co do něj nepatří

Detailní scénář hodinu po hodině. Porod se neřídí plánem a text, který vypadá jako režijní kniha, tým spíš odradí. **Jedna strana, odrážky, jednoduché věty.**

Nepatří tam ani požadavky, které porodnice nemůže splnit. Zjistěte si dopředu, co dané pracoviště běžně dělá — mnoho konfliktů vzniká z toho, že žena chce něco, co tam prostě není zavedené, a dozví se to až v den porodu.

## Na co se zeptat v porodnici předem

1. Jak často u vás končí porod císařem a jak často nástřihem hráze?
2. Můžu se během první doby porodní volně pohybovat a jíst?
3. Jak dlouho zůstane miminko na mém těle po nekomplikovaném porodu? A po císaři?
4. Může být partner u císaře? Může být u porodu, když se překládám na sál?
5. Jaké možnosti tlumení bolesti nabízíte v noci a o víkendu?

## Když jste po IVF

Po letech léčby se u porodního plánu často objeví dvě věci najednou: **potřeba mít konečně něco pod kontrolou** a strach z toho, že si o něco říct znamená riskovat. Obojí dává smysl a obojí stojí za vyslovení nahlas.

Můžete do plánu napsat i větu, která není zdravotní: *„Toto je těhotenství po pěti letech léčby. Prosím, mluvte se mnou o tom, co děláte, i když to je rutina."* Personál to čte a mění to tón celého porodu.

> Porodní plán nenahrazuje domluvu s vaším lékařem. Pokud máte rizikový faktor, plánovaný císař nebo doporučený konkrétní postup, řešte plán vždy s pracovištěm, které vás povede.`,
    minutes: 8,
    phases: ['birth_prep', 'pregnancy'],
    gestWeeks: [30, 40],
    topics: ['porod', 'tehotenstvi', 'psychika'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno – porodní asistence',
    publishedOn: '2026-05-26',
    boost: 0.9,
  },
  {
    id: 'por-taska-do-porodnice',
    kind: 'checklist',
    title: 'Taška do porodnice: tři tašky místo jedné',
    excerpt:
      'Rozdělení na porodní sál, oddělení a odjezd domů vám ušetří přehrabování se v jedné velké tašce ve tři ráno.',
    body: `## Proč tři tašky

V porodnici se pohybujete mezi třemi místy a v každém potřebujete něco jiného. Malá taška na sál, velká na oddělení a jedna, která zůstane v autě na odjezd. **Partner tak nemusí hledat, kde je co** — a vy se nemusíte spoléhat na to, že si to budete pamatovat.

Sbalte se **ve 34.–36. týdnu**. Pokud máte rizikové těhotenství, dvojčata nebo zkracující se čípek, sbalte se dřív — klidně ve 30. týdnu.

## Poznámka pro ženy po IVF

Vezměte si **kopii propouštěcí zprávy z centra asistované reprodukce**. Není to nutnost, ale u komplikovanějšího průběhu se hodí, když je způsob početí, datum transferu a případné medikace na jednom papíře.`,
    minutes: 5,
    phases: ['birth_prep', 'pregnancy'],
    gestWeeks: [32, 41],
    topics: ['porod', 'tehotenstvi'],
    level: 'essential',
    hero: 'linen',
    publishedOn: '2026-05-28',
    checklist: [
      { id: 'doklady', text: 'Občanský průkaz, kartička pojišťovny, těhotenská průkazka', group: 'Doklady' },
      { id: 'oddaci', text: 'Oddací list nebo souhlasné prohlášení o otcovství', hint: 'Bez něj se dítě zapíše jen na matku.', group: 'Doklady' },
      { id: 'zprava-ar', text: 'Zpráva z centra asistované reprodukce', optional: true, group: 'Doklady' },
      { id: 'plan', text: 'Porodní plán ve dvou kopiích', optional: true, group: 'Doklady' },
      { id: 'kosile', text: 'Volná noční košile na porod, kterou nechcete zpět', group: 'Na sál' },
      { id: 'ponozky', text: 'Teplé ponožky — během porodu je běžné, že se klepete zimou', group: 'Na sál' },
      { id: 'pitko', text: 'Láhev s pítkem nebo brčkem', hint: 'Pít vleže z běžné láhve je nemožné.', group: 'Na sál' },
      { id: 'balzam', text: 'Balzám na rty a gumička do vlasů', group: 'Na sál' },
      { id: 'hudba', text: 'Sluchátka a připravený playlist, powerbanka', optional: true, group: 'Na sál' },
      { id: 'jidlo', text: 'Rychlá energie — tyčinka, med, hroznový cukr', hint: 'Zeptejte se, co porodnice dovoluje jíst.', group: 'Na sál' },
      { id: 'pyzamo', text: '2–3 pyžama nebo košile s rozepínáním vpředu', group: 'Na oddělení' },
      { id: 'podprsenka', text: 'Kojicí podprsenka o číslo větší, vložky do podprsenky', group: 'Na oddělení' },
      { id: 'kalhotky', text: 'Jednorázové kalhotky a porodnické vložky', hint: 'Po císaři kalhotky s vysokým pasem, aby netlačily na jizvu.', group: 'Na oddělení' },
      { id: 'zupan', text: 'Župan a pantofle do sprchy', group: 'Na oddělení' },
      { id: 'hygiena', text: 'Vlastní hygiena, ručník, jemné mýdlo bez parfemace', group: 'Na oddělení' },
      { id: 'nabijecka', text: 'Dlouhá nabíječka — zásuvka bývá daleko od postele', group: 'Na oddělení' },
      { id: 'spinky', text: '3× body a dupačky vel. 56, čepička, ponožky', group: 'Pro miminko' },
      { id: 'zavinovacka', text: 'Zavinovačka nebo deka podle ročního období', group: 'Pro miminko' },
      { id: 'plenky', text: 'Plenky novorozenecké velikosti', hint: 'Většina porodnic je má, ale ne všechny.', group: 'Pro miminko' },
      { id: 'autosedacka', text: 'Autosedačka vel. 0+ nainstalovaná v autě', hint: 'Bez ní vás domů nepustí. Vyzkoušejte upevnění předem.', group: 'Odjezd' },
      { id: 'obleceni-domu', text: 'Oblečení domů — velikost jako v 6. měsíci těhotenství', hint: 'Břicho po porodu nezmizí ze dne na den. Není na tom nic špatného.', group: 'Odjezd' },
      { id: 'seznam-kontaktu', text: 'Seznam, komu se má volat — a komu až druhý den', optional: true, group: 'Odjezd' },
    ],
  },
  {
    id: 'por-predzvesti-kdy-vyrazit',
    kind: 'article',
    title: 'Předzvěsti porodu a kdy vyrazit do porodnice',
    excerpt:
      'Poslední týdny jsou plné signálů, které nic neznamenají — a několika, které znamenají hodně. Tady je rozdíl.',
    body: `## Co porod ohlašuje dny předem

Tyhle věci znamenají, že se tělo připravuje. **Neznamenají, že máte jet do porodnice.**

- **Poklesnutí bříška.** Hlavička se usadí v pánvi, lépe se dýchá a hůř se sedí. Bývá to jeden až tři týdny předem, u druhého porodu klidně až během porodu.
- **Odchod hlenové zátky.** Hustý hlen, někdy s příměsí krve. Může odejít týden i hodinu před porodem.
- **Poslíčci.** Nepravidelné stahy, které nebolí víc a nezhušťují se. Po sprše nebo změně polohy poleví.
- **Řídká stolice, nevolnost, zimomřivost.** Tělo se doslova vyprazdňuje před prací.
- **Nával energie.** Chuť uklidit celý byt. Bývá jen den nebo dva před porodem.

## Kdy se opravdu vyráží

### Pravidelné kontrakce

Klasické pravidlo je **5–1–1**: kontrakce každých 5 minut, každá trvá aspoň 1 minutu, a děje se to nejméně 1 hodinu. U prvorodičky je to obvyklý moment k odjezdu. Pokud už jste rodila, vyrážejte dřív — druhý porod bývá výrazně rychlejší.

Pravou kontrakci poznáte podle toho, že **nepoleví, když změníte polohu**, a že sílí. Poslíček ustoupí, když si lehnete nebo se projdete.

### Odtok plodové vody

Jeďte, i když nemáte kontrakce. Zapamatujte si **čas a barvu**. Voda má být čirá nebo lehce narůžovělá. **Zelená, hnědá nebo zapáchající plodová voda znamená volat okamžitě** — hlásí, že miminko může být v zátěži.

### Bez čekání volejte nebo jeďte

- **krvácení jako při menstruaci nebo silnější**,
- **znatelný pokles pohybů** nebo změna jejich charakteru,
- **silná trvalá bolest břicha**, která nepolevuje mezi stahy,
- **horečka nad 38 °C**,
- **silná bolest hlavy, mžitky před očima, bolest pod pravým žebrem, náhlý otok obličeje a rukou** — možné příznaky preeklampsie,
- **jakékoliv kontrakce před 37. týdnem**.

## Jak počítat kontrakce

Měřte **od začátku jedné kontrakce do začátku další** — ne pauzu mezi nimi. Většina žen si to bez aplikace nebo papíru splete. Zapisujte si tři údaje: začátek, délku, sílu na stupnici 1–10.

## Falešný poplach není chyba

Vrácení domů z porodnice je běžné a nikdo vás za to nesoudí. Personál radši uvidí ženu pětkrát zbytečně než jednou pozdě. **Pokud si nejste jistá, zavolejte na porodní sál** — poradí vám po telefonu a je to služba, která se nezneužívá.

> Přesná pravidla se liší podle porodnice, podle toho, kolikátý porod to je, a podle průběhu těhotenství. Řiďte se pokyny svého pracoviště — zejména při plánovaném císaři, dvojčatech nebo rizikovém těhotenství.`,
    minutes: 9,
    phases: ['birth_prep', 'pregnancy'],
    gestWeeks: [34, 42],
    topics: ['porod', 'tehotenstvi'],
    level: 'essential',
    hero: 'sand',
    reviewedBy: 'Odborně garantováno – porodní asistence',
    publishedOn: '2026-06-01',
    boost: 0.95,
  },
  {
    id: 'por-po-ivf-co-je-jinak',
    kind: 'article',
    title: 'Porod po IVF: co je jinak a co se jen tak tváří',
    excerpt:
      'Způsob početí sám o sobě neurčuje, jak budete rodit. Přesto je několik věcí, které po asistované reprodukci probíhají jinak.',
    body: `## Co je opravdu jinak

**Znáte přesné datum početí.** Termín porodu se po IVF počítá od transferu a stáří embrya, ne z odhadu poslední menstruace. Datum tedy sedí přesněji než u spontánního těhotenství — a to má praktický dopad: méně dohadů o tom, jestli jste „přenášená".

**Bývá častější sledování ke konci.** Ne proto, že by IVF těhotenství bylo automaticky nemocné, ale proto, že v této skupině je víc žen s rizikovými faktory — vyšší věk, dvojčata, hypertenze, diabetes, endometrióza. Pracoviště proto častěji nabízí KTG, ultrazvukové kontroly růstu a průtoků.

**Častěji se plánuje termín ukončení.** U dvojčat, u dárcovských cyklů nebo při rizikovém průběhu se konec těhotenství častěji plánuje než vyčkává.

**Vyšší podíl císařů.** V číslech to platí. Podíl přitom nevysvětluje samotné IVF, ale to, co IVF často doprovází: dvojčata, vyšší věk, předchozí operace dělohy, poloha koncem pánevním. **Není to pravidlo pro vás.** Po IVF rodí spousta žen spontánně a bez zásahů.

## Co je stejné

Samotný mechanismus porodu. Děloha, čípek a hormony se nechovají jinak proto, že embryo strávilo pět dní v inkubátoru. Kojení, hojení, šestinedělí i vazba na dítě probíhají stejně.

Také **nemáte vyšší nárok na císaře jen kvůli IVF**. To je častý omyl. Rozhodnutí se vždycky opírá o porodnický nález, ne o způsob početí.

## Co se řeší psychicky

### Strach z toho, že si o něco říct znamená pokoušet osud

Roky v léčbě naučí ženu být hodnou pacientkou. K porodu ale patří, že se ptáte, odmítáte a chcete vědět proč. **Nic z toho nezmenšuje vaši vděčnost.**

### Věta „hlavně že jste konečně těhotná"

Zazní často a bere právo na stížnost. Můžete být šťastná a zároveň vyčerpaná, vystrašená nebo naštvaná, že vás bolí záda. Tyhle věci si nekonkurují.

### Nedůvěra vlastnímu tělu

Když vám tělo roky nefungovalo podle plánu, je těžké mu věřit, že tohle zvládne. Pomáhá vědět, že **porod neřídí vaše vůle** — řídí ho hormonální kaskáda, která nezávisí na tom, jak dobře jste se snažila.

## Na co se zeptat před porodem

1. Doporučujete v mém případě konkrétní způsob vedení porodu, a proč?
2. Je nějaký důvod, proč bych neměla čekat na spontánní nástup?
3. Jak často budete sledovat miminko po termínu?
4. Co konkrétně by změnilo plán?

> Tento text popisuje obecné souvislosti. Individuální doporučení může dát jen lékař, který zná váš průběh těhotenství a porodnický nález.`,
    minutes: 8,
    phases: ['birth_prep', 'pregnancy', 'high_risk_pregnancy'],
    gestWeeks: [30, 41],
    topics: ['porod', 'tehotenstvi', 'psychika'],
    level: 'deep',
    hero: 'dawn',
    author: 'Gabi',
    publishedOn: '2026-06-04',
  },
  {
    id: 'por-partner-u-porodu',
    kind: 'article',
    title: 'Partner u porodu: co konkrétně dělat, aby to pomohlo',
    excerpt:
      'Většina partnerů chce pomoct a neví jak. Tohle je seznam, který se dá přečíst za šest minut a použít ten den.',
    body: `## Vaše role není zdravotní

O medicínu se stará tým. **Vy jste tam kvůli tomu, aby se necítila sama.** To zní málo. Ve skutečnosti je to jediná věc, kterou nikdo jiný v místnosti nedokáže.

## Před porodem

- Vězte, **kde je taška a co v ní je**. Ne obecně — konkrétně.
- Mějte natankováno a **autosedačku upevněnou** ve voze.
- Přečtěte si její porodní plán a **umějte ho shrnout ve dvou větách**, kdyby už nemohla mluvit.
- Domluvte se, **komu a kdy se volá**. A kdo bude odpovídat na zprávy — vy to nestihnete.

## Během první doby

- **Počítejte kontrakce**, pokud vás o to poprosí, a nic k tomu nekomentujte.
- **Mluvte málo a mezi kontrakcemi.** Během stahu potřebuje ticho, ne povzbuzení.
- **Nabízejte pití po každé kontrakci** a balzám na rty.
- **Masírujte kříž** protitlakem dlaně nebo pěstí, ale jen dokud říká, že to pomáhá. Až řekne dost, přestaňte okamžitě a nedotčeně.
- **Chraňte prostředí** — tlumené světlo, zavřené dveře, méně lidí v místnosti.
- **Choďte s ní.** Chůze a změny polohy porod posouvají.

## Během vypuzovací fáze

- Buďte **u hlavy, ne u nohou**, pokud si nepřeje jinak.
- **Opakujte, co říká porodní asistentka**, klidným hlasem a jednoduše.
- **Nefoťte**, dokud to nedomluvíte předem.
- Neříkejte „dýchej" — spíš **dýchejte s ní** nahlas, ať má co následovat.

## Když se plán mění

Nejtěžší okamžik pro doprovod je akutní císař. Co pomáhá:

1. **Nechte ji mluvit s lékařem**, i když víte, co odpoví.
2. **Ptejte se za ni**, když už se ptát nezvládne: *Co to znamená? Jaké jsou alternativy? Kolik máme času?*
3. **Jděte s miminkem**, pokud vás pustí a pokud si to přeje. Někdo z jejích lidí má být u dítěte.
4. Později jí **převyprávějte, co se dělo**. Ženy si z náhlého císaře často pamatují jen útržky a chybějící části jim dlouho vadí.

## Co neříkat

- „Uklidni se." — Nefunguje to nikdy.
- „Já vím, jak ti je."
- „Aspoň to bude brzy."
- Jakýkoliv vtip, který jste nevyzkoušeli v těhotenství.

## Po porodu

První dny po porodu jsou fyzicky náročnější než samotný porod. **Převezměte všechno, co nevyžaduje její tělo** — přebalování, nošení, návštěvy, telefony, jídlo. A hlídejte, jestli jí někdo nosí najíst; hladová žena po porodu je běžný a zbytečný jev.

> Pokud jste po IVF, je za vámi dlouhá cesta i jako partner. Vaše vyčerpání a strach jsou legitimní — jen v den porodu nejsou na řadě. Mluvte o nich, ale mluvte o nich potom.`,
    minutes: 7,
    phases: ['birth_prep', 'birth'],
    topics: ['porod', 'partner', 'vztah'],
    level: 'essential',
    hero: 'taupe',
    publishedOn: '2026-06-07',
    boost: 0.85,
  },
]

const labor: ContentItem[] = [
  {
    id: 'por-tri-doby-porodni',
    kind: 'article',
    title: 'Tři doby porodní: co se děje hodinu po hodině',
    excerpt:
      'Porod není jedna dlouhá bolest. Má tři fáze a každá má jiný úkol, jiné trvání a jiné, co v ní pomáhá.',
    body: `## První doba: otevírací

Nejdelší část porodu. Děložní hrdlo se zkracuje a otevírá z nuly na deset centimetrů.

### Latentní fáze

Kontrakce jsou nepravidelné, trvají 30–45 sekund a přicházejí po 10–20 minutách. Hrdlo se otevírá zhruba **do 5–6 cm**. U prvorodičky tahle fáze běžně trvá **6 až 12 hodin, někdy déle**, a většinu z ní se dá strávit doma.

Co pomáhá: chůze, sprcha, míč, jídlo v malých porcích, spánek, když to ještě jde. **Nešetřete silami tím, že si lehnete a budete čekat** — a zároveň si nepouštějte adrenalin počítáním, kolik toho ještě zbývá.

### Aktivní fáze

Kontrakce zesílí, trvají kolem 60 sekund a chodí po 3–5 minutách. Hrdlo se otevírá rychleji, orientačně o **centimetr za hodinu**, ale rozptyl je velký. Tohle je fáze, kdy se obvykle jede do porodnice a kdy má smysl uvažovat o epidurálu, pokud ho chcete.

Co pomáhá: rytmické dýchání, protitlak na kříž, změny poloh, teplá voda, tma a klid. **Mluvení mezi kontrakcemi je v pořádku, mluvení během nich ne.**

### Přechodová fáze

Posledních 8–10 cm. Nejkratší (často 15–60 minut) a nejintenzivnější. Bývá provázená třesem, nevolností, pocitem, že to nezvládnete, a vztekem na okolí. **Tenhle pocit je spolehlivá známka toho, že jste skoro u konce** — ne známka toho, že se něco pokazilo.

## Druhá doba: vypuzovací

Od úplného otevření po narození dítěte. U prvorodičky obvykle **do dvou hodin**, s epidurálem někdy déle; u opakovaného porodu často do půl hodiny.

Tlak na konečník je v téhle fázi hlavní signál. Tlačí se s kontrakcemi, ideálně podle vlastního nutkání. Hlavička se nejdřív při každém stahu objevuje a zase mizí — to je normální a je to čas, kdy se hráz postupně roztahuje.

Co pomáhá: vzpřímené polohy, opora, chladný obklad na čelo, důvěra v porodní asistentku, která vidí, co vy ne.

## Třetí doba: porod placenty

Po narození dítěte přijde ještě jedna sada slabších kontrakcí a **do 5–30 minut se porodí placenta**. Většina žen ji kvůli miminku na hrudi téměř nevnímá.

Pak se ošetří případné trhliny nebo nástřih. Šije se v místním znecitlivění a bývá to nepříjemné hlavně proto, že už je po všem a chcete mít klid.

## Kolik to celé trvá

Průměry existují, ale konkrétní porod se jimi neřídí. Prvorodičky mají typicky delší první dobu, opakované porody bývají výrazně rychlejší. **Délka porodu nevypovídá nic o tom, jak dobře jste ho zvládla.**

## Kdy se plán mění

Porod se ukončí císařem nebo se použije vakuumextraktor nejčastěji kvůli tomu, že se **nález nemění navzdory dobrým kontrakcím**, nebo že **ozvy plodu ukazují zátěž**. Obojí jsou rozhodnutí o bezpečí, ne verdikt o vaší výkonnosti.

> Popis je obecný. Konkrétní vedení porodu určuje porodnický nález a tým, který vás vede.`,
    minutes: 9,
    phases: ['birth_prep', 'birth'],
    gestWeeks: [34, 42],
    topics: ['porod'],
    level: 'essential',
    hero: 'sand',
    reviewedBy: 'Odborně garantováno – porodní asistence',
    publishedOn: '2026-06-10',
    boost: 0.9,
  },
  {
    id: 'por-tlumeni-bolesti',
    kind: 'article',
    title: 'Tlumení porodní bolesti: co reálně funguje a co si o tom myslíte vy',
    excerpt:
      'Od dýchání po epidurál. Žádná z těch metod není statečnější než ostatní — jsou jen různě silné a různě dostupné.',
    body: `## Nemedikamentózní postupy

**Pohyb a změny polohy.** Nejpodceňovanější nástroj. Vzpřímená poloha využívá gravitaci, kolébání pánví ulevuje a chůze porod posouvá.

**Teplá voda.** Sprcha nebo vana v aktivní fázi tlumí vnímání bolesti a uvolňuje. Účinek je krátkodobý, ale dobře opakovatelný.

**Protitlak na kříž.** Dlaň nebo pěst doprovodu proti křížové kosti během kontrakce. U bolesti vyzařující do zad často účinnější než cokoliv jiného.

**Dýchání a hlas.** Pomalý výdech delší než nádech. Nízké hluboké zvuky uvolňují pánevní dno; vysoký křik ho naopak stahuje.

**Prostředí.** Tlumené světlo, málo lidí, klid. Porod řídí oxytocin a ten se tvoří hůř, když se cítíte pozorovaná.

**TENS, aromaterapie, masáž, akupresura.** Účinek je u každé ženy jiný, riziko prakticky žádné. Stojí za vyzkoušení, pokud vám je příjemné.

## Medikamentózní postupy

**Oxid dusný (rajský plyn).** Vdechuje se z náustku během kontrakce. Nástup do půl minuty, odeznění stejně rychlé. Bolest většinou nevypne, ale zmenší strach a odstup od ní. Můžete kdykoliv přestat, může způsobit nevolnost nebo motání hlavy.

**Opioidní analgezie.** Injekce, která bolest spíš rozostří než odstraní. Podává se v konkrétním časovém okně, protože prostupuje k dítěti a může tlumit jeho dýchání těsně po porodu.

**Epidurální analgezie.** Nejúčinnější dostupná metoda. Tenký katétr v zádech, nástup do 15–20 minut, dávkování se dá dolaďovat. Zůstáváte při vědomí. Zavádí ji anesteziolog a posuzuje vhodnost — mimo jiné podle srážlivosti krve.

Co k epidurálu patří vědět: bývá zavedený močový katétr, budete mít omezenější pohyb, druhá doba porodní může být delší a někdy je potřeba dopomoc. **Nezvyšuje riziko chronických bolestí zad**, i když se to opakuje dokola.

**Pudendální blok a lokální znecitlivění.** Krátkodobě pro konkrétní úkon — dopomoc při porodu nebo šití.

## Jak se rozhodnout předem

1. Zjistěte si, **co vaše porodnice reálně nabízí v noci a o víkendu**. Rozdíly bývají velké.
2. Napište si preferenci **i pro variantu, kdy si to rozmyslíte**. Například: „Epidurál chci nabídnout až ve chvíli, kdy si o něj řeknu."
3. Domluvte se s doprovodem, **co má a co nemá říkat**, když se rozhodnete jinak, než jste plánovala.

## Věta, kterou stojí za to říct nahlas

Zvolit epidurál není selhání a odmítnout ho není hrdinství. **Nikdo nedostane medaili za bolest** a nikdo neztratí bod za lék. Rodíte, ne skládáte zkoušku.

Ženy po IVF s tímhle bývají v obzvlášť těžké pozici: po letech léčby mají pocit, že si musí porod „odpracovat", nebo že říct si o úlevu znamená být nevděčná. Nemá to spolu nic společného.

> Vhodnost jednotlivých metod posuzuje lékař podle vašeho zdravotního stavu a průběhu porodu. Tento text je přehled, ne doporučení konkrétního postupu.`,
    minutes: 9,
    phases: ['birth_prep', 'birth'],
    gestWeeks: [32, 42],
    topics: ['porod', 'psychika'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: 'Odborně garantováno – porodní asistence',
    publishedOn: '2026-06-13',
  },
  {
    id: 'por-vyvolavani',
    kind: 'article',
    title: 'Vyvolávaný porod: proč se dělá a jak probíhá',
    excerpt:
      'Indukce není „porod na objednávku". Je to zásah s konkrétním důvodem a s průběhem, který se dá dobře popsat dopředu.',
    body: `## Proč se porod vyvolává

Nejčastější důvody:

- **přenášení** — obvykle se řeší kolem 41. týdne,
- **předčasný odtok plodové vody** bez nástupu kontrakcí,
- **gestační diabetes** vyžadující léčbu, **hypertenze nebo preeklampsie**,
- **omezený růst plodu** nebo změny v průtocích,
- **cholestáza** a další stavy, kdy prospěch z ukončení převáží nad čekáním.

Po IVF se indukce plánuje o něco častěji — ne kvůli způsobu početí samotnému, ale kvůli tomu, co ho často doprovází: vyšší věk, dvojčata, přidružená onemocnění.

## Jak se rozhoduje o postupu

Klíčem je **zralost děložního hrdla**, kterou lékař vyjádří Bishop skóre. Nezralé hrdlo se nejdřív připraví, zralé se dá rovnou stimulovat.

## Metody, se kterými se setkáte

1. **Prostaglandiny** (gel, tableta nebo vaginální vložka). Připravují hrdlo k dozrání. Účinek nastupuje v řádu hodin, někdy je potřeba opakovat další den.
2. **Balonkový katétr.** Mechanické rozšíření hrdla nafouknutým balonkem. Bez léků, obvykle na 12–24 hodin.
3. **Dirupce vaku blan.** Protržení plodových obalů tenkým nástrojem, když je hrdlo přístupné. Nebolí víc než vyšetření, ale rozjíždí hodiny, kdy už je potřeba porodit.
4. **Oxytocin v infuzi.** Nejsilnější nástroj. Dávka se pomalu zvyšuje podle reakce dělohy a nepřetržitě se sleduje KTG.

## Co čekat po pravdě

**Je to obvykle delší.** Od zahájení indukce k narození dítěte mohou uplynout **jeden až tři dny** — velká část z toho je čekání, ne porod.

**Kontrakce po oxytocinu bývají intenzivnější** a nastupují bez přirozeného rozjezdu. Proto se u indukce častěji volí epidurál a proto je namístě se na něj předem zeptat.

**Monitorování je průběžné.** Počítejte s tím, že budete mít pásy na břiše většinu času, což omezuje pohyb. Ptejte se, jestli je k dispozici bezdrátový monitor.

**Indukce nemusí zabrat napoprvé.** Opakování druhý den je běžný postup, ne komplikace.

## Otázky, které se vyplatí položit

1. Jaký konkrétní důvod k vyvolání mám?
2. Co se stane, když ještě počkáme — a jak dlouho můžeme?
3. Jakou metodou začnete a jaké je moje Bishop skóre?
4. Jak dlouho to podle vás potrvá a kdy se rozhodne o dalším kroku?
5. Můžu se během indukce hýbat, sprchovat, jíst?

## Když se z indukce stane císař

Stává se to a nejčastěji proto, že se hrdlo nemění nebo že dítě nereaguje dobře na kontrakce. **Nedopadlo to špatně kvůli vám.** Pokud vám z toho zůstane pocit selhání, patří to do rozhovoru — s partnerem, s porodní asistentkou nebo s psychologem, ne do mlčení.

> Rozhodnutí o vyvolání i o konkrétní metodě patří vždy vašemu lékaři, který zná nález a průběh vašeho těhotenství.`,
    minutes: 8,
    phases: ['birth_prep', 'birth', 'high_risk_pregnancy'],
    gestWeeks: [36, 42],
    modifiers: ['induced_birth'],
    topics: ['porod', 'rizikove'],
    level: 'deep',
    hero: 'champagne',
    reviewedBy: 'Odborně garantováno – porodnictví',
    publishedOn: '2026-06-16',
  },
  {
    id: 'por-cisar-krok-za-krokem',
    kind: 'article',
    title: 'Císařský řez krok za krokem: od přípravy po první přiložení',
    excerpt:
      'Když víte, co se bude dít v jaké minutě, přestává být sál cizí místo. Tohle je celý průběh bez příkras a bez strašení.',
    body: `## Před výkonem

**Předoperační vyšetření** — krevní odběry, krevní skupina, případně interní konzultace. U plánovaného císaře obvykle den předem nebo ráno.

**Lačnění.** Zpravidla 6 hodin bez jídla, tekutiny podle pokynů pracoviště.

**Příprava** — oholení malé plochy nad stydkou kostí, kompresní punčochy, kanyla do žíly, případně antibiotika preventivně.

**Rozhovor s anesteziologem.** Ptejte se: budu při vědomí, může být partner se mnou, co budu cítit?

## Anestezie

U plánovaného císaře se téměř vždy volí **spinální anestezie** — jedna injekce do zad, nástup do několika minut, jste **při vědomí a slyšíte první křik**.

Co budete cítit: teplo a mravenčení v nohách, pak jejich znehybnění. Během operace **tlak, tahání a pohyb** — bolest ne. Časté jsou třes a nevolnost; obojí jde tlumit.

Celková anestezie se používá, když je potřeba jednat rychle nebo když spinální nejde podat. V tom případě vás miminko čeká, až se probudíte, a bonding přebírá partner.

## Samotný výkon

1. Zavede se močový katétr (obvykle až po anestezii).
2. Postaví se plenta ve výši hrudníku. **Můžete požádat o průhledné okénko** nebo o její sklopení ve chvíli narození — mnoho pracovišť to umožní.
3. Řez je **příčný, nízko nad stydkou kostí**, dlouhý zhruba 12–15 cm.
4. **Od řezu k narození uplyne obvykle jen několik minut.**
5. Pak přijde nejdelší část — ošetření dělohy a šití po vrstvách, celkem asi 30–45 minut.

## Bonding

Zeptejte se předem: **může miminko na hrudník ještě na sále?** Řada pracovišť to umožňuje a je to jeden z nejcennějších bodů porodního plánu u císaře. Pokud to nejde, měl by dítě převzít kůže na kůži partner.

## Prvních 24 hodin

- **Na dospávacím pokoji** se sleduje krvácení, tlak a stahování dělohy.
- **Citlivost v nohách** se vrací postupně během několika hodin.
- **Analgezie je nárok, ne slabost.** Nečekejte, až bolest vygraduje — o lék si řekněte dřív.
- **První vstávání** obvykle za 6–12 hodin, vždy s doprovodem sestry. Je to nejnepříjemnější moment celého pobytu a zároveň krok, který nejvíc urychlí zotavení.
- **Kojení jde i po císaři.** Hledejte polohu, kde miminko neleží na jizvě — fotbalové držení nebo poloha vleže na boku.

## Co se často neřekne

Nástup mléka může být **o něco pozdější** než po vaginálním porodu. Není to selhání a laktace se tím nezkazí — pomáhá časté přikládání a kontakt kůže na kůži.

A druhá věc: **císař je porod.** Ne „nepovedený porod", ne cesta ven z rodičovství. Pokud vám okolí naznačuje opak, je chyba u okolí.

> Postupy se mezi pracovišti liší. Konkrétní průběh vždy popíše tým, který vás bude operovat.`,
    minutes: 9,
    phases: ['birth_prep', 'birth'],
    modifiers: ['csection'],
    topics: ['porod', 'cisar'],
    level: 'essential',
    hero: 'linen',
    reviewedBy: 'Odborně garantováno – porodnictví',
    publishedOn: '2026-06-19',
    boost: 0.9,
  },
  {
    id: 'por-zlata-hodina',
    kind: 'article',
    title: 'Zlatá hodina: první dvě hodiny s miminkem',
    excerpt:
      'To, co se stane hned po porodu, ovlivní kojení, teplotu dítěte i vaše hormony. A dá se to naplánovat dopředu.',
    body: `## Co se v té hodině děje

Novorozenec položený nahý na hrudník matky **si sám udrží teplotu** lépe než ve vyhřívaném lůžku, stabilizuje si dech a tep a jeho kůži osídlí mateřská mikroflóra místo nemocniční.

U matky spouští kontakt kůže na kůži vyplavení oxytocinu, který **pomáhá stahovat dělohu** a snižuje krevní ztrátu.

Mnoho dětí během první hodiny projde takzvaným plazivým reflexem: zvedne hlavu, začne se posouvat k prsu a **přisaje se samo**. Není to legenda, ale opravdu to trvá desítky minut — a proto se ta hodina nesmí ukrajovat.

## Co se dá odložit

Vážení, měření, oblékání, koupel, i běžná ošetření mají čas. Zeptejte se předem, co vaše porodnice odkládá automaticky a co je potřeba si vyžádat.

Většina pracovišť dnes běžně odkládá i **podvaz pupečníku o 1–3 minuty**, což zlepšuje zásoby železa u dítěte.

## Když to nejde

Zlatá hodina není podmínka dobrého startu, jen výhodná okolnost. Nevyjde po celkové anestezii, při komplikacích u matky nebo když dítě potřebuje péči.

Co pomáhá v takové situaci:

- **kontakt kůže na kůži s partnerem** — přínos pro dítě zůstává,
- **odsátí mleziva do stříkačky** do 1–2 hodin po porodu, pokud nemůžete přikládat,
- **odstříkávání každé 2–3 hodiny**, dokud se nemůžete setkat,
- **fotka miminka u lůžka**, pokud je na jiném oddělení. Zní to jako maličkost, ale prokazatelně pomáhá tvorbě mléka.

## Co si připravit do porodního plánu

1. Chci miminko na hrudník ihned a nepřerušovaně aspoň hodinu.
2. Vážení a měření prosím až potom.
3. Odložený podvaz pupečníku, pokud to stav dovolí.
4. Když nemůžu já, přebírá kontakt kůže na kůži partner.
5. Žádné dokrmování bez mého vědomí, pokud k němu není zdravotní důvod.

> Vždycky platí, že bezpečnost matky a dítěte má přednost. Zlatá hodina je cíl, ne nárok vymahatelný za každé situace.`,
    minutes: 6,
    phases: ['birth_prep', 'birth'],
    topics: ['porod', 'kojeni'],
    level: 'essential',
    hero: 'dawn',
    publishedOn: '2026-06-22',
  },
  {
    id: 'por-kdyz-to-bylo-jinak',
    kind: 'article',
    title: 'Když porod proběhl jinak, než jste chtěla',
    excerpt:
      'Zdravé miminko není odpověď na to, co se stalo vám. Obojí může být pravda současně.',
    body: `## Co je porodní trauma

Není to definované tím, jak dramatický porod byl zvenčí. **Rozhoduje prožitek**: pocit ohrožení, ztráty kontroly, bezmoci nebo toho, že se s vámi zacházelo jako s objektem.

Trauma po porodu popisuje **zhruba každá třetí žena** a část z nich splňuje kritéria posttraumatické stresové poruchy. Prožít ho můžete i po porodu, který v dokumentaci vypadá zcela hladce.

## Jak se to projevuje

- vracející se vzpomínky, obrazy nebo zvuky ze sálu,
- noční můry a problémy s usínáním, i když je čas spát,
- vyhýbání se nemocnici, mluvení o porodu, sledování porodních videí,
- podrážděnost, ostražitost, lekavost,
- pocit odpojení od miminka nebo od vlastního těla,
- obviňování sebe („měla jsem to zvládnout jinak").

## Co pomáhá

**Získat příběh zpátky.** Řada žen si z náhlého císaře nebo z komplikace pamatuje jen útržky. Pomáhá si nechat převyprávět průběh — partnerem, porodní asistentkou, nebo přímo na pracovišti. **Máte právo požádat o rozbor porodu a o kopii dokumentace.**

**Vyslovit to.** Bez zlehčování, bez „ale hlavně že je zdravé". Ta věta má své místo až potom, co je vyslechnuto to první.

**Odborná pomoc.** U posttraumatické stresové poruchy jsou účinné psychoterapeutické metody zaměřené na trauma. Není nutné čekat měsíce; pokud potíže trvají déle než čtyři týdny nebo brání běžnému fungování, má smysl vyhledat pomoc dřív.

**Plánovat další porod jinak.** Zkušenost se dá zpracovat i tak, že se z ní stane konkrétní seznam pro příště — jiné pracoviště, jiná dohoda, dula, psychoterapeutická příprava.

## Po IVF to bývá složitější

Když jste na dítě čekala roky, přidává se ke všemu ještě vina: **„po tom všem si snad nemůžu stěžovat."** Můžete. Vděčnost a zklamání nejsou protiklady a jedno druhé neruší.

## Kdy nečekat

Ozvěte se svému lékaři, dětské sestře nebo psychologovi hned, pokud:

- se nemůžete o miminko starat nebo k němu necítíte nic déle než dva týdny,
- máte myšlenky na ublížení sobě nebo dítěti,
- nespíte ani ve chvílích, kdy máte příležitost,
- máte pocit, že ztrácíte kontakt s realitou.

**Při myšlenkách na ublížení sobě volejte 155 nebo linku první psychické pomoci 116 123.** Tohle je stav, který se řeší dnes, ne po šestinedělí.

> Tento text nenahrazuje odbornou péči. Popisuje, co se běžně děje, a kdy je namístě si říct o pomoc.`,
    minutes: 8,
    phases: ['birth', 'postpartum', 'coming_home'],
    topics: ['porod', 'psychika', 'sestinedeli'],
    level: 'comfort',
    hero: 'blush',
    reviewedBy: 'Odborně garantováno – perinatální psychologie',
    publishedOn: '2026-06-25',
    boost: 0.85,
  },
  {
    id: 'por-checklist-cisar',
    kind: 'checklist',
    title: 'Před plánovaným císařem: co si domluvit a co si vzít',
    excerpt:
      'Většinu věcí kolem císaře jde domluvit dopředu. Tenhle seznam projděte s porodnicí, ne až na sále.',
    body: `## Jak s tím pracovat

Projděte body **na poslední kontrole před termínem** a poznamenejte si odpovědi. Co se domluví předem, o to se nemusíte hádat ve chvíli, kdy ležíte na sále.

Část položek nemusí být na vašem pracovišti možná. To je legitimní odpověď — cenné je vědět to předem, ne být překvapená.`,
    minutes: 4,
    phases: ['birth_prep', 'birth'],
    gestWeeks: [34, 41],
    modifiers: ['csection'],
    topics: ['porod', 'cisar'],
    level: 'essential',
    hero: 'pearl',
    publishedOn: '2026-06-28',
    checklist: [
      { id: 'duvod', text: 'Vím, jaký je konkrétní důvod plánovaného císaře', group: 'Domluvit předem' },
      { id: 'anestezie', text: 'Vím, jaká anestezie se plánuje a co budu vnímat', group: 'Domluvit předem' },
      { id: 'partner', text: 'Ověřeno, jestli může být partner na sále', group: 'Domluvit předem' },
      { id: 'okenko', text: 'Zeptat se na sklopení plenty nebo průhledné okénko', optional: true, group: 'Domluvit předem' },
      { id: 'bonding', text: 'Domluvený kontakt kůže na kůži ještě na sále', group: 'Domluvit předem' },
      { id: 'nahradnik', text: 'Když nemůžu já, přebírá bonding partner', group: 'Domluvit předem' },
      { id: 'dokrm', text: 'Domluveno, že se nedokrmuje bez mého vědomí, pokud není zdravotní důvod', group: 'Domluvit předem' },
      { id: 'lacneni', text: 'Vím, od kolika hodin nesmím jíst a pít', group: 'Ráno před výkonem' },
      { id: 'sperky', text: 'Sundané šperky, gelové nehty podle pokynů pracoviště', group: 'Ráno před výkonem' },
      { id: 'puncochy', text: 'Kompresní punčochy', group: 'Ráno před výkonem' },
      { id: 'kalhotky', text: 'Kalhotky s vysokým pasem, které netlačí na jizvu', group: 'Do tašky' },
      { id: 'kosile', text: 'Košile s rozepínáním vpředu kvůli kojení', group: 'Do tašky' },
      { id: 'polstar', text: 'Malý polštářek pod jizvu — při vstávání a kašli výrazně uleví', hint: 'Přitisknout ho na břicho při každém pohybu, který zatíná břišní svaly.', group: 'Do tašky' },
      { id: 'brcka', text: 'Brčka — pití vleže první den jinak nejde', group: 'Do tašky' },
      { id: 'kojeni', text: 'Vyzkoušené polohy pro kojení, které nezatěžují jizvu', group: 'Po výkonu' },
      { id: 'analgezie', text: 'Vím, že si mám o analgezii říct dřív, než bolest vygraduje', group: 'Po výkonu' },
      { id: 'vstavani', text: 'Vím, jak se správně vstává — přes bok, rukama, ne břichem', group: 'Po výkonu' },
      { id: 'pomoc-doma', text: 'Domluvená pomoc doma na první tři týdny', group: 'Po výkonu' },
    ],
  },
  {
    id: 'por-kviz-kdy-vyrazit',
    kind: 'quiz',
    title: 'Kdy vyrazit do porodnice?',
    excerpt:
      'Pět situací z posledních týdnů těhotenství. U každé je vysvětlení, proč se jedná právě takhle.',
    body: `## K čemu to je

Většina zbytečné paniky na konci těhotenství vzniká z toho, že se signály pletou dohromady. Projděte si pět typických situací — a pak ještě jednou týden před termínem.

**Když si nejste jistá, volejte na porodní sál.** Je to služba, která se nezneužívá, a odpověď dostanete během minuty.`,
    minutes: 4,
    phases: ['birth_prep', 'pregnancy'],
    gestWeeks: [34, 42],
    topics: ['porod'],
    level: 'essential',
    hero: 'sage',
    publishedOn: '2026-07-01',
    quiz: [
      {
        q: 'Ve 38. týdnu vám odteče čirá plodová voda, kontrakce žádné. Co teď?',
        options: ['Vyrazit do porodnice', 'Počkat doma na kontrakce', 'Zavolat ráno gynekoložce'],
        correct: 0,
        explain:
          'Po odtoku plodové vody se jede i bez kontrakcí. Zapamatujte si čas a barvu — zelená, hnědá nebo zapáchající voda znamená volat okamžitě.',
      },
      {
        q: 'Prvorodička, 40. týden. Kontrakce po 5 minutách, každá kolem minuty, trvá to hodinu.',
        options: ['Ještě chvíli počkat', 'Vyrazit do porodnice', 'Dát si teplou sprchu a jít spát'],
        correct: 1,
        explain:
          'Pravidlo 5–1–1 (po pěti minutách, minutu dlouhé, hodinu trvající) je u prvorodičky obvyklý moment k odjezdu. Pokud už jste rodila, vyrážejte dřív.',
      },
      {
        q: 'Ve 34. týdnu cítíte pravidelné stahy po deseti minutách.',
        options: ['Volat porodnici bez čekání', 'Počkat, jestli se zesílí', 'Vypít dva litry vody a lehnout si'],
        correct: 0,
        explain:
          'Jakékoliv pravidelné kontrakce před 37. týdnem patří na kontrolu hned. Klid a hydratace mohou pomoct, ale nejsou náhrada za posouzení.',
      },
      {
        q: 'Ve 39. týdnu odešla hlenová zátka s trochou krve.',
        options: ['Jet do porodnice', 'Není důvod ke spěchu', 'Volat záchranku'],
        correct: 1,
        explain:
          'Odchod zátky je předzvěst, ne start porodu — může předcházet i o týden. Krvácení jako při menstruaci nebo silnější je ale důvod volat.',
      },
      {
        q: 'Ve 36. týdnu si všimnete, že se miminko hýbe znatelně méně než obvykle.',
        options: ['Počkat do zítřka', 'Zavolat nebo přijet na kontrolu', 'Zkusit sladké a lehnout si na levý bok'],
        correct: 1,
        explain:
          'Změna charakteru pohybů se nikdy neodkládá na zítřek. Sladké a poloha na boku můžou pohyby vyprovokovat, ale pokud si nejste jistá, patří to na KTG.',
      },
    ],
  },
]

const preterm: ContentItem[] = [
  {
    id: 'por-predcasny-porod',
    kind: 'article',
    title: 'Předčasný porod: co znamenají týdny a čísla',
    excerpt:
      'Ve 28. týdnu vypadá svět jinak než ve 34. Tohle je přehled toho, co se v jednotlivých obdobích řeší a co se dá čekat.',
    body: `## Kategorie podle týdne

Za předčasný se považuje porod **před dokončeným 37. týdnem**. Uvnitř toho je ale obrovský rozdíl:

- **34.–36. týden (pozdně nedonošení).** Nejčastější skupina. Děti obvykle potřebují podporu s krmením a udržením teploty, dýchají většinou samy. Pobyt v nemocnici bývá krátký.
- **32.–33. týden.** Často krátkodobá dechová podpora, krmení sondou, inkubátor. Prognóza je velmi dobrá.
- **28.–31. týden.** Delší pobyt, obvykle CPAP nebo jiná podpora dýchání, parenterální výživa na začátku. Většina těchto dětí se vyvíjí dobře.
- **Pod 28. týdnem (extrémně nezralí).** Intenzivní péče v řádu měsíců. Prognóza se posuzuje individuálně a mění se doslova týden po týdnu.

**Každý den navíc v děloze se počítá.** Proto se při hrozícím předčasném porodu odkládá i o 48 hodin — je to čas, který kortikoidy potřebují k tomu, aby zabraly.

## Co se dělá při hrozícím předčasném porodu

1. **Kortikoidy** — dvě injekce matce, urychlují zrání plic dítěte.
2. **Tokolýza** — léky tlumící stahy, cílem je získat čas, ne dotáhnout těhotenství do termínu.
3. **Magnézium** — v určitém týdenním okně chrání nervovou soustavu dítěte.
4. **Převoz do perinatologického centra** — dítě v děloze se převáží mnohem bezpečněji než po porodu.

## Proč se to stalo

U velké části předčasných porodů se **žádná příčina nenajde**. Známé rizikové faktory jsou infekce, zkracující se čípek, vícečetné těhotenství, preeklampsie, vrozené odchylky dělohy a předchozí předčasný porod.

**Nezpůsobila jste to prací, sexem, nákupem ani tím, že jste zvedla starší dítě.** Tahle věta patří mezi nejčastější, které perinatologové opakují — a stejně tak často jí matky nevěří.

## Co bude na porodním sále jinak

- Přítomný **neonatologický tým** — počítejte s tím, že v místnosti bude víc lidí.
- **Dítě uvidíte krátce**, možná jen na okamžik, než ho převezmou.
- **Bonding se odkládá**, ale nezaniká — klokánkování na oddělení ho z velké části nahradí.
- **Fotku si vyžádejte hned**, pokud vás oddělují. Zní to jako maličkost, ale pomáhá to i tvorbě mléka.

## První hodiny pro vás

Zeptejte se na **odstříkávání do 1–2 hodin po porodu**. Mlezivo je pro nedonošené dítě zásadní a laktace se rozjíždí lépe, když se začne brzy. Odstříkávejte **každé 2–3 hodiny včetně noci** — i pár kapek má cenu.

> Text popisuje obvyklé postupy. Konkrétní stav a prognózu vašeho dítěte může posoudit jen ošetřující neonatolog.`,
    minutes: 9,
    phases: ['preterm_birth', 'hospitalization', 'high_risk_pregnancy'],
    modifiers: ['preterm'],
    topics: ['nedonosenost', 'porod', 'nicu'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: 'Odborně garantováno – neonatologie',
    publishedOn: '2026-07-04',
    boost: 0.95,
  },
  {
    id: 'por-nicu-prvni-den',
    kind: 'article',
    title: 'První den na NICU: co uvidíte a co znamenají přístroje',
    excerpt:
      'Monitor pípá průměrně několikrát za hodinu a většina z toho nic neznamená. Tady je návod, jak se v tom vyznat.',
    body: `## Co uvidíte, když vejdete

**Inkubátor.** Udržuje teplotu a vlhkost, které si nedonošené dítě zatím neumí zajistit. Okénka po stranách slouží k tomu, abyste se dítěte mohla dotýkat.

**Elektrody na hrudi.** Sledují tep a dech. Odlepují se často — většina alarmů je právě z toho.

**Saturační čidlo** na ruce nebo noze. Měří okysličení krve.

**Sondička do nosu nebo úst.** Krmení, dokud dítě neumí sát a polykat současně. To se běžně učí zhruba **od 32.–34. týdne korigovaného věku**.

**CPAP nebo kyslíkové brýle.** Nedýchají za dítě — udržují sklípky otevřené, aby dýchání stálo míň sil.

**Infuzní pumpy.** Výživa a léky. Čísla na displeji jsou rychlost podávání, ne skóre.

## Alarmy

Naučte se jednu věc, která šetří nervy: **sestra reaguje na dítě, ne na zvuk.** Když se nikdo nerozběhne, není to nedbalost — je to informace.

Nejčastější alarmy:

- **odlepená elektroda** — pípá, i když se nic neděje,
- **desaturace** — krátký pokles okysličení, u nezralých dětí běžný, často se upraví sám,
- **bradykardie** — krátké zpomalení tepu, typicky při krmení nebo po pohybu,
- **apnoická pauza** — přestávka v dýchání, u nezralých dětí očekávaná a s dozráváním mizí.

## Čísla, která uslyšíte při vizitě

| Údaj | Co znamená |
| --- | --- |
| Saturace | okysličení krve, cílové rozmezí určuje lékař podle zralosti |
| FiO₂ | podíl kyslíku ve vdechované směsi; 21 % je běžný vzduch |
| Přírůstek | gramy za den; u nezralých dětí se sleduje víc než absolutní váha |
| Reziduum | zbytek mléka v žaludku před dalším krmením |

## Co můžete dělat vy — a je to léčba, ne návštěva

1. **Klokánkování.** Kontakt kůže na kůži stabilizuje dítěti teplotu, dech i tep a podporuje laktaci. Ptejte se na něj hned, jak to stav dovolí.
2. **Odstříkávat.** Mateřské mléko snižuje riziko závažných střevních komplikací u nedonošených dětí. Každé 2–3 hodiny, i v noci.
3. **Ohraničující dotek.** Ne hlazení — nezralá kůže na něj reaguje přetížením. Položte dlaň na hlavičku a druhou na nožky a nechte ji ležet.
4. **Být u vizity.** Ptejte se a pište si to. Za týden si nebudete pamatovat nic.
5. **Mluvit.** Váš hlas dítě zná z dělohy.

## O sebe

Střídejte se s partnerem, spěte, jezte a **nechte si nabídnout psychologa**, i když si myslíte, že to zvládáte. Na většině perinatologických center je běžnou součástí týmu.

> Konkrétní hodnoty, léčbu i prognózu posuzuje výhradně ošetřující neonatolog. Tento text vysvětluje pojmy, aby vám vizita dávala smysl.`,
    minutes: 9,
    phases: ['nicu', 'preterm_birth'],
    modifiers: ['nicu_stay', 'preterm'],
    topics: ['nicu', 'nedonosenost'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: 'Odborně garantováno – neonatologie',
    publishedOn: '2026-07-07',
    boost: 0.95,
  },
  {
    id: 'por-klokankovani',
    kind: 'article',
    title: 'Klokánkování: proč je to péče, ne odměna',
    excerpt:
      'Hodina a půl na hrudi rodiče měřitelně mění dýchání, tep i teplotu dítěte. Proto se o něj má smysl hlásit.',
    body: `## Co to je

Klokánkování je kontakt kůže na kůži: dítě jen v plence položené svisle na holou hruď rodiče, přikryté společnou dekou. Metoda vznikla v Kolumbii v 70. letech z nedostatku inkubátorů a dnes patří ke standardu péče o nedonošené děti.

## Co to dělá

- **stabilizuje teplotu** — hruď rodiče se přizpůsobuje potřebě dítěte,
- **zklidňuje dech a tep**, snižuje počet apnoických pauz,
- **snižuje stres** — méně pláče, hlubší spánek, lepší přírůstky,
- **podporuje laktaci** — po klokánkování bývá odstříknuté množství vyšší,
- **snižuje riziko infekcí** osídlením kůže vlastní mikroflórou rodiny,
- **pomáhá rodičům** — měřitelně snižuje úzkost a symptomy deprese.

## Jak na to prakticky

1. **Oblečte se tak, aby to šlo.** Košile nebo tričko s rozepínáním vpředu.
2. **Domluvte si čas.** Ideálně kolem krmení, aby se dítě nemuselo přemísťovat dvakrát.
3. **Přesun dělá sestra.** Zvlášť u dítěte na CPAP nebo s kanylami.
4. **Počítejte s delší dobou.** Přesun je pro dítě zátěž, takže má smysl vydržet **alespoň hodinu**, ideálně 90 minut a víc.
5. **Nehýbejte se moc, nemluvte nahlas.** Zpočátku stačí přítomnost. Zpívat a mluvit se dá později.
6. **Vezměte si pití a záchod předem.** Půjdete až potom.

## Když to nejde hned

U velmi nezralých dětí nebo při nestabilním stavu se začíná **ohraničujícím dotekem** — dlaň na hlavičce, druhá pod nožkami, bez hlazení. I to má měřitelný účinek na tep a saturaci.

**Klokánkovat může i partner.** Nejde o mateřské pouto, jde o kůži a klid.

## Co říct, když se bojíte

Skoro každý rodič má poprvé strach, že dítěti ublíží nebo že vytrhne kanylu. Řekněte to nahlas. Sestra to slyší denně a přesně kvůli tomu u přesunu je.

> O vhodnosti a délce klokánkování rozhoduje ošetřující tým podle stavu dítěte.`,
    minutes: 6,
    phases: ['nicu', 'coming_home'],
    modifiers: ['nicu_stay', 'preterm'],
    topics: ['nicu', 'nedonosenost', 'kojeni'],
    level: 'essential',
    hero: 'dawn',
    reviewedBy: 'Odborně garantováno – neonatologie',
    publishedOn: '2026-07-10',
  },
  {
    id: 'por-pribeh-29-tyden',
    kind: 'story',
    title: '„Porodila jsem ve 29. týdnu a nikdo mi neřekl, jak dlouho to bude trvat"',
    excerpt:
      'Příběh o osmi týdnech na oddělení, o dvaceti gramech, které rozhodnou o celém dni, a o návratu domů.',
    body: `## Středa, 29+2

Šla jsem na kontrolu kvůli tomu, že mi přišlo, že se míň hýbe. Za dvě hodiny jsem měla infuzi s magnéziem a paní doktorka mi vysvětlovala, proč dostanu injekci na plíce miminka. Ptala jsem se, jestli to znamená dnes. Řekla: „Doufáme, že ne dnes."

Bylo to za jedenáct hodin.

## První týden

Vážila 1180 gramů. Viděla jsem ji čtyři vteřiny a pak ji odvezli. Manžel šel s ní a mně zůstal strop.

První tři dny jsem nemohla vstát a znala jsem ji z fotky v telefonu. Naučila jsem se odstříkávat dřív, než jsem se jí dotkla. Sedmnáct mililitrů mi připadalo jako výsměch. Sestra řekla větu, kterou si pamatuju doteď: „To není málo. To je celá její dávka na čtyři krmení."

## Co jsem se naučila o alarmech

První týden jsem při každém pípnutí vylétla ze židle. Ve druhém týdnu mi došlo, že sestry se dívají na dítě, ne na monitor. Když nikdo nevstane, nic se neděje. To zjištění mi vrátilo asi tři hodiny spánku denně.

## Dvacet gramů

Existuje jednotka, na které stojí celý den na oddělení: přírůstek. Dvacet gramů znamenalo, že jsem celý den fungovala. Mínus deset a nedokázala jsem se najíst.

Nikdo mi neřekl, že váha kolísá. Vysvětlila mi to až v pátém týdnu jedna sestra, když viděla, jak stojím u váhy a brečím.

## Klokánkování

Poprvé ve dvanáctém dni. Devadesát minut, alarm ani jednou. Sestra to napsala do zprávy a já pochopila, že nejsem návštěva. Že to, co dělám, je součást léčby.

Od té doby jsem jezdila dvakrát denně a klokánkovala, dokud mě nevyhnali.

## Cesta domů bez ní

Nejhorší nebyl porod. Nejhorší bylo pokaždé v devět večer odejít. Autosedačka vzadu prázdná. Pak jsem si tam začala dávat její dečku a vozit ji s sebou. Vím, jak to zní. Nezajímá mě to — pomohlo to.

## Osm týdnů

Sundali CPAP ve 32+4. Naučila se sát ve 35. týdnu, a to ještě napůl. Domů jsme jeli tři dny před původním termínem porodu, s váhou 2340 gramů a s pěti stránkami doporučení.

První noc doma jsme nespali. Ani jednu minutu. Poslouchali jsme, jestli dýchá, protože poprvé u toho nebyl monitor. Volali jsme ráno na oddělení a sestra se zasmála: „To dělá každý. Za týden budete spát."

Měla pravdu.

## Co bych řekla sobě zpátky do prvního týdne

Že korigovaný věk je opravdová věc a že se podle něj bude hodnotit skoro dva roky. Že jí nebudu muset vysvětlovat, proč má jizvičku na patě. A že to, co si tehdy pamatuju jako své selhání, byla ve skutečnosti nejtěžší práce, jakou jsem kdy odvedla.

> Příběhy na této platformě jsou sdílené se souhlasem a slouží jako podpora, ne jako návod. Průběh a prognóza jsou u každého dítěte jiné a patří do rukou ošetřujícího lékaře.`,
    minutes: 8,
    phases: ['nicu', 'preterm_birth', 'coming_home'],
    modifiers: ['preterm', 'nicu_stay'],
    topics: ['nicu', 'nedonosenost', 'psychika'],
    level: 'comfort',
    hero: 'linen',
    publishedOn: '2026-07-13',
  },
]

const glossary: GlossaryTerm[] = [
  {
    term: 'Apgar skóre',
    aliases: ['apgar'],
    short: 'Rychlé bodové zhodnocení stavu novorozence v 1., 5. a 10. minutě života.',
    long:
      'Hodnotí se pět znaků po 0–2 bodech: srdeční akce, dýchání, svalové napětí, reakce na podnět a barva kůže. Nejvyšší možný součet je 10, běžně se udává jako trojice čísel (například 8–9–10). Nízké skóre v první minutě je poměrně časté a samo o sobě nic nevypovídá o budoucnosti dítěte — podstatnější je, jak se hodnoty vyvíjejí v čase a jak dítě reaguje na péči.',
    topics: ['porod', 'zdravi_ditete'],
  },
  {
    term: 'Bishop skóre',
    short: 'Bodové hodnocení zralosti děložního hrdla před vyvoláváním porodu.',
    long:
      'Lékař hodnotí otevření, zkrácení, konzistenci a polohu hrdla a výšku hlavičky. Vyšší skóre znamená, že hrdlo je připravené a vyvolávání má větší naději na hladký průběh; nízké skóre obvykle vede k tomu, že se nejprve použije prostředek na dozrání hrdla. Skóre pomáhá rozhodnout o postupu, není to předpověď výsledku porodu.',
    topics: ['porod'],
  },
  {
    term: 'Epidurální analgezie',
    aliases: ['epidurál', 'epidural'],
    short: 'Znecitlivění dolní poloviny těla tenkým katétrem zavedeným do zad.',
    long:
      'Anesteziolog zavede v sedě nebo na boku tenkou hadičku do epidurálního prostoru u páteře a podává do ní léky, které tlumí vedení bolesti. Nástup je obvykle do 15–20 minut. Žena zůstává při vědomí a při dobře nastavené dávce může i vnímat tlak a spolupracovat. Zavedení se dělá mezi kontrakcemi. Vhodnost posuzuje anesteziolog, mimo jiné podle krevní srážlivosti a stavu zad.',
    topics: ['porod'],
  },
  {
    term: 'Epiziotomie',
    aliases: ['nástřih hráze'],
    short: 'Chirurgický nástřih hráze prováděný ve vypuzovací fázi porodu.',
    long:
      'Dnes se nedělá plošně, ale jen z konkrétního důvodu — nejčastěji při hrozící rozsáhlé trhlině, při nutnosti rychle porod ukončit nebo při použití vakuumextraktoru. Provádí se ve chvíli maximálního napětí tkání, kdy je hráz částečně znecitlivená tlakem. Rána se šije vstřebatelným materiálem a hojí se obvykle dva až šest týdnů. Do porodního plánu má smysl napsat, že chcete být předem informována, kdykoliv to situace dovolí.',
    topics: ['porod', 'sestinedeli'],
  },
  {
    term: 'KTG',
    aliases: ['kardiotokografie', 'monitor'],
    short: 'Současný záznam srdeční akce plodu a děložních stahů.',
    long:
      'Na břicho se připevní dvě sondy — jedna snímá ozvy plodu, druhá stahy dělohy. Záznam ukazuje, jak srdeční frekvence reaguje na kontrakce a pohyby. Hodnotí se základní frekvence, její kolísání, akcelerace a decelerace. Špatně čitelný záznam nebývá známkou problému — často jen znamená, že se dítě pohnulo a sonda se posunula.',
    topics: ['porod', 'tehotenstvi'],
  },
  {
    term: 'Tokolýza',
    short: 'Léčba, která dočasně tlumí děložní stahy při hrozícím předčasném porodu.',
    long:
      'Cílem není udržet těhotenství do termínu, ale získat obvykle 48 hodin — čas potřebný na to, aby zabraly kortikoidy podpořující zrání plicní tkáně, a případně na převoz do pracoviště s odpovídající novorozeneckou péčí. Podává se nitrožilně nebo v tabletách a používá se v konkrétním časovém okně těhotenství, které určuje lékař.',
    topics: ['porod', 'nedonosenost', 'rizikove'],
  },
  {
    term: 'Kortikoidy před porodem',
    aliases: ['betamethason', 'zrání plic'],
    short: 'Dvě injekce, které urychlují zrání plic dítěte při hrozícím předčasném porodu.',
    long:
      'Podávají se matce do svalu, obvykle ve dvou dávkách po 24 hodinách. Prostupují k plodu a urychlují tvorbu surfaktantu — látky, která brání splasknutí plicních sklípků. Prokazatelně snižují riziko dechových potíží po předčasném porodu. Nejlepšího účinku dosahují zhruba za 24 hodin až 7 dní od podání, ale i jedna dávka má smysl.',
    topics: ['nedonosenost', 'rizikove', 'porod'],
  },
  {
    term: 'Zlatá hodina',
    short: 'První hodina až dvě po porodu, kdy dítě leží nepřerušovaně na těle matky.',
    long:
      'Nepřetržitý kontakt kůže na kůži stabilizuje dítěti teplotu, dech i hladinu cukru, osídluje jeho kůži mikroflórou matky a podporuje první přisátí, ke kterému se řada novorozenců dopracuje sama během první hodiny. Vážení, měření a další rutinní úkony se dají odložit. Pokud stav matky nebo dítěte kontakt neumožní, může první hodinu převzít partner — přínos kontaktu kůže na kůži zůstává.',
    topics: ['porod', 'kojeni'],
  },
]

export const pack: ContentPack = {
  items: [...prep, ...labor, ...preterm],
  glossary,
}
