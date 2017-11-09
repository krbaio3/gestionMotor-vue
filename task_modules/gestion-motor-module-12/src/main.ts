import Vue from 'vue';
import { ComponentOptions } from 'vue/types/options';
import { HelloComponent } from './hello'

interface State extends Vue {
  message: string;
}

new Vue({
  el: '#root',
  template: `
            <div>
              <h1>{{message}}</h1>
              <hello
                v-model="message"/>
            </div>`,
  data: {
    message: 'Hello from Vue.js'
  },
  components: {
    hello: HelloComponent,
  },
} as ComponentOptions<State>);
