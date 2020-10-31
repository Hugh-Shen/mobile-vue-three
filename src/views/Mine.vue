<template>
  <div class="mine">
    <div class="mine-header">
      <img :src="userData.avatar" alt="">
      <div class="mine-header-user">
        <div class="mine-header-user-container">
          <p>{{ userData.nickname }}</p>
          <p>{{ userData.introduce }}</p>
        </div>
      </div>
      <div class="mine-header-add"></div>
    </div>
    <div class="mine-main">
      <div class="mine-main-details">
        <div class="mine-main-details-item">
          <p>关注</p>
          <p>{{ userData.attention }}</p>
        </div>
        <div class="mine-main-details-item">
          <p>访客</p>
          <p>{{ userData.visitor }}</p>
        </div>
        <div class="mine-main-details-item">
          <p>点赞</p>
          <p>{{ userData.praise }}</p>
        </div>
      </div>
      <!-- 足迹 -->
      <div class="mine-main-footprint">
        <div class="mine-main-footprint-title">足迹</div>
        <div class="mine-main-footprint-container">
          <Paisajes v-for="(item, index) in footprintData"
            :key="item.site + index"
            :site="item.site"
            :img="item.img"
          >
            <p class="tag">{{ item.tag }}</p>
          </Paisajes>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Paisajes from '@/components/Paisajes.vue'
import { UserType, FootprintType } from '@/api/mine'

export default defineComponent({
  setup () {
    const userData: UserType = reactive({
      nickname: 'Hugh Shen',
      introduce: '极客，睡觉觉，打豆豆',
      avatar: 'https://hbimg.huabanimg.com/8abf75ea3b743e1e3e0ffb8bdacddd30a95b45ada3bd-6EWcL8_fw658/format/webp',
      attention: 211111,
      visitor: 222222,
      praise: 8221
    })
    const footprintData: Array<FootprintType> = reactive([
      {
        site: '十堰',
        img: 'https://hbimg.huabanimg.com/3e531f3374a05dd0a770d0490adf94ddbcd82b8216082-3G0t2d_fw658/format/webp',
        tag: '武当雪景'
      },
      {
        site: '武汉',
        img: 'https://hbimg.huabanimg.com/1bff65671824a61c37e40a03075285f42f328c453a7ff-T9ncsb_fw658/format/webp',
        tag: '黄鹤一去不复返'
      },
      {
        site: '荆州',
        img: 'https://hbimg.huabanimg.com/383f7465c4b769a15653aed79feadaf80de6ea9714cca1-NFa5l8_fw658/format/webp',
        tag: '触摸灵魂，大爱荆州'
      }
    ])

    return {
      userData,
      footprintData
    }
  },
  components: {
    Paisajes
  }
})
</script>

<style lang="scss" scoped>
  .mine {
    @include initPage();
    background-color: $color-light;
    &-header {
      display: flex;
      align-items: center;
      width: 100%;
      height: 320px;
      padding: 0 30px;
      background-color: $color-light;
      box-sizing: border-box;
      & > img {
        width: 160px;
        height: 160px;
        border: $border-defalut;
        border-radius: 50%;
      }
      &-user {
        flex: 1;
        margin-left: 20px;
        &-container {
          font-size: $font-oversized;
          & > p:last-child {
            margin-top: 30px;
            font-size: $font-medium;
            color: $color-gray;
          }
        }
      }
      &-add {
        flex-shrink: 0;
        width: 70px;
        height: 70px;
        text-align: center;
        line-height: 80px;
        background: linear-gradient(180deg, $color-theme, $color-sub);
        border-radius: 50%;
        position: relative;
        margin-left: 20px;
        margin-right: 60px;
        &::after {
          content: '';
          width: 2px;
          height: 50%;
          background: $color-white;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &::before {
          content: '';
          width: 50%;
          height: 2px;
          background: $color-white;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    &-main {
      width: 100%;
      height: calc(100% - 320px);
      background: $color-white;
      box-sizing: inherit;
      border-radius: 40px 40px 0 0;
      &-details {
        width: 100%;
        height: 180px;
        border-bottom: $border-defalut;
        &-item {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 33.33%;
          height: 100%;
          font-size: $font-little;
          & > p:first-child {
            margin-bottom: 20px;
            color: $color-gray;
            font-size: $font-medium;
          }
        }
      }
      &-footprint {
        padding: 40px 30px 0;
        &-title {
          font-size: $font-large;
          font-weight: $font-weight;
        }
        &-container {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
          .tag {
            font-size: $font-small;
            color: $color-gray;
            margin-top: 20px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
        }
      }
    }
  }
</style>
