<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-site">
        <span>湖北</span>
        <div class="triangle"></div>
      </div>
      <van-search
        v-model="searchValue"
        shape="round"
        placeholder="冬天冷？那我们就去三亚吧"
      />
    </div>
    <van-tabs v-model:active="active"
      title-active-color="#4cd4c8"
      title-inactive-color="#787882"
      color="#4cd4c8"
      line-width="20"
      line-height="1.5"
    >
      <van-tab title="周边">
        <div class="item-container">
          <PopularDestination :popularDestinationData="popularDestinationData" />
        </div>
      </van-tab>
      <van-tab title="境内">内容 2</van-tab>
      <van-tab title="泰国">内容 2</van-tab>
      <van-tab title="日本">内容 2</van-tab>
      <van-tab title="欧美">内容 2</van-tab>
      <van-tab title="港澳">内容 2</van-tab>
    </van-tabs>

    <div class="home-content">
      <!-- 当地必玩 -->
      <div class="local">
        <div class="local-header">
          <span>当地必玩</span>
          <span>更多</span>
        </div>

        <div class="local-main">
          <Paisajes v-for="(item, index) in localData"
            :key="item.area + index"
            :site="item.site"
            :img="item.img"
          >
            <div class="rate-container">
              <van-rate v-model="item.rate" readonly  size="10" />
              <span>{{ item.count }}</span>
            </div>
          </Paisajes>
        </div>
      </div>
      <!-- 网红圈 -->
      <div class="local">
        <div class="local-header">
          <span>网红圈</span>
          <span>更多</span>
        </div>
        <div class="online-celebrity">
          <div class="online-celebrity-container">
            <div class="online-celebrity-container-left">
              <img :src="onlineCelebrityData.img" alt="">
            </div>
            <div class="online-celebrity-container-right">
              <img :src="onlineCelebrityData.avatar" alt="">
              <p>{{ onlineCelebrityData.nickname }}</p>
              <div class="like-container">
                <img :src="[onlineCelebrityData.has ? likeImages.active : likeImages.defalut]" alt="">
                <p>{{ onlineCelebrityData.like }}</p>
              </div>
            </div>
          </div>
          <div class="site-container">
            <img src="@/assets/images/location.png" alt="">
            <span>{{ onlineCelebrityData.site }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import PopularDestination from '@/components/PopularDestination.vue'
import Paisajes from '@/components/Paisajes.vue'
import { PopularDestinationType, LocalType, OnlineCelebrityType } from '@/api/home'

export default defineComponent({
  name: 'Home',
  setup () {
    const storeData = ref('hello world')
    const searchValue = ref('')
    const active = ref(0)

    const likeImages = {
      active: require('@/assets/images/likeActive.png'),
      defalut: require('@/assets/images/like.png')
    }

    const popularDestinationData: PopularDestinationType = reactive({
      img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2563930385,406813023&fm=26&gp=0.jpg',
      area: '杭州',
      city: '西湖'
    })

    const localData: Array<LocalType> = reactive([
      {
        site: '森林树屋',
        img: 'https://hbimg.huabanimg.com/dd823fb847c86c6e82ad82c32fbc27f056ecb05449052-OU5foT_fw658/format/webp',
        count: 341,
        rate: 4
      },
      {
        site: '潺潺溪流',
        img: 'https://hbimg.huabanimg.com/0fe8f1e48d3db64b910975b9230f2f18d358ef9a2b418-rQn6TL_fw658/format/webp',
        count: 34,
        rate: 4
      },
      {
        site: '青树古镇',
        img: 'https://hbimg.huabanimg.com/fb4dbd5d35270f59171b7434bf5a67b53c14bd17b628d-XnXLDa_fw658/format/webp',
        count: 873,
        rate: 4
      }
    ])

    const onlineCelebrityData: OnlineCelebrityType = reactive({
      nickname: 'Alan Syndra',
      site: '日本名古屋',
      img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=874238546,3629119602&fm=26&gp=0.jpg',
      avatar: 'https://hbimg.huabanimg.com/0a100c4b64a0b7e2e38230fe91b19fe4c42c6efe708e8-5C8mOM_fw658/format/webp',
      like: 9999,
      has: false
    })

    return {
      storeData,
      searchValue,
      active,
      popularDestinationData,
      localData,
      onlineCelebrityData,
      likeImages
    }
  },
  components: {
    PopularDestination,
    Paisajes
  }
})
</script>

<style lang="scss" scoped>
  .home {
    @include initPage();
    background-color: initial;
    padding-top: 50px;
    padding-bottom: 120px;
    &-header {
      padding: 0 30px;
      margin-bottom: 40px;
      &-site {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        & > span {
          margin-right: 10px;
          font-size: $font-oversized;
          font-weight: $font-weight;
        }
        .triangle {
          @include triangle
        }
      }
    }
    .item-container {
      width: 100%;
      padding: 30px 30px 20px;
      box-sizing: border-box;
    }
    &-content {
      padding: 40px 30px 0;
      & > div:first-child ~ .local:nth-child(2) {
        margin-top: 50px;
      }
      .local {
        &-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          font-size: $font-large;
          font-weight: $font-weight;
          & > span:last-child {
            color: $color-gray;
            font-size: $font-small;
          }
        }
        &-main {
          display: flex;
          justify-content: space-between;
          .rate-container {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            & > span {
              font-size: $font-medium;
            }
          }
        }
        .online-celebrity {
          &-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-left {
              width: 430px;
              & > img {
                width: 100%;
                height: 240px;
              }
            }
            &-right {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              width: 200px;
              box-sizing: border-box;
              & > img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
              }
              & > p {
                margin: 20px 0 20px;
              }
              .like-container {
                align-self: flex-end;
                width: 100px;
                text-align: center;
                & > img {
                  width: 48px;
                  height: 48px;
                }
              }
            }
          }
          .site-container {
            display: flex;
            align-items: center;
            padding: 30px 0 0 20px;
            & > img {
              width: 32px;
              height: 32px;
            }
            & > span {
              margin-left: 20px;
              color: $color-gray;
            }
          }
        }
      }
    }
  }

  /deep/ .van-search__content--round {
    box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
  }
  /deep/ .van-tabs--line .van-tabs__wrap {
    height: 60px;
  }
  /deep/ .van-tabs__wrap--scrollable .van-tabs__nav--complete {
    padding-left: 0;
    padding-right: 0;
  }
</style>
