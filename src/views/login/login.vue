<template>
  <div>
    <div @click="goHome">go home</div>
    <div class="tabBar" style="width: 300px;height: 40px;border: 1px solid red;margin: 0 auto;position: relative;overflow-y: hidden;">
      <div style="height: 100%;display: flex;position: absolute;">
        <div v-for="i in 15" :key="i" style="height:100%;padding: 0 6px;">111111</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo:{
        name:'qqq',
        age:33,
        sex:'男',
        tel:'18784458556'
      }
    };
  },
  mounted() {
    const tabBar = this.$el.querySelector('.tabBar')
    console.log(tabBar)
    tabBar.addEventListener('mousewheel', this.handleScroll) // 监听滚轮滚动事件
  },
  methods: {
    goHome(){
      this.$store.dispatch('user/setUserInfo',this.userInfo).then(()=>{
        this.$router.push({path:"/home"})
      })
    },

    handleScroll(e) {
      // 0----down  1----up
      let direction = e.deltaY > 0 ? '0' : '1'
      const tabBar = this.$el.querySelector('.tabBar')
      //下面的实现的是内部元素横向滚动，前提设置好内部元素横向的滚动样式了
      if (direction === '0') {
        tabBar.scrollLeft += 30
      } else {
        tabBar.scrollLeft -= 30
      }
    },
  }
};
</script>
<style scoped lang="scss">
.tabBar::-webkit-scrollbar{
  height: 4px;
}
</style>