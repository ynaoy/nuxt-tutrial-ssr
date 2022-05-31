//nuxt2の_id.vueに相当する
<template>
  <h1>ユーザID: {{ user().name }}</h1>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  const id = useRoute().params.id //useRoute()はnuxt2におけるthis.$route
  const users = [
                { id: 1, name: 'John Doe'},
                { id: 2, name: 'Kevin Smith'},
                {id: 3, name: 'Harry Bosch'},
                ]
  //const user = computed(() => {return users.find(user => user.id == id)} )
  const user = () => { return users.find(user => user.id == id) }
  useHead({
    title: user().name
  });
  onMounted( console.log(useRoute().params) ) //mountedに相当するもの。クライアント側で実行される
  console.log(useRoute().params) //createdに相当するもの。サーバー側とクライアント側両方で実行される
</script>