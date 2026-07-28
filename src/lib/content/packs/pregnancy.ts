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
    // ITEMS_MARKER
  ],
  dailyCards: [
    // CARDS_MARKER
  ],
}
