<template>
  <div class="mb-2">
      <div class="input-group">
        <input type="text" class="form-control" :placeholder="placeholder" v-model="value" @change="prueba"/>
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" @click="callback" >
            <i :class="icono" aria-hidden="true" />
          </button>
        </span>
      </div>
    {{ value }}
    <hr>
    {{ modelo }}
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
      modelo: 'bzzzzzzzzzzz',
    };
  },
  methods: {
    callback() {
      console.log(`esto es el callback ${this.call}`);
      this.$emit('callback', this.fullModel);
    },
    updateValue(response) {
      console.log('Esta cambiando', response);
      this.value = response;
    },
    prueba(newValue) {
      console.log('entraaaaa22222a');
      // this.value = this.modelo;
      this.$emit('value', newValue);
    },
  },
  computed: {
    fullModel: {
      // getter
      get() {
        return '';
      },
      // setter
      set(newValue) {
        console.log('33333', newValue);
        this.modelo = newValue;
      },
    },
  },
  watch: {
    value: (e) => {
      console.log('entra en watch', e);
      this.modelo = e;
    },
  },
};
</script>