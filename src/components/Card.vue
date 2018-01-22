<template>
  <div>
    <b-card title={tarea.title} img-src="https://lorempixel.com/200/200/technics/5/"
          img-alt="Image"
          img-top tag="article"
          class="mb-2 ancho-max">
    <p class="card-text">
      {tarea.text}
    </p>
    <b-button href="#" variant="primary" disabled={tarea.disabled}>{tarea.textButton}</b-button>
  </b-card>

  <!-- <b-card-group deck>
        <b-card title="Title"
                img-src="https://lorempixel.com/300/300/"
                img-alt="Img"
                img-top>
            <p class="card-text">
                This is a wider card with supporting text below as a
                natural lead-in to additional content. This content
                is a little bit longer.
            </p>
            <div slot="footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </b-card>
        <b-card title="Title"
                img-src="https://lorempixel.com/300/300/"
                img-alt="Img"
                img-top>
            <p class="card-text">
                This card has supporting text below as a natural lead-in
                to additional content.
            </p>
            <div slot="footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </b-card>
        <b-card title="Title"
                img-src="https://lorempixel.com/300/300/"
                img-alt="Img"
                img-top>
            <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
            </p>
            <div slot="footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </b-card>
    </b-card-group> -->
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    tarea: {
      title: { type: String, required: true },
      disabled: { type: String, default: false, required: false },
      text: { type: String, required: false },
      textButton: { type: String, required: true },
      img: { type: String, required: false },
      toButtom: { type: String, required: true },
    },
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
.ancho-max {
  max-width: 20rem;
} 
</style>
