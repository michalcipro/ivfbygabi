import type { ContentPack } from '../types'

export const pack: ContentPack = {
  items: [
    {
      id: 'loss-biochemicke-tehotenstvi',
      kind: 'article',
      title: 'Biochemické těhotenství: bylo skutečné a ztráta je skutečná taky',
      excerpt:
        'Trvalo pár dní a nikdo ho neviděl na ultrazvuku — a přesto jste byla těhotná a přesto teď truchlíte.',
      body: `## Co se stalo

Biochemické těhotenství znamená, že k otěhotnění došlo. Embryo se zahnízdilo natolik, že začalo tvořit hCG, a ten hormon se objevil v krvi nebo na testu. Těhotenství se ale zastavilo velmi brzy — obvykle dřív, než by na ultrazvuku bylo možné cokoli zobrazit.

Slovo **biochemické** popisuje jedinou věc: že jediným důkazem byla laboratorní hodnota, ne obrázek. Neříká nic o tom, jak moc jste to těhotenství chtěla, jak dlouho jste na něj čekala ani jak silně ho teď postrádáte.

## Proč to bolí tolik, i když to trvalo pár dní

Protože jste nečekala pár dní. Čekala jste měsíce nebo roky, prošla jste stimulací, odběrem, laboratoří, transferem a čekáním. A pak přišel pozitivní test — a s ním jméno, pokoj, Vánoce, celý jeden život rozvinutý dopředu za jedno odpoledne.

To, co jste ztratila, není shluk buněk. Je to budoucnost, kterou jste si už dovolila představit.

Pravděpodobně uslyšíte věty, které mají pomoct a nepomůžou. Nemusíte na ně nic říkat a nemusíte se cítit provinile, když vás rozzlobí. **Ztráta se neměří počtem dní ani milimetry na ultrazvuku.**

## Co bude dělat hCG

Klinika vás obvykle pozve na kontrolní odběry, dokud hodnota neklesne pod měřitelnou mez. Tohle sledování má dva důvody a oba jsou praktické:

- **Ověřit, že hodnota klesá** — to potvrzuje, že těhotenství skutečně končí a v děloze ani jinde nezůstává aktivní tkáň.
- **Vyloučit mimoděložní uložení.** Když hCG neklesá nebo se drží na místě, je potřeba pátrat dál. Není to obvyklý scénář, ale je to důvod, proč se odběry opakují.

Nemusíte si hodnoty srovnávat s tabulkami z internetu. Rychlost poklesu se liší podle toho, jak vysoko hodnota vystoupala. Interpretaci nechte na svém lékaři.

## Jak to bude vypadat fyzicky

Většinou přijde krvácení, které se podobá menstruaci nebo je o něco silnější, často s křečemi v podbřišku. Může přijít se zpožděním několika dní po odběru — zvlášť když jste užívala podporu luteální fáze. **O vysazení jakýchkoli léků rozhoduje váš lékař, ne test ani hladina, kterou jste si našla na fóru.**

Někdy je krvácení naopak slabé a krátké. Obojí je v mezích běžného průběhu.

## Kdy volat lékaře

Ozvěte se neprodleně, pokud se objeví:

- **silné krvácení** — prosáknutí velké vložky za hodinu, a takto dvě hodiny po sobě,
- **prudká nebo narůstající bolest v podbřišku**, zvlášť jednostranná,
- **bolest v rameni nebo mezi lopatkami**, závrať, mdloba, bledost, studený pot — možné příznaky mimoděložního těhotenství, které vyžadují okamžité vyšetření,
- **horečka nad 38 °C** nebo zapáchající výtok,
- hCG, které podle kontrolních odběrů **neklesá**.

## Co teď opravdu nemusíte

- **Hledat, co jste udělala špatně.** Naprostá většina velmi časných ztrát souvisí s chromozomální výbavou embrya, kterou nešlo ovlivnit ničím, co jste snědla, zvedla nebo si myslela.
- **Rozhodovat o dalším pokusu.** Ne dnes. Rozhodnutí, která uděláte v prvních dnech, obvykle nejsou vaše nejlepší.
- **Být vděčná za informaci.** Nikdo po vás nemůže chtít, abyste tuhle ztrátu překlopila do dobré zprávy.

## Jedna praktická věc na dnešek

Napište si do poznámek datum pozitivního testu, hodnoty hCG a datum, kdy přišlo krvácení. Za tři týdny na kontrole se vás na to někdo zeptá a vy si to nebudete pamatovat. Není to úkol na truchlení — je to úkol, který vám ušetří jedno budoucí trápení.

> Tento text popisuje obvyklý průběh a nenahrazuje lékařskou péči ani pokyny vaší kliniky. S konkrétními hodnotami, léky a dalším postupem se vždy obracejte na svého ošetřujícího lékaře.`,
      minutes: 7,
      phases: ['loss_biochemical'],
      dayRange: [0, 5],
      topics: ['ztrata', 'psychika', 'vysledky', 'hormony'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-04',
      boost: 0.95,
    },
    {
      id: 'loss-biochemicke-hcg-a-dalsi-kroky',
      kind: 'article',
      title: 'Když hCG klesá: co znamenají kontrolní odběry a co bude dál',
      excerpt:
        'Chodíte na odběry těhotenství, které už skončilo — tady je, proč to má smysl a kdy to konečně skončí.',
      body: `## Proč vás klinika nepustí hned

Je to zvláštní forma krutosti: těhotenství skončilo a vy stále jezdíte na odběry, sedíte v čekárně mezi ženami s bříšky a necháváte si píchat do žíly kvůli číslu, které chcete vidět nulové. Má to ale jasný medicínský důvod.

**Dokud je v těle měřitelné hCG, tělo se chová, jako by bylo těhotné.** A dokud lékař nevidí, že hodnota spolehlivě klesá k nule, nemůže s jistotou vyloučit, že někde nezůstala aktivní tkáň — v děloze nebo mimo ni.

## Co lékař ve výsledcích sleduje

Nejde o jedno číslo. Jde o **trend mezi odběry**:

- **Klesající hodnota** je to, co se očekává. Rychlost poklesu závisí na tom, jak vysoko hodnota vystoupala — z nižších čísel klesá rychleji, z vyšších to trvá déle.
- **Stagnující hodnota** znamená, že se odběr zopakuje a doplní se ultrazvuk. Nemusí jít o nic dramatického, ale je to signál, že je potřeba se dívat dál.
- **Rostoucí hodnota** po ztrátě vždy znamená další vyšetření. Tady se hledá především mimoděložní uložení.

Nesrovnávejte si své hodnoty s tabulkami z diskuzních fór. Ta čísla neznamenají nic bez znalosti vašeho cyklu, typu léčby a předchozích odběrů. **Interpretace patří vašemu lékaři.**

## Jak dlouho to obvykle trvá

Poctivá odpověď: různě. Od několika dní po několik týdnů, podle toho, jak vysoko hCG vystoupalo. Pro plánování dalšího kroku je ale důležité, že se **většina klinik vrací k dalšímu cyklu až po návratu hodnoty pod měřitelnou mez** a obvykle po jedné menstruaci navíc.

Zeptejte se konkrétně: „Jaká hodnota u vás znamená, že už chodit nemusím?" Mít cíl je snesitelnější než chodit donekonečna.

## Léky, které jste užívala

Progesteron, estrogeny, injekce, aspirin, cokoli z vašeho protokolu — **o vysazení rozhoduje výhradně lékař.** Vysazení progesteronu na vlastní pěst může krvácení uspíšit, ale také zamlžit obraz, podle kterého se rozhoduje o dalším postupu.

Když vám nikdo aktivně neřekl, co s léky, zavolejte a zeptejte se. Není to obtěžování, je to součást péče.

## Co si připravit na kontrolu

Až budete mít termín u lékaře, vezměte si s sebou napsané:

1. **datum posledního transferu nebo posledních menstruací**,
2. **všechny hodnoty hCG s daty odběrů**,
3. **datum a charakter krvácení** — kdy začalo, jak silné bylo, jak dlouho trvalo,
4. **seznam léků**, které jste užívala a kdy jste je vysadila,
5. **tři otázky**, které chcete mít zodpovězené, než odejdete.

Ve stresu si z rozhovoru odnesete zhruba třetinu. Papír je spolehlivější než paměť.

## Otázky, které stojí za to položit

- Je podle vás potřeba něco vyšetřovat, nebo je tohle jednorázová záležitost?
- Kdy se může tělo připravit na další cyklus a co bude rozhodovat o načasování?
- Zbyla nám zamrazená embrya a v jakém jsou stadiu?
- Změnili byste na příštím pokusu něco v protokolu?

Nemusíte odpovědi dostat všechny hned. Některé přijdou až po odstupu a po dalších vyšetřeních. Ale je vaše právo se ptát.

## Kdy volat mimo objednaný termín

- silné krvácení s prosakováním velké vložky za hodinu, dvě hodiny po sobě,
- prudká jednostranná bolest v podbřišku, bolest v rameni, závrať nebo mdloba,
- horečka nad 38 °C nebo zapáchající výtok,
- výsledek odběru, kterému nerozumíte a nikdo se vám do druhého dne neozval.

> Text popisuje obecný postup, nenahrazuje lékařskou péči a nemůže nahradit individuální posouzení vašeho lékaře.`,
      minutes: 6,
      phases: ['loss_biochemical', 'loss_missed', 'loss_miscarriage'],
      dayRange: [1, 14],
      topics: ['ztrata', 'vysledky', 'hormony', 'klinika'],
      level: 'deep',
      hero: 'taupe',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-19',
      boost: 0.6,
    },
    {
      id: 'loss-mimodelozni-varovne-priznaky',
      kind: 'article',
      title: 'Mimoděložní těhotenství: příznaky, které nesmíte přejít',
      excerpt:
        'Tohle je jediný text v aplikaci, který vás prosí, abyste ho četla dřív, než ho budete potřebovat.',
      body: `## Nejdřív to nejdůležitější

Mimoděložní těhotenství je stav, kdy se embryo uhnízdí mimo dutinu děložní — nejčastěji ve vejcovodu. Takové těhotenství **nemůže pokračovat** a bez léčby může vést k prasknutí vejcovodu a život ohrožujícímu vnitřnímu krvácení.

Zní to tvrdě. Píšu to takhle přímo proto, že váhání je tady jediné skutečné nebezpečí. Pokud máte kterýkoli z příznaků níže, nečekejte do rána a neověřujte si to na internetu.

## Volejte záchrannou službu (155) nebo jeďte okamžitě na pohotovost, pokud máte

- **prudkou, ostrou nebo narůstající bolest v podbřišku**, zvlášť jednostrannou,
- **bolest v rameni nebo mezi lopatkami** — vzniká drážděním bránice krví v dutině břišní a je varovným příznakem, i když nebolí břicho,
- **závrať, mdlobu, výrazné zeslábnutí**, bledost, studený pot, bušení srdce,
- **náhlou bolest při stolici nebo močení** spolu s tlakem v konečníku,
- **kolaps** nebo pocit, že omdlíváte.

Tyto příznaky mohou znamenat, že došlo ke krvácení do dutiny břišní. **Je to akutní stav.**

## Zavolejte lékaři ještě dnes, pokud máte

- pozitivní těhotenský test a **jednostrannou bolest v podbřišku**, i mírnou,
- **nepravidelné špinění nebo krvácení** v časném těhotenství, které se liší od menstruace (často tmavé, řídké, přerušované),
- **hCG, které neroste tak, jak by mělo**, nebo naopak neklesá po ztrátě,
- těhotenství, které je podle hodnot dost pokročilé, ale **na ultrazvuku není v děloze nic vidět**.

## Proč jsou ženy po IVF pozornější

Riziko mimoděložního těhotenství není vyšší u všech, ale zvýšenou pozornost mu věnujeme zejména u žen s **poškozením nebo neprůchodností vejcovodů**, po zánětu v malé pánvi, po předchozím mimoděložním těhotenství a při endometrióze. Vaše konkrétní riziko posoudí váš lékař podle vaší anamnézy — obecná čísla z internetu na vás nesedí.

Transfer embrya do dělohy bohužel mimoděložní uložení nevylučuje. Embryo se v prvních dnech pohybuje a může se dostat do vejcovodu. **Není to ničí chyba a rozhodně ne vaše.**

## Jak se to zjišťuje

Diagnostika stojí na třech pilířích a obvykle se opakuje v čase:

1. **Opakované odběry hCG** — sleduje se trend, ne jedno číslo.
2. **Vaginální ultrazvuk** — hledá se plodové vejce v děloze, volná tekutina v dutině břišní a útvar v oblasti vejcovodu.
3. **Klinický obraz** — co cítíte, jaká je bolest, jaký je váš krevní tlak a puls.

Někdy je nutné vyšetření po dvou nebo třech dnech zopakovat, protože obraz ještě není jednoznačný. To čekání je vyčerpávající. **Nepřestávejte v té době sledovat příznaky ze seznamu výše.**

## Co si připravit, když jedete na pohotovost

- kartičku pojišťovny a doklad,
- **datum poslední menstruace nebo transferu**,
- všechny **hodnoty hCG s daty**,
- seznam léků,
- nabitý telefon a někoho, kdo vás doveze — **neřiďte, pokud máte závrať nebo bolest**.

## Když vám řeknou, že to není nic

Stává se, že první vyšetření vyjde nejednoznačně a pošlou vás domů s tím, že se máte vrátit za dva dny. To je legitimní postup. **Ale platí, že když se stav zhorší, vracíte se okamžitě, i kdyby bylo pět ráno.** Nový příznak přebíjí staré ujištění.

> Tento text nenahrazuje lékařské vyšetření. Nemá sloužit k tomu, abyste si sama stanovila diagnózu — má sloužit k tomu, abyste včas vyhledala pomoc.`,
      minutes: 7,
      phases: ['loss_ectopic', 'loss_biochemical'],
      dayRange: [0, 7],
      topics: ['ztrata', 'zdravi_ditete', 'klinika'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-02',
      boost: 1,
    },
    {
      id: 'loss-mimodelozni-metotrexat-vs-operace',
      kind: 'article',
      title: 'Metotrexát, nebo operace: podle čeho se rozhoduje',
      excerpt:
        'Dvě cesty, o kterých se rozhoduje během jednoho odpoledne — a vy si zasloužíte vědět, co která znamená.',
      body: `## Proč vůbec existují dvě cesty

Mimoděložní těhotenství nemůže pokračovat a je potřeba ho ukončit. Způsob se volí podle toho, **jak je stav akutní, jak vysoké je hCG, co je vidět na ultrazvuku a jak se cítíte**. Rozhoduje o tom lékař, který vás vyšetřil — ne článek a ne diskuzní fórum. Tenhle text má jediný cíl: abyste rozuměla tomu, o čem s vámi mluví.

## Konzervativní postup: metotrexát

Metotrexát je lék, který zastavuje dělení rychle se množících buněk, tedy i buněk trofoblastu. Podává se injekčně a **nevyžaduje operaci**.

Obvykle se zvažuje, když je stav stabilní, hCG relativně nízké, těhotenství malé a bez známek krvácení do dutiny břišní. Přesné podmínky i dávkování určuje výhradně lékař podle protokolu pracoviště — **nikdy se neřídí obecným textem.**

Co k tomu patří prakticky:

- **Opakované odběry hCG** po podání, obvykle několik týdnů. Hodnota může nejdřív ještě stoupnout, než začne klesat — to lékaře nepřekvapí, i když vás vyděsí.
- **Někdy je potřeba dávku zopakovat**, pokud hodnota neklesá podle očekávání.
- **Zákaz některých látek po dobu léčby** — typicky alkoholu, kyseliny listové ve vysokých dávkách a nesteroidních protizánětlivých léků. Přesný seznam dostanete od lékaře a je potřeba ho dodržet.
- **Ochrana před otěhotněním** po určitou dobu po podání. Délku určí lékař; týká se to i plánování dalšího cyklu IVF.
- **Vedlejší účinky**: nevolnost, únava, bolesti břicha, podráždění sliznic. Bolest břicha pár dní po podání bývá očekávaná — ale musíte umět rozlišit očekávanou od varovné (viz níže).

## Operační řešení

Operuje se obvykle **laparoskopicky** — několika malými vstupy v břiše. Podle nálezu se buď těhotenství odstraní z vejcovodu a vejcovod se zachová, nebo se odstraní i postižený vejcovod. O tom, co je možné, rozhoduje stav tkáně, který lékař vidí až během výkonu.

Operace se volí zejména tehdy, když je stav akutní, je přítomné krvácení do dutiny břišní, hCG je vysoké, těhotenství větší, nebo když konzervativní postup selhal.

Prakticky to znamená hospitalizaci, celkovou anestezii a rekonvalescenci obvykle v řádu dnů až dvou týdnů. **Pracovní neschopnost vám vypíše ošetřující lékař** — nebojte se o ni říct, není to slabost.

## Otázka, kterou si kladou skoro všechny

„Když mi vezmou vejcovod, můžu ještě otěhotnět?"

Ano, těhotenství je i s jedním vejcovodem možné a **u IVF se vejcovody k oplodnění vůbec nevyužívají** — embryo se přenáší přímo do dělohy. Co přesně to znamená pro vás, závisí na stavu druhého vejcovodu a na vaší diagnóze. Zeptejte se přímo svého lékaře; obecná odpověď vás neuklidní a ani nemá.

## Kdy volat lékaře nebo záchrannou službu

Ať už jdete kteroukoli cestou, okamžitě vyhledejte pomoc při:

- **prudké nebo rychle sílící bolesti břicha**,
- **bolesti v rameni nebo mezi lopatkami**,
- **závrati, mdlobě, bledosti, studeném potu, bušení srdce**,
- **silném krvácení**,
- horečce nad 38 °C,
- zvracení, které vám brání pít.

Při konzervativní léčbě je zvlášť důležité **nevynechat žádný kontrolní odběr**, i když se cítíte dobře. Právě ty odběry jsou to, co drží léčbu bezpečnou.

## A ještě jedna věc

Tohle nebyla „jen komplikace". Bylo to těhotenství, které jste chtěla, a skončilo způsobem, který byl navíc fyzicky nebezpečný. Máte právo truchlit i být naštvaná — a nemusíte být vděčná za to, že jste v pořádku.

> Text popisuje obecné principy a nenahrazuje lékařskou péči. O léčbě rozhoduje váš ošetřující lékař podle vašeho konkrétního stavu.`,
      minutes: 8,
      phases: ['loss_ectopic'],
      dayRange: [0, 14],
      topics: ['ztrata', 'leky', 'klinika', 'psychika'],
      level: 'essential',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-11',
      boost: 0.85,
    },
    {
      id: 'loss-mimodelozni-po-lecbe',
      kind: 'article',
      title: 'Po mimoděložním těhotenství: rekonvalescence a co dál',
      excerpt:
        'Tělo se hojí rychleji než hlava — a to je právě to, na co vás nikdo nepřipravil.',
      body: `## První dny doma

Ať už jste prošla operací nebo konzervativní léčbou, první dny doma bývají matoucí. Fyzicky se možná cítíte překvapivě dobře, a přesto nedokážete dojít pro poštu. Tělo po akutním stavu spotřebovalo víc energie, než je vidět, a hormonální propad dělá svoje.

Praktické minimum na první týden:

- **Odpočívejte víc, než se vám zdá nutné.** Únava po celkové anestezii i po akutním stavu trvá dny.
- **Pijte a jezte pravidelně**, i když nemáte chuť. Nízký příjem prodlužuje slabost a bolest hlavy.
- **Nezvedejte těžké** a dodržujte, co vám řekli o zátěži. U operace bývá omezení na několik týdnů.
- **Sledujte rány**, pokud jste po laparoskopii — zarudnutí, otok, výtok a bolest, která se zhoršuje místo aby polevovala, patří lékaři.
- **Nechte si vypsat neschopenku.** Návrat do práce za tři dny po tomhle není síla, je to riziko.

## Kontrolní odběry, které nesmíte vynechat

Po metotrexátu i po některých typech operací se **hCG sleduje až do poklesu pod měřitelnou hodnotu**. Tohle není formalita — je to kontrola, že v těle nezůstala aktivní tkáň. I když se cítíte dobře, i když už nechcete vidět další jehlu: choďte.

Zeptejte se lékaře na dvě konkrétní věci: **jaká hodnota znamená konec sledování** a **kdy je bezpečné plánovat další těhotenství**. Po metotrexátu se obvykle doporučuje odstup, jehož délku určí váš lékař.

## Krvácení a menstruace

Nepravidelné krvácení nebo špinění může pokračovat několik týdnů. **První menstruace přichází nejčastěji v odstupu čtyř až šesti týdnů**, ale rozptyl je velký a bývá silnější nebo bolestivější než obvykle. Když nepřijde do dvou měsíců, ozvěte se.

## Kdy volat lékaře

- **prudká nebo narůstající bolest břicha**, bolest v rameni, závrať, mdloba — okamžitě, i týdny po léčbě,
- silné krvácení (prosáknutí velké vložky za hodinu, dvě hodiny po sobě),
- **horečka nad 38 °C**, zimnice, zapáchající výtok,
- zarudnutí, hnisání nebo rozestup operační rány,
- **zvracení a neschopnost pít**,
- otok, bolest nebo zarudnutí lýtka, náhlá dušnost nebo bolest na hrudi.

## Co s druhým vejcovodem a s dalším pokusem

Pokud jste přišla o vejcovod, je přirozené, že vás teď zajímá hlavně tohle. Odpověď má tři vrstvy:

1. **Pro IVF nejsou vejcovody potřeba** — oplodnění probíhá v laboratoři a embryo se přenáší přímo do dělohy.
2. **Stav druhého vejcovodu** ovlivňuje šanci na spontánní otěhotnění a někdy i doporučení k dalšímu postupu.
3. **Prodělané mimoděložní těhotenství** je informace, kterou má váš lékař v anamnéze a která ovlivní, jak pečlivě se bude sledovat vaše příští těhotenství — typicky časnějším ultrazvukem.

O načasování dalšího cyklu rozhoduje váš lékař podle typu léčby, hodnot a vašeho stavu. **Obecné lhůty z internetu tady opravdu nepomůžou.**

## Co s tím vším uvnitř

Ženy po mimoděložním těhotenství často popisují dvojí ztrátu: dítě a zároveň kus vlastní důvěry v tělo. K tomu se přidává, že okolí vnímá hlavně to, že „to dobře dopadlo" — protože vy žijete.

Vy jste ale zároveň prošla akutním ohrožením a ztrátou těhotenství. **Obojí platí najednou.** Nemusíte si vybírat, které z toho smíte prožívat, a nemusíte být vděčná dřív, než budete.

Pokud vás po několika týdnech stále přepadají obrazy z nemocnice, budíte se s bušením srdce nebo se vyhýbáte místům spojeným s tou dobou, řekněte to lékaři. Tohle patří k příznakům, se kterými odborník umí pomoct — a nedělá se to za trest ani z lítosti.

> Text má obecně informativní charakter a nenahrazuje lékařskou péči. Řiďte se pokyny svého ošetřujícího lékaře.`,
      minutes: 8,
      phases: ['loss_ectopic'],
      dayRange: [3, 30],
      topics: ['ztrata', 'psychika', 'sebepece', 'klinika'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-01',
      boost: 0.7,
    },
    {
      id: 'loss-zamlkle-tehotenstvi',
      kind: 'article',
      title: 'Zamlklé těhotenství: když tělo ještě neví, že to skončilo',
      excerpt:
        'Nejkrutější věta v ordinaci nezní „přišla jste o dítě" — zní „srdíčko už netluče" a vy jste ještě před chvílí byla těhotná.',
      body: `## Co to znamená

Zamlklé těhotenství (v lékařských zprávách často **missed abortion** nebo **zamlklý potrat**) je stav, kdy se vývoj těhotenství zastavil, ale tělo to zatím nerozpoznalo. Nepřišlo krvácení, příznaky těhotenství mohou trvat dál, břicho vypadá stejně. Zjistí se to obvykle při běžném ultrazvuku — a právě proto to bývá tak drtivé. Přišla jste na kontrolu a odcházíte s úplně jiným životem.

Někdy lékař vidí plodové vejce bez embrya, jindy embryo bez srdeční akce, jindy zaostávající velikost oproti termínu.

## Proč se vyšetření obvykle opakuje

Skoro vždy vám nabídnou **kontrolní ultrazvuk s odstupem několika dní**, případně u jiného lékaře nebo na jiném přístroji. Není to proto, že by si nebyli jistí svou prací. Je to proto, že diagnóza zamlklého těhotenství má přesná kritéria a musí být jednoznačná dřív, než se cokoli udělá.

To čekání patří k nejhorším dnům, jaké člověk zažije. Visíte mezi dvěma světy a nesmíte se zabydlet ani v jednom. **Nemusíte v té době fungovat.** Zrušte, co se dá zrušit.

Pokud vás napadá, jestli je naděje: někdy se termín přepočítá a nález se ukáže jako mladší těhotenství. Stává se to. Ale nedoporučuji vám na tom stavět dny — spíš si dovolit obojí najednou, doufat i truchlit. Většina žen to takhle žije tak jako tak.

## Proč se to stalo

V naprosté většině případů jde o **chromozomální odchylku embrya**, která vznikla náhodně při dělení buněk. Není to nic, co byste způsobila. Ne káva, ne stres, ne to, že jste zvedla tašku, ne to, že jste se v jednu chvíli bála, že to nedopadne.

Tohle není útěcha, je to fakt. A stojí za to si ho přečíst vícekrát, protože hledání viny je první věc, kterou hlava udělá.

## Tři možné cesty dál

Až bude diagnóza jistá, budete se rozhodovat mezi třemi postupy. Podrobně je popisuje samostatný text v aplikaci; ve zkratce jde o:

1. **Vyčkávání na spontánní odchod** — necháte tělu čas, aby těhotenství vypudilo samo.
2. **Medikamentózní postup** — léky, které vypuzení vyvolají.
3. **Instrumentální revize dutiny děložní** — výkon na sále, obvykle v krátké anestezii.

O tom, které možnosti jsou pro vás bezpečné, rozhoduje lékař podle týdne těhotenství, nálezu, vašich hodnot a zdravotního stavu. **Kde je na výběr, máte právo se rozhodnout vy** — a máte právo si o rozhodnutí říct den na rozmyšlenou, pokud vám lékař neřekne, že je to akutní.

## Otázky, které se vyplatí položit hned

- Je můj nález jednoznačný, nebo se ještě bude ověřovat?
- Které z možností jsou v mém případě bezpečné a proč doporučujete zrovna tuhle?
- Jak dlouho můžu čekat, než se rozhodnu?
- Lze poslat tkáň na **genetické vyšetření**? Co pro to musíme udělat a rozhodnout hned?
- Na koho se mám obrátit, když se stav v noci nebo o víkendu zhorší?

Bod o genetickém vyšetření je důležitý právě teď, protože u některých postupů se musí rozhodnout **předem**. Nemusí být indikované u každé ženy — zeptejte se, jestli ve vašem případě dává smysl.

## Kdy volat lékaře okamžitě

I když čekáte na kontrolní termín, ozvěte se neprodleně při:

- **silném krvácení** — prosáknutí velké vložky za hodinu, dvě hodiny po sobě, nebo odchod velkých koagul,
- **prudké nebo narůstající bolesti** v podbřišku,
- **horečce nad 38 °C**, zimnici nebo zapáchajícím výtoku,
- **závrati, mdlobě, bledosti, studeném potu**,
- bolesti v rameni nebo mezi lopatkami.

## Na dnešek

Nemusíte nic rozhodnout, nikomu nic říct ani nic zvládnout. Napijte se, najezte se, i když nemáte hlad, a řekněte jednomu člověku, ať u vás dnes večer je. To stačí.

> Text popisuje obecný postup a nenahrazuje lékařskou péči. O diagnóze i o dalším postupu rozhoduje váš ošetřující lékař.`,
      minutes: 8,
      phases: ['loss_missed'],
      dayRange: [0, 5],
      topics: ['ztrata', 'psychika', 'klinika', 'genetika'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-06',
      boost: 0.95,
    },
    {
      id: 'loss-cekani-vs-revize',
      kind: 'article',
      title: 'Čekat, nebo jít na revizi: jak se v tom rozhodnout',
      excerpt:
        'Rozhodnutí, které nemá jednu správnou odpověď — ale má odpověď, která sedne právě vám.',
      body: `## Tři cesty a žádná z nich není zbabělá

Když je diagnóza jistá, obvykle se rozhoduje mezi vyčkáváním, léky a výkonem. Pokud vám lékař nabídl volbu, znamená to, že jsou ve vašem případě všechny bezpečné. **Neexistuje varianta, která by byla statečnější nebo přirozenější než ostatní.** Existuje jen ta, kterou zvládnete vy.

## 1. Vyčkávání na spontánní odchod

Necháte tělu čas, aby těhotenství vypudilo samo.

**Pro:** žádný zákrok, žádná anestezie, můžete být doma.
**Proti:** nevíte, kdy to přijde — může to být dny i týdny. Krvácení bývá silné a bolestivé, často v noci a obvykle bez varování. Někdy odchod není úplný a nakonec je výkon stejně potřeba.

Praktické: mějte doma zásobu vložek, tišící léky podle doporučení lékaře, telefon na pohotovost a **plán, kdo vás odveze**, kdyby to bylo silné. Neplánujte na tu dobu cesty daleko od nemocnice.

## 2. Medikamentózní postup

Léky, které vypuzení vyvolají, podané podle protokolu pracoviště. Rozhodnutí, dávkování i způsob podání určuje výhradně lékař — **nikdy se to neřídí obecným návodem.**

**Pro:** větší předvídatelnost než čisté vyčkávání, obvykle bez anestezie a bez sálu.
**Proti:** krvácení a křeče bývají výrazné, může trvat několik dní a v části případů je nakonec potřeba doplnit výkon.

Zeptejte se předem: kde budu, jak silné to bude, co si mám vzít na bolest a v kolik hodin mám volat, když to bude horší.

## 3. Instrumentální revize dutiny děložní

Výkon na sále, obvykle v krátké celkové anestezii — dnes často pod ultrazvukovou nebo hysteroskopickou kontrolou.

**Pro:** je to rychlé a jasně ohraničené. Víte, kdy to začne a kdy to skončí. Pro mnoho žen je nesnesitelná právě představa, že to bude doma odcházet po částech.
**Proti:** jde o výkon s anestezií a s malým, ale nenulovým rizikem komplikací (infekce, poranění, srůsty v dutině). Vyžaduje přípravu — lačnění, doprovod domů.

## Co do rozhodování patří

- **Týden těhotenství a nález** — čím pokročilejší, tím spíš má lékař jasnější doporučení.
- **Vaše hodnoty a zdravotní stav**, například poruchy srážlivosti nebo léky na ředění krve.
- **Genetické vyšetření tkáně**, pokud je ve vašem případě indikované — u některých postupů se musí rozhodnout předem.
- **Vaše psychika.** Tohle není měkký faktor. Žena, která nesnese čekání, prožije týden vyčkávání jako mučení. Žena, která se panicky bojí anestezie, bude po výkonu měsíce zpracovávat něco jiného než ztrátu. Řekněte to lékaři nahlas.
- **Vaše zázemí** — máte doma malé dítě? Bydlíte hodinu od nemocnice? Jste tento týden sama?

## Na co se zeptat, než se rozhodnete

1. Které možnosti jsou v mém případě bezpečné?
2. Kolik času mám na rozhodnutí?
3. Jak velká je pravděpodobnost, že u zvolené cesty nakonec bude potřeba výkon?
4. Jak se pozná, že už je to hotové, a jak se to bude kontrolovat?
5. Můžeme poslat tkáň na genetické vyšetření? Co pro to musíme udělat?
6. Kdo drží službu, když se to zhorší v noci nebo o víkendu?

## Kdy volat lékaře nebo záchrannou službu

Bez ohledu na zvolenou cestu:

- **silné krvácení** — prosáknutí velké vložky za hodinu po dvě hodiny po sobě, nebo odchod koagul větších než švestka,
- **prudká, narůstající bolest**, kterou nezvládají běžné léky,
- **horečka nad 38 °C**, zimnice, **zapáchající výtok**,
- **závrať, mdloba, bledost, studený pot, bušení srdce**,
- krvácení, které po výkonu či po odchodu tkáně **znovu zesílí** místo aby sláblo.

## A ještě něco

Ať zvolíte cokoli, za tři měsíce se pravděpodobně přistihnete, jak přemýšlíte, jestli jste měla zvolit to druhé. Tohle přemýšlení není důkaz chyby. Je to způsob, jak hlava zpracovává situaci, ve které žádná dobrá varianta neexistovala.

> Text popisuje obecné principy a nenahrazuje lékařskou péči. O tom, co je pro vás vhodné, rozhoduje váš ošetřující lékař.`,
      minutes: 9,
      phases: ['loss_missed', 'loss_miscarriage'],
      dayRange: [0, 10],
      topics: ['ztrata', 'klinika', 'psychika', 'genetika'],
      level: 'essential',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-15',
      boost: 0.9,
    },
    {
      id: 'loss-prubeh-revize',
      kind: 'article',
      title: 'Revize dutiny děložní krok za krokem: co se bude dít',
      excerpt:
        'Od lačnění po probuzení v boxu — když víte, co přijde, ubyde alespoň strach z neznámého.',
      body: `## Než pojedete

Revize dutiny děložní je krátký výkon na sále, obvykle v celkové anestezii. Připravte se den předem, ať ráno nic neřešíte.

**Praktický seznam:**

- **doklad totožnosti a kartička pojišťovny**, případně doporučení od lékaře,
- **seznam léků**, které užíváte, a **seznam alergií** — anesteziologa to bude zajímat,
- **volné oblečení**, papuče, ponožky, hygienické potřeby, **vložky** (ne tampony),
- **nabíječka a telefon**,
- **doprovod domů.** Po celkové anestezii nesmíte řídit ani jet sama.

Pokyn k **lačnění** dostanete od pracoviště a je potřeba ho dodržet přesně — týká se i vody, žvýkaček a cigaret. Když ho porušíte, výkon se odkládá.

## Ráno na oddělení

Čeká vás příjem, papírování a podepisování informovaných souhlasů — zvlášť souhlas s výkonem a souhlas s anestezií. Máte právo se u toho ptát, i když vidíte, že spěchají.

Pak přijde rozhovor s **anesteziologem**: zeptá se na nemoci, léky, alergie, předchozí anestezie a na to, kdy jste naposledy jedla a pila. Řekněte i to, co vám připadá nepodstatné.

Někdy se ještě dělá odběr krve, kontrolní ultrazvuk nebo se podávají léky připravující děložní hrdlo. Čekání bývá delší než samotný výkon — sály jedou podle programu, ne podle hodinek.

## Samotný výkon

Na sále dostanete kanylu do žíly, monitorovací elektrody a anestezii. Usnete během několika desítek sekund.

Lékař šetrně rozšíří děložní hrdlo a odstraní obsah dutiny děložní — dnes se to nejčastěji dělá **odsátím** (vakuová aspirace), případně za **hysteroskopické nebo ultrazvukové kontroly**. Ta kontrola je důležitá: pomáhá odstranit tkáň úplně a šetrně, což snižuje riziko zbytků a srůstů.

**Výkon obvykle trvá kolem deseti až dvaceti minut.** Vy z něj nebudete mít žádnou vzpomínku.

Pokud jste se domluvila na **genetickém vyšetření tkáně**, musí to být zaznamenané předem — ověřte si to ještě před sálem, na sále už to nikdo neřeší.

## Probuzení

Probudíte se na dospávacím pokoji. Můžete být zmatená, roztřesená, může vám být zima nebo nevolno — všechno tohle je běžné po anestezii a sestry to čekají. Někdy člověk pláče, ještě než se úplně probere. Není to selhání, je to reakce těla i hlavy.

Cítit budete tlak nebo křeče podobné menstruačním. Krvácení bývá slabší, než ženy čekají.

Většina pracovišť propouští domů **týž den nebo druhý den ráno** podle stavu a domluvy.

## První dny doma

- **Krvácení** obvykle slábne během několika dní až dvou týdnů a může se přechodně zesílit — sledujte trend, ne jeden den.
- **Vložky, ne tampony.** Kvůli riziku infekce se obvykle doporučuje vynechat i pohlavní styk, koupele, bazén a saunu, dokud krvácení neustane; přesné pokyny vám dá lékař.
- **Bolest** zvládají běžná analgetika — zeptejte se, která si můžete vzít.
- **Odpočívejte.** Anestezie unaví víc, než je vidět, a druhý den bývá horší než první.
- **Neschopenka** je legitimní. Nemusíte být zpátky v práci ve čtvrtek.
- **Kontrola** obvykle bývá za jeden až tři týdny. Nevynechávejte ji, i když se cítíte dobře.

## Kdy volat lékaře

- **silné krvácení** — prosáknutí velké vložky za hodinu, dvě hodiny po sobě, nebo velká koagula,
- **horečka nad 38 °C**, zimnice, **zapáchající výtok**,
- **prudká nebo narůstající bolest** břicha, kterou léky nezvládnou,
- **závrať, mdloba, bledost, studený pot**,
- krvácení, které po několika dnech **znovu zesílí**,
- zvracení a neschopnost pít.

> Průběh se mezi pracovišti liší. Tento text popisuje obvyklý postup a nenahrazuje pokyny vaší kliniky ani konzultaci s lékařem.`,
      minutes: 8,
      phases: ['uterine_revision', 'loss_missed', 'loss_miscarriage'],
      dayRange: [0, 3],
      topics: ['ztrata', 'klinika', 'sebepece'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-23',
      boost: 0.9,
    },
    {
      id: 'loss-po-revizi-checklist',
      kind: 'checklist',
      title: 'Po revizi: co pohlídat v prvních deseti dnech',
      excerpt:
        'Krátký seznam, který vás provede dny, kdy nemáte kapacitu si pamatovat vůbec nic.',
      body: `## Jak s tímhle seznamem pracovat

Není to úkolníček k odškrtání za jeden večer. Je to opora pro dny, kdy máte hlavu jinde a přesto potřebujete, aby se něco nezapomnělo.

Projděte ho jednou hned po návratu domů a pak ještě jednou po týdnu. Položky označené jako nepovinné klidně nechte být — jsou tam pro ženy, kterým pomáhá mít věci pojmenované.

**Nic z toho nedělejte přes sílu.** Když někdo nabízí pomoc, tohle je přesně ten seznam, který mu můžete ukázat místo vysvětlování.

## Co hlídat především

Nejdůležitější body jsou ty ve skupině **Bezpečnost** — ty si přečtěte i tehdy, když na zbytek nemáte kapacitu. Krvácení a horečka jsou dvě věci, u kterých se nečeká do rána.

> Seznam nenahrazuje pokyny, které jste dostala od svého lékaře. Kde se liší, platí pokyny kliniky.`,
      minutes: 4,
      phases: ['uterine_revision'],
      dayRange: [0, 10],
      topics: ['ztrata', 'sebepece', 'klinika'],
      level: 'essential',
      hero: 'sage',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2025-09-26',
      boost: 0.75,
      checklist: [
        {
          id: 'loss-chk-rev-doprovod',
          text: 'Mám domluvený doprovod domů a někoho, kdo se dnes večer ozve',
          hint: 'Po celkové anestezii nesmíte řídit. Platí i pro cestu taxíkem bez doprovodu, pokud se cítíte slabá.',
          group: 'Bezpečnost',
        },
        {
          id: 'loss-chk-rev-krvaceni',
          text: 'Vím, jaké krvácení je důvod okamžitě volat',
          hint: 'Prosáknutí velké vložky za hodinu po dvě hodiny po sobě nebo koagula větší než švestka. Nečekejte do rána.',
          group: 'Bezpečnost',
        },
        {
          id: 'loss-chk-rev-teplota',
          text: 'Mám doma teploměr a měřím si teplotu jednou denně',
          hint: 'Horečka nad 38 °C, zimnice nebo zapáchající výtok mohou znamenat infekci a patří lékaři týž den.',
          group: 'Bezpečnost',
        },
        {
          id: 'loss-chk-rev-telefon',
          text: 'Mám v telefonu uložené číslo na kliniku i na noční pohotovost',
          hint: 'Napište si i to, kdo drží službu o víkendu. Ve tři ráno se to nedohledává.',
          group: 'Bezpečnost',
        },
        {
          id: 'loss-chk-rev-leky',
          text: 'Vím, co si můžu vzít na bolest a jaké léky mám naopak vysadit',
          hint: 'Zeptejte se konkrétně. Neřiďte se tím, co máte doma z minula.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-rev-vlozky',
          text: 'Mám doma zásobu vložek — tampony teď ne',
          hint: 'Kvůli riziku infekce se obvykle doporučují vložky, dokud krvácení neustane.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-rev-rezim',
          text: 'Vím, co mám vynechat, dokud krvácení neustane',
          hint: 'Obvykle pohlavní styk, koupele, bazén, saunu a velkou fyzickou zátěž. Přesné pokyny dává lékař.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-rev-jidlo',
          text: 'Mám v domě jídlo na tři dny, které nemusím vařit',
          hint: 'Tohle je ideální věc, kterou nechat udělat někoho jiného.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-rev-neschopenka',
          text: 'Mám vyřešenou pracovní neschopnost nebo volno',
          hint: 'Zaměstnavateli nemusíte sdělovat diagnózu. Stačí doklad od lékaře.',
          group: 'Praktické',
        },
        {
          id: 'loss-chk-rev-kontrola',
          text: 'Mám termín kontroly a napsané otázky, které na ní chci položit',
          hint: 'Napište si je do telefonu průběžně, jak vás budou napadat.',
          group: 'Praktické',
        },
        {
          id: 'loss-chk-rev-genetika',
          text: 'Vím, jestli šla tkáň na genetické vyšetření a kdy budou výsledky',
          hint: 'Není indikované u každé ženy. Zeptejte se, jestli ve vašem případě dává smysl a kdo vám výsledek sdělí.',
          group: 'Praktické',
          optional: true,
        },
        {
          id: 'loss-chk-rev-zapis',
          text: 'Zapsala jsem si data — výkon, krvácení, hodnoty',
          hint: 'Za tři týdny si to nebudete pamatovat a na kontrole se na to někdo zeptá.',
          group: 'Praktické',
        },
        {
          id: 'loss-chk-rev-clovek',
          text: 'Řekla jsem jednomu člověku, co se stalo, a co od něj potřebuju',
          hint: 'Klidně větou: „Nechci o tom mluvit, chci, abys tu byl."',
          group: 'Vy',
        },
        {
          id: 'loss-chk-rev-zruseno',
          text: 'Zrušila jsem, co se zrušit dá',
          hint: 'Návštěvy, oslavy, schůzky. Omluva nemusí obsahovat vysvětlení.',
          group: 'Vy',
          optional: true,
        },
        {
          id: 'loss-chk-rev-sit',
          text: 'Ztlumila jsem si oznámení tam, kde teď bolí',
          hint: 'Skupiny s miminky, těhotenské aplikace, e-maily z e-shopů. Dá se to vrátit, až budete chtít.',
          group: 'Vy',
          optional: true,
        },
      ],
    },
    {
      id: 'loss-krvaceni-po-ztrate',
      kind: 'article',
      title: 'Krvácení po ztrátě: co je běžné a co už není',
      excerpt:
        'Kolik je moc, jak dlouho je normálně dlouho a v jakou chvíli se opravdu volá — bez strašení a bez zlehčování.',
      body: `## Proč tenhle text vůbec potřebujete

Protože nikdo neodchází z nemocnice s jasnou představou, jak to bude vypadat doma. A protože ve dvě ráno, když sedíte na toaletě a nevíte, jestli je tohle ještě normální, potřebujete konkrétní čísla, ne uklidňující obecnosti.

**Tenhle text nenahrazuje kontakt s lékařem.** Když váháte, volejte. Váhání je samo o sobě dobrý důvod zavolat.

## Co bývá běžné

Průběh se liší podle toho, v jakém týdnu ke ztrátě došlo a jakou cestou. Obecně platí:

- **Krvácení bývá zpočátku silnější než menstruace**, s křečemi v podbřišku, a postupně slábne.
- **Odchod koagul** (sražené krve) není sám o sobě poplašný, pokud jsou menší a krvácení celkově slábne.
- Po několika dnech přechází krvácení do **hnědavého špinění**, které může trvat i dva až tři týdny.
- **Krvácení může přechodně zesílit**, typicky když se změní poloha nebo po fyzické zátěži. Rozhodující je trend za den, ne jedna návštěva toalety.
- Po výkonu bývá krvácení naopak často **slabší**, než ženy čekají.

## Jak poznat, že je toho moc

Používejte jedno praktické měřítko, které vám poslouží i v telefonu s lékařem:

> **Prosáknu-li velkou vložku za hodinu a děje se to dvě hodiny po sobě, volám.**

Dále volejte, když:

- odcházejí **koagula větší než švestka**, zvlášť opakovaně,
- krvácení **sílí** místo aby sláblo,
- máte **závrať, mdloby, bušení srdce, výraznou bledost nebo studený pot** — to jsou příznaky velké ztráty krve a patří k nim záchranná služba, ne čekání do rána,
- **musíte měnit vložku i v noci** každou hodinu.

## Známky infekce — vždycky týž den

- **horečka nad 38 °C** nebo zimnice,
- **zapáchající výtok**,
- **bolest břicha, která se zhoršuje** místo aby polevovala,
- celková schvácenost, kterou neumíte vysvětlit.

Infekce po ztrátě je řešitelná, pokud se zachytí včas. Zdržení je jediné, co ji dělá nebezpečnou.

## Když krvácení neustává

Dlouhé nebo opakovaně sílící krvácení může znamenat, že v děloze zůstala tkáň. Řeší se to ultrazvukem a podle nálezu buď sledováním, léky, nebo doplňujícím výkonem. **Není to selhání předchozí léčby ani vaše chyba** — je to poměrně častý scénář, na který má medicína postup.

Zavolejte, když:

- krvácení trvá déle než dva až tři týdny bez zjevného slábnutí,
- krvácení ustalo a pak se **znovu rozjelo naplno**,
- máte pocit, že je něco jinak, i když to neumíte popsat.

## Praktická opatření doma

- **Vložky, ne tampony**, dokud lékař neřekne jinak — kvůli riziku infekce.
- **Sprcha místo koupele**, žádný bazén a sauna, dokud krvácení neustane.
- **Pohlavní styk** obvykle až po ustání krvácení a podle pokynu lékaře.
- **Pijte a jezte pravidelně.** Při větší krevní ztrátě je slabost z dehydratace zbytečná komplikace navíc.
- **Železo** neužívejte na vlastní pěst; nechte si zkontrolovat krevní obraz, když se cítíte dlouhodobě vyčerpaná.
- **Zapisujte si**, jak silné krvácení je a jak často měníte vložku. Na kontrole je to nejužitečnější informace, kterou můžete přinést.

## Co s tím, když se bojíte

Skoro každá žena po ztrátě popisuje, že strávila dny sledováním toaletního papíru. To není hysterie — je to logická reakce na situaci, kde bylo tělo najednou nespolehlivé.

Když ale zjistíte, že kvůli strachu nespíte, nechodíte ven nebo kontrolujete stav každou půlhodinu i po týdnech, řekněte to lékaři. Existuje pomoc a nemusíte na to čekat, až to přejde samo.

> Text má obecně informativní charakter a nenahrazuje lékařskou péči. Při pochybnostech vždy kontaktujte svého lékaře nebo pohotovost.`,
      minutes: 7,
      phases: ['loss_miscarriage', 'loss_missed', 'loss_biochemical', 'uterine_revision'],
      dayRange: [0, 21],
      topics: ['ztrata', 'sebepece', 'klinika'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-07',
      boost: 0.85,
    },
    {
      id: 'loss-navrat-menstruace',
      kind: 'article',
      title: 'Kdy se vrátí menstruace a proč na ni tak čekáte',
      excerpt:
        'První menstruace po ztrátě je zvláštní milník — je to úleva, důkaz i další rána zároveň.',
      body: `## Kdy se dá čekat

První menstruace po ztrátě přichází nejčastěji **v odstupu čtyř až šesti týdnů**, počítáno od ukončení těhotenství. Rozptyl je ale velký a záleží na tom, v jakém týdnu ke ztrátě došlo a jak vysoko bylo hCG.

Platí jednoduché pravidlo: **cyklus se nerozjede, dokud hCG neklesne pod měřitelnou mez.** Čím vyšší hodnota byla, tím déle to trvá. Po velmi časné ztrátě může menstruace přijít i za dva až tři týdny, po pozdější ztrátě klidně za šest a víc.

Pokud jste v cyklu užívala hormonální podporu, může být první cyklus rozházený i kvůli ní.

## Jaká bývá

Připravte se na to, že první menstruace po ztrátě bývá **jiná**:

- často **silnější a bolestivější** než obvykle,
- může trvat déle,
- může obsahovat větší koagula,
- může přijít po několika dnech nepravidelného špinění.

Druhý a třetí cyklus se obvykle vrací k tomu, co znáte. Když se ani po třech cyklech nesrovná, řekněte to lékaři.

## Kdy volat

- menstruace **nepřišla do osmi týdnů** od ukončení těhotenství,
- **silné krvácení** — prosáknutí velké vložky za hodinu, dvě hodiny po sobě,
- **horečka nad 38 °C**, zimnice nebo zapáchající výtok,
- **prudká bolest**, kterou nezvládají běžné léky,
- **naopak velmi slabá nebo žádná menstruace** ve dvou a více cyklech po revizi — může jít o srůsty v dutině děložní a je potřeba to vyšetřit,
- těhotenský test, který je i po několika týdnech **stále pozitivní**.

## Proč to psychicky bolí víc, než se čekalo

Většina žen popisuje první menstruaci po ztrátě jako překvapivě těžký den. Dává to smysl hned z několika stran.

**Je to definitivní.** Dokud krvácení neustalo a cyklus se nevrátil, tělo bylo pořád ještě „v tom". Menstruace to uzavře.

**Je to důkaz normálnosti**, který jste zároveň chtěla i nechtěla. Ano, tělo funguje. Ano, to znamená, že jde zkoušet dál. A zároveň — vy jste nechtěla menstruaci, vy jste chtěla dítě.

**Je to připomínka počítání.** Vracíte se do světa cyklů, dnů a termínů, ze kterého jste na chvíli vystoupila.

Nemusíte to prožít jako dobrou zprávu. Když vám někdo řekne „tak to je super, můžete zkoušet", je v pořádku odpovědět, že vám to zatím jako super nepřijde.

## Ovulace přichází dřív než menstruace

Praktická věc, která ženy často zaskočí: **ovulace nastává ještě před první menstruací.** Otěhotnět je tedy možné dřív, než menstruaci vůbec uvidíte.

To má dva důsledky:

1. Pokud si přejete odklad — třeba po metotrexátu nebo podle doporučení lékaře — je potřeba **řešit antikoncepci hned**, ne až po první menstruaci.
2. Pokud vám lékař řekl, že můžete zkoušet, spontánní těhotenství je možné i v prvním cyklu.

O tom, kdy je vhodné zkoušet znovu, rozhoduje váš lékař podle typu ztráty, léčby a vašeho stavu.

## Sledování cyklu po ztrátě

Zapisovat si cyklus je užitečné — kliniky se na to ptají a vám to dá zpátky kus kontroly. Zároveň platí, že pro některé ženy je aplikace plná grafů a odpočtů další zdroj úzkosti.

Kompromis, který funguje: **zapisujte jen datum začátku a sílu krvácení.** Nic víc. Bez predikcí, bez odpočtů, bez notifikací. Až budete chtít víc, přidáte si to.

> Text popisuje obvyklý průběh a nenahrazuje lékařskou péči. S načasováním dalšího těhotenství i s nepravidelnostmi cyklu se obracejte na svého lékaře.`,
      minutes: 6,
      phases: ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'loss_ectopic', 'uterine_revision', 'waiting_next_attempt'],
      dayRange: [14, 60],
      topics: ['ztrata', 'hormony', 'psychika', 'cekani'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-14',
      boost: 0.7,
    },
    {
      id: 'loss-telo-po-ztrate',
      kind: 'article',
      title: 'Co se děje v těle po ztrátě: hormony, prsa, únava',
      excerpt:
        'Nikdo vám neřekl, že vám můžou začít téct prsa nebo že budete tři týdny vyčerpaná — tady je vysvětlení.',
      body: `## Tělo se vrací dozadu, a to bolí

Po ztrátě těhotenství musí tělo poměrně rychle rozebrat všechno, co si měsíce nebo týdny stavělo. Hormony klesají, sliznice se obnovuje, oběh se přenastavuje. **Ten propad je fyziologicky podobný tomu po porodu — jen bez dítěte, které by ho vysvětlovalo.**

To je důvod, proč se ženy po ztrátě často cítí tak zvláštně: nejde jen o smutek. Jde o skutečnou biologickou bouři.

## Co můžete čekat

**Vyčerpání.** Ne únava — vyčerpání. Ženy popisují, že usnou v půl osmé večer a stejně se ráno probudí bez energie. Trvá to obvykle dny až několik týdnů. Přispívá k tomu hormonální propad, krevní ztráta, případná anestezie i to, že smutek sám o sobě stojí ohromné množství energie.

**Výkyvy nálad.** Prudké, nelogické, přicházející v návalech. Pláč v obchodě nad špatným druhem chleba. Vztek na partnera za dýchání. Tohle není známka toho, že se s vámi něco děje špatně.

**Bolest a citlivost prsou.** Pokud ke ztrátě došlo později, může dojít i k **nalití prsou a odtoku mléka**. Je to jedna z nejtvrdších věcí, které se dají zažít — tělo dělá to, k čemu se připravovalo. Pomáhá pevná podprsenka, chladné obklady a **vyhnout se odstříkávání**, které tvorbu mléka podporuje. Pokud je to výrazné nebo bolestivé, poraďte se s lékařem — existují postupy, jak to zvládnout, včetně léků, o kterých rozhoduje lékař.

**Zažívání.** Zácpa po anestezii a po lécích proti bolesti je běžná. Pomáhá pitný režim, pohyb a strava s vlákninou.

**Pocení, návaly, bolesti hlavy.** Hormonální doprovod, který obvykle odezní během dvou až tří týdnů.

**Změny na váze.** Tělo zadržuje vodu, chuť k jídlu bývá rozhozená oběma směry. Není teď čas na diety.

## Co s tím prakticky

- **Jezte pravidelně, i bez chuti.** Nízká hladina cukru výkyvy nálad zhoršuje.
- **Pijte.** Dehydratace zhoršuje bolesti hlavy i únavu.
- **Spěte, kdy to jde.** Odpolední spánek není lenost.
- **Choďte ven.** Krátká procházka nemá nahradit terapii, ale funguje lépe než většina rad.
- **Nezvedejte těžké** a vraťte se ke sportu postupně, podle pokynů lékaře.
- **Nechte si zkontrolovat krevní obraz**, pokud jste hodně krvácela a únava nepolevuje.

## Štítná žláza a další věci, které se hlídají

Po ztrátě je vhodné probrat s lékařem, jestli má smysl zkontrolovat **funkci štítné žlázy** nebo jiné parametry — zvlášť když jste se s nimi léčila už dřív. Neznamená to, že je něco špatně; znamená to, že těhotenství a jeho ukončení jsou pro tělo výrazná zátěž.

**Nezačínejte na vlastní pěst žádné doplňky ani „detoxy".** Kyselinu listovou a další suplementaci konzultujte s lékařem, zvlášť pokud jste dostala metotrexát — tam platí specifická omezení.

## Kdy volat lékaře

- **horečka nad 38 °C**, zimnice, zapáchající výtok,
- **silné krvácení** nebo krvácení, které znovu zesílí,
- **prudká nebo narůstající bolest břicha**,
- **závrať, mdloby, bušení srdce, výrazná bledost** — mohou znamenat chudokrevnost po krevní ztrátě,
- **bolest, otok nebo zarudnutí lýtka**, náhlá dušnost nebo bolest na hrudi,
- **nalitá, zarudlá, bolestivá prsa s horečkou**,
- únava, která se po několika týdnech vůbec nelepší.

## Jedna věta, kterou byste měla slyšet

Vaše tělo neselhalo. Prošlo těhotenstvím, jeho ukončením a hormonální bouří — a teď se dává dohromady. To, že je pomalé, není důkaz slabosti. Je to práce, kterou zrovna dělá.

> Text má obecně informativní charakter a nenahrazuje lékařskou péči ani individuální posouzení vaším lékařem.`,
      minutes: 7,
      phases: ['loss_missed', 'loss_miscarriage', 'uterine_revision', 'loss_ectopic'],
      dayRange: [1, 30],
      topics: ['ztrata', 'hormony', 'sebepece', 'psychika'],
      level: 'deep',
      hero: 'sand',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-21',
      boost: 0.6,
    },
    {
      id: 'loss-vysetreni-po-opakovanych-ztratach',
      kind: 'article',
      title: 'Jaká vyšetření mají smysl po opakovaných ztrátách',
      excerpt:
        'Mezi „počkáme, uvidíme" a testem za třicet tisíc je celkem jasně vyšlapaná cesta — jen o ní nikdo nemluví nahlas.',
      body: `## Kdy se vůbec začíná pátrat

Jedna ztráta je bohužel poměrně častá událost a ve většině případů souvisí s náhodnou chromozomální odchylkou embrya. Proto se po jedné ztrátě obvykle rozsáhle nevyšetřuje — ne z lhostejnosti, ale proto, že by to nepřineslo užitečnou informaci.

**Systematické vyšetřování se obvykle zvažuje po opakovaných ztrátách**, a dřív tehdy, když je pro to konkrétní důvod: vyšší věk, známá diagnóza, ztráta v pozdějším týdnu, nález na ultrazvuku nebo opakovaně neúspěšné transfery.

Hranici i rozsah určuje váš lékař. Když vám připadá, že se čeká zbytečně dlouho, **je legitimní si o vyšetření říct** nebo si vyžádat druhý názor.

## Co se obvykle probírá

Následující přehled slouží k tomu, abyste rozuměla tomu, o čem se mluví — **není to seznam k objednání.** O tom, co má ve vašem případě smysl, rozhoduje lékař.

**Genetika**

- **Vyšetření tkáně z ukončeného těhotenství** — hledá se chromozomální odchylka. Když se najde, často to vysvětlí, proč ke ztrátě došlo, a paradoxně to bývá uklidňující nález.
- **Karyotyp obou partnerů** — hledají se přestavby chromozomů, které mohou opakované ztráty vysvětlit. Vyšetření se týká obou, ne jen ženy.

**Děloha**

- **Ultrazvuk, u nás nejčastěji 3D**, hysteroskopie nebo jiné zobrazení dutiny — hledají se přepážky, myomy, polypy a srůsty, zejména po předchozí revizi.

**Krevní srážlivost a imunologie**

- **Antifosfolipidové protilátky** — patří mezi ověřené příčiny opakovaných ztrát a jejich vyšetření má jasné místo.
- **Trombofilní mutace** a rozsáhlé imunologické panely jsou v odborné diskusi kontroverznější. Část z nich se rutinně nedoporučuje. Ptejte se: „Co uděláme jinak, když vyjde pozitivní?" Pokud odpověď není konkrétní, je to důvod se ptát dál.

**Hormony a další**

- **Funkce štítné žlázy** a protilátky.
- **Cukr, prolaktin** a další parametry podle vaší anamnézy.

**Muž**

- **Spermiogram**, případně doplňující vyšetření kvality DNA spermií. Není to standard pro každý pár, ale u opakovaných ztrát to patří do diskuse.

## Co je dobré vědět předem

**Ne všechno se najde.** I po kompletním vyšetření zůstává část opakovaných ztrát bez vysvětlení. To je nejtěžší možný výsledek — a přesto neznamená, že další těhotenství není možné.

**Pozitivní nález není vždy příčina.** Některé odchylky se najdou i u žen, které rodí bez potíží. Proto se ptáme, co z nálezu prakticky plyne.

**Pozor na komerční panely.** Kolem opakovaných ztrát existuje trh s drahými testy a léčbami, jejichž přínos není doložený. Než něco zaplatíte, zeptejte se svého lékaře, jestli by to sám doporučil.

## Jak si připravit konzultaci

1. Napište si **chronologii**: každé těhotenství, týden ztráty, jak byla ukončena, výsledky vyšetření.
2. Přineste **zprávy a laboratorní výsledky**, které máte, ideálně zkopírované.
3. Napište si **tři otázky**, které chcete zodpovědět, než odejdete.
4. Vezměte s sebou **partnera nebo blízkou osobu** — čtyři uši slyší víc.
5. Zeptejte se: **Co konkrétně uděláme jinak při příštím pokusu?**

## Když se cítíte odbytá

To se stává a nejste za to nevděčná. Můžete říct nahlas: „Rozumím, že jedna ztráta bývá náhodná. Prošly jsme jich víc a potřebuju vědět, co je pro nás další krok." A když se nic nezmění, druhý názor na jiném pracovišti je vaše právo — **nemusíte se za to omlouvat a nemusíte to nikomu vysvětlovat.**

> Text má obecně informativní charakter, nenahrazuje lékařskou péči a nepředstavuje doporučení konkrétních vyšetření. Rozsah vyšetření určuje váš ošetřující lékař.`,
      minutes: 9,
      phases: ['repeated_failure', 'loss_miscarriage', 'loss_missed', 'waiting_next_attempt'],
      dayRange: [21, 90],
      topics: ['ztrata', 'genetika', 'vysledky', 'klinika'],
      modifiers: ['repeated_failure', 'after_loss'],
      level: 'deep',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-11-04',
      boost: 0.8,
    },
    {
      id: 'loss-opakovane-selhani',
      kind: 'article',
      title: 'Když to nevyšlo poněkolikáté: co se dá změnit',
      excerpt:
        'Opakovaný neúspěch není důkaz, že to nikdy nepůjde — je to signál, že je čas přestat opakovat totéž.',
      body: `## Nejdřív k tomu, co to s vámi dělá

Po prvním neúspěchu člověk truchlí. Po třetím začne pochybovat o sobě. Ženy s opakovanými neúspěchy popisují velmi specifický stav: **přestanou si dovolit doufat, a zároveň nedokážou přestat.** K tomu se přidá vyčerpání z léčby, vyčerpané finance a pocit, že si vlastní život nechávají uniknout mezi prsty v čekárnách.

Tohle není slabost a není to ani „negativní myšlení, které to kazí". Je to logický důsledek dlouhodobé zátěže.

## Co se obvykle přehodnocuje

Když se nedaří opakovaně, přichází chvíle pro **systematické zhodnocení**, ne pro další stejný cyklus. Následující přehled má sloužit k tomu, abyste rozuměla, o čem se s lékařem bavíte — o tom, co má ve vašem případě smysl, rozhoduje on.

**Embryo**

- Kvalita a stadium embryí, průběh kultivace.
- Zda přichází v úvahu **genetické vyšetření embryí (PGT)** — není vhodné pro každého, má svá pro i proti a je potřeba probrat, co konkrétně by to změnilo.
- Zda by dávalo smysl změnit protokol stimulace nebo způsob oplodnění.

**Děloha a sliznice**

- Zobrazení dutiny děložní, případně **hysteroskopie** — hledají se přepážky, polypy, myomy, srůsty, zánětlivé změny sliznice.
- Příprava endometria u kryoembryotransferu a její načasování.

**Celkový stav**

- Funkce **štítné žlázy**, metabolické parametry.
- Ověřené faktory srážlivosti a imunity — s otázkou, co konkrétně by se při pozitivním nálezu změnilo.
- Kouření, hmotnost, spánek, dlouhodobý stres. Nejsou to viníci, ale jsou to faktory, se kterými se dá pracovat.

**Muž**

- Aktuální spermiogram, případně další vyšetření. U opakovaného neúspěchu se to nevynechává.

## Otázky pro velkou konzultaci

Objednejte si na tohle samostatný termín, ne pět minut po odběru. Vezměte partnera. A vezměte si napsané:

1. Co konkrétně bychom příště udělali **jinak**, a proč zrovna to?
2. Jsou vyšetření, která byste teď doplnili?
3. Jak se v našem případě díváte na PGT nebo na hysteroskopii?
4. Kolik dalších pokusů má podle vás smysl zkusit stejnou cestou?
5. Kdy by přišla na řadu úvaha o **darovaných gametách nebo embryu**?
6. Jaká jsou naše čísla — ne obecná, ale odhad pro nás?

K poslednímu bodu: úspěšnost se liší podle věku, diagnózy a historie léčby a **žádné číslo z internetu není vaše číslo.** Vaše klinika vám může říct, jak vidí vaši konkrétní situaci. Máte na tu odpověď nárok, i když je nepříjemná.

## Druhý názor

Není to zrada vaší kliniky. Je to standardní postup ve chvíli, kdy se opakovaně nedaří. Většina zkušených lékařů to bere jako normální součást péče.

Vezměte si s sebou **kompletní dokumentaci** — protokoly stimulace, embryologické zprávy, výsledky vyšetření. Bez nich je druhý názor jen dojem.

## Co si dovolit

**Pauzu.** Cyklus za cyklem bez přestávky není důkaz odhodlání. Je to cesta k vyhoření. Pauza tři měsíce nesníží vaše šance tak, jak se bojíte, a může vrátit kus života.

**Hranici.** Je v pořádku si předem říct, kolik pokusů, kolik peněz, kolik času. Hranice se dá kdykoli posunout — ale mít ji je něco jiného než plout donekonečna.

**Truchlit i za pokusy.** Neúspěšný transfer je ztráta, i když nikdy nebyl pozitivní test. Nikdo vám nemusí dávat povolení ji tak nazvat.

**Odbornou pomoc.** Psychologická podpora u opakovaného neúspěchu není luxus. Řada center ji nabízí přímo — zeptejte se.

> Text má obecně informativní charakter a nenahrazuje lékařskou péči. O dalším postupu rozhoduje váš ošetřující lékař podle vaší konkrétní situace.`,
      minutes: 9,
      phases: ['repeated_failure', 'waiting_next_attempt'],
      dayRange: [7, 90],
      topics: ['ztrata', 'psychika', 'klinika', 'finance', 'genetika'],
      modifiers: ['repeated_failure'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-11-12',
      boost: 0.85,
    },
    {
      id: 'loss-kdy-zkouset-znovu',
      kind: 'article',
      title: 'Kdy zkoušet znovu: tělo je připravené dřív než hlava',
      excerpt:
        'Otázka, na kterou má každý názor — a jediné dvě odpovědi, které se počítají, jsou od vašeho lékaře a od vás.',
      body: `## Dvě různé otázky

„Kdy můžeme zkoušet?" jsou ve skutečnosti otázky dvě a mají různé odpovědi.

**Kdy je to bezpečné z pohledu těla?** Na tohle odpoví váš lékař. Odpověď závisí na typu ztráty, na tom, jak byla ukončena, na hodnotách hCG, na tom, jestli jste dostala metotrexát, a na tom, jestli proběhl výkon.

**Kdy jste na to připravená vy?** Na tohle vám neodpoví nikdo. A přesto je to ta důležitější otázka.

## Co obvykle ovlivňuje načasování z medicínského hlediska

- **Pokles hCG pod měřitelnou mez** — u většiny postupů se čeká na tohle.
- **Návrat menstruace.** Řada pracovišť doporučuje počkat alespoň na jeden cyklus, hlavně kvůli lepšímu datování dalšího těhotenství.
- **Po revizi** se obvykle nechává čas na obnovu sliznice.
- **Po metotrexátu** platí specifický odstup, který určuje lékař — tady se opravdu nedá improvizovat.
- **Výsledky doplňujících vyšetření**, pokud nějaká probíhají.

Dřívější představa, že je nutné čekat mnoho měsíců, se v odborných doporučeních posunula. **Konkrétní lhůtu ale nikdy nepřebírejte z článku — ptejte se svého lékaře.**

## Co ovlivňuje připravenost hlavy

Zkuste si projít tyhle otázky. Nejde o test, jde o zrcadlo.

- Dokážu si představit další pozitivní test, aniž by mě to okamžitě zaplavilo hrůzou?
- Mám kolem sebe někoho, kdo o tom ví a kdo mě podrží?
- Rozhoduju se proto, že chci, nebo proto, že nesnesu prázdno po ztrátě?
- Vydržím dalších čtrnáct dní čekání, když vím, jak vypadá špatný konec?
- Mám na to teď energii i peníze, nebo se dostávám na dno obojího?

**Neexistuje správná sada odpovědí.** Řadě žen pomáhá vrátit se rychle, protože čekání je ubíjí. Jiné potřebují měsíce, aby si vůbec vzpomněly, jak vypadá běžný den. Obě skupiny mají pravdu.

## Co říct okolí

Připravte si jednu větu, kterou budete opakovat, a nemusíte ji obhajovat:

> „Máme plán a probíráme ho s lékařem. Až budeme mít novinky, řekneme si."

Nikomu nedlužíte harmonogram. Ani rodičům, ani kamarádce, ani kolegyni v kuchyňce.

## Když se rozhodnete zkoušet a přitom se bojíte

To je nejběžnější kombinace ze všech. Strach nezmizí tím, že počkáte déle — u většiny žen se vrací až s dalším pozitivním testem, ať přijde kdykoli.

Praktické věci, které pomáhají:

- **Dohodněte si předem časnější ultrazvuk** a jasný plán kontrol. Vědět, kdy uvidíte další informaci, snižuje úzkost víc než cokoli jiného.
- **Řekněte na klinice, že jste po ztrátě.** Mělo by to být v dokumentaci a mělo by to změnit způsob, jakým s vámi mluví.
- **Domluvte se s partnerem, co budete a nebudete dělat**, když přijde pozitivní test — komu to řeknete, kdy, jestli si dovolíte plánovat.
- **Zvažte psychologickou podporu ještě před dalším pokusem**, ne až když se to zlomí.

## Když nechcete zkoušet hned — nebo vůbec

Pauza je legitimní rozhodnutí, ne rezignace. Stejně tak je legitimní zjistit, že už dál nechcete, nebo že chcete jinou cestu. Nikdo, kdo tím neprošel, nemá právo hodnotit, kolik pokusů „se sluší" absolvovat.

> Text má obecně informativní charakter a nenahrazuje lékařskou péči. O načasování dalšího těhotenství rozhoduje váš ošetřující lékař.`,
      minutes: 7,
      phases: ['waiting_next_attempt', 'loss_miscarriage', 'loss_missed', 'loss_biochemical', 'repeated_failure'],
      dayRange: [21, 90],
      topics: ['ztrata', 'psychika', 'cekani', 'klinika'],
      level: 'essential',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-11-20',
      boost: 0.8,
    },
    {
      id: 'loss-smutek-vlny',
      kind: 'article',
      title: 'Smutek chodí ve vlnách, ne v etapách',
      excerpt:
        'Za tři týdny se budete cítit dobře a za čtyři budete brečet v autě u benzínky — a ani jedno není krok zpátky.',
      body: `## Zapomeňte na fáze smutku

Pravděpodobně jste někde četla o pěti fázích truchlení, které jdou pěkně za sebou a končí přijetím. V reálném životě to takhle nefunguje skoro nikomu.

Smutek po ztrátě těhotenství chodí **ve vlnách**. Přijde, zaplaví vás, ustoupí. Za pár dní přijde další. Zpočátku jsou vlny vysoké a chodí často. Postupně se mezery prodlužují — ale vlny nezmizí úplně, jen přestanou být tím, co určuje váš den.

**Dobrý den není důkaz, že jste přes to.** Špatný den o dva týdny později není důkaz, že jdete zpátky.

## Co vlnu obvykle spustí

- **Termín porodu**, který jste si spočítala hned první den.
- Těhotenství v okolí, oznámení na sociálních sítích, kolegyně s bříškem.
- **Reklama** na plenky nebo aplikace, kterou jste si zapomněla odinstalovat.
- Vůně nemocnice, cesta kolem kliniky, konkrétní čekárna.
- Věty typu „a kdy vy?" od člověka, který nic neví.
- **Vaše vlastní menstruace.**
- Naprosto nic. Někdy prostě přijde vlna bez důvodu.

Vyplatí se spouštěče pojmenovat. Ne proto, abyste se jim vyhýbala navždy, ale proto, že očekávaná vlna se nese lépe než ta, která vás srazí z ničeho nic.

## Co u vlny pomáhá

**Nechte ji projít.** Vlna, které se bráníte, trvá déle. Deset minut pláče v autě je efektivnější než tři hodiny zatínání zubů.

**Dýchejte pomalu, hlavně výdech.** Prodloužený výdech skutečně tlumí fyzickou reakci těla — není to esoterika, je to fyziologie.

**Pojmenujte to nahlas.** „Teď mám vlnu. Přejde." Věta, která zní hloupě, ale funguje.

**Dejte tělu jednoduchý úkol.** Studená voda na zápěstí, procházka kolem bloku, umytí nádobí. Cokoli, co vrátí pozornost do těla.

**Mějte jednu osobu**, které můžete napsat „dnes je to zlé" a nemusíte nic vysvětlovat.

## Co smutek zhoršuje

- **Hledání viny.** Hodiny přehrávání toho, co jste snědla, zvedla nebo si myslela. Naprostá většina ztrát vzniká z příčin, které jste nemohla ovlivnit.
- **Srovnávání.** „Jiné to mají horší" nikoho nikdy neuzdravilo. Vaše ztráta se neměří proti cizí.
- **Předstírání.** Fungovat na plný výkon a večer se hroutit je nejrychlejší cesta k vyčerpání.
- **Sociální sítě.** Nemusíte je vydržet. Ztlumit účty na tři měsíce není zbabělost.

## Když ztrátu prožíváte jinak, než se čeká

Někdo pláče denně. Někdo necítí skoro nic a děsí se, že je špatný člověk. Někdo je hlavně naštvaný. Někdo se vrhne do práce. **Necítit nic je taky forma truchlení** — tělo si někdy dá odklad, dokud nemá kapacitu.

Nic z toho neznamená, že jste to dítě chtěla míň.

## Kdy je čas říct si o pomoc

Vyhledejte odbornou pomoc, když:

- se stav po **šesti až osmi týdnech vůbec nezlepšuje** nebo se zhoršuje,
- **nezvládáte základní fungování** — nejdete do práce, nejíte, nevstáváte,
- **nespíte** déle než dva týdny nebo vás budí opakované obrazy z nemocnice,
- máte úzkostné záchvaty, bušení srdce, pocity dušení,
- začnete používat alkohol nebo léky, abyste to unesla,
- máte **myšlenky na sebepoškození nebo na to, že nechcete žít** — v takovém případě vyhledejte pomoc okamžitě, přes svého lékaře, krizovou linku nebo nejbližší psychiatrickou pohotovost.

## A ještě jedna věc

Cíl není „přestat být smutná". Cíl je, aby smutek přestal být jediné, co v místnosti je. To se opravdu stane — jen si to zatím nedokážete představit, a to je taky v pořádku.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou ani lékařskou péči.`,
      minutes: 7,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'repeated_failure', 'waiting_next_attempt'],
      dayRange: [3, 90],
      topics: ['ztrata', 'psychika', 'sebepece'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-10-03',
      boost: 0.9,
    },
    {
      id: 'loss-audio-prvni-noci',
      kind: 'audio',
      title: 'Nahrávka na první noci: když nejde spát',
      excerpt:
        'Dvanáct minut hlasu, který po vás nic nechce — na noc, kdy je ticho nesnesitelné.',
      body: `## O čem tahle nahrávka je

Nemá vás uklidnit. Nemá vás naučit dýchat správně. Nemá z toho udělat lekci.

Je určená na hodinu, kdy jsou všichni ostatní vzhůru už dávno spící, vy ležíte a hlava pořád dokola přehrává tentýž den. Řada žen popisuje první noci po ztrátě jako nejhorší část celé zkušenosti — přes den se dá utéct do činnosti, v noci není kam.

## Jak nahrávka probíhá

**Prvních devadesát vteřin** je jen krátká věta o tom, kde jste a co se stalo. Bez příkras. Zkušenost ukazuje, že pojmenování je paradoxně první krok k tomu, aby tělo povolilo.

**Pak přijde práce s dechem** — pomalý nádech nosem a delší výdech ústy, ve vlastním tempu, bez počítání. Prodloužený výdech tlumí aktivaci nervového systému. Není to trik, je to fyziologie. Nemusíte nic dělat správně; když se ztratíte, prostě se vrátíte.

**Střední část** vede pozornost tělem shora dolů. Čelist, ramena, ruce, břicho, nohy. U břicha se hlas na chvíli zastaví a dá prostor. Většina žen tady pláče. Je to počítáno.

**Poslední část** je krátká pasáž o tom, že dnešní noc nemusíte nic řešit. Že rozhodnutí, otázky a plány mají čas do rána. Že vaším jediným úkolem do rána je dýchat.

Nahrávka končí tichem, ne slovem. Nikdo vás nebude na konci probouzet.

## Praktické

- **Sluchátka nejsou nutná**, ale pomáhají, když spíte vedle někoho.
- **Můžete usnout kdykoli.** To není přerušení, to je cíl.
- **Můžete ji pustit i vícekrát za noc.** Neopotřebuje se.
- Pokud vás vede pozornost k tělu spíš do úzkosti než z ní — což se po zákroku stává — poslouchejte jen první část a zbytek přeskočte.

## Kdy tohle nestačí

Nahrávka je opora, ne léčba. Když nespíte déle než dva týdny, budí vás opakované obrazy z nemocnice, máte záchvaty úzkosti nebo myšlenky na to, že nechcete žít, **potřebujete odbornou pomoc** — přes svého lékaře, krizovou linku nebo psychiatrickou pohotovost. Ozvěte se hned, ne až to bude horší.

> Nahrávka nenahrazuje odbornou psychologickou ani lékařskou péči.`,
      minutes: 12,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision'],
      dayRange: [0, 14],
      topics: ['ztrata', 'psychika', 'spanek', 'sebepece'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-09-29',
      boost: 0.8,
      mediaNote:
        'Dvanáctiminutová audionahrávka, ženský hlas, velmi pomalé tempo, bez hudby v první části a s tichým podkladem ve druhé. Struktura: pojmenování situace (1,5 min), práce s dechem s důrazem na delší výdech (4 min), postupné uvolnění pozornosti tělem shora dolů s pauzou u břicha (5 min), závěrečná pasáž o tom, že dnes v noci není potřeba nic řešit (1,5 min). Končí tichem, nikoli výzvou k probuzení.',
    },
    {
      id: 'loss-vyroci-a-termin',
      kind: 'article',
      title: 'Termín porodu, výročí a data, která vám zůstanou v těle',
      excerpt:
        'Kalendář si pamatuje i to, co jste chtěla zapomenout — tady je, jak ta data přežít.',
      body: `## Data, která si tělo pamatuje samo

Ženy po ztrátě popisují stejnou zkušenost: v určitý den je jim nevysvětlitelně zle, a teprve pak si uvědomí, jaké je datum. **Tělo si pamatuje výročí, i když si na ně hlava nevzpomene.**

Nejčastěji jde o:

- **spočítaný termín porodu** — často to nejtěžší datum ze všech,
- **den, kdy jste se to dozvěděla**,
- **den, kdy těhotenství skončilo** nebo kdy byl výkon,
- **den pozitivního testu**,
- výročí toho všeho o rok později,
- Vánoce, Den matek, narozeniny — svátky postavené kolem rodiny.

## Termín porodu

Skoro každá žena si termín spočítá během prvních hodin po pozitivním testu. A skoro každá pak ten den prožije jako druhou ztrátu — protože to je den, kdy mělo dítě přijít.

Co pomáhá:

- **Vědět o něm předem.** Poznamenejte si ho a dejte si na ten týden méně povinností.
- **Neplánovat na ten den nic velkého** — ani v práci, ani společensky.
- **Mít u sebe někoho, kdo ví**, i kdyby jen na telefonu.
- **Udělat něco konkrétního**, pokud vám rituál dává smysl: zapálit svíčku, jít na místo, které máte ráda, zasadit něco, napsat dopis. Nemusíte to nikomu ukazovat.
- **Nedělat nic**, pokud vám rituály nesedí. To je stejně platná volba.

## Jak zvládat výročí obecně

**Pojmenujte to dopředu.** „Příští čtvrtek to bude rok." Věta řečená nahlas partnerovi nebo kamarádce zabrání tomu, aby vás den přejel bez varování.

**Snižte laťku.** Na výročí nemusíte nic zvládnout. Jídlo z krabice, práce z domova, brzy spát.

**Připravte si únikový plán**, pokud musíte být mezi lidmi. Předem domluvená věta, kterou odejdete, funguje líp než improvizace.

**Řekněte si o to, co chcete.** Někteří lidé mlčí, protože se bojí, že vám připomenou bolest. Nepřipomenou — vy na to myslíte tak jako tak. Můžete říct: „Zítra je ten den. Nepotřebuju o tom mluvit, jen bych ráda, kdybys mi napsal."

## Když si chcete něco nechat

Řadě žen pomáhá mít **hmatatelnou stopu** — datum zapsané v deníku, malý předmět, kamínek, šperk, jméno. Není v tom nic morbidního. Je to způsob, jak dát ztrátě místo, které nebude uprostřed každého dne.

Stejně tak je v pořádku nechtít nic. Někdo potřebuje uklidit všechny připomínky a to je taky legitimní.

## Když je výročí smíšené

Zvlášť složité to bývá, když mezitím přijde další těhotenství nebo dítě. Radost a smutek se nevylučují a nemusí se střídat. **Můžete být šťastná a zároveň truchlit** — a to, že myslíte na ztracené těhotenství, nijak neubírá dítěti, které máte.

## Co říct těm, kdo to nechápou

Věta, která obvykle stačí:

> „Nečekám, že to pochopíš. Stačí mi, že ten den víš."

Nikomu nemusíte obhajovat, jak dlouho a jak silně truchlíte. Neexistuje lhůta, po které by ztráta přestala platit.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou péči. Pokud vás výročí opakovaně vyřazují z fungování, je to dobrý důvod vyhledat podporu.`,
      minutes: 6,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'waiting_next_attempt', 'repeated_failure'],
      dayRange: [30, 90],
      topics: ['ztrata', 'psychika', 'sebepece', 'komunita'],
      level: 'comfort',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-12-02',
      boost: 0.6,
    },
    {
      id: 'loss-jak-to-rict-rodine',
      kind: 'article',
      title: 'Jak to říct rodině a komu to vlastně říkat nemusíte',
      excerpt:
        'Nejtěžší na oznamování ztráty je, že přitom musíte utěšovat lidi, kteří měli utěšovat vás.',
      body: `## Nejdřív: nemusíte

Neexistuje povinnost oznámit ztrátu komukoli. Ani rodičům, ani sourozencům, ani nejlepší kamarádce. **Informace o vašem těhotenství je vaše.**

Zároveň platí, že tajit to před všemi je dřina. Většina žen nakonec skončí u malého okruhu — jednoho, dvou, tří lidí, kteří vědí všechno, a zbytku, který neví nic.

## Komu to má smysl říct

Zvažte tři skupiny:

**1. Ti, kdo o těhotenství věděli.** Těm to řeknete, jinak se budou ptát. Stačí věta.

**2. Ti, od koho něco potřebujete.** Zaměstnavatel kvůli neschopence, blízká kamarádka kvůli podpoře, sourozenec kvůli praktické pomoci.

**3. Ti, kdo by se to jinak dozvěděli oklikou.** Nepříjemné je hlavně to, když se to k někomu donese přes třetího člověka.

Všichni ostatní nemusí vědět nic.

## Jak to říct

**Použijte krátkou, hotovou větu.** Delší verze vás vyčerpá a stejně nikomu nepomůže.

> „Byla jsem těhotná a o těhotenství jsem přišla. Je mi zle a zatím o tom nechci mluvit. Až budu chtít, řeknu si."

**Napište to, když nechcete mluvit.** Zpráva je naprosto legitimní forma. Máte tak čas formulaci promyslet a nemusíte reagovat na první reakci v přímém přenosu.

**Řekněte rovnou, co potřebujete.** Tohle je nejdůležitější věta celého článku. Lidé nevědí, co dělat, a proto dělají hlouposti. Pomozte jim:

- „Nepotřebuju rady, potřebuju, abys mi občas napsal."
- „Prosím, neptejte se na to při obědě. Sama se ozvu."
- „Pomohlo by mi, kdybys tenhle týden vyzvedla děti."
- „Nechci, abys to říkala babičce."

## Když to říkáte rodičům

Tohle je zvlášť těžké, protože rodiče často truchlí nahlas — a vy pak sedíte a utěšujete matku, která pláče nad vnoučetem. Je legitimní to omezit předem:

> „Vím, že je to smutné i pro vás. Teď na to ale nemám sílu. Řeknu vám, co se stalo, a pak bych ráda mluvila o něčem jiném."

## Když máte doma starší dítě

Děti vycítí, že se něco děje, a bez vysvětlení si domyslí, že je to jejich vina. Obvykle stačí jednoduchá, pravdivá věta přiměřená věku: že jste nemocná nebo smutná, že to není kvůli nim a že se o vás starají dospělí. Pokud dítě o těhotenství vědělo, je lepší mu říct pravdu jednoduše, než mlčet. **Když si nejste jistá jak, poraďte se s dětským psychologem nebo s dětským lékařem** — tohle je přesně situace, na kterou mají odpovědi.

## Co se skoro jistě stane

Někdo řekne něco nešikovného. „Aspoň víš, že můžeš otěhotnět." „Bylo to tak asi nejlepší." „Ještě jste mladí." „Musíš se uvolnit."

Tyhle věty většinou nevznikají ze zlé vůle, ale z bezradnosti. To ale neznamená, že je musíte snést s úsměvem. Můžete říct: **„Vím, že to myslíš dobře, ale tohle mi nepomáhá."** A pak změnit téma nebo odejít.

## Zaměstnavateli nemusíte říct nic

Pracovní neschopnost nevyžaduje sdělení diagnózy. Stačí doklad od lékaře. Nadřízenému stačí věta o zdravotních důvodech.

## A na závěr

Nejste dlužná nikomu vysvětlení, načasování ani statečnost. Kdo se urazí, že se to dozvěděl pozdě, řeší v tu chvíli sebe, ne vás.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou péči.`,
      minutes: 7,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'repeated_failure'],
      dayRange: [1, 30],
      topics: ['ztrata', 'psychika', 'vztah', 'komunita'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-10-10',
      boost: 0.75,
    },
    {
      id: 'loss-netaktni-otazky',
      kind: 'checklist',
      title: 'Věty do zálohy: co odpovědět na netaktní otázky',
      excerpt:
        'Připravená věta vás v obchodě zachrání líp než jakákoli vnitřní síla — tady je zásoba na všechny situace.',
      body: `## Proč mít věty připravené

Protože otázka nikdy nepřijde ve vhodnou chvíli. Přijde u kávovaru, v tramvaji, na rodinném obědě mezi polévkou a hlavním chodem. A vy v tu vteřinu nemáte kapacitu vymýšlet, jak z toho ven.

**Naučená věta funguje jinak než improvizace.** Vyjde z pusy sama, dřív než se stihnete zaseknout, a vy pak nestrávíte zbytek dne přehráváním, co jste měla říct.

## Jak s tímhle seznamem pracovat

Projděte si ho a vyberte si **tři až čtyři věty, které vám sedí do pusy**. Nemusí sedět všechny — člověk, který nikdy neřekl „to nechci řešit", to nezvládne říct ani teď. Vyberte si ty, které si dovedete představit skutečně vyslovit.

Pak je řekněte párkrát nahlas. Zní to hloupě a funguje to.

## Dvě zásady

**Nedlužíte nikomu vysvětlení.** Ani rodině, ani kolegům, ani lékaři v čekárně. Věta „to teď neřeším" je kompletní odpověď.

**Máte právo být nepříjemná.** Když se někdo ptá bezohledně, není vaše práce zachraňovat jeho pocity.

> Seznam nenahrazuje odbornou psychologickou podporu. Pokud vás kontakt s okolím dlouhodobě vyřazuje z fungování, je namístě si o pomoc říct.`,
      minutes: 5,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'repeated_failure', 'waiting_next_attempt'],
      dayRange: [7, 90],
      topics: ['ztrata', 'psychika', 'komunita', 'vztah'],
      level: 'comfort',
      hero: 'sand',
      author: 'Tým IVF by Gabi',
      publishedOn: '2025-11-25',
      boost: 0.65,
      checklist: [
        {
          id: 'loss-chk-vety-kdy-deti',
          text: '„A kdy vy dvě děti?" → „To je otázka, kterou teď neřeším."',
          hint: 'Krátká, zdvořilá, uzavírající. Nemusíte přidávat nic dalšího.',
          group: 'Otázky od cizích',
        },
        {
          id: 'loss-chk-vety-neodkladejte',
          text: '„Neodkládejte to, ono to pak nejde." → „Děkuju za starost. Máme to pod kontrolou."',
          hint: 'Věta, která rozhovor ukončí, aniž byste musela cokoli přiznat.',
          group: 'Otázky od cizích',
        },
        {
          id: 'loss-chk-vety-vypadate',
          text: '„Nejsi náhodou těhotná?" → „Ne. A radši bych, kdyby se mě na to nikdo neptal."',
          hint: 'Přímé, ale ne agresivní. Většina lidí to podruhé neudělá.',
          group: 'Otázky od cizích',
        },
        {
          id: 'loss-chk-vety-aspon',
          text: '„Aspoň víš, že můžeš otěhotnět." → „Já jsem nechtěla vědět. Já jsem chtěla to dítě."',
          hint: 'Pokud je to na vás moc, stačí: „Tohle mi nepomáhá."',
          group: 'Nešikovná útěcha',
        },
        {
          id: 'loss-chk-vety-nejlepsi',
          text: '„Bylo to tak asi nejlepší." → „Pro mě to nejlepší nebylo."',
          hint: 'Nemusíte nic vysvětlovat. Ticho po téhle větě je v pořádku.',
          group: 'Nešikovná útěcha',
        },
        {
          id: 'loss-chk-vety-uvolnit',
          text: '„Musíš se uvolnit, ono to pak přijde." → „Tohle bohužel takhle nefunguje."',
          hint: 'Klidný, věcný tón. Neobhajujte se, jen konstatujte.',
          group: 'Nešikovná útěcha',
        },
        {
          id: 'loss-chk-vety-dobre-mysli',
          text: 'Univerzální brzda: „Vím, že to myslíš dobře, ale tohle mi nepomáhá."',
          hint: 'Funguje skoro vždycky a nikoho nezraní. Naučte se ji jako první.',
          group: 'Nešikovná útěcha',
        },
        {
          id: 'loss-chk-vety-rodina-detail',
          text: 'Když se rodina ptá na detaily: „Řeknu vám, až budu chtít. Teď to nejde."',
          hint: 'Přidejte konkrétní prosbu: „Prosím, neptejte se na to sami."',
          group: 'Rodina a blízcí',
        },
        {
          id: 'loss-chk-vety-co-potrebuju',
          text: 'Když se ptají, jak pomoct: „Přines jídlo a nemluv o tom."',
          hint: 'Konkrétní zadání je pro druhou stranu úleva. Klidně buďte velmi konkrétní.',
          group: 'Rodina a blízcí',
        },
        {
          id: 'loss-chk-vety-partner-stit',
          text: 'Domluvená věta s partnerem: „Tohle za mě prosím převezmi."',
          hint: 'Domluvte se předem, kdo v jaké situaci odpovídá. Ušetří to spoustu sil.',
          group: 'Rodina a blízcí',
        },
        {
          id: 'loss-chk-vety-prace',
          text: 'V práci: „Byla jsem nemocná, teď už je to v pořádku."',
          hint: 'Diagnózu nemusíte sdělovat nikomu v zaměstnání. Ani nadřízenému.',
          group: 'Práce',
        },
        {
          id: 'loss-chk-vety-prace-ohledy',
          text: 'Kolegovi, který ví: „Ocenila bych, kdybys to dál neříkal."',
          hint: 'Řekněte to jednou, jasně a bez omluvy.',
          group: 'Práce',
        },
        {
          id: 'loss-chk-vety-oslava',
          text: 'Omluva z oslavy: „Bohužel to letos nedáme. Přejeme krásný den."',
          hint: 'Omluva nemusí obsahovat důvod. Opravdu nemusí.',
          group: 'Únik',
        },
        {
          id: 'loss-chk-vety-odchod',
          text: 'Předem domluvený signál s partnerem pro odchod z akce',
          hint: 'Jedno slovo nebo zpráva. Odcházíte bez vysvětlování ostatním.',
          group: 'Únik',
          optional: true,
        },
        {
          id: 'loss-chk-vety-babytalk',
          text: 'Když se u stolu rozjede téma miminek: „Jdu si na chvíli ven."',
          hint: 'Nemusíte odejít nadobro ani nic komentovat. Pět minut venku stačí.',
          group: 'Únik',
        },
      ],
    },
    {
      id: 'loss-partner-truchli-jinak',
      kind: 'article',
      title: 'Partner truchlí jinak — a to neznamená, že mu to je jedno',
      excerpt:
        'On se vrhl do práce, vy nemůžete vstát z postele, a oba máte pocit, že ten druhý to nechápe.',
      body: `## Dvě různá truchlení v jednom bytě

Po ztrátě se v páru skoro vždycky objeví stejný scénář. Jeden pláče, mluví, potřebuje to znovu a znovu probírat. Druhý mlčí, jde do práce, opraví plot, vrátí se a zeptá se, co bude k večeři.

A oba si o tom druhém myslí něco nespravedlivého: **„jí to nepřejde" a „jemu je to jedno".**

Obvykle neplatí ani jedno.

## Proč to tak vypadá

**Zkušenost byla jiná.** Vy jste to prožila v těle. Hormony, krvácení, bolest, ordinace, sál. Partner to prožil vedle vás — a přitom měl obvykle pocit, že nesmí přidat vlastní zoufalství k vašemu.

**Role „silného" je pastí.** Řada mužů se naučila, že jejich úkolem je situaci zvládnout a chránit. Takže zvládají. Tiše, sami, a často ve chvíli, kdy jsou z domu.

**Truchlení má různé podoby.** Někdo mluví, někdo dělá. Muži častěji popisují, že jim pomáhá činnost — práce, sport, oprava něčeho. Zvenčí to vypadá jako útěk. Zevnitř je to způsob, jak neexplodovat.

**Různá časová osa.** Často se stane, že jeden se začne zvedat ve chvíli, kdy druhý teprve klesá ke dnu. To bolí obzvlášť, protože se míjíte.

## Co pomáhá

**Přestaňte hádat.** Většina konfliktů po ztrátě vzniká z domýšlení. Zeptejte se přímo: „Jak to teď máš ty?" A pak nechte ticho, i když je dlouhé.

**Řekněte, co potřebujete, konkrétně.** Ne „potřebuju podporu", ale „potřebuju, abys mě dnes večer objal a nic neříkal". Muži velmi často popisují, že nejtěžší je, že nevědí, co mají dělat.

**Dohodněte si signál.** Slovo nebo zpráva, která znamená „dnes je to zlé". Bez vysvětlování a bez očekávání.

**Ohraničte, kdy se o tom mluví.** Zní to chladně, ale páry, které mají dohodu typu „mluvíme o tom po večeři, ne celý večer", to obvykle unesou lépe než ty, kde je téma neustále přítomné.

**Dopřejte si i něco jiného.** Film, procházka, hloupost. Není to zrada na ztrátě.

**Nepočítejte slzy.** To, že nepláče, není měřítko lásky k dítěti, které jste ztratili.

## Co dělá škodu

- **Soutěž o to, kdo trpí víc.** Nemá vítěze.
- **Výčitky typu „ty jsi to neprožíval".** Prožíval, jen jinak.
- **Mlčení jako ochrana.** Když partner tají svůj smutek, aby vás nezatěžoval, obvykle to vyjde najevo jako odtažitost.
- **Sex jako povinnost nebo jako zákaz.** Obojí ubližuje. Po ztrátě je změna intimity běžná a přechodná; mluvit o ní je nutné, i když je to trapné. O tom, kdy je pohlavní styk po ztrátě bezpečný, rozhoduje lékař.

## Pro partnera, kdyby si to četl

Čtyři věci, které fungují lépe než rady:

1. **Buď fyzicky přítomný.** Nemusíš nic říkat.
2. **Neopravuj to.** Nechce slyšet řešení, chce, abys u toho zůstal.
3. **Ptej se na konkrétní věci.** „Chceš, abych zavolal mámě?" je lepší než „řekni, co potřebuješ".
4. **Řekni i to svoje.** „Taky mi je zle" není zátěž. Je to úleva.

## Kdy vyhledat pomoc společně

- když spolu nemluvíte déle než pár týdnů,
- když se každý rozhovor mění v hádku,
- když jeden z vás chce zkoušet dál a druhý ne,
- když se jeden z vás uzavírá, pije nebo přestává fungovat.

Párová terapie po ztrátě není známka rozpadu vztahu. Je to nástroj, který dvěma lidem umožní truchlit vedle sebe místo proti sobě.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou péči.`,
      minutes: 7,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'repeated_failure', 'waiting_next_attempt'],
      dayRange: [3, 90],
      topics: ['ztrata', 'vztah', 'partner', 'psychika'],
      excludeModifiers: ['single_mother'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-10-28',
      boost: 0.7,
    },
    // SENTINEL_ITEMS
  ],
  dailyCards: [
    // SENTINEL_CARDS
  ],
  encouragements: [
    // SENTINEL_ENC
  ],
  glossary: [
    // SENTINEL_GLOS
  ],
}
