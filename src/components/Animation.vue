<template>
  <div class="animation-container" v-show="show">
    <img src="@/assets/images/starIcon.png" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
  .animation-container {
    position: relative;
    & > img {
      width: 85px;
      height: 60px;
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0;
      animation: transform-animation 2s linear;
    }
    @keyframes transform-animation {
      0% {
        opacity: 1;
      }
      20% {
        top: -20px;
        transform: scale(.8);
      }
      50% {
        top: -50px;
        transform: scale(.5);
        opacity: .5;
      }
      70% {
        top: -70px;
        transform: scale(.5);
        opacity: .3;
      }
      100% {
        top: -100px;
        transform: scale(.1);
        opacity: 0;
      }
    }
  }
</style>
