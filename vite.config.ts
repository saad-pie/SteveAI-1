import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    // 1. Set base to '/' for Netlify root deployment
    base: '/', 
    plugins: [react(), tailwindcss()],
    define: {
      // Netlify will inject GEMINI_API_KEY from your dashboard settings
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Standard practice points to /src
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
    // 2. Ensure the build output is clean for Netlify
    build: {
      outDir: 'dist',
    }
  };
});
