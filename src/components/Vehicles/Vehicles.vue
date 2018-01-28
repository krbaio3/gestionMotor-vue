<template>
  <div id="vehicles" class="col-xs-4 col-lg-6">
    <h1>Vehiculos</h1>
    <hr>
    <br>
    <!-- <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
    <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
    </div>
    </div>

    <label for="basic-url">Your vanity URL</label>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    </div>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>

    <div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text">$</span>
    </div>
    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    <div class="input-group-append">
        <span class="input-group-text">.00</span>
    </div>
    </div>

    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">With textarea</span>
        </div>
    <textarea class="form-control" aria-label="With textarea"></textarea>
    </div> -->
    <form action="">

      <InputPerformance 
        placeholder="Introduce Matricula..."
        icono="fa fa-search" />

        <!-- Bloque de Marca -->
      <InputPerformance onSearchClick={callToServiceMarca}
        placeholder="Introduce Marca..."
        icono="fa fa-search" />

      <!-- Bloque de Modelo -->
      <InputPerformance onSearchClick={callToServiceModelo}
        placeholder="Introduce Modelo..."
        icono="fa fa-search" />

      <!-- Bloque de Version -->
      <div class="mb-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Introduce Versión..." />
          <span class="input-group-btn" />
        </div>
      </div>

      <!-- Bloque de Combustible -->
      <InputDropDown title="combustible"/>

      <!--  Bloque CodMotor y Potencia  -->
      <InputDropDown title="codMotor"/>
      <InputDropDown title="CV"/>

      <InputDropDown/>

      <!-- Bloque de Año -->
      <InputSimple
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
  </div>
</template>
<script>
import { InputPerformance, InputSimple } from '@/components/Shared/';

export default {
  name: 'Vehiculos',
  components: {
    InputPerformance,
    InputSimple,
  },
};
</script>
