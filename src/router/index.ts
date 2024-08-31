import { createRouter, createWebHistory } from 'vue-router';
import { RouteNamesEnum } from 'router/index.types';
import { AppLayoutsEnum } from 'layouts/layouts.types';
import { loadLayoutMiddleware } from 'router/middleware/load-layout.middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNamesEnum.home,
      component: () => import('pages/HomePage.vue'),
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
    {
      path: '/convert',
      name: RouteNamesEnum.convert,
      component: () => import('pages/ConvertPage.vue'),
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
