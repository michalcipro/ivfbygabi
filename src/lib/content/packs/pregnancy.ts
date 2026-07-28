import type { ContentPack } from '../types'

export const pack: ContentPack = {
  items: [
    {
      id: 'teh-prvni-ultrazvuk',
      kind: 'article',
      title: 'První ultrazvuk po pozitivní betě: co se na něm hledá',
      excerpt:
        'Za deset minut na křesle se rozhodne o věcech, na které jste čekala roky — a je dobré vědět dopředu, co lékař na obrazovce vlastně hledá.',
      body: `## Kdy se první ultrazvuk dělá

Po pozitivním beta hCG vás klinika obvykle objedná na první ultrazvuk zhruba mezi **5. a 7. gestačním týdnem**, tedy přibližně dva až tři týdny po odběru krve. Přesný termín si každé pracoviště nastavuje jinak a odvíjí se i od hodnot bety.

Termín se počítá od prvního dne poslední menstruace. Po IVF se ale gestační stáří odvozuje od data transferu a stáří embrya, takže vaše klinika ho zná přesně na den. To je jedna z mála výhod, které IVF má — nikdo nemusí odhadovat.

## Co lékař na obrazovce hledá

Vyšetření se dělá vaginální sondou, protože v tomhle stadiu je to jediná cesta, jak něco skutečně vidět. Nebolí, i když tlak může být nepříjemný. Lékař postupuje v pořadí:

1. **Uložení těhotenství.** Nejdůležitější otázka celého vyšetření nezní „bije srdíčko", ale „je to v děloze". Lékař ověřuje, že gestační váček je uvnitř dutiny děložní, ne ve vejcovodu nebo v jizvě po císařském řezu.
2. **Gestační váček.** Tmavá kulatá struktura ve sliznici. Bývá viditelný přibližně od 4.–5. týdne.
3. **Počet váčků.** Po transferu jednoho embrya je jeden váček očekávaný. Dva váčky znamenají dvojčata — a po IVF to není nijak výjimečné.
4. **Žloutkový váček.** Malý prstýnek uvnitř gestačního váčku, obvykle od 5. týdne. Je to první známka toho, že se váček skutečně vyvíjí.
5. **Embryo a srdeční akce.** Embryo bývá měřitelné zhruba od 6. týdne, srdeční akce se často zachytí, když embryo měří kolem 2–5 mm.
6. **Vaječníky a okolí dělohy.** Zejména po čerstvém cyklu se kontroluje velikost vaječníků a přítomnost volné tekutiny.

## Když se ještě nic nevidí

Tohle je scénář, na který vás nikdo nepřipraví, a přitom je poměrně častý. Pokud je váček menší, než se čekalo, nebo v něm zatím není embryo, **neznamená to automaticky špatnou zprávu**. Nejčastější vysvětlení je, že těhotenství je o pár dní mladší, než se počítalo — u IVF sice méně často, ale i tak.

Standardní postup v takové situaci je **kontrolní ultrazvuk za sedm až deset dní**. Ten odstup je dlouhý a je to jeden z nejtěžších týdnů celé cesty. Není to schválnost: struktury rostou přibližně milimetr denně a dřívější kontrola by nepřinesla jasnější odpověď, jen další nejistotu.

## Co si vzít a na co se ptát

- Přijeďte s **částečně vyprázdněným močovým měchýřem** — na rozdíl od transferu se tady plný měchýř nechce.
- Vezměte si **kartičku pojišťovny a zprávy z kliniky**, pokud jdete jinam než tam, kde probíhal cyklus.
- Ptejte se: **Kolik gestačních váčků vidíte? Je těhotenství v děloze? Jaké je gestační stáří podle měření? Kdy má být další kontrola a co se na ní bude hledat?**
- Poproste o **výtisk nebo fotku snímku**, pokud ji chcete. Většina pracovišť ji dá bez problémů.

## Proč z toho máte hrůzu

Protože jste se naučila, že dobré zprávy bývají dočasné. Ženy po IVF popisují první ultrazvuk jinak než ženy, které otěhotněly spontánně — jako zkoušku, ne jako setkání. Ta obezřetnost je naučená reakce na to, čím jste prošla, ne známka toho, že se něčeho nedokážete radovat.

Pomáhá vzít si s sebou někoho. Ne proto, abyste to nezvládla sama, ale proto, že se z vyšetření pamatuje málo a druhý pár uší je praktická věc.

## Kdy volat lékaře — nečekat na termín

- **silné krvácení** (prosakující vložka za hodinu) nebo krvácení se sraženinami,
- **prudká jednostranná bolest** v podbřišku, bolest v rameni,
- **závrať, mdloba, studený pot**,
- **horečka nad 38 °C**,
- rychle rostoucí obvod břicha, dušnost, výrazně snížené močení (podezření na OHSS).

> Tento text popisuje obvyklý postup a nenahrazuje vyšetření ani konzultaci s vaším lékařem. Nálezy se posuzují vždy v souvislostech, které zná jen vaše ošetřující pracoviště.`,
      minutes: 8,
      phases: ['early_pregnancy'],
      gestWeeks: [5, 8],
      topics: ['tehotenstvi', 'vysledky', 'klinika'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-09-04',
      boost: 0.95,
    },
    {
      id: 'teh-gestacni-a-zloutkovy-vacek',
      kind: 'article',
      title: 'Gestační váček a žloutkový váček: co ta dvě kolečka znamenají',
      excerpt:
        'Než se objeví embryo, hodnotí se dvě struktury — a jejich velikost a tvar říkají lékaři víc, než byste čekala.',
      body: `## Gestační váček

Gestační váček je první viditelný důkaz nitroděložního těhotenství. Na ultrazvuku vypadá jako **tmavé kulaté nebo oválné ložisko** uložené ve sliznici dělohy, obklopené světlejším lemem. Ten lem je rodící se choriová tkáň, ze které později vznikne placenta.

Váček bývá zachytitelný přibližně **od 4.–5. gestačního týdne**, když měří kolem 2–3 mm. Roste rychle, řádově o **1 mm denně**, což je právě důvod, proč kontrolní ultrazvuk bývá až za týden a ne za dva dny.

Lékař u váčku sleduje:

- **uložení** — musí být v dutině děložní, mimo jizvu po císařském řezu a mimo děložní roh,
- **velikost** (MSD, mean sac diameter) a její soulad s předpokládaným stářím,
- **tvar** — pravidelný kulatý či oválný je očekávaný,
- **počet** — jeden, dva, výjimečně víc.

## Pseudováček — proč se lékař tváří opatrně

U mimoděložního těhotenství se v dutině děložní může objevit útvar, který váček připomíná, ale je to jen tekutina ve sliznici. Rozlišit ho od pravého váčku je klíčové, protože **mimoděložní těhotenství je akutní stav**. Právě proto zkušený lékař neřekne „jste těhotná" hned, ale hledá typické znaky pravého váčku — excentrické uložení ve sliznici, dvojitý lem a později žloutkový váček.

## Žloutkový váček

Žloutkový váček (yolk sac) je **jasný tenký prstýnek uvnitř gestačního váčku**. Objevuje se obvykle **kolem 5.–5,5. týdne**, když gestační váček dosáhne přibližně 8–10 mm.

Jeho význam je dvojí:

1. Je to **první jistý důkaz nitroděložního těhotenství**. Pseudováček žloutkový váček nikdy neobsahuje.
2. V raném období **plní funkci výživy a krvetvorby** pro embryo, než tuto roli převezme placenta. Kolem 10.–12. týdne přestává být potřeba a postupně mizí.

Velikost žloutkového váčku se běžně pohybuje **do 6 mm**. Lékaři si všímají výrazně zvětšeného, nepravidelného nebo naopak chybějícího váčku — ale žádný z těchto nálezů neznamená sám o sobě diagnózu. Vždycky se hodnotí spolu s ostatními parametry a s vývojem v čase.

## Časová osa, kterou stojí za to znát

| Přibližně | Co bývá vidět |
| --- | --- |
| 4,5–5. týden | gestační váček |
| 5–5,5. týden | žloutkový váček |
| 5,5–6. týden | embryonální pól |
| 6–7. týden | srdeční akce |

Tato osa je orientační. **Posun o několik dní je běžný** a u IVF se navíc často zjistí, že reálné stáří je o něco nižší, než se čekalo.

## Co když je nález nejasný

Označení jako „těhotenství neznámé lokalizace" nebo „nález nutno ověřit kontrolou" znějí děsivě, ale jsou to **poctivé odborné formulace**, ne rozsudek. Znamenají: zatím není dost informací a nechceme si vymýšlet. Standardem je opakovaný ultrazvuk za 7–10 dní, případně sledování dynamiky beta hCG.

Co v mezidobí pomáhá:

- **Nepřepočítávat sama tabulky z internetu.** Milimetry v raném těhotenství mají obrovský rozptyl.
- **Zapsat si přesná čísla** z nálezu — velikost váčku, den, kdy se měřilo. Při kontrole pak uvidíte reálný posun.
- **Mít domluvený plán.** Zeptejte se, co konkrétně se bude na kontrole rozhodovat a jaké jsou možné scénáře.

## Kdy volat lékaře

- silné krvácení nebo krvácení se sraženinami,
- prudká, zejména jednostranná bolest v podbřišku,
- bolest v rameni, závrať, mdloba,
- horečka nad 38 °C.

> Popsané hodnoty jsou orientační a slouží k porozumění nálezu, ne k vlastnímu hodnocení. Interpretace ultrazvuku patří výhradně vašemu lékaři.`,
      minutes: 7,
      phases: ['early_pregnancy'],
      gestWeeks: [4, 8],
      topics: ['tehotenstvi', 'vysledky'],
      level: 'deep',
      hero: 'pearl',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'ESHRE — doporučené postupy',
      ],
      publishedOn: '2025-09-11',
      boost: 0.7,
    },
    {
      id: 'teh-prvni-srdicko',
      kind: 'article',
      title: 'První srdíčko: co to znamená a co to neznamená',
      excerpt:
        'Bliká to na obrazovce rychleji, než čekáte — a je to okamžik, po kterém se statistika vaší cesty výrazně mění.',
      body: `## Kdy se srdeční akce objevuje

Srdce embrya začíná pulzovat velmi brzy, dřív, než ho ultrazvuk dokáže zachytit. **Viditelná srdeční akce se obvykle najde mezi 6. a 7. gestačním týdnem**, typicky ve chvíli, kdy embryo měří přibližně 2–5 mm. U některých žen se zachytí už při délce kolem 2 mm, u jiných až o pár dní později.

Pokud embryo měří méně než 7 mm a srdeční akce ještě není vidět, **je to nález, který se kontroluje, ne uzavírá**. Standardem je opakovat vyšetření po sedmi až deseti dnech.

## Jak to vypadá a zní

Na obrazovce to není zvuk. Je to **rychlé blikání** světlého bodu uvnitř tmavého váčku. Lékař pak často přepne na M-mód nebo dopplerovské zobrazení a změří frekvenci. Zvuk, který někdy uslyšíte, je počítačová rekonstrukce, ne skutečný tlukot.

Frekvence se v čase mění:

- kolem **6. týdne** bývá zhruba 100–115 tepů za minutu,
- kolem **7. týdne** vystoupá přibližně na 120–160,
- kolem **9. týdne** dosahuje maxima okolo 170,
- pak se postupně ustálí přibližně na 120–160 tepů za minutu po zbytek těhotenství.

Číslo, které uvidíte v nálezu, samo o sobě nic nepředpovídá. **Vždycky se hodnotí v kontextu gestačního stáří.**

## Co to znamená

Zachycená srdeční akce je nejvýznamnější prognostický milník raného těhotenství. Po ní **riziko ztráty výrazně klesá** a klesá dál s každým dalším týdnem, kdy je srdeční akce potvrzena. Konkrétní čísla se liší podle věku, diagnózy a průběhu — vaše klinika vám řekne, jak to vypadá u vás.

## Co to neznamená

Neznamená to, že smíte přestat mít strach. Znamená to, že strach už není podložený tím, čím byl minulý týden.

Ženy po IVF často popisují, že po prvním srdíčku úzkost **nezmizela, jen se přesunula** — z otázky „je tam vůbec něco" na otázku „bude to tam i příště". Tohle je normální reakce po opakovaných ztrátách a nezvládne se rozhodnutím. Zvládne se časem, opakovanou zkušeností a někdy odbornou podporou.

## Praktické věci, které pomáhají

- **Ptejte se na konkrétní datum další kontroly** a co se na ní bude hodnotit. Nejistota mezi termíny je horší než sám nález.
- **Nekupujte si domácí dopplerovský detektor.** V prvním a druhém trimestru ozvy často nenajdete ani při zcela normálním nálezu a strávíte večer v panice. Odborné společnosti jejich domácí použití nedoporučují.
- **Nepočítejte tepy z videa.** Frekvence se mění doslova z minuty na minutu.
- **Domluvte si s partnerem nebo blízkým, co potřebujete slyšet.** Věta „vidíš, říkal jsem ti to" většinou nepomáhá; věta „vím, že máš pořád strach, jsem tady" ano.

## Kdy se přechází na běžnou péči

Po potvrzení srdeční akce, obvykle **mezi 8. a 10. týdnem**, vás reprodukční klinika propouští do péče gynekologa, který vás povede po zbytek těhotenství. Dostanete propouštěcí zprávu, ve které je uvedeno, jak těhotenství vzniklo, jaké léky užíváte a do kdy. Tuhle zprávu si uložte, budete se na ni ptát ještě v porodnici.

## Kdy volat lékaře

- silné krvácení, zejména se sraženinami,
- prudká nebo narůstající bolest v podbřišku,
- bolest v rameni, mdloba, výrazná slabost,
- horečka nad 38 °C,
- náhlé úplné vymizení dosavadních těhotenských příznaků spolu s krvácením.

> Text slouží k orientaci a nenahrazuje lékařskou péči. Hodnocení srdeční akce a všech ultrazvukových nálezů patří vašemu lékaři.`,
      minutes: 7,
      phases: ['early_pregnancy'],
      gestWeeks: [6, 10],
      topics: ['tehotenstvi', 'vysledky', 'psychika'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-09-18',
      boost: 0.9,
    },
    {
      id: 'teh-prechod-k-bezinemu-gynekologovi',
      kind: 'article',
      title: 'Konec péče na klinice: přechod k běžnému gynekologovi',
      excerpt:
        'Propuštění z reprodukční kliniky je dobrá zpráva, která se často prožívá jako vyhazov — a vyplatí se na něj připravit.',
      body: `## Kdy k přechodu dochází

Reprodukční klinika vás obvykle vede do **8.–10. gestačního týdne**, na některých pracovištích do 12. týdne. Podmínkou propuštění je zpravidla potvrzené nitroděložní těhotenství s pravidelnou srdeční akcí a odpovídajícím růstem.

Pak vás předá **registrujícímu gynekologovi**, u kterého proběhne zápis do těhotenské poradny a který vás povede po zbytek těhotenství.

## Proč to bolí víc, než by mělo

Na klinice jste byla vidět. Chodila jste tam každé dva dny, znala jste sestry jménem, měla jste telefon, na který se dalo volat. A najednou vás pošlou do systému, kde je kontrola jednou za měsíc a nikdo nezná vaši historii.

Tenhle pocit **není přecitlivělost**. Je to reálná ztráta bezpečí. Pomáhá pojmenovat ji nahlas a pak si vědomě postavit nové zázemí.

## Co si odnést z kliniky — konkrétní seznam

Než odejdete, mějte:

- **Propouštěcí zprávu** s datem transferu, typem cyklu (čerstvý, kryo, dárcovský gamet), stářím embrya a stanoveným termínem porodu.
- **Přesný plán medikace**: co užíváte, v jaké formě, **do kterého gestačního týdne** a jak se to má vysazovat (naráz nebo postupně).
- **Výsledky ultrazvuků** včetně měření.
- **Informaci, kdo řeší akutní stav** v mezidobí, než vás převezme gynekolog.
- **Odpověď na otázku, co se hlásí do porodnice** — u dárcovských gamet a některých diagnóz je to relevantní.

## První návštěva u gynekologa

Na první návštěvě v poradně obvykle proběhne:

1. **Založení těhotenské průkazky** — noste ji od té chvíle stále u sebe.
2. **Odběry krve** — krevní skupina a Rh faktor, krevní obraz, protilátky, infekční sérologie, často funkce štítné žlázy.
3. **Moč** a měření tlaku, které se pak opakují při každé kontrole.
4. **Domluva termínů screeningů** prvního trimestru.
5. **Vystavení dokladů**, pokud potřebujete potvrzení do práce.

Rytmus kontrol bývá zhruba **jednou za 4 týdny do 32. týdne, pak jednou za 2 týdny, od 36. týdne jednou týdně**. U rizikového těhotenství jsou kontroly častější.

## Jak si vybrat, když gynekologa měníte

Ne každý gynekolog má zkušenost s těhotenstvím po asistované reprodukci. Otázky, na které stojí za to znát odpověď hned na začátku:

- **Máte zkušenost s vedením těhotenství po IVF?**
- **Jak často budou kontroly a co když budu mezi nimi znejistělá?**
- **Kam mám volat mimo ordinační hodiny?**
- **Se kterou porodnicí spolupracujete a kdy se mám zaregistrovat?**
- **Jak přistupujete k medikaci, kterou mi předepsala klinika?**

Pokud vám lékař na tyhle otázky neodpoví, nebo vás odbyde větou „to je normální těhotenství, neřešte to", je legitimní hledat dál. **Nejste náročná. Jste žena, která ví, co může přijít.**

## Co si nechat vysvětlit ohledně léků

Podpora luteální fáze (nejčastěji progesteron, u některých protokolů i estrogeny nebo nízkomolekulární heparin) se po IVF obvykle užívá **do 8.–12. týdne**, podle zvyklostí pracoviště a vaší situace. Nikdy nevysazujte sama a nikdy si dávku neupravujte podle článku ani podle jiné ženy z diskuze. **Vysazení má patřit do plánu, který vám dá lékař.**

## Kdy volat, i když máte termín až za tři týdny

- krvácení jakéhokoli rozsahu,
- prudká nebo trvalá bolest v podbřišku,
- horečka nad 38 °C, pálení při močení s teplotou,
- silné zvracení, kdy neudržíte tekutiny déle než 12 hodin,
- náhlá silná bolest hlavy, poruchy vidění, otoky obličeje a rukou.

> Tento článek popisuje obvyklou organizaci péče v Česku. Konkrétní postup a načasování určuje vaše klinika a váš gynekolog; text nenahrazuje jejich pokyny.`,
      minutes: 8,
      phases: ['early_pregnancy', 'pregnancy'],
      gestWeeks: [7, 13],
      topics: ['tehotenstvi', 'klinika', 'psychika'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-25',
      boost: 0.85,
    },
    {
      id: 'teh-uzkost-v-tehotenstvi-po-ivf',
      kind: 'article',
      title: 'Proč se po IVF nedokážete radovat — a proč je to normální',
      excerpt:
        'Otěhotněla jste po letech a místo úlevy přišel strach o každý den; tohle není nevděk, ale logický důsledek toho, čím jste prošla.',
      body: `## Co se s vámi děje

Roky jste se učila, že naděje bolí. Každý pozitivní krok byl následován čekáním, každé čekání někdy skončilo špatně. Váš nervový systém si z toho udělal pravidlo: **radost je předehra ke zklamání, tak se raději neraduj.**

Tomu se odborně říká **hypervigilance** — trvalá zvýšená ostražitost. Není to slabost ani nedostatek vděčnosti. Je to naučená ochrana. A protože je naučená, dá se s ní pracovat.

## Jak se to projevuje

Ženy v těhotenství po asistované reprodukci popisují velmi podobné věci:

- **Kontrola prádla** desetkrát denně, i když nic nekrvácí.
- **Sledování příznaků**: prsa dnes míň bolí, nevolnost polevila — a hned katastrofický scénář.
- **Neschopnost mluvit o těhotenství v budoucím čase.** Nekupujete nic, neplánujete nic, jméno neřešíte.
- **Odkládání radosti na příští milník.** Po srdíčku na 12. týden, po 12. týdnu na morfologii, po morfologii na 24. týden. Milník nikdy nestačí.
- **Vina za to, že nejste šťastná**, když jste si to tak přála.

Pokud se v tomhle poznáváte, nejste výjimka. Jste většina.

## Co pomáhá — konkrétně

**1. Přejmenujte to.** Místo „jsem hysterka" zkuste „mám za sebou opakované ztráty a moje tělo je ve střehu". Přesné pojmenování snižuje intenzitu.

**2. Zaveďte hranice pro kontrolu.** Neříkám přestat, to nejde. Řekněte si: kontroluji ráno a večer, ne mezi tím. Dohodnutá struktura funguje lépe než zákaz.

**3. Mějte plán na krizovou chvíli.** Napište si předem konkrétní kroky: komu volám, na jaké číslo, co si přečtu. V panice se nevymýšlí.

**4. Nechte si u lékaře jasně říct, co je varovný příznak.** Většina úzkosti pochází z toho, že nevíte, co je vlastně vážné. Když máte seznam, můžete se zbytku přestat bát.

**5. Nastavte si informační hygienu.** Diskuzní fóra v raném těhotenství jsou koncentrát nejhorších scénářů. Nemusíte je opustit, ale zvolte si čas a limit.

**6. Nepoužívejte domácí dopplerovský detektor.** V prvním a druhém trimestru je nenalezení ozev naprosto běžné i u zdravého plodu a způsobí paniku, kterou nikdo nepotřebuje.

**7. Mluvte v přítomném čase.** Ne „až se narodí", ale „dnes jsem těhotná". Přítomnost je jediné, co je jisté, a je to zároveň pravda.

## Co nefunguje a co si nemusíte nechat líbit

Věty typu „hlavně se uklidni, ať to neovlivníš", „mysli pozitivně", „stres škodí miminku" jsou nejen neúčinné, ale **aktivně škodlivé** — přidávají vinu k úzkosti. Stres, který prožíváte, není příčinou komplikací a nikdo vám nemá právo tvrdit opak.

Pokud vám to někdo řekne, můžete odpovědět: „Vím, že to myslíš dobře. Pomůže mi víc, když se prostě zeptáš, jak mi je."

## Kdy vyhledat odbornou pomoc

Úzkost je normální. **Přestane být normální, když vám bere fungování.** Vyhledejte psychologickou nebo psychiatrickou pomoc, pokud:

- nespíte kvůli myšlenkám více než dva týdny,
- nedokážete pracovat ani vykonávat běžné činnosti,
- máte panické ataky (bušení srdce, dušnost, pocit umírání),
- pociťujete trvalou beznaděj nebo myšlenky, že by bylo lepší tu nebýt,
- máte silné vtíravé obrazy, kterých se nemůžete zbavit.

Mnoho reprodukčních klinik má psychologa a existují i terapeuti specializovaní na reprodukční ztráty. **Vyhledání pomoci v těhotenství není selhání a není to nic, co by vám ublížilo.**

## Kdy volat lékaře

- myšlenky na sebepoškození nebo na ukončení života — **okamžitě**, linka první psychické pomoci nebo pohotovost,
- panické stavy, které se opakují a nezvládáte je,
- neschopnost jíst a pít kvůli úzkosti.

> Tento text je psychoedukační a nenahrazuje odbornou psychologickou ani lékařskou péči. Pokud vám je zle, mluvte o tom s odborníkem.`,
      minutes: 9,
      phases: ['early_pregnancy', 'pregnancy', 'high_risk_pregnancy'],
      gestWeeks: [5, 30],
      topics: ['psychika', 'tehotenstvi', 'sebepece'],
      modifiers: ['after_loss', 'repeated_failure'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-10-02',
      boost: 0.9,
    },
    {
      id: 'teh-nevolnosti-a-zvraceni',
      kind: 'article',
      title: 'Nevolnosti: co s nimi jde dělat a kdy už jde o víc',
      excerpt:
        'Ranní nevolnost je nepřesný název pro stav, který trvá celý den — a existuje hranice, za kterou už to není normální těhotenský příznak.',
      body: `## Proč je vám špatně

Nevolnost v prvním trimestru souvisí především se **vzestupem hCG a estrogenů**, se zpomalením vyprazdňování žaludku a se zvýšenou citlivostí na pachy. Typicky začíná kolem **6. týdne**, vrcholí přibližně mezi **9. a 12. týdnem** a u většiny žen ustupuje do **16. týdne**.

Někdy se říká, že silné nevolnosti jsou dobrým znamením. **Neplatí to jako pravidlo v jednotlivém případě** — mnoho zdravých těhotenství probíhá bez jediné nevolnosti a jejich nepřítomnost není důvod k obavám.

## Co reálně pomáhá

Žádné z opatření nefunguje u všech. Zkoušejte postupně:

- **Jezte dřív, než dostanete hlad.** Prázdný žaludek nevolnost zhoršuje. Malé porce po dvou hodinách fungují lépe než tři jídla.
- **Něco suchého ještě před vstáváním** — sušenka, kousek pečiva, rýžový chlebíček na nočním stolku, snězený vleže, a pak deset minut počkat.
- **Oddělte pití od jídla.** Tekutiny mezi jídly, ne k jídlu.
- **Chlazené a neutrální jídlo** voní míň. Studená jídla bývají snesitelnější než horká.
- **Zázvor** v podobě čaje, kandovaného zázvoru nebo zázvorových bonbonů má pro nevolnost v těhotenství doloženou účinnost.
- **Vitamin B6** je běžně používanou první volbou, ale **dávkování konzultujte s lékařem nebo lékárníkem** — nekupujte nazdařbůh.
- **Akupresurní náramky** na bod P6 pomáhají části žen a nemají nežádoucí účinky.
- **Vyměňte prenatální vitamin.** Železo v něm často nevolnost zhoršuje. Existují jemnější varianty; poraďte se, čím ho dočasně nahradit.
- **Větrejte, vyhněte se spouštěcím pachům**, klidně požádejte partnera, ať vaří nebo ať se sprchuje bez parfému.

Pokud režimová opatření nestačí, existují **léky proti nevolnosti bezpečné v těhotenství**. Předepisuje je lékař. Není žádná ctnost v tom trpět — nevolnost, která vám bere práci a spánek, je důvod k léčbě.

## Hyperemesis gravidarum — kdy už to není běžná nevolnost

Hyperemesis je závažný stav, ne silnější verze nevolnosti. Typicky zahrnuje **úbytek hmotnosti nad 5 % oproti stavu před těhotenstvím, neschopnost udržet tekutiny, dehydrataci a rozvrat vnitřního prostředí**. Vyžaduje lékařskou péči, často infuzní léčbu a někdy hospitalizaci.

Není to psychická slabost a nedá se překonat vůlí. Ženy s hyperemezí bývají odbývány větou „to má každá" — **nenechte se odbýt**.

## Praktická pravidla pro dehydrataci

Nejde jen o zvracení, ale o to, kolik v sobě udržíte. Sledujte:

- **barvu moči** — tmavá koncentrovaná moč je varování,
- **frekvenci močení** — méně než třikrát denně je varování,
- **hmotnost** — vážte se jednou týdně ve stejnou dobu,
- **suchost v ústech, závrať při vstávání, bušení srdce**.

Když nezvládáte pít, zkuste **ledové kostky, doušky po lžičce každých pár minut, rehydratační roztok z lékárny, řídkou polévku**. Velké množství naráz se často vrátí.

## Když nevolnost náhle přestane

Ustoupení nevolnosti kolem 12.–16. týdne je normální průběh. **Náhlé vymizení příznaků samo o sobě není známkou problému** — hormonální hladiny se mění a citlivost na ně také. Pokud vás to znepokojuje, řekněte to lékaři a domluvte si kontrolu; není důvod se s tím trápit tři týdny sama.

## Kdy volat lékaře

- **neudržíte žádné tekutiny déle než 12 hodin**,
- **zvracíte více než 4–5× denně** opakovaně,
- **hubnete** nebo jste za týden ztratila víc než 2 kg,
- **močíte málo, moč je tmavá**, máte závratě při postavení,
- **zvratky obsahují krev** nebo vypadají jako kávová sedlina,
- **teplota nad 38 °C** nebo průjem spolu se zvracením,
- **bolest břicha**, která není křečovitá jen při zvracení.

> Text má informativní charakter a nenahrazuje lékařskou péči. O jakémkoli léku, včetně volně prodejného, rozhoduje váš lékař nebo lékárník.`,
      minutes: 8,
      phases: ['early_pregnancy', 'pregnancy'],
      gestWeeks: [5, 17],
      topics: ['tehotenstvi', 'strava', 'zdravi_ditete'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'Světová zdravotnická organizace — doporučení pro prenatální péči',
      ],
      publishedOn: '2025-10-09',
      boost: 0.8,
    },
    {
      id: 'teh-unava-prsa-a-dalsi-priznaky',
      kind: 'article',
      title: 'Únava, prsa a další příznaky, které nikdo nepopisuje pravdivě',
      excerpt:
        'Únava prvního trimestru není „jsem trochu unavená" — je to stav, kdy usnete v poledne vsedě, a nikdo vám dopředu neřekl, že to takhle vypadá.',
      body: `## Únava, která se nedá přemoct

Únava prvního trimestru patří mezi nejsilnější tělesné zážitky celého těhotenství. Podílí se na ní **prudký vzestup progesteronu**, který má tlumivý účinek, zvýšená spotřeba energie na budování placenty, pokles krevního tlaku a často i nižší hladina železa.

Vrcholí přibližně mezi **7. a 12. týdnem** a u většiny žen se ve druhém trimestru výrazně zlepší.

Co s tím prakticky:

- **Spěte, kdy to jde.** Dvacetiminutový spánek v poledne funguje lépe než káva.
- **Snižte laťku.** Toto je období, kdy se domácnost nemusí lesknout a večeře může být z mrazáku.
- **Nechte si zkontrolovat krevní obraz a železo**, pokud je únava extrémní. Anémie je v těhotenství častá a řešitelná.
- **Nechte si zkontrolovat štítnou žlázu**, pokud máte v anamnéze poruchu funkce — v těhotenství se potřeba hormonu mění.
- **Hýbejte se lehce.** Zní to paradoxně, ale krátká procházka únavu často zmírní víc než ležení.

## Prsa

Napětí, bolestivost a citlivost bradavek patří k nejčasnějším příznakům. Prsa **rostou už od prvních týdnů**, žíly na nich prosvítají, dvorce tmavnou a zvětšují se, mohou se objevit drobné hrbolky (Montgomeryho žlázky).

Praktické:

- **Podprsenka bez kostic**, o číslo nebo dvě větší, klidně i na spaní. Kostice v tomhle období většina žen nesnese.
- **Kolem 16.–20. týdne** se může objevit kolostrum. Není to důvod k obavám a neznamená to nic o budoucím kojení.
- **Bolestivost kolísá** a v druhém trimestru obvykle ustupuje.

Po IVF je tenhle příznak zrádný: napětí prsou způsoboval i progesteron v luteální podpoře, takže ho neumíte odlišit od těhotenského. Nemá cenu podle něj cokoli usuzovat.

## Další věci, o kterých se moc nemluví

- **Nadýmání a zácpa.** Progesteron zpomaluje střeva. Pomáhá vláknina, dostatek tekutin a pohyb. **Projímadla ani vlákninové přípravky neužívejte bez konzultace.**
- **Časté močení.** Už v prvním trimestru, kvůli prokrvení pánve. Nesnižujte kvůli tomu pitný režim.
- **Pálení žáhy.** Objevuje se dřív, než čekáte. Pomáhá menší večeře, zvýšená poloha hlavy, vynechání kyselých a tučných jídel.
- **Zvýšený výtok.** Bílý, řidší, bez zápachu a bez svědění je normální.
- **Krvácení dásní** při čištění zubů. Prokrvení sliznic se mění. Měkký kartáček a návštěva zubaře jsou v těhotenství namístě.
- **Bolesti hlavy** a citlivost na pachy.
- **Změny nálad**, které nedávají smysl a přijdou v půlce věty.
- **Tahavé pocity po stranách podbřišku** — natahují se vazy dělohy. Bývají silnější při vstávání a kýchání.

## Co je normální a co ne

Normální: napětí, tahání, občasné pobolívání, které přijde a odejde, občasné mírné hnědavé špinění bez bolesti.

**Není normální**: bolest, která narůstá a nepolevuje, bolest jednostranná, jasně červené krvácení, horečka.

## Když příznaky zmizí

Kolísání intenzity příznaků je běžné, dokonce ze dne na den. Náhlé úplné vymizení bez dalších potíží není samo o sobě varovným znamením, ale pokud vás to děsí, **domluvte si kontrolu**. Tři týdny strachu nestojí za jeden telefonát.

## Kdy volat lékaře

- jasně červené krvácení, zvlášť se sraženinami,
- prudká nebo jednostranná bolest v podbřišku, bolest v rameni,
- horečka nad 38 °C,
- pálení a řezání při močení, bolest v zádech s teplotou,
- výtok zapáchající, zelenavý, spojený se svěděním nebo pálením,
- silné závratě, mdloby, bušení srdce v klidu.

> Popsané příznaky jsou obecné a individuální průběh se liší. Text nenahrazuje vyšetření u lékaře.`,
      minutes: 7,
      phases: ['early_pregnancy', 'pregnancy'],
      gestWeeks: [5, 16],
      topics: ['tehotenstvi', 'sebepece'],
      level: 'essential',
      hero: 'sand',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-16',
      boost: 0.7,
    },
    {
      id: 'teh-screening-prvniho-trimestru',
      kind: 'article',
      title: 'Screening prvního trimestru: co se měří a co výsledek znamená',
      excerpt:
        'Kombinovaný test není diagnóza a jeho výsledek je pravděpodobnost — což je pojem, se kterým se pracuje hůř, než by se čekalo.',
      body: `## Co to je

Screening prvního trimestru, často nazývaný **kombinovaný test** nebo prvotrimestrální screening, se provádí přibližně mezi **11. a 14. gestačním týdnem**, kdy plod měří zhruba 45–84 mm (parametr CRL).

Kombinuje tři skupiny údajů:

1. **Ultrazvukové měření** — především šíjové projasnění (NT, nuchální translucence), dále nosní kůstka, průtok trikuspidální chlopní a ductus venosus, celková morfologie plodu.
2. **Biochemii z krve matky** — free beta hCG a PAPP-A.
3. **Vaše osobní údaje** — věk, hmotnost, kouření, počet plodů, způsob početí (ano, i to, že šlo o IVF, a jestli šlo o dárcovský oocyt).

Z toho software spočítá **individuální riziko** nejčastějších chromozomálních odchylek, typicky trizomie 21, 18 a 13.

## Co ten výsledek znamená

Výsledek je **pravděpodobnost, ne diagnóza**. Vypadá jako poměr, například 1:5000 nebo 1:180. Znamená to: kdyby bylo tisíc žen se stejnými parametry, u jedné z tolika a tolika by se odchylka potvrdila.

Hranice mezi „nízkým" a „zvýšeným" rizikem se na pracovištích mírně liší. **Zvýšené riziko neznamená, že něco není v pořádku.** Znamená to nabídku dalšího vyšetření — obvykle NIPT nebo přímo invazivní diagnostiku.

## Co ultrazvuk zároveň ukáže

Vyšetření nemá jen skríninkovou hodnotu. Lékař se zároveň dívá na:

- **počet plodů a typ dvojčat** (zda mají společnou placentu) — tohle je jedno z nejdůležitějších měření celého těhotenství, protože se nejpřesněji určí právě teď,
- **stanovení termínu porodu** podle CRL,
- **anatomii** — končetiny, břišní stěnu, lebku, močový měchýř, žaludek,
- **placentu a její uložení**,
- **průtoky děložními tepnami**, které vstupují do odhadu rizika preeklampsie.

## Screening preeklampsie

Na řadě pracovišť se v rámci prvotrimestrálního vyšetření provádí i **odhad rizika preeklampsie** — kombinuje se tlak krve, dopplerovské měření průtoku děložními tepnami a laboratorní marker PlGF.

Pokud výsledek vyjde jako zvýšené riziko, lékař obvykle nabídne **preventivní léčbu nízkodávkovaným aspirinem**, která se zahajuje před 16. týdnem. **O indikaci i dávkování rozhoduje výhradně lékař** — nikdy si aspirin v těhotenství nenasazujte sama.

## Jak se rozhodnout, jestli screening chtít

Screening je **nabídka, ne povinnost**. Než se rozhodnete, zvažte:

- **Co udělám s výsledkem?** Pokud víte, že byste na základě žádného výsledku nepodnikala další kroky, je legitimní ho odmítnout — ale i tak má vyšetření hodnotu kvůli anatomii a určení dvojčat.
- **Snesu období nejistoty?** Mezi zvýšeným rizikem a výsledkem navazujícího testu uplyne obvykle jeden až dva týdny.
- **Chci vědět víc, i kdyby to bylo těžké?** Na tuhle otázku neexistuje správná odpověď, jen vaše.

Po letech léčby je běžné cítit se v této chvíli podvedená — konečně jste těhotná a někdo mluví o rizicích. **To, že se ptáte, neznamená, že si dítě přejete méně.**

## Praktické tipy

- **Objednejte se včas.** Okno je úzké a v některých regionech se čeká.
- **Vezměte si propouštěcí zprávu z reprodukční kliniky** — způsob početí ovlivňuje výpočet.
- **Ptejte se, kdo a kdy vám sdělí výsledek** a jak dlouho to potrvá.
- **Domluvte si, komu voláte s dotazy**, pokud vyjde něco nejasného.

## Kdy volat lékaře

- krvácení po vyšetření (samotný ultrazvuk krvácení nezpůsobuje),
- prudká bolest v podbřišku,
- horečka nad 38 °C.

> Text je informativní. Interpretaci výsledků, indikaci dalších vyšetření a jakoukoli léčbu určuje výhradně váš lékař.`,
      minutes: 8,
      phases: ['pregnancy', 'early_pregnancy'],
      gestWeeks: [10, 15],
      topics: ['tehotenstvi', 'genetika', 'vysledky'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'ISUOG — doporučené postupy pro ultrazvuk v porodnictví',
      ],
      publishedOn: '2025-10-23',
      boost: 0.85,
    },
    {
      id: 'teh-nipt',
      kind: 'article',
      title: 'NIPT: neinvazivní test z krve, který se často špatně vysvětluje',
      excerpt:
        'NIPT je nejpřesnější screening, jaký dnes máme — ale pořád je to screening, a rozdíl mezi tím a diagnózou stojí za pochopení.',
      body: `## Co NIPT je

NIPT (neinvazivní prenatální testování) je **vyšetření z běžného odběru krve matky**. V krvi těhotné ženy koluje malé množství **mimobuněčné DNA pocházející z placenty**. Laboratoř tuto DNA analyzuje a hodnotí, zda odpovídá očekávanému zastoupení jednotlivých chromozomů.

Provádí se obvykle **od 10. gestačního týdne** výš. Není pro něj horní hranice — dá se udělat i později.

## Co umí a co neumí

**Umí velmi spolehlivě:**
- posoudit riziko **trizomie 21 (Downův syndrom)**, 18 a 13,
- určit pohlaví plodu,
- posoudit odchylky pohlavních chromozomů (s nižší přesností).

Rozšířené panely nabízejí i **mikrodelece** a analýzu všech chromozomů, ale u vzácných nálezů je podíl falešně pozitivních výsledků výrazně vyšší. Než si připlatíte za rozšířenou variantu, zeptejte se, co konkrétně s takovým výsledkem budete dělat.

**Neumí:**
- odhalit vrozené vady, které nejsou chromozomální (srdeční vady, rozštěpy, vady ledvin) — na to slouží ultrazvuk,
- nahradit morfologický ultrazvuk ve 20. týdnu,
- **stanovit diagnózu**. Pozitivní výsledek se vždy ověřuje invazivním odběrem.

## Proč je to pořád screening

Testovaná DNA nepochází z plodu, ale z placenty. V malém procentu případů se **genetická výbava placenty a plodu liší** (tzv. konfinovaný placentární mozaicismus). Proto se **pozitivní NIPT vždy potvrzuje** odběrem plodové vody nebo choriových klků.

Negativní NIPT má naopak velmi vysokou negativní prediktivní hodnotu pro trizomii 21 — proto se mu tolik věří.

## Fetální frakce a nevýsledek

Aby test fungoval, musí být v krvi dostatečný podíl placentární DNA, tzv. **fetální frakce**. Když je nízká, laboratoř výsledek nevydá. Stává se to častěji:

- při odběru dřív než v 10. týdnu,
- při vyšší tělesné hmotnosti matky,
- u některých typů těhotenství.

Řešením bývá **opakovaný odběr za jeden až dva týdny**. Není to zpráva o dítěti; je to zpráva o vzorku.

## Specifika po IVF

- **Po dárcovském oocytu** test funguje, protože analyzovaná DNA je placentární, tedy plodová. Laboratoři to ale **musíte nahlásit**, protože se mění způsob vyhodnocení a interpretace pohlavních chromozomů.
- **U dvojčat** je NIPT možný, ale méně informativní — nelze určit, ke kterému plodu nález patří, a u vymizelého dvojčete může výsledek zkreslit.
- **Po PGT-A** se NIPT pořád doporučuje, protože PGT-A je také screening, dělaný na několika buňkách trofektodermu, a mozaicismus embrya se do něj promítá.

## Kolik to stojí a kdy to platí pojišťovna

Úhrada se v čase mění a liší se podle indikace i pojišťovny. Obecně platí, že **při zvýšeném riziku z kombinovaného testu** bývá cesta k úhradě otevřenější než při samoplátcovském testu z vlastní volby. Zeptejte se svého gynekologa na aktuální podmínky a na ceník konkrétní laboratoře — čísla se mění a nemá smysl je opisovat z internetu.

## Jak se rozhodnout

Užitečné otázky sama pro sebe:

- **Chci vědět?** Není hanba odpovědět ne.
- **Co udělám, když vyjde zvýšené riziko?** Půjdu na amniocentézu? Jsem připravená na to čekání?
- **Jsem ochotná test platit?** A pokud ne, mění to něco na mém rozhodování?

Po dlouhé léčbě bývá tohle rozhodnutí obzvlášť těžké. Mnoho žen popisuje pocit, že by neměly „hledat problémy". Ale informace vám neubližuje — **vy si sama rozhodujete, co s ní uděláte.**

## Kdy volat lékaře

- pokud výsledek nerozumíte a nikdo vám ho nevysvětlil srozumitelně, trvejte na konzultaci s genetikem,
- krvácení nebo bolest v souvislosti s jakýmkoli výkonem.

> Text popisuje princip vyšetření obecně. Indikaci, výběr laboratoře i interpretaci výsledku určuje váš lékař nebo klinický genetik.`,
      minutes: 8,
      phases: ['pregnancy', 'early_pregnancy'],
      gestWeeks: [10, 18],
      topics: ['genetika', 'tehotenstvi', 'vysledky'],
      level: 'deep',
      hero: 'taupe',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Společnost lékařské genetiky a genomiky ČLS JEP',
        'ISUOG — doporučené postupy pro ultrazvuk v porodnictví',
      ],
      publishedOn: '2025-10-30',
      boost: 0.75,
    },
    {
      id: 'teh-amniocentaza',
      kind: 'article',
      title: 'Amniocentéza a odběr choriových klků: co to obnáší',
      excerpt:
        'Invazivní vyšetření zní hrozivě, ale je to jediná cesta ke skutečné diagnóze — a stojí za to vědět, jak vlastně probíhá.',
      body: `## Proč se dělá

Screeningové testy (kombinovaný test, NIPT) říkají, **jak je něco pravděpodobné**. Invazivní vyšetření říká, **jak to je**. Provádí se, když:

- screening vyšel se zvýšeným rizikem,
- ultrazvuk ukázal nález, který vyžaduje objasnění,
- je známé genetické riziko v rodině,
- si to žena po poučení přeje.

Vždy jde o **nabídku, kterou můžete odmítnout**.

## Dvě metody

**Odběr choriových klků (CVS, biopsie choria)** se provádí přibližně mezi **11. a 14. týdnem**. Odebírá se malý vzorek placentární tkáně, buď přes břišní stěnu, nebo přes hrdlo děložní. Výhoda: dřívější výsledek. Nevýhoda: nepatrně vyšší riziko výkonu a možnost zachycení mozaicismu placenty, který nemusí odpovídat plodu.

**Amniocentéza (odběr plodové vody)** se provádí obvykle **od 16. týdne**. Tenkou jehlou se pod stálou ultrazvukovou kontrolou odebere přibližně 15–20 ml plodové vody, ve které jsou buňky plodu. Výhoda: přesnější, menší riziko nejasného výsledku. Nevýhoda: později.

Volbu metody navrhne lékař podle týdne, nálezu a toho, co se má hledat.

## Jak výkon probíhá

1. **Konzultace s genetikem** — vysvětlení, co se hledá, informovaný souhlas.
2. **Ultrazvuk** — určení polohy plodu, placenty a bezpečného místa vpichu.
3. **Dezinfekce břicha.** Lokální umrtvení se často nepoužívá, protože vpich samotný je srovnatelný s odběrem krve.
4. **Samotný odběr** trvá zpravidla **méně než minutu**. Ženy nejčastěji popisují tlak a tahavý pocit, ne ostrou bolest.
5. **Kontrola srdeční akce plodu** po výkonu.
6. **Klid** obvykle 24–48 hodin, podle pokynů pracoviště.

Pokud máte **Rh negativní krevní skupinu**, dostanete po výkonu anti-D imunoglobulin. Připomeňte to, i když by na to lékař neměl zapomenout.

## Riziko

Riziko ztráty těhotenství po výkonu je v současnosti **velmi nízké** a v moderních podmínkách výrazně nižší, než se dřív uvádělo. Konkrétní číslo pro dané pracoviště by vám měl sdělit lékař, který výkon provádí — a je legitimní se na počet výkonů a komplikací daného pracoviště zeptat.

Právě tady bývá rozhodování po IVF nejtěžší. Riziko není nula a vy víte lépe než kdo jiný, co znamená ztráta. **Nikdo vás nemůže nutit a nikdo vám nemůže vyčítat, když odmítnete.**

## Jak dlouho se čeká na výsledek

- **Rychlý test** (obvykle metodou QF-PCR na nejčastější trizomie) — typicky do několika pracovních dní.
- **Kompletní karyotyp z kultivace** — přibližně dva až tři týdny.
- **Molekulární vyšetření (array/CMA)** podle laboratoře, obvykle v řádu dvou týdnů.

Zeptejte se předem, **který výsledek dostanete kdy** a kdo vám ho sdělí. Čekání se snáší lépe, když víte, na co čekáte.

## Co dělat mezi odběrem a výsledkem

- **Domluvte si konkrétní den a hodinu**, kdy vám budou volat. Vyhnete se tomu, že budete deset dní zírat na telefon.
- **Vyberte si jednoho člověka**, se kterým o tom mluvíte. Deset lidí s deseti názory situaci nezlepší.
- **Připravte si předem otázky** pro případ, že by výsledek byl nepříznivý. V šoku se neptá dobře.
- **Nechte si nabídnout psychologickou konzultaci** — mnoho center ji má a nabízejí ji málo.

## Kdy volat lékaře po výkonu

- **odtok plodové vody** — čirá tekutina odtékající z pochvy,
- **krvácení**,
- **horečka nad 38 °C** nebo zimnice,
- **silná nebo narůstající bolest břicha**, pravidelné kontrakce,
- výrazné snížení pohybů plodu, pokud už je vnímáte.

> Tento text popisuje výkony obecně, aby vám byly srozumitelné. Rozhodnutí o indikaci, provedení a hodnocení patří výhradně vašemu lékaři a klinickému genetikovi.`,
      minutes: 8,
      phases: ['pregnancy'],
      gestWeeks: [11, 22],
      topics: ['genetika', 'tehotenstvi', 'vysledky'],
      level: 'deep',
      hero: 'dusk',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Společnost lékařské genetiky a genomiky ČLS JEP',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-06',
      boost: 0.6,
    },
    {
      id: 'teh-morfologicky-ultrazvuk',
      kind: 'article',
      title: 'Morfologický ultrazvuk: nejdůkladnější pohled na miminko',
      excerpt:
        'Vyšetření kolem 20. týdne trvá dlouho, lékař u něj mlčí a vy si to vyložíte špatně — proto se vyplatí vědět, co se tam vlastně děje.',
      body: `## Kdy a proč

Morfologický (podrobný anatomický) ultrazvuk se provádí obvykle mezi **18. a 22. gestačním týdnem**, nejčastěji kolem 20. týdne. Je to **nejdůkladnější vyšetření anatomie plodu** v celém těhotenství.

Načasování není náhodné: dřív jsou struktury příliš malé, později plod zabírá tolik místa a má tvrdší kosti, které stíní, takže se hůř zobrazuje.

## Co se kontroluje

Lékař systematicky prochází celé tělo plodu:

- **Hlava a mozek** — tvar lebky, komorový systém, mozeček, cavum septi pellucidi.
- **Obličej** — profil, nosní kůstka, orbity, horní ret (screening rozštěpu).
- **Páteř** — v podélném i příčném řezu, celistvost kožního krytu.
- **Srdce** — čtyřdutinová projekce, výtokové trakty, oblouk aorty, frekvence a rytmus. Srdce zabere nejvíc času.
- **Hrudník a plíce.**
- **Břicho** — žaludek, střeva, ledviny, močový měchýř, břišní stěna a úpon pupečníku.
- **Končetiny** — dlouhé kosti, jejich délka, přítomnost rukou a nohou.
- **Placenta** — uložení, vztah k vnitřní brance, struktura.
- **Plodová voda** — množství.
- **Pupečník** — počet cév.
- **Děložní hrdlo** — délka, často měřená vaginální sondou.
- **Biometrie** — obvod hlavy, obvod břicha, délka stehenní kosti, z toho odhad hmotnosti.
- **Dopplerovské průtoky** děložními tepnami, pokud jsou indikované.

## Proč lékař mlčí

Protože počítá, měří a hledá. Systematické projití všech struktur vyžaduje soustředění a mluvení ho ruší. **Ticho během vyšetření není zpráva.** Zeptejte se hned na začátku: „Můžete mi na konci všechno shrnout?" Většina lékařů to udělá ráda, jen na to nemyslí.

## Co vyšetření nedokáže

Ani perfektně provedený morfologický ultrazvuk **nevyloučí všechny vady**. Některé se rozvíjejí až později (například část srdečních vad nebo poruchy růstu), jiné nejsou zobrazitelné. Kvalita zobrazení navíc závisí na poloze plodu, množství plodové vody a tělesné konstituci matky.

Pokud se něco nepodaří zobrazit, obvykle se **domluví doplňkové vyšetření za pár dní**. Není to špatná zpráva, je to nedokončená práce.

## Praktické tipy

- **Vezměte si partnera nebo blízkého**, pokud to pracoviště umožňuje. Vyšetření trvá 20–45 minut a je to zážitek, který stojí za sdílení.
- **Přijďte najedená**, aktivnější plod se lépe zobrazuje.
- **Vezměte si těhotenskou průkazku** a výsledky předchozích screeningů.
- **Ptejte se na uložení placenty** a co to znamená pro další sledování.
- **Ptejte se na délku hrdla** — je to údaj, který má význam pro riziko předčasného porodu.
- **Rozmyslete si předem, jestli chcete znát pohlaví.** Řekněte to na začátku, ne až když to lékař vysloví.

## Když se najde odchylka

Sdělení „vidím tady něco, co bych ráda ověřila" spustí paniku okamžitě. Co pomáhá:

1. **Zeptejte se, co konkrétně je vidět** a nechte si to ukázat.
2. **Zeptejte se, co to může znamenat** a jak široké je spektrum možností.
3. **Zeptejte se na další krok** — kontrola, superkonziliární ultrazvuk v centru, genetická konzultace.
4. **Nevyhledávejte diagnózu na internetu, dokud nemáte přesný název nálezu.** Řada nálezů má úplně jinou závažnost, než jak vypadají po prvním vygooglení.
5. **Nechte si dát kontakt**, kam volat s dotazy.

Většina nejasných nálezů se při doplňujícím vyšetření ukáže jako varianta normy nebo jako nález bez klinického významu. **Nejistota je nejhorší část a bývá krátká.**

## Kdy volat lékaře

- odtok plodové vody nebo výrazně zvýšený vodnatý výtok,
- krvácení,
- pravidelné bolestivé stahy, tlak dolů,
- horečka nad 38 °C,
- výrazná změna pohybů plodu, pokud už je vnímáte.

> Text má informativní charakter. Rozsah a hodnocení vyšetření určuje váš lékař; text nenahrazuje jeho závěry.`,
      minutes: 9,
      phases: ['pregnancy'],
      gestWeeks: [17, 23],
      topics: ['tehotenstvi', 'vysledky', 'genetika'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ISUOG — doporučené postupy pro ultrazvuk v porodnictví',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-13',
      boost: 0.85,
    },
    {
      id: 'teh-ogtt-a-gestacni-diabetes',
      kind: 'article',
      title: 'oGTT a těhotenská cukrovka: test, kterého se všechny bojí',
      excerpt:
        'Tři hodiny, tři odběry a sladký roztok, ze kterého je většině žen zle — a pak diagnóza, která se dá zvládnout líp, než se zdá.',
      body: `## Co je oGTT

Orální glukózový toleranční test se v Česku provádí standardně mezi **24. a 28. gestačním týdnem**. U žen se zvýšeným rizikem se glykemie kontroluje už na začátku těhotenství a test se může provést dřív.

Průběh:

1. **Nalačno** (obvykle 8–12 hodin bez jídla, voda povolena) se odebere krev.
2. Vypijete roztok se **75 g glukózy** — zhruba 2,5 dl velmi sladké tekutiny, do 5 minut.
3. Odběr **po 60 minutách**.
4. Odběr **po 120 minutách**.

Mezi odběry musíte **sedět v klidu**, nejíst, nekouřit, nepít nic kromě povolené vody a nechodit na procházky. Pohyb ovlivňuje výsledek.

## Jak to přežít

- **Vezměte si něco ke čtení a teplý svetr.** Tři hodiny v čekárně jsou dlouhé.
- **Vezměte si svačinu na potom.** Po posledním odběru budete mít hlad a často i pokles cukru.
- **Roztok pijte plynule po douškách**, ne na ex. Studený se pije lépe.
- **Když je vám zle, řekněte to sestře.** Pokud roztok vyzvracíte, test se musí opakovat jindy — nemá cenu to skrývat.
- **Přijeďte s někým**, pokud jste náchylná ke slabosti. Někdy se točí hlava.
- **Den předtím jezte normálně.** Drastické omezení sacharidů před testem výsledek zkreslí, a to spíš k horšímu.

## Když test vyjde pozitivně

Diagnóza gestačního diabetu není vaše vina a nesouvisí s tím, kolik jste snědla sladkého. Vzniká proto, že **hormony placenty snižují citlivost k inzulinu** a slinivka někdy nedokáže zvýšenou potřebu pokrýt. Rizikovými faktory jsou vyšší věk, vyšší hmotnost, PCOS, rodinná zátěž a předchozí gestační diabetes — tedy věci, které z velké části neovlivníte.

Co následuje:

- **Konzultace v diabetologické poradně** (nebo u diabetologa specializovaného na těhotné).
- **Edukace o stravě** — rozložení sacharidů do menších dávek, kvalita sacharidů, kombinace s bílkovinou.
- **Selfmonitoring glykemie** glukometrem, obvykle nalačno a po jídlech.
- **Doporučení k pohybu** — často stačí 15–30 minut chůze po jídle.
- **U části žen inzulin.** Není to selhání diety, je to stav, kdy tělo potřebuje víc. Perorální antidiabetika a inzulin indikuje výhradně lékař.

**Většina žen s gestačním diabetem si vystačí s režimovými opatřeními.**

## Proč se to řeší

Neléčená hyperglykemie zvyšuje riziko nadměrného růstu plodu, komplikací u porodu, poporodní hypoglykemie novorozence a u matky riziko preeklampsie. **Léčený gestační diabetes tato rizika výrazně snižuje** — proto ten důraz.

## Co se děje po porodu

Gestační diabetes obvykle po porodu odezní. Doporučuje se **kontrolní oGTT zhruba 6–12 týdnů po porodu** a pak dlouhodobé sledování glykemie, protože se zvyšuje riziko diabetu 2. typu v dalších letech. Tuhle kontrolu si zapište už teď — v šestinedělí se na ni snadno zapomene.

## Praktické minimum k jídelníčku

Než dostanete odbornou edukaci, tyhle zásady neuškodí nikomu:

- **Nejezte sacharidy samotné.** Vždy s bílkovinou nebo tukem — zpomalí to vstřebávání.
- **Rozdělte den na 5–6 menších jídel.**
- **Vynechejte slazené nápoje a ovocné džusy.** Tekuté cukry zvednou glykemii nejrychleji.
- **Po jídle se projděte**, i deset minut má měřitelný efekt.
- **Snídaně bývá nejcitlivější jídlo dne** — ranní glykemie po sacharidové snídani bývá nejvyšší.

## Kdy volat lékaře

- opakovaně vysoké hodnoty glykemie mimo domluvené rozmezí,
- velká žízeň, časté močení, výrazná únava, hubnutí,
- opakované hodnoty pod dolní hranicí, třes, pocení, zmatenost,
- ketony v moči, pokud si je měříte,
- výrazné snížení pohybů plodu.

> Text je informativní. Diagnózu, cílové hodnoty i jakoukoli léčbu včetně inzulinu stanovuje výhradně váš lékař a diabetolog.`,
      minutes: 8,
      phases: ['pregnancy', 'high_risk_pregnancy'],
      gestWeeks: [22, 30],
      topics: ['tehotenstvi', 'strava', 'rizikove'],
      modifiers: ['gestational_diabetes'],
      level: 'essential',
      hero: 'sand',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'Česká diabetologická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-20',
      boost: 0.85,
    },
    {
      id: 'teh-preeklampsie',
      kind: 'article',
      title: 'Preeklampsie: příznaky, které musíte znát nazpaměť',
      excerpt:
        'Tohle je jediný článek v celém těhotenství, jehož seznam varovných příznaků si opravdu zapamatujte — rozpoznání včas mění všechno.',
      body: `## Co to je

Preeklampsie je závažná komplikace těhotenství, při které dochází k **vzestupu krevního tlaku a k postižení dalších orgánů** — nejčastěji ledvin, jater, krevní srážlivosti a v těžkých případech mozku. Souvisí s poruchou vývoje placenty, která začíná už v raném těhotenství, i když se projeví typicky **po 20. gestačním týdnu**.

Postihuje jednotky procent těhotenství. **Není to vaše vina a nezpůsobila jste ji ničím, co jste dělala nebo nedělala.**

## VAROVNÉ PŘÍZNAKY — volejte ihned

Tohle je část, kterou si přečtěte dvakrát:

- **silná bolest hlavy**, která neustupuje po odpočinku ani po paracetamolu,
- **poruchy vidění** — jiskření, blikání, rozmazané vidění, výpadky zorného pole, dvojité vidění,
- **bolest v nadbřišku nebo pod pravým žeberním obloukem**, často popisovaná jako pálení žáhy, které nereaguje na nic,
- **náhlé otoky obličeje, víček a rukou** (na rozdíl od otoků kotníků, které jsou v těhotenství běžné),
- **rychlý přírůstek hmotnosti** — víc než přibližně 1 kg za týden,
- **nevolnost a zvracení nově ve druhé polovině těhotenství**,
- **dušnost, tlak na hrudi**,
- **výrazně snížené močení**,
- **výrazné snížení pohybů plodu**.

**Při kterémkoli z těchto příznaků volejte porodnici nebo svého lékaře okamžitě, bez ohledu na denní dobu.** Nečekejte na plánovanou kontrolu. Nepište do diskuzní skupiny. Volejte.

## Proč se tlak měří při každé kontrole

Preeklampsie je zpočátku **němá**. Žena se cítí dobře a jediné, co se změnilo, je číslo na tonometru a bílkovina v moči. Právě proto se při každé návštěvě měří tlak a testuje moč — ne kvůli byrokracii.

Hodnoty, které jsou důvodem ke kontaktu s lékařem:

- **systolický tlak 140 a víc**, nebo **diastolický 90 a víc**, naměřeno opakovaně v klidu,
- **systolický 160 a víc** nebo **diastolický 110 a víc** je akutní stav — volejte hned.

Pokud si měříte tlak doma, měřte **vsedě, po pěti minutách klidu, s paží podepřenou v úrovni srdce**, a používejte manžetu odpovídající velikosti. Zapisujte hodnoty i čas.

## Kdo je ve zvýšeném riziku

Riziko zvyšují mimo jiné: **první těhotenství, vyšší věk, vícečetné těhotenství, preeklampsie v předchozím těhotenství nebo v rodině, chronická hypertenze, onemocnění ledvin, diabetes, autoimunitní onemocnění, vyšší BMI, těhotenství po darování oocytu.**

U žen ve zvýšeném riziku se dnes běžně podává **nízkodávkovaný aspirin**, zahájený ideálně před 16. týdnem a užívaný obvykle večer. **Indikaci i dávku určuje výhradně lékař** — nikdy si aspirin sama nenasazujte ani nevysazujte.

Doplňkově se sleduje **příjem vápníku** a doporučuje se pravidelná kontrola tlaku. Ani jedno preeklampsii nevyloučí, obojí riziko snižuje.

## Co se děje, když se preeklampsie potvrdí

Postup vždy určuje lékař a závisí na týdnu těhotenství, hodnotách a stavu plodu. Obvykle zahrnuje:

- **hospitalizaci** nebo velmi časté ambulantní kontroly,
- **léky na snížení krevního tlaku**,
- **odběry krve** (jaterní testy, krevní destičky, kreatinin, poměr sFlt-1/PlGF),
- **sledování plodu** — ultrazvuk, doppler, kardiotokografie,
- **kortikoidy na podporu zralosti plic plodu**, pokud hrozí porod před 34. týdnem,
- **naplánování porodu** — jediné definitivní řešení preeklampsie je porod, a načasování je vždy kompromis mezi zdravím matky a zralostí dítěte.

## HELLP syndrom

Těžká varianta s postižením jater a krevních destiček. Typicky se projeví **bolestí v pravém podžebří nebo nadbřišku, nevolností, zvracením a celkovým pocitem, že je něco hodně špatně**. Tlak přitom nemusí být dramaticky vysoký. **Je to akutní stav — okamžitě do porodnice.**

## Po porodu

Preeklampsie může vzniknout nebo se zhoršit **až po porodu**, nejčastěji v prvním týdnu šestinedělí. Varovné příznaky platí i tehdy: silná bolest hlavy, poruchy vidění, dušnost, vysoký tlak. **Nepodceňujte je jen proto, že už jste porodila.**

> Tento text nenahrazuje lékařskou péči a neslouží k sebediagnostice. Při podezření na preeklampsii vždy okamžitě kontaktujte porodnici nebo svého lékaře.`,
      minutes: 9,
      phases: ['pregnancy', 'high_risk_pregnancy', 'hospitalization'],
      gestWeeks: [16, 40],
      topics: ['rizikove', 'tehotenstvi', 'zdravi_ditete'],
      modifiers: ['preeclampsia', 'high_risk'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'ISUOG — doporučené postupy pro ultrazvuk v porodnictví',
        'Světová zdravotnická organizace — doporučení pro prenatální péči',
      ],
      publishedOn: '2025-11-27',
      boost: 1,
    },
    {
      id: 'teh-zkracujici-se-cipek',
      kind: 'article',
      title: 'Zkracující se děložní hrdlo: co to znamená a co se s tím dělá',
      excerpt:
        'Věta „máte krátký čípek“ dokáže vzít půdu pod nohama — přitom je to nález, který se dá sledovat a řešit.',
      body: `## Co se měří

Délka děložního hrdla (cervikometrie) se měří **vaginální ultrazvukovou sondou**. Břišní ultrazvuk je pro tohle měření nepřesný. Vyšetření nebolí a trvá pár minut.

Nejčastěji se měří **kolem 18.–24. týdne**, u žen se zvýšeným rizikem opakovaně a dřív.

Orientačně:

- **délka nad 25 mm** ve druhém trimestru se považuje za normální nález,
- **25 mm a méně** je nález, který vede k dalšímu sledování a zvážení léčby,
- **výrazné zkrácení pod 15 mm**, nálevkovité rozšíření vnitřní branky (funneling) nebo dynamické změny při vyšetření znamenají vyšší riziko.

Hranice se liší podle týdne, podle toho, zda čekáte jedno dítě nebo dvojčata, a podle vaší anamnézy. **Číslo samo o sobě není diagnóza.**

## Proč se to děje

Zkracování hrdla může souviset s:

- **předchozím předčasným porodem nebo pozdním potratem**,
- **vícečetným těhotenstvím** — děloha je víc napjatá,
- **výkony na děložním hrdle** (konizace, opakované dilatace),
- **vrozenými odchylkami dělohy**,
- **zánětem** v pochvě nebo v děložní dutině,
- **nadměrným množstvím plodové vody**,
- a často **bez zjistitelné příčiny**.

Není to důsledek toho, že jste nosila tašky nebo chodila do práce.

## Co se s tím dělá

Postupy se kombinují podle situace a vždy je určuje lékař:

**1. Vaginální progesteron.** Nejčastější první krok při krátkém hrdle. Podává se obvykle večer, do doby stanovené lékařem. Má doloženou schopnost snižovat riziko předčasného porodu.

**2. Cerkláž.** Chirurgické stažení hrdla stehem. Indikuje se podle anamnézy, podle nálezu na ultrazvuku, nebo akutně. Podrobněji o ní píšeme v samostatném článku.

**3. Pesar.** Silikonový kroužek nasazený kolem hrdla, který mění úhel a odlehčuje. Nasazuje se ambulantně, bez anestezie. Používá se na některých pracovištích, důkazy o jeho účinnosti jsou smíšené.

**4. Častější kontroly.** Někdy je hlavním opatřením prostě to, že se hrdlo měří každý týden nebo dva.

**5. Kortikoidy** na podporu zralosti plic plodu, pokud hrozí porod před 34. týdnem.

## Klidový režim — co dnes platí

Přísný klid na lůžku se dnes **rutinně nedoporučuje**, protože se neprokázalo, že by předčasnému porodu bránil, a přitom má nezanedbatelné nežádoucí účinky: úbytek svalové hmoty, riziko trombózy, zhoršení nálady, ztráta kondice.

To neznamená, že vám lékař nemůže omezení doporučit — v konkrétní situaci může být namístě. Ptejte se ale konkrétně: **co přesně smím, co nesmím, na jak dlouho a proč.** Obecné „ležte" není pokyn, se kterým se dá žít.

## Co si ohlídat sama

- **Znejte svá čísla.** Zapisujte si naměřenou délku a datum. Trend je důležitější než jedno měření.
- **Ptejte se na příští kontrolu**, kdy a kde.
- **Vyřešte zánět.** Pokud máte výtok, svědění nebo pálení, řekněte to — infekce je léčitelný faktor.
- **Vědět, kam jet.** Zjistěte si, která porodnice ve vašem okolí má **perinatologické centrum** (péči o nejmenší nedonošené děti). Při hrozícím předčasném porodu se převáží těhotná, ne novorozenec.
- **Mějte sbalenou tašku** dřív, než byste čekala. Od 24. týdne je to rozumné.

## Kdy volat — okamžitě

- **pravidelné stahy** nebo tvrdnutí břicha častěji než 4× za hodinu,
- **tlak dolů**, pocit, jako by něco tlačilo do konečníku,
- **odtok plodové vody** nebo náhle zvýšený vodnatý výtok,
- **krvácení** jakéhokoli rozsahu,
- **bolest v křížích**, která přichází a odchází v pravidelném rytmu,
- **horečka nad 38 °C**, zapáchající výtok,
- **výrazné snížení pohybů plodu**.

> Tento text slouží k porozumění nálezu, ne k jeho hodnocení. O léčbě i o režimových opatřeních rozhoduje výhradně váš lékař.`,
      minutes: 8,
      phases: ['pregnancy', 'high_risk_pregnancy', 'hospitalization'],
      gestWeeks: [15, 34],
      topics: ['rizikove', 'tehotenstvi', 'nedonosenost'],
      modifiers: ['cervical_insufficiency', 'high_risk'],
      level: 'essential',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'ISUOG — doporučené postupy pro ultrazvuk v porodnictví',
      ],
      publishedOn: '2025-12-04',
      boost: 0.9,
    },
    {
      id: 'teh-cerklaz',
      kind: 'article',
      title: 'Cerkláž: steh, který drží hrdlo zavřené',
      excerpt:
        'Malý zákrok s velkým významem — a spousta otázek, na které se v ambulanci nedostane čas.',
      body: `## Co to je

Cerkláž je **chirurgické stažení děložního hrdla stehem**, který má zabránit jeho předčasnému otevírání. Provádí se v celkové nebo svodné anestezii, obvykle vaginálním přístupem, a samotný výkon trvá zpravidla kolem 20–30 minut.

## Tři situace, ve kterých se indikuje

**1. Cerkláž z anamnézy (elektivní).** Plánuje se předem, obvykle mezi **12. a 14. týdnem**, u žen s opakovanými pozdními potraty nebo předčasnými porody typickými pro insuficienci hrdla.

**2. Cerkláž podle ultrazvuku.** Nabízí se, když se u ženy s rizikovou anamnézou při sledování **zkrátí hrdlo** pod určitou hranici, typicky do 24. týdne.

**3. Záchranná (akutní) cerkláž.** Provádí se, když je hrdlo už otevřené a případně se v něm vyklenuje plodový vak. Je technicky náročnější a její úspěšnost je nižší, ale v řadě případů získá týdny navíc.

O tom, která varianta je pro vás vhodná — a jestli vůbec — rozhoduje lékař podle vaší konkrétní historie a nálezu.

## Jak to probíhá

1. **Předoperační vyšetření** — odběry, kultivace z pochvy, ultrazvuk plodu.
2. **Léčba případného zánětu** předem, pokud se najde.
3. **Anestezie**, nejčastěji svodná (epidurální nebo spinální).
4. **Naložení stehu** kolem hrdla — nejběžnější technikou je McDonaldova cerkláž, méně často Shirodkarova.
5. **Kontrola srdeční akce plodu.**
6. **Sledování** obvykle jeden až několik dní, podle pracoviště.

Po výkonu bývá běžné **mírné špinění, křeče a zvýšený výtok** po dobu několika dní.

## Co potom

- **Tlumení stahů** — někdy se krátkodobě podávají léky tlumící děložní činnost.
- **Progesteron** může být podáván souběžně, pokud tak lékař rozhodne.
- **Pohlavní styk** bývá po určitou dobu nebo do konce těhotenství nedoporučen; ptejte se konkrétně.
- **Kontroly** hrdla a stavu plodu častěji než obvykle.
- **Vyjmutí stehu** se plánuje typicky **kolem 36.–37. týdne**, ambulantně, obvykle bez anestezie. Bývá to otázka minut.

**Pokud začne porod dřív, steh se odstraňuje akutně** — proto musíte při jakýchkoli známkách porodu jet do nemocnice a hned na příjmu říct, že máte cerkláž. Napište si to i do těhotenské průkazky viditelně na první stranu.

## Rizika, o kterých se mluví méně

Jako každý výkon má cerkláž rizika: **infekce, krvácení, odtok plodové vody, poranění hrdla, vzácně vyvolání kontrakcí**. U některých žen naopak steh riziko nesnižuje a zbytečně přidává komplikace — proto se neprovádí plošně.

To, že vám cerkláž nenabídli, neznamená, že se o vás nikdo nestará. Znamená to, že ve vaší situaci pravděpodobně převažují jiné postupy.

## Otázky, které stojí za to položit

- **Proč právě u mě?** Z anamnézy, podle ultrazvuku, nebo akutně?
- **Jaká technika a jaký materiál stehu?**
- **Co budu smět dělat po výkonu?** Konkrétně: práce, chůze, schody, cestování, sex.
- **Kdy se steh vyjímá a kdo to udělá?**
- **Kam volám, když začnu mít stahy?**
- **Mění cerkláž způsob porodu?** (Sama o sobě obvykle ne — přirozený porod po vyjmutí stehu je běžný.)

## Jak to zvládnout psychicky

Cerkláž je obvykle nabídnuta ženám, které už něco ztratily. To znamená, že do zákroku jdete s historií, kterou ostatní pacientky nemají. Je v pořádku říct anesteziologovi i porodní asistentce: **„Prošla jsem si ztrátou, potřebuju vědět, co se děje."** Většina týmů na to reaguje dobře, jen musí vědět.

## Kdy volat lékaře — okamžitě

- **odtok plodové vody** nebo náhlý vodnatý výtok,
- **krvácení** silnější než lehké špinění,
- **pravidelné stahy nebo tlak dolů**,
- **horečka nad 38 °C**, zimnice, zapáchající výtok,
- **silná bolest** v podbřišku nebo v zádech,
- **výrazné snížení pohybů plodu**.

> Text popisuje výkon obecně. Indikaci, provedení i následný režim určuje výhradně váš ošetřující lékař; tento článek nenahrazuje jeho pokyny.`,
      minutes: 8,
      phases: ['pregnancy', 'high_risk_pregnancy', 'hospitalization'],
      gestWeeks: [11, 37],
      topics: ['rizikove', 'tehotenstvi', 'nedonosenost'],
      modifiers: ['cervical_insufficiency', 'high_risk'],
      level: 'deep',
      hero: 'blush',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-12-11',
      boost: 0.65,
    },
    {
      id: 'teh-kontrakce-vs-braxton-hicks',
      kind: 'article',
      title: 'Poslíčky, nebo porod? Jak rozeznat Braxton-Hicks od pravých kontrakcí',
      excerpt:
        'Břicho ztvrdne a vy nevíte, jestli to je nic, nebo všechno — tady je rozdíl popsaný tak, aby se podle něj dalo rozhodnout ve tři ráno.',
      body: `## Braxton-Hicksovy stahy

Braxton-Hicksovy kontrakce, lidově poslíčky, jsou **nepravidelné cvičné stahy dělohy**. Objevují se u řady žen už od druhého trimestru a jsou v pozdějším těhotenství naprosto běžné.

Typické znaky:

- **nepravidelné** — nemají rytmus, nedají se odpočítat,
- **nezesilují** a neprodlužují se,
- **nebolí**, nebo jen mírně tlačí,
- **ustoupí při změně činnosti** — po napití, po sprše, po lehnutí nebo naopak po procházce,
- **soustředí se do přední části břicha**,
- břicho ztvrdne a zase povolí.

Bývají častější **po fyzické námaze, při plném močovém měchýři, při dehydrataci, po sexu a večer**.

## Pravé kontrakce

Pravé porodní kontrakce mají opačné vlastnosti:

- **pravidelné** a postupně častější,
- **zesilují** v intenzitě a prodlužují se v trvání,
- **nepolevují** při změně polohy ani po odpočinku,
- **bolí**, často **vyzařují do křížů** a šíří se zepředu dozadu nebo naopak,
- doprovází je **tlak dolů**, někdy odchod hlenové zátky nebo krvavého hlenu.

## Pravidlo, které si zapamatujte

Když si nejste jistá, **měřte**. Zapisujte si:

1. **čas začátku** každého stahu,
2. **jak dlouho trval**,
3. **kolik času uplynulo od začátku jednoho ke začátku dalšího**.

Sledujte hodinu. Pokud se stahy **v čase nezkracují ani nesilní**, jde spíš o Braxton-Hicks. Pokud přicházejí pravidelně, jsou stále blíž a bolí víc, jedete do porodnice.

Než začnete měřit, zkuste: **vypít dvě velké sklenice vody, jít na toaletu, lehnout si na levý bok** a dát tomu dvacet minut. Dehydratace a plný měchýř dráždí dělohu víc, než by se čekalo.

## Kdy je to vždycky důvod jet — bez ohledu na počítání

**Před 37. týdnem** platí přísnější pravidla, protože jde o možný předčasný porod:

- **4 a více stahů za hodinu**, i když nebolí,
- **tlak dolů**, pocit těžkosti v pánvi,
- **bolest v křížích v rytmu**,
- **odtok plodové vody nebo zvýšený vodnatý výtok**,
- **krvácení**,
- **křeče připomínající menstruační**.

Nejsou to hysterie. Předčasný porod se dá často odložit — ale jen když se dorazí včas.

**Po 37. týdnu** je běžným doporučením jet při **pravidelných kontrakcích po 5 minutách trvajících kolem 60 vteřin po dobu 1 hodiny** (pravidlo 5–1–1). U žen s cerkláží, po císařském řezu, s dvojčaty nebo s rizikovým těhotenstvím ale platí **individuální pokyn, který vám dá lékař** — a ten má přednost.

## Kdy to nejsou kontrakce, ale něco jiného

- **Ostrá bolest po stranách břicha** při pohybu bývá napínání kulatých vazů.
- **Tvrdý pruh nebo bolest v jednom místě** může být natažené svalstvo.
- **Pálivá bolest v podbřišku s nucením na močení** ukazuje spíš na infekci močových cest — ta ale sama může dráždit dělohu, proto ji nepodceňujte.
- **Trvalá, neustupující bolest břicha se ztvrdlou dělohou** je vždy důvod k okamžitému kontaktu s porodnicí.

## Praktická příprava

- **Uložte si číslo na porodnici** do telefonu pod jménem, které v panice najdete.
- **Mějte v mobilu aplikaci nebo jen poznámkový blok** na zapisování stahů.
- **Zjistěte si předem, kam se v porodnici jede v noci** a kde se parkuje.
- **Nebojte se falešného poplachu.** Personál porodnice je zvyklý a je lepší přijet zbytečně než pozdě. Nikdo vás nebude peskovat.

## Kdy volat lékaře

- pravidelné a sílící stahy před 37. týdnem,
- odtok plodové vody kdykoli,
- krvácení,
- trvalá bolest břicha, tvrdá neuvolňující se děloha,
- horečka nad 38 °C,
- výrazné snížení pohybů plodu,
- silná bolest hlavy, poruchy vidění, náhlé otoky obličeje.

> Tento text pomáhá s orientací, nenahrazuje ale posouzení v porodnici. Když váháte, volejte — od toho tam jsou.`,
      minutes: 8,
      phases: ['pregnancy', 'high_risk_pregnancy'],
      gestWeeks: [20, 40],
      topics: ['tehotenstvi', 'porod', 'rizikove'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-12-18',
      boost: 0.9,
    },
    {
      id: 'teh-pohyby-plodu',
      kind: 'article',
      title: 'Pohyby plodu: jak je sledovat, aniž byste zešílela',
      excerpt:
        'Pohyby jsou nejlevnější a nejcitlivější měřítko toho, jak se dítěti daří — a existuje způsob, jak je sledovat bez nepřetržité paniky.',
      body: `## Kdy je začnete cítit

První pohyby vnímá většina žen mezi **18. a 22. týdnem**, u druhého a dalšího těhotenství často dřív, kolem 16.–18. týdne. Na začátku připomínají bublinky, motýly nebo pohyb střev a je těžké je odlišit od trávení.

**Uložení placenty na přední stěně** dělohy pohyby tlumí — pokud ji tam máte, budete je cítit později a slaběji. Není to známka ničeho špatného.

## Co je normální

Pohyby mají **svůj vlastní rytmus**, který se u každého dítěte liší. Dítě má fáze spánku (obvykle 20–40 minut, výjimečně až 90) a fáze aktivity. Většina žen si kolem **28. týdne** začne všímat opakujícího se denního vzorce — typicky večer a po jídle je pohybů víc.

**Klíčové pravidlo: sledujte SVŮJ vzorec, ne cizí čísla.** Poučka o „deseti kopancích za dvě hodiny" je zjednodušení, které v moderních doporučeních ustupuje sledování změny oproti vlastní normě.

## Co je varovný signál

**Snížení nebo změna pohybů oproti tomu, co je u vás obvyklé.** To je celé. Ne konkrétní počet, ale změna.

Když máte pocit, že se dítě hýbe méně:

1. **Lehněte si na levý bok** do klidné místnosti.
2. **Napijte se něčeho studeného**, případně něco snězte.
3. **Soustřeďte se výhradně na pohyby** — ne u televize, ne u telefonu.
4. **Dejte tomu dvě hodiny.**

Pokud i po tomto postupu cítíte pohybů méně než obvykle, **volejte porodnici a jeďte na kontrolu**.

## Věci, které NEDĚLEJTE

- **Nečekejte do rána.** Nejčastější věta, kterou ženy po nepříznivém průběhu říkají, je „nechtěla jsem obtěžovat v noci". Porodnice jede nonstop a tohle je přesně to, kvůli čemu.
- **Nekupujte domácí doppler.** Zachycené ozvy vás uklidní, i když může být něco špatně — a to je nebezpečné. Odborné společnosti domácí dopplery pro tento účel nedoporučují.
- **Nesnažte se dítě probudit ledovou vodou na břicho, bušením ani hlasitou hudbou.** Když se pohyby změnily, patří to na kontrolu, ne na domácí experimenty.
- **Nespoléhejte na to, že to bylo minule taky tak a nic nebylo.** Každý případ se posuzuje zvlášť.

Ženy, které přijedou opakovaně a nic se nenajde, **jednají správně**. Nikdo vás nebude mít za hysterku. Personál porodnic si přeje, abyste přijela.

## Co se na kontrole děje

Obvykle:

- **kardiotokografie (CTG)** — monitorování srdeční frekvence plodu a děložní činnosti, trvá zhruba 20–40 minut,
- **ultrazvuk** — pohyby, dýchací pohyby, svalový tonus, množství plodové vody,
- **dopplerovské měření průtoků**, pokud je indikováno,
- **měření tlaku a kontrola moči** u vás.

Většinou vás pošlou za hodinu domů uklidněnou. To je dobrý výsledek, ne ztráta času.

## Pohyby v posledních týdnech

Rozšířený mýtus říká, že se dítě před porodem hýbe méně, protože nemá místo. **Charakter pohybů se mění** — místo kopanců cítíte spíš převalování, protahování a tlaky. **Ale celkové množství pohybů by klesat nemělo.** Snížení pohybů ve 38. týdnu je stejný důvod k cestě do porodnice jako ve 30. týdnu.

## U dvojčat

Rozeznat, které dítě se hýbe, je téměř nemožné a je zbytečné se o to snažit. Sledujte **celkovou aktivitu** a její změnu. U vícečetného těhotenství bývají kontroly častější — využijte je a ptejte se.

## Kdy volat lékaře — okamžitě

- **méně pohybů, než je u vás obvyklé**, po dvouhodinovém soustředěném sledování,
- **žádné pohyby** — volejte hned, nečekejte dvě hodiny,
- **náhlá prudká série pohybů následovaná tichem**,
- odtok plodové vody, krvácení, silné kontrakce,
- horečka nad 38 °C,
- silná bolest hlavy, poruchy vidění, náhlé otoky.

> Text má informativní charakter. Změna pohybů plodu vždy patří k posouzení v porodnici, ne k domácímu vyhodnocení podle článku.`,
      minutes: 8,
      phases: ['pregnancy', 'high_risk_pregnancy', 'hospitalization'],
      gestWeeks: [18, 40],
      topics: ['tehotenstvi', 'zdravi_ditete', 'rizikove'],
      level: 'essential',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'Světová zdravotnická organizace — doporučení pro prenatální péči',
      ],
      publishedOn: '2026-01-08',
      boost: 0.95,
    },
    {
      id: 'teh-dvojcata',
      kind: 'article',
      title: 'Dvojčata: co se mění, když jsou tam dvě',
      excerpt:
        'Dvojčata po IVF nejsou vzácnost — ale je to jiné těhotenství s jinými pravidly, a je lepší je znát od začátku.',
      body: `## První otázka: jaký typ dvojčat

Tohle je nejdůležitější informace celého vícečetného těhotenství a **určuje se nejpřesněji v prvním trimestru**, ideálně mezi 11. a 14. týdnem. Později se určuje hůř.

- **Dichoriální (dva choria, dvě placenty)** — každé dítě má vlastní placentu a vlastní vak. Nejnižší riziko.
- **Monochoriální biamniální** — společná placenta, dva vaky. Vyžaduje častější sledování kvůli riziku nerovnoměrného sdílení oběhu (TTTS).
- **Monochoriální monoamniální** — společná placenta i vak. Vzácné, nejvyšší riziko, vždy vysoce specializovaná péče.

Po IVF s transferem dvou embryí vznikají obvykle **dichoriální** dvojčata. Monochoriální mohou vzniknout i po transferu jediného embrya, když se rozdělí.

**Zeptejte se přímo: „Jsou moje dvojčata monochoriální, nebo dichoriální?"** Pokud vám na to nikdo neodpověděl, ptejte se znovu.

## Jak vypadá péče

- **Častější kontroly.** U dichoriálních dvojčat obvykle **každé 4 týdny** ultrazvuk, u monochoriálních **každé 2 týdny** už od 16. týdne.
- **Sledování růstu obou plodů** a rozdílu mezi nimi.
- **Měření délky děložního hrdla** — riziko předčasného porodu je vyšší.
- **Častější kontroly tlaku a moči** — riziko preeklampsie je výrazně vyšší.
- **Dřívější a někdy opakovaný oGTT.**
- **Kontroly krevního obrazu** — anémie je u dvojčat běžnější, potřeba železa je vyšší.
- **Péče v pracovišti s odpovídajícím zázemím**, u monochoriálních v perinatologickém centru.

## Co je jinak u vás

- **Nevolnosti bývají silnější** a trvají déle, protože hCG je vyšší.
- **Únava je jiná kategorie.** Nesrovnávejte se s kamarádkou s jedním dítětem.
- **Břicho roste dřív** a od druhého trimestru výrazně rychleji.
- **Dušnost, pálení žáhy, bolesti zad a pánve** přicházejí dřív a jsou intenzivnější.
- **Potřeba bílkovin, železa, kyseliny listové a celkové energie je vyšší.** Konkrétní doporučení vám dá lékař; obecné rady z běžných těhotenských příruček nemusí stačit.
- **Otoky a křečové žíly** jsou častější.
- **Spánek** je od druhé poloviny těhotenství sport. Těhotenský polštář přestává být luxus.

## Předčasný porod

**Většina dvojčat se rodí dřív než v termínu.** Průměrná délka těhotenství u dvojčat je kratší a část dětí se rodí před 37. týdnem. To není selhání a nedá se tomu vůlí zabránit.

Co dává smysl:

- **Mít sbalenou tašku od 26.–28. týdne.**
- **Znát cestu do porodnice** a vědět, kde je nejbližší perinatologické centrum.
- **Prostudovat si informace o nedonošenosti a NICU předem**, dřív, než to bude akutní. Není to přivolávání problémů, je to příprava.
- **Vědět, co jsou kortikoidy na zralost plic** a proč se podávají.

## Porod

Způsob porodu závisí na typu dvojčat, poloze prvního plodu, týdnu a dalších faktorech. **Vaginální porod dvojčat je při vhodných podmínkách možný**, ale rozhodnutí patří porodníkovi a vám společně. Monoamniální dvojčata se rodí císařským řezem.

Ptejte se předem: **Za jakých podmínek je u mě možný vaginální porod? Kdo bude u porodu? Kolik dětských lékařů bude na sále?**

## Psychická stránka

Zpráva o dvojčatech po letech neplodnosti vyvolává směs euforie a hrůzy. **Obojí je legitimní.** Strach z toho, jak to zvládnete, není nevděk vůči dětem, které jste si tak přála.

Praktické: začněte brzy řešit **pomoc na první měsíce**. Ne až v šestinedělí. Konkrétní jména, konkrétní dny, konkrétní úkoly.

## Kdy volat lékaře

- pravidelné stahy nebo tlak dolů před 37. týdnem,
- odtok plodové vody, krvácení,
- **náhlý rychlý růst břicha nebo prudké dušení** (může jít o komplikaci monochoriálního těhotenství),
- silná bolest hlavy, poruchy vidění, náhlé otoky obličeje a rukou,
- snížení pohybů oproti obvyklému,
- horečka nad 38 °C.

> Text je obecný. Vedení vícečetného těhotenství je vždy individuální a řídí se pokyny vašeho lékaře a perinatologického centra.`,
      minutes: 9,
      phases: ['pregnancy', 'high_risk_pregnancy', 'early_pregnancy'],
      gestWeeks: [8, 37],
      topics: ['tehotenstvi', 'rizikove', 'nedonosenost'],
      modifiers: ['twins'],
      level: 'deep',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ISUOG — doporučené postupy pro ultrazvuk v porodnictví',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2026-01-15',
      boost: 0.8,
    },
    {
      id: 'teh-rizikove-tehotenstvi-co-to-znamena',
      kind: 'article',
      title: 'Rizikové těhotenství: co to slovo doopravdy znamená',
      excerpt:
        'Nálepka „rizikové“ zní jako rozsudek, ale ve skutečnosti je to organizační kategorie — a stojí za to vědět, co konkrétně mění.',
      body: `## Co znamená ta nálepka

„Rizikové těhotenství" není diagnóza. Je to **kategorie péče**, která říká: u téhle ženy sledujeme něco navíc, častěji nebo pečlivěji. Zahrnuje velmi široké spektrum situací — od ženy, která má korigovanou funkci štítné žlázy, po ženu hospitalizovanou pro preeklampsii.

**Nálepka sama o sobě neříká nic o tom, jak vaše těhotenství dopadne.** Většina rizikových těhotenství končí zdravým dítětem.

## Co bývá důvodem

Nejčastější důvody zařazení:

- **věk** nad určitou hranicí,
- **způsob početí** — po asistované reprodukci se často automaticky sleduje pečlivěji,
- **vícečetné těhotenství**,
- **chronická onemocnění** — hypertenze, diabetes, onemocnění štítné žlázy, autoimunitní choroby, trombofilie, onemocnění ledvin,
- **anamnéza** — předchozí předčasný porod, preeklampsie, ztráta těhotenství, císařský řez,
- **nálezy v tomto těhotenství** — krátké hrdlo, porucha růstu plodu, nízko uložená placenta, gestační diabetes, nadměrné či snížené množství plodové vody,
- **odchylky na ultrazvuku** vyžadující sledování.

## Co se prakticky mění

1. **Častější kontroly.** Místo jednou za 4 týdny třeba každé 2 týdny nebo týdně.
2. **Víc ultrazvuků** — sledování růstu, dopplerovská měření průtoků.
3. **CTG** od určitého týdne, někdy opakovaně.
4. **Specializovaná ambulance** — perinatologické centrum, ambulance pro rizikové těhotenství, případně souběžná péče internisty, diabetologa nebo hematologa.
5. **Doporučení ohledně místa porodu.** U některých situací je jasně určeno, ve které porodnici se má rodit.
6. **Někdy medikace** — progesteron, aspirin, nízkomolekulární heparin, léky na tlak. Vše vždy podle rozhodnutí lékaře.
7. **Někdy pracovní neschopnost** nebo úprava pracovních podmínek.

## Jak s tím žít

**Ptejte se konkrétně.** Slovo „rizikové" je pro vás nepoužitelné, dokud nevíte:

- **Co konkrétně u mě sledujete?**
- **Jaké číslo nebo nález by znamenal změnu postupu?**
- **Co smím a co nesmím?** Cvičení, sex, práce, cestování, zvedání dítěte, které už mám.
- **Kdy a kam volám mimo kontroly?**
- **Ve které porodnici mám rodit a kdy se mám registrovat?**

Zapisujte si odpovědi. Ideálně do jednoho sešitu nebo poznámky v telefonu, kterou máte vždycky u sebe.

## Co vám k tomu bude říkat okolí

Zaručeně uslyšíte: „moje sestra taky měla rizikové a normálně chodila do práce", „za nás se to neřešilo", „hlavně se neboj, stres je nejhorší". Tyhle věty nemají žádnou informační hodnotu a nemusíte na ně reagovat.

Můžete zkusit: **„Mám svého lékaře a řídím se jím. Pomůže mi, když se místo rad zeptáš, jak mi je."**

## Práce a papíry

- **Těhotenskou průkazku noste vždy u sebe**, i na dovolené a v práci.
- **Neschopenku vystavuje** gynekolog nebo praktický lékař podle důvodu; při komplikacích v těhotenství typicky gynekolog.
- **Zaměstnavatel vás nesmí nechat vykonávat práci zakázanou těhotným** (noční směny na vyžádání, práce s určitými látkami, těžká fyzická práce). Máte právo na převedení na jinou práci.
- **Podrobnosti o dávkách** (vyrovnávací příspěvek v těhotenství a mateřství, peněžitá pomoc v mateřství) řeší správa sociálního zabezpečení. Zjistěte si podmínky včas, ne až v 30. týdnu.

## Psychická stránka

Rizikové těhotenství znamená trvalý pocit, že se koukáte na tenký led. Ženy po IVF ho snášejí hůř, protože už jednou zjistily, že se špatné věci dějí i jim.

Co pomáhá: **plán mezi kontrolami** (co dělám, když se lekne), **jeden důvěrník**, **konkrétní seznam varovných příznaků**, a **odborná psychologická podpora**, pokud vám úzkost bere spánek nebo fungování.

## Kdy volat lékaře

- krvácení, odtok plodové vody,
- pravidelné stahy před 37. týdnem, tlak dolů,
- silná bolest hlavy, poruchy vidění, náhlé otoky obličeje a rukou, bolest pod pravým žebrem,
- snížení pohybů plodu,
- horečka nad 38 °C,
- otok, bolest a zarudnutí jedné lýtkové oblasti, náhlá dušnost nebo bolest na hrudi.

> Text popisuje obecnou organizaci péče. Konkrétní obsah pojmu „rizikové těhotenství" ve vašem případě vám sdělí váš lékař.`,
      minutes: 8,
      phases: ['high_risk_pregnancy', 'pregnancy'],
      topics: ['rizikove', 'tehotenstvi', 'psychika'],
      modifiers: ['high_risk'],
      level: 'essential',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-01-22',
      boost: 0.9,
    },
    {
      id: 'teh-klidovy-rezim',
      kind: 'article',
      title: 'Klidový režim: co dnes opravdu platí',
      excerpt:
        'Přísné ležení bylo dlouho standardem a dnes se od něj ustupuje — vyplatí se vědět proč a co si místo toho vyjednat.',
      body: `## Co se změnilo

Ještě před nedávnem se ženám s hrozícím předčasným porodem nebo krvácením plošně doporučovalo **přísné ležení**. Dnes se od tohoto přístupu odborné společnosti odklánějí, protože se neprokázalo, že by komplikacím bránil — a zároveň se ukázalo, že **není bez rizika**.

Rizika dlouhodobé imobilizace:

- **žilní trombóza** a plicní embolie (těhotenství samo o sobě zvyšuje srážlivost),
- **úbytek svalové hmoty a kostní denzity**,
- **zhoršená glukózová tolerance**,
- **zácpa**,
- **úzkost, deprese, ztráta soběstačnosti**,
- **horší kondice pro porod a rekonvalescenci**.

To neznamená, že omezení nemá nikdy smysl. Znamená to, že se **předepisuje cíleně a konkrétně**, ne paušálně.

## Co si vyjednat místo obecného „ležte"

Když vám lékař doporučí klid, ptejte se konkrétně:

1. **Smím chodit po bytě?** Kolikrát denně? Po schodech?
2. **Smím vařit, sprchovat se, nakoupit?**
3. **Smím jít ven na procházku? Jak dlouhou?**
4. **Smím řídit auto?**
5. **Smím mít pohlavní styk?**
6. **Můžu zvedat starší dítě?** (Tohle je nejčastější zapomenutá otázka.)
7. **Na jak dlouho to platí a co ho ukončí?**
8. **Co konkrétně mám udělat, když ucítím stahy?**

Odpovědi si zapište. Za týden si je nebudete pamatovat a budete se zbytečně bát všeho.

## Když je klid opravdu indikovaný

V některých situacích lékař omezení doporučí a má to svou logiku — například při aktivním krvácení, po akutní cerkláži nebo v konkrétním kritickém období. I tehdy ale platí:

- **Prevence trombózy.** Ptejte se na kompresní punčochy a na to, zda máte mít nízkomolekulární heparin. **O antikoagulaci rozhoduje výhradně lékař.**
- **Pohyb kotníky a lýtky** i vleže, každou hodinu ve dne. Kroužení, přitahování špiček, střídavé propínání.
- **Změna polohy** — nezůstávejte hodiny ve stejné pozici.
- **Hydratace a strava s vlákninou** kvůli zácpě.
- **Dechová cvičení** — pomáhají oběhu i nervovému systému.

## Jak přežít dny doma

**Struktura je důležitější než zábava.** Dny bez rozvrhu se rozpadnou a čas se táhne.

Co funguje:

- **Pevný rytmus dne.** Vstávání, hygiena, oblečení (ne pyžamo celý den), jídla ve stejný čas.
- **Rozdělte den na bloky** po 90 minutách a každému dejte obsah — i kdyby to byl podcast nebo pletení.
- **Jedna produktivní věc denně.** Vyřídit e-mail, zavolat na úřad, něco vybrat. Pocit užitečnosti drží náladu.
- **Denní světlo.** Sedněte si k oknu, otevřete ho, ať slyšíte ven.
- **Sociální kontakt každý den.** Video hovor, ne jen psané zprávy.
- **Omezte scrollování.** Nekonečné čtení o komplikacích je návykové a zhoršuje to.
- **Fyzioterapie na dálku** — řada fyzioterapeutek dnes umí sestavit bezpečný program vleže. Nechte si ho schválit lékařem.

## Vztah a domácnost

Klidový režim rozhodí domácnost víc než cokoli jiného. Konkrétně:

- **Napište seznam toho, co jste dělala vy**, a rozdělte to. Ne „pomoz mi", ale „ty děláš nákupy a praní".
- **Přijměte pomoc, i když je nepohodlná.** Když někdo nabídne uvařit, řekněte ano, i kdyby to vařil jinak.
- **Řekněte partnerovi, co potřebujete slyšet.** Většina partnerů chce pomoct a neví jak.
- **Placené služby** — donáška jídla, úklid — jsou v téhle fázi investice, ne rozmar.

## Kdy volat lékaře

- **otok, bolest, zarudnutí nebo teplo jedné dolní končetiny** — podezření na trombózu,
- **náhlá dušnost, bolest na hrudi, kašel s krví** — okamžitě záchranná služba,
- krvácení, odtok plodové vody,
- pravidelné stahy, tlak dolů,
- horečka nad 38 °C,
- snížení pohybů plodu,
- silná bolest hlavy, poruchy vidění, náhlé otoky obličeje.

> Text shrnuje obecný současný přístup. Vaše konkrétní režimová opatření určuje výhradně váš lékař a jeho pokyn má vždy přednost.`,
      minutes: 8,
      phases: ['high_risk_pregnancy', 'pregnancy', 'hospitalization'],
      topics: ['rizikove', 'sebepece', 'psychika'],
      modifiers: ['high_risk', 'cervical_insufficiency'],
      level: 'deep',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'Světová zdravotnická organizace — doporučení pro prenatální péči',
      ],
      publishedOn: '2026-01-29',
      boost: 0.8,
    },
    {
      id: 'teh-taska-do-nemocnice',
      kind: 'checklist',
      title: 'Taška do nemocnice na delší pobyt: co si vzít',
      excerpt:
        'Není to porodní taška — je to výbava na dny až týdny na oddělení rizikového těhotenství, a chce to jiné věci.',
      body: `## K čemu tenhle seznam je

Hospitalizace v těhotenství přichází často **bez varování**: přijedete na kontrolu a zůstanete. Tenhle seznam je proto stavěný tak, aby ho mohl **někdo jiný sbalit podle telefonu**, když vy už ležíte na oddělení.

Ideální je mít **malou tašku připravenou předem** (doklady, nabíječka, základní hygiena, dvě trika) a zbytek dobalit později.

## Jak to na oddělení chodí

Oddělení rizikového těhotenství má svůj rytmus: budíček brzy, vizita dopoledne, měření tlaku a CTG podle rozpisu, jídlo v pevných časech. Pokoje bývají dvou- až čtyřlůžkové, koupelna může být společná. **Vlastní věci a vlastní rytmus jsou to jediné, co si ponecháte** — proto na nich záleží víc, než by se zdálo.

Před sbalením zavolejte na oddělení a zeptejte se na: **možnost návštěv, wi-fi, ledničku, rychlovarnou konvici, možnost mít vlastní deku a polštář.** Pravidla se pracoviště od pracoviště liší.

## Praktická poznámka

Vezměte si věci, které **nevadí, když se ztratí nebo zničí**. Cennosti a šperky nechte doma. Peníze mějte v malé částce a v drobných na automat.

> Tento seznam je organizační pomůcka a nenahrazuje pokyny konkrétního pracoviště. Vždy se řiďte tím, co vám řekne oddělení.`,
      minutes: 6,
      phases: ['hospitalization', 'high_risk_pregnancy'],
      topics: ['rizikove', 'sebepece', 'klinika'],
      modifiers: ['high_risk'],
      level: 'essential',
      hero: 'sand',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-02-05',
      boost: 0.85,
      checklist: [
        {
          id: 'teh-hosp-doklady',
          text: 'Občanský průkaz, kartička pojišťovny, těhotenská průkazka',
          hint: 'Průkazku mějte v tašce vždycky, ne v kabelce, kterou si někdo odveze domů.',
          group: 'Dokumenty',
        },
        {
          id: 'teh-hosp-zpravy',
          text: 'Propouštěcí zpráva z reprodukční kliniky a výsledky vyšetření',
          hint: 'Personál ocení, když ví, jak těhotenství vzniklo a co jste užívala.',
          group: 'Dokumenty',
        },
        {
          id: 'teh-hosp-leky',
          text: 'Seznam všech léků, které užíváte, včetně dávek a časů',
          hint: 'Napište to na papír. Nespoléhejte na to, že si vzpomenete při příjmu.',
          group: 'Dokumenty',
        },
        {
          id: 'teh-hosp-kontakty',
          text: 'Papírový seznam telefonních čísel',
          hint: 'Pro případ, že se telefon vybije nebo rozbije.',
          group: 'Dokumenty',
          optional: true,
        },
        {
          id: 'teh-hosp-nabijecka',
          text: 'Nabíječka s dlouhým kabelem a powerbanka',
          hint: 'Zásuvka bývá daleko od postele. Kabel aspoň dva metry změní kvalitu vašeho života.',
          group: 'Technika',
        },
        {
          id: 'teh-hosp-sluchatka',
          text: 'Sluchátka, ideálně s potlačením hluku',
          hint: 'Na vícelůžkovém pokoji je to nejcennější věc v tašce.',
          group: 'Technika',
        },
        {
          id: 'teh-hosp-prodluzovacka',
          text: 'Malá prodlužovačka nebo rozdvojka',
          group: 'Technika',
          optional: true,
        },
        {
          id: 'teh-hosp-pyzamo',
          text: 'Dvě až tři pohodlná pyžama nebo noční košile, které se rozepínají',
          hint: 'Rozepínání zepředu usnadní CTG i vyšetření.',
          group: 'Oblečení',
        },
        {
          id: 'teh-hosp-zupan',
          text: 'Župan a pevné pantofle s protiskluzovou podrážkou',
          group: 'Oblečení',
        },
        {
          id: 'teh-hosp-spodni',
          text: 'Spodní prádlo na týden, bavlněné, o číslo větší',
          group: 'Oblečení',
        },
        {
          id: 'teh-hosp-podprsenka',
          text: 'Podprsenka bez kostic',
          group: 'Oblečení',
        },
        {
          id: 'teh-hosp-punchochy',
          text: 'Kompresní punčochy, pokud je máte doporučené',
          hint: 'Při delším ležení jsou důležitá prevence. Zeptejte se na ně, pokud vám je nikdo nenabídl.',
          group: 'Oblečení',
        },
        {
          id: 'teh-hosp-civilni',
          text: 'Jedno civilní oblečení na propuštění nebo na procházku po chodbě',
          group: 'Oblečení',
          optional: true,
        },
        {
          id: 'teh-hosp-hygiena',
          text: 'Kompletní hygiena: sprchový gel, šampon, kartáček, pasta, deodorant',
          group: 'Hygiena',
        },
        {
          id: 'teh-hosp-rucniky',
          text: 'Dva vlastní ručníky',
          hint: 'Nemocniční ručníky bývají malé a tvrdé.',
          group: 'Hygiena',
        },
        {
          id: 'teh-hosp-vlozky',
          text: 'Vložky, mokré ubrousky, papírové kapesníky',
          group: 'Hygiena',
        },
        {
          id: 'teh-hosp-krem',
          text: 'Krém na ruce a balzám na rty',
          hint: 'Suchý vzduch na oddělení je legendární.',
          group: 'Hygiena',
        },
        {
          id: 'teh-hosp-hrnek',
          text: 'Vlastní hrnek, lahev na vodu a lžička',
          group: 'Jídlo a pití',
        },
        {
          id: 'teh-hosp-svaciny',
          text: 'Trvanlivé svačiny: oříšky, sušenky, ovocné tyčinky, čaj',
          hint: 'Nemocniční večeře bývá brzy a do rána je daleko.',
          group: 'Jídlo a pití',
        },
        {
          id: 'teh-hosp-polstar',
          text: 'Vlastní malý polštář nebo těhotenský polštářek, pokud to oddělení dovolí',
          group: 'Pohodlí',
          optional: true,
        },
        {
          id: 'teh-hosp-deka',
          text: 'Vlastní tenká deka nebo šátek',
          group: 'Pohodlí',
          optional: true,
        },
        {
          id: 'teh-hosp-maska',
          text: 'Maska na spaní a špunty do uší',
          hint: 'Světlo na chodbě svítí celou noc.',
          group: 'Pohodlí',
        },
        {
          id: 'teh-hosp-zabava',
          text: 'Něco na dlouhé hodiny: kniha, křížovky, ruční práce, stažené filmy',
          hint: 'Stáhněte si obsah offline. Nemocniční wi-fi je loterie.',
          group: 'Pohodlí',
        },
        {
          id: 'teh-hosp-zapisnik',
          text: 'Zápisník a propiska',
          hint: 'Na otázky pro vizitu a na to, co vám kdo řekl. Vizita trvá dvě minuty a vy si po ní nic nepamatujete.',
          group: 'Pohodlí',
        },
        {
          id: 'teh-hosp-fotka',
          text: 'Jedna fotka nebo drobnost z domova',
          group: 'Pohodlí',
          optional: true,
        },
        {
          id: 'teh-hosp-drobne',
          text: 'Drobné mince na automat a malá hotovost',
          group: 'Pohodlí',
        },
      ],
    },
    {
      id: 'teh-jak-prezit-dny-v-nemocnici',
      kind: 'article',
      title: 'Jak přežít dny v nemocnici, když nevíte, kdy půjdete domů',
      excerpt:
        'Nejtěžší na hospitalizaci není nemoc, ale nekonečný čas bez rozvrhu a bez data konce — a s tím se dá pracovat.',
      body: `## Co vás nejvíc semele

Ne bolest. Ne vyšetření. **Neurčitost.** Když nevíte, jestli jdete domů zítra nebo za pět týdnů, přestane fungovat plánování a s ním i pocit vlastní kontroly. K tomu se přidá ztráta soukromí, cizí rytmus a to, že jste najednou „pacientka", ne dospělá žena s vlastním životem.

To, co cítíte, není přehnané. Je to reakce na reálnou ztrátu autonomie.

## Struktura je záchranné lano

Nemocniční den má vlastní rytmus, ale v tom rytmu jsou obrovské prázdné plochy. Naplňte je záměrně:

- **Vstávejte a oblékejte se.** I když nikam nejdete. Pyžamo celý den je nejrychlejší cesta k propadu nálady.
- **Rozdělte si den na bloky.** Ráno – dopoledne po vizitě – po obědě – odpoledne – večer. Každý blok má jednu věc.
- **Jedna věc denně navíc.** Zavolat na úřad, vybrat kočárek, napsat plán, přečíst kapitolu. Cokoli, co má konec.
- **Vyjděte z pokoje**, pokud smíte. Chodba se počítá.
- **Denní světlo a čerstvý vzduch** — okno, ne obrazovka.
- **Večerní rituál.** Stejný, každý den. Signalizuje tělu konec dne, i když se dny slévají.

## Vizita: dvě minuty, na kterých hodně záleží

Vizita je krátká a vy na ni většinou nejste připravená. Proto:

1. **Pište si otázky do zápisníku průběžně**, jak vás napadají.
2. **Nejdůležitější otázku položte první.**
3. **Zeptejte se na dnešní výsledek a na to, co by ho změnilo.**
4. **Zeptejte se, co se plánuje na zítřek.**
5. **Nechte si zopakovat, čemu nerozumíte.** Věta „Můžete mi to říct ještě jednou jednodušeji?" je naprosto legitimní.
6. **Poznamenejte si datum a to, co padlo.** Za týden si dny spletete.

Otázky, které mají největší hodnotu: **Co konkrétně sledujete? Jaký nález by znamenal, že jdu domů? Jaký nález by znamenal, že se bude něco dělat hned? Kdo mi to rozhodne a kdy?**

## Vaše místo

Postel je teď váš byt. Zabydlete se, i kdyby to mělo být na tři dny:

- **Nočník na věci**: nabíječka, voda, balzám na rty, papírové kapesníky, zápisník.
- **Sluchátka** vždycky po ruce.
- **Fotka nebo drobnost**, která není nemocniční.
- **Vlastní deka** nebo šátek, pokud to jde. Vlastní textilie mění pocit z prostoru překvapivě hodně.

## Lidé

- **Spolubydlící.** Někdy dostanete spřízněnou duši, jindy někoho, kdo mluví do telefonu ve dvě ráno. Sluchátka a laskavá přímost („můžeme mít po desáté ticho?") řeší většinu.
- **Návštěvy.** Domluvte si je na konkrétní dny a hodiny a řekněte lidem, co potřebujete přinést. Deset lidí náhodně vám vezme víc energie, než dá.
- **Partner.** Dejte mu konkrétní úkoly: co přivézt, co vyřídit, co zjistit. Neurčité „přijeď za mnou" je pro obě strany horší než jasný plán.
- **Personál.** Sestry vědí o chodu oddělení víc než kdokoli. Slušný a přímý dotaz vám zajistí víc informací než čekání, až si někdo vzpomene.

## Psychika

- **Pojmenujte, co cítíte.** Vztek, nuda, strach, vina vůči staršímu dítěti — všechno je legitimní.
- **Nesrovnávejte se** se ženou na vedlejší posteli. Nemáte stejnou diagnózu ani stejné dny.
- **Nečtěte statistiky předčasných porodů ve tři ráno.** Vážně.
- **Poproste o psychologa.** Řada nemocnic ho má a nabízí ho málokdy sama. Není to slabost, je to služba, na kterou máte nárok.
- **Počítejte dny nahoru, ne dolů.** „Jsem tu osmý den a jsme ve 29. týdnu" funguje líp než „ještě šest týdnů".

## Tělo

Dlouhé ležení tělu neprospívá. Zeptejte se, co smíte, a pak to dělejte:

- **cvičení kotníků a lýtek** každou hodinu ve dne — prevence trombózy,
- **jemné protažení ramen a krku** vsedě,
- **dechová cvičení**,
- **kompresní punčochy**, pokud je máte doporučené,
- **hydratace a vláknina** kvůli zácpě.

## Kdy zavolat sestru okamžitě

I v nemocnici platí, že vás nikdo nesleduje nepřetržitě. Volejte hned, když:

- ucítíte **odtok plodové vody** nebo náhlý vodnatý výtok,
- začnete **krvácet**,
- máte **pravidelné stahy nebo tlak dolů**,
- cítíte **méně pohybů**, než je u vás obvyklé,
- máte **silnou bolest hlavy, poruchy vidění, bolest pod pravým žebrem**,
- máte **teplotu, zimnici**,
- máte **bolest, otok nebo zarudnutí lýtka, dušnost, bolest na hrudi**.

> Tento text je praktická podpora, ne lékařská rada. Vždy se řiďte pokyny svého ošetřujícího týmu.`,
      minutes: 9,
      phases: ['hospitalization', 'high_risk_pregnancy'],
      topics: ['rizikove', 'psychika', 'sebepece'],
      modifiers: ['high_risk'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-02-12',
      boost: 0.9,
    },
    {
      id: 'teh-strava-v-tehotenstvi',
      kind: 'article',
      title: 'Strava v těhotenství: co skutečně dává smysl',
      excerpt:
        'Nejde o dokonalý jídelníček, ale o pár věcí, které mají doložený význam — a o klid od zbytku.',
      body: `## Zapomeňte na „jíst za dva"

Energetická potřeba v těhotenství roste **méně, než se traduje**. V prvním trimestru prakticky vůbec, ve druhém přibližně o 300 kcal denně a ve třetím zhruba o 450 kcal. To odpovídá jednomu vydatnějšímu jídlu navíc, ne dvojnásobku porcí.

Podstatnější než množství je **kvalita** — v těhotenství roste potřeba některých živin výrazně víc než potřeba energie.

## Co má doložený význam

**Kyselina listová.** Doporučuje se od plánování těhotenství do konce prvního trimestru, u některých žen déle nebo ve vyšší dávce. **Konkrétní dávku určuje lékař** — zvlášť pokud máte v anamnéze vadu neurální trubice, epilepsii nebo užíváte určité léky.

**Jod.** Potřeba roste. Zdrojem je jodizovaná sůl, mořské ryby, mléčné výrobky. Doplňky konzultujte, protože nadbytek jodu je také problém.

**Železo.** Potřeba v těhotenství výrazně stoupá. Nasazení preparátu by mělo vycházet z **krevního obrazu**, ne z pocitu. Vstřebávání zlepšuje vitamin C, zhoršuje káva, čaj a vápník užitý současně.

**Vápník a vitamin D.** V našich zeměpisných šířkách je nedostatek vitaminu D běžný. Dávkování opět podle lékaře.

**Omega-3 (DHA).** Podílí se na vývoji nervové soustavy a zraku. Zdrojem jsou tučné mořské ryby dvakrát týdně nebo doplněk.

**Bílkoviny.** Potřeba roste zhruba o 20–25 g denně ve druhé polovině těhotenství. U dvojčat víc.

**Vláknina a tekutiny.** Zácpa je v těhotenství pravidlem, ne výjimkou. Cílem je zhruba 2–2,5 litru tekutin denně, víc při horku a zvracení.

## Co je moudré vynechat

Podrobný seznam najdete v samostatném checklistu, ale rámcově jde o:

- **syrové a nedostatečně tepelně zpracované maso, ryby a vejce** (toxoplazmóza, salmonela, listerie),
- **nepasterizované mléko a sýry z něj**, plísňové sýry se zrající kůrkou,
- **uzeniny a lahůdkářské výrobky** ke konzumaci bez ohřevu,
- **ryby s vysokým obsahem rtuti** (žralok, mečoun, tuňák velkooký, makrela královská),
- **alkohol** — bezpečná dávka není známa,
- **nadměrný kofein** — obvyklé doporučení je do 200 mg denně, tedy zhruba dvě malá espressa; počítejte i čaj, kolu a čokoládu,
- **bylinné čaje a doplňky bez konzultace** — „přírodní" neznamená bezpečné v těhotenství.

## Praktický rámec dne

Nemusíte počítat gramy. Stačí:

- **na každém talíři bílkovina** (maso, ryba, vejce, luštěniny, mléčné výrobky, tofu),
- **zelenina nebo ovoce ke každému jídlu**, dobře omytá,
- **celozrnná příloha**, pokud ji snesete,
- **kvalitní tuk** — olivový olej, ořechy, avokádo,
- **tři hlavní jídla a dvě svačiny**, zvlášť pokud máte nevolnosti nebo gestační diabetes.

## Když to nejde

V prvním trimestru někdy zvládnete jen suché pečivo a brambory. **Je to v pořádku.** V tomhle období je hlavním cílem nedehydratovat se a nezhubnout dramaticky, ne mít pestrý jídelníček. Prenatální vitamin pokryje to nejdůležitější. Pestrost doženete ve druhém trimestru.

## Přírůstek hmotnosti

Doporučený přírůstek se odvíjí od **BMI před těhotenstvím** a u dvojčat je vyšší. Rozpětí jsou široká a individuální — **konkrétní cíl by vám měl říct lékař**, ne internet a rozhodně ne komentáře okolí.

Po letech, kdy jste své tělo prožívala jako to, co „nefunguje", může být vážení mimořádně nepříjemné. Máte právo požádat, aby vám váhu neříkali nahlas, nebo se na ni nedívat.

## Doplňky stravy

Prenatální komplex je rozumný základ. Ale platí:

- **Neužívejte několik přípravků současně** bez konzultace — snadno překročíte bezpečné dávky, zejména u vitaminu A.
- **Vitamin A v retinolové formě** ve vyšších dávkách je v těhotenství rizikový. Pozor i na játra a jaterní paštiky.
- **Bylinné přípravky** konzultujte vždy.

## Kdy volat lékaře

- neschopnost udržet tekutiny déle než 12 hodin, hubnutí,
- výrazná bledost, dušnost při běžné námaze, bušení srdce (možná anémie),
- horečka s průjmem a zvracením po rizikovém jídle,
- silná bolest břicha,
- rychlý přírůstek hmotnosti nad přibližně 1 kg za týden spolu s otoky obličeje a rukou.

> Text je obecný a nenahrazuje individuální nutriční ani lékařské doporučení. O doplňcích stravy v těhotenství vždy rozhoduje váš lékař.`,
      minutes: 9,
      phases: ['pregnancy', 'early_pregnancy', 'high_risk_pregnancy'],
      topics: ['strava', 'tehotenstvi', 'sebepece'],
      level: 'essential',
      hero: 'sage',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Světová zdravotnická organizace — doporučení pro prenatální péči',
        'Česká gynekologická a porodnická společnost ČLS JEP',
        'EFSA — referenční hodnoty příjmu živin',
      ],
      publishedOn: '2026-02-19',
      boost: 0.75,
    },
    {
      id: 'teh-co-nejist-checklist',
      kind: 'checklist',
      title: 'Co v těhotenství nejíst: přehledný seznam bez strašení',
      excerpt:
        'Konkrétní seznam rizikových potravin s vysvětlením proč — abyste nemusela googlit u každého druhého sousta.',
      body: `## Proč tenhle seznam existuje

Omezení v těhotenství nejsou libovůle. Většina z nich má jeden ze tří důvodů:

1. **Riziko infekce** — listerióza, toxoplazmóza, salmonelóza. Pro vás jde často o banální onemocnění, pro plod může být závažné.
2. **Riziko toxických látek** — především rtuť v některých rybách a vitamin A ve vysokých dávkách.
3. **Riziko poškození vývoje** — alkohol.

Cílem není žít ve strachu z jídla. Cílem je vědět, čemu se vyhnout, a zbytek si užít.

## Když se stane nehoda

Snědla jste kousek nedopečeného masa nebo plísňový sýr? **Nepanikařte.** Riziko z jednorázové expozice je nízké. Sledujte, jestli se nedostaví horečka, chřipkové příznaky nebo průjem, a pokud ano, kontaktujte lékaře a řekněte mu, co jste jedla.

> Seznam je obecný a nenahrazuje doporučení vašeho lékaře. Při podezření na infekci z potravin vždy kontaktujte lékaře.`,
      minutes: 5,
      phases: ['pregnancy', 'early_pregnancy', 'high_risk_pregnancy'],
      topics: ['strava', 'tehotenstvi'],
      level: 'essential',
      hero: 'linen',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Světová zdravotnická organizace — doporučení pro prenatální péči'],
      publishedOn: '2026-02-26',
      boost: 0.7,
      checklist: [
        {
          id: 'teh-nejist-alkohol',
          text: 'Žádný alkohol',
          hint: 'Bezpečná dávka nebyla stanovena. Platí i pro vaření, kde se alkohol nemusí zcela odpařit.',
          group: 'Nulová tolerance',
        },
        {
          id: 'teh-nejist-syrove-maso',
          text: 'Syrové a nedovařené maso, tatarák, krvavé steaky',
          hint: 'Toxoplazmóza. Maso propečte na střed, u mletého to platí dvojnásob.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-uzeniny',
          text: 'Šunky, salámy a paštiky konzumované za studena',
          hint: 'Listerie. Tepelně zpracované (v horkém pokrmu) jsou v pořádku.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-syrove-ryby',
          text: 'Syrové ryby a mořské plody, sushi, uzený losos za studena, marinovaní sledi',
          hint: 'Listerie a paraziti. Tepelně zpracované ryby jsou naopak žádoucí.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-syrova-vejce',
          text: 'Syrová a málo tepelně zpracovaná vejce',
          hint: 'Salmonela. Pozor na domácí majonézu, tiramisu, syrové těsto a míchaná vejce natvrdko nedodělaná.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-neptasterizovane',
          text: 'Nepasterizované mléko a výrobky z něj',
          hint: 'Včetně sýrů z farmářských trhů. Ptejte se, nebo nekupujte.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-plisnove',
          text: 'Měkké zrající sýry s plísní na povrchu a sýry s modrou plísní',
          hint: 'Hermelín, camembert, niva, gorgonzola. Tvrdé sýry a tavené jsou v pořádku, stejně jako tyto sýry zapečené do horka.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-klicky',
          text: 'Syrové naklíčené semínko a klíčky',
          hint: 'Prostředí klíčení je ideální pro bakterie. Tepelně zpracované jsou v pořádku.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-neomyta-zelenina',
          text: 'Neomytá zelenina, ovoce a bylinky',
          hint: 'Toxoplazmóza z půdy. Důkladně omyjte, u listové zeleniny propláchněte listy jednotlivě.',
          group: 'Infekce',
        },
        {
          id: 'teh-nejist-rtut',
          text: 'Ryby s vysokým obsahem rtuti: žralok, mečoun, marlin, tuňák velkooký, makrela královská',
          hint: 'Rtuť se hromadí a poškozuje vývoj nervové soustavy.',
          group: 'Toxické látky',
        },
        {
          id: 'teh-nejist-jatra',
          text: 'Játra a jaterní výrobky ve velkém množství',
          hint: 'Velmi vysoký obsah vitaminu A v retinolové formě. Občasná malá porce tepelně zpracovaná není katastrofa, ale pravidelně ne.',
          group: 'Toxické látky',
        },
        {
          id: 'teh-nejist-vitamin-a',
          text: 'Doplňky s vysokou dávkou vitaminu A (retinol)',
          hint: 'Zkontrolujte složení všech doplňků, které berete současně.',
          group: 'Toxické látky',
        },
        {
          id: 'teh-nejist-kofein',
          text: 'Kofein nad zhruba 200 mg denně',
          hint: 'Zhruba dvě malá espressa. Počítejte i čaj, kolu, energetické nápoje a hořkou čokoládu.',
          group: 'Omezit',
        },
        {
          id: 'teh-nejist-byliny',
          text: 'Bylinné čaje a přípravky bez konzultace',
          hint: 'Šalvěj, řebříček, jalovec, kopřiva ve velkém a řada dalších mají v těhotenství svá omezení.',
          group: 'Omezit',
        },
        {
          id: 'teh-nejist-lekorice',
          text: 'Velké množství lékořice',
          hint: 'Může ovlivňovat krevní tlak. Občasný bonbon problém není.',
          group: 'Omezit',
          optional: true,
        },
        {
          id: 'teh-nejist-nahradni-sladidla',
          text: 'Nadměrné množství slazených nápojů, i light variant',
          group: 'Omezit',
          optional: true,
        },
        {
          id: 'teh-nejist-koci-trus',
          text: 'Bonus: úklid kočičího záchodu nechte někomu jinému',
          hint: 'Toxoplazmóza se přenáší i takto. Pokud musíte, rukavice a důkladné mytí rukou.',
          group: 'Nejen jídlo',
        },
        {
          id: 'teh-nejist-zahrada',
          text: 'Bonus: na zahradě pracujte v rukavicích',
          group: 'Nejen jídlo',
          optional: true,
        },
      ],
    },
    {
      id: 'teh-cestovani-v-tehotenstvi',
      kind: 'article',
      title: 'Cestování v těhotenství: kdy, kam a s čím počítat',
      excerpt:
        'Létat se smí déle, než si většina lidí myslí — ale je pár věcí, které je lepší vyřešit před rezervací než po ní.',
      body: `## Kdy je nejlepší čas

Pokud těhotenství probíhá bez komplikací, bývá nejpříjemnějším obdobím pro cestování **druhý trimestr**, přibližně mezi 14. a 27. týdnem. Nevolnosti obvykle ustoupily, břicho ještě neomezuje a únava je snesitelnější.

**Vždy to ale konzultujte s lékařem předem** — u rizikového těhotenství, po cerkláži, při krátkém hrdle, u dvojčat nebo po předchozím předčasném porodu může být doporučení jiné.

## Létání

Pravidla aerolinek se liší, ale obecně platí:

- **do 28. týdne** obvykle bez omezení,
- **28.–36. týden** často **potvrzení od lékaře** ne starší než několik dní, v angličtině,
- **od 36. týdne** (u dvojčat obvykle od 32. týdne) většina dopravců **nepřepravuje**.

**Ověřte si podmínky konkrétní aerolinky písemně** a vytiskněte si je. Personál u přepážky rozhoduje podle svých pravidel, ne podle vašich očekávání.

Za letu:

- **choďte** aspoň každou hodinu, protahujte kotníky,
- **kompresní punčochy** — v těhotenství je riziko trombózy zvýšené a let ho dále zvyšuje,
- **pijte hodně vody**, letadlo vysušuje,
- **pás si zapínejte pod bříškem**, přes pánev,
- **sedadlo u uličky**, ať nemusíte nikoho budit.

Skenery na letišti ani samotný let plodu neškodí.

## Autem

- **Přestávka každé dvě hodiny**, projít se aspoň pět minut.
- **Pás vždy** — spodní část pod břichem přes pánevní kosti, horní mezi prsy a stranou od břicha. **Nikdy pás přes břicho.**
- **Airbag nechte zapnutý**, sedadlo posuňte co nejdál od volantu.
- **Po jakékoli dopravní nehodě, i drobné**, se nechte vyšetřit v porodnici. I náraz, který vypadá neškodně, může způsobit odloučení placenty.

## Kam raději ne

- **Oblasti s nutností antimalarické profylaxe** nebo s výskytem virů přenášených komary, které mohou ovlivnit vývoj plodu.
- **Destinace vyžadující živé vakcíny.** Většina živých vakcín je v těhotenství kontraindikovaná.
- **Vysoké nadmořské výšky** nad zhruba 2500 metrů bez aklimatizace.
- **Místa s nedostupnou zdravotní péčí** nebo daleko od nemocnice.
- **Potápění s přístrojem** je v těhotenství nedoporučené.

## Co si zařídit před cestou

1. **Cestovní pojištění, které výslovně kryje těhotenství** a komplikace. Standardní pojištění je často vylučuje nebo omezuje týdnem těhotenství — čtěte podmínky.
2. **Evropský průkaz zdravotního pojištění** při cestě po EU.
3. **Těhotenskou průkazku a kopii nálezů**, ideálně i stručné shrnutí v angličtině.
4. **Kontakt na nejnemocnici v cíli cesty.** Zjistěte si to předem, ne až v panice.
5. **Léky, které užíváte**, v originálním balení a v dostatečném množství.
6. **Konzultaci s lékařem** — a nechte si písemně potvrdit, že proti cestě nemá námitky.

## Praktické drobnosti

- **Pitný režim a svačiny** vždy s sebou, zpoždění se nedá naplánovat.
- **Jídlo z rizikových zdrojů** je v cizině větší téma než doma — pozor na nepasterizované mléčné výrobky, syrové ryby a neomyté ovoce.
- **Voda z kohoutku** jen tam, kde je bezpečná; jinak balená, i na čištění zubů.
- **Slunce** — v těhotenství se snadněji tvoří pigmentové skvrny, používejte vysoký faktor.
- **Vedro** zhoršuje otoky a únavu. Plánujte program na ráno a večer.

## Když jedete po Česku

Většina výše uvedeného odpadá, ale i tak: **vezměte si těhotenskou průkazku**, zjistěte si nejbližší porodnici a při rizikovém těhotenství se zeptejte, jak daleko od domova můžete být.

## Kdy volat lékaře nebo jet do nemocnice

- krvácení, odtok plodové vody,
- pravidelné stahy nebo tlak dolů,
- po jakékoli dopravní nehodě nebo pádu na břicho,
- **otok, bolest a zarudnutí jednoho lýtka** po dlouhé cestě, náhlá dušnost či bolest na hrudi,
- horečka nad 38 °C, průjem se zvracením a známkami dehydratace,
- snížení pohybů plodu.

> Text je obecný přehled. Vhodnost cesty ve vaší konkrétní situaci posoudí výhradně váš lékař.`,
      minutes: 8,
      phases: ['pregnancy', 'early_pregnancy'],
      gestWeeks: [8, 34],
      topics: ['tehotenstvi', 'sebepece'],
      excludeModifiers: ['cervical_insufficiency'],
      level: 'deep',
      hero: 'sky',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Světová zdravotnická organizace — doporučení pro prenatální péči'],
      publishedOn: '2026-03-05',
      boost: 0.5,
    },
    {
      id: 'teh-pohyb-a-cviceni',
      kind: 'article',
      title: 'Pohyb v těhotenství: co je bezpečné a co opravdu pomáhá',
      excerpt:
        'Po letech, kdy vám všichni říkali, ať se šetříte, přijde těžká otázka — kolik pohybu je vlastně v pořádku.',
      body: `## Proč se vůbec hýbat

Pravidelný přiměřený pohyb v těhotenství má doložené přínosy: **snižuje riziko gestačního diabetu a preeklampsie, zmírňuje bolesti zad a pánve, zlepšuje spánek a náladu, usnadňuje porod i rekonvalescenci.**

Obvyklé doporučení pro těhotenství bez komplikací zní **přibližně 150 minut středně intenzivní aktivity týdně**, rozložených do několika dnů. Středně intenzivní znamená: **zadýcháte se, ale dokážete mluvit ve větách.**

**Pokud máte rizikové těhotenství, krátké hrdlo, cerkláž, krvácení nebo jinou komplikaci, tento článek pro vás neplatí a řídíte se výhradně pokynem lékaře.**

## Co je vhodné

- **Chůze.** Nejdostupnější a nejlépe snášená aktivita celého těhotenství.
- **Plavání a aquaaerobik.** Voda nadnáší, ulevuje zádům a otokům.
- **Těhotenská jóga.** Vyhýbá se rizikovým pozicím a učí dech, který se hodí u porodu.
- **Stacionární kolo.** Bezpečnější než silniční kvůli riziku pádu.
- **Posilování s vlastní vahou nebo lehkými činkami**, s důrazem na techniku a dýchání.
- **Pilates upravený pro těhotenství.**
- **Cvičení pánevního dna.** Tohle je jediná aktivita, kterou by měla dělat prakticky každá těhotná žena — má význam pro porod i pro poporodní období.

## Čemu se vyhnout

- **Kontaktní sporty** a všechno s rizikem nárazu do břicha.
- **Sporty s vysokým rizikem pádu** — lyžování, jízda na koni, horská kola, in-line brusle.
- **Potápění s přístrojem.**
- **Horká jóga, sauna, horké lázně** — přehřátí je zvlášť v prvním trimestru rizikové.
- **Cvičení vleže na zádech po zhruba 16.–20. týdnu** v delších sériích — děloha může utlačovat dolní dutou žílu. Krátce a s pocitem pohody je to obvykle v pořádku; když se točí hlava, přetočte se na levý bok.
- **Silové cvičení se zadržením dechu** (Valsalvův manévr).
- **Cvičení ve vedru a bez dostatečného pití.**
- **Aktivity ve vysokých nadmořských výškách** bez aklimatizace.

## Jak upravit intenzitu

- **Mluvicí test** je lepší než tepová frekvence, protože ta se v těhotenství mění.
- **Nezačínejte v těhotenství s novým náročným sportem.** Pokud jste dosud necvičila, začněte chůzí a jednoduchými cviky.
- **Pokud jste sportovala intenzivně**, můžete obvykle pokračovat na nižší intenzitě — ale konzultujte to.
- **Rovnováha se mění.** Těžiště se posouvá, klouby jsou volnější vlivem relaxinu. Volte stabilní pozice.
- **Poslouchejte tělo.** Bolest, závrať nebo tvrdnutí břicha znamenají stop.

## Bolesti zad a pánve

Velmi časté téma druhé poloviny těhotenství. Co pomáhá:

- **cviky na hluboký stabilizační systém** — ideálně pod vedením fyzioterapeutky,
- **poloha na čtyřech** při bolestech v kříži,
- **těhotenský pás** na podporu pánve, pokud vám ho fyzioterapeut doporučí,
- **teplo** na kříž (ne na břicho),
- **vyhýbání se dlouhému stání na jednom místě** a nošení na jednom boku.

Pokud vás pánev bolí tak, že kulháte nebo se v noci nepřetočíte, **není to něco, co se musí vydržet** — je to indikace k fyzioterapii.

## Po IVF: zvláštní kapitola

Roky vám možná někdo říkal, ať se šetříte. Po transferu jste ležela, protože jste se bála. Teď se máte hýbat a je to psychicky těžké.

Pomáhá vědět, že **pohyb běžné intenzity v nekomplikovaném těhotenství nezpůsobí potrat ani předčasný porod.** Začněte chůzí, kterou dokážete přijmout, a přidávejte pomalu. A pokud vám lékař řekl konkrétní omezení, drží se ho — ale nechte si vysvětlit, proč, a na jak dlouho.

## Kdy okamžitě přestat a volat lékaře

- **krvácení nebo odtok plodové vody**,
- **pravidelné bolestivé stahy**,
- **bolest na hrudi, dušnost před cvičením nebo neúměrná zátěži**,
- **závrať, mdloba, silná bolest hlavy**,
- **bolest nebo otok jednoho lýtka**,
- **náhlá silná bolest břicha**,
- **snížení pohybů plodu po cvičení**.

> Text platí pro nekomplikované těhotenství a nenahrazuje individuální doporučení. Před zahájením či změnou pohybového režimu se poraďte se svým lékařem.`,
      minutes: 8,
      phases: ['pregnancy', 'early_pregnancy'],
      topics: ['pohyb', 'tehotenstvi', 'sebepece'],
      excludeModifiers: ['cervical_insufficiency'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Světová zdravotnická organizace — doporučení pro prenatální péči',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2026-03-12',
      boost: 0.65,
    },
    {
      id: 'teh-spanek-a-poloha-na-boku',
      kind: 'article',
      title: 'Spánek v těhotenství a proč se má spát na boku',
      excerpt:
        'Doporučení spát na boku má konkrétní důvod — a zároveň neznamená, že se máte v noci budit hrůzou, že jste se přetočila.',
      body: `## Proč na boku

Od druhé poloviny těhotenství, přibližně **od 28. týdne**, se doporučuje usínat **na boku**, nikoli na zádech. Důvod je mechanický: v poloze na zádech může zvětšená děloha utlačovat **dolní dutou žílu**, což snižuje návrat krve k srdci, a tím i průtok placentou.

Doporučení se opírá o pozorování, že usínání na zádech ve třetím trimestru je spojeno s vyšším rizikem nepříznivého konce těhotenství. Absolutní riziko je nízké, ale opatření je jednoduché a neškodné — proto se doporučuje.

## Co to prakticky znamená

**Usínejte na boku.** To je celé doporučení a je klíčové slovo „usínejte".

**Když se v noci probudíte na zádech, nic hrozného se nestalo.** Otočte se na bok a spěte dál. Tělo se v noci přetáčí a nedá se to uhlídat — a nikdo po vás nechce, abyste to hlídala. Ženy, které si nastavují budíky, aby zkontrolovaly polohu, si ničí spánek bez užitku.

**Levý nebo pravý bok?** Levý se tradičně doporučuje, protože dolní dutá žíla je vpravo. Rozdíl mezi levým a pravým bokem je ale malý; **hlavní je nespat na zádech.** Střídejte podle pohodlí.

## Jak si to zařídit

- **Polštář mezi kolena** vyrovná pánev a uleví kříži.
- **Polštář pod břicho** podepře váhu dělohy.
- **Polštář za zády** zabrání přetočení na záda.
- **Těhotenský polštář ve tvaru C nebo U** dělá všechno tohle najednou. Je velký, zabírá půl postele a stojí za to.
- **Zvýšená horní polovina těla** pomáhá při pálení žáhy a dušnosti — podložte matraci nebo použijte klín.
- Pokud musíte ležet napůl na zádech (například kvůli bolesti kyčle), **podložte si pravý bok klínem**, aby byla děloha vychýlená doleva.

## Ostatní zloději spánku

**Časté močení.** Pijte hlavně přes den, večer omezte, ale nikdy nepijte málo celkově. Při vstávání v noci nerozsvěcujte hlavní světlo.

**Pálení žáhy.** Poslední jídlo dvě až tři hodiny před spaním, zvýšená poloha hlavy, menší večeře.

**Křeče v lýtkách.** Protahování před spaním, dostatek tekutin. Při opakovaných křečích se zeptejte na hořčík a na krevní obraz.

**Syndrom neklidných nohou.** V těhotenství častý, souvisí i s nedostatkem železa. **Řekněte o tom lékaři** — je to řešitelné.

**Ucpaný nos.** Otok nosní sliznice je v těhotenství běžný. Zvlhčovač a mořská voda pomáhají; **odbobřující kapky užívejte jen po konzultaci.**

**Úzkostné myšlenky.** Nejhorší v noci a nejtěžší kategorie. Pomáhá pevný večerní rituál, vypnuté obrazovky hodinu před spaním, a vypsání starostí na papír před spaním, aby je nemusela držet hlava.

## Chrápání a spánková apnoe

V těhotenství se objevuje častěji a **není to jen úsměvná drobnost**. Pokud chrápete hlasitě, budíte se s pocitem nedostatku vzduchu, přes den usínáte vsedě nebo máte ranní bolesti hlavy, **řekněte to lékaři** — spánková apnoe v těhotenství souvisí s vyšším tlakem a je léčitelná.

## Když nespíte vůbec

Nespavost v těhotenství je běžná a v posledních týdnech téměř pravidlem. Co pomáhá:

- **Pravidelný čas vstávání** je důležitější než čas usínání.
- **Krátký odpolední odpočinek** ano, dlouhý spánek odpoledne ne.
- **Nezůstávejte v posteli a nezírejte do stropu.** Po dvaceti minutách vstaňte, jděte do jiné místnosti, čtěte při tlumeném světle.
- **Žádné léky na spaní bez konzultace**, ani volně prodejné, ani bylinné.

## Kdy volat lékaře

- **náhlá dušnost, bolest na hrudi**, dušnost v klidu nebo vleže,
- **bolest, otok a zarudnutí jednoho lýtka**,
- **silná bolest hlavy, poruchy vidění, náhlé otoky obličeje** — možné příznaky preeklampsie,
- **snížení pohybů plodu** ráno po probuzení,
- **nespavost spojená s trvale skleslou náladou**, ztrátou zájmu a beznadějí trvající déle než dva týdny.

> Text je obecná informace. Jakékoli potíže se spánkem, které vás vyčerpávají, patří k projednání s vaším lékařem.`,
      minutes: 7,
      phases: ['pregnancy', 'high_risk_pregnancy'],
      gestWeeks: [18, 40],
      topics: ['spanek', 'tehotenstvi', 'sebepece'],
      level: 'essential',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-03-19',
      boost: 0.7,
    },
    {
      id: 'teh-prace-a-neschopenka',
      kind: 'article',
      title: 'Práce, neschopenka a peníze: co potřebujete vědět včas',
      excerpt:
        'Papírování v těhotenství se dá vyřídit za jedno odpoledne, když víte co a kdy — a ušetří vám to hodně nervů v posledních týdnech.',
      body: `## Kdy to řešit

Ideálně **kolem 20.–24. týdne**, kdy máte energii a čas. V 32. týdnu, kdy jste vyčerpaná a možná ležíte, se úřady vyřizují mnohem hůř.

## Kdy zaměstnavateli oznámit těhotenství

Zákonná lhůta neexistuje, ale **ochrana, kterou vám zákoník práce dává, začíná fungovat až ve chvíli, kdy zaměstnavatel o těhotenství ví.** Oznámení proto dává praktický smysl dřív, než by vám bylo příjemné.

Po oznámení máte mimo jiné nárok:

- **nebýt vysílána na pracovní cesty** mimo obvod obce pracoviště bez svého souhlasu,
- **nepracovat přesčas**,
- **nevykonávat práce zakázané těhotným ženám** — zaměstnavatel vás musí převést na jinou práci,
- **požádat o kratší pracovní dobu nebo jinou úpravu**, a zaměstnavatel má povinnost vyhovět, nebrání-li tomu vážné provozní důvody,
- **ochranu před výpovědí** ze strany zaměstnavatele.

## Převedení na jinou práci a vyrovnávací příspěvek

Pokud vaši práci nesmíte v těhotenství vykonávat a zaměstnavatel vás převede na jinou, při které klesne váš výdělek, můžete mít nárok na **vyrovnávací příspěvek v těhotenství a mateřství** z nemocenského pojištění. Podklad vystavuje lékař a zaměstnavatel.

Tohle je dávka, o které řada žen neví a která je pro ně výhodnější než neschopenka. **Zeptejte se na ni**, zejména pracujete-li ve směnném provozu, ve zdravotnictví, ve školství s malými dětmi nebo s chemikáliemi.

## Neschopenka

Pracovní neschopnost v těhotenství vystavuje lékař **na základě zdravotního důvodu**, ne automaticky proto, že jste těhotná. Důvodem bývá hrozící potrat, krvácení, krátké hrdlo, hypertenze, těžké nevolnosti, komplikace u dvojčat a podobně.

Vystavuje ji **gynekolog** (u těhotenských komplikací) nebo **praktický lékař** (u nesouvisejících onemocnění). Je elektronická, papír pro vás už nosit nemusíte, ale kontrolní lístky si hlídejte.

Během neschopnosti platí **vycházky** povolené lékařem. Nejde o domácí vězení, ale ani o volný režim — ptejte se, jaké vycházky máte a v jakém rozsahu.

## Peněžitá pomoc v mateřství

- **Nástup** si volíte v rozmezí **od začátku 8. do začátku 6. týdne před očekávaným dnem porodu**, tedy nejčastěji v 30.–32. týdnu.
- **Podpůrčí doba** je 28 týdnů (37 týdnů u vícerčat).
- **Žádost** vystavuje gynekolog na tiskopisu, vy ji předáte zaměstnavateli, který ji posílá dál.
- **Nárok** vzniká při splnění podmínek účasti na nemocenském pojištění — u zaměstnankyň i u OSVČ, ale podmínky se liší. **Ověřte si je u své okresní správy sociálního zabezpečení včas**, ideálně už ve druhém trimestru.

Pokud nárok na peněžitou pomoc v mateřství nemáte, přichází v úvahu **rodičovský příspěvek** od narození dítěte. Konkrétní částky a podmínky se v čase mění — ověřte si aktuální stav na oficiálních zdrojích, ne v diskuzích.

## Praktický seznam, co vyřídit

1. **Oznámit zaměstnavateli** a domluvit případnou úpravu práce.
2. **Zjistit, zda mám nárok na vyrovnávací příspěvek.**
3. **Ověřit podmínky peněžité pomoci v mateřství** u správy sociálního zabezpečení.
4. **Vybrat porodnici a zaregistrovat se** — v některých městech se registruje brzy.
5. **Zjistit, kdy podat žádost o mateřskou** a s kým to jde.
6. **Vyřešit, kdo bude zastupovat** vaši práci a co je potřeba předat.
7. **Zkontrolovat pojištění**, případně životní pojistku a její podmínky.
8. **Založit si jednu složku** na všechny papíry, fyzickou i digitální.

## Co říct v práci a co ne

Nemusíte nikomu vysvětlovat, jak jste otěhotněla. **Informace o IVF je vaše soukromí** a nepatří do kolektivu, pokud sama nechcete. Zároveň má smysl říct nadřízenému, pokud vás čekají časté kontroly — potřebujete uvolnění a je jednodušší to mít domluvené.

Věta, která funguje: **„Budu mít častější kontroly než obvykle. Termíny vám dám dopředu, ať se to dá naplánovat."**

## Vina, která k tomu patří

Mnoho žen se ostýchá jít na neschopenku, i když jim ji lékař nabídne. Cítí se jako podvodnice, protože „nejsou nemocné". **Těhotenská neschopnost není podvod.** Je to nástroj, který existuje přesně pro tuhle situaci, a lékař ji nevystavuje z laskavosti, ale z medicínského důvodu.

## Kdy volat lékaře

- jakékoli krvácení, odtok plodové vody, pravidelné stahy — bez ohledu na to, že jste v práci,
- silná bolest hlavy, poruchy vidění, náhlé otoky obličeje a rukou,
- snížení pohybů plodu,
- pokud vám zaměstnavatel nařizuje práci, o které jste se dozvěděla, že je pro těhotné zakázaná.

> Informace o dávkách a pracovněprávních nárocích se mohou měnit. Aktuální stav si vždy ověřte u své okresní správy sociálního zabezpečení a u svého lékaře.`,
      minutes: 9,
      phases: ['pregnancy', 'high_risk_pregnancy', 'early_pregnancy'],
      gestWeeks: [8, 34],
      topics: ['finance', 'tehotenstvi', 'rizikove'],
      level: 'essential',
      hero: 'pearl',
      author: 'Tým IVF by Gabi',
      publishedOn: '2026-03-26',
      boost: 0.7,
    },
    {
      id: 'teh-plan-tehotenskych-kontrol',
      kind: 'checklist',
      title: 'Plán těhotenských kontrol: co kdy čeká',
      excerpt:
        'Přehled vyšetření od zápisu do poradny po termín, abyste věděla, co se blíží a nic vám neuteklo.',
      body: `## Jak s tímhle plánem pracovat

Tenhle seznam je **orientační časová osa** běžné prenatální péče v Česku. U rizikového těhotenství, u dvojčat a při komplikacích bude vašich kontrol víc a některé přibudou — **vždy platí plán, který vám dá váš lékař.**

Odškrtávejte si, co máte za sebou. Před každou kontrolou si připravte otázky do poznámek — v ordinaci na ně nevzpomenete.

## Co s sebou pokaždé

Těhotenskou průkazku, kartičku pojišťovny, vzorek ranní moči (pokud to vaše ordinace vyžaduje) a **seznam otázek**.

## Na co se ptát skoro pokaždé

- Jaký je tlak a co ukázala moč?
- Roste miminko podle očekávání?
- Kdy je další kontrola a co se na ní bude dělat?
- Na co si mám dát pozor do příště?

> Časování je orientační a liší se podle pracoviště a vaší situace. Tento seznam nenahrazuje plán péče stanovený vaším lékařem.`,
      minutes: 5,
      phases: ['pregnancy', 'early_pregnancy'],
      topics: ['tehotenstvi', 'klinika'],
      level: 'essential',
      hero: 'champagne',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-04-02',
      boost: 0.6,
      checklist: [
        {
          id: 'teh-plan-propusteni',
          text: 'Propuštění z reprodukční kliniky (8.–10. týden)',
          hint: 'Odneste si propouštěcí zprávu a plán vysazování medikace.',
          group: 'První trimestr',
        },
        {
          id: 'teh-plan-zapis',
          text: 'Zápis do těhotenské poradny (do 12. týdne)',
          hint: 'Založení průkazky, odběry krve, krevní skupina a Rh, infekční sérologie, štítná žláza.',
          group: 'První trimestr',
        },
        {
          id: 'teh-plan-screening1',
          text: 'Screening prvního trimestru (11.–14. týden)',
          hint: 'Kombinace ultrazvuku a krevních markerů. U dvojčat se určuje typ placentace — ptejte se na to.',
          group: 'První trimestr',
        },
        {
          id: 'teh-plan-nipt',
          text: 'NIPT, pokud jste se pro něj rozhodla (od 10. týdne)',
          group: 'První trimestr',
          optional: true,
        },
        {
          id: 'teh-plan-zubar',
          text: 'Preventivní prohlídka u zubaře',
          hint: 'Zánět dásní v těhotenství není kosmetická věc. Objednejte se v prvním nebo druhém trimestru.',
          group: 'První trimestr',
        },
        {
          id: 'teh-plan-morfologie',
          text: 'Morfologický ultrazvuk (18.–22. týden)',
          hint: 'Nejdůkladnější vyšetření anatomie. Vezměte partnera, trvá i 45 minut.',
          group: 'Druhý trimestr',
        },
        {
          id: 'teh-plan-cervikometrie',
          text: 'Měření délky děložního hrdla',
          hint: 'Obvykle v rámci morfologického ultrazvuku, u rizika opakovaně.',
          group: 'Druhý trimestr',
        },
        {
          id: 'teh-plan-ogtt',
          text: 'oGTT — test na těhotenskou cukrovku (24.–28. týden)',
          hint: 'Nalačno, počítejte se třemi hodinami v čekárně. Vezměte si svačinu na potom.',
          group: 'Druhý trimestr',
        },
        {
          id: 'teh-plan-krevni-obraz',
          text: 'Kontrolní krevní obraz a protilátky (kolem 24.–28. týdne)',
          hint: 'Anémie je v těhotenství častá a řešitelná.',
          group: 'Druhý trimestr',
        },
        {
          id: 'teh-plan-antid',
          text: 'Anti-D profylaxe u Rh negativních žen (kolem 28. týdne)',
          hint: 'Pokud máte Rh negativní krevní skupinu, připomeňte to.',
          group: 'Druhý trimestr',
          optional: true,
        },
        {
          id: 'teh-plan-registrace-porodnice',
          text: 'Registrace v porodnici',
          hint: 'V některých městech se registruje už kolem 20. týdne. Zjistěte si podmínky.',
          group: 'Druhý trimestr',
        },
        {
          id: 'teh-plan-kurz',
          text: 'Přihlášení do předporodního kurzu',
          group: 'Druhý trimestr',
          optional: true,
        },
        {
          id: 'teh-plan-ultrazvuk3',
          text: 'Ultrazvuk třetího trimestru (30.–34. týden)',
          hint: 'Růst plodu, poloha, plodová voda, uložení placenty.',
          group: 'Třetí trimestr',
        },
        {
          id: 'teh-plan-gbs',
          text: 'Výtěr na streptokoky skupiny B (35.–37. týden)',
          hint: 'Pozitivní nález znamená antibiotika během porodu, nic víc.',
          group: 'Třetí trimestr',
        },
        {
          id: 'teh-plan-ctg',
          text: 'Pravidelné CTG od 36.–38. týdne',
          group: 'Třetí trimestr',
        },
        {
          id: 'teh-plan-tydenni-kontroly',
          text: 'Týdenní kontroly od 36. týdne',
          group: 'Třetí trimestr',
        },
        {
          id: 'teh-plan-pppm',
          text: 'Žádost o peněžitou pomoc v mateřství (kolem 30.–32. týdne)',
          hint: 'Tiskopis vystaví gynekolog, vy ho předáte zaměstnavateli.',
          group: 'Papírování',
        },
        {
          id: 'teh-plan-taska',
          text: 'Sbalená taška do porodnice (od 34.–36. týdne, u dvojčat dřív)',
          group: 'Papírování',
        },
        {
          id: 'teh-plan-porodni-plan',
          text: 'Sepsané porodní přání, pokud ho chcete',
          group: 'Papírování',
          optional: true,
        },
        {
          id: 'teh-plan-pediatr',
          text: 'Domluvený dětský lékař',
          hint: 'V mnoha regionech se shánějí těžko. Řešte to už ve druhém trimestru.',
          group: 'Papírování',
        },
      ],
    },
    {
      id: 'teh-kviz-varovne-priznaky',
      kind: 'quiz',
      title: 'Kvíz: poznáte varovné příznaky v těhotenství?',
      excerpt:
        'Sedm otázek, které vás naučí rozeznat, kdy se dá počkat do rána a kdy se volá okamžitě.',
      body: `## K čemu tenhle kvíz je

Většina úzkosti v těhotenství pramení z toho, že nevíte, co je vážné. Když máte v hlavě jasný seznam situací, kdy se volá, můžete se **přestat bát zbytku**.

Projděte si sedm otázek. U každé je vysvětlení, proč je odpověď taková, jaká je. Nejde o zkoušku — jde o to, aby vám tyhle věci zůstaly v hlavě na chvíli, kdy je budete potřebovat.

## Zlaté pravidlo

Když váháte, jestli volat, **volejte**. Porodnice funguje nepřetržitě a personál raději vyšetří deset žen zbytečně než jednu pozdě. Nikdo vás nebude peskovat a nikdo si o vás nic nepomyslí.

> Kvíz slouží k orientaci a nenahrazuje lékařskou péči ani individuální pokyny vašeho lékaře. Pokyn vašeho ošetřujícího lékaře má vždy přednost.`,
      minutes: 6,
      phases: ['pregnancy', 'high_risk_pregnancy', 'early_pregnancy'],
      topics: ['tehotenstvi', 'rizikove', 'zdravi_ditete'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-04-09',
      boost: 0.8,
      quiz: [
        {
          q: 'Je 33. týden, tři hodiny ráno. Cítíte, že se miminko celý večer hýbe méně než obvykle. Co uděláte?',
          options: [
            'Počkám do rána a zavolám gynekoložce, až otevře ordinace',
            'Lehnu si na levý bok, napiju se studeného, dvě hodiny se soustředím na pohyby — a pokud jich je pořád méně, volám porodnici okamžitě',
            'Zkusím miminko probudit ledovou vodou na břicho a hlasitou hudbou',
            'Poslechnu si ozvy domácím dopplerem a když je slyším, jdu spát',
          ],
          correct: 1,
          explain:
            'Snížení pohybů oproti tomu, co je u vás obvyklé, je vždy důvod ke kontrole — a nečeká se na ráno. Porodnice funguje nonstop právě kvůli tomuhle. Domácí doppler je zrádný: zachycené ozvy vás uklidní, i když může být něco špatně, a proto se pro tento účel nedoporučuje.',
        },
        {
          q: 'Ve 30. týdnu vás od rána bolí hlava, odpoledne se přidá blikání před očima a máte nateklé prsty i víčka. Co to může být?',
          options: [
            'Běžná těhotenská migréna, stačí odpočinek',
            'Nedostatek tekutin, stačí se napít',
            'Možné příznaky preeklampsie — okamžitě volat porodnici nebo lékaře',
            'Únava z horka, pomůže studená sprcha',
          ],
          correct: 2,
          explain:
            'Kombinace silné bolesti hlavy, poruch vidění a náhlých otoků obličeje a rukou patří mezi klíčové varovné příznaky preeklampsie. Tohle je situace, kdy se volá okamžitě, bez ohledu na denní dobu. Nečekejte na plánovanou kontrolu.',
        },
        {
          q: 'Ve 25. týdnu vám břicho asi šestkrát za hodinu ztvrdne a zase povolí. Nebolí to, ale cítíte tlak dolů. Co je správný postup?',
          options: [
            'Nic, poslíčky jsou normální v každém týdnu',
            'Napít se, jít na toaletu, lehnout si — a pokud stahy neustanou nebo jich je 4 a víc za hodinu, volat porodnici',
            'Vzít si lék proti bolesti a jít spát',
            'Počkat, jestli to bude i zítra',
          ],
          correct: 1,
          explain:
            'Před 37. týdnem platí přísnější pravidla, protože jde o možný předčasný porod. Čtyři a více stahů za hodinu, i nebolestivých, plus tlak dolů, je důvod ke kontaktu s porodnicí. Dehydratace a plný močový měchýř dělohu dráždí, proto se nejdřív zkusí napít a vymočit — ale když to nepomůže, volá se.',
        },
        {
          q: 'Ve 22. týdnu vám z pochvy odteklo malé množství čiré tekutiny. Nebolí nic, nekrvácíte. Co uděláte?',
          options: [
            'Nic, ve druhé polovině těhotenství je zvýšený výtok normální',
            'Použiji vložku a počkám, jestli to bude pokračovat, případně to řeknu na příští kontrole',
            'Volám porodnici a jedu na vyšetření — může jít o odtok plodové vody',
            'Vykoupu se, aby se to nezanítilo',
          ],
          correct: 2,
          explain:
            'Odtok plodové vody se nemusí projevit jako velké množství tekutiny naráz — někdy jde o opakované malé porce. Ověřit se to musí vyšetřením, doma to nepoznáte. Předčasný odtok plodové vody vyžaduje rychlé posouzení kvůli riziku infekce a předčasného porodu. Koupel je v takové situaci nevhodná.',
        },
        {
          q: 'V 8. týdnu jste si všimla, že vás přestala bolet prsa a polevila nevolnost. Nekrvácíte, nic vás nebolí. Co to znamená?',
          options: [
            'Určitě se něco stalo, těhotenství se nevyvíjí',
            'Nic to samo o sobě neznamená — intenzita příznaků kolísá; pokud vás to trápí, domluvte si kontrolu, ale není to nouzová situace',
            'Musím okamžitě na pohotovost',
            'Musím si zvýšit dávku progesteronu',
          ],
          correct: 1,
          explain:
            'Kolísání intenzity těhotenských příznaků je běžné a samo o sobě není varovným znamením. Zároveň nemá cenu se tím trápit týdny — telefonát a domluvená kontrola stojí míň než tři týdny strachu. Dávkování jakýchkoli léků, včetně progesteronu, si nikdy neupravujte sama.',
        },
        {
          q: 'Po dlouhé cestě autem vás ve 29. týdnu bolí jedno lýtko, je oteklé, teplé a začervenalé. Co uděláte?',
          options: [
            'Namažu ho chladivým gelem a dám nohy nahoru',
            'Půjdu na procházku, aby se to rozproudilo',
            'Volám lékaře nebo jedu na pohotovost — může jít o žilní trombózu',
            'Počkám do zítřka, jestli to nepřejde',
          ],
          correct: 2,
          explain:
            'Těhotenství samo zvyšuje srážlivost krve a dlouhé cestování riziko dále zvyšuje. Jednostranný otok, bolest, zarudnutí a teplo lýtka jsou typické příznaky hluboké žilní trombózy a patří k okamžitému posouzení. Pokud se přidá dušnost nebo bolest na hrudi, volejte záchrannou službu.',
        },
        {
          q: 'Ve 12. týdnu máte teplotu 38,5 °C a bolest v zádech vpravo pod žebry, štípe vás při močení. Co uděláte?',
          options: [
            'Vezmu si paracetamol a počkám, až to přejde',
            'Piju brusinkový džus a vydržím do pondělí',
            'Kontaktuji lékaře ještě dnes — může jít o zánět ledvin, který v těhotenství vyžaduje léčbu',
            'Nechám si od kamarádky antibiotika, která jí zbyla',
          ],
          correct: 2,
          explain:
            'Horečka s bolestí v zádech a potížemi při močení může znamenat zánět ledvinné pánvičky. V těhotenství je to stav, který je spojený s rizikem předčasného porodu a vyžaduje rychlou léčbu, často antibiotiky, které předepíše lékař. Užívání cizích léků je v těhotenství nebezpečné vždy.',
        },
      ],
    },
    {
      id: 'teh-video-co-vidite-na-ultrazvuku',
      kind: 'video',
      title: 'Video: co vlastně vidíte na ultrazvukovém snímku',
      excerpt:
        'Devět minut, po kterých přestanete na snímku hledat obličej a začnete rozumět tomu, co lékař měří.',
      body: `## O čem video je

Většina žen odchází z ultrazvuku s obrázkem, kterému nerozumí. Tohle video vás krok za krokem provede tím, co na snímku je — od prvního gestačního váčku po měření ve třetím trimestru.

**Část 1 — jak ultrazvuk funguje (1 minuta).** Proč jsou tekutiny černé a kosti bílé, proč se v raném těhotenství používá vaginální sonda a proč je obraz zrnitý.

**Část 2 — rané těhotenství (2 minuty).** Ukazujeme gestační váček jako tmavý kruh ve sliznici, žloutkový váček jako světlý prstýnek uvnitř a embryonální pól jako drobné zesílení na jeho okraji. Vysvětlujeme, proč se v šestém týdnu skutečně nedá poznat nic „lidského" a proč to nevadí.

**Část 3 — jak číst popis nálezu (2 minuty).** Nejčastější zkratky, se kterými se setkáte: **CRL** (temenokostrční délka), **GS** (gestační váček), **YS** (žloutkový váček), **FHR** nebo **AS** (srdeční akce), **NT** (šíjové projasnění), **BPD** (biparietální průměr), **HC** (obvod hlavy), **AC** (obvod břicha), **FL** (délka stehenní kosti), **EFW** (odhad hmotnosti), **AFI** nebo **VP** (množství plodové vody).

**Část 4 — biometrie a odhad hmotnosti (2 minuty).** Vysvětlujeme, proč je odhad hmotnosti opravdu jen odhad s poměrně širokou tolerancí, a proč jedno měření neříká skoro nic, zatímco tři měření v čase říkají hodně. Ukazujeme, jak vypadá růstová křivka a co znamená percentil.

**Část 5 — dopplerovské průtoky (1 minuta).** Barevné mapování a křivky průtoku v pupečníkové tepně, děložních tepnách a střední mozkové tepně. Co se z nich hodnotí a proč to má smysl jen v kontextu.

**Část 6 — co ultrazvuk neumí (1 minuta).** Nevyloučí všechny vady, závisí na poloze plodu a na podmínkách zobrazení. Nedokáže z něj nikdo číst budoucnost.

## Proč to stojí za devět minut

Protože potom se přestanete děsit slov jako „percentil", „doppler" nebo „AFI" a budete se umět zeptat na to, co vás skutečně zajímá. Nejde o to, abyste si nález četla sama — jde o to, abyste rozuměla tomu, co vám lékař říká.

> Video slouží ke vzdělávacím účelům. Hodnocení ultrazvukového nálezu patří výhradně lékaři; nikdy si nález nevykládejte sama a nesrovnávejte svá čísla s cizími.`,
      minutes: 9,
      phases: ['early_pregnancy', 'pregnancy', 'high_risk_pregnancy'],
      topics: ['tehotenstvi', 'vysledky'],
      level: 'deep',
      hero: 'sky',
      author: 'Tým IVF by Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ISUOG — doporučené postupy pro ultrazvuk v porodnictví'],
      publishedOn: '2026-04-16',
      boost: 0.6,
      mediaNote:
        'Uvidíte klidně komentované ultrazvukové sekvence s popisky přímo v obraze — struktury se postupně zvýrazňují barevně, takže je poznáte i bez zkušenosti. Mluvené slovo je pomalé, bez hudby, s pauzami na zastavení. Video má české titulky a slovníček zkratek na konci ke stažení.',
    },
    {
      id: 'teh-audio-deset-minut-klidu',
      kind: 'audio',
      title: 'Deset minut klidu: uzemnění pro dny, kdy je toho moc',
      excerpt:
        'Nahrávka pro chvíle mezi kontrolami, ve tři ráno nebo na nemocniční posteli — bez mantry, bez pozitivního myšlení.',
      body: `## Pro koho to je

Pro chvíle, kdy vám hlava jede v kruzích a vy potřebujete nějak vydržet nejbližší hodinu. Není to relaxace, která vás má přesvědčit, že je všechno v pořádku. Je to nástroj, jak dostat nervový systém z pohotovostního režimu na snesitelnou úroveň.

## Co nahrávka obsahuje

**0:00–1:30 — Usazení.** Najdete polohu, ve které jste v pohodě. Vsedě, vleže na boku, klidně v nemocniční posteli s hlavou zvednutou. Nic se nemusí, jen si najdete místo, kde vydržíte deset minut.

**1:30–3:30 — Dech, který zpomaluje.** Prodloužený výdech je nejrychlejší dostupný způsob, jak snížit aktivaci sympatiku. Vedeme vás nádechem na čtyři doby a výdechem na šest až osm. Bez zadržování dechu. Když vám ten poměr nesedí, upravíte si ho.

**3:30–6:00 — Ukotvení v přítomnosti.** Projdeme pět smyslů: co teď slyšíte, co cítíte pod dlaněmi, co vidíte, když otevřete oči, jakou máte v ústech chuť, co cítíte za vůni. Cílem není příjemný zážitek, ale to, že vaše pozornost je na chvíli tady, ne v příštím týdnu.

**6:00–8:00 — Skenování těla bez hodnocení.** Projdeme tělo shora dolů. Břicho zmiňujeme neutrálně — nevedeme vás k tomu, abyste hledala pohyby ani abyste se s někým „spojovala". Když je to pro vás teď obtížné, pozornost přesuneme jinam.

**8:00–10:00 — Návrat.** Postupné rozšíření pozornosti do místnosti a jedna věta, kterou si odnesete: **dnešek jste zvládla, a to je celá práce, kterou dnes máte.**

## Co v nahrávce neuslyšíte

Žádné „představte si své zdravé miminko". Žádné vizualizace, které dopadnou špatně, když se něco stane. Žádné „uvolněte se, ať to půjde". Tyhle věty ublížily dost ženám a v našich nahrávkách nejsou.

## Kdy ji pustit

- ve tři ráno, když nemůžete spát,
- v čekárně před vyšetřením,
- po telefonátu, který vás rozhodil,
- v nemocnici, když je na pokoji hluk,
- v den, kdy nechcete mluvit s nikým.

Můžete ji pustit i dvakrát za sebou. Nic tím nezkazíte.

> Nahrávka je nástroj pro zvládání napětí, ne léčba. Pokud vás úzkost dlouhodobě omezuje ve fungování, mluvte o tom se svým lékařem nebo psychologem.`,
      minutes: 10,
      phases: ['early_pregnancy', 'pregnancy', 'high_risk_pregnancy', 'hospitalization'],
      topics: ['psychika', 'sebepece', 'spanek'],
      level: 'comfort',
      hero: 'dawn',
      author: 'Gabi',
      publishedOn: '2026-04-23',
      boost: 0.7,
      mediaNote:
        'Uslyšíte klidný ženský hlas bez hudby na pozadí, jen s tichem mezi větami. Tempo je pomalé, pauzy dlouhé. Nahrávka je nastavená tak, aby fungovala i ve sluchátkách na vícelůžkovém pokoji — žádné náhlé změny hlasitosti, žádné zvonky na konci.',
    },
    {
      id: 'teh-pribeh-prvni-trimestr-po-ivf',
      kind: 'story',
      title: 'Příběh: první trimestr, ve kterém jsem se bála dýchat',
      excerpt:
        'Vyprávění ženy, která po čtyřech letech a třech transferech otěhotněla — a zjistila, že radost přichází mnohem později než pozitivní test.',
      body: `## Beta

Když mi zavolali s výsledkem, řekla jsem děkuji a zavěsila. Pak jsem seděla v autě na parkovišti u práce a čekala, kdy přijde ta euforie, o které všichni mluví. Nepřišla. Přišlo něco jako **strnulost**. Jako když stojíte v půlce zamrzlého rybníka a bojíte se pohnout.

Byl to čtvrtý rok. Třetí transfer. Před rokem jsem prošla ztrátou v osmém týdnu a od té doby jsem věděla něco, co ženy s prvním pozitivním testem nevědí: **že pozitivní test není konec ničeho.**

## Deset dní do ultrazvuku

Deset dní. Počítala jsem je po hodinách. Chodila jsem na záchod kontrolovat prádlo tak často, že mi kolegyně řekla, jestli nemám infekci. Řekla jsem, že mám. Nechtěla jsem, aby to někdo věděl.

Naučila jsem se v tomhle období jednu věc, která mi pak vydržela: **přestala jsem si číst příběhy s dobrým koncem.** Nepomáhaly. Jen mě přesvědčovaly, že mě čeká to samé, a když jsem si vzpomněla, že mě už jednou nečekalo, bylo to horší.

## První ultrazvuk

Lékařka mlčela asi dvacet vteřin. Za tu dobu jsem stihla pochovat celé těhotenství, rozhodnout se, že další cyklus už nedám, a rozmyslet si, komu to řeknu první.

Pak řekla: „Váček je v děloze, je tam žloutkový váček, embryo zatím neměřím, jste na den šestý týden. Přijďte za osm dní."

Odjela jsem domů a brečela jsem od parkoviště až k Rudné. Ne úlevou. Vztekem, že **jsem musela čekat dalších osm dní.**

## Srdíčko

Za osm dní tam bylo. Malé blikání. Lékařka otočila monitor a řekla: „Tady." Manžel mi mačkal ruku tak, že jsem měla druhý den modřinu.

A víte co? **Bála jsem se dál.** Jen jinak. Předtím jsem se bála, že tam nic není. Teď jsem se bála, že to zmizí.

Tehdy mi jedna sestra na klinice řekla větu, kterou používám dodnes: „Vy nečekáte na to, až budete v bezpečí. Vy čekáte na to, až tomu uvěříte. A to je jiný časový plán."

## Devátý až dvanáctý týden

Nejhorší období celého těhotenství. Klinika mě propustila a já jsem se cítila jako vyhozená z letadla. Objednací lhůta u gynekologa byla tři týdny. Tři týdny, kdy mě nikdo nekontroloval a já nevěděla, jestli je uvnitř všechno v pořádku.

Co mi pomohlo, a myslím to úplně vážně:

- **Napsala jsem si seznam varovných příznaků** a pověsila ho na ledničku. Když se nic z toho nedělo, měla jsem důkaz, že se nic neděje.
- **Přestala jsem číst diskuze.** Úplně. Zablokovala jsem si dvě skupiny.
- **Řekla jsem to třem lidem.** Ne rodině, ne v práci. Třem lidem, kteří mě neutěšovali frázemi.
- **Chodila jsem každý den na hodinu ven.** Nepomohlo to hlavě. Pomohlo to tělu a ono to nakonec dojede k hlavě taky.
- **Objednala jsem se k psycholožce.** Měla jsem pocit, že jsem směšná, protože jsem konečně dostala, co jsem chtěla. Nebyla jsem směšná. Byla jsem vyčerpaná.

## Kdy to zlomilo

Ne u prvního srdíčka. Ne po dvanáctém týdnu. Ne po morfologii.

Zlomilo to **někdy kolem dvacátého třetího týdne**, v úplně obyčejné středu, když jsem seděla v tramvaji a poprvé ucítila pořádný kopanec zevnitř. Ne bublinku. Kopanec. Něco, co udělal někdo jiný než já.

Rozbrečela jsem se v tramvaji, což mi bylo trapné, a paní naproti mi dala kapesník a neptala se. Byl to první moment, kdy jsem si dovolila myslet slovo **dítě** místo slova **těhotenství**.

## Co bych řekla ženě, která je teď v šestém týdnu

Že nemusí být šťastná. Že to není nevděk. Že strach, který má, není znamení, že se něco stane, ale znamení toho, co už se stalo.

A že to, kdy začne věřit, si neurčí rozhodnutím. Přijde to samo, později, než by chtěla, a pravděpodobně v nějaké úplně obyčejné chvíli, na kterou se nedá připravit.

> Tento příběh je osobní zkušenost, ne lékařské doporučení. Průběh každého těhotenství je jiný a jakékoli obavy o zdraví vždy patří k vašemu lékaři.`,
      minutes: 8,
      phases: ['early_pregnancy', 'pregnancy'],
      gestWeeks: [5, 24],
      topics: ['psychika', 'komunita', 'tehotenstvi'],
      modifiers: ['after_loss', 'repeated_failure'],
      level: 'comfort',
      hero: 'blush',
      author: 'Tým IVF by Gabi',
      publishedOn: '2026-05-07',
      boost: 0.75,
    },
    {
      id: 'teh-podcast-rizikove-tehotenstvi',
      kind: 'podcast',
      title: 'Podcast: rizikové těhotenství bez strašení',
      excerpt:
        'Rozhovor o tom, co znamená být „riziková“, jak si vyjednat srozumitelné odpovědi a jak se nezbláznit mezi kontrolami.',
      body: `## O čem díl je

Slovo „rizikové" je jedno z nejhůř vysvětlovaných slov v celém těhotenství. Tenhle díl se ho snaží rozebrat na součástky — co znamená organizačně, co medicínsky a co pro vás prakticky každý den.

## Struktura dílu

**Kapitola 1 (0:00–6:00) — Co ta nálepka je a co není.** Že jde o kategorii péče, ne o prognózu. Že do ní spadá žena s korigovanou štítnou žlázou i žena s preeklampsií a že mezi nimi je propast. Proč se po IVF sleduje pečlivěji a proč to samo o sobě není špatná zpráva.

**Kapitola 2 (6:00–14:00) — Jak se ptát, aby vám lékař odpověděl.** Konkrétní formulace, které fungují v ordinaci, kde máte deset minut. Rozdíl mezi otázkou „je to špatné?" a otázkou „jaký nález by změnil váš postup?". Proč si psát otázky předem a proč si zapisovat odpovědi.

**Kapitola 3 (14:00–22:00) — Život mezi kontrolami.** Nejtěžší část rizikového těhotenství není vyšetření, ale těch čtrnáct dní mezi nimi. Mluvíme o informační hygieně, o tom, jak si nastavit vlastní pravidla pro internet, a o tom, proč je seznam varovných příznaků na ledničce nejlepší lék na úzkost, jaký existuje.

**Kapitola 4 (22:00–30:00) — Klidový režim a co se změnilo.** Proč se od plošného ležení ustupuje, jaká má rizika a jak si místo obecného „ležte" vyjednat konkrétní pokyny.

**Kapitola 5 (30:00–38:00) — Hospitalizace.** Co si vzít, jak si zorganizovat den, jak mluvit s personálem a jak počítat dny nahoru místo dolů.

**Kapitola 6 (38:00–45:00) — Vztah, práce a okolí.** Jak rozdělit domácnost, když nemůžete fungovat jako dřív. Jak odpovídat na rady, o které jste nežádala. Co říct v práci a co si nechat pro sebe.

## Jedna věta, která z dílu zůstane

Být riziková neznamená, že se něco stane. Znamená, že vás někdo sleduje pozorněji — a **pozornost je to nejlepší, co v téhle situaci můžete mít.**

## Varovné příznaky, které v dílu zazní

V závěru procházíme seznam situací, kdy se volá okamžitě: krvácení, odtok plodové vody, pravidelné stahy před 37. týdnem, tlak dolů, snížení pohybů plodu, silná bolest hlavy s poruchami vidění a otoky obličeje, bolest pod pravým žebrem, horečka nad 38 °C, bolest a otok jednoho lýtka, náhlá dušnost.

> Podcast slouží ke vzdělávání a podpoře. Nenahrazuje lékařskou péči a nemůže zohlednit vaši konkrétní situaci — tu zná pouze váš ošetřující lékař.`,
      minutes: 45,
      phases: ['high_risk_pregnancy', 'pregnancy', 'hospitalization'],
      topics: ['rizikove', 'psychika', 'tehotenstvi'],
      modifiers: ['high_risk'],
      level: 'deep',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-05-21',
      boost: 0.6,
      mediaNote:
        'Uslyšíte klidný rozhovor dvou hlasů bez znělek uprostřed, s kapitolami, mezi kterými se dá přeskakovat. K dispozici je plný přepis a stažitelný jednostránkový seznam varovných příznaků, který se vejde na ledničku.',
    },
    // ITEMS_MARKER
  ],
  dailyCards: [
    // CARDS_MARKER
  ],
}
