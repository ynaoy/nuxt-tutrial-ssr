import { describe, it, expect, } from 'vitest'
import { $fetch } from '@nuxt/test-utils-edge';
import layoutTest from './layoutTest'

export default async function usersListTest(){
  describe("users list test", async() => {
    it("contain text message", async() => {
      const html = await $fetch('/users/list')
      expect(html).toContain('I am the parent view')
      expect(html).toContain('ユーザ一覧')
      layoutTest(html)
    })
  })
}