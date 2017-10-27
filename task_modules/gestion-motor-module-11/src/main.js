import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { rutas } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: rutas,
  mode: 'history',
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
