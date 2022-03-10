<template>
  <div class="layout-container">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer"
import Content from "./components/Content";

export default {
  name: 'Layout',
  components: {
    Content,
    Header,
    Footer
  },
  data(){
    return{
    }
  },
  methods:{

  }
};
</script>

<style scoped>
</style>
