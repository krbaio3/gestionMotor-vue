<template>
  <div >
    <!-- Cuando entra, pone el display a none, mas adelante, lo pone transparente, cuando termina de ejecutar la 
    query el vehicles, lanza el evento (callback) al hijo, para quitar el loading y el ponerse a display true -->
    <Loading :loading="loading"/>
    <div id="vehicles" class="col-xs-4 col-lg-6">
      <h1>Vehiculos</h1>
      <hr>
      <br>
      <form action="#">
        <InputPerformance 
          placeholder="Introduce Matricula..."
          icono="fa fa-search"
          call="matricula"
          @callback="searchLicense"
          :value="response.license"
        />

          <!-- Bloque de Marca -->
        <InputPerformance
          placeholder="Introduce Marca..."
          icono="fa fa-search"
          call="marca"
          @callback="searchBrand"
          :value="response.brand"
        />

        <!-- Bloque de Modelo --> 
        <InputPerformance onSearchClick={callToServiceModelo}
          placeholder="Introduce Modelo..."
          icono="fa fa-search"
          call="modelo"
          @callback="searchModel"
          :value="response.model"
        />

        <!-- Bloque de Version -->
        <div class="mb-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Introduce Versión..." v-model="response.version"/>
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
            <input type="text" class="form-control" placeholder="-----" :value="response.cod_motor" />
        </div>

        <!-- Bloque de Km -->
        <InputSimple
          placeholder="Introduce km..."
          icono="fa fa-road"
          :value="response.kilometros"
        />
        
        <!-- Bloque de Año -->
        <InputSimple
          text="Año Fabricacion"
          icono="fa fa-calendar"
          tipo="month"
          :value="response.anio"
        />

        <!-- Bloque de NºBastidor -->
        <InputSimple
          placeholder="Introduce Nº Bastidor..."
          icono="fa fa-car"
          :value="response.vin"
        />

        <!-- Bloque de ITV -->
        <InputSimple
          text="Fecha ITV"
          icono="fa fa-calendar"
          tipo="date"
          :value="response.itv"
        />

        <!-- Bloque de Escaneo ficha tecnica -->
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="¿Tiene ficha técnica escaneada?" disabled />
          <b-btn v-show="response.ficha_escaneada" class="btn btn-info" v-b-modal.modalAdjuntar>Ver</b-btn>
          <b-btn v-show="!response.ficha_escaneada" class="btn btn-info" v-b-modal.modalAdjuntar>Adjuntar</b-btn>
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox" aria-label="Checkbox for following text input" disabled v-model="response.ficha_escaneada"/>
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
          <textarea class="form-control" aria-label="Observaciones" v-model="response.observaciones"></textarea>
        </div>

        <div class="mt-4 mb-4">
          <b-btn type="submit" variant="success">Aceptar</b-btn>
          <b-btn type="reset" variant="danger" to="Home">Cancelar</b-btn>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { InputPerformance, InputSimple, Modal, Loading } from '../Shared/index.ts';

export default Vue.extend({
  name: 'Vehiculos',
  components: {
    InputPerformance,
    InputSimple,
    Modal,
    Loading,
  },
  data() {
    return {
      selected: null,
      power: null,
      cc: null,
      loading: true,
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
      response: {},
    };
  },
  methods: {
    searchLicense(event) {
      console.log('esto es una prueba', event);
      // Llamada a API
      axios.get('https://my.api.mockaroo.com/vehiculos.json?key=daa3d0e0')
        .then((response) => {
          console.log('entra', response);
          response.data.kilometros = response.data.kilometros.toString();
          response.data.anio = response.data.anio.substr(0, 7);
          this.response = response.data;
        });
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
  beforeCreate() {
    console.log('llamada a tabIT');
    axios.get('https://api.mockaroo.com/api/de620b70?count=1&key=daa3d0e0')
      .then((response) => {
        console.log('entra', response.data);
      });
  },
  created() {
    setTimeout(() => {
      // this.loading = false;
    }, 3000);
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