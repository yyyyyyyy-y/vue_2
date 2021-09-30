<template>
  <div class="main-content-container"
       :style="{'height':mainContentHeight + 'px'}"
  >
    <nav-menu></nav-menu>
  </div>
</template>

<script>
import NavMenu from "@/views/element/nav-menu/nav-menu"
import common from "../../../utils/common";

export default {
  name: "MainContent",
  mixins:[common],
  components: {
    NavMenu
  }
}
</script>

<style scoped lang="scss">
.main-content-container{

}
</style>