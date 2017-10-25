<template>
  <div class="input-group">
    <input type="text" placeholder="Escribe la nueva tarea" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="addTarea(nuevaTarea)"/>
    <span class="input-group-btn">
        <button type="button" class="btn btn-primary" v-on:click="addTarea(nuevaTarea)">Add Tarea</button>
    </span>
</div>
</template>
<script>
import { bus } from "./main.js";

export default {
  data() {
    return {
      nuevaTarea: ""
    };
  },
  props: ["tareas", "actualizarContador"],
  methods: {
    addTarea: function(input) {
      // this.nuevaTarea = input;
      // console.log(this.nuevaTarea);
      // this.tareas.push(this.nuevaTare);
      // console.log(this.tareas);
      if (this.nuevaTarea.trim()) {
        this.tareas.push({
          texto: this.nuevaTarea.trim(),
          terminada: false
        });
        // this.$emit('incrementCount', 1);
        // this.actualizarContador();
        bus.actualizarContador(this.tareas.length);
      }
      this.$http
        .post("https://gm-vue.firebaseio.com/tarea.json", {
          texto: this.nuevaTarea.trim(),
          terminada: false
        })
        .then(
          response => {
            console.log(response);
            this.nuevaTarea = "";
          },
          error => {
            console.error(error);
          }
        );
    }
  },
  created() {
    bus.actualizarContador(this.tareas.length);
  }
};
</script>
