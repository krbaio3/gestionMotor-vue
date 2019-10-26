<template>
  <v-footer color="blue darken-2">
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex xs12>
        <div class="white--text ml-4">
          Made with
          <v-icon class="red--text">mdi-heart</v-icon>
          by <a
            class="white--text"
            href="https://vuetifyjs.com"
            target="_blank"
          >Vuetify</a>
          and <a
            class="white--text"
            href="https://github.com/krbaio3"
          >krbaio3</a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>

</style>