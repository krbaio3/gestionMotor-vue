<template>
  <div>
    <v-card :title="tarea.title"
      :img-alt="tarea.imgAlt"
      img-top tag="article"
      class="mb-2 ancho-max">
      <v-card-media :src="tarea.img"></v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-o" v-text="tarea.text"></h3>
        </div>
      </v-card-title>
      <v-card-actions 
        flat
        color="blue" 
        v-text="tarea.textButton"
        :disabled="tarea.disabled">
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Tarea } from './tarea.model';

@Component({
  name: 'Card',
})
export default class Card extends Vue {
    @Prop() tarea: Tarea;
    // @Prop()
    // disabled: boolean
    // Data property
    // @Inject() myDataProperty: string;

  // Makes a "exampleProperty" a component prop with the default value of 'Example'
//   tarea: {
//     @Prop({ type: Boolean, default: false, required: false })
//     public disabled,
//     @Prop({ type: String, required: false })
//     public text,
//     @Prop({ type: String, required: true })
//     public textButton: { type: String, required: true },
//     @Prop({ type: String, required: true })
//     public img: { type: String, required: false },
//     @Prop({ type: String, required: true })
//     public toButtom: { type: String, required: true },
//     @Prop({ type: String, required: true })
//     public imgAlt: { type: String, required: false },
//   }

  // Lifecycle hook
   mounted () {
    console.log('montado');
   }

   // Component method
   // updateMyProperty ($event: any) {
   // this.myDataProperty = $event.target.value;
   // }
}

// const Props = ['tarea'];

// export default Vue.extend({

//   name: 'Card',
//   props: Props,
//   data() {
//     return {
//       // irA: tarea.toButtom,
//     };
//   },
// });
</script>
<style lang="scss" scoped>
.ancho-max {
  max-width: 20rem;
}
</style>
