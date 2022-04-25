const getBaseUrl = (): string => {
  return import.meta.env.API_BASE_URL
}

const getToken = (): string => {
  return 'xxx'
}

export default {
  getBaseUrl,
  getToken
}
