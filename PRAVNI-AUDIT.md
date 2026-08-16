# Právní audit aplikace BlooMia

Česká republika a Evropská unie. Stav k 16. 8. 2026, commit `7dfe35a`.

**Nejsem právník a tenhle dokument není právní služba ani právní rada.**
Je to technicko-právní analýza: popisuje, co aplikace doopravdy dělá,
mapuje to na předpisy, které se na ni vztahují, a označuje místa, kde
rozhodnutí patří advokátovi. Před spuštěním placeného provozu musí projít
kontrolou.

Rozdíl proti běžnému auditu: každé tvrzení o tom, co aplikace dělá, je
ověřené v kódu, ne převzaté z marketingu. Kde jsem si nebyl jistý, je to
napsané.

---

## Shrnutí

| Oblast | Stav | Riziko |
|---|---|---|
| GDPR: architektura | velmi dobrá, data neopouštějí zařízení | nízké |
| GDPR: dokumentace | návrh existuje, chybí údaje a kontrola | **vysoké** |
| Zdravotnický prostředek (MDR) | aplikace jím není a nikde to netvrdí | nízké až střední |
| Spotřebitelské právo | podmínky jsou návrh, chybí povinné údaje | **vysoké** |
| Identifikace provozovatele | chybí IČO a sídlo | **vysoké** |
| Cookies a měření | nepoužívá se nic | nízké |
| Autorské právo k obsahu | není řešená licence ke zdrojům | střední |
| Přístupnost (EAA) | technicky dobrá, chybí prohlášení | střední |
| AI (AI Act) | aplikace neobsahuje AI systém | nízké |

**Tři věci brání spuštění placeného provozu:** chybějící identifikace
provozovatelky, nezkontrolované dokumenty a nevyřešené odstoupení od
smlouvy u digitálního obsahu.

---

## 1. Co aplikace doopravdy dělá

Bez tohohle se právní posouzení dělat nedá, a je to zároveň to, co obvykle
v auditech chybí. Vše ověřeno v kódu.

### 1.1 Kde jsou data

| Kde | Co | Odesílá se? |
|---|---|---|
| localStorage (`ivf-by-gabi/v1`) | profil, cykly, transfery, embrya, léky, hodnoty, deník, finance, dokumenty | ne |
| IndexedDB (`ivf-by-gabi/photos`) | fotografie, které uživatelka přidá | ne |
| Mezipaměť service workeru | jen soubory aplikace | ne |

**Aplikace nemá server, nemá databázi, nemá uživatelské účty a nemá
přihlašování.** Provozovatelka nemá k záznamům technický přístup a nemůže
ho získat.

### 1.2 Co odchází ven

Jediné odchozí volání v celé aplikaci je formulář zpětné vazby
(`feedback-send.ts:52`). Přenáší se:

- zvolené téma,
- jméno, pokud ho uživatelka vyplní (nepovinné),
- e-mailová adresa **jen tehdy**, když zaškrtne, že si přeje odpověď,
- hodnocení hvězdičkami,
- datum,
- text, který sama napíše.

**Deník, cykly, hodnoty ani fotografie se neodesílají nikdy.** Ověřeno
v `feedback.ts`, funkce `bodyFor`.

Přeposílací služba je navíc **vypnutá**: `ACCESS_KEY` je prázdný řetězec,
takže se dnes otevře poštovní program uživatelky a odeslání provádí ona
sama ze své schránky. V tom stavu nevzniká žádný zpracovatel.

### 1.3 Co aplikace nedělá

Ověřeno napříč kódem i obsahem: nestanovuje diagnózu, nepočítá individuální
šance, nehodnotí laboratorní hodnoty jako dobré nebo špatné, neurčuje
dávkování, nepředpovídá výsledek. Zobrazuje obecný vzdělávací obsah vybraný
podle fáze a dne, které si uživatelka sama zadala.

---

## 2. GDPR (nařízení 2016/679)

### 2.1 Vzniká vůbec zpracování?

U záznamů v zařízení uživatelky **provozovatelka osobní údaje
nezpracovává**: nemá k nim přístup, neurčuje jejich obsah a nedokáže je
získat. Zpracování vzniká až tam, kde se něco odešle nebo kde běží server.

To je pro posouzení zásadní a je to silná stránka celého návrhu. Znamená
to, že největší rizika GDPR se aplikace prostě netýkají.

**K posouzení advokátem:** jestli tenhle výklad platí i pro provozní
záznamy hostingu, který stránku doručuje.

### 2.2 Kde zpracování skutečně vzniká

