import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      hello: (msg: String) => console.log(`Hello ${msg}!`)
    }
  }
})