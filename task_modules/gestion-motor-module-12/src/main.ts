import Vue from 'vue';
import { ComponentOptions } from 'vue/types/options';

interface State extends Vue {
  message: string;
}

new Vue({
  el: '#root',
  template: `<div>
                <h1>{{message}}</h1>
                <input
                  type="text"
                    :value="message"
                    @input="onChange($event.target.value)"/>
              </div>`,
  data: {
    message: 'Hello from Vue.js'
  },
  methods: {
    onChange: function (value) {
      this.message = value;
    },
  },
} as ComponentOptions<State>);
