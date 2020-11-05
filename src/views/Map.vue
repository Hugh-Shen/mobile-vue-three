<template>
  <div class="map">
    <div class="input-container">
      <img src="@/assets/images/leftArrowsIcon.png" alt="" @click="returnToThePreviousPage">
      <van-search
        v-model="searchValue"
        shape="round"
        placeholder="搜索目的地"
        @search="getLocation(searchValue)"
      />
      <div class="placeholder"></div>
    </div>
    <!-- map -->
    <div id="container"></div>
    <div id="panel"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Toast } from 'vant'
import AMapLoader from '@amap/amap-jsapi-loader'

export default defineComponent({
  name: 'Map',
  setup () {
    const router = useRouter()
    const store = useStore()
    const targetLocationLng = ref(null)
    const targetLocationLat = ref(null)
    const searchValue = ref(null)

    // eslint-disable-next-line semi
    let Map: any, Geocoder: any;

    AMapLoader.load({
      key: '37ffb743560aa8daa7edd40ded2313b4', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0',
      plugins: ['AMap.Geocoder', 'AMap.Driving']
    }).then(AMap => {
      Map = new AMap.Map('container', {
        resizeEnable: true,
        center: store.getters.position,
        zoom: 13
      })

      Geocoder = new AMap.Geocoder({})
    })

    const drawTheRoute = () => {
      AMapLoader.load({
        key: '37ffb743560aa8daa7edd40ded2313b4', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0',
        plugins: []
      }).then(AMap => {
        Map = new AMap.Map('container', {
          resizeEnable: true,
          center: store.getters.position,
          zoom: 13
        })

        const driving = new AMap.Driving({
          map: Map,
          panel: 'panel'
        })
        driving.search(new AMap.LngLat(...store.getters.position), new AMap.LngLat(targetLocationLng.value, targetLocationLat.value),
          function (status: any, result: any) {
            console.log(status, result)
          })
      })
    }

    const getLocation = (val: string) => {
      Geocoder.getLocation(val, (status: any, result: any) => {
        try {
          const { lat, lng } = result.geocodes[0].location
          targetLocationLng.value = lng
          targetLocationLat.value = lat
          drawTheRoute()
        } catch (err) {
          Toast.fail('请输入正确的位置！')
        }
      })
    }

    const returnToThePreviousPage = () => {
      router.back()
    }

    return {
      getLocation,
      drawTheRoute,
      searchValue,
      returnToThePreviousPage
    }
  }
})
</script>

<style lang="scss" scoped>
  .map {
    @include initPage();
    .input-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 40px;
      box-sizing: border-box;
      position: fixed;
      left: 0;
      top: 40px;
      z-index: 99;
      & > img {
        width: 50px;
        height: 50px;
      }
      .placeholder {
        width: 100px;
      }
    }
    #container {
      width: 100%;
      height: 100%;
    }
  }

  /deep/ .van-search {
    background-color: none;
  }
  /deep/ .van-search__content--round {
    background-color: $color-white;
    box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
  }

  #pa {
    position: fixed;
    background-color: white;
    max-height: 90%;
    overflow-y: auto;
    top: 10px;
    right: 10px;
    width: 280px;
  }
  #panel .amap-call {
    background-color: #009cf9;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  #panel .amap-lib-driving {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
  }
</style>
