<template>
  <div class="login-content flex flex-col justify-center items-center pt-10 text-5xl w-screen">
    <div class="login">管理平台</div>
    <div
      class="form w-lg h-xd p-10 mt-10 rounded-1xl bg-indigo-50/50 flex justify-center shadow-lg"
    >
      <!-- <div class="login">管理平台</div> -->
      <LoginForm />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue'
  import LoginForm from './LoginForm.vue'
  onMounted(() => {})
</script>
<style lang="scss" scoped>
  .login-content {
    background: linear-gradient(850deg, salmon, #74e5fa);
    height: 100vh;
  }
</style>
