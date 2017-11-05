import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { rutas } from './routes';

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue);

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: rutas,
  mode: 'history',
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
