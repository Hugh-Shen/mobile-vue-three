<template>
  <div class="home">
    <p>{{ storeData }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const storeData = ref('hello world')
    return {
      storeData
    }
  }
})
</script>
