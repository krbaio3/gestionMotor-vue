import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import HolaMundo from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
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
