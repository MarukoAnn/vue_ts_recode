import type { App } from 'vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default function elementPlusIcons(app: App<Element>) {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
