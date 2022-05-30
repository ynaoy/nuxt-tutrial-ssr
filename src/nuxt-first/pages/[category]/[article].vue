<template>
  <h1>{{ useRoute().params.category }}/{{ useRoute().params.article }}</h1>
</template>

<script>
  import { useRoute } from 'vue-router'
  export default {
    setup(){
      return { useRoute } //useRoute()はnuxt2におけるthis.$route
    }
  }
</script>