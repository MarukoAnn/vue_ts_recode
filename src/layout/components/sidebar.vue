<template>
  <div class="w-full h-screen bg-deepblue">
    <div class="w-full h-16 bg-deepblue flex items-center text-2xl text-light-500 ml-4">
      <img src="https://windicss.org/assets/logo.svg" style="width: 45px; height: 45px" alt="" />
      <div v-if="!menuStores.isMenuClosed">vueAdmin</div>
    </div>
    <el-menu
      :default-active="route.path"
      background-color="#324157"
      text-color="#fff"
      class="el-menu-vertical-demo"
      :collapse="menuStores.isMenuClosed"
      @close="handleClose"
      :router="true"
    >
      <subMenuItem :menuData="MenuData" @select="handleSelect"/>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted, onBeforeMount } from 'vue'
  import { menuStore } from '@/store/module/menu'
  import { useRouter, useRoute } from 'vue-router'
  import subMenuItem from './subMenuItem.vue'
  const router = useRouter()
  const route = useRoute()
  const MenuData = ref([])
  const menuStores = menuStore()
  onBeforeMount(() => {
    console.log(route.name)
    let routeList: any = router.getRoutes().find((val) => val.name == 'Home')
    MenuData.value = routeList?.children;
  })
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleSelect = (item: any) => {
    console.log(item, 'select')
    let obj = { name: item.meta.label, path: item.path, isActive: true }
	menuStores.setTabMenuData(obj)
  }
</script>
<style lang="scss" scoped>
  .el-menu-vertical-demo {
    border-color: #324157;
  }

  :deep(.is-active) {
    // background: #fff
  }
</style>
