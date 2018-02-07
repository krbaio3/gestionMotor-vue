<template>
  <div class="about">
    <h1>This is an about page</h1>
      <b-jumbotron class="jumbotron">
        <b-card-group deck>
          <div v-for="tarea of tareas" :key="tarea.title">
            <card :tarea="tarea" class="fila"></card>
          </div>
        </b-card-group>          
      </b-jumbotron>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import Card from '../components/Card.vue';
import Tareas from './tareas';

@Component({
  name: 'About',
})
export default class About extends Vue {
  @Prop() private msg!: string;
  @Provide() private tareas = Tareas;
}
</script>
<style lang="scss">
  
// Variables para fuentes e inconos de font-awesome
$fa-font-path: '../../node_modules/font-awesome/fonts';
// Import para fuentes e iconos de font-awesome
@import '../../node_modules/font-awesome/scss/font-awesome.scss';
@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue';
@import '../../node_modules/bootstrap/scss/bootstrap';
</style>