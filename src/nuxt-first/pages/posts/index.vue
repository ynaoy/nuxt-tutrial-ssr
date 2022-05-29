<template>
  <NuxtLayout>
    <div>
      <h1>記事一覧</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script>
  export default {
    setup(){
      // OptionalAPIのasyncData()に相当するもの？
      const { data:posts } = useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts/'))
      
      // OptionalAPIのfetch()に相当するもの？
      //const { data:posts } = useFetch('https://jsonplaceholder.typicode.com/posts/')
      return { posts }
    },
  }
</script>