import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { contentByIds } from '@/lib/content'
import { aiAvailable, suggestedPrompts } from '@/lib/ai/gabi'
import { askGabiAction, clearThreadAction, listMessages } from '@/app/actions/gabi'
import { Card, Eyebrow, Hero, Markdown } from '@/components/ui'
import { ContentRow } from '@/components/content-card'
import { AskForm } from './ask-form'

export const metadata: Metadata = { title: 'Gabi' }
export const dynamic = 'force-dynamic'

/**
 * AI Gabi. Není to obecný chatbot — ví, kde na cestě uživatelka je,
 * co má za sebou a co ji čeká.
 */
export default async function GabiPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const messages = await listMessages(ownerId)
  const prompts = suggestedPrompts(state)
  const online = aiAvailable()

  return (
    <div className="space-y-8">
      <header>
        <Eyebrow>Vaše digitální průvodkyně</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Gabi</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Ptejte se kdykoliv — i ve tři ráno. Gabi ví, že {lowerFirst(state.dayLabel)}.
        </p>
      </header>

      {messages.length === 0 ? (
        <>
          <Hero token="dawn" className="rounded-[var(--radius-xl)] px-7 py-12 md:px-10 md:py-14">
            <div className="relative z-10 max-w-xl">
              <p className="display text-[1.5rem] leading-snug text-ink md:text-[1.875rem]">
                Dobrý den. Vím, kde na své cestě právě jste — {lowerFirst(state.dayLabel)}.
                Na co se chcete zeptat?
              </p>
            </div>
          </Hero>

          <section>
            <p className="eyebrow mb-3">Zkuste třeba</p>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {prompts.map((p) => (
                <form key={p} action={askGabiAction}>
                  <input type="hidden" name="question" value={p} />
                  <button
                    type="submit"
                    className="w-full rounded-[var(--radius-md)] border border-[var(--line)] bg-[var(--card)] px-5 py-4 text-left text-[0.9375rem] transition-all duration-400 hover:-translate-y-0.5 hover:border-[var(--color-sand)] hover:shadow-[var(--shadow-veil)]"
                  >
                    {p}
                  </button>
                </form>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="space-y-5">
          {messages.map((m) => {
            if (m.role === 'user') {
              return (
                <div key={m.id} className="flex justify-end">
                  <div className="max-w-[85%] rounded-[var(--radius-lg)] rounded-br-md bg-[var(--color-champagne)]/55 px-5 py-3.5 text-[0.9375rem] leading-relaxed">
                    {m.content}
                  </div>
                </div>
              )
            }

            const refs = contentByIds(m.refs).slice(0, 3)
            return (
              <div key={m.id} className="space-y-3">
                <div className="flex gap-3.5">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-taupe)] text-sm text-white">
                    ✦
                  </span>
                  <div className="min-w-0 flex-1 rounded-[var(--radius-lg)] rounded-tl-md border border-[var(--line)] bg-[var(--card)] px-6 py-5">
                    <Markdown text={m.content} className="!text-[0.9375rem]" />
                  </div>
                </div>

                {refs.length > 0 && (
                  <div className="ml-[2.875rem] rounded-[var(--radius-md)] bg-[var(--card-muted)] p-3">
                    <p className="eyebrow mb-1 px-3">V aplikaci k tomu najdete</p>
                    {refs.map((item) => (
                      <ContentRow key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </section>
      )}

      <AskForm action={askGabiAction} />

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-6">
        <p className="max-w-xl text-xs leading-relaxed text-faint">
          Gabi nenahrazuje lékaře. Vysvětluje pojmy, pomáhá zorientovat se a formulovat
          otázky pro váš zdravotnický tým — nestanovuje diagnózu ani nedoporučuje léčbu.
          {!online && ' Právě běží v režimu bez připojení k AI — odpovídá z knihovny obsahu.'}
        </p>
        {messages.length > 0 && (
          <form action={clearThreadAction}>
            <button type="submit" className="btn btn-ghost !py-2 !text-[0.8125rem]">
              Vymazat konverzaci
            </button>
          </form>
        )}
      </div>

      {messages.length > 0 && (
        <Card muted className="p-6">
          <p className="eyebrow mb-3">Co o vás Gabi ví</p>
          <ul className="space-y-1.5 text-[0.875rem] text-soft">
            <li>Fáze: {state.phase.title}</li>
            <li>{state.dayLabel}</li>
            {state.nextMilestone && (
              <li>
                Nejbližší událost: {state.nextMilestone.label} za {state.nextMilestone.inDays} dní
              </li>
            )}
            {profile.modifiers.length > 0 && <li>Vaše situace: {profile.modifiers.length} zadaných údajů</li>}
          </ul>
          <p className="mt-4 text-xs text-faint">
            Tyhle údaje jste zadala v profilu. Kdykoliv je můžete změnit v nastavení.
          </p>
        </Card>
      )}
    </div>
  )
}

function lowerFirst(s: string): string {
  const stripped = s.replace(/^Dnes (je|jste) /, '')
  return stripped.charAt(0).toLowerCase() + stripped.slice(1)
}
