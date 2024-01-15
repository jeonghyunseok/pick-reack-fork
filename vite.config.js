import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
  };
});
