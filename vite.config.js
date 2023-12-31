import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react_calculator',
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Aldrich'],
      },
    }),
  ],
});
