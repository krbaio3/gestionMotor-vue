<template>
<div>
    <barra-navegacion></barra-navegacion>
        <div class="jumbotron">
            <h1>Hola: {{saludo}}</h1>
      </div>
</div>
</template>
<script>
import barraNavegacion from './barraNavegacion';

export default {
  components: { 'barra-navegacion': barraNavegacion },
  data() {
    return {
      saludo: 'Jorge',
    };
  },
};
</script>
<style lang="postcss" scoped>

</style>
