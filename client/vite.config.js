import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          secure: false,
        },
      },
    },
    envPrefix: 'VITE_',
    plugins: [react(), svgr()],
  };
});
