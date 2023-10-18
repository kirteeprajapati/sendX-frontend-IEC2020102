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

import '@/assets/style.css'
const routes = [
  { path: "/design", component: Design },
  { path: "/content", component: Content },
  { path: "/targeting", component: Targeting },
  { path: "/success", component: Success },
  { path: "/type", component: Type },
  { path: "/behavior", component: Behavior },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount("#app");
