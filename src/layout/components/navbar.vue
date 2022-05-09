<template>
  <div class="w-full h-full items-center flex header">
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
    <div class="">
		<el-icon>

		</el-icon>
	</div>
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { menuStore } from '@/store/module/menu'
  import { useRouter } from 'vue-router'
  import { tabMenu } from '@/model/home/menu'
  const menuStores = menuStore()
  const router = useRouter()
  const routerList = ref<any>([])
  const breadData = ref<string[]>([])
  onMounted(() => {
    routerList.value = router.getRoutes().find((val) => val.name == 'Home')
    setBreadData(menuStores.tabMenu)
  })
  const menuSub = menuStores.$subscribe((mutation: any, state: any) => {
    console.log(state, 'subscribe')
    console.log(' routerList.value ', routerList.value.children)
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
      console.log(val, 'val')
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
    console.log(menuStores.isMenuClosed, 'menuStores.isMenuClosed')
  }
</script>
<style lang="scss" scoped>
  .header {
    box-shadow: 0px 0px 4px #ccc;
  }
</style>
