<template>
  <div>
    <b-card :title="tarea.title" :img-src="tarea.img"
          :img-alt="tarea.imgAlt"
          img-top tag="article"
          class="mb-2 ancho-max">
    <p class="card-text">
      {{tarea.text}}
    </p>
    <b-button :to="{name:tarea.toButtom}" variant="success" :disabled="tarea.disabled">{{tarea.textButton}}</b-button>
  </b-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Card',
})
export default class Card extends Vue {
    // @Prop()
    // title: string
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
//   mounted () {
//     this.myDataProperty = 'Boop'
//   }

//   // Component method
// updateMyProperty ($event: any) {
//     this.myDataProperty = $event.target.value;
//   }
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
