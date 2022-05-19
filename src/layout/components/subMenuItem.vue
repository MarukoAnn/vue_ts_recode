<template>
  <template v-for="item in menuData" :key="item.name">
    <el-sub-menu v-if="item?.children?.length > 0" :index="item.path">
      <template #title>
        <el-icon v-if="item?.meta?.icon">
          <component :is="'font-awesome-icon'" :icon="item?.meta?.icon" />
        </el-icon>
        <span>{{ item?.meta?.label }}</span>
      </template>
      <subMenuItem :menuData="item?.children" @select="selectItem" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" :route="item.path" @click="selectItem(item)">
      <el-icon v-if="item?.meta?.icon">
        <component :is="'font-awesome-icon'" :icon="item?.meta?.icon" />
      </el-icon>
      <template #title>{{ item?.meta?.label }}</template>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
//   import console from 'console';
import { defineProps, defineEmits } from 'vue'

defineProps({
  menuData: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['select'])
const selectItem = (item: any): void => {
  emit('select', item)
}
</script>
