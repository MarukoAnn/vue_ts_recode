import type { App } from 'vue'
import piniaPersist from 'pinia-plugin-persist'

import { createPinia } from 'pinia'

const store = createPinia()
store.use(piniaPersist)
export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
