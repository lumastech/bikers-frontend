import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyResume from '../views/MyResume.vue'
import Contact from '../views/Contact.vue'
import Prices from '../views/Prices.vue'

// blogs routes
import Dashboard from '../views/blog/admin/Dashboard.vue'
import BlogList from '../views/blog/admin/Blogs.vue'
import BlogView from '../views/blog/admin/Blog.vue'
import Edit from '../views/blog/admin/Edit.vue'
import Login from '../views/blog/admin/Login.vue'
import Post from '../views/blog/admin/Post.vue'
import Register from '../views/blog/admin/Register.vue'

import Home from '../views/blog/Home.vue'
import Blogs from '../views/blog/Blogs.vue'
import Blog from '../views/blog/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/resume',
    name: 'resume',
    component: MyResume
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/prices',
    name: 'prices',
    component: Prices
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },


  // BLOG ROUTES
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogList
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/post',
    name: 'post',
    component: Post
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },


// User routes
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog-home',
    name: 'blog-home',
    component: Home
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes:routes
})

export default router;
