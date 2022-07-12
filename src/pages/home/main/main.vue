<template>
  <div>这里是main</div>
</template>
<script setup lang="ts">
import { hello } from '@/apis/login'
import { IDataWithError } from '@/utils/http/axios'
hello({}).then((res: IDataWithError<null>) => {
  console.log(res)
})
</script>
