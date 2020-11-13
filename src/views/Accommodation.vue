<template>
  <div class="accommodation">
    <van-nav-bar
      title="住宿"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 主体 -->
    <div class="accommodation-main">
      <!-- city -->
      <div class="accommodation-main-city">
        <div class="accommodation-main-city-header">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=441138092,3044299097&fm=26&gp=0.jpg " alt="">
          <div class="accommodation-main-city-header-site">
            <h1>东京</h1>
            <div>
              <div>abc</div>
              <div>123</div>
              <div>456</div>
            </div>
          </div>
        </div>
        <div class="accommodation-main-city-content">
          <div class="accommodation-main-city-content-list">
            <div class="accommodation-main-city-content-list-item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=441138092,3044299097&fm=26&gp=0.jpg " alt="">
              <h1>东京塔</h1>
              <p>小日本的东京塔</p>
            </div>
            <div class="accommodation-main-city-content-list-item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=441138092,3044299097&fm=26&gp=0.jpg " alt="">
              <h1>东京塔</h1>
              <p>小日本的东京塔</p>
            </div>
            <div class="accommodation-main-city-content-list-item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=441138092,3044299097&fm=26&gp=0.jpg " alt="">
              <h1>东京塔</h1>
              <p>小日本的东京塔</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 选择 -->
      <!-- 住宿列表 -->
      <div class="list">
        <div class="list-header">
          <h1>推荐列表</h1>
        </div>
        <div class="accommodation-main-item">
          <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=441138092,3044299097&fm=26&gp=0.jpg" alt="">
          <div class="accommodation-main-item-right">
            <p class="title">野原新之助の宿</p>
            <div class="comment">
              <div class="comment-collect">
                <div>
                  <img src="@/assets/images/collect.png" alt="">
                  <span>4.5分</span>
                </div>
                <span>232点评</span>
              </div>
              <div class="status">实拍</div>
            </div>
            <!-- 住房信息 -->
            <div class="room">
              <div class="room-information">
                <span>人均￥1688</span>
                <span>3人</span>
                <span>家庭套房</span>
              </div>
              <div class="attestation">预约认证</div>
            </div>
            <!-- tag container -->
            <div class="tag">
              <div>富士山</div>
              <div>河口湖</div>
              <div>平和公园</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()

    const onClickLeft = () => {
      router.back()
    }

    return {
      onClickLeft
    }
  }
})
</script>

<style lang="scss" scoped>
  .accommodation {
    @include initPage();
    &-main {
      padding: 30px;
      & > div:nth-child(2) {
        margin-top: 60px;
      }
      &-city {
        padding-bottom: 40px;
        border-radius: 20px;
        box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        &-header{
          display: flex;
          background-color: $color-theme;
          padding: 40px 30px 20px;
          border-radius: 20px 20px 0 0;
          box-sizing: border-box;
          & > img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
          }
          &-site {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 200px;
            height: 100px;
            margin-left: 20px;
            & > h1 {
              font-size: $font-large;
              font-weight:700
            }
            & > div {
              display: flex;
              margin-top: 20px;
              font-size: $font-small;
              color: $color-theme;
              & > div:first-child ~ div {
                margin-left: 20px;
              }
              & > div {
                background-color: $color-white;
                padding: 4px 20px;
                border-radius: 20px;
              }
            }
          }
        }
        &-content {
          border-radius: 20px;
          box-sizing: border-box;
          &-list {
            display: flex;
            justify-content:space-evenly;
            padding-top: 20px;
            &-item {
              color: $color-gray;
              font-size: $font-small;
              & > img{
                width: 150px;
                height: 100px;
                border-radius: 10px;
              }
              & > h1 {
                margin-top: 10px;
                margin-bottom: 20px;
                color: initial;
                font-size: $font-base;
                font-weight: $font-weight;
              }
            }
          }
        }
      }
      .list {
        &-header > h1 {
          font-size: $font-large;
          font-weight: $font-weight;
          margin-bottom: 30px;
        }
        .accommodation-main-item {
          display: flex;
          width: 100%;
          height: 220px;
          border-radius: 20px;
          box-sizing: border-box;
          box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          & > img {
            width: 220px;
            height: 220px;
          }
          &-right {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 0 20px;
            box-sizing: border-box;
            font-size: $font-small;
            color: $color-gray;
            .title {
              font-size: $font-large;
              color: initial;
              font-weight: $font-weight;
            }
            .comment {
              display: flex;
              justify-content: space-between;
              align-items: center;
              &-collect {
                display: flex;
                align-items: center;
                & > div {
                  display: flex;
                  align-items: center;
                  & > img {
                    width: 35px;
                    height: 35px;
                  }
                  & > span {
                    margin-left: 5px;
                    color: #f4ea2a;
                    font-weight: $font-weight;
                  }
                }
                & > span {
                  margin-left: 20px;
                }
              }
              .status {
                width: 80px;
                padding: 5px 0;
                text-align: center;
                border-radius: 5px;
              }
            }
            .room {
              display: flex;
              align-items: center;
              .room-information {
                flex-grow: 1;
                & > span:nth-child(2) {
                  margin: 0 20px;
                }
              }
              .attestation {
                width: 120px;
                text-align: center;
                padding: 5px 0;
                border-radius: 5px;
                background-color: $color-theme;
                color: $color-white;
                font-size: 14px;
              }
            }
            .tag {
              & > div:first-child ~ div {
                margin-left: 20px;
              }
              & > div {
                display: inline-block;
                padding: 5px;
                color: $color-white;
                background-color: $color-theme;
                border-radius: 5px;
              }
            }
          }
        }
      }
    }
  }

  /deep/ .van-nav-bar .van-icon {
    color: $color-theme;
  }
  /deep/ .van-nav-bar__title {
    color: $color-theme;
  }
</style>
