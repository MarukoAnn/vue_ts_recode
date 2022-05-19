<template>
  <div class="w-screen">
    <el-container>
      <el-aside
        :width="tabWidth"
        class="shadow-md shadow-gray-500"
        style="box-sizing: border-box; overflow: hidden; transition: width 0.5s ease-in-out"
      >
        <sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <navBar />
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
import { watch, ref, onBeforeMount } from 'vue'
import { menuStore } from '@/store/module/menu'
import sidebar from './components/sidebar.vue'
import navBar from './components/navbar.vue'
import tabsview from './components/tabsview.vue'

const menuStores = menuStore()
const tabWidth = ref<string>('200px')
onBeforeMount(() => {
  tabWidth.value = menuStores?.isMenuClosed ? '64px' : '200px'
})
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
