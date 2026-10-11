import { describe, expect, it } from 'vitest'

import { HERO_VIDEO_AUTOPLAY_MUTED, HERO_VIDEO_SRC } from './Banner'

describe('homepage hero video configuration', () => {
  it('uses the deployable public video path', () => {
    expect(HERO_VIDEO_SRC).toBe('/home/hero.mp4')
  })

  it('starts muted so browser autoplay is allowed', () => {
    expect(HERO_VIDEO_AUTOPLAY_MUTED).toBe(true)
  })
})
