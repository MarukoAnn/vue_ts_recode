<template>
  <div class="w-screen">
    <el-container>
      <el-aside width="200px" class="shadow-xl shadow-gray-500">
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
  import sidebar from './components/sidebar.vue'
  import navbar from './components/navbar.vue'
  import tabsview from './components/tabsview.vue'
</script>
<style lang="scss" scoped>
  :deep(.el-header) {
    padding: 0;
  }
</style>
