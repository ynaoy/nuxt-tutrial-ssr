<template>
  <NuxtLayout>
    <h1>About Page </h1>
    <h2>{{ subtitle }}</h2>
  </NuxtLayout>
</template>

<script>
  definePageMeta({
      layout: "original",
  })
  export default {
    setup(){
      const subtitle = 'この文書はNuxt.jsの基本的な使用方法について説明しています。'
      return { subtitle }
    }
  }
</script>
