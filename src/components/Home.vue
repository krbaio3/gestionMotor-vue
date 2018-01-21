<template>
<div>
    <header-nav></header-nav>
        <div class="jumbotron">
            <h1>Hola: {{saludo}}</h1>
      </div>
      
  <div>
        <ul class="menu">          
          <li>
            <card></card>
          </li>
          
          <li>
            <card></card>
          </li>  
          
          <li>
            <card></card>
          </li>
          
          </ul>
  </div>
    <footer-nav></footer-nav>
</div>
</template>
<script>
import headerNav from '@/components/HeaderNav';
import footerNav from '@/components/FooterNav';
import card from '@/components/Card';

export default {
  components: {
    headerNav,
    footerNav,
    card,
  },
  data() {
    return {
      saludo: 'Jorge',
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
