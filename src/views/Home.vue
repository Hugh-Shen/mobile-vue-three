<template>
  <div class="home">
    <div class="home-header">
      <div class="home-header-site">
        <span>杭州</span>
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
          <div class="home-content">
      <!-- 当地必玩 -->
      <div class="local">
        <div class="local-header">
          <span>当地必玩</span>
          <span>更多</span>
        </div>

        <div class="local-main">
          <Paisajes v-for="(item, index) in localData"
            :key="index"
            :site="item.site"
            :img="item.img"
            :dataObj="item"
            @navigation-to-details="navigationToDetails"
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
          <!-- 其它网红列表 -->
          <div class="online-celebrity-other" v-if="onlineCelebrityData.list">
            <div class="online-celebrity-other-item"
              v-for="(item, index) in onlineCelebrityData.list"
              :key="item.nickname + index"
            >
              <div class="travel-list">
                <div class="travel-list-item"
                  v-for="(item2, index2) in item.travel"
                  :key="item2.site + index2"
                >
                  <img :src="item2.img" alt="">
                  <p>{{ item2.site }}</p>
                </div>
              </div>

              <div class="user-info">
                <img :src="item.avatar" alt="">
                <p>{{ item.nickname }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </van-tab>
      <van-tab title="境内">内容 2</van-tab>
      <van-tab title="泰国">内容 2</van-tab>
      <van-tab title="日本">内容 2</van-tab>
      <van-tab title="欧美">内容 2</van-tab>
      <van-tab title="港澳">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import PopularDestination from '@/components/PopularDestination.vue'
import Paisajes from '@/components/Paisajes.vue'
import { PopularDestinationType, LocalType, OnlineCelebrityType } from '@/api/home'

export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()
    const storeData = ref('hello world')
    const searchValue = ref('')
    const active = ref(0)

    const likeImages = {
      active: require('@/assets/images/likeActive.png'),
      defalut: require('@/assets/images/like.png')
    }

    const popularDestinationData = reactive<PopularDestinationType>({
      img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2563930385,406813023&fm=26&gp=0.jpg',
      area: '杭州',
      city: '西湖'
    })

    const localData = reactive<Array<LocalType>>([
      {
        site: '森林树屋',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604234124600&di=db9ce3d09ac3f0218dca54198fa84a3b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F486520bd543f9f205dbc028f658ad0da03367a2944475-IUhgxr_fw658',
        count: 341,
        rate: 4,
        id: '1'
      },
      {
        site: '潺潺溪流',
        img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4292315981,3261371966&fm=26&gp=0.jpg',
        count: 34,
        rate: 4,
        id: '2'
      },
      {
        site: '青树古镇',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604234320377&di=f9a13e104a7b5dbf3e8acf58b08633e3&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1203%2F09%2Fc6%2F10831124_10831124_1331292126625_mthumb.jpg',
        count: 873,
        rate: 4,
        id: '3'
      }
    ])

    const onlineCelebrityData: OnlineCelebrityType = reactive({
      nickname: 'Alan Syndra',
      site: '日本 名古屋',
      img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=874238546,3629119602&fm=26&gp=0.jpg',
      avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=301987003,3127153161&fm=26&gp=0.jpg',
      like: 9999,
      has: false,
      list: [
        {
          nickname: 'Angel Wang',
          avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2078843677,2316840121&fm=26&gp=0.jpg',
          travel: [
            {
              img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604235074861&di=df6b8674563759f6184dae3aa2a1c38e&imgtype=0&src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ffd%2Ftg%2Fg1%2FM07%2F8D%2F89%2FCghzflUNi3mAIQuoAAM8cM0BMng608.jpg',
              site: '法国 巴黎'
            },
            {
              img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3103840908,2920508027&fm=26&gp=0.jpg',
              site: '英国 伦敦'
            }
          ]
        }
      ]
    })

    const navigationToDetails = (data: any) => {
      const { id } = data

      router.push({
        path: '/details',
        query: {
          id
        }
      })
    }

    return {
      storeData,
      searchValue,
      active,
      popularDestinationData,
      localData,
      onlineCelebrityData,
      likeImages,
      navigationToDetails
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
      padding-top: 60px;
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
              width: 440px;
              & > img {
                width: 100%;
                height: 240px;
                border-radius: 20px;
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
          .online-celebrity-other {
            margin-top: 60px;
            &-item {
              display: flex;
              justify-content: space-between;
              .travel-list {
                display: flex;
                & > div:nth-child(2) {
                  margin-left: 20px;
                }
                &-item {
                  & > img {
                    width: 210px;
                    height: 160px;
                    border-radius: 20px;
                  }
                  & > p {
                    margin-top: 20px;
                    color: $color-gray;
                    text-align: center;
                  }
                }
              }
              .user-info {
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
                  margin-top: 20px;
                }
              }
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
