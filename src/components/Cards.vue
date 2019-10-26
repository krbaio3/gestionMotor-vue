<template>
    <div>
        <section>
            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="my-12">
                    <v-flex xs12 sm5 v-for="(contact, index) in getContacts" :key="index">
                        <Card :card="contact"/>
                        <!-- <v-card flat class="transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Company info</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                                potenti.
                            </v-card-text>
                        </v-card> -->
                    </v-flex>
                    <!-- <v-flex xs12 sm4 >
                        <v-card flat class="transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Contact us</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            </v-card-text>
                            <v-list class="transparent">
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>777-867-5309</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon class="blue--text text--lighten-2">mdi-map-marker</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>Chicago, US</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>john@vuetifyjs.com</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-flex> -->
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Contact } from '../assets/ContactUs';
import Card from '@/components/Card.vue';

@Component({
    name: 'Cards',
    components: {
      Card,
    },
})
export default class Cards extends Vue {
  private getContacts: object = Contact;
}
</script>

<style scoped>

</style>