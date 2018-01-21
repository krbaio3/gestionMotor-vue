import Vue from 'vue';
import Router from 'vue-router';
import HolaMundo from '@/components/holaMundo';
import Login from '@/components/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/hola',
      name: 'hola',
      component: HolaMundo,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
