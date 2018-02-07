<template>
  <div class="header clearfix">
    <nav class="navbar navbar-light bg-faded">
      <h3><strong>Aplicacion Usuarios</strong></h3>
        <ul class="nav nav-pills pull-right">
          <b-link router-tag="li" class="nav-link" to="/" active-class="active" exact>
            <a class="nav-item" href="">Inicio</a>
          </b-link>
          <b-link router-tag="li" class="nav-link" to="/usuarios" active-class="active">
            <a class="nav-item" href="">Usuarios</a>
          </b-link>
      </ul>
    </nav>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
  a {
    text-decoration:none;
  }
  li.nav-link.active {
    a.nav-item {
        color : white;
        }
  }
</style>

