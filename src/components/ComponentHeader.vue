<template>
  <div id="component-header">
    <img class="header-logo" src="@/assets/ComponentHeader/hex-logo.svg" />
    <div class="nav-bar">
      <div class="stage">
        關卡任務
      </div>
      <div class="caption">
        競賽說明
      </div>
      <button class="apply">
        立即報名
      </button>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ComponentHeader'
});
</script>

<style scoped lang='scss'>
#component-header {
  align-items: center;
  background: #38241b;
  display: flex;
  height: 62px;
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  width: 100vw;
  z-index: 999;

  .header-logo {
    cursor: pointer;
    height: 35px;
    width: 145px;
  }

  .nav-bar {
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: space-between;
    width: 322px;

    .stage {
      background-color: #38241b;
      font-size: 18px;
      height: 26px;
      line-height: 26px;
      width: 72px;
    }

    .caption {
      background-color: #38241b;
      font-size: 18px;
      height: 26px;
      line-height: 26px;
      width: 72px;
    }

    .apply {
      background-color: #951205;
      border-radius: 40px;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      height: 42px;
      width: 130px;
    }
  }
}
</style>
