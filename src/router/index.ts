/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-21 11:06:25
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-21 11:19:25
 * @FilePath: \src\router\index.ts
 * @Description:
 */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/vueuse',
    name: 'VueUse',
    meta: {
      title: 'VueUse',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/vueUse.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
