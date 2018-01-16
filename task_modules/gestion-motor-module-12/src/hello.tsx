import Vue, { VNode, PropOptions } from 'vue';

interface Props {
  message: PropOptions <string>;
  inputHandler: PropOptions<(value: string) => void>;
}

export const HelloComponent = Vue.extend({
  render(h): VNode {
    return (
      <input
        value={this.message}
        onInput={(e) => this.inputHandler(e.target.value)}
      />
    );
  },
  props: {
    message: { default: 'esto es una prueba' },
    inputHandler: {},
  } as Props,
  methods: {
    onChange: function (value) {
      this.$emit('input', value);
    }
  }
});
