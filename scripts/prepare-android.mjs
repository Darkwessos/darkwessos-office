import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
function cap(...args) {
  const result = spawnSync(process.execPath, ['node_modules/@capacitor/cli/bin/capacitor', ...args], { stdio: 'inherit' });
  if (result.status !== 0) throw new Error(`Capacitor ${args.join(' ')} nije uspio`);
}
if (!existsSync('dist/index.html')) throw new Error('Nedostaje lokalni produkcijski build.');
if (/registerSW|serviceWorker/.test(readFileSync('dist/index.html', 'utf8'))) throw new Error('Native build sadrži service-worker registraciju. Koristi build:native.');
const js = (await import('node:fs')).readdirSync('dist/assets').filter(f => f.endsWith('.js')).map(f => readFileSync(`dist/assets/${f}`, 'utf8')).join('\n');
if (!js.includes('deckInitialized')) throw new Error('Bundle nije dostavljeni MVP 0.2 (nedostaje marker modela).');
if (!existsSync('android')) cap('add', 'android');
const manifest = 'android/app/src/main/AndroidManifest.xml';
let xml = readFileSync(manifest, 'utf8');
// Keep manuscript outside Android cloud/device backups; explicit verified JSON is the backup.
xml = xml.replace(/android:allowBackup="[^"]*"/g, 'android:allowBackup="false"');
xml = xml.replace(/android:windowSoftInputMode="[^"]*"/g, 'android:windowSoftInputMode="adjustResize"');
writeFileSync(manifest, xml);
cap('sync', 'android');
const config = JSON.parse(readFileSync('android/app/src/main/assets/capacitor.config.json', 'utf8'));
if (config.server?.url) throw new Error('Udaljeni server.url nije dozvoljen u APK-u.');
if (config.appId !== 'ba.darkwessos.office') throw new Error('Neočekivani Android identitet.');
