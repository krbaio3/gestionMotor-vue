import Vue from 'vue';

// interface State {
//   message: string;
// }

const App = new Vue({
  el: '#root',
  data: {
    message: 'Hello from Vue.js',
  },
  beforeCreate() {
    console.log(`llamando a beforeCreate`);
  },
  created() {
    console.log(`llamando a create`);
  },
  beforeMount() {
    console.log(`llamando a beforeMount`);
    // console.log('cambiando nombre');
    // this.message = 'Cambio de nombre';    
  },
  mounted() {
    console.log(`llamando a Mount`);
  },
  beforeUpdate() {
    console.log(`llamando a beforeUpdate`);
  },
  updated() {
    console.log(`llamando a update`);
  },
  beforeDestroy() {
    console.log(`llamando a beforeDestroy`);
  },
  destroyed() {
    console.log(`llamando a Destroy`);
  },
  methods: {
    mostrarMensaje: function () {
      // return 'Aprende vueJS';
      return this.message;
    },
    destroy: function () {
      this.$destroy();
    }
  }
});

new Vue({
  el: '#vm',
  data: {
    primero: 0,
    segundo: 0,
    tercero: 0,
    cuarto: 0,
  },
  computed: {
    total: function () {
      return this.primero + this.segundo + this.tercero + this.cuarto;
    }
  }
});

new Vue({
  el: '#input',
  data: {
    nombre: 'Jorge',
  },
  methods: {
    alert: function (event) {
      console.log(event);
    }
  }
});

new Vue({
  el: '#pruebaDirectivas',
  data: {
    nombre: 'Tomas Turbado',
  },
  methods: {
    prueba: function () {
      window.alert('wwwww');
    }
  }
});

new Vue({
  el: '.directivas',
  data: {
    imagen: 'https://lorempixel.com/300/300',
    texto: `texto de ejemplo, esto es una prueba`,
    textoHTML: `<strong>Esto es una prueba</strong>`
  },
  methods: {
  }
});

new Vue({
  el: '.ifElse',
  data: {
    mostrar: false,
  },
  methods: {
  }
});


new Vue({
  el: '.vFor',
  data: {
    dictadores: [{ nombre: 'Francisco Franco', pais: 'Espana' }, { nombre: 'Adolf Hitler', pais: 'Alemania' }, { nombre: 'Benito Mussonili', pais: 'Italia' }, { nombre: 'Hiroito', pais: 'Japon' }],

  },
  methods: {
  }
});

new Vue({
  el: '#eventos',
  data: {
    contador: 0
  },
  methods: {
    sumarUno: function () {
      this.contador += 1;
    },
    restarUno: function () {
      this.contador -= 1;
    },
    alerta: function (msg) {
      alert(msg);
    }
  }
});

new Vue({
  el: '#eventos2',
  data: {
    x: 0,
    y: 0,
    contador: 0,
  },
  methods: {
    mostrarUbicacion: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
      //console.log(event);
    },
    sumar: function (cantidad) {
      this.contador += cantidad;
      console.log('contador: ', this.contador, 'cantidad: ', cantidad);
    },
    dejarPulsarTecla: function (cantidad){
      this.contador += cantidad;
      console.log('contador: ', this.contador, 'cantidad: ', cantidad);
    },
    pulsarTecla: function (){
      this.contador -= 1;
      console.log('contador: ', this.contador);
    }
  }
});