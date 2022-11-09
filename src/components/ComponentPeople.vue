<template>
  <div id="component-people" :style="bGComponentMain">
    <h2 class="live-share">
      各界大神直播分享
    </h2>
    <div class="people">
      <img ref="leftTop" src="@/assets/left-top.gif" alt="">
      <img ref="rightTop" src="@/assets/right-top.gif" alt="">
      <img ref="leftBottom" src="@/assets/left-bottom.gif" alt="">
      <img ref="rightBottom" src="@/assets/right-bottom.gif" alt="">
    </div>
  </div>
</template>

<script lang='ts'>
import { CSSProperties, defineComponent, onMounted, ref } from 'vue';
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
const leftTop = ref<HTMLElement | null>(null);
const rightTop = ref<HTMLElement | null>(null);
const leftBottom = ref<HTMLElement | null>(null);
const rightBottom = ref<HTMLElement | null>(null);
onMounted(() => {
  window.addEventListener('scroll', (e) => {
    if (leftTop.value?.offsetTop) {
      if (window.scrollY >= leftTop.value?.offsetTop - 400) {
        leftTop.value.className = 'animation-left-top';
      }
    }

    if (rightTop.value?.offsetTop) {
      if (window.scrollY >= rightTop.value?.offsetTop - 400) {
        rightTop.value.className = 'animation-right-top';
      }
    }

    if (leftBottom.value?.offsetTop) {
      if (window.scrollY >= leftBottom.value?.offsetTop - 400) {
        leftBottom.value.className = 'animation-left-bottom';
      }
    }

    if (rightBottom.value?.offsetTop) {
      if (window.scrollY >= rightBottom.value?.offsetTop - 400) {
        rightBottom.value.className = 'animation-right-bottom';
      }
    }
  });
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

    /* visibility: hidden; */
    width: 1064px;
  }
}
</style>
