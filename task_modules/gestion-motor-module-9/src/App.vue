<template>
  <div class="container">
    <div class="jumbotron">
      <span>{{ mensaje | mayusculas | suspensivos }}</span>
      <hr>
      <span>{{temperatura | aFarenhait}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mensaje: 'Aprende VueJS 2 facilmente',
      temperatura:29,
    };
  },
  filters: {
    mayusculas (msg) {
      return msg.toUpperCase();
    },
    aFarenhait (temperatura){
      return (9/5 * temperatura) + 32 + ' F';
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
