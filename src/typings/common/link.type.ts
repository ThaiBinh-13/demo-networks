import { RouteLocationRaw } from 'vue-router';

export interface Link {
  to: RouteLocationRaw;
  text: string;
  icon?: string | string[];
  class?: any;
}
