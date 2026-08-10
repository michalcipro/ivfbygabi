# Audit před ostrým provozem

Stav k 10. 8. 2026, větev `claude/ivf-gabi-platform-mxgp3c`.

Všechna čísla v tomhle dokumentu jsou změřená, ne odhadnutá. Kde něco nevím,
je to napsané.

---

## Co je hotové

Tohle není seznam pro pochvalu. Je to základ, ze kterého se počítá zbytek.

| Co | Měření |
| --- | --- |
| Obsah | 927 položek v knihovně |
| Testy | 284 prochází, 0 padá |
| Závislosti za běhu | žádné |
| Velikost | 2649 kB syrově |
| První vykreslení (iPhone 13) | FCP 296 ms, load 266 ms |
| Přepnutí obrazovky | 31 až 36 ms |
| Paměť | 11 MB |
| Bez sítě | otevře se i bez signálu, 0 požadavků |
| Vodorovný posuv | 0 z 1 280 kombinací tras a šířek |
| Formulářové prvky bez názvu | 0 |
| Obrázky bez `alt` | 0 |
| `console.log`, `TODO`, `FIXME` ve zdroji | 0 |

Aplikace je z technického hlediska hotová věc. Blokátory níž nejsou o kódu.
Jsou o tom, co aplikace tvrdí, komu patří data a jak se za ni zaplatí.

---

## Blokátory

Věci, které se nesmí pustit k lidem tak, jak jsou teď. Body 5 a 6 už
vyřešené jsou, zůstávají tu i s tím, co se s nimi udělalo.

### 1. „Odborně garantováno" u 291 položek bez garanta

291 z 927 článků nese větu o odborné garanci:

- 149× *Odborně garantováno lékařem reprodukční medicíny.*
- 127× *Odborně garantováno – reprodukční medicína*
- 9× *Odborně garantováno – psychologická podpora*
- 3× *Odborně garantováno – perinatální psychologie*
- 2× klinická výživa, 1× fyzioterapie

Pokud ty texty žádný lékař nečetl, je to nepravdivé tvrzení vůči spotřebitelce
a u zdravotního obsahu to není maličkost. Žena se podle toho rozhoduje, kdy
volat kliniku.

Cesty jsou dvě a obě jsou v pořádku:

- **Sehnat skutečného garanta**, nechat ho projít alespoň lékařské okruhy
  (embryologie, vyšetření, diagnózy, léky, po transferu) a psát jeho jméno a
  odbornost: *Odborně zkontrolovala MUDr. Jméno Příjmení, reprodukční medicína,
  8/2026*. Konkrétní jméno má úplně jinou váhu než anonymní razítko.
- **Nebo formulaci nahradit tím, co je pravda**: *Vychází z doporučených postupů
  ESHRE a z české praxe. Není to lékařská rada.* U 206 položek už zdroje jsou,
  takže je na čem stavět.

Co nejde: nechat to takhle.

### 2. Aplikace nemá jediný právní dokument

V celém zdrojovém kódu není zmínka o zásadách ochrany osobních údajů,
obchodních podmínkách, provozovateli ani IČO. Pro placenou službu to nejde.

Chybí:

- **Zásady ochrany osobních údajů.** Paradoxně to bude krátký a hezký dokument,
  protože data z telefonu nikam neodcházejí. Ale existovat musí, a to i tehdy,
  když se nic neposílá.
- **Obchodní podmínky** včetně odstoupení od smlouvy do 14 dnů a toho, jak to
  funguje u digitálního obsahu.
- **Identifikace provozovatele**: jméno, IČO, sídlo, kontakt.
- **Zdravotní disclaimer** viditelný dřív, než někdo zaplatí.

Nejsem právník. Tohle je seznam k předání někomu, kdo dělá e-commerce a
zdravotní data, ne hotové řešení.

### 3. Není rozhodnuto, jestli je Bloomia zdravotnický prostředek

Aplikace ženě říká, co se dnes může dít s jejím embryem, odkdy má testování
smysl a kdy zvednout telefon na kliniku. Podle evropského nařízení MDR
2017/745 rozhoduje **určený účel**: software pro predikci nebo prognózu stavu
je zdravotnický prostředek se vším, co k tomu patří.

Bloomia podle mě prostředek **není**, je to informace a deník, ne nástroj,
který by cokoliv počítal o konkrétní pacientce. Ale tohle musí být vědomé a
sepsané rozhodnutí, ne náhoda. Konkrétně:

1. napsat určení účelu jednou větou a držet se ho,
2. projít obsah na formulace, které předpovídají nebo diagnostikují,
3. nechat to posoudit někým, kdo MDR dělá.

Věta *Text popisuje obvyklý průběh, ne váš* na konci každého článku po
transferu je přesně ta správná obrana. Musí zůstat.

