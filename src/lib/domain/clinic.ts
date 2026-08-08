/**
 * Moje klinika.
 *
 * Číslo na kliniku se hledá ve chvíli, kdy se ho hledat nedá: v šest ráno,
 * s bolestí břicha, když si žena nemůže vzpomenout, jestli má volat sestře
 * nebo na recepci. Proto tady není jen název. Je tu telefon jako odkaz,
 * který se dá zmáčknout, a kolonka na to, co má člověk dělat mimo ordinační
 * hodiny.
 *
 * Data zůstávají v zařízení. Nikam se neodesílají a nikdo je nesdílí.
 *
 * Čistý doménový modul.
 */

export interface ClinicContact {
  /** Role. „lékař“, „embryolog“, „sestra“, „recepce“. */
  role: string
  name: string
  phone: string
  email: string
  note: string
}

/**
 * Koordinátorka.
 *
 * V českých centrech je to člověk, který ženu provází celým cyklem: hlídá
 * termíny, vysvětluje rozpis a je první, komu se volá, když se něco děje.
 * V seznamu kontaktů se ale ztrácí mezi lékařem, embryologem a recepcí,
 * a přitom je to číslo, které žena hledá nejčastěji. Proto má vlastní pole
 * a vlastní kartu, ne jen řádek mezi ostatními.
 */
export interface Coordinator {
  name: string
  phone: string
  email: string
  note: string
}

export function emptyCoordinator(): Coordinator {
  return { name: '', phone: '', email: '', note: '' }
}

/** Má koordinátorka vyplněné aspoň něco, co se dá použít? */
export function hasCoordinator(c: Coordinator): boolean {
  return Boolean(c.name.trim() || c.phone.trim() || c.email.trim())
}

export interface Clinic {
  name: string
  address: string
  /** Hlavní číslo, které se vytáčí jako první. */
  phone: string
  /** Kam volat mimo ordinační hodiny. Tohle je ta kolonka, o kterou jde. */
  emergencyPhone: string
  email: string
  web: string
  /** Ordinační hodiny vlastními slovy. */
  hours: string
  /** Co klinika řekla, že se má dělat. Vlastními slovy uživatelky. */
  instructions: string
  note: string
  contacts: ClinicContact[]
  coordinator: Coordinator
}

export function emptyClinic(): Clinic {
  return {
    name: '',
    address: '',
    phone: '',
    emergencyPhone: '',
    email: '',
    web: '',
    hours: '',
    instructions: '',
    note: '',
    contacts: [],
    coordinator: emptyCoordinator(),
  }
}

export function emptyContact(role = ''): ClinicContact {
  return { role, name: '', phone: '', email: '', note: '' }
}

/** Role, které se nabízejí jako první. Vlastní se dá dopsat. */
export const CONTACT_ROLES = ['Lékař', 'Embryolog', 'Sestra', 'Recepce', 'Genetik', 'Psycholog']

/** Je v klinice zapsané aspoň něco? */
export function hasClinic(c: Clinic): boolean {
  return Boolean(
    c.name.trim() ||
      c.phone.trim() ||
      c.emergencyPhone.trim() ||
      c.email.trim() ||
      c.instructions.trim() ||
      c.contacts.some((x) => x.name.trim() || x.phone.trim()),
  )
}

/**
 * Telefon do podoby, kterou přijme `tel:`.
 *
 * Mezery a pomlčky v `href` některé telefony neustojí, ale na obrazovce
 * se číslo musí zobrazit tak, jak ho uživatelka napsala, jinak si ho
 * nepřečte.
 */
export function telHref(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, '')
  return cleaned ? `tel:${cleaned}` : ''
}
