import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/elodie-p11-main/', // Chemin de base pour GitHub Pages
});
