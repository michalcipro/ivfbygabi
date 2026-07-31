import type { ContentPack, Product } from '../types'

/**
 * Marketplace.
 *
 * Řazení podle relevance k aktuální fázi, ne podle toho, kdo zaplatí za reklamu.
 * Každá položka má `whyNow` — vysvětlení, proč se hodí právě teď. Bez toho
 * by to byl jen katalog.
 *
 * Ceny jsou orientační v Kč a slouží k odhadu rozpočtu, ne jako nabídka.
 */

const products: Product[] = [
  // --- Příprava a IVF ------------------------------------------------------
  {
    id: 'mp-ovulacni-testy',
    name: 'Ovulační testy — balení 20 ks',
    category: 'Testy',
    whyNow:
      'Když sledujete plodné dny, vyplatí se testovat několik dní v řadě. Velké balení vyjde levněji než kupovat po kusech každý cyklus.',
    priceFrom: 340,
    phases: ['trying_naturally', 'preparing_body'],
    excludeModifiers: [],
    rating: 4.5,
    reviews: 631,
    vendor: 'Lékárna',
    kind: 'product',
    hero: 'linen',
  },
  {
    id: 'mp-chladici-pouzdro',
    name: 'Chladicí pouzdro na léky',
    category: 'Pomůcky',
    whyNow:
      'Většina léků na stimulaci se skladuje v chladu. Pouzdro řeší cestu z lékárny, dovolenou i den, kdy si musíte píchnout mimo domov.',
    priceFrom: 690,
    phases: ['ivf_prep', 'stimulation'],
    rating: 4.9,
    reviews: 147,
    vendor: 'Specializovaný prodejce',
    kind: 'product',
    hero: 'sky',
  },
  {
    id: 'mp-organizer-leky',
    name: 'Organizér na medikaci s denním rozvrhem',
    category: 'Pomůcky',
    whyNow:
      'Ve stimulaci se často kombinuje víc léků v různý čas. Organizér snižuje riziko, že se v tom v návalu ztratíte.',
    priceFrom: 350,
    phases: ['stimulation', 'ivf_prep', 'transfer', 'two_week_wait'],
    rating: 4.6,
    reviews: 92,
    vendor: 'Lékárna',
    kind: 'product',
    hero: 'sand',
  },
  {
    id: 'mp-tehotenske-testy',
    name: 'Těhotenské testy s vysokou citlivostí',
    category: 'Testy',
    whyNow:
      'Když se rozhodnete testovat doma, citlivější test zachytí HCG dřív. Rozhodující je ale vždycky odběr krve na klinice.',
    priceFrom: 180,
    phases: ['two_week_wait', 'trying_naturally', 'iui'],
    rating: 4.4,
    reviews: 803,
    vendor: 'Lékárna',
    kind: 'product',
    hero: 'pearl',
  },
  {
    id: 'mp-nahrivaci-polstarek',
    name: 'Nahřívací polštářek s pohankovou náplní',
    category: 'Pomůcky',
    whyNow:
      'Po odběru vajíček bývá břicho citlivé a nadmuté. Mírné teplo na záda a podbřišek uleví — na břicho po transferu ale pozor, ptejte se na klinice.',
    priceFrom: 450,
    phases: ['retrieval', 'embryo_culture', 'loss_miscarriage'],
    rating: 4.7,
    reviews: 211,
    vendor: 'Specializovaný prodejce',
    kind: 'product',
    hero: 'blush',
  },

  // --- Těhotenství ---------------------------------------------------------
  // --- Porod ---------------------------------------------------------------
  // --- Kojení a krmení -----------------------------------------------------
  // --- Nedonošené miminko --------------------------------------------------
  // --- Miminko -------------------------------------------------------------
  ]

const services: Product[] = [
  {
    id: 'mp-genetick-konzultace',
    name: 'Genetická konzultace',
    category: 'Odborná pomoc',
    whyNow:
      'Po opakovaných neúspěších nebo ztrátách může mít smysl probrat genetiku s odborníkem. Doporučení k vyšetření vám dá váš lékař.',
    priceFrom: 0,
    phases: ['repeated_failure', 'genetic_testing', 'loss_missed', 'loss_miscarriage'],
    rating: 4.7,
    reviews: 67,
    vendor: 'Genetická pracoviště',
    kind: 'service',
    hero: 'sky',
  },
]

export const pack: ContentPack = {
  products: [...products, ...services],
}
