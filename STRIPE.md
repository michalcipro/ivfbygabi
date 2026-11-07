# Zapojení Stripe

Stav k 7. 11. 2026. Tenhle soubor je plán, ne hotová věc. Shrnuje, co je
potřeba rozhodnout, co nastavit na straně Stripe a co pak doprogramuji.

---

## 1. Rozhodnutí, které musí padnout první

Stripe umí vybrat peníze během odpoledne. Problém není výběr, ale tohle:

**Aplikace nemá server ani účty.** Běží celá v telefonu, data nikam
neodesílá. Dnešní „předplatné“ je jediný příznak v místním úložišti
a přepne ho kdokoliv za minutu. Vybírat za to peníze nejde.

Existují tři cesty a doporučuji třetí.

### A. Důvěra

Zaplatí přes Stripe, aplikace si po návratu nastaví příznak. Žádný server.
Obejde to každý, kdo otevře vývojářské nástroje. Nedoporučuji vybírat
peníze za něco, co se vypne přepínačem.

### B. Účty a server

Klasické řešení: registrace, přihlášení, obsah ze serveru. Znamená to
opustit celý princip aplikace. Zdravotní záznamy by musely na server, což
je přesně to, co jsme slíbili nedělat. Nedoporučuji.

### C. Klíč předplatného ověřovaný u Stripe (doporučeno)

Zaplatí přes Stripe. Malá serverová funkce u Vercelu jí vydá
**klíč předplatného**: krátký podepsaný řetězec, ve kterém není nic než
číslo jejího předplatného ve Stripe. Klíč se uloží v aplikaci a jde i do
zálohy, takže přežije přenos do jiného telefonu.

Když je aplikace online, jednou za čas ten klíč pošle naší funkci. Ta se
zeptá Stripe, jestli předplatné pořád běží, a vrátí **přístupový lístek
platný 35 dní**. Aplikace si ho ověří podpisem a dál funguje i bez signálu.

Co to splňuje:

- **žádné účty**, nic se nikam neregistruje, klíč je uložený jen u ní,
- **žádná databáze na naší straně**. Stav předplatného drží Stripe, naše
  funkce se jen ptá. Nemáme kde ztratit ani vyzradit nic cizího,
- **žádná zdravotní data na serveru**, funkce o uživatelce neví nic než
  číslo jejího předplatného,
- **funguje offline**, pětatřicetidenní lístek překlene měsíc mezi
  platbami i delší výpadek,
- **obnovování i zrušení** se promítne sama od sebe. Zruší-li předplatné,
  při nejbližším ověření se lístek už nevydá.

Poctivá poznámka: aplikace běží v prohlížeči, takže kdo umí upravit její
kód, obejde i tohle. Laťka se ale posouvá z „přepnu přepínač“ na „přepíšu
si aplikaci“, a to je úplně jiná liga. Ochrana obsahu proti kopírování je
beztak ztracená bitva, podrobně v `BEZPECNOST.md`.

---

## 2. Opakovaná platba, ne jednorázová

Předplatné se podle obchodních podmínek **automaticky obnovuje**, dokud ho
zákaznice nezruší. Ve Stripe se proto zakládá **opakovaná cena**
(recurring), 191 Kč měsíčně, a používá se **Stripe Subscriptions**.

Obnáší to víc mechaniky než jednorázová platba a všechna je povinná:

| Co | Proč |
|---|---|
| **zrušení kdykoliv a zdarma** | ukončit musí jít tak snadno jako sjednat |
| oznámení **30 dní před změnou ceny** | jinak se vyšší cena strhnout nesmí |
| opakované pokusy o platbu | když karta neprojde |
| doklad ke **každé** platbě | ne jen k první |

## 3. Co udělat ve Stripe

### 3a. Dokončit aktivaci účtu

Samotné založení nestačí. V Dashboardu je potřeba mít hotové:

- údaje podnikatelky: **Gabriela Cipro, IČO 21134154**,
  sídlo V Jezerech 311, Braškov 273 51,
- ověření totožnosti,
- **bankovní účet v CZK**, kam budou chodit výplaty,
- nastavení měny na **CZK**.

### 3b. Založit produkt a cenu

V **Product catalog** vytvořte:

| Pole | Hodnota |
|---|---|
| Název | `BlooMia, měsíční přístup` |
| Popis | `Přístup k celému obsahu aplikace BlooMia na 30 dní.` |
| Typ ceny | **opakovaná** (Recurring) |
| Fakturační období | měsíčně |
| Cena | `191` |
| Měna | `CZK` |

Pak si zkopírujte **Price ID**, začíná `price_`. Budu ho potřebovat.

### 3c. Daně ve Stripe vypnout

Jste neplátce DPH, takže **Stripe Tax nezapínejte** a u ceny nechte, že
daň se nepřipočítává. Cena 191 Kč je konečná a tak to stojí v podmínkách.

### 3d. Nastavení fakturace

V **Settings, Billing** zapněte:

- **zasílání dokladů e-mailem ke každé platbě**. Tohle je v obchodních
  podmínkách slíbené a vypnout se nesmí. Je to něco jiného než upomínka
  před obnovením: ta se podle vašeho rozhodnutí posílat nebude a v
  podmínkách je to napsané,
- **opakované pokusy o platbu** (Smart Retries), když karta neprojde,
- **zákaznický portál** (Customer portal), aby si žena mohla sama vyměnit
  kartu a zrušit předplatné i mimo aplikaci.

Upomínky před obnovením nechte vypnuté. Datum příštího obnovení a cenu
uvidí žena v aplikaci a zrušit to jde jedním tlačítkem, takže se nic
nestrhne poslepu.

### 3e. Webhook

V **Developers, Webhooks** přidejte cíl:

