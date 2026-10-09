import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const locales = ['zh', 'en', 'es', 'ar']
const requiredPaths = [
  'hero.eyebrow',
  'hero.title',
  'hero.signature',
  'hero.imageAlt',
  'origin.eyebrow',
  'origin.title',
  'origin.p1',
  'origin.p2',
  'origin.p3',
  'origin.imageAlt',
  'practice.eyebrow',
  'practice.title',
  'practice.p1',
  'practice.p2',
  'practice.quote',
  'practice.imageAlt',
  'accumulation.eyebrow',
  'accumulation.title',
  'accumulation.industryTitle',
  'accumulation.industry',
  'accumulation.lifeTitle',
  'accumulation.life',
  'accumulation.quote',
  'timeline.eyebrow',
  'timeline.title',
  'timeline.items.foundation',
  'timeline.items.europe',
  'timeline.items.upgrade',
  'timeline.items.global',
  'timeline.items.service',
  'today.eyebrow',
  'today.title',
  'today.p1',
  'today.visionLabel',
  'today.vision',
  'today.imageAlt',
  'close.quote',
  'close.cta',
]

const readFounderStory = (locale) => {
  const source = fs.readFileSync(path.join(root, 'src', 'i18n', 'locales', `${locale}.json`), 'utf8')
  return JSON.parse(source).founderStory
}

const getValue = (source, key) => key.split('.').reduce((value, segment) => value?.[segment], source)

test('every founder locale exposes the V4 editorial story schema', () => {
  for (const locale of locales) {
    const story = readFounderStory(locale)
    for (const key of requiredPaths) {
      assert.equal(typeof getValue(story, key), 'string', `${locale} is missing ${key}`)
    }
  }
})

test('Chinese founder story uses an anonymous brand-origin voice', () => {
  const story = readFounderStory('zh')
  const content = JSON.stringify(story)

  assert.match(story.hero.title, /HERAVITA/)
  assert.doesNotMatch(content, /尚玉艳|她|我|我的/)
  assert.equal(story.today.vision, '成为全球领先的生命重建与长寿生活方式平台。')
})

test('founder page keeps the editorial hierarchy and closing CTA rhythm', () => {
  const source = fs.readFileSync(path.join(root, 'src', 'pages', 'Founder', 'FounderPage.tsx'), 'utf8')

  assert.match(source, /text-balance/)
  assert.match(source, /lg:text-\[64px\]/)
  assert.match(source, /mt-14/)
})
