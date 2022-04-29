import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', {
  state: () => {
    return {
      isMenuClosed: false // 导航是否收缩
    }
  },
  actions: {
    setMenuClosed(state: boolean) {
      this.isMenuClosed = state
    }
  }
})
