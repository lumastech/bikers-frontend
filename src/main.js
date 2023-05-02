import * as Vue from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import VueAxios  from 'vue-axios'

// Vue.use(Axios)
const app = Vue.createApp(App)
app.use(router, VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);




app.mount("#app");
