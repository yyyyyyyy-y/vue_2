<template>
<div class="layout-container">
  <Header></Header>
  <Nav></Nav>
  <div>footer</div>
</div>
</template>

<script>
import Header from '@/views/layout/components/Header';
import Nav from "@/views/layout/components/Nav";
export default {
    name: 'Layout',
    components:{
      Header,
      Nav
    }
};
</script>

<style scoped>

</style>
