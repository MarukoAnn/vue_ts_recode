// import { vue } from 'vue'
import { menuStore } from '@/store/module/menu'
import { mainStore } from '@/store/module/main'
import { useUserStore } from '@/store/module/user'

const useStore = () => {
  const menuStores = menuStore()
  const mainStores = mainStore()
  const userStore = useUserStore()
  return {
    menuStores,
    mainStores,
    userStore
  }
}
export default useStore
