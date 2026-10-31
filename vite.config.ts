import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    ...(mode === 'native' ? [] : [VitePWA({
      registerType: 'prompt',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'DARKWESSOS Office',
        short_name: 'DARKWESSOS',
        description: 'Radionica za književni i idejni razvoj svjetova.',
        lang: 'bs',
        theme_color: '#0D1A2D',
        background_color: '#0D1A2D',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024
      }
    })])
  ]
}));
