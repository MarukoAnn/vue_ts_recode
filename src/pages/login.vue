<template>
	<div class="container py-8 px-8 p-5px">
		<div class="login">这里 是登陆</div>
		<button @click="btnAdd" class="w-10 border-dark-900 border radius">按钮</button>
	</div>
</template>
<script setup lang="ts">
import { login } from '@/apis/login';
import { onMounted } from 'vue';
import { mainStore } from '@/store/store';
const store = mainStore();

onMounted(()=> {
	login().then((res)=> {
		console.log(res)
	})
	// store.count ++
	console.log(store.count)
	// store.$patch({ count: store.count + 1 })
	store.increment()
})
const btnAdd = (): void => {
	store.increment()
	console.log(store.count)
}
</script>
<style lang="scss" scoped>
$text-name: 22px;
.container {
	background: salmon;
	// height: 200px;
	.login {

		font-size:$text-name;
	}
}
</style>
