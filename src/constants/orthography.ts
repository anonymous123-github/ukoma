import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'A',
  'Ą',
  'B',
  'D',
  'E',
  'G',
  'H',
  'I',
  'K',
  'L',
  'Ł',
  'M',
  'N',
  'NG',
  'O',
  'P',
  'R',
  'Ř',
  'X',
  'T',
  'U',
  'W',
  'Y',
  'Z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
