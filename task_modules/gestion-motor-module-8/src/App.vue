<template>
  <div id="app" class="container">
    <div class="col-md-6">
      <h1>Formulario</h1>
      <form>
    <div class="form-group">
      <label for="correo">Nombre</label>
      <input type="text" class="form-control" placeholder="Nombre"
              v-model.trim="usuario.nombre">
    </div> 
    <div class="form-group">
      <label for="correo">Correo Electrónico</label>
      <input type="email" class="form-control" placeholder="Correo Electrónico"
              v-model.lazy="usuario.correo">
    </div>
    <div class="form-group">
      <label for="clave">Contraseña</label>
      <input type="password" class="form-control" placeholder="Contraseña"
              v-model="usuario.clave">
    </div>
    <div class="form-group">
      <label for="clave">Edad</label>
      <input type="text" class="form-control" placeholder="Edad"
              v-model.number="usuario.edad">
    </div>
    <div class="form-group">
      <label for="pais">País</label>
      <select class="form-control" v-model="usuario.pais">
        <option v-for=  "pais in paises">{{pais}}</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="mensaje">Mensaje</label>
      <textarea class="form-control" rows="3"
                v-model="usuario.mensaje"></textarea>
    </div>

    <fieldset class="form-group">
      <legend>Genero</legend>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios"  
                value="hombre" checked v-model="usuario.genero">
          Hombre
        </label>
      </div>
      <div class="form-check">
      <label class="form-check-label">
          <input type="radio" class="form-check-input" name="optionsRadios"  
                value="mujer" v-model="usuario.genero">
          Mujer
        </label>
      </div>
      
      </fieldset>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" value="acepto"
          v-model="usuario.condiciones">
          Acepto las condiciones
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" value="newsletter"
          v-model="usuario.condiciones">
          Recibir la newsletter
        </label>
      </div>
      <button type="submit" class="btn btn-primary"
              @click.prevent="enviarFormulario">Enviar</button>
    </form>
    </div>
    <div class="resultados col-md-6" v-if="mostrar">
      <h1>Resultados</h1>
      <p><strong>Nombre: </strong> {{usuario.nombre}} - {{usuario.nombre.length}}</p>
      <p><strong>Correo Electrónico: </strong>{{usuario.correo}}</p>
      <p><strong>Contraseña: </strong>{{usuario.clave}}</p>
      <p><strong>Edad: </strong>{{usuario.edad}} - {{ typeof usuario.edad }}</p>
      <p><strong>País: </strong>{{usuario.pais}}</p>
      <p class="mensaje"><strong>Mensaje: </strong>{{usuario.mensaje}}</p>
      <p><strong>Genero: </strong>{{usuario.genero}}</p>
      <p><strong>Condiciones: </strong>{{usuario.condiciones}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      usuario: {
        nombre : '',
        correo : '',
        clave : '',
        edad : '',
        pais : 'España',
        mensaje: '',
        genero: 'hombre',
        condiciones: []
      },
      mostrar : false,
      paises : ['Argentina','Bolivia','Brasil','Chile','Colombia','Ecuador','España','Mexico','Paraguay','Uruguay','Venezuela'],
    }
  },
  methods:{
    enviarFormulario(){
      this.mostrar = true
    }
  }
}
</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
.mensaje{
  white-space: pre;
}
</style>
