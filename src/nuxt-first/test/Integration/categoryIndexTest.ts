import { describe, it, expect, vi } from 'vitest'
import { $fetch } from '@nuxt/test-utils-edge';
import layoutTest from './layoutTest'

export default async function categoryIndexTest(){
  describe("category index test", async() => {
    it("contain text message", async() => {
      const params = 'category'
      const html = await $fetch(`/${params}`)
      expect(html).toContain(`カテゴリー:${params}`)
      layoutTest(html)
    })
  })
}