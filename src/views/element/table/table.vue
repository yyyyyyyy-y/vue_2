<template>
  <div>
    <el-table
        ref="table"
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
        <template slot="header">
          <span>姓名</span>
          <span
              style="width: 20px;height: 20px;display: inline-block;margin-left: 10px;border-radius: 20px;border: 1px solid red;"
              v-for="i in 5" :key="i" @click="expandList(i)">{{ i }}</span>
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
          <el-button @click="addSon(scope)">添加子节点</el-button>
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
import variables from "@/styles/variables.scss"
export default {
  name: "Table",
  data() {
    return {
      clickLevel:0,

      parentMap: new Map(),
      maps: new Map(),
      test: [],
      tableKey: 0,
      expandId: [],
      tableData1: [],

      currentRow: {},
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
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: true,
          children: [],
          level: 1
        },
        {
          id: 11,
          date: '2016-05-02',
          name: '王小牛11',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 1,
          hasChildren: true,
          children: [],
          level: 2
        },
        {
          id: 111,
          date: '2016-05-02',
          name: '王小牛111',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 11,
          hasChildren: true,
          children: [],
          level: 3
        },
        {
          id: 1111,
          date: '2016-05-02',
          name: '王小牛111',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 111,
          hasChildren: true,
          children: [],
          level: 4
        },
        {
          id: 11111,
          date: '2016-05-02',
          name: '王小牛111',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 1111,
          hasChildren: false,
          children: [],
          level: 5
        },
        {
          id: 112,
          date: '2016-05-02',
          name: '王小虎112',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 11,
          hasChildren: false,
          children: [],
          level: 3
        },
        {
          id: 12,
          date: '2016-05-02',
          name: '王小牛12',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 1,
          hasChildren: true,
          children: [],
          level: 2
        },
        {
          id: 121,
          date: '2016-05-02',
          name: '王小虎121',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 12,
          hasChildren: false,
          children: [],
          level: 3
        },
        {
          id: 2,
          date: '2016-05-02',
          name: '王小猫2',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: true,
          children: [],
          level: 1
        },
        {
          id: 21,
          date: '2016-05-02',
          name: '王小虎21',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 2,
          hasChildren: true,
          children: [],
          level: 2
        },
        {
          id: 211,
          date: '2016-05-02',
          name: '王小虎21',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: 21,
          hasChildren: false,
          children: [],
          level: 3
        },
        {
          id: 3,
          date: '2016-05-02',
          name: '王小狗3',
          address: '上海市普陀区金沙江路 1518 弄',
          parentId: '',
          hasChildren: false,
          children: [],
          level: 1
        },
      ],
      dialogType: '',
    }
  },
  computed:{
    variables(){
      return variables
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

    expandList(expandLevel) {
      this.clickLevel = expandLevel
      console.log(this.$refs.table);
      this.getChildren(this.allTableData)
      // this.getChildren(this.tableData1,expandLevel)
      /*this.aaa().then(res=>{
        res.forEach(item=>{
          this.getChildren(item,expandLevel)
        })
      })
      console.log(this.tableData1)
      console.log(this.expandId);*/
    },

    getChildren(data){
      const temp = []
      data.forEach(item=>{
        if (item.level <= this.clickLevel && item.hasChildren){
          this.$refs.table.store.loadOrToggle(item)
          this.allTableData.forEach(list=>{
            if (item.id == list.parentId){
              temp.push(list)
            }
          })
          setTimeout(()=>{
            this.getChildren(temp)
          },1500)
        }
      })
    },

    addSon(scope) {
      this.currentRow = scope.row
      this.addSonData = {
        id: '',
        parentId: '',
        hasChildren: false,
        date: '',
        level: ''
      }
      this.showAddSon = true
    },

    confirmAddSon() {
      const i = this.allTableData.findIndex(item => item.id === this.currentRow.id)
      this.allTableData[i].hasChildren = true

      this.addSonData.id = Math.random() * 10000000000000
      this.addSonData.parentId = this.currentRow.id
      this.addSonData.hasChildren = false
      this.addSonData.date = '2098-29-98'
      this.addSonData.level = this.currentRow.level + 1
      this.allTableData.push(this.addSonData)

      if (this.maps.get(this.addSonData.parentId)){
        const {row, treeNode, resolve} = this.maps.get(this.addSonData.parentId)
        this.load(row, treeNode, resolve)
      }
      this.showAddSon = false
    },

    closeAddSon() {
      this.showAddSon = false
    },

    deleteSon(row) {
      console.log(row);
    },

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
      this.maps.set(row.id, {row, treeNode, resolve})// 加载子级后再添加子级
      this.allTableData.forEach(item=>{
        if (row.id === item.parentId){
          arr.push(item)
          setTimeout(() => {
            resolve([...arr])
          }, 300)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>