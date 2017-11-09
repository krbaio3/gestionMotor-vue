import Vue from 'vue';
import { data } from './data.vue';

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