<template>
  <div class="w-full h-screen bg-deepblue">
    <div class="w-full h-16 bg-deepblue flex items-center text-2xl text-light-500 ml-4">
      <img src="https://windicss.org/assets/logo.svg" style="width: 45px; height: 45px" alt="" />
      <div v-if="!menuStores.isMenuClosed">vueAdmin</div>
    </div>
    <el-menu
      default-active="2"
      background-color="#324157"
      text-color="#fff"
      class="el-menu-vertical-demo"
      :collapse="menuStores.isMenuClosed"
      @open="handleOpen"
      @close="handleClose"
    >
      <subMenuItem :menuData="MenuData" />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import { menuStore } from '@/store/module/menu'
  import subMenuItem from './subMenuItem.vue'
  const MenuData = ref([
    {
      label: '首页',
      router: '/home/main',
      icon: '',
      children: [
        { label: '基础表格', router: '/home/table', icon: '', children: [
			{ label: '表单', router: '/home/form', icon: '', children: [], key: 'form' }
		], key: 'table' }
      ],
      key: 'home'
    },
    { label: '基础表格', router: '/home/table', icon: '', children: [], key: 'table' },
    { label: 'tab选项卡', router: '/home/tab', icon: '', children: [], key: 'tab' },
    { label: '表单', router: '/home/form', icon: '', children: [], key: 'form' }
  ])
  const menuStores = menuStore()
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
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
