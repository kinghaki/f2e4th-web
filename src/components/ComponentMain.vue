<template>
  <div id="component-main" :style="bGComponentMain">
    <img src="@/assets/ComponentMain/Group.png" alt="" class="img-group" />
    <p class="content">
      年度最強合作，三大關卡來襲
    </p>
    <div class="line"></div>
    <div class="line"></div>
    <div ref="parallax" class="contents parallax">
      <div class="title">
        <h2 class="text">
          視差滾動  Parallax Scrolling
        </h2>
        <img src="@/assets/ComponentMain/fb11 1.png" alt="">
      </div>
      <div class="main">
        <div class="parallax-left">
          <img src="@/assets/ComponentMain/Group 17.png" alt="" class="img">
        </div>
        <div class="parallax-right">
          <h3>The F2E 活動網站設計</h3>
          <p>請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。</p>
          <div class="buttons">
            <button class="btn-stage">
              關卡攻略
            </button>
            <button class="btn-post">
              投稿
            </button>
          </div>
        </div>
      </div>
    </div>

    <div ref="canvas" class="contents canvas">
      <div class="title">
        <h2 class="text">
          線上簽署 Canvas
        </h2>
        <img src="@/assets/ComponentMain/kdan_logoA_4c_RGB 1.png" alt="">
      </div>
      <div class="main">
        <div class="parallax-left">
          <img src="@/assets/ComponentMain/Group 17.png" alt="" class="img">
        </div>
        <div class="parallax-right">
          <h3>今晚，我想來點點簽</h3>
          <p>每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！</p>
          <div class="buttons">
            <button class="btn-stage">
              關卡攻略
            </button>
            <button class="btn-post">
              投稿
            </button>
          </div>
        </div>
      </div>
    </div>

    <div ref="draggable" class="contents draggable">
      <div class="title">
        <h2 class="text">
          Scrum  JS draggable
        </h2>
        <img src="@/assets/ComponentMain/three.png" alt="">
      </div>
      <div class="main">
        <div class="parallax-left">
          <img src="@/assets/ComponentMain/Rectangle (1).png" alt="" class="img">
        </div>
        <div class="parallax-right">
          <h3>Scrum 新手村</h3>
          <p>設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解 Scrum。</p>
          <div class="buttons">
            <button class="btn-stage">
              關卡攻略
            </button>
            <button class="btn-post">
              投稿
            </button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="race-time">
      賽程時間
    </h2>
    <div class="race-detail">
      <div class="line"></div>
      <div class="begin-signup race">
        <span class="title">開始報名</span>
        <span class="rectangle"></span>
        <p>
          10/13(四) 早上 11:00
          至 11/6(日) 晚上 23:59
        </p>
      </div>
      <div class="race-start race">
        <span class="title">開賽</span>
        <span class="rectangle"></span>
        <p>
          UI組、團體組開賽 10/31
          前端組開賽 11 /7
        </p>
      </div>
      <div class="upload-project race">
        <span class="title">登陸作品</span>
        <span class="rectangle"></span>
        <p>
          10/31(一) 中午 12:00
          至11/28(一) 中午 12:00
        </p>
      </div>
      <div class="race-live race">
        <span class="title">線上直播</span>
        <span class="rectangle"></span>
        <p>
          11/3 至 11/24(每週四)
        </p>
      </div>
    </div>
    <div class="record">
      <div class="record-first">
        <span>初選</span>
        <span class="rectangle"></span>
        <p>
          12/05(五)
        </p>
      </div>
      <div class="record-last">
        <span>決選</span>
        <span class="rectangle"></span>
        <p>
          12/05(五)
        </p>
      </div>
    </div>
    <section class="sections">
      <p class="first">
        初選：將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單
        。
      </p>
      <p class="second">
        決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單。
      </p>
    </section>
    <h2 class="prize">
      獎項
    </h2>
    <div class="medals">
      <div ref="bronze" class="bronze-medal medal">
        <img src="@/assets/ComponentMain/bronze.png" alt="">
        <span class="title">每個關卡各1組</span>
      </div>
      <div ref="gold" class="gold-medal medal">
        <img src="@/assets/ComponentMain/gold.png" alt="">
        <span class="title">
          每個關卡各 2 名，設計 1 名、前端 1 名
        </span>
      </div>
      <div ref="sliver" class="sliver-medal medal">
        <img src="@/assets/ComponentMain/sliver.png" alt="">
        <span class="title">
          每個關卡個人組十位
          、團體組十組
        </span>
      </div>
    </div>
    <div class="end-title">
      以上皆提供完賽數位獎狀
    </div>
    <div
      v-if="isAccident"
      class="accident"
      @click="closeAccident"
    >
      <span class="good">意想不到的好康</span>
      <div class="click-magic" @click="emit('live-share', true)">
        <div class="click">
          請點擊
        </div>
        <div ref="container" class="magic"></div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, CSSProperties, onMounted } from 'vue';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import lottie from 'lottie-web';
