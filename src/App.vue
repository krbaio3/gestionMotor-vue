<template>
  <v-app>
    <NavBar />
    <section>
      <Carousel />
    </section>
    <section>
      <Services />
    </section>
    <Parallax />
    <section>
      <Cards />
    </section>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import Parallax from '@/components/Parallax.vue';
import Cards from '@/components/Cards.vue';
import Carousel from '@/components/Carousel.vue';
import Services from '@/components/Services.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
    Footer,
    Parallax,
    Cards,
    Carousel,
    Services,
  },
  data: () => ({
    //
  }),
});
</script>
