<template>
  <div>
    <router-link to="element">element</router-link>
    <router-link to="es6">es6</router-link>
    <div @click="aaa">aaa</div>
  </div>
</template>

<script>
import {aaa} from "@/utils/common"

export default {
  name: "home",
  data() {
    return {

    };
  },
  methods: {
    aaa(){
      aaa()
    }
  }
}
</script>

<style scoped lang="scss">

</style>