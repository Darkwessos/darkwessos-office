import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { flush } from './persistence';
import { handoffExport, type ExportResult } from './exportFlow';

let transferBusy = false;
export function setNativeTransferBusy(value: boolean) { transferBusy = value; }
export const isNative = () => Capacitor.isNativePlatform();
export async function deliverFile(name: string, text: string, mime: string): Promise<ExportResult> {
  if (isNative()) return handoffExport({
    flush,
    create: async (fileName, data) => {
      // Cache only: no broad external-storage permissions and no automatic upload.
      const path = `exports/${crypto.randomUUID()}/${fileName}`;
      const { uri } = await Filesystem.writeFile({ path, data, directory: Directory.Cache, encoding: Encoding.UTF8, recursive: true });
      return uri;
    },
    share: async (uri, fileName) => { await Share.share({ title: fileName, files: [uri], dialogTitle: 'Sačuvaj DARKWESSOS kopiju' }); },
  }, name, text);
  await flush();
  const url = URL.createObjectURL(new Blob([text], { type: mime }));
  const a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  return { status: 'handoff', name };
}

export async function prepareNativeBundle() {
  if (!isNative()) return;
  // Never clear IndexedDB. The native bundle is versioned by the APK, not a SW.
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map(r => r.unregister()));
  }
  if ('caches' in window) {
    for (const key of await caches.keys()) if (key.startsWith('workbox-')) await caches.delete(key);
  }
}

export async function installNativeLifecycle(onBack: () => Promise<void>, onError: (message: string) => void) {
  if (!isNative()) return () => {};
  const pause = await App.addListener('appStateChange', ({ isActive }) => {
    if (!isActive) void flush().catch(e => onError('Spremanje nije završeno: ' + String(e)));
  });
  try {
    let handling = false;
    const back = await App.addListener('backButton', () => {
      if (handling || transferBusy) return;
      handling = true;
      void onBack().catch(e => onError('Povratak je zaustavljen: ' + String(e))).finally(() => { handling = false; });
    });
    return () => { void pause.remove(); void back.remove(); };
  } catch (e) { await pause.remove(); throw e; }
}
export async function exitNative() { await flush(); await App.exitApp(); }
