export interface LoginFromData {
  date: number,
  username: string
  rememberPsw: boolean
  account: number,
  password: number,
  headImg: string
}

export interface LoginState {
  ruleForm: LoginFromData
}
