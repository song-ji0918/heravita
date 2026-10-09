import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const readSource = (relativePath) => readFileSync(path.join(root, relativePath), 'utf8')

test('visible brand references use one uppercase HERAVITA wordmark', () => {
  for (const language of ['zh', 'en', 'es', 'ar']) {
    const locale = JSON.parse(readSource(`src/i18n/locales/${language}.json`))
    const inspect = (value) => {
      if (typeof value === 'string') {
        if (value.includes('@') || value.includes('://')) return
        for (const match of value.matchAll(/hera\s*vita/gi)) {
          assert.equal(match[0], 'HERAVITA', `${language}: ${value}`)
        }
        if (language === 'ar') assert.doesNotMatch(value, /ه[ـ]?يرا فيتا/, `${language}: ${value}`)
      } else if (Array.isArray(value)) {
        value.forEach(inspect)
      } else if (value && typeof value === 'object') {
        Object.values(value).forEach(inspect)
      }
    }
    inspect(locale)
  }

  for (const file of [
    'src/components/Footer/Footer.tsx',
    'src/components/Header/Header.tsx',
    'src/components/HomeNarrative/HomeNarrative.tsx',
    'src/components/Sections/Section7/Section7.tsx',
  ]) {
    const source = readSource(file)
    const visibleCopy = source
      .replaceAll('/brand/heravita-logo-white.png', '')
      .replaceAll('/brand/heravita-logo-white@2x.png', '')
      .replaceAll('HERA VITA', '')
    for (const match of visibleCopy.matchAll(/hera\s*vita/gi)) {
      assert.equal(match[0], 'HERAVITA', `${file}: ${match[0]}`)
    }
  }
  const footer = readSource('src/components/Footer/Footer.tsx')
  assert.match(footer, /src="\/brand\/heravita-logo-white\.png"/)
  assert.match(footer, />HERAVITA<\/span>/)
  assert.match(readSource('index.html'), /<title>HERAVITA<\/title>/)
})
