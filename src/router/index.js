import { createWebHistory, createRouter } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import NoFound from '../views/404.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    meta: {
      title: 'JSDC 2022 - 歡迎參加主年會',
    },
    component: LandingPage,
  },
  {
    path: '/jsdc',
    name: 'official',
    beforeEnter() {
      window.open('https://jsdc.tw/', '_blank');
    },
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    meta: {
      title: 'JSDC 2022 - 關於我們',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutUs.vue'),
  },
  {
    path: '/speakers',
    name: 'speaker',
    meta: {
      title: 'JSDC 2022 - 講者介紹',
    },
    component: () => import('../views/ConfSpeaker.vue'),
  },
  {
    path: '/timesheets',
    name: 'timesheets',
    meta: {
      title: 'JSDC 2022 - 大會議程',
    },
    component: () => import('../views/ConfTimesheets.vue'),
  },
  {
    path: '/teammember',
    name: 'teammember',
    meta: {
      title: 'JSDC 2022 - 工作團隊',
    },
    component: () => import('../views/TeamMember.vue'),
  },
  {
    path: '/conduct',
    name: 'conduct',
    meta: {
      title: 'JSDC 2022 - 行為準則',
    },
    component: () => import('../views/ConfConduct.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'nofound',
    meta: {
      title: 'JSDC 2022 - 你迷路了嗎？！',
    },
    component: NoFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title || 'JSDC 2022 - JSDC主年會';
  next();
});

export default router;
