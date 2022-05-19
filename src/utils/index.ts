import { ElMessage } from 'element-plus'

export default function Toast(type: string | any, message: string, isClose = true) {
  return ElMessage({
    showClose: isClose,
    message,
    type
  })
}
