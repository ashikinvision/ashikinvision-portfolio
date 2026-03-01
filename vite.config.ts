import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Path aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@data': resolve(__dirname, './src/data'),
      '@styles': resolve(__dirname, './src/styles'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },

  // Build optimizations
  build: {
    // Target modern browsers for smaller bundles
    target: 'esnext',

    // Minification
    minify: 'esbuild',

    // CSS code splitting
    cssCodeSplit: true,

    // Source maps for production (can be disabled for smaller builds)
    sourcemap: false,

    // Chunk splitting strategy
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-helmet': ['react-helmet-async'],
        },
        // Asset file naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.');
          const ext = info?.[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|ttf|eot/i.test(ext || '')) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Increase chunk size warning limit (we have manual chunks)
    chunkSizeWarningLimit: 500,

    // Report compressed size
    reportCompressedSize: true,
  },

  // Development server
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // Preview server (for testing production builds)
  preview: {
    port: 4173,
  },

  // CSS options
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      // If using SCSS in the future
    },
  },

  // Optimization options
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-helmet-async',
    ],
  },

  // Environment variables prefix
  envPrefix: 'VITE_',
});
