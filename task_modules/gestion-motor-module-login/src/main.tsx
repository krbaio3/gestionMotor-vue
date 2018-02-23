import Vue, { VNode } from 'vue';
import Router from 'vue-router';
import { router } from './router';
import { App } from './app'

Vue.use(Router);
// como aqui no usamos el this para propiedades, podemos suprimir el VNode
new Vue({
  // render(h): VNode {
  //   return (
  //     <App />
  //   );
  // },
  render: (h) => h(App),
  router,
}).$mount('#root');
