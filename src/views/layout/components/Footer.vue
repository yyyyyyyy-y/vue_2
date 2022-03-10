<template>
  <div class="footer-container"
       :style="{'height':footerHeight + 'px'}"
  >
    footer
  </div>
</template>

<script>
import mixin from "../../../mixin/mixin";
export default {
  name: "footer-container",
  mixins:[mixin]
}
</script>

<style scoped lang="scss">
.footer-container {
  width: 100%;
  height: $footerHeight;
  background-color: $footerColor;
}
</style>