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
        main: resolve(__dirname, 'index.html'),
        protocols: resolve(__dirname, 'protocols.html'),
      },
    },
  },
  root: 'src',
  base: '/medcard/'
});