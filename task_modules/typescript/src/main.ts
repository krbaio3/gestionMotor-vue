// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */
// tslint:disable-next-line:no-unused-expression
new Vue({
  components: { App },
  el: "#app",
  router,
  template: "<App/>",
});
