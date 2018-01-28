<template>
  <div class="mb-2">
    <div class="input-group mb-3">
        <input 
            :type="tipo"
            class="form-control"
            :placeholder="placeholder"
            :value="value"
            :disabled="disabled" 
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
        <div class="input-group-prepend">
            <span :class="icono" class="input-group-text" aria-hidden="true" id="basic-addon1"></span>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'InputSimple',
  props: {
    placeholder: { type: String, required: true },
    tipo: { type: String, required: false, default: 'text' },
    value: { type: String },
    disabled: { type: Boolean, required: false, default: false },
    icono: { type: String, required: true },
  },
};
</script>
