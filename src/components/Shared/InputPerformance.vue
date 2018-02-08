<template>
  <div class="mb-2">
      <div class="input-group">
        <input type="text" class="form-control" :placeholder="placeholder" :value="value" @input="prueba($event.target.value)"/>
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" @click="callback" >
            <i :class="icono" aria-hidden="true" />
          </button>
        </span>
      </div>
    <hr>
    </div>
</template>
<script>
export default {
  name: 'InputPerformance',
  props: {
    placeholder: { type: String, required: true },
    icono: { type: String, required: false },
    call: { type: String, required: false },
    value: { type: String, required: false, default: '' },
  },
  data() {
    return {
      modelo: '',
    };
  },
  methods: {
    callback() {
      console.log(`esto es el callback ${this.call}`);
      console.log('fullmodel: ', this.fullModel);
      console.log('modelo: ', this.modelo);
      this.$emit('callback', this.modelo);
    },
    updateValue(response) {
      console.log('Esta cambiando', response);
      this.value = response;
    },
    prueba(newValue) {
      console.log('entraaaaaa: ', newValue);
      this.modelo = newValue;
      this.$emit('input', newValue);
    },
  },
  // computed: {
  //   fullModel: {
  //     // getter
  //     get() {
  //       return '';
  //     },
  //     // setter
  //     set(newValue) {
  //       console.log('33333', newValue);
  //       // this.modelo = newValue;
  //     },
  //   },
  // },
  //   watch: {
  //     value: (e) => {
  //       console.log('entra en watch', e);
  //       this.modelo = e;
  //     },
  //   },
};
</script>