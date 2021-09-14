/* eslint import/order: "off" */
import { createRouter, createWebHistory } from 'vue-router';
import autoRoutes from 'vue-auto-routing';
import { createRouterLayout } from 'vue-router-layout';

const RouterLayout = createRouterLayout(layout => {
  return import(`@/layouts/${layout}.vue`);
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: [...autoRoutes],
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
