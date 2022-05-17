<template>
  <div>
    <el-button type="primary" :icon="Edit" @click="dialogFormVisible = true">增加</el-button>
    <el-table :data="filterTableData" style="width: 100%" height="500">
      <el-table-column label="Name" fixed prop="name" />
      <el-table-column label="Date" prop="date" />
      <el-table-column label="Account" prop="account" />
      <el-table-column label="Password">
        <template #default="scope">
          <el-input
            v-model="scope.row.password"
            size="small"
            v-if="scope.row.isEdit"
            @blur="getBlur(scope.$index, scope.row)"
            @change="changeClick(scope.$index, scope.row.password)"
          />
          <span v-else>{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="HeadImg" prop="headImg">
        <template #default="scope">
          <img class="headImg" :src="scope.row.headImg" />
        </template>
      </el-table-column>
      <el-table-column fixed="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog v-model="dialogFormVisible" title="请输入管理员信息">
      <el-form :model="form">
        <el-form-item label="date" :label-width="formLabelWidth">
          <div class="block">
            <!-- 时间选择器 -->
            <el-date-picker
              v-model="value1"
              @change="selectDate"
              type="datetime"
              placeholder="Select date and time"
            />
          </div>
        </el-form-item>
        <el-form-item label="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off" />
        </el-form-item>
        <el-form-item label="account" :label-width="formLabelWidth">
          <el-input v-model="form.account" autocomplete="off" />
        </el-form-item>
        <el-form-item label="password" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" />
        </el-form-item>
        <!-- 上传图片 -->
        <el-form-item label="headImg" :label-width="formLabelWidth">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :on-change="changeImg"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :limit="1"
          >
            <el-icon><Plus /></el-icon>
          </el-upload>
          <el-dialog v-model="dialogVisible">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
          </el-dialog>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="confirmInfo" :plain="true">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
    <div class="style_bg">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :small="small"
        :disabled="disabled1"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed, onMounted, h } from 'vue'
  import { userInfoData } from '@/model/user/userInfo'
  import { Delete, Download, Plus, ZoomIn, Edit } from '@element-plus/icons-vue'
  import type { UploadFile } from 'element-plus'
  import { ElMessage } from 'element-plus'

  const search = ref('')
  const tableData = reactive<userInfoData[]>([
    {
      date: 1652338605000,
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      account: 11111,
      password: 12312,
      headImg: 'https://ruqi-img.ruqimobility.com/pic_image/20220428025113__NB3F4TPF.png'
    },
    {
      date: 1652338605000,
      name: '小二',
      address: '上海市普陀区金沙江路 1517 弄',
      account: 11111,
      password: 12312,
      headImg: 'https://ruqi-img.ruqimobility.com/pic_image/20220428025113__NB3F4TPF.png'
    },
    {
      date: 1652338605000,
      name: '消息',
      address: '上海市普陀区金沙江路 1519 弄',
      account: 11111,
      password: 12312,
      headImg: 'https://ruqi-img.ruqimobility.com/pic_image/20220428025113__NB3F4TPF.png'
    },
    {
      date: 1652338605000,
      name: '哈哈哈',
      address: '上海市普陀区金沙江路 1519 弄',
      account: 11111,
      password: 12312,
      headImg: 'https://ruqi-img.ruqimobility.com/pic_image/20220428025113__NB3F4TPF.png'
    },
    {
      date: 1652338605000,
      name: '你好',
      address: '上海市普陀区金沙江路 1519 弄',
      account: 11111,
      password: 12312,
      headImg: 'https://ruqi-img.ruqimobility.com/pic_image/20220428025113__NB3F4TPF.png'
    }
  ])
  let dialogFormVisible = ref(false)
  let form = reactive<userInfoData[]>({
    date: 0,
    name: '',
    address: '',
    account: 0,
    password: 0,
    headImg: ''
  })
  const formLabelWidth = '140px'
  const value1 = ref('')
  const currentPage = ref(1)
  const pageSize = ref(10)
  const small = ref(false)
  const background = ref(true)
  const disabled1 = ref(false)

  onMounted(() => {
    tableData.forEach((ele, index) => {
      ele.isEdit = false
      ele.date = conversionTime(ele.date)
    })
  })
  const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

  const filterTableData = computed(() =>
    tableData.filter(
      (data: any) => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  const handleEdit = (index: number, row: userInfoData) => {
    tableData[index].isEdit = true
  }
  const getBlur = (index: number, row: userInfoData) => {
    tableData[index].isEdit = false
  }
  const handleDelete = (index: number, row: userInfoData) => {
    console.log(index, row)
    tableData.splice(index, 1)
  }

  const changeClick = (index: number, value: string | number) => {
    tableData[index].password = value
  }

  const dialogImageUrl = ref('')
  const dialogVisible = ref(false)
  const disabled = ref(false)
  const file = ref('')
  // 删除图片
  const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
  }
  // 图片放大
  const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
    dialogVisible.value = true
  }
  // 改变图片
  const changeImg = (uploadFile: UploadFile) => {
    file.value = uploadFile.url
  }

  // 添加按钮，提交信息
  const confirmInfo = () => {
    if (!form.name) {
      ElMessage({
        message: '姓名不能为空！',
        type: 'warning'
      })
      return
    }
    if (!form.account) {
      ElMessage({
        message: '账号不能为空！',
        type: 'warning'
      })
      return
    }
    if (!form.password) {
      ElMessage({
        message: '密码不能为空！',
        type: 'warning'
      })
      return
    }
    dialogFormVisible.value = false
    form.date = conversionTime(dataTime.value)
    form.headImg = file.value
    tableData.unshift(form)
    let obj = {
      date: 0,
      name: '',
      address: '',
      account: 0,
      password: 0,
      headImg: ''
    }
    form = obj
    console.log('form:', form)
  }
  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
  }
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
  }
  const dataTime = ref(0)
  const selectDate = (value: number) => {
    console.log()
    dataTime.value = Date.parse(value)
  }
  const conversionTime = (val: number) => {
    let timdedetail = val
    let year = new Date(timdedetail).getFullYear()
    let month = new Date(timdedetail).getMonth() + 1
    let date = new Date(timdedetail).getDate()
    let hours = new Date(timdedetail).getHours()
    let minutes = new Date(timdedetail).getMinutes()
    let seconds = new Date(timdedetail).getSeconds()
    hours = hours >= 9 ? hours : '0' + hours
    minutes = minutes >= 9 ? minutes : '0' + minutes
    seconds = seconds >= 9 ? seconds : '0' + seconds
    let time = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
    return time
  }
</script>

<style>
  .headImg {
    width: 100px;
    height: 100px;
  }
  .demo-pagination-block + .demo-pagination-block {
    margin-top: 10px;
  }
  .demo-pagination-block .demonstration {
    margin-bottom: 16px;
  }
  .style_bg {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
</style>
