export interface LoginFromData {
  password: string
  username: string
  rememberPsw: boolean
}

export interface LoginState {
  ruleForm: LoginFromData
}
