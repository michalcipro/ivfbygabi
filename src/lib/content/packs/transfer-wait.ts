import type { ContentPack } from '../types'

export const pack: ContentPack = {
  items: [
    {
      id: 'tww-den-transferu-krok-za-krokem',
      kind: 'article',
      title: 'Den transferu krok za krokem: co se bude dít od rána',
      excerpt:
        'Celý zákrok trvá pár minut, ale den kolem něj má svůj rytmus — a když ho znáte předem, přestane být strašidelný.',
      body: `## Ráno: nic dramatického se dít nebude

Transfer je z pohledu medicíny jeden z nejjednodušších výkonů celého cyklu. Žádná narkóza, žádné jehly, žádné probouzení se v boxu. A přesto je to den, na který jste čekala týdny nebo roky. Ten rozpor je normální a nemusíte ho nijak řešit.

Ráno se najezte lehce, ale najezte se. Ženy, které kvůli nervozitě vynechají snídani a pak hodinu čekají s plným močovým měchýřem, popisují ten zážitek nejhůř.

## Příjezd na kliniku

Vezměte si s sebou:

- **doklad totožnosti a kartičku pojišťovny** — na některých pracovištích se ověřuje identita znovu i těsně před výkonem,
- **ponožky** (nohy budou na opěrkách a bývá tam chladno),
- **volné oblečení**, ideálně něco, co po zákroku netlačí v pase,
- **partnera nebo blízkou osobu**, pokud to vaše klinika umožňuje — pravidla se liší, ověřte si to předem,
- **telefon nabitý** — čekání bývá delší než samotný výkon.

## Rozhovor s embryologem

Než se převléknete, obvykle vás čeká krátká informace z laboratoře: kolik embryí máte, v jakém jsou stadiu, jaké je hodnocení a které se bude přenášet. Někdy dostanete i fotografii embrya.

Tohle je chvíle, kdy je v pořádku se ptát. Otázky, které stojí za to položit:

1. V jakém stadiu je embryo, které dnes přenášíte?
2. Kolik embryí zůstává na zamrazení a v jakém stadiu?
3. Kdy a jak se dozvím, jak zamrazení dopadlo?
4. Kdy přesně mám jít na odběr krve?

Odpovědi si napište. Ve stresu si z rozhovoru zapamatujete zhruba třetinu, a pak se doma marně snažíte vybavit, co přesně padlo.

## Samotný přenos

Ležíte na gynekologickém křesle podobně jako při běžném vyšetření. Lékař zavede zrcadla, opláchne děložní hrdlo a zavede tenký měkký katétr do dutiny děložní. Většina pracovišť dnes navádí katétr **pod ultrazvukovou kontrolou přes břicho** — proto ten plný močový měchýř, který dělá z dělohy dobře viditelný cíl.

Embryolog přinese embryo v kapce média, lékař ho vypustí do dutiny a katétr vytáhne. Embryolog pak katétr zkontroluje pod mikroskopem, aby ověřil, že v něm embryo nezůstalo.

**Celý výkon obvykle trvá kolem pěti až deseti minut.** Nebolí — většina žen popisuje pocit podobný stěru nebo mírnému tlaku. Nepříjemné bývá spíš plné močení a zrcadla než samotný přenos.

## Co když to nejde hladce

U některých žen je průchod děložním hrdlem obtížnější — kvůli anatomii, po zákrocích na čípku nebo prostě proto, že je hrdlo zahnuté. Lékař pak může použít jiný typ katétru, jemné vodicí zavaděče nebo mírně změnit polohu. Trvá to o pár minut déle. **Neznamená to, že je něco špatně s vámi ani s embryem.**

## Po přenosu

Po výkonu obvykle chvíli ležíte — někde deset minut, jinde vůbec. Delší ležení výsledek neovlivňuje, embryo z dělohy „nevypadne". Pak se můžete vymočit, převléknout a jít domů.

Než odejdete, ujistěte se, že máte:

- **jasný plán užívání podpory luteální fáze** (co, jak často, jak dlouho),
- **datum a čas odběru beta hCG**,
- **telefon na kliniku pro případ potíží** a informaci, kdo drží pohotovost o víkendu.

## Zbytek dne

Většina žen jede domů a zbytek dne prospí nebo prokouká do stropu. Obojí je v pořádku. Nemusíte den ničím naplnit ani mu dávat rituální význam — ale pokud vám rituál pomáhá, udělejte si ho.

Lehké špinění nebo drobné křeče v den transferu bývají z manipulace s hrdlem a nejsou známkou toho, že něco selhalo.

## Kdy volat lékaře

- silné krvácení jako při menstruaci nebo silnější,
- prudká, narůstající bolest v podbřišku,
- horečka nad 38 °C,
- rychle rostoucí obvod břicha, dušnost nebo výrazně snížené močení.

> Tento text popisuje obvyklý průběh a nenahrazuje pokyny vaší kliniky ani konzultaci s lékařem. Postupy se mezi pracovišti liší — vždy se řiďte tím, co vám řekl váš ošetřující lékař.`,
      minutes: 8,
      phases: ['transfer'],
      dayRange: [0, 1],
      topics: ['transfer', 'klinika', 'embryologie'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-08',
      boost: 0.9,
    },
    {
      id: 'tww-plny-mocovy-mechyr',
      kind: 'article',
      title: 'Plný močový měchýř: nejnepříjemnější část celého transferu',
      excerpt:
        'Nikdo vám neřekne, kolik přesně vypít a kdy — a přitom právě tohle rozhoduje o tom, jestli budete zákrok prožívat v klidu, nebo v křeči.',
      body: `## Proč se to vůbec chce

Při přenosu embrya se katétr většinou navádí ultrazvukem přes břišní stěnu. **Naplněný močový měchýř funguje jako akustické okno** — posune střevní kličky, narovná úhel mezi hrdlem a tělem dělohy a udělá z dutiny děložní dobře viditelný cíl. Lékař pak vidí, kam přesně embryo ukládá, a nemusí odhadovat.

Není to tedy rozmar. Je to praktická podmínka přesnosti.

Na některých pracovištích se používá ultrazvuk přes pochvu nebo se transfer provádí bez zobrazení — tam se plný měchýř nevyžaduje. **Vždy platí pokyn vaší kliniky, ne článek na internetu.**

## Kolik a kdy pít

Obvyklý pokyn zní vypít zhruba půl litru až litr čisté vody přibližně hodinu před plánovaným časem výkonu a pak už nechodit na toaletu. Přesné množství i načasování se ale liší podle pracoviště a podle vás — někdo se naplní za dvacet minut, někdo za hodinu.

Praktické zásady, které fungují:

- **Pijte čistou vodu**, ne kávu ani perlivé nápoje. Kofein je diuretikum a bublinky přidají tlak, který nepotřebujete.
- **Pijte plynule**, ne naráz. Litr vypitý na ex znamená čtvrt hodiny nesnesitelného napětí a pak úlevu v nesprávnou chvíli.
- **Počítejte se zpožděním.** Kliniky nabírají podle laboratoře, ne podle hodinek. Zpoždění třiceti minut je běžné.
- **Zeptejte se sestry, jak jste na tom.** Když už to nezvládáte, řekněte to — někde vás nechají trochu odpustit a znovu dopít. Trpět v tichosti nikomu nepomůže.

## Když jste to přehnala

Přeplněný měchýř paradoxně zhoršuje viditelnost i pohodlí a některým ženám vyvolá reflexní stahy. Pokud máte pocit, že už to opravdu nejde, řekněte to dřív, než si lehnete na křeslo. Sestra vám poradí — na většině pracovišť je tohle denní rutina a nikoho tím nepřekvapíte.

## Když se naopak nemůžete naplnit

Někomu se to stane, zvlášť při nervozitě. Pomáhá:

- začít pít o něco dřív, než je pokyn,
- pít vlažnou, ne ledovou vodu,
- v čekárně se projít místo sezení.

## Po transferu na toaletu můžete

**A měla byste.** Zadržování moči po přenosu nemá žádný smysl a embryu neuškodí, když se vymočíte. Embryo je v dutině děložní, ne v pochvě, a s močením nemá anatomicky nic společného. Tenhle strach je jeden z nejrozšířenějších a jeden z nejzbytečnějších.

Stejně tak vám embryo „nevypadne", když vstanete, sednete si nebo se ohnete. Dutina děložní není nádoba s vodou — je to úzký prostor, jehož stěny jsou v kontaktu.

## Malý plán na den transferu

1. Ráno se lehce najezte — plný měchýř na lačno je horší.
2. Zjistěte si předem, kde je na klinice nejbližší toaleta.
3. Vezměte si vložku — po zákroku může odtéct trochu média nebo dezinfekce a působí to znepokojivě, i když to nic neznamená.
4. Vezměte si láhev vody na dopití po výkonu. Dehydratace vám neprospěje, hlavně pokud jste po stimulaci.

## Kdy volat lékaře

- nemůžete se po zákroku vůbec vymočit déle než několik hodin,
- pálení a řezání při močení, které trvá i další den,
- horečka nad 38 °C,
- silné krvácení nebo prudká bolest v podbřišku.

> Tento text má informativní charakter a nenahrazuje pokyny vaší kliniky. Konkrétní množství tekutin i časování konzultujte se svým ošetřujícím lékařem nebo sestrou.`,
      minutes: 6,
      phases: ['transfer'],
      dayRange: [0, 0],
      topics: ['transfer', 'klinika', 'sebepece'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-09-15',
      boost: 0.6,
    },
    {
      id: 'tww-checklist-den-transferu',
      kind: 'checklist',
      title: 'Checklist: den transferu',
      excerpt:
        'Všechno, co si máte vzít, zeptat se a zařídit — abyste v den transferu nemusela nic řešit hlavou, která je jinde.',
      body: `## Jak checklist použít

Projděte ho večer před transferem, ne ráno. Ráno budete nervózní a nebudete mít čas nic dohánět.

Položky jsou rozdělené do tří skupin: **co si vzít**, **na co se zeptat na klinice** a **co zařídit doma**. Nepovinné položky jsou označené — nejsou zbytečné, jen nejsou nutné.

## Proč zrovna tohle

Většina žen si den transferu pamatuje jako mlhu. Ne proto, že by byl náročný fyzicky, ale proto, že je emočně přetížený. Informace, které toho dne slyšíte, se v hlavě neuloží. Proto je v checklistu tolik položek typu „zapsat si" — nejde o nedůvěru ve vaši paměť, jde o realitu stresové situace.

Poslední skupina, „co zařídit doma", vypadá banálně. Přesně ta ale rozhoduje o tom, jestli večer po transferu budete ležet v klidu, nebo shánět po lékárnách progesteron, protože vám došel.

> Checklist nenahrazuje pokyny vaší kliniky. Pokud se váš papír od lékaře v čemkoli liší, platí on.`,
      minutes: 4,
      phases: ['transfer'],
      dayRange: [0, 0],
      topics: ['transfer', 'klinika'],
      level: 'essential',
      hero: 'linen',
      author: 'Tým Bloomia',
      publishedOn: '2025-09-22',
      checklist: [
        { id: 'tww-cl-t-1', text: 'Doklad totožnosti a kartička pojišťovny', group: 'Co si vzít' },
        {
          id: 'tww-cl-t-2',
          text: 'Papíry od kliniky a plán medikace',
          hint: 'Včetně toho, co užíváte dnes ráno.',
          group: 'Co si vzít',
        },
        { id: 'tww-cl-t-3', text: 'Teplé ponožky', hint: 'Na sále bývá chladno a nohy jsou na opěrkách.', group: 'Co si vzít' },
        { id: 'tww-cl-t-4', text: 'Volné oblečení, které netlačí v pase', group: 'Co si vzít' },
        { id: 'tww-cl-t-5', text: 'Vložka do kalhotek na cestu domů', hint: 'Po výkonu může odtéct trochu média nebo dezinfekce.', group: 'Co si vzít' },
        { id: 'tww-cl-t-6', text: 'Láhev vody na dopití po výkonu', group: 'Co si vzít' },
        { id: 'tww-cl-t-7', text: 'Nabitý telefon a něco ke čtení', hint: 'Čekání bývá delší než samotný přenos.', group: 'Co si vzít' },
        { id: 'tww-cl-t-8', text: 'Doprovod, pokud to klinika umožňuje', optional: true, group: 'Co si vzít' },
        { id: 'tww-cl-t-9', text: 'Zeptat se, v jakém stadiu je přenášené embryo', group: 'Na co se zeptat' },
        { id: 'tww-cl-t-10', text: 'Zeptat se, kolik embryí jde na zamrazení a kdy se to dozvím', group: 'Na co se zeptat' },
        { id: 'tww-cl-t-11', text: 'Zapsat si přesné datum a čas odběru beta hCG', group: 'Na co se zeptat' },
        {
          id: 'tww-cl-t-12',
          text: 'Zapsat si plán podpory luteální fáze',
          hint: 'Co, kolikrát denně, jak dlouho a co dělat při vynechání dávky.',
          group: 'Na co se zeptat',
        },
        { id: 'tww-cl-t-13', text: 'Uložit si telefon na kliniku a zjistit, kdo drží víkendovou pohotovost', group: 'Na co se zeptat' },
        { id: 'tww-cl-t-14', text: 'Požádat o fotku embrya', optional: true, group: 'Na co se zeptat' },
        { id: 'tww-cl-t-15', text: 'Zkontrolovat zásobu léků na celé dva týdny dopředu', hint: 'Včetně víkendu a svátků.', group: 'Co zařídit doma' },
        { id: 'tww-cl-t-16', text: 'Nastavit si připomínky na užívání medikace', group: 'Co zařídit doma' },
        { id: 'tww-cl-t-17', text: 'Domluvit s partnerem, jak dnes večer chcete strávit čas', group: 'Co zařídit doma' },
        { id: 'tww-cl-t-18', text: 'Vyřešit práci na následující den', hint: 'Nemusíte být doma, ale plánovat na zítřek prezentaci roku je zbytečné.', group: 'Co zařídit doma' },
        { id: 'tww-cl-t-19', text: 'Mít doma hotové jídlo na večer', optional: true, group: 'Co zařídit doma' },
        { id: 'tww-cl-t-20', text: 'Rozmyslet si, komu o dnešku řeknete a komu ne', group: 'Co zařídit doma' },
      ],
    },
    {
      id: 'tww-po-transferu-myty-vs-realita',
      kind: 'article',
      title: 'Co po transferu smíte a co ne: mýty proti realitě',
      excerpt:
        'Ležení, létání, sex, káva, cvičení, horká koupel — projdeme každý zákaz zvlášť a řekneme si, co za ním skutečně stojí.',
      body: `## Odkud se ty zákazy berou

Většina „pravidel" po transferu nevznikla v laboratoři. Vznikla z představy, že embryo je v děloze volně položené a může se posunout, vypadnout nebo se otřást. Tahle představa je anatomicky mylná — **dutina děložní je štěrbina, jejíž stěny jsou v kontaktu**, ne dutá nádoba s tekutinou.

To neznamená, že po transferu můžete cokoli. Znamená to, že rozumných omezení je málo a zbytek je folklor, který stojí spoustu zbytečného stresu.

## Ležení v posteli

**Mýtus:** čím déle budete ležet, tím větší šance.

**Realita:** delší klid na lůžku po transferu se v odborných doporučeních neprosadil jako přínosný. Dlouhé nehybné ležení navíc zhoršuje náladu, spánek i prokrvení a u žen po stimulaci zvyšuje riziko trombózy.

**Co dělat:** žijte normálně. Klidný den, ne ležení v temné místnosti.

## Létání

**Mýtus:** letadlo je po transferu zakázané.

**Realita:** tlak v kabině ani letecká výška samy o sobě implantaci neovlivňují. Problém je jinde — dlouhé sezení bez pohybu a **riziko žilní trombózy**, které je po stimulaci vyšší, a fakt, že v cizině nemáte svou kliniku na telefonu.

**Co dělat:** krátký let po domluvě s lékařem obvykle není překážka. Dlouhý let po čerstvém transferu proberte s lékařem vždy. Při jakékoli cestě pijte, choďte po uličce a mějte kompresní podkolenky.

## Sex

**Mýtus:** sex embryo vyplaví.

**Realita:** to se nestane. Kliniky se ale v doporučeních liší — některá pracoviště doporučují se pohlavního styku v luteální fázi zdržet, hlavně po čerstvém cyklu, kde jsou vaječníky zvětšené a stahy dělohy nejsou žádoucí.

**Co dělat:** řiďte se pokynem své kliniky. Pokud jste ho nedostala, zeptejte se — je to legitimní otázka, ne trapná.

## Káva

**Mýtus:** ani doušek.

**Realita:** doporučení směřují k omezení kofeinu, ne k jeho úplnému vyloučení. Náhlé vysazení kávy u pravidelné konzumentky navíc vyvolá bolesti hlavy a podrážděnost, což vám v tomhle období opravdu nepomůže.

**Co dělat:** jedno menší kafe denně bývá v pořádku, přesné množství proberte s lékařem. Nezapomeňte, že kofein je i v čaji, kole a čokoládě.

## Cvičení

**Mýtus:** dva týdny nezvedat ruce nad hlavu.

**Realita:** to je čirá pověra. Rozumná omezení jsou dvě: **vysoká zátěž** (těžké břemena, silový trénink na maximum, HIIT) a **skoky a otřesy**, hlavně pokud jste po stimulaci a máte zvětšené vaječníky — tam existuje riziko torze vaječníku.

**Co dělat:** chůze, protažení, běžný pohyb ano. Maraton, crossfit a zvedání skříně ne.

## Horká koupel, sauna, wellness

**Mýtus:** teplo embryo „uvaří".

**Realita:** krátká vlažná sprcha je bez problému. Sauna, vířivka a horká vana ale zvyšují tělesnou teplotu, rozšiřují cévy a mohou vyvolat mdlobu — a **v místech se stojatou teplou vodou je i vyšší riziko infekce**. Proto se v tomhle období obvykle nedoporučují.

**Co dělat:** sprchujte se vlažně, saunu odložte.

## Zvedání a nošení

Běžné věci — taška s nákupem, dítě, které vás objímá — nejsou problém. Vyhněte se opakovanému zvedání skutečně těžkých břemen.

## Barvení vlasů, zubař, léky na bolest

- **Barvení vlasů** není zakázané; pokud vám to není příjemné, odložte to, nic neztratíte.
- **Zubař** ano, i akutní ošetření. Vždy řekněte, že jste po embryotransferu.
- **Léky proti bolesti a jakékoli volně prodejné přípravky** vždy konzultujte — některé běžné látky nejsou v tomto období vhodné. Neřiďte se radou z diskuse.

## Co skutečně stojí za dodržení

1. **Užívat podporu luteální fáze přesně podle pokynu.** Tohle je jediná věc na seznamu, která má prokazatelný vliv.
2. **Nekouřit a nepít alkohol.**
3. **Dostatečně pít a nepřehřívat se.**
4. **Hlídat varovné příznaky** a mít telefon na kliniku po ruce.

## Kdy volat lékaře

- silné krvácení, silnější než menstruace, nebo se sraženinami,
- prudká jednostranná bolest v podbřišku,
- horečka nad 38 °C,
- rychle rostoucí obvod břicha, dušnost, výrazně snížené močení nebo prudký nárůst hmotnosti (podezření na OHSS),
- bolest, otok nebo zarudnutí lýtka.

> Tento článek shrnuje obecně sdílená doporučení a nenahrazuje pokyny vaší kliniky ani konzultaci s ošetřujícím lékařem. Pokud se vaše doporučení liší, řiďte se jím.`,
      minutes: 10,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 5],
      topics: ['transfer', 'cekani', 'pohyb', 'strava', 'sebepece'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-29',
      boost: 1,
    },
    {
      id: 'tww-lezeni-po-transferu',
      kind: 'article',
      title: 'Mám ležet? Poctivá odpověď na nejčastější otázku po transferu',
      excerpt:
        'Ležení nezvyšuje šanci, ale spoustě žen dává pocit kontroly — a právě o tom je tenhle text.',
      body: `## Krátká odpověď

Nemusíte. Prodloužený klid na lůžku po embryotransferu se v odborných doporučeních neetabloval jako opatření, které zvyšuje šanci na otěhotnění. Naopak — dlouhé nehybné ležení má svá vlastní rizika.

## Proč se to tak dlouho dělalo

Zvyk pochází z doby, kdy se transfery prováděly jinak a kdy vládla představa, že gravitace hraje roli. Kliniky nechávaly ženy ležet hodiny. Postupem času se ukázalo, že tenhle rituál výsledek nemění, a většina pracovišť ho zkrátila na pár minut nebo zrušila úplně.

Přesto se drží v hlavách. Protože je to jediná věc, kterou v těch dvou týdnech můžete „udělat".

## Co ležení skutečně dělá

**Co nedělá:**
- nedrží embryo na místě — nikam se nekutálí,
- nezvyšuje prokrvení dělohy,
- nekompenzuje nic, co proběhlo v laboratoři.

**Co může udělat:**
- zhorší náladu a prohloubí pocit, že jste nemocná,
- zhorší spánek,
- **u žen po stimulaci zvyšuje riziko žilní trombózy** — to je reálné riziko, ne teoretické,
- zvýší zácpu, kterou už tak často způsobuje progesteron.

## Kdy je klid na místě

Existují situace, kdy vám lékař klidový režim doporučí — například při výraznějším ovariálním hyperstimulačním syndromu, při krvácení nebo z jiného konkrétního důvodu ve vaší anamnéze. **To je individuální doporučení a má přednost před tímto článkem.**

Rozdíl je zásadní: klid „pro jistotu" versus klid indikovaný lékařem kvůli konkrétnímu nálezu.

## Co dělat místo toho

Zlatý střed vypadá takhle:

- **Den transferu ber jako lehký den.** Nikam nespěchejte, nedávejte si na večer nic náročného.
- **Další dny žijte normálně.** Práce, procházka, běžná domácnost.
- **Vyhněte se extrémům** — vysoké zátěži, skokům, těžkému zvedání, přehřátí.
- **Choďte.** Dvacet minut chůze denně dělá pro vaši hlavu i cévy víc než dva dny na gauči.

## Když vám ležení psychicky pomáhá

Tady je poctivá věc, kterou vám většina článků neřekne: **pokud vám den nebo dva klidu dávají pocit, že jste udělala všechno, co šlo, není to špatně.** Neuškodí to. Jen si prosím nedávejte to břemeno, že když půjdete v pátek do práce, bude to vaše vina.

To je totiž ta skutečná cena mýtu o ležení. Ne pár dní na gauči, ale věta „kdybych tehdy ležela" v případě, že to nevyjde. Ta věta není pravdivá — a je krutá.

## Co když jsem už něco „porušila"

Vyšla jste ráno se psem, uklidila jste kuchyň, zvedla jste nákup. Nic z toho embryo neohrozí. Implantace nebo neimplantace se odehrává na úrovni, kterou schodiště neovlivní.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká bolest v podbřišku,
- horečka nad 38 °C,
- bolest, otok nebo zarudnutí lýtka, dušnost, bolest na hrudi,
- rychle rostoucí břicho a snížené močení.

> Text má informativní charakter a nenahrazuje doporučení vašeho lékaře. Pokud jste dostala individuální pokyn ke klidovému režimu, řiďte se jím.`,
      minutes: 6,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 4],
      topics: ['transfer', 'cekani', 'pohyb', 'psychika'],
      level: 'deep',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-10-06',
      boost: 0.5,
    },
    {
      id: 'tww-sex-po-transferu',
      kind: 'article',
      title: 'Sex a intimita v období po transferu',
      excerpt:
        'Otázka, kterou se většina žen stydí zeptat na klinice, a přitom má naprosto věcnou odpověď.',
      body: `## Co se opravdu ptáte

Za otázkou „můžeme mít sex?" se obvykle skrývají tři jiné: *ublížíme tím embryu?*, *je to ode mě sobecké chtít?* a *jak dlouho ještě budeme takhle žít?*

Pojďme na všechny tři.

## Ublížíme tím embryu?

Ne, embryo se pohlavním stykem nevyplaví ani neposune. Anatomicky to nedává smysl — embryo je v dutině děložní, za uzavřeným děložním hrdlem.

Přesto řada klinik doporučuje zdržet se styku od transferu do odběru beta hCG, případně i déle. Důvody jsou tři a jsou věcné:

1. **Po čerstvém cyklu jsou vaječníky zvětšené.** Hluboká penetrace může být bolestivá a v krajním případě přispět k torzi vaječníku. Tohle je nejsilnější důvod.
2. **Orgasmus vyvolává stahy dělohy.** Není doloženo, že by uškodily, ale klinika je z opatrnosti nechce.
3. **Zavedený progesteron v pochvě** a riziko podráždění či infekce.

**Praktický závěr:** platí to, co vám řekla vaše klinika. Pokud jste žádný pokyn nedostala, zeptejte se — nejlépe hned, sestry tuhle otázku slyší denně.

## Když vám doporučili se zdržet

Zdržet se pohlavního styku neznamená zdržet se blízkosti. Tenhle rozdíl bývá pro páry v léčbě zásadní a málokdo ho pojmenuje nahlas.

- **Dotyk bez cíle.** Objetí, masáž zad, spaní u sebe.
- **Blízkost bez výkonu.** Sex se v léčbě neplodnosti často promění v úkol s termínem. Tohle je paradoxně období, kdy z něj úkol být nemusí.
- **Řekněte nahlas, co potřebujete.** Většina partnerů netuší, jestli je vaše odtažitost strach z ublížení embryu, únava z hormonů, nebo zlost.

## Když se vám nechce

Progesteron, nafouklé břicho, únava, nervozita a pocit, že vaše tělo je poslední měsíce spíš pracoviště než tělo — to všechno je dost důvodů. Nemusíte to zdůvodňovat.

Co pomáhá říct: *„Nechci sex, ale chci tebe. Potřebuju, abys byl blízko."* Ta věta zabrání spoustě nedorozumění.

## Když se naopak chce vám a jemu ne

Stává se to a bývá to bolestivější, protože se o tom mluví ještě míň. Muži v léčbě často vypnou touhu ze strachu — bojí se ublížit, bojí se selhat, bojí se dalšího zklamání. Nebývá to o vás.

## Po pozitivní betě

I tady platí pokyn kliniky. Po nekomplikovaném začátku těhotenství bývá sex obvykle možný; při krvácení, bolestech nebo konkrétním nálezu vám lékař řekne jinak. **Nikdy si tuhle otázku neodpovídejte podle diskusního fóra.**

## Kdy volat lékaře

- krvácení po styku, které je silnější než slabé špinění,
- prudká bolest v podbřišku, zvlášť jednostranná,
- bolestivý styk, který přetrvává,
- horečka nad 38 °C, páchnoucí výtok, pálení při močení.

> Tento text nenahrazuje doporučení vaší kliniky. Pokud jste dostala konkrétní pokyn, platí on.`,
      minutes: 5,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 12],
      topics: ['transfer', 'vztah', 'partner', 'cekani'],
      level: 'deep',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2025-10-13',
    },
    {
      id: 'tww-progesteron-luteani-podpora',
      kind: 'article',
      title: 'Podpora luteální fáze: proč po transferu užíváte progesteron',
      excerpt:
        'Není to placebo ani „pro jistotu" — je to náhrada za něco, co váš cyklus po IVF nedokáže sám.',
      body: `## Co je luteální fáze

Luteální fáze je druhá polovina cyklu — od ovulace do menstruace nebo do nástupu těhotenství. V přirozeném cyklu ji řídí **žluté tělísko**, útvar, který vznikne z prasklého folikulu a produkuje **progesteron**. Progesteron připraví děložní sliznici tak, aby se do ní embryo mohlo zahnízdit, a udrží ji, dokud tuhle roli nepřevezme placenta.

## Proč se po IVF musí doplňovat

Po cyklu IVF bývá vlastní tvorba progesteronu nedostatečná. Důvodů je několik:

- **Odsátí folikulů při punkci** odstraní i část buněk, ze kterých by žluté tělísko vzniklo.
- **Léky použité ke stimulaci a k potlačení předčasné ovulace** naruší přirozenou hormonální zpětnou vazbu.
- **V kryocyklu s hormonální přípravou** ovulace vůbec neproběhne — žluté tělísko tedy neexistuje a veškerý progesteron musí přijít zvenčí.

Proto se podpora luteální fáze považuje za standardní součást léčby, ne za nadstavbu.

## Jakými cestami se podává

Formy se liší podle pracoviště a podle vás:

- **vaginální** — čípky, kapsle nebo gel; nejčastější varianta, protože působí přímo v děloze,
- **injekční do svalu** — používá se v některých protokolech a při určitých situacích,
- **perorální nebo podjazyková** — jako doplněk nebo alternativa,
- někdy se přidávají **další léky**, například estrogeny, hlavně v kryocyklech.

**Kterou formu, v jaké dávce a jak dlouho — to určuje výhradně váš lékař.** Na internetu najdete desítky rozporuplných schémat; žádné z nich není vaše.

## Nejdůležitější věta celého článku

**Nikdy podporu luteální fáze nevysazujte sama, ani když začnete krvácet, ani když si uděláte negativní test.** Krvácení při užívaném progesteronu neznamená automaticky konec a předčasné vysazení může uškodit v případě, že těhotenství probíhá. O ukončení rozhoduje lékař na základě výsledku beta hCG.

## Praktické zásady užívání

1. **Držte se časů.** Pravidelnost je u progesteronu důležitější, než si většina žen myslí. Nastavte si připomínky.
2. **Vaginální formy zavádějte vleže** a zůstaňte chvíli ležet — vstřebávání je pak spolehlivější a méně toho vyteče.
3. **Počítejte s výtokem.** Zbytky nosiče odcházejí a vypadají jako drobivý bílý výtok. Nepletlo by se to s neúspěchem — je to jen zbytek přípravku.
4. **Když dávku vynecháte,** vezměte ji co nejdřív, ale nezdvojujte. Při opakovaném vynechání volejte kliniku.
5. **Mějte zásobu na celé období**, včetně víkendů a svátků.

## Co progesteron dělá s vaším tělem

Napětí prsou, únava, nafouklé břicho, mírné křeče, změny nálady, zácpa, nevolnost, ospalost. Zní to povědomě? Ano — **jsou to prakticky stejné příznaky, jaké má rané těhotenství.** Právě proto nelze z příznaků v tomhle období usuzovat na výsledek. Podrobněji o tom píšeme v samostatném článku o příznacích.

## Jak dlouho se to bere

Doba se výrazně liší podle typu cyklu a zvyklostí pracoviště — od ukončení při negativní betě až po pokračování do zhruba 10.–12. týdne těhotenství. **Nechte si to napsat na papír** a při pozitivním výsledku si vždy potvrďte, jak dál.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká bolest v podbřišku,
- horečka nad 38 °C, silně páchnoucí výtok, pálení a svědění,
- alergická reakce — vyrážka, otok, dušnost,
- bolest, otok nebo zarudnutí lýtka,
- opakovaně vynechané dávky.

> Tento text popisuje princip podpory luteální fáze obecně. Nestanovuje diagnózu ani dávkování. Konkrétní přípravek, dávku i délku užívání vám určí výhradně váš ošetřující lékař.`,
      minutes: 8,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 14],
      topics: ['hormony', 'leky', 'cekani', 'transfer'],
      level: 'essential',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-20',
      boost: 0.85,
    },
    {
      id: 'tww-progesteron-prakticky',
      kind: 'article',
      title: 'Progesteron v praxi: výtok, otoky, mlha v hlavě a jak s tím žít',
      excerpt:
        'Nikdo vás nepřipraví na to, že budete dva týdny nosit vložku a mít pocit, že myslíte přes vatu.',
      body: `## Tohle není o dávkování

Kolik a jak dlouho, to určuje váš lékař. Tenhle článek je o tom, co vám na klinice obvykle neřeknou: jak se s podporou luteální fáze reálně žije.

## Výtok, který děsí

Vaginální formy progesteronu obsahují nosič, který se nevstřebá celý. Zbytek odchází — jako **bílý drobivý výtok, mazlavá hmota nebo hrudky**. Objevuje se hlavně ráno a po delším stání.

Co je dobré vědět:

- Je to normální a neznamená to, že se přípravek nevstřebal. Účinná látka se vstřebá i tehdy, když nosič odejde.
- **Noste slabé vložky, ne tampony.** Tampony v tomhle období nepoužívejte.
- Zavádění vleže večer omezuje množství toho, co odteče.
- Pokud výtok **zapáchá, je nazelenalý, žlutý nebo pálí a svědí**, volejte lékaře — to už není nosič.

## Únava, která není normální únava

Progesteron má tlumivý účinek na centrální nervovou soustavu. Řada žen popisuje pocit „mlhy" — hůř se soustředí, hledají slova, usínají u seriálu v osm večer.

Co pomáhá:

- **Neplánujte na tohle období nejnáročnější věci v práci**, pokud to jde ovlivnit.
- **Pište si věci.** Nespoléhejte na paměť, teď vám nefunguje jako obvykle.
- **Krátká procházka** funguje na tuhle únavu lépe než káva.
- **Nejezděte autem, když se cítíte otupělá.** Zní to přehnaně, není.

## Nafouklé břicho a zácpa

Progesteron zpomaluje střevní peristaltiku. Kombinace s nafouklým břichem po stimulaci umí být opravdu nepříjemná — a navíc svádí k domněnce, že „něco cítíte".

- Pijte dost, opravdu dost.
- Vláknina postupně, ne skokově.
- Choďte. Chůze je na tohle nejlepší.
- **Projímadla ani žádné volně prodejné přípravky neužívejte bez konzultace.**

## Nálada

Výkyvy nálad, plačtivost, podrážděnost, úzkost. Kombinace hormonů a čekání je pro psychiku jedno z nejtěžších období celé léčby. Není to slabost a není to signál, že „to nezvládáte".

Pomáhá vědět, že to má hormonální složku. Nepomáhá si to vyčítat.

## Napětí prsou a další „těhotenské" příznaky

Progesteron je vyvolá skoro vždy. **To, že je cítíte, neříká nic o výsledku.** A to, že je necítíte, taky ne.

## Injekční formy

Pokud máte progesteron do svalu, počítejte s tím, že místa vpichu bolí a mohou tvrdnout.

- Střídejte strany.
- Po aplikaci pomáhá krátce se projít.
- Teplý obklad na místo po vpichu (ne horký).
- **Zarudnutí, které se zvětšuje, tvrdý bolestivý uzel nebo horečka patří k lékaři.**

## Praktický minisystém na dva týdny

1. Připomínky v telefonu na každou dávku, se zvukem.
2. Krabička s léky na viditelném místě, ne v tašce.
3. Zásoba na celé období včetně víkendu.
4. Poznámka v telefonu: co jsem kdy vzala. Při dotazu na klinice budete mít odpověď.
5. Vložky do zásoby v koupelně, v kabelce i v práci.

## Kdy volat lékaře

- horečka nad 38 °C,
- páchnoucí, zbarvený výtok, silné pálení nebo svědění,
- vyrážka, otok obličeje, dušnost — možná alergická reakce,
- bolest, otok nebo zarudnutí lýtka,
- silné krvácení nebo prudká bolest v podbřišku,
- v místě injekce rostoucí zarudnutí, tvrdý bolestivý útvar nebo horečka.

> Text má informativní charakter a nenahrazuje lékařskou péči. Nikdy neměňte dávkování ani přípravek bez pokynu svého lékaře a podporu luteální fáze nevysazujte sama.`,
      minutes: 7,
      phases: ['two_week_wait', 'transfer'],
      dayRange: [1, 14],
      topics: ['leky', 'hormony', 'sebepece', 'cekani'],
      level: 'deep',
      hero: 'sand',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2025-10-27',
    },
    {
      id: 'tww-priznaky-nic-neznamenaji',
      kind: 'article',
      title: 'Příznaky během čekání a proč z nich nic nevyčtete',
      excerpt:
        'Napětí prsou, křeče, nevolnost i naprostý klid — všechno tohle mají ženy těhotné i netěhotné, a důvod je hormonální.',
      body: `## Nejkrutější hra dvou týdnů

Sledování příznaků je návykové. Každé píchnutí, každý pocit v prsou, každá vlna nevolnosti se stane důkazem — nejdřív pro, pak proti. Ženy popisují, že v tomhle období vnímají své tělo intenzivněji než kdykoli jindy v životě. A že je to vyčerpávající.

Tenhle text vám nemá vzít naději. Má vám vzít **falešný nástroj**, kterým se dva týdny týráte.

## Proč příznaky nic neříkají

Odpověď je jednoduchá a nepříjemná: **progesteron, který užíváte, dělá s tělem prakticky totéž, co rané těhotenství.**

Progesteron způsobuje:

- napětí, bolestivost a zvětšení prsou,
- únavu a ospalost,
- nevolnost,
- nafouklé břicho a zácpu,
- mírné tahavé bolesti v podbřišku,
- změny nálady a plačtivost,
- zvýšenou bazální teplotu,
- častější močení.

Přečtěte si ten seznam znovu. To je zároveň seznam „prvních příznaků těhotenství" z každého článku na internetu. **Rozdíl mezi těhotnou a netěhotnou ženou po transferu není v příznacích — je jen v krvi.**

## A co když nemám žádné příznaky?

Taky to nic neznamená. Ženy, kterým vyšla beta krásně, často popisují, že „vůbec nic necítily a byly si jisté, že to nevyšlo". A naopak.

Citlivost na progesteron je individuální. To, že vaše kamarádka byla ve druhém týdnu na dně, zatímco vy se cítíte jako obvykle, o výsledku neříká vůbec nic.

## Co říct na „mně to tehdy píchlo v boku a věděla jsem to"

Tenhle typ historky uslyšíte často. Funguje na ní **zpětné potvrzení** — ženy, kterým to vyšlo, si retrospektivně vybaví příznak a přisoudí mu význam. Ty, kterým to nevyšlo a měly úplně stejný pocit, žádnou historku nevypráví.

To není lhaní. Je to způsob, jakým funguje lidská paměť.

## Co je naopak dobré sledovat

Ne příznaky těhotenství, ale **varovné příznaky**:

- **krvácení** — slabé špinění se v tomhle období vyskytuje běžně, silné krvácení patří k lékaři,
- **bolest** — mírné tahání ano, prudká a narůstající bolest ne,
- **teplota** — horečka nad 38 °C vždy k lékaři,
- **známky OHSS** — rychle rostoucí břicho, dušnost, výrazně snížené močení, prudký nárůst hmotnosti,
- **známky trombózy** — bolest a otok lýtka, bolest na hrudi, dušnost.

Tenhle seznam má smysl znát nazpaměť. Ten druhý ne.

## Praktická obrana proti symptom spottingu

1. **Zrušte si vyhledávání.** Věta „7. den po transferu příznaky" vás dovede k tisícům protichůdných příběhů a k žádné informaci.
2. **Nepiště si deník příznaků.** U některých žen pomáhá cokoli zapisovat; u většiny to obsesi jen zesílí.
3. **Zaveďte si okno.** Například pět minut ráno, kdy si dovolíte kontrolovat, co cítíte. Zbytek dne ne.
4. **Pojmenujte, co se opravdu děje.** Většinou to není „mám nevolnost", ale „mám strach".
5. **Domluvte se s partnerem na jedné otázce denně**, ne na deseti.

## A co bazální teplota a další metody

Měření teploty v tomhle období nemá vypovídací hodnotu — progesteron ji drží nahoře bez ohledu na výsledek. Podobně to platí pro sledování hlenu nebo polohy čípku. Tyhle nástroje patří do jiné fáze cesty.

## Jediná spolehlivá odpověď

**Beta hCG z krve v termínu, který vám stanovila klinika.** Nic dřív, nic jiného. Ne proto, že by vás chtěl někdo napínat, ale proto, že dřívější informace je nespolehlivá a nespolehlivá informace v tomhle období bolí víc než čekání.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká, narůstající nebo jednostranná bolest v podbřišku,
- horečka nad 38 °C,
- rychlý nárůst obvodu břicha, dušnost, snížené močení, prudký nárůst hmotnosti,
- bolest, otok nebo zarudnutí lýtka.

> Tento článek nenahrazuje lékařskou péči. Při jakékoli pochybnosti volejte svou kliniku — od toho tam telefon je.`,
      minutes: 8,
      phases: ['two_week_wait'],
      dayRange: [1, 12],
      topics: ['cekani', 'psychika', 'hormony'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-11-03',
      boost: 0.95,
    },
    {
      id: 'tww-implantacni-krvaceni',
      kind: 'article',
      title: 'Implantační krvácení: co to je, jak vypadá a kdy to není ono',
      excerpt:
        'Nejobávanější skvrna na vložce má často nevinné vysvětlení — a existuje pár znaků, podle kterých poznáte, kdy zvednout telefon.',
      body: `## Co se v těle děje

Když se blastocysta zanořuje do děložní sliznice, naruší drobné cévy. Část krve může odejít ven — obvykle až s odstupem, protože cesta z dutiny děložní trvá. **Tomu se lidově říká implantační krvácení.**

Typicky by k němu mohlo dojít zhruba **pátý až desátý den po transferu blastocysty**, ale toto rozmezí je orientační a u řady žen se neobjeví vůbec.

## Jak obvykle vypadá

- **Množství:** velmi malé — kapky, stopa na toaletním papíře, hnědý flek na vložce.
- **Barva:** růžová, béžová, hnědá až tmavě hnědá. Hnědá barva znamená starší krev, tedy něco, co odešlo se zpožděním.
- **Trvání:** hodiny až dva dny.
- **Charakter:** nestupňuje se, nemá sraženiny, nepotřebuje vložku s vyšší savostí.

## Co ještě může špinění způsobit

Tohle je důležité, protože **naprostá většina špinění po transferu nemá s implantací nic společného**:

- **podráždění děložního hrdla** při zavádění katétru, při vaginálním ultrazvuku nebo při zavádění progesteronu,
- **vaginální progesteron sám o sobě** — sliznice je prokrvená a snadno krvácí,
- **eroze nebo polyp na čípku**, o kterém možná ani nevíte,
- **hormonální kolísání** ke konci luteální fáze,
- **infekce nebo záněty**.

## Kdy to není implantační krvácení

Zvedněte telefon, pokud:

- krvácení je **jako menstruace nebo silnější**,
- objevují se **sraženiny**,
- krvácení se **stupňuje** místo aby ustávalo,
- doprovází ho **prudká nebo jednostranná bolest**,
- máte **horečku** nebo **páchnoucí výtok**,
- cítíte **slabost, závrať, bušení srdce nebo bolest v rameni** — to jsou příznaky, které je třeba řešit neodkladně.

## Nejdůležitější věta

**Ani při krvácení nevysazujte podporu luteální fáze sama.** Zavolejte na kliniku a řiďte se tím, co vám řeknou. Krvácení nerovná se konec — a předčasné vysazení progesteronu může uškodit v případě, že těhotenství probíhá.

## Co udělat, když uvidíte krev

1. **Nadechněte se.** Vím, jak to zní. Ale panika vám v příštích deseti minutách nepomůže rozhodnout.
2. **Podívejte se, kolik toho je.** Vložka, ne toaletní papír, vám dá reálnou představu.
3. **Zapište si čas, barvu a množství.** Klinika se přesně na tohle bude ptát.
4. **Vezměte si vložku, ne tampon.**
5. **Zavolejte na kliniku**, pokud cokoli z výše uvedeného sedí na varovné příznaky — nebo prostě proto, že jste nejistá. To je legitimní důvod.

## Když se to stane večer nebo o víkendu

Proto jsme v checklistu na den transferu psaly, ať si zjistíte kontakt na pohotovostní službu. Pokud ho nemáte a jde o silné krvácení, prudkou bolest nebo mdloby, jeďte na gynekologickou pohotovost. **Vždy řekněte, že jste po embryotransferu a jaké léky užíváte.**

## A když nekrvácím vůbec?

Naprosto v pořádku. Většina žen, kterým transfer vyšel, žádné implantační krvácení nezaznamená. Nepřítomnost krvácení není špatné znamení, stejně jako jeho přítomnost není dobré.

## Kdy volat lékaře

- krvácení silnější než běžná menstruace nebo se sraženinami,
- prudká, narůstající nebo jednostranná bolest v podbřišku,
- bolest v rameni, mdloba, závrať, bušení srdce, studený pot,
- horečka nad 38 °C nebo páchnoucí výtok,
- krvácení, které trvá déle než dva dny nebo se zhoršuje.

> Tento text nenahrazuje vyšetření lékařem. Při krvácení v tomto období vždy kontaktujte svou kliniku — i když si myslíte, že „to nic není".`,
      minutes: 7,
      phases: ['two_week_wait', 'beta_positive'],
      dayRange: [4, 14],
      topics: ['cekani', 'vysledky', 'tehotenstvi'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP', 'ESHRE — doporučené postupy'],
      publishedOn: '2025-11-10',
      boost: 0.8,
    },
    {
      id: 'tww-2ww-psychicky',
      kind: 'article',
      title: 'Jak přežít dva týdny čekání, aniž byste se zbláznila',
      excerpt:
        'Nejde o to být klidná — jde o to mít strukturu, která vás unese, když klidná nebudete.',
      body: `## Proč je tohle nejtěžší část

Během stimulace máte úkoly. Píchání, odběry, ultrazvuky, punkce. Máte kam jít a co dělat. Po transferu se všechno zastaví. **Zůstane jen tělo, které nemůžete ovlivnit, a čas, který se táhne.**

To není vaše slabost. Je to strukturální vlastnost téhle fáze: maximum v sázce, minimum vlivu. Psychologicky je to jedna z nejhorších kombinací, jaká existuje.

## Zapomeňte na „nestresujte se"

Tuhle větu vám řekne někdo z rodiny, možná i někdo v bílém plášti. Je neužitečná a navíc škodlivá — přidává vám vinu za to, že cítíte, co logicky cítíte.

Stres z čekání sám o sobě nerozhoduje o výsledku. Vaše práce teď není být klidná. **Vaše práce je ty dva týdny prožít tak, aby vás nezničily** — bez ohledu na to, jak dopadnou.

## Čtyři věci, které fungují

### 1. Struktura místo rozjímání

Prázdný den je v téhle fázi nepřítel. Naplánujte si každý den tři konkrétní věci — jednu praktickou, jednu příjemnou, jednu s lidmi. Nemusí být velké. „Vyprat, kafe s Petrou, epizoda seriálu" je plnohodnotný plán.

### 2. Ohraničení internetu

Vyhledávání příznaků a fotek testů je v tomhle období jako škrábat ekzém. Uleví na deset vteřin a zhorší to.

Praktické řešení: **domluvte si s sebou konkrétní pravidlo.** Například: hledám maximálně jednou denně, patnáct minut, a jen na zdrojích, kterým věřím. Pravidlo funguje lépe než zákaz.

### 3. Jedna osoba, ne deset

Vyberte si jednoho člověka, se kterým to řešíte. Ne proto, že byste se měla skrývat, ale proto, že deset lidí znamená deset dotazů denně a deset různých rad. Ostatním můžete říct: *„Dám vědět, až budu vědět."*

### 4. Plán B napsaný předem

Zní to jako přivolávání neúspěchu. Není. Ženy, které mají předem promyšlené, co udělají, když beta vyjde negativní — komu zavolají, jestli půjdou do práce, kdy je kontrolní schůzka na klinice — popisují ten den jako výrazně snesitelnější.

Napište si to a zavřete do zásuvky. Doufejme, že to nebudete potřebovat.

## Co s tou nejhorší myšlenkou

*„Co když je to naposledy."*

Ta myšlenka přijde a vrátí se. Nesnažte se ji vytěsnit — vytěsňování ji zesiluje. Zkuste místo toho: **„Tahle myšlenka je teď se mnou. Nemusím na ni odpovídat."** Zní to jako trik. Je to trik. Funguje.

## Techniky, které stojí za pět minut

- **Dýchání 4–6:** nádech na čtyři doby, výdech na šest. Delší výdech tlumí nervový systém. Tři minuty stačí.
- **Ukotvení smysly:** pět věcí, které vidím, čtyři, které slyším, tři, kterých se dotýkám. Vytáhne vás to z hlavy do místnosti.
- **Chůze bez telefonu.** Dvacet minut. Nejlevnější antidepresivum, jaké máme.
- **Psaní ráno.** Tři strany rukou, cokoli. Nečíst, neopravovat.

## Práce: ano, nebo ne?

Neexistuje správná odpověď, ale existuje vzorec: **ženy, které zůstanou doma samy bez programu, to obvykle snášejí hůř.** Práce, která zaměstná hlavu a nevyžaduje fyzickou zátěž, bývá spíš úleva. Práce fyzicky náročná nebo emočně vyčerpávající je jiný příběh — o pracovní neschopnosti se poraďte s lékařem.

## Kdy vyhledat odbornou pomoc

Není žádná ostuda a není to selhání. Ozvěte se psychologovi nebo svému lékaři, pokud:

- nespíte několik nocí po sobě,
- máte panické ataky,
- nejste schopná fungovat v běžném dni,
- objevují se myšlenky, že by bylo lepší tu nebýt — **v tom případě vyhledejte pomoc okamžitě**, nečekejte na výsledek bety.

V Česku funguje bezplatná Linka první psychické pomoci 116 123, nonstop.

> Tento text nenahrazuje odbornou psychologickou ani lékařskou péči. Pokud se cítíte v ohrožení, kontaktujte krizovou linku nebo lékaře neprodleně.`,
      minutes: 9,
      phases: ['two_week_wait'],
      dayRange: [1, 14],
      topics: ['psychika', 'cekani', 'sebepece'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2025-11-17',
      boost: 0.9,
    },
    {
      id: 'tww-domaci-testy-brzke',
      kind: 'article',
      title: 'Domácí testy: proč brzké testování klame',
      excerpt:
        'Tři důvody, proč vám proužek osmý den po transferu neřekne pravdu — a co s tím, když už jste ho udělala.',
      body: `## Co domácí test měří

Těhotenský test z moči detekuje **hCG** — hormon, který začne produkovat zárodečná tkáň po zahnízdění. Test má práh citlivosti: pod určitou koncentrací nezobrazí nic, i když hCG v těle už je.

Z toho plynou všechny problémy.

## Důvod první: ještě tam není dost hCG

Po transferu blastocysty začíná tvorba hCG zhruba kolem šestého dne, ale nastupuje postupně a **hodnota v moči zaostává za hodnotou v krvi**. Sedmý ani osmý den proto negativní test často neznamená nic — jen to, že jste testovala brzy.

Ke všemu se implantace nemusí odehrát „podle učebnice". Rozdíl jednoho dne v načasování zahnízdění posune celou křivku.

## Důvod druhý: hCG z injekce

Pokud jste dostala **injekci k dozrání vajíček obsahující hCG** (takzvaná spouštěcí injekce), zůstává v těle nějakou dobu — obvykle se popisuje rozmezí zhruba do deseti až čtrnácti dnů, individuálně se to liší.

Test v tom rozdíl nepozná. Zobrazí druhou čárku, která patří léku, ne těhotenství.

Tohle je nejkrutější varianta falešné naděje, jakou v léčbě potkáte. **Zeptejte se na klinice, jestli se vás to týká** — v kryocyklu obvykle ne, v čerstvém cyklu často ano.

## Důvod třetí: proužek neumí říct, co bude

I skutečně pozitivní časný test říká jen to, že hCG je v moči. Neřekne, jestli hodnota stoupá správně. Část velmi časných těhotenství se dál nerozvine — a žena, která testovala od sedmého dne, si projde nadějí a ztrátou dřív, než by o tom vůbec musela vědět.

Tomu se odborně říká biochemické těhotenství. Bolí to. A brzké testování počet těchto zážitků zvyšuje.

## „Já vím, že to nemám dělat, ale udělám to"

Řekněme si to na rovinu: **většina žen testuje doma.** Zákazy tady moc nefungují. Takže když už:

- **Netestujte dřív než devátý až desátý den po transferu blastocysty.** Dřívější výsledek nemá vypovídací hodnotu.
- **Testujte ranní moč** — je nejkoncentrovanější.
- **Použijte jeden typ testu**, ne pět značek. Různá citlivost = různé výsledky = zbytečné šílenství.
- **Netestujte několikrát denně.** Odpolední negativní test po ranním pozitivním vás zničí, aniž by cokoli znamenal.
- **Nefotografujte proužky a nedávejte je do skupin k posouzení.** Nikdo z fotky nic nepozná.
- **Ať výsledek vyjde jakkoli, na odběr krve jděte.** Test doma nenahrazuje betu — ani ten pozitivní.

## Co s velmi slabou čárkou

Slabá čárka může znamenat časné těhotenství, zbytek hCG z injekce, odpařovací linku nebo vadný test. Z fotky to nepozná ani lékař. **Odpověď dá jenom krev.**

## A co když test vyjde negativně a beta pozitivně

Stává se to a je to jeden z důvodů, proč kliniky testování doma nedoporučují. Testy z moči mají různou citlivost a některé ženy s prokazatelně stoupající betou mají doma ještě negativní proužek.

## Nejtěžší část: nevysazovat léky

**Ani po negativním domácím testu nevysazujte podporu luteální fáze.** Rozhodnutí patří lékaři a opírá se o hodnotu z krve.

## Kdy volat lékaře

- silné krvácení nebo prudká bolest v podbřišku,
- horečka nad 38 °C,
- pozitivní test doma spolu s bolestí v rameni, mdlobou nebo závratí,
- kdykoli si nejste jistá, jak dál s medikací.

> Tento text nenahrazuje lékařskou péči. O výsledku rozhoduje odběr beta hCG naordinovaný vaší klinikou, ne test z lékárny.`,
      minutes: 8,
      phases: ['two_week_wait'],
      dayRange: [6, 14],
      topics: ['cekani', 'vysledky', 'psychika'],
      level: 'essential',
      hero: 'pearl',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-11-24',
      boost: 0.95,
    },
    {
      id: 'tww-beta-hcg-zdvojeni',
      kind: 'article',
      title: 'Beta hCG: co to je číslo a proč se sleduje jeho zdvojení',
      excerpt:
        'Jedna hodnota vám toho o těhotenství řekne překvapivě málo — teprve dvě hodnoty za sebou dávají smysl.',
      body: `## Co se vlastně odebírá

**hCG** (lidský choriový gonadotropin) je hormon, který produkuje tkáň budoucí placenty poté, co se embryo zahnízdí. V krvi se stanovuje jako **beta hCG** a měří se v jednotkách na litr — nejčastěji IU/l nebo mIU/ml.

Krev je proti moči přesnější ze dvou důvodů: zachytí i velmi nízké koncentrace a **dá vám číslo**, ne čárku. A o čísla tady jde.

## Proč jedna hodnota nestačí

První beta je momentka. Její výše závisí na tom:

- kolik dní uplynulo od transferu,
- jestli šlo o blastocystu, nebo o embryo přenesené dříve,
- jak přesně se načasovalo zahnízdění,
- na individuální variabilitě, která je obrovská.

**Proto se rozpětí „normálních" hodnot překrývají tak, že z jednoho čísla nelze spolehlivě usuzovat na nic.** Existují těhotenství, která začala nízko a probíhala bez problémů, i vysoké hodnoty, které nepokračovaly.

Z toho plyne jediné rozumné doporučení: **nesrovnávejte své číslo s čísly cizích žen na internetu.** Nemají stejný den odběru, stejný typ transferu ani stejnou laboratoř.

## Proč se sleduje zdvojení

V raném těhotenství hodnota hCG **stoupá exponenciálně** — u většiny zdravě se vyvíjejících těhotenství se zhruba **zdvojnásobí přibližně za 48 až 72 hodin**. Tempo růstu je informativnější než výchozí číslo.

Proto vám klinika obvykle naordinuje **druhý odběr s odstupem dvou až tří dnů**. Teprve dvojice hodnot umožňuje posoudit dynamiku.

Několik důležitých výhrad:

- Tempo zdvojení **se s rostoucí hodnotou zpomaluje**. Po překročení určité úrovně se hCG zdvojnásobuje pomaleji a je to zcela normální.
- Hodnoty **z různých laboratoří nejsou vždy plně srovnatelné**. Ideální je odebírat na stejném místě.
- Zdvojení je statistický vzorec, ne zákon. **Hodnotí ho lékař v kontextu, ne kalkulačka na internetu.**

## Kdy se ještě nic neuvidí na ultrazvuku

Ultrazvuk má smysl až od určité hodnoty hCG a od určitého týdne. Proto vás klinika neposílá na sonografii hned po první pozitivní betě — ne proto, že by vás chtěla napínat, ale proto, že by nález nebyl vypovídající. Termín prvního ultrazvuku vám určí lékař.

## Co znamená, když hodnota nestoupá podle očekávání

Může to znamenat několik věcí a **žádnou z nich nelze určit z jednoho čísla**:

- těhotenství, které se dál nerozvíjí,
- **mimoděložní těhotenství** — proto se pomalý vzestup vždy sleduje pečlivě,
- pozdější zahnízdění a posunutou křivku,
- laboratorní nebo časovou odchylku.

Rozhodnutí, co dál, patří výhradně lékaři.

## Praktické věci kolem odběru

1. **Přijďte v termín, který vám dala klinika.** Ani o den dřív — hodnota by se hůř interpretovala.
2. **Na odběr obvykle nemusíte být nalačno**, ale ověřte si to.
3. **Nevysazujte léky** kvůli odběru ani po něm, dokud vám to lékař neřekne.
4. **Zeptejte se předem, kdy a jak se dozvíte výsledek**, a kdo vám ho sdělí.
5. **Zapište si přesnou hodnotu i datum a čas odběru.** Budete to potřebovat u druhého odběru.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká, zejména jednostranná bolest v podbřišku,
- **bolest v rameni, mdloba, závrať, studený pot** — možné příznaky mimoděložního těhotenství, řešte neodkladně,
- horečka nad 38 °C,
- rychle rostoucí břicho, dušnost, snížené močení.

> Tento text vysvětluje princip obecně, nestanovuje diagnózu a neuvádí konkrétní referenční hodnoty. Interpretace vašich výsledků patří výhradně vašemu lékaři.`,
      minutes: 9,
      phases: ['two_week_wait', 'beta_positive'],
      dayRange: [10, 14],
      topics: ['vysledky', 'hormony', 'cekani'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-12-01',
      boost: 0.9,
    },
    {
      id: 'tww-den-pred-odberem',
      kind: 'article',
      title: 'Den před odběrem krve: jak ho přežít',
      excerpt:
        'Poslední noc bývá nejhorší z celých dvou týdnů — má to důvod a dá se to zvládnout líp než zíráním do stropu.',
      body: `## Proč je zrovna tenhle den nejtěžší

Do teď jste mohla čekat. Zítra už budete vědět. **Mozek si tenhle přechod uvědomuje a reaguje na něj vyplavením stresových hormonů** — proto ta nespavost, sevřený žaludek a myšlenky, které se točí dokola.

Není to selhání. Je to poslední úsek.

## Praktická příprava (patnáct minut, a máte to)

1. **Ověřte si čas a místo odběru.** Na některých pracovištích se odebírá jen v určitých hodinách.
2. **Zjistěte, jestli máte být nalačno.** Většinou to není nutné, ale ověřte si to.
3. **Připravte si kartičku pojišťovny, žádanku a doklad.**
4. **Vezměte si ráno normální dávku léků**, pokud vám lékař neřekl jinak. Odběr na tom nic nemění.
5. **Zjistěte, kdy a jak se dozvíte výsledek** — telefonicky, přes portál, nebo si voláte vy? Tohle si ověřte dnes, ne zítra.
6. **Dejte si v práci na zítřek prostor.** Ideálně ne den, kdy vedete poradu.

## Co s dnešním večerem

Cílem není klid. Cílem je, aby vás dnešek nepohltil.

- **Program, ne prázdno.** Cokoli, co zabere ruce i hlavu: seriál, vaření, skládačka, dlouhá procházka.
- **Nezůstávejte sama**, pokud to jde. Když to nejde, domluvte si aspoň telefonát.
- **Vypněte vyhledávání.** Dnešní večer je nejhorší možná doba na čtení cizích příběhů.
- **Neplánujte na dnešek zásadní rozhovory.** Ani s partnerem, ani s matkou.

## Když nemůžete usnout

- **Dýchání s dlouhým výdechem** — nádech na čtyři doby, výdech na šest, po dobu tří minut.
- **Zapište si, co vám běží hlavou.** Papír na nočním stolku. Není to terapie, jen odkladiště.
- **Nedívejte se na hodiny.** Otočte je.
- **Když ležíte vzhůru přes půl hodiny, vstaňte.** Klidná činnost v tlumeném světle je lepší než boj v posteli.
- **Léky na spaní ani bylinné přípravky si sama nenasazujte** — v tomhle období konzultujte cokoli, i „úplně neškodný" čaj.

## Připravte si obě verze zítřka

Zní to drsně. Je to milosrdné.

**Kdyby to vyšlo:** komu zavoláte první? Co uděláte s tím dnem? Víte, kdy máte druhý odběr a kdy ultrazvuk?

**Kdyby to nevyšlo:** kdo za vámi přijede? Půjdete do práce, nebo ne? Máte v telefonu kontakt na kliniku, kde si domluvíte kontrolní konzultaci? Kdo tu zprávu předá rodině místo vás?

Napište si obě verze na papír. Zítra nebudete schopná uvažovat prakticky, ať to dopadne jakkoli.

## Co si ráno vzít s sebou

- kartičku pojišťovny a žádanku,
- něco k pití a malou svačinu na po odběru,
- sluchátka,
- doprovod, pokud chcete — nemusíte to zvládat sama.

## A jedna věc, kterou si nechte

Ať zítřek dopadne jakkoli, **za těch čtrnáct dní jste udělala všechno, co bylo ve vaší moci.** Užívala jste léky, chodila jste na kontroly, vstávala jste každé ráno do dne, který byl nesnesitelně dlouhý. Výsledek na tom nic nezmění.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká bolest v podbřišku,
- horečka nad 38 °C,
- rychle rostoucí obvod břicha, dušnost, snížené močení,
- pokud je vám psychicky tak zle, že nejste schopná fungovat — i to je důvod ozvat se.

> Text nenahrazuje lékařskou péči. Pokyny k odběru a k medikaci vám dává vaše klinika.`,
      minutes: 6,
      phases: ['two_week_wait'],
      dayRange: [12, 14],
      topics: ['cekani', 'psychika', 'vysledky', 'sebepece'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      publishedOn: '2025-12-08',
      boost: 0.7,
    },
    {
      id: 'tww-jak-si-rict-o-vysledek',
      kind: 'article',
      title: 'Jak si říct o výsledek a co se u toho ptát',
      excerpt:
        'Telefonát trvá dvě minuty a vy si z něj zapamatujete jedno slovo — proto se vyplatí mít otázky připravené předem.',
      body: `## Zjistěte si předem, jak to na vaší klinice chodí

Systémy se liší: někde volají oni vám, jinde voláte vy, jinde vám výsledek přijde do portálu nebo e-mailem. **Zjistěte si to den předem**, ať nesedíte u telefonu do večera a nedomýšlíte si.

Ptejte se konkrétně:

- Kdo mi volá a v jakém časovém rozmezí?
- Na jaké číslo se mám ozvat, když se nikdo neozve do určité hodiny?
- Uvidím výsledek sama v aplikaci nebo portálu dřív, než mi zavolají?

Poslední otázka je důležitá. **Ženy, kterým hodnota naskočila do aplikace bez komentáře, popisují ten okamžik jako jeden z nejhorších.** Pokud víte, že to tak funguje, můžete se rozhodnout, jestli se tam podíváte sama, nebo počkáte.

## Buďte na ten hovor připravená

- **Mějte po ruce papír a tužku.** Fakt tužku. Do telefonu si to nenapíšete a za hodinu si nebudete jistá, jestli tam byla pětka, nebo osmička.
- **Nebuďte za volantem.** Ani na jednání, ani v otevřené kanceláři.
- **Zapněte si hlasitý odposlech**, pokud je s vámi partner. Ušetří vám to opakování.

## Otázky, které se vyplatí položit

Napište si je předem, protože v tu chvíli je nevymyslíte:

1. **Jaká je přesná hodnota?** Ne „vyšlo to dobře". Číslo.
2. **Kolikátý den po transferu byl odběr?** Bez toho číslo nemá kontext.
3. **Kdy mám jít na kontrolní odběr?**
4. **Pokračuji v lécích stejně, nebo se něco mění?** — nejčastěji zapomínaná otázka.
5. **Kdy je první ultrazvuk a kde se objednávám?**
6. **Na co si mám dát pozor a kdy mám volat?**
7. **Můžu dostat výsledek písemně?**

Při jiném než pozitivním výsledku:

1. **Kdy mám vysadit léky?**
2. **Co mám čekat v příštích dnech?**
3. **Kdy je kontrolní konzultace a s kým?**
4. **Zůstala nám zamrazená embrya a v jakém stavu?**
5. **Kdy je nejdřív možný další pokus?**

Poslední dvě otázky nemusíte pokládat hned. Ale je dobré vědět, že na ně máte právo.

## Když vám řeknou „nízká hodnota" nebo „musíme sledovat"

Tohle je nejtěžší varianta — ani ano, ani ne. Zeptejte se:

- Co konkrétně budete sledovat a kdy?
- Jaké jsou možnosti, které v tuhle chvíli zvažujete?
- Na co si mám dát pozor doma?

**Nechtějte po lékaři prognózu, kterou vám dát nemůže.** Chtějte po něm plán. Plán vám dát může.

## Nebojte se říct, jak to chcete slyšet

Je naprosto v pořádku říct: *„Prosím, řekněte mi rovnou číslo a pak vysvětlení."* Nebo naopak: *„Můžete mi nejdřív říct, co to znamená?"* Sestry a lékaři na klinikách tohle sdělují denně a většinou ocení, když vědí, jak to podat.

## Komu volat po hovoru

Rozmyslete si to předem. Kolotoč deseti telefonátů v obou variantách vyčerpává.

Osvědčený model: **jeden člověk, který to řekne dál.** Vy zvládnete jeden hovor. Ten člověk zvládne zbytek.

## A co když se s vámi nikdo nespojí

Volejte vy. Není to obtěžování. Systémy selhávají, sestry mají plné ruce, výsledek se zpozdí v laboratoři. **Nemusíte čekat do večera z ohleduplnosti.**

> Tento text nenahrazuje komunikaci s vaší klinikou. Interpretace výsledků patří výhradně vašemu lékaři.`,
      minutes: 6,
      phases: ['two_week_wait', 'beta_positive'],
      dayRange: [13, 14],
      topics: ['vysledky', 'klinika', 'psychika'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      publishedOn: '2025-12-15',
      boost: 0.6,
    },
    {
      id: 'tww-nizka-beta',
      kind: 'article',
      title: 'Když je hodnota nízká: co to znamená a co ne',
      excerpt:
        'Nízká beta není rozsudek ani slib — je to důvod k druhému odběru a k tomu, abyste na to nebyla sama.',
      body: `## Nejdřív to nejdůležitější

**Z jedné nízké hodnoty se nedá určit, jak to dopadne.** Ne proto, že by vám to lékař nechtěl říct, ale proto, že to v tu chvíli skutečně nikdo neví. Rozhodující je, jak se hodnota chová v čase.

Tenhle článek vám nemá dát naději ani ji vzít. Má vám dát orientaci v tom, co se teď bude dít.

## Proč může být hodnota nízká

Vysvětlení je několik a mají velmi různé důsledky:

- **Pozdější zahnízdění.** Implantace neproběhla „podle kalendáře" a křivka je jen posunutá. Další hodnota může být překvapivě dobrá.
- **Odběr o den dřív, než by ideálně měl být.** Rozdíl jednoho dne je u exponenciálního růstu velký.
- **Biochemické těhotenství** — velmi časná ztráta, kdy se zárodek zahnízdil, ale dál se nerozvíjí.
- **Mimoděložní těhotenství**, kde hCG typicky stoupá pomaleji. Proto se nízké hodnoty vždy sledují pečlivě.
- **Rozdíly mezi laboratořemi** a metodami stanovení.

## Co bude následovat

Obvyklý postup vypadá takhle — ale **konkrétní plán vám určí lékař**:

1. **Kontrolní odběr za dva až tři dny.** Sleduje se dynamika, ne absolutní číslo.
2. **Pokračování v podpoře luteální fáze**, dokud lékař nerozhodne jinak. **Nevysazujte nic sama.**
3. Podle vývoje případně **další odběr** nebo **ultrazvuk** v čase, kdy už může něco ukázat.

## Nejtěžší část: čekání ve dvou režimech

Období mezi dvěma odběry bývá popisováno jako horší než celé předchozí dva týdny. Jste zároveň těhotná i netěhotná, zároveň doufáte i truchlíte.

Tomuhle stavu se říká **nejistá naděje** a je vyčerpávající, protože vás nutí držet dvě protichůdné verze budoucnosti najednou.

Co pomáhá:

- **Nedělejte si domácí testy.** Nic vám neřeknou a rozkolísají vás.
- **Nepočítejte zdvojení v kalkulačkách.** Vzorec neplatí univerzálně a interpretace patří lékaři.
- **Nehledejte cizí příběhy s podobnými čísly.** Najdete obě verze a obě vás rozhodí.
- **Řekněte jednomu člověku, v jaké jste situaci.** Aby vám nikdo negratuloval a nikdo vás nelitoval.
- **Naplánujte si následující dva dny konkrétně.** Prázdno je nepřítel.

## Když druhá hodnota nestoupá

Pokud se ukáže, že těhotenství nepokračuje, lékař s vámi probere, co dál — a je v pořádku se ptát na cokoli, i na to, jestli jde o mimoděložní těhotenství a jak se to bude sledovat.

Tahle ztráta je skutečná ztráta, i když trvala týden a nikdo o ní nevěděl. **Nemusíte ji zlehčovat větou „vždyť to ještě nebylo dítě".** Bylo to vaše těhotenství a vaše naděje.

## Otázky, které si na klinice položte

1. Co konkrétně budeme sledovat a v jakých intervalech?
2. Pokračuji ve všech lécích beze změny?
3. Jaké příznaky mě mají poslat k vám nebo na pohotovost?
4. Kdy má smysl dělat ultrazvuk?
5. Kdo mi bude volat a kdy?

## Kdy volat lékaře neodkladně

Při nízké nebo pomalu stoupající betě je zvýšená pozornost na místě:

- **prudká, zejména jednostranná bolest v podbřišku**,
- **bolest v rameni nebo mezi lopatkami**,
- **mdloba, závrať, bušení srdce, studený pot, výrazná slabost**,
- **silné krvácení** nebo krvácení se sraženinami,
- horečka nad 38 °C.

Kombinace bolesti, závrati a bolesti v rameni je urgentní situace — volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost a řekněte, že jste po embryotransferu s pozitivní betou.

> Tento text nestanovuje diagnózu ani neuvádí konkrétní hraniční hodnoty. Vyhodnocení vašich výsledků a rozhodnutí o dalším postupu patří výhradně vašemu ošetřujícímu lékaři.`,
      minutes: 7,
      phases: ['two_week_wait', 'beta_positive'],
      dayRange: [13, 14],
      topics: ['vysledky', 'psychika', 'ztrata'],
      level: 'deep',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-12-22',
    },
    {
      id: 'tww-vysoka-beta-dvojcata',
      kind: 'article',
      title: 'Vysoká beta a otázka dvojčat',
      excerpt:
        'Vyšší hodnota není potvrzením dvojčat ani zárukou čehokoli — spolehlivou odpověď dá až ultrazvuk.',
      body: `## Co vysoká hodnota znamená

Nejčastěji jen to, že **zahnízdění proběhlo dřív** nebo že se odběr trefil do pozdější fáze růstu. Rozpětí hodnot je i u jednočetného těhotenství velmi široké a jednotlivé případy se překrývají.

Vyšší hodnota **může** provázet vícečetné těhotenství. **Nepotvrzuje ho.** Jediná spolehlivá odpověď je ultrazvuk v době, kdy je nález hodnotitelný — termín určí lékař.

## Proč se lidé tak upínají k číslu

Protože je to jediné číslo, které máte. Chápu to. Ale interpretace jednotlivé hodnoty bez kontextu vede k tomu, že si dva týdny představujete dvě postýlky a pak vám ultrazvuk ukáže jednu.

Věcný přístup: **hodnota je vstup pro lékaře, ne odpověď pro vás.**

## Kdy se dvojčata vůbec zvažují

- Pokud vám byla přenesena **dvě embrya**, existuje možnost, že se uchytila obě.
- I při přenosu **jednoho embrya** může vzniknout jednovaječné dvojče rozdělením — je to méně časté, ale možné.
- V takovém případě ultrazvuk ukáže **dva plodové váčky**, případně jeden váček se dvěma zárodky. Rozlišení má význam pro sledování těhotenství.

## Co dvojčata reálně znamenají

Zaslouží si to poctivou větu: **dvojčetné těhotenství je z lékařského hlediska rizikovější než jednočetné.** To není strašení, to je důvod, proč se u nás postupně prosadil přenos jednoho embrya.

Prakticky to znamená:

- **častější kontroly** a pečlivější sledování,
- vyšší pravděpodobnost **předčasného porodu** a s ním souvisejících komplikací,
- vyšší riziko **těhotenské cukrovky, vysokého tlaku a preeklampsie**,
- větší zátěž pro vaše tělo — únava, dušnost, bolesti zad, otoky,
- vyšší pravděpodobnost **císařského řezu**, i když ne automaticky.

Zároveň: většina dvojčetných těhotenství vedených ve specializované péči dopadne dobře. **Klíčové slovo je „vedených" — proto se u dvojčat tolik dbá na docházení na kontroly.**

## Co se v hlavě děje, když zazní „jsou dvě"

Radost, panika a vina za tu paniku. Skoro každá žena popisuje stejný sled. Ženy po letech léčby často cítí, že „si nesmí stěžovat, když tolik chtěly dítě". Smíte. Dvě děti najednou jsou jiná životní situace než jedno a je normální ji nejdřív unést a teprve pak oslavit.

## Praktické kroky, když se dvojčata potvrdí

1. **Zeptejte se, jaký typ dvojčat to je** — počet plodových váčků a placent ovlivňuje způsob sledování.
2. **Zjistěte, kde budete vedená** a jak často budete docházet.
3. **Nekupujte nic hned.** Máte čas a první týdny nejsou na nákupy.
4. **Řešte praktické věci brzy** — auto, bydlení, pomoc rodiny. U dvojčat je plánování dopředu skutečně užitečné.
5. **Najděte si komunitu rodičů dvojčat.** Praktické rady od nich jsou k nezaplacení.

## A co když je hodnota vysoká a dvojčata nejsou

Naprosto běžná varianta. Vysoká beta u jednočetného těhotenství neznamená nic zvláštního — jen jiný start téže křivky.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká bolest v podbřišku,
- **rychle rostoucí obvod břicha, dušnost, snížené močení, prudký nárůst hmotnosti** — u vícečetného těhotenství po stimulaci je riziko OHSS vyšší,
- opakované zvracení a neschopnost udržet tekutiny,
- horečka nad 38 °C,
- bolest v rameni, mdloba nebo závrať.

> Tento text nestanovuje diagnózu a neuvádí konkrétní hodnoty. O tom, co vaše čísla znamenají a jak bude vaše těhotenství vedeno, rozhoduje váš lékař.`,
      minutes: 7,
      phases: ['beta_positive'],
      dayRange: [0, 14],
      topics: ['vysledky', 'tehotenstvi', 'rizikove'],
      modifiers: ['twins'],
      level: 'deep',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP', 'ESHRE — doporučené postupy'],
      publishedOn: '2026-01-05',
    },
    {
      id: 'tww-ohss-po-transferu',
      kind: 'article',
      title: 'OHSS po čerstvém transferu: příznaky, které nesmíte přehlédnout',
      excerpt:
        'Hyperstimulační syndrom se může objevit nebo zhoršit až po transferu — a tohle jsou signály, při kterých se volá hned.',
      body: `## Co je OHSS

**Ovariální hyperstimulační syndrom** je komplikace hormonální stimulace. Vaječníky jsou zvětšené, cévy propouštějí tekutinu do dutiny břišní a organismus na to reaguje.

Většina případů je mírná a odezní sama. **Menšina je závažná a vyžaduje lékařskou péči, někdy hospitalizaci.** Rozdíl mezi „nafouklé břicho po stimulaci" a „OHSS, který se zhoršuje", poznáte podle konkrétních příznaků — a právě proto je tenhle článek napsaný.

## Proč se to týká i období po transferu

Existují dvě formy:

- **časná** — nastupuje krátce po punkci a souvisí se spouštěcí injekcí,
- **pozdní** — nastupuje zhruba týden a více po punkci a **souvisí s hCG, který začne produkovat zahnízděné embryo**.

To znamená paradox, který vás nikdo nepřipraví: **pozdní OHSS se objevuje právě tehdy, když transfer vyšel.** A bývá obvykle protrahovanější než forma časná.

Po **kryoembryotransferu (KET)** riziko OHSS prakticky nehrozí — vaječníky nejsou stimulované. Tenhle článek se tedy týká hlavně žen po čerstvém transferu.

## Varovné příznaky — naučte se je

**Volejte kliniku nebo pohotovost, pokud:**

- **rychle roste obvod břicha** — kalhoty, které ráno šly zapnout, večer nejdou,
- **přibýváte na váze rychle** — nárůst o víc než přibližně kilogram za den je varovný signál,
- **hůř se vám dýchá**, hlavně vleže,
- **močíte výrazně méně** než obvykle nebo je moč velmi tmavá,
- **opakovaně zvracíte** nebo neudržíte tekutiny,
- máte **silnou bolest břicha**,
- máte **otoky nohou nebo zevního genitálu**,
- máte **bolest, otok nebo zarudnutí lýtka**, bolest na hrudi — podezření na trombózu,
- cítíte **prudkou jednostrannou bolest** — může jít o torzi vaječníku.

Tenhle seznam si prosím uložte. Není to strašení; je to jediná část celého balíku, kterou byste měla znát nazpaměť.

## Co dělat doma při mírných obtížích

Pokud vám lékař potvrdil, že jde o mírnou formu, obvykle doporučí:

- **pravidelně se vážit**, ideálně ráno po probuzení, a zapisovat,
- **sledovat, kolik močíte**,
- **pít dostatečně** — konkrétní množství a typ tekutin vám doporučí lékař,
- **nesportovat**, vyhnout se prudkým pohybům a otřesům kvůli riziku torze vaječníku,
- **nezůstávat celý den nehybně ležet** — riziko trombózy; lehká chůze bývá vhodnější,
- **léky proti bolesti užívat jen po konzultaci** — některé běžné volně prodejné přípravky nejsou v tomto období vhodné.

**Nic z toho si prosím nestanovujte sama.** Konkrétní režim vám určí lékař, protože závisí na tíži nálezu.

## Jak dlouho to trvá

Mírné obtíže obvykle ustupují během dnů. Pozdní forma, spojená s nastupujícím těhotenstvím, může trvat déle a vyžaduje sledování. **Vaše klinika vám řekne, jak často kontrolovat a kdy přijít.**

## Co OHSS neznamená

Neznamená, že jste udělala něco špatně. Neznamená ani automaticky, že těhotenství je ohrožené. Znamená, že vaše tělo silně zareagovalo na stimulaci a potřebuje sledování.

## Kdy volat lékaře

Volejte kliniku při: rychlém růstu břicha, prudkém přírůstku hmotnosti, sníženém močení, dušnosti, opakovaném zvracení, silné bolesti břicha, otocích.

Volejte **155 nebo jeďte na pohotovost** při: dušnosti v klidu, bolesti na hrudi, mdlobě, prudké jednostranné bolesti břicha, bolesti a otoku lýtka.

> Tento text má informativní charakter a nenahrazuje vyšetření lékařem. Při podezření na OHSS vždy kontaktujte svou kliniku — raději jednou navíc.`,
      minutes: 7,
      phases: ['transfer', 'two_week_wait', 'beta_positive'],
      dayRange: [0, 14],
      topics: ['zdravi_ditete', 'hormony', 'cekani', 'klinika'],
      excludeModifiers: ['frozen_transfer'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-01-12',
      boost: 0.85,
    },
    {
      id: 'tww-ket-specifika',
      kind: 'article',
      title: 'Kryoembryotransfer: v čem je čekání jiné',
      excerpt:
        'Po KET se čeká stejně dlouho, ale tělo je v jiném stavu a některé obavy z čerstvého cyklu tady vůbec neplatí.',
      body: `## Co je jinak hned na začátku

Při kryoembryotransferu (KET) se přenáší embryo, které bylo zamrazené — obvykle metodou vitrifikace. To má několik důsledků, které mění celý průběh čekání:

- **Neproběhla punkce** a vaječníky nejsou zvětšené stimulací.
- **Riziko OHSS je minimální.** To je asi největší úleva oproti čerstvému cyklu.
- **Sliznice se připravuje jinak** — buď v přirozeném cyklu podle vaší ovulace, nebo hormonálně.
- **Podpora luteální fáze bývá delší a přísnější**, zvlášť v cyklu s hormonální přípravou.

## Proč je u KET progesteron ještě důležitější

V cyklu s hormonální přípravou **neproběhne ovulace**, takže **nevznikne žluté tělísko** — jediný zdroj progesteronu je ten, který si podáváte.

Z toho plyne nejdůležitější věta tohohle článku: **vynechaná dávka má u KET větší váhu než u čerstvého cyklu.** Nastavte si připomínky, mějte zásobu na celé období a při jakémkoli vynechání volejte kliniku.

A samozřejmě: **nikdy nevysazujte sama**, ani při krvácení, ani po negativním domácím testu.

## Přežití embrya po rozmrazení

Většina kvalitně vitrifikovaných blastocyst rozmrazení přežije. Embryolog vám před transferem řekne, jak vaše embryo vypadá — často se používají pojmy jako **rehydratace** a **reexpanze**, tedy že se blastocysta po rozmrazení znovu nafoukla.

Je legitimní se zeptat:

1. Jak embryo rozmrazení sneslo?
2. Nafouklo se před přenosem?
3. Kolik embryí nám zůstalo v kryobance?

## Co u KET neplatí ze všech těch rad

- **Strach z OHSS** — bez stimulace prakticky odpadá.
- **Zákaz pohybu kvůli zvětšeným vaječníkům** — nemáte je zvětšené, takže běžný pohyb je bez problému.
- **Nafouklé břicho z folikulů** — to, co cítíte, jde spíš na vrub progesteronu.

## Co naopak platí stejně

- **Příznaky nic neříkají** — a u KET s hormonální přípravou možná ještě míň, protože hormonů máte v těle víc.
- **Brzké domácí testy klamou** — zde s jednou výhodou: **pokud jste nedostala spouštěcí injekci s hCG, nehrozí u vás falešná pozitivita z léku.** Ostatní důvody proč netestovat brzy ale zůstávají.
- **Termín odběru beta hCG platí přesně tak, jak vám ho dala klinika.**

## Časování transferu a proč se počítá jinak

U KET se den transferu odvíjí od toho, kolik dní progesteronu jste dostala, aby sliznice byla v takzvaném **implantačním okně**. Proto vám klinika tak úzkostlivě hlídá časy podávání — a proto je posunutí dávky o několik hodin něco, co je potřeba nahlásit.

## Psychicky: druhé kolo je jiné kolo

Řada žen jde do KET po neúspěšném čerstvém cyklu. To s sebou nese specifickou tíhu — už víte, jak vypadá špatná zpráva.

Co pomáhá:

- **Nepočítejte tenhle cyklus jako „poslední šanci"**, pokud vám to lékař neřekl. Ta věta v hlavě neúměrně zvedá tlak.
- **Dovolte si menší nadšení.** Opatrnost není nedostatek víry, je to obrana.
- **Zeptejte se dopředu, kolik embryí vám zůstává.** Jistota v tomhle bodě mění hodně.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká bolest v podbřišku,
- horečka nad 38 °C nebo páchnoucí výtok,
- opakovaně vynechaná dávka progesteronu,
- bolest, otok nebo zarudnutí lýtka.

> Tento text popisuje obecné principy KET a nenahrazuje pokyny vaší kliniky. Konkrétní schéma přípravy i podpory luteální fáze určuje váš ošetřující lékař.`,
      minutes: 7,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 14],
      topics: ['transfer', 'embryologie', 'leky', 'cekani'],
      modifiers: ['frozen_transfer'],
      level: 'deep',
      hero: 'pearl',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2026-01-19',
      boost: 0.5,
    },
    {
      id: 'tww-strava-pohyb-po-transferu',
      kind: 'article',
      title: 'Jídlo a pohyb v období čekání: co má smysl a co je pověra',
      excerpt:
        'Ananasové jádřince ani teplé ponožky implantaci neovlivní — pár věcí ale skutečně stojí za to hlídat.',
      body: `## Začneme tím, co nefunguje

Kolem stravy po transferu vzniklo neuvěřitelné množství rituálů. Prochází se jimi skoro každá žena, protože dávají pocit, že něco děláte. **Žádný z nich nemá doloženou souvislost s úspěchem transferu:**

- **ananas s jádřincem** — bromelain je v ovoci v množstvích, která nemají systémový efekt; navíc se z čerstvého ovoce v žaludku degraduje,
- **granátové jablko a šťáva z něj**,
- **brazilské ořechy v přesném počtu**,
- **teplé ponožky a zákaz studených nápojů** — teplota nápoje neovlivní teplotu dělohy,
- **zákaz zvedání rukou nad hlavu**,
- **speciální „implantační" čaje a bylinné směsi** — tady navíc pozor, řada bylin není v tomhle období vhodná a interaguje s léky.

Pokud vám některý z těch rituálů dělá dobře a je neškodný, nemusíte ho rušit. Jen ať vám neslouží jako důkaz vaší viny, kdyby to nevyšlo.

## Co má smysl

### Pravidelné jídlo

Progesteron zpomaluje trávení, po stimulaci může být břicho nafouklé a stres tomu nepomáhá. **Menší porce častěji** fungují lépe než tři velká jídla.

### Bílkoviny

Během čerstvého cyklu a po něm se často doporučuje dbát na dostatek bílkovin. Konkrétní doporučení k vaší situaci vám dá lékař — zvlášť pokud řešíte projevy OHSS, kde se režim řídí individuálně.

### Pitný režim

Dostatečný příjem tekutin je jedna z mála věcí, které skutečně hlídejte. Po čerstvém cyklu je to součást prevence komplikací.

### Vláknina a zácpa

Zácpa z progesteronu je nepříjemná a navíc svádí k domněnce, že máte křeče „z něčeho jiného". Zeleninu, ovoce, celozrnné pečivo a dostatek vody přidávejte postupně. **Projímadla ani nic volně prodejného bez konzultace.**

### Čeho se vyvarovat

- **alkohol** — v tomhle období ne,
- **potraviny s rizikem infekce** — nepasterizované mléčné výrobky, syrové maso a ryby, syrová vejce, neomyté klíčky, delikatesy z lahůdkářského pultu; je rozumné začít s tím už teď,
- **doplňky stravy a bylinky bez konzultace** — včetně těch „přírodních",
- **nadměrný kofein** — omezit, ne nutně vysadit; konkrétní míru proberte s lékařem.

## Pohyb: co ano a co ne

**Ano:**
- chůze, klidně každý den, dvacet až čtyřicet minut,
- lehké protažení, jemná jóga bez inverzí a bez zádrže dechu,
- běžné domácí činnosti.

**Ne:**
- těžké silové tréninky a zvedání maximálních břemen,
- skoky, HIIT, běh v tempu,
- **jakýkoli sport s otřesy, pokud jste po stimulaci** — riziko torze zvětšeného vaječníku,
- sauna, vířivka, horká koupel,
- plavání v bazénu, dokud vám to lékař neschválí — pravidla se liší, zeptejte se.

## Proč chůze není jen „aby se něco dělo"

Po hormonální stimulaci je zvýšené riziko žilní trombózy. **Nehybné ležení tomu nepomáhá.** Chůze je zároveň nejlepší dostupný nástroj na progesteronovou zácpu, na nespavost i na hlavu, která se točí dokola.

## Váha a otoky

Během čekání se váha běžně mění — voda, zácpa, hormony. **Denní vážení má smysl jen tehdy, když vám ho doporučil lékař** kvůli sledování OHSS. Jinak vám přidá jen další číslo, kterým se budete trápit.

## Kdy volat lékaře

- rychlý přírůstek hmotnosti, rychle rostoucí břicho, dušnost, výrazně snížené močení,
- opakované zvracení nebo neschopnost udržet tekutiny,
- prudká bolest v podbřišku, hlavně jednostranná,
- silné krvácení,
- horečka nad 38 °C, průjem a zvracení po rizikovém jídle,
- bolest, otok nebo zarudnutí lýtka.

> Tento text nenahrazuje individuální doporučení lékaře ani nutriční poradenství. Pokud máte jakoukoli diagnózu ovlivňující stravu, řiďte se pokyny svého lékaře.`,
      minutes: 7,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 14],
      topics: ['strava', 'pohyb', 'cekani', 'sebepece'],
      level: 'deep',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-01-26',
    },
    {
      id: 'tww-prace-a-neschopenka',
      kind: 'article',
      title: 'Práce během čekání: zůstat doma, nebo jít mezi lidi?',
      excerpt:
        'Neexistuje jedna správná odpověď, ale existují otázky, které vám tu vaši pomůžou najít během deseti minut.',
      body: `## Dvě špatné krajnosti

**Krajnost první: zůstat doma sama bez programu.** Bez struktury se den natáhne, hlava se rozjede a vy strávíte čtrnáct dní ve vlastní hlavě. Ženy, které to zkusily, to obvykle podruhé neopakují.

**Krajnost druhá: pokračovat, jako by se nic nedělo.** Dvanáctihodinové směny, náročná fyzická práce, cestování, prezentace před vedením. To není statečnost, to je zbytečná zátěž.

Mezi tím je široký prostor a v něm je vaše odpověď.

## Otázky, které rozhodnou za vás

1. **Je moje práce fyzicky náročná?** Zvedání, dlouhé stání, práce v horku, noční směny — tady má odpočinek nebo úprava režimu smysl. Poraďte se s lékařem.
2. **Odvádí mi práce myšlenky, nebo mi je zaplavuje?** Účetní uzávěrka odvádí. Práce s dětmi na porodním sále nebo v neonatologii spíš zaplavuje.
3. **Kolik lidí se mě bude ptát?** Pokud jste v týmu, který o vaší léčbě ví, počítejte s tím.
4. **Mám možnost home office nebo zkráceného úvazku?** Často je to nejlepší kompromis.
5. **Co mi udělá horší den — ten v práci, nebo ten doma?**

## Pracovní neschopnost

O pracovní neschopnosti rozhoduje lékař na základě vašeho zdravotního stavu — nikoli vaše přání ani rada z internetu. **Zeptejte se přímo na klinice nebo u svého gynekologa**, jaký je v tomto ohledu jejich postup a co je ve vaší situaci vhodné.

Praktické věci, které je dobré vědět předem:

- Zjistěte, **kdo vám neschopenku vystaví** — klinika, nebo registrující gynekolog. Postupy se liší.
- Vězte, **jaká pravidla platí pro vycházky**, pokud v pracovní neschopnosti budete.
- Mějte jasno v tom, **co komu v práci sdělujete** — diagnózu sdělovat nemusíte.

## Co říct v práci

Nemusíte říkat nic o léčbě. Věty, které fungují:

- *„Mám teď zdravotní záležitost, řeším to s lékařem, dám vědět."*
- *„Příští dva týdny potřebuju kvůli léčbě omezit cestování."*
- *„Nemůžu teď zvedat těžké věci, domluvíme to jinak?"*

Pokud jste v týmu, kde se to už ví: můžete rovnou říct, jak s vámi chcete zacházet. *„Prosím, neptejte se mě, jak to jde. Až budu vědět, řeknu to sama."* Většina lidí to ocení — nevědí, jestli se ptát, nebo mlčet, a vy jim tím ulevíte.

## Když se stane, že se rozbrečíte na poradě

Stává se to a nemusí to být katastrofa. Předem promyšlená únikovka pomáhá: připravená věta *„promiňte, musím si odskočit"*, místo, kam odejdete, a jeden kolega, který ví, že je vám ta věta v pořádku.

## Pár praktických opatření na dva týdny

- **Nepřijímejte nové velké závazky** na tohle období.
- **Nedělejte si termín na den odběru bety.** Ani na následující den.
- **Mějte plán, jak se dostanete domů**, kdyby vám bylo zle.
- **Nastavte si připomínky na léky tak, aby se daly splnit i v práci** — a mějte medikaci s sebou, ne doma na poličce.

## Kdy volat lékaře

- silné krvácení nebo prudká bolest během pracovního dne,
- horečka nad 38 °C,
- dušnost, rychle rostoucí břicho, výrazně snížené močení,
- pokud práci nezvládáte psychicky natolik, že nefungujete — i to je legitimní důvod se ozvat.

> Tento text neposkytuje právní ani lékařské poradenství. O pracovní neschopnosti a vhodné zátěži rozhoduje váš ošetřující lékař.`,
      minutes: 6,
      phases: ['two_week_wait', 'transfer'],
      dayRange: [1, 14],
      topics: ['cekani', 'psychika', 'finance'],
      level: 'deep',
      hero: 'linen',
      author: 'Gabi',
      publishedOn: '2026-02-02',
    },
    {
      id: 'tww-partner-v-cekani',
      kind: 'article',
      title: 'Partner během čekání: jak nebýt na dvou různých planetách',
      excerpt:
        'On mlčí, vy si to překládáte jako lhostejnost — a přitom jde nejčastěji o dva různé způsoby zvládání téhož strachu.',
      body: `## Proč to skřípe zrovna teď

Do transferu měl partner co dělat: vozit vás, píchat injekce, chodit s vámi na odběry. Po transferu nemá roli. **A muži, kteří ztratí roli, obvykle ztichnou.**

Vy si to přeložíte jako „jemu je to jedno". Jemu to ale jedno není — jen nemá jazyk, kterým by to řekl, a bojí se, že když to řekne špatně, ublíží vám.

## Tři nejčastější nedorozumění

**„Neptá se, jak mi je."**
Často se bojí, že vám otázkou připomene, na co se snažíte nemyslet. Řekněte mu, jestli chcete, aby se ptal, nebo ne. Muži tuhle informaci potřebují explicitně.

**„Je moc optimistický."**
Optimismus bývá u partnerů obranná strategie. Když řeknete *„potřebuju, abys se mnou počítal i s tou druhou možností"*, obvykle to funguje líp než hádka o tom, jestli to vyjde.

**„Chce řešit další kroky a já ještě nejsem tam."**
Plánování je pro mnoho mužů způsob, jak zvládat bezmoc. Není to necitlivost, je to jejich verze zvládání.

## Co konkrétně mu říct

Fungují krátké, přímé věty. Ne narážky.

- *„Nechci radu. Chci, abys mě jenom objal."*
- *„Dnes o tom nechci mluvit. Neznamená to, že se zlobím."*
- *„Potřebuju, abys mi ráno připomněl léky. To je tvoje věc, ne moje."*
- *„Až přijde výsledek, chci ho slyšet sama a pak ti hned zavolám."*

## Dejte mu úkol

Tohle je nejúčinnější věc v celém článku. Muži v tomhle období fungují mnohem lépe, když mají konkrétní odpovědnost:

- hlídá zásobu léků a doobjednává je,
- vaří nebo zařizuje jídlo na celé dva týdny,
- odpovídá rodině, aby to nemusela dělat vy,
- jede s vámi na odběr a řídí zpátky,
- naplánuje jednu věc, na kterou se budete těšit, bez ohledu na výsledek.

## Na čem se domluvte předem

1. **Kdo komu volá po výsledku** — a kdo to řekne rodičům.
2. **Jestli chcete být v den výsledku spolu**, nebo každý sám.
3. **Co uděláte, když to nevyjde** — první večer, druhý den.
4. **Jestli si dáte pauzu od tématu.** Třeba jeden večer v týdnu, kdy se o léčbě nemluví vůbec.

## Pro partnera: pár vět, které fungují

Pokud tenhle text čte on, tady jsou věty, kterými se nedá nic pokazit:

- *„Jsem tady."*
- *„Nevím, co říct, ale myslím na to celý den."*
- *„Chceš, abych mlčel, nebo abych mluvil?"*
- *„Ať to dopadne jakkoli, zvládneme to spolu."*

A tři věty, které nepomáhají nikdy: *„Neboj, určitě to vyjde."* — *„Nesmíš se stresovat."* — *„Aspoň víme, že to jde."*

## Když je partnerů víc typů — a když partner není

U žen, které jdou do léčby samy, přebírá roli podpory obvykle sestra, kamarádka nebo matka. Platí totéž: **dejte tomu člověku konkrétní úkol a konkrétní instrukci**, jak s vámi mluvit. Lidé, kteří vás mají rádi, chtějí pomoct — jen většinou nevědí jak.

## Kdy hledat pomoc mimo vztah

- když se z tématu dítěte stane jediný obsah vašeho soužití,
- když se objevují výčitky typu „kvůli tobě",
- když jeden z vás přestane mluvit úplně.

Pár sezení u párového terapeuta v tomhle období není známka rozpadu. Je to zkratka.

> Tento text nenahrazuje odbornou psychologickou pomoc. Pokud se cítíte v krizi, obraťte se na odborníka nebo na Linku první psychické pomoci 116 123.`,
      minutes: 7,
      phases: ['two_week_wait', 'transfer'],
      dayRange: [1, 14],
      topics: ['partner', 'vztah', 'psychika', 'cekani'],
      level: 'comfort',
      hero: 'blush',
      author: 'Gabi',
      publishedOn: '2026-02-09',
      boost: 0.5,
    },
    {
      id: 'tww-video-co-se-deje-po-transferu',
      kind: 'video',
      title: 'Co se děje v děloze den po dni',
      excerpt:
        'Čtrnáct dní od přenosu embrya až po odběr krve — přehledně a bez zbytečné mystiky.',
      body: `## O čem video je

Provedeme vás dvěma týdny po transferu blastocysty tak, jak je popisuje embryologie. Ne proto, abyste si každý den něco představovala, ale proto, že **znalost procesu snižuje úzkost z neznáma**.

## Přepis hlavních částí

**Den 0 — transfer.** Blastocysta je uložena do dutiny děložní. Je uzavřená v obalu zvaném zona pellucida a zatím se volně pohybuje v tenké vrstvě tekutiny mezi stěnami dělohy.

**Den 1 až 2 — líhnutí.** Blastocysta se dál rozpíná a začíná se probourávat ven ze svého obalu. Tomu se říká hatching neboli líhnutí. Bez tohohle kroku by se přichytit nemohla.

**Den 3 až 4 — přichycení.** Vylíhlá blastocysta se dotýká výstelky dělohy a začíná přilnout. Buňky trofoblastu, ze kterých později vznikne placenta, navazují první kontakt se sliznicí.

**Den 5 až 6 — zahnizďování.** Trofoblast proniká do sliznice a zanořuje se. V tuhle chvíli se začíná tvořit hCG. Množství je zatím tak malé, že ho žádný domácí test nezachytí.

**Den 7 až 9 — hCG stoupá.** Hormon se dostává do krevního oběhu a jeho hodnota se zhruba každé dva dny zdvojnásobuje. V moči je ho ale stále málo. Negativní test v těchto dnech proto nemá vypovídací hodnotu.

**Den 10 až 12 — test bývá spolehlivější.** Koncentrace v moči už může přesáhnout práh citlivosti testu. Stále platí, že jediné rozhodující je vyšetření z krve.

**Den 13 až 14 — odběr beta hCG.** Krev dá číslo a číslo se dá porovnat s druhým odběrem za dva až tři dny. Teprve dynamika říká něco spolehlivého.

## Dvě důležité poznámky

Časová osa platí pro **transfer blastocysty**. Pokud vám bylo přeneseno embryo v dřívějším stadiu, je celý průběh posunutý o dva až tři dny.

A druhá poznámka: **tenhle proces nemůžete ovlivnit ani urychlit.** To zní krutě, ale spoustě žen to paradoxně uleví — nic z toho, co uděláte v pátek odpoledne, nerozhodne o výsledku.

> Video má informativní charakter a nenahrazuje lékařskou péči. Termín odběru a další postup určuje vaše klinika.`,
      minutes: 9,
      phases: ['two_week_wait', 'transfer'],
      dayRange: [0, 14],
      topics: ['embryologie', 'cekani', 'transfer'],
      level: 'essential',
      hero: 'sky',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2026-02-16',
      mediaNote:
        'Animovaný průřez dělohou s klidným komentářem. Na časové ose se den po dni ukazuje líhnutí blastocysty, přichycení, zanořování a nástup tvorby hCG. Vpravo dole běží ukazatel, od kdy má smysl testovat. Bez dramatické hudby, bez ultrazvukových záběrů dětí.',
      boost: 0.7,
    },
    {
      id: 'tww-audio-kotva-cekani',
      kind: 'audio',
      title: 'Deset minut, kdy nemusíte nic řešit',
      excerpt:
        'Krátká zvuková kotva pro chvíle, kdy se hlava rozjela a vy potřebujete přistát zpátky v těle.',
      body: `## Kdy si to pustit

Ve chvíli, kdy se přistihnete, jak posté hledáte „příznaky 8. den po transferu". Nebo ve tři ráno. Nebo v autě na parkovišti před prací, protože se vám nechce dovnitř.

Nahrávka nemá za cíl, abyste se cítila skvěle. Má za cíl **snížit napětí natolik, abyste mohla pokračovat v dalších pěti minutách svého dne**.

## Přepis

*„Sedněte si nebo si lehněte tak, jak vám to teď vyhovuje. Nemusíte měnit pozici, nemusíte narovnávat záda. Stačí, že jste tady.*

*Všimněte si, čeho se dotýkáte. Nohy o podlahu, záda o opěrku, dlaně o stehna. Nechte tíhu svého těla, ať se opře.*

*Teď dýchání. Nádech nosem — a delší výdech ústy. Nádech na čtyři doby, výdech na šest. Nemusí to být přesné. Jde jen o to, aby výdech byl delší.*

*Vaše tělo teď dělá práci, kterou nemůžete řídit. Nemusíte jí pomáhat. Nemusíte ji hlídat. To, co se má stát, se stane bez vašeho dohledu.*

*Když se objeví myšlenka — a ona se objeví — nechte ji projít. Nemusíte na ni odpovídat. Není to test, který byste mohla splnit špatně.*

*Ještě tři nádechy. Při každém výdechu si všimněte, že vaše ramena mohou klesnout o kousek níž.*

*A teď, až budete chtít, otevřete oči. Nemusíte být klidná. Stačí, že jste na deset minut nikam nespěchala."*

## Co dělat pak

Nic velkého. Napijte se vody, projděte se k oknu. Jestli vám to pomohlo, poznamenejte si to — v příštích dnech se vám bude hodit vědět, co u vás funguje.

> Nahrávka je podpůrná a nenahrazuje odbornou psychologickou ani lékařskou péči. Pokud máte pocit, že situaci nezvládáte, ozvěte se svému lékaři nebo na Linku první psychické pomoci 116 123.`,
      minutes: 10,
      phases: ['two_week_wait', 'transfer'],
      dayRange: [1, 14],
      topics: ['psychika', 'sebepece', 'cekani'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      publishedOn: '2026-02-23',
      mediaNote:
        'Klidný ženský hlas, tempo pomalé, v pozadí jen tichý šum. Bez hudby s melodií, bez zvonků na konci. Nahrávka nikde nezmiňuje slova jako miminko, naděje ani úspěch — záměrně.',
      boost: 0.55,
    },
    {
      id: 'tww-audio-vizualizace-zahnizdeni',
      kind: 'audio',
      title: 'Vizualizace pro dny zahnizďování',
      excerpt:
        'Nahrávka pro pátý až sedmý den, kdy tělo dělá tu nejtišší práci a vy k ní nemáte přístup.',
      body: `## Pár slov na začátek

Vizualizace nezvyšuje šanci na otěhotnění a tenhle text vám nic takového neslibuje. Co ale umí, je dát vaší úzkosti tvar a na chvíli ji zklidnit — a to není málo.

Pokud vám podobné nahrávky nesedí, klidně ji přeskočte. Nic tím nezmeškáte.

## Přepis

*„Lehněte si a nechte ruce položené volně podél těla nebo na břiše — podle toho, co je vám příjemnější.*

*Představte si svoje tělo zevnitř. Ne dokonale, ne odborně. Jen jako teplé, prokrvené místo.*

*Někde uvnitř probíhá proces, který jste nezadala a nemůžete ho zrychlit. Buňky dělají to, co dělaly milionkrát před vámi. Nepotřebují vaši pozornost, ani váš souhlas.*

*Nádech. A delší výdech.*

*Vaše práce v těchhle dnech není hlídat. Vaše práce je unést, že nevíte.*

*Zkuste si položit dlaň na podbřišek. Ne proto, aby se něco stalo. Proto, abyste na chvíli byla se svým tělem na stejné straně. Poslední měsíce po něm chcete hodně a málokdy mu poděkujete.*

*Nádech. A delší výdech.*

*Ať se stane cokoli, tohle tělo vás dnes doneslo až sem. Vstávalo, pracovalo, snášelo injekce, čekalo v čekárnách. Zaslouží si deset minut, kdy po něm nic nechcete.*

*Ještě dva nádechy ve svém tempu. A pak se vraťte do místnosti."*

## Kdy ji nepoužívat

Pokud po ní zůstáváte rozrušená nebo vás nutí přemýšlet víc, ne míň, není to nahrávka pro vás. Existují ženy, kterým v tomhle období pomůže spíš seriál, procházka nebo pečení. Všechny tyhle varianty jsou v pořádku.

> Nahrávka je podpůrná a nenahrazuje lékařskou ani psychologickou péči.`,
      minutes: 8,
      phases: ['two_week_wait'],
      dayRange: [4, 9],
      topics: ['psychika', 'sebepece', 'cekani'],
      level: 'comfort',
      hero: 'dawn',
      author: 'Gabi',
      publishedOn: '2026-03-02',
      mediaNote:
        'Pomalu vedený hlas s dlouhými pauzami, v pozadí jen tlumený šum. Nahrávka nikde nepopisuje embryo ani nesugeruje výsledek — soustředí se na dech, dotyk dlaně na podbřišku a na vděk vlastnímu tělu. Bez závěrečné hudby.',
    },
    {
      id: 'tww-podcast-dva-tydny-nahlas',
      kind: 'podcast',
      title: 'Dva týdny nahlas: rozhovor o čekání',
      excerpt:
        'Poslech pro ty dny, kdy potřebujete slyšet, že takhle to má většina žen — a že se z toho dá vyjít.',
      body: `## O čem epizoda je

Nejde o zázračné rady. Jde o to slyšet, jak dva týdny čekání prožívají jiné ženy — a zjistit, že vaše reakce nejsou přehnané.

## Hlavní body z epizody

**„Nejhorší byl třetí den, ne poslední."**
Většina žen čeká, že bude nejtěžší konec. Realita bývá jiná: první dny po transferu, kdy se všechno zastaví, jsou často nejhorší. Adrenalin z výkonu opadne, tělo je unavené a před vámi je prázdno.

**„Přestala jsem se ptát ostatních, co cítily."**
Srovnávání příznaků s cizími ženami je jedna z nejrychlejších cest k zoufalství. Každá klinika používá jiné dávky, každá žena reaguje jinak.

**„Řekla jsem šéfovi, že mám vyšetření. Nic víc."**
Míra otevřenosti je individuální. Neexistuje povinnost sdílet.

**„Testovala jsem od sedmého dne a bylo to to nejhloupější, co jsem udělala."**
Klasika, kterou v epizodě slyšíte v různých variacích. Brzké testy nepřinesou informaci, jen šest dní emoční horské dráhy navíc.

**„Domluvili jsme se, co uděláme, když to nevyjde."**
Páry, které měly plán B, popisují den výsledku jako výrazně snesitelnější. Není to přivolávání neúspěchu, je to příprava.

**„Nikdo mi neřekl, že progesteron dělá úplně stejné příznaky."**
Nejčastější aha moment celé epizody.

## Pro koho to je

Pro dny, kdy potřebujete slyšet lidský hlas a ne další seznam doporučení. A taky pro partnery — ti z epizody obvykle pochopí víc než z desítek vašich vysvětlování.

> Osobní zkušenosti v epizodě nejsou lékařským doporučením. O svém postupu se vždy raďte se svým ošetřujícím lékařem.`,
      minutes: 28,
      phases: ['two_week_wait'],
      dayRange: [1, 14],
      topics: ['cekani', 'psychika', 'komunita'],
      level: 'comfort',
      hero: 'taupe',
      author: 'Tým Bloomia',
      publishedOn: '2026-03-09',
      mediaNote:
        'Rozhovor tří žen po IVF, nahrávaný v jedné místnosti bez střihu na dramatická místa. Slyšíte i pauzy a smích. Bez hudebních předělů, bez reklamy uprostřed.',
    },
    {
      id: 'tww-kviz-myty-cekani',
      kind: 'quiz',
      title: 'Kvíz: mýty o období po transferu',
      excerpt:
        'Sedm otázek, které vám za pět minut vezmou půlku zbytečných obav z následujících dvou týdnů.',
      body: `## K čemu tenhle kvíz je

Ne k tomu, aby vás nachytal. K tomu, aby vám ukázal, kolik z „pravidel", která kolují mezi ženami v léčbě, nemá oporu.

Každá odpověď má vysvětlení. Přečtěte si i ta u otázek, které jste trefila — obvykle je tam víc než jen potvrzení.

> Kvíz má informativní charakter a nenahrazuje pokyny vaší kliniky. Pokud se vaše doporučení liší od obecných informací zde, řiďte se svým lékařem.`,
      minutes: 5,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 10],
      topics: ['cekani', 'transfer', 'psychika'],
      level: 'deep',
      hero: 'sand',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-03-16',
      quiz: [
        {
          q: 'Může embryo z dělohy „vypadnout", když po transferu vstanete nebo si sednete?',
          options: ['Ano, proto se doporučuje ležet', 'Ne, dutina děložní není nádoba s tekutinou', 'Jen v prvních dvou hodinách'],
          correct: 1,
          explain:
            'Stěny dutiny děložní jsou v kontaktu — embryo se v nich nepohybuje jako předmět v nádobě. Prodloužené ležení se v doporučeních neprosadilo jako přínosné a po stimulaci navíc zvyšuje riziko trombózy.',
        },
        {
          q: 'Co znamená napětí prsou a nevolnost sedmý den po transferu?',
          options: [
            'Že jste velmi pravděpodobně těhotná',
            'Že vám nesedí progesteron',
            'Nic spolehlivého — progesteron vyvolává prakticky stejné příznaky jako rané těhotenství',
          ],
          correct: 2,
          explain:
            'Progesteron, který užíváte v rámci podpory luteální fáze, vyvolává napětí prsou, únavu, nevolnost i nafouklé břicho. Rozdíl mezi těhotnou a netěhotnou ženou v tomto období nelze z příznaků poznat.',
        },
        {
          q: 'Proč může domácí test osmý den po transferu ukázat druhou čárku, i když těhotenství nenastalo?',
          options: [
            'Testy jsou nespolehlivé obecně',
            'Kvůli zbytku hCG ze spouštěcí injekce, pokud jste ji dostala',
            'Kvůli progesteronu v pochvě',
          ],
          correct: 1,
          explain:
            'Spouštěcí injekce obsahující hCG se z těla vyplavuje postupně, obvykle v řádu zhruba deseti až čtrnácti dnů. Test rozdíl nepozná. V kryocyklu se vás to obvykle netýká — ověřte si to na klinice.',
        },
        {
          q: 'Můžete po transferu na toaletu?',
          options: ['Ano, močení nemá s embryem nic společného', 'Až po dvou hodinách', 'Jen vsedě, ne vestoje'],
          correct: 0,
          explain:
            'Embryo je v dutině děložní, za uzavřeným děložním hrdlem. S močením nemá anatomicky nic společného. Zadržování moči po plném měchýři u transferu je zbytečné a nepříjemné.',
        },
        {
          q: 'Začnete slabě špinit desátý den po transferu. Co uděláte s progesteronem?',
          options: [
            'Vysadím ho, je jasné, že to nevyšlo',
            'Zdvojnásobím dávku',
            'Pokračuji podle pokynu a volám na kliniku',
          ],
          correct: 2,
          explain:
            'Podporu luteální fáze nikdy nevysazujte sama a nikdy si sama neupravujte dávku. Krvácení v tomto období neznamená automaticky konec — o dalším postupu rozhoduje lékař na základě beta hCG.',
        },
        {
          q: 'Proč se dělá druhý odběr beta hCG s odstupem dvou až tří dnů?',
          options: [
            'Kvůli kontrole, jestli laboratoř neudělala chybu',
            'Protože dynamika růstu hodnoty říká víc než jediné číslo',
            'Aby se určilo pohlaví',
          ],
          correct: 1,
          explain:
            'V raném těhotenství hodnota hCG stoupá exponenciálně a u většiny zdravě se vyvíjejících těhotenství se zhruba zdvojnásobí za 48 až 72 hodin. Jedna hodnota bez kontextu vypovídá málo. Interpretace patří lékaři.',
        },
        {
          q: 'Který z těchto příznaků po čerstvém transferu vyžaduje neodkladný kontakt s lékařem?',
          options: [
            'Nafouklé břicho, které se během dne mírně mění',
            'Rychlý nárůst obvodu břicha, dušnost a výrazně snížené močení',
            'Napětí prsou a únava',
          ],
          correct: 1,
          explain:
            'To je kombinace varovných příznaků ovariálního hyperstimulačního syndromu. Volejte kliniku. Při dušnosti v klidu, bolesti na hrudi, mdlobě nebo prudké jednostranné bolesti břicha volejte 155.',
        },
      ],
    },
    {
      id: 'tww-checklist-prezit-dva-tydny',
      kind: 'checklist',
      title: 'Checklist: plán na dva týdny čekání',
      excerpt:
        'Konkrétní kroky, které si nastavíte hned po transferu, aby vás následujících čtrnáct dní nepohltilo.',
      body: `## Jak s tím pracovat

Projděte celý seznam v den transferu nebo den po něm. Většina položek zabere pár minut a udělá se jednou — pak už jen funguje.

Seznam je rozdělený do tří skupin: **medikace a zdraví**, **hlava** a **lidé kolem**. Ta poslední skupina je nejčastěji přehlížená a přitom rozhoduje o tom, jak těžké ty dva týdny budou.

## Proč právě tohle

Období po transferu má jednu zákeřnou vlastnost: **nemáte co dělat, ale máte na čem záležet.** Struktura, kterou si nastavíte předem, vás pak nese ve dnech, kdy nemáte kapacitu rozhodovat.

Nepovinné položky jsou označené. Nejsou méně důležité, jen nesedí každé.

> Checklist nenahrazuje pokyny vaší kliniky a nestanovuje žádnou medikaci. Vše, co se týká léků, konzultujte se svým lékařem.`,
      minutes: 5,
      phases: ['two_week_wait', 'transfer'],
      dayRange: [0, 3],
      topics: ['cekani', 'psychika', 'sebepece', 'leky'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      publishedOn: '2026-03-23',
      boost: 0.6,
      checklist: [
        { id: 'tww-cl-w-1', text: 'Nastavit připomínky na všechny dávky medikace', hint: 'Se zvukem, ne jen vibrací.', group: 'Medikace a zdraví' },
        { id: 'tww-cl-w-2', text: 'Zkontrolovat zásobu léků na celé období včetně víkendů', group: 'Medikace a zdraví' },
        { id: 'tww-cl-w-3', text: 'Uložit do telefonu číslo na kliniku a na pohotovost', group: 'Medikace a zdraví' },
        {
          id: 'tww-cl-w-4',
          text: 'Přečíst si a zapamatovat varovné příznaky OHSS',
          hint: 'Rychle rostoucí břicho, dušnost, snížené močení, prudký přírůstek hmotnosti.',
          group: 'Medikace a zdraví',
        },
        { id: 'tww-cl-w-5', text: 'Zapsat si přesný termín odběru beta hCG do kalendáře', group: 'Medikace a zdraví' },
        { id: 'tww-cl-w-6', text: 'Naplánovat si na každý den jednu procházku', group: 'Medikace a zdraví' },
        { id: 'tww-cl-w-7', text: 'Koupit slabé vložky do zásoby', hint: 'Tampony v tomto období ne.', group: 'Medikace a zdraví' },
        { id: 'tww-cl-w-8', text: 'Domluvit si vlastní pravidlo pro vyhledávání na internetu', hint: 'Například jednou denně, patnáct minut.', group: 'Hlava' },
        { id: 'tww-cl-w-9', text: 'Odhlásit se z diskusních skupin, kde se sdílejí fotky testů', optional: true, group: 'Hlava' },
        { id: 'tww-cl-w-10', text: 'Naplánovat každý den tři konkrétní věci', hint: 'Jednu praktickou, jednu příjemnou, jednu s lidmi.', group: 'Hlava' },
        { id: 'tww-cl-w-11', text: 'Rozhodnout se, jestli budete testovat doma — a případně od kterého dne', group: 'Hlava' },
        { id: 'tww-cl-w-12', text: 'Napsat si plán pro obě varianty výsledku a zavřít do zásuvky', group: 'Hlava' },
        { id: 'tww-cl-w-13', text: 'Uložit si jednu nahrávku nebo playlist na špatné večery', optional: true, group: 'Hlava' },
        { id: 'tww-cl-w-14', text: 'Vybrat si jednoho člověka, se kterým to budete řešit', group: 'Lidé kolem' },
        { id: 'tww-cl-w-15', text: 'Domluvit s partnerem jeden konkrétní úkol, který má na starosti', group: 'Lidé kolem' },
        { id: 'tww-cl-w-16', text: 'Říct rodině, jak s vámi mluvit', hint: 'Například: neptejte se, ozvu se sama.', group: 'Lidé kolem' },
        { id: 'tww-cl-w-17', text: 'Vyřešit pracovní zátěž na následující dva týdny', group: 'Lidé kolem' },
        { id: 'tww-cl-w-18', text: 'Nedávat si žádný termín na den odběru ani na den po něm', group: 'Lidé kolem' },
        { id: 'tww-cl-w-19', text: 'Domluvit se, kdo bude v den výsledku s vámi', optional: true, group: 'Lidé kolem' },
      ],
    },
    {
      id: 'tww-pribeh-ctrnact-dni',
      kind: 'story',
      title: 'Čtrnáct dní: příběh třetího transferu',
      excerpt:
        'Poctivé vyprávění o dvou týdnech, ve kterých se nedělo nic — a přesto to bylo to nejtěžší období z celé léčby.',
      body: `## Den nula

Na transfer jsem šla potřetí a byla jsem přesvědčená, že už mě nic nepřekvapí. Znala jsem cestu, znala jsem chodbu, znala jsem tu židli v čekárně s prasklým čalouněním.

Překvapilo mě, jak moc jsem se bála. Ne zákroku — ten trvá pět minut a nebolí. Bála jsem se toho, co přijde po něm.

Embryolog řekl číslo a písmeno, kterým jsem nerozuměla, a ukázal fotku. Vypadalo to jako šedý kroužek. Chtěla jsem se zeptat, jestli je to dobré, ale nezeptala jsem se. Dodnes nevím proč.

## První týden

První dny jsem se chovala, jako bych byla ze skla. Nezvedla jsem ani tašku s pečivem. Manžel nosil nákupy sám a nic k tomu neříkal, což mě štvalo víc, než kdyby něco řekl.

Čtvrtý den jsem se přistihla, jak v šest ráno googluju „5. den po transferu příznaky". Vylezlo mi dvě stě tisíc výsledků a v každém stálo něco jiného. Přečetla jsem třicet z nich a bylo mi hůř než předtím.

Pátý den jsem měla křeče a byla jsem si jistá, že je konec.
Šestý den křeče přestaly a byla jsem si jistá, že je konec, protože jsem nic necítila.

Takhle to funguje. Cokoli se dá vyložit oběma směry.

## Zlom

Sedmý den mi kamarádka, která tím prošla dvakrát, řekla větu, kterou si pamatuju dodnes: **„Ty ty dva týdny nemáš vyhrát. Ty je máš přežít."**

Do té doby jsem si myslela, že když budu dost opatrná, dost klidná a dost hodná na svoje tělo, něco tím ovlivním. Ta věta mi to vzala. A zároveň mi ulevila víc než všechno ostatní.

Od osmého dne jsem chodila do práce. Ne proto, že by to bylo doporučené. Proto, že doma jsem se zbláznila.

## Druhý týden

Devátý den jsem udělala test. Byl negativní. Brečela jsem v koupelně půl hodiny a pak jsem šla do práce s tím, že je to za mnou.

Desátý den jsem udělala další. Slabá čárka. Tak slabá, že jsem nevěděla, jestli ji vidím, nebo si ji přeju.

Jedenáctý den jsem přestala testovat, protože mi došlo, že tímhle tempem se do odběru dostanu jako troska.

Dvanáctý a třináctý den byly zvláštně klidné. Ne proto, že bych se smířila. Prostě mi došla energie být vyděšená.

## Odběr

Čtrnáctý den ráno jsem seděla v odběrové místnosti a sestra se mě zeptala, jestli jsem nervózní. Řekla jsem, že ne. Byla to lež a obě jsme to věděly.

Volali odpoledne. Slyšela jsem číslo, zapsala jsem si ho na okraj novin, protože jsem neměla papír, a pak jsem se zeptala, jestli je to dobré. Sestra řekla: *„Ano, na tenhle den je to dobrá hodnota. Za dva dny přijďte znovu."*

## Co bych řekla sama sobě

**Netestuj doma.** Nebo aspoň ne dřív než desátý den. Ty testy mě stály čtyři dny života.

**Nechoď do toho sama.** Ne že bych neměla lidi. Měla jsem. Jen jsem si myslela, že je nesmím zatěžovat.

**Ptej se embryologa na všechno.** Ta nezodpovězená otázka o kroužku na fotce mi vrtala hlavou celé dva týdny.

**A hlavně:** ty dva týdny nejsou zkouška, kterou můžeš udělat lépe nebo hůře. Nejsou test tvojí síly. Jsou to jen čtrnáct dní, které musíš přejít — a je jedno, jestli je přejdeš vzpřímeně, nebo po kolenou.

> Osobní příběh není lékařským doporučením. Postup, medikaci i termíny vždy konzultujte se svým ošetřujícím lékařem.`,
      minutes: 8,
      phases: ['two_week_wait'],
      dayRange: [1, 14],
      topics: ['cekani', 'psychika', 'komunita'],
      level: 'comfort',
      hero: 'taupe',
      author: 'Tým Bloomia',
      publishedOn: '2026-03-30',
      boost: 0.5,
    },
    {
      id: 'tww-po-pozitivni-bete',
      kind: 'article',
      title: 'Pozitivní beta: co se děje teď a proč to není konec čekání',
      excerpt:
        'Číslo přišlo, ale úleva nepřichází — a to je normálnější, než vám kdokoli řekne.',
      body: `## Nejdřív si to dovolte

Ať už jste zavřená v koupelně a brečíte, nebo sedíte a nic necítíte, nebo máte hlavně strach — všechno tohle je běžná reakce na pozitivní betu po IVF.

Ženy, které čekaly roky, často popisují, že místo radosti přišlo **ochromení**. Důvod je jednoduchý: **naučila jste se nedoufat, protože to bylo bezpečnější.** Ten obranný mechanismus se nevypne v jedné vteřině a nemusí.

## Co se bude dít prakticky

Konkrétní plán vám dá klinika, ale obvyklý rámec vypadá takhle:

1. **Kontrolní odběr beta hCG** za dva až tři dny. Sleduje se dynamika — jestli hodnota stoupá tak, jak se očekává.
2. **Pokračování v podpoře luteální fáze**, často delší dobu než dosud. **Nic sama nevysazujte, ani když se cítíte skvěle.**
3. **První ultrazvuk** v čase, kdy už může něco ukázat. Termín určuje lékař, obvykle to bývá s odstupem několika týdnů od pozitivní bety.
4. **Předání do péče gynekologa** — kdy a jak, to se mezi pracovišti liší.

## Otázky, které si teď zapište

- Kdy přesně mám další odběr a kde?
- Pokračuji ve všech lécích ve stejném režimu? Do kdy?
- Kdy je první ultrazvuk a kdo mě objedná?
- Kdy se mám hlásit svému gynekologovi?
- Jaké příznaky znamenají, že mám volat okamžitě?
- Můžu pokračovat v práci ve stejném režimu?

## Úzkost, která nastoupí místo radosti

Skoro každá žena po IVF popisuje totéž: **čekání se nezastavilo, jen se změnilo.** Místo „vyšlo to?" nastoupí „udrží se to?".

Co pomáhá:

- **Nepočítejte dny do ultrazvuku každou hodinu.** Dejte si jeden pevný okamžik denně, kdy si to dovolíte.
- **Nezakládejte si zatím nic.** Ani seznam jmen, ani výbavičku. Ne z pověrčivosti — jen proto, že v týdnech nejistoty to zvyšuje tlak.
- **Řekněte si nahlas, koho chcete informovat teď a koho až po ultrazvuku.** Zpětvzetí zprávy bolí víc než čekání s ní.
- **Dovolte si opatrnou verzi radosti.** „Dnes jsem těhotná" je pravdivá věta, i když nevíte, co bude za měsíc.

## Co změnit hned

- **alkohol a kouření** — od teď ne,
- **léky a doplňky** — cokoli užíváte, včetně volně prodejných věcí a bylin, konzultujte,
- **kyselina listová a další doporučené doplňky** podle pokynu lékaře,
- **potraviny s rizikem infekce** — nepasterizované sýry, syrové maso a ryby, syrová vejce,
- **zubař, léky na bolest, rentgen** — vždy ohlaste, že jste těhotná.

## A co když přijde krvácení

Špinění v raném těhotenství po IVF není vzácné a **neznamená automaticky ztrátu**. Přesto patří vždy na kliniku, ne do diskusního fóra. Zavolejte a řekněte přesně, kolik krve, jaká barva a od kdy.

## Kdy volat lékaře

- **silné krvácení** nebo krvácení se sraženinami,
- **prudká, zejména jednostranná bolest v podbřišku**,
- **bolest v rameni nebo mezi lopatkami, mdloba, závrať, studený pot** — možné příznaky mimoděložního těhotenství; volejte 155 nebo jeďte na pohotovost,
- **horečka nad 38 °C**,
- **rychle rostoucí obvod břicha, dušnost, výrazně snížené močení, prudký přírůstek hmotnosti** — po čerstvém cyklu může jít o pozdní OHSS,
- **opakované zvracení a neschopnost udržet tekutiny**.

> Tento text nestanovuje diagnózu ani nenahrazuje lékařskou péči. Váš konkrétní plán sledování a medikace určuje výhradně váš ošetřující lékař.`,
      minutes: 8,
      phases: ['beta_positive'],
      dayRange: [0, 7],
      topics: ['vysledky', 'tehotenstvi', 'psychika', 'leky'],
      level: 'essential',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-04-06',
      boost: 0.9,
    },
    {
      id: 'tww-prvni-ultrazvuk',
      kind: 'article',
      title: 'První ultrazvuk po IVF: co uvidíte a čeho se bojíte',
      excerpt:
        'Vyšetření, na které čekáte s větší úzkostí než na betu — a které vám poprvé ukáže něco skutečného.',
      body: `## Proč se nedělá hned

Ultrazvuk potřebuje, aby bylo co vidět. Před určitou hodnotou hCG a určitým gestačním stářím nález nic nepotvrdí ani nevyvrátí — a **předčasné vyšetření obvykle přinese jen další dva týdny nejistoty**, ne odpověď.

Proto klinika termín stanoví podle vašich hodnot a podle data transferu, ne podle toho, kdy byste to nejradši věděla.

## Co se na ultrazvuku postupně objevuje

V raném těhotenství se struktury objevují v určitém pořadí, každá s odstupem několika dnů:

1. **Plodový váček** — první viditelná struktura v děloze.
2. **Žloutkový váček** uvnitř něj.
3. **Zárodek** a jeho velikost, ze které se počítá gestační stáří.
4. **Srdeční akce** — okamžik, na který čekáte.

Pokud vám lékař řekne, že „ještě není vidět všechno", **nemusí to znamenat problém.** Často jde o rozdíl několika dnů a řešením bývá kontrolní ultrazvuk s odstupem. Ten odstup je nesnesitelný a je to jediný správný postup.

## Jak vyšetření probíhá

V raném těhotenství se obvykle provádí **vaginální sonografie** — sonda přes pochvu dává v tomhle stádiu výrazně lepší obraz než vyšetření přes břicho. Nebolí, ale bývá nepříjemné, hlavně pokud máte zvětšené vaječníky po stimulaci.

Praktické:

- **Močový měchýř by měl být prázdný**, ale ověřte si to.
- Vezměte si **doprovod**, pokud chcete. Nemusíte to zvládat sama.
- **Řekněte na začátku, jak to chcete.** Například: *„Prosím, řekněte mi hned, jestli je vidět srdíčko."* Lékaři často mlčky měří a to ticho ženy interpretují jako katastrofu.

## Co se bude zjišťovat

- **kolik plodových váčků** — tady se potvrdí nebo vyvrátí vícečetné těhotenství,
- **uložení** — jestli je těhotenství v děloze; tohle je jeden z hlavních důvodů, proč se vyšetření dělá,
- **velikost a odpovídající stáří**,
- **srdeční akce**,
- **stav vaječníků a přítomnost volné tekutiny**, hlavně po čerstvém cyklu.

## Ta úzkost před vyšetřením

Ženy po IVF popisují cestu na první ultrazvuk jako horší než všechno předtím. Beta je číslo. Ultrazvuk je obraz — a obraz se dá ztratit.

Co pomáhá:

- **Naplánujte si, co budete dělat hned po vyšetření.** Ne oslavu, jen konkrétní věc. Kavárna, procházka, cesta domů s někým.
- **Nedávejte si na ten den nic dalšího.**
- **Domluvte se předem, komu voláte a v jaké variantě.**
- **Nečtěte předem cizí příběhy o tom, co se na prvním ultrazvuku nenašlo.**

## Když nález není jednoznačný

Stává se to častěji, než se mluví. Možnosti bývají: příliš brzy, posunuté datum, nutnost kontroly za týden. **Zeptejte se, co konkrétně budete sledovat a kdy je další termín** — plán je jediná věc, kterou v tu chvíli reálně dostanete, a stojí za to si ji odnést.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká, zejména jednostranná bolest v podbřišku,
- bolest v rameni, mdloba, závrať, studený pot — volejte 155,
- horečka nad 38 °C,
- rychle rostoucí obvod břicha, dušnost, snížené močení,
- opakované zvracení a neschopnost udržet tekutiny.

> Tento text popisuje obvyklý průběh vyšetření a nenahrazuje lékařskou péči. Nález i další postup hodnotí výhradně váš lékař.`,
      minutes: 7,
      phases: ['beta_positive'],
      dayRange: [7, 30],
      topics: ['vysledky', 'tehotenstvi', 'klinika', 'psychika'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP', 'ESHRE — doporučené postupy'],
      publishedOn: '2026-04-13',
      boost: 0.75,
    },
    {
      id: 'tww-cekani-po-ztrate',
      kind: 'article',
      title: 'Čekání, když už jste jednou ztratila',
      excerpt:
        'Dva týdny čekání po ztrátě mají jiná pravidla — a nikdo vám nemá právo říkat, ať se radujete.',
      body: `## Proč je tohle jiné

Žena, která čeká poprvé, se bojí neznámého. Žena, která už jednou ztratila, se **bojí konkrétní vzpomínky**. To je jiný druh strachu a zaslouží si jiné zacházení.

Vaše tělo si pamatuje. Pamatuje si tu chodbu, ten telefonát, tu barvu krve. Když vám někdo řekne „teď to bude jiné", není to útěcha — je to věta, kterou nemůže nikdo garantovat.

## Co si dovolte

**Dovolte si nedoufat.** Opatrnost není nedostatek víry a rozhodně to není důvod, proč by něco nemělo vyjít. Je to obranný mechanismus, který vám umožní ty dva týdny přežít.

**Dovolte si nemluvit o tom v budoucím čase.** Nemusíte říkat „až budeme mít miminko". Můžete říkat „dneska jsem po transferu" a to stačí.

**Dovolte si být na místech, kde vám je líp.** Pokud vás rozhovory s těhotnými kamarádkami ničí, můžete je odložit. Není to závist ani nepřejícnost.

## Co si nedovolte

Jedinou věc: **vinu.** Ztráta, kterou jste prožila, nebyla vaše chyba. Nebyla způsobená tím, že jste zvedla tašku, jela na kole nebo se moc stresovala. Většina časných ztrát má příčiny, které nikdo neovlivní.

Pokud v hlavě pořád běží „co jsem udělala špatně", je to signál, že by vám prospěla odborná pomoc — ne proto, že jste slabá, ale proto, že tahle smyčka se sama neuzavře.

## Praktické věci, které pomáhají

- **Zeptejte se lékaře, jestli se ve vašem případě něco změnilo** oproti minulému cyklu. Konkrétní odpověď snižuje pocit, že jdete do stejné situace naslepo.
- **Vyhněte se výročím**, pokud to jde. Termín, který by byl, datum ztráty — vědomí, že to datum spadá do dvou týdnů čekání, se dá předem ošetřit.
- **Domluvte se předem, jak dostanete výsledek.** Po ztrátě je způsob sdělení ještě důležitější.
- **Mějte plán pro obě varianty.** U žen po ztrátě to funguje ještě výrazněji než u ostatních.

## Když se objeví krvácení

Reakce bývá okamžitá a totální — tělo si vybaví minule. Zkuste si předem nachystat postup, který provedete místo paniky:

1. Podívám se, kolik toho je (vložka, ne papír).
2. Zapíšu si čas, barvu, množství.
3. Zavolám na kliniku.
4. Zavolám tomu jednomu člověku.

Postup napsaný předem funguje ve chvíli, kdy vám hlava nefunguje.

## Co říct lidem kolem

- *„Nechci, abys mi říkal, že to určitě vyjde. Chci, abys byl se mnou, ať to dopadne jakkoli."*
- *„Neptej se mě, jak se cítím. Zeptej se, co potřebuju."*
- *„Až budeme vědět, řeknu ti to. Do té doby prosím ne."*

## Kdy vyhledat odbornou pomoc

- vracející se vzpomínky nebo noční můry na předchozí ztrátu,
- panické ataky,
- neschopnost fungovat v běžném dni,
- pocit, že by bylo lepší tu nebýt — **v tom případě vyhledejte pomoc okamžitě**, Linka první psychické pomoci 116 123 funguje nonstop a zdarma.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká, zejména jednostranná bolest v podbřišku,
- bolest v rameni, mdloba, závrať,
- horečka nad 38 °C.

> Tento text nenahrazuje odbornou psychologickou ani lékařskou péči. Pokud prožíváte krizi, obraťte se na odborníka.`,
      minutes: 7,
      phases: ['two_week_wait', 'transfer'],
      dayRange: [1, 14],
      topics: ['psychika', 'ztrata', 'cekani'],
      modifiers: ['after_loss', 'repeated_failure'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-04-20',
      boost: 0.6,
    },
    {
      id: 'tww-slovnicek-cekani',
      kind: 'glossary',
      title: 'Slovníček: pojmy, které uslyšíte kolem transferu',
      excerpt:
        'Blastocysta, hatching, luteální podpora, beta — patnáct pojmů vysvětlených tak, abyste na klinice kývala se skutečným porozuměním.',
      body: `## Proč tohle potřebujete

Na klinice zazní během pěti minut deset odborných výrazů. Ženy obvykle kývnou a doma googlují. Tady je máte pohromadě.

## Embryo a laboratoř

**Blastocysta** — stadium embrya zhruba pátý až šestý den po oplození. Má už dva typy buněk: vnitřní buněčnou masu (z ní vzniká plod) a trofoblast (z něj placenta).

**Hatching (líhnutí)** — proces, při kterém se blastocysta probourává ven z obalu zvaného zona pellucida. Bez toho se nemůže přichytit ke sliznici.

**Zona pellucida** — obal vajíčka a časného embrya.

**Asistovaný hatching** — laboratorní pomoc při narušení obalu. Zda má ve vašem případě smysl, rozhoduje embryolog a lékař.

**Vitrifikace** — metoda ultrarychlého zamrazení embryí.

**KET (kryoembryotransfer)** — přenos rozmrazeného embrya.

## Děloha a transfer

**Endometrium** — děložní sliznice, do které se embryo zahnizďuje.

**Implantační okno** — časově omezené období, kdy je sliznice připravená přijmout embryo. Právě proto se tak hlídá časování progesteronu.

**Katétr** — tenká měkká hadička, kterou se embryo přenáší do dutiny děložní.

**Implantace (nidace)** — zahnízdění embrya ve sliznici.

## Hormony a výsledky

**Luteální fáze** — druhá polovina cyklu, od ovulace do menstruace nebo do nástupu těhotenství.

**Podpora luteální fáze** — doplňování progesteronu (případně dalších hormonů) po transferu. Po IVF je standardem.

**Progesteron** — hormon, který připravuje a udržuje děložní sliznici.

**hCG** — hormon produkovaný zárodečnou tkání po zahnízdění. Základ těhotenského testu.

**Beta hCG** — stanovení hCG z krve. Přesnější než test z moči a dá vám číslo.

**Zdvojovací čas** — doba, za kterou hodnota hCG vzroste na dvojnásobek. V raném těhotenství to bývá zhruba 48 až 72 hodin.

**Biochemické těhotenství** — velmi časná ztráta, kdy se hCG objevilo, ale těhotenství se dál nerozvinulo.

## Komplikace, o kterých je dobré vědět

**OHSS** — ovariální hyperstimulační syndrom, komplikace stimulace. Pozdní forma souvisí s hCG z nastupujícího těhotenství.

**Mimoděložní (ektopické) těhotenství** — zahnízdění mimo dutinu děložní. Vyžaduje neodkladné řešení.

> Slovníček slouží k orientaci. Nenahrazuje výklad vašeho lékaře a nestanovuje žádnou diagnózu.`,
      minutes: 6,
      phases: ['transfer', 'two_week_wait', 'beta_positive'],
      dayRange: [0, 14],
      topics: ['embryologie', 'transfer', 'hormony', 'vysledky'],
      level: 'deep',
      hero: 'pearl',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-04-27',
    },
    {
      id: 'tww-kdyz-to-nevyslo-prvni-hodiny',
      kind: 'article',
      title: 'Když beta vyjde negativní: první hodiny a první dny',
      excerpt:
        'Praktický text pro den, kdy nebudete schopná číst nic dlouhého — proto je krátký a konkrétní.',
      body: `## Nejdřív to praktické

**1. Zeptejte se, kdy vysadit léky.** Nevysazujte nic sama, ani teď. Klinika vám řekne přesně, co a kdy.

**2. Počítejte s krvácením.** Po vysazení progesteronu obvykle přijde krvácení do několika dnů. Bývá silnější než běžná menstruace a může trvat déle. Pokud je opravdu silné, volejte.

**3. Domluvte si kontrolní konzultaci.** Ne dnes. Ale domluvte si ji — je to schůzka, kde se probírá, co dál a jestli se něco změní v dalším postupu.

**4. Zjistěte, jestli vám zůstala zamrazená embrya.** Tuhle informaci nemusíte chtít hned. Ale je dobré vědět, že existuje.

## A teď to podstatnější

To, co prožíváte, je ztráta. I když nikdo neviděl žádný ultrazvuk. I když to trvalo čtrnáct dní. **Truchlíte po představě, se kterou jste čtrnáct dní žila** — a ta byla skutečná.

Nemusíte být statečná. Nemusíte hned mluvit o dalším pokusu. Nemusíte nikoho uklidňovat.

## Věty, které dnes uslyšíte a které bolí

*„Aspoň víte, že jde otěhotnět."* — *„Zkusíte to znovu."* — *„Určitě příště."* — *„Nesmíte se stresovat."*

Lidé je říkají z bezradnosti, ne ze zlé vůle. Nemusíte na ně reagovat. Můžete říct jen: *„Teď na to nemám sílu."*

## Co dnes udělat

- **Zrušte, co jde zrušit.** Ne všechno, jen to, co dnes neunesete.
- **Nerozhodujte nic velkého.** Ani o dalším cyklu, ani o práci, ani o vztahu. Dnes ne.
- **Jezte a pijte.** Zní to banálně. Není.
- **Nezůstávejte sama**, pokud to jde. A pokud chcete být sama, dejte někomu vědět, že se ozvete večer.
- **Nechte partnera truchlit po svém.** Muži často reagují činností nebo mlčením. Neznamená to, že jim to je jedno.

## Následující dny

První týden bývá nejtěžší, druhý často taky. Postupně se to mění. Není žádný správný čas, kdy má člověk „být v pořádku".

Ozvěte se odborníkovi, pokud:

- nespíte několik nocí po sobě,
- nejste schopná fungovat v běžném dni déle než pár týdnů,
- objeví se myšlenky, že by bylo lepší tu nebýt — **vyhledejte pomoc okamžitě**.

Linka první psychické pomoci: **116 123**, nonstop a zdarma.

## Kdy volat lékaře

- **velmi silné krvácení** — promáčená vložka za hodinu a méně, opakovaně,
- krvácení se **sraženinami většími než pár centimetrů**,
- **prudká bolest v podbřišku**,
- **horečka nad 38 °C** nebo páchnoucí výtok,
- **mdloba, závrať, bušení srdce, bolest v rameni**,
- krvácení, které nepřijde ani po týdnu od vysazení léků.

> Tento text nenahrazuje lékařskou ani psychologickou péči. Postup po negativním výsledku i vysazení medikace vždy konzultujte se svou klinikou.`,
      minutes: 6,
      phases: ['two_week_wait'],
      dayRange: [14, 16],
      topics: ['ztrata', 'psychika', 'vysledky'],
      level: 'comfort',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-05-04',
      boost: 0.5,
    },
    {
      id: 'tww-otazky-na-embryologa',
      kind: 'checklist',
      title: 'Checklist: co se zeptat embryologa a lékaře v den transferu',
      excerpt:
        'Otázky, které si přečtete v čekárně — protože ve chvíli, kdy se vás zeptají „máte nějaký dotaz?", vám nenapadne nic.',
      body: `## Proč zrovna v čekárně

Rozhovor s embryologem trvá pár minut a probíhá ve chvíli, kdy jste nervózní a máte plný močový měchýř. **Otázky, které si nepřipravíte předem, si nevzpomenete.**

Nemusíte položit všechny. Vyberte si tři, které vás nejvíc zajímají, a ty si zaškrtněte.

## Jak si odpovědi zapsat

Vezměte si papír, ne telefon — psaní rukou v tomhle prostředí funguje líp a nikoho neurazíte. Nebo požádejte partnera, ať píše on.

Pokud odpovědi nerozumíte, řekněte to. Věta *„Můžete mi to říct ještě jednou jinak?"* je naprosto legitimní a embryologové ji slyší denně.

> Checklist slouží k přípravě na rozhovor. Odpovědi a jejich výklad patří vašemu ošetřujícímu týmu.`,
      minutes: 4,
      phases: ['transfer'],
      dayRange: [0, 0],
      topics: ['embryologie', 'transfer', 'klinika'],
      level: 'deep',
      hero: 'sand',
      author: 'Tým Bloomia',
      publishedOn: '2026-05-11',
      checklist: [
        { id: 'tww-cl-e-1', text: 'V jakém stadiu je embryo, které dnes přenášíte?', group: 'Embryolog' },
        { id: 'tww-cl-e-2', text: 'Jak se embryo hodnotí a co to hodnocení znamená?', hint: 'Poproste o vysvětlení v běžných slovech.', group: 'Embryolog' },
        { id: 'tww-cl-e-3', text: 'Kolik embryí zůstává a v jakém stadiu jdou na zamrazení?', group: 'Embryolog' },
        { id: 'tww-cl-e-4', text: 'Kdy a jak se dozvím, jak zamrazení dopadlo?', group: 'Embryolog' },
        { id: 'tww-cl-e-5', text: 'Jak embryo sneslo rozmrazení a nafouklo se?', hint: 'Jen u kryoembryotransferu.', optional: true, group: 'Embryolog' },
        { id: 'tww-cl-e-6', text: 'Dělal se asistovaný hatching a proč ano nebo ne?', optional: true, group: 'Embryolog' },
        { id: 'tww-cl-e-7', text: 'Můžu dostat fotku embrya?', optional: true, group: 'Embryolog' },
        { id: 'tww-cl-e-8', text: 'Kdy přesně mám jít na odběr beta hCG?', group: 'Lékař' },
        { id: 'tww-cl-e-9', text: 'Jaký je přesný plán podpory luteální fáze?', hint: 'Co, kolikrát denně, do kdy.', group: 'Lékař' },
        { id: 'tww-cl-e-10', text: 'Co mám dělat, když dávku vynechám?', group: 'Lékař' },
        { id: 'tww-cl-e-11', text: 'Jaká omezení konkrétně platí pro mě?', hint: 'Sport, sex, cestování, koupel.', group: 'Lékař' },
        { id: 'tww-cl-e-12', text: 'Jaké příznaky znamenají, že mám volat okamžitě?', group: 'Lékař' },
        { id: 'tww-cl-e-13', text: 'Kdo drží pohotovost o víkendu a na jaké číslo volám?', group: 'Lékař' },
        { id: 'tww-cl-e-14', text: 'Můžu pracovat ve svém běžném režimu?', group: 'Lékař' },
        { id: 'tww-cl-e-15', text: 'Kdo mi bude volat výsledek a v jakém čase?', group: 'Lékař' },
      ],
    },
    {
      id: 'tww-kurz-dva-tydny-krok-za-krokem',
      kind: 'course',
      title: 'Kurz: dva týdny čekání krok za krokem',
      excerpt:
        'Čtyři krátké kapitoly, které vás provedou od odchodu z kliniky až k telefonátu s výsledkem.',
      body: `## Pro koho je tenhle kurz

Pro ženu, která právě odešla z kliniky po transferu a neví, co s následujícími čtrnácti dny.

Kurz nemá ambici zvýšit vaše šance — to není v moci žádného textu. Má ambici **dát těm dvěma týdnům strukturu**, aby vás nesežraly.

Každá kapitola má konkrétní obsah a jeden úkol. Můžete je projít najednou, nebo si je rozložit — první kapitolu v den transferu, poslední v den před odběrem.

## Co v kurzu nenajdete

Sliby. Rady typu „myslete pozitivně". Seznamy potravin, které mají zaručit zahnízdění. Fotky testů.

> Kurz má informativní a podpůrný charakter a nenahrazuje lékařskou péči. Vše, co se týká vaší medikace a zdravotního stavu, konzultujte se svým lékařem.`,
      minutes: 24,
      phases: ['transfer', 'two_week_wait'],
      dayRange: [0, 14],
      topics: ['cekani', 'psychika', 'transfer', 'sebepece'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-05-18',
      boost: 0.65,
      chapters: [
        {
          title: 'Kapitola 1: První čtyřicet osm hodin',
          minutes: 6,
          body: `## Co dnes udělat a co ne

Den transferu berte jako lehký den, ne jako den v posteli. Klid ano, nehybnost ne — po stimulaci má dlouhé ležení svá vlastní rizika.

**Tři věci na dnešek:**
1. Nastavit připomínky na medikaci.
2. Zapsat si termín odběru beta hCG do kalendáře.
3. Uložit číslo na kliniku a zjistit víkendovou pohotovost.

## Co je normální cítit

Mírné křeče, tlak v podbřišku, lehké špinění po manipulaci s hrdlem, nafouklé břicho po stimulaci, únava. Nic z toho o výsledku nevypovídá.

## Úkol

Napište si na papír jednu větu, kterou budete v příštích dnech říkat lidem, kteří se budou ptát. Například: *„Až budu vědět, ozvu se sama."*`,
        },
        {
          title: 'Kapitola 2: Jak se nezbláznit z příznaků',
          minutes: 6,
          body: `## Proč vám tělo lže

Progesteron, který užíváte, vyvolává napětí prsou, únavu, nevolnost, nafouklé břicho i mírné křeče — tedy přesně to, co bývá popisováno jako první příznaky těhotenství. **Rozdíl mezi těhotnou a netěhotnou ženou v tomhle období z příznaků nepoznáte.**

## Symptom spotting a jak z něj ven

- Zaveďte si okno: pět minut ráno, kdy si dovolíte kontrolovat, co cítíte. Zbytek dne ne.
- Nepiště si deník příznaků.
- Zrušte si vyhledávání typu „7. den po transferu".

## Co naopak sledovat

Varovné příznaky: silné krvácení, prudká bolest, horečka, rychle rostoucí břicho, dušnost, snížené močení, bolest lýtka. Tenhle seznam znejte nazpaměť.

## Úkol

Odhlaste se z jedné skupiny nebo vypněte jedno upozornění, které vás v posledních dnech rozhodilo nejvíc.`,
        },
        {
          title: 'Kapitola 3: Testovat, nebo netestovat',
          minutes: 6,
          body: `## Proč brzké testy klamou

Tři důvody: hCG je v moči zpožděné za krví; zbytek hCG ze spouštěcí injekce může držet falešnou pozitivitu zhruba deset až čtrnáct dní; a i skutečně pozitivní časný test neřekne nic o dynamice.

## Když už testovat

- ne dřív než devátý až desátý den po transferu blastocysty,
- ranní moč,
- jeden typ testu, jednou denně,
- žádné fotky do skupin,
- **na odběr krve jděte bez ohledu na výsledek**.

## A hlavně

Ani po negativním domácím testu nevysazujte podporu luteální fáze. O tom rozhoduje lékař podle bety.

## Úkol

Rozhodněte se teď, jestli budete testovat a od kterého dne. Napište si to. Rozhodnutí učiněné dnes vydrží líp než rozhodování v šest ráno v koupelně.`,
        },
        {
          title: 'Kapitola 4: Den výsledku',
          minutes: 6,
          body: `## Připravte si obě verze

Napište si na papír, co uděláte v obou případech: komu zavoláte, jestli půjdete do práce, kdo bude s vámi, kdy je další termín na klinice.

Zní to jako přivolávání neúspěchu. Není. Ženy, které to udělaly, popisují ten den jako výrazně snesitelnější.

## Otázky na telefonát

1. Jaká je přesná hodnota a kolikátý den po transferu byl odběr?
2. Kdy mám kontrolní odběr?
3. Pokračuji v lécích stejně?
4. Kdy je ultrazvuk?
5. Na co si mám dát pozor?

Mějte u telefonu papír a tužku. Do telefonu si to nezapíšete.

## Po hovoru

Jeden člověk, který to řekne dál. Vy zvládnete jeden hovor, on zvládne zbytek.

## Úkol

Zapište si těch pět otázek na papír a dejte ho k telefonu.`,
        },
      ],
    },
  ],
  dailyCards: [
    {
      id: 'tww-dc-transfer-den-0',
      phases: ['transfer'],
      day: 0,
      headline: 'Dnes je embryo doma',
      body: 'Přenos trvá pár minut a je to nejjednodušší výkon celého cyklu — a zároveň den, na který jste čekala nejdéle. Embryo je teď v dutině děložní, ve štěrbině, jejíž stěny jsou v kontaktu, takže nikam nevypadne, ať dnes budete dělat cokoli. Vaše jediná skutečná práce od téhle chvíle je užívat podporu luteální fáze přesně podle pokynu.',
      whatsHappening: [
        'Blastocysta je uložená v děloze a zatím je uzavřená ve svém obalu',
        'Mírné křeče nebo lehké špinění bývají z manipulace s děložním hrdlem',
        'Po plném močovém měchýři je úleva okamžitá — a na toaletu smíte',
        'Po čerstvém cyklu můžete mít stále nafouklé břicho po stimulaci',
      ],
      task: 'Nastavte si v telefonu připomínky na všechny dávky medikace na následujících čtrnáct dní a uložte si číslo na kliniku včetně víkendové pohotovosti.',
      reflection: 'Co dnes potřebuju od lidí kolem sebe — mluvit, mlčet, nebo mít klid?',
      tip: 'Zapište si hned dnes přesný termín odběru beta hCG a to, co vám řekl embryolog. Za tři dny si z toho rozhovoru vybavíte třetinu.',
      callDoctorIf: [
        'Silné krvácení, silnější než menstruace, nebo se sraženinami',
        'Prudká, narůstající bolest v podbřišku',
        'Horečka nad 38 °C',
        'Rychle rostoucí obvod břicha, dušnost nebo výrazně snížené močení',
      ],
    },
    {
      id: 'tww-dc-2ww-den-1',
      phases: ['two_week_wait'],
      day: 1,
      headline: 'Den 1: blastocysta se začíná líhnout',
      body: 'Embryo se rozpíná a začíná se probourávat ven ze svého obalu — tomu se říká hatching neboli líhnutí. Bez tohoto kroku by se ke sliznici vůbec nemohlo přichytit. Vy z toho neucítíte vůbec nic a to je naprosto v pořádku.',
      whatsHappening: [
        'Blastocysta nasává tekutinu, zvětšuje objem a tlačí na obal zvaný zona pellucida',
        'Ještě nedošlo k žádnému kontaktu se sliznicí',
        'Žádný hormon těhotenství se zatím netvoří — test by neukázal nic',
        'Cokoli dnes cítíte, jde na vrub progesteronu nebo doznívající stimulaci',
      ],
      task: 'Naplánujte si na dnešek jednu procházku, klidně jen dvacet minut. Chůze je po stimulaci lepší než ležení.',
      reflection: 'Čeho se z těch čtrnácti dní bojím nejvíc — výsledku, nebo toho čekání?',
      tip: 'Dnes je dobrý den zavést si vlastní pravidlo pro internet. Například: hledám maximálně jednou denně a jen na zdrojích, kterým věřím.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká bolest v podbřišku',
        'Horečka nad 38 °C',
        'Rychle rostoucí břicho, dušnost nebo výrazně snížené močení',
      ],
    },
    {
      id: 'tww-dc-2ww-den-2',
      phases: ['two_week_wait'],
      day: 2,
      headline: 'Den 2: embryo opouští svůj obal',
      body: 'Líhnutí obvykle dnes končí — blastocysta se dostává ven ze zony pellucidy a poprvé je nahá v dutině děložní. Teprve teď má vůbec šanci dotknout se výstelky dělohy. Vaše tělo na tom nemá žádný podíl, který byste mohla ovlivnit.',
      whatsHappening: [
        'Vylíhlá blastocysta se volně pohybuje v tenké vrstvě tekutiny mezi stěnami dělohy',
        'Sliznice je připravovaná progesteronem, který užíváte',
        'Napětí prsou a únava, které možná cítíte, jsou účinkem progesteronu, ne známkou výsledku',
        'Druhý den bývá psychicky horší než první — adrenalin z transferu opadl',
      ],
      task: 'Napište si na papír tři konkrétní věci na zítřek: jednu praktickou, jednu příjemnou, jednu s lidmi. Prázdný den je teď nepřítel.',
      reflection: 'Kdo je ten jeden člověk, se kterým tohle chci sdílet, a ví o tom?',
      tip: 'Vaginální progesteron zavádějte večer vleže a zůstaňte chvíli ležet. Ráno pak odteče méně nosiče a nebudete si zbytečně zvyšovat tep.',
    },
    {
      id: 'tww-dc-2ww-den-3',
      phases: ['two_week_wait'],
      day: 3,
      headline: 'Den 3: první dotek se sliznicí',
      body: 'Vylíhlá blastocysta se přibližuje k děložní sliznici a dochází k prvnímu kontaktu — odborně se tomu říká apozice. Je to velmi jemný, vratný krok, ještě ne pevné přichycení. Nic z toho nelze urychlit ani zkazit tím, co dnes uděláte.',
      whatsHappening: [
        'Buňky trofoblastu, ze kterých později vznikne placenta, se dotýkají výstelky dělohy',
        'Endometrium je díky progesteronu v takzvaném implantačním okně',
        'Stále se netvoří žádné měřitelné hCG',
        'Tahavé pocity v podbřišku bývají z progesteronu nebo ze střev, která zpomalil',
      ],
      task: 'Zkontrolujte zásobu léků na celé zbývající období včetně víkendu. Pokud něco chybí, vyřešte to dnes, ne v sobotu večer.',
      reflection: 'Co bych dnes udělala, kdybych nebyla po transferu? A dá se aspoň část toho udělat?',
      tip: 'Pokud cítíte zácpu, řešte ji chůzí a pitným režimem. Žádná projímadla ani volně prodejné přípravky bez konzultace s lékařem.',
    },
    {
      id: 'tww-dc-2ww-den-4',
      phases: ['two_week_wait'],
      day: 4,
      headline: 'Den 4: přichycení se upevňuje',
      body: 'Kontakt mezi embryem a sliznicí se mění v pevnější vazbu — adhezi. Buňky trofoblastu začínají navazovat těsné spojení s výstelkou dělohy a připravují se na zanoření. Vy pravděpodobně necítíte nic zvláštního a i to je běžné.',
      whatsHappening: [
        'Trofoblast přilnul ke sliznici a připravuje se pronikat hlouběji',
        'Zatím žádné hCG — domácí test by byl negativní i v tom nejlepším případě',
        'Únava, ospalost a mlha v hlavě jsou typické účinky progesteronu',
        'Čtvrtý den bývá dnem, kdy se poprvé objeví silné nutkání hledat na internetu',
      ],
      task: 'Odhlaste se z jedné skupiny nebo vypněte jedno upozornění, které vás v posledních dnech rozhodilo nejvíc. Jedno stačí.',
      reflection: 'Kolik času jsem dnes strávila hledáním informací, které mi nic nedaly?',
      tip: 'Když se přistihnete při sledování každého píchnutí, zkuste si zavést okno: pět minut ráno, kdy si to dovolíte. Zbytek dne ne.',
    },
    {
      id: 'tww-dc-2ww-den-5',
      phases: ['two_week_wait'],
      day: 5,
      headline: 'Den 5: začíná zahnizďování',
      body: 'Buňky trofoblastu pronikají do děložní sliznice a embryo se do ní zanořuje. Právě v této fázi se rozbíhá tvorba hCG, zatím ale v tak malém množství, že ho nezachytí žádný domácí test. Pokud dnes uvidíte drobné narůžovělé nebo hnědé špinění, může jít o podráždění drobných cév — a stejně tak to může být od progesteronu.',
      whatsHappening: [
        'Trofoblast narušuje drobné cévy ve sliznici a zanořuje se hlouběji',
        'Vzniká první, stopové množství hCG',
        'Lehké špinění se v těchto dnech objevuje u části žen a nic nepotvrzuje',
        'Mírné křeče podobné premenstruačním jsou běžné a nevypovídají o výsledku',
      ],
      task: 'Připravte si do koupelny slabé vložky a do telefonu poznámku, kam si zapíšete čas, barvu a množství, kdyby přišlo špinění. Klinika se ptá přesně na tohle.',
      reflection: 'Umím rozeznat, kdy potřebuju informaci, a kdy jenom potřebuju uklidnit?',
      tip: 'Tampony v tomhle období nepoužívejte. Vložka vám navíc dá reálnou představu o množství, kterou toaletní papír nedá.',
      callDoctorIf: [
        'Krvácení silnější než menstruace nebo se sraženinami',
        'Prudká, zejména jednostranná bolest v podbřišku',
        'Horečka nad 38 °C nebo páchnoucí výtok',
        'Rychlý nárůst obvodu břicha, dušnost, výrazně snížené močení',
      ],
    },
    {
      id: 'tww-dc-2ww-den-6',
      phases: ['two_week_wait'],
      day: 6,
      headline: 'Den 6: zahnizďování pokračuje a hCG se rozjíždí',
      body: 'Embryo se zanořuje hlouběji do sliznice a trofoblast začíná produkovat hCG v množství, které se postupně dostává do krevního oběhu. V moči je ho ale stále příliš málo. Kdybyste dnes testovala doma, negativní výsledek by neznamenal vůbec nic.',
      whatsHappening: [
        'Zahnizďování je v plném běhu a začíná se tvořit napojení na váš krevní oběh',
        'hCG stoupá, ale zatím je hluboko pod prahem citlivosti domácích testů',
        'U části žen se objevuje slabé implantační špinění — kapky, hnědý flek, ne víc',
        'Stále platí, že příznaky ani jejich nepřítomnost o ničem nevypovídají',
      ],
      task: 'Pošlete partnerovi nebo blízké osobě jednu konkrétní prosbu. Ne pocit, prosbu. Například: „Objednej prosím nákup, nechci dnes do obchodu."',
      reflection: 'Za co bych si dnes zasloužila uznání, i kdyby nakonec beta vyšla negativně?',
      tip: 'Když vidíte hnědou barvu, znamená to starší krev, která odchází se zpožděním. Silné, jasně červené krvácení je jiná situace — v tom případě volejte.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká bolest v podbřišku',
        'Horečka nad 38 °C',
        'Rychle rostoucí břicho, dušnost, snížené močení nebo prudký přírůstek hmotnosti',
      ],
    },
    {
      id: 'tww-dc-2ww-den-7',
      phases: ['two_week_wait'],
      day: 7,
      headline: 'Den 7: hCG je v krvi, ale ne v moči',
      body: 'Pokud zahnízdění proběhlo, hCG už koluje v krvi a zhruba každé dva dny se zdvojnásobuje. Do moči se ale dostává se zpožděním a v koncentraci, kterou domácí test nezachytí. Tohle je den, kdy nejvíc žen udělá první test — a kdy je výsledek nejméně vypovídající.',
      whatsHappening: [
        'Zahnizďování se dokončuje, tvoří se první napojení na váš krevní oběh',
        'hCG v krvi roste exponenciálně, v moči zaostává',
        'Pokud jste dostala spouštěcí injekci s hCG, může v těle stále být její zbytek',
        'Polovina cesty je za vámi, i když se to tak necítí',
      ],
      task: 'Rozhodněte se dnes, jestli budete testovat doma a od kterého dne. Napište si to na papír. Rozhodnutí učiněné teď vydrží líp než rozhodování v šest ráno v koupelně.',
      reflection: 'Co mi test doma dá kromě dalších čtyř dnů nejistoty?',
      tip: 'Test dřív než devátý až desátý den po transferu blastocysty nemá vypovídací hodnotu. A ať vyjde jakkoli, na odběr krve jděte.',
    },
    {
      id: 'tww-dc-2ww-den-8',
      phases: ['two_week_wait'],
      day: 8,
      headline: 'Den 8: hCG stoupá, testy pořád klamou',
      body: 'Hodnota hCG se v případě probíhajícího těhotenství přibližně zdvojnásobuje každých 48 až 72 hodin, takže dnes je jí několikanásobně víc než předevčírem. Přesto může být test z moči stále negativní. Negativní proužek osmý den neříká nic — a slabá čárka může patřit zbytku spouštěcí injekce.',
      whatsHappening: [
        'Zárodečná tkáň produkuje hCG a napojuje se na mateřský oběh',
        'Koncentrace v moči zaostává za koncentrací v krvi',
        'Progesteron může vyvolávat napětí prsou, nevolnost i nafouklé břicho — stejné příznaky jako těhotenství',
        'Osmý až desátý den bývá psychicky nejhorší část celého čekání',
      ],
      task: 'Udělejte si dnes deset minut jen pro sebe — bez telefonu, bez hledání. Sedněte si a tři minuty dýchejte s delším výdechem než nádechem.',
      reflection: 'Co bych dnes řekla kamarádce, která by byla na mém místě? A umím to říct sama sobě?',
      tip: 'Nefotografujte proužky a nedávejte je do skupin k posouzení. Z fotky nepozná nic ani lékař — odpověď dá jen krev.',
    },
    {
      id: 'tww-dc-2ww-den-9',
      phases: ['two_week_wait'],
      day: 9,
      headline: 'Den 9: nejtěžší den bývá tenhle',
      body: 'Biologicky se nic dramatického neděje — hCG dál stoupá podle své křivky a zárodečná tkáň se dál napojuje. Psychicky je tohle často dno celého čekání: první týden je za vámi, výsledek ještě daleko, a energie být statečná došla. To není selhání, to je únava.',
      whatsHappening: [
        'Zahnízdění je dokončené, hCG dál roste',
        'U některých žen by dnes už velmi citlivý test mohl něco naznačit, u jiných vůbec ne',
        'Únava, plačtivost a podrážděnost mají hormonální složku, nejste přecitlivělá',
        'Nafouklé břicho po čerstvém cyklu obvykle v těchto dnech ustupuje',
      ],
      task: 'Zavolejte tomu jednomu člověku, kterého jste si vybrala. Nemusíte řešit léčbu — může to být hovor o čemkoli jiném.',
      reflection: 'Co mi dneska pomohlo aspoň o kousek? Zapamatuju si to na zítřek.',
      tip: 'Pokud vám myšlenka „co když je to naposledy" chodí dokola, nebojujte s ní. Zkuste větu: „Tahle myšlenka je teď se mnou a nemusím na ni odpovídat."',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká bolest v podbřišku',
        'Horečka nad 38 °C',
        'Pokud se cítíte tak zle, že nejste schopná fungovat — i to je důvod se ozvat',
      ],
    },
    {
      id: 'tww-dc-2ww-den-10',
      phases: ['two_week_wait'],
      day: 10,
      headline: 'Den 10: test už může něco ukázat',
      body: 'Koncentrace hCG v moči se u části žen dostává nad práh citlivosti běžných testů, takže od dneška má domácí test aspoň nějakou vypovídací hodnotu. Stále ale platí dvě věci: negativní výsledek nic nevylučuje a pozitivní neříká nic o dynamice. Krev zůstává jediným rozhodujícím vyšetřením.',
      whatsHappening: [
        'hCG dál roste, obvykle stále zhruba dvojnásobně za dva až tři dny',
        'U některých žen je test pozitivní, u jiných se stejným výsledkem bety ještě ne',
        'Pokud jste dostala spouštěcí injekci, u velmi časných testů mohl zbytek hCG stále hrát roli',
        'Podpora luteální fáze pokračuje beze změny, ať test ukáže cokoli',
      ],
      task: 'Zjistěte si dnes, jak se na vaší klinice sděluje výsledek: kdo volá, v jakém čase a na jaké číslo se ozvat, kdyby se nikdo neozval.',
      reflection: 'Chci výsledek slyšet sama, nebo chci, aby u toho někdo byl?',
      tip: 'Když už testujete, tak ranní moč, jeden typ testu a jednou denně. Odpolední negativní test po ranním pozitivním vás zničí, aniž by cokoli znamenal.',
    },
    {
      id: 'tww-dc-2ww-den-11',
      phases: ['two_week_wait'],
      day: 11,
      headline: 'Den 11: spolehlivější, ale pořád ne rozhodující',
      body: 'Pokud těhotenství probíhá, hCG je dnes už výrazně vyšší než před třemi dny a domácí test bývá spolehlivější. Přesto ani zřetelná čárka neřekne, jestli hodnota stoupá tak, jak by měla. To ukáže až číslo z krve, a hlavně jeho porovnání s druhým odběrem.',
      whatsHappening: [
        'hCG pokračuje v exponenciálním růstu',
        'Domácí test má od tohoto dne rozumnou výpovědní hodnotu — ale jen orientační',
        'Špinění se v těchto dnech u části žen objevuje i při probíhajícím těhotenství',
        'Napětí prsou může být silnější, protože roste i hladina progesteronu',
      ],
      task: 'Připravte si na papír pět otázek na telefonát s výsledkem: přesná hodnota, kolikátý den po transferu, kdy kontrolní odběr, jak dál s léky, kdy ultrazvuk.',
      reflection: 'Co potřebuju mít zařízené, abych zítřek a pozítří zvládla bez zbytečného tlaku?',
      tip: 'Ať výsledek doma vyjde jakkoli, nevysazujte podporu luteální fáze. O tom rozhoduje výhradně lékař podle hodnoty z krve.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká, zejména jednostranná bolest v podbřišku',
        'Bolest v rameni, mdloba, závrať nebo studený pot',
        'Horečka nad 38 °C',
      ],
    },
    {
      id: 'tww-dc-2ww-den-12',
      phases: ['two_week_wait'],
      day: 12,
      headline: 'Den 12: připravte si zítřek a pozítří',
      body: 'Biologicky se nic nemění — hCG buď roste, nebo neroste, a vy to za pár dnů budete vědět s jistotou. Dnešek je nejlepší den na praktickou přípravu: ověřit čas odběru, zjistit, jestli máte být nalačno, a mít po ruce kartičku pojišťovny i žádanku. Praktické kroky teď fungují lépe než jakékoli uklidňování.',
      whatsHappening: [
        'V případě probíhajícího těhotenství je hCG už dobře měřitelné z krve',
        'Napětí a nervozita v těchto dnech stoupají — mozek reaguje na blížící se konec nejistoty',
        'Nespavost je v posledních dnech čekání velmi častá',
        'Domácí testy už nic nového nepřinesou, jen zvyšují tlak',
      ],
      task: 'Ověřte si čas a místo odběru, připravte si na jedno místo kartičku pojišťovny, žádanku a doklad. Zabere to pět minut a zítra vám to ušetří spoustu nervů.',
      reflection: 'Mám na den výsledku promyšlené obě varianty — kdo bude se mnou a co udělám?',
      tip: 'Nedávejte si na den odběru ani na den po něm žádný důležitý pracovní termín. Ten prostor budete potřebovat, ať to dopadne jakkoli.',
    },
    {
      id: 'tww-dc-2ww-den-13',
      phases: ['two_week_wait'],
      day: 13,
      headline: 'Den 13: poslední noc před odpovědí',
      body: 'Poslední noc bývá nejhorší z celých čtrnácti dnů a má to fyziologický důvod — tělo reaguje na blížící se konec nejistoty vyplavením stresových hormonů. Nespavost dnes není špatné znamení a rozhodně ničemu neuškodí. Zítra budete vědět víc a tahle část skončí.',
      whatsHappening: [
        'Na některých pracovištích se odběr provádí právě dnes, jinde až zítra — platí váš termín',
        'Nespavost, sevřený žaludek a myšlenky dokola jsou v tento den běžné',
        'hCG, pokud roste, je už v hodnotách, které laboratoř bez potíží změří',
        'Ranní dávku léků si vezměte normálně, pokud vám lékař neřekl jinak',
      ],
      task: 'Napište si na papír obě verze zítřka: komu voláte, jestli půjdete do práce, kdo za vámi přijede. Papír pak zavřete do zásuvky.',
      reflection: 'Co si o sobě chci pamatovat z těchto čtrnácti dnů, bez ohledu na výsledek?',
      tip: 'Když nemůžete usnout déle než půl hodiny, vstaňte a dělejte něco klidného v tlumeném světle. Boj v posteli spánek nepřivolá. Léky ani bylinné přípravky na spaní si sama nenasazujte.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká bolest v podbřišku',
        'Horečka nad 38 °C',
        'Rychle rostoucí břicho, dušnost, výrazně snížené močení',
      ],
    },
    {
      id: 'tww-dc-2ww-den-14',
      phases: ['two_week_wait'],
      day: 14,
      headline: 'Den 14: dnes se odebírá krev',
      body: 'Beta hCG z krve je jediné vyšetření, které v tomhle období skutečně něco znamená — dá vám číslo, ne čárku. Jedna hodnota se ale vyhodnocuje vždy v kontextu dne odběru a obvykle se doplní druhým odběrem za dva až tři dny. Ať se dnes dozvíte cokoli, těch čtrnáct dní jste zvládla a to už vám nikdo nevezme.',
      whatsHappening: [
        'Odběr obvykle nevyžaduje být nalačno, ale ověřte si to na svém pracovišti',
        'Léky si dnes vezměte podle plánu, odběr na tom nic nemění',
        'Výsledek bývá k dispozici v řádu hodin, způsob sdělení se mezi klinikami liší',
        'Jedno číslo bez druhého odběru nedává úplnou informaci — a to je normální',
      ],
      task: 'Mějte u telefonu papír a tužku a napsaných pět otázek: přesná hodnota, kolikátý den po transferu, kdy kontrolní odběr, jak dál s léky, kdy ultrazvuk.',
      reflection: 'Koho chci slyšet jako prvního, až budu vědět?',
      tip: 'Pokud se s vámi do domluvené hodiny nikdo nespojí, volejte vy. Není to obtěžování a nemusíte čekat do večera z ohleduplnosti.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká, zejména jednostranná bolest v podbřišku',
        'Bolest v rameni, mdloba, závrať nebo studený pot',
        'Horečka nad 38 °C',
        'Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení',
      ],
    },
    {
      id: 'tww-dc-2ww-ket',
      phases: ['two_week_wait'],
      dayRange: [1, 12],
      modifiers: ['frozen_transfer'],
      headline: 'U kryotransferu je progesteron ještě důležitější',
      body: 'V cyklu s hormonální přípravou neproběhla ovulace, takže nevzniklo žluté tělísko — jediný zdroj progesteronu je ten, který si podáváte. Vynechaná nebo výrazně posunutá dávka má proto u kryoembryotransferu větší váhu než u čerstvého cyklu. Dobrá zpráva zní, že riziko hyperstimulačního syndromu je u vás minimální.',
      whatsHappening: [
        'Vaječníky nejsou stimulované, takže nafouklé břicho jde spíš na vrub progesteronu',
        'Časování dávek se odvíjí od implantačního okna — proto ta přísnost na hodiny',
        'Pokud jste nedostala spouštěcí injekci s hCG, falešná pozitivita testu vám nehrozí',
        'Termín odběru bety platí přesně tak, jak vám ho dala klinika',
      ],
      task: 'Zkontrolujte, že máte připomínky nastavené na přesné časy, které vám klinika určila — ne jen orientačně na ráno a večer.',
      reflection: 'Vím, kolik embryí mi zůstává v kryobance? Jistota v tomhle bodě mění hodně.',
      tip: 'Když dávku vynecháte, vezměte ji co nejdřív, ale nezdvojujte. Při opakovaném vynechání volejte kliniku.',
    },
    {
      id: 'tww-dc-2ww-po-ztrate',
      phases: ['two_week_wait'],
      dayRange: [1, 14],
      modifiers: ['after_loss', 'repeated_failure'],
      headline: 'Vaše opatrnost není nedostatek víry',
      body: 'Když už jste jednou ztratila nebo když už jeden transfer nevyšel, nebojíte se neznámého — bojíte se konkrétní vzpomínky. Nemusíte si nutit naději a nemusíte mluvit v budoucím čase. Opatrnost je obrana, ne prokletí, a rozhodně neovlivňuje, jak to dopadne.',
      whatsHappening: [
        'Tělo si pamatuje chodbu, telefonát i barvu krve — reakce může být okamžitá a silná',
        'Věty typu „teď to určitě vyjde" nikdo garantovat nemůže a nemusíte je přijímat',
        'Vina za předchozí ztrátu není na místě: většina časných ztrát má příčiny, které nikdo neovlivní',
        'Naděje a strach mohou existovat současně, aniž byste si musela vybrat',
      ],
      task: 'Napište si na papír postup pro případ, že uvidíte krev: podívám se na vložku, zapíšu čas a množství, zavolám kliniku, zavolám svému člověku.',
      reflection: 'Co jsem si po minulé zkušenosti slíbila, že udělám jinak — a dělám to?',
      tip: 'Pokud se vracejí vzpomínky nebo noční můry, není to slabost a nemá cenu to přecházet. Linka první psychické pomoci 116 123 funguje nonstop a zdarma.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká, zejména jednostranná bolest v podbřišku',
        'Bolest v rameni, mdloba nebo závrať',
        'Horečka nad 38 °C',
      ],
    },
    {
      id: 'tww-dc-bp-den-1',
      phases: ['beta_positive'],
      day: 1,
      headline: 'Beta je pozitivní. A vy možná necítíte skoro nic.',
      body: 'Ochromení, nedůvěra nebo strach místo radosti jsou po letech léčby úplně běžná reakce — naučila jste se nedoufat, protože to bylo bezpečnější, a ten mechanismus se nevypne během vteřiny. Dnes nemusíte nic cítit správně. Jediné, co teď skutečně potřebujete, je jasný plán na příštích pár dní.',
      whatsHappening: [
        'Zárodečná tkáň produkuje hCG a jeho hodnota by měla dál stoupat',
        'Jedno číslo samo o sobě nevypovídá o průběhu — rozhoduje dynamika',
        'Podpora luteální fáze pokračuje, často déle než dosud',
        'Úleva a úzkost se můžou střídat i několikrát za hodinu',
      ],
      task: 'Zapište si přesnou hodnotu, datum a čas odběru a termín kontrolního odběru. Tyhle tři údaje budete potřebovat opakovaně.',
      reflection: 'Komu to chci říct teď a komu až později? Nemusím to rozhodovat pro všechny stejně.',
      tip: 'Zeptejte se výslovně, jestli se něco mění v medikaci. Je to nejčastěji zapomenutá otázka celého telefonátu.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká, zejména jednostranná bolest v podbřišku',
        'Bolest v rameni nebo mezi lopatkami, mdloba, závrať, studený pot — volejte 155',
        'Horečka nad 38 °C',
        'Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení',
      ],
    },
    {
      id: 'tww-dc-bp-den-2',
      phases: ['beta_positive'],
      day: 2,
      headline: 'Čekání se nezastavilo, jen změnilo otázku',
      body: 'Místo „vyšlo to?" nastoupilo „udrží se to?" a to je zákeřnější, protože nemá jasný termín konce. Většina žen po IVF tohle popisuje stejně a není to známka nevděku. Do kontrolního odběru vám pomůže hlavně struktura dne, ne přemýšlení.',
      whatsHappening: [
        'hCG by mělo dál stoupat, u většiny zdravě se vyvíjejících těhotenství zhruba dvojnásobně za 48 až 72 hodin',
        'Domácí testy už nedávají žádnou novou informaci',
        'Únava a nevolnost můžou být od progesteronu i od nastupujícího těhotenství — rozlišit to nelze',
        'Po čerstvém cyklu může nastupující hCG zhoršit projevy hyperstimulace',
      ],
      task: 'Naplánujte si dnešek a zítřek konkrétně — tři věci na každý den. Prázdno se teď plní domýšlením.',
      reflection: 'Dovolím si dnes větu „dnes jsem těhotná", nebo mi to zatím nejde přes pusu?',
      tip: 'Nezakládejte zatím seznamy jmen ani výbavičku. Ne z pověrčivosti — jen proto, že v období nejistoty to zbytečně zvyšuje tlak.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká jednostranná bolest v podbřišku, bolest v rameni, mdloba',
        'Rychle rostoucí břicho, dušnost, snížené močení, prudký přírůstek hmotnosti',
        'Opakované zvracení a neschopnost udržet tekutiny',
      ],
    },
    {
      id: 'tww-dc-bp-den-3',
      phases: ['beta_positive'],
      day: 3,
      headline: 'Druhý odběr: proč se sleduje zdvojení',
      body: 'Teprve dvě hodnoty za sebou umožňují posoudit dynamiku — a ta říká víc než jakékoli jednotlivé číslo. U většiny zdravě se vyvíjejících těhotenství se hodnota přibližně zdvojnásobí za 48 až 72 hodin, s rostoucí hladinou se ale tempo přirozeně zpomaluje. Vyhodnocení patří lékaři, ne kalkulačce na internetu.',
      whatsHappening: [
        'Odebírá se druhá hodnota, ideálně ve stejné laboratoři jako první',
        'Tempo růstu je informativnější než výchozí číslo',
        'Ultrazvuk zatím obvykle nemá smysl — nález by nebyl hodnotitelný',
        'Nesrovnávejte své číslo s čísly cizích žen, nemají stejný den odběru ani stejnou laboratoř',
      ],
      task: 'Zapište si druhou hodnotu vedle první, včetně data a přesného času odběru. Uvidíte tak vývoj a nebudete si ho muset pamatovat.',
      reflection: 'Ptám se lékaře na prognózu, kterou mi dát nemůže, nebo na plán, který mi dát může?',
      tip: 'Pokud vám hodnoty naskakují do portálu dřív, než vám někdo zavolá, rozhodněte se předem, jestli se tam chcete dívat sama.',
    },
    {
      id: 'tww-dc-bp-lecba-a-rezim',
      phases: ['beta_positive'],
      dayRange: [4, 9],
      headline: 'Co od teď měnit a co naopak nechat být',
      body: 'Podpora luteální fáze pokračuje podle pokynu lékaře, často až do zhruba desátého až dvanáctého týdne — a nikdy ji nevysazujte sama. Ze životosprávy má teď smysl řešit jen několik konkrétních věcí, zbytek klidně nechte tak, jak je. Přehnaná opatrnost vás vyčerpá dřív, než dojdete k prvnímu ultrazvuku.',
      whatsHappening: [
        'Alkohol a kouření od teď ne',
        'Volně prodejné léky, doplňky i bylinky vždy konzultujte, včetně těch „přírodních"',
        'U zubaře, na rentgenu a u jakéhokoli lékaře řekněte, že jste těhotná',
        'Potraviny s rizikem infekce — nepasterizované sýry, syrové maso a ryby, syrová vejce — vynechte',
      ],
      task: 'Projděte si domácí lékárničku a vyfoťte složení všeho, co užíváte. Fotku vezměte na nejbližší kontrolu.',
      reflection: 'Co dělám ze strachu, a co proto, že to má opravdu smysl?',
      tip: 'Běžný pohyb a chůze jsou v pořádku. Vysoká zátěž, skoky a přehřívání v sauně nebo vířivce zatím ne.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká, zejména jednostranná bolest v podbřišku',
        'Horečka nad 38 °C',
        'Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení',
        'Opakované zvracení a neschopnost udržet tekutiny',
      ],
    },
    {
      id: 'tww-dc-bp-cekani-na-ultrazvuk',
      phases: ['beta_positive'],
      dayRange: [10, 20],
      headline: 'Čekání na první ultrazvuk',
      body: 'Ultrazvuk se nedělá hned, protože před určitým stářím a určitou hodnotou hCG by nález nic nepotvrdil ani nevyvrátil. Tohle čekání popisuje většina žen po IVF jako horší než celé předchozí dva týdny — beta je číslo, ultrazvuk je obraz. Termín určuje lékař podle vašich hodnot, ne podle toho, kdy byste to nejradši věděla.',
      whatsHappening: [
        'Struktury se objevují postupně: plodový váček, žloutkový váček, zárodek, srdeční akce',
        'V raném těhotenství se vyšetření obvykle provádí vaginální sondou',
        'Věta „ještě není vidět všechno" často znamená jen rozdíl několika dnů',
        'Špinění v tomto období není vzácné a neznamená automaticky ztrátu — vždy ho ale hlaste',
      ],
      task: 'Naplánujte si, co budete dělat hned po vyšetření — konkrétní věc, ne oslavu. A na ten den si nedávejte nic dalšího.',
      reflection: 'Co potřebuju od člověka, který se mnou na ultrazvuk půjde?',
      tip: 'Řekněte na začátku vyšetření, jak to chcete slyšet. Například: „Prosím, řekněte mi hned, jestli je vidět srdíčko." Ticho při měření si ženy často vykládají jako katastrofu.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká, zejména jednostranná bolest v podbřišku',
        'Bolest v rameni, mdloba, závrať, studený pot — volejte 155',
        'Horečka nad 38 °C',
      ],
    },
    {
      id: 'tww-dc-bp-predani-gynekologovi',
      phases: ['beta_positive'],
      dayRange: [21, 45],
      headline: 'Přechod z kliniky ke gynekologovi',
      body: 'V určitou chvíli vás reprodukční klinika předá do péče vašeho gynekologa — kdy přesně, to se mezi pracovišti liší. Bývá to zvláštní okamžik: místo, které vás roky vedlo, najednou končí svou roli. Je v pořádku cítit u toho úlevu i úzkost zároveň.',
      whatsHappening: [
        'Klinika vám obvykle předá zprávu s průběhem léčby — uschovejte si ji',
        'Objednání k registrujícímu gynekologovi bývá na vás, ověřte si termín',
        'Podpora luteální fáze často pokračuje i po předání, podle pokynu lékaře',
        'Že jste otěhotněla po IVF, patří do dokumentace — není to nic, co byste měla tajit',
      ],
      task: 'Objednejte se dnes ke svému gynekologovi a zapište si, do kdy máte podle kliniky pokračovat v medikaci.',
      reflection: 'Mám všechny zprávy a výsledky na jednom místě, kdybych je zítra potřebovala?',
      tip: 'Zeptejte se kliniky, na koho se můžete obrátit s dotazem i po předání. Většina pracovišť to umožňuje a vám to ubere spoustu nejistoty.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká bolest v podbřišku',
        'Bolest v rameni, mdloba nebo závrať',
        'Horečka nad 38 °C',
        'Opakované zvracení a neschopnost udržet tekutiny',
      ],
    },
    {
      id: 'tww-dc-bp-dvojcata',
      phases: ['beta_positive'],
      dayRange: [1, 45],
      modifiers: ['twins'],
      headline: 'Když jsou dvě: radost, panika a vina za tu paniku',
      body: 'Skoro každá žena popisuje stejný sled pocitů a ženy po letech léčby k němu často přidávají výčitku, že „si přece nesmí stěžovat". Smíte. Dvojčata jsou jiná životní situace než jedno dítě a je normální ji nejdřív unést a teprve pak oslavit. Z lékařského hlediska jde o rizikovější těhotenství, které potřebuje pečlivější sledování — a právě proto se u nás prosadil přenos jednoho embrya.',
      whatsHappening: [
        'Vyšší hodnota bety sama o sobě dvojčata nepotvrzuje — ukáže je až ultrazvuk',
        'Počet plodových váčků a placent ovlivňuje způsob sledování těhotenství',
        'Vyšší je pravděpodobnost předčasného porodu, těhotenské cukrovky i vysokého tlaku',
        'Po čerstvém cyklu je u vícečetného těhotenství vyšší riziko pozdního OHSS',
      ],
      task: 'Napište si tři otázky na nejbližší kontrolu: jaký typ dvojčat to je, kde budu vedená a jak často budu docházet.',
      reflection: 'Co z toho, co teď cítím, si dovolím říct nahlas — i tu část, která se bojí?',
      tip: 'Nekupujte zatím nic. Praktické věci jako auto, bydlení a pomoc rodiny má naopak smysl začít řešit brzy.',
      callDoctorIf: [
        'Silné krvácení nebo krvácení se sraženinami',
        'Prudká bolest v podbřišku',
        'Rychle rostoucí obvod břicha, dušnost, výrazně snížené močení, prudký přírůstek hmotnosti',
        'Opakované zvracení a neschopnost udržet tekutiny',
        'Horečka nad 38 °C',
      ],
    },
  ],
  encouragements: [
    {
      id: 'tww-enc-prezit',
      text: 'Ty dva týdny nemáte vyhrát. Máte je přežít. To je celý úkol.',
      author: 'Gabi',
      tone: 'tender',
    },
    {
      id: 'tww-enc-nemuzete-pokazit',
      text: 'Nic, co dnes uděláte nebo neuděláte, nerozhodne o tom, jak to dopadne. To je těžké i osvobozující zároveň.',
      tone: 'practical',
    },
    {
      id: 'tww-enc-priznaky',
      text: 'Vaše tělo teď mluví jazykem progesteronu, ne jazykem výsledku. Nedá se z něj číst.',
      tone: 'practical',
    },
    {
      id: 'tww-enc-nemusite-byt-klidna',
      text: 'Nemusíte být klidná. Musíte jen dojít do zítřka.',
      tone: 'tender',
    },
    {
      id: 'tww-enc-strach-a-nadeje',
      text: 'Naděje a strach mohou existovat současně. Nemusíte si vybrat.',
      tone: 'hopeful',
    },
    {
      id: 'tww-enc-opatrnost',
      text: 'Vaše opatrnost není nedostatek víry. Je to obrana, kterou jste si zasloužila.',
      tone: 'tender',
    },
    {
      id: 'tww-enc-jeden-clovek',
      text: 'Nemusíte to nést sama. Stačí jeden člověk, který ví, v jakém jste dni.',
      tone: 'practical',
    },
    {
      id: 'tww-enc-telo',
      text: 'Tohle tělo vás dneska doneslo až sem. Vstávalo, snášelo injekce, čekalo v čekárnách.',
      author: 'Gabi',
      tone: 'tender',
    },
    {
      id: 'tww-enc-mysleni',
      text: 'Ta myšlenka je teď s vámi a nemusíte na ni odpovídat.',
      tone: 'intense',
    },
    {
      id: 'tww-enc-den-vysledku',
      text: 'Ať zítřek dopadne jakkoli, těch čtrnáct dní jste zvládla. To vám nikdo nevezme.',
      tone: 'intense',
    },
    {
      id: 'tww-enc-dnes-jsem',
      text: '„Dnes jsem těhotná" je pravdivá věta, i když nevíte, co bude za měsíc.',
      tone: 'hopeful',
    },
    {
      id: 'tww-enc-neni-zkouska',
      text: 'Tohle není zkouška, kterou můžete udělat lépe nebo hůř. Je jedno, jestli to přejdete vzpřímeně, nebo po kolenou.',
      tone: 'intense',
    },
  ],
  glossary: [
    {
      term: 'Blastocysta',
      aliases: ['blastocysta 5. den', 'blasta'],
      short: 'Stadium embrya zhruba pátý až šestý den po oplození.',
      long: 'Blastocysta má už dva typy buněk: vnitřní buněčnou masu, ze které vzniká plod, a trofoblast, ze kterého se vyvine placenta. Uvnitř má dutinu vyplněnou tekutinou. Většina transferů se dnes provádí právě v tomto stadiu, protože o embryu vypovídá víc než dřívější stadia. Hodnocení blastocysty vám vysvětlí embryolog vaší kliniky.',
      topics: ['embryologie', 'transfer'],
    },
    {
      term: 'Hatching',
      aliases: ['líhnutí', 'vylíhnutí blastocysty'],
      short: 'Proces, při kterém se blastocysta probourává ven ze svého obalu.',
      long: 'Obal zvaný zona pellucida chrání vajíčko a časné embryo. Aby se blastocysta mohla přichytit k děložní sliznici, musí se z něj dostat ven. Po transferu blastocysty k tomu obvykle dochází v prvních dnech. V některých případech laboratoř obal jemně naruší — tomu se říká asistovaný hatching a o jeho vhodnosti rozhoduje embryolog s lékařem.',
      topics: ['embryologie', 'transfer'],
    },
    {
      term: 'Implantace',
      aliases: ['nidace', 'zahnízdění'],
      short: 'Zahnízdění embrya v děložní sliznici.',
      long: 'Probíhá v několika krocích: přiblížení k výstelce, přichycení a zanoření do sliznice. Po transferu blastocysty se celý proces obvykle odehrává zhruba mezi druhým a šestým dnem. Právě v jeho průběhu se rozbíhá tvorba hCG. Nelze ho urychlit ani nijak podpořit chováním — a nedá se ani vycítit.',
      topics: ['embryologie', 'cekani'],
    },
    {
      term: 'Implantační okno',
      short: 'Časově omezené období, kdy je děložní sliznice připravená přijmout embryo.',
      long: 'Sliznice je vnímavá k embryu jen po omezenou dobu. Načasování se řídí především působením progesteronu, proto se u kryoembryotransferu tak přísně hlídají časy podávání léků. Pokud vám klinika určila přesné hodiny, není to formalita.',
      topics: ['transfer', 'hormony'],
    },
    {
      term: 'Luteální fáze',
      short: 'Druhá polovina cyklu — od ovulace do menstruace nebo do nástupu těhotenství.',
      long: 'V přirozeném cyklu ji řídí žluté tělísko, které produkuje progesteron a udržuje děložní sliznici. Po IVF bývá vlastní tvorba progesteronu nedostatečná, mimo jiné proto, že punkce odstraní část buněk, ze kterých by žluté tělísko vzniklo. Proto se podává podpora luteální fáze.',
      topics: ['hormony', 'cekani'],
    },
    {
      term: 'Podpora luteální fáze',
      aliases: ['luteální podpora', 'progesteronová podpora'],
      short: 'Doplňování progesteronu, případně dalších hormonů, po embryotransferu.',
      long: 'Podává se vaginálně, injekčně do svalu nebo ústy, někdy v kombinaci s dalšími léky. Konkrétní přípravek, dávku i délku užívání určuje výhradně ošetřující lékař. Zásadní pravidlo zní: nikdy nevysazovat sama — ani při krvácení, ani po negativním domácím testu. O ukončení rozhoduje lékař podle hodnoty beta hCG.',
      topics: ['leky', 'hormony'],
    },
    {
      term: 'Progesteron',
      short: 'Hormon, který připravuje a udržuje děložní sliznici.',
      long: 'Kromě působení na sliznici má tlumivý účinek na nervový systém a zpomaluje trávení. Proto vyvolává únavu, mlhu v hlavě, zácpu, nafouklé břicho, napětí prsou a nevolnost — tedy příznaky, které jsou k nerozeznání od raného těhotenství. Právě proto se z příznaků během čekání nedá usuzovat na výsledek.',
      topics: ['hormony', 'leky'],
    },
    {
      term: 'hCG',
      aliases: ['lidský choriový gonadotropin', 'HCG'],
      short: 'Hormon, který produkuje zárodečná tkáň po zahnízdění.',
      long: 'Je základem těhotenských testů. V krvi se objevuje dřív a ve vyšší koncentraci než v moči, proto je odběr spolehlivější než domácí test. Pozor: hCG bývá také součástí spouštěcí injekce podávané před punkcí — její zbytek může způsobit falešně pozitivní domácí test zhruba po dobu deseti až čtrnácti dnů.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'Beta hCG',
      aliases: ['beta', 'odběr bety'],
      short: 'Stanovení hladiny hCG z krve.',
      long: 'Na rozdíl od testu z moči dá číslo, které lze porovnávat v čase. Jedna hodnota vypovídá málo — záleží na dni odběru, typu transferu i individuální variabilitě. Proto se obvykle doplňuje druhým odběrem s odstupem dvou až tří dnů. Interpretace patří výhradně lékaři; hodnoty z různých laboratoří navíc nemusí být plně srovnatelné.',
      topics: ['vysledky', 'hormony'],
    },
    {
      term: 'Zdvojovací čas',
      aliases: ['zdvojení bety', 'doubling time'],
      short: 'Doba, za kterou hodnota hCG vzroste na dvojnásobek.',
      long: 'U většiny zdravě se vyvíjejících raných těhotenství se hCG zdvojnásobí zhruba za 48 až 72 hodin. S rostoucí hladinou se tempo přirozeně zpomaluje, takže vzorec neplatí donekonečna. Pomalejší vzestup může mít různé příčiny včetně mimoděložního těhotenství, a proto ho lékař vždy sleduje v souvislostech, ne podle kalkulačky.',
      topics: ['vysledky', 'hormony'],
    },
    {
      term: 'Biochemické těhotenství',
      short: 'Velmi časná ztráta, kdy se hCG objevilo, ale těhotenství se dál nerozvinulo.',
      long: 'Zahnízdění proběhlo natolik, že se stihl vytvořit měřitelný hCG, ale vývoj nepokračoval. Na ultrazvuku obvykle není co vidět. Je to skutečná ztráta, i když trvala krátce a nikdo o ní nevěděl — a nemusíte ji zlehčovat. Brzké domácí testování počet těchto prožitých ztrát zvyšuje.',
      topics: ['ztrata', 'vysledky'],
    },
    {
      term: 'Kryoembryotransfer',
      aliases: ['KET', 'mražený transfer', 'FET'],
      short: 'Přenos rozmrazeného embrya.',
      long: 'Embryo bylo zamrazeno metodou vitrifikace a před transferem se rozmrazí. Sliznice se připravuje buď v přirozeném cyklu podle vaší ovulace, nebo hormonálně. V cyklu s hormonální přípravou nevzniká žluté tělísko, takže veškerý progesteron musí přijít zvenčí — pravidelnost dávek je proto ještě důležitější. Riziko hyperstimulačního syndromu je u KET minimální.',
      topics: ['transfer', 'embryologie'],
    },
    {
      term: 'OHSS',
      aliases: ['ovariální hyperstimulační syndrom', 'hyperstimulace'],
      short: 'Komplikace hormonální stimulace se zvětšenými vaječníky a únikem tekutiny do dutiny břišní.',
      long: 'Většina případů je mírná, menšina závažná a vyžaduje lékařskou péči. Pozdní forma nastupuje zhruba týden a více po punkci a souvisí s hCG z nastupujícího těhotenství — objevuje se tedy paradoxně tehdy, když transfer vyšel. Varovné příznaky: rychle rostoucí obvod břicha, prudký přírůstek hmotnosti, dušnost, výrazně snížené močení, opakované zvracení, silná bolest břicha. Při jejich výskytu vždy volejte kliniku.',
      topics: ['hormony', 'klinika'],
    },
    {
      term: 'Mimoděložní těhotenství',
      aliases: ['ektopické těhotenství', 'GEU'],
      short: 'Zahnízdění mimo dutinu děložní, nejčastěji ve vejcovodu.',
      long: 'Může nastat i po IVF. Typicky se projeví pomalejším vzestupem hCG, jednostrannou bolestí, případně krvácením. Varovná kombinace je prudká bolest břicha, bolest v rameni nebo mezi lopatkami, mdloba, závrať a studený pot — v tom případě volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost a řekněte, že jste po embryotransferu. Jde o stav vyžadující neodkladné řešení.',
      topics: ['ztrata', 'vysledky', 'klinika'],
    },
  ],
}
