import Vue from 'vue';

export const HelloComponent = Vue.extend({
  template: `
      <input
      type="text"
        :value="value"
        @input="onChange($event.target.value)"/>
  `,
  props: {
    value: String,
  },
  methods: {
    onChange: function (value) {
      this.$emit('input', value);
    }
  }
})
