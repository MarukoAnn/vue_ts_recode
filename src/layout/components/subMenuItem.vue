<template>
	<template v-for="item in menuData" :key="item.key">
	<el-sub-menu v-if="item?.children.length > 0" :index="item.key">
		<template #title>
		<el-icon><home-filled /></el-icon>
		<span>{{ item.label }}</span>
		</template>
		<subMenuItem :menuData="item?.children" />
		<!-- <el-menu-item v-for="v_item in item?.children" :key="v_item.key" :index="v_item.key">{{
		v_item.label
		}}</el-menu-item> -->
	</el-sub-menu>
	<el-menu-item v-else :index="item.key">
		<el-icon>
		<fold />
		</el-icon>
		<template #title>{{ item.label }}</template>
	</el-menu-item>
	</template>
</template>
<script setup lang="ts">
  const { menuData } = defineProps(['menuData'])
  console.log(menuData, 'props')
</script>
