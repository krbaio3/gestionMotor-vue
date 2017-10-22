<template>
  <div class="container">
    <div class="jumbotron">
      <!-- <mostrarFormulario :titulo="titulo"> -->
      <mostrarFormulario>
        <div slot="titulo">
          <h3>{{titulo}}</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
          <label for="correo">Correo Electronico</label>
          <input type="email" 
                  name="" 
                  id="correo" 
                  class="form-control"
                  placeholder="Escribe tu Correo electronico">
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">Iniciar Sesion</button> 
        </div>
      </mostrarFormulario>
    </div>
  </div>
</template>
<script>
import MostrarFormulario from './mostrar-formulario.vue';
export default {
  components: {
    mostrarFormulario : MostrarFormulario,
  },
  data() {
    return {
      titulo: 'Cambiar Password',
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/bootstrap';

h3 {
  color: blue;
}
</style>
