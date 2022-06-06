import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
//import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({

  //plugins: [
    //Vue(),
    //AutoImport({
      //imports: ["vue"],
    //}),
  //],
  test: {
    include:  ["**/test/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    environment: "jsdom",
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
    globals: true,
    //hookTimeout: 1000000000,
    //threads:false,
    //silent:true,
    //testTimeout: 1000000000,
  },
})