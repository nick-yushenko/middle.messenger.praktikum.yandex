import { defineConfig } from "vite";

import createSvgSpritePlugin from "vite-plugin-svg-sprite";

import { resolve, dirname } from "path";

import vitePluginHandlebarsPrecompile from "./vite-plugin-handlebars-precompile";

const __filename = new URL(import.meta.url).pathname;
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    createSvgSpritePlugin({
      symbolId: "[name]",
    }),
    vitePluginHandlebarsPrecompile(),
  ],
  root: resolve(__dirname, "src"),
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  server: {
    open: "index.html",
  },
});
