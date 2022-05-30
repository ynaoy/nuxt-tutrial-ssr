<template>
  <h1>カテゴリー:{{  useRoute().params.category }}</h1>
</template>

<script>
  import { useRoute } from 'vue-router'
  export default {
    setup(){
      return { useRoute } //useRoute()はnuxt2におけるthis.$route
    }
  }
</script>