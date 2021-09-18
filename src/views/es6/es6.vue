<template>
  <div>
    <router-view></router-view>

    <router-link to="es6/promise">promise</router-link>
  </div>
</template>

<script>
export default {
  name: "es6",
  mounted() {
    this.test()
  },
  methods:{
    test(){
      new Promise((resolve)=>{
        setTimeout(function(){
          console.log('执行完成');
          resolve('随便什么数据');
        }, 2000);
      })
    }
  }
}
</script>

<style scoped>

</style>