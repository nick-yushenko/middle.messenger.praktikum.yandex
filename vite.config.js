import {defineConfig} from "vite";
import handlebars from "vite-plugin-handlebars";
import {fileURLToPath} from 'url';
import {resolve, dirname} from 'path';

import error from "./src/layouts/error/error"
import scroll from "./src/layouts/scroll/scroll"
import chat from "./src/layouts/chat/chat"
import sidebar from "./src/layouts/sidebar/sidebar"
import {mockData} from "./mock.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


export default defineConfig({
  server: {
    port: 3000,
  },
  root: resolve(__dirname, 'src'),
  base: './',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/variables';`,
      },
    },
  },
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, "src/partials"),
    helpers: {
      chat,
      error,
      scroll,
      sidebar
    },
    context: mockData
  })],
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        "500": resolve(__dirname, "src/pages/error/500.html"),
        "404": resolve(__dirname, "src/pages/error/404.html"),
        login: resolve(__dirname, "src/pages/login/index.html"),
        signup: resolve(__dirname, "src/pages/signup/index.html"),
      }
    }
  },
  assetsInclude: "**/*.hbs"
})