<template>
  <div id="component-people" :style="bGComponentMain">
    <h2 class="live-share">
      各界大神直播分享
    </h2>
    <div class="people">
      <div class="first">
        <p>網站的動態趨勢</p>
        <img
          ref="leftTop" src="@/assets/left-top.gif" alt=""
          class="hidden"
        >
      </div>
      <div class="second">
        <p>jQuery 也可以做到的互動效果</p>
        <img
          ref="rightTop" src="@/assets/right-top.gif" alt=""
          class="hidden"
        >
      </div>

      <div class="thrid">
        <p>網頁可以拖拖拉拉draggable.js 介紹</p>
        <img
          ref="leftBottom" src="@/assets/left-bottom.gif" alt=""
          class="hidden"
        >
      </div>
      <div class="fourth">
        <p>互動式網頁設計工程師該具備哪些技能？</p>
        <img
          ref="rightBottom" src="@/assets/right-bottom.gif" alt=""
          class="hidden"
        >
      </div>
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
    console.log(leftTop.value?.offsetTop);
    console.log(window.scrollY);
    console.log(leftTop.value?.offsetHeight);
    if (leftTop.value?.offsetTop) {
      if (window.scrollY >= leftTop.value?.offsetTop - leftTop.value.offsetHeight * 2) {
        leftTop.value.className = 'animation-left-top';
      } else {
        leftTop.value.className = 'hidden';
      }
    }

    if (rightTop.value?.offsetTop) {
      if (window.scrollY >= rightTop.value?.offsetTop - rightTop.value.offsetHeight * 2) {
        rightTop.value.className = 'animation-right-top';
      } else {
        rightTop.value.className = '';
      }
    }

    if (leftBottom.value?.offsetTop) {
      if (window.scrollY >= leftBottom.value?.offsetTop - leftBottom.value.offsetHeight * 2) {
        leftBottom.value.className = 'animation-left-bottom';
      } else {
        leftBottom.value.className = '';
      }
    }

    if (rightBottom.value?.offsetTop) {
      if (window.scrollY >= rightBottom.value?.offsetTop - rightBottom.value.offsetHeight * 2) {
        rightBottom.value.className = 'animation-right-bottom';
      } else {
        rightBottom.value.className = '';
      }
    }
  });
});
</script>
<style scoped lang='scss'>
/* stylelint-disable-next-line import-notation */
@import "@/styles/scss/rwd";

#component-people {
  color: #fff;
  font-family: "Noto Serif TC";
  font-size: 60px;
  font-weight: 900;
  line-height: 170px;
  padding-top: 30px;
  text-align: center;
  width: 100vw;

  .live-share {
    background: #3c221b;
  }

  .people {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 64px auto 0;
    padding-bottom: 64px;

    /* visibility: hidden; */

    /* width: 1064px; */

    @include rwd(padpc) {
      display: flex;
      width: 768px;
    }

    .first {
      width: 522px;

      @include rwd(padpc) {
        /* width: 343px; */
      }
    }

    .second {
      width: 522px;

      @include rwd(padpc) {
        /* width: 103px; */
      }
    }

    .thrid {
      width: 522px;

      @include rwd(padpc) {
        /* width: 343px; */
      }
    }

    .fourth {
      width: 522px;

      @include rwd(padpc) {
        /* width: 343px; */
      }
    }

    p {
      color: #000;
      height: 117px;

      /* width: 402px; */
    }
  }
}
</style>
