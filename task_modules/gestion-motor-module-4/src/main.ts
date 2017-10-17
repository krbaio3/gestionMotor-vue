import Vue from 'vue';

// interface State {
//   message: string;
// }

export const App = new Vue({
  el: '#root',
  data: {
    // title: 'Lista de Tareas',
    tareas: [
      {
        texto: 'Aprender Vue.js',
        terminada: false,
      },
      {
        texto: 'Aprender React',
        terminada: false,
      },
      {
        texto: 'Aprender NodeJS',
        terminada: false,
      }
    ],
    nuevaTarea: '',
  },
  methods: {
    addTarea: function (input) {
      // this.nuevaTarea = input;
      // console.log(this.nuevaTarea);
      // this.tareas.push(this.nuevaTare);
      // console.log(this.tareas);
      if (this.nuevaTarea.trim()) {
        this.tareas.push({ texto: this.nuevaTarea.trim(), 
          terminada: false });
      }
      this.nuevaTarea = '';
    }
  }
});
