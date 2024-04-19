// import './assets/main.css'

import { createApp } from 'vue'
// import Vue from "vue";
import App from './App.vue'
import router from './router'
import HomeViewVue from './views/HomeView.vue'
// import AboutViewVue from './views/AboutView.vue'
// import PaperDashboard from "./plugins/paperDashboard";
import './index.css'

// Vue.use(PaperDashboard);
const app = createApp(App)

app.use(router)

app.mount('#app')
