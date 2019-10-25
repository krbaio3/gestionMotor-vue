<template>
  <section>
    <v-parallax
      src="../assets/taller.png"

    >
      <!-- <v-layout
        column
        align-center
        justify-center
        class="white--text"
      >
        <img
          src="../assets/vuetify.png"
          alt="Vuetify.js"
          height="200"
        >
        <h1 class="white--text mb-2 display-1 text-center">Parallax Template</h1>
        <div class="subheading mb-4 text-center">Powered by Vuetify</div>
        <v-btn
          class="mt-12"
          color="blue lighten-2"
          dark
          large
          href="/pre-made-themes"
        >
          Get Started
        </v-btn>
      </v-layout> -->
    </v-parallax>
  </section>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Parallax',
})
export default class Parallax extends Vue { }
</script>

<style lang="scss" scoped>

</style>