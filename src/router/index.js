import Vue from 'vue';
import Router from 'vue-router';
import HolaMundo from '@/components/holaMundo';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/hola',
      name: 'Hola',
      component: HolaMundo,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
