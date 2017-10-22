<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary" 
              @click="componenteSeleccionado = 'iniciarSesion'">IniciarSesion</button>
      <button class="btn btn-primary" 
              @click="componenteSeleccionado = 'cambiarClave'">Cambiar Clave</button>
      <component :is="componenteSeleccionado"></component>
    </div>
  </div>
</template>
<script>
import MostrarFormulario from './scripts/mostrar-formulario.vue';
import IniciarSesion from './scripts/init-session.vue';
import CambiarClave from './scripts/change-password.vue'; 

export default {
  components: {
    mostrarFormulario : MostrarFormulario,
    iniciarSesion : IniciarSesion,
    cambiarClave : CambiarClave,
  },
  data() {
    return {
      componenteSeleccionado: 'iniciarSesion'
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../node_modules/bootstrap/scss/bootstrap';

h3 {
  color: blue;
}
</style>
