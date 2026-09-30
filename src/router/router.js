import { createRouter, createWebHistory } from "vue-router";
import CategoryView from "../views/CategoryView.vue";
import ProductView from "../views/ProductView.vue";

const routes = [
  {
    path: '/',
    name: "categories",
    component: CategoryView
  },
  {
    path: '/product',
    name: "products",
    component: ProductView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
