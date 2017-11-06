<template>
<div>
  <h3>Informacion del Usuario</h3>
  <div>
    <p><strong>Nombre: </strong> {{nombre}}</p>
    <p><strong>Correo Electronico: </strong> {{email}}</p>
  </div>
  <b-button variant="success" @click="goBack">Aceptar</b-button>
</div>
</template>
<script>
export default {
  data() {
    return {
      nombre: "",
      email: ""
    };
  },
  methods: {
    _callToUser() {
      let id = this.$route.params.id;
      this.$http
        .get("https://jsonplaceholder.typicode.com/users/" + id)
        .then(response => {
          return response.json();
        })
        .then(user => {
          this.nombre = user.name;
          this.email = user.email;
        });
    },
    goBack(){
      this.$router.push('/usuarios');
    }
  },
  created() {
    this._callToUser();
  }
};
</script>
<style lang="scss">

</style>

