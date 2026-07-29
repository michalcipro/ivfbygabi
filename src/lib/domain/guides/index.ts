import { registerGuides, type PhaseGuide } from '../phase-guide'
import { CONCEPTION_GUIDES } from './conception'
import { LOSS_GUIDES } from './loss'
import { LATER_GUIDES } from './later'

/**
 * Registr průvodců fázemi. Import tohohle souboru je to, co je zapne —
 * proto ho aplikace importuje jako první.
 */

export const ALL_GUIDES: PhaseGuide[] = [...CONCEPTION_GUIDES, ...LOSS_GUIDES, ...LATER_GUIDES]

registerGuides(ALL_GUIDES)

export { guideFor, guideCount } from '../phase-guide'
export type { PhaseGuide, Supplement, GuideBlock } from '../phase-guide'
