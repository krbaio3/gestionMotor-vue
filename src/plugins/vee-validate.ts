import Vue from 'vue';
import es from 'vee-validate/dist/locale/es.json';
import en from 'vee-validate/dist/locale/en.json';
import { validationEn, validationEs } from '@/validator';

// FIXME with vuex, select dynamic language
import { ValidationProvider, localize } from 'vee-validate';
// Install English and Spanish locales.
localize({
    en,
    es,
});
localize('es');
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
