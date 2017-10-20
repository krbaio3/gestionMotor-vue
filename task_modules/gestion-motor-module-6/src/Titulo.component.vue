<template>
<div>
  <h2>{{tituloMayusculas()}}</h2>
  <h4>{{subTitulo}}<span class="ml-1">{{numTareas}}</span></h4>
  </div>
</template>
<script>
export default {
  props: {
    titulo: {
      type: String,
      default: 'Escribe un titulo',
      required: true,
    },
    subTitulo: {
      type: String,
      required: false,
    },
    numTareas:{},
  },
  methods: {
    tituloMayusculas(){
      if(typeof this.titulo == 'string')
        return this.titulo.toUpperCase();
    }
  }
};
</script>