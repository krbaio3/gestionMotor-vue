import Vue from 'vue';
import { data } from './data.vue';

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
    data: function () {
        return data;
    },
    methods: {
        eliminarTarea: function (index) {
            console.log(index);
            this.tareas.splice(index, 1);
            console.log(this.tareas);

        }
    }
});