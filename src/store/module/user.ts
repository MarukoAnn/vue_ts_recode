import { defineStore } from 'pinia'
import { LoginFromData } from '@/module/login/login'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      info: {}
    }
  },
  //  数据持久化
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }]
  },
  actions: {
    setUserInfo(data: LoginFromData) {
      console.log(data)
      this.info = data
    }
  }
})
