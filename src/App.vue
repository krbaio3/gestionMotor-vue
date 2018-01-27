<template>
  <div id="app">
    <img src="./assets/css-logo.gif" alt="powered by css" height="32" width="32" id="imagen"/> 
    <label for="imagen"> 
      Development by CSS 
    </label>
    <header-nav :class="{ display : hide }"></header-nav>
    <router-view @removeHeaders="hideHeaders"/>
    <footer-nav :class="{ display : hide }"></footer-nav>
  </div>
</template>

<script>
import { headerNav } from '@/components/Header/';
import footerNav from '@/components/FooterNav';
import home from '@/components/Home';

export default {
  name: 'App',
  components: {
    headerNav,
    footerNav,
    home,
  },
  data() {
    return {
      hide: true,
    };
  },
  methods: {
    hideHeaders(event) {
      console.log('ocultar', event);
      this.hide = event;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/styles.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.display {
  display: none;
}
</style>
