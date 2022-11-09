<template>
  <div id="component-fotter">
    <div class="companys">
      <img src="@/assets/ComponetFotter/jira 1.png" alt="">
      <img src="@/assets/ComponetFotter/點點簽 1.png" alt="">
      <img src="@/assets/ComponetFotter/image 8.png" alt="">
      <img src="@/assets/ComponetFotter/image 9.png" alt="">
    </div>
    <div class="footer">
      <h4>贊助單位</h4>
      <div class="works">
        <img src="@/assets/ComponentMain/fb11 1.png" alt="">
        <img src="@/assets/ComponentMain/kdan_logoA_4c_RGB 1.png" alt="">
        <img src="@/assets/ComponentMain/three.png" alt="">
      </div>
      <div class="copyright">
        六角日報 © Code: Ryan Tsai  /  Design: KT
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ComponentFotter'
});
</script>

<style scoped lang='scss'>
#component-fotter {
  .companys {
    align-items: center;
    background: #fff;
    display: flex;
    height: 96px;
    justify-content: space-evenly;
  }

  h4 {
    color: #fff;
    font-family: "Noto Serif TC";
    font-size: 60px;
    font-style: normal;
    font-weight: 900;
    line-height: 86px;
    text-align: center;
  }

  .footer {
    background: #3c221b;

    .works {
      display: flex;
      justify-content: space-evenly;
      margin-top: 50px;
    }
  }

  .copyright {
    color: #fff;
    margin-top: 54px;
    padding-bottom: 18px;
    text-align: center;
  }
}
</style>
