import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

test('English story copy reads naturally without duplicated labels or broken sentences', () => {
  const html = read('src/pages/Story/story.en.html')
  assert.match(html, /HeraVita began with a question about life, not a business/)
  assert.match(html, /<h3>Our vision<\/h3>/)
  assert.match(html, /<h3>Our mission<\/h3>/)
  assert.doesNotMatch(html, /HeraVita The first is a|\. Nearly|OUR VISION · Vision|OUR MISSION · Mission/)
})

test('Spanish and Arabic story copy have single, native-language mission labels', () => {
  const spanish = read('src/pages/Story/story.es.html')
  const arabic = read('src/pages/Story/story.ar.html')
  assert.match(spanish, /<h3>Visión<\/h3>/)
  assert.match(spanish, /<h3>Misión<\/h3>/)
  assert.match(arabic, /<h3>الرؤية<\/h3>/)
  assert.match(arabic, /<h3>الرسالة<\/h3>/)
  assert.doesNotMatch(spanish, /NUESTRA VISIÓN · Visión|NUESTRA MISIÓN · Misión/)
  assert.doesNotMatch(arabic, /رؤيتنا · الرؤية|مهمتنا · مهمتنا/)
})

test('Story timeline switches to translated stage titles in every supported language', () => {
  const page = read('src/pages/Story/StoryPage.tsx')
  assert.match(page, /"Global expansion"/)
  assert.match(page, /"Expansión global"/)
  assert.match(page, /"التوسع العالمي"/)
})
