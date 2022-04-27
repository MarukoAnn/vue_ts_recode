import { ElMessage } from 'element-plus'

export function Toast(type: string | any, message: string, isClose = true) {
  return ElMessage({
    showClose: isClose,
    message: message,
    type: type
  })
}
