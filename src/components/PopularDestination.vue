<template>
  <div class="popular-destination">
    <div class="popular-destination-left">
      <img :src="popularDestinationData.img" alt="">
      <div>{{ `${popularDestinationData.area} · ${popularDestinationData.city}` }}</div>
    </div>
    <div class="popular-destination-right">
      <div>更多景点</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    popularDestinationData: {
      type: Object,
      require: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .popular-destination {
    display: flex;
    justify-content: space-between;
    &-left {
      flex: 1;
      height: 200px;
      position: relative;
      & > img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
      & > div {
        position: absolute;
        left: 20px;
        bottom: 20px;
        color: $color-white;
        font-size: $font-small;
      }
    }
    &-right {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      height: 200px;
      border-radius: 20px;
      margin-left: 40px;
      background: linear-gradient(180deg, $color-sub, $color-theme);
      & > div {
        max-width: 70px;
        line-height: 40px;
        text-align: center;
        font-weight: 500;
        color: $color-white;
      }
    }
  }
</style>
