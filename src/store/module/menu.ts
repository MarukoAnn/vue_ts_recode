import { defineStore } from 'pinia'
import { TabMenu } from '@/model/home/menu'

// eslint-disable-next-line import/prefer-default-export
export const menuStore = defineStore('menu', {
  state: () => {
    return {
      isMenuClosed: false, // 导航是否收缩
      tabMenu: []
    }
  },
  //  数据持久化
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage, paths: ['tabMenu', 'isMenuClosed'] }]
  },
  actions: {
    setMenuClosed(state: boolean) {
      this.isMenuClosed = state
    },
    setTabMenuData(state: TabMenu) {
      this.resetTabMenuStatus()
      const flag = this.tabMenu.some((value) => value.name === state.name)
      if (!flag) {
        this.tabMenu.push(state)
      } else {
        this.tabMenu.forEach((value: { isActive: boolean }) => {
          if (value.name === state.name) {
            value.isActive = true
          }
        })
      }
    },
    removeTabMenuData(state: TabMenu) {
      const index = this.tabMenu.reduce((account, curr, flag) => {
        if (curr.name === state.name) {
          account = flag
        }
        return account
      }, 0)
      if (this.tabMenu[index].isActive && this.tabMenu.length > 1) {
        if (index - 1 >= 0) {
          this.tabMenu[index - 1].isActive = true
        } else {
          this.tabMenu[index + 1].isActive = true
        }
      }
      this.tabMenu.splice(index, 1)
      if (this.tabMenu.length === 0) {
        this.tabMenu.push({ name: '首页', path: '/home/main', isActive: true })
      }
    },
    resetTabMenuStatus() {
      this.tabMenu.forEach((val: { isActive: boolean }) => {
        val.isActive = false
      })
    }
  }
})
