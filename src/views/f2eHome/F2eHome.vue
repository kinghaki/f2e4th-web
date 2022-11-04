<template>
  <div id="f2e-home" :style="bGHome">
    <ComponentHeader></ComponentHeader>
    <div class="home-main" :style="bgMainHome">
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, CSSProperties } from 'vue';
import bgHome from '@/assets/home/image.png';
import bgMain from '@/assets/home/Rectangle.png';

export default defineComponent({
  name: 'F2eHome'
});
</script>
<script setup lang="ts">
import ComponentHeader from '@/components/ComponentHeader.vue';

const bGHome = ref<CSSProperties>({
  width: '100vw',
  height: '100vh',
  backgroundSize: 'cover',
  // backgroundImage: `url(require("${bgBusHome}"))`, // require 是 webpack用 require 處理 image 的語法
  backgroundImage: `url("${bgHome}")`, // vite 是用 rollup 打包，不需使用 webapck 的 require
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  objectFit: 'cover'
});

const bgMainHome = ref<CSSProperties>({
  backgroundSize: 'cover',
  // backgroundImage: `url(require("${bgBusHome}"))`, // require 是 webpack用 require 處理 image 的語法
  backgroundImage: `url("${bgMain}")`, // vite 是用 rollup 打包，不需使用 webapck 的 require
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  objectFit: 'cover'
});
</script>

<style scoped lang='scss'>
#f2e-home {
  width: 100vw;
  height: 100vh;
  position: relative;

  .home-main {
    width: 1200px;
    height: 597px;
    margin: 0 auto;
    position: absolute;
    top: 101px;
    left: 0;
    right: 0;
  }
}
</style>
