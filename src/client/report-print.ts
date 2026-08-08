import { buildReport, type ReportDoc, type ReportOptions } from '../lib/domain/report'
import { formatCzechDate } from '../lib/domain/dates'
import { exerciseById } from '../lib/domain/exercises'
import { cycles, exerciseLog, expenses, journalList, profile, S, viewDate } from './store'
import { esc } from './ui'

/**
 * Přehled mé IVF cesty.
 *
 * Otevře se v novém okně a rovnou nabídne tisk. Prohlížeč umí „uložit jako
 * PDF“ ve všech systémech, takže se nikam nemusí posílat data a aplikace
 * nepotřebuje žádnou knihovnu navíc. Dokument nikdy neopustí zařízení,
 * dokud si ho uživatelka sama neuloží nebo nepošle.
 *
 * Vzhled je tiskový, ne aplikační: bílý papír, patkové nadpisy, tenké linky.
 * Na obrazovce by prémiové stíny fungovaly, na papíře by zůstaly šedé fleky.
 */

const CSS = `
  @page { margin: 18mm 16mm 20mm; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font: 400 11pt/1.6 "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif;
    color: #211d1a;
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .sheet { max-width: 176mm; margin: 0 auto; padding: 10mm 6mm 16mm; }
  h1 { font-size: 26pt; font-weight: 400; letter-spacing: -0.01em; margin: 0; line-height: 1.15; }
  .sub { margin: 6pt 0 0; font-size: 10.5pt; color: #6b625a; }
  .rule { height: 1px; background: #d8cfc6; margin: 14pt 0 0; border: 0; }
  section { margin-top: 22pt; break-inside: auto; }
  section > h2 {
    font-size: 15pt; font-weight: 400; margin: 0 0 2pt;
    padding-bottom: 5pt; border-bottom: 1px solid #d8cfc6;
    break-after: avoid;
  }
  .block { margin-top: 12pt; break-inside: avoid; }
  .block > h3 {
    font: 500 8.5pt/1.4 -apple-system, "Segoe UI", system-ui, sans-serif;
    letter-spacing: .1em; text-transform: uppercase; color: #8a7f74;
    margin: 0 0 5pt;
  }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 3.5pt 0; vertical-align: top; border-bottom: 1px solid #eee8e1; }
  td.k { width: 38%; padding-right: 10pt; color: #6b625a; }
  td.v { font-variant-numeric: tabular-nums; }
  .note {
    margin: 7pt 0 0; font-size: 9.5pt; line-height: 1.55; color: #6b625a;
    white-space: pre-wrap;
  }
  .empty { margin: 8pt 0 0; font-size: 10pt; color: #8a7f74; font-style: italic; }
  footer {
    margin-top: 26pt; padding-top: 8pt; border-top: 1px solid #d8cfc6;
    font-size: 8.5pt; line-height: 1.6; color: #8a7f74;
  }
  .bar {
    position: sticky; top: 0; display: flex; gap: 8px; align-items: center;
    padding: 10px 14px; background: #211d1a; color: #fff;
    font: 400 13px/1.4 -apple-system, "Segoe UI", system-ui, sans-serif;
  }
  .bar button {
    font: inherit; padding: 6px 14px; border-radius: 999px; cursor: pointer;
    border: 1px solid rgba(255,255,255,.35); background: #fff; color: #211d1a;
  }
  .bar span { opacity: .75; font-size: 12px; }
  @media print { .bar { display: none; } }
`

function blokHtml(title: string, rowsHtml: string, note: string | undefined): string {
  return `<div class="block">
    ${title ? `<h3>${esc(title)}</h3>` : ''}
    ${rowsHtml ? `<table>${rowsHtml}</table>` : ''}
    ${note ? `<p class="note">${esc(note)}</p>` : ''}
  </div>`
}

export function reportHtml(doc: ReportDoc): string {
  const sekce = doc.sections
    .map((s) => {
      const bloky = s.blocks
        .filter((b) => b.rows.length > 0 || b.note)
        .map((b) =>
          blokHtml(
            b.title,
            b.rows.map((r) => `<tr><td class="k">${esc(r.label)}</td><td class="v">${esc(r.value)}</td></tr>`).join(''),
            b.note,
          ),
        )
        .join('')

      return `<section>
        <h2>${esc(s.title)}</h2>
        ${bloky || `<p class="empty">${esc(s.empty ?? 'Zatím nic zapsaného.')}</p>`}
      </section>`
    })
    .join('')

  return `<!doctype html>
<html lang="cs"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(doc.title)}</title>
<style>${CSS}</style>
</head><body>
<div class="bar">
  <button type="button" onclick="window.print()">Uložit jako PDF</button>
  <span>V dialogu tisku vyberte Uložit jako PDF. Tenhle proužek se nevytiskne.</span>
</div>
<div class="sheet">
  <h1>${esc(doc.title)}</h1>
  <p class="sub">${esc(doc.subtitle)}</p>
  <hr class="rule">
  ${sekce}
  <footer>
    Vytvořeno v aplikaci IVF by Gabi ${esc(formatCzechDate(doc.createdOn, { year: true }))}.
    Je to osobní přehled toho, co jste si sama zapsala, ne zdravotnická dokumentace
    a ne lékařská zpráva. Nic v něm aplikace nevyhodnocuje ani nediagnostikuje.
    Pro rozhodování o léčbě platí vždycky to, co říká vaše klinika.
  </footer>
</div>
</body></html>`
}

/** Poskládá dokument z toho, co je právě v úložišti. */
export function currentReport(options: ReportOptions): ReportDoc {
  return buildReport({
    profile: profile(),
    cycles: cycles(),
    embryos: S.d.embryos,
    expenses: expenses(),
    journal: journalList().map((j) => ({
      date: j.date,
      mood: j.mood,
      note: j.note,
      promptAnswer: j.promptAnswer,
      win: j.win,
    })),
    exercises: exerciseLog().map((e) => ({
      date: e.date,
      exercise: e.exercise,
      title: exerciseById(e.exercise)?.title ?? e.exercise,
      fields: e.fields,
    })),
    today: viewDate(),
    options,
  })
}

/**
 * Otevře přehled v novém okně.
 *
 * Vrací `false`, když okno zablokoval prohlížeč. Volající pak musí říct proč,
 * jinak by tlačítko vypadalo rozbitě.
 */
export function openReport(doc: ReportDoc): boolean {
  const w = window.open('', '_blank')
  if (!w) return false
  w.document.open()
  w.document.write(reportHtml(doc))
  w.document.close()
  return true
}
