import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTENT_STATS } from '@/lib/content'
import { PHASE_IDS } from '@/lib/domain/phases'
import { Card, Eyebrow, Hero, LinkButton } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Členství',
  description: 'Co všechno je součástí členství IVF by Gabi.',
}

const FEATURES = [
  {
    title: 'Domovská stránka, která se každý den mění',
    body: 'Karta dne přesně pro váš den cesty — co se děje, co je normální, co dnes zkusit, co si zapsat večer. Nikdy stejná obrazovka dvakrát.',
  },
  {
    title: 'Doporučování jako na Netflixu',
    body: 'Řady obsahu s vlastním důvodem: „Protože jste 8 dní po transferu“. Systém se učí z toho, co si otevíráte.',
  },
  {
    title: `Průvodce všemi ${PHASE_IDS.length} fázemi`,
    body: 'Od přemýšlení o dítěti přes diagnostiku, IVF, ztráty, těhotenství, porod a NICU až po batolecí období.',
  },
  {
    title: 'AI Gabi, která zná vaši cestu',
    body: 'Ví, kdy jste měla transfer, kolik máte embryí a kdy jdete na kontrolu. Vysvětluje pojmy a pomáhá formulovat otázky pro lékaře.',
  },
  {
    title: 'Deník a rodinná kronika',
    body: 'Emoce, symptomy, výsledky, dopisy miminku. Skládá se to samo do časové osy, ze které jedním kliknutím uděláte knihu.',
  },
  {
    title: 'Zdravotní přehled',
    body: 'Nahrajte zprávu, my z ní vytáhneme hodnoty, vysvětlíme pojmy a ukážeme vývoj v čase. Rozhodování zůstává lékaři.',
  },
  {
    title: 'Komunita bez náhody',
    body: 'Spojíme vás se ženami po stejném transferu, se stejnou diagnózou nebo se stejným termínem. Anonymně, pokud chcete.',
  },
  {
    title: 'Partner mode',
    body: 'Váš partner uvidí, co prožíváte a jak konkrétně může pomoct — bez přístupu k vašemu deníku.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="display text-[1.35rem]">
          IVF by Gabi
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/prihlaseni" className="btn btn-ghost">
            Přihlásit se
          </Link>
          <LinkButton href="/registrace">Vyzkoušet zdarma</LinkButton>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-24">
        <Hero token="linen" className="rounded-[var(--radius-2xl)] px-8 py-16 text-center md:py-20">
          <div className="relative z-10">
            <Eyebrow>Premium Membership</Eyebrow>
            <h1 className="display mt-4 text-[2.5rem] leading-tight text-ink md:text-[3.5rem]">
              Jedno členství.
              <br />
              Celá cesta.
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-[1.0625rem] leading-relaxed text-ink/72">
              Sedm dní zdarma. Pak 349 Kč měsíčně nebo 2 990 Kč ročně. Bez závazku.
            </p>
            <div className="mt-9">
              <LinkButton href="/registrace" className="!px-8 !py-3.5">
                Začít 7 dní zdarma
              </LinkButton>
            </div>
          </div>
        </Hero>

        <section className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h2 className="display text-xl">{f.title}</h2>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-soft">{f.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-5 sm:grid-cols-4">
          {[
            { value: CONTENT_STATS.items, label: 'materiálů v knihovně' },
            { value: CONTENT_STATS.dailyCards, label: 'denních karet' },
            { value: PHASE_IDS.length, label: 'fází cesty' },
            { value: CONTENT_STATS.glossary, label: 'vysvětlených pojmů' },
          ].map((s) => (
            <Card key={s.label} className="p-6 text-center">
              <p className="display text-[2rem] leading-none">{s.value}</p>
              <p className="mt-2 text-[0.8125rem] text-soft">{s.label}</p>
            </Card>
          ))}
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <Card className="p-8">
            <h2 className="display text-2xl">Měsíčně</h2>
            <p className="mt-5">
              <span className="display text-[2.75rem] leading-none">349 Kč</span>
              <span className="ml-2 text-[0.9375rem] text-soft">/ měsíc</span>
            </p>
            <p className="mt-4 text-[0.9375rem] text-soft">
              Bez závazku. Zrušit můžete kdykoliv jedním kliknutím.
            </p>
            <LinkButton href="/registrace" variant="secondary" className="mt-7 w-full !py-3">
              Vyzkoušet
            </LinkButton>
          </Card>

          <Card className="border-[var(--color-sand)] p-8 shadow-[var(--shadow-lift)]">
            <div className="flex items-center gap-2">
              <h2 className="display text-2xl">Ročně</h2>
              <span className="rounded-full bg-[var(--color-champagne)] px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-ink">
                Ušetříte 1 198 Kč
              </span>
            </div>
            <p className="mt-5">
              <span className="display text-[2.75rem] leading-none">2 990 Kč</span>
              <span className="ml-2 text-[0.9375rem] text-soft">/ rok</span>
            </p>
            <p className="mt-4 text-[0.9375rem] text-soft">
              Jako by dva měsíce byly zdarma. Cesta obvykle trvá déle, než člověk čeká.
            </p>
            <LinkButton href="/registrace" className="mt-7 w-full !py-3">
              Vyzkoušet
            </LinkButton>
          </Card>
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="display text-2xl">Časté otázky</h2>
          {[
            {
              q: 'Můžu zrušit kdykoliv?',
              a: 'Ano. Zrušení je jedno kliknutí v nastavení a členství doběhne do konce zaplaceného období. Vaše zápisy, dokumenty a kronika zůstávají uložené.',
            },
            {
              q: 'Nahrazuje to lékaře?',
              a: 'Ne, a ani se o to nesnažíme. Vysvětlujeme pojmy, ukazujeme, co je běžné, a pomáháme vám formulovat otázky. Diagnózu a léčbu určuje váš lékař.',
            },
            {
              q: 'Uvidí někdo moje zdravotní údaje?',
              a: 'Ne. Slouží výhradně k personalizaci obsahu uvnitř aplikace. V komunitě můžete vystupovat úplně anonymně — ostatní pak vidí jen vaši fázi.',
            },
            {
              q: 'Co když jsem po ztrátě nebo mezi pokusy?',
              a: 'Máme na to samostatné fáze i obsah. Nedostanete týdenní těhotenské aktualizace ani obsah o výbavičce — to je základní věc, kterou většina aplikací nedělá.',
            },
            {
              q: 'A co když mám nedonošené miminko?',
              a: 'Vývoj automaticky přepneme na korigovaný věk a dostanete samostatnou sekci o NICU, klokánkování a návratu domů.',
            },
          ].map((item) => (
            <div key={item.q} className="border-t border-[var(--line)] pt-6">
              <h3 className="text-[1.0625rem] font-medium">{item.q}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-soft">{item.a}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-[var(--line)] py-10">
        <div className="mx-auto max-w-5xl px-6 text-center text-[0.8125rem] leading-relaxed text-faint">
          Obsah platformy má informativní charakter a nenahrazuje odbornou zdravotní péči.
        </div>
      </footer>
    </div>
  )
}
