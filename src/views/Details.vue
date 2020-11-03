<template>
  <div class="details">
    <div class="details-header">
      <img class="background-img" :src="detailsData.img" alt="">
      <div class="back" @click="returnToThePreviousPage">
        <img src="@/assets/images/rightArrowsIcon.png" alt="">
      </div>
      <p>激情与可能相遇的地方，来自不同的远方</p>
    </div>
    <div class="details-main">
      <!-- 用户信息 -->
      <div>
        <div>
          <img src="" alt="">
          <div>
            <p>夏日午后的晚餐</p>
            <p>2小时前发布</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  setup () {
    const route = useRoute()
    const router = useRouter()
    const detailsData = reactive({
      site: '潺潺溪流',
      img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4292315981,3261371966&fm=26&gp=0.jpg',
      count: 34,
      rate: 4,
      id: '2'
    })

    const getRouteInfo = () => {
      const { id } = route.query
    }
    const returnToThePreviousPage = () => {
      router.back()
    }

    getRouteInfo()
    return {
      returnToThePreviousPage,
      detailsData
    }
  }
})
</script>

<style lang="scss" scoped>
  .details {
    @include initPage();
    &-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 800px;
      padding: 90px 40px 80px;
      padding-top: 90px;
      padding-left: 40px;
      position: relative;
      box-sizing: border-box;
      .background-img {
        width: 100%;
        height: 100%;
        border-radius: 40px 40px 0 0;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
      .back {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: rgba($color-white, 0.2);
        & > img {
          width: 55px;
          height: 55px;
        }
      }
      & > p {
        font-size: $font-oversized;
        color: $color-white;
      }
    }
  }
</style>
