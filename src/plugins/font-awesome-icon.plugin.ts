// eslint-disable-next-line
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Plugin } from 'vue';

library.add(fas);

export const install: Plugin = app => {
  app.component('icon', FontAwesomeIcon);
};