| Kde | Údaje | Účel | Právní základ (návrh) |
|---|---|---|---|
| Zpětná vazba | e-mail, jméno, text | vyřízení podnětu | plnění smlouvy nebo oprávněný zájem, čl. 6/1 b) nebo f) |
| Zpětná vazba se zdravotním údajem | volný text | tentýž | **výslovný souhlas**, čl. 9/2 a) |
| Předplatné | e-mail, fakturační údaje | smlouva a daňová povinnost | čl. 6/1 b) a c) |
| Hosting | IP adresa, čas přístupu | provoz a bezpečnost | oprávněný zájem, čl. 6/1 f) |

### 2.3 Zvláštní kategorie údajů, článek 9

Údaje o léčbě neplodnosti jsou údaje o zdravotním stavu. Aplikace je
řeší nejlepším možným způsobem: nechá je v telefonu. Zbývá jediné riziko,
volný text ve zpětné vazbě, a to je v zásadách pokryté výslovným souhlasem
a větou, aby tam citlivé údaje uživatelka nepsala.

**K posouzení advokátem:** zda rozsah zpracování zakládá povinnost jmenovat
pověřence pro ochranu osobních údajů podle čl. 37. Podle mého čtení ne,
protože nejde o rozsáhlé zpracování zvláštních kategorií, ale je to přesně
ten typ závěru, který nemám dělat já.

### 2.4 Práva subjektu údajů

| Právo | Jak je naplněné |
|---|---|
| přístup | data má uživatelka fyzicky u sebe, aplikace umí export do zálohy |
| oprava | přímo v aplikaci |
| **výmaz** | „Smazat všechno“, **od commitu `7dfe35a` maže i fotografie** |
| přenositelnost | záloha je strojově čitelný JSON, od `7dfe35a` volitelně šifrovaný |
| omezení, námitka | u údajů vedených provozovatelkou, e-mailem |
| stížnost | ÚOOÚ, uvedeno v zásadách |

**Poznámka k historii:** do commitu `7dfe35a` tlačítko „Smazat všechno“
nemazalo fotografie z IndexedDB. Bylo to v rozporu s tím, co dialog
sliboval, a s právem na výmaz. Opraveno a ověřeno.

### 2.5 Co ještě chybí

1. **Záznamy o činnostech zpracování** podle čl. 30. Pro drobného
   podnikatele platí výjimka, ale u zvláštních kategorií se na ni obvykle
   spolehnout nedá. Doporučuji vést je, i kdyby se ukázalo, že povinné
   nejsou.
2. **Zpracovatelské smlouvy** podle čl. 28: hosting, platební brána,
   případně přeposílací služba formuláře a účetní.
3. **Posouzení předání mimo EHP** u každého z nich.
4. **Posouzení vlivu (DPIA)** podle čl. 35. Podle mého čtení nevzniká,
   protože se zdravotní údaje na straně provozovatelky nezpracovávají,
   ale patří to na seznam pro advokáta.
5. **Postup pro ohlášení porušení** podle čl. 33 a 34. U téhle
   architektury je únik nepravděpodobný, ale mít napsaný postup je levné.

---

## 3. Zdravotnický prostředek: MDR a zákon č. 375/2022 Sb.

Tohle je nejpodceňovanější riziko podobných aplikací, protože hranice
nevede podle toho, jak se aplikace tváří, ale podle jejího **účelu určení**.

### 3.1 Posouzení

Software je zdravotnickým prostředkem, když je výrobcem určen mimo jiné
k diagnostice, prevenci, sledování, předpovídání, prognóze nebo léčbě.
BlooMia podle kódu i podle textů:

- **nediagnostikuje** ani nenavrhuje diagnózu,
- **nepředpovídá** výsledek léčby ani nepočítá šance,
- **nevyhodnocuje** laboratorní hodnoty (vykresluje je v čase, výklad
  výslovně nechává lékaři),
- **neurčuje ani nemění dávkování**, léky jsou poznámka podle pokynů
  kliniky,
- **nesleduje fyziologické funkce** za účelem posouzení stavu.

Ukládá, co uživatelka zapíše, počítá dny a podle nich vybírá obecný
vzdělávací obsah. To odpovídá spíš prostému uchovávání a zobrazování dat.

**Závěr:** velmi pravděpodobně nejde o zdravotnický prostředek. Aplikace to
navíc na třech místech výslovně uvádí (zdravotní upozornění, patička
prodejní stránky, sekce „Co BlooMia nedělá“).

### 3.2 Co riziko zvyšuje a čeho se vyvarovat

Hranici by posunulo, kdyby aplikace kdykoli v budoucnu začala:

