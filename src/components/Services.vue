<template>
    <section>
        <v-layout column wrap class="my-12" align-center>
            <v-flex xs12 sm4 class="my-4">
                <div class="text-center">
                    <h2 class="headline">Motorauto, le ofrece estos servicios:</h2>
                    <span class="subheading">
                        Disponemos de vehiculo de sustitucion para nuestros clientes.
                      </span>
                </div>
            </v-flex>
            <v-flex xs12>
                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md3 v-for="(card, index) in getCards" :key="index">
                          <!-- TODO Pasar un objeto 'card' en vez de todas las variables, asi lo controla el hijo -->
                            <Card :card="card" />
                        </v-flex>
                        <!-- <v-flex xs12 md4> 
                                <v-card flat class="transparent">
                                    <v-card-text class="text-center">
                                        <v-icon x-large class="blue--text text--lighten-2">mdi-flash</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Fast development</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                                        potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card flat class="transparent">
                                    <v-card-text class="text-center">
                                        <v-icon x-large class="blue--text text--lighten-2">mdi-wrench</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-center">Completely Open Sourced</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse
                                        potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>-->
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { Cards } from '@/assets/Cards';
@Component({
    name: 'Services',
    components: {
        Card,
    },
})
export default class Services extends Vue {
    private getCards = Cards;
}
</script>

<style scoped>

</style>