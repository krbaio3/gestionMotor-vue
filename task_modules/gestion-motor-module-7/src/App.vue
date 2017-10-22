<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario></mostrarFormulario>
    </div>
  </div>
</template>
<script>
import MostrarFormulario from './scripts/mostrarFormulario.vue'
export default {
  components: {
    mostrarFormulario : MostrarFormulario
  },
  data() {}
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';

</style>
