<template>
  <div class="w-full h-8 shadow-md">
    <scrollPane>
      <div class="h-8 flex items-center w-full">
        <el-tag
          v-for="tag in tabStore.tabMenu"
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
import { ref, onBeforeMount } from 'vue'
import { TabMenu } from '@/model/home/menu'
import scrollPane from '@/components/ScrollPane.vue'
import { menuStore } from '@/store/module/menu'
import { useRouter } from 'vue-router'
const router = useRouter()
const tabStore = menuStore()
onBeforeMount(() => {
	if(tabStore.tabMenu.length === 0) {
		tabStore.setTabMenuData({name: '首页', path: '/home/main', isActive: true})
	}
})
const handleClose = (tag: TabMenu): void => {
  tabStore.removeTabMenuData(tag)
  console.log('tabStore.tabMenu', tabStore.tabMenu)
  let routeObj = tabStore.tabMenu.find((val) => val.isActive)
  router.push(routeObj.path)
}
const handleClick = (tag: TabMenu): void => {
  tabStore.resetTabMenuStatus()
  tag.isActive = true
  router.push(tag.path)
}
</script>
