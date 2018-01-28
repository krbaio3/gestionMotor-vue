<template>
  <div class="mb-2">
      <div class="input-group">
        <input type="text" class="form-control" v-model="license" :placeholder="placeholder" />
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" @click="callback">
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
  },
  data() {
    return {
      license: '',
    };
  },
  methods: {
    callback() {
      console.log(`esto es el callback ${this.call}`);
      this.$emit('callback', this.license);
    },
  },
};
</script>
