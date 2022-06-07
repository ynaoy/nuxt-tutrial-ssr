import { describe, it, expect } from 'vitest'
import { $fetch } from '@nuxt/test-utils-edge';
import layoutTest from './layoutTest'

export default async function PostsIndexTest(){
  describe("posts index test", async() => {
    it("contain text message", async() => {
      const html = await $fetch('/posts')
      expect(html).toContain('記事一覧')
      layoutTest(html)
    })
  })
}