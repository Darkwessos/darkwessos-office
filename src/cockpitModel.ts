/** Pick the latest real manuscript scene, without changing scene data. */
export function chooseLastScene(
  scenes: readonly { id: string; updatedAt: number; createdAt: number; deletedAt?: number | null }[],
): string | null {
  let last: (typeof scenes)[number] | null = null;
  for (const scene of scenes) {
    if (scene.deletedAt != null) continue;
    if (!last || scene.updatedAt > last.updatedAt ||
        (scene.updatedAt === last.updatedAt && scene.createdAt > last.createdAt)) {
      last = scene;
    }
  }
  return last?.id ?? null;
}
