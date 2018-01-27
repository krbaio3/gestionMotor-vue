import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import { Config, User } from '@/components/Header';

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
      path: '/config',
      name: 'Config',
      component: Config,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
  ],
});
