import Vue from 'vue';

import '@/plugins/axios';
import '@/plugins/bootstrap-vue';
import '@/plugins/vee-validate';
import '@/plugins/block-ui';
import '@/plugins/logger';
import '@/plugins/vue-loading-overlay';
import vuetify from '@/plugins/vuetify';

import { Http } from '@/namespaces/Http';

import App from './App.vue';
import router from './router';
import { store } from './store';
import i18n from './i18n';

Vue.config.productionTip = false;

// tslint:disable-next-line:no-unused-expression
new Http.ApiJWTService();


new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
