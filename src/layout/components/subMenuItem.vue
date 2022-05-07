<template>
  <template v-for="item in menuData" :key="item.name">
    <el-sub-menu v-if="item?.children?.length > 0" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item?.meta?.icon" />
        </el-icon>
        <span>{{ item?.meta?.label }}</span>
      </template>
      <subMenuItem :menuData="item?.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" :route="item.path">
      <el-icon>
        <component :is="item?.meta?.icon" />
      </el-icon>
      <template #title>{{ item?.meta?.label }}</template>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
  import { onMounted, watch } from 'vue'
  const { menuData } = defineProps(['menuData'])
</script>
