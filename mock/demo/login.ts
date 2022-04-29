import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'POST',
    response: () => {
      return {
        code: 200,
        data: null,
        msg: '登陆成功'
      }
    }
  }
] as unknown as MockMethod[]
