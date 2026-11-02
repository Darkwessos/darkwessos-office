import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chooseLastScene } from '../src/cockpitModel.ts';

test('cockpit chooses last edited existing scene, not the first created', () => {
  assert.equal(chooseLastScene([
    { id: 'older', createdAt: 1, updatedAt: 100 },
    { id: 'newer', createdAt: 5, updatedAt: 200 },
    { id: 'deleted', createdAt: 8, updatedAt: 300, deletedAt: 310 },
  ]), 'newer');
});

test('cockpit does not revive deleted scenes, and empty manuscript remains valid', () => {
  assert.equal(chooseLastScene([{ id: 'deleted', createdAt: 1, updatedAt: 2, deletedAt: 3 }]), null);
  assert.equal(chooseLastScene([]), null);
});

test('cockpit picks most recently created scene when edit timestamps tie', () => {
  assert.equal(chooseLastScene([
    { id: 'first', createdAt: 1, updatedAt: 30 },
    { id: 'second', createdAt: 20, updatedAt: 30, deletedAt: null },
  ]), 'second');
});
