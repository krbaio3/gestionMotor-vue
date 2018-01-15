import Vue, { VNode, PropOptions } from 'vue';

export const HelloComponent = Vue.extend({
  render(h): VNode {
    return (
      <input
        value={this.message}
        onInput={(e)=> this.inputHandler(e.target.value)}
      />
    );
  },
  props: {
    message: { default: 'esto es una prueba' } as PropOptions<string>,
    inputHandler: {} as PropOptions<(value: string) => void>,
  },
  methods: {
    onChange: function (value) {
      this.$emit('input', value);
    }
  }
});
