<template>
<div>
  <h2>{{tituloMayusculas()}}</h2>
  <h4>{{subTitulo}}<span class="ml-1">{{numTareas}}</span></h4>
  </div>
</template>
<script>
import {bus} from './main.js';

export default {
  props: 
  // ['titulo','subTitulo'], 
  {
    titulo: {
      type: String,
      default: 'Escribe un titulo',
      required: true,
    },
    subTitulo: {
      type: String,
      required: false,
    },
    // numTareas:{
    //   type: Number,
    //   default: 0,
    // },
  },
  data (){
    return {
      numTareas: 0
    };
  },
  methods: {
    tituloMayusculas(){
      if(typeof this.titulo == 'string')
        return this.titulo.toUpperCase();
    },
  },
  created () {
    bus.$on('actualizarContador', (numTareas) => {
      this.numTareas = numTareas;
    });
  },
};
</script>