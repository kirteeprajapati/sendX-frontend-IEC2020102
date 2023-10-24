import Vue from 'vue';
import VueRouter, {createWebHistory, createRouter} from 'vue-router';
export const eventBus = new Vue();

import FlowNavigation from '@/components/FlowNavigation.vue';
import Type from '@/components/Type.vue';
import Design from '@/components/Design.vue';
import Content from '@/components/Content.vue';
import Targeting from '@/components/Targeting.vue';
import Behavior from '@/components/Behavior.vue';
import Success from '@/components/Success.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: FlowNavigation,
  },
  {
    path: '/src/components/Type.vue',
    name: 'Type',
    component: Type,
  },
  {
    path: '/src/components/Design.vue',
    name: 'Design',
    component: Design,
  },
  {
    path: '/src/components/Modal.vue',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/src/components/Content.vue',
    name: 'Content',
    component: Content,
  },
  {
    path: '/src/components/Targeting.vue',
    name: 'Targeting',
    component: Targeting,
  },
  {
    path: '/src/components/Behavior.vue',
    name: 'Behavior',
    component: Behavior,
  },
  {
    path: '/src/components/Success.vue',
    name: 'Success',
    component: Success,
  },
];

const router = new VueRouter({
  mode: "history", // Use "history" mode for cleaner URLs
  base: process.env.BASE_URL,
  routes,
});

export default router;
