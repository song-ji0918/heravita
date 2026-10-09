import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

const pillars = [
  'global-longevity-medicine',
  'emotional-rebuilding',
  'nervous-system-reset',
  'healing-environment',
  'lifestyle-rebuilding',
]

test('the five homepage method buttons deep-link into one method page', () => {
  const app = read('src/App.tsx')
  const home = read('src/components/HomeNarrative/HomeNarrative.tsx')
  const page = read('src/pages/Method/MethodPage.tsx')

  assert.match(app, /<Route path="\/method" element=\{<MethodPage \/>\} \/>/)
  assert.match(home, /navigate\(`\/method#\$\{methodAnchors\[index\]\}`\)/)
  for (const id of pillars) {
    assert.match(page, new RegExp(`id=["']${id}["']`))
  }
  assert.match(page, /location\.hash/)
  assert.match(page, /<Header overlay \/>/)
  assert.match(page, /<Footer \/>/)
})

test('method page keeps the image sequence and renders every theme as a full-viewport scene', () => {
  const page = read('src/pages/Method/MethodPage.tsx')
  const css = read('src/pages/Method/method.css')

  for (const image of [
    '01_Hero.png',
    '02_Whole_Person.png',
    '03_Global_Longevity_Medicine.png',
    '04_Emotional_Rebuilding.png',
    '05_Nervous_System_Reset.png',
    '06_Healing_Environment.png',
    '07_Lifestyle_Rebuilding.png',
    '08_Discover_Your_Journey.png',
  ]) {
    assert.match(page, new RegExp(image.replace('.', '\\.')))
    assert.ok(fs.existsSync(path.join(root, 'public', 'method', image)), image)
  }

  assert.match(page, /to="\/#journey"/)
  assert.match(css, /object-fit:\s*cover/)
  assert.match(css, /min-height:\s*100dvh/)
  assert.match(page, /className=\{`method-scene/)
  assert.match(css, /\.method-scene\s*\{[^}]*min-height:\s*100dvh/s)
  assert.doesNotMatch(css, /\.method-split\s*\{/)
})

test('Chinese and English method content are separated and closing CTA is not a repeated title', () => {
  const page = read('src/pages/Method/MethodPage.tsx')
  assert.match(page, /heroTitle: "生命重建方法"/)
  assert.match(page, /wholeTitle: "完整地理解一个人"/)
  assert.match(page, /processTitle: "生命重建的六步路径"/)
  assert.match(page, /journeyTitle: "发现属于你的生命旅程"/)
  assert.match(page, /journeyCta: "查看四个生命阶段"/)
  assert.match(page, /journeyTitle: "YOUR JOURNEY BEGINS HERE"/)
  assert.match(page, /journeyCta: "SEE THE FOUR STAGES"/)
  assert.match(page, /es: \{\s*heroTitle: "NUESTRO MÉTODO"/)
  assert.match(page, /ar: \{\s*heroTitle: "منهجنا"/)
  assert.doesNotMatch(page, /stepEnglish/)
})