### 4. Platba je jenom přepínač

`d.subscription.active` je boolean, který se překlopí tlačítkem. Nic negatuje,
nic neúčtuje, nic nefakturuje. Za 199 Kč měsíčně se dnes zaplatit nedá.

### 5. Data ženy žijí jen v prohlížeči a iOS je maže (vyřešeno)

Tohle byla nejvážnější technická věc v celém auditu.

- Safari na iPhonu maže `localStorage` i IndexedDB po **7 dnech bez otevření
  stránky**. Není to chyba, je to záměr (ITP).
- Výjimka existuje: stránka **přidaná na plochu** se nemaže.
- Takže: žena zaplatí, píše si deník, odjede na dva týdny k moři, a vrátí se
  k prázdné aplikaci.

A záchranná brzda nefungovala. V Nastavení bylo tlačítko **Záloha dat (JSON)**,
které soubor stáhlo. **Obnova neexistovala.** To je horší než žádné tlačítko,
protože slibuje jistotu, kterou nemá.

**Co se udělalo:**

1. **Obnova ze zálohy.** Nová obrazovka Záloha a obnova. Soubor se nejdřív
   zkontroluje a ukáže se, co v něm je (datum, rozsah deníku, počty), a teprve
   po potvrzení se cokoliv přepíše. Prázdná záloha, cizí soubor ani záloha
   z novější verze neprojdou. Načte se i plochý tvar ze starších verzí, aby
   ženy o už stažené zálohy nepřišly. Ověřeno v prohlížeči: záloha, smazání
   všeho, obnova, stav bit po bitu stejný.
2. **Sdílení místo stahování.** Na iPhonu se otevře systémové sdílení, takže
   jde zálohu uložit do Souborů nebo na iCloud. Stahování zůstává jako
   záložní cesta pro počítač a Android.
3. **PWA.** Manifest, ikony a service worker. Přidání na plochu je jediná
   dokumentovaná výjimka ze sedmidenního mazání. Aplikace se navíc otevře
   i bez signálu, což je přesně situace v čekárně. Ověřeno: se sítí vypnutou
   naskočí celá.
4. **Návod na instalaci** rovnou v aplikaci, krok za krokem, jen na zařízeních,
   kde to dává smysl.
5. **Připomínka zálohy.** Mlčí, dokud není co ztratit. Na ploše se ozve
   později, protože tam je riziko menší.
6. **Trvalé úložiště.** Aplikace o něj umí požádat a řekne, co prohlížeč
   odpověděl. Nic neslibuje: na iPhonu tohle sedmidenní mazání nezruší
   a je to tam napsané.

### 6. Když se úložiště naplní, aplikace to zamlčí (vyřešeno)

```ts
export function save(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // Plný nebo zakázaný storage: aplikace dál běží, jen si nic nezapamatuje.
  }
}
```

Ověřeno v prohlížeči: při plném úložišti aplikace **nespadne, nic nenahlásí a
dál vypadá, že ukládá**. Žena píše deník do prázdna.

Kapacita sama o sobě problém není. Simulované tři roky provozu (1 100 zápisů
v deníku, 300 cvičení) zabraly 432 kB z asi 5 MB, tedy 8 %. Problém je, že
fotky protokolů a laboratorních výsledků jdou do IndexedDB a tam se strop
najde mnohem dřív. Aplikace na to musí umět upozornit.

Zablokované úložiště (Safari v anonymním režimu) je naopak ošetřené správně:
0 chyb, aplikace se normálně vykreslí.

**Co se udělalo:** `save()` si selhání pamatuje. Od té chvíle se varování
ukáže na Dnes, v Nastavení i na obrazovce Záloha a obnova, a to s jedinou
rozumnou radou: udělat si hned zálohu. Ověřeno se simulovaným plným
úložištěm.

---

## Vážné, ale nejsou to blokátory

### 7. Stránka běžela v quirks mode (opraveno)

`scripts/app.template.html` neměl `<!doctype html>`, takže prohlížeč
vykresloval celou aplikaci ve zpětně kompatibilním režimu
(`document.compatMode === "BackCompat"`). Chodilo to, protože CSS má všude
`box-sizing: border-box`, ale spoléhat se na to napříč prohlížeči nešlo.

Opraveno v tomto commitu: doplněn `<!doctype html>`, `<html lang="cs">` a
`<meta charset="utf-8">`. Mobilní audit jsem po zásahu spustil znovu celý:
1 264 kombinací, 0 vodorovných posunů, 0 chyb, žádný rozdíl proti stavu před
opravou. Testy i typecheck procházejí.

`charset` chyběl taky. Na Vercelu to fungovalo, protože kódování posílá server
v hlavičce, ale soubor otevřený z disku nebo naservírovaný odjinud mohl
rozsypat každou českou diakritiku.

