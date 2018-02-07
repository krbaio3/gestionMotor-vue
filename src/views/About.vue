<template>
  <div class="about">
    <h1>This is an about page</h1>
        <div v-for="tarea of tareas" :key="tarea.title">
          <Card :tarea="tarea" class="fila"></Card>
        </div>

        {{tareas}}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import { Tareas } from './tareas';
import Card from '@/components/Card.vue';

@Component({
  name: 'About',
  components: {
    Card,
  },
})
export default class About extends Vue {
  @Prop() private msg!: string;
  @Provide() private tareas = Tareas;
}
</script>
<style lang="scss">
</style>