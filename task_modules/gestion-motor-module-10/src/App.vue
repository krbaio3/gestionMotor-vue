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
      // tareas: [
      //   {
      //     texto: 'Aprender Vue.js',
      //     terminada: false
      //   },
      //   {
      //     texto: 'Aprender React',
      //     terminada: false
      //   },
      //   {
      //     texto: 'Aprender NodeJS',
      //     terminada: false
      //   }
      // ]
      tareas:tareasVue
    };
  },
  methods: {
    actualizarContador(numero) {
      this.numTareas++;
    }
  },
  created(){
    this.$http
        .get('https://gm-vue.firebaseio.com/tarea.json')
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
              this.tareas.push(responseJson[id]);
              console.log(id);
            }
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
