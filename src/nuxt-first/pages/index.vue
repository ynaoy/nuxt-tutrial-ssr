<template>
  <NuxtLayout>
    <div>
      <div>count:{{ count }}</div>
      <button @click="addCount">Add</button>
    </div>

    <div>
      <h1>Pluginの動作確認</h1>
      <button v-tooltip="'TOPにメッセージが表示されます'">TOP</button>  
    </div>
  </NuxtLayout>
</template>

<script setup>

  //nuxt3ではvuexはプリインストールされておらず代わりにcomposables以下にuseState()をもつ関数を作る
  const { count,increment } = useCount()
  const addCount = increment

  //<< Bug v-tooltipに関しては動作しなかった >>
  const { $hello } = useNuxtApp()
  onMounted( $hello("mounted") )
</script>

<style scoped>
.tooltip {
  display: block !important;
  padding: 4px;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  display: none;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}

.tooltip.danger .tooltip-inner {
  background: red;
}

.tooltip.caution .tooltip-inner {
  background: yellow;
  color: black;
}
</style>
