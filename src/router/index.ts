import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [

  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/f2eHome/F2eHome.vue')
  },
  // {
  //   path: '/event/:id',
  //   name: 'EventDetail',
  //   component: () => import('@/views/AppEventDetail.vue')
  // },
  // {
  //   path: '/spot/:id',
  //   name: 'SpotDetail',
  //   component: () => import('@/views/AppSpotDetail.vue')
  // },
  // {
  //   path: '/food/:id',
  //   name: 'FoodDetail',
  //   component: () => import('@/views/AppFoodDetail.vue')
  // },
  {
    path: '/:pathMatch(.*)*', // router4，萬用字元寫法
    redirect: '/home'
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
