<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span
            v-if="modalType === 'appointment'"
            class="headline"
            v-html="$t('modal.appointment')"
          />
          <span
            v-if="modalType === 'quote'"
            class="headline"
            v-html="$t('modal.quote')"
          />
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  :label="$t('modal.name')"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  :label="$t('modal.last-name')"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  :label="$t('modal.phone')"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  :label="$t('modal.brand')"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  :label="$t('modal.model')"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  :label="$t('modal.licence')"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Chapa y Pintura', 'Mecanica', 'Electricidad', 'Vehiculo Ocasion']"
                  :label="$t('modal.service')"
                  multiple
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-textarea
                  name="description"
                  auto-grow
                  :label="$t('modal.description')"
                  :hint="$t('modal.hintArea')"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal"
          >Close</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import navBarTypes from '@/types/nav-bar';
import { Getter } from 'vuex-class';
@Component({
    name: 'ModalForm',
    props: {
        dialog: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
})
export default class ModalForm extends Vue {
    @Getter(navBarTypes.getters.modalType) private modalType!: any;
    private mtype!: string;
    private closeModal() {
        this.$store.dispatch(navBarTypes.actions.changeModalState);
    }
}
</script>