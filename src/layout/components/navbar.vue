<template>
  <div class="w-full h-full bg-indigo-500/50 items-center flex">
    <!-- <font-awesome-icon icon="bars" /> -->
    <div @click="iconClick">
      <el-icon :size="40" v-if="menuStores.isMenuClosed">
        <fold />
      </el-icon>
	  <el-icon :size="40" v-else>
        <expand />
      </el-icon>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { menuStore } from '@/store/module/menu'
  const menuStores = menuStore()
  const iconClick = (): void => {
	menuStores.setMenuClosed(!menuStores.isMenuClosed)
	console.log(menuStores.isMenuClosed, 'menuStores.isMenuClosed')
    // updateIsClose(!menuStores.isMenuClosed)
  }
</script>
