<template>
   <!-- Modal Component -->
      <b-modal :id="id" :title="title">
        <p class="my-4" v-text="text"></p>
      </b-modal>
</template>
<script lang="ts">
import Vue from 'vue';

// export const Modal = Vue.extend({
export default Vue.extend({
  name: 'Modal',
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true, default: 'Title' },
    text: { type: String, required: true, default: 'Text' },
  },
});
</script>