### 8. Osobní e-mail v balíčku

`gabrielazbihlej@gmail.com` je v `app/index.html` v čitelné podobě. Roboti,
kteří sbírají adresy, ho najdou. Lepší je doménová adresa
(`ahoj@bloomia.cz`) a přeposílání.

### 9. Formulář „Napište mi" zatím neodesílá

`ACCESS_KEY = ''`, takže se odesílání přepne na `mailto:`. Na telefonu, kde
není nastavená pošta, se nestane vůbec nic a žena si myslí, že odeslala. Chce
to buď klíč z web3forms, nebo vlastní endpoint.

Klíč do frontendu patřit může, protože je to veřejný identifikátor formuláře, ne
heslo. Přihlašovací údaje k e-mailu v kódu nejsou a být nesmí.

### 10. IČO chybí

`const ICO = ''` v `src/client/screens-obloomii.ts`. Obrazovka „Kdo stojí za
Bloomií" ho zatím nevypisuje vůbec, což je správné chování prázdné hodnoty,
ale pro placenou službu je to povinný údaj. Čekám na skutečné číslo.

### 11. Žádná ikona

Chybí favicon i `apple-touch-icon`. Na ploše telefonu by se aplikace ukázala
jako zmenšený snímek stránky. Řeší se spolu s PWA.

### 12. Všechno je v jednom souboru

689 kB brotli se stáhne při každé návštěvě znovu, protože se nedá cachovat po
částech a jakákoliv změna obsahu zneplatní celek. Pro první spuštění to je v
pořádku. Pro ženu, která aplikaci otvírá každý den, je to zbytečné. Přesně
tohle řeší service worker.

### 13. Dotykové cíle 32 až 37 px

WCAG 2.2 na úrovni AA chce 24 × 24 px a to splňuje všechno. Apple a WCAG AAA
chtějí 44 × 44 px a řada tlačítek má výšku 32 až 37 px. Nejhorší je Nastavení
(29 malých cílů), pak Napište mi (10) a Osa (10). Není to blokátor, ale na
telefonu v čekárně se to pozná.

### 14. V repozitáři jsou zbytky Next.js

`next.config.ts`, `postcss.config.mjs`, `next-env.d.ts`, `data/`, `.next/`.
Nic z toho se nepoužívá. Mate to detekci frameworku na Vercelu i každého, kdo
repozitář otevře.

### 15. Nulové měření provozu

Žádná analytika. Je to slušnost vůči uživatelce, ale spouštíte naslepo:
nebudete vědět, jestli někdo čte sedmý den po transferu, kde ženy odcházejí a
co hledají a nenajdou. Pokud se něco měřit bude, musí to být bez osobních dat
a musí to být napsané v zásadách.

---

## Má smysl jít cestou PWA a landing page?

Obojí ano. Ale z jiných důvodů, než se obvykle uvádí.

### PWA: ano, a je to nejdůležitější technický krok před spuštěním

Ne kvůli tomu, aby se to dalo nazývat aplikací. Kvůli třem konkrétním věcem:

1. **iOS jinak maže data.** Přidání na plochu je dokumentovaná výjimka z
   sedmidenního mazání. U placeného deníku je to rozdíl mezi službou, která
   přežije dovolenou, a službou, která ne. Tohle samo o sobě rozhoduje.
2. **Čekárna.** Aplikace se nejčastěji otevře v čekárně kliniky a na chodbě
   nemocnice, kde je signál mizerný. Se service workerem naskočí okamžitě a
   funguje. Ověřeno: aplikace už dnes v režimu bez sítě běží celá a nedělá
   jediný síťový požadavek. Chybí jen to, aby se vůbec načetla.
3. **Opakované načtení.** Dnes 689 kB pokaždé, se service workerem nula.

