import { db, type ActiveContext, type Card } from './db';
import { updateContext } from './context';
import { write } from './persistence';

// A deliberately schematic, non-canonical pilot location. This is not evidence
// for geography, distance or a route in the story world.
export const COVE_ID = 'atlas-test-skrivena-uvala';

export const coveProposal: Card = {
  id: COVE_ID,
  kind: 'mjesto',
  name: 'Skrivena uvala',
  text: 'Radna mogućnost: zaklonjena uvala u kojoj bi se mogao pojaviti nepoznat čamac.',
  x: 0.46,
  y: 0.64,
  status: 'TEST',
  canonStatus: 'NON_CANON',
  geometryState: 'SCHEMATIC',
  sourceNote: 'Kreativni eksperiment ŽIVE MAPE; nije potvrđeno u kanonskim izvorima.',
  impulse: 'Ko bi poželio pronaći ovu uvalu — i zašto?'
};

export async function discoverCove(): Promise<void> {
  // Card and active context are saved atomically; repeat actions do not overwrite
  // the user's edits to a previously discovered place.
  await write(() => db.transaction('rw', db.cards, db.meta, async () => {
    const found = await db.cards.get(COVE_ID);
    if (found && found.kind !== 'mjesto') throw new Error('ID lokacije već pripada drugoj kartici.');
    if (!found) await db.cards.add({ ...coveProposal });
    const current = (await db.meta.get('activeContext'))?.value as ActiveContext | undefined;
    if (!current) throw new Error('Aktivni kontekst nije spreman.');
    await db.meta.put({
      key: 'activeContext',
      value: { ...current, locationId: COVE_ID, page: 'ATLAS', prompt: '' }
    });
  }));
}

export async function openPlaceInStory(placeId: string): Promise<void> {
  const place = await db.cards.get(placeId);
  if (!place || place.kind !== 'mjesto') throw new Error('Odabrano mjesto nije dostupno.');
  // Never insert material into BlockNote or alter the manuscript.
  await updateContext({ locationId: placeId, page: 'STORY' });
}
