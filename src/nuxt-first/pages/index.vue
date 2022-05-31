<template>
  <NuxtLayout>
    <div>
      <div>count:{{ count }}</div>
      <button @click="addCount">Add</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
  //nuxt3ではvuexはプリインストールされておらず代わりにcomposables以下にuseState()をもつ関数を作る
  const { count,increment } = useCount()

  const addCount = increment

</script>