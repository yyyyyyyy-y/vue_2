<template>
  <div>
    <el-tree
        ref="tree"
        @check="checkNode"
        :data="data"
        :props="defaultProps"
        :current-node-key="chooseList"
        show-checkbox
        node-key="id"
        check-strictly>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "Tree",
  data() {
    return {
      chooseList:'',
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        },
        {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        },
        {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    // handleCheckChange(data, checked, indeterminate) {
    //   // console.log(data, checked, indeterminate);
    //   // console.log(this.chooseList)
    // },
    checkNode(nodes){
      console.log(nodes);
      /*if (resolve.checkedKeys.length > 0) {
        this.$refs.tree.setCheckedKeys([nodes.id]);
      }*/

    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .el-tree{
  .is-expanded{
    & > .el-tree-node__content{
      .el-checkbox{
        display: none;
      }
    }
  }
}
</style>