<template>
  <div class="details">
    <div class="details-header">
      <img class="background-img" :src="detailsData.img" alt="">
      <div class="back" @click="returnToThePreviousPage">
        <img src="@/assets/images/leftArrowsIcon.png" alt="">
      </div>
      <div>
        <p>{{ detailsData.title.substring(0, 3) }}</p>
        <p>{{ detailsData.title.substring(3) }}</p>
      </div>
    </div>
    <div class="details-main">
      <!-- 用户信息 -->
      <div class="details-main-user">
        <div class="details-main-user-info">
          <img :src="detailsData.avatar" alt="">
          <div>
            <p>{{ detailsData.nickname }}</p>
            <p>{{ detailsData.time }}</p>
          </div>
        </div>
        <div class="like-container" @click="setLike(detailsData)">
          <Animation :show="detailsData.like" />
          <img :src="[ detailsData.like ? likeImages.active : likeImages.defalut ]" alt="">
        </div>
      </div>
      <!-- 内容 -->
      <div class="details-main-introduce">
        <p>{{ detailsData.introduce }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Animation from '@/components/Animation.vue'
import { DetailsType } from '@/api/details'

export default defineComponent({
  setup () {
    const route = useRoute()
    const router = useRouter()

    const likeImages = {
      active: require('@/assets/images/likeActive.png'),
      defalut: require('@/assets/images/like.png')
    }

    const detailsData = reactive<DetailsType>({
      site: '潺潺溪流',
      img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4292315981,3261371966&fm=26&gp=0.jpg',
      count: 34,
      rate: 4,
      id: '2',
      title: '激情与可能相遇的地方，来自不同的远方',
      introduce: '普吉岛位于印度洋安达曼海东南部，离泰国首都曼谷867公里，是泰国境内唯一受封为省级地位的岛屿。有深远的历史和文化，被誉为安达曼海的明珠，500多年前是锡矿基地，泰国主要的旅游胜地，人口175万（2004年）。',
      nickname: 'Taylor Swift',
      avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=285319453,2165089546&fm=26&gp=0.jpg',
      like: false,
      time: '2小时前发布'
    })

    const setLike = (status: DetailsType) => {
      status.like = !status.like
    }
    const getRouteInfo = () => {
      const { id } = route.query
    }
    const returnToThePreviousPage = () => {
      router.back()
    }

    getRouteInfo()
    return {
      returnToThePreviousPage,
      likeImages,
      detailsData,
      setLike
    }
  },
  components: {
    Animation
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
      & > div {
        font-size: $font-oversized;
        color: $color-white;
        & > p:last-child {
          width: 100%;
          margin-top: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    &-main {
      padding: 30px;
      box-sizing: border-box;
      &-user {
        position: relative;
        &-info {
          display: flex;
          align-items: center;
          & > img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
          }
          & > div {
            margin-left: 20px;
            & > p:last-child {
              margin-top: 10px;
              font-size: $font-small;
              color: $color-gray;
            }
          }
        }
        .like-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: $color-theme;
          position: absolute;
          top: -80px;
          right: 60px;
          & > img {
            width: 50px;
            height: 50px;
          }
        }
      }
      &-introduce {
        margin-top: 40px;
        & > p {
          line-height: 35px;
        }
        & > p:first-letter {
          font-size: 50px;
          float: left;
          /* margin-bottom: 20px; */
          line-height: 60px;
          margin-right: 10px;
        }
      }
    }
  }
</style>
