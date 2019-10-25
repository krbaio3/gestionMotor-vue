<template>
    <v-card flat class="transparent">
        <v-card-text class="text-center" v-if="card.icon || card.opIcon">
            <v-icon x-large class="blue--text text--lighten-2">{{card.icon}}</v-icon>
            <v-icon x-large class="blue--text text--lighten-2">{{card.opIcon}}</v-icon>
        </v-card-text>
        <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">{{card.title}}</div>
        </v-card-title>
        <v-card-text>
            {{card.cardText}}
        </v-card-text>
        <v-list class="transparent" v-if="card.contact">
            <v-list-item>
                <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">{{card.contact.iconPhone}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{card.contact.phone}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">{{card.contact.iconMarker}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{card.contact.marker}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-action>
                    <v-icon class="blue--text text--lighten-2">{{card.contact.iconEmail}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{card.contact.email}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ICard } from '../interfaces/ICard';
@Component({
    name: 'Card',
})
export default class Card extends Vue {
    // @Prop({ required: true, type: String }) public readonly title!: string;
    // @Prop({ required: false, type: String }) public readonly icon!: string;
    // @Prop({ required: false, type: String }) public readonly opIcon!: string;
    // @Prop({ required: true, type: String }) public readonly cardText!: string;
    // @Prop({required: false, type: String}) public readonly contact!: ICard;
    @Prop({required: true, type: Object}) public readonly card!: ICard;
}
</script>

<style scoped>

</style>