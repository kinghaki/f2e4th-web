<template>
  <div id="component-people" :style="bGComponentMain">
    <h2 class="live-share">
      各界大神直播分享
    </h2>
    <div class="people">
      <img src="@/assets/left-top.gif" alt="">
      <img src="@/assets/right-top.gif" alt="">
      <img src="@/assets/left-bottom.gif" alt="">
      <img src="@/assets/right-bottom.gif" alt="">
    </div>
  </div>
</template>

<script lang='ts'>
import { CSSProperties, defineComponent, ref } from 'vue';
import bgGroup from '@/assets/ComponentMain/main-bg.png';
export default defineComponent({
  name: 'ComponentPeople'
});
</script>

<script setup lang="ts">

const bGComponentMain = ref<CSSProperties>({
  backgroundSize: 'cover',
  // backgroundImage: `url(require("${bgBusHome}"))`, // require 是 webpack用 require 處理 image 的語法
  backgroundImage: `url("${bgGroup}")`, // vite 是用 rollup 打包，不需使用 webapck 的 require
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  objectFit: 'cover'
});
</script>
<style scoped lang='scss'>
#component-people {
  color: #fff;
  font-family: "Noto Serif TC";
  font-size: 60px;
  font-weight: 900;
  line-height: 170px;
  text-align: center;
  width: 100vw;

  .live-share {
    background: #3c221b;
  }

  .people {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 64px auto 0;
    padding-bottom: 64px;
    width: 1064px;
  }
}
</style>
