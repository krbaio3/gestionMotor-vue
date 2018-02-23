<template>
  <div id="app">
        <img src="./assets/css-logo.gif" alt="powered by css" height="32" width="32" id="imagen"/>
        <label for="imagen">
            Development by CSS
        </label>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
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
</style>
