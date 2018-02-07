<template>
  <div id="vehicles" class="col-xs-4 col-lg-6">
    <h1>Vehiculos</h1>
    <hr>
    <br>
    <form action="">

      <InputPerformance 
        placeholder="Introduce Matricula..."
        icono="fa fa-search"
        call="busca"
        @callback="searchLicense"
        />

        <!-- Bloque de Marca -->
      <InputPerformance
        placeholder="Introduce Marca..."
        icono="fa fa-search"
        call="busca"
        @callback="searchLicense"
        :value="response.brand"/>

      <!-- Bloque de Modelo --> 
      <InputPerformance onSearchClick={callToServiceModelo}
        placeholder="Introduce Modelo..."
        icono="fa fa-search" 
        v-text="response.model"/>

      <!-- Bloque de Version -->
      <div class="mb-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Introduce Versión..." />
          <span class="input-group-btn" />
        </div>
      </div>

      <!-- Bloque de Año -->
      <InputSimple
        placeholder="Introduce Año..."
        icono="fa fa-calendar" tipo="month" />

      <!-- Bloque de Km -->
      <InputSimple
        placeholder="Introduce km..."
        icono="fa fa-road" />

      <!-- Bloque de NºBastidor -->
      <InputSimple
        placeholder="Introduce Nº Bastidor..."
        icono="fa fa-car" />

      <!-- Bloque de ITV -->
      <InputSimple
        placeholder="Introduce Fecha ITV..."
        icono="fa fa-calendar" tipo="date" />

      <!-- Bloque de Escaneo ficha tecnica -->
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="¿Tiene ficha técnica escaneada?" disabled />
        <b-btn class="btn btn-info" v-b-modal.modal1>Adjuntar</b-btn>
        <div class="input-group-prepend">
          <div class="input-group-text">
            <input type="checkbox" aria-label="Checkbox for following text input" disabled />
          </div>
        </div>
      </div>

      <!-- Modal Component -->
      <b-modal id="modal1" title="Bootstrap-Vue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>

      <!-- Bloque Observaciones -->
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Observaciones</span>
        </div>
        <textarea class="form-control" aria-label="Observaciones"></textarea>
      </div>

        <!-- Bloque Numero de PR -->
        <!-- <label>Label1</label>
        <input type="text" />
        <button class="btn btn-search" /> -->
        <div class="mt-4 mb-4">
          <b-btn type="submit" variant="success">Aceptar</b-btn>
          <b-btn type="reset" variant="danger">Cancelar</b-btn>
        </div>
    </form>
    <pre v-text="response"></pre>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

import { InputPerformance, InputSimple } from '@/components/Shared/';

export default Vue.extend({
  name: 'Vehiculos',
  components: {
    InputPerformance,
    InputSimple,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Combustible...' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      response: {},
    };
  },
  methods: {
    searchLicense(event) {
      console.log('esto es una prueba', event);
      axios.get('https://my.api.mockaroo.com/vehiculos.json?key=daa3d0e0')
        .then((response) => {
          console.log(response.data);
          this.response = response.data;
        });
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
