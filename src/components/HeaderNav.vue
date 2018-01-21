<template>
    <div id="navegacion">
        <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" disabled>Home</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscador de vehiculos"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item href="#" class="fa fa-cog">Settings</b-nav-item>

            <b-nav-item-dropdown text="User" class="fa fa-user" right>
              <b-dropdown-item href="#">Mi Cuenta</b-dropdown-item>
              <b-dropdown-item href="#">Acerca de...</b-dropdown-item>
              <b-dropdown-item href="#">Desconexion</b-dropdown-item>
            </b-nav-item-dropdown>

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
    </div>
</template>
