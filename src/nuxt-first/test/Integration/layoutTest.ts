import { describe, it, expect } from 'vitest';

export default async function layoutTest(html){
  describe("layout test", async() => {
    it("contain text message", async() => {
      expect(html).toContain('Home')
      expect(html).toContain('About')
      expect(html).toContain('About page not prefetched')
      expect(html).toContain('User List')
    })
    it("junp Home",async() => {
      const a = html.find('a')
      console.log(a)
      expect(a.is('a')).toBe(true) 

    })
  })
}