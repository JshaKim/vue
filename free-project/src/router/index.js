import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Top_Menu_Bar from "../components/Top_Menu_Bar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/Top_Menu_Bar",
      name: "Top_Menu_Bar",
      component : Top_Menu_Bar,

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
