import test from 'node:test'
import assert from 'node:assert/strict'
import { OFFICE_SECTIONS, getSection } from './officeConfig.js'

test('four unique Office areas are reachable from the navigation', () => {
  assert.deepEqual(OFFICE_SECTIONS.map(({ id }) => id), ['story', 'workshop', 'command', 'archive'])
  assert.deepEqual(OFFICE_SECTIONS.map(({ path }) => path), ['/story', '/workshop', '/command', '/archive'])
  assert.equal(new Set(OFFICE_SECTIONS.map(({ path }) => path)).size, 4)
})

test('unknown paths resolve to STORY and ARCHIVE is explicitly read-only', () => {
  assert.equal(getSection('/nonexistent').id, 'story')
  assert.equal(getSection('/archive').editable, false)
  assert.equal(getSection('/story').editable, true)
})
