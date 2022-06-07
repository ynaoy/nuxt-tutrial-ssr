import { describe, it, expect, vi } from 'vitest'
import { $fetch } from '@nuxt/test-utils-edge';
import layoutTest from './layoutTest'

export default async function indexTest(){
  describe("index test", async() => {

    it("contain text message", async() => {
      const html = await $fetch('/')
      expect(html).toContain("count:0")
      expect(html).toContain("Add")
      expect(html).toContain("Pluginの動作確認")
      //expect(html).toContain("TOPにメッセージが表示されます")
      layoutTest(html)
    })

  })
}