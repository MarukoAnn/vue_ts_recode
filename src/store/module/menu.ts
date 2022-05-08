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
      this.resetTabMenuStatus()
      let flag = this.tabMenu.some((val) => val.name === state.name)
      if (!flag) {
        this.tabMenu.push(state)
      } else {
        this.tabMenu.forEach((val: { isActive: boolean }) => {
          if (val.name === state.name) {
            val.isActive = true
          }
        })
      }
    },
    removeTabMenuData(state: TabMenu) {
      let index = this.tabMenu.reduce((acc, curr, index) => {
        if (curr.name === state.name) {
          acc = index
        }
        return acc
      }, 0)
      if (this.tabMenu[index].isActive && this.tabMenu.length > 1) {
		  if(index - 1 >= 0){
			this.tabMenu[index - 1].isActive = true
		  }else{
			this.tabMenu[index + 1].isActive = true
		  }

      }
      this.tabMenu.splice(index, 1);
	  if(this.tabMenu.length == 0) {
		this.tabMenu.push({name: '首页', path: '/home/main', isActive: true})
	  }
    },
    resetTabMenuStatus(state: TabMenu) {
      this.tabMenu.forEach((val: { isActive: boolean }) => {
        val.isActive = false
      })
    }
  }
})
