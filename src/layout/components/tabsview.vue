<template>
  <div class="w-full h-8 shadow-md">
    <scrollPane>
      <div class="h-8 flex items-center w-full">
        <el-tag
          v-for="tag in menuStores.tabMenu"
          :key="tag"
          class="mx-1"
          closable
          :type="tag.isActive ? '' : 'info'"
          :disable-transitions="false"
          @click="handleClick(tag)"
          @close="handleClose(tag)"
        >
          {{ tag.name }}
        </el-tag>
      </div>
    </scrollPane>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { TabMenu } from '@/model/home/menu'
import scrollPane from '@/components/ScrollPane.vue'
import useStore from '@/hooks/useStoreHook'
import { useRouter } from 'vue-router'

const router = useRouter()
const { menuStores } = useStore()
onBeforeMount(() => {
  if (menuStores.tabMenu.length === 0) {
    menuStores.setTabMenuData({ name: '首页', path: '/home/main', isActive: true })
  }
})
const handleClose = (tag: TabMenu): void => {
  menuStores.removeTabMenuData(tag)
  console.log('menuStores.tabMenu', menuStores.tabMenu)
  const routeObj = menuStores.tabMenu.find((val) => val.isActive)
  router.push(routeObj.path)
}
const handleClick = (tag: TabMenu): void => {
  menuStores.resetTabMenuStatus()
  tag.isActive = true
  router.push(tag.path)
}
</script>
