<template>
<div>
  <h2>{{tituloMayusculas()}}</h2>
  <h4>Tareas a hacer:</h4>
  </div>
</template>
<script>
export default {
  props: {
    titulo: {
      type: String,
      default: 'Escribe un titulo',
      required: true,
    }
  },
  methods: {
    tituloMayusculas(){
      if(typeof this.titulo == 'string')
        return this.titulo.toUpperCase();
    }
  }
};
</script>