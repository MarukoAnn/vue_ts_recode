// 1、引入创建路由所需要的组件
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

// 2、配置系统所有路由页面
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue')
  }
]

// 3、创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式
  routes
})
export default router
