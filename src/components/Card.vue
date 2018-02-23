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
<script>
const Props = {
  tarea: {
    title: { type: String, required: true },
    disabled: { type: Boolean, default: false, required: false },
    text: { type: String, required: false },
    textButton: { type: String, required: true },
    img: { type: String, required: false },
    toButtom: { type: String, required: true },
    imgAlt: { type: String, required: false },
  },
};
// const Props = ['tarea'];

export default {
  name: 'Card',
  props: Props,
  data() {
    return {
      // irA: tarea.toButtom,
    };
  },
};
</script>
<style lang="scss" scoped>
.ancho-max {
  max-width: 20rem;
} 
</style>
