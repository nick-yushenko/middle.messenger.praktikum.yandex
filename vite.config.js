import { defineConfig } from "vite";

import handlebars from "vite-plugin-handlebars";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

import error from "./src/layouts/error/error";
import scroll from "./src/layouts/scroll/scroll";
import app from "./src/layouts/app/app";
import profile from "./src/layouts/profile/profile";
import sidebar from "./src/layouts/sidebar/sidebar";
import messenger from "./src/layouts/messenger/messenger";

import { mockData } from "./mock.js";
import vitePluginHandlebarsPrecompile from "./vite-plugin-handlebars-precompile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    createSvgSpritePlugin({
      symbolId: "[name]",
    }),
    vitePluginHandlebarsPrecompile(),
  ],
  root: resolve(__dirname, "src"),
  alias: {
    "@": resolve(__dirname, "src"),
  },
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  server: {
    open: "index.html",
  },
});
