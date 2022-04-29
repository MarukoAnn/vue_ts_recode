<template>
  <div class="w-full h-8 bg-green-500/50">
	<scrollPane>
		<div class="h-8 flex items-center w-full">
			  <el-tag
				v-for="tag in dynamicTags"
				:key="tag"
				class="mx-1"
				closable
				:disable-transitions="false"
				@close="handleClose(tag)"
			>
				{{ tag }}
  </el-tag>
		</div>
	</scrollPane>
  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import scrollPane from '@/components/ScrollPane.vue'
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}
</script>
