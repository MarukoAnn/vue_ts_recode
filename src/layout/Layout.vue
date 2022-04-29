<template>
  <div class="w-screen">
    <el-container>
      <el-aside :width="tabWidth" class="shadow-xl shadow-gray-500" style="box-sizing: border-box; overflow: hidden; transition: width 0.5s ease-in-out">
        <sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <navbar />
        </el-header>
        <tabsview />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import { watch, ref } from 'vue'
  import sidebar from './components/sidebar.vue'
  import navbar from './components/navbar.vue'
  import tabsview from './components/tabsview.vue'
  import { menuStore } from '@/store/module/menu'
  const menuStores = menuStore()
  const tabWidth = ref<string>('200px')

  const subscribe = menuStores.$subscribe((mutation: any, state: any) => {
	  console.log('state', state)
    tabWidth.value = state?.isMenuClosed ? '64px' : '200px'
  })
</script>
<style lang="scss" scoped>
  :deep(.el-header) {
    padding: 0;
  }
</style>
