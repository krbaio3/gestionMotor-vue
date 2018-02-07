<template>
  <b-container>
      <encabezado></encabezado>
    <b-jumbotron class="jumbotron">
      <router-view></router-view>
    </b-jumbotron>
  </b-container>
</template>
<script>
import encabezado from './components/encabezado.component.vue';
console.log(encabezado);
export default {
  components: {
    encabezado: encabezado,
  }
};
</script>
<style lang="scss">
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue";
@import "../node_modules/bootstrap/scss/bootstrap";
// @import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
// @import "../node_modules/bootstrap/dist/css/bootstrap.css"
@import"./styles/styles";
</style>
