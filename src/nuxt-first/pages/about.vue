<template>
  <NuxtLayout>
    <h1>About Page </h1>
    <h2>{{ subtitle }}</h2>
  </NuxtLayout>
</template>

<script setup>
  definePageMeta({
    layout: "original",
  });
  useHead({
    title: 'About Page',
    meta:[
      { hid: 'description', name: 'description', content: 'これはAboutページです。'}
    ]
  });
  const subtitle = 'この文書はNuxt.jsの基本的な使用方法について説明しています。'
</script>
