import { createApp } from 'vue';
import app from './app.vue';
import router from './router';

import '@/assets/scss/index.scss';
import '@/assets/scss/themes.scss';

createApp(app) //
  .use(router)
  .use({
    install(app_) {
      const plugins = require.context('./plugins', true, /.*\.(ts)$/i);
      const pluginPaths = plugins.keys();

      pluginPaths.forEach(path => {
        plugins(path).install(app_);
      });
    },
  })
  .mount('#app');
