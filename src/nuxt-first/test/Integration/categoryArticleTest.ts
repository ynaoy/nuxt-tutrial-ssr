import { describe, it, expect, vi } from 'vitest'
import { $fetch } from '@nuxt/test-utils-edge';
import layoutTest from './layoutTest'

export default async function categoryArticleTest(){
  describe("category article test", async() => {
    it("contain text message", async() => {
      const params1 = 'category'
      const params2 = 'article'
      const html = await $fetch(`/${params1}/${params2}`)
      expect(html).toContain(`${params1}/${params2}`)
      layoutTest(html)
    })
  })
}