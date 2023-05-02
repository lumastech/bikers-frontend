import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/dashboard.vue'
import Package from '../views/package.vue'

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
];

const router = createRouter({
  history: createWebHistory(),
  routes:routes
})

export default router;
