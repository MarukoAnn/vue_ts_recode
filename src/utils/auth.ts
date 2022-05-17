const getBaseUrl = (): string => {
  return import.meta.env.VITE_BASE_API
}

const getToken = (): string => {
  return 'xxx'
}

export default {
  getBaseUrl,
  getToken
}
