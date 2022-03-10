<template>
  <div class="carousel-wrap" id="carousel">
    // 轮播图列表
    <transition-group tag="ul" class='slide-ul' name="list">
      <li v-for="(list,index) in slideList" :key="list.id" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
        <a :href="list.clickUrl" >
          <img :src="list.image" :alt="list.desc">
        </a>
      </li>
    </transition-group>
    // 轮播图位置指示
    <div class="carousel-items">
      <span v-for="(item,index) in slideList.length" :key="index" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      slideList: [
        {
          id:'1',
          "clickUrl": "#",
          "desc": "nhwc",
          "image": require('../../static/images/1.png')
        },
        {
          id:'2',
          "clickUrl": "#",
          "desc": "hxrj",
          "image": require('../../static/images/2.png')
        },
        {
          id:'3',
          "clickUrl": "#",
          "desc": "rsdh",
          "image": require('../../static/images/3.png')
        }
      ],
      currentIndex: 0,
      timer: ''
    }
  },
  created() {
    //在DOM加载完成后，下个tick中开始轮播
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 3000)
    })
  },
  methods:{
    go() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 3000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {
      this.currentIndex = index
    },
    autoPlay() {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
.carousel-wrap {
  position: relative;
  height: 453px;
  width: 100%;
  overflow: hidden;
  // 删除
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .active {
    background-color: blueviolet;
  }
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}
</style>