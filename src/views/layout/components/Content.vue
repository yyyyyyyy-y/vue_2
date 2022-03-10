<template>
  <div class="content-container" :style="{'height':mainContentHeight + 'px'}">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from "@/views/element/nav-menu/nav-menu"
import mixin from "../../../mixin/mixin";

export default {
  name: "Content",
  mixins:[mixin],
  components: {
    NavMenu
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
.content-container{
  @include flex($jc: null, $ai: null, $fw: null, $ac: null)
}
</style>