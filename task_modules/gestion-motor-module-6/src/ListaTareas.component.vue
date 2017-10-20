<template>
    <ul class="list-group">
        <li v-for="(tarea, index) in tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
            <span>{{tarea.texto}}</span>
            <span class="pull-right">
                <button type="button" 
                class="btn btn-sm fa fa-check  ml-1"
                v-bind:class="{'btn-success': tarea.terminada==false, 'btn-secondary': tarea.terminada==true}"
                v-on:click="tarea.terminada = !tarea.terminada"/>    
            </span>
            <span class="pull-right">
                <button type="button" 
                class="btn btn-danger btn-sm fa fa-times"
                @click="eliminarTarea(index)"/>
        </span>
        </li>
    </ul>
</template>
<script>
export default {
  props: ['tareas'],
  methods: {
    eliminarTarea: function (index) {
        console.log(index);
        this.tareas.splice(index, 1);
        console.log(this.tareas);
    }
  }
};
</script>

<style lang="scss" scoped>
//1 Variables para fuentes e inconos de font-awesome
$fa-font-path: '../node_modules/font-awesome/fonts';
//2 Import para fuentes e iconos de font-awesome
@import '../node_modules/font-awesome/scss/font-awesome.scss';
.terminada {
    color: gray;
    // text-decoration: line-through !important;
    text-decoration: line-through;
}

.ml-1 {
    margin-left: 1rem;
}
</style>
