<template>
  <div id="vehicles" class="col-xs-4 col-lg-6">
    <h1>Vehiculos</h1>
    <hr>
    <br>
    <form action="#">
      <!-- Bloque de Matricula -->
      <InputPerformance 
        placeholder="Introduce Matricula..."
        icono="fa fa-search"
        call="matricula"
        @callback="searchLicense"/>

        <!-- Bloque de Marca -->
      <InputPerformance
        placeholder="Introduce Marca..."
        icono="fa fa-search"
        call="marca"
        @callback="searchBrand"/>

      <!-- Bloque de Modelo --> 
      <InputPerformance 
        placeholder="Introduce Modelo..."
        icono="fa fa-search"
        call="modelo"
        @callback="searchModel" />

      <!-- Bloque de Version -->
      <div class="mb-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Introduce Versión..." />
        </div>
      </div>

      <!-- Bloque de Combustible, CodMotor y Potencia -->
      <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" aria-hidden="true" id="basic-addon1">Combustible</span>
        </div>
        <b-form-select v-model="selected" :options="options" />

        <div class="input-group-prepend">
            <span class="input-group-text" aria-hidden="true" id="basic-addon1">Cilindrada</span>
        </div>
        <b-form-select v-model="cc" :options="optionsCC" class="form-control" />
        
        <div class="input-group-prepend">
            <span class="input-group-text" aria-hidden="true" id="basic-addon1">Potencia</span>
        </div>
        <b-form-select v-model="power" :options="optionsPower" class="form-control" />

        <div class="input-group-prepend">
            <span class="input-group-text" aria-hidden="true" id="basic-addon1">Cod Motor</span>
        </div>
          <input type="text" class="form-control" placeholder="-----" :value="power" />
      </div>

      <!-- Bloque de Km -->
      <InputSimple
        placeholder="Introduce km..."
        icono="fa fa-road" />
       
      <!-- Bloque de Año -->
      <InputSimple
        text="Año Fabricacion"
        icono="fa fa-calendar" tipo="month" />

      <!-- Bloque de NºBastidor -->
      <InputSimple
        placeholder="Introduce Nº Bastidor..."
        icono="fa fa-car" />

      <!-- Bloque de ITV -->
      <InputSimple
        text="Fecha ITV"
        icono="fa fa-calendar" tipo="date" />

      <!-- Bloque de Escaneo ficha tecnica -->
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="¿Tiene ficha técnica escaneada?" disabled />
        <b-btn class="btn btn-info" v-b-modal.modalAdjuntar>Adjuntar</b-btn>
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input" disabled />
          </div>
        </div>
      </div>

      <!-- Modal Component -->
      <Modal 
        id="modalAdjuntar" 
        :title="titleModal"
        :text="textModal">
      </Modal>

      <!-- Bloque Observaciones -->
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Observaciones</span>
        </div>
        <textarea class="form-control" aria-label="Observaciones"></textarea>
      </div>

      <div class="mt-4 mb-4">
        <b-btn type="submit" variant="success">Aceptar</b-btn>
        <b-btn type="reset" variant="danger" to="Home">Cancelar</b-btn>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { InputPerformance, InputSimple, Modal } from '@/components/Shared/index.ts';

export default Vue.extend({
  name: 'Vehiculos',
  components: {
    InputPerformance,
    InputSimple,
    Modal,
  },
  data() {
    return {
      selected: null,
      power: null,
      cc: null,
      titleModal: 'Esto es un titulo de pruebas',
      textModal: 'Esto es un texto de pruebas',
      options: [
        { value: null, text: '-----' },
        { value: 'g', text: 'Gasolina' },
        { value: 'd', text: 'Diesel' },
        { value: 'o', text: 'Otros', disabled: true },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
      ],
      optionsPower: [
        { value: null, text: '-----' },
        { text: '150', value: 'B205E' },
        { text: '154', value: 'B204E' },
        { text: '185', value: 'B204L' },
        { text: '200', value: 'B205/4R' },
        { text: '215', value: 'Maptum St1' },
        { text: '235', value: 'Maptum St2' },
      ],
      optionsCC: [
        { value: null, text: '-----' },
        { value: '1000', text: '1.0' },
        { value: '1200', text: '1.2' },
        { value: '1400', text: '1.4' },
        { value: '1500', text: '1.5' },
        { value: '1600', text: '1.6' },
        { value: '2000', text: '2.0' },
      ],
    };
  },
  methods: {
    searchLicense(event) {
      console.log('esto es una prueba', event);
      // Llamada a API
    },
    searchBrand(event) {
      console.log('esto es una prueba', event);
      // Llamada a API
    },
    searchModel(event) {
      console.log('esto es una prueba', event);
      // Llamada a API
    },
  },
});
</script>
<style lang="postcss" scoped>
  .info{
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
    &:hover {
      color: black;
      background-color: #fff;
      border-color: #17a2b8;
    }
}
</style>