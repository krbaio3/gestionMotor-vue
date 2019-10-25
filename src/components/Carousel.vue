<template>
  <v-carousel
    hide-delimiters
    cycle
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
    name: 'Carousel',
})
export default class Carousel extends Vue {
    private items: object[] = [{
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
    ];
}
</script>