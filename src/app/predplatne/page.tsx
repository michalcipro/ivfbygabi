import Link from 'next/link'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { accessFor, currentUser } from '@/lib/auth'
import { subscribeAction, logoutAction } from '@/app/actions/auth'
import { CONTENT_STATS } from '@/lib/content'
import { Badge, Card, Eyebrow, Hero } from '@/components/ui'

export const metadata: Metadata = { title: 'Členství' }
export const dynamic = 'force-dynamic'

const INCLUDED = [
  'Personalizovaná domovská stránka na každý den',
  'Doporučování obsahu podle vaší fáze a chování',
  'Kompletní průvodce všemi fázemi cesty',
  `Knihovna: ${CONTENT_STATS.articles} článků, ${CONTENT_STATS.videos} videí, ${CONTENT_STATS.audio} meditací`,
  'AI Gabi — zná vaši cestu, odpovídá kdykoliv',
  'Deník emocí, symptomů a zdravotních údajů',
  'Zdravotní přehled s grafy vývoje hodnot',
  'Rozpoznávání hodnot z lékařských zpráv',
  'Rodinná kronika a dopisy miminku',
  'Komunita žen ve stejné situaci',
  'Kalendář s automatickými připomínkami',
  'Checklisty na každou situaci',
  'Partner mode pro toho, kdo je vedle vás',
  'Nový obsah každý týden',
]

export default async function SubscriptionPage() {
  const user = await currentUser()
  if (!user) redirect('/prihlaseni')

  const access = accessFor(user)
  const expired = access.reason === 'expired' || access.reason === 'none'

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:py-16">
      <header className="text-center">
        <Link href="/dnes" className="display text-[1.35rem]">
          IVF by Gabi
        </Link>
      </header>

      {expired && (
        <Card className="mt-10 border-[var(--color-champagne)] bg-[var(--color-champagne)]/25 p-6 text-center">
          <p className="text-[0.9375rem] leading-relaxed">
            Zkušební období skončilo. Vaše zápisy, dokumenty i kronika zůstávají uložené —
            po aktivaci členství je najdete přesně tam, kde jste je nechala.
          </p>
        </Card>
      )}

      <Hero token="champagne" className="mt-8 rounded-[var(--radius-2xl)] px-8 py-14 text-center md:py-16">
        <div className="relative z-10">
          <p className="eyebrow !text-ink/50">Premium Membership</p>
          <h1 className="display mt-4 text-[2.25rem] leading-tight text-ink md:text-[3rem]">
            Každý den něco,
            <br />
            co se hodí právě dnes.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ink/72">
            Jedno členství, všechno odemčené. Bez závazku, zrušit můžete kdykoliv.
          </p>
        </div>
      </Hero>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <PlanCard
          plan="monthly"
          title="Měsíčně"
          price="349 Kč"
          period="/ měsíc"
          note="Bez závazku. Zrušit kdykoliv."
          current={user.subStatus === 'active' && user.subPlan === 'monthly'}
        />
        <PlanCard
          plan="yearly"
          title="Ročně"
          price="2 990 Kč"
          period="/ rok"
          note="Ušetříte 1 198 Kč — jako by dva měsíce byly zdarma."
          highlight
          current={user.subStatus === 'active' && user.subPlan === 'yearly'}
        />
      </div>

      <section className="mt-12">
        <Eyebrow>Co je v členství</Eyebrow>
        <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {INCLUDED.map((item) => (
            <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
              <span className="mt-[0.35em] text-[var(--color-sage-deep)]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <Card muted className="mt-10 p-7">
        <h2 className="display text-xl">Proč jen předplatné?</h2>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">
          Protože to není aplikace, kterou jednou koupíte a zapomenete. Každý týden
          přibývá nový obsah, denní karty se počítají znovu a znovu a AI Gabi běží
          na skutečné infrastruktuře. Předplatné znamená, že za produkt platíte vy —
          ne inzerenti vašimi zdravotními daty.
        </p>
      </Card>

      <div className="mt-10 flex justify-center gap-3 text-[0.8125rem]">
        <Link href="/nastaveni" className="text-soft hover:underline">
          Nastavení účtu
        </Link>
        <span className="text-faint">·</span>
        <form action={logoutAction}>
          <button type="submit" className="text-soft hover:underline">
            Odhlásit se
          </button>
        </form>
      </div>

      <p className="mt-8 text-center text-xs leading-relaxed text-faint">
        Toto je ukázková implementace platby — po potvrzení se členství aktivuje okamžitě
        a bez skutečné transakce.
      </p>
    </div>
  )
}

function PlanCard({
  plan,
  title,
  price,
  period,
  note,
  highlight,
  current,
}: {
  plan: 'monthly' | 'yearly'
  title: string
  price: string
  period: string
  note: string
  highlight?: boolean
  current?: boolean
}) {
  return (
    <form action={subscribeAction}>
      <input type="hidden" name="plan" value={plan} />
      <div
        className={`flex h-full flex-col rounded-[var(--radius-xl)] border p-7 ${
          highlight
            ? 'border-[var(--color-sand)] bg-[var(--card)] shadow-[var(--shadow-lift)]'
            : 'border-[var(--line)] bg-[var(--card)]'
        }`}
      >
        <div className="flex items-center gap-2">
          <h2 className="display text-xl">{title}</h2>
          {highlight && <Badge tone="accent">Nejvýhodnější</Badge>}
          {current && <Badge>Váš plán</Badge>}
        </div>

        <p className="mt-5">
          <span className="display text-[2.5rem] leading-none">{price}</span>
          <span className="ml-1.5 text-[0.9375rem] text-soft">{period}</span>
        </p>

        <p className="mt-3 flex-1 text-[0.875rem] leading-relaxed text-soft">{note}</p>

        <button
          type="submit"
          className={`btn mt-7 w-full !py-3 ${highlight ? 'btn-primary' : 'btn-secondary'}`}
        >
          {current ? 'Prodloužit' : 'Aktivovat'}
        </button>
      </div>
    </form>
  )
}