- počítat pravděpodobnost otěhotnění nebo úspěšnosti transferu,
- označovat hodnoty jako v normě nebo mimo normu,
- doporučovat úpravu dávek,
- vyhodnocovat příznaky a naznačovat výsledek,
- používat chatbota, který odpovídá na zdravotní dotazy.

Kterákoli z těch funkcí by znamenala certifikaci a je to rozhodnutí
s náklady v řádu statisíců, ne funkce na odpoledne.

### 3.3 Reklama

Prodejní stránka nesmí slibovat léčebný účinek ani zvýšení šance na
otěhotnění. Prošel jsem ji: neslibuje, a naopak výslovně říká, že příznaky
nejsou důkaz a že aplikace výsledek nepředpovídá. Před spuštěním doporučuji
nechat posoudit i z pohledu předpisů o reklamě.

---

## 4. Spotřebitelské právo

### 4.1 Povinná identifikace, kde to chybí

Podle občanského zákoníku a zákona o ochraně spotřebitele musí být před
uzavřením smlouvy dostupné: jméno, sídlo, IČO, kontakt, popis služby, cena
včetně daní, doba trvání a podmínky ukončení.

**Stav:** jméno a kontakt jsou. **IČO a sídlo chybí**, v dokumentech je
celkem 42 míst označených `DOPLNIT`. Bez nich se placený provoz spustit
nedá.

### 4.2 Odstoupení od smlouvy, nejcitlivější místo

U smluv uzavřených na dálku má spotřebitel zpravidla 14 dnů na odstoupení.
U digitálního obsahu dodávaného bez hmotného nosiče může toto právo
zaniknout, pokud plnění začalo s výslovným předchozím souhlasem
spotřebitele a s poučením, že tím právo ztrácí.

Prakticky to znamená, že **v objednávce musí být zaškrtávací pole
s poučením**, jinak zůstane čtrnáctidenní lhůta v plné šíři a bude se
vracet zaplacené předplatné.

Obchodní podmínky s tím počítají a mají to napsané. **Přesné znění poučení
i formuláře pro odstoupení musí schválit advokát.** Tady si netroufám.

### 4.3 Automatické obnovení

Podmínky mají připravené obě varianty a jednu je potřeba vybrat. Když se
zvolí automatické obnovení, přibývají povinnosti: informovat předem,
umožnit snadné zrušení a jasně uvést cenu dalšího období.

Doporučení: **na začátku bez automatického obnovení.** Míň právních
povinností, míň reklamací a u aplikace, kterou žena používá po dobu léčby,
je to i slušnější.

### 4.4 Reklamace a vady digitálního obsahu

Podmínky mají článek o reklamacích, lhůtě 30 dnů a o tom, co vadou není.
K posouzení advokátem: soulad se současnou úpravou vad digitálního obsahu.

### 4.5 Mimosoudní řešení sporů

Uvedená Česká obchodní inspekce je správný orgán. Odkaz na evropskou
platformu ODR jsem záměrně nepřidával, protože její provoz byl ukončen;
**ověřit aktuální stav** je jedna z věcí pro advokáta.

### 4.6 Ceny a DPH

Cena 199 Kč měsíčně musí být uvedena jako konečná pro spotřebitele. Podle
toho, jestli je provozovatelka plátkyní DPH, se formulace liší. Chybí to
a je to v dokumentech označené.

**Pozor na jednu věc, kterou lidé přehlížejí:** při prodeji digitální
služby spotřebitelům v jiných státech EU se DPH odvádí ve státě
spotřebitele (režim OSS), a to od první koruny, bez ochranného limitu.
Pokud se aplikace bude prodávat jen v Česku, je to jednodušší. **Rozhodnout
a probrat s daňovým poradcem.**

---

## 5. Cookies a elektronická komunikace

Podle zákona o elektronických komunikacích je souhlas potřeba pro ukládání
do zařízení, které není nezbytné pro poskytnutí služby.

**Stav aplikace:** žádné cookies, žádné analytické ani reklamní nástroje.
localStorage a IndexedDB drží výhradně data, bez kterých by služba
nefungovala, tedy záznamy uživatelky.

**Závěr:** cookies lišta není potřeba a nasazovat ji by bylo matoucí.

**Riziko do budoucna:** jakmile se na prodejní stránku přidá měřicí
nástroj, mění se to okamžitě. Souvisí to s bezpečnostním nálezem 1.4:
stránka a aplikace sdílí jeden původ, takže takový skript by měl technickou
možnost číst deníky. Od commitu `7dfe35a` to omezuje CSP, ale skript vložený
přímo do stránky by CSP obešel.

---

## 6. Autorské právo a obsah

### 6.1 Vlastní obsah

Texty jsou vlastní. V patičce je doložka o vyhrazení práv.

