import Vue from 'vue';
import vueRouter from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import { Config, User } from '@/components/Header';
import Vehicles from '@/components/Vehicles/Vehicles';

Vue.use(vueRouter);

export default new vueRouter({
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
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
