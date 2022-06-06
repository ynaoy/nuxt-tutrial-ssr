import { describe, it, expect, vi } from 'vitest'
import about from "./pages/about.vue";
//import { fileURLToPath } from 'node:url';
import { mount } from "@vue/test-utils";
import { setup, $fetch} from '@nuxt/test-utils-edge';

//vi.stubGlobal("definePageMeta", vi.fn());
//vi.stubGlobal("useHead", vi.fn());
export default async function aboutTest(){
  describe("about test", async() => {
    it("contain text message", async() => {
      //const html = mount(about);
      const html = await $fetch('/about')
      expect(html).toContain('この文書はNuxt.jsの基本的な使用方法について説明しています。')
      setTimeout(()=>{expect(1+1).toBe(2)},20000)
      //expect(1+1).toBe(2)
    })
  })
}