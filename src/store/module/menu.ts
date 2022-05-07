import { defineStore } from 'pinia'
import { TabMenu } from '@/model/home/menu'

export const menuStore = defineStore('menu', {
  state: () => {
    return {
      isMenuClosed: false, // 导航是否收缩
      tabMenu: []
    }
  },
  actions: {
    setMenuClosed(state: boolean) {
      this.isMenuClosed = state
    },
    setTabMenuData(state: TabMenu) {
      this.tabMenu.push(state)
    }
  }
})
