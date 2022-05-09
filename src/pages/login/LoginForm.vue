<template>
  <el-form ref="loginform" :model="ruleForm" label-width="60px" class="w-full text-center">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" show-password />
    </el-form-item>
    <el-form-item label="" prop="rememberPsw">
      <el-checkbox v-model="ruleForm.rememberPsw">记住我</el-checkbox>
    </el-form-item>
    <el-form-item label="" prop="password">
      <el-button class="w-full" type="primary" @click="btnClick">登 陆</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
  import { reactive, getCurrentInstance, onMounted, toRefs } from 'vue'
  import { LoginFromData } from '@/model/login/login'
  import { login } from '@/apis/login'
  import { IDataWithError } from '@/utils/http/axios'
  import { useRouter } from 'vue-router'
  import useStore from '@/hooks/useStoreHook'
  const ruleForm = reactive<LoginFromData>({
    password: '',
    username: '',
    rememberPsw: false
  })
  const app = getCurrentInstance()!.appContext.config.globalProperties
  const router = useRouter()
  const userStore = useStore()
  onMounted(() => {
    console.log('userStore.info', userStore.info)
    if (userStore.info?.rememberPsw) {
      ruleForm.username = userStore.info?.username
      ruleForm.password = userStore.info?.password
      ruleForm.rememberPsw = userStore.info?.rememberPsw
    }
  })

  const btnClick = (): void => {
    console.log(ruleForm.username, 'ruleForm')
    if (ruleForm.username == 'admin' && ruleForm.password == '123456') {
      login(ruleForm).then((res: IDataWithError<null>) => {
        console.log(res)
        if (res.code === 200) {
          app.$toast('success', '登陆成功')
          userStore.setUserInfo(ruleForm)
          router.push({ path: '/home/main' })
        }
      })
    } else {
      app.$toast('error', '用户名密码错误')
    }
  }
</script>
<style scoped lang="scss">
  :deep(.el-form-item) {
    margin-bottom: 40px;
  }
</style>
