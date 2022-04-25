import { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
		ignore: /^\_/,
        localEnabled: command === 'serve',
		injectCode: `
		import { setupProdMockServer } from './mockProdServer';
		setupProdMockServer();
	  `
      }),
	  WindiCSS()
    ]
  }
}
