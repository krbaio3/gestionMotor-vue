<template>
  <div class="car">
    <b-card title="Card Title"
          img-src="https://lorempixel.com/200/200/technics/5/"
          img-alt="Image"
          img-top
          tag="article"
          class="mb-2 ancho-max">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </div>
</template>
<script>
export default {
  name: 'Card',
};
</script>
<style lang="scss" scoped>
.ancho-max {
  max-width: 20rem;
}
</style>
