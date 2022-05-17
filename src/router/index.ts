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
        path: '/home/main',
        name: 'main',
        component: () => import('@/pages/home/main/main.vue'),
        meta: {
          label: '首页',
          icon: 'home'
        }
      },
      {
        path: '/home/table',
        name: 'table',
        component: () => import('@/pages/home/table/index.vue'),
        children: [
          {
            path: '/home/table/basic',
            name: 'basic',
            component: () => import('@/pages/home/table/basic/basic.vue'),
            children: [],
            meta: {
              label: '基础表格'
            }
          }
        ],
        meta: {
          label: '表格',
          icon: 'table'
        }
      },
      {
        path: '/home/tab',
        name: 'tab',
        component: () => import('@/pages/home/main/tab.vue'),
        meta: {
          label: 'tab选项卡',
          icon: 'bookmark'
        }
      },
      {
        path: '/home/form',
        name: 'form',
        component: () => import('@/pages/home/main/form.vue'),
        meta: {
          label: '表单',
          icon: 'list-alt'
        }
      },
      {
        path: '/user/userList',
        name: 'user',
        component: () => import('@/pages/user/userList.vue'),
        meta: {
          label: '用户信息',
          icon: 'list-alt'
        }
      }
    ],
    meta: {
      label: '首页'
    }
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
