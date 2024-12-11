import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add these extensions to resolve JavaScript/JSX and TypeScript/TSX files
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude this dependency from optimization if needed
  },
});

