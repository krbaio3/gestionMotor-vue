import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

export const bus = new Vue({
  methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador', numTareas);
    },
  },
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
