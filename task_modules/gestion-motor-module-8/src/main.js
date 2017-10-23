import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar', {
    bind(el, binding, vnode) {
      el.style.fontFamily = binding.value;
      if(binding.modifiers['negrilla']){
        el.style.fontWeight = 'bold';
      } else if (binding.modifiers['italica']){
        el.style.fontStyle = 'italic';
      }
    },
});

new Vue({
    el: '#app',
    render: h => h(App)
})  