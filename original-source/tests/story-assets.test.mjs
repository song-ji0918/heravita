import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

test('every timeline stage has its own image asset', () => {
  for (const name of [
    'timeline-compressed-1.webp',
    'timeline-compressed-2.jpg',
    'timeline-compressed-3.webp',
    'timeline-compressed-4.webp',
    'timeline-compressed-5.jpg',
  ]) {
    const file = path.join(root, 'public/story', name)
    assert.ok(fs.existsSync(file), 'Missing timeline image: ' + name)
    assert.ok(fs.statSync(file).size > 10000, 'Timeline image is unexpectedly small: ' + name)
  }
})

test('the supplied courtyard photograph is available for the mission chapter', () => {
  const file = path.join(root, 'public/story/mission-courtyard.png')
  assert.ok(fs.existsSync(file), 'Missing supplied mission photograph')
  assert.ok(fs.statSync(file).size > 10000)
})
