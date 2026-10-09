import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const root = path.resolve(import.meta.dirname, '..')
const readSource = (relativePath) => readFileSync(path.join(root, relativePath), 'utf8')

test('footer shows the requested social channels without placeholder phone numbers', () => {
  const footer = readSource('src/components/Footer/Footer.tsx')

  for (const channel of ['Facebook', 'Instagram', 'LinkedIn', 'X', 'YouTube', 'WhatsApp', 'LINE']) {
    assert.match(footer, new RegExp(`name: "${channel}"`))
  }
  assert.doesNotMatch(footer, /footer\.phones|phones\.map/)
})

test('contact details omit unverified telephone placeholders in every language', () => {
  const contact = readSource('src/pages/Contact/ContactS1.tsx')
  assert.doesNotMatch(contact, /contactPage\.phones|contactPage\.phoneLabel|contactPage\.globalLabel/)

  for (const language of ['zh', 'en', 'es', 'ar']) {
    const locale = JSON.parse(readSource(`src/i18n/locales/${language}.json`))
    assert.equal(locale.footer.phones, undefined)
    assert.equal(locale.contactPage.phones, undefined)
    assert.equal(locale.contactPage.phoneLabel, undefined)
    assert.equal(locale.contactPage.globalLabel, undefined)
    assert.equal(locale.contactPage.fields.some(({ value }) => /^(?:0{8,}|90999999993)$/.test(value)), false)
  }
})

test('footer navigation, legal links, and social icons share subtle hover feedback', () => {
  const footer = readSource('src/components/Footer/Footer.tsx')
  assert.match(footer, /FOOTER_LINK_CLASS/)
  assert.match(footer, /motion-safe:hover:after:scale-x-100/)
  assert.match(footer, /motion-safe:hover:-translate-y-0\.5/)
  assert.match(footer, /hover:text-\[#4e716c\]/)
  assert.doesNotMatch(footer, /hover:opacity/)
  assert.match(footer, /focus-visible:outline/)
})

test('narrow header preserves logo clearance and uses color hover feedback', () => {
  const header = readSource('src/components/Header/Header.tsx')
  const language = readSource('src/components/Header/LanguageDropdown.tsx')
  const navMenu = readSource('src/components/Header/NavMenu.tsx')
  assert.match(header, /max-\[399px\]:h-9/)
  assert.match(header, /min-\[400px\]:inline/)
  assert.match(header, /aria-label=\{t\("header\.contact"\)\}/)
  for (const component of [header, language, navMenu]) {
    assert.doesNotMatch(component, /hover:opacity/)
  }
})
