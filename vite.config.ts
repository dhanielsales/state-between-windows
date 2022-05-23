import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import paths from './vite.config.paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: paths,
  },
});
