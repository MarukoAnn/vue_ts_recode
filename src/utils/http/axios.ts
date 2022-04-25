import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios'
import axiosRetry from 'axios-retry'
import authUtils from '@/utils/auth'
import route from '@/router/index'
// // 环境的切换
// axios.defaults.baseURL = import.meta.env.API_BASE_URL

export interface IDataWithError<T> {
  data: T
  code: number
  msg: string
}

// axios.defaults.timeout = 3000

class HttpService {
  private http!: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: authUtils.getBaseUrl(),
      timeout: 600000
    })
    axiosRetry(this.http, {
      retries: 3, // 失败重试的次数
      shouldResetTimeout: true, // 定义是否在重试之间重置超时
      // 重复请求延时
      retryDelay: (retryCount: number) => {
        return retryCount * 1000
      },
      retryCondition: (error: AxiosError) => {
        if (error.message.includes('Timeout')) {
          return true
        }
        return !error.response || error.response.status !== 401
      }
    })
    this.addInterceptors(this.http)
  }

  private addInterceptors(http: AxiosInstance) {
    //  1、拦截请求
    http.interceptors.request.use((config) => {
      // 1、添加token
      const token = authUtils.getToken()
      //  获取token后做啥
      if (token) {
        // config!.headers['test'] = 'xxx'
      }
      // 2、验证请求状态码
      // eslint-disable-next-line no-param-reassign
      config.validateStatus = (status: number) => {
        switch (status) {
          case 401:
            // const instance = alert('用户信息过期, 请重新登陆')
            setTimeout(() => {
              //   instance.close()
            	route.push('/login')
            }, 1000)
            break
          default:
            console.warn('Invalid status')
            break
        }
        return status >= 200 && status < 400
      }
      return config
    })
    // 2、相应拦截
    http.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  private async handleErrorWrapper<T>(p: AxiosPromise): Promise<IDataWithError<T>> {
    return p
      .then((response) => {
        return response.data
      })
      .catch((error: AxiosError) => {
        return { ...error.request?.data }
      })
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.get(url, config))
  }

  post<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.post(url, param, config))
  }

  postDownload<T>(url: string, param: unknown) {
    return this.handleErrorWrapper<T>(this.http.post(url, param, { responseType: 'arraybuffer' }))
  }

  put<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.put(url, param, config))
  }

  delete<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.delete(url, { data: param, ...config }))
  }
}

// eslint-disable-next-line import/prefer-default-export
const httpService = new HttpService()

export default httpService
