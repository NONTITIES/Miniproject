import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this project from /Miniproject/.
  base: '/Miniproject/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