import click from '@/assets/魔杖_loading.json';
import bgGroup from '@/assets/ComponentMain/main-bg.png';
gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  name: 'ComponentMain'
});
</script>

<script lang="ts" setup>
const emit = defineEmits(['live-share']);
const isAccident = ref(true);
const closeAccident = () => {
  isAccident.value = false;
};

const bGComponentMain = ref<CSSProperties>({
  backgroundSize: 'cover',
  // backgroundImage: `url(require("${bgBusHome}"))`, // require 是 webpack用 require 處理 image 的語法
  backgroundImage: `url("${bgGroup}")`, // vite 是用 rollup 打包，不需使用 webapck 的 require
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  objectFit: 'cover'
});
const container = ref<HTMLElement | null>(null);
const parallax = ref<HTMLElement | null>(null);
const canvas = ref<HTMLElement | null>(null);
const draggable = ref<HTMLElement | null>(null);
const bronze = ref<HTMLElement | null>(null);
const gold = ref<HTMLElement | null>(null);
const sliver = ref<HTMLElement | null>(null);
onMounted(() => {
  lottie.loadAnimation({
    container: container.value as HTMLElement,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: click
  });
  window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);
    console.log(parallax.value?.offsetTop);
    console.log(parallax.value?.offsetHeight);
    if (parallax.value?.offsetTop) {
      if (window.scrollY >= parallax.value?.offsetTop - parallax.value.offsetHeight * 2) {
        parallax.value.className = ' contents parallax animation-parallax';
      } else {
        parallax.value.className = ' contents parallax';
      }
    }

    if (canvas.value?.offsetTop) {
      if (window.scrollY >= canvas.value?.offsetTop - canvas.value.offsetHeight * 2) {
        canvas.value.className = ' contents parallax animation-canvas';
      } else {
        canvas.value.className = ' contents parallax';
      }
    }

    if (draggable.value?.offsetTop) {
      if (window.scrollY >= draggable.value?.offsetTop - draggable.value.offsetHeight * 2) {
        draggable.value.className = 'contents parallax animation-draggable';
      } else {
        draggable.value.className = ' contents parallax';
      }
    }

    if (bronze.value?.offsetTop) {
      if (window.scrollY >= bronze.value?.offsetTop - bronze.value.offsetHeight * 2) {
        bronze.value.className = 'bronze-medal medal animation-bronze';
      } else {
        bronze.value.className = 'bronze-medal medal';
      }
    }

    if (gold.value?.offsetTop) {
      if (window.scrollY >= gold.value?.offsetTop - gold.value.offsetHeight * 2) {
        gold.value.className = 'gold-medal medal animation-gold';
      } else {
        gold.value.className = 'gold-medal medal';
      }
    }

    if (sliver.value?.offsetTop) {
      if (window.scrollY >= sliver.value?.offsetTop - sliver.value?.offsetHeight * 2) {
        sliver.value.className = 'sliver-medal medal animation-sliver';
      } else {
        sliver.value.className = 'sliver-medal medal';
      }
    }
  });
//   gsap.to('.parallax', {
//     x: 600,
//     duration: 3,
//     rotation: 360,
//     scrollTrigger: {
//       trigger: '.parallax', // 觸發得物件
//       start: 'top top', // (物件開始位置, 卷軸開始位置) top center bottom px
//       end: '+=300', // (物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
//       scrub: true, // 物件動畫根據卷軸捲動程度跑
//       toggleClass: 'active', //  class名稱 須為字串
//       pin: true
//     //   markers: true // 顯示標記
//     }
//   });
});
</script>

<style scoped lang='scss'>
@import url("@/styles/scss/animation.scss");
/* stylelint-disable-next-line import-notation */
@import "@/styles/scss/rwd";

.active {
  display: block;
}

