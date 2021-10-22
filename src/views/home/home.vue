<template>
  <div class="home-container">
    <div class="out-container">
      <div>111</div>
      <div>222</div>
      <div>333</div>
      <div>444</div>
      <div>555</div>
      <div style="display: none;">666</div>
    </div>
    <div class="outer">
      <div class="inner"></div>
    </div>
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

  }
}
</script>

<style scoped lang="scss">
.out-container{
  div {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items:center;
    &:nth-last-child(2){
      background-color: yellow;
    }
  }
}

.outer{
  width: 200px;
  height: 200px;
  border: 1px solid black;
  @include flex($jc:left);
  box-sizing: border-box;

  .inner{
    width: 100px;
    height: 100px;
    border: 1px solid red;
  }
}
</style>