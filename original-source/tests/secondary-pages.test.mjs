import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')

test('brand story and life discovery are available as first-class app routes', () => {
  const app = read('src/App.tsx')

  assert.match(app, /import StoryPage from "\.\/pages\/Story\/StoryPage"/)
  assert.match(app, /import DiscoverPage from "\.\/pages\/Discover\/DiscoverPage"/)
  assert.match(app, /<Route path="\/story" element=\{<StoryPage \/>\} \/>/)
  assert.match(app, /<Route path="\/discover" element=\{<DiscoverPage \/>\} \/>/)
})

test('the home narrative connects its supplied second and fourth-screen CTAs', () => {
  const homeNarrative = read('src/components/HomeNarrative/HomeNarrative.tsx')

  assert.match(homeNarrative, /useNavigate/)
  assert.match(homeNarrative, /navigate\("\/story"\)/)
  assert.match(homeNarrative, /navigate\("\/discover"\)/)
})

test('secondary pages retain the supplied page content, interactions, and local assets', () => {
  for (const file of [
    'src/pages/Story/StoryPage.tsx',
    'src/pages/Story/story.css',
    'src/pages/Discover/DiscoverPage.tsx',
    'src/pages/Discover/discover.css',
  ]) {
    assert.equal(fs.existsSync(path.join(root, file)), true, file)
  }

  const story = read('src/pages/Story/StoryPage.tsx')
  const discover = read('src/pages/Discover/DiscoverPage.tsx')

  assert.match(story, /<Header overlay alwaysVisible \/>/)
  assert.match(story, /<Footer \/>/)
  assert.match(story, /belief-toggle/)
  assert.match(story, /stage-tab/)
  assert.match(discover, /<Header overlay \/>/)
  assert.match(discover, /<Footer \/>/)
  assert.match(discover, /discovery-carousel/)
  assert.match(discover, /discovery-prev/)
  assert.match(discover, /discovery-next/)
  assert.match(story, /window\.scrollTo\(0, 0\)/)
  assert.match(discover, /window\.scrollTo\(0, 0\)/)
  for (const language of ['zh', 'en', 'es', 'ar']) {
    assert.doesNotMatch(read(`src/pages/Story/story.${language}.html`), /<nav class="breadcrumb"/)
    assert.doesNotMatch(read(`src/pages/Discover/discover.${language}.html`), /<nav class="breadcrumb"/)
  }
  assert.doesNotMatch(discover, /success \? resolve\(\) : reject/)

  for (const asset of [
    'public/story/belief-compressed-1.webp',
    'public/story/timeline-compressed-1.webp',
    'public/discover/discover-why.jpg',
    'public/discover/discover-rate.jpg',
  ]) {
    assert.equal(fs.existsSync(path.join(root, asset)), true, asset)
  }
})
