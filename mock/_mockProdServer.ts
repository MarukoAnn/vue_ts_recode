import { createProdMockService } from 'vite-plugin-mock/es/createProdMockServer'

//  逐一导入您的mock.ts文件
//  如果使用 vite.mock.config.ts, 只需要导入文件
// 可以使用import.meta.glob 功能来进行全局导入
const modules = import.meta.globEager('./**/*.ts')

const mockModules: any[] = []

Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
	createProdMockService(mockModules)
}
