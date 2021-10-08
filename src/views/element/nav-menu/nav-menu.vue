<template>
  <div class="nav-container">
    <el-menu
        class="nav-menu"
        :background-color="variables.navMenuColor"
        :text-color="variables.navMenuTextColor"
        :active-text-color="variables.navMenuTextColor"
        @select="selectMenu"
        >
      <el-submenu :index="item1.path" v-for="item1 in navMenu" :key="item1.path">
        <template slot="title">
          <span class="nav-menu-title">{{item1.name}}</span>
        </template>
        <el-menu-item  :index="item2.path" v-for="item2 in item1.children" :key="item2.path">{{ item2.name }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import common from "@/utils/common"
import variables from "@/styles/variables.scss"

export default {
  name: "nav-menu",
  mixins: [common],
  data(){
    return{
      navMenu:[]
    }
  },
  computed: {
    variables() {
      return variables
    },
  },
  created() {
    this.getNavMenu()
  },
  methods: {
    getNavMenu(){
      this.$router.options.routes.forEach(item=>{
        if (item.path==="/element" || item.path==="/es6"){
          this.navMenu.push(item)
        }
      })
    },

    selectMenu(item, path) {
      let currentPath = path[0]
      for (let i = 1;i<path.length;i++){
        currentPath = currentPath + "/" + path[i]
      }
      this.$router.push(currentPath).catch(err => {err})
    }
  }
}
</script>

<style scoped lang="scss">
.nav-container {
  width: $navMenuWidth;
  height: 100%;
  background-color: $navMenuColor;

  .nav-menu-title{
    font-size: 16px;
  }

  .el-menu-item{
    height: 40px;
    line-height: 40px;
  }

  /deep/ .el-submenu__title{
    height: 40px;
    line-height: 40px;
  }

  /deep/ .is-active{
    background-color: rgba(240,240,240,0.5) !important;
  }
}
</style>