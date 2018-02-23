<template>
<div>
    <nav-bar></nav-bar>
        <div class="jumbotron">
            <h1>Hola: {{saludo}}</h1>
      </div>
      <footer-bar></footer-bar>
</div>
</template>
<script>
import barraNavegacion from './barraNavegacion';
import footerBar from './footerNav';

export default {
  components: {
    'nav-bar': barraNavegacion,
    'footer-bar': footerBar,
  },
  data() {
    return {
      saludo: 'Jorge',
    };
  },
};
</script>
<style lang="postcss" scoped>

</style>
