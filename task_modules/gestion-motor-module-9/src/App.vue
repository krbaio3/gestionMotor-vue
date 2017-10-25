<template>
  <div class="container">
    <div class="jumbotron">
      <span>{{ mensaje | mayusculas }}</span>
      <hr>
      <span>{{mensaje}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mensaje: 'Aprende VueJS 2 facilmente'
    };
  },
  filters: {
    mayusculas (msg) {
      return msg.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
