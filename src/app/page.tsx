import Link from 'next/link'
import { redirect } from 'next/navigation'
import { currentUser } from '@/lib/auth'
import { Hero, LinkButton } from '@/components/ui'
import { PHASE_GROUPS, PHASE_GROUP_META, phasesInGroup } from '@/lib/domain/phases'

/**
 * Domovská stránka pro nepřihlášené. Neprodává aplikaci — prodává pocit,
 * že žena na své cestě není sama. Proto žádné funkce v odrážkách nahoře,
 * ale jeden konkrétní den ze života uživatelky.
 */

const PILLARS = [
  {
    title: 'Každý den něco nového',
    body: 'Domovská stránka se přepočítá každé ráno podle toho, kolikátý je den vaší cesty. Nikdy neuvidíte stejnou obrazovku dvakrát.',
    icon: '☀',
  },
  {
    title: 'Obsah, který se hodí právě dnes',
    body: 'Jako když Netflix doporučuje filmy — jen místo filmů dostáváte videa, články, meditace a checklisty přesně pro fázi, ve které jste.',
    icon: '❋',
  },
  {
    title: 'AI Gabi, která zná vaši cestu',
    body: 'Ví, kdy jste měla transfer, kolik máte embryí a kdy jdete na kontrolu. Ptejte se kdykoliv, i ve tři ráno.',
    icon: '✦',
  },
  {
    title: 'Deník, ze kterého vznikne kniha',
    body: 'Emoce, fotky, ultrazvuky, výsledky i dopisy miminku. Na konci cesty z toho složíme rodinnou kroniku.',
    icon: '❦',
  },
  {
    title: 'Ženy, které to znají',
    body: 'Komunita, kde vás spojíme s ženami po stejném transferu, se stejnou diagnózou nebo se stejným termínem. Anonymně, pokud chcete.',
    icon: '◍',
  },
  {
    title: 'Vaše zdravotní data na jednom místě',
    body: 'Nahrajte zprávu a my z ní vytáhneme hodnoty, vysvětlíme pojmy a ukážeme vývoj v čase. Rozhodnutí zůstává na vašem lékaři.',
    icon: '◉',
  },
]

const DAY_SAMPLE = [
  { time: '7:10', text: 'Dnes je 6. den po transferu. Vaše embryo se právě zahnizďuje.' },
  { time: '7:11', text: 'Co se dnes může dít — a co je úplně normální cítit.' },
  { time: '12:30', text: 'Dnešní úkol: vypijte o dvě sklenice vody víc než včera.' },
  { time: '18:45', text: 'Meditace pro čekání na HCG, 11 minut.' },
  { time: '21:00', text: 'Večerní reflexe: co dnes bylo lehčí, než jste čekala?' },
]

