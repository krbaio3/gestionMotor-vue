<template>
  <div>
    <v-toolbar>
      <img src="../assets/logo_taller.png" alt="Motorauto">
      <v-toolbar-title v-html="$t('navigation.brand')"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          text
          v-html="$t('navigation.gallery')"
        ></v-btn>
        <v-btn
          text
          v-html="$t('navigation.offers')"
        ></v-btn>
        <v-btn
          text
          @click.stop="openModal('appointment')"
          v-html="$t('navigation.request.appointment')"
        ></v-btn>
        <v-btn
          text
          @click.stop="openModal('quote')"
          v-html="$t('navigation.request.quote')"
        ></v-btn>
      </v-toolbar-items>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn
          icon
          dark
        >
          <v-icon>fas fa-lock</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
    <modal-form :dialog="showDialog"></modal-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import ModalForm from './Modal-Form.vue';
import navBarTypes from '@/types/nav-bar';


@Component({
    name: 'NavBar',
    components: {
        ModalForm,
    },
    computed: {
        ...mapGetters({
            showDialog: navBarTypes.getters.modalState,
        }),
    },
})
export default class NavBar extends Vue {

    private openModal(type: string) {
      this.$store.dispatch(navBarTypes.actions.modalType, type);
      this.$store.dispatch(navBarTypes.actions.changeModalState);
    }

}
</script>

<style scoped>

</style>