#component-main {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 115px;
  padding-top: 100px;

  @include rwd(padpc) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .img-group {
    height: 146.83px;
    text-align: center;
    width: 590px;

    @include rwd(padpc) {
      height: 98px;
      width: 315px;
    }

    @include rwd(pad) {
      height: 98px;
      width: 90%;
    }
  }

  .content {
    color: #38241b;
    font-family: "Noto Sans TC";
    font-size: 43px;
    font-weight: 500;
    height: 62px;
    letter-spacing: .6em;
    line-height: 62px;
    margin-top: 42.17px;
    text-align: center;
    width: 996px;

    @include rwd(pad) {
      height: 200px;
      width: 100%;
    }
  }

  .line {
    border: 4px solid #38241b;
    height: 0;
    margin-top: 2px;
    width: 1200px;

    @include rwd(padpc) {
      display: none;
    }
  }

  .contents {
    background-image: url("@/assets/ComponentMain/bg-main.png");
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 70px;
    height: 528px;
    margin-top: 99px;
    padding: 19px 40px 0;
    visibility: hidden;
    width: 1200px;

    @include rwd(padpc) {
      width: 700px;
    }

    @include rwd(pad) {
      width: 343px;
    }

    .img {
      @include rwd(padpc) {
        display: none;
      }

      @include rwd(pad) {
        display: none;
      }
    }

    .title {
      display: flex;
      justify-content: space-between;

      .text {
        color: #fff;
        font-size: 44px;
        height: 64px;
        width: 684px;

        @include rwd(padpc) {
          display: none;
        }

        @include rwd(pad) {
          display: none;
        }
      }
    }

    .main {
      /* align-items: center; */
      display: flex;
      justify-content: space-around;
      margin: 66px auto;

      @include rwd(pad) {
        display: block;
        margin-top: 20px;
      }

      .parallax-right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        line-height: 63px;
        width: 592px;

        @include rwd(padpc) {
          display: flex;
          justify-content: center;
        }

        @include rwd(pad) {
          display: block;
          width: 284px;

          /* line-height: 0px; */

          /* justify-content: center; */
        }

        h3 {
          font-family: "Noto Serif TC";
          font-size: 44px;
          font-weight: 900;
          height: 63px;

          @include rwd(pad) {
            width: 266px;
          }
        }

        p {
          color: #38241b;
          font-family: "Noto Sans TC";
          font-size: 24px;
          font-weight: 500;
          height: 70px;
          letter-spacing: 0;
          line-height: 35px;
          width: 592px;

          @include rwd(pad) {
            margin-top: 70px;
            width: 100%;
          }
        }

        .buttons {
          @include rwd(padpc) {
            margin-top: 89.36px;
            text-align: center;
          }

          @include rwd(pad) {
            display: flex;
            margin-top: 89.36px;
            text-align: center;
          }
        }

        .btn-stage {
          border: 3px solid #38241b;
          border-radius: 40px;
          font-size: 28px;
          height: 70px;
          width: 184px;
        }

        .btn-post {
          background: #951205;
          border-radius: 40px;
          color: #fff;
          font-size: 28px;
          height: 70px;
          margin-left: 20px;
          width: 184px;
        }
      }
    }
  }

  .race-time {
    background: #3c221b;
    color: #fff;
    font-family: "Noto Serif TC";
    font-size: 60px;
    font-weight: 900;
    height: 170px;
    line-height: 170px;
    margin-top: 175px;
    text-align: center;
    width: 100vw;
  }

  .race-detail {
    display: flex;
    justify-content: space-around;
    margin-top: 92px;

    .line {
      border: 5px solid #3c221b;
      bottom: 30px;
      left: 300px;
      position: absolute;
    }

    .begin-signup {
      /* background-color: darkblue; */
      width: 238px;
    }

    .race-start {
      width: 261px;
    }

    .upload-project {
      width: 246px;
    }

    .race-live {
      width: 235px;
    }

    .race {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        color: #38241b;
        font-size: 30px;
        font-weight: 400;
      }

      .rectangle {
        background-color: #3c221b;
        height: 48.53px;
        margin-top: 20px;
        transform: rotate(45deg);
        width: 48.53px;
      }

      p {
        margin-top: 32.27px;
      }
    }
  }

  .record {
    display: flex;
    margin-top: 92px;

    .record-first {
      display: flex;
      flex-direction: column;
      width: 103px;
    }

    .record-last {
      display: flex;
      flex-direction: column;
      width: 103px;
    }

    .rectangle {
      background-color: #3c221b;
      height: 48.53px;
      margin-top: 20px;
      transform: rotate(45deg);
      width: 48.53px;
    }
  }

  .sections {
    margin-top: 44px;
  }

  .prize {
    background: #3c221b;
    color: #fff;
    font-family: "Noto Serif TC";
    font-size: 60px;
    font-weight: 900;
    height: 170px;
    line-height: 170px;
    margin-top: 175px;
    text-align: center;
    width: 100vw;
  }

  .medals {
    display: flex;
    justify-content: space-evenly;
    visibility: hidden;
    width: 386px;

    @include rwd(padpc) {
      display: block;
    }

    @include rwd(pad) {
      display: block;
    }

    .medal {
      align-items: center;
      display: flex;
      flex-direction: column;

      .title {
        color: #3c221b;
        font-size: 26px;
        font-weight: 400;
        text-align: center;
      }
    }
  }

  .end-title {
    font-size: 36px;
    font-weight: 400;
    margin-top: 104px;
    text-align: center;
    width: 100vw;
  }

  .accident {
    margin-top: 227px;

    .good {
      color: #3c221b;
      font-size: 72px;
      font-weight: 900;
      letter-spacing: 0;
      line-height: 103px;
      text-align: center;
    }

    .click-magic {
      align-items: center;
      display: flex;
      justify-content: center;

      .click {
        color: #951205;
        font-size: 72px;
        font-weight: 900;
        line-height: 103px;
        text-align: center;
      }

      .magic {
        width: 300px;
      }
    }
  }
}
</style>
