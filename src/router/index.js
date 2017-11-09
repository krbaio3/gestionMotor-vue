import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HolaMundo from '@/components/holaMundo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/hola',
      name: 'hola',
      component: HolaMundo,
    },
  ],
});
