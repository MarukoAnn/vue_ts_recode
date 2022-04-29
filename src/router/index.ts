// 1、引入创建路由所需要的组件
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

// 2、配置系统所有路由页面
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/home.vue'),
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/pages/home/main/main.vue')
      },
	  {
        path: 'table',
        name: 'table',
        component: () => import('@/pages/home/main/table.vue')
      },
	  {
        path: 'tab',
        name: 'tab',
        component: () => import('@/pages/home/main/tab.vue')
      },
	  {
        path: 'form',
        name: 'form',
        component: () => import('@/pages/home/main/form.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/Login.vue')
  }
]

// 3、创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式
  routes
})
export default router
