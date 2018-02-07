<template>
  <div class="mb-2">
      <div class="input-group">
        <input type="text" class="form-control" v-model="value" :placeholder="placeholder"/>
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" @click="callback" :disabled="value.length > 0 ? false : true">
            <i :class="icono" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'InputPerformance',
  props: {
    placeholder: { type: String, required: true },
    icono: { type: String, required: false },
    call: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
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
      this.$emit('callback', this.modelo);
    },
    updateValue(response) {
      console.log('Esta cambiando', response);
      this.value = response;
    },
  },
  computed: {
    // value: function (params) {
    //   return
    // }
  },
};
</script>
