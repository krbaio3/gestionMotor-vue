import Vue from 'vue';

export const component = Vue.component('titulo', {
    template: `<h2>{{titulo}}</h2>`,
    data: function(){
        return {titulo: 'Lista de Tareas'};
    },
});