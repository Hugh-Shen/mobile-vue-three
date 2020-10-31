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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import PopularDestination from '@/components/PopularDestination.vue'
import Paisajes from '@/components/Paisajes.vue'
import { PopularDestinationType, LocalType } from '@/api/home'

export default defineComponent({
  name: 'Home',
  setup () {
    const storeData = ref('hello world')
    const searchValue = ref('')
    const active = ref(0)

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

    return {
      storeData,
      searchValue,
      active,
      popularDestinationData,
      localData
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
    width: 100%;
    height: 100%;
    padding-top: 50px;
    box-sizing: border-box;
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
      .local {
        &-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
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
