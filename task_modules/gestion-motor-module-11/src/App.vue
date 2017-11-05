<template>
  <div class="container">
      <encabezado></encabezado>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import encabezado from "./components/encabezado.component.vue";
export default {
  components: {
    encabezado: encabezado
  }
};
</script>
<style lang="scss">
// @import "../node_modules/bootstrap/scss/bootstrap";
// @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
// @import "../node_modules/bootstrap/dist/css/bootstrap.css"
</style>
