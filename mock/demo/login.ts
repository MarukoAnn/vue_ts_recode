import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'POST',
    response: () => {
      return {
        code: 401,
        data: {
          name: 'vben'
        }
      }
    }
  }
] as MockMethod[]
