import { setup } from '@nuxt/test-utils-edge';
import  aboutTest  from './UnitTest/aboutTest';
import  indexTest  from './UnitTest/indexTest';

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
