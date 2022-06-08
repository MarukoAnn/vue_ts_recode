import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      // 这里除了引入 vue 以外还可以引入pinia、vue-router、vueuse等，
      // 甚至你还可以使用自定义的配置规则，见 https://github.com/antfu/unplugin-auto-import#configuration
      imports: ['vue'],
      // 第三方组件库的解析器
      resolvers: [ElementPlusResolver()],
      dts: './src/auto-imports.d.ts',
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入
      extensions: ['vue', 'md'],
      // 解析的 UI 组件库，这里以 Element Plus 为例
      resolvers: [ElementPlusResolver()],
      dts: './src/components.d.ts'
    }),
    PkgConfig(),
    OptimizationPersist()
  ],
  resolve: {
    alias: {
      '@': path.join(path.resolve(__dirname), './src'),
      components: '@/components'
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://api.moonshinean.com/', // 代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
        // rewrite: (a: string) => a.replace(/^\/api/, '')
      }
    }
  }
})
