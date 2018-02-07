import Vue from 'vue';
// import BootstrapVue from 'bootstrap-vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// Vue.use(BootstrapVue);

Vue.use(Vuetify)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
