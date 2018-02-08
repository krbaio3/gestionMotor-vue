<template>
  <div id="inputSimple" class="mb-2">
    <div class="input-group mb-3">
        <div class="input-group-prepend" v-if="text">
            <span class="input-group-text" aria-hidden="true" id="basic-addon1" v-text="text"></span>
        </div>
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
<script lang="ts">
import vue from 'vue';

export default vue.extend({
  name: 'InputSimple',
  props: {
    placeholder: { type: String, required: false },
    tipo: { type: String, required: false, default: 'text' },
    value: { type: String },
    disabled: { type: Boolean, required: false, default: false },
    icono: { type: String, required: true },
    text: { type: String, required: false },
  },
});
</script>
<style lang="scss" scoped>
#inputSimple{
    // input[type='date']::before {
    // content: attr(placeholder);
//   }
}
</style>

