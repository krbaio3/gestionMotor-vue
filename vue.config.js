module.exports = {
  "devServer": {
    "port": 4300
  },
  "configureWebpack": {
    "devtool": "source-map"
  },
  "pluginOptions": {
    "i18n": {
      "locale": "es",
      "fallbackLocale": "en",
      "localeDir": "locales",
      "enableInSFC": false
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}