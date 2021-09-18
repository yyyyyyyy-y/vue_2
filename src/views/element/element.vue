<template>
<div>
  <router-view></router-view>

  <router-link to="element/tree">tree</router-link>
  <router-link to="element/table">table</router-link>
</div>
</template>

<script>
export default {
  name: "Element"
}
</script>

<style scoped>

</style>