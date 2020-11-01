<template>
  <div class="paisajes">
    <img :src="img" alt="">
    <p>{{ site }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    img: {
      type: String,
      default: require('@/assets/images/defaultImage.png')
    },
    site: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
  .paisajes {
    width: 200px;
    overflow: hidden;
    & > img {
      width: 100%;
      height: 270px;
      border-radius: 20px;
    }
    & > p {
      margin-top: 20px;
      font-size: $font-base;
    }
  }
</style>
