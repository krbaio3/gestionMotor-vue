<template>
    <ul class="list-group">
        <li v-for="(tarea, index) in tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
            <span>{{tarea.texto}}</span>
            <span class="pull-right">
                <button type="button"
                class="btn btn-sm fa fa-check  ml-1"
                v-bind:class="{'btn-success': tarea.terminada==false, 'btn-secondary': tarea.terminada==true}"
                v-on:click="estado(index)"/>
                <!-- v-on:click="tarea.terminada = !tarea.terminada"     -->
            </span>
            <span class="pull-right">
                <button type="button"
                class="btn btn-danger btn-sm fa fa-times w-34"
                @click="eliminarTarea(index)"/>
        </span>
        </li>
    </ul>
</template>
<script>
import {bus} from './main.js';

export default {
  props: ['tareas'],
  methods: {
    estado (indice) {
      let terminada = this.tareas[indice].terminada = !this.tareas[indice].terminada;
      let id = this.tareas[indice].id;

      console.log(id);

      this.$http.patch('tarea/' + id + '.json', {
          terminada,
      }).then(response => {
        console.log(response);
      });
    },
    eliminarTarea: function (index) {
      let id = this.tareas[index].id;
      this.tareas.splice(index, 1);
      console.log(index);
      console.log(this.tareas);
      this.$http.delete('tarea/' + id + '.json').then(response => {
        console.log(response);
      });
      bus.actualizarContador(this.tareas.length);
    }
  },
  updated () {
    bus.$on('actualizarContador', (numTareas) => {
      this.numTareas = numTareas;
    });
  },
};
</script>

<style lang="scss" scoped>
//1 Variables para fuentes e inconos de font-awesome
$fa-font-path: '../node_modules/font-awesome/fonts';
//2 Import para fuentes e iconos de font-awesome
@import '../node_modules/font-awesome/scss/font-awesome.scss';
.terminada {
    color: gray;
    // text-decoration: line-through !important;
    text-decoration: line-through;
}
.ml-1 {
    margin-left: 1rem;
}
</style>
