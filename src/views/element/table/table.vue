<template>
  <div>
    <el-table
        :data="tableData1"
        style="width: 100%"
        row-key="id"
        border
        lazy
        :expand-row-keys="expandId"
        :load="load"
        :key="tableKey"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
        <template slot="header" slot-scope="scope">
          <span>{{scope.row}}</span>
<!--          <el-button type="primary" circle v-for="i in 4" :key="i">{{i}}</el-button>-->
        </template>
      </el-table-column>
      <el-table-column
          prop="date"
          label="生日"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button @click="addSon(scope.row)">添加子节点</el-button>
          <el-button @click="addOrLookDetails(scope.row)">修改</el-button>
          <el-button @click="deleteSon(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
        title="修改"
        :visible="showLookDetails"
        @close="closeLookDetails"
    >
      <!--      <el-row>{{ currentRow.name }}</el-row>
            <el-row>{{ currentRow.address }}</el-row>-->
      <el-form
          :model="currentRow"
          label-position="left"

      >
        <el-form-item prop="name" label="姓名">
          <el-input size="small" type="text" v-model="currentRow.name"></el-input>
        </el-form-item>
        <el-form-item prop="address" label="地址">
          <el-input size="small" type="text" v-model="currentRow.address"></el-input>
        </el-form-item>
        <el-row>
          <el-button size="small" @click="confirmModify">确认</el-button>
          <el-button size="small" @click="closeLookDetails">取消</el-button>
        </el-row>
      </el-form>
    </el-dialog>

    <el-dialog
        title="添加子节点"
        :visible="showAddSon"
        @close="closeAddSon"
    >
      <!--      <el-row>{{ currentRow.name }}</el-row>
            <el-row>{{ currentRow.address }}</el-row>-->
      <el-form
          :model="addSonData"
          label-position="left"
          ref="addSonForm"
      >
        <el-form-item prop="name" label="姓名">
          <el-input size="small" type="text" v-model="addSonData.name"></el-input>
        </el-form-item>
        <el-form-item prop="address" label="地址">
          <el-input size="small" type="text" v-model="addSonData.address"></el-input>
        </el-form-item>
        <el-row>
          <el-button size="small" @click="confirmAddSon">确认</el-button>
          <el-button size="small" @click="closeAddSon">取消</el-button>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      test: [],
      tableKey: 0,
      expandId: [],
      tableData1: [],

      currentRow: {},
      currentTreeNode: {},
      currentResolve: {},

      showLookDetails: false,

      showAddSon: false,
      addSonData: {},

      tableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          children: [
            {
              id: 5,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              children: [
                {
                  id: 8,
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                  id: 9,
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }
              ]
            },
            {
              id: 6,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            },
            {
              id: 7,
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }
          ]
        },
        {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      allTableData: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: true,
          level: 1
        },
        {
          id: 11,
          date: '2016-05-02',
          name: '王小牛',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 1,
          hasChildren: true,
          level: 2
        },
        {
          id: 111,
          date: '2016-05-02',
          name: '王小牛',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 11,
          hasChildren: false,
          level: 3
        },
        {
          id: 112,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 11,
          hasChildren: false,
          level: 3
        },
        {
          id: 12,
          date: '2016-05-02',
          name: '王小牛',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 1,
          hasChildren: true,
          level: 2
        },
        {
          id: 121,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 12,
          hasChildren: false,
          level: 3
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '王小猫',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: true,
          level: 1
        },
        {
          id: 21,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 2,
          hasChildren: false,
          level: 2
        },
        {
          id: 3,
          date: '2016-05-02',
          name: '王小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: false,
          level: 1
        },
      ],
      allTableData1: [
        {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: true,
          level: 1
        },
        {
          id: 11,
          date: '2016-05-02',
          name: '王小牛',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 1,
          hasChildren: true,
          level: 2
        },
        {
          id: 111,
          date: '2016-05-02',
          name: '王小牛',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 11,
          hasChildren: false,
          level: 3
        },
        {
          id: 112,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 11,
          hasChildren: false,
          level: 3
        },
        {
          id: 12,
          date: '2016-05-02',
          name: '王小牛',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 1,
          hasChildren: true,
          level: 2
        },
        {
          id: 121,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 12,
          hasChildren: false,
          level: 3
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '王小猫',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: true,
          level: 1
        },
        {
          id: 21,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 2,
          hasChildren: false,
          level: 2
        },
        {
          id: 3,
          date: '2016-05-02',
          name: '王小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: false,
          level: 1
        },
      ],
      dialogType: ''
    }
  },
  created() {
    // this.getTest(),
    this.getTableData1()
  },
  methods: {
    getTest(scope) {
      console.log(scope)
    },

    addSon(row) {
      this.currentRow = row
      console.log(this.currentRow);
      this.addSonData = {
        id:'',
        parentId:'',
        hasChildren:false,
        date:'',
        level:''
      }
      this.showAddSon = true
    },

    confirmAddSon() {
      const i = this.allTableData.findIndex(item => item.id === this.currentRow.id)
      console.log(i);
      this.allTableData[i].hasChildren = true

      this.addSonData.id = Number(this.currentRow.id + '9')
      this.addSonData.parentId = this.currentRow.id
      this.addSonData.hasChildren = false
      this.addSonData.date = '2098-29-98'
      this.addSonData.level = this.currentRow.level + 1
      this.allTableData.push(this.addSonData)
      console.log(this.allTableData)

      // this.load(this.currentRow, treeNode, resolve)
      // this.tableKey += 1
      this.showAddSon = false
      // this.expandId.push(String(this.currentRow.id))
      // console.log(this.expandId);
    },

    closeAddSon() {
      this.showAddSon = false
    },

    deleteSon(row) {
      console.log(row);
    },

    /*getTableData1() {
      // console.log(this.tableData);
      let temp = JSON.parse(JSON.stringify(this.tableData))
      for (let i of temp) {
        if (i.children && i.children.length !== 0) {
          i.children = []
          i.hasChildren = true
        }
      }
      // console.log(this.tableData)
      // console.log(temp)
      this.tableData1 = temp
    },*/
    getTableData1() {
      for (let i of this.allTableData) {
        if (i.level == 1) {
          this.tableData1.push(i)
        }
      }
    },

    closeLookDetails() {
      this.showLookDetails = false
    },

    confirmModify() {
      for (let i of this.allTableData) {
        if (this.currentRow.id === i.id) {
          i = this.currentRow
          console.log(i);
          console.log(this.allTableData);
        }
      }
      this.closeLookDetails()
    },

    addOrLookDetails(row) {
      this.currentRow = JSON.parse(JSON.stringify(row))
      this.showLookDetails = true
    },

    load(row, treeNode, resolve) {
      // console.log(row)
      // console.log(treeNode);
      // console.log(resolve);
      let arr = []
      for (let i of this.allTableData) {
        if (row.id === i.id) {
          for (let j of this.allTableData) {
            if (j.parentId === row.id) {
              arr.push(j)
              setTimeout(() => {
                resolve([...arr])
              }, 300)
            }
          }
          /*let temp = this.allTableData.find(item => item.id == row.id)
          setTimeout(() => {
            resolve([...temp.children])
          }, 300)*/
        }
      }
    }
  }
}
</script>

<style scoped>

</style>