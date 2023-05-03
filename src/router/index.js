import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/dashboard.vue'
import Package from '../views/package.vue'
import Packages from '../views/packages.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/package",
    name: "package",
    component: Package,
  },
  {
    path: "/packages",
    name: "packages",
    component: Packages,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes:routes
})

export default router;