### 6.2 Zdroje a odborné garance

**Tohle je nález, který stojí za pozornost.** Z 404 položek katalogu nese
větu o odborné garanci 304 a zdroje má uvedených 219.

Otázky pro advokáta i pro Gabrielu:

1. Kdo je „odborný garant“ a existuje s ním písemná dohoda? Uvádět
   garanci bez smluvního podkladu je riziko.
2. Jsou uvedené zdroje jen odkazy, nebo se z nich přebírá text? Odkaz je
   v pořádku, převzatá pasáž potřebuje licenci.
3. Nepoužívají se citace nad rámec citační licence?

### 6.3 Písma a knihovny

Fraunces, DM Sans i Bodoni Moda jsou pod licencí SIL Open Font License,
která povoluje vložení do produktu. Aplikace nemá žádné běhové závislosti
třetích stran, takže licenční řetěz je krátký a čistý.

**Doporučení:** přidat do repozitáře soubor s licencemi písem. Je to
podmínka OFL a zabere to pět minut.

---

## 7. Přístupnost: evropský akt o přístupnosti

Směrnice (EU) 2019/882 se vztahuje mimo jiné na služby elektronického
obchodu poskytované spotřebitelům. Mikropodniky poskytující služby mají
výjimku, ale je vázaná na počet zaměstnanců a obrat.

**Technický stav je nadprůměrný:** ověřeno měřením, texty procházejí
kontrastem AA, aplikace nemá vodorovné přetečení na žádné z testovaných
šířek ani při dvousetprocentním písmu, ozdobné prvky jsou skryté čtečkám,
obrázky mají popisky, viditelné zaměření je zapnuté.

**Co chybí:** prohlášení o přístupnosti a posouzení, jestli se výjimka pro
mikropodniky uplatní.

---

## 8. AI Act

Nařízení (EU) 2024/1689. **Aplikace neobsahuje AI systém**: veškerý výběr
obsahu se děje pevnými pravidly nad daty, která uživatelka zadala. Žádný
model, žádné volání jazykového modelu za běhu.

Povinnosti z AI Actu proto nevznikají. Prodejní stránka navíc výslovně
uvádí, že aplikace nepoužívá chatbota jako náhradu odborného rozhodování,
což je dobře.

**Pozor do budoucna:** kdyby se přidala AI funkce ve zdravotním kontextu,
posouzení se mění zásadně a spolu s ním i posouzení podle MDR.

---

## 9. Co dělat, seřazeno

### Blokující pro placený provoz

1. Doplnit IČO, sídlo, zápis v rejstříku a informaci o DPH (42 míst).
2. Nechat všechny tři dokumenty zkontrolovat advokátem se zaměřením na
   spotřebitelské právo a GDPR.
3. Vyřešit odstoupení od smlouvy u digitálního obsahu včetně znění
   souhlasu v objednávce a vzorového formuláře.
4. Rozhodnout o automatickém obnovení. Doporučuji bez něj.
5. Uzavřít zpracovatelské smlouvy podle čl. 28.
6. Probrat DPH a případný režim OSS s daňovým poradcem.

### Blokující i pro bezplatný provoz

7. Zveřejnit zásady ochrany osobních údajů s doplněnými údaji. Platí
   i bez placení, protože web běží a hosting zpracovává provozní záznamy.
8. Ověřit smluvní podklad k větě o odborné garanci u 304 položek obsahu.

### Doporučené

9. Vést záznamy o činnostech zpracování.
10. Napsat postup pro případ porušení zabezpečení.
11. Přidat prohlášení o přístupnosti.
12. Přidat soubor s licencemi písem.
13. Projít zdroje u obsahu a ověřit licence k převzatým pasážím.

### Co dělat nemá

14. Nenasazovat cookies lištu, dokud není co měřit. Byla by nepravdivá.
15. Nepřidávat funkce, které posouvají aplikaci k zdravotnickému
    prostředku, viz 3.2.

---

## 10. Co advokátovi předat

Aby kontrola nestála víc, než musí:

- tento dokument,
- `BEZPECNOST.md`, analýzu bezpečnosti,
- tři dokumenty z `/obchodni-podminky`, `/ochrana-osobnich-udaju`
  a `/zdravotni-upozorneni`,
- shrnutí architektury z části 1, protože právě to obvykle rozhodne
  o posouzení podle GDPR i podle MDR,
- informaci, že platba zatím neběží a v jaké podobě se plánuje.

Nejužitečnější otázka na úvod schůzky: **jestli lze potvrdit, že aplikace
není zdravotnický prostředek.** Od té odpovědi se odvíjí všechno ostatní.
