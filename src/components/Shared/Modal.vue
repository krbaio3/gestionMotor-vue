<template>
   <!-- Modal Component -->
  <b-modal 
    :id="id"
    :title="title"
    ref="myModal"
    @ok="handleOk"
    @cancel="close">
    <p class="my-4" v-text="text"></p>        
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Selecciona la ficha..."
      @change="processFile($event)">
    </b-form-file>
  </b-modal>
</template>
<script lang="ts">
/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';

@Component({
  name: 'Modal',
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true, default: 'Title' },
    text: { type: String, required: true, default: 'Text' },
  },

})
export default class Modal extends Vue {
  // data
  file: any = null

  aux = []

  close(): void {
    console.log('cierra', this);
    this.file = null;
  }
  handleOk(evt): void {
    console.log('ficha', this.file);
    console.log(evt);
    const formData = new FormData();
    formData.append('file', this.file);
    axios.post(
      '/single-file',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    ).then(() => {
      console.log('SUCCESS!!');
      this.file = null;
    })
      .catch(() => {
        console.log('FAILURE!!');
      });
  }
  processFile(event): void {
    // this.aux = event.target.files[0];
    console.log('-->', event.target.files[0]);
    this.file = event.target.files[0];
    console.log(this.$refs.file);
  }
}
</script>
<style lang="scss">
  .custom-file-input:lang(en) ~ .custom-file-label::after {
    content: "Archivo";
}
</style>

