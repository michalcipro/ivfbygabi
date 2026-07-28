'use client'

import { useState } from 'react'
import { addLabAction, addMeasurementAction } from '@/app/actions/health'

function todayIso(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function AddLabForm({
  params,
}: {
  params: { key: string; name: string; unit: string }[]
}) {
  const [open, setOpen] = useState(false)
  const [paramKey, setParamKey] = useState(params[0]?.key ?? '')
  const unit = params.find((p) => p.key === paramKey)?.unit ?? ''

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn btn-secondary">
        + Přidat laboratorní hodnotu
      </button>
    )
  }

  return (
    <form action={addLabAction} className="surface space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="label" htmlFor="paramKey">
            Parametr
          </label>
          <select
            id="paramKey"
            name="paramKey"
            value={paramKey}
            onChange={(e) => setParamKey(e.target.value)}
            className="field"
          >
            {params.map((p) => (
              <option key={p.key} value={p.key}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="value">
            Hodnota {unit && <span className="text-faint">({unit})</span>}
          </label>
          <input id="value" name="value" type="number" step="any" required className="field" />
        </div>
        <div>
          <label className="label" htmlFor="onDate">
            Datum odběru
          </label>
          <input
            id="onDate"
            name="onDate"
            type="date"
            defaultValue={todayIso()}
            required
            className="field"
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="note">
          Poznámka
        </label>
        <input
          id="note"
          name="note"
          type="text"
          placeholder="Např. 3. den cyklu, po stimulaci…"
          className="field"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Uložit
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Zrušit
        </button>
      </div>
    </form>
  )
}

export function AddMeasurementForm({
  metrics,
}: {
  metrics: { key: string; label: string; unit: string }[]
}) {
  const [open, setOpen] = useState(false)
  const [metric, setMetric] = useState(metrics[0]?.key ?? '')
  const unit = metrics.find((m) => m.key === metric)?.unit ?? ''

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn btn-secondary">
        + Přidat měření
      </button>
    )
  }

  return (
    <form action={addMeasurementAction} className="surface space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="label" htmlFor="metric">
            Co měříte
          </label>
          <select
            id="metric"
            name="metric"
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
            className="field"
          >
            {metrics.map((m) => (
              <option key={m.key} value={m.key}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="mvalue">
            Hodnota {unit && <span className="text-faint">({unit})</span>}
          </label>
          <input id="mvalue" name="value" type="number" step="any" required className="field" />
        </div>
        <div>
          <label className="label" htmlFor="monDate">
            Datum
          </label>
          <input
            id="monDate"
            name="onDate"
            type="date"
            defaultValue={todayIso()}
            required
            className="field"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Uložit
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Zrušit
        </button>
      </div>
    </form>
  )
}
