<template>
  <div v-show="loading">
    <!-- <i class="fa fa-spinner fa-spin fa-5x"></i> -->
    <i class="fa fa-cog fa-spin fa-5x"></i>
    <p v-text="mensaje"></p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
// import vueClassComponent from 'vue-class-component';

@Component({
  name: 'Loading',
})
export default class Loading extends Vue {
  @Prop({ required: false, default: 'Cargando' })
  mensaje: string
  @Prop({ required: false })
  loading: boolean
  destroyed() {
    console.log('llamando a destroy Loading', this);
  }
}
</script>   
<style lang="scss" scoped>
</style>