import { describe, it, expect, vi } from 'vitest'
import { $fetch} from '@nuxt/test-utils-edge';

export default async function aboutTest(){
  describe("about test", async() => {
    it("contain text message", async() => {
      const html = await $fetch('/about')
      expect(html).toContain('この文書はNuxt.jsの基本的な使用方法について説明しています。')
    })
  })
}