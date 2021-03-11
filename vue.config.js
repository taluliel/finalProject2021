
module.exports = {
  chainWebpack: (config) => {
    config.module.rule("svg")
  .oneOf("inline")
    .resourceQuery(/inline/)
    .use("svg-url-loader")
      .loader("svg-url-loader")
      .end()
    .end()
  .oneOf("external")
    .use("vue-svg-loader")
      .loader("vue-svg-loader")
  },
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'he',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
