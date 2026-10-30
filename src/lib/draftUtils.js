export const LOCAL_DRAFT_ID = 'primary'

export function validInitialBlocks(saved) {
  return Array.isArray(saved?.blocks) && saved.blocks.length ? saved.blocks : undefined
}

export function makeDraftRecord(title, blocks, now = new Date().toISOString()) {
  return {
    id: LOCAL_DRAFT_ID,
    title: typeof title === 'string' && title.trim() ? title.trim() : 'Radni rukopis',
    blocks: JSON.parse(JSON.stringify(Array.isArray(blocks) ? blocks : [])),
    updatedAt: now,
    status: 'RADNO',
  }
}
