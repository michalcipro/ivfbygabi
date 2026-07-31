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
      author: 'Tým Bloomia',
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
      author: 'Tým Bloomia',
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
      author: 'Tým Bloomia',
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
    {
      id: 'loss-navrat-do-prace',
      kind: 'article',
      title: 'Návrat do práce, když se uvnitř nic nezměnilo',
      excerpt:
        'Nikdo v kanceláři neví, že jste minulý týden přišla o dítě — a vy máte do dvou hodin odevzdat prezentaci.',
      body: `## Kdy se vracet

Neexistuje správný počet dní. Existuje jen to, co unesete vy a co je bezpečné z hlediska vašeho zdravotního stavu.

Co stojí za zvážení:

- **Po výkonu v anestezii** potřebuje tělo dny, ne hodiny. Únava po celkové anestezii bývá výrazná ještě týden.
- **Při silném krvácení** je návrat k fyzicky náročné práci nevhodný. Řekněte to lékaři, on určí režim.
- **Práce, která vás vystaví dětem nebo těhotným ženám** — učitelka v mateřské škole, porodní asistentka, prodavačka v dětském oddělení — je zvlášť těžká. Není slabost si na ni vzít víc času.
- **Práce jako útěk** funguje krátkodobě a řadě žen skutečně pomáhá. Jen pozor, aby se nestala jediným způsobem, jak se vyhnout tomu, co se stalo.

**Pracovní neschopnost vypisuje lékař** a je to legitimní. Nemusíte ji obhajovat ani před sebou.

## Co zaměstnavateli sdělovat nemusíte

Prakticky nic. **Doklad o pracovní neschopnosti neobsahuje diagnózu** a nadřízený na ni nemá nárok. Stačí věta o zdravotních důvodech.

Pokud chcete něco říct, vyberte si sama komu a kolik. Užitečná bývá formulace, která nastavuje hranici zároveň s informací:

> „Prošla jsem zdravotní komplikací, jsem v pořádku a nechci o tom mluvit. Kdyby bylo potřeba, ozvu se sama."

## První den

Bude divný. Počítejte s tím.

- **Přijďte o něco později**, ať se vyhnete ranní vlně pozdravů a otázek.
- **Naplánujte si na první den jednoduchou práci.** Ne jednání, ne prezentaci, ne nic, co vyžaduje výkon.
- **Domluvte si spojence** — jednoho kolegu, který ví aspoň to, že vám není dobře, a který vás v případě potřeby kryje.
- **Mějte plán úniku.** Toaleta, schodiště, auto na parkovišti. Pět minut o samotě zvládne víc, než čekáte.
- **Nemějte ambici odejít až v pět.** Když to nepůjde, odejděte dřív.

## Na co se připravit

**Nesoustředíte se.** Smutek žere pracovní paměť. Budete číst tentýž odstavec potřetí. Není to důkaz, že jste na to krátká — je to normální projev zátěže a odezní.

**Přijde vlna z ničeho nic.** Kolegyně oznámí těhotenství, někdo pošle fotku miminka do firemního chatu, klientka přijde s kočárkem. Mějte připravenou větu k odchodu.

**Někdo se zeptá.** „Kde jsi byla?" Připravte si odpověď dopředu — „byla jsem nemocná, už je to dobré" stačí.

**Budete unavená jinak než dřív.** Osmihodinový den může první týden působit jako dvanáctihodinový. Naplánujte si večery prázdné.

## Úpravy, o které je legitimní si říct

- **Zkrácený úvazek nebo částečný návrat** na první týdny.
- **Práce z domova**, když je to možné.
- **Dočasné přesunutí úkolů**, které jsou pro vás zrovna neúnosné.
- **Volno na kontrolu** u lékaře — na to máte nárok.

Nemusíte při té žádosti odhalovat důvod. Stačí: „Potřebuju na následující tři týdny upravit režim ze zdravotních důvodů."

## Když to nejde

Když po několika týdnech zjistíte, že v práci nefungujete, nespíte kvůli ní, nebo se každé ráno budíte s úzkostí, **není to selhání a je to důvod znovu zajít k lékaři.** Prodloužení neschopnosti nebo doporučení k odborné pomoci je řešení, ne prohra.

## Jedna praktická věc

První den si do kalendáře dejte na konec dne třicetiminutový blok s názvem, kterému rozumíte jen vy. Nikdo se nezeptá, co v něm děláte, a vy budete mít jistotu, že aspoň půl hodiny na sebe budete mít.

> Text má obecně informativní charakter a nenahrazuje lékařskou ani odbornou psychologickou péči. O pracovní neschopnosti rozhoduje váš lékař.`,
      minutes: 7,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'waiting_next_attempt'],
      dayRange: [7, 45],
      topics: ['ztrata', 'psychika', 'sebepece', 'finance'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-11-08',
      boost: 0.65,
    },
    {
      id: 'loss-navrat-do-lecby-strach',
      kind: 'article',
      title: 'Zpátky do léčby: jak jít do dalšího pokusu se strachem',
      excerpt:
        'Poprvé jste šla s nadějí. Teď jdete s vědomím, jak to vypadá, když to nevyjde — a stejně jdete.',
      body: `## Něco se nevratně změnilo

Před ztrátou byl další pokus dobrodružství s otevřeným koncem. Teď víte, jak vypadá špatná varianta. Víte, jak zní ta věta v ordinaci, víte, jaké je krvácení, víte, co následuje.

**Tuhle nevinnost už zpátky nedostanete.** Není to vaše chyba a není to nic, co byste měla „překonat správným přístupem". Je to zkušenost, kterou od teď nesete s sebou.

Ženy, které jdou do dalšího pokusu po ztrátě, obvykle nepopisují nadšení. Popisují odhodlání smíchané s hrůzou. To je normální výchozí stav, ne varovné znamení.

## Co pomáhá před dalším pokusem

**Vědět, co bude jinak.** Zeptejte se přímo: „Co konkrétně měníme oproti minule a proč?" I malá změna v protokolu nebo v plánu sledování hodně mění vaše prožívání — dává tomu smysl místo opakování.

**Domluvit si plán sledování dopředu.** Kdy odběry, kdy první ultrazvuk, kdo vám bude volat výsledky. Nejistota z toho, kdy se co dozvíte, bývá horší než samotné čekání.

**Říct na klinice, že jste po ztrátě.** Mělo by to být v dokumentaci a mělo by to změnit tón, kterým s vámi mluví. Pokud to tak není, máte právo to říct nahlas.

**Vyřešit peníze a hranice předem**, v klidné hlavě. Kolik pokusů, kolik prostředků, do kdy. Ne proto, abyste se limitovala, ale abyste se v horším dni nerozhodovala z paniky.

**Mít podporu nastavenou, ne jen zamýšlenou.** Ideálně psychologa, se kterým jste už mluvila, ne telefonní číslo v šuplíku pro případ nouze.

## Co dělat se strachem, který nepřejde

Nepřejde. Ale dá se s ním zacházet.

- **Nepokoušejte se ho vypnout.** Věty typu „musíš věřit, že to vyjde" jsou další zátěž navíc. Nemusíte věřit. Stačí, že jdete.
- **Rozdělte to na kusy.** Ne „chci zdravé dítě za devět měsíců", ale „chci se dostat přes zítřejší odběr". Menší úsek se nese líp.
- **Určete si, co si dovolíte plánovat.** Některým ženám pomáhá nekupovat nic a neplánovat nic. Jiným naopak pomáhá dovolit si radost. Obojí je legitimní — jen o tom rozhodněte vědomě, ne z pověrčivosti.
- **Připravte si scénář pro obě varianty.** Zní to drsně, ale ženy, které mají promyšlené „co uděláme, když to nevyjde", popisují menší paniku, ne větší.

## Když přijde další pozitivní test

Počítejte s tím, že radost může být krátká a hned ji vystřídá úzkost. To neznamená, že se netěšíte. Znamená to, že vaše hlava chrání sama sebe.

Prakticky pomáhá:

- **časnější ultrazvuk** domluvený předem,
- jasně dané, **komu to řeknete a kdy** — a právo neříct to nikomu,
- dohoda s partnerem o tom, jak spolu budete o těhotenství mluvit,
- **profesionální podpora souběžně**, ne až kdyby se něco stalo.

Těhotenství po ztrátě je zvláštní kategorie a existují odborníci, kteří se přímo na tohle zaměřují. Zeptejte se na klinice, koho doporučují.

## Kdy je lepší počkat

- Když ještě probíhají vyšetření, jejichž výsledky by změnily postup.
- Když se cítíte na dně a jdete jen proto, že nesnesete čekání.
- Když nemáte nikoho, kdo by u toho s vámi byl.
- Když vám lékař řekl, že tělo ještě potřebuje čas.

**Pauza není promarněný čas.** U řady žen je to právě ona, která umožní další pokus unést.

## A poslední věta

To, že jdete znovu, není důkaz, že jste přes ztrátu přešla. Je to důkaz, že s ní umíte jít dál. To je něco úplně jiného a je to mnohem těžší.

> Text má obecně informativní charakter a nenahrazuje lékařskou péči. O načasování a podobě dalšího pokusu rozhoduje váš ošetřující lékař.`,
      minutes: 8,
      phases: ['waiting_next_attempt', 'repeated_failure'],
      dayRange: [30, 90],
      topics: ['ztrata', 'psychika', 'cekani', 'klinika'],
      modifiers: ['after_loss'],
      level: 'essential',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-12-09',
      boost: 0.8,
    },
    {
      id: 'loss-kdy-psycholog',
      kind: 'article',
      title: 'Kdy vyhledat psychologa a proč to není až pro nejhorší případ',
      excerpt:
        'Čekat, až to bude „dost zlé", je nejčastější chyba — a taky nejdražší.',
      body: `## Nemusíte být na dně

Nejrozšířenější mýtus zní, že odborná pomoc je pro lidi, kteří to nezvládají. Ve skutečnosti je nejúčinnější tam, kde ještě zbývá trochu síly — protože s ní se dá pracovat.

Ztráta těhotenství je uznávaná zátěžová událost. Vyhledat po ní podporu je stejně logické jako jít na rehabilitaci po zlomenině. **Nemusíte mít diagnózu, abyste na to měla nárok.**

## Konkrétní signály, že je čas

Nečekejte, když:

- **po šesti až osmi týdnech se stav nelepší** nebo se zhoršuje,
- **nespíte** déle než dva týdny, nebo se budíte s bušením srdce,
- **nefungujete** — nejdete do práce, nejíte, nevstáváte, přestala jste se stýkat s lidmi,
- máte **záchvaty úzkosti**, bušení srdce, pocity dušení, třes,
- vracejí se vám **obrazy z nemocnice** nebo se vyhýbáte místům a situacím, které je připomínají,
- **kontrolujete tělo nutkavě** — krvácení, testy, příznaky — a nedokážete přestat,
- používáte **alkohol nebo léky**, abyste to unesla,
- **vztah se rozpadá** nebo spolu nemluvíte,
- jdete do dalšího pokusu a **panika vás vyřazuje z fungování**.

**Okamžitě vyhledejte pomoc**, pokud máte myšlenky na to, že nechcete žít, nebo na sebepoškození. To je akutní situace — obraťte se na svého lékaře, krizovou linku nebo nejbližší psychiatrickou pohotovost, případně přes záchrannou službu.

## Co která profese dělá

Terminologie mate a bere energii, kterou teď nemáte. Zjednodušeně:

- **Klinický psycholog** — vyšetření, diagnostika, psychoterapie. Část výkonů bývá hrazena ze zdravotního pojištění, obvykle je potřeba doporučení a existují čekací doby.
- **Psychoterapeut** — vede terapii, nemusí být zdravotnickým zařízením; často se hradí přímo, bez doporučení a s kratším čekáním.
- **Psychiatr** — lékař, může předepsat léky. Vyhledává se u výraznější úzkosti, deprese nebo poruch spánku. **Užívání léků nevylučuje další pokus o těhotenství — ale o vhodnosti konkrétní léčby při plánování těhotenství rozhoduje lékař.**
- **Krizová linka** — okamžitá pomoc, anonymně, i v noci. Vhodná ve chvíli, kdy potřebujete mluvit hned.

## Jak vybírat

- Hledejte někoho se **zkušeností s reprodukční ztrátou nebo neplodností**. Rozdíl je obrovský — nebudete muset vysvětlovat, co je transfer.
- **První sezení je vzájemné ohledání.** Když vám člověk nesedne, je legitimní jít jinam. Není to selhání terapie.
- **Ptejte se na praktické věci** předem: cena, frekvence, online varianta, jak dlouhá je čekací doba.
- **Zeptejte se na své klinice.** Řada center spolupracuje s psychologem zaměřeným na tuhle oblast a umí doporučit.

## Když čekací doba je dlouhá

To se bohužel stává. Mezitím:

- **zapište se na víc míst současně**,
- **využijte krizovou linku** — není jen pro krajní situace,
- zvažte **podpůrnou skupinu** pro ženy po ztrátě, které vedou neziskové organizace zaměřené na perinatální ztrátu,
- **řekněte svému gynekologovi nebo praktickému lékaři**, jak na tom jste. Mají možnosti, o kterých nevíte.

## Co terapie neudělá

Nevrátí to. Nevymaže smutek. Nezaručí, že další pokus vyjde.

Co udělat může: **zmenšit to, co vás vyřazuje z života** — nespavost, úzkost, sebeobviňování, ochromující strach z dalšího pokusu. A dát smutku místo, ve kterém se s ním dá žít.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou ani lékařskou péči. Při akutních potížích vyhledejte pomoc neprodleně.`,
      minutes: 7,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'repeated_failure', 'waiting_next_attempt'],
      dayRange: [14, 90],
      topics: ['ztrata', 'psychika', 'sebepece'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-11-18',
      boost: 0.85,
    },
    {
      id: 'loss-odborna-pomoc-cr',
      kind: 'article',
      title: 'Kde v Česku hledat pomoc po ztrátě těhotenství',
      excerpt:
        'Přehled toho, jaké druhy podpory u nás existují a jak se k nim reálně dostat.',
      body: `## Proč tenhle přehled

Protože ve chvíli, kdy pomoc potřebujete, nemáte kapacitu procházet vyhledávač. Tenhle text popisuje **typy podpory, které v České republice existují**, a jak se k nim dostat. Konkrétní kontakty se mění, proto tu žádná čísla nenajdete — najdete tu ale, co přesně hledat a čeho se zeptat.

## 1. Vaše klinika a váš gynekolog

První a nejpodceňovanější zdroj. Zeptejte se přímo:

- **„Spolupracujete s psychologem?"** Řada center asistované reprodukce má psychologa přímo v týmu nebo doporučí konkrétní odborníky.
- **„Můžete mi napsat doporučení ke klinickému psychologovi?"** Otevírá to cestu k péči hrazené ze zdravotního pojištění.
- **„Kdo je u vás kontaktní osoba pro případ, že se stav zhorší?"**

Váš praktický lékař má stejné možnosti a bývá dostupnější.

## 2. Klinický psycholog v systému zdravotního pojištění

Část psychologické a psychoterapeutické péče je hrazena ze zdravotního pojištění, pokud jde o zdravotnické zařízení se smlouvou s vaší pojišťovnou. Obvykle je potřeba **doporučení od lékaře** a je potřeba počítat s **čekací dobou**, která bývá delší, než by člověk chtěl.

Praktický postup: seznam smluvních poskytovatelů najdete na webu své zdravotní pojišťovny. **Zapište se na víc míst současně** a řekněte při objednávání, že jde o ztrátu těhotenství — někde mají kratší cestu pro akutnější situace.

## 3. Psychoterapeuti mimo systém pojištění

Hradí se přímo, obvykle **nevyžadují doporučení** a čekací doby bývají kratší. Hledejte v seznamech odborných psychoterapeutických asociací, kde se dá filtrovat podle zaměření a regionu.

Co hledat v profilu: **reprodukční ztráta, perinatální ztráta, neplodnost, krizová intervence.** Rozdíl mezi terapeutem, který tuhle oblast zná, a tím, který ji nezná, je zásadní.

Mnoho terapeutů dnes nabízí **online sezení**, což řeší dojíždění i to, že se z domova mluví snáz.

## 4. Krizové linky

Fungují **nepřetržitě, anonymně a zdarma nebo za cenu běžného hovoru**. Existují celostátní linky psychické pomoci, linky s možností chatu i e-mailového poradenství.

Nejsou jen pro krajní situace. Jsou i pro noc, kdy potřebujete mluvit hned a nemůžete počkat tři týdny na termín. Aktuální seznam najdete na stránkách věnovaných duševnímu zdraví — vyhledávejte podle spojení „linka psychické pomoci".

## 5. Neziskové organizace a podpůrné skupiny

V Česku působí organizace zaměřené přímo na **perinatální ztrátu a podporu truchlících rodičů**. Nabízejí obvykle:

- **podpůrné skupiny** — setkání žen a párů s podobnou zkušeností,
- **poradenství** po telefonu, e-mailem nebo osobně,
- **informační materiály** pro rodiče i pro rodinu,
- pomoc s praktickými otázkami spojenými se ztrátou v pozdějším těhotenství.

Vyhledávejte podle spojení „perinatální ztráta", „podpora po ztrátě dítěte", „podpůrná skupina po potratu".

## 6. Komunity žen po IVF

Sdílená zkušenost dokáže věci, které odbornost nedokáže. Zároveň mají fóra svá rizika: srovnávání, dezinformace, cizí příběhy s horším koncem.

Doporučení, které se osvědčuje: **využívejte komunitu na sdílení, ne na medicínské informace.** Ty berte od lékaře.

## 7. Podpora pro partnera

Na tuhle část se často zapomíná. Partneři mají přístup ke stejným krizovým linkám i terapeutům. **Párová terapie** je legitimní volba a po ztrátě má velký smysl.

## Kdy nečekat

Pokud máte myšlenky na to, že nechcete žít, nebo na sebepoškození, **nevolejte na objednací linku a nečekejte na termín.** Obraťte se na krizovou linku, na psychiatrickou pohotovost nebo na záchrannou službu. Tohle je situace, kde se pomoc řeší hned.

> Text má obecně informativní charakter, popisuje typy dostupné podpory a nenahrazuje odbornou psychologickou ani lékařskou péči.`,
      minutes: 7,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'repeated_failure', 'waiting_next_attempt'],
      dayRange: [7, 90],
      topics: ['ztrata', 'psychika', 'komunita', 'sebepece'],
      level: 'essential',
      hero: 'sky',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – psychologická podpora',
      publishedOn: '2025-12-16',
      boost: 0.7,
    },
    {
      id: 'loss-pribeh-z-komunity',
      kind: 'story',
      title: 'Příběh z komunity: rok, kdy jsem se naučila říkat to nahlas',
      excerpt:
        'Anonymní vyprávění ženy z naší komunity o dvou ztrátách, o mlčení a o tom, co jí nakonec pomohlo.',
      body: `## „Řekli mi to v úterý v půl jedenácté"

*Následující text sdílela s naší komunitou žena, která si přeje zůstat v anonymitě. Publikujeme ho s jejím svolením a v její formulaci.*

Pamatuju si přesný čas, protože jsem se dívala na hodiny nad monitorem. Doktorka mlčela o vteřinu déle, než bylo potřeba, a já jsem v tom tichu pochopila všechno dřív, než to řekla.

Pak jsem odešla, sedla si do auta a zavolala do práce, že přijdu odpoledne. Dodneška nechápu, proč jsem to udělala. Asi proto, že jsem potřebovala něco normálního.

## Co jsem si vyčítala

Skoro rok jsem si přehrávala jeden konkrétní den. Nesla jsem tehdy nákup do třetího patra, protože nejel výtah. Byla jsem přesvědčená, že to bylo tím.

Ptala jsem se na to čtyř různých lékařů. Všichni řekli totéž. Trvalo mi měsíce, než jsem tomu uvěřila, a stejně mě to napadne, když jdu kolem toho domu.

Kdybych měla někomu poradit jednu jedinou věc: **ptejte se, dokud tomu neuvěříte.** Ne proto, že vám dají novou odpověď, ale protože ji potřebujete slyšet víckrát než jednou.

## Druhá ztráta byla jiná

Po první jsem truchlila. Po druhé jsem se hlavně bála. Přestala jsem si dovolit cokoli plánovat, přestala jsem chodit na oslavy, kde mohly být děti, a přestala jsem odpovídat na zprávy od kamarádky, která tehdy čekala druhé.

Nejhorší na tom bylo, jak jsem si připadala. Jako mizerný člověk, který nedokáže nikomu nic přát.

Až mi terapeutka řekla větu, kterou jsem potřebovala: **že závist v tomhle není o tom, že bych druhé nepřála. Že je to smutek, který si zrovna sedl vedle cizí radosti.** Od té doby se mi s tím žilo líp. Kamarádce jsem napsala po půl roce. Rozumnou reakcí bylo, že mi jen odepsala, že čekala.

## Co nefungovalo

- Fungovat jako by nic. Vydrželo mi to devatenáct dní, pak jsem se sesypala v práci.
- Číst diskuzní fóra po nocích. Nikdy jsem tam nenašla svůj případ, jen deset horších.
- Věty o tom, že to takhle mělo být. Ty mi vzaly víc, než mi kdo dal.
- Předstírat před mužem, že jsem v pohodě. On dělal totéž a půl roku jsme bydleli vedle sebe jako dva slušní spolubydlící.

## Co fungovalo

- **Říct to nahlas** třem lidem a nikomu jinému.
- **Terapeutka, která věděla, co je transfer.** Nemusela jsem nic vysvětlovat a to bylo víc než polovina úlevy.
- **Nechat si datum.** Mám ho v telefonu, jednou ročně si vezmu volno a nikomu to nevysvětluju.
- **Přestat plánovat dopředu než na týden.** Rok jsem si neplánovala nic, co bylo dál než sedm dní. Ulevilo se mi.
- **Konkrétní věty**, které jsem se naučila nazpaměť. „Tohle mi nepomáhá" mě zachránilo asi třicetkrát.

## Kde jsem teď

Nechci tenhle text zakončit tak, jak se to obvykle dělá. Nechci napsat, že se to vyplatilo, protože to zní, jako by ta cesta měla mít cenu.

Napíšu jinou věc. **Přestala jsem čekat, až mi to přestane být líto.** Zjistilo se, že se dá žít s tím, že mi to je líto — a že to není totéž jako být pořád nešťastná.

To je všechno, co vám můžu upřímně nabídnout. A že v tom nejste sama, i když teď máte pocit, že ano.

> Osobní zkušenost jedné ženy nenahrazuje lékařskou ani psychologickou péči a průběh se u každé liší. Pokud se poznáváte v tom, co popisuje, zvažte odbornou podporu.`,
      minutes: 6,
      phases: ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'repeated_failure', 'waiting_next_attempt'],
      dayRange: [7, 90],
      topics: ['ztrata', 'psychika', 'komunita', 'vztah'],
      modifiers: ['after_loss', 'repeated_failure'],
      level: 'comfort',
      hero: 'pearl',
      author: 'Tým Bloomia',
      publishedOn: '2026-01-13',
      boost: 0.6,
    },
    {
      id: 'loss-kviz-myty',
      kind: 'quiz',
      title: 'Šest vět, které uslyšíte po ztrátě — a co je na nich pravda',
      excerpt:
        'Krátký kvíz o mýtech, které vás obírají o klid, i když je vysloví lidé, co to myslí dobře.',
      body: `## K čemu tenhle kvíz je

Není to test vašich znalostí. Je to způsob, jak si projít věty, které po ztrátě uslyšíte skoro určitě — od rodiny, od kolegů, někdy i od zdravotníka, který spěchá.

Většina z nich zní logicky. Právě proto se drží tak dlouho a právě proto vás dokážou tak zaměstnat ve tři ráno.

**U každé otázky najdete vysvětlení**, které je delší než odpověď. To je záměr — vysvětlení je to podstatné. Odpověď samotná vám nepomůže ve tři ráno, ale věta, kterou si zapamatujete, možná ano.

## Proč zrovna tyhle věty

Mýty kolem ztráty těhotenství mají jednu společnou vlastnost: **skoro všechny přesouvají odpovědnost na ženu.** Za to, co zvedla, co snědla, co si myslela, jak dlouho čekala. Právě proto se drží tak houževnatě a právě proto stojí za to je jednou pořádně projít.

Až uslyšíte některou z nich příště, nebudete se muset zastavit a přemýšlet, jestli na tom náhodou něco není. Budete to vědět.

## Poznámka na úvod

Nic z toho nenahrazuje rozhovor s vaším lékařem. Když se ve vaší situaci objevuje konkrétní otázka, na kterou tu není odpověď, napište si ji a vezměte na kontrolu.

> Kvíz má obecně informativní charakter a nenahrazuje lékařskou péči.`,
      minutes: 5,
      phases: ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'waiting_next_attempt', 'repeated_failure'],
      dayRange: [7, 90],
      topics: ['ztrata', 'psychika', 'genetika'],
      level: 'deep',
      hero: 'sand',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-01-27',
      boost: 0.5,
      quiz: [
        {
          q: 'Mohla ztrátu způsobit fyzická námaha — zvedání nákupu, cvičení, stěhování?',
          options: [
            'Ano, proto se v těhotenství nemá nic zvedat',
            'U běžné námahy to není považováno za příčinu ztráty',
            'Záleží, kolik kilogramů to bylo',
          ],
          correct: 1,
          explain:
            'Běžná fyzická aktivita se za příčinu časné ztráty nepovažuje. Naprostá většina časných ztrát souvisí s chromozomální odchylkou embrya, která vznikla náhodně při dělení buněk. Pokud máte konkrétní omezení kvůli své diagnóze, sdělí vám ho lékař — ale zpětné hledání jednoho dne a jednoho pohybu je bohužel nejčastější a nejzbytečnější způsob, jak se trápit.',
        },
        {
          q: 'Způsobil ztrátu stres nebo to, že jste si od začátku připouštěla obavy?',
          options: [
            'Ano, negativní myšlení se přenáší na těhotenství',
            'Ne — a představa, že si za to můžete myšlenkami, je jedním z nejškodlivějších mýtů',
            'Jen když stres trvá déle než měsíc',
          ],
          correct: 1,
          explain:
            'Běžný životní stres ani obavy nejsou uznávanou příčinou ztráty těhotenství. Tenhle mýtus je zvlášť zákeřný, protože přesouvá vinu na ženu za něco, co je při čekání na dítě naprosto přirozené. Dlouhodobý stres stojí za pozornost kvůli vašemu zdraví a kvalitě života, ne proto, že by byl viníkem.',
        },
        {
          q: 'Znamená biochemické těhotenství, že jste vlastně nebyla těhotná?',
          options: [
            'Ano, jde jen o falešně pozitivní test',
            'Ne — k otěhotnění došlo, jen se těhotenství zastavilo velmi brzy',
            'Znamená to, že šlo o chybu laboratoře',
          ],
          correct: 1,
          explain:
            'Biochemické těhotenství znamená, že se embryo zahnízdilo natolik, že začalo tvořit hCG, ale těhotenství se zastavilo dřív, než by bylo cokoli vidět na ultrazvuku. Slovo biochemické popisuje jen to, že jediným důkazem byla laboratorní hodnota. O tom, jak moc jste to těhotenství chtěla a jak skutečná je ztráta, neříká nic.',
        },
        {
          q: 'Je pravda, že po jedné ztrátě je namístě rozsáhlé vyšetření příčin?',
          options: [
            'Ano, vždy a okamžitě',
            'Obvykle se systematicky vyšetřuje až po opakovaných ztrátách nebo když je konkrétní důvod dřív',
            'Nikdy, vyšetřování nemá smysl',
          ],
          correct: 1,
          explain:
            'Jedna časná ztráta bývá nejčastěji náhodnou událostí, a proto se po ní obvykle rozsáhle nevyšetřuje — nepřineslo by to užitečnou informaci. Dřív se pátrá, když je pro to konkrétní důvod: vyšší věk, známá diagnóza, ztráta v pozdějším týdnu nebo nález na ultrazvuku. Hranici i rozsah určuje váš lékař a je legitimní se na vyšetření zeptat.',
        },
        {
          q: 'Musíte po ztrátě čekat s dalším pokusem alespoň půl roku?',
          options: [
            'Ano, to je pevné pravidlo',
            'Ne — načasování určuje lékař podle typu ztráty a léčby, obecné lhůty z internetu neplatí',
            'Ano, jinak hrozí, že to zase nevyjde',
          ],
          correct: 1,
          explain:
            'Dřívější představa o nutnosti mnohaměsíčního čekání se v odborných doporučeních posunula. Načasování závisí na typu ztráty, způsobu ukončení, hodnotách hCG a na tom, jestli jste dostala metotrexát — tam platí zvláštní odstup, který určuje lékař. Druhá polovina odpovědi je psychická připravenost, a na tu žádná lhůta neexistuje.',
        },
        {
          q: 'Znamená mimoděložní těhotenství, že už nemůžete otěhotnět?',
          options: [
            'Ano, po odstranění vejcovodu už to nejde',
            'Ne — těhotenství je možné i s jedním vejcovodem a u IVF se vejcovody k oplodnění nevyužívají',
            'Jen pokud byl odstraněn pravý vejcovod',
          ],
          correct: 1,
          explain:
            'Otěhotnět lze i s jedním vejcovodem a při IVF se vejcovody k oplodnění vůbec nepoužívají — embryo se přenáší přímo do dělohy. Co to znamená konkrétně pro vás, závisí na stavu druhého vejcovodu a na vaší diagnóze; tuhle odpověď vám dá jen váš lékař. Prodělané mimoděložní těhotenství je zároveň informace, kvůli které se příští těhotenství sleduje časnějším ultrazvukem.',
        },
      ],
    },
    {
      id: 'loss-otazky-na-kontrolu',
      kind: 'checklist',
      title: 'Otázky na kontrolu po ztrátě: ať neodejdete s prázdnou',
      excerpt:
        'Deset minut u lékaře uteče dřív, než se vzpamatujete — tohle si vezměte napsané s sebou.',
      body: `## Proč si otázky psát

Protože ve stresu si z rozhovoru odnesete zhruba třetinu. Protože lékař má na vás omezený čas a bude mluvit rychle. A protože v autě před ordinací si vzpomenete na tři věci, na které jste se chtěla zeptat.

**Vytiskněte si to nebo přepište do telefonu.** Není nic trapného na tom přijít s papírem — většina lékařů to naopak ocení, protože rozhovor pak jde rychleji a k věci.

## Jak to udělat

- **Vyberte si pět otázek**, které jsou pro vás nejdůležitější, a ty položte první. Zbytek, pokud zbyde čas.
- **Vezměte s sebou partnera nebo blízkou osobu.** Čtyři uši slyší víc a druhý člověk si může psát odpovědi.
- **Ptejte se, dokud nerozumíte.** „Můžete mi to říct ještě jednou jinak?" je naprosto legitimní věta.
- **Zapisujte odpovědi.** Nebo se zeptejte, jestli si smíte rozhovor nahrát.

> Seznam nenahrazuje lékařskou péči. Slouží jen k tomu, abyste z konzultace odešla s informacemi, které potřebujete.`,
      minutes: 4,
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'repeated_failure'],
      dayRange: [10, 45],
      topics: ['ztrata', 'klinika', 'vysledky'],
      level: 'essential',
      hero: 'linen',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2025-10-17',
      boost: 0.7,
      checklist: [
        {
          id: 'loss-chk-kontr-prubeh',
          text: 'Je z vašeho pohledu všechno zhojené? Je dutina děložní v pořádku?',
          hint: 'Ptejte se konkrétně na to, jestli nezůstala tkáň a jestli je potřeba další kontrola.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-kontr-hcg',
          text: 'Kdy končí sledování hCG a jaká hodnota znamená, že už chodit nemusím?',
          hint: 'Mít konkrétní cíl je snesitelnější než chodit donekonečna.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-kontr-menstruace',
          text: 'Kdy mám čekat menstruaci a kdy se mám ozvat, když nepřijde?',
          hint: 'Zapište si datum, od kterého se počítá.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-kontr-rezim',
          text: 'Kdy můžu zpátky ke sportu, do bazénu a k pohlavnímu styku?',
          hint: 'Tohle se často zapomíná probrat a ženy pak týdny tápou.',
          group: 'Tělo',
        },
        {
          id: 'loss-chk-kontr-priciny',
          text: 'Víme, proč k tomu došlo? Co je nejpravděpodobnější vysvětlení?',
          hint: 'I odpověď „nevíme a nejspíš se to nedozvíme" je odpověď, kterou potřebujete slyšet nahlas.',
          group: 'Proč',
        },
        {
          id: 'loss-chk-kontr-genetika',
          text: 'Šla tkáň na genetické vyšetření? Kdy a od koho se dozvím výsledek?',
          hint: 'Není indikované vždy. Pokud neproběhlo, zeptejte se, jestli by mělo smysl příště.',
          group: 'Proč',
          optional: true,
        },
        {
          id: 'loss-chk-kontr-vysetreni',
          text: 'Doporučujete v mém případě nějaká vyšetření? Proč zrovna tato?',
          hint: 'Užitečná doplňující otázka: „Co bychom udělali jinak, kdyby vyšlo pozitivní?"',
          group: 'Proč',
        },
        {
          id: 'loss-chk-kontr-partner',
          text: 'Má smysl vyšetřit i partnera?',
          hint: 'U opakovaných ztrát se to nevynechává. Zeptejte se, i když vám to nikdo nenabídne.',
          group: 'Proč',
          optional: true,
        },
        {
          id: 'loss-chk-kontr-kdy-znovu',
          text: 'Kdy je z lékařského hlediska bezpečné zkoušet znovu?',
          hint: 'Ptejte se konkrétně, ne obecně. Odpověď se liší podle typu ztráty a léčby.',
          group: 'Dál',
        },
        {
          id: 'loss-chk-kontr-antikoncepce',
          text: 'Potřebuju do té doby řešit antikoncepci?',
          hint: 'Ovulace přichází dřív než první menstruace. Po některých léčbách je odklad nutný.',
          group: 'Dál',
        },
        {
          id: 'loss-chk-kontr-protokol',
          text: 'Změnili byste u dalšího pokusu něco v postupu? Co konkrétně?',
          hint: 'I malá změna hodně mění to, jak dalším pokusem projdete psychicky.',
          group: 'Dál',
        },
        {
          id: 'loss-chk-kontr-embrya',
          text: 'Kolik nám zbývá zamrazených embryí a v jakém jsou stadiu?',
          hint: 'Zapište si to. Za dva měsíce si to nebudete pamatovat přesně.',
          group: 'Dál',
          optional: true,
        },
        {
          id: 'loss-chk-kontr-sledovani',
          text: 'Jak byste sledovali další těhotenství? Bude ultrazvuk dřív?',
          hint: 'Konkrétní plán sledování je to nejúčinnější proti úzkosti při dalším pokusu.',
          group: 'Dál',
        },
        {
          id: 'loss-chk-kontr-psycholog',
          text: 'Spolupracujete s psychologem nebo mi můžete napsat doporučení?',
          hint: 'Doporučení otevírá cestu k péči hrazené ze zdravotního pojištění.',
          group: 'Podpora',
        },
        {
          id: 'loss-chk-kontr-neschopenka',
          text: 'Potřebuju prodloužit neschopnost nebo upravit pracovní režim',
          hint: 'Řekněte to nahlas. Lékař to sám neodhadne.',
          group: 'Podpora',
          optional: true,
        },
        {
          id: 'loss-chk-kontr-kontakt',
          text: 'Na koho se mám obrátit, když se stav zhorší večer nebo o víkendu?',
          hint: 'Uložte si to do telefonu ještě v čekárně, než odejdete.',
          group: 'Podpora',
        },
      ],
    },
  ],
  dailyCards: [
    {
      id: 'loss-card-den-0',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage'],
      day: 0,
      headline: 'Dnešek nemusíte zvládnout',
      body: 'Dnes není den na rozhodování, plánování ani na to, abyste komukoli vysvětlovala, jak vám je. Jediné, co dnes potřebujete, je dostat se do bezpečí, napít se a mít u sebe člověka, který nebude nic říkat. Všechno ostatní počká do zítřka.',
      whatsHappening: [
        'Šok často znecitliví — spousta žen první den skoro nic necítí a pak se toho lekne.',
        'Tělo je ve zvýšené pohotovosti: bušení srdce, třes, sevřený žaludek.',
        'Hlava se okamžitě pustí do hledání viny. To je automatická reakce, ne pravda.',
      ],
      task: 'Napište jednomu člověku jednu větu: „Přišla jsem o těhotenství. Nechci o tom mluvit, jen ať o tom víš."',
      tip: 'Zrušte, co se dá zrušit na příští tři dny. Omluva nemusí obsahovat důvod.',
      callDoctorIf: [
        'silné krvácení — prosáknutí velké vložky za hodinu, dvě hodiny po sobě',
        'prudká nebo narůstající bolest v podbřišku, zvlášť jednostranná',
        'bolest v rameni nebo mezi lopatkami, závrať, mdloba, studený pot',
        'horečka nad 38 °C nebo zapáchající výtok',
      ],
    },
    {
      id: 'loss-card-den-1',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage'],
      day: 1,
      headline: 'Druhý den bývá horší než první',
      body: 'První den drží člověka nad vodou šok a adrenalin. Druhý den obojí odchází a zůstane únava, na kterou nikdo nevaruje. Nepřidávejte si dnes nic navíc a nedivte se, že nemáte sílu ani na sprchu.',
      whatsHappening: [
        'Hormonální propad začíná být znát — pláč, výkyvy, bolest hlavy.',
        'Může se objevit nebo zesílit krvácení a křeče v podbřišku.',
        'Spánek bývá přerušovaný, i když jste vyčerpaná.',
      ],
      task: 'Napište si na papír, co se stalo, s daty a hodnotami, které znáte. Za tři týdny se vás na to někdo zeptá a vy si to nebudete pamatovat.',
      reflection: 'Co dnes potřebuju od lidí kolem sebe — a řekla jsem to nahlas aspoň jednomu z nich?',
      callDoctorIf: [
        'krvácení, které sílí místo aby sláblo',
        'horečka nad 38 °C, zimnice',
        'bolest, kterou nezvládají běžné léky',
        'závrať, mdloba, bušení srdce',
      ],
    },
    {
      id: 'loss-card-0-3-telo',
      phases: ['loss_biochemical', 'loss_missed', 'loss_miscarriage'],
      dayRange: [2, 3],
      headline: 'Vaše tělo teď dělá hodně práce',
      body: 'Hormony klesají rychlostí, kterou tělo za normálních okolností nezažívá, a k tomu se hojí sliznice. Vyčerpání, které cítíte, není psychická slabost — je to skutečná fyzická zátěž. Jezte a pijte pravidelně, i když nemáte hlad ani chuť.',
      whatsHappening: [
        'Krvácení bývá zpočátku silnější než menstruace a postupně slábne.',
        'Odchod menších koagul není sám o sobě poplašný, pokud krvácení celkově slábne.',
        'Výkyvy nálad přicházejí ve vlnách a bez logiky.',
      ],
      task: 'Nachystejte si na dosah ruky vodu, něco k jídlu a nabíječku, ať kvůli tomu nemusíte vstávat.',
      tip: 'Používejte vložky, ne tampony — kvůli riziku infekce. Přesné pokyny vám dá lékař.',
      callDoctorIf: [
        'prosáknutí velké vložky za hodinu, dvě hodiny po sobě',
        'koagula větší než švestka, zvlášť opakovaně',
        'horečka nad 38 °C nebo zapáchající výtok',
        'závrať, mdloby, výrazná bledost, studený pot',
      ],
    },
    {
      id: 'loss-card-0-3-biochemicke',
      phases: ['loss_biochemical'],
      dayRange: [0, 3],
      headline: 'Byla jste těhotná. To platí.',
      body: 'Pravděpodobně už vám někdo řekl, že to „ještě nebylo skutečné těhotenství". Nebyla to pravda: k otěhotnění došlo, embryo se zahnízdilo a začalo tvořit hCG. Slovo biochemické popisuje jen to, že jediným důkazem byla laboratorní hodnota — o vaší ztrátě neříká nic.',
      whatsHappening: [
        'Klinika vás nejspíš pozve na kontrolní odběry, dokud hCG neklesne pod měřitelnou mez.',
        'Krvácení může přijít se zpožděním, zvlášť když jste užívala podporu luteální fáze.',
        'O vysazení jakýchkoli léků rozhoduje výhradně lékař.',
      ],
      task: 'Zapište si všechny hodnoty hCG s daty odběrů do jedné poznámky v telefonu.',
      reflection: 'Čí větu si dnes přehrávám v hlavě — a je to věta, kterou si zasloužím nosit?',
      callDoctorIf: [
        'hCG, které podle kontrolních odběrů neklesá',
        'jednostranná bolest v podbřišku, bolest v rameni, závrať nebo mdloba',
        'silné krvácení nebo horečka nad 38 °C',
      ],
    },
    {
      id: 'loss-card-0-3-ektopie',
      phases: ['loss_ectopic'],
      dayRange: [0, 3],
      headline: 'Teď je nejdůležitější sledovat příznaky',
      body: 'Prošla jste zároveň ztrátou a zdravotně vážnou situací — a obojí platí najednou. V následujících dnech je klíčové nevynechat žádný kontrolní odběr a hlídat varovné příznaky, i když se cítíte dobře. Truchlit můžete a musíte zároveň, ale bezpečí má teď přednost.',
      whatsHappening: [
        'Hodnota hCG může po podání léčby ještě přechodně stoupnout, než začne klesat.',
        'Mírná bolest břicha bývá po léčbě očekávaná — prudká a narůstající nikoli.',
        'Únava po akutním stavu i po anestezii trvá dny až týdny.',
      ],
      task: 'Uložte si do telefonu číslo na kliniku, na noční pohotovost a poznámku, kdo drží službu o víkendu.',
      tip: 'Neřiďte, pokud máte závrať nebo bolest. Domluvte si dopředu, kdo vás v případě potřeby odveze.',
      callDoctorIf: [
        'prudká nebo rychle sílící bolest břicha — volejte záchrannou službu (155)',
        'bolest v rameni nebo mezi lopatkami',
        'závrať, mdloba, bledost, studený pot, bušení srdce',
        'silné krvácení, horečka nad 38 °C, zvracení a neschopnost pít',
      ],
    },
    {
      id: 'loss-card-0-3-zamlkle',
      phases: ['loss_missed'],
      dayRange: [0, 3],
      headline: 'Čekání mezi dvěma ultrazvuky',
      body: 'Pokud čekáte na kontrolní vyšetření, jste v nejhorším možném prostoru — nesmíte doufat a nesmíte truchlit. To opakování není pochybnost o vaší diagnóze, ale pravidlo: nález musí být jednoznačný, než se cokoli udělá. Nemusíte v téhle době fungovat.',
      whatsHappening: [
        'Příznaky těhotenství mohou pokračovat, protože tělo to zatím nerozpoznalo. Je to kruté a je to běžné.',
        'Hlava přeskakuje mezi nadějí a jistotou několikrát za hodinu.',
        'Rozhodování o dalším postupu vás teprve čeká — dnes ho nemusíte řešit.',
      ],
      task: 'Napište si tři otázky, které chcete mít zodpovězené na příští návštěvě. Jednou z nich ať je: „Kolik času mám na rozhodnutí?"',
      reflection: 'Co bych dnes potřebovala slyšet — a od koho to reálně můžu dostat?',
      callDoctorIf: [
        'silné krvácení nebo odchod velkých koagul',
        'prudká nebo narůstající bolest v podbřišku',
        'horečka nad 38 °C, zimnice, zapáchající výtok',
        'závrať, mdloba, bledost, studený pot',
      ],
    },
    {
      id: 'loss-card-revize-den-0',
      phases: ['uterine_revision'],
      day: 0,
      headline: 'Dneska za vás pracují oni',
      body: 'Výkon sám je krátký a vy z něj nebudete mít žádnou vzpomínku. Vaším jediným úkolem dnes je dodržet lačnění, mít s sebou doprovod domů a nechat se vést. Čekání bude nejspíš delší než samotný zákrok — sály jedou podle programu, ne podle hodinek.',
      whatsHappening: [
        'Příjem, souhlasy a rozhovor s anesteziologem zaberou většinu dopoledne.',
        'Po probuzení bývá zima, třes nebo nevolnost — sestry to čekají.',
        'Krvácení po výkonu bývá často slabší, než ženy předpokládají.',
      ],
      task: 'Zkontrolujte tašku: doklady, kartička pojišťovny, seznam léků a alergií, vložky, ponožky, nabíječka.',
      tip: 'Pokud jste se domlouvala na genetickém vyšetření tkáně, ověřte si to ještě před sálem. Později to už nikdo neřeší.',
      callDoctorIf: [
        'pokud jste nedodržela lačnění — řekněte to, výkon se odloží, ale je to bezpečnější',
        'silné krvácení nebo prudká bolest ještě před výkonem',
        'horečka nad 38 °C v den výkonu',
      ],
    },
    {
      id: 'loss-card-revize-1-3',
      phases: ['uterine_revision'],
      dayRange: [1, 3],
      headline: 'Druhý den po anestezii bývá horší než první',
      body: 'Únava po celkové anestezii je výraznější, než čekáte, a obvykle vrcholí až den nebo dva po výkonu. Přidejte k tomu hormonální propad a je jasné, proč nedokážete udělat nic. Odpočívejte víc, než se vám zdá nutné.',
      whatsHappening: [
        'Krvácení bývá slabší a postupně přechází do hnědavého špinění.',
        'Křeče podobné menstruačním jsou běžné a obvykle je zvládnou běžná analgetika.',
        'Zácpa po anestezii a lécích proti bolesti je častá — pomáhá pitný režim a vláknina.',
      ],
      task: 'Změřte si dnes teplotu. Zapište si ji spolu s tím, kolik vložek jste vyměnila — na kontrole je to nejužitečnější informace.',
      tip: 'Sprcha místo koupele, žádný bazén ani sauna, dokud krvácení neustane.',
      callDoctorIf: [
        'horečka nad 38 °C, zimnice nebo zapáchající výtok',
        'krvácení, které znovu zesílí místo aby sláblo',
        'prudká nebo narůstající bolest břicha',
        'zvracení a neschopnost pít',
      ],
    },
    {
      id: 'loss-card-4-7-telo',
      phases: ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'loss_ectopic'],
      dayRange: [4, 7],
      headline: 'Tělo se pomalu vrací, hlava zatím ne',
      body: 'Zhruba v tuhle dobu bývá fyzicky líp — krvácení slábne, bolest ustupuje. Psychicky to často bývá naopak, protože odchází první šok a začíná docházet, co se vlastně stalo. Tenhle rozpor je normální a nepotřebuje vysvětlení.',
      whatsHappening: [
        'Krvácení obvykle přechází do hnědavého špinění, které může trvat i dva až tři týdny.',
        'Vyčerpání může přetrvávat — smutek sám o sobě stojí ohromné množství energie.',
        'Vracejí se běžné povinnosti a s nimi pocit, že byste už měla fungovat.',
      ],
      task: 'Jděte na patnáctiminutovou procházku. Nemusí to nic vyřešit, stačí, když projdete kolem bloku.',
      reflection: 'Čekám od sebe dnes něco, co bych nečekala od kamarádky ve stejné situaci?',
      callDoctorIf: [
        'krvácení, které po několika dnech znovu zesílí',
        'horečka nad 38 °C nebo zapáchající výtok',
        'bolest břicha, která se zhoršuje místo aby polevovala',
        'bolest, otok nebo zarudnutí lýtka, náhlá dušnost nebo bolest na hrudi',
      ],
    },
    {
      id: 'loss-card-4-7-lide',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision'],
      dayRange: [4, 7],
      headline: 'Někdo řekne něco, co zabolí',
      body: 'Skoro jistě uslyšíte větu typu „aspoň víte, že to jde" nebo „bylo to tak asi nejlepší". Nevznikají ze zlé vůle, ale z bezradnosti — a to neznamená, že je musíte snést s úsměvem. Mít připravenou jednu větu vás zachrání víc než jakákoli vnitřní síla.',
      whatsHappening: [
        'Lidé, kteří o těhotenství věděli, se začínají ptát.',
        'Někteří naopak mlčí, protože se bojí, že vám ublíží — a to bolí jinak.',
        'Vy zatím nemáte kapacitu nikoho vzdělávat, a nemusíte.',
      ],
      task: 'Naučte se nazpaměť jednu větu: „Vím, že to myslíš dobře, ale tohle mi nepomáhá." Řekněte si ji párkrát nahlas.',
      tip: 'Ztlumte si na čas oznámení ze skupin a aplikací, kde jsou miminka. Dá se to kdykoli vrátit.',
    },
    {
      id: 'loss-card-4-7-partner',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision'],
      dayRange: [4, 7],
      excludeModifiers: ['single_mother'],
      headline: 'On to nese jinak — a to není lhostejnost',
      body: 'Pokud partner mlčí, pracuje nebo opravuje věci po domě, obvykle to neznamená, že mu to je jedno. Řada mužů se naučila, že jejich rolí je situaci zvládnout, takže zvládají — tiše a často mimo domov. Nejrychlejší cesta ven z domýšlení je zeptat se přímo.',
      whatsHappening: [
        'Truchlení má různou rychlost. Často se míjíte: jeden se zvedá, když druhý klesá.',
        'Nevyslovené výčitky se hromadí rychleji než vyslovené.',
        'Změna intimity po ztrátě je běžná a přechodná.',
      ],
      task: 'Zeptejte se ho jednou otázkou: „Jak to teď máš ty?" A pak nechte ticho, i když bude dlouhé.',
      reflection: 'Řekla jsem mu konkrétně, co potřebuju — nebo čekám, že to uhodne?',
    },
    {
      id: 'loss-card-8-14-prace',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision'],
      dayRange: [8, 14],
      headline: 'Návrat do práce: připravte si tři věci',
      body: 'Zaměstnavateli nemusíte sdělovat nic — doklad o pracovní neschopnosti neobsahuje diagnózu a nadřízený na ni nemá nárok. Co vám ale pomůže, je připravená odpověď na otázku „kde jsi byla", jeden spojenec na pracovišti a plán, kam se na pět minut ztratit, když přijde vlna.',
      whatsHappening: [
        'Soustředění bývá výrazně horší než dřív — smutek zabírá pracovní paměť.',
        'Osmihodinový den může první týden působit jako dvanáctihodinový.',
        'Vlna může přijít z ničeho nic, typicky u cizí radostné novinky.',
      ],
      task: 'Napište si větu pro kolegy: „Byla jsem nemocná, teď už je to dobré." Nic víc nedlužíte.',
      tip: 'Dejte si na konec prvního dne třicetiminutový blok v kalendáři s názvem, kterému rozumíte jen vy.',
    },
    {
      id: 'loss-card-8-14-vlny',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'repeated_failure'],
      dayRange: [8, 14],
      headline: 'Dobrý den neznamená, že jste přes to',
      body: 'Smutek chodí ve vlnách, ne v etapách — proto se může stát, že ve středu funguje všechno a ve čtvrtek brečíte v autě u benzínky. Ani jedno není pokrok nebo krok zpátky. Postupně se prodlužují mezery mezi vlnami, ne jejich hloubka.',
      whatsHappening: [
        'Spouštěčem bývá reklama, oznámení na sítích, vůně nemocnice — nebo vůbec nic.',
        'Vlna, které se bráníte, obvykle trvá déle než ta, kterou necháte projít.',
        'Někdo naopak necítí skoro nic. To je taky forma truchlení, ne důkaz chladu.',
      ],
      task: 'Až dnes přijde vlna, řekněte si nahlas: „Teď mám vlnu. Přejde." Zní to hloupě a funguje to.',
      reflection: 'Co mi za poslední týden spolehlivě spustilo vlnu — a dá se to na čas obejít?',
    },
    {
      id: 'loss-card-8-14-spanek',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision'],
      dayRange: [8, 14],
      headline: 'Noci jsou nejhorší část',
      body: 'Přes den se dá utéct do činnosti, v noci není kam. Většina žen po ztrátě popisuje přerušovaný spánek a hlavu, která pořád dokola přehrává jeden den. Není to slabost — je to typický projev zátěže a obvykle se to zlepšuje.',
      whatsHappening: [
        'Hormonální propad sám o sobě rozhazuje spánek na několik týdnů.',
        'Ranní probouzení s bušením srdce nebo úzkostí je časté.',
        'Únava přes den se prohlubuje a vy pak večer nemáte sílu usnout.',
      ],
      task: 'Připravte si na noc jednu věc dopředu — nahrávku, knihu, teplý nápoj. Ať nemusíte ve dvě ráno nic vymýšlet.',
      callDoctorIf: [
        'nespavost trvající déle než dva týdny',
        'opakované vracející se obrazy z nemocnice nebo záchvaty úzkosti',
        'pocit, že to nezvládáte, nebo myšlenky na to, že nechcete žít — vyhledejte pomoc okamžitě',
      ],
    },
    {
      id: 'loss-card-15-30-kontrola',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision'],
      dayRange: [15, 30],
      headline: 'Na kontrolu si vezměte papír',
      body: 'Ve stresu si z rozhovoru s lékařem odnesete zhruba třetinu a v autě před ordinací si vzpomenete na tři věci, na které jste se chtěla zeptat. Přijít s napsanými otázkami není trapné — většina lékařů to ocení, protože rozhovor pak jde rychleji. Vezměte si s sebou partnera nebo blízkou osobu, čtyři uši slyší víc.',
      whatsHappening: [
        'Obvykle se probírá hojení, sledování hCG, návrat menstruace a další postup.',
        'Odpověď „nevíme a nejspíš se to nedozvíme" je taky odpověď, kterou potřebujete slyšet nahlas.',
        'Doporučení k psychologovi otevírá cestu k péči hrazené ze zdravotního pojištění — je legitimní si o něj říct.',
      ],
      task: 'Vyberte pět otázek, které chcete mít zodpovězené, a napište si je do telefonu. První ať je ta nejdůležitější.',
      tip: 'Zeptejte se, kdy je z lékařského hlediska bezpečné zkoušet znovu a jestli do té doby potřebujete řešit antikoncepci.',
    },
    {
      id: 'loss-card-15-30-menstruace',
      phases: ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'uterine_revision', 'loss_ectopic'],
      dayRange: [15, 30],
      headline: 'První menstruace bývá těžší, než čekáte',
      body: 'Přichází nejčastěji za čtyři až šest týdnů od ukončení těhotenství a bývá silnější a bolestivější než obvykle. Psychicky je to zvláštní milník: uzavírá to definitivně, a zároveň je to důkaz, že tělo funguje. Nemusíte to prožít jako dobrou zprávu.',
      whatsHappening: [
        'Cyklus se nerozjede, dokud hCG neklesne pod měřitelnou mez — proto ty rozdíly mezi ženami.',
        'Ovulace přichází ještě před první menstruací, takže otěhotnět lze dřív, než ji uvidíte.',
        'Druhý a třetí cyklus se obvykle vrací k tomu, co znáte.',
      ],
      task: 'Zapište si jen datum začátku a sílu krvácení. Bez predikcí, bez odpočtů, bez notifikací.',
      callDoctorIf: [
        'menstruace nepřišla do osmi týdnů od ukončení těhotenství',
        'velmi slabá nebo žádná menstruace ve dvou a více cyklech po revizi',
        'silné krvácení nebo bolest, kterou nezvládají běžné léky',
        'těhotenský test, který je po několika týdnech stále pozitivní',
      ],
    },
    {
      id: 'loss-card-15-30-otazky-okoli',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'repeated_failure'],
      dayRange: [15, 30],
      headline: 'Okolí si myslí, že už je to za vámi',
      body: 'Zhruba po třech týdnech lidé kolem přejdou k běžnému provozu a přestanou se ptát — někdy z ohledu, někdy protože zapomněli. Vy jste přitom často až teď v nejtěžší fázi. Neexistuje lhůta, po které by ztráta přestala platit, a nikomu nemusíte obhajovat, jak dlouho truchlíte.',
      whatsHappening: [
        'Vracejí se otázky „a kdy vy?" od lidí, kteří nic nevědí.',
        'Kolem se objevují těhotenství a oznámení, na která nemáte kapacitu.',
        'Závist a smutek nad cizí radostí nejsou důkaz, že jste špatný člověk.',
      ],
      task: 'Vyberte si z aplikace tři věty do zálohy a nechte si je otevřené v poznámkách pro tento týden.',
      reflection: 'Kdo z mého okolí ví dost na to, abych mu mohla napsat „dnes je to zlé" bez vysvětlování?',
    },
    {
      id: 'loss-card-31-60-co-dal',
      phases: ['waiting_next_attempt', 'loss_miscarriage', 'loss_missed', 'loss_biochemical'],
      dayRange: [31, 60],
      headline: 'Čas na velký rozhovor s lékařem',
      body: 'Zhruba měsíc po ztrátě už bývá prostor probrat, co dál — ne narychlo po odběru, ale na samostatném termínu. Nejdůležitější otázka zní: co konkrétně bychom příště udělali jinak a proč zrovna to. I malá změna hodně mění to, jak dalším pokusem projdete psychicky.',
      whatsHappening: [
        'Systematické vyšetřování se obvykle zvažuje po opakovaných ztrátách nebo když je konkrétní důvod dřív.',
        'Načasování dalšího pokusu závisí na typu ztráty a léčby — obecné lhůty z internetu neplatí.',
        'U komerčních panelů a drahých testů se vyplatí ptát: co uděláme jinak, když vyjde pozitivní?',
      ],
      task: 'Objednejte si samostatný termín na konzultaci a napište si na něj chronologii: týdny, hodnoty, postupy, výsledky.',
      tip: 'Vezměte partnera nebo blízkou osobu. A ptejte se, dokud nerozumíte — „řekněte mi to ještě jednou jinak" je legitimní věta.',
    },
    {
      id: 'loss-card-31-60-psychika',
      phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'waiting_next_attempt', 'repeated_failure'],
      dayRange: [31, 60],
      headline: 'Kontrolní otázka: lepší, stejné, nebo horší?',
      body: 'Po měsíci má smysl se poctivě zeptat, jestli se stav pomalu zvedá, drží na místě, nebo klesá. Odborná pomoc není až pro nejhorší případ — nejlépe funguje tam, kde ještě zbývá trochu síly. Nemusíte mít diagnózu, abyste na ni měla nárok.',
      whatsHappening: [
        'Kolem šesti až osmi týdnů se u většiny žen začínají prodlužovat mezery mezi vlnami.',
        'Když se stav nelepší nebo se zhoršuje, je to konkrétní signál, ne slabost.',
        'Čekací doby u klinických psychologů bývají dlouhé — vyplatí se zapsat na víc míst současně.',
      ],
      task: 'Napište si tři věty o tom, jak jste na tom teď oproti prvnímu týdnu. Buďte upřímná, nikdo to nebude číst.',
      callDoctorIf: [
        'stav se po šesti až osmi týdnech nelepší nebo se zhoršuje',
        'nefungujete v běžném životě — nejdete do práce, nejíte, nevstáváte',
        'úzkostné záchvaty, bušení srdce, pocity dušení',
        'užíváte alkohol nebo léky, abyste to unesla',
        'myšlenky na sebepoškození nebo na to, že nechcete žít — vyhledejte pomoc okamžitě',
      ],
    },
    {
      id: 'loss-card-61-90-navrat',
      phases: ['waiting_next_attempt', 'repeated_failure'],
      dayRange: [61, 90],
      headline: 'Jít znovu se strachem není slabost',
      body: 'Ženy, které se po ztrátě vracejí do léčby, obvykle nepopisují nadšení — popisují odhodlání smíchané s hrůzou. To je normální výchozí stav, ne varovné znamení. Nemusíte věřit, že to vyjde; stačí, že jdete.',
      whatsHappening: [
        'Nejistota v tom, kdy se co dozvíte, bývá horší než samotné čekání.',
        'Domluvený plán sledování a časnější ultrazvuk snižují úzkost víc než cokoli jiného.',
        'Pauza není promarněný čas — u řady žen je to právě ona, co další pokus umožní unést.',
      ],
      task: 'Zavolejte na kliniku a řekněte jednu větu: „Jsem po ztrátě, chci to mít v dokumentaci a chci domluvit plán sledování."',
      reflection: 'Jdu do dalšího pokusu proto, že chci — nebo proto, že nesnesu prázdno po ztrátě?',
    },
    {
      id: 'loss-card-61-90-vyroci',
      phases: ['waiting_next_attempt', 'repeated_failure', 'loss_miscarriage', 'loss_missed'],
      dayRange: [61, 90],
      headline: 'Data, která si tělo pamatuje samo',
      body: 'Přijde den, kdy vám bude nevysvětlitelně zle, a teprve pak si všimnete, jaké je datum. Nejčastěji jde o spočítaný termín porodu nebo o den, kdy jste se to dozvěděla. Vědět o tom předem je polovina úlevy.',
      whatsHappening: [
        'Termín porodu bývá pro většinu žen nejtěžší datum ze všech.',
        'Svátky postavené kolem rodiny — Vánoce, Den matek — fungují podobně.',
        'Rituál pomáhá jen některým. Nedělat nic je stejně platná volba.',
      ],
      task: 'Poznamenejte si termín porodu do kalendáře a na ten týden si dopředu uberete povinnosti.',
      tip: 'Řekněte jednomu člověku: „Ten den je pro mě těžký. Nemusíš nic říkat, jen ať o tom víš."',
    },
    {
      id: 'loss-card-opakovane-pauza',
      phases: ['repeated_failure'],
      dayRange: [7, 45],
      modifiers: ['repeated_failure'],
      headline: 'Cyklus za cyklem není důkaz odhodlání',
      body: 'Po opakovaných neúspěších se snadno sklouzne do režimu, kde jde jeden pokus hned za druhým a život mezitím utíká v čekárnách. Pauza tři měsíce nesníží vaše šance tak, jak se bojíte — a může vrátit kus energie, kterou budete potřebovat. Je taky v pořádku si předem říct, kolik pokusů a kolik prostředků.',
      whatsHappening: [
        'Vyčerpání z léčby se sčítá a projeví se často až ve chvíli, kdy je ho příliš.',
        'Neúspěšný transfer je ztráta, i když nikdy nebyl pozitivní test.',
        'Druhý názor na jiném pracovišti je standardní postup, ne zrada vaší kliniky.',
      ],
      task: 'Napište si na papír dvě čísla: kolik pokusů a kolik prostředků. Hranice se dá kdykoli posunout — mít ji je něco jiného než plout donekonečna.',
      reflection: 'Kdy jsem naposledy udělala něco, co vůbec nesouviselo s léčbou?',
    },
  ],
  encouragements: [
    {
      id: 'loss-enc-mereni',
      text: 'Ztráta se neměří počtem týdnů ani milimetry na ultrazvuku. Měří se tím, co jste si už dovolila představit.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-nemuselo-byt-nejlepsi',
      text: 'Nemuselo to tak být nejlepší. Nemusíte v tom hledat smysl. Někdy je jediná pravdivá věta ta, že je to hrozně nespravedlivé.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-vina',
      text: 'Nebyl to nákup do třetího patra, ani ta káva, ani to, že jste se v jednu chvíli bála. Hlava bude vinu hledat dál. Nemusíte jí věřit.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-vlny',
      text: 'Dobrý den není důkaz, že jste přes to. Špatný den o měsíc později není důkaz, že jdete zpátky. Smutek chodí ve vlnách, ne v etapách.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-telo-neselhalo',
      text: 'Vaše tělo neselhalo. Prošlo těhotenstvím, jeho koncem a hormonální bouří — a teď se dává dohromady. Že je pomalé, je práce, ne slabost.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-necitit-nic',
      text: 'Když necítíte skoro nic, neznamená to, že jste to dítě chtěla míň. Někdy si tělo dá odklad, dokud nemá kapacitu.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-nemusite-vdecna',
      text: 'Nemusíte být vděčná dřív, než budete. Ani za informaci, ani za to, že jste v pořádku, ani za nic jiného, co vám kdo nabídne místo soucitu.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-lhuta',
      text: 'Neexistuje lhůta, po které by ztráta přestala platit. Nikomu nedlužíte vysvětlení, jak dlouho a jak silně truchlíte.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-partner',
      text: 'To, že nepláče, není měřítko toho, jak moc to dítě chtěl. Truchlení má víc podob než jednu a žádná z nich není ta správná.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-zavist',
      text: 'Když vás cizí radost bolí, není to závist ani špatnost. Je to smutek, který si zrovna sedl vedle cizího štěstí.',
      author: 'Tým Bloomia',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-misto',
      text: 'Cíl není přestat být smutná. Cíl je, aby smutek přestal být jediné, co je v místnosti. To se opravdu stane — jen si to zatím neumíte představit.',
      author: 'Gabi',
      tone: 'grieving',
    },
    {
      id: 'loss-enc-jdete-dal',
      text: 'To, že jdete dál, není důkaz, že jste přes ztrátu přešla. Je to důkaz, že s ní umíte jít. To je něco úplně jiného a mnohem těžšího.',
      author: 'Gabi',
      tone: 'grieving',
    },
  ],
  glossary: [
    {
      term: 'Biochemické těhotenství',
      aliases: ['biochemická gravidita', 'časná ztráta'],
      short: 'Velmi časná ztráta těhotenství, které bylo prokázané jen laboratorně, ne na ultrazvuku.',
      long: 'Embryo se zahnízdilo natolik, že začalo tvořit hCG, ale těhotenství se zastavilo dřív, než by bylo možné cokoli zobrazit na ultrazvuku. Slovo biochemické popisuje jen způsob průkazu — jedinou stopou byla laboratorní hodnota. O tom, jak skutečná je ztráta, neříká nic. Obvykle následují kontrolní odběry hCG, dokud hodnota neklesne pod měřitelnou mez, mimo jiné kvůli vyloučení mimoděložního uložení.',
      topics: ['ztrata', 'vysledky', 'hormony'],
    },
    {
      term: 'Zamlklé těhotenství',
      aliases: ['missed abortion', 'zamlklý potrat'],
      short: 'Vývoj těhotenství se zastavil, ale tělo to zatím nerozpoznalo a nepřišlo krvácení.',
      long: 'Zjišťuje se obvykle při ultrazvukovém vyšetření — nejčastěji jako plodové vejce bez embrya, embryo bez srdeční akce nebo výrazně zaostávající velikost. Příznaky těhotenství mohou pokračovat, což bývá velmi kruté. Diagnóza má přesná kritéria a téměř vždy se ověřuje kontrolním vyšetřením s odstupem. Dál se rozhoduje mezi vyčkáváním na spontánní odchod, medikamentózním postupem a instrumentální revizí; o tom, co je ve vašem případě bezpečné, rozhoduje lékař.',
      topics: ['ztrata', 'klinika'],
    },
    {
      term: 'Mimoděložní těhotenství',
      aliases: ['ektopická gravidita', 'ektopické těhotenství', 'GEU'],
      short: 'Těhotenství uhnízděné mimo dutinu děložní, nejčastěji ve vejcovodu. Nemůže pokračovat a vyžaduje léčbu.',
      long: 'Bez léčby může vést k prasknutí vejcovodu a život ohrožujícímu vnitřnímu krvácení. Diagnostika stojí na opakovaných odběrech hCG, vaginálním ultrazvuku a klinickém obrazu. Léčba je buď konzervativní podáním metotrexátu, nebo operační, obvykle laparoskopicky; volbu určuje lékař podle akutnosti stavu, hodnot a nálezu. Okamžitou pomoc vyhledejte při prudké bolesti břicha, bolesti v rameni nebo mezi lopatkami, závrati, mdlobě, bledosti nebo studeném potu.',
      topics: ['ztrata', 'klinika', 'leky'],
    },
    {
      term: 'Revize dutiny děložní',
      aliases: ['kyretáž', 'instrumentální revize', 'vakuová aspirace'],
      short: 'Krátký výkon na sále, při kterém se odstraní obsah dutiny děložní, obvykle v celkové anestezii.',
      long: 'Dnes se nejčastěji provádí odsátím, často pod ultrazvukovou nebo hysteroskopickou kontrolou, což pomáhá odstranit tkáň úplně a šetrně. Výkon obvykle trvá kolem deseti až dvaceti minut a vyžaduje lačnění a doprovod domů. Krvácení po výkonu bývá slabší, než ženy čekají, a postupně přechází do špinění. Ozvěte se lékaři při horečce nad 38 °C, zapáchajícím výtoku, silném nebo znovu sílícím krvácení a při narůstající bolesti.',
      topics: ['ztrata', 'klinika'],
    },
    {
      term: 'Metotrexát',
      short: 'Lék používaný ke konzervativní léčbě mimoděložního těhotenství, podávaný injekčně.',
      long: 'Zastavuje dělení rychle se množících buněk, tedy i buněk trofoblastu, a umožňuje léčbu bez operace. Zvažuje se u stabilního stavu, obvykle při nižších hodnotách hCG a bez známek krvácení do dutiny břišní; podmínky i dávkování určuje výhradně lékař. Po podání následují opakované odběry hCG po několik týdnů — hodnota může nejdřív ještě stoupnout. Součástí léčby jsou omezení, která je nutné dodržet, a odklad dalšího těhotenství, jehož délku určuje lékař.',
      topics: ['ztrata', 'leky'],
    },
    {
      term: 'Opakované ztráty těhotenství',
      aliases: ['habituální potrácení', 'opakovaný potrat'],
      short: 'Situace, kdy po sobě následuje více ztrát a je namístě systematické hledání příčiny.',
      long: 'Po jedné časné ztrátě se obvykle rozsáhle nevyšetřuje, protože nejčastější příčinou bývá náhodná chromozomální odchylka embrya. Systematické vyšetření se zvažuje po opakovaných ztrátách nebo dřív, když je pro to konkrétní důvod. Do diskuse patří genetika obou partnerů a tkáně, zobrazení dutiny děložní, antifosfolipidové protilátky, funkce štítné žlázy a vyšetření partnera. U části párů zůstane příčina i po kompletním vyšetření nevysvětlená. Rozsah vyšetření určuje ošetřující lékař.',
      topics: ['ztrata', 'genetika', 'vysledky'],
    },
    {
      term: 'Perinatální ztráta',
      short: 'Zastřešující pojem pro ztrátu dítěte v těhotenství, při porodu nebo krátce po něm.',
      long: 'Používá se především v psychologické a podpůrné praxi. Je užitečné ho znát, protože podle něj se v Česku hledá cílená pomoc — podpůrné skupiny, poradenství neziskových organizací i terapeuti se zaměřením na tuhle oblast. Rozdíl mezi odborníkem, který tuhle problematiku zná, a tím, který ji nezná, bývá pro ženy po ztrátě zásadní.',
      topics: ['ztrata', 'psychika', 'komunita'],
    },
    {
      term: 'Srůsty v dutině děložní',
      aliases: ['nitroděložní srůsty', 'Ashermanův syndrom'],
      short: 'Vazivové spojky uvnitř dutiny děložní, které mohou vzniknout po zákroku a ovlivnit menstruaci i zahnízdění.',
      long: 'Patří mezi možné pozdní komplikace po revizi dutiny děložní, mimo jiné proto se dnes výkony provádějí co nejšetrněji a často pod kontrolou zobrazení. Podezření vzniká typicky tehdy, když je menstruace po zákroku výrazně slabší nebo zcela chybí ve dvou a více cyklech, případně při opakovaně neúspěšném zahnízdění. Diagnostika a případné řešení patří do rukou lékaře — nejde o stav, který byste měla hodnotit sama.',
      topics: ['ztrata', 'klinika'],
    },
  ],
}
