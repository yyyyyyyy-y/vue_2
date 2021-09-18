<template>
  <div class="header-container">header</div>
</template>

<script>
export default {
  name: 'Header',
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
    console.log("aaa",this.aaa)
  }
};
</script>

<style scoped lang="scss">
@import "src/styles/index";

.header-container {
  width: 100%;
  height: 50px;
  background: $red;
}
</style>
