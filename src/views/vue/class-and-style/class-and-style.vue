<template>
  <div class="main-container">
    <el-row>
      <el-row class="normal-title">:class可以绑定一个class名和控制它有无的布尔值</el-row>
      <el-row class="class-style">
        <div class="border" :class="{'bg-color':showTest1}">111</div>
        <el-button size="small" type="primary" v-show="showTest1" @click="showTest1 = !showTest1">不显示黄色背景</el-button>
        <el-button size="small" type="primary" v-show="!showTest1" @click="showTest1 = !showTest1">显示黄色背景</el-button>
      </el-row>
    </el-row>

    <el-row>
      <el-row class="normal-title">:class可以绑定一个包含class名的对象</el-row>
      <el-row class="class-style">
        <div class="box-size" :class="test2">111</div>
        <el-button size="small" type="primary" @click="test2.flex = false">取消flex</el-button>
        <el-button size="small" type="primary" @click="test2.border = false">取消边框</el-button>
        <el-button size="small" type="primary" @click="test2.border = true,test2.flex=true">重置</el-button>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "class-and-style",
  data(){
    return{
      showTest1:true,
      test2:{
        flex:true,
        border:true,
      }
    }
  }
}
</script>

<style scoped lang="scss">
.class-style{
  @include flex($jc:flex-start)
}

.flex{
  @include flex()
}

.bg-color{
  background-color: yellow;
}

.box-size{
  @include box($w:100px,$h:30px);
}

.border{
  border: 1px solid #eeeeee;
}
</style>