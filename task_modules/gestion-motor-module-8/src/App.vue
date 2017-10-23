<template>
  <div class="container">
    <div class="jumbotron">
      <span class="display-3" v-decorar:peque.italica.negrilla="{tipoLetra: 'helvetica', color: 'blue'}">Aprende Vue2 fácilmente</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
</style>
