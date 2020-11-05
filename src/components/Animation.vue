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
    display: flex;
    justify-content: center;
    width: 100%;
    opacity: 0;
    position: absolute;
    animation: transform-animation 2s linear;
    & > img {
      width: 85px;
      height: 60px;
    }
    @keyframes transform-animation {
      0% {
        top: 0px;
        opacity: 1;
      }
      20% {
        top: -20px;
        transform: scale(.8);
      }
      50% {
        top: -40px;
        transform: scale(.5);
        opacity: .5;
      }
      70% {
        top: -60px;
        transform: scale(.5);
        opacity: .3;
      }
      100% {
        top: -80px;
        transform: scale(.1);
        opacity: 0;
      }
    }
  }
</style>
