'use client'

export function PrintButton() {
  return (
    <button onClick={() => window.print()} className="btn btn-primary !py-2 !text-[0.8125rem]">
      Vytisknout nebo uložit do PDF
    </button>
  )
}
