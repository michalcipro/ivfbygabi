import type { PhaseGroup } from '../lib/domain/phases'

/**
 * Ukázkové příspěvky v komunitě.
 *
 * V ostré verzi je píšou skutečné uživatelky. Tady je potřebujeme proto,
 * aby komunita nebyla prázdná ještě dřív, než do ní někdo napíše — a jsou
 * jako ukázkové označené, aby si je nikdo nespletl s reálnými lidmi.
 */

export interface SeedPost {
  author: string
  body: string
  hearts: number
  replies: { author: string; body: string }[]
}

export const SEED_POSTS: Record<PhaseGroup, SeedPost[]> = {
  planning: [
    {
      author: 'Anonymně · Snažíme se',
      body: 'Rok a půl a pořád nic. Kdy jste to vzdaly a šly na vyšetření?',
      hearts: 12,
      replies: [
        {
          author: 'Anonymně · Diagnostika',
          body: 'Po roce. Zpětně bych šla dřív — samotné vyšetření nic nezkazí a spousta věcí se dá vyřešit rychle.',
        },
      ],
    },
  ],
  diagnosis: [
    {
      author: 'Anonymně · Diagnostika',
      body: 'Zítra první návštěva na klinice. Co jste si přály, aby vám někdo řekl předem?',
      hearts: 18,
      replies: [
        { author: 'Anonymně · Stimulace', body: 'Vezměte si všechny staré výsledky, i ty, co vám přijdou nedůležité. A napište si otázky, v ordinaci na ně stejně zapomenete.' },
        { author: 'Anonymně · Po transferu', body: 'Že to není zkouška, kterou můžete pokazit. Jenom sbírají informace.' },
      ],
    },
  ],
  treatment: [
    {
      author: 'Anonymně · Stimulace',
      body: 'Sedmý den stimulace a mám pocit, že mi břicho nepatří. Kdy to poleví?',
      hearts: 24,
      replies: [
        { author: 'Anonymně · Po odběru', body: 'U mě nejhorší den před odběrem, pak to šlo rychle dolů. Hodně pijte a nešetřete solí, tohle mi říkala sestra.' },
        { author: 'Anonymně · Čekání', body: 'Volné kalhoty a smířit se s tím na pár dní. Není to navždycky.' },
      ],
    },
  ],
  waiting: [
    {
      author: 'Anonymně · Po transferu',
      body: 'Šestý den po transferu a mám pocit, že se čas zastavil. Jak jste to zvládaly?',
      hearts: 31,
      replies: [
        { author: 'Anonymně · Těhotenství', body: 'Plán na každý den — jedna věc dopoledne, jedna odpoledne. Bez toho bych se zbláznila.' },
        { author: 'Anonymně · Po transferu', body: 'Šestý byl u mě nejhorší. Sedmý už šel. Držím palce.' },
      ],
    },
  ],
  loss: [
    {
      author: 'Anonymně · Po ztrátě',
      body: 'Jedenáct dní. Kdy jste byly schopné se vrátit mezi lidi?',
      hearts: 42,
      replies: [
        { author: 'Anonymně · Mezi pokusy', body: 'Tři týdny mi trvalo, než jsem zvládla nákup. Není v tom žádný správný čas.' },
        { author: 'Anonymně · Po ztrátě', body: 'Nechala jsem si napsat neschopenku. Doteď nejlepší rozhodnutí, co jsem udělala.' },
      ],
    },
  ],
  pregnancy: [
    {
      author: 'Anonymně · Těhotenství',
      body: 'Po třech letech léčby se pořád bojím se radovat. Zvládl to někdo jinak?',
      hearts: 27,
      replies: [
        { author: 'Anonymně · Šestinedělí', body: 'Ne. A myslím, že to ani nejde. Mně pomohlo přestat po sobě chtít, abych to cítila „správně“.' },
      ],
    },
  ],
  birth: [
    {
      author: 'Anonymně · Příprava na porod',
      body: 'Sepsala jsem porodní plán a připadám si trapně, že ho vůbec chci ukazovat. Máte s tím zkušenost?',
      hearts: 15,
      replies: [
        { author: 'Anonymně · Šestinedělí', body: 'Na jednu A4 a nadpis „preferuji“. Nikdo se nesmál a hodně to pomohlo, když jsem sama nebyla schopná mluvit.' },
      ],
    },
  ],
  baby: [
    {
      author: 'Anonymně · Šestinedělí',
      body: 'Devátý den po císaři. Kdy jste zvládly první procházku ven?',
      hearts: 19,
      replies: [
        { author: 'Anonymně · První rok', body: 'Desátý den kolem bloku, pomalu. Nechtějte po sobě víc, než jde — jizva to spočítá.' },
      ],
    },
  ],
}
