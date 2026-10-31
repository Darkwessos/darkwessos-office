import type { CapacitorConfig } from '@capacitor/cli';

// First native package: the source ZIP contained no appId or signing configuration.
// Keep this identity and the same signing key for subsequent APK updates.
const config: CapacitorConfig = {
  appId: 'ba.darkwessos.office',
  appName: 'DARKWESSOS Office',
  webDir: 'dist',
  server: { hostname: 'localhost', androidScheme: 'https' },
  android: { backgroundColor: '#0D1A2D' },
};
export default config;
