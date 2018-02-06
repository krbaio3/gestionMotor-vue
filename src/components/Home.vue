<template>
  <div>
    <b-jumbotron class="jumbotron">
      <b-card-group deck>
        <div v-for="tarea of tareas" :key="tarea.title">
          <card :tarea="tarea" class="fila"></card>
        </div>
      </b-card-group>          
    </b-jumbotron>
  </div>
</template>
<script lang="ts">
import vue from 'vue';
import Card from '@/components/Card';
import tareas from '../api/tareas.ts';

export default vue.extend({
  components: {
    Card,
  },
  data() {
    return {
      tareas,
      saludo: 'Jorge',
    };
  },
  methods: {
    hideHeaders() {
      console.log('ocultar', false);
    },
  },
  beforeCreate() {
    console.log('llamando a beforeCreate');
    // quitar este evento, para cargar cabecera sólo en pruebas
    this.$emit('removeHeaders', false);
  },
  created() {
    console.log('llamando a create');
  },
  beforeMount() {
    console.log('llamando a beforeMount');
  },
  mounted() {
    console.log('llamando a Mount');
  },
  beforeUpdate() {
    console.log('llamando a beforeUpdate');
  },
  updated() {
    console.log('llamando a update');
  },
  beforeDestroy() {
    console.log('llamando a beforeDestroy');
  },
  destroyed() {
    console.log('llamando a Destroy');
  },
});
</script> 
<style lang="scss" scoped>
ul.menu {
  background: #F4F4F4;
  border: 1px solid #7C7C7C;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  li {
    float: left;
    width: 20%;
    a {
      border-left: 1px solid #FFF;
      border-right: 1px solid #7C7C7C;
      color: #333;
      display: block;
      padding: .3em;
      text-decoration: none;
    }
  }
}
.jumbotron{
  margin-bottom: 0px;
}
.fila{
    padding-left: 12%;
    padding-right: 5%;
    margin-bottom: 15%;
}
</style>
