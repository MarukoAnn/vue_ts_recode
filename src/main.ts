import 'virtual:windi.css'
import '@/assets/style/common.scss'
import { createApp } from 'vue'
import App from './App.vue'
// import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index'
import { setupStore } from '@/store'
import { Toast } from '@/utils'
const setupVue = () => {
  const app = createApp(App)
  setupStore(app)
  app.use(router)
  app.use(ElementPlus)
  app.config.globalProperties.$toast = Toast
  app.mount('#app')
}
setupVue()
