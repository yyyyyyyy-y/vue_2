<template>
  <div>
    <router-link to="element">element</router-link>
    <router-link to="es6">es6</router-link>
    <div @click="getSizeInfo">getSizeInfo</div>
  </div>
</template>

<script>
import common from "@/utils/common"

export default {
  name: "home",
  mixins:[common],
  data() {
    return {

    };
  },
  methods: {
    getSizeInfo(){
      console.log(this.mainContentHeight)
    }
  }
}
</script>

<style scoped lang="scss">

</style>