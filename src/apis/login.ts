import httpService, { IDataWithError } from '@/utils/http/axios'

export function login(param: any = {}): Promise<IDataWithError<any>> {
  return httpService.post('/api/login', param)
}
