import { defineStore } from 'pinia'
import { LoginFromData } from '@/module/login/login'

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      info: {},
      token: ''
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
    },
    setToken(data: string) {
      this.token = data
    }
  }
})
