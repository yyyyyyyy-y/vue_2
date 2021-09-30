<template>
  <div class="footer-container"
       :style="{'height':footerHeight + 'px'}"
  >
    footer
  </div>
</template>

<script>
import common from "../../../utils/common";
export default {
  name: "footer-container",
  mixins:[common]
}
</script>

<style scoped lang="scss">
.footer-container {
  width: 100%;
  height: $footerHeight;
  background-color: $footerColor;
}
</style>