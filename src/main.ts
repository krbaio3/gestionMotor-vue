// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import bootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';

Vue.use(bootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  router,
  components: { App },
  el: '#app',
  template: '<App/>',
});
