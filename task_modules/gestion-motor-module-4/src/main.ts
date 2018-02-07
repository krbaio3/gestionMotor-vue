import Vue from 'vue';


require('./styles/main.css');

const data = {
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
};

export const component = Vue.component('titulo', {
  template: `<h2>{{titulo}}</h2>`,
  data: function () {
    return { titulo: 'Lista de Tareas' };
  },
});

export const nuevaTarea = Vue.component('nueva-tarea', {
  template: `<div class="input-group">
                <input type="text" placeholder="Escribe la nueva tarea" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="addTarea(nuevaTarea)"/>
                <span class="input-group-btn">
                  <button type="button" class="btn btn-primary" v-on:click="addTarea(nuevaTarea)">Add Tarea</button>
                </span>
              </div>
            `,
  data: function(){
    return data;
  },
  methods: {
    addTarea: function (input) {
      // this.nuevaTarea = input;
      // console.log(this.nuevaTarea);
      // this.tareas.push(this.nuevaTare);
      // console.log(this.tareas);
      if (this.nuevaTarea.trim()) {
        this.tareas.push({
          texto: this.nuevaTarea.trim(),
          terminada: false
        });
      }
      this.nuevaTarea = '';
    },
  }
});

export const listaTareas = Vue.component('listaDeTareas', {
  template: `<ul class="list-group">
              <li v-for="(tarea, index) in tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
                  <span>{{tarea.texto}}</span>
                  <span class="pull-right">
                      <button type="button" 
                      class="btn btn-xs glyphicon glyphicon-ok ml-1"
                      v-bind:class="{'btn-success': tarea.terminada==false, 'btn-secondary': tarea.terminada==true}"
                      @click="tarea.terminada = !tarea.terminada"/>    
                  </span>
                  <span class="pull-right">
                      <button type="button" 
                      class="btn btn-danger btn-xs glyphicon glyphicon-remove"
                      @click="eliminarTarea(index)"/>
              </span>
              </li>
            </ul>
            `,
  data: function (){
    return data;
  },
  methods: {
    eliminarTarea: function (index) {
      this.tareas.splice(index, 1);
    }
  }
});

export const App = new Vue({
  el: '#root',
  data: data,
  methods: {
    // addTarea: function (input) {
    //   // this.nuevaTarea = input;
    //   // console.log(this.nuevaTarea);
    //   // this.tareas.push(this.nuevaTare);
    //   // console.log(this.tareas);
    //   if (this.nuevaTarea.trim()) {
    //     this.tareas.push({
    //       texto: this.nuevaTarea.trim(),
    //       terminada: false
    //     });
    //   }
    //   this.nuevaTarea = '';
    // },
    // eliminarTarea: function (index) {
    //   console.log(index);
    //   this.tareas.splice(index, 1);
    //   console.log(this.tareas);

    // }
  }
});
