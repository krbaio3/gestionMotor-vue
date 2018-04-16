<template>
  <div id="app">
    <img src="./assets/img/css-logo.gif" alt="powered by css" height="32" width="32" id="imagen"/> 
    <label for="imagen"> 
      Development by CSS 
    </label>
    <Header-nav :class="{ display : hide }"></Header-nav>
    <router-view @removeHeaders="hideHeaders"/>
    <Footer-nav :class="{ display : hide }"></Footer-nav>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { HeaderNav } from '@/components/Header/index.ts';
import FooterNav from '@/components/FooterNav';
import Home from '@/components/Home';

export default Vue.extend({
  name: 'App',
  components: {
    HeaderNav,
    FooterNav,
    Home,
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
});
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
