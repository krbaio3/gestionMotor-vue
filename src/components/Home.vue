<template>
  <div>
    <header-nav></header-nav>
    <b-jumbotron class="jumbotron">
      <b-card-group deck>
        <div v-for="tarea of tareas" :key="tarea.title">
          <card :tarea="tarea"></card>
        </div>
      </b-card-group>          
    </b-jumbotron>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
import headerNav from '@/components/HeaderNav';
import footerNav from '@/components/FooterNav';
import card from '@/components/Card';
import tareas from '@/api/tareas';

export default {
  components: {
    headerNav,
    footerNav,
    card,
  },
  data() {
    return {
      saludo: 'Jorge',
      tareas,
    };
  },
};
</script> 
<style lang="scss" scoped>
ul.menu {
  background: #F4F4F4;
  border: 1px solid #7C7C7C;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  li {
    float: left;
    width: 20%;
    a {
      border-left: 1px solid #FFF;
      border-right: 1px solid #7C7C7C;
      color: #333;
      display: block;
      padding: .3em;
      text-decoration: none;
    }
  }
}
</style>
