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
  width: 100vw;
  height: 62px;
  background: #38241b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  position: fixed;

  .header-logo {
    width: 145px;
    height: 35px;
    cursor: pointer;
  }

  .nav-bar {
    width: 322px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .stage {
      width: 72px;
      height: 26px;
      line-height: 26px;
      font-size: 18px;
      background-color: #38241b;
    }

    .caption {
      width: 72px;
      height: 26px;
      line-height: 26px;
      font-size: 18px;
      background-color: #38241b;
    }

    .apply {
      width: 130px;
      height: 42px;
      font-size: 20px;
      background-color: #951205;
      color: #fff;
      border-radius: 40px;
      cursor: pointer;
    }
  }
}
</style>
