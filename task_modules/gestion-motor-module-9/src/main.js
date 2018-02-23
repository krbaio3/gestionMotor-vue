import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.filter('suspensivos', function(texto) {
    return texto.substring(0, 10) + '...';
});

Vue.use(VueResource);

new Vue({
    el: '#app',
    render: h => h(App)
})
