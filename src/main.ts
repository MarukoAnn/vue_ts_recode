import 'virtual:windi.css'
import '@/assets/style/common.scss'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index'
import { setupStore } from '@/store'
import elementPlusIcons from '@/utils/setup/elementPlusIcon'
import Toast from '@/utils'
import fontAwesomeIcon from './utils/setup/fontAwsome'
import App from './App.vue'

const setupVue = () => {
  const app = createApp(App)
  // 配置pinia
  setupStore(app)

  app.use(router)

  app.use(ElementPlus)

  // 配置elementPlus图标
  elementPlusIcons(app)

  // 配置fontAwesome图标
  fontAwesomeIcon(app)

  app.config.globalProperties.$toast = Toast
  app.mount('#app')
}
setupVue()
