import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import LRU from 'lru-cache';

Vue.use(Vuetify);

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60, // 1 hour
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    // dark: true,
  },
  options: {
    minifyTheme(css: string) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\r\n|\r|\n]/g, '')
        : css;
    },
    themeCache,
  },
});
