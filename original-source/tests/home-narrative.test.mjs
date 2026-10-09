import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const readSource = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

test('home keeps the existing hero, marquee, and footer around the rebuilt narrative', () => {
  const home = readSource('src/pages/Home/HomePage.tsx')

  assert.match(home, /<Header overlay \/>/)
  assert.match(home, /<Banner \/>/)
  assert.match(home, /<HomeNarrative \/>/)
  assert.match(home, /<Section7 \/>/)
  assert.match(home, /<Footer \/>/)
  assert.doesNotMatch(home, /Sections\/Section[1-6]/)
})

test('rebuilt narrative contains the six supplied homepage screens in order', () => {
  const source = readSource('src/components/HomeNarrative/HomeNarrative.tsx')
  const chinese = JSON.parse(readSource('src/i18n/locales/zh.json')).homeNarrative
  const ids = ['belief', 'method', 'journey', 'global', 'proof', 'action']
  const positions = ids.map((id) => source.indexOf(`id='${id}'`))

  assert.equal(positions.every((position) => position >= 0), true)
  assert.deepEqual([...positions].sort((a, b) => a - b), positions)
  assert.equal(chinese.belief.titleLine1, '真正的长寿，\n不只是延长生命，')
  assert.equal(chinese.method.titleLine1, '让科学理解身体')
  assert.equal(chinese.journey.path, 'DISCOVER · RESET · REBUILD · FLOURISH')
  assert.equal(chinese.global.lead, '不同的地方，服务同一段生命旅程。')
  assert.equal(chinese.proof.titleLine1, '信任，来自')
  assert.equal(chinese.action.titleLine1, '生命的下一段，')
})

test('rebuilt narrative uses the supplied local artwork and scoped responsive styles', () => {
  const source = readSource('src/components/HomeNarrative/HomeNarrative.tsx')
  const styles = readSource('src/components/HomeNarrative/HomeNarrative.css')

  for (const image of ['belief-neuron.jpg', 'method-portrait.jpg', 'journey-ocean.jpg', 'destinations.jpg', 'family.jpg']) {
    assert.equal(fs.existsSync(path.join(root, 'public', 'home-narrative', image)), true, image)
    assert.match(styles, new RegExp(image.replace('.', '\\.')))
  }

  assert.match(source, /type='button'/)
  assert.doesNotMatch(source, /href='\/(?:journey|global|contact)'/)
  assert.match(styles, /@media \(max-width: 900px\)/)
  assert.match(styles, /@media \(max-width: 600px\)/)
  assert.match(styles, /\.home-narrative/)
})

test('rebuilt narrative switches all six screens across the supported languages', () => {
  const source = readSource('src/components/HomeNarrative/HomeNarrative.tsx')

  assert.match(source, /useTranslation/)
  assert.match(source, /homeNarrative\.belief/)
  assert.match(source, /homeNarrative\.method/)
  assert.match(source, /homeNarrative\.journey/)
  assert.match(source, /homeNarrative\.global/)
  assert.match(source, /homeNarrative\.proof/)
  assert.match(source, /homeNarrative\.action/)

  for (const language of ['zh', 'en', 'es', 'ar']) {
    const locale = JSON.parse(readSource(`src/i18n/locales/${language}.json`))
    const narrative = locale.homeNarrative

    assert.equal(typeof narrative.belief.titleLine1, 'string', `${language} belief`)
    assert.equal(narrative.method.items.length, 5, `${language} method items`)
    assert.equal(narrative.journey.items.length, 4, `${language} journey items`)
    assert.equal(narrative.global.items.length, 4, `${language} global items`)
    assert.equal(narrative.proof.items.length, 4, `${language} proof items`)
    assert.equal(narrative.action.items.length, 3, `${language} action items`)
  }
})

test('every rebuilt narrative button uses the Clinique La Prairie split-arrow treatment', () => {
  const source = readSource('src/components/HomeNarrative/HomeNarrative.tsx')
  const styles = readSource('src/components/HomeNarrative/HomeNarrative.css')
  const buttonTags = source.match(/<button\b/g) ?? []
  const referenceButtons = source.match(/<button[^>]+className='[^']*hn-clp-button/g) ?? []

  assert.equal(referenceButtons.length, buttonTags.length)
  assert.match(source, /hn-clp-button__label/)
  assert.match(source, /hn-clp-button__arrow/)
  assert.match(styles, /--hn-button-height:\s*48px/)
  assert.match(styles, /\.hn-clp-button__arrow/)
  assert.match(source, /hn-button-on-light/)
  assert.match(source, /hn-button-on-dark/)
  assert.match(styles, /\.hn-button-on-light\s*\{/)
  assert.match(styles, /\.hn-button-on-dark\s*\{/)
  assert.doesNotMatch(styles, /#a4bbc3/i)
  assert.doesNotMatch(source, /hn-glass-button|hn-outline-action/)
})

test('secondary English labels appear only when Chinese is the selected language', () => {
  const source = readSource('src/components/HomeNarrative/HomeNarrative.tsx')

  assert.match(source, /const showSecondaryEnglish = languageCode === 'zh'/)
  assert.match(source, /showSecondaryEnglish && <small>\{item\.english\}<\/small>/)
  assert.match(source, /showSecondaryEnglish && <small>\{item\.english\}<\/small>/)
})
