import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { DOC_CATEGORIES, listDocuments, listLabValues } from '@/lib/db/repo-health'
import { formatCzechDate } from '@/lib/domain/dates'
import { LAB_BY_KEY } from '@/lib/health/lab-params'
import { Badge, Card, EmptyState, Eyebrow, Markdown, SectionTitle } from '@/components/ui'
import { UploadForm } from './upload-form'

export const metadata: Metadata = { title: 'Dokumenty' }
export const dynamic = 'force-dynamic'

/**
 * Moje dokumenty. Uživatelka nahraje zprávu, my z ní vytáhneme laboratorní
 * hodnoty, vysvětlíme pojmy a propojíme je s grafy ve zdravotním přehledu.
 */
export default async function DocumentsPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const documents = listDocuments(ownerId)
  const labs = listLabValues(ownerId)

  const labsByDoc = labs.reduce<Record<string, typeof labs>>((acc, l) => {
    if (!l.documentId) return acc
    ;(acc[l.documentId] ??= []).push(l)
    return acc
  }, {})

  return (
    <div className="space-y-10">
      <header>
        <Eyebrow>Bezpečné úložiště</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Dokumenty</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Nahrajte lékařskou zprávu. Rozpoznáme hodnoty, vysvětlíme pojmy a doplníme je
          do grafů vývoje. Hodnocení výsledku vždy patří vašemu lékaři.
        </p>
      </header>

      <UploadForm categories={Object.entries(DOC_CATEGORIES).map(([k, v]) => ({ key: k, label: v }))} />

      <section>
        <SectionTitle
          title="Vaše dokumenty"
          subtitle={`${documents.length} ${documents.length === 1 ? 'dokument' : documents.length < 5 ? 'dokumenty' : 'dokumentů'}`}
        />

        {documents.length === 0 ? (
          <EmptyState
            icon="§"
            title="Zatím tu nic není"
            body="Nahrajte první zprávu. Nemusíte hledat PDF — stačí zkopírovat text z e-mailu od kliniky nebo přepsat hodnoty z papíru."
          />
        ) : (
          <div className="space-y-5">
            {documents.map((doc) => {
              const values = labsByDoc[doc.id] ?? []
              return (
                <Card key={doc.id} className="p-7">
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="display text-xl">{doc.title}</h3>
                      <p className="mt-1 text-[0.8125rem] text-faint">
                        {formatCzechDate(doc.onDate)}
                      </p>
                    </div>
                    <Badge>{DOC_CATEGORIES[doc.category] ?? 'Jiné'}</Badge>
                  </header>

                  {values.length > 0 && (
                    <div className="mt-5">
                      <p className="eyebrow mb-3">Rozpoznané hodnoty</p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {values.map((v) => (
                          <div
                            key={v.id}
                            className="flex items-baseline justify-between rounded-[var(--radius-sm)] bg-[var(--card-muted)] px-4 py-2.5"
                          >
                            <span className="text-[0.875rem]">
                              {LAB_BY_KEY[v.paramKey]?.name ?? v.paramKey}
                            </span>
                            <span className="text-[0.9375rem] font-medium">
                              {v.value} <span className="text-xs text-faint">{v.unit}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {doc.parsedSummary && (
                    <details className="mt-6 border-t border-[var(--line)] pt-5">
                      <summary className="cursor-pointer text-[0.9375rem] font-medium">
                        Co je ve zprávě — vysvětleno
                      </summary>
                      <div className="mt-4">
                        <Markdown text={doc.parsedSummary} className="!text-[0.9375rem]" />
                      </div>
                    </details>
                  )}

                  {doc.rawText && (
                    <details className="mt-3">
                      <summary className="cursor-pointer text-[0.8125rem] text-soft">
                        Zobrazit původní text
                      </summary>
                      <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap rounded-[var(--radius-sm)] bg-[var(--card-muted)] p-4 text-[0.8125rem] leading-relaxed text-soft">
                        {doc.rawText}
                      </pre>
                    </details>
                  )}
                </Card>
              )
            })}
          </div>
        )}
      </section>

      <Card muted className="p-6 text-[0.8125rem] leading-relaxed text-soft">
        Rozpoznávání hodnot je pomocné a může se zmýlit — vždy si zkontrolujte, že sedí
        s papírem. Vysvětlení pojmů je obecné a neříká nic o vaší konkrétní situaci.
        Interpretaci výsledků provádí výhradně váš lékař.
      </Card>
    </div>
  )
}
