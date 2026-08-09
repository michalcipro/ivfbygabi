/**
 * Zpětná vazba pro Gabrielu.
 *
 * Čistý modul: skládá zprávu a hlídá, že se neposílá prázdná nebo omylem.
 * Odesílání samotné je v klientovi, protože je to jediné místo v Bloomii,
 * kde něco opouští zařízení.
 *
 * ------------------------------------------------------------- SOUKROMÍ ---
 * Odesílá se jen to, co uživatelka napsala do formuláře. **Nikdy** se
 * nepřikládá nic z jejích dat: žádné cykly, embrya, transfery, hodnoty,
 * finance ani deník. Ani „pro kontext“. Kdyby se to jednou stalo, byla by to
 * ta nejhorší možná zrada důvěry, kterou tahle aplikace má.
 */

export type FeedbackTopic =
  | 'zpetna-vazba'
  | 'napad'
  | 'chybi'
  | 'nefunguje'
  | 'zmena'
  | 'pochvala'
  | 'recenze'
  | 'jine'

export const FEEDBACK_TOPICS: { id: FeedbackTopic; label: string }[] = [
  { id: 'zpetna-vazba', label: 'Zpětná vazba' },
  { id: 'napad', label: 'Nápad' },
  { id: 'chybi', label: 'Co mi v aplikaci chybí' },
  { id: 'nefunguje', label: 'Něco nefunguje' },
  { id: 'zmena', label: 'Chci něco změnit' },
  { id: 'pochvala', label: 'Pochvala' },
  { id: 'recenze', label: 'Recenze' },
  { id: 'jine', label: 'Jiné' },
]

export const TOPIC_LABEL: Record<FeedbackTopic, string> = Object.fromEntries(
  FEEDBACK_TOPICS.map((t) => [t.id, t.label]),
) as Record<FeedbackTopic, string>

export interface Feedback {
  topic: FeedbackTopic
  name: string
  email: string
  message: string
  /** Smí Gabi odpovědět? Bez souhlasu se e-mail neposílá. */
  mayReply: boolean
  /** Hvězdičky 1 až 5. `null` = uživatelka nehodnotila. */
  rating: number | null
  likes: string
  changes: string
  missing: string
}

export function emptyFeedback(): Feedback {
  return {
    topic: 'zpetna-vazba',
    name: '',
    email: '',
    message: '',
    mayReply: false,
    rating: null,
    likes: '',
    changes: '',
    missing: '',
  }
}

/** Má se co odeslat? Prázdný formulář se nikam neposílá. */
export function hasContent(f: Feedback): boolean {
  return Boolean(
    f.message.trim() || f.likes.trim() || f.changes.trim() || f.missing.trim() || f.rating !== null,
  )
}

/**
 * Vypadá adresa jako adresa?
 *
 * Schválně velmi mírná kontrola. Přísný vzorec odmítne platné adresy
 * a žena, které aplikace odmítne její vlastní e-mail, ho už nenapíše.
 */
export function looksLikeEmail(s: string): boolean {
  const t = s.trim()
  return t.length >= 5 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)
}

export function subjectFor(f: Feedback): string {
  return `Bloomia: ${TOPIC_LABEL[f.topic]}`
}

/** Tělo e-mailu. Prázdné části se vynechávají, ať se to dá číst. */
export function bodyFor(f: Feedback, sentOn: string): string {
  const radky: string[] = [`Téma: ${TOPIC_LABEL[f.topic]}`]

  if (f.name.trim()) radky.push(`Jméno: ${f.name.trim()}`)

  // E-mail jde jen se souhlasem. Bez něj je odpověď stejně nemožná, tak
  // nemá důvod adresu opisovat.
  if (f.mayReply && looksLikeEmail(f.email)) radky.push(`E-mail: ${f.email.trim()}`)
  radky.push(f.mayReply ? 'Souhlas s odpovědí: ano' : 'Souhlas s odpovědí: ne')

  if (f.rating !== null) radky.push(`Hodnocení: ${f.rating} z 5`)
  radky.push(`Odesláno: ${sentOn}`)

  if (f.message.trim()) radky.push('', 'Zpráva:', f.message.trim())
  if (f.likes.trim()) radky.push('', 'Co se líbí:', f.likes.trim())
  if (f.changes.trim()) radky.push('', 'Co bych změnila:', f.changes.trim())
  if (f.missing.trim()) radky.push('', 'Co chybí:', f.missing.trim())

  return radky.join('\n')
}
