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
      author: 'Tým IVF by Gabi',
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
    // MARKER_ITEMS
  ],
  // MARKER_TAIL
}
