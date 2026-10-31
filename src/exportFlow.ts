// Platform-independent flow: sharing a cache file never proves an external backup.
export type ExportResult = { status: 'handoff'; name: string };
export interface ExportPorts {
  flush(): Promise<void>;
  create(name: string, text: string): Promise<string>;
  share(uri: string, name: string): Promise<void>;
}
export class ExportHandoffError extends Error {
  constructor() { super('Datoteka je napravljena u predmemoriji, ali dijeljenje nije potvrđeno (otkazano ili greška). Vanjska kopija nije potvrđena.'); }
}
export async function handoffExport(ports: ExportPorts, name: string, text: string): Promise<ExportResult> {
  await ports.flush();
  const uri = await ports.create(name, text);
  try { await ports.share(uri, name); }
  catch { throw new ExportHandoffError(); }
  return { status: 'handoff', name };
}
export function exportMessage(result: ExportResult): string {
  return `${result.name}: predano sistemskom dijalogu. Provjeri da si datoteku sačuvao izvan aplikacije; vanjska kopija nije automatski potvrđena.`;
}
