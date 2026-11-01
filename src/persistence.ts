// One ordered write queue; failed writes block later writes until explicit retry.
let tail: Promise<unknown> = Promise.resolve();
let pending = 0;
let sequence = 0;
let retrying = false;
const failures = new Map<number, { operation: () => Promise<unknown>; error: Error }>();
const listeners = new Set<() => void>();
export function storageState() { return { pending, error: failures.values().next().value?.error ?? null }; }
export function subscribeStorage(fn: () => void) { listeners.add(fn); return () => { listeners.delete(fn); }; }
function emit() { listeners.forEach(fn => fn()); }
export function write<T>(operation: () => Promise<T>): Promise<T> {
  const id = sequence++;
  pending++; emit();
  const next = tail.then(() => {
    if (failures.size && !retrying) throw new Error('Prethodni upis nije uspio. Ponovi spremanje.');
    return operation();
  });
  tail = next.then(() => {}, e => { failures.set(id, { operation, error: e instanceof Error ? e : new Error(String(e)) }); });
  return next.finally(() => { pending--; emit(); });
}
export async function flush() {
  // A lifecycle/export flush must also wait for writes appended while it awaits.
  let observed: Promise<unknown>;
  do { observed = tail; await observed; } while (observed !== tail);
  const error = storageState().error; if (error) throw error;
}
export async function retryFailed() {
  await tail; retrying = true;
  try {
    for (const [id, failure] of failures) {
      await failure.operation(); failures.delete(id);
    }
  } finally { retrying = false; emit(); }
}
