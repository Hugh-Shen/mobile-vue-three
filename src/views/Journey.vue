<template>
  <div class="journey">
    <div class="trip-card">
      <div class="trip-card-header">
        <span>杭州</span>
        <span>西藏</span>
      </div>
      <div class="trip-card-main">
        <span>03月08日</span>
        <div>1 晚</div>
        <span>03月09日</span>
      </div>
      <div class="trip-card-footer">
        <div class="trip-card-footer-btn">搜索住宿</div>
      </div>
    </div>
    <!-- 最新推荐 -->
    <div class="card-container">
      <div class="title">最新推荐</div>
      <div class="content-container">
        <img class="site-image" :src="newRecommendedData.img" alt="">
        <div class="destination">
          <p>{{ newRecommendedData.destination }}</p>
          <p>{{ newRecommendedData.journey }}</p>
        </div>
        <img class="navigation-icon" src="@/assets/images/navigation.png" alt="">
      </div>
    </div>
    <!-- 旅行日记-->
    <div class="card-container">
      <div class="title">旅行日记</div>
      <div class="travel-diary" v-for="(item, index) in travelDiary"
        :key="item.nickname + index"
      >
        <div class="travel-diary-header">
          <img class="travel-diary-header-avatar" :src="item.avatar" alt="">
          <div class="travel-diary-header-nickname">
            <p>{{ item.nickname }}</p>
            <p>AM {{ item.time }}</p>
          </div>
          <img class="travel-diary-header-attention"
            :src="[item.attention ? attentionImages.active : attentionImages.default ]"
            alt=""
          />
        </div>
        <div class="travel-diary-main">
          <img v-for="item2 in item.images" :key="item2" :src="item2" alt="" />
        </div>
        <div class="travel-diary-footer">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { NewRecommendedType, TravelDiary } from '@/api/journey'

export default defineComponent({
  name: 'Journey',
  setup () {
    const attentionImages = {
      default: require('@/assets/images/watch.png'),
      active: require('@/assets/images/watchActive.png')
    }

    const newRecommendedData: NewRecommendedType = reactive({
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=441138092,3044299097&fm=26&gp=0.jpg',
      destination: '日本',
      journey: '4天3夜'
    })
    const travelDiary: Array<TravelDiary> = reactive([
      {
        nickname: 'Taylor Swift',
        avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=285319453,2165089546&fm=26&gp=0.jpg',
        time: '10:22',
        attention: false,
        images: [
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604251553337&di=524c84f893b283e8c0c0c87b06b43de7&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171101%2Fd9e0ae6081d544c79b6c1ed195176b3c.jpeg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604251577731&di=f1b048d80015c0576311269d253bb3c0&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffb2%2Ft1%2FG1%2FM00%2FF2%2F0E%2FCii9EFdP_iSISVtvAAdF3zcHPUEAAGTFwH83-0AB0X3914_w500_h280_c1_t0.jpg',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604251599740&di=7cde5a3de7b3da2ea860b53fde36b877&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F31%2F86%2F19300001035357130552866105127.jpg'
        ],
        content: '普吉岛位于印度洋安达曼海东南部，离泰国首都曼谷867公里，是泰国境内唯一受封为省级地位的岛屿。有深远的历史和文化，被誉为安达曼海的明珠，500多年前是锡矿基地，泰国主要的旅游胜地，人口175万（2004年）。'
      }
    ])

    return {
      attentionImages,
      newRecommendedData,
      travelDiary
    }
  }
})
</script>

<style lang="scss" scoped>
  .journey {
    @include initPage();
    padding: 20px 30px 100px;
    .trip-card {
      width: 100%;
      padding: 60px 30px;
      background: $color-white;
      border-radius: 20px;
      box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      font-size: $font-large;
      &-header {
        display: flex;
        justify-content: space-between;
      }
      &-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 45px 0;
        & > div {
          width: 100px;
          height: 40px;
          border: $border-defalut;
          border-radius: 20px;
          text-align: center;
          line-height: 40px;
          font-size: $font-base;
          color: $color-gray;
          position: relative;
          &::before {
            content: '';
            width: 40px;
            height: 1px;
            position: absolute;
            left: -40px;
            top: 50%;
            background-color: $color-line;
          }
          &::after {
            content: '';
            width: 40px;
            height: 1px;
            position: absolute;
            right: -40px;
            top: 50%;
            background-color: $color-line;
          }
        }
      }
      &-footer {
        width: 100%;
        padding: 0 30px;
        box-sizing: border-box;
        &-btn {
          width: 100%;
          height: 80px;
          background-color: $color-theme;
          border-radius: 40px;
          color: $color-white;
          text-align: center;
          line-height: 80px;
          font-size: $font-base;
          box-shadow: 0 0 20px 3px rgba(7, 139, 106, 0.3);
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 80px;
    }
    & > div:nth-child(3) {
      margin-top: 60px;
    }
    .card-container {
      .title {
        font-size: $font-large;
        font-weight: $font-weight;
      }
      .content-container {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 40px;
        border: $border-defalut;
        border-radius: 20px;
        padding: 30px;
        box-sizing: border-box;
        box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
        .site-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
        }
        .destination {
          flex-grow: 1;
          margin-left: 20px;
          font-size: $font-large;
          & > p:last-child {
            margin-top: 15px;
            color: $color-gray;
            font-size: $font-medium;
          }
        }
        .navigation-icon {
          width: 60px;
          height: 60px;
        }
      }
      .travel-diary {
        margin-top: 40px;
        padding: 30px;
        border: $border-defalut;
        border-radius: 20px;
        box-sizing: border-box;
        box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
        &-header {
          display: flex;
          align-items: center;
          &-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
          &-nickname {
            flex-grow: 1;
            margin-left: 20px;
            & > p:last-child {
              margin-top: 15px;
              color: $color-gray;
              font-size: $font-medium;
            }
          }
          &-attention {
            width: 42px;
            height: 42px;
          }
        }
        &-main {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          & > img {
            width: 190px;
            height: 190px;
            border-radius: 10px;
          }
        }
        &-footer {
          margin-top: 30px;
          color: $color-gray;
          line-height: 34px;
        }
      }
    }
  }
</style>
