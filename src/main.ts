import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'
// import { createPinia } from 'pinia'
import router from '@/router/index'
import { setupStore } from '@/store'
const setupVue = () => {
  const app = createApp(App)
  setupStore(app)
  app.use(router)
  // app.use(pinia)
  app.mount('#app')
}
setupVue()
