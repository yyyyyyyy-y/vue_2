<template>
  <div>
    <vxe-table
        border
        resizable
        :tree-config="{children: 'children'}"
        :expand-config="{lazy: true, loadMethod: loadContentMethod}"
        :data="tableData">
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column type="expand" width="80">
        <template #content="{ row }">
          <div class="expand-wrapper">
            <vxe-grid :columns="row.childCols" :data="row.childData"></vxe-grid>
          </div>
        </template>
      </vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
import XEUtils from 'xe-utils'
export default {
  name: "vxe-table",
  data () {
    return {
      tableData: [
        { id: 1000, name: 'vxe-table 从入门到放弃1', type: 'mp3', size: 1024, date: '2020-08-01' },
        {
          id: 1005,
          name: 'Test2',
          type: 'mp4',
          size: null,
          date: '2021-04-01',
          children: [
            { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
            { id: 20045, name: 'vxe-table 从入门到放弃4', type: 'html', size: 600, date: '2021-04-01' },
            {
              id: 10053,
              name: 'vxe-table 从入门到放弃96',
              type: 'avi',
              size: null,
              date: '2021-04-01',
              children: [
                { id: 24330, name: 'vxe-table 从入门到放弃5', type: 'txt', size: 25, date: '2021-10-01' },
                { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
                { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
              ]
            }
          ]
        },
        { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 24555, name: 'vxe-table 从入门到放弃9', type: 'avi', size: 224, date: '2020-10-01' }
      ]
    }
  },
  methods: {
    loadContentMethod  ({ row }) {
      return new Promise(resolve => {
        setTimeout(() => {
          let childCols = XEUtils.sample([
            { type: 'seq', title: 'Sequence' },
            { field: 'name', title: 'Name' },
            { field: 'role', title: 'Role' },
            { field: 'age', title: 'Age' },
            { field: 'sex', title: 'Sex' }
          ], XEUtils.random(3, 5))
          let childData = XEUtils.sample([
            { name: 'TEST1', role: 'Develop', age: 20, sex: '女' },
            { name: 'TEST2', role: 'Develop', age: 22, sex: '女' },
            { name: 'TEST3', role: 'Develop', age: 24, sex: '男' },
            { name: 'TEST4', role: 'Develop', age: 26, sex: '女' },
            { name: 'TEST5', role: 'Develop', age: 28, sex: '男' },
            { name: 'TEST6', role: 'Develop', age: 30, sex: '男' }
          ], XEUtils.random(1, 5))
          row.childCols = childCols
          row.childData = childData
          resolve()
        }, 500)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.expand-wrapper {
  padding: 20px;
}
</style>