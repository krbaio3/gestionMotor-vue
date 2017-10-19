<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo></titulo>
    </div>
  </div>
</template>

<script>
import Titulo from './TituloComponent.vue';
export default {
  components:{
    Titulo,
  },
  data() {
    return {
      titulo: 'Lista de Tareas'
    }
  },
}
</script>

<style lang="scss">
#app {

}

</style>
