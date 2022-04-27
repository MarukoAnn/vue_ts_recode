import { defineStore } from "pinia"

/**
 *1、 定义容器并导出
 *  */

const getters = (): any => {

}
// 类似组件的 methods, 封装业务逻辑, 修改state
// 注意: 里面的函数不能定义成箭头函数(函数体中会用到this)
const actions = (): any => {
	return {
		increment() {
			this.count ++
		  },
	}
}

export const mainStore = defineStore('main', {
	state: () => {
		return {
			count: 100,
			name: 'zhangsan'
		}
	},
	actions: actions()
})
