import VuexPersistence from 'vuex-persist';

export const vuexPersistence =  new VuexPersistence({
    storage: window.localStorage,
    // Definimos los modulos que queremos, si borramos la propiedad modules, incorpora TODOS los modulos
    modules: [],
});
