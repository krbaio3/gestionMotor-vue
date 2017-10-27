<template>
  <div>
    <p>Lista de Usuarios</p>
    <ul class="list-group">
      <li class="list-group-item" v-for="usuario in usuarios">
        {{usuario.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuarios: {}
    }
  },
  created() {
    this.$http
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {return response.json()}, error => {console.error(error);})
      .then(usuarios => {this.usuarios = usuarios}, error => {console.error(error);});
  }
};
</script>
<style lang="sass" scoped>
</style>

