import { describe, it, expect, } from 'vitest'
import { $fetch } from '@nuxt/test-utils-edge';
import layoutTest from './layoutTest'

export default async function usersTest(){
  describe("users test", async() => {
    it("contain text message", async() => {
      const html = await $fetch('/users')
      expect(html).toContain('I am the parent view')
      layoutTest(html)
    })
  })
}