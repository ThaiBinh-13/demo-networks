const path = require('path');

module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
    },
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerMode: 'disabled',
    },
    components: {},
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
  },
  chainWebpack: config => {
    [
      //
      'normal',
      'normal-modules',
      'vue',
      'vue-modules',
    ].forEach(
      type =>
        config.module
          .rule('scss')
          .oneOf(type)
          .use('style-resources-loader')
          .loader('style-resources-loader')
          .options({
            patterns: [
              path.resolve(__dirname, './src/assets/scss/variables.scss'),
            ],
          }),
      config.plugin('html').tap(args => {
        args[0].title = 'Demo'; // eslint-disable-line
        return args;
      }),
    );
  },
};
