import { describe, it, expect, vi } from 'vitest'
import index from "./pages/index.vue"
import { mount } from "@vue/test-utils";
import { setup, $fetch} from '@nuxt/test-utils-edge';

//vi.stubGlobal("useCount",()=>{ return{count: 0, increment: vi.fn()} });
//vi.stubGlobal("useNuxtApp", ()=>{ return{$hello: (hoge)=>{}} });

export default async function indexTest(){
  describe("index test", async() => {

    it("contain text message", async() => {
      //const html = mount(about);
      const html = await $fetch('/')
      console.log(html)
      expect(html).toContain("count:0")
      console.log(html)
      //expect(html).toContain("Add")
      //expect(html).toContain("Pluginの動作確認")
      //expect(html).toContain("TOPにメッセージが表示されます")
    })

  //it("contain text message", async() => {
    //const html = mount(index);
    //expect(html.text()).toContain("count:0")
    //expect(html.text()).toContain("Add")
    //expect(html.text()).toContain("Pluginの動作確認")
    //expect(html.text()).toContain("TOPにメッセージが表示されます")
  //})
  })
}