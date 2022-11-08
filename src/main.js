import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/index'

// import {createRouter, createWebHistory} from 'vue-router'

// const router = createRouter( {
//     history: createWebHistory(),
//     routes: []
// })

createApp(App).use(router).mount('#app')
