import {defineConfig} from "vite";

import handlebars from "vite-plugin-handlebars";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

import {fileURLToPath} from 'url';
import {resolve, dirname} from 'path';

import error from "./src/layouts/error/error"
import scroll from "./src/layouts/scroll/scroll"
import app from "./src/layouts/app/app"
import profile from "./src/layouts/profile/profile"
import sidebar from "./src/layouts/sidebar/sidebar"
import messenger from "./src/layouts/messenger/messenger"

import {mockData} from "./mock.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);


export default defineConfig({
  plugins: [
    createSvgSpritePlugin({
      symbolId: "[name]",
    }),
    handlebars({
    partialDirectory: resolve(__dirname, "src/partials"),
    helpers: {
      app,
      profile,
      error,
      scroll,
      sidebar,
      messenger,
    },
    context: mockData
  })],
  server: {
    open: 'index.html',
  },
  root: resolve(__dirname, './'),
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/styles/variables';`,
      },
    },
  },

  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        error500: resolve(__dirname, "src/pages/error/500/index.html"),
        error404: resolve(__dirname, "src/pages/error/404/index.html"),
        login: resolve(__dirname, "src/pages/login/index.html"),
        signup: resolve(__dirname, "src/pages/signup/index.html"),

        app: resolve(__dirname, "src/pages/app/index.html"),
        profile: resolve(__dirname, "src/pages/profile/index.html"),
      }
    }
  },
  assetsInclude: "**/*.hbs"
})