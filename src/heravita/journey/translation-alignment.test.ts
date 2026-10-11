import { describe, expect, it } from 'vitest'

import english from './source.en.json'
import chinese from './source.zh.json'

const expectedDayTitles = {
  rebuild: [
    'Return to Yourself',
    'See Yourself Clearly',
    'Rebuild the Body',
    'Rebuild from Within',
    'Rebuild Relationships',
    'Rebuild Your Life System',
    'Integrate · A New Life System'
  ],
  flourish: [
    'Open a New Chapter',
    'Envision Your Future Body',
    "Awaken the Body's Potential",
    'Love and Abundance',
    'Create · Unfold',
    'Design the Next Ten Years',
    'Flourish · Step Into a Larger World'
  ]
} as const

const expectedSectionTitles = {
  rebuild: {
    title: 'Life Rebuilding',
    medicalTitle: 'Nutrition · Genetics · Deep Health',
    relationshipTitle: 'Rebuilding Fulfilling Relationships',
    energyTitle: 'Seven-Chakra Life Energy Realignment'
  },
  flourish: {
    title: 'Life Flourishing',
    medicalTitle: 'Advanced Longevity and Regenerative Medicine',
    relationshipTitle: 'Love · Joy · Meaning',
    energyTitle: 'Life in Full Flourish'
  }
} as const

describe.each(['rebuild', 'flourish'] as const)('%s title translation alignment', (stage) => {
  it('keeps the same number of day headings in Chinese and English', () => {
    expect(english.stages[stage].days).toHaveLength(chinese.stages[stage].days.length)
  })

  it('does not repeat the day number inside the English heading', () => {
    expect(english.stages[stage].days.map((day) => day.title)).toEqual(expectedDayTitles[stage])
  })

  it('uses the approved English section headings for the Chinese source titles', () => {
    const copy = english.stages[stage]
    const { title, medicalTitle, relationshipTitle, energyTitle } = expectedSectionTitles[stage]

    expect({ title: copy.title, medicalTitle: copy.medicalTitle, relationshipTitle: copy.relationshipTitle, energyTitle: copy.energyTitle }).toEqual({
      title,
      medicalTitle,
      relationshipTitle,
      energyTitle
    })
  })
})
