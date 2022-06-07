import { setup } from '@nuxt/test-utils-edge';
import { fileURLToPath } from 'node:url'
import  aboutTest  from './Integration/aboutTest';
import  indexTest  from './Integration/indexTest';
import  usersTest  from './Integration/usersTest';
import  usersListTest  from './Integration/usersListTest';
import  usersIdtest  from './Integration/usersIdTest';
import  postsIndexTest   from './Integration/postsIndexTest';
import  categoryIndexTest   from './Integration/categoryIndexTest';
import  categoryArticleTest   from './Integration/categoryArticleTest';

await setup({
  //setupTimeout:6e6,
  //rootDir: fileURLToPath(new URL('/', import.meta.url)),
  runner: 'vitest',
  configFile: "vitest.config",
  //logLevel: 2,
  //server:false,
  //build:false
  
})
await aboutTest()
await indexTest()
await usersTest()
await usersListTest()
await usersIdtest()
await postsIndexTest()
await categoryIndexTest()
await categoryArticleTest()
