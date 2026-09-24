import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // '/' because this deploys as a GitHub *user* site (DavidAViteMijangos7.github.io).
  // If the repo is ever renamed (project site), this must become '/<repo-name>/' —
  // and the absolute '/images/...' paths in src/ would then need import.meta.env.BASE_URL.
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
});
