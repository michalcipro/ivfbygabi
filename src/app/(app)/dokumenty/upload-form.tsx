'use client'

import { useRef, useState, useTransition } from 'react'
import { addDocumentAction } from '@/app/actions/health'

function todayIso(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/**
 * Nahrání zprávy. Textové soubory přečteme přímo v prohlížeči; u PDF
 * a fotografií uživatelku vedeme k tomu, aby text zkopírovala nebo přepsala —
 * je to spolehlivější než OCR na nekvalitní fotce a zůstává to pod její kontrolou.
 */
export function UploadForm({ categories }: { categories: { key: string; label: string }[] }) {
  const [text, setText] = useState('')
  const [fileName, setFileName] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  const onFile = async (file: File | undefined) => {
    if (!file) return
    setFileName(file.name)

    if (file.type.startsWith('text/') || /\.(txt|csv|md|json)$/i.test(file.name)) {
      setText((await file.text()).slice(0, 200_000))
      return
    }

    setText(
      (prev) =>
        prev ||
        `[Soubor: ${file.name}]\n\nZkopírujte sem prosím text ze zprávy — hodnoty vytáhneme automaticky.\nStačí i jen řádky s výsledky, například:\nAMH: 1,24 ng/ml\nFSH: 6,8 IU/l`,
    )
  }

  return (
    <form
      ref={formRef}
      action={(fd) =>
        startTransition(async () => {
          await addDocumentAction(fd)
          formRef.current?.reset()
          setText('')
          setFileName(null)
        })
      }
      className="surface space-y-6 p-7"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <label className="label" htmlFor="title">
            Název dokumentu
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Např. Hormonální profil — březen"
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="onDate">
            Datum
          </label>
          <input
            id="onDate"
            name="onDate"
            type="date"
            required
            defaultValue={todayIso()}
            className="field"
          />
        </div>
        <div className="sm:col-span-3">
          <label className="label" htmlFor="category">
            Typ zprávy
          </label>
          <select id="category" name="category" className="field" defaultValue="hormony">
            {categories.map((c) => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="file">
          Soubor (nepovinné)
        </label>
        <input
          id="file"
          type="file"
          accept=".txt,.csv,.md,.json,.pdf,image/*"
          onChange={(e) => void onFile(e.target.files?.[0])}
          className="field file:mr-4 file:rounded-full file:border-0 file:bg-[var(--card-muted)] file:px-4 file:py-1.5 file:text-[0.8125rem]"
        />
        {fileName && <p className="mt-1.5 text-xs text-faint">Vybráno: {fileName}</p>}
      </div>

      <div>
        <label className="label" htmlFor="rawText">
          Text zprávy
        </label>
        <textarea
          id="rawText"
          name="rawText"
          rows={9}
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={
            'Vložte sem text zprávy nebo jen řádky s hodnotami:\n\nAMH: 1,24 ng/ml\nFSH: 6,8 IU/l\nTSH: 2,1 mIU/l'
          }
          className="field resize-y font-mono !text-[0.8125rem] leading-relaxed"
        />
        <p className="mt-2 text-xs leading-relaxed text-faint">
          Fotografie a PDF zatím neumíme přečíst automaticky — zkopírujte text z e-mailu
          od kliniky nebo přepište hodnoty z papíru. Parser si poradí i s jednotlivými řádky.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={pending || text.length < 5}>
          {pending ? 'Zpracovávám…' : 'Nahrát a zpracovat'}
        </button>
        {pending && (
          <span className="breathe text-[0.875rem] text-soft">
            Hledám hodnoty a připravuji vysvětlení…
          </span>
        )}
      </div>
    </form>
  )
}