export default async function LandingPage() {
  const user = await currentUser()
  if (user) redirect(user.onboarded ? '/dnes' : '/onboarding')

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="display text-[1.35rem]">IVF by Gabi</span>
        <nav className="flex items-center gap-2">
          <Link href="/prihlaseni" className="btn btn-ghost">
            Přihlásit se
          </Link>
          <LinkButton href="/registrace">Vyzkoušet zdarma</LinkButton>
        </nav>
      </header>

      {/* --- Hero ---------------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr]">
          <div className="fade-up">
            <p className="eyebrow">První česká platforma svého druhu</p>
            <h1 className="display mt-5 text-[2.75rem] leading-[1.04] md:text-[4rem]">
              Na své cestě
              <br />
              nikdy nejste sama.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-soft">
              Digitální průvodkyně pro ženy na cestě za dítětem — od prvního rozhodnutí,
              přes diagnostiku a IVF, až po první rok vašeho miminka. Každý den něco,
              co se hodí právě dnes.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <LinkButton href="/registrace" className="!px-7 !py-3.5">
                Začít 7 dní zdarma
              </LinkButton>
              <Link href="/cenik" className="btn btn-secondary !px-6 !py-3.5">
                Co všechno získáte
              </Link>
            </div>
            <p className="mt-4 text-xs text-faint">
              Bez závazku. Zrušit můžete kdykoliv jedním kliknutím.
            </p>
          </div>

          <Hero token="champagne" className="rounded-[var(--radius-2xl)] p-7 shadow-[var(--shadow-float)]">
            <div className="relative z-10 rounded-[var(--radius-lg)] bg-white/85 p-6 backdrop-blur-md">
              <p className="eyebrow">Jeden den v aplikaci</p>
              <ul className="mt-5 space-y-4">
                {DAY_SAMPLE.map((row) => (
                  <li key={row.time} className="flex gap-4">
                    <span className="w-11 shrink-0 pt-0.5 text-[0.6875rem] font-medium tracking-wide text-ink/40">
                      {row.time}
                    </span>
                    <span className="text-[0.875rem] leading-relaxed text-ink/85">{row.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink/8 pt-4 text-[0.6875rem] leading-relaxed text-ink/45">
                Zítra bude celá tahle obrazovka jiná. A pozítří taky.
              </p>
            </div>
          </Hero>
        </div>
      </section>

      {/* --- Pilíře -------------------------------------------------------- */}
      <section className="border-y border-[var(--line)] bg-[var(--card)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="display max-w-2xl text-[2rem] leading-tight md:text-[2.5rem]">
            Nejde o aplikaci na zapisování cyklu.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-soft">
            Jde o každodenní společnici, která rozumí tomu, kde právě jste — a mění se s vámi.
          </p>

          <div className="stagger mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title}>
                <span className="text-xl text-[var(--color-taupe)]">{p.icon}</span>
                <h3 className="display mt-4 text-xl">{p.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Celá cesta ---------------------------------------------------- */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Celá cesta, ne jeden cyklus</p>
          <h2 className="display mt-4 max-w-2xl text-[2rem] leading-tight md:text-[2.5rem]">
            Provedeme vás každou fází — i těmi, o kterých se nemluví.
          </h2>

          <div className="mt-14 space-y-10">
            {PHASE_GROUPS.map((group) => {
              const meta = PHASE_GROUP_META[group]
              const phases = phasesInGroup(group)
              return (
                <div key={group} className="grid gap-4 border-t border-[var(--line)] pt-7 md:grid-cols-[13rem_1fr]">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: meta.accent }}
                      />
                      <h3 className="display text-xl">{meta.name}</h3>
                    </div>
                    <p className="mt-1 pl-5 text-[0.8125rem] text-faint">{meta.blurb}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {phases.map((p) => (
                      <span
                        key={p.id}
                        className="rounded-full border border-[var(--line)] px-3.5 py-1.5 text-[0.8125rem] text-soft"
                      >
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- Slib ---------------------------------------------------------- */}
      <section className="border-y border-[var(--line)] bg-[var(--card)] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="display text-[1.75rem] leading-[1.4] md:text-[2.25rem]">
            „Neprodáváme aplikaci.
            <br />
            Prodáváme pocit, že žena na své cestě není sama.“
          </p>
          <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
            <Promise title="Nikdy nenahradíme lékaře">
              Vysvětlujeme pojmy a pomáháme vám formulovat otázky. Rozhodnutí vždycky patří
              vám a vašemu lékaři.
            </Promise>
            <Promise title="Bez toxické pozitivity">
              Žádné „jen se uvolni“. Píšeme tak, jak by mluvila žena, která si tím sama prošla.
            </Promise>
            <Promise title="Vaše data jsou vaše">
              Zdravotní údaje zůstávají u nás, v komunitě můžete vystupovat zcela anonymně.
            </Promise>
          </div>
        </div>
      </section>

      {/* --- CTA ----------------------------------------------------------- */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="display text-[2.25rem] leading-tight md:text-[3rem]">
            Začněte dnes. Zítra vás už bude čekat něco nového.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-soft">
            Sedm dní zdarma, pak {formatPrice(349)} měsíčně. Bez závazku.
          </p>
          <div className="mt-9">
            <LinkButton href="/registrace" className="!px-8 !py-4 text-base">
              Vytvořit účet
            </LinkButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-[0.8125rem] text-faint sm:flex-row">
          <span className="display text-base text-[var(--fg-soft)]">IVF by Gabi</span>
          <p className="max-w-md text-center leading-relaxed sm:text-right">
            Obsah platformy má informativní charakter a nenahrazuje odbornou zdravotní péči.
          </p>
        </div>
      </footer>
    </div>
  )
}

function Promise({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[0.9375rem] font-semibold">{title}</h4>
      <p className="mt-2 text-[0.875rem] leading-relaxed text-soft">{children}</p>
    </div>
  )
}

export function formatPrice(czk: number): string {
  return `${czk} Kč`
}
