import { defineConfig } from "vitest/config";
//import Vue from "@vitejs/plugin-vue";

export default defineConfig({

  plugins: [
    //Vue(),
  ],
  test: {
    include:  ["**/test/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    environment: "jsdom",
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
    globals: true,
  },
})