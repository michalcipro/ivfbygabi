import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile, listJournal } from '@/lib/db/repo'
import { listLetters, listTimeline, LETTER_TARGETS } from '@/lib/db/repo-story'
import { listLabValues } from '@/lib/db/repo-health'
import { resolveJourney } from '@/lib/domain/journey'
import { formatCzechDate, humanAge } from '@/lib/domain/dates'
import { LAB_BY_KEY } from '@/lib/health/lab-params'
import { PHASES, isPhaseId } from '@/lib/domain/phases'
import { Badge } from '@/components/ui'
import { PrintButton } from './print-button'

export const metadata: Metadata = { title: 'Kniha vaší cesty' }
export const dynamic = 'force-dynamic'

/**
 * Digitální kniha. Vysázená verze celé kroniky určená k tisku nebo uložení
 * do PDF (přes tisk prohlížeče) — bez navigace, s klidnou typografií.
 */
export default async function BookPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const timeline = listTimeline(ownerId)
  const letters = listLetters(ownerId)
  const journal = listJournal(ownerId, 500).filter(
    (j) => (j.note && j.note.trim()) || j.gratitude,
  )
  const labs = listLabValues(ownerId)

  const name = profile.displayName || user.displayName || 'Naše'

  return (
    <div className="mx-auto max-w-2xl space-y-14 py-4">
      <div className="no-print flex items-center justify-between gap-4">
        <Link href="/pribeh">
          <Badge tone="soft">← Zpět na kroniku</Badge>
        </Link>
        <PrintButton />
      </div>

      {/* --- Titulní strana ---------------------------------------------- */}
      <section className="border-b border-[var(--line)] pb-14 text-center">
        <p className="eyebrow">Kronika naší cesty</p>
        <h1 className="display mt-6 text-[2.75rem] leading-[1.1] md:text-[3.5rem]">
          {name === 'Naše' ? 'Naše cesta' : `Cesta, kterou šla ${name}`}
        </h1>
        {state.journeyDays !== null && (
          <p className="mt-6 text-[1.0625rem] text-soft">
            {state.journeyDays} dní · {humanAge(state.journeyDays)}
          </p>
        )}
        <p className="mt-10 text-[0.875rem] text-faint">
          Sestaveno {formatCzechDate(state.today)}
        </p>
      </section>

      {/* --- Milníky ------------------------------------------------------ */}
      {timeline.length > 0 && (
        <section>
          <h2 className="display mb-7 text-[1.75rem]">Milníky</h2>
          <div className="space-y-5">
            {timeline.map((t) => (
              <div key={t.id} className="flex gap-5">
                <span className="w-24 shrink-0 pt-0.5 text-[0.8125rem] text-faint">
                  {formatCzechDate(t.onDate, { year: false })}
                </span>
                <div>
                  <p className="text-[0.9375rem] font-medium">
                    {t.icon} {t.title}
                  </p>
                  {t.body && (
                    <p className="mt-1 text-[0.875rem] leading-relaxed text-soft">{t.body}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- Výsledky ----------------------------------------------------- */}
      {labs.length > 0 && (
        <section>
          <h2 className="display mb-7 text-[1.75rem]">Naše čísla</h2>
          <table className="w-full text-[0.875rem]">
            <tbody className="divide-y divide-[var(--line)]">
              {labs.map((l) => (
                <tr key={l.id}>
                  <td className="py-2.5 text-faint">{formatCzechDate(l.onDate)}</td>
                  <td className="py-2.5">{LAB_BY_KEY[l.paramKey]?.name ?? l.paramKey}</td>
                  <td className="py-2.5 text-right font-medium">
                    {l.value} {l.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* --- Deník -------------------------------------------------------- */}
      {journal.length > 0 && (
        <section>
          <h2 className="display mb-7 text-[1.75rem]">Z deníku</h2>
          <div className="space-y-8">
            {journal.reverse().map((j) => (
              <article key={j.id}>
                <p className="text-[0.8125rem] text-faint">
                  {formatCzechDate(j.onDate)}
                  {j.phaseId && isPhaseId(j.phaseId) && ` · ${PHASES[j.phaseId].name}`}
                </p>
                {j.note && (
                  <p className="mt-2 whitespace-pre-line text-[0.9375rem] leading-relaxed">
                    {j.note}
                  </p>
                )}
                {j.gratitude && (
                  <p className="mt-2 border-l-2 border-[var(--color-champagne)] pl-4 text-[0.9375rem] italic leading-relaxed text-soft">
                    {j.gratitude}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* --- Dopisy ------------------------------------------------------- */}
      {letters.length > 0 && (
        <section>
          <h2 className="display mb-7 text-[1.75rem]">Dopisy</h2>
          <div className="space-y-10">
            {letters.map((l) => (
              <article key={l.id}>
                <p className="eyebrow">{LETTER_TARGETS[l.toWhom]}</p>
                {l.title && <h3 className="display mt-2 text-xl">{l.title}</h3>}
                <p className="mt-1 text-[0.8125rem] text-faint">{formatCzechDate(l.onDate)}</p>
                <p className="mt-4 whitespace-pre-line text-[0.9375rem] leading-[1.8]">
                  {l.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-[var(--line)] pt-10 text-center">
        <p className="display text-xl leading-relaxed">
          Tohle všechno jste zvládla.
        </p>
        <p className="mt-4 text-[0.8125rem] text-faint">IVF by Gabi</p>
      </section>
    </div>
  )
}
