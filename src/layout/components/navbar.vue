<template>
  <div class="w-full h-full items-center flex header justify-between">
    <div class="h-full items-center flex">
      <el-icon class="ml-2" :size="40" @click="iconClick">
        <component :is="menuStores.isMenuClosed ? 'fold' : 'expand'" />
      </el-icon>
      <div class="bread ml-2 text-xl">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in breadData" :key="index">
            {{ item }}</el-breadcrumb-item
          >
        </el-breadcrumb>
      </div>
    </div>
    <div class="mr-4 flex items-center">
      <el-icon class="mr-4" @click="ampClick">
        <component is="font-awesome-icon" :icon="fullScreen ? 'compress-alt' : 'expand-alt'" />
      </el-icon>
      <el-popover trigger="click" title="" persistent>
        <template #reference>
          <el-avatar
            src="https://img0.baidu.com/it/u=891142421,1145971492&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          />
        </template>
        <div class="h-8 w-full center login-out" @click="logoutClick"> 退出登陆 </div>
      </el-popover>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import useStore from '@/hooks/useStoreHook'
  import { useRouter } from 'vue-router'
  import { tabMenu } from '@/model/home/menu'
  const { menuStores } = useStore()
  const router = useRouter()
  const routerList = ref<any>([])
  const breadData = ref<string[]>([])
  const fullScreen = ref<boolean>(false)
  onMounted(() => {
    routerList.value = router.getRoutes().find((val) => val.name == 'Home')
    setBreadData(menuStores.tabMenu)
  })
  const menuSub = menuStores.$subscribe((mutation: any, state: any) => {
    breadData.value = []
    setBreadData(state.tabMenu)
  })
  const setBreadData = (menuArr: tabMenu): void => {
    let routeArr = menuArr.find((res: any) => res.isActive).path.split('/')
    let routeFilter = routeArr.filter((val: string) => val !== '' && val !== 'home')
    deepForRouteLabel(routerList.value.children, 0, routeFilter)
  }
  // 递归循环
  const deepForRouteLabel = (routerList: any, index: number, arr: string[]) => {
    routerList.forEach((val: any) => {
      if (index > arr.length - 1) {
        return
      }
      let list = val.path.split('/')
      if (list[list.length - 1] == arr[index]) {
        breadData.value.push(val?.meta?.label)
        if (val.children?.length > 0) {
          index++
          deepForRouteLabel(val.children, index, arr)
        }
      }
    })
  }
  const iconClick = (): void => {
    menuStores.setMenuClosed(!menuStores.isMenuClosed)
  }
  const logoutClick = (): void => {
    //   menuStore.resetTabMenuStatus
    router.push('/login')
  }
  const ampClick = (): void => {
    let element = document.documentElement
    if (fullScreen.value) {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document?.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    }
    fullScreen.value = !fullScreen.value
  }
</script>
<style lang="scss" scoped>
  .header {
    box-shadow: 0px 0px 4px #ccc;
    .login-out:hover {
      background-color: skyblue;
    }
  }
</style>
