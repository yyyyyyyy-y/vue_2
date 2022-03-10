<template>
  <div>
    <drag v-model="list" group="site"  animation="300" dragClass="dragClass"  ghostClass="ghostClass" chosenClass="chosenClass" @start="onStart" @end="onEnd">
      <transition-group class="drag-group">
        <div class="list-style" v-for="item in list" :key="item.id">{{item.name}}</div>
      </transition-group>
    </drag>
  </div>
</template>

<script>
import drag from 'vuedraggable'
export default {
  name: "draggable",
  components:{
    drag,
  },
  data(){
    return{
      drag:false,
      list:[
        {name:'aaa',id:1},
        {name:'bbb',id:2},
        {name:'ccc',id:3},
        {name:'ddd',id:4},
      ],
      group:[
        {
          id:1,
          list:[
            {id:1,name:'aaa'},
            {id:2,name:'bbb'},
          ]
        }
      ]
    }
  },
  methods:{
    onStart(){
      this.drag = true
    },
    onEnd(){
      this.drag = false
    },
  }
}
</script>

<style scoped lang="scss">
.drag-group{
  display: flex;
}

.list-style{
  padding: 4px 20px;
  border: 1px solid red;
  margin: 10px 20px;
  cursor: pointer;
}
</style>