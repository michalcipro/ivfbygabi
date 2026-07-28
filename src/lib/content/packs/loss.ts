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
