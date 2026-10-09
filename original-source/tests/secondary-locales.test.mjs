import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

for (const page of ['Story', 'Discover']) {
  test(`${page} has translated content for every site language`, () => {
    const component = read(`src/pages/${page}/${page}Page.tsx`)
    assert.match(component, /useTranslation/)
    for (const language of ['zh', 'en', 'es', 'ar']) {
      const localized = read(`src/pages/${page}/${page.toLowerCase()}.${language}.html`)
      assert.match(component, new RegExp(`${page.toLowerCase()}\\.${language}\\.html\\?raw`))
      assert.match(localized, /<main>/)
      if (language !== 'zh') assert.doesNotMatch(localized, /[\u4e00-\u9fff]/)
    }
  })
}
