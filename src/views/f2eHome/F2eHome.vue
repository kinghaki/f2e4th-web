<template>
  <div id="f2e-home" ref="home" :style="bGHome">
    <!-- <div ref="container" class="magic"></div> -->
    <div ref="paper" class="paper">
      <!-- <img
        ref="paperTop" src="@/assets/home/paper-top.png" alt=""
        class="top"
      >
      <img
        ref="paperLeft" src="@/assets/home/paper-left.png" alt=""
        class="left"
      >
      <img
        ref="paperRight" src="@/assets/home/paper-right.png" alt=""
        class="right"
      > -->

      <!-- <div ref="scrollDownElement" class="scroll-down">
        .
      </div> -->
    </div>
    <ComponentHeader></ComponentHeader>
    <div class="home-main" :style="bgMainHome">
      <div class="main-left">
        <div class="title">
          <h2 class="big-title">
            THE F2E
          </h2>
          <div class="little-title">
            4th
          </div>
        </div>
        <p class="content1">
          前端工程師和介面設計師，攜手合作拿獎金
        </p>
        <div class="content2">
          羨慕別人的酷酷網頁動畫？
          滿足不了同事的許願？
          動畫技能樹太雜無從下手？
        </div>
      </div>
      <div class="home-people" :style="bgPeople"></div>
      <div class="main-right">
        <img src="@/assets/home/bounty.png" alt="" class="bounty-img">
        <ul class="people">
          <li>
            <span class="people-order">報名總人數</span>
            <span class="person">1158人</span>
          </li>
          <li>
            <span class="people-order">
              個人賽人數
            </span>
            <span class="person">
              1052人
            </span>
          </li>
          <li>
            <span class="people-order">
              團體賽人數
            </span>
            <span class="person">
              41人
            </span>
          </li>
        </ul>
      </div>
    </div>
    <ComponentMain @live-share="trigger"></ComponentMain>
    <template v-if="isPeople">
      <ComponentPeople></ComponentPeople>
    </template>

    <componentFotter></componentFotter>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, CSSProperties, onMounted, onUnmounted } from 'vue';
import bgHome from '@/assets/home/image.png';
import bgMain from '@/assets/home/Rectangle.png';
import bgPeoples from '@/assets/home/people.png';
import lottie from 'lottie-web';
import click from '@/assets/魔杖_loading.json';
import scrollDown from '@/assets/scroll_down.json';

export default defineComponent({
  name: 'F2eHome'
});
</script>
<script setup lang="ts">
import ComponentHeader from '@/components/ComponentHeader.vue';
import ComponentMain from '@/components/ComponentMain.vue';
import ComponentFotter from '@/components/ComponentFotter.vue';
import ComponentPeople from '@/components/ComponentPeople.vue';
import gsap from 'gsap';

const bGHome = ref<CSSProperties>({
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

const bgPeople = ref<CSSProperties>({
  // backgroundImage: `url(require("${bgBusHome}"))`, // require 是 webpack用 require 處理 image 的語法
  backgroundImage: `url("${bgPeoples}")`, // vite 是用 rollup 打包，不需使用 webapck 的 require
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  objectFit: 'cover'
});

const isPeople = ref(false);
const trigger = (flag = false) => {
  isPeople.value = flag;
};

const paperTop = ref<HTMLElement | null>(null);
const paper = ref<HTMLElement | null>(null);
const scrollDownElement = ref<HTMLElement | null>(null);
const home = ref<HTMLElement | null>(null);
const container = ref<HTMLElement | null>(null);
const mouseMove = (e: MouseEvent) => {
  // console.log(e.clientX);
  // console.log(container.value?.style.left);
  // console.log(container.value?.offsetWidth);
  // console.log(e.pageX);

  if (container.value) {
    container.value.style.left = `${e.clientX - container.value.offsetWidth + 90}px`;
    container.value.style.top = `${e.clientY - container.value.offsetHeight + 120}px`;
  }
};
onMounted(() => {
  // console.log(window.);
  // window.addEventListener('scroll', (event: Event) => {
  //   console.log(paper.value?.offsetLeft);
  // }, true);
  lottie.loadAnimation({
    container: container.value as HTMLElement,
    renderer: 'svg',
    loop: 0,
    autoplay: true,
    animationData: click
  });
  window.addEventListener('mousemove', mouseMove, true);

  // paper.value?.offsetLeft
  lottie.loadAnimation({
    container: scrollDownElement.value as HTMLElement,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: scrollDown
  });
  // gsap.to('.paper', {
  //   duration: 1.5,
  //   x: 100
  // });
});
onUnmounted(() => {
  // window.removeEventListener('scroll', () => {
  //   console.log('remove');
  // }, true);
  window.removeEventListener('mousemove', mouseMove, true);
});
</script>

<style scoped lang='scss'>
#f2e-home {
  /* height: 720px; */  // 報紙變模糊了
  position: relative;
  width: 100vw;

  .magic {
    left: 0;
    position: fixed;
    top: 0;

    /* width: 300px; */
    z-index: 10;
  }

  .paper {
    img {
      position: fixed;
      width: 600px;
      z-index: 1000;
    }

    .top {
      height: 720px;
      left: 0;
      top: 0;
      width: 100vw;
    }

    .left {
      height: 1058px;
      left: -150px;
      top: 350px;
      width: 942px;
    }

    .right {
      bottom: -600px;
      height: 1008px;
      right: -300px;
      width: 1218px;
    }

    .scroll-down {
      bottom: 0;
      height: 100px;
      left: 0;
      margin: auto;
      position: fixed;
      right: 0;
      top: 0;
      width: 100px;
      z-index: 1001;
    }
  }

  .home-main {
    display: flex;
    height: 597px;
    left: 0;
    margin: 0 auto;
    position: relative;
    right: 0;
    top: 101px;
    width: 1213px;

    .main-left {
      padding-left: 56px;
      padding-top: 51px;

      .title {
        align-items: center;
        display: flex;
        justify-content: space-between;

        .big-title {
          color: #38241b;
          font-size: 80px;
          font-weight: 800;
          height: 104px;
          line-height: 104px;
          width: 335px;
        }

        .little-title {
          background: #951205;
          border-radius: 14px;
          color: white;
          font-size: 34px;
          font-weight: 700;
          height: 46px;
          line-height: 40px;
          text-align: center;
          width: 109px;
        }
      }

      .content1 {
        font-family: "Noto Serif TC";
        font-size: 42px;
        font-weight: 900;
        height: 180px;
        margin-top: 22px;
        width: 343px;
      }

      .content2 {
        font-family: "Noto Sans TC";
        font-size: 24px;
        font-weight: 500;
        height: 140px;
        line-height: 35px;
        width: 289px;
      }
    }

    .home-people {
      background-size: 672px 562px;
      bottom: 0;
      display: flex;
      height: 562px;
      left: 60px;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }

    .main-right {
      margin-left: 362px;

      .bounty-img {
        /* height: 121px; */
        width: 352px;
      }

      .people {
        li {
          align-items: center;
          display: flex;
        }

        .people-order {
          color: #38241b;
          font-size: 28px;
          font-weight: 700;
          height: 31px;
          width: 140px;
        }

        .person {
          color: #38241b;
          font-family: "EB Garamond";
          font-size: 50px;
          font-style: normal;
          font-weight: 800;
          height: 65px;
          line-height: 65px;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
