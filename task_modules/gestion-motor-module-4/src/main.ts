import Vue from 'vue';

new Vue({
  el: '#root',
  template: `
  <div>
    <h1>{{message}}</h1>
    <input v-bind:value="message"
    v-on:input="message = $event.target.value"/>
</div>`,
  data: {
      message: 'Super Polla',
  }  
});
