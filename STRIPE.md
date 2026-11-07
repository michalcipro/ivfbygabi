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

### C. Podepsaný aktivační kód (doporučeno)

Zaplatí přes Stripe. Malá serverová funkce u Vercelu ověří platbu přímo
u Stripe a vydá **krátký podepsaný kód s datem platnosti**. Aplikace si
podpis ověří sama, i bez signálu, veřejným klíčem, který v sobě má.

Co to splňuje:

- **žádné účty**, nic se nikam neregistruje,
- **žádná zdravotní data na serveru**, serverová funkce o uživatelce neví
  nic než to, že proběhla platba,
- **funguje offline**, ověření podpisu nepotřebuje síť,
- **nejde to obejít přepnutím**. Padělat kód bez soukromého klíče nejde,
- **sedí to k podmínkám**: předplatné se neobnovuje automaticky, kód má
  datum platnosti a po něm si žena koupí další, když chce.

Poctivá poznámka: aplikace běží v prohlížeči, takže kdo umí upravit její
kód, obejde i tohle. Laťka se ale posouvá z „přepnu přepínač“ na „přepíšu
si aplikaci“, a to je úplně jiná liga. Ochrana obsahu proti kopírování je
beztak ztracená bitva, podrobně v `BEZPECNOST.md`.

---

## 2. Jednorázová platba, ne předplatné ve Stripe

Protože se podle obchodních podmínek **nic neobnovuje automaticky**, ve
Stripe se nezakládá produkt typu Subscription, ale **jednorázová platba**
199 Kč, která odemkne jeden měsíc.

Ušetří to spoustu mechaniky, kterou bychom jinak museli obsloužit:
neúspěšné strhávání, upomínky, zákaznický portál pro zrušení, spory
o automatické prodloužení. A hlavně to odpovídá tomu, co je napsané
v podmínkách.

---

## 3. Co udělat ve Stripe

### 3a. Dokončit aktivaci účtu

Samotné založení nestačí. V Dashboardu je potřeba mít hotové:

- údaje o společnosti: **Open tennis group s.r.o., IČO 04153235**,
  sídlo Majerského 2047/1, Chodov, 149 00 Praha,
- ověření totožnosti jednatele,
- **bankovní účet v CZK**, kam budou chodit výplaty,
- nastavení měny na **CZK**.

### 3b. Založit produkt a cenu

V **Product catalog** vytvořte:

| Pole | Hodnota |
|---|---|
| Název | `BlooMia, měsíční přístup` |
| Popis | `Přístup k celému obsahu aplikace BlooMia na 30 dní.` |
| Typ ceny | **jednorázová** (One off), ne opakovaná |
| Cena | `199` |
| Měna | `CZK` |

Pak si zkopírujte **Price ID**, začíná `price_`. Budu ho potřebovat.

### 3c. Daně ve Stripe vypnout

Jste neplátce DPH, takže **Stripe Tax nezapínejte** a u ceny nechte, že
daň se nepřipočítává. Cena 199 Kč je konečná a tak to stojí v podmínkách.

### 3d. Webhook

V **Developers, Webhooks** přidejte cíl:

```
https://mybloomia.com/api/stripe
```

Událost stačí jediná: `checkout.session.completed`. Po vytvoření si
zkopírujte **Signing secret**, začíná `whsec_`.

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

1. **Serverová funkce `/api/stripe`**: ověří podpis zprávy od Stripe,
   zkontroluje platbu a vydá podepsaný kód s platností 30 dní.
2. **Návratová stránka**: po zaplacení se žena vrátí rovnou do aplikace
   i s kódem, nic nepřepisuje ručně.
3. **Ověření v aplikaci**: podpis se kontroluje veřejným klíčem, offline.
   Kód se ukládá mezi data a jde i do zálohy, takže přežije přenos do
   jiného telefonu.
4. **Obrazovka Předplatné**: místo dnešního přepínače tlačítko
   k zaplacení, zbývající dny a možnost vložit kód ručně.
5. **Vypršení**: po konci platnosti se obsah zamkne a nabídne se další
   měsíc. Zapsaná data zůstávají přístupná vždy, ta jsou její.
6. **Testovací režim**: celé to napřed projde na testovacích klíčích
   Stripe, než se pustí živé platby.

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
199 Kč zůstává konečná a bez daně, obchodní podmínky se tím nemění.

### 6b. Prodej do zahraničí

Aplikace je česká a míří na české ženy, ale Stripe přijme kartu odkudkoli.
Prodej digitální služby spotřebitelce v jiném státě EU má vlastní pravidla
a vlastní hranici. Zeptejte se účetní, jestli to řešit hned, nebo až se to
stane.

---

## 7. Náklady

Stripe si bere podíl z každé platby. Sazby se mění, ověřte si aktuální
ceník, ale u evropských karet to u částky 199 Kč bývá jednotky korun plus
malá fixní částka. Počítejte s tím při rozhodování o ceně.

---

## 8. Pořadí kroků

1. Dokončit aktivaci účtu Stripe včetně bankovního účtu.
2. Založit produkt a cenu, poslat mi **Price ID**.
3. Opsat z Dashboardu smluvní entitu Stripe pro dokumenty.
4. Potvrdit s účetní registraci identifikované osoby.
5. Já postavím serverovou funkci a ověřování v aplikaci.
6. Vyzkoušíme celé na **testovacích klíčích**, včetně vypršení.
7. Vy vložíte do Vercelu ostré klíče.
8. Doplním dokumenty a pustíme to.

Kroky 1 až 4 jsou na vás, 5 a 8 na mně, 6 a 7 společně.
