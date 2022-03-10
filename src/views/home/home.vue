<template>
  <div class="home-container" ref="newDialog">
    <el-dialog
        class="index-dialog"
        top="8%"
        :title="newTitle"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        width="50%">
      <div class="el-dialog__title" slot="title">
        <span v-if="!isUpdate">{{newTitle}}</span>
        <el-input v-if="isUpdate" v-model="newTitle"></el-input>
      </div>
      <img class="kaiyuantu kaikai" src="@/assets/images/yuanyuan.png" alt="">
      <img class="kaiyuantu yuanyuan" src="@/assets/images/kaikai.png" alt="">
      <div class="index-dialog-content">
<!--        <div>
          <el-button class="new-update" size="small" v-if="!isUpdate" @click="isUpdate=true">修改</el-button>
          <el-button class="new-update" size="small" v-if="isUpdate" @click="isUpdate=false">保存</el-button>
        </div>-->
        <el-input class="new-content" type="textarea" rows="10"
                  :disabled="!isUpdate" v-model="newContent" resize="none">
        </el-input>
      </div>
      <div class="i-know" @click="closeNew">我知道啦！</div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      dialogVisible:true,
      newTitle:'有新功能啦！',
      isUpdate:false,
      newContent:'',
    };
  },
  mounted() {
    // console.log(this.$store.state.user.userInfo)
  },
  methods: {
    closeNew(){
      this.dialogVisible = false
      console.log(this.$refs.newDialog.$el);
    }
  }
}
</script>

<style scoped lang="scss">
.index-dialog{
  /deep/ .el-dialog{
    border-top-left-radius: 45%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-top: 50px;

    .el-dialog__header{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-dialog__title{
        font-size: 48px;
      }
    }

    .index-dialog-content{
      padding: 10px 40px;
      height: 300px;
      position: relative;

      .new-update{
        position: absolute;
        right: 50px;
        top: -15px;
      }

      .new-content{
        font-size: 14px;
        color: #262626;
        margin-top: 15px;
        .el-textarea__inner{
          line-height: 24px;
        }
      }

      .new-content.is-disabled .el-textarea__inner{
        color: #262626;
        background-color: #ffffff;
      }
    }
  }
}

.kaiyuantu{
  width: 100px;
  height: 100px;
}
.kaikai{
  position: absolute;
  top: 1%;
  left: 10%;
  transform: rotateZ(-20deg);
}
.yuanyuan{
  position: absolute;
  top: 1%;
  right: 10%;
  transform: rotateZ(20deg);
}

.i-know{
  position: absolute;
  bottom: -16px;
  height: 32px;
  left: 45%;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #b4bccc;
}
</style>