<template>
    <div id="headerNav">
        <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" disabled><img src="../assets/home.svg" class="home-img"></b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscador de vehiculos" v-model="header.inputSearch" @input="enabledButton($event)"/>
              <b-button size="sm" variant="success" class="my-2 my-sm-0" type="button" :disabled="header.button">Search</b-button>
            </b-nav-form>

            <b-nav-item href="#">
              <span class="fa-stack fa-lg icon-ajust">
                <i class="fa fa fa-cog fa-stack-1x"></i>
              </span>
              Configuración
            </b-nav-item>

            <b-nav-item href="#">
              <span class="fa-stack fa-lg icon-ajust">
                <i class="fa fa-user fa-stack-1x"></i>
              </span>
              Usuario
            </b-nav-item>

            <!-- <b-nav-item-dropdown text="User" class="" right> 
              <b-dropdown-item href="#"><i class="fa fa-user"> Mi Cuenta</i></b-dropdown-item>
              <b-dropdown-item href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-camera fa-stack-1x"></i>
                  <i class="fa fa-ban fa-stack-2x text-danger"></i>
                </span>
                Acerca de...</b-dropdown-item>
              <b-dropdown-item href="#">Desconexion</b-dropdown-item>
            </b-nav-item-dropdown> -->

            <!-- <b-nav-item-dropdown right>
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
<!-- navbar-1.vue -->
    </div>
</template>
<script>
// const Props = {
//   title: { type: String, required: true },
//   disabled: { type: Boolean, default: false, required: false },
//   text: { type: String, required: false },
//   textButton: { type: String, required: true },
//   img: { type: String, required: false },
//   toButtom: { type: String, required: true },
//   imgAlt: { type: String, required: false },
// };
export default {
  name: 'home',
  // props: Props,
  data() {
    return {
      header: {
        inputSearch: '',
        button: true,
      },
    };
  },
  methods: {
    enabledButton(event) {
      if (event.length > 0) {
        this.header.button = false;
      } else {
        this.header.button = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home-img{
  width: 32px;
  height: 32px;
  margin-top: 8px;
  cursor: default;
}
.form-control:focus{
  // background-color: transparent;
}
.navbar.navbar-dark form input[type=text]:focus:not([readonly]){
  // background-color: transparent;
  border-color: #ff4444;
}
.fa-stack.icon-ajust {
  width: 1em !important;
}
</style>

