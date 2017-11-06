<template>
<div>
  <h3>Informacion del Usuario</h3>
  <div>
    <p><strong>Nombre: </strong> {{nombre}}</p>
    <p><strong>Correo Electronico: </strong> {{email}}</p>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      nombre: '',
      email:''
    };
  },
  created() {
    let id = this.$route.params.id;
    this.$http.get("https://jsonplaceholder.typicode.com/users/" + id)
    .then(response => {
      return response.json();
    }).then(user => {
      this.nombre = user.name;
      this.email = user.email;
    });
  }
};
</script>
<style lang="scss">

</style>

