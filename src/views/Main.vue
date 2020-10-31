<template>
  <div class="main-container">
    <component :is="currentView"></component>
    <van-tabbar v-model="currentView"
      active-color="#4cd4c8"
      inactive-color="#787882"
    >
      <van-tabbar-item icon="home-o" name="Home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="Journey">行程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="Mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Home from './Home.vue'
import Journey from './Journey.vue'
import Mine from './Mine.vue'

export default defineComponent({
  name: 'Main',
  setup () {
    const currentView = ref('Home')
    return {
      currentView
    }
  },
  components: {
    Home,
    Journey,
    Mine
  }
})
</script>

<style scoped>
  .main-container {
    width: 100%;
    height: 100%;
  }
</style>
