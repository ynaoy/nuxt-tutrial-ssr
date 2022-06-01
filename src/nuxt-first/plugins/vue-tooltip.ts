import { defineNuxtPlugin } from "#app";
import  VTooltip  from "v-tooltip";

export default defineNuxtPlugin((nuxtApp) => {
  //<< Bug 以下が正しく動作しない >>
  nuxtApp.vueApp.use(VTooltip)
});