<template>
  <div class="header-container"
       :style="{'height':headerHeight + 'px'}"
  >header</div>
</template>

<script>
import mixin from "../../../mixin/mixin";
export default {
  name: 'Header',
  mixins:[mixin],
  props: {

  },
  data(){
    return{
     test:[
       {
         name:'a',
         age:10
       },
       {
         name:'a',
         age:10
       },
       {
         name:'a',
         age:10
       },
     ],
      aaa:[]
    }
  },
  created() {
    this.aaa=this.test.map(item=>{
      return item={
        name1:item.name,
        age1:item.age
      }
    })
  }
};
</script>

<style scoped lang="scss">
.header-container {
  width: 100%;
  height: $headerHeight;
  background: $headerColor;
}
</style>
