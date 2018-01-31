<template>
  <div class="mb-2">
      <div class="input-group">
        <input type="text" class="form-control" v-model="modelo" :placeholder="placeholder"/>
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" @click="callback" :disabled="modelo.length > 0 ? false : true">
            <i :class="icono" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
</template>
<script lang="ts">
import vue from 'vue';

export default vue.extend({
  name: 'InputPerformance',
  props: {
    placeholder: { type: String, required: true },
    icono: { type: String, required: false },
    call: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
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
  },
});
</script>