Práce: manifest, sada ikon, service worker s verzovanou cache, tok aktualizace
(„je tu nová verze, obnovit") a návod na instalaci. Zhruba den.

Na co si dát pozor: špatně napsaný service worker umí naservírovat starou
verzi aplikace navždy. Cache se musí verzovat a při každém buildu měnit.

Co PWA **neřeší**: není to náhrada za obnovu ze zálohy. Když si žena ikonu
smaže nebo vymění telefon, data jsou pryč stejně. Proto import **i** PWA, ne
jedno místo druhého.

### Landing page: ano, a odděleně od aplikace

1. **Aplikace musí zůstat bez marketingu.** Uživatelka nesmí platit jen za
   šťastný konec a nesmí být uvnitř tlačena k ničemu dalšímu. Ceny, reference
   a odkazy na Instagram do klidného místa nepatří.
2. **Právní dokumenty musí být veřejné před platbou**, ne až za přihlášením.
3. **Vyhledávání a sdílení.** Aplikace je jeden soubor s jedním titulkem, který
   se celý vykreslí JavaScriptem. Ve vyhledávání se neobjeví a ve sdíleném
   odkazu nebude náhled. Statická stránka s pořádnými meta a OG obrázkem ano.
4. **Návod na instalaci.** iOS nikdy sám nenabídne přidání na plochu. Někdo
   musí říct „klepněte na Sdílet a pak Přidat na plochu" a ukázat to na
   obrázku. To je práce pro landing page.

Tvar: `bloomia.cz` statická stránka, `bloomia.cz/app` aplikace. Sekce: co to
je, kdo je Gabi, co je uvnitř (skutečné snímky, ne obrázky z fotobanky), cena,
odkazy na dokumenty, návod na instalaci. Žádné odpočty a žádný nátlak, bylo by
to proti všemu, na čem je aplikace postavená.

---

## Kroky k nasazení

V pořadí, ve kterém na sebe navazují.

### Fáze 0: hygiena, jeden den

1. ~~Doplnit `<!doctype html>`, `lang` a `charset`~~ hotovo v tomto commitu.
2. Doplnit skutečné IČO do `src/client/screens-obloomii.ts`.
3. Smazat zbytky Next.js: `next.config.ts`, `postcss.config.mjs`,
   `next-env.d.ts`, `data/`.

### Fáze 1: obsahová a právní pravda (blokuje spuštění)

4. Rozhodnout o „Odborně garantováno" u 291 položek. Buď jmenovaný garant,
   nebo jiná formulace.
5. Napsat určení účelu aplikace a nechat posoudit MDR.
6. Zásady ochrany osobních údajů.
7. Obchodní podmínky včetně odstoupení do 14 dnů.
8. Identifikace provozovatele: jméno, IČO, sídlo, kontakt.
9. Zdravotní disclaimer viditelný před platbou.
10. Body 4 až 9 nechat projít právničkou na e-commerce a zdravotní data.

Tahle fáze je nejpomalejší a nezávisí na kódu. Začít se s ní má první.

### Fáze 2: data ženy nesmí zmizet (blokuje spuštění)

11. ~~**Obnova ze zálohy** včetně fotek z IndexedDB a kontroly verze~~ hotovo.
12. ~~**Hlídání kvóty.** Když `save()` selže, říct to nahlas~~ hotovo.
13. ~~**Připomínka zálohy** jednou za čas, ne otravně~~ hotovo.
14. ~~**PWA**: manifest, ikony, service worker, tok aktualizace~~ hotovo.
15. ~~**Návod na instalaci na plochu** v aplikaci~~ hotovo v aplikaci,
    zbývá na landing page.
16. Vyzkoušet přidání na plochu na skutečném iPhonu a ověřit, že data
    přežijí týden bez otevření. Tohle emulátor neukáže.

### Fáze 3: platba

16. Vybrat bránu. Stripe umí předplatné i faktury, ale je potřeba mít vyřešené
    DPH u zákaznic z EU. GoPay a Comgate jsou české alternativy s jednodušší
    administrativou.
17. Napojit `d.subscription` na skutečný stav z brány, ne na přepínač.
18. Rozhodnout, co je zdarma a co za 199 Kč. Dnes není zamčené nic.
19. Faktury a jejich doručení.

### Fáze 4: landing page a doména

20. Doména, DNS, HTTPS.
21. Landing page se sekcemi popsanými výš.
22. Favicon, `apple-touch-icon`, OG obrázek.
23. Odkazy na právní dokumenty z landing page i z aplikace.

### Fáze 5: provoz

24. Formulář „Napište mi": klíč nebo vlastní endpoint a doménová adresa místo
    osobní.
25. Sledování chyb, které neposílá obsah deníku.
26. Rozhodnout o měření provozu a napsat to do zásad.
27. Kontakt, který funguje i když aplikace nejede.

### Fáze 6: než se pustí lidi

28. Test na skutečných zařízeních: starší iPhone se Safari, Android, iPad.
    Emulátor sedmidenní mazání dat neukáže.
29. Zkušební provoz s 5 až 10 ženami v různých fázích léčby, ideálně alespoň
    jednou po neúspěchu.
30. Projít nový obsah na zakázané formulace a em pomlčky. Testy to hlídají
    automaticky, ale jen v tom, co už v repozitáři je.

---

## Co blokuje nejdéle

Kód je z toho všeho ta rychlejší část. Fáze 2 je zhruba tři až čtyři dny práce,
fáze 3 týden, fáze 4 pár dní.

Doba do spuštění je daná fází 1: rozhodnutím o garantovi obsahu a právními
dokumenty. Obojí závisí na lidech mimo repozitář. Proto se s tím má začít dřív
než s čímkoliv jiným.
