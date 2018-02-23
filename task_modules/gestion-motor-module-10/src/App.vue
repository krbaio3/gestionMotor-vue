<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo" :subTitulo="subTitulo"></titulo>
      <!-- <nueva-tarea :tareas="tareas" v-on:incrementCount="numTareas +=$event"></nueva-tarea> -->
      <nueva-tarea :tareas="tareas" :actualizarContador="actualizarContador"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
      <!-- <span>Numero de Tareas: {{numTareas}}</span> -->
    </div>
  </div>
</template>

<script>
import titulo from './Titulo.component.vue';
import nuevaTarea from './NuevaTarea.component.vue';
import listaTareas from './ListaTareas.component.vue';
import { tareasVue } from './scripts/tareas.ts';

export default {
  components: {
    titulo,
    nuevaTarea,
    listaTareas,
  },
  data() {
    return {
      titulo: '* Lista de Tareas *',
      subTitulo:'Tareas a hacer:',
      tareas: [],
    };
  },
  methods: {
    actualizarContador(numero) {
      this.numTareas++;
    }
  },
  created(){
    this.$http
        .get('tarea.json')
        .then(
          response => {
            return response.json();
          },
          error => {
            console.error(error);
          }
        )
        .then(responseJson => {
            console.log(responseJson);
            for(let id in responseJson){
              let tarea = {
                id,
                texto: responseJson[id].texto,
                terminada: responseJson[id].terminada
              };
              this.tareas.push(tarea);
              console.log(id);
            }
        }, error => {
              console.error(error);
        });
  }
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';

.w-34{
  width: 34px;
}
</style>
