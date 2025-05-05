import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainMenu from './components/MainMenu.vue'
import SoupPage from './components/SoupPage.vue'
import './style.css'

const routes = [
  { path: '/', component: MainMenu },
  { path: '/soup/:id', component: SoupPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')