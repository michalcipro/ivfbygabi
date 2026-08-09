import type { ContentItem, ContentPack } from '../types'

/**
 * Checklisty z tištěného diáře.
 *
 * Gabi je v diáři má jako seznamy s odrážkami. V papíru se odškrtávají tužkou
 * a příště se musí vytisknout znovu; tady se odškrtnuté pamatuje.
 *
 * ----------------------------------------------------------- PŘEKLADY ---
 * Obsah není přepsaný doslova. Dvě věci se musely změnit, protože v papíru
 * od kamarádky fungují a v aplikaci by fungovaly jako pokyn:
 *
 * 1. Ananas a sklenka vína před transferem jsou Gabinin rituál, ne postup
 *    s doloženým účinkem. Jsou označené jako rituál a jsou nepovinné, aby
 *    žena, která je vynechá, neměla pocit, že něco zanedbala.
 * 2. Plný močový měchýř je pokyn k přípravě na zákrok a každá klinika ho má
 *    jinak. Zůstává jako otázka na kliniku, ne jako příkaz.
 */

const items: ContentItem[] = [
  // ================================================== příprava na transfer ===
  {
    id: 'diar-cl-transfer-day',
    kind: 'checklist',
    title: 'Příprava na transfer: dlouhodobě, těsně před, v den D',
    excerpt:
      'Co se dá připravit v klidu předem, aby v den transferu nezbylo nic k řešení.',
    body: `Tenhle seznam vychází z toho, jak si transfer připravovala Gabi. Není to
předpis a nic z něj není podmínka úspěchu. Je to způsob, jak přijít na kliniku
s pocitem, že jste udělala, co jste mohla, a nemuset o tom pak přemýšlet.

**Pro kryoembryotransfer platí totéž.**

Odškrtávejte, co dává smysl vám. Položky označené jako nepovinné jsou osobní
rituály, ne postupy. Žena, která je vynechá, nezanedbala nic.`,
    minutes: 6,
    phases: ['transfer', 'embryo_culture'],
    dayRange: [0, 30],
    topics: ['transfer', 'sebepece', 'partner', 'psychika'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno – reprodukční medicína',
    publishedOn: '2026-08-09',
    boost: 0.8,
    checklist: [
      // ---------------------------------------------------------- dlouhodobě
      {
        id: 'dcl-td-1',
        text: 'Dodržovat plán medikace tak, jak ho dala klinika',
        hint: 'Časy i dávky. Nic sama neměnit ani nevysazovat.',
        group: 'Dlouhodobě',
      },
      {
        id: 'dcl-td-2',
        text: 'Mít domluvené s lékařem, co bude, když transfer nevyjde',
        hint: 'Páry, které měly plán B, popisují den výsledku jako snesitelnější.',
        group: 'Dlouhodobě',
      },
      {
        id: 'dcl-td-3',
        text: 'Doplňky, které vám klinika doporučila',
        hint: 'Například kyselina listová a vitamin D. Co konkrétně, určuje lékař, ne seznam z internetu.',
        group: 'Dlouhodobě',
      },
      { id: 'dcl-td-4', text: 'Pravidelné a kvalitní jídlo', group: 'Dlouhodobě' },
      {
        id: 'dcl-td-5',
        text: 'Pohyb, který vám dělá dobře',
        hint: 'Delší procházky, jóga, fyzio. Nic z toho nezvyšuje šanci, ale pomáhá to unést čekání.',
        group: 'Dlouhodobě',
      },
      {
        id: 'dcl-td-6',
        text: 'Mluvit s partnerem o tom, co se bude dít, když to nevyjde',
        group: 'Dlouhodobě',
      },
      {
        id: 'dcl-td-7',
        text: 'Domluvit se s partnerem, jak vás podpoří v den transferu',
        group: 'Dlouhodobě',
      },
      {
        id: 'dcl-td-8',
        text: 'Připravit se na platbu, pokud transfer není první v cyklu',
        hint: 'Zapište si částku do Financí, ať vás v den D nepřekvapí.',
        group: 'Dlouhodobě',
      },

      // ------------------------------------------------------- pár dní před
      { id: 'dcl-td-9', text: 'Zařídit si volno z práce na den transferu', group: 'Pár dní před' },
      {
        id: 'dcl-td-10',
        text: 'Vyřídit, co jde vyřídit předem',
        hint: 'Ne kvůli stresu jako takovému, ale proto, aby v ten den nezvonil telefon.',
        group: 'Pár dní před',
      },
      { id: 'dcl-td-11', text: 'Odpočívat a neponocovat', group: 'Pár dní před' },
      {
        id: 'dcl-td-12',
        text: 'Základní úklid doma',
        hint: 'Ať se po návratu nedíváte na nádobí.',
        group: 'Pár dní před',
      },
      {
        id: 'dcl-td-13',
        text: 'Horká vana, dokud se ještě může',
        hint: 'Po transferu se přehřívání nedoporučuje, takže tohle je poslední příležitost.',
        group: 'Pár dní před',
      },
      {
        id: 'dcl-td-14',
        text: 'Ananas pět dní před transferem',
        hint: 'Gabinin rituál. Nemá doložený vliv na uhnízdění a nic se nestane, když ho vynecháte.',
        optional: true,
        group: 'Pár dní před',
      },
      {
        id: 'dcl-td-15',
        text: 'Sex večer před vkladem',
        hint: 'Zeptejte se na to své kliniky. Doporučení se mezi pracovišti liší.',
        optional: true,
        group: 'Pár dní před',
      },

      // ---------------------------------------------------------- den D
      { id: 'dcl-td-16', text: 'Vyspat se a dát si ráno pořádnou snídani', group: 'V den transferu' },
      {
        id: 'dcl-td-17',
        text: 'Vzít si ranní léky podle rozpisu',
        hint: 'Progesteron včetně. Častá otázka: ano, i v den transferu, lékař je na to zvyklý. Ověřte si to u své kliniky.',
        group: 'V den transferu',
      },
      {
        id: 'dcl-td-18',
        text: 'Zeptat se kliniky, jak plný má být močový měchýř',
        hint: 'Transfer se dělá pod ultrazvukem a plnější měchýř zlepšuje viditelnost. Kolik přesně, si každé pracoviště říká samo.',
        group: 'V den transferu',
      },
      { id: 'dcl-td-19', text: 'Obléknout se pohodlně', hint: 'Tepláky, nebo šaty a rtěnka. Hlavně ať je vám v tom dobře.', group: 'V den transferu' },
      { id: 'dcl-td-20', text: 'Teplé ponožky', hint: 'Na sále bývá chladno a nohy jsou na opěrkách.', group: 'V den transferu' },
      {
        id: 'dcl-td-21',
        text: 'Uvolnit pánevní dno',
        hint: 'Stažené pánevní dno průchod katétru ztěžuje. Pomáhá pomalý výdech a vědomé povolení.',
        group: 'V den transferu',
      },
      { id: 'dcl-td-22', text: 'Jet s partnerem, pokud to jde', optional: true, group: 'V den transferu' },
      {
        id: 'dcl-td-23',
        text: 'Zeptat se embryologa, co vám ukazuje',
        hint: 'Před transferem vám embryo obvykle ukážou. Je to jediná chvíle, kdy se na ně můžete podívat.',
        group: 'V den transferu',
      },
      {
        id: 'dcl-td-24',
        text: 'Rozhodnout se o doplňkových metodách po vysvětlení',
        hint: 'Hatching nebo embryoglue vám mohou nabídnout. Zeptejte se, co konkrétně ve vašem případě znamenají a co o nich víme.',
        optional: true,
        group: 'V den transferu',
      },
      { id: 'dcl-td-25', text: 'Po vkladu si chvíli poležet', group: 'V den transferu' },
      {
        id: 'dcl-td-26',
        text: 'Cestou domů udělat něco jen pro sebe',
        hint: 'Gabi se staví pro hranolky. Klidně cokoliv jiného.',
        optional: true,
        group: 'V den transferu',
      },
    ],
  },

  // ======================================================= vyšetření před IVF
  {
    id: 'diar-cl-vysetreni-pred-ivf',
    kind: 'checklist',
    title: 'Vyšetření, která je fajn mít před IVF',
    excerpt:
      'Co si můžete zařídit u gynekologa nebo praktika, než léčba začne. A hlavně: nechte si výsledky vysvětlit.',
    body: `Tenhle seznam sepsala Gabi z vlastní zkušenosti. **Není to předpis** a nic
z toho si nevyžadujte sama proti doporučení lékaře: co se skutečně vyšetřuje
a v jakém pořadí, určuje vaše klinika podle vaší situace.

K čemu seznam je: abyste věděla, na co se dá zeptat, a nemusela každou položku
objevovat až ve chvíli, kdy vám chybí.

A co je podle Gabi ještě důležitější než samotné odběry: **nechte si výsledky
správně interpretovat.** Pořádně si vše vysvětlit, abyste rozuměla, co to
všechno znamená. Ptejte se.

Hotové výsledky si zapisujte do Zdravotních dat, ať je máte pohromadě
a v čase.`,
    minutes: 5,
    phases: ['diagnostics', 'ivf_prep', 'preparing_body', 'trying_naturally'],
    dayRange: [0, 120],
    topics: ['vysledky', 'hormony', 'klinika', 'partner'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno – reprodukční medicína',
    publishedOn: '2026-08-09',
    boost: 0.75,
    checklist: [
      // --------------------------------------------------------------- žena
      { id: 'dcl-v-1', text: 'Rodinná anamnéza', hint: 'Co se v rodině opakuje na vaší i partnerově straně.', group: 'Žena' },
      { id: 'dcl-v-2', text: 'Ultrazvukové vyšetření', group: 'Žena' },
      {
        id: 'dcl-v-3',
        text: 'Krev: TSH, AMH, jaterní testy, cukr, inzulín, kortizol, homocystein, kyselina močová, cholesterol',
        hint: 'Většinu z toho odebere praktický lékař nebo gynekolog.',
        group: 'Žena',
      },
      {
        id: 'dcl-v-4',
        text: 'Vyšetření na pohlavně přenosné infekce',
        group: 'Žena',
      },
      {
        id: 'dcl-v-5',
        text: 'Hormonální profil: FSH, LH, estradiol, progesteron, prolaktin',
        hint: 'Základ se odebírá v úzkém okně na začátku cyklu, obvykle 2. až 4. den.',
        group: 'Žena',
      },
      { id: 'dcl-v-6', text: 'Průchodnost vejcovodů', hint: 'HSG nebo HyFoSy, obvykle v první polovině cyklu.', group: 'Žena' },
      {
        id: 'dcl-v-7',
        text: 'Základní živiny a minerály: ferritin, zinek, kyselina listová, vitamin D, B12, hořčík, jód, selen',
        hint: 'Doplňovat jen to, co vyjde nízko, a v dávce podle lékaře. Ne všechno naráz podle seznamu.',
        group: 'Žena',
      },
      {
        id: 'dcl-v-8',
        text: 'Imunologické vyšetření',
        hint: 'Jen po konzultaci s lékařem, jestli je ve vaší situaci na místě.',
        optional: true,
        group: 'Žena',
      },
      {
        id: 'dcl-v-9',
        text: 'Genetické vyšetření',
        hint: 'Jen po konzultaci s lékařem.',
        optional: true,
        group: 'Žena',
      },

      // ----------------------------------------------------------------- muž
      { id: 'dcl-v-10', text: 'Spermiogram', hint: 'Jedno vyšetření, které může zásadně změnit směr léčby. Vyplatí se hned na začátku.', group: 'Muž' },
      {
        id: 'dcl-v-11',
        text: 'Fragmentace DNA spermií',
        hint: 'Po konzultaci s lékařem, nedělá se všem.',
        optional: true,
        group: 'Muž',
      },
      { id: 'dcl-v-12', text: 'Základní živiny z krve', group: 'Muž' },

      // ------------------------------------------------------------- pak
      {
        id: 'dcl-v-13',
        text: 'Nechat si výsledky vysvětlit',
        hint: 'Nejdůležitější položka celého seznamu. Číslo bez výkladu není informace.',
        group: 'A potom',
      },
      {
        id: 'dcl-v-14',
        text: 'Zapsat si hodnoty do Zdravotních dat',
        hint: 'Ať je máte v čase a nemusíte je hledat po papírech.',
        group: 'A potom',
      },
      {
        id: 'dcl-v-15',
        text: 'Sepsat si otázky na příští kontrolu',
        hint: 'V ordinaci se na ně zapomíná. Aplikace na to má Otázky pro lékaře.',
        group: 'A potom',
      },
    ],
  },
]

export const pack: ContentPack = { items }
