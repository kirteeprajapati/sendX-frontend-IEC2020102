// main.js or router.js
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Design from "@/components/Design.vue";
import Content from "@/components/Content.vue";
import Targeting from "@/components/Targeting.vue";
import Success from "@/components/Success.vue";
import Type from "@/components/Type.vue";
import Behavior from "@/components/Behavior.vue";
import Modal from "@/components/Modal.vue";
import store from './store/store';
import '@/assets/style.css'

const routes = [
  { path: "/", component: Type },
  { path: "/type", component: Type },
  { path: "/design", component: Design },
  { path: "/modal", component: Modal},
  { path: "/content", component: Content },
  { path: "/targeting", component: Targeting },
  { path: "/behavior", component: Behavior },
  { path: "/success", component: Success },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
