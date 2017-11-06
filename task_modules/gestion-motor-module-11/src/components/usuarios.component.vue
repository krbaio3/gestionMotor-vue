<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="usuario in usuarios">
        {{usuario.name}}
      </li>
    </ul>
    <br>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      usuarios: {},
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
<style lang="scss">
</style>

