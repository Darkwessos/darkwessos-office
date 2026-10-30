import test from 'node:test'
import assert from 'node:assert/strict'
import { makeDraftRecord, validInitialBlocks, LOCAL_DRAFT_ID } from './draftUtils.js'

test('draft records are local, working-only and preserve rich text blocks', () => {
  const blocks = [{ id: 'first', type: 'paragraph', content: [{ type: 'text', text: 'Darkwood' }] }]
  const record = makeDraftRecord('  Prva scena  ', blocks, '2026-10-30T00:00:00.000Z')
  assert.equal(record.id, LOCAL_DRAFT_ID)
  assert.equal(record.title, 'Prva scena')
  assert.equal(record.status, 'RADNO')
  assert.deepEqual(record.blocks, blocks)
  assert.notEqual(record.blocks, blocks)
  assert.equal(record.updatedAt, '2026-10-30T00:00:00.000Z')
})

test('invalid draft content is not passed to BlockNote as initial content', () => {
  assert.equal(validInitialBlocks(null), undefined)
  assert.equal(validInitialBlocks({ blocks: [] }), undefined)
  assert.equal(validInitialBlocks({ blocks: 'corrupt' }), undefined)
  assert.deepEqual(validInitialBlocks({ blocks: [{ type: 'paragraph' }] }), [{ type: 'paragraph' }])
  assert.equal(makeDraftRecord('  ', null, 'now').title, 'Radni rukopis')
})
