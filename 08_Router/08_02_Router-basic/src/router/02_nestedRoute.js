import { createRouter, createWebHistory } from "vue-router";
import RootRouter from "../views/02_nestedRoute/RootRouter.vue";
import NestedHome from "../views/02_nestedRoute/NestedHome.vue";
import NestedView from "../views/02_nestedRoute/NestedView.vue";
import HiddenView from "../views/02_nestedRoute/HiddenView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: RootRouter,
      components: HomeView,
    },
    {
      path: "/nested",
      name: Nested,
      components: RootRouter,
      children: [
        {
          path: "",
          component: NestedView,
        },
        {
          path: "view",
          component: NestedView,
        },
        {
          path: "hidden",
          name: "Hidden",
          component: HiddenView,
        },
      ],
    },
  ],
});

export default router;
