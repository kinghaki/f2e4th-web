<template>
  <div id="app">
    <router-view ref="home"></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from '@vue/runtime-core';

const home = ref<HTMLElement | null>(null);
// onMounted(() => {
//   window.addEventListener('scroll', () => {
//     if (home.value) {
//       home.value.style.position = 'absolute';
//       home
//     }
//     document.body.style.position = 'absolute';
//     document.body.style.top = '0px';
//     document.body.style.height = '10000px';
//     document.body.style.overflow = 'scroll';
//   }, true);
// });
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
}
</style>