```
https://mybloomia.com/api/stripe
```

Události:

```
checkout.session.completed
customer.subscription.updated
customer.subscription.deleted
invoice.payment_failed
```

Po vytvoření si zkopírujte **Signing secret**, začíná `whsec_`.

---

## 4. Co potřebuji od vás

### Klíče: NIKDY do chatu

Všechny tři patří do **Vercel, Settings, Environment Variables**, kam je
vložíte vy. Já je nepotřebuji vidět a vidět je nechci.

| Proměnná | Odkud | K čemu |
|---|---|---|
| `STRIPE_SECRET_KEY` | Stripe, Developers, API keys | ověření platby serverovou funkcí |
| `STRIPE_WEBHOOK_SECRET` | ze zřízeného webhooku | ověření, že zpráva je opravdu od Stripe |
| `LICENCE_KLIC` | vygeneruji a pošlu bezpečnou cestou | podepisování aktivačních kódů |

Veřejný klíč k ověřování podpisu půjde přímo do zdrojového kódu aplikace.
To je v pořádku, veřejným klíčem se dá jen ověřovat, ne podepisovat.

### Údaje do dokumentů

| Co | Kde to najdete |
|---|---|
| Přesný název a sídlo smluvní entity Stripe | ve Stripe, v přijatých podmínkách (u evropských firem to bývá irská entita) |
| Price ID | Product catalog, začíná `price_` |

Entitu si prosím opište z Dashboardu, nebudu ji hádat. Jde do obchodních
podmínek jako poskytovatel platebních služeb a do zásad ochrany údajů
jako zpracovatel.

### Zpracovatelská smlouva

Podle čl. 28 GDPR je potřeba mít se Stripe uzavřené **Data Processing
Agreement**. Stripe ho má v Dashboardu k odsouhlasení.

---

## 5. Co doprogramuji

1. **`/api/checkout`**: založí platební sezení ve Stripe a pošle ženu
   na jeho zabezpečenou stránku. Údaje o kartě se u nás neobjeví nikdy.
2. **`/api/stav`**: dostane klíč předplatného, ověří si u Stripe, že
   předplatné běží, a vrátí přístupový lístek na 35 dní.
3. **`/api/zrusit`**: na jedno zavolání zruší předplatné ke konci
   zaplaceného období. Tohle je to tlačítko, které podmínky slibují.
4. **`/api/portal`**: otevře zákaznický portál Stripe, kde si žena vymění
   kartu nebo si prohlédne doklady.
5. **Návrat po zaplacení**: vrátí se rovnou do aplikace i s klíčem,
   nic nepřepisuje ručně.
6. **Ověření v aplikaci**: podpis lístku se kontroluje veřejným klíčem,
   offline. Klíč i lístek jdou do zálohy, takže přežijí přenos do jiného
   telefonu.
7. **Obrazovka Předplatné**: místo dnešního přepínače tlačítko
   k zaplacení, datum příštího obnovení, cena a **Zrušit předplatné**.
8. **Vypršení**: po konci platnosti se placená část obsahu zamkne.
   Zapsaná data zůstávají přístupná vždy, ta jsou její.
9. **Testovací režim**: celé to napřed projde na testovacích klíčích
   Stripe, včetně obnovení, zrušení a neúspěšné platby.

Dokumenty se pak doplní: způsob platby, poskytovatel plateb, doklad,
a zmizí věta, že placené předplatné zatím není v provozu.

---

## 6. Dvě věci na účetní, ne na mě

Nejsem daňový poradce a tohle nechte potvrdit od účetní.

### 6a. Identifikovaná osoba k DPH

Tohle se často přehlédne a má to termín. Když jako neplátce DPH odebíráte
službu od firmy z jiného členského státu, a poplatky Stripe takovou
službou jsou, stáváte se podle zákona o DPH **identifikovanou osobou**.

Co to znamená:

- přihlásit se k registraci, zákon na to dává **15 dnů** ode dne prvního
  přijetí takové služby,
- z poplatků Stripe odvádět českou DPH, bez nároku na odpočet,
- za měsíce, kdy plnění přijmete, podávat přiznání.

Co to **neznamená**: nestáváte se plátcem DPH pro vlastní prodej. Cena
191 Kč zůstává konečná a bez daně, obchodní podmínky se tím nemění.

### 6b. Prodej do zahraničí

Aplikace je česká a míří na české ženy, ale Stripe přijme kartu odkudkoli.
Prodej digitální služby spotřebitelce v jiném státě EU má vlastní pravidla
a vlastní hranici. Zeptejte se účetní, jestli to řešit hned, nebo až se to
stane.

---

## 7. Náklady

Stripe si bere podíl z každé platby. Sazby se mění, ověřte si aktuální
ceník, ale u evropských karet to u částky 191 Kč bývá jednotky korun plus
malá fixní částka. Počítejte s tím při rozhodování o ceně.

---

## 8. Pořadí kroků

1. Dokončit aktivaci účtu Stripe včetně bankovního účtu.
2. Založit produkt s **opakovanou** cenou, poslat mi **Price ID**.
3. Opsat z Dashboardu smluvní entitu Stripe pro dokumenty.
4. Zapnout upomínky, doklady, opakované pokusy a zákaznický portál.
5. Potvrdit s účetní registraci identifikované osoby.
6. Já postavím serverové funkce a ověřování v aplikaci.
7. Vyzkoušíme celé na **testovacích klíčích**: zaplacení, obnovení,
   zrušení i neúspěšnou platbu.
8. Vy vložíte do Vercelu ostré klíče.
9. Doplním dokumenty a pustíme to.

Kroky 1 až 5 jsou na vás, 6 a 9 na mně, 7 a 8 společně.
