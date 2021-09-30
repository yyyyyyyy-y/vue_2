<template>
  <div class="layout-container">
    <Header></Header>
    <div class="main-container">
      <main-content></main-content>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer"

export default {
  name: 'Layout',
  components: {
    Header,
    MainContent,
    Footer
  },
  data(){
    return{
    }
  }
};
</script>

<style scoped>
.main-container{
  display: flex;
}
</style>
