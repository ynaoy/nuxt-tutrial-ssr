import { describe, it, expect, } from 'vitest'
import { $fetch } from '@nuxt/test-utils-edge';
import layoutTest from './layoutTest'

export default async function usersIdTest(){
  describe("users id test", async() => {
    it("contain text message", async() => {
      const users = [
        { id: 1, name: 'John Doe'},
        { id: 2, name: 'Kevin Smith'},
        {id: 3, name: 'Harry Bosch'},
      ]
      let html
      for(let i in users){
        html = await $fetch(`/users/${users[i].id}`)
        expect(html).toContain('I am the parent view')
        expect(html).toContain(`ユーザID: ${users[i].name}`)
        layoutTest(html)
      }
    })
  })
}
