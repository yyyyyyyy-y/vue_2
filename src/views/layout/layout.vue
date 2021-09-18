<template>
  <div class="layout-container">
    <Header></Header>
    <div class="main-container">
      <Nav></Nav>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

export default {
  name: 'Layout',
  components: {
    Header,
    Nav,
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
