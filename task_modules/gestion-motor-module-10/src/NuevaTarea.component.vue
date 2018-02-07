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
      if (this.nuevaTarea.trim()) {
        let tarea = {
          texto: this.nuevaTarea.trim(),
          terminada: false
        };
        this.$http.post("tarea.json", tarea).then(
          response => {
            console.log(response);
            tarea.id = response.body.name;
            this.tareas.push(tarea);
            bus.actualizarContador(this.tareas.length);
            this.nuevaTarea = "";
          },
          error => {
            console.error(error);
          }
        );
      }
    }
  },
  created() {
    bus.actualizarContador(this.tareas.length);
  }
};
</script>
