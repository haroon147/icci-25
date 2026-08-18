import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // merged both build configs here
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser', // choose one (you had both terser & esbuild)
  },

  optimizeDeps: {
    exclude: ['lucide-react'],
  },

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },

  // GitHub Pages is served from a repository subpath. Vercel, GoDaddy, and
  // other root-domain hosts should load assets from the domain root.
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/icci-25/' : '/'),
});
