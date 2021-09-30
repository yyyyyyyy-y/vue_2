<template>
  <div>
    <div @click="goHome">go home</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    goHome(){
      this.$router.push({path:"/home"})
    }
  }
};
</script>