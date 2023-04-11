import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        protocols: resolve(__dirname, 'src/protocols.html'),
        protocols_group: resolve(__dirname, 'src/protocols-group.html'),
        appointments: resolve(__dirname, 'src/appointments.html'),
        empty: resolve(__dirname, 'src/empty.html'),
        research: resolve(__dirname, 'src/research.html'),
        history: resolve(__dirname, 'src/history.html'),
        info: resolve(__dirname, 'src/info.html'),
        insurance: resolve(__dirname, 'src/active.html'),
        details: resolve(__dirname, 'src/details.html'),
      },
    },
  },
  root: 'src',
  base: '/medcard/'
});