import * as Vue from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/index'
import { useRouter } from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { VueCookies } from "vue-cookies";
import Loading from './views/Shared/loading.vue'


// Vue.use(Axios)
// const Router = useRouter()
const app = Vue.createApp(App)
app.use(router, VueAxios, axios, VueCookies, Loading);
app.provide('baseURL', app.config.globalProperties.$baseURL = "https://packages-api.all1zed.com:8002/");
app.provide("axios", app.config.globalProperties.$axios = axios);
app.provide("cookies", app.config.globalProperties.$VueCookies = VueCookies);
app.component(Loading)




app.mount("#app");
